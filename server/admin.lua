-- ============================================================================
-- ILLENIUM-APPEARANCE - ADMIN INTEGRATION (mri_Qadmin Plugin)
-- Distrito Paulista · Vanguard Ecosystem Standard (vanguard_lib)
-- ============================================================================

local function response(ok, code, message, data)
    local res = {
        ok = ok == true,
        code = tostring(code or (ok and "ok" or "error")),
        message = tostring(message or (ok and "Operação concluída." or "A operação não pôde ser concluída."))
    }
    if data ~= nil then
        res.data = data
    end
    return res
end

local function trim(val)
    if type(val) ~= "string" then return nil end
    return val:match("^%s*(.-)%s*$")
end

local function cleanString(val, maxLen, allowEmpty)
    local cleaned = trim(val)
    if cleaned == nil then return nil end
    if cleaned == "" then return allowEmpty and "" or nil end
    if #cleaned > (maxLen or 100) or cleaned:find("[%z\1-\31\127]") then return nil end
    return cleaned
end

local function finiteNumber(val, minVal, maxVal)
    local num = tonumber(val)
    if not num or num ~= num or num == math.huge or num == -math.huge then return nil end
    if minVal and num < minVal then return nil end
    if maxVal and num > maxVal then return nil end
    return num
end

local function normalizeCoords(coords, heading)
    if type(coords) ~= "table" then return nil end
    local x = finiteNumber(coords.x, -20000.0, 20000.0)
    local y = finiteNumber(coords.y, -20000.0, 20000.0)
    local z = finiteNumber(coords.z, -2000.0, 10000.0)
    if not x or not y or not z then return nil end
    local h = finiteNumber(heading ~= nil and heading or coords.heading or coords.h or 0.0, -3600.0, 3600.0)
    return {
        x = math.floor(x * 100 + 0.5) / 100,
        y = math.floor(y * 100 + 0.5) / 100,
        z = math.floor(z * 100 + 0.5) / 100,
        heading = h and (math.floor(h * 10 + 0.5) / 10 % 360.0) or 0.0
    }
end

local function revisionOf(records)
    local encoded = json.encode(records or {})
    local hash = 0
    for i = 1, #encoded do
        hash = (hash * 31 + string.byte(encoded, i)) % 4294967296
    end
    return string.format("%08x", hash)
end

local function logAdminAction(source, title, description, color, fields)
    if vanguard and vanguard.discord and vanguard.discord.log then
        local adminName = "Console / Sistema"
        local citizenId = "CONSOLE"
        local srcStr = tostring(source or 0)
        if source and source ~= 0 then
            adminName = (vanguard.player and vanguard.player.getName(source)) or GetPlayerName(source) or "Desconhecido"
            citizenId = (vanguard.player and vanguard.player.getCitizenId(source)) or "N/A"
        end
        vanguard.discord.log({
            channel = "admin",
            priority = "normal",
            embed = {
                title = "ADMIN APARÊNCIA · " .. title,
                description = description,
                color = color or 0x00e5ff,
                fields = fields or {},
                footer = {
                    text = string.format("Admin: %s (ID %s | %s) · illenium-appearance", adminName, srcStr, citizenId)
                }
            }
        })
    end
end

local function hasAppearancePermission(source)
    if not source or source == 0 then return true end
    if IsPlayerAceAllowed(source, 'qadmin.appearance')
        or IsPlayerAceAllowed(source, 'command')
        or IsPlayerAceAllowed(source, 'admin') then
        return true
    end
    if vanguard and vanguard.player and vanguard.player.isAdmin then
        local ok, isAdmin = pcall(vanguard.player.isAdmin, source)
        if ok and isAdmin then return true end
    end
    local ok, hasPerm = pcall(function()
        return exports.qbx_core:HasPermission(source, 'admin') or exports.qbx_core:HasPermission(source, 'god')
    end)
    if ok and hasPerm then return true end
    return false
end

-- ============================================================================
-- DATABASE & CACHE MANAGEMENT
-- ============================================================================

local currentStores = {}
local defaultTypeLabels = {
    clothing = "Loja de Roupas",
    barber = "Barbearia",
    tattoo = "Estúdio de Tatuagem",
    surgeon = "Cirurgião Plástico"
}

local function fetchStoresFromDb()
    local ok, rows = pcall(function()
        return MySQL.query.await([[
            SELECT id, x, y, z, heading, name, type, permission, show_blip
              FROM skinshops
             ORDER BY id ASC
        ]])
    end)
    if not ok then return nil, tostring(rows) end
    return rows or {}
end

local function normalizeStores(rows)
    local records = {}
    for _, row in ipairs(rows or {}) do
        local sType = row.type or "clothing"
        if sType == "skinshop" then sType = "clothing" end
        if sType == "barbershop" then sType = "barber" end
        if sType == "tattooshop" then sType = "tattoo" end

        local perm = cleanString(row.permission, 100, false)
        if perm == "false" or perm == "null" or perm == "" then perm = nil end

        records[#records + 1] = {
            id = tonumber(row.id),
            name = cleanString(row.name, 100, true) or defaultTypeLabels[sType] or "Loja",
            type = sType,
            x = math.floor((tonumber(row.x) or 0.0) * 100 + 0.5) / 100,
            y = math.floor((tonumber(row.y) or 0.0) * 100 + 0.5) / 100,
            z = math.floor((tonumber(row.z) or 0.0) * 100 + 0.5) / 100,
            heading = math.floor((tonumber(row.heading) or 0.0) * 10 + 0.5) / 10,
            permission = perm,
            showBlip = (tonumber(row.show_blip) == 1 or row.show_blip == true or row.show_blip == nil),
            label = cleanString(row.name, 100, true) or defaultTypeLabels[sType] or "Loja"
        }
    end
    return records
end

local function seedDefaultStoresIfEmpty()
    local ok, countResult = pcall(function()
        return MySQL.scalar.await("SELECT COUNT(*) FROM skinshops")
    end)
    if not ok then
        print("^1[illenium-appearance:admin] Erro ao consultar tabela skinshops: " .. tostring(countResult) .. "^7")
        return
    end

    if tonumber(countResult) == 0 and type(Config.Stores) == "table" and #Config.Stores > 0 then
        print("^3[illenium-appearance:admin] Tabela skinshops vazia. Importando " .. #Config.Stores .. " lojas padronizadas de Config.Stores...^7")
        local queries = {}
        for i, s in ipairs(Config.Stores) do
            if s and s.coords then
                local sType = s.type or "clothing"
                if sType == "skinshop" then sType = "clothing" end
                if sType == "barbershop" then sType = "barber" end
                if sType == "tattooshop" then sType = "tattoo" end

                local sName = s.name or s.label or (defaultTypeLabels[sType] .. " #" .. i)
                local sX = s.coords.x or 0.0
                local sY = s.coords.y or 0.0
                local sZ = s.coords.z or 0.0
                local sHeading = s.coords.w or s.heading or 0.0
                local sPerm = s.job or s.gang or nil
                local sBlip = (s.showBlip ~= false) and 1 or 0

                queries[#queries + 1] = {
                    query = "INSERT INTO skinshops (name, type, x, y, z, heading, permission, show_blip) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                    values = { sName, sType, sX, sY, sZ, sHeading, sPerm, sBlip }
                }
            end
        end

        if #queries > 0 then
            local transOk, transErr = pcall(function()
                return MySQL.transaction.await(queries)
            end)
            if transOk then
                print("^2[illenium-appearance:admin] " .. #queries .. " lojas importadas com sucesso para o banco de dados skinshops!^7")
            else
                print("^1[illenium-appearance:admin] Falha na importação de lojas para skinshops: " .. tostring(transErr) .. "^7")
            end
        end
    end
end

local function refreshStoresCache()
    local rows, err = fetchStoresFromDb()
    if not rows then
        print("^1[illenium-appearance:admin] Falha ao recarregar lojas do banco: " .. tostring(err) .. "^7")
        return false, err
    end
    currentStores = normalizeStores(rows)
    TriggerClientEvent("illenium-appearance:client:syncStores", -1, currentStores)
    return true
end

local function buildStoresPayload(source)
    return {
        records = currentStores,
        revision = revisionOf(currentStores)
    }
end

-- ============================================================================
-- CLIENT SYNC HANDLERS
-- ============================================================================

RegisterNetEvent("illenium-appearance:server:requestStores", function()
    local src = source
    if #currentStores == 0 then
        local rows = fetchStoresFromDb()
        if rows then
            currentStores = normalizeStores(rows)
        end
    end
    TriggerClientEvent("illenium-appearance:client:syncStores", src, currentStores)
end)

AddEventHandler("QBCore:Server:OnPlayerLoaded", function(Player)
    if Player and Player.PlayerData and Player.PlayerData.source then
        TriggerClientEvent("illenium-appearance:client:syncStores", Player.PlayerData.source, currentStores)
    end
end)

AddEventHandler("qbx_core:server:playerLoaded", function(playerData)
    if playerData and playerData.source then
        TriggerClientEvent("illenium-appearance:client:syncStores", playerData.source, currentStores)
    end
end)

-- ============================================================================
-- ADMIN ACTIONS DISPATCHER
-- ============================================================================

local validStoreTypes = {
    clothing = true,
    barber = true,
    tattoo = true,
    surgeon = true
}

local function executeStoreAction(action, data, clientRevision, source)
    if not hasAppearancePermission(source) then
        return response(false, "unauthorized", "Acesso negado. Permissão de administração necessária.")
    end

    data = type(data) == "table" and data or {}
    local currentRev = revisionOf(currentStores)

    -- Ação: Reconciliar
    if action == "reconcile" then
        local refreshed, err = refreshStoresCache()
        if not refreshed then
            return response(false, "db_error", "Falha ao recarregar lojas do banco: " .. tostring(err))
        end
        return response(true, "reconciled", "Lojas recarregadas do banco de dados e sincronizadas com sucesso.", {
            records = currentStores,
            revision = revisionOf(currentStores)
        })
    end

    -- Ação: Abrir no Jogador Online
    if action == "open_for_player" then
        local targetInput = cleanString(tostring(data.targetId or data.target or ""), 50, false)
        local shopType = cleanString(data.shopType or "clothing", 20, false)
        if not targetInput then
            return response(false, "missing_target", "Informe o Passaporte (ID) ou CitizenID do jogador.")
        end
        if not validStoreTypes[shopType] then
            return response(false, "invalid_shop_type", "Tipo de loja inválido.")
        end

        local targetSrc, targetCid, status = ResolveAppearancePlayer(targetInput)
        if not targetSrc then
            local msg = (status == "offline")
                and string.format("O jogador com o Passaporte '%s' existe no banco, mas está OFFLINE.", tostring(targetCid or targetInput))
                or string.format("Nenhum jogador encontrado com o Passaporte/CitizenID '%s'.", tostring(targetInput))
            return response(false, "player_not_found", msg)
        end

        if shopType == "clothing" then
            TriggerClientEvent("illenium-appearance:client:openClothingShopMenu", targetSrc, true)
        elseif shopType == "barber" then
            TriggerClientEvent("illenium-appearance:client:OpenBarberShop", targetSrc)
        elseif shopType == "tattoo" then
            TriggerClientEvent("illenium-appearance:client:OpenTattooShop", targetSrc)
        elseif shopType == "surgeon" then
            TriggerClientEvent("illenium-appearance:client:OpenSurgeonShop", targetSrc)
        end

        logAdminAction(
            source,
            "Menu de Aparência Aberto Remotamente",
            string.format("Admin abriu o menu de **%s** para o jogador `%s` (Source %s).", defaultTypeLabels[shopType] or shopType, tostring(targetCid or targetInput), tostring(targetSrc)),
            0x00e5ff,
            {
                { name = "Tipo de Loja", value = defaultTypeLabels[shopType] or shopType, inline = true },
                { name = "Jogador Alvo", value = string.format("ID: %s | Source: %s", tostring(targetCid or targetInput), tostring(targetSrc)), inline = true }
            }
        )

        return response(true, "shop_opened", string.format("Menu de %s aberto para o jogador %s (Source %s).", defaultTypeLabels[shopType] or shopType, tostring(targetCid or targetInput), tostring(targetSrc)), {
            targetSrc = targetSrc,
            targetId = targetInput
        })
    end

    -- Validação de Concorrência (Revision Guard) para mutações
    if clientRevision and clientRevision ~= "" and clientRevision ~= currentRev and action ~= "refresh" then
        return response(false, "concurrency_conflict", "Os dados foram alterados por outro administrador. Atualize a listagem antes de continuar.", {
            records = currentStores,
            revision = currentRev
        })
    end

    -- Ação: Criar Loja
    if action == "create_store" then
        local name = cleanString(data.name, 100, true)
        local shopType = cleanString(data.type, 32, false)
        if not shopType or not validStoreTypes[shopType] then
            return response(false, "invalid_type", "Selecione uma categoria válida para a loja (clothing, barber, tattoo, surgeon).")
        end
        if not name or name == "" then
            name = defaultTypeLabels[shopType] or "Loja"
        end

        local coords = normalizeCoords(data.coords or data, data.heading)
        if not coords then
            return response(false, "invalid_coords", "Coordenadas da loja inválidas ou incompletas.")
        end

        local permission = cleanString(data.permission, 100, false)
        if permission == "" or permission == "false" or permission == "null" then permission = nil end

        local showBlip = data.showBlip == true or data.showBlip == 1 or data.showBlip == "true"
        local blipInt = showBlip and 1 or 0

        local insertId = MySQL.insert.await([[
            INSERT INTO skinshops (name, type, x, y, z, heading, permission, show_blip)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ]], { name, shopType, coords.x, coords.y, coords.z, coords.heading, permission, blipInt })

        if not insertId or insertId <= 0 then
            return response(false, "db_error", "Falha ao gravar nova loja no banco de dados.")
        end

        refreshStoresCache()
        local newRev = revisionOf(currentStores)

        logAdminAction(
            source,
            "Nova Loja Criada",
            string.format("Loja `%s` (ID #%s | %s) foi criada com sucesso.", name, tostring(insertId), defaultTypeLabels[shopType] or shopType),
            0x10b981,
            {
                { name = "ID", value = "#" .. tostring(insertId), inline = true },
                { name = "Categoria", value = defaultTypeLabels[shopType] or shopType, inline = true },
                { name = "Blip no Mapa", value = showBlip and "Sim" or "Não", inline = true },
                { name = "Permissão", value = permission or "Pública", inline = true },
                { name = "Coordenadas", value = string.format("X: %.2f, Y: %.2f, Z: %.2f (H: %.1f)", coords.x, coords.y, coords.z, coords.heading), inline = false }
            }
        )

        return response(true, "store_created", string.format("Loja '%s' (#%d) criada com sucesso!", name, insertId), {
            id = insertId,
            records = currentStores,
            revision = newRev
        })
    end

    -- Ação: Atualizar Loja
    if action == "update_store" then
        local id = tonumber(data.id)
        if not id or id <= 0 then
            return response(false, "invalid_id", "ID da loja inválido.")
        end

        local name = cleanString(data.name, 100, true)
        local shopType = cleanString(data.type, 32, false)
        if not shopType or not validStoreTypes[shopType] then
            return response(false, "invalid_type", "Selecione uma categoria válida para a loja.")
        end
        if not name or name == "" then
            name = defaultTypeLabels[shopType] or "Loja"
        end

        local coords = normalizeCoords(data.coords or data, data.heading)
        if not coords then
            return response(false, "invalid_coords", "Coordenadas da loja inválidas.")
        end

        local permission = cleanString(data.permission, 100, false)
        if permission == "" or permission == "false" or permission == "null" then permission = nil end

        local showBlip = data.showBlip == true or data.showBlip == 1 or data.showBlip == "true"
        local blipInt = showBlip and 1 or 0

        local affected = MySQL.update.await([[
            UPDATE skinshops
               SET name = ?, type = ?, x = ?, y = ?, z = ?, heading = ?, permission = ?, show_blip = ?
             WHERE id = ?
        ]], { name, shopType, coords.x, coords.y, coords.z, coords.heading, permission, blipInt, id })

        if not affected or affected == 0 then
            return response(false, "not_found", "Loja não encontrada para atualização.")
        end

        refreshStoresCache()
        local newRev = revisionOf(currentStores)

        logAdminAction(
            source,
            "Loja Atualizada",
            string.format("Loja `%s` (ID #%s) teve seus parâmetros alterados.", name, tostring(id)),
            0xe5a93c,
            {
                { name = "ID", value = "#" .. tostring(id), inline = true },
                { name = "Categoria", value = defaultTypeLabels[shopType] or shopType, inline = true },
                { name = "Blip no Mapa", value = showBlip and "Sim" or "Não", inline = true },
                { name = "Permissão", value = permission or "Pública", inline = true }
            }
        )

        return response(true, "store_updated", string.format("Loja '%s' (#%d) atualizada com sucesso!", name, id), {
            id = id,
            records = currentStores,
            revision = newRev
        })
    end

    -- Ação: Excluir Loja
    if action == "delete_store" then
        local id = tonumber(data.id)
        if not id or id <= 0 then
            return response(false, "invalid_id", "ID da loja inválido.")
        end

        local deleted = MySQL.update.await("DELETE FROM skinshops WHERE id = ?", { id })
        if not deleted or deleted == 0 then
            return response(false, "not_found", "Loja não encontrada ou já excluída.")
        end

        refreshStoresCache()
        local newRev = revisionOf(currentStores)

        logAdminAction(
            source,
            "Loja Excluída",
            string.format("Loja ID #%s foi removida definitivamente do sistema.", tostring(id)),
            0xef4444,
            {
                { name = "ID Excluído", value = "#" .. tostring(id), inline = true }
            }
        )

        return response(true, "store_deleted", string.format("Loja #%d excluída com sucesso.", id), {
            id = id,
            records = currentStores,
            revision = newRev
        })
    end

    -- Ação: Alternar Blip
    if action == "toggle_blip" then
        local id = tonumber(data.id)
        if not id or id <= 0 then
            return response(false, "invalid_id", "ID da loja inválido.")
        end

        local currentStoreRow = MySQL.single.await("SELECT show_blip, name FROM skinshops WHERE id = ?", { id })
        if not currentStoreRow then
            return response(false, "not_found", "Loja não encontrada.")
        end

        local currentBlip = (tonumber(currentStoreRow.show_blip) == 1 or currentStoreRow.show_blip == true)
        local newBlip = not currentBlip
        local newBlipInt = newBlip and 1 or 0

        MySQL.update.await("UPDATE skinshops SET show_blip = ? WHERE id = ?", { newBlipInt, id })

        refreshStoresCache()
        local newRev = revisionOf(currentStores)

        return response(true, "blip_toggled", string.format("Blip da loja %s agora está %s.", currentStoreRow.name or ("#" .. id), newBlip and "visível no mapa" or "oculto"), {
            id = id,
            showBlip = newBlip,
            records = currentStores,
            revision = newRev
        })
    end

    return response(false, "unsupported_action", "Ação não reconhecida: " .. tostring(action))
end

-- ============================================================================
-- OX_LIB SERVER CALLBACKS
-- ============================================================================

lib.callback.register('illenium-appearance:server:getCityModule', function(source, module)
    if module ~= "stores" and module ~= "appearance" then
        return response(false, "invalid_module", "Módulo não suportado.")
    end
    if not hasAppearancePermission(source) then
        return response(false, "unauthorized", "Acesso negado.")
    end
    local payload = buildStoresPayload(source)
    return response(true, "ok", "Módulo carregado com sucesso.", payload)
end)

lib.callback.register('illenium-appearance:server:executeCityAction', function(source, module, action, data, revision)
    if module ~= "stores" and module ~= "appearance" then
        return response(false, "invalid_module", "Módulo não suportado.")
    end
    return executeStoreAction(action, data, revision, source)
end)

-- ============================================================================
-- MRI_QADMIN PLUGIN REGISTRATION
-- ============================================================================

local function registerAdminPlugin()
    if GetResourceState('mri_Qadmin') ~= 'started' then return end
    local ok, res = pcall(function()
        return exports['mri_Qadmin']:RegisterPlugin({
            id = 'appearance',
            label = 'Lojas & Aparência',
            icon = 'shirt',
            resource = 'illenium-appearance',
            htmlPath = 'admin/index.html',
            requiredPerms = { 'qadmin.appearance', 'command' },
            permDefs = {
                { id = 'qadmin.appearance', label = 'Gerenciar Lojas de Roupas, Barbeiro e Tatuagem', category = 'Aparência' }
            },
            description = 'Criação e gerenciamento dinâmico de lojas de roupas, barbearias, tatuagens e cirurgias',
        })
    end)
    if ok and res then
        print('^2[illenium-appearance]^7 Plugin administrativo de Aparência registrado no mri_Qadmin com sucesso!')
    end
end

AddEventHandler('mri_Qadmin:server:pluginsReady', registerAdminPlugin)

AddEventHandler('onServerResourceStart', function(resourceName)
    if resourceName == 'mri_Qadmin' then
        registerAdminPlugin()
    end
end)

-- ============================================================================
-- COMANDOS ADMINISTRATIVOS DE CRIAÇÃO RÁPIDA (SEM BLIP NO MAPA)
-- ============================================================================

local function handleCreateStoreCommand(source, shopType, defaultName, args)
    if not hasAppearancePermission(source) then
        if source and source > 0 then
            TriggerClientEvent('ox_lib:notify', source, {
                title = 'Acesso Negado',
                description = 'Você não possui permissão administrativa para criar lojas.',
                type = 'error'
            })
        else
            print('^1[illenium-appearance] Acesso negado.^7')
        end
        return
    end

    if not source or source == 0 then
        print('^1[illenium-appearance] Este comando deve ser executado no jogo por um jogador.^7')
        return
    end

    local ped = GetPlayerPed(source)
    if not ped or ped == 0 or not DoesEntityExist(ped) then
        TriggerClientEvent('ox_lib:notify', source, {
            title = 'Erro de Posição',
            description = 'Não foi possível obter sua posição atual no servidor.',
            type = 'error'
        })
        return
    end

    local pCoord = GetEntityCoords(ped)
    local pHeading = GetEntityHeading(ped)

    local customName = nil
    if args and #args > 0 then
        customName = table.concat(args, ' ')
    end

    local storeName = (customName and customName ~= '') and customName or defaultName

    local res = executeStoreAction('create_store', {
        name = storeName,
        type = shopType,
        coords = {
            x = pCoord.x,
            y = pCoord.y,
            z = pCoord.z - 0.97,
            heading = pHeading
        },
        heading = pHeading,
        showBlip = false -- Sem blip no mapa / minimapa conforme solicitado
    }, nil, source)

    if res and res.ok then
        TriggerClientEvent('ox_lib:notify', source, {
            title = defaultName .. ' Criada',
            description = string.format('"%s" (ID #%s) criada no local! (Sem blip no mapa)', storeName, tostring(res.data and res.data.id or '?')),
            type = 'success',
            duration = 6000
        })
    else
        TriggerClientEvent('ox_lib:notify', source, {
            title = 'Erro ao Criar',
            description = res and res.message or 'Erro desconhecido ao salvar no banco de dados.',
            type = 'error',
            duration = 6000
        })
    end
end

-- Comando: Loja de Roupa (/criarloja /crialoja /criarroupa)
RegisterCommand('criarloja', function(source, args)
    handleCreateStoreCommand(source, 'clothing', 'Loja de Roupas', args)
end, false)

RegisterCommand('crialoja', function(source, args)
    handleCreateStoreCommand(source, 'clothing', 'Loja de Roupas', args)
end, false)

RegisterCommand('criarroupa', function(source, args)
    handleCreateStoreCommand(source, 'clothing', 'Loja de Roupas', args)
end, false)

-- Comando: Barbearia (/criarbarbearia /criabarbearia)
RegisterCommand('criarbarbearia', function(source, args)
    handleCreateStoreCommand(source, 'barber', 'Barbearia', args)
end, false)

RegisterCommand('criabarbearia', function(source, args)
    handleCreateStoreCommand(source, 'barber', 'Barbearia', args)
end, false)

-- Comando: Tatuagem (/criartattoo /criatattoo /criartatuagem)
RegisterCommand('criartattoo', function(source, args)
    handleCreateStoreCommand(source, 'tattoo', 'Estúdio de Tatuagem', args)
end, false)

RegisterCommand('criatattoo', function(source, args)
    handleCreateStoreCommand(source, 'tattoo', 'Estúdio de Tatuagem', args)
end, false)

RegisterCommand('criartatuagem', function(source, args)
    handleCreateStoreCommand(source, 'tattoo', 'Estúdio de Tatuagem', args)
end, false)

-- Comando: Deletar/Remover Loja (/removerloja [id] ou /deletarloja [id])
local function handleRemoveStoreCommand(source, args)
    if not hasAppearancePermission(source) then
        if source and source > 0 then
            TriggerClientEvent('ox_lib:notify', source, {
                title = 'Acesso Negado',
                description = 'Você não possui permissão para excluir lojas.',
                type = 'error'
            })
        else
            print('^1[illenium-appearance] Acesso negado.^7')
        end
        return
    end

    local storeId = tonumber(args and args[1])

    -- Se não passou ID, tenta encontrar a loja mais próxima do jogador num raio de 5 metros
    if not storeId or storeId <= 0 then
        if not source or source == 0 then
            print('^3Uso via console: /removerloja [ID_DA_LOJA]^7')
            return
        end

        local ped = GetPlayerPed(source)
        if not ped or ped == 0 or not DoesEntityExist(ped) then
            TriggerClientEvent('ox_lib:notify', source, {
                title = 'Erro de Posição',
                description = 'Não foi possível obter sua posição atual.',
                type = 'error'
            })
            return
        end

        local pCoord = GetEntityCoords(ped)
        local nearestStore = nil
        local nearestDistSq = 25.0 -- raio de 5.0 metros (5.0 * 5.0 = 25.0)

        for _, s in ipairs(currentStores) do
            local sx = s.x or (s.coords and s.coords.x)
            local sy = s.y or (s.coords and s.coords.y)
            local sz = s.z or (s.coords and s.coords.z)
            if sx and sy and sz then
                local dx = pCoord.x - sx
                local dy = pCoord.y - sy
                local dz = pCoord.z - sz
                local dSq = dx * dx + dy * dy + dz * dz
                if dSq < nearestDistSq then
                    nearestDistSq = dSq
                    nearestStore = s
                end
            end
        end

        if not nearestStore then
            TriggerClientEvent('ox_lib:notify', source, {
                title = 'Nenhuma Loja Próxima',
                description = 'Nenhuma loja encontrada em um raio de 5m. Aproxime-se do ponto ou use /removerloja [ID].',
                type = 'warning',
                duration = 6000
            })
            return
        end

        storeId = nearestStore.id
    end

    local res = executeStoreAction('delete_store', { id = storeId }, nil, source)
    if res and res.ok then
        if source and source > 0 then
            TriggerClientEvent('ox_lib:notify', source, {
                title = 'Loja Removida',
                description = string.format('Loja ID #%d foi removida com sucesso!', storeId),
                type = 'success',
                duration = 5000
            })
        else
            print(string.format('^2[illenium-appearance] Loja #%d removida com sucesso.^7', storeId))
        end
    else
        if source and source > 0 then
            TriggerClientEvent('ox_lib:notify', source, {
                title = 'Erro ao Remover',
                description = res and res.message or 'Loja não encontrada no banco de dados.',
                type = 'error',
                duration = 6000
            })
        end
    end
end

RegisterCommand('removerloja', function(source, args)
    handleRemoveStoreCommand(source, args)
end, false)

RegisterCommand('deletarloja', function(source, args)
    handleRemoveStoreCommand(source, args)
end, false)

CreateThread(function()
    Wait(500)
    seedDefaultStoresIfEmpty()
    refreshStoresCache()
    registerAdminPlugin()
end)


local outfitCache = {}
local uniformCache = {}

local function getMoneyForShop(shopType)
    if Config.FreeShops then return 0 end
    local money = 0
    if shopType == "clothing" then
        money = Config.ClothingCost or 0
    elseif shopType == "barber" then
        money = Config.BarberCost or 0
    elseif shopType == "tattoo" then
        money = Config.TattooCost or 0
    elseif shopType == "surgeon" then
        money = Config.SurgeonCost or 0
    end

    return money
end

local function getOutfitsForPlayer(citizenid)
    outfitCache[citizenid] = {}
    local result = Database.PlayerOutfits.GetAllByCitizenID(citizenid)
    for i = 1, #result, 1 do
        outfitCache[citizenid][#outfitCache[citizenid] + 1] = {
            id = result[i].id,
            name = result[i].outfitname,
            model = result[i].model,
            components = json.decode(result[i].components),
            props = json.decode(result[i].props)
        }
    end
end

local function GenerateUniqueCode()
    local code, exists
    repeat
        code = GenerateNanoID(Config.OutfitCodeLength)
        exists = Database.PlayerOutfitCodes.GetByCode(code)
    until not exists
    return code
end

-- Callback(s)

lib.callback.register("illenium-appearance:server:generateOutfitCode", function(_, outfitID)
    local existingOutfitCode = Database.PlayerOutfitCodes.GetByOutfitID(outfitID)
    if not existingOutfitCode then
        local code = GenerateUniqueCode()
        local id = Database.PlayerOutfitCodes.Add(outfitID, code)
        if not id then
            print("Something went wrong while generating outfit code")
            return
        end
        return code
    end
    return existingOutfitCode.code
end)

lib.callback.register("illenium-appearance:server:importOutfitCode", function(source, outfitName, outfitCode)
    local citizenID = Framework.GetPlayerID(source)
    local existingOutfitCode = Database.PlayerOutfitCodes.GetByCode(outfitCode)
    if not existingOutfitCode then
        return nil
    end

    local playerOutfit = Database.PlayerOutfits.GetByID(existingOutfitCode.outfitid)
    if not playerOutfit then
        return
    end

    if playerOutfit.citizenid == citizenID then return end -- Validation when someone tried to duplicate own outfit
    if Database.PlayerOutfits.GetByOutfit(outfitName, citizenID) then return end -- Validation duplicate outfit name, if validate on local id, someone can "spam error" server-sided

    local id = Database.PlayerOutfits.Add(citizenID, outfitName, playerOutfit.model, playerOutfit.components, playerOutfit.props)

    if not id then
        print("Something went wrong while importing the outfit")
        return
    end

    outfitCache[citizenID][#outfitCache[citizenID] + 1] = {
        id = id,
        name = outfitName,
        model = playerOutfit.model,
        components = json.decode(playerOutfit.components),
        props = json.decode(playerOutfit.props)
    }

    return true
end)

lib.callback.register("illenium-appearance:server:getAppearance", function(source, model)
    local citizenID = Framework.GetPlayerID(source)
    return Framework.GetAppearance(citizenID, model)
end)

lib.callback.register("illenium-appearance:server:hasMoney", function(source, shopType)
    local money = getMoneyForShop(shopType)
    if money <= 0 or Framework.HasMoney(source, "cash", money) then
        return true, money
    else
        return false, money
    end
end)

lib.callback.register("illenium-appearance:server:payForTattoo", function(source, tattoo)
    if Config.FreeShops then return true end
    local src = source
    local cost = tattoo.cost or Config.TattooCost or 0
    if cost <= 0 then return true end

    if Framework.RemoveMoney(src, "cash", cost) then
        lib.notify(src, {
            title = _L("purchase.tattoo.success.title"),
            description = string.format(_L("purchase.tattoo.success.description"), tattoo.label, cost),
            type = "success",
            position = Config.NotifyOptions.position
        })
        return true
    else
        lib.notify(src, {
            title = _L("purchase.tattoo.failure.title"),
            description = _L("purchase.tattoo.failure.description"),
            type = "error",
            position = Config.NotifyOptions.position
        })
        return false
    end
end)

lib.callback.register("illenium-appearance:server:getOutfits", function(source)
    local citizenID = Framework.GetPlayerID(source)
    if outfitCache[citizenID] == nil then
        getOutfitsForPlayer(citizenID)
    end
    return outfitCache[citizenID]
end)

lib.callback.register("illenium-appearance:server:getManagementOutfits", function(source, mType, gender)
    local job = Framework.GetJob(source)
    if mType == "Gang" then
        job = Framework.GetGang(source)
    end

    local grade = tonumber(job.grade.level)
    local managementOutfits = {}
    local result = Database.ManagementOutfits.GetAllByJob(mType, job.name, gender)

    for i = 1, #result, 1 do
        if grade >= result[i].minrank then
            managementOutfits[#managementOutfits + 1] = {
                id = result[i].id,
                name = result[i].name,
                model = result[i].model,
                gender = result[i].gender,
                components = json.decode(result[i].components),
                props = json.decode(result[i].props)
            }
        end
    end
    return managementOutfits
end)

lib.callback.register("illenium-appearance:server:getUniform", function(source)
    return uniformCache[Framework.GetPlayerID(source)]
end)

RegisterServerEvent("illenium-appearance:server:saveAppearance", function(appearance)
    local src = source
    local citizenID = Framework.GetPlayerID(src)
    if appearance ~= nil then
        Framework.SaveAppearance(appearance, citizenID)
    end
end)

RegisterServerEvent("illenium-appearance:server:chargeCustomer", function(shopType)
    local src = source
    local money = getMoneyForShop(shopType)
    if money <= 0 then return end
    if Framework.RemoveMoney(src, "cash", money) then
        lib.notify(src, {
            title = _L("purchase.store.success.title"),
            description = string.format(_L("purchase.store.success.description"), money, shopType),
            type = "success",
            position = Config.NotifyOptions.position
        })
    else
        lib.notify(src, {
            title = _L("purchase.store.failure.title"),
            description = _L("purchase.store.failure.description"),
            type = "error",
            position = Config.NotifyOptions.position
        })
    end
end)

RegisterNetEvent("illenium-appearance:server:saveOutfit", function(name, model, components, props)
    local src = source
    local citizenID = Framework.GetPlayerID(src)
    if outfitCache[citizenID] == nil then
        getOutfitsForPlayer(citizenID)
    end
    if model and components and props then
        local id = Database.PlayerOutfits.Add(citizenID, name, model, json.encode(components), json.encode(props))
        if not id then
            return
        end
        outfitCache[citizenID][#outfitCache[citizenID] + 1] = {
            id = id,
            name = name,
            model = model,
            components = components,
            props = props
        }
        lib.notify(src, {
            title = _L("outfits.save.success.title"),
            description = string.format(_L("outfits.save.success.description"), name),
            type = "success",
            position = Config.NotifyOptions.position
        })
    end
end)

RegisterNetEvent("illenium-appearance:server:updateOutfit", function(id, model, components, props)
    local src = source
    local citizenID = Framework.GetPlayerID(src)
    if outfitCache[citizenID] == nil then
        getOutfitsForPlayer(citizenID)
    end
    if model and components and props then
        if not Database.PlayerOutfits.Update(id, model, json.encode(components), json.encode(props)) then return end
        local outfitName = ""
        for i = 1, #outfitCache[citizenID], 1 do
            local outfit = outfitCache[citizenID][i]
            if outfit.id == id then
                outfit.model = model
                outfit.components = components
                outfit.props = props
                outfitName = outfit.name
                break
            end
        end
        lib.notify(src, {
            title = _L("outfits.update.success.title"),
            description = string.format(_L("outfits.update.success.description"), outfitName),
            type = "success",
            position = Config.NotifyOptions.position
        })
    end
end)

RegisterNetEvent("illenium-appearance:server:saveManagementOutfit", function(outfitData)
    local src = source
    local id = Database.ManagementOutfits.Add(outfitData)
    if not id then
        return
    end

    lib.notify(src, {
        title = _L("outfits.save.success.title"),
            description = string.format(_L("outfits.save.success.description"), outfitData.Name),
        type = "success",
        position = Config.NotifyOptions.position
    })
end)

RegisterNetEvent("illenium-appearance:server:deleteManagementOutfit", function(id)
    Database.ManagementOutfits.DeleteByID(id)
end)

RegisterNetEvent("illenium-appearance:server:syncUniform", function(uniform)
    local src = source
    uniformCache[Framework.GetPlayerID(src)] = uniform
end)

RegisterNetEvent("illenium-appearance:server:deleteOutfit", function(id)
    local src = source
    local citizenID = Framework.GetPlayerID(src)
    Database.PlayerOutfitCodes.DeleteByOutfitID(id)
    Database.PlayerOutfits.DeleteByID(id)

    for k, v in ipairs(outfitCache[citizenID]) do
        if v.id == id then
            table.remove(outfitCache[citizenID], k)
            break
        end
    end
end)

RegisterNetEvent("illenium-appearance:server:resetOutfitCache", function()
    local src = source
    local citizenID = Framework.GetPlayerID(src)
    if citizenID then
        outfitCache[citizenID] = nil
    end
end)

RegisterNetEvent("illenium-appearance:server:ChangeRoutingBucket", function()
    local src = source
    SetPlayerRoutingBucket(src, src)
end)

RegisterNetEvent("illenium-appearance:server:ResetRoutingBucket", function()
    local src = source
    SetPlayerRoutingBucket(src, 0)
end)

local function isPlayerAdmin(source)
    if not source or source <= 0 then return true end
    if IsPlayerAceAllowed(source, "command") or IsPlayerAceAllowed(source, "group.admin") then
        return true
    end
    if exports.qbx_core then
        local ok, allowed = pcall(function()
            return exports.qbx_core:HasPermission(source, 'admin') or exports.qbx_core:HasPermission(source, 'god')
        end)
        if ok and allowed then return true end
    end
    if GetResourceState('mri_Qadmin') == 'started' and exports.mri_Qadmin then
        local ok, allowed = pcall(function()
            return exports.mri_Qadmin:HasPerms(source, { "qadmin.master", "group.admin" })
        end)
        if ok and allowed then return true end
    end
    if Framework.QBCore and Framework.QBCore() then
        local ok, QBCore = pcall(function() return exports["qb-core"]:GetCoreObject() end)
        if ok and QBCore and QBCore.Functions and QBCore.Functions.HasPermission then
            local pOk, allowed = pcall(function()
                return QBCore.Functions.HasPermission(source, 'admin') or QBCore.Functions.HasPermission(source, 'god')
            end)
            if pOk and allowed then return true end
        end
    end
    return false
end

-- Resolução com PRIORIDADE TOTAL E EXCLUSIVA ao Passaporte (userId) e CitizenID
function ResolveAppearancePlayer(input)
    if not input or input == "" then return nil, nil, "empty" end
    local str = tostring(input):gsub("%s+", "")
    if str == "" then return nil, nil, "empty" end
    local num = tonumber(str)

    -- 1. Varredura direta na lista QBX de jogadores online (compara citizenid e userId/passaporte)
    if exports.qbx_core and exports.qbx_core.GetQBPlayers then
        local players = exports.qbx_core:GetQBPlayers()
        if type(players) == "table" then
            for _, p in pairs(players) do
                if p and p.PlayerData then
                    local pData = p.PlayerData
                    local cid = pData.citizenid
                    local uid = pData.userId
                    local pSrc = tonumber(pData.source)

                    local cidMatch = cid and (tostring(cid):lower() == str:lower() or (num and tonumber(cid) == num))
                    local uidMatch = uid and ((num and tonumber(uid) == num) or tostring(uid):lower() == str:lower())

                    if (cidMatch or uidMatch) and pSrc and GetPlayerName(tostring(pSrc)) then
                        return pSrc, tostring(uid or cid)
                    end
                end
            end
        end
    end

    -- 2. Busca via exports oficiais do qbx_core
    if exports.qbx_core then
        -- Tenta pelo userId (Passaporte numérico no Distrito Paulista)
        if exports.qbx_core.GetPlayerByUserId and num then
            local pUser = exports.qbx_core:GetPlayerByUserId(num)
            if not pUser then pUser = exports.qbx_core:GetPlayerByUserId(str) end
            if pUser and pUser.PlayerData and pUser.PlayerData.source then
                local pSrc = tonumber(pUser.PlayerData.source)
                if pSrc and GetPlayerName(tostring(pSrc)) then
                    return pSrc, tostring(pUser.PlayerData.userId or pUser.PlayerData.citizenid)
                end
            end
        end

        -- Tenta pelo CitizenID
        local p = exports.qbx_core:GetPlayerByCitizenId(str)
        if not p and num then p = exports.qbx_core:GetPlayerByCitizenId(num) end
        if p and p.PlayerData and p.PlayerData.source then
            local pSrc = tonumber(p.PlayerData.source)
            if pSrc and GetPlayerName(tostring(pSrc)) then
                return pSrc, tostring(p.PlayerData.userId or p.PlayerData.citizenid)
            end
        end
    end

    -- 3. Varredura em todos os clientes ativos do servidor FiveM
    for _, srcStr in ipairs(GetPlayers()) do
        local pSrc = tonumber(srcStr)
        if pSrc and GetPlayerName(srcStr) then
            local p = exports.qbx_core and exports.qbx_core:GetPlayer(pSrc)
            if p and p.PlayerData then
                local pData = p.PlayerData
                local cid = pData.citizenid
                local uid = pData.userId

                local cidMatch = cid and (tostring(cid):lower() == str:lower() or (num and tonumber(cid) == num))
                local uidMatch = uid and ((num and tonumber(uid) == num) or tostring(uid):lower() == str:lower())

                if cidMatch or uidMatch then
                    return pSrc, tostring(uid or cid)
                end
            end
        end
    end

    -- 4. Verificação no banco de dados se esse Passaporte (userId) ou CitizenID existe (offline)
    local dbRow = nil
    if num then
        dbRow = MySQL.single.await("SELECT citizenid, userId FROM players WHERE userId = ? OR citizenid = ? LIMIT 1", { num, tostring(num) })
    else
        dbRow = MySQL.single.await("SELECT citizenid, userId FROM players WHERE citizenid = ? LIMIT 1", { str })
    end

    if dbRow then
        return nil, tostring(dbRow.userId or dbRow.citizenid), "offline"
    end

    return nil, nil, "not_found"
end

local resolvePlayer = ResolveAppearancePlayer

if Config.EnablePedMenu then
    lib.addCommand("pedmenu", {
        help = _L("commands.pedmenu.title"),
        params = {
            {
                name = "target",
                help = "Passaporte (CitizenID) do jogador (opcional)",
                optional = true
            },
        },
        restricted = Config.PedMenuGroup
    }, function(source, args)
        local rawTarget = type(args) == "table" and (args.target or args[1]) or nil
        local target = source
        local targetCid = nil

        if rawTarget then
            target, targetCid = resolvePlayer(rawTarget)
            if not target then
                if source > 0 then
                    lib.notify(source, {
                        title = _L("commands.pedmenu.failure.title"),
                        description = ("Nenhum jogador online com o Passaporte '%s'."):format(tostring(rawTarget)),
                        type = "error",
                        position = Config.NotifyOptions.position
                    })
                end
                return
            end
        end

        TriggerClientEvent("illenium-appearance:client:openClothingShopMenu", target, true)
        if source > 0 and target ~= source then
            lib.notify(source, {
                title = "Sucesso",
                description = ("Menu de Ped aberto para o Passaporte %s."):format(tostring(targetCid or target)),
                type = "success",
                position = Config.NotifyOptions.position
            })
        end
    end)
end

lib.addCommand("skinshop", {
    help = "Abrir loja de roupas (Administrador)",
    params = {
        {
            name = "target",
            help = "Passaporte (CitizenID) do jogador (opcional)",
            optional = true
        }
    }
}, function(source, args)
    if not isPlayerAdmin(source) then
        if source > 0 then
            lib.notify(source, {
                title = "Sem Permissão",
                description = "Você não possui permissão para usar este comando.",
                type = "error",
                position = Config.NotifyOptions.position
            })
        end
        return
    end

    local rawTarget = type(args) == "table" and (args.target or args[1]) or nil
    local target = source
    local targetCid = nil
    local status = nil

    if rawTarget then
        target, targetCid, status = resolvePlayer(rawTarget)
        if not target then
            local msg = (status == "offline")
                and ("O jogador com o Passaporte (CitizenID) '%s' existe, porém está OFFLINE."):format(tostring(targetCid or rawTarget))
                or ("Nenhum jogador encontrado com o Passaporte (CitizenID) '%s'."):format(tostring(rawTarget))
            if source > 0 then
                lib.notify(source, {
                    title = (status == "offline") and "Jogador Offline" or "Jogador não encontrado",
                    description = msg,
                    type = "error",
                    position = Config.NotifyOptions.position
                })
            else
                print(("^1[illenium-appearance] %s^7"):format(msg))
            end
            return
        end
    elseif source <= 0 then
        print("^1[illenium-appearance] Uso pelo console: /skinshop <Passaporte>^7")
        return
    end

    TriggerClientEvent("illenium-appearance:client:openClothingShop", target, false)
    if source > 0 and target ~= source then
        lib.notify(source, {
            title = "Sucesso",
            description = ("Loja de roupas aberta para o Passaporte %s."):format(tostring(targetCid or target)),
            type = "success",
            position = Config.NotifyOptions.position
        })
    end
end)

local function handleTattooShopCommand(source, args)
    if not isPlayerAdmin(source) then
        if source > 0 then
            lib.notify(source, {
                title = "Sem Permissão",
                description = "Você não possui permissão para usar este comando.",
                type = "error",
                position = Config.NotifyOptions.position
            })
        end
        return
    end

    local rawTarget = type(args) == "table" and (args.target or args[1]) or nil
    local target = source
    local targetCid = nil
    local status = nil

    if rawTarget then
        target, targetCid, status = resolvePlayer(rawTarget)
        if not target then
            local msg = (status == "offline")
                and ("O jogador com o Passaporte (CitizenID) '%s' existe, porém está OFFLINE."):format(tostring(targetCid or rawTarget))
                or ("Nenhum jogador encontrado com o Passaporte (CitizenID) '%s'."):format(tostring(rawTarget))
            if source > 0 then
                lib.notify(source, {
                    title = (status == "offline") and "Jogador Offline" or "Jogador não encontrado",
                    description = msg,
                    type = "error",
                    position = Config.NotifyOptions.position
                })
            else
                print(("^1[illenium-appearance] %s^7"):format(msg))
            end
            return
        end
    elseif source <= 0 then
        print("^1[illenium-appearance] Uso pelo console: /tattooshop <Passaporte>^7")
        return
    end

    TriggerClientEvent("illenium-appearance:client:OpenTattooShop", target)
    if source > 0 and target ~= source then
        lib.notify(source, {
            title = "Sucesso",
            description = ("Estúdio de tatuagem aberto para o Passaporte %s."):format(tostring(targetCid or target)),
            type = "success",
            position = Config.NotifyOptions.position
        })
    end
end

lib.addCommand("tattooshop", {
    help = "Abrir estúdio de tatuagem (Administrador)",
    params = {
        {
            name = "target",
            help = "Passaporte (CitizenID) do jogador (opcional)",
            optional = true
        }
    }
}, handleTattooShopCommand)

lib.addCommand("tattoshop", {
    help = "Abrir estúdio de tatuagem (Administrador)",
    params = {
        {
            name = "target",
            help = "Passaporte (CitizenID) do jogador (opcional)",
            optional = true
        }
    }
}, handleTattooShopCommand)

lib.addCommand("barbershop", {
    help = "Abrir barbearia (Administrador)",
    params = {
        {
            name = "target",
            help = "Passaporte (CitizenID) do jogador (opcional)",
            optional = true
        }
    }
}, function(source, args)
    if not isPlayerAdmin(source) then
        if source > 0 then
            lib.notify(source, {
                title = "Sem Permissão",
                description = "Você não possui permissão para usar este comando.",
                type = "error",
                position = Config.NotifyOptions.position
            })
        end
        return
    end

    local rawTarget = type(args) == "table" and (args.target or args[1]) or nil
    local target = source
    local targetCid = nil
    local status = nil

    if rawTarget then
        target, targetCid, status = resolvePlayer(rawTarget)
        if not target then
            local msg = (status == "offline")
                and ("O jogador com o Passaporte (CitizenID) '%s' existe, porém está OFFLINE."):format(tostring(targetCid or rawTarget))
                or ("Nenhum jogador encontrado com o Passaporte (CitizenID) '%s'."):format(tostring(rawTarget))
            if source > 0 then
                lib.notify(source, {
                    title = (status == "offline") and "Jogador Offline" or "Jogador não encontrado",
                    description = msg,
                    type = "error",
                    position = Config.NotifyOptions.position
                })
            else
                print(("^1[illenium-appearance] %s^7"):format(msg))
            end
            return
        end
    elseif source <= 0 then
        print("^1[illenium-appearance] Uso pelo console: /barbershop <Passaporte>^7")
        return
    end

    TriggerClientEvent("illenium-appearance:client:OpenBarberShop", target)
    if source > 0 and target ~= source then
        lib.notify(source, {
            title = "Sucesso",
            description = ("Barbearia aberta para o Passaporte %s."):format(tostring(targetCid or target)),
            type = "success",
            position = Config.NotifyOptions.position
        })
    end
end)

if Config.EnableJobOutfitsCommand then
    lib.addCommand("joboutfits", { help = _L("commands.joboutfits.title"), }, function(source)
        TriggerClientEvent("illenium-apearance:client:outfitsCommand", source, true)
    end)

    lib.addCommand("gangoutfits", { help = _L("commands.gangoutfits.title"), }, function(source)
        TriggerClientEvent("illenium-apearance:client:outfitsCommand", source)
    end)
end

lib.addCommand("reloadskin", { help = _L("commands.reloadskin.title") }, function(source)
    TriggerClientEvent("illenium-appearance:client:reloadSkin", source)
end)

lib.addCommand("clearstuckprops", { help = _L("commands.clearstuckprops.title") }, function(source)
    TriggerClientEvent("illenium-appearance:client:ClearStuckProps", source)
end)

lib.versionCheck("iLLeniumStudios/illenium-appearance")

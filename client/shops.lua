local shopBlips = {}
local cachedStores = {}
local currentPrompt = nil

local defaultLabels = {
    clothing = "Loja de Roupas",
    skinshop = "Loja de Roupas",
    barber = "Barbearia",
    barbershop = "Barbearia",
    tattoo = "Estúdio de Tatuagem",
    tattooshop = "Estúdio de Tatuagem",
    surgeon = "Cirurgião Plástico"
}

local function rebuildStoreCache()
    cachedStores = {}
    for i = 1, #(Config.Stores or {}) do
        local s = Config.Stores[i]
        if s and not s._removed then
            local sx = s.x or (s.coords and s.coords.x)
            local sy = s.y or (s.coords and s.coords.y)
            local sz = s.z or (s.coords and s.coords.z)
            if sx and sy and sz then
                cachedStores[#cachedStores + 1] = {
                    id = s.id,
                    type = s.type,
                    x = sx,
                    y = sy,
                    z = sz,
                    label = s.name or s.label or defaultLabels[s.type] or "Loja",
                    showBlip = (s.showBlip ~= false)
                }
            end
        end
    end
end

local defaultIcons = {
    clothing = "shirt",
    skinshop = "shirt",
    barber = "scissors",
    barbershop = "scissors",
    tattoo = "pen-nib",
    tattooshop = "pen-nib",
    surgeon = "syringe"
}

local function showPrompt(label, shopType)
    if currentPrompt == label then return end
    currentPrompt = label
    if lib and lib.showTextUI then
        lib.showTextUI("[E] " .. label, {
            position = Config.TextUIOptions and Config.TextUIOptions.position or "left-center",
            icon = defaultIcons[shopType] or "store"
        })
    end
end

local function hidePrompt()
    if not currentPrompt then return end
    currentPrompt = nil
    if lib and lib.hideTextUI then
        lib.hideTextUI()
    end
end

local function openStore(shopType)
    hidePrompt()
    if shopType == "clothing" or shopType == "skinshop" then
        if Config.DirectClothingShop then
            OpenClothingShop(false)
        else
            TriggerEvent("illenium-appearance:client:openClothingShopMenu")
        end
    elseif shopType == "barber" or shopType == "barbershop" then
        OpenBarberShop()
    elseif shopType == "tattoo" or shopType == "tattooshop" then
        OpenTattooShop()
    elseif shopType == "surgeon" then
        OpenSurgeonShop()
    end
end

function SetupShopBlips()
    if not Config.EnableBlips then return end

    -- Remove blips anteriores se existirem para evitar duplicidade
    for i = 1, #shopBlips do
        if DoesBlipExist(shopBlips[i]) then
            RemoveBlip(shopBlips[i])
        end
    end
    shopBlips = {}

    for _, v in pairs(Config.Stores or {}) do
        if v.showBlip ~= false and not v._removed then
            local sx = v.x or (v.coords and v.coords.x)
            local sy = v.y or (v.coords and v.coords.y)
            local sz = v.z or (v.coords and v.coords.z)
            if sx and sy and sz then
                if not (Config.RCoreTattoosCompatibility and (v.type == "tattoo" or v.type == "tattooshop")) then
                    local blipConfig = Config.Blips and (Config.Blips[v.type] or Config.Blips["clothing"])
                    if blipConfig and blipConfig.Show ~= false then
                        local blip = AddBlipForCoord(sx, sy, sz)
                        SetBlipSprite(blip, blipConfig.Sprite or blipConfig.id or 73)
                        SetBlipColour(blip, blipConfig.Color or blipConfig.color or 5)
                        SetBlipScale(blip, blipConfig.Scale or blipConfig.scale or 0.7)
                        SetBlipAsShortRange(blip, true)
                        BeginTextCommandSetBlipName("STRING")
                        AddTextComponentString(v.name or v.label or (blipConfig.Name or blipConfig.name or defaultLabels[v.type] or "Loja"))
                        EndTextCommandSetBlipName(blip)
                        shopBlips[#shopBlips + 1] = blip
                    end
                end
            end
        end
    end
end

-- Thread única ultra-otimizada (0.00ms idle, ~0.01ms ativo no resmon)
CreateThread(function()
    Wait(500)
    rebuildStoreCache()
    SetupShopBlips()

    local interactDistSq = (Config.InteractDistance or 1.5) * (Config.InteractDistance or 1.5)
    local activeRangeSq = 36.0 -- 6.0 metros (6.0 * 6.0 = 36.0)

    while true do
        local ped = PlayerPedId()

        -- Se o jogador estiver em veículo, morto ou dentro da interface de aparência, dormir 1500ms
        if LocalPlayer.state.inAppearance or IsPedInAnyVehicle(ped, false) or IsEntityDead(ped) or GetEntityHealth(ped) <= 100 then
            hidePrompt()
            Wait(1500)
        else
            local pCoord = GetEntityCoords(ped)
            local pX, pY, pZ = pCoord.x, pCoord.y, pCoord.z
            local nearestStore = nil
            local nearestDistSq = activeRangeSq

            -- Scanner leve a cada 600ms usando matemática pura de registradores CPU (sem alocação de tabelas ou vetores)
            for i = 1, #cachedStores do
                local s = cachedStores[i]
                local dx = pX - s.x
                local dy = pY - s.y
                local dz = pZ - s.z
                local dSq = dx * dx + dy * dy + dz * dz
                if dSq < nearestDistSq then
                    nearestDistSq = dSq
                    nearestStore = s
                end
            end

            -- Se encontrar uma loja a menos de 6.0 metros, entra no ciclo ativo focado APENAS nela
            if nearestStore then
                local inTextUI = false
                local promptType = Config.PromptType or "help" -- "help" (0.00ms native) ou "textui" (ox_lib)

                while nearestStore do
                    ped = PlayerPedId()

                    -- Verificações rápidas de segurança
                    if LocalPlayer.state.inAppearance or IsPedInAnyVehicle(ped, false) or IsEntityDead(ped) or GetEntityHealth(ped) <= 100 then
                        if inTextUI then
                            hidePrompt()
                            inTextUI = false
                        end
                        break
                    end

                    local curCoord = GetEntityCoords(ped)
                    local dx = curCoord.x - nearestStore.x
                    local dy = curCoord.y - nearestStore.y
                    local dz = curCoord.z - nearestStore.z
                    local dSq = dx * dx + dy * dy + dz * dz

                    -- Se o jogador se afastar mais de 6.0 metros, encerra o ciclo ativo
                    if dSq > activeRangeSq then
                        if inTextUI then
                            hidePrompt()
                            inTextUI = false
                        end
                        nearestStore = nil
                        break
                    end

                    -- Renderiza o cilindro dourado idêntico ao gusta-appearance (DrawMarker 27)
                    if Config.EnableMarkers ~= false then
                        DrawMarker(27, nearestStore.x, nearestStore.y, nearestStore.z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 230, 205, 0, 155, false, false, 0, true)
                    end

                    -- Distância de interação (<= 1.5m)
                    if dSq <= interactDistSq then
                        if promptType == "textui" then
                            if not inTextUI then
                                showPrompt(nearestStore.label, nearestStore.type)
                                inTextUI = true
                            end
                        else
                            -- Notificação nativa GTA HUD (0.00ms resmon, sem chamar NUI/CEF)
                            BeginTextCommandDisplayHelp("STRING")
                            AddTextComponentSubstringPlayerName("Pressione ~INPUT_CONTEXT~ para abrir a " .. nearestStore.label)
                            EndTextCommandDisplayHelp(0, false, false, -1)
                        end

                        if IsControlJustPressed(0, 38) then -- Tecla [E]
                            if inTextUI then
                                hidePrompt()
                                inTextUI = false
                            end
                            openStore(nearestStore.type)
                            Wait(1000)
                            nearestStore = nil
                            break
                        end
                    else
                        if inTextUI then
                            hidePrompt()
                            inTextUI = false
                        end
                    end

                    Wait(4) -- Yield suave de 4ms (mantém fluidez visual a 60/144 FPS sem travar o core da CPU)
                end
            else
                hidePrompt()
                Wait(600) -- Descanso enquanto longe de qualquer loja (0.00ms no resmon)
            end
        end
    end
end)

RegisterNetEvent("illenium-appearance:client:syncStores", function(stores)
    if type(stores) == "table" and #stores > 0 then
        Config.Stores = stores
    end
    rebuildStoreCache()
    SetupShopBlips()
end)

AddEventHandler("onClientResourceStart", function(resourceName)
    if resourceName == GetCurrentResourceName() then
        Wait(500)
        TriggerServerEvent("illenium-appearance:server:requestStores")
        rebuildStoreCache()
        SetupShopBlips()
    end
end)

RegisterNetEvent("QBCore:Client:OnPlayerLoaded", function()
    TriggerServerEvent("illenium-appearance:server:requestStores")
end)

RegisterNetEvent("qbx_core:client:playerLoaded", function()
    TriggerServerEvent("illenium-appearance:server:requestStores")
end)

AddEventHandler("onResourceStop", function(resourceName)
    if resourceName == GetCurrentResourceName() then
        hidePrompt()
        for i = 1, #shopBlips do
            if DoesBlipExist(shopBlips[i]) then
                RemoveBlip(shopBlips[i])
            end
        end
        shopBlips = {}
    end
end)

Target = {
    IsOX = function()
        return GetResourceState("ox_target") ~= "missing"
    end,
    IsQB = function()
        return GetResourceState("qb-target") ~= "missing"
    end,
    IsTargetStarted = function()
        return false
    end,
    AddTargetEntity = function() end,
    RemoveZone = function() end,
    AddBoxZone = function() end,
    AddPolyZone = function() end
}

if not Config.UseTarget then return end
if not Target.IsOX() and not Target.IsQB() then return end

local TargetPeds = {
    Store = {},
    ClothingRoom = {},
    PlayerOutfitRoom = {}
}

local function RemoveTargetPeds(peds)
    for i = 1, #peds, 1 do
        DeletePed(peds[i])
    end
end

local function RemoveTargets()
    for _, ped in pairs(TargetPeds.Store) do
        if DoesEntityExist(ped) then
            DeletePed(ped)
        end
    end
    TargetPeds.Store = {}

    if Config.EnablePedsForClothingRooms then
        RemoveTargetPeds(TargetPeds.ClothingRoom)
    else
        for k, v in pairs(Config.ClothingRooms) do
            Target.RemoveZone("clothing_" .. (v.job or v.gang) .. k)
        end
    end

    if Config.EnablePedsForPlayerOutfitRooms then
        RemoveTargetPeds(TargetPeds.PlayerOutfitRoom)
    else
        for k in pairs(Config.PlayerOutfitRooms) do
            Target.RemoveZone("playeroutfitroom_" .. k)
        end
    end
end

AddEventHandler("onResourceStop", function(resource)
    if resource == GetCurrentResourceName() then
        if Target.IsTargetStarted and Target.IsTargetStarted() then
            RemoveTargets()
        end
    end
end)

local function CreatePedAtCoords(pedModel, coords, scenario)
    pedModel = type(pedModel) == "string" and joaat(pedModel) or pedModel
    lib.requestModel(pedModel)
    local ped = CreatePed(0, pedModel, coords.x, coords.y, coords.z - 0.98, coords.w, false, false)
    TaskStartScenarioInPlace(ped, scenario, true)
    FreezeEntityPosition(ped, true)
    SetEntityVisible(ped, true)
    SetEntityInvincible(ped, true)
    PlaceObjectOnGroundProperly(ped)
    SetBlockingOfNonTemporaryEvents(ped, true)
    return ped
end

local function SetupStoreTarget(targetConfig, action, k, v)
    -- Desativado: Lojas utilizam exclusivamente blip e marcador no chão (sem peds e sem target)
end

local function SetupStoreTargets()
    -- Desativado: Lojas utilizam exclusivamente blip e marcador no chão (sem peds e sem target)
end

local function SetupClothingRoomTargets()
    for k, v in pairs(Config.ClothingRooms) do
        local targetConfig = Config.TargetConfig["clothingroom"]
        local action = function()
            local outfits = GetPlayerJobOutfits(v.job)
            TriggerEvent("illenium-appearance:client:openJobOutfitsMenu", outfits)
        end

        local parameters = {
            options = {{
                type = "client",
                action = action,
                icon = targetConfig.icon,
                label = targetConfig.label,
                canInteract = v.job and CheckDuty or nil,
                job = v.job,
                gang = v.gang
            }},
            distance = targetConfig.distance,
            rotation = v.rotation
        }

        local key = "clothing_" .. (v.job or v.gang) .. k
        if Config.EnablePedsForClothingRooms then
            TargetPeds.ClothingRoom[k] = CreatePedAtCoords(v.targetModel or targetConfig.model, v.coords, v.targetScenario or targetConfig.scenario)
            Target.AddTargetEntity(TargetPeds.ClothingRoom[k], parameters)
        elseif v.usePoly then
            Target.AddPolyZone(key, v.points, parameters)
        else
            Target.AddBoxZone(key, v.coords, v.size, parameters)
        end
    end
end

local function SetupPlayerOutfitRoomTargets()
    for k, v in pairs(Config.PlayerOutfitRooms) do
        local targetConfig = Config.TargetConfig["playeroutfitroom"]

        local parameters = {
            options = {{
                type = "client",
                action = function()
                    OpenOutfitRoom(v)
                end,
                icon = targetConfig.icon,
                label = targetConfig.label,
                canInteract = function()
                    return IsPlayerAllowedForOutfitRoom(v)
                end
            }},
            distance = targetConfig.distance,
            rotation = v.rotation
        }

        if Config.EnablePedsForPlayerOutfitRooms then
            TargetPeds.PlayerOutfitRoom[k] = CreatePedAtCoords(v.targetModel or targetConfig.model, v.coords, v.targetScenario or targetConfig.scenario)
            Target.AddTargetEntity(TargetPeds.PlayerOutfitRoom[k], parameters)
        elseif v.usePoly then
            Target.AddPolyZone("playeroutfitroom_" .. k, v.points, parameters)
        else
            Target.AddBoxZone("playeroutfitroom_" .. k, v.coords, v.size, parameters)
        end
    end
end

local function SetupTargets()
    SetupClothingRoomTargets()
    SetupPlayerOutfitRoomTargets()
end

CreateThread(function()
    if Config.UseTarget and (Target.IsOX() or Target.IsQB()) then
        SetupTargets()
    end
end)

Radial = {}

Radial.MenuID = "open_clothing_menu"

local radialOptionAdded = false

function Radial.IsProject07()
    local resName = "Project07_RadialMenu"

    if GetResourceState(resName) == "started" then
        Radial.ResourceName = resName
        return true
    end

    return false
end

function Radial.Add(title, event)
    if not Radial.IsProject07() then return end

    exports[Radial.ResourceName]:AddRadialItem({
        id = Radial.MenuID,
        label = title,
        icon = "shirt",
        event = event,
    })
end

function Radial.Remove()
    if not Radial.IsProject07() then return end

    exports[Radial.ResourceName]:RemoveRadialItem(Radial.MenuID)
end

function Radial.AddOption(currentZone)
    if not Config.UseRadialMenu then return end

    if not currentZone then
        Radial.Remove()
        return
    end

    local event, title

    local zoneEvents = {
        clothingRoom = {
            "illenium-appearance:client:OpenClothingRoom",
            _L("menu.title")
        },
        playerOutfitRoom = {
            "illenium-appearance:client:OpenPlayerOutfitRoom",
            _L("menu.outfitsTitle")
        },
        clothing = {
            "illenium-appearance:client:openClothingShopMenu",
            _L("menu.clothingShopTitle")
        },
        barber = {
            "illenium-appearance:client:OpenBarberShop",
            _L("menu.barberShopTitle")
        },
        tattoo = {
            "illenium-appearance:client:OpenTattooShop",
            _L("menu.tattooShopTitle")
        },
        surgeon = {
            "illenium-appearance:client:OpenSurgeonShop",
            _L("menu.surgeonShopTitle")
        },
    }

    if zoneEvents[currentZone.name] then
        event, title = table.unpack(zoneEvents[currentZone.name])

        Radial.Add(title, event)
        radialOptionAdded = true
    end
end

function Radial.RemoveOption()
    if radialOptionAdded then
        Radial.Remove()
        radialOptionAdded = false
    end
end

AddEventHandler("onResourceStop", function(resource)
    if resource == GetCurrentResourceName() then
        Radial.RemoveOption()
    end
end)
if not Radial.IsProject07() then return end

function Radial.Add(title, event)
    exports[Radial.ResourceName]:AddRadialItem({
        id = Radial.MenuID,
        icon = "shirt",
        label = title,
        event = event
    })
end

function Radial.Remove()
    exports[Radial.ResourceName]:RemoveRadialItem(Radial.MenuID)
end
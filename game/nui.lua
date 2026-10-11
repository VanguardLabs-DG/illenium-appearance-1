local client = client

-- Lets you change the appearance menu's title/subtitle without touching any
-- locale file or Lua code — just edit title.json at the resource root.
local function getTitleOverride()
    local raw = LoadResourceFile(GetCurrentResourceName(), 'title.json')
    if not raw then return nil end

    local ok, decoded = pcall(json.decode, raw)
    if not ok or type(decoded) ~= 'table' then return nil end

    return decoded
end

local function getLocaleUI(lang)
    local locale = Locales[lang] or Locales[GetConvar("illenium-appearance:locale", "en")]
    local ui = locale and locale.UI

    if not ui then return ui end

    local override = getTitleOverride()
    if override and ui.header then
        ui.header.title = override.title or ui.header.title
        ui.header.subtitle = override.subtitle or ui.header.subtitle
    end

    return ui
end

RegisterNUICallback("appearance_get_locales", function(_, cb)
    cb(getLocaleUI(GetConvar("illenium-appearance:locale", "en")))
end)

-- Lets the UI switch its displayed language on the fly (e.g. an EN/TH toggle
-- in the menu) without needing to change the server convar or reopen the menu.
RegisterNUICallback("appearance_set_locale", function(lang, cb)
    cb(getLocaleUI(lang))
end)

RegisterNUICallback("appearance_get_settings", function(_, cb)
    cb({ appearanceSettings = client.getAppearanceSettings() })
end)

RegisterNUICallback("appearance_get_data", function(_, cb)
    Wait(250)
    local appearanceData = client.getAppearance()
    if appearanceData.tattoos then
        client.setPedTattoos(cache.ped, appearanceData.tattoos)
    end
    cb({ config = client.getConfig(), appearanceData = appearanceData })
end)

RegisterNUICallback("appearance_set_camera", function(camera, cb)
    cb(1)
    client.setCamera(camera)
end)

RegisterNUICallback("appearance_turn_around", function(_, cb)
    cb(1)
    client.pedTurn(cache.ped, 180.0)
end)

RegisterNUICallback("appearance_rotate_camera", function(direction, cb)
    cb(1)
    client.rotateCamera(direction)
end)

RegisterNUICallback("appearance_change_model", function(model, cb)
    local playerPed = client.setPlayerModel(model)

    SetEntityHeading(cache.ped, client.getHeading())
    SetEntityInvincible(playerPed, true)
    TaskStandStill(playerPed, -1)

    cb({
        appearanceSettings = client.getAppearanceSettings(),
        appearanceData = client.getPedAppearance(playerPed)
    })
end)

RegisterNUICallback("appearance_change_component", function(component, cb)
    client.setPedComponent(cache.ped, component)
    cb(client.getComponentSettings(cache.ped, component.component_id))
end)

RegisterNUICallback("appearance_change_prop", function(prop, cb)
    client.setPedProp(cache.ped, prop)
    cb(client.getPropSettings(cache.ped, prop.prop_id))
end)

RegisterNUICallback("appearance_change_head_blend", function(headBlend, cb)
    cb(1)
    client.setPedHeadBlend(cache.ped, headBlend)
end)

RegisterNUICallback("appearance_change_face_feature", function(faceFeatures, cb)
    cb(1)
    client.setPedFaceFeatures(cache.ped, faceFeatures)
end)

RegisterNUICallback("appearance_change_head_overlay", function(headOverlays, cb)
    cb(1)
    client.setPedHeadOverlays(cache.ped, headOverlays)
end)

RegisterNUICallback("appearance_change_hair", function(hair, cb)
    client.setPedHair(cache.ped, hair)
    cb(client.getHairSettings(cache.ped))
end)

RegisterNUICallback("appearance_change_eye_color", function(eyeColor, cb)
    cb(1)
    client.setPedEyeColor(cache.ped, eyeColor)
end)

RegisterNUICallback("appearance_apply_tattoo", function(data, cb)
    local paid = not data.tattoo or not Config.ChargePerTattoo or lib.callback.await("illenium-appearance:server:payForTattoo", false, data.tattoo)
    if paid then
        client.addPedTattoo(cache.ped, data.updatedTattoos or data)
    end
    cb(paid)
end)

RegisterNUICallback("appearance_preview_tattoo", function(previewTattoo, cb)
    cb(1)
    client.setPreviewTattoo(cache.ped, previewTattoo.data, previewTattoo.tattoo)
end)

RegisterNUICallback("appearance_delete_tattoo", function(data, cb)
    cb(1)
    client.removePedTattoo(cache.ped, data)
end)

RegisterNUICallback("appearance_wear_clothes", function(dataWearClothes, cb)
    cb(1)
    client.wearClothes(dataWearClothes.data, dataWearClothes.key)
end)

RegisterNUICallback("appearance_remove_clothes", function(clothes, cb)
    cb(1)
    client.removeClothes(clothes)
end)

RegisterNUICallback("appearance_save", function(appearance, cb)
    cb(1)
    client.wearClothes(appearance, "head")
    client.wearClothes(appearance, "body")
    client.wearClothes(appearance, "bottom")
    client.exitPlayerCustomization(appearance)
end)

RegisterNUICallback("appearance_exit", function(_, cb)
    cb(1)
    client.exitPlayerCustomization()
end)

RegisterNUICallback("rotate_left", function(_, cb)
    cb(1)
    client.pedTurn(cache.ped, 10.0)
end)

RegisterNUICallback("rotate_right", function(_, cb)
    cb(1)
    client.pedTurn(cache.ped, -10.0)
end)

-- Mouse drag rotation - rotate by delta amount
RegisterNUICallback("appearance_rotate_ped", function(delta, cb)
    cb(1)
    client.pedTurn(cache.ped, delta)
end)

-- Direct heading rotation from 0-360 slider (Gusta parity)
RegisterNUICallback("appearance_set_heading", function(heading, cb)
    cb(1)
    local ped = cache.ped or PlayerPedId()
    if DoesEntityExist(ped) then
        SetEntityHeading(ped, (tonumber(heading) or 0.0) + 0.0)
    end
end)

-- Colors are read straight from theme.json at the resource root — edit
-- values there (RGB triplets like "66, 140, 255") and restart the resource,
-- no code changes or rebuilding needed.
RegisterNUICallback("get_theme_configuration", function(_, cb)
    local raw = LoadResourceFile(GetCurrentResourceName(), 'theme.json')
    if not raw then cb({}) return end

    local ok, decoded = pcall(json.decode, raw)
    cb(ok and decoded or {})
end)

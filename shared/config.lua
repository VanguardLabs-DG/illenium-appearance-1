Config = {}

Config.Debug = false

Config.FreeShops = true -- Lojas gratuitas (padrão gusta-appearance)
Config.ClothingCost = 0
Config.BarberCost = 0
Config.TattooCost = 0
Config.SurgeonCost = 0

Config.ChargePerTattoo = false

-- Only set this to true if you're using rcore_tattoos
Config.RCoreTattoosCompatibility = false

Config.AsynchronousLoading = false -- Change this to false if you want the NUI data to load before displaying the appearance UI

Config.UseTarget = false
Config.EnableMarkers = true
Config.EnableBlips = true
Config.InteractDistance = 1.5
Config.DirectClothingShop = true -- Se true, ao pressionar [E] abre a loja de roupas diretamente (padrão gusta-appearance). Se false, abre menu com looks.
Config.PromptType = "textui" -- "textui" (ox_lib TextUI com borda e ícone) ou "help" (notificação nativa do GTA V)

Config.TextUIOptions = {
    position = "left-center"
}

Config.NotifyOptions = {
    position = "top-right"
}

Config.OutfitCodeLength = 10

Config.UseRadialMenu = false
Config.UseOxRadial = false -- Set to true to use ox_lib radial menu, both this and UseRadialMenu must be true 

Config.EnablePedsForShops = false
Config.EnablePedsForClothingRooms = true
Config.EnablePedsForPlayerOutfitRooms = true

Config.EnablePedMenu = true
Config.PedMenuGroup = "group.admin"

Config.EnableJobOutfitsCommand = false -- Enables /joboutfits and /gangoutfits commands

Config.ShowNearestShopOnly = false
Config.HideRadar = true -- Hides the minimap while the appearance menu is open
Config.HideHud = true -- Hides the full HUD (health, ammo, cash, etc. - not just the minimap) while the appearance menu is open, and restores it when the menu closes
Config.ThumbnailBatchSize = 2 -- How many clothing preview images render at once in the drawable grid. Lower this on weaker client hardware to reduce lag when opening categories with hundreds of items (e.g. Jackets); raise it if scrolling feels too "chunky". More images still load in as you scroll — nothing is skipped, they just load in smaller batches.
Config.NearestShopBlipUpdateDelay = 10000

Config.InvincibleDuringCustomization = true

Config.PreventTrackerRemoval = true -- Disables "Scarf and Chains" section if the player has tracker
Config.TrackerClothingOptions = {
    drawable = 13,
    texture = 0
}

Config.NewCharacterSections = {
    Ped = true,
    HeadBlend = true,
    FaceFeatures = true,
    HeadOverlays = true,
    Components = true,
    Props = true,
    Tattoos = true
}

Config.GenderBasedOnPed = true

Config.AlwaysKeepProps = false

Config.PersistUniforms = false -- Keeps Job / Gang Outfits on player reconnects / logout
Config.OnDutyOnlyClothingRooms = false -- Set to `true` to make the clothing rooms accessible only to players who are On Duty

Config.BossManagedOutfits = false -- Allows Job / Gang bosses to manage their own job / gang outfits

Config.ReloadSkinCooldown = 60000

Config.AutomaticFade = false -- Enables automatic fading and hides the Fade section from Hair

Config.DisableComponents = {
    Masks = false,
    UpperBody = false,
    LowerBody = false,
    Bags = false,
    Shoes = false,
    ScarfAndChains = false,
    BodyArmor = false,
    Shirts = false,
    Decals = false,
    Jackets = false
}

Config.DisableProps = {
    Hats = false,
    Glasses = false,
    Ear = false,
    Watches = false,
    Bracelets = false
}

---@type string[]
Config.Aces = {} -- list of ace permissions used for blacklisting

Config.Blips = {
    ["clothing"] = {
        Show = true,
        Sprite = 73,
        Color = 5,
        Scale = 0.7,
        Name = "Loja de Roupas",
    },
    ["skinshop"] = {
        Show = true,
        Sprite = 73,
        Color = 5,
        Scale = 0.7,
        Name = "Loja de Roupas",
    },
    ["barber"] = {
        Show = true,
        Sprite = 71,
        Color = 3,
        Scale = 0.6,
        Name = "Barbearia",
    },
    ["barbershop"] = {
        Show = true,
        Sprite = 71,
        Color = 3,
        Scale = 0.6,
        Name = "Barbearia",
    },
    ["tattoo"] = {
        Show = true,
        Sprite = 75,
        Color = 0,
        Scale = 0.7,
        Name = "Estúdio de Tatuagem",
    },
    ["tattooshop"] = {
        Show = true,
        Sprite = 75,
        Color = 0,
        Scale = 0.7,
        Name = "Estúdio de Tatuagem",
    },
    ["surgeon"] = {
        Show = true,
        Sprite = 102,
        Color = 2,
        Scale = 0.6,
        Name = "Cirurgião Plástico",
    }
}

Config.TargetConfig = {
    ["clothing"] = {
        model = "s_f_m_shop_high",
        scenario = "WORLD_HUMAN_STAND_MOBILE",
        icon = "fas fa-tshirt",
        label = "Open Clothing Store",
        distance = 3
    },
    ["barber"] = {
        model = "s_m_m_hairdress_01",
        scenario = "WORLD_HUMAN_STAND_MOBILE",
        icon = "fas fa-scissors",
        label = "Open Barber Shop",
        distance = 3
    },
    ["tattoo"] = {
        model = "u_m_y_tattoo_01",
        scenario = "WORLD_HUMAN_STAND_MOBILE",
        icon = "fas fa-pen",
        label = "Open Tattoo Shop",
        distance = 3
    },
    ["surgeon"] = {
        model = "s_m_m_doctor_01",
        scenario = "WORLD_HUMAN_STAND_MOBILE",
        icon = "fas fa-scalpel",
        label = "Open Surgeon",
        distance = 3
    },
    ["clothingroom"] = {
        model = "mp_g_m_pros_01",
        scenario = "WORLD_HUMAN_STAND_MOBILE",
        icon = "fas fa-sign-in-alt",
        label = "Open Job / Gang Clothes Menu",
        distance = 3
    },
    ["playeroutfitroom"] = {
        model = "mp_g_m_pros_01",
        scenario = "WORLD_HUMAN_STAND_MOBILE",
        icon = "fas fa-sign-in-alt",
        label = "Open Outfits Menu",
        distance = 3
    },
}

Config.Stores = {
    -- [ Lojas de Roupas - Principais ]
    { type = "clothing", coords = vector4(74.98022, -1400.057, 29.36414-0.97, 345.8268), showBlip = true },
    { type = "clothing", coords = vector4(425.8549, -799.1208, 29.48206-0.97, 172.9134), showBlip = true },
    { type = "clothing", coords = vector4(128.2022, -218.545, 54.55457-0.97, 68.70079), showBlip = true },
    { type = "clothing", coords = vector4(-161.1165, -295.6352, 39.72668-0.97, 161.5748), showBlip = true },
    { type = "clothing", coords = vector4(-828.5406, -1076.69, 11.31799-0.97, 294.8032), showBlip = true },
    { type = "clothing", coords = vector4(-705.9692, -159.4549, 37.40149-0.97, 31.1811), showBlip = true },
    { type = "clothing", coords = vector4(-1198.167, -771.033, 17.31653-0.97, 223.937), showBlip = true },
    { type = "clothing", coords = vector4(-1455.521, -243.5868, 49.80298-0.97, 323.1496), showBlip = true },
    { type = "clothing", coords = vector4(-3167.974, 1048.813, 20.85498-0.97, 68.03149), showBlip = true },
    { type = "clothing", coords = vector4(-1106.782, 2706.224, 19.10254-0.97, 311.811), showBlip = true },
    { type = "clothing", coords = vector4(614.2418, 2756.967, 42.08569-0.97, 280.6299), showBlip = true },
    { type = "clothing", coords = vector4(1189.543, 2710.642, 38.21021-0.97, 260.7874), showBlip = true },
    { type = "clothing", coords = vector4(1693.253, 4829.736, 42.052-0.97, 184.252), showBlip = true },
    { type = "clothing", coords = vector4(10.16703, 6517.029, 31.87476-0.97, 116.2205), showBlip = true },
    { type = "clothing", coords = vector4(1727.222, 3494.862, 36.76123-0.97, 104.8819), showBlip = true },
    { type = "clothing", coords = vector4(-332.2945, 7208.624, 6.7854-0.97, 0), showBlip = true },
    { type = "clothing", coords = vector4(1835.763, 2573.393, 46.01172-0.97, 263.6221), showBlip = true },
    { type = "clothing", coords = vector4(-60.68571, 994.6286, 239.515-0.97, 45.35433), showBlip = true },
    { type = "clothing", coords = vector4(1705.833, 2608.681, -55.76123, 39.68504), showBlip = true },
    { type = "clothing", coords = vector4(4086.026, 51.61319, 18.78247, 0.0), showBlip = true },
    { type = "clothing", coords = vector4(1423.978, -713.1165, 76.05493-0.97, 0.0), showBlip = true },
    -- [ Mansões ]
    { type = "clothing", coords = vector4(-3219.6, 783.7451, 14.09814-0.97, 303.3071), showBlip = false },
    { type = "clothing", coords = vector4(-60.22417, 845.1165, 231.326-0.97, 87.87402), showBlip = false },
    { type = "clothing", coords = vector4(-637.2791, 944.2418, 243.9634-0.97, 354.3307), showBlip = false },
    { type = "clothing", coords = vector4(-1790.308, 446.7956, 132.3671-0.97, 300.4724), showBlip = false },
    { type = "clothing", coords = vector4(-742.0088, 504.7516, 109.5692-0.97, 294.8032), showBlip = false },
    { type = "clothing", coords = vector4(-816.3428, 267.0461, 82.79492-0.97, 257.9528), showBlip = false },
    { type = "clothing", coords = vector4(-264.9231, -733.4374, 125.4586-0.97, 68.03149), showBlip = false },
    { type = "clothing", coords = vector4(2553.125, 6183.692, 168.392-0.97, 272.126), showBlip = false },
    { type = "clothing", coords = vector4(-2561.367, 3763.517, 17.03003-0.97, 272.126), showBlip = false },
    { type = "clothing", coords = vector4(-5863.688, 1142.664, 13.25574, 172.9134), showBlip = false },
    { type = "clothing", coords = vector4(-1235.064, -2152.826, 14.18237-0.97, 31.1811), showBlip = false },
    { type = "clothing", coords = vector4(699.455, 264.211, 97.90918-0.97, 82.20473), showBlip = false },
    { type = "clothing", coords = vector4(2601.917, 5342.018, 47.62927, 201.2598), showBlip = false },
    { type = "clothing", coords = vector4(-465.6923, 5994.514, 31.67249-0.97, 39.68504), showBlip = false },
    { type = "clothing", coords = vector4(-1721.143, 381.8506, 89.72009, 291.9685), showBlip = false },
    { type = "clothing", coords = vector4(-279.8769, 211.0549, 92.0791-0.97, 0), showBlip = false },
    { type = "clothing", coords = vector4(147.0066, -3007.925, 7.038086-0.97, 266.4567), showBlip = false },
    { type = "clothing", coords = vector4(-768.9758, 317.3407, 243.3737-0.97, 269.2914), showBlip = false },
    -- [ Cidade Perfeita ]
    { type = "clothing", coords = vector4(-220.3253, -4975.358, 9.060059-0.80, 175.748), showBlip = false },
    -- [ Barbearias ]
    { type = "barber", coords = vector4(-813.9297, -182.756, 37.5531-0.97, 206.9291), showBlip = true },
    { type = "barber", coords = vector4(-1282.787, -1117.78, 6.987549-0.97, 357.1653), showBlip = true },
    { type = "barber", coords = vector4(1932.224, 3730.483, 32.83521-0.97, 113.3858), showBlip = true },
    { type = "barber", coords = vector4(1212.277, -473.4725, 66.19775-0.97, 345.8268), showBlip = true },
    { type = "barber", coords = vector4(-33.85055, -152.2418, 57.08203-0.97, 255.1181), showBlip = true },
    { type = "barber", coords = vector4(-278.6637, 6227.842, 31.68933-0.97, 317.4803), showBlip = true },
    { type = "barber", coords = vector4(137.3934, -1708.457, 29.27991-0.97, 48.18897), showBlip = true },
    { type = "barber", coords = vector4(4988.202, -5744.664, 19.87769-0.97, 325.9843), showBlip = false },
    { type = "barber", coords = vector4(4088.083, 44.57143, 18.78247, 0.0), showBlip = true },
    -- [ Tatuagens ]
    { type = "tattoo", coords = vector4(1322.98, -1652.532, 52.26306-0.97, 351.4961), showBlip = true },
    { type = "tattoo", coords = vector4(-1154.163, -1425.785, 4.94873-0.97, 325.9843), showBlip = true },
    { type = "tattoo", coords = vector4(322.7077, 180.0923, 103.5707-0.97, 79.37008), showBlip = true },
    { type = "tattoo", coords = vector4(-3169.53, 1075.859, 20.82129-0.97, 158.7402), showBlip = true },
    { type = "tattoo", coords = vector4(1863.917, 3747.428, 33.02051-0.97, 357.1653), showBlip = true },
    { type = "tattoo", coords = vector4(-293.1165, 6200.558, 31.48718-0.97, 161.5748), showBlip = true },
    { type = "tattoo", coords = vector4(-331.2923, 7187.499, 6.46521-0.97, 110.5512), showBlip = true },
    -- [ Cirurgião Plástico ]
    { type = "surgeon", coords = vector4(298.54, -584.45, 43.26 - 0.97, 73.19), showBlip = true }
}

Config.ClothingRooms = {
    {
        job = "police",
        coords = vector4(454.91, -990.89, 30.69, 193.4),
        size = vector3(4, 4, 4),
        rotation = 45,
        usePoly = true,
        points = {
            vector3(460.41918945312, -993.11444091797, 30.69),
            vector3(449.39508056641, -993.60614013672, 30.69),
            vector3(449.88696289062, -990.23779296875, 30.69),
            vector3(450.97882080078, -989.71411132812, 30.69),
            vector3(451.0325012207, -987.89904785156, 30.69),
            vector3(453.47863769531, -987.76928710938, 30.69),
            vector3(454.35513305664, -988.46459960938, 30.69),
            vector3(460.4231262207, -987.94573974609, 30.69)
        }
    }
}


Config.PlayerOutfitRooms = {
    -- Sample outfit room config
--[[    {
        job = "police",
        coords = vector4(287.28, -573.41, 43.16, 79.61),
        size = vector3(4, 4, 4),
        rotation = 45,
        usePoly = true,
        points = {
            vector3(284.83, -574.01, 43.16),
            vector3(286.33, -570.03, 43.16),
            vector3(290.33, -571.74, 43.16),
            vector3(289.0, -574.75, 43.16)
        },
        citizenIDs = {
            "BHH65156"
        }
    }]]--
}

Config.Outfits = {
    ["police"] = {
        ["Male"] = {
            {
                name = "Short Sleeve",
                outfitData = {
                    ["pants"] = {item = 24, texture = 0}, -- Pants
                    ["arms"] = {item = 19, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 58, texture = 0}, -- T Shirt
                    ["vest"] = {item = 0, texture = 0}, -- Body Vest
                    ["torso2"] = {item = 55, texture = 0}, -- Jacket
                    ["shoes"] = {item = 51, texture = 0}, -- Shoes
                    ["accessory"] = {item = 0, texture = 0}, -- Neck Accessory
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["hat"] = {item = -1, texture = -1}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["mask"] = {item = 0, texture = 0} -- Mask
                },
                grades = {0, 1, 2, 3, 4},
            },
            {
                name = "Trooper Tan",
                outfitData = {
                    ["pants"] = {item = 24, texture = 0}, -- Pants
                    ["arms"] = {item = 20, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 58, texture = 0}, -- T Shirt
                    ["vest"] = {item = 0, texture = 0}, -- Body Vest
                    ["torso2"] = {item = 317, texture = 3}, -- Jacket
                    ["shoes"] = {item = 51, texture = 0}, -- Shoes
                    ["accessory"] = {item = 0, texture = 0}, -- Neck Accessory
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["hat"] = {item = 58, texture = 0}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["mask"] = {item = 0, texture = 0} -- Mask
                },
                grades = {0, 1, 2, 3, 4},
            },
            {
                name = "Long Sleeve",
                outfitData = {
                    ["pants"] = {item = 24, texture = 0}, -- Pants
                    ["arms"] = {item = 20, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 58, texture = 0}, -- T Shirt
                    ["vest"] = {item = 0, texture = 0}, -- Body Vest
                    ["torso2"] = {item = 317, texture = 0}, -- Jacket
                    ["shoes"] = {item = 51, texture = 0}, -- Shoes
                    ["accessory"] = {item = 0, texture = 0}, -- Neck Accessory
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["hat"] = {item = -1, texture = -1}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["mask"] = {item = 0, texture = 0} -- Mask
                },
                grades = {1, 2, 3, 4},
            },
            {
                name = "Trooper Black",
                outfitData = {
                    ["pants"] = {item = 24, texture = 0}, -- Pants
                    ["arms"] = {item = 20, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 58, texture = 0}, -- T Shirt
                    ["vest"] = {item = 0, texture = 0}, -- Body Vest
                    ["torso2"] = {item = 317, texture = 8}, -- Jacket
                    ["shoes"] = {item = 51, texture = 0}, -- Shoes
                    ["accessory"] = {item = 0, texture = 0}, -- Neck Accessory
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["hat"] = {item = 58, texture = 3}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["mask"] = {item = 0, texture = 0} -- Mask
                },
                grades = {2, 3, 4},
            },
            {
                name = "SWAT",
                outfitData = {
                    ["pants"] = {item = 130, texture = 1}, -- Pants
                    ["arms"] = {item = 172, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 15, texture = 0}, -- T Shirt
                    ["vest"] = {item = 15, texture = 2}, -- Body Vest
                    ["torso2"] = {item = 336, texture = 3}, -- Jacket
                    ["shoes"] = {item = 24, texture = 0}, -- Shoes
                    ["accessory"] = {item = 133, texture = 0}, -- Neck Accessory
                    ["hat"] = {item = 150, texture = 0}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["mask"] = {item = 52, texture = 0} -- Mask
                },
                grades = {3, 4},
            }
        },
        ["Female"] = {
            {
                name = "Short Sleeve",
                outfitData = {
                    ["pants"] = {item = 133, texture = 0}, -- Pants
                    ["arms"] = {item = 31, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 35, texture = 0}, -- T Shirt
                    ["vest"] = {item = 34, texture = 0}, -- Body Vest
                    ["torso2"] = {item = 48, texture = 0}, -- Jacket
                    ["shoes"] = {item = 52, texture = 0}, -- Shoes
                    ["accessory"] = {item = 0, texture = 0}, -- Neck Accessory
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["hat"] = {item = 0, texture = 0}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["mask"] = {item = 0, texture = 0} -- Mask
                },
                grades = {0, 1, 2, 3, 4},
            },
            {
                name = "Trooper Tan",
                outfitData = {
                    ["pants"] = {item = 133, texture = 0}, -- Pants
                    ["arms"] = {item = 31, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 35, texture = 0}, -- T Shirt
                    ["vest"] = {item = 34, texture = 0}, -- Body Vest
                    ["torso2"] = {item = 327, texture = 3}, -- Jacket
                    ["shoes"] = {item = 52, texture = 0}, -- Shoes
                    ["accessory"] = {item = 0, texture = 0}, -- Neck Accessory
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["hat"] = {item = 0, texture = 0}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["mask"] = {item = 0, texture = 0} -- Mask
                },
                grades = {0, 1, 2, 3, 4},
            },
            {
                name = "Long Sleeve",
                outfitData = {
                    ["pants"] = {item = 133, texture = 0}, -- Pants
                    ["arms"] = {item = 31, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 35, texture = 0}, -- T Shirt
                    ["vest"] = {item = 34, texture = 0}, -- Body Vest
                    ["torso2"] = {item = 327, texture = 0}, -- Jacket
                    ["shoes"] = {item = 52, texture = 0}, -- Shoes
                    ["accessory"] = {item = 0, texture = 0}, -- Neck Accessory
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["hat"] = {item = 0, texture = 0}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["mask"] = {item = 0, texture = 0} -- Mask
                },
                grades = {1, 2, 3, 4},
            },
            {
                name = "Trooper Black",
                outfitData = {
                    ["pants"] = {item = 133, texture = 0}, -- Pants
                    ["arms"] = {item = 31, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 35, texture = 0}, -- T Shirt
                    ["vest"] = {item = 34, texture = 0}, -- Body Vest
                    ["torso2"] = {item = 327, texture = 8}, -- Jacket
                    ["shoes"] = {item = 52, texture = 0}, -- Shoes
                    ["accessory"] = {item = 0, texture = 0}, -- Neck Accessory
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["hat"] = {item = 0, texture = 0}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["mask"] = {item = 0, texture = 0} -- Mask
                },
                grades = {2, 3, 4},
            },
            {
                name = "SWAT",
                outfitData = {
                    ["pants"] = {item = 135, texture = 1}, -- Pants
                    ["arms"] = {item = 213, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 0, texture = 0}, -- T Shirt
                    ["vest"] = {item = 17, texture = 2}, -- Body Vest
                    ["torso2"] = {item = 327, texture = 8}, -- Jacket
                    ["shoes"] = {item = 52, texture = 0}, -- Shoes
                    ["accessory"] = {item = 102, texture = 0}, -- Neck Accessory
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["hat"] = {item = 149, texture = 0}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["mask"] = {item = 35, texture = 0} -- Mask
                },
                grades = {3, 4},
            }
        }
    },
    ["realestate"] = {
        ["Male"] = {
            {
                -- Outfits
                name = "Worker",
                outfitData = {
                    ["pants"]       = { item = 28, texture = 0},  -- Pants
                    ["arms"]        = { item = 1, texture = 0},  -- Arms
                    ["t-shirt"]     = { item = 31, texture = 0},  -- T Shirt
                    ["vest"]        = { item = 0, texture = 0},  -- Body Vest
                    ["torso2"]      = { item = 294, texture = 0},  -- Jacket
                    ["shoes"]       = { item = 10, texture = 0},  -- Shoes
                    ["accessory"]   = { item = 0, texture = 0},  -- Neck Accessory
                    ["bag"]         = { item = 0, texture = 0},  -- Bag
                    ["hat"]         = { item = 12, texture = -1},  -- Hat
                    ["glass"]       = { item = 0, texture = 0},  -- Glasses
                    ["mask"]        = { item = 0, texture = 0},  -- Mask
                },
                grades = {0, 1, 2, 3, 4},
            }
        },
        ["Female"] = {
            {
                name = "Worker",
                outfitData = {
                    ["pants"]       = { item = 57, texture = 2},  -- Pants
                    ["arms"]        = { item = 0, texture = 0},  -- Arms
                    ["t-shirt"]     = { item = 34, texture = 0},  -- T Shirt
                    ["vest"]        = { item = 0, texture = 0},  -- Body Vest
                    ["torso2"]      = { item = 105, texture = 7},  -- Jacket
                    ["shoes"]       = { item = 8, texture = 5},  -- Shoes
                    ["accessory"]   = { item = 11, texture = 3},  -- Neck Accessory
                    ["bag"]         = { item = 0, texture = 0},  -- Bag
                    ["hat"]         = { item = -1, texture = -1},  -- Hat
                    ["glass"]       = { item = 0, texture = 0},  -- Glasses
                    ["mask"]        = { item = 0, texture = 0},  -- Mask
                },
                grades = {0, 1, 2, 3, 4},
            }
        }
    },
    ["ambulance"] = {
        ["Male"] = {
            {
                name = "T-Shirt",
                outfitData = {
                    ["arms"] = {item = 85, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 129, texture = 0}, -- T-Shirt
                    ["torso2"] = {item = 250, texture = 0}, -- Jackets
                    ["vest"] = {item = 0, texture = 0}, -- Vest
                    ["decals"] = {item = 58, texture = 0}, -- Decals
                    ["accessory"] = {item = 127, texture = 0}, -- Neck
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["pants"] = {item = 96, texture = 0}, -- Pants
                    ["shoes"] = {item = 54, texture = 0}, -- Shoes
                    ["mask"] = {item = 121, texture = 0}, -- Mask
                    ["hat"] = {item = 122, texture = 0}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["ear"] = {item = 0, texture = 0} -- Ear accessories
                },
                grades = {0, 1, 2, 3, 4},
            },
            {
                name = "Polo",
                outfitData = {
                    ["arms"] = {item = 90, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 15, texture = 0}, -- T-Shirt
                    ["torso2"] = {item = 249, texture = 0}, -- Jackets
                    ["vest"] = {item = 0, texture = 0}, -- Vest
                    ["decals"] = {item = 57, texture = 0}, -- Decals
                    ["accessory"] = {item = 126, texture = 0}, -- Neck
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["pants"] = {item = 96, texture = 0}, -- Pants
                    ["shoes"] = {item = 54, texture = 0}, -- Shoes
                    ["mask"] = {item = 121, texture = 0}, -- Mask
                    ["hat"] = {item = 122, texture = 0}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["ear"] = {item = 0, texture = 0} -- Ear accessories
                },
                grades = {2, 3, 4},
            },
            {
                name = "Doctor",
                outfitData = {
                    ["arms"] = {item = 93, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 32, texture = 3}, -- T-Shirt
                    ["torso2"] = {item = 31, texture = 7}, -- Jackets
                    ["vest"] = {item = 0, texture = 0}, -- Vest
                    ["decals"] = {item = 0, texture = 0}, -- Decals
                    ["accessory"] = {item = 126, texture = 0}, -- Neck
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["pants"] = {item = 28, texture = 0}, -- Pants
                    ["shoes"] = {item = 10, texture = 0}, -- Shoes
                    ["mask"] = {item = 0, texture = 0}, -- Mask
                    ["hat"] = {item = -1, texture = 0}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["ear"] = {item = 0, texture = 0} -- Ear accessories
                },
                grades = {3, 4},
            }
        },
        ["Female"] = {
            {
                name = "T-Shirt",
                outfitData = {
                    ["arms"] = {item = 109, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 159, texture = 0}, -- T-Shirt
                    ["torso2"] = {item = 258, texture = 0}, -- Jackets
                    ["vest"] = {item = 0, texture = 0}, -- Vest
                    ["decals"] = {item = 66, texture = 0}, -- Decals
                    ["accessory"] = {item = 97, texture = 0}, -- Neck
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["pants"] = {item = 99, texture = 0}, -- Pants
                    ["shoes"] = {item = 55, texture = 0}, -- Shoes
                    ["mask"] = {item = 121, texture = 0}, -- Mask
                    ["hat"] = {item = 121, texture = 0}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["ear"] = {item = 0, texture = 0} -- Ear accessories
                },
                grades = {0, 1, 2, 3, 4},
            },
            {
                name = "Polo",
                outfitData = {
                    ["arms"] = {item = 105, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 13, texture = 0}, -- T-Shirt
                    ["torso2"] = {item = 257, texture = 0}, -- Jackets
                    ["vest"] = {item = 0, texture = 0}, -- Vest
                    ["decals"] = {item = 65, texture = 0}, -- Decals
                    ["accessory"] = {item = 96, texture = 0}, -- Neck
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["pants"] = {item = 99, texture = 0}, -- Pants
                    ["shoes"] = {item = 55, texture = 0}, -- Shoes
                    ["mask"] = {item = 121, texture = 0}, -- Mask
                    ["hat"] = {item = 121, texture = 0}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["ear"] = {item = 0, texture = 0} -- Ear accessories
                },
                grades = {2, 3, 4},
            },
            {
                name = "Doctor",
                outfitData = {
                    ["arms"] = {item = 105, texture = 0}, -- Arms
                    ["t-shirt"] = {item = 39, texture = 3}, -- T-Shirt
                    ["torso2"] = {item = 7, texture = 1}, -- Jackets
                    ["vest"] = {item = 0, texture = 0}, -- Vest
                    ["decals"] = {item = 0, texture = 0}, -- Decals
                    ["accessory"] = {item = 96, texture = 0}, -- Neck
                    ["bag"] = {item = 0, texture = 0}, -- Bag
                    ["pants"] = {item = 34, texture = 0}, -- Pants
                    ["shoes"] = {item = 29, texture = 0}, -- Shoes
                    ["mask"] = {item = 0, texture = 0}, -- Mask
                    ["hat"] = {item = -1, texture = 0}, -- Hat
                    ["glass"] = {item = 0, texture = 0}, -- Glasses
                    ["ear"] = {item = 0, texture = 0} -- Ear accessories
                },
                grades = {3, 4},
            }
        }
    }
}

Config.InitialPlayerClothes = {
    Male = {
        Model = "mp_m_freemode_01",
        Components = {
            {
                component_id = 0, -- Face
                drawable = 0,
                texture = 0
            },
            {
                component_id = 1, -- Mask
                drawable = 0,
                texture = 0
            },
            {
                component_id = 2, -- Hair
                drawable = 0,
                texture = 0
            },
            {
                component_id = 3, -- Upper Body
                drawable = 0,
                texture = 0
            },
            {
                component_id = 4, -- Lower Body
                drawable = 0,
                texture = 0
            },
            {
                component_id = 5, -- Bag
                drawable = 0,
                texture = 0
            },
            {
                component_id = 6, -- Shoes
                drawable = 0,
                texture = 0
            },
            {
                component_id = 7, -- Scarf & Chains
                drawable = 0,
                texture = 0
            },
            {
                component_id = 8, -- Shirt
                drawable = 0,
                texture = 0
            },
            {
                component_id = 9, -- Body Armor
                drawable = 0,
                texture = 0
            },
            {
                component_id = 10, -- Decals
                drawable = 0,
                texture = 0
            },
            {
                component_id = 11, -- Jacket
                drawable = 0,
                texture = 0
            }
        },
        Props = {
            {
                prop_id = 0, -- Hat
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 1, -- Glasses
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 2, -- Ear
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 6, -- Watch
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 7, -- Bracelet
                drawable = -1,
                texture = -1
            }
        },
        Hair = {
            color = 0,
            highlight = 0,
            style = 0,
            texture = 0
        }
    },
    Female = {
        Model = "mp_f_freemode_01",
        Components = {
            {
                component_id = 0, -- Face
                drawable = 0,
                texture = 0
            },
            {
                component_id = 1, -- Mask
                drawable = 0,
                texture = 0
            },
            {
                component_id = 2, -- Hair
                drawable = 0,
                texture = 0
            },
            {
                component_id = 3, -- Upper Body
                drawable = 0,
                texture = 0
            },
            {
                component_id = 4, -- Lower Body
                drawable = 0,
                texture = 0
            },
            {
                component_id = 5, -- Bag
                drawable = 0,
                texture = 0
            },
            {
                component_id = 6, -- Shoes
                drawable = 0,
                texture = 0
            },
            {
                component_id = 7, -- Scarf & Chains
                drawable = 0,
                texture = 0
            },
            {
                component_id = 8, -- Shirt
                drawable = 0,
                texture = 0
            },
            {
                component_id = 9, -- Body Armor
                drawable = 0,
                texture = 0
            },
            {
                component_id = 10, -- Decals
                drawable = 0,
                texture = 0
            },
            {
                component_id = 11, -- Jacket
                drawable = 0,
                texture = 0
            }
        },
        Props = {
            {
                prop_id = 0, -- Hat
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 1, -- Glasses
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 2, -- Ear
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 6, -- Watch
                drawable = -1,
                texture = -1
            },
            {
                prop_id = 7, -- Bracelet
                drawable = -1,
                texture = -1
            }
        },
        Hair = {
            color = 0,
            highlight = 0,
            style = 0,
            texture = 0
        }
    }
}

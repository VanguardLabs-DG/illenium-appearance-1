# Illenium Appearance v2
### Original Resource by RM Scripts
### Reworked by Project07

First of all, huge thanks to **RM Scripts** for rework Illenium Appearance. This project is based on their original resource, with a complete UI overhaul, backend improvements, new features, performance optimizations, and quality-of-life additions by **Project07**.

![image](https://github.com/PehesaraNimnad/illenium-appearance/blob/babd095b8c013a7ce7530c65d7586729d15532e1/appearance.PNG)

---

# ✨ Features

## UI Rework
- Completely redesigned user interface.
- Cleaner and more modern layout.
- Improved responsiveness.
- Better overall user experience.

## Backend Rework

The clothing preview system has been completely redesigned.

Previously, all clothing preview images were stored locally inside the resource. This required every player joining the server to download thousands of clothing preview PNG files, increasing the client download size and connection time.

This version now supports **FiveManage CDN** through **uz_autoshot**, allowing clothing preview images to be uploaded to FiveManage and loaded directly from the CDN instead of being downloaded with the resource.

### Benefits

- Smaller client downloads.
- Faster server joining.
- Reduced resource size.
- Easier management of preview images.
- CDN-powered image delivery.

---

# FiveManage Setup

Inside **uz_autoshot**, configure the following section:

```lua
Customize.FiveManage = {
    Enabled     = false,
    ApiKey      = "YOUR_FIVEMANAGE_API_KEY",
    Folder      = "clothing",
    DeleteLocal = false,
}
```

## Step 1

- Create a folder named **clothing** inside your FiveManage storage.
- Paste your FiveManage API Key.
- Keep both:

```lua
Enabled = false
DeleteLocal = false
```

---

## Step 2

Run:

```
/shotmaker
```

This command will generate every clothing preview image using **uz_autoshot**.

---

## Step 3

After all screenshots have been generated successfully, change the configuration to:

```lua
Customize.FiveManage = {
    Enabled     = true,
    ApiKey      = "YOUR_FIVEMANAGE_API_KEY",
    Folder      = "clothing",
    DeleteLocal = true,
}
```

Restart **uz_autoshot**.

Open your **txAdmin Console** and you should see the upload progress as every image is sent to FiveManage.

---

# Why upload afterwards?

Uploading images while screenshots are still being generated may use additional network bandwidth.

If your server or internet connection experiences packet loss or instability, screenshot generation may become slower because uploads happen simultaneously.

For the smoothest experience:

1. Generate every screenshot first.
2. Enable FiveManage uploads.
3. Restart **uz_autoshot**.
4. Allow every image to upload to the CDN.

If your internet connection is stable and fast, enabling uploads immediately should also work without problems.

---

## Preview Mode

Since clothing preview images are now loaded from a CDN, some players with slower internet connections may notice a short UI freeze while preview images are being downloaded for the first time.

This **does not reduce FPS**.

Instead, the UI may briefly pause while the requested thumbnails are loading.

To help with this, players can now switch between:

- **Preview Mode** (Thumbnail previews)
- **Normal Mode** (Without thumbnail previews)

Players can choose whichever mode works best for their connection and hardware.

---
# New Features

## Multi-Language Support

This rework now includes **16 languages**.

Please note that these translations have not been fully verified.

If you find any incorrect translations, feel free to edit them and translate them into your preferred language.

---

## New Config Options

Several new configuration options have been added.

Open:

```
config.lua
```

and check **Lines 42 - 44**.

These options allow you to configure the new thumbnail system and related features.

---

## Thumbnail Batch Loading

A new configuration has also been added:

```lua
Config.ThumbnailBatchSize = 2
```

This controls how many clothing preview images are loaded at the same time.

A lower value is generally recommended because:

- Less network usage
- Smoother UI
- Better loading performance
- Reduced chance of UI freezing

When the appearance menu opens, only the first required thumbnails are loaded.

As the player scrolls through clothing options, additional thumbnails are automatically loaded in the background.

This lazy-loading system greatly improves overall performance compared to loading every image at once.

---

# Credits

## Original Resource

❤️ **RM Scripts**

Thank you for creating the original Illenium Appearance resource.

---

## Reworked By

**Project07**

### Changes Made

- Complete UI Rework
- Backend Rewrite
- FiveManage CDN Integration
- Thumbnail Lazy Loading
- Preview Mode
- Multi-Language Support
- Performance Optimizations
- New Configuration Options
- Improved Clothing Preview System

Special thanks again to **RM Scripts** for providing the original foundation that made this rework possible.

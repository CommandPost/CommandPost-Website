# Snippets for Icons

The Loupedeck & Stream Deck Preferences panels have the ability to use **Lua Snippets** to programatically generate icons for the panels with screens.

This gives you incredible freedom, to programatically make the icons appear however you want.

CommandPost is also compatible with Hammerspoon, so you can also use helpful extensions such as [`hs.canvas`](../api-references/hammerspoon/hs.canvas/).

Both the [CommandPost API](../api-references/commandpost/) and [Hammerspoon API](../api-references/hammerspoon/) are insanely powerful and flexible, so you can basically do anything and everything.

Essentially all you need to do in your Snippet is return a [`hs.image`](../api-references/hammerspoon/hs.image/) object.

Some useful functions to generate a [`hs.image`](../api-references/hammerspoon/hs.image/) include:

 - [`hs.image.iconForFile()`](../api-references/hammerspoon/hs.image/#iconforfile)
 - [`hs.image.iconForFileType()`](../api-references/hammerspoon/hs.image/#iconforfiletype)
 - [`hs.image.imageFromAppBundle()`](../api-references/hammerspoon/hs.image/#imagefromappbundle)
 - [`hs.image.imageFromASCII()`](../api-references/hammerspoon/hs.image/#imagefromascii)
 - [`hs.image.imageFromMediaFile()`](../api-references/hammerspoon/hs.image/#imagefrommediafile)
 - [`hs.image.imageFromName()`](../api-references/hammerspoon/hs.image/#imagefromname)
 - [`hs.image.imageFromPath()`](../api-references/hammerspoon/hs.image/#imagefrompath)
 - [`hs.image.imageFromURL()`](../api-references/hammerspoon/hs.image/#imagefromurl)

You can also use [`hs.canvas`](../api-references/hammerspoon/hs.canvas/) to programatically draw things.

There's some more complex [`hs.canvas`](/api-references/hammerspoon/hs.canvas/) examples [here](https://github.com/asmagill/hammerspoon/wiki/hs.canvas.examples).

You can learn more about Lua [here](../developer/lua-overview/).

---

## Examples:

### Display a built-in system icon

```lua
return hs.image.imageFromName("NSAdvanced")
```

---

### Display the first Final Cut Pro Keyword Shortcut Value

```lua
-- Create a new Canvas:
local v = hs.canvas.new{x = 0, y = 0, w = 90, h = 90 }

-- Add a black background:
v[1] = {
    frame = { h = "100%", w = "100%", x = 0, y = 0 },
    fillColor = { alpha = 1, red = 0, green = 0, blue = 0 },
    type = "rectangle",
}

-- Write the first Keyword from the FCPX Preferences file:
local keywords = cp.apple.finalcutpro.preferences.FFKeywordGroups
local keywordOne = keywords and keywords[1] and keywords[1][1] or ""
v[2] = {
    frame = { h = "100%", w = "100%", x = 0, y = 0 },
    text = "\n\n" .. keywordOne,
    textAlignment = "center",
    textColor = { white = 1.0 },
    textSize = 15,
    type = "text",
}

-- Convert the Canvas into an icon:
local icon = v:imageFromCanvas()

-- Delete the Canvas:
v:delete()

-- Return the icon:
return icon
```

---

### Display the current Spotify Track

```lua
-- Create a new Canvas:
local v = hs.canvas.new{x = 0, y = 0, w = 90, h = 90 }

-- Add a black background:
v[1] = {
    frame = { h = "100%", w = "100%", x = 0, y = 0 },
    fillColor = { alpha = 1, red = 0, green = 0, blue = 0 },
    type = "rectangle",
}

-- Write the current Spotify Track as text:
v[2] = {
    frame = { h = "100%", w = "100%", x = 0, y = 0 },
    text = "\n\n" .. hs.spotify.getCurrentTrack(),
    textAlignment = "center",
    textColor = { white = 1.0 },
    textSize = 15,
    type = "text",
}

-- Convert the Canvas into an icon:
local icon = v:imageFromCanvas()

-- Delete the Canvas:
v:delete()

-- Return the icon:
return icon
```

---

### Display the current System Volume

```lua
-- Create a new Canvas:
local v = hs.canvas.new{x = 0, y = 0, w = 90, h = 90 }

-- Add a black background:
v[1] = {
    frame = { h = "100%", w = "100%", x = 0, y = 0 },
    fillColor = { alpha = 1, red = 0, green = 0, blue = 0 },
    type = "rectangle",
}

-- Write the System Volume as text:
v[2] = {
    frame = { h = "100%", w = "100%", x = 0, y = 0 },
    text = "\n\n" .. hs.audiodevice.defaultOutputDevice():outputVolume(),
    textAlignment = "center",
    textColor = { white = 1.0 },
    textSize = 15,
    type = "text",
}

-- Convert the Canvas into an icon:
local icon = v:imageFromCanvas()

-- Delete the Canvas:
v:delete()

-- Return the icon:
return icon
```
# Snippets for Icons

The Loupedeck CT and Loupedeck Live Preferences panels now have the ability to use **Lua Snippets** to programatically generate icons for the Loupedeck CT and Loupedeck Live panels.

This gives you incredible freedom, to programatically make the icons appear however you want.

CommandPost is also compatible with Hammerspoon, so you can also use helpful extensions such as [`hs.canvas`](http://www.hammerspoon.org/docs/hs.canvas.html).

Both the [CommandPost API](https://dev.commandpost.io/commandpost-api/cp) and [Hammerspoon API](http://www.hammerspoon.org/docs/index.html) are insanely powerful and flexible, so you can basically do anything and everything.

Essentially all you need to do in your Snippet is return a [`hs.image`](http://www.hammerspoon.org/docs/hs.image.html) object.

Some useful functions to generate a [`hs.image`](http://www.hammerspoon.org/docs/hs.image.html) include:

 - [`hs.image.iconForFile()`](http://www.hammerspoon.org/docs/hs.image.html#iconForFile)
 - [`hs.image.iconForFileType()`](http://www.hammerspoon.org/docs/hs.image.html#iconForFileType)
 - [`hs.image.imageFromAppBundle()`](http://www.hammerspoon.org/docs/hs.image.html#imageFromAppBundle)
 - [`hs.image.imageFromASCII()`](http://www.hammerspoon.org/docs/hs.image.html#imageFromASCII)
 - [`hs.image.imageFromMediaFile()`](http://www.hammerspoon.org/docs/hs.image.html#imageFromMediaFile)
 - [`hs.image.imageFromName()`](http://www.hammerspoon.org/docs/hs.image.html#imageFromName)
 - [`hs.image.imageFromPath()`](http://www.hammerspoon.org/docs/hs.image.html#imageFromPath)
 - [`hs.image.imageFromURL()`](http://www.hammerspoon.org/docs/hs.image.html#imageFromURL)

You can also use [`hs.canvas`](http://www.hammerspoon.org/docs/hs.canvas.html) to programatically draw things.

There's some more complex [`hs.canvas`](http://www.hammerspoon.org/docs/hs.canvas.html) examples [here](https://github.com/asmagill/hammerspoon/wiki/hs.canvas.examples).

You can learn more about Lua on the [CommandPost Developers site](https://dev.commandpost.io/lua/lua-overview).

---

# Examples:

## Display a built-in system icon

```lua
return hs.image.imageFromName("NSAdvanced")
```

---

## Display the first Final Cut Pro Keyword Shortcut Value

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

## Display the current Spotify Track

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

## Display the current System Volume

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
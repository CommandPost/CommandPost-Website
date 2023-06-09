# Snippets for LED Colors

The Loupedeck and Razer Preferences panels have the ability to use Lua Snippets to set what color you want an LED button to use.

The Snippet should return a [`hs.drawing.color`](../api-references/hammerspoon/hs.drawing.color/) object.

You can learn more about Lua [here](../developer/lua-overview/).

---

## Examples

### Set LED to Red

```lua
return hs.drawing.color.asRGB({hex="#FF0000"})
```

---

### Set LED to random color

```lua
local a = hs.math.randomFromRange(0, 9)
local b = hs.math.randomFromRange(0, 9)
local c = hs.math.randomFromRange(0, 9)
local d = hs.math.randomFromRange(0, 9)
local e = hs.math.randomFromRange(0, 9)
local f = hs.math.randomFromRange(0, 9)

return hs.drawing.color.asRGB({hex="#"..a..b..c..d..e..f})
```
# Snippets
---

CommandPost allows you to create Lua code snippets, which appear as actions in CommandPost's Search Console.

This means you can trigger a Snippet via a shortcut key or control surface button.

For example, to launch Final Cut Pro, you can use this simple Lua code:

`cp.apple.finalcutpro:launch()`

CommandPost is also compatible with Hammerspoon, so you can also use any of the examples on the Hammerspoon website:

[http://www.hammerspoon.org/go/](http://www.hammerspoon.org/go/)

You can learn more about Lua here:

[https://dev.commandpost.io/lua/lua-overview](https://dev.commandpost.io/lua/lua-overview)

Here's a link to Hammerspoon's API reference:

[http://www.hammerspoon.org/docs/index.html](http://www.hammerspoon.org/docs/index.html)

Here's some direct links to some useful Hammerspoon functions:

- [`hs.timer.usleep(microsecs)`](http://www.hammerspoon.org/docs/hs.timer.html#usleep) - Add a delay
- [`hs.eventtap.keyStroke(modifiers, character[, delay, application])`](http://www.hammerspoon.org/docs/hs.eventtap.html#keyStroke) - Trigger a virtual key stroke
- [`hs.application:selectMenuItem(menuitem[, isRegex])`](http://www.hammerspoon.org/docs/hs.application.html#selectMenuItem) - Trigger an application menu item

Here's some direct links to some useful CommandPost functions:

- [`cp.tools`](https://dev.commandpost.io/commandpost-api/cp.tools)

---

# Examples

## Press "CMD+C"

```lua
hs.eventtap.keyStroke({"cmd"}, "c")
```

---

## Type "test"

```lua
hs.eventtap.keyStrokes("test")
```

---

## Trigger Shortcuts with Delay's in-between

```lua
-- Type "t"
hs.eventtap.keyStroke({}, "t")

-- Wait 1 second
cp.just.wait(1)

-- Type "e"
hs.eventtap.keyStroke({}, "e")
```

---

## Forcefully restart an application by its bundle identifier

```lua
local bundleID = "com.logitech.manager.daemon"
local apps = hs.application.applicationsForBundleID(bundleID)
if apps and apps[1] then
    apps[1]:kill9()
end
hs.application.launchOrFocusByBundleID(bundleID)
```

---

## Select all even clips in a timeline

```lua
cp.apple.finalcutpro:launch()
local clips = cp.apple.finalcutpro:timeline():contents():clipsUI()
table.sort(clips, function(a, b) return a.AXPosition.x < b.AXPosition.x end)
local evenClips = {}
for i, clip in ipairs(clips) do
    if (i % 2 == 0) then
        table.insert(evenClips, clip)
    end
end
cp.apple.finalcutpro:timeline():contents():selectClips(evenClips)
```

---

## Go back 500 frames and play

```lua
hs.eventtap.keyStroke({}, "-", 0)
hs.eventtap.keyStroke({}, "2", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "return")
cp.apple.finalcutpro:doShortcut("JogForward"):Now()
```

---

## Audio Cross Dissolve Backward (J-Cut)
```lua
hs.eventtap.keyStroke({"shift"}, "]", 0)
hs.eventtap.keyStroke({}, "-", 0)
hs.eventtap.keyStroke({}, "1", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "return", 0)
hs.eventtap.keyStroke({"cmd"}, "up", 0)

-- Need To Assign Toggle Fade Out in FCPX
hs.eventtap.keyStroke({"cmd", "alt"}, "f", 0)
hs.eventtap.keyStroke({"cmd"}, "down", 0)

 -- Need To Assign Toggle Fade In in FCPX
hs.eventtap.keyStroke({"cmd", "shift"}, "f", 0)
hs.eventtap.keyStroke({"ctrl"}, "s", 0)
```

---

## Audio Cross Dissolve Centre
```lua
hs.eventtap.keyStroke({"shift"}, "]", 0)
hs.eventtap.keyStroke({}, "-", 0)
hs.eventtap.keyStroke({}, "1", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "return", 0)
hs.eventtap.keyStroke({"cmd"}, "up", 0)
hs.eventtap.keyStroke({"cmd"}, "down", 0)

-- Need To Assign Toggle Fade In in FCPX
hs.eventtap.keyStroke({"cmd", "shift"}, "f", 0)
hs.eventtap.keyStroke({"ctrl"}, "s", 0)
hs.eventtap.keyStroke({}, "down", 0)
hs.eventtap.keyStroke({"shift"}, "[", 0)
hs.eventtap.keyStroke({"shift"}, "=", 0)
hs.eventtap.keyStroke({}, "1", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "return", 0)
hs.eventtap.keyStroke({"cmd"}, "up", 0)
hs.eventtap.keyStroke({"cmd"}, "down", 0)

-- Need To Assign Toggle Fade Out in FCPX
hs.eventtap.keyStroke({"cmd", "alt"}, "f")
hs.eventtap.keyStroke({"ctrl"}, "s")
```

---

## Audio Cross Dissolve Forward (L-Cut)
```lua
hs.eventtap.keyStroke({"shift"}, "[", 0)
hs.eventtap.keyStroke({"shift"}, "=", 0)
hs.eventtap.keyStroke({}, "1", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "return", 0)
hs.eventtap.keyStroke({"cmd"}, "up", 0)

-- Need To Assign Toggle Fade In in FCPX
hs.eventtap.keyStroke({"cmd", "shift"}, "f", 0)
hs.eventtap.keyStroke({"cmd"}, "down", 0)

 -- Need To Assign Toggle Fade Out in FCPX
hs.eventtap.keyStroke({"cmd", "alt"}, "f", 0)
hs.eventtap.keyStroke({"ctrl"}, "s", 0)
```
# Snippets for Actions

CommandPost allows you to create Lua code snippets, which appear as actions in CommandPost's Search Console.

This means you can trigger a Snippet via a shortcut key or control surface button.

For example, to launch Final Cut Pro, you can use this simple Lua code:

`cp.apple.finalcutpro:launch()`

CommandPost is also compatible with **Hammerspoon**, so you can also use any of the examples on the [Hammerspoon website](http://www.hammerspoon.org/go/){target="_blank"}.

You can learn more about Lua [here](../developer/lua-overview/).

You can find the Hammerspoon API reference [here](../api-references/hammerspoon/hs/).

Here's some direct links to some useful Hammerspoon functions:

- [`hs.timer.usleep(microsecs)`](../api-references/hammerspoon/hs.timer/#usleep) - **Add a delay**
- [`hs.eventtap.keyStroke(modifiers, character[, delay, application])`](../api-references/hammerspoon/hs.eventtap/#keystrokes) - **Trigger a virtual key stroke**
- [`hs.application:selectMenuItem(menuitem[, isRegex])`](../api-references/hammerspoon/hs.application/#selectmenuitem) - **Trigger an application menu item**

Here's some direct links to some useful CommandPost functions:

- [`cp.tools`](../api-references/commandpost/cp.tools/)

---

## Examples

### Press "CMD+C"

```lua
hs.eventtap.keyStroke({"cmd"}, "c")
```

---

### Press & Release

If you want a control surface key to behave like a normal keyboard key, you need seperate actions for **Press** and **Release**.

For example, if you want to use the Q key this is the action for press:

```
hs.eventtap.event.newKeyEvent("q", true):post()
```

...and this is the code for release:

```
hs.eventtap.event.newKeyEvent("q", false):post()
```

---

### Controlling Final Cut Pro Titles

Lets say for example, you want to control the **Animation Amount** of Motion VFX's awesome **mMusic Video 2**, **Subtitle 05** Animation Amount:

![](/static/animation-amount.png)

To do this we can use [UI Browser](https://latenightsw.com/freeware/ui-browser/) or Xcode's Accessibility Inspector to find some information about the location of this slider in the Accessibility Hierarchy.

**Accessibility Inspector:**

![](/static/animation-amount-ui.png)

**UI Browser:**

![](/static/animation-amount-ui-browser.png)

With this information we can determine that the `AXSlider` is contained within a `AXScrollArea` within an `AXGroup`.

We can also see that the `AXDescription` for this particular slider is "animation amount slider".

With this information we can now put together a Lua Snippet to get this slider, and increment it:

```
local fcp       = require "cp.apple.finalcutpro"
local axutils   = require "cp.ui.axutils"
local Slider    = require "cp.ui.Slider"

animationAmountSlider = Slider(fcp.inspector.title, function()
    local title = fcp.inspector.title
    local ui = title and title:UI()
    local groupA = ui and axutils.childAtIndex(ui, 1)
    local groupB = groupA and axutils.childAtIndex(groupA, 1)
    local animationAmountSliderUI = groupB and axutils.childWithDescription(groupB, "animation amount slider")
    return animationAmountSliderUI
end)

animationAmountSlider:show():increment()
```

To decrement it we can use:

```
animationAmountSlider:show():decrement()
```

To set a specific value we can use:

```
animationAmountSlider:show():value(12)
```

---

### Type "test"

```lua
hs.eventtap.keyStrokes("test")
```

---

### Trigger Shortcuts with Delay's in-between

```lua
-- Type "t"
hs.eventtap.keyStroke({}, "t")

-- Wait 1 second
cp.just.wait(1)

-- Type "e"
hs.eventtap.keyStroke({}, "e")
```

---

### Forcefully restart an application by its bundle identifier

```lua
local bundleID = "com.logitech.manager.daemon"
local apps = hs.application.applicationsForBundleID(bundleID)
if apps and apps[1] then
    apps[1]:kill9()
end
hs.application.launchOrFocusByBundleID(bundleID)
```

---

### Select all even clips in a timeline

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

### Go back 500 frames and play

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

### Audio Cross Dissolve Backward (J-Cut)

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

### Audio Cross Dissolve Centre

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

### Audio Cross Dissolve Forward (L-Cut)
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
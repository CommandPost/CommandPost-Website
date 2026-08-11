# Snippets Library

This page contains a collection of useful Lua Snippets organised in alphabetical order.

You can learn more about Lua [here](../developer/lua-overview/).

Also remember that CommandPost is entirely written in Lua, so you can [explore the source code](https://github.com/CommandPost/CommandPost/tree/develop/src) to see how we've built things.

---

!!!
Want to add a Snippet? [Submit via GitHub!](/contribute/)
!!!

---

## A

### Add Specific Keyword (Alt)

```lua
-----------------------------------------
-- Add Specific Keyword (Alt)
-----------------------------------------
local keywordEditor = cp.apple.finalcutpro.keywordEditor
local wasShowing = cp.apple.finalcutpro.keywordEditor:isShowing()
cp.apple.finalcutpro.keywordEditor:show()
local keywords = cp.apple.finalcutpro.keywordEditor:keywords()
table.insert(keywords, "PRO_EW")
cp.apple.finalcutpro.keywordEditor:keywords(keywords)
if not wasShowing then
cp.apple.finalcutpro.keywordEditor:hide()
end
```

---

### Add Specific Keyword

```lua
-----------------------------------------
-- Add Specific Keyword
-----------------------------------------
cp.apple.finalcutpro.keywordEditor:show()
local keywords = cp.apple.finalcutpro.keywordEditor:keywords()
table.insert(keywords, "test")
cp.apple.finalcutpro.keywordEditor:keywords(keywords)
```

---

### Audio Cross Dissolve Backward (J-Cut)

```lua
-----------------------------------------
-- Audio Cross Dissolve Backward (J-Cut)
-----------------------------------------
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
-----------------------------------------
-- Audio Cross Dissolve Centre
-----------------------------------------
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
-----------------------------------------
-- Audio Cross Dissolve Centre
-----------------------------------------
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

---

---

## B

### Backup Library

```lua
-----------------------------------------
-- Backup Library
-----------------------------------------
local fcp = require("cp.apple.finalcutpro")

-- Get a table of active library paths:
local activeLibraryPaths = fcp:activeLibraryPaths()

-- Iterate the active library paths:
for _, path in pairs(activeLibraryPaths) do
	local settingsPath path .. "/Settings.plist"

	local settings hs.plist.read(settingsPath)
	local backupLocationData = settings = and settings.backupLocation
	local backupLocation = backupLocationData and hs.fs.pathFromBookmark(backupLocationData) or hs.fs.pathToAbsolute("~/Movies/Final Cut Backups.localized/")

	-- Output text to the Debug Console:
	print(string.format("Backup Location for '%s' is '%s'.", path, backupLocation))
end
```

---

---

## C

### Camera LUT (ARRI Log C)

```lua
-----------------------------------------
-- Camera LUT (ARRI Log C)
-----------------------------------------

function plugin.init(deps)
-----------------------------------------
-- Only load plugin if FCPX is supported:
-----------------------------------------
if not fcp:isSupported() then return end

-----------------------------------------
-- Set Camera LUT to None:
-----------------------------------------
local fcpxCmds = deps.fcpxCmds
fcpxCmds
			:add(setCameraLUTToNone") 32
			:whenActivated(function()
					local info = fcp.inspector.info
					info: show()
					info:metadataView("Settings")
					local none = fcp:string("FFCameraLUTControllerNone")
					info:cameraLUT():value (none)
			end)
			:titled(i18n("setCameraLUTToNone"))

end

return plugin
```

```lua
fcp.apple.finalcutpro.inspector.info:show():metadataView("Settings"); 
cp.apple.finalcutpro.inspector.info:cameraLUT():value("ARRI Log C")
```

---

---

## F

### Forcefully restart an application by its bundle identifier

```lua
---------------------------------------------------------------
-- Forcefully restart an application by its bundle identifier
---------------------------------------------------------------
local bundleID = "com.logitech.manager.daemon"
local apps = hs.application.applicationsForBundleID(bundleID)
if apps and apps[1] then
    apps[1]:kill9()
end
hs.application.launchOrFocusByBundleID(bundleID)
```

---

---

## G

### Go back 500 frames and play

```lua
-----------------------------------------
-- Go back 500 frames and play
-----------------------------------------
hs.eventtap.keyStroke({}, "-", 0)
hs.eventtap.keyStroke({}, "2", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "return")
cp.apple.finalcutpro:doShortcut("JogForward"):Now()
```

---

---

## N

### Next Marker & Blade All

```lua
-----------------------------------------
-- Next Marker & Blade All
-----------------------------------------
cp.apple.finalcutpro:doShortcut("NextMarker")
:Then(cp.apple.finalcutpro:doShortcut("BladeAll"))
:Now()
```

---

---

## P

### Paste Attributes Timeline

```lua
-----------------------------------------
-- Paste Attributes Timeline
-----------------------------------------
hs.eventtap.keyStroke({}, "space",0)
hs.eventtap.keyStroke({}, "c",0)
hs.eventtap.keyStroke({"cmd", "shift"}, "v",0)
hs.eventtap.keyStroke({}, "return",0)
hs.eventtap.keyStroke({}, "k",0)
```

---

### Paste Timecode, Marker & Blade All

```lua
-----------------------------------------
-- Paste Timecode, Marker & Blade All
-----------------------------------------
cp.apple.finalcutpro:doShortcut("PasteTimecode")
:Then(cp.apple.finalcutpro:doShortcut("AddMarker"))
:Then(cp.apple.finalcutpro:doShortcut("BladeAll"))
:Now()
```

---

### Press "CMD+C"

```lua
-----------------------------------------
-- Press "CMD+C"
-----------------------------------------
hs.eventtap.keyStroke({"cmd"}, "c")
```

---

---

## R

### Reveal in Browser & Favourite

```lua
-----------------------------------------
-- Reveal in Browser & Favourite
-----------------------------------------
hs.eventtap.keyStroke({"shift"}, "f",0)
hs.eventtap.keyStroke({}, "f",0)
```

---

---

## S

### Search CommandPost API

```lua
-----------------------------------------
-- Search CommandPost API
-----------------------------------------
cp.plugins("core.action.manager").getActivator("test"):onActivate(function(handler, action, text)
    local result = [[local handler = cp.plugins("core.action.manager").getHandler("]] .. handler:id()  .. [[")]] .. "\n"
    result = result .. "local action = " .. "\n"
    result = result .. hs.inspect(action) .. "\n"
    result = result .. [[handler:execute(action)]]
    hs.pasteboard.setContents(result)
end):show()
```

---

### Select all even clips in a timeline

```lua
-----------------------------------------
-- Select all even clips in Timeline
-----------------------------------------
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

### Select all odd clips in Timeline

```lua
-----------------------------------------
-- Select all odd clips in Timeline
-----------------------------------------
cp.apple.finalcutpro:launch()
local clips = cp.apple.finalcutpro:timeline():contents():clipsUI()
table.sort(clips, function(a, b) return a:position().x < b:position().x end)
local evenClips = {}
for i, clip in ipairs(clips) do
    if (i % 2 == 1) then
        table.insert(evenClips, clip)
    end
end
cp.apple.finalcutpro:timeline():contents():selectClips(evenClips)
```

---

### Trigger Shortcuts with Delay's in-between

```lua
-------------------------------------------------
-- Trigger Shortcuts with Delay's in-between
-------------------------------------------------
-- Type "t"
hs.eventtap.keyStroke({}, "t")

-- Wait 1 second
cp.just.wait(1)

-- Type "e"
hs.eventtap.keyStroke({}, "e")
```

---

### Show an alert

```lua
-----------------------------------------
-- Show an alert
-----------------------------------------
hs.alert.show("this is a test")
```

---

### Swap Connected Clips

```lua
-----------------------------------------
-- Swap Connected Clips
-----------------------------------------
hs.eventtap.keyStroke({"cmd"}, "x",0)
hs.eventtap.keyStroke({"cmd"}, "v",0)
hs.eventtap.keyStroke({}, "up",0)
hs.eventtap.keyStroke({}, "c",0)
```

---

---

## T

### Transcribe End

```lua
-----------------------------------------
-- Transcribe End
-----------------------------------------
cp.apple.finalcutpro:launch()

-- activate clip in Browser
hs.eventtap.keyStroke({"cmd"},"1",100)

-- stop playback
hs.eventtap.keyStroke({},"k")

-- detect Loop Playback
if cp.apple.finalcutpro.preferences.FFPlayerLoopPlayback then

-- disable Loop Playback
hs.eventtap.keyStroke({"cmd"},"l",100)

-- goto out point
hs.eventtap.keyStroke({"shift"},"o",100)

-- advance playhead 1 frame
hs.eventtap.keyStroke({},"right")

-- set in point
hs.eventtap.keyStroke({},"i")

-- play normal speed forward
hs.eventtap.keyStroke({},"space")

else

-- goto out point
hs.eventtap.keyStroke({"shift"},"o",100)

-- advance playhead 1 frame
hs.eventtap.keyStroke({},"right")

-- set in point
hs.eventtap.keyStroke({},"I")

-- play normal speed forward
hs.eventtap.keyStroke({},"space")

end
```

---

### Transcribe Start

```lua
-----------------------------------------
-- Transcribe Start
-----------------------------------------
cp.apple.finalcutpro:launch()

-- detect Loop Playback
if cp.apple.finalcutpro.preferences.FFPlayerLoopPlayback then

-- play selection
hs.eventtap.keyStroke({},"/",100)

-- apply keyword "quote" to selection (stored under CTRL 1 in keyword editor)
hs.eventtap.keyStroke({"ctrl"}, "1",100)

-- select clip in the list
hs.eventtap.keyStroke({},"tab",100)

-- twirl open the disclosure triangle of the clip
hs.eventtap.keyStroke({},"right",100)

-- select the added keyword range in the list
hs.eventtap.keyStroke({},"down",100)

-- press Tab to enter notes field for the selected keyword range
hs.eventtap.keyStroke({},"tab",100)

else

-- activate Loop Playback
hs.eventtap.keyStroke({"cmd"},"l",100)

-- play selection
hs.eventtap.keyStroke({},"/",100)

-- apply keyword "quote" to selection (stored under CTRL 1 in keyword editor)
hs.eventtap.keyStroke({"ctrl"}, "1",100)

-- select clip in the list
hs.eventtap.keyStroke({},"tab",100)

-- twirl open the disclosure triangle of the clip
hs.eventtap.keyStroke({},"right",100)

-- select the added keyword range in the list
hs.eventtap.keyStroke({},"down",100)

-- press Tab to enter notes field for the selected keyword range
hs.eventtap.keyStroke({},"tab",100)

end
```

---

### Type "test"

```lua
-----------------------------------------
-- Type "test"
-----------------------------------------
hs.eventtap.keyStrokes("test")
```

---

---

## U

### Update Subtitle

```lua
----------------------------------------------------------------------------------
-- Update Subtitle (FxFactory https://fxfactory.com/info/subtitles/)
-- May not always work. Trial & error is required for different screen size.
----------------------------------------------------------------------------------
hs.eventtap.keyStroke({"fn"}, "f16",0)
hs.eventtap.keyStrokes("Subtitles",0)
cp.tools.ninjaMouseClick({x=22, y=888} ,0)
cp.apple.finalcutpro.inspector.title:show()
cp.tools.ninjaDoubleClick({x=2500, y=347} ,0)
```

---

<script src="https://giscus.app/client.js"
        data-repo="CommandPost/CommandPost"
        data-repo-id="MDEwOlJlcG9zaXRvcnk3NDY0NTk2NQ=="
        data-category="Website Discussion"
        data-category-id="DIC_kwDOBHMBzc4CXFFA"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="dark"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>

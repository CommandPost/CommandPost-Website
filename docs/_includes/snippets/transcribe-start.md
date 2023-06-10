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

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

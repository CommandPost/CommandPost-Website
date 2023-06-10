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

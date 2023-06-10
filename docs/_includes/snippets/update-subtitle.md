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

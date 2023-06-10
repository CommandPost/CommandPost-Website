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

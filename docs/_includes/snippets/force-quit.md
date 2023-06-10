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

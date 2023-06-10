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

# cp.apple.finalcutpro.export.destinations

Provides access to the list of Share Destinations configured for the user.

UPDATE (11th JUNE 2021):
========================

It seems that as of FCPX 10.5.x, the UserDestinations file can go up to version
5 (i.e. `com.apple.FinalCut.UserDestinations5.plist`). I've left the original
explanation below for future reference, as it goes into more detail as to
exactly what's happening.



If...

`~/Library/Preferences/com.apple.FinalCut.UserDestinations3.plist`

...doesn't exist, then Final Cut Pro will use:

`/Applications/Final Cut Pro.app/Contents/Resources/DefaultDestinations.plist`

...followed by any 3rd party applications such as:

`~/Library/Application Support/ProApps/Share Destinations/Vimeo (advanced).fcpxdest`
`/Library/Application Support/ProApps/Share Destinations/Xsend Motion.fcpxdest`

However, when you close Final Cut Pro, or if you open and close the destinations
preferences window, a new file will be created:

`~/Library/Preferences/com.apple.FinalCut.UserDestinations3.plist`

Also, if, for example, you delete the Xsend Motion destination in the Final Cut Pro
user interface, or rename the DVD preset to something else, then it will automatically
create a new Preferences file:

`~/Library/Preferences/com.apple.FinalCut.UserDestinations3.plist`

It seems that as of FCPX 10.4.6, Final Cut Pro ignores the:

`~/Preferences/com.apple.FinalCut.UserDestinations.plist`

...file (it must be considered legacy). However, if this file exists:

`~/Preferences/com.apple.FinalCut.UserDestinations2.plist`

It will read that file, along with any third party applications such as:

`~/Application Support/ProApps/Share Destinations/Vimeo (advanced).fcpxdest`
`/Library/Application Support/ProApps/Share Destinations/Xsend Motion.fcpxdest`

However, again, if you close Final Cut Pro, or open and close the destinations
preferences window, a new file will be created, migrating the data from UserDestinations2:

`~/Preferences/com.apple.FinalCut.UserDestinations3.plist`

Long story short, in MOST cases, `UserDestinations3.plist` will be single source of
destinations, however, if this file doesn't exist, then `UserDestinations2.plist`
will be used, and if this file doesn't exist, then it will read the default values
from `DefaultDestinations.plist`, along with any third party share destinations.

Fun fact: even if you delete third party applications such as "Vimeo (advanced)",
and "Xsend Motion" from your Final Cut Pro destinations preferences, they'll come
back after you restart FCPX.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [indexOf](#indexof)
 * [names](#names)


---

## API Documentation

#### Functions


### [indexOf](#indexof)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.destinations.indexOf(name) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the index of the Destination with the specified name, or `nil` if not found.                                                                     |
| **Parameters**                              | <ul><li>`name`   - The name of the Destination</li></ul> |
| **Returns**                                 | <ul><li>The index of the named Destination, or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/destinations.lua line 253](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/destinations.lua#L253){target="_blank"} |

---


### [names](#names)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.destinations.names() -> table | nil, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns an array of the names of destinations, in their current order.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The table of Share Destination names, or `nil` if an error has occurred.</li><li>An error message as a string.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/destinations.lua line 138](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/destinations.lua#L138){target="_blank"} |

---


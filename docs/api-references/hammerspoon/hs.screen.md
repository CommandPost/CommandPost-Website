# hs.screen

Manipulate screens (i.e. monitors)

The macOS coordinate system used by Hammerspoon assumes a grid that spans all the screens (positioned as per
System Preferences->Displays->Arrangement). The origin `0,0` is at the top left corner of the *primary screen*.
(Screens to the left of the primary screen, or above it, and windows on these screens, will have negative coordinates)

---

## Submodules
 * [hs.screen.watcher](hs.screen.watcher.md)

---

## API Overview
**Variables** - _Configurable values_
 * [strictScreenInDirection](#strictscreenindirection)

**Functions** - _API calls offered directly by the extension_
 * [accessibilitySettings](#accessibilitysettings)
 * [find](#find)
 * [restoreGamma](#restoregamma)
 * [screenPositions](#screenpositions)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [allScreens](#allscreens)
 * [mainScreen](#mainscreen)
 * [primaryScreen](#primaryscreen)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [absoluteToLocal](#absolutetolocal)
 * [availableModes](#availablemodes)
 * [currentMode](#currentmode)
 * [desktopImageURL](#desktopimageurl)
 * [frame](#frame)
 * [fromUnitRect](#fromunitrect)
 * [fullFrame](#fullframe)
 * [getBrightness](#getbrightness)
 * [getForceToGray](#getforcetogray)
 * [getGamma](#getgamma)
 * [getInfo](#getinfo)
 * [getInvertedPolarity](#getinvertedpolarity)
 * [getUUID](#getuuid)
 * [id](#id)
 * [localToAbsolute](#localtoabsolute)
 * [mirrorOf](#mirrorof)
 * [mirrorStop](#mirrorstop)
 * [name](#name)
 * [next](#next)
 * [position](#position)
 * [previous](#previous)
 * [rotate](#rotate)
 * [setBrightness](#setbrightness)
 * [setForceToGray](#setforcetogray)
 * [setGamma](#setgamma)
 * [setInvertedPolarity](#setinvertedpolarity)
 * [setMode](#setmode)
 * [setOrigin](#setorigin)
 * [setPrimary](#setprimary)
 * [shotAsJPG](#shotasjpg)
 * [shotAsPNG](#shotaspng)
 * [snapshot](#snapshot)
 * [toEast](#toeast)
 * [toNorth](#tonorth)
 * [toSouth](#tosouth)
 * [toUnitRect](#tounitrect)
 * [toWest](#towest)


---

## API Documentation

#### Variables


### [strictScreenInDirection](#strictscreenindirection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen.strictScreenInDirection`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | If set to `true`, the methods `hs.screen:toEast()`, `:toNorth()` etc. will disregard screens that lie perpendicularly to the desired axis                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/screen/screen.lua line 343](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L343){target="_blank"} |

---

#### Functions


### [accessibilitySettings](#accessibilitysettings)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen.accessibilitySettings() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the current state of the screen-related accessibility settings                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the following keys, and corresponding boolean values for whether the user has enabled these options:</li><li>  ReduceMotion (only available on macOS 10.12 or later)</li><li>  ReduceTransparency</li><li>  IncreaseContrast</li><li>  InvertColors (only available on macOS 10.12 or later)</li><li>  DifferentiateWithoutColor</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 1337](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L1337){target="_blank"} |

---


### [find](#find)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen.find(hint) -> hs.screen object(s)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds screens                                                                     |
| **Parameters**                              | <ul><li>hint - search criterion for the desired screen(s); it can be:
  a number as per `hs.screen:id()`
  a string containing the UUID of the desired screen
  a string pattern that matches (via `string.match`) the screen name as per `hs.screen:name()` (for convenience, the matching will be done on lowercased strings)
  an hs.geometry *point* object, or constructor argument, with the *x and y position* of the screen in the current layout as per `hs.screen:position()`
  an hs.geometry *size* object, or constructor argument, with the *resolution* of the screen as per `hs.screen:fullFrame()`
  an hs.geometry *rect* object, or constructor argument, with an arbitrary rect in absolute coordinates; the screen containing the largest part of the rect will be returned</li></ul> |
| **Returns**                                 | <ul><li>one or more hs.screen objects that match the supplied search criterion, or `nil` if none found</li></ul>          |
| **Notes**                                   | <ul><li>for convenience you call this as `hs.screen(hint)`</li><li></li><li>Example:</li><li>```lua</li><li>hs.screen(724562417) --> Color LCD - by id</li><li>hs.screen'Dell'      --> DELL U2414M - by name</li><li>hs.screen'Built%-in' --> Built-in Retina Display, note the % to escape the hyphen repetition character</li><li>hs.screen'0,0'       --> PHL BDM4065 - by position, same as hs.screen.primaryScreen()</li><li>hs.screen{x=-1,y=0}  --> DELL U2414M - by position, screen to the immediate left of the primary screen</li><li>hs.screen'3840x2160' --> PHL BDM4065 - by screen resolution</li><li>hs.screen'-500,240 700x1300' --> DELL U2414M, by arbitrary rect</li><li>```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 43](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L43){target="_blank"} |

---


### [restoreGamma](#restoregamma)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen.restoreGamma()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Restore the gamma settings to defaults                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This returns all displays to the gamma tables specified by the user's selected ColorSync display profiles</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 294](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L294){target="_blank"} |

---


### [screenPositions](#screenpositions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen.screenPositions() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a list of all connected and enabled screens, along with their "position" relative to the primary screen                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table where each *key* is an `hs.screen` object, and the corresponding value is a table {x=X,y=Y}, where X and Y attempt to indicate each screen's position relative to the primary screen (which is at {x=0,y=0}); so e.g. a value of {x=-1,y=0} indicates a screen immediately to the left of the primary screen, and a value of {x=0,y=2} indicates a screen positioned below the primary screen, with another screen inbetween.</li></ul>          |
| **Notes**                                   | <ul><li>grid-like arrangements of same-sized screens should behave consistently; but there's no guarantee of a consistent result for more "exotic" screen arrangements</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 124](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L124){target="_blank"} |

---

#### Constructors


### [allScreens](#allscreens)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen.allScreens() -> hs.screen[]`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns all the screens                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing one or more `hs.screen` objects</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 907](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L907){target="_blank"} |

---


### [mainScreen](#mainscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen.mainScreen() -> screen`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns the 'main' screen, i.e. the one containing the currently focused window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An `hs.screen` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 932](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L932){target="_blank"} |

---


### [primaryScreen](#primaryscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen.primaryScreen() -> screen`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Gets the primary screen                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An `hs.screen` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 30](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L30){target="_blank"} |

---

#### Methods


### [absoluteToLocal](#absolutetolocal)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:absoluteToLocal(geom) -> hs.geometry object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Transforms from the absolute coordinate space used by OSX/Hammerspoon to the screen's local coordinate space, where `0,0` is at the screen's top left corner                                                                     |
| **Parameters**                              | <ul><li>geom - an hs.geometry point or rect, or arguments to construct one</li></ul> |
| **Returns**                                 | <ul><li>an hs.geometry point or rect, transformed to the screen's local coordinate space</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 259](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L259){target="_blank"} |

---


### [availableModes](#availablemodes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:availableModes() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table containing the screen modes supported by the screen. A screen mode is a combination of resolution, scaling factor and colour depth                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the supported screen modes. The keys of the table take the form of "1440x900@2x" (for a HiDPI mode) or "1680x1050@1x" (for a native DPI mode). The values are tables which contain the keys:</li><li> w - A number containing the width of the screen mode in points</li><li> h - A number containing the height of the screen mode in points</li><li> scale - A number containing the scaling factor of the screen mode (typically `1` for a native mode, `2` for a HiDPI mode)</li><li> freq - A number containing the vertical refresh rate in Hz</li><li> depth - A number containing the bit depth of the display mode</li></ul>          |
| **Notes**                                   | <ul><li>Prior to 0.9.83, only 32-bit colour modes would be returned, but now all colour depths are returned. This has necessitated changing the naming of the modes in the returned table.</li><li>"points" are not necessarily the same as pixels, because they take the scale factor into account (e.g. "1440x900@2x" is a 2880x1800 screen resolution, with a scaling factor of 2, i.e. with HiDPI pixel-doubled rendering enabled), however, they are far more useful to work with than native pixel modes, when a Retina screen is involved. For non-retina screens, points and pixels are equivalent.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 174](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L174){target="_blank"} |

---


### [currentMode](#currentmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:currentMode() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table describing the current screen mode                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current screen mode. The keys of the table are:</li><li> w - A number containing the width of the screen mode in points</li><li> h - A number containing the height of the screen mode in points</li><li> scale - A number containing the scaling factor of the screen mode (typically `1` for a native mode, `2` for a HiDPI mode)</li><li> freq - A number containing the vertical refresh rate in Hz</li><li> depth - A number containing the bit depth</li><li> desc - A string containing a representation of the mode as used in `hs.screen:availableModes()` - e.g. "1920x1080@2x 60Hz 4bpp"</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 125](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L125){target="_blank"} |

---


### [desktopImageURL](#desktopimageurl)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:desktopImageURL([imageURL])`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets/Sets the desktop background image for a screen                                                                     |
| **Parameters**                              | <ul><li>imageURL - An optional file:// URL to an image file to set as the background. If omitted, the current file URL is returned</li></ul> |
| **Returns**                                 | <ul><li>the `hs.screen` object if a new URL was set, otherwise a string containing the current URL</li></ul>          |
| **Notes**                                   | <ul><li>If the user has set a folder of pictures to be alternated as the desktop background, the path to that folder will be returned.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 1295](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L1295){target="_blank"} |

---


### [frame](#frame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:frame() -> hs.geometry rect`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the screen frame, without the dock or menu.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an hs.geometry rect describing this screen's "usable" frame (i.e. without the dock and menu bar) in absolute coordinates</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 198](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L198){target="_blank"} |

---


### [fromUnitRect](#fromunitrect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:fromUnitRect(unitrect) -> hs.geometry rect`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the absolute rect of a given unit rect within this screen                                                                     |
| **Parameters**                              | <ul><li>unitrect - an hs.geometry unit rect, or arguments to construct one</li></ul> |
| **Returns**                                 | <ul><li>an hs.geometry rect describing the given unit rect in absolute coordinates</li></ul>          |
| **Notes**                                   | <ul><li>this method is just a convenience wrapper for `hs.geometry.fromUnitRect(unitrect,this_screen:frame())`</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 214](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L214){target="_blank"} |

---


### [fullFrame](#fullframe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:fullFrame() -> hs.geometry rect`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the screen frame, including the dock and menu.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an hs.geometry rect describing this screen's frame in absolute coordinates</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 182](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L182){target="_blank"} |

---


### [getBrightness](#getbrightness)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:getBrightness() -> number or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the screen's brightness                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A floating point number between 0 and 1, containing the current brightness level, or nil if the display does not support brightness queries</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 629](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L629){target="_blank"} |

---


### [getForceToGray](#getforcetogray)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen.getForceToGray() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the screen's ForceToGray setting                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the ForceToGray mode is set, otherwise false</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 774](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L774){target="_blank"} |

---


### [getGamma](#getgamma)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:getGamma() -> [whitepoint, blackpoint] or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the current whitepoint and blackpoint of the screen                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the white point and black point of the screen, or nil if an error occurred. The keys `whitepoint` and `blackpoint` each have values of a table containing the following keys, with corresponding values between 0.0 and 1.0:</li><li> red</li><li> green</li><li> blue</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 316](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L316){target="_blank"} |

---


### [getInfo](#getinfo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:getInfo() -> table or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a table of information about an `hs.screen` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li> A table containing various information, or nil if an error occurred.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 740](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L740){target="_blank"} |

---


### [getInvertedPolarity](#getinvertedpolarity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen.getInvertedPolarity() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the screen's InvertedPolarity setting                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the InvertedPolarity mode is set, otherwise false</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 812](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L812){target="_blank"} |

---


### [getUUID](#getuuid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:getUUID() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the UUID of an `hs.screen` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the UUID, or nil if an error occurred.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 711](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L711){target="_blank"} |

---


### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:id() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a screen's unique ID                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the ID of the screen</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 45](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L45){target="_blank"} |

---


### [localToAbsolute](#localtoabsolute)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:localToAbsolute(geom) -> hs.geometry object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Transforms from the screen's local coordinate space, where `0,0` is at the screen's top left corner, to the absolute coordinate space used by OSX/Hammerspoon                                                                     |
| **Parameters**                              | <ul><li>geom - an hs.geometry point or rect, or arguments to construct one</li></ul> |
| **Returns**                                 | <ul><li>an hs.geometry point or rect, transformed to the absolute coordinate space</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 246](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L246){target="_blank"} |

---


### [mirrorOf](#mirrorof)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:mirrorOf(aScreen[, permanent]) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Make this screen mirror another                                                                     |
| **Parameters**                              | <ul><li>aScreen - an hs.screen object you wish to mirror</li><li>permanent - an optional bool, true if this should be configured permanently, false if it should apply just for this login session. Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>true if the operation succeeded, otherwise false</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 1145](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L1145){target="_blank"} |

---


### [mirrorStop](#mirrorstop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:mirrorStop([permanent]) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops this screen mirroring another                                                                     |
| **Parameters**                              | <ul><li>permanent - an optional bool, true if this should be configured permanently, false if it should apply just for this login session. Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>true if the operation succeeded, otherwise false</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 1178](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L1178){target="_blank"} |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:name() -> string or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the preferred name for the screen set by the manufacturer                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the name of the screen, or nil if an error occurred</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 64](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L64){target="_blank"} |

---


### [next](#next)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:next() -> screen`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the screen 'after' this one (in arbitrary order); this method wraps around to the first screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An `hs.screen` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 272](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L272){target="_blank"} |

---


### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:position() -> x, y`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Return a given screen's position relative to the primary screen - see 'hs.screen.screenPositions()'                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>two integers indicating the screen position in the current screen arrangement, in the x and y axis respectively.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 166](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L166){target="_blank"} |

---


### [previous](#previous)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:previous() -> screen`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the screen 'before' this one (in arbitrary order); this method wraps around to the last screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An `hs.screen` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 289](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L289){target="_blank"} |

---


### [rotate](#rotate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:rotate([degrees]) -> bool or rotation angle`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets/Sets the rotation of a screen                                                                     |
| **Parameters**                              | <ul><li>degrees - An optional number indicating how many degrees clockwise, to rotate. If no number is provided, the current rotation will be returned. This number must be one of:
  0
  90
  180
  270</li></ul> |
| **Returns**                                 | <ul><li>If the rotation is being set, a boolean, true if the operation succeeded, otherwise false. If the rotation is being queried, a number will be returned</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 1023](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L1023){target="_blank"} |

---


### [setBrightness](#setbrightness)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:setBrightness(brightness) -> `hs.screen` object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the screen's brightness                                                                     |
| **Parameters**                              | <ul><li>brightness - A floating point number between 0 and 1</li></ul> |
| **Returns**                                 | <ul><li>The `hs.screen` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 676](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L676){target="_blank"} |

---


### [setForceToGray](#setforcetogray)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen.setForceToGray(ForceToGray) -> None`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the screen's ForceToGray mode                                                                     |
| **Parameters**                              | <ul><li>ForceToGray - A boolean if ForceToGray mode should be enabled</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 793](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L793){target="_blank"} |

---


### [setGamma](#setgamma)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:setGamma(whitepoint, blackpoint) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the current white point and black point of the screen                                                                     |
| **Parameters**                              | <ul><li>whitepoint - A table containing color component values between 0.0 and 1.0 for each of the keys:
  red
  green
  blue</li><li>blackpoint - A table containing color component values between 0.0 and 1.0 for each of the keys:
  red
  green
  blue</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the gamma settings were applied, false if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>If the whitepoint and blackpoint specified, are very similar, it will be impossible to read the screen. You should exercise caution, and may wish to bind a hotkey to `hs.screen.restoreGamma()` when experimenting</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 512](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L512){target="_blank"} |

---


### [setInvertedPolarity](#setinvertedpolarity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen.setInvertedPolarity(InvertedPolarity) -> None`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the screen's InvertedPolarity mode                                                                     |
| **Parameters**                              | <ul><li>InvertedPolarity - A boolean if InvertedPolarity mode should be enabled</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 831](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L831){target="_blank"} |

---


### [setMode](#setmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:setMode(width, height, scale, frequency, depth) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the screen to a new mode                                                                     |
| **Parameters**                              | <ul><li>width - A number containing the width in points of the new mode</li><li>height - A number containing the height in points of the new mode</li><li>scale - A number containing the scaling factor of the new mode (typically 1 for native pixel resolutions, 2 for HiDPI/Retina resolutions)</li><li>frequency - A number containing the vertical refresh rate, in Hertz of the new mode</li><li>depth - A number containing the bit depth of the new mode</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the requested mode was set, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>The available widths/heights/scales can be seen in the output of `hs.screen:availableModes()`, however, it should be noted that the CoreGraphics subsystem seems to list more modes for a given screen than it is actually prepared to set, so you may find that seemingly valid modes still return false. It is not currently understood why this is so!</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 246](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L246){target="_blank"} |

---


### [setOrigin](#setorigin)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:setOrigin(x, y) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the origin of a screen in the global display coordinate space. The origin of the main or primary display is (0,0). The new origin is placed as close as possible to the requested location, without overlapping or leaving a gap between displays. If you use this function to change the origin of a mirrored display, the display may be removed from the mirroring set.                                                                     |
| **Parameters**                              | <ul><li>x - The desired x-coordinate for the upper-left corner of the display.</li><li>y - The desired y-coordinate for the upper-left corner of the display.</li></ul> |
| **Returns**                                 | <ul><li>true if the operation succeeded, otherwise false</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 1102](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L1102){target="_blank"} |

---


### [setPrimary](#setprimary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:setPrimary() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the screen to be the primary display (i.e. contain the menubar and dock)                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the operation succeeded, otherwise false</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 950](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L950){target="_blank"} |

---


### [shotAsJPG](#shotasjpg)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:shotAsJPG(filePath[, screenRect])`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves an image of the screen to a JPG file                                                                     |
| **Parameters**                              | <ul><li>filePath - A string containing a file path to save the screenshot as</li><li>screenRect - An optional `hs.geometry` rect (or arguments for its constructor) containing a portion of the screen to capture. Defaults to the whole screen</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 410](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L410){target="_blank"} |

---


### [shotAsPNG](#shotaspng)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:shotAsPNG(filePath[, screenRect])`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves an image of the screen to a PNG file                                                                     |
| **Parameters**                              | <ul><li>filePath - A string containing a file path to save the screenshot as</li><li>screenRect - An optional `hs.geometry` rect (or arguments for its constructor) containing a portion of the screen to capture. Defaults to the whole screen</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 395](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L395){target="_blank"} |

---


### [snapshot](#snapshot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:snapshot([rect]) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Captures an image of the screen                                                                     |
| **Parameters**                              | <ul><li>rect - An optional `rect-table` containing a portion of the screen to capture. Defaults to the whole screen</li></ul> |
| **Returns**                                 | <ul><li>An `hs.image` object, or nil if an error occurred</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/libscreen.m line 1270](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/libscreen.m#L1270){target="_blank"} |

---


### [toEast](#toeast)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:toEast(from, strict) -> hs.screen object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the first screen to the east of this one, ordered by proximity to its center or a specified point.                                                                     |
| **Parameters**                              | <ul><li>from - An `hs.geometry.rect` or `hs.geometry.point` object; if omitted, the geometric center of this screen will be used</li><li>strict - If `true`, disregard screens that lie completely above or below this one (alternatively, set `hs.screen.strictScreenInDirection`)</li></ul> |
| **Returns**                                 | <ul><li> An `hs.screen` object, or `nil` if not found</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 348](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L348){target="_blank"} |

---


### [toNorth](#tonorth)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:toNorth(from, strict) -> hs.screen object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the first screen to the north of this one, ordered by proximity to its center or a specified point.                                                                     |
| **Parameters**                              | <ul><li>from - An `hs.geometry.rect` or `hs.geometry.point` object; if omitted, the geometric center of this screen will be used</li><li>strict - If `true`, disregard screens that lie completely to the left or to the right of this one (alternatively, set `hs.screen.strictScreenInDirection`)</li></ul> |
| **Returns**                                 | <ul><li> An `hs.screen` object, or `nil` if not found</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 370](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L370){target="_blank"} |

---


### [toSouth](#tosouth)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:toSouth(from, strict) -> hs.screen object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the first screen to the south of this one, ordered by proximity to its center or a specified point.                                                                     |
| **Parameters**                              | <ul><li>from - An `hs.geometry.rect` or `hs.geometry.point` object; if omitted, the geometric center of this screen will be used</li><li>strict - If `true`, disregard screens that lie completely to the left or to the right of this one (alternatively, set `hs.screen.strictScreenInDirection`)</li></ul> |
| **Returns**                                 | <ul><li> An `hs.screen` object, or `nil` if not found</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 381](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L381){target="_blank"} |

---


### [toUnitRect](#tounitrect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:toUnitRect(rect) -> hs.geometry unitrect`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the unit rect of a given rect, relative to this screen                                                                     |
| **Parameters**                              | <ul><li>rect - an hs.geometry rect, or arguments to construct one</li></ul> |
| **Returns**                                 | <ul><li>an hs.geometry unit rect describing the given rect relative to this screen's frame</li></ul>          |
| **Notes**                                   | <ul><li>this method is just a convenience wrapper for `hs.geometry.toUnitRect(rect,this_screen:frame())`</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 230](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L230){target="_blank"} |

---


### [toWest](#towest)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screen:toWest(from, strict) -> hs.screen object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the first screen to the west of this one, ordered by proximity to its center or a specified point.                                                                     |
| **Parameters**                              | <ul><li>from - An `hs.geometry.rect` or `hs.geometry.point` object; if omitted, the geometric center of this screen will be used</li><li>strict - If `true`, disregard screens that lie completely above or below this one (alternatively, set `hs.screen.strictScreenInDirection`)</li></ul> |
| **Returns**                                 | <ul><li> An `hs.screen` object, or `nil` if not found</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/screen/screen.lua line 359](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/screen/screen.lua#L359){target="_blank"} |

---


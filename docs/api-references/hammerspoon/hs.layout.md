# hs.layout

Window layout manager

This extension allows you to trigger window placement/sizing to a number of windows at once

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [left25](#left25)
 * [left30](#left30)
 * [left50](#left50)
 * [left70](#left70)
 * [left75](#left75)
 * [maximized](#maximized)
 * [right25](#right25)
 * [right30](#right30)
 * [right50](#right50)
 * [right70](#right70)
 * [right75](#right75)

**Functions** - _API calls offered directly by the extension_
 * [apply](#apply)


---

## API Documentation

#### Constants


### [left25](#left25)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.layout.left25`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A unit rect which will make a window occupy the left 25% of a screen                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/layout/layout.lua line 14](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/layout/layout.lua#L14) |

---


### [left30](#left30)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.layout.left30`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A unit rect which will make a window occupy the left 30% of a screen                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/layout/layout.lua line 19](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/layout/layout.lua#L19) |

---


### [left50](#left50)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.layout.left50`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A unit rect which will make a window occupy the left 50% of a screen                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/layout/layout.lua line 24](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/layout/layout.lua#L24) |

---


### [left70](#left70)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.layout.left70`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A unit rect which will make a window occupy the left 70% of a screen                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/layout/layout.lua line 29](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/layout/layout.lua#L29) |

---


### [left75](#left75)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.layout.left75`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A unit rect which will make a window occupy the left 75% of a screen                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/layout/layout.lua line 34](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/layout/layout.lua#L34) |

---


### [maximized](#maximized)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.layout.maximized`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A unit rect which will make a window occupy all of a screen                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/layout/layout.lua line 64](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/layout/layout.lua#L64) |

---


### [right25](#right25)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.layout.right25`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A unit rect which will make a window occupy the right 25% of a screen                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/layout/layout.lua line 39](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/layout/layout.lua#L39) |

---


### [right30](#right30)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.layout.right30`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A unit rect which will make a window occupy the right 30% of a screen                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/layout/layout.lua line 44](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/layout/layout.lua#L44) |

---


### [right50](#right50)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.layout.right50`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A unit rect which will make a window occupy the right 50% of a screen                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/layout/layout.lua line 49](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/layout/layout.lua#L49) |

---


### [right70](#right70)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.layout.right70`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A unit rect which will make a window occupy the right 70% of a screen                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/layout/layout.lua line 54](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/layout/layout.lua#L54) |

---


### [right75](#right75)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.layout.right75`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A unit rect which will make a window occupy the right 75% of a screen                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/layout/layout.lua line 59](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/layout/layout.lua#L59) |

---

#### Functions


### [apply](#apply)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.layout.apply(table[, windowTitleComparator])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Applies a layout to applications/windows                                                                     |
| **Parameters**                              | <ul><li>table - A table describing your desired layout. Each element in the table should be another table describing a set of windows to match, and their desired size/position. The fields in each of these tables are:
  A string containing an application name, or an `hs.application` object, or nil
  A string containing a window title, or an `hs.window` object, or a function, or nil
  A string containing a screen name, or an `hs.screen` object, or a function that accepts no parameters and returns an `hs.screen` object, or nil to select the first available screen
  A Unit rect, or a function which is called for each window and returns a unit rect (see `hs.window.moveToUnit()`). The function should accept one parameter, which is the window object.
  A Frame rect, or a function which is called for each window and returns a frame rect (see `hs.screen:frame()`). The function should accept one parameter, which is the window object.
  A Full-frame rect, of a function which is called for each window and returns a full-frame rect (see `hs.screen:fullFrame()`). The function should accept one parameter, which is the window object.</li><li>windowTitleComparator - (optional) Function to use for window title comparison. It is called with two string arguments (below) and its return value is evaluated as a boolean. If no comparator is provided, the '==' operator is used
  windowTitle: The `:title()` of the window object being examined
  layoutWindowTitle: The window title string (second field) specified in each element of the layout table
  Optionally a final element, the key "options" and a table value that can contain the following keys:`absolute_x`: A boolean indicating that the x value in a frame rect above, is an absolute co-ordinate (ie useful for negative absolute co-ordinates)`absolute_y`: A boolean indicating that the y value in a frame rect above, is an absolute co-ordinate (ie useful for negative absolute co-ordinates)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>If the application name argument is nil, window titles will be matched regardless of which app they belong to</li><li>If the window title argument is nil, all windows of the specified application will be matched</li><li>If the window title argument is a function, the function will be called with the application name argument (which may be nil), and should return a table of `hs.window` objects (even if there is only one window it must be in a table)</li><li>You can specify both application name and window title if you want to match only one window of a particular application</li><li>If you specify neither application name or window title, no windows will be matched :)</li><li>Monitor name is a string, as found in `hs.screen:name()` or `hs.screen:getUUID()`. You can also pass an `hs.screen` object, or a function that returns an `hs.screen` object. If you pass nil, the first screen will be selected</li><li>The final three arguments use `hs.geometry.rect()` objects to describe the desired position and size of matched windows:</li><li>  Unit rect will be passed to `hs.window.moveToUnit()`</li><li>  Frame rect will be passed to `hs.window.setFrame()` (including menubar and dock)</li><li>  Full-frame rect will be passed to `hs.window.setFrame()` (ignoring menubar and dock)</li><li>If either the x or y components of frame/full-frame rect are negative, they will be applied as offsets against the opposite edge of the screen (e.g. If x is -100 then the left edge of the window will be 100 pixels from the right edge of the screen)</li><li>Only one of the rect arguments will apply to any matched windows. If you specify more than one, the first will win</li><li>An example usage:</li><li></li><li>    ```lua</li><li>      layout1 = {</li><li>        {"Mail", nil, "Color LCD", hs.layout.maximized, nil, nil},</li><li>        {"Safari", nil, "Thunderbolt Display", hs.layout.maximized, nil, nil},</li><li>        {"iTunes", "iTunes", "Color LCD", hs.layout.maximized, nil, nil},</li><li>        {"iTunes", "MiniPlayer", "Color LCD", nil, nil, hs.geometry.rect(0, -48, 400, 48)},</li><li>      }```</li><li>An example of a function that works well as a `windowTitleComparator` is the Lua built-in `string.match`, which uses Lua Patterns to match strings</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/layout/layout.lua line 69](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/layout/layout.lua#L69) |

---


# hs.hints

Switch focus with a transient per-application keyboard shortcut

---

## API Overview
**Variables** - _Configurable values_
 * [fontName](#fontname)
 * [fontSize](#fontsize)
 * [hintChars](#hintchars)
 * [iconAlpha](#iconalpha)
 * [showTitleThresh](#showtitlethresh)
 * [style](#style)
 * [titleMaxSize](#titlemaxsize)

**Functions** - _API calls offered directly by the extension_
 * [windowHints](#windowhints)


---

## API Documentation

#### Variables


### [fontName](#fontname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hints.fontName`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A fully specified family-face name, preferably the PostScript name, such as Helvetica-BoldOblique or Times-Roman. (The Font Book app displays PostScript names of fonts in the Font Info panel.)                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/hints/hints.lua line 25](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hints/hints.lua#L25) |

---


### [fontSize](#fontsize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hints.fontSize`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The size of font that should be used. A value of 0.0 will use the default size.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/hints/hints.lua line 31](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hints/hints.lua#L31) |

---


### [hintChars](#hintchars)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hints.hintChars`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | This controls the set of characters that will be used for window hints. They must be characters found in hs.keycodes.map                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/hints/hints.lua line 10](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hints/hints.lua#L10) |

---


### [iconAlpha](#iconalpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hints.iconAlpha`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Opacity of the application icon. Default is 0.95.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/hints/hints.lua line 47](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hints/hints.lua#L47) |

---


### [showTitleThresh](#showtitlethresh)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hints.showTitleThresh`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | If there are less than or equal to this many windows on screen their titles will be shown in the hints.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/hints/hints.lua line 36](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hints/hints.lua#L36) |

---


### [style](#style)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hints.style`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | If this is set to "vimperator", every window hint starts with the first character                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/hints/hints.lua line 19](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hints/hints.lua#L19) |

---


### [titleMaxSize](#titlemaxsize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hints.titleMaxSize`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | If the title is longer than maxSize, the string is truncated, -1 to disable, valid value is >= 6                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/hints/hints.lua line 42](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hints/hints.lua#L42) |

---

#### Functions


### [windowHints](#windowhints)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hints.windowHints([windows, callback, allowNonStandard])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays a keyboard hint for switching focus to each window                                                                     |
| **Parameters**                              | <ul><li>windows - An optional table containing some `hs.window` objects. If this value is nil, all windows will be hinted</li><li>callback - An optional function that will be called when a window has been selected by the user. The function will be called with a single argument containing the `hs.window` object of the window chosen by the user</li><li>allowNonStandard - An optional boolean.  If true, all windows will be included, not just standard windows</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>If there are more windows open than there are characters available in hs.hints.hintChars, multiple characters will be used</li><li>If hints.style is set to "vimperator", every window hint is prefixed with the first character of the parent application's name</li><li>To display hints only for the currently focused application, try something like:</li><li> `hs.hints.windowHints(hs.window.focusedWindow():application():allWindows())`</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/hints/hints.lua line 201](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hints/hints.lua#L201) |

---


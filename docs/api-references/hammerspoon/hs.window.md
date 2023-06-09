# hs.window

Inspect/manipulate windows

Notes:
 * See `hs.screen` and `hs.geometry` for more information on how Hammerspoon uses window/screen frames and coordinates

---

## Submodules
 * [hs.window.filter](hs.window.filter.md)
 * [hs.window.highlight](hs.window.highlight.md)
 * [hs.window.layout](hs.window.layout.md)
 * [hs.window.switcher](hs.window.switcher.md)
 * [hs.window.tiling](hs.window.tiling.md)

---

## API Overview
**Variables** - _Configurable values_
 * [animationDuration](#animationduration)
 * [setFrameCorrectness](#setframecorrectness)

**Functions** - _API calls offered directly by the extension_
 * [allWindows](#allwindows)
 * [desktop](#desktop)
 * [invisibleWindows](#invisiblewindows)
 * [list](#list)
 * [minimizedWindows](#minimizedwindows)
 * [orderedWindows](#orderedwindows)
 * [setShadows](#setshadows)
 * [snapshotForID](#snapshotforid)
 * [timeout](#timeout)
 * [visibleWindows](#visiblewindows)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [find](#find)
 * [focusedWindow](#focusedwindow)
 * [frontmostWindow](#frontmostwindow)
 * [get](#get)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [application](#application)
 * [becomeMain](#becomemain)
 * [centerOnScreen](#centeronscreen)
 * [close](#close)
 * [focus](#focus)
 * [focusTab](#focustab)
 * [focusWindowEast](#focuswindoweast)
 * [focusWindowNorth](#focuswindownorth)
 * [focusWindowSouth](#focuswindowsouth)
 * [focusWindowWest](#focuswindowwest)
 * [frame](#frame)
 * [id](#id)
 * [isFullScreen](#isfullscreen)
 * [isMaximizable](#ismaximizable)
 * [isMinimized](#isminimized)
 * [isStandard](#isstandard)
 * [isVisible](#isvisible)
 * [maximize](#maximize)
 * [minimize](#minimize)
 * [move](#move)
 * [moveOneScreenEast](#moveonescreeneast)
 * [moveOneScreenNorth](#moveonescreennorth)
 * [moveOneScreenSouth](#moveonescreensouth)
 * [moveOneScreenWest](#moveonescreenwest)
 * [moveToScreen](#movetoscreen)
 * [moveToUnit](#movetounit)
 * [otherWindowsAllScreens](#otherwindowsallscreens)
 * [otherWindowsSameScreen](#otherwindowssamescreen)
 * [raise](#raise)
 * [role](#role)
 * [screen](#screen)
 * [sendToBack](#sendtoback)
 * [setFrame](#setframe)
 * [setFrameInScreenBounds](#setframeinscreenbounds)
 * [setFrameWithWorkarounds](#setframewithworkarounds)
 * [setFullScreen](#setfullscreen)
 * [setSize](#setsize)
 * [setTopLeft](#settopleft)
 * [size](#size)
 * [snapshot](#snapshot)
 * [subrole](#subrole)
 * [tabCount](#tabcount)
 * [title](#title)
 * [toggleFullScreen](#togglefullscreen)
 * [toggleZoom](#togglezoom)
 * [topLeft](#topleft)
 * [unminimize](#unminimize)
 * [windowsToEast](#windowstoeast)
 * [windowsToNorth](#windowstonorth)
 * [windowsToSouth](#windowstosouth)
 * [windowsToWest](#windowstowest)
 * [zoomButtonRect](#zoombuttonrect)


---

## API Documentation

#### Variables


### [animationDuration](#animationduration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.animationDuration (number)`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The default duration for animations, in seconds. Initial value is 0.2; set to 0 to disable animations.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/window/window.lua line 21](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L21) |

---


### [setFrameCorrectness](#setframecorrectness)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.setFrameCorrectness`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Using `hs.window:setFrame()` in some cases does not work as expected: namely, the bottom (or Dock) edge, and edges between screens, might                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/window/window.lua line 392](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L392) |

---

#### Functions


### [allWindows](#allwindows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.allWindows() -> list of hs.window objects`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns all windows                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A list of `hs.window` objects representing all open windows</li></ul>          |
| **Notes**                                   | <ul><li>`visibleWindows()`, `orderedWindows()`, `get()`, `find()`, and several more functions and methods in this and other</li><li>    modules make use of this function, so it is important to understand its limitations</li><li>This function queries all applications for their windows every time it is invoked; if you need to call it a lot and</li><li>   performance is not acceptable consider using the `hs.window.filter` module</li><li>This function can only return windows in the current Mission Control Space; if you need to address windows across</li><li>   different Spaces you can use the `hs.window.filter` module</li><li>   - if `Displays have separate Spaces` is *on* (in System Preferences>Mission Control) the current Space is defined</li><li>     as the union of all currently visible Spaces</li><li>   - minimized windows and hidden windows (i.e. belonging to hidden apps, e.g. via cmd-h) are always considered</li><li>     to be in the current Space</li><li>This function filters out the desktop "window"; use `hs.window.desktop()` to address it. (Note however that</li><li>   `hs.application.get'Finder':allWindows()` *will* include the desktop in the returned list)</li><li>Beside the limitations discussed above, this function will return *all* windows as reported by OSX, including some</li><li>   "windows" that one wouldn't expect: for example, every Google Chrome (actual) window has a companion window for its</li><li>   status bar; therefore you might get unexpected results  - in the Chrome example, calling `hs.window.focusWindowSouth()`</li><li>   from a Chrome window would end up "focusing" its status bar, and therefore the proper window itself, seemingly resulting</li><li>   in a no-op. In order to avoid such surprises you can use the `hs.window.filter` module, and more specifically</li><li>   the default windowfilter (`hs.window.filter.default`) which filters out known cases of not-actual-windows</li><li>Some windows will not be reported by OSX - e.g. things that are on different Spaces, or things that are Full Screen</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 54](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L54) |

---


### [desktop](#desktop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.desktop() -> hs.window object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the desktop "window"                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An `hs.window` object representing the desktop, or nil if Finder is not running</li></ul>          |
| **Notes**                                   | <ul><li>The desktop belongs to Finder.app: when Finder is the active application, you can focus the desktop by cycling</li><li>   through windows via cmd-`</li><li>The desktop window has no id, a role of `AXScrollArea` and no subrole</li><li>The desktop is filtered out from `hs.window.allWindows()` (and downstream uses)</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 33](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L33) |

---


### [invisibleWindows](#invisiblewindows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.invisibleWindows() -> list of hs.window objects`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets all invisible windows                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A list containing `hs.window` objects representing all windows that are not visible as per `hs.window:isVisible()`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 139](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L139) |

---


### [list](#list)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.list(allWindows) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table containing all the window data retrieved from `CGWindowListCreate`.                                                                     |
| **Parameters**                              | <ul><li>allWindows - Get all the windows, even those "below" the Dock window.</li></ul> |
| **Returns**                                 | <ul><li>`true` is succesful otherwise `false` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>This allows you to get window information without Accessibility Permissions.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 21](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L21) |

---


### [minimizedWindows](#minimizedwindows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.minimizedWindows() -> list of hs.window objects`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets all minimized windows                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A list containing `hs.window` objects representing all windows that are minimized as per `hs.window:isMinimized()`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 156](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L156) |

---


### [orderedWindows](#orderedwindows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.orderedWindows() -> list of hs.window objects`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns all visible windows, ordered from front to back                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A list of `hs.window` objects representing all visible windows, ordered from front to back</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 173](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L173) |

---


### [setShadows](#setshadows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.setShadows(shadows)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables/Disables window shadows                                                                     |
| **Parameters**                              | <ul><li>shadows - A boolean, true to show window shadows, false to hide window shadows</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function uses a private, undocumented OS X API call, so it is not guaranteed to work in any future OS X release</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 563](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L563) |

---


### [snapshotForID](#snapshotforid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.snapshotForID(ID [, keepTransparency]) -> hs.image-object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a snapshot of the window specified by the ID as an `hs.image` object                                                                     |
| **Parameters**                              | <ul><li>ID - Window ID of the window to take a snapshot of.</li><li>keepTransparency - optional boolean value indicating if the windows alpha value (transparency) should be maintained in the resulting image or if it should be fully opaque (default).</li></ul> |
| **Returns**                                 | <ul><li>`hs.image` object of the window snapshot or nil if unable to create a snapshot</li></ul>          |
| **Notes**                                   | <ul><li>See also method `hs.window:snapshot()`</li><li>Because the window ID cannot always be dynamically determined, this function will allow you to provide the ID of a window that was cached earlier.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 589](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L589) |

---


### [timeout](#timeout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.timeout(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the timeout value used in the accessibility API.                                                                     |
| **Parameters**                              | <ul><li>value - The number of seconds for the new timeout value.</li></ul> |
| **Returns**                                 | <ul><li>`true` is succesful otherwise `false` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 65](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L65) |

---


### [visibleWindows](#visiblewindows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.visibleWindows() -> list of hs.window objects`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets all visible windows                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A list containing `hs.window` objects representing all windows that are visible as per `hs.window:isVisible()`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 122](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L122) |

---

#### Constructors


### [find](#find)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.find(hint) -> hs.window object(s)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Finds windows                                                                     |
| **Parameters**                              | <ul><li>hint - search criterion for the desired window(s); it can be: - an id number as per `hs.window:id()` - a string pattern that matches (via `string.find`) the window title as per `hs.window:title()` (for convenience, the matching will be done on lowercased strings)</li></ul> |
| **Returns**                                 | <ul><li>one or more hs.window objects that match the supplied search criterion, or `nil` if none found</li></ul>          |
| **Notes**                                   | <ul><li>for convenience you can call this as `hs.window(hint)`</li><li>see also `hs.window.get`</li><li>for more sophisticated use cases and/or for better performance if you call this a lot, consider using `hs.window.filter`</li><li></li><li>Usage:</li><li>```</li><li>-- by id</li><li>hs.window(8812):title() --> Hammerspoon Console</li><li>-- by title</li><li>hs.window'bash':application():name() --> Terminal</li><li>```</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 208](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L208) |

---


### [focusedWindow](#focusedwindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.focusedWindow() -> window`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns the window that has keyboard/mouse focus                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An `hs.window` object representing the currently focused window</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 94](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L94) |

---


### [frontmostWindow](#frontmostwindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.frontmostWindow() -> hs.window object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns the focused window or, if no window has focus, the frontmost one                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>* An `hs.window` object representing the frontmost window, or `nil` if there are no visible windows</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 748](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L748) |

---


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.get(hint) -> hs.window object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Gets a specific window                                                                     |
| **Parameters**                              | <ul><li>hint - search criterion for the desired window; it can be: - an id number as per `hs.window:id()` - a window title string as per `hs.window:title()`</li></ul> |
| **Returns**                                 | <ul><li>the first hs.window object that matches the supplied search criterion, or `nil` if not found</li></ul>          |
| **Notes**                                   | <ul><li>see also `hs.window.find` and `hs.application:getWindow()`</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 189](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L189) |

---

#### Methods


### [application](#application)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:application() -> app or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the `hs.application` object the window belongs to                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An `hs.application` object representing the application that owns the window, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 482](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L482) |

---


### [becomeMain](#becomemain)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:becomeMain() -> window`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Makes the window the main window of its application                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul><li>Make a window become the main window does not transfer focus to the application. See `hs.window.focus()`</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 500](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L500) |

---


### [centerOnScreen](#centeronscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:centerOnScreen([screen][, ensureInScreenBounds][, duration]) --> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Centers the window on a screen                                                                     |
| **Parameters**                              | <ul><li>screen - (optional) An `hs.screen` object or argument for `hs.screen.find`; if nil, use the screen the window is currently on</li><li>ensureInScreenBounds - (optional) if `true`, use `setFrameInScreenBounds()` to ensure the resulting window frame is fully contained within the window's screen</li><li>duration - (optional) The number of seconds to animate the transition. Defaults to the value of `hs.window.animationDuration`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 864](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L864) |

---


### [close](#close)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:close() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Closes the window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the operation succeeded, false if not</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 324](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L324) |

---


### [focus](#focus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:focus() -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Focuses the window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 508](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L508) |

---


### [focusTab](#focustab)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:focusTab(index) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Focuses the tab in the window's tab group at index, or the last tab if index is out of bounds                                                                     |
| **Parameters**                              | <ul><li>index - A number, a 1-based index of a tab to focus</li></ul> |
| **Returns**                                 | <ul><li>true if the tab was successfully pressed, or false if there was a problem</li></ul>          |
| **Notes**                                   | <ul><li>This method works with document tab groups and some app tabs, like Chrome and Safari.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 341](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L341) |

---


### [focusWindowEast](#focuswindoweast)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:focusWindowEast([candidateWindows[, frontmost[, strict]]]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Focuses the nearest possible window to the east (i.e. right)                                                                     |
| **Parameters**                              | <ul><li>candidateWindows - (optional) a list of candidate windows to consider; if nil, all visible windows to the east are candidates.</li><li>frontmost - (optional) boolean, if true focuses the nearest window that isn't occluded by any other window</li><li>strict - (optional) boolean, if true only consider windows at an angle between 45° and -45° on the eastward axis</li></ul> |
| **Returns**                                 | <ul><li>`true` if a window was found and focused, `false` otherwise; `nil` if the search couldn't take place</li></ul>          |
| **Notes**                                   | <ul><li>If you don't pass `candidateWindows`, Hammerspoon will query for the list of all visible windows</li><li>   every time this method is called; this can be slow, and some undesired "windows" could be included</li><li>   (see the notes for `hs.window.allWindows()`); consider using the equivalent methods in</li><li>   `hs.window.filter` instead</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 783](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L783) |

---


### [focusWindowNorth](#focuswindownorth)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:focusWindowNorth([candidateWindows[, frontmost[, strict]]]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Focuses the nearest possible window to the north (i.e. up)                                                                     |
| **Parameters**                              | <ul><li>candidateWindows - (optional) a list of candidate windows to consider; if nil, all visible windows to the east are candidates.</li><li>frontmost - (optional) boolean, if true focuses the nearest window that isn't occluded by any other window</li><li>strict - (optional) boolean, if true only consider windows at an angle between 45° and -45° on the eastward axis</li></ul> |
| **Returns**                                 | <ul><li>`true` if a window was found and focused, `false` otherwise; `nil` if the search couldn't take place</li></ul>          |
| **Notes**                                   | <ul><li>If you don't pass `candidateWindows`, Hammerspoon will query for the list of all visible windows</li><li>   every time this method is called; this can be slow, and some undesired "windows" could be included</li><li>   (see the notes for `hs.window.allWindows()`); consider using the equivalent methods in</li><li>   `hs.window.filter` instead</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 823](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L823) |

---


### [focusWindowSouth](#focuswindowsouth)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:focusWindowSouth([candidateWindows[, frontmost[, strict]]]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Focuses the nearest possible window to the south (i.e. down)                                                                     |
| **Parameters**                              | <ul><li>candidateWindows - (optional) a list of candidate windows to consider; if nil, all visible windows to the east are candidates.</li><li>frontmost - (optional) boolean, if true focuses the nearest window that isn't occluded by any other window</li><li>strict - (optional) boolean, if true only consider windows at an angle between 45° and -45° on the eastward axis</li></ul> |
| **Returns**                                 | <ul><li>`true` if a window was found and focused, `false` otherwise; `nil` if the search couldn't take place</li></ul>          |
| **Notes**                                   | <ul><li>If you don't pass `candidateWindows`, Hammerspoon will query for the list of all visible windows</li><li>   every time this method is called; this can be slow, and some undesired "windows" could be included</li><li>   (see the notes for `hs.window.allWindows()`); consider using the equivalent methods in</li><li>   `hs.window.filter` instead</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 843](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L843) |

---


### [focusWindowWest](#focuswindowwest)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:focusWindowWest([candidateWindows[, frontmost[, strict]]]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Focuses the nearest possible window to the west (i.e. left)                                                                     |
| **Parameters**                              | <ul><li>candidateWindows - (optional) a list of candidate windows to consider; if nil, all visible windows to the east are candidates.</li><li>frontmost - (optional) boolean, if true focuses the nearest window that isn't occluded by any other window</li><li>strict - (optional) boolean, if true only consider windows at an angle between 45° and -45° on the eastward axis</li></ul> |
| **Returns**                                 | <ul><li>`true` if a window was found and focused, `false` otherwise; `nil` if the search couldn't take place</li></ul>          |
| **Notes**                                   | <ul><li>If you don't pass `candidateWindows`, Hammerspoon will query for the list of all visible windows</li><li>   every time this method is called; this can be slow, and some undesired "windows" could be included</li><li>   (see the notes for `hs.window.allWindows()`); consider using the equivalent methods in</li><li>   `hs.window.filter` instead</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 803](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L803) |

---


### [frame](#frame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:frame() -> hs.geometry rect`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the frame of the window in absolute coordinates                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An hs.geometry rect containing the co-ordinates of the top left corner of the window and its width and height</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 430](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L430) |

---


### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:id() -> number or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the unique identifier of the window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the unique identifier of the window, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 546](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L546) |

---


### [isFullScreen](#isfullscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:isFullScreen() -> bool or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the fullscreen state of the window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the window is fullscreen, false if not. Nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 400](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L400) |

---


### [isMaximizable](#ismaximizable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:isMaximizable() -> bool or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Determines if a window is maximizable                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the window is maximizable, False if it isn't, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 296](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L296) |

---


### [isMinimized](#isminimized)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:isMinimized() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the minimized state of the window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the window is minimized, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 456](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L456) |

---


### [isStandard](#isstandard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:isStandard() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Determines if the window is a standard window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the window is standard, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>"Standard window" means that this is not an unusual popup window, a modal dialog, a floating window, etc.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 164](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L164) |

---


### [isVisible](#isvisible)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:isVisible() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Determines if a window is visible (i.e. not hidden and not minimized)                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the window is visible, otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>This does not mean the user can see the window - it may be obscured by other windows, or it may be off the edge of the screen</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 243](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L243) |

---


### [maximize](#maximize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:maximize([duration]) -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Maximizes the window                                                                     |
| **Parameters**                              | <ul><li>duration - (optional) The number of seconds to animate the transition. Defaults to the value of `hs.window.animationDuration`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul><li>The window will be resized as large as possible, without obscuring the dock/menu</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 581](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L581) |

---


### [minimize](#minimize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:minimize() -> window`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Minimizes the window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul><li>This method will always animate per your system settings and is not affected by `hs.window.animationDuration`</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 417](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L417) |

---


### [move](#move)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:move(rect[, screen][, ensureInScreenBounds][, duration]) --> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves the window                                                                     |
| **Parameters**                              | <ul><li>rect - It can be: - an `hs.geometry` point, or argument to construct one; will move the screen by this delta, keeping its size constant; `screen` is ignored - an `hs.geometry` rect, or argument to construct one; will set the window frame to this rect, in absolute coordinates; `screen` is ignored - an `hs.geometry` unit rect, or argument to construct one; will set the window frame to this rect relative to the desired screen; if `screen` is nil, use the screen the window is currently on</li><li>screen - (optional) An `hs.screen` object or argument for `hs.screen.find`; only valid if `rect` is a unit rect</li><li>ensureInScreenBounds - (optional) if `true`, use `setFrameInScreenBounds()` to ensure the resulting window frame is fully contained within the window's screen</li><li>duration - (optional) The number of seconds to animate the transition. Defaults to the value of `hs.window.animationDuration`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 930](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L930) |

---


### [moveOneScreenEast](#moveonescreeneast)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:moveOneScreenEast([noResize, ensureInScreenBounds][, duration]) -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves the window one screen east (i.e. right)                                                                     |
| **Parameters**                              | <ul><li>noResize - (optional) if `true`, maintain the window's absolute size</li><li>ensureInScreenBounds - (optional) if `true`, use `setFrameInScreenBounds()` to ensure the resulting window frame is fully contained within the window's screen</li><li>duration - (optional) The number of seconds to animate the transition. Defaults to the value of `hs.window.animationDuration`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 969](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L969) |

---


### [moveOneScreenNorth](#moveonescreennorth)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:moveOneScreenNorth([noResize, ensureInScreenBounds][, duration]) -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves the window one screen north (i.e. up)                                                                     |
| **Parameters**                              | <ul><li>noResize - (optional) if `true`, maintain the window's absolute size</li><li>ensureInScreenBounds - (optional) if `true`, use `setFrameInScreenBounds()` to ensure the resulting window frame is fully contained within the window's screen</li><li>duration - (optional) The number of seconds to animate the transition. Defaults to the value of `hs.window.animationDuration`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 995](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L995) |

---


### [moveOneScreenSouth](#moveonescreensouth)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:moveOneScreenSouth([noResize, ensureInScreenBounds][, duration]) -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves the window one screen south (i.e. down)                                                                     |
| **Parameters**                              | <ul><li>noResize - (optional) if `true`, maintain the window's absolute size</li><li>ensureInScreenBounds - (optional) if `true`, use `setFrameInScreenBounds()` to ensure the resulting window frame is fully contained within the window's screen</li><li>duration - (optional) The number of seconds to animate the transition. Defaults to the value of `hs.window.animationDuration`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 1009](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L1009) |

---


### [moveOneScreenWest](#moveonescreenwest)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:moveOneScreenWest([noResize, ensureInScreenBounds][, duration]) -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves the window one screen west (i.e. left)                                                                     |
| **Parameters**                              | <ul><li>noResize - (optional) if `true`, maintain the window's absolute size</li><li>ensureInScreenBounds - (optional) if `true`, use `setFrameInScreenBounds()` to ensure the resulting window frame is fully contained within the window's screen</li><li>duration - (optional) The number of seconds to animate the transition. Defaults to the value of `hs.window.animationDuration`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 982](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L982) |

---


### [moveToScreen](#movetoscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:moveToScreen(screen[, noResize, ensureInScreenBounds][, duration]) -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves the window to a given screen, retaining its relative position and size                                                                     |
| **Parameters**                              | <ul><li>screen - An `hs.screen` object, or an argument for `hs.screen.find()`, representing the screen to move the window to</li><li>noResize - (optional) if `true`, maintain the window's absolute size</li><li>ensureInScreenBounds - (optional) if `true`, use `setFrameInScreenBounds()` to ensure the resulting window frame is fully contained within the window's screen</li><li>duration - (optional) The number of seconds to animate the transition. Defaults to the value of `hs.window.animationDuration`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 904](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L904) |

---


### [moveToUnit](#movetounit)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:moveToUnit(unitrect[, duration]) -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves and resizes the window to occupy a given fraction of the screen                                                                     |
| **Parameters**                              | <ul><li>unitrect - An `hs.geometry` unit rect, or constructor argument to create one</li><li>duration - (optional) The number of seconds to animate the transition. Defaults to the value of `hs.window.animationDuration`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul><li>An example, which would make a window fill the top-left quarter of the screen: `win:moveToUnit'[0.0,0.0,0.5,0.5]'`</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 887](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L887) |

---


### [otherWindowsAllScreens](#otherwindowsallscreens)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:otherWindowsAllScreens() -> list of hs.window objects`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets every window except this one                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing `hs.window` objects representing all visible windows other than this one</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 493](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L493) |

---


### [otherWindowsSameScreen](#otherwindowssamescreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:otherWindowsSameScreen() -> list of hs.window objects`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets other windows on the same screen                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `hs.window` objects representing the visible windows other than this one that are on the same screen</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 479](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L479) |

---


### [raise](#raise)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:raise() -> window`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Brings a window to the front of the screen without focussing it                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 521](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L521) |

---


### [role](#role)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:role() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the role of the window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the role of the window</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 147](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L147) |

---


### [screen](#screen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:screen() -> hs.screen object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the screen which the window is on                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An `hs.screen` object representing the screen which contains the window.</li></ul>          |
| **Notes**                                   | <ul><li>While windows can be dragged to span multiple screens, part of the window will disappear when the mouse is released. The screen returned by this method will be the part of the window that remains visible.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 618](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L618) |

---


### [sendToBack](#sendtoback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:sendToBack() -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends the window to the back                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul><li>Due to the way this method works and OSX limitations, calling this method when you have a lot of randomly overlapping (as opposed to neatly tiled) windows might be visually jarring, and take a fair amount of time to complete. So if you don't use orderly layouts, or if you have a lot of windows in general, you're probably better off using `hs.application:hide()` (or simply `cmd-h`)</li><li>This method works by focusing all overlapping windows behind this one, front to back. If called on the focused window, this method will switch focus to the topmost window under this one; otherwise, the currently focused window will regain focus after this window has been sent to the back.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 539](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L539) |

---


### [setFrame](#setframe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:setFrame(rect[, duration]) -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the frame of the window in absolute coordinates                                                                     |
| **Parameters**                              | <ul><li>rect - An hs.geometry rect, or constructor argument, describing the frame to be applied to the window</li><li>duration - (optional) The number of seconds to animate the transition. Defaults to the value of `hs.window.animationDuration`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 368](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L368) |

---


### [setFrameInScreenBounds](#setframeinscreenbounds)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:setFrameInScreenBounds([rect][, duration]) -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the frame of the window in absolute coordinates, possibly adjusted to ensure it is fully inside the screen                                                                     |
| **Parameters**                              | <ul><li>rect - An hs.geometry rect, or constructor argument, describing the frame to be applied to the window; if omitted, the current window frame will be used</li><li>duration - (optional) The number of seconds to animate the transition. Defaults to the value of `hs.window.animationDuration`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 412](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L412) |

---


### [setFrameWithWorkarounds](#setframewithworkarounds)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:setFrameWithWorkarounds(rect[, duration]) -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the frame of the window in absolute coordinates, using the additional workarounds described in `hs.window.setFrameCorrectness`                                                                     |
| **Parameters**                              | <ul><li>rect - An hs.geometry rect, or constructor argument, describing the frame to be applied to the window</li><li>duration - (optional) The number of seconds to animate the transition. Defaults to the value of `hs.window.animationDuration`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 380](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L380) |

---


### [setFullScreen](#setfullscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:setFullScreen(fullscreen) -> window`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the fullscreen state of the window                                                                     |
| **Parameters**                              | <ul><li>fullscreen - A boolean, true if the window should be set fullscreen, false if not</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 382](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L382) |

---


### [setSize](#setsize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:setSize(size) -> window`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resizes the window                                                                     |
| **Parameters**                              | <ul><li>size - A size-table containing the width and height the window should be resized to</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 239](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L239) |

---


### [setTopLeft](#settopleft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:setTopLeft(point) -> window`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves the window to a given point                                                                     |
| **Parameters**                              | <ul><li>point - A point-table containing the absolute co-ordinates the window should be moved to</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 218](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L218) |

---


### [size](#size)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:size() -> size`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the size of the window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A size-table containing the width and height of the window</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 201](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L201) |

---


### [snapshot](#snapshot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:snapshot([keepTransparency]) -> hs.image-object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a snapshot of the window as an `hs.image` object                                                                     |
| **Parameters**                              | <ul><li>keepTransparency - optional boolean value indicating if the windows alpha value (transparency) should be maintained in the resulting image or if it should be fully opaque (default).</li></ul> |
| **Returns**                                 | <ul><li>`hs.image` object of the window snapshot or nil if unable to create a snapshot</li></ul>          |
| **Notes**                                   | <ul><li>See also function `hs.window.snapshotForID()`</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 611](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L611) |

---


### [subrole](#subrole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:subrole() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the subrole of the window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the subrole of the window</li></ul>          |
| **Notes**                                   | <ul><li>This typically helps to determine if a window is a special kind of window - such as a modal window, or a floating window</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 127](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L127) |

---


### [tabCount](#tabcount)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:tabCount() -> number or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the number of tabs in the window has                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the number of tabs, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>Intended for use with the focusTab method, if this returns a number, then focusTab can switch between that many tabs.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 362](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L362) |

---


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:title() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the title of the window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the title of the window</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 110](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L110) |

---


### [toggleFullScreen](#togglefullscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:toggleFullScreen() -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Toggles the fullscreen state of the window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul><li>Not all windows support being full-screened</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 597](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L597) |

---


### [toggleZoom](#togglezoom)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:toggleZoom() -> window`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Toggles the zoom state of the window (this is effectively equivalent to clicking the green maximize/fullscreen button at the top left of a window)                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 257](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L257) |

---


### [topLeft](#topleft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:topLeft() -> point`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the absolute co-ordinates of the top left of the window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A point-table containing the absolute co-ordinates of the top left corner of the window</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 184](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L184) |

---


### [unminimize](#unminimize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:unminimize() -> window`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Un-minimizes the window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.window` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 438](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L438) |

---


### [windowsToEast](#windowstoeast)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:windowsToEast([candidateWindows[, frontmost[, strict]]]) -> list of hs.window objects`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets all windows to the east of this window                                                                     |
| **Parameters**                              | <ul><li>candidateWindows - (optional) a list of candidate windows to consider; if nil, all visible windows to the east are candidates.</li><li>frontmost - (optional) boolean, if true unoccluded windows will be placed before occluded ones in the result list</li><li>strict - (optional) boolean, if true only consider windows at an angle between 45° and -45° on the eastward axis</li></ul> |
| **Returns**                                 | <ul><li>A list of `hs.window` objects representing all windows positioned east (i.e. right) of the window, in ascending order of distance</li></ul>          |
| **Notes**                                   | <ul><li>If you don't pass `candidateWindows`, Hammerspoon will query for the list of all visible windows every time this method is called; this can be slow, and some undesired "windows" could be included (see the notes for `hs.window.allWindows()`); consider using the equivalent methods in `hs.window.filter` instead</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 688](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L688) |

---


### [windowsToNorth](#windowstonorth)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:windowsToNorth([candidateWindows[, frontmost[, strict]]]) -> list of hs.window objects`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets all windows to the north of this window                                                                     |
| **Parameters**                              | <ul><li>candidateWindows - (optional) a list of candidate windows to consider; if nil, all visible windows to the north are candidates.</li><li>frontmost - (optional) boolean, if true unoccluded windows will be placed before occluded ones in the result list</li><li>strict - (optional) boolean, if true only consider windows at an angle between 45° and -45° on the northward axis</li></ul> |
| **Returns**                                 | <ul><li>A list of `hs.window` objects representing all windows positioned north (i.e. up) of the window, in ascending order of distance</li></ul>          |
| **Notes**                                   | <ul><li>If you don't pass `candidateWindows`, Hammerspoon will query for the list of all visible windows every time this method is called; this can be slow, and some undesired "windows" could be included (see the notes for `hs.window.allWindows()`); consider using the equivalent methods in `hs.window.filter` instead</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 718](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L718) |

---


### [windowsToSouth](#windowstosouth)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:windowsToSouth([candidateWindows[, frontmost[, strict]]]) -> list of hs.window objects`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets all windows to the south of this window                                                                     |
| **Parameters**                              | <ul><li>candidateWindows - (optional) a list of candidate windows to consider; if nil, all visible windows to the south are candidates.</li><li>frontmost - (optional) boolean, if true unoccluded windows will be placed before occluded ones in the result list</li><li>strict - (optional) boolean, if true only consider windows at an angle between 45° and -45° on the southward axis</li></ul> |
| **Returns**                                 | <ul><li>A list of `hs.window` objects representing all windows positioned south (i.e. down) of the window, in ascending order of distance</li></ul>          |
| **Notes**                                   | <ul><li>If you don't pass `candidateWindows`, Hammerspoon will query for the list of all visible windows every time this method is called; this can be slow, and some undesired "windows" could be included (see the notes for `hs.window.allWindows()`); consider using the equivalent methods in `hs.window.filter` instead</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 733](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L733) |

---


### [windowsToWest](#windowstowest)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:windowsToWest([candidateWindows[, frontmost[, strict]]]) -> list of hs.window objects`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets all windows to the west of this window                                                                     |
| **Parameters**                              | <ul><li>candidateWindows - (optional) a list of candidate windows to consider; if nil, all visible windows to the west are candidates.</li><li>frontmost - (optional) boolean, if true unoccluded windows will be placed before occluded ones in the result list</li><li>strict - (optional) boolean, if true only consider windows at an angle between 45° and -45° on the westward axis</li></ul> |
| **Returns**                                 | <ul><li>A list of `hs.window` objects representing all windows positioned west (i.e. left) of the window, in ascending order of distance</li></ul>          |
| **Notes**                                   | <ul><li>If you don't pass `candidateWindows`, Hammerspoon will query for the list of all visible windows every time this method is called; this can be slow, and some undesired "windows" could be included (see the notes for `hs.window.allWindows()`); consider using the equivalent methods in `hs.window.filter` instead</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/window.lua line 703](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/window.lua#L703) |

---


### [zoomButtonRect](#zoombuttonrect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window:zoomButtonRect() -> rect-table or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a rect-table for the location of the zoom button (the green button typically found at the top left of a window)                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A rect-table containing the bounding frame of the zoom button, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>The co-ordinates in the rect-table (i.e. the `x` and `y` values) are in absolute co-ordinates, not relative to the window the button is part of, or the screen the window is on</li><li>Although not perfect as such, this method can provide a useful way to find a region of the titlebar suitable for simulating mouse click events on, with `hs.eventtap`</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/window/libwindow.m line 275](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/window/libwindow.m#L275) |

---


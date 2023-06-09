# cp.ui.Window

A Window UI element.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [findSectionUI](#findsectionui)
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Window](#window)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [alert](#alert)
 * [exists](#exists)
 * [focused](#focused)
 * [frame](#frame)
 * [hsWindow](#hswindow)
 * [id](#id)
 * [isFullScreen](#isfullscreen)
 * [isShowing](#isshowing)
 * [minimized](#minimized)
 * [position](#position)
 * [size](#size)
 * [UI](#ui)
 * [visible](#visible)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [close](#close)
 * [doClose](#doclose)
 * [doFocus](#dofocus)
 * [findSectionUI](#findsectionui)
 * [focus](#focus)
 * [notifier](#notifier)
 * [snapshot](#snapshot)


---

## API Documentation

#### Functions


### [findSectionUI](#findsectionui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.findSectionUI(windowUI, sectionID) -> hs.axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds the `axuielement` for the specified `sectionID`, if present in the provided `axuielement` `windowUI`.                                                                     |
| **Parameters**                              | <ul><li>windowUI - The `AXWindow` `axuielement` to search in.</li><li>sectionID - The string value for the `SectionUniqueID`.</li></ul> |
| **Returns**                                 | <ul><li>The matching `axuielement`, or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 381](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L381) |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided element is a valid window.                                                                     |
| **Parameters**                              | <ul><li>element - An element to check</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 24](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L24) |

---

#### Constructors


### [Window](#window)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window(cpApp, uiProp) -> Window`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Window                                                                     |
| **Parameters**                              | <ul><li>`cpApp`    - a `cp.app` for the application the Window belongs to.</li><li>`uiProp`   - a `cp.prop` that returns the `hs.axuielement` for the window.</li></ul> |
| **Returns**                                 | <ul><li>A new `Window` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 48](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L48) |

---

#### Fields


### [alert](#alert)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.alert <cp.ui.Alert>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides access to any 'Alert' windows on the Window.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 374](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L374) |

---


### [exists](#exists)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.exists <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if the window exists. It may not be visible.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 174](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L174) |

---


### [focused](#focused)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.focused <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the window has mouse/keyboard focused.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 132](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L132) |

---


### [frame](#frame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.frame <cp.prop: hs.geometry rect>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `hs.geometry` rect value describing the window's position.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 206](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L206) |

---


### [hsWindow](#hswindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.hsWindow <cp.prop: hs.window; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `hs.window` instance for the window, or `nil` if it can't be found.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 78](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L78) |

---


### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.id <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The window title, or `nil` if the window is not currently visible.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L105) |

---


### [isFullScreen](#isfullscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.isFullScreen <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if the window is full-screen.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 273](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L273) |

---


### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.isShowing <cp.prop: boolean; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the `Window` is currently showing on screen.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 71](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L71) |

---


### [minimized](#minimized)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.minimized <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if the window exists and is minimised.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 181](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L181) |

---


### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.position <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets or sets the window position                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 251](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L251) |

---


### [size](#size)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.size <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets or sets the window size                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 229](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L229) |

---


### [UI](#ui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.UI <cp.prop: hs.axuielement: read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The UI `axuielement` for the Window.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L63) |

---


### [visible](#visible)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.visible <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if the window is visible on a screen.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 117](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L117) |

---

#### Methods


### [close](#close)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:close() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to close the window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the window was successfully closed.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 299](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L299) |

---


### [doClose](#doclose)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:doClose() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will attempt to close the window, if it is visible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute, resolving to `true` if the window is closed successfully, or `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 313](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L313) |

---


### [doFocus](#dofocus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:doFocus() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) will attempt to focus on the window, if it is visible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute, which resolves to `true` if the window was successfully focused, or `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 345](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L345) |

---


### [findSectionUI](#findsectionui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:findSectionUI(sectionID) -> hs.axuielement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Looks for th section with the specified `SectionUniqueID` value and returns the matching `axuielement` value.                                                                     |
| **Parameters**                              | <ul><li>sectionID - The string for the section ID.</li></ul> |
| **Returns**                                 | <ul><li>The matching `axuielement`, or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 404](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L404) |

---


### [focus](#focus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:focus() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to focus the window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the window was successfully focused.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 331](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L331) |

---


### [notifier](#notifier)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:notifier() -> cp.ui.notifier`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `notifier` that is tracking the application UI element. It has already been started.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The notifier.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 417](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L417) |

---


### [snapshot](#snapshot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:snapshot([path]) -> hs.image | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Takes a snapshot of the UI in its current state as a PNG and returns it. If the `path` is provided, the image will be saved at the specified location.                                                                     |
| **Parameters**                              | <ul><li>path		- (optional) The path to save the file. Should include the extension (should be `.png`).</li></ul> |
| **Returns**                                 | <ul><li>The `hs.image` that was created, or `nil` if the UI is not available.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Window.lua line 430](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Window.lua#L430) |

---


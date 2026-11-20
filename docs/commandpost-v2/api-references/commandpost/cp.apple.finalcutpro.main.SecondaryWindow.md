# cp.apple.finalcutpro.main.SecondaryWindow

Secondary Window Module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [SecondaryWindow](#secondarywindow)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [browserGroupUI](#browsergroupui)
 * [frame](#frame)
 * [hsWindow](#hswindow)
 * [isFullScreen](#isfullscreen)
 * [isShowing](#isshowing)
 * [rootGroupUI](#rootgroupui)
 * [timelineGroupUI](#timelinegroupui)
 * [viewerGroupUI](#viewergroupui)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [app](#app)
 * [doShow](#doshow)
 * [show](#show)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua line 24](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua#L24) |

---

#### Constructors


### [SecondaryWindow](#secondarywindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow(app) -> SecondaryWindow`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `SecondaryWindow` instance.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.apple.finalcutpro` object.</li></ul> |
| **Returns**                                 | <ul><li>A new `SecondaryWindow` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua#L41) |

---

#### Fields


### [browserGroupUI](#browsergroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.browserGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The UI element that will contain the `Browser` if it's on the Secondary Window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua line 114](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua#L114) |

---


### [frame](#frame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.frame <cp.prop: frame>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current position (x, y, width, height) of the window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua line 88](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua#L88) |

---


### [hsWindow](#hswindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.hsWindow <cp.prop: hs.window; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `hs.window` instance for the window, or `nil` if it can't be found.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua line 67](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua#L67) |

---


### [isFullScreen](#isfullscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.isFullScreen <cp.prop: boolean; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the window is full-screen.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua line 81](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua#L81) |

---


### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.isShowing <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the window is visible.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua line 74](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua#L74) |

---


### [rootGroupUI](#rootgroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.rootGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The root UI element on the window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua line 95](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua#L95) |

---


### [timelineGroupUI](#timelinegroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.timelineGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The UI element that will contain the `Timeline` if it's on the Secondary Window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua line 121](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua#L121) |

---


### [viewerGroupUI](#viewergroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.viewerGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The UI element that will contain the `Viewer` if it's on the Secondary Window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua line 107](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua#L107) |

---

#### Methods


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow:app() -> App`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the app instance representing Final Cut Pro.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>App</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua line 142](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua#L142) |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement) that shows the Secondary Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `SecondaryWindow` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua line 173](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua#L173) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow:show() -> SecondaryWindow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Secondary Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `SecondaryWindow` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua line 155](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/SecondaryWindow.lua#L155) |

---


# cp.apple.finalcutpro.main.PrimaryWindow

Primary Window Module.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [PrimaryWindow](#primarywindow)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [alert](#alert)
 * [bottomGroupUI](#bottomgroupui)
 * [browserGroupUI](#browsergroupui)
 * [colorBoard](#colorboard)
 * [doShow](#doshow)
 * [frame](#frame)
 * [hsWindow](#hswindow)
 * [inspector](#inspector)
 * [isFullScreen](#isfullscreen)
 * [isShowing](#isshowing)
 * [leftGroupUI](#leftgroupui)
 * [rightGroupUI](#rightgroupui)
 * [rootGroupUI](#rootgroupui)
 * [timelineGroupUI](#timelinegroupui)
 * [toolbar](#toolbar)
 * [topGroupUI](#topgroupui)
 * [UI](#ui)
 * [viewerGroupUI](#viewergroupui)
 * [window](#window)
* Methods - API calls which can only be made on an object returned by a constructor
 * [app](#app)
 * [show](#show)

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.matches(w) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a window matches the PrimaryWindow requirements                                                                     |
| **Parameters**                              | <ul><li>w - The window to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if matched otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [PrimaryWindow](#primarywindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow(app) -> PrimaryWindow object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new PrimaryWindow.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>PrimaryWindow</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [alert](#alert)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.alert <cp.ui.Alert>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides access to any 'Alert' windows on the PrimaryWindow.                                                                     |

---

### [bottomGroupUI](#bottomgroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow:bottomGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the bottom group UI as a `hs.axuielement` object.                                                                     |

---

### [browserGroupUI](#browsergroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.browserGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the UI which contains the Browser.                                                                     |

---

### [colorBoard](#colorboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.colorBoard <ColorBoard>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The ColorBoard object.                                                                     |

---

### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow:doShow() -> PrimaryWindow`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that attempts to show the Primary Window.                                                                     |
| **Returns**                                 | <ul><li>The `Statement`, which resolves as either `true` or sends an error.</li></ul>          |

---

### [frame](#frame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.frame <cp.prop: frame>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current position (x, y, width, height) of the window.                                                                     |

---

### [hsWindow](#hswindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.hsWindow <cp.prop: hs.window; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `hs.window` instance for the window, or `nil` if it can't be found.                                                                     |

---

### [inspector](#inspector)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.inspector <Inspector>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Inspector object.                                                                     |

---

### [isFullScreen](#isfullscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.isFullScreen <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the window is full-screen.                                                                     |

---

### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.isShowing <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the window is visible.                                                                     |

---

### [leftGroupUI](#leftgroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.leftGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the left group UI as a `hs.axuielement` object                                                                     |

---

### [rightGroupUI](#rightgroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.rightGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the right group UI as a `hs.axuielement` object.                                                                     |

---

### [rootGroupUI](#rootgroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.rootGroupUI() <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the top AXSplitGroup as a `hs.axuielement` object                                                                     |

---

### [timelineGroupUI](#timelinegroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.timelineGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the UI that contains the `Timeline`.                                                                     |

---

### [toolbar](#toolbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.toolbar <cp.ui.PrimaryToolbar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The PrimaryToolbar element.                                                                     |

---

### [topGroupUI](#topgroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.topGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the top group UI as a `hs.axuielement` object.                                                                     |

---

### [UI](#ui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.UI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The main `axuielement` for the window. May be `nil` if not currently available.                                                                     |

---

### [viewerGroupUI](#viewergroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.viewerGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the UI that contains the `Viewer`.                                                                     |

---

### [window](#window)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow.window <cp.ui.Window>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Window` instance.                                                                     |

---
### Methods


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow:app() -> cp.apple.finalcutpro`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the application the display belongs to.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The app instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryWindow:show() -> PrimaryWindow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Primary Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `PrimaryWindow` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

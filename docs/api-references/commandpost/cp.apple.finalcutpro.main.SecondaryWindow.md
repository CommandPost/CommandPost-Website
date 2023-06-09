# cp.apple.finalcutpro.main.SecondaryWindow

Secondary Window Module.

## API Overview
### **Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

### **Constructors** - _API calls which return an object, typically one that offers API methods_
 * [SecondaryWindow](#secondarywindow)

### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [browserGroupUI](#browsergroupui)
 * [frame](#frame)
 * [hsWindow](#hswindow)
 * [isFullScreen](#isfullscreen)
 * [isShowing](#isshowing)
 * [rootGroupUI](#rootgroupui)
 * [timelineGroupUI](#timelinegroupui)
 * [viewerGroupUI](#viewergroupui)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [app](#app)
 * [doShow](#doshow)
 * [show](#show)


## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [SecondaryWindow](#secondarywindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow(app) -> SecondaryWindow`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `SecondaryWindow` instance.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.apple.finalcutpro` object.</li></ul> |
| **Returns**                                 | <ul><li>A new `SecondaryWindow` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [browserGroupUI](#browsergroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.browserGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The UI element that will contain the `Browser` if it's on the Secondary Window.                                                                     |

---

### [frame](#frame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.frame <cp.prop: frame>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current position (x, y, width, height) of the window.                                                                     |

---

### [hsWindow](#hswindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.hsWindow <cp.prop: hs.window; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `hs.window` instance for the window, or `nil` if it can't be found.                                                                     |

---

### [isFullScreen](#isfullscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.isFullScreen <cp.prop: boolean; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the window is full-screen.                                                                     |

---

### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.isShowing <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the window is visible.                                                                     |

---

### [rootGroupUI](#rootgroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.rootGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The root UI element on the window.                                                                     |

---

### [timelineGroupUI](#timelinegroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.timelineGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The UI element that will contain the `Timeline` if it's on the Secondary Window.                                                                     |

---

### [viewerGroupUI](#viewergroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.viewerGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The UI element that will contain the `Viewer` if it's on the Secondary Window.                                                                     |

---
### Methods


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow:app() -> App`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the app instance representing Final Cut Pro.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>App</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement) that shows the Secondary Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `SecondaryWindow` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow:show() -> SecondaryWindow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Secondary Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `SecondaryWindow` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

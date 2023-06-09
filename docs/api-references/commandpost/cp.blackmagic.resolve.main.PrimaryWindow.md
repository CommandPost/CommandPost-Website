# cp.blackmagic.resolve.main.PrimaryWindow

Primary Window Module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [PrimaryWindow](#primarywindow)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [doShow](#doshow)
 * [resolve](#resolve)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [show](#show)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.main.PrimaryWindow.matches(w) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a window matches the PrimaryWindow requirements                                                                     |
| **Parameters**                              | <ul><li>w - The window to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if matched otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Constructors


### [PrimaryWindow](#primarywindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.main.PrimaryWindow(app) -> PrimaryWindow object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new PrimaryWindow.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>PrimaryWindow</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.main.PrimaryWindow:doShow() -> PrimaryWindow`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that attempts to show the Primary Window.                                                                     |
| **Returns**                                 | <ul><li>The `Statement`, which resolves as either `true` or sends an error.</li></ul>          |
| **Notes**                                   | - None |

---


### [resolve](#resolve)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.main.PrimaryWindow.resolve -> cp.blackmagic.resolve`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The main `Resolve` application root.                                                                     |
| **Notes**                                   | - None |

---

#### Methods


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.main.PrimaryWindow:show() -> PrimaryWindow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Primary Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `PrimaryWindow` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


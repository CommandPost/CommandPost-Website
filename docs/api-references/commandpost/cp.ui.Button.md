# cp.ui.Button

The `Button` type extends [Element](cp.ui.Element.md) and includes all its
methods, fields and other properties.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Button](#button)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [title](#title)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doPress](#dopress)
 * [press](#press)


---

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Button.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `element` is a `Button`, returning `true` if so.                                                                     |
| **Parameters**                              | <ul><li>element		- The `hs.axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `element` is a `Button`, or `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [Button](#button)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Button(parent, uiFinder) -> cp.ui.Button`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Button` instance.                                                                     |
| **Parameters**                              | <ul><li>parent		- The parent object. Should have a `UI` and `isShowing` field.</li><li>uiFinder		- A function which will return the `hs.axuielement` the button belongs to, or `nil` if not available.</li></ul> |
| **Returns**                                 | <ul><li>The new `Button` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Button.title <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The button title, if available.                                                                     |

---
### Methods


### [doPress](#dopress)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Button:doPress() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will press the button when executed, if available at the time. If not an `error` is sent.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will press the button when executed.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [press](#press)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Button:press() -> self, boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Performs a button press action, if the button is available.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Button` instance.</li><li>`true` if the button was actually pressed successfully.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

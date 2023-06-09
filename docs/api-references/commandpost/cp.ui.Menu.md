# cp.ui.Menu

UI for AXMenus.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [Menu](#Menu)
* Methods - API calls which can only be made on an object returned by a constructor
 * [cancel](#cancel)
 * [doCancel](#doCancel)
 * [doSelectItem](#doSelectItem)
 * [doSelectValue](#doSelectValue)

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Menu.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [Menu](#Menu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Menu(parent, uiFinder) -> Menu`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Menu` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li><li>uiFinder - A function which will return the `hs.axuielement` when available.</li></ul> |
| **Returns**                                 | <ul><li>A new `Menu` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [cancel](#cancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Menu:cancel() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Closes a menu.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doCancel](#doCancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Menu:doCancel(value) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will cancel a menu.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doSelectItem](#doSelectItem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Menu:doSelectItem(index) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will select an item on the `MenuButton` by index.                                                                     |
| **Parameters**                              | <ul><li>index - The index number of the item to match.</li></ul> |
| **Returns**                                 | <ul><li>the `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doSelectValue](#doSelectValue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Menu:doSelectValue(pattern[, altPattern]) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will select an item on the `Menu` by value.                                                                     |
| **Parameters**                              | <ul><li>pattern - The pattern to match.</li><li>[altPattern] - An optional alternate pattern to match if the first pattern fails.</li></ul> |
| **Returns**                                 | <ul><li>the `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

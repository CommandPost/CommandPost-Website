# cp.ui.Menu

UI for AXMenus.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Menu](#menu)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [cancel](#cancel)
 * [doCancel](#docancel)
 * [doSelectItem](#doselectitem)
 * [doSelectValue](#doselectvalue)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Menu.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Menu.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Menu.lua#L33){target="_blank"} |

---

#### Constructors


### [Menu](#menu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Menu(parent, uiFinder) -> Menu`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Menu` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li><li>uiFinder - A function which will return the `hs.axuielement` when available.</li></ul> |
| **Returns**                                 | <ul><li>A new `Menu` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Menu.lua line 21](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Menu.lua#L21){target="_blank"} |

---

#### Methods


### [cancel](#cancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Menu:cancel() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Closes a menu.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Menu.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Menu.lua#L46){target="_blank"} |

---


### [doCancel](#docancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Menu:doCancel(value) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will cancel a menu.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the `Statement`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Menu.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Menu.lua#L63){target="_blank"} |

---


### [doSelectItem](#doselectitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Menu:doSelectItem(index) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will select an item on the `MenuButton` by index.                                                                     |
| **Parameters**                              | <ul><li>index - The index number of the item to match.</li></ul> |
| **Returns**                                 | <ul><li>the `Statement`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Menu.lua line 81](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Menu.lua#L81){target="_blank"} |

---


### [doSelectValue](#doselectvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Menu:doSelectValue(pattern[, altPattern]) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will select an item on the `Menu` by value.                                                                     |
| **Parameters**                              | <ul><li>pattern - The pattern to match.</li><li>[altPattern] - An optional alternate pattern to match if the first pattern fails.</li></ul> |
| **Returns**                                 | <ul><li>the `Statement`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Menu.lua line 131](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Menu.lua#L131){target="_blank"} |

---


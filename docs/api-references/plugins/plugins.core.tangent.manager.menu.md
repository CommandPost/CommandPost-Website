# plugins.core.tangent.manager.menu

Represents a Tangent Menu. Menus are controls that have a fixed set of
non-numerical values. This could be as simple as "On" and "Off", or a long
list of options.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [is](#is)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [menu](#menu)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [get](#get)
 * [next](#next)
 * [onGet](#onget)
 * [onNext](#onnext)
 * [onPrev](#onprev)
 * [onReset](#onreset)
 * [prev](#prev)
 * [reset](#reset)
 * [update](#update)
 * [xml](#xml)


---

## API Documentation

#### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.menu.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a `menu` instance.                                                                     |
| **Parameters**                              | <ul><li>thing     - The other object to test.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is a `menu`, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/menu.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/menu.lua#L33) |

---

#### Constructors


### [menu](#menu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.menu(id[, name[, parent]]) -> menu`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Action` instance.                                                                     |
| **Parameters**                              | <ul><li>id        - The ID number of the menu.</li><li>name      - The name of the menu.</li><li>parent    - The parent of the menu.</li></ul> |
| **Returns**                                 | <ul><li>the new `menu`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/menu.lua line 18](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/menu.lua#L18) |

---

#### Methods


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.menu:get() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `get` function, if present, returning the string value for the current menu.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`nil`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/menu.lua line 68](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/menu.lua#L68) |

---


### [next](#next)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.menu:next() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `next` function, if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`nil`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/menu.lua line 146](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/menu.lua#L146) |

---


### [onGet](#onget)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.menu:onGet(getFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a `menu string request`.                                                                     |
| **Parameters**                              | <ul><li>getFn     - The function to call when the Tangent requests the `menu string`.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>--- This function should have this signature:</li><li></li><li>`function() -> string`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/menu.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/menu.lua#L46) |

---


### [onNext](#onnext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.menu:onNext(nextFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a `menu change +1` request.                                                                     |
| **Parameters**                              | <ul><li>nextFn     - The function to call when the Tangent requests the `menu change +1`.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This function should have this signature:</li><li></li><li>`function() -> nil`</li><li></li><li>It is suggested that when arriving at the end of the list of options a subsequent `next` call will cycle back to the beginning of the options. This is particularly useful for menus with two options.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/menu.lua line 83](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/menu.lua#L83) |

---


### [onPrev](#onprev)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.menu:onPrev(prevFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a `menu change -1` request.                                                                     |
| **Parameters**                              | <ul><li>prevFn     - The function to call when the Tangent requests the `menu change -1`.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This function should have this signature:</li><li></li><li>`function() -> nil`</li><li></li><li>It is suggested that when arriving at the start of the list of options a subsequent `prev` call will cycle to the end of the options. This is particularly useful for menus with two options.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/menu.lua line 161](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/menu.lua#L161) |

---


### [onReset](#onreset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.menu:onReset(resetFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a 'parameter reset' request.                                                                     |
| **Parameters**                              | <ul><li>resetFn     - The function to call when the Tangent requests the parameter reset.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This function should have this signature:</li><li></li><li>`function() -> nil`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/menu.lua line 107](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/menu.lua#L107) |

---


### [prev](#prev)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.menu:prev() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `prev` function, if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`nil`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/menu.lua line 185](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/menu.lua#L185) |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.menu:reset() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `reset` function if present. Returns the current value of the parameter after reset.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The current value, or `nil` if it can't be accessed.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/menu.lua line 129](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/menu.lua#L129) |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.menu:update() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Updates the Tangent panel with the current value.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the update was sent.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/menu.lua line 200](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/menu.lua#L200) |

---


### [xml](#xml)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.menu:xml() -> cp.web.xml`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `xml` configuration for the Action.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `xml` for the Action.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/menu.lua line 216](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/menu.lua#L216) |

---


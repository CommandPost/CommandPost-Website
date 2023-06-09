# plugins.core.touchbar.manager.widgets

Touch Bar Widgets Manager

---

## API Overview
**Variables** - _Configurable values_
 * [widgets](#widgets)

**Functions** - _API calls offered directly by the extension_
 * [allGroups](#allgroups)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [get](#get)
 * [getAll](#getall)
 * [id](#id)
 * [new](#new)
 * [params](#params)


---

## API Documentation

#### Variables


### [widgets](#widgets)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Widget Manager                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L46) |

---

#### Functions


### [allGroups](#allgroups)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets.allGroups() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing all of the widget groups.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Table</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/widgets.lua line 96](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/widgets.lua#L96) |

---

#### Methods


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets:get(id) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a Touch Bar widget                                                                     |
| **Parameters**                              | <ul><li>`id`      - The unique ID for the widget you want to return.</li></ul> |
| **Returns**                                 | <ul><li>table containing the widget</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/widgets.lua line 44](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/widgets.lua#L44) |

---


### [getAll](#getall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets:getAll() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns all of the created widgets                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>table containing all of the created callbacks</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/widgets.lua line 57](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/widgets.lua#L57) |

---


### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the ID of the widget                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID of the widget as a `string`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/widgets.lua line 70](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/widgets.lua#L70) |

---


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets:new(id, params) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new Touch Bar Widget.                                                                     |
| **Parameters**                              | <ul><li>`id` - The unique ID for this widget.</li><li>`params` - A table of parameters</li></ul> |
| **Returns**                                 | <ul><li>table that has been created</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/widgets.lua line 20](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/widgets.lua#L20) |

---


### [params](#params)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets:params() -> function`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the paramaters of the widget                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The paramaters of the widget</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/widgets.lua line 83](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/widgets.lua#L83) |

---


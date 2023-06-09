# plugins.core.midi.manager.controls

MIDI Manager Controls.

---

## API Overview
**Variables** - _Configurable values_
 * [controls](#controls)

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


### [controls](#controls)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.controls -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Controls                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 92](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L92) |

---

#### Functions


### [allGroups](#allgroups)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.controls.allGroups() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing all of the control groups.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Table</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/midi/manager/controls.lua line 100](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/controls.lua#L100) |

---

#### Methods


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.controls:get(id) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a MIDI control.                                                                     |
| **Parameters**                              | <ul><li>`id`      - The unique ID for the widget you want to return.</li></ul> |
| **Returns**                                 | <ul><li>table containing the widget</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/midi/manager/controls.lua line 48](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/controls.lua#L48) |

---


### [getAll](#getall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.controls:getAll() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns all of the created controls.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>table containing all of the created callbacks</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/midi/manager/controls.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/controls.lua#L61) |

---


### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.controls:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the ID of the control.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID of the widget as a `string`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/midi/manager/controls.lua line 74](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/controls.lua#L74) |

---


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.controls:new(id, params) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new MIDI control.                                                                     |
| **Parameters**                              | <ul><li>id       - The unique ID for this widget.</li><li>params   - A table of parameters for the MIDI control.</li></ul> |
| **Returns**                                 | <ul><li>table that has been created</li></ul>          |
| **Notes**                                   | <ul><li>The parameters table should include:</li><li>  group      - The group as a string (i.e. "fcpx")</li><li>  text       - The name of the control as it will appear in the Console</li><li>  subText    - The subtext of the control as it will appear in the Console</li><li>  fn         - The callback function. This functions should accept one parameter</li><li>                  which contains all the MIDI callback metadata.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/midi/manager/controls.lua line 16](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/controls.lua#L16) |

---


### [params](#params)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.controls:params() -> function`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the paramaters of the control.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The paramaters of the widget</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/midi/manager/controls.lua line 87](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/controls.lua#L87) |

---


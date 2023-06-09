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
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/midi/manager/init.lua line 92](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/init.lua#L92){target="_blank"} |

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
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/midi/manager/controls.lua line 100](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/controls.lua#L100){target="_blank"} |

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
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/midi/manager/controls.lua line 48](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/controls.lua#L48){target="_blank"} |

---


### [getAll](#getall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.controls:getAll() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns all of the created controls.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>table containing all of the created callbacks</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/midi/manager/controls.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/controls.lua#L61){target="_blank"} |

---


### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.controls:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the ID of the control.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID of the widget as a `string`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/midi/manager/controls.lua line 74](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/controls.lua#L74){target="_blank"} |

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
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/midi/manager/controls.lua line 16](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/controls.lua#L16){target="_blank"} |

---


### [params](#params)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.midi.manager.controls:params() -> function`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the paramaters of the control.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The paramaters of the widget</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/midi/manager/controls.lua line 87](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/midi/manager/controls.lua#L87){target="_blank"} |

---


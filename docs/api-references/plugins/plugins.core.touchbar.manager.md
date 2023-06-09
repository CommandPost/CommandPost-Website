# plugins.core.touchbar.manager

Touch Bar Manager Plugin.

---

## Submodules
 * [plugins.core.touchbar.manager.widgets](plugins.core.touchbar.manager.widgets.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [DEFAULT_GROUP](#default_group)
 * [FILE_NAME](#file_name)
 * [FOLDER_NAME](#folder_name)

**Variables** - _Configurable values_
 * [maxItems](#maxitems)
 * [numberOfSubGroups](#numberofsubgroups)

**Functions** - _API calls offered directly by the extension_
 * [activeGroup](#activegroup)
 * [activeSubGroup](#activesubgroup)
 * [clear](#clear)
 * [forceGroupChange](#forcegroupchange)
 * [getAction](#getaction)
 * [getActionHandlerID](#getactionhandlerid)
 * [getActionTitle](#getactiontitle)
 * [getBankLabel](#getbanklabel)
 * [getIcon](#geticon)
 * [getLabel](#getlabel)
 * [gotoSubGroup](#gotosubgroup)
 * [groupStatus](#groupstatus)
 * [incrementActiveSubGroup](#incrementactivesubgroup)
 * [init](#init)
 * [nextSubGroup](#nextsubgroup)
 * [previousSubGroup](#previoussubgroup)
 * [start](#start)
 * [stop](#stop)
 * [toggle](#toggle)
 * [touchbar](#touchbar)
 * [update](#update)
 * [updateAction](#updateaction)
 * [updateBankLabel](#updatebanklabel)
 * [updateIcon](#updateicon)
 * [updateLabel](#updatelabel)
 * [updateOrder](#updateorder)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [buttons](#buttons)
 * [enabled](#enabled)
 * [supported](#supported)


---

## API Documentation

#### Constants


### [DEFAULT_GROUP](#default_group)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.DEFAULT_GROUP -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default group.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 31](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L31) |

---


### [FILE_NAME](#file_name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.FILE_NAME -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | File name of settings file.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 36](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L36) |

---


### [FOLDER_NAME](#folder_name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.FOLDER_NAME -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Folder Name where settings file is contained.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L41) |

---

#### Variables


### [maxItems](#maxitems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.maxItems -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The maximum number of Touch Bar items per group.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 71](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L71) |

---


### [numberOfSubGroups](#numberofsubgroups)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.numberOfSubGroups -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The number of Sub Groups per Touch Bar Group.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 76](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L76) |

---

#### Functions


### [activeGroup](#activegroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.activeGroup() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the active group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Returns the active group or `manager.defaultGroup` as a string.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 584](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L584) |

---


### [activeSubGroup](#activesubgroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.activeSubGroup() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the active sub-group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Returns the active sub group as string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 603](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L603) |

---


### [clear](#clear)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.clear() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Clears the Touch Bar items.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 131](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L131) |

---


### [forceGroupChange](#forcegroupchange)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.forceGroupChange(combinedGroupAndSubGroupID) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads a specific sub-group.                                                                     |
| **Parameters**                              | <ul><li>combinedGroupAndSubGroupID - The group and subgroup as a single string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 638](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L638) |

---


### [getAction](#getaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.getAction(button, group) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a specific Touch Bar Action.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>Action as string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 369](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L369) |

---


### [getActionHandlerID](#getactionhandlerid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.getActionHandlerID(button, group) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a specific Touch Bar Action Handler ID.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>Action as string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 350](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L350) |

---


### [getActionTitle](#getactiontitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.getActionTitle(button, group) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a specific Touch Bar Action Title.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>Action as string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 331](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L331) |

---


### [getBankLabel](#getbanklabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.getBankLabel(group) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a specific Touch Bar Bank Label.                                                                     |
| **Parameters**                              | <ul><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>Label as string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 407](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L407) |

---


### [getIcon](#geticon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.getIcon(button, group) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a specific Touch Bar Icon.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>Icon data as string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 312](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L312) |

---


### [getLabel](#getlabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.getLabel(button, group) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a specific Touch Bar Label.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>Label as string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 388](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L388) |

---


### [gotoSubGroup](#gotosubgroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.gotoSubGroup() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads a specific sub-group.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the sub-group.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 622](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L622) |

---


### [groupStatus](#groupstatus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.groupStatus(groupID, status) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates a group's visibility status.                                                                     |
| **Parameters**                              | <ul><li>groupID - the group you want to update as a string.</li><li>status - the status of the group as a boolean.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 845](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L845) |

---


### [incrementActiveSubGroup](#incrementactivesubgroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.incrementActiveSubGroup() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Increments the active sub-group                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 709](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L709) |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.init(deps) -> self`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The module.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 860](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L860) |

---


### [nextSubGroup](#nextsubgroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.nextSubGroup() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Goes to the next sub-group for the active group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 667](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L667) |

---


### [previousSubGroup](#previoussubgroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.previousSubGroup() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Goes to the previous sub-group for the active group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 688](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L688) |

---


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.start() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Starts the CommandPost Touch Bar module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 425](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L425) |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.stop() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the CommandPost Touch Bar module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 467](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L467) |

---


### [toggle](#toggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.toggle() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggles the CommandPost Touch Bar module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 485](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L485) |

---


### [touchbar](#touchbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.touchbar() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the `hs._asm.undocumented.touchbar` object if it exists.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`hs._asm.undocumented.touchbar`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 109](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L109) |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Touch Bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 755](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L755) |

---


### [updateAction](#updateaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.updateAction(button, group, actionTitle, handlerID, action) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates a Touch Bar action.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li><li>actionTitle - Action Title as string</li><li>handlerID - Handler ID as string</li><li>action - Action as table</li></ul> |
| **Returns**                                 | <ul><li>`true` if successfully updated, or `false` if a duplicate entry was found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 214](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L214) |

---


### [updateBankLabel](#updatebanklabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.updateBankLabel(group, label) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates a Touch Bar Bank Label.                                                                     |
| **Parameters**                              | <ul><li>group - Group ID as string</li><li>label - Label as string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 290](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L290) |

---


### [updateIcon](#updateicon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.updateIcon(button, group, icon) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates a Touch Bar icon.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li><li>icon - Icon Data as string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 186](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L186) |

---


### [updateLabel](#updatelabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.updateLabel(button, group, label) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates a Touch Bar label.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li><li>label - Label as string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 262](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L262) |

---


### [updateOrder](#updateorder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.updateOrder(direction, button, group) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shifts a Touch Bar button either up or down.                                                                     |
| **Parameters**                              | <ul><li>direction - Either "up" or "down"</li><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 145](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L145) |

---

#### Fields


### [buttons](#buttons)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.buttons <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains all the saved Touch Bar Buttons                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 92](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L92) |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable Touch Bar Support.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 81](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L81) |

---


### [supported](#supported)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.supported <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the Touch Bar is supported on this version of macOS.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/touchbar/manager/init.lua line 101](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/manager/init.lua#L101) |

---


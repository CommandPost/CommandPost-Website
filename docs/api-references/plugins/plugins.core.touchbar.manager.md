# plugins.core.touchbar.manager

Touch Bar Manager Plugin.

## Submodules
 * [plugins.core.touchbar.manager.widgets](plugins.core.touchbar.manager.widgets.md)

## API Overview
* Constants - Useful values which cannot be changed
 * [DEFAULT_GROUP](#DEFAULT_GROUP)
 * [FILE_NAME](#FILE_NAME)
 * [FOLDER_NAME](#FOLDER_NAME)
* Variables - Configurable values
 * [maxItems](#maxItems)
 * [numberOfSubGroups](#numberOfSubGroups)
* Functions - API calls offered directly by the extension
 * [activeGroup](#activeGroup)
 * [activeSubGroup](#activeSubGroup)
 * [clear](#clear)
 * [forceGroupChange](#forceGroupChange)
 * [getAction](#getAction)
 * [getActionHandlerID](#getActionHandlerID)
 * [getActionTitle](#getActionTitle)
 * [getBankLabel](#getBankLabel)
 * [getIcon](#getIcon)
 * [getLabel](#getLabel)
 * [gotoSubGroup](#gotoSubGroup)
 * [groupStatus](#groupStatus)
 * [incrementActiveSubGroup](#incrementActiveSubGroup)
 * [init](#init)
 * [nextSubGroup](#nextSubGroup)
 * [previousSubGroup](#previousSubGroup)
 * [start](#start)
 * [stop](#stop)
 * [toggle](#toggle)
 * [touchbar](#touchbar)
 * [update](#update)
 * [updateAction](#updateAction)
 * [updateBankLabel](#updateBankLabel)
 * [updateIcon](#updateIcon)
 * [updateLabel](#updateLabel)
 * [updateOrder](#updateOrder)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [buttons](#buttons)
 * [enabled](#enabled)
 * [supported](#supported)

## API Documentation

### Constants


### [DEFAULT_GROUP](#DEFAULT_GROUP)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.DEFAULT_GROUP -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default group.                                                                     |

---

### [FILE_NAME](#FILE_NAME)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.FILE_NAME -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | File name of settings file.                                                                     |

---

### [FOLDER_NAME](#FOLDER_NAME)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.FOLDER_NAME -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Folder Name where settings file is contained.                                                                     |

---
### Variables


### [maxItems](#maxItems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.maxItems -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The maximum number of Touch Bar items per group.                                                                     |

---

### [numberOfSubGroups](#numberOfSubGroups)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.numberOfSubGroups -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The number of Sub Groups per Touch Bar Group.                                                                     |

---
### Functions


### [activeGroup](#activeGroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.activeGroup() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the active group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Returns the active group or `manager.defaultGroup` as a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [activeSubGroup](#activeSubGroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.activeSubGroup() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the active sub-group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Returns the active sub group as string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [clear](#clear)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.clear() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Clears the Touch Bar items.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [forceGroupChange](#forceGroupChange)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.forceGroupChange(combinedGroupAndSubGroupID) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads a specific sub-group.                                                                     |
| **Parameters**                              | <ul><li>combinedGroupAndSubGroupID - The group and subgroup as a single string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getAction](#getAction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.getAction(button, group) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a specific Touch Bar Action.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>Action as string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getActionHandlerID](#getActionHandlerID)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.getActionHandlerID(button, group) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a specific Touch Bar Action Handler ID.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>Action as string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getActionTitle](#getActionTitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.getActionTitle(button, group) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a specific Touch Bar Action Title.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>Action as string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getBankLabel](#getBankLabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.getBankLabel(group) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a specific Touch Bar Bank Label.                                                                     |
| **Parameters**                              | <ul><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>Label as string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getIcon](#getIcon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.getIcon(button, group) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a specific Touch Bar Icon.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>Icon data as string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getLabel](#getLabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.getLabel(button, group) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a specific Touch Bar Label.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>Label as string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [gotoSubGroup](#gotoSubGroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.gotoSubGroup() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads a specific sub-group.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the sub-group.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [groupStatus](#groupStatus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.groupStatus(groupID, status) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates a group's visibility status.                                                                     |
| **Parameters**                              | <ul><li>groupID - the group you want to update as a string.</li><li>status - the status of the group as a boolean.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [incrementActiveSubGroup](#incrementActiveSubGroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.incrementActiveSubGroup() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Increments the active sub-group                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.init(deps) -> self`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The module.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [nextSubGroup](#nextSubGroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.nextSubGroup() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Goes to the next sub-group for the active group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [previousSubGroup](#previousSubGroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.previousSubGroup() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Goes to the previous sub-group for the active group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.start() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Starts the CommandPost Touch Bar module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.stop() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the CommandPost Touch Bar module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [toggle](#toggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.toggle() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggles the CommandPost Touch Bar module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [touchbar](#touchbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.touchbar() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the `hs._asm.undocumented.touchbar` object if it exists.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`hs._asm.undocumented.touchbar`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Touch Bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [updateAction](#updateAction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.updateAction(button, group, actionTitle, handlerID, action) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates a Touch Bar action.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li><li>actionTitle - Action Title as string</li><li>handlerID - Handler ID as string</li><li>action - Action as table</li></ul> |
| **Returns**                                 | <ul><li>`true` if successfully updated, or `false` if a duplicate entry was found</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [updateBankLabel](#updateBankLabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.updateBankLabel(group, label) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates a Touch Bar Bank Label.                                                                     |
| **Parameters**                              | <ul><li>group - Group ID as string</li><li>label - Label as string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [updateIcon](#updateIcon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.updateIcon(button, group, icon) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates a Touch Bar icon.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li><li>icon - Icon Data as string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [updateLabel](#updateLabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.updateLabel(button, group, label) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates a Touch Bar label.                                                                     |
| **Parameters**                              | <ul><li>button - Button ID as string</li><li>group - Group ID as string</li><li>label - Label as string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [updateOrder](#updateOrder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.updateOrder(direction, button, group) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shifts a Touch Bar button either up or down.                                                                     |
| **Parameters**                              | <ul><li>direction - Either "up" or "down"</li><li>button - Button ID as string</li><li>group - Group ID as string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [buttons](#buttons)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.buttons <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains all the saved Touch Bar Buttons                                                                     |

---

### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable Touch Bar Support.                                                                     |

---

### [supported](#supported)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.supported <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the Touch Bar is supported on this version of macOS.                                                                     |

---

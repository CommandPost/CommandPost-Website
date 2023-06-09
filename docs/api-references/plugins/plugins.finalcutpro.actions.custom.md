# plugins.finalcutpro.actions.custom

Creates a bunch of commands that can be used to assign actions to.
This allows you to assign any action to a shortcut key in CommandPost.

## API Overview
### **Variables** - _Configurable values_
 * [shortcuts](#shortcuts)

### **Functions** - _API calls offered directly by the extension_
 * [apply](#apply)
 * [assign](#assign)


## API Documentation

### Variables


### [shortcuts](#shortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.actions.custom.shortcuts <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of shortcuts.                                                                     |

---
### Functions


### [apply](#apply)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.actions.custom.apply(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Applies a shortcut.                                                                     |
| **Parameters**                              | <ul><li>`id` - The Custom Action ID.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [assign](#assign)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.actions.custom.assign(id, handlerId) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Assigns an Action to a Shortcut via a Console.                                                                     |
| **Parameters**                              | <ul><li>`id` - The Custom Action ID.</li><li>`completionFn` - An optional completion function that triggers when a selection is made.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

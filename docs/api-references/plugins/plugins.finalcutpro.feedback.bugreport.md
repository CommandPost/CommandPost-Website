# plugins.finalcutpro.feedback.bugreport

Sends Apple a Bug Report or Feature Request for Final Cut Pro.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [DEFAULT_HEIGHT](#default_height)
 * [DEFAULT_WIDTH](#default_width)

**Functions** - _API calls offered directly by the extension_
 * [open](#open)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [position](#position)


---

## API Documentation

#### Constants


### [DEFAULT_HEIGHT](#default_height)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.feedback.bugreport.DEFAULT_HEIGHT -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Window Height                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/feedback/bugreport.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/feedback/bugreport.lua#L33) |

---


### [DEFAULT_WIDTH](#default_width)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.feedback.bugreport.DEFAULT_WIDTH -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Window Width                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/feedback/bugreport.lua line 28](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/feedback/bugreport.lua#L28) |

---

#### Functions


### [open](#open)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.feedback.bugreport.open(bugReport) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Opens Final Cut Pro Feedback Screen                                                                     |
| **Parameters**                              | <ul><li>bugReport - Is it a bug report or an enhancement request?</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/feedback/bugreport.lua line 257](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/feedback/bugreport.lua#L257) |

---

#### Fields


### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.feedback.bugreport.position -> <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Webview Position                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/feedback/bugreport.lua line 38](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/feedback/bugreport.lua#L38) |

---


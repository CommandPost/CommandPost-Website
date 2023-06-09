# plugins.motion.feedback.bugreport

Sends Apple a Bug Report or Feature Request for Motion.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [DEFAULT_HEIGHT](#default_height)
 * [DEFAULT_TITLE](#default_title)
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
| **Signature**                               | `plugins.motion.feedback.bugreport.DEFAULT_HEIGHT -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Window Height                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/motion/feedback/bugreport.lua line 34](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/motion/feedback/bugreport.lua#L34){target="_blank"} |

---


### [DEFAULT_TITLE](#default_title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.motion.feedback.bugreport.DEFAULT_TITLE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Window Title                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/motion/feedback/bugreport.lua line 39](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/motion/feedback/bugreport.lua#L39){target="_blank"} |

---


### [DEFAULT_WIDTH](#default_width)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.motion.feedback.bugreport.DEFAULT_WIDTH -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Window Width                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/motion/feedback/bugreport.lua line 29](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/motion/feedback/bugreport.lua#L29){target="_blank"} |

---

#### Functions


### [open](#open)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.motion.feedback.bugreport.open(bugReport) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Opens Final Cut Pro Feedback Screen                                                                     |
| **Parameters**                              | <ul><li>bugReport - Is it a bug report or an enhancement request?</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/motion/feedback/bugreport.lua line 248](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/motion/feedback/bugreport.lua#L248){target="_blank"} |

---

#### Fields


### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.motion.feedback.bugreport.position <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Webview Position                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/motion/feedback/bugreport.lua line 44](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/motion/feedback/bugreport.lua#L44){target="_blank"} |

---


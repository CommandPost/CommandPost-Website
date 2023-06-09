# cp.feedback

Feedback Form.

---

## API Overview
**Variables** - _Configurable values_
 * [defaultHeight](#defaultheight)
 * [defaultTitle](#defaulttitle)
 * [defaultWidth](#defaultwidth)
 * [position](#position)
 * [quitOnComplete](#quitoncomplete)

**Functions** - _API calls offered directly by the extension_
 * [showFeedback](#showfeedback)


---

## API Documentation

#### Variables


### [defaultHeight](#defaultheight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.feedback.defaultHeight -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default webview height.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/feedback/init.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/feedback/init.lua#L37) |

---


### [defaultTitle](#defaulttitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.feedback.defaultTitle -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default webview title.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/feedback/init.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/feedback/init.lua#L42) |

---


### [defaultWidth](#defaultwidth)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.feedback.defaultWidth -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default webview width.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/feedback/init.lua line 32](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/feedback/init.lua#L32) |

---


### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.feedback.position -> prop`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Webview Position.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/feedback/init.lua line 52](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/feedback/init.lua#L52) |

---


### [quitOnComplete](#quitoncomplete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.feedback.quitOnComplete -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Quit on complete?                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/feedback/init.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/feedback/init.lua#L47) |

---

#### Functions


### [showFeedback](#showfeedback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.feedback.showFeedback(quitOnComplete) -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays the Feedback Screen.                                                                     |
| **Parameters**                              | <ul><li>quitOnComplete - `true` if you want CommandPost to quit after the Feedback is complete otherwise `false`</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/feedback/init.lua line 162](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/feedback/init.lua#L162) |

---


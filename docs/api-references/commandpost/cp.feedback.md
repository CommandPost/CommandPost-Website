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
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/feedback/init.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/feedback/init.lua#L37){target="_blank"} |

---


### [defaultTitle](#defaulttitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.feedback.defaultTitle -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default webview title.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/feedback/init.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/feedback/init.lua#L42){target="_blank"} |

---


### [defaultWidth](#defaultwidth)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.feedback.defaultWidth -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default webview width.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/feedback/init.lua line 32](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/feedback/init.lua#L32){target="_blank"} |

---


### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.feedback.position -> prop`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Webview Position.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/feedback/init.lua line 52](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/feedback/init.lua#L52){target="_blank"} |

---


### [quitOnComplete](#quitoncomplete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.feedback.quitOnComplete -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Quit on complete?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/feedback/init.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/feedback/init.lua#L47){target="_blank"} |

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
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/feedback/init.lua line 162](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/feedback/init.lua#L162){target="_blank"} |

---


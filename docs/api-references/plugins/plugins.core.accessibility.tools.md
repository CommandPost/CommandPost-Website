# plugins.core.accessibility.tools

Actions for control user interface elements via the Accessibility API.

---

## API Overview
**Variables** - _Configurable values_
 * [currentlyDragging](#currentlydragging)

**Functions** - _API calls offered directly by the extension_
 * [changeElementUnderMouse](#changeelementundermouse)


---

## API Documentation

#### Variables


### [currentlyDragging](#currentlydragging)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.tools.currentlyDragging -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Are we currently dragging something?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/accessibility/tools.lua line 24](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/accessibility/tools.lua#L24){target="_blank"} |

---

#### Functions


### [changeElementUnderMouse](#changeelementundermouse)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.tools.changeElementUnderMouse(increase) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Change the value of a Accessibility Element under the mouse.                                                                     |
| **Parameters**                              | <ul><li>increase - A boolean to set the direction.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/accessibility/tools.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/accessibility/tools.lua#L37){target="_blank"} |

---


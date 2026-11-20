# plugins.core.shortcuts.actions

Adds actions which allow you to trigger keyboard shortcuts.

---

## API Overview
**Variables** - _Configurable values_
 * [eventTapCount](#eventtapcount)
 * [heldKeys](#heldkeys)

**Functions** - _API calls offered directly by the extension_
 * [startEventTap](#starteventtap)
 * [stopEventTap](#stopeventtap)


---

## API Documentation

#### Variables


### [eventTapCount](#eventtapcount)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.actions.eventTapCount -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A counter to detect how many times the event tap has been triggered.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/shortcuts/actions.lua line 34](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/shortcuts/actions.lua#L34) |

---


### [heldKeys](#heldkeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.actions.heldKeys -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of held down modifier keys.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/shortcuts/actions.lua line 29](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/shortcuts/actions.lua#L29) |

---

#### Functions


### [startEventTap](#starteventtap)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.actions.startEventTap() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Start Event Tap                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/shortcuts/actions.lua line 39](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/shortcuts/actions.lua#L39) |

---


### [stopEventTap](#stopeventtap)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.actions.stopEventTap() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Start Event Tap                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/shortcuts/actions.lua line 53](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/shortcuts/actions.lua#L53) |

---


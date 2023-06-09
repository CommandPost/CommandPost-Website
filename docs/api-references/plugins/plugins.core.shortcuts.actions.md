# plugins.core.shortcuts.actions

Adds actions which allow you to trigger keyboard shortcuts.

## API Overview
* Variables - Configurable values
 * [eventTapCount](#eventTapCount)
 * [heldKeys](#heldKeys)
* Functions - API calls offered directly by the extension
 * [startEventTap](#startEventTap)
 * [stopEventTap](#stopEventTap)

## API Documentation

### Variables

| [eventTapCount](#eventTapCount)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.actions.eventTapCount -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A counter to detect how many times the event tap has been triggered.                                                                     |

| [heldKeys](#heldKeys)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.actions.heldKeys -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of held down modifier keys.                                                                     |

### Functions

| [startEventTap](#startEventTap)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.actions.startEventTap() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Start Event Tap                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stopEventTap](#stopEventTap)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.actions.stopEventTap() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Start Event Tap                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |


# plugins.core.preferences.general

General Preferences Panel.

## API Overview
* Variables - Configurable values
 * [dragAndDropFileActions](#dragAndDropFileActions)
 * [dragAndDropTextActions](#dragAndDropTextActions)
 * [openDebugConsoleOnDockClick](#openDebugConsoleOnDockClick)
* Functions - API calls offered directly by the extension
 * [registerDragAndDropFileAction](#registerDragAndDropFileAction)
 * [registerDragAndDropTextAction](#registerDragAndDropTextAction)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [autoLaunch](#autoLaunch)
 * [dockIcon](#dockIcon)
 * [dragAndDropFileAction](#dragAndDropFileAction)
 * [dragAndDropTextAction](#dragAndDropTextAction)

## API Documentation

### Variables

| [dragAndDropFileActions](#dragAndDropFileActions)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dragAndDropFileActions -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of registered Drag & Drop File Actions.                                                                     |

| [dragAndDropTextActions](#dragAndDropTextActions)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dragAndDropTextActions -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of registered Drag & Drop Text Actions.                                                                     |

| [openDebugConsoleOnDockClick](#openDebugConsoleOnDockClick)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.openDebugConsoleOnDockClick <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Open Error Log on Dock Icon Click.                                                                     |

### Functions

| [registerDragAndDropFileAction](#registerDragAndDropFileAction)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.registerDragAndDropFileAction(id, label, fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Drag & Drop File Action.                                                                     |
| **Parameters**                              | <ul><li>id - A unique identifier as a string</li><li>label - The label that should be display in the user interface</li><li>fn - A callback function</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [registerDragAndDropTextAction](#registerDragAndDropTextAction)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.registerDragAndDropTextAction(id, label, fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Drag & Drop Text Action.                                                                     |
| **Parameters**                              | <ul><li>id - A unique identifier as a string</li><li>label - The label that should be display in the user interface</li><li>fn - A callback function</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [autoLaunch](#autoLaunch)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.autoLaunch <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Controls if CommandPost will automatically upload crash data to the developer.                                                                     |

| [dockIcon](#dockIcon)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dockIcon <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Controls whether or not CommandPost should show a dock icon.                                                                     |

| [dragAndDropFileAction](#dragAndDropFileAction)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dragAndDropFileAction <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Which Drag & Drop File Action is enabled?                                                                     |

| [dragAndDropTextAction](#dragAndDropTextAction)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dragAndDropTextAction <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Which Drag & Drop Text Action is enabled?                                                                     |


# [docs](index.md) » plugins.core.loupedeckplugin.manager
---

Loupedeck Plugin Manager Plugin.

## API Overview
* Constants - Useful values which cannot be changed
 * [NUMBER_OF_FAVOURITES](#NUMBER_OF_FAVOURITES)
* Variables - Configurable values
 * [favourites](#favourites)
 * [performAction](#performAction)
* Functions - API calls offered directly by the extension
 * [installPlugin](#installPlugin)
 * [registerAction](#registerAction)
 * [removePlugin](#removePlugin)
 * [requestKeywordShortcuts](#requestKeywordShortcuts)
 * [sendMessage](#sendMessage)
 * [setEnabled](#setEnabled)
 * [startWebSocketClient](#startWebSocketClient)
 * [stopWebSocketClient](#stopWebSocketClient)
 * [updatePlugin](#updatePlugin)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [enabled](#enabled)

## API Documentation

### Constants

| [NUMBER_OF_FAVOURITES](#NUMBER_OF_FAVOURITES)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.NUMBER_OF_FAVOURITES -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Number of favourites                                                                     |

### Variables

| [favourites](#favourites)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.favourites <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A `cp.prop` that that contains all the Monogram Favourites.                                                                     |

| [performAction](#performAction)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.performAction -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of actions that are triggered by the callback function.                                                                     |

### Functions

| [installPlugin](#installPlugin)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.installPlugin() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Installs the Loupedeck Plugin.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false` if fails.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [registerAction](#registerAction)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.registerAction(name, fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Loupedeck Plugin Action.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the action.</li><li>fn - The function to trigger.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [removePlugin](#removePlugin)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.removePlugin() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes the Loupedeck Plugin.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Will always return `true`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [requestKeywordShortcuts](#requestKeywordShortcuts)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.requestKeywordShortcuts(data) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Triggered when the Loupedeck Service requests a JSON of commands                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [sendMessage](#sendMessage)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.sendMessage(message) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends a websocket message.                                                                     |
| **Parameters**                              | <ul><li>message - The message to send</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setEnabled](#setEnabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.setEnabled(enabled) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables or disables Loupedeck Plugin Support.                                                                     |
| **Parameters**                              | <ul><li>enabled - A boolean</li></ul> |
| **Returns**                                 | <ul><li>`true` if Loupedeck Plugin support is enabled, otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [startWebSocketClient](#startWebSocketClient)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.startWebSocketClient() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Starts the WebSocket Client.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stopWebSocketClient](#stopWebSocketClient)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.stopWebSocketClient() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the WebSocket Client.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [updatePlugin](#updatePlugin)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.updatePlugin() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Loupedeck Plugin.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [enabled](#enabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable Monogram Support.                                                                     |


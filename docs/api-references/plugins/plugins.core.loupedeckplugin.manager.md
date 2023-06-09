# plugins.core.loupedeckplugin.manager

Loupedeck Plugin Manager Plugin.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [NUMBER_OF_FAVOURITES](#number_of_favourites)

**Variables** - _Configurable values_
 * [favourites](#favourites)
 * [performAction](#performaction)

**Functions** - _API calls offered directly by the extension_
 * [installPlugin](#installplugin)
 * [registerAction](#registeraction)
 * [removePlugin](#removeplugin)
 * [requestKeywordShortcuts](#requestkeywordshortcuts)
 * [sendMessage](#sendmessage)
 * [setEnabled](#setenabled)
 * [startWebSocketClient](#startwebsocketclient)
 * [stopWebSocketClient](#stopwebsocketclient)
 * [updatePlugin](#updateplugin)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [enabled](#enabled)


---

## API Documentation

#### Constants


### [NUMBER_OF_FAVOURITES](#number_of_favourites)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.NUMBER_OF_FAVOURITES -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Number of favourites                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckplugin/manager/init.lua line 38](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckplugin/manager/init.lua#L38){target="_blank"} |

---

#### Variables


### [favourites](#favourites)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.favourites <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A `cp.prop` that that contains all the Monogram Favourites.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckplugin/manager/init.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckplugin/manager/init.lua#L63){target="_blank"} |

---


### [performAction](#performaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.performAction -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of actions that are triggered by the callback function.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckplugin/manager/init.lua line 68](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckplugin/manager/init.lua#L68){target="_blank"} |

---

#### Functions


### [installPlugin](#installplugin)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.installPlugin() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Installs the Loupedeck Plugin.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false` if fails.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckplugin/manager/init.lua line 199](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckplugin/manager/init.lua#L199){target="_blank"} |

---


### [registerAction](#registeraction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.registerAction(name, fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Loupedeck Plugin Action.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the action.</li><li>fn - The function to trigger.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckplugin/manager/init.lua line 73](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckplugin/manager/init.lua#L73){target="_blank"} |

---


### [removePlugin](#removeplugin)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.removePlugin() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes the Loupedeck Plugin.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Will always return `true`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckplugin/manager/init.lua line 379](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckplugin/manager/init.lua#L379){target="_blank"} |

---


### [requestKeywordShortcuts](#requestkeywordshortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.requestKeywordShortcuts(data) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Triggered when the Loupedeck Service requests a JSON of commands                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/loupedeckplugin/init.lua line 942](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/loupedeckplugin/init.lua#L942){target="_blank"} |

---


### [sendMessage](#sendmessage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.sendMessage(message) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends a websocket message.                                                                     |
| **Parameters**                              | <ul><li>message - The message to send</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckplugin/manager/init.lua line 134](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckplugin/manager/init.lua#L134){target="_blank"} |

---


### [setEnabled](#setenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.setEnabled(enabled) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables or disables Loupedeck Plugin Support.                                                                     |
| **Parameters**                              | <ul><li>enabled - A boolean</li></ul> |
| **Returns**                                 | <ul><li>`true` if Loupedeck Plugin support is enabled, otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckplugin/manager/init.lua line 405](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckplugin/manager/init.lua#L405){target="_blank"} |

---


### [startWebSocketClient](#startwebsocketclient)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.startWebSocketClient() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Starts the WebSocket Client.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckplugin/manager/init.lua line 149](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckplugin/manager/init.lua#L149){target="_blank"} |

---


### [stopWebSocketClient](#stopwebsocketclient)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.stopWebSocketClient() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the WebSocket Client.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckplugin/manager/init.lua line 173](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckplugin/manager/init.lua#L173){target="_blank"} |

---


### [updatePlugin](#updateplugin)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.updatePlugin() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Loupedeck Plugin.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckplugin/manager/init.lua line 293](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckplugin/manager/init.lua#L293){target="_blank"} |

---

#### Fields


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckplugin.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable Monogram Support.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/loupedeckplugin/manager/init.lua line 188](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/loupedeckplugin/manager/init.lua#L188){target="_blank"} |

---


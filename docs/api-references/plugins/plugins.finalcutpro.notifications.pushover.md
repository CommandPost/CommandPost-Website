# plugins.finalcutpro.notifications.pushover

Pushover Notifications Plugin.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [init](#init)
 * [sendNotification](#sendnotification)
 * [update](#update)
 * [validateAPIKeys](#validateapikeys)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [apiValidated](#apivalidated)
 * [appAPIKey](#appapikey)
 * [enabled](#enabled)
 * [userAPIKey](#userapikey)


---

## API Documentation

#### Functions


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.init() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the plugin.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/notifications/pushover.lua line 107](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/pushover.lua#L107){target="_blank"} |

---


### [sendNotification](#sendnotification)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.sendNotification(message, [title]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends a notification.                                                                     |
| **Parameters**                              | <ul><li>message - The message you want to send as a string.</li><li>[title] - An optional Title for the message as a string.</li></ul> |
| **Returns**                                 | <ul><li>success - `true` if successful otherwise `false`</li><li>errorMessage - a string containing any error messages</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/notifications/pushover.lua line 121](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/pushover.lua#L121){target="_blank"} |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables or disables Pushover Notifications depending on the user's preferences.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/notifications/pushover.lua line 82](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/pushover.lua#L82){target="_blank"} |

---


### [validateAPIKeys](#validateapikeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.validateAPIKeys(userKey, appKey) -> success, errorMessage`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Validates a Pushover User & Application API Key                                                                     |
| **Parameters**                              | <ul><li>userKey - The User API Key as a string</li><li>appKey - The Application API Key as a string</li></ul> |
| **Returns**                                 | <ul><li>success - `true` if successful otherwise `false`</li><li>errorMessage - a string containing any error messages</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/notifications/pushover.lua line 40](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/pushover.lua#L40){target="_blank"} |

---

#### Fields


### [apiValidated](#apivalidated)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.apiValidated <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Whether or not the API keys have been validated.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/notifications/pushover.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/pushover.lua#L30){target="_blank"} |

---


### [appAPIKey](#appapikey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.appAPIKey <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Application API Key                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/notifications/pushover.lua line 25](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/pushover.lua#L25){target="_blank"} |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Whether or not the plugin has been enabled.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/notifications/pushover.lua line 35](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/pushover.lua#L35){target="_blank"} |

---


### [userAPIKey](#userapikey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.userAPIKey <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | User API Key                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/notifications/pushover.lua line 20](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/pushover.lua#L20){target="_blank"} |

---


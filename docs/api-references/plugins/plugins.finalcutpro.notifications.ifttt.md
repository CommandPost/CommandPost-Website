# plugins.finalcutpro.notifications.ifttt

IFTTT Notifications Plugin.

Author: [JFtechOfficial](https://github.com/JFtechOfficial)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [init](#init)
 * [sendNotification](#sendnotification)
 * [update](#update)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [appAPIKey](#appapikey)
 * [enabled](#enabled)
 * [userAPIKey](#userapikey)


---

## API Documentation

#### Functions


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.ifttt.init() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the plugin.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/notifications/ifttt.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/ifttt.lua#L63) |

---


### [sendNotification](#sendnotification)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.ifttt.sendNotification(message, [title]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends a notification.                                                                     |
| **Parameters**                              | <ul><li>message - The message you want to send as a string.</li><li>[title] - An optional Title for the message as a string.</li></ul> |
| **Returns**                                 | <ul><li>success - `true` if successful otherwise `false`</li><li>errorMessage - a string containing any error messages</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/notifications/ifttt.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/ifttt.lua#L77) |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.ifttt.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables or disables ifttt Notifications depending on the user's preferences.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/notifications/ifttt.lua line 38](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/ifttt.lua#L38) |

---

#### Fields


### [appAPIKey](#appapikey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.ifttt.appAPIKey <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Application API Key                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/notifications/ifttt.lua line 28](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/ifttt.lua#L28) |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.ifttt.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Whether or not the plugin has been enabled.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/notifications/ifttt.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/ifttt.lua#L33) |

---


### [userAPIKey](#userapikey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.ifttt.userAPIKey <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | User API Key                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/notifications/ifttt.lua line 23](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/ifttt.lua#L23) |

---


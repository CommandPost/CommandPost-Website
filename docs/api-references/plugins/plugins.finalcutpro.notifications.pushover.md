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
| **Notes**                                   | <ul></ul> |

---


### [sendNotification](#sendnotification)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.sendNotification(message, [title]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends a notification.                                                                     |
| **Parameters**                              | <ul><li>message - The message you want to send as a string.</li><li>[title] - An optional Title for the message as a string.</li></ul> |
| **Returns**                                 | <ul><li>success - `true` if successful otherwise `false`</li><li>errorMessage - a string containing any error messages</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables or disables Pushover Notifications depending on the user's preferences.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [validateAPIKeys](#validateapikeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.validateAPIKeys(userKey, appKey) -> success, errorMessage`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Validates a Pushover User & Application API Key                                                                     |
| **Parameters**                              | <ul><li>userKey - The User API Key as a string</li><li>appKey - The Application API Key as a string</li></ul> |
| **Returns**                                 | <ul><li>success - `true` if successful otherwise `false`</li><li>errorMessage - a string containing any error messages</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [apiValidated](#apivalidated)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.apiValidated <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Whether or not the API keys have been validated.                                                                     |
| **Notes**                                   | - None |

---


### [appAPIKey](#appapikey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.appAPIKey <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Application API Key                                                                     |
| **Notes**                                   | - None |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Whether or not the plugin has been enabled.                                                                     |
| **Notes**                                   | - None |

---


### [userAPIKey](#userapikey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.pushover.userAPIKey <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | User API Key                                                                     |
| **Notes**                                   | - None |

---


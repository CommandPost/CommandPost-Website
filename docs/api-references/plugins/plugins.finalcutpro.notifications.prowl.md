# plugins.finalcutpro.notifications.prowl

Prowl Notifications Plugin.

## API Overview
* Functions - API calls offered directly by the extension
 * [init](#init)
 * [sendNotification](#sendnotification)
 * [update](#update)
 * [validateAPIKey](#validateapikey)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [apiKey](#apikey)
 * [apiValidated](#apivalidated)
 * [enabled](#enabled)

## API Documentation

### Functions


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.prowl.init() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the plugin.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [sendNotification](#sendnotification)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.prowl.sendNotification(message, [title]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends a notification.                                                                     |
| **Parameters**                              | <ul><li>message - The message you want to send as a string.</li><li>[title] - An optional Title for the message as a string.</li></ul> |
| **Returns**                                 | <ul><li>success - `true` if successful otherwise `false`</li><li>errorMessage - a string containing any error messages</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.prowl.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables or disables Prowl Notifications depending on the user's preferences.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [validateAPIKey](#validateapikey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.prowl.validateAPIKey(key) -> success, errorMessage`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Validates a Growl API Key                                                                     |
| **Parameters**                              | <ul><li>key - The API key as string</li></ul> |
| **Returns**                                 | <ul><li>success - `true` if successful otherwise `false`</li><li>errorMessage - a string containing any error messages</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [apiKey](#apikey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.prowl.apiKey <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Prowl API Key                                                                     |

---

### [apiValidated](#apivalidated)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.prowl.apiValidated <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Whether or not the API key has been validated.                                                                     |

---

### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.prowl.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Whether or not the plugin has been enabled.                                                                     |

---

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

### Functions


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.ifttt.init() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the plugin.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [sendNotification](#sendnotification)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.ifttt.sendNotification(message, [title]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends a notification.                                                                     |
| **Parameters**                              | <ul><li>message - The message you want to send as a string.</li><li>[title] - An optional Title for the message as a string.</li></ul> |
| **Returns**                                 | <ul><li>success - `true` if successful otherwise `false`</li><li>errorMessage - a string containing any error messages</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.ifttt.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables or disables ifttt Notifications depending on the user's preferences.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [appAPIKey](#appapikey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.ifttt.appAPIKey <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Application API Key                                                                     |

---

### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.ifttt.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Whether or not the plugin has been enabled.                                                                     |

---

### [userAPIKey](#userapikey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.ifttt.userAPIKey <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | User API Key                                                                     |

---
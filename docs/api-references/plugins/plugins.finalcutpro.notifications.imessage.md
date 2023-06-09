# plugins.finalcutpro.notifications.imessage

iMessage Notifications Plugin.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [init](#init)
 * [sendNotification](#sendnotification)
 * [update](#update)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [enabled](#enabled)
 * [target](#target)


---

## API Documentation

#### Functions


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.imessage.init() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the plugin.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [sendNotification](#sendnotification)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.imessage.sendNotification(message) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends a notification.                                                                     |
| **Parameters**                              | <ul><li>message - The message you want to send as a string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.imessage.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables or disables iMessage Notifications depending on the user's preferences.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.imessage.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Whether or not the plugin has been enabled.                                                                     |
| **Notes**                                   | - None |

---


### [target](#target)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.imessage.target <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A string containing a mobile number or Apple ID                                                                     |
| **Notes**                                   | - None |

---


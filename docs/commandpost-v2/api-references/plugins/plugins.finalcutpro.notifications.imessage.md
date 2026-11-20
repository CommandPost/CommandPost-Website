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
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/notifications/imessage.lua line 69](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/imessage.lua#L69) |

---


### [sendNotification](#sendnotification)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.imessage.sendNotification(message) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends a notification.                                                                     |
| **Parameters**                              | <ul><li>message - The message you want to send as a string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/notifications/imessage.lua line 53](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/imessage.lua#L53) |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.imessage.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables or disables iMessage Notifications depending on the user's preferences.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/notifications/imessage.lua line 18](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/imessage.lua#L18) |

---

#### Fields


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.imessage.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Whether or not the plugin has been enabled.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/notifications/imessage.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/imessage.lua#L43) |

---


### [target](#target)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.notifications.imessage.target <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A string containing a mobile number or Apple ID                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/notifications/imessage.lua line 48](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/notifications/imessage.lua#L48) |

---


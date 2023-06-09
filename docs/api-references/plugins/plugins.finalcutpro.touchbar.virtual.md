# plugins.finalcutpro.touchbar.virtual

Virtual Touch Bar Plugin.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [LOCATION_TIMELINE](#location_timeline)
 * [VISIBILITY_ALWAYS](#visibility_always)
 * [VISIBILITY_DEFAULT](#visibility_default)
 * [VISIBILITY_FCP](#visibility_fcp)

**Functions** - _API calls offered directly by the extension_
 * [updateLocation](#updatelocation)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [enabled](#enabled)
 * [location](#location)
 * [visibility](#visibility)


---

## API Documentation

#### Constants


### [LOCATION_TIMELINE](#location_timeline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.LOCATION_TIMELINE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Virtual Touch Bar is displayed in the top centre of the Final Cut Pro timeline                                                                     |
| **Notes**                                   | - None |

---


### [VISIBILITY_ALWAYS](#visibility_always)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.VISIBILITY_ALWAYS -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Virtual Touch Bar is Always Visible                                                                     |
| **Notes**                                   | - None |

---


### [VISIBILITY_DEFAULT](#visibility_default)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.VISIBILITY_DEFAULT -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default visibility.                                                                     |
| **Notes**                                   | - None |

---


### [VISIBILITY_FCP](#visibility_fcp)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.VISIBILITY_FCP -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Virtual Touch Bar is only visible when Final Cut Pro is active.                                                                     |
| **Notes**                                   | - None |

---

#### Functions


### [updateLocation](#updatelocation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.updateLocation() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Location of the Virtual Touch Bar                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the plugin is enabled.                                                                     |
| **Notes**                                   | - None |

---


### [location](#location)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.location <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Virtual Touch Bar Location Setting                                                                     |
| **Notes**                                   | - None |

---


### [visibility](#visibility)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.visibility <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | When should the Virtual Touch Bar be visible?                                                                     |
| **Notes**                                   | - None |

---


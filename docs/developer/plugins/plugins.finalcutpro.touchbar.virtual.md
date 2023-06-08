# [docs](index.md) » plugins.finalcutpro.touchbar.virtual
---

Virtual Touch Bar Plugin.

## API Overview
* Constants - Useful values which cannot be changed
 * [LOCATION_TIMELINE](#LOCATION_TIMELINE)
 * [VISIBILITY_ALWAYS](#VISIBILITY_ALWAYS)
 * [VISIBILITY_DEFAULT](#VISIBILITY_DEFAULT)
 * [VISIBILITY_FCP](#VISIBILITY_FCP)
* Functions - API calls offered directly by the extension
 * [updateLocation](#updateLocation)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [enabled](#enabled)
 * [location](#location)
 * [visibility](#visibility)

## API Documentation

### Constants

| [LOCATION_TIMELINE](#LOCATION_TIMELINE)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.LOCATION_TIMELINE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Virtual Touch Bar is displayed in the top centre of the Final Cut Pro timeline                                                                     |

| [VISIBILITY_ALWAYS](#VISIBILITY_ALWAYS)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.VISIBILITY_ALWAYS -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Virtual Touch Bar is Always Visible                                                                     |

| [VISIBILITY_DEFAULT](#VISIBILITY_DEFAULT)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.VISIBILITY_DEFAULT -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default visibility.                                                                     |

| [VISIBILITY_FCP](#VISIBILITY_FCP)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.VISIBILITY_FCP -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Virtual Touch Bar is only visible when Final Cut Pro is active.                                                                     |

### Functions

| [updateLocation](#updateLocation)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.updateLocation() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Location of the Virtual Touch Bar                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [enabled](#enabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the plugin is enabled.                                                                     |

| [location](#location)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.location <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Virtual Touch Bar Location Setting                                                                     |

| [visibility](#visibility)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.touchbar.virtual.visibility <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | When should the Virtual Touch Bar be visible?                                                                     |


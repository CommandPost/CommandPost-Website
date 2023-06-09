# plugins.finalcutpro.timeline.preferences

Final Cut Pro Timeline Preferences.

---

## API Overview
**Variables** - _Configurable values_
 * [backgroundRender](#backgroundrender)

**Functions** - _API calls offered directly by the extension_
 * [getAutoRenderDelay](#getautorenderdelay)


---

## API Documentation

#### Variables


### [backgroundRender](#backgroundrender)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.preferences.backgroundRender <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Background Render enabled?                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/finalcutpro/timeline/preferences.lua line 13](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/preferences.lua#L13) |

---

#### Functions


### [getAutoRenderDelay](#getautorenderdelay)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.preferences.getAutoRenderDelay() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the 'FFAutoRenderDelay' value from the Final Cut Pro Preferences file.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>'FFAutoRenderDelay' value as number.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/preferences.lua line 18](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/preferences.lua#L18) |

---


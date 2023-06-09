# cp.apple.finalcutpro.prefs.GeneralPanel

General Panel Module.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [TIME_DISPLAY](#time_display)

**Functions** - _API calls offered directly by the extension_
 * [timeDisplay](#timedisplay)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [GeneralPanel](#generalpanel)


---

## API Documentation

#### Constants


### [TIME_DISPLAY](#time_display)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.GeneralPanel.TIME_DISPLAY -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The time display options.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua line 20](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua#L20){target="_blank"} |

---

#### Functions


### [timeDisplay](#timedisplay)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.GeneralPanel.timeDisplay([value]) -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets to sets the Time Display value.                                                                     |
| **Parameters**                              | <ul><li>value - An optional value to set the Time Display.</li></ul> |
| **Returns**                                 | <ul><li>The time display if successful, otherwise `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua#L30){target="_blank"} |

---

#### Constructors


### [GeneralPanel](#generalpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.GeneralPanel(preferencesDialog) -> GeneralPanel`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `GeneralPanel` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new `GeneralPanel` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua line 76](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua#L76){target="_blank"} |

---


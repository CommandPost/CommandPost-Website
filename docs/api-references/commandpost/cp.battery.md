# cp.battery

Provides access to various properties of the battery. Each of these properties
is a `cp.prop`, so it can be watched for changes. For example:

```lua
local battery = require("cp.battery")
battery.powerSupply:watch(function(value)
    print("Now using "..value)
end)
```

This will `print` "Now using AC Power" or "Now using Battery Power" whenever the
power supply changes.

By default the watcher initialises in a "stopped" state, and must be started for
the `cp.prop` watchers to trigger.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [amperage](#amperage)
 * [capacity](#capacity)
 * [cycles](#cycles)
 * [designCapacity](#designcapacity)
 * [health](#health)
 * [healthCondition](#healthcondition)
 * [isCharged](#ischarged)
 * [isCharging](#ischarging)
 * [isFinishingCharge](#isfinishingcharge)
 * [maxCapacity](#maxcapacity)
 * [otherBatteryInfo](#otherbatteryinfo)
 * [percentage](#percentage)
 * [psuSerial](#psuserial)
 * [timeRemaining](#timeremaining)
 * [timeToFullCharge](#timetofullcharge)
 * [voltage](#voltage)
 * [watts](#watts)

**Variables** - _Configurable values_
 * [_watcher](#_watcher)

**Functions** - _API calls offered directly by the extension_
 * [start](#start)
 * [stop](#stop)


---

## API Documentation

#### Constants


### [amperage](#amperage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.amperage <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the amount of current flowing through the battery, in mAh.                                                                     |
| **Notes**                                   | <ul><li>A number containing the amount of current flowing through the battery. The value may be:</li><li> ** Less than zero if the battery is being discharged (i.e. the computer is running on battery power)</li><li> ** Zero if the battery is being neither charged nor discharded</li><li> ** Greater than zero if the bettery is being charged</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 19](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L19){target="_blank"} |

---


### [capacity](#capacity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.capacity <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the current capacity of the battery in mAh.                                                                     |
| **Notes**                                   | <ul><li>This is the measure of how charged the battery is, vs the value of `cp.battery.maxCapacity()`.</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 29](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L29){target="_blank"} |

---


### [cycles](#cycles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.cycles <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the number of discharge cycles of the battery.                                                                     |
| **Notes**                                   | <ul><li>One cycle is a full discharge of the battery, followed by a full charge. This may also be an aggregate of many smaller discharge-then-charge cycles (e.g. 10 iterations of discharging the battery from 100% to 90% and then charging back to 100% each time, is considered to be one cycle).</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 36](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L36){target="_blank"} |

---


### [designCapacity](#designcapacity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.designCapacity <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the design capacity of the battery in mAh.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L43){target="_blank"} |

---


### [health](#health)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.health <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the health status of the battery; either "Good", "Fair" or "Poor",                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L47){target="_blank"} |

---


### [healthCondition](#healthcondition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.healthCondition <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the health condition status of the battery:                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 52](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L52){target="_blank"} |

---


### [isCharged](#ischarged)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.isCharged <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Checks if the battery is fully charged.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 59](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L59){target="_blank"} |

---


### [isCharging](#ischarging)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.isCharging <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Checks if the battery is currently charging.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L63){target="_blank"} |

---


### [isFinishingCharge](#isfinishingcharge)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.isFinishingCharge <cp.prop: boolean | string; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Checks if the battery is trickle charging;                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 67](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L67){target="_blank"} |

---


### [maxCapacity](#maxcapacity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.maxCapacity <cp.prop; number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the maximum capacity of the battery in mAh.                                                                     |
| **Notes**                                   | <ul><li>This may exceed the value of `cp.battery.designCapacity()` due to small variations in the production chemistry vs the design.</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 72](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L72){target="_blank"} |

---


### [otherBatteryInfo](#otherbatteryinfo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.otherBatteryInfo <cp.prop: table | nil; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns information about non-PSU batteries (e.g. bluetooth accessories). If none are found, `nil` is returned.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 79](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L79){target="_blank"} |

---


### [percentage](#percentage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.percentage <cp.prop; string; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the current source of power; either `"AC Power"`, `"Battery Power"` or `"Off Line"`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 83](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L83){target="_blank"} |

---


### [psuSerial](#psuserial)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.psuSerial <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the serial number of the attached power supply, or `0` if not present.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 87](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L87){target="_blank"} |

---


### [timeRemaining](#timeremaining)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.timeRemaining <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The amount of battery life remaining, in minuges.                                                                     |
| **Notes**                                   | <ul><li>The return value may be:</li><li> ** Greater than zero to indicate the number of minutes remaining.</li><li> ** `-1` if the remaining batttery life is being calculated.</li><li> ** `-2` if there is unlimited time remaining (i.e. the system is on AC power).</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 91](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L91){target="_blank"} |

---


### [timeToFullCharge](#timetofullcharge)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.timeToFullCharge <cp.prop; number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the time remaining for the battery to be fully charged, in minutes, or `-`` if still being calculated.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 101](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L101){target="_blank"} |

---


### [voltage](#voltage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.voltage <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the current voltage of the battery in mV.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L105){target="_blank"} |

---


### [watts](#watts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.watts <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the power entering or leaving the battery, in W.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 109](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L109){target="_blank"} |

---

#### Variables


### [_watcher](#_watcher)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery._watcher -> hs.battery.watcher object`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The battery watcher.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 133](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L133){target="_blank"} |

---

#### Functions


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.start() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Starts the battery watcher.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 147](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L147){target="_blank"} |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.stop() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the battery watcher.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//battery.lua line 160](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//battery.lua#L160){target="_blank"} |

---


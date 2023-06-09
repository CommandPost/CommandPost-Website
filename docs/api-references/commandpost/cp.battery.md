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

---


### [capacity](#capacity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.capacity <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the current capacity of the battery in mAh.                                                                     |
| **Notes**                                   | <ul><li>This is the measure of how charged the battery is, vs the value of `cp.battery.maxCapacity()`.</li></ul> |

---


### [cycles](#cycles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.cycles <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the number of discharge cycles of the battery.                                                                     |
| **Notes**                                   | <ul><li>One cycle is a full discharge of the battery, followed by a full charge. This may also be an aggregate of many smaller discharge-then-charge cycles (e.g. 10 iterations of discharging the battery from 100% to 90% and then charging back to 100% each time, is considered to be one cycle).</li></ul> |

---


### [designCapacity](#designcapacity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.designCapacity <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the design capacity of the battery in mAh.                                                                     |
| **Notes**                                   | - None |

---


### [health](#health)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.health <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the health status of the battery; either "Good", "Fair" or "Poor",                                                                     |
| **Notes**                                   | - None |

---


### [healthCondition](#healthcondition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.healthCondition <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the health condition status of the battery:                                                                     |
| **Notes**                                   | - None |

---


### [isCharged](#ischarged)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.isCharged <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Checks if the battery is fully charged.                                                                     |
| **Notes**                                   | - None |

---


### [isCharging](#ischarging)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.isCharging <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Checks if the battery is currently charging.                                                                     |
| **Notes**                                   | - None |

---


### [isFinishingCharge](#isfinishingcharge)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.isFinishingCharge <cp.prop: boolean | string; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Checks if the battery is trickle charging;                                                                     |
| **Notes**                                   | - None |

---


### [maxCapacity](#maxcapacity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.maxCapacity <cp.prop; number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the maximum capacity of the battery in mAh.                                                                     |
| **Notes**                                   | <ul><li>This may exceed the value of `cp.battery.designCapacity()` due to small variations in the production chemistry vs the design.</li></ul> |

---


### [otherBatteryInfo](#otherbatteryinfo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.otherBatteryInfo <cp.prop: table | nil; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns information about non-PSU batteries (e.g. bluetooth accessories). If none are found, `nil` is returned.                                                                     |
| **Notes**                                   | - None |

---


### [percentage](#percentage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.percentage <cp.prop; string; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the current source of power; either `"AC Power"`, `"Battery Power"` or `"Off Line"`.                                                                     |
| **Notes**                                   | - None |

---


### [psuSerial](#psuserial)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.psuSerial <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the serial number of the attached power supply, or `0` if not present.                                                                     |
| **Notes**                                   | - None |

---


### [timeRemaining](#timeremaining)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.timeRemaining <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The amount of battery life remaining, in minuges.                                                                     |
| **Notes**                                   | <ul><li>The return value may be:</li><li> ** Greater than zero to indicate the number of minutes remaining.</li><li> ** `-1` if the remaining batttery life is being calculated.</li><li> ** `-2` if there is unlimited time remaining (i.e. the system is on AC power).</li></ul> |

---


### [timeToFullCharge](#timetofullcharge)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.timeToFullCharge <cp.prop; number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the time remaining for the battery to be fully charged, in minutes, or `-`` if still being calculated.                                                                     |
| **Notes**                                   | - None |

---


### [voltage](#voltage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.voltage <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the current voltage of the battery in mV.                                                                     |
| **Notes**                                   | - None |

---


### [watts](#watts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.watts <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the power entering or leaving the battery, in W.                                                                     |
| **Notes**                                   | - None |

---

#### Variables


### [_watcher](#_watcher)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery._watcher -> hs.battery.watcher object`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The battery watcher.                                                                     |
| **Notes**                                   | - None |

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
| **Notes**                                   | <ul></ul> |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.battery.stop() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the battery watcher.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


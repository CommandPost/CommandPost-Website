# hs.battery

Battery/power information
All functions here may return nil, if the information requested is not available.

This module is based primarily on code from the previous incarnation of Mjolnir by [Steven Degutis](https://github.com/sdegutis/).

---

## Submodules
 * [hs.battery.watcher](hs.battery.watcher.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [_report](#_report)
 * [adapterSerialNumber](#adapterserialnumber)
 * [amperage](#amperage)
 * [batterySerialNumber](#batteryserialnumber)
 * [batteryType](#batterytype)
 * [capacity](#capacity)
 * [cycles](#cycles)
 * [designCapacity](#designcapacity)
 * [getAll](#getall)
 * [health](#health)
 * [healthCondition](#healthcondition)
 * [isCharged](#ischarged)
 * [isCharging](#ischarging)
 * [isFinishingCharge](#isfinishingcharge)
 * [maxCapacity](#maxcapacity)
 * [name](#name)
 * [otherBatteryInfo](#otherbatteryinfo)
 * [percentage](#percentage)
 * [powerSource](#powersource)
 * [powerSourceType](#powersourcetype)
 * [privateBluetoothBatteryInfo](#privatebluetoothbatteryinfo)
 * [timeRemaining](#timeremaining)
 * [timeToFullCharge](#timetofullcharge)
 * [voltage](#voltage)
 * [warningLevel](#warninglevel)
 * [watts](#watts)


---

## API Documentation

#### Functions


### [_report](#_report)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery._report() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing all of the details concerning the Mac's powersource(s).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table containing the raw data about the power source(s) for the Mac.</li></ul>          |
| **Notes**                                   | <ul><li>This function is generally not required and is provided to aid in debugging. This function combines the output of the following internally used functions:</li><li>  `hs.battery._adapterDetails()`</li><li>  `hs.battery._powerSources()`</li><li>  `hs.battery._appleSmartBattery()`</li><li>  `hs.battery._iopmBatteryInfo()`</li><li></li><li>You can view this report by typing `hs.inspect(hs.battery._report())` (or a subset of it by using one of the above listed functions instead) -- it will primarily be of interest when debugging or extending this module and generally not necessary to use.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 365](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L365){target="_blank"} |

---


### [adapterSerialNumber](#adapterserialnumber)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.adapterSerialNumber() -> integer | string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the serial number of the attached power supply, if present                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An number or string containing the power supply's serial number, or nil if the adapter is not attached or does not provide one.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 314](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L314){target="_blank"} |

---


### [amperage](#amperage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.amperage() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the amount of current flowing through the battery, in mAh                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the amount of current flowing through the battery. The value may be:</li><li> Less than zero if the battery is being discharged (i.e. the computer is running on battery power)</li><li> Zero if the battery is being neither charged nor discharged</li><li> Greater than zero if the battery is being charged</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 159](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L159){target="_blank"} |

---


### [batterySerialNumber](#batteryserialnumber)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.batterySerialNumber() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the serial number of the battery, if present                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the battery's serial number, or nil if there is no battery or the battery or UPS does not provide one.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 328](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L328){target="_blank"} |

---


### [batteryType](#batterytype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.batteryType() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the type of battery present, or nil if there is no battery                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing one of "UPS" or "InternalBattery", or nil if no battery is present.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 300](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L300){target="_blank"} |

---


### [capacity](#capacity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.capacity() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the current capacity of the battery in mAh                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the current capacity of the battery in mAh</li></ul>          |
| **Notes**                                   | <ul><li>This is the measure of how charged the battery is, vs the value of `hs.battery.maxCapacity()`</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 92](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L92){target="_blank"} |

---


### [cycles](#cycles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.cycles() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the number of discharge cycles of the battery                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The number of cycles</li></ul>          |
| **Notes**                                   | <ul><li>One cycle is a full discharge of the battery, followed by a full charge. This may also be an aggregate of many smaller discharge-then-charge cycles (e.g. 10 iterations of discharging the battery from 100% to 90% and then charging back to 100% each time, is considered to be one cycle)</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 44](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L44){target="_blank"} |

---


### [designCapacity](#designcapacity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.designCapacity() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the design capacity of the battery in mAh.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the rated maximum capacity of the battery</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 109](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L109){target="_blank"} |

---


### [getAll](#getall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.getAll() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get all available battery information                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing all the information provided by the separate functions in hs.battery</li></ul>          |
| **Notes**                                   | <ul><li>If you require multiple pieces of information about a battery, this function may be more efficient than calling several other functions separately</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 342](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L342){target="_blank"} |

---


### [health](#health)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.health() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the health status of the battery.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing one of {Good, Fair, Poor}, as determined by the Apple Smart Battery controller</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 200](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L200){target="_blank"} |

---


### [healthCondition](#healthcondition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.healthCondition() -> string or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the health condition status of the battery.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nil if there are no health conditions to report, or a string containing either:</li><li> "Check Battery"</li><li> "Permanent Battery Failure"</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 214](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L214){target="_blank"} |

---


### [isCharged](#ischarged)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.isCharged() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the charged state of the battery                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the battery is charged, false if not</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 258](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L258){target="_blank"} |

---


### [isCharging](#ischarging)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.isCharging() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the charging state of the battery                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the battery is being charged, false if not</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 244](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L244){target="_blank"} |

---


### [isFinishingCharge](#isfinishingcharge)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.isFinishingCharge() -> boolean or string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns true if battery is finishing its charge                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the battery is in its final charging state (i.e. trickle charging), false if not</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 272](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L272){target="_blank"} |

---


### [maxCapacity](#maxcapacity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.maxCapacity() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the maximum capacity of the battery in mAh                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the observed maximum capacity of the battery in mAh</li></ul>          |
| **Notes**                                   | <ul><li>This may exceed the value of `hs.battery.designCapacity()` due to small variations in the production chemistry vs the design</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 75](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L75){target="_blank"} |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.name() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the name of the battery                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the name of the battery</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 61](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L61){target="_blank"} |

---


### [otherBatteryInfo](#otherbatteryinfo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.otherBatteryInfo() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns information about non-PSU batteries (e.g. Bluetooth accessories)                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing information about other batteries known to the system, or an empty table if no devices were found</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/libbattery.m line 110](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/libbattery.m#L110){target="_blank"} |

---


### [percentage](#percentage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.percentage() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the current percentage of battery charge                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the percentage of battery charge</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 123](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L123){target="_blank"} |

---


### [powerSource](#powersource)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.powerSource() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the current source providing power                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing one of {AC Power, Battery Power, UPS Power}.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/libbattery.m line 55](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/libbattery.m#L55){target="_blank"} |

---


### [powerSourceType](#powersourcetype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.powerSourceType() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns current power source type                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing one of {AC Power, Battery Power, Off Line}.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 286](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L286){target="_blank"} |

---


### [privateBluetoothBatteryInfo](#privatebluetoothbatteryinfo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.privateBluetoothBatteryInfo() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns information about Bluetooth devices using Apple Private APIs                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing information about devices using private Apple APIs.</li></ul>          |
| **Notes**                                   | <ul><li>This function uses private Apple APIs - that means it can break without notice on any macOS version update. Please report breakage to us!</li><li>This function will return information for all connected Bluetooth devices, but much of it will be meaningless for most devices</li><li>The table contains the following keys:</li><li>  vendorID - Numerical identifier for the vendor of the device (Apple's ID is 76)</li><li>  productID - Numerical identifier for the device</li><li>  address - The Bluetooth address of the device</li><li>  isApple - A string containing "YES" or "NO", depending on whether or not this is an Apple/Beats product, or a third party product</li><li>  name - A human readable string containing the name of the device</li><li>  batteryPercentSingle - For some devices this will contain the percentage of the battery (e.g. Beats headphones)</li><li>  batteryPercentCombined - We do not currently understand what this field represents, please report if you find a non-zero value here</li><li>  batteryPercentCase - Battery percentage of AirPods cases (note that this will often read 0 - the AirPod case sleeps aggressively)</li><li>  batteryPercentLeft - Battery percentage of the left AirPod if it is out of the case</li><li>  batteryPercentRight - Battery percentage of the right AirPod if it is out of the case</li><li>  buttonMode - We do not currently understand what this field represents, please report if you find a value other than 1</li><li>  micMode - For AirPods this corresponds to the microphone option in the device's Bluetooth options</li><li>  leftDoubleTap - For AirPods this corresponds to the left double tap action in the device's Bluetooth options</li><li>  rightDoubleTap - For AirPods this corresponds to the right double tap action in the device's Bluetooth options</li><li>  primaryBud - For AirPods this is either "left" or "right" depending on which bud is currently considered the primary device</li><li>  primaryInEar - For AirPods this is "YES" or "NO" depending on whether or not the primary bud is currently in an ear</li><li>  secondaryInEar - For AirPods this is "YES" or "NO" depending on whether or not the secondary bud is currently in an ear</li><li>  isInEarDetectionSupported - Whether or not this device can detect when it is currently in an ear</li><li>  isEnhancedDoubleTapSupported - Whether or not this device supports double tapping</li><li>  isANCSupported - We believe this likely indicates whether or not this device supports Active Noise Cancelling (e.g. Beats Solo)</li><li>Please report any crashes from this function - it's likely that there are Bluetooth devices we haven't tested which may return weird data</li><li>Many/Most/All non-Apple party products will likely return zeros for all of the battery related fields here, as will Apple HID devices. It seems that these private APIs mostly exist to support Apple/Beats headphones.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/libbattery.m line 171](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/libbattery.m#L171){target="_blank"} |

---


### [timeRemaining](#timeremaining)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.timeRemaining() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the battery life remaining, in minutes                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the minutes of battery life remaining. The value may be:</li><li> Greater than zero to indicate the number of minutes remaining</li><li> -1 if the remaining battery life is still being calculated</li><li> -2 if there is unlimited time remaining (i.e. the system is on AC power)</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/libbattery.m line 33](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/libbattery.m#L33){target="_blank"} |

---


### [timeToFullCharge](#timetofullcharge)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.timeToFullCharge() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the time remaining for the battery to be fully charged, in minutes                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the time (in minutes) remaining for the battery to be fully charged, or -1 if the remaining time is still being calculated</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 230](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L230){target="_blank"} |

---


### [voltage](#voltage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.voltage() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the current voltage of the battery in mV                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the current voltage of the battery</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 145](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L145){target="_blank"} |

---


### [warningLevel](#warninglevel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.warningLevel() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a string specifying the current battery warning state.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string specifying the current warning level state. The string will be one of "none", "low", or "critical".</li></ul>          |
| **Notes**                                   | <ul><li>The meaning of the return strings is as follows:</li><li>  "none" - indicates that the system is not in a low battery situation, or is currently attached to an AC power source.</li><li>  "low"  - the system is in a low battery situation and can provide no more than 20 minutes of runtime. Note that this is a guess only; 20 minutes cannot be guaranteed and will be greatly influenced by what the computer is doing at the time, how many applications are running, screen brightness, etc.</li><li>  "critical" - the system is in a very low battery situation and can provide no more than 10 minutes of runtime. Note that this is a guess only; 10 minutes cannot be guaranteed and will be greatly influenced by what the computer is doing at the time, how many applications are running, screen brightness, etc.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/libbattery.m line 80](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/libbattery.m#L80){target="_blank"} |

---


### [watts](#watts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.watts() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the power entering or leaving the battery, in W                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the rate of energy conversion in the battery. The value may be:</li><li> Less than zero if the battery is being discharged (i.e. the computer is running on battery power)</li><li> Zero if the battery is being neither charged nor discharged</li><li> Greater than zero if the battery is being charged</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/battery.lua line 176](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/battery.lua#L176){target="_blank"} |

---


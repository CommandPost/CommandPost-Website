# hs.location

Determine the machine's location and useful information about that location

This module provides functions for getting current location information and tracking location changes. It expands on the earlier version of the module by adding the ability to create independent locationObjects which can enable/disable location tracking independent of other uses of Location Services by Hammerspoon, adds region monitoring for exit and entry, and adds the retrieval of geocoding information through the `hs.location.geocoder` submodule.

This module is backwards compatible with its predecessor with the following changes:
 * [hs.location.get](#get) - no longer requires that you invoke [hs.location.start](#start) before using this function. The information returned will be the last cached value, which is updated internally whenever additional WiFi networks are detected or lost (not necessarily joined). When update tracking is enabled with the [hs.location.start](#start) function, calculations based upon the RSSI of all currently seen networks are preformed more often to provide a more precise fix, but it's still based on the WiFi networks near you. In many cases, the value retrieved when the WiFi state is changed should be sufficiently accurate.
 * [hs.location.servicesEnabled](#servicesEnabled) - replaces `hs.location.services_enabled`. While the earlier function is included for backwards compatibility, it will display a deprecation warning to the console the first time it is invoked and may go away completely in the future.

The following labels are used to describe tables which are used by functions and methods as parameters or return values in this module and in `hs.location.geocoder`. These tables are described as follows:

 * `locationTable` - a table specifying location coordinates containing one or more of the following key-value pairs:
   * `latitude`           - a number specifying the latitude in degrees. Positive values indicate latitudes north of the equator. Negative values indicate latitudes south of the equator. When not specified in a table being used as an argument, this defaults to 0.0.
   * `longitude`          - a number specifying the longitude in degrees. Measurements are relative to the zero meridian, with positive values extending east of the meridian and negative values extending west of the meridian. When not specified in a table being used as an argument, this defaults to 0.0.
   * `altitude`           - a number indicating altitude above (positive) or below (negative) sea-level. When not specified in a table being used as an argument, this defaults to 0.0.
   * `horizontalAccuracy` - a number specifying the radius of uncertainty for the location, measured in meters. If negative, the `latitude` and `longitude` keys are invalid and should not be trusted. When not specified in a table being used as an argument, this defaults to 0.0.
   * `verticalAccuracy`   - a number specifying the accuracy of the altitude value in meters. If negative, the `altitude` key is invalid and should not be trusted. When not specified in a table being used as an argument, this defaults to -1.0.
   * `course`             - a number specifying the direction in which the device is traveling. If this value is negative, then the value is invalid and should not be trusted. On current Macintosh models, this will almost always be a negative number. When not specified in a table being used as an argument, this defaults to -1.0.
   * `speed`              - a number specifying the instantaneous speed of the device in meters per second. If this value is negative, then the value is invalid and should not be trusted. On current Macintosh models, this will almost always be a negative number. When not specified in a table being used as an argument, this defaults to -1.0.
   * `timestamp`          - a number specifying the time at which this location was determined. This number is the number of seconds since January 1, 1970 at midnight, GMT, and is a floating point number, so you should use `math.floor` on this number before using it as an argument to Lua's `os.date` function. When not specified in a table being used as an argument, this defaults to the current time.

 * `regionTable` - a table specifying a circular region containing one or more of the following key-value pairs:
   * `identifier`    - a string for use in identifying the region. When not specified in a table being used as an argument, a new value is generated with `hs.host.uuid`.
   * `latitude`      - a number specifying the latitude in degrees. Positive values indicate latitudes north of the equator. Negative values indicate latitudes south of the equator. When not specified in a table being used as an argument, this defaults to 0.0.
   * `longitude`     - a number specifying the latitude in degrees. Positive values indicate latitudes north of the equator. Negative values indicate latitudes south of the equator. When not specified in a table being used as an argument, this defaults to 0.0.
   * `radius`        - a number specifying the radius (measured in meters) that defines the region’s outer boundary. When not specified in a table being used as an argument, this defaults to 0.0.
   * `notifyOnEntry` - a boolean specifying whether or not a callback with the "didEnterRegion" message should be generated when the machine enters the region. When not specified in a table being used as an argument, this defaults to true.
   * `notifyOnExit`  - a boolean specifying whether or not a callback with the "didExitRegion" message should be generated when the machine exits the region. When not specified in a table being used as an argument, this defaults to true.

## Submodules
 * [hs.location.geocoder](hs.location.geocoder.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [authorizationStatus](#authorizationstatus)
 * [distance](#distance)
 * [dstOffset](#dstoffset)
 * [get](#get)
 * [register](#register)
 * [servicesEnabled](#servicesenabled)
 * [start](#start)
 * [stop](#stop)
 * [sunrise](#sunrise)
 * [sunset](#sunset)
 * [unregister](#unregister)
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [addMonitoredRegion](#addmonitoredregion)
 * [callback](#callback)
 * [currentRegion](#currentregion)
 * [distanceFrom](#distancefrom)
 * [location](#location)
 * [monitoredRegions](#monitoredregions)
 * [removeMonitoredRegion](#removemonitoredregion)
 * [startTracking](#starttracking)
 * [stopTracking](#stoptracking)

## API Documentation

### Functions


### [authorizationStatus](#authorizationstatus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.authorizationStatus() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a string describing the authorization status of Hammerspoon's use of Location Services.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string matching one of the following:</li><li>  "undefined"  - The user has not yet made a choice regarding whether Hammerspoon can use location services.</li><li>  "restricted" - Hammerspoon is not authorized to use location services. The user cannot change this status, possibly due to active restrictions such as parental controls being in place.</li><li>  "denied"     - The user explicitly denied the use of location services for Hammerspoon or location services are currently disabled in System Preferences.</li><li>  "authorized" - Hammerspoon is authorized to use location services.</li></ul>          |
| **Notes**                                   | <ul><li>The first time you use a function which requires Location Services, you will be prompted to grant Hammerspoon access. If you wish to change this permission after the initial prompt, you may do so from the Location Services section of the Security & Privacy section in the System Preferences application.</li></ul>                |

---

### [distance](#distance)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.distance(from, to) -> meters`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Measures the distance between two points of latitude and longitude                                                                     |
| **Parameters**                              | <ul><li>`from` - A locationTable as described in the module header</li><li>`to`   - A locationTable as described in the module header</li></ul> |
| **Returns**                                 | <ul><li>A number containing the distance between `from` and `to` in meters. The measurement is made by tracing a line that follows an idealised curvature of the earth</li></ul>          |
| **Notes**                                   | <ul><li>This function does not require Location Services to be enabled for Hammerspoon.</li></ul>                |

---

### [dstOffset](#dstoffset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.dstOffset() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a number giving the current daylight savings time offset                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The number of minutes of daylight savings offset, zero if there is no offset</li></ul>          |
| **Notes**                                   | <ul><li>This value is derived from the currently configured system timezone, it does not use Location Services</li></ul>                |

---

### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.get() -> locationTable or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table representing the current location                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>If successful, a locationTable as described in the module header, otherwise nil.</li></ul>          |
| **Notes**                                   | <ul><li>This function activates Location Services for Hammerspoon, so the first time you call this, you may be prompted to authorise Hammerspoon to use Location Services.</li><li>If access to Location Services is enabled for Hammerspoon, this function will return the most recent cached data for the computer's location.</li><li>  Internally, the Location Services cache is updated whenever additional WiFi networks are detected or lost (not necessarily joined). When update tracking is enabled with the [hs.location.start](#start) function, calculations based upon the RSSI of all currently seen networks are preformed more often to provide a more precise fix, but it's still based on the WiFi networks near you.</li></ul>                |

---

### [register](#register)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.register(tag, fn[, distance])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a callback function to be called when the system location is updated                                                                     |
| **Parameters**                              | <ul><li>`tag`      - A string containing a unique tag, used to identify the callback later</li><li>`fn`       - A function to be called when the system location is updated. The function should expect a single argument which will be a locationTable as described in the module header.</li><li>`distance` - An optional number containing the minimum distance in meters that the system should have moved, before calling the callback. Defaults to 0</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [servicesEnabled](#servicesenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.servicesEnabled() -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the state of OS X Location Services                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if Location Services are enabled, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.start() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Begins location tracking using OS X's Location Services so that registered callback functions can be invoked as the computer location changes.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the operation succeeded, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>This function activates Location Services for Hammerspoon, so the first time you call this, you may be prompted to authorise Hammerspoon to use Location Services.</li></ul>                |

---

### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.stop()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops location tracking.  Registered callback functions will cease to receive notification of location changes.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [sunrise](#sunrise)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.sunrise(latitude, longitude, offset[, date]) -> number or string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the time of official sunrise for the supplied location                                                                     |
| **Parameters**                              | <ul><li>`latitude`  - A number containing a latitude</li><li>`longitude` - A number containing a longitude</li><li>`offset`    - A number containing the offset from UTC (in hours) for the given latitude/longitude.</li><li>`date`      - An optional table containing date information (equivalent to the output of ```os.date("*t")```). Defaults to the current date</li></ul> |
| **Returns**                                 | <ul><li>A number containing the time of sunrise (represented as seconds since the epoch) for the given date. If no date is given, the current date is used. If the sun doesn't rise on the given day, the string "N/R" is returned.</li></ul>          |
| **Notes**                                   | <ul><li>You can turn the return value into a more useful structure, with ```os.date("*t", returnvalue)```</li><li>For compatibility with the locationTable object returned by [hs.location.get](#get), this function can also be invoked as `hs.location.sunrise(locationTable, offset[, date])`.</li></ul>                |

---

### [sunset](#sunset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.sunset(latitude, longitude, offset[, date]) -> number or string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the time of official sunset for the supplied location                                                                     |
| **Parameters**                              | <ul><li>`latitude`  - A number containing a latitude</li><li>`longitude` - A number containing a longitude</li><li>`offset`    - A number containing the offset from UTC (in hours) for the given latitude/longitude.</li><li>`date`      - An optional table containing date information (equivalent to the output of ```os.date("*t")```). Defaults to the current date</li></ul> |
| **Returns**                                 | <ul><li>A number containing the time of sunset (represented as seconds since the epoch) for the given date. If no date is given, the current date is used. If the sun doesn't set on the given day, the string "N/S" is returned.</li></ul>          |
| **Notes**                                   | <ul><li>You can turn the return value into a more useful structure, with ```os.date("*t", returnvalue)```</li><li>For compatibility with the locationTable object returned by [hs.location.get](#get), this function can also be invoked as `hs.location.sunset(locationTable, offset[, date])`.</li></ul>                |

---

### [unregister](#unregister)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.unregister(tag)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unregisters a callback                                                                     |
| **Parameters**                              | <ul><li>`tag` - A string containing the unique tag a callback was registered with</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.new() -> locationObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Create a new location object which can receive callbacks independent of other Hammerspoon use of Location Services.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a locationObject</li></ul>          |
| **Notes**                                   | <ul><li>The locationObject created will receive callbacks independent of all other locationObjects and the legacy callback functions created with [hs.location.register](#register).  It can also receive callbacks for region changes which are not available through the legacy callback mechanism.</li></ul>                |

---
### Methods


### [addMonitoredRegion](#addmonitoredregion)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location:addMonitoredRegion(regionTable) -> locationObject | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a region to be monitored by Location Services                                                                     |
| **Parameters**                              | <ul><li>`regionTable` - a region table as described in the module header</li></ul> |
| **Returns**                                 | <ul><li>if the region table was able to be added to Location Services for monitoring, returns the locationObject; otherwise returns nil</li></ul>          |
| **Notes**                                   | <ul><li>This method activates Location Services for Hammerspoon, so the first time you call this, you may be prompted to authorise Hammerspoon to use Location Services.</li><li>If the `identifier` key is not provided, a new UUID string is generated and used as the identifier.</li><li>If the `identifier` key matches an already monitored region, this region will replace the existing one.</li></ul>                |

---

### [callback](#callback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location:callback(fn) -> locationObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets or removes the callback function for this locationObject                                                                     |
| **Parameters**                              | <ul><li>a function, or nil to remove the current function, which will be invoked as a callback for messages generated by this locationObject.  The callback function should expect 3 or 4 arguments as follows:
  the locationObject itself
  a string specifying the message generated by the locationObject:"didChangeAuthorizationStatus" - the user has changed the authorization status for Hammerspoon's use of Location Services.  The third argument will be a string as described in the [hs.location.authorizationStatus](#authorizationStatus) function."didUpdateLocations"           - the current location has changed or been refined.  This message will only occur if location tracking has been enabled with [hs.location:startTracking](#startTracking). The third argument will be a table containing one or more locationTables as array elements.  The most recent location update is contained in the last element of the array."didFailWithError"             - there was an error retrieving location information. The third argument will be a string describing the error that occurred."didStartMonitoringForRegion"  - a new region has successfully been added to the regions being monitored.  The third argument will be the regionTable for the region which was just added."monitoringDidFailForRegion"   - an error occurred while trying to add a new region to the list of monitored regions. The third argument will be the regionTable for the region that could not be added, and the fourth argument will be a string containing an error message describing why monitoring for the region failed."didEnterRegion"               - the current location has entered a region with the `notifyOnEntry` field set to true specified with the [hs.location:addMonitoredRegion](#addMonitoredRegion) method. The third argument will be the regionTable for the region entered."didExitRegion"                - the current location has exited a region with the `notifyOnExit` field set to true specified with the [hs.location:addMonitoredRegion](#addMonitoredRegion) method. The third argument will be the regionTable for the region exited.</li></ul> |
| **Returns**                                 | <ul><li>the locationObject</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [currentRegion](#currentregion)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location:currentRegion() -> identifier | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the string identifier for the current region                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the string identifier for the region that the current location is within, or nil if the current location is not within a currently monitored region or location services cannot be enabled for Hammerspoon.</li></ul>          |
| **Notes**                                   | <ul><li>This method activates Location Services for Hammerspoon, so the first time you call this, you may be prompted to authorise Hammerspoon to use Location Services.</li></ul>                |

---

### [distanceFrom](#distancefrom)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location:distanceFrom(locationTable) -> distance | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enable callbacks for location changes/refinements for this locationObject                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the distance the specified location is from the current location in meters or nil if Location Services cannot be enabled for Hammerspoon. The measurement is made by tracing a line that follows an idealised curvature of the earth</li></ul>          |
| **Notes**                                   | <ul><li>This function activates Location Services for Hammerspoon, so the first time you call this, you may be prompted to authorise Hammerspoon to use Location Services.</li></ul>                |

---

### [location](#location)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location:location() -> locationTable | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current location                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>If successful, a locationTable as described in the module header, otherwise nil.</li></ul>          |
| **Notes**                                   | <ul><li>This function activates Location Services for Hammerspoon, so the first time you call this, you may be prompted to authorise Hammerspoon to use Location Services.</li><li>If access to Location Services is enabled for Hammerspoon, this function will return the most recent cached data for the computer's location.</li><li>  Internally, the Location Services cache is updated whenever additional WiFi networks are detected or lost (not necessarily joined). When update tracking is enabled with the [hs.location.start](#start) function, calculations based upon the RSSI of all currently seen networks are preformed more often to provide a more precise fix, but it's still based on the WiFi networks near you.</li></ul>                |

---

### [monitoredRegions](#monitoredregions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location:monitoredRegions() -> table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table containing the regionTables for the regions currently being monitored for this locationObject                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>if Location Services can be enabled for Hammerspoon, returns a table containing regionTables for each region which is being monitored for this locationObject; otherwise nil</li></ul>          |
| **Notes**                                   | <ul><li>This method activates Location Services for Hammerspoon, so the first time you call this, you may be prompted to authorise Hammerspoon to use Location Services.</li></ul>                |

---

### [removeMonitoredRegion](#removemonitoredregion)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location:removeMonitoredRegion(identifier) -> locationObject | false | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Removes a monitored region from Location Services                                                                     |
| **Parameters**                              | <ul><li>`identifier` - a string which should contain the identifier of the region to remove from monitoring</li></ul> |
| **Returns**                                 | <ul><li>if the region identifier matches a currently monitored region, returns the locationObject; if it does not match a currently monitored region, returns false; returns nil if an error occurs or if Location Services is not currently active (no function or method which activates Location Services has been invoked yet) or enabled for Hammerspoon.</li></ul>          |
| **Notes**                                   | <ul><li>This method activates Location Services for Hammerspoon, so the first time you call this, you may be prompted to authorise Hammerspoon to use Location Services.</li><li>If the `identifier` key is not provided, a new UUID string is generated and used as the identifier.</li><li>If the `identifier` key matches an already monitored region, this region will replace the existing one.</li></ul>                |

---

### [startTracking](#starttracking)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location:startTracking() -> locationObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enable callbacks for location changes/refinements for this locationObject                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the locationObject</li></ul>          |
| **Notes**                                   | <ul><li>This function activates Location Services for Hammerspoon, so the first time you call this, you may be prompted to authorise Hammerspoon to use Location Services.</li></ul>                |

---

### [stopTracking](#stoptracking)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location:stopTracking() -> locationObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Disable callbacks for location changes/refinements for this locationObject                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the locationObject</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

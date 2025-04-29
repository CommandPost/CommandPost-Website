# hs.location.geocoder

Converts between GPS coordinates and more user friendly representations like an address or points of interest.

This module converts between GPS coordinates and the user-friendly representation of that coordinate. A user-friendly representation of the coordinate typically consists of the street, city, state, and country information corresponding to the given location, but it may also contain a relevant point of interest, landmarks, or other identifying information.

Your computer must have network access for the geocoder object to return detailed placemark information and is rate limited.  Geocoding requests are rate-limited, so making too many requests in a short period of time may cause some of the requests to fail with a network error.

Use of this module does not require Location Services to be enabled for Hammerspoon.

A `placemarkTable` is returned to the callback functions used by the constructor methods of this module.  These tables may contain one or more of the following keys:
 * `addressDictionary`     - a table containing key-value pairs for the components of the address for the placemark
 * `administrativeArea`    - a string containing the state or province associated with the placemark
 * `subAdministrativeArea` - a string containing additional administrative area information for the placemark
 * `areasOfInterest`       - a table as an array of strings describing areas of interest associated with the placemark
 * `country`               - a string containing the name of the country associated with the placemark
 * `countryCode`           - a string containing the standard abbreviation for the country associated with the placemark
 * `inlandWater`           - a string containing the name of the inland water body associated with the placemark
 * `locality`              - a string containing the city associated with the placemark
 * `subLocality`           - a string containing additional city-level information for the placemark
 * `location`              - the locationTable, as described in the `hs.location` module header, for the placemark
 * `name`                  - a string containing the name of the placemark
 * `ocean`                 - a string containing the name of the ocean associated with the placemark
 * `postalCode`            - a string containing the postal code associated with the placemark
 * `region`                - a regionTable, as described in the `hs.location` module header, specifying the he geographic region associated with the placemark
 * `thoroughfare`          - a string containing the street address associated with the placemark
 * `subThoroughfare`       - a string containing additional street-level information for the placemark
 * `timeZone`              - a string containing the time zone associated with the placemark

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [lookupAddress](#lookupaddress)
 * [lookupAddressNear](#lookupaddressnear)
 * [lookupLocation](#lookuplocation)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [cancel](#cancel)
 * [geocoding](#geocoding)


---

## API Documentation

#### Constructors


### [lookupAddress](#lookupaddress)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.geocoder.lookupAddress(address, fn) -> geocoderObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Look up geocoding information for the specified address.                                                                     |
| **Parameters**                              | <ul><li>`address` - a string containing address information as commonly expressed in your locale.</li><li>`fn`      - A callback function which should expect 2 arguments and return none:
  `state`  - a boolean indicating whether or not geocoding data was provided
  `result` - if `state` is true indicating that geocoding was successful, this argument will be a table containing one or more placemarkTables (as described in the module header) containing the geocoding data available for the location.  If `state` is false, this argument will be a string containing an error message describing the problem encountered.</li></ul> |
| **Returns**                                 | <ul><li>a geocodingObject</li></ul>          |
| **Notes**                                   | <ul><li>This constructor requires internet access and the callback will be invoked with an error message if the internet is not currently accessible.</li><li>This constructor does not require Location Services to be enabled for Hammerspoon.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/location/liblocation.m line 593](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/location/liblocation.m#L593) |

---


### [lookupAddressNear](#lookupaddressnear)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.geocoder.lookupAddressNear(address, [regionTable], fn) -> geocoderObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Look up geocoding information for the specified address.                                                                     |
| **Parameters**                              | <ul><li>`address`     - a string containing address information as commonly expressed in your locale.</li><li>`regionTable` - an optional regionTable as described in the `hs.location` header used to prioritize the order of the results found.  If this parameter is not provided and Location Services is enabled for Hammerspoon, a region containing current location is used.</li><li>`fn`          - A callback function which should expect 2 arguments and return none:
  `state`  - a boolean indicating whether or not geocoding data was provided
  `result` - if `state` is true indicating that geocoding was successful, this argument will be a table containing one or more placemarkTables (as described in the module header) containing the geocoding data available for the location.  If `state` is false, this argument will be a string containing an error message describing the problem encountered.</li></ul> |
| **Returns**                                 | <ul><li>a geocodingObject</li></ul>          |
| **Notes**                                   | <ul><li>This constructor requires internet access and the callback will be invoked with an error message if the internet is not currently accessible.</li><li>This constructor does not require Location Services to be enabled for Hammerspoon.</li><li>While a partial address can be given, the more information you provide, the more likely the results will be useful.  The `regionTable` only determines sort order if multiple entries are returned, it does not constrain the search.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/location/liblocation.m line 635](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/location/liblocation.m#L635) |

---


### [lookupLocation](#lookuplocation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.geocoder.lookupLocation(locationTable, fn) -> geocoderObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Look up geocoding information for the specified location.                                                                     |
| **Parameters**                              | <ul><li>`locationTable` - a locationTable as described in the `hs.location` header specifying a location to obtain geocoding information about.</li><li>`fn`            - A callback function which should expect 2 arguments and return none:
  `state`  - a boolean indicating whether or not geocoding data was provided
  `result` - if `state` is true indicating that geocoding was successful, this argument will be a table containing one or more placemarkTables (as described in the module header) containing the geocoding data available for the location.  If `state` is false, this argument will be a string containing an error message describing the problem encountered.</li></ul> |
| **Returns**                                 | <ul><li>a geocodingObject</li></ul>          |
| **Notes**                                   | <ul><li>This constructor requires internet access and the callback will be invoked with an error message if the internet is not currently accessible.</li><li>This constructor does not require Location Services to be enabled for Hammerspoon.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/location/liblocation.m line 551](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/location/liblocation.m#L551) |

---

#### Methods


### [cancel](#cancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.geocoder:cancel() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Cancels the pending or in progress geocoding request.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>nil to facilitate garbage collection by assigning this result to the geocodeObject</li></ul>          |
| **Notes**                                   | <ul><li>This method has no effect if the geocoding process has already completed.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/location/liblocation.m line 706](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/location/liblocation.m#L706) |

---


### [geocoding](#geocoding)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.location.geocoder:geocoding() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a boolean indicating whether or not the geocoding process is still active.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a boolean indicating if the geocoding process is still active.  If false, then the callback function either has already been called or will be as soon as the main thread of Hammerspoon becomes idle again.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/location/liblocation.m line 689](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/location/liblocation.m#L689) |

---


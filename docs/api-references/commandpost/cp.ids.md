# cp.ids

Allows managing values/IDs which can vary between versions.

## API Overview
* Functions - API calls offered directly by the extension
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [currentVersion](#currentVersion)
 * [load](#load)
 * [of](#of)
 * [ofCurrent](#ofCurrent)
 * [previousVersion](#previousVersion)
 * [versions](#versions)

## API Documentation

### Functions


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ids.new(path[, currentVersionFn]) -> cp.ids`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `ids` instance with the specified path to the version files and a function to find the current version, if appropriate.                                                                     |
| **Parameters**                              | <ul><li>`path`				- The path to the version files.</li><li>`currentVersionFn`	- An optional function that will return the current version as a string or `semver`.</li></ul> |
| **Returns**                                 | <ul><li>A new `cp.ids` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [currentVersion](#currentVersion)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ids:currentVersion() -> semver`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current version number for the `IDs` library. May be `nil`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `semver` with the version number or `nil` if none is available.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [load](#load)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ids:load([version]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads and caches IDs for the given version. It will search through previous versions, with each subsequent version file overriding the previous version's value, if present.                                                                     |
| **Parameters**                              | <ul><li>version - The version number you want to load as a string (i.e. "10.4.0"). If not provided, the current version is loaded.</li></ul> |
| **Returns**                                 | <ul><li>A table containing all the IDs</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [of](#of)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ids:of(version, subset) -> function`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a function which can be called to retrieve a specific value for the specified version.                                                                     |
| **Parameters**                              | <ul><li>version - The version number you want to load as a string (i.e. "10.4.0")</li><li>subset - A string containing the subset of data you want to load</li></ul> |
| **Returns**                                 | <ul><li>A function that will return the value of the specified `subset` ID for the specified version.</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li></li><li>```lua</li><li>local id = ids:of("10.4.0", "CommandEditor")</li><li>print "bar = "..id("bar")</li><li>```</li></ul>                |

---

### [ofCurrent](#ofCurrent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ids:ofCurrent(subset) -> function`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a function which can be called with an ID to retrieve a specific value for the current version.                                                                     |
| **Parameters**                              | <ul><li>subset - A string containing the subset of data you want to load</li></ul> |
| **Returns**                                 | <ul><li>A function that will return the value of the specified `subset` ID for the current version.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [previousVersion](#previousVersion)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ids:previousVersion([version]) -> semver`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the previous version number that has stored IDs.                                                                     |
| **Parameters**                              | <ul><li>version		- The version number you want to load as a string (i.e. "10.4.0") or a `semver`, or `nil` to use the current version.</li></ul> |
| **Returns**                                 | <ul><li>A `semver` instance for the previous version.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [versions](#versions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ids:versions() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table of versions.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `semver` objects.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

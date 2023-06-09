# hs.settings

Serialize simple Lua variables across Hammerspoon launches
Settings must have a string key and must be made up of serializable Lua objects (string, number, boolean, nil, tables of such, etc.)

This module is based partially on code from the previous incarnation of Mjolnir by [Steven Degutis](https://github.com/sdegutis/).


---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [bundleID](#bundleid)
 * [dateFormat](#dateformat)

**Functions** - _API calls offered directly by the extension_
 * [clear](#clear)
 * [get](#get)
 * [getKeys](#getkeys)
 * [set](#set)
 * [setData](#setdata)
 * [setDate](#setdate)
 * [watchKey](#watchkey)


---

## API Documentation

### Constants


### [bundleID](#bundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.settings.bundleID`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A string representing the ID of the bundle Hammerspoon's settings are stored in . You can use this with the command line tool `defaults` or other tools which allow access to the `User Defaults` of applications, to access these outside of Hammerspoon                                                                     |

---

### [dateFormat](#dateformat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.settings.dateFormat`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A string representing the expected format of date and time when presenting the date and time as a string to `hs.setDate()`.  e.g. `os.date(hs.settings.dateFormat)`                                                                     |

---
### Functions


### [clear](#clear)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.settings.clear(key) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deletes a setting                                                                     |
| **Parameters**                              | <ul><li>key - A string containing the name of a setting</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the setting was deleted, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.settings.get(key) -> string or boolean or number or nil or table or binary data`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads a setting                                                                     |
| **Parameters**                              | <ul><li>key - A string containing the name of the setting</li></ul> |
| **Returns**                                 | <ul><li>The value of the setting</li></ul>          |
| **Notes**                                   | <ul><li>This function can load all of the datatypes supported by `hs.settings.set()`, `hs.settings.setData()` and `hs.settings.setDate()`</li></ul>                |

---

### [getKeys](#getkeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.settings.getKeys() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets all of the previously stored setting names                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing all of the settings keys in Hammerspoon's settings</li></ul>          |
| **Notes**                                   | <ul><li>Use `ipairs(hs.settings.getKeys())` to iterate over all available settings</li><li>Use `hs.settings.getKeys()["someKey"]` to test for the existence of a particular key</li></ul>                |

---

### [set](#set)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.settings.set(key[, val])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves a setting with common datatypes                                                                     |
| **Parameters**                              | <ul><li>key - A string containing the name of the setting</li><li>val - An optional value for the setting. Valid datatypes are:
  string
  number
  boolean
  nil
  table (which may contain any of the same valid datatypes)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>If no val parameter is provided, it is assumed to be nil</li><li>This function cannot set dates or raw data types, see `hs.settings.setDate()` and `hs.settings.setData()`</li><li>Assigning a nil value is equivalent to clearing the value with `hs.settings.clear`</li></ul>                |

---

### [setData](#setdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.settings.setData(key, val)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves a setting with raw binary data                                                                     |
| **Parameters**                              | <ul><li>key - A string containing the name of the setting</li><li>val - Some raw binary data</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setDate](#setdate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.settings.setDate(key, val)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves a setting with a date                                                                     |
| **Parameters**                              | <ul><li>key - A string containing the name of the setting</li><li>val - A number representing seconds since `1970-01-01 00:00:00 +0000` (e.g. `os.time()`), or a string containing a date in RFC3339 format (`YYYY-MM-DD[T]HH:MM:SS[Z]`)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>See `hs.settings.dateFormat` for a convenient representation of the RFC3339 format, to use with other time/date related functions</li></ul>                |

---

### [watchKey](#watchkey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.settings.watchKey(identifier, key, [fn]) -> identifier | current value`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get or set a watcher to invoke a callback when the specified settings key changes                                                                     |
| **Parameters**                              | <ul><li>identifier - a required string used as an identifier for this callback</li><li>key        - the settings key to watch for changes to</li><li>fn         - the callback function to be invoked when the specified key changes.  If this is an explicit nil, removes the existing callback.</li></ul> |
| **Returns**                                 | <ul><li>if a callback is set or removed, returns the identifier; otherwise returns the current callback function or nil if no callback function is currently defined.</li></ul>          |
| **Notes**                                   | <ul><li>the identifier is required so that multiple callbacks for the same key can be registered by separate modules; it's value doesn't affect what is being watched but does need to be unique between multiple watchers of the same key.</li><li>Does not work with keys that include a period (.) in the key name because KVO uses dot notation to specify a sequence of properties.  If you know of a way to escape periods so that they are watchable as NSUSerDefault key names, please file an issue and share!</li></ul>                |

---

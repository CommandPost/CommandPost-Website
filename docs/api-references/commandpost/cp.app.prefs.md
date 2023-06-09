# cp.app.prefs

Provides access to application preferences, typically stored via `NSUserDefaults` or `CFProperties`.
To access the preferences, simply pass in the Bundle ID (eg. "com.apple.Preview") and it will return
a table whose keys can be accessed or updated, or iterated via `ipairs`.

For example:

```lua
local previewPrefs = require "cp.app.prefs" "com.apple.Preview"
previewPrefs.MyCustomPreference = "Hello world"
print(previewPrefs.MyCustomPreference) --> "Hello world"

for k,v in pairs(previewPrefs) do
    print(k .. " = " .. tostring(v))
end
```

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [bundleID](#bundleid)
 * [get](#get)
 * [is](#is)
 * [prop](#prop)
 * [set](#set)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [prefs](#prefs)


---

## API Documentation

#### Functions


### [bundleID](#bundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.prefs.bundleID(prefs) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Retrieves the `bundleID` associated with the `cp.app.prefs` instance.                                                                     |
| **Parameters**                              | <ul><li>prefs     - the `prefs` object to query</li></ul> |
| **Returns**                                 | <ul><li>The Bundle ID string, or `nil` if it's not a `cp.app.prefs`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/app/prefs.lua line 122](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/prefs.lua#L122) |

---


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.prefs.get(prefs, key[, defaultValue]) -> value`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Retrieves the specifed `key` from the provided `prefs`. If there is no current value, the `defaultValue` is returned.                                                                     |
| **Parameters**                              | <ul><li>prefs         - The `prefs` instance.</li><li>key           - The key to retrieve.</li><li>defaultValue  - The value to return if none is currently set.</li></ul> |
| **Returns**                                 | <ul><li>The current value, or `defaultValue` if not set.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/app/prefs.lua line 162](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/prefs.lua#L162) |

---


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.prefs.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a `cp.app.prefs` instance.                                                                     |
| **Parameters**                              | <ul><li>thing     - The value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if if's a `prefs`, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/app/prefs.lua line 109](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/prefs.lua#L109) |

---


### [prop](#prop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.prefs.prop(prefs, key[, defaultValue[, deepTable]]) -> cp.prop`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Retrieves the `cp.prop` for the specified key. It can be `watched` for changes. Subsequent calls will return the same `cp.prop` instance.                                                                     |
| **Parameters**                              | <ul><li>prefs         - The `prefs` instance.</li><li>key           - The key to get/set.</li><li>defaultValue  - The value if no default values is currently set (defaults to `nil`).</li><li>deepTable     - Should the prop use deep table (defaults to `true`).</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` for the key.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/app/prefs.lua line 222](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/prefs.lua#L222) |

---


### [set](#set)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.prefs.set(prefs, key, value[, defaultValue]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the key/value for the specified `prefs` instance.                                                                     |
| **Parameters**                              | <ul><li>prefs     - The `prefs` instance.</li><li>key       - The key to set.</li><li>value     - the new value.</li><li>defaultValue - The default value.</li></ul> |
| **Returns**                                 | <ul><li>Nothing.</li></ul>          |
| **Notes**                                   | <ul><li>If the `value` equals the `defaultValue`, the preference is removed rather than being `set`.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/app/prefs.lua line 186](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/prefs.lua#L186) |

---

#### Constructors


### [prefs](#prefs)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.prefs(bundleID) -> cp.app.prefs`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `cp.app.prefs` instance, pointing at the specified `bundleID`.                                                                     |
| **Parameters**                              | <ul><li>bundleID      The Bundle ID to access preferences for.</li></ul> |
| **Returns**                                 | <ul><li>A new `cp.app.prefs` with read/write access to the application's preferences.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/app/prefs.lua line 94](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/prefs.lua#L94) |

---


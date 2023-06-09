# cp.strings.source.plist

Loads strings from a `plist` with allowing for a given language variation. Eg:

```lua
local plistSource = require("cp.strings.source.plist").new("/Path/To/Resources/${language}.lproj/MYLocalization.strings")
local value = plistSource:find("en", "AKey")
```

This will load the file for the specified language (replacing `${language}` with `"en"` in the path) and return the value.
Notes: This will load the file on each request. To have values cached, use the `cp.strings` module and specify a `plist` as a source.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [defaultCacheSeconds](#defaultcacheseconds)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [context](#context)
 * [find](#find)
 * [findKeys](#findkeys)
 * [loadFile](#loadfile)
 * [pathToAbsolute](#pathtoabsolute)
 * [reset](#reset)


---

## API Documentation

#### Constants


### [defaultCacheSeconds](#defaultcacheseconds)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings.source.plist.defaultCacheSeconds`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default number of seconds to cache results.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/strings/source/plist.lua line 34](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/strings/source/plist.lua#L34) |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings.source.plist.new(pathPattern[, cacheSeconds]) -> source`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `cp.strings` source that loads strings from a plist file.                                                                     |
| **Parameters**                              | <ul><li>`pathPattern`    - The path to load from. May contain a special `${language}` marker which will be replace with the provided langauge when searching.</li><li>`cacheSeconds`   - (optional) How long in seconds to keep the loaded values cached in memory. Defaults to [defaultCacheSeconds](#defaultCacheSeconds)</li></ul> |
| **Returns**                                 | <ul><li>The new plist `source` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/strings/source/plist.lua line 191](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/strings/source/plist.lua#L191) |

---

#### Methods


### [context](#context)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings.source.plist:context([context]) -> table | self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets a context to be set for the source. This typically includes a `language`, which provides the default language code, but may have other source-specific properties. Calling this method may may clear caches, etc.                                                                     |
| **Parameters**                              | <ul><li>context   - A table with values which may be used by the source.</li></ul> |
| **Returns**                                 | <ul><li>If a new context is provided, the `cp.string.source` is returned, otherwise the current context table is returned.</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li></li><li>```lua</li><li>mySource:context({language = "fr"}) -- set the default language to French.</li><li>```</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/strings/source/plist.lua line 39](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/strings/source/plist.lua#L39) |

---


### [find](#find)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings.source.plist:find(key[, context]) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the specified `key` value in the plist, if the plist can be found, and contains matching key value.                                                                     |
| **Parameters**                              | <ul><li>`key`        - The key to retrieve from the file.</li><li>`context`    - Optional table with additional/alternate context. It will be added to the current context temporarily.</li></ul> |
| **Returns**                                 | <ul><li>The value of the key, or `nil` if not found.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/strings/source/plist.lua line 125](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/strings/source/plist.lua#L125) |

---


### [findKeys](#findkeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings.source.plist:findKeys(pattern) -> {string}`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the array of keys who's value matches the pattern in this table. It will check that the pattern matches the beginning of the value.                                                                     |
| **Parameters**                              | <ul><li>`pattern     - The string pattern to match.</li></ul> |
| **Returns**                                 | <ul><li>The array of keys, or `{}` if none were fround</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/strings/source/table.lua line 85](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/strings/source/table.lua#L85) |

---


### [loadFile](#loadfile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings.source.plist:loadFile([context]) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads the plist file for the specified context, returning the value as a table.                                                                     |
| **Parameters**                              | <ul><li>`context`    - The context to determine the absolute path with. This will be added to any values provided in the default [context](#context).</li></ul> |
| **Returns**                                 | <ul><li>The table for the specified language, or `nil` if the file doesn't exist.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/strings/source/plist.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/strings/source/plist.lua#L105) |

---


### [pathToAbsolute](#pathtoabsolute)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings.source.plist:pathToAbsolute([context]) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the abolute path to the `plist` represented by this source for the specified langauge, or `nil` if it does not exist.                                                                     |
| **Parameters**                              | <ul><li>`context` - The context to determine the absolute path with. This will be added to any values provided in the default [context](#context).</li></ul> |
| **Returns**                                 | <ul><li>The path to the file, or `nil` if not found.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/strings/source/plist.lua line 65](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/strings/source/plist.lua#L65) |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings.source.plist:reset() -> cp.strings`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears any stored key values.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The current `cp.strings` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/strings/source/plist.lua line 177](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/strings/source/plist.lua#L177) |

---


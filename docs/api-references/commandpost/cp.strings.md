# cp.strings

Provides strings from (potentially) multiple sources, with support for loading from multiple languages.

```lua
local strs = require("cp.strings").new():fromPlist("/Path/To/Resources/${language}.lproj/MYLocalization.strings")
local value = strs:find("en", "AKey")
```

This will load the file for the specified language (replacing `${language}` with `"en"` in the path) and return the value.
Notes: This will load the file on each request. To have values cached, use the `cp.strings` module and specify a `plist` as a source.

---

## Submodules
 * [cp.strings.source](cp.strings.source.md)

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [context](#context)
 * [find](#find)
 * [findAllKeys](#findallkeys)
 * [findInSources](#findinsources)
 * [findKeys](#findkeys)
 * [findKeysInSources](#findkeysinsources)
 * [from](#from)
 * [fromPlist](#fromplist)


---

## API Documentation

### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings.new(context) -> cp.strings`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `strings` instance. You should add sources with the [from](#from) or [fromPlist](#fromPlist) methods.                                                                     |
| **Parameters**                              | <ul><li>context      - The initial context.</li></ul> |
| **Returns**                                 | <ul><li>The new `cp.strings`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [context](#context)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings:context([context]) -> table | self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets a context to be set for the strings. This typically includes a `language`, which provides the default language code, but may have other source-specific properties. Calling this method may may clear caches, etc.                                                                     |
| **Parameters**                              | <ul><li>context   - A table with values which may be used by the source.</li></ul> |
| **Returns**                                 | <ul><li>If a new context is provided, the `cp.string.source` is returned, otherwise the current context table is returned.</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li></li><li>```lua</li><li>string:context({language = "fr"}) -- set the default language to French.</li><li>```</li></ul>                |

---

### [find](#find)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings:find(key[, context[, quiet]) -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Searches for the specified key, caching the result when found.                                                                     |
| **Parameters**                              | <ul><li>`key`        - The key to retrieve from the file.</li><li>`context`    - Optional table with additional/alternate context.</li><li>`quiet`      - Optional boolean, defaults to `false`. If `true`, no warnings are logged for missing keys.</li></ul> |
| **Returns**                                 | <ul><li>The value of the key, or `nil` if not found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [findAllKeys](#findallkeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings:findAllKeys([context]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Searches for all keys in all sources, with the given context.                                                                     |
| **Parameters**                              | <ul><li>context      - The intial context to use.</li></ul> |
| **Returns**                                 | <ul><li>The array of keys, or `{}` if not found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [findInSources](#findinsources)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings:findInSources(key[, context[, quiet]]) -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Searches directly in the sources for the specified key.                                                                     |
| **Parameters**                              | <ul><li>`key`        - The key to retrieve from the file.</li><li>`context`    - Optional table with additional/alternate context.</li><li>`quiet`      - Optional boolean, defaults to `false`. If `true`, no warnings are logged for missing keys.</li></ul> |
| **Returns**                                 | <ul><li>The value of the key, or `nil` if not found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [findKeys](#findkeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings:findKeys(value[, context]) -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Searches for the list of keys with a matching value, in the specified language.                                                                     |
| **Parameters**                              | <ul><li>value      - The value to search for.</li><li>context    - The language code to look for (e.g. `"en"`, or `"fr"`).</li></ul> |
| **Returns**                                 | <ul><li>The array of keys, or `{}` if not found.</li></ul>          |
| **Notes**                                   | <ul><li>Not recommended in production code, as it will potentially be very inefficient.</li></ul>                |

---

### [findKeysInSources](#findkeysinsources)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings:findKeysInSources(value[, context]) -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Searches directly in the sources for the specified key value pattern.                                                                     |
| **Parameters**                              | <ul><li>`value`      - The value to search for.</li><li>`context`    - Optional additional context for the request.</li></ul> |
| **Returns**                                 | <ul><li>The array of keys, or `{}` if not found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [from](#from)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings:from(source) -> cp.strings`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the source to the strings sources.                                                                     |
| **Parameters**                              | <ul><li>`source`		- The source to add.</li></ul> |
| **Returns**                                 | <ul><li>The current `cp.strings` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [fromPlist](#fromplist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings:fromPlist(pathPattern) -> cp.strings`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Convenience method for adding a `plist` source to the strings instance.                                                                     |
| **Parameters**                              | <ul><li>`pathPattern` - The path to load from. May contain a special `${language}` marker which will be replace with the provided langauge when searching.</li></ul> |
| **Returns**                                 | <ul><li>The current `cp.strings` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

# cp.strings.source.table

Loads strings from provided tables, allowing for a given language variation. Eg:

```lua
local src = require("cp.strings.source.table").new():add("en", {foo = "bar"}):add("en", {foo = "baz"})
local valueEn = src:find("en", "foo") -- "bar"
local valueEs = src:find("en", "foo") -- "baz"
```

This will load the file for the specified language (replacing `${language}` with `"en"` in the path) and return the value.
Notes: This will load the file on each request. To have values cached, use the `cp.strings` module and specify a `plist` as a source.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [add](#add)
 * [context](#context)
 * [find](#find)

## API Documentation

### Constructors

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings.source.table.new(context) -> source`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `cp.strings` source that loads strings from a plist file.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new plist `source` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [add](#add)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings.source.table:add(keyValues) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the specified table of key values in the specified language code.                                                                     |
| **Parameters**                              | <ul><li>`keyValues`  - The table of key/value pairs to define.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.string.source`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [context](#context)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings.source.table:context([context]) -> table | self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets a context to be set for the source. This typically includes a `language`, which provides the default language code, but may have other source-specific properties. Calling this method may may clear caches, etc.                                                                     |
| **Parameters**                              | <ul><li>context   - A table with values which may be used by the source.</li></ul> |
| **Returns**                                 | <ul><li>If a new context is provided, the `cp.string.source` is returned, otherwise the current context table is returned.</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li></li><li>```lua</li><li>mySource:context({language = "fr"}) -- set the default language to French.</li><li>```</li></ul>                |

| [find](#find)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.strings.source.table:find(key) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the specified `key` value in the plist file for the specified optional `context`, if the plist can be found, and contains matching key value.                                                                     |
| **Parameters**                              | <ul><li>`key`        - The key to retrieve the value for.</li></ul> |
| **Returns**                                 | <ul><li>The value of the key, or `nil` if not found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


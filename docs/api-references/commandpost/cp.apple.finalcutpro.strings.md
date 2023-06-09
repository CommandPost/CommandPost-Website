# cp.apple.finalcutpro.strings

The `cp.strings` for I18N lookups related to Final Cut Pro.
This has been populated with common lookups for user interface values
that appear in Final Cut Pro.

## API Overview
### **Constants** - _Useful values which cannot be changed_
 * [strings](#strings)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [find](#find)
 * [findKeys](#findkeys)


## API Documentation

### Constants


### [strings](#strings)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.strings <cp.strings>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The `cp.strings` providing access to common FCPX text values.                                                                     |

---
### Methods


### [find](#find)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.strings:find(key[, locale][, quiet]]) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Looks up an application string with the specified `key`. If no `context` value is provided, the [current context](#context) is used.                                                                     |
| **Parameters**                              | <ul><li>`key`	- The key to look up.</li><li>`locale` - Optional locale to retrieve the key for, if available. May be a `string` or `cp.i18n.localeID`.</li><li>`quiet`	- Optional boolean, defaults to `false`. If `true`, no warnings are logged for missing keys.</li></ul> |
| **Returns**                                 | <ul><li>The requested string or `nil` if the application is not running.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [findKeys](#findkeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.strings:findKeys(string[, lang]) -> {string}`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Looks up an application string and returns an array of keys that match. It will take into account current language the app is running in, or use `lang` if provided.                                                                     |
| **Parameters**                              | <ul><li>`string`	- The string to look up.</li><li>`lang`	- The language (defaults to current FCPX language).</li></ul> |
| **Returns**                                 | <ul><li>The array of keys with a matching string.</li></ul>          |
| **Notes**                                   | <ul><li>This method may be very inefficient, since it has to search through every possible key/value pair to find matches. It is not recommended that this is used in production.</li></ul>                |

---

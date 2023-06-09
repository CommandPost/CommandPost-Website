# cp.localized

Helps look up localized names for folders.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [getLocalizedName](#getlocalizedname)


---

## API Documentation

#### Functions


### [getLocalizedName](#getlocalizedname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.localized.getLocalizedName(path[, locale]) -> string, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the localized name for the `path` in the specified `locale`. If all else fails, the original folder name is returned. The 'unlocalized' folder name is returned as the second value, without `.localized` at the end, if it was present.                                                                     |
| **Parameters**                              | <ul><li>`path`           - The full path to the folder</li><li>`locale`         - The locale to retrieve the name for.</li></ul> |
| **Returns**                                 | <ul><li>The localized name, or `name` if not available.</li><li>The original name, minus `.localized`</li></ul>          |
| **Notes**                                   | <ul><li>This function will automatically convert a colon to a dash when localising.</li></ul> |

---


# hs.plist

Read and write Property List files

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [read](#read)
 * [readString](#readstring)
 * [write](#write)
 * [writeString](#writestring)


---

## API Documentation

#### Functions


### [read](#read)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.plist.read(filepath) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads a Property List file                                                                     |
| **Parameters**                              | <ul><li>filepath - The path and filename of a plist file to read</li></ul> |
| **Returns**                                 | <ul><li>The contents of the plist as a Lua table</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/plist/libplist.m line 4](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/plist/libplist.m#L4) |

---


### [readString](#readstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.plist.readString(value, [binary]) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Interprets a property list file within a string into a table.                                                                     |
| **Parameters**                              | <ul><li>value  - The contents of the property list as a string</li><li>binary - an optional boolean, specifying whether the value should be treated as raw binary (true) or as an UTF8 encoded string (false). If you do not provide this argument, the function will attempt to auto-detect the type.</li></ul> |
| **Returns**                                 | <ul><li>The contents of the property list as a Lua table or `nil` if an error occurs</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/plist/libplist.m line 23](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/plist/libplist.m#L23) |

---


### [write](#write)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.plist.write(filepath, data[, binary]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Writes a Property List file                                                                     |
| **Parameters**                              | <ul><li>filepath - The path and filename of the plist file to write</li><li>data - A Lua table containing the data to write into the plist</li><li>binary - An optional boolean, if true, the plist will be written as a binary file. Defaults to false</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the plist was written successfully, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>Only simple types can be converted to plist items:</li><li> Strings</li><li> Numbers</li><li> Booleans</li><li> Tables</li><li>You should be careful when reading a plist, modifying and writing it - Hammerspoon may not be able to preserve all of the datatypes via Lua</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/plist/libplist.m line 100](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/plist/libplist.m#L100) |

---


### [writeString](#writestring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.plist.writeString(data, [binary]) -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Interprets a property list file within a string into a table.                                                                     |
| **Parameters**                              | <ul><li>data - A Lua table containing the data to write into a plist string</li><li>binary - an optional boolean, default false, specifying that the resulting string should be encoded as a binary plist.</li></ul> |
| **Returns**                                 | <ul><li>A string representing the data as a plist or nil if there was a problem with the date or serialization.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/plist/libplist.m line 62](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/plist/libplist.m#L62) |

---


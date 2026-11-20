# hs.json

JSON encoding and decoding

This module is based partially on code from the previous incarnation of Mjolnir by [Steven Degutis](https://github.com/sdegutis/).


---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [decode](#decode)
 * [encode](#encode)
 * [read](#read)
 * [write](#write)


---

## API Documentation

#### Functions


### [decode](#decode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.json.decode(jsonString) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Decodes JSON into a table                                                                     |
| **Parameters**                              | <ul><li>jsonString - A string containing some JSON data</li></ul> |
| **Returns**                                 | <ul><li>A table representing the supplied JSON data</li></ul>          |
| **Notes**                                   | <ul><li>This is useful for retrieving some of the more complex lua table structures as a persistent setting (see `hs.settings`)</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/json/libjson.m line 139](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/json/libjson.m#L139) |

---


### [encode](#encode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.json.encode(val[, prettyprint]) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Encodes a table as JSON                                                                     |
| **Parameters**                              | <ul><li>val - A table containing data to be encoded as JSON</li><li>prettyprint - An optional boolean, true to format the JSON for human readability, false to format the JSON for size efficiency. Defaults to false</li></ul> |
| **Returns**                                 | <ul><li>A string containing a JSON representation of the supplied table</li></ul>          |
| **Notes**                                   | <ul><li>This is useful for storing some of the more complex lua table structures as a persistent setting (see `hs.settings`)</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/json/libjson.m line 112](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/json/libjson.m#L112) |

---


### [read](#read)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.json.read(path) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Decodes JSON file into a table.                                                                     |
| **Parameters**                              | <ul><li>path - The path and filename of the JSON file to read.</li></ul> |
| **Returns**                                 | <ul><li>A table representing the supplied JSON data, or `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/json/libjson.m line 197](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/json/libjson.m#L197) |

---


### [write](#write)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.json.write(data, path, [prettyprint], [replace]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Encodes a table as JSON to a file                                                                     |
| **Parameters**                              | <ul><li>data - A table containing data to be encoded as JSON</li><li>path - The path and filename of the JSON file to write to</li><li>prettyprint - An optional boolean, `true` to format the JSON for human readability, `false` to format the JSON for size efficiency. Defaults to `false`</li><li>replace - An optional boolean, `true` to replace an existing file at the same path if one exists. Defaults to `false`</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false` if an error has occurred</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/json/libjson.m line 164](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/json/libjson.m#L164) |

---


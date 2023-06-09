# cp.json

A collection of handy JSON tools.

## API Overview
* Functions - API calls offered directly by the extension
 * [decode](#decode)
 * [encode](#encode)
 * [prop](#prop)
 * [read](#read)
 * [write](#write)

## API Documentation

### Functions

| [decode](#decode)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.json.decode(jsonString) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Decodes JSON into a table                                                                     |
| **Parameters**                              | <ul><li>jsonString - A string containing some JSON data</li></ul> |
| **Returns**                                 | <ul><li>A table representing the supplied JSON data</li></ul>          |
| **Notes**                                   | <ul><li>This is useful for retrieving some of the more complex lua table structures as a persistent setting (see `hs.settings`)</li></ul>                |

| [encode](#encode)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.json.encode(val[, prettyprint]) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Encodes a table as JSON                                                                     |
| **Parameters**                              | <ul><li>val - A table containing data to be encoded as JSON</li><li>prettyprint - An optional boolean, true to format the JSON for human readability, false to format the JSON for size efficiency. Defaults to false</li></ul> |
| **Returns**                                 | <ul><li>A string containing a JSON representation of the supplied table</li></ul>          |
| **Notes**                                   | <ul><li>This is useful for storing some of the more complex lua table structures as a persistent setting (see `hs.settings`)</li></ul>                |

| [prop](#prop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.json.prop(path, folder, filename, defaultValue[, errorCallbackFn]) -> cp.prop`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `cp.prop` instance for a JSON file.                                                                     |
| **Parameters**                              | <ul><li>path - The path to the JSON folder (i.e. "~/Library/Caches")</li><li>folder - The folder containing the JSON file (i.e. "Final Cut Pro")</li><li>filename - The filename of the JSON file (i.e. "Test.json")</li><li>defaultValue - The default value if the JSON file doesn't exist yet.</li><li>errorCallbackFn - An optional function that's triggered if something goes wrong.</li></ul> |
| **Returns**                                 | <ul><li>A `cp.prop` instance.</li></ul>          |
| **Notes**                                   | <ul><li>The optional `errorCallbackFn` should accept one parameter, a string with</li><li>   the error message.</li></ul>                |

| [read](#read)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.json.read(path) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Attempts to read the specified path as a JSON file. If the file cannot be found, `nil` is returned. If the file is not a JSON file, an error will occur.                                                                     |
| **Parameters**                              | <ul><li>path - The JSON file path.</li></ul> |
| **Returns**                                 | <ul><li>The JSON file converted into table, or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [write](#write)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.json.write(path, data) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Writes data to a JSON file.                                                                     |
| **Parameters**                              | <ul><li>path - The path to where you want to save the JSON file.</li><li>data - A table containing data to be encoded as JSON.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successfully saved, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


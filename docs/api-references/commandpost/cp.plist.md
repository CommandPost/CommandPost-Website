# cp.plist

Reads & Writes plist data.

---

## Submodules
 * [cp.plist.archiver](cp.plist.archiver.md)
 * [cp.plist.plistParser](cp.plist.plistParser.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [base64ToTable](#base64totable)
 * [binaryFileToTable](#binaryfiletotable)
 * [binaryFileToXML](#binaryfiletoxml)
 * [binaryToTable](#binarytotable)
 * [fileToTable](#filetotable)
 * [isBinaryPlist](#isbinaryplist)
 * [isBinaryPlistFile](#isbinaryplistfile)
 * [isPlist](#isplist)
 * [isPlistFile](#isplistfile)
 * [isXMLPlist](#isxmlplist)
 * [isXMLPlistFile](#isxmlplistfile)
 * [xmlFileToTable](#xmlfiletotable)
 * [xmlToTable](#xmltotable)


---

## API Documentation

#### Functions


### [base64ToTable](#base64totable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.base64ToTable(base64Data) -> table | nil, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts base64 encoded Property List string into a Table.                                                                     |
| **Parameters**                              | <ul><li>base64Data - Binary data encoded in base64 as a string</li></ul> |
| **Returns**                                 | <ul><li>A table of the plist data</li><li>A error message as string if an error occurs</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/init.lua line 19](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/init.lua#L19){target="_blank"} |

---


### [binaryFileToTable](#binaryfiletotable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.binaryFileToTable(plistFileName) -> table | nil, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts the data from a Binary File into a LUA Table.                                                                     |
| **Parameters**                              | <ul><li>plistFileName - Path & Filename of the Binary File</li></ul> |
| **Returns**                                 | <ul><li>data             - A table of plist data, or `nil` if there was a problem.</li><li>err              - The error message, or `nil` if there were no problems.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/init.lua line 107](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/init.lua#L107){target="_blank"} |

---


### [binaryFileToXML](#binaryfiletoxml)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.binaryFileToXML(plistFileName) -> string | nil, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts the data from a Binary plist File into XML as a string.                                                                     |
| **Parameters**                              | <ul><li>plistFileName - Path & Filename of the Binary File</li></ul> |
| **Returns**                                 | <ul><li>data             - A string of XML data</li><li>err              - The error message, or `nil` if there were no problems.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/init.lua line 140](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/init.lua#L140){target="_blank"} |

---


### [binaryToTable](#binarytotable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.binaryToTable(binaryData) -> table | nil, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts Binary Data into a LUA Table.                                                                     |
| **Parameters**                              | <ul><li>binaryData       - Binary data</li></ul> |
| **Returns**                                 | <ul><li>data             - A string of XML data</li><li>err              - The error message, or `nil` if there were no problems.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/init.lua line 74](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/init.lua#L74){target="_blank"} |

---


### [fileToTable](#filetotable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.fileToTable(plistFileName) -> table | nil, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts plist data from a binary or XML file into a LUA Table.                                                                     |
| **Parameters**                              | <ul><li>plistFileName    - Path & Filename of the XML File</li></ul> |
| **Returns**                                 | <ul><li>data             - A table of plist data, or `nil` if there was a problem.</li><li>err              - The error message, or `nil` if there were no problems.</li></ul>          |
| **Notes**                                   | <ul><li>It will check the file prior to loading to determine which type it is.</li><li>If you know which type of file you're dealing with in advance, you can use cp.plist.xmlFileToTable() or hs.plist.binaryFileToTable() instead.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/init.lua line 210](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/init.lua#L210){target="_blank"} |

---


### [isBinaryPlist](#isbinaryplist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.isBinaryPlist(data) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided data is a binary plist.                                                                     |
| **Parameters**                              | <ul><li>data - The data to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is a binary plist, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/init.lua line 260](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/init.lua#L260){target="_blank"} |

---


### [isBinaryPlistFile](#isbinaryplistfile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.isBinaryPlistFile(plistList) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if plistList is a binary plist file otherwise `false`.                                                                     |
| **Parameters**                              | <ul><li>plistList - Path to the file</li></ul> |
| **Returns**                                 | <ul><li>Boolean</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/init.lua line 315](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/init.lua#L315){target="_blank"} |

---


### [isPlist](#isplist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.isPlist(data) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the data is either a binary or XML plist data `string`.                                                                     |
| **Parameters**                              | <ul><li>data             - The data to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the data is a plist, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/init.lua line 243](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/init.lua#L243){target="_blank"} |

---


### [isPlistFile](#isplistfile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.isPlistFile(plistFileName) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided file is a binary or XML plist file.                                                                     |
| **Parameters**                              | <ul><li>plistFileName    - Path & Filename of the XML File</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is a binary or XML plist file, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/init.lua line 289](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/init.lua#L289){target="_blank"} |

---


### [isXMLPlist](#isxmlplist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.isXMLPlist(data) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided data is an XML plist.                                                                     |
| **Parameters**                              | <ul><li>data - The data to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is an XML plist, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul><li>This will only check if it is an XML file, it does not check the actual format is correct.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/init.lua line 273](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/init.lua#L273){target="_blank"} |

---


### [isXMLPlistFile](#isxmlplistfile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.isXMLPlistFile(plistList) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if plistList is (probably) an XML plist file otherwise `false`.                                                                     |
| **Parameters**                              | <ul><li>plistList - Path to the file</li></ul> |
| **Returns**                                 | <ul><li>Boolean</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/init.lua line 342](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/init.lua#L342){target="_blank"} |

---


### [xmlFileToTable](#xmlfiletotable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.xmlFileToTable(plistFileName) -> table | nil, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts XML data from a file into a LUA Table.                                                                     |
| **Parameters**                              | <ul><li>plistFileName    - Path & Filename of the XML File</li></ul> |
| **Returns**                                 | <ul><li>data             - A table of plist data, or `nil` if there was a problem.</li><li>err              - The error message, or `nil` if there were no problems.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/init.lua line 180](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/init.lua#L180){target="_blank"} |

---


### [xmlToTable](#xmltotable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.xmlToTable(plistXml) -> table | nil, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts an XML plist string into a LUA Table.                                                                     |
| **Parameters**                              | <ul><li>plistXml         - The XML string</li></ul> |
| **Returns**                                 | <ul><li>data             - A table of plist data, or `nil` if there was a problem.</li><li>err              - The error message, or `nil` if there were no problems.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/init.lua line 165](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/init.lua#L165){target="_blank"} |

---


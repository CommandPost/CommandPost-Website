# hs.fs.xattr

Get and manipulate extended attributes for files and directories

This submodule provides functions for getting and setting the extended attributes for files and directories.  Access to extended attributes is provided through the Darwin xattr functions defined in the /usr/include/sys/xattr.h header. Attribute names are expected to conform to proper UTF-8 strings and values are represented as raw data -- in Lua raw data is presented as bytes in a string object but the bytes are not required to conform to proper UTF-8 byte code sequences. This module does not perform any encoding or decoding of the raw data.

All of the functions provided by this module can take an options table. Note that not all options are valid for all functions. The options table should be a Lua table containing an array of zero or more of the following strings:

 * "noFollow"       - do not follow symbolic links; this can be used to access the attributes of the link itself.
 * "hfsCompression" - access HFS Plus Compression extended attributes for the file or directory, if present
 * "createOnly"     - when setting an attribute value, fail if the attribute already exists
 * "replaceOnly"    - when setting an attribute value, fail if the attribute does not already exist

Note that the following options did not seem to be valid for the initial tests performed when developing this module and may refer the kernel level features not available to Hammerspoon; they are included here for full compatibility with the library as defined in its header. If you have more information about these options or can provide examples or documentation about their use, please submit an issue to the Hammerspoon github repository so we can provide better documentation here.

 * "noSecurity"      - bypass authorization checking
 * "noDefault"       - bypass the default extended attribute file (dot-underscore file)


## API Overview
* Functions - API calls offered directly by the extension
 * [get](#get)
 * [getHumanReadable](#getHumanReadable)
 * [list](#list)
 * [remove](#remove)
 * [set](#set)

## API Documentation

### Functions


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.xattr.get(path, attribute, [options], [position]) -> string | true | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Set the extended attribute to the value provided for the path specified.                                                                     |
| **Parameters**                              | <ul><li>`path`      - A string specifying the path to the file or directory to get the extended attribute from</li><li>`attribute` - A string specifying the name of the extended attribute to get the value of</li><li>`options`   - An optional table containing options as described in this module's documentation header. Defaults to {} (an empty array).</li><li>`position`  - An optional integer specifying the offset within the extended attribute. Defaults to 0. Setting this argument to a value other than 0 is only valid when `attribute` is "com.apple.ResourceFork".</li></ul> |
| **Returns**                                 | <ul><li>If the attribute exists for the file or directory and contains data, returns the value of the attribute as a string of raw bytes which are not guaranteed to conform to proper UTF-8 byte sequences. If the attribute exist but does not have a value, returns the Lua boolean `true`.  If the attribute does not exist, returns nil. Throws a Lua error on failure with a description of the reason for the failure.</li></ul>          |
| **Notes**                                   | <ul><li>See also [hs.fs.xattr.getHumanReadable](#getHumanReadable).</li></ul>                |

---

### [getHumanReadable](#getHumanReadable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.xattr.getHumanReadable(path, attribute, [options], [position]) -> string | true | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A wrapper to [hs.fs.xattr.get](#get) which returns non UTF-8 data as a hexadecimal dump provided by `hs.utf8.hexDump`.                                                                     |
| **Parameters**                              | <ul><li>`path`      - A string specifying the path to the file or directory to get the extended attribute from</li><li>`attribute` - A string specifying the name of the extended attribute to get the value of</li><li>`options`   - An optional table containing options as described in this module's documentation header. Defaults to {} (an empty array).</li><li>`position`  - An optional integer specifying the offset within the extended attribute. Defaults to 0. Setting this argument to a value other than 0 is only valid when `attribute` is "com.apple.ResourceFork".</li></ul> |
| **Returns**                                 | <ul><li>if the returned data does not conform to proper UTF-8 byte sequences, passes the string through `hs.utf8.hexDump` first.  Otherwise the return values follow the description for [hs.fs.xattr.get](#get) .</li></ul>          |
| **Notes**                                   | <ul><li>This is provided for testing and debugging purposes; in general you probably want [hs.fs.xattr.get](#get) once you know how to properly understand the data returned for the attribute.</li><li>This is similar to the long format option in the command line `xattr` command.</li></ul>                |

---

### [list](#list)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.xattr.list(path, [options]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a list of the extended attributes currently defined for the specified file or directory                                                                     |
| **Parameters**                              | <ul><li>`path`      - A string specifying the path to the file or directory to get the list of extended attributes for</li><li>`options`   - An optional table containing options as described in this module's documentation header. Defaults to {} (an empty array).</li></ul> |
| **Returns**                                 | <ul><li>a table containing an array of strings identifying the extended attributes currently defined for the file or directory; note that the order of the attributes is nondeterministic and is not guaranteed to be the same for future queries.  Throws a Lua error on failure with a description of the reason for the failure.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [remove](#remove)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.xattr.remove(path, attribute, [options]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes the specified extended attribute from the file or directory at the path specified.                                                                     |
| **Parameters**                              | <ul><li>`path`      - A string specifying the path to the file or directory to remove the extended attribute from</li><li>`attribute` - A string specifying the name of the extended attribute to remove</li><li>`options`   - An optional table containing options as described in this module's documentation header. Defaults to {} (an empty array).</li></ul> |
| **Returns**                                 | <ul><li>True if the operation succeeds; otherwise throws a Lua error with a description of reason for failure.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [set](#set)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.xattr.set(path, attribute, value, [options], [position]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Set the extended attribute to the value provided for the path specified.                                                                     |
| **Parameters**                              | <ul><li>`path`      - A string specifying the path to the file or directory to set the extended attribute for</li><li>`attribute` - A string specifying the name of the extended attribute to set</li><li>`value`     - A string containing the value to set the extended attribute to. This value is treated as a raw sequence of bytes and does not have to conform to property UTF-8 byte sequences.</li><li>`options`   - An optional table containing options as described in this module's documentation header. Defaults to {} (an empty array).</li><li>`position`  - An optional integer specifying the offset within the extended attribute. Defaults to 0. Setting this argument to a value other than 0 is only valid when `attribute` is "com.apple.ResourceFork".</li></ul> |
| **Returns**                                 | <ul><li>True if the operation succeeds; otherwise throws a Lua error with a description of reason for failure.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

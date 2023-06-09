# hs.pasteboard

Inspect/manipulate pasteboards (more commonly called clipboards). Both the system default pasteboard and custom named pasteboards can be interacted with.

This module is based partially on code from the previous incarnation of Mjolnir by [Steven Degutis](https://github.com/sdegutis/).

## Submodules
 * [hs.pasteboard.watcher](hs.pasteboard.watcher.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [allContentTypes](#allcontenttypes)
 * [callbackWhenChanged](#callbackwhenchanged)
 * [changeCount](#changecount)
 * [clearContents](#clearcontents)
 * [contentTypes](#contenttypes)
 * [deletePasteboard](#deletepasteboard)
 * [getContents](#getcontents)
 * [pasteboardTypes](#pasteboardtypes)
 * [readAllData](#readalldata)
 * [readArchiverDataForUTI](#readarchiverdataforuti)
 * [readColor](#readcolor)
 * [readDataForUTI](#readdataforuti)
 * [readImage](#readimage)
 * [readPListForUTI](#readplistforuti)
 * [readSound](#readsound)
 * [readString](#readstring)
 * [readStyledText](#readstyledtext)
 * [readURL](#readurl)
 * [setContents](#setcontents)
 * [typesAvailable](#typesavailable)
 * [uniquePasteboard](#uniquepasteboard)
 * [writeAllData](#writealldata)
 * [writeArchiverDataForUTI](#writearchiverdataforuti)
 * [writeDataForUTI](#writedataforuti)
 * [writeObjects](#writeobjects)
 * [writePListForUTI](#writeplistforuti)

## API Documentation

### Functions


### [allContentTypes](#allcontenttypes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.allContentTypes([name]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | An array whose elements are a table containing the content types for each element on the clipboard.                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li></ul> |
| **Returns**                                 | <ul><li>an array with each index representing an object on the pasteboard.  If the pasteboard contains only one element, this is equivalent to `{ hs.pasteboard.contentTypes(name) }`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [callbackWhenChanged](#callbackwhenchanged)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.callbackWhenChanged([name], [timeout], callback) -> None`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Invokes callback when the specified pasteboard has changed or the timeout is reached.                                                                     |
| **Parameters**                              | <ul><li>`name`     - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>`timeout`  - an optional number, default 2.0, specifying the time in seconds that this function should wait for a change to the specified pasteboard before timing out.</li><li>`callback` - a required callback function that will be invoked when either the specified pasteboard contents have changed or the timeout has been reached. The function should expect one boolean argument, true if the pasteboard contents have changed or false if timeout has been reached.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function can be used to capture the results of a copy operation issued programmatically with `hs.application:selectMenuItem` or `hs.eventtap.keyStroke` without resorting to creating your own timers:</li><li> ~~~</li><li>     hs.eventtap.keyStroke({"cmd"}, "c", 0) -- or whatever method you want to trigger the copy</li><li>     hs.pasteboard.callbackWhenChanged(5, function(state)</li><li>         if state then</li><li>             local contents = hs.pasteboard.getContents()</li><li>             -- do what you want with contents</li><li>         else</li><li>             error("copy timeout") -- or whatever fallback you want when it times out</li><li>         end</li><li>     end)</li><li> ~~~</li></ul>                |

---

### [changeCount](#changecount)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.changeCount([name]) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the number of times the pasteboard owner has changed                                                                     |
| **Parameters**                              | <ul><li>name - An optional string containing the name of the pasteboard. Defaults to the system pasteboard</li></ul> |
| **Returns**                                 | <ul><li>A number containing a count of the times the pasteboard owner has changed</li></ul>          |
| **Notes**                                   | <ul><li>This is useful for seeing if the pasteboard has been updated by another process</li></ul>                |

---

### [clearContents](#clearcontents)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.clearContents([name])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Clear the contents of the pasteboard                                                                     |
| **Parameters**                              | <ul><li>name - An optional string containing the name of the pasteboard. Defaults to the system pasteboard</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [contentTypes](#contenttypes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.contentTypes([name]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Return the UTI strings of the data types for the first pasteboard item on the specified pasteboard.                                                                     |
| **Parameters**                              | <ul><li>name - An optional string containing the name of the pasteboard. Defaults to the system pasteboard</li></ul> |
| **Returns**                                 | <ul><li>a table containing the UTI strings of the data types for the first pasteboard item.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [deletePasteboard](#deletepasteboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.deletePasteboard(name)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deletes a custom pasteboard                                                                     |
| **Parameters**                              | <ul><li>name - A string containing the name of the pasteboard</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>You can not delete the system pasteboard, this function should only be called on custom pasteboards you have created</li></ul>                |

---

### [getContents](#getcontents)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.getContents([name]) -> string or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the contents of the pasteboard                                                                     |
| **Parameters**                              | <ul><li>name - An optional string containing the name of the pasteboard. Defaults to the system pasteboard</li></ul> |
| **Returns**                                 | <ul><li>A string containing the contents of the pasteboard, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [pasteboardTypes](#pasteboardtypes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.pasteboardTypes([name]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Return the pasteboard type identifier strings for the specified pasteboard.                                                                     |
| **Parameters**                              | <ul><li>name - An optional string containing the name of the pasteboard. Defaults to the system pasteboard</li></ul> |
| **Returns**                                 | <ul><li>a table containing the pasteboard type identifier strings</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [readAllData](#readalldata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.readAllData([name]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns all values in the first item on the pasteboard in a table that maps a UTI value to the raw data of the item                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li></ul> |
| **Returns**                                 | <ul><li>  a mapping from a UTI value to the raw data</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [readArchiverDataForUTI](#readarchiverdataforuti)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.readArchiverDataForUTI([name], uti) -> any`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the first item on the pasteboard with the specified UTI. The data on the pasteboard must be encoded as a keyed archive object conforming to NSKeyedArchiver.                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>uti  - a string specifying the UTI of the pasteboard item to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>a lua item representing the archived data if it can be decoded. Generates an error if the data is in the wrong format.</li></ul>          |
| **Notes**                                   | <ul><li>NSKeyedArchiver specifies an architecture-independent format that is often used in OS X applications to store and transmit objects between applications and when storing data to a file. It works by recording information about the object types and key-value pairs which make up the objects being stored.</li><li>Only objects which have conversion functions built into Hammerspoon can be converted. A string representation describing unrecognized types wil be returned. If you find a common data type that you believe may be of interest to Hammerspoon users, feel free to contribute a conversion function or make a request in the Hammerspoon Google group or GitHub site.</li><li>Some applications may define their own classes which can be archived.  Hammerspoon will be unable to recognize these types if the application does not make the object type available in one of its frameworks.  You *may* be able to load the necessary framework with `package.loadlib("/Applications/appname.app/Contents/Frameworks/frameworkname.framework/frameworkname", "*")` before retrieving the data, but a full representation of the data in Hammerspoon is probably not possible without support from the Application's developers.</li></ul>                |

---

### [readColor](#readcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.readColor([name], [all]) -> hs.drawing.color table or array of hs.drawing.color tables`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns one or more `hs.drawing.color` tables from the clipboard, or nil if no compatible objects are present.                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>all  - an optional boolean indicating whether or not all (true) of the colors on the clipboard should be returned, or just the first (false).  Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>By default the first color on the clipboard, or a table of all colors on the clipboard if the `all` parameter is provided and set to true.  Returns nil if no colors are present.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [readDataForUTI](#readdataforuti)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.readDataForUTI([name], uti) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the first item on the pasteboard with the specified UTI as raw data                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>uti  - a string specifying the UTI of the pasteboard item to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>a lua string containing the raw data of the specified pasteboard item</li></ul>          |
| **Notes**                                   | <ul><li>The UTI's of the items on the pasteboard can be determined with the [hs.pasteboard.allContentTypes](#allContentTypes) and [hs.pasteboard.contentTypes](#contentTypes) functions.</li></ul>                |

---

### [readImage](#readimage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.readImage([name], [all]) -> hs.image object or array of hs.image objects`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns one or more `hs.image` objects from the clipboard, or nil if no compatible objects are present.                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>all  - an optional boolean indicating whether or not all (true) of the urls on the clipboard should be returned, or just the first (false).  Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>By default the first image on the clipboard, or a table of all images on the clipboard if the `all` parameter is provided and set to true.  Returns nil if no images are present.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [readPListForUTI](#readplistforuti)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.readPListForUTI([name], uti) -> any`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the first item on the pasteboard with the specified UTI as a property list item                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>uti  - a string specifying the UTI of the pasteboard item to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>a lua item representing the property list value of the pasteboard item specified</li></ul>          |
| **Notes**                                   | <ul><li>The UTI's of the items on the pasteboard can be determined with the [hs.pasteboard.allContentTypes](#allContentTypes) and [hs.pasteboard.contentTypes](#contentTypes) functions.</li><li>Property lists consist only of certain types of data: tables, strings, numbers, dates, binary data, and Boolean values.</li></ul>                |

---

### [readSound](#readsound)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.readSound([name], [all]) -> hs.sound object or array of hs.sound objects`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns one or more `hs.sound` objects from the clipboard, or nil if no compatible objects are present.                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>all  - an optional boolean indicating whether or not all (true) of the urls on the clipboard should be returned, or just the first (false).  Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>By default the first sound on the clipboard, or a table of all sounds on the clipboard if the `all` parameter is provided and set to true.  Returns nil if no sounds are present.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [readString](#readstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.readString([name], [all]) -> string or array of strings`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns one or more strings from the clipboard, or nil if no compatible objects are present.                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>all  - an optional boolean indicating whether or not all (true) of the urls on the clipboard should be returned, or just the first (false).  Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>By default the first string on the clipboard, or a table of all strings on the clipboard if the `all` parameter is provided and set to true.  Returns nil if no strings are present.</li></ul>          |
| **Notes**                                   | <ul><li>almost all string and styledText objects are internally convertible and will be available with this method as well as [hs.pasteboard.readStyledText](#readStyledText). If the item is actually an `hs.styledtext` object, the string will be just the text of the object.</li></ul>                |

---

### [readStyledText](#readstyledtext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.readStyledText([name], [all]) -> hs.styledtext object or array of hs.styledtext objects`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns one or more `hs.styledtext` objects from the clipboard, or nil if no compatible objects are present.                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>all  - an optional boolean indicating whether or not all (true) of the urls on the clipboard should be returned, or just the first (false).  Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>By default the first styledtext object on the clipboard, or a table of all styledtext objects on the clipboard if the `all` parameter is provided and set to true.  Returns nil if no styledtext objects are present.</li></ul>          |
| **Notes**                                   | <ul><li>almost all string and styledText objects are internally convertible and will be available with this method as well as [hs.pasteboard.readString](#readString). If the item on the clipboard is actually just a string, the `hs.styledtext` object representation will have no attributes set</li></ul>                |

---

### [readURL](#readurl)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.readURL([name], [all]) -> string or array of strings representing file or resource urls`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns one or more strings representing file or resource urls from the clipboard, or nil if no compatible objects are present.                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>all  - an optional boolean indicating whether or not all (true) of the urls on the clipboard should be returned, or just the first (false).  Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>By default the first url on the clipboard, or a table of all urls on the clipboard if the `all` parameter is provided and set to true.  Returns nil if no urls are present.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setContents](#setcontents)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.setContents(contents[, name]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the contents of the pasteboard                                                                     |
| **Parameters**                              | <ul><li>contents - A string to be placed in the pasteboard</li><li>name - An optional string containing the name of the pasteboard. Defaults to the system pasteboard</li></ul> |
| **Returns**                                 | <ul><li>True if the operation succeeded, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [typesAvailable](#typesavailable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.typesAvailable([name]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table indicating what content types are available on the pasteboard.                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li></ul> |
| **Returns**                                 | <ul><li>a table which may contain any of the following keys set to the value true:</li><li>  string     - at least one element which can be represented as a string is on the pasteboard</li><li>  styledText - at least one element which can be represented as an `hs.styledtext` object is on the pasteboard</li><li>  sound      - at least one element which can be represented as an `hs.sound` object is on the pasteboard</li><li>  image      - at least one element which can be represented as an `hs.image` object is on the pasteboard</li><li>  URL        - at least one element on the pasteboard represents a URL, either to a local file or a remote resource</li><li>  color      - at least one element on the pasteboard represents a color, representable as a table as described in `hs.drawing.color`</li></ul>          |
| **Notes**                                   | <ul><li>almost all string and styledText objects are internally convertible and will return true for both keys</li><li>  if the item on the clipboard is actually just a string, the `hs.styledtext` object representation will have no attributes set</li><li>  if the item is actually an `hs.styledtext` object, the string representation will be the text without any attributes.</li></ul>                |

---

### [uniquePasteboard](#uniquepasteboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.uniquePasteboard() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the name of a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards on the computer.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a unique pasteboard name</li></ul>          |
| **Notes**                                   | <ul><li>to properly manage system resources, you should release the created pasteboard with [hs.pasteboard.deletePasteboard](#deletePasteboard) when you are certain that it is no longer necessary.</li></ul>                |

---

### [writeAllData](#writealldata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.writeAllData([name], table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stores in the pasteboard a given table of UTI to data mapping all at once                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>a mapping from a UTI value to the raw data</li></ul> |
| **Returns**                                 | <ul><li> True if the operation succeeded, otherwise false (which most likely means ownership of the pasteboard has changed)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [writeArchiverDataForUTI](#writearchiverdataforuti)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.writeArchiverDataForUTI([name], uti, data, [add]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the pasteboard to the contents of the data and assigns its type to the specified UTI. The data will be encoded as an archive conforming to NSKeyedArchiver.                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>uti  - a string specifying the UTI of the pasteboard item to set.</li><li>data - any type representable in Lua which will be converted into the appropriate NSObject types and archived with NSKeyedArchiver.  All Lua basic types are supported as well as those NSObject types handled by Hammerspoon modules (NSColor, NSStyledText, NSImage, etc.)</li><li>add  - an optional boolean value specifying if data with other UTI values should retain.  This value must be strictly either true or false if given, to avoid ambiguity with preceding parameters.</li></ul> |
| **Returns**                                 | <ul><li>True if the operation succeeded, otherwise false (which most likely means ownership of the pasteboard has changed)</li></ul>          |
| **Notes**                                   | <ul><li>NSKeyedArchiver specifies an architecture-independent format that is often used in OS X applications to store and transmit objects between applications and when storing data to a file. It works by recording information about the object types and key-value pairs which make up the objects being stored.</li><li>Only objects which have conversion functions built into Hammerspoon can be converted.</li><li>A full list of NSObjects supported directly by Hammerspoon is planned in a future Wiki article.</li></ul>                |

---

### [writeDataForUTI](#writedataforuti)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.writeDataForUTI([name], uti, data, [add]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the pasteboard to the contents of the data and assigns its type to the specified UTI.                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>uti  - a string specifying the UTI of the pasteboard item to set.</li><li>data - a string specifying the raw data to assign to the pasteboard.</li><li>add  - an optional boolean value specifying if data with other UTI values should retain.  This value must be strictly either true or false if given, to avoid ambiguity with preceding parameters.</li></ul> |
| **Returns**                                 | <ul><li>True if the operation succeeded, otherwise false (which most likely means ownership of the pasteboard has changed)</li></ul>          |
| **Notes**                                   | <ul><li>The UTI's of the items on the pasteboard can be determined with the [hs.pasteboard.allContentTypes](#allContentTypes) and [hs.pasteboard.contentTypes](#contentTypes) functions.</li></ul>                |

---

### [writeObjects](#writeobjects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.writeObjects(object, [name]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the pasteboard contents to the object or objects specified.                                                                     |
| **Parameters**                              | <ul><li>object - an object or table of objects to set the pasteboard to.  The following objects are recognized:
  a lua string, which can be received by most applications that can accept text from the clipboard
  `hs.styledtext` object, which can be received by most applications that can accept a raw NSAttributedString (often converted internally to RTF, RTFD, HTML, etc.)
  `hs.sound` object, which can be received by most applications that can accept a raw NSSound object
  `hs.image` object, which can be received by most applications that can accept a raw NSImage object
  a table with the `url` key and value representing a file or resource url, which can be received by most applications that can accept an NSURL object to represent a file or a remote resource
  a table with keys as described in `hs.drawing.color` to represent a color, which can be received by most applications that can accept a raw NSColor object
  an array of one or more of the above objects, allowing you to place more than one object onto the clipboard.</li><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li></ul> |
| **Returns**                                 | <ul><li>true or false indicating whether or not the clipboard contents were updated.</li></ul>          |
| **Notes**                                   | <ul><li>Most applications can only receive the first item on the clipboard.  Multiple items on a clipboard are most often used for intra-application communication where the sender and receiver are specifically written with multiple objects in mind.</li></ul>                |

---

### [writePListForUTI](#writeplistforuti)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.writePListForUTI([name], uti, data, [add]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the pasteboard to the contents of the data and assigns its type to the specified UTI.                                                                     |
| **Parameters**                              | <ul><li>name - an optional string indicating the pasteboard name.  If nil or not present, defaults to the system pasteboard.</li><li>uti  - a string specifying the UTI of the pasteboard item to set.</li><li>data - a lua type which can be represented as a property list value.</li><li>add  - an optional boolean value specifying if data with other UTI values should retain.  This value must be strictly either true or false if given, to avoid ambiguity with preceding parameters.</li></ul> |
| **Returns**                                 | <ul><li>True if the operation succeeded, otherwise false (which most likely means ownership of the pasteboard has changed)</li></ul>          |
| **Notes**                                   | <ul><li>The UTI's of the items on the pasteboard can be determined with the [hs.pasteboard.allContentTypes](#allContentTypes) and [hs.pasteboard.contentTypes](#contentTypes) functions.</li><li>Property lists consist only of certain types of data: tables, strings, numbers, dates, binary data, and Boolean values.</li></ul>                |

---

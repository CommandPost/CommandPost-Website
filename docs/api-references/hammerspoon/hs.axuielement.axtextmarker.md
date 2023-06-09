# hs.axuielement.axtextmarker

This submodule allows hs.axuielement to support using AXTextMarker and AXTextMarkerRange objects as parameters for parameterized Accessibility attributes with applications that support them.

Most Accessibility object values correspond to the common data types found in most programming languages -- strings, numbers, tables (arrays and dictionaries), etc. AXTextMarker and AXTextMarkerRange types are application specific and do not have a direct mapping to a simple data type. The description I've found most apt comes from comments within the Chromium source for the Mac version of their browser:

> // A serialization of a position as POD. Not for sharing on disk or sharing
> // across thread or process boundaries, just for passing a position to an
> // API that works with positions as opaque objects.

This submodule allows Lua to represent these as userdata which can be passed in to parameterized attributes for the application from which they were retrieved. Examples are expected to be added to the Hammerspoon wiki soon.

As this submodule utilizes private and undocumented functions in the HIServices framework, if you receive an error using any of these functions or methods indicating an undefined CF function (the function or method will return nil and a string of the format "CF function AX... undefined"), please make sure to include the output of the following in any issue you submit to the Hammerspoon github page (enter these into the Hammerspoon console):

    hs.inspect(hs.axuielement.axtextmarker._functionCheck())
    hs.inspect(hs.processInfo)
    hs.host.operatingSystemVersionString()

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [_functionCheck](#_functioncheck)
 * [bytes](#bytes)
 * [endMarker](#endmarker)
 * [length](#length)
 * [startMarker](#startmarker)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [newMarker](#newmarker)
 * [newRange](#newrange)


---

## API Documentation

### Functions


### [_functionCheck](#_functioncheck)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.axuielement.axtextmarker._functionCheck() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table of the AXTextMarker and AXTextMarkerRange functions that have been discovered and are used within this module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table with key-value pairs where the keys correspond to the undocumented Core Foundation functions required by this module to support AXTextMarker and AXTextMarkerRange and the value will be a boolean indicating whether the function exists in the currently loaded frameworks.</li></ul>          |
| **Notes**                                   | <ul><li>the functions are defined within the HIServices framework which is part of the ApplicationServices framework, so it is expected that the necessary functions will always be available; however, if you ever receive an error message from a function or method within this submodule of the form "CF function AX... undefined", please see the submodule heading documentation for a description of the information, including that which this function provides, that should be included in any error report you submit.</li><li>This is for debugging purposes and is not expected to be used often.</li></ul>                |

---

### [bytes](#bytes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.axuielement.axtextmarker:bytes() -> string | nil, errorString`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a string containing the opaque binary data contained within the axTextMarkerObject                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li> a string containing the opaque binary data contained within the axTextMarkerObject</li></ul>          |
| **Notes**                                   | <ul><li>the string will likely contain invalid UTF8 code sequences or unprintable ascii values; to see the data in decimal or hexadecimal form you can use:</li><li>    string.byte(hs.axuielement.axtextmarker:bytes(), 1, hs.axuielement.axtextmarker:length())</li><li>    -- or</li><li>    hs.utf8.hexDump(hs.axuielement.axtextmarker:bytes())</li><li>As the data is application specific, it is unlikely that you will use this method often; it is included primarily for testing and debugging purposes.</li></ul>                |

---

### [endMarker](#endmarker)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.axuielement.axtextmarker:endMarker() -> axTextMarkerObject | nil, errorString`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the ending marker for an axTextMarkerRangeObject                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li> the ending marker for an axTextMarkerRangeObject</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [length](#length)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.axuielement.axtextmarker:length() -> integer | nil, errorString`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns an integer specifying the number of bytes in the data portion of the axTextMarkerObject.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li> an integer specifying the number of bytes in the data portion of the axTextMarkerObject</li></ul>          |
| **Notes**                                   | <ul><li>As the data is application specific, it is unlikely that you will use this method often; it is included primarily for testing and debugging purposes.</li></ul>                |

---

### [startMarker](#startmarker)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.axuielement.axtextmarker:startMarker() -> axTextMarkerObject | nil, errorString`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the starting marker for an axTextMarkerRangeObject                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li> the starting marker for an axTextMarkerRangeObject</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [newMarker](#newmarker)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.axuielement.axtextmarker.newMarker(string) -> axTextMarkerObject | nil, errorString`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new AXTextMarker object from the string of binary data provided                                                                     |
| **Parameters**                              | <ul><li>`string` - a string containing 1 or more bytes of data for the AXTextMarker object</li></ul> |
| **Returns**                                 | <ul><li>a new axTextMarkerObject or nil and a string description if there was an error</li></ul>          |
| **Notes**                                   | <ul><li>This function is included primarily for testing and debugging purposes -- in general you will probably never use this constructor; AXTextMarker objects appear to be mostly application dependant and have no meaning external to the application from which it was created.</li></ul>                |

---

### [newRange](#newrange)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.axuielement.axtextmarker.newRange(startMarker, endMarker) -> axTextMarkerRangeObject | nil, errorString`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new AXTextMarkerRange object from the start and end markers provided                                                                     |
| **Parameters**                              | <ul><li>`startMarker` - an axTextMarkerObject representing the start of the range to be created</li><li>`endMarker`   - an axTextMarkerObject representing the end of the range to be created</li></ul> |
| **Returns**                                 | <ul><li>a new axTextMarkerRangeObject or nil and a string description if there was an error</li></ul>          |
| **Notes**                                   | <ul><li>this constructor can be used to create a range from axTextMarkerObjects obtained from an application to specify a new range for a parameterized attribute. As a simple example (it is hoped that more will be added to the Hammerspoon wiki shortly):</li><li>    ```lua</li><li>    s = hs.axuielement.applicationElement(hs.application("Safari"))</li><li>    -- for a window displaying the DuckDuckGo main search page, this gets the</li><li>    -- primary display area. Other pages may vary and you should build your</li><li>    -- object as necessary for your target.</li><li>    c = s("AXMainWindow")("AXSections")[1].SectionObject[1][1]</li><li>    start = c("AXStartTextMarker") -- get the text marker for the start of this element</li><li>    ending = c("AXNextLineEndTextMarkerForTextMarker", start) -- get the next end of line marker</li><li>    print(c("AXStringForTextMarkerRange", hs.axuielement.axtextmarker.newRange(start, ending)))</li><li>    -- outputs "Privacy, simplified." to the Hammerspoon console```</li><li>The specific attributes and parameterized attributes supported by a given application differ and can be discovered with the `hs.axuielement:getAttributeNames` and `hs.axuielement:getParameterizedAttributeNames` methods.</li></ul>                |

---

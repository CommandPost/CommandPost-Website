# cp.tools

A collection of handy miscellaneous tools for Lua development.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [appleScriptViaTask](#applescriptviatask)
 * [between](#between)
 * [camelCase](#camelcase)
 * [centre](#centre)
 * [characterToPercentEncodedString](#charactertopercentencodedstring)
 * [cleanupButtonText](#cleanupbuttontext)
 * [contentsInsideBrackets](#contentsinsidebrackets)
 * [convertSingleHexStringToDecimalString](#convertsinglehexstringtodecimalstring)
 * [desktopPath](#desktoppath)
 * [dirFiles](#dirfiles)
 * [doesDirectoryExist](#doesdirectoryexist)
 * [doesFileExist](#doesfileexist)
 * [doubleLeftClick](#doubleleftclick)
 * [encodeURI](#encodeuri)
 * [encodeURIComponent](#encodeuricomponent)
 * [endsWith](#endswith)
 * [ensureDirectoryExists](#ensuredirectoryexists)
 * [escapeTilda](#escapetilda)
 * [exactMatch](#exactmatch)
 * [executeWithAdministratorPrivileges](#executewithadministratorprivileges)
 * [fileLinesBackward](#filelinesbackward)
 * [findCommonWordWithinTwoStrings](#findcommonwordwithintwostrings)
 * [firstToUpper](#firsttoupper)
 * [getEmail](#getemail)
 * [getExternalDevices](#getexternaldevices)
 * [getFileExtensionFromPath](#getfileextensionfrompath)
 * [getFilenameFromPath](#getfilenamefrompath)
 * [getFullname](#getfullname)
 * [getKeysSortedByValue](#getkeyssortedbyvalue)
 * [getmacOSVersion](#getmacosversion)
 * [getModelName](#getmodelname)
 * [getRAMSize](#getramsize)
 * [getScreenshotsAsBase64](#getscreenshotsasbase64)
 * [getThunderboltDevices](#getthunderboltdevices)
 * [getUSBDevices](#getusbdevices)
 * [getVRAMSize](#getvramsize)
 * [hexStringToString](#hexstringtostring)
 * [iconFallback](#iconfallback)
 * [incrementFilename](#incrementfilename)
 * [incrementFilenameInPath](#incrementfilenameinpath)
 * [isColor](#iscolor)
 * [isImage](#isimage)
 * [isNumberString](#isnumberstring)
 * [isOffScreen](#isoffscreen)
 * [keyStroke](#keystroke)
 * [leftClick](#leftclick)
 * [lines](#lines)
 * [lower](#lower)
 * [macOSVersion](#macosversion)
 * [mergeTable](#mergetable)
 * [ninjaDoubleClick](#ninjadoubleclick)
 * [ninjaMouseAction](#ninjamouseaction)
 * [ninjaMouseClick](#ninjamouseclick)
 * [ninjaRightMouseClick](#ninjarightmouseclick)
 * [numberToWord](#numbertoword)
 * [optionPressed](#optionpressed)
 * [playErrorSound](#playerrorsound)
 * [pressSystemKey](#presssystemkey)
 * [readFromFile](#readfromfile)
 * [removeFilenameFromPath](#removefilenamefrompath)
 * [removeFromTable](#removefromtable)
 * [replace](#replace)
 * [rescale](#rescale)
 * [rightClick](#rightclick)
 * [rmdir](#rmdir)
 * [round](#round)
 * [safeFilename](#safefilename)
 * [secureInputApplicationTitle](#secureinputapplicationtitle)
 * [shiftPressed](#shiftpressed)
 * [spairs](#spairs)
 * [split](#split)
 * [splitOnColumn](#splitoncolumn)
 * [startsWith](#startswith)
 * [stringMaxLength](#stringmaxlength)
 * [stringToHexString](#stringtohexstring)
 * [tableContains](#tablecontains)
 * [tableCount](#tablecount)
 * [tableFilter](#tablefilter)
 * [tableMatch](#tablematch)
 * [toRegionalNumber](#toregionalnumber)
 * [toRegionalNumberString](#toregionalnumberstring)
 * [trim](#trim)
 * [unescape](#unescape)
 * [upper](#upper)
 * [urlQueryStringDecode](#urlquerystringdecode)
 * [urlToFilename](#urltofilename)
 * [volumeFormat](#volumeformat)
 * [writeToFile](#writetofile)


---

## API Documentation

#### Functions


### [appleScriptViaTask](#applescriptviatask)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.appleScriptViaTask(script) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Triggers an AppleScript command via `hs.task` to avoid potential memory leaks in `hs.osascript.applescript`.                                                                     |
| **Parameters**                              | <ul><li>script - A single line AppleScript.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [between](#between)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.between(value, min, max) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Is a value between the minimum and the maximum value?                                                                     |
| **Parameters**                              | <ul><li>value - the value to check</li><li>min - the minimum value</li><li>max - the maximum value</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [camelCase](#camelcase)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.camelCase(str) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts the supplied string to camelcase.                                                                     |
| **Parameters**                              | <ul><li>str - The string you want to manipulate</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [centre](#centre)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.centre(frame) -> hs.geometry point`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the centre point of a frame.                                                                     |
| **Parameters**                              | <ul><li>frame - an `hs.geometry` rect</li></ul> |
| **Returns**                                 | <ul><li>A hs.geometry point</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [characterToPercentEncodedString](#charactertopercentencodedstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.characterToPercentEncodedString(input) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Encodes a character as a percent encoded string.                                                                     |
| **Parameters**                              | <ul><li>input - The string to process</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [cleanupButtonText](#cleanupbuttontext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.cleanupButtonText(value) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes the … symbol and multiple >'s from a string.                                                                     |
| **Parameters**                              | <ul><li>value - A string</li></ul> |
| **Returns**                                 | <ul><li>A cleaned string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [contentsInsideBrackets](#contentsinsidebrackets)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.contentsInsideBrackets(value) -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the contents of any text inside the first bracket set.                                                                     |
| **Parameters**                              | <ul><li>value - The string to process</li></ul> |
| **Returns**                                 | <ul><li>The contents as a string or `nil`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [convertSingleHexStringToDecimalString](#convertsinglehexstringtodecimalstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.convertSingleHexStringToDecimalString(hex) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts a single hex string (i.e. "3") to a binary string (i.e. "0011")                                                                     |
| **Parameters**                              | <ul><li>hex - A single string character</li></ul> |
| **Returns**                                 | <ul><li>A four character string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [desktopPath](#desktoppath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.desktopPath() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the users Desktop Path                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The path as a string.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [dirFiles](#dirfiles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.dirFiles(path) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets all the files in a directory                                                                     |
| **Parameters**                              | <ul><li>path - A path as string</li></ul> |
| **Returns**                                 | <ul><li>A table containing filenames as strings, or `nil` followed by the error message if an error occurs.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doesDirectoryExist](#doesdirectoryexist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.doesDirectoryExist(path) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether or not a directory exists.                                                                     |
| **Parameters**                              | <ul><li>path - Path to the directory</li></ul> |
| **Returns**                                 | <ul><li>`true` if the directory exists otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doesFileExist](#doesfileexist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.doesFileExist(path) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether or not a file exists.                                                                     |
| **Parameters**                              | <ul><li>path - Path to the file</li></ul> |
| **Returns**                                 | <ul><li>`true` if the file exists otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doubleLeftClick](#doubleleftclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.doubleLeftClick(point[, delay]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a Left Mouse Double Click.                                                                     |
| **Parameters**                              | <ul><li>point - A point-table containing the absolute x and y co-ordinates to move the mouse pointer to</li><li>delay - The optional delay between multiple mouse clicks</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [encodeURI](#encodeuri)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.encodeURI(input) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Replaces all characters (except for those listed in the notes) with the appropriate UTF-8 escape sequences.                                                                     |
| **Parameters**                              | <ul><li>input - The string to process</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul><li>Except these characters: ; , / ? : @ & = + $ # alphabetic, decimal digits, - _ . ! ~' ( )</li></ul> |

---


### [encodeURIComponent](#encodeuricomponent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.encodeURIComponent(input) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Escapes all characters (except for those listed in the notes) with the appropriate UTF-8 escape sequences.                                                                     |
| **Parameters**                              | <ul><li>input - The string to process</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul><li>Except these characters: alphabetic, decimal digits, - _ . ! ~' ( )</li></ul> |

---


### [endsWith](#endswith)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.endsWith(str, ending) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if `str` has the same ending as `ending`.                                                                     |
| **Parameters**                              | <ul><li>str       - String to analysis</li><li>ending    - End of string to compare against</li></ul> |
| **Returns**                                 | <ul><li>table</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [ensureDirectoryExists](#ensuredirectoryexists)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.ensureDirectoryExists(rootPath, ...) -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Ensures all steps on a provided path exist. If not, attempts to create them. If it fails, `nil` is returned.                                                                     |
| **Parameters**                              | <ul><li>`rootPath` - The root path</li><li>`...`      - The list of path steps to create</li></ul> |
| **Returns**                                 | <ul><li>The full path, if it exists, or `nil` if unable to create the directory for some reason.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [escapeTilda](#escapetilda)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.escapeTilda(input) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Escapes a tilda.                                                                     |
| **Parameters**                              | <ul><li>input - The string you want to escape.</li></ul> |
| **Returns**                                 | <ul><li>A new string or "" if no input is supplied.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [exactMatch](#exactmatch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.exactMatch(value, pattern, plain, ignoreCase) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Compares two strings to see if they're an exact match.                                                                     |
| **Parameters**                              | <ul><li>value - The first string</li><li>pattern - The second string, including any patterns</li><li>plain - Whether or not to ignore patterns. Defaults to `false`.</li><li>ignoreCase - Ignore the case of the value & pattern.</li></ul> |
| **Returns**                                 | <ul><li>`true` if there's an exact match, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [executeWithAdministratorPrivileges](#executewithadministratorprivileges)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.executeWithAdministratorPrivileges(input[, stopOnError]) -> boolean or string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Executes a single or multiple shell commands with Administrator Privileges.                                                                     |
| **Parameters**                              | <ul><li>input - either a string or a table of strings of commands you want to execute</li><li>stopOnError - an optional variable that stops processing multiple commands when an individual commands returns an error</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, `false` if cancelled and a string if there's an error.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [fileLinesBackward](#filelinesbackward)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.fileLinesBackward(filename) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | An iterator function that reads a file backwards.                                                                     |
| **Parameters**                              | <ul><li>filename - The file to open in read only mode</li></ul> |
| **Returns**                                 | <ul><li>An iterator function</li></ul>          |
| **Notes**                                   | <ul><li>This is similar to `io.lines`, but works in reverse.</li><li>Example Usage: `for line in cp.tools.fileLinesBackward("file") do print(line) end`</li></ul> |

---


### [findCommonWordWithinTwoStrings](#findcommonwordwithintwostrings)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.findCommonWordWithinTwoStrings(a, b) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds a common word within two strings.                                                                     |
| **Parameters**                              | <ul><li>a - The first string</li><li>b - The second string</li></ul> |
| **Returns**                                 | <ul><li>The first common word that's found or `nil` if something goes wrong.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [firstToUpper](#firsttoupper)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.firstToUpper(str) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Makes the first letter of a string uppercase.                                                                     |
| **Parameters**                              | <ul><li>str - The string you want to manipulate</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getEmail](#getemail)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.getEmail() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the current users Email, otherwise an empty string.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>String</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getExternalDevices](#getexternaldevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.getExternalDevices() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a string of USB & Thunderbolt Devices.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>String</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getFileExtensionFromPath](#getfileextensionfrompath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.getFileExtensionFromPath(input) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the file extension from a path.                                                                     |
| **Parameters**                              | <ul><li>input - The path</li></ul> |
| **Returns**                                 | <ul><li>A string of the file extension.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getFilenameFromPath](#getfilenamefrompath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.getFilenameFromPath(input[, removeExtension]) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the filename component of a path.                                                                     |
| **Parameters**                              | <ul><li>input - The path</li><li>removeExtension - (optional) set to `true` if the file extension should be removed</li></ul> |
| **Returns**                                 | <ul><li>A string of the filename.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getFullname](#getfullname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.getFullname() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the current users Full Name, otherwise an empty string.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>String</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getKeysSortedByValue](#getkeyssortedbyvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.getKeysSortedByValue(tbl, sortFunction) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sorts table keys by a value                                                                     |
| **Parameters**                              | <ul><li>tbl - the table you want to sort</li><li>sortFunction - the function you want to use to sort the table</li></ul> |
| **Returns**                                 | <ul><li>A sorted table</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getmacOSVersion](#getmacosversion)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.getmacOSVersion() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the macOS Version in the format that Apple's Feedback Form expects.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The macOS version as a string or "" if unknown.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getModelName](#getmodelname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.getModelName() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns Model Name of Hardware.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>String</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getRAMSize](#getramsize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.getRAMSize() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns RAM Size in a format Apple's Feedback form expects.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The RAM size as a string, or "" if unknown.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getScreenshotsAsBase64](#getscreenshotsasbase64)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.getScreenshotsAsBase64() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Captures all available screens and saves them as base64 encodes in a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing base64 images of all available screens.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getThunderboltDevices](#getthunderboltdevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.getThunderboltDevices() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a string of Thunderbolt Devices.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>String</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getUSBDevices](#getusbdevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.getUSBDevices() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a string of USB Devices.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>String</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getVRAMSize](#getvramsize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.getVRAMSize() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the VRAM size in format suitable for Apple's Final Cut Pro feedback form or "" if unknown.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>String</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [hexStringToString](#hexstringtostring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.hexStringToString(value) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts a hex string to a string.                                                                     |
| **Parameters**                              | <ul><li>value - The string to convert</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [iconFallback](#iconfallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.iconFallback(paths) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Excepts one or more paths to an icon, checks to see if they exist (in the order that they're given), and if none exist, returns the CommandPost icon path.                                                                     |
| **Parameters**                              | <ul><li>paths - One or more paths to an icon</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [incrementFilename](#incrementfilename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.incrementFilename(value) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Increments the filename.                                                                     |
| **Parameters**                              | <ul><li>value - A string</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [incrementFilenameInPath](#incrementfilenameinpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.incrementFilenameInPath(path) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Increments the filename as it appears in a path.                                                                     |
| **Parameters**                              | <ul><li>path - A path to a file.</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [isColor](#iscolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.isColor(object) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Is the supplied object an `hs.drawing.color`?                                                                     |
| **Parameters**                              | <ul><li>object - An object to check</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [isImage](#isimage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.isImage(object) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Is the supplied object an `hs.image`?                                                                     |
| **Parameters**                              | <ul><li>object - An object to check</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [isNumberString](#isnumberstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.isNumberString(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether or not value is a number string.                                                                     |
| **Parameters**                              | <ul><li>value - the string you want to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if value is a number string, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [isOffScreen](#isoffscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.isOffScreen(rect) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Determines if the given rect is off screen or not.                                                                     |
| **Parameters**                              | <ul><li>rect - the rect you want to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if offscreen otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [keyStroke](#keystroke)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.keyStroke(modifiers, character, app, proper) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates and emits a single keystroke event pair for the supplied keyboard modifiers and character to the application.                                                                     |
| **Parameters**                              | <ul><li>modifiers - A table containing the keyboard modifiers to apply ("fn", "ctrl", "alt", "cmd" or "shift")</li><li>character - A string containing a character to be emitted</li><li>app - The optional `hs.application` you want to target</li><li>proper - Use the "proper" method as per Apple's documentation (defaults to `false`)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [leftClick](#leftclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.leftClick(point[, delay, clickNumber]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a Left Mouse Click.                                                                     |
| **Parameters**                              | <ul><li>point - A point-table containing the absolute x and y co-ordinates to move the mouse pointer to</li><li>delay - The optional delay between multiple mouse clicks</li><li>clickNumber - The optional number of times you want to perform the click.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [lines](#lines)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.lines(string) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Splits a string containing multiple lines of text into a table.                                                                     |
| **Parameters**                              | <ul><li>string - the string you want to process</li></ul> |
| **Returns**                                 | <ul><li>A table or `nil` if the parameter is not a string.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [lower](#lower)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.lower(str) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts the supplied string to lowercase.                                                                     |
| **Parameters**                              | <ul><li>str - The string you want to manipulate</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [macOSVersion](#macosversion)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.macOSVersion() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a the macOS Version as a single string.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the macOS version</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [mergeTable](#mergetable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.mergeTable(target, ...) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Merges multiple tables into a target table.                                                                     |
| **Parameters**                              | <ul><li>target   - The target table</li><li>...      - Any other tables you want to merge into target</li></ul> |
| **Returns**                                 | <ul><li>Table</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [ninjaDoubleClick](#ninjadoubleclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.ninjaDoubleClick(point[, delay]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a mouse double click, but returns the mouse to the original position without the users knowledge.                                                                     |
| **Parameters**                              | <ul><li>point - A point-table containing the absolute x and y co-ordinates to move the mouse pointer to</li><li>delay - The optional delay between multiple mouse clicks</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [ninjaMouseAction](#ninjamouseaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.ninjaMouseAction(point, fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Moves the mouse to a point, performs a function, then returns the mouse to the original point.                                                                     |
| **Parameters**                              | <ul><li>point - A point-table containing the absolute x and y co-ordinates to move the mouse pointer to</li><li>fn - A function you want to perform</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [ninjaMouseClick](#ninjamouseclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.ninjaMouseClick(point[, delay]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a mouse click, but returns the mouse to the original position without the users knowledge.                                                                     |
| **Parameters**                              | <ul><li>point - A point-table containing the absolute x and y co-ordinates to move the mouse pointer to</li><li>delay - The optional delay between multiple mouse clicks</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [ninjaRightMouseClick](#ninjarightmouseclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.ninjaRightMouseClick(point[, delay]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a right mouse click, but returns the mouse to the original position without the users knowledge.                                                                     |
| **Parameters**                              | <ul><li>point - A point-table containing the absolute x and y co-ordinates to move the mouse pointer to</li><li>delay - The optional delay between multiple mouse clicks</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [numberToWord](#numbertoword)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.numberToWord(number) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts a number to a string (i.e. 1 becomes "One").                                                                     |
| **Parameters**                              | <ul><li>number - A whole number between 0 and 10</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [optionPressed](#optionpressed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.optionPressed() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Is the Option Key being pressed?                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the option key is being pressed, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [playErrorSound](#playerrorsound)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.playErrorSound() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Plays the "Funk" error sound.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [pressSystemKey](#presssystemkey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.pressSystemKey(key) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Virtually presses a system key.                                                                     |
| **Parameters**                              | <ul><li>key - The key to use.</li></ul> |
| **Returns**                                 | <ul><li>Supported key values are:</li><li> SOUND_UP</li><li> SOUND_DOWN</li><li> MUTE</li><li> BRIGHTNESS_UP</li><li> BRIGHTNESS_DOWN</li><li> CONTRAST_UP</li><li> CONTRAST_DOWN</li><li> POWER</li><li> LAUNCH_PANEL</li><li> VIDMIRROR</li><li> PLAY</li><li> EJECT</li><li> NEXT</li><li> PREVIOUS</li><li> FAST</li><li> REWIND</li><li> ILLUMINATION_UP</li><li> ILLUMINATION_DOWN</li><li> ILLUMINATION_TOGGLE</li><li> CAPS_LOCK</li><li> HELP</li><li> NUM_LOCK</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [readFromFile](#readfromfile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.readFromFile(path) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Read data from file.                                                                     |
| **Parameters**                              | <ul><li>path - The path of where you want to load the file.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [removeFilenameFromPath](#removefilenamefrompath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.removeFilenameFromPath(string) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes the filename from a path.                                                                     |
| **Parameters**                              | <ul><li>string - The path</li></ul> |
| **Returns**                                 | <ul><li>A string of the path without the filename.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [removeFromTable](#removefromtable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.removeFromTable(table, element) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes a string from a table of strings                                                                     |
| **Parameters**                              | <ul><li>table - the table you want to check</li><li>element - the string you want to remove</li></ul> |
| **Returns**                                 | <ul><li>A table</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [replace](#replace)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.replace(textValue, old, new) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A find and replace feature that doesn't use patterns.                                                                     |
| **Parameters**                              | <ul><li>textValue - The string you want to process</li><li>old - The string you want to find</li><li>new - The new string you want to replace the old string with</li></ul> |
| **Returns**                                 | <ul><li>A new string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [rescale](#rescale)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.rescale(value, inMin, inMax, outMin, outMax) -> number | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Takes an input, rescales it, and provides a new output.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to process as a number</li><li>inMin - The minimum value of the input as a number</li><li>inMax - The maximum value of the input as a number</li><li>outMin - The minimum value of the output as a number</li><li>outMax - The maximum value of the output as a number</li></ul> |
| **Returns**                                 | <ul><li>The rescaled value as a number or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [rightClick](#rightclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.rightClick(point[, delay, clickNumber]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a Right Mouse Click.                                                                     |
| **Parameters**                              | <ul><li>point - A point-table containing the absolute x and y co-ordinates to move the mouse pointer to</li><li>delay - The optional delay between multiple mouse clicks</li><li>clickNumber - The optional number of times you want to perform the click.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [rmdir](#rmdir)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.rmdir(path[, recursive]) -> true | nil, err`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Attempts to remove the directory at the specified path, optionally removing any contents recursively.                                                                     |
| **Parameters**                              | <ul><li>`path`        - The absolute path to remove</li><li>`recursive`   - If `true`, the contents of the directory will be removed first.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, or `nil, err` if there was a problem.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [round](#round)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.round(num, numDecimalPlaces) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Rounds a number to a set number of decimal places                                                                     |
| **Parameters**                              | <ul><li>num - The number you want to round</li><li>numDecimalPlaces - How many numbers of decimal places (defaults to 0)</li></ul> |
| **Returns**                                 | <ul><li>A rounded number</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [safeFilename](#safefilename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.safeFilename(value[, defaultValue]) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a Safe Filename.                                                                     |
| **Parameters**                              | <ul><li>value - a string you want to make safe</li><li>defaultValue - the optional default filename to use if the value is not valid</li></ul> |
| **Returns**                                 | <ul><li>A string of the safe filename</li></ul>          |
| **Notes**                                   | <ul><li>Returns "filename" is both `value` and `defaultValue` are `nil`.</li></ul> |

---


### [secureInputApplicationTitle](#secureinputapplicationtitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.secureInputApplicationTitle() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the title of the first application that has 'Secure Input' enabled.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The application title or `nil` if secure input is not enabled or failed to get a title.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [shiftPressed](#shiftpressed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.shiftPressed() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Is the Shift Key being pressed?                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the shift key is being pressed, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [spairs](#spairs)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.spairs(t, order) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A customised version of pairs, called `spairs` because it iterates over the table in a sorted order.                                                                     |
| **Parameters**                              | <ul><li>t     - The table to process</li><li>order - The function of how to sort the table.</li></ul> |
| **Returns**                                 | <ul><li>A iterator function.</li></ul>          |
| **Notes**                                   | <ul><li>Author: [Michal Kottman](https://stackoverflow.com/a/15706820)</li><li>Example Usage:</li><li>   ```lua</li><li>   for k,v in cp.tools.spairs(theTableToSort, function(t,a,b) return t[b] < t[a] end) do</li><li>      print(k,v)</li><li>   end</li><li>   ```</li></ul> |

---


### [split](#split)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.split(str, pat) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Splits a string with a pattern.                                                                     |
| **Parameters**                              | <ul><li>str - The string to split</li><li>pat - The pattern</li></ul> |
| **Returns**                                 | <ul><li>Table</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [splitOnColumn](#splitoncolumn)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.splitOnColumn() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Splits a string on a column.                                                                     |
| **Parameters**                              | <ul><li>Input</li></ul> |
| **Returns**                                 | <ul><li>String</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [startsWith](#startswith)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.startsWith(value, startValue) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a string starts with a value.                                                                     |
| **Parameters**                              | <ul><li>value - The value to check</li><li>startValue - The value to look for</li></ul> |
| **Returns**                                 | <ul><li>`true` if value starts with the startValue, otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [stringMaxLength](#stringmaxlength)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.stringMaxLength(string, maxLength[, optionalEnd]) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Trims a string based on a maximum length.                                                                     |
| **Parameters**                              | <ul><li>string - The string</li><li>maxLength - The length of the string as a number</li><li>optionalEnd - A string that is applied to the end of the input string if the input string is larger than the maximum length.</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [stringToHexString](#stringtohexstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.stringToHexString(value) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts a string to a hex string.                                                                     |
| **Parameters**                              | <ul><li>value - The string to convert</li></ul> |
| **Returns**                                 | <ul><li>A hex string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [tableContains](#tablecontains)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.tableContains(table, element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Does a element exist in a table?                                                                     |
| **Parameters**                              | <ul><li>table - the table you want to check</li><li>element - the element you want to check for</li></ul> |
| **Returns**                                 | <ul><li>Boolean</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [tableCount](#tablecount)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.tableCount(table) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns how many items are in a table.                                                                     |
| **Parameters**                              | <ul><li>table - The table you want to count.</li></ul> |
| **Returns**                                 | <ul><li>The number of items in the table.</li></ul>          |
| **Notes**                                   | <ul><li>If something other than a table is supplied, this function will return 0.</li></ul> |

---


### [tableFilter](#tablefilter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.tableFilter(t, matchFn) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Efficiently filters out all elements from the table `t` which to not match the `matchFn`.                                                                     |
| **Parameters**                              | <ul><li>t - The `table` to filter.</li><li>matchFn - A function which will receive the table, the current index, and the target index.</li></ul> |
| **Returns**                                 | <ul><li>The same table, updated.</li></ul>          |
| **Notes**                                   | <ul><li>This will modify the original table.</li></ul> |

---


### [tableMatch](#tablematch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.tableMatch(t1, t2[, ignoreMetatable]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Compares two tables.                                                                     |
| **Parameters**                              | <ul><li>t1 - The first table.</li><li>t2 - The second table.</li><li>ignoreMetatable - A boolean that determines whether or not we should ignore the metatable.</li></ul> |
| **Returns**                                 | <ul><li>`true` if `t1` and `t2` are identical, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [toRegionalNumber](#toregionalnumber)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.toRegionalNumber(value) -> number | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Takes a string and converts it into a number, with the correct regional decimal separator.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to process as a string.</li></ul> |
| **Returns**                                 | <ul><li>The value as a number or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [toRegionalNumberString](#toregionalnumberstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.toRegionalNumberString(value) -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Takes a number and converts it into a string, with the correct regional decimal separator.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to process as a number.</li></ul> |
| **Returns**                                 | <ul><li>The value as a number or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [trim](#trim)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.trim(string) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Trims the whitespaces from a string                                                                     |
| **Parameters**                              | <ul><li>string - the string you want to trim</li></ul> |
| **Returns**                                 | <ul><li>A trimmed string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [unescape](#unescape)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.unescape(str) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes any URL encoding in the provided string.                                                                     |
| **Parameters**                              | <ul><li>str - the string to decode</li></ul> |
| **Returns**                                 | <ul><li>A string with all "+" characters converted to spaces and all percent encoded sequences converted to their ASCII equivalents.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [upper](#upper)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.upper(str) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts the supplied string to uppercase.                                                                     |
| **Parameters**                              | <ul><li>str - The string you want to manipulate</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [urlQueryStringDecode](#urlquerystringdecode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.urlQueryStringDecode() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Decodes a URL Query String                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Decoded URL Query String as string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [urlToFilename](#urltofilename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.urlToFilename(url) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts a URL to a filename.                                                                     |
| **Parameters**                              | <ul><li>url - The URL.</li></ul> |
| **Returns**                                 | <ul><li>The filename.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [volumeFormat](#volumeformat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.volumeFormat(path) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gives you the file system volume format of a path.                                                                     |
| **Parameters**                              | <ul><li>path - the path you want to check as a string</li></ul> |
| **Returns**                                 | <ul><li>The `NSURLVolumeLocalizedFormatDescriptionKey` as a string, otherwise `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [writeToFile](#writetofile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.tools.writeToFile(path, data) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Write data to a file at a given path.                                                                     |
| **Parameters**                              | <ul><li>path - The path to the file you want to write to.</li><li>data - The data to write to the file.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


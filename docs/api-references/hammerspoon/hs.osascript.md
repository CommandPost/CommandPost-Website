# hs.osascript

Execute Open Scripting Architecture (OSA) code - AppleScript and JavaScript


## API Overview
* Functions - API calls offered directly by the extension
 * [_osascript](#_osascript)
 * [applescript](#applescript)
 * [applescriptFromFile](#applescriptFromFile)
 * [javascript](#javascript)
 * [javascriptFromFile](#javascriptFromFile)

## API Documentation

### Functions


### [_osascript](#_osascript)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osascript._osascript(source, language) -> bool, object, descriptor`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Runs osascript code                                                                     |
| **Parameters**                              | <ul><li>source - Some osascript code to execute</li><li>language - A string containing the OSA language, either 'AppleScript' or 'JavaScript'. Defaults to AppleScript if invalid language</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether the code succeeded or not</li><li>An object containing the parsed output that can be any type, or nil if unsuccessful</li><li>A string containing the raw output of the code and/or its errors</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [applescript](#applescript)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osascript.applescript(source) -> bool, object, descriptor`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Runs AppleScript code                                                                     |
| **Parameters**                              | <ul><li>source - A string containing some AppleScript code to execute</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether the code succeeded or not</li><li>An object containing the parsed output that can be any type, or nil if unsuccessful</li><li>If the code succeeded, the raw output of the code string. If the code failed, a table containing an error dictionary</li></ul>          |
| **Notes**                                   | <ul><li>Use hs.osascript._osascript(source, "AppleScript") if you always want the result as a string, even when a failure occurs</li></ul>                |

---

### [applescriptFromFile](#applescriptFromFile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osascript.applescriptFromFile(fileName) -> bool, object, descriptor`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Runs AppleScript code from a source file.                                                                     |
| **Parameters**                              | <ul><li>fileName - A string containing the file name of an AppleScript file to execute.</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether the code succeeded or not</li><li>An object containing the parsed output that can be any type, or nil if unsuccessful</li><li>If the code succeeded, the raw output of the code string. If the code failed, a table containing an error dictionary</li></ul>          |
| **Notes**                                   | <ul><li>This function uses hs.osascript.applescript for execution.</li><li>Use hs.osascript._osascript(source, "AppleScript") if you always want the result as a string, even when a failure occurs. However, this function can only take a string, and not a file name.</li></ul>                |

---

### [javascript](#javascript)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osascript.javascript(source) -> bool, object, descriptor`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Runs JavaScript code                                                                     |
| **Parameters**                              | <ul><li>source - A string containing some JavaScript code to execute</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether the code succeeded or not</li><li>An object containing the parsed output that can be any type, or nil if unsuccessful</li><li>If the code succeeded, the raw output of the code string. If the code failed, a table containing an error dictionary</li></ul>          |
| **Notes**                                   | <ul><li>Use hs.osascript._osascript(source, "JavaScript") if you always want the result as a string, even when a failure occurs</li></ul>                |

---

### [javascriptFromFile](#javascriptFromFile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osascript.javascriptFromFile(fileName) -> bool, object, descriptor`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Runs JavaScript code from a source file.                                                                     |
| **Parameters**                              | <ul><li>fileName - A string containing the file name of an JavaScript file to execute.</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether the code succeeded or not</li><li>An object containing the parsed output that can be any type, or nil if unsuccessful</li><li>If the code succeeded, the raw output of the code string. If the code failed, a table containing an error dictionary</li></ul>          |
| **Notes**                                   | <ul><li>This function uses hs.osascript.javascript for execution.</li><li>Use hs.osascript._osascript(source, "JavaScript") if you always want the result as a string, even when a failure occurs. However, this function can only take a string, and not a file name.</li></ul>                |

---

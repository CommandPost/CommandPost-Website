# hs.appfinder

Easily find `hs.application` and `hs.window` objects

This module is *deprecated*; you can use `hs.window.find()`, `hs.window.get()`, `hs.application.find()`,
`hs.application.get()`, `hs.application:findWindow()` and `hs.application:getWindow()` instead.

## API Overview
* Functions - API calls offered directly by the extension
 * [appFromName](#appfromname)
 * [appFromWindowTitle](#appfromwindowtitle)
 * [appFromWindowTitlePattern](#appfromwindowtitlepattern)
 * [windowFromWindowTitle](#windowfromwindowtitle)
 * [windowFromWindowTitlePattern](#windowfromwindowtitlepattern)

## API Documentation

### Functions


### [appFromName](#appfromname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.appfinder.appFromName(name) -> app or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds an application by its name (e.g. "Safari")                                                                     |
| **Parameters**                              | <ul><li>name - A string containing the name of the application to search for</li></ul> |
| **Returns**                                 | <ul><li>An hs.application object if one can be found, otherwise nil</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [appFromWindowTitle](#appfromwindowtitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.appfinder.appFromWindowTitle(title) -> app or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds an application by its window title (e.g. "Activity Monitor (All Processes)")                                                                     |
| **Parameters**                              | <ul><li>title - A string containing a window title of the application to search for</li></ul> |
| **Returns**                                 | <ul><li>An hs.application object if one can be found, otherwise nil</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [appFromWindowTitlePattern](#appfromwindowtitlepattern)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.appfinder.appFromWindowTitlePattern(pattern) -> app or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds an application by Lua pattern in its window title (e.g."Inbox %(%d+ messages.*)")                                                                     |
| **Parameters**                              | <ul><li>pattern - a Lua pattern describing a window title of the application to search for</li></ul> |
| **Returns**                                 | <ul><li>An hs.application object if one can be found, otherwise nil</li></ul>          |
| **Notes**                                   | <ul><li>For more about Lua patterns, see http://lua-users.org/wiki/PatternsTutorial and http://www.lua.org/manual/5.2/manual.html#6.4.1</li></ul>                |

---

### [windowFromWindowTitle](#windowfromwindowtitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.appfinder.windowFromWindowTitle(title) -> win or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds a window by its title (e.g. "Activity Monitor (All Processes)")                                                                     |
| **Parameters**                              | <ul><li>title - A string containing the title of the window to search for</li></ul> |
| **Returns**                                 | <ul><li>An hs.window object if one can be found, otherwise nil</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [windowFromWindowTitlePattern](#windowfromwindowtitlepattern)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.appfinder.windowFromWindowTitlePattern(pattern) -> app or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds a window by Lua pattern in its title (e.g."Inbox %(%d+ messages.*)")                                                                     |
| **Parameters**                              | <ul><li>pattern - a Lua pattern describing a window title of the window to search for</li></ul> |
| **Returns**                                 | <ul><li>An hs.window object if one can be found, otherwise nil</li></ul>          |
| **Notes**                                   | <ul><li>For more about Lua patterns, see http://lua-users.org/wiki/PatternsTutorial and http://www.lua.org/manual/5.2/manual.html#6.4.1</li></ul>                |

---

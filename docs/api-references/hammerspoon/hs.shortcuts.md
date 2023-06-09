# hs.shortcuts

List and run shortcuts from the Shortcuts app

Separate from this extension, Hammerspoon provides an action for use in the Shortcuts app.
The action is called "Execute Lua" and if it is passed a text block of valid Lua, it will execute that Lua within Hammerspoon.
You can use this action to call functions defined in your `init.lua` or to just execute chunks of Lua.

Your functions/chunks can return text, which will be returned by the action in Shortcuts.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [list](#list)
 * [run](#run)


---

## API Documentation

#### Functions


### [list](#list)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.shortcuts.list() -> []`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a list of available shortcuts                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of shortcuts, each being a table with the following keys:</li><li> name - The name of the shortcut</li><li> id - A unique ID for the shortcut</li><li> acceptsInput - A boolean indicating if the shortcut requires input</li><li> actionCount - A number relating to how many actions are in the shortcut</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/shortcuts/libshortcuts.m line 16](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/shortcuts/libshortcuts.m#L16){target="_blank"} |

---


### [run](#run)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.shortcuts.run(name)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Execute a Shortcuts shortcut by name                                                                     |
| **Parameters**                              | <ul><li>name - A string containing the name of the Shortcut to execute</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/shortcuts/libshortcuts.m line 50](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/shortcuts/libshortcuts.m#L50){target="_blank"} |

---


# hs.spoons

Utility and management functions for Spoons
Spoons are Lua plugins for Hammerspoon.
See https://www.hammerspoon.org/Spoons/ for more information

## API Overview
* Functions - API calls offered directly by the extension
 * [bindHotkeysToSpec](#bindHotkeysToSpec)
 * [isInstalled](#isInstalled)
 * [isLoaded](#isLoaded)
 * [list](#list)
 * [newSpoon](#newSpoon)
 * [resourcePath](#resourcePath)
 * [scriptPath](#scriptPath)
 * [use](#use)

## API Documentation

### Functions


### [bindHotkeysToSpec](#bindHotkeysToSpec)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spoons.bindHotkeysToSpec(def, map) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Map a number of hotkeys according to a definition table                                                                     |
| **Parameters**                              | <ul><li>def - table containing name-to-function definitions for the hotkeys supported by the Spoon. Each key is a hotkey name, and its value must be a function that will be called when the hotkey is invoked.</li><li>map - table containing name-to-hotkey definitions and an optional message to be displayed via `hs.alert()` when the hotkey has been triggered, as supported by [bindHotkeys in the Spoon API](https://github.com/Hammerspoon/hammerspoon/blob/master/SPOONS.md#hotkeys). Not all the entries in `def` must be bound, but if any keys in `map` don't have a definition, an error will be produced.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isInstalled](#isInstalled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spoons.isInstalled(name) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if a given Spoon is installed.                                                                     |
| **Parameters**                              | <ul><li>name - Name of the Spoon to check.</li></ul> |
| **Returns**                                 | <ul><li>If the Spoon is installed, it returns a table with the Spoon information as returned by `list()`. Returns `nil` if the Spoon is not installed.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isLoaded](#isLoaded)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spoons.isLoaded(name) -> boolean | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if a given Spoon is loaded.                                                                     |
| **Parameters**                              | <ul><li>name - Name of the Spoon to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the Spoon is loaded, `nil` otherwise.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [list](#list)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spoons.list() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Return a list of installed/loaded Spoons                                                                     |
| **Parameters**                              | <ul><li>onlyLoaded - only return loaded Spoons (skips those that are installed but not loaded). Defaults to `false`</li></ul> |
| **Returns**                                 | <ul><li>Table with a list of installed/loaded spoons (depending on the value of `onlyLoaded`). Each entry is a table with the following entries:</li><li>  `name` - Spoon name</li><li>  `loaded` - boolean indication of whether the Spoon is loaded (`true`) or only installed (`false`)</li><li>  `version` - Spoon version number. Available only for loaded Spoons.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [newSpoon](#newSpoon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spoons.newSpoon(name, basedir, metadata, [template]) -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Create a skeleton for a new Spoon                                                                     |
| **Parameters**                              | <ul><li>name: name of the new spoon, without the `.spoon` extension</li><li>basedir: (optional) directory where to create the template. Defaults to `~/.hammerspoon/Spoons`</li><li>metadata: (optional) table containing metadata values to be inserted in the template. Provided values are merged with the defaults. Defaults to: ``` { version = "0.1", author = "Your Name <your@email.org>", homepage = "https://github.com/Hammerspoon/Spoons", license = "MIT - https://opensource.org/licenses/MIT", download_url = "https://github.com/Hammerspoon/Spoons/raw/master/Spoons/"..name..".spoon.zip" } ```</li><li>template: (optional) absolute path of the template to use for the `init.lua` file of the new Spoon. Defaults to the `templates/init.tpl` file included with Hammerspoon.</li></ul> |
| **Returns**                                 | <ul><li>The full directory path where the template was created, or `nil` if there was an error.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [resourcePath](#resourcePath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spoons.resourcePath(partial) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Return full path of an object within a spoon directory, given its partial path.                                                                     |
| **Parameters**                              | <ul><li>partial - path of a file relative to the Spoon directory. For example `images/img1.png` will refer to a file within the `images` directory of the Spoon.</li></ul> |
| **Returns**                                 | <ul><li>Absolute path of the file. Note: no existence or other checks are done on the path.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scriptPath](#scriptPath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spoons.scriptPath([n]) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Return path of the current spoon.                                                                     |
| **Parameters**                              | <ul><li>n - (optional) stack level for which to get the path. Defaults to 2, which will return the path of the spoon which called `scriptPath()`</li></ul> |
| **Returns**                                 | <ul><li>String with the path from where the calling code was loaded.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [use](#use)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spoons.use(name, arg, [noerror]) -> boolean | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Declaratively load and configure a Spoon                                                                     |
| **Parameters**                              | <ul><li>name - the name of the Spoon to load (without the `.spoon` extension).</li><li>arg - if provided, can be used to specify the configuration of the Spoon. The following keys are recognized (all are optional):
  config - a table containing variables to be stored in the Spoon object to configure it. For example, `config = { answer = 42 }` will result in `spoon.<LoadedSpoon>.answer` being set to 42.
  hotkeys - a table containing hotkey bindings. If provided, will be passed as-is to the Spoon's `bindHotkeys()` method. The special string `"default"` can be given to use the Spoons `defaultHotkeys` variable, if it exists.
  fn - a function which will be called with the freshly-loaded Spoon object as its first argument.
  loglevel - if the Spoon has a variable called `logger`, its `setLogLevel()` method will be called with this value.
  start - if `true`, call the Spoon's `start()` method after configuring everything else.</li><li>noerror - if `true`, don't log an error if the Spoon is not installed, simply return `nil`.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the spoon was loaded, `nil` otherwise</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

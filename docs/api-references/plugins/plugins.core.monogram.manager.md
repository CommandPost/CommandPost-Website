# plugins.core.monogram.manager

Monogram Manager Plugin.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [NUMBER_OF_FAVOURITES](#number_of_favourites)

**Variables** - _Configurable values_
 * [favourites](#favourites)
 * [lastPort](#lastport)
 * [performAction](#performaction)
 * [plugins](#plugins)

**Functions** - _API calls offered directly by the extension_
 * [changeContext](#changecontext)
 * [launchCreatorBundle](#launchcreatorbundle)
 * [registerAction](#registeraction)
 * [registerPlugin](#registerplugin)
 * [setEnabled](#setenabled)
 * [sign](#sign)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [automaticProfileSwitching](#automaticprofileswitching)
 * [enabled](#enabled)


---

## API Documentation

#### Constants


### [NUMBER_OF_FAVOURITES](#number_of_favourites)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.NUMBER_OF_FAVOURITES -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Number of favourites                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/monogram/manager/init.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/monogram/manager/init.lua#L47) |

---

#### Variables


### [favourites](#favourites)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.favourites <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A `cp.prop` that that contains all the Monogram Favourites.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/monogram/manager/init.lua line 52](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/monogram/manager/init.lua#L52) |

---


### [lastPort](#lastport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.lastPort -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The port that Monogram Creator used to connect to CommandPost.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/monogram/manager/init.lua line 57](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/monogram/manager/init.lua#L57) |

---


### [performAction](#performaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.performAction -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of actions that are triggered by the callback function.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/monogram/manager/init.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/monogram/manager/init.lua#L93) |

---


### [plugins](#plugins)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.plugins -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of Monogram plugins to install.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/monogram/manager/init.lua line 98](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/monogram/manager/init.lua#L98) |

---

#### Functions


### [changeContext](#changecontext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.changeContext(context) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Switches the Monogram Profile.                                                                     |
| **Parameters**                              | <ul><li>context - The name of the context you want to switch to.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/monogram/manager/init.lua line 282](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/monogram/manager/init.lua#L282) |

---


### [launchCreatorBundle](#launchcreatorbundle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.launchCreatorBundle() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Launch the Monogram Creator.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/monogram/manager/init.lua line 174](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/monogram/manager/init.lua#L174) |

---


### [registerAction](#registeraction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.registerAction(name, fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Monogram Action.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the plugin.</li><li>fn - The function to trigger.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/monogram/manager/init.lua line 117](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/monogram/manager/init.lua#L117) |

---


### [registerPlugin](#registerplugin)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.registerPlugin(name, path) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Monogram plugin.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the plugin.</li><li>path - The path to the folder containing the plugin.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/monogram/manager/init.lua line 103](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/monogram/manager/init.lua#L103) |

---


### [setEnabled](#setenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.setEnabled(enabled) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables or disables Monogram Support.                                                                     |
| **Parameters**                              | <ul><li>enabled - A boolean</li></ul> |
| **Returns**                                 | <ul><li>`true` if Monogram support is enabled, otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/monogram/manager/init.lua line 262](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/monogram/manager/init.lua#L262) |

---


### [sign](#sign)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.sign() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Signs all the Monogram Integrations.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/monogram/manager/init.lua line 304](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/monogram/manager/init.lua#L304) |

---

#### Fields


### [automaticProfileSwitching](#automaticprofileswitching)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.automaticProfileSwitching <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable Automatic Profile Switching                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/monogram/manager/init.lua line 257](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/monogram/manager/init.lua#L257) |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable Monogram Support.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/monogram/manager/init.lua line 243](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/monogram/manager/init.lua#L243) |

---


# plugins.core.tangent.manager

Tangent Control Surface Manager

This plugin allows CommandPost to communicate with Tangent's range of
panels (Element, Virtual Element Apps, Wave, Ripple and any future panels).

Download the Tangent Developer Support Pack & Tangent Hub Installer for Mac
here: http://www.tangentwave.co.uk/developer-support

---

## Submodules
 * [plugins.core.tangent.manager.action](plugins.core.tangent.manager.action.md)
 * [plugins.core.tangent.manager.binding](plugins.core.tangent.manager.binding.md)
 * [plugins.core.tangent.manager.connection](plugins.core.tangent.manager.connection.md)
 * [plugins.core.tangent.manager.controls](plugins.core.tangent.manager.controls.md)
 * [plugins.core.tangent.manager.group](plugins.core.tangent.manager.group.md)
 * [plugins.core.tangent.manager.menu](plugins.core.tangent.manager.menu.md)
 * [plugins.core.tangent.manager.mode](plugins.core.tangent.manager.mode.md)
 * [plugins.core.tangent.manager.named](plugins.core.tangent.manager.named.md)
 * [plugins.core.tangent.manager.parameter](plugins.core.tangent.manager.parameter.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [APPLICATION_NAME_SUFFIX](#application_name_suffix)
 * [MAXIMUM_CONNECTIONS](#maximum_connections)
 * [NUMBER_OF_FAVOURITES](#number_of_favourites)
 * [USER_CONTROL_MAPS_FOLDER](#user_control_maps_folder)

**Variables** - _Configurable values_
 * [applicationNameToGroupID](#applicationnametogroupid)
 * [customApplications](#customapplications)
 * [enabled](#enabled)
 * [tangentHubInstalled](#tangenthubinstalled)
 * [tangentMapperInstalled](#tangentmapperinstalled)

**Functions** - _API calls offered directly by the extension_
 * [applicationNames](#applicationnames)
 * [getConnection](#getconnection)
 * [launchTangentMapper](#launchtangentmapper)
 * [newConnection](#newconnection)
 * [registerCustomApplication](#registercustomapplication)
 * [removeCustomApplication](#removecustomapplication)
 * [setupCustomApplications](#setupcustomapplications)


---

## API Documentation

#### Constants


### [APPLICATION_NAME_SUFFIX](#application_name_suffix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.APPLICATION_NAME_SUFFIX -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A suffix applied to the end of Application Names as they appear in Tangent Mapper                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L41) |

---


### [MAXIMUM_CONNECTIONS](#maximum_connections)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.MAXIMUM_CONNECTIONS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Maximum number of socket connections to Tangent Hub.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 56](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L56) |

---


### [NUMBER_OF_FAVOURITES](#number_of_favourites)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.NUMBER_OF_FAVOURITES -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Maximum number of favourites.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 51](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L51) |

---


### [USER_CONTROL_MAPS_FOLDER](#user_control_maps_folder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.USER_CONTROL_MAPS_FOLDER -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The full name for storing User Control Maps                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L46) |

---

#### Variables


### [applicationNameToGroupID](#applicationnametogroupid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.applicationNameToGroupID -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table to translate an Application Name to a Group ID for the Search Console                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 71](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L71) |

---


### [customApplications](#customapplications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.customApplications <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of Custom Applications                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L61) |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Enable or disables the Tangent Manager.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 104](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L104) |

---


### [tangentHubInstalled](#tangenthubinstalled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.tangentHubInstalled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Tangent Hub Installed?                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 76](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L76) |

---


### [tangentMapperInstalled](#tangentmapperinstalled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.tangentMapperInstalled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Tangent Mapper Installed?                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 83](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L83) |

---

#### Functions


### [applicationNames](#applicationnames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.applicationNames() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table listing all the connections application names.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the names of all the registered connections.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 170](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L170) |

---


### [getConnection](#getconnection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.getConnection(applicationName) -> connection`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a Tangent connection object.                                                                     |
| **Parameters**                              | <ul><li>applicationName - Your application name as a string</li></ul> |
| **Returns**                                 | <ul><li>The connection object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 157](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L157) |

---


### [launchTangentMapper](#launchtangentmapper)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.launchTangentMapper() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Launches the Tangent Mapper.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 91](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L91) |

---


### [newConnection](#newconnection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.newConnection(applicationName, systemPath, userPath, task, pluginPath, addDefaultModes, setupFn, transportFn, groupID) -> connection`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Tangent Connection                                                                     |
| **Parameters**                              | <ul><li>applicationName - The application name as a string. This is what appears in CommandPost Preferences.</li><li>systemPath - A string containing the absolute path of the directory that contains the Controls and Default Map XML files.</li><li>userPath - An optional string containing the absolute path of the directory that contains the User’s Default Map XML files.</li><li>task - An optional string containing the name of the task associated with the application.</li><li>pluginPath - A string containing the absolute path of the directory that contains the built-in Default Map XML files.</li><li>addDefaultModes - A boolean which indicates whether or not CommandPost should add any default modes.</li><li>setupFn - Setup function.</li><li>transportFn - Transport function.</li><li>groupID - The group ID used by the Search Console.</li></ul> |
| **Returns**                                 | <ul><li>The connection object</li></ul>          |
| **Notes**                                   | <ul><li>Notes for the `task` parameter:</li><li>  ** This is used to assist with automatic switching of panels when your application gains mouse focus on the GUI.</li><li>  ** This parameter should only be required if the string passed in appStr does not match the Task name that the OS identifies as your application. Typically, this is only usually required for Plugins which run within a parent Host application. Under these circumstances it is the name of the Host Application’s Task which should be passed.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 122](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L122) |

---


### [registerCustomApplication](#registercustomapplication)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.registerCustomApplication(applicationName, bundleExecutable) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Custom Application                                                                     |
| **Parameters**                              | <ul><li>applicationName - The display name of the custom application</li><li>bundleExecutable - The bundle executable identifier of the custom application</li></ul> |
| **Returns**                                 | <ul><li>A table where the application name is the key, and display name is the value.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 188](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L188) |

---


### [removeCustomApplication](#removecustomapplication)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.removeCustomApplication(applicationName) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes a Custom Application.                                                                     |
| **Parameters**                              | <ul><li>applicationName - The display name of the Custom Application to Remove.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 212](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L212) |

---


### [setupCustomApplications](#setupcustomapplications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.setupCustomApplications() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Setup the Custom Applications.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 243](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L243) |

---


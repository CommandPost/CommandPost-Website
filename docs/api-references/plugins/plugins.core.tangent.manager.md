# plugins.core.tangent.manager

Tangent Control Surface Manager

This plugin allows CommandPost to communicate with Tangent's range of
panels (Element, Virtual Element Apps, Wave, Ripple and any future panels).

Download the Tangent Developer Support Pack & Tangent Hub Installer for Mac
here: http://www.tangentwave.co.uk/developer-support

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

## API Overview
* Constants - Useful values which cannot be changed
 * [APPLICATION_NAME_SUFFIX](#APPLICATION_NAME_SUFFIX)
 * [MAXIMUM_CONNECTIONS](#MAXIMUM_CONNECTIONS)
 * [NUMBER_OF_FAVOURITES](#NUMBER_OF_FAVOURITES)
 * [USER_CONTROL_MAPS_FOLDER](#USER_CONTROL_MAPS_FOLDER)
* Variables - Configurable values
 * [applicationNameToGroupID](#applicationNameToGroupID)
 * [customApplications](#customApplications)
 * [enabled](#enabled)
 * [tangentHubInstalled](#tangentHubInstalled)
 * [tangentMapperInstalled](#tangentMapperInstalled)
* Functions - API calls offered directly by the extension
 * [applicationNames](#applicationNames)
 * [getConnection](#getConnection)
 * [launchTangentMapper](#launchTangentMapper)
 * [newConnection](#newConnection)
 * [registerCustomApplication](#registerCustomApplication)
 * [removeCustomApplication](#removeCustomApplication)
 * [setupCustomApplications](#setupCustomApplications)

## API Documentation

### Constants

| [APPLICATION_NAME_SUFFIX](#APPLICATION_NAME_SUFFIX)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.APPLICATION_NAME_SUFFIX -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A suffix applied to the end of Application Names as they appear in Tangent Mapper                                                                     |

| [MAXIMUM_CONNECTIONS](#MAXIMUM_CONNECTIONS)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.MAXIMUM_CONNECTIONS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Maximum number of socket connections to Tangent Hub.                                                                     |

| [NUMBER_OF_FAVOURITES](#NUMBER_OF_FAVOURITES)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.NUMBER_OF_FAVOURITES -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Maximum number of favourites.                                                                     |

| [USER_CONTROL_MAPS_FOLDER](#USER_CONTROL_MAPS_FOLDER)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.USER_CONTROL_MAPS_FOLDER -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The full name for storing User Control Maps                                                                     |

### Variables

| [applicationNameToGroupID](#applicationNameToGroupID)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.applicationNameToGroupID -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table to translate an Application Name to a Group ID for the Search Console                                                                     |

| [customApplications](#customApplications)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.customApplications <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of Custom Applications                                                                     |

| [enabled](#enabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Enable or disables the Tangent Manager.                                                                     |

| [tangentHubInstalled](#tangentHubInstalled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.tangentHubInstalled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Tangent Hub Installed?                                                                     |

| [tangentMapperInstalled](#tangentMapperInstalled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.tangentMapperInstalled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Tangent Mapper Installed?                                                                     |

### Functions

| [applicationNames](#applicationNames)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.applicationNames() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table listing all the connections application names.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the names of all the registered connections.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getConnection](#getConnection)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.getConnection(applicationName) -> connection`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a Tangent connection object.                                                                     |
| **Parameters**                              | <ul><li>applicationName - Your application name as a string</li></ul> |
| **Returns**                                 | <ul><li>The connection object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [launchTangentMapper](#launchTangentMapper)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.launchTangentMapper() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Launches the Tangent Mapper.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [newConnection](#newConnection)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.newConnection(applicationName, systemPath, userPath, task, pluginPath, addDefaultModes, setupFn, transportFn, groupID) -> connection`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Tangent Connection                                                                     |
| **Parameters**                              | <ul><li>applicationName - The application name as a string. This is what appears in CommandPost Preferences.</li><li>systemPath - A string containing the absolute path of the directory that contains the Controls and Default Map XML files.</li><li>userPath - An optional string containing the absolute path of the directory that contains the User’s Default Map XML files.</li><li>task - An optional string containing the name of the task associated with the application.</li><li>pluginPath - A string containing the absolute path of the directory that contains the built-in Default Map XML files.</li><li>addDefaultModes - A boolean which indicates whether or not CommandPost should add any default modes.</li><li>setupFn - Setup function.</li><li>transportFn - Transport function.</li><li>groupID - The group ID used by the Search Console.</li></ul> |
| **Returns**                                 | <ul><li>The connection object</li></ul>          |
| **Notes**                                   | <ul><li>Notes for the `task` parameter:</li><li>  ** This is used to assist with automatic switching of panels when your application gains mouse focus on the GUI.</li><li>  ** This parameter should only be required if the string passed in appStr does not match the Task name that the OS identifies as your application. Typically, this is only usually required for Plugins which run within a parent Host application. Under these circumstances it is the name of the Host Application’s Task which should be passed.</li></ul>                |

| [registerCustomApplication](#registerCustomApplication)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.registerCustomApplication(applicationName, bundleExecutable) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Custom Application                                                                     |
| **Parameters**                              | <ul><li>applicationName - The display name of the custom application</li><li>bundleExecutable - The bundle executable identifier of the custom application</li></ul> |
| **Returns**                                 | <ul><li>A table where the application name is the key, and display name is the value.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [removeCustomApplication](#removeCustomApplication)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.removeCustomApplication(applicationName) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes a Custom Application.                                                                     |
| **Parameters**                              | <ul><li>applicationName - The display name of the Custom Application to Remove.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setupCustomApplications](#setupCustomApplications)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.setupCustomApplications() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Setup the Custom Applications.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

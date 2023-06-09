# plugins.core.tangent.manager.connection

Represents a Tangent Connection.

---

## API Overview
**Variables** - _Configurable values_
 * [connections](#connections)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [connection](#connection)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [addMode](#addmode)
 * [applicationName](#applicationname)
 * [device](#device)
 * [displayName](#displayname)
 * [getControlsXML](#getcontrolsxml)
 * [getMode](#getmode)
 * [pluginPath](#pluginpath)
 * [setupTangentConnection](#setuptangentconnection)
 * [systemPath](#systempath)
 * [task](#task)
 * [update](#update)
 * [updateControls](#updatecontrols)
 * [updateFavourites](#updatefavourites)
 * [userPath](#userpath)
 * [writeControlsXML](#writecontrolsxml)


---

## API Documentation

#### Variables


### [connections](#connections)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connections -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table containing all the Tangent connections.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/plugins/core/tangent/manager/init.lua line 66](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/init.lua#L66) |

---

#### Constructors


### [connection](#connection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection(applicationName, displayName, systemPath, userPath, task, pluginPath, addDefaultModes, setupFn, transportFn, manager) -> Connection object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Connection` object.                                                                     |
| **Parameters**                              | <ul><li>applicationName - The application name as a string. This is what appears in Tangent Mapper.</li><li>displayName - The application display name as a string. This is what appears in CommandPost.</li><li>systemPath - A string containing the absolute path of the directory that contains the Controls and Default Map XML files.</li><li>userPath - An optional string containing the absolute path of the directory that contains the User’s Default Map XML files.</li><li>task - An optional string containing the name of the task associated with the application.</li><li>pluginPath - A string containing the absolute path of the directory that contains the built-in Default Map XML files.</li><li>addDefaultModes - A boolean which indicates whether or not CommandPost should add any default modes.</li><li>setupFn - Setup function.</li><li>transportFn - Transport function.</li><li>manager - The Tangent Manager module</li></ul> |
| **Returns**                                 | <ul><li>A new Connection object.</li></ul>          |
| **Notes**                                   | <ul><li>Notes for the `task` parameter:</li><li>  ** This is used to assist with automatic switching of panels when your application gains mouse focus on the GUI.</li><li>  ** This parameter should only be required if the string passed in appStr does not match the Task name that the OS identifies as your application. Typically, this is only usually required for Plugins which run within a parent Host application. Under these circumstances it is the name of the Host Application’s Task which should be passed.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 490](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L490) |

---

#### Methods


### [addMode](#addmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:addMode(id, name) -> plugins.core.tangent.manager.mode`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a new `mode` with the specified details and returns it.                                                                     |
| **Parameters**                              | <ul><li>id            - The id number of the Mode.</li><li>name          - The name of the Mode.</li></ul> |
| **Returns**                                 | <ul><li>The new `mode`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 431](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L431) |

---


### [applicationName](#applicationname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:applicationName() -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the application name.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The application name as a string.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 379](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L379) |

---


### [device](#device)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:device() -> hs.tangent`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the `hs.tangent` object for the connnection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `hs.tangent` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 710](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L710) |

---


### [displayName](#displayname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:displayName() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the display name for the connnection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 723](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L723) |

---


### [getControlsXML](#getcontrolsxml)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:getControlsXML() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the controls XML.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The XML controls</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 314](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L314) |

---


### [getMode](#getmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:getMode(id) -> plugins.core.tangent.manager.mode`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `mode` with the specified ID, or `nil`.                                                                     |
| **Parameters**                              | <ul><li>id    - The ID to find.</li></ul> |
| **Returns**                                 | <ul><li>The `mode`, or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 448](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L448) |

---


### [pluginPath](#pluginpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:pluginPath() -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the plugin path.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The plugin path as a string.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 418](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L418) |

---


### [setupTangentConnection](#setuptangentconnection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:setupTangentConnection() -> hs.tangent`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets up a new Tangent Connection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `hs.tangent` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L47) |

---


### [systemPath](#systempath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:systemPath() -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the system path.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The system path as a string.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 366](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L366) |

---


### [task](#task)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:task() -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the task.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The task as a string.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 405](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L405) |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:update() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Updates the Tangent GUIs.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 692](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L692) |

---


### [updateControls](#updatecontrols)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:updateControls() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Update Controls.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 466](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L466) |

---


### [updateFavourites](#updatefavourites)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:updateFavourites() -> boolean, string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Updates the Favourites.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 221](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L221) |

---


### [userPath](#userpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:userPath() -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the user path.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The user path as a string.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 392](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L392) |

---


### [writeControlsXML](#writecontrolsxml)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.connection:writeControlsXML() -> boolean, string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Writes the Tangent controls.xml File to the User's Application Support folder.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successfully created otherwise `false` if an error occurred.</li><li>If an error occurs an error message will also be returned as a string.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/plugins/core/tangent/manager/connection.lua line 266](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/tangent/manager/connection.lua#L266) |

---


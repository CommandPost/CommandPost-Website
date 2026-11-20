# plugins.core.application.manager

Application manager.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [defaultSearchConsoleToolbar](#defaultsearchconsoletoolbar)
 * [getApplications](#getapplications)
 * [getSearchConsoleToolbar](#getsearchconsoletoolbar)
 * [registerApplication](#registerapplication)


---

## API Documentation

#### Functions


### [defaultSearchConsoleToolbar](#defaultsearchconsoletoolbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.application.manager.defaultSearchConsoleToolbar() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the default search toolbar data.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/application/manager.lua line 70](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/application/manager.lua#L70) |

---


### [getApplications](#getapplications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.application.manager.getApplications() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets all the registered applications.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of all the registered applications.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/application/manager.lua line 44](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/application/manager.lua#L44) |

---


### [getSearchConsoleToolbar](#getsearchconsoletoolbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.application.manager.getSearchConsoleToolbar(bundleID) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the Search Console Toolbar data for a specific bundle ID.                                                                     |
| **Parameters**                              | <ul><li>bundleID - The bundle ID of the application you want to get.</li></ul> |
| **Returns**                                 | <ul><li>A table of the Search Sonole Toolbar data for the specified application.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/application/manager.lua line 57](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/application/manager.lua#L57) |

---


### [registerApplication](#registerapplication)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.application.manager.registerApplication(data) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new application.                                                                     |
| **Parameters**                              | <ul><li>data - A table containing the information to register.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>The data table should contain:</li><li> displayName - The display name of the application</li><li> bundleID - The bundle ID of the application</li><li> searchConsoleToolbar - A table containing the Search Console Toolbar information</li><li> legacyGroupID - A string containing the legacy group ID (i.e. "fcpx")</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/application/manager.lua line 20](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/application/manager.lua#L20) |

---


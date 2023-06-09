# cp.docs

Documentation Tools.

These tools are for helping generate CommandPost documentation.

Example Usage:
```lua
require("cp.docs").generate()
```

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [generate](#generate)
 * [generateExtensionLinks](#generateextensionlinks)
 * [updateDeveloperGuideSummary](#updatedeveloperguidesummary)


---

## API Documentation

#### Functions


### [generate](#generate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.docs.generate() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates the CommandPost Developers Guide.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [generateExtensionLinks](#generateextensionlinks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.docs.generateExtensionLinks(folder) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns markup of all of the API links for a specific group of extensions.                                                                     |
| **Parameters**                              | <ul><li>folder - The folder you want to process (i.e. "cp", "plugins" or "hs").</li></ul> |
| **Returns**                                 | <ul><li>The result as a string, otherwise `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [updateDeveloperGuideSummary](#updatedeveloperguidesummary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.docs.updateDeveloperGuideSummary() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Developer Guide Summary.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `nil`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


# cp.apple.finalcutpro.inspector.info.InfoProjectInspector

Info Inspector Module when a Project is selected.

## API Overview
### **Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

### **Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [modify](#modify)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doShow](#doshow)
 * [propertiesUI](#propertiesui)


## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoProjectInspector.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoProjectInspector.new(parent) -> InfoProjectInspector object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new InfoProjectInspector object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A InfoProjectInspector object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [modify](#modify)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoProjectInspector.modify <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Modify Project button in the Info Inspector.                                                                     |

---
### Methods


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoProjectInspector:doShow() -> cp.rx.go.Statment`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that shows the panel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successful and sending an error if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [propertiesUI](#propertiesui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoProjectInspector:propertiesUI() -> hs.axuielement object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `hs.axuielement` object for the Properties UI.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `hs.axuielement` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

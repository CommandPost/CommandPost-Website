# [docs](index.md) » cp.apple.finalcutpro.inspector.info.InfoInspector
---

Video Inspector Module.

## API Overview
* Constants - Useful values which cannot be changed
 * [metadataViews](#metadataViews)
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [metadataView](#metadataView)
 * [metadataViewButton](#metadataViewButton)
* Methods - API calls which can only be made on an object returned by a constructor
 * [propertiesUI](#propertiesUI)

## API Documentation

### Constants

| [metadataViews](#metadataViews)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoInspector.metadataViews -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Metadata Views                                                                     |

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoInspector.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoInspector.new(parent) -> InfoInspector object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new InfoInspector object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A InfoInspector object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [metadataView](#metadataView)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoInspector.metadataView <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the name of the current metadata view.                                                                     |

| [metadataViewButton](#metadataViewButton)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoInspector.metadataViewButton <cp.io.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Info Inspector Metadata View Button.                                                                     |

### Methods

| [propertiesUI](#propertiesUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoInspector:propertiesUI() -> hs.axuielement object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `hs.axuielement` object for the Properties UI.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `hs.axuielement` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


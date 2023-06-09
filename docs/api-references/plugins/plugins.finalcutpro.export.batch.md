# plugins.finalcutpro.export.batch

Timeline Batch Export Plugin.

---

## Submodules
 * [plugins.finalcutpro.export.batch.manager](plugins.finalcutpro.export.batch.manager.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [DEFAULT_CUSTOM_FILENAME](#default_custom_filename)

**Functions** - _API calls offered directly by the extension_
 * [batchExport](#batchexport)
 * [batchExportTimelineClips](#batchexporttimelineclips)
 * [changeCustomFilename](#changecustomfilename)
 * [changeExportDestinationFolder](#changeexportdestinationfolder)
 * [changeExportDestinationPreset](#changeexportdestinationpreset)
 * [getDestinationFolder](#getdestinationfolder)
 * [getDestinationPreset](#getdestinationpreset)
 * [performBatchExport](#performbatchexport)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [customFilename](#customfilename)
 * [destinationPreset](#destinationpreset)
 * [ignoreBackgroundTasks](#ignorebackgroundtasks)
 * [ignoreInvalidCaptions](#ignoreinvalidcaptions)
 * [ignoreMissingEffects](#ignoremissingeffects)
 * [ignoreProxies](#ignoreproxies)
 * [replaceExistingFiles](#replaceexistingfiles)
 * [useCustomFilename](#usecustomfilename)


---

## API Documentation

#### Constants


### [DEFAULT_CUSTOM_FILENAME](#default_custom_filename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.DEFAULT_CUSTOM_FILENAME -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Custom Filename                                                                     |
| **Notes**                                   | - None |

---

#### Functions


### [batchExport](#batchexport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.batchExport() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Opens the Batch Export popup.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [batchExportTimelineClips](#batchexporttimelineclips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.batchExportTimelineClips(clips) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Batch Export Timeline Clips                                                                     |
| **Parameters**                              | <ul><li>clips - table of selected Clips</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [changeCustomFilename](#changecustomfilename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.changeCustomFilename() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Change Custom Filename String.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [changeExportDestinationFolder](#changeexportdestinationfolder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.changeExportDestinationFolder() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Change Export Destination Folder.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [changeExportDestinationPreset](#changeexportdestinationpreset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.changeExportDestinationPreset() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Change Export Destination Preset.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getDestinationFolder](#getdestinationfolder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.getDestinationFolder() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the destination folder path.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The destination folder path as a string.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getDestinationPreset](#getdestinationpreset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.getDestinationPreset() -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the destination preset.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The destination preset as a string, or `nil` if no preset is set.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [performBatchExport](#performbatchexport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.performBatchExport() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs the Browser Batch Export function.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [customFilename](#customfilename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.customFilename <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Custom Filename for Batch Export.                                                                     |
| **Notes**                                   | - None |

---


### [destinationPreset](#destinationpreset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.destinationPreset <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Destination Preset.                                                                     |
| **Notes**                                   | - None |

---


### [ignoreBackgroundTasks](#ignorebackgroundtasks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.ignoreBackgroundTasks <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Defines whether or not a Batch Export should Ignore Background Tasks.                                                                     |
| **Notes**                                   | - None |

---


### [ignoreInvalidCaptions](#ignoreinvalidcaptions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.ignoreInvalidCaptions <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Defines whether or not a Batch Export should Ignore Invalid Captions.                                                                     |
| **Notes**                                   | - None |

---


### [ignoreMissingEffects](#ignoremissingeffects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.ignoreMissingEffects <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Defines whether or not a Batch Export should Ignore Missing Effects.                                                                     |
| **Notes**                                   | - None |

---


### [ignoreProxies](#ignoreproxies)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.ignoreProxies <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Defines whether or not a Batch Export should Ignore Proxies.                                                                     |
| **Notes**                                   | - None |

---


### [replaceExistingFiles](#replaceexistingfiles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.replaceExistingFiles <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Defines whether or not a Batch Export should Replace Existing Files.                                                                     |
| **Notes**                                   | - None |

---


### [useCustomFilename](#usecustomfilename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.useCustomFilename <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Defines whether or not the Batch Export tool should override the clipname with a custom filename.                                                                     |
| **Notes**                                   | - None |

---


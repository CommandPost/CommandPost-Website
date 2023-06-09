# plugins.finalcutpro.export.batch

Timeline Batch Export Plugin.

## Submodules
 * [plugins.finalcutpro.export.batch.manager](plugins.finalcutpro.export.batch.manager.md)

## API Overview
* Constants - Useful values which cannot be changed
 * [DEFAULT_CUSTOM_FILENAME](#DEFAULT_CUSTOM_FILENAME)
* Functions - API calls offered directly by the extension
 * [batchExport](#batchExport)
 * [batchExportTimelineClips](#batchExportTimelineClips)
 * [changeCustomFilename](#changeCustomFilename)
 * [changeExportDestinationFolder](#changeExportDestinationFolder)
 * [changeExportDestinationPreset](#changeExportDestinationPreset)
 * [getDestinationFolder](#getDestinationFolder)
 * [getDestinationPreset](#getDestinationPreset)
 * [performBatchExport](#performBatchExport)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [customFilename](#customFilename)
 * [destinationPreset](#destinationPreset)
 * [ignoreBackgroundTasks](#ignoreBackgroundTasks)
 * [ignoreInvalidCaptions](#ignoreInvalidCaptions)
 * [ignoreMissingEffects](#ignoreMissingEffects)
 * [ignoreProxies](#ignoreProxies)
 * [replaceExistingFiles](#replaceExistingFiles)
 * [useCustomFilename](#useCustomFilename)

## API Documentation

### Constants

| [DEFAULT_CUSTOM_FILENAME](#DEFAULT_CUSTOM_FILENAME)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.DEFAULT_CUSTOM_FILENAME -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Custom Filename                                                                     |

### Functions

| [batchExport](#batchExport)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.batchExport() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Opens the Batch Export popup.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [batchExportTimelineClips](#batchExportTimelineClips)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.batchExportTimelineClips(clips) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Batch Export Timeline Clips                                                                     |
| **Parameters**                              | <ul><li>clips - table of selected Clips</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [changeCustomFilename](#changeCustomFilename)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.changeCustomFilename() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Change Custom Filename String.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [changeExportDestinationFolder](#changeExportDestinationFolder)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.changeExportDestinationFolder() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Change Export Destination Folder.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [changeExportDestinationPreset](#changeExportDestinationPreset)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.changeExportDestinationPreset() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Change Export Destination Preset.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getDestinationFolder](#getDestinationFolder)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.getDestinationFolder() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the destination folder path.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The destination folder path as a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getDestinationPreset](#getDestinationPreset)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.getDestinationPreset() -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the destination preset.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The destination preset as a string, or `nil` if no preset is set.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [performBatchExport](#performBatchExport)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.performBatchExport() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs the Browser Batch Export function.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [customFilename](#customFilename)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.customFilename <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Custom Filename for Batch Export.                                                                     |

| [destinationPreset](#destinationPreset)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.destinationPreset <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Destination Preset.                                                                     |

| [ignoreBackgroundTasks](#ignoreBackgroundTasks)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.ignoreBackgroundTasks <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Defines whether or not a Batch Export should Ignore Background Tasks.                                                                     |

| [ignoreInvalidCaptions](#ignoreInvalidCaptions)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.ignoreInvalidCaptions <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Defines whether or not a Batch Export should Ignore Invalid Captions.                                                                     |

| [ignoreMissingEffects](#ignoreMissingEffects)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.ignoreMissingEffects <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Defines whether or not a Batch Export should Ignore Missing Effects.                                                                     |

| [ignoreProxies](#ignoreProxies)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.ignoreProxies <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Defines whether or not a Batch Export should Ignore Proxies.                                                                     |

| [replaceExistingFiles](#replaceExistingFiles)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.replaceExistingFiles <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Defines whether or not a Batch Export should Replace Existing Files.                                                                     |

| [useCustomFilename](#useCustomFilename)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.export.batch.useCustomFilename <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Defines whether or not the Batch Export tool should override the clipname with a custom filename.                                                                     |


# cp.apple.finalcutpro.export.ExportDialog

Export Dialog Module.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [ExportDialogTitleText](#ExportDialogTitleText)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [fileExtension](#fileExtension)
 * [saveSheet](#saveSheet)
* Methods - API calls which can only be made on an object returned by a constructor
 * [hide](#hide)
 * [pressCancel](#pressCancel)
 * [pressNext](#pressNext)
 * [show](#show)

## API Documentation

### Constructors

| [ExportDialogTitleText](#ExportDialogTitleText)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialogTitleText(parent)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Export [Dialog](cp.ui.Dialog.md)                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [fileExtension](#fileExtension)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialog.fileExtension <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "File Extension" [StaticText](cp.ui.StaticText.md).                                                                     |

| [saveSheet](#saveSheet)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialog.saveSheet <SaveSheet>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `SaveSheet`.                                                                     |

### Methods

| [hide](#hide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialog:hide() -> cp.apple.finalcutpro.export.ExportDialog`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Export Dialog                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.ExportDialog` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [pressCancel](#pressCancel)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialog:pressCancel() -> cp.apple.finalcutpro.export.ExportDialog`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Presses the Cancel Button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.ExportDialog` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [pressNext](#pressNext)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialog:pressNext() -> cp.apple.finalcutpro.export.ExportDialog`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Presses the Next Button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.ExportDialog` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialog:show(destinationSelect, ignoreProxyWarning, ignoreMissingMedia, ignoreInvalidCaptions, quiet) -> cp.apple.finalcutpro.export.ExportDialog, string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Export Dialog with the Destination that matches the `destinationSelect`.                                                                     |
| **Parameters**                              | <ul><li>destinationSelect        - The name, number or match function of the destination to export with.</li><li>ignoreProxyWarning       - if `true`, the warning regarding exporting Proxies will be ignored.</li><li>ignoreMissingMedia       - if `true`, the warning regarding exporting with missing media will be ignored.</li><li>ignoreInvalidCaptions    - if `true`, the warning regarding exporting with Bad Captions will be ignored.</li><li>quiet                    - if `true`, no dialogs will be shown if there is an error.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.ExportDialog` object for method chaining.</li><li>If an error occurred, the message is returned as the second value</li></ul>          |
| **Notes**                                   | <ul><li>If providing a function, it will be passed one item - the name of the destination, and should return `true` to indicate a match. The name will not contain " (default)" if present.</li></ul>                |


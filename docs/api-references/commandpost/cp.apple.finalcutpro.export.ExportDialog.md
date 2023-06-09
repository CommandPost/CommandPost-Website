# cp.apple.finalcutpro.export.ExportDialog

Export Dialog Module.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [ExportDialogTitleText](#exportdialogtitletext)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [fileExtension](#fileextension)
 * [saveSheet](#savesheet)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [hide](#hide)
 * [pressCancel](#presscancel)
 * [pressNext](#pressnext)
 * [show](#show)


---

## API Documentation

#### Constructors


### [ExportDialogTitleText](#exportdialogtitletext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialogTitleText(parent)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Export [Dialog](cp.ui.Dialog.md)                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua#L37) |

---

#### Fields


### [fileExtension](#fileextension)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialog.fileExtension <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "File Extension" [StaticText](cp.ui.StaticText.md).                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua line 288](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua#L288) |

---


### [saveSheet](#savesheet)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialog.saveSheet <SaveSheet>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `SaveSheet`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua line 299](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua#L299) |

---

#### Methods


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialog:hide() -> cp.apple.finalcutpro.export.ExportDialog`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Export Dialog                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.ExportDialog` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua line 234](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua#L234) |

---


### [pressCancel](#presscancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialog:pressCancel() -> cp.apple.finalcutpro.export.ExportDialog`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Presses the Cancel Button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.ExportDialog` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua line 255](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua#L255) |

---


### [pressNext](#pressnext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialog:pressNext() -> cp.apple.finalcutpro.export.ExportDialog`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Presses the Next Button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.ExportDialog` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua line 275](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua#L275) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.export.ExportDialog:show(destinationSelect, ignoreProxyWarning, ignoreMissingMedia, ignoreInvalidCaptions, quiet) -> cp.apple.finalcutpro.export.ExportDialog, string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Export Dialog with the Destination that matches the `destinationSelect`.                                                                     |
| **Parameters**                              | <ul><li>destinationSelect        - The name, number or match function of the destination to export with.</li><li>ignoreProxyWarning       - if `true`, the warning regarding exporting Proxies will be ignored.</li><li>ignoreMissingMedia       - if `true`, the warning regarding exporting with missing media will be ignored.</li><li>ignoreInvalidCaptions    - if `true`, the warning regarding exporting with Bad Captions will be ignored.</li><li>quiet                    - if `true`, no dialogs will be shown if there is an error.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.export.ExportDialog` object for method chaining.</li><li>If an error occurred, the message is returned as the second value</li></ul>          |
| **Notes**                                   | <ul><li>If providing a function, it will be passed one item - the name of the destination, and should return `true` to indicate a match. The name will not contain " (default)" if present.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua line 72](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/export/ExportDialog.lua#L72) |

---


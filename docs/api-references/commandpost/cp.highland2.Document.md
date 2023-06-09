# cp.highland2.Document

Highland 2 Document [Window](cp.ui.Window.md) extension.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [documentPath](#documentpath)
 * [doShow](#doshow)
 * [revisionMode](#revisionmode)
 * [sidebar](#sidebar)
 * [splitter](#splitter)
 * [sprint](#sprint)
 * [templatePicker](#templatepicker)
 * [text](#text)
 * [themePicker](#themepicker)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is a Document.                                                                     |
| **Parameters**                              | <ul><li>element - The element to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element matches, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/highland2/Document.lua line 22](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/highland2/Document.lua#L22) |

---

#### Fields


### [documentPath](#documentpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document:documentPath() -> cp.prop <string; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current path for the document.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/highland2/Document.lua line 36](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/highland2/Document.lua#L36) |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.doShow <cp.rx.go.Statement>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will show the `Document` when run.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/highland2/Document.lua line 121](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/highland2/Document.lua#L121) |

---


### [revisionMode](#revisionmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.revisionMode <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Revision Mode button.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/highland2/Document.lua line 72](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/highland2/Document.lua#L72) |

---


### [sidebar](#sidebar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.sidebar <cp.highland2.Sidebar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Sidebar](cp.highland2.Sidebar.md).                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/highland2/Document.lua line 86](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/highland2/Document.lua#L86) |

---


### [splitter](#splitter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.splitter <cp.ui.Splitter>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Splitter.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/highland2/Document.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/highland2/Document.lua#L93) |

---


### [sprint](#sprint)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.sprint <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Sprint button.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/highland2/Document.lua line 79](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/highland2/Document.lua#L79) |

---


### [templatePicker](#templatepicker)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.templatePicker <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Template Picker button.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/highland2/Document.lua line 58](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/highland2/Document.lua#L58) |

---


### [text](#text)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.text <cp.ui.TextArea>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [TextArea](cp.ui.TextArea.md) containing the document text.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/highland2/Document.lua line 114](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/highland2/Document.lua#L114) |

---


### [themePicker](#themepicker)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.themePicker <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Theme Picker button.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/highland2/Document.lua line 65](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/highland2/Document.lua#L65) |

---


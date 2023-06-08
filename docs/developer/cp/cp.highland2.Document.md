# [docs](index.md) » cp.highland2.Document
---

Highland 2 Document [Window](cp.ui.Window.md) extension.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [documentPath](#documentPath)
 * [doShow](#doShow)
 * [revisionMode](#revisionMode)
 * [sidebar](#sidebar)
 * [splitter](#splitter)
 * [sprint](#sprint)
 * [templatePicker](#templatePicker)
 * [text](#text)
 * [themePicker](#themePicker)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is a Document.                                                                     |
| **Parameters**                              | <ul><li>element - The element to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element matches, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [documentPath](#documentPath)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document:documentPath() -> cp.prop <string; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current path for the document.                                                                     |

| [doShow](#doShow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.doShow <cp.rx.go.Statement>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will show the `Document` when run.                                                                     |

| [revisionMode](#revisionMode)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.revisionMode <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Revision Mode button.                                                                     |

| [sidebar](#sidebar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.sidebar <cp.highland2.Sidebar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Sidebar](cp.highland2.Sidebar.md).                                                                     |

| [splitter](#splitter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.splitter <cp.ui.Splitter>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Splitter.                                                                     |

| [sprint](#sprint)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.sprint <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Sprint button.                                                                     |

| [templatePicker](#templatePicker)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.templatePicker <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Template Picker button.                                                                     |

| [text](#text)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.text <cp.ui.TextArea>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [TextArea](cp.ui.TextArea.md) containing the document text.                                                                     |

| [themePicker](#themePicker)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.highland2.Document.themePicker <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Theme Picker button.                                                                     |


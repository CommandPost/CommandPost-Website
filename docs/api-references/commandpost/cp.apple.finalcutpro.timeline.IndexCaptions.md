# cp.apple.finalcutpro.timeline.IndexCaptions

Provides access to the 'Captions' section of the [Timeline Index](cp.apple.finalcutpro.timeline.Index.md)

## API Overview
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [activate](#activate)
 * [list](#list)
 * [viewErrors](#viewerrors)
* Methods - API calls which can only be made on an object returned by a constructor
 * [doLayout](#dolayout)
 * [saveLayout](#savelayout)

## API Documentation

### Fields


### [activate](#activate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexCaptions.activate <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) that activates the 'Captions' section.                                                                     |

---

### [list](#list)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexCaptions.list <cp.ui.OldTable>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of captions as a [Table](cp.ui.OldTable.md).                                                                     |

---

### [viewErrors](#viewerrors)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexCaptions.viewErrors <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Button](cp.ui.Button.md) that will allow viewing errors in the Captions list.                                                                     |

---
### Methods


### [doLayout](#dolayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexCaptions:doLayout(layout) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will apply the layout provided, if possible.                                                                     |
| **Parameters**                              | <ul><li>layout - the `table` containing the layout configuration. Usually created via the [#saveLayout] method.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexCaptions:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` containing the layout configuration for this class.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The layout configuration `table`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

# cp.apple.finalcutpro.timeline.IndexTags

Provides access to the 'Tags' section of the [Timeline Index](cp.apple.finalcutpro.timeline.Index.md)

---

## Submodules
 * [cp.apple.finalcutpro.timeline.IndexTags.Type](cp.apple.finalcutpro.timeline.IndexTags.Type.md)

---

## API Overview
**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [activate](#activate)
 * [all](#all)
 * [analysisKeywords](#analysiskeywords)
 * [chapters](#chapters)
 * [completeTodos](#completetodos)
 * [incompleteTodos](#incompletetodos)
 * [keywords](#keywords)
 * [list](#list)
 * [standardMarkers](#standardmarkers)
 * [type](#type)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doLayout](#dolayout)
 * [doShowAll](#doshowall)
 * [doShowAnalysisKeywords](#doshowanalysiskeywords)
 * [doShowChapters](#doshowchapters)
 * [doShowCompleteTodos](#doshowcompletetodos)
 * [doShowIncompleteTodos](#doshowincompletetodos)
 * [doShowKeywords](#doshowkeywords)
 * [doShowStandardMarkers](#doshowstandardmarkers)
 * [saveLayout](#savelayout)


---

## API Documentation

### Fields


### [activate](#activate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags.activate <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) that activates the 'Tags' section.                                                                     |

---

### [all](#all)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags.all <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) that will show "All" types of media.                                                                     |

---

### [analysisKeywords](#analysiskeywords)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags.analysisKeywords <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Auto-analysis keywords" filter.                                                                     |

---

### [chapters](#chapters)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags.chapters <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Chapter markers" filter.                                                                     |

---

### [completeTodos](#completetodos)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags.completeTodos <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Complete todo marker" filter.                                                                     |

---

### [incompleteTodos](#incompletetodos)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags.incompleteTodos <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Incomplete todo marker" filter.                                                                     |

---

### [keywords](#keywords)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags.keywords <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Keywords" filter.                                                                     |

---

### [list](#list)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags.list <cp.ui.OldTable>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of tags as a [Table](cp.ui.OldTable.md).                                                                     |

---

### [standardMarkers](#standardmarkers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags.standardMarkers <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Standard markers" filter.                                                                     |

---

### [type](#type)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags.type <cp.apple.finalcutpro.timeline.IndexTags.Type>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [IndexTags.Type](cp.apple.finalcutpro.timeline.IndexTags.Type.md).                                                                     |

---
### Methods


### [doLayout](#dolayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags:doLayout(layout) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will apply the layout provided, if possible.                                                                     |
| **Parameters**                              | <ul><li>layout - the `table` containing the layout configuration. Usually created via the [#saveLayout] method.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShowAll](#doshowall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags:doShowAll() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will set the tag index to "All" media types.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShowAnalysisKeywords](#doshowanalysiskeywords)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags:doShowAnalysisKeywords() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will set the tag index to "Analysis Keywords".                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShowChapters](#doshowchapters)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags:doShowChapters() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will set the tag index to "Chapter" markers.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShowCompleteTodos](#doshowcompletetodos)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags:doShowCompleteTodos() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will set the tag index to "Complete Todos".                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShowIncompleteTodos](#doshowincompletetodos)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags:doShowIncompleteTodos() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will set the tag index to "Incomplete Todo Markers".                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShowKeywords](#doshowkeywords)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags:doShowKeywords() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will set the tag index to "Keywords".                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShowStandardMarkers](#doshowstandardmarkers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags:doShowStandardMarkers() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will set the tag index to "Standard" markers.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexTags:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` containing the layout configuration for this class.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The layout configuration `table`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

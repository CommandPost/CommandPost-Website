# cp.apple.finalcutpro.timeline.Index

Timeline Index Module.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [Index](#Index)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [captions](#captions)
 * [clips](#clips)
 * [mode](#mode)
 * [roles](#roles)
 * [search](#search)
 * [tags](#tags)
* Methods - API calls which can only be made on an object returned by a constructor
 * [activeTab](#activeTab)
 * [doHide](#doHide)
 * [doLayout](#doLayout)
 * [doShow](#doShow)
 * [saveLayout](#saveLayout)

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [Index](#Index)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index(timeline) -> cp.apple.finalcutpro.timeline.Index`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Timeline Index.                                                                     |
| **Parameters**                              | <ul><li>timeline - [Timeline](cp.apple.finalcutpro.timeline.Timeline.md).</li></ul> |
| **Returns**                                 | <ul><li>A new `Index` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [captions](#captions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.captions <cp.apple.finalcutpro.timeline.IndexCaptions>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [IndexCaptions](cp.apple.finalcutpro.timeline.IndexCaptions.md).                                                                     |

---

### [clips](#clips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.clips <cp.apple.finalcutpro.timeline.IndexClips>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [IndexClips](cp.apple.finalcutpro.timeline.IndexClips.md).                                                                     |

---

### [mode](#mode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.mode <cp.apple.finalcutpro.timeline.IndexMode>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [IndexMode](cp.apple.finalcutpro.timeline.IndexMode.md) for the Index.                                                                     |

---

### [roles](#roles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.roles <cp.apple.finalcutpro.timeline.IndexRoles>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [IndexRoles](cp.apple.finalcutpro.timeline.IndexRoles.md).                                                                     |

---

### [search](#search)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.search <cp.ui.SearchField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [SearchField](cp.ui.SearchField.md) for the Timeline Index.                                                                     |

---

### [tags](#tags)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.tags <cp.apple.finalcutpro.timeline.IndexTags>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [IndexTags](cp.apple.finalcutpro.timeline.IndexTags.md).                                                                     |

---
### Methods


### [activeTab](#activeTab)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index:activeTab() -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the active tab.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The active tab or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doHide](#doHide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) which will hide the Index if possible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doLayout](#doLayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index:doLayout(layout) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will apply the layout provided, if possible.                                                                     |
| **Parameters**                              | <ul><li>layout - the `table` containing the layout configuration. Usually created via the [#saveLayout] method.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShow](#doShow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) which will show the Index if possible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [saveLayout](#saveLayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` containing the layout configuration for this class.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The layout configuration `table`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

# cp.apple.finalcutpro.timeline.Contents

Timeline Contents Module.

## API Overview
### **Functions** - _API calls offered directly by the extension_
 * [clipsUI](#clipsui)
 * [matches](#matches)
 * [playheadClipsUI](#playheadclipsui)
 * [positionClipsUI](#positionclipsui)
 * [skimmingPlayheadClipsUI](#skimmingplayheadclipsui)

### **Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Contents](#contents)

### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [children](#children)
 * [isLoaded](#isloaded)
 * [playhead](#playhead)
 * [scrollArea](#scrollarea)
 * [scrollAreaUI](#scrollareaui)
 * [selectedChildren](#selectedchildren)
 * [skimmingPlayhead](#skimmingplayhead)
 * [viewFrame](#viewframe)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [activePlayhead](#activeplayhead)
 * [doFocus](#dofocus)
 * [doHide](#dohide)
 * [doSelectClip](#doselectclip)
 * [doSelectClips](#doselectclips)
 * [doSelectNone](#doselectnone)
 * [doSelectTopClip](#doselecttopclip)
 * [doShow](#doshow)
 * [rangeSelectionUI](#rangeselectionui)
 * [selectedClipsUI](#selectedclipsui)


## API Documentation

### Functions


### [clipsUI](#clipsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:clipsUI(expandedGroups, filterFn) -> table of axuielements`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing the list of clips in the Timeline.                                                                     |
| **Parameters**                              | <ul><li>expandGroups	- (optional) if true, expand AXGroups to include contained AXLayoutItems</li><li>filterFn		- (optional) if provided, the function will be called to check each clip</li></ul> |
| **Returns**                                 | <ul><li>The table of axuielements that match the conditions</li></ul>          |
| **Notes**                                   | <ul><li>If `expandsGroups` is true any AXGroup items will be expanded to the list of contained AXLayoutItems.</li><li>If `filterFn` is provided it will be called with a single argument to check if the provided clip should be included in the final table.</li></ul>                |

---

### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if an `axuielementObject` matches the `Contents` type.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [playheadClipsUI](#playheadclipsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:playheadClipsUI(expandedGroups, filterFn) -> table of axuielements`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table array containing the list of clips in the Timeline under the playhead, ordered with the highest clips at the beginning of the array.                                                                     |
| **Parameters**                              | <ul><li>expandGroups	- (optional) if true, expand AXGroups to include contained AXLayoutItems</li><li>filterFn		- (optional) if provided, the function will be called to check each clip</li></ul> |
| **Returns**                                 | <ul><li>The table of axuielements that match the conditions</li></ul>          |
| **Notes**                                   | <ul><li>If `expandsGroups` is true any AXGroup items will be expanded to the list of contained `AXLayoutItems`.</li><li>If `filterFn` is provided it will be called with a single argument to check if the provided clip should be included in the final table.</li></ul>                |

---

### [positionClipsUI](#positionclipsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:positionClipsUI(position, expandedGroups, filterFn) -> table of axuielements`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table array containing the list of clips in the Timeline at the specified `position`, ordered with the highest clips at the beginning of the array.                                                                     |
| **Parameters**                              | <ul><li>position     - The `X` (or horizontal) position value to find clips under.</li><li>expandGroups	- (optional) if true, expand AXGroups to include contained AXLayoutItems</li><li>filterFn		- (optional) if provided, the function will be called to check each clip</li></ul> |
| **Returns**                                 | <ul><li>The table of axuielements that match the conditions</li></ul>          |
| **Notes**                                   | <ul><li>If `expandsGroups` is `true` any `AXGroup` items will be expanded to the list of contained `AXLayoutItems`.</li><li>If `filterFn` is provided it will be called with a single argument to check if the provided clip should be included in the final table.</li></ul>                |

---

### [skimmingPlayheadClipsUI](#skimmingplayheadclipsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:skimmingPlayheadClipsUI(expandedGroups, filterFn) -> table of axuielements`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table array containing the list of clips in the Timeline under the skimming playhead, ordered with the highest clips at the beginning of the array.                                                                     |
| **Parameters**                              | <ul><li>expandGroups	- (optional) if true, expand AXGroups to include contained AXLayoutItems</li><li>filterFn		- (optional) if provided, the function will be called to check each clip</li></ul> |
| **Returns**                                 | <ul><li>The table of axuielements that match the conditions</li></ul>          |
| **Notes**                                   | <ul><li>If `expandsGroups` is true any AXGroup items will be expanded to the list of contained `AXLayoutItems`.</li><li>If `filterFn` is provided it will be called with a single argument to check if the provided clip should be included in the final table.</li></ul>                |

---
### Constructors


### [Contents](#contents)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents(parent) -> Contents`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Timeline `Contents` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent `Timeline`</li></ul> |
| **Returns**                                 | <ul><li>A new `Contents` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [children](#children)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents.children <cp.prop: table; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current set of child elements in the Contents.                                                                     |

---

### [isLoaded](#isloaded)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents.isLoaded <cp.prop: booelan; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Timeline has content loaded.                                                                     |

---

### [playhead](#playhead)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents.playhead <cp.apple.finalcutpro.main.Playhead>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The main Playhead.                                                                     |

---

### [scrollArea](#scrollarea)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents.scrollArea <cp.ui.ScrollArea>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `ScrollArea` for the Contents element.                                                                     |

---

### [scrollAreaUI](#scrollareaui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents.scrollAreaUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The parent `ScrollArea` UI of the Timeline Contents area.                                                                     |

---

### [selectedChildren](#selectedchildren)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents.selectedChildren <cp.prop: table; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current set of selected child elements in the Contents.                                                                     |

---

### [skimmingPlayhead](#skimmingplayhead)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents.skimmingPlayhead <cp.apple.finalcutpro.main.Playhead>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Playhead that tracks with the mouse pointer.                                                                     |

---

### [viewFrame](#viewframe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents.viewFrame <cp.prop: table; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current 'frame' of the internal timeline content,  or `nil` if not available.                                                                     |

---
### Methods


### [activePlayhead](#activeplayhead)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:activePlayhead() -> Playhead`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the active Playhead. If the Skimming Playhead is available, return that, otherwise, return the normal Playhead.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The active `Playhead`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doFocus](#dofocus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:doFocus(show) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which will focus on the `Contents`.                                                                     |
| **Parameters**                              | <ul><li>show      - if `true`, the `Contents` will be shown before focusing.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doHide](#dohide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will attempt to hide the Timeline Contents.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doSelectClip](#doselectclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:doSelectClip(clipUI) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which will select the specified single `hs.axuielement` value in the Timeline Contents area.                                                                     |
| **Parameters**                              | <ul><li>clipUI       - The `hs._asm.axuilement` values to select.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md) that will select the clip or throw an error if there is an issue.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doSelectClips](#doselectclips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:doSelectClips(clipsUI) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which will select the specified list of `hs.axuielement` values in the Timeline Contents area.                                                                     |
| **Parameters**                              | <ul><li>clipsUI       - The table of `hs._asm.axuilement` values to select.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md) that will select the clips or throw an error if there is an issue.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doSelectNone](#doselectnone)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:doSelectNone() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will clear any clip selection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doSelectTopClip](#doselecttopclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:doSelectTopClip([position]) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a [Statement](cp.rx.go.Statement.md) that will select the top clip at the given position, resolving to the top clip if available.                                                                     |
| **Parameters**                              | <ul><li>position - (optional) The position `table` to select the top clip at. If not provided, the current active playhead position is used.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will attempt to show the Timeline Contents.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [rangeSelectionUI](#rangeselectionui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:rangeSelectionUI() -> axuielements`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the UI for the current 'Range Selection', if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The 'Range Selection' UI or `nil`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectedClipsUI](#selectedclipsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Contents:selectedClipsUI(expandedGroups, filterFn) -> table of axuielements`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table containing the list of selected clips.                                                                     |
| **Parameters**                              | <ul><li>expandGroups	- (optional) if true, expand AXGroups to include contained AXLayoutItems</li><li>filterFn		- (optional) if provided, the function will be called to check each clip</li></ul> |
| **Returns**                                 | <ul><li>The table of selected axuielements that match the conditions</li></ul>          |
| **Notes**                                   | <ul><li>If `expandsGroups` is true any AXGroup items will be expanded to the list of contained AXLayoutItems.</li><li>If `filterFn` is provided it will be called with a single argument to check if the provided clip should be included in the final table.</li></ul>                |

---

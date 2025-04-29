# cp.apple.finalcutpro.timeline.Index

Timeline Index Module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Index](#index)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [captions](#captions)
 * [clips](#clips)
 * [mode](#mode)
 * [roles](#roles)
 * [search](#search)
 * [tags](#tags)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [activeTab](#activetab)
 * [doHide](#dohide)
 * [doLayout](#dolayout)
 * [doShow](#doshow)
 * [saveLayout](#savelayout)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Index.lua line 26](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Index.lua#L26) |

---

#### Constructors


### [Index](#index)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index(timeline) -> cp.apple.finalcutpro.timeline.Index`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Timeline Index.                                                                     |
| **Parameters**                              | <ul><li>timeline - [Timeline](cp.apple.finalcutpro.timeline.Timeline.md).</li></ul> |
| **Returns**                                 | <ul><li>A new `Index` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Index.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Index.lua#L41) |

---

#### Fields


### [captions](#captions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.captions <cp.apple.finalcutpro.timeline.IndexCaptions>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [IndexCaptions](cp.apple.finalcutpro.timeline.IndexCaptions.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Index.lua line 123](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Index.lua#L123) |

---


### [clips](#clips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.clips <cp.apple.finalcutpro.timeline.IndexClips>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [IndexClips](cp.apple.finalcutpro.timeline.IndexClips.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Index.lua line 102](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Index.lua#L102) |

---


### [mode](#mode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.mode <cp.apple.finalcutpro.timeline.IndexMode>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [IndexMode](cp.apple.finalcutpro.timeline.IndexMode.md) for the Index.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Index.lua line 69](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Index.lua#L69) |

---


### [roles](#roles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.roles <cp.apple.finalcutpro.timeline.IndexRoles>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [IndexRoles](cp.apple.finalcutpro.timeline.IndexRoles.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Index.lua line 116](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Index.lua#L116) |

---


### [search](#search)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.search <cp.ui.SearchField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [SearchField](cp.ui.SearchField.md) for the Timeline Index.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Index.lua line 60](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Index.lua#L60) |

---


### [tags](#tags)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index.tags <cp.apple.finalcutpro.timeline.IndexTags>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [IndexTags](cp.apple.finalcutpro.timeline.IndexTags.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Index.lua line 109](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Index.lua#L109) |

---

#### Methods


### [activeTab](#activetab)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index:activeTab() -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the active tab.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The active tab or `nil`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Index.lua line 130](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Index.lua#L130) |

---


### [doHide](#dohide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) which will hide the Index if possible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Index.lua line 89](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Index.lua#L89) |

---


### [doLayout](#dolayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index:doLayout(layout) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will apply the layout provided, if possible.                                                                     |
| **Parameters**                              | <ul><li>layout - the `table` containing the layout configuration. Usually created via the [#saveLayout] method.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md).</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Index.lua line 174](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Index.lua#L174) |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) which will show the Index if possible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Index.lua line 76](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Index.lua#L76) |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Index:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` containing the layout configuration for this class.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The layout configuration `table`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Index.lua line 151](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Index.lua#L151) |

---


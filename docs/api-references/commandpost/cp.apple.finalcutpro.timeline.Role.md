# cp.apple.finalcutpro.timeline.Role

 *Extends [Row](cp.ui.OldRow.md)*

Represents a Role in the [Timeline Index](cp.apple.finalcutpro.timeline.Index.md).

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [TITLE_KEY](#title_key)
 * [TYPE](#type)

**Functions** - _API calls offered directly by the extension_
 * [findTitle](#findtitle)
 * [is](#is)
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Role](#role)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [active](#active)
 * [cellUI](#cellui)
 * [subroleRow](#subrolerow)
 * [title](#title)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doActivate](#doactivate)
 * [doDeactivate](#dodeactivate)
 * [type](#type)


---

## API Documentation

#### Constants


### [TITLE_KEY](#title_key)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.TITLE_KEY <table>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Contains the list of [strings](cp.apple.finalcutpro.strings.md) used for default roles.                                                                     |
| **Notes**                                   | <ul><li>CAPTIONS - "Captions"</li><li>VIDEO - "Video"</li><li>TITLES - "Titles"</li><li>DIALOGUE - "Dialogue"</li><li>MUSIC - "Music"</li><li>EFFECTS - "Effects"</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Role.lua line 25](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Role.lua#L25){target="_blank"} |

---


### [TYPE](#type)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.TYPE <table>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Contains the set of role types.                                                                     |
| **Notes**                                   | <ul><li>VIDEO - A Video Role</li><li>AUDIO - An Audio Role</li><li>CAPTION - A Caption Role</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Role.lua line 45](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Role.lua#L45){target="_blank"} |

---

#### Functions


### [findTitle](#findtitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.findTitle(title) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if FCPX is not currently running in English, it will check if the title is one of the default English Role titles, and return the current language instead. If it's not found, unmodified `title` is returned.                                                                     |
| **Parameters**                              | <ul><li>title - A string to find.</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Role.lua line 87](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Role.lua#L87){target="_blank"} |

---


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a `Role`.                                                                     |
| **Parameters**                              | <ul><li>`thing`		- The thing to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the thing is a `Table` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Role.lua line 74](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Role.lua#L74){target="_blank"} |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `element` is a `Role`.                                                                     |
| **Parameters**                              | <ul><li>element - the `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Role.lua line 59](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Role.lua#L59){target="_blank"} |

---

#### Constructors


### [Role](#role)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role(parent, uiFinder, type)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates the new Role. Typically this is not called directly, but rather by one of the subclass roles, such as [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md) or [VideoRole](cp.apple.finalcutpro.timeline.VideoRole.md).                                                                     |
| **Parameters**                              | <ul><li>parent - The parent [Element](cp.ui.Element.md)</li><li>uiFinder - The `function` or `cp.prop` that provides the `axuielement`.</li><li>type - The [#TYPE] of Role.</li></ul> |
| **Returns**                                 | <ul><li>The new `Role` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Role.lua line 109](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Role.lua#L109){target="_blank"} |

---

#### Fields


### [active](#active)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.active <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CheckBox](cp.ui.CheckBox.md) that determines if the `Role` is active in the timeline.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Role.lua line 159](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Role.lua#L159){target="_blank"} |

---


### [cellUI](#cellui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.cellUI <cp.prop: axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The AXCell `axuielement` containing the Role details.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Role.lua line 141](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Role.lua#L141){target="_blank"} |

---


### [subroleRow](#subrolerow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.subroleRow <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | This is `true` if the `Role` is an Subrole [Row](cp.ui.OldRow.md).                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Role.lua line 150](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Role.lua#L150){target="_blank"} |

---


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.title <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [StaticText](cp.ui.StaticText.md) containing the title.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Role.lua line 168](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Role.lua#L168){target="_blank"} |

---

#### Methods


### [doActivate](#doactivate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role:doActivate() -> cp.rx.go.Statement.md`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will activate the current role, if possible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Role.lua line 177](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Role.lua#L177){target="_blank"} |

---


### [doDeactivate](#dodeactivate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role:doDeactivate() -> cp.rx.go.Statement.md`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will deactivate the current role, if possible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Role.lua line 190](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Role.lua#L190){target="_blank"} |

---


### [type](#type)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role:type() -> cp.apple.finalcut.timeline.Role.TYPE`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the type of Role this is.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Role Type</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Role.lua line 128](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Role.lua#L128){target="_blank"} |

---


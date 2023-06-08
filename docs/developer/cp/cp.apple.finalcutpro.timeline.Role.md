# [docs](index.md) » cp.apple.finalcutpro.timeline.Role
---

 *Extends [Row](cp.ui.OldRow.md)*

Represents a Role in the [Timeline Index](cp.apple.finalcutpro.timeline.Index.md).

## API Overview
* Constants - Useful values which cannot be changed
 * [TITLE_KEY](#TITLE_KEY)
 * [TYPE](#TYPE)
* Functions - API calls offered directly by the extension
 * [findTitle](#findTitle)
 * [is](#is)
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [Role](#Role)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [active](#active)
 * [cellUI](#cellUI)
 * [subroleRow](#subroleRow)
 * [title](#title)
* Methods - API calls which can only be made on an object returned by a constructor
 * [doActivate](#doActivate)
 * [doDeactivate](#doDeactivate)
 * [type](#type)

## API Documentation

### Constants

| [TITLE_KEY](#TITLE_KEY)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.TITLE_KEY <table>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Contains the list of [strings](cp.apple.finalcutpro.strings.md) used for default roles.                                                                     |
| **Notes**                                   | <ul><li>CAPTIONS - "Captions"</li><li>VIDEO - "Video"</li><li>TITLES - "Titles"</li><li>DIALOGUE - "Dialogue"</li><li>MUSIC - "Music"</li><li>EFFECTS - "Effects"</li></ul>                |

| [TYPE](#TYPE)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.TYPE <table>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Contains the set of role types.                                                                     |
| **Notes**                                   | <ul><li>VIDEO - A Video Role</li><li>AUDIO - An Audio Role</li><li>CAPTION - A Caption Role</li></ul>                |

### Functions

| [findTitle](#findTitle)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.findTitle(title) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if FCPX is not currently running in English, it will check if the title is one of the default English Role titles, and return the current language instead. If it's not found, unmodified `title` is returned.                                                                     |
| **Parameters**                              | <ul><li>title - A string to find.</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [is](#is)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a `Role`.                                                                     |
| **Parameters**                              | <ul><li>`thing`		- The thing to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the thing is a `Table` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `element` is a `Role`.                                                                     |
| **Parameters**                              | <ul><li>element - the `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [Role](#Role)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role(parent, uiFinder, type)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates the new Role. Typically this is not called directly, but rather by one of the subclass roles, such as [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md) or [VideoRole](cp.apple.finalcutpro.timeline.VideoRole.md).                                                                     |
| **Parameters**                              | <ul><li>parent - The parent [Element](cp.ui.Element.md)</li><li>uiFinder - The `function` or `cp.prop` that provides the `axuielement`.</li><li>type - The [#TYPE] of Role.</li></ul> |
| **Returns**                                 | <ul><li>The new `Role` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [active](#active)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.active <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CheckBox](cp.ui.CheckBox.md) that determines if the `Role` is active in the timeline.                                                                     |

| [cellUI](#cellUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.cellUI <cp.prop: axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The AXCell `axuielement` containing the Role details.                                                                     |

| [subroleRow](#subroleRow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.subroleRow <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | This is `true` if the `Role` is an Subrole [Row](cp.ui.OldRow.md).                                                                     |

| [title](#title)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role.title <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [StaticText](cp.ui.StaticText.md) containing the title.                                                                     |

### Methods

| [doActivate](#doActivate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role:doActivate() -> cp.rx.go.Statement.md`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will activate the current role, if possible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doDeactivate](#doDeactivate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role:doDeactivate() -> cp.rx.go.Statement.md`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will deactivate the current role, if possible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [type](#type)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Role:type() -> cp.apple.finalcut.timeline.Role.TYPE`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the type of Role this is.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Role Type</li></ul>          |
| **Notes**                                   | <ul></ul>                |


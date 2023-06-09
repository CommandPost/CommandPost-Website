# cp.apple.finalcutpro.timeline.IndexRolesList

Timeline Index Roles List.

---

## API Overview
**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [allRoles](#allroles)
 * [audioRoles](#audioroles)
 * [doActivate](#doactivate)
 * [doDeactivate](#dodeactivate)
 * [doFocusInTimeline](#dofocusintimeline)
 * [doHideSubroleLanes](#dohidesubrolelanes)
 * [doShowSubroleLanes](#doshowsubrolelanes)
 * [doUnfocusInTimeline](#dounfocusintimeline)
 * [filterRoles](#filterroles)
 * [findRoleTitled](#findroletitled)
 * [videoRoles](#videoroles)


---

## API Documentation

#### Methods


### [allRoles](#allroles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:allRoles([includeSubroles]) -> table of Roles`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the list of caption [Role](cp.ui.Role.md)s in the current list.                                                                     |
| **Parameters**                              | <ul><li>includeSubroles - if `true`, include Subroles, otherwise exclude them.</li></ul> |
| **Returns**                                 | <ul><li>A `table` of [Role](cp.apple.finalcutpro.timeline.Role.md)s, or `nil` if no UI is available currently.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua line 111](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua#L111){target="_blank"} |

---


### [audioRoles](#audioroles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:audioRoles([includeSubroles]) -> table of Roles`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the list of all audio [Role](cp.ui.Role.md)s in the current list.                                                                     |
| **Parameters**                              | <ul><li>includeSubroles - if `true`, include Subroles, otherwise exclude them.</li></ul> |
| **Returns**                                 | <ul><li>A `table` of [Role](cp.apple.finalcutpro.timeline.Role.md)s, or `nil` if no UI is available currently.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua line 98](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua#L98){target="_blank"} |

---


### [doActivate](#doactivate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:doActivate(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will activate the provided role, if it is available.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the [Role](cp.apple.finalcutpro.timeline.Role.md) to activate.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Video", "Titles", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua line 144](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua#L144){target="_blank"} |

---


### [doDeactivate](#dodeactivate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:doDeactivate(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will deactivate the provided role, if it is available.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the [Role](cp.apple.finalcutpro.timeline.Role.md) to deactivate.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Video", "Titles", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua line 165](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua#L165){target="_blank"} |

---


### [doFocusInTimeline](#dofocusintimeline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:doFocusInTimeline(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will focus the provided [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md), if it is available.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the [Role](cp.apple.finalcutpro.timeline.Role.md) to activate.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Video", "Titles", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua line 186](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua#L186){target="_blank"} |

---


### [doHideSubroleLanes](#dohidesubrolelanes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:doHideSubroleLanes(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will hide subrole lanes for the provided [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md), if it is available.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the [Role](cp.apple.finalcutpro.timeline.Role.md).</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Dialogue", "Music", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua line 249](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua#L249){target="_blank"} |

---


### [doShowSubroleLanes](#doshowsubrolelanes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:doShowSubroleLanes(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will show subrole lanes for the provided [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md), if it is available.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the [Role](cp.apple.finalcutpro.timeline.Role.md).</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Dialogue", "Music", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua line 228](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua#L228){target="_blank"} |

---


### [doUnfocusInTimeline](#dounfocusintimeline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:doUnfocusInTimeline(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will unfocus the provided [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md), if it is available.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the [Role](cp.apple.finalcutpro.timeline.Role.md) to activate.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Dialogue", "Music", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua line 207](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua#L207){target="_blank"} |

---


### [filterRoles](#filterroles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:filterRoles([matcherFn]) -> table of Roles or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Filters the current list of [Role](cp.apple.finalcutpro.timeline.Role.md)s based on the given `matchesFn` predicate.                                                                     |
| **Parameters**                              | <ul><li>matchesFn - the matcher function. If not provided, no additional filtering occurs.</li></ul> |
| **Returns**                                 | <ul><li>The table of [Role](cp.apple.finalcutpro.timeline.Role.md), or `nil` if no UI is currently available.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua line 50](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua#L50){target="_blank"} |

---


### [findRoleTitled](#findroletitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:findRoleTitled(title) -> Role or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the [Role](cp.apple.finalcutpro.timeline.Role.md) with the specified title.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the role to find.</li></ul> |
| **Returns**                                 | <ul><li>The [Role](cp.apple.finalcutpro.timeline.Role.md), or `nil` if it can't be found.</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Video", "Titles", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua line 124](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua#L124){target="_blank"} |

---


### [videoRoles](#videoroles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:videoRoles([includeSubroles]) -> table of Roles`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the list of all video [Role](cp.ui.Role.md)s in the current list.                                                                     |
| **Parameters**                              | <ul><li>includeSubroles - if `true`, include Subroles, otherwise exclude them.</li></ul> |
| **Returns**                                 | <ul><li>A `table` of [Role](cp.apple.finalcutpro.timeline.Role.md)s, or `nil` if no UI is available currently.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua line 85](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/IndexRolesList.lua#L85){target="_blank"} |

---


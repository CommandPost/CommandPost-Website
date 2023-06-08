# [docs](index.md) » cp.apple.finalcutpro.timeline.IndexRolesList
---

Timeline Index Roles List.

## API Overview
* Methods - API calls which can only be made on an object returned by a constructor
 * [allRoles](#allRoles)
 * [audioRoles](#audioRoles)
 * [doActivate](#doActivate)
 * [doDeactivate](#doDeactivate)
 * [doFocusInTimeline](#doFocusInTimeline)
 * [doHideSubroleLanes](#doHideSubroleLanes)
 * [doShowSubroleLanes](#doShowSubroleLanes)
 * [doUnfocusInTimeline](#doUnfocusInTimeline)
 * [filterRoles](#filterRoles)
 * [findRoleTitled](#findRoleTitled)
 * [videoRoles](#videoRoles)

## API Documentation

### Methods

| [allRoles](#allRoles)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:allRoles([includeSubroles]) -> table of Roles`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the list of caption [Role](cp.ui.Role.md)s in the current list.                                                                     |
| **Parameters**                              | <ul><li>includeSubroles - if `true`, include Subroles, otherwise exclude them.</li></ul> |
| **Returns**                                 | <ul><li>A `table` of [Role](cp.apple.finalcutpro.timeline.Role.md)s, or `nil` if no UI is available currently.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [audioRoles](#audioRoles)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:audioRoles([includeSubroles]) -> table of Roles`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the list of all audio [Role](cp.ui.Role.md)s in the current list.                                                                     |
| **Parameters**                              | <ul><li>includeSubroles - if `true`, include Subroles, otherwise exclude them.</li></ul> |
| **Returns**                                 | <ul><li>A `table` of [Role](cp.apple.finalcutpro.timeline.Role.md)s, or `nil` if no UI is available currently.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doActivate](#doActivate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:doActivate(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will activate the provided role, if it is available.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the [Role](cp.apple.finalcutpro.timeline.Role.md) to activate.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Video", "Titles", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

| [doDeactivate](#doDeactivate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:doDeactivate(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will deactivate the provided role, if it is available.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the [Role](cp.apple.finalcutpro.timeline.Role.md) to deactivate.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Video", "Titles", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

| [doFocusInTimeline](#doFocusInTimeline)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:doFocusInTimeline(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will focus the provided [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md), if it is available.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the [Role](cp.apple.finalcutpro.timeline.Role.md) to activate.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Video", "Titles", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

| [doHideSubroleLanes](#doHideSubroleLanes)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:doHideSubroleLanes(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will hide subrole lanes for the provided [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md), if it is available.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the [Role](cp.apple.finalcutpro.timeline.Role.md).</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Dialogue", "Music", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

| [doShowSubroleLanes](#doShowSubroleLanes)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:doShowSubroleLanes(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will show subrole lanes for the provided [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md), if it is available.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the [Role](cp.apple.finalcutpro.timeline.Role.md).</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Dialogue", "Music", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

| [doUnfocusInTimeline](#doUnfocusInTimeline)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:doUnfocusInTimeline(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will unfocus the provided [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md), if it is available.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the [Role](cp.apple.finalcutpro.timeline.Role.md) to activate.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Dialogue", "Music", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

| [filterRoles](#filterRoles)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:filterRoles([matcherFn]) -> table of Roles or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Filters the current list of [Role](cp.apple.finalcutpro.timeline.Role.md)s based on the given `matchesFn` predicate.                                                                     |
| **Parameters**                              | <ul><li>matchesFn - the matcher function. If not provided, no additional filtering occurs.</li></ul> |
| **Returns**                                 | <ul><li>The table of [Role](cp.apple.finalcutpro.timeline.Role.md), or `nil` if no UI is currently available.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [findRoleTitled](#findRoleTitled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:findRoleTitled(title) -> Role or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the [Role](cp.apple.finalcutpro.timeline.Role.md) with the specified title.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the role to find.</li></ul> |
| **Returns**                                 | <ul><li>The [Role](cp.apple.finalcutpro.timeline.Role.md), or `nil` if it can't be found.</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Video", "Titles", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

| [videoRoles](#videoRoles)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRolesList:videoRoles([includeSubroles]) -> table of Roles`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the list of all video [Role](cp.ui.Role.md)s in the current list.                                                                     |
| **Parameters**                              | <ul><li>includeSubroles - if `true`, include Subroles, otherwise exclude them.</li></ul> |
| **Returns**                                 | <ul><li>A `table` of [Role](cp.apple.finalcutpro.timeline.Role.md)s, or `nil` if no UI is available currently.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


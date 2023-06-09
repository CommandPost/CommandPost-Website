# cp.apple.finalcutpro.timeline.IndexRoles

Provides access to the 'Roles' section of the [Timeline Index](cp.apple.finalcutpro.timeline.Index.md)

## API Overview
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [activate](#activate)
 * [area](#area)
 * [collapseSubroles](#collapseSubroles)
 * [editRoles](#editRoles)
 * [hideAudioLanes](#hideAudioLanes)
 * [list](#list)
 * [showAudioLanes](#showAudioLanes)
* Methods - API calls which can only be made on an object returned by a constructor
 * [allRoles](#allRoles)
 * [audioRoles](#audioRoles)
 * [captionRoles](#captionRoles)
 * [doActivate](#doActivate)
 * [doCollapseSubroles](#doCollapseSubroles)
 * [doDeactivate](#doDeactivate)
 * [doFocusInTimeline](#doFocusInTimeline)
 * [doHideAudioLanes](#doHideAudioLanes)
 * [doHideSubroleLanes](#doHideSubroleLanes)
 * [doLayout](#doLayout)
 * [doShowAudioLanes](#doShowAudioLanes)
 * [doShowSubroleLanes](#doShowSubroleLanes)
 * [doUnfocusInTimeline](#doUnfocusInTimeline)
 * [fineRoleTitled](#fineRoleTitled)
 * [saveLayout](#saveLayout)
 * [videoRoles](#videoRoles)

## API Documentation

### Fields


### [activate](#activate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles.activate <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) that activates the 'Roles' section.                                                                     |

---

### [area](#area)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles.area <cp.apple.finalcutpro.timeline.IndexRolesArea>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [IndexRolesArea](cp.apple.finalcutpro.timeline.IndexRolesArea.md) containing the list of [Role](cp.apple.finalcutpro.timeline.Role.md).                                                                     |

---

### [collapseSubroles](#collapseSubroles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles.collapseSubroles <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Collapse Subroles` [Button](cp.ui.Button.md).                                                                     |

---

### [editRoles](#editRoles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles.editRoles <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Edit Roles...` [Button](cp.ui.Button.md).                                                                     |

---

### [hideAudioLanes](#hideAudioLanes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles.hideAudioLanes <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Hide Audio Lanes` [Button](cp.ui.Button.md).                                                                     |

---

### [list](#list)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles.list <cp.apple.finalcutpro.timeline.IndexRolesList>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [IndexRolesList](cp.apple.finalcutpro.timeline.IndexRolesList.md) for the roles.                                                                     |

---

### [showAudioLanes](#showAudioLanes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles.showAudioLanes <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Show Audio Lanes` [Button](cp.ui.Button.md).                                                                     |

---
### Methods


### [allRoles](#allRoles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:allRoles([includeSubroles]) -> table of Roles`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds all Roles, optionally including all Subroles                                                                     |
| **Parameters**                              | <ul><li>includeSubroles - (defaults to `false`) if `true` include subroles.</li></ul> |
| **Returns**                                 | <ul><li>The table of [Role](cp.apple.finalcutpro.timeline.Role.md)s, or `nil` if no UI is available.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [audioRoles](#audioRoles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:audioRoles([includeSubroles]) -> table of Roles`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds all Audio Roles, optionally including all Subroles                                                                     |
| **Parameters**                              | <ul><li>includeSubroles - (defaults to `false`) if `true` include subroles.</li></ul> |
| **Returns**                                 | <ul><li>The table of [Role](cp.apple.finalcutpro.timeline.Role.md)s, or `nil` if no UI is available.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [captionRoles](#captionRoles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:captionRoles([includeSubroles]) -> table of Roles`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds all Caption Roles, optionally including all Subroles                                                                     |
| **Parameters**                              | <ul><li>includeSubroles - (defaults to `false`) if `true` include subroles.</li></ul> |
| **Returns**                                 | <ul><li>The table of [Role](cp.apple.finalcutpro.timeline.Role.md)s, or `nil` if no UI is available.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doActivate](#doActivate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:doActivate(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will activate the provided role, if it is available. This will automatically show and hide the Index if it is not currently visible.                                                                     |
| **Parameters**                              | <ul><li>The title of the [Role](cp.apple.finalcutpro.timeline.Role.md) to activate.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Video", "Titles", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

---

### [doCollapseSubroles](#doCollapseSubroles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:doCollapseSubroles() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will collapse subroles, if they are currently expanded.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doDeactivate](#doDeactivate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:doDeactivate(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will deactivate the provided role, if it is available. This will automatically show and hide the Index if it is not currently visible.                                                                     |
| **Parameters**                              | <ul><li>The title of the [Role](cp.apple.finalcutpro.timeline.Role.md) to activate.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Video", "Titles", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

---

### [doFocusInTimeline](#doFocusInTimeline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:doFocusInTimeline(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will focus the listed role, if it is available and is an [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md). This will automatically show and hide the Index if it is not currently visible.                                                                     |
| **Parameters**                              | <ul><li>The title of the [Role](cp.apple.finalcutpro.timeline.Role.md) to activate.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Dialogue", "Music", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

---

### [doHideAudioLanes](#doHideAudioLanes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:doHideAudioLanes() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will collapse subroles (if necessary) and hide the audio lanes.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doHideSubroleLanes](#doHideSubroleLanes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:doHideSubroleLanes(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will hide the subrole lanes for the listed role, if it is available and is an [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md). This will automatically show and hide the Index if it is not currently visible.                                                                     |
| **Parameters**                              | <ul><li>The title of the [Role](cp.apple.finalcutpro.timeline.Role.md).</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Dialogue", "Music", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

---

### [doLayout](#doLayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:doLayout(layout) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will apply the layout provided, if possible.                                                                     |
| **Parameters**                              | <ul><li>layout - the `table` containing the layout configuration. Usually created via the [#saveLayout] method.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShowAudioLanes](#doShowAudioLanes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:doShowAudioLanes() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will show the Audio Lanes when executed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShowSubroleLanes](#doShowSubroleLanes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:doShowSubroleLanes(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will show subrole lanes for the role, if it is available and is an [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md). This will automatically show and hide the Index if it is not currently visible.                                                                     |
| **Parameters**                              | <ul><li>The title of the [Role](cp.apple.finalcutpro.timeline.Role.md).</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Dialogue", "Music", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

---

### [doUnfocusInTimeline](#doUnfocusInTimeline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:doUnfocusInTimeline(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will unfocus the listed role, if it is available and is an [AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md). This will automatically show and hide the Index if it is not currently visible.                                                                     |
| **Parameters**                              | <ul><li>The title of the [Role](cp.apple.finalcutpro.timeline.Role.md) to activate.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Dialogue", "Music", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

---

### [fineRoleTitled](#fineRoleTitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:fineRoleTitled(title) -> Role or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the [Role](cp.apple.finalcutpro.timeline.Role.md) with the specified title.                                                                     |
| **Parameters**                              | <ul><li>title - The title to match.</li></ul> |
| **Returns**                                 | <ul><li>The [Role](cp.apple.finalcutpro.timeline.Role.md) with the title, or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>The title can be the English name (eg. "Video", "Titles", etc.) for default Roles, and it will find the correct role in the current FCPX language.</li></ul>                |

---

### [saveLayout](#saveLayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` containing the layout configuration for this class.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The layout configuration `table`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [videoRoles](#videoRoles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexRoles:videoRoles([includeSubroles]) -> table of Roles`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds all Video Roles, optionally including all Subroles                                                                     |
| **Parameters**                              | <ul><li>includeSubroles - (defaults to `false`) if `true` include subroles.</li></ul> |
| **Returns**                                 | <ul><li>The table of [Role](cp.apple.finalcutpro.timeline.Role.md)s, or `nil` if no UI is available.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

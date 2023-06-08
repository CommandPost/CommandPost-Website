# [docs](index.md) » plugins.finalcutpro.viewer.overlays
---

Final Cut Pro Viewer Overlays.

## API Overview
* Variables - Configurable values
 * [activeMemory](#activeMemory)
 * [basicGridEnabled](#basicGridEnabled)
 * [capslock](#capslock)
 * [crossHairAlpha](#crossHairAlpha)
 * [crossHairColor](#crossHairColor)
 * [crossHairEnabled](#crossHairEnabled)
 * [customCrossHairColor](#customCrossHairColor)
 * [customGridColor](#customGridColor)
 * [customGuideColor](#customGuideColor)
 * [disabled](#disabled)
 * [draggableGuideEnabled](#draggableGuideEnabled)
 * [enableViewerRightClick](#enableViewerRightClick)
 * [gridAlpha](#gridAlpha)
 * [gridColor](#gridColor)
 * [gridSpacing](#gridSpacing)
 * [guideAlpha](#guideAlpha)
 * [guideColor](#guideColor)
 * [guidePosition](#guidePosition)
 * [letterboxEnabled](#letterboxEnabled)
 * [letterboxHeight](#letterboxHeight)
 * [stillsLayout](#stillsLayout)
* Functions - API calls offered directly by the extension
 * [deleteMemory](#deleteMemory)
 * [disableAllDraggableGuides](#disableAllDraggableGuides)
 * [draggableGuidesEnabled](#draggableGuidesEnabled)
 * [enableAllDraggableGuides](#enableAllDraggableGuides)
 * [getCustomGuideColor](#getCustomGuideColor)
 * [getDraggableGuideEnabled](#getDraggableGuideEnabled)
 * [getGuideAlpha](#getGuideAlpha)
 * [getGuideColor](#getGuideColor)
 * [getGuidePosition](#getGuidePosition)
 * [getMemory](#getMemory)
 * [getStillsFolderPath](#getStillsFolderPath)
 * [hide](#hide)
 * [importMemory](#importMemory)
 * [resetDraggableGuide](#resetDraggableGuide)
 * [resetOverlays](#resetOverlays)
 * [saveMemory](#saveMemory)
 * [setCustomCrossHairColor](#setCustomCrossHairColor)
 * [setCustomGridColor](#setCustomGridColor)
 * [setCustomGuideColor](#setCustomGuideColor)
 * [setGridAlpha](#setGridAlpha)
 * [setGridColor](#setGridColor)
 * [setGridSpacing](#setGridSpacing)
 * [setGuideAlpha](#setGuideAlpha)
 * [setGuideColor](#setGuideColor)
 * [show](#show)
 * [toggleDraggableGuide](#toggleDraggableGuide)
 * [update](#update)
 * [viewMemory](#viewMemory)

## API Documentation

### Variables

| [activeMemory](#activeMemory)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.activeMemory <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Grid Color as HTML value                                                                     |

| [basicGridEnabled](#basicGridEnabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.basicGridEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Grid Enabled?                                                                     |

| [capslock](#capslock)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.capslock <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Toggle Viewer Overlays with Caps Lock.                                                                     |

| [crossHairAlpha](#crossHairAlpha)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.crossHairAlpha <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Alpha                                                                     |

| [crossHairColor](#crossHairColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.crossHairColor <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Color as HTML value                                                                     |

| [crossHairEnabled](#crossHairEnabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.crossHairEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Cross Hair Enabled?                                                                     |

| [customCrossHairColor](#customCrossHairColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.customCrossHairColor <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Cross Hair Color as HTML value                                                                     |

| [customGridColor](#customGridColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.customGridColor <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Grid Color as HTML value                                                                     |

| [customGuideColor](#customGuideColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.customGuideColor <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Guide Color as HTML value                                                                     |

| [disabled](#disabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.disabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Are all the Viewer Overlay's disabled?                                                                     |

| [draggableGuideEnabled](#draggableGuideEnabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.draggableGuideEnabled <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Grid Enabled?                                                                     |

| [enableViewerRightClick](#enableViewerRightClick)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.enableViewerRightClick <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Allow the user to right click on the top of the viewer to access the menu?                                                                     |

| [gridAlpha](#gridAlpha)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.gridAlpha <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Alpha                                                                     |

| [gridColor](#gridColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.gridColor <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Color as HTML value                                                                     |

| [gridSpacing](#gridSpacing)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.gridSpacing <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Grid Color as HTML value                                                                     |

| [guideAlpha](#guideAlpha)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.guideAlpha <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Guide Alpha                                                                     |

| [guideColor](#guideColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.guideColor <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Guide Color as HTML value                                                                     |

| [guidePosition](#guidePosition)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.guidePosition <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Guide Position.                                                                     |

| [letterboxEnabled](#letterboxEnabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.letterboxEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Letterbox Enabled?                                                                     |

| [letterboxHeight](#letterboxHeight)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.letterboxHeight <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Letterbox Height                                                                     |

| [stillsLayout](#stillsLayout)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.stillsLayout <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Stills layout.                                                                     |

### Functions

| [deleteMemory](#deleteMemory)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.deleteMemory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deletes a memory.                                                                     |
| **Parameters**                              | <ul><li>id - An identifier in the form of a number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [disableAllDraggableGuides](#disableAllDraggableGuides)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.disableAllDraggableGuides() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Disable all draggable guides.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [draggableGuidesEnabled](#draggableGuidesEnabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.draggableGuidesEnabled() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Are any draggable guides enabled?                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if at least one draggable guide is enabled otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [enableAllDraggableGuides](#enableAllDraggableGuides)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.enableAllDraggableGuides() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enable all draggable guides.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getCustomGuideColor](#getCustomGuideColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getCustomGuideColor(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Custom Guide Color.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getDraggableGuideEnabled](#getDraggableGuideEnabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getDraggableGuideEnabled(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Enabled.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getGuideAlpha](#getGuideAlpha)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getGuideAlpha() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Alpha.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getGuideColor](#getGuideColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getGuideColor(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Color.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getGuidePosition](#getGuidePosition)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getGuidePosition() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Position.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getMemory](#getMemory)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getMemory(id) -> image | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets an image from memory.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the memory you want to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>The memory as a `hs.image` or `nil` if the memory could not be retrieved.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getStillsFolderPath](#getStillsFolderPath)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getStillsFolderPath() -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the stills folder path.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The stills folder path as a string or `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hide](#hide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.hide() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Hides the Viewer Grid.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [importMemory](#importMemory)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.importMemory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Import a file to memory.                                                                     |
| **Parameters**                              | <ul><li>id - An identifier in the form of a number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [resetDraggableGuide](#resetDraggableGuide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.resetDraggableGuide(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reset a specific Draggable Guide.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [resetOverlays](#resetOverlays)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.resetOverlays() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets all overlays to their default values.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [saveMemory](#saveMemory)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.saveMemory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves a still frame to file.                                                                     |
| **Parameters**                              | <ul><li>id - An identifier in the form of a number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setCustomCrossHairColor](#setCustomCrossHairColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setCustomCrossHairColor() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pops up a Color Dialog box allowing the user to select a custom colour for cross hairs.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setCustomGridColor](#setCustomGridColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setCustomGridColor() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pops up a Color Dialog box allowing the user to select a custom colour for grid lines.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setCustomGuideColor](#setCustomGuideColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setCustomGuideColor() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pops up a Color Dialog box allowing the user to select a custom colour for guide lines.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setGridAlpha](#setGridAlpha)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGridAlpha(value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Grid Alpha.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setGridColor](#setGridColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGridColor(value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Grid Color.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setGridSpacing](#setGridSpacing)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGridSpacing(value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Grid Spacing.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setGuideAlpha](#setGuideAlpha)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGuideAlpha(id, value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Guide Alpha.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setGuideColor](#setGuideColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGuideColor(id, value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Guide Color.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.show() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Show's the Viewer Grid.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [toggleDraggableGuide](#toggleDraggableGuide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.toggleDraggableGuide(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggle Guide Enabled.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [update](#update)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Viewer Grid.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [viewMemory](#viewMemory)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.viewMemory(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | View a memory.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the memory you want to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |


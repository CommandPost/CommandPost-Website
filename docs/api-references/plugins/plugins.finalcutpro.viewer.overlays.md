# plugins.finalcutpro.viewer.overlays

Final Cut Pro Viewer Overlays.

---

## API Overview
**Variables** - _Configurable values_
 * [activeMemory](#activememory)
 * [basicGridEnabled](#basicgridenabled)
 * [capslock](#capslock)
 * [crossHairAlpha](#crosshairalpha)
 * [crossHairColor](#crosshaircolor)
 * [crossHairEnabled](#crosshairenabled)
 * [customCrossHairColor](#customcrosshaircolor)
 * [customGridColor](#customgridcolor)
 * [customGuideColor](#customguidecolor)
 * [disabled](#disabled)
 * [draggableGuideEnabled](#draggableguideenabled)
 * [enableViewerRightClick](#enableviewerrightclick)
 * [gridAlpha](#gridalpha)
 * [gridColor](#gridcolor)
 * [gridSpacing](#gridspacing)
 * [guideAlpha](#guidealpha)
 * [guideColor](#guidecolor)
 * [guidePosition](#guideposition)
 * [letterboxEnabled](#letterboxenabled)
 * [letterboxHeight](#letterboxheight)
 * [stillsLayout](#stillslayout)

**Functions** - _API calls offered directly by the extension_
 * [deleteMemory](#deletememory)
 * [disableAllDraggableGuides](#disablealldraggableguides)
 * [draggableGuidesEnabled](#draggableguidesenabled)
 * [enableAllDraggableGuides](#enablealldraggableguides)
 * [getCustomGuideColor](#getcustomguidecolor)
 * [getDraggableGuideEnabled](#getdraggableguideenabled)
 * [getGuideAlpha](#getguidealpha)
 * [getGuideColor](#getguidecolor)
 * [getGuidePosition](#getguideposition)
 * [getMemory](#getmemory)
 * [getStillsFolderPath](#getstillsfolderpath)
 * [hide](#hide)
 * [importMemory](#importmemory)
 * [resetDraggableGuide](#resetdraggableguide)
 * [resetOverlays](#resetoverlays)
 * [saveMemory](#savememory)
 * [setCustomCrossHairColor](#setcustomcrosshaircolor)
 * [setCustomGridColor](#setcustomgridcolor)
 * [setCustomGuideColor](#setcustomguidecolor)
 * [setGridAlpha](#setgridalpha)
 * [setGridColor](#setgridcolor)
 * [setGridSpacing](#setgridspacing)
 * [setGuideAlpha](#setguidealpha)
 * [setGuideColor](#setguidecolor)
 * [show](#show)
 * [toggleDraggableGuide](#toggledraggableguide)
 * [update](#update)
 * [viewMemory](#viewmemory)


---

## API Documentation

### Variables


### [activeMemory](#activememory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.activeMemory <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Grid Color as HTML value                                                                     |

---

### [basicGridEnabled](#basicgridenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.basicGridEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Grid Enabled?                                                                     |

---

### [capslock](#capslock)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.capslock <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Toggle Viewer Overlays with Caps Lock.                                                                     |

---

### [crossHairAlpha](#crosshairalpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.crossHairAlpha <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Alpha                                                                     |

---

### [crossHairColor](#crosshaircolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.crossHairColor <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Color as HTML value                                                                     |

---

### [crossHairEnabled](#crosshairenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.crossHairEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Cross Hair Enabled?                                                                     |

---

### [customCrossHairColor](#customcrosshaircolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.customCrossHairColor <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Cross Hair Color as HTML value                                                                     |

---

### [customGridColor](#customgridcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.customGridColor <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Grid Color as HTML value                                                                     |

---

### [customGuideColor](#customguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.customGuideColor <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Guide Color as HTML value                                                                     |

---

### [disabled](#disabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.disabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Are all the Viewer Overlay's disabled?                                                                     |

---

### [draggableGuideEnabled](#draggableguideenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.draggableGuideEnabled <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Grid Enabled?                                                                     |

---

### [enableViewerRightClick](#enableviewerrightclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.enableViewerRightClick <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Allow the user to right click on the top of the viewer to access the menu?                                                                     |

---

### [gridAlpha](#gridalpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.gridAlpha <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Alpha                                                                     |

---

### [gridColor](#gridcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.gridColor <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Color as HTML value                                                                     |

---

### [gridSpacing](#gridspacing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.gridSpacing <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Grid Color as HTML value                                                                     |

---

### [guideAlpha](#guidealpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.guideAlpha <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Guide Alpha                                                                     |

---

### [guideColor](#guidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.guideColor <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Guide Color as HTML value                                                                     |

---

### [guidePosition](#guideposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.guidePosition <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Guide Position.                                                                     |

---

### [letterboxEnabled](#letterboxenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.letterboxEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Letterbox Enabled?                                                                     |

---

### [letterboxHeight](#letterboxheight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.letterboxHeight <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Letterbox Height                                                                     |

---

### [stillsLayout](#stillslayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.stillsLayout <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Stills layout.                                                                     |

---
### Functions


### [deleteMemory](#deletememory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.deleteMemory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deletes a memory.                                                                     |
| **Parameters**                              | <ul><li>id - An identifier in the form of a number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [disableAllDraggableGuides](#disablealldraggableguides)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.disableAllDraggableGuides() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Disable all draggable guides.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [draggableGuidesEnabled](#draggableguidesenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.draggableGuidesEnabled() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Are any draggable guides enabled?                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if at least one draggable guide is enabled otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [enableAllDraggableGuides](#enablealldraggableguides)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.enableAllDraggableGuides() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enable all draggable guides.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getCustomGuideColor](#getcustomguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getCustomGuideColor(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Custom Guide Color.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getDraggableGuideEnabled](#getdraggableguideenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getDraggableGuideEnabled(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Enabled.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getGuideAlpha](#getguidealpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getGuideAlpha() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Alpha.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getGuideColor](#getguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getGuideColor(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Color.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getGuidePosition](#getguideposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getGuidePosition() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Position.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getMemory](#getmemory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getMemory(id) -> image | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets an image from memory.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the memory you want to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>The memory as a `hs.image` or `nil` if the memory could not be retrieved.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getStillsFolderPath](#getstillsfolderpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getStillsFolderPath() -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the stills folder path.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The stills folder path as a string or `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.hide() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Hides the Viewer Grid.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [importMemory](#importmemory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.importMemory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Import a file to memory.                                                                     |
| **Parameters**                              | <ul><li>id - An identifier in the form of a number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [resetDraggableGuide](#resetdraggableguide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.resetDraggableGuide(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reset a specific Draggable Guide.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [resetOverlays](#resetoverlays)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.resetOverlays() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets all overlays to their default values.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [saveMemory](#savememory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.saveMemory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves a still frame to file.                                                                     |
| **Parameters**                              | <ul><li>id - An identifier in the form of a number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setCustomCrossHairColor](#setcustomcrosshaircolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setCustomCrossHairColor() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pops up a Color Dialog box allowing the user to select a custom colour for cross hairs.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setCustomGridColor](#setcustomgridcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setCustomGridColor() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pops up a Color Dialog box allowing the user to select a custom colour for grid lines.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setCustomGuideColor](#setcustomguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setCustomGuideColor() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pops up a Color Dialog box allowing the user to select a custom colour for guide lines.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setGridAlpha](#setgridalpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGridAlpha(value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Grid Alpha.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setGridColor](#setgridcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGridColor(value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Grid Color.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setGridSpacing](#setgridspacing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGridSpacing(value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Grid Spacing.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setGuideAlpha](#setguidealpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGuideAlpha(id, value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Guide Alpha.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setGuideColor](#setguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGuideColor(id, value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Guide Color.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.show() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Show's the Viewer Grid.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [toggleDraggableGuide](#toggledraggableguide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.toggleDraggableGuide(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggle Guide Enabled.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Viewer Grid.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [viewMemory](#viewmemory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.viewMemory(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | View a memory.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the memory you want to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

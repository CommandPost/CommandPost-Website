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

#### Variables


### [activeMemory](#activememory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.activeMemory <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Grid Color as HTML value                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 148](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L148) |

---


### [basicGridEnabled](#basicgridenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.basicGridEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Grid Enabled?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 113](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L113) |

---


### [capslock](#capslock)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.capslock <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Toggle Viewer Overlays with Caps Lock.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 188](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L188) |

---


### [crossHairAlpha](#crosshairalpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.crossHairAlpha <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Alpha                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 123](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L123) |

---


### [crossHairColor](#crosshaircolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.crossHairColor <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Color as HTML value                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 118](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L118) |

---


### [crossHairEnabled](#crosshairenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.crossHairEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Cross Hair Enabled?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 98](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L98) |

---


### [customCrossHairColor](#customcrosshaircolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.customCrossHairColor <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Cross Hair Color as HTML value                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 183](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L183) |

---


### [customGridColor](#customgridcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.customGridColor <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Grid Color as HTML value                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 138](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L138) |

---


### [customGuideColor](#customguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.customGuideColor <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Guide Color as HTML value                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 178](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L178) |

---


### [disabled](#disabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.disabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Are all the Viewer Overlay's disabled?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L93) |

---


### [draggableGuideEnabled](#draggableguideenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.draggableGuideEnabled <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Grid Enabled?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 158](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L158) |

---


### [enableViewerRightClick](#enableviewerrightclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.enableViewerRightClick <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Allow the user to right click on the top of the viewer to access the menu?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 88](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L88) |

---


### [gridAlpha](#gridalpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.gridAlpha <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Alpha                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 133](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L133) |

---


### [gridColor](#gridcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.gridColor <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Color as HTML value                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 128](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L128) |

---


### [gridSpacing](#gridspacing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.gridSpacing <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Grid Color as HTML value                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 143](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L143) |

---


### [guideAlpha](#guidealpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.guideAlpha <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Guide Alpha                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 173](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L173) |

---


### [guideColor](#guidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.guideColor <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Guide Color as HTML value                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 168](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L168) |

---


### [guidePosition](#guideposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.guidePosition <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Guide Position.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 163](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L163) |

---


### [letterboxEnabled](#letterboxenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.letterboxEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Letterbox Enabled?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 103](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L103) |

---


### [letterboxHeight](#letterboxheight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.letterboxHeight <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Letterbox Height                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 108](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L108) |

---


### [stillsLayout](#stillslayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.stillsLayout <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Stills layout.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 153](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L153) |

---

#### Functions


### [deleteMemory](#deletememory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.deleteMemory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deletes a memory.                                                                     |
| **Parameters**                              | <ul><li>id - An identifier in the form of a number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1125](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1125) |

---


### [disableAllDraggableGuides](#disablealldraggableguides)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.disableAllDraggableGuides() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Disable all draggable guides.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1502](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1502) |

---


### [draggableGuidesEnabled](#draggableguidesenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.draggableGuidesEnabled() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Are any draggable guides enabled?                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if at least one draggable guide is enabled otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 596](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L596) |

---


### [enableAllDraggableGuides](#enablealldraggableguides)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.enableAllDraggableGuides() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enable all draggable guides.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1484](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1484) |

---


### [getCustomGuideColor](#getcustomguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getCustomGuideColor(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Custom Guide Color.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1403](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1403) |

---


### [getDraggableGuideEnabled](#getdraggableguideenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getDraggableGuideEnabled(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Enabled.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1520](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1520) |

---


### [getGuideAlpha](#getguidealpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getGuideAlpha() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Alpha.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1373](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1373) |

---


### [getGuideColor](#getguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getGuideColor(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Color.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1388](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1388) |

---


### [getGuidePosition](#getguideposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getGuidePosition() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Position.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1358](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1358) |

---


### [getMemory](#getmemory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getMemory(id) -> image | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets an image from memory.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the memory you want to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>The memory as a `hs.image` or `nil` if the memory could not be retrieved.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1209](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1209) |

---


### [getStillsFolderPath](#getstillsfolderpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getStillsFolderPath() -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the stills folder path.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The stills folder path as a string or `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1100](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1100) |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.hide() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Hides the Viewer Grid.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 580](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L580) |

---


### [importMemory](#importmemory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.importMemory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Import a file to memory.                                                                     |
| **Parameters**                              | <ul><li>id - An identifier in the form of a number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1179](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1179) |

---


### [resetDraggableGuide](#resetdraggableguide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.resetDraggableGuide(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reset a specific Draggable Guide.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1556](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1556) |

---


### [resetOverlays](#resetoverlays)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.resetOverlays() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets all overlays to their default values.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1594](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1594) |

---


### [saveMemory](#savememory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.saveMemory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves a still frame to file.                                                                     |
| **Parameters**                              | <ul><li>id - An identifier in the form of a number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1149](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1149) |

---


### [setCustomCrossHairColor](#setcustomcrosshaircolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setCustomCrossHairColor() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pops up a Color Dialog box allowing the user to select a custom colour for cross hairs.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1319](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1319) |

---


### [setCustomGridColor](#setcustomgridcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setCustomGridColor() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pops up a Color Dialog box allowing the user to select a custom colour for grid lines.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1296](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1296) |

---


### [setCustomGuideColor](#setcustomguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setCustomGuideColor() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pops up a Color Dialog box allowing the user to select a custom colour for guide lines.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1454](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1454) |

---


### [setGridAlpha](#setgridalpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGridAlpha(value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Grid Alpha.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1268](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1268) |

---


### [setGridColor](#setgridcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGridColor(value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Grid Color.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1282](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1282) |

---


### [setGridSpacing](#setgridspacing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGridSpacing(value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Grid Spacing.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1254](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1254) |

---


### [setGuideAlpha](#setguidealpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGuideAlpha(id, value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Guide Alpha.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1418](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1418) |

---


### [setGuideColor](#setguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGuideColor(id, value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Guide Color.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1436](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1436) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.show() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Show's the Viewer Grid.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 200](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L200) |

---


### [toggleDraggableGuide](#toggledraggableguide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.toggleDraggableGuide(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggle Guide Enabled.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1535](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1535) |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Viewer Grid.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 961](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L961) |

---


### [viewMemory](#viewmemory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.viewMemory(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | View a memory.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the memory you want to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1232](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1232) |

---


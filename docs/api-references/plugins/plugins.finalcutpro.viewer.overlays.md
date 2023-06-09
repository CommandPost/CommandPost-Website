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
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 148](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L148){target="_blank"} |

---


### [basicGridEnabled](#basicgridenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.basicGridEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Grid Enabled?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 113](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L113){target="_blank"} |

---


### [capslock](#capslock)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.capslock <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Toggle Viewer Overlays with Caps Lock.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 188](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L188){target="_blank"} |

---


### [crossHairAlpha](#crosshairalpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.crossHairAlpha <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Alpha                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 123](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L123){target="_blank"} |

---


### [crossHairColor](#crosshaircolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.crossHairColor <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Color as HTML value                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 118](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L118){target="_blank"} |

---


### [crossHairEnabled](#crosshairenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.crossHairEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Cross Hair Enabled?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 98](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L98){target="_blank"} |

---


### [customCrossHairColor](#customcrosshaircolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.customCrossHairColor <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Cross Hair Color as HTML value                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 183](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L183){target="_blank"} |

---


### [customGridColor](#customgridcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.customGridColor <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Grid Color as HTML value                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 138](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L138){target="_blank"} |

---


### [customGuideColor](#customguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.customGuideColor <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Guide Color as HTML value                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 178](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L178){target="_blank"} |

---


### [disabled](#disabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.disabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Are all the Viewer Overlay's disabled?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L93){target="_blank"} |

---


### [draggableGuideEnabled](#draggableguideenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.draggableGuideEnabled <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Grid Enabled?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 158](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L158){target="_blank"} |

---


### [enableViewerRightClick](#enableviewerrightclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.enableViewerRightClick <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Allow the user to right click on the top of the viewer to access the menu?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 88](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L88){target="_blank"} |

---


### [gridAlpha](#gridalpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.gridAlpha <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Alpha                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 133](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L133){target="_blank"} |

---


### [gridColor](#gridcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.gridColor <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Grid Color as HTML value                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 128](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L128){target="_blank"} |

---


### [gridSpacing](#gridspacing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.gridSpacing <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Custom Grid Color as HTML value                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 143](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L143){target="_blank"} |

---


### [guideAlpha](#guidealpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.guideAlpha <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Guide Alpha                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 173](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L173){target="_blank"} |

---


### [guideColor](#guidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.guideColor <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Viewer Guide Color as HTML value                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 168](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L168){target="_blank"} |

---


### [guidePosition](#guideposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.guidePosition <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Guide Position.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 163](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L163){target="_blank"} |

---


### [letterboxEnabled](#letterboxenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.letterboxEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is Viewer Letterbox Enabled?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 103](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L103){target="_blank"} |

---


### [letterboxHeight](#letterboxheight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.letterboxHeight <cp.prop: number>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Letterbox Height                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 108](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L108){target="_blank"} |

---


### [stillsLayout](#stillslayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.stillsLayout <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Stills layout.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 153](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L153){target="_blank"} |

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
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1125](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1125){target="_blank"} |

---


### [disableAllDraggableGuides](#disablealldraggableguides)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.disableAllDraggableGuides() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Disable all draggable guides.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1502](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1502){target="_blank"} |

---


### [draggableGuidesEnabled](#draggableguidesenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.draggableGuidesEnabled() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Are any draggable guides enabled?                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if at least one draggable guide is enabled otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 596](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L596){target="_blank"} |

---


### [enableAllDraggableGuides](#enablealldraggableguides)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.enableAllDraggableGuides() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enable all draggable guides.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1484](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1484){target="_blank"} |

---


### [getCustomGuideColor](#getcustomguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getCustomGuideColor(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Custom Guide Color.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1403](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1403){target="_blank"} |

---


### [getDraggableGuideEnabled](#getdraggableguideenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getDraggableGuideEnabled(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Enabled.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1520](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1520){target="_blank"} |

---


### [getGuideAlpha](#getguidealpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getGuideAlpha() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Alpha.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1373](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1373){target="_blank"} |

---


### [getGuideColor](#getguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getGuideColor(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Color.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1388](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1388){target="_blank"} |

---


### [getGuidePosition](#getguideposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getGuidePosition() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get Guide Position.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1358](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1358){target="_blank"} |

---


### [getMemory](#getmemory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getMemory(id) -> image | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets an image from memory.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the memory you want to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>The memory as a `hs.image` or `nil` if the memory could not be retrieved.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1209](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1209){target="_blank"} |

---


### [getStillsFolderPath](#getstillsfolderpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.getStillsFolderPath() -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the stills folder path.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The stills folder path as a string or `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1100](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1100){target="_blank"} |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.hide() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Hides the Viewer Grid.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 580](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L580){target="_blank"} |

---


### [importMemory](#importmemory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.importMemory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Import a file to memory.                                                                     |
| **Parameters**                              | <ul><li>id - An identifier in the form of a number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1179](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1179){target="_blank"} |

---


### [resetDraggableGuide](#resetdraggableguide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.resetDraggableGuide(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reset a specific Draggable Guide.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1556](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1556){target="_blank"} |

---


### [resetOverlays](#resetoverlays)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.resetOverlays() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets all overlays to their default values.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1594](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1594){target="_blank"} |

---


### [saveMemory](#savememory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.saveMemory() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves a still frame to file.                                                                     |
| **Parameters**                              | <ul><li>id - An identifier in the form of a number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1149](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1149){target="_blank"} |

---


### [setCustomCrossHairColor](#setcustomcrosshaircolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setCustomCrossHairColor() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pops up a Color Dialog box allowing the user to select a custom colour for cross hairs.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1319](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1319){target="_blank"} |

---


### [setCustomGridColor](#setcustomgridcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setCustomGridColor() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pops up a Color Dialog box allowing the user to select a custom colour for grid lines.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1296](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1296){target="_blank"} |

---


### [setCustomGuideColor](#setcustomguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setCustomGuideColor() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pops up a Color Dialog box allowing the user to select a custom colour for guide lines.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1454](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1454){target="_blank"} |

---


### [setGridAlpha](#setgridalpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGridAlpha(value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Grid Alpha.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1268](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1268){target="_blank"} |

---


### [setGridColor](#setgridcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGridColor(value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Grid Color.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1282](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1282){target="_blank"} |

---


### [setGridSpacing](#setgridspacing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGridSpacing(value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Grid Spacing.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1254](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1254){target="_blank"} |

---


### [setGuideAlpha](#setguidealpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGuideAlpha(id, value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Guide Alpha.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1418](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1418){target="_blank"} |

---


### [setGuideColor](#setguidecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.setGuideColor(id, value) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets Guide Color.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li><li>value - The value you want to set.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1436](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1436){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.show() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Show's the Viewer Grid.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 200](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L200){target="_blank"} |

---


### [toggleDraggableGuide](#toggledraggableguide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.toggleDraggableGuide(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggle Guide Enabled.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the guide.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1535](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1535){target="_blank"} |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Viewer Grid.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 961](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L961){target="_blank"} |

---


### [viewMemory](#viewmemory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.viewer.overlays.viewMemory(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | View a memory.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the memory you want to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/viewer/overlays.lua line 1232](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/viewer/overlays.lua#L1232){target="_blank"} |

---


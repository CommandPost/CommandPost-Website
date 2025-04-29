# cp.apple.finalcutpro.inspector.color.ColorBoardAspect

Represents a particular aspect of the color board (Color/Saturation/Exposure).

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [ids](#ids)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [ColorBoardAspect](#colorboardaspect)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [highlights](#highlights)
 * [master](#master)
 * [midtones](#midtones)
 * [selected](#selected)
 * [shadows](#shadows)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doShow](#doshow)
 * [hasAngle](#hasangle)
 * [id](#id)
 * [index](#index)
 * [reset](#reset)
 * [show](#show)


---

## API Documentation

#### Constants


### [ids](#ids)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoardAspect.ids -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table containing the list of aspect IDs ("color", "saturation", "exposure").                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua line 20](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua#L20) |

---

#### Constructors


### [ColorBoardAspect](#colorboardaspect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoardAspect(parent, index[, hasAngle]) -> ColorBoardAspect`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `ColorBoardAspect` object.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li><li>index - The Color Board Aspect Index.</li><li>hasAngle - If `true`, the aspect has an `angle` parameter. Defaults to `false`</li></ul> |
| **Returns**                                 | <ul><li>A new `ColorBoardAspect object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua line 38](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua#L38) |

---

#### Fields


### [highlights](#highlights)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoardAspect.highlights <ColorPuck>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Highlights ColorPuck object.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua line 222](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua#L222) |

---


### [master](#master)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoardAspect.master <ColorPuck>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Master ColorPuck object.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua line 189](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua#L189) |

---


### [midtones](#midtones)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoardAspect.midtones <ColorPuck>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Midtones ColorPuck object.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua line 211](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua#L211) |

---


### [selected](#selected)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoardAspect:selected() -> boolean`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the Color Board Aspect selected?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua line 68](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua#L68) |

---


### [shadows](#shadows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoardAspect.shadows <ColorPuck>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Shadows ColorPuck object.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua line 200](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua#L200) |

---

#### Methods


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoardAspect:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that shows this Color Board Aspect.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successful or throwing an error if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua line 94](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua#L94) |

---


### [hasAngle](#hasangle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoardAspect:hasAngle() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the aspect has an `angle` property.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if it has an `angle` propery.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua line 128](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua#L128) |

---


### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoardAspect:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the Color Board Aspect ID.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID as string.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua line 141](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua#L141) |

---


### [index](#index)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoardAspect:index() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the Color Board Aspect index.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua line 115](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua#L115) |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoardAspect:reset() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that resets all pucks in the the Color Board Aspect.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which will resolve to `true` if sucessful, or throws an error if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua line 172](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua#L172) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoardAspect:show() -> cp.apple.finalcutpro.inspector.color.ColorBoardAspect`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Color Board Aspect                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.inspector.color.ColorBoardAspect` object for method chaining.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua line 75](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/color/ColorBoardAspect.lua#L75) |

---


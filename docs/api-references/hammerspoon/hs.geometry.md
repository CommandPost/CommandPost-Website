# hs.geometry

Utility object to represent points, sizes and rects in a bidimensional plane

An hs.geometry object can be:
 * a *point*, or vector2, with `x` and `y` fields for its coordinates
 * a *size* with `w` and `h` fields for width and height respectively
 * a *rect*, which has both a point component for one of its corners, and a size component - so it has all 4 fields
 * a *unit rect*, which is a rect with all fields between 0 and 1; it represents a "relative" rect within another (absolute) rect
   (e.g. a unit rect `x=0,y=0 , w=0.5,h=0.5` is the quarter portion closest to the origin); please note that hs.geometry
   makes no distinction internally between regular rects and unit rects; you can convert to and from as needed via the appropriate methods

You can create these objects in many different ways, via `my_obj=hs.geometry.new(...)` or simply `my_obj=hs.geometry(...)`
by passing any of the following:
 * 4 parameters `X,Y,W,H` for the respective fields - W and H, or X and Y, can be `nil`:
   * `hs.geometry(X,Y)` creates a point
   * `hs.geometry(nil,nil,W,H)` creates a size
   * `hs.geometry(X,Y,W,H)` creates a rect given its width and height from a corner
 * a table `{X,Y}` creates a point
 * a table `{X,Y,W,H}` creates a rect
 * a table `{x=X,y=Y,w=W,h=H}` creates a rect, or if you omit X and Y, or W and H, creates a size or a point respectively
 * a table `{x1=X1,y1=Y1,x2=X2,y2=Y2}` creates a rect, where X1,Y1 and X2,Y2 are the coordinates of opposite corners
 * a string:
   * `"X Y"` or `"X,Y"` creates a point
   * `"WxH"` or `"W*H"` creates a size
   * `"X Y/WxH"` or `"X,Y W*H"` (or variations thereof) creates a rect given its width and height from a corner
   * `"X1,Y1>X2,Y2"` or `"X1 Y1 X2 Y2"` (or variations thereof) creates a rect given two opposite corners
   * `"[X,Y WxH]"` or `"[X1,Y1 X2,Y2]"` or variations (note the square brackets) creates a unit rect where x=X/100, y=Y/100, w=W/100, h=H/100
 * a point and a size `"X Y","WxH"` or `{x=X,y=Y},{w=W,h=H}` create a rect

You can use any of these anywhere an hs.geometry object is expected in Hammerspoon; the constructor will be called for you.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [copy](#copy)
 * [new](#new)
 * [point](#point)
 * [rect](#rect)
 * [size](#size)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [area](#area)
 * [aspect](#aspect)
 * [bottomright](#bottomright)
 * [center](#center)
 * [h](#h)
 * [length](#length)
 * [string](#string)
 * [table](#table)
 * [topleft](#topleft)
 * [w](#w)
 * [wh](#wh)
 * [x](#x)
 * [x1](#x1)
 * [x2](#x2)
 * [x2y2](#x2y2)
 * [xy](#xy)
 * [y](#y)
 * [y1](#y1)
 * [y2](#y2)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [angle](#angle)
 * [angleTo](#angleto)
 * [distance](#distance)
 * [equals](#equals)
 * [fit](#fit)
 * [floor](#floor)
 * [fromUnitRect](#fromunitrect)
 * [inside](#inside)
 * [intersect](#intersect)
 * [move](#move)
 * [normalize](#normalize)
 * [rotateCCW](#rotateccw)
 * [scale](#scale)
 * [toUnitRect](#tounitrect)
 * [type](#type)
 * [union](#union)
 * [vector](#vector)


---

## API Documentation

#### Constructors


### [copy](#copy)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.copy(geom) -> hs.geometry object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a copy of an hs.geometry object                                                                     |
| **Parameters**                              | <ul><li>geom - an hs.geometry object to copy</li></ul> |
| **Returns**                                 | <ul><li>a newly created copy of the hs.geometry object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 151](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L151) |

---


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.new(...) -> hs.geometry object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new hs.geometry object                                                                     |
| **Parameters**                              | <ul><li>... - see the module description at the top</li></ul> |
| **Returns**                                 | <ul><li>a newly created hs.geometry object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 141](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L141) |

---


### [point](#point)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.point(x, y) -> hs.geometry point`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Convenience function for creating a point object                                                                     |
| **Parameters**                              | <ul><li>x - A number containing the horizontal co-ordinate of the point</li><li>y - A number containing the vertical co-ordinate of the point</li></ul> |
| **Returns**                                 | <ul><li>An hs.geometry point object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 732](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L732) |

---


### [rect](#rect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.rect(x, y, w, h) -> hs.geometry rect`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Convenience function for creating a rect-table                                                                     |
| **Parameters**                              | <ul><li>x - A number containing the horizontal co-ordinate of the top-left point of the rect</li><li>y - A number containing the vertical co-ordinate of the top-left point of the rect</li><li>w - A number containing the width of the rect</li><li>h - A number containing the height of the rect</li></ul> |
| **Returns**                                 | <ul><li>An hs.geometry rect object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 717](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L717) |

---


### [size](#size)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.size(w, h) -> hs.geometry size`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Convenience function for creating a size object                                                                     |
| **Parameters**                              | <ul><li>w - A number containing a width</li><li>h - A number containing a height</li></ul> |
| **Returns**                                 | <ul><li>An hs.geometry size object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 744](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L744) |

---

#### Fields


### [area](#area)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.area`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A number representing the area of this rect or size; changing it will scale the rect/size - see `hs.geometry:scale()`                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 333](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L333) |

---


### [aspect](#aspect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.aspect`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A number representing the aspect ratio of this rect or size; changing it will reshape the rect/size, keeping its area and center constant                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 352](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L352) |

---


### [bottomright](#bottomright)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.bottomright`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Alias for `x2y2`                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 267](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L267) |

---


### [center](#center)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.center`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A point representing the geometric center of this rect or the midpoint of this vector2; changing it will move the rect/vector accordingly                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 305](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L305) |

---


### [h](#h)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.h`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The height of this rect or size; changing it will keep the rect's x,y corner constant                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 218](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L218) |

---


### [length](#length)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.length`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A number representing the length of the diagonal of this rect, or the length of this vector2; changing it will scale the rect/vector - see `hs.geometry:scale()`                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 318](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L318) |

---


### [string](#string)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.string`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `"X,Y/WxH"` string for this hs.geometry object (*reduced precision*); useful e.g. for logging                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 281](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L281) |

---


### [table](#table)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.table`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `{x=X,y=Y,w=W,h=H}` table for this hs.geometry object; useful e.g. for serialization/deserialization                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 275](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L275) |

---


### [topleft](#topleft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.topleft`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Alias for `xy`                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 206](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L206) |

---


### [w](#w)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.w`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The width of this rect or size; changing it will keep the rect's x,y corner constant                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 214](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L214) |

---


### [wh](#wh)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.wh`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The size component for this hs.geometry object; setting this to a new size will keep the rect's x,y corner constant                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 251](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L251) |

---


### [x](#x)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.x`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The x coordinate for this point or rect's corner; changing it will move the rect but keep the same width and height                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 173](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L173) |

---


### [x1](#x1)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.x1`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Alias for `x`                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 181](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L181) |

---


### [x2](#x2)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.x2`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The x coordinate for the second corner of this rect; changing it will affect the rect's width                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 231](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L231) |

---


### [x2y2](#x2y2)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.x2y2`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The point denoting the other corner of this hs.geometry object; setting this to a new point will change the rect's width and height                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 263](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L263) |

---


### [xy](#xy)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.xy`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The point component for this hs.geometry object; setting this to a new point will move the rect but keep the same width and height                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 202](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L202) |

---


### [y](#y)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.y`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The y coordinate for this point or rect's corner; changing it will move the rect but keep the same width and height                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 177](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L177) |

---


### [y1](#y1)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.y1`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Alias for `y`                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 185](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L185) |

---


### [y2](#y2)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry.y2`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The y coordinate for the second corner of this rect; changing it will affect the rect's height                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 235](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L235) |

---

#### Methods


### [angle](#angle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:angle() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the angle between the positive x axis and this vector2                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a number representing the angle in radians</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 516](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L516) |

---


### [angleTo](#angleto)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:angleTo(point) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the angle between the positive x axis and the vector connecting this point or rect's center to another point or rect's center                                                                     |
| **Parameters**                              | <ul><li>point - an hs.geometry object, or a table or string or parameter list to construct one; if a rect, uses the rect's center</li></ul> |
| **Returns**                                 | <ul><li>a number representing the angle in radians</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 529](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L529) |

---


### [distance](#distance)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:distance(point) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the distance between this point or rect's center and another point or rect's center                                                                     |
| **Parameters**                              | <ul><li>point - an hs.geometry object, or a table or string or parameter list to construct one; if a rect, uses the rect's center</li></ul> |
| **Returns**                                 | <ul><li>a number indicating the distance</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 542](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L542) |

---


### [equals](#equals)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:equals(other) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if two geometry objects are equal                                                                     |
| **Parameters**                              | <ul><li>other - another hs.geometry object, or a table or string or parameter list to construct one</li></ul> |
| **Returns**                                 | <ul><li>`true` if this hs.geometry object perfectly overlaps other, `false` otherwise</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 390](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L390) |

---


### [fit](#fit)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:fit(bounds) -> hs.geometry object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Ensure this rect is fully inside `bounds`, by scaling it down if it's larger (preserving its aspect ratio) and moving it if necessary                                                                     |
| **Parameters**                              | <ul><li>bounds - an hs.geometry rect object, or a table or string or parameter list to construct one, indicating the rect that must fully contain this rect</li></ul> |
| **Returns**                                 | <ul><li>this hs.geometry object for method chaining</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 448](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L448) |

---


### [floor](#floor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:floor() -> hs.geometry object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Truncates all coordinates in this object to integers                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>this hs.geometry point for method chaining</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 483](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L483) |

---


### [fromUnitRect](#fromunitrect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:fromUnitRect(frame) -> hs.geometry rect`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Converts a unit rect within a given frame into a rect                                                                     |
| **Parameters**                              | <ul><li>frame - an hs.geometry rect (with `w` and `h` >0)</li></ul> |
| **Returns**                                 | <ul><li>An hs.geometry rect object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 672](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L672) |

---


### [inside](#inside)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:inside(rect) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if this hs.geometry object lies fully inside a given rect                                                                     |
| **Parameters**                              | <ul><li>rect - an hs.geometry rect, or a table or string or parameter list to construct one</li></ul> |
| **Returns**                                 | <ul><li>`true` if this point/rect lies fully inside the given rect, `false` otherwise</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 570](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L570) |

---


### [intersect](#intersect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:intersect(rect) -> hs.geometry rect`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the intersection rect between this rect and another rect                                                                     |
| **Parameters**                              | <ul><li>rect - an hs.geometry rect, or a table or string or parameter list to construct one</li></ul> |
| **Returns**                                 | <ul><li>a new hs.geometry rect</li></ul>          |
| **Notes**                                   | <ul><li>If the two rects don't intersect, the result rect will be a "projection" of the second rect onto this rect's</li><li>   closest edge or corner along the x or y axis; the `w` and/or `h` fields in the result rect will be 0.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 585](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L585) |

---


### [move](#move)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:move(point) -> hs.geometry object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves this point/rect                                                                     |
| **Parameters**                              | <ul><li>point - an hs.geometry object, or a table or string or parameter list to construct one, indicating the x and y displacement to apply</li></ul> |
| **Returns**                                 | <ul><li>this hs.geometry object for method chaining</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 403](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L403) |

---


### [normalize](#normalize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:normalize() -> point`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Normalizes this vector2                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>this hs.geometry point for method chaining</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 468](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L468) |

---


### [rotateCCW](#rotateccw)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:rotateCCW(aroundpoint, ntimes) -> hs.geometry point`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Rotates a point around another point N times                                                                     |
| **Parameters**                              | <ul><li>aroundpoint - an hs.geometry point to rotate this point around</li><li>ntimes - the number of times to rotate, defaults to 1</li></ul> |
| **Returns**                                 | <ul><li>A new hs.geometry point containing the location of the rotated point</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 695](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L695) |

---


### [scale](#scale)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:scale(size) -> hs.geometry object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scales this vector2/size, or this rect *keeping its center constant*                                                                     |
| **Parameters**                              | <ul><li>size - an hs.geometry object, or a table or string or parameter list to construct one, indicating the factors for scaling this rect's width and height; if a number, the rect will be scaled by the same factor in both axes</li></ul> |
| **Returns**                                 | <ul><li>this hs.geometry object for method chaining</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 419](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L419) |

---


### [toUnitRect](#tounitrect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:toUnitRect(frame) -> hs.geometry unit rect`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Converts a rect into its unit rect within a given frame                                                                     |
| **Parameters**                              | <ul><li>frame - an hs.geometry rect (with `w` and `h` >0)</li></ul> |
| **Returns**                                 | <ul><li>An hs.geometry unit rect object</li></ul>          |
| **Notes**                                   | <ul><li>The resulting unit rect is always clipped within `frame`'s bounds (via `hs.geometry:intersect()`); if `frame`</li><li>   does not encompass this rect *no error will be thrown*, but the resulting unit rect won't be a direct match with this rect</li><li>   (i.e. calling `:fromUnitRect(frame)` on it will return a different rect)</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 644](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L644) |

---


### [type](#type)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:type() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the type of an hs.geometry object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string describing the type of this hs.geometry object, i.e. 'point', 'size', 'rect' or 'unitrect'; `nil` if not a valid object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 45](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L45) |

---


### [union](#union)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:union(rect) -> hs.geometry rect`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the smallest rect that encloses both this rect and another rect                                                                     |
| **Parameters**                              | <ul><li>rect - an hs.geometry rect, or a table or string or parameter list to construct one</li></ul> |
| **Returns**                                 | <ul><li>a new hs.geometry rect</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 555](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L555) |

---


### [vector](#vector)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.geometry:vector(point) -> point`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the vector2 from this point or rect's center to another point or rect's center                                                                     |
| **Parameters**                              | <ul><li>point - an hs.geometry object, or a table or string or parameter list to construct one; if a rect, uses the rect's center</li></ul> |
| **Returns**                                 | <ul><li>an hs.geometry point</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/geometry/geometry.lua line 500](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/geometry/geometry.lua#L500) |

---


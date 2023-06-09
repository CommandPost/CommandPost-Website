# hs.canvas.matrix

A sub module to `hs.canvas` which provides support for basic matrix manipulations which can be used as the values for `transformation` attributes in the `hs.canvas` module.

For mathematical reasons that are beyond the scope of this document, a 3x3 matrix can be used to represent a series of manipulations to be applied to the coordinates of a 2 dimensional drawing object.  These manipulations can include one or more of a combination of translations, rotations, shearing and scaling. Within the 3x3 matrix, only 6 numbers are actually required, and this module represents them as the following keys in a Lua table: `m11`, `m12`, `m21`, `m22`, `tX`, and `tY`. For those of a mathematical bent, the 3x3 matrix used within this module can be visualized as follows:

    [  m11,  m12,  0  ]
    [  m21,  m22,  0  ]
    [  tX,   tY,   1  ]

This module allows you to generate the table which can represent one or more of the recognized transformations without having to understand the math behind the manipulations or specify the matrix values directly.

Many of the methods defined in this module can be used both as constructors and as methods chained to a previous method or constructor. Chaining the methods in this manner allows you to combine multiple transformations into one combined table which can then be assigned to an element in your canvas.
.

For more information on the mathematics behind these, you can check the web.  One site I used for reference (but there are many more which go into much more detail) can be found at http://www.cs.trinity.edu/~jhowland/cs2322/2d/2d/.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [identity](#identity)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [append](#append)
 * [invert](#invert)
 * [prepend](#prepend)
 * [rotate](#rotate)
 * [scale](#scale)
 * [shear](#shear)
 * [translate](#translate)


---

## API Documentation

#### Constructors


### [identity](#identity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.matrix.identity() -> matrixObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Specifies the identity matrix.  Resets all existing transformations when applied as a method to an existing matrixObject.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the identity matrix.</li></ul>          |
| **Notes**                                   | <ul><li>The identity matrix can be thought of as "apply no transformations at all" or "render as specified".</li><li>Mathematically this is represented as:</li><li>~~~</li><li>[ 1,  0,  0 ]</li><li>[ 0,  1,  0 ]</li><li>[ 0,  0,  1 ]</li><li>~~~</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/canvas/libcanvas_matrix.m line 15](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/canvas/libcanvas_matrix.m#L15){target="_blank"} |

---

#### Methods


### [append](#append)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.matrix:append(matrix) -> matrixObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Appends the specified matrix transformations to the matrix and returns the new matrix.  This method cannot be used as a constructor.                                                                     |
| **Parameters**                              | <ul><li>`matrix` - the table to append to the current matrix.</li></ul> |
| **Returns**                                 | <ul><li>the new matrix</li></ul>          |
| **Notes**                                   | <ul><li>Mathematically this method multiples the original matrix by the new one and returns the result of the multiplication.</li><li>You can use this method to "stack" additional transformations on top of existing transformations, without having to know what the existing transformations in effect for the canvas element are.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/canvas/libcanvas_matrix.m line 66](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/canvas/libcanvas_matrix.m#L66){target="_blank"} |

---


### [invert](#invert)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.matrix:invert() -> matrixObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Generates the mathematical inverse of the matrix.  This method cannot be used as a constructor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the inverted matrix.</li></ul>          |
| **Notes**                                   | <ul><li>Inverting a matrix which represents a series of transformations has the effect of reversing or undoing the original transformations.</li><li>This is useful when used with [hs.canvas.matrix.append](#append) to undo a previously applied transformation without actually replacing all of the transformations which may have been applied to a canvas element.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/canvas/libcanvas_matrix.m line 43](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/canvas/libcanvas_matrix.m#L43){target="_blank"} |

---


### [prepend](#prepend)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.matrix:prepend(matrix) -> matrixObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Prepends the specified matrix transformations to the matrix and returns the new matrix.  This method cannot be used as a constructor.                                                                     |
| **Parameters**                              | <ul><li>`matrix` - the table to append to the current matrix.</li></ul> |
| **Returns**                                 | <ul><li>the new matrix</li></ul>          |
| **Notes**                                   | <ul><li>Mathematically this method multiples the new matrix by the original one and returns the result of the multiplication.</li><li>You can use this method to apply a transformation *before* the currently applied transformations, without having to know what the existing transformations in effect for the canvas element are.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/canvas/libcanvas_matrix.m line 91](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/canvas/libcanvas_matrix.m#L91){target="_blank"} |

---


### [rotate](#rotate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.matrix:rotate(angle) -> matrixObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Applies a rotation of the specified number of degrees to the transformation matrix.  This method can be used as a constructor or a method.                                                                     |
| **Parameters**                              | <ul><li>`angle` - the number of degrees to rotate in a clockwise direction.</li></ul> |
| **Returns**                                 | <ul><li>the new matrix</li></ul>          |
| **Notes**                                   | <ul><li>The rotation of an element this matrix is applied to will be rotated about the origin (zero point).  To rotate an object about another point (its center for example), prepend a translation to the point to rotate about, and append a translation reversing the initial translation.</li><li>  e.g. `hs.canvas.matrix.translate(x, y):rotate(angle):translate(-x, -y)`</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/canvas/libcanvas_matrix.m line 116](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/canvas/libcanvas_matrix.m#L116){target="_blank"} |

---


### [scale](#scale)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.matrix:scale(xFactor, [yFactor]) -> matrixObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Applies a scaling transformation to the matrix.  This method can be used as a constructor or a method.                                                                     |
| **Parameters**                              | <ul><li>`xFactor` - the scaling factor to apply to the object in the horizontal orientation.</li><li>`yFactor` - an optional argument specifying a different scaling factor in the vertical orientation.  If this argument is not provided, the `xFactor` argument will be used for both orientations.</li></ul> |
| **Returns**                                 | <ul><li>the new matrix</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/canvas/libcanvas_matrix.m line 148](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/canvas/libcanvas_matrix.m#L148){target="_blank"} |

---


### [shear](#shear)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.matrix:shear(xFactor, [yFactor]) -> matrixObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Applies a shearing transformation to the matrix.  This method can be used as a constructor or a method.                                                                     |
| **Parameters**                              | <ul><li>`xFactor` - the shearing factor to apply to the object in the horizontal orientation.</li><li>`yFactor` - an optional argument specifying a different shearing factor in the vertical orientation.  If this argument is not provided, the `xFactor` argument will be used for both orientations.</li></ul> |
| **Returns**                                 | <ul><li>the new matrix</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/canvas/libcanvas_matrix.m line 181](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/canvas/libcanvas_matrix.m#L181){target="_blank"} |

---


### [translate](#translate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.matrix:translate(x, y) -> matrixObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Applies a translation transformation to the matrix.  This method can be used as a constructor or a method.                                                                     |
| **Parameters**                              | <ul><li>`x` - the distance to translate the object in the horizontal direction.</li><li>`y` - the distance to translate the object in the vertical direction.</li></ul> |
| **Returns**                                 | <ul><li>the new matrix</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/canvas/libcanvas_matrix.m line 220](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/canvas/libcanvas_matrix.m#L220){target="_blank"} |

---


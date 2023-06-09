# hs.canvas

A different approach to drawing in Hammerspoon

`hs.drawing` approaches graphical images as independent primitives, each "shape" being a separate drawing object based on the core primitives: ellipse, rectangle, point, line, text, etc.  This model works well with graphical elements that are expected to be managed individually and don't have complex clipping interactions, but does not scale well when more complex combinations or groups of drawing elements need to be moved or manipulated as a group, and only allows for simple inclusionary clipping regions.

This module works by designating a canvas and then assigning a series of graphical primitives to the canvas.  Included in this assignment list are rules about how the individual elements interact with each other within the canvas (compositing and clipping rules), and direct modification of the canvas itself (move, resize, etc.) causes all of the assigned elements to be adjusted as a group.

The canvas elements are defined in an array, and each entry of the array is a table of key-value pairs describing the element at that position.  Elements are rendered in the order in which they are assigned to the array (i.e. element 1 is drawn before element 2, etc.).

Attributes for canvas elements are defined in [hs.canvas.attributes](#attributes). All canvas elements require the `type` field; all other attributes have default values.  Fields required to properly define the element (for example, `frame` for the `rectangle` element type) will be copied into the element definition with their default values if they are not specified at the time of creation. Optional attributes will only be assigned in the element definition if they are specified.  When the module requires the value for an element's attribute it first checks the element definition itself, then the defaults are looked for in the canvas defaults, and then finally in the module's built in defaults (specified in the descriptions below).

Some examples of how to use this module can be found at https://github.com/asmagill/hammerspoon/wiki/hs.canvas.examples

## Submodules
 * [hs.canvas.matrix](hs.canvas.matrix.md)

## API Overview
* Constants - Useful values which cannot be changed
 * [compositeTypes](#compositeTypes)
 * [windowBehaviors](#windowBehaviors)
 * [windowLevels](#windowLevels)
* Functions - API calls offered directly by the extension
 * [defaultTextStyle](#defaultTextStyle)
 * [elementSpec](#elementSpec)
 * [help](#help)
 * [useCustomAccessibilitySubrole](#useCustomAccessibilitySubrole)
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [attributes](#attributes)
 * [object](#object)
 * [percentages](#percentages)
* Methods - API calls which can only be made on an object returned by a constructor
 * [_accessibilitySubrole](#_accessibilitySubrole)
 * [alpha](#alpha)
 * [appendElements](#appendElements)
 * [assignElement](#assignElement)
 * [behavior](#behavior)
 * [behaviorAsLabels](#behaviorAsLabels)
 * [bringToFront](#bringToFront)
 * [canvasDefaultFor](#canvasDefaultFor)
 * [canvasDefaultKeys](#canvasDefaultKeys)
 * [canvasDefaults](#canvasDefaults)
 * [canvasElements](#canvasElements)
 * [canvasMouseEvents](#canvasMouseEvents)
 * [clickActivating](#clickActivating)
 * [copy](#copy)
 * [delete](#delete)
 * [draggingCallback](#draggingCallback)
 * [elementAttribute](#elementAttribute)
 * [elementBounds](#elementBounds)
 * [elementCount](#elementCount)
 * [elementKeys](#elementKeys)
 * [frame](#frame)
 * [hide](#hide)
 * [imageFromCanvas](#imageFromCanvas)
 * [insertElement](#insertElement)
 * [isOccluded](#isOccluded)
 * [isShowing](#isShowing)
 * [isVisible](#isVisible)
 * [level](#level)
 * [minimumTextSize](#minimumTextSize)
 * [mouseCallback](#mouseCallback)
 * [orderAbove](#orderAbove)
 * [orderBelow](#orderBelow)
 * [removeElement](#removeElement)
 * [replaceElements](#replaceElements)
 * [rotateElement](#rotateElement)
 * [sendToBack](#sendToBack)
 * [show](#show)
 * [size](#size)
 * [topLeft](#topLeft)
 * [transformation](#transformation)
 * [wantsLayer](#wantsLayer)

## API Documentation

### Constants


### [compositeTypes](#compositeTypes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.compositeTypes[]`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table containing the possible compositing rules for elements within the canvas.                                                                     |

---

### [windowBehaviors](#windowBehaviors)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.windowBehaviors[]`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Array of window behavior labels for determining how a canvas or drawing object is handled in Spaces and Exposé                                                                     |

---

### [windowLevels](#windowLevels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.windowLevels`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table of predefined window levels usable with [hs.canvas:level](#level)                                                                     |
| **Notes**                                   | <ul><li>These key names map to the constants used in CoreGraphics to specify window levels and may not actually be used for what the name might suggest. For example, tests suggest that an active screen saver actually runs at a level of 2002, rather than at 1000, which is the window level corresponding to kCGScreenSaverWindowLevelKey.</li><li>Each window level is sorted separately and [hs.canvas:orderAbove](#orderAbove) and [hs.canvas:orderBelow](#orderBelow) only arrange windows within the same level.</li><li>If you use Dock hiding (or in 10.11, Menubar hiding) please note that when the Dock (or Menubar) is popped up, it is done so with an implicit orderAbove, which will place it above any items you may also draw at the Dock (or MainMenu) level.</li><li></li><li>A canvas object with a [hs.canvas:draggingCallback](#draggingCallback) function can only accept drag-and-drop items when its window level is at `hs.canvas.windowLevels.dragging` or lower.</li><li>A canvas object with a [hs.canvas:mouseCallback](#mouseCallback) function can only reliably receive mouse click events when its window level is at `hs.canvas.windowLevels.desktopIcon` + 1 or higher.</li></ul>                |

---
### Functions


### [defaultTextStyle](#defaultTextStyle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.defaultTextStyle() -> `hs.styledtext` attributes table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing the default font, size, color, and paragraphStyle used by `hs.canvas` for text drawing objects.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table containing the default style attributes `hs.canvas` uses for text drawing objects in the `hs.styledtext` attributes table format.</li></ul>          |
| **Notes**                                   | <ul><li>This method is intended to be used in conjunction with `hs.styledtext` to create styledtext objects that are based on, or a slight variation of, the defaults used by `hs.canvas`.</li></ul>                |

---

### [elementSpec](#elementSpec)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.elementSpec() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the list of attributes and their specifications that are recognized for canvas elements by this module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the attributes and specifications defined for this module.</li></ul>          |
| **Notes**                                   | <ul><li>This is primarily for debugging purposes and may be removed in the future.</li></ul>                |

---

### [help](#help)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.help([attribute]) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Provides specification information for the recognized attributes, or the specific attribute specified.                                                                     |
| **Parameters**                              | <ul><li>`attribute` - an optional string specifying an element attribute. If this argument is not provided, all attributes are listed.</li></ul> |
| **Returns**                                 | <ul><li>a string containing some of the information provided by the [hs.canvas.elementSpec](#elementSpec) in a manner that is easy to reference from the Hammerspoon console.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [useCustomAccessibilitySubrole](#useCustomAccessibilitySubrole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.useCustomAccessibilitySubrole([state]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get or set whether or not canvas objects use a custom accessibility subrole for the containing system window.                                                                     |
| **Parameters**                              | <ul><li>`state` - an optional boolean, default true, specifying whether or not canvas containers should use a custom accessibility subrole.</li></ul> |
| **Returns**                                 | <ul><li>the current, possibly changed, value as a boolean</li></ul>          |
| **Notes**                                   | <ul><li>Under some conditions, it has been observed that Hammerspoon's `hs.window.filter` module will misidentify Canvas and Drawing objects as windows of the Hammerspoon application that it should consider when evaluating its filters. To eliminate this, `hs.canvas` objects (and previously `hs.drawing` objects, which are now deprecated and pass through to `hs.canvas`) were given a nonstandard accessibility subrole to prevent them from being included. This has caused some issues with third party tools, like Yabai, which also use the accessibility subroles for determining what actions it may take with Hammerspoon windows.</li><li></li><li>By passing `false` to this function, all canvas objects will revert to specifying the standard subrole for the containing windows by default and should work as expected with third party tools. Note that this may cause issues or slowdowns if you are also using `hs.window.filter`; a more permanent solution is being considered.</li><li></li><li>If you need to control the subrole of canvas objects more specifically, or only for some canvas objects, see [hs.canvas:_accessibilitySubrole](#_accessibilitySubrole).</li></ul>                |

---
### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.new(rect) -> canvasObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Create a new canvas object at the specified coordinates                                                                     |
| **Parameters**                              | <ul><li>`rect` - A rect-table containing the co-ordinates and size for the canvas object</li></ul> |
| **Returns**                                 | <ul><li>a new, empty, canvas object, or nil if the canvas cannot be created with the specified coordinates</li></ul>          |
| **Notes**                                   | <ul><li>The size of the canvas defines the visible area of the canvas -- any portion of a canvas element which extends past the canvas's edges will be clipped.</li><li>a rect-table is a table with key-value pairs specifying the top-left coordinate on the screen for the canvas (keys `x`  and `y`) and the size (keys `h` and `w`) of the canvas. The table may be crafted by any method which includes these keys, including the use of an `hs.geometry` object.</li></ul>                |

---
### Fields


### [attributes](#attributes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.attributes`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Canvas Element Attributes                                                                     |
| **Notes**                                   | <ul><li>* `type` - specifies the type of canvas element the table represents. This attribute has no default and must be specified for each element in the canvas array. Valid type strings are:</li><li> `arc`           - an arc inscribed on a circle, defined by `radius`, `center`, `startAngle`, and `endAngle`.</li><li> `canvas`        - an independent canvas object, displayed as an element within the specified frame. Defined by `canvas` and `frame`.</li><li> `circle`        - a circle, defined by `radius` and `center`.</li><li> `ellipticalArc` - an arc inscribed on an oval, defined by `frame`, `startAngle`, and `endAngle`.</li><li> `image`         - an image as defined by one of the `hs.image` constructors.</li><li> `oval`          - an oval, defined by `frame`</li><li> `points`        - a list of points defined in `coordinates`.</li><li> `rectangle`     - a rectangle, optionally with rounded corners, defined by `frame`.</li><li> `resetClip`     - a special type -- indicates that the current clipping shape should be reset to the canvas default (the full canvas area).  See `Clipping Example`.  All other attributes, except `action` are ignored.</li><li> `segments`      - a list of line segments or bezier curves with control points, defined in `coordinates`.</li><li> `text`          - a string or `hs.styledtext` object, defined by `text` and `frame`.</li><li></li><li>* The following is a list of all valid attributes.  Not all attributes apply to every type, but you can set them for any type.</li><li> `action`              - Default `strokeAndFill`. A string specifying the action to take for the element in the array.  The following actions are recognized:</li><li>   `clip`          - append the shape to the current clipping region for the canvas. Ignored for `canvas`, `image`, and `text` types.</li><li>   `build`         - do not render the element -- its shape is preserved and the next element in the canvas array is appended to it.  This can be used to create complex shapes or clipping regions. The stroke and fill settings for a complex object created in this manner will be those of the final object of the group. Ignored for `canvas`, `image`, and `text` types.</li><li>   `fill`          - fill the canvas element, if it is a shape, or display it normally if it is a `canvas`, `image` or `text`.  Ignored for `resetClip`.</li><li>   `skip`          - ignore this element or its effects.  Can be used to temporarily "remove" an object from the canvas.</li><li>   `stroke`        - stroke (outline) the canvas element, if it is a shape, or display it normally if it is a `canvas`, `image` or `text`.  Ignored for `resetClip`.</li><li>   `strokeAndFill` - stroke and fill the canvas element, if it is a shape, or display it normally if it is a `canvas`, `image` or `text`.  Ignored for `resetClip`.</li><li> `absolutePosition`    - Default `true`. If false, numeric location and size attributes (`frame`, `center`, `radius`, and `coordinates`) will be automatically adjusted when the canvas is resized with [hs.canvas:size](#size) or [hs.canvas:frame](#frame) so that the element remains in the same relative position in the canvas.</li><li> `absoluteSize`        - Default `true`. If false, numeric location and size attributes (`frame`, `center`, `radius`, and `coordinates`) will be automatically adjusted when the canvas is resized with [hs.canvas:size](#size) or [hs.canvas:frame](#frame) so that the element maintains the same relative size in the canvas.</li><li> `antialias`           - Default `true`.  Indicates whether or not antialiasing should be enabled for the element.</li><li> `arcRadii`            - Default `true`. Used by the `arc` and `ellipticalArc` types to specify whether or not line segments from the element's center to the start and end angles should be included in the element's visible portion.  This affects whether the object's stroke is a pie-shape or an arc with a chord from the start angle to the end angle.</li><li> `arcClockwise`        - Default `true`.  Used by the `arc` and `ellipticalArc` types to specify whether the arc should be drawn from the start angle to the end angle in a clockwise (true) direction or in a counter-clockwise (false) direction.</li><li> `canvas`                - Defaults to nil. A separate canvas object which is to be displayed as an element in this canvas.  The object must not currently belong to a visible window.  Assign nil to this property to release a previously assigned object for use elsewhere as an element or on its own.</li><li> `canvasAlpha`           - Default `1.0`.  Specifies the alpha value to apply to the independent canvas element.</li><li> `compositeRule`       - A string, default "sourceOver", specifying how this element should be combined with earlier elements of the canvas.  See [hs.canvas.compositeTypes](#compositeTypes) for a list of valid strings and their descriptions.</li><li> `center`              - Default `{ x = "50%", y = "50%" }`.  Used by the `circle` and `arc` types to specify the center of the canvas element.  The `x` and `y` fields can be specified as numbers or as a string. When specified as a string, the value is treated as a percentage of the canvas size.  See the section on [percentages](#percentages) for more information.</li><li> `clipToPath`          - Default `false`.   Specifies whether the clipping regions should be temporarily limited to the element's shape while rendering this element or not.  This can be used to produce crisper edges, as seen with `hs.drawing` but reduces stroke width granularity for widths less than 1.0 and causes occasional "missing" lines with the `segments` element type. Ignored for the `canvas`, `image`, `point`, and `text` types.</li><li> `closed`              - Default `false`.  Used by the `segments` type to specify whether or not the shape defined by the lines and curves defined should be closed (true) or open (false).  When an object is closed, an implicit line is stroked from the final point back to the initial point of the coordinates listed.</li><li> `coordinates`         - An array containing coordinates used by the `segments` and `points` types to define the lines and curves or points that make up the canvas element.  The following keys are recognized and may be specified as numbers or strings (see the section on [percentages](#percentages)).</li><li>   `x`   - required for `segments` and `points`, specifying the x coordinate of a point.</li><li>   `y`   - required for `segments` and `points`, specifying the y coordinate of a point.</li><li>   `c1x` - optional for `segments, specifying the x coordinate of the first control point used to draw a bezier curve between this point and the previous point.  Ignored for `points` and if present in the first coordinate in the `coordinates` array.</li><li>   `c1y` - optional for `segments, specifying the y coordinate of the first control point used to draw a bezier curve between this point and the previous point.  Ignored for `points` and if present in the first coordinate in the `coordinates` array.</li><li>   `c2x` - optional for `segments, specifying the x coordinate of the second control point used to draw a bezier curve between this point and the previous point.  Ignored for `points` and if present in the first coordinate in the `coordinates` array.</li><li>   `c2y` - optional for `segments, specifying the y coordinate of the second control point used to draw a bezier curve between this point and the previous point.  Ignored for `points` and if present in the first coordinate in the `coordinates` array.</li><li> `endAngle`            - Default `360.0`. Used by the `arc` and `ellipticalArc` to specify the ending angle position for the inscribed arc.</li><li> `fillColor`           - Default `{ red = 1.0 }`.  Specifies the color used to fill the canvas element when the `action` is set to `fill` or `strokeAndFill` and `fillGradient` is equal to `none`.  Ignored for the `canvas`, `image`, `points`, and `text` types.</li><li> `fillGradient`        - Default "none".  A string specifying whether a fill gradient should be used instead of the fill color when the action is `fill` or `strokeAndFill`.  May be "none", "linear", or "radial".</li><li> `fillGradientAngle`   - Default 0.0.  Specifies the direction of a linear gradient when `fillGradient` is linear.</li><li> `fillGradientCenter`  - Default `{ x = 0.0, y = 0.0 }`. Specifies the relative center point within the elements bounds of a radial gradient when `fillGradient` is `radial`.  The `x` and `y` fields must both be between -1.0 and 1.0 inclusive.</li><li> `fillGradientColors`  - Default `{ { white = 0.0 }, { white = 1.0 } }`.  Specifies the colors to use for the gradient when `fillGradient` is not `none`.  You must specify at least two colors, each of which must be convertible into the RGB color space (i.e. they cannot be an image being used as a color pattern).  The gradient will blend from the first to the next, and so on until the last color.  If more than two colors are specified, the "color stops" will be placed at evenly spaced intervals within the element.</li><li> `flatness`            - Default `0.6`.  A number which specifies the accuracy (or smoothness) with which curves are rendered. It is also the maximum error tolerance (measured in pixels) for rendering curves, where smaller numbers give smoother curves at the expense of more computation.</li><li> `flattenPath`         - Default `false`. Specifies whether curved line segments should be converted into straight line approximations. The granularity of the approximations is controlled by the path's current flatness value.</li><li> `frame`               - Default `{ x = "0%", y = "0%", h = "100%", w = "100%" }`.  Used by the `rectangle`, `oval`, `ellipticalArc`, `text`, `canvas` and `image` types to specify the element's position and size.  When the key value for `x`, `y`, `h`, or `w` are specified as a string, the value is treated as a percentage of the canvas size.  See the section on [percentages](#percentages) for more information.</li><li> `id`                  - An optional string or number which is included in mouse callbacks to identify the element which was the target of the mouse event.  If this is not specified for an element, it's index position is used instead.</li><li> `image`               - Defaults to a blank image.  Used by the `image` type to specify an `hs.image` object to display as an image.</li><li> `imageAlpha`          - Defaults to `1.0`.  A number between 0.0 and 1.0 specifying the alpha value to be applied to the image specified by `image`.  Note that if an image is a template image, then this attribute will internally default to `0.5` unless explicitly set for the element.</li><li> `imageAlignment`      - Default "center". A string specifying the alignment of the image within the canvas element's frame.  Valid values for this attribute are "center", "bottom", "topLeft", "bottomLeft", "bottomRight", "left", "right", "top", and "topRight".</li><li> `imageAnimationFrame` - Default `0`. An integer specifying the image frame to display when the image is from an animated GIF.  This attribute is ignored for other image types.  May be specified as a negative integer indicating that the image frame should be calculated from the last frame and calculated backwards (i.e. specifying `-1` selects the last frame for the GIF.)</li><li> `imageAnimates`       - Default `false`. A boolean specifying whether or not an animated GIF should be animated or if only a single frame should be shown.  Ignored for other image types.</li><li> `imageScaling`        - Default "scaleProportionally".  A string specifying how the image should be scaled within the canvas element's frame.  Valid values for this attribute are:</li><li>   `scaleToFit`          - shrink the image, preserving the aspect ratio, to fit the drawing frame only if the image is larger than the drawing frame.</li><li>   `shrinkToFit`         - shrink or expand the image to fully fill the drawing frame.  This does not preserve the aspect ratio.</li><li>   `none`                - perform no scaling or resizing of the image.</li><li>   `scaleProportionally` - shrink or expand the image to fully fill the drawing frame, preserving the aspect ration.</li><li> `miterLimit`          - Default `10.0`. The limit at which miter joins are converted to bevel join when `strokeJoinStyle` is `miter`.  The miter limit helps you avoid spikes at the junction of two line segments.  When the ratio of the miter length—the diagonal length of the miter join—to the line thickness exceeds the miter limit, the joint is converted to a bevel join. Ignored for the `canvas`, `text`, and `image` types.</li><li> `padding`             - Default `0.0`. When an element specifies position information by percentage (i.e. as a string), the actual frame used for calculating position values is inset from the canvas frame on all sides by this amount. If you are using shadows with your elements, the shadow position is not included in the element's size and position specification; this attribute can be used to provide extra space for the shadow to be fully rendered within the canvas.</li><li> `radius`              - Default "50%". Used by the `arc` and `circle` types to specify the radius of the circle for the element. May be specified as a string or a number.  When specified as a string, the value is treated as a percentage of the canvas size.  See the section on [percentages](#percentages) for more information.</li><li> `reversePath`         - Default `false`.  Specifies drawing direction for the canvas element.  By default, canvas elements are drawn from the point nearest the origin (top left corner) in a clockwise direction.  Setting this to true causes the element to be drawn in a counter-clockwise direction. This will mostly affect fill and stroke dash patterns, but can also be used with clipping regions to create cut-outs.  Ignored for `canvas`, `image`, and `text` types.</li><li> `roundedRectRadii`    - Default `{ xRadius = 0.0, yRadius = 0.0 }`.</li><li> `shadow`              - Default `{ blurRadius = 5.0, color = { alpha = 1/3 }, offset = { h = -5.0, w = 5.0 } }`.  Specifies the shadow blurring, color, and offset to be added to an element which has `withShadow` set to true.</li><li> `startAngle`          - Default `0.0`. Used by the `arc` and `ellipticalArc` to specify the starting angle position for the inscribed arc.</li><li> `strokeCapStyle`      - Default "butt". A string which specifies the shape of the endpoints of an open path when stroked.  Primarily noticeable for lines rendered with the `segments` type.  Valid values for this attribute are "butt", "round", and "square".</li><li> `strokeColor`         - Default `{ white = 0 }`.  Specifies the stroke (outline) color for a canvas element when the action is set to `stroke` or `strokeAndFill`.  Ignored for the `canvas`, `text`, and `image` types.</li><li> `strokeDashPattern`   - Default `{}`.  Specifies an array of numbers specifying a dash pattern for stroked lines when an element's `action` attribute is set to `stroke` or `strokeAndFill`.  The numbers in the array alternate with the first element specifying a dash length in points, the second specifying a gap length in points, the third a dash length, etc.  The array repeats to fully stroke the element.  Ignored for the `canvas`, `image`, and `text` types.</li><li> `strokeDashPhase`     - Default `0.0`.  Specifies an offset, in points, where the dash pattern specified by `strokeDashPattern` should start. Ignored for the `canvas`, `image`, and `text` types.</li><li> `strokeJoinStyle`     - Default "miter".  A string which specifies the shape of the joints between connected segments of a stroked path.  Valid values for this attribute are "miter", "round", and "bevel".  Ignored for element types of `canvas`, `image`, and `text`.</li><li> `strokeWidth`         - Default `1.0`.  Specifies the width of stroked lines when an element's action is set to `stroke` or `strokeAndFill`.  Ignored for the `canvas`, `image`, and `text` element types.</li><li> `text`                - Default `""`.  Specifies the text to display for a `text` element.  This may be specified as a string, or as an `hs.styledtext` object.</li><li> `textAlignment`       - Default `natural`. A string specifying the alignment of the text within a canvas element of type `text`.  This field is ignored if the text is specified as an `hs.styledtext` object.  Valid values for this attributes are:</li><li>   `left`      - the text is visually left aligned.</li><li>   `right`     - the text is visually right aligned.</li><li>   `center`    - the text is visually center aligned.</li><li>   `justified` - the text is justified</li><li>   `natural`   - the natural alignment of the text’s script</li><li> `textColor`           - Default `{ white = 1.0 }`.  Specifies the color to use when displaying the `text` element type, if the text is specified as a string.  This field is ignored if the text is specified as an `hs.styledtext` object.</li><li> `textFont`            - Defaults to the default system font.  A string specifying the name of the font to use when displaying the `text` element type, if the text is specified as a string.  This field is ignored if the text is specified as an `hs.styledtext` object.</li><li> `textLineBreak`       - Default `wordWrap`. A string specifying how to wrap text which exceeds the canvas element's frame for an element of type `text`.  This field is ignored if the text is specified as an `hs.styledtext` object.  Valid values for this attribute are:</li><li>   `wordWrap`       - wrap at word boundaries, unless the word itself doesn’t fit on a single line</li><li>   `charWrap`       - wrap before the first character that doesn’t fit</li><li>   `clip`           - do not draw past the edge of the drawing object frame</li><li>   `truncateHead`   - the line is displayed so that the end fits in the frame and the missing text at the beginning of the line is indicated by an ellipsis</li><li>   `truncateTail`   - the line is displayed so that the beginning fits in the frame and the missing text at the end of the line is indicated by an ellipsis</li><li>   `truncateMiddle` - the line is displayed so that the beginning and end fit in the frame and the missing text in the middle is indicated by an ellipsis</li><li> `textSize`            - Default `27.0`.  Specifies the font size to use when displaying the `text` element type, if the text is specified as a string.  This field is ignored if the text is specified as an `hs.styledtext` object.</li><li> `trackMouseByBounds`  - Default `false`. If true, mouse events are based on the element's bounds (smallest rectangle which completely contains the element); otherwise, mouse events are based on the visible portion of the canvas element.</li><li> `trackMouseEnterExit` - Default `false`.  Generates a callback when the mouse enters or exits the canvas element.  For `canvas` and `text` types, the `frame` of the element defines the boundaries of the tracking area.</li><li> `trackMouseDown`      - Default `false`.  Generates a callback when mouse button is clicked down while the cursor is within the canvas element.  For `canvas` and `text` types, the `frame` of the element defines the boundaries of the tracking area.</li><li> `trackMouseUp`        - Default `false`.  Generates a callback when mouse button is released while the cursor is within the canvas element.  For `canvas` and `text` types, the `frame` of the element defines the boundaries of the tracking area.</li><li> `trackMouseMove`      - Default `false`.  Generates a callback when the mouse cursor moves within the canvas element.  For `canvas` and `text` types, the `frame` of the element defines the boundaries of the tracking area.</li><li> `transformation`      - Default `{ m11 = 1.0, m12 = 0.0, m21 = 0.0, m22 = 1.0, tX = 0.0, tY = 0.0 }`. Specifies a matrix transformation to apply to the element before displaying it.  Transformations may include rotation, translation, scaling, skewing, etc.</li><li> `windingRule`         - Default "nonZero".  A string specifying the winding rule in effect for the canvas element. May be "nonZero" or "evenOdd".  The winding rule determines which portions of an element to fill. This setting will only have a visible effect on compound elements (built with the `build` action) or elements of type `segments` when the object is made from lines which cross.</li><li> `withShadow`          - Default `false`. Specifies whether a shadow effect should be applied to the canvas element.  Ignored for the `text` type.</li></ul>                |

---

### [object](#object)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.object[index]`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | An array-like method for accessing the attributes for the canvas element at the specified index                                                                     |
| **Notes**                                   | <ul><li>Metamethods are assigned to the canvas object so that you can refer to individual elements of the canvas as if the canvas object was an array.  Each element is represented by a table of key-value pairs, where each key represents an attribute for that element.  Valid index numbers range from 1 to [hs.canvas:elementCount()](#elementCount) when getting an element or getting or setting one of its attributes, and from 1 to [hs.canvas:elementCount()](#elementCount) + 1 when assign an element table to an index in the canvas.  For example:</li><li></li><li>~~~lua</li><li>c = require("hs.canvas")</li><li>a = c.new{ x = 100, y = 100, h = 100, w = 100 }:show()</li><li>a:insertElement({ type = "rectangle", id = "part1", fillColor = { blue = 1 } })</li><li>a:insertElement({ type = "circle", id = "part2", fillColor = { green = 1 } })</li><li>~~~</li><li>can also be expressed as:</li><li>~~~lua</li><li>c = require("hs.canvas")</li><li>a = c.new{ x = 100, y = 100, h = 100, w = 100 }:show()</li><li>a[1] = { type = "rectangle", id = "part1", fillColor = { blue = 1 } }</li><li>a[2] = { type = "circle", id = "part2", fillColor = { green = 1 } }</li><li>~~~</li><li></li><li>You can change a canvas element's attributes using this same style: `a[2].fillColor.alpha = .5` will adjust the alpha value for element 2 of the canvas without adjusting any of the other color fields.  To replace the color entirely, assign it like this: `a[2].fillColor = { white = .5, alpha = .25 }`</li><li></li><li>The canvas defaults can also be accessed with the `_default` field like this: `a._default.strokeWidth = 5`.</li><li></li><li>Attributes which have a string specified as their `id` attribute can also be accessed as if the `id` where a `key` in the table-like canvas: e.g. `a.part2.action = "skip"`</li><li></li><li>It is important to note that these methods are a convenience and that the canvas object is not a true table.  The tables are generated dynamically as needed; as such `hs.inspect` cannot properly display them; however, you can just type in the element or element attribute you wish to see expanded in the Hammerspoon console (or in a `print` command) to see the assigned attributes, e.g. `a[1]` or `a[2].fillColor`, and an inspect-like output will be provided.</li><li></li><li>Attributes which allow using a string to specify a percentage (see [percentages](#percentages)) can also be retrieved as their actual number for the canvas's current size by appending `_raw` to the attribute name, e.g. `a[2].frame_raw`.</li><li></li><li>Because the canvas object is actually a Lua userdata, and not a real table, you cannot use the `table.insert` and `table.remove` functions on it.  For inserting or removing an element in any position except at the end of the canvas, you must still use [hs.canvas:insertElement](#insertElement) and [hs.canvas:removeElement](#removeElement).</li><li></li><li>You can, however, remove the last element with `a[#a] = nil`.</li><li></li><li>To print out all of the elements in the canvas with: `for i, v in ipairs(a) do print(v) end`.  The `pairs` iterator will also work, and will work on element sub-tables (transformations, fillColor and strokeColor, etc.), but this iterator does not guarantee order.</li></ul>                |

---

### [percentages](#percentages)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas.percentages`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Canvas attributes which specify the location and size of canvas elements can be specified with an absolute position or as a percentage of the canvas size.                                                                     |
| **Notes**                                   | <ul><li>Percentages may be assigned to the following attributes:</li><li>`frame`       - the frame used by the `rectangle`, `oval`, `ellipticalArc`, `text`, and `image` types.  The `x` and `w` fields will be a percentage of the canvas's width, and the `y` and `h` fields will be a percentage of the canvas's height.</li><li>`center`      - the center point for the `circle` and `arc` types.  The `x` field will be a percentage of the canvas's width and the `y` field will be a percentage of the canvas's height.</li><li>`radius`      - the radius for the `circle` and `arc` types.  The radius will be a percentage of the canvas's width.</li><li>`coordinates` - the point coordinates used by the `segments` and `points` types.  X coordinates (fields `x`, `c1x`, and `c2x`) will be a percentage of the canvas's width, and Y coordinates (fields `y`, `c1y`, and `c2y`) will be a percentage of the canvas's height.</li><li></li><li>Percentages are assigned to these fields as a string.  If the number in the string ends with a percent sign (%), then the percentage is the whole number which precedes the percent sign.  If no percent sign is present, the percentage is expected in decimal format (e.g. "1.0" is the same as "100%").</li><li></li><li>Because a shadow applied to a canvas element is not considered as part of the element's bounds, you can also set the `padding` attribute to a positive number of points to inset the calculated values by from each edge of the canvas's frame so that the shadow will be fully visible within the canvas, even when an element is set to a width and height of "100%".</li></ul>                |

---
### Methods


### [_accessibilitySubrole](#_accessibilitySubrole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:_accessibilitySubrole([subrole]) -> canvasObject | current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the accessibility subrole returned by `hs.canvas` objects.                                                                     |
| **Parameters**                              | <ul><li>`subrole` - an optional string or explicit nil which specifies what accessibility subrole value should be returned when canvas objects are queried through the macOS accessibility framework. See Notes for a discussion of how this value is interpreted. Defaults to `nil`.</li></ul> |
| **Returns**                                 | <ul><li>If an argument is specified, returns the canvasObject; otherwise returns the current value.</li></ul>          |
| **Notes**                                   | <ul><li>Most people will probably not need to use this method; See [hs.canvas.useCustomAccessibilitySubrole](#useCustomAccessibilitySubrole) for a discussion as to why this method may be of use when Hammerspoon is being controlled through the accessibility framework by other applications.</li><li></li><li>If a non empty string is specified as the argument to this method, the string will be returned whenever the canvas object's containing window is queried for its accessibility subrole.</li><li>The other possible values depend upon the value registered with [hs.canvas.useCustomAccessibilitySubrole](#useCustomAccessibilitySubrole):</li><li>  If `useCustomAccessibilitySubrole` is set to true (the default):</li><li>    If an explicit `nil` (the default) is specified for this method, the string returned when the canvas object's accessibility is queried will be the default macOS subrole for the canvas's window with the string ".Hammerspoon` appended to it.</li><li>    If the empty string is specified (e.g. `""`), then the default macOS subrole for the canvas's window will be returned.</li><li>  If `useCustomAccessibilitySubrole` is set to false:</li><li>    If an explicit `nil` (the default) is specified for this method, then the default macOS subrole for the canvas's window will be returned.</li><li>    If the empty string is specified (e.g. `""`), the string returned when the canvas object's accessibility is queried will be the default macOS subrole for the canvas's window with the string ".Hammerspoon` appended to it.</li></ul>                |

---

### [alpha](#alpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:alpha([alpha]) -> canvasObject | currentValue`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the alpha level of the window containing the canvasObject.                                                                     |
| **Parameters**                              | <ul><li>`alpha` - an optional number specifying the new alpha level (0.0 - 1.0, inclusive) for the canvasObject</li></ul> |
| **Returns**                                 | <ul><li>If an argument is provided, the canvas object; otherwise the current value.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [appendElements](#appendElements)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:appendElements(element...) -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Appends the elements specified to the canvas.                                                                     |
| **Parameters**                              | <ul><li>`element` - a table containing key-value pairs that define the element to be appended to the canvas.  You can specify one or more elements and they will be appended in the order they are listed.</li></ul> |
| **Returns**                                 | <ul><li>the canvas object</li></ul>          |
| **Notes**                                   | <ul><li>You can also specify multiple elements in a table as an array, where each index in the table contains an element table, and use the array as a single argument to this method if this style works better in your code.</li></ul>                |

---

### [assignElement](#assignElement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:assignElement(elementTable, [index]) -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Assigns a new element to the canvas at the specified index.                                                                     |
| **Parameters**                              | <ul><li>`elementTable` - a table containing key-value pairs that define the element to be added to the canvas.</li><li>`index`        - an optional integer between 1 and the canvas element count + 1 specifying the index position to put the new element.  Any element currently at that index will be replaced.  Defaults to the canvas element count + 1 (i.e. after the end of the currently defined elements).</li></ul> |
| **Returns**                                 | <ul><li>the canvasObject</li></ul>          |
| **Notes**                                   | <ul><li>When the index specified is the canvas element count + 1, the behavior of this method is the same as [hs.canvas:insertElement](#insertElement); i.e. it adds the new element to the end of the currently defined element list.</li></ul>                |

---

### [behavior](#behavior)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:behavior([behavior]) -> canvasObject | currentValue`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the window behavior settings for the canvas object using labels defined in [hs.canvas.windowBehaviors](#windowBehaviors).                                                                     |
| **Parameters**                              | <ul><li>`behavior` - if present, the behavior should be a combination of values found in [hs.canvas.windowBehaviors](#windowBehaviors) describing the window behavior.  The behavior should be specified as one of the following:
  integer - a number representing the behavior which can be created by combining values found in [hs.canvas.windowBehaviors](#windowBehaviors) with the logical or operator.
  string  - a single key from [hs.canvas.windowBehaviors](#windowBehaviors) which will be toggled in the current window behavior.
  table   - a list of keys from [hs.canvas.windowBehaviors](#windowBehaviors) which will be combined to make the final behavior by combining their values with the logical or operator.</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, then the canvasObject is returned; otherwise the current behavior value is returned.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [behaviorAsLabels](#behaviorAsLabels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:behaviorAsLabels(behaviorTable) -> canvasObject | currentValue`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the window behavior settings for the canvas object using labels defined in [hs.canvas.windowBehaviors](#windowBehaviors).                                                                     |
| **Parameters**                              | <ul><li>behaviorTable - an optional table of strings and/or integers specifying the desired window behavior for the canvas object.</li></ul> |
| **Returns**                                 | <ul><li>If an argument is provided, the canvas object; otherwise the current value as a table of strings.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [bringToFront](#bringToFront)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:bringToFront([aboveEverything]) -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Places the canvas object on top of normal windows                                                                     |
| **Parameters**                              | <ul><li>aboveEverything - An optional boolean value that controls how far to the front the canvas should be placed. Defaults to false.
  if true, place the canvas on top of all windows (including the dock and menubar and fullscreen windows).
  if false, place the canvas above normal windows, but below the dock, menubar and fullscreen windows.</li></ul> |
| **Returns**                                 | <ul><li>The canvas object</li></ul>          |
| **Notes**                                   | <ul><li>As of macOS Sierra and later, if you want a `hs.canvas` object to appear above full-screen windows you must hide the Hammerspoon Dock icon first using: `hs.dockicon.hide()`</li></ul>                |

---

### [canvasDefaultFor](#canvasDefaultFor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:canvasDefaultFor(keyName, [newValue]) -> canvasObject | currentValue`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the element default specified by keyName.                                                                     |
| **Parameters**                              | <ul><li>`keyName` - the element default to examine or modify</li><li>`value`   - an optional new value to set as the default fot his canvas when not specified explicitly in an element declaration.</li></ul> |
| **Returns**                                 | <ul><li>If an argument is provided, the canvas object; otherwise the current value.</li></ul>          |
| **Notes**                                   | <ul><li>Not all keys will apply to all element types.</li><li>Currently set and built-in defaults may be retrieved in a table with [hs.canvas:canvasDefaults](#canvasDefaults).</li></ul>                |

---

### [canvasDefaultKeys](#canvasDefaultKeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:canvasDefaultKeys([module]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a list of the key names for the attributes set for the canvas defaults.                                                                     |
| **Parameters**                              | <ul><li>`module` - an optional boolean flag, default false, indicating whether the key names for the module defaults (true) should be included in the list.  If false, only those defaults which have been explicitly set for the canvas are included.</li></ul> |
| **Returns**                                 | <ul><li>a table containing the key names for the defaults which are set for this canvas. May also optionally include key names for all attributes which have a default value defined by the module.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [canvasDefaults](#canvasDefaults)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:canvasDefaults([module]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get a table of the default key-value pairs which apply to the canvas.                                                                     |
| **Parameters**                              | <ul><li>`module` - an optional boolean flag, default false, indicating whether module defaults (true) should be included in the table.  If false, only those defaults which have been explicitly set for the canvas are returned.</li></ul> |
| **Returns**                                 | <ul><li>a table containing key-value pairs for the defaults which apply to the canvas.</li></ul>          |
| **Notes**                                   | <ul><li>Not all keys will apply to all element types.</li><li>To change the defaults for the canvas, use [hs.canvas:canvasDefaultFor](#canvasDefaultFor).</li></ul>                |

---

### [canvasElements](#canvasElements)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:canvasElements() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an array containing the elements defined for this canvas.  Each array entry will be a table containing the key-value pairs which have been set for that canvas element.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an array of element tables which are defined for the canvas.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [canvasMouseEvents](#canvasMouseEvents)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:canvasMouseEvents([down], [up], [enterExit], [move]) -> canvasObject | current values`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether or not regions of the canvas which are not otherwise covered by an element with mouse tracking enabled should generate a callback for mouse events.                                                                     |
| **Parameters**                              | <ul><li>`down`      - an optional boolean, or nil placeholder, specifying whether or not the mouse button being pushed down should generate a callback for the canvas areas not otherwise covered by an element with mouse tracking enabled.</li><li>`up`        - an optional boolean, or nil placeholder, specifying whether or not the mouse button being released should generate a callback for the canvas areas not otherwise covered by an element with mouse tracking enabled.</li><li>`enterExit` - an optional boolean, or nil placeholder, specifying whether or not the mouse pointer entering or exiting the canvas bounds should generate a callback for the canvas areas not otherwise covered by an element with mouse tracking enabled.</li><li>`move`      - an optional boolean, or nil placeholder, specifying whether or not the mouse pointer moving within the canvas bounds should generate a callback for the canvas areas not otherwise covered by an element with mouse tracking enabled.</li></ul> |
| **Returns**                                 | <ul><li>If any arguments are provided, returns the canvas Object, otherwise returns the current values as four separate boolean values (i.e. not in a table).</li></ul>          |
| **Notes**                                   | <ul><li>Each value that you wish to set must be provided in the order given above, but you may specify a position as `nil` to indicate that whatever it's current state, no change should be applied.  For example, to activate a callback for entering and exiting the canvas without changing the current callback status for up or down button clicks, you could use: `hs.canvas:canvasMouseTracking(nil, nil, true)`.</li><li></li><li>Use [hs.canvas:mouseCallback](#mouseCallback) to set the callback function.  The identifier field in the callback's argument list will be "_canvas_", but otherwise identical to those specified in [hs.canvas:mouseCallback](#mouseCallback).</li></ul>                |

---

### [clickActivating](#clickActivating)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:clickActivating([flag]) -> canvasObject | currentValue`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether or not clicking on a canvas with a click callback defined should bring all of Hammerspoon's open windows to the front.                                                                     |
| **Parameters**                              | <ul><li>`flag` - an optional boolean indicating whether or not clicking on a canvas with a click callback function defined should activate Hammerspoon and bring its windows forward. Defaults to true.</li></ul> |
| **Returns**                                 | <ul><li>If an argument is provided, returns the canvas object; otherwise returns the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>Setting this to false changes a canvas object's AXsubrole value and may affect the results of filters used with `hs.window.filter`, depending upon how they are defined.</li></ul>                |

---

### [copy](#copy)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:copy() -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a copy of the canvas.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a copy of the canvas</li></ul>          |
| **Notes**                                   | <ul><li>The copy of the canvas will be identical in all respects except:</li><li>  The new canvas will not have a callback function assigned, even if the original canvas does.</li><li>  The new canvas will not initially be visible, even if the original is.</li><li>The new canvas is an independent entity -- any subsequent changes to either canvas will not be reflected in the other canvas.</li><li></li><li>This method allows you to display a canvas in multiple places or use it as a canvas element multiple times.</li></ul>                |

---

### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:delete([fadeOutTime]) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Destroys the canvas object, optionally fading it out first (if currently visible).                                                                     |
| **Parameters**                              | <ul><li>`fadeOutTime` - An optional number of seconds over which to fade out the canvas object. Defaults to zero.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This method is automatically called during garbage collection, notably during a Hammerspoon termination or reload, with a fade time of 0.</li></ul>                |

---

### [draggingCallback](#draggingCallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:draggingCallback(fn) -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets or remove a callback for accepting dragging and dropping items onto the canvas.                                                                     |
| **Parameters**                              | <ul><li>`fn`   - A function, can be nil, that will be called when an item is dragged onto the canvas.  An explicit nil, the default, disables drag-and-drop for this canvas.</li></ul> |
| **Returns**                                 | <ul><li>The canvas object</li></ul>          |
| **Notes**                                   | <ul><li>The callback function should expect 3 arguments and optionally return 1: the canvas object itself, a message specifying the type of dragging event, and a table containing details about the item(s) being dragged.  The key-value pairs of the details table will be the following:</li><li>  `pasteboard` - the name of the pasteboard that contains the items being dragged</li><li>  `sequence`   - an integer that uniquely identifies the dragging session.</li><li>  `mouse`      - a point table containing the location of the mouse pointer within the canvas corresponding to when the callback occurred.</li><li>  `operation`  - a table containing string descriptions of the type of dragging the source application supports. Potentially useful for determining if your callback function should accept the dragged item or not.</li><li></li><li>* The possible messages the callback function may receive are as follows:</li><li>  "enter"   - the user has dragged an item into the canvas.  When your callback receives this message, you can optionally return false to indicate that you do not wish to accept the item being dragged.</li><li>  "exit"    - the user has moved the item out of the canvas; if the previous "enter" callback returned false, this message will also occur when the user finally releases the items being dragged.</li><li>  "receive" - indicates that the user has released the dragged object while it is still within the canvas frame.  When your callback receives this message, you can optionally return false to indicate to the sending application that you do not want to accept the dragged item -- this may affect the animations provided by the sending application.</li><li></li><li>You can use the sequence number in the details table to match up an "enter" with an "exit" or "receive" message.</li><li></li><li>You should capture the details you require from the drag-and-drop operation during the callback for "receive" by using the pasteboard field of the details table and the `hs.pasteboard` module.  Because of the nature of "promised items", it is not guaranteed that the items will still be on the pasteboard after your callback completes handling this message.</li><li></li><li>A canvas object can only accept drag-and-drop items when its window level is at [hs.canvas.windowLevels.dragging](#windowLevels) or lower.</li><li>a canvas object can only accept drag-and-drop items when it accepts mouse events.  You must define a [hs.canvas:mouseCallback](#mouseCallback) function, even if it is only a placeholder, e.g. `hs.canvas:mouseCallback(function() end)`</li></ul>                |

---

### [elementAttribute](#elementAttribute)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:elementAttribute(index, key, [value]) -> canvasObject | current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the attribute `key` for the canvas element at the specified index.                                                                     |
| **Parameters**                              | <ul><li>`index` - the index of the canvas element whose attribute is to be retrieved or set.</li><li>`key`   - the key name of the attribute to get or set.</li><li>`value` - an optional value to assign to the canvas element's attribute.</li></ul> |
| **Returns**                                 | <ul><li>if a value for the attribute is specified, returns the canvas object; otherwise returns the current value for the specified attribute.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [elementBounds](#elementBounds)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:elementBounds(index) -> rectTable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the smallest rectangle which can fully contain the canvas element at the specified index.                                                                     |
| **Parameters**                              | <ul><li>`index` - the index of the canvas element to get the bounds for</li></ul> |
| **Returns**                                 | <ul><li>a rect table containing the smallest rectangle which can fully contain the canvas element.</li></ul>          |
| **Notes**                                   | <ul><li>For many elements, this will be the same as the element frame.  For items without a frame (e.g. `segments`, `circle`, etc.) this will be the smallest rectangle which can fully contain the canvas element as specified by it's attributes.</li></ul>                |

---

### [elementCount](#elementCount)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:elementCount() -> integer`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the number of elements currently defined for the canvas object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the number of elements currently defined for the canvas object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [elementKeys](#elementKeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:elementKeys(index, [optional]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a list of the key names for the attributes set for the canvas element at the specified index.                                                                     |
| **Parameters**                              | <ul><li>`index`    - the index of the element to get the assigned key list from.</li><li>`optional` - an optional boolean, default false, indicating whether optional, but unset, keys relevant to this canvas object should also be included in the list returned.</li></ul> |
| **Returns**                                 | <ul><li>a table containing the keys that are set for this canvas element.  May also optionally include keys which are not specifically set for this element but use inherited values from the canvas or module defaults.</li></ul>          |
| **Notes**                                   | <ul><li>Any attribute which has been explicitly set for the element will be included in the key list (even if it is ignored for the element type).  If the `optional` flag is set to true, the *additional* attribute names added to the list will only include those which are relevant to the element type.</li></ul>                |

---

### [frame](#frame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:frame([rect]) -> canvasObject | currentValue`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the frame of the canvasObject.                                                                     |
| **Parameters**                              | <ul><li>rect - An optional rect-table containing the co-ordinates and size the canvas object should be moved and set to</li></ul> |
| **Returns**                                 | <ul><li>If an argument is provided, the canvas object; otherwise the current value.</li></ul>          |
| **Notes**                                   | <ul><li>a rect-table is a table with key-value pairs specifying the new top-left coordinate on the screen of the canvas (keys `x`  and `y`) and the new size (keys `h` and `w`).  The table may be crafted by any method which includes these keys, including the use of an `hs.geometry` object.</li><li></li><li>elements in the canvas that have the `absolutePosition` attribute set to false will be moved so that their relative position within the canvas remains the same with respect to the new size.</li><li>elements in the canvas that have the `absoluteSize` attribute set to false will be resized so that their relative size with respect to the canvas remains the same with respect to the new size.</li></ul>                |

---

### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:hide([fadeOutTime]) -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the canvas object                                                                     |
| **Parameters**                              | <ul><li>`fadeOutTime` - An optional number of seconds over which to fade out the canvas object. Defaults to zero.</li></ul> |
| **Returns**                                 | <ul><li>The canvas object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [imageFromCanvas](#imageFromCanvas)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:imageFromCanvas() -> hs.image object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an image of the canvas contents as an `hs.image` object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an `hs.image` object</li></ul>          |
| **Notes**                                   | <ul><li>The canvas does not have to be visible in order for an image to be generated from it.</li></ul>                |

---

### [insertElement](#insertElement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:insertElement(elementTable, [index]) -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Insert a new element into the canvas at the specified index.                                                                     |
| **Parameters**                              | <ul><li>`elementTable` - a table containing key-value pairs that define the element to be added to the canvas.</li><li>`index`        - an optional integer between 1 and the canvas element count + 1 specifying the index position to put the new element.  Any element currently at that index, and those that follow, will be moved one position up in the element array.  Defaults to the canvas element count + 1 (i.e. after the end of the currently defined elements).</li></ul> |
| **Returns**                                 | <ul><li>the canvasObject</li></ul>          |
| **Notes**                                   | <ul><li>see also [hs.canvas:assignElement](#assignElement).</li></ul>                |

---

### [isOccluded](#isOccluded)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:isOccluded() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether or not the canvas is currently occluded (hidden by other windows, off screen, etc).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a boolean indicating whether or not the canvas is currently being occluded.</li></ul>          |
| **Notes**                                   | <ul><li>If any part of the canvas is visible (even if that portion of the canvas does not contain any canvas elements), then the canvas is not considered occluded.</li><li>a canvas which is completely covered by one or more opaque windows is considered occluded; however, if the windows covering the canvas are not opaque, then the canvas is not occluded.</li><li>a canvas that is currently hidden or with a height of 0 or a width of 0 is considered occluded.</li><li>See also [hs.canvas:isShowing](#isShowing).</li></ul>                |

---

### [isShowing](#isShowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:isShowing() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether or not the canvas is currently being shown.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a boolean indicating whether or not the canvas is currently being shown (true) or is currently hidden (false).</li></ul>          |
| **Notes**                                   | <ul><li>This method only determines whether or not the canvas is being shown or is hidden -- it does not indicate whether or not the canvas is currently off screen or is occluded by other objects.</li><li>See also [hs.canvas:isOccluded](#isOccluded).</li></ul>                |

---

### [isVisible](#isVisible)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:isVisible() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether or not the canvas is currently showing and is (at least partially) visible on screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a boolean indicating whether or not the canvas is currently visible.</li></ul>          |
| **Notes**                                   | <ul><li>This is syntactic sugar for `not hs.canvas:isOccluded()`.</li><li>See [hs.canvas:isOccluded](#isOccluded) for more details.</li></ul>                |

---

### [level](#level)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:level([level]) -> canvasObject | currentValue`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the window level more precisely than sendToBack and bringToFront.                                                                     |
| **Parameters**                              | <ul><li>`level` - an optional level, specified as a number or as a string, specifying the new window level for the canvasObject. If it is a string, it must match one of the keys in [hs.canvas.windowLevels](#windowLevels).</li></ul> |
| **Returns**                                 | <ul><li>If an argument is provided, the canvas object; otherwise the current value.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [minimumTextSize](#minimumTextSize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:minimumTextSize([index], text) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table specifying the size of the rectangle which can fully render the text with the specified style so that is will be completely visible.                                                                     |
| **Parameters**                              | <ul><li>`index` - an optional index specifying the element in the canvas which contains the text attributes which should be used when determining the size of the text. If not provided, the canvas defaults will be used instead. Ignored if `text` is an hs.styledtext object.</li><li>`text`  - a string or hs.styledtext object specifying the text.</li></ul> |
| **Returns**                                 | <ul><li>a size table specifying the height and width of a rectangle which could fully contain the text when displayed in the canvas</li></ul>          |
| **Notes**                                   | <ul><li>Multi-line text (separated by a newline or return) is supported.  The height will be for the multiple lines and the width returned will be for the longest line.</li></ul>                |

---

### [mouseCallback](#mouseCallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:mouseCallback(mouseCallbackFn) -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets a callback for mouse events with respect to the canvas                                                                     |
| **Parameters**                              | <ul><li>`mouseCallbackFn`   - A function, can be nil, that will be called when a mouse event occurs within the canvas, and an element beneath the mouse's current position has one of the `trackMouse...` attributes set to true.</li></ul> |
| **Returns**                                 | <ul><li>The canvas object</li></ul>          |
| **Notes**                                   | <ul><li>The callback function should expect 5 arguments: the canvas object itself, a message specifying the type of mouse event, the canvas element `id` (or index position in the canvas if the `id` attribute is not set for the element), the x position of the mouse when the event was triggered within the rendered portion of the canvas element, and the y position of the mouse when the event was triggered within the rendered portion of the canvas element.</li><li>See also [hs.canvas:canvasMouseEvents](#canvasMouseEvents) for tracking mouse events in regions of the canvas not covered by an element with mouse tracking enabled.</li><li></li><li>The following mouse attributes may be set to true for a canvas element and will invoke the callback with the specified message:</li><li>  `trackMouseDown`      - indicates that a callback should be invoked when a mouse button is clicked down on the canvas element.  The message will be "mouseDown".</li><li>  `trackMouseUp`        - indicates that a callback should be invoked when a mouse button has been released over the canvas element.  The message will be "mouseUp".</li><li>  `trackMouseEnterExit` - indicates that a callback should be invoked when the mouse pointer enters or exits the  canvas element.  The message will be "mouseEnter" or "mouseExit".</li><li>  `trackMouseMove`      - indicates that a callback should be invoked when the mouse pointer moves within the canvas element.  The message will be "mouseMove".</li><li></li><li>The callback mechanism uses reverse z-indexing to determine which element will receive the callback -- the topmost element of the canvas which has enabled callbacks for the specified message will be invoked.</li><li></li><li>No distinction is made between the left, right, or other mouse buttons. If you need to determine which specific button was pressed, use `hs.eventtap.checkMouseButtons()` within your callback to check.</li><li></li><li>The hit point detection occurs by comparing the mouse pointer location to the rendered content of each individual canvas object... if an object which obscures a lower object does not have mouse tracking enabled, the lower object will still receive the event if it does have tracking enabled.</li><li></li><li>Clipping regions which remove content from the visible area of a rendered object are ignored for the purposes of element hit-detection.</li></ul>                |

---

### [orderAbove](#orderAbove)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:orderAbove([canvas2]) -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves canvas object above canvas2, or all canvas objects in the same presentation level, if canvas2 is not given.                                                                     |
| **Parameters**                              | <ul><li>`canvas2` -An optional canvas object to place the canvas object above.</li></ul> |
| **Returns**                                 | <ul><li>The canvas object</li></ul>          |
| **Notes**                                   | <ul><li>If the canvas object and canvas2 are not at the same presentation level, this method will move the canvas object as close to the desired relationship as possible without changing the canvas object's presentation level. See [hs.canvas.level](#level).</li></ul>                |

---

### [orderBelow](#orderBelow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:orderBelow([canvas2]) -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves canvas object below canvas2, or all canvas objects in the same presentation level, if canvas2 is not given.                                                                     |
| **Parameters**                              | <ul><li>`canvas2` -An optional canvas object to place the canvas object below.</li></ul> |
| **Returns**                                 | <ul><li>The canvas object</li></ul>          |
| **Notes**                                   | <ul><li>If the canvas object and canvas2 are not at the same presentation level, this method will move the canvas object as close to the desired relationship as possible without changing the canvas object's presentation level. See [hs.canvas.level](#level).</li></ul>                |

---

### [removeElement](#removeElement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:removeElement([index]) -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Insert a new element into the canvas at the specified index.                                                                     |
| **Parameters**                              | <ul><li>`index`        - an optional integer between 1 and the canvas element count specifying the index of the canvas element to remove. Any elements that follow, will be moved one position down in the element array.  Defaults to the canvas element count (i.e. the last element of the currently defined elements).</li></ul> |
| **Returns**                                 | <ul><li>the canvasObject</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [replaceElements](#replaceElements)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:replaceElements(element...) -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Replaces all of the elements in the canvas with the elements specified.  Shortens or lengthens the canvas element count if necessary to accomodate the new canvas elements.                                                                     |
| **Parameters**                              | <ul><li>`element` - a table containing key-value pairs that define the element to be assigned to the canvas.  You can specify one or more elements and they will be appended in the order they are listed.</li></ul> |
| **Returns**                                 | <ul><li>the canvas object</li></ul>          |
| **Notes**                                   | <ul><li>You can also specify multiple elements in a table as an array, where each index in the table contains an element table, and use the array as a single argument to this method if this style works better in your code.</li></ul>                |

---

### [rotateElement](#rotateElement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:rotateElement(index, angle, [point], [append]) -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Rotates an element about the point specified, or the elements center if no point is specified.                                                                     |
| **Parameters**                              | <ul><li>`index`  - the index of the element to rotate</li><li>`angle`  - the angle to rotate the object in a clockwise direction</li><li>`point`  - an optional point table, defaulting to the elements center, specifying the point around which the object should be rotated</li><li>`append` - an optional boolean, default false, specifying whether or not the rotation transformation matrix should be appended to the existing transformation assigned to the element (true) or replace it (false).</li></ul> |
| **Returns**                                 | <ul><li>the canvas object</li></ul>          |
| **Notes**                                   | <ul><li>a point-table is a table with key-value pairs specifying a coordinate in the canvas (keys `x`  and `y`). The table may be crafted by any method which includes these keys, including the use of an `hs.geometry` object.</li><li>The center of the object is determined by getting the element's bounds with [hs.canvas:elementBounds](#elementBounds).</li><li>If the third argument is a boolean value, the `point` argument is assumed to be the element's center and the boolean value is used as the `append` argument.</li><li></li><li>This method uses [hs.canvas.matrix](MATRIX.md) to generate the rotation transformation and provides a wrapper for `hs.canvas.matrix.translate(x, y):rotate(angle):translate(-x, -y)` which is then assigned or appended to the element's existing `transformation` attribute.</li></ul>                |

---

### [sendToBack](#sendToBack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:sendToBack() -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Places the canvas object behind normal windows, between the desktop wallpaper and desktop icons                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The canvas object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:show([fadeInTime]) -> canvasObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Displays the canvas object                                                                     |
| **Parameters**                              | <ul><li>`fadeInTime` - An optional number of seconds over which to fade in the canvas object. Defaults to zero.</li></ul> |
| **Returns**                                 | <ul><li>The canvas object</li></ul>          |
| **Notes**                                   | <ul><li>if the canvas is in use as an element in another canvas, this method will result in an error.</li></ul>                |

---

### [size](#size)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:size([size]) -> canvasObject | currentValue`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the size of a canvas object                                                                     |
| **Parameters**                              | <ul><li>`size` - An optional size-table specifying the width and height the canvas object should be resized to</li></ul> |
| **Returns**                                 | <ul><li>If an argument is provided, the canvas object; otherwise the current value.</li></ul>          |
| **Notes**                                   | <ul><li>a size-table is a table with key-value pairs specifying the size (keys `h` and `w`) the canvas should be resized to. The table may be crafted by any method which includes these keys, including the use of an `hs.geometry` object.</li><li></li><li>elements in the canvas that have the `absolutePosition` attribute set to false will be moved so that their relative position within the canvas remains the same with respect to the new size.</li><li>elements in the canvas that have the `absoluteSize` attribute set to false will be resized so that their relative size with respect to the canvas remains the same with respect to the new size.</li></ul>                |

---

### [topLeft](#topLeft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:topLeft([point]) -> canvasObject | currentValue`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the top-left coordinate of the canvas object                                                                     |
| **Parameters**                              | <ul><li>`point` - An optional point-table specifying the new coordinate the top-left of the canvas object should be moved to</li></ul> |
| **Returns**                                 | <ul><li>If an argument is provided, the canvas object; otherwise the current value.</li></ul>          |
| **Notes**                                   | <ul><li>a point-table is a table with key-value pairs specifying the new top-left coordinate on the screen of the canvas (keys `x`  and `y`). The table may be crafted by any method which includes these keys, including the use of an `hs.geometry` object.</li></ul>                |

---

### [transformation](#transformation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:transformation([matrix]) -> canvasObject | current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the matrix transformation which is applied to every element in the canvas before being individually processed and added to the canvas.                                                                     |
| **Parameters**                              | <ul><li>`matrix` - an optional table specifying the matrix table, as defined by the [hs.canvas.matrix](MATRIX.md) module, to be applied to every element of the canvas, or an explicit `nil` to reset the transformation to the identity matrix.</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the canvasObject, otherwise returns the current value</li></ul>          |
| **Notes**                                   | <ul><li>An example use for this method would be to change the canvas's origin point { x = 0, y = 0 } from the lower left corner of the canvas to somewhere else, like the middle of the canvas.</li></ul>                |

---

### [wantsLayer](#wantsLayer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canvas:wantsLayer([flag]) -> canvasObject | currentValue`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether or not the canvas object should be rendered by the view or by Core Animation.                                                                     |
| **Parameters**                              | <ul><li>`flag` - optional boolean (default false) which indicates whether the canvas object should be rendered by the containing view (false) or by Core Animation (true).</li></ul> |
| **Returns**                                 | <ul><li>If an argument is provided, the canvas object; otherwise the current value.</li></ul>          |
| **Notes**                                   | <ul><li>This method can help smooth the display of small text objects on non-Retina monitors.</li></ul>                |

---

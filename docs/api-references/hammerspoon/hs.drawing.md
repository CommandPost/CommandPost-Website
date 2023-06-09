# hs.drawing

DEPRECATED. Primitives for drawing on the screen in various ways.

hs.drawing is now deprecated and will be removed in a future release. Its functionality is now implemented by hs.canvas and you should migrate your code to using that directly. The API docs for hs.drawing remain here as a convenience.

## Submodules
 * [hs.drawing.color](hs.drawing.color.md)

## API Overview
* Constants - Useful values which cannot be changed
 * [windowBehaviors](#windowBehaviors)
 * [windowLevels](#windowLevels)
* Functions - API calls offered directly by the extension
 * [defaultTextStyle](#defaultTextStyle)
 * [disableScreenUpdates](#disableScreenUpdates)
 * [enableScreenUpdates](#enableScreenUpdates)
 * [getTextDrawingSize](#getTextDrawingSize)
* Constructors - API calls which return an object, typically one that offers API methods
 * [appImage](#appImage)
 * [arc](#arc)
 * [circle](#circle)
 * [ellipticalArc](#ellipticalArc)
 * [image](#image)
 * [line](#line)
 * [rectangle](#rectangle)
 * [text](#text)
* Methods - API calls which can only be made on an object returned by a constructor
 * [alpha](#alpha)
 * [behavior](#behavior)
 * [behaviorAsLabels](#behaviorAsLabels)
 * [bringToFront](#bringToFront)
 * [clickCallbackActivating](#clickCallbackActivating)
 * [clippingRectangle](#clippingRectangle)
 * [delete](#delete)
 * [frame](#frame)
 * [getStyledText](#getStyledText)
 * [hide](#hide)
 * [imageAlignment](#imageAlignment)
 * [imageAnimates](#imageAnimates)
 * [imageFrame](#imageFrame)
 * [imageScaling](#imageScaling)
 * [orderAbove](#orderAbove)
 * [orderBelow](#orderBelow)
 * [rotateImage](#rotateImage)
 * [sendToBack](#sendToBack)
 * [setAlpha](#setAlpha)
 * [setArcAngles](#setArcAngles)
 * [setBehavior](#setBehavior)
 * [setBehaviorByLabels](#setBehaviorByLabels)
 * [setClickCallback](#setClickCallback)
 * [setFill](#setFill)
 * [setFillColor](#setFillColor)
 * [setFillGradient](#setFillGradient)
 * [setFrame](#setFrame)
 * [setImage](#setImage)
 * [setImageASCII](#setImageASCII)
 * [setImageFromPath](#setImageFromPath)
 * [setLevel](#setLevel)
 * [setRoundedRectRadii](#setRoundedRectRadii)
 * [setSize](#setSize)
 * [setStroke](#setStroke)
 * [setStrokeColor](#setStrokeColor)
 * [setStrokeWidth](#setStrokeWidth)
 * [setStyledText](#setStyledText)
 * [setText](#setText)
 * [setTextColor](#setTextColor)
 * [setTextFont](#setTextFont)
 * [setTextSize](#setTextSize)
 * [setTextStyle](#setTextStyle)
 * [setTopLeft](#setTopLeft)
 * [show](#show)

## API Documentation

### Constants


### [windowBehaviors](#windowBehaviors)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.windowBehaviors[]`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Array of window behavior labels for determining how an hs.drawing object is handled in Spaces and Exposé                                                                     |
| **Notes**                                   | <ul><li>This table has a __tostring() metamethod which allows listing it's contents in the Hammerspoon console by typing `hs.drawing.windowBehaviors`.</li></ul>                |

---

### [windowLevels](#windowLevels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.windowLevels`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table of predefined window levels usable with `hs.drawing:setLevel(...)`                                                                     |
| **Notes**                                   | <ul><li>This table has a __tostring() metamethod which allows listing it's contents in the Hammerspoon console by typing `hs.drawing.windowLevels`.</li><li>These key names map to the constants used in CoreGraphics to specify window levels and may not actually be used for what the name might suggest. For example, tests suggest that an active screen saver actually runs at a level of 2002, rather than at 1000, which is the window level corresponding to kCGScreenSaverWindowLevelKey.</li><li>Each drawing level is sorted separately and `hs.drawing:orderAbove(...)` and hs.drawing:orderBelow(...)` only arrange windows within the same level.</li><li>If you use Dock hiding (or in 10.11, Menubar hiding) please note that when the Dock (or Menubar) is popped up, it is done so with an implicit orderAbove, which will place it above any items you may also draw at the Dock (or MainMenu) level.</li><li></li><li>A drawing object with a [hs.drawing:setClickCallback](#setClickCallback) function can only reliably receive mouse click events when its window level is at `hs.drawing.windowLevels.desktopIcon` + 1 or higher.</li></ul>                |

---
### Functions


### [defaultTextStyle](#defaultTextStyle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.defaultTextStyle() -> `hs.styledtext` attributes table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing the default font, size, color, and paragraphStyle used by `hs.drawing` for text drawing objects.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table containing the default style attributes `hs.drawing` uses for text drawing objects in the `hs.styledtext` attributes table format.</li></ul>          |
| **Notes**                                   | <ul><li>This method returns the default font, size, color, and paragraphStyle used by `hs.drawing` for text objects.  If you modify a drawing object's defaults with `hs.drawing:setColor`, `hs.drawing:setTextFont`, or `hs.drawing:setTextSize`, the changes will not be reflected by this function.</li></ul>                |

---

### [disableScreenUpdates](#disableScreenUpdates)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.disableScreenUpdates() -> None`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Tells the OS X window server to pause updating the physical displays for a short while.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This method can be used to allow multiple changes which are being made to the users display appear as if they all occur simultaneously by holding off on updating the screen on the regular schedule.</li><li>This method should always be balanced with a call to [hs.drawing.enableScreenUpdates](#enableScreenUpdates) when your updates have been completed.  Failure to do so will be logged in the system logs.</li><li>The window server will only allow you to pause updates for up to 1 second.  This prevents a rogue or hung process from locking the systems display completely.  Updates will be resumed when [hs.drawing.enableScreenUpdates](#enableScreenUpdates) is encountered or after 1 second, whichever comes first.</li><li>The underlying OS function for disabling screen updates is deprecated.</li></ul>                |

---

### [enableScreenUpdates](#enableScreenUpdates)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.enableScreenUpdates() -> None`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Tells the OS X window server to resume updating the physical displays after a previous pause.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>In conjunction with [hs.drawing.disableScreenUpdates](#disableScreenUpdates), this method can be used to allow multiple changes which are being made to the users display appear as if they all occur simultaneously by holding off on updating the screen on the regular schedule.</li><li>The window server will only allow you to pause updates for up to 1 second.  This prevents a rogue or hung process from locking the systems display completely.  Updates will be resumed when this function is encountered  or after 1 second, whichever comes first.</li><li>The underlying OS function for enabling screen updates is deprecated.</li></ul>                |

---

### [getTextDrawingSize](#getTextDrawingSize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.getTextDrawingSize(styledTextObject or theText, [textStyle]) -> sizeTable | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get the size of the rectangle necessary to fully render the text with the specified style so that is will be completely visible.                                                                     |
| **Parameters**                              | <ul><li>styledTextObject - an object created with the hs.styledtext module or its table representation (see `hs.styledtext`).</li><li>textStyle - an optional table containing one or more of the following keys to set for the text of the drawing object (if textStyle is nil or missing, the `hs.drawing` defaults are used):</li></ul> |
| **Returns**                                 | <ul><li>sizeTable - a table containing the Height and Width necessary to fully display the text drawing object, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>This function assumes the default values specified for any key which is not included in the provided textStyle.</li><li>The size returned is an approximation and may return a width that is off by about 4 points.  Use the returned size as a minimum starting point. Sometimes using the "clip" or "truncateMiddle" lineBreak modes or "justified" alignment will fit, but its safest to add in your own buffer if you have the space in your layout.</li><li>Multi-line text (separated by a newline or return) is supported.  The height will be for the multiple lines and the width returned will be for the longest line.</li><li>The following simplified style format is supported for use with `hs.drawing:setText` and `hs.drawing.setTextStyle`.</li><li> theText   - the text which is to be displayed.</li><li> textStyle - a table containing one or more of the following keys to set for the text of the drawing object (if textStyle is nil or missing, the `hs.drawing` defaults are used):</li><li>   font      - the name of the font to use (default: the system font)</li><li>   size      - the font point size to use (default: 27.0)</li><li>   color     - ignored, but accepted for compatibility with `hs.drawing:setTextStyle()`</li><li>   alignment - a string of one of the following indicating the texts alignment within the drawing objects frame:</li><li>     "left"      - the text is visually left aligned.</li><li>     "right"     - the text is visually right aligned.</li><li>     "center"    - the text is visually center aligned.</li><li>     "justified" - the text is justified</li><li>     "natural"   - (default) the natural alignment of the text’s script</li><li>   lineBreak - a string of one of the following indicating how to wrap text which exceeds the drawing object's frame:</li><li>     "wordWrap"       - (default) wrap at word boundaries, unless the word itself doesn’t fit on a single line</li><li>     "charWrap"       - wrap before the first character that doesn’t fit</li><li>     "clip"           - do not draw past the edge of the drawing object frame</li><li>     "truncateHead"   - the line is displayed so that the end fits in the frame and the missing text at the beginning of the line is indicated by an ellipsis</li><li>     "truncateTail"   - the line is displayed so that the beginning fits in the frame and the missing text at the end of the line is indicated by an ellipsis</li><li>     "truncateMiddle" - the line is displayed so that the beginning and end fit in the frame and the missing text in the middle is indicated by an ellipsis</li></ul>                |

---
### Constructors


### [appImage](#appImage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.appImage(sizeRect, bundleID) -> drawingObject or nil`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new image object with the icon of a given app                                                                     |
| **Parameters**                              | <ul><li>sizeRect - A rect-table containing the location/size of the image. If the size values are -1 then the image will be displayed at the icon's native size</li><li>bundleID - A string containing the bundle identifier of an app (e.g. "com.apple.Safari")</li></ul> |
| **Returns**                                 | <ul><li>An `hs.drawing` object, or nil if an error occurs</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [arc](#arc)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.arc(centerPoint, radius, startAngle, endAngle) -> drawingObject or nil`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new arc object                                                                     |
| **Parameters**                              | <ul><li>centerPoint - A point-table containing the center of the circle used to define the arc</li><li>radius      - The radius of the circle used to define the arc</li><li>startAngle  - The starting angle of the arc, measured in degrees clockwise from the y-axis.</li><li>endAngle    - The ending angle of the arc, measured in degrees clockwise from the y-axis.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.drawing` object, or nil if an error occurs</li></ul>          |
| **Notes**                                   | <ul><li>This constructor is actually a wrapper for the `hs.drawing.ellipticalArc` constructor.</li></ul>                |

---

### [circle](#circle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.circle(sizeRect) -> drawingObject or nil`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new circle object                                                                     |
| **Parameters**                              | <ul><li>sizeRect - A rect-table containing the location/size of the circle</li></ul> |
| **Returns**                                 | <ul><li>An `hs.drawing` object, or nil if an error occurs</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [ellipticalArc](#ellipticalArc)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.ellipticalArc(sizeRect, startAngle, endAngle) -> drawingObject or nil`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new elliptical arc object                                                                     |
| **Parameters**                              | <ul><li>sizeRect    - A rect-table containing the location and size of the ellipse used to define the arc</li><li>startAngle  - The starting angle of the arc, measured in degrees clockwise from the y-axis.</li><li>endAngle    - The ending angle of the arc, measured in degrees clockwise from the y-axis.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.drawing` object, or nil if an error occurs</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [image](#image)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.image(sizeRect, imageData) -> drawingObject or nil`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new image object                                                                     |
| **Parameters**                              | <ul><li>sizeRect - A rect-table containing the location/size of the image</li><li>imageData - This can be either:
  An `hs.image` object
  A string containing a path to an image file
  A string beginning with `ASCII:` which signifies that the rest of the string is interpreted as a special form of ASCII diagram, which will be rendered to an image. See the notes below for information about the special format of ASCII diagram.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.drawing` object, or nil if an error occurs</li><li>Paths relative to the PWD of Hammerspoon (typically ~/.hammerspoon/) will work, but paths relative to the UNIX homedir character, `~` will not</li><li>Animated GIFs are supported. They're not super friendly on your CPU, but they work</li></ul>          |
| **Notes**                                   | <ul><li>To use the ASCII diagram image support, see http://cocoamine.net/blog/2015/03/20/replacing-photoshop-with-nsstring/ and be sure to preface your ASCII diagram with the special string `ASCII:`</li></ul>                |

---

### [line](#line)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.line(originPoint, endPoint) -> drawingObject or nil`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new line object                                                                     |
| **Parameters**                              | <ul><li>originPoint - A point-table containing the co-ordinates of the starting point of the line</li><li>endPoint - A point-table containing the co-ordinates of the end point of the line</li></ul> |
| **Returns**                                 | <ul><li>An `hs.drawing` object, or nil if an error occurs</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [rectangle](#rectangle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.rectangle(sizeRect) -> drawingObject or nil`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new rectangle object                                                                     |
| **Parameters**                              | <ul><li>sizeRect - A rect-table containing the location/size of the rectangle</li></ul> |
| **Returns**                                 | <ul><li>An `hs.drawing` object, or nil if an error occurs</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [text](#text)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing.text(sizeRect, message) -> drawingObject or nil`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new text object                                                                     |
| **Parameters**                              | <ul><li>sizeRect - A rect-table containing the location/size of the text</li><li>message - A string containing the text to be displayed.   May also be any of the types supported by `hs.styledtext`.  See `hs.styledtext` for more details.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.drawing` object, or nil if an error occurs</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [alpha](#alpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:alpha() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the alpha level of the window containing the hs.drawing object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The current alpha level for the hs.drawing object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [behavior](#behavior)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:behavior() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current behavior of the hs.drawing object with respect to Spaces and Exposé for the object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The numeric representation of the current behaviors for the hs.drawing object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [behaviorAsLabels](#behaviorAsLabels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:behaviorAsLabels() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table of the labels for the current behaviors of the object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Returns a table of the labels for the current behaviors with respect to Spaces and Exposé for the object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [bringToFront](#bringToFront)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:bringToFront([aboveEverything]) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Places the drawing object on top of normal windows                                                                     |
| **Parameters**                              | <ul><li>aboveEverything - An optional boolean value that controls how far to the front the drawing should be placed. `true` to place the drawing on top of all windows (including the dock and menubar), `false` to place the drawing above normal windows, but below the dock and menubar. Defaults to `false`.</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>As of macOS Sierra and later, if you want a `hs.drawing` object to appear above full-screen windows you must hide the Hammerspoon Dock icon first using: `hs.dockicon.hide()`</li></ul>                |

---

### [clickCallbackActivating](#clickCallbackActivating)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:clickCallbackActivating([false]) -> drawingObject or current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether or not clicking on a drawing with a click callback defined should bring all of Hammerspoon's open windows to the front.                                                                     |
| **Parameters**                              | <ul><li>flag - an optional boolean indicating whether or not clicking on a drawing with a click callback function defined should activate Hammerspoon and bring its windows forward.  Defaults to true.</li></ul> |
| **Returns**                                 | <ul><li>If a setting value is provided, the drawing object is returned; if no argument is provided, the current setting is returned.</li></ul>          |
| **Notes**                                   | <ul><li>Setting this to false changes a drawing object's AXsubrole value and may affect the results of filters defined for hs.window.filter, depending upon how they are defined.</li></ul>                |

---

### [clippingRectangle](#clippingRectangle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:clippingRectangle([rect]) -> drawingObject or current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set the screen area in which the drawing contents are visible.                                                                     |
| **Parameters**                              | <ul><li>rect - an optional rectangle specifying the visible area of the screen where the drawing's contents are visible.  If an explicit `nil` is specified, no clipping rectangle is set.  Defaults to nil</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the drawing object; otherwise the current value is returned.</li></ul>          |
| **Notes**                                   | <ul><li>This method can be used to specify the area of the display where this drawing should be visible.  If any portion of the drawing extends beyond this rectangle, the image is clipped so that only the portion within this rectangle is visible.</li><li>The rectangle defined by this method is independent of the drawing's actual frame -- if you move the drawing with [hs.drawing:setFrame](#setFrame) or [hs.drawing:setTopLeft](#setTopLeft), this rectangle retains its current value.</li><li></li><li>This method does not work for image objects at present.</li></ul>                |

---

### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:delete()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Destroys the drawing object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This method immediately destroys the drawing object. If you want it to fade out, use `:hide()` first, with some suitable time, and `hs.timer.doAfter()` to schedule the `:delete()` call</li></ul>                |

---

### [frame](#frame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:frame() -> hs.geometry object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the frame of a drawingObject in absolute coordinates                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An `hs.geometry` object containing the frame of the drawing object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getStyledText](#getStyledText)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:getStyledText() -> `hs.styledtext` object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the text of a drawing object as an `hs.styledtext` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an `hs.styledtext` object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on text drawing objects</li></ul>                |

---

### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:hide([fadeOutTime]) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the drawing object                                                                     |
| **Parameters**                              | <ul><li>fadeOut - An optional number of seconds over which to fade out the drawing object. Defaults to zero</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [imageAlignment](#imageAlignment)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:imageAlignment([type]) -> drawingObject or current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the alignment of an image that doesn't fully fill the drawing objects frame.                                                                     |
| **Parameters**                              | <ul><li>type - an optional string value which should match one of the following (default is center):
  topLeft      - the image's top left corner will match the drawing frame's top left corner
  top          - the image's top match the drawing frame's top and will be centered horizontally
  topRight     - the image's top right corner will match the drawing frame's top right corner
  left         - the image's left side will match the drawing frame's left side and will be centered vertically
  center       - the image will be centered vertically and horizontally within the drawing frame
  right        - the image's right side will match the drawing frame's right side and will be centered vertically
  bottomLeft   - the image's bottom left corner will match the drawing frame's bottom left corner
  bottom       - the image's bottom match the drawing frame's bottom and will be centered horizontally
  bottomRight  - the image's bottom right corner will match the drawing frame's bottom right corner</li></ul> |
| **Returns**                                 | <ul><li>If a setting value is provided, the drawing object is returned; if no argument is provided, the current setting is returned.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [imageAnimates](#imageAnimates)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:imageAnimates([flag]) -> drawingObject or current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether or not an animated GIF image should cycle through its animation.                                                                     |
| **Parameters**                              | <ul><li>flag - an optional boolean flag indicating whether or not an animated GIF image should cycle through its animation.  Defaults to true.</li></ul> |
| **Returns**                                 | <ul><li>If a setting value is provided, the drawing object is returned; if no argument is provided, the current setting is returned.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [imageFrame](#imageFrame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:imageFrame([type]) -> drawingObject or current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set what type of frame should be around the drawing frame of the image.                                                                     |
| **Parameters**                              | <ul><li>type - an optional string value which should match one of the following (default is none):
  none   - no frame is drawing around the drawingObject's frameRect
  photo  - a thin black outline with a white background and a dropped shadow.
  bezel  - a gray, concave bezel with no background that makes the image look sunken.
  groove - a thin groove with a gray background that looks etched around the image.
  button - a convex bezel with a gray background that makes the image stand out in relief, like a button.</li></ul> |
| **Returns**                                 | <ul><li>If a setting value is provided, the drawing object is returned; if no argument is provided, the current setting is returned.</li></ul>          |
| **Notes**                                   | <ul><li>Apple considers the photo, groove, and button style frames "stylistically obsolete" and if a frame is required, recommend that you use the bezel style or draw your own to more closely match the OS look and feel.</li></ul>                |

---

### [imageScaling](#imageScaling)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:imageScaling([type]) -> drawingObject or current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set how an image is scaled within the frame of a drawing object containing an image.                                                                     |
| **Parameters**                              | <ul><li>type - an optional string value which should match one of the following (default is scaleProportionally):
  shrinkToFit         - shrink the image, preserving the aspect ratio, to fit the drawing frame only if the image is larger than the drawing frame.
  scaleToFit          - shrink or expand the image to fully fill the drawing frame.  This does not preserve the aspect ratio.
  none                - perform no scaling or resizing of the image.
  scaleProportionally - shrink or expand the image to fully fill the drawing frame, preserving the aspect ration.</li></ul> |
| **Returns**                                 | <ul><li>If a setting value is provided, the drawing object is returned; if no argument is provided, the current setting is returned.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [orderAbove](#orderAbove)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:orderAbove([object2]) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves drawing object above drawing object2, or all drawing objects in the same presentation level, if object2 is not provided.                                                                     |
| **Parameters**                              | <ul><li>Optional drawing object to place the drawing object above.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.drawing` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [orderBelow](#orderBelow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:orderBelow([object2]) -> object1`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves drawing object below drawing object2, or all drawing objects in the same presentation level, if object2 is not provided.                                                                     |
| **Parameters**                              | <ul><li>Optional drawing object to place the drawing object below.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.drawing` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [rotateImage](#rotateImage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:rotateImage(angle) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Rotates an image clockwise around its center                                                                     |
| **Parameters**                              | <ul><li>angle - the angle in degrees to rotate the image around its center in a clockwise direction.</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>* This method works by rotating the image view within its drawing window.  This means that an image which completely fills its viewing area will most likely be cropped in some places.  Best results are achieved with images that have clear space around their edges or with `hs.drawing.imageScaling` set to "none".</li></ul>                |

---

### [sendToBack](#sendToBack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:sendToBack() -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Places the drawing object behind normal windows, between the desktop wallpaper and desktop icons                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setAlpha](#setAlpha)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setAlpha(level) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the alpha level of the window containing the hs.drawing object.                                                                     |
| **Parameters**                              | <ul><li>level - the alpha level (0.0 - 1.0) to set the object to</li></ul> |
| **Returns**                                 | <ul><li>The `hs.drawing` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setArcAngles](#setArcAngles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setArcAngles(startAngle, endAngle) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Changes the starting and ending angles for an arc drawing object                                                                     |
| **Parameters**                              | <ul><li>startAngle  - The starting angle of the arc, measured in degrees clockwise from the y-axis.</li><li>endAngle    - The ending angle of the arc, measured in degrees clockwise from the y-axis.</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on arc drawing objects</li></ul>                |

---

### [setBehavior](#setBehavior)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setBehavior(behavior) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the window behaviors represented by the number provided for the window containing the hs.drawing object.                                                                     |
| **Parameters**                              | <ul><li>behavior - the numeric representation of the behaviors to set for the window of the object</li></ul> |
| **Returns**                                 | <ul><li>The `hs.drawing` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setBehaviorByLabels](#setBehaviorByLabels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setBehaviorByLabels(table) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the window behaviors based upon the labels specified in the table provided.                                                                     |
| **Parameters**                              | <ul><li>a table of label strings or numbers.  Recognized values can be found in `hs.drawing.windowBehaviors`.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.drawing` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setClickCallback](#setClickCallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setClickCallback(mouseUpFn, mouseDownFn) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets a callback for mouseUp and mouseDown click events                                                                     |
| **Parameters**                              | <ul><li>mouseUpFn - A function, can be nil, that will be called when the drawing object is clicked on and the mouse button is released. If this argument is nil, any existing callback is removed.</li><li>mouseDownFn - A function, can be nil, that will be called when the drawing object is clicked on and the mouse button is first pressed down. If this argument is nil, any existing callback is removed.</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>No distinction is made between the left, right, or other mouse buttons -- they all invoke the same up or down function.  If you need to determine which specific button was pressed, use `hs.eventtap.checkMouseButtons()` within your callback to check.</li></ul>                |

---

### [setFill](#setFill)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setFill(doFill) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets whether or not to fill a drawing object                                                                     |
| **Parameters**                              | <ul><li>doFill - A boolean, true to fill the drawing object, false to not fill</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on line, rectangle, circle, or arc drawing objects</li></ul>                |

---

### [setFillColor](#setFillColor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setFillColor(color) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the fill color of a drawing object                                                                     |
| **Parameters**                              | <ul><li>color - a color table as described in `hs.drawing.color`</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on rectangle, circle, or arc drawing objects</li><li>Calling this method will remove any gradient fill colors previously set with `hs.drawing:setFillGradient()`</li></ul>                |

---

### [setFillGradient](#setFillGradient)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setFillGradient(startColor, endColor, angle) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the fill gradient of a drawing object                                                                     |
| **Parameters**                              | <ul><li>startColor - A table containing color component values between 0.0 and 1.0 for each of the keys:
  red (default 0.0)
  green (default 0.0)
  blue (default 0.0)
  alpha (default 1.0)</li><li>endColor - A table containing color component values between 0.0 and 1.0 for each of the keys:
  red (default 0.0)
  green (default 0.0)
  blue (default 0.0)
  alpha (default 1.0)</li><li>angle - A number representing the angle of the gradient, measured in degrees, counter-clockwise, from the left of the drawing object</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on rectangle, circle, or arc drawing objects</li><li>Calling this method will remove any fill color previously set with `hs.drawing:setFillColor()`</li></ul>                |

---

### [setFrame](#setFrame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setFrame(rect) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the frame of the drawingObject in absolute coordinates                                                                     |
| **Parameters**                              | <ul><li>rect - A rect-table containing the co-ordinates and size that should be applied to the drawingObject</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setImage](#setImage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setImage(image) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the image of a drawing object                                                                     |
| **Parameters**                              | <ul><li>image - An `hs.image` object</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setImageASCII](#setImageASCII)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setImageASCII(ascii) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the image of a drawing object from an ASCII representation                                                                     |
| **Parameters**                              | <ul><li>ascii - A string containing the ASCII image to render</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>To use the ASCII diagram image support, see http://cocoamine.net/blog/2015/03/20/replacing-photoshop-with-nsstring</li></ul>                |

---

### [setImageFromPath](#setImageFromPath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setImageFromPath(imagePath) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the image path of a drawing object                                                                     |
| **Parameters**                              | <ul><li>imagePath - A string containing the path to an image file</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on an image drawing object</li><li>Paths relative to the PWD of Hammerspoon (typically ~/.hammerspoon/) will work, but paths relative to the UNIX homedir character, `~` will not</li><li>Animated GIFs are supported. They're not super friendly on your CPU, but they work</li></ul>                |

---

### [setLevel](#setLevel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setLevel(theLevel) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the window level more precisely than sendToBack and bringToFront.                                                                     |
| **Parameters**                              | <ul><li>theLevel - the level specified as a number or as a string where this object should be drawn.  If it is a string, it must match one of the keys in `hs.drawing.windowLevels`.</li></ul> |
| **Returns**                                 | <ul><li>the drawing object</li></ul>          |
| **Notes**                                   | <ul><li>see the notes for `hs.drawing.windowLevels`</li><li>These levels may be unable to explicitly place drawing objects around full-screen macOS windows</li></ul>                |

---

### [setRoundedRectRadii](#setRoundedRectRadii)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setRoundedRectRadii(xradius, yradius) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the radii of the corners of a rectangle drawing object                                                                     |
| **Parameters**                              | <ul><li>xradius - A number containing the radius of each corner along the x-axis</li><li>yradius - A number containing the radius of each corner along the y-axis</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on rectangle drawing objects</li><li>If either radius value is greater than half the width/height (as appropriate) of the rectangle, the value will be clamped at half the width/height</li><li>If either (or both) radius values are 0, the rectangle will be drawn without rounded corners</li></ul>                |

---

### [setSize](#setSize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setSize(size) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resizes a drawing object                                                                     |
| **Parameters**                              | <ul><li>size - A size-table containing the width and height the drawing object should be resized to</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>If this is called on an `hs.drawing.text` object, only its window will be resized. If you also want to change the font size, use `:setTextSize()`</li></ul>                |

---

### [setStroke](#setStroke)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setStroke(doStroke) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets whether or not to stroke a drawing object                                                                     |
| **Parameters**                              | <ul><li>doStroke - A boolean, true to stroke the drawing object, false to not stroke</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on line, rectangle, circle, or arc drawing objects</li></ul>                |

---

### [setStrokeColor](#setStrokeColor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setStrokeColor(color) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the stroke color of a drawing object                                                                     |
| **Parameters**                              | <ul><li>color - a color table as described in `hs.drawing.color`</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on line, rectangle, circle, or arc drawing objects</li></ul>                |

---

### [setStrokeWidth](#setStrokeWidth)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setStrokeWidth(width) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the stroke width of a drawing object                                                                     |
| **Parameters**                              | <ul><li>width - A number containing the width in points to stroke a drawing object</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on line, rectangle, circle, or arc drawing objects</li></ul>                |

---

### [setStyledText](#setStyledText)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setStyledText(message) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the text of a drawing object from an `hs.styledtext` object                                                                     |
| **Parameters**                              | <ul><li>message - Any of the types supported by `hs.styledtext`.  See `hs.styledtext` for more details.</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on text drawing objects</li></ul>                |

---

### [setText](#setText)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setText(message) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the text of a drawing object                                                                     |
| **Parameters**                              | <ul><li>message - A string containing the text to display</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on text drawing objects</li><li>If the text of the drawing object is emptied (i.e. "") then style changes may be lost.  Use a placeholder such as a space (" ") or hide the object if style changes need to be saved but the text should disappear for a while.</li></ul>                |

---

### [setTextColor](#setTextColor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setTextColor(color) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the default text color for a drawing object                                                                     |
| **Parameters**                              | <ul><li>color - a color table as described in `hs.drawing.color`</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be called on text drawing objects</li><li>This method changes the font color for portions of an `hs.drawing` text object which do not have a specific font set in their attributes list (see `hs.styledtext` for more details).</li></ul>                |

---

### [setTextFont](#setTextFont)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setTextFont(fontname) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the default font for a drawing object                                                                     |
| **Parameters**                              | <ul><li>fontname - A string containing the name of the font to use</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on text drawing objects</li><li>This method changes the font for portions of an `hs.drawing` text object which do not have a specific font set in their attributes list (see `hs.styledtext` for more details).</li></ul>                |

---

### [setTextSize](#setTextSize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setTextSize(size) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the default text size for a drawing object                                                                     |
| **Parameters**                              | <ul><li>size - A number containing the font size to use</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on text drawing objects</li><li>This method changes the font size for portions of an `hs.drawing` text object which do not have a specific font set in their attributes list (see `hs.styledtext` for more details).</li></ul>                |

---

### [setTextStyle](#setTextStyle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setTextStyle([textStyle]) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets some simple style parameters for the entire text of a drawing object.  For more control over style including having multiple styles within a single text object, use `hs.styledtext` and `hs.drawing:setStyledText` instead.                                                                     |
| **Parameters**                              | <ul><li>textStyle - an optional table containing one or more of the following keys to set for the text of the drawing object (if the table is nil or left out, the style is reset to the `hs.drawing` defaults):
  font      - the name of the font to use (default: the system font)
  size      - the font point size to use (default: 27.0)
  color     - a color table as described in `hs.drawing.color`
  alignment - a string of one of the following indicating the texts alignment within the drawing objects frame:"left"      - the text is visually left aligned."right"     - the text is visually right aligned."center"    - the text is visually center aligned."justified" - the text is justified"natural"   - (default) the natural alignment of the text’s script
  lineBreak - a string of one of the following indicating how to wrap text which exceeds the drawing object's frame:"wordWrap"       - (default) wrap at word boundaries, unless the word itself doesn’t fit on a single line"charWrap"       - wrap before the first character that doesn’t fit"clip"           - do not draw past the edge of the drawing object frame"truncateHead"   - the line is displayed so that the end fits in the frame and the missing text at the beginning of the line is indicated by an ellipsis"truncateTail"   - the line is displayed so that the beginning fits in the frame and the missing text at the end of the line is indicated by an ellipsis"truncateMiddle" - the line is displayed so that the beginning and end fit in the frame and the missing text in the middle is indicated by an ellipsis</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on text drawing objects</li><li>If the text of the drawing object is currently empty (i.e. "") then style changes may be lost.  Use a placeholder such as a space (" ") or hide the object if style changes need to be saved but the text should disappear for a while.</li><li>Only the keys specified are changed.  To reset an object to all of its defaults, call this method with an explicit nil as its only parameter (e.g. `hs.drawing:setTextStyle(nil)`</li><li>The font, font size, and font color can also be set by their individual specific methods as well; this method is provided so that style components can be stored and applied collectively, as well as used by `hs.drawing.getTextDrawingSize()` to determine the proper rectangle size for a textual drawing object.</li></ul>                |

---

### [setTopLeft](#setTopLeft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:setTopLeft(point) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Moves the drawingObject to a given point                                                                     |
| **Parameters**                              | <ul><li>point - A point-table containing the absolute co-ordinates the drawing object should be moved to</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.drawing:show([fadeInTime]) -> drawingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Displays the drawing object                                                                     |
| **Parameters**                              | <ul><li>fadeInTime - An optional number of seconds over which to fade in the drawing object. Defaults to zero</li></ul> |
| **Returns**                                 | <ul><li>The drawing object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

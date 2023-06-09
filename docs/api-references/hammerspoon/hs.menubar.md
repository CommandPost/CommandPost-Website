# hs.menubar

Create and manage menubar icons

## API Overview
* Constants - Useful values which cannot be changed
 * [imagePositions](#imagePositions)
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [autosaveName](#autosaveName)
 * [delete](#delete)
 * [frame](#frame)
 * [icon](#icon)
 * [imagePosition](#imagePosition)
 * [isInMenuBar](#isInMenuBar)
 * [popupMenu](#popupMenu)
 * [removeFromMenuBar](#removeFromMenuBar)
 * [returnToMenuBar](#returnToMenuBar)
 * [setClickCallback](#setClickCallback)
 * [setIcon](#setIcon)
 * [setMenu](#setMenu)
 * [setTitle](#setTitle)
 * [setTooltip](#setTooltip)
 * [stateImageSize](#stateImageSize)
 * [title](#title)

## API Documentation

### Constants


### [imagePositions](#imagePositions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar.imagePositions[]`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Pre-defined list of image positions for a menubar item                                                                     |

---
### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar.new([inMenuBar], [autosaveName]) -> menubaritem or nil`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new menu bar item object and optionally add it to the system menubar                                                                     |
| **Parameters**                              | <ul><li>inMenuBar - an optional parameter which defaults to true.  If it is true, the menubaritem is added to the system menubar, otherwise the menubaritem is hidden.</li><li>autosaveName - an optional parameter allowing you to define an autosave name, so that macOS can restore the menubar position between restarts.</li></ul> |
| **Returns**                                 | <ul><li>menubar item object to use with other API methods, or nil if it could not be created</li></ul>          |
| **Notes**                                   | <ul><li>You should call hs.menubar:setTitle() or hs.menubar:setIcon() after creating the object, otherwise it will be invisible</li><li></li><li>Calling this method with inMenuBar equal to false is equivalent to calling hs.menubar.new():removeFromMenuBar().</li><li>A hidden menubaritem can be added to the system menubar by calling hs.menubar:returnToMenuBar() or used as a pop-up menu by calling hs.menubar:popupMenu().</li></ul>                |

---
### Methods


### [autosaveName](#autosaveName)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:autosaveName([name]) -> menubaritem | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the autosave name of the menubar. By defining an autosave name, macOS can restore the menubar position after reloads.                                                                     |
| **Parameters**                              | <ul><li>name - An optional string if you want to set the autosave name</li></ul> |
| **Returns**                                 | <ul><li>Either the menubar item, if its autosave name was changed, or the current value of the autosave name</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:delete()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Removes the menubar item from the menubar and destroys it                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [frame](#frame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:frame() -> hs.geometry rect`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the menubar item frame                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an hs.geometry rect describing the menubar item's frame or nil if the menubar item is not currently in the menubar.</li></ul>          |
| **Notes**                                   | <ul><li>This will return a frame even if no icon or title is set</li></ul>                |

---

### [icon](#icon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:icon() -> hs.image object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current icon of the menubar item object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the menubar item icon as an hs.image object, or nil, if there isn't one.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [imagePosition](#imagePosition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:imagePosition([position]) -> menubaritem | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the position of a menubar image relative to its text title                                                                     |
| **Parameters**                              | <ul><li>position - Either one of the values in `hs.menubar.imagePositions` which will be set, or nothing to return the current position</li></ul> |
| **Returns**                                 | <ul><li>Either the menubar item, if its image position was changed, or the current value of the image position</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isInMenuBar](#isInMenuBar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:isInMenuBar() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a boolean indicating whether or not the specified menu is currently in the OS X menubar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a boolean indicating whether or not the specified menu is currently in the OS X menubar</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [popupMenu](#popupMenu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:popupMenu(point[, darkMode]) -> menubaritem`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Display a menubaritem as a pop up menu at the specified screen point.                                                                     |
| **Parameters**                              | <ul><li>point - the location of the upper left corner of the pop-up menu to be displayed.</li><li>darkMode - (optional) `true` to force the menubar dark (defaults to your macOS General Appearance settings)</li></ul> |
| **Returns**                                 | <ul><li>The menubaritem</li></ul>          |
| **Notes**                                   | <ul><li>Items which trigger hs.menubar:setClickCallback() will invoke the callback function, but we cannot control the positioning of any visual elements the function may create -- calling this method on such an object is the equivalent of invoking its callback function directly.</li><li>This method is blocking. Hammerspoon will be unable to respond to any other activity while the pop-up menu is being displayed.</li><li>`darkMode` uses an undocumented macOS API call, so may break in a future release.</li></ul>                |

---

### [removeFromMenuBar](#removeFromMenuBar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:removeFromMenuBar() -> menubaritem`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Removes a menu from the system menu bar.  The item can still be used as a pop-up menu, unless you also delete it.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the menubaritem</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [returnToMenuBar](#returnToMenuBar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:returnToMenuBar() -> menubaritem`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a previously removed menu back to the system menu bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the menubaritem</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setClickCallback](#setClickCallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:setClickCallback([fn]) -> menubaritem`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Registers a function to be called when the menubar item is clicked                                                                     |
| **Parameters**                              | <ul><li>`fn` - An optional function to be called when the menubar item is clicked. If this argument is not provided, any existing function will be removed. The function can optionally accept a single argument, which will be a table containing boolean values indicating which keyboard modifiers were held down when the menubar item was clicked; The possible keys are:
  cmd
  alt
  shift
  ctrl
  fn</li></ul> |
| **Returns**                                 | <ul><li>the menubaritem</li></ul>          |
| **Notes**                                   | <ul><li>If a menu has been attached to the menubar item, this callback will never be called</li><li>Has no affect on the display of a pop-up menu, but changes will be be in effect if hs.menubar:returnToMenuBar() is called on the menubaritem.</li></ul>                |

---

### [setIcon](#setIcon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:setIcon(imageData[, template]) -> menubaritem or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the image of a menubar item object. The image will be displayed in the system menubar                                                                     |
| **Parameters**                              | <ul><li>imageData - This can one of the following:
  An `hs.image` object
  A string containing a path to an image file
  A string beginning with `ASCII:` which signifies that the rest of the string is interpreted as a special form of ASCII diagram, which will be rendered to an image and used as the icon. See the notes below for information about the special format of ASCII diagram.
  nil, indicating that the current image is to be removed</li><li>template - An optional boolean value which defaults to true. If it's true, the provided image will be treated as a "template" image, which allows it to automatically support OS X 10.10's Dark Mode. If it's false, the image will be used as is, supporting colour.</li></ul> |
| **Returns**                                 | <ul><li>the menubaritem if the image was loaded and set, `nil` if it could not be found or loaded</li></ul>          |
| **Notes**                                   | <ul><li>** API Change **</li><li>  This method used to return true on success -- this has been changed to return the menubaritem on success to facilitate method chaining.  Since Lua treats any value which is not nil or false as "true", this should only affect code where the return value was actually being compared to true, e.g. `if result == true then...` rather than the (unaffected) `if result then...`.</li><li></li><li>If you set a title as well as an icon, they will both be displayed next to each other</li><li>Has no affect on the display of a pop-up menu, but changes will be be in effect if hs.menubar:returnToMenuBar() is called on the menubaritem.</li><li></li><li>Icons should be small, transparent images that roughly match the size of normal menubar icons, otherwise they will look very strange. Note that if you're using an `hs.image` image object as the icon, you can force it to be resized with `hs.image:setSize({w=16,h=16})`</li><li>Retina scaling is supported if the image is either scalable (e.g. a PDF produced by Adobe Illustrator) or contain multiple sizes (e.g. a TIFF with small and large images). Images will not automatically do the right thing if you have a @2x version present</li><li>Icons are by default specified as "templates", which allows them to automatically support OS X 10.10's Dark Mode, but this also means they cannot be complicated, colour images.</li><li>For examples of images that work well, see Hammerspoon.app/Contents/Resources/statusicon.tiff (for a retina-capable multi-image TIFF icon) or [https://github.com/jigish/slate/blob/master/Slate/status.pdf](https://github.com/jigish/slate/blob/master/Slate/status.pdf) (for a scalable vector PDF icon)</li><li>For guidelines on the sizing of images, see [http://alastairs-place.net/blog/2013/07/23/nsstatusitem-what-size-should-your-icon-be/](http://alastairs-place.net/blog/2013/07/23/nsstatusitem-what-size-should-your-icon-be/)</li></ul>                |

---

### [setMenu](#setMenu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:setMenu(menuTable) -> menubaritem`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attaches a dropdown menu to the menubar item                                                                     |
| **Parameters**                              | <ul><li>`menuTable`:
  If this argument is `nil`: Removes any previously registered menu
  If this argument is a table: Sets the menu for this menubar item to the supplied table. The format of the table is documented below
  If this argument is a function: The function will be called each time the user clicks on the menubar item and the function should return a table that specifies the menu to be displayed. The table should be of the same format as described below. The function can optionally accept a single argument, which will be a table containing boolean values indicating which keyboard modifiers were held down when the menubar item was clicked; The possible keys are:
  cmd
  alt
  shift
  ctrl
  fn
  Table Format: ```lua { { title = "my menu item", fn = function() print("you clicked my menu item!") end }, { title = "-" }, { title = "other item", fn = some_function }, { title = "disabled item", disabled = true }, { title = "checked item", checked = true }, }```
  The available keys for each menu item are (note that `title` is the only required key -- all other keys are optional):
  `title`           - A string or `hs.styledtext` object to be displayed in the menu. If this is the special string `"-"` the item will be rendered as a menu separator.  This key can be set to the empty string (""), but it must be present.
  `fn`              - A function to be executed when the menu item is clicked. The function will be called with two arguments. The first argument will be a table containing boolean values indicating which keyboard modifiers were held down when the menubar item was clicked (see `menuTable` parameter for possible keys) and the second is the table representing the item.
  `checked`         - A boolean to indicate if the menu item should have a checkmark (by default) next to it or not. Defaults to false.
  `state`           - a text value of "on", "off", or "mixed" indicating the menu item state.  "on" and "off" are equivalent to `checked` being true or false respectively, and "mixed" will have a dash (by default) beside it.
  `disabled`        - A boolean to indicate if the menu item should be unselectable or not. Defaults to false (i.e. menu items are selectable by default)
  `menu`            - a table, in the same format as above, which will be presented as a sub-menu for this menu item.A menu item that is disabled and has a sub-menu will show the arrow at the right indicating that it has a sub-menu, but the items within the sub-menu will not be available, even if the sub-menu items are not disabled themselves.A menu item with a sub-menu is also a clickable target, so it can also have an `fn` key.
  `image`           - An image to display in the menu to the right of any state image or checkmark and to the left of the menu item title.  This image is not constrained by the size set with [hs.menubar:stateImageSize](#stateImageSize), so you should adjust it with `hs.image:setSize` if your image is extremely large or small.
  `tooltip`         - A tool tip to display if you hover the cursor over a menu item for a few seconds.
  `shortcut`        - A string containing a single character, which will be used as the keyboard shortcut for the menu item. Note that if you use a capital letter, the Shift key will be required to activate the shortcut.
  `indent`          - An integer from 0 to 15 indicating how far to the right a menu item should be indented.  Defaults to 0.
  `onStateImage`    - An image to display when `checked` is true or `state` is set to "on".  This image size is constrained to the size set by [hs.menubar:stateImageSize](#stateImageSize).  If this key is not set, a checkmark will be displayed for checked or "on" menu items.
  `offStateImage`   - An image to display when `checked` is false or `state` is set to "off".  This image size is constrained to the size set by [hs.menubar:stateImageSize](#stateImageSize).  If this key is not set, no special marking appears next to the menu item.
  `mixedStateImage` - An image to display when `state` is set to "mixed".  This image size is constrained to the size set by [hs.menubar:stateImageSize](#stateImageSize).  If this key is not set, a dash will be displayed for menu items with a state of "mixed".</li></ul> |
| **Returns**                                 | <ul><li>the menubaritem</li></ul>          |
| **Notes**                                   | <ul><li>If you are using the callback function, you should take care not to take too long to generate the menu, as you will block the process and the OS may decide to remove the menubar item</li></ul>                |

---

### [setTitle](#setTitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:setTitle(title) -> menubaritem`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the title of a menubar item object. The title will be displayed in the system menubar                                                                     |
| **Parameters**                              | <ul><li>`title` - A string or `hs.styledtext` object to use as the title, or nil to remove the title</li></ul> |
| **Returns**                                 | <ul><li>the menubar item</li></ul>          |
| **Notes**                                   | <ul><li>If you set an icon as well as a title, they will both be displayed next to each other</li><li>Has no affect on the display of a pop-up menu, but changes will be be in effect if hs.menubar:returnToMenuBar() is called on the menubaritem.</li></ul>                |

---

### [setTooltip](#setTooltip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:setTooltip(tooltip) -> menubaritem`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the tooltip text on a menubar item                                                                     |
| **Parameters**                              | <ul><li>`tooltip` - A string to use as the tooltip</li></ul> |
| **Returns**                                 | <ul><li>the menubaritem</li></ul>          |
| **Notes**                                   | <ul><li>Has no affect on the display of a pop-up menu, but changes will be be in effect if hs.menubar:returnToMenuBar() is called on the menubaritem.</li></ul>                |

---

### [stateImageSize](#stateImageSize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:stateImageSize([size]) -> hs.image object | current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the size for state images when the menu is displayed.                                                                     |
| **Parameters**                              | <ul><li>size - an optional table specifying the size for state images displayed when using the `checked` or `state` key in a menu table definition.  Defaults to a size determined by the system menu font point size.  If you specify an explicit nil, the size is reset to this default.</li></ul> |
| **Returns**                                 | <ul><li>if a parameter is provided, returns the menubar item; otherwise returns the current value.</li></ul>          |
| **Notes**                                   | <ul><li>An image is used rather than a checkmark or dash only when you set them with the `onStateImage`, `offStateImage`, or `mixedStateImage` keys.  If you are not using these keys, then this method will have no visible effect on the menu's rendering.  See  [hs.menubar:setMenu](#setMenu) for more information.</li><li>If you are setting the menu contents with a static table, you should invoke this method before invoking [hs.menubar:setMenu](#setMenu), as changes will only go into effect when the table is next converted to a menu structure.</li></ul>                |

---

### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menubar:title([styled]) -> string | styledtextObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current title of the menubar item object.                                                                     |
| **Parameters**                              | <ul><li>styled - an optional boolean, defaulting to false, indicating that a styledtextObject representing the text of the menu title should be returned</li></ul> |
| **Returns**                                 | <ul><li>the menubar item title, or an empty string, if there isn't one.  If `styled` is not set or is false, then a string is returned; otherwise a styledtextObject will be returned.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

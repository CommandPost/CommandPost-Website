# hs.chooser

Graphical, interactive tool for choosing/searching data

Notes:
 * This module was influenced heavily by Choose, by Steven Degutis (https://github.com/sdegutis/choose)

---

## API Overview
**Variables** - _Configurable values_
 * [globalCallback](#globalcallback)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [attachedToolbar](#attachedtoolbar)
 * [bgDark](#bgdark)
 * [cancel](#cancel)
 * [choices](#choices)
 * [delete](#delete)
 * [enableDefaultForQuery](#enabledefaultforquery)
 * [fgColor](#fgcolor)
 * [hide](#hide)
 * [hideCallback](#hidecallback)
 * [invalidCallback](#invalidcallback)
 * [isVisible](#isvisible)
 * [placeholderText](#placeholdertext)
 * [query](#query)
 * [queryChangedCallback](#querychangedcallback)
 * [refreshChoicesCallback](#refreshchoicescallback)
 * [rightClickCallback](#rightclickcallback)
 * [rows](#rows)
 * [searchSubText](#searchsubtext)
 * [select](#select)
 * [selectedRow](#selectedrow)
 * [selectedRowContents](#selectedrowcontents)
 * [show](#show)
 * [showCallback](#showcallback)
 * [subTextColor](#subtextcolor)
 * [width](#width)


---

## API Documentation

#### Variables


### [globalCallback](#globalcallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser.globalCallback`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A global callback function used for various hs.chooser events                                                                     |
| **Notes**                                   | <ul><li>This callback should accept two parameters:</li><li> An `hs.chooser` object</li><li> A string containing the name of the event to handle. Possible values are:</li><li>  `willOpen` - An hs.chooser is about to be shown on screen</li><li>  `didClose` - An hs.chooser has just been removed from the screen</li><li>There is a default global callback that uses the `willOpen` event to remember which window has focus, and the `didClose` event to restore focus back to the original window. If you want to use this in addition to your own callback, you can call it as `hs.chooser._defaultGlobalCallback(event)`</li></ul> |
| **Source**                                  | [extensions/chooser/chooser.lua line 29](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/chooser.lua#L29){target="_blank"} |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser.new(completionFn) -> hs.chooser object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new chooser object                                                                     |
| **Parameters**                              | <ul><li>completionFn - A function that will be called when the chooser is dismissed. It should accept one parameter, which will be nil if the user dismissed the chooser window, otherwise it will be a table containing whatever information you supplied for the item the user chose.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.chooser` object</li></ul>          |
| **Notes**                                   | <ul><li>As of macOS Sierra and later, if you want a `hs.chooser` object to appear above full-screen windows you must hide the Hammerspoon Dock icon first using: `hs.dockicon.hide()`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 14](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L14){target="_blank"} |

---

#### Methods


### [attachedToolbar](#attachedtoolbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:attachedToolbar([toolbar]) -> hs.chooser object | currentValue`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or attach/detach a toolbar to/from the chooser.                                                                     |
| **Parameters**                              | <ul><li>`toolbar` - An `hs.webview.toolbar` object to be attached to the chooser. If `nil` is supplied, the current toolbar will be removed</li></ul> |
| **Returns**                                 | <ul><li>if a toolbarObject or explicit nil is specified, returns the hs.chooser object; otherwise returns the current toolbarObject or nil, if no toolbar is attached to the chooser.</li></ul>          |
| **Notes**                                   | <ul><li>this method is a convenience wrapper for the `hs.webview.toolbar.attachToolbar` function.</li><li></li><li>If the toolbarObject is currently attached to another window when this method is called, it will be detached from the original window and attached to the chooser.  If you wish to attach the same toolbar to multiple chooser objects, see `hs.webview.toolbar:copy`.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/chooser.lua line 13](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/chooser.lua#L13){target="_blank"} |

---


### [bgDark](#bgdark)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:bgDark([beDark]) -> hs.chooser object or boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the background of the chooser between light and dark                                                                     |
| **Parameters**                              | <ul><li>beDark - A optional boolean, true to be dark, false to be light. If this parameter is omitted, the current setting will be returned</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object or a boolean, true if the window is dark, false if it is light</li></ul>          |
| **Notes**                                   | <ul><li>The text colors will not automatically change when you toggle the darkness of the chooser window, you should also set appropriate colors with `hs.chooser:fgColor()` and `hs.chooser:subTextColor()`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 539](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L539){target="_blank"} |

---


### [cancel](#cancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:cancel() -> hs.chooser object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Cancels the chooser                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 805](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L805){target="_blank"} |

---


### [choices](#choices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:choices(choices) -> hs.chooser object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the choices for a chooser                                                                     |
| **Parameters**                              | <ul><li>choices - Either a function to call when the list of choices is needed, or nil to remove any existing choices/callback, or a table containing static choices.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object</li></ul>          |
| **Notes**                                   | <ul><li>The table of choices (be it provided statically, or returned by the callback) must contain at least the following keys for each choice:</li><li> text - A string or hs.styledtext object that will be shown as the main text of the choice</li><li>Each choice may also optionally contain the following keys:</li><li> subText - A string or hs.styledtext object that will be shown underneath the main text of the choice</li><li> image - An `hs.image` image object that will be displayed next to the choice</li><li> valid - A boolean that defaults to `true`, if set to `false` selecting the choice will invoke the `invalidCallback` method instead of dismissing the chooser</li><li>Any other keys/values in each choice table will be retained by the chooser and returned to the completion callback when a choice is made. This is useful for storing UUIDs or other non-user-facing information, however, it is important to note that you should not store userdata objects in the table - it is run through internal conversion functions, so only basic Lua types should be stored.</li><li>If a function is given, it will be called once, when the chooser window is displayed. The results are then cached until this method is called again, or `hs.chooser:refreshChoicesCallback()` is called.</li><li>If you're using a hs.styledtext object for text or subText choices, make sure you specify a color, otherwise your text could appear transparent depending on the bgDark setting.</li><li></li><li>Example:</li><li> ```lua</li><li>local choices = {</li><li> {</li><li>  ["text"] = "First Choice",</li><li>  ["subText"] = "This is the subtext of the first choice",</li><li>  ["uuid"] = "0001"</li><li> },</li><li> { ["text"] = "Second Option",</li><li>   ["subText"] = "I wonder what I should type here?",</li><li>   ["uuid"] = "Bbbb"</li><li> },</li><li> { ["text"] = hs.styledtext.new("Third Possibility", {font={size=18}, color=hs.drawing.color.definedCollections.hammerspoon.green}),</li><li>   ["subText"] = "What a lot of choosing there is going on here!",</li><li>   ["uuid"] = "III3"</li><li> },</li><li>}```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 110](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L110){target="_blank"} |

---


### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:delete()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Deletes a chooser                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 444](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L444){target="_blank"} |

---


### [enableDefaultForQuery](#enabledefaultforquery)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:enableDefaultForQuery([]) -> hs.chooser object or boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets/Sets whether the chooser should run the callback on a query when it does not match any on the list                                                                     |
| **Parameters**                              | <ul><li>enableDefaultForQuery - An optional boolean, true to return query string, false to not. If this parameter is omitted, the current configuration value will be returned</li></ul> |
| **Returns**                                 | <ul><li>the `hs.chooser` object if a value was set, or a boolean if no parameter was passed</li></ul>          |
| **Notes**                                   | <ul><li>This should be used before a chooser has been displayed</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 584](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L584){target="_blank"} |

---


### [fgColor](#fgcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:fgColor(color) -> hs.chooser object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the foreground color of the chooser                                                                     |
| **Parameters**                              | <ul><li>color - An optional table containing a color specification (see `hs.drawing.color`), or nil to restore the default color. If this parameter is omitted, the existing color will be returned</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object or a color table</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 461](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L461){target="_blank"} |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:hide() -> hs.chooser object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the chooser                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 70](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L70){target="_blank"} |

---


### [hideCallback](#hidecallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:hideCallback([fn]) -> hs.chooser object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets/clears a callback for when the chooser window is hidden                                                                     |
| **Parameters**                              | <ul><li>fn - An optional function that will be called when the chooser window is hidden. If this parameter is omitted, the existing callback will be removed.</li></ul> |
| **Returns**                                 | <ul><li>The hs.chooser object</li></ul>          |
| **Notes**                                   | <ul><li>This callback is called *after* the chooser is hidden.</li><li>This callback is called *after* hs.chooser.globalCallback.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 199](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L199){target="_blank"} |

---


### [invalidCallback](#invalidcallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:invalidCallback([fn]) -> hs.chooser object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets/clears a callback for invalid choices                                                                     |
| **Parameters**                              | <ul><li>fn - An optional function that will be called whenever the user select an choice set as invalid. If this parameter is omitted, the existing callback will be removed.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object</li></ul>          |
| **Notes**                                   | <ul><li> The callback may accept one argument, it will be a table containing whatever information you supplied for the item the user chose.</li><li> To display a context menu, see `hs.menubar`, specifically the `:popupMenu()` method</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 415](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L415){target="_blank"} |

---


### [isVisible](#isvisible)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:isVisible() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the chooser is currently displayed                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the chooser is displayed on screen, false if not</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 91](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L91){target="_blank"} |

---


### [placeholderText](#placeholdertext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:placeholderText([placeholderText]) -> hs.chooser object or string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets/gets placeholder text that is shown in the query text field when no other text is present                                                                     |
| **Parameters**                              | <ul><li>placeholderText - An optional string for placeholder text. If this parameter is omitted, the existing placeholder text will be returned.</li></ul> |
| **Returns**                                 | <ul><li>The hs.chooser object, or the existing placeholder text</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 331](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L331){target="_blank"} |

---


### [query](#query)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:query([queryString]) -> hs.chooser object or string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets/gets the search string                                                                     |
| **Parameters**                              | <ul><li>queryString - An optional string to search for, or an explicit nil to clear the query. If omitted, the current contents of the search box are returned</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object or a string</li></ul>          |
| **Notes**                                   | <ul><li>You can provide an explicit nil or empty string to clear the current query string.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 290](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L290){target="_blank"} |

---


### [queryChangedCallback](#querychangedcallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:queryChangedCallback([fn]) -> hs.chooser object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets/clears a callback for when the search query changes                                                                     |
| **Parameters**                              | <ul><li>fn - An optional function that will be called whenever the search query changes. If this parameter is omitted, the existing callback will be removed.</li></ul> |
| **Returns**                                 | <ul><li>The hs.chooser object</li></ul>          |
| **Notes**                                   | <ul><li>As the user is typing, the callback function will be called for every keypress. You may wish to do filtering on each call, or you may wish to use a delayed `hs.timer` object to only react when they have finished typing.</li><li>The callback function should accept a single argument:</li><li> A string containing the new search query</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 356](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L356){target="_blank"} |

---


### [refreshChoicesCallback](#refreshchoicescallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:refreshChoicesCallback([reload]) -> hs.chooser object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Refreshes the choices data from a callback                                                                     |
| **Parameters**                              | <ul><li>reload - An optional parameter that reloads the chooser results to take into account the current query string (defaults to `false`)</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object</li></ul>          |
| **Notes**                                   | <ul><li>This method will do nothing if you have not set a function with `hs.chooser:choices()`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 256](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L256){target="_blank"} |

---


### [rightClickCallback](#rightclickcallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:rightClickCallback([fn]) -> hs.chooser object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets/clears a callback for right clicking on choices                                                                     |
| **Parameters**                              | <ul><li>fn - An optional function that will be called whenever the user right clicks on a choice. If this parameter is omitted, the existing callback will be removed.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object</li></ul>          |
| **Notes**                                   | <ul><li> The callback may accept one argument, the row the right click occurred in or 0 if there is currently no selectable row where the right click occurred. To determine the location of the mouse pointer at the right click, see `hs.mouse`.</li><li> To display a context menu, see `hs.menubar`, specifically the `:popupMenu()` method</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 386](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L386){target="_blank"} |

---


### [rows](#rows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:rows([numRows]) -> hs.chooser object or number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets/Sets the number of rows that will be shown                                                                     |
| **Parameters**                              | <ul><li>numRows - An optional number of choices to show (i.e. the vertical height of the chooser window). If this parameter is omitted, the current value will be returned</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object or a number</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 695](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L695){target="_blank"} |

---


### [searchSubText](#searchsubtext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:searchSubText([searchSubText]) -> hs.chooser object or boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets/Sets whether the chooser should search in the sub-text of each item                                                                     |
| **Parameters**                              | <ul><li>searchSubText - An optional boolean, true to search sub-text, false to not search sub-text. If this parameter is omitted, the current configuration value will be returned</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object if a value was set, or a boolean if no parameter was passed</li></ul>          |
| **Notes**                                   | <ul><li>This should be used before a chooser has been displayed</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 621](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L621){target="_blank"} |

---


### [select](#select)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:select([row]) -> hs.chooser object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Closes the chooser by selecting the specified row, or the currently selected row if not given                                                                     |
| **Parameters**                              | <ul><li>`row` - an optional integer specifying the row to select.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 781](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L781){target="_blank"} |

---


### [selectedRow](#selectedrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:selectedRow([row]) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the currently selected row                                                                     |
| **Parameters**                              | <ul><li>`row` - an optional integer specifying the row to select.</li></ul> |
| **Returns**                                 | <ul><li>If an argument is provided, returns the hs.chooser object; otherwise returns a number containing the row currently selected (i.e. the one highlighted in the UI)</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 729](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L729){target="_blank"} |

---


### [selectedRowContents](#selectedrowcontents)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:selectedRowContents([row]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the contents of the currently selected or specified row                                                                     |
| **Parameters**                              | <ul><li>`row` - an optional integer specifying the specific row to return the contents of</li></ul> |
| **Returns**                                 | <ul><li>a table containing whatever information was supplied for the row currently selected or an empty table if no row is selected or the specified row does not exist.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 758](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L758){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:show([topLeftPoint]) -> hs.chooser object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Displays the chooser                                                                     |
| **Parameters**                              | <ul><li>An optional `hs.geometry` point object describing the absolute screen co-ordinates for the top left point of the chooser window. Defaults to centering the window on the primary screen</li></ul> |
| **Returns**                                 | <ul><li>The hs.chooser object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 43](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L43){target="_blank"} |

---


### [showCallback](#showcallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:showCallback([fn]) -> hs.chooser object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets/clears a callback for when the chooser window is shown                                                                     |
| **Parameters**                              | <ul><li>fn - An optional function that will be called when the chooser window is shown. If this parameter is omitted, the existing callback will be removed.</li></ul> |
| **Returns**                                 | <ul><li>The hs.chooser object</li></ul>          |
| **Notes**                                   | <ul><li>This callback is called *after* the chooser is shown. To execute code just before it's shown (and/or after it's removed) see `hs.chooser.globalCallback`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 228](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L228){target="_blank"} |

---


### [subTextColor](#subtextcolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:subTextColor(color) -> hs.chooser object or hs.color object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the sub-text color of the chooser                                                                     |
| **Parameters**                              | <ul><li>color - An optional table containing a color specification (see `hs.drawing.color`), or nil to restore the default color. If this parameter is omitted, the existing color will be returned</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object or a color table</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 500](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L500){target="_blank"} |

---


### [width](#width)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.chooser:width([percent]) -> hs.chooser object or number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets/Sets the width of the chooser                                                                     |
| **Parameters**                              | <ul><li>percent - An optional number indicating the percentage of the width of the screen that the chooser should occupy. If this parameter is omitted, the current width will be returned</li></ul> |
| **Returns**                                 | <ul><li>The `hs.chooser` object or a number</li></ul>          |
| **Notes**                                   | <ul><li>This should be used before a chooser has been displayed</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/chooser/libchooser.m line 658](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/chooser/libchooser.m#L658){target="_blank"} |

---


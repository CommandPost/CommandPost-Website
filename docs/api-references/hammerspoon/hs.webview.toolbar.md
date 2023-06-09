# hs.webview.toolbar

Create and manipulate toolbars which can be attached to the Hammerspoon console or hs.webview objects.

Toolbars are attached to titled windows and provide buttons which can be used to perform various actions within the application. Hammerspoon can use this module to add toolbars to the console or `hs.webview` objects which have a title bar (see `hs.webview.windowMasks` and `hs.webview:windowStyle`). Toolbars are identified by a unique identifier which is used by OS X to identify information which can be auto saved in the application's user defaults to reflect changes the user has made to the toolbar button order or active button list (this requires setting [hs.webview.toolbar:autosaves](#autosaves) and [hs.webview.toolbar:canCustomize](#canCustomize) both to true).

Multiple copies of the same toolbar can be made with the [hs.webview.toolbar:copy](#copy) method so that multiple webview windows use the same toolbar, for example. If the user customizes a copied toolbar, changes to the active buttons or their order will be reflected in all copies of the toolbar.

Example:
~~~lua
t = require("hs.webview.toolbar")
a = t.new("myConsole", {
        { id = "select1", selectable = true, image = hs.image.imageFromName("NSStatusAvailable") },
        { id = "NSToolbarSpaceItem" },
        { id = "select2", selectable = true, image = hs.image.imageFromName("NSStatusUnavailable") },
        { id = "notShown", default = false, image = hs.image.imageFromName("NSBonjour") },
        { id = "NSToolbarFlexibleSpaceItem" },
        { id = "navGroup", label = "Navigation", groupMembers = { "navLeft", "navRight" }},
        { id = "navLeft", image = hs.image.imageFromName("NSGoLeftTemplate"), allowedAlone = false },
        { id = "navRight", image = hs.image.imageFromName("NSGoRightTemplate"), allowedAlone = false },
        { id = "NSToolbarFlexibleSpaceItem" },
        { id = "cust", label = "customize", fn = function(t, w, i) t:customizePanel() end, image = hs.image.imageFromName("NSAdvanced") }
    }):canCustomize(true)
      :autosaves(true)
      :selectedItem("select2")
      :setCallback(function(...)
                        print("a", inspect(table.pack(...)))
                   end)

t.attachToolbar(a)
~~~

Notes:
 * This module is supported in OS X versions prior to 10.10 (for the Hammerspoon console only), even though its parent `hs.webview` is not. To load this module directly, use `require("hs.webview.toolbar")` instead of relying on module auto-loading.
 * Toolbar items are rendered in the order they are supplied, although if the toolbar is marked as customizable, the user may have changed the order.

## API Overview
* Constants - Useful values which cannot be changed
 * [itemPriorities](#itemPriorities)
 * [systemToolbarItems](#systemToolbarItems)
* Functions - API calls offered directly by the extension
 * [attachToolbar](#attachToolbar)
 * [inTitleBar](#inTitleBar)
 * [uniqueName](#uniqueName)
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [addItems](#addItems)
 * [allowedItems](#allowedItems)
 * [autosaves](#autosaves)
 * [canCustomize](#canCustomize)
 * [copy](#copy)
 * [customizePanel](#customizePanel)
 * [delete](#delete)
 * [deleteItem](#deleteItem)
 * [displayMode](#displayMode)
 * [identifier](#identifier)
 * [insertItem](#insertItem)
 * [isAttached](#isAttached)
 * [isCustomizing](#isCustomizing)
 * [itemDetails](#itemDetails)
 * [items](#items)
 * [modifyItem](#modifyItem)
 * [notifyOnChange](#notifyOnChange)
 * [removeItem](#removeItem)
 * [savedSettings](#savedSettings)
 * [selectedItem](#selectedItem)
 * [selectSearchField](#selectSearchField)
 * [separator](#separator)
 * [setCallback](#setCallback)
 * [sizeMode](#sizeMode)
 * [toolbarStyle](#toolbarStyle)
 * [visible](#visible)
 * [visibleItems](#visibleItems)

## API Documentation

### Constants

| [itemPriorities](#itemPriorities)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar.itemPriorities`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table containing some pre-defined toolbar item priority values for use when determining item order in the toolbar.                                                                     |

| [systemToolbarItems](#systemToolbarItems)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar.systemToolbarItems`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | An array containing string identifiers for supported system defined toolbar items.                                                                     |

### Functions

| [attachToolbar](#attachToolbar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar.attachToolbar([obj1], [obj2]) -> obj1`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get or attach/detach a toolbar to the webview, chooser, or console.                                                                     |
| **Parameters**                              | <ul><li>obj1 - An optional toolbarObject</li><li>obj2 - An optional toolbarObject
  if no arguments are present, this function returns the current toolbarObject for the Hammerspoon console, or nil if one is not attached.
  if one argument is provided and it is a toolbarObject or nil, this function will attach or detach a toolbarObject to/from the Hammerspoon console.
  if one argument is provided and it is an hs.webview or hs.chooser object, this function will return the current toolbarObject for the object, or nil if one is not attached.
  if two arguments are provided and the first is an hs.webview or hs.chooser object and the second is a toolbarObject or nil, this function will attach or detach a toolbarObject to/from the object.</li></ul> |
| **Returns**                                 | <ul><li>if the function is used to attach/detach a toolbar, then the first object provided (the target) will be returned ; if this function is used to get the current toolbar object for a webview, chooser, or console, then the toolbarObject or nil will be returned.</li></ul>          |
| **Notes**                                   | <ul><li>This function is not expected to be used directly (though it can be) -- it is added to the `hs.webview` and `hs.chooser` object metatables so that it may be invoked as `hs.webview:attachedToolbar([toolbarObject | nil])`/`hs.chooser:attachedToolbar([toolbarObject | nil])` and to the `hs.console` module so that it may be invoked as `hs.console.toolbar([toolbarObject | nil])`.</li><li></li><li>If the toolbar is currently attached to another window when this function is called, it will be detached from the original window and attached to the new one specified by this function.</li></ul>                |

| [inTitleBar](#inTitleBar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:inTitleBar([state]) -> toolbarObject | boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get or set whether or not the toolbar appears in the containing window's titlebar, similar to Safari.                                                                     |
| **Parameters**                              | <ul><li>`state` - an optional boolean specifying whether or not the toolbar should appear in the window's titlebar.</li></ul> |
| **Returns**                                 | <ul><li>if a parameter is specified, returns the toolbar object, otherwise the current value.</li></ul>          |
| **Notes**                                   | <ul><li>When this value is true, the toolbar, when visible, will appear in the window's title bar similar to the toolbar as seen in applications like Safari.  In this state, the toolbar will set the display of the toolbar items to icons without labels, ignoring changes made with [hs.webview.toolbar:displayMode](#displayMode).</li><li></li><li>* This method is only valid when the toolbar is attached to a webview, chooser, or the console.</li></ul>                |

| [uniqueName](#uniqueName)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar.uniqueName(toolbarName) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see is a toolbar name is already in use                                                                     |
| **Parameters**                              | <ul><li>toolbarName  - a string specifying the name of a toolbar</li></ul> |
| **Returns**                                 | <ul><li>`true` if the name is unique otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar.new(toolbarName, [toolbarTable]) -> toolbarObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new toolbar for a webview, chooser, or the console.                                                                     |
| **Parameters**                              | <ul><li>toolbarName  - a string specifying the name for this toolbar</li><li>toolbarTable - an optional table describing possible items for the toolbar</li></ul> |
| **Returns**                                 | <ul><li>a toolbarObject</li></ul>          |
| **Notes**                                   | <ul><li>Toolbar names must be unique, but a toolbar may be copied with [hs.webview.toolbar:copy](#copy) if you wish to attach it to multiple windows (webview, chooser, or console).</li><li>See [hs.webview.toolbar:addItems](#addItems) for a description of the format for `toolbarTable`</li></ul>                |

### Methods

| [addItems](#addItems)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:addItems(toolbarTable) -> toolbarObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Add one or more toolbar items to the toolbar                                                                     |
| **Parameters**                              | <ul><li>`toolbarTable` - a table describing a single toolbar item, or an array of tables, each describing a separate toolbar item, to be added to the toolbar.</li></ul> |
| **Returns**                                 | <ul><li>the toolbarObject</li></ul>          |
| **Notes**                                   | <ul><li>* Each toolbar item is defined as a table of key-value pairs.  The following list describes the valid keys used when describing a toolbar item for this method, the constructor [hs.webview.toolbar.new](#new), and the [hs.webview.toolbar:modifyItem](#modifyItem) method.  Note that the `id` field is **required** for all three uses.</li><li> `id`           - A unique string identifier required for each toolbar item and group.  This key cannot be changed after an item has been created.</li><li> `allowedAlone` - a boolean value, default true, specifying whether or not the toolbar item can be added to the toolbar, programmatically or through the customization panel, (true) or whether it can only be added as a member of a group (false).</li><li> `default`      - a boolean value, default matching the value of `allowedAlone` for this item, indicating whether or not this toolbar item or group should be displayed in the toolbar by default, unless overridden by user customization or a saved configuration (when such options are enabled).</li><li> `enable`       - a boolean value, default true, indicating whether or not the toolbar item is active (and can be clicked on) or inactive and greyed out.  This field is ignored when applied to a toolbar group; apply it to the group members instead.</li><li> `fn`           - a callback function, or false to remove, specific to the toolbar item. This property is ignored if assigned to the button group. This function will override the toolbar callback defined with [hs.webview.toolbar:setCallback](#setCallback) for this specific item. The function should expect three (four, if the item is a `searchfield`) arguments and return none.  See [hs.webview.toolbar:setCallback](#setCallback) for information about the callback's arguments.</li><li> `groupMembers` - an array (table) of strings specifying the toolbar item ids that are members of this toolbar item group.  If set to false, this field is removed and the item is reset back to being a regular toolbar item.  Note that you cannot change a currently visible toolbar item to or from being a group; it must first be removed from active toolbar with [hs.webview.toolbar:removeItem](#removeItem).</li><li> `image`        - an `hs.image` object, or false to remove, specifying the image to use as the toolbar item's icon when icon's are displayed in the toolbar or customization panel. This key is ignored for a toolbar item group, but not for it's individual members.</li><li> `label`        - a string label, or false to remove, for the toolbar item or group when text is displayed in the toolbar or in the customization panel. For a toolbar item, the default is the `id` string; for a group, the default is `false`. If a group has a label assigned to it, the group label will be displayed for the group of items it contains. If a group does not have a label, the individual items which make up the group will each display their individual labels.</li><li> `priority`     - an integer value used to determine toolbar item order and which items are displayed or put into the overflow menu when the number of items in the toolbar exceed the width of the window in which the toolbar is attached. Some example values are provided in the [hs.webview.toolbar.itemPriorities](#itemPriorities) table. If a toolbar item is in a group, it's priority is ignored and the item group is ordered by the item group's priority.</li><li> `searchfield`  - a boolean (default false) specifying whether or not this toolbar item is a search field. If true, the following additional keys are allowed:</li><li>   `searchHistory`                - an array (table) of strings, specifying previous searches to automatically include in the search field menu, if `searchPredefinedMenuTitle` is not false</li><li>   `searchHistoryAutosaveName`    - a string specifying the key name to save search history with in the application defaults (accessible through `hs.settings`). If this value is set, search history will be maintained through restarts of Hammerspoon.</li><li>   `searchHistoryLimit`           - the maximum number of items to store in the search field history.</li><li>   `searchPredefinedMenuTitle`    - a string or boolean specifying how a predefined list of search field "response" should be included in the search field menu. If this item is `true`, this list of items specified for `searchPredefinedSearches` will be displayed in a submenu with the title "Predefined Searches". If this item is a string, the list of items will be displayed in a submenu with the title specified by this string value. If this item is `false`, then the search field menu will only contain the items specified in `searchPredefinedSearches` and no search history will be included in the menu.</li><li>   `searchPredefinedSearches`     - an array (table) of strings specifying the items to be listed in the predefined search submenu. If set to false, any existing menu will be removed and the search field menu will be reset to the default.</li><li>   `searchReleaseFocusOnCallback` - a boolean, default false, specifying whether or not focus leaves the search field text box when the callback is invoked. Setting this to true can be useful if you want subsequent keypresses to be caught by the webview after reacting to the value entered into the search field by the user.</li><li>   `searchText`                   - a string specifying the text to display in the search field.</li><li>   `searchWidth`                  - the width of the search field text entry box.</li><li> `selectable`   - a boolean value, default false, indicating whether or not this toolbar item is selectable (i.e. highlights, like a selected tab) when clicked on. Only one selectable toolbar item can be highlighted at a time, and you can get or set/reset the selected item with [hs.webview.toolbar:selectedItem](#selectedItem).</li><li> `tag`          - an integer value which can be used for own purposes; has no affect on the visual aspect of the item or its behavior.</li><li> `tooltip`      - a string label, or false to remove, which is displayed as a tool tip when the user hovers the mouse over the button or button group. If a button is in a group, it's tooltip is ignored in favor of the group tooltip.</li></ul>                |

| [allowedItems](#allowedItems)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:allowedItems() -> array`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an array of all toolbar item identifiers defined for this toolbar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table as an array of all toolbar item identifiers defined for this toolbar.  See also [hs.webview.toolbar:items](#items) and [hs.webview.toolbar:visibleItems](#visibleItems).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [autosaves](#autosaves)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:autosaves([bool]) -> toolbarObject | bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether or not the toolbar autosaves changes made to the toolbar.                                                                     |
| **Parameters**                              | <ul><li>an optional boolean value indicating whether or not changes made to the visible toolbar items or their order is automatically saved.</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the toolbar object; otherwise returns the current value</li></ul>          |
| **Notes**                                   | <ul><li>If the toolbar is set to autosave, then a user-defaults entry is created in org.hammerspoon.Hammerspoon domain with the key "NSToolbar Configuration XXX" where XXX is the toolbar identifier specified when the toolbar was created.</li><li>The information saved for the toolbar consists of the following:</li><li>  the default item identifiers that are displayed when the toolbar is first created or when the user drags the default set from the customization panel.</li><li>  the current display mode (icon, text, both)</li><li>  the current size mode (regular, small)</li><li>  whether or not the toolbar is currently visible</li><li>  the currently shown identifiers and their order</li><li>* Note that the labels, icons, callback functions, etc. are not saved -- these are determined at toolbar creation time, by the [hs.webview.toolbar:addItems](#addItems), or by the [hs.webview.toolbar:modifyItem](#modifyItem) method and can differ between invocations of toolbars with the same identifier and button identifiers.</li></ul>                |

| [canCustomize](#canCustomize)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:canCustomize([bool]) -> toolbarObject | bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether or not the user is allowed to customize the toolbar with the Customization Panel.                                                                     |
| **Parameters**                              | <ul><li>an optional boolean value indicating whether or not the user is allowed to customize the toolbar.</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the toolbar object; otherwise returns the current value</li></ul>          |
| **Notes**                                   | <ul><li>the customization panel can be pulled up by right-clicking on the toolbar or by invoking [hs.webview.toolbar:customizePanel](#customizePanel).</li></ul>                |

| [copy](#copy)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:copy() -> toolbarObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a copy of the toolbar object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a copy of the toolbar which can be attached to another window (webview, chooser, or console).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [customizePanel](#customizePanel)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:customizePanel() -> toolbarObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Opens the toolbar customization panel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the toolbar object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [delete](#delete)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:delete() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Deletes the toolbar, removing it from its window if it is currently attached.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [deleteItem](#deleteItem)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:deleteItem(identifier) -> toolbarObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Deletes the toolbar item specified completely from the toolbar, removing it first, if the toolbar item is currently active.                                                                     |
| **Parameters**                              | <ul><li>`identifier` - the toolbar item's identifier</li></ul> |
| **Returns**                                 | <ul><li>the toolbar object</li></ul>          |
| **Notes**                                   | <ul><li>This method completely removes the toolbar item from the toolbar's definition dictionary, thus removing it from active use in the toolbar as well as removing it from the customization panel, if supported.  If you only want to remove a toolbar item from the active toolbar, consider [hs.webview.toolbar:removeItem](#removeItem).</li></ul>                |

| [displayMode](#displayMode)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:displayMode([mode]) -> toolbarObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the toolbar's display mode.                                                                     |
| **Parameters**                              | <ul><li>mode - an optional string to set the size of the toolbar to "default", "label", "icon", or "both".</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the toolbar object; otherwise returns the current value</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [identifier](#identifier)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:identifier() -> identifier`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The identifier for this toolbar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The identifier for this toolbar.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [insertItem](#insertItem)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:insertItem(id, index) -> toolbarObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Insert or move the toolbar item to the index position specified                                                                     |
| **Parameters**                              | <ul><li>id    - the string identifier of the toolbar item</li><li>index - the numerical position where the toolbar item should be inserted/moved to.</li></ul> |
| **Returns**                                 | <ul><li>the toolbar object</li></ul>          |
| **Notes**                                   | <ul><li>the toolbar position must be between 1 and the number of currently active toolbar items.</li></ul>                |

| [isAttached](#isAttached)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:isAttached() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a boolean indicating whether or not the toolbar is currently attached to a window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a boolean indicating whether or not the toolbar is currently attached to a window.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [isCustomizing](#isCustomizing)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:isCustomizing() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates whether or not the customization panel is currently open for the toolbar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>true or false indicating whether or not the customization panel is open for the toolbar</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [itemDetails](#itemDetails)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:itemDetails(id) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table containing details about the specified toolbar item                                                                     |
| **Parameters**                              | <ul><li>id - a string identifier specifying the toolbar item</li></ul> |
| **Returns**                                 | <ul><li>a table containing the toolbar item definition</li></ul>          |
| **Notes**                                   | <ul><li>For a list of the most of the possible toolbar item attribute keys, see [hs.webview.toolbar:addItems](#addItems).</li><li>The table will also include `privateCallback` which will be a boolean indicating whether or not this toolbar item has a private callback function assigned (true) or uses the toolbar's general callback function (false).</li><li>The returned table may also contain the following keys, if the item is currently assigned to a toolbar:</li><li>  `toolbar`  - the toolbar object the item belongs to</li><li>  `subItems` - if the toolbar item is actually a group, this will contain a table with basic information about the members of the group.  If you wish to get the full details for each sub-member, you may iterate on the identifiers provided in `groupMembers`.</li></ul>                |

| [items](#items)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:items() -> array`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an array of the toolbar item identifiers currently assigned to the toolbar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table as an array of the currently active (assigned) toolbar item identifiers.  Toolbar items which are in the overflow menu *are* included in this array.  See also [hs.webview.toolbar:visibleItems](#visibleItems) and [hs.webview.toolbar:allowedItems](#allowedItems).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [modifyItem](#modifyItem)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:modifyItem(table) -> toolbarObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Modify the toolbar item specified by the "id" key in the table argument.                                                                     |
| **Parameters**                              | <ul><li>a table containing an "id" key and the attributes to change for the toolbar item.</li></ul> |
| **Returns**                                 | <ul><li>the toolbarObject</li></ul>          |
| **Notes**                                   | <ul><li>You cannot change a toolbar item's `id`</li><li>For a list of the possible toolbar item attribute keys, see [hs.webview.toolbar:addItems](#addItems).</li></ul>                |

| [notifyOnChange](#notifyOnChange)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:notifyOnChange([bool]) -> toolbarObject | bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether or not the global callback function is invoked when a toolbar item is added or removed from the toolbar.                                                                     |
| **Parameters**                              | <ul><li>an optional boolean value to enable or disable invoking the global callback for toolbar changes.</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the toolbar object; otherwise returns the current value</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [removeItem](#removeItem)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:removeItem(index | identifier) -> toolbarObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Remove the toolbar item at the index position specified, or with the specified identifier, if currently present in the toolbar.                                                                     |
| **Parameters**                              | <ul><li>`index` - the numerical position of the toolbar item to remove.</li><li>`identifier` - the identifier of the toolbar item to remove, if currently active in the toolbar</li></ul> |
| **Returns**                                 | <ul><li>the toolbar object</li></ul>          |
| **Notes**                                   | <ul><li>the toolbar position must be between 1 and the number of currently active toolbar items.</li></ul>                |

| [savedSettings](#savedSettings)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:savedSettings() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table containing the settings which will be saved for the toolbar if [hs.webview.toolbar:autosaves](#autosaves) is true.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table containing the toolbar settings</li></ul>          |
| **Notes**                                   | <ul><li>If the toolbar is set to autosave, then a user-defaults entry is created in org.hammerspoon.Hammerspoon domain with the key "NSToolbar Configuration XXX" where XXX is the toolbar identifier specified when the toolbar was created.</li><li>This method is provided if you do not wish for changes to the toolbar to be autosaved for every change, but may wish to save it programmatically under specific conditions.</li></ul>                |

| [selectedItem](#selectedItem)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:selectedItem([item]) -> toolbarObject | item`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the selected toolbar item                                                                     |
| **Parameters**                              | <ul><li>item - an optional id for the toolbar item to show as selected, or an explicit nil if you wish for no toolbar item to be selected.</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the toolbar object; otherwise returns the current value</li></ul>          |
| **Notes**                                   | <ul><li>Only toolbar items which were defined as `selectable` when created with [hs.webview.toolbar.new](#new) can be selected with this method.</li></ul>                |

| [selectSearchField](#selectSearchField)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:selectSearchField([identifier]) -> toolbarObject | false`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Programmatically focus the search field for keyboard input.                                                                     |
| **Parameters**                              | <ul><li>identifier - an optional string specifying the id of the specific search field to focus.  If this parameter is not provided, this method attempts to focus the first active searchfield found in the toolbar</li></ul> |
| **Returns**                                 | <ul><li>if the searchfield can be found and is currently in the toolbar, returns the toolbarObject; otherwise returns false.</li></ul>          |
| **Notes**                                   | <ul><li>if there is current text in the searchfield, it will be selected so that any subsequent typing by the user will replace the current value in the searchfield.</li></ul>                |

| [separator](#separator)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:separator([bool]) -> toolbarObject | bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether or not the toolbar shows a separator between the toolbar and the main window contents.                                                                     |
| **Parameters**                              | <ul><li>an optional boolean value to enable or disable the separator.</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the toolbar object; otherwise returns the current value</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setCallback](#setCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:setCallback(fn) -> toolbarObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets or removes the global callback function for the toolbar.                                                                     |
| **Parameters**                              | <ul><li>fn - a function to set as the global callback for the toolbar, or nil to remove the global callback. The function should expect three (four, if the item is a `searchfield` or `notifyOnChange` is true) arguments and return none: the toolbar object, "console" or the webview/chooser object the toolbar is attached to, and the toolbar item identifier that was clicked.</li></ul> |
| **Returns**                                 | <ul><li>the toolbar object.</li></ul>          |
| **Notes**                                   | <ul><li>the global callback function is invoked for a toolbar button item that does not have a specific function assigned directly to it.</li><li>if [hs.webview.toolbar:notifyOnChange](#notifyOnChange) is set to true, then this callback function will also be invoked when a toolbar item is added or removed from the toolbar either programmatically with [hs.webview.toolbar:insertItem](#insertItem) and [hs.webview.toolbar:removeItem](#removeItem) or under user control with [hs.webview.toolbar:customizePanel](#customizePanel) and the callback function will receive a string of "add" or "remove" as a fourth argument.</li></ul>                |

| [sizeMode](#sizeMode)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:sizeMode([size]) -> toolbarObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the toolbar's size.                                                                     |
| **Parameters**                              | <ul><li>size - an optional string to set the size of the toolbar to "default", "regular", or "small".</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the toolbar object; otherwise returns the current value</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [toolbarStyle](#toolbarStyle)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:toolbarStyle([style]) -> toolbarObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the toolbar's style.                                                                     |
| **Parameters**                              | <ul><li>style - an optional string to set the style of the toolbar to "automatic", "expanded", "preference", "unified", or "unifiedCompact".</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the toolbar object; otherwise returns the current value</li></ul>          |
| **Notes**                                   | <ul><li>This is only available for macOS 11.0+. Will return `nil` if getting on an earlier version of macOS.</li><li>`automatic` - A style indicating that the system determines the toolbar’s appearance and location.</li><li>`expanded` - A style indicating that the toolbar appears below the window title.</li><li>`preference` - A style indicating that the toolbar appears below the window title with toolbar items centered in the toolbar.</li><li>`unified` - A style indicating that the toolbar appears next to the window title.</li><li>`unifiedCompact` - A style indicating that the toolbar appears next to the window title and with reduced margins to allow more focus on the window’s contents.</li></ul>                |

| [visible](#visible)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:visible([bool]) -> toolbarObject | bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether or not the toolbar is currently visible in the window it is attached to.                                                                     |
| **Parameters**                              | <ul><li>an optional boolean value to show or hide the toolbar.</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the toolbar object; otherwise returns the current value</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [visibleItems](#visibleItems)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.toolbar:visibleItems() -> array`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an array of the currently visible toolbar item identifiers.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table as an array of the currently visible toolbar item identifiers.  Toolbar items which are in the overflow menu are *not* included in this array.  See also [hs.webview.toolbar:items](#items) and [hs.webview.toolbar:allowedItems](#allowedItems).</li></ul>          |
| **Notes**                                   | <ul></ul>                |


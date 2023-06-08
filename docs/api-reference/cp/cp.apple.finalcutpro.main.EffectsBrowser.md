# [docs](index.md) » cp.apple.finalcutpro.main.EffectsBrowser
---

Effects Browser Module.

## API Overview
* Constants - Useful values which cannot be changed
 * [EFFECTS](#EFFECTS)
 * [TRANSITIONS](#TRANSITIONS)
* Variables - Configurable values
 * [isShowing](#isShowing)
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [EffectsBrowser](#EffectsBrowser)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [contents](#contents)
 * [group](#group)
 * [mainGroupUI](#mainGroupUI)
 * [search](#search)
 * [sidebar](#sidebar)
 * [sidebarToggle](#sidebarToggle)
 * [toggleButton](#toggleButton)
* Methods - API calls which can only be made on an object returned by a constructor
 * [applyItem](#applyItem)
 * [audioCategoryRowsUI](#audioCategoryRowsUI)
 * [currentItemsUI](#currentItemsUI)
 * [doHideSidebar](#doHideSidebar)
 * [doShow](#doShow)
 * [doShowSidebar](#doShowSidebar)
 * [doToggleSidebar](#doToggleSidebar)
 * [getCurrentTitles](#getCurrentTitles)
 * [hide](#hide)
 * [hideSidebar](#hideSidebar)
 * [itemIsSelected](#itemIsSelected)
 * [loadLayout](#loadLayout)
 * [saveLayout](#saveLayout)
 * [selectedItemsUI](#selectedItemsUI)
 * [show](#show)
 * [showAllAudioEffects](#showAllAudioEffects)
 * [showAllEffects](#showAllEffects)
 * [showAllTransitions](#showAllTransitions)
 * [showAllVideoEffects](#showAllVideoEffects)
 * [showAudioCategory](#showAudioCategory)
 * [showInstalledEffects](#showInstalledEffects)
 * [showInstalledTransitions](#showInstalledTransitions)
 * [showSidebar](#showSidebar)
 * [showTransitionsCategory](#showTransitionsCategory)
 * [showVideoCategory](#showVideoCategory)
 * [toggleSidebar](#toggleSidebar)
 * [type](#type)
 * [videoCategoryRowsUI](#videoCategoryRowsUI)

## API Documentation

### Constants

| [EFFECTS](#EFFECTS)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser.EFFECTS -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Effects.                                                                     |

| [TRANSITIONS](#TRANSITIONS)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser.TRANSITIONS -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Transitions.                                                                     |

### Variables

| [isShowing](#isShowing)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser.isShowing <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is the Effects Browser showing?                                                                     |

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [EffectsBrowser](#EffectsBrowser)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser(parent, type) -> EffectsBrowser`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `EffectsBrowser` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li><li>type - A string determining whether the Effects Browser is for Effects (`cp.apple.finalcutpro.main.EffectsBrowser.EFFECTS`) or Transitions (`cp.apple.finalcutpro.main.EffectsBrowser.TRANSITIONS`).</li></ul> |
| **Returns**                                 | <ul><li>A new `EffectsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [contents](#contents)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser.contents <cp.ui.ScrollArea>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Effects Browser Contents.                                                                     |

| [group](#group)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser.group <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The group `PopUpButton`.                                                                     |

| [mainGroupUI](#mainGroupUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:mainGroupUI() -> <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Main Group UI.                                                                     |

| [search](#search)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser.search <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Search `PopUpButton` object.                                                                     |

| [sidebar](#sidebar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser.sidebar <cp.ui.OldTable>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The sidebar `Table` object.                                                                     |

| [sidebarToggle](#sidebarToggle)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser.sidebarToggle <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Sidebar Toggle.                                                                     |

| [toggleButton](#toggleButton)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser.toggleButton <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Effects Browser Toggle Button.                                                                     |

### Methods

| [applyItem](#applyItem)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:applyItem(itemUI) -> EffectsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Applies an item by double clicking on it.                                                                     |
| **Parameters**                              | <ul><li>itemUI - The `axuielementObject` of the item you want to apply.</li></ul> |
| **Returns**                                 | <ul><li>The `EffectsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [audioCategoryRowsUI](#audioCategoryRowsUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:audioCategoryRowsUI() -> axuielementObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the Audio Category Rows UI.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`axuielementObject` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [currentItemsUI](#currentItemsUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:currentItemsUI() -> axuielementObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the current items UI.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`axuielementObject` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doHideSidebar](#doHideSidebar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:doHideSidebar() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will hide the Sidebar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShow](#doShow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will show the Effects Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShowSidebar](#doShowSidebar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:doShowSidebar() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will show the Sidebar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doToggleSidebar](#doToggleSidebar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:doToggleSidebar() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` to toggle the Sidebar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getCurrentTitles](#getCurrentTitles)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:getCurrentTitles() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the list of titles for all effects/transitions currently visible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hide](#hide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:hide() -> EffectsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hide the Effects Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `EffectsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hideSidebar](#hideSidebar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:hideSidebar() -> EffectsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hide Sidebar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `EffectsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [itemIsSelected](#itemIsSelected)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:itemIsSelected(itemUI) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks to see if an item is selected.                                                                     |
| **Parameters**                              | <ul><li>itemUI - A `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the item is selected, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [loadLayout](#loadLayout)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Effects Browser layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Effects Browser layout settings - created using `cp.apple.finalcutpro.main.Browser:saveLayout()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [saveLayout](#saveLayout)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Effects Browser layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Effects Browser Layout.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectedItemsUI](#selectedItemsUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:selectedItemsUI() -> axuielementObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the selected items UI.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`axuielementObject` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:show() -> EffectsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Effects Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `EffectsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showAllAudioEffects](#showAllAudioEffects)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:showAllAudioEffects() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show All Audio Effects.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showAllEffects](#showAllEffects)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:showAllEffects() -> EffectsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show All Effects.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `EffectsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showAllTransitions](#showAllTransitions)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:showAllTransitions() -> EffectsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show All Transitions.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `EffectsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showAllVideoEffects](#showAllVideoEffects)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:showAllVideoEffects() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show All Video Effects.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showAudioCategory](#showAudioCategory)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:showAudioCategory(name) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Ensures the sidebar is showing and that the selected 'Audio' category is selected, if available.                                                                     |
| **Parameters**                              | <ul><li>`name`		- The category name, in the current language.</li></ul> |
| **Returns**                                 | <ul><li>The browser.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showInstalledEffects](#showInstalledEffects)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:showInstalledEffects() -> EffectsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Installed Effects.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `EffectsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showInstalledTransitions](#showInstalledTransitions)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:showInstalledTransitions() -> EffectsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Installed Transitions.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `EffectsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showSidebar](#showSidebar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:showSidebar() -> EffectsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Sidebar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `EffectsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showTransitionsCategory](#showTransitionsCategory)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:showTransitionsCategory(name) -> EffectsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Ensures the sidebar is showing and that the selected 'Transitions' category is selected, if available.                                                                     |
| **Parameters**                              | <ul><li>name - The category name, in the current language.</li></ul> |
| **Returns**                                 | <ul><li>The `EffectsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showVideoCategory](#showVideoCategory)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:showVideoCategory(name) -> EffectsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Ensures the sidebar is showing and that the selected 'Video' category is selected, if available.                                                                     |
| **Parameters**                              | <ul><li>name - The category name, in the current language.</li></ul> |
| **Returns**                                 | <ul><li>The `EffectsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [toggleSidebar](#toggleSidebar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:toggleSidebar() -> EffectsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Toggle Sidebar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `EffectsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [type](#type)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:type() -> App`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Type of Effects Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>App</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [videoCategoryRowsUI](#videoCategoryRowsUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.EffectsBrowser:videoCategoryRowsUI() -> axuielementObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the Video Category Rows UI.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`axuielementObject` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


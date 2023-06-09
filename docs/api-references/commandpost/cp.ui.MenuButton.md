# cp.ui.MenuButton

Menu Button Module.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [MenuButton](#MenuButton)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [menuUI](#menuUI)
 * [title](#title)
 * [value](#value)
* Methods - API calls which can only be made on an object returned by a constructor
 * [doPress](#doPress)
 * [doSelectItem](#doSelectItem)
 * [doSelectItemMatching](#doSelectItemMatching)
 * [doSelectValue](#doSelectValue)
 * [doShowMenu](#doShowMenu)
 * [getTitle](#getTitle)
 * [getValue](#getValue)
 * [loadLayout](#loadLayout)
 * [press](#press)
 * [saveLayout](#saveLayout)
 * [selectItem](#selectItem)
 * [selectItemMatching](#selectItemMatching)
 * [setValue](#setValue)
 * [show](#show)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [MenuButton](#MenuButton)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton(parent, uiFinder) -> MenuButton`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new MenuButton.                                                                     |
| **Parameters**                              | <ul><li>parent        - The parent object. Should have an `isShowing` property.</li><li>uiFinder      - A `cp.prop` or function which will return a `hs.axuielement`, or `nil` if it's not available.</li></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [menuUI](#menuUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton.menuUI <cp.prop: hs.axuielement; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `AXMenu` for the MenuButton if it is currently visible.                                                                     |

| [title](#title)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton.title <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the title for the MenuButton.                                                                     |

| [value](#value)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton.value <cp.prop: anything>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns or sets the current MenuButton value.                                                                     |

### Methods

| [doPress](#doPress)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:doPress() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that presses the `MenuButton`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doSelectItem](#doSelectItem)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:doSelectItem(index) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will select an item on the `MenuButton` by index.                                                                     |
| **Parameters**                              | <ul><li>index - The index number of the item to match.</li></ul> |
| **Returns**                                 | <ul><li>the `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doSelectItemMatching](#doSelectItemMatching)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:doSelectItemMatching(pattern[, altPattern]) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will select an item on the `MenuButton` by pattern.                                                                     |
| **Parameters**                              | <ul><li>pattern - The pattern to match.</li><li>[altPattern] - An optional alternate pattern to match if the first pattern fails.</li></ul> |
| **Returns**                                 | <ul><li>the `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doSelectValue](#doSelectValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:doSelectValue(value) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will select an item on the `MenuButton` by value.                                                                     |
| **Parameters**                              | <ul><li>value - The value of the item to match.</li></ul> |
| **Returns**                                 | <ul><li>the `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShowMenu](#doShowMenu)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:doShowMenu() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that presses the `MenuButton` if the menu is not showing.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getTitle](#getTitle)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:getTitle() -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the `MenuButton` title.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `MenuButton` title as string, or `nil` if the title cannot be determined.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getValue](#getValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:getValue() -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the `MenuButton` value.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `MenuButton` value as string, or `nil` if the value cannot be determined.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [loadLayout](#loadLayout)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a `MenuButton` layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the `MenuButton` layout settings - created using [saveLayout](#saveLayout).</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [press](#press)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:press() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Presses the MenuButton.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [saveLayout](#saveLayout)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current `MenuButton` layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current `MenuButton` Layout.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectItem](#selectItem)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:selectItem(index) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select an item on the `MenuButton` by index.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the item you want to select.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successfully selected, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectItemMatching](#selectItemMatching)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:selectItemMatching(pattern) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select an item on the `MenuButton` by pattern.                                                                     |
| **Parameters**                              | <ul><li>pattern - A pattern used to select the `MenuButton` item.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successfully selected, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setValue](#setValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:setValue(value) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the `MenuButton` value.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set the `MenuButton` to.</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.MenuButton:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's the MenuButton.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | <ul></ul>                |


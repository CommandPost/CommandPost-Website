# [docs](index.md) » cp.apple.finalcutpro.inspector.color.ColorBoard
---

Color Board Module.

## API Overview
* Constants - Useful values which cannot be changed
 * [aspect](#aspect)
* Variables - Configurable values
 * [currentAspect](#currentAspect)
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [ColorBoard](#ColorBoard)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [aspectGroup](#aspectGroup)
 * [color](#color)
 * [contentUI](#contentUI)
 * [exposure](#exposure)
 * [isActive](#isActive)
 * [isShowing](#isShowing)
 * [saturation](#saturation)
* Methods - API calls which can only be made on an object returned by a constructor
 * [childUI](#childUI)
 * [current](#current)
 * [doHide](#doHide)
 * [doNextAspect](#doNextAspect)
 * [doResetCurrent](#doResetCurrent)
 * [doSelectAspect](#doSelectAspect)
 * [doShow](#doShow)
 * [hide](#hide)
 * [nextAspect](#nextAspect)
 * [reset](#reset)
 * [show](#show)

## API Documentation

### Constants

| [aspect](#aspect)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard.aspect -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table containing tables of all the aspect panel settings                                                                     |

### Variables

| [currentAspect](#currentAspect)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard.currentAspect -> string`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The current aspect as a string.                                                                     |

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a GUI element is the Color Board.                                                                     |
| **Parameters**                              | <ul><li>`element`    - The element you want to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `element` is a Color Board otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [ColorBoard](#ColorBoard)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard(parent) -> ColorBoard object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new ColorBoard object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A ColorBoard object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [aspectGroup](#aspectGroup)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard.aspectGroup <cp.ui.RadioGroup>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `RadioGroup` for the 'aspect' currently being controlled                                                                      |

| [color](#color)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard.color <ColorBoardAspect>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `color` aspect of the color board.                                                                     |

| [contentUI](#contentUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard.contentUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `hs.axuielement` object for the Color Board's content.                                                                     |

| [exposure](#exposure)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard.exposure <ColorBoardAspect>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `exposure` aspect of the color board.                                                                     |

| [isActive](#isActive)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard:isActive <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns whether or not the Color Board is active                                                                     |

| [isShowing](#isShowing)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard.isShowing <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns whether or not the Color Board is visible.                                                                     |

| [saturation](#saturation)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard.saturation <ColorBoardAspect>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `saturation` aspect of the color board.                                                                     |

### Methods

| [childUI](#childUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard:childUI(id) -> hs.axuielement object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the `hs.axuielement` object for a child with the specified ID.                                                                     |
| **Parameters**                              | <ul><li>axID - `AXIdentifier` of the child</li></ul> |
| **Returns**                                 | <ul><li>An `hs.axuielement` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [current](#current)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard:current() -> ColorBoardAspect`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the currently-selected 'aspect' of the Color Board - either the `color`, `saturation` or `exposure`. If the color board is not currently visible, it returns the `color` aspect by default.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The currently active `ColorBoardAspect`, or the `color` aspect if none is showing.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doHide](#doHide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that hides the Color Board.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which will send a single `true` if successful, otherwise `false`, or an error being sent.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doNextAspect](#doNextAspect)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard:doNextAspect() -> cp.rx.go.Statement<boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that toggles the Color Board Panels between "Color", "Saturation" and "Exposure".                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorBoard object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doResetCurrent](#doResetCurrent)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard:doResetCurrent([range]) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will reset the current 'active' aspect (e.g. `color`) in the Color Board. If the `range` is provided, only that subset (`master`, `shadows`, `midtones`, `highlights`) will be reset.                                                                     |
| **Parameters**                              | <ul><li>range     - Optional range to reset in the current aspect.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving with `true` if completed or an error if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doSelectAspect](#doSelectAspect)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard:doSelectAspect(index) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will attempt to select the specified aspect `index`. If the `index` is not between `1` and `3`, and error will be thrown.                                                                     |
| **Parameters**                              | <ul><li>index     - The index to select.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which will resolve to `true` if successful, or throw an error if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShow](#doShow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that shows the Color Board.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which will send a single `true` if successful, otherwise `false`, or an error being sent.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hide](#hide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard:hide() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Color Board                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorBoard object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [nextAspect](#nextAspect)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard:nextAspect() -> ColorBoard object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Toggles the Color Board Panels between "Color", "Saturation" and "Exposure"                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorBoard object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [reset](#reset)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard:reset() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resets the current aspect.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorBoard object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorBoard:show() -> ColorBoard object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Color Board                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>ColorBoard object</li></ul>          |
| **Notes**                                   | <ul></ul>                |


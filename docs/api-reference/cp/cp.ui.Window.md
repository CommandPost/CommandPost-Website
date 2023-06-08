# [docs](index.md) » cp.ui.Window
---

A Window UI element.

## API Overview
* Functions - API calls offered directly by the extension
 * [findSectionUI](#findSectionUI)
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [Window](#Window)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [alert](#alert)
 * [exists](#exists)
 * [focused](#focused)
 * [frame](#frame)
 * [hsWindow](#hsWindow)
 * [id](#id)
 * [isFullScreen](#isFullScreen)
 * [isShowing](#isShowing)
 * [minimized](#minimized)
 * [position](#position)
 * [size](#size)
 * [UI](#UI)
 * [visible](#visible)
* Methods - API calls which can only be made on an object returned by a constructor
 * [close](#close)
 * [doClose](#doClose)
 * [doFocus](#doFocus)
 * [findSectionUI](#findSectionUI)
 * [focus](#focus)
 * [notifier](#notifier)
 * [snapshot](#snapshot)

## API Documentation

### Functions

| [findSectionUI](#findSectionUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.findSectionUI(windowUI, sectionID) -> hs.axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds the `axuielement` for the specified `sectionID`, if present in the provided `axuielement` `windowUI`.                                                                     |
| **Parameters**                              | <ul><li>windowUI - The `AXWindow` `axuielement` to search in.</li><li>sectionID - The string value for the `SectionUniqueID`.</li></ul> |
| **Returns**                                 | <ul><li>The matching `axuielement`, or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided element is a valid window.                                                                     |
| **Parameters**                              | <ul><li>element - An element to check</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [Window](#Window)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window(cpApp, uiProp) -> Window`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Window                                                                     |
| **Parameters**                              | <ul><li>`cpApp`    - a `cp.app` for the application the Window belongs to.</li><li>`uiProp`   - a `cp.prop` that returns the `hs.axuielement` for the window.</li></ul> |
| **Returns**                                 | <ul><li>A new `Window` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [alert](#alert)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.alert <cp.ui.Alert>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides access to any 'Alert' windows on the Window.                                                                     |

| [exists](#exists)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.exists <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if the window exists. It may not be visible.                                                                     |

| [focused](#focused)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.focused <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the window has mouse/keyboard focused.                                                                     |

| [frame](#frame)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.frame <cp.prop: hs.geometry rect>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `hs.geometry` rect value describing the window's position.                                                                     |

| [hsWindow](#hsWindow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.hsWindow <cp.prop: hs.window; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `hs.window` instance for the window, or `nil` if it can't be found.                                                                     |

| [id](#id)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.id <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The window title, or `nil` if the window is not currently visible.                                                                     |

| [isFullScreen](#isFullScreen)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.isFullScreen <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if the window is full-screen.                                                                     |

| [isShowing](#isShowing)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.isShowing <cp.prop: boolean; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the `Window` is currently showing on screen.                                                                     |

| [minimized](#minimized)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.minimized <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if the window exists and is minimised.                                                                     |

| [position](#position)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.position <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets or sets the window position                                                                     |

| [size](#size)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.size <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets or sets the window size                                                                     |

| [UI](#UI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.UI <cp.prop: hs.axuielement: read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The UI `axuielement` for the Window.                                                                     |

| [visible](#visible)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window.visible <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if the window is visible on a screen.                                                                     |

### Methods

| [close](#close)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:close() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to close the window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the window was successfully closed.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doClose](#doClose)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:doClose() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will attempt to close the window, if it is visible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute, resolving to `true` if the window is closed successfully, or `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doFocus](#doFocus)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:doFocus() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) will attempt to focus on the window, if it is visible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute, which resolves to `true` if the window was successfully focused, or `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [findSectionUI](#findSectionUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:findSectionUI(sectionID) -> hs.axuielement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Looks for th section with the specified `SectionUniqueID` value and returns the matching `axuielement` value.                                                                     |
| **Parameters**                              | <ul><li>sectionID - The string for the section ID.</li></ul> |
| **Returns**                                 | <ul><li>The matching `axuielement`, or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [focus](#focus)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:focus() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to focus the window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the window was successfully focused.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [notifier](#notifier)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:notifier() -> cp.ui.notifier`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `notifier` that is tracking the application UI element. It has already been started.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The notifier.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [snapshot](#snapshot)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Window:snapshot([path]) -> hs.image | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Takes a snapshot of the UI in its current state as a PNG and returns it. If the `path` is provided, the image will be saved at the specified location.                                                                     |
| **Parameters**                              | <ul><li>path		- (optional) The path to save the file. Should include the extension (should be `.png`).</li></ul> |
| **Returns**                                 | <ul><li>The `hs.image` that was created, or `nil` if the UI is not available.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


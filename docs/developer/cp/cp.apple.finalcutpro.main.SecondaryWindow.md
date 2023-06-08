# [docs](index.md) » cp.apple.finalcutpro.main.SecondaryWindow
---

Secondary Window Module.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [SecondaryWindow](#SecondaryWindow)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [browserGroupUI](#browserGroupUI)
 * [frame](#frame)
 * [hsWindow](#hsWindow)
 * [isFullScreen](#isFullScreen)
 * [isShowing](#isShowing)
 * [rootGroupUI](#rootGroupUI)
 * [timelineGroupUI](#timelineGroupUI)
 * [viewerGroupUI](#viewerGroupUI)
* Methods - API calls which can only be made on an object returned by a constructor
 * [app](#app)
 * [doShow](#doShow)
 * [show](#show)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [SecondaryWindow](#SecondaryWindow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow(app) -> SecondaryWindow`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `SecondaryWindow` instance.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.apple.finalcutpro` object.</li></ul> |
| **Returns**                                 | <ul><li>A new `SecondaryWindow` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [browserGroupUI](#browserGroupUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.browserGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The UI element that will contain the `Browser` if it's on the Secondary Window.                                                                     |

| [frame](#frame)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.frame <cp.prop: frame>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current position (x, y, width, height) of the window.                                                                     |

| [hsWindow](#hsWindow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.hsWindow <cp.prop: hs.window; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `hs.window` instance for the window, or `nil` if it can't be found.                                                                     |

| [isFullScreen](#isFullScreen)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.isFullScreen <cp.prop: boolean; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the window is full-screen.                                                                     |

| [isShowing](#isShowing)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.isShowing <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the window is visible.                                                                     |

| [rootGroupUI](#rootGroupUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.rootGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The root UI element on the window.                                                                     |

| [timelineGroupUI](#timelineGroupUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.timelineGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The UI element that will contain the `Timeline` if it's on the Secondary Window.                                                                     |

| [viewerGroupUI](#viewerGroupUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow.viewerGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The UI element that will contain the `Viewer` if it's on the Secondary Window.                                                                     |

### Methods

| [app](#app)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow:app() -> App`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the app instance representing Final Cut Pro.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>App</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShow](#doShow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement) that shows the Secondary Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `SecondaryWindow` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.SecondaryWindow:show() -> SecondaryWindow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Secondary Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `SecondaryWindow` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


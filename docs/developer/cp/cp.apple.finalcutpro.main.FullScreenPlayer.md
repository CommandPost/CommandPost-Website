# [docs](index.md) » cp.apple.finalcutpro.main.FullScreenPlayer
---

Full Screen Window Player.

Triggered by the "View > Playback > Play Full Screen" menubar item.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [FullScreenPlayer](#FullScreenPlayer)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [isFullScreen](#isFullScreen)
 * [rootGroupUI](#rootGroupUI)
 * [viewerGroupUI](#viewerGroupUI)
* Methods - API calls which can only be made on an object returned by a constructor
 * [doShow](#doShow)
 * [show](#show)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [FullScreenPlayer](#FullScreenPlayer)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer(app) -> FullScreenPlayer`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new FCPX `FullScreenPlayer` instance.                                                                     |
| **Parameters**                              | <ul><li>app       - The FCP app instance.</li></ul> |
| **Returns**                                 | <ul><li>The new `FullScreenPlayer`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [isFullScreen](#isFullScreen)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer.isFullScreen <cp.prop; boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the window is full-screen.                                                                     |

| [rootGroupUI](#rootGroupUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer.rootGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The root `AXGroup`.                                                                     |

| [viewerGroupUI](#viewerGroupUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer.viewerGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Viewer's group UI element.                                                                     |

### Methods

| [doShow](#doShow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer:doShow() -> <cp.rx.go.Statement>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that attempts to show the full screen window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer:show() -> cp.apple.finalcutpro`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to show the full screen window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The window instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


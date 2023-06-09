# cp.apple.finalcutpro.main.FullScreenPlayer

Full Screen Window Player.

Triggered by the "View > Playback > Play Full Screen" menubar item.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [FullScreenPlayer](#fullscreenplayer)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [isFullScreen](#isfullscreen)
 * [rootGroupUI](#rootgroupui)
 * [viewerGroupUI](#viewergroupui)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doShow](#doshow)
 * [show](#show)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Constructors


### [FullScreenPlayer](#fullscreenplayer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer(app) -> FullScreenPlayer`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new FCPX `FullScreenPlayer` instance.                                                                     |
| **Parameters**                              | <ul><li>app       - The FCP app instance.</li></ul> |
| **Returns**                                 | <ul><li>The new `FullScreenPlayer`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [isFullScreen](#isfullscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer.isFullScreen <cp.prop; boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the window is full-screen.                                                                     |
| **Notes**                                   | - None |

---


### [rootGroupUI](#rootgroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer.rootGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The root `AXGroup`.                                                                     |
| **Notes**                                   | - None |

---


### [viewerGroupUI](#viewergroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer.viewerGroupUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Viewer's group UI element.                                                                     |
| **Notes**                                   | - None |

---

#### Methods


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer:doShow() -> <cp.rx.go.Statement>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that attempts to show the full screen window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FullScreenPlayer:show() -> cp.apple.finalcutpro`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to show the full screen window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The window instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


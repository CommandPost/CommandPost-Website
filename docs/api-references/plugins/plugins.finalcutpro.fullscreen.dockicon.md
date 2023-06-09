# plugins.finalcutpro.fullscreen.dockicon

Manages the CommandPost dock icon when FCP is full-screen.
[Due to some quirkiness](https://github.com/Hammerspoon/hammerspoon/issues/1184)
in how macOS manages full-screen windows, it seems that we need to make
CP 'dockless' when an app we are working with goes full-screen. Otherwise
our drawing/canvas images will not display correctly.

---

## API Overview
**Variables** - _Configurable values_
 * [dockIconEnabled](#dockiconenabled)
 * [fcpActiveFullScreen](#fcpactivefullscreen)


---

## API Documentation

#### Variables


### [dockIconEnabled](#dockiconenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.fullscreen.dockicon.dockIconEnabled <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | If `true` the CommandPost dock icon should be hidden.                                                                     |
| **Notes**                                   | - None |

---


### [fcpActiveFullScreen](#fcpactivefullscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.fullscreen.dockicon.fcpActiveFullScreen <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | If `true` FCP is full-screen and the frontmost app.                                                                     |
| **Notes**                                   | - None |

---


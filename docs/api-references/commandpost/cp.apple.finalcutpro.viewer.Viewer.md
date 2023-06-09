# cp.apple.finalcutpro.viewer.Viewer

Viewer Module.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [BACKGROUND](#background)
 * [PLAYBACK_MODE](#playback_mode)

**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Viewer](#viewer)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [background](#background)
 * [betterQuality](#betterquality)
 * [contentsUI](#contentsui)
 * [controlBar](#controlbar)
 * [frame](#frame)
 * [framerate](#framerate)
 * [getFormat](#getformat)
 * [hasPlayerControls](#hasplayercontrols)
 * [infoBar](#infobar)
 * [isEventViewer](#iseventviewer)
 * [isMainViewer](#ismainviewer)
 * [isOnPrimary](#isonprimary)
 * [isOnSecondary](#isonsecondary)
 * [playbackMode](#playbackmode)
 * [playButton](#playbutton)
 * [timecode](#timecode)
 * [timecodeField](#timecodefield)
 * [title](#title)
 * [usingProxies](#usingproxies)
 * [videoImage](#videoimage)
 * [videoImageUI](#videoimageui)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [app](#app)
 * [currentWindow](#currentwindow)
 * [doHide](#dohide)
 * [doPause](#dopause)
 * [doPlay](#doplay)
 * [doShowOnPrimary](#doshowonprimary)
 * [doShowOnSecondary](#doshowonsecondary)
 * [hide](#hide)
 * [notifier](#notifier)
 * [showOnPrimary](#showonprimary)
 * [showOnSecondary](#showonsecondary)


---

## API Documentation

#### Constants


### [BACKGROUND](#background)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.BACKGROUND -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Lists the possible background values: `BLACK`, `WHITE`, `CHECKERBOARD`.                                                                     |
| **Notes**                                   | - None |

---


### [PLAYBACK_MODE](#playback_mode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.PLAYBACK_MODE -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Lists the possible playback modes for the viewer: `ORIGINAL_BETTER_QUALITY`, `ORIGINAL_BETTER_PERFORMANCE`, `PROXY_PREFERRED`, `PROXY_ONLY`.                                                                     |
| **Notes**                                   | - None |

---

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Constructors


### [Viewer](#viewer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer(app, eventViewer) -> Viewer`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Viewer` instance.                                                                     |
| **Parameters**                              | <ul><li>app           - The FCP application.</li><li>eventViewer   - If `true`, the viewer is the Event Viewer.</li></ul> |
| **Returns**                                 | <ul><li>The new `Viewer` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [background](#background)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.background -> <cp.prop: number, live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The viewer background mode. See `Viewer.BACKGROUND` for options.                                                                     |
| **Notes**                                   | <ul><li>sets the background for all viewers.</li></ul> |

---


### [betterQuality](#betterquality)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.betterQuality <cp.prop: boolean, read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the viewer is using playing with better quality (`true`) or performance (`false).                                                                     |
| **Notes**                                   | <ul><li>Use `playbackMode` to change modes between original/proxy/quality/performance.</li></ul> |

---


### [contentsUI](#contentsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.contentsUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the `axuielement` for the media contents of the Viewer, or `nil` if not available.                                                                     |
| **Notes**                                   | - None |

---


### [controlBar](#controlbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.controlBar <cp.apple.finalcutpro.viewer.ControlBar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the [ControlBar](cp.apple.finalcutpro.viewer.ControlBar.md) for this `Viewer`.                                                                     |
| **Notes**                                   | - None |

---


### [frame](#frame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.frame <cp.prop: table; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the current frame for the viewer, or `nil` if it is not available.                                                                     |
| **Notes**                                   | - None |

---


### [framerate](#framerate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.framerate <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the framerate as a number, or nil if not available.                                                                     |
| **Notes**                                   | - None |

---


### [getFormat](#getformat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.getFormat <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the format text value, or `nil` if none is available.                                                                     |
| **Notes**                                   | - None |

---


### [hasPlayerControls](#hasplayercontrols)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.hasPlayerControls <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the viewer has Player Controls visible.                                                                     |
| **Notes**                                   | - None |

---


### [infoBar](#infobar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.infoBar <cp.apple.finalcutpro.viewer.InfoBar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the [InfoBar](cp.apple.finalcutpro.viewer.InfoBar.md) for this `Viewer`.                                                                     |
| **Notes**                                   | - None |

---


### [isEventViewer](#iseventviewer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.isEventViewer <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if this is the Event Viewer.                                                                     |
| **Notes**                                   | - None |

---


### [isMainViewer](#ismainviewer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.isMainViewer <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if this is the main Viewer.                                                                     |
| **Notes**                                   | - None |

---


### [isOnPrimary](#isonprimary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.isOnPrimary <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Viewer is showing on the Primary Window.                                                                     |
| **Notes**                                   | - None |

---


### [isOnSecondary](#isonsecondary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.isOnSecondary <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Viewer is showing on the Secondary Window.                                                                     |
| **Notes**                                   | - None |

---


### [playbackMode](#playbackmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.playbackMode -> Viewer.PLAYBACK_MODE`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Reports and allows modification of the current playback mode.                                                                     |
| **Notes**                                   | - None |

---


### [playButton](#playbutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.playButton <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Play [Button](cp.ui.Button.md) object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Button</li></ul>          |
| **Notes**                                   | - None |

---


### [timecode](#timecode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.timecode <cp.prop: string; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current timecode value, with the format "hh:mm:ss:ff". Setting also supports "hh:mm:ss;ff".                                                                     |
| **Notes**                                   | - None |

---


### [timecodeField](#timecodefield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.timecodeField <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [StaticText](cp.ui.StaticText.md) containing the timecode value.                                                                     |
| **Notes**                                   | - None |

---


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.title <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the Title of the clip in the Viewer as a [StaticText](cp.ui.StaticText.md)                                                                     |
| **Notes**                                   | - None |

---


### [usingProxies](#usingproxies)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.usingProxies <cp.prop: boolean, read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the viewer is using Proxies (`true`) or Optimized/Original media (`false`).                                                                     |
| **Notes**                                   | <ul><li>Use `playbackMode` to change modes between original/proxy/quality/performance.</li></ul> |

---


### [videoImage](#videoimage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.videoImage <cp.ui.Image>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Image` for the video content.                                                                     |
| **Notes**                                   | - None |

---


### [videoImageUI](#videoimageui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.videoImageUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the `axuielement` for video image within the Viewer, or `nil` if not available.                                                                     |
| **Notes**                                   | - None |

---

#### Methods


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:app() -> application`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the application.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The application.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [currentWindow](#currentwindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:currentWindow() -> PrimaryWindow | SecondaryWindow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the current window object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `PrimaryWindow` or the `SecondaryWindow`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doHide](#dohide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that hides the Viewer.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true`, or sends an error.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doPause](#dopause)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.doPause() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Pause the `Viewer`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doPlay](#doplay)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:doPlay() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will play the `Viewer`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md).</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doShowOnPrimary](#doshowonprimary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:doShowOnPrimary() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that shows the Viewer on the Primary display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which resolves to `true`, or sends an error message.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doShowOnSecondary](#doshowonsecondary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:doShowOnSecondary() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that shows the Viewer on the Secondary display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true`, or sending an error message.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:hide() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Viewer.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [notifier](#notifier)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:notifier() -> cp.ui.notifier`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `notifier` that is tracking the application UI element. It has already been started.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The notifier.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [showOnPrimary](#showonprimary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:showOnPrimary() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Viewer on the Primary display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [showOnSecondary](#showonsecondary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:showOnSecondary() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Viewer on the Seconary display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


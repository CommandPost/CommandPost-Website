# cp.apple.finalcutpro.viewer.Viewer

Viewer Module.

## API Overview
* Constants - Useful values which cannot be changed
 * [BACKGROUND](#BACKGROUND)
 * [PLAYBACK_MODE](#PLAYBACK_MODE)
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [Viewer](#Viewer)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [background](#background)
 * [betterQuality](#betterQuality)
 * [contentsUI](#contentsUI)
 * [controlBar](#controlBar)
 * [frame](#frame)
 * [framerate](#framerate)
 * [getFormat](#getFormat)
 * [hasPlayerControls](#hasPlayerControls)
 * [infoBar](#infoBar)
 * [isEventViewer](#isEventViewer)
 * [isMainViewer](#isMainViewer)
 * [isOnPrimary](#isOnPrimary)
 * [isOnSecondary](#isOnSecondary)
 * [playbackMode](#playbackMode)
 * [playButton](#playButton)
 * [timecode](#timecode)
 * [timecodeField](#timecodeField)
 * [title](#title)
 * [usingProxies](#usingProxies)
 * [videoImage](#videoImage)
 * [videoImageUI](#videoImageUI)
* Methods - API calls which can only be made on an object returned by a constructor
 * [app](#app)
 * [currentWindow](#currentWindow)
 * [doHide](#doHide)
 * [doPause](#doPause)
 * [doPlay](#doPlay)
 * [doShowOnPrimary](#doShowOnPrimary)
 * [doShowOnSecondary](#doShowOnSecondary)
 * [hide](#hide)
 * [notifier](#notifier)
 * [showOnPrimary](#showOnPrimary)
 * [showOnSecondary](#showOnSecondary)

## API Documentation

### Constants

| [BACKGROUND](#BACKGROUND)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.BACKGROUND -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Lists the possible background values: `BLACK`, `WHITE`, `CHECKERBOARD`.                                                                     |

| [PLAYBACK_MODE](#PLAYBACK_MODE)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.PLAYBACK_MODE -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Lists the possible playback modes for the viewer: `ORIGINAL_BETTER_QUALITY`, `ORIGINAL_BETTER_PERFORMANCE`, `PROXY_PREFERRED`, `PROXY_ONLY`.                                                                     |

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [Viewer](#Viewer)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer(app, eventViewer) -> Viewer`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Viewer` instance.                                                                     |
| **Parameters**                              | <ul><li>app           - The FCP application.</li><li>eventViewer   - If `true`, the viewer is the Event Viewer.</li></ul> |
| **Returns**                                 | <ul><li>The new `Viewer` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [background](#background)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.background -> <cp.prop: number, live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The viewer background mode. See `Viewer.BACKGROUND` for options.                                                                     |
| **Notes**                                   | <ul><li>sets the background for all viewers.</li></ul>                |

| [betterQuality](#betterQuality)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.betterQuality <cp.prop: boolean, read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the viewer is using playing with better quality (`true`) or performance (`false).                                                                     |
| **Notes**                                   | <ul><li>Use `playbackMode` to change modes between original/proxy/quality/performance.</li></ul>                |

| [contentsUI](#contentsUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.contentsUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the `axuielement` for the media contents of the Viewer, or `nil` if not available.                                                                     |

| [controlBar](#controlBar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.controlBar <cp.apple.finalcutpro.viewer.ControlBar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the [ControlBar](cp.apple.finalcutpro.viewer.ControlBar.md) for this `Viewer`.                                                                     |

| [frame](#frame)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.frame <cp.prop: table; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the current frame for the viewer, or `nil` if it is not available.                                                                     |

| [framerate](#framerate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.framerate <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the framerate as a number, or nil if not available.                                                                     |

| [getFormat](#getFormat)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.getFormat <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the format text value, or `nil` if none is available.                                                                     |

| [hasPlayerControls](#hasPlayerControls)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.hasPlayerControls <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the viewer has Player Controls visible.                                                                     |

| [infoBar](#infoBar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.infoBar <cp.apple.finalcutpro.viewer.InfoBar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the [InfoBar](cp.apple.finalcutpro.viewer.InfoBar.md) for this `Viewer`.                                                                     |

| [isEventViewer](#isEventViewer)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.isEventViewer <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if this is the Event Viewer.                                                                     |

| [isMainViewer](#isMainViewer)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.isMainViewer <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if this is the main Viewer.                                                                     |

| [isOnPrimary](#isOnPrimary)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.isOnPrimary <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Viewer is showing on the Primary Window.                                                                     |

| [isOnSecondary](#isOnSecondary)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.isOnSecondary <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Viewer is showing on the Secondary Window.                                                                     |

| [playbackMode](#playbackMode)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.playbackMode -> Viewer.PLAYBACK_MODE`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Reports and allows modification of the current playback mode.                                                                     |

| [playButton](#playButton)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.playButton <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Play [Button](cp.ui.Button.md) object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Button</li></ul>          |

| [timecode](#timecode)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.timecode <cp.prop: string; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current timecode value, with the format "hh:mm:ss:ff". Setting also supports "hh:mm:ss;ff".                                                                     |

| [timecodeField](#timecodeField)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.timecodeField <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [StaticText](cp.ui.StaticText.md) containing the timecode value.                                                                     |

| [title](#title)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.title <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the Title of the clip in the Viewer as a [StaticText](cp.ui.StaticText.md)                                                                     |

| [usingProxies](#usingProxies)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.usingProxies <cp.prop: boolean, read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the viewer is using Proxies (`true`) or Optimized/Original media (`false`).                                                                     |
| **Notes**                                   | <ul><li>Use `playbackMode` to change modes between original/proxy/quality/performance.</li></ul>                |

| [videoImage](#videoImage)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.videoImage <cp.ui.Image>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Image` for the video content.                                                                     |

| [videoImageUI](#videoImageUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.videoImageUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides the `axuielement` for video image within the Viewer, or `nil` if not available.                                                                     |

### Methods

| [app](#app)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:app() -> application`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the application.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The application.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [currentWindow](#currentWindow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:currentWindow() -> PrimaryWindow | SecondaryWindow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the current window object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `PrimaryWindow` or the `SecondaryWindow`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doHide](#doHide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that hides the Viewer.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true`, or sends an error.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doPause](#doPause)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer.doPause() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Pause the `Viewer`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doPlay](#doPlay)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:doPlay() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will play the `Viewer`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShowOnPrimary](#doShowOnPrimary)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:doShowOnPrimary() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that shows the Viewer on the Primary display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which resolves to `true`, or sends an error message.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShowOnSecondary](#doShowOnSecondary)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:doShowOnSecondary() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that shows the Viewer on the Secondary display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true`, or sending an error message.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hide](#hide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:hide() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Viewer.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [notifier](#notifier)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:notifier() -> cp.ui.notifier`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `notifier` that is tracking the application UI element. It has already been started.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The notifier.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showOnPrimary](#showOnPrimary)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:showOnPrimary() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Viewer on the Primary display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showOnSecondary](#showOnSecondary)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.Viewer:showOnSecondary() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Viewer on the Seconary display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |


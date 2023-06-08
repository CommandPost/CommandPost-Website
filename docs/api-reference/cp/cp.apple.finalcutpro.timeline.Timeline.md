# [docs](index.md) » cp.apple.finalcutpro.timeline.Timeline
---

Timeline Module.
The timeline module provides an interface to the Final Cut Pro timeline.
It delegates to the `contents` property, so any functions which can be called
on the `contents` property can be called on the Timeline module.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
 * [matchesMain](#matchesMain)
* Constructors - API calls which return an object, typically one that offers API methods
 * [Timeline](#Timeline)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [contents](#contents)
 * [effects](#effects)
 * [index](#index)
 * [isFocused](#isFocused)
 * [isOnPrimary](#isOnPrimary)
 * [isOnSecondary](#isOnSecondary)
 * [isPlaying](#isPlaying)
 * [isShowing](#isShowing)
 * [mainUI](#mainUI)
 * [rangeSelected](#rangeSelected)
 * [speedPopover](#speedPopover)
 * [title](#title)
 * [toolbar](#toolbar)
 * [transitions](#transitions)
* Methods - API calls which can only be made on an object returned by a constructor
 * [app](#app)
 * [doHide](#doHide)
 * [doOpenProject](#doOpenProject)
 * [doShowOnPrimary](#doShowOnPrimary)
 * [doShowOnSecondary](#doShowOnSecondary)
 * [hide](#hide)
 * [show](#show)
 * [showOnPrimary](#showOnPrimary)
 * [showOnSecondary](#showOnSecondary)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>`element` should be an `AXGroup`, which contains an `AXSplitGroup` with an</li><li>   `AXIdentifier` of `_NS:237` (as of Final Cut Pro 10.4)</li></ul>                |

| [matchesMain](#matchesMain)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.matchesMain(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>`element` should be an `AXSplitGroup` with an `AXIdentifier` of `_NS:237`</li><li>   (as of Final Cut Pro 10.4)</li><li>Because the timeline contents is hard to detect, we look for the timeline</li><li>   toolbar instead.</li></ul>                |

### Constructors

| [Timeline](#Timeline)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline(app) -> Timeline`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Timeline` instance.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.apple.finalcutpro` object.</li></ul> |
| **Returns**                                 | <ul><li>A new `Timeline` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [contents](#contents)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.contents <cp.apple.finalcutpro.timeline.Contents>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Timeline Contents. The Content is the main body of the timeline,                                                                     |

| [effects](#effects)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.effects <cp.apple.finalcutpro.main.EffectsBrowser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The (sometimes hidden) Effect Browser.                                                                     |

| [index](#index)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.index <cp.apple.finalcutpro.timeline.Index>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Index](cp.apple.finalcutpro.timeline.Index.md).                                                                     |

| [isFocused](#isFocused)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.isFocused <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the timeline focused?                                                                     |

| [isOnPrimary](#isOnPrimary)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.isOnPrimary <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Timeline is on the Primary Display.                                                                     |

| [isOnSecondary](#isOnSecondary)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.isOnSecondary <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Timeline is on the Secondary Display.                                                                     |

| [isPlaying](#isPlaying)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.isPlaying <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the timeline playing?                                                                     |

| [isShowing](#isShowing)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.isShowing <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Timeline is showing on either the Primary or Secondary display.                                                                     |

| [mainUI](#mainUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.mainUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `axuielement` representing the 'timeline', or `nil` if not available.                                                                     |

| [rangeSelected](#rangeSelected)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.rangeSelected <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if a range is selected in the timeline.                                                                     |

| [speedPopover](#speedPopover)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.speedPopover <cp.apple.finalcutpro.timeline.SpeedPopover>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [SpeedPopover](cp.apple.finalcutpro.timeline.SpeedPopover.md).                                                                     |

| [title](#title)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.title <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [StaticText](cp.ui.StaticText.md) containing the title.                                                                     |

| [toolbar](#toolbar)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.toolbar <Toolbar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The bar at the top of the timeline.                                                                     |

| [transitions](#transitions)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.transitions <cp.apple.finalcutpro.main.EffectsBrowser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The (sometimes hidden) Transitions Browser.                                                                     |

### Methods

| [app](#app)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:app() -> App`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the app instance representing Final Cut Pro.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>App</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doHide](#doHide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will hide the Timeline (regardless of whether it was on the Primary or Secondary window).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Statement` ready to run.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doOpenProject](#doOpenProject)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:doOpenProject(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Opens a project from the timeline navigation popups.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the project you want to open.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to run.</li></ul>          |
| **Notes**                                   | <ul><li>The title supports patterns, so you can do things like:</li><li>   `require("cp.apple.finalcutpro").timeline:doOpenProject("Audio.*"):Now()`</li></ul>                |

| [doShowOnPrimary](#doShowOnPrimary)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:doShowOnPrimary() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will ensure the timeline is in the primary window.                                                                     |
| **Parameters**                              | <ul><li>timeout  - The timeout period for the operation.</li></ul> |
| **Returns**                                 | <ul><li>A `Statement` which will send `true` if it successful, or `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShowOnSecondary](#doShowOnSecondary)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:doShowOnSecondary() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will ensure the timeline is in the secondary window.                                                                     |
| **Parameters**                              | <ul><li>timeout  - The timeout period for the operation.</li></ul> |
| **Returns**                                 | <ul><li>A `Statement` which will send `true` if it successful, or `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hide](#hide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:hide() -> Timeline`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hide's the Timeline (regardless of whether it was on the Primary or Secondary display).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`Timeline` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:show() -> Timeline`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's the Timeline on the Primary Display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`Timeline` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showOnPrimary](#showOnPrimary)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:showOnPrimary() -> Timeline`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's the Timeline on the Primary Display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`Timeline` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showOnSecondary](#showOnSecondary)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:showOnSecondary() -> Timeline`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's the Timeline on the Secondary Display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`Timeline` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


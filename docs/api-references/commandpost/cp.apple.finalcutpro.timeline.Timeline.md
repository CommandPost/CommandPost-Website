# cp.apple.finalcutpro.timeline.Timeline

Timeline Module.
The timeline module provides an interface to the Final Cut Pro timeline.
It delegates to the `contents` property, so any functions which can be called
on the `contents` property can be called on the Timeline module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)
 * [matchesMain](#matchesmain)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Timeline](#timeline)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [contents](#contents)
 * [effects](#effects)
 * [index](#index)
 * [isFocused](#isfocused)
 * [isOnPrimary](#isonprimary)
 * [isOnSecondary](#isonsecondary)
 * [isPlaying](#isplaying)
 * [isShowing](#isshowing)
 * [mainUI](#mainui)
 * [rangeSelected](#rangeselected)
 * [speedPopover](#speedpopover)
 * [title](#title)
 * [toolbar](#toolbar)
 * [transitions](#transitions)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [app](#app)
 * [doHide](#dohide)
 * [doOpenProject](#doopenproject)
 * [doShowOnPrimary](#doshowonprimary)
 * [doShowOnSecondary](#doshowonsecondary)
 * [hide](#hide)
 * [show](#show)
 * [showOnPrimary](#showonprimary)
 * [showOnSecondary](#showonsecondary)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>`element` should be an `AXGroup`, which contains an `AXSplitGroup` with an</li><li>   `AXIdentifier` of `_NS:237` (as of Final Cut Pro 10.4)</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L42) |

---


### [matchesMain](#matchesmain)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.matchesMain(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>`element` should be an `AXSplitGroup` with an `AXIdentifier` of `_NS:237`</li><li>   (as of Final Cut Pro 10.4)</li><li>Because the timeline contents is hard to detect, we look for the timeline</li><li>   toolbar instead.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 62](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L62) |

---

#### Constructors


### [Timeline](#timeline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline(app) -> Timeline`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Timeline` instance.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.apple.finalcutpro` object.</li></ul> |
| **Returns**                                 | <ul><li>A new `Timeline` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 107](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L107) |

---

#### Fields


### [contents](#contents)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.contents <cp.apple.finalcutpro.timeline.Contents>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Timeline Contents. The Content is the main body of the timeline,                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 380](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L380) |

---


### [effects](#effects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.effects <cp.apple.finalcutpro.main.EffectsBrowser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The (sometimes hidden) Effect Browser.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 388](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L388) |

---


### [index](#index)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.index <cp.apple.finalcutpro.timeline.Index>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Index](cp.apple.finalcutpro.timeline.Index.md).                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 427](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L427) |

---


### [isFocused](#isfocused)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.isFocused <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the timeline focused?                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 179](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L179) |

---


### [isOnPrimary](#isonprimary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.isOnPrimary <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Timeline is on the Primary Display.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 138](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L138) |

---


### [isOnSecondary](#isonsecondary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.isOnSecondary <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Timeline is on the Secondary Display.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 128](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L128) |

---


### [isPlaying](#isplaying)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.isPlaying <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the timeline playing?                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 172](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L172) |

---


### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.isShowing <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Timeline is showing on either the Primary or Secondary display.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 148](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L148) |

---


### [mainUI](#mainui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.mainUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `axuielement` representing the 'timeline', or `nil` if not available.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 158](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L158) |

---


### [rangeSelected](#rangeselected)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.rangeSelected <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if a range is selected in the timeline.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 416](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L416) |

---


### [speedPopover](#speedpopover)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.speedPopover <cp.apple.finalcutpro.timeline.SpeedPopover>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [SpeedPopover](cp.apple.finalcutpro.timeline.SpeedPopover.md).                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 472](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L472) |

---


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.title <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [StaticText](cp.ui.StaticText.md) containing the title.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 409](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L409) |

---


### [toolbar](#toolbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.toolbar <Toolbar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The bar at the top of the timeline.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 402](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L402) |

---


### [transitions](#transitions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline.transitions <cp.apple.finalcutpro.main.EffectsBrowser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The (sometimes hidden) Transitions Browser.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 395](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L395) |

---

#### Methods


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:app() -> App`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the app instance representing Final Cut Pro.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>App</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 186](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L186) |

---


### [doHide](#dohide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will hide the Timeline (regardless of whether it was on the Primary or Secondary window).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Statement` ready to run.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 342](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L342) |

---


### [doOpenProject](#doopenproject)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:doOpenProject(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Opens a project from the timeline navigation popups.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the project you want to open.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to run.</li></ul>          |
| **Notes**                                   | <ul><li>The title supports patterns, so you can do things like:</li><li>   `require("cp.apple.finalcutpro").timeline:doOpenProject("Audio.*"):Now()`</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 448](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L448) |

---


### [doShowOnPrimary](#doshowonprimary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:doShowOnPrimary() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will ensure the timeline is in the primary window.                                                                     |
| **Parameters**                              | <ul><li>timeout  - The timeout period for the operation.</li></ul> |
| **Returns**                                 | <ul><li>A `Statement` which will send `true` if it successful, or `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 252](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L252) |

---


### [doShowOnSecondary](#doshowonsecondary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:doShowOnSecondary() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will ensure the timeline is in the secondary window.                                                                     |
| **Parameters**                              | <ul><li>timeout  - The timeout period for the operation.</li></ul> |
| **Returns**                                 | <ul><li>A `Statement` which will send `true` if it successful, or `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 300](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L300) |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:hide() -> Timeline`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hide's the Timeline (regardless of whether it was on the Primary or Secondary display).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`Timeline` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 321](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L321) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:show() -> Timeline`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's the Timeline on the Primary Display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`Timeline` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 205](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L205) |

---


### [showOnPrimary](#showonprimary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:showOnPrimary() -> Timeline`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's the Timeline on the Primary Display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`Timeline` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 228](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L228) |

---


### [showOnSecondary](#showonsecondary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.Timeline:showOnSecondary() -> Timeline`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show's the Timeline on the Secondary Display.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`Timeline` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua line 280](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/Timeline.lua#L280) |

---


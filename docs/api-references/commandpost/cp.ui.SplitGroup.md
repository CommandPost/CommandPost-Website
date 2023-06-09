# cp.ui.SplitGroup

Split Group UI. A SplitGroup is a container that can be split into multiple sections.
Each section is an [Element](cp.ui.Element.md), and they are divided by a [Splitter](cp.ui.Splitter.md),
resulting in something like `{ Element, Splitter, Element }`.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [SplitGroup](#SplitGroup)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [children](#children)
 * [childrenUI](#childrenUI)
 * [sections](#sections)
 * [splitters](#splitters)
 * [splittersUI](#splittersUI)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.SplitGroup.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [SplitGroup](#SplitGroup)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.SplitGroup(parent, uiFinder, childInits) -> cp.ui.SplitGroup`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `SplitGroup`.                                                                     |
| **Parameters**                              | <ul><li>parent		- The parent object.</li><li>uiFinder		- The `function` or `cp.prop` which returns an `hs.axuielement` for the `SplitGroup`, or `nil`.</li><li>childInits   - A `table` of section-creating functions, in order, including the `Splitter`s.</li></ul> |
| **Returns**                                 | <ul><li>A new `SplitGroup` instance.</li></ul>          |
| **Notes**                                   | <ul><li>Many `childInints` values can be the actual `Element` value (eg: `TextArea`), since they only require the `parent` and `uiFinder` parameters.</li><li>The [cp.fn.ax.init](cp.fn.ax.md#init) function can be useful for passing in `Element` types which require more than just the `parent` and `uiFinder` values.</li><li>Example: `SplitGroup(parent, uiFinder, { cp.fn.ax.init(ScrollArea, cp.ui.List), cp.fn.ax.init(ScrollArea, cp.ui.TextArea) })</li></ul>                |

### Fields

| [children](#children)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.SplitGroup.children <table: cp.ui.Element, read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | All children of the Split Group, based on the `childInits` passed to the constructor.                                                                     |

| [childrenUI](#childrenUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.SplitGroup.childrenUI <cp.prop: table of axuielementObject, read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `axuielementObject`s for the sections, sorted in [top-down](cp.fn.ax.md#topDown) order.                                                                     |

| [sections](#sections)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.SplitGroup.sections <table: table of cp.ui.Element, read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Sections` of the `SplitGroup`. Each section will be a `table` of `cp.ui.Element`s.                                                                     |

| [splitters](#splitters)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.SplitGroup.splitters <table: cp.ui.Splitter, read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Splitters` of the `SplitGroup`. There will be one less splitter than there are sections.                                                                     |

| [splittersUI](#splittersUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.SplitGroup.splittersUI <cp.prop: table of axuielementObject, read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of `axuielementObject`s for the splitters.                                                                     |


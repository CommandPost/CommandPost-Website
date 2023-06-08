# [docs](index.md) » cp.fn.ax
---

A collection of useful functions for working with AX.

You may also find functions in [cp.fn](cp.fn.md) and [cp.fn.table](cp.fn.table.md) useful.

## API Overview
* Functions - API calls offered directly by the extension
 * [areAligned](#areAligned)
 * [attribute](#attribute)
 * [bottomToTop](#bottomToTop)
 * [bottomUp](#bottomUp)
 * [cache](#cache)
 * [childMatching](#childMatching)
 * [children](#children)
 * [childrenMatching](#childrenMatching)
 * [childrenTopDown](#childrenTopDown)
 * [childWith](#childWith)
 * [hasAttributeValue](#hasAttributeValue)
 * [hasRole](#hasRole)
 * [init](#init)
 * [initElements](#initElements)
 * [isUIElement](#isUIElement)
 * [isValid](#isValid)
 * [leftToRight](#leftToRight)
 * [matchesIf](#matchesIf)
 * [narrowToWide](#narrowToWide)
 * [performAction](#performAction)
 * [prop](#prop)
 * [rightToLeft](#rightToLeft)
 * [setAttribute](#setAttribute)
 * [shortToTall](#shortToTall)
 * [topDown](#topDown)
 * [topToBottom](#topToBottom)
 * [topToBottomBaseAligned](#topToBottomBaseAligned)
 * [uielement](#uielement)
 * [uielementList](#uielementList)

## API Documentation

### Functions

| [areAligned](#areAligned)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.areAligned(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is aligned with element `b`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is aligned with `b`.</li></ul>          |
| **Notes**                                   | <ul><li>Two elements are considered to be aligned if the interesection if their heights are at least 50% of the height of both elements.</li></ul>                |

| [attribute](#attribute)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.attribute(name) -> function(uivalue) -> any | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function which will return the `AX` value of the given `name` from the given `value`.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the attribute to get. Eg. `"AXValue"`.</li></ul> |
| **Returns**                                 | <ul><li>A function which will return the `AX` value of the given `name` from the given `uivalue`.</li><li>This is safe to use as a [cp.prop:mutate](cp.prop.md#mutate) getter, since it will resolve the `original` value before getting the named attribute.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [bottomToTop](#bottomToTop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.bottomToTop(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is below element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is below `b`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [bottomUp](#bottomUp)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.bottomUp(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The reverse of `topDown`, ordering from linearly from bottom-to-top, right-to-left                                                                     |
| **Parameters**                              | <ul><li>a - The first `axuielement` to compare.</li><li>b - The second `axuielement` to compare.</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is below or to the right of `b` in the UI, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [cache](#cache)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.cache(source, key, finderFn, [verifyFn]) -> cachedValue`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator which checks if the cached value at the `source[key]` is a valid axuielement. If not it will call the provided `finderFn()` function (with no arguments), cache the result and return it.                                                                     |
| **Parameters**                              | <ul><li>source       - the table containing the cache</li><li>key          - the key the value is cached under</li><li>finderFn     - the function which will return the element if not found.</li><li>[verifyFn]   - an optional function which will check the cached element to verify it is still valid.</li></ul> |
| **Returns**                                 | <ul><li>The valid cached value.</li></ul>          |
| **Notes**                                   | <ul><li>If the `verifyFn` is provided, it will be called to check that the cached</li><li>   value is still valid. It is passed a single parameter (the axuielement) and is expected</li><li>   to return `true` or `false`.</li><li>Example:</li><li>   ```lua</li><li>   ax.cache(self, "_ui", MyElement.matches)(</li><li>       fn.table.get(1) -- return the first child of the element.</li><li>   )</li><li>If the optional `verifyFn` is provided, it will be called to check that the cached value is still valid. It is passed a single parameter (the axuielement) and is expected to return `true` or `false`.</li></ul>                |

| [childMatching](#childMatching)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.childMatching(predicate[, index][, comparator]) -> function(uivalue) -> axuielement | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that will return the first child of the given `uivalue` that matches the given `predicate`.                                                                     |
| **Parameters**                              | <ul><li>predicate - A function that will be called with the child `axuielement` and should return `true` if the child matches.</li><li>index - An optional number that will be used to determine the child to return. Defaults to `1`.</li><li>comparator - An optional function that will be called with the child `axuielement` and should return `true` if the child matches. Defaults to [`cp.fn.ax.topDown`](cp.fn.ax.md#topDown).</li></ul> |
| **Returns**                                 | <ul><li>A function that will return the first child of the given `uivalue` that matches the given `predicate`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [children](#children)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.children(value) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the children of the given `value`.                                                                     |
| **Parameters**                              | <ul><li>value - The value to get the children from.</li></ul> |
| **Returns**                                 | <ul><li>The children of the given `value` or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li> If it is a `table` with a `AXChildren` field, the `AXChildren` field is returned.</li><li> If it is a `table` with a `UI` field, the `UI` field is called and the result is returned.</li><li> If it is a `table` with a `children` function, it is called and the result is returned.</li><li> If it is a `table` with a `children` field, the `children` field is returned.</li><li> Otherwise, if it's any `table`, that table is returned.</li></ul>                |

| [childrenMatching](#childrenMatching)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.childrenMatching(predicate[, comparator]) -> table of axuielement | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the children of the given `uivalue` that match the given `predicate`.                                                                     |
| **Parameters**                              | <ul><li>predicate - The predicate to match.</li><li>comparator - An optional comparator to use. Defaults to [topDown](#topDown).</li></ul> |
| **Returns**                                 | <ul><li>A table of `axuielement`s that match the given `predicate`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [childrenTopDown](#childrenTopDown)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.childrenTopDown(value) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the children of the given `value` sorted in [topDown](#topDown) order.                                                                     |
| **Parameters**                              | <ul><li>value - The value to get the children from.</li></ul> |
| **Returns**                                 | <ul><li>The children of the given `value`, sorted [topDown](#topDown), or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [childWith](#childWith)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.childWith(attribute, value) -> function(uivalue) -> axuielement | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that will return the first child of the given `uivalue` that has the given `attribute` set to `value`.                                                                     |
| **Parameters**                              | <ul><li>attribute - The attribute to check.</li><li>value - The value to check.</li></ul> |
| **Returns**                                 | <ul><li>A function that will return the first child of the given `uivalue` that has the given `attribute` set to `value`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hasAttributeValue](#hasAttributeValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.hasAttributeValue(attribute, value) -> function(uivalue) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that returns `true` if the given `uivalue` has the given `attribute` set to the `value`.                                                                     |
| **Parameters**                              | <ul><li>attribute - The attribute to check for.</li><li>value - The value to check for.</li></ul> |
| **Returns**                                 | <ul><li>A function that accepts an `axuielement` [uivalue](#uielement) which in turn returns `true` if the `uivalue` has the given `attribute` set to the `value`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hasRole](#hasRole)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.hasRole(role) -> function(uivalue) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that returns `true` if the given `uivalue` has the given `AXRole`.                                                                     |
| **Parameters**                              | <ul><li>role - The role to check for.</li></ul> |
| **Returns**                                 | <ul><li>A function that accepts an `axuielement` [uivalue](#uielement) which in turn returns `true` if the `uivalue` has the given `AXRole`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [init](#init)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.init(elementType, ...) -> function(parent, uiFinder) -> cp.ui.Element`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a function that will create a new `cp.ui.Element` of the given `elementType` with the given `parent` and `uiFinder`.                                                                     |
| **Parameters**                              | <ul><li>elementType - The type of `cp.ui.Element` to create.</li><li>... - Any additional arguments to pass to the `elementType` constructor.</li></ul> |
| **Returns**                                 | <ul><li>A function that will create a new `cp.ui.Element` of the given `elementType` with the given `parent` and `uiFinder`.</li></ul>          |
| **Notes**                                   | <ul><li>Any additional arguments will be passed to the `elementType` constructor after the `parent` and `uiFinder`.</li><li>If any of the additional arguments are a `function`, they will be called with the `parent` and `uiFinder` as the first two arguments when being passed into the constructor.</li></ul>                |

| [initElements](#initElements)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.initElements(parent, elementsUiFinder, elementInits) -> table of cp.ui.Element`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a table of `cp.ui.Element`s of the given `elementInits` with the given `parent` and `uiFinder`. Any additional elements provided by `elementsUiFinder` which don't have a matching `elementInits` will be ignored.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent `cp.ui.Element` to use for the created `cp.ui.Element`s.</li><li>elementsUiFinder - A `function` or `cp.prop` that will return a table of `axuielement`s to use as the elements for the created `cp.ui.Element`s.</li><li>elementInits - A table of `function`s that will create `cp.ui.Element`s.</li></ul> |
| **Returns**                                 | <ul><li>A table of `cp.ui.Element`s.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [isUIElement](#isUIElement)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.isUIElement(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if the `value` is an `axuielement`                                                                     |
| **Parameters**                              | <ul><li>value - The value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the value is an `axuielement`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [isValid](#isValid)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.isValid(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the axuilelement is still valid - that is, still active in the UI.                                                                     |
| **Parameters**                              | <ul><li>element  - the axuielement</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is valid.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [leftToRight](#leftToRight)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.leftToRight(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is left of element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is left of `b`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [matchesIf](#matchesIf)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.matchesIf(...) -> function(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a `function` which will return `true` if the `value` is either an `axuielement`, an [Element](cp.ui.Element.md), or a `callable` (function) that returns an `axuielement` that matches the predicate.                                                                     |
| **Parameters**                              | <ul><li>... - Any number of predicates, all of which must return a `truthy` value for the `value` to match.</li></ul> |
| **Returns**                                 | <ul><li>A `function` which will return `true` if the `value` is a match.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [narrowToWide](#narrowToWide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.narrowToWide(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is narrower than element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is narrower than `b`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [performAction](#performAction)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.performAction(action) -> function(uivalue) -> axuielement | false | nil, errString`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs the given `action` on the given `uivalue`.                                                                     |
| **Parameters**                              | <ul><li>action - The action to perform (e.g. "AXPress")</li></ul> |
| **Returns**                                 | <ul><li>A function that accepts an `axuielement` [uivalue](#uielement) which in turn returns the result of performing the action.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [prop](#prop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.prop(uiFinder, attributeName[, settable]) -> cp.prop`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.prop` which will find the `hs.axuielement` via the `uiFinder` and get/set the value (if settable is `true`).                                                                     |
| **Parameters**                              | <ul><li>uiFinder - the `cp.prop` or `function` which will retrieve the current `hs.axuielement`.</li><li>attributeName - the `AX` atrribute name the property links to.</li><li>settable - Defaults to `false`. If `true`, the property will also be settable.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` for the attribute.</li></ul>          |
| **Notes**                                   | <ul><li>If the `uiFinder` is a `cp.prop`, it will be monitored for changes, making the resulting `prop` "live".</li></ul>                |

| [rightToLeft](#rightToLeft)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.rightToLeft(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is right of element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is right of `b`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setAttribute](#setAttribute)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.setAttribute(name) -> function(newValue, uivalue) -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function which will set the `AX` value of `uivalue` (if present) the given `name` from the given `value`. If the `uivalue` is not present, it will not attempt to set the new value.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the attribute to set. Eg. `"AXValue"`.</li></ul> |
| **Returns**                                 | <ul><li>A function which will set the `AX` value of the given `name` from the given `uivalue`.</li><li>The `newValue` will be passed to the `setAttributeValue` method of the `uivalue`.</li><li>The `uivalue` will attempt to be resolved via [uielement](#uielement).</li><li>This is safe to use as a [cp.prop:mutate](cp.prop.md#mutate) setter, since it will take the `newValue` and `uivalue` in the correct order and resolve the `uivalue`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [shortToTall](#shortToTall)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.shortToTall(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is shorter than element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is shorter than `b`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [topDown](#topDown)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.topDown(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Compares two `axuielement` values, ordering them linearly, from top-to-bottom, left-to-right. See the Notes section for more information.                                                                     |
| **Parameters**                              | <ul><li>a - The first `axuielement` to compare.</li><li>b - The second `axuielement` to compare.</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is above or to the left of `b` in the UI, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul><li>1. If both elements intersect vertically by more than 50% their heights, they are considered to be on the same line.</li><li>2. If not on the same line, the element whose bottom edge is highest is before the other.</li><li>3. If they are both still equal, the left-most element is before the other.</li><li>4. If they are both still equal, the shortest element is before the other.</li><li>5. If they are both still equal, the narrowest element is before the other.</li></ul>                |

| [topToBottom](#topToBottom)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.topToBottom(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is above element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is above `b`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [topToBottomBaseAligned](#topToBottomBaseAligned)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.topToBottomBaseAligned(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if the base of element `a` is above the base of element `b`, based on linear vertical alignment. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is above `b`.</li></ul>          |
| **Notes**                                   | <ul><li>Two elements are considered to be aligned if the intersection of the height is at least 50% of the height of both elements.</li></ul>                |

| [uielement](#uielement)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.uielement(uivalue) -> axuielement | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the axuielement for the given `uivalue`.                                                                     |
| **Parameters**                              | <ul><li>uivalue - The value to get the `axuielement` from.</li></ul> |
| **Returns**                                 | <ul><li>The `axuielement` for the given `value` or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li> If the `value` is an `axuielement`, it is returned.</li><li> If the `value` is a table with a callable `UI` field, the `UI` field is called and the result is returned.</li><li> If the `value` is callable, it is called and the result is returned.</li><li> Otherwise, `nil` is returned.</li></ul>                |

| [uielementList](#uielementList)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ax.uielementList(value) -> table of axuielement | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the `axuielement` list for the given `value`, if available.                                                                     |
| **Parameters**                              | <ul><li>value - The value to get the `axuielement` list from.</li></ul> |
| **Returns**                                 | <ul><li>The `axuielement` list for the given `value` or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li> If the `value` is a `table` with a `UI` field, the `UI` field is called and the result is returned if it is a list.</li><li> If the `value` is callable (i.e. a `function`), it is called and the result is returned if it is a list.</li><li> If the `value` is a `table`, it is returned.</li><li> Otherwise, `nil` is returned.</li></ul>                |


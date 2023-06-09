# cp.ui.axutils

Utility functions to support `hs.axuielement`.

---

## Submodules
 * [cp.ui.axutils.compare](cp.ui.axutils.compare.md)
 * [cp.ui.axutils.match](cp.ui.axutils.match.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [cache](#cache)
 * [childAtIndex](#childatindex)
 * [childFromBottom](#childfrombottom)
 * [childFromLeft](#childfromleft)
 * [childFromRight](#childfromright)
 * [childFromTop](#childfromtop)
 * [childInColumn](#childincolumn)
 * [childIndex](#childindex)
 * [childMatching](#childmatching)
 * [children](#children)
 * [childrenAbove](#childrenabove)
 * [childrenBelow](#childrenbelow)
 * [childrenInColumn](#childrenincolumn)
 * [childrenInLine](#childreninline)
 * [childrenInNextLine](#childreninnextline)
 * [childrenMatching](#childrenmatching)
 * [childrenWith](#childrenwith)
 * [childrenWithRole](#childrenwithrole)
 * [childWith](#childwith)
 * [childWithDescription](#childwithdescription)
 * [childWithID](#childwithid)
 * [childWithRole](#childwithrole)
 * [childWithTitle](#childwithtitle)
 * [hasAttributeValue](#hasattributevalue)
 * [hasChild](#haschild)
 * [isValid](#isvalid)
 * [prop](#prop)
 * [snapshot](#snapshot)
 * [valueOf](#valueof)
 * [withAttributeValue](#withattributevalue)
 * [withRole](#withrole)
 * [withTitle](#withtitle)
 * [withValue](#withvalue)


---

## API Documentation

#### Functions


### [cache](#cache)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.cache(source, key, finderFn[, verifyFn]) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the cached value at the `source[key]` is a valid axuielement. If not it will call the provided `finderFn()` function (with no arguments), cache the result and return it.                                                                     |
| **Parameters**                              | <ul><li>source       - the table containing the cache</li><li>key          - the key the value is cached under</li><li>finderFn     - the function which will return the element if not found.</li><li>[verifyFn]   - an optional function which will check the cached element to verify it is still valid.</li></ul> |
| **Returns**                                 | <ul><li>The valid cached value.</li></ul>          |
| **Notes**                                   | <ul><li>If the optional `verifyFn` is provided, it will be called to check that the cached value is still valid. It is passed a single parameter (the axuielement) and is expected to return `true` or `false`.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 654](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L654) |

---


### [childAtIndex](#childatindex)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childAtIndex(element, index, compareFn[, matcherFn]) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Searches for the child element which is at number `index` when sorted using the `compareFn`.                                                                     |
| **Parameters**                              | <ul><li>element      - the axuielement or array of axuielements</li><li>index        - the index number of the child to find.</li><li>compareFn    - a function to compare the elements.</li><li>matcherFn    - an optional function which is passed each child and returns `true` if the child should be processed.</li></ul> |
| **Returns**                                 | <ul><li>The child, or `nil` if the index is larger than the number of children.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 385](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L385) |

---


### [childFromBottom](#childfrombottom)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childFromBottom(element, index, matcherFn) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Searches for the child element which is at number `index` when sorted bottom-to-top.                                                                     |
| **Parameters**                              | <ul><li>element      - the axuielement or array of axuielements</li><li>index        - the index number of the child to find.</li><li>matcherFn    - an optional function which is passed each child and returns `true` if the child should be processed.</li></ul> |
| **Returns**                                 | <ul><li>The child, or `nil` if the index is larger than the number of children.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 528](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L528) |

---


### [childFromLeft](#childfromleft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childFromLeft(element, index[, matcherFn]) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Searches for the child element which is at number `index` when sorted left-to-right.                                                                     |
| **Parameters**                              | <ul><li>element      - the axuielement or array of axuielements</li><li>index        - the index number of the child to find.</li><li>matcherFn    - an optional function which is passed each child and returns `true` if the child should be processed.</li></ul> |
| **Returns**                                 | <ul><li>The child, or `nil` if the index is larger than the number of children.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 483](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L483) |

---


### [childFromRight](#childfromright)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childFromRight(element, index[, matcherFn]) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Searches for the child element which is at number `index` when sorted right-to-left.                                                                     |
| **Parameters**                              | <ul><li>element      - the axuielement or array of axuielements</li><li>index        - the index number of the child to find.</li><li>matcherFn    - an optional function which is passed each child and returns `true` if the child should be processed.</li></ul> |
| **Returns**                                 | <ul><li>The child, or `nil` if the index is larger than the number of children.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 498](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L498) |

---


### [childFromTop](#childfromtop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childFromTop(element, index[, matcherFn]) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Searches for the child element which is at number `index` when sorted top-to-bottom.                                                                     |
| **Parameters**                              | <ul><li>element      - the axuielement or array of axuielements</li><li>index        - the index number of the child to find.</li><li>matcherFn    - an optional function which is passed each child and returns `true` if the child should be processed.</li></ul> |
| **Returns**                                 | <ul><li>The child, or `nil` if the index is larger than the number of children.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 513](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L513) |

---


### [childInColumn](#childincolumn)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childInColumn(element, role, startIndex, childIndex) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds the children for an element, then checks to see if they match the supplied role. It then compares the vertical position data of all matching children and returns an element defined by the `childIndex`, which lines up vertially with the element defined by the `startIndex`.                                                                     |
| **Parameters**                              | <ul><li>element     - The element to retrieve the children from.</li><li>role        - The required role as a string.</li><li>startIndex  - A number which defines the index of the first element to use.</li><li>childIndex  - A number which defines the index of the element to return.</li></ul> |
| **Returns**                                 | <ul><li>The `axuielement` if it matches, otherwise `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 133](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L133) |

---


### [childIndex](#childindex)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childIndex(element) -> number or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds the index of the specified child element, if it is present. If not, `nil` is returned.                                                                     |
| **Parameters**                              | <ul><li>element - The `axuielement` to find the index of.</li></ul> |
| **Returns**                                 | <ul><li>The index (`1` or higher) of the `element`, or `nil` if it was not found.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 603](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L603) |

---


### [childMatching](#childmatching)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childMatching(element, matcherFn[, index]) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | This searches for the first child of the specified element for which the provided function returns `true`. The function will receive one parameter - the current child.                                                                     |
| **Parameters**                              | <ul><li>element      - the axuielement</li><li>matcherFn    - the function which checks if the child matches the requirements.</li><li>index        - the number of matching child to return. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>The first matching child, or nil if none was found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 354](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L354) |

---


### [children](#children)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.children(element[, compareFn]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds the children for the element. If it is an `hs.axuielement`, it will attempt to get the `AXChildren` attribute. If it is a table with a `children` function, that will get called. If no children exist, an empty table will be returned.                                                                     |
| **Parameters**                              | <ul><li>element      - The element to retrieve the children of.</li><li>compareFn    - Optional function to use to sort the order of the returned children.</li></ul> |
| **Returns**                                 | <ul><li>a table of children</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 149](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L149) |

---


### [childrenAbove](#childrenabove)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childrenAbove(element, bottomElement) -> table of axuielement or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds the list of `axuielement` children from the `element` which are above the specified `bottomElement`. If the `element` is `nil`, `nil` is returned. If the `topElement` is `nil` all children are returned.                                                                     |
| **Parameters**                              | <ul><li>element - The `axuielement` to find the children of.</li><li>topElement - The `axuielement` that the other children must be above.</li></ul> |
| **Returns**                                 | <ul><li>The table of `axuielements` that are above, or `nil` if the element is not available.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 197](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L197) |

---


### [childrenBelow](#childrenbelow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childrenBelow(element, topElement) -> table of axuielement or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds the list of `axuielement` children from the `element` which are below the specified `topElement`. If the `element` is `nil`, `nil` is returned. If the `topElement` is `nil` all children are returned.                                                                     |
| **Parameters**                              | <ul><li>element - The `axuielement` to find the children of.</li><li>topElement - The `axuielement` that the other children must be below.</li></ul> |
| **Returns**                                 | <ul><li>The table of `axuielements` that are below, or `nil` if the element is not available.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 183](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L183) |

---


### [childrenInColumn](#childrenincolumn)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childrenInColumn(element, role, startIndex) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds the children for an element, then checks to see if they match the supplied role. It then compares the vertical position data of all matching children and returns a table with only the elements that line up to the element defined by the startIndex.                                                                     |
| **Parameters**                              | <ul><li>element     - The element to retrieve the children from.</li><li>role        - The required role as a string.</li><li>startIndex  - A number which defines the index of the first element to use.</li></ul> |
| **Returns**                                 | <ul><li>The table of `axuielement` objects, otherwise `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L93) |

---


### [childrenInLine](#childreninline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childrenInLine(element) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table of children that are all in the same family and line as the supplied element.                                                                     |
| **Parameters**                              | <ul><li>element     - The base element.</li></ul> |
| **Returns**                                 | <ul><li>The table of `axuielement` objects, otherwise `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 39](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L39) |

---


### [childrenInNextLine](#childreninnextline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childrenInNextLine(element) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table of children that are in the next line in relation to the supplied element. Scrollbars will be ignored.                                                                     |
| **Parameters**                              | <ul><li>element - The base element.</li></ul> |
| **Returns**                                 | <ul><li>The table of `axuielement` objects, otherwise `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 65](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L65) |

---


### [childrenMatching](#childrenmatching)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childrenMatching(element, matcherFn) -> { axuielement }`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | This searches for all children of the specified element for which the provided function returns `true`. The function will receive one parameter - the current child.                                                                     |
| **Parameters**                              | <ul><li>element  - the axuielement</li><li>matcherFn    - the function which checks if the child matches the requirements.</li></ul> |
| **Returns**                                 | <ul><li>All matching children, or `nil` if none was found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 572](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L572) |

---


### [childrenWith](#childrenwith)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childrenWith(element, name, value) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | This searches for all children of the specified element which has an attribute with the matching name and value.                                                                     |
| **Parameters**                              | <ul><li>element  - the axuielement</li><li>name     - the name of the attribute</li><li>value    - the value of the attribute</li></ul> |
| **Returns**                                 | <ul><li>All matching children, or `nil` if none was found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 543](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L543) |

---


### [childrenWithRole](#childrenwithrole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childrenWithRole(element, value) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | This searches for all children of the specified element which has an `AXRole` attribute with the matching value.                                                                     |
| **Parameters**                              | <ul><li>element  - the axuielement</li><li>value    - the value of the attribute</li></ul> |
| **Returns**                                 | <ul><li>All matching children, or `nil` if none was found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 558](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L558) |

---


### [childWith](#childwith)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childWith(element, name, value) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | This searches for the first child of the specified element which has an attribute with the matching name and value.                                                                     |
| **Parameters**                              | <ul><li>element  - the axuielement</li><li>name     - the name of the attribute</li><li>value    - the value of the attribute</li></ul> |
| **Returns**                                 | <ul><li>The first matching child, or nil if none was found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 283](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L283) |

---


### [childWithDescription](#childwithdescription)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childWithDescription(element, value) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | This searches for the first child of the specified element which has `AXDescription` with the specified value.                                                                     |
| **Parameters**                              | <ul><li>element  - the axuielement</li><li>value    - the value</li></ul> |
| **Returns**                                 | <ul><li>The first matching child, or `nil` if none was found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 340](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L340) |

---


### [childWithID](#childwithid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childWithID(element, value) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | This searches for the first child of the specified element which has `AXIdentifier` with the specified value.                                                                     |
| **Parameters**                              | <ul><li>element  - the axuielement</li><li>value    - the value</li></ul> |
| **Returns**                                 | <ul><li>The first matching child, or `nil` if none was found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 298](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L298) |

---


### [childWithRole](#childwithrole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childWithRole(element, value) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | This searches for the first child of the specified element which has `AXRole` with the specified value.                                                                     |
| **Parameters**                              | <ul><li>element  - the axuielement</li><li>value    - the value</li></ul> |
| **Returns**                                 | <ul><li>The first matching child, or `nil` if none was found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 312](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L312) |

---


### [childWithTitle](#childwithtitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.childWithTitle(element, value) -> axuielement`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | This searches for the first child of the specified element which has `AXTitle` with the specified value.                                                                     |
| **Parameters**                              | <ul><li>element	- the axuielement</li><li>value	- the value</li></ul> |
| **Returns**                                 | <ul><li>The first matching child, or `nil` if none was found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 326](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L326) |

---


### [hasAttributeValue](#hasattributevalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.hasAttributeValue(element, name, value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element has a specific value.                                                                     |
| **Parameters**                              | <ul><li>element  - the `axuielement`</li><li>name     - the name of the attribute</li><li>value    - the value of the attribute</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `element` has the supplied attribute value, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 211](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L211) |

---


### [hasChild](#haschild)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.hasChild(element, matcherFn) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the axuielement has a child that passes the `matcherFn`.                                                                     |
| **Parameters**                              | <ul><li>element - the `axuielement` to check.</li><li>matcherFn - the `function` that accepts an `axuielement` and returns a `boolean`</li></ul> |
| **Returns**                                 | <ul><li>`true` if any child matches, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 589](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L589) |

---


### [isValid](#isvalid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.isValid(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the axuilelement is still valid - that is, still active in the UI.                                                                     |
| **Parameters**                              | <ul><li>element  - the axuielement</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is valid.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 624](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L624) |

---


### [prop](#prop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.prop(uiFinder, attributeName[, settable]) -> cp.prop`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.prop` which will find the `hs.axuielement` via the `uiFinder` and get/set the value (if settable is `true`).                                                                     |
| **Parameters**                              | <ul><li>uiFinder      - the `cp.prop` or `function` which will retrieve the current `hs.axuielement`.</li><li>attributeName - the `AX` atrribute name the property links to.</li><li>settable      - Defaults to `false`. If `true`, the property will also be settable.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` for the attribute.</li></ul>          |
| **Notes**                                   | <ul><li>If the `uiFinder` is a `cp.prop`, it will be monitored for changes, making the resulting `prop` "live".</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 761](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L761) |

---


### [snapshot](#snapshot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.snapshot(element, filename, elementFrame) -> hs.image`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Takes a snapshot of the specified `axuielement` and returns it. If the `filename` is provided it also saves the file to the specified location.                                                                     |
| **Parameters**                              | <ul><li>element      - The `axuielement` to snap.</li><li>filename     - (optional) The path to save the image as a PNG file.</li><li>elementFrame - (optional) The hs.geometry frame of what you want to capture</li></ul> |
| **Returns**                                 | <ul><li>An `hs.image` file, or `nil` if the element could not be snapped.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 689](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L689) |

---


### [valueOf](#valueof)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.valueOf(element, name[, default]) -> anything`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the named `AX` attribute value, or the `default` if it is empty.                                                                     |
| **Parameters**                              | <ul><li>element - the `axuielement` to retrieve the attribute value for.</li><li>attribute - The attribute name (e.g. "AXValue")</li><li>default - (optional) if provided, this will be returned if the attribute is `nil`.</li></ul> |
| **Returns**                                 | <ul><li>The attribute value, or the `default` if none is found.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 22](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L22) |

---


### [withAttributeValue](#withattributevalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.withAttributeValue(element, name, value) -> hs.axuielement | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element has an attribute value with the specified `name` and `value`. If so, the element is returned, otherwise `nil`.                                                                     |
| **Parameters**                              | <ul><li>element       - The element to check</li><li>name          - The name of the attribute to check</li><li>value         - The value of the attribute</li></ul> |
| **Returns**                                 | <ul><li>The `axuielement` if it matches, otherwise `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 226](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L226) |

---


### [withRole](#withrole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.withRole(element, role) -> hs.axuielement | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element has an "AXRole" attribute with the specified `role`. If so, the element is returned, otherwise `nil`.                                                                     |
| **Parameters**                              | <ul><li>element       - The element to check</li><li>role          - The required role</li></ul> |
| **Returns**                                 | <ul><li>The `axuielement` if it matches, otherwise `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 241](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L241) |

---


### [withTitle](#withtitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.withTitle(element, title) -> hs.axuielement | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element has an "AXTitle" attribute with the specified `title`. If so, the element is returned, otherwise `nil`.                                                                     |
| **Parameters**                              | <ul><li>element       - The element to check</li><li>title         - The required title</li></ul> |
| **Returns**                                 | <ul><li>The `axuielement` if it matches, otherwise `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 269](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L269) |

---


### [withValue](#withvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.withValue(element, value) -> hs.axuielement | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element has an "AXValue" attribute with the specified `value`. If so, the element is returned, otherwise `nil`.                                                                     |
| **Parameters**                              | <ul><li>element       - The element to check</li><li>value         - The required value</li></ul> |
| **Returns**                                 | <ul><li>The `axuielement` if it matches, otherwise `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 255](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L255) |

---


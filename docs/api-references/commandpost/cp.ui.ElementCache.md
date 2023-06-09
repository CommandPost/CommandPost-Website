# cp.ui.ElementCache

Provides caching for [Element](cp.ui.Element.md) subclasses that want to cache children.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [ElementCache](#elementcache)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [cachedElement](#cachedelement)
 * [cacheElement](#cacheelement)
 * [clean](#clean)
 * [fetchElement](#fetchelement)
 * [fetchElements](#fetchelements)
 * [reset](#reset)


---

## API Documentation

#### Constructors


### [ElementCache](#elementcache)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ElementCache(parent[, createFn])`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates and returns a new `ElementCache`, with the specified parent and function which will create new elements on demand. The `createFn` has the signature of `function(parent, ui) -> cp.ui.Element`, and should take the parent provided here and the `axuielement` and return a new `Element` subclass.                                                                     |
| **Parameters**                              | <ul><li>parent - the parent [Element](cp.ui.Element.md) that contains the cached items.</li><li>createFn - a function that will create new `Element` subclasses based on cached `axuielement` values.</li></ul> |
| **Returns**                                 | <ul><li>The new `ElementCache`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Methods


### [cachedElement](#cachedelement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ElementCache:cachedElement(ui) -> cp.ui.Element or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the cached [Element](cp.ui.Element.md), if it is present.                                                                     |
| **Parameters**                              | <ul><li>ui - The `axuielement` it is linked to. If not provided, it will be fetched by calling `Element:UI()`.</li></ul> |
| **Returns**                                 | <ul><li>`cp.ui.Element` or `nil`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [cacheElement](#cacheelement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ElementCache:cacheElement(element[, ui]) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Caches the provided [Element](cp.ui.Element.md).                                                                     |
| **Parameters**                              | <ul><li>element - The [Element](cp.ui.Element.md)</li><li>ui - The `axuielement` it is linked to. If not provided, it will be fetched by calling `Element:UI()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [clean](#clean)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ElementCache:clean()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears the cache of any invalid (aka dead) items.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [fetchElement](#fetchelement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ElementCache:fetchElement(ui) -> cp.ui.Element or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Retrieves the matching [Element](cp.ui.Element.md) instance from the cache. If none exists and the `createFn` was provided in the constructor, it will be used to create a new one, which is automatically cached for future reference.                                                                     |
| **Parameters**                              | <ul><li>ui - The `axuielement` being fetched for.</li></ul> |
| **Returns**                                 | <ul><li>`cp.ui.Element` or `nil`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [fetchElements](#fetchelements)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ElementCache:fetchElements(uis) -> table of cp.ui.Elements or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Fetches a list of [Element](cp.ui.Element.md) instances linked to the provided `axuielement` list.                                                                     |
| **Parameters**                              | <ul><li>uis	- A `table` of `axuielement` values.</li></ul> |
| **Returns**                                 | <ul><li>A `table` of [Element](cp.ui.Element.md) values.</li></ul>          |
| **Notes**                                   | <ul><li>If any of the provided `axuielement` values are either not from the parent, or no longer valid, a `nil` value will be stored in the matching index. Note that in that case, this will break useage of `ipairs` due to leaving holes in the list.</li></ul> |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ElementCache:reset() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Removes all cached items from the cache.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


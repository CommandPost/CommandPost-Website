# cp.collect.List

Lists are similar `tables` which can contain `nil` items without shortening the length.
They also have a few additional methods to assist with managing the size.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [of](#of)
 * [sized](#sized)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [size](#size)
 * [trim](#trim)


---

## API Documentation

#### Constructors


### [of](#of)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.List.of(...) -> cp.collect.List`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `List` with the specified items init.                                                                     |
| **Parameters**                              | <ul><li>...       - The items to put in the list, in order.</li></ul> |
| **Returns**                                 | <ul><li>The new `List` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [sized](#sized)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.List.sized([size[, defaultValue]]) -> cp.collect.List`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `List` with the specified size.                                                                     |
| **Parameters**                              | <ul><li>size          - The size of the list. Defaults to `0`.</li><li>defaultValue  - If specified, all items in the list will be initialised to the default value.</li></ul> |
| **Returns**                                 | <ul><li>The new `List` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Methods


### [size](#size)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.List:size([newSize]) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns and/or sets the current size of the list.                                                                     |
| **Parameters**                              | <ul><li>newSize       - if provided, sets the new size of the list. Any values contained above the new size are set to `nil`.</li></ul> |
| **Returns**                                 | <ul><li>The size of the list.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [trim](#trim)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.List:trim([minSize]) -> cp.collect.List`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Trims the current `List` to only contain trailing values that are not `nil`.                                                                     |
| **Parameters**                              | <ul><li>minSize   - If provided, the minimum size to trim down to. Defaults to `0`.</li></ul> |
| **Returns**                                 | <ul><li>The same `List` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


# cp.collect.LazyList

A LazyList is a list that is lazily evaluated. It will dynamically create items on demand,
and may cache the results if configured to do so.

It works by requiring two functions which provide information about the length and item at a given index.
The `len` function is called when the length of the list is required, and the `get` function is called when
an item is required.

This allows the list to be created lazily, and the items to be created on demand. That is useful for
lists that are expensive to create, but are only required when they are actually used.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)


---

## API Documentation

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.LazyList.new(lenFn, getFn[, options]) -> cp.collect.LazyList`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `LazyList` with the provided `lenFn` and `getFn`, and a table with options.                                                                     |
| **Parameters**                              | <ul><li>lenFn - A function that returns the length of the list.</li><li>getFn - A function that returns the item at the specified index.</li><li>options - A table of options.</li></ul> |
| **Returns**                                 | <ul><li>A new `LazyList` instance.</li></ul>          |
| **Notes**                                   | <ul><li>The `lenFn` function has the signature `function() -> number`.</li><li>The `getFn` function has the signature `function(index) -> item`.</li><li>The `options` table has the following keys:</li><li> `cached` - A boolean indicating whether the list should cache the results of the `getFn`. Defaults to `false`.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/collect/LazyList.lua line 17](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/LazyList.lua#L17) |

---


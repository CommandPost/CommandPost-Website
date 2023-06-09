# cp.fn.table

Table-related functions.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [this](#this)

**Functions** - _API calls offered directly by the extension_
 * [call](#call)
 * [copy](#copy)
 * [filter](#filter)
 * [first](#first)
 * [firstMatching](#firstmatching)
 * [flatten](#flatten)
 * [get](#get)
 * [hasAtLeast](#hasatleast)
 * [hasAtMost](#hasatmost)
 * [hasExactly](#hasexactly)
 * [hasLessThan](#haslessthan)
 * [hasMoreThan](#hasmorethan)
 * [hasValue](#hasvalue)
 * [imap](#imap)
 * [isEmpty](#isempty)
 * [isNotEmpty](#isnotempty)
 * [last](#last)
 * [map](#map)
 * [matchesExactItems](#matchesexactitems)
 * [mutate](#mutate)
 * [set](#set)
 * [size](#size)
 * [sort](#sort)
 * [split](#split)
 * [zip](#zip)
 * [zipAll](#zipall)


---

## API Documentation

#### Constants


### [this](#this)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.this -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `table` which can have any named property key, which will be a function combinator that expects to receive a `table` and returns the value at the specified key. These are essentially equivalent statements: `cp.fn.table.this.key` and `cp.fn.table.get "key"`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 164](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L164) |

---

#### Functions


### [call](#call)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.call(name, ...) -> function(table) -> ...`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calls a function on a table with the specified `name`. Any additional arguments are passed to the function.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the function to call.</li><li>... - Any additional arguments to pass to the function.</li></ul> |
| **Returns**                                 | <ul><li>The function that will accept a table and call the function with the specified `name`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 23](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L23) |

---


### [copy](#copy)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.copy(table) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a shallow copy of the specified table using `pairs`.                                                                     |
| **Parameters**                              | <ul><li>table - The table to copy.</li></ul> |
| **Returns**                                 | <ul><li>A copy of the table.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L46) |

---


### [filter](#filter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.filter([predicate]) -> function(table) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that filters a table using the given predicate. If the predicate is not provided, the original table will be returned unchanged.                                                                     |
| **Parameters**                              | <ul><li>predicate - A function that takes a value and returns true if the value should be included in the filtered table.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns a filtered table.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L63) |

---


### [first](#first)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.first(table) -> any | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the first value in the table.                                                                     |
| **Parameters**                              | <ul><li>table - The table to get the first value from.</li></ul> |
| **Returns**                                 | <ul><li>The first value in the table. May be `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 85](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L85) |

---


### [firstMatching](#firstmatching)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.firstMatching(predicate) -> function(table) -> any | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that will return the first value in the table that matches the predicate.                                                                     |
| **Parameters**                              | <ul><li>predicate - A function that will be passed each value in the table. If it returns `true`, the value will be returned.</li></ul> |
| **Returns**                                 | <ul><li>A function that will return the first value in the table that matches the predicate. May be `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 98](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L98) |

---


### [flatten](#flatten)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.flatten(t) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Flattens a table.                                                                     |
| **Parameters**                              | <ul><li>t - The table to flatten.</li></ul> |
| **Returns**                                 | <ul><li>A new table with all values flattened.</li></ul>          |
| **Notes**                                   | <ul><li>This function will not flatten nested tables.</li><li>If the table has an `n` field, it will be used as the length, instead of `#t`.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 117](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L117) |

---


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.get(key) -> function(table) -> any`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that returns the value at the specified key in a table.                                                                     |
| **Parameters**                              | <ul><li>key - The key to get the value for.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns the value at the specified key.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 149](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L149) |

---


### [hasAtLeast](#hasatleast)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.hasAtLeast(count) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that checks if the table has at least the given number of items.                                                                     |
| **Parameters**                              | <ul><li>count - The number of items to check for.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns `true` if the table has at least the given number of items, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 502](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L502) |

---


### [hasAtMost](#hasatmost)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.hasAtMost(count) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that checks if the table has at most the given number of items.                                                                     |
| **Parameters**                              | <ul><li>count - The number of items to check for.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns `true` if the table has at most the given number of items, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 517](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L517) |

---


### [hasExactly](#hasexactly)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.hasExactly(count) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that checks if the table has exactly the given number of items.                                                                     |
| **Parameters**                              | <ul><li>count - The number of items to check for.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns `true` if the table has exactly the given number of items, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 532](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L532) |

---


### [hasLessThan](#haslessthan)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.hasLessThan(count) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that checks if the table has less than the given number of items.                                                                     |
| **Parameters**                              | <ul><li>count - The number of items to check for.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns `true` if the table has less than the given number of items, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 562](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L562) |

---


### [hasMoreThan](#hasmorethan)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.hasMoreThan(count) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that checks if the table has more than the given number of items.                                                                     |
| **Parameters**                              | <ul><li>count - The number of items to check for.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns `true` if the table has more than the given number of items, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 547](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L547) |

---


### [hasValue](#hasvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.hasValue(key[, predicate]) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that checks if the table has a value at the specified `key`. If a predicate is provided, the value is checked using the predicate.                                                                     |
| **Parameters**                              | <ul><li>key - The value to check for.</li><li>predicate - An optional predicate to use to check the value.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns `true` if the table has the given value, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 577](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L577) |

---


### [imap](#imap)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.imap(fn, values) -> table of any | ...`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Maps a function over a table using `ipairs`. The function is passed the current `value` and the `key`.                                                                     |
| **Parameters**                              | <ul><li>fn - The function to map.</li><li>values - The table or list of arguments to map over.</li></ul> |
| **Returns**                                 | <ul><li>A table or list of the results of the function.</li></ul>          |
| **Notes**                                   | <ul><li>If the values are a table, the results will be a table. Otherwise, the results will be a vararg list.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 195](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L195) |

---


### [isEmpty](#isempty)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.isEmpty(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if the table is empty.                                                                     |
| **Parameters**                              | <ul><li>table - The table to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the table is empty, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 476](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L476) |

---


### [isNotEmpty](#isnotempty)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.isNotEmpty(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if the table is not empty.                                                                     |
| **Parameters**                              | <ul><li>table - The table to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the table is not empty, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 489](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L489) |

---


### [last](#last)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.last(table) -> any | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the last value in the table.                                                                     |
| **Parameters**                              | <ul><li>table - The table to get the last value from.</li></ul> |
| **Returns**                                 | <ul><li>The last value in the table. May be `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 220](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L220) |

---


### [map](#map)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.map(fn, t) -> table of any`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Maps a function over a table using `pairs`. The function is passed the current `value` and the `key`.                                                                     |
| **Parameters**                              | <ul><li>fn - The function to map.</li><li>t - The table arguments to map over.</li></ul> |
| **Returns**                                 | <ul><li>A table with the values updated via the function.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 257](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L257) |

---


### [matchesExactItems](#matchesexactitems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.matchesExactItems(...) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that will return `true` if the table exactly the number of items that match the provided list of predicates.                                                                     |
| **Parameters**                              | <ul><li>... - A list of predicates.</li></ul> |
| **Returns**                                 | <ul><li>A function that will return `true` if the table exactly the number of items that match the provided list of predicates.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 233](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L233) |

---


### [mutate](#mutate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.mutate(key) -> function(fn) -> function(table) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that accepts an immutible transformer function, which returns another function that accepts a table. When called, it will apply the transformation to the named `key` in the table.                                                                     |
| **Parameters**                              | <ul><li>key - The key to set.</li></ul> |
| **Returns**                                 | <ul><li>A function.</li></ul>          |
| **Notes**                                   | <ul><li>The returned function will mutate the table passed in, as well as returning it.</li><li>Example usage: `fn.table.mutate("foo")(function(value) return value + 1 end)({value = 1})`</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 275](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L275) |

---


### [set](#set)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.set(key, value) -> function(table) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that accepts a table and sets the value at the specified key.                                                                     |
| **Parameters**                              | <ul><li>key - The key to set.</li><li>value - The value to set.</li></ul> |
| **Returns**                                 | <ul><li>A function.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 297](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L297) |

---


### [size](#size)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.size(t) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the size of the table.                                                                     |
| **Parameters**                              | <ul><li>t - The table to get the size of.</li></ul> |
| **Returns**                                 | <ul><li>The size of the table.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 314](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L314) |

---


### [sort](#sort)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.sort(...) -> function(table) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that returns a function that accepts a table and returns a new table, sorted with the compare functions.                                                                     |
| **Parameters**                              | <ul><li>... - The list of compare functions to use, in order.</li></ul> |
| **Returns**                                 | <ul><li>A function.</li></ul>          |
| **Notes**                                   | <ul><li>The compare functions should take two arguments and return `true` if the first argument is less than the second.</li><li>The returned result will be a shallow copy of the original in a new table. The original table will not be modified.</li><li>If no compare functions are provided, the table will be sorted "natural" sorting order (`a < b`).</li><li>Example usage: `fn.table.sort(function(a, b) return a > b end)({1, 2, 3})`</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 327](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L327) |

---


### [split](#split)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.split(predicate) -> function(table) -> table of tables, table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that accepts a table and splits it into multiple tables whenever it encounters a value that matches the `predicate`. The final table is a list containing each table that was split, followed by a table containing the splitter values.                                                                     |
| **Parameters**                              | <ul><li>predicate - A function that will be passed each value in the table. If it returns `true`, the value will be returned.</li></ul> |
| **Returns**                                 | <ul><li>A function that accepts a table to split and returns a table of tables, followed by a table of splitter values</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 351](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L351) |

---


### [zip](#zip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.zip(lists) -> table | ...`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Zips a series of lists together, returning a list combining the values from the provided lists. The returned list will have the same length as the shortest list. Each sub-list will contain the values from the corresponding list in the argument list.                                                                     |
| **Parameters**                              | <ul><li>lists - A table or list of lists.</li></ul> |
| **Returns**                                 | <ul><li>A function which returns a list combining the values from the provided lists.</li></ul>          |
| **Notes**                                   | <ul><li>If a table is provided, a table is returned. If a vararg is provided, a vararg is returned.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 413](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L413) |

---


### [zipAll](#zipall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.zipAll(lists) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Zips a series of lists together, returning a list of lists. The returned list will have the same length as the longest list. Each sub-list will contain the values from the corresponding list in the argument list.                                                                     |
| **Parameters**                              | <ul><li>lists - A table or list of lists.</li></ul> |
| **Returns**                                 | <ul><li>A list of lists.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/fn/table.lua line 444](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/table.lua#L444) |

---


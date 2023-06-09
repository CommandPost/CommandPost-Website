# cp.fn.table

Table-related functions.

## API Overview
* Constants - Useful values which cannot be changed
 * [this](#this)
* Functions - API calls offered directly by the extension
 * [call](#call)
 * [copy](#copy)
 * [filter](#filter)
 * [first](#first)
 * [firstMatching](#firstMatching)
 * [flatten](#flatten)
 * [get](#get)
 * [hasAtLeast](#hasAtLeast)
 * [hasAtMost](#hasAtMost)
 * [hasExactly](#hasExactly)
 * [hasLessThan](#hasLessThan)
 * [hasMoreThan](#hasMoreThan)
 * [hasValue](#hasValue)
 * [imap](#imap)
 * [isEmpty](#isEmpty)
 * [isNotEmpty](#isNotEmpty)
 * [last](#last)
 * [map](#map)
 * [matchesExactItems](#matchesExactItems)
 * [mutate](#mutate)
 * [set](#set)
 * [size](#size)
 * [sort](#sort)
 * [split](#split)
 * [zip](#zip)
 * [zipAll](#zipAll)

## API Documentation

### Constants

| [this](#this)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.this -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `table` which can have any named property key, which will be a function combinator that expects to receive a `table` and returns the value at the specified key. These are essentially equivalent statements: `cp.fn.table.this.key` and `cp.fn.table.get "key"`.                                                                     |

### Functions

| [call](#call)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.call(name, ...) -> function(table) -> ...`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calls a function on a table with the specified `name`. Any additional arguments are passed to the function.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the function to call.</li><li>... - Any additional arguments to pass to the function.</li></ul> |
| **Returns**                                 | <ul><li>The function that will accept a table and call the function with the specified `name`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [copy](#copy)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.copy(table) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a shallow copy of the specified table using `pairs`.                                                                     |
| **Parameters**                              | <ul><li>table - The table to copy.</li></ul> |
| **Returns**                                 | <ul><li>A copy of the table.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [filter](#filter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.filter([predicate]) -> function(table) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that filters a table using the given predicate. If the predicate is not provided, the original table will be returned unchanged.                                                                     |
| **Parameters**                              | <ul><li>predicate - A function that takes a value and returns true if the value should be included in the filtered table.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns a filtered table.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [first](#first)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.first(table) -> any | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the first value in the table.                                                                     |
| **Parameters**                              | <ul><li>table - The table to get the first value from.</li></ul> |
| **Returns**                                 | <ul><li>The first value in the table. May be `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [firstMatching](#firstMatching)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.firstMatching(predicate) -> function(table) -> any | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that will return the first value in the table that matches the predicate.                                                                     |
| **Parameters**                              | <ul><li>predicate - A function that will be passed each value in the table. If it returns `true`, the value will be returned.</li></ul> |
| **Returns**                                 | <ul><li>A function that will return the first value in the table that matches the predicate. May be `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [flatten](#flatten)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.flatten(t) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Flattens a table.                                                                     |
| **Parameters**                              | <ul><li>t - The table to flatten.</li></ul> |
| **Returns**                                 | <ul><li>A new table with all values flattened.</li></ul>          |
| **Notes**                                   | <ul><li>This function will not flatten nested tables.</li><li>If the table has an `n` field, it will be used as the length, instead of `#t`.</li></ul>                |

| [get](#get)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.get(key) -> function(table) -> any`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that returns the value at the specified key in a table.                                                                     |
| **Parameters**                              | <ul><li>key - The key to get the value for.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns the value at the specified key.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hasAtLeast](#hasAtLeast)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.hasAtLeast(count) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that checks if the table has at least the given number of items.                                                                     |
| **Parameters**                              | <ul><li>count - The number of items to check for.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns `true` if the table has at least the given number of items, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hasAtMost](#hasAtMost)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.hasAtMost(count) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that checks if the table has at most the given number of items.                                                                     |
| **Parameters**                              | <ul><li>count - The number of items to check for.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns `true` if the table has at most the given number of items, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hasExactly](#hasExactly)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.hasExactly(count) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that checks if the table has exactly the given number of items.                                                                     |
| **Parameters**                              | <ul><li>count - The number of items to check for.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns `true` if the table has exactly the given number of items, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hasLessThan](#hasLessThan)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.hasLessThan(count) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that checks if the table has less than the given number of items.                                                                     |
| **Parameters**                              | <ul><li>count - The number of items to check for.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns `true` if the table has less than the given number of items, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hasMoreThan](#hasMoreThan)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.hasMoreThan(count) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that checks if the table has more than the given number of items.                                                                     |
| **Parameters**                              | <ul><li>count - The number of items to check for.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns `true` if the table has more than the given number of items, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hasValue](#hasValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.hasValue(key[, predicate]) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that checks if the table has a value at the specified `key`. If a predicate is provided, the value is checked using the predicate.                                                                     |
| **Parameters**                              | <ul><li>key - The value to check for.</li><li>predicate - An optional predicate to use to check the value.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns `true` if the table has the given value, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [imap](#imap)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.imap(fn, values) -> table of any | ...`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Maps a function over a table using `ipairs`. The function is passed the current `value` and the `key`.                                                                     |
| **Parameters**                              | <ul><li>fn - The function to map.</li><li>values - The table or list of arguments to map over.</li></ul> |
| **Returns**                                 | <ul><li>A table or list of the results of the function.</li></ul>          |
| **Notes**                                   | <ul><li>If the values are a table, the results will be a table. Otherwise, the results will be a vararg list.</li></ul>                |

| [isEmpty](#isEmpty)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.isEmpty(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if the table is empty.                                                                     |
| **Parameters**                              | <ul><li>table - The table to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the table is empty, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [isNotEmpty](#isNotEmpty)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.isNotEmpty(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if the table is not empty.                                                                     |
| **Parameters**                              | <ul><li>table - The table to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the table is not empty, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [last](#last)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.last(table) -> any | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the last value in the table.                                                                     |
| **Parameters**                              | <ul><li>table - The table to get the last value from.</li></ul> |
| **Returns**                                 | <ul><li>The last value in the table. May be `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [map](#map)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.map(fn, t) -> table of any`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Maps a function over a table using `pairs`. The function is passed the current `value` and the `key`.                                                                     |
| **Parameters**                              | <ul><li>fn - The function to map.</li><li>t - The table arguments to map over.</li></ul> |
| **Returns**                                 | <ul><li>A table with the values updated via the function.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [matchesExactItems](#matchesExactItems)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.matchesExactItems(...) -> function(table) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that will return `true` if the table exactly the number of items that match the provided list of predicates.                                                                     |
| **Parameters**                              | <ul><li>... - A list of predicates.</li></ul> |
| **Returns**                                 | <ul><li>A function that will return `true` if the table exactly the number of items that match the provided list of predicates.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [mutate](#mutate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.mutate(key) -> function(fn) -> function(table) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that accepts an immutible transformer function, which returns another function that accepts a table. When called, it will apply the transformation to the named `key` in the table.                                                                     |
| **Parameters**                              | <ul><li>key - The key to set.</li></ul> |
| **Returns**                                 | <ul><li>A function.</li></ul>          |
| **Notes**                                   | <ul><li>The returned function will mutate the table passed in, as well as returning it.</li><li>Example usage: `fn.table.mutate("foo")(function(value) return value + 1 end)({value = 1})`</li></ul>                |

| [set](#set)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.set(key, value) -> function(table) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that accepts a table and sets the value at the specified key.                                                                     |
| **Parameters**                              | <ul><li>key - The key to set.</li><li>value - The value to set.</li></ul> |
| **Returns**                                 | <ul><li>A function.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [size](#size)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.size(t) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the size of the table.                                                                     |
| **Parameters**                              | <ul><li>t - The table to get the size of.</li></ul> |
| **Returns**                                 | <ul><li>The size of the table.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [sort](#sort)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.sort(...) -> function(table) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that returns a function that accepts a table and returns a new table, sorted with the compare functions.                                                                     |
| **Parameters**                              | <ul><li>... - The list of compare functions to use, in order.</li></ul> |
| **Returns**                                 | <ul><li>A function.</li></ul>          |
| **Notes**                                   | <ul><li>The compare functions should take two arguments and return `true` if the first argument is less than the second.</li><li>The returned result will be a shallow copy of the original in a new table. The original table will not be modified.</li><li>If no compare functions are provided, the table will be sorted "natural" sorting order (`a < b`).</li><li>Example usage: `fn.table.sort(function(a, b) return a > b end)({1, 2, 3})`</li></ul>                |

| [split](#split)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.split(predicate) -> function(table) -> table of tables, table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that accepts a table and splits it into multiple tables whenever it encounters a value that matches the `predicate`. The final table is a list containing each table that was split, followed by a table containing the splitter values.                                                                     |
| **Parameters**                              | <ul><li>predicate - A function that will be passed each value in the table. If it returns `true`, the value will be returned.</li></ul> |
| **Returns**                                 | <ul><li>A function that accepts a table to split and returns a table of tables, followed by a table of splitter values</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [zip](#zip)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.zip(lists) -> table | ...`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Zips a series of lists together, returning a list combining the values from the provided lists. The returned list will have the same length as the shortest list. Each sub-list will contain the values from the corresponding list in the argument list.                                                                     |
| **Parameters**                              | <ul><li>lists - A table or list of lists.</li></ul> |
| **Returns**                                 | <ul><li>A function which returns a list combining the values from the provided lists.</li></ul>          |
| **Notes**                                   | <ul><li>If a table is provided, a table is returned. If a vararg is provided, a vararg is returned.</li></ul>                |

| [zipAll](#zipAll)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.table.zipAll(lists) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Zips a series of lists together, returning a list of lists. The returned list will have the same length as the longest list. Each sub-list will contain the values from the corresponding list in the argument list.                                                                     |
| **Parameters**                              | <ul><li>lists - A table or list of lists.</li></ul> |
| **Returns**                                 | <ul><li>A list of lists.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


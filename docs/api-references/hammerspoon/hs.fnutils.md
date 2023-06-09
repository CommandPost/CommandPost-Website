# hs.fnutils

Functional programming utility functions

## API Overview
* Functions - API calls offered directly by the extension
 * [concat](#concat)
 * [contains](#contains)
 * [copy](#copy)
 * [each](#each)
 * [every](#every)
 * [filter](#filter)
 * [find](#find)
 * [ieach](#ieach)
 * [ifilter](#ifilter)
 * [imap](#imap)
 * [indexOf](#indexOf)
 * [map](#map)
 * [mapCat](#mapCat)
 * [reduce](#reduce)
 * [some](#some)
 * [split](#split)
* Constructors - API calls which return an object, typically one that offers API methods
 * [cycle](#cycle)
 * [partial](#partial)
 * [sequence](#sequence)
 * [sortByKeys](#sortByKeys)
 * [sortByKeyValues](#sortByKeyValues)

## API Documentation

### Functions

| [concat](#concat)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.concat(table1, table2)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Join two tables together                                                                     |
| **Parameters**                              | <ul><li>table1 - A table containing some sort of data</li><li>table2 - A table containing some sort of data</li></ul> |
| **Returns**                                 | <ul><li>table1, with all of table2's elements added to the end of it</li></ul>          |
| **Notes**                                   | <ul><li>table2 cannot be a sparse table, see [http://www.luafaq.org/gotchas.html#T6.4](http://www.luafaq.org/gotchas.html#T6.4)</li></ul>                |

| [contains](#contains)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.contains(table, element) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Determine if a table contains a given object                                                                     |
| **Parameters**                              | <ul><li>table - A table containing some sort of data</li><li>element - An object to search the table for</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the element could be found in the table, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [copy](#copy)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.copy(table) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Copy a table using `pairs()`                                                                     |
| **Parameters**                              | <ul><li>table - A table containing some sort of data</li></ul> |
| **Returns**                                 | <ul><li>A new table containing the same data as the input table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [each](#each)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.each(table, fn)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Execute a function across a table (in arbitrary order), and discard the results                                                                     |
| **Parameters**                              | <ul><li>table - A table; it can have both a list (or array) part and a hash (or dict) part</li><li>fn - A function that accepts a single parameter (a table element)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [every](#every)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.every(table, fn) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns true if the application of fn on every entry in table is true.                                                                     |
| **Parameters**                              | <ul><li>table - A table containing some sort of data</li><li>fn - A function that accepts a single parameter and returns a "true" value (any value except the boolean `false` or nil) if the parameter was accepted, or a "false" value (the boolean false or nil) if the parameter was rejected.</li></ul> |
| **Returns**                                 | <ul><li>True if the application of fn on every element of the table is true</li><li>False if the function returns `false` for any element of the table.  Note that testing stops when the first false return is detected.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [filter](#filter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.filter(table, fn) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Filter a table by running a predicate function on its elements (in arbitrary order)                                                                     |
| **Parameters**                              | <ul><li>table - A table; it can have both a list (or array) part and a hash (or dict) part</li><li>fn - A function that accepts a single parameter (a table element) and returns a boolean value: true if the parameter should be kept, false if it should be discarded</li></ul> |
| **Returns**                                 | <ul><li>A table containing the elements of the table for which fn(element) returns true</li></ul>          |
| **Notes**                                   | <ul><li>If `table` is a pure array table (list-like) without "holes", use `hs.fnutils.ifilter()` if you need guaranteed in-order</li><li> processing and for better performance.</li></ul>                |

| [find](#find)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.find(table, fn) -> element`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Execute a function across a table and return the first element where that function returns true                                                                     |
| **Parameters**                              | <ul><li>table - A table containing some sort of data</li><li>fn - A function that takes one parameter and returns a boolean value</li></ul> |
| **Returns**                                 | <ul><li>The element of the supplied table that first caused fn to return true</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [ieach](#ieach)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.ieach(list, fn)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Execute a function across a list-like table in order, and discard the results                                                                     |
| **Parameters**                              | <ul><li>list - A list-like table, i.e. one whose keys are sequential integers starting from 1</li><li>fn - A function that accepts a single parameter (a table element)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [ifilter](#ifilter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.ifilter(list, fn) -> list`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Filter a list-like table by running a predicate function on its elements in order                                                                     |
| **Parameters**                              | <ul><li>list - A list-like table, i.e. one whose keys are sequential integers starting from 1</li><li>fn - A function that accepts a single parameter (a table element) and returns a boolean value: true if the parameter should be kept, false if it should be discarded</li></ul> |
| **Returns**                                 | <ul><li>A list-like table containing the elements of the table for which fn(element) returns true</li></ul>          |
| **Notes**                                   | <ul><li>If `list` has "holes", all elements after the first hole will be lost, as the table is iterated over with `ipairs`;</li><li>   use `hs.fnutils.map()` if your table has holes</li></ul>                |

| [imap](#imap)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.imap(list, fn) -> list`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Execute a function across a list-like table in order, and collect the results                                                                     |
| **Parameters**                              | <ul><li>list - A list-like table, i.e. one whose keys are sequential integers starting from 1</li><li>fn - A function that accepts a single parameter (a table element). The values returned from this function will be collected into the result list; when `nil` is returned the relevant element is discarded - the result list won't have any "holes".</li></ul> |
| **Returns**                                 | <ul><li>A list-like table containing the results of calling the function on every element in the table</li></ul>          |
| **Notes**                                   | <ul><li>If `list` has "holes", all elements after the first hole will be lost, as the table is iterated over with `ipairs`;</li><li>   use `hs.fnutils.map()` if your table has holes</li></ul>                |

| [indexOf](#indexOf)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.indexOf(table, element) -> number or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Determine the location in a table of a given object                                                                     |
| **Parameters**                              | <ul><li>table - A table containing some sort of data</li><li>element - An object to search the table for</li></ul> |
| **Returns**                                 | <ul><li>A number containing the index of the element in the table, or nil if it could not be found</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [map](#map)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.map(table, fn) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Execute a function across a table (in arbitrary order) and collect the results                                                                     |
| **Parameters**                              | <ul><li>table - A table; it can have both a list (or array) part and a hash (or dict) part</li><li>fn - A function that accepts a single parameter (a table element). For the hash part, the values returned from this function (if non-nil) will be assigned to the same key in the result list. For the array part, this function behaves like `hs.fnutils.imap()` (i.e. `nil` results are discarded); however all keys, including integer keys after a "hole" in `table`, will be iterated over.</li></ul> |
| **Returns**                                 | <ul><li>A table containing the results of calling the function on every element in the table</li></ul>          |
| **Notes**                                   | <ul><li>If `table` is a pure array table (list-like) without "holes", use `hs.fnutils.imap()` if you need guaranteed in-order</li><li> processing and for better performance.</li></ul>                |

| [mapCat](#mapCat)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.mapCat(table, fn) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Execute, across a table, a function that outputs tables, and concatenate all of those tables together                                                                     |
| **Parameters**                              | <ul><li>table - A table containing some sort of data</li><li>fn - A function that takes a single parameter and returns a table</li></ul> |
| **Returns**                                 | <ul><li>A table containing the concatenated results of calling fn(element) for every element in the supplied table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [reduce](#reduce)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.reduce(table, fn[, initial]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reduce a table to a single element, using a function                                                                     |
| **Parameters**                              | <ul><li>table - A table containing some sort of data</li><li>fn - A function that takes two parameters, which will be elements of the supplied table. It should choose one of these elements and return it</li><li>initial - If given, the first call to fn will be with this value and the first element of the table</li></ul> |
| **Returns**                                 | <ul><li>The element of the supplied table that was chosen by the iterative reducer function</li></ul>          |
| **Notes**                                   | <ul><li>table cannot be a sparse table, see [http://www.luafaq.org/gotchas.html#T6.4](http://www.luafaq.org/gotchas.html#T6.4)</li><li>The first iteration of the reducer will call fn with the first and second elements of the table. The second iteration will call fn with the result of the first iteration, and the third element. This repeats until there is only one element left</li></ul>                |

| [some](#some)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.some(table, fn) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns true if the application of fn on entries in table are true for at least one of the members.                                                                     |
| **Parameters**                              | <ul><li>table - A table containing some sort of data</li><li>fn - A function that accepts a single parameter and returns a "true" value (any value except the boolean `false` or nil) if the parameter was accepted, or a "false" value (the boolean false or nil) if the parameter was rejected.</li></ul> |
| **Returns**                                 | <ul><li>True if the application of fn on any element of the table is true.  Note that testing stops when the first true return is detected.</li><li>False if the function returns `false` for all elements of the table.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [split](#split)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.split(sString, sSeparator [, nMax] [, bPlain]) -> { array }`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Convert string to an array of strings, breaking at the specified separator.                                                                     |
| **Parameters**                              | <ul><li>sString    -- the string to split into substrings</li><li>sSeparator -- the separator.  If `bPlain` is false or not provided, this is treated as a Lua pattern.</li><li>nMax       -- optional parameter specifying the maximum number (or all if `nMax` is nil) of substrings to split from `sString`.</li><li>bPlain     -- optional boolean parameter, defaulting to false, specifying if `sSeparator` should be treated as plain text (true) or a Lua pattern (false)</li></ul> |
| **Returns**                                 | <ul><li>An array of substrings.  The last element of the array will be the remaining portion of `sString` that remains after `nMax` (or all, if `nMax` is not provided or is nil) substrings have been identified.</li></ul>          |
| **Notes**                                   | <ul><li>Similar to "split" in Perl or "string.split" in Python.</li><li>Optional parameters `nMax` and `bPlain` are identified by their type -- if parameter 3 or 4 is a number or nil, it will be considered a value for `nMax`; if parameter 3 or 4 is a boolean value, it will be considered a value for `bPlain`.</li><li>Lua patterns are more flexible for pattern matching, but can also be slower if the split point is simple. See §6.4.1 of the _Lua_Reference_Manual_ at http://www.lua.org/manual/5.3/manual.html#6.4.1 for more information on Lua patterns.</li></ul>                |

### Constructors

| [cycle](#cycle)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.cycle(table) -> fn()`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a function that repeatedly iterates a table                                                                     |
| **Parameters**                              | <ul><li>table - A table containing some sort of data</li></ul> |
| **Returns**                                 | <ul><li>A function that, when called repeatedly, will return all of the elements of the supplied table, repeating indefinitely</li></ul>          |
| **Notes**                                   | <ul><li>table cannot be a sparse table, see [http://www.luafaq.org/gotchas.html#T6.4](http://www.luafaq.org/gotchas.html#T6.4)</li><li>An example usage:</li><li>    ```lua</li><li>    f = cycle({4, 5, 6})</li><li>    {f(), f(), f(), f(), f(), f(), f()} == {4, 5, 6, 4, 5, 6, 4}</li><li>    ```</li></ul>                |

| [partial](#partial)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.partial(fn, ...) -> fn'`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a new function which takes the provided arguments and pre-applies them as the initial arguments to the provided function.  When the new function is later invoked with additional arguments, they are appended to the end of the initial list given and the complete list of arguments is finally passed into the provided function and its result returned.                                                                     |
| **Parameters**                              | <ul><li>fn - The function which will act on all of the arguments provided now and when the result is invoked later.</li><li>... - The initial arguments to pre-apply to the resulting new function.</li></ul> |
| **Returns**                                 | <ul><li>A function</li></ul>          |
| **Notes**                                   | <ul><li>This is best understood with an example which you can test in the Hammerspoon console:</li><li></li><li>   Create the function `a` which has it's initial arguments set to `1,2,3`:</li><li>      a = hs.fnutils.partial(function(...) return table.pack(...) end, 1, 2, 3)</li><li></li><li>   Now some examples of using the new function, `a(...)`:</li><li>      hs.inspect(a("a","b","c")) will return: { 1, 2, 3, "a", "b", "c", n = 6 }</li><li>      hs.inspect(a(4,5,6,7))     will return: { 1, 2, 3, 4, 5, 6, 7, n = 7 }</li><li>      hs.inspect(a(1))           will return: { 1, 2, 3, 1, n = 4 }</li></ul>                |

| [sequence](#sequence)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.sequence(...) -> fn`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a function that will collect the result of a series of functions into a table                                                                     |
| **Parameters**                              | <ul><li>... - A number of functions, passed as different arguments. They should accept zero parameters, and return something</li></ul> |
| **Returns**                                 | <ul><li>A function that, when called, will call all of the functions passed to this constructor. The output of these functions will be collected together and returned.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [sortByKeys](#sortByKeys)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.sortByKeys(table[ , function]) -> function`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Iterator for retrieving elements from a table of key-value pairs in the order of the keys.                                                                     |
| **Parameters**                              | <ul><li>table - the table of key-value pairs to be iterated through</li><li>fn - an optional function which will be passed to `table.sort` to determine how the keys are sorted.  If it is not present, then keys will be sorted numerically/alphabetically.</li></ul> |
| **Returns**                                 | <ul><li>function to be used as an iterator</li></ul>          |
| **Notes**                                   | <ul><li>Similar to Perl's `sort(keys %hash)`</li><li>Iterators are used in looping constructs like `for`:</li><li>  `for i,v in hs.fnutils.sortByKeys(t[, f]) do ... end`</li><li>A sort function should accept two arguments and return true if the first argument should appear before the second, or false otherwise.</li><li>  e.g. `function(m,n) return not (m < n) end` would result in reverse alphabetic order.</li><li>  See _Programming_In_Lua,_3rd_ed_, page 52 for a more complete discussion.</li><li>  The default sort is to compare keys directly, if they are of the same type, or as their tostring() versions, if the key types differ:</li><li>    function(m,n) if type(m) ~= type(n) then return tostring(m) < tostring(n) else return m < n end</li></ul>                |

| [sortByKeyValues](#sortByKeyValues)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fnutils.sortByKeyValues(table[ , function]) -> function`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Iterator for retrieving elements from a table of key-value pairs in the order of the values.                                                                     |
| **Parameters**                              | <ul><li>table - the table of key-value pairs to be iterated through</li><li>fn - an optional function which will be passed to `table.sort` to determine how the values are sorted.  If it is not present, then values will be sorted numerically/alphabetically.</li></ul> |
| **Returns**                                 | <ul><li>function to be used as an iterator</li></ul>          |
| **Notes**                                   | <ul><li>Similar to Perl's `sort { $hash{$a} <=> $hash{$b} } keys %hash`</li><li>Iterators are used in looping constructs like `for`:</li><li>  `for i,v in hs.fnutils.sortByKeyValues(t[, f]) do ... end`</li><li>A sort function should accept two arguments and return true if the first argument should appear before the second, or false otherwise.</li><li>  e.g. `function(m,n) return not (m < n) end` would result in reverse alphabetic order.</li><li>  See _Programming_In_Lua,_3rd_ed_, page 52 for a more complete discussion.</li><li>  The default sort is to compare values directly, if they are of the same type, or as their tostring() versions, if the value types differ:</li><li>    function(m,n) if type(m) ~= type(n) then return tostring(m) < tostring(n) else return m < n end</li></ul>                |


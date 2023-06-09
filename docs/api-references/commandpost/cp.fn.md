# cp.fn

A collection of functions that are useful for working with functions.
Heavily inspired by Point-Free's [Overture](https://github.com/pointfreeco/swift-overture) library for Swift.

In general, the functions in this module come in two categories:

1. Functions which perform an action directly.
2. Functions which return a new function.

The second category of functions are called "combinators". A combinator is a function that returns a new function,
often with configuration parameters passed in.

---

## Submodules
 * [cp.fn.args](cp.fn.args.md)
 * [cp.fn.ax](cp.fn.ax.md)
 * [cp.fn.prop](cp.fn.prop.md)
 * [cp.fn.string](cp.fn.string.md)
 * [cp.fn.table](cp.fn.table.md)
 * [cp.fn.value](cp.fn.value.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [all](#all)
 * [any](#any)
 * [call](#call)
 * [chain](#chain)
 * [compare](#compare)
 * [compose](#compose)
 * [constant](#constant)
 * [curry](#curry)
 * [debug](#debug)
 * [flip](#flip)
 * [fork](#fork)
 * [identity](#identity)
 * [ifilter](#ifilter)
 * [none](#none)
 * [over](#over)
 * [pipe](#pipe)
 * [prefix](#prefix)
 * [reduce](#reduce)
 * [resolve](#resolve)
 * [set](#set)
 * [uncurry](#uncurry)
 * [with](#with)


---

## API Documentation

### Functions


### [all](#all)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.all(...) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that returns a function that passes its arguments to all the functions in `fns` and returns the last result, if all functions return a `truthy` value. Otherwise, it returns `nil`.                                                                     |
| **Parameters**                              | <ul><li>... - A table or list of functions to call.</li></ul> |
| **Returns**                                 | <ul><li>A function that passes its arguments to all the functions in `fns` and returns the last result, if all functions return a `truthy` value.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [any](#any)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.any(...) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that returns a function that passes its arguments to all the functions in `fns` and returns the first `truthy` result, or `nil` if all functions return a `falsy` value.                                                                     |
| **Parameters**                              | <ul><li>... - A table or list of functions to call.</li></ul> |
| **Returns**                                 | <ul><li>A function that passes its arguments to all the functions in `fns` and returns the first `truthy` result,</li><li>   or `nil` if all functions return a 'falsy' value.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [call](#call)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.call(fn) -> ...`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calls the function `fn` with no arguments, returning the result.                                                                     |
| **Parameters**                              | <ul><li>fn - The function to call.</li></ul> |
| **Returns**                                 | <ul><li>The results of the function call.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [chain](#chain)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.chain(...) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Chain a series of functions together, passing the results of each function on to the next one, returning the last result, or returning `nil` immediately after all results of a function are `nil`.                                                                     |
| **Parameters**                              | <ul><li>... - A list of functions.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes any number of inputs and returns any number of inputs.</li></ul>          |
| **Notes**                                   | <ul><li>The difference between `chain` and `pipe` is that chain will fail early with a `nil` result, while `pipe` will pass the `nil` onto the next function.</li><li>Alternately, you can create a chain using the `//` operator, followed by `>>` for each subsequent function. Eg: `chain // fn1 >> fn2 >> fn3`.</li><li>If using the alternate syntax, you may have to put parentheses around the chain if mixing with other operators like `pipe` or `compose`.</li></ul>                |

---

### [compare](#compare)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.compare(...) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that returns a function that checks each provided comparator in turn, returning `true` if the given comparator returns `true`, otherwise if the values are equal, checks the next comparator, and so on.                                                                     |
| **Parameters**                              | <ul><li>... - A list of comparators.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes two inputs and `true` if the first input is less than the second input.</li></ul>          |
| **Notes**                                   | <ul><li>The comparators are called in the order they are provided.</li><li>If no comparators are provided, returns a `nil` function, which is generally sorted with the standard `<` operator.</li></ul>                |

---

### [compose](#compose)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.compose(...) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that performs backwards composition of functions, returning a function that is the composition of a list of functions processed from last to first.                                                                     |
| **Parameters**                              | <ul><li>fns | ... - A table or a list of functions.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes the input for the last function, and returns the result of the first function.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [constant](#constant)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.constant(value) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that returns a function that always returns the `value`.                                                                     |
| **Parameters**                              | <ul><li>value - The value to return.</li></ul> |
| **Returns**                                 | <ul><li>A function that always returns the value `value`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [curry](#curry)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.curry(function, argCount) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Curries a function with the specified number of arguments, returning a function that accepts the first argument. It will return other functions that accept the second argument, and so on, until the final argument is collected, and the values are passed to the original function.                                                                     |
| **Parameters**                              | <ul><li>fn - The function to curry.</li><li>argCount - The number of arguments to accept.</li></ul> |
| **Returns**                                 | <ul><li>A function that accepts the first argument.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [debug](#debug)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.debug(message, ...) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that will print the provided message to the console.                                                                     |
| **Parameters**                              | <ul><li>message - The message to print to the console.</li><li>... - Optional functions to call with the values passed to the returned function.</li></ul> |
| **Returns**                                 | <ul><li>A function that will print the provided message to the console.</li></ul>          |
| **Notes**                                   | <ul><li>This is useful for debugging, but is not recommended for production code.</li><li>For example, the following will return "b" and also print `"table: 0xXXXXXXXXX"` and `"b"` to the console:</li><li>   `fn.chain // fn.constant({"a", "b", "c"}) >> fn.debug("%d") >> fn.table.get(2) >> fn.debug("%d")`</li><li>Optional functions can be passed in, which will be provided the values passed to the returned function.</li><li>If not provided, the values will be passed into the message for formatting directly.</li><li>The returned function will always return the values passed in.</li></ul>                |

---

### [flip](#flip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.flip(fn) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that flips the order of the next two arguments to a curried function.                                                                     |
| **Parameters**                              | <ul><li>fn - The function to flip.</li></ul> |
| **Returns**                                 | <ul><li>A function that accepts the second argument and returns</li><li>    a function expecting the first argument.</li></ul>          |
| **Notes**                                   | <ul><li>If multiple arguments are provided for either function, the order of the arguments within that list are not flipped.</li></ul>                |

---

### [fork](#fork)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.fork(...) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that returns a function that returns the result of calling `...` with the functions passed in. This can be used to split an input into multiple outputs.                                                                     |
| **Parameters**                              | <ul><li>... - A table or list of functions to call.</li></ul> |
| **Returns**                                 | <ul><li>A function that returns the result of calling `...` with the functions passed in.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [identity](#identity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.identity(...) -> ...`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the values passed in.                                                                     |
| **Parameters**                              | <ul><li>... - The values to return.</li></ul> |
| **Returns**                                 | <ul><li>The values passed in.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [ifilter](#ifilter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.ifilter([predicate]) -> function(table) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that filters a table using the given predicate, in index order. If the predicate is not provided, the original table will be returned unchanged.                                                                     |
| **Parameters**                              | <ul><li>predicate - A function that takes a value and returns true if the value should be included in the filtered table.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a table and returns a filtered table.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [none](#none)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.none(...) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that returns a function that passes its arguments to all the functions in `fns` and returns `true` if the first return value from each is `falsey`, otherwise it returns `false`.                                                                     |
| **Parameters**                              | <ul><li>... - A table or list of functions to call.</li></ul> |
| **Returns**                                 | <ul><li>A function which will be `true` if all of the functions in `fns` are `falsy`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [over](#over)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.over(setter, fn) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that returns a function that applies the transform function to the `setter`.                                                                     |
| **Parameters**                              | <ul><li>setter - An immutable setter function.</li><li>tx - A value transform function.</li></ul> |
| **Returns**                                 | <ul><li>A root transform function.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [pipe](#pipe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.pipe(...) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that pipes a series of functions together, passing the results of each function on to the next one. The returned function takes any number of inputs and may return any number of inputs, depending on the results of the final function.                                                                     |
| **Parameters**                              | <ul><li>fns |... - A table or list of functions.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes any number of inputs and returns any number of inputs.</li></ul>          |
| **Notes**                                   | <ul><li>The difference between `chain` and `pipe` is that chain will fail early with a `nil` result, while `pipe` will pass the `nil` onto the next function.</li></ul>                |

---

### [prefix](#prefix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.prefix(fn, ...) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Prefixes the provided values as the first arguments to the function.                                                                     |
| **Parameters**                              | <ul><li>fn - The function to prefix.</li><li>... - The arguments to prefix the function with.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes the remainder of `fn`'s arguments and returns the result of `fn` with the provided arguments prepended.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [reduce](#reduce)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.reduce(fn, initial, ...) -> any`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reduces a list of values into a single value.                                                                     |
| **Parameters**                              | <ul><li>fn - The function to reduce with.</li><li>initial - The initial value to start with.</li><li>... - The table or list of values to reduce.</li></ul> |
| **Returns**                                 | <ul><li>The reduced value.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [resolve](#resolve)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.resolve(value, ...) -> any`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | If the value is a function, calls it with the provided arguments, otherwise returns the value.                                                                     |
| **Parameters**                              | <ul><li>value - The value to resolve.</li><li>... - The arguments to pass to the function.</li></ul> |
| **Returns**                                 | <ul><li>The resolved value.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [set](#set)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.set(setter, value) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Applies a value to an immutable `setter` function.                                                                     |
| **Parameters**                              | <ul><li>setter - An immutable setter function (function(A -> B) -> function(S) -> T)</li><li>value - A new value.</li></ul> |
| **Returns**                                 | <ul><li>A root transform function.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [uncurry](#uncurry)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.uncurry(fn, argCount) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Uncurry a curried function with the specified number of arguments, returning a function the specified number of arguments.                                                                     |
| **Parameters**                              | <ul><li>fn - The function to uncurry.</li><li>argCount - The number of arguments to uncurry.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes the specified number of arguments.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [with](#with)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.with(value, fn) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that returns a function that will call the provided function with the provided value as the first argument.                                                                     |
| **Parameters**                              | <ul><li>value - The value to pass to the function.</li><li>fn - The function to call.</li></ul> |
| **Returns**                                 | <ul><li>A function that will call the provided function with the provided value as the first argument.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

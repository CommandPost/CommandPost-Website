# cp.fn.value

A collection of functions for working with values.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [default](#default)
 * [filter](#filter)
 * [is](#is)
 * [map](#map)
 * [matches](#matches)


---

## API Documentation

#### Functions


### [default](#default)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.value.default(...) -> function(...) -> ...`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A combinator that takes a list of default values and returns a function that accepts a list of values and returns the same number of values, with either the value passed in or the default value if that value is `nil`.                                                                     |
| **Parameters**                              | <ul><li>... - A list of default values.</li></ul> |
| **Returns**                                 | <ul><li>A function that accepts a list of values and returns the same number of values, with either the value passed in or the default value if that value is `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>Example: `cp.fn.value.default(1, 2, 3)(5, nil, 6) -- returns 5, 2, 6`</li></ul> |

---


### [filter](#filter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.value.filter(predicate, ...) -> function(value) -> value | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Filters a value using a list of predicates which must all be `true` to succeed.                                                                     |
| **Parameters**                              | <ul><li>predicate - A function that takes a value and returns `true` or `false`.</li><li>... - Optional additional predicates which must all be `true` to succeed.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a value and returns the value if the predicates all return `true`, otherwise `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.value.is(other) -> function(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that returns `true` if the value is equal to the other value. If `other` is a function, then it will be called with no arguments and the result will be compared.                                                                     |
| **Parameters**                              | <ul><li>other - A value or a function that returns a value.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a value and returns `true` if the value is equal to the other value, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [map](#map)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.value.map(mapper) -> function(value) -> any | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | If the value is not `nil`, then it will be passed to the mapper function and the result returned.                                                                     |
| **Parameters**                              | <ul><li>mapper - A function that takes a value and returns a value.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a value and returns the result of the mapper function, or `nil` if the value is `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.value.matches(predicate, ...) -> function(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that returns `true` if the value matches the predicates.                                                                     |
| **Parameters**                              | <ul><li>predicate - A function that takes a value and returns `true` or `false`.</li><li>... - Optional additional predicates which must all be `true` to succeed.</li></ul> |
| **Returns**                                 | <ul><li>A function that takes a value and returns `true` if the value matches the all predicates, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


# hs.math

Various helpful mathematical functions

This module includes, and is a superset of the built-in Lua `math` library so it is safe to do something like the following in your own code and still have access to both libraries:

    local math = require("hs.math")
    local n = math.sin(math.minFloat) -- works even though they're both from different libraries

The documentation for the math library can be found at http://www.lua.org/manual/5.3/ or from the Hammerspoon console via the help command: `help.lua.math`. This includes the following functions and variables:

  * hs.math.abs        - help available via `help.lua.math.abs`
  * hs.math.acos       - help available via `help.lua.math.acos`
  * hs.math.asin       - help available via `help.lua.math.asin`
  * hs.math.atan       - help available via `help.lua.math.atan`
  * hs.math.ceil       - help available via `help.lua.math.ceil`
  * hs.math.cos        - help available via `help.lua.math.cos`
  * hs.math.deg        - help available via `help.lua.math.deg`
  * hs.math.exp        - help available via `help.lua.math.exp`
  * hs.math.floor      - help available via `help.lua.math.floor`
  * hs.math.fmod       - help available via `help.lua.math.fmod`
  * hs.math.huge       - help available via `help.lua.math.huge`
  * hs.math.log        - help available via `help.lua.math.log`
  * hs.math.max        - help available via `help.lua.math.max`
  * hs.math.maxinteger - help available via `help.lua.math.maxinteger`
  * hs.math.min        - help available via `help.lua.math.min`
  * hs.math.mininteger - help available via `help.lua.math.mininteger`
  * hs.math.modf       - help available via `help.lua.math.modf`
  * hs.math.pi         - help available via `help.lua.math.pi`
  * hs.math.rad        - help available via `help.lua.math.rad`
  * hs.math.random     - help available via `help.lua.math.random`
  * hs.math.randomseed - help available via `help.lua.math.randomseed`
  * hs.math.sin        - help available via `help.lua.math.sin`
  * hs.math.sqrt       - help available via `help.lua.math.sqrt`
  * hs.math.tan        - help available via `help.lua.math.tan`
  * hs.math.tointeger  - help available via `help.lua.math.tointeger`
  * hs.math.type       - help available via `help.lua.math.type`
  * hs.math.ult        - help available via `help.lua.math.ult`

Additional functions and values that are specific to Hammerspoon which provide expanded math support are documented here.

## API Overview
* Constants - Useful values which cannot be changed
 * [minFloat](#minFloat)
* Functions - API calls offered directly by the extension
 * [isFinite](#isFinite)
 * [isInfinite](#isInfinite)
 * [isNaN](#isNaN)
 * [randomFloat](#randomFloat)
 * [randomFromRange](#randomFromRange)

## API Documentation

### Constants

| [minFloat](#minFloat)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.math.minFloat`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Smallest positive floating point number representable in Hammerspoon                                                                     |
| **Notes**                                   | <ul><li>Because specifying a delay of 0 to `hs.timer.doAfter` results in the event not triggering, use this value to indicate that the action should occur as soon as possible after the current code block has completed execution.</li></ul>                |

### Functions

| [isFinite](#isFinite)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.math.isFinite(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether or not the value is a finite number                                                                     |
| **Parameters**                              | <ul><li>`value` - the value to be tested</li></ul> |
| **Returns**                                 | <ul><li>true if the value is a finite number, or false otherwise</li></ul>          |
| **Notes**                                   | <ul><li>This function returns true if the value is a number and both [hs.math.isNaN](#isNaN) and [hs.math.isInfinite](#isInfinite) return false.</li></ul>                |

| [isInfinite](#isInfinite)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.math.isInfinite(value) -> 1, -1, false`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether or not the value is the mathematical equivalent of either positive or negative "Infinity"                                                                     |
| **Parameters**                              | <ul><li>`value` - the value to be tested</li></ul> |
| **Returns**                                 | <ul><li>1 if the value is equivalent to positive infinity, -1 if the value is equivalent to negative infinity, or false otherwise.</li></ul>          |
| **Notes**                                   | <ul><li>This function specifically checks if the `value` is equivalent to positive or negative infinity --- it does not do type checking. If `value` is not a numeric value (e.g. a string), it *cannot* be equivalent to positive or negative infinity and will return false.</li><li>Because lua treats any value other than `nil` and `false` as `true`, the return value of this function can be safely used in conditionals when you don't care about the sign of the infinite value.</li></ul>                |

| [isNaN](#isNaN)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.math.isNaN(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether or not the value is the mathematical equivalent of "Not-A-Number"                                                                     |
| **Parameters**                              | <ul><li>`value` - the value to be tested</li></ul> |
| **Returns**                                 | <ul><li>true if `value` is equal to the mathematical "value" of NaN, or false otherwise</li></ul>          |
| **Notes**                                   | <ul><li>Mathematical `NaN` represents an impossible value, usually the result of a calculation, yet is still considered within the domain of mathematics. The most common case is the result of `n / 0` as division by 0 is considered undefined or "impossible".</li><li>This function specifically checks if the `value` is `NaN` --- it does not do type checking. If `value` is not a numeric value (e.g. a string), it *cannot* be equivalent to `NaN` and this function will return false.</li></ul>                |

| [randomFloat](#randomFloat)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.math.randomFloat() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a random floating point number between 0 and 1                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A random number between 0 and 1</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [randomFromRange](#randomFromRange)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.math.randomFromRange(start, end) -> integer`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a random integer between the start and end parameters                                                                     |
| **Parameters**                              | <ul><li>start - A number to start the range, must be greater than or equal to zero</li><li>end - A number to end the range, must be greater than zero and greater than `start`</li></ul> |
| **Returns**                                 | <ul><li>A randomly chosen integer between `start` and `end`</li></ul>          |
| **Notes**                                   | <ul></ul>                |


# cp.result

Represents the result of an operation which may end in `success` or `failure`.
If it is a `success`, a `value` is typically provided.
If it is a `failure`, a `message` is typically provided.

Using this type allows for more structured checking when performing an operation which may fail in a number
of ways, rather than just calling `error` and crashing out. For example:

```lua
function clamped(value, min, max)
    if value < min then
        return result.failure("expected at least %d but got %d", min, value)
    elseif value > max then
        return result.failure("expected at most %d but got %d", max, value")
    else
        return result.success(value)
    end
end

local outcome = clamped(-1, 0, 100)
if outcome.failure then
    error(outcome.message)
end
local value = outcome.value
```

Of course, simply checking the result and throwing an `error` is a common case, so you can achieve the same result like so:

```lua
local value = clamped(-1, 0, 100):get()
```

If you want to perform other tasks, check for `.failure` or `.success` and perform the appropriate response.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [is](#is)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [failure](#failure)
 * [from](#from)
 * [okValue](#okvalue)
 * [success](#success)
 * [valueErr](#valueerr)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [get](#get)
 * [log](#log)


---

## API Documentation

#### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.result.is(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `value` is an instance of a `cp.result`.                                                                     |
| **Parameters**                              | <ul><li>`value`  - The value to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the value is an instance of `cp.result`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//result.lua line 44](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//result.lua#L44) |

---

#### Constructors


### [failure](#failure)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.result.failure(message) -> result`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `failure` result, with the specified error `message`.                                                                     |
| **Parameters**                              | <ul><li>message - Error message</li></ul> |
| **Returns**                                 | <ul><li>A new result</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//result.lua line 74](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//result.lua#L74) |

---


### [from](#from)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.result.from(value, err) -> result`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Provides a simple wrapper for the common `value, err` pattern of function error handling in Lua. If the `err` value is not `nil`, it will result in a `failure`, otherwise the `value` is passed to a `success`.                                                                     |
| **Parameters**                              | <ul><li>value - The value if successful.</li><li>err - The error message if there was a failure.</li></ul> |
| **Returns**                                 | <ul><li>A `result.success` or `result.failure`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//result.lua line 91](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//result.lua#L91) |

---


### [okValue](#okvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.result.okValue(ok, value) -> result`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Provides a simple wrapper for the common `ok, value|err` pattern of function error handling in Lua. If `ok` is true, `value` is the successful result, otherwise `value` is the error message.                                                                     |
| **Parameters**                              | <ul><li>ok - if `true`, the operation was successful.</li><li>value - `ok` is true, the successful value, otherwise the error message.</li></ul> |
| **Returns**                                 | <ul><li>A `result.success` or `result.failure`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//result.lua line 127](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//result.lua#L127) |

---


### [success](#success)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.result.success(value) -> result`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `success` result, with the specified `value`.                                                                     |
| **Parameters**                              | <ul><li>value - The specified value</li></ul> |
| **Returns**                                 | <ul><li>A new result</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//result.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//result.lua#L61) |

---


### [valueErr](#valueerr)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.result.valueErr(value, err) -> result`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Provides a simple wrapper for the common `value, err` pattern of function error handling in Lua. If the `err` is not `nil` it will result in a `failure` with the message, otherwise the `value` is passed to a `success`.                                                                     |
| **Parameters**                              | <ul><li>value - The value if successful.</li><li>err - The error message if there was a failure.</li></ul> |
| **Returns**                                 | <ul><li>A `result.success` or `result.failure`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//result.lua line 109](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//result.lua#L109) |

---

#### Methods


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.result:get() -> anything`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the successful value, or throws an `error` with the provided `message`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `value` if it was a `success`, otherwise throws an `error`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//result.lua line 145](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//result.lua#L145) |

---


### [log](#log)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.result:log([context]) -> cp.result`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Logs the result to either the default channel (if `success`) or error channel (if `failure`), with the `context` string (if provided).                                                                     |
| **Parameters**                              | <ul><li>context - A `string` that provides context for the logged value.</li></ul> |
| **Returns**                                 | <ul><li>The same `cp.result` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//result.lua line 178](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//result.lua#L178) |

---


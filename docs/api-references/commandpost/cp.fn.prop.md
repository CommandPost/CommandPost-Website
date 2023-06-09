# cp.fn.prop

A module of free-standing functions for working with [cp.prop](cp.prop.md) values.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [mutate](#mutate)


---

## API Documentation

#### Functions


### [mutate](#mutate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.prop.mutate(getFn[, setFn]) -> function(prop) -> cp.prop`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A function combinator which returns a function that receives a [cp.prop](cp.prop.md) and creates a mutated `cp.prop` based on the `getFn` and `setFn` provided.                                                                     |
| **Parameters**                              | <ul><li>getFn - A function that receives the current value and returns the modified value of the prop.</li><li>setFn - (optional) A function that receives the modified value, along with the current value of the prop and returns a original value of the prop.</li></ul> |
| **Returns**                                 | <ul><li>A [cp.prop](cp.prop.md) that is the result of the mutation.</li></ul>          |
| **Notes**                                   | <ul><li>Unlike `cp.prop:mutate(...)`, the `getFn` receives the actual current value when called, rather than the `cp.prop` itself, and no additional parameters.</li><li>Also unlike `cp.prop:mutate(...)`, the `setFn` is called with the mutated value and the current value, rather than the `cp.prop` itself, and no additional parameters.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/fn/prop.lua line 9](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/fn/prop.lua#L9){target="_blank"} |

---


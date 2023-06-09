# cp.spec.Specification

A Specification is a list of [definitions](cp.spec.Definition.md) which
will be run in sequence, and the results are collated. It is often created via
the [describe](cp.spec.md#describe) function.

Example usage:
```
local spec = require "cp.spec"
local describe, it = spec.describe, spec.it

return describe "a specification" {
    it "performs an assertion"
    :doing(function()
        assert(true, "should not fail")
    end),
}
```

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [is](#is)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Specification](#specification)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [onAfterEach](#onaftereach)
 * [onBeforeEach](#onbeforeeach)
 * [run](#run)
 * [with](#with)


---

## API Documentation

#### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Specification.is(instance) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `instance` is an instance of `Specification`.                                                                     |
| **Parameters**                              | <ul><li>instance - The instance to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it's a `Specification` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/spec/Specification.lua line 31](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Specification.lua#L31){target="_blank"} |

---

#### Constructors


### [Specification](#specification)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Specification(name) -> cp.spec.Specification`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new test suite.                                                                     |
| **Parameters**                              | <ul><li>name - The name os the specification.</li></ul> |
| **Returns**                                 | <ul><li>A `cp.spec.Specification` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/spec/Specification.lua line 44](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Specification.lua#L44){target="_blank"} |

---

#### Methods


### [onAfterEach](#onaftereach)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Specification:onAfterEach(afterEachFn) -> cp.spec.Specification`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies a function to execute after each of the contained specifications is run. The function will be passed the [Run.This](cp.spec.Run.This.md) for the current Run.                                                                     |
| **Parameters**                              | <ul><li>afterEachFn - The function to run after each child runs.</li></ul> |
| **Returns**                                 | <ul><li>The same `cp.spec.Specification` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/spec/Specification.lua line 72](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Specification.lua#L72){target="_blank"} |

---


### [onBeforeEach](#onbeforeeach)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Specification:onBeforeEach(beforeEachFn) -> cp.spec.Specification`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies a function to execute before each of the contained specifications is run. The function will be passed the [Run.This](cp.spec.Run.This.md) for the current Run.                                                                     |
| **Parameters**                              | <ul><li>beforeEachFn - The function to run before each child runs.</li></ul> |
| **Returns**                                 | <ul><li>The same `cp.spec.Specification` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/spec/Specification.lua line 58](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Specification.lua#L58){target="_blank"} |

---


### [run](#run)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Specification:run() -> cp.spec.Run`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Runs the specification, returning the [Run](cp.spec.Run.md) instance, already running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [Run](cp.spec.Run.md) instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/spec/Specification.lua line 86](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Specification.lua#L86){target="_blank"} |

---


### [with](#with)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Specification:with(...) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the provided [definitions](cp.spec.Definition.md) to the suite. May also pass a single `table` containing a list of definitions.                                                                     |
| **Parameters**                              | <ul><li>... - the [definitions](cp.spec.Definition.md) to add.</li></ul> |
| **Returns**                                 | <ul><li>The same `Specification` instance, with the definitions added.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/spec/Specification.lua line 135](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Specification.lua#L135){target="_blank"} |

---


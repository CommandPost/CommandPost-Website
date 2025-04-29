# cp.spec.Definition

A [Definition](cp.spec.Definition.md) is a superclass for a "runnable" specification.
It doesn't do anything itself, but provides a common ancestor for all implementation
classes like [Specification](cp.spec.Specification.md) and [Scenario](cp.spec.Scenario.md).

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [is](#is)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Definition](#definition)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [run](#run)


---

## API Documentation

#### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Definition.is(instance) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Called as a method, this will check if the provided object is an instance of this class.                                                                     |
| **Parameters**                              | <ul><li>instance - The instance to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the instance is an instance of this class.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/spec/Definition.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Definition.lua#L30) |

---

#### Constructors


### [Definition](#definition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Definition(name[, doing]) -> cp.spec.Definition`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new test definition.                                                                     |
| **Parameters**                              | <ul><li>name - The name</li><li>doing - doing</li></ul> |
| **Returns**                                 | <ul><li>cp.spec.Definition object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/spec/Definition.lua line 13](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Definition.lua#L13) |

---

#### Methods


### [run](#run)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Definition:run([...]) -> cp.spec.Run`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Runs the definition with the specified filter `string`, `function` or `table` of `string`s and `function`s. The [Run](cp.spec.Run.md) will have already started with the provided `filter`.                                                                     |
| **Parameters**                              | <ul><li>... - (optional) The list of filters to apply to any child definitions.</li></ul> |
| **Returns**                                 | <ul><li>The [Run](cp.spec.Run.md).</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/spec/Definition.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Definition.lua#L43) |

---


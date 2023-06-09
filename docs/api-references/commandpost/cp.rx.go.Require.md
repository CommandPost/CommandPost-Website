# cp.rx.go.Require

A `Statement` that will require that the `resolvable` value matches a predicate,
and if not, it will send an error.

---

## Submodules
 * [cp.rx.go.Require.Are](cp.rx.go.Require.Are.md)
 * [cp.rx.go.Require.AreNot](cp.rx.go.Require.AreNot.md)
 * [cp.rx.go.Require.Is](cp.rx.go.Require.Is.md)
 * [cp.rx.go.Require.IsNot](cp.rx.go.Require.IsNot.md)
 * [cp.rx.go.Require.Matches](cp.rx.go.Require.Matches.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [OrThrow](#orthrow)

**Functions** - _API calls offered directly by the extension_
 * [Require](#require)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [Are](#are)
 * [AreNot](#arenot)
 * [Is](#is)
 * [IsNot](#isnot)
 * [Matches](#matches)
 * [OrThrow](#orthrow)


---

## API Documentation

### Constants


### [OrThrow](#orthrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require.OrThrow <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets the message to throw if the requirement is not met.                                                                     |

---
### Functions


### [Require](#require)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require(requirement) -> Require`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `Require` `Statement` with the specified `requirement`.                                                                     |
| **Parameters**                              | <ul><li>requirement  - a `resolvable` value that will be checked.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` instance which will check if the `requirement` matches the requirement.</li></ul>          |
| **Notes**                                   | <ul><li>By default, it will require that all items in the requirement are not `nil` and completed.</li><li>This is most useful with `Given`, allowing retrieval and checking of values before continuing.</li><li>Example:</li><li></li><li>```lua</li><li>Given(</li><li>    Require(someObservable):Is(2):OrThrow("Must be 2")</li><li>):Then(function(someValue)</li><li>    -- do stuff with `someValue`</li><li>):Now()</li><li>```</li></ul>                |

---
### Methods


### [Are](#are)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require:Are(value) -> Require.Are`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the value to check.                                                                     |
| **Parameters**                              | <ul><li>value  - The value that all results from the `requirement` must match.</li></ul> |
| **Returns**                                 | <ul><li>The `Are` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [AreNot](#arenot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require:AreNot(value) -> Require.AreNot`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the value to check.                                                                     |
| **Parameters**                              | <ul><li>value  - The value that all results from the `requirement` must match.</li></ul> |
| **Returns**                                 | <ul><li>The `AreNot` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [Is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require:Is(value) -> Require.Is`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the value to check.                                                                     |
| **Parameters**                              | <ul><li>value  - The value that all results from the `requirement` must match.</li></ul> |
| **Returns**                                 | <ul><li>The `Is` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [IsNot](#isnot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require:IsNot(value) -> Require.IsNot`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the value to check.                                                                     |
| **Parameters**                              | <ul><li>value  - The value that all results from the `requirement` must not match.</li></ul> |
| **Returns**                                 | <ul><li>The `IsNot` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [Matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require:Matches(predicate) -> Require.Matches`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the predicate to check.                                                                     |
| **Parameters**                              | <ul><li>value  - The value that all results from the `requirement` must not match.</li></ul> |
| **Returns**                                 | <ul><li>The `Matches` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul><li>Example:</li><li>```lua</li><li>Require(someObservable):Matches(function(value) return value % 2 == 0 end)</li><li>```</li></ul>                |

---

### [OrThrow](#orthrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require:OrThrow(message) -> Require.OrThrow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the message to throw if the requirement is not met.                                                                     |
| **Parameters**                              | <ul><li>message  - The string to throw when there is an error.</li></ul> |
| **Returns**                                 | <ul><li>The `OrThrow` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

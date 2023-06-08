# [docs](index.md) » cp.rx.go.If
---

A `Statement` that will check if a `resolvable` matches a predicate, then executes other `resolvables`.

## Submodules
 * [cp.rx.go.If.Are](cp.rx.go.If.Are.md)
 * [cp.rx.go.If.AreNot](cp.rx.go.If.AreNot.md)
 * [cp.rx.go.If.Is](cp.rx.go.If.Is.md)
 * [cp.rx.go.If.IsNot](cp.rx.go.If.IsNot.md)
 * [cp.rx.go.If.Matches](cp.rx.go.If.Matches.md)
 * [cp.rx.go.If.Then](cp.rx.go.If.Then.md)

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [If](#If)
* Methods - API calls which can only be made on an object returned by a constructor
 * [Are](#Are)
 * [AreNot](#AreNot)
 * [Is](#Is)
 * [IsNot](#IsNot)
 * [Matches](#Matches)
 * [Then](#Then)

## API Documentation

### Constructors

| [If](#If)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.If(value) -> If`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `If` `Statement` which will check the first result of `value`.                                                                     |
| **Parameters**                              | <ul><li>value  - a `resolvable` value that will be checked.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` instance which will check if the `resolvable` matches the requirement.</li></ul>          |
| **Notes**                                   | <ul><li>By default, it will check if the value is `truthy` - not `nil` and not `false`.</li><li>Other checks can be specified via the `If:Is/IsNot/Matches` methods.</li><li>If the check passes, the `If:Then(...)` method is processed. If not, the `Otherwise` method</li><li>can specify other `resolvables` to execute instead.</li><li></li><li>Example:</li><li></li><li>```lua</li><li>If(someObservable):Is(true):Then(</li><li>    function() ... end</li><li>):Otherwise(</li><li>    function() ... end</li><li>)</li><li>```</li></ul>                |

### Methods

| [Are](#Are)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.If:Are(value) -> If.Are`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the value to check.                                                                     |
| **Parameters**                              | <ul><li>value  - The value to wait for.</li></ul> |
| **Returns**                                 | <ul><li>The [Are](cp.rx.go.If.Are.md) [Statement.Modifier](cp.rx.go.Statement.Modifier.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [AreNot](#AreNot)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.If:AreNot(value) -> If.AreNot`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the value to check.                                                                     |
| **Parameters**                              | <ul><li>value  - The value to not match.</li></ul> |
| **Returns**                                 | <ul><li>The [AreNot](cp.rx.go.If.AreNot.md) [Statement.Modifier](cp.rx.go.Statement.Modifier.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [Is](#Is)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.If:Is(value) -> If.Is`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the value to check.                                                                     |
| **Parameters**                              | <ul><li>value  - The value to check for.</li></ul> |
| **Returns**                                 | <ul><li>The [Is](cp.rx.go.If.Is.md) [Statement.Modifier](cp.rx.go.Statement.Modifier.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [IsNot](#IsNot)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.If:IsNot(value) -> If.IsNot`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the value to not match.                                                                     |
| **Parameters**                              | <ul><li>value  - The value to check for.</li></ul> |
| **Returns**                                 | <ul><li>The [IsNot](cp.rx.go.If.IsNot.md) [Statement.Modifier](cp.rx.go.Statement.Modifier.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [Matches](#Matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.If:Matches(predicate) -> If.Matches`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the predicate function that will check the `value` results.                                                                     |
| **Parameters**                              | <ul><li>predicate  - The function that will get called to determine if it has been found.</li></ul> |
| **Returns**                                 | <ul><li>The [Matches](cp.rx.go.If.Matches.md) [Statement.Modifier](cp.rx.go.Statement.Modifier.md).</li></ul>          |
| **Notes**                                   | <ul><li>Example:</li><li>```lua</li><li>If(someObservable):Matches(function(value) return value % 2 == 0 end):Then(doSomething())</li><li>```</li></ul>                |

| [Then](#Then)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.If:Then(...) -> If.Then`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call this to define what will happen if value resolves successfully.                                                                     |
| **Parameters**                              | <ul><li>...  - The list of `resolveable` values to process for the successful `If` result.</li></ul> |
| **Returns**                                 | <ul><li>The `Then` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul><li>The parameters can be any `resolvable` type.</li><li></li><li>For example:</li><li>```lua</li><li>If(anObservable)</li><li>:Then(function(aResult)</li><li>    doSomethingWith(aResult, anotherResult)</li><li>    return true</li><li>end)</li><li>```</li></ul>                |


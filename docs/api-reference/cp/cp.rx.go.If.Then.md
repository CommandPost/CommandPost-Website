# [docs](index.md) » cp.rx.go.If.Then
---

A `Statement.Modifier` that defines what happens when an `If` matches.

## Submodules
 * [cp.rx.go.If.Then.Otherwise](cp.rx.go.If.Then.Otherwise.md)

## API Overview
* Constants - Useful values which cannot be changed
 * [Then](#Then)
* Methods - API calls which can only be made on an object returned by a constructor
 * [Otherwise](#Otherwise)
 * [Then](#Then)

## API Documentation

### Constants

| [Then](#Then)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.If.Then <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | This is a configuration of `SetProp`, which should be created via `SetProp:To(value)`                                                                     |

### Methods

| [Otherwise](#Otherwise)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.If.Then:Otherwise(...) -> If.Then.Otherwise`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call this to define what will happen if value doesn't resolve successfully.                                                                     |
| **Parameters**                              | <ul><li>...  - The list of `resolveable` values to process for the unsuccessful `If` result.</li></ul> |
| **Returns**                                 | <ul><li>The `Then` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul><li>The parameters can be any `resolvable` type.</li><li></li><li>For example:</li><li>```lua</li><li>If(anObservable)</li><li>:Then(function(aResult)</li><li>    doSomethingWith(aResult, anotherResult)</li><li>    return true</li><li>end)</li><li>:Otherwise(false)</li><li>```</li></ul>                |

| [Then](#Then)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.If.Then:Then(...) -> If.Then`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Each [Then](cp.rx.go.If.Then.md) can have a subsequent `Then` which will be executed after the previous one resolves.                                                                     |
| **Parameters**                              | <ul><li>...  - The list of `resolvable` values to process for the sucessful `If` result.</li></ul> |
| **Returns**                                 | <ul><li>A new [If.Then](cp.rx.go.If.Then.md) instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


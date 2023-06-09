# cp.rx.go.SetProp.To.Then

A `Statement.Modifier` that defines what happens when after `SetProp.To` is executed.

---

## Submodules
 * [cp.rx.go.SetProp.To.Then.ThenReset](cp.rx.go.SetProp.To.Then.ThenReset.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [Then](#then)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [ThenReset](#thenreset)


---

## API Documentation

#### Constants


### [Then](#then)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.SetProp.To.Then <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | This is a configuration of `SetProp.To`, which should be created via `SetProp:To(...):Then(...)`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/SetProp.lua line 130](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/SetProp.lua#L130) |

---

#### Methods


### [ThenReset](#thenreset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.SetProp.To.Then:ThenReset(...) -> SetProp.To.Then.ThenReset`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call this to have the `cp.prop` get reset to its original value after the `Then` `resolvables` have resolved.                                                                     |
| **Parameters**                              | <ul><li>...  - The list of `resolveable` values to process for the successful `If` result.</li></ul> |
| **Returns**                                 | <ul><li>The `Then` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li>```lua</li><li>local foo = prop.THIS("foo")</li><li>SetProp(foo):To("bar") -- `foo` is updated to "bar"</li><li>:Then(function(aResult)</li><li>    doSomethingWith(aResult, anotherResult)</li><li>    return true</li><li>end)</li><li>:ThenReset() -- `foo` is back to "foo" now</li><li>```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/SetProp.lua line 179](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/SetProp.lua#L179) |

---


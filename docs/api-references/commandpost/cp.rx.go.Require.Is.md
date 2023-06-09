# cp.rx.go.Require.Is

Specifies that the `Require`d value `Is` a specific value.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [Is](#is)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [OrThrow](#orthrow)


---

## API Documentation

#### Constants


### [Is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require.Is <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets a specific value all values from the `requirement` must match.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/Require.lua line 83](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Require.lua#L83) |

---

#### Methods


### [OrThrow](#orthrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require.Is:OrThrow(...) -> Require.OrThrow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies what is thrown if the [Require](cp.rx.go.Require.md) test fails.                                                                     |
| **Parameters**                              | <ul><li>...  - The list of `resolvable` items to process.</li></ul> |
| **Returns**                                 | <ul><li>A [Require.OrThrow](cp.rx.go.Require.OrThrow.md) instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/Require.lua line 122](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Require.lua#L122) |

---


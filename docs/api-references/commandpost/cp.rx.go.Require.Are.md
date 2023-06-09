# cp.rx.go.Require.Are

Specifies that the `Require`d values `Are` a specific value.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [Are](#are)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [OrThrow](#orthrow)


---

## API Documentation

#### Constants


### [Are](#are)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require.Are <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets a specific value all values from the `requirement` must match.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/Require.lua line 101](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Require.lua#L101){target="_blank"} |

---

#### Methods


### [OrThrow](#orthrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require.Are:OrThrow(...) -> Require.OrThrow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies what is thrown if the [Require](cp.rx.go.Require.md) test fails.                                                                     |
| **Parameters**                              | <ul><li>...  - The list of `resolvable` items to process.</li></ul> |
| **Returns**                                 | <ul><li>A [Require.OrThrow](cp.rx.go.Require.OrThrow.md) instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/Require.lua line 133](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Require.lua#L133){target="_blank"} |

---


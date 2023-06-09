# cp.rx.go.Require.AreNot

Specifies that the `Require`d values `AreNot` a specific value.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [AreNot](#arenot)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [OrThrow](#orthrow)


---

## API Documentation

#### Constants


### [AreNot](#arenot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require.AreNot <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets a specific value all values from the `requirement` must not match.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/rx/go/Require.lua line 166](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Require.lua#L166) |

---

#### Methods


### [OrThrow](#orthrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require.AreNot:OrThrow(...) -> Require.OrThrow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies what is thrown if the [Require](cp.rx.go.Require.md) test fails.                                                                     |
| **Parameters**                              | <ul><li>...  - The list of `resolvable` items to process.</li></ul> |
| **Returns**                                 | <ul><li>A [Require.OrThrow](cp.rx.go.Require.OrThrow.md) instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/Require.lua line 198](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Require.lua#L198) |

---


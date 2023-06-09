# cp.rx.go.Require.IsNot

Specifies that the `Require`d value `IsNot` a specific value.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [IsNot](#isnot)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [OrThrow](#orthrow)


---

## API Documentation

#### Constants


### [IsNot](#isnot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require.IsNot <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets a specific value all values from the `requirement` must not match.                                                                     |
| **Notes**                                   | - None |

---

#### Methods


### [OrThrow](#orthrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require.IsNot:OrThrow(...) -> Require.OrThrow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies what is thrown if the [Require](cp.rx.go.Require.md) test fails.                                                                     |
| **Parameters**                              | <ul><li>...  - The list of `resolvable` items to process.</li></ul> |
| **Returns**                                 | <ul><li>A [Require.OrThrow](cp.rx.go.Require.OrThrow.md) instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


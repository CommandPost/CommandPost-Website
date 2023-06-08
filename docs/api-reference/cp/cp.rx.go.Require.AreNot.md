# [docs](index.md) » cp.rx.go.Require.AreNot
---

Specifies that the `Require`d values `AreNot` a specific value.

## API Overview
* Constants - Useful values which cannot be changed
 * [AreNot](#AreNot)
* Methods - API calls which can only be made on an object returned by a constructor
 * [OrThrow](#OrThrow)

## API Documentation

### Constants

| [AreNot](#AreNot)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require.AreNot <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets a specific value all values from the `requirement` must not match.                                                                     |

### Methods

| [OrThrow](#OrThrow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Require.AreNot:OrThrow(...) -> Require.OrThrow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies what is thrown if the [Require](cp.rx.go.Require.md) test fails.                                                                     |
| **Parameters**                              | <ul><li>...  - The list of `resolvable` items to process.</li></ul> |
| **Returns**                                 | <ul><li>A [Require.OrThrow](cp.rx.go.Require.OrThrow.md) instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


# cp.rx.go.Given.Then

A [Statement.Modifier](cp.rx.go.Statement.Modifier.md) of [Given](cp.rx.go.Given.md)
that defines what happens after the `Given` values resolve.

For example:

```lua
Given(anObservable):Then(function(value) return value:doSomething() end)
```

---

## API Overview
**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [Then](#then)


---

## API Documentation

### Methods


### [Then](#then)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Given.Then:Then(...) -> Given.Then`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Allows another set of `resolvables` to be processed after a `Then` has resolved.                                                                     |
| **Parameters**                              | <ul><li>...      - The list of `resolvable` values to process.</li></ul> |
| **Returns**                                 | <ul><li>Another [Given.Then](cp.rx.go.Given.Then.md) instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

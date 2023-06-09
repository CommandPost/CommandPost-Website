# cp.rx.go.Do.Then

A [Statement.Modifier](cp.rx.go.Statement.Modifier.md) of [Do](cp.rx.go.Do.md)
that defines what happens after the `Do` values resolve.

For example:

```lua
Do(anObservable):Then(Observable.of(1, 2, 3))
```

If a parameter is a `function`, it will be passed the results of the previous `Do` or `Then` parameters.

For example:
```lua
Do(anObservable, anotherObservable)
:Then(function(aResult, anotherResult)
    doSomethingWith(aResult, anotherResult)
    return true
end)
```

## API Overview
### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [Then](#then)


## API Documentation

### Methods


### [Then](#then)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Do.Then:Then(...) -> Do.Then`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Allows another set of `resolvables` to be processed after a `Then` has resolved.                                                                     |
| **Parameters**                              | <ul><li>...      - The list of `resolvable` values to process.</li></ul> |
| **Returns**                                 | <ul><li>Another [Do.Then](cp.rx.go.Do.Then.md) instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

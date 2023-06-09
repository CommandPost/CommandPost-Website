# cp.rx.go.Do

A [Statement](cp.rx.go.Statement.md) that will execute the provided `resolvable` values.
This will resolve the provided values into [Observables](cp.rx.Observable.md) and pass on the
first result of each to the next stage as individual parameters.
This will continue until one of the `Observables` has completed, at which
point other results from values are ignored.

For example:

```lua
Do(Observable.of(1, 2, 3), Observable.of("a", "b"))
:Now(function(number, letter) print(tostring(number)..letter))
```

This will result in:

```
1a
2b
```

For more power, you can add a [Then](#Then) to futher modify the results, or chain other operations.

---

## Submodules
 * [cp.rx.go.Do.Then](cp.rx.go.Do.Then.md)

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Do](#do)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [Then](#then)


---

## API Documentation

#### Constructors


### [Do](#do)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Do(...) -> Do`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Begins the definition of a `Do` `Statement`.                                                                     |
| **Parameters**                              | <ul><li>...      - the list of `resolvable` values to evaluate.</li></ul> |
| **Returns**                                 | <ul><li>A new `Do` `Statement` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/go/Do.lua line 35](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Do.lua#L35){target="_blank"} |

---

#### Methods


### [Then](#then)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Do:Then(...) -> Do.Then`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call this to define what will happen once the `Do` values resolve successfully. The parameters can be any 'resolvable' type.                                                                     |
| **Parameters**                              | <ul><li>...  - The list of `resolvable` values to process for each `Do` result.</li></ul> |
| **Returns**                                 | <ul><li>The [Then](cp.rx.go.Do.Then.md) [Statement.Modifier](cp.rx.go.Statement.Modifier.md).</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/go/Do.lua line 82](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Do.lua#L82){target="_blank"} |

---


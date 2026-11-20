# cp.rx.go.Given

A [Statement](cp.rx.go.Statement.md) that will execute the provided `resolvable` values.
This will resolve the provided values into [Observables](cp.rx.Observable.md) and pass on the
first result of each to the next stage as individual parameters.
This will continue until one of the `Observables` has completed, at which
point other results from values are ignored.

---

## Submodules
 * [cp.rx.go.Given.Then](cp.rx.go.Given.Then.md)

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Given](#given)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [Then](#then)


---

## API Documentation

#### Constructors


### [Given](#given)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Given(...) -> Given`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Begins the definition of a `Given` `Statement`.                                                                     |
| **Parameters**                              | <ul><li>...      - the list of `resolvable` values to evaluate.</li></ul> |
| **Returns**                                 | <ul><li>A new `Given` `Statement` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This will resolve the provided values into `Observable`s and pass on the</li><li>first result of each to the next stage as individual parameters.</li><li>This will continue until one of the `Observables` has completed, at which</li><li>point other results from values are ignored.</li><li></li><li>For example:</li><li></li><li>```lua</li><li>Given(Observable.of(1, 2, 3), Observable.of("a", "b"))</li><li>:Now(function(number, letter) print(tostring(number)..letter))</li><li>```</li><li></li><li>This will result in:</li><li></li><li>```</li><li>1a</li><li>2b</li><li>```</li><li></li><li>For more power, you can add a `Then` to futher modify the results, or chain other operations.</li><li>See the `Given.Then` documentation for details.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/go/Given.lua line 18](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Given.lua#L18) |

---

#### Methods


### [Then](#then)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Given:Then(...) -> Given.Then`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call this to define what will happen once the `Given` values resolve successfully.                                                                     |
| **Parameters**                              | <ul><li>...  - The list of `resolveable` values to process for each `Given` result.</li></ul> |
| **Returns**                                 | <ul><li>The [Then](cp.rx.go.Given.Then.md) [Statement.Modifier](cp.rx.go.Statement.Modifier.md).</li></ul>          |
| **Notes**                                   | <ul><li>The parameters can be any 'resolvable' type.</li><li></li><li>If a parameter is a `function`, it will be passed the results of the previous `Given` or `Then` parameters.</li><li></li><li>For example:</li><li>```lua</li><li>Given(anObservable, anotherObservable)</li><li>:Then(function(aResult, anotherResult)</li><li>    doSomethingWith(aResult, anotherResult)</li><li>    return true</li><li>end)</li><li>```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/go/Given.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Given.lua#L77) |

---


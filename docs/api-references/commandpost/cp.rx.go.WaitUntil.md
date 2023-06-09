# cp.rx.go.WaitUntil

A [Statement](cp.rx.go.Statement.md) that will wait for the first value from a `resolveable` that matches the predicate.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [Are](#are)
 * [AreNot](#arenot)
 * [Is](#is)
 * [IsNot](#isnot)
 * [Matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [WaitUntil](#waituntil)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [Are](#are)
 * [AreNot](#arenot)
 * [Is](#is)
 * [IsNot](#isnot)
 * [Matches](#matches)


---

## API Documentation

#### Constants


### [Are](#are)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.WaitUntil.Are <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets the values to match.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/WaitUntil.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/WaitUntil.lua#L61) |

---


### [AreNot](#arenot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.WaitUntil.AreNot <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets a value to skip over.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/WaitUntil.lua line 94](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/WaitUntil.lua#L94) |

---


### [Is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.WaitUntil.Is <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets a specific value to wait for.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/WaitUntil.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/WaitUntil.lua#L47) |

---


### [IsNot](#isnot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.WaitUntil.IsNot <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets a value that is skipped over.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/WaitUntil.lua line 80](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/WaitUntil.lua#L80) |

---


### [Matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.WaitUntil.Matches <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets a predicate check values against.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/WaitUntil.lua line 113](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/WaitUntil.lua#L113) |

---

#### Constructors


### [WaitUntil](#waituntil)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.WaitUntil(requirement) -> WaitUntil`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `WaitUntil` `Statement` with the specified `requirement`.                                                                     |
| **Parameters**                              | <ul><li>requirement  - a `resolvable` value that will be checked.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` instance which will check if the `resolvable` matches the requirement.</li></ul>          |
| **Notes**                                   | <ul><li>By default, it will wait until the value is `truthy` - not `nil` and not `false`.</li><li>Example:</li><li></li><li>```lua</li><li>WaitUntil(someObservable):Is(true)</li><li>```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/WaitUntil.lua line 15](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/WaitUntil.lua#L15) |

---

#### Methods


### [Are](#are)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.WaitUntil:Are(value) -> WaitUntil.Are`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the value to check.                                                                     |
| **Parameters**                              | <ul><li>value  - The value to wait for.</li></ul> |
| **Returns**                                 | <ul><li>The `Are` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/WaitUntil.lua line 65](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/WaitUntil.lua#L65) |

---


### [AreNot](#arenot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.WaitUntil:AreNot(value) -> WaitUntil.AreNot`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the value to skip over.                                                                     |
| **Parameters**                              | <ul><li>value  - The value to skip over.</li></ul> |
| **Returns**                                 | <ul><li>The `AreNot` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/WaitUntil.lua line 98](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/WaitUntil.lua#L98) |

---


### [Is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.WaitUntil:Is(value) -> WaitUntil.Is`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the value to check.                                                                     |
| **Parameters**                              | <ul><li>value  - The value to wait for.</li></ul> |
| **Returns**                                 | <ul><li>The `Is` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/WaitUntil.lua line 51](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/WaitUntil.lua#L51) |

---


### [IsNot](#isnot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.WaitUntil:IsNot(value) -> WaitUntil.IsNot`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the value to skip.                                                                     |
| **Parameters**                              | <ul><li>value  - The value to skip over.</li></ul> |
| **Returns**                                 | <ul><li>The `IsNot` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/WaitUntil.lua line 84](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/WaitUntil.lua#L84) |

---


### [Matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.WaitUntil:Matches(predicate) -> WaitUntil.Matches`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the predicate function that will check the `requirement` results.                                                                     |
| **Parameters**                              | <ul><li>predicate  - The function that will get called to determine if it has been found.</li></ul> |
| **Returns**                                 | <ul><li>The `Matches` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul><li>* Example:</li><li>```lua</li><li>WaitUntil(someObservable):Matches(function(value) return value % 2 == 0 end)</li><li>```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/WaitUntil.lua line 117](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/WaitUntil.lua#L117) |

---


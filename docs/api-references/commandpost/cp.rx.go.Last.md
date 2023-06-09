# cp.rx.go.Last

A `Statement` that will complete after the only the last result resolves.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Last](#last)


---

## API Documentation

#### Constructors


### [Last](#last)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Last(resolvable) -> Last`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Last` `Statement` that will return the first value from the `resolvable` and complete.                                                                     |
| **Parameters**                              | <ul><li>resolvable  - a `resolvable` value, of which the first result will be returned.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will return the first value when executed.</li></ul>          |
| **Notes**                                   | <ul><li>Example:</li><li></li><li>```lua</li><li>Last(someObservable)</li><li>```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/Last.lua line 8](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Last.lua#L8) |

---


# cp.rx.go.Last

A `Statement` that will complete after the only the last result resolves.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [Last](#Last)

## API Documentation

### Constructors


### [Last](#Last)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Last(resolvable) -> Last`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Last` `Statement` that will return the first value from the `resolvable` and complete.                                                                     |
| **Parameters**                              | <ul><li>resolvable  - a `resolvable` value, of which the first result will be returned.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will return the first value when executed.</li></ul>          |
| **Notes**                                   | <ul><li>Example:</li><li></li><li>```lua</li><li>Last(someObservable)</li><li>```</li></ul>                |

---

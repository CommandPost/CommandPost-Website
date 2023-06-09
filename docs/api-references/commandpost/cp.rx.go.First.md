# cp.rx.go.First

_Extends:_ [Statement](cp.rx.go.Statement.md)

A [Statement](cp.rx.go.Statement.md) that will complete after the first result resolves.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [First](#First)

## API Documentation

### Constructors

| [First](#First)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.First(resolvable) -> First`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `First` `Statement` that will return the first value from the `resolvable` and complete.                                                                     |
| **Parameters**                              | <ul><li>resolvable  - a `resolvable` value, of which the first result will be returned.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will return the first value when executed.</li></ul>          |
| **Notes**                                   | <ul><li>Example:</li><li></li><li>```lua</li><li>First(someObservable)</li><li>```</li></ul>                |


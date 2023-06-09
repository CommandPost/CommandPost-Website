# cp.rx.go.List

_Extends:_ [Statement](cp.rx.go.Statement.md)

A [Statement](cp.rx.go.Statement.md) that will loop through a table as a list from item `1` to the table length.

## Submodules
 * [cp.rx.go.List.Sorted](cp.rx.go.List.Sorted.md)
 * [cp.rx.go.List.SortedBy](cp.rx.go.List.SortedBy.md)

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [List](#List)
* Methods - API calls which can only be made on an object returned by a constructor
 * [Sorted](#Sorted)
 * [SortedBy](#SortedBy)

## API Documentation

### Constructors

| [List](#List)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.List(values) -> List`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `List` `Statement` that will loop through the provided table as a list.                                                                     |
| **Parameters**                              | <ul><li>values  - a `table` value, or a `function` which returns a table.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will return the first value when executed.</li></ul>          |
| **Notes**                                   | <ul><li>Example:</li><li></li><li>```lua</li><li>List(someTable)</li><li>```</li></ul>                |

### Methods

| [Sorted](#Sorted)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.List:Sorted() -> List.Sorted`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates the List should be sorted by its natural order before being sent out individually.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Sorted` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li>```lua</li><li>Sort(9,2,5):Sorted()</li><li>```</li></ul>                |

| [SortedBy](#SortedBy)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.List:SortedBy(...) -> List.SortedBy`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates the List should be sorted by the provided `function`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `SortedBy` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li>```lua</li><li>Sort(9,2,5):SortedBy(function(a, b) return b < a)</li><li>```</li></ul>                |


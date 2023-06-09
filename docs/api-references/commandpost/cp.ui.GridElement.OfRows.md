# cp.ui.GridElement.OfRows

Processes the contents of the GridElement as a list of rows.
Each of the defined `Element` initialisers will be used to create a cell within each `Row`.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [OfRows](#OfRows)
* Methods - API calls which can only be made on an object returned by a constructor
 * [createRow](#createRow)
 * [createRows](#createRows)

## API Documentation

### Constructors

| [OfRows](#OfRows)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.OfRows(...) -> cp.ui.GridElement.OfRows`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `GridElement.OfRows` instance.                                                                     |
| **Parameters**                              | <ul><li>... - The `Cell` initialisers.</li></ul> |
| **Returns**                                 | <ul><li>A new `GridElement.OfRows` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [createRow](#createRow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.OfRows:createRow(tbl, rowFinder) -> cp.ui.Row`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new `Row` instance.                                                                     |
| **Parameters**                              | <ul><li>tbl - The `GridElement` instance.</li><li>rowFinder - a callable that will return the `axuielementObject` for the row.</li></ul> |
| **Returns**                                 | <ul><li>The new `Row` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [createRows](#createRows)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.GridElement.OfRows:createRows(tbl, rowsFinder) -> table of cp.ui.Row`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates the [Row](cp.ui.Row.md)s for the `GridElement`.                                                                     |
| **Parameters**                              | <ul><li>tbl - The `GridElement` instance</li><li>rowsFinder - a callable that will return the a table of `cp.ui.Row` values.</li></ul> |
| **Returns**                                 | <ul><li>A table of `Row`s.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

# [docs](index.md) » cp.rx.go.Statement.Modifier
---

A `Statement.Modifier` is an extension to a [Statement](cp.rx.go.Statement.md) that provides additional configuration details.
They are initiated via the [modifier](#modifier) method of a defined [Statement](cp.rx.go.Statement.md).

All `Statement.Modifier` instances will also have the methods defined by [Statement](cp.rx.go.Statement.md).

## Submodules
 * [cp.rx.go.Statement.Modifier.Definition](cp.rx.go.Statement.Modifier.Definition.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [is](#is)
* Methods - API calls which can only be made on an object returned by a constructor
 * [context](#context)
 * [toObservable](#toObservable)

## API Documentation

### Functions

| [is](#is)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement.Modifier.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a `Statement.Modifier`.                                                                     |
| **Parameters**                              | <ul><li>thing    - The thing to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `thing` is a `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [context](#context)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement.Modifier:context() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `context` table for the `Statement.Modifier`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `context` table.</li></ul>          |
| **Notes**                                   | <ul><li>The `context` is shared between the `Statement` and all `Statement.Modifiers` when being executed.</li></ul>                |

| [toObservable](#toObservable)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement.Modifier:toObservable() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new `Observable` instance for the current configuration.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

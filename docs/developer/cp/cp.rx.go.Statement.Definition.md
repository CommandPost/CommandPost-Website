# [docs](index.md) » cp.rx.go.Statement.Definition
---

A [Statement](cp.rx.go.Statement.md) is defined before being executable.
A definition is initiated with the [Statement:modifier(...)](cp.rx.go.Statement.md#modifer) method.

## API Overview
* Functions - API calls offered directly by the extension
 * [is](#is)
* Methods - API calls which can only be made on an object returned by a constructor
 * [define](#define)
 * [onInit](#onInit)
 * [onObservable](#onObservable)

## API Documentation

### Functions

| [is](#is)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement.Definition.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is an instance of `Statement.Definition`.                                                                     |
| **Parameters**                              | <ul><li>thing    - The thing to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the thing is a `Statement.Definition`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [define](#define)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement.Definition:define() -> Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Completes the definition of the [Statement](cp.rx.go.Statement.md).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new [Statement](cp.rx.go.Statement.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [onInit](#onInit)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement.Definition:onInit(initFn) -> Statement.Definition`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Defines the function which will be called to initialise the context.                                                                     |
| **Parameters**                              | <ul><li>initFn       - The init function.</li></ul> |
| **Returns**                                 | <ul><li>The Statement Definition</li></ul>          |
| **Notes**                                   | <ul><li>* The function will be passed the `context` table as the first parameter,</li><li>  and any other parameters passed to the statement follow.</li></ul>                |

| [onObservable](#onObservable)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement.Definition:onObservable(observableFn) -> Statement.Definition`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Defines the function which will be called to create the [Observable](cp.rx.Observable.md) for the [Statement](cp.rx.go.Statement.md). The function will be passed the `context` table and must return an `Observable`.                                                                     |
| **Parameters**                              | <ul><li>observableFn     - The observable creator function.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement.Definition`</li></ul>          |
| **Notes**                                   | <ul></ul>                |


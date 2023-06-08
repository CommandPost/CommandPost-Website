# [docs](index.md) » cp.rx.go.Retry
---

_Extends:_ [Statement](cp.rx.go.Statement.md)

A [Statement](cp.rx.go.Statement.md) that will retry the contained statement if there is an error.
It can be limited to a set number of retries, and have a delay added between retries.

## API Overview
* Constants - Useful values which cannot be changed
 * [DelayedBy](#DelayedBy)
 * [UpTo](#UpTo)
* Constructors - API calls which return an object, typically one that offers API methods
 * [Retry](#Retry)
* Methods - API calls which can only be made on an object returned by a constructor
 * [DelayedBy](#DelayedBy)
 * [UpTo](#UpTo)

## API Documentation

### Constants

| [DelayedBy](#DelayedBy)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Retry.DelayedBy <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets the delay between retries.                                                                     |

| [UpTo](#UpTo)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Retry.UpTo <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets the number of times to retry.                                                                     |

### Constructors

| [Retry](#Retry)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Retry(resolvable) -> Retry`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Retry` `Statement` that will retry the `resolveable` if it emits an error.                                                                     |
| **Parameters**                              | <ul><li>resolvable  - a `resolvable` value, which will be retried if it sends an `error` signal.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul><li>Example:</li><li></li><li>```lua</li><li>Retry(someObservable)</li><li>```</li></ul>                |

### Methods

| [DelayedBy](#DelayedBy)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Retry:DelayedBy(milliseconds[, scheduler]) -> Retry.DelayedBy`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specify a time in millieconds to delay by.                                                                     |
| **Parameters**                              | <ul><li>milliseconds - The amount of time do delay between retries.</li><li>scheduler    - The scheduler to use. Defaults to `cp.rx.util.defaultScheduler()`.</li></ul> |
| **Returns**                                 | <ul><li>The `DelayedBy` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [UpTo](#UpTo)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Retry:UpTo(count) -> Retry.UpTo`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the number of times to retry up to.                                                                     |
| **Parameters**                              | <ul><li>count  - The number of times to retry.</li></ul> |
| **Returns**                                 | <ul><li>The `UpTo` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


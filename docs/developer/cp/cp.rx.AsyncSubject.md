# [docs](index.md) » cp.rx.AsyncSubject
---

`AsyncSubjects` are subjects that produce either no values or a single value.  If
multiple values are produced via `onNext`, only the last one is used.  If `onError` is called, then
no value is produced and `onError` is called on any subscribed [Observers](cp.rx.Observers.md).
If an [Observer](cp.rx.Observer.md) subscribes and the `AsyncSubject` has already terminated,
the `Observer` will immediately receive the value or the error.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [create](#create)
* Methods - API calls which can only be made on an object returned by a constructor
 * [onCompleted](#onCompleted)
 * [onError](#onError)
 * [onNext](#onNext)
 * [subscribe](#subscribe)

## API Documentation

### Constructors

| [create](#create)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.AsyncSubject.create() -> cp.rx.AsyncSubject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `AsyncSubject`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `AsyncSubject`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [onCompleted](#onCompleted)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.AsyncSubject:onCompleted() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Signal to all [Observers](cp.rx.Observers.md) that the `AsyncSubject` will not produce any more values.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [onError](#onError)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.AsyncSubject:onError(message) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Signal to all [Observers](cp.rx.Observer.md) that an error has occurred.                                                                     |
| **Parameters**                              | <ul><li>message - A string describing what went wrong.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [onNext](#onNext)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.AsyncSubject:onNext(...) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Pushes zero or more values to the `AsyncSubject`.                                                                     |
| **Parameters**                              | <ul><li>...       - The values to send.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [subscribe](#subscribe)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.AsyncSubject:subscribe(onNext, onError, onCompleted) -> cp.rx.Reference`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new [Observer](cp.rx.Observer.md) and attaches it to the `AsyncSubject`.                                                                     |
| **Parameters**                              | <ul><li>onNext | observer - A `function` called when the `AsyncSubject` produces a value or an existing [Observer](cp.rx.Observer.md) to attach to the `AsyncSubject`.</li><li>onError           - A `function` called when the `AsyncSubject` terminates due to an error.</li><li>onCompleted       - A `funtion` called when the `AsyncSubject` completes normally.</li></ul> |
| **Returns**                                 | <ul><li>The [Reference](cp.rx.Reference.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |


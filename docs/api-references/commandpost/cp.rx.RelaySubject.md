# cp.rx.RelaySubject

A [Subject](cp.rx.Subject.md) that provides new [Observers](cp.rx.Observer.md) with some or all of the most recently
produced values upon reference.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [create](#create)
* Methods - API calls which can only be made on an object returned by a constructor
 * [onNext](#onNext)
 * [subscribe](#subscribe)

## API Documentation

### Constructors

| [create](#create)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.RelaySubject.create([n]) -> cp.rx.RelaySubject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `ReplaySubject`.                                                                     |
| **Parameters**                              | <ul><li>bufferSize - The number of values to send to new subscribers. If `nil`, an infinite buffer is used (note that this could lead to memory issues).</li></ul> |
| **Returns**                                 | <ul><li>The new `ReplaySubject.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [onNext](#onNext)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.RelaySubject:onNext(...) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Pushes zero or more values to the `ReplaySubject`. They will be broadcasted to all [Observers](cp.rx.Observer.md).                                                                     |
| **Parameters**                              | <ul><li>... - The values to send.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [subscribe](#subscribe)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.RelaySubject:subscribe([observer [, onError[, onCompleted]]]) -> cp.rx.Reference`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new [Observer](cp.rx.Observer.md) and attaches it to the `ReplaySubject`. Immediately broadcasts the most recent contents of the buffer to the Observer.                                                                     |
| **Parameters**                              | <ul><li>observer - Either an [Observer](cp.rx.Observer.md), or a `function` to call when the `ReplaySubject` produces a value.</li><li>onError - A `function` to call when the `ReplaySubject` terminates due to an error.</li><li>onCompleted - A `function` to call when the ReplaySubject completes normally.</li></ul> |
| **Returns**                                 | <ul><li>The [Reference](cp.rx.Reference.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |


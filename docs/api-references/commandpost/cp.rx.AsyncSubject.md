# cp.rx.AsyncSubject

`AsyncSubjects` are subjects that produce either no values or a single value.  If
multiple values are produced via `onNext`, only the last one is used.  If `onError` is called, then
no value is produced and `onError` is called on any subscribed [Observers](cp.rx.Observers.md).
If an [Observer](cp.rx.Observer.md) subscribes and the `AsyncSubject` has already terminated,
the `Observer` will immediately receive the value or the error.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [create](#create)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [onCompleted](#oncompleted)
 * [onError](#onerror)
 * [onNext](#onnext)
 * [subscribe](#subscribe)


---

## API Documentation

#### Constructors


### [create](#create)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.AsyncSubject.create() -> cp.rx.AsyncSubject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `AsyncSubject`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `AsyncSubject`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/AsyncSubject.lua line 23](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/AsyncSubject.lua#L23){target="_blank"} |

---

#### Methods


### [onCompleted](#oncompleted)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.AsyncSubject:onCompleted() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Signal to all [Observers](cp.rx.Observers.md) that the `AsyncSubject` will not produce any more values.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/AsyncSubject.lua line 121](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/AsyncSubject.lua#L121){target="_blank"} |

---


### [onError](#onerror)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.AsyncSubject:onError(message) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Signal to all [Observers](cp.rx.Observer.md) that an error has occurred.                                                                     |
| **Parameters**                              | <ul><li>message - A string describing what went wrong.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/AsyncSubject.lua line 99](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/AsyncSubject.lua#L99){target="_blank"} |

---


### [onNext](#onnext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.AsyncSubject:onNext(...) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Pushes zero or more values to the `AsyncSubject`.                                                                     |
| **Parameters**                              | <ul><li>...       - The values to send.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/AsyncSubject.lua line 84](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/AsyncSubject.lua#L84){target="_blank"} |

---


### [subscribe](#subscribe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.AsyncSubject:subscribe(onNext, onError, onCompleted) -> cp.rx.Reference`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new [Observer](cp.rx.Observer.md) and attaches it to the `AsyncSubject`.                                                                     |
| **Parameters**                              | <ul><li>onNext | observer - A `function` called when the `AsyncSubject` produces a value or an existing [Observer](cp.rx.Observer.md) to attach to the `AsyncSubject`.</li><li>onError           - A `function` called when the `AsyncSubject` terminates due to an error.</li><li>onCompleted       - A `funtion` called when the `AsyncSubject` completes normally.</li></ul> |
| **Returns**                                 | <ul><li>The [Reference](cp.rx.Reference.md).</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/AsyncSubject.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/AsyncSubject.lua#L43){target="_blank"} |

---


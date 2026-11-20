# cp.rx.Observer

Observers are simple objects that receive values from [Observables](cp.rx.Observable.md).

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [is](#is)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [create](#create)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [onCompleted](#oncompleted)
 * [onError](#onerror)
 * [onNext](#onnext)


---

## API Documentation

#### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observer.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Tests if the `thing` is an `Observer`.                                                                     |
| **Parameters**                              | <ul><li>thing   - The thing to test.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the thing is an `Observer`, otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observer.lua line 14](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observer.lua#L14) |

---

#### Constructors


### [create](#create)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observer.create(onNext, onError, onCompleted) -> cp.rx.Observer`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Observer.                                                                     |
| **Parameters**                              | <ul><li>onNext - Called when the Observable produces a value.</li><li>onError - Called when the Observable terminates due to an error.</li><li>onCompleted - Called when the Observable completes normally.</li></ul> |
| **Returns**                                 | <ul><li>The new Observer.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observer.lua line 27](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observer.lua#L27) |

---

#### Methods


### [onCompleted](#oncompleted)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observer:onCompleted() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Notify the Observer that the sequence has completed and will produce no more values.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observer.lua line 80](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observer.lua#L80) |

---


### [onError](#onerror)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observer:onError(message) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Notify the Observer that an error has occurred.                                                                     |
| **Parameters**                              | <ul><li>message - A string describing what went wrong.</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observer.lua line 64](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observer.lua#L64) |

---


### [onNext](#onnext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observer:onNext(...) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Pushes zero or more values to the Observer.                                                                     |
| **Parameters**                              | <ul><li>... - The list of values to send.</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observer.lua line 49](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observer.lua#L49) |

---


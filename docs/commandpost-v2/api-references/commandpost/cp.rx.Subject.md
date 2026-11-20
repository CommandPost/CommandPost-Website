# cp.rx.Subject

`Subjects` function both as an [Observer](cp.rs.Observer.md) and as an [Observable](cp.rx.Observable.md). Subjects inherit all
`Observable` functions, including [subscribe](#subscribe). Values can also be pushed to the `Subject`, which will
be broadcasted to any subscribed [Observers](cp.rx.Observers.md).

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
| **Signature**                               | `cp.rx.Subject.create() -> cp.rx.Subject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Subject.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Subject`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Subject.lua line 21](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Subject.lua#L21) |

---

#### Methods


### [onCompleted](#oncompleted)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Subject:onCompleted() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Signal to all [Observers](cp.rx.Observer.md) that the `Subject` will not produce any more values.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Subject.lua line 127](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Subject.lua#L127) |

---


### [onError](#onerror)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Subject:onError(message) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Signal to all `Observers` that an error has occurred.                                                                     |
| **Parameters**                              | <ul><li>message - A string describing what went wrong.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Subject.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Subject.lua#L105) |

---


### [onNext](#onnext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Subject:onNext(...) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Pushes zero or more values to the `Subject`. They will be broadcasted to all [Observers](cp.rx.Observer.md).                                                                     |
| **Parameters**                              | <ul><li>... - The values to send.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Subject.lua line 86](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Subject.lua#L86) |

---


### [subscribe](#subscribe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Subject:subscribe(observer[, onError[, onCompleted]]) -> cp.rx.Reference`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new [Observer](cp.rx.Observer.md) and attaches it to the Subject.                                                                     |
| **Parameters**                              | <ul><li>observer - Either an [Observer](cp.rx.Observer.md), or a `function` called when the `Subject` produces a value.</li><li>onError - A `function` called when the `Subject` terminates due to an error.</li><li>onCompleted - A `function` called when the `Subject` completes normally.</li></ul> |
| **Returns**                                 | <ul><li>The [Reference](cp.rx.Reference.md)</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Subject.lua line 39](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Subject.lua#L39) |

---


# cp.rx.go.Retry

_Extends:_ [Statement](cp.rx.go.Statement.md)

A [Statement](cp.rx.go.Statement.md) that will retry the contained statement if there is an error.
It can be limited to a set number of retries, and have a delay added between retries.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [DelayedBy](#delayedby)
 * [UpTo](#upto)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Retry](#retry)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [DelayedBy](#delayedby)
 * [UpTo](#upto)


---

## API Documentation

#### Constants


### [DelayedBy](#delayedby)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Retry.DelayedBy <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets the delay between retries.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/rx/go/Retry.lua line 62](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Retry.lua#L62) |

---


### [UpTo](#upto)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Retry.UpTo <cp.rx.go.Statement.Modifier>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Statement.Modifier` that sets the number of times to retry.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/rx/go/Retry.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Retry.lua#L43) |

---

#### Constructors


### [Retry](#retry)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Retry(resolvable) -> Retry`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Retry` `Statement` that will retry the `resolveable` if it emits an error.                                                                     |
| **Parameters**                              | <ul><li>resolvable  - a `resolvable` value, which will be retried if it sends an `error` signal.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul><li>Example:</li><li></li><li>```lua</li><li>Retry(someObservable)</li><li>```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/go/Retry.lua line 12](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Retry.lua#L12) |

---

#### Methods


### [DelayedBy](#delayedby)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Retry:DelayedBy(milliseconds[, scheduler]) -> Retry.DelayedBy`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specify a time in millieconds to delay by.                                                                     |
| **Parameters**                              | <ul><li>milliseconds - The amount of time do delay between retries.</li><li>scheduler    - The scheduler to use. Defaults to `cp.rx.util.defaultScheduler()`.</li></ul> |
| **Returns**                                 | <ul><li>The `DelayedBy` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/go/Retry.lua line 66](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Retry.lua#L66) |

---


### [UpTo](#upto)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Retry:UpTo(count) -> Retry.UpTo`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the number of times to retry up to.                                                                     |
| **Parameters**                              | <ul><li>count  - The number of times to retry.</li></ul> |
| **Returns**                                 | <ul><li>The `UpTo` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/go/Retry.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/Retry.lua#L47) |

---


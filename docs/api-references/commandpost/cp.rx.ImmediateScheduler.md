# cp.rx.ImmediateScheduler

Schedules `Observables` by running all operations immediately.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [create](#create)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [schedule](#schedule)


---

## API Documentation

#### Constructors


### [create](#create)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.ImmediateScheduler.create() -> cp.rx.ImmediageScheduler`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `ImmediateScheduler`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `ImmediateScheduler`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/rx/ImmediateScheduler.lua line 14](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/ImmediateScheduler.lua#L14) |

---

#### Methods


### [schedule](#schedule)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.ImmediateScheduler:schedule(action) -> cp.rx.Reference`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Schedules a `function` to be run on the scheduler. It is executed immediately.                                                                     |
| **Parameters**                              | <ul><li>action    - The `function` to execute.</li></ul> |
| **Returns**                                 | <ul><li>The [Reference](cp.rx.Reference.md).</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/rx/ImmediateScheduler.lua line 27](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/ImmediateScheduler.lua#L27) |

---


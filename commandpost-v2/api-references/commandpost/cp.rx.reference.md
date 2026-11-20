# cp.rx.Reference

A handle representing the link between an [Observer](cp.rx.Observer.md) and an [Observable](cp.rx.Observable.md), as well as any
work required to clean up after the Observable completes or the Observer cancels.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [create](#create)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [cancel](#cancel)

---

## API Documentation

#### Constructors

### [create](#create)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Reference.create(action) -> cp.rx.Reference`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Reference.                                                                     |
| **Parameters**                              | <ul><li>action - The action to run when the reference is canceld. It will only be run once.</li></ul> |
| **Returns**                                 | <ul><li>the [Reference](cp.rx.Reference.md).</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Reference.lua line 15](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Reference.lua#L15) |

---

#### Methods

### [cancel](#cancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Reference:cancel() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Unsubscribes the reference, performing any necessary cleanup work.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Reference.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Reference.lua#L33) |

---

---

<script src="https://giscus.app/client.js"
        data-repo="CommandPost/CommandPost"
        data-repo-id="MDEwOlJlcG9zaXRvcnk3NDY0NTk2NQ=="
        data-category="Website Discussion"
        data-category-id="DIC_kwDOBHMBzc4CXFFA"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="dark"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>

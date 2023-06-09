# cp.rx.go.If.Then.Otherwise.Then

Each [Otherwise](cp.rx.go.If.Then.Otherwise.md) can have a subsequent `Then` which will be executed after the previous one resolves.

---

## API Overview
**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [Then](#then)


---

## API Documentation

#### Methods


### [Then](#then)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.If.Then.Otherwise.Then:Then(...) -> If.Then.Otherwise.Then`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies additional `resolvables` to resolve after the previous `Then`.                                                                     |
| **Parameters**                              | <ul><li>...      - The list of `resolvable` values.</li></ul> |
| **Returns**                                 | <ul><li>The new `Then` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/rx/go/If.lua line 202](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/go/If.lua#L202){target="_blank"} |

---


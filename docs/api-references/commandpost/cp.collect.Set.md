# cp.collect.Set

An implementation of a logical `set`, which contains a single unique
reference of each item in it. For example:

```lua
Set(1,2,2,3) == Set(1,1,2,3,3) == Set(1,2,3)
```

You can combine sets in a couple of ways. For example, a `union`:

```lua
Set(1,2):union(Set(2,3)) == Set(1,2,3)
Set(1,2) | Set(2,3) == Set(1,2,3)
```

...or an `intersection`:

```lua
Set(1,2):intersection(Set(2,3)) == Set(2)
Set(1,2) & Set(2,3) == Set(2)
```

As indicated above, you can use operators for common set operations. Specifically:

 * [union](#union) (A ⋃ B):                          `a | b` or `a + b`
 * [intersection](#intersection) (A ∩ B):            `a & b`
 * [complement](#complement) (A<sup>c</sup>):        `-a`
 * [difference](#diference) (A - B):                 `a - b`
 * [symetric difference](#symetricDifference) (A ⊕ B)  `a ~ b`

Keep in mind that Lua's operator precedence may be different to that of standard set operations, so it's probably best to group operations in brackets if you combine more than one in a single statement. For example:

```lua
a + b | c ~= a + (b | c)
```

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [everything](#everything)
 * [nothing](#nothing)

**Functions** - _API calls offered directly by the extension_
 * [complement](#complement)
 * [difference](#difference)
 * [has](#has)
 * [intersection](#intersection)
 * [is](#is)
 * [isComplement](#iscomplement)
 * [size](#size)
 * [symetricDifference](#symetricdifference)
 * [union](#union)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [clone](#clone)
 * [fromList](#fromlist)
 * [fromMap](#frommap)
 * [of](#of)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [complement](#complement)
 * [difference](#difference)
 * [has](#has)
 * [intersection](#intersection)
 * [isComplement](#iscomplement)
 * [size](#size)
 * [symetricDifference](#symetricdifference)
 * [union](#union)


---

## API Documentation

#### Constants


### [everything](#everything)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.everything <cp.collect.Set>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `Set` which contains the whole universe.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 694](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L694) |

---


### [nothing](#nothing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.nothing <cp.collect.Set>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | An empty `Set`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 689](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L689) |

---

#### Functions


### [complement](#complement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.complement(set) -> cp.collect.Set`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `Set` which is the complement of the provided set.                                                                     |
| **Parameters**                              | <ul><li>set       - The `Set` to complement.</li></ul> |
| **Returns**                                 | <ul><li>The new `Set`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 455](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L455) |

---


### [difference](#difference)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.difference(left, right) -> cp.collect.Set`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a new `Set` which is the set of values in `left` that are not in `right`.                                                                     |
| **Parameters**                              | <ul><li>left      - The left `Set`.</li><li>right     - The right `Set`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Set`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 392](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L392) |

---


### [has](#has)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.has(set, value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the set has the specified value.                                                                     |
| **Parameters**                              | <ul><li>set   - The `Set` to check.</li><li>value - The value to check for.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the value is contained in the `Set`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 310](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L310) |

---


### [intersection](#intersection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.intersection(left, right) -> cp.collect.Set`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             |                                                                      |
| **Parameters**                              | <ul><li>left      - The left `Set`</li><li>right     - The right `Set`.</li></ul> |
| **Returns**                                 | <ul><li>A new `Set` which contains an intersection `left` and `right`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 360](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L360) |

---


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a `Set`.                                                                     |
| **Parameters**                              | <ul><li>thing     - The thing to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is a `Set`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 213](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L213) |

---


### [isComplement](#iscomplement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.isComplement(set) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the set is a complement set.                                                                     |
| **Parameters**                              | <ul><li>set       - The set to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the set is a complement.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 496](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L496) |

---


### [size](#size)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.size(set) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the size of the set.                                                                     |
| **Parameters**                              | <ul><li>set   - The set to find the size of.</li></ul> |
| **Returns**                                 | <ul><li>the number of values in the set, or the number of values removed from a complement set.</li></ul>          |
| **Notes**                                   | <ul><li>If the set is empty, `0` is returned.</li><li>If the set is a complement, this will return a negative number indicating how many values have been removed from the universal set of all things.</li><li>If the set is a complement of an empty set, `nil` is returned to indicate the size is infinite.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 476](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L476) |

---


### [symetricDifference](#symetricdifference)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.symetricDifference(left, right) -> cp.collect.Set`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs a symetric difference of keys with a value of `true` in the left and right table into a new table. The resulting table will contain items that only occur in the `left` or `right` set, but not both.                                                                     |
| **Parameters**                              | <ul><li>left      - The left `Set`.</li><li>right     - The right `Set`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Set`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 425](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L425) |

---


### [union](#union)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.union(left, right) -> cp.collect.Set`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a new `Set` which is a union of the `left` and `right`                                                                     |
| **Parameters**                              | <ul><li>left      - The left `Set`.</li><li>right     - The right `Set`.</li></ul> |
| **Returns**                                 | <ul><li>A new `Set` which contains a union of the `left` and `right` `Set`s.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 324](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L324) |

---

#### Constructors


### [clone](#clone)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.clone(set) -> cp.collect.Set`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Set` which is a clone of the provided `Set`.                                                                     |
| **Parameters**                              | <ul><li>set       - The set to clone.</li></ul> |
| **Returns**                                 | <ul><li>The new `Set` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 292](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L292) |

---


### [fromList](#fromlist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.fromList(list) -> cp.collect.Set`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Set` instance, containing the unique items in the table collected as a list from `1` to `n`. Any duplicate items will only occur in the `Set` once.                                                                     |
| **Parameters**                              | <ul><li>list      - The table that contains items as a list to add to the `Set`. E.g. `{"foo", "bar"}</li></ul> |
| **Returns**                                 | <ul><li>The new `Set`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 244](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L244) |

---


### [fromMap](#frommap)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.fromMap(map) -> cp.collect.Set`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Set` instance, containing the items in the provided `table` who's key value is `true`. Keys with values other than `true` will be ignored.                                                                     |
| **Parameters**                              | <ul><li>map      - The table that contains key/value items to add to the set. E.g. `{foo = true, bar = true}`</li></ul> |
| **Returns**                                 | <ul><li>The new `Set`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 268](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L268) |

---


### [of](#of)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set.of(...) -> cp.collect.Set`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Set` instance, containing the items in the parameter list.                                                                     |
| **Parameters**                              | <ul><li>The set items.</li></ul> |
| **Returns**                                 | <ul><li>The new `Set` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 231](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L231) |

---

#### Methods


### [complement](#complement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set:complement() -> cp.collect.Set`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Set` which is the complement of the current `Set`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Set`.</li></ul>          |
| **Notes**                                   | <ul><li>You can also use the `-` or `~` prefix operators. E.g. `-a` or `~a`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 567](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L567) |

---


### [difference](#difference)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set:difference(right) -> cp.collect.Set`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Set` which is the set of values in this `Set` that are not in `right`.                                                                     |
| **Parameters**                              | <ul><li>right     - The right `Set`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Set`.</li></ul>          |
| **Notes**                                   | <ul><li>You can also use the `-` operator. E.g. `a - b`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 553](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L553) |

---


### [has](#has)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set:has(value) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if this set has the specified value.                                                                     |
| **Parameters**                              | <ul><li>value     - The value to check for.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `Set` contains the `value`.</li></ul>          |
| **Notes**                                   | <ul><li>You can also check for specific values via `mySet['key']` or `mySet.key`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 511](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L511) |

---


### [intersection](#intersection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set:intersection(...) -> cp.collect.Set`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new `Set` which is an intersection of the current values plus other `Set`s passed in.                                                                     |
| **Parameters**                              | <ul><li>...       - The list of `Set`s to create an intersection from.</li></ul> |
| **Returns**                                 | <ul><li>The new `Set`.</li></ul>          |
| **Notes**                                   | <ul><li>You can also use the `&` operator. E.g. `a & b`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 539](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L539) |

---


### [isComplement](#iscomplement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set:isComplement() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the set is a complement set.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the set is a complement.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 595](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L595) |

---


### [size](#size)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set:size() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the size of the `Set`. If the set is a complement, this will return a negative number indicating how many values have been removed from the universal set of all things.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the number of values in the set, or the number of values removed from a complement set.</li></ul>          |
| **Notes**                                   | <ul><li>If the set is empty, `0` is returned.</li><li>If the set is a complement, this will return a negative number indicating how many values have been removed from the universal set of all things.</li><li>If the set is a complement of an empty set, `nil` is returned to indicate the size is infinite.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 606](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L606) |

---


### [symetricDifference](#symetricdifference)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set:symetricDifference(right) -> cp.collect.Set`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Performs a symetric difference of keys with a value of `true` in the left and right table into a new table. The resulting table will contain items that only occur in the `left` or `right` set, but not both.                                                                     |
| **Parameters**                              | <ul><li>right     - The right `Set`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Set`.</li></ul>          |
| **Notes**                                   | <ul><li>You can also use the `~` operator. E.g. `a ~ b`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 581](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L581) |

---


### [union](#union)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Set:union(...) -> cp.collect.Set`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new set which is a union of the current set plus other `Set`s passed in.                                                                     |
| **Parameters**                              | <ul><li>...       - The list of `Set`s to create a union from.</li></ul> |
| **Returns**                                 | <ul><li>The new `Set` which is a union.</li></ul>          |
| **Notes**                                   | <ul><li>You can also use the `\|` or `+` operator. E.g. `a \| b` or `a + b`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/collect/Set.lua line 525](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/collect/Set.lua#L525) |

---


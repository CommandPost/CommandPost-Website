# cp.rx.Observable

Observables push values to [Observers](cp.rx.Observer.md).

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [is](#is)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [create](#create)
 * [defer](#defer)
 * [empty](#empty)
 * [firstEmitting](#firstemitting)
 * [fromCoroutine](#fromcoroutine)
 * [fromFileByLine](#fromfilebyline)
 * [fromRange](#fromrange)
 * [fromTable](#fromtable)
 * [never](#never)
 * [of](#of)
 * [replicate](#replicate)
 * [throw](#throw)
 * [zip](#zip)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [all](#all)
 * [average](#average)
 * [buffer](#buffer)
 * [catch](#catch)
 * [combineLatest](#combinelatest)
 * [compact](#compact)
 * [concat](#concat)
 * [contains](#contains)
 * [count](#count)
 * [debounce](#debounce)
 * [defaultIfEmpty](#defaultifempty)
 * [delay](#delay)
 * [distinct](#distinct)
 * [distinctUntilChanged](#distinctuntilchanged)
 * [dump](#dump)
 * [elementAt](#elementat)
 * [filter](#filter)
 * [finalize](#finalize)
 * [find](#find)
 * [first](#first)
 * [flatMap](#flatmap)
 * [flatMapLatest](#flatmaplatest)
 * [flatten](#flatten)
 * [ignoreElements](#ignoreelements)
 * [last](#last)
 * [map](#map)
 * [max](#max)
 * [merge](#merge)
 * [min](#min)
 * [next](#next)
 * [partition](#partition)
 * [pluck](#pluck)
 * [reduce](#reduce)
 * [reject](#reject)
 * [retry](#retry)
 * [retryWithDelay](#retrywithdelay)
 * [sample](#sample)
 * [scan](#scan)
 * [skip](#skip)
 * [skipLast](#skiplast)
 * [skipUntil](#skipuntil)
 * [skipWhile](#skipwhile)
 * [startWith](#startwith)
 * [subscribe](#subscribe)
 * [sum](#sum)
 * [switch](#switch)
 * [switchIfEmpty](#switchifempty)
 * [take](#take)
 * [takeLast](#takelast)
 * [takeUntil](#takeuntil)
 * [takeWhile](#takewhile)
 * [tap](#tap)
 * [timeout](#timeout)
 * [unpack](#unpack)
 * [unwrap](#unwrap)
 * [with](#with)


---

## API Documentation

#### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the thing is an instance of [Observable](cp.rx.Observable.md).                                                                     |
| **Parameters**                              | <ul><li>thing   - The thing to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the thing is an `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 26](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L26){target="_blank"} |

---

#### Constructors


### [create](#create)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.create(onSubscription) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Observable.                                                                     |
| **Parameters**                              | <ul><li>onSubscription  - The reference function that produces values.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 39](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L39){target="_blank"} |

---


### [defer](#defer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.defer(fn) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an `Observable` that executes the `function` to create a new `Observable` each time an [Observer](cp.rx.Observer.md) subscribes.                                                                     |
| **Parameters**                              | <ul><li>fn - A function that returns an `Observable`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 256](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L256){target="_blank"} |

---


### [empty](#empty)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.empty() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns an Observable that immediately completes without producing a value.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 75](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L75){target="_blank"} |

---


### [firstEmitting](#firstemitting)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.firstEmitting(...) -> cp.rx.Observer`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Given a set of Observables, produces values from only the first one to produce a value or complete.                                                                     |
| **Parameters**                              | <ul><li>... - list of [Observables](cp.rx.Observable.md)</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 375](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L375){target="_blank"} |

---


### [fromCoroutine](#fromcoroutine)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.fromCoroutine(fn, scheduler) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an Observable that produces values when the specified coroutine yields.                                                                     |
| **Parameters**                              | <ul><li>fn - A `coroutine` or `function` to use to generate values.  Note that if a coroutine is used, the values it yields will be shared by all subscribed [Observers](cp.rx.Observer.md) (influenced by the [Scheduler](cp.rx.Scheduler.md)), whereas a new coroutine will be created for each Observer when a `function` is used.</li><li>scheduler - The scheduler</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 196](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L196){target="_blank"} |

---


### [fromFileByLine](#fromfilebyline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.fromFileByLine(filename) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an Observable that produces values from a file, line by line.                                                                     |
| **Parameters**                              | <ul><li>filename - The name of the file used to create the Observable.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 230](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L230){target="_blank"} |

---


### [fromRange](#fromrange)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.fromRange(initial[, limit[, step]]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an Observable that produces a range of values in a manner similar to a Lua `for` loop.                                                                     |
| **Parameters**                              | <ul><li>initial   - The first value of the range, or the upper limit if no other arguments are specified.</li><li>limit     - The second value of the range. Defaults to no limit.</li><li>step      - An amount to increment the value by each iteration. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 143](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L143){target="_blank"} |

---


### [fromTable](#fromtable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.fromTable(t, iterator, keys) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an `Observable` that produces values from a table.                                                                     |
| **Parameters**                              | <ul><li>t         - The `table` used to create the `Observable`.</li><li>iterator  - An iterator used to iterate the table, e.g. `pairs` or `ipairs`. Defaults to `pairs`.</li><li>keys      - If `true`, also emit the keys of the table. Defaults to `false`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 170](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L170){target="_blank"} |

---


### [never](#never)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.never() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns an Observable that never produces values and never completes.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 90](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L90){target="_blank"} |

---


### [of](#of)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.of(...) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an Observable that produces a set of values.                                                                     |
| **Parameters**                              | <ul><li>...     - The list of values to send as individual `onNext` values.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 122](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L122){target="_blank"} |

---


### [replicate](#replicate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.replicate(value[, count]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an `Observable` that repeats a value a specified number of times.                                                                     |
| **Parameters**                              | <ul><li>value - The value to repeat.</li><li>count - The number of times to repeat the value.  If left unspecified, the value is repeated an infinite number of times.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 274](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L274){target="_blank"} |

---


### [throw](#throw)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.throw(message, ...) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns an Observable that immediately produces an error.                                                                     |
| **Parameters**                              | <ul><li>message   - The message to send.</li><li>...       - The additional values to apply to the message, using `string.format` syntax.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 103](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L103){target="_blank"} |

---


### [zip](#zip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable.zip(...) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns an `Observable` that merges the values produced by the source `Observables` by grouping them by their index.  The first `onNext` event contains the first value of all of the sources, the second `onNext` event contains the second value of all of the sources, and so on.  `onNext` is called a number of times equal to the number of values produced by the `Observable` that produces the fewest number of values.                                                                     |
| **Parameters**                              | <ul><li>...       - The `Observables` to zip.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2983](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2983){target="_blank"} |

---

#### Methods


### [all](#all)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:all(predicate) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Determine whether all items emitted by an Observable meet some criteria.                                                                     |
| **Parameters**                              | <ul><li>predicate - The predicate used to evaluate objects. Defaults to the `identity`.</li></ul> |
| **Returns**                                 | <ul><li>A new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 317](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L317){target="_blank"} |

---


### [average](#average)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:average() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an Observable that produces the average of all values produced by the original.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 453](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L453){target="_blank"} |

---


### [buffer](#buffer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:buffer(size) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an Observable that buffers values from the original and produces them as multiple values.                                                                     |
| **Parameters**                              | <ul><li>size    - The size of the buffer.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 487](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L487){target="_blank"} |

---


### [catch](#catch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:catch(handler) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an Observable that intercepts any errors from the previous and replace them with values produced by a new Observable.                                                                     |
| **Parameters**                              | <ul><li>handler - An `Observable` or a `function` that returns an `Observable` to replace the source `Observable` in the event of an error.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 545](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L545){target="_blank"} |

---


### [combineLatest](#combinelatest)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:combineLatest(...) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that runs a combinator function on the most recent values from a set of `Observables` whenever any of them produce a new value. The results of the combinator `function` are produced by the new `Observable`.                                                                     |
| **Parameters**                              | <ul><li>... - One or more `Observables` to combine. A combinator is a `function` that combines the latest result from each `Observable` and returns a single value.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 604](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L604){target="_blank"} |

---


### [compact](#compact)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:compact() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces the values of the first with falsy values removed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 667](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L667){target="_blank"} |

---


### [concat](#concat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:concat(...) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces the values produced by all the specified `Observables` in the order they are specified.                                                                     |
| **Parameters**                              | <ul><li>...     - The list of `Observables` to concatenate.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 680](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L680){target="_blank"} |

---


### [contains](#contains)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:contains(value) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces a single `boolean` value representing whether or not the specified value was produced by the original.                                                                     |
| **Parameters**                              | <ul><li>value - The value to search for. `==` is used for equality testing.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 739](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L739){target="_blank"} |

---


### [count](#count)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:count([predicate]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that produces a single value representing the number of values produced by the source value that satisfy an optional predicate.                                                                     |
| **Parameters**                              | <ul><li>predicate   - The predicate `function` used to match values.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 800](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L800){target="_blank"} |

---


### [debounce](#debounce)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:debounce(time[, scheduler]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that mirrors the source `Observable`, except that it drops items emitted by the source that are followed by newer items before a timeout value expires on a specified [Scheduler](cp.rx.Scheduler.md). The timer resets on each emission.                                                                     |
| **Parameters**                              | <ul><li>time        - The number of milliseconds.</li><li>scheduler   - The scheduler. If not specified, it will use the [defaultScheduler](cp.rx.util#defaultScheduler].</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 854](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L854){target="_blank"} |

---


### [defaultIfEmpty](#defaultifempty)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:defaultIfEmpty(...)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces a default set of items if the source `Observable` produces no values.                                                                     |
| **Parameters**                              | <ul><li>... - Zero or more values to produce if the source completes without emitting anything.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 896](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L896){target="_blank"} |

---


### [delay](#delay)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:delay(time, scheduler) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces the values of the original delayed by a time period.                                                                     |
| **Parameters**                              | <ul><li>time - An amount in milliseconds to delay by, or a `function` which returns this value.</li><li>scheduler - The [Scheduler](cp.rx.Scheduler.md) to run the `Observable` on. If not specified, it will use the [defaultScheduler](cp.rx.util#defaultScheduler].</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 950](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L950){target="_blank"} |

---


### [distinct](#distinct)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:distinct() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces the values from the original with duplicates removed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 989](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L989){target="_blank"} |

---


### [distinctUntilChanged](#distinctuntilchanged)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:distinctUntilChanged([comparator]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that only produces values from the original if they are different from the previous value.                                                                     |
| **Parameters**                              | <ul><li>comparator - A `function` used to compare 2 values. If unspecified, `==` is used.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1022](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1022){target="_blank"} |

---


### [dump](#dump)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:dump(name, formatter)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Subscribes to this Observable and prints values it produces.                                                                     |
| **Parameters**                              | <ul><li>name      - Prefixes the printed messages with a name.</li><li>formatter - A function that formats one or more values to be printed. Defaults to `tostring`.</li></ul> |
| **Returns**                                 | <ul><li>A [Reference](cp.rx.Reference.md) for the subscription.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 296](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L296){target="_blank"} |

---


### [elementAt](#elementat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:elementAt(index) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that produces the `n`th element produced by the source `Observable`.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the item, with an index of `1` representing the first.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1061](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1061){target="_blank"} |

---


### [filter](#filter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:filter(predicate) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that only produces values of the first that satisfy a predicate.                                                                     |
| **Parameters**                              | <ul><li>predicate - The predicate `function` used to filter values.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1100](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1100){target="_blank"} |

---


### [finalize](#finalize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:finalize(handler) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that mirrors the source `Observable`, but will call a specified `function` when the source terminates on complete or error.                                                                     |
| **Parameters**                              | <ul><li>handler - The handler `function` to call when `onError`/`onCompleted` occurs.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1211](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1211){target="_blank"} |

---


### [find](#find)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:find(predicate) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces the first value of the original that satisfies a predicate.                                                                     |
| **Parameters**                              | <ul><li>predicate - The predicate `function` used to find a value.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1264](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1264){target="_blank"} |

---


### [first](#first)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:first() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that only produces the first result of the original. If no values are produced, an error is thrown.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | <ul><li>This is similar to [#next], but will throw an error if no `onNext` signal is sent before `onCompleted`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1320](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1320){target="_blank"} |

---


### [flatMap](#flatmap)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:flatMap(callback) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that transform the items emitted by an `Observable` into `Observables`, then flatten the emissions from those into a single `Observable`.                                                                     |
| **Parameters**                              | <ul><li>callback - The `function` to transform values from the original `Observable`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1388](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1388){target="_blank"} |

---


### [flatMapLatest](#flatmaplatest)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:flatMapLatest([callback]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that uses a callback to create `Observables` from the values produced by the source, then produces values from the most recent of these `Observables`.                                                                     |
| **Parameters**                              | <ul><li>callback - The function used to convert values to Observables. Defaults to the [identity](cp.rx.util#identity) function.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1402](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1402){target="_blank"} |

---


### [flatten](#flatten)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:flatten()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that subscribes to the `Observables` produced by the original and produces their values.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1473](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1473){target="_blank"} |

---


### [ignoreElements](#ignoreelements)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:ignoreElements() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that terminates when the source terminates but does not produce any elements.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1549](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1549){target="_blank"} |

---


### [last](#last)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:last() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that only produces the last result of the original.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1572](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1572){target="_blank"} |

---


### [map](#map)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:map(callback) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces the values of the original transformed by a `function`.                                                                     |
| **Parameters**                              | <ul><li>callback - The `function` to transform values from the original `Observable`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1607](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1607){target="_blank"} |

---


### [max](#max)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:max() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces the maximum value produced by the original.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1659](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1659){target="_blank"} |

---


### [merge](#merge)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:merge(...) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces the values produced by all the specified `Observables` in the order they are produced.                                                                     |
| **Parameters**                              | <ul><li>... - One or more `Observables` to merge.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1672](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1672){target="_blank"} |

---


### [min](#min)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:min() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces the minimum value produced by the original.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1685](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1685){target="_blank"} |

---


### [next](#next)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:next() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces at most the first result from the original and then completes. Will not send an error if zero values are sent.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This is similar to [#first], but will not throw an error if no `onNext` signal is sent before `onCompleted`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1336](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1336){target="_blank"} |

---


### [partition](#partition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:partition(predicate) -> cp.rx.Observable, cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns two `Observables`: one that produces values for which the predicate returns truthy for, and another that produces values for which the predicate returns falsy.                                                                     |
| **Parameters**                              | <ul><li>predicate - The predicate `function` used to partition the values.</li></ul> |
| **Returns**                                 | <ul><li>The 'truthy' `Observable`.</li><li>The 'falsy' `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1711](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1711){target="_blank"} |

---


### [pluck](#pluck)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:pluck(...) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces values computed by extracting the given keys from the tables produced by the original.                                                                     |
| **Parameters**                              | <ul><li>... - The key to extract from the `table`. Multiple keys can be specified to recursively pluck values from nested tables.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1725](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1725){target="_blank"} |

---


### [reduce](#reduce)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:reduce(accumulator[, seed]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces a single value computed by accumulating the results of running a `function` on each value produced by the original `Observable`.                                                                     |
| **Parameters**                              | <ul><li>accumulator - Accumulates the values of the original `Observable`. Will be passed the return value of the last call as the first argument and the current values as the rest of the arguments.</li><li>seed - An optional value to pass to the accumulator the first time it is run.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1758](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1758){target="_blank"} |

---


### [reject](#reject)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:reject(predicate) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces values from the original which do not satisfy a predicate.                                                                     |
| **Parameters**                              | <ul><li>predicate - The predicate `function` used to reject values.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1821](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1821){target="_blank"} |

---


### [retry](#retry)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:retry([count]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that restarts in the event of an error.                                                                     |
| **Parameters**                              | <ul><li>count - The maximum number of times to retry. If left unspecified, an infinite number of retries will be attempted.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1877](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1877){target="_blank"} |

---


### [retryWithDelay](#retrywithdelay)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:retryWithDelay(count[, delay[, scheduler]]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that restarts in the event of an error.                                                                     |
| **Parameters**                              | <ul><li>count - The maximum number of times to retry.  If left unspecified, an infinite number of retries will be attempted.</li><li>delay - The `function` returning or a `number` representing the delay in milliseconds or a `function`. If left unspecified, defaults to 1000 ms (1 second).</li><li>scheduler - The [Scheduler](cp.rx.Scheduler.md) to use. If not specified, it will use the [defaultScheduler](cp.rx.util#defaultScheduler].</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1935](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1935){target="_blank"} |

---


### [sample](#sample)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:sample(sampler) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces its most recent value every time the specified observable produces a value.                                                                     |
| **Parameters**                              | <ul><li>sampler - The `Observable` that is used to sample values from this `Observable`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1999](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1999){target="_blank"} |

---


### [scan](#scan)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:scan(accumulator, seed) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces values computed by accumulating the results of running a `function` on each value produced by the original `Observable`.                                                                     |
| **Parameters**                              | <ul><li>accumulator - Accumulates the values of the original `Observable`. Will be passed the return value of the last call as the first argument and the current values as the rest of the arguments. Each value returned from this `function` will be emitted by the `Observable`.</li><li>seed - A value to pass to the accumulator the first time it is run.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2064](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2064){target="_blank"} |

---


### [skip](#skip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:skip([n]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that skips over a specified number of values produced by the original and produces the rest.                                                                     |
| **Parameters**                              | <ul><li>n - The number of values to ignore. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2125](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2125){target="_blank"} |

---


### [skipLast](#skiplast)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:skipLast(count) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that omits a specified number of values from the end of the original `Observable`.                                                                     |
| **Parameters**                              | <ul><li>count - The number of items to omit from the end.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2188](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2188){target="_blank"} |

---


### [skipUntil](#skipuntil)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:skipUntil(other) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that skips over values produced by the original until the specified `Observable` produces a value.                                                                     |
| **Parameters**                              | <ul><li>other - The `Observable` that triggers the production of values.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2245](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2245){target="_blank"} |

---


### [skipWhile](#skipwhile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:skipWhile(predicate) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that skips elements until the predicate returns `falsy` for one of them.                                                                     |
| **Parameters**                              | <ul><li>predicate - The predicate `function` used to continue skipping values.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2307](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2307){target="_blank"} |

---


### [startWith](#startwith)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:startWith(...) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces the specified values followed by all elements produced by the source `Observable`.                                                                     |
| **Parameters**                              | <ul><li>values - The values to produce before the Observable begins producing values normally.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2368](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2368){target="_blank"} |

---


### [subscribe](#subscribe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:subscribe(observer [, onError[, onCompleted]]) -> cp.rx.Reference`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shorthand for creating an [Observer](cp.rx.Observer.md) and passing it to this Observable's [subscription](#subscri) function.                                                                     |
| **Parameters**                              | <ul><li>observer - Either an [Observer](cp.rx.Observer.md) or a `function` to be called when the Observable produces a value.</li><li>onError - A `function` to be called when the Observable terminates due to an error.</li><li>onCompleted - A 'function` to be called when the Observable completes normally.</li></ul> |
| **Returns**                                 | <ul><li>A [Reference](cp.rx.Reference.md) which can be used to cancel the subscription.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 56](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L56){target="_blank"} |

---


### [sum](#sum)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:sum() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that produces a single value representing the sum of the values produced by the original.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2385](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2385){target="_blank"} |

---


### [switch](#switch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:switch() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Given an `Observable` that produces `Observables`, returns an `Observable` that produces the values produced by the most recently produced `Observable`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2398](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2398){target="_blank"} |

---


### [switchIfEmpty](#switchifempty)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:switchIfEmpty(alternate) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Switch to an alternate `Observable` if this one sends an `onCompleted` without any `onNext`s.                                                                     |
| **Parameters**                              | <ul><li>alternate - An `Observable` to switch to if this does not send any `onNext` values before the `onCompleted`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 1157](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L1157){target="_blank"} |

---


### [take](#take)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:take([n]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that only produces the first n results of the original.                                                                     |
| **Parameters**                              | <ul><li>n - The number of elements to produce before completing. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2459](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2459){target="_blank"} |

---


### [takeLast](#takelast)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:takeLast(count) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that produces a specified number of elements from the end of a source `Observable`.                                                                     |
| **Parameters**                              | <ul><li>count - The number of elements to produce.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2527](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2527){target="_blank"} |

---


### [takeUntil](#takeuntil)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:takeUntil(other) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that completes when the specified `Observable` fires.                                                                     |
| **Parameters**                              | <ul><li>other - The `Observable` that triggers completion of the original.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2582](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2582){target="_blank"} |

---


### [takeWhile](#takewhile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:takeWhile(predicate) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` that produces elements until the predicate returns `falsy`.                                                                     |
| **Parameters**                              | <ul><li>predicate - The predicate `function` used to continue production of values.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2632](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2632){target="_blank"} |

---


### [tap](#tap)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:tap(onNext[, onError[, onCompleted]]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Runs a `function` each time this `Observable` has activity. Similar to [subscribe](#subscribe) but does not create a subscription.                                                                     |
| **Parameters**                              | <ul><li>onNext - Run when the `Observable` produces values.</li><li>onError - Run when the `Observable` encounters a problem.</li><li>onCompleted - Run when the `Observable` completes.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2694](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2694){target="_blank"} |

---


### [timeout](#timeout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:timeout(timeInMs, next[, scheduler]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that will emit an error if the specified time is exceded since the most recent `next` value.                                                                     |
| **Parameters**                              | <ul><li>timeInMs - The time in milliseconds to wait before an error is emitted.</li><li>next - If a `string`, it will be sent as an error. If an `Observable`, switch to that `Observable` instead of sending an error.</li><li>scheduler - The scheduler to use. If not specified, it will use the [defaultScheduler](cp.rx.util#defaultScheduler].</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2764](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2764){target="_blank"} |

---


### [unpack](#unpack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:unpack() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that unpacks the `tables` produced by the original.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2859](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2859){target="_blank"} |

---


### [unwrap](#unwrap)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:unwrap() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that takes any values produced by the original that consist of multiple return values and produces each value individually.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2872](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2872){target="_blank"} |

---


### [with](#with)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.Observable:with(...) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an `Observable` that produces values from the original along with the most recently produced value from all other specified `Observables`. Note that only the first argument from each source `Observable` is used.                                                                     |
| **Parameters**                              | <ul><li>... - The `Observables` to include the most recent values from.</li></ul> |
| **Returns**                                 | <ul><li>The new `Observable`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/rx/Observable.lua line 2902](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/Observable.lua#L2902){target="_blank"} |

---


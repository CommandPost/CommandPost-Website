# cp.collect.Queue

A "double-ended queue" implementation. This allows pushing and popping
values to the left or right side of the queue. This can be used for
classic 'stack' and 'queue' uses - for a stack, push and pop from one end,
for a queue, push and pop from opposite ends.

`#` will always return the size of the queue.

The left-most item in the queue wil always be at index `1`, the right-most
will be at index `#`.

You can iterate via `ipairs`, but as with all tables, the queue contains any
`nil` values, it will stop at that point. To iterate the whole queue, you
need to use the `#` operator. Eg:

```lua
local q = Queue(1, nil, 3)
for i,v in ipairs(q) do print(v) end  -- Outputs "1"
for i = 1, #q do print(v) end -- Outputs "1", "nil", "3"
```

## API Overview
* Functions - API calls offered directly by the extension
 * [contains](#contains)
 * [len](#len)
 * [peekLeft](#peekLeft)
 * [peekRight](#peekRight)
 * [popLeft](#popLeft)
 * [popRight](#popRight)
 * [pushLeft](#pushLeft)
 * [pushRight](#pushRight)
 * [removeItem](#removeItem)
 * [removeItem](#removeItem)
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [contains](#contains)
 * [len](#len)
 * [peekLeft](#peekLeft)
 * [peekRight](#peekRight)
 * [popLeft](#popLeft)
 * [popRight](#popRight)
 * [pushLeft](#pushLeft)
 * [pushRight](#pushRight)

## API Documentation

### Functions


### [contains](#contains)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue.contains(queue, item) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `queue` contains the specified `item`.                                                                     |
| **Parameters**                              | <ul><li>queue    - The queue to check.</li><li>item     - The item to check for.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the item is in the queue.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [len](#len)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue.len(queue) -> anything`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the number of items in the queue.                                                                     |
| **Parameters**                              | <ul><li>queue        - The queue to check.</li></ul> |
| **Returns**                                 | <ul><li>The total number of items.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [peekLeft](#peekLeft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue.peekLeft(queue) -> anything`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the left-most value from the `queue` without removig it.                                                                     |
| **Parameters**                              | <ul><li>queue        - The queue to peek into.</li></ul> |
| **Returns**                                 | <ul><li>The left-most value of the `Queue`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [peekRight](#peekRight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue.peekRight(queue) -> anything`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the right-most value from the `queue` without removig it.                                                                     |
| **Parameters**                              | <ul><li>queue        - The queue to peek into.</li></ul> |
| **Returns**                                 | <ul><li>The right-most value of the `Queue`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [popLeft](#popLeft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue.popLeft(queue) -> anything`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes the left-most value from the `queue` and returns it.                                                                     |
| **Parameters**                              | <ul><li>queue        - The queue to pop from.</li></ul> |
| **Returns**                                 | <ul><li>The left-most value of the `Queue`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [popRight](#popRight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue.popRight(queue) -> anything`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes the right-most value from the `queue` and returns it.                                                                     |
| **Parameters**                              | <ul><li>queue        - The queue to pop from.</li></ul> |
| **Returns**                                 | <ul><li>The right-most value of the `Queue`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [pushLeft](#pushLeft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue.pushLeft(queue, ...) -> cp.collect.Queue`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pushes the values to the left side of the `queue`.                                                                     |
| **Parameters**                              | <ul><li>queue        - The queue to push into.</li><li>...          - The values to push.</li></ul> |
| **Returns**                                 | <ul><li>The same `Queue` instance.</li></ul>          |
| **Notes**                                   | <ul><li>If there are multiple values, then they will be added from right to left.</li><li>That is to say, the left-most of the new values will be the left-most value of the queue.</li></ul>                |

---

### [pushRight](#pushRight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue.pushRight(queue, ...) -> cp.collect.Queue`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pushes the values to the right side of the `queue`.                                                                     |
| **Parameters**                              | <ul><li>queue        - The queue to push into.</li><li>...          - The values to push.</li></ul> |
| **Returns**                                 | <ul><li>The same `Queue` instance.</li></ul>          |
| **Notes**                                   | <ul><li>If there are multiple values, then they will be added from left to right.</li><li>That is to say, the right-most of the new values will be the right-most value of the queue.</li></ul>                |

---

### [removeItem](#removeItem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue.removeItem(queue, item) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Attempts to remove the specified item from the queue.                                                                     |
| **Parameters**                              | <ul><li>queue        - The queue to modify.</li><li>item         - The item to remove, if present.</li></ul> |
| **Returns**                                 | <ul><li>The index of the item, or `nil` if not found.</li></ul>          |
| **Notes**                                   | <ul><li>This call may be very expensive if there are many items in the queue after the specified item.</li><li>If the item was found, the index it was found at is returned.</li><li>If not, `nil` is returned.</li></ul>                |

---

### [removeItem](#removeItem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue:removeItem(item) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Attempts to remove the specified item from the queue.                                                                     |
| **Parameters**                              | <ul><li>item         - The item to remove, if present.</li></ul> |
| **Returns**                                 | <ul><li>The index of the item, or `nil` if not found.</li></ul>          |
| **Notes**                                   | <ul><li>This call may be very expensive if there are many items in the queue after the specified item.</li><li>If the item was found, the index it was found at is returned.</li><li>If not, `nil` is returned.</li></ul>                |

---
### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue.new([...]) -> cp.collect.Queue`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Queue.                                                                     |
| **Parameters**                              | <ul><li>...      - The optional list of values to add to the right of the queue.</li></ul> |
| **Returns**                                 | <ul><li>the new `Queue`.</li></ul>          |
| **Notes**                                   | <ul><li>You can also create a new queue by calling `Queue(..)` directly.</li></ul>                |

---
### Methods


### [contains](#contains)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue:contains(item) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the `queue` contains the specified `item`.                                                                     |
| **Parameters**                              | <ul><li>item     - The item to check for.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the item is in the queue.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [len](#len)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue:len(queue) -> anything`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the number of items in the queue.                                                                     |
| **Parameters**                              | <ul><li>queue        - The queue to check.</li></ul> |
| **Returns**                                 | <ul><li>The total number of items.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [peekLeft](#peekLeft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue:peekLeft() -> anything`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the left-most value from the `queue` without removig it.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The left-most value of the `Queue`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [peekRight](#peekRight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue:peekRight() -> anything`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the right-most value from the `queue` without removig it.                                                                     |
| **Parameters**                              | <ul><li>queue        - The queue to peek into.</li></ul> |
| **Returns**                                 | <ul><li>The right-most value of the `Queue`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [popLeft](#popLeft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue:popLeft() -> anything`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Removes the left-most value from the `queue` and returns it.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The left-most value of the `Queue`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [popRight](#popRight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue:popRight() -> anything`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Removes the right-most value from the `queue` and returns it.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The right-most value of the `Queue`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [pushLeft](#pushLeft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue:pushLeft(...) -> cp.collect.Queue`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Pushes the values to the left side of the `queue`.                                                                     |
| **Parameters**                              | <ul><li>...          - The values to push.</li></ul> |
| **Returns**                                 | <ul><li>The same `Queue` instance.</li></ul>          |
| **Notes**                                   | <ul><li>If there are multiple values, then they will be added from right to left.</li><li>That is to say, the left-most of the new values will be the left-most value of the queue.</li></ul>                |

---

### [pushRight](#pushRight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.collect.Queue:pushRight(...) -> cp.collect.Queue`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Pushes the values to the right side of the `queue`.                                                                     |
| **Parameters**                              | <ul><li>...          - The values to push.</li></ul> |
| **Returns**                                 | <ul><li>The same `Queue` instance.</li></ul>          |
| **Notes**                                   | <ul><li>If there are multiple values, then they will be added from left to right.</li><li>That is to say, the right-most of the new values will be the right-most value of the queue.</li></ul>                |

---

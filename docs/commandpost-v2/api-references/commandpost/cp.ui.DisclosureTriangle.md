# cp.ui.DisclosureTriangle

Disclosure Triangle UI Module.

This represents an `hs.axuielement` with a `AXDisclosureTriangle` role.
It allows checking and modifying the `opened` status like so:

```lua
myButton:opened() == true			-- happens to be opened already
myButton:opened(false) == false	-- update to unopened.
myButton.opened:toggle() == true	-- toggled back to being opened.
```

You can also call instances of `DisclosureTriangle` as a function, which will return
the `opened` status:

```lua
myButton() == true			-- still true
myButton(false) == false	-- now false
```

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [DisclosureTriangle](#disclosuretriangle)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [opened](#opened)
 * [title](#title)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [click](#click)
 * [doClose](#doclose)
 * [doOpen](#doopen)
 * [doPress](#dopress)
 * [loadLayout](#loadlayout)
 * [press](#press)
 * [saveLayout](#savelayout)
 * [toggle](#toggle)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided `hs.axuielement` is a DisclosureTriangle.                                                                     |
| **Parameters**                              | <ul><li>element		- The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it's a match, or `false` if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/DisclosureTriangle.lua line 36](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/DisclosureTriangle.lua#L36) |

---

#### Constructors


### [DisclosureTriangle](#disclosuretriangle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle(parent, uiFinder) -> cp.ui.DisclosureTriangle`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new DisclosureTriangle.                                                                     |
| **Parameters**                              | <ul><li>parent		- The parent object.</li><li>uiFinder		- A function which will return the `hs.axuielement` when available.</li></ul> |
| **Returns**                                 | <ul><li>The new `DisclosureTriangle`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/DisclosureTriangle.lua line 49](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/DisclosureTriangle.lua#L49) |

---

#### Fields


### [opened](#opened)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle.opened <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the disclosure triangle is currently opened.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/DisclosureTriangle.lua line 70](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/DisclosureTriangle.lua#L70) |

---


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle.title <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The button title, if available.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/DisclosureTriangle.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/DisclosureTriangle.lua#L63) |

---

#### Methods


### [click](#click)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:click() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Performs a single mouse click on the triangle.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `DisclosureTriangle` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/DisclosureTriangle.lua line 89](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/DisclosureTriangle.lua#L89) |

---


### [doClose](#doclose)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:doClose() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will ensure the `DisclosureTriangle` is unopened.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/DisclosureTriangle.lua line 180](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/DisclosureTriangle.lua#L180) |

---


### [doOpen](#doopen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:doOpen() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will ensure the `DisclosureTriangle` is opened.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/DisclosureTriangle.lua line 161](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/DisclosureTriangle.lua#L161) |

---


### [doPress](#dopress)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:doPress() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will press the button when executed, if available at the time. If not an `error` is sent.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will press the button when executed.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/DisclosureTriangle.lua line 140](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/DisclosureTriangle.lua#L140) |

---


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:loadLayout(layout) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Applies the settings in the provided layout table.                                                                     |
| **Parameters**                              | <ul><li>layout - The table containing layout settings. Usually created by the `saveLayout` method.</li></ul> |
| **Returns**                                 | <ul><li>nil</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/DisclosureTriangle.lua line 214](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/DisclosureTriangle.lua#L214) |

---


### [press](#press)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:press() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to press the button. May fail if the `UI` is not available.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `DisclosureTriangle` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/DisclosureTriangle.lua line 123](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/DisclosureTriangle.lua#L123) |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table containing the layout settings. This table may be passed to the `loadLayout` method to restore the saved layout.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A settings table.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/DisclosureTriangle.lua line 199](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/DisclosureTriangle.lua#L199) |

---


### [toggle](#toggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:toggle() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Toggles the `opened` status of the button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `DisclosureTriangle` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/DisclosureTriangle.lua line 109](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/DisclosureTriangle.lua#L109) |

---


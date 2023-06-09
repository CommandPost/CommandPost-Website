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

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [DisclosureTriangle](#disclosuretriangle)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [opened](#opened)
 * [title](#title)
* Methods - API calls which can only be made on an object returned by a constructor
 * [click](#click)
 * [doClose](#doclose)
 * [doOpen](#doopen)
 * [doPress](#dopress)
 * [loadLayout](#loadlayout)
 * [press](#press)
 * [saveLayout](#savelayout)
 * [toggle](#toggle)

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided `hs.axuielement` is a DisclosureTriangle.                                                                     |
| **Parameters**                              | <ul><li>element		- The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it's a match, or `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [DisclosureTriangle](#disclosuretriangle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle(parent, uiFinder) -> cp.ui.DisclosureTriangle`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new DisclosureTriangle.                                                                     |
| **Parameters**                              | <ul><li>parent		- The parent object.</li><li>uiFinder		- A function which will return the `hs.axuielement` when available.</li></ul> |
| **Returns**                                 | <ul><li>The new `DisclosureTriangle`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [opened](#opened)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle.opened <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the disclosure triangle is currently opened.                                                                     |

---

### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle.title <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The button title, if available.                                                                     |

---
### Methods


### [click](#click)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:click() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Performs a single mouse click on the triangle.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `DisclosureTriangle` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doClose](#doclose)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:doClose() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will ensure the `DisclosureTriangle` is unopened.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doOpen](#doopen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:doOpen() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will ensure the `DisclosureTriangle` is opened.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doPress](#dopress)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:doPress() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will press the button when executed, if available at the time. If not an `error` is sent.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will press the button when executed.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:loadLayout(layout) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Applies the settings in the provided layout table.                                                                     |
| **Parameters**                              | <ul><li>layout - The table containing layout settings. Usually created by the `saveLayout` method.</li></ul> |
| **Returns**                                 | <ul><li>nil</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [press](#press)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:press() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to press the button. May fail if the `UI` is not available.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `DisclosureTriangle` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table containing the layout settings. This table may be passed to the `loadLayout` method to restore the saved layout.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A settings table.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [toggle](#toggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.DisclosureTriangle:toggle() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Toggles the `opened` status of the button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `DisclosureTriangle` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

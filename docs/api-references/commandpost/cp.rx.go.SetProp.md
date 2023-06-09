# cp.rx.go.SetProp

A `Statement` that will update a `cp.prop` value, then optionally execute other `resolvables`, and optionally reset the `cp.prop` to its previous value.
This is useful for simply changing a `cp.prop` value without requiring a custom `function()`, but is extra useful when you only want to temporarily change
the value.

---

## Submodules
 * [cp.rx.go.SetProp.To](cp.rx.go.SetProp.To.md)

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [SetProp](#setprop)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [To](#to)


---

## API Documentation

#### Constructors


### [SetProp](#setprop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.SetProp(theProp) -> SetProp`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `SetProp` `Statement` which will update the provided `cp.prop` value to the specified `To` `value`.                                                                     |
| **Parameters**                              | <ul><li>theProp - The `cp.prop` which will be updated.</li></ul> |
| **Returns**                                 | <ul><li>The `SetProp` `Statement`.</li></ul>          |
| **Notes**                                   | <ul><li>It can then optionally execute some other statements and finally, reset the property to its original value.</li><li></li><li>Example:</li><li></li><li>```lua</li><li>local myProp = prop.VALUE("foo")</li><li>SetProp(myProp):To("bar"):Then(</li><li>    function() ... end</li><li>):ThenReset()</li><li>```</li></ul> |

---

#### Methods


### [To](#to)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.SetProp:To(value) -> SetProp.To`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call this to define what value to set the property to. If it is a `function` or other "callable" `table`, it will be called with no parameters to get the actual stored value. If it is any other value, it will be set as is.                                                                     |
| **Parameters**                              | <ul><li>value - The value or "callable" to update the prop to.</li></ul> |
| **Returns**                                 | <ul><li>The `SetProp.To` `Statement.Modifier`.</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li></li><li>```lua</li><li>SetProp(foo):To("bar") -- will always set to "bar"</li><li>SetProp(modDate):To(os.time) -- will set to the current value returned by `os.time()` every time it's executed.</li><li>```</li></ul> |

---


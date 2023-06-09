# cp.ui.Element

A support class for `hs.axuielement` management.

See:
 * [Button](cp.ui.Button.md)
 * [CheckBox](cp.rx.CheckBox.md)
 * [MenuButton](cp.rx.MenuButton.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [isTypeOf](#istypeof)
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Element](#element)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [frame](#frame)
 * [identifier](#identifier)
 * [isEnabled](#isenabled)
 * [isFocused](#isfocused)
 * [isShowing](#isshowing)
 * [position](#position)
 * [role](#role)
 * [size](#size)
 * [subrole](#subrole)
 * [textValue](#textvalue)
 * [title](#title)
 * [value](#value)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [app](#app)
 * [attributeValue](#attributevalue)
 * [defineBuilder](#definebuilder)
 * [doFocus](#dofocus)
 * [doHighlight](#dohighlight)
 * [doLayout](#dolayout)
 * [doPerformAction](#doperformaction)
 * [doSetAttributeValue](#dosetattributevalue)
 * [doShow](#doshow)
 * [focus](#focus)
 * [highlight](#highlight)
 * [loadLayout](#loadlayout)
 * [parent](#parent)
 * [performAction](#performaction)
 * [saveLayout](#savelayout)
 * [setAttributeValue](#setattributevalue)
 * [show](#show)
 * [snapshot](#snapshot)
 * [valueIs](#valueis)


---

## API Documentation

#### Functions


### [isTypeOf](#istypeof)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:isTypeOf(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is an `Element`. If called on subclasses, it will check if the `thing` is an instance of the subclass.                                                                     |
| **Parameters**                              | <ul><li>`thing`		- The thing to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the thing is a `Element` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This is a type method, not an instance method or a type function. It is called with `:` on the type itself,</li><li>   not an instance. For example `Element:isTypeOf(value)`</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 86](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L86){target="_blank"} |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Matches to any valid `hs.axuielement`. Sub-types should provide their own `matches` method.                                                                     |
| **Parameters**                              | <ul><li>The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is a valid instance of an `hs.axuielement`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 103](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L103){target="_blank"} |

---

#### Constructors


### [Element](#element)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element(parent, uiFinder) -> cp.ui.Element`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Element` with the specified `parent` and `uiFinder`. The `uiFinder` may be either a `function` that returns an `axuielement`, or a [cp.prop](cp.prop.md).                                                                     |
| **Parameters**                              | <ul><li>parent - The parent Element (may be `nil`)</li><li>uiFinder - The `function` or `prop` that actually provides the current `axuielement` instance.</li></ul> |
| **Returns**                                 | <ul><li>The new `Element` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 121](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L121){target="_blank"} |

---

#### Fields


### [frame](#frame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.frame <cp.prop: table; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the table containing the `x`, `y`, `w`, and `h` values for the `Element` frame, or `nil` if not available.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 386](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L386){target="_blank"} |

---


### [identifier](#identifier)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.identifier <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `AX` identifier for the element.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 372](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L372){target="_blank"} |

---


### [isEnabled](#isenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.isEnabled <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if the `Element` is visible and enabled.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 379](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L379){target="_blank"} |

---


### [isFocused](#isfocused)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.isFocused <cp.prop: boolean; read-only?; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if the `AXFocused` attribute is `true`. Not always a reliable way to determine focus however.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 393](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L393){target="_blank"} |

---


### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.isShowing <cp.prop: boolean; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If `true`, the `Element` is showing on screen.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 194](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L194){target="_blank"} |

---


### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.position <cp.prop: table; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the table containing the `x` and `y` values for the `Element` frame, or `nil` if not available.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 400](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L400){target="_blank"} |

---


### [role](#role)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.role <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `AX` role name for the element.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 358](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L358){target="_blank"} |

---


### [size](#size)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.size <cp.prop: table; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the table containing the `w` and `h` values for the `Element` frame, or `nil` if not available.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 408](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L408){target="_blank"} |

---


### [subrole](#subrole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.subrole <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `AX` subrole name for the element.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 365](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L365){target="_blank"} |

---


### [textValue](#textvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.textValue <cp.prop: string; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The 'AXValue' of the element, if it is a `string`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 164](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L164){target="_blank"} |

---


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.title <cp.prop: string; read-only, live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The 'AXTitle' of the element.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 187](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L187){target="_blank"} |

---


### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.value <cp.prop: anything; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The 'AXValue' of the element.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 157](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L157){target="_blank"} |

---

#### Methods


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:app() -> App`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the app instance.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>App</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 429](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L429){target="_blank"} |

---


### [attributeValue](#attributevalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:attributeValue(id) -> anything, true | nil, false`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to retrieve the specified `AX` attribute value, if the `UI` is available.                                                                     |
| **Parameters**                              | <ul><li>id - The `AX` attribute to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>The current value for the attribute, or `nil` if the `UI` is not available, followed by `true` if the `UI` is present and was called.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 265](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L265){target="_blank"} |

---


### [defineBuilder](#definebuilder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:defineBuilder(...) -> cp.ui.Element`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Defines a new [Builder](cp.ui.Builder.md) class on this `Element` with the specified additional argument names.                                                                     |
| **Parameters**                              | <ul><li>... - The names for the methods which will collect extra arguments to pass to the `Element` constructor.</li></ul> |
| **Returns**                                 | <ul><li>The same `Element` class instance.</li></ul>          |
| **Notes**                                   | <ul><li>The order of the argument names here is the order in which they will be passed to the `Element` constructor, no matter what</li><li>   order they are called on the `Builder` itself.</li><li>Once defined, the class can be accessed via the static `<Element Name>.Builder` of the `Element` subclass.</li><li>For example, if you have a `cp.ui.Element` subclass named `MyElement`, with an extra `alpha` and `beta` constructor argument, you can do this:</li><li>   ```lua</li><li>   -- The class definition</li><li>   local MyElement = Element:subclass("cp.ui.MyElement"):defineBuilder("withAlpha", "withBeta")</li><li>   -- The constructor</li><li>   function MyElement.Builder:initialize(parent, uiFinder, alpha, beta)</li><li>       Element.initialize(self, parent, uiFinder)</li><li>       self.alpha = alpha</li><li>       self.beta = beta</li><li>   end</li><li>   -- Create a callable `MyClass.Builder` instance</li><li>   local myElementBuilder = MyElement:withAlpha(1):withBeta(2)</li><li>   -- alternately, same result:</li><li>   local myElementBuilder = MyElement:withBeta(2):withAlpha(1)</li><li>   -- Alternately, same result:</li><li>   local myElementBuilder = MyElement.Builder():withAlpha(1):withBeta(2)</li><li>   -- Create an instance of `MyClass`:</li><li>   local myElement = myElementBuilder(parent, uiFinder)</li><li>   ```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L33){target="_blank"} |

---


### [doFocus](#dofocus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:doFocus() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that attempts to set the focus on the element.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 251](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L251){target="_blank"} |

---


### [doHighlight](#dohighlight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:doHighlight([color], [duration]) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` which will attempt to highlight the `Element` with the specified `color` and `duration`.                                                                     |
| **Parameters**                              | <ul><li>color	- The `hs.drawing` color to use. (defaults to red)</li><li>duration	- The `number` of seconds to highlight for. (defaults to `3` seconds)</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will perform the action.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 462](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L462){target="_blank"} |

---


### [doLayout](#dolayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:doLayout(layout) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) which will attempt to load the layout based on the parameters provided by the `layout` table. This table should generally be generated via the [#saveLayout] method.                                                                     |
| **Parameters**                              | <ul><li>layout - a `table` of parameters that will be used to layout the element.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md) to execute.</li></ul>          |
| **Notes**                                   | <ul><li>By default, to enable backwards-compatibility, this method will simply call the [#loadLayout]. Override it to provide more optimal asynchonous behaviour if required.</li><li>When subclassing, the overriding `doLayout` method should call the parent class's `doLayout` method,</li><li>then process any custom values from it, like so:</li><li>   ```lua</li><li>   function MyElement:doLayout(layout)</li><li>       layout = layout or {}</li><li>       return Do(Element.doLayout(self, layout))</li><li>       :Then(function()</li><li>           self.myConfig = layout.myConfig</li><li>       end)</li><li>       :Label("MyElement:doLayout")</li><li>   end</li><li>   ```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 574](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L574){target="_blank"} |

---


### [doPerformAction](#doperformaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:doPerformAction(id) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` which will attempt to perform the action with the specified id (eg. "AXCancel")                                                                     |
| **Parameters**                              | <ul><li>id   - The `string` for the AX action to perform.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will perform the action.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 339](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L339){target="_blank"} |

---


### [doSetAttributeValue](#dosetattributevalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:doSetAttributeValue(id, value) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` which will attempt to update the specified `AX` attribute to the new `value`.                                                                     |
| **Parameters**                              | <ul><li>id   - The `string` for the AX action to perform.</li><li>value - The new value to set.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will perform the action and resolve to `true` if the UI is available and set, otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 319](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L319){target="_blank"} |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will ensure the Element is showing. By default, will ask the `parent` to show, if the `parent` is available.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A Statement</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 206](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L206){target="_blank"} |

---


### [focus](#focus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:focus() -> self, boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempt to set the focus on the element.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>self, boolean - the boolean indicates if the focus was set.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 238](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L238){target="_blank"} |

---


### [highlight](#highlight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:highlight([color], [duration]) -> cp.ui.Element`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Highlights the `Element` with the specified `color` and `duration`.                                                                     |
| **Parameters**                              | <ul><li>color	- The `hs.drawing` color to use. (defaults to red)</li><li>duration	- The `number` of seconds to highlight for. (defaults to `3` seconds)</li></ul> |
| **Returns**                                 | <ul><li>the same `Element` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 507](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L507){target="_blank"} |

---


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:loadLayout(layout) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | When called, the Element (or subclass) will attempt to load the layout based on the parameters provided by the `layout` table. This table should generally be generated via the [#saveLayout] method.                                                                     |
| **Parameters**                              | <ul><li>layout - a `table` of parameters that will be used to layout the element.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>When subclassing, the overriding `loadLayout` method should call the parent's `loadLayout` method,</li><li>then process any custom values from it, like so:</li><li>   ```</li><li>   function MyElement:loadLayout(layout)</li><li>       Element.loadLayout(self, layout)</li><li>       self.myConfig = layout.myConfig</li><li>   end</li><li>   ```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 547](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L547){target="_blank"} |

---


### [parent](#parent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:parent() -> parent`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the parent object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>parent</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 416](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L416){target="_blank"} |

---


### [performAction](#performaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:performAction(id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to perform the specified `AX` action, if the `UI` is available.                                                                     |
| **Parameters**                              | <ul><li>id - The `AX` action to perform.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `UI` is available and the action was performed, otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 301](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L301){target="_blank"} |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `table` containing the current configuration details for this Element (or subclass).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>When subclassing, the overriding `saveLayout` method should call the parent's saveLayout method,</li><li>then add values to it, like so:</li><li>   ```</li><li>   function MyElement:saveLayout()</li><li>       local layout = Element.saveLayout(self)</li><li>       layout.myConfig = self.myConfig</li><li>       return layout</li><li>   end</li><li>   ```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 523](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L523){target="_blank"} |

---


### [setAttributeValue](#setattributevalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:setAttributeValue(id, value) -> self, boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | If the `UI` is available, set the named `AX` attribute to the `value`.                                                                     |
| **Parameters**                              | <ul><li>id - The `AX` id to set.</li><li>value - The new value.</li></ul> |
| **Returns**                                 | <ul><li>The `Element` instance, then `true` if the UI is available and the value was set, otherwise false.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 282](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L282){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Element.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 221](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L221){target="_blank"} |

---


### [snapshot](#snapshot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element:snapshot([path]) -> hs.image | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Takes a snapshot of the button in its current state as a PNG and returns it. If the `path` is provided, the image will be saved at the specified location.                                                                     |
| **Parameters**                              | <ul><li>path		- (optional) The path to save the file. Should include the extension (should be `.png`).</li></ul> |
| **Returns**                                 | <ul><li>The `hs.image` that was created.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 443](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L443){target="_blank"} |

---


### [valueIs](#valueis)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Element.valueIs(value) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the current value of this element is the provided value.                                                                     |
| **Parameters**                              | <ul><li>value - The value to compare to.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the current [#value] is equal to the provided `value`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Element.lua line 174](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Element.lua#L174){target="_blank"} |

---


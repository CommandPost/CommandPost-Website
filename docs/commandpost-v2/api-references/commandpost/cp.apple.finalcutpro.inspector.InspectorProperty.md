# cp.apple.finalcutpro.inspector.InspectorProperty

`InspectorProperty` contains helper functions for handling common property
types that occur in various `Inspectors` in FCP.

In addition to specific property row types like `textField`, `slider`, etc.,
there is also a `section`, which is for rows which expand/collapse to reveal
other properties.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [button](#button)
 * [checkBox](#checkbox)
 * [hasProperties](#hasproperties)
 * [menuButton](#menubutton)
 * [numberField](#numberfield)
 * [popUpButton](#popupbutton)
 * [section](#section)
 * [simple](#simple)
 * [slider](#slider)
 * [staticText](#statictext)
 * [textField](#textfield)
 * [xy](#xy)


---

## API Documentation

#### Functions


### [button](#button)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.InspectorProperty.button(labelKey[, index]) -> cp.prop <cp.ui.PropertyRow; read-only>`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.prop` that contains a `PropertyRow` matching the `labelKey`.                                                                     |
| **Parameters**                              | <ul><li>labelKey      - The I18N key that the row lable matches.</li><li>index         - The instance number of that label (defaults to `1`).</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` that returns the `PropertyRow`.</li></ul>          |
| **Notes**                                   | <ul><li>It has one additional property:</li><li>  ** `button`   - A `cp.ui.Button`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua line 441](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua#L441) |

---


### [checkBox](#checkbox)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.InspectorProperty.checkBox(labelKey[, index]) -> cp.prop <cp.ui.PropertyRow; read-only>`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.prop` that contains a `PropertyRow`  matching the `labelKey`.                                                                     |
| **Parameters**                              | <ul><li>labelKey      - The I18N key that the row lable matches.</li><li>index         - The instance number of that label (defaults to `1`).</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` that returns the `PropertyRow`.</li></ul>          |
| **Notes**                                   | <ul><li>It has one additional property:</li><li>  ** `value`   - A `cp.ui.CheckBox` which contains the boolean value for the row.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua line 490](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua#L490) |

---


### [hasProperties](#hasproperties)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.InspectorProperty.hasProperties(parent, uiFinder) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | This will prepare the `parent` to handle containing `PropertyRow` children, and returns a function which can pass in a table of properties to bind to the parent.                                                                     |
| **Parameters**                              | <ul><li>parent    - The parent table.</li><li>uiFinder  - The function or cp.prop which will be called to find the parent UI element. Functions will be passed the `parent` when being executed.</li></ul> |
| **Returns**                                 | <ul><li>boolean</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li></li><li>```lua</li><li>local o = {</li><li>    propertiesUI = ...,</li><li>}</li><li>InspectorProperty.hasProperties(o, o.propertiesUI) {</li><li>    propOne     = InspectorProperty.textField "FFPropOne",</li><li>    sectionOne  = InspectorProperty.section "FFSectionOne" {</li><li>        sliderOne   = InspectorProperty.slider "FFSliderOne",</li><li>    },</li><li>}</li><li>```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua line 38](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua#L38) |

---


### [menuButton](#menubutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.InspectorProperty.menuButton(labelKey[, index]) -> cp.prop <cp.ui.PropertyRow; read-only>`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.prop` that contains a `PropertyRow`  matching the `labelKey`.                                                                     |
| **Parameters**                              | <ul><li>labelKey      - The I18N key that the row lable matches.</li><li>index         - The instance number of that label (defaults to `1`).</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` that returns the `PropertyRow`.</li></ul>          |
| **Notes**                                   | <ul><li>It has one additional property:</li><li>  ** `value`   - A `cp.ui.MenuButton` which contains the text value.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua line 421](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua#L421) |

---


### [numberField](#numberfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.InspectorProperty.numberField(labelKey[, index]) -> cp.prop <cp.ui.PropertyRow; read-only>`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.prop` that contains a `PropertyRow`  matching the `labelKey`.                                                                     |
| **Parameters**                              | <ul><li>labelKey      - The I18N key that the row lable matches.</li><li>index         - The instance number of that label (defaults to `1`).</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` that returns the `PropertyRow`.</li></ul>          |
| **Notes**                                   | <ul><li>It has one additional property:</li><li>  ** `value`   - A `cp.ui.TextField` which contains the number value.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua line 339](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua#L339) |

---


### [popUpButton](#popupbutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.InspectorProperty.popUpButton(labelKey[, index]) -> cp.prop <cp.ui.PropertyRow; read-only>`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.prop` that contains a `PropertyRow`  matching the `labelKey`.                                                                     |
| **Parameters**                              | <ul><li>labelKey      - The I18N key that the row lable matches.</li><li>index         - The instance number of that label (defaults to `1`).</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` that returns the `PropertyRow`.</li></ul>          |
| **Notes**                                   | <ul><li>It has one additional property:</li><li>  ** `value`   - A `cp.ui.PopUpButton` which contains the text value.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua line 461](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua#L461) |

---


### [section](#section)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.InspectorProperty.section(labelKey[, index]) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a 'section row' factory function that can be called to create a section row that contains other `PropertyRow' `cp.prop`s.                                                                     |
| **Parameters**                              | <ul><li>labelKey      - The I18N lookup key to find the row with.</li><li>index         - (optional) The occurrence of the key value in the parent. Sometimes multiple rows have the same title. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>A function which will create the section row when called.</li></ul>          |
| **Notes**                                   | <ul><li>This does *not* return an actual `cp.prop`. Rather, it returns a 'factory' function that will help configure the sub-properties of of the section. This can be used as follows:</li><li></li><li>```lua</li><li>local o = {}</li><li>prop.bind(o) {</li><li>  sectionOne         = InspectorProperty.section "FFHeaderOneKey" {     -- has sub-properties inside the `{}`</li><li>    subRowOne       = InspectorProperty.textField "FFSubRowOneKey",</li><li>    subRowTwo       = InspectorProperty.slider "FFSubRowTwoKey",</li><li>  },</li><li>  sectionTwo         = InspectorProperty.section "FFHeaderTwoKey" {}    -- no sub-properties, still needs `{}`</li><li>}</li><li></li><li>-- access subRowOne</li><li>local value = o:sectionOne():subRowOne()</li><li>```</li><li></li><li>The `o.sectionOne` property will be a `cp.prop` with the following built-in additional properties:</li><li>  ** `enabled`     - a `cp.ui.CheckBox` which reports if the section row is enabled.</li><li>  ** `toggle`      - a `cp.ui.Button` which will toggle the show/hide button (if present)</li><li>  ** `reset`       - a `cp.ui.Button` which will reset the sub-property values, if present in the UI.</li><li>  ** `expanded`    - a `cp.prop` which reports if the section is currently expanded.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua line 99](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua#L99) |

---


### [simple](#simple)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.InspectorProperty.simple(labelKey[, prepareFn][, index]]) -> cp.prop <cp.ui.PropertyRow; read-only>`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.prop` that contains a `PropertyRow`  matching the `labelKey`.                                                                     |
| **Parameters**                              | <ul><li>labelKey      - The I18N key that the row lable matches.</li><li>prepareFn     - The function to call to perform additional preparations on the row.</li><li>index         - The instance number of that label (defaults to `1`).</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` that returns the `PropertyRow`.</li></ul>          |
| **Notes**                                   | <ul><li>It has no additional properties, but it does allow a `prepareFn` to be provided, which will be called after the `PropertyRow` is created, and passed the new `PropertyRow` as the first argument.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua line 268](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua#L268) |

---


### [slider](#slider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.InspectorProperty.slider(labelKey[, index]) -> cp.prop <cp.ui.PropertyRow; read-only>`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.prop` that contains a `PropertyRow`  matching the `labelKey`.                                                                     |
| **Parameters**                              | <ul><li>labelKey      - The I18N key that the row lable matches.</li><li>index         - The instance number of that label (defaults to `1`).</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` that returns the `PropertyRow`.</li></ul>          |
| **Notes**                                   | <ul><li>It has one additional property:</li><li>  ** `value`   - A `cp.ui.TextField` which contains the value of the slider.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua line 401](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua#L401) |

---


### [staticText](#statictext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.InspectorProperty.staticText(labelKey[, index]) -> cp.prop <cp.ui.PropertyRow; read-only>`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.prop` that contains a `PropertyRow`  matching the `labelKey`.                                                                     |
| **Parameters**                              | <ul><li>labelKey      - The I18N key that the row lable matches.</li><li>index         - The instance number of that label (defaults to `1`).</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` that returns the `PropertyRow`.</li></ul>          |
| **Notes**                                   | <ul><li>It has one additional property:</li><li>  ** `value`   - A `cp.ui.StaticText` which contains the text value.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua line 359](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua#L359) |

---


### [textField](#textfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.InspectorProperty.textField(labelKey[, index]) -> cp.prop <cp.ui.PropertyRow; read-only>`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.prop` that contains a `PropertyRow`  matching the `labelKey`.                                                                     |
| **Parameters**                              | <ul><li>labelKey      - The I18N key that the row lable matches.</li><li>index         - The instance number of that label (defaults to `1`).</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` that returns the `PropertyRow`.</li></ul>          |
| **Notes**                                   | <ul><li>It has one additional property:</li><li>  ** `value`   - A `cp.ui.TextField` which contains the text value.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua line 319](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua#L319) |

---


### [xy](#xy)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.InspectorProperty.xy(labelKey[, index]) -> cp.prop <cp.ui.PropertyRow; read-only>`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.prop` that contains a `PropertyRow`  matching the `labelKey`.                                                                     |
| **Parameters**                              | <ul><li>labelKey      - The I18N key that the row lable matches.</li><li>index         - The instance number of that label (defaults to `1`).</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` that returns the `PropertyRow`.</li></ul>          |
| **Notes**                                   | <ul><li>It has two additional properties:</li><li>  ** `x`   - A `cp.ui.TextField` containing the 'X' value.</li><li>  ** `y`   - A `cp.ui.TextField` containing the `Y` value.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua line 379](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/InspectorProperty.lua#L379) |

---


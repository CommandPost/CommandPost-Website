# cp.apple.finalcutpro.inspector.text.TextInspector

Text Inspector Module.

Section Rows (`compositing`, `transform`, etc.) have the following properties:
 * enabled   - (cp.ui.CheckBox) Indicates if the section is enabled.
 * toggle    - (cp.ui.Button) Will toggle the Hide/Show button.
 * reset     - (cp.ui.Button) Will reset the contents of the section.
 * expanded  - (cp.prop <boolean>) Get/sets whether the section is expanded.

Property Rows depend on the type of property:

Menu Property:
 * value     - (cp.ui.PopUpButton) The current value of the property.

Slider Property:
 * value     - (cp.ui.Slider) The current value of the property.

XY Property:
 * x         - (cp.ui.TextField) The current 'X' value.
 * y         - (cp.ui.TextField) The current 'Y' value.

CheckBox Property:
 * value     - (cp.ui.CheckBox) The currently value.

For example:
```lua
local text = fcp.inspector.text
-- Menu Property:
text:compositing():blendMode():value("Subtract")
-- Slider Property:
text:compositing():opacity():value(50.0)
-- XY Property:
text:transform():position():x(-10.0)
-- CheckBox property:
text:stabilization():tripodMode():value(true)
```

You should also be able to show a specific property and it will be revealed:
```lua
text:stabilization():smoothing():show():value(1.5)
```

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [TextInspector](#TextInspector)
* Methods - API calls which can only be made on an object returned by a constructor
 * [doHide](#doHide)
 * [doShow](#doShow)
 * [show](#show)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.text.TextInspector.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided element could be a TextInspector.                                                                     |
| **Parameters**                              | <ul><li>element   - The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [TextInspector](#TextInspector)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.text.TextInspector(parent) -> cp.apple.finalcutpro.text.TextInspector`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `TextInspector` object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A `TextInspector` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [doHide](#doHide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.text.TextInspector:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that hides the Text Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShow](#doShow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.text.TextInspector:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that shows the Text Inspector.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.text.TextInspector:show() -> TextInspector`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Text Inspector                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>TextInspector</li></ul>          |
| **Notes**                                   | <ul></ul>                |

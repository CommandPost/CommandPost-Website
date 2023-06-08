# [docs](index.md) » cp.commands.shortcut.builder
---

Shortcut Commands Builder Module.

## API Overview
* Methods - API calls which can only be made on an object returned by a constructor
 * [add](#add)
 * [new](#new)

## API Documentation

### Methods

| [add](#add)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.shortcut.builder:add(modifier, [keyCode]) -> shortcut/command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the specified modifier to the set. If a `keyCode` is provided, no more modifiers can be added and the original `command` is returned instead. Otherwise, `self` is returned and further modifiers can be added.                                                                     |
| **Parameters**                              | <ul><li>modifier - (optional) The modifier that was added.</li><li>keyCode  - (optional) The key code being modified.</li></ul> |
| **Returns**                                 | <ul><li>`self` if no `keyCode` is provided, or the original `command`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.shortcut.builder.new([receiverFn]) -> builder`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new shortcut builder.                                                                     |
| **Parameters**                              | <ul><li>`receiverFn` - An optional function which will be called with the new shortcut, when built.</li></ul> |
| **Returns**                                 | <ul><li>The builder instance</li></ul>          |
| **Notes**                                   | <ul><li>If provided, the receiver function will be called when the shortcut has been configured, and passed the new shortcut. The result of that function will be returned to the next stage.</li><li>If no `receiverFn` is provided, the shortcut will be returned directly.</li></ul>                |


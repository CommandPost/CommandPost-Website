# cp

Core CommandPost functionality.

## Submodules
 * [cp.18n](cp.18n.md)
 * [cp.adobe](cp.adobe.md)
 * [cp.app](cp.app.md)
 * [cp.apple](cp.apple.md)
 * [cp.battery](cp.battery.md)
 * [cp.bench](cp.bench.md)
 * [cp.blackmagic](cp.blackmagic.md)
 * [cp.buffer](cp.buffer.md)
 * [cp.choices](cp.choices.md)
 * [cp.collect](cp.collect.md)
 * [cp.commands](cp.commands.md)
 * [cp.config](cp.config.md)
 * [cp.console](cp.console.md)
 * [cp.deferred](cp.deferred.md)
 * [cp.delegator](cp.delegator.md)
 * [cp.dev](cp.dev.md)
 * [cp.dialog](cp.dialog.md)
 * [cp.disk](cp.disk.md)
 * [cp.docs](cp.docs.md)
 * [cp.feedback](cp.feedback.md)
 * [cp.fn](cp.fn.md)
 * [cp.highland2](cp.highland2.md)
 * [cp.i18n](cp.i18n.md)
 * [cp.idle](cp.idle.md)
 * [cp.ids](cp.ids.md)
 * [cp.interpolate](cp.interpolate.md)
 * [cp.is](cp.is.md)
 * [cp.json](cp.json.md)
 * [cp.just](cp.just.md)
 * [cp.lazy](cp.lazy.md)
 * [cp.localized](cp.localized.md)
 * [cp.nib](cp.nib.md)
 * [cp.pattern](cp.pattern.md)
 * [cp.plist](cp.plist.md)
 * [cp.plugins](cp.plugins.md)
 * [cp.prop](cp.prop.md)
 * [cp.protect](cp.protect.md)
 * [cp.result](cp.result.md)
 * [cp.rx](cp.rx.md)
 * [cp.sourcewatcher](cp.sourcewatcher.md)
 * [cp.spec](cp.spec.md)
 * [cp.strings](cp.strings.md)
 * [cp.test](cp.test.md)
 * [cp.text](cp.text.md)
 * [cp.time](cp.time.md)
 * [cp.tools](cp.tools.md)
 * [cp.ui](cp.ui.md)
 * [cp.utf16](cp.utf16.md)
 * [cp.watcher](cp.watcher.md)
 * [cp.web](cp.web.md)
 * [cp.websocket](cp.websocket.md)

## API Overview
### **Functions** - _API calls offered directly by the extension_
 * [imageBase64](#imagebase64)
 * [init](#init)

### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [connectClip](#connectclip)


## API Documentation

### Functions


### [imageBase64](#imagebase64)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.imageBase64(pathToImage) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a base65 image string.                                                                     |
| **Parameters**                              | <ul><li>pathToImage - path to the image</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.init()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialise CommandPost                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [connectClip](#connectclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.cp.apple.finalcutpro.timeline.Timeline.connectClip <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Button](cp.ui.Button.md) which connects a clip from the Browser to the Primary Storyline in the Timeline.                                                                     |

---

# plugins.finalcutpro.browser.pasteboardtomarkers

Take the contents of the Pasteboard and pastes it as clip markers on the
selected clip in the Final Cut Pro Browser. Only one clip can be selected.

Supported format:

```
05:00:00: Test Keyword 1
#05:01:00:01: Test Keyword 2
 *05:02:00: Test Keyword 3
05:02:15: Test Keyword 4
 *05:03:00: Test Keyword 5
05:03:15: Test Keyword 6
#05:03:30: Test Keyword 7
 *05:04:00: Test Keyword 8
```

If a * is place before the timecode, it will make the clip as a favourite
between the current timecode value and the next timecode value.

If a # is place before the timecode, it will create a "To Do" marker.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [init](#init)
 * [process](#process)


---

## API Documentation

#### Functions


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.pasteboardtomarkers.init() -> deps`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialise the module.                                                                     |
| **Parameters**                              | <ul><li>deps - Plugin Dependencies</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/browser/pasteboardtomarkers.lua line 296](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/browser/pasteboardtomarkers.lua#L296){target="_blank"} |

---


### [process](#process)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.pasteboardtomarkers.process() -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Processes Pasteboard to Markers                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/browser/pasteboardtomarkers.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/browser/pasteboardtomarkers.lua#L41){target="_blank"} |

---


# hs.hid.led

HID LED interface for Hammerspoon, controls the state of keyboard LEDs

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [set](#set)

---

## API Documentation

#### Functions

### [set](#set)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hid.led.set(name, state) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Assigns HID LED to the desired state                                                                     |
| **Parameters**                              | <ul><li>name  - LED name: "caps", "scroll" or "num"</li><li>state - A boolean indicating desired state</li></ul> |
| **Returns**                                 | <ul><li>true if success, false if error</li></ul>          |
| **Notes**                                   | <ul><li>This function controls the LED state only, to modify capslock state, use hs.hid.capslock.set</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/hid/hid.lua line 66](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/hid/hid.lua#L66) |

---

---

<script src="https://giscus.app/client.js"
        data-repo="CommandPost/CommandPost"
        data-repo-id="MDEwOlJlcG9zaXRvcnk3NDY0NTk2NQ=="
        data-category="Website Discussion"
        data-category-id="DIC_kwDOBHMBzc4CXFFA"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="dark"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>

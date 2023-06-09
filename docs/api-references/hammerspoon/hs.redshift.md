# hs.redshift

Inverts and/or lowers the color temperature of the screen(s) on a schedule, for a more pleasant experience at night

Usage:
```
-- make a windowfilterDisable for redshift: VLC, Photos and screensaver/login window will disable color adjustment and inversion
local wfRedshift=hs.window.filter.new({VLC={focused=true},Photos={focused=true},loginwindow={visible=true,allowRoles='*'}},'wf-redshift')
-- start redshift: 2800K + inverted from 21 to 7, very long transition duration (19->23 and 5->9)
hs.redshift.start(2800,'21:00','7:00','4h',true,wfRedshift)
-- allow manual control of inverted colors
hs.hotkey.bind(HYPER,'f1','Invert',hs.redshift.toggleInvert)
```

Note:
 * As of macOS 10.12.4, Apple provides "Night Shift", which implements a simple red-shift effect, as part of the OS. It seems unlikely that `hs.redshift` will see significant future development.

## API Overview
* Variables - Configurable values
 * [COLORRAMP](#COLORRAMP)
* Functions - API calls offered directly by the extension
 * [invertSubscribe](#invertSubscribe)
 * [invertUnsubscribe](#invertUnsubscribe)
 * [isInverted](#isInverted)
 * [requestInvert](#requestInvert)
 * [start](#start)
 * [stop](#stop)
 * [toggle](#toggle)
 * [toggleInvert](#toggleInvert)

## API Documentation

### Variables


### [COLORRAMP](#COLORRAMP)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.redshift.COLORRAMP`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table holding the gamma values for given color temperatures; each key must be a color temperature number in K (useful values are between                                                                     |
| **Notes**                                   | <ul><li>`hs.inspect(hs.redshift.COLORRAMP)` from the console will show you how the table is built</li><li>the default ramp has entries from 1000K to 10000K every 100K</li></ul>                |

---
### Functions


### [invertSubscribe](#invertSubscribe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.redshift.invertSubscribe([id,]fn)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Subscribes a callback to be notified when the color inversion status changes                                                                     |
| **Parameters**                              | <ul><li>id - (optional) a string identifying the requester (usually the module name); if omitted, `fn` itself will be the identifier; this identifier must be passed to `hs.redshift.invertUnsubscribe()`</li><li>fn - a function that will be called whenever color inversion status changes; it must accept a single parameter, a string or false as per the return value of `hs.redshift.isInverted()`</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>You can use this to dynamically adjust the UI colors in your modules or configuration, if appropriate.</li></ul>                |

---

### [invertUnsubscribe](#invertUnsubscribe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.redshift.invertUnsubscribe(id)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unsubscribes a previously subscribed color inversion change callback                                                                     |
| **Parameters**                              | <ul><li>id - a string identifying the requester or the callback function itself, depending on how you called `hs.redshift.invertSubscribe()`</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isInverted](#isInverted)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.redshift.isInverted() -> string or false`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the colors are currently inverted                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>false if the colors are not currently inverted; otherwise, a string indicating the reason, one of:</li><li>  "user" for the user override (see `hs.redshift.toggleInvert()`)</li><li>  "redshift-night" if `hs.redshift.start()` was called with `invertAtNight` set to true,</li><li>     and it's currently night time</li><li>  the ID string (usually the module name) provided to `hs.redshift.requestInvert()`, if another module requested color inversion</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [requestInvert](#requestInvert)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.redshift.requestInvert(id,v)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets or clears a request for color inversion                                                                     |
| **Parameters**                              | <ul><li>id - a string identifying the requester (usually the module name)</li><li>v - a boolean indicating whether to invert the colors (if true) or clear any previous requests (if false or nil)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>you can use this function e.g. to automatically invert colors if the ambient light sensor reading drops below</li><li>   a certain threshold (`hs.brightness.DDCauto()` can optionally do exactly that)</li><li>if the user's configuration doesn't explicitly start the redshift module, calling this will have no effect</li></ul>                |

---

### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.redshift.start(colorTemp,nightStart,nightEnd[,transition[,invertAtNight[,windowfilterDisable[,dayColorTemp]]]])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the schedule and (re)starts the module                                                                     |
| **Parameters**                              | <ul><li>colorTemp - a number indicating the desired color temperature (Kelvin) during the night cycle; the recommended range is between 3600K and 1400K; lower values (minimum 1000K) result in a more pronounced adjustment</li><li>nightStart - a string in the format "HH:MM" (24-hour clock) or number of seconds after midnight (see `hs.timer.seconds()`) indicating when the night cycle should start</li><li>nightEnd - a string in the format "HH:MM" (24-hour clock) or number of seconds after midnight (see `hs.timer.seconds()`) indicating when the night cycle should end</li><li>transition - (optional) a string or number of seconds (see `hs.timer.seconds()`) indicating the duration of the transition to the night color temperature and back; if omitted, defaults to 1 hour</li><li>invertAtNight - (optional) a boolean indicating whether the colors should be inverted (in addition to the color temperature shift) during the night; if omitted, defaults to false</li><li>windowfilterDisable - (optional) an `hs.window.filter` instance that will disable color adjustment (and color inversion) whenever any window is allowed; alternatively, you can just provide a list of application names (typically media apps and/or apps for color-sensitive work) and a windowfilter will be created for you that disables color adjustment whenever one of these apps is focused</li><li>dayColorTemp - (optional) a number indicating the desired color temperature (in Kelvin) during the day cycle; you can use this to maintain some degree of "redshift" during the day as well, or, if desired, you can specify a value higher than 6500K (up to 10000K) for more bluish colors, although that's not recommended; if omitted, defaults to 6500K, which disables color adjustment and restores your screens' original color profiles</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.redshift.stop()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the module and disables color adjustment and color inversion                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [toggle](#toggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.redshift.toggle([v])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets or clears the user override for color temperature adjustment.                                                                     |
| **Parameters**                              | <ul><li>v - (optional) a boolean; if true, the override will enable color temperature adjustment on the given schedule; if false, the override will disable color temperature adjustment; if omitted or nil, it will toggle the override, i.e. clear it if it's currently enforced, or set it to the opposite of the current color temperature adjustment status otherwise.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function should be bound to a hotkey, e.g.: `hs.hotkey.bind('ctrl-cmd','-','Redshift',hs.redshift.toggle)`</li></ul>                |

---

### [toggleInvert](#toggleInvert)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.redshift.toggleInvert([v])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets or clears the user override for color inversion.                                                                     |
| **Parameters**                              | <ul><li>v - (optional) a boolean; if true, the override will invert the colors no matter what; if false, the override will disable color inversion no matter what; if omitted or nil, it will toggle the override, i.e. clear it if it's currently enforced, or set it to the opposite of the current color inversion status otherwise.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function should be bound to a hotkey, e.g.: `hs.hotkey.bind('ctrl-cmd','=','Invert',hs.redshift.toggleInvert)`</li></ul>                |

---

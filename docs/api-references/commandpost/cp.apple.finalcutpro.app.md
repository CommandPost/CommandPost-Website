# cp.apple.finalcutpro.app

The [cp.app](cp.app.md) for Final Cut Pro. Will automatically determine
if only the trial version of FCPX is installed and use that instead.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [app](#app)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [application](#application)


---

## API Documentation

#### Constants


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.app <cp.app>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The [app](cp.app.md) for Final Cut Pro.                                                                     |
| **Notes**                                   | <ul><li>All values from [app](cp.app.md) can be accessed directly from the `finalcutpro` instance.</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 153](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L153){target="_blank"} |

---

#### Fields


### [application](#application)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.application <cp.prop: hs.application; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the running `hs.application` for Final Cut Pro, or `nil` if it's not running.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 256](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L256){target="_blank"} |

---


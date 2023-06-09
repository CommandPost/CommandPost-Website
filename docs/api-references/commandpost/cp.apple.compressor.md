# cp.apple.compressor

Represents the Compressor application, providing functions that allow different tasks to be accomplished.

---

## Submodules
 * [cp.apple.compressor.app](cp.apple.compressor.app.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [ALLOWED_IMPORT_ALL_EXTENSIONS](#allowed_import_all_extensions)
 * [ALLOWED_IMPORT_AUDIO_EXTENSIONS](#allowed_import_audio_extensions)
 * [ALLOWED_IMPORT_IMAGE_EXTENSIONS](#allowed_import_image_extensions)
 * [ALLOWED_IMPORT_VIDEO_EXTENSIONS](#allowed_import_video_extensions)
 * [BUNDLE_ID](#bundle_id)
 * [EARLIEST_SUPPORTED_VERSION](#earliest_supported_version)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [bundleID](#bundleid)
 * [doRestart](#dorestart)
 * [hide](#hide)
 * [launch](#launch)
 * [notifier](#notifier)
 * [path](#path)
 * [quit](#quit)
 * [show](#show)


---

## API Documentation

#### Constants


### [ALLOWED_IMPORT_ALL_EXTENSIONS](#allowed_import_all_extensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor.ALLOWED_IMPORT_ALL_EXTENSIONS`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of all file extensions Final Cut Pro can import.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 38](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L38) |

---


### [ALLOWED_IMPORT_AUDIO_EXTENSIONS](#allowed_import_audio_extensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor.ALLOWED_IMPORT_AUDIO_EXTENSIONS`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of audio file extensions Final Cut Pro can import.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 28](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L28) |

---


### [ALLOWED_IMPORT_IMAGE_EXTENSIONS](#allowed_import_image_extensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor.ALLOWED_IMPORT_IMAGE_EXTENSIONS`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of image file extensions Final Cut Pro can import.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L33) |

---


### [ALLOWED_IMPORT_VIDEO_EXTENSIONS](#allowed_import_video_extensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor.ALLOWED_IMPORT_VIDEO_EXTENSIONS`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of video file extensions Final Cut Pro can import.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 23](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L23) |

---


### [BUNDLE_ID](#bundle_id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor.BUNDLE_ID`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Compressor's Bundle ID                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 18](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L18) |

---


### [EARLIEST_SUPPORTED_VERSION](#earliest_supported_version)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor.EARLIEST_SUPPORTED_VERSION <semver>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The earliest version this API supports.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L43) |

---

#### Methods


### [bundleID](#bundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:bundleID() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the Compressor Bundle ID                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string of the Compressor Bundle ID</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 125](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L125) |

---


### [doRestart](#dorestart)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:doRestart() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will restart the application.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the application was running and restarted successfully.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 170](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L170) |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:hide() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides Compressor                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The compressor instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 201](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L201) |

---


### [launch](#launch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:launch([waitSeconds]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Launches Compressor, or brings it to the front if it was already running.                                                                     |
| **Parameters**                              | <ul><li>waitSeconds      - if provided, we will wait for up to the specified seconds for the launch to complete.</li></ul> |
| **Returns**                                 | <ul><li>`true` if Compressor was either launched or focused, otherwise false (e.g. if Compressor doesn't exist)</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 151](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L151) |

---


### [notifier](#notifier)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:notifier() -> cp.ui.notifier`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a notifier that is tracking the application UI element. It has already been started.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The notifier.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 138](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L138) |

---


### [path](#path)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:path() -> string or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Path to Compressor Application                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing Compressor's filesystem path, or `nil` if the bundle identifier could not be located</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 237](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L237) |

---


### [quit](#quit)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:quit([waitSeconds]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Quits Compressor                                                                     |
| **Parameters**                              | <ul><li>waitSeconds  - if provided, we will wait for the specified time for the quit to complete before returning.</li></ul> |
| **Returns**                                 | <ul><li>The `compressor` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 219](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L219) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Activate Compressor                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The compressor instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/compressor/init.lua line 183](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/compressor/init.lua#L183) |

---


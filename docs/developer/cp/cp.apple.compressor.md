# [docs](index.md) » cp.apple.compressor
---

Represents the Compressor application, providing functions that allow different tasks to be accomplished.

## Submodules
 * [cp.apple.compressor.app](cp.apple.compressor.app.md)

## API Overview
* Constants - Useful values which cannot be changed
 * [ALLOWED_IMPORT_ALL_EXTENSIONS](#ALLOWED_IMPORT_ALL_EXTENSIONS)
 * [ALLOWED_IMPORT_AUDIO_EXTENSIONS](#ALLOWED_IMPORT_AUDIO_EXTENSIONS)
 * [ALLOWED_IMPORT_IMAGE_EXTENSIONS](#ALLOWED_IMPORT_IMAGE_EXTENSIONS)
 * [ALLOWED_IMPORT_VIDEO_EXTENSIONS](#ALLOWED_IMPORT_VIDEO_EXTENSIONS)
 * [BUNDLE_ID](#BUNDLE_ID)
 * [EARLIEST_SUPPORTED_VERSION](#EARLIEST_SUPPORTED_VERSION)
* Methods - API calls which can only be made on an object returned by a constructor
 * [bundleID](#bundleID)
 * [doRestart](#doRestart)
 * [hide](#hide)
 * [launch](#launch)
 * [notifier](#notifier)
 * [path](#path)
 * [quit](#quit)
 * [show](#show)

## API Documentation

### Constants

| [ALLOWED_IMPORT_ALL_EXTENSIONS](#ALLOWED_IMPORT_ALL_EXTENSIONS)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor.ALLOWED_IMPORT_ALL_EXTENSIONS`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of all file extensions Final Cut Pro can import.                                                                     |

| [ALLOWED_IMPORT_AUDIO_EXTENSIONS](#ALLOWED_IMPORT_AUDIO_EXTENSIONS)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor.ALLOWED_IMPORT_AUDIO_EXTENSIONS`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of audio file extensions Final Cut Pro can import.                                                                     |

| [ALLOWED_IMPORT_IMAGE_EXTENSIONS](#ALLOWED_IMPORT_IMAGE_EXTENSIONS)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor.ALLOWED_IMPORT_IMAGE_EXTENSIONS`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of image file extensions Final Cut Pro can import.                                                                     |

| [ALLOWED_IMPORT_VIDEO_EXTENSIONS](#ALLOWED_IMPORT_VIDEO_EXTENSIONS)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor.ALLOWED_IMPORT_VIDEO_EXTENSIONS`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of video file extensions Final Cut Pro can import.                                                                     |

| [BUNDLE_ID](#BUNDLE_ID)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor.BUNDLE_ID`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Compressor's Bundle ID                                                                     |

| [EARLIEST_SUPPORTED_VERSION](#EARLIEST_SUPPORTED_VERSION)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor.EARLIEST_SUPPORTED_VERSION <semver>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The earliest version this API supports.                                                                     |

### Methods

| [bundleID](#bundleID)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:bundleID() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the Compressor Bundle ID                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string of the Compressor Bundle ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doRestart](#doRestart)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:doRestart() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will restart the application.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the application was running and restarted successfully.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hide](#hide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:hide() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides Compressor                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The compressor instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [launch](#launch)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:launch([waitSeconds]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Launches Compressor, or brings it to the front if it was already running.                                                                     |
| **Parameters**                              | <ul><li>waitSeconds      - if provided, we will wait for up to the specified seconds for the launch to complete.</li></ul> |
| **Returns**                                 | <ul><li>`true` if Compressor was either launched or focused, otherwise false (e.g. if Compressor doesn't exist)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [notifier](#notifier)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:notifier() -> cp.ui.notifier`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a notifier that is tracking the application UI element. It has already been started.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The notifier.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [path](#path)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:path() -> string or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Path to Compressor Application                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing Compressor's filesystem path, or `nil` if the bundle identifier could not be located</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [quit](#quit)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:quit([waitSeconds]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Quits Compressor                                                                     |
| **Parameters**                              | <ul><li>waitSeconds  - if provided, we will wait for the specified time for the quit to complete before returning.</li></ul> |
| **Returns**                                 | <ul><li>The `compressor` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.compressor:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Activate Compressor                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The compressor instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


# [docs](index.md) » hs.sound
---

Load/play/manipulate sound files

## API Overview
* Functions - API calls offered directly by the extension
 * [getAudioEffectNames](#getAudioEffectNames)
 * [soundFileTypes](#soundFileTypes)
 * [soundTypes](#soundTypes)
 * [systemSounds](#systemSounds)
* Constructors - API calls which return an object, typically one that offers API methods
 * [getByFile](#getByFile)
 * [getByName](#getByName)
* Methods - API calls which can only be made on an object returned by a constructor
 * [currentTime](#currentTime)
 * [device](#device)
 * [duration](#duration)
 * [isPlaying](#isPlaying)
 * [loopSound](#loopSound)
 * [name](#name)
 * [pause](#pause)
 * [play](#play)
 * [resume](#resume)
 * [setCallback](#setCallback)
 * [stop](#stop)
 * [stopOnReload](#stopOnReload)
 * [volume](#volume)

## API Documentation

### Functions

| [getAudioEffectNames](#getAudioEffectNames)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound.getAudioEffectNames() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table of installed Audio Units Effect names.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the names of all installed Audio Units Effects.</li></ul>          |
| **Notes**                                   | <ul><li>Example usage: `hs.inspect(hs.audiounit.getAudioEffectNames())`</li></ul>                |

| [soundFileTypes](#soundFileTypes)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound.soundFileTypes() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the supported sound file types                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the sound file filename extensions that are supported by the system</li></ul>          |
| **Notes**                                   | <ul><li>This function is unlikely to be tremendously useful, as filename extensions are essentially meaningless. The data returned by `hs.sound.soundTypes()` is far more valuable</li></ul>                |

| [soundTypes](#soundTypes)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound.soundTypes() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the supported UTI sound file formats                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the UTI sound formats that are supported by the system</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [systemSounds](#systemSounds)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound.systemSounds() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table of available system sounds                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing all of the available sound files (i.e. those found in ~/Library/Sounds, /Library/Sounds, /Network/Library/Sounds and /System/Library/Sounds)</li></ul>          |
| **Notes**                                   | <ul><li>The sounds listed by this function can be loaded using `hs.sound.getByName()`</li></ul>                |

### Constructors

| [getByFile](#getByFile)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound.getByFile(path) -> sound or nil`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an `hs.sound` object from a file                                                                     |
| **Parameters**                              | <ul><li>path - A string containing the path to a sound file</li></ul> |
| **Returns**                                 | <ul><li>An `hs.sound` object or nil if the file could not be loaded</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getByName](#getByName)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound.getByName(name) -> sound or nil`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an `hs.sound` object from a named sound                                                                     |
| **Parameters**                              | <ul><li>name - A string containing the name of a sound</li></ul> |
| **Returns**                                 | <ul><li>An `hs.sound` object or nil if no matching sound could be found</li></ul>          |
| **Notes**                                   | <ul><li>Sounds can only be loaded by name if they are System Sounds (i.e. those found in ~/Library/Sounds, /Library/Sounds, /Network/Library/Sounds and /System/Library/Sounds) or are sound files that have previously been loaded and named</li></ul>                |

### Methods

| [currentTime](#currentTime)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound:currentTime([seekTime]) -> soundObject | seconds`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the current seek offset within an `hs.sound` object.                                                                     |
| **Parameters**                              | <ul><li>seekTime - An optional number of seconds to seek to within the sound object</li></ul> |
| **Returns**                                 | <ul><li>If a parameter is provided, returns the sound object; otherwise returns the current position.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [device](#device)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound:device([deviceUID]) -> soundObject | UID string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the playback device to use for an `hs.sound` object                                                                     |
| **Parameters**                              | <ul><li>deviceUID - An optional string containing the UID of an `hs.audiodevice` object to use for playback of this sound. Use an explicit nil to use the system's default device</li></ul> |
| **Returns**                                 | <ul><li>If a parameter is provided, returns the sound object; otherwise returns the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>To obtain the UID of a sound device, see `hs.audiodevice:uid()`</li></ul>                |

| [duration](#duration)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound:duration() -> seconds`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the length of an `hs.sound` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the length of the sound, in seconds</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [isPlaying](#isPlaying)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound:isPlaying() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the current playback state of an `hs.sound` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the sound is currently playing, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [loopSound](#loopSound)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound:loopSound([loop]) -> soundObject | bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the looping behaviour of an `hs.sound` object                                                                     |
| **Parameters**                              | <ul><li>loop - An optional boolean, true to loop playback, false to not loop</li></ul> |
| **Returns**                                 | <ul><li>If a parameter is provided, returns the sound object; otherwise returns the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>If you have registered a callback function for completion of a sound's playback, it will not be called when the sound loops</li></ul>                |

| [name](#name)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound:name([soundName]) -> soundObject | name string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the name of an `hs.sound` object                                                                     |
| **Parameters**                              | <ul><li>soundName - An optional string to use as the name of the object; use an explicit nil to remove the name</li></ul> |
| **Returns**                                 | <ul><li>If a parameter is provided, returns the sound object; otherwise returns the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>If remove the sound name by specifying `nil`, the sound will automatically be set to stop when Hammerspoon is reloaded.</li></ul>                |

| [pause](#pause)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound:pause() -> soundObject | bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Pauses an `hs.sound` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.sound` object if the command was successful, otherwise false.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [play](#play)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound:play() -> soundObject | bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Plays an `hs.sound` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.sound` object if the command was successful, otherwise false.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [resume](#resume)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound:resume() -> soundObject | bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resumes playing a paused `hs.sound` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.sound` object if the command was successful, otherwise false.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setCallback](#setCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound:setCallback(function) -> soundObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set or remove the callback for receiving completion notification for the sound object.                                                                     |
| **Parameters**                              | <ul><li>function - A function which should be called when the sound completes playing.  Specify an explicit nil to remove the callback function.</li></ul> |
| **Returns**                                 | <ul><li>the sound object</li></ul>          |
| **Notes**                                   | <ul><li>the callback function should accept two parameters and return none.  The parameters passed to the callback function are:</li><li>  state - a boolean flag indicating if the sound completed playing.  Returns true if playback completes properly, or false if a decoding error occurs or if the sound is stopped early with `hs.sound:stop`.</li><li>  sound - the soundObject userdata</li></ul>                |

| [stop](#stop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound:stop() -> soundObject | bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops playing an `hs.sound` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.sound` object if the command was successful, otherwise false.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stopOnReload](#stopOnReload)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound:stopOnReload([stopOnReload]) -> soundObject | bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether a sound should be stopped when Hammerspoon reloads its configuration                                                                     |
| **Parameters**                              | <ul><li>stopOnReload - An optional boolean, true to stop playback when Hammerspoon reloads its config, false to continue playback regardless.  Defaults to true.</li></ul> |
| **Returns**                                 | <ul><li>If a parameter is provided, returns the sound object; otherwise returns the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>This method can only be used on a named `hs.sound` object, see `hs.sound:name()`</li></ul>                |

| [volume](#volume)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sound:volume([level]) -> soundObject | number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the playback volume of an `hs.sound` object                                                                     |
| **Parameters**                              | <ul><li>level - A number between 0.0 and 1.0, representing the volume of the sound object relative to the current system volume</li></ul> |
| **Returns**                                 | <ul><li>If a parameter is provided, returns the sound object; otherwise returns the current value.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


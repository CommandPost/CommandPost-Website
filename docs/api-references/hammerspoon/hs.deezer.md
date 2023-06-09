# hs.deezer

Controls for Deezer music player.

Heavily inspired by 'hs.spotify', credits to the original author.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [state_paused](#state_paused)
 * [state_playing](#state_playing)
 * [state_stopped](#state_stopped)

**Functions** - _API calls offered directly by the extension_
 * [displayCurrentTrack](#displaycurrenttrack)
 * [ff](#ff)
 * [getCurrentAlbum](#getcurrentalbum)
 * [getCurrentArtist](#getcurrentartist)
 * [getCurrentTrack](#getcurrenttrack)
 * [getPlaybackState](#getplaybackstate)
 * [getPosition](#getposition)
 * [getVolume](#getvolume)
 * [isPlaying](#isplaying)
 * [isRunning](#isrunning)
 * [next](#next)
 * [pause](#pause)
 * [play](#play)
 * [playpause](#playpause)
 * [previous](#previous)
 * [rw](#rw)
 * [setPosition](#setposition)
 * [setVolume](#setvolume)
 * [volumeDown](#volumedown)
 * [volumeUp](#volumeup)


---

## API Documentation

#### Constants


### [state_paused](#state_paused)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.state_paused`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returned by `hs.deezer.getPlaybackState()` to indicates deezer is paused                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 13](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L13){target="_blank"} |

---


### [state_playing](#state_playing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.state_playing`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returned by `hs.deezer.getPlaybackState()` to indicates deezer is playing                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 18](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L18){target="_blank"} |

---


### [state_stopped](#state_stopped)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.state_stopped`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returned by `hs.deezer.getPlaybackState()` to indicates deezer is stopped                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 23](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L23){target="_blank"} |

---

#### Functions


### [displayCurrentTrack](#displaycurrenttrack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.displayCurrentTrack()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays information for current track on screen                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 100](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L100){target="_blank"} |

---


### [ff](#ff)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.ff()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips the playback position forwards by 5 seconds                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 295](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L295){target="_blank"} |

---


### [getCurrentAlbum](#getcurrentalbum)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.getCurrentAlbum()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the album of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the Album of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 129](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L129){target="_blank"} |

---


### [getCurrentArtist](#getcurrentartist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.getCurrentArtist()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the artist of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the Artist of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 116](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L116){target="_blank"} |

---


### [getCurrentTrack](#getcurrenttrack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.getCurrentTrack()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the name of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 142](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L142){target="_blank"} |

---


### [getPlaybackState](#getplaybackstate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.getPlaybackState()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the current playback state of deezer                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing one of the following constants:</li><li>   - `hs.deezer.state_stopped`</li><li>   - `hs.deezer.state_paused`</li><li>   - `hs.deezer.state_playing`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 155](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L155){target="_blank"} |

---


### [getPosition](#getposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.getPosition()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the playback position (in seconds) in the current song                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number indicating the current position in the song</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 255](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L255){target="_blank"} |

---


### [getVolume](#getvolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.getVolume()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the deezer volume setting                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the volume deezer is set to between 1 and 100</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 207](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L207){target="_blank"} |

---


### [isPlaying](#isplaying)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.isPlaying()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether deezer is currently playing                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether deezer is currently playing a track, or nil if an error occurred (unknown player state). Also returns false if the application is not running</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 184](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L184){target="_blank"} |

---


### [isRunning](#isrunning)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.isRunning()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether deezer is currently open. Most other functions in hs.deezer will automatically start the application, so this function can be used to guard against that.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether the deezer application is running.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 171](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L171){target="_blank"} |

---


### [next](#next)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.next()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips to the next deezer track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 74](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L74){target="_blank"} |

---


### [pause](#pause)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.pause()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pauses the current deezer track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 61](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L61){target="_blank"} |

---


### [play](#play)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.play()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Plays the current deezer track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 48](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L48){target="_blank"} |

---


### [playpause](#playpause)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.playpause()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggles play/pause of current deezer track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 35](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L35){target="_blank"} |

---


### [previous](#previous)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.previous()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips to previous deezer track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 87](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L87){target="_blank"} |

---


### [rw](#rw)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.rw()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips the playback position backwards by 5 seconds                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 306](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L306){target="_blank"} |

---


### [setPosition](#setposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.setPosition(pos)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the playback position in the current song                                                                     |
| **Parameters**                              | <ul><li>pos - A number containing the position (in seconds) to jump to in the current song</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 266](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L266){target="_blank"} |

---


### [setVolume](#setvolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.setVolume(vol)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the deezer volume setting                                                                     |
| **Parameters**                              | <ul><li>vol - A number between 1 and 100</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 218](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L218){target="_blank"} |

---


### [volumeDown](#volumedown)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.volumeDown()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reduces the volume by 5                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 244](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L244){target="_blank"} |

---


### [volumeUp](#volumeup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.deezer.volumeUp()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Increases the volume by 5                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/deezer/deezer.lua line 233](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/deezer/deezer.lua#L233){target="_blank"} |

---


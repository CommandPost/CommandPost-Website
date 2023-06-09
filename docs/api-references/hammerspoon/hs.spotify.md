# hs.spotify

Controls for Spotify music player

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
 * [getCurrentTrackId](#getcurrenttrackid)
 * [getDuration](#getduration)
 * [getPlaybackState](#getplaybackstate)
 * [getPosition](#getposition)
 * [getVolume](#getvolume)
 * [isPlaying](#isplaying)
 * [isRunning](#isrunning)
 * [next](#next)
 * [pause](#pause)
 * [play](#play)
 * [playpause](#playpause)
 * [playTrack](#playtrack)
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
| **Signature**                               | `hs.spotify.state_paused`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returned by `hs.spotify.getPlaybackState()` to indicates Spotify is paused                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 11](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L11) |

---


### [state_playing](#state_playing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.state_playing`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returned by `hs.spotify.getPlaybackState()` to indicates Spotify is playing                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 16](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L16) |

---


### [state_stopped](#state_stopped)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.state_stopped`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returned by `hs.spotify.getPlaybackState()` to indicates Spotify is stopped                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 21](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L21) |

---

#### Functions


### [displayCurrentTrack](#displaycurrenttrack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.displayCurrentTrack()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays information for current track on screen                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 115](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L115) |

---


### [ff](#ff)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.ff()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips the playback position forwards by 5 seconds                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 323](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L323) |

---


### [getCurrentAlbum](#getcurrentalbum)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getCurrentAlbum()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the album of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the Album of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 144](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L144) |

---


### [getCurrentArtist](#getcurrentartist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getCurrentArtist()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the artist of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the Artist of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 131](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L131) |

---


### [getCurrentTrack](#getcurrenttrack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getCurrentTrack()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the name of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 157](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L157) |

---


### [getCurrentTrackId](#getcurrenttrackid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getCurrentTrackId()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the id of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the id of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 169](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L169) |

---


### [getDuration](#getduration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getDuration()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the duration (in seconds) of the current song                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The number of seconds long the current song is, 0 if no song is playing</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 309](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L309) |

---


### [getPlaybackState](#getplaybackstate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getPlaybackState()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the current playback state of Spotify                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing one of the following constants:</li><li>   - `hs.spotify.state_stopped`</li><li>   - `hs.spotify.state_paused`</li><li>   - `hs.spotify.state_playing`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 182](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L182) |

---


### [getPosition](#getposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getPosition()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the playback position (in seconds) in the current song                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number indicating the current position in the song</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 283](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L283) |

---


### [getVolume](#getvolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getVolume()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the Spotify volume setting                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the volume Spotify is set to between 1 and 100</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 235](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L235) |

---


### [isPlaying](#isplaying)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.isPlaying()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether Spotify is currently playing                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether Spotify is currently playing a track, or nil if an error occurred (unknown player state). Also returns false if the application is not running</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 211](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L211) |

---


### [isRunning](#isrunning)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.isRunning()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether Spotify is currently open. Most other functions in hs.spotify will automatically start the application, so this function can be used to guard against that.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether the Spotify application is running.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 198](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L198) |

---


### [next](#next)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.next()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips to the next Spotify track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 76](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L76) |

---


### [pause](#pause)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.pause()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pauses the current Spotify track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 63](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L63) |

---


### [play](#play)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.play()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Plays the current Spotify track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 50](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L50) |

---


### [playpause](#playpause)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.playpause()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggles play/pause of current Spotify track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 37](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L37) |

---


### [playTrack](#playtrack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.playTrack(id)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Plays the Spotify track with the given id                                                                     |
| **Parameters**                              | <ul><li>id - The Spotify id of the track to be played</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 102](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L102) |

---


### [previous](#previous)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.previous()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips to previous Spotify track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 89](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L89) |

---


### [rw](#rw)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.rw()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips the playback position backwards by 5 seconds                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 334](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L334) |

---


### [setPosition](#setposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.setPosition(pos)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the playback position in the current song                                                                     |
| **Parameters**                              | <ul><li>pos - A number containing the position (in seconds) to jump to in the current song</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 294](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L294) |

---


### [setVolume](#setvolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.setVolume(vol)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the Spotify volume setting                                                                     |
| **Parameters**                              | <ul><li>vol - A number between 1 and 100</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 246](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L246) |

---


### [volumeDown](#volumedown)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.volumeDown()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reduces the volume by 5                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 272](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L272) |

---


### [volumeUp](#volumeup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.volumeUp()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Increases the volume by 5                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/spotify/spotify.lua line 261](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/spotify/spotify.lua#L261) |

---


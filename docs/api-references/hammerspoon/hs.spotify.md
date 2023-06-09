# hs.spotify

Controls for Spotify music player

## API Overview
* Constants - Useful values which cannot be changed
 * [state_paused](#state_paused)
 * [state_playing](#state_playing)
 * [state_stopped](#state_stopped)
* Functions - API calls offered directly by the extension
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

## API Documentation

### Constants


### [state_paused](#state_paused)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.state_paused`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returned by `hs.spotify.getPlaybackState()` to indicates Spotify is paused                                                                     |

---

### [state_playing](#state_playing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.state_playing`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returned by `hs.spotify.getPlaybackState()` to indicates Spotify is playing                                                                     |

---

### [state_stopped](#state_stopped)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.state_stopped`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returned by `hs.spotify.getPlaybackState()` to indicates Spotify is stopped                                                                     |

---
### Functions


### [displayCurrentTrack](#displaycurrenttrack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.displayCurrentTrack()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays information for current track on screen                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [ff](#ff)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.ff()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips the playback position forwards by 5 seconds                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getCurrentAlbum](#getcurrentalbum)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getCurrentAlbum()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the album of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the Album of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getCurrentArtist](#getcurrentartist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getCurrentArtist()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the artist of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the Artist of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getCurrentTrack](#getcurrenttrack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getCurrentTrack()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the name of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getCurrentTrackId](#getcurrenttrackid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getCurrentTrackId()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the id of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the id of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getDuration](#getduration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getDuration()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the duration (in seconds) of the current song                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The number of seconds long the current song is, 0 if no song is playing</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getPlaybackState](#getplaybackstate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getPlaybackState()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the current playback state of Spotify                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing one of the following constants:</li><li>   - `hs.spotify.state_stopped`</li><li>   - `hs.spotify.state_paused`</li><li>   - `hs.spotify.state_playing`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getPosition](#getposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getPosition()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the playback position (in seconds) in the current song                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number indicating the current position in the song</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getVolume](#getvolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.getVolume()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the Spotify volume setting                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the volume Spotify is set to between 1 and 100</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isPlaying](#isplaying)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.isPlaying()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether Spotify is currently playing                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether Spotify is currently playing a track, or nil if an error occurred (unknown player state). Also returns false if the application is not running</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isRunning](#isrunning)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.isRunning()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether Spotify is currently open. Most other functions in hs.spotify will automatically start the application, so this function can be used to guard against that.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether the Spotify application is running.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [next](#next)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.next()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips to the next Spotify track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [pause](#pause)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.pause()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pauses the current Spotify track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [play](#play)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.play()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Plays the current Spotify track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [playpause](#playpause)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.playpause()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggles play/pause of current Spotify track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [playTrack](#playtrack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.playTrack(id)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Plays the Spotify track with the given id                                                                     |
| **Parameters**                              | <ul><li>id - The Spotify id of the track to be played</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [previous](#previous)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.previous()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips to previous Spotify track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [rw](#rw)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.rw()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips the playback position backwards by 5 seconds                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setPosition](#setposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.setPosition(pos)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the playback position in the current song                                                                     |
| **Parameters**                              | <ul><li>pos - A number containing the position (in seconds) to jump to in the current song</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setVolume](#setvolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.setVolume(vol)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the Spotify volume setting                                                                     |
| **Parameters**                              | <ul><li>vol - A number between 1 and 100</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [volumeDown](#volumedown)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.volumeDown()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reduces the volume by 5                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [volumeUp](#volumeup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.spotify.volumeUp()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Increases the volume by 5                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

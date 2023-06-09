# hs.itunes

Controls for iTunes music player

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
 * [previous](#previous)
 * [rw](#rw)
 * [setPosition](#setposition)
 * [setVolume](#setvolume)
 * [volumeDown](#volumedown)
 * [volumeUp](#volumeup)


---

## API Documentation

### Constants


### [state_paused](#state_paused)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.state_paused`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returned by `hs.itunes.getPlaybackState()` to indicates iTunes is paused                                                                     |

---

### [state_playing](#state_playing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.state_playing`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returned by `hs.itunes.getPlaybackState()` to indicates iTunes is playing                                                                     |

---

### [state_stopped](#state_stopped)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.state_stopped`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returned by `hs.itunes.getPlaybackState()` to indicates iTunes is stopped                                                                     |

---
### Functions


### [displayCurrentTrack](#displaycurrenttrack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.displayCurrentTrack()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays information for current track on screen                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [ff](#ff)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.ff()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips the current playback forwards by 5 seconds                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getCurrentAlbum](#getcurrentalbum)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.getCurrentAlbum() -> string or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the current Album                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the Album of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getCurrentArtist](#getcurrentartist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.getCurrentArtist() -> string or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the current Artist                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the Artist of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getCurrentTrack](#getcurrenttrack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.getCurrentTrack() -> string or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the name of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getDuration](#getduration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.getDuration()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the duration (in seconds) of the current song                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The number of seconds long the current song is, 0 if no song is playing</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getPlaybackState](#getplaybackstate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.getPlaybackState()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the current playback state of iTunes                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing one of the following constants:</li><li>   - `hs.itunes.state_stopped`</li><li>   - `hs.itunes.state_paused`</li><li>   - `hs.itunes.state_playing`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getPosition](#getposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.getPosition()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the playback position (in seconds) of the current song                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number indicating the current position in the song</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getVolume](#getvolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.getVolume()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the current iTunes volume setting                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number, between 1 and 100, containing the current iTunes playback volume</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isPlaying](#isplaying)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.isPlaying()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether iTunes is currently playing                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether iTunes is currently playing a track, or nil if an error occurred (unknown player state). Also returns false if the application is not running</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isRunning](#isrunning)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.isRunning()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether iTunes is currently open. Most other functions in hs.itunes will automatically start the application, so this function can be used to guard against that.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether the iTunes application is running.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [next](#next)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.next()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips to the next itunes track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [pause](#pause)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.pause()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pauses the current iTunes track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [play](#play)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.play()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Plays the current iTunes track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [playpause](#playpause)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.playpause()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggles play/pause of current iTunes track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [previous](#previous)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.previous()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips to previous itunes track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [rw](#rw)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.rw()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips the current playback backwards by 5 seconds                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setPosition](#setposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.setPosition(pos)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the playback position of the current song                                                                     |
| **Parameters**                              | <ul><li>pos - A number indicating the playback position (in seconds) to skip to</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setVolume](#setvolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.setVolume(vol)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the iTunes playback volume                                                                     |
| **Parameters**                              | <ul><li>vol - A number, between 1 and 100</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [volumeDown](#volumedown)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.volumeDown()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Decreases the iTunes playback volume by 5                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [volumeUp](#volumeup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.itunes.volumeUp()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Increases the iTunes playback volume by 5                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

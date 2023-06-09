# hs.vox

Controls for VOX music player

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [addurl](#addurl)
 * [backward](#backward)
 * [decreaseVolume](#decreasevolume)
 * [fastBackward](#fastbackward)
 * [fastForward](#fastforward)
 * [forward](#forward)
 * [getAlbumArtist](#getalbumartist)
 * [getCurrentAlbum](#getcurrentalbum)
 * [getCurrentArtist](#getcurrentartist)
 * [getPlayerState](#getplayerstate)
 * [getUniqueID](#getuniqueid)
 * [increaseVolume](#increasevolume)
 * [isRunning](#isrunning)
 * [next](#next)
 * [pause](#pause)
 * [play](#play)
 * [playpause](#playpause)
 * [playurl](#playurl)
 * [previous](#previous)
 * [shuffle](#shuffle)
 * [togglePlaylist](#toggleplaylist)
 * [trackInfo](#trackinfo)


---

## API Documentation

#### Functions


### [addurl](#addurl)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.addurl(url)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Add media URL to current list                                                                     |
| **Parameters**                              | <ul><li>url {string}</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 115](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L115){target="_blank"} |

---


### [backward](#backward)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.backward()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips the playback position backwards by about 7 seconds                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 141](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L141){target="_blank"} |

---


### [decreaseVolume](#decreasevolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.decreaseVolume()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Decreases the player volume                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 193](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L193){target="_blank"} |

---


### [fastBackward](#fastbackward)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.fastBackward()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips the playback position backwards by about 14 seconds                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 167](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L167){target="_blank"} |

---


### [fastForward](#fastforward)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.fastForward()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips the playback position forwards by about 17 seconds                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 154](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L154){target="_blank"} |

---


### [forward](#forward)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.forward()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips the playback position forwards by about 7 seconds                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 128](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L128){target="_blank"} |

---


### [getAlbumArtist](#getalbumartist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.getAlbumArtist()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the artist of current Album                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the artist of current Album, or nil if an error occurred</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 261](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L261){target="_blank"} |

---


### [getCurrentAlbum](#getcurrentalbum)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.getCurrentAlbum()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the album of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the Album of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 248](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L248){target="_blank"} |

---


### [getCurrentArtist](#getcurrentartist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.getCurrentArtist()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the artist of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the Artist of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 235](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L235){target="_blank"} |

---


### [getPlayerState](#getplayerstate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.getPlayerState()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the current playback state of vox                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>0 for paused</li><li>1 for playing</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 287](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L287){target="_blank"} |

---


### [getUniqueID](#getuniqueid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.getUniqueID()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the uniqueID of the current track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the name of the current track, or nil if an error occurred</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 274](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L274){target="_blank"} |

---


### [increaseVolume](#increasevolume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.increaseVolume()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Increases the player volume                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 180](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L180){target="_blank"} |

---


### [isRunning](#isrunning)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.isRunning()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns whether VOX is currently open                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether the vox application is running</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 301](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L301){target="_blank"} |

---


### [next](#next)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.next()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips to the next track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 63](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L63){target="_blank"} |

---


### [pause](#pause)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.pause()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pauses the current vox track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 24](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L24){target="_blank"} |

---


### [play](#play)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.play()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Plays the current vox track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 37](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L37){target="_blank"} |

---


### [playpause](#playpause)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.playpause()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggles play/pause of current vox track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 50](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L50){target="_blank"} |

---


### [playurl](#playurl)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.playurl(url)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Play media from the given URL                                                                     |
| **Parameters**                              | <ul><li>url {string}</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 102](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L102){target="_blank"} |

---


### [previous](#previous)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.previous()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Skips to previous track                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 76](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L76){target="_blank"} |

---


### [shuffle](#shuffle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.shuffle()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggle shuffle state of current list                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 89](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L89){target="_blank"} |

---


### [togglePlaylist](#toggleplaylist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.togglePlaylist()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggle playlist                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 206](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L206){target="_blank"} |

---


### [trackInfo](#trackinfo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.vox.trackInfo()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays information for current track on screen                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/vox/vox.lua line 219](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/vox/vox.lua#L219){target="_blank"} |

---


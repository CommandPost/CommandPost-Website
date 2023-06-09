# cp.time.flicks

Provides support for measuring time in `flicks`, a base unit of time useful for
working with media, such as video or audio files.

From the [Flicks GitHub project]():


A flick (frame-tick) is a very small unit of time. It is 1/705600000 of a second, exactly.

`1 flick = 1/705600000 second`

This unit of time is the smallest time unit which is LARGER than a nanosecond, and can in integer quantities exactly
represent a single frame duration for 24 Hz, 25 Hz, 30 Hz, 48 Hz, 50 Hz, 60 Hz, 90 Hz, 100 Hz, 120 Hz, and
also 1/1000 divisions of each, as well as a single sample duration for 8 kHz, 16 kHz, 22.05 kHz, 24 kHz, 32 kHz,
44.1 kHz, 48 kHz, 88.2 kHz, 96 kHz, and 192kHz, as well as the NTSC frame durations for 24 * (1000/1001) Hz,
30 * (1000/1001) Hz, 60 * (1000/1001) Hz, and 120 * (1000/1001) Hz.

That above was one hell of a run-on sentence, but it's strictly and completely correct in its description of
the unit.

This makes flicks suitable for use via std::chrono::duration and std::ratio for doing timing work against the
system high resolution clock, which is in nanoseconds, but doesn't get slightly out of sync when doing
common frame rates.

We also support some common audio sample rates as well. This list is not exhaustive, but covers the majority
of digital audio formats. They are 8kHz, 16kHz, 22.05kHz, 24kHz, 32kHz, 44.1kHz, 48kHz, 88.2kHz, 96kHz, and 192kHz.

Though it is not part of the design criteria, 144 Hz, which some newer monitors refresh at, does work
correctly with flicks.

NTSC IS NOT EXPLICITLY SUPPORTED IN ALL OF ITS SUBTLE NUANCES, BUT: The NTSC variations (~23.976, ~29.97, etc)
are approximately defined as 24 * 1000/1001 and 30 * 1000/1001, etc. These can be represented exactly in flicks,
but 1/1000 divisions are not available.

Many folks online have pointed out that NTSC technically has a variable frame rate, and that this is handled
correctly in other media playback libraries such as QuickTime. The goal of flicks is to provide a simple,
convenient std::chrono::duration to work with when writing code that works with simulation and time in media,
but not explicitly to handle complex variable-rate playback scenarios. So we'll stick with the 1000/1001
approximations, and leave it at that!

# Details

 * 24 fps frame: 29400000 flicks
 * 25 fps frame: 28224000 flicks
 * 30 fps frame: 23520000 flicks
 * 48 fps frame: 14700000 flicks
 * 50 fps frame: 14112000 flicks
 * 60 fps frame: 11760000 flicks
 * 90 fps frame: 7840000 flicks
 * 100 fps frame: 7056000 flicks
 * 120 fps frame: 5880000 flicks
 * 8000 fps frame: 88200 flicks
 * 16000 fps frame: 44100 flicks
 * 22050 fps frame: 32000 flicks
 * 24000 fps frame: 29400 flicks
 * 32000 fps frame: 22050 flicks
 * 44100 fps frame: 16000 flicks
 * 48000 fps frame: 14700 flicks
 * 88200 fps frame: 8000 flicks
 * 96000 fps frame: 7350 flicks
 * 192000 fps frame: 3675 flicks

# NTSC:

 * 24 * 1000/1001 (~23.976) fps frame: 29429400 flicks
 * 30 * 1000/1001 (~29.97) fps frame: 23543520 flicks
 * 60 * 1000/1001 (~59.94) fps frame: 11771760 flicks
 * 120 * 1000/1001 (~119.88) fps frame: 5885880 flicks

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [perFrame100](#perframe100)
 * [perFrame120](#perframe120)
 * [perFrame120NTSC](#perframe120ntsc)
 * [perFrame24](#perframe24)
 * [perFrame24NTSC](#perframe24ntsc)
 * [perFrame25](#perframe25)
 * [perFrame30](#perframe30)
 * [perFrame30NTSC](#perframe30ntsc)
 * [perFrame44100](#perframe44100)
 * [perFrame48](#perframe48)
 * [perFrame48000](#perframe48000)
 * [perFrame50](#perframe50)
 * [perFrame60](#perframe60)
 * [perFrame60NTSC](#perframe60ntsc)
 * [perFrame90](#perframe90)
 * [perHour](#perhour)
 * [perMinutes](#perminutes)
 * [perSecond](#persecond)

**Functions** - _API calls offered directly by the extension_
 * [is](#is)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)
 * [parse](#parse)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [toFrames](#toframes)
 * [toSeconds](#toseconds)
 * [toTimecode](#totimecode)


---

## API Documentation

#### Constants


### [perFrame100](#perframe100)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame100`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 frame at 100 fps.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame120](#perframe120)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame120`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 frame at 120 fps.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame120NTSC](#perframe120ntsc)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame120NTSC`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | An approximate for flicks in 1 frame at 120 fps in NTSC, a.k.a. ~119.88 fps.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame24](#perframe24)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame24`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 frame at 24 fps.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame24NTSC](#perframe24ntsc)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame24NTSC`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | An approximate for flicks in 1 frame at 24 fps in NTSC, a.k.a. 23.976 fps.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame25](#perframe25)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame25`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 frame at 25 fps.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame30](#perframe30)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame30`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 frame at 30 fps.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame30NTSC](#perframe30ntsc)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame30NTSC`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | An approximate for flicks in 1 frame at 30 fps in NTSC, a.k.a. 29.97 fps.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame44100](#perframe44100)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame44100`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 frame at 44100 fps, a.k.a. 44.1 Hz.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame48](#perframe48)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame48`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 frame at 48 fps.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame48000](#perframe48000)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame48000`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 frame at 44100 fps, a.k.a. 48 Hz.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame50](#perframe50)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame50`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 frame at 50 fps.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame60](#perframe60)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame60`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 frame at 60 fps.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame60NTSC](#perframe60ntsc)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame60NTSC`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | An approximate for flicks in 1 frame at 60 fps in NTSC, a.k.a. 59.94 fps.                                                                     |
| **Notes**                                   | - None |

---


### [perFrame90](#perframe90)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perFrame90`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 frame at 90 fps.                                                                     |
| **Notes**                                   | - None |

---


### [perHour](#perhour)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perHour`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 hour.                                                                     |
| **Notes**                                   | - None |

---


### [perMinutes](#perminutes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perMinutes`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 minute.                                                                     |
| **Notes**                                   | - None |

---


### [perSecond](#persecond)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.perSecond`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of flicks in 1 second.                                                                     |
| **Notes**                                   | - None |

---

#### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a `flicks` instance.                                                                     |
| **Parameters**                              | <ul><li>thing - the thing to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the thingis a flicks instance, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.new(value) -> flicks`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `flicks` instance. By default, the unit is in flicks`, but can be set as a different unit using the `flicks.perXXX` constants.                                                                     |
| **Parameters**                              | <ul><li>value - the base value to set to</li></ul> |
| **Returns**                                 | <ul><li>the new `flicks` instance</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li></li><li>```lua</li><li>local oneFlick = flicks.new(1)</li><li>local oneSecond = flicks.new(1flicks.perSecond)</li><li>```</li></ul> |

---


### [parse](#parse)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks.parse(timecodeString, framerate) -> flicks`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Attempts to parse the timecode string value with the specified framerate.                                                                     |
| **Parameters**                              | <ul><li>timecodeString   - The timecode as a string.</li><li>framerate        - The number of frames per second.</li></ul> |
| **Returns**                                 | <ul><li>a new `flicks` instance for the timecode.</li></ul>          |
| **Notes**                                   | <ul><li>The timecode can match the folowing patterns:</li><li></li><li>`"HH:MM:SS:FF"`</li><li>`"HH:MM:SS;FF"`</li><li>`"HHMMSSFF"`</li><li></li><li>The characters above match to `H`ours, `M`inutes `S`econds and `F`rames, respectively. For example,</li><li>a timecode of 1 hour, 23 minutes, 45 seconds and 12 frames could be expressed as:</li><li></li><li>`"01:23:45:12"`</li><li>`"01:23:45;12"`</li><li>`"01234512"`</li><li></li><li>Times with a value of zero from left to right may be omitted. After the first non-zero value, all</li><li>other numbers including framesmust always be expressed, even if they are zero.</li><li>So, if your timecode is 1 minute 30 seconds, you could use:</li><li></li><li>`"1:30:00"`</li><li>`"1:30;00"`</li><li>`"13000"`</li><li></li><li>You can also put numbers up to `99` in each block. So, another way of expressing 1 minute 30 seconds is:</li><li></li><li>`"90:00"`</li><li>`"90;00"`</li><li>`"9000"`</li></ul> |

---

#### Methods


### [toFrames](#toframes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks:toFrames(framerate) --> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Converts the flicks into a number for the specific framerate.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the number of frames</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [toSeconds](#toseconds)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks:toSeconds() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Converts the flicks into a decimal value of the number of seconds it represents.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the number of seconds</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [toTimecode](#totimecode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.time.flicks:toTimecode(framerate[, delimeter]) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Converts the flicks into a string of the format "HH[:]MM[:]SS[:;]FF", with hours, minutes and frames listed respectively.                                                                     |
| **Parameters**                              | <ul><li>framerate    - the framerate to use when calculating frames per second.</li><li>delimeter    - either `nil` (default), ":", or ";".</li></ul> |
| **Returns**                                 | <ul><li>String of the timecode.</li></ul>          |
| **Notes**                                   | <ul><li> By default, there will be no delimiter. If you provide ":" then all delimiters will be colons. If you provide ";" then the final delimiter will be a semic-colon, all others will be colons.</li></ul> |

---


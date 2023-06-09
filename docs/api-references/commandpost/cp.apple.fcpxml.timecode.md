# cp.apple.fcpxml.timecode

Functions for working with timecode in Final Cut Pro XML. Note that
a timecode does not have any concept of a frame rate, so it is
simple a structure of hours, minutes, seconds and frames.

To calculate the exact number of frames for a timecode, call the
`timecode:totalFramesWithFPS(fps)` method, where `fps` is a `number`.

To calculate the exact number of seconds for a timecode, call the
`timecode:timeWithFrameDuration(frameDuration)` method,
where `frameDuration` is the frame duration as a `time` value.

Note, this currently does not support "Drop Frame" timecodes.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [fromFFSSMMHH](#fromffssmmhh)
 * [fromHH_MM_SS_FF](#fromhh_mm_ss_ff)
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [__tostring](#__tostring)
 * [timeWithFrameDuration](#timewithframeduration)
 * [totalFramesWithFPS](#totalframeswithfps)


---

## API Documentation

#### Constructors


### [fromFFSSMMHH](#fromffssmmhh)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.timecode.fromFFSSMMHH(timecodeString) -> timecode`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Parses a timecode string in the format `FFSSMMHH` and returns a new timecode object.                                                                     |
| **Parameters**                              | <ul><li>timecodeString - The timecode string.</li></ul> |
| **Returns**                                 | <ul><li>The new timecode object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/timecode.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/timecode.lua#L61){target="_blank"} |

---


### [fromHH_MM_SS_FF](#fromhh_mm_ss_ff)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.timecode.fromHH_MM_SS_FF(timecodeString) -> timecode`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Parses a timecode string in the format `HH:MM:SS:FF` and returns a new timecode object.                                                                     |
| **Parameters**                              | <ul><li>timecodeString - The timecode string.</li></ul> |
| **Returns**                                 | <ul><li>The new timecode object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/timecode.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/timecode.lua#L47){target="_blank"} |

---


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.timecode.new(hours, minutes, seconds, frames)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new timecode object.                                                                     |
| **Parameters**                              | <ul><li>hours - The number of hours.</li><li>minutes - The number of minutes.</li><li>seconds - The number of seconds.</li><li>frames - The number of frames.</li></ul> |
| **Returns**                                 | <ul><li>The new timecode object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/timecode.lua line 25](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/timecode.lua#L25){target="_blank"} |

---

#### Methods


### [__tostring](#__tostring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.timecode:__tostring() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the timecode as a string in the format `HH:MM:SS:FF`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The timecode string.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/timecode.lua line 102](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/timecode.lua#L102){target="_blank"} |

---


### [timeWithFrameDuration](#timewithframeduration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.timecode:timeWithFrameDuration(frameDuration) -> time`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Calculates the `time` for the timecode, given the frame duration `time` value.                                                                     |
| **Parameters**                              | <ul><li>frameDuration - The frame duration as a `time` value.</li></ul> |
| **Returns**                                 | <ul><li>The `time` value.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/timecode.lua line 75](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/timecode.lua#L75){target="_blank"} |

---


### [totalFramesWithFPS](#totalframeswithfps)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.timecode:totalFramesWithFPS(fps) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Calculates the total number of frames for the timecode, given the specified frame rate.                                                                     |
| **Parameters**                              | <ul><li>fps - The frame rate as a `number`.</li></ul> |
| **Returns**                                 | <ul><li>The total number of frames as a `number`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/timecode.lua line 89](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/timecode.lua#L89){target="_blank"} |

---


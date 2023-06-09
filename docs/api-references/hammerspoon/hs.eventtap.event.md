# hs.eventtap.event

Create, modify and inspect events for `hs.eventtap`

This module is based primarily on code from the previous incarnation of Mjolnir by [Steven Degutis](https://github.com/sdegutis/).

`hs.eventtap.event.newGesture` uses an external library by Calf Trail Software, LLC.

Touch
Copyright (C) 2010 Calf Trail Software, LLC

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [properties](#properties)
 * [rawFlagMasks](#rawflagmasks)
 * [types](#types)

**Functions** - _API calls offered directly by the extension_
 * [newKeyEventSequence](#newkeyeventsequence)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [copy](#copy)
 * [newEvent](#newevent)
 * [newEventFromData](#neweventfromdata)
 * [newGesture](#newgesture)
 * [newKeyEvent](#newkeyevent)
 * [newMouseEvent](#newmouseevent)
 * [newScrollEvent](#newscrollevent)
 * [newSystemKeyEvent](#newsystemkeyevent)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [asData](#asdata)
 * [getButtonState](#getbuttonstate)
 * [getCharacters](#getcharacters)
 * [getFlags](#getflags)
 * [getKeyCode](#getkeycode)
 * [getProperty](#getproperty)
 * [getRawEventData](#getraweventdata)
 * [getTouchDetails](#gettouchdetails)
 * [getTouches](#gettouches)
 * [getType](#gettype)
 * [getUnicodeString](#getunicodestring)
 * [location](#location)
 * [post](#post)
 * [rawFlags](#rawflags)
 * [setFlags](#setflags)
 * [setKeyCode](#setkeycode)
 * [setProperty](#setproperty)
 * [setType](#settype)
 * [setUnicodeString](#setunicodestring)
 * [systemKey](#systemkey)
 * [timestamp](#timestamp)


---

## API Documentation

#### Constants


### [properties](#properties)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event.properties -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table containing property types for use with `hs.eventtap.event:getProperty()` and `hs.eventtap.event:setProperty()`.  The table supports forward (label to number) and reverse (number to label) lookups to increase its flexibility.                                                                     |
| **Notes**                                   | <ul><li>The constants defined in this table are as follows:</li><li>   (I) in the description indicates that this property is returned or set as an integer</li><li>   (N) in the description indicates that this property is returned or set as a number (floating point)</li><li> eventSourceGroupID                                      -- (I) The event source Unix effective GID.</li><li> eventSourceStateID                                      -- (I) The event source state ID used to create this event.</li><li> eventSourceUnixProcessID                                -- (I) The event source Unix process ID.</li><li> eventSourceUserData                                     -- (I) Event source user-supplied data, up to 64 bits.</li><li> eventSourceUserID                                       -- (I) The event source Unix effective UID.</li><li> eventTargetProcessSerialNumber                          -- (I) The event target process serial number. The value is a 64-bit long word.</li><li> eventTargetUnixProcessID                                -- (I) The event target Unix process ID.</li><li> eventUnacceleratedPointerMovementX                      -- Undocumented, assumed Integer</li><li> eventUnacceleratedPointerMovementY                      -- Undocumented, assumed Integer</li><li> keyboardEventAutorepeat                                 -- (I) Non-zero when this is an autorepeat of a key-down, and zero otherwise.</li><li> keyboardEventKeyboardType                               -- (I) The keyboard type identifier.</li><li> keyboardEventKeycode                                    -- (I) The virtual keycode of the key-down or key-up event.</li><li> mouseEventButtonNumber                                  -- (I) The mouse button number. For information about the possible values, see Mouse Buttons.</li><li> mouseEventClickState                                    -- (I) The mouse button click state. A click state of 1 represents a single click. A click state of 2 represents a double-click. A click state of 3 represents a triple-click.</li><li> mouseEventDeltaX                                        -- (I) The horizontal mouse delta since the last mouse movement event.</li><li> mouseEventDeltaY                                        -- (I) The vertical mouse delta since the last mouse movement event.</li><li> mouseEventInstantMouser                                 -- (I) The value is non-zero if the event should be ignored by the Inkwell subsystem.</li><li> mouseEventNumber                                        -- (I) The mouse button event number. Matching mouse-down and mouse-up events will have the same event number.</li><li> mouseEventPressure                                      -- (N) The mouse button pressure. The pressure value may range from 0 to 1, with 0 representing the mouse being up. This value is commonly set by tablet pens mimicking a mouse.</li><li> mouseEventSubtype                                       -- (I) Encoding of the mouse event subtype. 0 = mouse, 1 = tablet point, 2 = tablet proximity, 3 = touch</li><li> mouseEventWindowUnderMousePointer                       -- (I) Window ID of window underneath mouse pointer (this corresponds to `hs.window:id()`)</li><li> mouseEventWindowUnderMousePointerThatCanHandleThisEvent -- (I) Window ID of window underneath mouse pointer that can handle this event (this corresponds to `hs.window:id()`)</li><li> scrollWheelEventDeltaAxis1                              -- (I) Scrolling data. This field typically contains the change in vertical position since the last scrolling event from a Mighty Mouse scroller or a single-wheel mouse scroller.</li><li> scrollWheelEventDeltaAxis2                              -- (I) Scrolling data. This field typically contains the change in horizontal position since the last scrolling event from a Mighty Mouse scroller.</li><li> scrollWheelEventDeltaAxis3                              -- (I) This field is not used.</li><li> scrollWheelEventFixedPtDeltaAxis1                       -- (N) Contains scrolling data which represents a line-based or pixel-based change in vertical position since the last scrolling event from a Mighty Mouse scroller or a single-wheel mouse scroller.</li><li> scrollWheelEventFixedPtDeltaAxis2                       -- (N) Contains scrolling data which represents a line-based or pixel-based change in horizontal position since the last scrolling event from a Mighty Mouse scroller.</li><li> scrollWheelEventFixedPtDeltaAxis3                       -- (N) This field is not used.</li><li> scrollWheelEventInstantMouser                           -- (I) Indicates whether the event should be ignored by the Inkwell subsystem. If the value is non-zero, the event should be ignored.</li><li> scrollWheelEventIsContinuous                            -- (I) Indicates whether a scrolling event contains continuous, pixel-based scrolling data. The value is non-zero when the scrolling data is pixel-based and zero when the scrolling data is line-based (note that this is the opposite of what constants in CGEventTypes.h suggest, so test before relying on and let us know what you discover!).</li><li> scrollWheelEventMomentumPhase                           -- (I) Indicates scroll momentum phase: 0 = none, 1 = begin, 2 = continue, 3 = end</li><li> scrollWheelEventPointDeltaAxis1                         -- (I) Pixel-based scrolling data. The scrolling data represents the change in vertical position since the last scrolling event from a Mighty Mouse scroller or a single-wheel mouse scroller.</li><li> scrollWheelEventPointDeltaAxis2                         -- (I) Pixel-based scrolling data. The scrolling data represents the change in horizontal position since the last scrolling event from a Mighty Mouse scroller.</li><li> scrollWheelEventPointDeltaAxis3                         -- (I) This field is not used.</li><li> scrollWheelEventScrollCount                             -- (I) The number of scroll gestures that have begun before the momentum phase of the initial gesture has ended (unverified, this is inferred from web comments).</li><li> scrollWheelEventScrollPhase                             -- (I) Indicates scroll phase: 1 = began, 2 = changed, 4 = ended, 8 = cancelled, 128 = may begin.</li><li> tabletEventDeviceID                                     -- (I) The system-assigned unique device ID.</li><li> tabletEventPointButtons                                 -- (I) The tablet button state. Bit 0 is the first button, and a set bit represents a closed or pressed button. Up to 16 buttons are supported.</li><li> tabletEventPointPressure                                -- (N) The tablet pen pressure. A value of 0.0 represents no pressure, and 1.0 represents maximum pressure.</li><li> tabletEventPointX                                       -- (I) The absolute X coordinate in tablet space at full tablet resolution.</li><li> tabletEventPointY                                       -- (I) The absolute Y coordinate in tablet space at full tablet resolution.</li><li> tabletEventPointZ                                       -- (I) The absolute Z coordinate in tablet space at full tablet resolution.</li><li> tabletEventRotation                                     -- (N) The tablet pen rotation.</li><li> tabletEventTangentialPressure                           -- (N) The tangential pressure on the device. A value of 0.0 represents no pressure, and 1.0 represents maximum pressure.</li><li> tabletEventTiltX                                        -- (N) The horizontal tablet pen tilt. A value of 0.0 represents no tilt, and 1.0 represents maximum tilt.</li><li> tabletEventTiltY                                        -- (N) The vertical tablet pen tilt. A value of 0.0 represents no tilt, and 1.0 represents maximum tilt.</li><li> tabletEventVendor1                                      -- (I) A vendor-specified value.</li><li> tabletEventVendor2                                      -- (I) A vendor-specified value.</li><li> tabletEventVendor3                                      -- (I) A vendor-specified value.</li><li> tabletProximityEventCapabilityMask                      -- (I) The device capabilities mask.</li><li> tabletProximityEventDeviceID                            -- (I) The system-assigned device ID.</li><li> tabletProximityEventEnterProximity                      -- (I) Indicates whether the pen is in proximity to the tablet. The value is non-zero if the pen is in proximity to the tablet and zero when leaving the tablet.</li><li> tabletProximityEventPointerID                           -- (I) The vendor-defined ID of the pointing device.</li><li> tabletProximityEventPointerType                         -- (I) The pointer type.</li><li> tabletProximityEventSystemTabletID                      -- (I) The system-assigned unique tablet ID.</li><li> tabletProximityEventTabletID                            -- (I) The vendor-defined tablet ID, typically the USB product ID.</li><li> tabletProximityEventVendorID                            -- (I) The vendor-defined ID, typically the USB vendor ID.</li><li> tabletProximityEventVendorPointerSerialNumber           -- (I) The vendor-defined pointer serial number.</li><li> tabletProximityEventVendorPointerType                   -- (I) The vendor-assigned pointer type.</li><li> tabletProximityEventVendorUniqueID                      -- (I) The vendor-defined unique ID.</li></ul> |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 1398](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L1398){target="_blank"} |

---


### [rawFlagMasks](#rawflagmasks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event.rawFlagMasks[]`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table containing key-value pairs describing the raw modifier flags which can be manipulated with [hs.eventtap.event:rawFlags](#rawFlags).                                                                     |
| **Notes**                                   | <ul><li>This table and [hs.eventtap.event:rawFlags](#rawFlags) are both considered experimental as the full meanings behind some of these flags and what combinations are likely to be observed is still being determined.  It is possible that some of these key names may change in the future.</li><li>At present, what is known about the flags is presented here:</li><li> alternate                 - Corresponds to the left (or only) alt key on the keyboard</li><li> command                   - Corresponds to the left (or only) cmd key on the keyboard</li><li> control                   - Corresponds to the left (or only) ctrl key on the keyboard</li><li> shift                     - Corresponds to the left (or only) shift key on the keyboard</li><li> numericPad                - Indicates that the key corresponds to one defined as belonging to the numeric keypad, if present</li><li> secondaryFn               - Indicates the fn key found on most modern Macintosh laptops.  May also be observed with function and other special keys (arrows, page-up/down, etc.)</li><li> deviceRightAlternate      - Corresponds to the right alt key on the keyboard (if present)</li><li> deviceRightCommand        - Corresponds to the right cmd key on the keyboard (if present)</li><li> deviceRightControl        - Corresponds to the right ctrl key on the keyboard (if present)</li><li> deviceRightShift          - Corresponds to the right alt key on the keyboard (if present)</li><li> nonCoalesced              - Indicates that multiple mouse movements are not being coalesced into one event if delivery of the event has been delayed</li><li>The following are also defined in IOLLEvent.h, but the description is a guess since I have not observed them myself</li><li> alphaShift                - related to the caps-lock in some way?</li><li> alphaShiftStateless       - related to the caps-lock in some way?</li><li> deviceAlphaShiftStateless - related to the caps-lock in some way?</li><li> deviceLeftAlternate       - Corresponds to the left alt key on the keyboard (if present)</li><li> deviceLeftCommand         - Corresponds to the left cmd key on the keyboard (if present)</li><li> deviceLeftControl         - Corresponds to the left ctrl key on the keyboard (if present)</li><li> deviceLeftShift           - Corresponds to the left shift key on the keyboard (if present)</li><li> help                      - related to a modifier found on old NeXT keyboards but not on modern keyboards?</li><li>It has also been observed that synthetic events that have been posted also have the bit represented by 0x20000000 set.  This constant does not appear in IOLLEvent.h or CGEventTypes.h, which defines most of the constants used in this module, so it is not included within this table at present, but may be added in the future if any corroborating information can be found.</li><li>For what it may be worth, I have found it most useful to filter out `nonCoalesced` and 0x20000000 before examining the flags in my own code, like this: `hs.eventtap.event:rawFlags() & 0xdffffeff` where 0xdffffeff = ~(0x20000000 | 0x100) (limited to the 32 bits since that is what is returned by `rawFlags`).</li><li>Any documentation or references that can be found which can further expand on the information here is welcome -- Please submit any information you may have through the Hammerspoon GitHub site or Google group.</li></ul> |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 1531](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L1531){target="_blank"} |

---


### [types](#types)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event.types -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table containing event types to be used with `hs.eventtap.new(...)` and returned by `hs.eventtap.event:type()`.  The table supports forward (label to number) and reverse (number to label) lookups to increase its flexibility.                                                                     |
| **Notes**                                   | <ul><li>The constants defined in this table are as follows:</li><li> nullEvent         --  Specifies a null event. (thus far unobserved; please submit an issue if you can provide more information)</li><li> leftMouseDown     --  Specifies a mouse down event with the left button.</li><li> leftMouseUp       --  Specifies a mouse up event with the left button.</li><li> rightMouseDown    --  Specifies a mouse down event with the right button.</li><li> rightMouseUp      --  Specifies a mouse up event with the right button.</li><li> mouseMoved        --  Specifies a mouse moved event.</li><li> leftMouseDragged  --  Specifies a mouse drag event with the left button down.</li><li> rightMouseDragged --  Specifies a mouse drag event with the right button down.</li><li> keyDown           --  Specifies a key down event.</li><li> keyUp             --  Specifies a key up event.</li><li> flagsChanged      --  Specifies a key changed event for a modifier or status key.</li><li> scrollWheel       --  Specifies a scroll wheel moved event.</li><li> tabletPointer     --  Specifies a tablet pointer event.</li><li> tabletProximity   --  Specifies a tablet proximity event.</li><li> otherMouseDown    --  Specifies a mouse down event with one of buttons 2-31.</li><li> otherMouseUp      --  Specifies a mouse up event with one of buttons 2-31.</li><li> otherMouseDragged --  Specifies a mouse drag event with one of buttons 2-31 down.</li><li>The following events, also included in the lookup table, are provided through NSEvent and currently may require the use of `hs.eventtap.event:getRawEventData()` to retrieve supporting information.  Target specific methods may be added as the usability of these events is explored.</li><li> gesture               --  An event that represents a touch event on a touch sensitive trackpad or touchbar. See below.</li><li> systemDefined         --  An event indicating some system event has occurred. For us, it is primarily used to detect special system keys (Volume Up/Down, etc.). See [hs.eventtap.event:systemKey](#systemKey) and [hs.eventtap.event.newSystemKeyEvent](#newSystemKeyEvent).</li><li> appKitDefined         --  (thus far unobserved; please submit an issue if you can provide more information)</li><li> applicationDefined    --  (thus far unobserved; please submit an issue if you can provide more information)</li><li> cursorUpdate          --  (thus far unobserved; please submit an issue if you can provide more information)</li><li> mouseEntered          --  (thus far unobserved; please submit an issue if you can provide more information)</li><li> mouseExited           --  (thus far unobserved; please submit an issue if you can provide more information)</li><li> periodic              --  (thus far unobserved; please submit an issue if you can provide more information)</li><li> quickLook             --  (thus far unobserved; please submit an issue if you can provide more information)</li><li>To detect the following events, setup your eventtap to capture the `hs.eventtap.event.type.gesture` type and examine the value of [hs.eventtap.event:getType(true)](#getType).</li><li> gesture      --  The user touched a portion of a touchpad</li><li> directTouch  --  The user touched a portion of the touch bar.</li><li> changeMode   --  A double-tap on the side of an Apple Pencil paired with an iPad that is being used as an external monitor via Sidecar.</li><li> magnify      --  The user performed a pinch open or pinch close gesture.</li><li> pressure     --  The pressure on a forcetouch trackpad has changed..</li><li> rotate       --  The user performed a rotation gesture.</li><li> smartMagnify --  The user performed a smart zoom gesture (2-finger double tap on trackpads).</li><li> swipe        --  The user performed a swipe gesture. (thus far unobserved; please submit an issue if you can provide more information)</li></ul> |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 1301](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L1301){target="_blank"} |

---

#### Functions


### [newKeyEventSequence](#newkeyeventsequence)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event.newKeyEventSequence(modifiers, character) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a table containing the keydown and keyup events to generate the keystroke with the specified modifiers.                                                                     |
| **Parameters**                              | <ul><li>modifiers - A table containing the keyboard modifiers to apply ("cmd", "alt", "shift", "ctrl", "rightCmd", "rightAlt", "rightShift", "rightCtrl", or "fn")</li><li>character - A string containing a character to be emitted</li></ul> |
| **Returns**                                 | <ul><li>a table with events which contains the individual events that Apple recommends for building up a keystroke combination (see [hs.eventtap.event.newKeyEvent](#newKeyEvents)) in the order that they should be posted (i.e. the first half will contain keyDown events and the second half will contain keyUp events)</li></ul>          |
| **Notes**                                   | <ul><li>The `modifiers` table must contain the full name of the modifiers you wish used for the keystroke as defined in `hs.keycodes.map` -- the Unicode equivalents are not supported by this function.</li><li>The returned table will always contain an even number of events -- the first half will be the keyDown events and the second half will be the keyUp events.</li><li>The events have not been posted; the table can be used without change as the return value for a callback to a watcher defined with [hs.eventtap.new](#new).</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/eventtap.lua line 87](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/eventtap.lua#L87){target="_blank"} |

---

#### Constructors


### [copy](#copy)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:copy() -> event`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Duplicates an `hs.eventtap.event` event for further modification or injection                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A new `hs.eventtap.event` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 22](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L22){target="_blank"} |

---


### [newEvent](#newevent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event.newEvent() -> event`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a blank event.  You will need to set its type with [hs.eventtap.event:setType](#setType)                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a new `hs.eventtap.event` object</li></ul>          |
| **Notes**                                   | <ul><li>this is an empty event that you should set a type for and whatever other properties may be appropriate before posting.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 41](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L41){target="_blank"} |

---


### [newEventFromData](#neweventfromdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event.newEventFromData(data) -> event`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an event from the data encoded in the string provided.                                                                     |
| **Parameters**                              | <ul><li>data - a string containing binary data provided by [hs.eventtap.event:asData](#asData) representing an event.</li></ul> |
| **Returns**                                 | <ul><li>a new `hs.eventtap.event` object or nil if the string did not represent a valid event</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 60](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L60){target="_blank"} |

---


### [newGesture](#newgesture)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event.newGesture(gestureType[, gestureValue]) -> event`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an gesture event.                                                                     |
| **Parameters**                              | <ul><li>gestureType - the type of gesture you want to create as a string (see notes below).</li><li>[gestureValue] - an optional value for the specific gesture (i.e. magnification amount or rotation in degrees).</li></ul> |
| **Returns**                                 | <ul><li>a new `hs.eventtap.event` object or `nil` if the `gestureType` is not valid.</li></ul>          |
| **Notes**                                   | <ul><li>Valid gestureType values are:</li><li> `beginMagnify` - Starts a magnification event with an optional magnification value as a number (defaults to 0). The exact unit of measurement is unknown.</li><li> `endMagnify` - Starts a magnification event with an optional magnification value as a number (defaults to 0.1). The exact unit of measurement is unknown.</li><li> `beginRotate` - Starts a rotation event with an rotation value in degrees (i.e. a value of 45 turns it 45 degrees left - defaults to 0).</li><li> `endRotate` - Starts a rotation event with an rotation value in degrees (i.e. a value of 45 turns it 45 degrees left - defaults to 45).</li><li> `beginSwipeLeft` - Begin a swipe left.</li><li> `endSwipeLeft` - End a swipe left.</li><li> `beginSwipeRight` - Begin a swipe right.</li><li> `endSwipeRight` - End a swipe right.</li><li> `beginSwipeUp` - Begin a swipe up.</li><li> `endSwipeUp` - End a swipe up.</li><li> `beginSwipeDown` - Begin a swipe down.</li><li> `endSwipeDown` - End a swipe down.</li></ul> |
| **Examples**                                | <ul><li>  ```lua</li><li>  hs.hotkey.bind({"cmd", "alt", "ctrl"}, "1", function()</li><li>      print("Magnify slightly")</li><li>      a = require("hs.eventtap.event").newGesture("beginMagnify", 0)</li><li>      b = require("hs.eventtap.event").newGesture("endMagnify", 0.1)</li><li>      a:post()</li><li>      b:post()</li><li>  end)</li><li>  hs.hotkey.bind({"cmd", "alt", "ctrl"}, "2", function()</li><li>      print("Swipe down")</li><li>      a = require("hs.eventtap.event").newGesture("beginSwipeDown")</li><li>      b = require("hs.eventtap.event").newGesture("endSwipeDown")</li><li>      a:post()</li><li>      b:post()</li><li>  end)</li><li>  hs.hotkey.bind({"cmd", "alt", "ctrl"}, "3", function()</li><li>      print("Rotate 45 degrees left")</li><li>      a = require("hs.eventtap.event").newGesture("beginRotate", 0)</li><li>      b = require("hs.eventtap.event").newGesture("endRotate", 45)</li><li>      a:post()</li><li>      b:post()</li><li>  end)</li><li>  hs.hotkey.bind({"cmd", "alt", "ctrl"}, "4", function()</li><li>      print("Rotate 45 degrees right")</li><li>      a = require("hs.eventtap.event").newGesture("beginRotate", 0)</li><li>      b = require("hs.eventtap.event").newGesture("endRotate", -45)</li><li>      a:post()</li><li>      b:post()</li><li>  end)```</li></ul> |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 84](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L84){target="_blank"} |

---


### [newKeyEvent](#newkeyevent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event.newKeyEvent([mods], key, isdown) -> event`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a keyboard event                                                                     |
| **Parameters**                              | <ul><li>mods - An optional table containing zero or more of the following:
  cmd
  alt
  shift
  ctrl
  fn</li><li>key - A string containing the name of a key (see `hs.hotkey` for more information) or an integer specifying the virtual keycode for the key.</li><li>isdown - A boolean, true if the event should be a key-down, false if it should be a key-up</li></ul> |
| **Returns**                                 | <ul><li>An `hs.eventtap.event` object</li></ul>          |
| **Notes**                                   | <ul><li>The original version of this constructor utilized a shortcut which merged `flagsChanged` and `keyUp`/`keyDown` events into one.  This approach is still supported for backwards compatibility and because it *does* work in most cases.</li><li>According to Apple Documentation, the proper way to perform a keypress with modifiers is through multiple key events; for example to generate 'Å', you should do the following:</li><li> ~~~lua</li><li>    hs.eventtap.event.newKeyEvent(hs.keycodes.map.shift, true):post()</li><li>    hs.eventtap.event.newKeyEvent(hs.keycodes.map.alt, true):post()</li><li>    hs.eventtap.event.newKeyEvent("a", true):post()</li><li>    hs.eventtap.event.newKeyEvent("a", false):post()</li><li>    hs.eventtap.event.newKeyEvent(hs.keycodes.map.alt, false):post()</li><li>    hs.eventtap.event.newKeyEvent(hs.keycodes.map.shift, false):post()</li><li> ~~~</li><li>The shortcut method is still supported, though if you run into odd behavior or need to generate `flagsChanged` events without a corresponding `keyUp` or `keyDown`, please check out the syntax demonstrated above.</li><li> ~~~lua</li><li>    hs.eventtap.event.newKeyEvent({"shift", "alt"}, "a", true):post()</li><li>    hs.eventtap.event.newKeyEvent({"shift", "alt"}, "a", false):post()</li><li> ~~~</li><li>The shortcut approach is still limited to generating only the left version of modifiers.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 826](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L826){target="_blank"} |

---


### [newMouseEvent](#newmouseevent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event.newMouseEvent(eventtype, point[, modifiers) -> event`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new mouse event                                                                     |
| **Parameters**                              | <ul><li>eventtype - One of the mouse related values from `hs.eventtap.event.types`</li><li>point - An hs.geometry point table (i.e. of the form `{x=123, y=456}`) indicating the location where the mouse event should occur</li><li>modifiers - An optional table (e.g. {"cmd", "alt"}) containing zero or more of the following keys:
  cmd
  alt
  shift
  ctrl
  fn</li></ul> |
| **Returns**                                 | <ul><li>An `hs.eventtap` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/eventtap.lua line 113](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/eventtap.lua#L113){target="_blank"} |

---


### [newScrollEvent](#newscrollevent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event.newScrollEvent(offsets, mods, unit) -> event`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a scroll wheel event                                                                     |
| **Parameters**                              | <ul><li>offsets - A table containing the {horizontal, vertical} amount to scroll. Positive values scroll up or left, negative values scroll down or right.</li><li>mods - A table containing zero or more of the following:
  cmd
  alt
  shift
  ctrl
  fn</li><li>unit - An optional string containing the name of the unit for scrolling. Either "line" (the default) or "pixel"</li></ul> |
| **Returns**                                 | <ul><li>An `hs.eventtap.event` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 1004](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L1004){target="_blank"} |

---


### [newSystemKeyEvent](#newsystemkeyevent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event.newSystemKeyEvent(key, isdown) -> event`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a keyboard event for special keys (e.g. media playback)                                                                     |
| **Parameters**                              | <ul><li>key - A string containing the name of a special key. The possible names are:
  SOUND_UP
  SOUND_DOWN
  MUTE
  BRIGHTNESS_UP
  BRIGHTNESS_DOWN
  CONTRAST_UP
  CONTRAST_DOWN
  POWER
  LAUNCH_PANEL
  VIDMIRROR
  PLAY
  EJECT
  NEXT
  PREVIOUS
  FAST
  REWIND
  ILLUMINATION_UP
  ILLUMINATION_DOWN
  ILLUMINATION_TOGGLE
  CAPS_LOCK
  HELP
  NUM_LOCK</li><li>isdown - A boolean, true if the event should be a key-down, false if it should be a key-up</li></ul> |
| **Returns**                                 | <ul><li>An `hs.eventtap.event` object</li></ul>          |
| **Notes**                                   | <ul><li>To set modifiers on a system key event (e.g. cmd/ctrl/etc), see the `hs.eventtap.event:setFlags()` method</li><li>The event names are case sensitive</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 904](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L904){target="_blank"} |

---

#### Methods


### [asData](#asdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:asData() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a string containing binary data representing the event.  This can be used to record events for later use.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string representing the event or nil if the event cannot be represented as a string</li></ul>          |
| **Notes**                                   | <ul><li>You can recreate the event for later posting with [hs.eventtap.event.newEventFromData](#newEventFromData)</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 264](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L264){target="_blank"} |

---


### [getButtonState](#getbuttonstate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:getButtonState(button) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the state of a mouse button in the event                                                                     |
| **Parameters**                              | <ul><li>button - A number between 0 and 31. The left mouse button is 0, the right mouse button is 1 and the middle mouse button is 2. The meaning of the remaining buttons varies by hardware, and their functionality varies by application (typically they are not present on a mouse and have no effect in an application)</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the specified mouse button is to be clicked by the event</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be called on mouse events</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 767](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L767){target="_blank"} |

---


### [getCharacters](#getcharacters)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:getCharacters([clean]) -> string or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the Unicode character, if any, represented by a keyDown or keyUp event.                                                                     |
| **Parameters**                              | <ul><li>clean -- an optional parameter, default `false`, which indicates if key modifiers, other than Shift, should be stripped from the keypress before converting to Unicode.</li></ul> |
| **Returns**                                 | <ul><li>A string containing the Unicode character represented by the keyDown or keyUp event, or nil if the event is not a keyUp or keyDown.</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on keyboard events</li><li>If `clean` is true, all modifiers except for Shift are stripped from the character before converting to the Unicode character represented by the keypress.</li><li>If the keypress does not correspond to a valid Unicode character, an empty string is returned (e.g. if `clean` is false, then Opt-E will return an empty string, while Opt-Shift-E will return an accent mark).</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 511](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L511){target="_blank"} |

---


### [getFlags](#getflags)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:getFlags() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the keyboard modifiers of an event                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the keyboard modifiers that present in the event - i.e. zero or more of the following keys, each with a value of `true`:</li><li> cmd</li><li> alt</li><li> shift</li><li> ctrl</li><li> fn</li><li>The table responds to the following methods:</li><li> contain(mods) -> boolean</li><li>  Returns true if the modifiers contain all of given modifiers</li><li> containExactly(mods) -> boolean</li><li>  Returns true if the modifiers contain all of given modifiers exactly and nothing else</li><li>Parameter mods is a table containing zero or more of the following:</li><li> cmd or ⌘</li><li> alt or ⌥</li><li> shift or ⇧</li><li> ctrl or ⌃</li><li> fn</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 385](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L385){target="_blank"} |

---


### [getKeyCode](#getkeycode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:getKeyCode() -> keycode`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the raw keycode for the event                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the raw keycode, taken from `hs.keycodes.map`</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on keyboard events</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 541](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L541){target="_blank"} |

---


### [getProperty](#getproperty)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:getProperty(prop) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a property of the event                                                                     |
| **Parameters**                              | <ul><li>prop - A value taken from `hs.eventtap.event.properties`</li></ul> |
| **Returns**                                 | <ul><li>A number containing the value of the requested property</li></ul>          |
| **Notes**                                   | <ul><li>The properties are `CGEventField` values, as documented at https://developer.apple.com/library/mac/documentation/Carbon/Reference/QuartzEventServicesRef/index.html#//apple_ref/c/tdef/CGEventField</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 735](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L735){target="_blank"} |

---


### [getRawEventData](#getraweventdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:getRawEventData() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns raw data about the event                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table with two keys:</li><li>  CGEventData -- a table with keys containing CGEvent data about the event.</li><li>  NSEventData -- a table with keys containing NSEvent data about the event.</li></ul>          |
| **Notes**                                   | <ul><li>Most of the data in `CGEventData` is already available through other methods, but is presented here without any cleanup or parsing.</li><li>This method is expected to be used mostly for testing and expanding the range of possibilities available with the hs.eventtap module.  If you find that you are regularly using specific data from this method for common or re-usable purposes, consider submitting a request for adding a more targeted method to hs.eventtap or hs.eventtap.event -- it will likely be more efficient and faster for common tasks, something eventtaps need to be to minimize affecting system responsiveness.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 458](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L458){target="_blank"} |

---


### [getTouchDetails](#gettouchdetails)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:getTouchDetails() -> table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table containing more information about some touch related events.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>if the event is a touch event (i.e. is an event of type `hs.eventtap.event.types.gesture`), then this method returns a table with zero or more of the following key-value pairs:</li><li>  if the gesture is for a pressure event:</li><li>    `pressure`         - a number between 0.0 and 1.0 inclusive indicating the relative amount of pressure applied by the touch; trackpads which are not pressure sensitive will only report the discrete values of 0.0 and 1.0.</li><li>    `stage`            - an integer between 0 and 2 specifying the stage. 0 represents a touch transitioning to a state too light to be considered a touch, usually at the end of a click; 1 represents a touch with enough pressure to be considered a mouseDown event; 2 represents additional pressure, usually what would trigger a "deep" or "force" touch.</li><li>    `stageTransition`  - a number between 0.0 and 1.0. As the pressure increases and transition between stages begins, this will rise from 0.0 to 1.0; as the pressure decreases and a transition between stages begins, this will fall from 0.0 to -1.0. When the pressure is solidly within a specific stage, this will remain 0.0.</li><li>    `pressureBehavior` - a string specifying the effect or purpose of the pressure. Note that the exact meaning (in terms of haptic feedback or action being performed) of each label is target application or ui element specific. Valid values for this key are:</li><li>      "unknown", "default", "click", "generic", "accelerator", "deepClick", "deepDrag"</li><li>  if the gesture is for a magnification event:</li><li>    `magnification` - a number specifying the change in magnification that should be added to the current scaling of an item to achieve the new scale factor.</li><li>  if the gesture is for a rotation event:</li><li>    `rotation` - a number specifying in degrees the change in rotation that should be added as specified by this event. Clockwise rotation is indicated by a negative number while counter-clockwise rotation will be positive.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 1239](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L1239){target="_blank"} |

---


### [getTouches](#gettouches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:getTouches() -> table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table of details containing information about touches on the trackpad associated with this event if the event is of the type `hs.eventtap.event.types.gesture`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>if the event is of the type gesture, returns a table; otherwise returns nil.</li></ul>          |
| **Notes**                                   | <ul><li>if the event is of the type gesture, the table will contain one or more tables in an array. Each member table of the array will have the following key-value pairs:</li><li>  `device`                     - a string containing a unique identifier for the device on which the touch occurred. At present we do not have a way to match the identifier to a specific touch device, but if multiple such devices are attached to the computer, this value will differ between them.</li><li>  `deviceSize`                 - a size table containing keys `h` and `w` for the height and width of the touch device in points (72 PPI resolution).</li><li>  `force`                      - a number representing a measure of the force of the touch when the device is a forcetouch trackpad. This will be 0.0 for non-forcetouch trackpads and the touchbar.</li><li>  `identity`                   - a string specifying a unique identifier for the touch guaranteed to be unique for the life of the touch. This identifier may be used to track the movement of a specific touch (e.g. finger) as it moves through successive callbacks.</li><li>  `phase`                      - a string specifying the current phase the touch is considered to be in. The possible values are: "began", "moved", "stationary", "ended", or "cancelled".</li><li>  `resting`                    - Resting touches occur when a user simply rests their thumb on the trackpad device. Requires that the foreground window has views accepting resting touches.</li><li>  `timestamp`                  - a number representing the time the touch was detected. This number corresponds to seconds since the last system boot, not including time the computer has been asleep. Comparable to `hs.timer.absoluteTime() / 1000000000`.</li><li>  `touching`                   - a boolean specifying whether or not the touch phase is "began", "moved", or "stationary" (i.e. is *not* "ended" or "cancelled").</li><li>  `type`                       - a string specifying the type of touch. A "direct" touch will indicate a touchbar, while a trackpad will report "indirect".</li><li>The following fields will be present when the touch is from a touchpad (`type` == "indirect")`</li><li> `normalizedPosition`         - a point table specifying the `x` and `y` coordinates of the touch, each normalized to be a value between 0.0 and 1.0. `{ x = 0, y = 0 }` is the lower left corner of the touch device.</li><li> `previousNormalizedPosition` - a point table specifying the `x` and `y` coordinates of the previous position for this specific touch (as linked by `identity`) normalized to values between 0.0 and 1.0.</li><li>The following fields will be present when the touch is from the touchbar (`type` == "direct")`</li><li> `location`                   - a point table specifying the `x` and `y` coordinates of the touch location within the touchbar.</li><li> `previousLocation`           - a point table specifying the `x` and `y` coordinates of the previous location for this specific touch (as linked by `identity`) within the touchbar.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 1197](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L1197){target="_blank"} |

---


### [getType](#gettype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:getType([nsSpecificType]) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the type of the event                                                                     |
| **Parameters**                              | <ul><li>`nsSpecificType` - an optional boolean, default false, specifying whether or not a more specific Cocoa NSEvent type should be returned, if available.</li></ul> |
| **Returns**                                 | <ul><li>A number containing the type of the event, taken from `hs.eventtap.event.types`</li></ul>          |
| **Notes**                                   | <ul><li>some newer events are grouped into a more generic event for watching purposes and the specific event type is determined by examining the event through the Cocoa API. The primary example of this is for gestures on a trackpad or touches of the touchbar, as all of these are grouped under the `hs.eventtap.event.types.gesture` event. For example:</li><li>     ```lua</li><li>     myTap = hs.eventtap.new( { hs.eventtap.event.types.gesture }, function(e)</li><li>         local gestureType = e:getType(true)</li><li>         if gestureType == hs.eventtap.types.directTouch then</li><li>             -- they touched the touch bar</li><li>         elseif gestureType == hs.eventtap.types.gesture then</li><li>             -- they are touching the trackpad, but it's not for a gesture</li><li>         elseif gestureType == hs.eventtap.types.magnify then</li><li>             -- they're preforming a magnify gesture</li><li>         -- etc -- see hs.eventtap.event.types for more</li><li>         endif</li><li>     end</li><li>     ```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 694](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L694){target="_blank"} |

---


### [getUnicodeString](#getunicodestring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:getUnicodeString()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the single unicode character of an event                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the unicode character</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 580](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L580){target="_blank"} |

---


### [location](#location)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:location([pointTable]) -> event | table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the current mouse pointer location as defined for the event.                                                                     |
| **Parameters**                              | <ul><li>pointTable - an optional point table specifying the x and y coordinates of the mouse pointer location for the event</li></ul> |
| **Returns**                                 | <ul><li>if pointTable is provided, returns the `hs.eventtap.event` object; otherwise returns a point table containing x and y key-value pairs specifying the mouse pointer location as specified for this event.</li></ul>          |
| **Notes**                                   | <ul><li>the use or effect of this method is undefined if the event is not a mouse type event.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 288](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L288){target="_blank"} |

---


### [post](#post)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:post([app])`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Posts the event to the OS - i.e. emits the keyboard/mouse input defined by the event                                                                     |
| **Parameters**                              | <ul><li>app - An optional `hs.application` object. If specified, the event will only be sent to that application</li></ul> |
| **Returns**                                 | <ul><li>The `hs.eventtap.event` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 652](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L652){target="_blank"} |

---


### [rawFlags](#rawflags)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:rawFlags([flags]) -> event | integer`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Experimental method to get or set the modifier flags for an event directly.                                                                     |
| **Parameters**                              | <ul><li>flags - an optional integer, made by logically combining values from [hs.eventtap.event.rawFlagMasks](#rawFlagMasks) specifying the modifier keys which should be set for this event</li></ul> |
| **Returns**                                 | <ul><li>if flags is provided, returns the `hs.eventtap.event` object; otherwise returns the current flags set as an integer</li></ul>          |
| **Notes**                                   | <ul><li>This method is experimental and may undergo changes or even removal in the future</li><li>See [hs.eventtap.event.rawFlagMasks](#rawFlagMasks) for more information</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 359](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L359){target="_blank"} |

---


### [setFlags](#setflags)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:setFlags(table) -> event`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the keyboard modifiers of an event                                                                     |
| **Parameters**                              | <ul><li>A table containing the keyboard modifiers to be sent with the event - i.e. zero or more of the following keys, each with a value of `true`:
  cmd
  alt
  shift
  ctrl
  fn</li></ul> |
| **Returns**                                 | <ul><li>The `hs.eventap.event` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 426](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L426){target="_blank"} |

---


### [setKeyCode](#setkeycode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:setKeyCode(keycode)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the raw keycode for the event                                                                     |
| **Parameters**                              | <ul><li>keycode - A number containing a raw keycode, taken from `hs.keycodes.map`</li></ul> |
| **Returns**                                 | <ul><li>The `hs.eventtap.event` object</li></ul>          |
| **Notes**                                   | <ul><li>This method should only be used on keyboard events</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 559](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L559){target="_blank"} |

---


### [setProperty](#setproperty)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:setProperty(prop, value)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets a property of the event                                                                     |
| **Parameters**                              | <ul><li>prop - A value from `hs.eventtap.event.properties`</li><li>value - A number containing the value of the specified property</li></ul> |
| **Returns**                                 | <ul><li>The `hs.eventtap.event` object.</li></ul>          |
| **Notes**                                   | <ul><li>The properties are `CGEventField` values, as documented at https://developer.apple.com/library/mac/documentation/Carbon/Reference/QuartzEventServicesRef/index.html#//apple_ref/c/tdef/CGEventField</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 790](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L790){target="_blank"} |

---


### [setType](#settype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:setType(type) -> event`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set the type for this event.                                                                     |
| **Parameters**                              | <ul><li>type - an integer matching one of the event types described in [hs.eventtap.event.types](#types)</li></ul> |
| **Returns**                                 | <ul><li>the `hs.eventtap.event` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 341](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L341){target="_blank"} |

---


### [setUnicodeString](#setunicodestring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:setUnicodeString(string)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets a unicode string as the output of the event                                                                     |
| **Parameters**                              | <ul><li>string - A string containing unicode characters, which will be applied to the event</li></ul> |
| **Returns**                                 | <ul><li>The `hs.eventtap.event` object</li></ul>          |
| **Notes**                                   | <ul><li>Calling this method will reset any flags previously set on the event (because they don't make any sense, and you should not try to set flags again)</li><li>This is likely to only work with short unicode strings that resolve to a single character</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 609](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L609){target="_blank"} |

---


### [systemKey](#systemkey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:systemKey() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the special key and its state if the event is a NSSystemDefined event of subtype AUX_CONTROL_BUTTONS (special-key pressed)                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>If the event is a NSSystemDefined event of subtype AUX_CONTROL_BUTTONS, a table with the following keys defined:</li><li>  key    -- a string containing one of the following labels indicating the key involved:</li><li>    SOUND_UP</li><li>    SOUND_DOWN</li><li>    MUTE</li><li>    BRIGHTNESS_UP</li><li>    BRIGHTNESS_DOWN</li><li>    CONTRAST_UP</li><li>    CONTRAST_DOWN</li><li>    POWER</li><li>    LAUNCH_PANEL</li><li>    VIDMIRROR</li><li>    PLAY</li><li>    EJECT</li><li>    NEXT</li><li>    PREVIOUS</li><li>    FAST</li><li>    REWIND</li><li>    ILLUMINATION_UP</li><li>    ILLUMINATION_DOWN</li><li>    ILLUMINATION_TOGGLE</li><li>    CAPS_LOCK</li><li>    HELP</li><li>    NUM_LOCK</li><li>     or "undefined" if the key detected is unrecognized.</li><li>  keyCode -- the numeric keyCode corresponding to the key specified in `key`.</li><li>  down   -- a boolean value indicating if the key is pressed down (true) or just released (false)</li><li>  repeat -- a boolean indicating if this event is because the keydown is repeating.  This will always be false for a key release.</li><li>If the event does not correspond to a NSSystemDefined event of subtype AUX_CONTROL_BUTTONS, then an empty table is returned.</li></ul>          |
| **Notes**                                   | <ul><li>CAPS_LOCK seems to sometimes generate 0 or 2 key release events (down == false), especially on builtin laptop keyboards, so it is probably safest (more reliable) to look for cases where down == true only.</li><li>If the key field contains "undefined", you can use the number in keyCode to look it up in `/System/Library/Frameworks/IOKit.framework/Headers/hidsystem/ev_keymap.h`.  If you believe the numeric value is part of a new system update or was otherwise mistakenly left out, please submit the label (it will defined in the header file as `NX_KEYTYPE_something`) and number to the Hammerspoon maintainers at https://github.com/Hammerspoon/hammerspoon with a request for inclusion in the next Hammerspoon update.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 1103](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L1103){target="_blank"} |

---


### [timestamp](#timestamp)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.eventtap.event:timestamp([absolutetime]) -> event | integer`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the timestamp of the event.                                                                     |
| **Parameters**                              | <ul><li>absolutetime - an optional integer specifying the timestamp for the event.</li></ul> |
| **Returns**                                 | <ul><li>if absolutetime is provided, returns the `hs.eventtap.event` object; otherwise returns the current timestamp for the event.</li></ul>          |
| **Notes**                                   | <ul><li>Synthesized events have a timestamp of 0 by default.</li><li>The timestamp, if specified, is expressed as an integer representing the number of nanoseconds since the system was last booted.  See `hs.timer.absoluteTime`.</li><li>This field appears to be informational only and is not required when crafting your own events with this module.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/eventtap/libeventtap_event.m line 314](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/eventtap/libeventtap_event.m#L314){target="_blank"} |

---


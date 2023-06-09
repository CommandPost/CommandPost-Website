# hs.speech.listener

This module provides access to the Speech Recognizer component of OS X.

The speech recognizer functions and methods provide a way to add commands which may be issued to Hammerspoon through spoken words and phrases to trigger a callback.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [blocksOtherRecognizers](#blocksotherrecognizers)
 * [commands](#commands)
 * [delete](#delete)
 * [foregroundOnly](#foregroundonly)
 * [isListening](#islistening)
 * [setCallback](#setcallback)
 * [start](#start)
 * [stop](#stop)
 * [title](#title)


---

## API Documentation

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.speech.listener.new([title]) -> recognizerObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new speech recognizer object for use by Hammerspoon.                                                                     |
| **Parameters**                              | <ul><li>title - an optional parameter specifying the title under which commands assigned to this speech recognizer will be listed in the Dictation Commands display when it is visible.  Defaults to "Hammerspoon".</li></ul> |
| **Returns**                                 | <ul><li>a speech recognizer object or nil, if the system was unable to create a new recognizer.</li></ul>          |
| **Notes**                                   | <ul><li>You can change the title later with the `hs.speech.listener:title` method.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/speech/libspeech_listener.m line 62](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/speech/libspeech_listener.m#L62) |

---

#### Methods


### [blocksOtherRecognizers](#blocksotherrecognizers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.speech.listener:blocksOtherRecognizers([flag]) -> recognizerObject | current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether or not the speech recognizer should block other recognizers when it is active.                                                                     |
| **Parameters**                              | <ul><li>flag - an optional boolean indicating whether or not the speech recognizer should block other speech recognizers when it is active. Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>If no parameter is provided, returns the current value; otherwise returns the recognizer object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/speech/libspeech_listener.m line 187](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/speech/libspeech_listener.m#L187) |

---


### [commands](#commands)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.speech.listener:commands([commandsArray]) -> recognizerObject | current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the commands this speech recognizer will listen for.                                                                     |
| **Parameters**                              | <ul><li>commandsArray - an optional array of strings which specify the commands the recognizer will listen for.</li></ul> |
| **Returns**                                 | <ul><li>If no parameter is provided, returns the current value; otherwise returns the recognizer object.</li></ul>          |
| **Notes**                                   | <ul><li>The list of commands will appear in the Dictation Commands window, if it is visible, under the title of this speech recognizer.  The text of each command is a possible value which may be sent as the second argument to a callback function for this speech recognizer, if one is defined.</li><li>Setting this to an empty list does not disable the speech recognizer, but it does make it of limited use, other than to provide a title in the Dictation Commands window.  To disable the recognizer, use the `hs.speech.listener:stop` or `hs.speech.listener:delete` methods.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/speech/libspeech_listener.m line 97](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/speech/libspeech_listener.m#L97) |

---


### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.speech.listener:delete() -> recognizerObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Disables the speech recognizer and removes it from the possible available speech recognizers.                                                                     |
| **Parameters**                              | <ul><li>None.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>this disables the speech recognizer and removes it from the list in the Dictation Commands window.  The object is effectively destroyed, so you will need to create a new one with `hs.speech.listener.new` if you want to bring it back.</li><li>if this was the only speech recognizer currently available, the Dictation Commands window and feedback display will be removed from the users display.</li><li>this method is automatically called during a reload or restart of Hammerspoon.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/speech/libspeech_listener.m line 338](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/speech/libspeech_listener.m#L338) |

---


### [foregroundOnly](#foregroundonly)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.speech.listener:foregroundOnly([flag]) -> recognizerObject | current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether or not the speech recognizer is active only when the Hammerspoon application is active.                                                                     |
| **Parameters**                              | <ul><li>flag - an optional boolean indicating whether or not the speech recognizer should respond to commands only when Hammerspoon is the active application or not. Defaults to true.</li></ul> |
| **Returns**                                 | <ul><li>If no parameter is provided, returns the current value; otherwise returns the recognizer object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/speech/libspeech_listener.m line 165](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/speech/libspeech_listener.m#L165) |

---


### [isListening](#islistening)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.speech.listener:isListening() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a boolean value indicating whether or not the recognizer is currently enabled (started).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>true if the listener is listening (has been started) or false if it is not.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/speech/libspeech_listener.m line 250](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/speech/libspeech_listener.m#L250) |

---


### [setCallback](#setcallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.speech.listener:setCallback(fn) -> recognizerObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets or removes a callback function for the speech recognizer.                                                                     |
| **Parameters**                              | <ul><li>fn - a function to set as the callback for this speech synthesizer.  If the value provided is nil, any currently existing callback function is removed.  The callback function should accept two arguments and return none.  The arguments will be the speech recognizer object itself and the string of the command which was spoken.</li></ul> |
| **Returns**                                 | <ul><li>the recognizer object</li></ul>          |
| **Notes**                                   | <ul><li>Possible string values for the command spoken are set with the `hs.speech.listener:commands` method.</li><li>Removing the callback does not disable the speech recognizer, but it does make it of limited use, other than to provide a list in the Dictation Commands window.  To disable the recognizer, use the `hs.speech.listener:stop` or `hs.speech.listener:delete` methods.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/speech/libspeech_listener.m line 267](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/speech/libspeech_listener.m#L267) |

---


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.speech.listener:start() -> recognizerObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Make the speech recognizer active.                                                                     |
| **Parameters**                              | <ul><li>None.</li></ul> |
| **Returns**                                 | <ul><li>returns the recognizer object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/speech/libspeech_listener.m line 209](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/speech/libspeech_listener.m#L209) |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.speech.listener:stop() -> recognizerObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Disables the speech recognizer.                                                                     |
| **Parameters**                              | <ul><li>None.</li></ul> |
| **Returns**                                 | <ul><li>returns the recognizer object.</li></ul>          |
| **Notes**                                   | <ul><li>this only disables the speech recognizer.  To completely remove it from the list in the Dictation Commands window, use `hs.speech.listener:delete`.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/speech/libspeech_listener.m line 228](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/speech/libspeech_listener.m#L228) |

---


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.speech.listener:title([title]) -> recognizerObject | current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the title for a speech recognizer.                                                                     |
| **Parameters**                              | <ul><li>title - an optional parameter specifying the title under which commands assigned to this speech recognizer will be listed in the Dictation Commands display when it is visible.  If you provide an explicit `nil`, it will reset to the default of "Hammerspoon".</li></ul> |
| **Returns**                                 | <ul><li>If no parameter is provided, returns the current value; otherwise returns the recognizer object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/speech/libspeech_listener.m line 138](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/speech/libspeech_listener.m#L138) |

---


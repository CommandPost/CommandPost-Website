# hs.messages

Send messages via iMessage and SMS Relay (note, SMS Relay requires OS X 10.10 and an established SMS Relay pairing between your Mac and an iPhone running iOS8)

Note: This extension works by controlling the OS X "Messages" app via AppleScript, so you will need that app to be signed into an iMessage account

## API Overview
* Functions - API calls offered directly by the extension
 * [iMessage](#iMessage)
 * [SMS](#SMS)

## API Documentation

### Functions


### [iMessage](#iMessage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.messages.iMessage(targetAddress, message)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends an iMessage                                                                     |
| **Parameters**                              | <ul><li>targetAddress - A string containing a phone number or email address registered with iMessage, to send the iMessage to</li><li>message - A string containing the message to send</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [SMS](#SMS)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.messages.SMS(targetNumber, message)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends an SMS using SMS Relay                                                                     |
| **Parameters**                              | <ul><li>targetNumber - A string containing a phone number to send an SMS to</li><li>message - A string containing the message to send</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

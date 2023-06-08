# [docs](index.md) » hs.mjomatic
---

tmuxomatic-like window management

## API Overview
* Functions - API calls offered directly by the extension
 * [go](#go)

## API Documentation

### Functions

| [go](#go)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.mjomatic.go(cfg)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Applies a configuration to the currently open windows                                                                     |
| **Parameters**                              | <ul><li>cfg - A table containing a series of strings, representing the desired window layout</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>An example use:</li><li></li><li>~~~lua</li><li>mjomatic.go({</li><li>"CCCCCCCCCCCCCiiiiiiiiiii      # <-- The windowgram, it defines the shapes and positions of windows",</li><li>"CCCCCCCCCCCCCiiiiiiiiiii",</li><li>"SSSSSSSSSSSSSiiiiiiiiiii",</li><li>"SSSSSSSSSSSSSYYYYYYYYYYY",</li><li>"SSSSSSSSSSSSSYYYYYYYYYYY",</li><li>"",</li><li>"C Google Chrome            # <-- window C has application():title() 'Google Chrome'",</li><li>"i iTerm",</li><li>"Y YoruFukurou",</li><li>"S Sublime Text 2"})</li><li>~~~</li></ul>                |


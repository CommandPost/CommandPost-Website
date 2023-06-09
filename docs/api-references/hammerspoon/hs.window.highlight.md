# hs.window.highlight

Highlight the focused window

This module can be useful to spatially keep track of windows if you have large and/or multiple screens, and are
therefore likely to have several windows visible at any given time.
It highlights the currently focused window by covering other windows and the desktop with either a subtle
("overlay" mode) or opaque ("isolate" mode) overlay; additionally it can highlight windows as they're shown
or hidden via a brief flash, to help determine their location intuitively (to avoid having to studiously scan
all your screens when, for example, you know you triggered a dialog but it didn't show up where you expected it).

By default, overlay mode is disabled - you can enable it with `hs.window.highlight.ui.overlay=true` - and so are
the window shown/hidden flashes - enable those with `hs.window.highlight.ui.flashDuration=0.3` (or whatever duration
you prefer). Isolate mode is always available and can be toggled manually via `hs.window.highlight.toggleIsolate()`
or automatically by passing an appropriate windowfilter (or a list of apps) to `hs.window.highlight.start()`.

## API Overview
* Variables - Configurable values
 * [ui](#ui)
* Functions - API calls offered directly by the extension
 * [start](#start)
 * [stop](#stop)
 * [toggleIsolate](#toggleIsolate)

## API Documentation

### Variables

| [ui](#ui)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.highlight.ui`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Allows customization of the highlight overlays and behaviour.                                                                     |

### Functions

| [start](#start)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.highlight.start([windowfilterIsolate[, windowfilterOverlay]])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Starts the module                                                                     |
| **Parameters**                              | <ul><li>windowfilterIsolate - (optional) an `hs.window.filter` instance that automatically enable "isolate" mode whenever one of the allowed windows is focused; alternatively, you can just provide a list of application names and a windowfilter will be created for you that enables isolate mode whenever one of these apps is focused; if omitted or nil, isolate mode won't be toggled automatically, but you can still toggle it manually via `hs.window.highlight.toggleIsolate()`</li><li>windowfilterOverlay - (optional) an `hs.window.filter` instance that determines which windows to consider for "overlay" mode when focused; if omitted or nil, the default windowfilter will be used</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>overlay mode is disabled by default - see `hs.window.highlight.ui.overlayColor`</li></ul>                |

| [stop](#stop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.highlight.stop()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the module and disables focused window highlighting (both "overlay" and "isolate" mode)                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [toggleIsolate](#toggleIsolate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.window.highlight.toggleIsolate([v])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets or clears the user override for "isolate" mode.                                                                     |
| **Parameters**                              | <ul><li>v - (optional) a boolean; if true, enable isolate mode; if false, disable isolate mode, even when `windowfilterIsolate` passed to `.start()` would otherwise enable it; if omitted or nil, toggle the override, i.e. clear it if it's currently enforced, or set it to the opposite of the current isolate mode status otherwise.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function should be bound to a hotkey, e.g.: `hs.hotkey.bind('ctrl-cmd','\','Isolate',hs.window.highlight.toggleIsolate)`</li></ul>                |


# hs.expose

Keyboard-driven expose replacement/enhancement

Warning: this module is still somewhat experimental.
Should you encounter any issues, please feel free to report them on https://github.com/Hammerspoon/hammerspoon/issues
or #hammerspoon on irc.libera.chat

With this module you can configure a hotkey to show thumbnails for open windows when invoked; each thumbnail will have
an associated keyboard "hint" (usually one or two characters) that you can type to quickly switch focus to that
window; in conjunction with keyboard modifiers, you can additionally minimize (`alt` by default) or close
(`shift` by default) any window without having to focus it first.

When used in combination with a windowfilter you can include or exclude specific apps, window titles, screens,
window roles, etc. Additionally, each expose instance can be customized to include or exclude minimized or hidden windows,
windows residing in other Mission Control Spaces, or only windows for the current application. You can further customize
hint length, colors, fonts and sizes, whether to show window thumbnails and/or titles, and more.

To improve responsiveness, this module will update its thumbnail layout in the background (so to speak), so that it
can show the expose without delay on invocation. Be aware that on particularly heavy Hammerspoon configurations
this could adversely affect overall performance; you can disable this behaviour with
`hs.expose.ui.fitWindowsInBackground=false`

Usage:
```
-- set up your instance(s)
expose = hs.expose.new(nil,{showThumbnails=false}) -- default windowfilter, no thumbnails
expose_app = hs.expose.new(nil,{onlyActiveApplication=true}) -- show windows for the current application
expose_space = hs.expose.new(nil,{includeOtherSpaces=false}) -- only windows in the current Mission Control Space
expose_browsers = hs.expose.new{'Safari','Google Chrome'} -- specialized expose using a custom windowfilter
-- for your dozens of browser windows :)

-- then bind to a hotkey
hs.hotkey.bind('ctrl-cmd','e','Expose',function()expose:toggleShow()end)
hs.hotkey.bind('ctrl-cmd-shift','e','App Expose',function()expose_app:toggleShow()end)
```

---

## API Overview
**Variables** - _Configurable values_
 * [ui](#ui)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [hide](#hide)
 * [show](#show)
 * [toggleShow](#toggleshow)


---

## API Documentation

### Variables


### [ui](#ui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.expose.ui`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Allows customization of the expose behaviour and user interface                                                                     |

---
### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.expose.new([windowfilter[, uiPrefs][, logname, [loglevel]]]) -> hs.expose object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new hs.expose instance; it can use a windowfilter to determine which windows to show                                                                     |
| **Parameters**                              | <ul><li>windowfilter - (optional) if omitted or nil, use the default windowfilter; otherwise it must be a windowfilter instance or constructor table</li><li>uiPrefs - (optional) a table to override UI preferences for this instance; its keys and values must follow the conventions described in `hs.expose.ui`; this parameter allows you to have multiple expose instances with different behaviour (for example, with and without thumbnails and/or titles) using different hotkeys</li><li>logname - (optional) name of the `hs.logger` instance for the new expose; if omitted, the class logger will be used</li><li>loglevel - (optional) log level for the `hs.logger` instance for the new expose</li></ul> |
| **Returns**                                 | <ul><li>the new instance</li></ul>          |
| **Notes**                                   | <ul><li> by default expose will show invisible windows and (unlike the OSX expose) windows from other spaces; use</li><li>    `hs.expose.ui` or the `uiPrefs` parameter to change these behaviours.</li></ul>                |

---
### Methods


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.expose:hide()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the expose, if visible, and exits the modal mode                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>Call this function if you need to make sure the modal is exited without waiting for the user to press `esc`</li></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.expose:show([activeApplication])`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows an expose-like screen with modal keyboard hints for switching to, closing or minimizing/unminimizing windows.                                                                     |
| **Parameters**                              | <ul><li>activeApplication - (optional) if true, only show windows of the active application (within the scope of the instance windowfilter); otherwise show all windows allowed by the instance windowfilter</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>passing `true` for `activeApplication` will simply hide hints/thumbnails for applications other</li><li>   than the active one, without recalculating the hints layout; conversely, setting `onlyActiveApplication=true`</li><li>   for an expose instance's `ui` will calculate an optimal layout for the current active application's windows</li><li>Completing a hint will exit the expose and focus the selected window.</li><li>Pressing esc will exit the expose and with no action taken.</li><li>If shift is being held when a hint is completed (the background will be red), the selected</li><li>   window will be closed. If it's the last window of an application, the application will be closed.</li><li>If alt is being held when a hint is completed (the background will be blue), the selected</li><li>   window will be minimized (if visible) or unminimized/unhidden (if minimized or hidden).</li></ul>                |

---

### [toggleShow](#toggleshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.expose:toggleShow([activeApplication])`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Toggles the expose - see `hs.expose:show()` and `hs.expose:hide()`                                                                     |
| **Parameters**                              | <ul><li>activeApplication - (optional) if true, only show windows of the active application (within the scope of the instance windowfilter); otherwise show all windows allowed by the instance windowfilter</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>passing `true` for `activeApplication` will simply hide hints/thumbnails for applications other than the active one, without recalculating the hints layout; conversely, setting `onlyActiveApplication=true` for an expose instance's `ui` will calculate an optimal layout for the current active application's windows</li><li>Completing a hint will exit the expose and focus the selected window.</li><li>Pressing esc will exit the expose and with no action taken.</li><li>If shift is being held when a hint is completed (the background will be red), the selected window will be closed. If it's the last window of an application, the application will be closed.</li><li>If alt is being held when a hint is completed (the background will be blue), the selected  window will be minimized (if visible) or unminimized/unhidden (if minimized or hidden).</li></ul>                |

---

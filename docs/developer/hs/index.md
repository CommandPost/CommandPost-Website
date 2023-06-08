# https://github.com/Hammerspoon/hammerspoon/blob/master/
---

## Project Links
| Resource        | Link                             |
| --------------- | -------------------------------- |
| Website | [https://www.hammerspoon.org/](https://www.hammerspoon.org/) |
| GitHub page | [https://github.com/Hammerspoon/hammerspoon](https://github.com/Hammerspoon/hammerspoon) |
| Getting Started Guide | [https://www.hammerspoon.org/go/](https://www.hammerspoon.org/go/) |
| Spoon Plugin Documentation | [https://github.com/Hammerspoon/hammerspoon/blob/master/SPOONS.md](https://github.com/Hammerspoon/hammerspoon/blob/master/SPOONS.md) |
| Official Spoon repository | [https://www.hammerspoon.org/Spoons](https://www.hammerspoon.org/Spoons) |
| IRC channel | [irc://irc.libera.chat/#hammerspoon](irc://irc.libera.chat/#hammerspoon) |
| Mailing list | [https://groups.google.com/forum/#!forum/hammerspoon/](https://groups.google.com/forum/#!forum/hammerspoon/) |
| LuaSkin API docs | [https://www.hammerspoon.org/docs/LuaSkin/](https://www.hammerspoon.org/docs/LuaSkin/) |

## API Documentation
| Module                                                             | Description           |
| ------------------------------------------------------------------ | --------------------- |
| [hs](hs.md)                          | Core Hammerspoon functionality     |
| [hs.alert](hs.alert.md)                          | Simple on-screen alerts     |
| [hs.appfinder](hs.appfinder.md)                          | Easily find `hs.application` and `hs.window` objects     |
| [hs.applescript](hs.applescript.md)                          | Execute AppleScript code     |
| [hs.application](hs.application.md)                          | Manipulate running applications     |
| [hs.application.watcher](hs.application.watcher.md)                          | Watch for application launch/terminate events     |
| [hs.audiodevice](hs.audiodevice.md)                          | Manipulate the system's audio devices     |
| [hs.audiodevice.datasource](hs.audiodevice.datasource.md)                          | Inspect/manipulate the data sources of an audio device     |
| [hs.audiodevice.watcher](hs.audiodevice.watcher.md)                          | Watch for system level audio hardware events     |
| [hs.axuielement](hs.axuielement.md)                          | This module allows you to access the accessibility objects of running applications, their windows, menus, and other user interface elements that support the OS X accessibility API.     |
| [hs.axuielement.axtextmarker](hs.axuielement.axtextmarker.md)                          | This submodule allows hs.axuielement to support using AXTextMarker and AXTextMarkerRange objects as parameters for parameterized Accessibility attributes with applications that support them.     |
| [hs.axuielement.observer](hs.axuielement.observer.md)                          | This submodule allows you to create observers for accessibility elements and be notified when they trigger notifications. Not all notifications are supported by all elements and not all elements support notifications, so some trial and error will be necessary, but for compliant applications, this can allow your code to be notified when an application's user interface changes in some way.     |
| [hs.base64](hs.base64.md)                          | Base64 encoding and decoding     |
| [hs.battery](hs.battery.md)                          | Battery/power information     |
| [hs.battery.watcher](hs.battery.watcher.md)                          | Watch for battery/power state changes     |
| [hs.blackmagic](hs.blackmagic.md)                          | Support for the Blackmagic DaVinci Resolve Speed Editor Keyboard and Editor Keyboard.     |
| [hs.bonjour](hs.bonjour.md)                          | Find and publish network services advertised by multicast DNS (Bonjour) with Hammerspoon.     |
| [hs.bonjour.service](hs.bonjour.service.md)                          | Represents the service records that are discovered or published by the hs.bonjour module.     |
| [hs.brightness](hs.brightness.md)                          | Inspect/manipulate display brightness     |
| [hs.caffeinate](hs.caffeinate.md)                          | Control system power states (sleeping, preventing sleep, screen locking, etc)     |
| [hs.caffeinate.watcher](hs.caffeinate.watcher.md)                          | Watch for display and system sleep/wake/power events     |
| [hs.camera](hs.camera.md)                          | Inspect the system's camera devices     |
| [hs.canvas](hs.canvas.md)                          | A different approach to drawing in Hammerspoon     |
| [hs.canvas.matrix](hs.canvas.matrix.md)                          | A sub module to `hs.canvas` which provides support for basic matrix manipulations which can be used as the values for `transformation` attributes in the `hs.canvas` module.     |
| [hs.chooser](hs.chooser.md)                          | Graphical, interactive tool for choosing/searching data     |
| [hs.console](hs.console.md)                          | Some functions for manipulating the Hammerspoon console.     |
| [hs.crash](hs.crash.md)                          | Various features/facilities for developers who are working on Hammerspoon itself, or writing extensions for it. It is extremely unlikely that you should need any part of this extension, in a normal user configuration.     |
| [hs.deezer](hs.deezer.md)                          | Controls for Deezer music player.     |
| [hs.dialog](hs.dialog.md)                          | A collection of useful dialog boxes, alerts and panels for user interaction.     |
| [hs.dialog.color](hs.dialog.color.md)                          | A panel that allows users to select a color.     |
| [hs.distributednotifications](hs.distributednotifications.md)                          | Interact with NSDistributedNotificationCenter     |
| [hs.doc](hs.doc.md)                          | Create documentation objects for interactive help within Hammerspoon     |
| [hs.doc.builder](hs.doc.builder.md)                          | Builds documentation support files.  Still experimental.     |
| [hs.doc.hsdocs](hs.doc.hsdocs.md)                          | Manage the internal documentation web server.     |
| [hs.doc.markdown](hs.doc.markdown.md)                          | Markdown to HTML and plaintext conversion support used by hs.doc     |
| [hs.dockicon](hs.dockicon.md)                          | Control Hammerspoon's dock icon     |
| [hs.drawing](hs.drawing.md)                          | DEPRECATED. Primitives for drawing on the screen in various ways.     |
| [hs.drawing.color](hs.drawing.color.md)                          | Provides access to the system color lists and a wider variety of ways to represent color within Hammerspoon.     |
| [hs.eventtap](hs.eventtap.md)                          | Tap into input events (mouse, keyboard, trackpad) for observation and possibly overriding them     |
| [hs.eventtap.event](hs.eventtap.event.md)                          | Create, modify and inspect events for `hs.eventtap`     |
| [hs.expose](hs.expose.md)                          | Keyboard-driven expose replacement/enhancement     |
| [hs.fnutils](hs.fnutils.md)                          | Functional programming utility functions     |
| [hs.fs](hs.fs.md)                          | Access/inspect the filesystem     |
| [hs.fs.volume](hs.fs.volume.md)                          | Interact with OS X filesystem volumes     |
| [hs.fs.xattr](hs.fs.xattr.md)                          | Get and manipulate extended attributes for files and directories     |
| [hs.geometry](hs.geometry.md)                          | Utility object to represent points, sizes and rects in a bidimensional plane     |
| [hs.grid](hs.grid.md)                          | Move/resize windows within a grid     |
| [hs.hash](hs.hash.md)                          | Various hashing algorithms     |
| [hs.hid](hs.hid.md)                          | HID interface for Hammerspoon, controls and queries caps lock state     |
| [hs.hid.led](hs.hid.led.md)                          | HID LED interface for Hammerspoon, controls the state of keyboard LEDs     |
| [hs.hints](hs.hints.md)                          | Switch focus with a transient per-application keyboard shortcut     |
| [hs.host](hs.host.md)                          | Inspect information about the machine Hammerspoon is running on     |
| [hs.host.locale](hs.host.locale.md)                          | Retrieve information about the user's Language and Region settings.     |
| [hs.hotkey](hs.hotkey.md)                          | Create and manage global keyboard shortcuts     |
| [hs.hotkey.modal](hs.hotkey.modal.md)                          | Create/manage modal keyboard shortcut environments     |
| [hs.http](hs.http.md)                          | Perform HTTP requests     |
| [hs.httpserver](hs.httpserver.md)                          | Simple HTTP server     |
| [hs.httpserver.hsminweb](hs.httpserver.hsminweb.md)                          | Minimalist Web Server for Hammerspoon     |
| [hs.httpserver.hsminweb.cgilua](hs.httpserver.hsminweb.cgilua.md)                          | Provides support functions in the `cgilua` module for Hammerspoon Minimal Web Server Lua templates.     |
| [hs.httpserver.hsminweb.cgilua.lp](hs.httpserver.hsminweb.cgilua.lp.md)                          | Support functions for the CGILua compatibility module for including and translating Lua template pages into Lua code for execution within the Hammerspoon environment to provide dynamic content for http requests.     |
| [hs.httpserver.hsminweb.cgilua.urlcode](hs.httpserver.hsminweb.cgilua.urlcode.md)                          | Support functions for the CGILua compatibility module for encoding and decoding URL components in accordance with RFC 3986.     |
| [hs.image](hs.image.md)                          | A module for capturing and manipulating image objects from other modules for use with hs.drawing.     |
| [hs.inspect](hs.inspect.md)                          | Produce human-readable representations of Lua variables (particularly tables)     |
| [hs.ipc](hs.ipc.md)                          | Provides Hammerspoon with the ability to create both local and remote message ports for inter-process communication.     |
| [hs.itunes](hs.itunes.md)                          | Controls for iTunes music player     |
| [hs.javascript](hs.javascript.md)                          | Execute JavaScript code     |
| [hs.json](hs.json.md)                          | JSON encoding and decoding     |
| [hs.keycodes](hs.keycodes.md)                          | Convert between key-strings and key-codes. Also provides functionality for querying and changing keyboard layouts.     |
| [hs.layout](hs.layout.md)                          | Window layout manager     |
| [hs.location](hs.location.md)                          | Determine the machine's location and useful information about that location     |
| [hs.location.geocoder](hs.location.geocoder.md)                          | Converts between GPS coordinates and more user friendly representations like an address or points of interest.     |
| [hs.logger](hs.logger.md)                          | Simple logger for debugging purposes     |
| [hs.math](hs.math.md)                          | Various helpful mathematical functions     |
| [hs.menubar](hs.menubar.md)                          | Create and manage menubar icons     |
| [hs.messages](hs.messages.md)                          | Send messages via iMessage and SMS Relay (note, SMS Relay requires OS X 10.10 and an established SMS Relay pairing between your Mac and an iPhone running iOS8)     |
| [hs.midi](hs.midi.md)                          | MIDI Extension for Hammerspoon.     |
| [hs.milight](hs.milight.md)                          | Simple controls for the MiLight LED WiFi bridge (also known as LimitlessLED and EasyBulb)     |
| [hs.mjomatic](hs.mjomatic.md)                          | tmuxomatic-like window management     |
| [hs.mouse](hs.mouse.md)                          | Inspect/manipulate the position of the mouse pointer     |
| [hs.network](hs.network.md)                          | This module provides functions for inquiring about and monitoring changes to the network.     |
| [hs.network.configuration](hs.network.configuration.md)                          | This sub-module provides access to the current location set configuration settings in the system's dynamic store.     |
| [hs.network.host](hs.network.host.md)                          | This sub-module provides functions for acquiring host information, such as hostnames, addresses, and reachability.     |
| [hs.network.ping](hs.network.ping.md)                          | This module provides a basic ping function which can test host availability. Ping is a network diagnostic tool commonly found in most operating systems which can be used to test if a route to a specified host exists and if that host is responding to network traffic.     |
| [hs.network.ping.echoRequest](hs.network.ping.echoRequest.md)                          | Provides lower-level access to the ICMP Echo Request infrastructure used by the hs.network.ping module. In general, you should not need to use this module directly unless you have specific requirements not met by the hs.network.ping module and the `hs.network.ping` object methods.     |
| [hs.network.reachability](hs.network.reachability.md)                          | This sub-module can be used to determine the reachability of a target host. A remote host is considered reachable when a data packet, sent by an application into the network stack, can leave the local device. Reachability does not guarantee that the data packet will actually be received by the host.     |
| [hs.noises](hs.noises.md)                          | Contains two low latency audio recognizers for different mouth noises, which can be used to trigger actions like scrolling or clicking.     |
| [hs.notify](hs.notify.md)                          | This module allows you to create on screen notifications in the User Notification Center located at the right of the users screen.     |
| [hs.osascript](hs.osascript.md)                          | Execute Open Scripting Architecture (OSA) code - AppleScript and JavaScript     |
| [hs.osc](hs.osc.md)                          | Open Sound Control (OSC) support.     |
| [hs.pasteboard](hs.pasteboard.md)                          | Inspect/manipulate pasteboards (more commonly called clipboards). Both the system default pasteboard and custom named pasteboards can be interacted with.     |
| [hs.pasteboard.watcher](hs.pasteboard.watcher.md)                          | Watch for Pasteboard Changes.     |
| [hs.pathwatcher](hs.pathwatcher.md)                          | Watch paths recursively for changes     |
| [hs.plist](hs.plist.md)                          | Read and write Property List files     |
| [hs.razer](hs.razer.md)                          | Razer device support.     |
| [hs.redshift](hs.redshift.md)                          | Inverts and/or lowers the color temperature of the screen(s) on a schedule, for a more pleasant experience at night     |
| [hs.screen](hs.screen.md)                          | Manipulate screens (i.e. monitors)     |
| [hs.screen.watcher](hs.screen.watcher.md)                          | Watch for screen layout changes     |
| [hs.serial](hs.serial.md)                          | Communicate with external devices through a serial port (most commonly RS-232).     |
| [hs.settings](hs.settings.md)                          | Serialize simple Lua variables across Hammerspoon launches     |
| [hs.sharing](hs.sharing.md)                          | Share items with the macOS Sharing Services under the control of Hammerspoon.     |
| [hs.shortcuts](hs.shortcuts.md)                          | List and run shortcuts from the Shortcuts app     |
| [hs.socket](hs.socket.md)                          | Talk to custom protocols using asynchronous TCP sockets.     |
| [hs.socket.udp](hs.socket.udp.md)                          | Talk to custom protocols using asynchronous UDP sockets.     |
| [hs.sound](hs.sound.md)                          | Load/play/manipulate sound files     |
| [hs.spaces](hs.spaces.md)                          | This module provides some basic functions for controlling macOS Spaces.     |
| [hs.spaces.watcher](hs.spaces.watcher.md)                          | Watches for the current Space being changed     |
| [hs.speech](hs.speech.md)                          | This module provides access to the Speech Synthesizer component of OS X.     |
| [hs.speech.listener](hs.speech.listener.md)                          | This module provides access to the Speech Recognizer component of OS X.     |
| [hs.spoons](hs.spoons.md)                          | Utility and management functions for Spoons     |
| [hs.spotify](hs.spotify.md)                          | Controls for Spotify music player     |
| [hs.spotlight](hs.spotlight.md)                          | This module allows Hammerspoon to preform Spotlight metadata queries.     |
| [hs.spotlight.group](hs.spotlight.group.md)                          | This sub-module is used to access results to a spotlightObject query which have been grouped by one or more attribute values.     |
| [hs.spotlight.item](hs.spotlight.item.md)                          | This sub-module is used to access the individual results of a spotlightObject or a spotlightGroupObject.     |
| [hs.sqlite3](hs.sqlite3.md)                          | Interact with SQLite databases     |
| [hs.streamdeck](hs.streamdeck.md)                          | Configure/control an Elgato Stream Deck.     |
| [hs.styledtext](hs.styledtext.md)                          | This module adds support for controlling the style of the text in Hammerspoon.     |
| [hs.tabs](hs.tabs.md)                          | Place the windows of an application into tabs drawn on its titlebar     |
| [hs.tangent](hs.tangent.md)                          | Tangent Control Surface Extension     |
| [hs.task](hs.task.md)                          | Execute processes in the background and capture their output     |
| [hs.timer](hs.timer.md)                          | Execute functions with various timing rules     |
| [hs.timer.delayed](hs.timer.delayed.md)                          | Specialized timer objects to coalesce processing of unpredictable asynchronous events into a single callback     |
| [hs.uielement](hs.uielement.md)                          | A generalized framework for working with OSX UI elements     |
| [hs.uielement.watcher](hs.uielement.watcher.md)                          | Watch for events on certain UI elements (including windows and applications)     |
| [hs.urlevent](hs.urlevent.md)                          | Allows CommandPost to respond to URLs     |
| [hs.usb](hs.usb.md)                          | Inspect USB devices     |
| [hs.usb.watcher](hs.usb.watcher.md)                          | Watch for USB device connection/disconnection events     |
| [hs.utf8](hs.utf8.md)                          | Functions providing basic support for UTF-8 encodings     |
| [hs.vox](hs.vox.md)                          | Controls for VOX music player     |
| [hs.watchable](hs.watchable.md)                          | A minimalistic Key-Value-Observer framework for Lua.     |
| [hs.websocket](hs.websocket.md)                          | Simple websocket client.     |
| [hs.webview](hs.webview.md)                          | Display web content in a window from Hammerspoon     |
| [hs.webview.datastore](hs.webview.datastore.md)                          | Provides methods to list and purge the various types of data used by websites visited with `hs.webview`.     |
| [hs.webview.toolbar](hs.webview.toolbar.md)                          | Create and manipulate toolbars which can be attached to the Hammerspoon console or hs.webview objects.     |
| [hs.webview.usercontent](hs.webview.usercontent.md)                          | This module provides support for injecting custom JavaScript user content into your webviews and for JavaScript to post messages back to Hammerspoon.     |
| [hs.wifi](hs.wifi.md)                          | Inspect WiFi networks     |
| [hs.wifi.watcher](hs.wifi.watcher.md)                          | Watch for changes to the associated wifi network     |
| [hs.window](hs.window.md)                          | Inspect/manipulate windows     |
| [hs.window.filter](hs.window.filter.md)                          | Filter windows by application, title, location on screen and more, and easily subscribe to events on these windows     |
| [hs.window.highlight](hs.window.highlight.md)                          | Highlight the focused window     |
| [hs.window.layout](hs.window.layout.md)                          | **WARNING**: EXPERIMENTAL MODULE. DO **NOT** USE IN PRODUCTION.     |
| [hs.window.switcher](hs.window.switcher.md)                          | Window-based cmd-tab replacement     |
| [hs.window.tiling](hs.window.tiling.md)                          | **WARNING**: EXPERIMENTAL MODULE. DO **NOT** USE IN PRODUCTION.     |

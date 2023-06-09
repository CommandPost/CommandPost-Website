# cp.apple.finalcutpro

Represents the Final Cut Pro application, providing functions that allow different tasks to be accomplished.

Generally, you will `require` the `cp.apple.finalcutpro` module to import it, like so:

```lua
local fcp = require "cp.apple.finalcutpro"
```

Then, there are the `UpperCase` files, which represent the application itself:

 * `MenuBar` 	            - The main menu bar.
 * `prefs/PreferencesWindow` - The preferences window.
 * etc...

The `fcp` variable is the root application. It has functions which allow you to perform tasks or access parts of the UI. For example, to open the `Preferences` window, you can do this:

```lua
fcp.preferencesWindow:show()
```

In general, as long as Final Cut Pro is running, actions can be performed directly, and the API will perform the required operations to achieve it. For example, to toggle the 'Create Optimized Media' checkbox in the 'Import' section of the 'Preferences' window, you can simply do this:

```lua
fcp.preferencesWindow.importPanel:toggleCreateOptimizedMedia()
```

The API will automatically open the `Preferences` window, navigate to the 'Import' panel and toggle the checkbox.

The `UpperCase` classes also have a variety of `UI` methods. These will return the `axuielement` for the relevant GUI element, if it is accessible. If not, it will return `nil`. These allow direct interaction with the GUI if necessary. It's most useful when adding new functions to `UpperCase` files for a particular element.

This can also be used to 'wait' for an element to be visible before performing a task. For example, if you need to wait for the `Preferences` window to finish loading before doing something else, you can do this with the [just](cp.just.md) library:

```lua
local just = require "cp.just"

local prefsWindow = fcp.preferencesWindow

local prefsUI = just.doUntil(function() return prefsWindow:UI() end)

if prefsUI then
	-- it's open!
else
	-- it's closed!
end
```

By using the `just` library, we can do a loop waiting until the function returns a result that will give up after a certain time period (10 seconds by default).

Of course, we have a specific support function for that already, so you could do this instead:

```lua
if fcp.preferencesWindow:isShowing() then
	-- it's open!
else
	-- it's closed!
end
```

 **Delegates to:** [app](cp.apple.finalcutpro.app.md), [menu](cp.app.menu.md)

Notes: All values/methods/props from delegates can be accessed directly from the `cp.apple.finalcutpro` instance. For example:

```lua
fcp.app:UI() == fcp:UI() -- the same `cp.prop` result.
```

---

## Submodules
 * [cp.apple.finalcutpro.app](cp.apple.finalcutpro.app.md)
 * [cp.apple.finalcutpro.browser](cp.apple.finalcutpro.browser.md)
 * [cp.apple.finalcutpro.cmd](cp.apple.finalcutpro.cmd.md)
 * [cp.apple.finalcutpro.content](cp.apple.finalcutpro.content.md)
 * [cp.apple.finalcutpro.export](cp.apple.finalcutpro.export.md)
 * [cp.apple.finalcutpro.import](cp.apple.finalcutpro.import.md)
 * [cp.apple.finalcutpro.inspector](cp.apple.finalcutpro.inspector.md)
 * [cp.apple.finalcutpro.main](cp.apple.finalcutpro.main.md)
 * [cp.apple.finalcutpro.menu](cp.apple.finalcutpro.menu.md)
 * [cp.apple.finalcutpro.plugins](cp.apple.finalcutpro.plugins.md)
 * [cp.apple.finalcutpro.prefs](cp.apple.finalcutpro.prefs.md)
 * [cp.apple.finalcutpro.strings](cp.apple.finalcutpro.strings.md)
 * [cp.apple.finalcutpro.timeline](cp.apple.finalcutpro.timeline.md)
 * [cp.apple.finalcutpro.viewer](cp.apple.finalcutpro.viewer.md)
 * [cp.apple.finalcutpro.workflowextensions](cp.apple.finalcutpro.workflowextensions.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [ALLOWED_IMPORT_AUDIO_EXTENSIONS](#allowed_import_audio_extensions)
 * [ALLOWED_IMPORT_EXTENSIONS](#allowed_import_extensions)
 * [ALLOWED_IMPORT_IMAGE_EXTENSIONS](#allowed_import_image_extensions)
 * [ALLOWED_IMPORT_VIDEO_EXTENSIONS](#allowed_import_video_extensions)
 * [EARLIEST_SUPPORTED_VERSION](#earliest_supported_version)
 * [EVENT_DESCRIPTION_PATH](#event_description_path)
 * [FLEXO_LANGUAGES](#flexo_languages)
 * [PASTEBOARD_UTI](#pasteboard_uti)
 * [preferences](#preferences)
 * [WORKSPACES_PATH](#workspaces_path)

**Variables** - _Configurable values_
 * [activeCommandSet](#activecommandset)
 * [customWorkspaces](#customworkspaces)
 * [openAndSavePanelDefaultPath](#openandsavepaneldefaultpath)
 * [selectedWorkspace](#selectedworkspace)

**Functions** - _API calls offered directly by the extension_
 * [commandSet](#commandset)
 * [matches](#matches)
 * [matches](#matches)
 * [userCommandSetPath](#usercommandsetpath)
 * [workflowExtensionNames](#workflowextensionnames)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Color](#color)
 * [TranscodeMedia](#transcodemedia)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [activeCommandSetPath](#activecommandsetpath)
 * [alert](#alert)
 * [audioEnhancements](#audioenhancements)
 * [audioLanes](#audiolanes)
 * [audioMeters](#audiometers)
 * [backgroundTasksDialog](#backgroundtasksdialog)
 * [browser](#browser)
 * [changePosition](#changeposition)
 * [color](#color)
 * [colorBoard](#colorboard)
 * [colorCorrection](#colorcorrection)
 * [commandDescriptions](#commanddescriptions)
 * [commandEditor](#commandeditor)
 * [commandNames](#commandnames)
 * [commandPostWorkflowExtension](#commandpostworkflowextension)
 * [contentUI](#contentui)
 * [contentUI](#contentui)
 * [deselectAll](#deselectall)
 * [effects](#effects)
 * [effects](#effects)
 * [eventViewer](#eventviewer)
 * [exportDialog](#exportdialog)
 * [findAndReplaceTitleText](#findandreplacetitletext)
 * [fullScreenPlayer](#fullscreenplayer)
 * [generators](#generators)
 * [inspector](#inspector)
 * [inspectorUnits](#inspectorunits)
 * [isAudioScrubbingEnabled](#isaudioscrubbingenabled)
 * [isFrontmost](#isfrontmost)
 * [isInstalled](#isinstalled)
 * [isModalDialogOpen](#ismodaldialogopen)
 * [isPlaying](#isplaying)
 * [isPlaying](#isplaying)
 * [isRunning](#isrunning)
 * [isShowing](#isshowing)
 * [isSkimmingEnabled](#isskimmingenabled)
 * [isSupported](#issupported)
 * [isUnsupported](#isunsupported)
 * [keywordEditor](#keywordeditor)
 * [libraries](#libraries)
 * [media](#media)
 * [mediaImport](#mediaimport)
 * [pan](#pan)
 * [playButton](#playbutton)
 * [playFullScreen](#playfullscreen)
 * [playImage](#playimage)
 * [preferencesWindow](#preferenceswindow)
 * [preset](#preset)
 * [primaryWindow](#primarywindow)
 * [resetDialogWarnings](#resetdialogwarnings)
 * [secondaryWindow](#secondarywindow)
 * [textArea](#textarea)
 * [textLayerLeft](#textlayerleft)
 * [textLayerRight](#textlayerright)
 * [timecodeField](#timecodefield)
 * [timeDisplay](#timedisplay)
 * [timeline](#timeline)
 * [toolbar](#toolbar)
 * [transcodeMedia](#transcodemedia)
 * [transitions](#transitions)
 * [UI](#ui)
 * [validateAudioUnits](#validateaudiounits)
 * [viewer](#viewer)
 * [volume](#volume)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [activeLibraryPaths](#activelibrarypaths)
 * [closeLibrary](#closelibrary)
 * [defaultCommandSetPath](#defaultcommandsetpath)
 * [doShortcut](#doshortcut)
 * [getCommandShortcuts](#getcommandshortcuts)
 * [getPath](#getpath)
 * [importXML](#importxml)
 * [keysWithString](#keyswithstring)
 * [openLibrary](#openlibrary)
 * [plugins](#plugins)
 * [recentLibraryNames](#recentlibrarynames)
 * [recentLibraryPaths](#recentlibrarypaths)
 * [scanPlugins](#scanplugins)
 * [selectLibrary](#selectlibrary)
 * [string](#string)
 * [userCommandSets](#usercommandsets)


---

## API Documentation

#### Constants


### [ALLOWED_IMPORT_AUDIO_EXTENSIONS](#allowed_import_audio_extensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.ALLOWED_IMPORT_AUDIO_EXTENSIONS -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of audio file extensions Final Cut Pro can import.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 236](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L236){target="_blank"} |

---


### [ALLOWED_IMPORT_EXTENSIONS](#allowed_import_extensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.ALLOWED_IMPORT_EXTENSIONS -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of all file extensions Final Cut Pro can import.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 246](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L246){target="_blank"} |

---


### [ALLOWED_IMPORT_IMAGE_EXTENSIONS](#allowed_import_image_extensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.ALLOWED_IMPORT_IMAGE_EXTENSIONS -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of image file extensions Final Cut Pro can import.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 241](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L241){target="_blank"} |

---


### [ALLOWED_IMPORT_VIDEO_EXTENSIONS](#allowed_import_video_extensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.ALLOWED_IMPORT_VIDEO_EXTENSIONS -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of video file extensions Final Cut Pro can import.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 231](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L231){target="_blank"} |

---


### [EARLIEST_SUPPORTED_VERSION](#earliest_supported_version)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.EARLIEST_SUPPORTED_VERSION -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The earliest version of Final Cut Pro supported by this module.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 206](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L206){target="_blank"} |

---


### [EVENT_DESCRIPTION_PATH](#event_description_path)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.EVENT_DESCRIPTION_PATH -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The Event Description Path.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 221](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L221){target="_blank"} |

---


### [FLEXO_LANGUAGES](#flexo_languages)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.FLEXO_LANGUAGES -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of Final Cut Pro's supported Languages for the Flexo Framework                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 226](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L226){target="_blank"} |

---


### [PASTEBOARD_UTI](#pasteboard_uti)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.PASTEBOARD_UTI -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Final Cut Pro's Pasteboard UTI                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 211](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L211){target="_blank"} |

---


### [preferences](#preferences)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.preferences <cp.app.prefs>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The `cp.app.prefs` for Final Cut Pro.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 161](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L161){target="_blank"} |

---


### [WORKSPACES_PATH](#workspaces_path)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.WORKSPACES_PATH -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The path to the custom workspaces folder.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 216](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L216){target="_blank"} |

---

#### Variables


### [activeCommandSet](#activecommandset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.activeCommandSet <cp.prop: table; live>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Contins the 'Active Command Set' as a `table`. The result is cached, but                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 1058](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L1058){target="_blank"} |

---


### [customWorkspaces](#customworkspaces)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:customWorkspaces <cp.prop: table; live>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table containing the display names of all the user created custom workspaces.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 616](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L616){target="_blank"} |

---


### [openAndSavePanelDefaultPath](#openandsavepaneldefaultpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:openAndSavePanelDefaultPath <cp.prop: string>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A string containing the default open/save panel path.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 943](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L943){target="_blank"} |

---


### [selectedWorkspace](#selectedworkspace)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.selectedWorkspace <cp.prop: string; live>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The currently selected workspace name. The result is cached, but updated                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 584](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L584){target="_blank"} |

---

#### Functions


### [commandSet](#commandset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.commandSet(path) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the Command Set at the specified path as a table.                                                                     |
| **Parameters**                              | <ul><li>`path`	- The path to the Command Set.</li></ul> |
| **Returns**                                 | <ul><li>The Command Set as a table, or `nil` if there was a problem.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 1040](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L1040){target="_blank"} |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.CommandEditor.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L30){target="_blank"} |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.TranscodeMedia.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is an `TranscodeMedia` instance.                                                                     |
| **Parameters**                              | <ul><li>element       - The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches the pattern for a `Viewer` `TranscodeMedia`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/TranscodeMedia.lua line 21](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/TranscodeMedia.lua#L21){target="_blank"} |

---


### [userCommandSetPath](#usercommandsetpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.userCommandSetPath() -> string or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the path where User Command Set files are stored.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A path as a string or `nil` if the folder doesn't exist.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 984](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L984){target="_blank"} |

---


### [workflowExtensionNames](#workflowextensionnames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.workflowExtensionNames() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the names of all the installed Workflow Extensions.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of Workflow Extension names</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 645](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L645){target="_blank"} |

---

#### Constructors


### [Color](#color)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Color(app) -> Color`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Color` instance.                                                                     |
| **Parameters**                              | <ul><li>app - The Final Cut Pro app instance.</li></ul> |
| **Returns**                                 | <ul><li>The new `Color`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/blackmagic/resolve/color/Tracker.lua line 34](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/blackmagic/resolve/color/Tracker.lua#L34){target="_blank"} |

---


### [TranscodeMedia](#transcodemedia)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.TranscodeMedia(viewer)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `TranscodeMedia` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>The new `TranscodeMedia`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/TranscodeMedia.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/TranscodeMedia.lua#L42){target="_blank"} |

---

#### Fields


### [activeCommandSetPath](#activecommandsetpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.activeCommandSetPath <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the 'Active Command Set' value from the Final Cut Pro preferences                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 1033](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L1033){target="_blank"} |

---


### [alert](#alert)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.alert <cp.ui.Alert>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Provides basic access to any 'alert' dialog windows in the app.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 907](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L907){target="_blank"} |

---


### [audioEnhancements](#audioenhancements)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.VideoInspector.audioEnhancements <cp.prop: PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Audio Enhancements                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioInspector.lua line 139](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioInspector.lua#L139){target="_blank"} |

---


### [audioLanes](#audiolanes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.audioLanes <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if audio lanes are currently showing. May be set to ensure it is showing or hidden.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/IndexRoles.lua line 103](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/IndexRoles.lua#L103){target="_blank"} |

---


### [audioMeters](#audiometers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.audioMeters <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Audio Meters button.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua#L93){target="_blank"} |

---


### [backgroundTasksDialog](#backgroundtasksdialog)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.backgroundTasksDialog <cp.apple.finalcutpro.main.BackgroundTasksDialog>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [BackgroundTasksDialog](cp.apple.finalcutpro.main.BackgroundTasksDialog.md) dialog window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 790](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L790){target="_blank"} |

---


### [browser](#browser)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.browser <cp.apple.finalcutpro.main.Browser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Browser](cp.apple.finalcutpro.main.Browser.md) instance, whether it is in the primary or secondary window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 844](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L844){target="_blank"} |

---


### [changePosition](#changeposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.changePosition <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Change Position Button.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua line 236](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua#L236){target="_blank"} |

---


### [color](#color)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.color <ColorInspector>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The ColorInspector instance from the primary window                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 900](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L900){target="_blank"} |

---


### [colorBoard](#colorboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.colorBoard <ColorBoard>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The ColorBoard instance from the primary window                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 893](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L893){target="_blank"} |

---


### [colorCorrection](#colorcorrection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.presfs.GeneralPanel.colorCorrection <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Color Correction" `PopUpButton`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua line 116](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua#L116){target="_blank"} |

---


### [commandDescriptions](#commanddescriptions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.commandDescriptions <cp.strings>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `table` of all available command descriptions, with keys mapped to human-readable descriptions in the current locale.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 1135](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L1135){target="_blank"} |

---


### [commandEditor](#commandeditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.commandEditor <CommandEditor>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Final Cut Pro Command Editor                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 755](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L755){target="_blank"} |

---


### [commandNames](#commandnames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.commandNames <cp.strings>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `table` of all available command names, with keys mapped to human-readable names in the current locale.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 1114](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L1114){target="_blank"} |

---


### [commandPostWorkflowExtension](#commandpostworkflowextension)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.commandPostWorkflowExtension <CommandPostWindow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The CommandPost Workflow Extension window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 714](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L714){target="_blank"} |

---


### [contentUI](#contentui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.TextInspector.contentUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` containing the properties rows, if available.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/text/TextInspector.lua line 438](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/text/TextInspector.lua#L438){target="_blank"} |

---


### [contentUI](#contentui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ShareInspector.contentUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` containing the properties rows, if available.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/share/ShareInspector.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/share/ShareInspector.lua#L105){target="_blank"} |

---


### [deselectAll](#deselectall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.TextInspector.deselectAll <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The left text layer arrow at the bottom of the Inspector.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/text/TextInspector.lua line 473](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/text/TextInspector.lua#L473){target="_blank"} |

---


### [effects](#effects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.effects <cp.apple.finalcutpro.main.EffectsBrowser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The EffectsBrowser instance, whether it is in the primary or secondary window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 872](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L872){target="_blank"} |

---


### [effects](#effects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.VideoInspector.effects <cp.prop: PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Effects                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioInspector.lua line 153](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioInspector.lua#L153){target="_blank"} |

---


### [eventViewer](#eventviewer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.eventViewer <cp.apple.finalcutpro.viewer.Viewer>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Event [Viewer](cp.apple.finalcutpro.viewer.Viewer.md) instance, whether it is in the primary or secondary window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 837](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L837){target="_blank"} |

---


### [exportDialog](#exportdialog)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.exportDialog <cp.apple.finalcutpro.main.ExportDialog>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Final Cut Pro Export Dialog Box                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 776](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L776){target="_blank"} |

---


### [findAndReplaceTitleText](#findandreplacetitletext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.findAndReplaceTitleText <cp.apple.finalcutpro.main.FindAndReplaceTitleText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [FindAndReplaceTitleText](cp.apple.finalcutpro.main.FindAndReplaceTitleText.md) dialog window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 783](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L783){target="_blank"} |

---


### [fullScreenPlayer](#fullscreenplayer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.fullScreenPlayer <FullScreenPlayer>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the Final Cut Pro Full Screen Window (usually triggered by Cmd+Shift+F)                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 748](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L748){target="_blank"} |

---


### [generators](#generators)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.generators <cp.apple.finalcutpro.main.GeneratorsBrowser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The GeneratorsBrowser instance, whether it is in the primary or secondary window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 865](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L865){target="_blank"} |

---


### [inspector](#inspector)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector <cp.apple.finalcutpro.inspector.Inspector>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Inspector](cp.apple.finalcutpro.inspector.Inspector.md) instance from the primary window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 886](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L886){target="_blank"} |

---


### [inspectorUnits](#inspectorunits)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.presfs.GeneralPanel.inspectorUnits <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Inspector Units" `PopUpButton`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua line 125](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua#L125){target="_blank"} |

---


### [isAudioScrubbingEnabled](#isaudioscrubbingenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.isAudioScrubbingEnabled <bool; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if the audio scrubbing is enabled for the application.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 1163](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L1163){target="_blank"} |

---


### [isFrontmost](#isfrontmost)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:isFrontmost <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is Final Cut Pro Frontmost?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 288](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L288){target="_blank"} |

---


### [isInstalled](#isinstalled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.isInstalled <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is any version of Final Cut Pro Installed?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 281](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L281){target="_blank"} |

---


### [isModalDialogOpen](#ismodaldialogopen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:isModalDialogOpen <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is a modal dialog currently open?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 295](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L295){target="_blank"} |

---


### [isPlaying](#isplaying)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.ControlBar.isPlaying <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The 'playing' status of the viewer. If true, it is playing, if not it is paused.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua line 254](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua#L254){target="_blank"} |

---


### [isPlaying](#isplaying)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Viewer.isPlaying <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The 'playing' status of the viewer. If true, it is playing, if not it is paused.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/viewer/Viewer.lua line 336](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/viewer/Viewer.lua#L336){target="_blank"} |

---


### [isRunning](#isrunning)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.isRunning <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is Final Cut Pro Running?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 263](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L263){target="_blank"} |

---


### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.isShowing <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is Final Cut visible on screen?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 274](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L274){target="_blank"} |

---


### [isSkimmingEnabled](#isskimmingenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.isSkimmingEnabled <bool; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns `true` if the skimming playhead is enabled for the application.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 1156](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L1156){target="_blank"} |

---


### [isSupported](#issupported)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.isSupported <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is a supported version of Final Cut Pro installed?                                                                     |
| **Notes**                                   | <ul><li>Supported version refers to any version of Final Cut Pro equal or higher to `cp.apple.finalcutpro.EARLIEST_SUPPORTED_VERSION`</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 302](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L302){target="_blank"} |

---


### [isUnsupported](#isunsupported)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.isUnsupported <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is an unsupported version of Final Cut Pro installed?                                                                     |
| **Notes**                                   | <ul><li>Supported version refers to any version of Final Cut Pro equal or higher to cp.apple.finalcutpro.EARLIEST_SUPPORTED_VERSION</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 315](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L315){target="_blank"} |

---


### [keywordEditor](#keywordeditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.keywordEditor <KeywordEditor>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Final Cut Pro Keyword Editor                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 762](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L762){target="_blank"} |

---


### [libraries](#libraries)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.libraries <cp.apple.finalcutpro.main.LibrariesBrowser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [LibrariesBrowser](cp.apple.finalcutpro.main.LibrariesBrowser.md) instance, whether it is in the primary or secondary window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 851](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L851){target="_blank"} |

---


### [media](#media)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.media <cp.apple.finalcutpro.main.MediaBrowser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The MediaBrowser instance, whether it is in the primary or secondary window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 858](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L858){target="_blank"} |

---


### [mediaImport](#mediaimport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.mediaImport <MediaImport>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Final Cut Pro Media Import Window                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 769](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L769){target="_blank"} |

---


### [pan](#pan)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.VideoInspector.pan <cp.prop: PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Pan                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioInspector.lua line 146](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioInspector.lua#L146){target="_blank"} |

---


### [playButton](#playbutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.playButton <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Play Button.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua line 245](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua#L245){target="_blank"} |

---


### [playFullScreen](#playfullscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.playFullScreen <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Play Full Screen Button.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua line 84](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua#L84){target="_blank"} |

---


### [playImage](#playimage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.playImage <cp.ui.Image>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Play Image.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua line 279](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua#L279){target="_blank"} |

---


### [preferencesWindow](#preferenceswindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.preferencesWindow <PreferencesWindow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Final Cut Pro Preferences Window                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 727](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L727){target="_blank"} |

---


### [preset](#preset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.TextInspector.preset <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The preset popup found at the top of the inspector.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/text/TextInspector.lua line 483](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/text/TextInspector.lua#L483){target="_blank"} |

---


### [primaryWindow](#primarywindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.primaryWindow <cp.apple.finalcutpro.main.PrimaryWindow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Final Cut Pro Primary Window                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 734](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L734){target="_blank"} |

---


### [resetDialogWarnings](#resetdialogwarnings)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.presfs.GeneralPanel.resetDialogWarnings <cp.ui.Buton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Reset Dialog warnings" `Button`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua line 98](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua#L98){target="_blank"} |

---


### [secondaryWindow](#secondarywindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.secondaryWindow <cp.apple.finalcutpro.main.SecondaryWindow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Final Cut Pro Preferences Window                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 741](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L741){target="_blank"} |

---


### [textArea](#textarea)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.TextInspector.textArea <cp.ui.TextArea>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Text Inspector main Text Area.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/text/TextInspector.lua line 493](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/text/TextInspector.lua#L493){target="_blank"} |

---


### [textLayerLeft](#textlayerleft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.TextInspector.textLayerLeft <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The left text layer arrow at the bottom of the Inspector.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/text/TextInspector.lua line 451](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/text/TextInspector.lua#L451){target="_blank"} |

---


### [textLayerRight](#textlayerright)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.TextInspector.textLayerRight <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The left text layer arrow at the bottom of the Inspector.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/text/TextInspector.lua line 462](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/text/TextInspector.lua#L462){target="_blank"} |

---


### [timecodeField](#timecodefield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer.timecodeField <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Timecode Field                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua line 102](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/viewer/ControlBar.lua#L102){target="_blank"} |

---


### [timeDisplay](#timedisplay)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.presfs.GeneralPanel.timeDisplay <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Time Display" `PopUpButton`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua line 89](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua#L89){target="_blank"} |

---


### [timeline](#timeline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline <Timeline>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Timeline instance, whether it is in the primary or secondary window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 823](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L823){target="_blank"} |

---


### [toolbar](#toolbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.toolbar <cp.apple.finalcutpro.main.PrimaryToolbar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Primary Toolbar - the toolbar at the top of the Primary Window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 816](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L816){target="_blank"} |

---


### [transcodeMedia](#transcodemedia)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.transcodeMedia <cp.apple.finalcutpro.main.TranscodeMedia>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [TranscodeMedia](cp.apple.finalcutpro.main.TranscodeMedia.md) sheet.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 803](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L803){target="_blank"} |

---


### [transitions](#transitions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.transitions <cp.apple.finalcutpro.main.EffectsBrowser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Transitions `EffectsBrowser` instance, whether it is in the primary or secondary window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 879](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L879){target="_blank"} |

---


### [UI](#ui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.UI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Final Cut Pro `axuielement`, if available.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 270](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L270){target="_blank"} |

---


### [validateAudioUnits](#validateaudiounits)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.presfs.GeneralPanel.validateAudioUnits <cp.ui.Buton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Validate Audio Units" `Button`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua line 107](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/GeneralPanel.lua#L107){target="_blank"} |

---


### [viewer](#viewer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.viewer <cp.apple.finalcutpro.viewer.Viewer>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Viewer](cp.apple.finalcutpro.viewer.Viewer.md) instance, whether it is in the primary or secondary window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 830](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L830){target="_blank"} |

---


### [volume](#volume)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.VideoInspector.volume <cp.prop: PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Volume                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioInspector.lua line 132](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioInspector.lua#L132){target="_blank"} |

---

#### Methods


### [activeLibraryPaths](#activelibrarypaths)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:activeLibraryPaths() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a table of all the active library paths.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing any active library paths.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 400](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L400){target="_blank"} |

---


### [closeLibrary](#closelibrary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:closeLibrary(title) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to close a library with the specified `title`.                                                                     |
| **Parameters**                              | <ul><li>title	- The title of the FCP Library to close.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, or `false` if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 505](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L505){target="_blank"} |

---


### [defaultCommandSetPath](#defaultcommandsetpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:defaultCommandSetPath([locale]) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the path to the 'Default' Command Set.                                                                     |
| **Parameters**                              | <ul><li>`locale`	- The optional locale to use. Defaults to the [current locale](#currentLocale).</li></ul> |
| **Returns**                                 | <ul><li>The 'Default' Command Set path, or `nil` if an error occurred</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 1019](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L1019){target="_blank"} |

---


### [doShortcut](#doshortcut)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:doShortcut(whichShortcut[, suppressPrompt]) -> Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Perform a Final Cut Pro Keyboard Shortcut                                                                     |
| **Parameters**                              | <ul><li>whichShortcut - As per the Command Set name</li><li>suppressPrompt - If `true`, and no shortcut is found for the specified command, then no prompt will be shown and an error is thrown Defaults to `false`.</li></ul> |
| **Returns**                                 | <ul><li>A `Statement` that will perform the shortcut when executed.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 1173](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L1173){target="_blank"} |

---


### [getCommandShortcuts](#getcommandshortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.getCommandShortcuts(id) -> table of hs.commands.shortcut`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds a shortcut from the Active Command Set with the specified ID and returns a table of `hs.commands.shortcut`s for the specified command, or `nil` if it doesn't exist.                                                                     |
| **Parameters**                              | <ul><li>id - The unique ID for the command.</li></ul> |
| **Returns**                                 | <ul><li>The array of shortcuts, or `nil` if no command exists with the specified `id`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 1088](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L1088){target="_blank"} |

---


### [getPath](#getpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:getPath() -> string or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Path to Final Cut Pro Application                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing Final Cut Pro's filesystem path, or nil if Final Cut Pro's path could not be determined.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 357](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L357){target="_blank"} |

---


### [importXML](#importxml)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:importXML(path) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Imports an XML file into Final Cut Pro                                                                     |
| **Parameters**                              | <ul><li>path = Path to XML File</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether the AppleScript succeeded or not</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 920](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L920){target="_blank"} |

---


### [keysWithString](#keyswithstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:keysWithString(string[, locale]) -> {string}`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Looks up an application string and returns an array of keys that match. It will take into account current locale the app is running in, or use `locale` if provided.                                                                     |
| **Parameters**                              | <ul><li>`key`	- The key to look up.</li><li>`locale`	- The locale (defaults to current FCPX locale).</li></ul> |
| **Returns**                                 | <ul><li>The array of keys with a matching string.</li></ul>          |
| **Notes**                                   | <ul><li>This method may be very inefficient, since it has to search through every possible key/value pair to find matches. It is not recommended that this is used in production.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 340](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L340){target="_blank"} |

---


### [openLibrary](#openlibrary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:openLibrary(path) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to open a file at the specified absolute `path`.                                                                     |
| **Parameters**                              | <ul><li>path	- The path to the FCP Library to open.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, or `false` if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 467](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L467){target="_blank"} |

---


### [plugins](#plugins)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:plugins() -> cp.apple.finalcutpro.plugins`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the plugins manager for the app.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The plugins manager.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 552](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L552){target="_blank"} |

---


### [recentLibraryNames](#recentlibrarynames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:recentLibraryNames() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a table of all the recent library names (that are accessible).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing any recent library names.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 446](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L446){target="_blank"} |

---


### [recentLibraryPaths](#recentlibrarypaths)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:recentLibraryPaths() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a table of all the recent library paths (that are accessible).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing any recent library paths.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 421](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L421){target="_blank"} |

---


### [scanPlugins](#scanplugins)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:scanPlugins() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scan Final Cut Pro Plugins                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A MenuBar object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 565](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L565){target="_blank"} |

---


### [selectLibrary](#selectlibrary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:selectLibrary(title) -> axuielement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to select an open library with the specified title.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the library to select.</li></ul> |
| **Returns**                                 | <ul><li>The library row `axuielement`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 492](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L492){target="_blank"} |

---


### [string](#string)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:string(key[, locale[, quiet]]) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Looks up an application string with the specified `key`. If no `locale` value is provided, the [current locale](#currentLocale) is used.                                                                     |
| **Parameters**                              | <ul><li>`key`	- The key to look up.</li><li>`locale`	- The locale code to use. Defaults to the current locale.</li><li>`quiet`	- Optional boolean, defaults to `false`. If `true`, no warnings are logged for missing keys.</li></ul> |
| **Returns**                                 | <ul><li>The requested string or `nil` if the application is not running.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 325](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L325){target="_blank"} |

---


### [userCommandSets](#usercommandsets)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro:userCommandSets() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the names of all of the user command sets.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of user command sets as strings.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/init.lua line 997](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/init.lua#L997){target="_blank"} |

---


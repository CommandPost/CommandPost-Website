# CommandPost

## API Documentation
| Module                                                             | Description           |
| ------------------------------------------------------------------ | --------------------- |
| [cp](cp.md)                          | Core CommandPost functionality.     |
| [cp.18n](cp.18n.md)                          | CommandPost's Internationalisation & Localisation Manger.     |
| [cp.adobe.aftereffects](cp.adobe.aftereffects.md)                          | Adobe After Effects Extension     |
| [cp.adobe.aftereffects.app](cp.adobe.aftereffects.app.md)                          | The `cp.app` for Adobe After Effects.     |
| [cp.adobe.aftereffects.shortcuts](cp.adobe.aftereffects.shortcuts.md)                          | Translations between After Effects shortcuts and Hammerspoon-friendly shortcuts.     |
| [cp.app](cp.app.md)                          | This class assists with working with macOS apps. It provides functions for     |
| [cp.app.menu](cp.app.menu.md)                          | Represents an app's menu bar, providing multi-lingual access to find and     |
| [cp.app.prefs](cp.app.prefs.md)                          | Provides access to application preferences, typically stored via `NSUserDefaults` or `CFProperties`.     |
| [cp.apple.commandeditor](cp.apple.commandeditor.md)                          | Functions to control and manage Apple's Command Editor - used in Final Cut Pro,     |
| [cp.apple.compressor](cp.apple.compressor.md)                          | Represents the Compressor application, providing functions that allow different tasks to be accomplished.     |
| [cp.apple.compressor.app](cp.apple.compressor.app.md)                          | The `cp.app` for Apple's Compressor.     |
| [cp.apple.fcpxml](cp.apple.fcpxml.md)                          | A collection of tools for handling FCPXML Documents.     |
| [cp.apple.fcpxml.time](cp.apple.fcpxml.time.md)                          | Allows you to convert time string values found in a FCPXML document into Lua objects,     |
| [cp.apple.fcpxml.timecode](cp.apple.fcpxml.timecode.md)                          | Functions for working with timecode in Final Cut Pro XML. Note that     |
| [cp.apple.finalcutpro](cp.apple.finalcutpro.md)                          | Represents the Final Cut Pro application, providing functions that allow different tasks to be accomplished.     |
| [cp.apple.finalcutpro.app](cp.apple.finalcutpro.app.md)                          | The [cp.app](cp.app.md) for Final Cut Pro. Will automatically determine     |
| [cp.apple.finalcutpro.browser.AppearanceAndFiltering](cp.apple.finalcutpro.browser.AppearanceAndFiltering.md)                          | Clip Appearance & Filtering Menu Popover     |
| [cp.apple.finalcutpro.browser.Columns](cp.apple.finalcutpro.browser.Columns.md)                          | Final Cut Pro Browser List View Columns     |
| [cp.apple.finalcutpro.cmd.CommandDetail](cp.apple.finalcutpro.cmd.CommandDetail.md)                          | This class provides a UI for displaying the details of a command when it is selected on the `CommandList`.     |
| [cp.apple.finalcutpro.cmd.CommandEditor](cp.apple.finalcutpro.cmd.CommandEditor.md)                          | Command Editor Module.     |
| [cp.apple.finalcutpro.cmd.CommandGroups](cp.apple.finalcutpro.cmd.CommandGroups.md)                          | Represents the list of Command Groups in the [CommandList](cp.apple.finalcutpro.cmd.CommandList.md).     |
| [cp.apple.finalcutpro.cmd.CommandList](cp.apple.finalcutpro.cmd.CommandList.md)                          | A list of commands available in the [CommandEditor](cp.apple.finalcutpro.cmd.CommandEditor.md).     |
| [cp.apple.finalcutpro.cmd.Commands](cp.apple.finalcutpro.cmd.Commands.md)                          | The list of available commands (depending on search and/or [CommandGroup](cp.apple.finalcutpro.cmd.CommandGroups.md])     |
| [cp.apple.finalcutpro.cmd.Commands.Header](cp.apple.finalcutpro.cmd.Commands.Header.md)                          | The header of the Commands.     |
| [cp.apple.finalcutpro.cmd.Commands.Row](cp.apple.finalcutpro.cmd.Commands.Row.md)                          | Commands Row.     |
| [cp.apple.finalcutpro.cmd.KeyDetail](cp.apple.finalcutpro.cmd.KeyDetail.md)                          | This class provides a UI for displaying the details of a key when it is selected on the keyboard layout.     |
| [cp.apple.finalcutpro.content.Clip](cp.apple.finalcutpro.content.Clip.md)                          | Represents a clip of media inside FCP.     |
| [cp.apple.finalcutpro.export.destinations](cp.apple.finalcutpro.export.destinations.md)                          | Provides access to the list of Share Destinations configured for the user.     |
| [cp.apple.finalcutpro.export.ExportDialog](cp.apple.finalcutpro.export.ExportDialog.md)                          | Export Dialog Module.     |
| [cp.apple.finalcutpro.export.GoToPrompt](cp.apple.finalcutpro.export.GoToPrompt.md)                          | Go To Prompt.     |
| [cp.apple.finalcutpro.export.ReplaceAlert](cp.apple.finalcutpro.export.ReplaceAlert.md)                          | Replace Alert     |
| [cp.apple.finalcutpro.export.SaveSheet](cp.apple.finalcutpro.export.SaveSheet.md)                          | Save Sheet     |
| [cp.apple.finalcutpro.import.MediaImport](cp.apple.finalcutpro.import.MediaImport.md)                          | Media Import     |
| [cp.apple.finalcutpro.inspector.audio.AudioComponent](cp.apple.finalcutpro.inspector.audio.AudioComponent.md)                          | The Audio Configuration section of the Audio Inspector.     |
| [cp.apple.finalcutpro.inspector.audio.AudioConfiguration](cp.apple.finalcutpro.inspector.audio.AudioConfiguration.md)                          | The Audio Configuration section of the Audio Inspector.     |
| [cp.apple.finalcutpro.inspector.audio.AudioInspector](cp.apple.finalcutpro.inspector.audio.AudioInspector.md)                          | Audio Inspector Module.     |
| [cp.apple.finalcutpro.inspector.audio.MainProperties](cp.apple.finalcutpro.inspector.audio.MainProperties.md)                          | The MainProperties UI for the [AudioInspector](cp.apple.finalcutpro.inspector.audio.AudioInspector.md).     |
| [cp.apple.finalcutpro.inspector.audio.TopProperties](cp.apple.finalcutpro.inspector.audio.TopProperties.md)                          | The `TopProperties` class is used to represent the top properties group of the Audio Inspector.     |
| [cp.apple.finalcutpro.inspector.BaseMotionPanel](cp.apple.finalcutpro.inspector.BaseMotionPanel.md)                          | A base class for [Inspector](cp.apple.finalcutpro.inspector.Inspector.md) panels     |
| [cp.apple.finalcutpro.inspector.BasePanel](cp.apple.finalcutpro.inspector.BasePanel.md)                          | A base class for the different panels in the [Inspector](cp.apple.finalcutpro.inspector.Inspector.md).     |
| [cp.apple.finalcutpro.inspector.color.ColorAdjustments](cp.apple.finalcutpro.inspector.color.ColorAdjustments.md)                          | Color Adjustments Module.     |
| [cp.apple.finalcutpro.inspector.color.ColorBoard](cp.apple.finalcutpro.inspector.color.ColorBoard.md)                          | Color Board Module.     |
| [cp.apple.finalcutpro.inspector.color.ColorBoardAspect](cp.apple.finalcutpro.inspector.color.ColorBoardAspect.md)                          | Represents a particular aspect of the color board (Color/Saturation/Exposure).     |
| [cp.apple.finalcutpro.inspector.color.ColorCurve](cp.apple.finalcutpro.inspector.color.ColorCurve.md)                          | A ColorCurve [Element](cp.ui.Element.md).     |
| [cp.apple.finalcutpro.inspector.color.ColorCurves](cp.apple.finalcutpro.inspector.color.ColorCurves.md)                          | Color Curves Module.     |
| [cp.apple.finalcutpro.inspector.color.ColorInspector](cp.apple.finalcutpro.inspector.color.ColorInspector.md)                          | Color Inspector Module.     |
| [cp.apple.finalcutpro.inspector.color.ColorPuck](cp.apple.finalcutpro.inspector.color.ColorPuck.md)                          | Color ColorPuck Module.     |
| [cp.apple.finalcutpro.inspector.color.ColorWell](cp.apple.finalcutpro.inspector.color.ColorWell.md)                          | Represents a single Color Well in the Color Wheels Inspector.     |
| [cp.apple.finalcutpro.inspector.color.ColorWheel](cp.apple.finalcutpro.inspector.color.ColorWheel.md)                          | Represents a single Color Well in the Color Wheels Inspector.     |
| [cp.apple.finalcutpro.inspector.color.ColorWheels](cp.apple.finalcutpro.inspector.color.ColorWheels.md)                          | Color Wheels Module.     |
| [cp.apple.finalcutpro.inspector.color.CorrectionsBar](cp.apple.finalcutpro.inspector.color.CorrectionsBar.md)                          | The Correction selection/management bar at the top of the ColorInspector.     |
| [cp.apple.finalcutpro.inspector.color.HueSaturationCurve](cp.apple.finalcutpro.inspector.color.HueSaturationCurve.md)                          | A HueSaturationCurve [Element](cp.ui.Element.md).     |
| [cp.apple.finalcutpro.inspector.color.HueSaturationCurves](cp.apple.finalcutpro.inspector.color.HueSaturationCurves.md)                          | Color Curves Module.     |
| [cp.apple.finalcutpro.inspector.color.ValueIndicator](cp.apple.finalcutpro.inspector.color.ValueIndicator.md)                          | ValueIndicator Module.     |
| [cp.apple.finalcutpro.inspector.generator.GeneratorInspector](cp.apple.finalcutpro.inspector.generator.GeneratorInspector.md)                          | Generator Inspector Module. This appears for both Generators and Titles.     |
| [cp.apple.finalcutpro.inspector.info.InfoInspector](cp.apple.finalcutpro.inspector.info.InfoInspector.md)                          | Video Inspector Module.     |
| [cp.apple.finalcutpro.inspector.info.InfoProjectInspector](cp.apple.finalcutpro.inspector.info.InfoProjectInspector.md)                          | Info Inspector Module when a Project is selected.     |
| [cp.apple.finalcutpro.inspector.Inspector](cp.apple.finalcutpro.inspector.Inspector.md)                          | Inspector     |
| [cp.apple.finalcutpro.inspector.InspectorProperty](cp.apple.finalcutpro.inspector.InspectorProperty.md)                          | `InspectorProperty` contains helper functions for handling common property     |
| [cp.apple.finalcutpro.inspector.share.ShareInspector](cp.apple.finalcutpro.inspector.share.ShareInspector.md)                          | Share Inspector Module.     |
| [cp.apple.finalcutpro.inspector.text.TextInspector](cp.apple.finalcutpro.inspector.text.TextInspector.md)                          | Text Inspector Module.     |
| [cp.apple.finalcutpro.inspector.title.TitleInspector](cp.apple.finalcutpro.inspector.title.TitleInspector.md)                          | Title Inspector Module.     |
| [cp.apple.finalcutpro.inspector.transition.TransitionInspector](cp.apple.finalcutpro.inspector.transition.TransitionInspector.md)                          | Transition Inspector Module.     |
| [cp.apple.finalcutpro.inspector.video.VideoInspector](cp.apple.finalcutpro.inspector.video.VideoInspector.md)                          | Video Inspector Module.     |
| [cp.apple.finalcutpro.main.BackgroundTasksDialog](cp.apple.finalcutpro.main.BackgroundTasksDialog.md)                          | Represents the Background Tasks warning dialog.     |
| [cp.apple.finalcutpro.main.Browser](cp.apple.finalcutpro.main.Browser.md)                          | Browser Module.     |
| [cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover](cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.md)                          | Browser Marker Popup.     |
| [cp.apple.finalcutpro.main.EffectsBrowser](cp.apple.finalcutpro.main.EffectsBrowser.md)                          | Effects Browser Module.     |
| [cp.apple.finalcutpro.main.FindAndReplaceTitleText](cp.apple.finalcutpro.main.FindAndReplaceTitleText.md)                          | Represents a "Find and Replace Title Text" dialogue box.     |
| [cp.apple.finalcutpro.main.FullScreenPlayer](cp.apple.finalcutpro.main.FullScreenPlayer.md)                          | Full Screen Window Player.     |
| [cp.apple.finalcutpro.main.GeneratorsBrowser](cp.apple.finalcutpro.main.GeneratorsBrowser.md)                          | Generators Browser Module.     |
| [cp.apple.finalcutpro.main.KeywordEditor](cp.apple.finalcutpro.main.KeywordEditor.md)                          | Keyword Editor Module.     |
| [cp.apple.finalcutpro.main.KeywordField](cp.apple.finalcutpro.main.KeywordField.md)                          | Keyword Text Field Module.     |
| [cp.apple.finalcutpro.main.LibrariesBrowser](cp.apple.finalcutpro.main.LibrariesBrowser.md)                          | Libraries Browser Module.     |
| [cp.apple.finalcutpro.main.LibrariesFilmstrip](cp.apple.finalcutpro.main.LibrariesFilmstrip.md)                          | Libraries Filmstrip Module.     |
| [cp.apple.finalcutpro.main.LibrariesList](cp.apple.finalcutpro.main.LibrariesList.md)                          | Libraries List Module.     |
| [cp.apple.finalcutpro.main.LibrariesSidebar](cp.apple.finalcutpro.main.LibrariesSidebar.md)                          | Libraries Sidebar Browser Module.     |
| [cp.apple.finalcutpro.main.MediaBrowser](cp.apple.finalcutpro.main.MediaBrowser.md)                          | Media Browser Module.     |
| [cp.apple.finalcutpro.main.Playhead](cp.apple.finalcutpro.main.Playhead.md)                          | Playhead Module.     |
| [cp.apple.finalcutpro.main.PrimaryToolbar](cp.apple.finalcutpro.main.PrimaryToolbar.md)                          | Timeline Toolbar.     |
| [cp.apple.finalcutpro.main.PrimaryWindow](cp.apple.finalcutpro.main.PrimaryWindow.md)                          | Primary Window Module.     |
| [cp.apple.finalcutpro.main.SecondaryWindow](cp.apple.finalcutpro.main.SecondaryWindow.md)                          | Secondary Window Module.     |
| [cp.apple.finalcutpro.main.TranscodeMedia](cp.apple.finalcutpro.main.TranscodeMedia.md)                          | Represents the Transcode Media sheet.     |
| [cp.apple.finalcutpro.menu](cp.apple.finalcutpro.menu.md)                          | Final Cut Pro Menu Helper Functions.     |
| [cp.apple.finalcutpro.plugins](cp.apple.finalcutpro.plugins.md)                          | Scans an entire system for Final Cut Pro Effects, Generators, Titles & Transitions.     |
| [cp.apple.finalcutpro.plugins.guiscan](cp.apple.finalcutpro.plugins.guiscan.md)                          | Final Cut Pro GUI Plugin Scanner.     |
| [cp.apple.finalcutpro.prefs.EditingPanel](cp.apple.finalcutpro.prefs.EditingPanel.md)                          | Editing Panel Module.     |
| [cp.apple.finalcutpro.prefs.GeneralPanel](cp.apple.finalcutpro.prefs.GeneralPanel.md)                          | General Panel Module.     |
| [cp.apple.finalcutpro.prefs.ImportPanel](cp.apple.finalcutpro.prefs.ImportPanel.md)                          | Import Panel Module.     |
| [cp.apple.finalcutpro.prefs.Panel](cp.apple.finalcutpro.prefs.Panel.md)                          | Preferences Panel.     |
| [cp.apple.finalcutpro.prefs.PlaybackPanel](cp.apple.finalcutpro.prefs.PlaybackPanel.md)                          | Playback Panel Module.     |
| [cp.apple.finalcutpro.prefs.PreferencesWindow](cp.apple.finalcutpro.prefs.PreferencesWindow.md)                          | Preferences Window Module.     |
| [cp.apple.finalcutpro.strings](cp.apple.finalcutpro.strings.md)                          | The `cp.strings` for I18N lookups related to Final Cut Pro.     |
| [cp.apple.finalcutpro.timeline.Appearance](cp.apple.finalcutpro.timeline.Appearance.md)                          | Timeline Appearance Popup module.     |
| [cp.apple.finalcutpro.timeline.AudioRole](cp.apple.finalcutpro.timeline.AudioRole.md)                          |  *Extends [Role](cp.apple.finalcutpro.timeline.Role.md)*     |
| [cp.apple.finalcutpro.timeline.AudioSubrole](cp.apple.finalcutpro.timeline.AudioSubrole.md)                          |  *Extends [Role](cp.apple.finalcutpro.timeline.Role.md)*     |
| [cp.apple.finalcutpro.timeline.CaptionsRole](cp.apple.finalcutpro.timeline.CaptionsRole.md)                          |  *Extends [Role](cp.apple.finalcutpro.timeline.Role.md)*     |
| [cp.apple.finalcutpro.timeline.CaptionsSubrole](cp.apple.finalcutpro.timeline.CaptionsSubrole.md)                          |  *Extends [Role](cp.apple.finalcutpro.timeline.Role.md)*     |
| [cp.apple.finalcutpro.timeline.Contents](cp.apple.finalcutpro.timeline.Contents.md)                          | Timeline Contents Module.     |
| [cp.apple.finalcutpro.timeline.Index](cp.apple.finalcutpro.timeline.Index.md)                          | Timeline Index Module.     |
| [cp.apple.finalcutpro.timeline.IndexCaptions](cp.apple.finalcutpro.timeline.IndexCaptions.md)                          | Provides access to the 'Captions' section of the [Timeline Index](cp.apple.finalcutpro.timeline.Index.md)     |
| [cp.apple.finalcutpro.timeline.IndexClips](cp.apple.finalcutpro.timeline.IndexClips.md)                          |  *Extends [IndexSection](cp.apple.finalcutpro.timeline.IndexSection.md)*     |
| [cp.apple.finalcutpro.timeline.IndexClips.Type](cp.apple.finalcutpro.timeline.IndexClips.Type.md)                          | The collection of [RadioButtons](cp.ui.RadioButton.md) that allow filtering by Video/Audio/Title.     |
| [cp.apple.finalcutpro.timeline.IndexMode](cp.apple.finalcutpro.timeline.IndexMode.md)                          | Timeline Index Mode Radio Group Module.     |
| [cp.apple.finalcutpro.timeline.IndexRoles](cp.apple.finalcutpro.timeline.IndexRoles.md)                          | Provides access to the 'Roles' section of the [Timeline Index](cp.apple.finalcutpro.timeline.Index.md)     |
| [cp.apple.finalcutpro.timeline.IndexRolesArea](cp.apple.finalcutpro.timeline.IndexRolesArea.md)                          | Represents the list of Roles in the [IndexRoles](cp.apple.finalcutpro.timeline.IndexRoles.md).     |
| [cp.apple.finalcutpro.timeline.IndexRolesList](cp.apple.finalcutpro.timeline.IndexRolesList.md)                          | Timeline Index Roles List.     |
| [cp.apple.finalcutpro.timeline.IndexSection](cp.apple.finalcutpro.timeline.IndexSection.md)                          | An abstract base class for sections inside the [Index](cp.apple.finalcutpro.timeline.Index.md).     |
| [cp.apple.finalcutpro.timeline.IndexTags](cp.apple.finalcutpro.timeline.IndexTags.md)                          | Provides access to the 'Tags' section of the [Timeline Index](cp.apple.finalcutpro.timeline.Index.md)     |
| [cp.apple.finalcutpro.timeline.IndexTags.Type](cp.apple.finalcutpro.timeline.IndexTags.Type.md)                          | The collection of [RadioButtons](cp.ui.RadioButton.md) that allow filtering by Video/Audio/Title.     |
| [cp.apple.finalcutpro.timeline.Role](cp.apple.finalcutpro.timeline.Role.md)                          |  *Extends [Row](cp.ui.OldRow.md)*     |
| [cp.apple.finalcutpro.timeline.SpeedPopover](cp.apple.finalcutpro.timeline.SpeedPopover.md)                          |  *Extends [Timeline](cp.apple.finalcutpro.timeline.md)*     |
| [cp.apple.finalcutpro.timeline.Timeline](cp.apple.finalcutpro.timeline.Timeline.md)                          | Timeline Module.     |
| [cp.apple.finalcutpro.timeline.Toolbar](cp.apple.finalcutpro.timeline.Toolbar.md)                          | Timeline Toolbar     |
| [cp.apple.finalcutpro.timeline.Toolbar.Browser](cp.apple.finalcutpro.timeline.Toolbar.Browser.md)                          | A [RadioGroup](cp.ui.RadioGroup.md) that contains buttons to show or hide the Effects and Transitions Browsers.     |
| [cp.apple.finalcutpro.timeline.Toolbar.Clip](cp.apple.finalcutpro.timeline.Toolbar.Clip.md)                          | Provides access to clip options such as skimming, audio skimming, soloing and snap.     |
| [cp.apple.finalcutpro.timeline.ToolPalette](cp.apple.finalcutpro.timeline.ToolPalette.md)                          | Represents the Tool Palette Menu Button in the Timeline.     |
| [cp.apple.finalcutpro.timeline.VideoRole](cp.apple.finalcutpro.timeline.VideoRole.md)                          |  *Extends [Role](cp.apple.finalcutpro.timeline.Role.md)*     |
| [cp.apple.finalcutpro.timeline.VideoSubrole](cp.apple.finalcutpro.timeline.VideoSubrole.md)                          |  *Extends [Role](cp.apple.finalcutpro.timeline.Role.md)*     |
| [cp.apple.finalcutpro.viewer.ControlBar](cp.apple.finalcutpro.viewer.ControlBar.md)                          | Represents the bottom "control" bar on a [Viewer](cp.apple.finalcutpro.viewer.Viewer.md)     |
| [cp.apple.finalcutpro.viewer.InfoBar](cp.apple.finalcutpro.viewer.InfoBar.md)                          | Represents the bar of information about the [Viewer](cp.apple.finalcutpro.viewer.Viewer.md) (format, title, viewing options).     |
| [cp.apple.finalcutpro.viewer.Viewer](cp.apple.finalcutpro.viewer.Viewer.md)                          | Viewer Module.     |
| [cp.apple.finalcutpro.workflowextensions.CommandPostWindow](cp.apple.finalcutpro.workflowextensions.CommandPostWindow.md)                          | The CommandPost Workflow Extension Window.     |
| [cp.apple.motion](cp.apple.motion.md)                          | Represents the Motion application, providing functions that allow different tasks to be accomplished.     |
| [cp.apple.motion.app](cp.apple.motion.app.md)                          | The `cp.app` for Apple's Motion.     |
| [cp.battery](cp.battery.md)                          | Provides access to various properties of the battery. Each of these properties     |
| [cp.bench](cp.bench.md)                          | Benchmarking Tool.     |
| [cp.blackmagic.resolve](cp.blackmagic.resolve.md)                          | The Blackmagic DaVinci Resolve Extension.     |
| [cp.blackmagic.resolve.app](cp.blackmagic.resolve.app.md)                          | The `cp.app` for Blackmagic DaVinci Resolve.     |
| [cp.blackmagic.resolve.color.Color](cp.blackmagic.resolve.color.Color.md)                          | Color Module.     |
| [cp.blackmagic.resolve.color.Tracker](cp.blackmagic.resolve.color.Tracker.md)                          | Tracker     |
| [cp.blackmagic.resolve.main.PrimaryWindow](cp.blackmagic.resolve.main.PrimaryWindow.md)                          | Primary Window Module.     |
| [cp.buffer](cp.buffer.md)                          | Internal byte buffer type. Allows additional chunks of bytes     |
| [cp.choices](cp.choices.md)                          | Choices Module.     |
| [cp.choices.builder](cp.choices.builder.md)                          | Choices Builder Module.     |
| [cp.collect.LazyList](cp.collect.LazyList.md)                          | A LazyList is a list that is lazily evaluated. It will dynamically create items on demand,     |
| [cp.collect.List](cp.collect.List.md)                          | Lists are similar `tables` which can contain `nil` items without shortening the length.     |
| [cp.collect.Queue](cp.collect.Queue.md)                          | A "double-ended queue" implementation. This allows pushing and popping     |
| [cp.collect.Set](cp.collect.Set.md)                          | An implementation of a logical `set`, which contains a single unique     |
| [cp.commands](cp.commands.md)                          | Commands Module.     |
| [cp.commands.command](cp.commands.command.md)                          | Commands Module.     |
| [cp.commands.englishKeyCodes](cp.commands.englishKeyCodes.md)                          | Returns a table of all the English Key Codes.     |
| [cp.commands.shortcut](cp.commands.shortcut.md)                          | Shortcut Commands     |
| [cp.commands.shortcut.builder](cp.commands.shortcut.builder.md)                          | Shortcut Commands Builder Module.     |
| [cp.config](cp.config.md)                          | Manage CommandPost's constants and settings.     |
| [cp.config.dockIconClickCallback](cp.config.dockIconClickCallback.md)                          | Callback which triggers when the CommandPost Dock Icon is clicked     |
| [cp.config.fileDroppedToDockIconCallback](cp.config.fileDroppedToDockIconCallback.md)                          | File Dropped to Dock Icon Callback     |
| [cp.config.shutdownCallback](cp.config.shutdownCallback.md)                          | Shutdown Callback Module.     |
| [cp.config.textDroppedToDockIconCallback](cp.config.textDroppedToDockIconCallback.md)                          | Text Dropped to Dock Icon Callback     |
| [cp.console.history](cp.console.history.md)                          | Console History Manager.     |
| [cp.deferred](cp.deferred.md)                          | This extension makes it simple to defer multiple actions after a delay from the initial execution.     |
| [cp.delegator](cp.delegator.md)                          | `cp.delegator` is a [middleclass](https://github.com/kikito/middleclass) "mix-in" that allows for     |
| [cp.dev](cp.dev.md)                          | A set of handy developer tools for CommandPost.     |
| [cp.dialog](cp.dialog.md)                          | A collection of handy Dialog tools for CommandPost.     |
| [cp.disk](cp.disk.md)                          | Provides provides details about disk devices attached to the system.     |
| [cp.docs](cp.docs.md)                          | Documentation Tools.     |
| [cp.feedback](cp.feedback.md)                          | Feedback Form.     |
| [cp.fn](cp.fn.md)                          | A collection of functions that are useful for working with functions.     |
| [cp.fn.args](cp.fn.args.md)                          | Functions for working with function arguments.     |
| [cp.fn.ax](cp.fn.ax.md)                          | A collection of useful functions for working with AX.     |
| [cp.fn.prop](cp.fn.prop.md)                          | A module of free-standing functions for working with [cp.prop](cp.prop.md) values.     |
| [cp.fn.string](cp.fn.string.md)                          | String-related functional programming helpers.     |
| [cp.fn.table](cp.fn.table.md)                          | Table-related functions.     |
| [cp.fn.value](cp.fn.value.md)                          | A collection of functions for working with values.     |
| [cp.highland2](cp.highland2.md)                          | Highland 2 support.     |
| [cp.highland2.app](cp.highland2.app.md)                          | The [cp.app](cp.app.md) for Highland 2.     |
| [cp.highland2.Document](cp.highland2.Document.md)                          | Highland 2 Document [Window](cp.ui.Window.md) extension.     |
| [cp.highland2.Sidebar](cp.highland2.Sidebar.md)                          | Represents the sidebar for a document opened in Highland.     |
| [cp.i18n.language](cp.i18n.language.md)                          | Provides the set of ISO 693-1/2/3 language codes and names.     |
| [cp.i18n.languageID](cp.i18n.languageID.md)                          | As per [Apple's documentation](https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html#//apple_ref/doc/uid/10000171i-CH15-SW6),     |
| [cp.i18n.localeID](cp.i18n.localeID.md)                          | As per [Apple's documentation](https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html#//apple_ref/doc/uid/10000171i-CH15-SW6),     |
| [cp.i18n.region](cp.i18n.region.md)                          | Provides the set of ISO 3166-1 region codes and names.     |
| [cp.i18n.script](cp.i18n.script.md)                          | Provides the set of ISO 15924 language scripts.     |
| [cp.idle](cp.idle.md)                          | This library allows tasks to be queue for execution when the computer has     |
| [cp.ids](cp.ids.md)                          | Allows managing values/IDs which can vary between versions.     |
| [cp.interpolate](cp.interpolate.md)                          | Provides a function that will interpolate values into a string.     |
| [cp.is](cp.is.md)                          | A simple class that lets you test if a value `is` a particular type.     |
| [cp.json](cp.json.md)                          | A collection of handy JSON tools.     |
| [cp.just](cp.just.md)                          | This module provides functions to help with performing tasks which may be     |
| [cp.lazy](cp.lazy.md)                          | `cp.lazy` is a [middleclass](https://github.com/kikito/middleclass) "mix-in" that allows for     |
| [cp.localized](cp.localized.md)                          | Helps look up localized names for folders.     |
| [cp.nib](cp.nib.md)                          | Provides support for NIB files.     |
| [cp.nib.archiver](cp.nib.archiver.md)                          | Provides support for loading NIB files stored in the `NIBArchive` format.     |
| [cp.nib.type.NSString](cp.nib.type.NSString.md)                          | A metatype for unarchived `NSString` objects.     |
| [cp.nib.types](cp.nib.types.md)                          | A registry of supported object types for unarchived values.     |
| [cp.pattern](cp.pattern.md)                          | Contains pattern matching utility functions.     |
| [cp.plist](cp.plist.md)                          | Reads & Writes plist data.     |
| [cp.plist.archiver](cp.plist.archiver.md)                          | Supports 'defrosting' a table which is made up from an 'NSKeyArchiver' record.     |
| [cp.plist.plistParser](cp.plist.plistParser.md)                          | plistParser (https://codea.io/talk/discussion/1269/code-plist-parser)     |
| [cp.plugins](cp.plugins.md)                          | This is a simple plugin manager.     |
| [cp.plugins.env](cp.plugins.env.md)                          | Provides access to resources in the plugin environment. In generally, this will be files stored in a Complex Plugin's folder.     |
| [cp.plugins.plugin](cp.plugins.plugin.md)                          | CommandPost Plugin.     |
| [cp.prop](cp.prop.md)                          | This is a utility library for helping keep track of single-value property states. Each property provides access to a single value. Must be readable, but may be read-only. It works by creating a table which has a `get` and (optionally) a `set` function which are called when changing the state.     |
| [cp.protect](cp.protect.md)                          | Utility function for protecting a table from being modified.     |
| [cp.result](cp.result.md)                          | Represents the result of an operation which may end in `success` or `failure`.     |
| [cp.rx](cp.rx.md)                          | Reactive Extensions for Lua.     |
| [cp.rx.AsyncSubject](cp.rx.AsyncSubject.md)                          | `AsyncSubjects` are subjects that produce either no values or a single value.  If     |
| [cp.rx.BehaviorSubject](cp.rx.BehaviorSubject.md)                          | A [Subject](cp.rx.Subject.md) that tracks its current value. Provides an accessor to retrieve the most     |
| [cp.rx.CooperativeScheduler](cp.rx.CooperativeScheduler.md)                          | Manages [Observables](cp.rx.Observer.md) using `coroutines` and a virtual clock that must be updated     |
| [cp.rx.go](cp.rx.go.md)                          | Defines [Statements](cp.rx.go.Statement.md) to make processing of     |
| [cp.rx.go.Do](cp.rx.go.Do.md)                          | A [Statement](cp.rx.go.Statement.md) that will execute the provided `resolvable` values.     |
| [cp.rx.go.Do.Then](cp.rx.go.Do.Then.md)                          | A [Statement.Modifier](cp.rx.go.Statement.Modifier.md) of [Do](cp.rx.go.Do.md)     |
| [cp.rx.go.Done](cp.rx.go.Done.md)                          | A [Statement](cp.rx.go.Statement.md) that will complete without sending any values.     |
| [cp.rx.go.First](cp.rx.go.First.md)                          | _Extends:_ [Statement](cp.rx.go.Statement.md)     |
| [cp.rx.go.Given](cp.rx.go.Given.md)                          | A [Statement](cp.rx.go.Statement.md) that will execute the provided `resolvable` values.     |
| [cp.rx.go.Given.Then](cp.rx.go.Given.Then.md)                          | A [Statement.Modifier](cp.rx.go.Statement.Modifier.md) of [Given](cp.rx.go.Given.md)     |
| [cp.rx.go.If](cp.rx.go.If.md)                          | A `Statement` that will check if a `resolvable` matches a predicate, then executes other `resolvables`.     |
| [cp.rx.go.If.Are](cp.rx.go.If.Are.md)                          | A [Statement.Modifier] of [If](cp.rx.go.If.md) that sets the values to match.     |
| [cp.rx.go.If.AreNot](cp.rx.go.If.AreNot.md)                          | A [Statement.Modifier](cp.rx.go.Statement.Modifier.md) for [If](cp.rx.go.If.md) that sets the values to *not* match.     |
| [cp.rx.go.If.Is](cp.rx.go.If.Is.md)                          | A [Statement.Modifier](cp.rx.go.Statement.Modifier.md) for [If](cp.rx.go.If.md) that sets a specific value to match.     |
| [cp.rx.go.If.IsNot](cp.rx.go.If.IsNot.md)                          | A [Statement.Modifier](cp.rx.go.Statement.Modifier.md) for [If](cp.rx.go.If.md) that sets a specific value to *not* match.     |
| [cp.rx.go.If.Matches](cp.rx.go.If.Matches.md)                          | A [Statement.Modifier](cp.rx.go.Statement.Modifier.md) for [If](cp.rx.go.If.md) that sets a predicate check values against.     |
| [cp.rx.go.If.Then](cp.rx.go.If.Then.md)                          | A `Statement.Modifier` that defines what happens when an `If` matches.     |
| [cp.rx.go.If.Then.Otherwise](cp.rx.go.If.Then.Otherwise.md)                          | A [Statement.Modifier](cp.rx.go.Statement.Modifier.md) of [If](cp.rx.go.If.md), which should be created via `If:Then(...):Otherwise(...)`.     |
| [cp.rx.go.If.Then.Otherwise.Then](cp.rx.go.If.Then.Otherwise.Then.md)                          | Each [Otherwise](cp.rx.go.If.Then.Otherwise.md) can have a subsequent `Then` which will be executed after the previous one resolves.     |
| [cp.rx.go.Last](cp.rx.go.Last.md)                          | A `Statement` that will complete after the only the last result resolves.     |
| [cp.rx.go.List](cp.rx.go.List.md)                          | _Extends:_ [Statement](cp.rx.go.Statement.md)     |
| [cp.rx.go.List.Sorted](cp.rx.go.List.Sorted.md)                          | A `Statement.Modifier` that specifies the list should be sorted by its 'natural' order - that is `a < b`.     |
| [cp.rx.go.List.SortedBy](cp.rx.go.List.SortedBy.md)                          | A `Statement.Modifier` that specifies the list should be sorted by the specified `function`.     |
| [cp.rx.go.Require](cp.rx.go.Require.md)                          | A `Statement` that will require that the `resolvable` value matches a predicate,     |
| [cp.rx.go.Require.Are](cp.rx.go.Require.Are.md)                          | Specifies that the `Require`d values `Are` a specific value.     |
| [cp.rx.go.Require.AreNot](cp.rx.go.Require.AreNot.md)                          | Specifies that the `Require`d values `AreNot` a specific value.     |
| [cp.rx.go.Require.Is](cp.rx.go.Require.Is.md)                          | Specifies that the `Require`d value `Is` a specific value.     |
| [cp.rx.go.Require.IsNot](cp.rx.go.Require.IsNot.md)                          | Specifies that the `Require`d value `IsNot` a specific value.     |
| [cp.rx.go.Require.Matches](cp.rx.go.Require.Matches.md)                          | Specifies that the `Require`d value `Matches` a function predicate.     |
| [cp.rx.go.Retry](cp.rx.go.Retry.md)                          | _Extends:_ [Statement](cp.rx.go.Statement.md)     |
| [cp.rx.go.SetProp](cp.rx.go.SetProp.md)                          | A `Statement` that will update a `cp.prop` value, then optionally execute other `resolvables`, and optionally reset the `cp.prop` to its previous value.     |
| [cp.rx.go.SetProp.To](cp.rx.go.SetProp.To.md)                          | A `Statement.Modifier` that defines what value to set a `cp.prop` to.     |
| [cp.rx.go.SetProp.To.Then](cp.rx.go.SetProp.To.Then.md)                          | A `Statement.Modifier` that defines what happens when after `SetProp.To` is executed.     |
| [cp.rx.go.SetProp.To.Then.ThenReset](cp.rx.go.SetProp.To.Then.ThenReset.md)                          | A `Statement.Modifier` that specifies that the `cp.prop` is reset to its original value once execution completes.     |
| [cp.rx.go.Statement](cp.rx.go.Statement.md)                          | A `Statement` is defined to enable processing of asynchronous `resolvable` values such     |
| [cp.rx.go.Statement.Definition](cp.rx.go.Statement.Definition.md)                          | A [Statement](cp.rx.go.Statement.md) is defined before being executable.     |
| [cp.rx.go.Statement.Modifier](cp.rx.go.Statement.Modifier.md)                          | A `Statement.Modifier` is an extension to a [Statement](cp.rx.go.Statement.md) that provides additional configuration details.     |
| [cp.rx.go.Statement.Modifier.Definition](cp.rx.go.Statement.Modifier.Definition.md)                          | A [Statement.Modifier](cp.rx.go.Statement.Modifier.md) is defined before being executable.     |
| [cp.rx.go.Throw](cp.rx.go.Throw.md)                          | A [Statement](cp.rx.go.Statement.md) that will throw the provided message.     |
| [cp.rx.go.WaitUntil](cp.rx.go.WaitUntil.md)                          | A [Statement](cp.rx.go.Statement.md) that will wait for the first value from a `resolveable` that matches the predicate.     |
| [cp.rx.ImmediateScheduler](cp.rx.ImmediateScheduler.md)                          | Schedules `Observables` by running all operations immediately.     |
| [cp.rx.Observable](cp.rx.Observable.md)                          | Observables push values to [Observers](cp.rx.Observer.md).     |
| [cp.rx.Observer](cp.rx.Observer.md)                          | Observers are simple objects that receive values from [Observables](cp.rx.Observable.md).     |
| [cp.rx.Reference](cp.rx.Reference.md)                          | A handle representing the link between an [Observer](cp.rx.Observer.md) and an [Observable](cp.rx.Observable.md), as well as any     |
| [cp.rx.RelaySubject](cp.rx.RelaySubject.md)                          | A [Subject](cp.rx.Subject.md) that provides new [Observers](cp.rx.Observer.md) with some or all of the most recently     |
| [cp.rx.Subject](cp.rx.Subject.md)                          | `Subjects` function both as an [Observer](cp.rs.Observer.md) and as an [Observable](cp.rx.Observable.md). Subjects inherit all     |
| [cp.rx.TimeoutScheduler](cp.rx.TimeoutScheduler.md)                          | A scheduler that uses the `hs.timer` library to schedule events on an event loop.     |
| [cp.sourcewatcher](cp.sourcewatcher.md)                          | Watches folders for specific file extensions and reloads the app if they change.     |
| [cp.spec](cp.spec.md)                          | An synchronous/asynchronous test library for Lua.     |
| [cp.spec.DefaultHandler](cp.spec.DefaultHandler.md)                          | Default implementation of [Handler](cp.spec.Handler.md), which     |
| [cp.spec.Definition](cp.spec.Definition.md)                          | A [Definition](cp.spec.Definition.md) is a superclass for a "runnable" specification.     |
| [cp.spec.Error](cp.spec.Error.md)                          | Provides an Error message, which can be thrown via the `error` function.     |
| [cp.spec.expect](cp.spec.expect.md)                          | Provides a way of checking values match expected results. At it's core, it uses `assert` to make the check.     |
| [cp.spec.Handled](cp.spec.Handled.md)                          | An synchronous/asynchronous test library for Lua.     |
| [cp.spec.Handler](cp.spec.Handler.md)                          | Subclasses of this can customise how reports are handled.     |
| [cp.spec.Message](cp.spec.Message.md)                          | Provides an Message message, which can be thrown via the `error` function.     |
| [cp.spec.Report](cp.spec.Report.md)                          | The results of a test [run](cp.spec.Run.md).     |
| [cp.spec.Run](cp.spec.Run.md)                          | An individual run of a test [Definition](cp.spec.Definition.md) or [Specification](cp.spec.Specification.md).     |
| [cp.spec.Run.This](cp.spec.Run.This.md)                          | A token passed to test functions to allow them to indicate if a test [run](cp.spec.Run.md)     |
| [cp.spec.Scenario](cp.spec.Scenario.md)                          | A [Definition](cp.spec.Definition.md) which describes a specific scenario.     |
| [cp.spec.Specification](cp.spec.Specification.md)                          | A Specification is a list of [definitions](cp.spec.Definition.md) which     |
| [cp.spec.TestCase](cp.spec.TestCase.md)                          | Wraps [cp.test](cp.test.md) into a subclass of [Scenario](cp.spec.Scenario.md).     |
| [cp.spec.TestSuite](cp.spec.TestSuite.md)                          | Test Suite.     |
| [cp.spec.Where](cp.spec.Where.md)                          | Created via [Scenario:where(...)](cp.spec.Scenario.md#where).     |
| [cp.strings](cp.strings.md)                          | Provides strings from (potentially) multiple sources, with support for loading from multiple languages.     |
| [cp.strings.source.plist](cp.strings.source.plist.md)                          | Loads strings from a `plist` with allowing for a given language variation. Eg:     |
| [cp.strings.source.table](cp.strings.source.table.md)                          | Loads strings from provided tables, allowing for a given language variation. Eg:     |
| [cp.test](cp.test.md)                          | CommandPost Test Scripts.     |
| [cp.text](cp.text.md)                          | This module provides support for loading, manipulating, and comparing unicode text data.     |
| [cp.text.matcher](cp.text.matcher.md)                          | Adapted from 'utf8.lua' (https://github.com/Stepets/utf8.lua)     |
| [cp.time.flicks](cp.time.flicks.md)                          | Provides support for measuring time in `flicks`, a base unit of time useful for     |
| [cp.tools](cp.tools.md)                          | A collection of handy miscellaneous tools for Lua development.     |
| [cp.ui.Alert](cp.ui.Alert.md)                          | Alert UI Module.     |
| [cp.ui.axutils](cp.ui.axutils.md)                          | Utility functions to support `hs.axuielement`.     |
| [cp.ui.axutils.compare](cp.ui.axutils.compare.md)                          | Contains functions for comparing `axuielement`s.     |
| [cp.ui.axutils.match](cp.ui.axutils.match.md)                          | Contains common `hs.axuielement` matching functions.     |
| [cp.ui.Builder](cp.ui.Builder.md)                          | A utility class, which provides support for allowing creation of [Element](cp.ui.Element.md) instances in a "builder" style.     |
| [cp.ui.Button](cp.ui.Button.md)                          | The `Button` type extends [Element](cp.ui.Element.md) and includes all its     |
| [cp.ui.Cell](cp.ui.Cell.md)                          | Represents an `AXCell` `axuielement`. This can be used directly, or can be subclassed to provide more specific access to the cell contents.     |
| [cp.ui.CheckBox](cp.ui.CheckBox.md)                          | Check Box UI Module.     |
| [cp.ui.ColorWell](cp.ui.ColorWell.md)                          | UI ColorWell.     |
| [cp.ui.Column](cp.ui.Column.md)                          | Represents a Column in a Table.     |
| [cp.ui.ComboBox](cp.ui.ComboBox.md)                          | Combo Box Module.     |
| [cp.ui.Dialog](cp.ui.Dialog.md)                          | Represents a [Window](cp.ui.Window.md) which has a `AXSubrole` of `AXDialog`.     |
| [cp.ui.DisclosureTriangle](cp.ui.DisclosureTriangle.md)                          | Disclosure Triangle UI Module.     |
| [cp.ui.Element](cp.ui.Element.md)                          | A support class for `hs.axuielement` management.     |
| [cp.ui.ElementCache](cp.ui.ElementCache.md)                          | Provides caching for [Element](cp.ui.Element.md) subclasses that want to cache children.     |
| [cp.ui.GridElement](cp.ui.GridElement.md)                          | Abstract base class for `AX` elements which form a grid, such as [GridElement](cp.ui.GridElement.md) and [Outline](cp.ui.Outline.md).     |
| [cp.ui.GridElement.Builder](cp.ui.GridElement.Builder.md)                          | A `Builder` for `GridElement`s.     |
| [cp.ui.GridElement.OfRows](cp.ui.GridElement.OfRows.md)                          | Processes the contents of the GridElement as a list of rows.     |
| [cp.ui.Group](cp.ui.Group.md)                          | UI Group.     |
| [cp.ui.Group.Builder](cp.ui.Group.Builder.md)                          | Defines a `Group` builder.     |
| [cp.ui.Image](cp.ui.Image.md)                          | Represents an `AXImage` `axuielement` value.     |
| [cp.ui.List](cp.ui.List.md)                          | Represents an `AXList` `axuielement` value.     |
| [cp.ui.Menu](cp.ui.Menu.md)                          | UI for AXMenus.     |
| [cp.ui.MenuButton](cp.ui.MenuButton.md)                          | Menu Button Module.     |
| [cp.ui.notifier](cp.ui.notifier.md)                          | Supports long-lived 'AX' notifiers. Configure the application to watch, the     |
| [cp.ui.OldOutline](cp.ui.OldOutline.md)                          | Represents an `AXOutline` `axuielement`.     |
| [cp.ui.OldRow](cp.ui.OldRow.md)                          | Represents an `AXRow` `axuielement`.     |
| [cp.ui.OldTable](cp.ui.OldTable.md)                          | Represents an AXTable in the Apple Accessibility UX API.     |
| [cp.ui.Outline](cp.ui.Outline.md)                          | A Outline UI element. It extends [GridElement](cp.ui.GridElement.md), so will inherit all of its properties and methods.     |
| [cp.ui.Popover](cp.ui.Popover.md)                          | UI Group.     |
| [cp.ui.PopUpButton](cp.ui.PopUpButton.md)                          | Pop Up Button Module.     |
| [cp.ui.PropertyRow](cp.ui.PropertyRow.md)                          | Represents a single property row, typically in a Property Inspector.     |
| [cp.ui.RadioButton](cp.ui.RadioButton.md)                          | Radio Button Module.     |
| [cp.ui.RadioGroup](cp.ui.RadioGroup.md)                          | Represents an `AXRadioGroup`, providing utility methods.     |
| [cp.ui.Row](cp.ui.Row.md)                          | Represents an `AXRow` `axuielement`.     |
| [cp.ui.Row.Builder](cp.ui.Row.Builder.md)                          | Defines a `Row` builder.     |
| [cp.ui.ScrollArea](cp.ui.ScrollArea.md)                          | A `ScrollArea` represents an `AXScrollArea`. They primarily function as a "portal"     |
| [cp.ui.ScrollArea.Builder](cp.ui.ScrollArea.Builder.md)                          | [Builder](cp.ui.Builder.md) class for [ScrollArea](cp.ui.ScrollArea.lua).     |
| [cp.ui.ScrollBar](cp.ui.ScrollBar.md)                          | Provides access to `AXScrollBar` `axuielement` values.     |
| [cp.ui.SearchField](cp.ui.SearchField.md)                          | A [TextField](cp.ui.TextField.md) with a subrole of `AXSearchField`.     |
| [cp.ui.Sheet](cp.ui.Sheet.md)                          | Sheet UI Module.     |
| [cp.ui.Slider](cp.ui.Slider.md)                          | Slider Module.     |
| [cp.ui.SplitGroup](cp.ui.SplitGroup.md)                          | Split Group UI. A SplitGroup is a container that can be split into multiple sections.     |
| [cp.ui.Splitter](cp.ui.Splitter.md)                          | Represents an `AXSplitter`.     |
| [cp.ui.StaticText](cp.ui.StaticText.md)                          | Static Text Module.     |
| [cp.ui.Table](cp.ui.Table.md)                          | A Table UI element. It extends [GridElement](cp.ui.GridElement.md), so will inherit all of its properties and methods.     |
| [cp.ui.TextArea](cp.ui.TextArea.md)                          | UI Text Area.     |
| [cp.ui.TextField](cp.ui.TextField.md)                          | Text Field Module.     |
| [cp.ui.TextField.Builder](cp.ui.TextField.Builder.md)                          | Defines a `TextField` [Builder](cp.ui.Builder.md).     |
| [cp.ui.Toolbar](cp.ui.Toolbar.md)                          | Toolbar Module.     |
| [cp.ui.Window](cp.ui.Window.md)                          | A Window UI element.     |
| [cp.utf16](cp.utf16.md)                          | A pure-LUA implementation of UTF-16 decoding     |
| [cp.utf16.be](cp.utf16.be.md)                          | A pure-LUA implementation of UTF-16 decoding with big-endian ordering.     |
| [cp.utf16.le](cp.utf16.le.md)                          | A pure-LUA implementation of UTF-16 decoding with little-endian ordering.     |
| [cp.watcher](cp.watcher.md)                          | This extension provides support for setting up 'event watchers'.     |
| [cp.web.block](cp.web.block.md)                          | Block.     |
| [cp.web.generate](cp.web.generate.md)                          | Functions for Generating HTML UI Items     |
| [cp.web.html](cp.web.html.md)                          | Functions for Generating HTML markup.     |
| [cp.web.text](cp.web.text.md)                          | Functions for managing text on the web.     |
| [cp.web.ui](cp.web.ui.md)                          | This extension contains functions which simplify the creation of standard UI events     |
| [cp.web.xml](cp.web.xml.md)                          | Functions for Generating XML markup.     |
| [cp.websocket.event](cp.websocket.event.md)                          | The set of event types received from websocket connections.     |
| [cp.websocket.frame](cp.websocket.frame.md)                          | Implementation of [RFC-6455](https://tools.ietf.org/html/rfc6455), Section 5     |
| [cp.websocket.http](cp.websocket.http.md)                          | Provides a full HTTP-based websocket implementation.     |
| [cp.websocket.serial](cp.websocket.serial.md)                          | A partial implementation of the websocket API communicating     |
| [cp.websocket.status](cp.websocket.status.md)                          | A `table` of statuses used by both `cp.websocket.serial` and `cp.websocket.http` to describe the connection status.     |

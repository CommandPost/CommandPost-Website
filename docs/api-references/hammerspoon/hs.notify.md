# hs.notify

This module allows you to create on screen notifications in the User Notification Center located at the right of the users screen.

Notifications can be sent immediately or scheduled for delivery at a later time, even if that scheduled time occurs when Hammerspoon is not currently running. Currently, if you take action on a notification while Hammerspoon is not running, the callback function is not honored for the first notification clicked upon -- This is expected to be fixed in a future release.

When setting up a callback function, you have the option of specifying it with the creation of the notification (hs.notify.new) or by pre-registering it with hs.notify.register and then referring it to by the tag name specified with hs.notify.register. If you use this registration method for defining your callback functions, and make sure to register all expected callback functions within your init.lua file or files it includes, then callback functions will remain available for existing notifications in the User Notification Center even if Hammerspoon's configuration is reloaded or if Hammerspoon is restarted. If the callback tag is not present when the user acts on the notification, the Hammerspoon console will be raised as a default action.

A shorthand, based upon the original inspiration for this module from Hydra and Mjolnir, hs.notify.show, is provided if you just require a quick and simple informative notification without the bells and whistles.

This module is based in part on code from the previous incarnation of Mjolnir by [Steven Degutis](https://github.com/sdegutis/).

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [activationTypes](#activationtypes)
 * [defaultNotificationSound](#defaultnotificationsound)

**Variables** - _Configurable values_
 * [registry](#registry)
 * [warnAboutMissingFunctionTag](#warnaboutmissingfunctiontag)

**Functions** - _API calls offered directly by the extension_
 * [deliveredNotifications](#deliverednotifications)
 * [register](#register)
 * [scheduledNotifications](#schedulednotifications)
 * [unregister](#unregister)
 * [unregisterall](#unregisterall)
 * [withdrawAll](#withdrawall)
 * [withdrawAllScheduled](#withdrawallscheduled)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)
 * [show](#show)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [actionButtonTitle](#actionbuttontitle)
 * [activationType](#activationtype)
 * [actualDeliveryDate](#actualdeliverydate)
 * [additionalActions](#additionalactions)
 * [additionalActivationAction](#additionalactivationaction)
 * [alwaysPresent](#alwayspresent)
 * [alwaysShowAdditionalActions](#alwaysshowadditionalactions)
 * [autoWithdraw](#autowithdraw)
 * [contentImage](#contentimage)
 * [delivered](#delivered)
 * [getFunctionTag](#getfunctiontag)
 * [hasActionButton](#hasactionbutton)
 * [hasReplyButton](#hasreplybutton)
 * [informativeText](#informativetext)
 * [otherButtonTitle](#otherbuttontitle)
 * [presented](#presented)
 * [response](#response)
 * [responsePlaceholder](#responseplaceholder)
 * [schedule](#schedule)
 * [send](#send)
 * [setIdImage](#setidimage)
 * [soundName](#soundname)
 * [subTitle](#subtitle)
 * [title](#title)
 * [withdraw](#withdraw)
 * [withdrawAfter](#withdrawafter)


---

## API Documentation

#### Constants


### [activationTypes](#activationtypes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify.activationTypes[]`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Convenience array of the possible activation types for a notification, and their reverse for reference.                                                                     |
| **Notes**                                   | <ul><li>Count starts at zero. (implemented in Objective-C)</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 1315](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L1315) |

---


### [defaultNotificationSound](#defaultnotificationsound)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify.defaultNotificationSound`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The string representation of the default notification sound. Use `hs.notify:soundName()` or set the `soundName` attribute in `hs:notify.new()`, to this constant, if you want to use the default sound                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 1503](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L1503) |

---

#### Variables


### [registry](#registry)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify.registry[]`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table containing the registered callback functions and their tags.                                                                     |
| **Notes**                                   | <ul><li>This table should not be modified directly. Use the `hs.notify.register(tag, fn)` and `hs.notify.unregister(id)` functions.</li><li>This table has a __tostring metamethod so you can see the list of registered function tags in the console by typing `hs.notify.registry`</li><li>See [hs.notify.warnAboutMissingFunctionTag](#warnAboutMissingFunctionTag) for determining the behavior when a notification attempts to perform a callback to a function tag which is not present in this table. This occurrence is most common with notifications which are acted upon by the user after Hammerspoon has been reloaded.</li></ul> |
| **Source**                                  | [extensions/notify/notify.lua line 253](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/notify.lua#L253) |

---


### [warnAboutMissingFunctionTag](#warnaboutmissingfunctiontag)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify.warnAboutMissingFunctionTag`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A value indicating whether or not a missing notification function tag should cause a warning.  Defaults to `true`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/notify.lua line 50](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/notify.lua#L50) |

---

#### Functions


### [deliveredNotifications](#deliverednotifications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify.deliveredNotifications() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing notifications which have been delivered.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table containing the notification userdata objects for all Hammerspoon notifications currently in the notification center</li></ul>          |
| **Notes**                                   | <ul><li>Only notifications which have been presented but not cleared, either by the user clicking on the [hs.notify:otherButtonTitle](#otherButtonTitle) or through auto-withdrawal (see [hs.notify:autoWithdraw](#autoWithdraw) for more details), will be in the array returned.</li><li></li><li>You can use this function along with [hs.notify:getFunctionTag](#getFunctionTag) to re=register necessary callback functions with [hs.notify.register](#register) when Hammerspoon is restarted.</li><li></li><li>Since notifications which the user has closed (or cancelled) do not trigger a callback, you can check this table with a timer to see if the user has cleared a notification, e.g.</li><li>~~~lua</li><li>myNotification = hs.notify.new():send()</li><li>clearCheck = hs.timer.doEvery(10, function()</li><li>    if not hs.fnutils.contains(hs.notify.deliveredNotifications(), myNotification) then</li><li>        if myNotification:activationType() == hs.notify.activationTypes.none then</li><li>            print("You dismissed me!")</li><li>        else</li><li>            print("A regular action occurred, so callback (if any) was invoked")</li><li>        end</li><li>        clearCheck:stop() -- either way, no need to keep polling</li><li>        clearCheck = nil</li><li>    end</li><li>end)</li><li>~~~</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 212](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L212) |

---


### [register](#register)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify.register(tag, fn) -> id`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a function callback with the specified tag for a notification. The callback function will be invoked when the user clicks on or interacts with a notification.                                                                     |
| **Parameters**                              | <ul><li>tag - a string tag to identify the registered callback function. Use this as the function tag in [hs.notify.new](#new) and [hs.notify.show](#show)</li><li>fn  - the function which should be invoked when a notification with this tag is interacted with.</li></ul> |
| **Returns**                                 | <ul><li>a numerical id representing the entry in [hs.notify.registry](#registry) for this function. This number can be used with [hs.notify.unregister](#unregister) to unregister a function later if you wish.</li></ul>          |
| **Notes**                                   | <ul><li>If a function is already registered with the specified tag, it is replaced by with the new one.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/notify.lua line 178](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/notify.lua#L178) |

---


### [scheduledNotifications](#schedulednotifications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify.scheduledNotifications() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing notifications which are scheduled but have not yet been delivered.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table containing the notification userdata objects for all Hammerspoon notifications currently scheduled to be delivered.</li></ul>          |
| **Notes**                                   | <ul><li>Once a notification has been delivered, it is moved to [hs.notify.deliveredNotifications](#deliveredNotifications) or removed, depending upon the users action.</li><li></li><li>You can use this function along with [hs.notify:getFunctionTag](#getFunctionTag) to re=register necessary callback functions with [hs.notify.register](#register) when Hammerspoon is restarted.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 259](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L259) |

---


### [unregister](#unregister)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify.unregister(id|tag)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unregisters a function callback so that it is no longer available as a callback when notifications corresponding to the specified entry are interacted with.                                                                     |
| **Parameters**                              | <ul><li>id - the numerical id provided by [hs.notify.register](#register)</li><li>tag - a string tag representing the callback function to be removed</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/notify.lua line 212](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/notify.lua#L212) |

---


### [unregisterall](#unregisterall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify.unregisterall()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unregisters all functions registered as callbacks.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This does not remove the notifications from the User Notification Center, it just removes their callback function for when the user interacts with them. To remove all notifications, see [hs.notify.withdrawAll](#withdrawAll) and [hs.notify.withdrawAllScheduled](#withdrawAllScheduled)</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/notify.lua line 239](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/notify.lua#L239) |

---


### [withdrawAll](#withdrawall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify.withdrawAll()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Withdraw all delivered notifications from Hammerspoon                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This will withdraw all notifications for Hammerspoon, including those not sent by this module or that linger from a previous load of Hammerspoon.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 177](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L177) |

---


### [withdrawAllScheduled](#withdrawallscheduled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify.withdrawAllScheduled()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Withdraw all scheduled notifications from Hammerspoon                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 196](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L196) |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify.new([fn,][attributes]) -> notification`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new notification object                                                                     |
| **Parameters**                              | <ul><li>fn - An optional function or function-tag, which will be called when the user interacts with notifications. The notification object will be passed as an argument to the function. If you leave this parameter out or specify nil, then no callback will be attached to the notification.</li><li>attributes - An optional table for applying attributes to the notification.
  Possible keys are:
  alwaysPresent   - see [hs.notify:alwaysPresent](#alwaysPresent)
  autoWithdraw    - see [hs.notify:autoWithdraw](#autoWithdraw)
  contentImage    - see [hs.notify:contentImage](#contentImage)
  informativeText - see [hs.notify:informativeText](#informativeText)
  soundName       - see [hs.notify:soundName](#soundName)
  subTitle        - see [hs.notify:subTitle](#subTitle)
  title           - see [hs.notify:title](#title)
  setIdImage      - see [hs.notify:setIdImage](#setIdImage) -- note the border will automatically be set to false if assigned as an attribute in this table.
  The following can also be set, but will only have an apparent effect on the notification when the user has set Hammerspoon's notification style to "Alert" in the Notification Center panel of System Preferences:
  actionButtonTitle           - see [hs.notify:actionButtonTitle](#actionButtonTitle)
  hasActionButton             - see [hs.notify:hasActionButton](#hasActionButton)
  otherButtonTitle            - see [hs.notify:otherButtonTitle](#otherButtonTitle)
  additionalActions           - see [hs.notify:additionalActions](#additionalActions)
  hasReplyButton              - see [hs.notify:hasReplyButton](#hasReplyButton)
  responsePlaceholder         - see [hs.notify:responsePlaceholder](#responsePlaceholder)
  alwaysShowAdditionalActions - see [hs.notify:alwaysShowAdditionalActions](#alwaysShowAdditionalActions)
  withdrawAfter               - see [hs.notify:withdrawAfter](#withdrawAfter)</li></ul> |
| **Returns**                                 | <ul><li>A notification object</li></ul>          |
| **Notes**                                   | <ul><li>A function-tag is a string key which corresponds to a function stored in the [hs.notify.registry](#registry) table with the `hs.notify.register()` function.</li><li>If a notification does not have a `title` attribute set, OS X will not display it, so by default it will be set to "Notification". You can use the `title` key in the attributes table, or call `hs.notify:title()` before displaying the notification to change this.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/notify.lua line 60](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/notify.lua#L60) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify.show(title, subTitle, information[, tag]) -> notification`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Shorthand constructor to create and show simple notifications                                                                     |
| **Parameters**                              | <ul><li>title       - the title for the notification</li><li>subTitle    - the subtitle, or second line, of the notification</li><li>information - the main textual body of the notification</li><li>tag         - a function tag corresponding to a function registered with [hs.notify.register](#register)</li></ul> |
| **Returns**                                 | <ul><li>a notification object</li></ul>          |
| **Notes**                                   | <ul><li>All three textual parameters are required, though they can be empty strings</li><li>This function is really a shorthand for `hs.notify.new(...):send()`</li><li>Notifications created using this function will inherit the default `withdrawAfter` value, which is 5 seconds. To produce persistent notifications you should use `hs.notify.new()` with a `withdrawAfter` attribute of 0.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/notify.lua line 140](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/notify.lua#L140) |

---

#### Methods


### [actionButtonTitle](#actionbuttontitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:actionButtonTitle([buttonTitle]) -> notificationObject | current-setting`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the label of a notification's action button                                                                     |
| **Parameters**                              | <ul><li>buttonTitle - An optional string containing the title for the notification's action button.  If no parameter is provided, then the current setting is returned.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if buttonTitle is present; otherwise the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>The affects of this method only apply if the user has set Hammerspoon notifications to `Alert` in the Notification Center pane of System Preferences</li><li>This value is ignored if [hs.notify:hasReplyButton](#hasReplyButton) is true.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 555](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L555) |

---


### [activationType](#activationtype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:activationType() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns how the notification was activated by the user.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the integer value corresponding to how the notification was activated by the user.  See the table `hs.notify.activationTypes[]` for more information.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 1255](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L1255) |

---


### [actualDeliveryDate](#actualdeliverydate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:actualDeliveryDate() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the date and time when a notification was delivered                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the delivery date/time of the notification, in seconds since the epoch (i.e. 1970-01-01 00:00:00 +0000)</li></ul>          |
| **Notes**                                   | <ul><li>You can turn epoch times into a human readable string or a table of date elements with the `os.date()` function.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 1273](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L1273) |

---


### [additionalActions](#additionalactions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:additionalActions([actionsTable]) -> notificationObject | table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set additional actions which will be displayed for an alert type notification when the user clicks and holds down the action button of the alert.                                                                     |
| **Parameters**                              | <ul><li>an optional table containing an array of strings specifying the additional options to list for the user to select from the notification.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if an argument is present; otherwise the current value</li></ul>          |
| **Notes**                                   | <ul><li>The additional items will be listed in a pop-up menu when the user clicks and holds down the mouse button in the action button of the alert.</li><li>If the user selects one of the additional actions, [hs.notify:activationType](#activationType) will equal `hs.notify.activationTypes.additionalActionClicked`</li><li>See also [hs.notify:additionalActivationAction](#additionalActivationAction)</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 1104](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L1104) |

---


### [additionalActivationAction](#additionalactivationaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:additionalActivationAction() -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Return the additional action that the user selected from an alert type notification that has additional actions available.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>If the notification has additional actions assigned with [hs.notify:additionalActions](#additionalActions) and the user selects one, returns a string containing the selected action; otherwise returns nil.</li></ul>          |
| **Notes**                                   | <ul><li>If the user selects one of the additional actions, [hs.notify:activationType](#activationType) will equal `hs.notify.activationTypes.additionalActionClicked`</li><li>See also [hs.notify:additionalActions](#additionalActions)</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 1165](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L1165) |

---


### [alwaysPresent](#alwayspresent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:alwaysPresent([alwaysPresent]) -> notificationObject | current-setting`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether a notification should be presented even if this overrides Notification Center's decision process.                                                                     |
| **Parameters**                              | <ul><li>alwaysPresent - An optional boolean parameter indicating whether the notification should override Notification Center's decision about whether to present the notification or not. Defaults to true.  If no parameter is provided, then the current setting is returned.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if alwaysPresent is provided; otherwise the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>This does not affect the return value of `hs.notify:presented()` -- that will still reflect the decision of the Notification Center</li><li>Examples of why the users Notification Center would choose not to display a notification would be if Hammerspoon is the currently focussed application, being attached to a projector, or the user having set Do Not Disturb.</li><li></li><li>if the notification was not created by this module, this method will return nil</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 673](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L673) |

---


### [alwaysShowAdditionalActions](#alwaysshowadditionalactions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:alwaysShowAdditionalActions([state]) -> notificationObject | boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether an alert notification should always show an alternate action menu.                                                                     |
| **Parameters**                              | <ul><li>state - An optional boolean, default false, indicating whether the notification should always show an alternate action menu.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if an argument is present; otherwise the current value.</li></ul>          |
| **Notes**                                   | <ul><li>This method has no effect unless the user has set Hammerspoon notifications to `Alert` in the Notification Center pane of System Preferences.</li><li>[hs.notify:additionalActions](#additionalActions) must also be used for this method to have any effect.</li><li>**WARNING:** This method uses a private API. It could break at any time. Please file an issue if it does.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 950](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L950) |

---


### [autoWithdraw](#autowithdraw)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:autoWithdraw([shouldWithdraw]) -> notificationObject | current-setting`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether a notification should automatically withdraw once activated                                                                     |
| **Parameters**                              | <ul><li>shouldWithdraw - An optional boolean indicating whether the notification should automatically withdraw. Defaults to true.  If no parameter is provided, then the current setting is returned.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if shouldWithdraw is present; otherwise the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>This method has no effect if the user has set Hammerspoon notifications to `Alert` in the Notification Center pane of System Preferences: clicking on either the action or other button will clear the notification automatically.</li><li>If a notification which was created before your last reload (or restart) of Hammerspoon and is clicked upon before hs.notify has been loaded into memory, this setting will not be honored because the initial application delegate is not aware of this option and is set to automatically withdraw all notifications which are acted upon.</li><li></li><li>if the notification was not created by this module, this method will return nil</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 767](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L767) |

---


### [contentImage](#contentimage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:contentImage([image]) -> notificationObject | current-setting`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set a notification's content image.                                                                     |
| **Parameters**                              | <ul><li>image - An optional hs.image parameter containing the image to display. Defaults to nil. If no parameter is provided, then the current setting is returned.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if image is provided; otherwise the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>See hs.image for details on how to specify or define an image</li><li>This method is only supported in OS X 10.9 or greater. A warning will be displayed in the console and the method will be treated as a no-op if used on an unsupported system.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/notify.lua line 273](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/notify.lua#L273) |

---


### [delivered](#delivered)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:delivered() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether the notification has been delivered to the Notification Center                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean indicating whether the notification has been delivered to the users Notification Center</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 1213](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L1213) |

---


### [getFunctionTag](#getfunctiontag)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:getFunctionTag() -> functiontag`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Return the name of the function tag the notification will call when activated.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The function tag for this notification as a string.</li></ul>          |
| **Notes**                                   | <ul><li>This tag should correspond to a function in [hs.notify.registry](#registry) and can be used to either add a replacement with `hs.notify.register(...)` or remove it with `hs.notify.unregister(...)`</li><li></li><li>if the notification was not created by this module, this method will return nil</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 737](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L737) |

---


### [hasActionButton](#hasactionbutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:hasActionButton([hasButton]) -> notificationObject | current-setting`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the presence of an action button in a notification                                                                     |
| **Parameters**                              | <ul><li>hasButton - An optional boolean indicating whether an action button should be present.  If no parameter is provided, then the current setting is returned.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if hasButton is present; otherwise the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>The affects of this method only apply if the user has set Hammerspoon notifications to `Alert` in the Notification Center pane of System Preferences</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 637](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L637) |

---


### [hasReplyButton](#hasreplybutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:hasReplyButton([state]) -> notificationObject | boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether an alert notification has a "Reply" button for additional user input.                                                                     |
| **Parameters**                              | <ul><li>state - An optional boolean, default false, indicating whether the notification should include a reply button for additional user input.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if an argument is present; otherwise the current value</li></ul>          |
| **Notes**                                   | <ul><li>This method has no effect unless the user has set Hammerspoon notifications to `Alert` in the Notification Center pane of System Preferences.</li><li>[hs.notify:hasActionButton](#hasActionButton) must also be true or the "Reply" button will not be displayed.</li><li>If this is set to true, the action button will be "Reply" even if you have set another one with [hs.notify:actionButtonTitle](#actionButtonTitle).</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 912](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L912) |

---


### [informativeText](#informativetext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:informativeText([informativeText]) -> notificationObject | current-setting`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the informative text of a notification                                                                     |
| **Parameters**                              | <ul><li>informativeText - An optional string containing the informative text to be set on the notification object. This can be an empty string. If `nil` is passed, any existing informative text will be removed.  If no parameter is provided, then the current setting is returned.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if informativeText is present; otherwise the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 518](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L518) |

---


### [otherButtonTitle](#otherbuttontitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:otherButtonTitle([buttonTitle]) -> notificationObject | current-setting`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the label of a notification's other button                                                                     |
| **Parameters**                              | <ul><li>buttonTitle - An optional string containing the title for the notification's other button.  If no parameter is provided, then the current setting is returned.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if buttonTitle is present; otherwise the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>The affects of this method only apply if the user has set Hammerspoon notifications to `Alert` in the Notification Center pane of System Preferences</li><li>Due to OSX limitations, it is NOT possible to get a callback for this button.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 596](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L596) |

---


### [presented](#presented)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:presented() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether the users Notification Center decided to display the notification                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean indicating whether the users Notification Center decided to display the notification</li></ul>          |
| **Notes**                                   | <ul><li>Examples of why the users Notification Center would choose not to display a notification would be if Hammerspoon is the currently focussed application, being attached to a projector, or the user having set Do Not Disturb.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 1192](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L1192) |

---


### [response](#response)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:response() -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the users input from an alert type notification with a reply button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>If the notification has a reply button and the user clicks on it, returns a string containing the user input (may be an empty string); otherwise returns nil.</li></ul>          |
| **Notes**                                   | <ul><li>[hs.notify:activationType](#activationType) will equal `hs.notify.activationTypes.replied` if the user clicked on the Reply button and then clicks on Send.</li><li>See also [hs.notify:hasReplyButton](#hasReplyButton)</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 1076](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L1076) |

---


### [responsePlaceholder](#responseplaceholder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:responsePlaceholder([string]) -> notificationObject | string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set a placeholder string for alert type notifications with a reply button.                                                                     |
| **Parameters**                              | <ul><li>`string` - an optional string specifying placeholder text to display in the reply box before the user has types anything in an alert type notification with a reply button.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if an argument is present; otherwise the current value</li></ul>          |
| **Notes**                                   | <ul><li>In macOS 10.13, this text appears so light that it is almost unreadable; so far no workaround has been found.</li><li>See also [hs.notify:hasReplyButton](#hasReplyButton)</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 1035](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L1035) |

---


### [schedule](#schedule)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:schedule(date) -> notificationObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Schedules a notification for delivery in the future.                                                                     |
| **Parameters**                              | <ul><li>date - the date the notification should be delivered to the users Notification Center specified as the number of seconds since 1970-01-01 00:00:00Z or as a string in rfc3339 format: "YYYY-MM-DD[T]HH:MM:SS[Z]".</li></ul> |
| **Returns**                                 | <ul><li>The notification object</li></ul>          |
| **Notes**                                   | <ul><li>See also hs.notify:send()</li><li>hs.settings.dateFormat specifies a lua format string which can be used with `os.date()` to properly present the date and time as a string for use with this method.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 346](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L346) |

---


### [send](#send)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:send() -> notificationObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Delivers the notification immediately to the users Notification Center.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The notification object</li></ul>          |
| **Notes**                                   | <ul><li>See also hs.notify:schedule()</li><li>If a notification has been modified, then this will resend it.</li><li>You can invoke this multiple times if you wish to repeat the same notification.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 312](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L312) |

---


### [setIdImage](#setidimage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:setIdImage(image[, withBorder]) -> notificationObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set a notification's identification image (replace the Hammerspoon icon with a custom image)                                                                     |
| **Parameters**                              | <ul><li>image - An `hs.image` object, a string containing an image path, or a string defining an ASCIImage</li><li>withBorder - An optional boolean to give the notification image a border. Defaults to `false`</li></ul> |
| **Returns**                                 | <ul><li>The notification object</li></ul>          |
| **Notes**                                   | <ul><li>See hs.image for details on how to specify or define an image</li><li>**WARNING**: This method uses a private API. It could break at any time. Please file an issue if it does</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/notify.lua line 309](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/notify.lua#L309) |

---


### [soundName](#soundname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:soundName([soundName]) -> notificationObject | current-setting`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the sound for a notification                                                                     |
| **Parameters**                              | <ul><li>soundName - An optional string containing the name of a sound to play with the notification. If `nil`, no sound will be played. Defaults to `nil`.  If no parameter is provided, then the current setting is returned.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if soundName is present; otherwise the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>Sounds will first be matched against the names of system sounds. If no matches can be found, they will then be searched for in the following paths, in order:</li><li> `~/Library/Sounds`</li><li> `/Library/Sounds`</li><li> `/Network/Sounds`</li><li> `/System/Library/Sounds`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 811](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L811) |

---


### [subTitle](#subtitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:subTitle([subtitleText]) -> notificationObject | current-setting`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the subtitle of a notification                                                                     |
| **Parameters**                              | <ul><li>subtitleText - An optional string containing the subtitle to be set on the notification object. This can be an empty string. If `nil` is passed, any existing subtitle will be removed.  If no parameter is provided, then the current setting is returned.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if subtitleText is present; otherwise the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 481](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L481) |

---


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:title([titleText]) -> notificationObject | current-setting`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the title of a notification                                                                     |
| **Parameters**                              | <ul><li>titleText - An optional string containing the title to be set on the notification object.  The default value is "Notification".  If `nil` is passed, then the title is set to the empty string.  If no parameter is provided, then the current setting is returned.</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if titleText is present; otherwise the current setting.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 444](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L444) |

---


### [withdraw](#withdraw)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:withdraw() -> notificationObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Withdraws a delivered notification from the Notification Center.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The notification object</li><li>This method allows you to unlock a dispatched notification so that it can be modified and resent.</li><li>if the notification was not created by this module, it will still be withdrawn if possible</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 406](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L406) |

---


### [withdrawAfter](#withdrawafter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.notify:withdrawAfter([seconds]) -> notificationObject | number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the number of seconds after which to automatically withdraw a notification                                                                     |
| **Parameters**                              | <ul><li>seconds - An optional number, default 5, of seconds after which to withdraw a notification. A value of 0 will not withdraw a notification automatically</li></ul> |
| **Returns**                                 | <ul><li>The notification object, if an argument is present; otherwise the current value.</li></ul>          |
| **Notes**                                   | <ul><li>While this setting applies to both Banner and Alert styles of notifications, it is functionally meaningless for Banner styles</li><li>A value of 0 will disable auto-withdrawal</li><li></li><li>if the notification was not created by this module, this method will return nil</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/notify/libnotify.m line 992](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/notify/libnotify.m#L992) |

---


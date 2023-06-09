# cp.ui.notifier

Supports long-lived 'AX' notifiers. Configure the application to watch, the
function that provides the `axuielement` and then register for the type of
notification to watch, along with a function that will get triggered.

For example:

```lua
local notifier = require("cp.ui.notifier")
local function finder() ... end -- returns the axuielement
local o = notifier.new("com.apple.FinalCut", finder)
o:watchFor("AXValueChanged", function(notifier, element, notification, details) ... end)
o:start()
```

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [notifiersForBundleID](#notifiersforbundleid)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [app](#app)
 * [bundleID](#bundleid)
 * [currentElement](#currentelement)
 * [debugging](#debugging)
 * [pid](#pid)
 * [reset](#reset)
 * [start](#start)
 * [update](#update)
 * [watchAll](#watchall)
 * [watchFor](#watchfor)


---

## API Documentation

#### Functions


### [notifiersForBundleID](#notifiersforbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.notifier.notifiersForBundleID(bundleID) -> table of cp.ui.notifier`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the list of `cp.ui.notifier` instances that have been created for the specified `Bundle ID`.                                                                     |
| **Parameters**                              | <ul><li>bundleID          - The application Bundle ID being observed. E.g. "com.apple.FinalCut".</li></ul> |
| **Returns**                                 | <ul><li>A table of `cp.ui.notifier` instances.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/notifier.lua line 160](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/notifier.lua#L160){target="_blank"} |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.notifier.new(bundleID, elementFinderFn) -> cp.ui.notifier`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `cp.ui.notifier` instance with the specified bundle ID and a function that returns the element being observed.                                                                     |
| **Parameters**                              | <ul><li>bundleID          - The application Bundle ID being observed. E.g. "com.apple.FinalCut".</li><li>elementFinderFn   - The function that will return the `axuielement` to observe.</li></ul> |
| **Returns**                                 | <ul><li>A new `cp.ui.notifier` instance.</li></ul>          |
| **Notes**                                   | <ul><li>The function has a signature of `function() -> hs.axuielement`.</li><li>It simply returns the current element being observed, or `nil` if none is available.</li><li>The function will be called multiple times over the life of the notifier.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/notifier.lua line 126](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/notifier.lua#L126){target="_blank"} |

---

#### Methods


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.notifier:app() -> hs.application`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current `hs.application` instance for the app this notifier tracks. May be `nil` if the application is not running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The running `hs.application` for the notifier's `bundleID`, or `nil`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/notifier.lua line 294](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/notifier.lua#L294){target="_blank"} |

---


### [bundleID](#bundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.notifier:bundleID()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the application 'bundle ID' that this notifier is tracking.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The application 'bundle ID' string (e.g. "com.apple.FinalCut")</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/notifier.lua line 281](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/notifier.lua#L281){target="_blank"} |

---


### [currentElement](#currentelement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.notifier:currentElement() -> hs.axuielement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current `axuielement` being observed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `axuielement`, or `nil` if not available.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/notifier.lua line 173](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/notifier.lua#L173){target="_blank"} |

---


### [debugging](#debugging)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.notifier:debugging([enabled]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enables/disables and reports current debugging status. When enabled, a message will be output for each known notification received.                                                                     |
| **Parameters**                              | <ul><li>enabled  - If `true`, debugging notifications will be emitted. If `false`, it will be disabled. If not provided, no change is made.</li></ul> |
| **Returns**                                 | <ul><li>`true` if currently debugging, `false` otherwise.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/notifier.lua line 619](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/notifier.lua#L619){target="_blank"} |

---


### [pid](#pid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.notifier:pid() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the PID for the application being observed, or `nil` if it's not running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The PID, or `nil`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/notifier.lua line 329](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/notifier.lua#L329){target="_blank"} |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.notifier:reset() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resets the notifier                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/notifier.lua line 581](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/notifier.lua#L581){target="_blank"} |

---


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.notifier:start() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops notifying watchers when events happen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.ui.notifier` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/notifier.lua line 564](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/notifier.lua#L564){target="_blank"} |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.notifier:update([force]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Updates any watchers to use the current `axuielement`.                                                                     |
| **Parameters**                              | <ul><li>force     - If `true`, the notifier will be updated even if the element has not changed since the last update. Defaults to `false`.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.ui.notifier` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/notifier.lua line 489](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/notifier.lua#L489){target="_blank"} |

---


### [watchAll](#watchall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.notifier:watchAll(callbackFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Registers the callback as a watcher for all standard notifications for the current `axuielement`.                                                                     |
| **Parameters**                              | <ul><li>callbackFn   - the function to call when the notification happens.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.ui.notifier` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This should generally just be used for debugging purposes. It's best to use `watchFor`[#watchFor] in most cases.</li><li>The callback function should expect 3 arguments and return none. The arguments passed to the callback will be as follows:</li><li>    the `hs.axuielement` object for the accessibility element which generated the notification.</li><li>    a string with the notification type.</li><li>    A table containing key-value pairs with more information about the notification, if provided. Commonly this will be an empty table.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/notifier.lua line 234](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/notifier.lua#L234){target="_blank"} |

---


### [watchFor](#watchfor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.notifier:watchFor(notification, callbackFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Registers a function to get called whenever the specified notification type is triggered for the current `axuielement`.                                                                     |
| **Parameters**                              | <ul><li>notifications     - The `string` or `table of strings` with the notification type(s) to watch for (e.g. "AXValueChanged").</li><li>callbackFn        - The function to call when the matching notification is happens.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.ui.notifier` instance.</li></ul>          |
| **Notes**                                   | <ul><li>The callback function should expect 3 arguments and return none. The arguments passed to the callback will be as follows:</li><li>    the `hs.axuielement` object for the accessibility element which generated the notification.</li><li>    a string with the notification type.</li><li>    A table containing key-value pairs with more information about the notification, if provided. Commonly this will be an empty table.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/notifier.lua line 186](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/notifier.lua#L186){target="_blank"} |

---


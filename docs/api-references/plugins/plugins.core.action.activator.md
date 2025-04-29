# plugins.core.action.activator

This module provides provides a way of activating choices provided by action handlers.
It also provide support for making a particular action a favourite, returning
results based on popularity, and completely hiding particular actions, or categories of action.

Activators are accessed via the [action manager](plugins.core.action.manager.md) like so:

```lua
local activator = actionManager.getActivator("foobar")
activator:disableHandler("videoEffect")
activator:show()
```

Any changes made to the settings of a finder (such as calling `disableHandler` above) will
be preserved for future loads of the finder with the same ID. They are also local
to instances of this activator, so disabling "videoEffect" in the "foobar" activator
will not affect the "yadayada" activator.

---

## API Overview
**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [activeHandlers](#activehandlers)
 * [allowedHandlers](#allowedhandlers)
 * [configurable](#configurable)
 * [favoriteChoices](#favoritechoices)
 * [hiddenChoices](#hiddenchoices)
 * [lastQueryRemembered](#lastqueryremembered)
 * [lastQueryValue](#lastqueryvalue)
 * [lastRows](#lastrows)
 * [popularChoices](#popularchoices)
 * [query](#query)
 * [reducedTransparency](#reducedtransparency)
 * [searchSubText](#searchsubtext)
 * [showHidden](#showhidden)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [activate](#activate)
 * [activeChoices](#activechoices)
 * [allChoices](#allchoices)
 * [allowHandlers](#allowhandlers)
 * [chooser](#chooser)
 * [disableAllHandlers](#disableallhandlers)
 * [disableHandler](#disablehandler)
 * [enableAllHandlers](#enableallhandlers)
 * [enableHandler](#enablehandler)
 * [enableHandlers](#enablehandlers)
 * [favoriteChoice](#favoritechoice)
 * [findChoice](#findchoice)
 * [getActiveHandler](#getactivehandler)
 * [getPopularity](#getpopularity)
 * [hide](#hide)
 * [hideChoice](#hidechoice)
 * [id](#id)
 * [incPopularity](#incpopularity)
 * [isDisabledHandler](#isdisabledhandler)
 * [isHiddenChoice](#ishiddenchoice)
 * [isVisible](#isvisible)
 * [onActivate](#onactivate)
 * [preloadChoices](#preloadchoices)
 * [refresh](#refresh)
 * [refreshChooser](#refreshchooser)
 * [rightClickAction](#rightclickaction)
 * [rightClickMain](#rightclickmain)
 * [setBundleID](#setbundleid)
 * [show](#show)
 * [sortChoices](#sortchoices)
 * [toggle](#toggle)
 * [toolbarIcons](#toolbaricons)
 * [unfavoriteChoice](#unfavoritechoice)
 * [unhideChoice](#unhidechoice)
 * [updateSelectedToolbarIcon](#updateselectedtoolbaricon)


---

## API Documentation

#### Fields


### [activeHandlers](#activehandlers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator.activeHandlers <cp.prop: table of handlers>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains the table of active handlers. A handler is active if it is both allowed and enabled.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 214](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L214) |

---


### [allowedHandlers](#allowedhandlers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:allowedHandlers <cp.prop: table of handlers; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains all handlers that are allowed in this activator.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 185](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L185) |

---


### [configurable](#configurable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator.configurable <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If `true` (the default), the activator can be configured by right-clicking on the main chooser.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 275](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L275) |

---


### [favoriteChoices](#favoritechoices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator.favoriteChoices <cp.prop: table of booleans>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains the set of choice IDs which are favorites in this activator, mapped to a boolean value.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 257](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L257) |

---


### [hiddenChoices](#hiddenchoices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator.hiddenChoices <cp.prop: table of booleans>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains the set of choice IDs which are hidden in this activator, mapped to a boolean value.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 249](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L249) |

---


### [lastQueryRemembered](#lastqueryremembered)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator.lastQueryRemembered <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If `true`, remember the last query.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 141](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L141) |

---


### [lastQueryValue](#lastqueryvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator.lastQueryValue <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last query value.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 148](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L148) |

---


### [lastRows](#lastrows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator.lastRows <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The last width of the Search Console. Defaults to 40.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 162](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L162) |

---


### [popularChoices](#popularchoices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator.popularChoices <cp.prop: table of integers>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Keeps track of how popular particular choices are. Returns a table of choice IDs                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 266](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L266) |

---


### [query](#query)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator.query <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current "query" value for the activator.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 241](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L241) |

---


### [reducedTransparency](#reducedtransparency)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator.reducedTransparency <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A property which will be true if the 'reduce transparency' mode is enabled.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 984](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L984) |

---


### [searchSubText](#searchsubtext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator.searchSubText <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If `true`, allow users to search the subtext value.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 134](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L134) |

---


### [showHidden](#showhidden)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator.showHidden <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If `true`, hidden items are shown.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 169](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L169) |

---

#### Methods


### [activate](#activate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:activate(result) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Triggered when the chooser is closed.                                                                     |
| **Parameters**                              | <ul><li>`result`      - The result from the chooser.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 1518](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L1518) |

---


### [activeChoices](#activechoices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:activeChoices() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table with active choices. If a `query` is set, only choices containing the provided substring are returned. If [showHidden](#showHidden) is set to `true`  hidden items are returned, otherwise they are not.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Table of choices that can be displayed by an `hs.chooser`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 815](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L815) |

---


### [allChoices](#allchoices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:allChoices() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table of all available choices, even if hidden. Choices from disabled action handlers are not included.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Table of choices that can be displayed by an `hs.chooser`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 799](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L799) |

---


### [allowHandlers](#allowhandlers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:allowHandlers(...) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies that only the handlers with the specified IDs will be active in this activator. By default all handlers are allowed.                                                                     |
| **Parameters**                              | <ul><li>`...`     - The list of Handler ID strings to allow.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 326](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L326) |

---


### [chooser](#chooser)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:chooser() -> `hs.chooser` object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a hs.chooser                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `hs.chooser` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 1069](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L1069) |

---


### [disableAllHandlers](#disableallhandlers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:disableAllHandlers([groupID]) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Disables the all allowed handlers.                                                                     |
| **Parameters**                              | <ul><li>groupID - An optional group ID to only disable all handlers of a specific group</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 455](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L455) |

---


### [disableHandler](#disablehandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:disableHandler(id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Disables the handler with the specified ID.                                                                     |
| **Parameters**                              | <ul><li>`id`      - The unique action handler ID.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the handler exists and was disabled.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 363](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L363) |

---


### [enableAllHandlers](#enableallhandlers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:enableAllHandlers([groupID]) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enables the all allowed handlers.                                                                     |
| **Parameters**                              | <ul><li>groupID - An optional group ID to only enable all handlers of a specific group</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 428](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L428) |

---


### [enableHandler](#enablehandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:enableHandler(id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enables the handler with the specified ID.                                                                     |
| **Parameters**                              | <ul><li>`id`      - The unique action handler ID.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the handler exists and was enabled.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 383](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L383) |

---


### [enableHandlers](#enablehandlers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:enableHandlers(groupID) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enables the all allowed handlers of a specific group, and disables the everything else.                                                                     |
| **Parameters**                              | <ul><li>groupID - The group ID to enable</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 403](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L403) |

---


### [favoriteChoice](#favoritechoice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:favoriteChoice(id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Marks the choice with the specified ID as a favorite.                                                                     |
| **Parameters**                              | <ul><li>`id`          - The choice ID to favorite.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successfully favorited otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 601](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L601) |

---


### [findChoice](#findchoice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:findChoice(id) -> choice`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a choice                                                                     |
| **Parameters**                              | <ul><li>`id`          - The choice ID.</li></ul> |
| **Returns**                                 | <ul><li>The choice or `nil` if not found</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 500](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L500) |

---


### [getActiveHandler](#getactivehandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:getActiveHandler(id) -> handler`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the active handler with the specified ID, or `nil` if not available.                                                                     |
| **Parameters**                              | <ul><li>`id`      - The Handler ID</li></ul> |
| **Returns**                                 | <ul><li>The action handler, or `nil`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 313](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L313) |

---


### [getPopularity](#getpopularity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:getPopularity(id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the popularity of the specified choice.                                                                     |
| **Parameters**                              | <ul><li>`id`          - The choice ID to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>The number of times the choice has been executed.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 652](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L652) |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:hide() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides a chooser listing the available actions.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 1432](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L1432) |

---


### [hideChoice](#hidechoice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:hideChoice(id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the choice with the specified ID.                                                                     |
| **Parameters**                              | <ul><li>`id`          - The choice ID to hide.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successfully hidden otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 518](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L518) |

---


### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the activator's unique ID.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The activator ID.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 300](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L300) |

---


### [incPopularity](#incpopularity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:incPopularity(choice, id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Increases the popularity of the specified choice.                                                                     |
| **Parameters**                              | <ul><li>`choice`      - The choice.</li><li>`id`          - The choice ID to popularise.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successfully unfavourited, otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 669](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L669) |

---


### [isDisabledHandler](#isdisabledhandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:isDisabledHandler(id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns `true` if the specified handler is disabled.                                                                     |
| **Parameters**                              | <ul><li>`id`          - The handler ID.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the handler is disabled.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 486](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L486) |

---


### [isHiddenChoice](#ishiddenchoice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:isHiddenChoice(id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the specified choice is hidden.                                                                     |
| **Parameters**                              | <ul><li>`id`          - The choice ID to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if currently hidden.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 587](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L587) |

---


### [isVisible](#isvisible)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:isVisible() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the chooser is currently displayed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, `true` if the chooser is displayed on screen, `false` if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 1329](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L1329) |

---


### [onActivate](#onactivate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:onActivate(activateFn) -> activator`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Registers the provided function to handle 'activate' actions, when the user selects an item in the main chooser.                                                                     |
| **Parameters**                              | <ul><li>`activateFn`      - The function to call when an item is activated.</li></ul> |
| **Returns**                                 | <ul><li>The activator.</li></ul>          |
| **Notes**                                   | <ul><li>By default, the activator will 'execute' the action, but you can choose to provide an alternative action. It will get passed the `handler` object and the `action` table. Eg:</li><li></li><li>```lua</li><li>activator:onActivate(function(handler, action))</li><li>```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 1477](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L1477) |

---


### [preloadChoices](#preloadchoices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:preloadChoices([afterSeconds]) -> activator`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates the activator should preload the choices after a number of seconds. Defaults to 0 seconds if no value is provided.                                                                     |
| **Parameters**                              | <ul><li>`afterSeconds`    - The number of seconds to wait before preloading.</li></ul> |
| **Returns**                                 | <ul><li>The activator.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 282](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L282) |

---


### [refresh](#refresh)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:refresh() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears the existing set of choices and requests new ones from enabled action handlers.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 971](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L971) |

---


### [refreshChooser](#refreshchooser)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:refreshChooser() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Refreshes a Chooser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 1310](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L1310) |

---


### [rightClickAction](#rightclickaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:rightClickAction(index) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Triggered when a user right clicks on a chooser.                                                                     |
| **Parameters**                              | <ul><li>`index`      - The row the right click occurred in or 0 if there is currently no selectable row where the right click occurred.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 1560](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L1560) |

---


### [rightClickMain](#rightclickmain)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:rightClickMain(index) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Triggered when a user right clicks on a chooser.                                                                     |
| **Parameters**                              | <ul><li>`index`      - The row the right click occurred in or 0 if there is currently no selectable row where the right click occurred.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 1547](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L1547) |

---


### [setBundleID](#setbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:setBundleID(bundleID, icon, displayName) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets a bundle ID to use for filtering purposes.                                                                     |
| **Parameters**                              | <ul><li>bundleID - An application bundle ID as string.</li><li>icon - An application icon as an `hs.image` object.</li><li>displayName - The application display name as a string.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 109](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L109) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:show() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows a chooser listing the available actions. When selected by the user, the [onActivate](#onActivate) function is called.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 1348](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L1348) |

---


### [sortChoices](#sortchoices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:sortChoices() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sorts the current set of choices in the activator. It takes into account whether it's a favorite (first priority) and its overall popularity.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the action executed successfully, otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 783](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L783) |

---


### [toggle](#toggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:toggle() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows or hides the chooser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 1460](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L1460) |

---


### [toolbarIcons](#toolbaricons)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:toolbarIcons(table) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets which sections have an icon on the toolbar.                                                                     |
| **Parameters**                              | <ul><li>table - A table containing paths to all the toolbar icons. The key should be the handler ID, and the value should be the path to the icon.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 348](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L348) |

---


### [unfavoriteChoice](#unfavoritechoice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:unfavoriteChoice(id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Marks the choice with the specified ID as not a favorite.                                                                     |
| **Parameters**                              | <ul><li>`id`          - The choice ID to unfavorite.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successfully unfavorited.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 627](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L627) |

---


### [unhideChoice](#unhidechoice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:unhideChoice(id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Reveals the choice with the specified ID.                                                                     |
| **Parameters**                              | <ul><li>`id`          - The choice ID to hide.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successfully unhidden otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 547](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L547) |

---


### [updateSelectedToolbarIcon](#updateselectedtoolbaricon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.action.activator:updateSelectedToolbarIcon() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Updates the selected toolbar icon.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/action/manager/activator.lua line 991](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/action/manager/activator.lua#L991) |

---


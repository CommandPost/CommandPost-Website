# cp.watcher

This extension provides support for setting up 'event watchers'.

For example, if you want to allow interested parties to watch for 'update'
events, you might have something like this:

```lua
local thing = {}

thing.watchers = watcher.new('update')

thing.watch(events)
	return thing.watchers:watch(events)
end

thing.update(value)
	thing.value = value
	thing.watchers:notify('update', value)
end
```

Then, your other code could get notifications like so:

```lua
thing.watch({
	update = function(value) print "New value is "..value end
})
```

Then, whenever `thing.update(xxx)` is called, the watcher will output `"New value is xxx"`.

## API Overview
* Functions - API calls offered directly by the extension
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [events](#events)
 * [getCount](#getCount)
 * [notify](#notify)
 * [unwatch](#unwatch)
 * [watch](#watch)

## API Documentation

### Functions

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.watcher.new(...) -> watcher`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Constructs a new watcher instance.                                                                     |
| **Parameters**                              | <ul><li>`...` - The list of event name strings supported by the watcher.</li></ul> |
| **Returns**                                 | <ul><li>a new watcher instance</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [events](#events)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.watcher:events()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a list of the event names supported by this watcher.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The table of event names.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getCount](#getCount)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.watcher:getCount()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the number of watchers currently registered.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The number of watchers.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [notify](#notify)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.watcher:notify(type, ...) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Notifies watchers of the specified event type.                                                                     |
| **Parameters**                              | <ul><li>`type`	- The event type to notify. Must be one of the supported events.</li><li>`...`	- These parameters are passed directly to the event watcher functions.</li></ul> |
| **Returns**                                 | <ul><li>Nothing.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [unwatch](#unwatch)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.watcher:unwatch(id) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Removes the watchers which were added with the specified ID.                                                                     |
| **Parameters**                              | <ul><li>`id`		- The unique ID returned from `watch`.</li></ul> |
| **Returns**                                 | <ul><li>`true` if a watcher with the specified ID exists and was successfully removed.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [watch](#watch)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.watcher:watch(events) -> id`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a watcher for the specified events.                                                                     |
| **Parameters**                              | <ul><li>`events`		- A table of functions, one for each event to watch.</li></ul> |
| **Returns**                                 | <ul><li>A unique ID that can be passed to `unwatch` to stop watching.</li></ul>          |
| **Notes**                                   | <ul></ul>                |


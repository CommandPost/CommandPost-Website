# cp.ui.Group

UI Group.

## Submodules
 * [cp.ui.Group.Builder](cp.ui.Group.Builder.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [containing](#containing)
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [Group](#Group)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [children](#children)
 * [childrenUI](#childrenUI)

## API Documentation

### Functions

| [containing](#containing)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Group:containing(...) -> cp.ui.Group.Builder`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `Builder` with the `Element` initializers for the children in the group.                                                                     |
| **Parameters**                              | <ul><li>... - A variable list of `Element` initializers, one for each child.</li></ul> |
| **Returns**                                 | <ul><li>The `Group.Builder`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Group.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [Group](#Group)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Group(parent, uiFinder[, contentsClass]) -> Alert`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Group` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li><li>uiFinder - A function which will return the `hs.axuielement` when available.</li><li>--- - Anything else</li></ul> |
| **Returns**                                 | <ul><li>A new `Group` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [children](#children)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Group.children <table of cp.ui.Element>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains the list of `Element` children of the group.                                                                     |

| [childrenUI](#childrenUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Group.childrenUI <cp.prop: table of axuielement>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Contains the list of `axuielement` children of the group.                                                                     |

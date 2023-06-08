# [docs](index.md) » plugins.finalcutpro.feedback.bugreport
---

Sends Apple a Bug Report or Feature Request for Final Cut Pro.

## API Overview
* Constants - Useful values which cannot be changed
 * [DEFAULT_HEIGHT](#DEFAULT_HEIGHT)
 * [DEFAULT_WIDTH](#DEFAULT_WIDTH)
* Functions - API calls offered directly by the extension
 * [open](#open)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [position](#position)

## API Documentation

### Constants

| [DEFAULT_HEIGHT](#DEFAULT_HEIGHT)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.feedback.bugreport.DEFAULT_HEIGHT -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Window Height                                                                     |

| [DEFAULT_WIDTH](#DEFAULT_WIDTH)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.feedback.bugreport.DEFAULT_WIDTH -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Window Width                                                                     |

### Functions

| [open](#open)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.feedback.bugreport.open(bugReport) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Opens Final Cut Pro Feedback Screen                                                                     |
| **Parameters**                              | <ul><li>bugReport - Is it a bug report or an enhancement request?</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [position](#position)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.feedback.bugreport.position -> <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Webview Position                                                                     |


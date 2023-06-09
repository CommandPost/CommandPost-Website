# plugins.finalcutpro.workflowextension

Workflow Extension Helper

Commands that can be SENT to the Workflow Extension:

 PING           - Send a ping
 INCR f         - Increment by Frame        (where f is number of frames)
 DECR f         - Decrement by Frame        (where f is number of frames)
 GOTO s         - Goto Timeline Position    (where s is number of seconds)


 Commands that can be RECEIVED from the Workflow Extension:

 DONE           - Connection successful
 DEAD           - Server is shutting down
 PONG           - Recieve a pong
 PLHD s         - The playhead time has changed                (where s is playhead position in seconds)

 SEQC sequenceName || startTime || duration || frameDuration || container || timecodeFormat || objectType
    - The active sequence has changed
      (sequenceName is a string)
      (startTime in seconds)
      (duration in seconds)
      (frameDuration in seconds)
      (container as a string)
      (timecodeFormat as a string: DropFrame, NonDropFrame, Unspecified or Unknown)
      (objectType as a string: Event, Library, Project, Sequence or Unknown)

 RNGC startTime || duration
    - The active sequence time range has changed
      (startTime in seconds)
      (duration in seconds)

## API Overview
* Variables - Configurable values
 * [connected](#connected)
 * [lastPlayheadPosition](#lastPlayheadPosition)
 * [skimmingRestoreTimer](#skimmingRestoreTimer)
 * [wasSkimmingEnabled](#wasSkimmingEnabled)
* Functions - API calls offered directly by the extension
 * [callback](#callback)
 * [connect](#connect)
 * [connectionCallback](#connectionCallback)
 * [decrementPlayhead](#decrementPlayhead)
 * [disconnect](#disconnect)
 * [forcefullyInstall](#forcefullyInstall)
 * [incrementPlayhead](#incrementPlayhead)
 * [movePlayheadToSeconds](#movePlayheadToSeconds)
 * [ping](#ping)
 * [repositionWorkflowExtension](#repositionWorkflowExtension)
 * [sendCommand](#sendCommand)
 * [setupActions](#setupActions)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [hasWorkflowExtensionBeenAddedVersion](#hasWorkflowExtensionBeenAddedVersion)
 * [hasWorkflowExtensionBeenMovedVersion](#hasWorkflowExtensionBeenMovedVersion)

## API Documentation

### Variables

| [connected](#connected)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.connected -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is CommandPost connecting to the Workflow Extension?                                                                     |

| [lastPlayheadPosition](#lastPlayheadPosition)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.lastPlayheadPosition -> string`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The last playhead position.                                                                     |

| [skimmingRestoreTimer](#skimmingRestoreTimer)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.skimmingRestoreTimer -> hs.timer.delayed`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Delayed Timer to Restore the Skimming Feature (if required)                                                                     |

| [wasSkimmingEnabled](#wasSkimmingEnabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.wasSkimmingEnabled -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Was the Skimming Feature enabled?                                                                     |

### Functions

| [callback](#callback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.callback() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Triggers when the Socket receives data.                                                                     |
| **Parameters**                              | <ul><li>data - The incoming data.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [connect](#connect)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.connect() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Connect to the Workflow Extension Socket Server.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [connectionCallback](#connectionCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.connectionCallback() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Triggers when the Socket makes a connection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [decrementPlayhead](#decrementPlayhead)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.decrementPlayhead(frames) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Decrements the Final Cut Pro playhead via the Workflow Extension                                                                     |
| **Parameters**                              | <ul><li>frames - The amount of frames to increment by</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [disconnect](#disconnect)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.disconnect() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Disconnects from the Workflow Extension Socket Server.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [forcefullyInstall](#forcefullyInstall)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.forcefullyInstall() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Forcefully installs the Workflow Extension.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [incrementPlayhead](#incrementPlayhead)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.incrementPlayhead(frames) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Increments the Final Cut Pro playhead via the Workflow Extension                                                                     |
| **Parameters**                              | <ul><li>frames - The amount of frames to increment by</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [movePlayheadToSeconds](#movePlayheadToSeconds)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.movePlayheadToSeconds(seconds) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Moves the Final Cut Pro playhead via the Workflow Extension                                                                     |
| **Parameters**                              | <ul><li>seconds - The value you want the timeline playhead to move to in seconds</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [ping](#ping)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.ping() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends a ping to the Workflow Extension                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [repositionWorkflowExtension](#repositionWorkflowExtension)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.repositionWorkflowExtension() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Repositions the Workflow Extension.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [sendCommand](#sendCommand)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.sendCommand(command) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends a command to the Workflow                                                                     |
| **Parameters**                              | <ul><li>command - The command as a string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setupActions](#setupActions)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.setupActions() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Setup the Workflow Extension Actions                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [hasWorkflowExtensionBeenAddedVersion](#hasWorkflowExtensionBeenAddedVersion)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.hasWorkflowExtensionBeenAddedVersion -> cp.prop`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the CommandPost Version String for the last time the Workflow Extension was added.                                                                     |

| [hasWorkflowExtensionBeenMovedVersion](#hasWorkflowExtensionBeenMovedVersion)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.workflowextension.hasWorkflowExtensionBeenMovedVersion -> cp.prop`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the CommandPost Version String for the last time the Workflow Extension was moved.                                                                     |


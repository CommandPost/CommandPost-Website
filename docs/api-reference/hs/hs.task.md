# [docs](index.md) » hs.task
---

Execute processes in the background and capture their output

Notes:
 * This is not intended to be used for processes which never exit. While it is possible to run such things with hs.task, it is not possible to read their output while they run and if they produce significant output, eventually the internal OS buffers will fill up and the task will be suspended.
 * An hs.task object can only be used once

## API Overview
* Functions - API calls offered directly by the extension
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [closeInput](#closeInput)
 * [environment](#environment)
 * [interrupt](#interrupt)
 * [isRunning](#isRunning)
 * [pause](#pause)
 * [pid](#pid)
 * [resume](#resume)
 * [setCallback](#setCallback)
 * [setEnvironment](#setEnvironment)
 * [setInput](#setInput)
 * [setStreamingCallback](#setStreamingCallback)
 * [setWorkingDirectory](#setWorkingDirectory)
 * [start](#start)
 * [terminate](#terminate)
 * [terminationReason](#terminationReason)
 * [terminationStatus](#terminationStatus)
 * [waitUntilExit](#waitUntilExit)
 * [workingDirectory](#workingDirectory)

## API Documentation

### Functions

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task.new(launchPath, callbackFn[, streamCallbackFn][, arguments]) -> hs.task object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new hs.task object                                                                     |
| **Parameters**                              | <ul><li>launchPath - A string containing the path to an executable file.  This must be the full path to an executable and not just an executable which is in your environment's path (e.g. `/bin/ls` rather than just `ls`).</li><li>callbackFn - A callback function to be called when the task terminates, or nil if no callback should be called. The function should accept three arguments:
  exitCode - An integer containing the exit code of the process
  stdOut - A string containing the standard output of the process
  stdErr - A string containing the standard error output of the process</li><li>streamCallbackFn - A optional callback function to be called whenever the task outputs data to stdout or stderr. The function must return a boolean value - true to continue calling the streaming callback, false to stop calling it. The function should accept three arguments:
  task - The hs.task object or nil if this is the final output of the completed task.
  stdOut - A string containing the standard output received since the last call to this callback
  stdErr - A string containing the standard error output received since the last call to this callback</li><li>arguments - An optional table of command line argument strings for the executable</li></ul> |
| **Returns**                                 | <ul><li>An `hs.task` object</li></ul>          |
| **Notes**                                   | <ul><li>The arguments are not processed via a shell, so you do not need to do any quoting or escaping. They are passed to the executable exactly as provided.</li><li>When using a stream callback, the callback may be invoked one last time after the termination callback has already been invoked. In this case, the `task` argument to the stream callback will be `nil` rather than the task userdata object and the return value of the stream callback will be ignored.</li></ul>                |

### Methods

| [closeInput](#closeInput)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:closeInput() -> hs.task object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Closes the task's stdin                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The hs.task object</li></ul>          |
| **Notes**                                   | <ul><li>This should only be called on tasks with a streaming callback - tasks without it will automatically close stdin when any data supplied via `hs.task:setInput()` has been written</li><li>This is primarily useful for sending EOF to long-running tasks</li></ul>                |

| [environment](#environment)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:environment() -> environment`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the environment variables as a table for the task.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table of the environment variables for the task where each key is the environment variable name.</li></ul>          |
| **Notes**                                   | <ul><li>if you have not yet set an environment table with the `hs.task:setEnvironment` method, this method will return a copy of the Hammerspoon environment table, as this is what the task will inherit by default.</li></ul>                |

| [interrupt](#interrupt)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:interrupt() -> hs.task object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Interrupts the task                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.task` object</li></ul>          |
| **Notes**                                   | <ul><li>This will send SIGINT to the process</li></ul>                |

| [isRunning](#isRunning)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:isRunning() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Test if a task is still running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>true if the task is running or false if it is not.</li></ul>          |
| **Notes**                                   | <ul><li>A task which has not yet been started yet will also return false.</li></ul>                |

| [pause](#pause)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:pause() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Pauses the task                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li> If the task was paused successfully, returns the task object; otherwise returns false</li></ul>          |
| **Notes**                                   | <ul><li>If the task is not paused, the error message will be printed to the Hammerspoon Console</li><li>This method can be called multiple times, but a matching number of `hs.task:resume()` calls will be required to allow the process to continue</li></ul>                |

| [pid](#pid)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:pid() -> integer`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the PID of a running/finished task                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An integer containing the PID of the task</li></ul>          |
| **Notes**                                   | <ul><li>The PID will still be returned if the task has already completed and the process terminated</li></ul>                |

| [resume](#resume)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:resume() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resumes the task                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li> If the task was resumed successfully, returns the task object; otherwise returns false</li></ul>          |
| **Notes**                                   | <ul><li>If the task is not resumed successfully, the error message will be printed to the Hammerspoon Console</li></ul>                |

| [setCallback](#setCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:setCallback(fn) -> hs.task object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set or remove a callback function for a task.                                                                     |
| **Parameters**                              | <ul><li>fn - A function to be called when the task completes or is terminated, or nil to remove an existing callback</li></ul> |
| **Returns**                                 | <ul><li>the hs.task object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setEnvironment](#setEnvironment)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:setEnvironment(environment) -> hs.task object | false`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the environment variables for the task.                                                                     |
| **Parameters**                              | <ul><li>environment - a table of key-value pairs representing the environment variables that will be set for the task.</li></ul> |
| **Returns**                                 | <ul><li>The hs.task object, or false if the table was not set (usually because the task is already running or has completed)</li></ul>          |
| **Notes**                                   | <ul><li>If you do not set an environment table with this method, the task will inherit the environment variables of the Hammerspoon application.  Set this to an empty table if you wish for no variables to be set for the task.</li></ul>                |

| [setInput](#setInput)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:setInput(inputData) -> hs.task object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the standard input data for a task                                                                     |
| **Parameters**                              | <ul><li>inputData - Data, in string form, to pass to the task as its standard input</li></ul> |
| **Returns**                                 | <ul><li>The hs.task object</li></ul>          |
| **Notes**                                   | <ul><li>This method can be called before the task has been started, to prepare some input for it (particularly if it is not a streaming task)</li><li>If this method is called multiple times, any input that has not been passed to the task already, is discarded (for streaming tasks, the data is generally consumed very quickly, but for now there is no way to synchronize this)</li></ul>                |

| [setStreamingCallback](#setStreamingCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:setStreamingCallback(fn) -> hs.task object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set a stream callback function for a task                                                                     |
| **Parameters**                              | <ul><li>fn - A function to be called when the task outputs to stdout or stderr, or nil to remove a callback</li></ul> |
| **Returns**                                 | <ul><li>The hs.task object</li></ul>          |
| **Notes**                                   | <ul><li>For information about the requirements of the callback function, see `hs.task.new()`</li><li>If a callback is removed without it previously having returned false, any further stdout/stderr output from the task will be silently discarded</li></ul>                |

| [setWorkingDirectory](#setWorkingDirectory)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:setWorkingDirectory(path) -> hs.task object | false`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the working directory for the task.                                                                     |
| **Parameters**                              | <ul><li>path - a string containing the path you wish to be the working directory for the task.</li></ul> |
| **Returns**                                 | <ul><li>The hs.task object, or false if the working directory was not set (usually because the task is already running or has completed)</li></ul>          |
| **Notes**                                   | <ul><li>You can only set the working directory if the task has not already been started.</li><li>This will only set the directory that the task starts in.  The task itself can change the directory while it is running.</li></ul>                |

| [start](#start)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:start() -> hs.task object | false`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts the task                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li> If the task was started successfully, returns the task object; otherwise returns false</li></ul>          |
| **Notes**                                   | <ul><li>If the task does not start successfully, the error message will be printed to the Hammerspoon Console</li></ul>                |

| [terminate](#terminate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:terminate() -> hs.task object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Terminates the task                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.task` object</li></ul>          |
| **Notes**                                   | <ul><li>This will send SIGTERM to the process</li></ul>                |

| [terminationReason](#terminationReason)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:terminationReason() -> exitCode | false`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the termination reason for a task, or false if the task is still running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string value of "exit" if the process exited normally or "interrupt" if it was killed by a signal.  Returns false if the termination reason is unavailable (the task is still running, or has not yet been started).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [terminationStatus](#terminationStatus)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:terminationStatus() -> exitCode | false`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the termination status of a task, or false if the task is still running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the numeric exitCode of the task, or the boolean false if the task has not yet exited (either because it has not yet been started or because it is still running).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [waitUntilExit](#waitUntilExit)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:waitUntilExit() -> hs.task object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Blocks Hammerspoon until the task exits                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.task` object</li></ul>          |
| **Notes**                                   | <ul><li>All Lua and Hammerspoon activity will be blocked by this method. Its use is highly discouraged.</li></ul>                |

| [workingDirectory](#workingDirectory)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.task:workingDirectory() -> path`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the working directory for the task.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string containing the working directory for the task.</li></ul>          |
| **Notes**                                   | <ul><li>This only returns the directory that the task starts in.  If the task changes the directory itself, this value will not reflect that change.</li></ul>                |


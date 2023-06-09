# cp.disk

Provides provides details about disk devices attached to the system.
These may be mounted, unmounted, and may include devices which do not
mount, or appear in the user interface by default.

The various methods have `options` table parameters, which allow filtering
to be performed on the operations. These tables can have any combination of
the following:

 * `physical`        - only process physical drives.
 * `virtual`         - only process virtual drives.
 * `external`        - only external drives.
 * `internal`        - only internal drives.
 * `ejectable`       - only drives that can be ejected.
 * `bootable`        - only bootable drives.
 * `writable`        - only writeable drives.
 * `root`            - only top-level drives (vs partitions)
 * `hidden`          - by default, only 'unhidden' devices are returned.
 * `mounted`         - only mounted drives.
 * `unmounted`       - only unmounted drives.

```lua
local disk = require("cp.disk")
local externalDrives = disk.devices({physical = true, ejectable = true})
```

## API Overview
* Functions - API calls offered directly by the extension
 * [eject](#eject)
 * [mount](#mount)
 * [unmount](#unmount)
 * [visit](#visit)

## API Documentation

### Functions


### [eject](#eject)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.disk.eject(options) -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unmounts and ejects (where appropriate) all disks matching the provided `options`.                                                                     |
| **Parameters**                              | <ul><li>options   - The table of filter options.</li></ul> |
| **Returns**                                 | <ul><li>Nothing.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [mount](#mount)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.disk.mount(options) -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Mounts all disks matching the provided `options`.                                                                     |
| **Parameters**                              | <ul><li>options   - The table of filter options.</li></ul> |
| **Returns**                                 | <ul><li>Nothing.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [unmount](#unmount)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.disk.unmount(options) -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unmounts all disks matching the provided `options`.                                                                     |
| **Parameters**                              | <ul><li>options   - The table of filter options.</li></ul> |
| **Returns**                                 | <ul><li>Nothing.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [visit](#visit)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.disk.visit(options, fn) -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Visits all drives matching the `options` and executes the `fn` function with the `deviceID` string (e.g. "disk0" or "disk2s1") and a table of additional data about the drive.                                                                     |
| **Parameters**                              | <ul><li>options   - The table of filter options.</li><li>fn        - The function to execute.</li></ul> |
| **Returns**                                 | <ul><li>Nothing.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

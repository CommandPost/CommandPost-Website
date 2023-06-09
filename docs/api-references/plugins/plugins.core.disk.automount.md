# plugins.core.disk.automount

Automatic Disk Mounting & Unmounting.

---

## API Overview
**Variables** - _Configurable values_
 * [autoMountOnAC](#automountonac)
 * [autoUnmountOnBattery](#autounmountonbattery)

**Functions** - _API calls offered directly by the extension_
 * [mountPhysicalDrives](#mountphysicaldrives)
 * [unmountPhysicalDrives](#unmountphysicaldrives)


---

## API Documentation

#### Variables


### [autoMountOnAC](#automountonac)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.disk.automount.autoMountOnAC <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Automatically mount on connection to mains power.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/disk/automount.lua line 66](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/disk/automount.lua#L66){target="_blank"} |

---


### [autoUnmountOnBattery](#autounmountonbattery)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.disk.automount.autoUnmountOnBattery <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Automatically Unmount on disconnection from battery.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/disk/automount.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/disk/automount.lua#L61){target="_blank"} |

---

#### Functions


### [mountPhysicalDrives](#mountphysicaldrives)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.disk.automount.mountPhysicalDrives() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Mount Physical Drives                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/disk/automount.lua line 31](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/disk/automount.lua#L31){target="_blank"} |

---


### [unmountPhysicalDrives](#unmountphysicaldrives)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.disk.automount.unmountPhysicalDrives() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unmount Physical Drives                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/disk/automount.lua line 18](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/disk/automount.lua#L18){target="_blank"} |

---


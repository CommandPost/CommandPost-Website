# plugins.core.disk.automount

Automatic Disk Mounting & Unmounting.

## API Overview
* Variables - Configurable values
 * [autoMountOnAC](#autoMountOnAC)
 * [autoUnmountOnBattery](#autoUnmountOnBattery)
* Functions - API calls offered directly by the extension
 * [mountPhysicalDrives](#mountPhysicalDrives)
 * [unmountPhysicalDrives](#unmountPhysicalDrives)

## API Documentation

### Variables

| [autoMountOnAC](#autoMountOnAC)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.disk.automount.autoMountOnAC <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Automatically mount on connection to mains power.                                                                     |

| [autoUnmountOnBattery](#autoUnmountOnBattery)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.disk.automount.autoUnmountOnBattery <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Automatically Unmount on disconnection from battery.                                                                     |

### Functions

| [mountPhysicalDrives](#mountPhysicalDrives)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.disk.automount.mountPhysicalDrives() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Mount Physical Drives                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [unmountPhysicalDrives](#unmountPhysicalDrives)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.disk.automount.unmountPhysicalDrives() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unmount Physical Drives                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |


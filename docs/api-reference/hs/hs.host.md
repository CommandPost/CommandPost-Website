# [docs](index.md) » hs.host
---

Inspect information about the machine Hammerspoon is running on

Notes:
 * The network/hostname calls can be slow, as network resolution calls can be called, which are synchronous and will block Hammerspoon until they complete.

## Submodules
 * [hs.host.locale](hs.host.locale.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [addresses](#addresses)
 * [cpuUsage](#cpuUsage)
 * [cpuUsageTicks](#cpuUsageTicks)
 * [globallyUniqueString](#globallyUniqueString)
 * [gpuVRAM](#gpuVRAM)
 * [idleTime](#idleTime)
 * [interfaceStyle](#interfaceStyle)
 * [localizedName](#localizedName)
 * [names](#names)
 * [operatingSystemVersion](#operatingSystemVersion)
 * [operatingSystemVersionString](#operatingSystemVersionString)
 * [thermalState](#thermalState)
 * [uuid](#uuid)
 * [vmStat](#vmStat)
 * [volumeInformation](#volumeInformation)

## API Documentation

### Functions

| [addresses](#addresses)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.addresses() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a list of network addresses for the current machine                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of strings containing the network addresses of the current machine</li></ul>          |
| **Notes**                                   | <ul><li>The results will include IPv4 and IPv6 addresses</li></ul>                |

| [cpuUsage](#cpuUsage)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.cpuUsage([period], [callback]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Query CPU usage statistics for a given time interval using [hs.host.cpuUsageTicks](#cpuUsageTicks) and return the results as percentages.                                                                     |
| **Parameters**                              | <ul><li>`period`    - an optional value specifying the time between samples collected for calculating CPU usage statistics.
  If `callback` is not provided, this is an optional integer, default 100000, specifying the number of microseconds to block between samples collected.  Note that Hammerspoon will block for this period of time during execution of this function.
  If `callback` is provided, this is an optional number, default 1.0, specifying the number of seconds between samples collected.  Hammerspoon will *not* block during this time period.</li><li>`callback` - an optional callback function which will receive the cpu usage statistics in a table, described below, as its sole argument.</li></ul> |
| **Returns**                                 | <ul><li>If a callback function is not provided, this function will return a table containing the following:</li><li>  Individual tables, indexed by the core number, for each CPU core with the following keys in each subtable:</li><li>    user   -- percentage of CPU time occupied by user level processes.</li><li>    system -- percentage of CPU time occupied by system (kernel) level processes.</li><li>    nice   -- percentage of CPU time occupied by user level processes with a positive nice value. (See notes below)</li><li>    active -- For convenience, when you just want the total CPU usage, this is the sum of user, system, and nice.</li><li>    idle   -- percentage of CPU time spent idle</li><li>  The key `overall` containing the same keys as described above but based upon the average of all cores combined.</li><li>  The key `n` containing the number of cores detected.</li><li>If a callback function is provided, this function will return a placeholder table with the following metamethods:</li><li>  `hs.host.cpuUsage:finished()` - returns a boolean indicating if the second CPU sample has been collected yet (true) or not (false).</li><li>  `hs.host.cpuUsage:stop()`     - abort the sample collection.  The callback function will not be invoked.</li><li>  The results of the cpu statistics will be submitted as a table, described above, to the callback function.</li></ul>          |
| **Notes**                                   | <ul><li>If no callback function is provided, Hammerspoon will block (i.e. no other Hammerspoon activity can occur) during execution of this function for `period` microseconds (1 second = 1,000,000 microseconds).  The default period is 1/10 of a second. If `period` is too small, it is possible that some of the CPU statistics may result in `nan` (not-a-number).</li><li></li><li>For reference, the `top` command has a default period between samples of 1 second.</li><li></li><li>The subtables for each core and `overall` have a __tostring() metamethod which allows listing it's contents in the Hammerspoon console by typing `hs.host.cpuUsage()[#]` where # is the core you are interested in or the string "overall".</li></ul>                |

| [cpuUsageTicks](#cpuUsageTicks)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.cpuUsageTicks() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing the current cpu usage information for the system in `ticks` since the most recent system boot.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the following:</li><li>  Individual tables, indexed by the core number, for each CPU core with the following keys in each subtable:</li><li>    user   -- number of ticks the cpu core has spent in user mode since system startup.</li><li>    system -- number of ticks the cpu core has spent in system mode since system startup.</li><li>    nice   </li><li>    active -- For convenience, when you just want the total CPU usage, this is the sum of user, system, and nice.</li><li>    idle   -- number of ticks the cpu core has spent idle</li><li>  The key `overall` containing the same keys as described above but based upon the combined total of all cpu cores for the system.</li><li>  The key `n` containing the number of cores detected.</li></ul>          |
| **Notes**                                   | <ul><li>CPU mode ticks are updated during system interrupts and are incremented based upon the mode the CPU is in at the time of the interrupt. By its nature, this is always going to be approximate, and a single call to this function will return the current tick values since the system was last rebooted.</li><li>To generate a snapshot of the system's usage "at this moment", you must take two samples and calculate the difference between them.  The [hs.host.cpuUsage](#cpuUsage) function is a wrapper which does this for you and returns the cpu usage statistics as a percentage of the total number of ticks which occurred during the sample period you specify when invoking `hs.host.cpuUsage`.</li><li></li><li>Historically on Unix based systems, the `nice` cpu state represents processes for which the execution priority has been reduced to allow other higher priority processes access to more system resources.  The source code for the version of the [XNU Kernel](https://opensource.apple.com/source/xnu/xnu-3789.41.3/) currently provided by Apple (for macOS 10.12.3) shows this value as returned by the `host_processor_info` as hardcoded to 0.  For completeness, this value *is* included in the statistics returned by this function, but unless Apple makes a change in the future, it is not expected to provide any useful information.</li><li></li><li>Adapted primarily from code found at http://stackoverflow.com/questions/6785069/get-cpu-percent-usage</li></ul>                |

| [globallyUniqueString](#globallyUniqueString)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.globallyUniqueString() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a newly generated global unique identifier as a string                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a newly generated global unique identifier as a string</li></ul>          |
| **Notes**                                   | <ul><li>See also `hs.host.uuid`</li><li>The global unique identifier for a process includes the host name, process ID, and a time stamp, which ensures that the ID is unique for the network. This property generates a new string each time it is invoked, and it uses a counter to guarantee that strings are unique.</li><li>This is often used as a file or directory name in conjunction with `hs.host.temporaryDirectory()` when creating temporary files.</li></ul>                |

| [gpuVRAM](#gpuVRAM)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.gpuVRAM() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the model and VRAM size for the installed GPUs.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table whose key-value pairs represent the GPUs for the current system.  Each key is a string containing the name for an installed GPU and its value is the GPU's VRAM size in MB.  If the VRAM size cannot be determined for a specific GPU, its value will be -1.0.</li></ul>          |
| **Notes**                                   | <ul><li>If your GPU reports -1.0 as the memory size, please submit an issue to the Hammerspoon github repository and include any information that you can which may be relevant, such as: Macintosh model, macOS version, is the GPU built in or a third party expansion card, the GPU model and VRAM as best you can determine (see the System Information application in the Utilities folder and look at the Graphics/Display section) and anything else that you think might be important.</li></ul>                |

| [idleTime](#idleTime)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.idleTime() -> seconds`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the number of seconds the computer has been idle.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the idle time in seconds</li></ul>          |
| **Notes**                                   | <ul><li>Idle time is defined as no mouse move nor keyboard entry, etc. and is determined by querying the HID (Human Interface Device) subsystem.</li><li>This code is directly inspired by code found at http://www.xs-labs.com/en/archives/articles/iokit-idle-time</li></ul>                |

| [interfaceStyle](#interfaceStyle)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.interfaceStyle() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the OS X interface style for the current user.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string representing the current user interface style, or nil if the default style is in use.</li></ul>          |
| **Notes**                                   | <ul><li>As of OS X 10.10.4, other than the default style, only "Dark" is recognized as a valid style.</li></ul>                |

| [localizedName](#localizedName)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.localizedName() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the current machine, as displayed in the Finder sidebar                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the name of the current machine</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [names](#names)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.names() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a list of network names for the current machine                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of strings containing the network names of the current machine</li></ul>          |
| **Notes**                                   | <ul><li>This function should be used sparingly, as it may involve blocking network access to resolve hostnames</li></ul>                |

| [operatingSystemVersion](#operatingSystemVersion)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.operatingSystemVersion() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The operating system version as a table containing the major, minor, and patch numbers.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The operating system version as a table containing the keys major, minor, and patch corresponding to the version number determined and a key named "exact" or "approximation" depending upon the method used to determine the OS Version information.</li></ul>          |
| **Notes**                                   | <ul><li>Prior to 10.10 (Yosemite), there was no definitive way to reliably get an exact OS X version number without either mapping it to the Darwin kernel version, mapping it to the AppKitVersionNumber (the recommended method), or parsing the result of NSProcessingInfo's `operatingSystemVersionString` selector, which Apple states is not guaranteed to be reliably parsable.</li><li>  for OS X versions prior to 10.10, the version number is approximately determined by evaluating the AppKitVersionNumber.  For these operating systems, the `approximate` key is defined and set to true, as the exact patch level cannot be definitively determined.</li><li>  for OS X Versions starting at 10.10 and going forward, an exact value for the version number can be determined with NSProcessingInfo's `operatingSystemVersion` selector and the `exact` key is defined and set to true if this method is used.</li></ul>                |

| [operatingSystemVersionString](#operatingSystemVersionString)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.operatingSystemVersionString() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The operating system version as a human readable string.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The operating system version as a human readable string.</li></ul>          |
| **Notes**                                   | <ul><li>According to the OS X Developer documentation, "The operating system version string is human readable, localized, and is appropriate for displaying to the user. This string is not appropriate for parsing."</li></ul>                |

| [thermalState](#thermalState)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.thermalState() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The current thermal state of the computer, as a human readable string                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The system's thermal state as a human readable string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [uuid](#uuid)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.uuid() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a newly generated UUID as a string                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a newly generated UUID as a string</li></ul>          |
| **Notes**                                   | <ul><li>See also `hs.host.globallyUniqueString`</li><li>UUIDs (Universally Unique Identifiers), also known as GUIDs (Globally Unique Identifiers) or IIDs (Interface Identifiers), are 128-bit values. UUIDs created by NSUUID conform to RFC 4122 version 4 and are created with random bytes.</li></ul>                |

| [vmStat](#vmStat)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.vmStat() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing virtual memory statistics for the current machine, as well as the page size (in bytes) and physical memory size (in bytes).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the following keys:</li><li>  anonymousPages          -- the total number of pages that are anonymous</li><li>  cacheHits               -- number of object cache hits</li><li>  cacheLookups            -- number of object cache lookups</li><li>  fileBackedPages         -- the total number of pages that are file-backed (non-swap)</li><li>  memSize                 -- physical memory size in bytes</li><li>  pageIns                 -- the total number of requests for pages from a pager (such as the inode pager).</li><li>  pageOuts                -- the total number of pages that have been paged out.</li><li>  pageSize                -- page size in bytes</li><li>  pagesActive             -- the total number of pages currently in use and pageable.</li><li>  pagesCompressed         -- the total number of pages that have been compressed by the VM compressor.</li><li>  pagesCopyOnWrite        -- the number of faults that caused a page to be copied (generally caused by copy-on-write faults).</li><li>  pagesDecompressed       -- the total number of pages that have been decompressed by the VM compressor.</li><li>  pagesFree               -- the total number of free pages in the system.</li><li>  pagesInactive           -- the total number of pages on the inactive list.</li><li>  pagesPurgeable          -- the total number of purgeable pages.</li><li>  pagesPurged             -- the total number of pages that have been purged.</li><li>  pagesReactivated        -- the total number of pages that have been moved from the inactive list to the active list (reactivated).</li><li>  pagesSpeculative        -- the total number of pages on the speculative list.</li><li>  pagesThrottled          -- the total number of pages on the throttled list (not wired but not pageable).</li><li>  pagesUsedByVMCompressor -- the number of pages used to store compressed VM pages.</li><li>  pagesWiredDown          -- the total number of pages wired down. That is, pages that cannot be paged out.</li><li>  pagesZeroFilled         -- the total number of pages that have been zero-filled on demand.</li><li>  swapIns                 -- the total number of compressed pages that have been swapped out to disk.</li><li>  swapOuts                -- the total number of compressed pages that have been swapped back in from disk.</li><li>  translationFaults       -- the number of times the "vm_fault" routine has been called.</li><li>  uncompressedPages       -- the total number of pages (uncompressed) held within the compressor</li></ul>          |
| **Notes**                                   | <ul><li>The table returned has a __tostring() metamethod which allows listing it's contents in the Hammerspoon console by typing `hs.host.vmStats()`.</li><li>Except for the addition of cacheHits, cacheLookups, pageSize and memSize, the results for this function should be identical to the OS X command `vm_stat`.</li><li>Adapted primarily from the source code to Apple's vm_stat command located at http://www.opensource.apple.com/source/system_cmds/system_cmds-643.1.1/vm_stat.tproj/vm_stat.c</li></ul>                |

| [volumeInformation](#volumeInformation)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.volumeInformation([showHidden]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table of information about disk volumes attached to the system                                                                     |
| **Parameters**                              | <ul><li>showHidden - An optional boolean, true to show hidden volumes, false to not show hidden volumes. Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>A table of information, where the keys are the paths of disk volumes</li></ul>          |
| **Notes**                                   | <ul><li>The possible keys in the table are:</li><li> NSURLVolumeTotalCapacityKey - Size of the volume in bytes</li><li> NSURLVolumeAvailableCapacityKey - Available space on the volume in bytes</li><li> NSURLVolumeIsAutomountedKey - Boolean indicating if the volume was automounted</li><li> NSURLVolumeIsBrowsableKey - Boolean indicating if the volume can be browsed</li><li> NSURLVolumeIsEjectableKey - Boolean indicating if the volume should be ejected before its media is removed</li><li> NSURLVolumeIsInternalKey - Boolean indicating if the volume is an internal drive or an external drive</li><li> NSURLVolumeIsLocalKey - Boolean indicating if the volume is a local or remote drive</li><li> NSURLVolumeIsReadOnlyKey - Boolean indicating if the volume is read only</li><li> NSURLVolumeIsRemovableKey - Boolean indicating if the volume's media can be physically ejected from the drive (e.g. a DVD)</li><li> NSURLVolumeMaximumFileSizeKey - Maximum file size the volume can support, in bytes</li><li> NSURLVolumeUUIDStringKey - The UUID of volume's filesystem</li><li> NSURLVolumeURLForRemountingKey - For remote volumes, the network URL of the volume</li><li> NSURLVolumeLocalizedNameKey - Localized version of the volume's name</li><li> NSURLVolumeNameKey - The volume's name</li><li> NSURLVolumeLocalizedFormatDescriptionKey - Localized description of the volume</li><li>* Not all keys will be present for all volumes</li><li>* The meanings of NSURLVolumeIsEjectableKey and NSURLVolumeIsRemovableKey are not generally useful for determining if a drive is removable in the modern sense (e.g. a USB drive) as much of this terminology dates back to when USB didn't exist and removable drives were things like Floppy/DVD drives. If you're trying to determine if a drive is not fixed into the computer, you may need to use a combination of these keys, but which exact combination you should use, is not consistent across macOS versions.</li></ul>                |


---
tags: 
date: 2025-08-16
aliases:
  - uefi
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
  - center-images
lang:
  - en
properties-ver: "1.2"
stub:
---
# UEFI

***
**Unified Extensible Firmware Interface** (UEFI) is a modern firmware interface that replaces the traditional BIOS. It provides a more flexible and powerful environment for booting operating systems and managing hardware.
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Logo_of_the_UEFI_Forum.svg/1920px-Logo_of_the_UEFI_Forum.svg.png" width="100px"><p style="text-align: center; font-size: small;margin: 0px;">UEFI Logo. Public Domain</p>

## Firmware bitness
UEFI firmware can be either 32-bit or 64-bit. The bitness of the firmware determines the maximum amount of memory that can be addressed and the types of operating systems that can be booted.

### Checking firmware bitness
#### From Linux
```
cat /sys/firmware/efi/fw_platform_size
```

#### From macOS
```
ioreg -l -p IODeviceTree | grep firmware-abi
```

## UEFI  variables
You can use `efivar` to get a list of UEFI variables, which are used to store configuration settings and other data that the firmware uses during the boot process.

```
efivar --list
```

### Userspace tools
- [[efivar]]
- [[efibootmgr]]
- [[uefivars]]
- [[efitools]]

***
## References
- [UEFI - Wikipedia](https://en.wikipedia.org/wiki/UEFI)
- [Unified Extensible Firmware Interface - ArchWiki](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface)
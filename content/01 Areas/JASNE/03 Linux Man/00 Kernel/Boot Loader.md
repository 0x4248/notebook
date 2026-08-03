---
tags:
  - Linux/00_Kernel
date: 2025-08-12
aliases:
  - boot loader
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
# Boot Loader

***

A boot loader is one of the very first programs that is started up by the [[UEFI]] or [[BIOS]] on startup. It is responsible for loading the kernel into memory and any other [[Kernel parameters|parameters]] that the kernel needs to start up. Quite often a menu will be shown on the screen to allow the user to select which kernel to boot into, or which operating system to boot into.

## Types supported by various distributions
| Name          | Firmware types     | Partition types | Multiboot | Supported file systems |
| ------------- | ------------------ | --------------- | --------- | ---------------------- |
| Clover        | BIOS, UEFI         | GPT             | Yes       | Many                   |
| EFI boot stub | UEFI               | MBR, GPT        | Yes       | Many                   |
| GRUB          | BIOS, UEFI         | MBR, GPT        | Yes       | Many                   |
| Limine        | BIOS, UEFI         | MBR, GPT        | Yes       | Limited                |
| rEFInd        | UEFI               | MBR, GPT        | Yes       | Many                   |
| Syslinux      | BIOS, Partial UEFI | MBR,ff GPT      | Partial   | Limited                |
| systemd-boot  | UEFI               | Manual MBR, GPT | Yes       | Many                   |


***
## See also
- [[Kernel]]
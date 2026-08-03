---
tags:
  - Linux/00_Kernel
date: 2025-09-04
aliases:
  - kernel parameters
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
# Kernel parameters

***
Kernel parameters is the core options that are passed thought the system which can change how the kernel does a specific task. For example you can turn off logging to the virtual console or use a specific module option.
## Modifying options
There are three main ways you can change kernel options:
1. When building the [[Kernel]] itself using the `make menuconfig` command.
2. Passing options to the kernel at boot time through your [[Boot Loader|boot loader]].
3. Using the `/proc/sys` interface or the [[Sysctl|sysctl]] command to change parameters at runtime.


***
## References
- [Kernel parameters - ArchWiki](https://wiki.archlinux.org/title/Kernel_parameters)
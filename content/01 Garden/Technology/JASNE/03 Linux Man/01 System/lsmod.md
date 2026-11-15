---
tags:
  - Linux/01_System
date: 2025-09-06
aliases:
  - lsmod
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
# lsmod

***

**`lsmod`** (list modules) is used to show the status of modules that are loaded in the [[Kernel|kernel]]. `lsmod` works by listing the `/proc/modules` but in a more readable way.

## Usage
```
lsmod [options]
-s, --syslog      print to syslog, not stderr
-v, --verbose     enables more messages
-V, --version     show the version
-h, --help        show help
```

The output is laid out with:
- Module name
- Size in ram
- How many other modules are using that module
- Names of the modules that are using that module
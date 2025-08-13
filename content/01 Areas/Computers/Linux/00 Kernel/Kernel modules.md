---
tags: 
date: 2025-08-13
aliases:
  - kernel modules
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
# Kernel modules

***
Kernel modules are small pieces of code that can be loaded into the kernel at runtime and is to expand the functionality of the kernel. Want to add support for a new hardware device or file system? You can do it with a kernel module. This allows for a more modular and flexible kernel design, as modules can be loaded and unloaded as needed without requiring a full kernel rebuild.

## Getting module info
To see what modules are loaded:
```
lsmod
```
### Modinfo
Mod info gets information of a specific module. Basic usage:
```
modinfo module_name
```

#### Other parameters
```
-a, --author                Print only 'author'
-d, --description           Print only 'description'
-l, --license               Print only 'license'
-p, --parameters            Print only 'parm'
-n, --filename              Print only 'filename'
-0, --null                  Use \0 instead of \n
-m, --modname               Handle argument as module name instead of alias or filename
-F, --field=FIELD           Print only provided FIELD
-k, --set-version=VERSION   Use VERSION instead of `uname -r`
-b, --basedir=DIR           Use DIR as filesystem root for /lib/modules
-V, --version               Show version
-h, --help                  Show this help
```


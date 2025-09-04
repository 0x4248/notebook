---
tags:
  - Linux/01_System
date: 2025-08-19
aliases:
  - sysctl
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
  - center-images
lang:
  - en
properties-ver: "1.2"
stub: true
---
# Sysctl

***
>[!warning]+ Stub
> This page "Sysctl" is a stub and is missing content. Check back later for more content.
> 
> *Date added: 2025-08-22*

**sysctl** (systemctl) allows the configuration of [[Kernel parameters]] at runtime.
## Usage
```
Usage:
 sysctl [options] [variable[=value] ...]

Options:
  -a, --all            display all variables
  -A                   alias of -a
  -X                   alias of -a
      --deprecated     include deprecated parameters to listing
      --dry-run        Print the key and values but do not write
  -b, --binary         print value without new line
  -e, --ignore         ignore unknown variables errors
  -N, --names          print variable names without values
  -n, --values         print only values of the given variable(s)
  -p, --load[=<file>]  read values from file
  -f                   alias of -p
      --system         read values from all system directories
  -r, --pattern <expression>
                       select setting that match expression
  -q, --quiet          do not echo variable set
  -w, --write          enable writing a value to variable
  -o                   does nothing
  -x                   does nothing
  -d                   alias of -h

 -h, --help     display this help and exit
 -V, --version  output version information and exit
```

### Reading
To fetch all the sysctl parameters:
```
sysctl -a
```

To only fetch the core kernel parameters:
```
sysctl -a | grep kernel
```

To get all values from the system directory:
```
sysctl -a --system
```

### Changing parameters

There are two ways you can change a value:
1. Change it using `sysctl`  command:
2. Change it by echoing the value into the `/proc/sys` directory.

```
sysctl -w kernel.hostname=newhostname
```

```
echo "newhostname" > /proc/sys/kernel/hostname
```

***
## References
- [sysctl(8) - Linux manual page](https://www.man7.org/linux/man-pages/man8/sysctl.8.html)
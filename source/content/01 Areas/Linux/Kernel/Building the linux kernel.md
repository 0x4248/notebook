---
tags:
  - Linux
date: 2025-01-02
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# Building the linux kernel

***

To build the Linux kernel, you will need to have the kernel source code. You can download the source code from the [Linux kernel archives](https://www.kernel.org/). Once you have the source code, you can build the kernel using the following commands:

```bash
make defconfig
```

This will create a default configuration file for the kernel. You can then customize the configuration using the `make menuconfig` command. Once you have configured the kernel, you can build it using the following command:

```bash
make -j$(nproc)
```

> **WARNING:**
>
> The `-j$(nproc)` flag tells the `make` command to use all available CPU cores to build the kernel. This can speed up the build process significantly, but it can also cause your system to become unresponsive if you have a lot of CPU-intensive tasks running at the same time.

After the kernel has been built, you can install it using the following command:

> **DANGER:**
>
> Always backup your system before installing a new kernel. This may brick your system. You can always copy your old kernel to a safe location and restore it in a chroot environment.

```bash
sudo make modules_install install
```


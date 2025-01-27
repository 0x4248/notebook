---
tags: 
date: 2025-01-27
aliases:
  - archboot but we dont use the installer
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
lang:
  - en
properties-ver: "1.1"
---
# Arch linux arm install on UTM

***
This guide goes trough on how to install arch linux on utm.

First:
- Get a prebuilt arch linux arm image
- Or build one yourself

## Installing
### Disk partitioning
Firstly identify the disk you want to inatall, this can be found by running `lsblk`. Note down the one you want to install to. In this guide we will reference the drive as `vdX` with `X` being the drive letter, change this to something like `vda` or `vdb` depending on your system.



Then run:

```
fdisk /dev/vdX
```

You will need to partition out the disks by running these commands:

```
n <ENTER>
p <ENTER>
1 <ENTER>
+512M <ENTER>
t <ENTER>
ef <ENTER>
n <ENTER>
p <ENTER>
2 <ENTER>
<ENTER>
w <ENTER>
```

Then format the partitions:

```
mkfs.fat -F32 /dev/vdX1
```

> [!tip]+ mkfs.fat not working?
> Try installing it:
> ```
> pacman -Sy dosfstools glibc
> ```

Then do the main disk:

```
mkfs.ext4 /dev/vdX2
```

> [!info]+ Want to use other file types?
> You can use other file types like `btrfs` or `xfs` if you want.

### Installing arch linux
If you have not done already sync the package database:

```
pacman -Syy
```

Then mount the main partition:

```
mount /dev/vdX2 /mnt
```

Then install the base system:

```
pacstrap /mnt base linux linux-firmware nano sudo grub
```


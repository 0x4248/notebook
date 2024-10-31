---
tags: 
date: 2024-10-18
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# Arch install BIOS
<p class="center" style="margin:0;color:gray;">How to install arch linux on a BIOS system</p>

***
How to install arch linux on a laptop using 
## Disk partitioning
```
fdisk /dev/vda
```

`n` `p` `1` `ENTER` `ENTER`
`w`

```
mkfs.ext4 /dev/vda1
```

## Installing arch linux

```
pacman -Syy
```

```
mount /dev/vda1 /mnt
```

```
pacstrap /mnt base linux linux-firmware neovim vim nano iwd grub sudo 
```
### Setting fstab
```
genfstab -U /mnt >> /mnt/etc/fstab
```
### Entering chroot
```
arch-chroot /mnt
```

```
timedatectl set-timezone Europe/London
```
### Setting locale
```
nano /etc/locale.gen
```

```
locale-gen
echo LANG=en_GB.UTF-8 > /etc/locale.conf
export LANG=en_GB.UTF-8
```

```
echo archlinux > /etc/hostname
```
### Setting hosts file
```
touch /etc/hosts
```

```
127.0.0.1	localhost
::1		localhost
127.0.1.1	myarch
```
### Generating initramfs
```
mkinitcpio -P
```

```
passwd
```
## Creating boot loader
```
grub-install --target=i386-pc 
```

```
grub-mkconfig -o /boot/grub/grub.cfg
```
## Reboot
```
umount /mnt
shutdown now
```
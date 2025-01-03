---
tags:
  - References
date: 2024-08-19
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# Arch install
*I wrote this really quick. Sorry*
## Disk partitioning
```
fdisk /dev/vda
```

`n` `p` `1` `ENTER` `+512M`
`t` `ef`
`n` `p` `2` `ENTER` `ENTER`
`w`

```
mkfs.fat -F32 /dev/vda1
```

```
mkfs.ext4 /dev/vda2
```

## Installing arch linux

```
pacman -Syy
```

```
mount /dev/vda2 /mnt
```

```
pacstrap /mnt base linux linux-firmware neovim vim nano
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
pacman -S grub efibootmgr
```

```
mkdir /boot/efi
```

```
mount /dev/vda1 /boot/efi
```

```
grub-install --target=arm64-efi --bootloader-id=GRUB --efi-directory=/boot/efi
```

```
grub-mkconfig -o /boot/grub/grub.cfg
```
## Reboot
```
umount /mnt
shutdown now
```
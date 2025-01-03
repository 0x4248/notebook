---
tags:
  - Linux/Arch_Linux
date: 2025-01-02
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# yay

***

Yay (Yet Another Yaourt) is an AUR helper written in Go. It is a modern AUR helper that is easy to use and has a lot of features.

## Installation

First install the build dependencies:

```bash
sudo pacman -S --needed git base-devel
```

Then clone the repository and build the package:

```bash
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

## Usage

To install a package from the AUR, use the following command:

```bash
yay -S <package>
```

To update all packages, use the following command:

```bash
yay -Syu
```

To search for a package in the AUR, use the following command:

```bash
yay -Ss <package>
```

To remove a package, use the following command:

```bash
yay -R <package>
```

To clean the package cache, use the following command:

```bash
yay -Sc
```
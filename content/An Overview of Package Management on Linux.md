---
tags:
date: 2026-08-03
aliases:
  - an overview of package management on linux
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
  - serif-font
  - serif-headings
  - center-images
lang:
  - en
properties-ver: "1.2"
stub:
---
# An Overview of Package Management on Linux

***
![[jasne-banner.png]]

>[!warning]+ Snippet
> This article is too short or does not have enough content. Check back later for updates.
## Abstract
Many Linux distributions come with a package manager or way to manage packages to install, upgrade or remove software from a specified system; however, there are many different package managers which all have various features and command line interfaces.

## Basic package management across various Linux distributions

| Action                                | Arch                | RHEL                    | Debian                      | Gentoo                          | SUSE                                |
| ------------------------------------- | ------------------- | ----------------------- | --------------------------- | ------------------------------- | ----------------------------------- |
| Install a package                     | `pacman -S <NAME>`  | `dnf install <NAME>`    | `apt-get install <NAME>`    | `emerge <NAME>`                 | `zypper install <NAME>`             |
| Remove a package                      | `pacman -R <NAME>`  | `dnf remove <NAME>`     | `apt-get remove <NAME>`     | `emerge --unmerge <NAME>`       | `zypper remove <NAME>`              |
| Refresh the package list or sources   | `pacman -Sy`        | `dnf check-update`      | `apt-get update`            | `emerge --sync`                 | `zypper refresh`                    |
| Upgrade all packages/system           | `pacman -Syu`       | `yum update`            | `apt-get upgrade`           | `emerge --update --deep @world` | `zypper update`                     |
| Remove a package and all dependencies | `pacman -Rs <NAME>` | `yum autoremove <NAME>` | `apt-get autoremove <NAME>` | `emerge --depclean <NAME>`      | `zypper remove --clean-deps <NAME>` |

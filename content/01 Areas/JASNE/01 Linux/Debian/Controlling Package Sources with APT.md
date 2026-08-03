---
tags:
date: 2026-08-03
aliases:
  - controlling package sources with apt
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
# Controlling Package Sources with APT

***
![[jasne-banner.png]]

## Abstract
APT determines which repositories a Debian system pulls packages from via configuration files under `/etc/apt/`. This entry covers the legacy one-line format and the deb822 format introduced as the default in the Debian 13 (Trixie) release.
## Where APT looks
APT has two places for source configurations:
- `/etc/apt/sources.list` - the legacy one-line format
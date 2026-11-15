---
tags:
date: 2026-08-08
aliases:
  - repairing a windows system and checking for corrupted files
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
# Repairing a Windows system and checking for corrupted files

***
![[jasne-banner.png]]

## Abstract
Windows can become corrupted which can lead instability, loss of functionality of some features or completely render the system bricked/not bootable. This article will show how to check for corrupted files and use built in tools to try and repair them. 

>[!note]+ Related article
> If you are experiencing issues with EFI System Partitions and UEFI related problems, see the [[Rebuilding a Windows UEFI Boot Partition]] article for more information.

>[!warning]- Administrator privileges is required for all of this article
## Using SFC to scan and check the integrity of protected system files

SFC is a utility that comes with Windows 10 and 11 as well as Windows Server 2016 or later. It scans and verifies system files for any broken versions and replaces them with the correct version. You can perform a full system scan using the following command:

```powershell
sfc /scannow
```

*This will take a while to complete*

If you have a specific file you need to check you can use the `/verifyfile` command:

```powershell
sfc /verifyfile=c:\windows\system32\kernel32.dll
```

If you cannot boot into a system but have a mounted system drive for example on `D:` then you can run the following command to scan an offline drive:

```
sfc /scannow /offbootdir=D:\ /offwindir=d:\windows
```

## Repairing a windows system with DISM
With the DISM tool you can repair a Windows system image. You can use the following command to check the health of the system image:

```powershell
DISM /Online /Cleanup-Image /CheckHealth
```

If the system image is repairable, you can use the following command to scan the image for corruption:

```powershell
DISM /Online /Cleanup-Image /ScanHealth
```

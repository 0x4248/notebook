---
tags:
date: 2026-08-08
aliases:
  - rebuilding a windows uefi boot partition
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
# Rebuilding a Windows UEFI Boot Partition

***
![[jasne-banner.png]]

## Abstract
Windows can sometimes corrupt its own UEFI boot partition, especially when there is a dual boot configuration on the machine or a non standard configuration. This article will explain the steps needed to rebuild a UEFI Windows Boot Manager partition. 

## Entering a Windows PE or Recovery Environment

Boot into a installation disk or use the 3 failed boot attempts to enter the recovery environment. Once in the recovery environment, open a command prompt:
- **In a windows installation environment**:
	- Click Install now
	- Press `shift+F10`
	- This will open a command prompt window
- **In a recovery environment**:
    - Click Troubleshoot
    - Click Advanced Options
    - Click Command Prompt
    - *You may need an administrator password or BitLocker key*

## Identifying the system partitions and mounting

In the windows command prompt, run the following commands to identify the system partitions and mount them:

```cmd
diskpart
list disk
sel disk 0 <-- Select the disk that contains the Windows installation
list vol
list part
```

 The volume map shows you the types of partitions on the disk. Look for the EFI System Partition (ESP) which is usually a FAT32 partition of around 100-500MB in size. The partition will show on the `list part` command, use this to reference the partition number for the next step.
### Assign a number to the EFI System Partition

```
sel part <NUMBER>
assign letter=B
```

If drive `B` is used on your system then assign it to another letter such as `S` or `E`. The important part is to assign a letter to the EFI System Partition so that we can access it in the next steps.

>[!danger] 
>Be sure you have selected the correct partition, assigning a letter to the wrong partition can cause data loss.
>
>**If you have selected the wrong partition, you can remove the letter assignment by running the following command:**
>
>```
>remove letter=B
>``` 

## Rebuilding the EFI System Partition

Now use `bcdboot.exe` found in `C:\Windows\System32` to rebuild the EFI System Partition. Run the following command:

```cmd
bcdboot C:\Windows /s B: /f UEFI
```

System should say `Boot files successfully created.`


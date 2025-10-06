---
tags:
  - CompTIA/A/3
date: 2025-10-06
aliases:
  - introduction to raid
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
  - center-images
lang:
  - en
properties-ver: "1.2"
stub:
---
# Introduction to RAID

***

## Raid Types and Configurations
- **RAID 0**:
    - Data is evenly split across multiple disks
    - Minimum drives: 2
    - Fast but no redundancy
- **RAID 1**:
    - Data is written the exact to two or more drives making sure than an copy of the original data is kept.
    - Minimum drives: 2
    - Fast as reading but can be slow when writing, can survive a single drive failure.
- **RAID 5**:
    - Data is put across multiple discs with parity information which allows for drives to be rebuilt if one fails.
    - Minimum drives: 3
    - Good read speed and redundancy but write is slower.
    - High reliability
- **RAID 6**:
    - Has another parity block for additional reliability and to recover from two drive failures at once.
    - Minimum drives: 4
- **RAID 10**:
    - Combines both RAID 0 and RAID 1

## Use cases
- **RAID 0**: High speed, without redundancy
    - Video editing and to store large media files, has no data recovery if failure.
- **RAID 1**: Maximum redundancy for critical data
    - Good for data critical scenarios like hospitals and governmental places.
- **RAID 5**: Cost affective with redundancy and performance
    - Companies who want to maximise storage and have reliability.
- **RAID 6**: Extra protection for RAID 5
    - Companies who want to have extra protection against drive failure.
- **RAID 10**: High-Performance Redundancy
    - Good for data centres who want fast performance and to be able to recover from drive failures without downtime.
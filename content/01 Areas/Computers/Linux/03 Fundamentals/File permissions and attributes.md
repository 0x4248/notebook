---
tags: 
date: 2025-08-16
aliases:
  - file permissions and attributes
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
# File permissions and attributes

***
[[File systems]] use permissions and attributes to know who can access what data.

>[!danger]
> File permissions only work on a booted system and does not protect the stored data.

## Reading permissions
Use the [[ls]] command with the `-l` option to see a list of all files in a directory with their full permissions:

```
[root@arch ~]# ls -l
total 0
-rw-r--r-- 1 root root 0 Aug 13 20:18 demo
```

The output columns work like this:

| d                         | rwx               | rwx               | rwx               | +                       |
| ------------------------- | ----------------- | ----------------- | ----------------- | ----------------------- |
| Directory (d) or file (-) | Owner permissions | Group permissions | Other permissions | Extended attributes (+) |

The letters mean:
- **d** - Directory
- **-** - No permission given
- **r** - Read permission
- **w** - Write permission
- **x** - Execute permission

***
## References
- [File permissions and attributes - ArchWiki](https://wiki.archlinux.org/title/File_permissions_and_attributes)
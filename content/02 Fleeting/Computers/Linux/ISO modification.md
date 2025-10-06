---
tags:
  - Fleeting
date: 2024-11-16
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# ISO modification
<p class="text-center" style="margin:0;opacity:0.6;">Modifying a ISO file using linux</p>

***
## Steps

1. Create a directory to mount the ISO file:

```bash
mkdir /mnt/iso
```

2. Mount the ISO file:

```bash
sudo mount -o loop file.iso /mnt/iso
```

3. Modify the contents of the mounted ISO file as needed.

4. Create a new ISO file with the modified contents:

```bash
genisoimage -o newfile.iso -r -J /mnt/iso
```

5. Unmount the ISO file:

```bash
sudo umount /mnt/iso
```

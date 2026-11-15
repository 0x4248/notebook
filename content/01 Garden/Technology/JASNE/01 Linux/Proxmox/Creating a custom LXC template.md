---
tags:
date: 2026-08-17
aliases:
  - creating a custom lxc template
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
# Creating a custom LXC template

***
![[jasne-banner.png]]

## Abstract
This article shows how a reusable `.zst` LXC template file can be created to allow for custom images/operating systems to be deployed at scale.
## Prepare the PVE machine
Before starting the process, ensure you have a base template to base your custom LXC from. In this article we are going to use Debian:
```
pveam update
pveam available | grep debian
```

*output:*
```
update successful
system          debian-12-standard_12.12-1_amd64.tar.zst
system          debian-13-standard_13.6-1_amd64.tar.zst
system          debian-13-standard_13.6-1_arm64.tar.zst
turnkeylinux    debian-10-turnkey-collabtive_16.1-1_amd64.tar.gz
... Truncated
```

## Creating the base container
In this article we are going to use `ebian-13-standard_13.6-1_amd64.tar.zst`:

```bash
pct create 900 local:vztmpl/debian-13-standard_13.6-1_amd64.tar.zst \
	--hostname temlate-builder \
	--storage local-lvm \
	--rootfs local-lvm:8 \
    --net0 name=eth0,bridge=vmbr0,ip=dhcp \
    --unprivileged 1

pct start 900
pct enter 900
```

```bash
echo "Hello World" > /etc/motd
```

```
pct stop 900
vzdump 900 --compress zstd --dumpdir /var/lib/vz/dump
```

```
cd /var/lib/vz/dump
mv vzdump-lxc-900-*.tar.zst my-template.tar.zst
cp my-template.tar.zst /var/lib/vz/template/cache/
```
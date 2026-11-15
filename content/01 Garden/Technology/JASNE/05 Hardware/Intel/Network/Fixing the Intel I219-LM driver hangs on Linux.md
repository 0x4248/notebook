---
tags:
  - JASNE/Hardware/Intel
date: 2026-08-22
aliases:
  - fixing the i219-lm driver hang in debian
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
# Fixing the Intel I219-LM driver hang on Linux

***
![[jasne-banner.png]]

## Abstract
The Intel I219-LM component is notorious buggy card that makes the driver crash and makes network completely hang. This can be a significant issue if this is occurring on production hardware especially if there is not a secondary network interface card as redundancy.

## Identifying the issue
To identify the classic I219-LM driver hang, use `journalctl` to look at the machine logs and see if the `e1000e` driver is logging `Detected Hardware Unit Hang`

```
Aug 22 19:06:02 pve-3 kernel: e1000e 0000:00:1f.6 nic0: Detected Hardware Unit Hang:
                                TDH                  <e9>
                                TDT                  <42>
                                next_to_use          <42>
                                next_to_clean        <e8>
                              buffer_info[next_to_clean]:
                                time_stamp           <11630cbd2>
                                next_to_watch        <e9>
                                jiffies              <1164baec0>
                                next_to_watch.status <0>
                              MAC Status             <80083>
                              PHY Status             <796d>
                              PHY 1000BASE-T Status  <3800>
                              PHY Extended Status    <3000>
                              PCI Status             <10>
```

You can also check `dmesg | grep e1000e` for more identifiers suggesting the driver has hung.

## Temporarily fixing the issue
Turning off packet offloading features can stop the NIC from crashing whilst a more permanent solution can be put in:

```bash
ethtool -K nic0 tso off gso off gro off
```

This will make packets go trough the CPU but should not impact performance.

## Persistent solution
Write the following into `/etc/network/if-up.d/e1000e-offload`

```bash
#!/bin/sh
if [ "$IFACE" = "nic0" ]; then
    ethtool -K nic0 tso off
fi
```

Then make it an exactable using `chmod`. You can do this in one command below

```bash
cat > /etc/network/if-up.d/e1000e-offload << 'EOF'
#!/bin/sh
if [ "$IFACE" = "nic0" ]; then
	ethtool -K nic0 tso off gso off gro off
fi
EOF
chmod +x /etc/network/if-up.d/e1000e-offload
```

## Confirm that the settings are applied
Run this command on the affected node after configuration and a reboot to show that the changes have been applied:
```bash
ethtool -k nic0 | grep -E "tcp-segmentation|generic-segmentation|generic-receive"
```

You should see this:
```
generic-receive"
tcp-segmentation-offload: off 
tx-tcp-segmentation: off 
generic-segmentation-offload: off 
generic-receive-offload: off
```

### Identifying hangs in the future
Watch and wait for any other hangs with the following:
```bash
journalctl -k --since today | grep -i "hang\|hardware unit"
```

***
## References
- [How To Fix Proxmox Detected Hardware Unit Hang On Intel NICs First2Host](https://first2host.co.uk/blog/how-to-fix-proxmox-detected-hardware-unit-hang/)`WEB`
- [Intel® Ethernet Connection I219-LM](https://www.intel.com/content/www/us/en/products/sku/82185/intel-ethernet-connection-i219lm/specifications.html) `WEB`
- [Intel® Ethernet Connection I219 Datasheet](https://cdrdv2-public.intel.com/612523/ethernet-connection-i219-datasheet.pdf)`PDF`
- [Fixing Intel e1000e NIC hangs on Proxmox nodes](https://www.garrettlaman.com/Homelab/Fixing-Intel-e1000e-NIC-hangs-on-Proxmox-nodes) `WEB`
- [SOLVED - Intel NIC e1000e hardware unit hang \| Page 2 \| Proxmox Support Forum](https://forum.proxmox.com/threads/intel-nic-e1000e-hardware-unit-hang.106001/page-2) `WEB`
- [Fixing Intel e1000e NIC Failures on Proxmox](https://foggyclouds.io/2026-02-09-proxmox-intel-e1000e-fix/) `WEB`
- [Fix Intel I219-V Detected Hardware Unit Hang \| ServeTheHome Forums](https://forums.servethehome.com/index.php?threads/fix-intel-i219-v-detected-hardware-unit-hang.36700/) `WEB`
- [Bug#1069131: e1000e driver Network Card Detected Hardware Unit Hang](https://www.mail-archive.com/debian-bugs-dist@lists.debian.org/msg1966905.html) `WEB`

---
tags:
  - CompTIA/Network/1
date: 2025-11-28
aliases:
  - ipv4 network addressing
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
# IPv4 Network addressing

***
## What is a IPv4 made of?
- 3 Layer address
- 32 Binary digit number
- Address is logical and not hardware based
- Can be easily changed

*Examples:*
- `192.168.1.1`
- `10.15.10.10`
## Subnet mask
A 32 bit number that divides an IP address into the network portion and the host portion.

```
192.168.1.10
********* $$
^- Network ^- Host
```

The subnet mask usually looks like `255.255.255.0` which allows only the last digit to be altered.

## Gateway
The default gateway is basically the router, and tells the computer where the router is so it can talk to public networks.

>[!tip]
> The gateway is usually the first or last IP address on the network.

---
tags: 
date: 2025-08-13
aliases:
  - rtl-sdr
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
# RTL-SDR

***
RTL-SDR is a USB dongle that uses the RTL2832U chipset to receive radio signals. It is commonly used for software-defined radio (SDR) applications, allowing users to listen to a wide range of frequencies, including FM radio, air traffic control, and amateur radio.

## Installation
Install the `rtl-sdr` package for drivers and utilities.

## Usage
Test your dongle using:
```
rtl_test
```

Capture to a file using the frequency 123.4MHz at 1.8M samples/sec:
```
rtl_sdr capture.bin -s 1.8e6 -f 123.4e6
```



***
## See also
- INSERT
## References
- INSERT
---
tags:
  - JASNE/Windows
date: 2026-08-02
aliases:
  - diagnosing network latency on windows server
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
# Diagnosing Network Latency on Windows Server

***
![[jasne-banner.png]]
## Abstract
Latency can come from many layers of the network, windows (`SERVER` `HOME` `PRO` `EMBED` ) all have diagnostic tools to help identify what layer of the network is introducing latency. This entry documents the various steps on finding a source of such latency.
## Comments
- Tested on Windows Server 2022 Datacenter on DataSystem
- RTT = Round Trip Time (Ping time)
## Diagnosing each layer
Latency issues are rarely isolated unless its hardware related on a single point of failure;  we can eliminate one layer at a time:
### The baseline test to see if the local machine is connected to a local network
The command `ipconfig` can be used to identify the gateway and we can use `ping` to see if the local machine can talk to the gateway and see its RTT.  A low RTT between the gateway and local machine shows us that the LAN and router the local machine is using isn't the root cause of the problem. Windows shows this as `time<1ms`; Linux's `ping` shows fractional milliseconds directly, giving more granular readings.

```powershell
ping -n 20 <GATEWAY>
```

```
Pinging 10.1.1.1 with 32 bytes of data:
Reply from 10.1.1.1: bytes=32 time<1ms TTL=64
[ ... 18 lines omitted, consistent output ]
Reply from 10.1.1.1: bytes=32 time<1ms TTL=64

Ping statistics for 10.1.1.1:
    Packets: Sent = 20, Received = 20, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 0ms, Maximum = 0ms, Average = 0ms
PS C:\Users\Administrator>
```

If this test passes then we can identify if the connection to the router is nominal, then we can ping the intended target again and monitor its RTT. If the ping is high when connecting to a public IPv4 then it can tell us that the local router and network is fine but other hardware such as modems or other routers could be causing the issue.
### Localising delay per hop
Now that you would have identified that either the internal or external network is introducing latency, the next diagnostic step would be using `pathping`. The `pathping` command is perfect for showing what IP is causing the RTT increase.

A related question is why `pathping` is preferred over `tracert` for latency diagnosis, given that both technically report per-hop timing. The two tools discover the path the same way sending probes with increasing TTL values and reading the ICMP Time Exceeded replies. The difference is sample size: `tracert` sends only three probes per hop during discovery, which is enough to map the route but too small a sample to reliably characterise loss or jitter at any given hop. `pathping` performs the same discovery, then follows up with roughly 100 pings to _each_ hop individually, producing statistically meaningful per-hop loss and latency figures rather than a single-pass snapshot

```powershell
pathping 1.1.1.1
```

>[!warning]
> This command can take a long time to give a result, a `Computing statistics for ### seconds...` will show and will update over time to show the command is still processing.

 ```
 PS C:\Users\Administrator> pathping 1.1.1.1

Tracing route to one.one.one.one [1.1.1.1]
over a maximum of 30 hops:
  0  WIN-DC1.datasystem.lan [10.1.1.100]
  1  10.1.1.1
  2  192.168.68.1
  3  172.XX.XX.XXX
  4     *        *     62.XXX.XXX.XX
  5  62.XXX.XXX.XX
  6  62.XX.XX.XXX
  7  195.XXX.XX.XX
  8  141.XXX.XX.XX
  9  one.one.one.one [1.1.1.1]

Computing statistics for 225 seconds...
            Source to Here   This Node/Link
Hop  RTT    Lost/Sent = Pct  Lost/Sent = Pct  Address
  0                                           WIN-DC1.datasystem.lan [10.1.1.100]
                                0/ 100 =  0%   |
  1    0ms     0/ 100 =  0%     0/ 100 =  0%  10.1.1.1
                                0/ 100 =  0%   |
  2    6ms     0/ 100 =  0%     0/ 100 =  0%  192.168.68.1
                                0/ 100 =  0%   |
  3  ---     100/ 100 =100%   100/ 100 =100%  172.XX.XX.XXX
                                0/ 100 =  0%   |
  4   10ms     0/ 100 =  0%     0/ 100 =  0%  62.XXX.XXX.XX
                                0/ 100 =  0%   |
  5   11ms     0/ 100 =  0%     0/ 100 =  0%  62.XXX.XXX.XX
                                0/ 100 =  0%   |
  6   12ms     0/ 100 =  0%     0/ 100 =  0%  62.XX.XX.XXX
                                0/ 100 =  0%   |
  7  ---     100/ 100 =100%   100/ 100 =100%  195.XXX.XX.XX
                                0/ 100 =  0%   |
  8   15ms     0/ 100 =  0%     0/ 100 =  0%  141.XXX.XX.XX
                                0/ 100 =  0%   |
  9   12ms     0/ 100 =  0%     0/ 100 =  0%  one.one.one.one [1.1.1.1]

Trace complete.
 ```

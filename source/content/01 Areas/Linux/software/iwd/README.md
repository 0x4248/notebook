# iwd

iwd is a wireless daemon for [[Linux]]

## Installation

You can install `iwd` using your distribution's package manager. 

### Debian/Ubuntu

```bash
sudo apt install iwd
```

### Fedora

```bash
sudo dnf install iwd
```

### Arch Linux

```bash
sudo pacman -S iwd
```

## Usage

`iwd` comes with a command-line utility called `iwctl` that you can use to manage your wireless connections.

### iwctl 

To start `iwctl`, run the following command:

```bash
iwctl
```

### Connecting to a network

List all available devices:

```bash
[iwd]# device list
```

Connect to a network:

```bash
station <device> scan
station <device> get-networks
station <device> connect <SSID>
```

If a password is required, you will be prompted to enter it.


### Disconnecting from a network

```bash
station <device> disconnect
```
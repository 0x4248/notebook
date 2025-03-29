---
tags:
  - Linux
  - Software
date: 2025-03-25
aliases:
  - tar
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
lang:
  - en
properties-ver: "1.1"
---
# Tar

***
**T**ape **ar**chive is a file format used to archive folders.

## Command usage

```bash
tar <option> <file>
```

### Operations
- Append
- Create
- Extract
- List
- Update

#### Append

`-r` or `--append`

```bash
tar -rvf archive.tar file.txt
```

#### Create

`-c` or `--create`

```bash
tar -cvf archive.tar file.txt
```

#### Extract

`-x` or `--extract` or `--get`

```bash
tar -xvf archive.tar
```

#### List

`-t` or `--list`

```bash
tar -tvf archive.tar
```

#### Update

`-u` or `--update`

```bash
tar -uvf archive.tar file.txt
```

### Options

#### Compression

Tar can be used with compression tools like `gzip` or `bzip2`.

##### Gzip

`-z` or `--gzip`

```bash
tar -czf archive.tar.gz file.txt
```

##### Bzip2

`-j` or `--bzip2`

```bash
tar -cjf archive.tar.bz2 file.txt
```

##### XZ

`-J` or `--xz`

```bash
tar -cJf archive.tar.xz file.txt
```


#### File

`-f` or `--file`

```bash
tar -cf archive.tar file.txt
```

#### Verbose

`-v` or `--verbose`

```bash
tar -cvf archive.tar file.txt
```

#### Directory

`-C` or `--directory`

```bash
tar -cvf archive.tar -C /path/to/directory .
```

#### Wildcard

```bash
tar -cvf archive.tar *.txt
```

#### Exclude

`--exclude`

```bash
tar -cvf archive.tar --exclude='*.txt' .
```
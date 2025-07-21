---
tags:
  - Fleeting
date: 2024-06-10
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# Converting MP4 to Gif
## Basic usage
```bash
ffmpeg -i <INPUT>.mp4 <OUTPUT>.gif
```
## Example
```bash
ffmpeg -i input.mp4 output.gif
```

## Other useful options
```bash
# Set the frame rate

ffmpeg -i input.mp4 -vf "fps=10" output.gif

# Set the size of the output gif
ffmpeg -i input.mp4 -vf "scale=320:-1" output.gif
```

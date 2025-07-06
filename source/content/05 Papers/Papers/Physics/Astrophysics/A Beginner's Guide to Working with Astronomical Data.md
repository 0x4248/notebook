---
tags:
  - Papers/Physics
date: 2025-06-24
aliases:
  - a beginner's guide to working with astronomical data
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
  - sans-font
  - sans-headings
  - center-images
paper-date: 2019-04-30
arxiv-id: 
paper-author: 
mark-read: 
lang:
  - en
properties-ver: "1.1"
---
# A Beginner's Guide to Working with Astronomical Data

***
- **Author:** Markus Pössel
- **Date:** 30/04/2019
- **Link:** [\[1905.13189\] A Beginner's Guide to Working with Astronomical Data](https://arxiv.org/abs/1905.13189)

***

## Abstract

> This elementary review covers the basics of working with astronomical data, notably with images, spectra and higher-level (catalog) data. The basic concepts and tools are presented using both application software (DS9 and TOPCAT) and Python. The level of presentation is suitable for undergraduate students, but should also be accessible to advanced high school students.
>
> *arXiv*

> A look at the basics of using astronomical data and processing the data using software including python and DS9. This guide will go over
> 
> *0x4248*

## Notes on this paper
### Key types of data when working with astronomical data
- **Images**: This is the most common type of data in astronomy and is "a two-dimensional array of pixels, where each pixel value denotes a brightness value"
- **Spectra**: This is a one-dimensional array of data that shows how the brightness of an object varies with wavelength or frequency. In short this is a spectrogram of the object.
- **Catalogs**: This is a collection of data that contains information about many objects, such as their positions, brightness, and other properties.
### Data basics
#### Images
Most professional astronomers use FITS (Flexible Image Transport System). The extension for FITS files is `.fits` or `.fit`. FITS files can contain multiple images and other data, such as headers that contain information about the image.
![Image of the open star cluster Westerlund 2|700x524](https://cdn.esahubble.org/archives/images/screen/heic1509a.jpg)

<p align="center"><b>Credit:</b> ESA/Hubble & NASA</p>

In this image the stars are too small for the even the Hubble to look at any of its structure.  The stars in this image appear as point sources, which means they are so far away that they appear as points of light rather than as extended objects.


---
tags:
  - Meta/Obsidian
date: 2024-10-13
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
# What is this vault?
<p class="text-center" style="margin:0;color:gray;">About this vault</p>

***
This is my **public** obsidian vault. Here I will put my public notes and research. This vault will also include my public study notes which can be mainly found under the computer science part.
## How is this vault structured?
I have structured this vault in a way that allows for organisation of notes.
### Layout 
- 00 Maps
- 01 Areas
- 02 Fleeting
- 03 Projects 
- 04 Archive
- 05 Meta
- 99 Private
#### Maps
This part of the vault contains maps of content within the vault. These pages are primarily to make navigation easier within the vault.
#### Areas
Areas are where most of the notes are stored. These are grouped into areas of interests or topics.

For example this page will be in the obsidian folder.
#### Fleeting
I often put random thoughts and notes.
#### Archive
Old notes that don't have a place anymore or are archived.
#### Meta
Pages and files for the vault to work. This folder also contains updates/change log. 
#### Private
Notes that can not be public. This could be due to copyright or other reasons.
## Plugins
Obsidian plugins can help allot with using your vault. This vault uses several plugins that help me. 
### The "Must have" plugins
These plugins are really useful, and ones I *highly* recommend.
- Completr
- Excalidraw
- Templater
### The other plugins
 I still highly recommend these plugins
- File Color
- Home tab
- Iconize
- Image Toolkit
- Kanban
- Minimal Theme Settings 
- Obsifetch
- PDF++
- Settings Search
- Style Settings
- Vault Statistic
## Typography
There are several fonts I use within this vault. These are controlled using a CSS snippet. In most cases I use the `Jetbrains Mono` font which for me is a very readable font to use. In most files you will see the snippet `bai-headings` this tells obsidian to use the `Bai Jamjuree` font. That font makes headings clear. 
### Sans
Sometimes I get tired of the two main fonts and turn on the `sans.css` snippet which sets the font to `Georgia`. This font is mostly used on medical papers but can also look nice when typing for long periods. The font also allows for Cyrillic and Greek text. 
<p style="font-size:xx-large;text-align:center;margin:0;"><span>Aa</span> <span>Дд</span> <span>Δδ</span> <span>あは</span></p>
 If rendering of the above text does not show, this indicates that Cyrillic and Greek text don't work. Most of the fonts I use don't work with Japanese text. To fix this I use Noto. Google made a font called Noto sans which was designed to solve the problem of text not showing correctly.
 <p style="font-size:xx-large;text-align:center;margin:0;"><span>あはろまな</span></p>
The text above (*which means nothing*) should show the kana letter A, Ha, Ro, Ma, and Na.  This can be done using CSS fallback fonts.

```css
font-family: Georgia, 'Noto Serif', 'Linux Libertine', serif !important;
```
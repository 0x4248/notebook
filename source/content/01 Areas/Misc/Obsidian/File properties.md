---
tags:
  - Meta/Obsidian
date: 2025-01-22
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
lang:
  - en
properties-ver: "1.0"
---
# File properties
<p class="text-center" style="margin:0;color:gray;">How file properties work in this vault</p>

***
In order to add more information about the current file, obsidian file proprieties are added. These properties are standardised within this vault and are versioned so outdated documents can be updated with the newer standard if needed.
## How a base file looks
Base file:
- Tags - *Blank*
- Date - Date the file was made
- cssclasses - css classes
- lang - The language of the document
- properties-ver - Version of obsidian file properties
- aliases - Other names and the lowercase title
- stub - Is the file really barren? Then it is a stub.
## All properties
| Name           | Type | Description                                 |
| -------------- | ---- | ------------------------------------------- |
| tags           | List | File tags                                   |
| cssclasses     | List | CSS classes to use on a page                |
| date           | Date | Date the page was created                   |
| properties-ver | Text | The version of the obsidian file properties |
| stub           | Bool | Marks wether a page is a stub               |
| aliases        | List | Other names and the lowercase title         |
## Versions
### 1.2
Added `stub` to default to help find stubs in the vault.
### 1.1
Lowercase title requirement added to aliases to help with linking notes within sentences.
### 1.0
The first proper version where obsidian file properties were documented and versioned.

Base file:
- Tags - Blank
- Date - Date the file was made
- cssclasses - css classes
- lang - The language of the document
- properties-ver - Version of obsidian file properties

### No version
These are older files that were made before the new system or have been imported from other vaults.
---
tags:
  - Rust
  - fleeting
date: 2024-06-09
cssclasses:
  - neo-headings
  - bai-headings
  - rounded-images
---
## With comments
```rust
/* Import the needed libraries */
use std::time::{SystemTime, UNIX_EPOCH};

fn main() {
    /* Get the current date and time */
    let now = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs();
    let date = chrono::Utc.timestamp(now as i64, 0).format("%a %b %d %H:%M:%S %Z %Y").to_string();
    /* Print the date and time */
    println!("{}", date);
}
```

## Without

```rust
use std::time::{SystemTime, UNIX_EPOCH};

fn main() {
    let now = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs();
    let date = chrono::Utc.timestamp(now as i64, 0).format("%a %b %d %H:%M:%S %Z %Y").to_string();
    println!("{}", date);
}
```

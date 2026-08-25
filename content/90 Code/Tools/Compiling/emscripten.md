---
publish: true
aliases:
  - emsdk
  - emcc
  - em++
created: 2026-07-08T12:47:54.150Z
modified: 2026-07-18T04:15:35.306Z
published: 2026-07-18T04:15:35.306Z
tags:
  - todo
---

## Overview

### Installation

```sh
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
emsdk install latest
emsdk activate latest
```

### Usage

```sh
cd <emsdk-install-location>
emsdk_env.bat # This adds emsdk environment variables for this terminal window only. 

# My path:
C:/Tools/emsdk/emsdk_env.bat

emcc main.cpp -o index.html # Example on compiling a file to wasm and supporting files (index.html, index.js, index.wasm)

# Running a local web server
# Using emscipten's minimal server
emrun --no_browser --port 8080 index.html
# Or use python
python -m http.server 8080
```

## Links

- [Docs](https://emscripten.org/index.html)

---
publish: true
created: 2026-07-18T02:37:24.100Z
modified: 2026-07-18T04:25:07.262Z
published: 2026-07-18T04:25:07.262Z
tags:
  - todo
---

Links:

- [CMake Guides](https://cmake.org/cmake/help/latest/guide/tutorial/index.html) (Official)
- [GitHub - ttroy50/cmake-examples](https://github.com/ttroy50/cmake-examples)

> [!TIP] If retrying doesn't work,
> Try deleting `CMakeCache.txt` as a last resort. Maybe `cmake_install.cmake` too (but not sure for this)

## To build

Method 1:

```sh
# Build and put the output into a build folder
cmake -B build 
```

Method 2:

```sh
mkdir build
cd build
cmake ..
```

## Other links to check

- [Unit testing in cmake](https://cmake.org/cmake/help/book/mastering-cmake/chapter/Testing%20With%20CMake%20and%20CTest.html)

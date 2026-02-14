---
publish: true
created: 2026-02-02T22:23:14.278+08:00
modified: 2026-02-02T22:24:39.856+08:00
published: 2026-02-02T22:24:39.856+08:00
cssclasses: ""
---


```cpp
#include <string>

std::string trim(const std::string& str) {
    size_t first = str.find_first_not_of(" \t\n\r");
    if (first == std::string::npos) return "";
    size_t last = str.find_last_not_of(" \t\n\r");
    return str.substr(first, last - first + 1);
}

std::string a{"  hello world  "};
a = trim(a);  // a is now "hello world"
```

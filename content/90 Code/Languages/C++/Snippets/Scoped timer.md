---
publish: true
tags:
  - snippets/profiling
---

## Header file (.h)

```cpp
#pragma once
#include <chrono>

/**
 * @brief	Simple timer for profiling. 
 *			To use, just create a variable of type ScopedTimer.
 *			Once it goes out of scope it'll output the time taken
 */
class ScopedTimer
{
public:
	ScopedTimer(const std::string& _name);
	~ScopedTimer();

	void Print(std::ostream& os);
private:
	std::string name;
	std::chrono::time_point<std::chrono::high_resolution_clock> start;
};

void operator <<(std::ostream& os, ScopedTimer& timer);
```

## Source file (.cpp)

```cpp
#include "ScopedTimer.h"
#include <iostream>

ScopedTimer::ScopedTimer(const std::string& _name) :
	name(_name),
	start(std::chrono::high_resolution_clock::now())
{
}

ScopedTimer::~ScopedTimer()
{
	Print(std::cout);
}

void ScopedTimer::Print(std::ostream& os)
{
	// Docs: https://en.cppreference.com/w/cpp/chrono/duration/duration_cast
	auto now = std::chrono::high_resolution_clock::now();
	const std::chrono::duration<double, std::milli> duration = now - start;
	os << name << " took " << duration << "ms\n";
}

void operator<<(std::ostream& os, ScopedTimer& timer)
{
	timer.Print(os);
}
```

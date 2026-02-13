---
publish: true
created: 2026-01-29T17:39:51.332+08:00
modified: 2026-01-29T23:35:43.831+08:00
cssclasses: ""
---


```cpp
class Singleton
{
public:
	Singleton(const Singleton&) = delete; // Delete copy constructor
	static Singleton& Get()
	{
		static Singleton instance;
		return instance;
	}	
	
	static float Foo() { return Get().Value; }
private:
	Singleton() {}
	
	static float Value = 0.5f;
}
```

Reference: [Singletons in C++ by The Cherno](https://youtu.be/PPup1yeU45I)

	
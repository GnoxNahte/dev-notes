---
publish: true
created: 2026-01-29T17:39:51.332+08:00
modified: 2026-06-01T10:34:28.888+08:00
published: 2026-06-01T10:34:28.888+08:00
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
	
	static float GetValue() { return Get().Value; }
private:
	Singleton() {}
	
	static float Value = 0.5f;
}
```

Reference: [Singletons in C++ by The Cherno](https://youtu.be/PPup1yeU45I)

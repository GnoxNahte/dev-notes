---
publish: true
created: 2026-01-29T09:39:51.332Z
modified: 2026-06-01T02:34:28.888Z
published: 2026-06-01T02:34:28.888Z
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

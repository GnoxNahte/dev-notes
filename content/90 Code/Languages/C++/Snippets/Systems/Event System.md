---
publish: true
created: 2026-02-28T15:01:45.754+08:00
modified: 2026-03-01T12:39:08.974+08:00
published: 2026-03-01T12:39:08.974+08:00
---

```cpp
#pragma once

#include <functional>

using EventId = unsigned long;

class EventSystem
{
public:
	template<typename T>
	static EventId Subscribe(std::function<void(const T&)> callback)
	{
		EventId id = nextId++;
		auto& listeners = GetListeners<T>();
		listeners.emplace(id, callback);
		return id;
	}

	template<typename T>
	static void Unsubscribe(EventId id)
	{
		GetListeners<T>().erase(id);
	}

	template<typename T>
	static void Trigger(const T& data)
	{
		auto& listeners = GetListeners<T>();

		for (auto& [id, callback] : listeners)
			callback(data);
	}

	template<typename T>
	static void Clear()
	{
		GetListeners<T>().clear();
	}

private:
	template<typename T>
	static std::unordered_map<EventId, std::function<void(const T&)>>& GetListeners()
	{
		static std::unordered_map<EventId, std::function<void(const T&)>> listeners;
		return listeners;
	}

	inline static EventId nextId = 0;
};

```

To improve:

- Use `vector` instead of `unordered_map`? Store `EventId` and `function` in a struct for faster iterating, esp for very few listener count.
- Return a `EventHandle` that automatically handles unsubscribing instead?

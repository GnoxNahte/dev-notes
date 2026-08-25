---
publish: true
created: 2026-08-19T04:30:30.645Z
modified: 2026-08-19T04:31:12.728Z
published: 2026-08-19T04:31:12.728Z
tags:
  - todo
---

```csharp
	// Singleton
    public static SingletonClass Instance { get; private set; }

    private void Awake()
    {
        if (Instance == null)
            Instance = this;
        else
        {
            Destroy(gameObject);
            Debug.LogError("More than 1 SingletonClass. Destroying this. Name: " + name);
            return;
        }
    }  
  
	private void OnDestroy()  
	{  
	    if (Instance == this)  
	        Instance = null;  
	}
```

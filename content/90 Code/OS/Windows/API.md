---
publish: true
created: 2026-01-07T21:24:40.394+08:00
modified: 2026-01-07T21:28:40.112+08:00
published: 2026-01-07T21:28:40.112+08:00
---

## Resizable window

Partly from chat gpt

```cpp
	HWND hwnd = AESysGetWindowHandle();
	LONG_PTR style = GetWindowLongPtr(hwnd, GWL_STYLE);

	// Add resizable frame
	style |= WS_THICKFRAME;

	SetWindowLongPtr(hwnd, GWL_STYLE, style);
	
	// Tell Windows to recalc the non-client area
	// Function call: https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-setwindowpos
	// Which will call: https://learn.microsoft.com/en-us/windows/win32/winmsg/wm-nccalcsize
	SetWindowPos(
		hwnd,
		nullptr,
		0, 0, 0, 0,
		SWP_NOMOVE | SWP_NOSIZE | SWP_NOZORDER | SWP_FRAMECHANGED
	);
```

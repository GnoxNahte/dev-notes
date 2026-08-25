---
publish: true
created: 2026-08-03T13:09:13.702Z
modified: 2026-08-03T13:37:42.593Z
published: 2026-08-03T13:37:42.593Z
tags:
  - todo
---

## Overview

This note is to calculate the look, up and right direction vectors of the Camera. Then it passes those vectors to [[02 - View Transform|View Matrix]] to calculate the view transform.

### Calculating Look, Up, Right vectors

> [!WARNING] This is only for normal cameras without roll and can't look past $(0,1,0)$ or $(0, -1, 0)$
> If the camera has full rotation like a drone/flight simulator, these algorithm isn't meant for it. Need a different algorithm.
> ^initial-warning

Assume you have the camera's position ($C_P$) and target ($C_T$),

```cpp
glm::vec3 pos, target; // Assume has values & pos != target

glm::vec3 look = glm::normalize(target - pos);
glm::vec3 right = glm::cross(look, glm::vec3(0.f, 1.f, 0.f)); 
glm::vec3 up = glm::cross(right, look);
```

Then pass these vectors to the [[02 - View Transform|View Matrix]]

#### Explanation - Look vector

```cpp
glm::vec3 look = glm::normalize(target - pos);
```

This is just [[1E. Vector - Basics Explanation (2D)#Subtraction|subtracting vectors]]

#### Explanation - Right vector

```cpp
glm::vec3 right = glm::cross(look, glm::vec3(0.f, 1.f, 0.f)); 
```

Cross the look direction with the _estimated_ up direction.
This is the reason for the [[#^initial-warning]] as:

- If player is looking directly up => look vector == $(0,1,0)$ => right will be $\vec{0}$ as crossing 2 parallel vectors results in the $\vec{0}$
- Since we are hardcoding the up vector,
  - even if we miss $(0,1,0)$, we still can't look upside down
  - Also this means it can't have any roll

#### Explanation - Up vector

```cpp
glm::vec3 up = glm::cross(right, look);
```

Cross look vector with the calculated right vector to get the actual up vector

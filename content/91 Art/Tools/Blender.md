---
publish: true
created: 2026-08-09T09:16:01.256Z
modified: 2026-08-10T13:12:20.601Z
published: 2026-08-10T13:12:20.601Z
tags:
  - todo
---

## Keybinds

|     Keybind | Action                                         | Note                                                 |
| ----------: | ---------------------------------------------- | ---------------------------------------------------- |
|   Shift + S | Change 3D Cursor or selected object's position |                                                      |
|          F9 | Bring up last action's menu                    | Useful if want to bring back menu like mesh creation |
|    Ctrl + P | Set Parent                                     |                                                      |
|     Alt + P | Remove Parent                                  |                                                      |
| Alt + G/R/S | Clears Translation/Rotation/Scale              |                                                      |

## Export

### Export to Unity

Referencing from this video:
![](https://www.youtube.com/watch?v=oBhCxC1hUg4)

Blender export settings:

| Setting                                                   | Value                              |
| --------------------------------------------------------- | ---------------------------------- |
| Path Mode                                                 | Copy                               |
| Path Mode - Embed Texture (Small button beside Path Mode) | Enable                             |
| Object Types                                              | Usually only "Armature" and "Mesh" |
| Apply Scalings                                            | FBX All                            |
| Transform - Forward                                       | -Y Forward                         |
| Transform - Up                                            | Z Up                               |
| Use Space Transform                                       | Uncheck                            |

Still got some other settings to change in Unity, watch video

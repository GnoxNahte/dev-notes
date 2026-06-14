---
publish: true
created: 2026-06-06T16:06:55.517+08:00
modified: 2026-06-06T21:40:17.830+08:00
published: 2026-06-06T21:40:17.830+08:00
tags:
  - todo
  - opengl/4-5
---

> [!NOTE] This uses the [[Structure of Arrays (SoA) vs Arrays of Structure (AoS)|Structure of Arrays (SoA) method]]

## Code

```cpp
struct GLModel
{
	GLenum primitive_type;
	GLuint primitive_cnt;

	GLuint vaoid;
	GLuint draw_cnt;
};

GLModel GetBox() {
	std::array<glm::vec2, 4> pos_vtx{
		glm::vec2{ 0.5f, -0.5f}, glm::vec2{ 0.5f,  0.5f},
		glm::vec2{-0.5f,  0.5f}, glm::vec2{-0.5f, -0.5f}
	};

	std::array<glm::vec3, 4> clr_vtx{
		glm::vec3 { 1.f, 0.f, 0.f }, glm::vec3 { 0.f, 1.f, 0.f },
		glm::vec3 { 0.f, 0.f, 1.f }, glm::vec3 { 1.f, 1.f, 1.f },
	};

	size_t pos_data_offset = 0;
	size_t pos_attrib_size = sizeof(glm::vec2);
	size_t pos_data_size = pos_attrib_size * pos_vtx.size();

	size_t clr_data_offset = pos_data_size;
	size_t clr_attrib_size = sizeof(glm::vec3);
	size_t clr_data_size = clr_attrib_size * clr_vtx.size();

	GLModel mdl;

	// Create VBO
	GLuint vbo;
	glCreateBuffers(1, &vbo);
	glNamedBufferStorage(vbo, pos_data_size + clr_data_size, nullptr, GL_DYNAMIC_STORAGE_BIT);
	glNamedBufferSubData(vbo, pos_data_offset, pos_data_size, pos_vtx.data());
	glNamedBufferSubData(vbo, clr_data_offset, clr_data_size, clr_vtx.data());
	
	// Create VAO
	glCreateVertexArrays(1, &mdl.vaoid);

	glEnableVertexArrayAttrib(mdl.vaoid, 0);
	glVertexArrayVertexBuffer(mdl.vaoid, 0, vbo, pos_data_offset, pos_attrib_size);
	glVertexArrayAttribFormat(mdl.vaoid, 0, 2, GL_FLOAT, GL_FALSE, 0);
	glVertexArrayAttribBinding(mdl.vaoid, 0, 0);
	
	glEnableVertexArrayAttrib(mdl.vaoid, 1);
	glVertexArrayVertexBuffer(mdl.vaoid, 1, vbo, clr_data_offset, clr_attrib_size);
	glVertexArrayAttribFormat(mdl.vaoid, 1, 3, GL_FLOAT, GL_FALSE, 0);
	glVertexArrayAttribBinding(mdl.vaoid, 1, 1);

	glBindVertexArray(0);
}
```

## Explanation of OpenGL functions

### glCreateBuffers

```cpp
void glCreateBuffers(GLsizei n, GLuint *buffers);
```

`glCreateBuffers` returns _`n`_ previously unused buffer names in _`buffers`_, each representing a new buffer object initialized as if it had been bound to an unspecified target.

[docs.gl](https://docs.gl/gl4/glCreateBuffers)

### glNamedBufferStorage

```cpp
void glNamedBufferStorage(GLuint buffer, GLsizeiptr size, const void *data, GLbitfield flags);
```

`glNamedBufferStorage` create a new immutable data store.

- _`buffer`_ is the name of the buffer object that will be configured.
- `size` specifies the size of the data store.
- If an initial data is available, its address may be supplied in _`data`_. Otherwise, to create an uninitialized data store, _`data`_ should be `NULL`.

[docs.gl](https://docs.gl/gl4/glBufferStorage)

### glNamedBufferSubData

[docs.gl](https://docs.gl/gl4/glBufferSubData)

### glCreateVertexArrays

### glEnableVertexArrayAttrib

### glVertexArrayVertexBuffer

### glVertexArrayAttribFormat

### glVertexArrayAttribBinding

### glBindVertexArray

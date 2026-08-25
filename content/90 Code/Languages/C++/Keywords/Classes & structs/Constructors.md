---
publish: true
created: 2026-08-01T02:12:08.008Z
modified: 2026-08-02T13:58:30.963Z
published: 2026-08-02T13:58:30.963Z
tags:
  - todo
---

## When its implicitly declared

|     | Default constructor | Destructor | Copy Constructor | Copy Assignment |     |
| --- | ------------------- | ---------- | ---------------- | --------------- | --- |
|     |                     |            |                  |                 |     |

## Types of Constructors

### Single-argument constructor

### Copy constructor

> [!WARNING] [[#Shallow copy]] when using pointers

> [!WARNING] Copy constructor's params cannot be the class name passed by value
> Example: `Foo(Foo other);`
> This isn't allowed as to make a copy of the argument, it needs to use the copy constructor -> which calls this constructor -> makes an infinite loop.
>
> Error: Copy constructor must pass its first argument by reference (clang constructor\_byvalue\_arg)
> ^copy-constructor-pass-by-value

#### Copying parent classes

This isn't possible as it isn't possible to have virtual constructors

So to solve this, add a `clone()` function on both base and derived classes.
\* `clone` is a commonly used name for this pattern

```cpp
struct Base {
	Base() = default;
	virtual ~Base() = default;
	
	virtual Base* clone() const = 0;
	
	int i0; // Any data from Base class
};

struct Derived : Base {
	Derived() = default;
	
	Derived* clone() const override {
		return new Derived{ *this };
	}
	
	int i1; // Data from Derived class
};

int main() {
	std::vector<Base*> v;
	v.push_back(new Derived{});
	
	// === Now I want to copy the first element ===
	// This is wrong! As there's no virtual constructor.
	// Slices: only copies Base portion, Derived::i1 is lost
	// decltype(v[0]) == Base*
	Base* copy_wrong = new Derived(*v[0]); 
	
	// Use Base.clone(),
	// Since clone is a virtual function, it will use the correct function to clone it
	Base* copy_correct = v[0]->clone();
	v.push_back(copy_correct);
}
```

#todo - clean up & check correctness

### Move constructor

> [!IMPORTANT] Move constructors must always be `noexcept`

### Sink constructor

The sink constructor combines both [[#Copy constructor]] and [[#Move constructor]].

When passing...

| Comparison    | Copy + Move constructor                                                    | Sink constructor                                                                          |
| ------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Pass `lvalue` | Call copy - 1 copy                                                         | Call sink - 1 copy + move<br>- Copy when constructing string<br>- Move other -> name      |
| Pass `rvalue` | Call move - 1 move                                                         | Call sink - 2 moves<br>- Move constructor when constructing other<br>- Move other to name |
| Benefits      | Slightly more optimised,<br>but compiler might optimise move call for sink | Less duplicated code, easier to maintain                                                  |

```cpp
class Person {
public:
    // Usual copy + move constructor
    // Person(const std::string& other) : name(other) {}       // Copy constructor
    // Person(std::string&& other) : name(std::move(other)) {} // Move constructor

    // Sink constructor
    Person(std::string other) : name(std::move(other)) {}
private:
    std::string name;
};
```

> [!NOTE] Why need to pass each parameter individually, cannot pass the class as value?
> See [[#^copy-constructor-pass-by-value]]

See [[#Sink constructor vs Forwarding constructor]]

### Forwarding constructor

Uses [[Perfect forwarding]]

```cpp
class Person {
public:
    // Usual copy + move constructor
    // Person(const std::string& other) : name(other) {}       // Copy constructor
    // Person(std::string&& other) : name(std::move(other)) {} // Move constructor

    // Forwarding constructor
    template<typename T>
    explicit Person(T&& other) : name(std::forward<T>(other)) {}
private:
    std::string name;
};
```

#### Sink constructor vs Forwarding constructor

Since both constructor combines the move and copy constructor, what's the difference?

|               | Sink Constructor | Forwarding Constructor                                                                 |
| ------------- | ---------------- | -------------------------------------------------------------------------------------- |
| Pass lvalue   | 1 Copy, 1 Move   | 1 Copy                                                                                 |
| Pass rvalue   | 2 Moves          | 1 Move                                                                                 |
| Syntax        | Simpler          | Slightly more complicated                                                              |
| Compile times | Faster           | Slower - as need to init template                                                      |
| Others        |                  | Easy to link with [[Variadic Template Functions]] if needed as it's already a template |

TLDR - pros of each constructor:

- **Sink constructor** - simpler syntax, faster compile times
- **Forwarding constructor** - Slightly faster (1 less move - but move is considered light)

### Member initialiser list

## Aggregate initialization

When there is no constructor defined explicitly
Reference: [cppreference](https://en.cppreference.com/w/cpp/language/aggregate_initialization.html)

## Exception handling

### Throwing in constructor body

> [!WARNING] If there's an exception in the constructor, the destructor WILL NOT be called!
> As technically the full object isn't constructed fully,
> -> So need to manually free any objects if it has been created

### Function try block - Catching in member initialiser list or base class constructor

Link:

- [cppreference - Function try block](https://en.cppreference.com/cpp/language/try#:~:text=Function%20try%20block,-A)

## Shallow Copy

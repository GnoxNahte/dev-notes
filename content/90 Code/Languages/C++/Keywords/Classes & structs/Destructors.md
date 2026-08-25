---
publish: true
created: 2026-07-24T14:16:23.405Z
modified: 2026-08-02T11:56:19.995Z
published: 2026-08-02T11:56:19.995Z
tags:
  - todo
---

## Virtual Destructors

==IMPT== - Most of the time, base classes should have virtual destructors. If not there'll be memory issues.

### Why need virtual destructors

> [!QUOTE] From the [StackOverflow answer](https://stackoverflow.com/a/461224/21099543)
> Virtual destructors are useful when you might potentially delete an instance of a derived class through a pointer to base class:
>
> ```cpp
> class Base 
> {
>     // some virtual methods
> };
>
> class Derived : public Base
> {
>     ~Derived()
>     {
>         // Do some important cleanup
>     }
> };
> ```
>
> Here, you'll notice that I didn't declare Base's destructor to be virtual. Now, let's have a look at the following snippet:
>
> ```cpp
> Base *b = new Derived();
> // use b
> delete b; // Here's the problem!
> ```
>
> Since Base's destructor is not virtual and b is a Base\* pointing to a Derived object, delete b has [undefined behaviour](https://stackoverflow.com/q/2397984/20984):
>
> > \[In delete b], if the static type of the object to be deleted is different from its dynamic type, the static type shall be a base class of the dynamic type of the object to be deleted and the static type shall have a virtual destructor or the behavior is undefined.
>
> In most implementations, the call to the destructor will be resolved like any non-virtual code, meaning that the destructor of the base class will be called but not the one of the derived class, resulting in a resources leak.
>
> To sum up, always make base classes' destructors virtual when they're meant to be manipulated polymorphically.
>
> If you want to prevent the deletion of an instance through a base class pointer, you can make the base class destructor protected and nonvirtual; by doing so, the compiler won't let you call delete on a base class pointer.
>
> You can learn more about virtuality and virtual base class destructor in [this article from Herb Sutter](http://www.gotw.ca/publications/mill18.htm).

> [!TIP] A pure virtual or default destructor works too!
>
> ```cpp
> class Base {
> 	// ONE of these:
> 	~Base() = 0;
> 	~Base() = default;
> }
> ```

### When virtual destructors isn't needed

Only isn't needed when...

- No intention to derive classes from it
- No instantiation on the heap
- No intention to delete a derived class from the base class

Pros/Cons:

- Don't have the [[Inheritance#Cost of virtual|cost of virtual]] if there's no other virtual functions
- Memory issues for [[Destructors#Virtual Destructors|Virtual Destructors]] **if** the code deletes from the base pointer

So unless the code is performance critical, all base class that will be inherited from should have virtual destructors

Links:

- [StackOverflow Ans - Any specific reasons to use non-virtual destructors](https://stackoverflow.com/a/8698493/21099543)
- [StackOverflow Ans - When should you not use virtual destructors?](https://stackoverflow.com/a/300995/21099543)

## Throwing in destructors - Not allowed

Destructors are implicitly `noexcept`

Links:

- https://stackoverflow.com/questions/30771765/destructor-throwing-an-exception
- https://www.sandordargo.com/blog/2026/04/01/when-a-destructor-throws

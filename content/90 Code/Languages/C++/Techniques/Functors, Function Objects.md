---
publish: true
links:
  - https://stackoverflow.com/questions/6451866/why-use-functors-over-functions
tags:
  - todo
---

## Why use

- Can hold state
- Able to store and pass around as variables

## Example

### Example - STL

C++ STL function objects: [cppreference](https://en.cppreference.com/cpp/utility/functional#:~:text=Operator%20function%20objects)

### Example - Custom

Reference - https://stackoverflow.com/q/6451866

```cpp
class CalculateAverage
{
public:

   CalculateAverage() : num (0) , sum (0) {  }

   void operator () (double elem) 
   {
      num++; 
      sum += elem;
   }

   operator double() const
   {
       return sum / num;
   }
private:
   std::size_t num;
   double sum;
};

```

## Links

- [cppreference - Function Objects](https://en.cppreference.com/cpp/utility/functional)

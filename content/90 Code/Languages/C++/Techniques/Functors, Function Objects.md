---
publish: true
links:
  - https://stackoverflow.com/questions/6451866/why-use-functors-over-functions
tags:
  - todo
---

## Why use

- Mainly can hold state

## Example

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

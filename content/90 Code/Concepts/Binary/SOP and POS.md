---
publish: true
---

## SOP (Sum of Product)

Lecture notes: [[04 Boolean algebra - Lecture.pdf#page=18&annotation=208R|04 Boolean algebra - Lecture, p.18]]
Features:

- Can count how many times the expression results to 1 by counting the number of parts or number of (+)
- Once one of the 'parts' is 1, the expression results to 1

### Steps

- Find all the columns where the result is 1
- Get the 'part', when the variables is equal to 1
- Combine all of the parts together, by 'adding' (OR) together

### Example

Truth table for `A!C+B`:

| A   | B   | C   | A!C+B | Parts |
| --- | --- | --- | ----- | ----- |
| 0   | 0   | 0   | 0     | -     |
| 0   | 0   | 1   | 0     | -     |
| 0   | 1   | 0   | 1     | !AB!C |
| 0   | 1   | 1   | 1     | !ABC  |
| 1   | 0   | 0   | 1     | A!B!C |
| 1   | 0   | 1   | 0     | -     |
| 1   | 1   | 0   | 1     | AB!C  |
| 1   | 1   | 1   | 1     | ABC   |
SOP = Add up all the parts
SOP = !AB!C+!ABC+A!B!C+AB!C+ABC
If simplify ^, will end up with A!C+B

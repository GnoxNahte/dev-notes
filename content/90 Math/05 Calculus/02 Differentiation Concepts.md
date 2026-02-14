---
publish: true
aliases:
  - Differentiation Basics
created: 2026-01-23T14:04:00.643+08:00
modified: 2026-02-12T16:55:00.165+08:00
published: 2026-02-12T16:55:00.165+08:00
cssclasses: ""
math-level: 3 - Uni Yr 1
---

 
## Definition
Derivatives is used to find the **rate of change** or **slope of the line** at a point.

The derivative of a function $f(x)$ is denoted by $f'(x)$ 

> [!INFO]- 3b1b paradox on derivatives
> Finding the **instantaneous rate of change**? - This contradicts itself.
> Change requires 2 different points to compare against
> 
> ![](https://www.youtube.com/watch?v=9vKqVkMQHKk&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr&index=2&pp=iAQB)

### First definition
$$
f\,'(a) = \lim_{ h \to 0 } \frac{f(a+h)-f(a)}{h}
$$

### Second definition
$$
f\,'(a)=\lim_{ x \to a } \frac{f(x)-f(a)}{x-a}
$$

### An Example
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: true
grid: true
---
f(x) = x^2-2x-4
g(x)= 2x-2
```
$$
\begin{align}
f(x) &= x^2-2x-4 \\
f'(x) &= 2x-2
\end{align}
$$

In the graph, when the derivative, $f\,'(x)$ - red line, is...
- < 0, $f(x)$ keeps decreasing
- = 0, no change of $f(x)$ (at that point)
- \> 0, $f(x)$ keeps increasing

### Understanding the definition
Given a linear function: $y=mx+c$, find the gradient ($m$) given any two points $(x_0, y_0), (x_1, y_1)$ 
$$
m = \frac{\text{Change of y}}{\text{Change of x}} = \frac{\Delta y}{\Delta x} = \frac{y_1-y_0}{x_1-x_0}
$$

Now, for any generic function, given $y=f(x)$,
Let $x$ be the point we want to gradient of the point and 
Let $\Delta x$ be a very small change from $x$ (Example: $\Delta x=0.0001$)

So, gradient between $f(x)$ and $f(a)$ is:
$$
\frac{f(x+a)-f(x)}{x+a-x}=\frac{f(x+a)-f(x)}{a}
$$
Now, as $a$ approaches to $x$ (related to [[90 Math/05 Calculus/01 Limits\|Limits]]), distance between $x$ and $a$ tends to $0$, this gradient makes it look closer and closer to a tangent to the line. See [Math Is Fun link](https://www.mathsisfun.com/calculus/derivatives-introduction.html) 

Therefore, the gradient of the function

Another way to write it:
Let $y$ be a variable that's very close to $x$
$$
f'(x) = \frac{f(y)-f(x)}{y-x}
$$

Also see from 3b1b:
- [Essence of calculus](https://www.3blue1brown.com/?v=essence-of-calculus#video-section) 
- [Derivative paradox](https://www.3blue1brown.com/?v=derivatives#video-section) 
- [Power rule through geometry](https://www.3blue1brown.com/?v=derivatives-power-rule#video-section) 

## Notation

> [!NOTE] Difference between $\frac{dy}{dx}$ and $\frac{d}{dx}$
> Given a function $f(x)=x^2$,
> $\frac{dy}{dx}=\frac{d}{dx}(x^2)=2x$
> 
> Can think of it this way:
> - $\frac{dy}{dx}$ is a noun. The rate of change
> - $\frac{d}{dx}$ is a verb. It gets the rate of change out of whatever comes next
>   
>   Got it from: [Reddit post](https://www.reddit.com/r/learnmath/comments/bjlyjw/whats_the_difference_between_ddx_and_dydx/)

## Slope/gradient of different lines
### Linear function
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: true
grid: true
---
y=3x-2
```

$$
f(x) = mx + c
$$

## References
- [3Blue1Brown - Essence of calculus](https://www.youtube.com/watch?v=WUvTyaaNkzM&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr) (or [Article](https://www.3blue1brown.com/?v=essence-of-calculus#video-section))
- [Math Is Fun - Introduction to Derivatives](https://www.mathsisfun.com/calculus/derivatives-introduction.html) 


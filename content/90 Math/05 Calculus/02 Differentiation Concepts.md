---
publish: true
aliases:
  - Differentiation Basics
created: 2026-01-23T14:04:00.643+08:00
modified: 2026-02-21T21:46:13.944+08:00
published: 2026-02-21T21:46:13.944+08:00
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

> [!TIP] Can use this reasoning to test if the graph is increasing/decreasing
> $f\,'(-2) < 0$ - So $f(x)$ is decreasing
> $f\,'(2) > 0$ - So $f(x)$ is increasing

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

### Higher-order derivatives
_Higher-order derivatives_ are the result of differentiating a function repeatedly. 

> [!EXAMPLE] Example - Distance, velocity, acceleration
> Let $f(t)$ be the distance equation
> Then,
> - $f\,'(t)$ - Velocity (Rate of change of distance)
> - $f\,''(t)$ - Acceleration (Rate of change of velocity)
> - $f\,'''(t)$ - Jerk (Rate of change of acceleration)

## Notation
### Using dy/dx
- 1st derivative: $\frac{dy}{dx}$ or $\frac{d}{dx}[f(x)]$
- 2nd derivative: $\frac{d^2y}{dx^2}$
- $n^{th}$ derivative: $\frac{d^ny}{dx^n}$ 

> [!NOTE] Difference between $\frac{dy}{dx}$ and $\frac{d}{dx}$
> Given a function $f(x)=x^2$,
> $\frac{dy}{dx}=\frac{d}{dx}(x^2)=2x$
> 
> Can think of it this way:
> - $\frac{dy}{dx}$ is a noun. The rate of change
> - $\frac{d}{dx}$ is a verb. It gets the rate of change out of whatever comes next
>   
>   Got it from: [Reddit post](https://www.reddit.com/r/learnmath/comments/bjlyjw/whats_the_difference_between_ddx_and_dydx/)

### Using Function Primes
- 1st derivative: $f\,'(x)$
- 2nd derivative: $f\,''(x)$
- 3rd derivative: $f\,'''(x)$
- $n^{th}$ derivative: $f^{(n)}(x)$ 

## Turning points
#todo - Change to Uses/Applications of derivation?

Also known as *critical points*, it's where
- $f$ changes switches between decreasing and increasing.
- which can be found where $f\,'(c)=0$ 
- or when $f$ is not differentiable at $c$ #todo - *(unsure?)* Example: $f(x)=|x|$

### Example - Quadratic
Using the [[90 Math/05 Calculus/02 Differentiation Concepts#Quadratic]] example below,
$$
\begin{align}
f(x) &= x^2-2x-4 \\
f'(x) &= 2x-2
\end{align}
$$
The turning point for $f(x)$ is at $f\,'(x)=0$
$$
\begin{align}
0&=2x-2\\
x&=1
\end{align}
$$

### Example - Cubic
Using the [[90 Math/05 Calculus/02 Differentiation Concepts#Cubic]] example below,
$$
\begin{align}
f(x) &= 2x^3+4x^2+2x+1\\
f'(x) &= 6x^2+8x+2
\end{align}
$$
The turning point for $f(x)$ is at $f\,'(x)=0$
$$
\begin{align}
0&=6x^2+8x+2 \\
0&=3x^2+4x+1 \\
0&=(3x+1)(x+1)
\end{align}
$$
So, the turning point for $f(x)$ is the roots of $f\,'(x)$ which is 
$$
x=-\frac{1}{3} \text{ and } x=-1
$$
### Example - Sin
Using the [[90 Math/05 Calculus/02 Differentiation Concepts#sin]] example below,
#### sin
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: true
grid: true
---
f(x) = 5sin(x)
g(x) = 5cos(x)
```
$$
\begin{align}
f(x)&=\sin{x}\\
f\,'(x)&=\cos{x}
\end{align}
$$

The turning point for $f(x)$ is at $f\,'(x)=0$
$$
\begin{align}
\cos{x}&=0 \\
x&=\cos^{-1}{(0)} \\
&=\frac{\pi}{2}
\end{align}
$$
Since $\cos$ is $0$ at every $\frac{\pi}{2}$ interval, the turning points are at 
$$
x=\frac{\pi}{2}+n\pi
$$
where $n$ is at any integer.

## Slope/gradient of different lines
### Linear and Power
#### Linear
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: true
grid: true
---
f(x)=2x-5
g(x)=2
```

$$
\begin{align}
f(x) &= mx + c\\
f\,'(x)&=m
\end{align}
$$

#### Quadratic
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

#### Cubic
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-5,5,-5,5]
disableZoom: true
grid: true
---
f(x) = 2x^3+4x^2+2x+1
g(x)= 6x^2+8x+2
```
$$
\begin{align}
f(x) &= 2x^3+4x^2+2x+1\\
f'(x) &= 6x^2+8x+2
\end{align}
$$

### Reciprocal and Exponential
#### Reciprocal
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-5,5,-5,5]
disableZoom: true
grid: true
---
f(x) = 1/x
g(x)= -1/(x^2)
```
$$
\begin{align}
f(x)&=\frac{1}{x} \\
f\,'(x)&=-\frac{1}{x^2}
\end{align}
$$

#### Exponential
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-5,5,-5,5]
disableZoom: true
grid: true
---
f(x) = 5^x
```
Graph can't show $\ln$
$$
\begin{align}
f(x)&=5^x\\
f\,'(x)&=\ln{5}\cdot 5^x
\end{align}
$$

### Trigonometry
#### sin
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: true
grid: true
---
f(x) = 5sin(x)
g(x) = 5cos(x)
```
$$
\begin{align}
f(x)&=\sin{x}\\
f\,'(x)&=\cos{x}
\end{align}
$$

#### cos
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: true
grid: true
---
f(x) = 5cos(x)
g(x) = -5sin(x)
```
$$
\begin{align}
f(x)&=\cos{x}\\
f\,'(x)&=-\sin{x}
\end{align}
$$

#### tan
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: true
grid: true
---
f(x) = tan(x)
```
Graph can't show $\sec{x}$
$$
\begin{align}
f(x)&=\tan{x}\\
f\,'(x)&=\sec^2{x}
\end{align}
$$

## References
- [3Blue1Brown - Essence of calculus](https://www.youtube.com/watch?v=WUvTyaaNkzM&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr) (or [Article](https://www.3blue1brown.com/?v=essence-of-calculus#video-section))
- [Math Is Fun - Introduction to Derivatives](https://www.mathsisfun.com/calculus/derivatives-introduction.html) 


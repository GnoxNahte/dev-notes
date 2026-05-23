---
publish: true
created: 2026-03-20T10:08:45.339+08:00
modified: 2026-04-08T22:03:03.199+08:00
published: 2026-04-08T22:03:03.199+08:00
cssclasses: ""
---


## Description
This is used to find the **approximate** root of a function - where $f(x)=0$
Used when it's hard to find it directly.
For example, $f(x)=\cos{(x)-x}$ 

## Steps
1. Pick an [[90 Math/00 Basics/Functions - f(x)#Terminology - Intervals\|interval/domain]] 
2. [[90 Math/05 Calculus/06 Newton's Law#Check if there's a root - Intermediate Value Theorem (IVT)\|Check if there's a root]]
3. Use [[90 Math/05 Calculus/06 Newton's Law#Newton's Method]] to find an approximate root

### Check if there's a root - Intermediate Value Theorem (IVT)
Before wasting time to find the root between a domain $(a,b)$, need to check if a root even exists.
- A root exists if the equation passes through $f(x)=0$ 
- So the sign for $f(a)$ and $f(b)$ should be different
- To check for this, if $f(a) \cdot f(b) < 0$, the roots exists
	- *However, this doesn't mean that the root exists* if the result is $> 0$. See [[90 Math/05 Calculus/06 Newton's Law#Example 2 - WARNING Test Limitation\|example]] below

The examples below use this graph
```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
y=x^2-5
```
$y=x^2-5$

#### Example 1 - Roots exist
Using $f(x) = x^2 - 5$, find if there's a root between the $(-4, -2)$ and $(1, 3)$ domain

> [!EXAMPLE] Check in the $(-4, -2)$ domain
> $f(-4) \cdot f(-2) = 11 \times -1 = -11$
> Since $< 0$, a root exists between $(-4,-2)$.

> [!EXAMPLE] Check in the $(1,3)$ domain
> $f(1) \cdot f(3)=-4 \times 4 = -16$
> Since $< 0$, a root exists between $(1,3)$.

#### Example 2 - When result is > 0 (It doesn't mean anything!)
However, if the result is $> 0$, it doesn't confirm that a root exists!

Using $f(x) = x^2 - 5$, find if there's a root between the domain $(-3, 3)$

> [!EXAMPLE] Check in $(-3, 3)$ domain
> $f(-3) \cdot f(3) = 4 \times 4=16$
> This is $> 0$, but there's 2 roots between $(-3, 3)$! 
> At $x=-\sqrt{ 5 }$ and $x=\sqrt{ 5 }$

### Newton's Method
$$
p_{n+1}\approx p_n-\frac{f(p_n)}{f\,'(p_n)}
$$
This is a *approximation*! The accuracy of it increases with more iterations.

See [[90 Math/05 Calculus/06 Newton's Law#Newton's Method derivation]] 

## Examples
### Example 1 - cos(x) - x
Given $f(x)=\cos{(x) - x}$, check if it has a root between $(0, 1)$. If the root exists, find the approximation of the root. 

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
y=cos(x)-x
```
$f(x)=\cos{(x)-x}$

#### Check if there's a root
$$
\begin{align}
f(0) &= \cos{(0)} - 0 > 0 \\
f(1) &= \cos{(1) - 1} < 0\\
\end{align}
$$
Since $f(0) \cdot f(1) < 0$, a root exists.

#### Find the root using Newton's method
Pick a point in the domain $(0,1)$, let's say $p_{0}=0.5$ 

Find $f'(x)$,
$$
\begin{align}
f(x)&=\cos{(x)} - x \\
f\,'(x)&=-\sin{(x)} - 1
\end{align}
$$
##### p1
$$
\begin{align}
p_{1}&=p_{0}-\frac{f(p_0)}{f\,'(p_0)} \\
&=0.5-\frac{f(0.5)}{f\,'(0.5)} \\
&=0.5 - \frac{\cos{(0.5)}-0.5}{-\sin{(0.5)}-1} \\
&=0.7552224171\dots
\end{align}
$$
##### p2
$$
p_2=p_{1}-\frac{f(p_1)}{f\,'(p_1)}
$$
Substitute $p_{1}=0.7552\dots$ (max precision) and find $p_{2}$ 
$$
p_{2}=0.7391416661\dots
$$
##### px
Using the same formula repeatedly,
$$
\begin{align}
p_{3}&=0.7390851339\dots \\
p_4&=0.7390851332\dots \\
p_5&=0.7390851332\dots
\end{align}
$$
As shown, on each iteration, the precision increases. ($p_{4}$ looks like $p_{5}$ but calculator can't show more precision)


## Newton's Method derivation
Derivation of [[90 Math/05 Calculus/06 Newton's Law#Newton's Method]] 

### Method 1 - Using Differentiation's Definition
From [[90 Math/05 Calculus/02 Differentiation Concepts#Second definition\|Differentiation's Definition]], 
$$
f\,'(a)=\lim_{ x \to a } \frac{f(x)-f(a)}{x-a}
$$
Since we are finding what $x$ is when $f(x)=0$, 
Substitute $f(x) = 0$
$$
f\,'(a)=\lim_{ x \to a } \frac{-f(a)}{x-a}
$$
When $a$ is *close* to $x$, (Definition of [[90 Math/05 Calculus/01 Limits\|Limits]])
$$
f\,'(a) \approx \frac{-f(a)}{x-a}
$$
Since we want to for $x$, make $x$ the subject,
$$
x \approx a-\frac{f(a)}{f\,'(a)}
$$
Done!

### Method 2 - Using tangent line
See [Paul's Online Notes](https://tutorial.math.lamar.edu/Classes/CalcI/NewtonsMethod.aspx) 

## Resources
- [Paul's Online Notes](https://tutorial.math.lamar.edu/Classes/CalcI/NewtonsMethod.aspx) - Has a great explanation!
- [Desmos](https://www.desmos.com/calculator/pjxjvdbt7i) - Interactive graph, shows the different iterations converging into 1 point


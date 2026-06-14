---
publish: true
aliases:
  - L'Hopital's Rule
created: 2026-01-22T17:16:16.061+08:00
modified: 2026-03-07T22:03:03.572+08:00
published: 2026-03-07T22:03:03.572+08:00
tags:
  - todo
math-level: 3 - Uni Yr 1
---

## Prerequisites

- [[Functions - f(x)]]
- (optional) [[Exponents]] & [[Logarithms]]
- (optional) [[Trigonometry]]

## Definition

### Notation

#### Left and right-handed limits

$\lim\limits_{ x \to a- }$ means the limit as $x$ **approaches** a from the **left**
$\lim\limits_{ x \to a+ }$ means the limit as $x$ **approaches** a from the **right**

Example:
![[90 Math/05 Calculus/Drawings/01 Limits Drawing.excalidraw.md#^group=fNB84m1RugyVyRzWuRLr6|600]]

## Limits usage

Useful to find when we can't find out something directly but we can find out what it can be as we **approach** closer.

> [!EXAMPLE] Divide by 0
> For example, given this equation,
>
> $$
> f(x) = \frac{x^2-1}{x-1}
> $$
>
> When $x=1$,
>
> $$
> f(x)=\frac{1^2 - 1}{1-1}=\frac{0}{0}
> $$
>
> Undefined!

> [!EXAMPLE]- Approaches $\infty$
> #todo

## Limit Laws

| Law                 | Function                                                                                                                            |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Constant            | $\lim\limits_{ x \to a }c$                                                                                                          |
| Constant Multiplier | $\lim\limits_{ x \to a }cf=c\lim\limits_{ x \to a }f$                                                                               |
| Add/Sub             | $\lim\limits_{ x \to a }(f\pm g)=\lim\limits_{ x \to a }f\pm \lim\limits_{ x \to a }g$                                              |
| Product             | $\lim\limits_{ x \to a }(f\cdot g)=\lim\limits_{ x \to a }f\cdot \lim\limits_{ x \to a }g$                                          |
| Quotient            | $\lim\limits_{ x \to a }\frac{f}{g}=\frac{\lim\limits_{ x \to a }f}{\lim\limits_{ x \to a }g}$ if $\lim\limits_{ x \to a }g\neq{0}$ |
| Power               | $\lim\limits_{ x \to a }(f^n)=(\lim\limits_{ x \to a }f)^n$ where $n >0$                                                            |

## Techniques to solve Limit equations

Jump to:

- [[#Direct substitution]]
- [[#Factorisation and cancelling]]
- [[#Conjugate/Rationalization]]
- [[#Dividing by higher power (only when $x to infty$ or $- infty$)|Dividing by higher power]]
- [[#Definition of derivative]]
- [[#L'Hôpital's Rule]]

### Direct substitution

If it can just be substituted directly (e.g. no divide by $0$)

$$
\begin{align}
\lim_{ x \to 2 } x^2 - 1 &= 2^2-1  \\
&= 3
\end{align}
$$

### Factorisation and cancelling

$$
\begin{align}
\lim_{ x \to 2 } \frac{x^2 - 4}{x-2} &= \lim_{ x \to 2 } \frac{(\cancel{x-2})(x+2)}{\cancel{x-2}} \\
&=\lim_{ x \to 2 } x+2 \\
&=2+2 \\
&=4
\end{align}
$$

> [!Question]- At x = 2, it's undefined, but why is it allowed to cancel? Isn't it a different equation?
> $\lim_{ x \to 2 }$ mean that $x$ **approaches** $2$ but **does not reach** 2. For example, it's still ok to cancel it if $x=2.000001$

### Conjugate/Rationalization

Using this identity - $(a+b)(a-b) = a^2-b^2$,
Multiply both the numerator and denominator by its conjugate and try to cancel the terms

$$
\begin{align} \\
\lim_{ x \to 2 } \frac{\sqrt{ x }-\sqrt{ 2 }}{x-2}&=\lim_{ x \to 2 } \frac{(\sqrt{ x }-\sqrt{ 2 })(\sqrt{ x }+\sqrt{ 2 })}{(x-2)(\sqrt{ x }+\sqrt{ 2 })} \leftarrow\underline{ Rationalise}\\
&=\lim_{ x \to 2 } \frac{\cancel{x-2}}{(\cancel{x-2})(\sqrt{ x }+\sqrt{ 2 })} \\
&=\lim_{ x \to 2 } \frac{1}{\sqrt{ x }+\sqrt{ 2 }} \\
&=\frac{1}{\sqrt{ 2 }+\sqrt{ 2 }} \\
&=\frac{1}{2\sqrt{ 2 }}
\end{align}
$$

### Dividing by higher power (only when $x\to \infty$ or $-\infty$)

$$
\begin{align}
\lim_{ x \to \infty } \frac{2x^2-3x+1}{5x^2-4x}&=\lim_{ x \to \infty } \frac{ (2x^2-3x+1)\cdot\frac{1}{x^2} }{(5x^2-4x)\cdot \frac{1}{x^2}} \tag{1} \\
&=\lim_{ x \to \infty } \frac{2-\cancel{\frac{3}{x}}+\cancel{ \frac{1}{x^2} }}{5-\cancel{ \frac{4}{x} }} \tag{2} \\
&=\frac{2}{5}
\end{align} 
$$

$(1)$ - Divide both numerator and denominator by the highest polynomial<br>$(2)$ - Cancel any fractions that are divided by $x$. This is possible because when $x\to \infty$, $\frac{a}{\infty}$ will become a very small number (Effectively 0 as it approaches $\infty$)

> [!TIP]- Can use when there are square roots and can't rationalise too!
>
> $$
> \begin{align}
> \lim_{ x \to \infty } \frac{\sqrt{ x^6 + 2 }}{x^3+1}&=\lim_{ x \to \infty } \frac{(\sqrt{ x^6+2 })\cdot \frac{1}{x^3}}{(x^3+1)\cdot \frac{1}{x^3}} \\
> &=\lim_{ x \to \infty } \frac{(\sqrt{ x^6+2 })\cdot \sqrt{ \frac{1}{x^6} }}{(x^3+1)\cdot \frac{1}{x^3}} \\
> &=\lim_{ x \to \infty } \frac{\sqrt{ 1+\cancel{ \frac{2}{x^6} }}}{1+\cancel{ \frac{1}{x^3} }} \\
> &=\frac{\sqrt{ 1 }}{1}=1
> \end{align}
> $$

Related - [[02 Differentiation Concepts|Differentiation]]

### Definition of derivative

$$
\begin{align}
\text{Find }\lim_{ x \to 0 } \frac{\sin{x}}{x},&   \\ \\ 

\text{Let } f(x)&=\sin{x} \\
\lim_{ x \to 0 } \frac{\sin{x}-\sin{0}}{x-0}&=\lim_{ x \to 0 } \frac{f(x)-f(0)}{x-0} \tag{1}\\
&=f\,'(0) \\
&=\frac{d}{dx}(\sin{0}) \\
&=\cos{0} \\
&=1
\end{align}
$$

At $(1)$, it's similar to [[02 Differentiation Concepts#Definition|differentiation's definition]]:

$$
f\,'(x)=\lim_{ x \to y } \frac{f(x)-f(y)}{x-y}
$$

So can substitute $(1)$ to $f\,'(0)$

### L'Hôpital's Rule

Rule:

$$
\lim_{ x \to a } \frac{f(x)}{g(x)}=\lim_{ x \to a } \frac{f\,'(x)}{g\,'(x)}
$$

Requirements:

- $f$ and $g$ are differentiable,
- $g\,'(x)\neq 0$
- Used to solve **indeterminate** cases -  $\frac{f(x)}{g(x)}=\frac{0}{0} \text{ or }\frac{\infty}{\infty}$
  - Sign doesn't matter, can be $\frac{\pm\infty}{\pm\infty}$
  - But cannot be:
    - $\frac{0}{\infty}$ - as it's $= 0$
    - $\frac{\infty}{0}$ - as it's an even larger $\infty$ (still represented as $\infty$). See [[#Example (Limit Exists - Counter to Example above) - $ lim limits_{ x to 0 } frac{1}{x 2}$|Example]] on why it's still defined even though **divide by 0**

> [!Example] Evaluate $\lim_{ x \to \infty }\frac{x}{e^x}$
>
> $$
> \begin{align}
> \lim_{ x \to \infty }\frac{x}{e^x}&=\lim_{ x \to \infty } \frac{\frac{d}{dx}(x)}{\frac{d}{dx}(e^x)} \\
> &=\lim_{ x \to \infty } \frac{1}{e^x} \\
> &=0
> \end{align}
> $$
>
> For the last step, as $x$ approaches $\infty$, the result becomes very small (effectively 0)

> [!INFO]- Derivation of L'Hôpital's Rule (by 3b1b)
> ![](https://youtu.be/kfF40MiS7zA?t=594)

## When a limit Does Not Exist (DNE)

If the [[#Left and right-handed limits]] aren't equal, the limit does not exist

### Example (Does Not Exist) - $\lim\limits_{ x \to 0 }\frac{1}{x}$

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: true
grid: true
---
y=1/x
```

$f(x)=\frac{1}{x}$

As $x$ approaches 0 (0.1, 0.01, 0.001, etc),

- Left-handed limit: $\lim\limits_{ x \to 0- } = -\infty$
- Right-handed limit: $\lim\limits_{ x \to 0+}=\infty$

Since $\lim\limits_{ x \to 0- }\neq \lim\limits_{ x \to 0+ }$ or $-\infty \neq \infty$, the limit does not exist

### Example (Limit Exists - Counter to Example above) - $\lim\limits_{ x \to 0 } \frac{1}{x^2}$

```functionplot
---
title: 
xLabel: 
yLabel: 
bounds: [-10,10,-10,10]
disableZoom: false
grid: true
---
y=1/x^2
```

$f(x)=\frac{1}{x^2}$

As $x$ approaches 0 (0.1, 0.01, 0.001, etc),

- Left-handed limit: $\lim\limits_{ x \to 0- } = \infty$
- Right-handed limit: $\lim\limits_{ x \to 0+}=\infty$

Since both left and right-handed limits approach the same direction, the two sided limit is: $\lim\limits_{ x \to 0 }=\infty$

> [!WARNING] $\lim\limits_{ x \to 0 }\neq f(0)$
> $\lim\limits_{ x \to 0 }=\infty$ as shown above,
> However, $f(0)=\frac{1}{0}$ which is **undefined**

## Resources used

- [Math is Fun - Limits (An Introduction)](https://www.mathsisfun.com/calculus/limits.html)
- [YouTube - Solving Limit equations](https://www.youtube.com/watch?v=YNstP0ESndU)

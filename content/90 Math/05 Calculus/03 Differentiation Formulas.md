---
publish: true
created: 2026-01-23T14:04:50.533+08:00
modified: 2026-02-08T15:39:03.253+08:00
cssclasses: ""
---



## Formulas

### Basic

| Rule     | Function | Derivative | Example                                                                        |
| -------- | -------- | ---------- | ------------------------------------------------------------------------------ |
| Constant | c        | $0$        | $\frac{d}{dx}(3)=0$                                                            |
| Line     | $ax$     | $a$        | $\frac{d}{dx}(7x)=7$                                                           |
| Power    | $x^n$    | $nx^{n-1}$ | $\frac{d}{dx}(5x^3)=15x^2$<br>$\frac{d}{dx}(\sqrt{ x })=\frac{1}{2\sqrt{ x }}$ |
 
> [!NOTE]- Why $\frac{d}{dx}\sqrt{ x }=\frac{1}{2\sqrt{ x }}$
> $$
> \begin{align}
> \frac{d}{dx}(\sqrt{ x })&=\frac{d}{dx}\left( x^{\frac{1}{2}} \right) \\ \\
> \text{using Power rule - } \frac{d}{dx}(x^n)&= nx^{n-1} \text{ rule,}\\
> &=\frac{1}{2}x^{-{\frac{1}{2}}} \\
> &=\frac{1}{2\sqrt{ x }}
> \end{align}
> $$

### Composite Functions

| Rule                | Function      | Derivative                  |
| ------------------- | ------------- | --------------------------- |
| Constant multiplier | $cf$          | $cf\,'$                     |
| Sum and Difference  | $f\pm g$      | $f\,'\pm g\,'$              |
| Product             | $fg$          | $f\,'g+fg\,'$               |
| Quotient            | $\frac{f}{g}$ | $\frac{f\,'g - fg\,'}{g^2}$ |
| Chain Rule          | $f(g(x))$     | $f\,'(g(x))\ g\,'(x)$       |

### Trigonometry

| Function  | Derivative        |
| --------- | ----------------- |
| $\sin{x}$ | $\cos{x}$         |
| $\cos{x}$ | $-\sin{x}$        |
| $\tan{x}$ | $\sec^{2}{x}$     |
| $\sec{x}$ | $\sec{x}\tan{x}$  |
| $\cot{x}$ | $-\csc^2{x}$      |
| $\csc{x}$ | $-\csc{x}\cot{x}$ |

Related: [[90 Math/01 Trigonometry/Trigonometry]]

### Exponents and Logarithms

| Function       | Derivative                     |
| -------------- | ------------------------------ |
| $a^x$          | $a^x\ln a$                     |
| $e^x$          | $e^x$                          |
| $\log_a{x}$    | $\frac{1}{x\ln(a)}$            |
| $\ln x$        | $\frac{1}{x}$                  |
| $\log_a(g(x))$ | $\frac{g\,'(x)}{\ln(a)\,g(x)}$ |
| $\ln(g(x))$    | $\frac{g\,'(x)}{g(x)}$         |

> [!NOTE]- Why no change for $\frac{d}{dx}e^x=e^x$ 
> Using $\frac{d}{dx}a^x=a^x\ln a$ formula,
> $$
> \begin{align}
> \frac{d}{dx}e^x &= e^x\ln e \\
> &= e^x(1) \\
> &= e^x
> 
> \end{align}
> $$

Related: [[90 Math/02 Exponents/Exponents]], [[90 Math/02 Exponents/Logarithms]]

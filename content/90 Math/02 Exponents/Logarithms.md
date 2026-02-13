---
publish: true
created: 2026-01-10T11:41:03.096+08:00
modified: 2026-01-15T20:34:08.780+08:00
cssclasses: ""
---


Related notes: [[90 Math/02 Exponents/Exponents]]

## Intro
Logs are used to find the **power**
Example:
$a=b^c$
$\log_{b}a=c$

> [!EXAMPLE] Example
> $10^3=1000$
> To logarithm:
> $3=\log_{10}1000$

### Short form
For common logarithms 
- $\log_{10}x=lgx$
- $\log_{e}x=\ln x$

### Requirements
For $\log_{b}a=c$
- The base ($b$) **must** always be > 0 AND $\neq$ 1

## Laws of Logarithms
### Overview

| Name                                 | Formula                                                      |
| ------------------------------------ | ------------------------------------------------------------ |
| Product                              | $$\log_{b}(xy)=\log_{b}{x}+\log_{b}{y}$$                     |
| Quotient                             | $$\log_{b}\left( \frac{x}{y} \right)=\log_{b}x - \log_{b}y$$ |
| Power                                | $$\log_{b}(x^n)=n\log_{b}x$$                                 |
| Change of base                       | $$\log_{b}x=\frac{\log_{c}x}{\log_{c}b}$$                    |
| Change of base - Alt<br>Swap base    | $$\log_{b}x = \frac{1}{\log_{x}b}$$                          |
| Change of base - Alt<br>Combine base | $$\log_{b}x \times \log_{c}b=\log_{c}x$$                     |
| Zero                                 | $$\log_{b}1 = 0$$                                            |
| Identity                             | $$\log_{b}b=1$$                                              |
| Equality                             | $$\log_{b}x=\log_{b}y \implies x=y$$                         |
| Inverse                              | $$b^{\log_{b}x}=x\log_{b}b^x=x$$                             |
| Reciprocal                           | $$\log_{b}{\left( \frac{1}{x} \right)}=-\log_{b}x$$          |

> [!TIP] When calculator doesn't support setting the base
> $\log_{a}b=\frac{\lg a}{\lg b}$

### Product law

### Power Law
$\log_{a}x^r=r\log_{a}x$ for any real number r

> [!EXAMPLE]- Proof
> Let $m=\log _ax$, so $x=a^m$
> 
> $$
> \begin{align}
> x=a^m \\
> \text{Make both sides have exponents of r} \\
> x^r&=(a^m)^r \\
> &=a^{mr} \\
> \end{align}
> $$

### Identities
- $\ln(e^x) = x$
- x = 
---
publish: true
created: 2026-01-04T15:30:58.005+08:00
modified: 2026-03-27T14:06:20.066+08:00
published: 2026-03-27T14:06:20.066+08:00
math-level: 3 - Uni Yr 1
---

## Mean, Median, Mode

- **Mean** ($\bar{x}$) - Average of all data
- **Median** - Middle number in the data
- **Mode** - Most frequent number

## Variance ($\sigma^2$ or $s^2$)

### Description

Measure relative amount of 'scattering' of data.

### Formula

$$
\sigma^2 = \frac{\sum(x_i - \bar{x})^2} {n}
$$

Explanation

- $\sigma^2$ - Variance is (standard deviation)$^2$
- $\sum(x_i - \bar{x})^2$
  - $x_{i}$ - Loop through all elements, element\[i]
  - $\bar{x}$ - Mean
  - $(x_{1}-\bar{x})^2 + (x_{2}-\bar{x})^2 + (x_{3}-\bar{x})^2 + \dots (x_{n}-\bar{x})^2$
- Divided by number of elements

> [!NOTE] Population variance ($\sigma^2$) vs Sample variance ($s^2$)
> There are 2 types of variance - Population and sample
>
> - Population: Use **all** data points to calculate it
> - Sample: Have an **unbiased pick of a few data points** and calculate variance using that
>
> So, population variance will always be more accurate as it uses all the data points.
>
> **Why use sample then?**
> Might not have all data points so use sample instead.
> For example, to test the battery of a new phone model. It's impossible to test every phone (as millions exists).
> So test 50 randomly selected phones. As the sample count increases, it'll get closer to the true value.
>
> Formula for sample deviation
> $s^2 = \frac{\sum(x_i - \mu)^2} {n - 1}$
> Difference:
>
> - For the symbol, use $s^2$ instead of $\sigma^2$
> - Use $\mu$ instead of $\bar{x}$
> - Divide by $n-1$ instead of $n$. [Wikipedia](https://en.wikipedia.org/wiki/Standard_deviation#Corrected_sample_standard_deviation), [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction)

## Standard Deviation

Standard deviation ($\sigma$) = $\sqrt{ \text{Variance} }$ = $\sqrt{ \frac{\sum(x_i - \bar{x})^2} {n} }$

### Uses

#### Finding probability given mean and standard deviation

NOTE: This is only for normal distribution (Bell curve) (I think)
![](https://www.youtube.com/watch?v=xI9ZHGOSaCg)

Common values, from the video (Timestamp: _0:33_)

```tabs
--- Math terms
- $P(\bar{x}-\ \sigma < \text{value}<\bar{x}+\ \sigma)$ = 68%
- $P(\bar{x}-2\sigma < \text{value}<\bar{x}+2\sigma)$ = 95%
- $P(\bar{x}-3\sigma < \text{value}<\bar{x}+3\sigma)$ = 99.75%
--- Simple terms
 Probability of a value between $\pm c\times \sigma$ from the mean. 
 When $c$ = ...
- $c=1$, $P=68\%$
- $c=2$, $P=95\%$
- $c=3$, $P=99.75\%$
```

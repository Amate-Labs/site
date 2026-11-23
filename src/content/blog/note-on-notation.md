---
title: "A note on notation"
description: "A stub post that exercises the math pipeline."
pubDate: 2026-11-16
draft: false
---

This is a placeholder note. Inline math such as $f_\theta(x)$ and $O(n \log n)$ renders at build time.

A regularized least-squares objective is a useful display test:

$$
\mathcal{L}(\theta)
= \frac{1}{N} \sum_{i=1}^{N} \left( y_i - f_\theta(x_i) \right)^2
+ \lambda \lVert \theta \rVert_2^2
$$

The update rule:

$$
\theta_{t+1} = \theta_t - \eta \nabla_\theta \mathcal{L}.
$$

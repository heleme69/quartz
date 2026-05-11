# Functional Analysis: The Open Mapping Theorem

```toc
title: ## Table of Contents
style: nestedList
minLevel: 2
maxLevel: 0



```
> [!abs] Abstract
> 
> This note explores the Open Mapping Theorem, a fundamental result characterizing surjective continuous linear operators between Banach spaces. The proof relies on the Baire Category Theorem to establish that the linear map is open, utilizing sequences of bounded operators.

## 1. Introduction to Banach Spaces

A Banach space $X$ is a complete normed vector space. The completeness ensures that every Cauchy sequence converges to an element within $X$. A linear operator $T: X \to Y$ is bounded if there exists a constant $M > 0$ such that:

$$\|Tx\|_Y \le M \|x\|_X \quad \forall x \in X$$

## 2. The Open Mapping Theorem

The Open Mapping Theorem states that under conditions of completeness and surjectivity, a continuous linear operator maps open sets to open sets.

### 2.1 Statement of the Theorem

> [!thm] Open Mapping Theorem
> 
> Let $X$ and $Y$ be Banach spaces, and let $T \in \mathcal{B}(X,Y)$ be a surjective bounded linear operator. Then $T$ is an open mapping. That is, for every open set $U \subset X$, the image $T(U)$ is open in $Y$.

### 2.2 Proof Outline

> [!prf] Proof
> 
> Let $B_r^X(0)$ denote the open ball in $X$ of radius $r$. We must show $T(B_1^X(0))$ contains some ball $B_\delta^Y(0)$ in $Y$.
> 
> 1. **Applying Baire Category:** By surjectivity, we can write $Y$ as a countable union:
>     
> 
> $$Y = \bigcup_{n=1}^\infty T(n B_1^X(0))$$
> 
> Since $Y$ is a complete metric space, the Baire Category Theorem implies there exists $N$ such that $\overline{T(N B_1^X(0))}$ has a non-empty interior. By linearity and translation, there exists $\epsilon > 0$ such that:
> 
> $$B_\epsilon^Y(0) \subset \overline{T(B_1^X(0))}$$
> 
> 2. **Successive Approximations:** Let $y \in B_\epsilon^Y(0)$. We can find $x_1 \in B_1^X(0)$ such that $\|y - Tx_1\| < \frac{\epsilon}{2}$. Iterating this process, we construct a sequence $(x_n)$ in $X$ such that $\|x_n\| < \frac{1}{2^{n-1}}$ and:
>     
> 
> $$\left\| y - T\left(\sum_{k=1}^n x_k\right) \right\| < \frac{\epsilon}{2^n}$$
> 
> Let $x = \sum_{n=1}^\infty x_n$. Since $X$ is a Banach space, this series converges, and $\|x\| < 2$.
> 
> By the continuity of $T$, we have $Tx = y$. Thus, $B_\epsilon^Y(0) \subset T(B_2^X(0))$, proving the map is open.
>

---
[📄 View PDF](./FA.pdf)

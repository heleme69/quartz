# [III] Generation of $\sigma$ - algebras

> [!thm] (1.14)
> Let f be a mapping of a set X to Y. Then for an arbitrary collection of $\mathfrak{C}$ of subset of Y, we have $\sigma(f^{-1}(\mathfrak{C}))=f^{-1}(\sigma(\mathfrak{C}))$

> [!prf] 
> $(\subset )$:
> - Theo định nghĩa, ta có $\mathfrak{C} \subset \sigma(\mathfrak{C})$, nên $f^{-1}(\mathfrak{C})\subset f^{-1}(\sigma(\mathfrak{C}))$, nên $\sigma(f^{-1}(\mathfrak{C})) \subset \sigma(f^{-1}(\sigma(\mathfrak{C})))$. 
> - Vì $\sigma(\mathfrak{C})$ là $\sigma$ - đại số trên $Y$, nên $f^{-1}(\sigma(\mathfrak{C}))$ cũng là $\sigma$ - đại số trên $X$
> - Ta có $\sigma(f^{-1}(\sigma(\mathfrak{C}))) =f^{-1}(\sigma(\mathfrak{C}))$ , vậy $\sigma(f^{-1}(\mathfrak{C})) \subset f^{-1}(\sigma(\mathfrak{C}))$
> 
> $(\supset)$:
> - Đăt $\mathfrak{B}:= \{ B \subseteq Y| f^{-1}(B) \in \sigma(f^{-1}(\mathfrak{C})) \}$, ta chứng minh $\mathfrak{B}$ là một $\sigma$ - đại số trên $Y$:
>     - Ta có $f^{-1}(Y) = X \in \sigma(f^{-1}(\mathfrak{C}))$ nên $Y \in \mathfrak{B}$
>     - Lấy $B \in \mathfrak{B}$, ta có $f^{-1}(Y \setminus B) =f^{-1}(Y) \setminus f^{-1}(B)= X \setminus f^{-1}(B)$, vì $f^{-1}(B) \in \mathfrak{B}$ nên $X \setminus f^{-1}(B) \in \mathfrak{B}$, vậy $Y \setminus B \in \mathfrak{B}$
>     - Lấy $\{ B_{n} \}_{n=1}^{\infty} \subset\mathfrak{B}$, ta có $f^{-1}\left( \bigcup B_{n} \right) = \bigcup f^{-1}(B_{n})$, vì $f^{-1}\left(  B_{n} \right) \in \sigma(f^{-1}(\mathfrak{C}))$ nên $\bigcup f^{-1}(B_{n})\in \sigma(f^{-1}(\mathfrak{C}))$, vậy $f^{-1}\left( \bigcup B_{n} \right) \in \sigma(f^{-1}(\mathfrak{C}))$ nên $\bigcup B_{n} \in \mathfrak{B}$
>        Vậy $\mathfrak{B}$ là $\sigma$ - đại số trên Y
>     
> - Ta chứng minh $\sigma(\mathfrak{C}) \subseteq \mathfrak{B}$:
>     - Lấy $E_{n}$ bất kì trong $(\mathfrak{C})$, ta có $f^{-1}(E_{n}) \in f^{-1}(\mathfrak{C})$, mà $f^{-1}(\mathfrak{C}) \subseteq \sigma(f^{-1}(\mathfrak{C}))$, nên $f^{-1}(E_{n}) \in \sigma(f^{-1}(\mathfrak{C}))$, và $E_{n} \in Y$ nên $E_{n} \in \mathfrak{B}$. Vậy $\sigma(\mathfrak{C})\subseteq \mathfrak{B}$
>- vì $\sigma(\mathfrak{C}) \subseteq \mathfrak{B}$ nên tùy ý $C \in \sigma(\mathfrak{C})$, ta có $C \in \mathfrak{B}$, nghĩa là $f^{-1}(C) \in \sigma(f^{-1}(\mathfrak{C}))$
> Vậy $f^{-1}(\sigma(\mathfrak{C}))\subset \sigma(f^{-1}(\mathfrak{C}))$

>[!def] 
> $\sigma_{A}(\mathfrak{R})$ denotes the smallest $\sigma$ - algebra on the space A containing $\mathfrak{R}$

> [!lem] Trace
> Let $\mathfrak{C}$ be an arbitrary collection of subset of a set $X$ and let $A \subset X$. Then $\sigma(\mathfrak{C})\cap A$ is a $\sigma$ - algebra on $A$

> [!prf] 
> - Đặt $\sigma(\mathfrak{C}) \cap A:=   \mathfrak{M}_{A}=\{{E \cap A| E \in \sigma(\mathfrak{C})} \}$, ta chứng minh $\mathfrak{M}_{A}$ là một $\sigma$ - đại số trên A
>     - Ta có $\sigma(\mathfrak{C})$ là $\sigma$ - đại số trên $X$, nên $X \in \sigma(\mathfrak{C})$, và vì $X \cap A = A$ nên với $E = X$, ta có $A \in \mathfrak{M}$
>     - Lấy $B \in \mathfrak{M}$, ta có $A \setminus B = A \setminus(E \cap A)$, với E là họ bất kì thuộc $\sigma(\mathfrak{C})$, vì $A \setminus(E \cap A) = A \cap E^c$, mà vì $E^c \in \sigma(\mathfrak{C})$ nên $A \setminus B =B^c \in \mathfrak{M}_{A}$
>     - Lấy $\{ B_{n} \}_{n=1}^{\infty}$ là họ các tập trong $\mathfrak{M}_{A}$, ta có mỗi $B_{n} = E_{n} \cap A$, với $E_{n} \in \sigma(\mathfrak{C})$, ta có $\bigcup_{n=1}^{\infty}B_{n} = \bigcup_{n=1}^{\infty}(E_{n}\cap A) = (\bigcup_{n=1}^{\infty} E_{n}) \cap A$, mà vì $E_{n} \in \sigma(\mathfrak{C})$ nên $\bigcup_{n=1}^{\infty} E_{n} \in \sigma(\mathfrak{C})$, vậy $\bigcup_{n=1}^{\infty}B_{n} \in \mathfrak{M}_{A}$
>     Vậy $\sigma(\mathfrak{C})\cap A$ là $\sigma$ - đại số trên A

> [!thm] (1.15) 
> Let $\mathfrak{C}$ be an arbitrary collection of subset of a set $X$ and let $A \subset X$. Then $\sigma_{A}(\mathfrak{C} \cap A)=\sigma(\mathfrak{C})\cap A$

> [!prf] 
> - Xét $i: A \to X$ là ánh xạ:  $i(x) = x$ 
> - Với mỗi $E \subseteq X$, ta có $i^{-1}(E) = \{ x \in A| i(x) \in E\} = E \cap A$
> - Suy ra:
> $$
> i^{-1}(\mathfrak{C})=\mathfrak{C} \cap A
> $$
>    và:
> $$
> i^{-1}(\sigma(\mathfrak{C})) = \sigma(\mathfrak{C} )\cap A
> $$
> 
> - Áp dụng **Theorem 1.14**: 
> $$
> \sigma_{A}(\mathfrak{C}\cap A) = \sigma_{A}(i^{-1}(\mathfrak{C}))=i^{-1}(\sigma_{A}(\mathfrak{C})) =\sigma(C) \cap A
> $$

# [V] Measure on a $\sigma$ - algebra

> [!Prp] (1.23) 
> Let $\gamma$ be a nonnegative extended real-valued set function on a algebra $\mathfrak{A}$ of subset of a set $X$. If $\gamma$ is additive and countably subadditive on $\mathfrak{A}$ then $\gamma$ is countably additive on $\mathfrak{A}$

> [!prf] 
> - Từ tính hữu hạn cộng tính, lấy $\{ E_{n} \}_{n \in \mathbb{N}}$ là họ các tập rời nhau trên $\mathfrak{A}$, ta chứng minh $\gamma\left( \bigcup_{n=1}^{\infty}  E_{n}\right) \ge \sum_{n=1}^{\infty} \gamma(E_{n})$:
>     - vì $\gamma$ cộng tính hữu hạn, suy ra $\gamma$ đơn điệu: $\gamma\left( \bigcup_{n=1}^{\infty}E_{n} \right) \ge \gamma\left( \bigcup_{n=1}^{N}E_{n} \right) \ge \sum_{n=1}^{N} \gamma(E_{n})$
>     - vì biểu thức đúng với mọi $N \in \mathbb{N}$, ta cho $N \to \infty$, ta có $\gamma\left( \bigcup_{n=1}^{\infty}E_{n} \right) \ge \sum_{n=1}^{\infty} \gamma(E_{n})$
> - Từ tính $\sigma$ - dưới cộng tính, ta có $\gamma\left(  \bigcup_{n=1}^{\infty} E_{n} \right) \le \sum_{n=1}^{\infty}\gamma(E_{n})$
> Vậy $\gamma\left( \bigcup _{n=1}^{\infty} E_{n}\right)= \sum_{n=1}^{\infty} \gamma(E_{n})$ hay $\gamma$ là $\sigma$ - cộng tính

> [!def] (1.26) Continuous from Below
>  If $\{ A_{n} \}_{n=1}^{\infty}$ is an increasing sequence of sets in $\mathfrak{A}$, $(A_{1}\subseteq A_{2}\subseteq\dots)$ and $A = \bigcup_{n=1}^{\infty}A_{n} \in \mathfrak{A}$, then:
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n} \right) = \lim_{ n \to \infty } \mu(A_{n})
> $$
> 

> [!prp] 
> Given $\mu: \mathfrak{A}\to[0,+\infty]$, $\mu$ is finite additive. 
> Prove: $\mu$ is $\sigma$ - additive $\iff$ $\mu$ is continuous from below

> [!prf]
> $(\implies)$
> - Giả sử $\{ A_{n} \}_{n=1}^{\infty} \uparrow A$ trên $\mathfrak{A}$ , ta có  $\bigcup_{n=1}^{\infty}A_{n} = \lim_{ n \to \infty }A_{n}=A$,
> - Đặt $B_{n} = A_{n} \setminus A_{n-1}$ với $n \ge 2$, khi đó $\{ B_{n} \}_{n=1}^{\infty}$ là họ rời rạc trên $\mathfrak{A}$, ta có $\mu(A) = \bigcup_{n=1}^{\infty}\mu(B_{n})= \lim_{ N \to \infty }\sum_{n=1}^{N}\mu(B_{n})$
> - vì $\mu$ hữu hạn cộng tính, ta có $\lim_{ N \to \infty }\sum_{n=1}^{N}\mu(B_{n})= \lim_{ N \to \infty }\mu\left( \bigcup_{n=1}^{N}B_{n} \right)$
> - Lại có $\bigcup_{n=1}^{N}B_{n}= A_{N}$, vậy $\mu(A)=\mu\left( \bigcup_{n=1}^{\infty}A_{n} \right)=\lim_{ N \to \infty }\mu(A_{N})$ hay $\mu$ liên tục dưới
>
> $(\impliedby)$
> - Lấy $\{ B_{n} \}_{n=1}^{\infty}$ là họ rời rạc trên $\mathfrak{A}$, đặt $A_{N}=\bigcup_{n=1}^{N}B_{n}$, do $\mu \ge 0$ nên $\lim_{ N \to \infty }A_{N}=\bigcup_{n=1}^{\infty} B_{n}$ và do $\mu$ liên tục dưới: $\lim_{ N \to \infty }\mu(A_{N})=\mu\left( \bigcup_{n=1}^{\infty}B_{n} \right)$
> - Vì $\mu$ cộng tính hữu hạn: 
> $$
> \begin{align}
> \lim_{N \to \infty}\mu(A_{N}) &= \lim_{N \to \infty}\mu\left( \bigcup_{n=1}^{N}B_{n} \right) \\ &= \lim_{N \to \infty}\sum_{n=1}^{N}\mu(B_{n}) \\ &= \sum_{n=1}^{\infty}\mu(B_{n})
> \end{align}
> $$
> Vậy $\mu\left( \bigcup_{n=1}^{\infty}B_{n} \right)=\sum_{n=1}^{\infty}\mu(B_{n})$ nên $\mu$ là $\sigma$ - cộng tính

---
[📄 View PDF](./BTVN tuần 2.pdf)

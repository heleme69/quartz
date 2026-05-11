# [I] Construction of Measure by Means of Outer Measure

> [!def] 
> Lấy X là tập bất kì: $\mu^{*}:2^{X} \to [0,+\infty]$ được gọi là độ đo ngoài nếu: 
> 1. $\mu^{*}(\emptyset) = 0$
> 2.  đơn điệu: $E_{1},E_{2} \in \mathfrak{B}(X)$, $E_{1} \subset E_{2}\implies \mu^{*}(E_{1})\le\mu^{*}(E_{2})$
> 3. $\sigma$ - dưới cộng tính: $(E_{n}:n \in N)\subset \mathfrak{B}(X)\implies \mu^{*}\left( \bigcup_{n \in \mathbb{N}}E_{n} \right)\le \sum_{n \in \mathbb{N}} \mu^{*}(E_{n})$

Ký hiệu: Ta viết $\mathfrak{B}(X) \equiv \mathcal{P}(X) \equiv 2^{X}$ 
Mục tiêu: Xây dựng $\sigma$ - đại số liên quan $\mu^{*}$:  $\mu^{*}|_{\sigma \text{- đại số}}$ là độ đo 
$$
\sigma \text{ - cộng tính} \iff \begin{cases}
\sigma \text{ - dưới cộng tính} \\
\text{cộng tính hữu hạn}
\end{cases}
$$
> [!def] Carathéodory's criterion
> Cho $\mu^{*}$ là độ đo ngoài, tập $E$ được gọi là đo được theo nghĩa $\mu^{*}$ (*Carathéodory*) nếu:
> $$
> \forall T \subset X : \mu^*(T) = \mu^*(T \cap E) + \mu^*(T \cap E^c) \tag{1}
> $$
> Trong đó $T$ là tập thử bất kì trên $X$
> ký hiệu: $\mathfrak{M}(\mu^{*}) = \{ E: E \text{ - đo được } \mu^{*} \}$
> 

> [!obs] $\sigma$ - dưới cộng tính
> Vì $\sigma$ - dưới cộng tính suy ra tính hữu hạn cộng tính, ta có với $A = (A \cap E) \cup(A \cap E^{c})$ $\implies$ $\mu^{*}(A)\le \mu^{*}(A \cap E) + \mu^{*}(A \cap E^{c})$

 > [!thm] $\mathfrak{M(\mu ^{*})}$  là đại số trên X

> [!prf] 
> 1. Lấy $E = \emptyset$, với $T \in X$ bất kì, ta có:
>     - $T \cap \emptyset = \emptyset$ $\implies$ $\mu^{*}(\emptyset) = \emptyset$
>     - $T \cap \emptyset^{c} = T \cap X = T$ $\implies$ $\mu^{*}(T)$
>     - $0 + \mu^{*}(T) = \mu^{*}(T)$
>     Vậy $\emptyset \in \mathfrak{M}(\mu^{*})$ 
> 2. Lấy $E \in \mathfrak{M}(\mu^{*})$, ta có $E^{c} \in \mathfrak{M(\mu^{*})}$ do tính đối xứng của $(1)$
> 3. Lấy $A, B \in \mathfrak{M}$, ta cần chứng minh: $\mu^{*}(T) = \mu^{*}(T \cap (A \cup B)) + \mu^{*}(T \cap (A \cup B)^{c}$
>     - Sử dụng:
>    $$
>       \begin{align*}
>    T &= (T \cap A) \cup (T \cap A^{c}) \\
>    &= (T \cap A) \cup (T \cap A^{c}\cap B) \cup (T \cap A^{c} \cap B^{c}) \\
>    &= (T \cap A) \cup (T \cap A^{c}\cap B) \cup (T \cap(A \cup B)^{c}) \\
>    &= ((T \cap A) \cup (T \cap A^{c}\cap B)) \cup (T \cap(A \cup B)^{c}) \\
>    &= (T \cap(A \cup B)) \cup (T \cap (A \cup B)^{c})
>    \end{align*}
>    $$
>     - Ta có:
>    $$
>    \begin{align*} & \text{Vì } \mu^* \Big( (T \cap A) \cup (T \cap A^c \cap B) \Big) \ge \mu^* \Big( T \cap (A \cup B) \Big) \\ \implies & \mu^* \Big( (T \cap A) \cup (T \cap A^c \cap B) \cup (T \cap(A \cup B)^c) \Big) \\ &\quad = \mu^*(T) \\ &\quad \ge \mu^* \Big( (T \cap(A \cup B)) \cup (T \cap (A \cup B)^c) \Big) \end{align*}
>    $$
>     - Kết hợp **Observation 1.**  ta kết luận $A \cup B \in \mathfrak{M}$

> [!prp] Cộng tính hữu hạn
> Với $A, B \in \mathfrak{M}(\mu ^{*})$, và $A \cap B = \emptyset$, ta cần chứng minh $\mu ^{*}(A \cup B) = \mu ^{*}(A) + \mu ^{*}(B)$.
> Ta tổng quát hóa, và chứng minh $\mu ^{*}(T \cap (A \cup B)) = \mu ^{*} (T \cap A) + \mu ^{*}(T \cap B)$, khi đó điều cần chứng minh đúng với $T = X$.
> Ta có: 
> $$
> \begin{align*}
> \mu ^{*} (T \cap (A \cup B)) &=  \mu ^{*}(T \cap (A \cup B) \cap A) +\mu  ^{*}(T \cap (A \cup B) \cap A ^{c}) \\
> &= \mu ^{*}(T \cap A) + \mu(T \cap(A \cap A^{c})\cup(B \cap A^{c})) \\
> &= \mu ^{*}(T \cap A) + \mu(T \cap B) 
> \end{align*}
> $$
> Đẳng thức cuối xảy ra do $A, B$ rời nhau dẫn tới $B \subseteq A^{c}$

> [!thm] $\mathfrak{M(\mu ^{*})}$ là $\sigma$ - đại số trên $X$
> 

> [!prf]
> Lấy tùy ý $\{ A_{n} \}_{n=1} ^{\infty} \subset \mathfrak{M}$, ta cần chứng minh $\bigcup_{n=1} ^{\infty} A_{n} = A \in \mathfrak{M}$.
> Giả sử $A_{n}$ rời nhau (sử dụng kĩ thuật rời rạc hóa), để chứng minh $A \in \mathfrak{M}$, ta cần kiểm tra (1), nghĩa là $\forall T \in A$, $\mu ^{*}(T) = \mu ^{*}(T \cap A) + \mu ^{*}(T \cap A^{c})$.
> - Ta có chiều thuận $(\le)$ đúng do **Observation 1.** 
> - Chiều ngược $(\ge)$: 
> 	- Do tính $\sigma$ - dưới cộng tính: 
> 	  $\mu ^{*}(T \cap A) \le \sum_{k=1}^{\infty} \mu ^{*} (T \cap A_{k}) = \lim_{ n \to \infty } \sum_{k=1}^{n} \mu ^{*} (T \cap A_{k})$
> 	- Vì $A_{k}$ rời rạc nên các số hạng đầu tiên thỏa tính hữu hạn cộng tính:
> 	  $\sum_{k=1}^{n} \mu ^{*} (T \cap A_{k}) = \mu ^{*} \left( T \cap \bigcup_{k=1} ^{n} A_{k} \right)$,
> 	  do đó số hạng $\mu ^{*} (T \cap A)$ $\le$ $\lim_{ n \to \infty } \mu ^{*} \left( T \cap \bigcup_{k=1} ^{n} A_{k} \right)$
> 	- Ta có:
> 	   $A = \bigcup_{k=1} ^{\infty} A_{k} \supset \bigcup_{k=1} ^{n} A_{k}$, do đó phần bù: $A ^{c} \subset \left( \bigcup_{k=1} ^{n} A_{k} \right)^{c}$,
> 	- Vậy:
> $$
> \begin{align*}
> \mu ^{*}(T \cap A) + \mu ^{*}(T \cap A ^{c}) &\le \lim_{ n \to \infty } \left( \mu ^{*} \left( T \cap \bigcup_{k=1} ^{n} A_{k} \right) \right) +\mu ^{*} (T \cap A^{c}) \\
> &\le \lim_{ n \to \infty } \left( \mu ^{*}\left( T \cap \bigcup_{k=1} ^{n} A_{k} \right)+\mu ^{*}\left( T \cap\left( \bigcup_{k=1}^{n} A_{k} \right) ^{c} \right) \right) \\
> \end{align*}
> $$
> 	- Đặt $S_{n} = \bigcup_{k=1} ^{n} A_{k}$, khi đó $\mu ^{*} (T \cap A) + \mu ^{*} (T \cap A ^{c}) \le \lim_{ n \to \infty } \mu ^{*}(T \cap S_{n}) + \mu ^{*}(T \cap S_{n}^{c})$
> 	- Vì $\mathfrak{M(\mu ^{*})}$ là đại số, và vì $S_{n}$ là hội hữu hạn nên nó thuộc $\mathfrak{M(\mu ^{*})}$, nghĩa là $\mu ^{*} (T \cap S_{n}) + \mu ^{*} (T \cap S_{n} ^{c}) = \mu ^{*}(T)$, với mọi n.
> 	  Vậy ta có $\mu ^{*} (T) \ge \mu ^{*} (T \cap A) + \mu ^{*} (T \cap A ^{c})$

> [!def] Độ đo đầy đủ
> Một không gian đo $(X, \mathfrak{M}, \mu)$ được gọi là đầy đủ nếu: Mọi tập con của một tập hợp có độ đo bằng 0 (null) thì đều phải đo được và cũng có độ đo bằng 0.
> Nếu $E \in \mathfrak{M}$ và $\mu (E) = 0 \implies \forall F \subset E: \mu (F) \le \mu (E) = 0$

> [!thm] $\mu ^{*}(\mathfrak{M})$ là độ đo đầy đủ trên $X$
> 

> [!prf]
> Giả sử E $\in \mathfrak{M}$ sao cho $\mu ^{*} (E) = 0$. Xét tập $F$ bất kì là con của $E$, ta cần chứng minh $\mu ^{*} (F) = 0$ và $F$ là tập đo được, tức là $F \in \mathfrak{M}$.
> - Vì độ đo ngoài có tính đơn điệu nên: $0 \le \mu ^{*} (F) \le \mu ^{*} (E) = 0$.
> - Vì độ đo ngoài có tính $\sigma$ - dưới cộng tính nên: $\mu ^{*} (T) \le \mu ^{*} (T \cap F) + \mu ^{*} (T \cap F^{c})$, ta chứng minh chiều ngược lại $(\ge)$ để thỏa hệ thức (1).
> 	  - Ta có $\mu ^{*} (T \cap F ) \le \mu ^{*} (F) = 0$ $\implies \mu ^{*} (T \cap F) = 0$
> 	  - Ta có $\mu ^{*} (T \cap F ^{c}) \le \mu ^{*} (T)$ do tính đơn điệu
> 	Vậy ${} \mu ^{*} (T \cap F) + \mu ^{*} (T \cap F ^{c}) \le 0 + \mu ^{*} (T) = \mu ^{*} (T) {}$, kết hợp tính $\sigma$ - dưới cộng tính, ta được $F \in \mathfrak{M}$. 

# [IV] Construction of Outer Measures

> [!def] (Phủ mở)
> Cho $(X, \mathfrak{O})$ là một không gian tôpô (ví dụ trục số thực $X = \mathbb{R}$ với $\mathfrak{O}$ là họ tất cả các tập mở). Cho $E \subset X$ là một tập con bất kỳ.
> Một bộ các tập mở $\mathcal{V} = \{V_i\}_{i \in I} \subset \mathfrak{O}$ được gọi là một phủ mở của tập hợp $E$ nếu hợp của tất cả các tập trong $\mathcal{V}$ chứa trọn tập $E$. Tức là:$$E \subset \bigcup_{i \in I} V_i$$ (Trong đó $I$ là một tập chỉ số bất kỳ, có thể là hữu hạn, đếm được, hoặc không đếm được).

> [!def]  (Lớp phủ)
> Một họ $\mathfrak{V}$ gồm các tập con của một tập hợp $X$ được gọi là một lớp phủ (covering class) nếu nó thỏa mãn các điều kiện sau:
> - Tồn tại một dãy phủ toàn không gian $\mathcal{V}_X = (V_n : n \in \mathbb{N}) \subset \mathfrak{V}$ sao cho $\bigcup_{n \in \mathbb{N}} V_n = X$.
> - Chứa tập rỗng: $\emptyset \in \mathfrak{V}$.
> - Với mỗi tập $E \in \mathcal{P}(X)$ (hay $2^X$), một dãy (hoặc một bộ) các tập hợp $\mathcal{V} = (V_n: n \in \mathbb{N}) \subset \mathfrak{V}$ sao cho $\bigcup_{n \in \mathbb{N}} V_n \supset E$ được gọi là một dãy phủ (hay một phủ cụ thể) của $E$.

> [!theorem] Định lý 2.24: Xây dựng độ đo ngoài 
> Cho $X$ là một tập hợp, $\mathfrak{V}$ là một họ các tập con của $X$ chứa tập rỗng $\emptyset$, và $\gamma: \mathfrak{V} \to [0, \infty]$ là một hàm tập trên tập hợp thỏa $\gamma(\emptyset) = 0$.
> 
> Hàm $\mu^*: \mathcal{P}(X) \to [0, \infty]$ định nghĩa bởi:
>     $$\mu^*(A) = \inf \left\{ \sum_{i=1}^\infty \gamma(V_i) : A \subseteq \bigcup_{i=1}^\infty V_i, V_i \in \mathfrak{V} \right\}$$
>     là một độ đo ngoài trên $X$.

> [!prf]
> 2. Đo của tập rỗng:
>    - Chọn dãy phủ $V_{n} = \emptyset$ $\forall n \in \mathbb{N}$. Rõ ràng $\bigcup_{n \in \mathbb{N}}V_{N} = \emptyset \supset \emptyset$.
>    - Theo định nghĩa infimum, ta có $\mu ^{*}(\emptyset) \le \sum_{n \in \mathbb{N}} \gamma(V_{N}) = \sum_{n \in \mathbb{N}} 0 = 0$
>    - Lại có $\gamma \ge 0 \implies \mu ^{*}(\emptyset) \ge 0$. Suy ra $\mu ^{*} (\emptyset) = 0$.
> 3. Tính đơn điệu: Giả sử $A \subset B$, Cần chứng minh $\mu ^{*} (A) \le \mu ^{*} (B)$.
>    - Giả sử $\mu ^{*} (B) < \infty$, lấy $(V_{n}) \subset \mathfrak{V}$ là dãy phủ bất kì của $B \left( \bigcup_{n \in \mathbb{N}}V_{n} \supset B \right)$.
>    - Vì $A \subseteq B$ nên $\bigcup_{n \in \mathbb{N}} V_{n} \supset A$ nên ${} (V_{n})$ cũng là dãy phủ $A$. Vậy $\mu ^{*} (A) \le \sum_{n \in \mathbb{N}} \gamma(V_{n})$. 
>    - Vì bất đẳng thức đúng với mọi dãy phủ $B$, lấy infimum hai vế, ta có $\mu ^{*}(A) \le \mu ^{*} (B)$.
> 4. Tính $\sigma$ - dưới cộng tính:
>    - Đặt $A = \bigcup_{k \in \mathbb{N}} A_{k}$. Giả sử $\mu ^{*} (A_{k}) < \infty \forall k$.
>    - Cho $\epsilon > 0$. Với mỗi ${} A_{k}$, tồn tại dãy phủ $(V_{k,n})_{n \in \mathbb{N}}$ sao cho:
>    $\sum_{n \in \mathbb{N}} \gamma(V_{k,n}) < \mu ^{*} (A_{k})+ \frac{\epsilon}{2 ^{k}}$
>    - Họ tập hợp $(V_{k,n})$ tạo thành một dãy phủ đếm được của $A$. Do đó:
>    $$\mu^*(A) \le \sum_{k \in \mathbb{N}} \left( \mu^*(A_k) + \frac{\epsilon}{2^k} \right) = \sum_{k \in \mathbb{N}} \mu^*(A_k) + \sum_{k \in \mathbb{N}} \frac{\epsilon}{2^k} = \sum_{k \in \mathbb{N}} \mu^*(A_k) + \epsilon$$
>    - Cho $\epsilon \to 0$, ta được điều cần chứng minh

> [!thm]  Tiêu chuẩn Carathéodory trên họ tập cơ sở
> Cho $\mu^*$ là độ đo ngoài sinh ra từ họ ${} \mathfrak{V}$ và hàm $\gamma$. Hai điều kiện sau là tương đương đối với tính $\mu^*$-đo được của tập $E$:
> 
> $(i)$ $\mu^*(T) = \mu^*(T \cap E) + \mu^*(T \cap E^c)$ với mọi tập thử $T \subseteq X$. _(Đây chính là Tiêu chuẩn Carathéodory gốc)._
> 
> $(ii)$ $\mu^*(V) = \mu^*(V \cap E) + \mu^*(V \cap E^c)$ với mọi tập cơ sở $C \in \mathfrak{V}$.

> [!proof] : $(ii)$ $\Rightarrow$ $(i)$
> 
> Việc $(i$) $\Rightarrow$ $(ii)$ là hiển nhiên vì $\mathcal{C} \subseteq \mathcal{P}(\Omega)$. Ta chỉ cần chứng minh chiều ngược lại.
> 
> Giả sử $(ii)$ đúng. Xét một tập thử $T \subseteq \Omega$ bất kỳ.
> 
> Lấy một dãy vỏ bọc đếm được tùy ý $\{C_k\}_{k=1}^\infty \subseteq \mathcal{C}$ sao cho nó bao trùm tập thử: $T \subseteq \bigcup_{k=1}^\infty C_k$.
> 
> Theo giả thiết $(ii)$, điều kiện "chia cắt tốt" đúng với mọi tập cơ sở $C_k$, do đó:
> 
> $$\mu^*(C_k) = \mu^*(C_k \cap E) + \mu^*(C_k \cap E^c) \quad \forall k \ge 1$$
> 
> Lấy tổng vô hạn hai vế theo $k$, ta có:
> 
> $$\sum_{k=1}^\infty \mu^*(C_k) = \sum_{k=1}^\infty \mu^*(C_k \cap E) + \sum_{k=1}^\infty \mu^*(C_k \cap E^c)$$
> 
> Bây giờ, ta sẽ đánh giá từng tổng ở vế phải. Vì $T \subseteq \bigcup_{k=1}^\infty C_k$, ta giao cả hai vế với $E$:
> 
> $$T \cap E \subseteq \left(\bigcup_{k=1}^\infty C_k\right) \cap E = \bigcup_{k=1}^\infty (C_k \cap E)$$
> 
> Áp dụng tính đơn điệu và tính $\sigma$ - dưới cộng tính của độ đo ngoài $\mu^*$ lên quan hệ bao hàm trên:
> 
> $$\mu^*(T \cap E) \le \mu^*\left(\bigcup_{k=1}^\infty (C_k \cap E)\right) \le \sum_{k=1}^\infty \mu^*(C_k \cap E)$$
> 
> Bằng lập luận y hệt đối với phần bù $E^c$, ta cũng có:
> 
> $$\mu^*(T \cap E^c) \le \sum_{k=1}^\infty \mu^*(C_k \cap E^c)$$
> 
> Cộng hai bất đẳng thức này lại và thế vào phương trình tổng ban đầu:
> 
> $$\sum_{k=1}^\infty \mu^*(C_k) \ge \mu^*(T \cap E) + \mu^*(T \cap E^c)$$
> 
> Mặt khác, theo tính chất của độ đo ngoài sinh ra từ một họ tập hợp (Remark 2.23), độ đo ngoài của một tập cơ sở luôn nhỏ hơn hoặc bằng chi phí gốc của nó: ${} \mu^*(C_k) \le \gamma(C_k) {}$. Kéo theo:
> 
> $$\sum_{k=1}^\infty \gamma(C_k) \ge \sum_{k=1}^\infty \mu^*(C_k) \ge \mu^*(T \cap E) + \mu^*(T \cap E^c)$$
> 
> Bất đẳng thức này chứng tỏ rằng biểu thức $\mu^*(T \cap E) + \mu^*(T \cap E^c)$ chính là một cận dưới cho tập hợp tất cả các "tổng chi phí" ${} \sum \gamma(C_k) {}$ sinh ra từ mọi dãy vỏ bọc của $T$.
> 
> Theo định nghĩa, $\mu^*(T)$ là infimum (cận dưới lớn nhất) của tập hợp các tổng chi phí này. Vì cận dưới lớn nhất phải lớn hơn hoặc bằng mọi cận dưới khác, ta bắt buộc phải có:
> 
> $$\mu^*(T) \ge \mu^*(T \cap E) + \mu^*(T \cap E^c)$$
> 
> Cuối cùng, vì bất đẳng thức ngược lại $\mu^*(T) \le \mu^*(T \cap E) + \mu^*(T \cap E^c)$ luôn đúng (do tính bán cộng tính của $\mu^*$ với $T = (T \cap E) \cup (T \cap E^c)$), ta suy ra dấu bằng xảy ra.
> 
> Điều kiện $(i)$ được thỏa mãn.



$\pi$


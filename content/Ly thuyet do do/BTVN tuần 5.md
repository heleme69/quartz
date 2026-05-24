> [!thm] (Outer - Inner Approximation)
> For every $E \in \mathfrak{B}(\mathbb{R})$, the following conditions are all equivalent:
> 1. $(i)$ $E \in  \mathfrak{M}_{L}$
> 2. Outer Approximation:
> $(ii)$ For every $\epsilon >0$, there exists an open set $O \supset E$ with $\mu ^{*}_{L}(O \setminus E) \le \epsilon$.
> $(iii)$ There exists a set $G$ $\left( G = \bigcap_{n=1} ^{\infty} O_{n} \right)$, ${} O_{n}$ is open,  $G \supset E$ with $\mu ^{*} _{L}(G \setminus E) = 0$.
> 3. Inner Approximation:
> $(iv)$ For every ${} \epsilon > 0$, there exists a closed set $C \subset E$ with $\mu ^{*} _{L}(E \setminus C) \le \epsilon$.
> $(v)$ There exists a set $F$ $\left( F = \bigcup _{n = 1} ^{\infty} C_{n}\right)$, $C_{n}$ is closed, $F \subset E$ with $\mu ^{*}_{L}(E \setminus F) = 0$.

> [!prf]
> Ta đã chứng minh $(i)$, $(ii)$, $(iii)$ tương đương, bây giờ ta sẽ chứng minh $(i)$, $(iv)$, $(v)$ là tương đương nhau.
> 1. $((i) \implies (iv))$
> 	Vì họ các tập đo được $\mathfrak{M}_L$ là một $\sigma$-đại số, ta có $E \in \mathfrak{M}_L$ nên $E^c \in \mathfrak{M}_L$. 
> 	Vì $E^{c}$ là tập đo được, áp dụng $(ii)$, ta tìm được tập mở $O \supset E^c$ sao cho $\mu_L^*(O \setminus E^c) \le \epsilon$.
> 	Đặt $C = O^c$:
> 		- Vì $O$ là tập mở, suy ra lõi $C$ là tập đóng.
> 		- Vì $O \supset E^c$ nên $C \subset E$.
> 		- Ta có $$O \setminus E^c = O \cap (E^c)^c = O \cap E = E \cap C^c = E \setminus C$$
> 		- Vậy ta có $\mu_L^*(E \setminus C) \le \epsilon$.
> 2. $((iv) \implies (v))$
> 	Ta cần tìm một tập $F$ là hợp của vô hạn tập đóng nằm trong $E$ sao cho $\mu_L^*(E \setminus F) = 0$.
> 	Tương ứng với mỗi $\frac{1}{n}$, tồn tại một tập đóng $C_n \subset E$ sao cho: $\mu_L^*(E \setminus C_n) \le \frac{1}{n}$.
> 	Đặt $F = \bigcup_{n=1}^\infty C_n$, ta có $E \setminus F \subseteq E \setminus C_n \quad \forall n \in \mathbb{N}$ với mỗi $n \in \mathbb{N}$.
> 	Áp dụng tính đơn điệu của độ đo ngoài:
> 	$$\mu_L^*(E \setminus F) \le \mu_L^*(E \setminus C_n) \le \frac{1}{n}$$
> 	Cho $n \to \infty$, ta thu được $\mu_L^*(E \setminus F) = 0$.
> 3. $((v) \implies (i))$
> 	Giả sử ta có $F \subset E$ và $\mu_L^*(E \setminus F) = 0$, ta cần chỉ ra  $E \in \mathfrak{M}_{L}$.
> 	Vì $F \subseteq E$, ta có $E = F \cup (E \setminus F)$:
> 		- Tập $F$ là hợp đếm được các tập mở nên $F$ là một tập Borel, ta đã chứng minh mọi tập Borel đều Lebesgue đo được nên $F \in \mathfrak{M}_{L}$
> 		- $E \setminus F$ có độ đo ngoài bằng 0 (theo giả thiết). Mà mọi tập có độ đo ngoài bằng 0 đều tự động là tập đo được nên $(E \setminus F) \in \mathfrak{M}_L$
> 		- Vì họ $\mathfrak{M}_L$ là một $\sigma$-đại số nên nó đóng kín với phép hiệu và hợp hai tập hợp, vậy $E \in \mathfrak{M}_L$.

> [!thm] (Fundamental Properties of Lebesgue Inner Measure)
> 1. $\mu_{*,L} \in [0, \infty]$ for every $E \in \mathfrak{B}(\mathbb{R})$
> 2. $\mu_{*,L}(\emptyset) = 0$
> 3. monocity: $E_{1}, E_{2} \in \mathfrak{B}(\mathbb{R}), E_{1} \subset E_{2} \implies \mu_{*,L}(E_{1})\le \mu_{*,L}(E_{2})$
> 4. $\sigma$ - superadditivity: $(E_{n}: n \in \mathbb{N})\subset \mathfrak{B}(\mathbb{R}), E_{n}$ disjoint 
> $\implies$ $\mu_{*,L}\left( \bigcup_{n \in \mathbb{N}}E_{n} \right) \ge \sum_{n \in \mathbb{N}} \mu_{*,L}(E_{n})$

> [!prf] 
> - Ta sẽ chứng minh $\mu_{*,L}$ thỏa tính chất $\sigma$-cộng tính trên
> - Đặt $E = \bigcup_{n = 1}E_{n}$ với ${} E_{n}$ rời nhau từng đôi một.
> 	- Nếu tồn tại $E_{k}$ sao cho $\mu_{*,L}(E_{k}) = \infty$ thì do tính đơn điệu, $E_{k} \subset E$ dẫn tới $\mu_{*,L}(E) = \infty$, bất đẳng thức hiển nhiên đúng.
> 	- Giả sử ${} \mu_{*,L} (E_{n})<\infty$ với mọi $n \in \mathbb{N}$
> 	- Cho một số thực $\epsilon > 0$ tùy ý. Theo định nghĩa của độ đo trong (bằng supremum của tập compact), với mỗi tập $E_n$, sẽ luôn tồn tại một tập compact $K_n \subset E_n$ sao cho: $$\mu_L(K_n) > \mu_{*,L}(E_n) - \frac{\epsilon}{2^n} \tag{1}$$
> 	- Đặt $K^{(N)} = \bigcup_{n=1}^N K_n$, ta có: $$\mu_{*,L}(E) \ge \mu_L(K^{(N)}) \tag{2}$$
> 	- Do các $K_n$ là các tập (compact) rời nhau và đo được, tính cộng tính hữu hạn của độ đo Lebesgue: $$\mu_L(K^{(N)}) = \mu_L \left( \bigcup_{n=1}^N K_n \right) = \sum_{n=1}^N \mu_L(K_n) \tag{3}$$
> 	- Thay $(1)$, $(3)$ vào $(2)$: $$\mu_{*,L}(E) \ge \sum_{n=1}^N \mu_L(K_n) > \sum_{n=1}^N \left( \mu_{*,L}(E_n) - \frac{\epsilon}{2^n} \right)$$
> 	- Vậy ta có $\mu_{*,L}(E) > \sum_{n=1}^N \mu_{*,L}(E_n) - \epsilon$
> 	- Cho $N \to \infty$, $\epsilon \to 0$, ta được: $$\mu_{*,L}(E) \ge \sum_{n=1}^\infty \mu_{*,L}(E_n)$$
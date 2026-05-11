# [IV] Tính chính quy của độ đo ngoài

> [!lem] (Borel Regularity of the Lebesgue Outer Measure)
> The Lebesgue outer measure $\mu ^{*}$ on $\mathbb{R}$ has the following properities:
> a) For every $E \in \mathfrak{B}(\mathbb{R})$ and $\epsilon >0$, there exist an open set $O \in \mathbb{R}$ such that $O \supset E$ and 
> $$
> \mu ^{*}_{L}(E) \le \mu ^{*}_{L}(O) \le \mu ^{*}_{L}(E) + \epsilon 
> $$
> (Note that the inequalities $\mu ^{*}(E)_{L} \le \mu ^{*}_{L}(O)$ and $\mu ^{*}_{L}(O) < \mu ^{*}_{L}(E) + \epsilon$ may not hold.)
> b) For every $E \in \mathfrak{B}(\mathbb{R})$ and $\epsilon > 0$, there exists sequence $(O_{n}) _{n = 1}^{\infty}$ such that $E \subseteq O_{n}$ for every $n \in \mathbb{N}$ and $\mu ^{*}_{L}(G) = \mu ^{*}_{L}(E)$, with $G = \bigcap_{n = 1} ^{\infty}O_{n}$.

> [!prf]
> 1. Trường hợp $\mu_{L}^{*} = \infty$, ta có $\mathbb{R} \supset E$ cho ta $\mu ^{*}_{L} \le \mu ^{*}_{L}(\mathbb{R}) = \infty = \infty +\epsilon = \mu ^{*}_{L}(E) + \epsilon$. Ta xét trường hợp $\mu ^{*}_{L}(E) < \infty$. Theo định nghĩa infimum, ta tìm được $(I_{n}: n \in \mathbb{N}) \in \mathfrak{J_{o}}$ sao cho $\bigcup_{n \in \mathbb{N}}I_{n} \supset E$ và $\mu ^{*}_{L}(E) \le \sum_{n \in \mathbb{N}} \ell(I_{n}) < \mu ^{*}_{L}(E) +\epsilon$. Ta chọn $O = \bigcup_{n \in \mathbb{N}} I_{n}$, khi đó kết hợp với tính đơn điệu: 
> $$
> \mu ^{*}_{L}(E) \le \mu ^{*}_{L}(O) = \mu ^{*}_{L}\left( \bigcup_{n \in \mathbb{N}}I_{n} \right) \le \sum_{n \in \mathbb{N}}\mu ^{*}_{L}(I_{n}) = \sum_{n \in \mathbb{N}}\ell(I_{n}) \le \mu ^{*}_{L}(E) + \epsilon   
> $$
>
> 2. Với $\epsilon = \frac{1}{n}$, với $n \in \mathbb{N}$, theo a), với mỗi số nguyên dương n, tìm được $O_{n} \supset E$ sao cho $\mu_{L} ^{*}(O_{n}) < \mu ^{*}_{L}(E) + \frac{1}{n}$. Với $G = \bigcap_{n=1} ^{\infty}O_{n}$, ta sử dụng định lý kẹp để chứng minh  $\mu ^{*}_{L} (G) = \mu ^{*}_{L}(E)$.
> - Chiều ${} (\ge)$:
> Vì $E \subseteq O_n$ với mọi $n$, nên $E$ phải nằm trong phần giao của chúng: $E \subseteq \bigcap_{n=1}^\infty O_n = G$.
> Áp dụng tính chất đơn điệu của độ đo ngoài, ta suy ra: 
> $$
> \mu_L^*(E) \le \mu_L^*(G)
> $$
> - Chiều ${} (\le)$:
> Mặt khác, vì $G$ là giao của tất cả các $O_n$, nên $G$ bắt buộc phải là tập con của từng cái $O_n$ một: $G \subseteq O_n$ với mọi $n \in \mathbb{N}$.
> Lại dùng tính đơn điệu của độ đo ngoài, ta có:$$\mu_L^*(G) \le \mu_L^*(O_n) \le \mu_L^*(E) + \frac{1}{n} \quad \text{với mọi } n \in \mathbb{N}$$
> Cho $n \to \infty$, ta được điều cần chứng minh

> [!def] (Borel regular outer measure)
> Một độ đo ngoài ${} \mu ^{*}$ trên một không gian topo được gọi là Chính quy Borel nếu nó thỏa mãn đồng thời hai điều kiện:
> 1. Tính Borel: Mọi tập Borel đều bắt buộc là một tập $\mu ^{*}$ - đo được. Nghĩa là: $\mathcal{B}(\mathbb{R}) \subseteq \mathfrak{M}(\mu ^{*})$.
> 2. Tính chính quy (Regularity): Với mọi tập hợp $A$ bất kì, luôn tồn tại một tập Borel $B \in \mathcal{B}$ sao cho $A \subseteq B$ và thõa $\mu ^{*}(A) = \mu ^{*}(B)$.

> [!thm] $\mu ^{*} _{L}$ là độ đo ngoài chính quy Borel

> [!prf]
> 1. (Nhắc lại) Ta đã chứng minh mọi tập Borel đều Lebesgue đo được, tức $\mathcal{B} \subseteq \mathfrak{M}_{L}$
> 2. Cho $E \subseteq \mathbb{R}$ là một tập bất kì, ta cần tìm tập Borel $B$ sao cho nó chứa $E$ và có cùng độ đo ngoài bằng với $E$.
> Sử dụng bổ đề **Lemma 1b)**, trong đó ta có khẳng định: Với tập $E \in \mathfrak{B(\mathbb{R})}$ bất kì, ta tìm được $G$ sao cho $E \subseteq G$ và $\mu ^{*} _{L}(E) = \mu ^{*}_{L}(G)$. Với $G = \bigcap_{n = 1} ^{\infty}O_{n}$:
> - Mọi tập mở $O_{n}$ hiển nhiên là một tập Borel ${} (O_{n} \in \mathcal{B})$.
> - Họ các tập Borel là một $\sigma$ - đại số, nên nó có tính chất đóng với phép giao đếm được. Do đó, giao vô hạn đếm được tập Borel ${} O_{n}$ cũng bắt buôc là tập Borel.
> - Từ hai điều trên ta kết luận $G \in \mathcal{B(\mathbb{R})}$, vậy ta chọn $B = G$ là tập Borel cần tìm, khi đó ta kết luận $E \subseteq B$ và $\mu_{L}^{*} (E) = \mu ^{*}_{L}(B)$ thõa cả hai điều kiện chính quy.

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
> 4. Xấp xỉ từ bên ngoài: $(i)$ $\implies$ $(ii)$ $\implies$ $(iii)$ $\implies$ $(i)$
> 	- $((i) \implies (ii))$
> 	Giả sử $E \in \mathfrak{M}_{L}$, ta cần chứng minh: với mọi $\epsilon >0$, tìm được tập mở $O \supset E$ sao cho $\mu ^{*} _{L}(O \setminus E) \le \epsilon$.
> 	Theo bổ đề **Lemma 1a)**, với mọi $\epsilon>0$, ta luôn tìm được tập mở $O \supset E$ sao cho $\mu_L^*(O) \le \mu_L^*(E) + \epsilon$.
> 	Vì $E$ là tập Lebesgue đo được ($E \in \mathfrak{M}_L$), nó thỏa mãn phương trình Carathéodory. Lấy tập mở $O$ làm "tập thử" để $E$ cắt, ta có: 
> 	$$\mu_L^*(O) = \mu_L^*(O \cap E) + \mu_L^*(O \cap E^c) = \mu_L^*(E) + \mu_L^*(O \setminus E)$$
> 	Thế vào bất đẳng thức đầu tiên, ta được: 
> 	$$\mu_L^*(E) + \mu_L^*(O \setminus E) \le \mu_L^*(E) + \epsilon$$
> 	Tới đây, ta cẩn thận xét hai trường hơp:
> 		- Nếu $\mu ^{*}_{L}(E) < \infty$: ta đơn giản $\mu ^{*}_{L}(E)$ ở hai vế để có điều cần chứng minh.
> 		- Nếu $\mu ^{*}_{L}(E) = \infty$: ta đặt $E_n = E \cap (n-1, n]$ với $n \in \mathbb{N}$. Vì $\mu ^{*}_{L}(E_{n}) \le n$ là tập hữu hạn, ta tìm được $O_{n}$ mở sao cho $\mu ^{*} _{L}(O_{n} \setminus E_{n}) \le \frac{\epsilon}{2^{n}}$
> 		Đặt $O = \bigcup_{n \in \mathbb{N}} O_n$, ta có:
> 	$$O \setminus E \subseteq \bigcup_{n \in \mathbb{Z}} (O_n \setminus E_n)$$
> 		Suy ra: $$\mu_L^*(O \setminus E) \le \sum_{n \in \mathbb{N}} \mu_L^*(O_n \setminus E_n) \le \sum_{n \in \mathbb{N}} \frac{\epsilon}{2^{n}} = \epsilon$$ (liên hệ tới tính chất $\sigma$ - dưới cộng tính: $\mu^*(A \cup B) \le \mu^*(A) + \mu^*(B)$)
> 	- $((ii) \implies (iii))$
> 	Ta cần tìm một tập $G$ là giao của vô hạn tập mở chứa $E$ sao cho $\mu_L^*(G \setminus E) = 0$.
> 	Sử dụng tính chất $(ii)$, với mỗi $\frac{1}{n}$, tồn tại một tập mở $O_n \supset E$ sao cho: $\mu_L^*(O_n \setminus E) \le \frac{1}{n}$.
> 	Đặt $G = \bigcap_{n=1}^\infty O_n$, ta có $G \setminus E \subseteq O_n \setminus E$ với mọi $n \in \mathbb{N}$.
> 	Áp dụng tính đơn điệu của độ đo ngoài: 
> 	$$\mu_L^*(G \setminus E) \le \mu_L^*(O_n \setminus E) \le \frac{1}{n}$$ 
> 	Cho $n \to \infty$ ta có $\mu_L^*(G \setminus E) = 0$.
> 	- ($(iii) \implies (i)$)
> 	Giả sử ta có $G \supset E$ và $\mu_L^*(G \setminus E) = 0$, ta cần chỉ ra  $E \in \mathfrak{M}_{L}$.
> 	Vì $E \subseteq G$, ta có $E = G \setminus (G \setminus E)$:
> 		- Tập $G$ là giao đếm được các tập mở nên $G$ là một tập Borel, ta đã chứng minh mọi tập Borel đều Lebesgue đo được nên $G \in \mathfrak{M}_{L}$
> 		- $G \setminus E$ có độ đo ngoài bằng 0 (theo giả thiết). Mà mọi tập có độ đo ngoài bằng 0 đều tự động là tập đo được nên $(G \setminus E) \in \mathfrak{M}_L$
> 		- Vì họ $\mathfrak{M}_L$ là một $\sigma$-đại số nên nó đóng kín với phép hiệu (trừ) tập hợp, vậy $E \in \mathfrak{M}_L$.
> 5. Xấp xỉ từ bên trong: $(i)$ $\implies$ $(iv)$ $\implies$ $(v)$ $\implies$ $(i)$
> 	- $((i) \implies (iv))$
> 	Vì họ các tập đo được $\mathfrak{M}_L$ là một $\sigma$-đại số, ta có $E \in \mathfrak{M}_L$ nên $E^c \in \mathfrak{M}_L$. 
> 	Vì $E^{c}$ là tập đo được, áp dụng ${} (ii)$, ta tìm được tập mở $O \supset E^c$ sao cho $\mu_L^*(O \setminus E^c) \le \epsilon$.
> 	Đặt $C = O^c$,
> 		- Vì $O$ là tập mở, suy ra lõi $C$ là tập đóng.
> 		- Vì $O \supset E^c$ nên $C \subset E$.
> 		- Ta có $$O \setminus E^c = O \cap (E^c)^c = O \cap E = E \cap C^c = E \setminus C$$
> 		- Vậy ta có $\mu_L^*(E \setminus C) \le \epsilon$.
> 	- $((iv) \implies (v))$
> 	Ta cần tìm một tập ${} F$ là hợp của vô hạn tập đóng nằm trong $E$ sao cho $\mu_L^*(E \setminus F) = 0$.
> 	Tương ứng với mỗi $\frac{1}{n}$, tồn tại một tập đóng $C_n \subset E$ sao cho: $\mu_L^*(E \setminus C_n) \le \frac{1}{n}$.
> 	Đặt $F = \bigcup_{n=1}^\infty C_n$, ta có $E \setminus F \subseteq E \setminus C_n \quad \forall n \in \mathbb{N}$ với mỗi $n \in \mathbb{N}$.
> 	Áp dụng tính đơn điệu của độ đo ngoài:
> 	$$\mu_L^*(E \setminus F) \le \mu_L^*(E \setminus C_n) \le \frac{1}{n}$$
> 	Cho $n \to \infty$, ta thu được $\mu_L^*(E \setminus F) = 0$.
> 	- $((v) \implies (i))$
> 	Giả sử ta có ${} F \subset E$ và ${} \mu_L^*(E \setminus F) = 0 {}$, ta cần chỉ ra  $E \in \mathfrak{M}_{L}$.
> 	Vì $F \subseteq E$, ta có $E = F \cup (E \setminus F)$:
> 		- Tập ${} F$ là hợp đếm được các tập mở nên ${} F$ là một tập Borel, ta đã chứng minh mọi tập Borel đều Lebesgue đo được nên ${} F \in \mathfrak{M}_{L}$
> 		- ${} E \setminus F$ có độ đo ngoài bằng 0 (theo giả thiết). Mà mọi tập có độ đo ngoài bằng 0 đều tự động là tập đo được nên ${} (E \setminus F) \in \mathfrak{M}_L {}$
> 		- Vì họ $\mathfrak{M}_L$ là một $\sigma$-đại số nên nó đóng kín với phép hiệu và hợp hai tập hợp, vậy $E \in \mathfrak{M}_L$.

# [V] Độ đo Lebesgue trong

> [!def] (Các tập trên $\mathbb{R}$)
> Ta viết $\mathfrak{O}_{\mathbb{R}}, \mathfrak{C}_{\mathbb{R}}, \mathfrak{K}$ lần lượt là các tập mở, đóng và compact trên $\mathbb{R}$.

> [!rem] (Notation)
> 1. $\mathfrak{J}$ (Khoảng): Là họ tất cả các khoảng cơ sở (đóng, mở, nửa khoảng đóng mở) trên $\mathbb{R}$. Ký hiệu $\mathfrak{J_{o}}$ chỉ riêng khoảng mở.
> Vai trò dùng để định nghĩa chiều dài sơ cấp $\ell(I) = b - a$.
> 2. $\mathfrak{O} / \mathfrak{C}$ (Tập mở/ Tập đóng): Là họ tất cả khoảng mở / đóng trên $\mathfrak{\mathbb{R}}$. 
> Lưu ý rằng mọi tập mở trên $\mathbb{R}$ đều là hội đếm được các khoảng mở rời nhau thuộc $\mathfrak{J_{o}}$.
> 3. $\mathfrak{V}$ (Phủ mở): Là họ các tập mở, ký hiệu $\mathcal{V} = \{V_i\}_{i \in I} \subset \mathfrak{O}$ được gọi là phủ mở của $E$ với bất kì $E$ con $X$ thỏa $E \subset \bigcup_{i \in I} V_i$.
> 4. Lớp phủ $\mathfrak{V}$: Trên không gian tổng quát $X$ (không nhất thiết là $\mathbb{R}$).
> $\mathfrak{V}$ là một họ các tập con của $X$ thỏa: $\emptyset \in \mathfrak{V}$ và tồn tại một dãy $\{V_n\}_{n=1}^\infty \subset \mathfrak{V}$ sao cho $X = \bigcup_{n=1}^\infty V_n$.

> [!prp] (Lebesgue Outer measure on open set)
> For $E \in \mathfrak{B}(\mathbb{R})$, we have $\mu_L^*(E) = \inf \{\mu_L(O) : O \supset E, O \in \mathfrak{O}_\mathbb{R}\}$

> [!prf]
> - Ý nghĩa: Thay vì giới hạn việc phủ $E$ bằng các khoảng mở ${} (a,b)$, ta cho phép phủ $E$ bằng bất kì tập mở $\mathfrak{O}_{\mathbb{R}}$
> - Chiều ${} (\le)$: $\mu_L^*(E) \le \inf \{\mu_L(O) : O \supset E, O \in \mathfrak{O}_\mathbb{R}\}$
> 	- Lấy một tập mở $O \in \mathfrak{O}_\mathbb{R}$ bất kỳ sao cho $E \subset O$.
> 	- Theo tính đơn điệu của độ đo ngoài, vì $E \subset O$ nên ta có:
> 	   $$\mu_L^*(E) \le \mu_L^*(O)$$
> 	- Mặt khác, vì $O$ là một tập mở, nên $O$ là một tập Borel ($O \in \mathcal{B}(\mathbb{R})$), mà mọi tập Borel đều Lebesgue đo được. Do $O \in \mathfrak{M}_L$, độ đo ngoài của $O$ chính là độ đo Lebesgue của nó: $\mu_L^*(O) = \mu_L(O)$, thay vào bất đẳng thức và dùng định nghĩa infimum, ta được chiều bất đẳng thức đầu tiên.
> - Chiều $(\ge)$: $\inf \{\mu_L(O) : O \supset E, O \in \mathfrak{O}_\mathbb{R}\} \le \mu_L^*(E)$
> 	Mục tiêu là ta cần dùng định nghĩa $\ell(I)$ để xây dựng tập mở $O$ xấp xỉ $E$.
> 	-  Nếu $\mu ^{*}_{L} (E) = \infty$, chiều bất đẳng thức hiển nhiên đúng, ta xét trường hợp $\mu ^{*}_{L} < \infty$.
> 	- Theo định nghĩa gốc của độ đo ngoài, với $\epsilon >0$ cho trước, ta tìm được dãy khoảng mở  $(I_{n}: n \in \mathbb{N}) \subset \mathfrak{J_{o}} {}$ sao cho $\bigcup_{n \in \mathbb{N}} I_{n} \supset E$ và $\sum_{n \in \mathbb{N}} \ell(I_{n}) \le \mu ^{*} _{L}(E) + \epsilon$.
> 	- Đặt $O = \bigcup_{n \in \mathbb{N}} I_{n}$, vì mỗi ${} I_{n}$ là khoảng mở nên hội đếm được các tập mở là tập mở, nên $O \in \mathfrak{O}_{\mathbb{R}}$.
> 	- Sử dụng tính chất $\sigma$ - dưới cộng tính và bổ đề: $\mu ^{*}_{L}(I) = \ell(I)$: $$\mu_L(O) = \mu_L \left( \bigcup_{n \in \mathbb{N}} I_n \right) \le \sum_{n \in \mathbb{N}} \mu_L(I_n) = \sum_{n \in \mathbb{N}} \ell(I_n)$$
> 	- Vậy ta có $\mu_L(O) \le \mu_L^*(E) + \epsilon$, nên ta cũng có: $$\inf \{\mu_L(O) : O \supset E, O \in \mathfrak{O}_\mathbb{R}\} \le \mu_L(O) \le \mu_L^*(E) + \epsilon$$
> 	- Cho $\epsilon \to 0$, ta có chiều bất đẳng thức cần chứng minh.

> [!def] (Lebesgue Inner Measure on closed set)
> The Lebesgue inner measure of $E \in \mathfrak{B}(\mathbb{R})$ is defined by 
> $$
> \mu_{*,L}(E) = \sup \{ \mu_{L}(C) :C \subset E, C \in \mathfrak{C} _{\mathbb{R}}\}
> $$ 
> (Note that $\emptyset \subset E$ and $\emptyset \in \mathfrak{C_{\mathbb{R}}}$ so that the collection of all closed sets contained in $E$ is nonempty.)

> [!prp] (Lebesgue Inner Measure on compact set)
> For every $E \in \mathfrak{B}(\mathbb{R})$, 
> ${} \mu_{*,L}(E) = \sup \{ \mu_{L}(K): K \subset E, K \in \mathfrak{K}_{\mathbb{R}} \}$.

> [!prf] 
> - Ta đặt:
> $\alpha = \sup \{\mu_L(C) : C \subset E, C \in \mathfrak{C}_\mathbb{R}\}$ (Độ đo trong theo định nghĩa).
> $\beta = \sup \{\mu_L(K) : K \subset E, K \in \mathfrak{K}_\mathbb{R}\}$ (Giá trị cần chứng minh).
> - Vì mọi tập compact trong $\mathbb{R}$ đều là tập đóng (theo định lý Heine-Borel), ta có $\mathfrak{K}_\mathbb{R} \subset \mathfrak{C}_\mathbb{R}$. Do đó, tập hợp giá trị độ đo của $\mathfrak{K}_\mathbb{R}$ là tập con của $\mathfrak{C}_\mathbb{R}$, kéo theo supremum của nó cũng nhỏ hơn hoặc bằng: $\beta \le \alpha$.
> - Ta xét các trường hợp của $\alpha$:
> 	- Trường hợp 1: $\alpha < \infty$
> 	Cho một số $\varepsilon > 0$ tùy ý. Theo định nghĩa của supremum, tồn tại một tập đóng $C_0 \in \mathfrak{C}_\mathbb{R}$ sao cho $C_0 \subset E$ và xấp xỉ được $\alpha$: $$\mu_L(C_0) > \alpha - \epsilon$$
> 	Bây giờ, ta xây dựng một dãy tập compact $(K_n)_{n \in \mathbb{N}}$ tăng dần để xấp xỉ $C_0$. Cụ thể, ta có thể chọn $K_n = C_0 \cap [-n, n]$.
> 	Rõ ràng $K_n$ là giao của hai tập đóng và bị chặn, nên $K_n$ là tập compact ($K_n \in \mathfrak{K}_\mathbb{R}$).
> 	Dãy này tăng dần $K_1 \subset K_2 \subset \dots$ và $\bigcup_{n \in \mathbb{N}} K_n = C_0$.
> 	Áp dụng tính liên tục từ dưới lên của độ đo Lebesgue (vì các $K_n$ đo được và tăng dần), ta có: $$\lim_{n \to \infty} \mu_L(K_n) = \mu_L \left( \bigcup_{n \in \mathbb{N}} K_n \right) = \mu_L(C_0)$$
> 	Vì $\beta$ là supremum trên tất cả các tập compact nằm trong $E$ (và $K_n \subset C_0 \subset E$), ta có: $$\beta \ge \sup_{n \in \mathbb{N}} \mu_L(K_n) = \lim_{n \to \infty} \mu_L(K_n) = \mu_L(C_0) > \alpha - \epsilon$$
> 	Suy ra $\beta > \alpha - \varepsilon$. Vì $\varepsilon > 0$ là tùy ý, cho $\varepsilon \to 0$, ta thu được $\beta \ge \alpha$.
> 	- Trường hợp 2: $\alpha = \infty$
> 	Với mọi số thực dương $M > 0$ lớn tùy ý, tồn tại một tập đóng $C_M \in \mathfrak{C}_\mathbb{R}$ sao cho $C_M \subset E$ và: $$\mu_L(C_M) > M$$
> 	Tương tự như trên, ta gọi $(K_n)_{n \in \mathbb{N}}$ là một dãy tập compact tăng dần sao cho $\bigcup_{n \in \mathbb{N}} K_n = C_M$. Áp dụng tính liên tục từ dưới: $$\lim_{n \to \infty} \mu_L(K_n) = \mu_L(C_M)$$
> 	Vậy $M \le \beta$. Vì $M > 0$ có thể chọn lớn bao nhiêu tùy ý, điều này ép buộc $\beta = \infty$. Vậy $\beta = \alpha = \infty$.
> 	- Từ hai trường hợp trên, ta có $\alpha = \beta$.

> [!thm] (Fundamental Properties of Lebesgue Inner Measure)
> 1. $\mu_{*,L} \in [0, \infty]$ for every $E \in \mathfrak{B}(\mathbb{R})$
> 2. $\mu_{*,L}(\emptyset) = 0$
> 3. monocity: $E_{1}, E_{2} \in \mathfrak{B}(\mathbb{R}), E_{1} \subset E_{2} \implies \mu_{*,L}(E_{1})\le \mu_{*,L}(E_{2})$
> 4. $\sigma$ - superadditivity: $(E_{n}: n \in \mathbb{N})\subset \mathfrak{B}(\mathbb{R}), E_{n}$ disjoint 
> $\implies$ $\mu_{*,L}\left( \bigcup_{n \in \mathbb{N}}E_{n} \right) \ge \sum_{n \in \mathbb{N}} \mu_{*,L}(E_{n})$

> [!prf] 
> - Ta dễ dàng kiểm tra tính chất 1 - 3.
> - Đặt $E = \bigcup_{n = 1}E_{n}$ với ${} E_{n}$ rời nhau từng đôi một.
> 	- Nếu tồn tại $E_{k}$ sao cho $\mu_{*,L}(E_{k}) = \infty$ thì do tính đơn điệu, $E_{k} \subset E$ dẫn tới $\mu_{*,L}(E) = \infty$, bất đẳng thức hiển nhiên đúng.
> 	- Giả sử ${} \mu_{*,L} (E_{n})<\infty$ với mọi $n \in \mathbb{N}$
> 	- Cho một số thực $\epsilon > 0$ tùy ý. Theo định nghĩa của độ đo trong (bằng supremum của tập compact), với mỗi tập $E_n$, sẽ luôn tồn tại một tập compact $K_n \subset E_n$ sao cho: $$\mu_L(K_n) > \mu_{*,L}(E_n) - \frac{\epsilon}{2^n}$$
> 	- Đặt $K^{(N)} = \bigcup_{n=1}^N K_n$, ta có $\mu_{*,L}(E) \ge \mu_L(K^{(N)})$
> 	- Do các $K_n$ là các tập (compact) rời nhau và đo được, tính cộng tính hữu hạn của độ đo Lebesgue: $$\mu_L(K^{(N)}) = \mu_L \left( \bigcup_{n=1}^N K_n \right) = \sum_{n=1}^N \mu_L(K_n)$$
> 	- Thế các đẳng thức vào bất đẳng thức gần nhất ở trên: $$\mu_{*,L}(E) \ge \sum_{n=1}^N \mu_L(K_n) > \sum_{n=1}^N \left( \mu_{*,L}(E_n) - \frac{\epsilon}{2^n} \right)$$
> 	- Vậy ta có $\mu_{*,L}(E) > \sum_{n=1}^N \mu_{*,L}(E_n) - \epsilon$
> 	- Cho $N \to \infty$, $\epsilon \to 0$, ta được: $$\mu_{*,L}(E) \ge \sum_{n=1}^\infty \mu_{*,L}(E_n)$$

> [!lem] (Borel Regularity of the Lebesgue Outer Measure)
> Let $E \in \mathfrak{B}(\mathbb{R})$ with $\mu ^{*}_{L}(E) < \infty$
> a) For every $\epsilon > 0$ and there exists $C \in \mathfrak{C}_{\mathbb{R}}$ such that $C \subset E$ and
> $$
> \mu_{*,L}(E) - \epsilon < \mu_{L}(C) \le \mu_{*,L}(E)
> $$
>
> b) There exists $F = \bigcup_{n = 1}C_{n}$ such that $F \subset E$ and $\mu_{L}(F) = \mu_{*,L}(E)$

> [!thm] (Existence of non $\mathfrak{M}_{L}$ - measureable set)
> Every $\mathfrak{M}_{L}$ - measureablke set $E$ with $\mu_{L}(E) > 0$ contains a non $\mathfrak{M}_{L}$- measureable set. 




$\pi$

---
[📄 View PDF](./Tính chính quy của độ đo.pdf)

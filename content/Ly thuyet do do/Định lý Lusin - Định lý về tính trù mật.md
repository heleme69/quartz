# 1. Định lý Lusin

> [!def] Định nghĩa: Lớp hàm $\mathcal{L}^1$ và không gian thương $L^1$
> Gọi $\mathcal{L}^1(\mathbb{R}^N)$ là tập hợp tất cả các hàm thực $f: \mathbb{R}^N \to \mathbb{R}$ đo được và khả tích trên $\mathbb{R}^N$ theo độ đo Lebesgue.
> Trên không gian này, ta định nghĩa một quan hệ tương đương $f \sim g$ nếu và chỉ nếu $f(x) = g(x)$ hầu khắp nơi (almost everywhere - a.e).
> Không gian $L^1(\mathbb{R}^N)$ được định nghĩa là không gian thương của $\mathcal{L}^1(\mathbb{R}^N)$ qua quan hệ tương đương này:
> $$L^1(\mathbb{R}^N) = \mathcal{L}^1(\mathbb{R}^N) / \sim$$
> Trên không gian $L^1(\mathbb{R}^N)$, ta trang bị một chuẩn được xác định bởi tích phân Lebesgue:
> $$\|f\|_1 = \int_{\mathbb{R}^N} |f(x)|dx$$
> Việc chuyển qua lớp tương đương đảm bảo tính chất $\|f\|_1 = 0 \iff f = 0$ trong không gian $L^1$, biến đổi nó thành một không gian vector định chuẩn thực sự.

> [!thm] Định lý: Tính đầy đủ của không gian $L^1$
> Không gian vector định chuẩn $(L^1(\mathbb{R}^N), \|\cdot\|_1)$ là một không gian Banach.

> [!prf] Chứng minh
> Để chứng minh $L^1$ là không gian Banach, ta cần chứng minh nó là một không gian đầy đủ, tức là mọi dãy Cauchy trong $L^1$ đều hội tụ về một phần tử thuộc chính không gian đó.
>
> Lấy một dãy Cauchy $\{f_n\}$ bất kỳ trong $L^1$. Theo định nghĩa dãy Cauchy, với mọi $\varepsilon > 0$, tồn tại số nguyên dương $N_0$ sao cho $\|f_m - f_n\|_1 < \varepsilon$ với mọi $m, n \ge N_0$.
> Một tính chất cơ bản của không gian định chuẩn là: một dãy Cauchy sẽ hội tụ nếu nó chứa một dãy con hội tụ. Do đó, bài toán quy về việc tìm và chứng minh một dãy con của $\{f_n\}$ hội tụ trong $L^1$.
>
> Bằng cách chọn $\varepsilon = 1/2^k$, ta có thể trích ra một dãy con $\{f_{n_k}\}_{k \in \mathbb{N}}$ với các chỉ số $n_1 < n_2 < \dots < n_k < \dots$ thỏa mãn điều kiện sai số giữa hai số hạng liên tiếp giảm rất nhanh:
> $$\|f_{n_{k+1}} - f_{n_k}\|_1 < \frac{1}{2^k}$$
>
> Xây dựng một dãy hàm phụ $g_K$ là tổng của các sai số tuyệt đối:
> $$g_K(x) = \sum_{i=1}^K |f_{n_{i+1}}(x) - f_{n_i}(x)|$$
> Rõ ràng $g_K(x) \ge 0$ và dãy $\{g_K\}$ là một dãy hàm tăng đơn điệu theo $K$.
> Đánh giá chuẩn của $g_K$, sử dụng bất đẳng thức tam giác cho chuẩn, ta có:
> $$\|g_K\|_1 \le \sum_{i=1}^K \|f_{n_{i+1}} - f_{n_i}\|_1 < \sum_{i=1}^K \frac{1}{2^i} < 1$$
>
> Gọi giới hạn điểm của dãy này là $g(x) = \sum_{i=1}^\infty |f_{n_{i+1}}(x) - f_{n_i}(x)|$. Vì $g_K \uparrow g$, áp dụng Định lý hội tụ đơn điệu (hoặc Bổ đề Fatou), giới hạn của tích phân bằng tích phân của giới hạn:
> $$\int_{\mathbb{R}^N} g(x)dx \le \liminf_{K \to \infty} \int_{\mathbb{R}^N} g_K(x)dx \le 1$$
>
> Điều này chứng tỏ $g \in L^1$, và do tích phân của $g$ hữu hạn, hàm $g(x)$ phải nhận giá trị hữu hạn hầu khắp nơi trên $\mathbb{R}^N$.
> Vì tổng các trị tuyệt đối hội tụ hầu khắp nơi, chuỗi $\sum_{i=1}^\infty (f_{n_{i+1}}(x) - f_{n_i}(x))$ hội tụ tuyệt đối hầu khắp nơi. Kéo theo đó, chuỗi ban đầu hội tụ thông thường hầu khắp nơi.
> Chú ý rằng tổng từng phần của chuỗi này chính là một dạng chuỗi lồng nhau (telescoping series):
> $$f_{n_1}(x) + \sum_{i=1}^K (f_{n_{i+1}}(x) - f_{n_i}(x)) = f_{n_{K+1}}(x)$$
> Từ sự hội tụ của chuỗi, dãy hàm $\{f_{n_K}(x)\}$ hội tụ điểm hầu khắp nơi về một hàm giới hạn $f(x)$ khi $K \to \infty$.
>
> Cuối cùng, ta chứng minh hàm giới hạn $f \in L^1$ và dãy con hội tụ về $f$ theo chuẩn $L^1$.
> Theo cấu trúc chuỗi, ta có $|f(x)| \le |f_{n_1}(x)| + g(x)$ hầu khắp nơi. Vì cả $f_{n_1}$ và $g$ đều thuộc $L^1$, hàm tổng của chúng thuộc $L^1$, suy ra $f \in L^1$.
> Đánh giá khoảng cách theo chuẩn:
> $$|f(x) - f_{n_K}(x)| \le \sum_{i=K}^\infty |f_{n_{i+1}}(x) - f_{n_i}(x)|$$
> Lấy tích phân hai vế, ta được đánh giá chặn trên cho sai số:
> $$\|f - f_{n_K}\|_1 \le \sum_{i=K}^\infty \frac{1}{2^i} = \frac{1}{2^{K-1}}$$
> Khi $K \to \infty$, đại lượng $\frac{1}{2^{K-1}}$ tiến về 0, chứng tỏ $\|f - f_{n_K}\|_1 \to 0$.
> Vậy dãy con $\{f_{n_K}\}$ hội tụ về $f$ trong không gian $L^1$. Như đã lập luận từ đầu, do $\{f_n\}$ là dãy Cauchy, sự hội tụ của một dãy con đảm bảo sự hội tụ của toàn bộ dãy ban đầu về cùng giới hạn $f$.
> Kết luận, $(L^1, \|\cdot\|_1)$ là một không gian Banach.

> [!def] Định nghĩa: Giá của hàm số (Support)
> Cho hàm số $f: \mathbb{R}^N \to \mathbb{R}$. Giá của hàm số $f$, ký hiệu là $\text{supp} f$, được định nghĩa là bao đóng của tập hợp tất cả các điểm trong không gian mà tại đó hàm số nhận giá trị khác không.
> Biểu diễn dưới dạng công thức toán học:
> $$\text{supp} f = \overline{\{x \in \mathbb{R}^N : f(x) \neq 0\}}$$

> [!def] Định nghĩa: Không gian $C_c(\mathbb{R}^N)$
> Không gian $C_c(\mathbb{R}^N)$ là tập hợp bao gồm tất cả các hàm số thực liên tục được xác định trên $\mathbb{R}^N$ sao cho giá của chúng là một tập hợp compact.
> Không gian này được viết dưới dạng tập hợp như sau:
> $$C_c(\mathbb{R}^N) = \{f: \mathbb{R}^N \to \mathbb{R} \mid f \text{ liên tục, } \text{supp} f \text{ compact}\}$$

> [!def] Định nghĩa: Khoảng cách từ một điểm đến tập hợp
> Cho một tập hợp $A \subset \mathbb{R}^N$ và một điểm $x \in \mathbb{R}^N$. Khoảng cách từ điểm $x$ đến tập $A$, ký hiệu là $d(x, A)$, được xác định bằng cận dưới đúng (infimum) của khoảng cách giữa $x$ và mọi điểm $y$ nằm trong $A$.
> Công thức tính khoảng cách này là:
> $$d(x, A) = \inf_{y \in A} \|x - y\|_2$$
> Khi tập $A$ cố định, ánh xạ $x \mapsto d(x, A)$ luôn luôn là một hàm liên tục trên toàn bộ không gian $\mathbb{R}^N$.

> [!thm] Định lý Lusin
> Cho không gian độ đo Lebesgue $(\mathbb{R}^N, \mathfrak{A}, \mu)$ và hàm $f: \mathbb{R}^N \to \mathbb{R}$ đo được.
> 
> Giả sử tồn tại một tập $A \in \mathfrak{A}$ sao cho $\mu(A) < \infty$ và $f(x) = 0$ với mọi $x \in A^c$.
> 
> Khi đó, với mọi $\varepsilon > 0$, tồn tại hàm liên tục có giá compact $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn:
> 
> (1) $\mu(\{x \in \mathbb{R}^N : f_\varepsilon(x) \neq f(x)\}) < \varepsilon$.
> 
> (2) $\sup_{x \in \mathbb{R}^N} |f_\varepsilon(x)| \le \sup_{x \in \mathbb{R}^N} |f(x)|$.

> [!obs] (Sơ đồ chứng minh Định lý Lusin)
> 
> **Phần 1** — xây $f_\varepsilon$ thỏa (1), nới lỏng giả thiết qua 4 bước:
> 
> **Bước 1.1.** $A$ compact, $f \ge 0$, $\sup|f| < 1$: xấp xỉ $f$ qua chuỗi hàm đơn giản $\sum 2^{-k}\chi_{A_k}$, dùng tính chính quy thay $\chi_{A_k}$ bằng hàm liên tục $g_k$ (kẹp giữa compact $K_k$ và mở $V_k$).
> 
> **Bước 1.2.** $A$ compact, $f$ bị chặn tùy ý: chuẩn hóa $h = f/M$, tách $h = h^+ - h^-$, áp dụng Bước 1.1 cho từng phần.
> 
> **Bước 1.3.** $\mu(A) < \infty$, $f$ bị chặn: thu $A$ về compact $K \subset A$ (tính chính quy), áp dụng Bước 1.2 cho $\bar{f} = f\chi_K$.
> 
> **Bước 1.4.** $\mu(A) < \infty$, $f$ đo được tùy ý: cắt phần $f$ không bị chặn ($B_n = {|f| \ge n}$, $\mu(B_n) \to 0$), áp dụng Bước 1.3 cho $\bar{f} = f\chi_{A\setminus B_{n_0}}$.
> 
> **Phần 2** — hiệu chỉnh để thêm (2): chặt cụt $f_\varepsilon$ bằng $\Theta_M = \max(-M,\min(\cdot,M))$, giữ (1) vì ${\bar f_\varepsilon \neq f} \subset {f_\varepsilon \neq f}$.

> [!prf] Chứng minh
> 
> **Phần 1: Tìm $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn (1)**
> 
> Ta xây dựng $f_\varepsilon$ thỏa mãn (1) trong bốn bước, mỗi bước nới lỏng dần điều kiện đặt ra cho $A$ và $f$.
> 
> **Bước 1.1.** _Giả thiết:_ $A$ compact, $f \ge 0$, $\sup|f| < 1$.
> 
> Theo định lý xấp xỉ hàm đo được, tồn tại dãy hàm đơn giản không âm $f_n \uparrow f$ với biểu diễn: 
> $$
> f(x) = \sum_{k=1}^\infty \frac{1}{2^k} \chi_{A_k}(x), \quad A_k \in \mathfrak{A}, A_k \subset A
> $$ 
> Với mỗi $k$, theo tính chính quy của độ đo Lebesgue, ta tìm được compact $K_k$ và mở $V_k$ với $K_k \subset A_k \subset V_k$ và $\mu(V_k \setminus K_k) < \varepsilon / 2^{k+1}$. Định nghĩa: 
> $$
> g_k(x) = \frac{d(x, V_k^c)}{d(x, K_k) + d(x, V_k^c)}
> $$ 
> Hàm $g_k$ liên tục, $g_k \in [0,1]$, bằng $1$ trên $K_k$ và bằng $0$ trên $V_k^c$; do đó $g_k$ và $\chi_{A_k}$ chỉ sai khác nhau trên $V_k \setminus K_k$. Đặt: 
> $$
> f_\varepsilon(x) = \sum_{k=1}^\infty \frac{1}{2^k} g_k(x)
> $$ 
> Chuỗi hội tụ đều theo tiêu chuẩn Weierstrass (chặn bởi $\sum 2^{-k} = 1$), nên $f_\varepsilon$ liên tục. Vì $A$ compact và $g_k = 0$ ngoài $V_k \supset A_k \subset A$, giá của $f_\varepsilon$ compact, tức $f_\varepsilon \in C_c(\mathbb{R}^N)$. Cuối cùng: 
> $$
> {f_\varepsilon \neq f} \subset \bigcup_{k=1}^\infty (V_k \setminus K_k) \implies \mu({f_\varepsilon \neq f}) \le \sum_{k=1}^\infty \frac{\varepsilon}{2^{k+1}} = \frac{\varepsilon}{2} < \varepsilon
> $$
> 
> _Kết luận:_ Tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn (1). $\checkmark$
> 
> **Bước 1.2.** _Giả thiết:_ $A$ compact, $f$ bị chặn tùy ý.
> 
> Đặt $M = \sup|f| < \infty$ (giả sử $M > 0$). Chuẩn hóa $h = f/M$, phân tích $h = h^+ - h^-$ với $h^\pm = \max(\pm h, 0)$. Khi đó $h^\pm \ge 0$, $\sup|h^\pm| \le 1$, và cả hai đều triệt tiêu ngoài $A$ compact. Áp dụng Bước 1.1 cho $h^+$ và $h^-$, mỗi hàm với ngưỡng $\varepsilon/2$: tồn tại $h_\varepsilon^+, h_\varepsilon^- \in C_c(\mathbb{R}^N)$ thỏa mãn $\mu({h_\varepsilon^\pm \neq h^\pm}) < \varepsilon/2$. Đặt $f_\varepsilon = M(h_\varepsilon^+ - h_\varepsilon^-)$. Khi đó $f_\varepsilon \in C_c(\mathbb{R}^N)$ và: $${f_\varepsilon \neq f} \subset {h_\varepsilon^+ \neq h^+} \cup {h_\varepsilon^- \neq h^-} \implies \mu({f_\varepsilon \neq f}) < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.$$
> 
> _Kết luận:_ Tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn (1). $\checkmark$
> 
> **Bước 1.3.** _Giả thiết:_ $A \in \mathfrak{A}$ với $\mu(A) < \infty$, $f$ bị chặn.
> 
> Theo tính chính quy của độ đo Lebesgue, ta tìm được tập compact $K \subset A$ với $\mu(A \setminus K) < \varepsilon/2$. Đặt $\bar{f} = f \cdot \chi_K$; hàm này bị chặn, triệt tiêu ngoài $K$ compact. Áp dụng Bước 1.2 cho $\bar{f}$ với ngưỡng $\varepsilon/2$: tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ với $\mu({f_\varepsilon \neq \bar{f}}) < \varepsilon/2$. Từ bao hàm thức: $${f_\varepsilon \neq f} \subset {f_\varepsilon \neq \bar{f}} \cup (A \setminus K) \implies \mu({f_\varepsilon \neq f}) < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.$$
> 
> _Kết luận:_ Tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn (1). $\checkmark$
> 
> **Bước 1.4.** _Giả thiết:_ $A \in \mathfrak{A}$ với $\mu(A) < \infty$, $f$ đo được tùy ý.
> 
> Xét $B_n = {x \in A : |f(x)| \ge n}$. Vì $f$ hữu hạn $\mu$-hầu khắp nơi, $B_n \downarrow \emptyset \pmod{\mu}$, và $\mu(B_1) \le \mu(A) < \infty$ nên theo tính liên tục từ trên: $\mu(B_n) \to 0$. Chọn $n_0$ sao cho $\mu(B_{n_0}) < \varepsilon/2$. Đặt $\bar{f} = f \cdot \chi_{A \setminus B_{n_0}}$; khi đó $|\bar{f}| < n_0$ (tức $\bar{f}$ bị chặn). Áp dụng Bước 1.3 cho $\bar{f}$ với ngưỡng $\varepsilon/2$: tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ với $\mu({f_\varepsilon \neq \bar{f}}) < \varepsilon/2$. Từ bao hàm thức: 
> $$
> {f_\varepsilon \neq f} \subset {f_\varepsilon \neq \bar{f}} \cup B_{n_0} \implies \mu({f_\varepsilon \neq f}) < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
> $$
> 
> _Kết luận:_ Tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn (1). $\checkmark$
> 
> **Phần 2: Hiệu chỉnh $f_\varepsilon$ để thỏa mãn thêm (2)**
> 
> _Giả thiết:_ $f_\varepsilon \in C_c(\mathbb{R}^N)$ đã thỏa mãn (1) từ Phần 1. Đặt $M = \sup|f|$.
> 
> Nếu $M = \infty$ thì (2) hiển nhiên đúng. Xét $M < \infty$. Định nghĩa hàm chặt cụt: $$\Theta_M(t) = \max\bigl(-M,,\min(t,,M)\bigr),$$ và đặt $\bar{f}_\varepsilon = \Theta_M \circ f_\varepsilon$. Vì $\Theta_M$ liên tục và $\Theta_M(0) = 0$, hàm $\bar{f}_\varepsilon$ vẫn thuộc $C_c(\mathbb{R}^N)$.
> 
> - (2): Theo định nghĩa $\Theta_M$, hiển nhiên $|\bar{f}_\varepsilon(x)| \le M = \sup|f|$ với mọi $x$. $\checkmark$  
> - (1): Tại mọi điểm $x$ mà $f_\varepsilon(x) = f(x)$, do $|f(x)| \le M$, ta có $\Theta_M(f_\varepsilon(x)) = f_\varepsilon(x) = f(x)$, tức $\bar{f}_\varepsilon(x) = f(x)$. Do đó: 
> $$
> {\bar{f}_\varepsilon \neq f} \subset {f_\varepsilon \neq f} \implies \mu({\bar{f}_\varepsilon \neq f}) \le \mu({f_\varepsilon \neq f}) < \varepsilon. \checkmark
> $$     
> 
> **Kết luận:** Hàm $\bar{f}_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa mãn đồng thời (1) và (2). 

# 2. Định lý trù mật

> [!thm] Định lý trù mật của $C_c(\mathbb{R}^N)$ trong $L^1(\mathbb{R}^N)$
> Không gian các hàm liên tục có giá compact $C_c(\mathbb{R}^N)$ là trù mật trong không gian khả tích $L^1(\mathbb{R}^N)$.
> 
> Về mặt topo, bao đóng của $C_c(\mathbb{R}^N)$ theo chuẩn khoảng cách $\|\cdot\|_1$ chính là không gian $L^1(\mathbb{R}^N)$:
> $$\overline{C_c(\mathbb{R}^N)}^{\|\cdot\|_1} = L^1(\mathbb{R}^N)$$
> 
> Phát biểu tương đương dưới dạng xấp xỉ: Với mọi $\varepsilon > 0$ và với mọi hàm $f \in L^1(\mathbb{R}^N)$, luôn luôn tồn tại một hàm $f_\varepsilon \in C_c(\mathbb{R}^N)$ sao cho:
> $$\|f_\varepsilon - f\|_1 < \varepsilon$$

> [!obs] (Sơ đồ chứng minh)
> **Chiến lược chung:** Ta xấp xỉ $f$ qua ba lớp hàm trung gian, mỗi bước nới lỏng một ràng buộc, theo sơ đồ: $$f ;\xrightarrow{\text{chặn giá compact}}; f\chi_{B(0,n_\varepsilon)} ;\xrightarrow{\text{chặt cụt biên độ}}; f_{k_\varepsilon} ;\xrightarrow{\text{ Định lý Lusin}}; \psi_\varepsilon \in C_c(\mathbb{R}^N)$$ Ba mũi tên tương ứng với ba sai số cần kiểm soát, mỗi khoảng cách nhỏ hơn $\varepsilon/3$.

> [!prf] 
>**Bước 1.** Trường hợp $f$ bị chặn và có giá compact
> 
> Giả thiết: Tồn tại $M > 0$ sao cho $|f(x)| \le M$ với mọi $x$, và tồn tại $R > 0$ sao cho $f(x) = 0$ với mọi $x \notin \overline{B}(0,R)$.
> 
> Áp dụng Định lý Lusin cho hàm $f$ trên tập compact $K = \overline{B}(0,R)$ với sai số $\delta = \dfrac{\varepsilon}{2M}$, ta thu được hàm $f_\varepsilon \in C_c(\mathbb{R}^N)$ thỏa hai kết luận:
> 
> $$\text{(i)}\quad \mu\big({f_\varepsilon \neq f}\big) < \frac{\varepsilon}{2M}, \qquad \text{(ii)}\quad \sup_{\mathbb{R}^N} |f_\varepsilon| \le \sup_{\mathbb{R}^N} |f| \le M$$
> 
> Kết luận (i) cho biết $f_\varepsilon$ và $f$ trùng nhau hầu khắp nơi và sai khác trên tập có độ đo nhỏ tùy ý; kết luận (ii) cho biết $f_\varepsilon$ vẫn nằm trong cùng biên độ $M$, đây chính là điều kiện ta cần để đánh giá khoảng cách giữa hai hàm theo chuẩn $L^1$:
> $$\|f_\varepsilon - f\|_1 = \int_{\mathbb{R}^N} |f_\varepsilon(x) - f(x)| d\mu = \int_{\{f_\varepsilon \neq f\}} |f_\varepsilon(x) - f(x)| d\mu$$
> 
> Dùng bất đẳng thức tam giác và thay cận $M$ từ (ii): 
> $$\|f_\varepsilon - f\|_1 \le \int_{\{f_\varepsilon \neq f\}} (|f_\varepsilon(x)| + |f(x)|) d\mu \le \int_{\{f_\varepsilon \neq f\}} 2M d\mu = 2M \mu(\{f_\varepsilon \neq f\})$$
> 
> Thay kết quả độ đo tập sai khác từ (i): 
>  $$\|f_\varepsilon - f\|_1 < 2M \left( \frac{\varepsilon}{2M} \right) = \varepsilon$$
> 
> ✓ Kết quả Bước 1: Với $f$ bị chặn, giá compact, ta tìm được $f_\varepsilon \in C_c(\mathbb{R}^N)$ với $\|f_\varepsilon - f\|_1 < \varepsilon$.
> 
> **Bước 2.** Trường hợp $f \in L^1(\mathbb{R}^N)$, $f \ge 0$ tổng quát
> 
> Hàm $f$ tổng quát có thể vi phạm hai điều kiện ở Bước 1: giá có thể không compact ($x$ chạy ra vô hạn), và $f$ (giá trị) có thể không bị chặn. Ta xử lý lần lượt từng vấn đề, mỗi lần chặn bằng sai số $\varepsilon/3$.
> 
> (2a) Chặn giá - đưa về tập compact
> 
> Xét dãy hàm $|f|\cdot \chi_{B(0,n)^c}$, $n \in \mathbb{N}$. Vì $B(0,n) \uparrow \mathbb{R}^N$ khi $n \to \infty$, ta có: $$|f(x)|\cdot \chi_{B(0,n)^c}(x) \to 0 \quad \text{hầu khắp nơi}, \qquad |f|\cdot\chi_{B(0,n)^c} \le |f| \in L^1(\mathbb{R}^N)$$
> 
> $|f|$ đóng vai trò hàm trội (dominating function) không phụ thuộc $n$, nên áp dụng Định lý Hội tụ Trội (DCT): $$\lim_{n\to\infty} \int_{\mathbb{R}^N} |f|\cdot \chi_{B(0,n)^c}, d\mu = 0$$
> 
> ✓ Kết quả (2a): Tồn tại $n_\varepsilon \in \mathbb{N}$ sao cho: 
> $$
> \| f \cdot \chi_{B(0,n_\varepsilon)^c}\|_1 < \frac{\varepsilon}{3} \quad \Longleftrightarrow \quad \| f - f\cdot\chi_{B(0,n_\varepsilon)} \|_1 < \frac{\varepsilon}{3}
> $$ 
> Hàm $f \cdot \chi_{B(0,n_\varepsilon)}$ có giá compact $\subset \overline{B}(0,n_\varepsilon)$. Vậy vấn đề thứ nhất đã được giải quyết, nhưng hàm này có thể vẫn không bị chặn.
> 
> (2b) Chặt cụt biên độ - đưa về hàm bị chặn
> 
> Xét dãy hàm chặt cụt: $$f_k(x) = \min\big\{ f(x)\cdot\chi_{B(0,n_\varepsilon)}(x),\; k \big\}, \quad k \in \mathbb{N}$$
> 
> Vì $f \ge 0$, dãy $(f_k)$ là dãy không âm, tăng đơn điệu theo $k$ và hội tụ điểm: $$f_k(x) \uparrow f(x)\cdot \chi_{B(0,n_\varepsilon)}(x) \quad \text{khi } k \to \infty$$
> 
> Áp dụng Định lý Hội tụ Đơn điệu (MCT): $$\lim_{k\to\infty} \int_{\mathbb{R}^N} f_k d\mu = \int_{\mathbb{R}^N} f\cdot\chi_{B(0,n_\varepsilon)}, d\mu$$
> 
> Tương đương (do $0 \le f\cdot\chi_{B(0,n_\varepsilon)} - f_k \to 0$ và bị trội bởi $f\cdot\chi_{B(0,n_\varepsilon)} \in L^1$): $$\lim_{k\to\infty} \| f\cdot\chi_{B(0,n_\varepsilon)} - f_k \|_1 = 0$$
> 
> ✓ Kết quả (2b): Tồn tại $k_\varepsilon \in \mathbb{N}$ sao cho: $$\| f\cdot\chi_{B(0,n_\varepsilon)} - f_{k_\varepsilon} \|_1 < \frac{\varepsilon}{3}$$ Hàm $f_{k_\varepsilon}$ có giá compact $\subset \overline{B}(0,n_\varepsilon)$ (vì nhân với $\chi_{B(0,n_\varepsilon)}$) và bị chặn bởi $k_\varepsilon$, đúng hai giả thiết của Bước 1.
> 
> (2c) Áp dụng Bước 1 cho $f_{k_\varepsilon}$
> 
> Vì $f_{k_\varepsilon}$ thỏa giả thiết Bước 1 với $M = k_\varepsilon$, $R = n_\varepsilon$, tồn tại $\psi_\varepsilon \in C_c(\mathbb{R}^N)$ sao cho: $$\| f_{k_\varepsilon} - \psi_\varepsilon \|_1 < \frac{\varepsilon}{3}$$
> 
> Tổng hợp ba sai số bằng bất đẳng thức tam giác (chèn hai hàm trung gian $f\cdot\chi_{B(0,n_\varepsilon)}$ và $f_{k_\varepsilon}$): $$\|f - \psi_\varepsilon\|_1 \le \underbrace{\|f - f\cdot\chi_{B(0,n_\varepsilon)}\|_1}_{< \varepsilon/3 \text{ (2a)}} + \underbrace{\|f\cdot\chi_{B(0,n_\varepsilon)} - f_{k_\varepsilon}\|_1}_{< \varepsilon/3 \text{ (2b)}} + \underbrace{\|f_{k_\varepsilon} - \psi_\varepsilon \|_1}_{< \varepsilon/3 \text{ (2c)}} < \varepsilon$$
> 
> ✓ Kết quả Bước 2: Với $f \in L^1(\mathbb{R}^N)$, $f \ge 0$, tồn tại $\psi_\varepsilon \in C_c(\mathbb{R}^N)$ với ${} \|f - \psi_\varepsilon \|_1 < \varepsilon {}$.
> 
> **Bước 3.** Trường hợp $f \in L^1(\mathbb{R}^N)$ có dấu tùy ý
> 
> Phân tích $f = f^+ - f^-$ với $f^+ = \max(f,0) \ge 0$, $f^- = \max(-f,0) \ge 0$. Vì $f^\pm \le |f|$ và $f \in L^1(\mathbb{R}^N)$, ta có $f^+, f^- \in L^1(\mathbb{R}^N)$, cả hai thỏa giả thiết Bước 2.
> 
> Áp dụng Bước 2 cho $f^+$ và $f^-$, mỗi hàm với sai số $\varepsilon/2$, ta thu được $f_\varepsilon^+, f_\varepsilon^- \in C_c(\mathbb{R}^N)$ sao cho: $$\|f^+ - f_\varepsilon^+ \|_1 < \frac{\varepsilon}{2}, \qquad \|f^- - f_\varepsilon^-\|_1 < \frac{\varepsilon}{2}$$
> 
> Đặt $f_\varepsilon := f_\varepsilon^+ - f_\varepsilon^-$. Vì $C_c(\mathbb{R}^N)$ là không gian vector (đóng với phép trừ, giữ tính liên tục và giá compact), ta có $f_\varepsilon \in C_c(\mathbb{R}^N)$.
> 
> Đánh giá bằng bất đẳng thức tam giác: $$\|f - f_\varepsilon \|_1 = \|(f^+ - f^-) - (f_\varepsilon^+ - f_\varepsilon^-) \|_1 \le \|f^+ - f_\varepsilon^+ \|_1 + \|f^- - f_\varepsilon^- \|_1 < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon$$
> 
> ✓ Kết quả Bước 3: Với $f \in L^1(\mathbb{R}^N)$ tùy ý (có dấu), tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ với ${} \|f - f_\varepsilon\|_1 < \varepsilon {}$.
> 
> **Kết luận:** Với mọi $f \in L^1(\mathbb{R}^N)$ và mọi $\varepsilon > 0$, tồn tại $f_\varepsilon \in C_c(\mathbb{R}^N)$ sao cho ${} \|f - f_\varepsilon\|_1 < \varepsilon {}$. Vậy $C_c(\mathbb{R}^N)$ trù mật trong $L^1(\mathbb{R}^N)$. 
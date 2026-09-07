
> [!def] (Tập affine)
> Cho X là một không gian vectơ, ta ký hiệu $L(x,y), [x,y], (x,y), [x,y)$ lần lượt là đường thẳng đi qua x, y, đoạn thẳng, khoảng mở và nửa khoảng nối hai điểm x và y. Tức là:
> $$
> \begin{align}
> L(x,y) &=  {λx+(1−λ)y \;|\; λ ∈ R}, \\
> [x, y] &=  {λx +(1−λ)y \;|\; λ ∈ [0,1]}, \\
> (x, y) &=  {λx+(1−λ)y \;|\; λ ∈ (0,1)}, \\
> [x, y) &=  {λx+(1−λ)y \;|\; λ ∈ (0,1]}.
> \end{align}
> $$
Một tập $M \subset X$ được gọi là đa tạp affine, hay đơn giản là tập affine, nếu với mọi cặp điểm x,y ∈ M ta có $L(x,y) \subset M$, nghĩa là nếu cứ hai điểm thì mọi đường thẳng qua hai điểm cũng nằm trong tập.

> [!prp] (Tính chất tập affine)
> a) Giao của một họ bất kỳ các đa tạp affine là một đa tạp affine
> 
> b) Đặt $\text{Aff}(A)$ là giao của tất cả các đa tạp affine chứa $A$: 
> $$
> \text{Aff}(A) := \bigcap_{\substack{M \supseteq A \\ M \text{ là đa tạp affine}}} M
> $$ 
> khi đó $\text{Aff}(A) = S$, với $S = \left\{ \sum_{i=1}^m \lambda_i a_i\;\middle\vert{}\; m \ge 1, a_i \in A, \sum_{i=1}^m \lambda_i = 1 \right\}$
> 
> c) $A$ là đa tạp affine $\iff A = \text{Aff}(A)$
> 
> d) $M$ là đa tạp affine $\iff \forall m \in M: M - m \le X$ (tức $M = m + V$ với $V$ là không gian con của $X$). Lúc đó, ta gọi chiều và đối chiều của M chính là chiều và đối chiều của V: $\text{dim} M := \text{dim} V$, $\text{codim} M := \text{codim} V$. Nếu codimM = 1 ta nói M là một siêu phẳng.
> 
> 
> e)  Bây giờ nếu Y cũng là một không gian vectơ, ta ký hiệu $L(X,Y)$ là không gian các ánh xạ tuyến tính từ $X$ vào $Y$. Đặc biệt nếu Y = $\mathbb{R}$, ta đặt $X^\# := L(X,R)$, là không gian các phiếm hàm tuyến tính trên X. Ta có:
> 
>  $$
>  M \subset X \text{là siêu phẳng} \iff \exists f \in X^\# \setminus \{0\}, \;\alpha \in \mathbb{R} \text{ sao cho} M = f^{-1}(\alpha) = \{x \in X \mid f(x) = \alpha\}
> $$
> 
> f) Nếu $\text{codim} M = k \in \mathbb{N}$ thì tồn tại các siêu phẳng $M_1, \dots, M_k$ sao cho $M = \bigcap_{i=1}^k M_i$

> [!prf]
> a)
> Giả sử $\{M_i\}_{i \in I}$ là một họ các đa tạp affine bất kỳ trong không gian vectơ $X$. Đặt $M = \bigcap_{i \in I} M_i$.
> 
> Nếu $M = \emptyset$, theo quy ước tập rỗng là một đa tạp affine. 
> 
> Nếu $M \neq \emptyset$, lấy hai điểm tùy ý $x, y \in M$ và số vô hướng bất kỳ $\lambda \in \mathbb{R}$. Với mọi $i \in I$, vì $x, y \in M$ nên $x, y \in M_i$: 
> $$
> \lambda x + (1 - \lambda)y \in M_i, \quad \forall i \in I
> $$
> Từ đó suy ra $\lambda x + (1 - \lambda)y \in \bigcap_{i \in I} M_i = M$ nên $M$ là một đa tạp affine.
> 
> b)
> **Bước 1: Chứng minh $S \subseteq \text{Aff}(A)$** 
> Lấy $M$ là một tập affine bất kỳ, ta sẽ chỉ ra $S \subseteq M$. Ta sẽ đi chứng minh bổ đề: Nếu $M$ là tập affine thì với mọi $m \ge 1$, $x_1, \dots, x_m \in M$ và các số $\lambda_1, \dots, \lambda_m \in \mathbb{R}$ thỏa mãn $\sum_{i=1}^m \lambda_i = 1$, ta luôn có: 
> $$
> \sum_{i=1}^m \lambda_i x_i \in M
> $$
> Với $m = 1$: $\lambda_1 = 1$, hiển nhiên $1 \cdot x_1 = x_1 \in M$.
> 
> Với $m = 2$: $\lambda_1 + \lambda_2 = 1 \implies \lambda_2 = 1 - \lambda_1$. Biểu thức có dạng $\lambda_1 x_1 + (1 - \lambda_1) x_2$. Theo đúng định nghĩa tập affine, đường thẳng nối hai điểm thuộc $M$ phải nằm trong $M$, nên phần tử này thuộc $M$.
> Giả sử mệnh đề đúng cho $m - 1$ điểm ($m \ge 3$). Xét tổ hợp của $m$ điểm: 
> $$
> x = \sum_{i=1}^m \lambda_i x_i \quad \text{với } \sum_{i=1}^m \lambda_i = 1
> $$
> Vì $m \ge 3$ và $\sum_{i=1}^m \lambda_i = 1$, các hệ số không thể đồng thời bằng $1$. Ta luôn chọn được một hệ số khác $1$, không mất tính tổng quát giả sử $\lambda_m \neq 1$. Khi đó $1 - \lambda_m \neq 0$, ta nhóm lại: 
> $$
> x = (1 - \lambda_m) \underbrace{\left( \sum_{i=1}^{m-1} \frac{\lambda_i}{1 - \lambda_m} x_i \right)}_{y} + \lambda_m x_m
> $$
> Tổng các hệ số bên trong ngoặc là: 
> $$
> \sum_{i=1}^{m-1} \frac{\lambda_i}{1 - \lambda_m} = \frac{1}{1 - \lambda_m} \sum_{i=1}^{m-1} \lambda_i = \frac{1 - \lambda_m}{1 - \lambda_m} = 1
> $$
> Theo giả thiết quy nạp, điểm $y = \sum_{i=1}^{m-1} \frac{\lambda_i}{1 - \lambda_m} x_i \in M$. Khi đó $x = (1 - \lambda_m)y + \lambda_m x_m$ là tổ hợp affine của 2 điểm $y, x_m \in M$. Theo trường hợp $m = 2$, ta có $x \in M$. Vậy bổ đề đã được chứng minh.
> Áp dụng bổ đề: Vì $A \subseteq M$, mọi phần tử $a_i \in A$ đều thuộc $M$. Do đó mọi tổ hợp dạng $\sum_{i=1}^m \lambda_i a_i \in M$, tức $S \subseteq M$.
>
> Lấy giao trên mọi tập affine $M \supseteq A$, ta được: 
> $$
> S \subseteq \bigcap_{\substack{M \supseteq A \\ M \text{ affine}}} M = \text{Aff}(A)
> $$
> **Bước 2: Chứng minh $\text{Aff}(A) \subseteq S$**
> Ta sẽ chỉ ra $S$ là một tập affine chứa $A$. Ta nhận thấy với mỗi $a \in A$, ta chọn $m = 1, a_1 = a, \lambda_1 = 1$. Khi đó $a = 1 \cdot a \in S$. Do đó $A \subseteq S$.
> 
> Ta sẽ đi chứng minh $A$ là tập affine. Lấy hai điểm tùy ý $u, v \in S$ và số vô hướng bất kỳ $\alpha \in \mathbb{R}$. Cần chứng minh $\alpha u + (1 - \alpha) v \in S$.
> Vì $u \in S$, tồn tại $p \in \mathbb{N}^*$, các điểm $x_1, \dots, x_p \in A$ và các số $\beta_1, \dots, \beta_p$ sao cho: 
> $$
> u = \sum_{i=1}^p \beta_i x_i \quad \text{với } \sum_{i=1}^p \beta_i = 1
> $$
> Vì $v \in S$, tồn tại $q \in \mathbb{N}^*$, các điểm $y_1, \dots, y_q \in A$ và các số $\gamma_1, \dots, \gamma_q$ sao cho: 
> $$
> v = \sum_{j=1}^q \gamma_j y_j \quad \text{với } \sum_{j=1}^q \gamma_j = 1
> $$
> Xét điểm: 
> $$
> \alpha u + (1 - \alpha) v = \sum_{i=1}^p (\alpha \beta_i) x_i + \sum_{j=1}^q \big((1 - \alpha)\gamma_j\big) y_j
> $$
> Biểu thức này là một tổ hợp hữu hạn gồm $p + q$ phần tử thuộc $A$. Tổng tất cả các hệ số là:
> $$
> \sum_{i=1}^p \alpha \beta_i + \sum_{j=1}^q (1 - \alpha)\gamma_j = \alpha \underbrace{\left(\sum_{i=1}^p \beta_i\right)}_{=1} + (1 - \alpha)\underbrace{\left(\sum_{j=1}^q \gamma_j\right)}_{=1} = \alpha + (1 - \alpha) = 1
> $$
> Vậy $\alpha u + (1 - \alpha) v$ thỏa mãn đầy đủ tiêu chuẩn của tập $S \implies \alpha u + (1 - \alpha) v \in S$. Suy ra $S$ là một tập affine.
> Vì $S$ là một tập affine chứa $A$, nên $S$ là một trong các tập tham gia vào phép giao định nghĩa $\text{Aff}(A)$:
> $$
> \text{Aff}(A) = \bigcap_{\substack{M \supseteq A \\ M \text{ affine}}} M \subseteq S
> $$
> **Kết luận**: Từ hai chiều bao hàm $S \subseteq \text{Aff}(A)$ và $\text{Aff}(A) \subseteq S$, ta kết luận $\operatorname{Aff}(A) = S$.
> 
> c)
> **Chiều $(\implies)$:** Nếu $A$ là một đa tạp affine, thì $A$ là một phần tử trong họ các đa tạp affine chứa chính nó. Do $\text{Aff}(A)$ là giao của tất cả các đa tạp affine chứa $A$, ta có $\text{Aff}(A) \subseteq A$. Mặt khác hiển nhiên $A \subseteq \text{Aff}(A)$, do đó $A = \text{Aff}(A)$.
> 
> **Chiều $(\impliedby)$:** Vì $\text{Aff}(A)$ luôn là một đa tạp affine (theo tính chất a), nếu $A = \text{Aff}(A)$ thì $A$ hiển nhiên là đa tạp affine.
> 
> d)
> Cố định một điểm $m_0 \in M$ bất kỳ. Đặt $V = M - m_0 = \{x - m_0 \mid x \in M\}$
> **Chiều $(\implies)$:** Giả sử $M$ là đa tạp affine. Ta chứng minh $V$ là không gian con của $X$:
> - **Chứa 0:** $0 = m_{0} - m_{0} \in V$.
> - **Đóng kín với phép nhân vô hướng:** Lấy $v \in V \implies v = x - m_0$ với $x \in M$. Với mọi $k \in \mathbb{R}$: 
> $$
> k v = k(x - m_0) = \big(k x + (1 - k)m_0\big) - m_0
> $$
> Vì $M$ affine nên $k x + (1 - k)m_0 \in M$. Do đó $k v \in M - m_0 = V$. 
> - **Đóng kín với phép cộng:** Lấy $u, v \in V \implies u = x - m_0, v = y - m_0$ ($x, y \in M$). Xét: 
> $$
> u + v = (x - m_0) + (y - m_0) = 2 \left(\frac{1}{2} x + \frac{1}{2} y\right) - 2 m_0
> $$
> Vì $\frac{1}{2} x + \frac{1}{2} y \in M$ (do $M$ affine), nên $w = \frac{1}{2} x + \frac{1}{2} y - m_0 \in V$. Áp dụng tính chất đóng kín với phép nhân vô hướng vừa chứng minh ở trên: $u + v = 2w \in V$.
> 
> Suy ra $V \le X$. Tính chất này độc lập với điểm mốc $m_0 \in M$ được chọn.
> 
> **Chiều $(\impliedby)$:** Giả sử $M = m_0 + V$ với $V \le X$.
> Lấy hai điểm $x, y \in M$ và $\lambda \in \mathbb{R}$. Khi đó $x = m_0 + v_1, y = m_0 + v_2$ với $v_1, v_2 \in V$.
> $$
> \lambda x + (1 - \lambda)y = \lambda (m_0 + v_1) + (1 - \lambda)(m_0 + v_2) = m_0 + \underbrace{\big(\lambda v_1 + (1 - \lambda)v_2\big)}_{\in V \text{ (vì } V \text{ là KG con)}} \in m_0 + V = M
> $$
> Vậy $M$ là đa tạp affine.
> 
> 






$\xi$
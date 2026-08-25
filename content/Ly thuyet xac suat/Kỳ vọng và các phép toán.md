
# 1. Kỳ vọng và các phép toán Push-forward, Pull-back

> [!def] (Kỳ vọng)
> Cho $(\Omega, \mathcal{F}, P)$ là một không gian xác suất. Đối với một biến ngẫu nhiên thực $X: \Omega \to \mathbb{R}$, giá trị kỳ vọng $\mathbb{E}X$ được định nghĩa là tích phân Lebesgue của $X$ trên $\Omega$ theo độ đo $P$:
> 
> $$\mathbb{E}X := \int_{\Omega} X(\omega) P(d\omega)$$

> [!def] (Push-forward Measure & Pull-back Function)
> Cho $(S, \mathcal{S})$ là một không gian đo được và $Y: \Omega \to S$ là một biến ngẫu nhiên (ánh xạ đo được).
> 
> 1. **Push-forward Measure (Độ đo đẩy tiến / Phân phối):** Ánh xạ $Y$ cảm sinh (induces) một độ đo xác suất $\mu = Y_*P$ trên $(S, \mathcal{S})$, ký hiệu và định nghĩa bởi:
> 
>    $$Y_*P(A) := P(Y^{-1}(A)) = P(Y \in A), \quad \forall A \in \mathcal{S}$$
> 
>    Độ đo $\mu = Y_*P$ được gọi là phân phối / luật (law) / độ đo push-forward của $Y$.
> 
> 2. **Pull-back Function (Hàm kéo về):** Cho hàm đo được $g: S \to \mathbb{R}$. Phép toán pull-back của $g$ qua $Y$, ký hiệu là $Y^*g: \Omega \to \mathbb{R}$, định nghĩa hợp thành:
> 
>    $$(Y^*g)(\omega) := (g \circ Y)(\omega) = g(Y(\omega))$$
> 
>    Vì hợp của các hàm đo được là một hàm đo được, $Y^*g = g(Y)$ tạo thành một biến ngẫu nhiên thực trên $\Omega$.

# 2. Định luật LOTUS 

> [!lem] (LOTUS: Law of the Unconscious Statistician)
> Cho biến ngẫu nhiên $Y: \Omega \to S$ có phân phối $\mu = Y_*P$. Nếu $g: S \to \mathbb{R}$ đo được sao cho $\mathbb{E}g(Y)$ được xác định rõ (hoặc $g \ge 0$, hoặc $g \in L^1(S, \mathcal{S}, \mu)$), thì:
> 
> $$\mathbb{E}g(Y) = \int_{\Omega} (Y^*g)(\omega) P(d\omega) = \int_{S} g(y) \mu(dy)$$

> [!prf] (Chứng minh chi tiết LOTUS theo Standard Machine)
> Ta chứng minh đẳng thức tích phân qua các bước xấp xỉ chuẩn của lý thuyết độ đo.
> 
> **Bước 1: Hàm chỉ thị (Indicator Functions)**
> Xét $g = \mathbf{1}_A$ với $A \in \mathcal{S}$ bất kỳ.
> - Vế trái (Tích phân trên $\Omega$ theo pull-back):
>   Nhận thấy $(Y^*\mathbf{1}_A)(\omega) = \mathbf{1}_A(Y(\omega))$. Ta có $Y(\omega) \in A \iff \omega \in Y^{-1}(A)$, do đó $Y^*\mathbf{1}_A = \mathbf{1}_{Y^{-1}(A)}$.
>   
>   $$\int_{\Omega} (Y^*\mathbf{1}_A)(\omega) P(d\omega) = \int_{\Omega} \mathbf{1}_{Y^{-1}(A)}(\omega) P(d\omega) = P(Y^{-1}(A))$$
> 
> - Vế phải (Tích phân trên $S$ theo push-forward):
>   Theo định nghĩa tích phân Lebesgue của hàm chỉ thị và định nghĩa của $\mu = Y_*P$:
>   
>   $$\int_{S} \mathbf{1}_A(y) \mu(dy) = \mu(A) = P(Y^{-1}(A))$$
> 
> Đẳng thức đúng với mọi hàm chỉ thị $g = \mathbf{1}_A$.
> 
> **Bước 2: Hàm đơn giản (Simple Functions)**
> Xét hàm đơn giản không âm $g = \sum_{i=1}^n c_i \mathbf{1}_{A_i}$, với $c_i \ge 0$ và $A_i \in \mathcal{S}$.
> Do tính tuyến tính của phép lấy pull-back $Y^*(\sum c_i g_i) = \sum c_i Y^*g_i$ và tính tuyến tính của tích phân Lebesgue:
> 
> $$\begin{aligned}
> \int_{\Omega} (Y^*g)(\omega) P(d\omega) &= \int_{\Omega} Y^*\left( \sum_{i=1}^n c_i \mathbf{1}_{A_i} \right)(\omega) P(d\omega) \\
> &= \sum_{i=1}^n c_i \int_{\Omega} (Y^*\mathbf{1}_{A_i})(\omega) P(d\omega) \\
> &= \sum_{i=1}^n c_i \int_{S} \mathbf{1}_{A_i}(y) \mu(dy) \quad \text{(áp dụng Bước 1)} \\
> &= \int_{S} \left( \sum_{i=1}^n c_i \mathbf{1}_{A_i}(y) \right) \mu(dy) = \int_{S} g(y) \mu(dy)
> \end{aligned}$$
> 
> **Bước 3: Hàm đo được không âm ($g \ge 0$)**
> Cho $g: S \to [0, \infty]$ đo được bất kỳ. Tồn tại dãy các hàm đơn giản không âm $\{g_n\}_{n=1}^{\infty}$ sao cho $g_n \uparrow g$ điểm-theo-điểm trên $S$.
> Khi đó, dãy pull-back $(Y^*g_n)(\omega) = g_n(Y(\omega))$ cũng tăng đơn điệu tới $(Y^*g)(\omega) = g(Y(\omega))$ trên $\Omega$.
> Áp dụng Định lý Hội tụ Đơn điệu (Monotone Convergence Theorem - MCT) cho cả hai phía:
> 
> $$\int_{\Omega} (Y^*g)(\omega) P(d\omega) = \lim_{n \to \infty} \int_{\Omega} (Y^*g_n)(\omega) P(d\omega) = \lim_{n \to \infty} \int_{S} g_n(y) \mu(dy) = \int_{S} g(y) \mu(dy)$$
> 
> **Bước 4: Hàm khả tích bất kỳ ($g \in L^1(S, \mathcal{S}, \mu)$)**
> Tách $g = g^+ - g^-$, trong đó $g^+ = \max(g, 0)$ và $g^- = \max(-g, 0)$ là các hàm không âm.
> Áp dụng kết quả Bước 3 cho $g^+$ và $g^-$ và dùng tính tuyến tính của tích phân, ta thu được:
> 
> $$\int_{\Omega} (Y^*g)(\omega) P(d\omega) = \int_{S} g(y) \mu(dy)$$
> 
> Chứng minh hoàn tất.

> [!obs]
> Khi $g(y) = y$ và $Y$ nhận giá trị thực, ta có:
> 1. Nếu $Y$ rời rạc với hàm khối lượng xác suất $f(y)$, độ đo đẩy tới là $\mu = \sum_y f(y) \delta_y$, phương trình rút gọn thành:
>    $$\mathbb{E}Y = \sum_{y} y f(y)$$
> 2. Nếu $Y$ liên tục với hàm mật độ $f(y)$ đối với độ đo Lebesgue $m$, tức là $\mu = Y_*P \ll m$ với đạo hàm Radon-Nikodym $\frac{d\mu}{dm} = f$, phương trình rút gọn thành:
>    $$\mathbb{E}Y = \int_{\mathbb{R}} y f(y) dy$$

Các phép toán push-forward $Y_*$ (tác động lên độ đo) và pull-back $Y^*$ (tác động lên hàm) có mối quan hệ đối ngẫu chặt chẽ thông qua phép ghép tích phân.

> [!prp] (Tính chất liên hợp của Pull-back và Push-forward)
> Cho $Y: (\Omega, \mathcal{F}, P) \to (S, \mathcal{S})$ và hàm $g: S \to \mathbb{R}$ đo được không âm ($g \ge 0$) hoặc khả tích theo $Y_*P$. Phép toán pull-back $Y^*$ và push-forward $Y_*$ thỏa mãn tính liên hợp:
> 
> $$\langle Y^*g, P \rangle_{\Omega} = \langle g, Y_*P \rangle_{S}$$
> 
> hay dưới dạng tích phân:
> 
> $$\int_{\Omega} (Y^*g)(\omega) P(d\omega) = \int_{S} g(y) (Y_*P)(dy)$$

> [!prf] 
> Để chứng minh tính chất liên hợp:
> 
> $$\langle Y^*g, P \rangle_{\Omega} = \langle g, Y_*P \rangle_{S}$$
> 
> ta khai triển hai phía của đẳng thức dựa trên các định nghĩa đại số/hình học và kết quả của Định lý LOTUS:
> 
> **1. Khai triển vế trái $\langle Y^*g, P \rangle_{\Omega}$:**
> Theo định nghĩa của cặp ghép đối ngẫu (duality pairing) trên không gian mẫu $\Omega$, tích trong $\langle \cdot, \cdot \rangle_{\Omega}$ giữa một hàm và một độ đo chính là tích phân Lebesgue của hàm đó theo độ đo tương ứng:
> 
> $$\langle Y^*g, P \rangle_{\Omega} := \int_{\Omega} (Y^*g)(\omega) P(d\omega)$$
> 
> Thay định nghĩa của hàm pull-back $(Y^*g)(\omega) = (g \circ Y)(\omega) = g(Y(\omega))$, ta có:
> 
> $$\langle Y^*g, P \rangle_{\Omega} = \int_{\Omega} g(Y(\omega)) P(d\omega)$$
> 
> **2. Khai triển vế phải $\langle g, Y_*P \rangle_{S}$:**
> Tương tự, theo định nghĩa của cặp ghép đối ngẫu trên không gian đích $S$ với độ đo push-forward $\mu = Y_*P$:
> 
> $$\langle g, Y_*P \rangle_{S} := \int_{S} g(y) (Y_*P)(dy) = \int_{S} g(y) \mu(dy)$$
> 
> **3. Thiết lập đẳng thức nhờ LOTUS:**
> Theo Định lý LOTUS (Tính chất 3), với $g \ge 0$ hoặc $g \in L^1(S, \mathcal{S}, Y_*P)$, công thức đổi biến độ đo cho ta:
> 
> $$\int_{\Omega} g(Y(\omega)) P(d\omega) = \int_{S} g(y) \mu(dy)$$
> 
> Tương đương với:
> 
> $$\int_{\Omega} (Y^*g)(\omega) P(d\omega) = \int_{S} g(y) (Y_*P)(dy)$$
> 
> Do đó:
> 
> $$\langle Y^*g, P \rangle_{\Omega} = \langle g, Y_*P \rangle_{S}$$
> 
> Mối quan hệ này khẳng định toán tử pull-back $Y^*$ (trên không gian các hàm) và toán tử push-forward $Y_*$ (trên không gian các độ đo) chính là hai toán tử liên hợp (adjoint operators) của nhau qua tích phân Lebesgue.

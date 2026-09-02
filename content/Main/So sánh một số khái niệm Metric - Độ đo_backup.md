
# Định lý Xấp xỉ Weierstrass

> [!thm] (Định lý Xấp xỉ Weierstrass)
> Cho $f: [a, b] \to \mathbb{R}$ là một hàm liên tục trên đoạn đóng $[a, b]$. 
> Khi đó với mọi $\varepsilon > 0$, tồn tại một đa thức đại số $P(x)$ sao cho:
> $$\|f - P\|_\infty = \sup_{x \in [a, b]} |f(x) - P(x)| < \varepsilon.$$

> [!prf] Chứng minh bằng Đa thức Bernstein
> Không mất tính tổng quát, ta chuẩn hóa đoạn $[a, b]$ về đoạn đơn vị $[0, 1]$ qua phép đổi biến affine $x = a + t(b - a)$ với $t \in [0, 1]$.
> 
> Với mỗi $n \in \mathbb{N}^*$, xét **đa thức Bernstein bậc $n$** của hàm $f$:
> $$B_n(f)(x) = \sum_{k=0}^n f\left(\frac{k}{n}\right) \binom{n}{k} x^k (1 - x)^{n - k}.$$
> Đặt $p_{n, k}(x) = \binom{n}{k} x^k (1 - x)^{n - k}$. Từ khai triển nhị thức Newton cho biểu thức $(x + (1 - x))^n = 1$, ta có các đồng nhất thức cơ bản:
> 1. $\sum_{k=0}^n p_{n, k}(x) = 1$.
> 2. $\sum_{k=0}^n k \, p_{n, k}(x) = n x \implies \sum_{k=0}^n \frac{k}{n} p_{n, k}(x) = x$.
> 3. $\sum_{k=0}^n k(k - 1) \, p_{n, k}(x) = n(n - 1) x^2 \implies \sum_{k=0}^n \left(\frac{k}{n} - x\right)^2 p_{n, k}(x) = \frac{x(1 - x)}{n}$.
> 
> Sử dụng đồng nhất thức (1), ta biểu diễn hiệu sai số tại điểm $x \in [0, 1]$:
> $$f(x) - B_n(f)(x) = \sum_{k=0}^n \left( f(x) - f\left(\frac{k}{n}\right) \right) p_{n, k}(x).$$
> 
> Cho $\varepsilon > 0$. Vì $[0, 1]$ là tập compact, hàm liên tục $f$ là **liên tục đều** trên $[0, 1]$. Tồn tại $\delta > 0$ sao cho với mọi $x, y \in [0, 1]$:
> $$|x - y| < \delta \implies |f(x) - f(y)| < \frac{\varepsilon}{2}.$$
> Mặt khác, $f$ liên tục trên $[0, 1]$ nên bị chặn: tồn tại $M = \sup_{x \in [0, 1]} |f(x)| < \infty$.
> 
> Với mỗi $x \in [0, 1]$, ta phân hoạch tập chỉ số $\{0, 1, \dots, n\}$ thành hai tập:
> $$K_1 = \left\{ k : \left| \frac{k}{n} - x \right| < \delta \right\}, \qquad K_2 = \left\{ k : \left| \frac{k}{n} - x \right| \ge \delta \right\}.$$
> 
> Khi đó:
> $$|f(x) - B_n(f)(x)| \le \sum_{k \in K_1} \left| f(x) - f\left(\frac{k}{n}\right) \right| p_{n, k}(x) + \sum_{k \in K_2} \left( |f(x)| + \left|f\left(\frac{k}{n}\right)\right| \right) p_{n, k}(x).$$
> 
> - **Đánh giá trên $K_1$:** Với $k \in K_1$, do $|\frac{k}{n} - x| < \delta$, ta có:
>   $$\sum_{k \in K_1} \left| f(x) - f\left(\frac{k}{n}\right) \right| p_{n, k}(x) < \frac{\varepsilon}{2} \sum_{k \in K_1} p_{n, k}(x) \le \frac{\varepsilon}{2} \sum_{k=0}^n p_{n, k}(x) = \frac{\varepsilon}{2}.$$
> 
> - **Đánh giá trên $K_2$:** Với $k \in K_2$, ta có $1 \le \frac{1}{\delta^2}\left(\frac{k}{n} - x\right)^2$. Do đó:
>   $$\begin{aligned}
>   \sum_{k \in K_2} \left( |f(x)| + \left|f\left(\frac{k}{n}\right)\right| \right) p_{n, k}(x) &\le 2M \sum_{k \in K_2} p_{n, k}(x) \\
>   &\le \frac{2M}{\delta^2} \sum_{k=0}^n \left(\frac{k}{n} - x\right)^2 p_{n, k}(x) \\
>   &= \frac{2M}{\delta^2} \cdot \frac{x(1 - x)}{n}.
>   \end{aligned}$$
>   Vì $\max_{x \in [0, 1]} x(1 - x) = \frac{1}{4}$, ta thu được:
>   $$\sum_{k \in K_2} 2M \, p_{n, k}(x) \le \frac{M}{2 n \delta^2}.$$
> 
> Chọn $N \in \mathbb{N}^*$ đủ lớn sao cho $N > \frac{M}{\varepsilon \delta^2}$. Khi đó với mọi $n \ge N$ và mọi $x \in [0, 1]$:
> $$|f(x) - B_n(f)(x)| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.$$
> Lấy supremum theo $x \in [0, 1]$, ta có $\sup_{x \in [0, 1]} |f(x) - B_n(f)(x)| \le \varepsilon$. Đa thức $P(x) = B_N(f)(x)$ chính là đa thức cần tìm.

# Định lý Xấp xỉ bằng Hàm Đơn giản

> [!thm] (Định lý Xấp xỉ bằng Hàm Đơn giản)
> Cho $(D, \mathfrak{A}, \mu)$ là một không gian độ đo và $f: D \to [0, \infty]$ là một hàm đo được không âm.
> 1. Tồn tại một dãy các hàm đơn giản đo được $\varphi_n: D \to [0, \infty)$ tăng đơn điệu ($0 \le \varphi_n \le \varphi_{n+1}$) sao cho:
>    $$\lim_{n \to \infty} \varphi_n(x) = f(x), \quad \forall x \in D.$$
> 2. Nếu $f$ bị chặn trên $D$, thì dãy $\{\varphi_n\}$ hội tụ **đều** về $f$ trên $D$.
> 3. Nếu $f \in L^p(D, \mu)$ ($1 \le p < \infty$), thì với mọi $\varepsilon > 0$, tồn tại một hàm đơn giản khả tích $\varphi \in L^p(D, \mu)$ sao cho:
>    $$\|f - \varphi\|_{L^p} = \left( \int_D |f - \varphi|^p \, d\mu \right)^{1/p} < \varepsilon.$$

> [!prf] Chứng minh Xây dựng Cắt tầng Giá trị
> **1. Xây dựng dãy hàm xấp xỉ đơn điệu từng điểm (Phần 1 & 2)**
> 
> Với mỗi số nguyên dương $n \in \mathbb{N}^*$, ta phân hoạch trục giá trị $[0, n)$ thành $n 2^n$ đoạn con có độ dài bằng $\frac{1}{2^n}$, và phần còn lại $[n, \infty)$.
> Với mỗi $k \in \{0, 1, \dots, n 2^n - 1\}$, đặt các tập tạo ảnh:
> $$E_{n, k} = \left\{ x \in D : \frac{k}{2^n} \le f(x) < \frac{k+1}{2^n} \right\} = f^{-1}\left( \left[ \frac{k}{2^n}, \frac{k+1}{2^n} \right) \right),$$
> và tập phần dư ở vô cực:
> $$F_n = \{ x \in D : f(x) \ge n \} = f^{-1}([n, \infty)).$$
> 
> Do $f$ là hàm đo được, các tập $E_{n, k}$ và $F_n$ đều thuộc $\sigma$-đại số $\mathfrak{A}$. Ta định nghĩa hàm đơn giản $\varphi_n$ như sau:
> $$\varphi_n(x) = \sum_{k=0}^{n 2^n - 1} \frac{k}{2^n} \mathbf{1}_{E_{n, k}}(x) + n \mathbf{1}_{F_n}(x).$$
> 
> - *Tính tăng đơn điệu ($\varphi_n \le \varphi_{n+1}$):* 
>   Khi chuyển từ bước $n$ sang bước $n+1$, mỗi dải giá trị $[\frac{k}{2^n}, \frac{k+1}{2^n})$ được chẻ đôi thành hai dải con $[\frac{2k}{2^{n+1}}, \frac{2k+1}{2^{n+1}})$ và $[\frac{2k+1}{2^{n+1}}, \frac{2k+2}{2^{n+1}})$. 
>   - Trên nửa đầu: $\varphi_{n+1}(x) = \frac{2k}{2^{n+1}} = \frac{k}{2^n} = \varphi_n(x)$.
>   - Trên nửa sau: $\varphi_{n+1}(x) = \frac{2k+1}{2^{n+1}} > \frac{k}{2^n} = \varphi_n(x)$.
>   - Trên tập $F_n$: Nếu $f(x) \ge n+1$, $\varphi_{n+1}(x) = n+1 > n = \varphi_n(x)$; nếu $n \le f(x) < n+1$, $\varphi_{n+1}(x) \ge n = \varphi_n(x)$.
>   Do đó $0 \le \varphi_n(x) \le \varphi_{n+1}(x)$ với mọi $x \in D$.
> 
> - *Tính hội tụ từng điểm:*
>   Lấy $x \in D$ bất kỳ.
>   - Nếu $f(x) < \infty$: Chọn $N > f(x)$. Khi đó với mọi $n \ge N$, $x \notin F_n$, tức là $x$ rơi vào một tập $E_{n, k}$. Theo định nghĩa:
>     $$0 \le f(x) - \varphi_n(x) < \frac{1}{2^n}.$$
>     Cho $n \to \infty$, ta có $\lim_{n \to \infty} \varphi_n(x) = f(x)$.
>   - Nếu $f(x) = \infty$: Khi đó $x \in F_n$ với mọi $n \ge 1 \implies \varphi_n(x) = n \to \infty = f(x)$.
> 
> - *Tính hội tụ đều khi $f$ bị chặn:*
>   Nếu $\sup_{x \in D} f(x) \le M < \infty$, thì với mọi $n > M$, tập $F_n = \emptyset$. Khi đó:
>   $$\sup_{x \in D} |f(x) - \varphi_n(x)| < \frac{1}{2^n} \xrightarrow{n \to \infty} 0.$$
> 
> 
> **2. Tính trù mật của Hàm Đơn giản trong $L^p(D, \mu)$ (Phần 3)**
> 
> Xét $f \in L^p(D, \mu)$ với $1 \le p < \infty$. Tách $f = f^+ - f^-$ với $f^+, f^- \ge 0$ và $f^+, f^- \in L^p(D, \mu)$. Ta chỉ cần chứng minh cho trường hợp $f \ge 0$.
> 
> Áp dụng dãy hàm đơn giản $\varphi_n$ đã xây dựng ở trên cho $f \ge 0$, ta có:
> $$0 \le \varphi_n(x) \nearrow f(x) \quad \text{hầu khắp nơi trên } D.$$
> Suy ra $|f(x) - \varphi_n(x)|^p \to 0$ h.k.n và:
> $$|f(x) - \varphi_n(x)|^p \le |f(x)|^p \in L^1(D, \mu), \quad \forall n \ge 1.$$
> 
> Áp dụng Định lý Hội tụ Bị chặn Lebesgue (DCT):
> $$\lim_{n \to \infty} \|f - \varphi_n\|_{L^p}^p = \lim_{n \to \infty} \int_D |f - \varphi_n|^p \, d\mu = \int_D \lim_{n \to \infty} |f - \varphi_n|^p \, d\mu = 0.$$
> 
> Với $\varepsilon > 0$, tồn tại $N \in \mathbb{N}^*$ đủ lớn sao cho $\|f - \varphi_N\|_{L^p} < \varepsilon$. Vì $\varphi_N \le f \in L^p$, nên $\varphi_N \in L^p(D, \mu)$. Ta chọn được hàm đơn giản $\varphi = \varphi_N$ thỏa mãn yêu cầu.

> [!thm] (Định lý Lusin: Hàm đo được "gần như" là Hàm liên tục)
> Cho $f: [a, b] \to \mathbb{R}$ là một hàm đo được Lebesgue.
> Khi đó với mọi $\varepsilon > 0$, tồn tại một tập đóng $F \subset [a, b]$ sao cho:
> 1. $\mu_L([a, b] \setminus F) < \varepsilon$.
> 2. Hàm thu hẹp $f|_F: F \to \mathbb{R}$ là một **hàm liên tục** trên $F$.

# Hàm đơn lẻ

> [!def] (Không gian Metric: Liên tục đều)
> Cho không gian metric $(X, d)$. Hàm $f: X \to \mathbb{R}$ được gọi là liên tục đều nếu:
> $$\forall \varepsilon > 0, \, \exists \delta > 0 : \forall x, y \in X, \ d(x, y) < \delta \implies |f(x) - f(y)| < \varepsilon.$$

> [!def] (Không gian Độ đo: Liên tục tuyệt đối)
> Cho không gian độ đo $(D, \mathfrak{A}, \mu)$ và $f \in L^1(D, \mu)$. Tích phân của $f$ được gọi là liên tục tuyệt đối đối với độ đo $\mu$ nếu:
> $$\forall \varepsilon > 0, \, \exists \delta > 0 : \forall A \in \mathfrak{A}, \ \mu(A) < \delta \implies \int_A |f| \, d\mu < \varepsilon.$$

> [!prf] Tính Liên tục Tuyệt đối của Hàm Khả tích
> Cho $f \in L^1(D, \mu)$ và $\varepsilon > 0$. Với mỗi $n \in \mathbb{N}^*$, xét hàm cắt cụt:
> $$f_n(x) = \min(|f(x)|, n) = |f(x)| \mathbf{1}_{\{|f| < n\}} + n \mathbf{1}_{\{|f| \ge n\}}.$$
> Dãy $\{f_n\}$ gồm các hàm đo được, không âm, thỏa mãn $0 \le f_n \le f_{n+1}$ và $f_n(x) \nearrow |f(x)|$ với mọi $x \in D$. Theo Định lý Hội tụ Đơn điệu:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D |f| \, d\mu.$$
> Vì $\int_D |f| \, d\mu < \infty$, ta có:
> $$\lim_{n \to \infty} \int_D (|f| - f_n) \, d\mu = \int_D |f| \, d\mu - \lim_{n \to \infty} \int_D f_n \, d\mu = 0.$$
> Tồn tại $N \in \mathbb{N}^*$ đủ lớn sao cho:
> $$\int_D (|f| - f_N) \, d\mu < \frac{\varepsilon}{2}.$$
> Chọn $\delta = \frac{\varepsilon}{2N} > 0$. Với mọi tập đo được $A \in \mathfrak{A}$ có $\mu(A) < \delta$:
> $$\begin{aligned}
> \int_A |f| \, d\mu &= \int_A (|f| - f_N) \, d\mu + \int_A f_N \, d\mu \\
> &\le \int_D (|f| - f_N) \, d\mu + N \cdot \mu(A) \\
> &< \frac{\varepsilon}{2} + N \cdot \left(\frac{\varepsilon}{2N}\right) = \varepsilon.
> \end{aligned}$$

# Họ hàm

> [!def] (Không gian Metric: Đồng liên tục)
> Cho không gian metric $(X, d)$ và họ hàm $\mathcal{F} \subset C(X, \mathbb{R})$. Họ $\mathcal{F}$ được gọi là đồng liên tục nếu:
> $$\forall \varepsilon > 0, \, \exists \delta > 0 : \forall f \in \mathcal{F}, \, \forall x, y \in X, \ d(x, y) < \delta \implies |f(x) - f(y)| < \varepsilon.$$

> [!def] (Không gian Độ đo: Liên tục tuyệt đối đều)
> Cho không gian độ đo $(D, \mathfrak{A}, \mu)$ và họ hàm $\Lambda \subset L^1(D, \mu)$. Họ $\Lambda$ được gọi là liên tục tuyệt đối đều (UAC) nếu:
> $$\forall \varepsilon > 0, \, \exists \delta > 0 : \forall A \in \mathfrak{A}, \ \mu(A) < \delta \implies \sup_{f \in \Lambda} \int_A |f| \, d\mu < \varepsilon.$$

# Định lý Arzelà–Ascoli

> [!def] (Tập Tiền Compact trong Không gian Metric)
> Cho không gian metric $(X, d)$ và tập con $A \subseteq X$.
> 1. Với $\varepsilon > 0$, tập hữu hạn $\{x_1, \dots, x_n\} \subset X$ là một **lưới $\varepsilon$ hữu hạn** của $A$ nếu $A \subseteq \bigcup_{i=1}^n B(x_i, \varepsilon)$.
> 2. Tập $A$ được gọi là **hoàn toàn bị chặn** nếu với mọi $\varepsilon > 0$, $A$ đều có một lưới $\varepsilon$ hữu hạn.
> 3. Tập $A$ được gọi là **tiền compact** nếu bao đóng $\overline{A}$ là một tập compact trong $X$. Khi $X$ đầy đủ, $A$ tiền compact khi và chỉ khi $A$ hoàn toàn bị chặn.

> [!thm] (Định lý Arzelà–Ascoli)
> Cho $(K, d)$ là không gian metric compact và $C(K) = (C(K, \mathbb{R}), \|\cdot\|_\infty)$ là không gian Banach với chuẩn đều $\|f\|_\infty = \sup_{x \in K} |f(x)|$.
> Một tập con $\mathcal{F} \subset C(K)$ là **tiền compact** trong $C(K)$ khi và chỉ khi:
> 4. $\mathcal{F}$ bị chặn đều từng điểm: $\forall x \in K, \, \sup_{f \in \mathcal{F}} |f(x)| < \infty$.
> 5. $\mathcal{F}$ đồng liên tục trên $K$.

> [!prf] Chứng minh Định lý Arzelà–Ascoli
> **1. Chiều thuận ($\implies$):** Giả sử $\mathcal{F}$ tiền compact trong $C(K)$.
> - *Bị chặn đều:* Ứng với $\varepsilon = 1$, tồn tại lưới $1$-hữu hạn $\{f_1, \dots, f_m\} \subset C(K)$ của $\mathcal{F}$. Đặt $M = \max_{1 \le j \le m} \|f_j\|_\infty < \infty$. Với mọi $f \in \mathcal{F}$, tồn tại $j$ sao cho $\|f - f_j\|_\infty < 1$, suy ra $\|f\|_\infty \le \|f - f_j\|_\infty + \|f_j\|_\infty < 1 + M$. Do đó $\sup_{f \in \mathcal{F}} \|f\|_\infty < \infty$.
> - *Đồng liên tục:* Cho $\varepsilon > 0$. Lấy lưới $\frac{\varepsilon}{3}$-hữu hạn $\{f_1, \dots, f_m\} \subset C(K)$ của $\mathcal{F}$. Do $K$ compact, mỗi $f_j$ liên tục đều: tồn tại $\delta_j > 0$ sao cho $d(x, y) < \delta_j \implies |f_j(x) - f_j(y)| < \frac{\varepsilon}{3}$. Đặt $\delta = \min_{1 \le j \le m} \delta_j > 0$. Với mọi $f \in \mathcal{F}$ và $d(x, y) < \delta$, chọn $f_j$ thỏa mãn $\|f - f_j\|_\infty < \frac{\varepsilon}{3}$:
>   $$|f(x) - f(y)| \le |f(x) - f_j(x)| + |f_j(x) - f_j(y)| + |f_j(y) - f(y)| < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon.$$
> 
> **2. Chiều nghịch ($\impliedby$):** Giả sử $\mathcal{F}$ bị chặn đều từng điểm và đồng liên tục. Lấy tùy ý một dãy $\{f_n\} \subset \mathcal{F}$.
> - *Trích dãy con hội tụ trên tập trù mật:* Vì $K$ compact nên $K$ khả ly, tồn tại tập con đếm được trù mật $Q = \{x_1, x_2, \dots\} \subset K$. Dãy số $\{f_n(x_1)\}$ bị chặn trong $\mathbb{R}$ nên trích được dãy con $\{f_{1, n}\}$ hội tụ tại $x_1$. Bằng phương pháp quy nạp và trích dãy con đường chéo Cantor, dãy $g_n = f_{n, n}$ là dãy con của $\{f_n\}$ và hội tụ từng điểm tại mọi điểm $x \in Q$.
> - *Nâng cấp lên hội tụ đều:* Cho $\varepsilon > 0$. Do tính đồng liên tục, tồn tại $\delta > 0$ sao cho với mọi $f \in \mathcal{F}$ và $d(x, y) < \delta \implies |f(x) - f(y)| < \frac{\varepsilon}{3}$. Họ $\{B(x, \delta)\}_{x \in K}$ phủ compact $K$, nên tồn tại hữu hạn điểm $\{z_1, \dots, z_p\} \subset Q$ sao cho $K \subseteq \bigcup_{j=1}^p B(z_j, \delta)$. Do $\{g_n\}$ hội tụ tại từng điểm $z_j$, tồn tại $N \in \mathbb{N}^*$ sao cho với mọi $n, m \ge N$:
>   $$\max_{1 \le j \le p} |g_n(z_j) - g_m(z_j)| < \frac{\varepsilon}{3}.$$
>   Với mỗi $x \in K$, chọn $z_j$ sao cho $d(x, z_j) < \delta$. Khi đó với mọi $n, m \ge N$:
>   $$|g_n(x) - g_m(x)| \le |g_n(x) - g_n(z_j)| + |g_n(z_j) - g_m(z_j)| + |g_m(z_j) - g_m(x)| < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon.$$
>   Suy ra $\sup_{x \in K} |g_n(x) - g_m(x)| \le \varepsilon$. Dãy $\{g_n\}$ là dãy Cauchy trong $C(K)$, do đó hội tụ đều về một hàm $g \in C(K)$.

# Định lý Dunford–Pettis

> [!def] (Hội tụ Yếu và Compact Yếu trong $L^1$)
> Cho không gian độ đo $(D, \mathfrak{A}, \mu)$ và họ hàm $\Lambda \subset L^1(D, \mu)$.
> 1. Dãy $\{f_n\} \subset L^1$ **hội tụ yếu** về $f \in L^1$ ($f_n \rightharpoonup f$) nếu với mọi $\phi \in L^\infty(D, \mu)$:
>    $$\lim_{n \to \infty} \int_D f_n \phi \, d\mu = \int_D f \phi \, d\mu.$$
> 2. Tập $\Lambda$ là **compact yếu tương đối** trong $L^1$ nếu mọi dãy $\{f_n\} \subset \Lambda$ đều trích được một dãy con $\{f_{n_k}\}$ hội tụ yếu về một phần tử $f \in L^1(D, \mu)$.

> [!thm] (Định lý Dunford–Pettis)
> Cho $(D, \mathfrak{A}, \mu)$ là không gian độ đo hữu hạn ($\mu(D) < \infty$) và $\Lambda \subset L^1(D, \mu)$.
> Tập $\Lambda$ là **compact yếu tương đối trong $L^1(D, \mu)$** khi và chỉ khi họ hàm $\Lambda$ là **Khả tích đều (UI)**, tức là:
> $\lim_{M \to \infty} \sup_{f \in \Lambda} \int_{\{|f| \ge M\}} |f| \, d\mu = 0$ (hay $\Lambda \text{ thỏa mãn tính Liên tục tuyệt đối đều (UAC)}.$)

> [!prf] Chứng minh Định lý Dunford–Pettis
> **1. Chiều thuận ($\implies$):** Giả sử $\Lambda$ compact yếu tương đối trong $L^1$.
> 
> Giả sử phản chứng $\Lambda$ không thỏa UAC. Tồn tại $\varepsilon_0 > 0$, dãy hàm $\{f_n\} \subset \Lambda$ và dãy tập $\{A_n\} \subset \mathfrak{A}$ thỏa mãn $\mu(A_n) \le 2^{-n}$ nhưng $\int_{A_n} |f_n| \, d\mu \ge \varepsilon_0$ với mọi $n \ge 1$.
> 
> Do $\Lambda$ compact yếu tương đối, trích được dãy con $f_{n_k} \rightharpoonup f \in L^1$. Đặt $B_k = \bigcup_{j=k}^\infty A_{n_j}$. Khi đó $\mu(B_k) \le 2^{-(k-1)} \to 0$. Đặt $g_k = \operatorname{sgn}(f_{n_k}) \mathbf{1}_{B_k} \in L^\infty$, ta có:
> $$\int_{B_k} |f_{n_k}| \, d\mu = \int_D (f_{n_k} - f) g_k \, d\mu + \int_{B_k} f g_k \, d\mu.$$
> 
> Vì $f \in L^1$ và $\mu(B_k) \to 0$, tích phân $\int_{B_k} |f| \, d\mu \to 0$. Do $f_{n_k} \rightharpoonup f$, số hạng $\int_D (f_{n_k} - f) g_k \, d\mu \to 0$. Suy ra $\lim_{k \to \infty} \int_{B_k} |f_{n_k}| \, d\mu = 0$. Điều này mâu thuẫn với $\int_{B_k} |f_{n_k}| \, d\mu \ge \int_{A_{n_k}} |f_{n_k}| \, d\mu \ge \varepsilon_0 > 0$. Vậy $\Lambda$ phải là họ UI.
> 
> **2. Chiều nghịch ($\impliedby$):** Giả sử $\Lambda$ là họ UI. Lấy một dãy bất kỳ $\{f_n\} \subset \Lambda$.
> - *Cắt cụt và trích dãy con trong $L^2$:* Với mỗi $M \in \mathbb{N}^*$, xét $f_n^{(M)} = \max(-M, \min(f_n, M))$. Vì $\mu(D) < \infty$, dãy $\{f_n^{(M)}\}_n$ bị chặn trong không gian Hilbert $L^2(D, \mu)$ bởi hằng số $M \sqrt{\mu(D)}$. Do hình cầu đóng trong $L^2$ là compact yếu, kết hợp phương pháp đường chéo Cantor theo $M \in \mathbb{N}^*$, trích được dãy con $\{h_n\} \subseteq \{f_n\}$ sao cho với mọi $M \ge 1$, $h_n^{(M)} \rightharpoonup g^{(M)}$ trong $L^2$ (và do đó trong $L^1$) khi $n \to \infty$.
> - *Hội tụ của dãy xấp xỉ:* Với $M' > M \ge 1$:
>   $$\|g^{(M')} - g^{(M)}\|_{L^1} \le \liminf_{n \to \infty} \|h_n^{(M')} - h_n^{(M)}\|_{L^1} \le \sup_{n \ge 1} \int_{\{|h_n| \ge M\}} |h_n| \, d\mu.$$
>   Do $\{h_n\} \subset \Lambda$ là họ UI, vế phải tiến về $0$ khi $M \to \infty$. Dãy $\{g^{(M)}\}$ là dãy Cauchy trong $L^1(D, \mu)$, do đó tồn tại $f \in L^1(D, \mu)$ sao cho $\|g^{(M)} - f\|_{L^1} \to 0$.
> - *Kiểm tra hội tụ yếu $h_n \rightharpoonup f$:* Cho $\phi \in L^\infty(D, \mu)$ với $\|\phi\|_\infty \le 1$ và $\varepsilon > 0$. Chọn $M$ đủ lớn sao cho $\sup_{n} \int_{\{|h_n| \ge M\}} |h_n| \, d\mu < \frac{\varepsilon}{3}$ và $\|g^{(M)} - f\|_{L^1} < \frac{\varepsilon}{3}$. Chọn $N \in \mathbb{N}^*$ sao cho với mọi $n \ge N$, $|\int_D (h_n^{(M)} - g^{(M)}) \phi \, d\mu| < \frac{\varepsilon}{3}$. Khi đó với mọi $n \ge N$:
>   $$\left| \int_D (h_n - f) \phi \, d\mu \right| \le \int_{\{|h_n| \ge M\}} |h_n| \, d\mu + \left| \int_D (h_n^{(M)} - g^{(M)}) \phi \, d\mu \right| + \|g^{(M)} - f\|_{L^1} < \varepsilon.$$
>   Suy ra $h_n \rightharpoonup f$ trong $L^1$. Vậy $\Lambda$ là tập compact yếu tương đối.


$\xi$
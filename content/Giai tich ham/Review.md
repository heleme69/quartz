

## Phần lý thuyết nền tảng

> [!thm] Bất đẳng thức Cauchy–Schwarz
> Cho $H$ là không gian tiền Hilbert (có tích vô hướng $\langle \cdot,\cdot\rangle$), với mọi $x, y \in H$ ta có
> $$|\langle x, y\rangle| \le \|x\| \|y\|,$$
> và đẳng thức xảy ra khi và chỉ khi $x, y$ tỉ lệ tuyến tính với nhau.

> [!thm] Định lý Hahn–Banach (dạng giải tích, trường thực)
> Cho $X$ là không gian véctơ thực, $p: X \to \mathbb{R}$ là một phiếm hàm dưới tuyến tính (sublinear), nghĩa là $p(x+y) \le p(x) + p(y)$ và $p(tx) = tp(x)$ với mọi $t \ge 0$. Cho $M \subseteq X$ là không gian con và $f: M \to \mathbb{R}$ là phiếm hàm tuyến tính thỏa $f(x) \le p(x)$ với mọi $x \in M$. Khi đó tồn tại phiếm hàm tuyến tính $F: X \to \mathbb{R}$ sao cho $F|_M = f$ và $F(x) \le p(x)$ với mọi $x \in X$.

> [!cor] Hệ quả 1 — Mở rộng bảo toàn chuẩn
> Cho $X$ là không gian định chuẩn, $M \subseteq X$ là không gian con, và $f \in M^*$. Khi đó tồn tại $F \in X^*$ sao cho $F|_M = f$ và $\|F\|_{X^*} = \|f\|_{M^*}$.
>
> *Chứng minh.* Áp dụng định lý Hahn–Banach với $p(x) = \|f\|_{M^*} \|x\|$ (đây là phiếm hàm dưới tuyến tính vì là một chuẩn nhân hằng số dương), ta được $F$ tuyến tính trên $X$ với $F|_M = f$ và $F(x) \le \|f\| \|x\|$ với mọi $x$. Áp dụng bất đẳng thức này cho cả $x$ và $-x$ ta được $|F(x)| \le \|f\| \|x\|$, suy ra $\|F\| \le \|f\|$. Mặt khác vì $F$ mở rộng $f$ nên $\|F\| \ge \|f\|$ (lấy sup trên tập nhỏ hơn $M$). Vậy $\|F\| = \|f\|$. 

> [!cor] Hệ quả 2 — Phiếm hàm chuẩn hóa (norming functional)
> Cho $X$ là không gian định chuẩn và $x_0 \in X$, $x_0 \ne 0$. Khi đó tồn tại $f \in X^*$ sao cho $\|f\| = 1$ và $f(x_0) = \|x_0\|$.
>
> *Chứng minh.* Xét $M = \langle x_0 \rangle$ và $g: M \to \mathbb{R}$ xác định bởi $g(tx_0) = t\|x_0\|$. Đây là phiếm hàm tuyến tính trên $M$ với $\|g\|_{M^*} = 1$ (vì $|g(tx_0)| = |t| \|x_0\| = \|tx_0\|$). Áp dụng Hệ quả 1, mở rộng $g$ thành $f \in X^*$ với $\|f\| = 1$ và $f(x_0) = g(x_0) = \|x_0\|$. 

> [!cor] Hệ quả 3 — Tách điểm khỏi không gian con đóng
> Cho $X$ là không gian định chuẩn, $M \subsetneq X$ là không gian con đóng, và $a \in X \setminus M$ với $d = \operatorname{dist}(a, M) > 0$. Khi đó tồn tại $f \in X^*$ sao cho $f(a) = 1$, $f|_M = 0$, và $\|f\| \le \dfrac{1}{d}$.
>
> (Đây chính là nội dung được yêu cầu chứng minh trực tiếp ở Câu 8, nên phép chứng minh chi tiết được trình bày trong lời giải câu đó.)

> [!def] Cơ sở trực chuẩn (ONB) và các hệ quả
> Cho $H$ là không gian Hilbert và $(e_n)_{n \in \mathbb{Z}^+}$ là một hệ trực chuẩn, nghĩa là $\langle e_n, e_m \rangle = \delta_{nm}$. Hệ này được gọi là **cơ sở trực chuẩn** (đầy đủ) nếu bao đóng tuyến tính của $\{e_n\}$ trùng với $H$, tương đương với điều kiện: nếu $\langle x, e_n \rangle = 0$ với mọi $n$ thì $x = 0$.

> [!thm] Bất đẳng thức Bessel và đẳng thức Parseval
> Cho $(e_n)_{n \in \mathbb{Z}^+}$ là hệ trực chuẩn trong không gian Hilbert $H$. Với mọi $x \in H$:
> $$\sum_{n=1}^\infty |\langle x, e_n \rangle|^2 \le \|x\|^2 \quad \text{(bất đẳng thức Bessel)}.$$
> Nếu $(e_n)$ là cơ sở trực chuẩn (đầy đủ), đẳng thức xảy ra:
> $$\sum_{n=1}^\infty |\langle x, e_n \rangle|^2 = \|x\|^2 \quad \text{(đẳng thức Parseval)},$$
> và hơn nữa $x = \sum_{n=1}^\infty \langle x, e_n\rangle e_n$ (chuỗi hội tụ theo chuẩn của $H$).

## Câu 1

> [!prob] Câu 1
> Đặt $X$ là không gian các hàm liên tục trên $[0,1]$ với chuẩn sup, và cho ánh xạ $T: X \to X$ xác định bởi $(Tf)(x) = \int_0^x f(t)\, dt$.
> (a) Chứng tỏ $T$ được định nghĩa tốt. (b) Chứng tỏ $T$ tuyến tính liên tục. (c) Tìm $\|T\|$. (d) Tìm $\|T^n\|$ với mỗi $n \in \mathbb{Z}^+$.

> [!prf] Lời giải
> **(a) Định nghĩa tốt.** Với $f \in X$ liên tục trên $[0,1]$ compact, $f$ bị chặn: đặt $M = \|f\|_\infty$. Với $x, y \in [0,1]$, giả sử $x > y$,
> $$|(Tf)(x) - (Tf)(y)| = \left|\int_y^x f(t)\,dt\right| \le M|x-y|.$$
> Vậy $Tf$ Lipschitz trên $[0,1]$, do đó liên tục, nghĩa là $Tf \in X$. $T$ được định nghĩa tốt.
>
> **(b) Tuyến tính liên tục.** Tính tuyến tính của $T$ suy trực tiếp từ tính tuyến tính của tích phân. Về tính liên tục (bị chặn), với mọi $f \in X$ và $x \in [0,1]$:
> $$|(Tf)(x)| = \left|\int_0^x f(t)\,dt\right| \le \int_0^x |f(t)|\,dt \le x \|f\|_\infty \le \|f\|_\infty.$$
> Lấy sup theo $x$, ta được $\|Tf\|_\infty \le \|f\|_\infty$, nên $T$ bị chặn, do đó liên tục.
>
> **(c) Tìm $\|T\|$.** Từ bất đẳng thức trên, $\|T\| \le 1$. Xét $f \equiv 1 \in X$, $\|f\|_\infty = 1$. Khi đó $(Tf)(x) = x$, nên $\|Tf\|_\infty = \sup_{x \in [0,1]} x = 1$. Vậy tỉ số $\|Tf\|/\|f\| = 1$ đạt được, suy ra
> $$\|T\| = 1.$$
>
> **(d) Tìm $\|T^n\|$.** Ta chứng minh bằng quy nạp công thức
> $$(T^n f)(x) = \int_0^x \frac{(x-t)^{n-1}}{(n-1)!} f(t)\, dt.$$
> Với $n=1$ đây chính là định nghĩa của $T$. Giả sử đúng với $n$, khi đó
> $$(T^{n+1}f)(x) = \int_0^x (T^nf)(s)\,ds = \int_0^x \int_0^s \frac{(s-t)^{n-1}}{(n-1)!}f(t)\,dt\,ds.$$
> Đổi thứ tự lấy tích phân (miền $0 \le t \le s \le x$):
> $$= \int_0^x f(t) \left(\int_t^x \frac{(s-t)^{n-1}}{(n-1)!}\,ds\right) dt = \int_0^x f(t) \frac{(x-t)^n}{n!}\,dt,$$
> đúng như công thức với $n+1$. Vậy công thức được chứng minh.
>
> Từ đó, với $\|f\|_\infty \le 1$:
> $$|(T^nf)(x)| \le \int_0^x \frac{(x-t)^{n-1}}{(n-1)!}\,dt = \frac{x^n}{n!} \le \frac{1}{n!},$$
> nên $\|T^n\| \le \dfrac{1}{n!}$.
>
> Ngược lại, lấy $f \equiv 1$: theo công thức, $(T^n f)(x) = \dfrac{x^n}{n!}$ (kiểm tra trực tiếp bằng quy nạp: $T(1)(x) = x$, $T^2(1)(x) = x^2/2$, v.v.), và $\sup_x (T^n f)(x) = \dfrac{1}{n!}$ tại $x=1$. Vậy cận trên đạt được, và
> $$\|T^n\| = \frac{1}{n!}.$$

## Câu 2

> [!prob] Câu 2
> Đặt $X$ là không gian các hàm liên tục trên $[0,1]$ với chuẩn $\|f\|_1 = \int_0^1 |f(x)|\,dx$, và cho ánh xạ $T: X \to X$ xác định bởi $(Tf)(x) = \int_0^x f(t)\, dt$.
> (a) Chứng tỏ $T$ được định nghĩa tốt. (b) Chứng tỏ $T$ tuyến tính liên tục. (c) Tìm $\|T\|$.

> [!prf] Lời giải
> **(a) Định nghĩa tốt.** Lập luận giống hệt Câu 1(a): với $f$ liên tục, $Tf$ Lipschitz nên liên tục, do đó $Tf \in X$ (bản chất tập hợp nền của $X$ không đổi, chỉ chuẩn thay đổi).
>
> **(b) Tuyến tính liên tục.** Tính tuyến tính hiển nhiên. Về tính bị chặn theo chuẩn $\|\cdot\|_1$: với mọi $x \in [0,1]$,
> $$\left|\int_0^x f(t)\,dt\right| \le \int_0^x |f(t)|\,dt \le \int_0^1 |f(t)|\,dt = \|f\|_1.$$
> Do đó
> $$\|Tf\|_1 = \int_0^1 |(Tf)(x)|\,dx \le \int_0^1 \|f\|_1\,dx = \|f\|_1,$$
> nên $T$ bị chặn với $\|T\| \le 1$.
>
> **(c) Tìm $\|T\|$.** Ta chứng minh $\|T\| = 1$ nhưng cận này **không đạt được**, chỉ được xấp xỉ.
>
> Với mỗi $\varepsilon \in (0,1)$, xét hàm tam giác
> $$f_\varepsilon(t) = \begin{cases} \dfrac{2(\varepsilon - t)}{\varepsilon^2}, & t \in [0, \varepsilon], \\ 0, & t \in (\varepsilon, 1], \end{cases}$$
> đây là hàm liên tục, không âm, với $\int_0^1 f_\varepsilon = \int_0^\varepsilon \frac{2(\varepsilon-t)}{\varepsilon^2}dt = 1$, tức $\|f_\varepsilon\|_1 = 1$.
>
> Với $x \ge \varepsilon$: $(Tf_\varepsilon)(x) = \int_0^\varepsilon f_\varepsilon(t)\,dt = 1$. Với $x < \varepsilon$: $(Tf_\varepsilon)(x) = \dfrac{2\varepsilon x - x^2}{\varepsilon^2} \in [0,1]$.
>
> Do đó
> $$\|Tf_\varepsilon\|_1 = \int_0^\varepsilon (Tf_\varepsilon)(x)\,dx + \int_\varepsilon^1 1\,dx \ge 1 - \varepsilon.$$
> Cho $\varepsilon \to 0^+$, ta được $\|Tf_\varepsilon\|_1 \to 1$, trong khi $\|f_\varepsilon\|_1 = 1$ với mọi $\varepsilon$. Vậy $\sup \|Tf\|_1/\|f\|_1 = 1$, kết hợp cận trên ở (b):
> $$\|T\| = 1,$$
> tuy nhiên không tồn tại $f \in X$, $\|f\|_1 = 1$ nào đạt chính xác $\|Tf\|_1 = 1$ (vì điều đó đòi hỏi $f$ "tập trung khối lượng tại điểm $0$", điều không thể với hàm liên tục thực sự).

## Câu 3

> [!prob] Câu 3
> Đặt $X = L^2(0,1)$ với chuẩn $\|\cdot\|_2$. Cho phiếm hàm $T: X \to \mathbb{R}$ xác định bởi $T(f) = \int_0^1 xf(x)\,dx$.
> (a) Chứng tỏ $T$ được định nghĩa tốt. (b) Chứng tỏ $T \in L^2(0,1)^*$. (c) Tìm $\|T\|$.

> [!prf] Lời giải
> **(a) Định nghĩa tốt.** Hàm $g(x) = x$ thuộc $L^2(0,1)$ vì $\int_0^1 x^2\,dx = 1/3 < \infty$. Theo Cauchy–Schwarz trong $L^2(0,1)$:
> $$|T(f)| = |\langle f, g\rangle| \le \|f\|_2 \|g\|_2 = \frac{1}{\sqrt3}\|f\|_2 < \infty$$
> với mọi $f \in L^2(0,1)$. Vậy $T(f)$ luôn hữu hạn, $T$ được định nghĩa tốt.
>
> **(b) $T \in L^2(0,1)^*$.** Tính tuyến tính của $T$ suy từ tính tuyến tính của tích phân. Từ bất đẳng thức ở (a), $T$ bị chặn với $\|T\| \le 1/\sqrt3$, do đó liên tục, nghĩa là $T \in L^2(0,1)^*$.
>
> **(c) Tìm $\|T\|$.** Đẳng thức trong Cauchy–Schwarz xảy ra khi $f$ tỉ lệ với $g(x) = x$. Lấy $f(x) = x \in L^2(0,1)$: $\|f\|_2 = 1/\sqrt3$, và
> $$T(f) = \int_0^1 x^2\,dx = \frac13.$$
> Tỉ số $T(f)/\|f\|_2 = (1/3)/(1/\sqrt3) = 1/\sqrt3$, đạt đúng cận trên. Vậy
> $$\|T\| = \frac{1}{\sqrt3} = \frac{\sqrt3}{3}.$$

## Câu 4

> [!prob] Câu 4
> Đặt $X = C([0,1])$ với chuẩn sup và $M = \{f \in X \mid f(0) = 0\}$. Cho $S: M \to \mathbb{R}$ xác định bởi $f \mapsto S(f) = \int_0^1 x^2 f(x)\,dx$.
> (a) Chứng tỏ $S$ tuyến tính liên tục. (b) Tìm $\|S\|$. (c) Chứng tỏ tồn tại $T \in X^*$ sao cho $T|_M = S$ và $\|T\| = \|S\|$. (d) Tìm tất cả $T \in X^*$ sao cho $T|_M = S$ và $\|T\| = \|S\|$.

> [!prf] Lời giải
> **(a) Tuyến tính liên tục.** Tính tuyến tính hiển nhiên. Về bị chặn:
> $$|S(f)| \le \int_0^1 x^2|f(x)|\,dx \le \|f\|_\infty \int_0^1 x^2\,dx = \frac13\|f\|_\infty,$$
> vậy $S$ bị chặn, liên tục, với $\|S\| \le 1/3$.
>
> **(b) Tìm $\|S\|$.** Ta chứng minh $\|S\| = 1/3$ (không đạt được, chỉ xấp xỉ). Với $n \in \mathbb{Z}^+$, xét
> $$f_n(x) = \min(nx, 1) \in M \quad (f_n(0) = 0, \ \|f_n\|_\infty = 1).$$
> Ta có $f_n(x) \to 1$ với mọi $x \in (0,1]$ và $|x^2 f_n(x)| \le x^2$ khả tích. Theo định lý hội tụ bị chặn (Lebesgue),
> $$S(f_n) = \int_0^1 x^2 f_n(x)\,dx \longrightarrow \int_0^1 x^2\,dx = \frac13.$$
> Vậy $\sup_{f \in M, \|f\|\le 1} |S(f)| = 1/3$, kết hợp câu (a):
> $$\|S\| = \frac13.$$
>
> **(c) Tồn tại mở rộng bảo toàn chuẩn.** Đây chính là Hệ quả 1 của Hahn–Banach áp dụng cho $M \subseteq X$ và $S \in M^*$: tồn tại $T \in X^*$ với $T|_M = S$ và $\|T\|_{X^*} = \|S\|_{M^*} = 1/3$.
>
> **(d) Tìm tất cả các mở rộng bảo toàn chuẩn.** Vì $M = \ker(\delta_0)$ với $\delta_0(f) = f(0)$, và hàm hằng $\mathbf{1} \notin M$, ta có phân tích trực tiếp
> $$X = M \oplus \langle \mathbf{1} \rangle, \qquad f = \big(f - f(0)\mathbf{1}\big) + f(0)\mathbf{1}.$$
> Mọi mở rộng tuyến tính $T$ của $S$ lên $X$ được xác định duy nhất bởi giá trị $T(\mathbf{1}) =: \alpha$:
> $$T(f) = S\big(f - f(0)\mathbf{1}\big) + \alpha f(0) = \int_0^1 x^2 f(x)\,dx + f(0)\left(\alpha - \frac13\right).$$
> Đặt $\beta = \alpha - 1/3$, viết $T_\beta(f) = \int_0^1 x^2f(x)\,dx + \beta f(0)$.
>
> Ta tính $\|T_\beta\|$. Cận trên: $|T_\beta(f)| \le \frac13\|f\|_\infty + |\beta|\,|f(0)| \le \left(\frac13 + |\beta|\right)\|f\|_\infty$.
>
> Cận dưới (đạt xấp xỉ): với $t \in [-1,1]$ cố định, xét $f_n(x) = t + (1-t)\min(nx,1)$, hàm này liên tục, $f_n(0) = t$, $\|f_n\|_\infty \le 1$, và $f_n(x) \to 1$ với $x \in (0,1]$. Khi đó
> $$T_\beta(f_n) \to \frac13 + \beta t.$$
> Lấy $t = \operatorname{sign}(\beta)$ (hoặc $t=1$ nếu $\beta=0$), ta được $\sup |T_\beta(f)|/\|f\| \to \frac13 + |\beta|$. Vậy
> $$\|T_\beta\| = \frac13 + |\beta|.$$
> Điều kiện $\|T_\beta\| = \|S\| = 1/3$ tương đương $\beta = 0$. Vậy **mở rộng bảo toàn chuẩn là duy nhất**:
> $$T(f) = \int_0^1 x^2 f(x)\,dx \quad \text{với mọi } f \in C([0,1]).$$

## Câu 5

> [!prob] Câu 5
> Đặt $Y = \{f \in C([0,1]) \mid f(0) = 0\}$ với chuẩn sup và cho ánh xạ $T: Y \to \mathbb{R}$ xác định bởi $f \mapsto T(f) = f(1)$.
> (a) Chứng tỏ $T$ tuyến tính liên tục. (b) Tìm $\|T\|$. (c) Dùng Hahn–Banach chứng tỏ tồn tại mở rộng bảo toàn chuẩn lên $C([0,1])$. (d) Cho ví dụ cụ thể; hỏi có duy nhất không?

> [!prf] Lời giải
> **(a) Tuyến tính liên tục.** $T$ là phiếm hàm định giá (evaluation) tại $x=1$, hiển nhiên tuyến tính. Bị chặn: $|T(f)| = |f(1)| \le \|f\|_\infty$, vậy $\|T\| \le 1$.
>
> **(b) Tìm $\|T\|$.** Lấy $f(x) = x \in Y$: $f(0) = 0$, $\|f\|_\infty = 1$, $T(f) = f(1) = 1$. Đạt cận trên, vậy
> $$\|T\| = 1.$$
>
> **(c) Tồn tại mở rộng.** Áp dụng trực tiếp Hệ quả 1 của Hahn–Banach cho $Y \subseteq X = C([0,1])$ và $T \in Y^*$: tồn tại $\tilde T \in X^*$ với $\tilde T|_Y = T$ và $\|\tilde T\| = \|T\| = 1$.
>
> **(d) Ví dụ cụ thể và tính duy nhất.** Ví dụ đơn giản: $\tilde T(f) = f(1)$ với mọi $f \in C([0,1])$ (phiếm hàm định giá tại $1$ trên toàn không gian). Đây là một mở rộng hợp lệ vì trên $Y$ nó trùng $T$, và $\|\tilde T\| = 1$ (đạt tại $f \equiv 1$).
>
> Ta chứng minh mở rộng này là **duy nhất**. Tương tự Câu 4, phân tích $X = Y \oplus \langle \mathbf1\rangle$, và mọi mở rộng tuyến tính có dạng
> $$\tilde T_c(f) = f(1) + (c-1)f(0), \qquad c = \tilde T_c(\mathbf1) \in \mathbb{R}.$$
> Đặt $d = c - 1$. Với $s, t \in [-1,1]$ bất kỳ, tồn tại $f \in X$ với $\|f\|_\infty \le 1$, $f(0) = s$, $f(1) = t$ (ví dụ hàm tuyến tính nối $s$ và $t$ trên $[0,1]$, các giá trị trung gian nằm giữa $s,t$ nên vẫn thỏa $\|f\|_\infty \le 1$). Khi đó
> $$\sup_{\|f\|_\infty \le 1} |\tilde T_c(f)| = \sup_{s,t \in [-1,1]} |t + ds| = 1 + |d|.$$
> Điều kiện $\|\tilde T_c\| = 1$ buộc $d = 0$, tức $c = 1$. Vậy
> $$\tilde T(f) = f(1)$$
> là **mở rộng Hahn–Banach duy nhất** bảo toàn chuẩn.

## Câu 6

> [!prob] Câu 6
> Cho $E, F$ là các không gian định chuẩn và $T \in L(E,F)$. Chứng tỏ
> $$\|T\| = \sup\{\|f \circ T\| \mid f \in F^*, \|f\| = 1\}.$$

> [!prf] Lời giải
> Đặt $M = \sup\{\|f \circ T\| : f \in F^*, \|f\|=1\}$.
>
> **($M \le \|T\|$).** Với mọi $f \in F^*$, $\|f\| = 1$:
> $$\|f \circ T\| = \sup_{\|x\| \le 1} |f(Tx)| \le \sup_{\|x\|\le 1} \|f\|\,\|Tx\| = \sup_{\|x\|\le 1}\|Tx\| = \|T\|.$$
> Lấy sup theo $f$, $M \le \|T\|$.
>
> **($\|T\| \le M$).** Cố định $x \in E$, $\|x\| \le 1$. Nếu $Tx = 0$ thì $\|Tx\| = 0 \le M$ hiển nhiên. Nếu $Tx \ne 0$, theo Hệ quả 2 (phiếm hàm chuẩn hóa), tồn tại $f \in F^*$, $\|f\| = 1$, sao cho $f(Tx) = \|Tx\|$. Khi đó
> $$\|Tx\| = f(Tx) = (f\circ T)(x) \le \|f \circ T\| \cdot \|x\| \le \|f \circ T\| \le M.$$
> Vậy $\|Tx\| \le M$ với mọi $\|x\| \le 1$, lấy sup: $\|T\| \le M$.
>
> Kết hợp hai chiều, $\|T\| = M$. 

## Câu 7

> [!prob] Câu 7
> Cho $E$ là không gian định chuẩn. Chứng tỏ
> $$\bigcap_{f \in E^*} \ker(f) = \{0\}.$$

> [!prf] Lời giải
> Chiều $\supseteq$: hiển nhiên vì mọi $f \in E^*$ tuyến tính nên $f(0) = 0$, tức $0 \in \ker(f)$ với mọi $f$.
>
> Chiều $\subseteq$: giả sử $x \in E$, $x \ne 0$. Theo Hệ quả 2 của Hahn–Banach, tồn tại $f \in E^*$, $\|f\| = 1$, sao cho $f(x) = \|x\| > 0$. Vậy $f(x) \ne 0$, nghĩa là $x \notin \ker(f)$, do đó $x \notin \bigcap_{f \in E^*} \ker(f)$.
>
> Vậy giao trên không chứa phần tử khác $0$ nào, kết hợp chiều $\supseteq$ ta được đẳng thức. 

## Câu 8

> [!prob] Câu 8
> Cho $X$ là không gian định chuẩn trên $\mathbb{R}$ và $M \subsetneq X$ là không gian con đóng. Cho $a \in X\setminus M$ cố định, $d = \inf\{\|a-m\| : m \in M\}$.
> (a) Chứng tỏ $d > 0$. (b) Cho $T: M + \langle a\rangle \to \mathbb{R}$ bởi $T(m+ta) = td$; chứng tỏ $T$ tuyến tính liên tục. (c) Chứng tỏ tồn tại $f \in X^*$ sao cho $f(a)=1$, $f|_M = 0$, $\|f\| \le 1/d$.

> [!prf] Lời giải
> **(a) $d > 0$.** Giả sử ngược lại $d = 0$. Khi đó tồn tại dãy $(m_n) \subset M$ với $\|a - m_n\| \to 0$, tức $m_n \to a$. Vì $M$ đóng, $a \in M$, mâu thuẫn với giả thiết $a \notin M$. Vậy $d > 0$.
>
> **(b) $T$ tuyến tính liên tục.**
>
> *Định nghĩa tốt / tuyến tính:* trước hết, tổng $M + \langle a\rangle$ là tổng trực tiếp: nếu $ta \in M$ với $t \ne 0$ thì $a = \frac1t(ta) \in M$, mâu thuẫn. Vậy $M \cap \langle a \rangle = \{0\}$, mỗi phần tử của $M+\langle a\rangle$ được viết duy nhất dưới dạng $m+ta$. Do đó $T$ định nghĩa tốt, và tuyến tính theo $(m,t)$ là hiển nhiên từ công thức.
>
> *Liên tục:* Với $t = 0$, $T(m) = 0$, bất đẳng thức $|T(m)| \le \|m\|$ hiển nhiên. Với $t \ne 0$:
> $$\|m + ta\| = |t| \left\|\frac{m}{t} + a\right\| = |t|\left\|a - \left(-\frac{m}{t}\right)\right\| \ge |t|\, d,$$
> vì $-m/t \in M$ và $d$ là infimum khoảng cách từ $a$ đến $M$. Vậy
> $$|T(m+ta)| = |t|\,d \le \|m+ta\|$$
> với mọi $m \in M, t \in \mathbb{R}$. Suy ra $T$ bị chặn với $\|T\| \le 1$, do đó liên tục.
>
> **(c) Tồn tại $f$.** Xét $\tilde T = T/d$ trên $M + \langle a\rangle$, tức $\tilde T(m+ta) = t$. Từ (b), $\|\tilde T\| = \|T\|/d \le 1/d$. Ngoài ra $\tilde T(a) = \tilde T(0 + 1\cdot a) = 1$ và $\tilde T|_M = 0$ (ứng với $t=0$).
>
> Áp dụng Hệ quả 1 của Hahn–Banach, mở rộng $\tilde T$ thành $f \in X^*$ với
> $$\|f\| = \|\tilde T\| \le \frac1d, \qquad f(a) = \tilde T(a) = 1, \qquad f|_M = \tilde T|_M = 0$$

## Câu 9

> [!prob] Câu 9
> Với $u, v \in \mathbb{C}^n$ cố định, đặt ánh xạ $T: \mathbb{C}^n \to \mathbb{C}^n$ xác định bởi $Tx = \langle x, v\rangle u$. Chứng tỏ $T$ tuyến tính liên tục và tìm $\|T\|$.

> [!prf] Lời giải
> **Tuyến tính liên tục.** Tích vô hướng $\langle x, v\rangle$ tuyến tính theo $x$ (quy ước tuyến tính ở biến thứ nhất), nên $Tx = \langle x,v\rangle u$ tuyến tính theo $x$. Vì $\mathbb{C}^n$ hữu hạn chiều, mọi ánh xạ tuyến tính đều liên tục; cụ thể theo Cauchy–Schwarz:
> $$\|Tx\| = |\langle x,v\rangle|\, \|u\| \le \|x\|\,\|v\|\,\|u\|,$$
> nên $T$ bị chặn với $\|T\| \le \|u\|\|v\|$.
>
> **Tìm $\|T\|$.** Đẳng thức Cauchy–Schwarz xảy ra khi $x$ tỉ lệ với $v$; lấy $x = v$:
> $$Tv = \langle v,v\rangle u = \|v\|^2 u, \qquad \|Tv\| = \|v\|^2\|u\|.$$
> Tỉ số $\|Tv\|/\|v\| = \|v\|\,\|u\|$, đạt đúng cận trên. Vậy
> $$\|T\| = \|u\|\,\|v\|$$

## Câu 10

> [!prob] Câu 10
> Cho $H$ là không gian Hilbert với cơ sở trực chuẩn $(e_n)_{n\in\mathbb{Z}^+}$ và cho dãy số $(a_n)_{n\in\mathbb{Z}^+} \subset \ell^2$. Chứng tỏ tồn tại duy nhất $x \in H$ sao cho $\langle x, e_n\rangle = a_n$ với mọi $n \in \mathbb{Z}^+$.

> [!prf] Lời giải
> **Tồn tại.** Xét dãy tổng riêng $s_N = \sum_{n=1}^N a_n e_n$. Với $N < M$, theo tính trực chuẩn:
> $$\|s_M - s_N\|^2 = \left\|\sum_{n=N+1}^M a_n e_n\right\|^2 = \sum_{n=N+1}^M |a_n|^2.$$
> Vì $(a_n) \in \ell^2$, tổng $\sum |a_n|^2$ hội tụ nên vế phải $\to 0$ khi $N, M \to \infty$; do đó $(s_N)$ là dãy Cauchy trong $H$. Vì $H$ đầy đủ (không gian Hilbert), $(s_N)$ hội tụ tới một phần tử $x \in H$, ta viết $x = \sum_{n=1}^\infty a_n e_n$.
>
> Với mỗi $k$ cố định và $N \ge k$: $\langle s_N, e_k\rangle = a_k$ (do trực chuẩn). Vì tích vô hướng liên tục và $s_N \to x$,
> $$\langle x, e_k\rangle = \lim_{N\to\infty} \langle s_N, e_k\rangle = a_k.$$
> Vậy $x$ thỏa mãn yêu cầu.
>
> **Duy nhất.** Giả sử $x, x' \in H$ đều thỏa $\langle x, e_n\rangle = \langle x', e_n\rangle = a_n$ với mọi $n$. Khi đó $\langle x - x', e_n\rangle = 0$ với mọi $n$. Vì $(e_n)$ là cơ sở trực chuẩn (đầy đủ), theo đẳng thức Parseval,
> $$\|x - x'\|^2 = \sum_{n=1}^\infty |\langle x-x', e_n\rangle|^2 = 0,$$
> nên $x = x'$. 


## Câu 11

> [!prob] Câu 11
> Cho $H$ là không gian Hilbert với cơ sở trực chuẩn $(e_n)_{n\in\mathbb{Z}^+}$. Cho ánh xạ $T: H \to \ell^2$ xác định bởi $x \mapsto Tx = (\langle x, e_n\rangle)_{n\in\mathbb{Z}^+}$.
> (a) Chứng tỏ $T$ được định nghĩa tốt. (b) Chứng tỏ $T$ là song ánh tuyến tính bảo toàn chuẩn (đẳng cự).

> [!prf] Lời giải
> **(a) Định nghĩa tốt.** Cần $Tx \in \ell^2$, tức $\sum_n |\langle x, e_n\rangle|^2 < \infty$. Đây chính là bất đẳng thức Bessel: $\sum_{n=1}^\infty |\langle x, e_n\rangle|^2 \le \|x\|^2 < \infty$. Vậy $Tx \in \ell^2$, $T$ được định nghĩa tốt.
>
> **(b) Song ánh, tuyến tính, đẳng cự.**
>
> *Tuyến tính:* hiển nhiên từ tuyến tính của tích vô hướng theo biến thứ nhất.
>
> *Đẳng cự:* vì $(e_n)$ là cơ sở trực chuẩn (đầy đủ, không chỉ trực chuẩn), đẳng thức Parseval cho
> $$\|Tx\|_{\ell^2}^2 = \sum_{n=1}^\infty |\langle x, e_n\rangle|^2 = \|x\|_H^2,$$
> vậy $\|Tx\| = \|x\|$ với mọi $x \in H$: $T$ là một phép đẳng cự.
>
> *Đơn ánh:* suy trực tiếp từ đẳng cự và tuyến tính: $Tx = 0 \Rightarrow \|x\| = \|Tx\| = 0 \Rightarrow x=0$, kết hợp tuyến tính suy ra đơn ánh.
>
> *Toàn ánh:* cho $(a_n) \in \ell^2$ bất kỳ. Theo Câu 10, tồn tại $x \in H$ với $\langle x, e_n\rangle = a_n$ với mọi $n$, tức $Tx = (a_n)$. Vậy $T$ toàn ánh.
>
> Kết luận: $T$ là song ánh tuyến tính bảo toàn chuẩn, tức một phép đẳng cự tuyến tính giữa $H$ và $\ell^2$. 


## Câu 12

> [!prob] Câu 12
> Cho $(e_n)_{n\in\mathbb{Z}^+}$ là cơ sở trực chuẩn trong $\ell^2$ và đặt
> $$x = \sum_{n=1}^\infty a_n e_n, \qquad a_n = \frac{1}{\sqrt n \, \ln(n+1)}.$$
> (a) Chứng tỏ $x \in \ell^2$. (b) Hỏi $x$ có thuộc $\ell^1$ không?

> [!prf] Lời giải
> **(a) $x \in \ell^2$.** Cần chứng minh $\sum_{n=1}^\infty a_n^2 = \sum_{n=1}^\infty \dfrac{1}{n\,[\ln(n+1)]^2} < \infty$.
>
> Xét hàm $g(t) = \dfrac{1}{t[\ln(t+1)]^2}$, giảm và dương với $t$ đủ lớn, nên theo tiêu chuẩn tích phân (Cauchy), chuỗi $\sum g(n)$ hội tụ khi và chỉ khi $\int_2^\infty g(t)\,dt$ hội tụ. Đặt $u = \ln(t+1)$, $du = \dfrac{dt}{t+1} \approx \dfrac{dt}{t}$ với $t$ lớn, ta có
> $$\int^\infty \frac{dt}{t[\ln(t+1)]^2} \approx \int^\infty \frac{du}{u^2} < \infty.$$
> Vậy chuỗi $\sum a_n^2$ hội tụ, tức $(a_n) \in \ell^2$, và vì $(e_n)$ là cơ sở trực chuẩn của $\ell^2$, chuỗi $\sum a_n e_n$ hội tụ trong $\ell^2$ (đúng như lập luận Cauchy ở Câu 10), nên $x \in \ell^2$.
>
> **(b) $x$ có thuộc $\ell^1$ không?** Ta xét $\sum_{n=1}^\infty a_n = \sum_{n=1}^\infty \dfrac{1}{\sqrt n\,\ln(n+1)}$ và chứng minh chuỗi này **phân kỳ**.
>
> Vì $\ln(n+1) = o(n^{1/4})$ khi $n \to \infty$ (logarit tăng chậm hơn mọi lũy thừa dương của $n$), tồn tại $N$ sao cho với mọi $n \ge N$:
> $$\ln(n+1) \le n^{1/4}.$$
> Do đó với $n \ge N$:
> $$a_n = \frac{1}{\sqrt n\,\ln(n+1)} \ge \frac{1}{\sqrt n \cdot n^{1/4}} = \frac{1}{n^{3/4}}.$$
> Vì chuỗi $\sum \dfrac{1}{n^{3/4}}$ phân kỳ (chuỗi $p$ với $p = 3/4 < 1$), theo tiêu chuẩn so sánh, chuỗi $\sum a_n$ cũng phân kỳ.
>
> Vậy
> $$\sum_{n=1}^\infty |a_n| = \infty, \quad \text{tức } x \notin \ell^1.$$


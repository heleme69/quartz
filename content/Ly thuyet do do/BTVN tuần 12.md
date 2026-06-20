
> [!lem] (Tính liên tục tuyệt đối của tích phân Lebesgue)
> Cho $\varphi \in L^1(D, \mathfrak{A}, \mu)$. Khi đó:
> $$\forall \varepsilon > 0, \exists \delta_\varepsilon > 0 : \forall A \in \mathfrak{A}, \mu(A) < \delta_\varepsilon \Rightarrow \int_A |\varphi| < \varepsilon$$

> [!prf] 
> Không mất tính tổng quát, giả sử $\varphi \ge 0$.
> 
> Xét dãy hàm chặt cụt $\varphi_n(x) = \min\{\varphi(x), n\}$. Ta có $0 \le \varphi_n \le n$ (bị chặn) và $\varphi_n \uparrow \varphi$.
> 
> Theo Định lý Hội tụ Đơn điệu (hoặc Hội tụ Bị chặn), ta có $\lim_{n \to \infty} \int_D \varphi_n = \int_D \varphi$. 
> Do $\varphi \in L^1$ nên $\int_D \varphi < \infty$, suy ra:
> $$\lim_{n \to \infty} \int_D (\varphi - \varphi_n) = 0$$
> 
> Theo định nghĩa giới hạn, với $\varepsilon > 0$ cho trước, tồn tại $N_\varepsilon \in \mathbb{N}^*$ sao cho:
> $$\int_D (\varphi - \varphi_{N_\varepsilon}) < \frac{\varepsilon}{2}$$
> 
> Với tập $A \in \mathfrak{A}$ bất kỳ, ta tách tích phân:
> $$\int_A \varphi = \int_A \varphi_{N_\varepsilon} + \int_A (\varphi - \varphi_{N_\varepsilon})$$
> Ta đánh giá từng thành phần:
> 
> $$\int_A \varphi_{N_\varepsilon} \le \int_A N_\varepsilon = N_\varepsilon \cdot \mu(A)$$
> $$\int_A (\varphi - \varphi_{N_\varepsilon}) \le \int_D (\varphi - \varphi_{N_\varepsilon}) < \frac{\varepsilon}{2}$$
> 
> Gộp lại ta được:
> $$\int_A \varphi \le N_\varepsilon \cdot \mu(A) + \frac{\varepsilon}{2}$$.
> 
> Chọn $\delta_\varepsilon = \frac{\varepsilon}{2 N_\varepsilon} > 0$. Khi $\mu(A) < \delta_\varepsilon$, ta có:
> $$\int_A \varphi < N_\varepsilon \cdot \left(\frac{\varepsilon}{2 N_\varepsilon}\right) + \frac{\varepsilon}{2} = \varepsilon$$
> Bổ đề đã được chứng minh.

> [!lem] (Tính "chặt" của tích phân Lebesgue)
> Cho $\varphi \in L^1(D, \mathfrak{A}, \mu)$. Khi đó:
> $$\forall \varepsilon > 0, \exists B_\varepsilon \in \mathfrak{A}, \mu(B_\varepsilon) < \infty \Rightarrow \int_{B_\varepsilon^c} |\varphi| < \varepsilon$$

> [!prf] 
> Không mất tính tổng quát, giả sử $\varphi \ge 0$.
> 
> Xét dãy các tập hợp $A_n = \{x \in D : \varphi(x) > \frac{1}{n}\}$ với $n \in \mathbb{N}^*$.
> Rõ ràng $A_n \in \mathfrak{A}$ và $A_n \subseteq A_{n+1}$.
> Ta có đánh giá sau: 
> $$\int_D \varphi \ge \int_{A_n} \varphi \ge \int_{A_n} \frac{1}{n} = \frac{1}{n} \mu(A_n)$$
> Do $\varphi \in L^1$ nên $\int_D \varphi < \infty$. Suy ra $\mu(A_n) \le n \int_D \varphi < \infty$. Vậy các tập $A_n$ đều có độ đo hữu hạn.
> 
> Gọi $A = \{x \in D : \varphi(x) > 0\}$. Dễ thấy $A_n \uparrow A$.
> Xét dãy hàm $f_n = \varphi \cdot \mathbf{1}_{A_n}$. Ta có $f_n \uparrow \varphi \cdot \mathbf{1}_A = \varphi$ (do $\varphi = 0$ trên $A^c$).
> Theo Định lý Hội tụ Đơn điệu:
> $$\lim_{n \to \infty} \int_D f_n = \int_D \varphi \Rightarrow \lim_{n \to \infty} \int_{A_n} \varphi = \int_D \varphi$$
> 
> Vì $\int_D \varphi < \infty$, ta đơn giản hai vế:
> $$\lim_{n \to \infty} \int_{A_n^c} \varphi = \lim_{n \to \infty} \left( \int_D \varphi - \int_{A_n} \varphi \right) = 0$$
> 
> Theo định nghĩa giới hạn, với $\varepsilon > 0$ cho trước, tồn tại một số nguyên $N \in \mathbb{N}^*$ sao cho:
> $$\int_{A_N^c} \varphi < \varepsilon$$
> 
> Chọn $B_\varepsilon = A_N$. Khi đó ta có $\mu(B_\varepsilon) < \infty$ và $\int_{B_\varepsilon^c} \varphi < \varepsilon$. 
> Bổ đề đã được chứng minh.

> [!prob] (Prob 9.15)
> Cho $f$ là hàm đo được và khả tích Lebesgue trên $[0, \infty)$ ($\int_0^\infty |f| d\mu_L < \infty$). 
> Nếu $f$ liên tục đều trên $[0, \infty)$ thì:
> $$\lim_{x \to \infty} f(x) = 0$$

> [!prf] Chứng minh
> Giả sử phản chứng rằng $\lim_{x \to \infty} f(x) \neq 0$. 
> Điều này có nghĩa là tìm được $\varepsilon_0 > 0$ và một dãy các điểm $x_n \to \infty$ (ta có thể chọn sao cho $x_{n+1} - x_n > 1$) thỏa mãn:
> $$|f(x_n)| \ge \varepsilon_0, \quad \forall n \in \mathbb{N}^*$$
> 
> Vì $f$ liên tục đều trên $[0, \infty)$, ứng với $\frac{\varepsilon_0}{2} > 0$, tồn tại một số $\delta > 0$ (ta có thể chọn $\delta < \frac{1}{2}$) sao cho:
> $$\forall x, y \in [0, \infty), |x - y| < \delta \Rightarrow |f(x) - f(y)| < \frac{\varepsilon_0}{2}$$
> 
> Xét các lân cận $I_n = [x_n - \delta, x_n + \delta]$ của từng điểm $x_n$. Với mọi $t \in I_n$, ta có $|t - x_n| \le \delta$, áp dụng bất đẳng thức trên:
> $$|f(t) - f(x_n)| < \frac{\varepsilon_0}{2} \implies |f(t)| \ge |f(x_n)| - |f(t) - f(x_n)| > \varepsilon_0 - \frac{\varepsilon_0}{2} = \frac{\varepsilon_0}{2}$$
> 
> Vì các khoảng $I_n$ rời nhau (do cách chọn $x_{n+1} - x_n > 1$ và $\delta < \frac{1}{2}$), ta tính tích phân của $|f|$ trên hợp của tất cả các khoảng này:
> $$\int_0^\infty |f| d\mu_L \ge \sum_{n=1}^\infty \int_{I_n} |f| d\mu_L$$
> Trên mỗi khoảng $I_n$, do $|f(t)| > \frac{\varepsilon_0}{2}$ và chiều dài khoảng $\mu_L(I_n) = 2\delta$, ta có:
> $$\int_{I_n} |f| d\mu_L \ge \frac{\varepsilon_0}{2} \cdot 2\delta = \varepsilon_0 \delta$$
> 
> Thế ngược lại vào tổng chuỗi:
> $$\int_0^\infty |f| d\mu_L \ge \sum_{n=1}^\infty \varepsilon_0 \delta = \infty$$
> Điều này mâu thuẫn trực tiếp với giả thiết $f$ khả tích Lebesgue ($\int_0^\infty |f| d\mu_L < \infty$).
> 
> Vậy giả thiết phản chứng là sai. Ta có $\lim_{x \to \infty} f(x) = 0$.

> [!prob] (Prob 9.20)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ Cho $f_{n}$ và $f$ là dãy hàm và hàm thực mở rộng, $\mu$-đo được trên $D \in \mathfrak{A}$. Giả sử ta có $g$ là hàm khả tích không âm nhận giá trị thực mở rộng và đo được trên $D \in \mathfrak{A}$. Giả sử:
> 1. $|f_{n}| \le g$ trên $D$ với mọi $n \in \mathbb{N}$.
> 2. $g^{p}$ khả tích đối với $\mu$ trên $D$ với $p \in (0, \infty)$.
>
> Khi đó ta có:
> (a) $|f^{p}|$ khả tích đối với $\mu$ trên $D$,
> (b) $\lim_{ n \to \infty } \int_{D} |f_{n}|^{p}d\mu = \int_{D} |f|^{p} d\mu$
> (c) $\lim_{ n \to \infty } \int |f_{n} - f|^{p} d\mu = 0$.

> [!prf]
> Ta có $\lim_{ n \to \infty }f_{n} = f$ a.e thì suy ra được ${} \lim_{ n \to \infty } |f_{n}|^{p} = |f|^{p} {}$ a.e trên $D$, điều này có được do hàm lấy trị tuyệt đối và hàm nâng lũy thừa trên $[0, \infty)$ là liên tục nên ta được phép đưa qua giới hạn. Từ ${} |f_{n}| \le g {}$, ta cũng suy ra được $|f_{n}|^{p} \le g^{p}$.
>
> Ta nhận thấy Định lý hội tụ bị chặn được thỏa cho dãy hàm $|f_{n}|^{p}$, vì:
> 1. $|f_{n}|^{p} \to |f|^{p}$ a.e
> 2. $|f_{n}|^{p} \le g^{p}$ a.e (với mọi $n \in \mathbb{N}$)
> 
> Vậy ta kết luận hàm giới hạn $|f|^{p}$ khả tích và $\lim_{ n \to \infty } \int_{D} |f_{n}|^{p}d\mu = \int_{D} |f|^{p} d\mu$, hoàn tất chứng minh ý (a) và ý (b).
> 
> Trước khi chứng minh ý (c), ta cần cần chú ý giả thiết $f_{n}$ và $f$ nhận giá trị thực mở rộng, nên ta có thể rơi vào dạng vô định $\infty - \infty$ khi xét $f_{n} - f$. Ta giải quyết bằng tính chất: Nếu một hàm khả tích $\int_D f d\mu < \infty$, thì $f < \infty$ hầu khắp nơi (a.e.) trên $D$. 
> 
> Áp dụng cho $|f^{p}|$ là hàm khả tích, Gọi $D_0$ là tập hợp tất cả các điểm $x \in D$ mà tại đó $f(x) = \infty$ hoặc tồn tại một chỉ số $n$ để $f_n(x) = \infty$. Tập $D_0$ này chính là hợp đếm được của các tập có độ đo $0$, do đó $\mu(D_0) = 0$ (tập null).
> 
> Xét trên $D \setminus D_{0}$, ta có: 
> $$
> \lim_{ n \to \infty } |f_{n} - f|^{p} = |\lim_{ n \to \infty }f_{n} - f|^{p} = |f - f| = 0 \text{ a.e trên } D
> $$ 
> Ta cũng có $|f_{n} - f| ^{p} \le (|f_{n}| + |f|) ^{p} \le (g + g) ^{p} = 2^{p}g^{p}$. Vậy DCT thỏa cho dãy $|f_{n} - f|^{p}$ với dãy hàm bị chặn $2^{p}g^{p}$ là một hàm khả tích.
> 
> Áp dụng DCT, cho ta $\lim_{ n \to \infty } \int_{D} |f_{n} - f| ^{p} d\mu = \int_{D} \lim_{ n \to \infty } |f_{n} - f|^{p} d\mu = \int_{D} 0 d\mu = 0$.
> Vậy ý (c) được chứng minh hoàn tất.

> [!thm] (Prob 9.22: Mở rộng của Định lý Hội tụ Bị chặn (Generalized DCT))
> Giả sử ta thay thế điều kiện bị chặn tuyệt đối bởi một hàm hằng số $g$ bằng một dãy các hàm khả tích biến $g_n$. Phát biểu tổng quát như sau:
> 
> Cho dãy hàm đo được $(f_n)_{n=1}^\infty$ và hàm $f$ đo được trên $D$. Cho dãy hàm không âm, khả tích $(g_n)_{n=1}^\infty$ và hàm không âm, khả tích $g$ trên $D$ thỏa mãn:
> 1. $f_n \to f$ và $g_n \to g$ hầu khắp nơi (a.e.) trên $D$.
> 2. $\lim_{n \to \infty} \int_D g_n \, d\mu = \int_D g \, d\mu < \infty$.
> 3. $|f_n| \le g_n$ trên $D$ với mọi $n \ge 1$.
> 
> Khi đó, hàm giới hạn $f$ cũng khả tích trên $D$ và ta có quyền đưa giới hạn qua dấu tích phân:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$$

> [!prf]
> Vì $|f_n| \le g_n$, lấy giới hạn hai vế ta có $|f| \le g$ hầu khắp nơi trên $D$. Do $g$ khả tích, ta suy ra ngay $f$ cũng khả tích. 
> Từ điều kiện 3, ta có bất đẳng thức kẹp: $-g_n \le f_n \le g_n$. Ta thiết lập hai dãy hàm không âm và áp dụng Bổ đề Fatou:
> 
> **Bước 1: Xét dãy hàm không âm $(g_n + f_n \ge 0)$**
> Áp dụng Bổ đề Fatou cho dãy này trên miền $D$:
> $$\int_D \liminf_{n \to \infty} (g_n + f_n) \, d\mu \le \liminf_{n \to \infty} \int_D (g_n + f_n) \, d\mu$$
> 
> Nhờ tính chất hội tụ điểm hầu khắp nơi, vế trái hội tụ về $\int_D (g + f) \, d\mu$. Vế phải tách thành tổng các $\liminf$:
> $$\int_D g \, d\mu + \int_D f \, d\mu \le \lim_{n \to \infty} \int_D g_n \, d\mu + \liminf_{n \to \infty} \int_D f_n \, d\mu$$
> 
> Sử dụng giả thiết $\lim \int_D g_n d\mu = \int_D g d\mu < \infty$, ta triệt tiêu đại lượng hữu hạn này ở hai vế, thu được chặn dưới:
> $$\int_D f \, d\mu \le \liminf_{n \to \infty} \int_D f_n \, d\mu \tag{1}$$
> 
> **Bước 2: Xét dãy hàm không âm $(g_n - f_n \ge 0)$**
> Tiếp tục áp dụng Bổ đề Fatou cho dãy hiệu:
> $$\int_D \liminf_{n \to \infty} (g_n - f_n) \, d\mu \le \liminf_{n \to \infty} \int_D (g_n - f_n) \, d\mu$$
> $$\implies \int_D g \, d\mu - \int_D f \, d\mu \le \lim_{n \to \infty} \int_D g_n \, d\mu + \liminf_{n \to \infty} \int_D (-f_n) \, d\mu$$
> 
> Chú ý rằng $\liminf (-a_n) = - \limsup a_n$. Thay vào và tiếp tục giản ước $\int_D g \, d\mu < \infty$ ở hai vế:
> $$-\int_D f \, d\mu \le - \limsup_{n \to \infty} \int_D f_n \, d\mu \implies \int_D f \, d\mu \ge \limsup_{n \to \infty} \int_D f_n \, d\mu \tag{2}$$
> 
> **Bước 3: Nguyên lý kẹp**
> Kết hợp hai đánh giá $(1)$ và $(2)$, ta có chuỗi bao hàm:
> $$\limsup_{n \to \infty} \int_D f_n \, d\mu \le \int_D f \, d\mu \le \liminf_{n \to \infty} \int_D f_n \, d\mu$$
> 
> Vì bất đẳng thức $\liminf \le \limsup$ luôn đúng, toàn bộ chuỗi trên ép buộc các dấu bằng phải xảy ra. Do đó, giới hạn tồn tại và thỏa mãn đẳng thức:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$$
> Định lý mở rộng được chứng minh hoàn tất. 

> [!prob] (Prob 9.23)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$. Cho $f_{n}$ là dãy hàm thực mở rộng, $\mu$-đo được trên $D \in \mathfrak{A}$. Giả sử:
> 4. $\lim_{ n \to \infty }f_{n} = f$ a.e trên $D$,
> 5. $f_{n}$ và $f$ khả tích đối với $\mu$ trên $D$.
> 
> Khi đó ta có:
> (a) Nếu ta có $\lim_{ n \to \infty } \int_{D}|f_{n}| d\mu = \int_{D} |f|d\mu$ thì $\lim_{ n \to \infty } \int_{D}f_{n} d\mu = \int_{D} fd\mu$
> (b) Chứng tỏ (a) sai bằng cách cho phản ví dụ

> [!prf]
> Chứng minh ý (a):
> Đặt $g_{n} = |f_{n}|$ và $g = |f|$. Ta sẽ chứng minh $f_{n}$ và $g$ thỏa 3 điều kiện của định lý DCT mở rộng từ Prob 9.22 để áp dụng chứng minh ý (a). 
> 
> Ta có $\lim_{ n \to \infty }f_{n} = f$ a.e thì suy ra được $\lim_{ n \to \infty } |f_{n}| = |f|$ a.e trên $D$, điều này có được do hàm lấy trị tuyệt đối là liên tục nên ta được phép đưa qua giới hạn. 
> 
> Ta cũng có $\lim_{ n \to \infty }g_{n} = g$ a.e trên D, $g$ là khả tích đối với $\mu$ và $\lim_{ n \to \infty }\int_{D}g_{n} d\mu = \int_{D} g d\mu$. Vậy ta có $g_{n}$ thỏa điều kiện 2 của DCT mở rộng.
> 
> Gọi $f^+_{n}$ và $f^-_{n}$ lần lượt là phần dương và phần âm của dãy hàm $f_{n}$ ($f_{n} = f^+_{n} - f^-_{n}$ với $f^+_{n}, f^-_{n} \ge 0$). Ta có $\lim_{ n \to \infty } f^+_{n} = f^+$ và $\lim_{ n \to \infty } f^-_{n} = f^-$ và ta cũng có $f^+ \le |f_{n}| = g_{n}$ và $f^- \le |f_{n}| = g_{n}$. Vậy ta có điều kiện 1 và 3 của DCT mở rộng thỏa. Áp dụng DCT mở rộng:
> $$
> \lim_{ n \to \infty } \int_{D} f^+_{n} d\mu = \int_{D} f^+ d\mu \text{ và } \lim_{ n \to \infty } \int_{D} f^-_{n} d\mu = \int_{D} f^- d\mu 
> $$
> Theo khả tích Lebesgue:
> $$
> \begin{align}
> \lim_{n \to \infty} \int_D f_n \, d\mu 
> &=  \lim_{n \to \infty} \int_D f_n^+ \, d\mu - \int_D f_n^- \, d\mu \\
> &=  \lim_{n \to \infty} \int_D f_n^+ \, d\mu - \lim_{n \to \infty} \int_D f_n^- \, d\mu \\
> &=  \int_D f^+ \, d\mu - \int_D f^- \, d\mu \\
> &=  \int_D f \, d\mu.
> \end{align}
> $$
> Vậy ta hoàn tất chứng minh ý (a).
> 
> Phản ví dụ cho ý (a):
> Xét không gian độ đo $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$.  
> Cho $f = 0$ trên $\mathbb{R}$ và ${} f_{n} {}$ là một dãy các hàm thực $\mathcal{M}_L$-đo được trên $\mathbb{R}$, được định nghĩa bởi:
> $$
> f_n(x) =
> \begin{cases}
> \frac{1}{n}, & \text{khi } x \in [0, n), \\
> -\frac{1}{n}, & \text{khi } x \in (-n, 0), \\
> 0, & \text{khi } x \in (-n, n)^c.
> \end{cases}
> $$
> Ta có $\lim_{n \to \infty} f_n(x) = 0 = f(x)$ với mọi $x \in \mathbb{R}$.  
> Hơn nữa, $\int_{\mathbb{R}} f_n \, d\mu_L = 0 = \int_{\mathbb{R}} f \, d\mu_L$ với mọi $n \in \mathbb{N}$, do đó  
> $$\lim_{n \to \infty} \int_{\mathbb{R}} f_n \, d\mu_L = \int_{\mathbb{R}} f \, d\mu_L.$$
>  
> Mặt khác, ta có $\int_{\mathbb{R}} |f_n| \, d\mu_L = 2$ với mọi $n \in \mathbb{N}$, nên  
> $$\lim_{n \to \infty} \int_{\mathbb{R}} |f_n| \, d\mu_L = 2 \neq 0 = \int_{\mathbb{R}} f_n \, d\mu_L.$$
> Vậy ta hoàn tất ý (b)

> [!prob] (BT 1)
> a) Cho dãy hàm ${} f_{n}(x) = \frac{n \sqrt{ x }}{1 + n^{2}x^{2}}$, với $x \in[0,1] {}$. Tính ${} \lim_{ n \to \infty } \int_{0}^{1} f_{n}(x)dx {}$.
> 
> b) Cho dãy hàm $g_{n}(x) = \frac{n}{x^{3/2}} \ln\left( 1 + \frac{x}{n} \right)$, với $x \in [0,1]$. Tính $\int_{0}^{1}g_{n}(x) dx$ khi $n \to \infty$.
>
> c) Cho dãy hàm $h_n(x) = \frac{1}{x^{3/2}} \sin\left(\frac{x}{n}\right)$ với $x > 0$. Tính $\lim_{n\to\infty} \int_0^\infty h_n(x) dx$.

> [!ans]
> Ý a)
> **Tìm giới hạn điểm:**
> Với $x = 0$: $f_{n}(0) = 0 \implies \lim_{ n \to \infty }f_{n}(0) = 0$.
> 
> Với $x \in (0,1]$: Khi $n \to \infty$, bậc của mẫu số ($n^2$) lớn hơn bậc của tử 
> số ($n$), do đó: $\lim_{ n \to \infty } \frac{n \sqrt{ x }}{1 + n^{2}x^{2}} = 0$.
> 
> Vậy $f_{n}(x) \to f(x) = 0$ a.e trên $[0,1]$.
> 
> **Tìm hàm trội:**
> Coi $x$ là hằng số, ta khảo sát $f_{n}(x)$ theo biến $n$:
> 
> Đặt $t = n$, với $t >0$, ta có $f(t) = \frac{t \sqrt{ x }}{1 + t^{2}x^{2}}$.
> 
> Đạo hàm theo biến $t$: $f'(t) = \frac{\sqrt{ x }(1 - t^{2} x^{2})}{(1 + t^{2} x^{2})^{2}}$.
> 
> Cho $f'(t) = 0$, ta được $1 - t^{2} x^{2} = 0$ hay $t = \frac{1}{x}$, với $t, x >0$.
> 
> Vậy $f(t)$ đạt giá trị lớn nhất tại $f\left(\frac{1}{x}\right) = \frac{\frac{1}{x} \cdot \sqrt{x}}{1 + \left(\frac{1}{x}\right)^2 \cdot x^2} = \frac{1}{2\sqrt{x}}$. 
> 
> Ta có ${}  0 \le f_{n}(x) \le g(x) {}$ với $g(x) = \frac{1}{2\sqrt{x}}$, và ta có $\int_0^1 g(x) \, dx = \int_0^1 \frac{1}{2\sqrt{x}} \, dx = 1 < \infty$.
> 
> Áp dụng DCT cho $f_{n}(x) \to 0$ a.e và bị chặn bởi hàm khả tích $g(x) = \frac{1}{2\sqrt{x}}$, ta có:
> $$
> \lim_{n\to\infty} \int_0^1 f_n(x) \, dx = \int_0^1 \left(\lim_{n\to\infty} f_n(x)\right) dx = \int_0^1 0 dx = 0
> $$
>
> Ý b)
> **Tìm giới hạn điểm:**
> Với $x \in (0,1]$, ta viết lại: 
> $$
> g_{n}(x) = \frac{1}{x^{3/2}} \cdot \left[ \frac{\ln\left(1 + \frac{x}{n}\right)}{\frac{1}{n}} \right]
> $$
> 
> Sử dụng L'Hospital, ta được: 
> $$
> \lim_{n\to\infty} g_n(x) =  \frac{1}{x^{3/2}} \cdot \lim_{n\to\infty} \left[ \frac{\ln\left(1 + \frac{x}{n}\right)}{\frac{1}{n}} \right] = \frac{1}{x^{3/2}} \cdot \frac{x}{1 + \frac{x}{n}} = \frac{1}{\sqrt{x}}
> $$
> Vậy $g_{n}(x) \to g(x) = \frac{1}{\sqrt{x}}$ a.e trên $(0, 1]$.
>
> **Tìm hàm trội:**
> Coi $x$ là hằng số, ta khảo sát ${} g_{n}(x)$ theo biến $n$:
>
> Đặt $t = n$, với $t >1$, ta xét $g(t) = \frac{t}{x^{3/2}} \ln \left( 1 + \frac{x}{t} \right)$.
> 
> Đạo hàm theo biến $t$: $g'(t) =  \frac{1}{x^{3/2}} \left[ \ln\left( 1+\frac{x}{t} \right) - \frac{x}{t+x} \right]$
> 
> Ta chứng minh được đạo hàm $g'(t) \ge 0$ với mọi $t> 1$. Vậy $g(t)$ là hàm đồng biến, ta có:
> $$
> \lim_{t \to \infty} g(t) = \lim_{t \to \infty} \frac{1}{x^{3/2}} \left[ \frac{\ln\left(1 + \frac{x}{t}\right)}{\frac{1}{t}} \right]
> $$
> 
> Sử dụng L'Hospital, ta được:
> $$
> \frac{1}{x^{3/2}} \cdot \lim_{t \to \infty} \left[ \frac{\ln\left(1 + \frac{x}{t}\right)}{\frac{1}{t}} \right] = \frac{1}{x^{3/2}} \cdot \frac{x}{1 + \frac{x}{t}} = \frac{1}{\sqrt{ x }}
> $$
>
> Vậy $0 \le g_{n}(x) \le g^{(1)}(x) =\frac{1}{\sqrt{ x }}$, và ta có $\int_0^1 \frac{1}{\sqrt{x}} dx = 2 < \infty$
> 
> Áp dụng DCT cho $g_{n}(x) \to g(x) = \frac{1}{\sqrt{x}}$ a.e với hàm hàm trội khả tích tìm được $g^{(1)}(x) = \frac{1}{\sqrt{ x }}$, ta có: 
> $$
> \lim_{n\to\infty} \int_0^1 g_n(x) dx = \int_0^1 \left(\lim_{n\to\infty} g_n(x)\right) dx = \int_0^1 \frac{1}{\sqrt{x}} dx = 2
> $$
>
> Ý c)
> **Tìm giới hạn điểm:**
> Với $x \in (0, \infty)$, ta có $\lim_{ n \to \infty } \sin\left( \frac{x}{n} \right) = 0$ nên $\lim_{ n \to \infty } \frac{1}{x^{3/2}} \cdot \sin\left( \frac{x}{n} \right) = 0$.
> 
> Vậy $h_{n}(x) \to h(x) = 0$ a.e trên $x \in (0, \infty)$.
>
> **Tìm hàm trội:**
> Ta sẽ sử dụng hai đánh giá: $\sin(x) \le x$ với $x \in [0,1)$ và $\sin(x) \le 1$ với $x \to \infty$.
> Với $x \in [0,1)$, ta có:
> $$
> |h_n(x)| = \frac{1}{x^{3/2}} \left|\sin\left(\frac{x}{n}\right)\right| \le \frac{1}{x^{3/2}} \cdot \frac{x}{n} = \frac{1}{n\sqrt{x}} \le \frac{1}{\sqrt{x}}
> $$
> Và $\frac{1}{\sqrt{ x }}$ là hàm khả tích trên $[0,1)$ (Chứng minh ở trên).
>
> Với $x \in (1, \infty)$, ta có:
> $$
> |h_n(x)| = \frac{1}{x^{3/2}} \left|\sin\left(\frac{x}{n}\right)\right| \le \frac{1}{x^{3/2}} \cdot 1 = \frac{1}{x^{3/2}}
> $$
> Và $\frac{1}{x^{3/2}}$ khả tích trên $(1, +\infty)$ vì $\int_1^\infty x^{-3/2} \, dx = \left[ -2x^{-1/2} \right]_1^\infty = 2 < \infty$.
>
> Vậy $|h_{n}(x)| \le g^{(2)}(x) = \frac{1}{\sqrt{ x }} + \frac{1}{x^{3/2}}$ , với $g^{(2)}(x)$ là tổng hai hàm khả tích nên là một hàm khả tích.
>
> Áp dụng DCT cho $h_{n}(x) \to h(x) = 0$ a.e với hàm trội khả tích tìm được $g^{(2)}(x) = \frac{1}{\sqrt{ x }} + \frac{1}{x^{3/2}}$, ta có:
> $$
> \lim_{n\to\infty} \int_0^\infty h_n(x) dx = \int_0^{\infty} \left(\lim_{n\to\infty} h_n(x)\right) dx = \int_{0}^{\infty} 0 dx = 0 
> $$

> [!thm] (Prob 9.47: Tích phân hàm không âm tương đương Tích phân suy rộng Riemann)
> Cho $f(x) \ge 0$ và liên tục trên $[0, \infty)$. Giả sử tích phân Riemann suy rộng $\int_0^\infty f(x)\,dx$ tồn tại hữu hạn. Chứng minh:
> $$\int_{[0, \infty)} f \, d\mu_L = \int_0^\infty f(x)\,dx$$

> [!prf]
> Xây dựng dãy hàm chặt cụt: Với mỗi $n \in \mathbb{N}^*$, xét dãy hàm:
> $$f_n(x) = \begin{cases} f(x) & \text{nếu } 0 \le x \le n \\ 0 & \text{nếu } x > n \end{cases}$$
> 
> Kiểm tra điều kiện MCT: Do $f(x) \ge 0$ và liên tục, dãy hàm $f_n(x)$ thỏa mãn:
> - Không âm: $f_n(x) \ge 0$ với mọi $x$.
> - Đơn điệu tăng: $f_n(x) \le f_{n+1}(x)$ với mọi $x$ (do miền xác định chứa $f(x)$ được nới rộng).
> - Hội tụ điểm: Với mọi $x \in [0, \infty)$, khi $n \to \infty$ thì $f_n(x) \to f(x)$.
> 
> Áp dụng Định lý Hội tụ Đơn điệu (MCT):
> $$\int_{[0, \infty)} f \, d\mu_L = \lim_{n \to \infty} \int_{[0, \infty)} f_n \, d\mu_L$$
> 
> Chuyển đổi từ Lebesgue sang Riemann:
> Vì $f_n(x) = 0$ khi $x > n$, tích phân trên miền vô hạn được thu về đoạn hẹp $[0, n]$:
> $$\int_{[0, \infty)} f_n \, d\mu_L = \int_{[0, n]} f \, d\mu_L$$
> Do $f(x)$ liên tục trên đoạn đóng $[0, n]$ nên nó cũng bị chặn (hàm liên tục trên tập compact), Áp dụng Định lý 7.27, ta có tích phân Lebesgue trùng với tích phân Riemann:
> $$\int_{[0, n]} f \, d\mu_L = \int_0^n f(x)\,dx$$
> Đẳng thức trở thành:
> $$\int_{[0, \infty)} f \, d\mu_L = \lim_{n \to \infty} \int_0^n f(x)\,dx = \int_0^\infty f(x)\,dx$$
> Chứng minh hoàn tất. 

> [!prob] (Prob 9.48)
> Chứng minh các đẳng thức sau:
> a) $\int_{[0,\infty)} xe^{-x^{2}} \mu_{L}(dx) = \frac{1}{2}$.
> 
> b) $\int_{[0,\infty)} e^{-x^{2}} \mu_{L}(dx) < \infty$.
> 
> c) $\lim_{ n \to \infty } \int_{[0,\infty)} e^{-nx^{2}} \cdot\sin (nx) \mu_{L}(dx) = 0$

> [!ans]
> Ý a)
> Vì $xe^{-x^{2}}$ là hàm liên tục không âm trên $[0,\infty)$, áp dụng Prob 9.47, ta có Tích phân hàm không âm trùng với Tích phân suy rộng Riemann:
> $$
> \int_{[0, \infty)} xe^{-x^{2}}d\mu_L = \int_0^\infty xe^{-x^{2}}dx
> $$
> 
> Đặt $u = x^{2} \implies du = 2x dx$ hay $xdx = \frac{1}{2}du$. Đổi cận: $x \to 0$ thì $u \to 0$ và $x \to \infty$ thì $u \to \infty$. Ta có tích phân trở thành:
> $$
> \int_0^\infty \frac{1}{2} e^{-u} \, du = \left[ -\frac{1}{2} e^{-u} \right]_0^\infty = 0 - \left(-\frac{1}{2}\right) = \frac{1}{2}
> $$
> Vậy $xe^{-x^{2} }$ khả tích trên $[0,\infty)$ và có tích phân bằng ${} \frac{1}{2}$.
> 
> Ý b) 
> Ta lập luận tương tự câu a) để có đươc:
> $$
> \int_{[0, \infty)} e^{-x^2}d\mu_L = \int_0^\infty e^{-x^2}dx
> $$
> Với $x \in [0,1]$, ta có $e^{-x^{2}}$ là hàm liên tục nên bị chặn, cụ thể $e^{-x^{2}} \le e^{-x} \le 1$. Khi đó tích phân bị chặn bởi $\int_{0}^{1} 1dx  = 1 <\infty$
>
> Với $x \in [1, \infty)$, ta có $e^{-x^{2}} \le xe^{-x^{2}}$, ta cũng đã chứng minh ở ý a) $\int_{[0,\infty)} xe^{-x^{2}} \mu_{L}(dx) = \frac{1}{2}$.
> 
> Vậy ta kết luận tích phân $\int_{[0,\infty)} e^{-x^{2}} \mu_{L}(dx)$ có giá trị hữu hạn.
>
> Ý c)
> **Tìm giới hạn điểm:**
> Đặt $f_{n}(x) =e^{-nx^2} \sin(nx)$. Với $x = 0$, ta có $f_{n}(0) = e^{0}\cdot \sin(0) = 0$.
> 
> Với $x \in (0, \infty)$, ta có $e^{-nx^{2}} \to 0$ khi $n \to \infty$. Và vì $|\sin(nx)| \le 1$, ta suy ra: 
> $$
> \lim_{n\to\infty} e^{-nx^2} \sin(nx) = 0
> $$
> Vậy $f_{n}(x) \to f(x) = 0$ a.e trên $[0,\infty)$
> 
> **Tìm hàm trội:**
> Ta sử dụng đánh giá $|\sin(nx)| \le 1$ và $e^{-nx^{2}} \le e^{-x^{2}}$ với $n >1$. Kết hợp lại, ta được:
> $$
> |f_{n}(x)| \le |e^{-nx^{2}}| \cdot |\sin(nx)| \le |e^{-x^{2}}| 
> $$
> 
> Mà ta có $e^{-x^{2}}$ là một hàm khả tích trên $[0, \infty)$ theo ý b). Ta áp dụng DCT cho $f_{n}(x) \to f(x) = 0$ với hàm trội khả tích $g(x) = e^{-x^{2}}$ vừa tìm được:
> $$
> \lim_{n\to\infty} \int_{[0,\infty)} f_{n}(x) \mu_L(dx) = \int_{[0,\infty)} \left( \lim_{n\to\infty} f_{n}(x) \right) \mu_L(dx) = \int_{[0,\infty)} 0 \, \mu_L(dx) = 0
> $$

> [!prob] (Prob 9.30)
> Với $0 < a < b$, xét dãy hàm số $(f_n : n \in \mathbb{N})$ xác định trên $[0, \infty)$ bởi:
> $$f_n(x) = ae^{-nax} - be^{-nbx}$$
> (a) Chứng minh rằng $\int_{[0, \infty)} f_n \, d\mu_L = 0$ với mọi $n \in \mathbb{N}$, từ đó suy ra $\sum_{n \in \mathbb{N}} \int_{[0, \infty)} f_n \, d\mu_L = 0$.
> 
> (b) Tính $\int_{[0, \infty)} |f_n| \, d\mu_L$ với mỗi $n \in \mathbb{N}$.
> 
> (c) Chứng minh rằng $\sum_{n \in \mathbb{N}} \int_{[0, \infty)} |f_n| \, d\mu_L = \infty$.
> 
> (d) Tính tổng chuỗi hàm $\sum_{n \in \mathbb{N}} f_n$.
> 
> (e) Chứng minh rằng tích phân Lebesgue của hàm tổng $\int_{[0, \infty)}  \sum_{n \in \mathbb{N}} f_n  d\mu_L$ không tồn tại hữu hạn.

> [!prf] 
> 
> Ý a)
> Với mỗi chỉ số $n \in \mathbb{N}$ cố định, ta tách $f_n(x)$ thành hiệu của hai hàm thành phần:
> $$f_n(x) = g_n(x) - h_n(x) \quad \text{với } g_n(x) = ae^{-nax}, \ h_n(x) = be^{-nbx}$$
> 
> Với $b > a > 0$, cả hai hàm số $g_n(x)$ và $h_n(x)$ đều là các hàm số liên tục và không âm trên  $[0, \infty)$. 
> 
> Ta tích được tích phân Riemann suy rộng của các hàm thành phần:
> $$\int_0^\infty g_n(x) \, dx = \int_0^\infty ae^{-nax} \, dx = \left[ -\frac{1}{n} e^{-nax} \right]_0^\infty = \frac{1}{n} < \infty$$
> $$\int_0^\infty h_n(x) \, dx = \int_0^\infty be^{-nbx} \, dx = \left[ -\frac{1}{n} e^{-nbx} \right]_0^\infty = \frac{1}{n} < \infty$$
> 
> Áp dụng Prob 9.47, ta có tích phân Lebesgue của hàm thành phần trên $[0, \infty)$ tồn tại hữu hạn và bằng tích phân Riemann suy rộng tương ứng:
> $$\int_{[0, \infty)} g_n \, d\mu_L = \frac{1}{n} \quad \text{và} \quad \int_{[0, \infty)} h_n \, d\mu_L = \frac{1}{n}$$
> 
> Sử dụng tính tuyến tính của tích phân Lebesgue, ta có:
> $$\int_{[0, \infty)} f_n \, d\mu_L = \int_{[0, \infty)} g_n \, d\mu_L - \int_{[0, \infty)} h_n \, d\mu_L = \frac{1}{n} - \frac{1}{n} = 0$$
> 
> Vậy với $n \in \mathbb{N}$:
> $$\sum_{n \in \mathbb{N}} \int_{[0, \infty)} f_n \, d\mu_L  = \sum_{n=1}^\infty 0 = 0$$
> 
> Ý b)
> Xét dấu: $f_n(x) \ge 0 \iff ae^{-nax} \ge be^{-nbx} \iff e^{n(b-a)x} \ge \frac{b}{a} \iff x \ge \frac{\ln(b/a)}{n(b-a)} \equiv x_n$.
> Ta tách cận tại $x_n$ và tính tích phân suy rộng Riemann:
> $$\int_0^\infty |f_n(x)| \, dx = \lim_{M\to\infty} \left( \int_0^{x_n} -f_n(x) \, dx + \int_{x_n}^M f_n(x) \, dx \right)$$
> 
> Áp dụng công thức Newton-Leibniz trên từng đoạn hữu hạn:
> $$
> \begin{align}
> \int_0^\infty |f_n(x)| \, dx &=  \lim_{M\to\infty} \left( -\Big[F_n(x_n) - F_n(0)\Big] + \Big[F_n(M) - F_n(x_n)\Big] \right)  \\
> &= \lim_{M\to\infty} \left( -2F_n(x_n) + F_n(M) \right)
> \end{align}
> $$
> Với nguyên hàm $F_n(x) = \frac{1}{n}(e^{-nbx} - e^{-nax})$, ta có:
> $$
> \lim_{M\to\infty} F_n(M) = \lim_{M\to\infty} \left( -\frac{1}{n}e^{-naM} + \frac{1}{n}e^{-nbM} \right) = 0 + 0 = 0
> $$
> Vậy:
> $$
> \int_0^\infty |f_n(x)| \, dx = -2F_n(x_n) + 0 = -2F_n(x_n) < \infty
> $$
> Ta có $|f_n(x)|$ là hàm số không âm và liên tục trên $[0, \infty)$, đồng thời tích phân Riemann suy rộng $\int_0^\infty |f_n(x)| \, dx$ tồn tại hữu hạn. 
> 
> Áp dụng Prob 9.47, ta có tích phân Lebesgue của $|f_n|$ trên $[0, \infty)$ tồn tại và bằng chính tích phân Riemann suy rộng của nó:
> $$
> \int_{[0, \infty)} |f_{n}| \, d\mu_L = \int_0^\infty |f_{n}(x)| \, dx = -2F_n(x_n) = \frac{2}{n} \left( e^{-nax_n} - e^{-nbx_n} \right)
> $$
> 
> Ý c)
> Từ kết quả ý b), ta có tích phân Lebesgue trị tuyệt đối của mỗi số hạng là:
> $$\int_{[0, \infty)} |f_n| \, d\mu_L = \frac{2}{n} \left( e^{-nax_n} - e^{-nbx_n} \right)$$
> 
> Thay $x_n = \frac{\ln(b/a)}{n(b-a)}$, hay $n x_n = \frac{\ln(b/a)}{b-a}$ vào mũ:
> - $e^{-nax_n} = \left( e^{\ln(b/a)} \right)^{-\frac{a}{b-a}} = \left( \frac{b}{a} \right)^{-\frac{a}{b-a}} = \left( \frac{a}{b} \right)^{\frac{a}{b-a}}$
> - $e^{-nbx_n} = \left( e^{\ln(b/a)} \right)^{-\frac{b}{b-a}} = \left( \frac{b}{a} \right)^{-\frac{b}{b-a}} = \left( \frac{a}{b} \right)^{\frac{b}{b-a}}$
> 
> Đặt $C(a,b) = \left( \frac{a}{b} \right)^{\frac{a}{b-a}} - \left( \frac{a}{b} \right)^{\frac{b}{b-a}}$. Với $0 < a < b$, ta viết lại:
> $$\int_{[0, \infty)} |f_n| \, d\mu_L = \frac{2}{n} \cdot C(a,b)$$
> 
> Ta có tổng vô hạn của chuỗi tích phân trị tuyệt đối này:
> $$\sum_{n \in \mathbb{N}} \int_{[0, \infty)} |f_n| \, d\mu_L = \sum_{n=1}^\infty \frac{2}{n} \cdot C(a,b) = 2C(a,b) \sum_{n=1}^\infty \frac{1}{n}$$
> 
> Vì $\sum_{n=1}^\infty \frac{1}{n} \to \infty$, ta suy ra:
> $$\sum_{n \in \mathbb{N}} \int_{[0, \infty)} |f_n| \, d\mu_L = \infty$$
> 
> Ý d)
> Ta cần xác định hàm tổng giới hạn điểm $f(x) = \sum_{n \in \mathbb{N}} f_n(x)$ trên miền $[0, \infty)$.
> 
> - Tại $x = 0$:
>   $$f_n(0) = ae^0 - be^0 = a - b$$
>   Do $a < b \implies a - b \neq 0$, chuỗi tổng tại điểm 0 là chuỗi hằng số số hạng khác không nên phân kỳ:
>   $$\sum_{n=1}^\infty f_n(0) = \sum_{n=1}^\infty (a - b) = -\infty$$
> 
> - Tại $x > 0$:
>   Vì $a, b > 0$ và $x > 0 \implies e^{-ax} < 1$ và $e^{-bx} < 1$. Ta tách chuỗi thành hiệu của hai chuỗi cấp số nhân lùi vô hạn hội tụ:
>   $$\sum_{n \in \mathbb{N}} f_n(x) = a \sum_{n=1}^\infty \left( e^{-ax} \right)^n - b \sum_{n=1}^\infty \left( e^{-bx} \right)^n$$
> 
>   Áp dụng công thức tổng cấp số nhân lùi vô hạn $\sum_{n=1}^\infty q^n = \frac{q}{1-q}$, ta có:
>   $$\sum_{n \in \mathbb{N}} f_n(x) = a \cdot \frac{e^{-ax}}{1 - e^{-ax}} - b \cdot \frac{e^{-bx}}{1 - e^{-bx}}$$
> 
>   Nhân cả tử và mẫu của phân số thứ nhất với $e^{ax}$ và phân số thứ hai với $e^{bx}$ để thu gọn:
>   $$\sum_{n \in \mathbb{N}} f_n(x) = \frac{a}{e^{ax} - 1} - \frac{b}{e^{bx} - 1}$$
> 
> Vậy hàm tổng chuỗi hội tụ hầu khắp nơi (trên khoảng $(0, \infty)$) về hàm số:
> $$f(x) = \frac{a}{e^{ax} - 1} - \frac{b}{e^{bx} - 1}$$
> 
> Ý e)
> Đặt $S(x) = \sum_{n=1}^\infty f_n(x)$ là hàm tổng đã tìm được ở ý d). Trên khoảng $(0, \infty)$, ta có:
> $$S(x) = \frac{ae^{-ax}}{1 - e^{-ax}} - \frac{be^{-bx}}{1 - e^{-bx}}$$
> 
> Ta tìm được nguyên hàm của hàm thàn phần:
> $$\int \frac{ae^{-ax}}{1-e^{-ax}} \, dx = \ln(1 - e^{-ax}) \quad \text{và} \quad \int \frac{be^{-bx}}{1-e^{-bx}} \, dx = \ln(1 - e^{-bx})$$
> 
> Áp dụng công thức Newton-Leibniz trên đoạn đóng:
> $$\int_0^M S(x) \, dx = \left[ \ln(1 - e^{-ax}) - \ln(1 - e^{-bx}) \right]_0^M = \left[ \ln\left( \frac{1 - e^{-ax}}{1 - e^{-bx}} \right) \right]_0^M$$
> 
> Thế cận dưới ($x \to 0^+$) và sử dụng khai triển Taylor $1 - e^{-tx} \sim tx$, ta có:
>   $$\lim_{x \to 0^+} \ln\left( \frac{1 - e^{-ax}}{1 - e^{-bx}} \right) = \lim_{x \to 0^+} \ln\left( \frac{ax}{bx} \right) = \ln\left(\frac{a}{b}\right) < \infty$$
> Thế cận trên ($x = M$), ta được $\ln\left( \frac{1 - e^{-aM}}{1 - e^{-bM}} \right)$.
> 
> Ta tính tích phân suy rộng:
> $$\int_0^\infty S(x) \, dx = \lim_{M \to \infty} \ln\left( \frac{1 - e^{-aM}}{1 - e^{-bM}} \right) - \ln\left(\frac{a}{b}\right) = \ln\left(\frac{1}{1}\right) - \ln\left(\frac{a}{b}\right) = \ln\left(\frac{b}{a}\right)$$
> 
> Ta thu được kết quả tích phân suy rộng Riemann là một số thực hữu hạn:
> $$\int_0^\infty S(x) \, dx = \ln\left(\frac{b}{a}\right) < \infty$$
> 
> Đối chiếu với kết quả chuỗi tích phân ở câu a):
> $$\int_{[0, \infty)}  \sum_{n \in \mathbb{N}} f_n  d\mu_L = \ln\left(\frac{b}{a}\right) \neq 0 = \sum_{n \in \mathbb{N}} \int_{[0, \infty)} f_n \, d\mu_L$$
> 
> **Kết luận:** Do vi phạm điều kiện hội tụ tuyệt đối ở ý c), ta không thể hoán đổi toán tử tích phân Lebesgue với chuỗi tổng vô hạn **(Xem Prob 9.29)**.

> [!prob]  (Prob 9.50)
> Cho $f$ là hàm đo được Lebesgue và nhận giá trị thực mở rộng trên $(0, \infty)$, cho bởi: 
> $$
> f(x) = \frac{1}{1 + x^2} \ln(1 - e^{-x}), \quad x \in (0, \infty).
> $$  
> Chứng minh rằng $f$ khả tích đối với $\mu_{L}$ và đưa ra đánh giá cho $\int_{(0,\infty)} f \, d\mu_L$

> [!ans] 
> Ta có $0 < e^{-x} < 1$, dẫn đến $0 < 1 - e^{-x} < 1$ dẫn tới $\ln(1 - e^{-x}) < 0$ . Vì $\frac{1}{1+x^{2}} > 0$, nên $f(x)$ không đổi dấu và luôn âm ($f < 0$), ta xét hàm trị tuyệt đối :
> $$|f(x)| = -\frac{1}{1 + x^2} \ln(1 - e^{-x})$$
> 
> Ta áp dụng khai triển Taylor cho hàm $\ln(1 - y) = -\sum_{n=1}^\infty \frac{y^n}{n}$ với $|y| < 1$. Đồng nhất $y = e^{-x}$ (thỏa mãn $0 < e^{-x} < 1$), ta thu được dạng chuỗi vô hạn:
> $$|f(x)| = -\frac{1}{1 + x^2} \left( -\sum_{n=1}^\infty \frac{e^{-nx}}{n} \right) = \sum_{n=1}^\infty \frac{e^{-nx}}{n(1 + x^2)}$$
> 
> Vì mọi số hạng trong tổng đều liên tục và không âm trên $(0, \infty)$, áp dụng Định lý Hội tụ đơn điệu (MCT):
> $$\int_{(0, \infty)} |f| \, d\mu_L = \int_0^\infty \left( \sum_{n=1}^\infty \frac{e^{-nx}}{n(1 + x^2)} \right) dx \stackrel{\text{MCT}}{=} \sum_{n=1}^\infty \frac{1}{n} \int_0^\infty \frac{e^{-nx}}{1 + x^2} \, dx$$
> 
> Ta sử dụng bất đẳng thức $1 + x^2 \ge 1 \implies \frac{1}{1 + x^2} \le 1$. Áp dụng tính đơn điệu của tích phân:
> $$\int_0^\infty \frac{e^{-nx}}{1 + x^2} \, dx < \int_0^\infty e^{-nx} \, dx = \left[ -\frac{1}{n} e^{-nx} \right]_0^\infty = \frac{1}{n}$$
> 
> Thay thế kết quả ước lượng của tích phân vào tổng chuỗi ở trên:
> $$\int_{(0, \infty)} |f| \, d\mu_L < \sum_{n=1}^\infty \frac{1}{n} \cdot \frac{1}{n} = \sum_{n=1}^\infty \frac{1}{n^2}$$
> 
> Ta được chuỗi số $p$-series ($p=2$), là chuỗi vô hạn hội tụ về $\frac{\pi ^{2}}{6}$. Vậy tích phân cần đánh giá:
> $$\int_{(0, \infty)} |f| \, d\mu_L < \frac{\pi^2}{6} < \infty$$
> 
> Vì $\int |f| \, d\mu_L$ hữu hạn, hàm số $f$ khả tích trên $(0, \infty)$ đối với $\mu_{L}$ ($f \in L^1$). 
> 
> Vì $f< 0$ nên tích phân của hàm luôn nhỏ hơn 0, ta thu được ước lượng cho tích phân:
> $$-\frac{\pi^2}{6} < \int_{(0, \infty)} f \, d\mu_L < 0$$

> [!prob] (Prob 9.49)
> Cho tích phân Riemann suy rộng $\int_{-\infty}^{\infty} \frac{1}{\sqrt{\pi}} \exp\{-x^2\} \, dx = 1$ kéo theo tích phân Lebesgue tương ứng bằng $1$:
> $$\int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp\{-x^2\} \, \mu_L(dx) = 1$$
>
> a) Chứng minh rằng với mọi $v > 0$ và $m \in \mathbb{R}$, ta luôn có:
> $$\int_{\mathbb{R}} \frac{1}{\sqrt{2\pi v}} \exp \left\{ -\frac{|x-m|^2}{2v} \right\} \mu_L(dx) = 1$$
>
> b) Cho $f: \mathbb{R} \to \mathbb{R}$ là một hàm đo được Lebesgue, bị chặn và liên tục tại điểm $m \in \mathbb{R}$. Chứng minh:
> $$\lim_{v \downarrow 0} \int_{\mathbb{R}} \frac{1}{\sqrt{2\pi v}} \exp \left\{ -\frac{|x-m|^2}{2v} \right\} f(x) \, \mu_L(dx) = f(m)$$

> [!prf] 
> **Chứng minh ý a)**
> 
> Ta sử dụng phương pháp đổi biến số tuyến tính đối với tích phân Lebesgue trên $\mathbb{R}$.
> 
> Đặt biến số mới $z$ sao cho thành phần mũ quay về dạng bình phương cơ bản:
> $$z = \frac{x-m}{\sqrt{2v}} \implies x = \sqrt{2v} \cdot z + m$$
> 
> Do đây là một phép biến đổi tuyến tính (gồm phép vị tự $\sqrt{2v}$ và phép tịnh tiến một khoảng $m$), theo tính chất bất biến đối với tịnh tiến và scale với vị tự, vi phân độ đo thay đổi bằng trị tuyệt đối của hệ số scale:
> $$\mu_L(dx) = \sqrt{2v} \, \mu_L(dz)$$
> 
> Thay các biến mới vào tích phân ban đầu, để ý khi $x$ chạy trên $\mathbb{R}$ thì $z$ cũng chạy trên $\mathbb{R}$:
> $$I_a = \int_{\mathbb{R}} \frac{1}{\sqrt{2\pi v}} \exp \left\{ -z^2 \right\} \cdot \sqrt{2v} \, \mu_L(dz)$$
> 
> Rút gọn biểu thức và đối chiếu với giả thiết đề bài cho:
> $$I_a = \int_{\mathbb{R}} \frac{\sqrt{2v}}{\sqrt{2v} \cdot \sqrt{\pi}} \exp \left\{ -z^2 \right\} \, \mu_L(dz) = \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \left\{ -z^2 \right\} \, \mu_L(dz) = 1$$
> Vậy ý a) được chứng minh hoàn tất
> 
> **Chứng minh ý (b)**
> 
> **Tìm giới hạn điểm**
> Ta áp dụng phép đổi biến số tương tự như câu (a), viết lại tích phân của kernel nhân với $f(x)$: 
> $$I(v) = \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m + \sqrt{2v} \cdot z) \, \mu_L(dz)$$
> 
> Xét dãy hàm số theo tham số $v$ biến độc lập $z$:
> $$h_v(z) = \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m + \sqrt{2v} \cdot z)$$
> Khi cho $v \downarrow 0$, do hàm số $f$ liên tục tại điểm $m$, ta có giới hạn điểm với mọi $z \in \mathbb{R}$:
> $$\lim_{v \downarrow 0} f(m + \sqrt{2v} \cdot z) = f(m + 0) = f(m)$$
> Do đó, dãy hàm $h_v(z)$ hội tụ điểm về hàm ${} h(z) {}$:
> $$ h(z) = \lim_{v \downarrow 0} h_v(z) = \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m)$$
> 
> **Tìm hàm trội**
> Theo giả thiết, hàm $f$ bị chặn trên $\mathbb{R}$: $f(x) < M$, ta có :
> $$|h_v(z)| = \frac{1}{\sqrt{\pi}} \exp \{-z^2\} |f(m + \sqrt{2v} \cdot z)| \le \frac{M}{\sqrt{\pi}} \exp \{-z^2\} := g(z)$$
> 
> Ta có ${} g(z) = \frac{M}{\sqrt{\pi}} \exp \{-z^2\}$ là một hàm không âm và khả tích trên $\mathbb{R}$, vì:
> $$\int_{\mathbb{R}} g(z) \, \mu_L(dz) = M \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} \, \mu_L(dz) = M \cdot 1 = M < \infty$$
> 
> Áp dụng Định lý Hội tụ Bị chặn (DCT) cho $h_{v}(z) \to h(z)$ với hàm trội khả tích ${} g(z) {}$ vừa tìm được, ta có:
> $$\lim_{v \downarrow 0} I(v) = \int_{\mathbb{R}} \left( \lim_{v \downarrow 0} h_v(z) \right) \mu_L(dz) = \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m) \, \mu_L(dz)$$
> 
> Vì $f(m)$ lúc này là một hằng số không phụ thuộc vào biến $z$, đưa $f(m)$ ra ngoài:
> $$\lim_{v \downarrow 0} I(v) = f(m) \cdot \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} \, \mu_L(dz)$$
> 
> Dựa vào giả thiết đề bài, ta thu được kết quả cuối cùng:
> $$\lim_{v \downarrow 0} I(v) = f(m) \cdot 1 = f(m)$$
> Vậy ý b) được chứng minh hoàn tất.












$\xi$
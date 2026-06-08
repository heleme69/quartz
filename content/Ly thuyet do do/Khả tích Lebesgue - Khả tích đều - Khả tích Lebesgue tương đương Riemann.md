# 1. Khả tích Lebesgue
> [!rem] Nhắc lại không gian $L^1$
> Ký hiệu ${} L^1(D, \mu) {}$ (hoặc viết gọn là ${} L^1(D) {}$) đại diện cho tập hợp (không gian) tất cả các hàm số đo được và khả tích Lebesgue trên $D$ đối với độ đo $\mu$.

> [!def] (Khả tích Lebesgue)
> Cho một không gian đo $(X, \mathfrak{A}, \mu)$ và một tập ${} D \in \mathfrak{A} {}$. Giả sử $f: D \to \overline{\mathbb{R}}$ là một hàm đo được nhận giá trị thực mở rộng.
> 
> Gọi $f^+$ và $f^-$ lần lượt là phần dương và phần âm của hàm $f$ ($f = f^+ - f^-$ với $f^+, f^- \ge 0$).
> 
> 1. Tính bán khả tích (Semi-integrable):
>    Nếu biểu thức $\int_D f^+ d\mu - \int_D f^- d\mu$ tồn tại trong tập số thực mở rộng $\overline{\mathbb{R}}$ (tức là không rơi vào dạng vô định $\infty - \infty$), thì ta nói $f$ là **bán khả tích Lebesgue** trên $D$ đối với độ đo $\mu$.
>    Khi đó, tích phân của $f$ trên $D$ được định nghĩa là:
>    $$\int_D f d\mu = \int_D f^+ d\mu - \int_D f^- d\mu$$
> 
> 2. Tính khả tích (Integrable):
>    Ta nói $f$ khả tích Lebesgue trên $D$ đối với độ đo $\mu$, ký hiệu là **$f \in \mathfrak{L}^1(D, \mu)$**, khi và chỉ khi:
>    $$\int_D f d\mu \in \mathbb{R}$$
>    *(Điều này xảy ra khi và chỉ khi cả hai tích phân thành phần đều hữu hạn, tương đương với điều kiện kiện khả tích tuyệt đối: $\int_D |f| d\mu < \infty$).*

# 2. Khả tích đều

> [!lem] (Tính liên tục tuyệt đối của tích phân Lebesgue)
> Cho $\varphi \in L^1(D, \mathfrak{A}, \mu)$. Khi đó:
> $$\forall \varepsilon > 0, \exists \delta_\varepsilon > 0 : \forall A \in \mathfrak{A}, \mu(A) < \delta_\varepsilon \Rightarrow \int_A |\varphi| < \varepsilon$$

> [!prf] 
> Không mất tính tổng quát, giả sử $\varphi \ge 0$.
> 
> Xét dãy hàm cắt cụt $\varphi_n(x) = \min\{\varphi(x), n\}$. Ta có $0 \le \varphi_n \le n$ (bị chặn) và $\varphi_n \uparrow \varphi$.
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

> [!rem] (Điều kiện cần cho Hội tụ Vitali)
> Tính chất 1: Khả tích đều (Uniform Integrability / Uniform Absolute Continuity)
> Dãy hàm $f_n \subset L^1$ được gọi là khả tích đều nếu:
> $$\forall \varepsilon > 0, \exists \delta_\varepsilon > 0 : \forall A \in \mathfrak{A}, \mu(A) < \delta_\varepsilon \Rightarrow \int_A |f_n| < \varepsilon, \quad \forall n$$
> Tính chất 2: Tính chặt (Tightness)
> Dãy hàm $f_n \subset L^1$ được gọi là một họ chặt nếu:
> $$\forall \varepsilon > 0, \exists B_\varepsilon \in \mathfrak{A} \text{ với } \mu(B_\varepsilon) < \infty \Rightarrow \int_{B_\varepsilon^c} |f_n| < \varepsilon, \quad \forall n$$

> [!thm] (Nhận xét 1: Liên hệ với Định lý Hội tụ bị chặn Lebesgue (Dominated Convergence Theorem - DCT))
> Nếu dãy $f_n$ bị chặn bởi một hàm $g \in L^1$ (tức là $|f_n| \le g$ hầu khắp nơi với mọi $n$), khi đó:
> 1. $f_n$ thỏa mãn Tính chất 1 (Khả tích đều / Uniform Integrability):
> 2. $f_n$ thỏa mãn Tính chất 2 (Tính chặt / Tightness): 
 
> [!prf] 
> Giả sử tồn tại hàm $g \in L^1(D, \mathfrak{A}, \mu)$ sao cho $|f_n| \le g$ với mọi $n$.
> 
> **1. Chứng minh $f_n$ thỏa Tính chất 1:**
> Vì $g \in L^1$, áp dụng Bổ đề về tính liên tục tuyệt đối của tích phân Lebesgue đối với hàm $g$, ta có:
> Với mọi $\varepsilon > 0$, tồn tại $\delta_\varepsilon > 0$ sao cho với mọi tập $A \in \mathfrak{A}$, nếu $\mu(A) < \delta_\varepsilon$ thì:
> $$\int_A g < \varepsilon$$
> Mặt khác, do $|f_n| \le g$ với mọi $n$, tính chất đơn điệu của tích phân cho ta:
> $$\int_A |f_n| \le \int_A g < \varepsilon, \quad \forall n$$
> Điều này chứng tỏ dãy $\{f_n\}$ khả tích đều.
> 
> **2. Chứng minh $f_n$ thỏa Tính chất 2:**
> Tương tự, vì $g \in L^1$, áp dụng Bổ đề về tính "chặt" của tích phân Lebesgue đối với hàm $g$, ta có:
> Với mọi $\varepsilon > 0$, tồn tại tập đo được $B_\varepsilon \in \mathfrak{A}$ có độ đo hữu hạn $\mu(B_\varepsilon) < \infty$ sao cho:
> $$\int_{B_\varepsilon^c} g < \varepsilon$$
> Tương tự như trên, từ giả thiết $|f_n| \le g$, ta suy ra:
> $$\int_{B_\varepsilon^c} |f_n| \le \int_{B_\varepsilon^c} g < \varepsilon, \quad \forall n$$
> Điều này chứng tỏ dãy $\{f_n\}$ thỏa mãn tính chặt.

> [!thm] (Định lý Hội tụ Vitali: Vitali Convergence Theorem)
> Cho $(D, \mathfrak{A}, \mu)$ là một không gian độ đo và dãy hàm $f_n \subset L^1(D, \mathfrak{A}, \mu)$.
> Giả sử các điều kiện sau được thỏa mãn:
> 1. $f_n \to f$ hầu khắp nơi (a.e.) trên $D$.
> 2. $f_n$ thỏa mãn Tính chất 1 (Khả tích đều / Uniform Integrability).
> 3. $f_n$ thỏa mãn Tính chất 2 (Tính chặt / Tightness).
> 
> Khi đó, $f \in L^1(D, \mathfrak{A}, \mu)$ và:
> $$\lim_{n \to \infty} \int_D |f_n - f| d\mu = 0$$

> [!prf] 
> Cho trước $\varepsilon > 0$. Ta sẽ chia không gian $D$ để đánh giá tích phân $\int_D |f_n - f|$.
> 
> **Bước 1: Áp dụng Tính chặt và Định lý Egoroff**
> - Theo Tính chất 2 (Tính chặt), tồn tại tập $B_\varepsilon \in \mathfrak{A}$ với $\mu(B_\varepsilon) < \infty$ sao cho:
>   $$\int_{B_\varepsilon^c} |f_n| < \varepsilon, \quad \forall n$$
> - Theo Tính chất 1 (Khả tích đều), ứng với $\varepsilon > 0$, tồn tại $\delta > 0$ sao cho nếu $\mu(A) < \delta$ thì $\int_A |f_n| < \varepsilon, \forall n$.
> - Xét trên tập $B_\varepsilon$ (có độ đo hữu hạn $\mu(B_\varepsilon) < \infty$) và $f_n \to f$ a.e. Ta áp dụng **Định lý Egoroff**: Tồn tại một tập con $A_\varepsilon \subset B_\varepsilon$ với $\mu(A_\varepsilon) < \delta$ sao cho $f_n \to f$ hội tụ đều trên tập $B_\varepsilon \setminus A_\varepsilon$.
> 
> **Bước 2: Phân tách tích phân cần chứng minh**
> Ta tách tích phân trên toàn không gian $D$ thành 3 phần rời nhau: $B_\varepsilon^c$, $A_\varepsilon$, và $B_\varepsilon \setminus A_\varepsilon$. Sử dụng bất đẳng thức tam giác $|f_n - f| \le |f_n| + |f|$, ta có:
> $$\begin{align*} \int_D |f_n - f| &= \int_{B_\varepsilon^c} |f_n - f| + \int_{A_\varepsilon} |f_n - f| + \int_{B_\varepsilon \setminus A_\varepsilon} |f_n - f| \\ &\le \int_{B_\varepsilon^c} |f_n| + \int_{B_\varepsilon^c} |f| + \int_{A_\varepsilon} |f_n| + \int_{A_\varepsilon} |f| + \int_{B_\varepsilon \setminus A_\varepsilon} |f_n - f| \end{align*}$$
> 
> **Bước 3: Đánh giá từng thành phần**
> Dùng Bổ đề Fatou cho hàm không âm, ta biết rằng $\int_E |f| \le \liminf_{k \to \infty} \int_E |f_k|$ với mọi tập đo được $E$.
> 1. Trên $B_\varepsilon^c$:
>    - $\int_{B_\varepsilon^c} |f_n| < \varepsilon$ (do Tính chất 2).
>    - $\int_{B_\varepsilon^c} |f| \le \liminf \int_{B_\varepsilon^c} |f_k| \le \varepsilon$.
> 2. Trên $A_\varepsilon$:
>    - Do $\mu(A_\varepsilon) < \delta$, $\int_{A_\varepsilon} |f_n| < \varepsilon$ (do Tính chất 1).
>    - $\int_{A_\varepsilon} |f| \le \liminf \int_{A_\varepsilon} |f_k| \le \varepsilon$.
> 3. Trên $B_\varepsilon \setminus A_\varepsilon$:
>    - Do $f_n \to f$ hội tụ đều trên tập này, ta có:
>    $$\int_{B_\varepsilon \setminus A_\varepsilon} |f_n - f| \le \mu(B_\varepsilon \setminus A_\varepsilon) \cdot \sup_{B_\varepsilon \setminus A_\varepsilon} |f_n - f|$$
>    Vì $\mu(B_\varepsilon \setminus A_\varepsilon) \le \mu(B_\varepsilon) < \infty$, khi $n \to \infty$, đại lượng $\sup |f_n - f| \to 0$, kéo theo cả tích phân này tiến về 0.
> 
> **Bước 4: Kết luận**
> Lấy limsup hai vế khi $n \to \infty$:
> $$\limsup_{n \to \infty} \int_D |f_n - f| \le \varepsilon + \varepsilon + \varepsilon + \varepsilon + 0 = 4\varepsilon$$
> Vì $\varepsilon > 0$ là tùy ý, ta cho $\varepsilon \to 0$ và thu được:
> $$\lim_{n \to \infty} \int_D |f_n - f| = 0$$
> Kéo theo $\int_D |f| \le \int_D |f_n - f| + \int_D |f_n| < \infty$, tức là $f \in L^1$. Chứng minh hoàn tất.

> [!rem] (Nhận xét 2: Tính chặt trên không gian độ đo hữu hạn)
> Nếu không gian toàn phần $D$ có độ đo hữu hạn (tức là $\mu(D) < \infty$), thì **Tính chất 2** (Tính chặt) luôn hiển nhiên đúng với mọi dãy hàm $f_n \subset L^1$.

> [!prf]
> Với mọi $\varepsilon > 0$, ta chọn tập $B_\varepsilon = D$. 
> Khi đó $\mu(B_\varepsilon) = \mu(D) < \infty$ và tập bù $B_\varepsilon^c = \emptyset$. Do đó:
> $$\int_{B_\varepsilon^c} |f_n| = \int_{\emptyset} |f_n| = 0 < \varepsilon, \quad \forall n$$

> [!thm] (Phản ví dụ: Điều kiện Vitali mạnh hơn Hội tụ bị chặn Lebesgue)
> Ta sẽ xây dựng một dãy $\{f_n\}$ thỏa mãn cả Tính chất 1 (Khả tích đều) và Tính chất 2 (Tính chặt) nhưng không tồn tại bất kỳ hàm trội $g \in L^1$ nào sao cho $|f_n| \le g, \forall n$.
> 
> Xét không gian $\mathbb{R}$ với độ đo Lebesgue. Khởi tạo dãy hàm sau:
> $$f_n = n \cdot \mathbf{1}_{\left[\frac{1}{n}, \frac{1}{n} + \frac{1}{n^2}\right)}$$
> 
> **1. Kiểm tra Tính chất 1 và 2:**
> Ta tính tích phân của $f_n$ trên toàn không gian:
> $$\int_{\mathbb{R}} |f_n| = n \cdot \mu\left( \left[\frac{1}{n}, \frac{1}{n} + \frac{1}{n^2}\right) \right) = n \cdot \frac{1}{n^2} = \frac{1}{n}$$
> Vì $\lim_{n \to \infty} \int_{\mathbb{R}} |f_n| = \lim_{n \to \infty} \frac{1}{n} = 0$, khối lượng của các hàm này tự triệt tiêu về $0$. Có thể dễ dàng suy ra dãy này khả tích đều và chặt.
> 
> **2. Kiểm tra sự tồn tại của hàm trội $g \in L^1$:**
> Giả sử tồn tại một hàm $g$ sao cho $f_n \le g$ với mọi $n$. Khi đó $g$ phải lớn hơn hoặc bằng hàm bao trên (supremum) của dãy $\{f_n\}$. 
> Ta xét hàm bao trên này. Nhận thấy với $n \ge 1$, các khoảng $\left[\frac{1}{n}, \frac{1}{n} + \frac{1}{n^2}\right)$ hoàn toàn rời nhau. Do đó, hàm bao trên chính là tổng của toàn bộ dãy:
> $$g = \sup_{n \ge 1} f_n = \sum_{n=1}^\infty n \cdot \mathbf{1}_{\left[\frac{1}{n}, \frac{1}{n} + \frac{1}{n^2}\right)}$$
> Bây giờ, ta tính tích phân của hàm $g$:
> $$\int_{\mathbb{R}} g = \sum_{n=1}^\infty \int_{\mathbb{R}} \left( n \cdot \mathbf{1}_{\left[\frac{1}{n}, \frac{1}{n} + \frac{1}{n^2}\right)} \right) = \sum_{n=1}^\infty \frac{1}{n}$$
> Ta nhận ra đây chính là chuỗi điều hòa. Do chuỗi điều hòa phân kỳ, ta có:
> $$\int_{\mathbb{R}} g = \infty$$
> Suy ra $g \notin L^1(\mathbb{R})$. Nghĩa là dãy $f_n$ không bị chặn bởi bất kỳ hàm khả tích Lebesgue nào.

> [!lem] (Bổ đề Bất đẳng thức Logarit)
> Chứng minh rằng với mọi $x > 0$ và $\varepsilon \in (0, 1)$, ta luôn có:
> $$x \le \varepsilon x \ln(\varepsilon x) + e^{1/\varepsilon}$$

> [!prf] 
> Xét hàm số $h(x) = x - \varepsilon x \ln(\varepsilon x)$ với $x > 0$. Ta sẽ tìm giá trị lớn nhất của hàm số này.
> Đạo hàm của $h(x)$:
> $$h'(x) = 1 - \left[ \varepsilon \ln(\varepsilon x) + \varepsilon x \cdot \frac{\varepsilon}{\varepsilon x} \right] = 1 - \varepsilon \ln(\varepsilon x) - \varepsilon$$
> Cho $h'(x) = 0$, ta được:
> $$\varepsilon \ln(\varepsilon x) = 1 - \varepsilon \iff \ln(\varepsilon x) = \frac{1}{\varepsilon} - 1 \iff \varepsilon x = e^{\frac{1}{\varepsilon} - 1} \iff x = \frac{1}{\varepsilon} e^{\frac{1}{\varepsilon} - 1}$$
> 
> Qua điểm $x = \frac{1}{\varepsilon} e^{\frac{1}{\varepsilon} - 1}$, đạo hàm $h'(x)$ đổi dấu từ dương sang âm, nên hàm số đạt cực đại tại đây. Giá trị lớn nhất của hàm số là:
> $$\begin{align*} h_{max} &= \frac{1}{\varepsilon} e^{\frac{1}{\varepsilon} - 1} - \varepsilon \left( \frac{1}{\varepsilon} e^{\frac{1}{\varepsilon} - 1} \right) \ln\left( e^{\frac{1}{\varepsilon} - 1} \right) \\ &= \frac{1}{\varepsilon} e^{\frac{1}{\varepsilon} - 1} - e^{\frac{1}{\varepsilon} - 1} \left( \frac{1}{\varepsilon} - 1 \right) \\ &= e^{\frac{1}{\varepsilon} - 1} \left( \frac{1}{\varepsilon} - \frac{1}{\varepsilon} + 1 \right) = e^{\frac{1}{\varepsilon} - 1} \end{align*}$$
> 
> Vì $\varepsilon \in (0, 1)$ nên $\frac{1}{\varepsilon} - 1 < \frac{1}{\varepsilon}$, kéo theo $e^{\frac{1}{\varepsilon} - 1} < e^{1/\varepsilon}$.
> Do đó, với mọi $x > 0$, ta có $h(x) \le h_{max} < e^{1/\varepsilon}$, hay:
> $$x - \varepsilon x \ln(\varepsilon x) < e^{1/\varepsilon} \implies x \le \varepsilon x \ln(\varepsilon x) + e^{1/\varepsilon}$$

> [!thm] (Định lý Vitali và Tiêu chuẩn de la Vallée-Poussin)
> Cho $(D, \mathfrak{A}, \mu)$ là không gian độ đo thỏa mãn $\mu(D) < \infty$. 
> Cho dãy hàm $f_n \subset L^1(D)$ thỏa mãn:
> 1. $f_n \xrightarrow{\text{a.e.}} f$
> 2. $\int_D |f_n| \ln^+(|f_n|) \le C < \infty, \quad \forall n$ (trong đó $\ln^+(x) = \max\{0, \ln x\}$)
> 
> Chứng minh rằng $f \in L^1(D)$ và $\lim_{n \to \infty} \int_D |f_n - f| = 0$.

> [!prf] 
> Để chứng minh kết luận, ta cần chỉ ra dãy $f_n$ thỏa mãn hai tính chất của Định lý Hội tụ Vitali.
> 
> **1. Kiểm tra Tính chất 2 (Tính chặt):**
> Vì không gian có độ đo hữu hạn $\mu(D) < \infty$, Tính chất 2 tự động được thỏa mãn (như đã chứng minh ở Nhận xét 2).
> 
> **2. Kiểm tra Tính chất 1 (Tính khả tích đều):**
> Ta cần chứng minh: $\forall \alpha > 0, \exists \delta > 0 : \mu(A) < \delta \Rightarrow \int_A |f_n| < \alpha, \forall n$.
> 
> Cố định một số $\varepsilon \in (0, 1)$. Thay $x = |f_n(t)|$ vào Bổ đề bất đẳng thức Logarit đã chứng minh ở trên, ta có:
> $$|f_n| \le \varepsilon |f_n| \ln(\varepsilon |f_n|) + e^{1/\varepsilon}$$
> Ta phân tích số hạng logarit: 
> $$|f_n| \ln(\varepsilon |f_n|) = |f_n| \ln|f_n| + |f_n| \ln \varepsilon$$
> Vì $\varepsilon < 1$ nên $\ln \varepsilon < 0$, suy ra $|f_n| \ln \varepsilon \le 0$. Hơn nữa, $\ln|f_n| \le \ln^+(|f_n|)$. Do đó:
> $$|f_n| \ln(\varepsilon |f_n|) \le |f_n| \ln^+(|f_n|)$$
> Dẫn đến bất đẳng thức mạnh hơn:
> $$|f_n| \le \varepsilon |f_n| \ln^+(|f_n|) + e^{1/\varepsilon}$$
> 
> Lấy tích phân hai vế trên một tập đo được $A \in \mathfrak{A}$ bất kỳ:
> $$\begin{align*} \int_A |f_n| &\le \varepsilon \int_A |f_n| \ln^+(|f_n|) + \int_A e^{1/\varepsilon} \\ &\le \varepsilon \int_D |f_n| \ln^+(|f_n|) + e^{1/\varepsilon} \mu(A) \quad (\text{vì } A \subset D \text{ và hàm tích phân không âm}) \\ &\le \varepsilon C + e^{1/\varepsilon} \mu(A) \end{align*}$$
> 
> Bây giờ, với $\alpha > 0$ cho trước:
> - Trước tiên, ta chọn $\varepsilon \in (0, 1)$ đủ nhỏ sao cho $\varepsilon C < \frac{\alpha}{2}$.
> - Sau khi đã chốt $\varepsilon$, ta chọn $\delta = \frac{\alpha}{2 e^{1/\varepsilon}} > 0$.
> 
> Khi đó, với bất kỳ tập $A$ nào thỏa mãn $\mu(A) < \delta$, ta luôn có:
> $$\int_A |f_n| \le \varepsilon C + e^{1/\varepsilon} \mu(A) < \frac{\alpha}{2} + e^{1/\varepsilon} \left( \frac{\alpha}{2 e^{1/\varepsilon}} \right) = \frac{\alpha}{2} + \frac{\alpha}{2} = \alpha, \quad \forall n$$
> Vậy $f_n$ khả tích đều.
> 
> **Kết luận:** Dãy $f_n$ thỏa mãn cả tính khả tích đều và tính chặt. Áp dụng Định lý Hội tụ Vitali, ta suy ra $f \in L^1(D)$ và $\lim_{n \to \infty} \int_D |f_n - f| = 0$. Vậy định lý đã được chứng minh.

# Khả tích Lebesgue tương đương Riemann

Để so sánh tích phân Riemann và tích phân Lebesgue, trước tiên ta cần nhắc lại định nghĩa chuẩn xác của tích phân Riemann thông qua tổng Darboux, cũng như khái niệm về "đường bao" (envelopes) của một hàm số.

> [!def] (Tích phân Riemann và Tổng Darboux)
> Cho $f$ là một hàm thực bị chặn trên đoạn $I = [a, b]$. Xét một phân hoạch $\mathcal{P} = \{x_0, \dots, x_n\}$ của $I$ với $a = x_0 < \dots < x_n = b$. Ký hiệu $I_k = [x_{k-1}, x_k]$.
> 
> - Tích phân Riemann: Tổng Riemann của $f$ ứng với phân hoạch $\mathcal{P}$ và cách chọn điểm $\xi_k \in I_k$ là $S(f, \mathcal{P}, \xi) = \sum_{k=1}^n f(\xi_k)\ell(I_k)$. Hàm $f$ khả tích Riemann trên $I$ với giá trị $J = \int_a^b f(x)dx$ nếu giới hạn của tổng Riemann bằng $J$ khi độ mịn $|\mathcal{P}| \to 0$.
> - Tổng và Tích phân Darboux: Đặt $m_k = \inf_{I_k} f(x)$ và $M_k = \sup_{I_k} f(x)$.
>     - Tổng Darboux dưới và trên: $s(f, \mathcal{P}) = \sum m_k \ell(I_k)$ và $S(f, \mathcal{P}) = \sum M_k \ell(I_k)$.
>     - Tích phân Darboux dưới và trên: $\underline{S}(f) = \sup_{\mathcal{P}} s(f, \mathcal{P})$ và $\overline{S}(f) = \inf_{\mathcal{P}} S(f, \mathcal{P})$.
> - Tiêu chuẩn khả tích Riemann (Định lý 7.22): Hàm bị chặn $f$ khả tích Riemann $\Leftrightarrow \underline{S}(f) = \overline{S}(f)$. Khi đó, $\int_a^b f(x)dx = \underline{S}(f) = \overline{S}(f)$.

> [!def] (Đường bao dưới và Đường bao trên)
> Cho $f$ là hàm thực trên $D$ và $U(x_0, \delta) = (x_0 - \delta, x_0 + \delta)$.
> - Đường bao dưới: $f_*(x_0) = \sup_{\delta > 0} \inf_{U(x_0, \delta) \cap D} f$.
> - Đường bao trên: $f^*(x_0) = \inf_{\delta > 0} \sup_{U(x_0, \delta) \cap D} f$.

> [!lem] (Quan sát 7.25: Tính chất của đường bao)
> Cho $f$ là hàm thực trên $D$ và $x_0 \in D$. Gọi $U(x_0, \delta) = (x_0 - \delta, x_0 + \delta)$.
> 1. Bất đẳng thức: $f_*(x_0) \le f(x_0) \le f^*(x_0)$.
> 2. Tính liên tục: Hàm $f$ liên tục tại $x_0 \Leftrightarrow f_*(x_0) = f^*(x_0)$.

> [!prf] 
> **1. Chứng minh $f_*(x_0) \le f(x_0) \le f^*(x_0)$**
> 
> Với mọi $\delta > 0$, vì tâm $x_0$ luôn thuộc $U(x_0, \delta) \cap D$, ta có hiển nhiên:
> $$\inf_{x \in U(x_0, \delta) \cap D} f(x) \le f(x_0) \le \sup_{x \in U(x_0, \delta) \cap D} f(x)$$
> 
> Bất đẳng thức này đúng với mọi $\delta > 0$. Do đó, khi lấy $\sup$ theo $\delta > 0$ ở vế trái và lấy $\inf$ theo $\delta > 0$ ở vế phải, bất đẳng thức vẫn được bảo toàn:
> $$f_*(x_0) = \sup_{\delta > 0} \inf_{U(x_0, \delta) \cap D} f \le f(x_0) \le \inf_{\delta > 0} \sup_{U(x_0, \delta) \cap D} f = f^*(x_0)$$
> 
> **2. Chứng minh $f$ liên tục tại $x_0 \iff f_*(x_0) = f^*(x_0)$**
> 
> $(\implies)$ Giả sử $f$ liên tục tại $x_0$:
> Theo định nghĩa liên tục $\varepsilon-\delta$, với mọi $\varepsilon > 0$, tồn tại $\delta > 0$ sao cho với mọi $x \in U(x_0, \delta) \cap D$, ta có:
> $$f(x_0) - \varepsilon < f(x) < f(x_0) + \varepsilon$$
> 
> Điều này dẫn đến các cận của $f$ trên lân cận $U(x_0, \delta) \cap D$ cũng bị chặn bởi hai giá trị này:
> $$f(x_0) - \varepsilon \le \inf_{U(x_0, \delta) \cap D} f(x) \le \sup_{U(x_0, \delta) \cap D} f(x) \le f(x_0) + \varepsilon$$
> 
> Dựa vào định nghĩa của supremum và infimum (khi thay đổi $\delta$), ta có:
> $$f(x_0) - \varepsilon \le f_*(x_0) \le f^*(x_0) \le f(x_0) + \varepsilon$$
> 
> Do $\varepsilon > 0$ là nhỏ tùy ý, cho $\varepsilon \to 0$, ta ép được:
> $$f_*(x_0) = f^*(x_0) = f(x_0)$$
> 
> $(\impliedby)$ Giả sử $f_*(x_0) = f^*(x_0)$:
> Kết hợp với phần 1, ta buộc phải có $f_*(x_0) = f^*(x_0) = f(x_0)$.
> 
> Lấy $\varepsilon > 0$ bất kỳ. 
> - Vì $f^*(x_0) = \inf_{\delta > 0} \left( \sup_{U(x_0, \delta) \cap D} f \right) = f(x_0)$, theo tính chất của $\inf$, phải tồn tại một $\delta_1 > 0$ sao cho:
> $$\sup_{U(x_0, \delta_1) \cap D} f < f(x_0) + \varepsilon$$
> 
> - Tương tự, vì $f_*(x_0) = \sup_{\delta > 0} \left( \inf_{U(x_0, \delta) \cap D} f \right) = f(x_0)$, theo tính chất của $\sup$, phải tồn tại một $\delta_2 > 0$ sao cho:
> $$\inf_{U(x_0, \delta_2) \cap D} f > f(x_0) - \varepsilon$$
> 
> Chọn $\delta = \min\{\delta_1, \delta_2\} > 0$. Khi đó tập $U(x_0, \delta)$ là tập con của cả $U(x_0, \delta_1)$ và $U(x_0, \delta_2)$. Do đó, với mọi $x \in U(x_0, \delta) \cap D$:
> $$f(x_0) - \varepsilon < \inf_{U(x_0, \delta_2) \cap D} f \le f(x) \le \sup_{U(x_0, \delta_1) \cap D} f < f(x_0) + \varepsilon$$
> 
> Nghĩa là $|f(x) - f(x_0)| < \varepsilon$ với mọi $x \in U(x_0, \delta) \cap D$. Đây chính xác là định nghĩa hàm $f$ liên tục tại $x_0$.

> [!lem] (Bổ đề 7.26)
> Cho $f$ là một hàm thực bị chặn trên $I = [a, b]$.
> (a) Đường bao dưới $f_*$ và đường bao trên $f^*$ là các hàm bị chặn, đo được theo Borel (${} \mathcal{B}({\mathbb{R}}) {}$-đo được) trên $I$.
> (b) $\int_I f_* d\mu_L = \underline{S}(f)$ và $\int_I f^* d\mu_L = \overline{S}(f)$.

> [!prf] 
> **1. Đo được:** Xây dựng một dãy các phân hoạch $\mathcal{P}_m$ sao cho tổng Darboux trên dần về tích phân Darboux trên: $\lim_{m\to\infty} \overline{S}(f, \mathcal{P}_m) = \overline{S}(f)$. 
> Định nghĩa dãy hàm đơn giản $\psi_m$ dựa trên các cận trên supremum của $f$ trên từng đoạn phân hoạch. Ta có thể chỉ ra rằng $\lim_{m\to\infty} \psi_m(x) = f^*(x)$ tại mọi điểm $x \in I \setminus E$, với $E$ là tập đếm được gồm các điểm chia của mọi phân hoạch. **(Cần bổ sung chứng minh chi tiết)**
> Vì tập các điểm chia $E$ đếm được nên $E \in \mathcal{B}(\mathbb{R})$, suy ra $I \setminus E \in \mathcal{B}(\mathbb{R})$. Ta xét tính đo được của $f^*$ trên hai miền:
> - Trên $I \setminus E$: Dãy hàm $\psi_m$ đo được và $\psi_m \to f^*$ tại mọi điểm. Vì giới hạn của dãy hàm đo được là hàm đo được, nên $f^*$ đo được trên $I \setminus E$.
> - Trên $E$: Mọi tập con của tập đếm được $E$ đều thuộc $\mathcal{B}(\mathbb{R})$. Do đó, bất kỳ hàm nào xác định trên $E$ cũng tự động đo được theo Borel, bao gồm cả $f^*$.
> Vì $I = (I \setminus E) \cup E$ và $f^*$ đo được trên cả hai tập thành phần rời nhau, $f^*$ là hàm $\mathcal{B}(\mathbb{R})$-đo được trên toàn bộ $I$. Lập luận tương tự cho $f_*$.
>
> **2. Tích phân:** Tích phân Lebesgue của $\psi_m$ chính là tổng Darboux trên $\overline{S}(f, \mathcal{P}_m)$. Do $f$ bị chặn nên $\psi_m$ bị chặn. Áp dụng Định lý hội tụ bị chặn (Bounded Convergence Theorem) cho dãy $\psi_m \to f^*$ hầu khắp nơi (a.e.), ta có:
> $$\lim_{m\to\infty} \int_I \psi_m d\mu_L = \int_I f^* d\mu_L$$
> Từ đó suy ra $\int_I f^* d\mu_L = \overline{S}(f)$. Tương tự cho $f_*$.

> [!thm] (Định lý 7.27: Khả tích Lebesgue tương đương khả tích Riemann)
> Cho $f$ là hàm thực bị chặn trên $I = [a, b]$. Nếu $f$ khả tích Riemann trên $I$, thì $f$ đo được theo Lebesgue ($\mathfrak{M}_L$-đo được) và khả tích Lebesgue trên $I$, đồng thời:
> $$\int_a^b f(x) dx = \int_I f d\mu_L$$

> [!prf] 
> Vì $f$ khả tích Riemann nên tích phân Darboux dưới và trên bằng nhau: $\underline{S}(f) = \overline{S}(f)$. 
> Theo Bổ đề 7.26, ta có $\int_I f_* d\mu_L = \int_I f^* d\mu_L$.
> Lại có $f_* \le f^*$, việc hai hàm này có cùng tích phân hữu hạn đồng nghĩa với $f_* = f^*$ hầu khắp nơi theo độ đo Lebesgue ($\mu_L$-a.e.).
> Vì $f_* \le f \le f^*$, suy ra $f = f_* = f^*$ hầu khắp nơi. 
> Sự đầy đủ (completeness) của không gian độ đo Lebesgue đảm bảo rằng $f$ là $\mathfrak{M}_L$-đo được.
> Cuối cùng, $\int_I f d\mu_L = \int_I f^* d\mu_L = \overline{S}(f) = \int_a^b f(x)dx$.

> [!thm] (Định lý 7.28: Tiêu chuẩn Lebesgue cho tích phân Riemann)
> Cho $f$ là hàm thực bị chặn trên $I = [a,b]$ và $E$ là tập hợp tất cả các điểm gián đoạn của $f$ trên $I$. Khi đó các mệnh đề sau là tương đương:
> 2. $f$ khả tích Riemann trên $I$.
> 3. $f_* = f^*$ ($\mu_L$-a.e.) trên $I$.
> 4. $\mu_L(E) = 0$. (Tập các điểm gián đoạn có độ đo không).

> [!prf] 
> (1) $\iff$ (2): Nếu $f$ khả tích Riemann, từ chứng minh Định lý 7.27 ta đã có $f_* = f^*$ ($\mu_L$-a.e.). Ngược lại, nếu $f_* = f^*$ ($\mu_L$-a.e.), tích phân của chúng bằng nhau, tức là $\underline{S}(f) = \overline{S}(f)$ (theo Bổ đề 7.26), do đó $f$ khả tích Riemann.
> 
> (2) $\iff$ (3): Theo tính chất của đường bao: hàm $f$ liên tục tại $x_0 \in I$ khi và chỉ khi $f_*(x_0) = f^*(x_0)$. Do đó, tập $E$ các điểm gián đoạn của $f$ chính là tập các điểm mà $f_* \neq f^*$. Mệnh đề $f_* = f^*$ ($\mu_L$-a.e.) tương đương với việc tập $E$ có độ đo bằng 0, tức là $\mu_L(E) = 0$.

$\xi$
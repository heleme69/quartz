# 1. Khả tích Lebesgue
> [!rem] Nhắc lại không gian $L^1$
> Ký hiệu ${} L^1(D, \mu) {}$ (hoặc viết gọn là ${} L^1(D) {}$) đại diện cho tập hợp (không gian) tất cả các hàm số đo được và khả tích Lebesgue trên $D$ đối với độ đo $\mu$.

> [!def] (Khả tích Lebesgue)
> Cho một không gian đo $(X, \mathfrak{A}, \mu)$ và một tập ${} D \in \mathfrak{A} {}$. Giả sử $f: D \to \overline{\mathbb{R}}$ là một hàm đo được nhận giá trị thực mở rộng.
> 
> Gọi $f^+$ và $f^-$ lần lượt là phần dương và phần âm của hàm $f$ ($f = f^+ - f^-$ với $f^+, f^- \ge 0$).
> 
> 1. Tính bán khả tích (Semi-integrable):
>    Nếu biểu thức $\int_D f^+ d\mu - \int_D f^- d\mu$ tồn tại trong tập số thực mở rộng $\overline{\mathbb{R}}$ (tức là không rơi vào dạng vô định $\infty - \infty$), thì ta nói $f$ là Bán khả tích Lebesgue trên $D$ đối với độ đo $\mu$.
>    Khi đó, tích phân của $f$ trên $D$ được định nghĩa là:
>    $$\int_D f d\mu = \int_D f^+ d\mu - \int_D f^- d\mu$$
> 
> 2. Tính khả tích (Integrable):
>    Ta nói $f$ khả tích Lebesgue trên $D$ đối với độ đo $\mu$, ký hiệu là $f \in \mathfrak{L}^1(D, \mu)$, khi và chỉ khi:
>    $$\int_D f d\mu \in \mathbb{R}$$
>    *(Điều này xảy ra khi và chỉ khi cả hai tích phân thành phần đều hữu hạn, tương đương với điều kiện kiện khả tích tuyệt đối: $\int_D |f| d\mu < \infty$).*

# 2. Khả tích đều

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
> 1. Chứng minh $f_n$ thỏa Tính chất 1:
> Vì $g \in L^1$, áp dụng Bổ đề về tính liên tục tuyệt đối của tích phân Lebesgue đối với hàm $g$, ta có:
> Với mọi $\varepsilon > 0$, tồn tại $\delta_\varepsilon > 0$ sao cho với mọi tập $A \in \mathfrak{A}$, nếu $\mu(A) < \delta_\varepsilon$ thì:
> $$\int_A g < \varepsilon$$
> Mặt khác, do $|f_n| \le g$ với mọi $n$, tính chất đơn điệu của tích phân cho ta:
> $$\int_A |f_n| \le \int_A g < \varepsilon, \quad \forall n$$
> Điều này chứng tỏ dãy $f_{n}$ khả tích đều.
> 
> 2. Chứng minh $f_n$ thỏa Tính chất 2:
> Tương tự, vì $g \in L^1$, áp dụng Bổ đề về tính "chặt" của tích phân Lebesgue đối với hàm $g$, ta có:
> Với mọi $\varepsilon > 0$, tồn tại tập đo được $B_\varepsilon \in \mathfrak{A}$ có độ đo hữu hạn $\mu(B_\varepsilon) < \infty$ sao cho:
> $$\int_{B_\varepsilon^c} g < \varepsilon$$
> Tương tự như trên, từ giả thiết $|f_n| \le g$, ta suy ra:
> $$\int_{B_\varepsilon^c} |f_n| \le \int_{B_\varepsilon^c} g < \varepsilon, \quad \forall n$$
> Điều này chứng tỏ dãy $f_{n}$ thỏa mãn tính chặt.

> [!thm] (Định lý Hội tụ Vitali: Vitali Convergence Theorem)
> Cho $(D, \mathfrak{A}, \mu)$ là một không gian độ đo và dãy hàm $f_n \subset L^1(D, \mathfrak{A}, \mu)$.
> Giả sử các điều kiện sau được thỏa mãn:
> 3. $f_n \to f$ hầu khắp nơi (a.e.) trên $D$.
> 4. $f_n$ thỏa mãn Tính chất 1 (Khả tích đều / Uniform Integrability).
> 5. $f_n$ thỏa mãn Tính chất 2 (Tính chặt / Tightness).
> 
> Khi đó, $f \in L^1(D, \mathfrak{A}, \mu)$ và:
> $$\lim_{n \to \infty} \int_D |f_n - f| d\mu = 0$$

> [!prf] 
> Cho trước $\varepsilon > 0$. Ta sẽ chia không gian $D$ để đánh giá tích phân $\int_D |f_n - f|$.
> 
> Bước 1: Áp dụng Tính chặt và Định lý Egoroff
> - Theo Tính chất 2 (Tính chặt), tồn tại tập $B_\varepsilon \in \mathfrak{A}$ với $\mu(B_\varepsilon) < \infty$ sao cho:
>   $$\int_{B_\varepsilon^c} |f_n| < \varepsilon, \quad \forall n$$
> - Theo Tính chất 1 (Khả tích đều), ứng với $\varepsilon > 0$, tồn tại $\delta > 0$ sao cho nếu $\mu(A) < \delta$ thì $\int_A |f_n| < \varepsilon, \forall n$.
> - Xét trên tập $B_\varepsilon$ (có độ đo hữu hạn $\mu(B_\varepsilon) < \infty$) và $f_n \to f$ a.e. Ta áp dụng Định lý Egoroff: Tồn tại một tập con $A_\varepsilon \subset B_\varepsilon$ với $\mu(A_\varepsilon) < \delta$ sao cho $f_n \to f$ hội tụ đều trên tập $B_\varepsilon \setminus A_\varepsilon$.
> 
> Bước 2: Phân tách tích phân cần chứng minh
> Ta tách tích phân trên toàn không gian $D$ thành 3 phần rời nhau: $B_\varepsilon^c$, $A_\varepsilon$, và $B_\varepsilon \setminus A_\varepsilon$. Sử dụng bất đẳng thức tam giác $|f_n - f| \le |f_n| + |f|$, ta có:
> $$\begin{align*} \int_D |f_n - f| &= \int_{B_\varepsilon^c} |f_n - f| + \int_{A_\varepsilon} |f_n - f| + \int_{B_\varepsilon \setminus A_\varepsilon} |f_n - f| \\ &\le \int_{B_\varepsilon^c} |f_n| + \int_{B_\varepsilon^c} |f| + \int_{A_\varepsilon} |f_n| + \int_{A_\varepsilon} |f| + \int_{B_\varepsilon \setminus A_\varepsilon} |f_n - f| \end{align*}$$
> 
> Bước 3: Đánh giá từng thành phần
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
> Bước 4: Kết luận
> Lấy limsup hai vế khi $n \to \infty$:
> $$\limsup_{n \to \infty} \int_D |f_n - f| \le \varepsilon + \varepsilon + \varepsilon + \varepsilon + 0 = 4\varepsilon$$
> Vì $\varepsilon > 0$ là tùy ý, ta cho $\varepsilon \to 0$ và thu được:
> $$\lim_{n \to \infty} \int_D |f_n - f| = 0$$
> Kéo theo $\int_D |f| \le \int_D |f_n - f| + \int_D |f_n| < \infty$, tức là $f \in L^1$. Chứng minh hoàn tất.

> [!rem] (Nhận xét 2: Tính chặt trên không gian độ đo hữu hạn)
> Nếu không gian toàn phần $D$ có độ đo hữu hạn (tức là $\mu(D) < \infty$), thì Tính chất 2 (Tính chặt) luôn hiển nhiên đúng với mọi dãy hàm $f_n \subset L^1$.

> [!prf]
> Với mọi $\varepsilon > 0$, ta chọn tập $B_\varepsilon = D$. 
> Khi đó $\mu(B_\varepsilon) = \mu(D) < \infty$ và tập bù $B_\varepsilon^c = \emptyset$. Do đó:
> $$\int_{B_\varepsilon^c} |f_n| = \int_{\emptyset} |f_n| = 0 < \varepsilon, \quad \forall n$$

> [!lem] (Prob 9.15: Định lý Barbalat cho hàm khả tích)
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

> [!thm] (Sự tương đương cấu trúc trên miền vô hạn $[0, \infty)$)
> Cho hàm số $f: [0, \infty) \to \mathbb{R}$. Xét các tính chất sau của hàm số:
> i. $f$ thỏa mãn đồng thời: Khả tích Lebesgue ($f \in L^1$) và Liên tục đều.
> ii. $f$ thỏa mãn đồng thời: Tính chất 1 (Khả tích đều) và Tính chất 2 (Tính chặt).
> 
> Mệnh đề phát biểu rằng: Điều kiện (1) là điều kiện đủ để suy ra điều kiện (2). 
> (Nói cách khác: Khả tích Lebesgue + Liên tục đều $\implies$ Khả tích đều + Tính chặt).

> [!prf] Chứng minh (Chiều thuận: i $\implies$ ii)
> Giả sử hàm số $f$ thỏa mãn điều kiện (1), tức là $\int_0^\infty |f(x)| dx < \infty$ và $f$ liên tục đều trên $[0, \infty)$. Ta sẽ chứng minh $f$ lần lượt thỏa mãn hai cấu trúc độ đo của điều kiện (ii).
> 
> **Phần 1: Hàm số thỏa mãn Tính chất 1 (Khả tích đều)**
> Từ giả thiết hàm khả tích Lebesgue, ta luôn suy ra được Tính chất 1. (Xem chứng minh Tính liên tục tuyệt đối của tích phân Lebesgue)
> 
> **Phần 2: Hàm số thỏa mãn Tính chất 2 (Tính chặt)**
> Cần chứng minh: $\forall \varepsilon > 0, \exists B_\varepsilon \in \mathfrak{A} \text{ với } \mu_L(B_\varepsilon) < \infty \Rightarrow \int_{B_\varepsilon^c} |f| dx < \varepsilon$.
> 
> Nhờ giả thiết $f \in L^1([0, \infty))$ và $f$ liên tục đều, áp dụng kết quả từ bổ đề Prob 9.15, ta có:
>   $$\lim_{x \to \infty} f(x) = 0$$
> Do đó hàm số buộc phải có phần đuôi tích phân hội tụ triệt tiêu:
>   $$\lim_{M \to \infty} \int_M^\infty |f(x)| dx = 0$$
> Theo định nghĩa giới hạn, với $\varepsilon > 0$ cho trước, luôn luôn tồn tại một mốc $M > 0$ đủ lớn sao cho:
>   $$\int_M^\infty |f(x)| dx < \varepsilon$$
> Ta chọn tập hợp $B_\varepsilon = [0, M]$. Rõ ràng độ đo của tập này hữu hạn ($\mu_L(B_\varepsilon) = M < \infty$). Tập bù của nó chính là nửa khoảng vô cực $B_\varepsilon^c = (M, \infty)$. Khi đó:
>   $$\int_{B_\varepsilon^c} |f(x)| dx = \int_M^\infty |f(x)| dx < \varepsilon$$
> Vậy hàm $f$ thỏa mãn Tính chất 2 (Tính chặt).
> 
> Vậy định lý được chứng minh hoàn tất.

> [!rem] (Nhận xét 3: Mở rộng Định lý trên các miền xác định bất kỳ)
> Mối liên hệ cấu trúc "Khả tích Lebesgue + Liên tục đều $\implies$ Tính chất 1 + Tính chất 2" có thể mở rộng cho một tập đo được $D \subseteq \mathbb{R}$ bất kỳ dựa vào tính chất hình học của biên:
> 
> 2. Trên miền hữu hạn bất kỳ (Ví dụ: $D = [a, b]$, $D = (a, b)$, hoặc các khoảng hữu hạn)
> Nếu $D$ là một khoảng hữu hạn (độ đo $\mu_L(D) < \infty$), thì điều kiện Liên tục đều trở nên cực kỳ mạnh:
> - Tính chất 1 (Khả tích đều): Tự động thỏa mãn. Vì $f$ liên tục đều trên miền hữu hạn nên $f$ bắt buộc phải bị chặn ($|f(x)| \le M, \forall x \in D$). Khi hàm bị chặn trên miền có độ đo hữu hạn, nó luôn khả tích đều (chọn $\delta = \frac{\varepsilon}{M}$).
> - Tính chất 2 (Tính chặt): Luôn đúng theo Nhận xét 2. Ta chỉ việc chọn ngay tập hữu hạn $B_\varepsilon = D$, khi đó tập bù $B_\varepsilon^c = \emptyset$, kéo theo tích phân đuôi bằng $0 < \varepsilon$.
> Do đó, trên miền hữu hạn, chỉ cần có Liên tục đều là đã đủ để có cả Khả tích đều và Tính chặt (không cần giả thiết $f \in L^1$ ban đầu vì hàm bị chặn trên miền hữu hạn thì hiển nhiên khả tích).
> 
> 2. Trên miền vô hạn bất kỳ (Ví dụ: $D = (-\infty, 0]$, $D = \mathbb{R}$, hoặc các khoảng vô hạn)
> Nếu miền $D$ tiến ra vô cực (về phía âm, phía dương, hoặc cả hai), ta chứng minh tương tự bằng Prob 9.15 dựa theo tính đối xứng:
> - Nếu $D = (-\infty, 0]$: Giả thiết Khả tích Lebesgue + Liên tục đều qua Bài toán 9.15 sẽ ép $\lim_{x \to -\infty} f(x) = 0$. Khi đó, đuôi tích phân ở vô cực âm bị triệt tiêu, ta chọn tập chặt là $B_\varepsilon = [-M, 0]$ với $M$ đủ lớn để $\int_{-\infty}^{-M} |f| dx < \varepsilon$.
> - Nếu $D = \mathbb{R}$: Hàm số buộc phải tiến về $0$ ở cả hai đầu ($\lim_{x \to \pm\infty} f(x) = 0$). Lúc này, cả hai đuôi tích phân đều triệt tiêu, ta chọn tập chặt nằm ở trung tâm là $B_\varepsilon = [-M, M]$ để tích phân trên tập bù $B_\varepsilon^c = (-\infty, -M) \cup (M, \infty)$ nhỏ hơn $\varepsilon$.

> [!thm] (Phản ví dụ: Điều kiện Vitali mạnh hơn Hội tụ bị chặn Lebesgue)
> Ta sẽ xây dựng một dãy $f_n$ thỏa mãn cả Tính chất 1 (Khả tích đều) và Tính chất 2 (Tính chặt) nhưng không tồn tại bất kỳ hàm trội $g \in L^1$ nào sao cho $|f_n| \le g, \forall n$.
> 
> Xét không gian $\mathbb{R}$ với độ đo Lebesgue. Khởi tạo dãy hàm sau:
> $$f_n = n \cdot \mathbf{1}_{\left[\frac{1}{n}, \frac{1}{n} + \frac{1}{n^2}\right)}$$
> 
> 1. Kiểm tra Tính chất 1 và 2:
> Ta tính tích phân của $f_n$ trên toàn không gian:
> $$\int_{\mathbb{R}} |f_n| = n \cdot \mu\left( \left[\frac{1}{n}, \frac{1}{n} + \frac{1}{n^2}\right) \right) = n \cdot \frac{1}{n^2} = \frac{1}{n}$$
> Vì $\lim_{n \to \infty} \int_{\mathbb{R}} |f_n| = \lim_{n \to \infty} \frac{1}{n} = 0$, khối lượng của các hàm này tự triệt tiêu về $0$. Có thể dễ dàng suy ra dãy này khả tích đều và chặt.
> 
> 2. Kiểm tra sự tồn tại của hàm trội $g \in L^1$:
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
> 3. $f_n \xrightarrow{\text{a.e.}} f$
> 4. $\int_D |f_n| \ln^+(|f_n|) \le C < \infty, \quad \forall n$ (trong đó $\ln^+(x) = \max\{0, \ln x\}$)
> 
> Chứng minh rằng $f \in L^1(D)$ và $\lim_{n \to \infty} \int_D |f_n - f| = 0$.

> [!prf] 
> Để chứng minh kết luận, ta cần chỉ ra dãy $f_n$ thỏa mãn hai tính chất của Định lý Hội tụ Vitali.
> 
> 1. Kiểm tra Tính chất 2 (Tính chặt):
> Vì không gian có độ đo hữu hạn $\mu(D) < \infty$, Tính chất 2 tự động được thỏa mãn (như đã chứng minh ở Nhận xét 2).
> 
> 2. Kiểm tra Tính chất 1 (Tính khả tích đều):
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
> Kết luận: Dãy $f_n$ thỏa mãn cả tính khả tích đều và tính chặt. Áp dụng Định lý Hội tụ Vitali, ta suy ra $f \in L^1(D)$ và $\lim_{n \to \infty} \int_D |f_n - f| = 0$. Vậy định lý đã được chứng minh.

> [!thm] Hệ quả: Từ tính bị chặn trong $L^p$ ($p>1$) suy ra tính Khả tích đều
> Cho không gian độ đo $(D, \mathcal{A}, \mu)$ thỏa mãn $\mu(D) < \infty$.
> Cho họ hàm (hoặc dãy hàm) $K \subset L^p(D)$ với $p > 1$, giả sử $K$ bị chặn đều trong chuẩn $L^p$, tức là:
> $$\sup_{f \in K} \int_D |f|^p d\mu \le C < \infty$$
> Khi đó, họ hàm $K$ khả tích đều (thỏa mãn Tính chất 1) trên $D$.

> [!prf] Chứng minh (Phương pháp phân hoạch ngưỡng đại lượng)
> Ta cần chứng minh: $\forall \alpha > 0, \exists \delta > 0 : \forall A \in \mathcal{A}, \mu(A) < \delta \Rightarrow \int_A |f| d\mu < \alpha, \quad \forall f \in K$.
> 
> Với mọi số thực $x \ge 0$ và một ngưỡng cắt $M > 0$ tùy ý, ta luôn có một phép phân chia giá trị của $x$ dựa trên việc so sánh với $M$:
> - Nếu $x < M$: Ta có đánh giá $x \le M$.
> - Nếu $x \ge M$: Vì $p > 1$, ta có $x^{p-1} \ge M^{p-1} \implies x \le \frac{x^p}{M^{p-1}}$.
> 
> Gộp cả hai trường hợp lại, với mọi $x \ge 0$ và $M > 0$, ta luôn có bất đẳng thức tổng quát:
> $$x \le \frac{x^p}{M^{p-1}} + M$$
> 
> Thay $x = |f(t)|$ với $f \in K$ vào bất đẳng thức trên, ta thu được:
> $$|f| \le \frac{|f|^p}{M^{p-1}} + M$$
> 
> Lấy tích phân hai vế của bất đẳng thức trên trên một tập đo được $A \subseteq D$ bất kỳ:
> $$\begin{align*}
> \int_A |f| d\mu &\le \int_A \frac{|f|^p}{M^{p-1}} d\mu + \int_A M d\mu \\
> &\le \frac{1}{M^{p-1}} \int_D |f|^p d\mu + M \cdot \mu(A) \quad (\text{vì } A \subseteq D \text{ và hàm tích phân không âm}) \\
> &\le \frac{C}{M^{p-1}} + M \cdot \mu(A), \quad \forall f \in K
> \end{align*}$$
> 
> Bây giờ, với sai số $\alpha > 0$ cho trước, ta thực hiện quy trình chọn các tham số độc lập y hệt bài toán Logarit:
> 
> 1. Chọn độ cao ngưỡng $M$ trước để ép phần dư nhỏ:
>    Vì $p > 1 \implies p - 1 > 0$, do đó khi $M \to \infty$ thì $\frac{C}{M^{p-1}} \to 0$. Ta hoàn toàn chọn được một giá trị $M > 0$ đủ lớn cố định sao cho:
>    $$\frac{C}{M^{p-1}} < \frac{\alpha}{2}$$
> 
> 2. Chọn độ đo lân cận $\delta$ sau khi $M$ đã cố định:
>    Sau khi giá trị $M$ đã được giữ cố định ở bước trên, ta chọn hằng số $\delta = \frac{\alpha}{2M} > 0$.
> 
> Khi đó, với bất kỳ tập đo được $A$ nào thỏa mãn điều kiện độ đo đáy $\mu(A) < \delta$, ta áp dụng vào đánh giá tích phân ở Bước 2:
> $$\int_A |f| d\mu \le \frac{C}{M^{p-1}} + M \cdot \mu(A) < \frac{\alpha}{2} + M \cdot \left( \frac{\alpha}{2M} \right) = \frac{\alpha}{2} + \frac{\alpha}{2} = \alpha, \quad \forall f \in K$$
> 
> Kết luận: Họ hàm $K$ thỏa mãn chính xác định nghĩa của tính khả tích đều. Chứng minh hoàn tất.

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
> 1. Chứng minh $f_*(x_0) \le f(x_0) \le f^*(x_0)$
> 
> Với mọi $\delta > 0$, vì tâm $x_0$ luôn thuộc $U(x_0, \delta) \cap D$, ta có hiển nhiên:
> $$\inf_{x \in U(x_0, \delta) \cap D} f(x) \le f(x_0) \le \sup_{x \in U(x_0, \delta) \cap D} f(x)$$
> 
> Bất đẳng thức này đúng với mọi $\delta > 0$. Do đó, khi lấy $\sup$ theo $\delta > 0$ ở vế trái và lấy $\inf$ theo $\delta > 0$ ở vế phải, bất đẳng thức vẫn được bảo toàn:
> $$f_*(x_0) = \sup_{\delta > 0} \inf_{U(x_0, \delta) \cap D} f \le f(x_0) \le \inf_{\delta > 0} \sup_{U(x_0, \delta) \cap D} f = f^*(x_0)$$
> 
> 1. Chứng minh $f$ liên tục tại $x_0 \iff f_*(x_0) = f^*(x_0)$
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
> 1. Đo được: Xây dựng một dãy các phân hoạch $\mathcal{P}_m$ sao cho tổng Darboux trên dần về tích phân Darboux trên: $\lim_{m\to\infty} \overline{S}(f, \mathcal{P}_m) = \overline{S}(f)$. 
> Định nghĩa dãy hàm đơn giản $\psi_m$ dựa trên các cận trên supremum của $f$ trên từng đoạn phân hoạch. Ta có thể chỉ ra rằng $\lim_{m\to\infty} \psi_m(x) = f^*(x)$ tại mọi điểm $x \in I \setminus E$, với $E$ là tập đếm được gồm các điểm chia của mọi phân hoạch. **(Cần bổ sung chứng minh)**
> Vì tập các điểm chia $E$ đếm được nên $E \in \mathcal{B}(\mathbb{R})$, suy ra $I \setminus E \in \mathcal{B}(\mathbb{R})$. Ta xét tính đo được của $f^*$ trên hai miền:
> 	- Trên $I \setminus E$: Dãy hàm $\psi_m$ đo được và $\psi_m \to f^*$ tại mọi điểm. Vì giới hạn của dãy hàm đo được là hàm đo được, nên $f^*$ đo được trên $I \setminus E$.
> 	- Trên $E$: Mọi tập con của tập đếm được $E$ đều thuộc $\mathcal{B}(\mathbb{R})$. Do đó, bất kỳ hàm nào xác định trên $E$ cũng tự động đo được theo Borel, bao gồm cả $f^*$.
> Vì $I = (I \setminus E) \cup E$ và $f^*$ đo được trên cả hai tập thành phần rời nhau, $f^*$ là hàm $\mathcal{B}(\mathbb{R})$-đo được trên toàn bộ $I$. Lập luận tương tự cho $f_*$.
>
> 2. Tích phân: Tích phân Lebesgue của $\psi_m$ chính là tổng Darboux trên $\overline{S}(f, \mathcal{P}_m)$. Do $f$ bị chặn nên $\psi_m$ bị chặn. Áp dụng Định lý hội tụ bị chặn (Bounded Convergence Theorem) cho dãy $\psi_m \to f^*$ hầu khắp nơi (a.e.), ta có:
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
> 3. $f$ khả tích Riemann trên $I$.
> 4. $f_* = f^*$ ($\mu_L$-a.e.) trên $I$.
> 5. $\mu_L(E) = 0$. (Tập các điểm gián đoạn có độ đo không).

> [!prf] 
> (1) $\iff$ (2): Nếu $f$ khả tích Riemann, từ chứng minh Định lý 7.27 ta đã có $f_* = f^*$ ($\mu_L$-a.e.). Ngược lại, nếu $f_* = f^*$ ($\mu_L$-a.e.), tích phân của chúng bằng nhau, tức là $\underline{S}(f) = \overline{S}(f)$ (theo Bổ đề 7.26), do đó $f$ khả tích Riemann.
> 
> (2) $\iff$ (3): Theo tính chất của đường bao: hàm $f$ liên tục tại $x_0 \in I$ khi và chỉ khi $f_*(x_0) = f^*(x_0)$. Do đó, tập $E$ các điểm gián đoạn của $f$ chính là tập các điểm mà $f_* \neq f^*$. Mệnh đề $f_* = f^*$ ($\mu_L$-a.e.) tương đương với việc tập $E$ có độ đo bằng 0, tức là $\mu_L(E) = 0$.

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

> [!thm] Định lý về sự tương đương trên miền vô hạn đối với hàm đổi dấu
> Cho hàm số $f$ liên tục trên $[0, \infty)$. Giả sử tích phân Riemann suy rộng của $f$ hội tụ tuyệt đối trên $[0, \infty)$, nghĩa là:
> $$\int_0^\infty |f(x)| \, dx < \infty$$
> Khi đó, $f$ khả tích Lebesgue trên $[0, \infty)$ và ta có đẳng thức chuyển đổi:
> $$\int_{[0, \infty)} f \, d\mu_L = \int_0^\infty f(x) \, dx$$

> [!prf] Chứng minh chi tiết sử dụng hai công cụ có sẵn
> 
> **Bước 1: Chứng minh tính khả tích Lebesgue của $f$**
> Xét hàm số $g(x) = |f(x)|$. Vì $f$ liên tục trên $[0, \infty)$ nên $g$ cũng liên tục và không âm ($g(x) \ge 0$) với mọi $x \in [0, \infty)$.
> Theo giả thiết, tích phân Riemann suy rộng của $g$ tồn tại hữu hạn:
> $$\int_0^\infty g(x) \, dx = \int_0^\infty |f(x)| \, dx < \infty$$
> 
> Áp dụng trực tiếp Định lý Prob 9.47 cho hàm không âm $g$, ta thu được kết quả tích phân Lebesgue:
> $$\int_{[0, \infty)} |f| \, d\mu_L = \int_0^\infty |f(x)| \, dx < \infty$$
> Theo định nghĩa, vì tích phân trị tuyệt đối hữu hạn nên $f$ khả tích Lebesgue trên $[0, \infty)$ ($f \in L^1$).
> 
> **Bước 2: Dựng dãy hàm cắt ngọn và áp dụng DCT**
> Ta xây dựng dãy hàm cắt ngọn theo miền xác định tăng dần:
> $$f_n(x) = f(x) \cdot \mathbf{1}_{[0, n]}(x)$$
> 
> Vì $f$ đo được nên $f_n$ là các hàm đo được. Hơn nữa, ta luôn có đánh giá trị tuyệt đối toàn cục:
> $$|f_n(x)| \le |f(x)| \quad (\forall x \in [0, \infty), \forall n \in \mathbb{N})$$
> 
> Do $|f|$ khả tích Lebesgue (đã chứng minh ở Bước 1), ta đủ điều kiện áp dụng Định lý Hội tụ Trội (DCT) để đẩy giới hạn qua dấu tích phân Lebesgue:
> $$\int_{[0, \infty)} f \, d\mu_L = \lim_{n\to\infty} \int_{[0, \infty)} f_n \, d\mu_L = \lim_{n\to\infty} \int_{[0, n]} f \, d\mu_L$$
> 
> **Bước 3: Áp dụng Định lý 7.27 chuyển từ Lebesgue sang Riemann**
> Xét tích phân Lebesgue trên đoạn đóng hữu hạn $[0, n]$ ở vế phải:
> * Hàm số $f$ liên tục trên đoạn đóng $[0, n]$ nên $f$ bị chặn trên $[0, n]$.
> * Hàm liên tục trên đoạn đóng thì hiển nhiên khả tích Riemann trên $[0, n]$.
> 
> Ta áp dụng Định lý 7.27 để đưa tích phân Lebesgue về tích phân Riemann thông thường:
> $$\int_{[0, n]} f \, d\mu_L = \int_0^n f(x) \, dx$$
> 
> Thay kết quả từ Bước 3 vào biểu thức giới hạn thu được ở Bước 2:
> $$\int_{[0, \infty)} f \, d\mu_L = \lim_{n\to\infty} \int_0^n f(x) \, dx$$
> 
> Sử dụng định nghĩa tích phân Riemann suy rộng:
> $$\lim_{n\to\infty} \int_0^n f(x) \, dx = \int_0^\infty f(x) \, dx$$
> 
> **Kết luận:** Vậy, ta thu được đẳng thức cần chứng minh:
> $$\int_{[0, \infty)} f \, d\mu_L = \int_0^\infty f(x) \, dx$$

$\xi$
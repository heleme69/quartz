> [!thm] (Định lý Đặc trưng tương đương của de la Vallée-Poussin)
> Cho $(D, \mathfrak{A}, \mu)$ là một không gian độ đo và họ hàm $\Lambda \subset L^1(D, \mu)$.
> 1. Nếu $\Lambda$ khả tích đều (UI), thì $\Lambda$ bị chặn đều trong chuẩn $L^1$ ($\sup_{f \in \Lambda} \|f\|_{L^1} < \infty$) và thỏa mãn tính **Liên tục tuyệt đối đều (UAC)**:
>    $$\forall \varepsilon > 0, \exists \delta > 0 : \forall A \in \mathfrak{A}, \mu(A) < \delta \implies \sup_{f \in \Lambda} \int_A |f| \, d\mu < \varepsilon.$$
> 2. Ngược lại, nếu không gian có **độ đo hữu hạn** ($\mu(D) < \infty$), thì:
>    $$\Lambda \text{ là họ Khả tích đều (UI)} \iff \Lambda \text{ Liên tục tuyệt đối đều (UAC)} \text{ và bị chặn trong } L^1.$$

> [!prf]
> 1. **Chứng minh UI $\implies$ Bị chặn trong $L^1$:**
>    Vì $\Lambda$ là UI, chọn $M_0 < \infty$ sao cho $\sup_{f \in \Lambda} \int_{\{|f| \ge M_0\}} |f| \, d\mu \le 1$.
>    Với mọi $f \in \Lambda$, ta phân rã tích phân:
>    $$\int_D |f| \, d\mu = \int_{\{|f| < M_0\}} |f| \, d\mu + \int_{\{|f| \ge M_0\}} |f| \, d\mu \le M_0 \cdot \mu(D) + 1 < \infty.$$
>    Suy ra $\sup_{f \in \Lambda} \|f\|_{L^1} \le M_0 \mu(D) + 1 < \infty$.
>
> 2. **Chứng minh UI $\implies$ UAC:**
>    Cố định $\varepsilon > 0$. Do $\Lambda$ là UI, chọn $M > 0$ đủ lớn sao cho $\sup_{f \in \Lambda} \int_{\{|f| \ge M\}} |f| \, d\mu < \frac{\varepsilon}{2}$.
>    Chọn $\delta = \frac{\varepsilon}{2M} > 0$. Với mọi tập $A \in \mathfrak{A}$ có $\mu(A) < \delta$, ta tách tích phân của bất kỳ $f \in \Lambda$:
>    $$\int_A |f| \, d\mu = \int_{A \cap \{|f| < M\}} |f| \, d\mu + \int_{A \cap \{|f| \ge M\}} |f| \, d\mu \le M \cdot \mu(A) + \int_{\{|f| \ge M\}} |f| \, d\mu < M \cdot \frac{\varepsilon}{2M} + \frac{\varepsilon}{2} = \varepsilon.$$
>    Lấy supremum theo $f \in \Lambda$, ta thu được $\sup_{f \in \Lambda} \int_A |f| \, d\mu \le \varepsilon$.
>
> 3. **Chứng minh UAC + Bị chặn $L^1$ $\implies$ UI (khi $\mu(D) < \infty$):**
>    Cho $\varepsilon > 0$. Theo tính UAC, tồn tại $\delta > 0$ sao cho $\mu(A) < \delta \implies \sup_{f \in \Lambda} \int_A |f| \, d\mu < \varepsilon$.
>    Đặt $K = \sup_{f \in \Lambda} \int_D |f| \, d\mu < \infty$. Theo bất đẳng thức Chebyshev/Markov:
>    $$\mu(\{|f| \ge M\}) \le \frac{1}{M} \int_D |f| \, d\mu \le \frac{K}{M}.$$
>    Chọn $M_0$ đủ lớn sao cho $\frac{K}{M_0} < \delta$. Khi đó với mọi $M \ge M_0$ và mọi $f \in \Lambda$, ta có $\mu(\{|f| \ge M\}) < \delta$.
>    Áp dụng điều kiện UAC cho tập $A = \{|f| \ge M\}$, ta suy ra $\int_{\{|f| \ge M\}} |f| \, d\mu < \varepsilon$ với mọi $f \in \Lambda$.
>    Suy ra $\lim_{M \to \infty} \sup_{f \in \Lambda} \int_{\{|f| \ge M\}} |f| \, d\mu = 0$, tức $\Lambda$ khả tích đều.

> [!lem] (UAC suy ra tính Bị chặn đều trong $L^1$ trên không gian hữu hạn)
> Cho $(D, \mathfrak{A}, \mu)$ là không gian độ đo thỏa mãn $\mu(D) < \infty$ và họ hàm $\Lambda \subset L^1(D, \mu)$.
> Nếu $\Lambda$ thỏa mãn tính chất **Liên tục tuyệt đối đều (UAC)**, thì $\Lambda$ tự động **bị chặn đều trong chuẩn $L^1$**:
> $$\sup_{f \in \Lambda} \int_D |f| \, d\mu < \infty.$$

> [!prf]
> 1. **Bước 1: Chọn lân cận độ đo $\delta$ ứng với $\varepsilon = 1$**
>    Vì $\Lambda$ thỏa mãn tính UAC, ứng với $\varepsilon = 1 > 0$, tồn tại hằng số $\delta > 0$ sao cho với mọi tập đo được $A \in \mathfrak{A}$:
>    $$\mu(A) < \delta \implies \sup_{f \in \Lambda} \int_A |f| \, d\mu < 1.$$
>
> 2. **Bước 2: Phân hoạch không gian hữu hạn $D$**
>    Vì $\mu(D) < \infty$, ta luôn có thể phân chia miền $D$ thành một số hữu hạn $k$ tập đo được đôi một rời nhau $D_1, D_2, \dots, D_k \in \mathfrak{A}$ sao cho:
>    $$D = \bigcup_{i=1}^k D_i \quad \text{và} \quad \mu(D_i) < \delta, \quad \forall i = 1, 2, \dots, k.$$
>    *(Số lượng mảnh phân hoạch hữu hạn: $k \le \lceil \frac{\mu(D)}{\delta} \rceil + 1 < \infty$).*
>
> 3. **Bước 3: Đánh giá chuẩn $L^1$ toàn cục**
>    Với mọi hàm $f \in \Lambda$ bất kỳ, áp dụng tính cộng tích phân:
>    $$\int_D |f| \, d\mu = \sum_{i=1}^k \int_{D_i} |f| \, d\mu < \sum_{i=1}^k 1 = k < \infty.$$
>    Lấy supremum theo $f \in \Lambda$ ở hai vế:
>    $$\sup_{f \in \Lambda} \|f\|_{L^1} \le k < \infty.$$
>    Vậy họ hàm $\Lambda$ bị chặn đều trong $L^1$.

> [!thm] (Đặc trưng Tương đương của Khả tích đều trên Không gian Đo Hữu hạn)
> Cho $(D, \mathfrak{A}, \mu)$ là không gian độ đo thỏa mãn $\mu(D) < \infty$ và họ hàm $\Lambda \subset L^1(D, \mu)$.
> Khi đó, họ $\Lambda$ **khả tích đều (UI)** khi và chỉ khi $\Lambda$ thỏa mãn tính **Liên tục tuyệt đối đều (Tính chất 1 / UAC)**:
> $$\Lambda \text{ là họ Khả tích đều (UI)} \iff \Lambda \text{ thỏa mãn Tính chất 1 (UAC)}.$$

> [!prf]
> 4. **Chiều thuận ($\implies$): Giả sử $\Lambda$ là họ UI**
>    Cố định $\varepsilon > 0$. Theo định nghĩa UI, chọn ngưỡng $M > 0$ đủ lớn sao cho $\sup_{f \in \Lambda} \int_{\{|f| \ge M\}} |f| \, d\mu < \frac{\varepsilon}{2}$.
>    Chọn $\delta = \frac{\varepsilon}{2M} > 0$. Với mọi tập $A \in \mathfrak{A}$ có $\mu(A) < \delta$ và với mọi $f \in \Lambda$:
>    $$\int_A |f| \, d\mu = \int_{A \cap \{|f| < M\}} |f| \, d\mu + \int_{A \cap \{|f| \ge M\}} |f| \, d\mu \le M \cdot \mu(A) + \int_{\{|f| \ge M\}} |f| \, d\mu < M \cdot \left( \frac{\varepsilon}{2M} \right) + \frac{\varepsilon}{2} = \varepsilon.$$
>    Lấy supremum theo $f \in \Lambda$, ta được $\sup_{f \in \Lambda} \int_A |f| \, d\mu \le \varepsilon$. Vậy $\Lambda$ thỏa mãn UAC.
>
> 5. **Chiều nghịch ($\impliedby$): Giả sử $\Lambda$ thỏa mãn UAC**
>    Do $\mu(D) < \infty$ và $\Lambda$ thỏa UAC, theo Bổ đề trên, họ $\Lambda$ tự động bị chặn đều trong $L^1$:
>    $$K = \sup_{f \in \Lambda} \int_D |f| \, d\mu < \infty.$$
>    Với $\varepsilon > 0$ cho trước, theo tính UAC tồn tại $\delta > 0$ sao cho $\mu(A) < \delta \implies \sup_{f \in \Lambda} \int_A |f| \, d\mu < \varepsilon$.
>    Áp dụng Bất đẳng thức Markov với $M > 0$:
>    $$\mu(\{|f| \ge M\}) \le \frac{1}{M} \int_D |f| \, d\mu \le \frac{K}{M}, \quad \forall f \in \Lambda.$$
>    Chọn $M_0$ đủ lớn sao cho $\frac{K}{M_0} < \delta$. Khi đó với mọi $M \ge M_0$ và mọi $f \in \Lambda$, ta có $\mu(\{|f| \ge M\}) < \delta$.
>    Áp dụng UAC trực tiếp lên tập mức $\{|f| \ge M\}$:
>    $$\sup_{f \in \Lambda} \int_{\{|f| \ge M\}} |f| \, d\mu < \varepsilon, \quad \forall M \ge M_0.$$
>    Suy ra $\lim_{M \to \infty} \sup_{f \in \Lambda} \int_{\{|f| \ge M\}} |f| \, d\mu = 0$, chứng minh $\Lambda$ là họ khả tích đều (UI).

> [!rem] (Nhận xét: Định lý Hội tụ Vitali trên Không gian Đo Hữu hạn)
> Cho $(D, \mathfrak{A}, \mu)$ là không gian độ đo thỏa mãn $\mu(D) < \infty$ và dãy hàm $\{f_n\} \subset L^1(D, \mu)$ thỏa mãn $f_n \xrightarrow{\text{a.e.}} f$.
> Do Tính chất 2 (Tính chặt) tự động thỏa mãn và $\text{UI} \iff \text{UAC}$, Định lý Hội tụ Vitali thu gọn thành dạng tương đương hoàn chỉnh:
> $$f_n \xrightarrow{L^1} f \iff \{f_n\} \text{ là họ Khả tích đều (UI)}.$$

> [!prf]
> - Chiều thuận ($\implies$): Do $f_n \xrightarrow{L^1} f$, theo *Điều kiện cần cho Hội tụ Vitali*, $\{f_n\}$ thỏa mãn UAC. Theo Định lý Đặc trưng trên, $\{f_n\}$ là họ UI.
> - Chiều nghịch ($\impliedby$): Do $\{f_n\}$ là họ UI, $\{f_n\}$ thỏa mãn UAC (Tính chất 1). Do $\mu(D) < \infty$, $\{f_n\}$ tự động thỏa mãn Tính chất 2. Theo *Định lý Hội tụ Vitali*, ta có ngay $f_n \xrightarrow{L^1} f$.

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



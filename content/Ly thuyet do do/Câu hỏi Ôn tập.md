
> [!prp] (Giả thiết sai Prob 9.22)
> Cho $(X, \mathfrak{A}, \mu)$ là không gian đo hữu hạn ($\mu(X) < \infty$). Giả sử $f_n, f \ge 0$, $f_n \to f$ a.e. và $\int_X f_n \to \int_X f < \infty$. 
> 
> Vì $\int_X f_n \le \int_X f + \varepsilon$ ($\forall n \ge n_0$), ta suy ra bất đẳng thức dạng điểm:
> $$f_n(x) \le f(x) + \varepsilon \quad \text{a.e. trên } X, \, \forall n \ge n_0$$
> Đặt $g(x) = f(x) + \varepsilon \in L^1(X)$ làm hàm trội cố định để áp dụng DCT cổ điển cho tập con $E$:
> $$\lim_{n \to \infty} \int_E f_n \, d\mu = \int_E f \, d\mu$$

> [!prf] 
> **1. Lỗi sai:**
> Bước nhảy logic từ tích phân $\int_X f_n \le \int_X f + \varepsilon$ (chặn số thực) sang hàm số $f_n(x) \le f(x) + \varepsilon$ (chặn điểm) là **SAI**. 
> 
> **2. Phản ví dụ minh chứng:**
> Trên $X = [0, 1]$ với độ đo Lebesgue ($\mu_L(X) = 1$). Xét dãy xung nhọn:
> $$f_n(x) = n^2 \chi_{\left(0, \frac{1}{n^2}\right)}(x)$$
> - **Hội tụ điểm:** $\forall x > 0$, chọn $n > \frac{1}{\sqrt{x}} \implies f_n(x) = 0$. Vậy $f_n \to f \equiv 0$ a.e.
> - **Tích phân toàn cục:** $\int_X f_n \, d\mu_L = n^2 \cdot \frac{1}{n^2} = 1 \implies \lim \int_X f_n = 1$.
> - **Mâu thuẫn:** Giả thiết $\lim \int_X f_n = \int_X f$ bị vi phạ. Bản thân hàm $f(x) + \varepsilon = \varepsilon$ không thể làm hàm trội để chặn được xung cao $n^2$. Kết luận sai trên tập con $E = [0, 1/2]$ vì $\lim \int_E f_n = 1 \neq 0 = \int_E f$.

> [!cor] Phát biểu ĐÚNG (Generalized DCT - Định lý 9.22)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ và $D \in \mathfrak{A}$. Giả sử $f_n \to f$ a.e. và $g_n \to g$ a.e. trên $D$. Nếu:
> 1. $|f_n(x)| \le g_n(x)$ a.e. trên $D, \, \forall n \ge 1$ (**Chặn điểm thực sự, không chặn bằng tích phân**).
> 2. $\lim_{n \to \infty} \int_D g_n \, d\mu = \int_D g \, d\mu < \infty$ (**Bảo toàn tích phân hàm trội**).
> 
> Khi đó, $\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$.

---

> [!prp] (DCT xuống BCT sai trên miền $\mu(D) = \infty$)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ và tập đo được $D \in \mathfrak{A}$. Giả sử dãy hàm số đo được $f_n \to f$ a.e. trên $D$.
> 
> Nếu dãy hàm thỏa mãn điều kiện **bị chặn đều bởi một hằng số thực $M$**:
> $$|f_n(x)| \le M \quad \text{a.e. trên } D, \, \forall n \ge 1$$
> Thì ta được phép hoán đổi giới hạn qua dấu tích phân: $\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$.

> [!prf] 
> **1. Lỗi sai:**
> Mệnh đề cố tình ép hàm trội cố định trong DCT thành hàm hằng: $g(x) = M\chi_D$. Khi miền tích phân có độ đo vô hạn ($\mu(D) = \infty$), ta có $\int_D g \, d\mu = M \cdot \mu(D) = \infty$, dẫn đến hàm trội $g \notin L^1(D)$. Khuyết tính khả tích của hàm bao, khối lượng tích phân có thể chạy ra vô cùng theo phương ngang mà giới hạn điểm cục bộ không giữ lại được.
> 
> **2. Phản ví dụ (Prob 8.10):**
> Trên miền vô hạn $D = [1, \infty)$ với độ đo Lebesgue ($\mu_L(D) = \infty$). Xét dãy hàm kéo dài:
> $$f_n(x) = \frac{1}{n} \chi_{[1, n]}(x)$$
> - **Kiểm tra chặn hằng số:** $|f_n(x)| \le 1$ đúng với mọi $n \ge 1, x \in D \implies M = 1$.
> - **Hội tụ điểm cục bộ:** Với mỗi $x \ge 1$ cố định, $\lim_{n \to \infty} f_n(x) = \lim_{n \to \infty} \frac{1}{n} = 0$. Vậy $f \equiv 0$ a.e.
> - **Mâu thuẫn:** 
> - Vế trái: $\lim_{n \to \infty} \int_D f_n \, d\mu_L = \lim_{n \to \infty} \left( \frac{1}{n} \cdot (n - 1) \right) = \lim_{n \to \infty} \left(1 - \frac{1}{n}\right) = 1$.
>   - Vế phải: $\int_D f \, d\mu_L = \int_1^\infty 0 \, dx = 0$.
>   Nhận thấy $1 \neq 0$, kết luận mệnh đề sai do khối lượng bị trượt dần ra vô cùng.

> [!cor] Sửa lại giả thiết để mệnh đề ĐÚNG 
> Để mệnh đề hội tụ bị chặn trên chạy được, ta bắt buộc phải bổ sung **một trong hai** rào chắn cấu trúc sau:
> 
> Phương án 1: Trói buộc không gian (Đưa về BCT chính thống)
> Bổ sung giả thiết không gian đo có **độ đo hữu hạn**:
> $$\mu(D) < \infty$$
> 
> Phương án 2: Trói buộc hàm số (Giữ miền $\mu(D) = \infty$ nhưng thêm Tính chặt)
> Giữ nguyên miền vô hạn $\mu(D) = \infty$, nhưng cưỡng bức dãy hàm số thỏa mãn **Tính chặt (Tightness)** của định lý Vitali:
> $$\forall \varepsilon > 0, \, \exists B \subset D \text{ với } \mu(B) < \infty \quad \text{sao cho} \quad \int_{D \setminus B} |f_n| \, d\mu < \varepsilon \quad (\forall n \ge 1)$$
> Điều kiện này ép phần đuôi vô hạn của đồ thị phải triệt tiêu đều, không cho phép khối lượng trượt ra vô cùng.

---

> [!prp] Mệnh đề 1: Nới lỏng MCT giảm (Hội tụ đơn điệu giảm)
> Cho dãy hàm đo được không âm $f_n \ge 0$ hội tụ đơn điệu giảm về $f$ h.k.n trên $D$ ($f_n \downarrow f$ a.e.). 
> **Điều kiện nới lỏng:** Chỉ cần tồn tại **một số hạng** $f_{n_0}$ khả tích ($\int_D f_{n_0} \, d\mu < \infty$) thay vì bắt toàn bộ dãy phải khả tích. Khi đó:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$$
> *Bản chất lỗi nếu khuyết giả thiết:* Nếu mọi $\int_D f_n \, d\mu = \infty$ (ví dụ: $f_n = \chi_{[n, \infty)}$ trên $\mathbb{R}$), ta thu được hiệu số vô định $\infty - \infty$ làm sụp đổ dấu bằng ($\lim \int f_n = \infty \neq 0 = \int f$).

---

> [!prp] Mệnh đề 2: Làm chặt Fatou thành đẳng thức (Định lý 8.14 - Prob 9.25)
> Cho dãy hàm số đo được không âm $f_n \ge 0$ và hội tụ điểm $f_n \to f$ a.e. trên $D$ (**Không cần tính đơn điệu**).
> **Điều kiện nới lỏng (Chặn một phía bởi giới hạn):** Nếu dãy hàm bị gông đầu từ phía trên bởi chính hàm giới hạn cục bộ của nó:
> $$f_n(x) \le f(x) \quad \text{a.e. trên } D, \, \forall n \ge 1$$
> Khi đó, bổ đề Fatou (vốn chỉ cho dấu $\le$) được nâng cấp thành đẳng thức hoán đổi giới hạn:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$$
> *Bản chất hình học:* Rào chặn $f_n \le f$ triệt tiêu hoàn toàn cơ chế tạo "xung nhọn vọt trần" (phương dọc), ép toàn bộ năng diện tích ở các bước thực phải khớp đúng với hàm đích.

---

> [!prp] (Giả thiết thiếu hàm chặn một phía)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ và dãy hàm số đo được đơn điệu tăng $f_n \uparrow f$ a.e. trên $D$. 
> Khi đó, ta luôn có quyền kết luận: $\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$.

> [!prf] 
> **1. Lỗi sai:**
> Nếu không có hàm khả tích bảo vệ từ phía dưới, dãy hàm đơn điệu tăng $f_n \uparrow f$ có thể xuất phát từ đáy vô cực âm ($-\infty$). Khi tích phân từng bước đều bằng $-\infty$, ta sẽ gặp phải dạng vô định $-\infty + \infty$ ở giới hạn tổng, làm dấu bằng tích phân biến mất.
> 
> **2. Phản ví dụ:**
> Trên miền hữu hạn $D = (0, 1)$ với độ đo Lebesgue ($\mu_L(D) = 1$). Xét dãy hàm giảm âm vọt đáy:
> $$f_n(x) = -\frac{1}{nx}$$
> - **Tính đơn điệu:** Khi $n \to \infty \implies \frac{1}{nx} \downarrow 0 \implies -\frac{1}{nx} \uparrow 0$. Vậy $f_n \uparrow f \equiv 0$ khắp nơi trên $(0,1)$.
> - **Mâu thuẫn:**
>   - Tích phân từng bước: $\int_0^1 \left(-\frac{1}{nx}\right) dx = -\frac{1}{n} \int_0^1 \frac{1}{x} dx = -\infty$ với mọi $n \ge 1$. Kéo theo $\lim_{n \to \infty} \int_D f_n \, d\mu_L = -\infty$.
>   - Tích phân giới hạn: $\int_D f \, d\mu_L = \int_0^1 0 \, dx = 0$.
>   Nhận thấy $-\infty \neq 0$, kết luận sụp đổ do khối lượng âm bị tràn ra vô cực ở các bước thực.

> [!cor] Sửa lại giả thiết cho Mệnh đề Chặn một phía trên không gian Vô hạn ($\mu(D) = \infty$)
> **Lỗi sai:** Cho $f_n \to f$ a.e. trên $D$ với $\mu(D) = \infty$. Nếu chỉ có điều kiện bị chặn hằng số $f_n(x) \le M$ a.e., dấu bằng giới hạn tích phân sẽ sụp đổ (Phản ví dụ Prob 8.10: $f_n = \frac{1}{n}\chi_{[1, n]} \to 0$ a.e. nhưng $\lim \int f_n = 1 \neq 0$).
> 
> Để mệnh đề hội tụ bị chặn trên chạy được, ta có 2 phương án sửa đổi độc lập tương ứng với 2 định lý lớn:
> 
> Phương án 1: (Vận dụng Generalized MCT - Thm 9.17)
> * **Giả thiết bổ sung:** Ép dãy hàm chạy theo một chiều cố định: **Tính đơn điệu tăng** ($f_n \uparrow f$ a.e. trên $D$).
> * Vì $f_n \uparrow f$ a.e. và bị chặn trên bởi hằng số $f_n \le M$, ta trói buộc được ranh giới hai đầu: $f_1(x) \le f_n(x) \le M$ a.e. trên $D$. 
>   Kích hoạt trực tiếp **Generalized MCT (Theorem 9.17(a))** với hàm mốc chặn dưới là $g(x) = f_1(x)$ (chú ý: nếu $f_1$ chưa khả tích, ta chỉ cần xét từ một số hạng thứ $n_0$ khả tích hoặc dùng kỹ thuật tịnh tiến nền đối với không gian đo hữu hạn), ta lập tức có được đẳng thức:
>   $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$$
> 
> Phương án 2: (Vận dụng Generalized DCT - Prob 9.22)
> * **Giả thiết bổ sung:** Cho phép hàm biến thiên tự do (không đơn điệu), nhưng ép **Giới hạn tích phân toàn cục phải hội tụ**: $\lim_{n \to \infty} \int_D f_n \, d\mu = I < \infty$.
> * Mục tiêu là chứng minh thuộc tính bảo toàn tích phân truyền xuống **mọi tập con $E \subset D$** theo tinh thần của bài toán tổng quát. 
>   Ta tự chế ra một dãy hàm trội động mới luôn không âm bằng phép hiệu chỉnh: $h_n(x) = M - f_n(x) \ge 0$ a.e. trên $D$. 
>   Khi $n \to \infty$, áp dụng giả thiết hội tụ điểm và hội tụ tích phân toàn cục vừa bổ sung:
>   1. $h_n \to M - f$ a.e. trên $D$.
>   2. $\lim_{n \to \infty} \int_D h_n \, d\mu = M\mu(D) - \lim_{n \to \infty} \int_D f_n \, d\mu = M\mu(D) - \int_D f \, d\mu = \int_D (M - f) \, d\mu$.
>   
>   Dãy $h_n \ge 0$ thỏa mãn trọn vẹn điều kiện của **Generalized DCT (Prob 9.22)**. Áp dụng định lý này cho tập con $E$, ta thu được:
>   $$\lim_{n \to \infty} \int_E h_n \, d\mu = \int_E (M - f) \, d\mu \implies \lim_{n \to \infty} \int_E (M - f_n) \, d\mu = \int_E (M - f) \, d\mu$$
>   Triệt tiêu hằng số tích phân đại số $M\mu(E)$ ở cả hai vế (nếu $\mu(E) < \infty$), hoặc áp dụng trực tiếp cho cấu trúc hiệu tổng quát, ta khóa chặt sai số tập con:
>   $$\lim_{n \to \infty} \int_E f_n \, d\mu = \int_E f \, d\mu$$

| Định lý | Dấu hàm | Đơn điệu? | $\mu(D)$ | Hàm trội | Hội tụ điểm | Kết luận |
|---|---|---|---|---|---|---|
| MCT (tăng) | $f_n \ge 0$ | $f_n \uparrow f$ | bất kỳ | - | a.e. | $\int f_n \to \int f$ |
| MCT (giảm) | $f_n \ge 0$ | $f_n \downarrow f$ | bất kỳ | cần $\exists k: \int f_k<\infty$ | a.e. | $\int f_n \to \int f$ |
| Fatou | $f_n \ge 0$ | không cần | bất kỳ | - | không cần (chỉ cần liminf) | $\int \liminf f_n \le \liminf \int f_n$ |
| Fatou ngược | bất kỳ | không cần | bất kỳ | $f_n \le g$, $g$ khả tích | không cần | $\limsup \int f_n \le \int \limsup f_n$ |
| Định lý 8.14 | $f_n \ge 0$ | $f_n \le f$ | bất kỳ | (chính $f$ đóng vai trò trội) | a.e. | $\int f_n \to \int f$ |
| BCT | bất kỳ | không cần | **$<\infty$** | hằng số $M$ | a.e. | $\int f_n \to \int f$ |
| DCT | bất kỳ | không cần | bất kỳ | hàm khả tích $g$ cố định | a.e. | $\int f_n \to \int f$, $\int|f_n-f|\to 0$ |
| Generalized DCT | bất kỳ | không cần | bất kỳ | dãy $g_n \to g$, $\int g_n \to \int g <\infty$ | a.e. | $\int f_n \to \int f$ |

| Phản ví dụ | Định lý bị thách thức | Điều kiện thiếu |
|---|---|---|
| $f_n = nx^n$ trên $[0,1]$ | MCT | dãy **không đơn điệu tăng** (tăng rồi giảm theo $n$ tại mỗi $x$ cố định) |
| $f_n = \chi_{[n,\infty)}$ trên $[0,\infty)$ | MCT giảm | không có số hạng nào khả tích (mọi $\int f_n = \infty$) |
| $f_n = \frac{1}{n}\chi_{[1,n]}$ trên $[1,\infty)$ | BCT | $\mu(D) = \infty$ (dù bị chặn đều và hội tụ đều) |
| $f_n(x) = \frac{n}{1+n^2x^2}$ trên $[a,\infty)$, $a\le 0$ | DCT | không tồn tại hàm trội khả tích thống nhất gần $x=0$ (hàm trội nhỏ nhất khả dĩ là $\frac{1}{2\lvert x\rvert}$, không khả tích quanh $0$) |


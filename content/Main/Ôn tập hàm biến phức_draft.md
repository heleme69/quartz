> [!prf] Khảo sát cung nhỏ $C_\varepsilon$ bằng phương pháp tham số hóa trực tiếp
> Hàm phức cần tích phân trên cung nhỏ là: $f(z) = \frac{e^{iz}}{z^2}$.
> Tham số hóa cung tròn nhỏ $C_\varepsilon$ né điểm kì dị $z=0$ ở nửa mặt phẳng trên:
> $$z = \varepsilon e^{i\theta} \implies dz = i\varepsilon e^{i\theta} d\theta$$
> Vì cung chạy hướng âm (theo chiều kim đồng hồ) từ phía trục hoành âm sang trục hoành dương, biến góc $\theta$ sẽ chạy lùi từ $\pi$ về $0$.
> 
> Thay toàn bộ phép tham số hóa vào tích phân đường:
> $$\int_{C_\varepsilon} \frac{e^{iz}}{z^2} \, dz = \int_{\pi}^{0} \frac{e^{i(\varepsilon e^{i\theta})}}{(\varepsilon e^{i\theta})^2} \cdot \left( i\varepsilon e^{i\theta} d\theta \right)$$
> 
> Rút gọn thừa số $\varepsilon e^{i\theta}$ ở cả tử và mẫu, ta đưa hằng số ảo $i$ ra ngoài:
> $$\int_{C_\varepsilon} \frac{e^{iz}}{z^2} \, dz = \frac{i}{\varepsilon} \int_{\pi}^{0} \frac{e^{i\varepsilon e^{i\theta}}}{e^{i\theta}} \, d\theta = -\frac{i}{\varepsilon} \int_{0}^{\pi} e^{-i\theta} \cdot e^{i\varepsilon e^{i\theta}} \, d\theta$$
> 
> Để tính giới hạn khi $\varepsilon \to 0$, ta sử dụng khai triển Maclaurin trực tiếp cho hàm mũ phức dưới dấu tích phân: $e^{w} = 1 + w + \mathcal{O}(w^2)$. Với $w = i\varepsilon e^{i\theta}$, ta có:
> $$e^{i\varepsilon e^{i\theta}} = 1 + i\varepsilon e^{i\theta} + \mathcal{O}(\varepsilon^2)$$
> 
> Thay ngược khai triển này vào biểu thức tích phân:
> $$\int_{C_\varepsilon} \frac{e^{iz}}{z^2} \, dz = -\frac{i}{\varepsilon} \int_{0}^{\pi} e^{-i\theta} \left[ 1 + i\varepsilon e^{i\theta} + \mathcal{O}(\varepsilon^2) \right] d\theta$$
> 
> Phân phối lượng $e^{-i\theta}$ vào bên trong dấu tích phân để tách thành các tích phân thành phần:
> $$\int_{C_\varepsilon} \frac{e^{iz}}{z^2} \, dz = -\frac{i}{\varepsilon} \int_{0}^{\pi} e^{-i\theta} \, d\theta - \frac{i}{\varepsilon} \int_{0}^{\pi} (i\varepsilon e^{i\theta} \cdot e^{-i\theta}) \, d\theta - \frac{i}{\varepsilon} \int_{0}^{\pi} e^{-i\theta} \cdot \mathcal{O}(\varepsilon^2) \, d\theta$$
> 
> Tiến hành tính toán và thu gọn từng số hạng:
> 
> 1. **Số hạng thứ nhất (Thành phần kỳ dị hình học):**
>    $$-\frac{i}{\varepsilon} \int_{0}^{\pi} e^{-i\theta} \, d\theta = -\frac{i}{\varepsilon} \left[ \frac{e^{-i\theta}}{-i} \right]_{0}^{\pi} = \frac{1}{\varepsilon} \left( e^{-i\pi} - e^0 \right) = \frac{1}{\varepsilon} (-1 - 1) = -\frac{2}{\varepsilon}$$
>    *(Lưu ý: Đại lượng $-\frac{2}{\varepsilon}$ này chính là lượng vô hạn sẽ triệt tiêu hoàn toàn với cụm $+\frac{2}{\varepsilon}$ từ phần thế cận thực $[uv]$ như đã chứng minh ở mục trước).*
> 
> 2. **Số hạng thứ hai (Thành phần Thặng dư):**
>    Vì $e^{i\theta} \cdot e^{-i\theta} = 1$, hằng số $\varepsilon$ ở tử và mẫu triệt tiêu nhau:
>    $$- \frac{i}{\varepsilon} \cdot i\varepsilon \int_{0}^{\pi} 1 \, d\theta = -i^2 \int_{0}^{\pi} d\theta = -(-1) \cdot \pi = \pi$$
> 
> 3. **Số hạng thứ ba (Thành phần vô cùng bé):**
>    Vì chứa lượng $\mathcal{O}(\varepsilon^2)$, khi chia cho $\varepsilon$ ở ngoài, tích phân này vẫn còn giữ lại bậc của $\varepsilon$:
>    $$\left| -\frac{i}{\varepsilon} \int_{0}^{\pi} e^{-i\theta} \cdot \mathcal{O}(\varepsilon^2) \, d\theta \right| \le \frac{1}{\varepsilon} \cdot K \cdot \varepsilon^2 \cdot \pi = K\pi\varepsilon \xrightarrow{\varepsilon \to 0} 0$$
> 
> Cộng tổng hợp cả 3 thành phần lại, ta thu được cấu trúc tiệm cận của cung nhỏ khi $\varepsilon \to 0$:
> $$\lim_{\varepsilon \to 0} \int_{C_\varepsilon} \frac{e^{iz}}{z^2} \, dz = -\frac{2}{\varepsilon} + \pi$$

# CẨM NANG TOÀN DIỆN VỀ KHAI TRIỂN CHUỖI LAURENT (QUY CHUẨN ĐỒNG BỘ VỀ TÂM 0)

> [!prp] 1. Hệ thống Khai triển Chuỗi Nguyên mẫu Gốc ($w \to 0$)
> *Đây là những "viên gạch" cơ sở nền tảng duy nhất bạn cần nhớ. Mọi khối thành phần sau khi dời tâm đều phải ép về các dạng thức nguyên mẫu này.*
> 
> * **Chuỗi hình học cơ bản (Cấp số nhân):** *(Hội tụ khi $|w| < 1$)*
>   $$\frac{1}{1-w} = \sum_{n=0}^{\infty} w^n = 1 + w + w^2 + w^3 + \dots$$
>   $$\frac{1}{1+w} = \sum_{n=0}^{\infty} (-1)^n w^n = 1 - w + w^2 - w^3 + \dots$$
> * **Hàm mũ phức:** *(Hội tụ khi $0 \le |w| < \infty$)*
>   $$e^w = \sum_{n=0}^{\infty} \frac{w^n}{n!} = 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$$
> * **Hàm lượng giác phức:** *(Hội tụ khi $0 \le |w| < \infty$)*
>   $$\sin w = \sum_{n=0}^{\infty} \frac{(-1)^n w^{2n+1}}{(2n+1)!} = w - \frac{w^3}{3!} + \frac{w^5}{5!} - \dots$$
>   $$\cos w = \sum_{n=0}^{\infty} \frac{(-1)^n w^{2n}}{(2n)!} = 1 - \frac{w^2}{2!} + \frac{w^4}{4!} - \dots$$

---

> [!algo] 2. Quy trình 4 Bước Systematic Nhất quán (The Master Algorithm)
> Mọi bài toán khai triển chuỗi Laurent bất kể độ phức tạp đều phải đi qua bộ lọc 4 bước không đổi sau:
> 
> * **Bước 1: Đổi biến dời tâm tuyệt đối về gốc $0$**
>   Đặt $w = z - z_0 \implies z = w + z_0$. Thay toàn bộ biến $z$ theo $w$ vào hàm số. **Từ đây về sau, ta chỉ làm việc với biến $w$ quanh tâm $0$.**
> 
> * **Bước 2: Tuyến tính hóa mẫu số bằng công thức Heaviside**
>   Nếu mẫu số là tích của nhiều nhân tử, áp dụng giới hạn Heaviside để tách thành tổng các phân thức bậc nhất độc lập theo biến $w$:
>   $$H(w) = \frac{P(w)}{(A_1w + B_1)(A_2w + B_2)} = \frac{C_1}{A_1w + B_1} + \frac{C_2}{A_2w + B_2}$$
>   $$\implies C_k = \lim_{w \to w_k} [H(w) \cdot (A_kw + B_k)] \quad (\text{với } w_k \text{ là nghiệm cực điểm của } w)$$
> 
> * **Bước 3: Tra cứu Ma trận Ép miền Hội tụ (Đối chiếu theo $|w|$)**
>   Xác định bán kính chặn $R = |-B_k/A_k|$ của từng khối. Đối chiếu với miền đề bài yêu cầu để chọn kỹ thuật:
> 
> | Vị trí Hình học yêu cầu | Kỹ thuật Đại số bắt buộc áp dụng quanh gốc $0$ | Dòng chuỗi sinh ra |
> | :--- | :--- | :--- |
> | **Miền TRONG cực điểm:** ${} \lvert w \rvert < R {}$ | Rút hằng số $B_k$ ra ngoài $\to \frac{C_k}{B_k(1 + \frac{A_k}{B_k}w)}$ | Chuỗi lũy thừa dương $(w^n)$ |
> | **Miền NGOÀI cực điểm:** ${} \lvert w \rvert > R {}$ | Rút biến chứa $w$ ra ngoài $\to \frac{C_k}{A_kw(1 + \frac{B_k}{A_kw})}$ | Chuỗi lũy thừa âm $(w^{-n})$ |
> | **Hàm hợp siêu việt ($e^{1/w^m}$)** | Khai triển Maclaurin trực tiếp theo biến phụ $u = \frac{1}{w^m}$ | Chuỗi lũy thừa âm vô hạn |
> 
> * **Bước 4: Tổ hợp đại số (Tích Cauchy / Cộng chuỗi) & Trả về cụm $(z-z_0)$**

---

> [!algo] 3. Khung thế số máy móc cho Khối Bậc nhất sau dời tâm ($\frac{1}{Aw + B}$)
> *Khi làm việc với biến $w$ quanh gốc $0$, hãy lấy hằng số $B$ và hệ số $A$ thả vào các bước dưới đây để tự động xuất chuỗi.*
> 
> #### TRƯỜNG HỢP MIỀN TRONG: $|w| < \left|\frac{B}{A}\right|$ (Rút hằng số $B$)
> * **Bước 3.1:** $\frac{1}{Aw+B} = \frac{1}{B \cdot \left(1 + \frac{A}{B}w\right)} = \frac{1}{B} \cdot \frac{1}{1 - \left(-\frac{A}{B}w\right)}$
> * **Bước 3.2:** Khai triển chuỗi hình học nguyên mẫu:
>   $$\frac{1}{Aw+B} = \frac{1}{B} \sum_{n=0}^{\infty} \left(-\frac{A}{B}w\right)^n = \sum_{n=0}^{\infty} \frac{(-1)^n A^n}{B^{n+1}} w^n$$
> 
> #### TRƯỜNG HỢP MIỀN NGOÀI: $|w| > \left|\frac{B}{A}\right|$ (Rút biến chứa $w$)
> * **Bước 3.1:** $\frac{1}{Aw+B} = \frac{1}{Aw \cdot \left(1 + \frac{B}{Aw}\right)} = \frac{1}{Aw} \cdot \frac{1}{1 - \left(-\frac{B}{Aw}\right)}$
> * **Bước 3.2:** Khai triển chuỗi hình học nguyên mẫu:
>   $$\frac{1}{Aw+B} = \frac{1}{Aw} \sum_{n=0}^{\infty} \left(-\frac{B}{Aw}\right)^n = \sum_{n=0}^{\infty} \frac{(-1)^n B^n}{A^{n+1} w^{n+1}}$$

---

> [!prob] 4. Bài tập thực chiến áp dụng quy trình chuẩn nhất quán
> Khai triển chuỗi Laurent hàm số sau quanh tâm **$z_0 = 1$** trong miền hình vành khăn $1 < |z-1| < 2$:
> $$f(z) = \frac{1}{(z-2)(z - 1 - 2i)} \cdot e^{z-1}$$

---

> [!prf] 5. Lời giải đồng bộ - Tự động thế số
> 
> ### **Bước 1: Đổi biến dời tâm tuyệt đối về $0$**
> Đặt $w = z - 1 \implies z = w + 1$. Thế toàn bộ vào hàm số để đưa về biến $w$:
> $$f(w+1) = \frac{1}{(w+1-2)(w+1-1-2i)} \cdot e^w = \frac{1}{(w-1)(w-2i)} \cdot e^w$$
> 
> ### **Bước 2: Tuyến tính hóa mẫu số phức bằng Heaviside theo biến $w$**
> Tách cấu trúc phân thức $H(w) = \frac{1}{(w-1)(w-2i)}$ thành tổng $\frac{C_1}{w-1} + \frac{C_2}{w-2i}$ bằng giới hạn giải tích:
> * **Tính $C_1$** (tại nghiệm cực điểm $w_1 = 1$):
>   $$C_1 = \lim_{w \to 1} [H(w) \cdot (w-1)] = \frac{1}{1-2i} = \frac{1+2i}{5}$$
> * **Tính $C_2$** (tại nghiệm cực điểm $w_2 = 2i$):
>   $$C_2 = \lim_{w \to 2i} [H(w) \cdot (w-2i)] = \frac{1}{2i-1} = \frac{-1-2i}{5} = -C_1$$
> 
> Đưa hằng số ra ngoài, biểu thức hàm số theo biến $w$ là:
> $$f(w+1) = \frac{1+2i}{5} \left( \frac{1}{w-1} - \frac{1}{w-2i} \right) \cdot e^w$$
> 
> ### **Bước 3: Tra cứu Khung thế số cho từng khối theo miền $1 < |w| < 2$**
> 
> * **Xử lý khối $\frac{1}{w-1}$ (Miền ngoài cực điểm vì $|w| > 1$):**
>   Thế số $A=1, B=-1$ vào công thức trường hợp Miền Ngoài:
>   $$\frac{1}{w-1} = \frac{1}{1 \cdot w} \sum_{n=0}^{\infty} \left(-\frac{-1}{1 \cdot w}\right)^n = \sum_{n=0}^{\infty} \frac{1}{w^{n+1}} = \frac{1}{w} + \frac{1}{w^2} + \dots \quad (1)$$
> 
> * **Xử lý khối $\frac{1}{w-2i}$ (Miền trong cực điểm vì $|w| < |2i| = 2$):**
>   Thế số $A=1, B=-2i$ vào công thức trường hợp Miền Trong:
>   $$\frac{1}{w-2i} = \frac{1}{-2i} \sum_{n=0}^{\infty} \left(-\frac{1}{-2i} w\right)^n = \frac{i}{2} \sum_{n=0}^{\infty} \left(\frac{iw}{2}\right)^n = \frac{i}{2} - \frac{1}{4}w - \dots \quad (2)$$
> 
> * **Xử lý khối hàm mũ $e^w$:** Tra cứu chuỗi nguyên mẫu gốc:
>   $$e^w = 1 + w + \frac{w^2}{2!} + \dots \quad (3)$$
> 
> ### **Bước 4: Tích Cauchy tổ hợp & Trả lại biến số $(z-1)$**
> Nhóm phần phân thức $H(w)$ từ kết quả (1) và (2):
> $$H(w) = C_1 \cdot \left( \frac{1}{w} + \frac{1}{w^2} + \dots \right) - (-C_1) \cdot \left( \frac{i}{2} - \frac{1}{4}w - \dots \right) = \dots + \frac{C_1}{w^2} + \frac{C_1}{w} + \frac{C_1i}{2} + \dots$$
> 
> Thực hiện nhân chuỗi $H(w) \cdot e^w$ để lọc ra các hệ số Laurent đại diện:
> $$f(w+1) = \left( \dots + \frac{C_1}{w^2} + \frac{C_1}{w} + \frac{C_1i}{2} + \dots \right) \cdot \left( 1 + w + \frac{w^2}{2} + \dots \right)$$
> $$f(w+1) = \dots + \frac{C_1}{w^2} + \frac{2C_1}{w} + \left(C_1 + \frac{C_1i}{2}\right) + \dots$$
> 
> Thay thế giá trị hệ số Heaviside $C_1 = \frac{1+2i}{5} \implies 2C_1 = \frac{2+4i}{5}$. 
> Trả ngược biến $w = z-1$, ta có chuỗi Laurent nhất quán cuối cùng:
> $$f(z) = \dots + \frac{1+2i}{5(z-1)^2} + \frac{2+4i}{5(z-1)} + \left(-\frac{1}{5} + \frac{3}{5}i\right) + \dots$$
> Phép giải hoàn thành một cách đồng bộ và nhất quán tuyệt đối. $\blacksquare$

# CẨM NANG TOÀN DIỆN VỀ KHAI TRIỂN CHUỖI LAURENT (QUY CHUẨN ĐỒNG BỘ VỀ TÂM 0)

> [!prp] 1. Hệ thống Khai triển Chuỗi Nguyên mẫu Gốc ($w \to 0$)
> *Đây là những "viên gạch" cơ sở nền tảng duy nhất bạn cần nhớ. Mọi khối thành phần sau khi dời tâm đều phải ép về các dạng thức nguyên mẫu này.*
> 
> * **Chuỗi hình học cơ bản (Cấp số nhân):** *(Hội tụ khi $|w| < 1$)*
>   $$\frac{1}{1-w} = \sum_{n=0}^{\infty} w^n = 1 + w + w^2 + w^3 + \dots$$
>   $$\frac{1}{1+w} = \sum_{n=0}^{\infty} (-1)^n w^n = 1 - w + w^2 - w^3 + \dots$$
> * **Hàm mũ phức:** *(Hội tụ khi $0 \le |w| < \infty$)*
>   $$e^w = \sum_{n=0}^{\infty} \frac{w^n}{n!} = 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$$
> * **Hàm lượng giác phức:** *(Hội tụ khi $0 \le |w| < \infty$)*
>   $$\sin w = \sum_{n=0}^{\infty} \frac{(-1)^n w^{2n+1}}{(2n+1)!} = w - \frac{w^3}{3!} + \frac{w^5}{5!} - \dots$$
>   $$\cos w = \sum_{n=0}^{\infty} \frac{(-1)^n w^{2n}}{(2n)!} = 1 - \frac{w^2}{2!} + \frac{w^4}{4!} - \dots$$

---

> [!prp] 2. Hệ thống Công thức Toán tử Bậc cao (Đạo hàm & Tích phân chuỗi tại tâm $0$)
> *Sử dụng khi khối thành phần sau dời tâm có mẫu số lũy thừa bậc cao ($m \ge 2$) hoặc chứa hàm Logarit tự nhiên phức. Tất cả đều vận hành theo biến $w$.*
> 
> * **Toán tử Đạo hàm (Nâng bậc mẫu số - Định lý Weierstrass):**
>   $$\frac{1}{(1-w)^m} = \frac{1}{(m-1)!} \cdot \frac{d^{m-1}}{dw^{m-1}}\left( \frac{1}{1-w} \right) = \sum_{n=0}^{\infty} \binom{n+m-1}{m-1} w^n \quad (|w| < 1)$$
>   * Đặc biệt mẫu bậc 2 ($m=2$): $\frac{1}{(1-w)^2} = \sum_{n=1}^{\infty} n w^{n-1} = 1 + 2w + 3w^2 + 4w^3 + \dots$
>   * Đặc biệt mẫu bậc 3 ($m=3$): $\frac{1}{(1-w)^3} = \sum_{n=2}^{\infty} \frac{n(n-1)}{2} w^{n-2} = 1 + 3w + 6w^2 + 10w^3 + \dots$
> * **Toán tử Tích phân (Hạ bậc mẫu số / Chuỗi Logarit phức):**
>   $$\ln(1-w) = -\int_{0}^{w} \frac{1}{1-t} dt = -\sum_{n=0}^{\infty} \frac{w^{n+1}}{n+1} = -w - \frac{w^2}{2} - \frac{w^3}{3} - \dots \quad (|w| < 1)$$
>   $$\ln(1+w) = \int_{0}^{w} \frac{1}{1+t} dt = \sum_{n=0}^{\infty} \frac{(-1)^n w^{n+1}}{n+1} = w - \frac{w^2}{2} + \frac{w^3}{3} - \dots \quad (|w| < 1)$$

---

> [!algo] Quy trình khai triển chuỗi Laurent:
> 
> **Bước 1: Đổi biến dời tâm tuyệt đối về gốc $0$**
>   Đặt $w = z - z_0 \implies z = w + z_0$. Thay toàn bộ biến $z$ theo $w$ vào hàm số. **Từ đây về sau, ta chỉ làm việc với biến $w$ quanh tâm $0$.**
> 
> **Bước 2: Tuyến tính hóa mẫu số bằng công thức Heaviside**
>   Nếu mẫu số là tích của nhiều nhân tử, áp dụng giới hạn Heaviside để tách thành tổng các phân thức độc lập theo biến $w$:
>   $$H(w) = \frac{P(w)}{(A_1w + B_1)(A_2w + B_2)} = \frac{C_1}{A_1w + B_1} + \frac{C_2}{A_2w + B_2}$$
>   $$\implies C_k = \lim_{w \to w_k} [H(w) \cdot (A_kw + B_k)] \quad (\text{với } w_k \text{ là nghiệm cực điểm của } w)$$
> 
> **Bước 3: Tra cứu Ma trận Ép miền Hội tụ (Đối chiếu theo $|w|$)**
>   Xác định bán kính chặn $R = |-B_k/A_k|$ của từng khối. Đối chiếu với miền đề bài yêu cầu để chọn kỹ thuật:
> 
> | Vị trí Hình học yêu cầu | Kỹ thuật Đại số bắt buộc áp dụng quanh gốc $0$ | Dòng chuỗi sinh ra |
> | :--- | :--- | :--- |
> | **Miền TRONG cực điểm:** $\lvert w \rvert < R$ | Rút hằng số $B_k$ ra ngoài $\to \frac{C_k}{B_k(1 + \frac{A_k}{B_k}w)}$ | Chuỗi lũy thừa dương $(w^n)$ |
> | **Miền NGOÀI cực điểm:** $\lvert w \rvert > R$ | Rút biến chứa $w$ ra ngoài $\to \frac{C_k}{A_kw(1 + \frac{B_k}{A_kw})}$ | Chuỗi lũy thừa âm $(w^{-n})$ |
> | **Hàm hợp siêu việt ($e^{1/w^s}$)** | Khai triển Maclaurin trực tiếp theo biến phụ $u = \frac{1}{w^s}$ | Chuỗi lũy thừa âm vô hạn |
> 
> **Bước 4: Tổ hợp đại số (Tích Cauchy / Cộng chuỗi) & Trả về cụm $(z-z_0)$**

> [!algo] Công thức nhanh
> 
> **1. Mẫu bậc nhất ($\frac{1}{Aw + B}$)**
> * **Trường hợp Miền Trong ($|w| < |B/A|$):**
>   $$\frac{1}{Aw+B} = \sum_{n=0}^{\infty} \frac{(-1)^n A^n}{B^{n+1}} w^n$$
> * **Trường hợp Miền Ngoài ($|w| > |B/A|$):**
>   $$\frac{1}{Aw+B} = \sum_{n=0}^{\infty} \frac{(-1)^n B^n}{A^{n+1} w^{n+1}}$$
> 
> **2.Mẫu bậc cao ($\frac{1}{(Aw + B)^m}$)**
> *Kết hợp rút hằng/biến từ Ma trận ép miền rồi đưa về toán tử đạo hàm chuẩn ở phần 2:*
> * **Trường hợp Miền Trong ($|w| < |B/A|$ - Rút hằng số $B^m$):**
>   $$\frac{1}{(Aw+B)^m} = \frac{1}{B^m \left(1 + \frac{A}{B}w\right)^m} = \frac{1}{B^m} \sum_{n=0}^{\infty} \binom{n+m-1}{m-1} \left(-\frac{A}{B}\right)^n w^n$$
> * **Trường hợp Miền Ngoài ($|w| > |B/A|$ - Rút biến số $(Aw)^m$):**
>   $$\frac{1}{(Aw+B)^m} = \frac{1}{(Aw)^m \left(1 + \frac{B}{Aw}\right)^m} = \sum_{n=0}^{\infty} \binom{n+m-1}{m-1} \frac{(-1)^n B^n}{A^{n+m} w^{n+m}}$$

> [!prob] Bài tập minh họa:
> Cho hàm số biến phức:
> $$f(z) = \frac{1}{(z - i)^2 (z - 2)} \cdot e^{z-i}$$
> Hãy sử dụng quy trình Systematic nhất quán để khai triển chuỗi Laurent của hàm $f(z)$ quanh tâm **$z_0 = i$** trong miền hình vành khăn chứa điểm $z = 1 + i$.

> [!prf] 
> **Bước 1: Đổi biến dời tâm tuyệt đối về gốc $0$**
> Đặt biến phụ dời tâm: $w = z - i \implies z = w + i$. 
> Thế toàn bộ mối liên hệ biến vào biểu thức hàm số ban đầu:
> $$f(w+i) = \frac{1}{w^2 (w + i - 2)} \cdot e^w = \frac{1}{w^2 (w - (2-i))} \cdot e^w$$
> 
> **Bước 2: Phân hoạch khối và biện luận miền theo biến $|w|$**
> * Nhân tử $w^2$ đứng cô lập ở mẫu ngay tại tâm $0$, ta giữ nguyên cấu trúc lũy thừa âm này.
> * Xét khối phân thức bậc nhất còn lại: $H(w) = \frac{1}{w - (2-i)}$, có hằng số hằng định dạng $Aw+B$ là $A = 1, B = -(2-i)$.
> * Tính bán kính chặn kỳ dị: $R = \left|\frac{B}{A}\right| = |-(2-i)| = \sqrt{2^2 + (-1)^2} = \sqrt{2}$.
> * Đề bài yêu cầu miền chứa điểm $z = 1+i \implies w = (1+i) - i = 1 \implies |w| = 1$.
> * Vì $0 < 1 < \sqrt{2}$, miền hội tụ quy chuẩn theo biến $w$ là:
>   $$\mathcal{D}_w = \{w \in \mathbb{C} \mid 0 < |w| < \sqrt{2}\}$$
> 
> **Bước 3: Khai triển độc lập từng thành phần dựa trên Khung thế số**
> Do điều kiện miền là $|w| < \sqrt{2}$ (Miền Trong cực điểm), ta tra cứu công thức mẫu bậc nhất hệ thống cho Trường hợp Miền Trong với hằng số $B = -2+i$:
> $$\frac{1}{w - (2-i)} = \sum_{n=0}^{\infty} \frac{(-1)^n \cdot 1^n}{(-2+i)^{n+1}} w^n = \sum_{n=0}^{\infty} \frac{(-1)^n}{(-2+i)^{n+1}} w^n$$
> 
> Bung cụ thể 3 số hạng đầu tiên của chuỗi lũy thừa dương này:
> * Với $n = 0 \implies \frac{1}{-2+i} = \frac{-2-i}{(-2)^2 - i^2} = -\frac{2}{5} - \frac{1}{5}i$
> * Với $n = 1 \implies \frac{-1}{(-2+i)^2} = \frac{-1}{3-4i} = \frac{-3-4i}{25} = -\frac{3}{25} - \frac{4}{25}i$
> 
> Do đó chuỗi phân thức là: $\frac{1}{w - (2-i)} = \left(-\frac{2}{5} - \frac{1}{5}i\right) + \left(-\frac{3}{25} - \frac{4}{25}i\right)w + \dots$
> 
> **Bước 4: Tổ hợp đại số tích Cauchy và trả về biến $(z-i)$**
> Kết hợp khối mẫu bậc cao đơn thức $\frac{1}{w^2}$ bằng cách nhân trực tiếp vào chuỗi phân thức vừa tìm:
> $$\frac{1}{w^2} \cdot \frac{1}{w - (2-i)} = \frac{-\frac{2}{5} - \frac{1}{5}i}{w^2} + \frac{-\frac{3}{25} - \frac{4}{25}i}{w} + \dots \quad (\alpha)$$
> 
> Tiếp tục thực hiện phép nhân tích Cauchy giữa chuỗi đại số $(\alpha)$ và chuỗi Maclaurin của hàm mũ $e^w = 1 + w + \frac{w^2}{2} + \dots$:
> $$f(w+i) = \left( \frac{-\frac{2}{5} - \frac{1}{5}i}{w^2} + \frac{-\frac{3}{25} - \frac{4}{25}i}{w} + \dots \right) \cdot \left( 1 + w + \frac{w^2}{2} + \dots \right)$$
> 
> Phân phối thu hoạch các hạng tử bậc thấp để tạo chuỗi Laurent hoàn chỉnh:
> * Hệ số đứng trước $w^{-2}$ là: $-\frac{2}{5} - \frac{1}{5}i$
> * Hệ số đứng trước $w^{-1}$ là: $\left(-\frac{2}{5} - \frac{1}{5}i\right) \cdot 1 + \left(-\frac{3}{25} - \frac{4}{25}i\right) \cdot 1 = -\frac{13}{25} - \frac{9}{25}i$
> 
> Thay ngược lại cụm dời tâm ban đầu $w = z - i$, ta có đáp số chuỗi Laurent nhất quán cuối cùng:
> $$f(z) = \frac{-\frac{2}{5} - \frac{1}{5}i}{(z-i)^2} + \frac{-\frac{13}{25} - \frac{9}{25}i}{z-i} + \dots$$

# CHUYÊN ĐỀ TỔNG QUÁT: LÝ THUYẾT ĐA TRỊ VÀ TRỊ CHÍNH (PRINCIPAL VALUES)

Trong giải tích phức, sự xuất hiện của tính "đa trị" (multi-valued) có nguồn gốc duy nhất từ tính tuần hoàn của hàm mũ phức $e^{i\theta}$. Do đó, mọi khái niệm về **Trị chính (Principal Value)** của hàm logarit, lũy thừa, hay hàm ngược đều xoay quanh việc cố định một chu kỳ duy nhất cho góc Argument.

---

## 1. Argument và Nhánh Logarit (Cội nguồn của đa trị)

> [!def] Argument và Argument chính
> Cho số phức $z = x + iy \neq 0$. 
> *   **Argument đa trị:** $\text{arg}(z) = \theta + 2k\pi \quad (k \in \mathbb{Z})$, tập hợp tất cả các góc định hướng tạo bởi tia $Oz$ và trục thực.
> *   **Argument chính (Trị chính):** Ký hiệu là $\text{Arg}(z)$, là giá trị góc duy nhất bị giới hạn trong khoảng $(-\pi, \pi]$.
> $$\text{arg}(z) = \text{Arg}(z) + 2k\pi$$

> [!def] Hàm Logarit phức
> Hàm $\log z$ là hàm ngược của hàm mũ $e^w = z$.
> *   **Logarit đa trị:** $\log z = \ln|z| + i\text{arg}(z) = \ln|z| + i(\text{Arg}(z) + 2k\pi)$.
> *   **Logarit chính (Trị chính):** Hàm đơn trị thu được khi chọn $k=0$ (tức là lấy $\text{Arg}(z)$).
> $$\text{Log}(z) = \ln|z| + i\text{Arg}(z)$$

> [!prp] Tính chất cốt lõi
> *   $\log(z_1 z_2) = \log(z_1) + \log(z_2)$ (luôn đúng với đa trị).
> *   $\text{Log}(z_1 z_2) = \text{Log}(z_1) + \text{Log}(z_2)$ (KHÔNG luôn đúng, có thể bị lệch một lượng $\pm i2\pi$ nếu tổng góc vượt ranh giới $(-\pi, \pi]$).

---

## 2. Hàm Lũy thừa phức $z^c$

> [!def] Lũy thừa tổng quát
> Định nghĩa chặt chẽ thông qua hàm logarit:
> $$z^c = \exp[c \cdot \log z] = e^{c \cdot \log z}$$
> *   **Tập tất cả các giá trị:** Thế $\log z$ đa trị vào công thức trên.
> *   **Giá trị chính (P.V. - Principal Value):** Ký hiệu $\text{P.V.}(z^c) = \exp[c \cdot \text{Log}(z)]$.

> [!algo] Thuật toán Systematic giải lũy thừa phức
> Để tìm tất cả các giá trị và trị chính của $A^B$:
> 1.  **Chuyển đổi cơ số:** Tính $\log A = \ln|A| + i(\text{Arg}(A) + 2k\pi)$.
> 2.  **Đồng nhất số mũ:** Nhân phân phối số mũ $B$ vào biểu thức logarit: $B \cdot \log A$. Thu gọn đại số (dùng $i^2 = -1$).
> 3.  **Tách nhánh và Kết luận:** Đưa biểu thức về dạng $e^{\text{Thực}} \cdot e^{i \cdot \text{Ảo}}$. 
>     *   Toàn bộ nghiệm tương ứng với $k \in \mathbb{Z}$.
>     *   Trị chính đạt được khi thế $k = 0$.

**Ví dụ minh họa:** Tìm tất cả các giá trị và giá trị chính của $(-1+i)^{2i}$.

> [!ans] Lời giải chi tiết
> *   **Bước 1:** Khai triển cơ số $A = -1+i$.
>     Ta có $|A| = \sqrt{2}$ và điểm này nằm ở góc phần tư thứ II $\implies \text{Arg}(A) = \frac{3\pi}{4}$.
>     $$\log(-1+i) = \ln\sqrt{2} + i\left(\frac{3\pi}{4} + 2k\pi\right)$$
> *   **Bước 2:** Đồng nhất số mũ $B = 2i$.
>     $$(-1+i)^{2i} = e^{2i \cdot \left[ \ln\sqrt{2} + i\left(\frac{3\pi}{4} + 2k\pi\right) \right]}$$
>     Nhân phân phối $2i$ vào trong:
>     $$2i \ln\sqrt{2} + 2i^2\left(\frac{3\pi}{4} + 2k\pi\right) = i\ln 2 - 2\left(\frac{3\pi}{4} + 2k\pi\right) = -\left(\frac{3\pi}{2} + 4k\pi\right) + i\ln 2$$
> *   **Bước 3:** Kết luận.
>     *   **Tất cả các giá trị:** $e^{-\left(\frac{3\pi}{2} + 4k\pi\right)} \cdot e^{i\ln 2} = e^{-\frac{3\pi}{2} - 4k\pi} \cdot (\cos(\ln 2) + i\sin(\ln 2))$ với $k \in \mathbb{Z}$.
>     *   **Giá trị chính (P.V.):** Thế $k=0 \implies e^{-\frac{3\pi}{2}} \cdot (\cos(\ln 2) + i\sin(\ln 2))$.

---

## 3. Hàm Mũ $e^z$ và Lượng giác $\sin z, \cos z$

> [!def] Định nghĩa mở rộng trên $\mathbb{C}$
> Các hàm này bản thân chúng là **hàm đơn trị** (chỉ cho 1 kết quả duy nhất tại mỗi điểm $z$), do đó chúng KHÔNG có khái niệm "trị chính".
> *   **Hàm mũ:** $e^z = e^{x+iy} = e^x(\cos y + i\sin y)$
> *   **Hàm lượng giác (Định lý Euler):**
>     $$\sin z = \frac{e^{iz} - e^{-iz}}{2i}, \quad \cos z = \frac{e^{iz} + e^{-iz}}{2}$$

> [!prp] Tính chất tuần hoàn (Bản chất ánh xạ)
> *   $e^z$ tuần hoàn với chu kỳ $T = 2\pi i$. Ánh xạ một dải ngang (vd: $-\pi < y \le \pi$) thành toàn bộ mặt phẳng phức thủng $w \neq 0$.
> *   $\sin z, \cos z$ tuần hoàn với chu kỳ $T = 2\pi$.

---

## 4. Ánh xạ ngược (Hàm lượng giác ngược)

Vì $\sin z, \cos z$ được định nghĩa qua hàm mũ $e^{iz}$, nên hàm ngược của chúng (giải phương trình $w = \sin z$ tìm $z$) sẽ dẫn đến việc giải phương trình bậc hai đối với $e^{iz}$, từ đó nảy sinh hàm logarit đa trị.

> [!def] Công thức Hàm lượng giác ngược tổng quát (Đa trị)
> Dựa vào công thức nghiệm của phương trình Euler, ta có:
> *   $\arcsin z = -i \log\left(iz + (1 - z^2)^{1/2}\right)$
> *   $\arccos z = -i \log\left(z + i(1 - z^2)^{1/2}\right)$
> *   $\arctan z = \frac{i}{2} \log\left(\frac{i+z}{i-z}\right)$
> 
> *Lưu ý: $(1-z^2)^{1/2}$ đại diện cho căn bậc hai phức (có 2 giá trị).*

> [!algo] Thuật toán Systematic giải Ánh xạ ngược Lượng giác
> Mọi bài toán tính giá trị hàm lượng giác ngược đều tuân theo lộ trình đại số cố định:
> 1.  **Xử lý căn phức:** Tính $X = (1 - z^2)^{1/2}$. Chọn cả 2 giá trị $\pm$.
> 2.  **Lập biểu thức trong Logarit:** Tính $Y = iz + X$ (đối với $\arcsin$) hoặc $Y = z + iX$ (đối với $\arccos$). Ta thu được 2 cụm $Y_1, Y_2$.
> 3.  **Khai triển Logarit đa trị:** Tính $\log(Y)$ cho từng trường hợp. Cộng đuôi $i2k\pi$.
> 4.  **Nhân hệ số ngoài cùng:** Nhân $-i$ vào kết quả để thu được tập nghiệm cuối cùng.
> 5.  **Trị chính:** Trị chính của hàm lượng giác ngược đạt được bằng cách: Chọn nhánh căn có phần thực dương (hoặc phần ảo dương nếu phần thực bằng 0), sau đó chọn nhánh Logarit chính $\text{Log}$ (tức $k=0$).

**Ví dụ minh họa:** Tìm tất cả các giá trị của $\arcsin(2)$ và chỉ ra trị chính.

> [!ans] Lời giải chi tiết $\arcsin(2)$
> Ta sử dụng công thức: $z = -i \log\left(2i + (1 - 2^2)^{1/2}\right)$.
> 
> *   **Bước 1: Xử lý căn phức**
>     $(1 - 4)^{1/2} = (-3)^{1/2} = \pm i\sqrt{3}$.
> 
> *   **Bước 2: Lập biểu thức trong logarit $Y$**
>     Ta có 2 trường hợp cho $Y = 2i \pm i\sqrt{3}$:
>     *   $Y_1 = i(2 + \sqrt{3})$
>     *   $Y_2 = i(2 - \sqrt{3})$
> 
> *   **Bước 3 & 4: Khai triển Logarit và nhân $-i$**
>     Nhận xét cả $Y_1$ và $Y_2$ đều là các số thuần ảo dương (do $2 > \sqrt{3}$), nên Argument của chúng đều là $\frac{\pi}{2}$.
>     
>     *Với $Y_1 = i(2 + \sqrt{3})$:*
>     $$z_1 = -i \log(i(2+\sqrt{3})) = -i \left[ \ln(2+\sqrt{3}) + i\left(\frac{\pi}{2} + 2k\pi\right) \right] = \frac{\pi}{2} + 2k\pi - i\ln(2+\sqrt{3})$$
>     
>     *Với $Y_2 = i(2 - \sqrt{3})$:*
>     $$z_2 = -i \log(i(2-\sqrt{3})) = -i \left[ \ln(2-\sqrt{3}) + i\left(\frac{\pi}{2} + 2n\pi\right) \right] = \frac{\pi}{2} + 2n\pi - i\ln(2-\sqrt{3})$$
>     
>     *(Ghi chú đại số: Vì $(2+\sqrt{3})(2-\sqrt{3}) = 1 \implies \ln(2-\sqrt{3}) = -\ln(2+\sqrt{3})$. Ta có thể gộp 2 họ nghiệm lại thành: $z = \frac{\pi}{2} + 2k\pi \pm i\ln(2+\sqrt{3})$).*
> 
> *   **Bước 5: Xác định Trị chính (P.V.)**
>     Theo quy ước, ta lấy nhánh căn dương $X = +i\sqrt{3} \implies Y = i(2+\sqrt{3})$ và chọn nhánh Logarit chính ($k=0$).
>     Thế $k=0$ vào họ nghiệm thứ nhất, ta được giá trị chính:
>     $$\text{P.V.}(\arcsin 2) = \frac{\pi}{2} - i\ln(2+\sqrt{3})$$

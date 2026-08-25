# CẨM NANG TOÁN HỌC: CẦU PHƯƠNG NEWTON-COTES

---

## I. CƠ SỞ LÝ THUYẾT VÀ KIẾN TRÚC LƯỚI

> [!def] Định nghĩa (Bài toán Cầu phương Số)
> Cầu phương số là phương pháp xấp xỉ tích phân xác định $\int_a^b f(x) dx$ bằng một tổ hợp tuyến tính các giá trị của hàm số tại các điểm nút (mốc) $x_i$ được chọn trước:
> $$\int_a^b f(x) dx \approx \sum_{i=0}^n w_i f(x_i)$$
> Trong đó, $x_i$ là các mốc nội suy và $w_i$ là các trọng số tương ứng.

Họ phương pháp Newton-Cotes đặc trưng bởi việc sử dụng **lưới cách đều**. Phân loại dựa trên vị trí của các mốc nội suy so với biên của miền $[a, b]$:

> [!prp] Tính chất (Kiến trúc Lưới Newton-Cotes)
> 1. **Newton-Cotes Đóng (Closed):** Mốc nội suy bao gồm cả hai điểm biên $a$ và $b$.
>    - Bước lưới: $h = \frac{b-a}{n}$
>    - Tọa độ mốc: $x_i = a + ih \quad (i = 0, \dots, n)$, với $x_0 = a$ và $x_n = b$.
> 2. **Newton-Cotes Mở (Open):** Mốc nội suy nằm nghiêm ngặt trong khoảng mở $(a, b)$, không bao gồm biên.
>    - Bước lưới: $h = \frac{b-a}{n+2}$
>    - Tọa độ mốc: $x_i = a + (i+1)h \quad (i = 0, \dots, n)$, với $x_{-1} = a$ và $x_{n+1} = b$.

---

## II. XÂY DỰNG BỘ TRỌNG SỐ

Việc xác định các trọng số $w_i$ có thể được thực hiện qua hai phương pháp giải tích tương đương trên miền tham chiếu $[-1, 1]$ hoặc $[a, b]$.

### 1. Phương pháp Nội suy Lagrange
> [!thm] Định lý (Trọng số theo Đa thức Lagrange)
> Trọng số $w_i$ bằng tích phân của đa thức cơ sở Lagrange tương ứng trên miền lấy tích phân:
> $$w_i = \int_a^b l_i(x) dx = \int_a^b \prod_{\substack{j=0 \\ j \neq i}}^n \frac{x - x_j}{x_i - x_j} dx$$
> Đối với lưới cách đều thông qua phép biến đổi Affine $x = a + th$, công thức này dẫn xuất ra hệ số Cotes tỷ lệ độc lập với $[a, b]$.

### 2. Phương pháp Hệ số Bất định (Ma trận Vandermonde)
> [!thm] Bổ đề (Hệ Vandermonde cho Cầu phương)
> Để đạt bậc chính xác đại số $n$, công thức cầu phương phải đúng tuyệt đối với mọi đa thức $P(x)$ có $\text{deg}(P) \le n$. Bằng cách xét tập đơn thức cơ sở $\{1, x, x^2, \dots, x^n\}$, hệ trọng số được xác định là nghiệm duy nhất của hệ phương trình tuyến tính dạng Vandermonde:
> $$\begin{pmatrix} 
> 1 & 1 & \dots & 1 \\ 
> x_0 & x_1 & \dots & x_n \\ 
> x_0^2 & x_1^2 & \dots & x_n^2 \\ 
> \vdots & \vdots & \ddots & \vdots \\ 
> x_0^n & x_1^n & \dots & x_n^n 
> \end{pmatrix} 
> \begin{pmatrix} w_0 \\ w_1 \\ w_2 \\ \vdots \\ w_n \end{pmatrix} = 
> \begin{pmatrix} \mu_0 \\ \mu_1 \\ \mu_2 \\ \vdots \\ \mu_n \end{pmatrix}$$
> Trong đó, $\mu_k = \int_a^b x^k dx$ là moment đại số thứ $k$ trên miền tích phân tương ứng.

---

## III. CÁC ĐỊNH LÝ SAI SỐ TỔNG QUÁT

> [!thm] Định lý (Công thức Newton-Cotes Đóng)
> Cho hàm $f(x)$ xác định trên đoạn $[a, b]$ và có $(n+1)$ điểm cầu phương với $x_i = a + ih, i = \overline{0, n}$ và $h = \frac{b-a}{n}, x_0 = a, x_n = b$.
> - **Nếu $n$ chẵn và $f \in C^{n+2}[a, b]$ thì:**
>   $$\int_a^b f(x) dx = \sum_{i=0}^n a_i f(x_i) + \frac{h^{n+3} f^{(n+2)}(\xi)}{(n+2)!} \int_0^n t^2(t-1)\cdots(t-n) dt$$
> - **Nếu $n$ lẻ và $f \in C^{n+1}[a, b]$ thì:**
>   $$\int_a^b f(x) dx = \sum_{i=0}^n a_i f(x_i) + \frac{h^{n+2} f^{(n+1)}(\xi)}{(n+1)!} \int_0^n t(t-1)\cdots(t-n) dt$$
> với $\xi \in (a, b)$ và $a_i = h \int_0^n \prod_{j=0, j \neq i}^n \frac{t-j}{i-j} dt$.

> [!thm] Định lý (Công thức Newton-Cotes Mở)
> Giả sử $\sum_{i=0}^n a_i f(x_i)$ là ký hiệu của công thức $(n+1)$-điểm đối với công thức Newton-Cotes mở với $x_{-1} = a, x_{n+1} = b, h = \frac{b-a}{n+2}$. Khi đó tồn tại $\xi \in (a, b)$ thỏa mãn:
> - **Nếu $n$ chẵn và $f \in C^{n+2}[a, b]$:**
>   $$\int_a^b f(x) dx = \sum_{i=0}^n a_i f(x_i) + \frac{h^{n+3} f^{(n+2)}(\xi)}{(n+2)!} \int_{-1}^{n+1} t^2(t-1)\cdots(t-n) dt$$
> - **Nếu $n$ lẻ và $f \in C^{n+1}[a, b]$:**
>   $$\int_a^b f(x) dx = \sum_{i=0}^n a_i f(x_i) + \frac{h^{n+2} f^{(n+1)}(\xi)}{(n+1)!} \int_{-1}^{n+1} t(t-1)\cdots(t-n) dt$$

> [!prp] Hệ quả (Quy tắc Điểm giữa - Midpoint Rule)
> Xét tích phân của hàm $f$ trên đoạn $[a, b]$, đạo hàm bậc hai $f''$ liên tục trên $[a, b]$. Cầu phương Newton-Cotes mở với $n=0$ cho ta:
> $$\int_a^b f(x) dx = (b-a)f\left(\frac{a+b}{2}\right) + \frac{(b-a)^3}{24} f''(\xi)$$
> với $\xi$ nằm giữa $a$ và $b$.

---

## IV. CÁC CÔNG THỨC CẦU PHƯƠNG MỞ RỘNG (COMPOSITE RULES)

Ký hiệu chung: Chia $[a, b]$ thành $m$ khoảng con, bước lưới $h = \frac{b-a}{m}$. Chặn đạo hàm tối đa $M_p = \max_{x \in [a,b]} |f^{(p)}(x)|$. Cấu trúc sai số tổng quát toàn cục có dạng $|E| \le \frac{b-a}{K} h^p M_p$.

| Phương pháp | Loại lưới | Yêu cầu số khoảng $m$ | Bậc hội tụ $p$ | Công thức Xấp xỉ $\int_a^b f(x)dx$ | Chặn Sai số Toàn cục $|E|$ |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **Hình thang** | Đóng | Tùy ý | $2$ | $\frac{h}{2} \left[ f(x_0) + 2\sum_{i=1}^{m-1} f(x_i) + f(x_m) \right]$ | $\le \frac{b-a}{12} h^2 M_2$ |
| **Midpoint** | Mở | Tùy ý | $2$ | $2h \sum_{j=0}^{m/2-1} f(x_{2j+1})$ *(với $h_{mid} = 2h$)* | $\le \frac{b-a}{24} h^2 M_2$ |
| **Simpson 1/3** | Đóng | Chia hết cho 2 | $4$ | $\frac{h}{3} \left[ f(x_0) + 4\sum f(x_{lẻ}) + 2\sum f(x_{chẵn}) + f(x_m) \right]$ | $\le \frac{b-a}{180} h^4 M_4$ |
| **Simpson 3/8** | Đóng | Chia hết cho 3 | $4$ | $\frac{3h}{8} \left[ f(x_0) + 3\sum_{i \neq 3k} f(x_i) + 2\sum_{i = 3k} f(x_i) + f(x_m) \right]$ | $\le \frac{b-a}{80} h^4 M_4$ |

---

## V. PHÂN LOẠI DẠNG TOÁN VÀ CHIẾN THUẬT XỬ LÝ ĐẠI SỐ

### Dạng 1: Tích phân số trên Không gian Lưới không đều (Non-uniform Grids)
- **Đặc điểm nhận dạng:** Bộ dữ liệu rời rạc $(x_i, y_i)$ có khoảng cách $h_i = x_{i+1} - x_i$ thay đổi theo từng bước chỉ số.
- **Chiến thuật xử lý:** Tính chất cộng tính của tích phân Riemann cho phép phân rã miền toàn cục thành tổng các miền hữu hạn vi mô. Áp dụng quy tắc Cầu phương Đơn (thường là Hình thang) trên từng phân đoạn độc lập: $\int_a^b = \sum_{i=0}^{m-1} \int_{x_i}^{x_{i+1}}$.

> [!exm] Ví dụ 1 (Lưới không đều)
> Xác định công sinh ra $W = \int_{0}^{5} F(x) dx$ của một lực $F(x)$ (đơn vị Newton) làm vật di chuyển theo trục $x$ (đơn vị mét) dựa trên bảng dữ liệu rời rạc sau:
> 
> | $x$ | 0 | 1.5 | 2.5 | 4.5 | 5.0 |
> | :--- | :---: | :---: | :---: | :---: | :---: |
> | $F(x)$ | 2.0 | 3.5 | 4.0 | 2.5 | 1.0 |

> [!sol] Lời giải
> Bước lưới không đồng nhất: $h_0 = 1.5$, $h_1 = 1.0$, $h_2 = 2.0$, $h_3 = 0.5$. Áp dụng quy tắc Hình thang đơn cho từng phân đoạn $[x_i, x_{i+1}]$:
> $$W \approx \sum_{i=0}^3 \frac{h_i}{2} [F(x_i) + F(x_{i+1})]$$
> $$W \approx \frac{1.5}{2}(2.0 + 3.5) + \frac{1.0}{2}(3.5 + 4.0) + \frac{2.0}{2}(4.0 + 2.5) + \frac{0.5}{2}(2.5 + 1.0)$$
> $$W \approx 4.125 + 3.750 + 6.500 + 0.875 = 15.25 \text{ (J)}$$

---

### Dạng 2: Khớp nối Cầu phương Đa lưới (Multi-grid Quadrature Bridging)
- **Đặc điểm nhận dạng:** Bảng dữ liệu có số lượng phân đoạn lưới $m$ không thỏa mãn ràng buộc tính chia hết của quy tắc Simpson mở rộng (ví dụ $m=5$ hoặc $m=7$).
- **Chiến thuật xử lý:** Thiết lập phân hoạch kết hợp bảo toàn tính liên tục. Chia miền gốc thành hai phân miền không giao nhau có phần trong rời nhau, sao cho một phân miền có độ chia chẵn (sử dụng Simpson 1/3) và phân miền còn lại có độ chia là bội của 3 (sử dụng Simpson 3/8).

> [!exm] Ví dụ 2 (Khớp nối Simpson)
> Xấp xỉ tích phân $I = \int_{0}^{1.25} x e^x dx$ bằng phương pháp Simpson với số khoảng chia $m = 5$.

> [!sol] Lời giải
> Phân hoạch đoạn $[0, 1.25]$ thành $m=5$ khoảng với bước lưới không đổi $h = 0.25$. Tập các mốc: $\{0, 0.25, 0.5, 0.75, 1.0, 1.25\}$. Do $m=5$ lẻ, ta phân rã miền thành hai tập con hợp lệ:
> - **Phân miền 1 ($[0, 0.5]$, $m_1 = 2$):** Áp dụng Simpson 1/3.
>   $$I_1 \approx \frac{h}{3} [f(0) + 4f(0.25) + f(0.5)] = \frac{0.25}{3} [0 + e^{0.25} + 0.5e^{0.5}] \approx 0.1760$$
> - **Phân miền 2 ($[0.5, 1.25]$, $m_2 = 3$):** Áp dụng Simpson 3/8.
>   $$I_2 \approx \frac{3h}{8} [f(0.5) + 3f(0.75) + 3f(1.0) + f(1.25)]$$
>   $$I_2 \approx \frac{0.75}{8} [0.5e^{0.5} + 2.25e^{0.75} + 3e + 1.25e^{1.25}] \approx 1.7042$$
> Xấp xỉ toàn cục: $I \approx I_1 + I_2 = 0.1760 + 1.7042 = 1.8802$.

---

### Dạng 3: Kì dị biên và Tích phân suy rộng (Boundary Singularities)
- **Đặc điểm nhận dạng:** Hàm dưới dấu tích phân $\lim_{x \to a^+} f(x) = \pm\infty$ hoặc $\lim_{x \to b^-} f(x) = \pm\infty$.
- **Chiến thuật xử lý:** Các phương pháp Newton-Cotes đóng gây ra lỗi tính toán tại biên. Bắt buộc chuyển đổi sang họ Newton-Cotes Mở (như Quy tắc Điểm giữa). Không gian điểm lưới mở cách ly hoàn toàn cực điểm bất thường.

> [!exm] Ví dụ 3 (Tích phân kì dị)
> Đánh giá xấp xỉ số học cho tích phân suy rộng $I = \int_{0}^{1} \frac{1}{\sqrt{x}} dx$ bằng quy tắc Điểm giữa mở rộng với số khoảng lưới nội bộ $n = 3$.

> [!sol] Lời giải
> Nhận diện kì dị: $\lim_{x \to 0^+} \frac{1}{\sqrt{x}} = +\infty$. Newton-Cotes Đóng bất khả thi.
> Sử dụng Newton-Cotes Mở. Tổng số khoảng chia toàn miền là $m = n + 2 = 5$.
> Bước lưới định danh: $h = \frac{1 - 0}{5} = 0.2$. Tập các mốc nội bộ $x_i \in (0, 1)$:
> $x_1 = 0.2, x_2 = 0.4, x_3 = 0.6, x_4 = 0.8$. Tránh hoàn toàn điểm $x=0$.
> Phương trình Điểm giữa mở rộng:
> $$I \approx h \sum_{i=1}^4 f(x_i) = 0.2 \left( \frac{1}{\sqrt{0.2}} + \frac{1}{\sqrt{0.4}} + \frac{1}{\sqrt{0.6}} + \frac{1}{\sqrt{0.8}} \right)$$
> $$I \approx 0.2 (2.2361 + 1.5811 + 1.2910 + 1.1180) \approx 1.2452$$

---

### Dạng 4: Bài toán Khống chế Sai số Tiên nghiệm (A Priori Error Control)
- **Đặc điểm nhận dạng:** Yêu cầu xác định giới hạn hạ (bước lưới $h$ cực đại hoặc số đoạn chia $m$ cực tiểu) để đáp ứng điều kiện sai số mục tiêu $|E| < \epsilon$.
- **Chiến thuật xử lý:** 1. Tính đạo hàm giải tích $f^{(p)}(x)$.
  2. Tối ưu hóa toàn cục hàm $|f^{(p)}(x)|$ trên $[a, b]$ để tìm $M_p$.
  3. Giải bất phương trình đại số: $\frac{(b-a)^{p+1}}{K \cdot m^p} M_p \le \epsilon$.

> [!exm] Ví dụ 4 (Ước lượng tham số lưới)
> Tìm số phân đoạn tối thiểu $m$ để xấp xỉ tích phân $I = \int_{1}^{3} \ln(x) dx$ bằng quy tắc Hình thang mở rộng thỏa mãn dung sai sai số $|E_T| \le 10^{-4}$.

> [!sol] Lời giải
> Hàm mục tiêu $f(x) = \ln(x)$. Cấp hội tụ của quy tắc Hình thang là $p=2$.
> Tính đạo hàm cấp hai: $f'(x) = \frac{1}{x} \implies f''(x) = -\frac{1}{x^2}$.
> Xác định cận trên $M_2$: Hàm nghịch biến, đạt cực đại trị tuyệt đối tại biên trái $x=1$:
> $$M_2 = \max_{x \in [1, 3]} \left| -\frac{1}{x^2} \right| = 1$$
> Thiết lập bất phương trình chặn sai số toàn cục:
> $$|E_T| \le \frac{(b-a)^3}{12 m^2} M_2 = \frac{2^3}{12 m^2} \cdot 1 = \frac{2}{3 m^2}$$
> Yêu cầu $|E_T| \le 10^{-4} \implies \frac{2}{3 m^2} \le 10^{-4} \implies m^2 \ge \frac{2 \cdot 10^4}{3} \approx 6666.67$$
> Trích xuất nghiệm nguyên nhỏ nhất: $m \ge 81.65 \implies m = 82$.

---

### Dạng 5: Phân tích Sự phá vỡ Tính trơn (Non-smooth Function Breakdowns)
- **Đặc điểm nhận dạng:** Yêu cầu đánh giá sai số lý thuyết cho hàm số có tính trơn giới hạn (ví dụ $f \notin C^p[a, b]$ như hàm chứa căn thức, lũy thừa phân số hoặc giá trị tuyệt đối).
- **Chiến thuật xử lý:** Nhận định tính bất khả thi. Biểu thức thặng dư $R$ chứa đạo hàm cấp cao $f^{(p)}(\xi)$ trở nên vô nghĩa nếu tồn tại điểm gián đoạn của đạo hàm trong miền $[a, b]$.

> [!exm] Ví dụ 5 (Đứt gãy khả vi)
> Hãy thiết lập chặn sai số lý thuyết khi sử dụng quy tắc Simpson 1/3 để xấp xỉ tích phân $I = \int_{-1}^{1} x^{4/3} dx$.

> [!sol] Lời giải
> Hàm số $f(x) = x^{4/3}$ liên tục trên $[-1, 1]$. Kiểm tra cấu trúc đạo hàm:
> $$f'(x) = \frac{4}{3} x^{1/3}$$
> $$f''(x) = \frac{4}{9} x^{-2/3} = \frac{4}{9\sqrt[3]{x^2}}$$
> Tại điểm $x=0 \in [-1, 1]$, ta có $\lim_{x \to 0} f''(x) = +\infty$. Hàm số không tồn tại đạo hàm cấp hai hữu hạn, do đó càng không tồn tại đạo hàm cấp bốn.
> **Kết luận:** Giả thiết hàm $f \in C^4[-1, 1]$ bị vi phạm. Không thể áp dụng định lý sai số tiêu chuẩn $E = -\frac{(b-a)^5}{2880} f^{(4)}(\xi)$ để thiết lập chặn sai số tiên nghiệm cho bài toán này.

---

### Dạng 6: Khai thác Bậc chính xác Đại số (Algebraic Exactness)
- **Đặc điểm nhận dạng:** Xấp xỉ tích phân một đa thức $P(x)$ có bậc $\le p-1$ bằng phương pháp cầu phương có bậc hội tụ $p$.
- **Chiến thuật xử lý:** Dựa trên bổ đề Vandermonde, phương pháp nội suy sẽ trùng khớp hoàn toàn với bản thân đa thức đó ($R = 0$). Có thể bỏ qua hoàn toàn thuật toán tính tổng lặp số học, tiến hành giải tích phân giải tích Newton-Leibniz.

> [!exm] Ví dụ 6 (Chính xác tuyệt đối)
> Tính xấp xỉ số học của tích phân $I = \int_{-2}^{2} (4x^3 - 2x^2 + 5x - 1) dx$ bằng phương pháp Simpson 3/8 mở rộng với $m=999$ khoảng chia. Đánh giá sai số.

> [!sol] Lời giải
> Hàm số mục tiêu $f(x) = 4x^3 - 2x^2 + 5x - 1$ là một đa thức bậc 3.
> Theo cơ sở lý thuyết nội suy Lagrange, phương pháp Simpson (bao gồm cả 1/3 và 3/8) có bậc chính xác đại số là $3$. Điều này hàm ý sai số cầu phương phần dư $R \equiv 0$ đối với mọi đa thức $\text{deg}(P) \le 3$, không phụ thuộc vào số phân đoạn $m$.
> Thay vì lặp 999 phép tính rời rạc, ta áp dụng tích phân giải tích:
> $$I = \left[ x^4 - \frac{2}{3}x^3 + \frac{5}{2}x^2 - x \right]_{-2}^{2}$$
> Do các đa thức bậc lẻ ($x^4$ và $x^2$) bị triệt tiêu trên miền đối xứng $[-2, 2]$, hệ thức đơn giản hóa:
> $$I = 2 \left( -\frac{2}{3}(2)^3 - 2 \right) = 2 \left( -\frac{16}{3} - \frac{6}{3} \right) = -\frac{44}{3}$$
> **Kết luận:** Giá trị xấp xỉ số học trả về chính xác tuyệt đối $-\frac{44}{3}$ với sai số cục bộ và toàn cục đều bằng 0.

### Dạng 7: Hệ thức Liên hệ Đại số giữa các Cầu phương (Quadrature Linear Combinations)
- **Đặc điểm nhận dạng:** Đề bài không cho hàm số $f(x)$ cụ thể, mà cho trước giá trị xấp xỉ tích phân $\int_a^b f(x)dx$ của một hoặc hai quy tắc (Hình thang, Điểm giữa), sau đó yêu cầu tìm giá trị của một quy tắc khác (Simpson) hoặc tìm giá trị hàm tại một điểm nút.
- **Chiến thuật xử lý:** Khai thác tính chất tổ hợp tuyến tính của các đa thức nội suy. Trên cùng một miền $[a, b]$ với $m=2$ đoạn chia (bước lưới $h = \frac{b-a}{2}$, điểm giữa $c = \frac{a+b}{2}$), tồn tại hệ thức liên hệ kinh điển:
  $$I_{\text{Simpson}} = \frac{1}{3} I_{\text{Trapezoidal}} + \frac{2}{3} I_{\text{Midpoint}}$$
  *Chứng minh nhanh:* $I_T = \frac{2h}{2}[f(a)+f(b)]$; $I_M = (2h)f(c)$. Khi đó $I_S = \frac{h}{3}[f(a) + 4f(c) + f(b)] = \frac{1}{3}h[f(a)+f(b)] + \frac{2}{3}(2h)f(c) = \frac{1}{3}I_T + \frac{2}{3}I_M$.

> [!exm] Ví dụ 7 (Tổ hợp Cầu phương - Trích Bài 5)
> Quy tắc hình thang áp dụng cho tích phân $\int_0^2 f(x) dx$ cho giá trị bằng $5$, và quy tắc Midpoint cho giá trị bằng $4$. Xác định giá trị của tích phân khi sử dụng quy tắc Simpson.

> [!sol] Lời giải
> Gọi $h = \frac{2-0}{2} = 1$ là bước lưới cho 2 khoảng chia. Các điểm nút là $x_0=0, x_1=1, x_2=2$.
> Từ giả thiết quy tắc Hình thang (xét toàn miền $[0, 2]$ với 1 đoạn):
> $$I_T = \frac{2-0}{2}[f(0) + f(2)] = f(0) + f(2) = 5$$
> Từ giả thiết quy tắc Điểm giữa (xét nút trung tâm $x_1=1$):
> $$I_M = (2-0) \cdot f(1) = 2f(1) = 4 \implies f(1) = 2$$
> Áp dụng quy tắc Simpson 1/3 cho miền $[0, 2]$:
> $$I_S = \frac{h}{3} [f(0) + 4f(1) + f(2)] = \frac{1}{3} \left[ (f(0) + f(2)) + 4f(1) \right]$$
> Thế các giá trị đã tìm được vào biểu thức:
> $$I_S = \frac{1}{3} [5 + 4(2)] = \frac{13}{3}$$
> *(Lưu ý: Có thể áp dụng thẳng công thức giải nhanh $I_S = \frac{1}{3}I_T + \frac{2}{3}I_M = \frac{5}{3} + \frac{8}{3} = \frac{13}{3}$).*

---

### Dạng 8: Khử Kì dị Bỏ được bằng Giới hạn (Removable Singularities)
- **Đặc điểm nhận dạng:** Hàm dưới dấu tích phân có dạng vô định $0/0$ tại một hoặc cả hai điểm biên. Khác với tích phân suy rộng tiến về vô cực (Dạng 3), ở dạng này, hàm số có giới hạn hữu hạn tại biên.
- **Chiến thuật xử lý:** Nếu vội vàng bấm máy tính $f(a)$ hoặc $f(b)$, máy sẽ báo lỗi (Math Error). Cần áp dụng quy tắc L'Hôpital hoặc khai triển Taylor để tính giới hạn $\lim_{x \to c} f(x) = L$. Sau đó, gán giá trị $f(c) = L$ để tiếp tục sử dụng các quy tắc Newton-Cotes Đóng một cách bình thường.

> [!exm] Ví dụ 8 (Khử vô định - Trích Bài 1e)
> Xấp xỉ tích phân $I = \int_{0}^{1} \frac{e^x - 1}{x} dx$ bằng quy tắc Simpson với 2 khoảng chia.

> [!sol] Lời giải
> Đặt $f(x) = \frac{e^x - 1}{x}$. Bước lưới $h = \frac{1-0}{2} = 0.5$. Các nút: $x_0=0, x_1=0.5, x_2=1$.
> Tại biên $x_0 = 0$, hàm số có dạng vô định $0/0$. Khử kì dị bằng quy tắc L'Hôpital:
> $$f(0) = \lim_{x \to 0} \frac{e^x - 1}{x} = \lim_{x \to 0} \frac{e^x}{1} = 1$$
> Tính giá trị hàm tại các nút còn lại:
> - $f(0.5) = \frac{e^{0.5} - 1}{0.5} = 2(\sqrt{e} - 1) \approx 1.297443$
> - $f(1) = \frac{e^1 - 1}{1} = e - 1 \approx 1.718282$
> 
> Ráp vào công thức Simpson 1/3:
> $$I_S = \frac{h}{3} [f(0) + 4f(0.5) + f(1)]$$
> $$I_S \approx \frac{0.5}{3} [1 + 4(1.297443) + 1.718282] \approx 1.318009$$

---

### Dạng 9: Đánh giá Sai số Hậu nghiệm - Nguyên lý Runge (A Posteriori Error Estimation)
- **Đặc điểm nhận dạng:** Đề bài bắt buộc phải đánh giá sai số, nhưng lại cho một hàm cực kỳ phức tạp (không thể tính đạo hàm cấp cao $M_p$), hoặc dữ liệu đầu vào chỉ là dạng bảng (không tồn tại biểu thức hàm giải tích). 
- **Chiến thuật xử lý:** Không sử dụng định lý sai số tiên nghiệm chứa $f^{(p)}(\xi)$. Thay vào đó, áp dụng **Nguyên lý ngoại suy Richardson (Quy tắc Runge)**. Ta tính xấp xỉ tích phân hai lần: một lần với bước lưới $h$ (được $I_h$), một lần với bước lưới $h/2$ (được $I_{h/2}$). Sai số của lưới mịn $I_{h/2}$ được xấp xỉ bằng hệ thức:
  $$E_{h/2} \approx \frac{I_{h/2} - I_h}{2^p - 1}$$
  Trong đó $p$ là bậc hội tụ của phương pháp ($p=2$ với Hình thang/Midpoint, $p=4$ với Simpson).

> [!exm] Ví dụ 9 (Quy tắc Runge cho bảng số liệu)
> Cho bảng vận tốc $v(t)$, không rõ biểu thức giải tích. Tính xấp xỉ quãng đường bằng Hình thang mở rộng và ước lượng sai số thực tế.
> 
> | $t$ | 0 | 2 | 4 |
> | :--- | :---: | :---: | :---: |
> | $v(t)$ | 1.0 | 3.0 | 2.5 |

> [!sol] Lời giải
> Do không có hàm $v(t)$, ta không thể tính $v''(t)$ để lấy $M_2$. Buộc phải dùng quy tắc Runge (với $p=2$).
> **Lần 1: Tính trên lưới thô $h = 4$ (chỉ lấy 2 biên):**
> $$I_h = \frac{4}{2} [v(0) + v(4)] = 2 [1.0 + 2.5] = 7.0$$
> **Lần 2: Tính trên lưới mịn $h/2 = 2$ (lấy cả 3 điểm):**
> $$I_{h/2} = \frac{2}{2} [v(0) + 2v(2) + v(4)] = 1 \cdot [1.0 + 2(3.0) + 2.5] = 9.5$$
> **Đánh giá sai số hậu nghiệm:**
> Áp dụng hệ thức Runge cho $I_{h/2}$:
> $$E \approx \frac{I_{h/2} - I_h}{2^2 - 1} = \frac{9.5 - 7.0}{3} = \frac{2.5}{3} \approx 0.8333$$
> **Kết luận:** Quãng đường xấp xỉ tốt nhất là $9.5$ với sai số ước tính khoảng $0.8333$.

### Dạng 10: Cầu phương hàm phi sơ cấp (Non-elementary Integrals / Special Functions)
- **Đặc điểm nhận dạng:** Hàm dưới dấu tích phân có dạng kinh điển như $e^{-x^2}$ (hàm mật độ Gauss / hàm lỗi $\text{erf}$), $\frac{\sin x}{x}$ (tích phân hàm sin $\text{Si}(x)$), hoặc $\frac{1}{\ln x}$ (tích phân hàm log $\text{li}(x)$).
- **Chiến thuật xử lý:** Các hàm này hoàn toàn **không có nguyên hàm sơ cấp**, nghĩa là sinh viên tuyệt đối không thể bấm máy lấy giá trị chính xác bằng định nghĩa Newton-Leibniz. Tuy nhiên, đạo hàm của chúng lại cực kỳ tường minh. Ta tính toán giá trị xấp xỉ số theo các mốc nút bình thường. Riêng phần đánh giá sai số, bắt buộc phải khảo sát kỹ hàm đạo hàm cấp cao $f''$ hoặc $f^{(4)}$ để tìm cực trị $M_p$ trên đoạn đóng nhằm thiết lập khoảng chặn giải tích.

> [!exm] Ví dụ 10 (Hàm lỗi Gauss - Trích Bài 3)
> Cho $f(x) = e^{-x^2}$ và xét tích phân $I = \int_0^1 f(x)dx$.
> a) Sử dụng quy tắc hình thang đơn để xấp xỉ $I$.
> b) Tìm chặn trên sai số của quy tắc hình thang.

> [!sol] Lời giải
> **a) Xấp xỉ giá trị tích phân $I$ bằng Hình thang đơn ($h = 1 - 0 = 1$):**
> Các mốc nút biên: $x_0 = 0 \implies f(0) = e^0 = 1$; $x_1 = 1 \implies f(1) = e^{-1} \approx 0.367879$.
> Công thức xấp xỉ hình thang:
> $$I_T = \frac{h}{2}[f(0) + f(1)] = \frac{1}{2}[1 + 0.367879] = \mathbf{0.683940}$$
> 
> **b) Khảo sát tìm chặn trên sai số:**
> Đạo hàm cấp một: $f'(x) = -2xe^{-x^2}$.
> Đạo hàm cấp hai: $f''(x) = -2e^{-x^2} + 4x^2e^{-x^2} = 2(2x^2 - 1)e^{-x^2}$.
> Để tìm $M_2 = \max_{x \in [0, 1]} |f''(x)|$, ta xét các điểm biên và điểm cực trị của $f''(x)$:
> - Tại $x = 0$: $|f''(0)| = |2(0-1)e^0| = 2$.
> - Tại $x = 1$: $|f''(1)| = |2(2-1)e^{-1}| = 2e^{-1} \approx 0.7358$.
> - Điểm tới hạn của $f''(x)$: $f'''(x) = 4xe^{-x^2} - 2(2x^2-1)(2x)e^{-x^2} = 4x(3 - 2x^2)e^{-x^2} = 0 \implies x = 0$ hoặc $x = \sqrt{3/2} > 1$ (loại).
> Do đó, giá trị cực đại của trị tuyệt đối đạo hàm cấp 2 trên đoạn $[0, 1]$ là $M_2 = 2$.
> 
> Áp dụng công thức chặn trên sai số Hình thang đơn:
> $$|R_T| \le \frac{(b-a)^3}{12} M_2 = \frac{1^3}{12} \cdot 2 = \mathbf{\frac{1}{6} \approx 0.166667}$$

---

### Dạng 11: Bẫy Tiệm cận Sai số Đa thức vượt bậc (Degree-Over-Limit Polynomials)
- **Đặc điểm nhận dạng:** Đề bài cho tích phân của một hàm đa thức bậc cao (bậc $\ge 4$) trên một miền rộng. Yêu cầu tính toán xấp xỉ bằng Hình thang và Simpson, đồng thời bắt **"So sánh với giá trị chính xác"** để tìm sai số thực tế.
- **Chiến thuật xử lý:** Khác với Dạng 6 (bậc đa thức $\le 3$ thì Simpson cho sai số bằng 0), ở dạng này đa thức có bậc vượt quá tầm chính xác đại số lý thuyết của phương pháp. Sinh viên bắt buộc phải tính song song 3 giá trị: Giá trị giải tích chính xác $I_{\text{cx}}$ (qua nguyên hàm), Giá trị số $I_{\text{số}}$, và dùng hiệu số $|I_{\text{cx}} - I_{\text{số}}|$ để đối chiếu với công thức chặn sai số phần dư chứa điểm $\xi$.

> [!exm] Ví dụ 11 (Đa thức bậc 4 - Trích Bài 2 ảnh 2)
> Xấp xỉ tích phân $I = \int_{-2}^{3} (x^4 - 3x^3 + 2x^2 - 3) dx$ bằng quy tắc Simpson 1/3 đơn. Hãy so sánh kết quả với giá trị chính xác.

> [!sol] Lời giải
> **Bước 1: Tính giá trị giải tích chính xác ($I_{\text{cx}}$)**
> $$I_{\text{cx}} = \left[ \frac{x^5}{5} - \frac{3x^4}{4} + \frac{2x^3}{3} - 3x \right]_{-2}^{3}$$
> Thế cận trên $x=3$: $V_3 = \frac{243}{5} - \frac{243}{4} + \frac{54}{3} - 9 = 48.6 - 60.75 + 18 - 9 = -3.15$.
> Thế cận dưới $x=-2$: $V_{-2} = \frac{-32}{5} - \frac{48}{4} - \frac{16}{3} + 6 = -6.4 - 12 - 5.3333 + 6 = -17.7333$.
> $$I_{\text{cx}} = V_3 - V_{-2} = -3.15 - (-17.7333) = \mathbf{14.583333} \quad \left(\text{tức } \frac{175}{12}\right)$$
> 
> **Bước 2: Tính giá trị số bằng Quy tắc Simpson 1/3 đơn**
> Chia miền $[-2, 3]$ thành 2 đoạn ($m=2$). Bước lưới $h = \frac{3 - (-2)}{2} = 2.5$.
> Tọa độ 3 nút mốc cách đều: $x_0 = -2, \, x_1 = -2 + 2.5 = 0.5, \, x_2 = 3$.
> Tính giá trị hàm tại các nút mạng:
> - $f(-2) = (-2)^4 - 3(-2)^3 + 2(-2)^2 - 3 = 16 + 24 + 8 - 3 = 45$
> - $f(0.5) = (0.5)^4 - 3(0.5)^3 + 2(0.5)^2 - 3 = 0.0625 - 0.375 + 0.5 - 3 = -2.8125$
> - $f(3) = (3)^4 - 3(3)^3 + 2(3)^2 - 3 = 81 - 81 + 18 - 3 = 15$
> 
> Ráp công thức số học Simpson 1/3 đơn:
> $$I_S = \frac{h}{3}[f(-2) + 4f(0.5) + f(3)] = \frac{2.5}{3}[45 + 4(-2.8125) + 15]$$
> $$I_S = \frac{2.5}{3}[45 - 11.25 + 15] = \frac{2.5}{3}[48.75] = \mathbf{40.625000}$$
> 
> **Bước 3: So sánh và đánh giá sai số thực tế**
> Sai số thực tế giữa xấp xỉ số và giá trị chính xác là:
> $$\Delta = |I_{\text{cx}} - I_S| = |14.583333 - 40.625000| = \mathbf{26.041667}$$
> *(Nhận xét: Vì hàm số có bậc 4 vượt quá bậc chính xác đại số của Simpson là 3, sai số thực tế lệch rất lớn, hoàn toàn khớp với việc tính toán số học thô).*

---



# Lời giải Bài tập 9.49 (Gaussian Integral & Dirac Sequence)

> [!info] Ý nghĩa tổng quát của Bài 9.30
> Bài toán này là một minh chứng thực tế chỉ ra rằng: Sự hội tụ và triệt tiêu của diện tích (vế tích phân) không đồng nghĩa với việc chuỗi hàm số hành xử êm đẹp. Nếu vi phạm điều kiện trội khả tích ($L^1$), năng lượng của đồ thị hàm số sẽ bị "thoát ra vô cực" (escape to infinity) khi lấy tổng vô hạn, khiến phép toán hoán đổi $\sum$ và $\int$ bị đổ vỡ hoàn toàn.

> [!ans] Phân tích chi tiết bản chất qua từng câu hỏi (a) đến (e)
> 
> **1. Câu (a), (b), (c): Sự tích lũy năng lượng âm thầm**
> * **Ở câu (a):** Tích phân của từng hàm thành phần luôn bằng 0:
>   $$\int_0^\infty (ae^{-nax} - be^{-nbx}) dx = \left[ -\frac{1}{n}e^{-nax} + \frac{1}{n}e^{-nbx} \right]_0^\infty = 0$$
>   Do đó, tổng của các tích phân hiển nhiên bằng 0: $\sum_{n \in \mathbb{N}} \int f_n d\mu_L = 0$. Điều này tạo ra một "ảo tưởng" rằng bài toán rất hội tụ.
> * **Ở câu (b) và (c):** Khi ta xét trị tuyệt đối $|f_n|$, ta không cho phép hai phần diện tích dương và âm triệt tiêu nhau nữa. Kết quả tính toán câu (c) sẽ chỉ ra rằng:
>   $$\sum_{n \in \mathbb{N}} \int_{(0, \infty)} |f_n| d\mu_L = \infty$$
>   Điều này khẳng định giả thiết $1^\circ$ của Bài 9.29 bị vi phạm. Chuỗi hàm này không có một hàm trội khả tích toàn cục (đây là dấu hiệu nguy hiểm!).
> 
> **2. Câu (d), (e): Sự sụp đổ ở hàm mục tiêu**
> * **Ở câu (d):** Khi ta tính tổng trực tiếp chuỗi hàm trước:
>   $$\sum_{n=1}^\infty f_n(x) = \sum_{n=1}^\infty (ae^{-ax})^n - \sum_{n=1}^\infty (e^{-bx})^n$$
>   Đây là các chuỗi cấp số nhân lùi vô hạn, tổng của chúng sẽ ra một hàm phân thức đại số cụ thể khi $x > 0$.
> * **Ở câu (e):** Khi tính tích phân của hàm tổng vừa tìm được ở câu (d) trên miền $[0, \infty)$, ta sẽ thấy tích phân này **không tồn tại** (bị phân kỳ về vô cùng tại lân cận điểm $0^+$ do bậc ở mẫu quá lớn).
> 
> **3. Bức tranh toàn cảnh về sự mâu thuẫn**
> Nếu ta nhắm mắt hoán đổi dấu một cách vô điều kiện, ta sẽ gặp một nghịch lý logic:
> * Nếu lấy tích phân trước rồi lấy tổng sau (Vế trái): Kết quả bằng **$0$** (theo câu a).
> * Nếu lấy tổng chuỗi trước rồi lấy tích phân sau (Vế phải): Kết quả bằng **$\infty$ (không tồn tại)** (theo câu e).
> 
> $$\sum_{n \in \mathbb{N}} \int_{[0, \infty)} f_n d\mu_L = 0 \quad \neq \quad \int_{[0, \infty)} \left\{ \sum_{n \in \mathbb{N}} f_n \right\} d\mu_L = \text{Không tồn tại}$$

> [!ans] Trình bày tối ưu câu (a) sử dụng Định lý Hội tụ Trội (DCT) cho chuỗi
> 
> Để xét tính hợp pháp của việc hoán đổi dấu tổng và dấu tích phân:
> $$\sum_{n=1}^\infty \int_{[0, \infty)} f_n \, d\mu_L \stackrel{?}{=} \int_{[0, \infty)} \left( \sum_{n=1}^\infty f_n \right) d\mu_L$$
> 
> Ta áp dụng Định lý Hội tụ Trội (DCT) dành cho chuỗi hàm số (đã được phát biểu ở Prob. 9.29). Theo định lý này, phép hoán đổi trên hoàn toàn hợp pháp nếu chuỗi các tích phân trị tuyệt đối hội tụ:
> $$\sum_{n=1}^\infty \int_{[0, \infty)} |f_n| \, d\mu_L < \infty$$
> 
> Tuy nhiên, dựa trên kết quả biến đổi thu được từ **câu (b)** và **câu (c)**, ta có:
> $$\sum_{n=1}^\infty \int_{[0, \infty)} |f_n| \, d\mu_L = 2C(a,b) \sum_{n=1}^\infty \frac{1}{n} = \infty$$
> 
> Do điều kiện trội bị vi phạm nghiêm trọng (chuỗi tích phân trị tuyệt đối phân kỳ về vô cùng), Định lý Hội tụ Trội **không thể áp dụng** cho chuỗi hàm này trên miền $[0, \infty)$. 
> 
> Vì không có sự bảo đảm của DCT, hai vế của phép toán hoán đổi không bắt buộc phải bằng nhau. Ta tiến hành tính toán độc lập từng vế để chỉ ra sự bất đối xứng:
> 
> * **Vế lấy tích phân trước, lấy tổng sau (Vế trái):**
>   $$\text{Vế Trái} = \sum_{n=1}^\infty \int_0^\infty (ae^{-nax} - be^{-nbx}) \, dx = \sum_{n=1}^\infty 0 = 0$$
> 
> * **Vế lấy tổng trước, lấy tích phân sau (Vế phải):**
>   Dựa vào kết quả hàm tổng $f(x)$ ở câu (d) và phép tính tích phân đổi biến ở câu (e):
>   $$\text{Vế Phải} = \int_0^\infty \left( \frac{a}{e^{ax}-1} - \frac{b}{e^{bx}-1} \right) dx = \ln\left(\frac{b}{a}\right)$$
> 
> Vì $b > a > 0 \implies \ln(b/a) > 0 = \text{Vế Trái}$. 
> 
> **Kết luận từ DCT:** Sự sụp đổ của đẳng thức toán học ($\sum \int \neq \int \sum$) là hệ quả tất yếu từ việc vi phạm điều kiện hội tụ tuyệt đối của DCT.

> [!ans] Lời giải bài bản cho câu (a) - Bài 9.30
> 
> ### Bước 1: Tính toán trực tiếp tích phân từng số hạng (Vế Trái)
> Do hàm số $f_n(x) = ae^{-nax} - be^{-nbx}$ liên tục trên khoảng $(0, \infty)$ và hội tụ tuyệt đối về 0 ở vô cực, tích phân Lebesgue của nó trùng với tích phân Riemann suy rộng. Với mỗi $n \in \mathbb{N}$ cố định, ta tìm nguyên hàm và thế cận:
> $$\int_{[0, \infty)} f_n \, d\mu_L = \int_0^\infty (ae^{-nax} - be^{-nbx}) \, dx$$
> $$\quad = \left[ -\frac{a}{na}e^{-nax} + \frac{b}{nb}e^{-nbx} \right]_0^\infty = \frac{1}{n} \left[ -e^{-nax} + e^{-nbx} \right]_0^\infty$$
> $$\quad = \frac{1}{n} \left[ (0 + 0) - (-1 + 1) \right] = 0$$
> 
> Vì tích phân của mọi số hạng đơn lẻ đều bằng 0, tổng của chuỗi số này hiển nhiên bằng 0:
> $$\text{Vế Trái} = \sum_{n \in \mathbb{N}} \left\{ \int_{[0, \infty)} f_n \, d\mu_L \right\} = \sum_{n=1}^\infty 0 = 0$$
> 
> ### Bước 2: Kiểm tra điều kiện hoán đổi toán tử ($\sum$ và $\int$)
> Ta đặt câu hỏi liệu có thể áp dụng các định lý hội tụ Lebesgue để hoán đổi dấu tổng và tích phân hay không:
> * **Định lý Hội tụ Đơn điệu (MCT / Tính $\sigma$-cộng tính):** Không áp dụng được, vì hàm số $f_n(x)$ đổi dấu (nhận giá trị âm trên khoảng $[0, x_n)$ như sẽ chứng minh ở câu b), vi phạm giả thiết dãy hàm không âm.
> * **Định lý Hội tụ Trội (DCT):** Để áp dụng được DCT cho chuỗi, ta cần chuỗi tích phân trị tuyệt đối phải hội tụ. Tuy nhiên, theo kết quả khảo sát từ câu (b) và câu (c), ta có:
>   $$\sum_{n \in \mathbb{N}} \int_{[0, \infty)} |f_n| \, d\mu_L = \infty$$
>   Do chuỗi trị tuyệt đối phân kỳ, giả thiết trội của DCT bị vi phạm nghiêm trọng.
> 
> ### Bước 3: Lập luận và Kết luận toán học
> Vì cả MCT và DCT đều bị từ chối hoạt động, phép hoán đổi toán tử giữa tổng vô hạn và tích phân trên miền vô hạn $(0, \infty)$ **không hợp pháp** trong bài toán này. 
> 
> Do đó, vế trái (tổng các tích phân) và vế phải (tích phân của hàm tổng, sẽ tính ở câu e) không bắt buộc phải bằng nhau. Kết luận cuối cùng cho câu (a):
> $$\sum_{n \in \mathbb{N}} \left\{ \int_{[0, \infty)} f_n \, d\mu_L \right\} = 0$$

> [!rem] Tầm quan trọng của giả thiết hội tụ tuyệt đối
> Nếu không có điều kiện hội tụ tuyệt đối $\int_0^\infty |f| dx < \infty$, ta không thể dùng Theorem 3 để khẳng định $|f|$ khả tích Lebesgue ở **Bước 1**. Khi $|f|$ không khả tích, ta sẽ mất đi hàm trội toàn cục để áp dụng DCT ở **Bước 2**, khiến toàn bộ chuỗi logic chuyển đổi giữa hai hệ thống tích phân bị sụp đổ hoàn toàn.

> [!info] Cơ chế "Cắt ngọn hữu hạn" bằng MCT
> Phép toán trong giáo trình viết: 
> $$\int_{[0, \infty)} ae^{-nax} \, d\mu_L = \lim_{k\to\infty} \int_{[0, k]} ae^{-nax} \, d\mu_L$$
> Việc chuyển đổi này hoàn toàn đúng đắn nhờ vào bản chất cấu trúc của định lý Hội tụ Đơn điệu (MCT) thông qua hàm chỉ thị tập hợp (indicator function).

> [!ans] Phân tích logic toán học qua 3 bước
> 
> Để tính tích phân Lebesgue của hàm số không âm $g(x) = ae^{-nax}$ trên miền vô hạn $D = [0, \infty)$, ta dựng dãy hàm tăng đơn điệu tiến về hàm gốc:
> 
> Với mỗi số nguyên dương $k \in \mathbb{N}$, ta định nghĩa dãy hàm cắt ngọn theo miền xác định tăng dần:
> $$g_k(x) = g(x) \cdot \mathbf{1}_{[0, k]}(x) = \begin{cases} ae^{-nax} & \text{nếu } x \in [0, k] \\ 0 & \text{nếu } x > k \end{cases}$$
> 
> Ta kiểm tra các tính chất của dãy hàm số $(g_k)_{k=1}^\infty$:
> 
> Tính không âm: Vì $a > 0$ và hàm mũ luôn dương nên $g_k(x) \ge 0$ với mọi $x$ và mọi $k$.
> 
> Tính đơn điệu tăng: Khi miền $[0, k]$ mở rộng lên $[0, k+1]$, tại những điểm $x \in (k, k+1]$, giá trị của hàm số tăng từ $0$ lên $ae^{-nax} > 0$. Do đó:
>   $$g_1(x) \le g_2(x) \le g_3(x) \le \dots \le g_k(x) \le g_{k+1}(x)$$
>   
> **Tìm Giới hạn điểm:** 
> Với mỗi vị trí $x \in [0, \infty)$ cố định, khi ta cho $k \to \infty$, chắc chắn sẽ đến một lúc nào đó $k > x$. Kể từ thời điểm đó trở đi, $\mathbf{1}_{[0, k]}(x) = 1$. Vì vậy:
>   $$\lim_{k\to\infty} g_k(x) = g(x) \cdot 1 = ae^{-nax}$$
> 
> 
> 
> **Áp dụng Định lý Hội tụ Đơn điệu (MCT):**
> Vì dãy hàm số $g_k(x)$ thỏa mãn hai điều kiện: không âm và tăng đơn điệu, áp dụng Định lý Hội tụ Đơn điệu (MCT):
> $$\int_{[0, \infty)} \left( \lim_{k\to\infty} g_k(x) \right) d\mu_L = \lim_{k\to\infty} \int_{[0, \infty)} g_k(x) \, d\mu_L$$
> 
> Ta có vế trái chính là tích phân trên miền vô hạn của hàm gốc. Vế phải, do hàm $g_k(x)$ bằng 0 trên toàn bộ khoảng $(k, \infty)$, nên phần tích phân từ $k$ đến vô cùng triệt tiêu hoàn toàn:
> $$\int_{[0, \infty)} g_k(x) \, d\mu_L = \int_{[0, k]} ae^{-nax} \, d\mu_L + \int_{(k, \infty)} 0 \, d\mu_L = \int_{[0, k]} ae^{-nax} \, d\mu_L$$
> 
> Ráp hai vế lại, ta thu được đẳng thức nền tảng mà giáo trình sử dụng:
> $$\int_{[0, \infty)} ae^{-nax} \, d\mu_L = \lim_{k\to\infty} \int_{[0, k]} ae^{-nax} \, d\mu_L$$







> [!rem] (Hoán đổi tổng vô hạn và tích phân dưới góc nhìn Định lý Fubini-Tonelli)
> 
> Biển đổi chuỗi hàm $\sum_{n \in \mathbb{N}} f_n(x)$ thực chất là việc nghiên cứu một hàm số hai biến $F(x, n)$ xác định trên không gian tích $(D \times \mathbb{N}, \mathfrak{A} \otimes \mathcal{P}(\mathbb{N}), \mu \times \nu)$, trong đó:
> $\mu$ là độ đo Lebesgue (hoặc độ đo bất kỳ) trên tập đo được $D \subset X$.
> * $\nu$ là **độ đo đếm (counting measure)** trên không gian các số tự nhiên $\mathbb{N}$.
> * Hàm hai biến được định nghĩa qua các lát cắt: $F(x, n) = f_n(x)$.
> 
> ### 1. Chuyển đổi ngôn ngữ từ Chuỗi sang Tích phân lặp
> Theo tính chất của độ đo đếm, tích phân của một hàm theo độ đo đếm chính là tổng vô hạn của chuỗi số thực. Do đó, ta đồng nhất hoàn toàn hai toán tử:
> $$\sum_{n \in \mathbb{N}} \int_D f_n(x) \, d\mu = \int_{\mathbb{N}} \left( \int_D F(x,n) \, d\mu \right) d\nu$$
> $$\int_D \left( \sum_{n \in \mathbb{N}} f_n(x) \right) d\mu = \int_D \left( \int_{\mathbb{N}} F(x,n) \, d\nu \right) d\mu$$
> 
> ### 2. Chứng minh Prob 9.29 bằng Định lý Fubini-Tonelli
> Việc chứng minh đẳng thức hoán đổi toán tử $\sum$ và $\int$ của Prob 9.29 giờ đây quy về việc kiểm tra tính hợp lệ của phép hoán vị hai tích phân lặp thông qua định lý Fubini:
> 
> * **Kiểm tra điều kiện trội khả tích ($L^1$):**
>   Để áp dụng Định lý Fubini (Ảnh 2), hàm hai biến $F(x,n)$ phải khả tích trên không gian tích, tức là $\int_{D \times \mathbb{N}} |F| \, d(\mu \times \nu) < \infty$. 
>   Áp dụng Định lý Tonelli (dành riêng cho hàm không âm $|F| \ge 0$), ta tính tích phân này bằng tích phân lặp theo thứ tự bất kỳ:
>   $$\int_{D \times \mathbb{N}} |F| \, d(\mu \times \nu) \stackrel{\text{Tonelli}}{=} \int_{\mathbb{N}} \left( \int_D |F(x,n)| \, d\mu \right) d\nu = \sum_{n \in \mathbb{N}} \int_D |f_n(x)| \, d\mu$$
>   
> * **Kết nối giả thiết:** >   Theo giả thiết $1^\circ$ của Prob 9.29, ta có $\sum_{n \in \mathbb{N}} \int_D |f_n| d\mu < \infty$. Hệ quả là:
>   $$\int_{D \times \mathbb{N}} |F| \, d(\mu \times \nu) < \infty \implies F \in \mathcal{L}^1(\mu \times \nu)$$
> 
> * **Áp dụng Fubini:**
>   Vì hàm số $F$ đã được bảo đảm thuộc không gian khả tích $\mathcal{L}^1(\mu \times \nu)$, **Định lý Fubini** khẳng định hai tích phân lặp bằng nhau và bằng tích phân toàn cục:
>   $$\int_D \left( \int_{\mathbb{N}} F(x,n) \, d\nu \right) d\mu = \int_{\mathbb{N}} \left( \int_D F(x,n) \, d\mu \right) d\nu$$
>   
> Dịch ngược hệ phương trình trên về ngôn ngữ chuỗi hàm số, ta thu được chính xác kết luận $3^\circ$ của Prob 9.29:
> $$\int_D \left\{ \sum_{n \in \mathbb{N}} f_n \right\} d\mu = \sum_{n \in \mathbb{N}} \int_D f_n \, d\mu$$
> 
> ### 3. Bình luận về Phản ví dụ 9.30 dưới góc nhìn hình học
> Trong Bài tập 9.30, ta tính được $\sum \int |f_n| d\mu = \infty$. Dưới góc nhìn này, điều đó có nghĩa là khối lượng toàn cục của hàm hai biến $|F(x,n)|$ trên "tấm lưới" $D \times \mathbb{N}$ là vô hạn ($F \notin L^1$). Khi không gian tích bị tràn năng lượng, Fubini mất hiệu lực, dẫn đến việc tích phân quét theo chiều dọc (quét $x$ trước, $n$ sau) tạo ra kết quả $0$, còn quét theo chiều ngang (quét $n$ trước, $x$ sau) lại cho ra kết quả $\ln(b/a)$.






$\xi$
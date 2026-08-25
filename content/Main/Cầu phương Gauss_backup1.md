# LÝ THUYẾT PHƯƠNG PHÁP CẦU PHƯƠNG GAUSS-LEGENDRE

## 1. Tóm tắt phương pháp

Trong khi các phương pháp nội suy Newton-Cotes (như hình thang, Simpson) sử dụng các điểm chia $x_i$ **cách đều nhau** và chỉ tối ưu các hệ số trọng lượng $c_i$, phương pháp Gauss-Legendre coi cả $x_i$ và $c_i$ đều là các ẩn số cần tìm.

Với $n$ điểm mốc, ta có $2n$ ẩn số ($n$ giá trị $x_i$ và $n$ giá trị $c_i$). Nhờ sự tối ưu này, công thức xấp xỉ tích phân đạt được **cấp chính xác đại số là $2n - 1$** (nghĩa là nó tính chính xác tuyệt đối tích phân của mọi đa thức có bậc $\le 2n-1$).

Bài toán tổng quát cần xấp xỉ:
$$\int_a^b f(x) dx \approx \sum_{i=1}^n c_i f(x_i)$$

Để làm được điều này, bài toán được chia làm 3 bước chính:

---

## 2. Bước 1: Xây dựng mốc nội suy trên miền chuẩn $[-1, 1]$

Thay vì xét ngay trên miền $[a, b]$, ta quy bài toán về một miền tính toán chuẩn là $[-1, 1]$. 

Toán học đã chứng minh rằng để đạt được cấp chính xác $2n - 1$, các điểm mốc $x_i$ bắt buộc phải là nghiệm của **Đa thức trực giao Legendre bậc $n$**, ký hiệu là $P_n(x)$.

Hệ đa thức Legendre được xây dựng dựa trên công thức truy hồi Bonnet:
$$(k+1)P_{k+1}(x) = (2k+1)xP_k(x) - kP_{k-1}(x)$$
Với hai đa thức khởi điểm:
* $P_0(x) = 1$
* $P_1(x) = x$

Bằng cách chạy vòng lặp đến bậc $n$, ta tìm được đa thức $P_n(x)$. Giải phương trình $P_n(x) = 0$, ta thu được $n$ nghiệm phân biệt nằm gọn trong khoảng $(-1, 1)$. Đây chính là các điểm mốc $x_i$ tối ưu.

---

## 3. Bước 2: Tìm hệ số trọng lượng (Weights) $c_i$

Sau khi đã có $n$ điểm $x_i$, ta cần xác định $n$ trọng lượng $c_i$ tương ứng.

Ta ép công thức xấp xỉ:
$$\int_{-1}^1 f(x) dx \approx \sum_{i=1}^n c_i f(x_i)$$
phải đúng tuyệt đối với các đơn thức cơ sở $f(x) = 1, x, x^2, \dots, x^{n-1}$. Khi đó ta có hệ phương trình:
$$\sum_{i=1}^n c_i x_i^k = \int_{-1}^1 x^k dx \quad \text{với } k = 0, 1, \dots, n-1$$

Tích phân ở vế phải (gọi là moment $\mu_k$) tính rất dễ:
* Nếu $k$ lẻ: $\mu_k = \int_{-1}^1 x^k dx = 0$
* Nếu $k$ chẵn: $\mu_k = \int_{-1}^1 x^k dx = \frac{2}{k+1}$

Hệ phương trình tuyến tính này biểu diễn dưới dạng ma trận gọi là **Ma trận Vandermonde**:
$$
\begin{pmatrix}
1 & 1 & \dots & 1 \\
x_1 & x_2 & \dots & x_n \\
x_1^2 & x_2^2 & \dots & x_n^2 \\
\vdots & \vdots & \ddots & \vdots \\
x_1^{n-1} & x_2^{n-1} & \dots & x_n^{n-1}
\end{pmatrix}
\begin{pmatrix}
c_1 \\ c_2 \\ c_3 \\ \vdots \\ c_n
\end{pmatrix}
=
\begin{pmatrix}
2 \\ 0 \\ \frac{2}{3} \\ \vdots \\ \mu_{n-1}
\end{pmatrix}
$$
Giải hệ này ta thu được bộ trọng lượng $c_i$ trên miền $[-1, 1]$.

---

## 4. Bước 3: Đổi biến Affine về miền thực tế $[a, b]$

Toàn bộ $x_i$ và $c_i$ ở trên chỉ mới dùng cho miền $[-1, 1]$. Để tính cho miền vật lý $[a, b]$ của bài toán gốc, ta sử dụng phép biến đổi tuyến tính:

$$x = \frac{b-a}{2}t + \frac{b+a}{2}$$
*(Với $t \in [-1, 1]$ và $x \in [a, b]$)*

Khi lấy vi phân, ta có hệ số co giãn không gian:
$$dx = \frac{b-a}{2} dt$$

Do đó, các thông số để nạp vào công thức tính tổng cuối cùng phải được biến đổi như sau:
1. **Mốc nội suy thực:** $x_{\text{thực}} = \frac{b-a}{2}x_{\text{chuẩn}} + \frac{b+a}{2}$
2. **Trọng lượng thực:** $c_{\text{thực}} = \frac{b-a}{2}c_{\text{chuẩn}}$

Cuối cùng, tích phân được tính bằng tổng:
$$I = \sum_{i=1}^n c_{\text{thực}, i} \cdot f(x_{\text{thực}, i})$$

## 7. Ví dụ áp dụng

> [!exm] Xây dựng công thức Gauss-Legendre với n = 2
> Bài toán: Tìm mốc và trọng lượng cho phương pháp cầu phương Gauss trên đoạn $[-1, 1]$ với hàm trọng số $w(x) = 1$ sử dụng $n=2$ điểm. Đạt bậc chính xác tối đa là $2n - 1 = 3$.

> [!sol]
> **Cách 1: Phương pháp Lý thuyết (Đa thức trực giao)**
> Dựa theo lý thuyết đã xây dựng, đa thức trực giao ứng với $w(x) = 1$ trên $[-1, 1]$ là đa thức Legendre.
> Đa thức đơn khởi bậc 2 là $\pi_2(x) = x^2 - \frac{1}{3}$.
> Các mốc nội suy $x_i$ là nghiệm của phương trình $\pi_2(x) = 0$:
> $$x_1 = -\frac{1}{\sqrt{3}} \quad \text{và} \quad x_2 = \frac{1}{\sqrt{3}}$$
> Các trọng số $w_i$ được tính thông qua tích phân của đa thức cơ sở Lagrange $l_i(x)$:
> $$w_1 = \int_{-1}^1 \frac{x - x_2}{x_1 - x_2} dx = \int_{-1}^1 \frac{x - 1/\sqrt{3}}{-2/\sqrt{3}} dx = \left[ -\frac{\sqrt{3}}{2} \left( \frac{x^2}{2} - \frac{x}{\sqrt{3}} \right) \right]_{-1}^1 = 1$$
> $$w_2 = \int_{-1}^1 \frac{x - x_1}{x_2 - x_1} dx = \int_{-1}^1 \frac{x + 1/\sqrt{3}}{2/\sqrt{3}} dx = 1$$
> Vậy công thức cầu phương thu được là:
> $$\int_{-1}^1 f(x) dx \approx 1 \cdot f\left(-\frac{1}{\sqrt{3}}\right) + 1 \cdot f\left(\frac{1}{\sqrt{3}}\right)$$
> 
> **Cách 2: Phương pháp Hệ số bất định (Đại số)**
> Ta cần giải hệ phương trình phi tuyến để tìm $(x_1, x_2)$ và $(w_1, w_2)$ sao cho công thức chính xác với $f(x) = 1, x, x^2, x^3$.
> Thiết lập hệ phương trình trên đoạn $[-1, 1]$:
> Với $f(x) = 1$: $\quad w_1 + w_2 = \int_{-1}^1 1 dx = 2$
> Với $f(x) = x$: $\quad w_1 x_1 + w_2 x_2 = \int_{-1}^1 x dx = 0$
> Với $f(x) = x^2$: $\quad w_1 x_1^2 + w_2 x_2^2 = \int_{-1}^1 x^2 dx = \frac{2}{3}$
> Với $f(x) = x^3$: $\quad w_1 x_1^3 + w_2 x_2^3 = \int_{-1}^1 x^3 dx = 0$
> 
> Tiến hành giải hệ:
> Từ phương trình thứ 2, ta có $w_1 x_1 = -w_2 x_2$.
> Thế vào phương trình thứ 4: $x_1^2(w_1 x_1) + w_2 x_2^3 = 0 \implies x_1^2(-w_2 x_2) + w_2 x_2^3 = 0 \implies w_2 x_2 (x_2^2 - x_1^2) = 0$.
> Vì $x_2 \neq 0$ và $w_2 > 0$ (theo Nhận xét 4), ta bắt buộc phải có $x_1^2 = x_2^2$. Do hai mốc phân biệt, suy ra $x_1 = -x_2$.
> Thế $x_1 = -x_2$ ngược lại vào phương trình thứ 2, ta thu được $-w_1 x_2 + w_2 x_2 = 0 \implies w_1 = w_2$.
> Kết hợp với phương trình thứ 1 ($w_1 + w_2 = 2$), ta giải được ngay trọng số:
> $$w_1 = w_2 = 1$$
> Thế giá trị trọng số vào phương trình thứ 3:
> $$1 \cdot x_1^2 + 1 \cdot x_2^2 = \frac{2}{3} \implies 2x_2^2 = \frac{2}{3} \implies x_2^2 = \frac{1}{3}$$
> Trích xuất nghiệm (chọn $x_1 < x_2$), ta thu được:
> $$x_1 = -\frac{1}{\sqrt{3}}, \quad x_2 = \frac{1}{\sqrt{3}}$$
> Kết quả hoàn toàn trùng khớp với phương pháp dùng đa thức trực giao.

# Cẩm nang Toàn diện về các Định lý Hội tụ trong Lý thuyết Độ đo

Tài liệu này cung cấp một cái nhìn hệ thống, chặt chẽ và sâu sắc về các định lý hội tụ cốt lõi của Lý thuyết độ đo và Tích phân Lebesgue (MCT, Bổ đề Fatou, DCT, Vitali,...). Nội dung được thiết kế tối ưu cho môi trường quản lý tri thức Obsidian, sử dụng cú pháp Callout chuyên dụng để phân tách rõ ràng giữa Phát biểu (`[!prp]`) và Chứng minh (`[!prf]`).

---

## 1. Bản đồ Phân cấp & Mối quan hệ Hệ thống (Hierarchy)

Trong tích phân Lebesgue, câu hỏi trung tâm là: **Khi nào ta có thể hoán vị dấu giới hạn và dấu tích phân?**
$$\lim_{n \to \infty} \int_X f_n \, d\mu \stackrel{?}{=} \int_X \lim_{n \to \infty} f_n \, d\mu$$

Mối quan hệ logic và thứ bậc của các định lý được tóm tắt qua sơ đồ phân cấp dưới đây:

```
                  [ Bổ đề Fatou ] (Nền tảng tối thiểu, f_n >= 0)
                         │
         ┌───────────────┴───────────────┐
         ▼                               ▼
  [ MCT (Dãy Tăng) ]              [ Bổ đề Fatou Ngược ] (Bị chặn trên)
         │                               │
         └───────────────┬───────────────┘
                         ▼
                  [ Định lý 8.14 ] (f_n >= 0, f_n <= f)
                         │
                         ▼
         [ Định lý Hội tụ Áp đảo (DCT) ] (Bị chặn bởi g ∈ L¹)
                         │
         ┌───────────────┴───────────────┐
         ▼                               ▼
  [ BCT ] (μ(X) < ∞,            [ Generalized DCT ]
   Bị chặn bởi hằng số M)       (Bị chặn bởi g_n ➔ g)
         │
         ▼
  [ Định lý Hội tụ Vitali ] 
  (Điều kiện Cần & Đủ: Hội tụ theo độ đo + Khả tích đồng đều)
```

### Bản chất của sự phân cấp:
1. **Bổ đề Fatou** là kết quả lỏng lẻo nhất, không đòi hỏi tính đơn điệu hay sự tồn tại của giới hạn điểm, chỉ cần dãy hàm không âm. Nó đóng vai trò là "gạch nối" nền tảng để thiết lập mọi định lý phía sau.
2. **Định lý hội tụ đơn điệu (MCT)** khai thác cấu trúc thứ tự (đơn điệu hình học) để giải phóng nhu cầu về một hàm trội hữu hạn.
3. **Định lý hội tụ áp đảo (DCT)** giải phóng tính đơn điệu của MCT bằng cách đặt ra một bộ "khung hình học" cố định: toàn bộ xung đột và biến động của dãy hàm phải bị giam cầm bên trong một hàm khả tích $g$.
4. **Định lý Vitali** chính là sự khái quát hóa tối thượng của DCT trên không gian độ đo hữu hạn. Nó chỉ ra rằng hàm trội $g$ trong DCT thực chất chỉ là một công cụ mạnh để bảo toàn hai tính chất nội tại: **Khả tích đồng đều (Uniform Integrability)** và **Không thoát quản khối lượng ở vô biên (Tightness)**.

---

## 2. Phát biểu Chặt chẽ và Chứng minh Hệ thống

> [!prp] Định lý Hội tụ Đơn điệu (Monotone Convergence Theorem - MCT - Dãy Tăng)
> Cho không gian độ đo $(X, \mathcal{A}, \mu)$. Xét dãy hàm đo được $\{f_n\}_{n=1}^{\infty}$ đóng từ $X$ vào $[0, \infty]$. Giả sử dãy đơn điệu tăng hầu khắp nơi (a.e.), nghĩa là:
> $$f_1(x) \le f_2(x) \le \dots \le f_n(x) \le \dots \quad \text{với mọi } x \in X \setminus N, \, \mu(N) = 0$$
> Khi đó, giới hạn điểm $f(x) = \lim_{n\to\infty} f_n(x)$ tồn tại hầu khắp nơi, $f$ là hàm đo được và:
> $$\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu$$

> [!prf] Chứng minh Chặt chẽ (Sử dụng định nghĩa tích phân hàm đơn giản)
> Không mất tính tổng quát, giả sử tính đơn điệu tăng đúng trên toàn bộ $X$. Do $f_n(x)$ tăng và bị chặn dưới bởi 0, giới hạn điểm $f(x) = \lim_{n\to\infty} f_n(x) = \sup_{n} f_n(x)$ luôn tồn tại trong $[0, \infty]$. Tính đo được của $f$ được bảo toàn qua phép lấy supremum của dãy hàm đo được.
> 
> Do $f_n \le f$ với mọi $n$, theo tính đơn điệu của tích phân Lebesgue, ta có:
> $$\int_X f_n \, d\mu \le \int_X f \, d\mu \implies \lim_{n\to\infty} \int_X f_n \, d\mu \le \int_X f \, d\mu$$
> Để chứng minh chiều ngược lại, chọn một hàm đơn giản tùy ý $s$ thỏa mãn $0 \le s \le f$. Cố định một hằng số $\alpha \in (0, 1)$. Định nghĩa các tập hợp:
> $$E_n = \{x \in X : f_n(x) \ge \alpha s(x)\}$$
> Do $f_n \uparrow f$ và $\alpha s < f$ (tại những điểm $f(x) > 0$), chuỗi các tập đo được $\{E_n\}$ là một dãy tăng tiến tới toàn không gian $X$, tức là $E_n \subset E_{512} \subset \dots$ và $\bigcup_{n=1}^\infty E_n = X$.
> 
> Với mỗi $n$, ta có đánh giá tích phân:
> $$\int_X f_n \, d\mu \ge \int_{E_n} f_n \, d\mu \ge \alpha \int_{E_n} s \, d\mu$$
> Lấy giới hạn $n \to \infty$ ở cả hai vế. Do tích phân của hàm đơn giản $s$ là một độ đo liên tục dưới trên các tập hợp, ta có $\lim_{n\to\infty} \int_{E_n} s \, d\mu = \int_X s \, d\mu$. Do đó:
> $$\lim_{n\to\infty} \int_X f_n \, d\mu \ge \alpha \int_X s \, d\mu$$
> Cho $\alpha \to 1^-$, ta thu được $\lim_{n\to\infty} \int_X f_n \, d\mu \ge \int_X s \, d\mu$.
> Vì bất đẳng thức đúng với mọi hàm đơn giản $s \le f$, theo định nghĩa của tích phân Lebesgue đối với hàm không âm:
> $$\lim_{n\to\infty} \int_X f_n \, d\mu \ge \sup_{s \le f} \int_X s \, d\mu = \int_X f \, d\mu$$
> Kết hợp hai chiều bất đẳng thức, ta có điều phải chứng minh. $\blacksquare$

***

> [!prp] Định lý Hội tụ Đơn điệu (MCT - Dãy Giảm)
> Cho không gian độ đo $(X, \mathcal{A}, \mu)$. Xét dãy hàm đo được không âm $\{f_n\}_{n=1}^{\infty}$ đơn điệu giảm hầu khắp nơi về hàm $f$ ($f_n \downarrow f$ a.e.). 
> **Nếu tồn tại chỉ số $k \in \mathbb{N}$ sao cho $\int_X f_k \, d\mu < \infty$**, thì giới hạn hoán vị được:
> $$\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu$$

> [!prf] Chứng minh bằng kỹ thuật chuyển dịch thế năng
> Xét dãy hàm mới $g_n = f_k - f_{k+n}$ với $n \ge 0$.
> Vì $f_n$ giảm nên $f_{k+n} \le f_k$, dẫn đến $g_n \ge 0$ hầu khắp nơi.
> Hơn nữa, vì $f_{k+n} \downarrow f$ nên $g_n = f_k - f_{k+n} \uparrow f_k - f$.
> 
> Áp dụng Định lý hội tụ đơn điệu (MCT dãy tăng) cho dãy không âm $g_n$, ta có:
> $$\lim_{n\to\infty} \int_X g_n \, d\mu = \int_X (f_k - f) \, d\mu$$
> $$\implies \lim_{n\to\infty} \int_X (f_k - f_{k+n}) \, d\mu = \int_X f_k \, d\mu - \int_X f \, d\mu$$
> Do giả thiết $\int_X f_k \, d\mu < \infty$, ta có thể tách tuyến tính tích phân:
> $$\int_X f_k \, d\mu - \lim_{n\to\infty} \int_X f_{k+n} \, d\mu = \int_X f_k \, d\mu - \int_X f \, d\mu$$
> Triệt tiêu lượng hữu hạn $\int_X f_k \, d\mu$ ở hai vế, ta thu được $\lim_{n\to\infty} \int_X f_{k+n} \, d\mu = \int_X f \, d\mu$. $\blacksquare$

***

> [!prp] Bổ đề Fatou (Xuôi)
> Cho dãy hàm đo được không âm tùy ý $\{f_n\}_{n=1}^{\infty}$ định nghĩa trên $(X, \mathcal{A}, \mu)$ ($f_n(x) \ge 0$ a.e.). Khi đó:
> $$\int_X \liminf_{n \to \infty} f_n \, d\mu \le \liminf_{n \to \infty} \int_X f_n \, d\mu$$

> [!prf] Chứng minh dựa trên MCT
> Với mỗi chỉ số $k \in \mathbb{N}$, đặt $g_k(x) = \inf_{n \ge k} f_n(x)$. Theo định nghĩa, dãy hàm $\{g_k\}_{k=1}^{\infty}$ là một dãy hàm đo được, không âm và đơn điệu tăng theo $k$ ($g_k \le g_{k+1}$).
> Giới hạn của dãy $g_k$ chính là giới hạn dưới cực hạn (liminf) của dãy $f_n$:
> $$\lim_{k \to \infty} g_k(x) = \sup_{k \ge 1} \inf_{n \ge k} f_n(x) = \liminf_{n \to \infty} f_n(x)$$
> Áp dụng MCT cho dãy tăng không âm $\{g_k\}$, ta có:
> $$\int_X \liminf_{n \to \infty} f_n \, d\mu = \int_X \lim_{k \to \infty} g_k \, d\mu = \lim_{k \to \infty} \int_X g_k \, d\mu = \liminf_{k \to \infty} \int_X g_k \, d\mu$$
> Tuy nhiên, do bản chất của phép toán lấy infimum: $g_k(x) \le f_n(x)$ với mọi $n \ge k$. Theo tính đơn điệu của tích phân:
> $$\int_X g_k \, d\mu \le \int_X f_n \, d\mu \quad \forall n \ge k \implies \int_X g_k \, d\mu \le \inf_{n \ge k} \int_X f_n \, d\mu$$
> Lấy liminf hai vế khi $k \to \infty$:
> $$\liminf_{k \to \infty} \int_X g_k \, d\mu \le \liminf_{k \to \infty} \left( \inf_{n \ge k} \int_X f_n \, d\mu \right) = \liminf_{n \to \infty} \int_X f_n \, d\mu$$
> Kết hợp hai kết quả, ta có bất đẳng thức Fatou. $\blacksquare$

***

> [!prp] Bổ đề Fatou Ngược (Reverse Fatou Lemma)
> Cho dãy hàm đo được $\{f_n\}_{n=1}^{\infty}$ trên không gian độ đo $(X, \mathcal{A}, \mu)$. Giả sử dãy hàm bị chặn trên bởi một hàm khả tích $g \in L^1(\mu)$, tức là $f_n(x) \le g(x)$ a.e. với mọi $n$ và $\int_X g \, d\mu < \infty$. Khi đó:
> $$\limsup_{n \to \infty} \int_X f_n \, d\mu \le \int_X \limsup_{n \to \infty} f_n \, d\mu$$

> [!prf] Chứng minh tịnh tiến bổ túc
> Định nghĩa dãy hàm mới $h_n(x) = g(x) - f_n(x)$. Do giả thiết $f_n \le g$, ta có $h_n \ge 0$ hầu khắp nơi với mọi $n$.
> Áp dụng Bổ đề Fatou xuôi cho dãy hàm không âm $\{h_n\}$:
> $$\int_X \liminf_{n \to \infty} (g - f_n) \, d\mu \le \liminf_{n \to \infty} \int_X (g - f_n) \, d\mu$$
> Sử dụng các tính chất đại số của giới hạn cực hạn: $\liminf (g - f_n) = g - \limsup f_n$. Vế trái trở thành:
> $$\int_X (g - \limsup_{n \to \infty} f_n) \, d\mu = \int_X g \, d\mu - \int_X \limsup_{n \to \infty} f_n \, d\mu$$
> Vế phải của bất đẳng thức biến đổi thành:
> $$\liminf_{n \to \infty} \left( \int_X g \, d\mu - \int_X f_n \, d\mu \right) = \int_X g \, d\mu - \limsup_{n \to \infty} \int_X f_n \, d\mu$$
> Do đó ta có:
> $$\int_X g \, d\mu - \int_X \limsup_{n \to \infty} f_n \, d\mu \le \int_X g \, d\mu - \limsup_{n \to \infty} \int_X f_n \, d\mu$$
> Vì $g \in L^1(\mu)$, giá trị $\int_X g \, d\mu$ là một số thực hữu hạn, cho phép ta trừ lượng này ở cả hai vế và đảo dấu bất đẳng thức:
> $$\limsup_{n \to \infty} \int_X f_n \, d\mu \le \int_X \limsup_{n \to \infty} f_n \, d\mu \quad \blacksquare$$

***

> [!prp] Định lý Trung gian 8.14 (MCT mở rộng)
> Cho dãy hàm đo được không âm $f_n \ge 0$ hội tụ hầu khắp nơi đến $f$. Nếu $f_n(x) \le f(x)$ a.e. với mọi $n$, thì $\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu$. (Lưu ý: Không đòi hỏi dãy $f_n$ phải đơn điệu, và tích phân của $f$ có thể bằng $\infty$).

> [!prf] Chứng minh ngắn gọn từ Fatou
> Do $f_n \ge 0$, áp dụng bổ đề Fatou xuôi:
> $$\int_X f \, d\mu = \int_X \liminf_{n \to \infty} f_n \, d\mu \le \liminf_{n \to \infty} \int_X f_n \, d\mu$$
> Mặt khác, vì giả thiết $f_n \le f$ với mọi $n$, tính đơn điệu của tích phân cho ta:
> $$\int_X f_n \, d\mu \le \int_X f \, d\mu \implies \limsup_{n \to \infty} \int_X f_n \, d\mu \le \int_X f \, d\mu$$
> Gom hai bất đẳng thức kẹp:
> $$\int_X f \, d\mu \le \liminf_{n \to \infty} \int_X f_n \, d\mu \le \limsup_{n \to \infty} \int_X f_n \, d\mu \le \int_X f \, d\mu$$
> Điều này ép liminf và limsup phải bằng nhau và bằng $\int_X f \, d\mu$. $\blacksquare$

***

> [!prp] Định lý Hội tụ Áp đảo Lebesgue (Dominated Convergence Theorem - DCT)
> Cho dãy hàm đo được $\{f_n\}_{n=1}^{\infty}$ trên không gian độ đo $(X, \mathcal{A}, \mu)$, hội tụ hầu khắp nơi về hàm giới hạn $f$ ($f_n \to f$ a.e.). 
> Nếu tồn tại một hàm khả tích $g \in L^1(\mu)$ (nghĩa là $g \ge 0$ và $\int_X g \, d\mu < \infty$) đóng vai trò làm hàm trội:
> $$|f_n(x)| \le g(x) \quad \forall n \in \mathbb{N}, \text{ a.e. } x \in X$$
> Khi đó, các hàm $f_n, f$ đều khả tích ($f_n, f \in L^1(\mu)$) và ta có:
> 1. $\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu$
> 2. $\lim_{n \to \infty} \int_X |f_n - f| \, d\mu = 0$ (Hội tụ trong không gian topo $L^1$)

> [!prf] Chứng minh song hành thông qua Fatou
> Do $|f_n| \le g$ và $f_n \to f$ a.e., ta cũng có $|f| \le g$ a.e. Vì $\int_X g \, d\mu < \infty$, cả $f_n$ và $f$ đều thuộc $L^1(\mu)$.
> Để chứng minh ý (1), ta nhận thấy $-g(x) \le f_n(x) \le g(x)$. 
> * Áp dụng Bổ đề Fatou Xuôi cho dãy không âm $g + f_n \ge 0$:
>   $$\int_X (g + f) \, d\mu \le \liminf_{n\to\infty} \int_X (g + f_n) \, d\mu \implies \int_X f \, d\mu \le \liminf_{n\to\infty} \int_X f_n \, d\mu$$
> * Áp dụng Bổ đề Fatou Xuôi cho dãy không âm $g - f_n \ge 0$:
>   $$\int_X (g - f) \, d\mu \le \liminf_{n\to\infty} \int_X (g - f_n) \, d\mu \implies -\int_X f \, d\mu \le \liminf_{n\to\infty} \left(-\int_X f_n \, d\mu\right) = -\limsup_{n\to\infty} \int_X f_n \, d\mu$$
>   $$\implies \limsup_{n\to\infty} \int_X f_n \, d\mu \le \int_X f \, d\mu$$
> Kết hợp lại, $\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu$.
> 
> Để chứng minh ý (2), xét dãy hàm $h_n = 2g - |f_n - f|$. Vì $|f_n - f| \le |f_n| + |f| \le 2g$, ta có $h_n \ge 0$ a.e. Do $f_n \to f$ a.e. nên $h_n \to 2g$ a.e.
> Áp dụng bổ đề Fatou xuôi cho $h_n$:
> $$\int_X 2g \, d\mu \le \liminf_{n\to\infty} \int_X (2g - |f_n - f|) \, d\mu = \int_X 2g \, d\mu - \limsup_{n\to\infty} \int_X |f_n - f| \, d\mu$$
> Do $\int_X 2g \, d\mu < \infty$, trừ lượng này ở cả hai vế ta có:
> $$0 \le - \limsup_{n\to\infty} \int_X |f_n - f| \, d\mu \implies \limsup_{n\to\infty} \int_X |f_n - f| \, d\mu \le 0$$
> Vì tích phân trị tuyệt đối luôn không âm, ta suy ra $\lim_{n\to\infty} \int_X |f_n - f| \, d\mu = 0$. $\blacksquare$

***

> [!prp] Định lý Hội tụ Bị chặn Lebesgue (Bounded Convergence Theorem - BCT)
> Cho không gian độ đo có **độ đo hữu hạn** ($\mu(X) < \infty$). Dãy hàm đo được $\{f_n\}$ hội tụ hầu khắp nơi về $f$. Nếu dãy hàm bị chặn đều bởi một hằng số $M > 0$, tức là $|f_n(x)| \le M$ với mọi $n$ và với mọi $x$ a.e., thì:
> $$\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu$$

> [!prf] Chứng minh thu gọn thông qua DCT
> Định lý BCT chỉ là một hệ quả trực tiếp của DCT. 
> Chọn hàm trội $g(x) = M$ hằng số. Ta kiểm tra tính khả tích của $g$:
> $$\int_X g \, d\mu = \int_X M \, d\mu = M \cdot \mu(X)$$
> Vì $\mu(X) < \infty$, tích phân này hữu hạn, đồng nghĩa với việc $g \in L^1(\mu)$.
> Do các giả thiết khác trùng khớp hoàn toàn với DCT, áp dụng trực tiếp DCT ta thu được điều phải chứng minh. $\blacksquare$

---

## 3. Các Định lý Hội tụ Mở rộng (Advanced & Generalized)

> [!prp] Định lý Hội tụ Áp đảo Tổng quát (Generalized Dominated Convergence Theorem)
> Cho $f_n \to f$ a.e. và dãy các hàm trội biến đổi $\{g_n\}$ thỏa mãn $|f_n| \le g_n$ a.e. với mọi $n \in \mathbb{N}$. Giả sử $g_n \to g$ a.e. và tích phân của dãy trội hội tụ về một giá trị hữu hạn:
> $$\lim_{n \to \infty} \int_X g_n \, d\mu = \int_X g \, d\mu < \infty$$
> Khi đó, $\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu$.

> [!prf] Chứng minh bằng kỹ thuật Fatou động
> Xét hai dãy hàm không âm động: $h_n = g_n + f_n \ge 0$ và $k_n = g_n - f_n \ge 0$.
> * Áp dụng bổ đề Fatou xuôi cho dãy $h_n$:
>   $$\int_X (g + f) \, d\mu \le \liminf_{n\to\infty} \int_X (g_n + f_n) \, d\mu = \int_X g \, d\mu + \liminf_{n\to\infty} \int_X f_n \, d\mu$$
>   Triệt tiêu $\int_X g \, d\mu$ (hữu hạn), ta có $\int_X f \, d\mu \le \liminf_{n\to\infty} \int_X f_n \, d\mu$.
> * Áp dụng bổ đề Fatou xuôi cho dãy $k_n$:
>   $$\int_X (g - f) \, d\mu \le \liminf_{n\to\infty} \int_X (g_n - f_n) \, d\mu = \int_X g \, d\mu + \liminf_{n\to\infty} \left(-\int_X f_n \, d\mu\right) = \int_X g \, d\mu - \limsup_{n\to\infty} \int_X f_n \, d\mu$$
>   Triệt tiêu $\int_X g \, d\mu$, ta có $\limsup_{n\to\infty} \int_X f_n \, d\mu \le \int_X f \, d\mu$.
> Kết hợp hai vế kẹp suy ra kết luận tương tự như DCT chuẩn. $\blacksquare$

***

> [!prp] Bổ đề Fatou Tổng quát (Generalized Fatou Lemma)
> Cho dãy hàm đo được $\{f_n\}$ bị chặn dưới bởi một hàm khả tích $g \in L^1(\mu)$ cố định ($f_n \ge g$ a.e.). Khi đó:
> $$\int_X \liminf_{n \to \infty} f_n \, d\mu \le \liminf_{n \to \infty} \int_X f_n \, d\mu$$

> [!prf] Chứng minh
> Chuyển gốc tọa độ hàm bằng cách đặt $h_n = f_n - g$. Do giả thiết $f_n \ge g$ nên $h_n \ge 0$.
> Áp dụng bổ đề Fatou chuẩn cho dãy không âm $h_n$:
> $$\int_X \liminf_{n\to\infty} (f_n - g) \, d\mu \le \liminf_{n\to\infty} \int_X (f_n - g) \, d\mu$$
> Tuyến tính hóa tích phân nhờ điều kiện $g \in L^1(\mu)$:
> $$\int_X \liminf_{n\to\infty} f_n \, d\mu - \int_X g \, d\mu \le \liminf_{n\to\infty} \int_X f_n \, d\mu - \int_X g \, d\mu$$
> Cộng hai vế với số thực hữu hạn $\int_X g \, d\mu$, ta có điều phải chứng minh. $\blacksquare$

***

> [!prp] Định lý Hội tụ Vitali (Trùm cuối không gian hữu hạn)
> Cho không gian độ đo hữu hạn $\mu(X) < \infty$. Xét dãy hàm $f_n \in L^1(\mu)$ và $f_n \to f$ hầu khắp nơi. Khi đó $f \in L^1(\mu)$ và $\lim_{n\to\infty} \int_X |f_n - f| \, d\mu = 0$ khi và chỉ khi dãy $\{f_n\}$ **Khả tích đồng đều (Uniformly Integrable)**, nghĩa là:
> $$\lim_{M \to \infty} \sup_{n \ge 1} \int_{\{|f_n| > M\}} |f_n| \, d\mu = 0$$

> [!prf] Phân tích cốt lõi (Chiều Đủ)
> Giả sử $\{f_n\}$ khả tích đồng đều. Với mọi $\epsilon > 0$, tồn tại $M > 0$ sao cho $\int_{\{|f_n| > M\}} |f_n| \, d\mu < \epsilon$ với mọi $n$.
> Thiết lập hàm cắt ngọn phi tuyến: $\phi_M(c) = \max(-M, \min(M, c))$. 
> Khi đó dãy hàm cắt ngọn $\phi_M(f_n)$ bị chặn đều bởi hằng số $M$. 
> Vì $\mu(X) < \infty$, áp dụng định lý BCT cho dãy cắt ngọn, ta kiểm soát được sai số tích phân trên phần lõi bị chặn. Sai số trên phần đuôi vô biên lớn được kiểm soát đồng đều bởi $\epsilon$ từ định nghĩa khả tích đồng đều. Cho $\epsilon \to 0$ thu được hội tụ tích phân toàn phần. $\blacksquare$

---

## 4. Phân tích Phản ví dụ: Bản chất sự sụp đổ khi thiếu giả thiết

Các định lý hội tụ hoạt động như một cỗ máy chính xác. Chỉ cần một giả thiết bị sai lệch hoặc bị loại bỏ, cỗ máy sẽ lập tức sụp đổ. Dưới đây là phân tích chi tiết toán học các hiện tượng sụp đổ đó.

### Phản ví dụ 1: Hiện tượng "Leo núi vô hạn rồi trượt dốc" (MCT thất bại khi thiếu tính đơn điệu)
* **Xây dựng dãy hàm:** Trên đoạn $[0, 1]$ với độ đo Lebesgue, xét dãy hàm $f_n(x) = n x^n$.
* **Khảo sát giới hạn điểm:** * Với $x \in [0, 1)$, ta có $\lim_{n\to\infty} n x^n = 0$ (do hàm mũ giảm nhanh hơn hàm đa thức).
    * Với $x = 1$, $\lim_{n\to\infty} n(1)^n = \infty$.
    * Vì tập $\{1\}$ có độ đo bằng 0, dãy hàm $f_n(x) \to f(x) \equiv 0$ hầu khắp nơi (a.e.).
* **Tính toán tích phân:**
    $$\int_0^1 f_n(x) \, dx = \int_0^1 n x^n \, dx = \left[ \frac{n}{n+1} x^{n+1} \right]_0^1 = \frac{n}{n+1}$$
    Lấy giới hạn tích phân: $\lim_{n\to\infty} \int_0^1 f_n(x) \, dx = \lim_{n\to\infty} \frac{n}{n+1} = 1$.
* **Sự sụp đổ:** Tích phân hàm giới hạn là $\int_0^1 0 \, dx = 0$. Rõ ràng $1 \neq 0$.
* **Bản chất hình học:** Dãy hàm này không âm, không gian độ đo hữu hạn, hội tụ về 0. Nhưng định lý MCT thất bại vì dãy hàm **không đơn điệu tăng**. Tại một điểm cố định $x = 0.9$, ban đầu khi $n$ tăng, giá trị $n x^n$ sẽ tăng lên (tạo thành một đỉnh sóng nhọn), nhưng sau đó khi $n$ đủ lớn, nó lại giảm dần về 0. Sự biến động không đơn điệu này tích tụ một khối lượng tích phân bằng 1 và "bắn" nó ra khỏi giới hạn.

### Phản ví dụ 2: Hiện tượng "Khối lượng trốn thoát ra vô cực" (MCT giảm thất bại khi thiếu hàm trội khả tích)
* **Xây dựng dãy hàm:** Trên không gian toàn trục thực $\mathbb{R}$ với độ đo Lebesgue, xét dãy hàm giảm là các hàm chỉ thị của đuôi vô biên: $f_n(x) = \chi_{[n, \infty)}(x)$.
* **Khảo sát giới hạn:** Khi $n \to \infty$, bất kỳ điểm cố định $x \in \mathbb{R}$ nào rồi cũng sẽ lớn hơn $n$, do đó $f_n(x) = 0$ kể từ một chỉ số $n$ đủ lớn. Vậy $f_n(x) \downarrow 0$ với mọi $x$.
* **Tính toán tích phân:** $\int_{\mathbb{R}} f_n \, d\mu = \mu([n, \infty)) = \infty$ với mọi $n$.
* **Sự sụp đổ:** $\lim_{n\to\infty} \int_{\mathbb{R}} f_n \, d\mu = \infty \neq \int_{\mathbb{R}} 0 \, d\mu = 0$.
* **Bản chất hình học:** Định lý MCT dãy giảm bị phá vỡ hoàn toàn vì **không tồn tại bất kỳ số hạng nào có tích phân hữu hạn** ($\int f_k = \infty \,\,\forall k$). Khối lượng hình học của các bậc thang là vô hạn, chúng không bị tiêu hao mà chỉ bị dịch chuyển tịnh tiến ra vô cực phương ngang.

### Phản ví dụ 3: Hiện tượng "Trải phẳng khối lượng trên nền vô biên" (BCT thất bại khi không gian có độ đo vô hạn)
* **Xây dựng dãy hàm:** Trên không gian $[1, \infty)$ với độ đo Lebesgue (có $\mu(D) = \infty$), xét dãy hàm $f_n(x) = \frac{1}{n}\chi_{[1, n]}(x)$.
* **Khảo sát giới hạn:** Với mỗi $x \ge 1$ cố định, khi $n > x$, ta có $|f_n(x)| = \frac{1}{n} \to 0$. Do đó $f_n \to 0$ hội tụ đều trên toàn không gian.
* **Độ bị chặn:** Dãy hàm bị chặn đều bởi hằng số $M = 1$ vì $|f_n(x)| \le 1$ với mọi $n, x$.
* **Tính toán tích phân:** $$\int_1^{\infty} f_n(x) \, dx = \int_1^n \frac{1}{n} \, dx = \frac{1}{n}(n - 1) = 1 - \frac{1}{n}$$
    Lấy giới hạn: $\lim_{n\to\infty} \int_1^{\infty} f_n \, dx = 1$.
* **Sự sụp đổ:** Tích phân hàm giới hạn bằng $\int 0 = 0$. Rõ ràng $1 \neq 0$.
* **Bản chất hình học:** Khác với không gian hữu hạn, ở không gian có độ đo vô hạn, một dãy hàm có thể vừa **bị chặn đều**, vừa **hội tụ đều về 0** nhưng tích phân vẫn không hội tụ về 0. Khối lượng tích phân đã bị dàn phẳng ra một diện tích cực rộng ở vô biên phương ngang (chiều cao hẹp lại thành $\frac{1}{n}$ nhưng chiều rộng dãn ra thành $n$). BCT sụp đổ vì $\mu(D) = \infty$.

### Phản ví dụ 4: Hiện tượng "Xung nhọn hấp thụ năng lượng gần điểm kỳ dị" (DCT thất bại khi hàm trội nhỏ nhất không khả tích)
* **Xây dựng dãy hàm:** Trên nửa trục thực $[0, \infty)$, xét dãy hàm xung nhọn ép sát về gốc tọa độ: $f_n(x) = \frac{n}{1 + n^2 x^2}$.
* **Khảo sát giới hạn điểm:** * Tại $x = 0$, $f_n(0) = n \to \infty$.
    * Tại $x > 0$, $f_n(x) \approx \frac{1}{n x^2} \to 0$.
    * Do đó $f_n \to 0$ hầu khắp nơi (trừ điểm $\{0\}$ có độ đo bằng 0).
* **Tính toán tích phân:**
    $$\int_0^{\infty} \frac{n}{1 + n^2 x^2} \, dx = \left[ \arctan(nx) \right]_0^{\infty} = \frac{\pi}{2}$$
    Do đó giới hạn tích phân bằng $\frac{\pi}{2}$. Trong khi đó tích phân hàm giới hạn $\int_0^{\infty} 0 \, dx = 0$.
* **Tìm hàm trội tối thiểu:** Để tìm hàm trội nhỏ nhất khả dĩ, ta tính supremum theo $n$ với mỗi $x$ cố định. Sử dụng đạo hàm theo $n$ cho hàm $h(n) = \frac{n}{1+n^2x^2}$, ta tìm được cực đại đạt được tại $n = \frac{1}{x}$. Giá trị cực đại là:
    $$g(x) = \sup_{n} f_n(x) = \frac{\frac{1}{x}}{1 + \left(\frac{1}{x}\right)^2 x^2} = \frac{1}{2x}$$
* **Sự sụp đổ:** Hàm trội nhỏ nhất của dãy này là $g(x) = \frac{1}{2x}$. Khi tính tích phân của $g(x)$ lân cận gốc tọa độ $0$:
    $$\int_0^1 \frac{1}{2x} \, dx = \left[ \frac{1}{2}\ln x \right]_0^1 = \infty$$
    Hàm trội $g$ không khả tích ($g \notin L^1$). Vì vậy định lý DCT sụp đổ. Bản chất hình học ở đây là năng lượng của dãy hàm bị dồn nén thành một cây kim vô hạn nhọn tại điểm kỳ dị $x=0$, hút hết khối lượng tích phân vào đó.

---

## 5. Bảng Đối Chiếu Tổng Hợp Bản Chất Toán Học

| Định lý | Dấu hàm | Tính đơn điệu | Độ đo không gian $\mu(D)$ | Điều kiện hàm trội | Kiểu hội tụ điểm | Kết luận tích phân |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **MCT (Tăng)** | $f_n \ge 0$ | $f_n \uparrow f$ | Bất kỳ | Không cần | Hầu khắp nơi (a.e.) | $\int f_n \to \int f$ (chấp nhận $\infty$) |
| **MCT (Giảm)** | $f_n \ge 0$ | $f_n \downarrow f$ | Bất kỳ | $\exists k: \int f_k < \infty$ | Hầu khắp nơi (a.e.) | $\int f_n \to \int f$ |
| **Fatou Xuôi** | $f_n \ge 0$ | Không đơn điệu | Bất kỳ | Không cần | Không cần hội tụ điểm | $\int \liminf f_n \le \liminf \int f_n$ |
| **Fatou Ngược** | Bất kỳ | Không đơn điệu | Bất kỳ | $f_n \le g \in L^1$ | Không cần hội tụ điểm | $\limsup \int f_n \le \int \limsup f_n$ |
| **Định lý 8.14** | $f_n \ge 0$ | Không đơn điệu | Bất kỳ | $f_n \le f$ a.e. | Hầu khắp nơi (a.e.) | $\int f_n \to \int f$ |
| **BCT** | Bất kỳ | Không đơn điệu | **Hữu hạn** ($\mu(D) < \infty$) | $|f_n| \le M$ (Hằng số) | Hầu khắp nơi (a.e.) | $\int f_n \to \int f$ |
| **DCT** | Bất kỳ | Không đơn điệu | Bất kỳ | $|f_n| \le g \in L^1$ | Hầu khắp nơi (a.e.) | $\int f_n \to \int f$ và $\|f_n - f\|_{L^1} \to 0$ |
| **Gen-DCT** | Bất kỳ | Không đơn điệu | Bất kỳ | $|f_n| \le g_n \to g$, $\int g_n \to \int g < \infty$ | Hầu khắp nơi (a.e.) | $\int f_n \to \int f$ |
| **Vitali** | Bất kỳ | Không đơn điệu | **Hữu hạn** ($\mu(D) < \infty$) | Khả tích đồng đều (Uniform Integrable) | Hội tụ theo độ đo / a.e. | $\int f_n \to \int f$ và $\|f_n - f\|_{L^1} \to 0$ |

# Mạng Lưới Phản Ví Dụ và Bản Chất Các Định Lý Hội Tụ

Tài liệu này đi sâu vào **giải phẫu cấu trúc** của các định lý hội tụ trong không gian độ đo $(X, \mathcal{A}, \mu)$. Bỏ qua các chứng minh cơ bản, chúng ta sẽ tập trung vào sự liên đới logic (chứng minh định lý này từ định lý khác), các câu hỏi bản chất, và bộ sưu tập phản ví dụ khắc nghiệt nhất để thấy rõ điều gì xảy ra khi phá vỡ từng giả thiết.

---

## 1. Mạng Lưới Mối Liên Hệ Tương Hỗ (Implications)

Các định lý hội tụ không tồn tại độc lập mà là các dạng phát biểu khác nhau của cùng một bản chất cấu trúc. Dưới đây là chứng minh sự tương đương và các hệ quả phái sinh.

> [!abstract] MCT $\iff$ Bổ đề Fatou
> MCT và Bổ đề Fatou thực chất là hai mặt của một đồng xu. Ta có thể chứng minh qua lại giữa chúng một cách chặt chẽ.
> 
> **1. Từ MCT suy ra Fatou:**
> Cho $f_n \ge 0$. Xét hàm infimum đuôi $g_k(x) = \inf_{n \ge k} f_n(x)$. 
> Nhận xét: $g_k \le f_n$ với mọi $n \ge k \implies \int g_k \le \inf_{n \ge k} \int f_n$.
> Dãy $g_k$ đơn điệu tăng và $g_k \uparrow \liminf_{n\to\infty} f_n$.
> Áp dụng MCT cho dãy tăng $g_k$:
> $$\int \liminf_{n\to\infty} f_n \, d\mu \stackrel{\text{MCT}}{=} \lim_{k\to\infty} \int g_k \, d\mu = \liminf_{k\to\infty} \int g_k \, d\mu \le \liminf_{k\to\infty} \left( \inf_{n \ge k} \int f_n \, d\mu \right) = \liminf_{n\to\infty} \int f_n \, d\mu$$
> 
> **2. Từ Fatou suy ra MCT:**
> Cho $f_n \ge 0$ và $f_n \uparrow f$.
> Chiều 1: Do $f_n \le f$ nên tính đơn điệu của tích phân cho $\limsup \int f_n \le \int f$.
> Chiều 2: Áp dụng Fatou: $\int f = \int \liminf f_n \le \liminf \int f_n$.
> Kẹp hai chiều lại, ta có $\lim \int f_n = \int f$.

> [!abstract] Bổ đề Fatou $\implies$ DCT
> DCT là hệ quả khi áp dụng Fatou xuôi hai lần (nhốt dãy hàm vào một cái lồng kẹp trên và dưới).
> Cho $f_n \to f$ a.e. và $|f_n| \le g \in L^1$.
> Tương đương với: $-g \le f_n \le g$, hay $g - f_n \ge 0$ và $g + f_n \ge 0$.
> * Áp dụng Fatou cho $g + f_n \ge 0$: $\int(g+f) \le \liminf \int(g+f_n) \implies \int f \le \liminf \int f_n$ (vì $\int g < \infty$).
> * Áp dụng Fatou cho $g - f_n \ge 0$: $\int(g-f) \le \liminf \int(g-f_n) = \int g - \limsup \int f_n \implies \limsup \int f_n \le \int f$.
> Từ đó $\lim \int f_n = \int f$.

> [!abstract] Vitali có mạnh hơn DCT trên không gian $\mu(X) < \infty$?
> **Đúng.** DCT là trường hợp đặc biệt của Vitali. 
> Việc bị chặn bởi $g \in L^1$ (DCT) tự động kéo theo tính "Khả tích đồng đều" (Uniformly Integrable - UI). 
> **Chứng minh:** Nếu $|f_n| \le g \in L^1$, với mọi $A \subset X$, $\int_A |f_n| \le \int_A g$. Theo tính liên tục tuyệt đối của tích phân Lebesgue, với $\mu(A)$ đủ nhỏ, $\int_A g < \epsilon$, do đó dãy $\{f_n\}$ bị chặn đều về mặt khối lượng tích phân trên các tập nhỏ.
> 
> *Có dãy UI nào mà KHÔNG có hàm trội $g \in L^1$ không?*
> Có. Xét trên $X = (0,1)$, hàm $f_n = n \chi_{(\frac{1}{n+1}, \frac{1}{n})}$.
> $\int_0^1 f_n = n \left( \frac{1}{n} - \frac{1}{n+1} \right) = \frac{1}{n+1} \to 0$. Dãy này khả tích đồng đều (vì khối lượng trượt nhanh về $0$).
> Tuy nhiên, hàm trội tối thiểu là $g(x) = \sup f_n(x) \approx \frac{1}{x}$, mà $\int_0^1 \frac{1}{x} dx = \infty \implies g \notin L^1$. Vậy Vitali bắt được hội tụ này, trong khi DCT thì mù màu.

---

## 2. Các Câu Hỏi Bản Chất (Conceptual Inquiries)

> [!question] Tại sao MCT không cần hàm trội, nhưng DCT lại bắt buộc phải có?
> **Bản chất hình học:** Một hàm có thể mất khối lượng tích phân theo hai cách khi $n \to \infty$:
> 1. Trượt ra vô cực theo chiều ngang (Mass escaping to horizontal infinity).
> 2. Bùng nổ thành một mũi kim hẹp ở một điểm (Mass escaping to vertical infinity / Singularity).
> 
> MCT yêu cầu dãy $f_n \uparrow f$. Tính đơn điệu này **cấm** khối lượng bỏ chạy. Nếu khối lượng dời đi, hàm bắt buộc phải giảm xuống, vi phạm giả thiết tăng. Nhờ cấu trúc thứ tự, MCT tự bảo vệ được khối lượng.
> Trong khi đó, DCT không có cấu trúc thứ tự ($f_n$ dao động tự do). Để khối lượng không thể trốn thoát theo cả hai chiều ngang và dọc, ta phải nhốt nó vào một cái lồng $g \in L^1$. $g$ phải có khối lượng đuôi bằng 0 (chống trốn chiều ngang) và cực đại tích phân hữu hạn (chống kỳ dị chiều dọc).

> [!question] Trong định lý Vitali, tính "Khả tích đồng đều" (UI) xử lý điều gì?
> Trong xác suất thống kê (Probability & Statistics), ta thường làm việc trên không gian độ đo xác suất $\mathbb{P}(\Omega) = 1 < \infty$. Tính UI ngăn chặn một hiện tượng duy nhất: **Khối lượng tập trung tại một điểm kỳ dị có độ đo bằng 0.**
> Ví dụ, biến ngẫu nhiên $X_n$ có giá trị $n$ với xác suất $1/n$ và $0$ với xác suất $1-1/n$. $X_n \to 0$ hầu chắc chắn, nhưng $\mathbb{E}[X_n] = n \cdot \frac{1}{n} = 1 \neq 0$. UI bắt buộc phần đuôi phân phối bị chém ngọn một cách đồng đều $\lim_{M \to \infty} \sup_n \mathbb{E}[|X_n| \mathbf{1}_{|X_n| > M}] = 0$, giết chết hiện tượng bùng nổ này.

---

## 3. Kho Tàng Phản Ví Dụ & Chứng Minh Rã Dạng

Phần này phân tích sự sụp đổ khi lược bỏ các giả thiết trọng yếu.

### Phản ví dụ 1: Fatou Bất Đẳng Thức Chặt (Tại sao lại có dấu $<$)
Xảy ra khi khối lượng bị đẩy ra vô cực và biến mất khỏi giới hạn điểm.
* **Không gian:** $\mathbb{R}$ với độ đo Lebesgue.
* **Dãy hàm:** Dãy sóng chạy $f_n = \chi_{[n, n+1]}$.
* **Phân tích:** Khi $n \to \infty$, $f_n(x) \to 0$ với mọi $x \in \mathbb{R}$. Vậy $\liminf_{n\to\infty} f_n(x) = 0$.
  $\int \liminf f_n = \int 0 = 0$.
  Trong khi đó, $\int f_n = 1$ với mọi $n \implies \liminf \int f_n = 1$.
* **Kết luận:** $0 < 1$. Dấu nhỏ hơn nghiêm ngặt xảy ra vì khối lượng "1" đã trượt ngang ra vô cực, không phản ánh vào giới hạn điểm $\liminf f_n$.

### Phản ví dụ 2: Bổ đề Fatou Sụp Đổ Khi Thiếu Tính Không Âm ($f_n \not\ge 0$)
Nếu dãy hàm có thể âm vô hạn, giới hạn tích phân có thể nhỏ hơn tích phân giới hạn (ngược chiều Fatou).
* **Không gian:** $(0, 1)$ với độ đo Lebesgue.
* **Dãy hàm:** $f_n(x) = -n \chi_{(0, \frac{1}{n})}(x)$. (Giếng sâu trượt về gốc tọa độ).
* **Khảo sát hội tụ:** Với mọi $x \in (0,1)$, khi $n > \frac{1}{x}$, $f_n(x) = 0$. Do đó $f_n(x) \to 0 \implies \liminf f_n(x) = 0$.
* **Kiểm tra Fatou:**
  Vế trái: $\int_0^1 \liminf f_n = \int_0^1 0 = 0$.
  Vế phải: $\int_0^1 f_n = \int_0^{1/n} (-n) \, dx = -1 \implies \liminf \int f_n = -1$.
* **Kết luận:** $0 \not\le -1$. Fatou thất bại hoàn toàn. Cần một hàm cản dưới $g \in L^1$ ($f_n \ge g$) để ngăn giếng thủng đáy.

### Phản ví dụ 3: MCT Dãy Giảm Thất Bại Khi Thiếu Tích Phân Hàm Đầu Tiên Hữu Hạn
Giả thiết $\exists k: \int f_k < \infty$ là chốt chặn để thực hiện phép trừ đại số "$\infty - \infty$".
* **Không gian:** $\mathbb{R}$ với độ đo Lebesgue.
* **Dãy hàm:** $f_n(x) = x \chi_{[n, \infty)}(x)$. Hoặc đơn giản là $f_n = \chi_{[n, \infty)}$.
* **Tính toán:** $f_n$ giảm dần về $0$ a.e. $\int f_n = \infty \,\,\forall n$.
* **Sự sụp đổ:** $\lim \int f_n = \infty \neq \int 0 = 0$.
* **Bản chất:** Nếu ta cố chứng minh bằng $f_1 - f_n \uparrow f_1 - f$, ta sẽ ra $\lim \int (f_1 - f_n) = \infty - \infty$, một dạng vô định không thể xử lý trong độ đo.

### Phản ví dụ 4: Khối Lượng Trượt Trên Không Gian Độ Đo Vô Hạn (BCT sụp đổ)
BCT ($|f_n| \le M \implies \lim \int f_n = \int \lim f_n$) chỉ đúng khi $\mu(X) < \infty$.
* **Không gian:** $[1, \infty)$ với $\mu([1,\infty)) = \infty$.
* **Dãy hàm:** Khối hộp dẹt dần và rộng ra: $f_n(x) = \frac{1}{n} \chi_{[1, n+1]}(x)$.
* **Tính chất:** 1. $f_n \to 0$ uniformly. $\lim f_n = 0$.
  2. $f_n$ bị chặn đều: $|f_n(x)| \le 1 = M$.
* **Tích phân:** $\int_1^\infty f_n \, dx = \int_1^{n+1} \frac{1}{n} \, dx = \frac{n}{n} = 1$.
* **Sự sụp đổ:** $\lim \int f_n = 1 \neq 0 = \int \lim f_n$. 
* **Chứng minh lý do BCT cần độ đo hữu hạn:** Trong DCT, nếu ta gán $g = M$, tích phân $\int_X M d\mu = M \cdot \mu(X)$. Trị số này chỉ hữu hạn (tức $g \in L^1$) khi và chỉ khi $\mu(X) < \infty$. Độ đo vô hạn làm hàm trội hằng số rách bươm.

### Phản ví dụ 5: Mũi Kim Dirac Hấp Thụ Năng Lượng (DCT không có hàm trội)
Một hàm hội tụ về 0 ở mọi điểm, có tích phân bằng 1, nhưng tại sao DCT không áp dụng được?
* **Không gian:** $[0, 1]$.
* **Dãy hàm:** $f_n(x) = n^2 x e^{-n x}$ hoặc hàm tam giác $f_n(x) = n^2 x \chi_{[0, 1/n]} \dots$ Ta xét hàm đơn giản nhất: $f_n = n \chi_{(0, \frac{1}{n})}$.
* **Khảo sát:** $f_n(x) \to 0$ hầu khắp nơi (trừ điểm $0$). $\int_0^1 f_n = 1 \neq 0$.
* **Đâu là hàm trội tối thiểu?** Để tìm $g \in L^1$ chặn trên, xét $g(x) = \sup_n f_n(x)$.
  Tại điểm $x \in (0,1)$, $f_n(x) = n$ nếu $1/n > x$, tức là $n < 1/x$. 
  Vậy cực đại đạt được quanh $n \approx 1/x$. Suy ra $g(x) \approx \frac{1}{x}$.
* **Kết luận sự sụp đổ:** Tích phân $\int_0^1 \frac{1}{x} dx = \left[ \ln x \right]_0^1 = \infty$. Hàm trội nhỏ nhất hoàn toàn không khả tích, do năng lượng tích tụ quanh vùng kỳ dị lân cận $0$ xé rách không gian $L^1$.

# Kiến trúc Chứng minh: MCT, Fatou và Hai Con đường tới BCT/DCT/Vitali

> [!info] Câu hỏi gốc
> MCT và Bổ đề Fatou tương đương logic (mỗi cái suy ra cái kia trong vài dòng). Vậy có cách viết chứng minh BCT, DCT, Generalized DCT, Vitali **nhất quán** xuyên suốt bằng một công cụ duy nhất không, hay bắt buộc phải đi qua Fatou? Tài liệu này trả lời bằng cách trình bày **hai con đường chứng minh song song** cho BCT/DCT, chỉ ra chính xác con đường nào tổng quát hơn và vì sao, rồi xác định rõ Vitali nằm ở đâu trong bức tranh đó.

---

## 1. MCT là tiên đề, Fatou là hệ quả một dòng

> [!obs] Vị trí logic
> Trong toàn bộ lý thuyết tích phân Lebesgue, **MCT (dãy tăng) là định lý duy nhất được chứng minh trực tiếp từ định nghĩa** $\int_D f\,d\mu=\sup\{\int_D\varphi\,d\mu:\varphi\text{ đơn giản},0\le\varphi\le f\}$ — chứng minh đó dùng tập $E_n=\{f_n\ge\alpha\varphi\}$ và liên tục từ dưới của độ đo, không quy về bất kỳ định lý hội tụ nào khác.
>
> Fatou, ngược lại, **không có chứng minh độc lập** — nó luôn được suy ra bằng đúng một thao tác: đặt $g_n=\inf_{k\ge n}f_k$ (tự động tăng vì lấy inf trên tập chỉ số ngày càng nhỏ), rồi áp MCT cho $(g_n)$. Vậy về bản chất, **"áp dụng Fatou" = "áp dụng MCT cho dãy infimum-chạy"** — Fatou là một packaging tiện lợi của MCT, không phải một công cụ độc lập.
>
> Tương tự, MCT giảm (Hệ quả 4) cũng chỉ là MCT tăng áp cho $h_n=f_1-f_n$. Vậy **toàn bộ "tầng nền"** chỉ có một động cơ duy nhất: MCT tăng + kỹ thuật "monotonize" một dãy bất kỳ bằng inf chạy hoặc hiệu với số hạng đầu.

---

## 2. Hai con đường tới BCT/DCT — và nơi chúng tách nhau

### 2.1 Con đường 1 (chuẩn) — Fatou sandwich, dùng $\inf$

Đây là con đường đã trình bày trong các tài liệu trước: với $|f_n|\le g_n$, áp Fatou cho $g_n+f_n\ge0$ và $g_n-f_n\ge0$, cộng hai bất đẳng thức. **Đặc điểm cốt lõi**: Fatou chỉ đòi hỏi $g_n+f_n\ge0$ đúng **tại mỗi $n$ riêng lẻ** — không cần biết gì về $\sup_k g_k$ hay bất kỳ tính chất "đều theo $n$" nào của dãy trội. Đây chính là lý do con đường này hoạt động bất kể $g_n$ có đổi theo $n$ hay không.

### 2.2 Con đường 2 (thay thế) — MCT giảm, dùng $\sup$

> [!lem] (Đặc trưng giải tích của hội tụ điểm qua running-sup)
> $a_n\to L$ (dãy số thực) $\iff$ $b_n:=\sup_{k\ge n}|a_k-L| \to 0$.

> [!prf]
> ($\Rightarrow$) Với $\varepsilon>0$, $\exists N:\forall k\ge N, |a_k-L|<\varepsilon$, suy ra $b_N=\sup_{k\ge N}|a_k-L|\le\varepsilon$. Vì $(b_n)$ giảm (sup trên tập chỉ số nhỏ hơn), $b_n\le\varepsilon$ với mọi $n\ge N$. Vậy $b_n\to0$.
> ($\Leftarrow$) $|a_n-L|\le b_n\to0$ nên $a_n\to L$. $\blacksquare$

> [!thm] (DCT — chứng minh qua MCT giảm, KHÔNG dùng Fatou)
> $f_n\to f$ a.e. trên $D$, $\exists g\in L^1(D)$ **cố định**: $|f_n|\le g$ a.e. mọi $n$ $\implies \int_D|f_n-f|\,d\mu\to0$.

> [!prf]
> Đặt $h_n(x) = \sup_{k\ge n}|f_k(x)-f(x)|$ — đo được (sup đếm được của hàm đo được). Theo Bổ đề trên, vì $f_n(x)\to f(x)$ tại mọi $x$ thuộc tập a.e., $(h_n(x))$ giảm và $h_n(x)\to0$ tại các điểm đó, tức $h_n\downarrow0$ a.e.
>
> **Chặn trên cố định**: $|f_k-f|\le|f_k|+|f|\le 2g$ với mọi $k$ (dùng $|f|\le g$ a.e., suy từ $f_n\to f$ a.e. và $|f_n|\le g$). Vì $2g$ **không đổi theo $k$**, $\sup_{k\ge n}|f_k-f| \le 2g$ với mọi $n$ — đặc biệt $h_1\le 2g$, nên $\int_D h_1\,d\mu \le \int_D 2g\,d\mu <\infty$.
>
> Áp **MCT giảm** (Hệ quả 4) cho $(h_n)$ (giảm, không âm, có $h_1$ khả tích):
> $$\int_D h_n\,d\mu \to \int_D 0\,d\mu = 0$$
> Vì $0\le|f_n-f|\le h_n$ (đơn điệu tích phân), $0\le\int_D|f_n-f|\,d\mu\le\int_D h_n\,d\mu\to0$, kẹp chặt cho $\int_D|f_n-f|\,d\mu\to0$. $\blacksquare$

> [!obs] Vì sao đây là "thuần MCT", không phải Fatou trá hình
> Phép kẹp ở đây dùng **MCT giảm**, không hề dựng dãy $\inf_{k\ge n}$ ở bất kỳ đâu. Việc lấy $\sup_{k\ge n}$ chỉ đơn thuần là cách diễn đạt "giới hạn trên cùng" của một dãy số — một khái niệm giải tích cơ bản (Bổ đề trên), không phải kỹ thuật monotonize-rồi-áp-MCT-tăng như Fatou. Vậy đây thực sự là một con đường khác, không phải Fatou đổi tên.

> [!thm] (BCT — cùng kỹ thuật, $g\equiv M$)
> $\mu(D)<\infty$, $f_n\to f$ a.e., $|f_n|\le M$ a.e. $\implies \int_D|f_n-f|\,d\mu\to0$ (mạnh hơn kết luận gốc).

> [!prf]
> Y hệt chứng minh DCT ở trên, thay $g$ bởi hằng số $M$: $h_n\le 2M$, và $\int_D 2M\,d\mu = 2M\mu(D)<\infty$ **chính vì** $\mu(D)<\infty$ — đây là nơi duy nhất giả thiết này được dùng, khớp hoàn toàn với phân tích trước đó (vai trò của $\mu(D)<\infty$ là làm cho hàm trội khả tích). Áp MCT giảm, kết luận như trên. $\blacksquare$

### 2.3 Vì sao con đường 2 **không** mở rộng được cho Generalized DCT

> [!prob] Câu hỏi kiểm tra
> Thử áp dụng đúng kỹ thuật trên cho Generalized DCT: $|f_n|\le g_n$, $g_n\to g$ a.e., $\int_D g_n\,d\mu\to\int_D g\,d\mu<\infty$. Đặt $h_n=\sup_{k\ge n}|f_k-f|$ như cũ. Vấn đề nằm ở đâu?

> [!ans]
> Ta cần một chặn trên **cố định, khả tích** cho $h_n$ — cụ thể cần $\int_D h_1\,d\mu<\infty$, tức $\int_D \sup_{k\ge1}|f_k-f|\,d\mu<\infty$. Vì $|f_k-f|\le g_k+g$, điều này đòi hỏi $\sup_{k\ge1}(g_k+g)$ khả tích — nhưng **đây chính là chỗ sụp đổ**: $\sup_k g_k$ có thể không khả tích dù mỗi $g_k$ khả tích riêng lẻ và $\int g_k\to\int g$.
>
> **Phản ví dụ tường minh**: lấy $g_n = n\chi_{[1/n,\,1/n+1/n^2)}$ trên $\mathbb R$ (đã gặp ở phần Vitali). Mỗi $g_n\in L^1$, $\int_{\mathbb R}g_n\,d\mu_L=1/n\to0=\int_{\mathbb R}0\,d\mu_L$ (ở đây $g\equiv0$) — thỏa **đúng** giả thiết Generalized DCT. Nhưng vì các khoảng mang $g_n$ rời nhau, $\sup_{k\ge1}g_k = \sum_{k=1}^\infty g_k$ tại từng điểm (nhiều nhất một số hạng khác 0), và:
> $$\int_{\mathbb R}\sup_{k\ge1}g_k\,d\mu_L = \sum_{k=1}^\infty\frac1k = \infty$$
> Vậy $h_1\le\sup_k(g_k+g)=\sup_k g_k$ **không** khả tích — MCT giảm **không áp dụng được** vì thiếu điều kiện "có một số hạng khả tích" (đúng giả thiết bắt buộc của Hệ quả 4, xem phần phản ví dụ $\chi_{[n,\infty)}$ trong tài liệu trước). Con đường 2 sụp đổ **đúng tại bước cần một chặn trên cố định** — không phải vì kỹ thuật yếu, mà vì bài toán Generalized DCT về bản chất cho phép hàm trội "trượt" theo $n$, và phép $\sup_{k\ge n}$ không có cách nào kiểm soát được sự trượt đó nếu không giả thiết thêm.
>
> **Đối chiếu với con đường 1**: Fatou-sandwich không gặp vấn đề này vì nó chỉ cần $g_n+f_n\ge0$ tại **từng $n$ riêng lẻ** (không cần $\sup_k$ của bất cứ thứ gì) — đây chính là lý do kỹ thuật mà Fatou tổng quát hơn về bản chất, không phải về sở thích trình bày. $\blacksquare$

---

## 3. Phân tích sâu: vì sao $\inf$ (Fatou) bền hơn $\sup$ (MCT giảm)

> [!obs] Bất đối xứng cấu trúc giữa $\inf$ và $\sup$ trên tổng/dãy
> Cho một dãy $(a_k)_{k\ge n}$ bất kỳ (không cần bị chặn):
> - $\inf_{k\ge n} a_k$ **luôn tồn tại** trong $[-\infty,\infty)$ nếu $a_k$ bị chặn dưới — và nếu $a_k\ge0$, $\inf_{k\ge n}a_k \in[0,\infty)$ **luôn hữu hạn** một cách tầm thường (vì $\inf \le a_n <\infty$, bị chặn trên bởi chính số hạng đầu tiên của tail). Đây là lý do dãy $g_n=\inf_{k\ge n}f_k$ trong Fatou *luôn* có $\int_D g_1\,d\mu\le\int_D f_1\,d\mu$ — **tự động kiểm soát được**, không cần giả thiết gì thêm ngoài $f_k\ge0$ đo được.
> - $\sup_{k\ge n}a_k$ thì **không có** bảo đảm tương tự: dù từng $a_k$ hữu hạn (thậm chí $\to0$), $\sup$ trên cả một đuôi vô hạn có thể là $\infty$ — đúng hiện tượng trong phản ví dụ trên (mỗi $g_k\to0$ trong $L^1$, nhưng $\sup_k g_k=\infty$ trong $L^1$).
>
> **Hệ quả triết lý**: Fatou (xây trên $\inf$) là công cụ **không cần giả thiết bổ sung** để "an toàn" — đây chính xác là lý do nó đúng cho MỌI dãy không âm, không cần đơn điệu, không cần trội. Con đường MCT-giảm (xây trên $\sup$) chỉ "an toàn" khi ta đã biết trước có một chặn trên cố định, khả tích — nói cách khác, nó **mượn sự an toàn từ giả thiết domination cố định**, chứ không tự thân an toàn như Fatou. Đây là lý do toán học chính xác (không phải quy ước hay thẩm mỹ) cho việc Fatou là công cụ trung tâm, còn MCT-giảm/running-sup chỉ là một "đường tắt" hợp lệ trong trường hợp đặc biệt.

---

## 4. Vitali: vì sao không quy được về một trong hai con đường

> [!obs]
> Vitali giả thiết khả tích đều (UI) + tính chặt (Tight) — **không có bất kỳ hàm trội nào**, kể cả dạng dãy $g_n$. Hệ quả trực tiếp:
> - **Con đường 1 (Fatou-sandwich) không dùng trực tiếp được**: không có $g_n$ nào để lập $g_n\pm f_n\ge0$.
> - **Con đường 2 (MCT-giảm) càng không dùng được**: không có cả $g$ cố định lẫn $g_n$ để tạo $h_n=\sup_{k\ge n}|f_k-f|$ có chặn khả tích.
>
> Trong chứng minh Vitali, Fatou **vẫn được dùng** — nhưng chỉ trên hai mảnh nhỏ ($B_\varepsilon^c$ và $A_\varepsilon$), nơi UI và Tight đóng vai trò "hàm trội cục bộ, theo nghĩa $\varepsilon$" thay cho một hàm trội toàn cục cố định. Mảnh thứ ba — phần "lõi" $B_\varepsilon\setminus A_\varepsilon$ — không dùng Fatou hay MCT chút nào, mà dùng **Egorov** để biến hội tụ a.e. thành hội tụ đều, rồi đánh giá trực tiếp bằng $\mu(\text{lõi})\times\sup|f_n-f|$.
>
> **Kết luận**: Vitali là một **kiến trúc ba mảnh** (đuôi – phần nhỏ – lõi), trong đó Fatou chỉ kiểm soát được hai mảnh biên (nhờ UI/Tight đóng vai "trội cục bộ"), còn Egorov là công cụ **không thể thay thế** để xử lý mảnh lõi — không có cách diễn đạt Vitali thuần túy bằng một lần áp MCT hay Fatou duy nhất. Đây không phải thiếu sót trong cách trình bày, mà là bản chất: Vitali mạnh hơn DCT *chính vì* nó không đòi hỏi cấu trúc "hàm trội", nên nó phải trả giá bằng một công cụ hoàn toàn khác (Egorov) để bù lại.

---

## 5. Quy trình quyết định cho vấn đáp

> [!thm] (Sơ đồ quyết định — chọn công cụ nào trước)
> ```
> Dãy (fₙ) đo được, fₙ → f a.e. trên D — chọn công cụ theo CÂU HỎI sau:
>
> 1. (fₙ) có ĐƠN ĐIỆU không (tăng hoặc giảm)?
>    CÓ ──► MCT trực tiếp (tăng: vô điều kiện; giảm: cần 1 số hạng khả tích)
>    KHÔNG ──► sang câu 2
>
> 2. (fₙ) có KHÔNG ÂM không, và chỉ cần BẤT ĐẲNG THỨC (không cần hội tụ)?
>    CÓ ──► Bổ đề Fatou, dừng tại đây (1 chiều là đủ)
>    KHÔNG, cần ĐẲNG THỨC ──► sang câu 3
>
> 3. Có hàm/hằng TRỘI không?
>    KHÔNG có trội nào, nhưng có UI + Tight ──► VITALI (Fatou trên biên + EGOROV trên lõi)
>    CÓ trội ──► sang câu 4
>
> 4. Hàm trội có ĐỔI THEO n không?
>    KHÔNG đổi (g cố định, hoặc hằng M với μ(D)<∞) ──► BCT/DCT:
>         chọn 1 trong 2 lối trình bày tương đương:
>           (a) Fatou-sandwich (g+fₙ, g-fₙ)            — chuẩn, quen thuộc
>           (b) MCT giảm trên hₙ=sup_{k≥n}|fₖ-f|         — "thuần MCT", tránh nhắc Fatou
>    CÓ đổi (dãy gₙ) ──► Generalized DCT:
>         BẮT BUỘC Fatou-sandwich (con đường (b) sụp đổ — xem Mục 2.3)
> ```

> [!obs] Tóm một câu cho vấn đáp
> "MCT là tiên đề; Fatou là MCT-tăng-cho-dãy-inf — dùng được mọi lúc vì $\inf$ luôn an toàn. BCT/DCT có thể né Fatou bằng MCT-giảm-cho-dãy-sup, nhưng Generalized DCT thì không, vì $\sup$ của một họ trội biến thiên có thể vô hạn dù từng số hạng hữu hạn. Vitali cần thêm Egorov vì không còn trội nào để mượn sự an toàn từ đó nữa." Đây là câu trả lời "systematic" nhất có thể đưa ra: không phải một công thức máy móc áp dụng y hệt cho mọi định lý, mà là một **cây quyết định rõ ràng**, mỗi nhánh có lý do toán học chính xác cho việc rẽ nhánh.

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
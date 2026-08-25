## Câu 1

### BÀI TOÁN TỔNG QUÁT: PHƯƠNG PHÁP SAI PHÂN HỮU HẠN CHO BVP BẬC 2

Xét phương trình vi phân tuyến tính bậc 2 tổng quát trên miền $x \in [a, b]$:
$$
P(x)u''(x) + Q(x)u'(x) + R(x)u(x) = F(x) \quad (1)
$$

Kèm theo 2 điều kiện biên hỗn hợp (Robin) ở hai đầu mút:
* **Biên trái ($x = a$):** $\alpha_0 u(a) + \beta_0 u'(a) = \gamma_0 \quad (2)$
* **Biên phải ($x = b$):** $\alpha_1 u(b) + \beta_1 u'(b) = \gamma_1 \quad (3)$

*(Lưu ý: Nếu là biên Dirichlet thì $\beta = 0$, nếu là biên Neumann thì $\alpha = 0$).*

Chia đoạn $[a, b]$ thành $n$ khoảng bằng nhau, bước lưới $h = \frac{b-a}{n}$. Ta có $n+1$ nút lưới $x_i = a + ih$ với $i = 0, 1, \dots, n$.
Ký hiệu: $P_i = P(x_i), Q_i = Q(x_i), R_i = R(x_i), F_i = F(x_i)$ và $u_i \approx u(x_i)$.

---

#### BƯỚC 1: Xấp xỉ tại các nút bên trong ($i = 1, 2, \dots, n-1$)

Sử dụng công thức xấp xỉ đạo hàm trung tâm (bậc hội tụ $O(h^2)$):
$$
u''(x_i) \approx \frac{u_{i-1} - 2u_i + u_{i+1}}{h^2}, \quad u'(x_i) \approx \frac{u_{i+1} - u_{i-1}}{2h}
$$

Thay vào phương trình (1):
$$
P_i \left( \frac{u_{i-1} - 2u_i + u_{i+1}}{h^2} \right) + Q_i \left( \frac{u_{i+1} - u_{i-1}}{2h} \right) + R_i u_i = F_i
$$

Nhân cả hai vế với $h^2$ để khử mẫu, sau đó gom nhóm theo $u_{i-1}, u_i, u_{i+1}$:
$$
P_i (u_{i-1} - 2u_i + u_{i+1}) + \frac{h}{2} Q_i (u_{i+1} - u_{i-1}) + h^2 R_i u_i = h^2 F_i
$$
$$
\left( P_i - \frac{h}{2}Q_i \right)u_{i-1} + \left( -2P_i + h^2 R_i \right)u_i + \left( P_i + \frac{h}{2}Q_i \right)u_{i+1} = h^2 F_i
$$

Để gọn gàng, ta đặt các hệ số:
* $A_i = P_i - \frac{h}{2}Q_i$
* $B_i = -2P_i + h^2 R_i$
* $C_i = P_i + \frac{h}{2}Q_i$
* $D_i = h^2 F_i$

**Phương trình nút tổng quát ($i = 1, \dots, n-1$):**
$$
A_i u_{i-1} + B_i u_i + C_i u_{i+1} = D_i \quad (*)
$$

---

#### BƯỚC 2: Xử lý biên trái tại $x_0 = a$ ($i = 0$)

Xét điều kiện biên (2): $\alpha_0 u_0 + \beta_0 u'_0 = \gamma_0$.
Giả sử $\beta_0 \neq 0$ (nếu $\beta_0 = 0$, bài toán trở thành Dirichlet, ta có ngay $u_0 = \frac{\gamma_0}{\alpha_0}$).

Dùng điểm ảo $u_{-1}$ và xấp xỉ đạo hàm trung tâm:
$$
\alpha_0 u_0 + \beta_0 \frac{u_1 - u_{-1}}{2h} = \gamma_0 \implies u_{-1} = u_1 + \frac{2h\alpha_0}{\beta_0}u_0 - \frac{2h\gamma_0}{\beta_0}
$$

Áp dụng phương trình tổng quát $(*)$ tại $i = 0$:
$$
A_0 u_{-1} + B_0 u_0 + C_0 u_1 = D_0
$$

Thay $u_{-1}$ vào phương trình trên:
$$
A_0 \left( u_1 + \frac{2h\alpha_0}{\beta_0}u_0 - \frac{2h\gamma_0}{\beta_0} \right) + B_0 u_0 + C_0 u_1 = D_0
$$

Gom nhóm theo $u_0, u_1$ và chuyển hằng số sang vế phải:
$$
\left( B_0 + A_0 \frac{2h\alpha_0}{\beta_0} \right)u_0 + (A_0 + C_0)u_1 = D_0 + A_0 \frac{2h\gamma_0}{\beta_0}
$$

Ta đặt các hệ số biên trái mới:
* $B'_0 = B_0 + A_0 \frac{2h\alpha_0}{\beta_0}$
* $C'_0 = A_0 + C_0$
* $D'_0 = D_0 + A_0 \frac{2h\gamma_0}{\beta_0}$

**Phương trình hàng đầu tiên của ma trận:**
$$
B'_0 u_0 + C'_0 u_1 = D'_0 \quad (**)
$$

---

#### BƯỚC 3: Xử lý biên phải tại $x_n = b$ ($i = n$)

Xét điều kiện biên (3): $\alpha_1 u_n + \beta_1 u'_n = \gamma_1$.
Giả sử $\beta_1 \neq 0$. Dùng điểm ảo $u_{n+1}$ và xấp xỉ đạo hàm trung tâm:
$$
\alpha_1 u_n + \beta_1 \frac{u_{n+1} - u_{n-1}}{2h} = \gamma_1 \implies u_{n+1} = u_{n-1} - \frac{2h\alpha_1}{\beta_1}u_n + \frac{2h\gamma_1}{\beta_1}
$$

Áp dụng phương trình tổng quát $(*)$ tại $i = n$:
$$
A_n u_{n-1} + B_n u_n + C_n u_{n+1} = D_n
$$

Thay $u_{n+1}$ vào phương trình trên:
$$
A_n u_{n-1} + B_n u_n + C_n \left( u_{n-1} - \frac{2h\alpha_1}{\beta_1}u_n + \frac{2h\gamma_1}{\beta_1} \right) = D_n
$$

Gom nhóm theo $u_{n-1}, u_n$ và chuyển hằng số sang vế phải:
$$
(A_n + C_n)u_{n-1} + \left( B_n - C_n \frac{2h\alpha_1}{\beta_1} \right)u_n = D_n - C_n \frac{2h\gamma_1}{\beta_1}
$$

Ta đặt các hệ số biên phải mới:
* $A'_n = A_n + C_n$
* $B'_n = B_n - C_n \frac{2h\alpha_1}{\beta_1}$
* $D'_n = D_n - C_n \frac{2h\gamma_1}{\beta_1}$

**Phương trình hàng cuối cùng của ma trận:**
$$
A'_n u_{n-1} + B'_n u_n = D'_n \quad (***)
$$

---

#### BƯỚC 4: Lập hệ phương trình ma trận $A \cdot U = F$

Từ $(*)$, $(**)$, và $(***)$, ta thiết lập được hệ phương trình tuyến tính gồm $n+1$ phương trình với $n+1$ ẩn $(u_0, u_1, \dots, u_n)$. 

Hệ này có dạng **ma trận tam băng (Tridiagonal Matrix)** cực kỳ đẹp mắt và dễ giải:

$$
\begin{bmatrix}
B'_0 & C'_0 & 0 & 0 & \dots & 0 \\
A_1 & B_1 & C_1 & 0 & \dots & 0 \\
0 & A_2 & B_2 & C_2 & \dots & 0 \\
\vdots & \vdots & \ddots & \ddots & \ddots & \vdots \\
0 & 0 & \dots & A_{n-1} & B_{n-1} & C_{n-1} \\
0 & 0 & \dots & 0 & A'_n & B'_n
\end{bmatrix}
\begin{bmatrix}
u_0 \\
u_1 \\
u_2 \\
\vdots \\
u_{n-1} \\
u_n
\end{bmatrix}
=
\begin{bmatrix}
D'_0 \\
D_1 \\
D_2 \\
\vdots \\
D_{n-1} \\
D'_n
\end{bmatrix}
$$

**Ghi chú: (Trường hợp Dirichlet):**
Nếu đề cho biên Dirichlet ($u$ tại biên bằng một hằng số, tức là $\beta_0 = 0$ hoặc $\beta_1 = 0$), bạn không cần tính các hệ số "phẩy" ($B'_0, C'_0...$) cồng kềnh. 
* Ví dụ biên trái là $u_0 = \gamma_0/\alpha_0$: Hàng đầu tiên của ma trận chỉ đơn giản là `[1, 0, 0, ..., 0]`, và phần tử đầu tiên của vế phải $F$ là $\gamma_0/\alpha_0$.
* Tương tự cho biên phải: Hàng cuối cùng là `[0, ..., 0, 1]` và vế phải là $\gamma_1/\alpha_1$.

---

### SAI SỐ CẮT CỤT ĐỊA PHƯƠNG VÀ ĐÁNH GIÁ SAI SỐ BVP BẬC 2

Giả sử hàm số $u(x)$ khả vi liên tục đến bậc cần thiết. Khai triển Taylor của $u(x)$ tại lân cận điểm $x_i$ với bước lưới $h$ được cho bởi:
$$u(x_{i+1}) = u(x_i + h) = u_i + h u'_i + \frac{h^2}{2} u''_i + \frac{h^3}{6} u'''_i + \frac{h^4}{24} u^{(4)}_i + \frac{h^5}{120} u^{(5)}_i + O(h^6) \quad (T_1)$$
$$u(x_{i-1}) = u(x_i - h) = u_i - h u'_i + \frac{h^2}{2} u''_i - \frac{h^3}{6} u'''_i + \frac{h^4}{24} u^{(4)}_i - \frac{h^5}{120} u^{(5)}_i + O(h^6) \quad (T_2)$$
$$u(x_{i+2}) = u(x_i + 2h) = u_i + 2h u'_i + 2h^2 u''_i + \frac{4h^3}{3} u'''_i + \frac{2h^4}{3} u^{(4)}_i + O(h^5) \quad (T_3)$$
$$u(x_{i-2}) = u(x_i - 2h) = u_i - 2h u'_i + 2h^2 u''_i - \frac{4h^3}{3} u'''_i + \frac{2h^4}{3} u^{(4)}_i - O(h^5) \quad (T_4)$$

---

#### 1. KHAI TRIỂN SAI SỐ CHO ĐẠO HÀM BẬC 1 ($u'$)

##### 1.1. Sai phân tiến bậc 1 (Forward Difference)
Công thức: $u'_i \approx \frac{u_{i+1} - u_i}{h}$
* **Khai triển:** Từ $(T_1)$, ta có: $u_{i+1} - u_i = h u'_i + \frac{h^2}{2} u''_i + O(h^3)$
* Chia cả hai vế cho $h$:
  $$\frac{u_{i+1} - u_i}{h} = u'_i + \frac{h}{2} u''_i + O(h^2) \implies \tau = O(h)$$
* **Kết luận:** Sai phân tiến bậc 1 hội tụ bậc 1.

##### 1.2. Sai phân lùi bậc 1 (Backward Difference)
Công thức: $u'_i \approx \frac{u_i - u_{i-1}}{h}$
* **Khai triển:** Từ $(T_2)$, ta có: $u_i - u_{i-1} = h u'_i - \frac{h^2}{2} u''_i + O(h^3)$
* Chia cả hai vế cho $h$:
  $$\frac{u_i - u_{i-1}}{h} = u'_i - \frac{h}{2} u''_i + O(h^2) \implies \tau = O(h)$$
* **Kết luận:** Sai phân lùi bậc 1 hội tụ bậc 1.

##### 1.3. Sai phân trung tâm bậc 2 (Central Difference)
Công thức: $u'_i \approx \frac{u_{i+1} - u_{i-1}}{2h}$
* **Khai triển:** Lấy $(T_1) - (T_2)$:
  $$u_{i+1} - u_{i-1} = 2h u'_i + \frac{h^3}{3} u'''_i + \frac{h^5}{60} u^{(5)}_i + O(h^7)$$
* Chia cả hai vế cho $2h$:
  $$\frac{u_{i+1} - u_{i-1}}{2h} = u'_i + \frac{h^2}{6} u'''_i + O(h^4) \implies \tau = \frac{h^2}{6} u'''_i = O(h^2)$$
* **Kết luận:** Sai phân trung tâm đạo hàm bậc 1 hội tụ bậc 2.

---

#### 2. KHAI TRIỂN SAI SỐ CHO ĐẠO HÀM BẬC 2 ($u''$)

##### 2.1. Sai phân tiến bậc 1
Công thức: $u''_i \approx \frac{u_{i+2} - 2u_{i+1} + u_i}{h^2}$
* **Khai triển:** Thay $(T_3)$ và $(T_1)$ vào tử số:
  $$u_{i+2} - 2u_{i+1} + u_i = h^2 u''_i + h^3 u'''_i + O(h^4)$$
* Chia cho $h^2$:
  $$\frac{u_{i+2} - 2u_{i+1} + u_i}{h^2} = u''_i + h u'''_i + O(h^2) \implies \tau = O(h)$$

##### 2.2. Sai phân lùi bậc 1
Công thức: $u''_i \approx \frac{u_i - 2u_{i-1} + u_{i-2}}{h^2}$
* **Khai triển:** Tương tự bằng cách thay $(T_2)$ và $(T_4)$, ta thu được:
  $$\frac{u_i - 2u_{i-1} + u_{i-2}}{h^2} = u''_i - h u'''_i + O(h^2) \implies \tau = O(h)$$

##### 2.3. Sai phân trung tâm bậc 2
Công thức: $u''_i \approx \frac{u_{i-1} - 2u_i + u_{i+1}}{h^2}$
* **Khai triển:** Lấy $(T_1) + (T_2)$:
  $$u_{i+1} + u_{i-1} = 2u_i + h^2 u''_i + \frac{h^4}{12} u^{(4)}_i + O(h^6)$$
* Chuyển vế và chia cho $h^2$:
  $$\frac{u_{i-1} - 2u_i + u_{i+1}}{h^2} = u''_i + \frac{h^2}{12} u^{(4)}_i + O(h^4) \implies \tau = \frac{h^2}{12} u^{(4)}_i = O(h^2)$$
* **Kết luận:** Sai phân trung tâm đạo hàm bậc 2 hội tụ bậc 2.

---

#### 3. KHAI TRIỂN SAI SỐ CHO ĐẠO HÀM BẬC 3 ($u'''$)

##### 3.1. Sai phân tiến/lùi bậc 1
* Công thức tiến: $u'''_i \approx \frac{u_{i+3} - 3u_{i+2} + 3u_{i+1} - u_i}{h^3} = u'''_i + O(h)$

##### 3.2. Sai phân trung tâm bậc 2
Công thức sử dụng 4 nút lân cận: $u'''_i \approx \frac{u_{i+2} - 2u_{i+1} + 2u_{i-1} - u_{i-2}}{2h^3}$
* **Khai triển:** Lấy hiệu hai cặp Taylor nâng cao: $(T_3) - (T_4)$ và $2 \times [(T_1) - (T_2)]$
  $$(u_{i+2} - u_{i-2}) - 2(u_{i+1} - u_{i-1}) = 2h^3 u'''_i + \frac{1}{2}h^5 u^{(5)}_i + O(h^7)$$
* Chia cho $2h^3$:
  $$\frac{u_{i+2} - 2u_{i+1} + 2u_{i-1} - u_{i-2}}{2h^3} = u'''_i + \frac{h^2}{4}u^{(5)}_i + O(h^4) \implies \tau = O(h^2)$$

---

#### 4. ÁP DỤNG ĐÁNH GIÁ SAI SỐ CHO BÀI TOÁN BVP BẬC 2 TỔNG QUÁT

Xét phương trình BVP tổng quát tại nút trong $x_i$:
$$P_i u''(x_i) + Q_i u'(x_i) + R_i u(x_i) = F_i$$

Khi giải bằng FDM sử dụng sai phân trung tâm bậc 2 cho cả $u'$ và $u''$, phương trình rời rạc thực tế chứa sai số cắt cụt $\tau_i$ là:
$$P_i \left[ \frac{u_{i-1} - 2u_i + u_{i+1}}{h^2} - \frac{h^2}{12} u^{(4)}_i \right] + Q_i \left[ \frac{u_{i+1} - u_{i-1}}{2h} - \frac{h^2}{6} u'''_i \right] + R_i u_i + O(h^4) = F_i$$

Gom các số hạng chứa hằng số mạng lưới $h^2$, ta thu được biểu thức **Sai số cắt cụt địa phương toàn phần tại nút trong**:

$$\tau_i = h^2 \left( \frac{P_i}{12} u^{(4)}(x_i) + \frac{Q_i}{6} u'''(x_i) \right) + O(h^4)$$

##### Đánh giá sai số toàn cục (Global Error)
* **Trường hợp Biên Dirichlet:** Vì giá trị tại hai đầu biên $u_0$ và $u_n$ được cố định chính xác tuyệt đối (sai số tại biên bằng 0), sai số toàn cục tuân theo sai số nút trong, đạt **bậc hội tụ 2**:
  $$\|u - u_h\|_{\infty} \le C \cdot h^2 = O(h^2)$$

* **Trường hợp Biên Neumann / Robin sử dụng điểm ảo:** Do điểm ảo $u_{-1}$ và $u_{n+1}$ được xây dựng từ công thức đạo hàm trung tâm có bậc hội tụ $O(h^2)$, bài toán giữ vững **bậc hội tụ 2** trên toàn miền.

---

## Câu 2

### BÀI TOÁN TỔNG QUÁT: NỘI SUY ĐA THỨC

**Phát biểu bài toán:**
Cho tập hợp gồm $n+1$ điểm dữ liệu phân biệt $(x_0, y_0), (x_1, y_1), \dots, (x_n, y_n)$. 
Cần tìm một đa thức $P_n(x)$ có bậc không vượt quá $n$ sao cho đa thức này đi qua tất cả các điểm dữ liệu đã cho. Tức là:
$$
P_n(x_i) = y_i, \quad \forall i = 0, 1, \dots, n
$$

---

### PHƯƠNG PHÁP 1: MA TRẬN VANDERMONDE (HỆ PHƯƠNG TRÌNH ĐẠI SỐ)

Ý tưởng của phương pháp này là giả sử đa thức nội suy có dạng tổng quát:
$$
P_n(x) = a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n
$$
Nhiệm vụ của ta là tìm $n+1$ hệ số $a_0, a_1, \dots, a_n$.

#### Bước 1: Thiết lập hệ phương trình
Thay lần lượt tọa độ của $n+1$ điểm vào đa thức, ta có hệ phương trình tuyến tính:
$$
\begin{cases}
a_0 + a_1 x_0 + a_2 x_0^2 + \dots + a_n x_0^n = y_0 \\
a_0 + a_1 x_1 + a_2 x_1^2 + \dots + a_n x_1^n = y_1 \\
\vdots \\
a_0 + a_1 x_n + a_2 x_n^2 + \dots + a_n x_n^n = y_n
\end{cases}
$$

#### Bước 2: Biểu diễn dưới dạng ma trận $V \cdot A = Y$
$$
\begin{bmatrix}
1 & x_0 & x_0^2 & \dots & x_0^n \\
1 & x_1 & x_1^2 & \dots & x_1^n \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x_n & x_n^2 & \dots & x_n^n
\end{bmatrix}
\begin{bmatrix}
a_0 \\
a_1 \\
\vdots \\
a_n
\end{bmatrix}
=
\begin{bmatrix}
y_0 \\
y_1 \\
\vdots \\
y_n
\end{bmatrix}
$$
Ma trận hệ số ở trên được gọi là **Ma trận Vandermonde**.

#### Bước 3: Giải hệ phương trình
Giải hệ phương trình (bằng máy tính hoặc các phương pháp Gauss, Cramer), ta tìm được vector hệ số $A$.
Thế $a_i$ ngược lại phương trình ban đầu ta được đa thức $P_n(x)$.


#### Ví dụ chi tiết cho Phương pháp 1:
Tìm đa thức nội suy qua 4 điểm: $(0, 2), (1, 3), (2, 12), (3, 35)$.
Do có 4 điểm $\implies n = 3$, đa thức cần tìm có dạng: $P_3(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3$.

Thay tọa độ các điểm vào ta thu được hệ ma trận Vandermonde:
$$
\begin{bmatrix}
1 & 0 & 0^2 & 0^3 \\
1 & 1 & 1^2 & 1^3 \\
1 & 2 & 2^2 & 2^3 \\
1 & 3 & 3^2 & 3^3
\end{bmatrix}
\begin{bmatrix}
a_0 \\
a_1 \\
a_2 \\
a_3
\end{bmatrix}
=
\begin{bmatrix}
2 \\
3 \\
12 \\
35
\end{bmatrix}
\implies
\begin{bmatrix}
1 & 0 & 0 & 0 \\
1 & 1 & 1 & 1 \\
1 & 2 & 4 & 8 \\
1 & 3 & 9 & 27
\end{bmatrix}
\begin{bmatrix}
a_0 \\
a_1 \\
a_2 \\
a_3
\end{bmatrix}
=
\begin{bmatrix}
2 \\
3 \\
12 \\
35
\end{bmatrix}
$$

Giải hệ phương trình trên bằng phương pháp thế hoặc biến đổi Gauss:
* Từ hàng 1: $a_0 = 2$.
* Hệ 3 ẩn còn lại:
  $$
  \begin{cases}
  a_1 + a_2 + a_3 = 1 \\
  2a_1 + 4a_2 + 8a_3 = 10 \\
  3a_1 + 9a_2 + 27a_3 = 33
  \end{cases}
  \implies
  \begin{cases}
  a_1 = -1 \\
  a_2 = 1 \\
  a_3 = 1
  \end{cases}
  $$

Vậy đa thức nội suy là: $\mathbf{P_3(x) = x^3 + x^2 - x + 2}$.

---

### PHƯƠNG PHÁP 2: ĐA THỨC NỘI SUY LAGRANGE

Ý tưởng của Lagrange là xây dựng trực tiếp đa thức $P_n(x)$ thông qua sự kết hợp tuyến tính của các "hàm cơ sở" mà không cần giải bất kỳ hệ phương trình nào.

#### Bước 1: Công thức tổng quát của đa thức Lagrange
Đa thức nội suy Lagrange bậc $n$ được cho bởi:
$$
P_n(x) = \sum_{i=0}^n y_i L_i(x) = y_0 L_0(x) + y_1 L_1(x) + \dots + y_n L_n(x)
$$

#### Bước 2: Thiết lập các hàm cơ sở Lagrange $L_i(x)$
Hàm cơ sở $L_i(x)$ là một đa thức bậc $n$ thỏa mãn tính chất: $L_i(x_i) = 1$ và $L_i(x_j) = 0$ với mọi $j \neq i$.
Công thức của $L_i(x)$ là tích của $n$ phân thức:
$$
L_i(x) = \prod_{j=0, j \neq i}^n \frac{x - x_j}{x_i - x_j} = \frac{(x - x_0)(x - x_1) \dots (x - x_{i-1})(x - x_{i+1}) \dots (x - x_n)}{(x_i - x_0)(x_i - x_1) \dots (x_i - x_{i-1})(x_i - x_{i+1}) \dots (x_i - x_n)}
$$

#### Bước 3: Trình bày kết quả
Khi đi thi, bạn cần viết rõ từng hàm $L_i(x)$, sau đó nhân với $y_i$ tương ứng và cộng lại.

#### Ví dụ chi tiết cho Phương pháp 2:
Tìm đa thức nội suy qua 4 điểm: $(0, 2), (1, 3), (2, 12), (3, 35)$.
Tính các hàm cơ sở Lagrange bậc 3:
* $L_0(x) = \frac{(x-1)(x-2)(x-3)}{(0-1)(0-2)(0-3)} = -\frac{1}{6}(x^3 - 6x^2 + 11x - 6)$
* $L_1(x) = \frac{(x-0)(x-2)(x-3)}{(1-0)(1-2)(1-3)} = \frac{1}{2}(x^3 - 5x^2 + 6x)$
* $L_2(x) = \frac{(x-0)(x-1)(x-3)}{(2-0)(2-1)(2-3)} = -\frac{1}{2}(x^3 - 4x^2 + 3x)$
* $L_3(x) = \frac{(x-0)(x-1)(x-2)}{(3-0)(3-1)(3-2)} = \frac{1}{6}(x^3 - 3x^2 + 2x)$

Ráp vào đa thức Lagrange tổng thể:
$$P_3(x) = 2 \cdot L_0(x) + 3 \cdot L_1(x) + 12 \cdot L_2(x) + 35 \cdot L_3(x)$$
$$P_3(x) = -\frac{1}{3}(x^3 - 6x^2 + 11x - 6) + \frac{3}{2}(x^3 - 5x^2 + 6x) - 6(x^3 - 4x^2 + 3x) + \frac{35}{6}(x^3 - 3x^2 + 2x)$$

Gom các hệ số theo từng bậc của $x$:
* Hệ số $x^3$: $-\frac{1}{3} + \frac{3}{2} - 6 + \frac{35}{6} = \frac{-2 + 9 - 36 + 35}{6} = \frac{6}{6} = 1$
* Hệ số $x^2$: $2 - \frac{15}{2} + 24 - \frac{35}{2} = 26 - \frac{50}{2} = 1$
* Hệ số $x^1$: $-\frac{11}{3} + 9 - 18 + \frac{35}{3} = \frac{24}{3} - 9 = 8 - 9 = -1$
* Hằng số tự do: $2 + 0 + 0 + 0 = 2$

Vậy đa thức thu được là: $\mathbf{P_3(x) = x^3 + x^2 - x + 2}$.

---

### PHƯƠNG PHÁP 3: ĐA THỨC NỘI SUY NEWTON 

Phương pháp Newton khắc phục được nhược điểm của Lagrange: đa thức được xây dựng theo kiểu "cộng dồn". Khi thêm điểm mới, ta chỉ cần tính thêm 1 số hạng mà không làm hỏng các số hạng trước đó.

#### Bước 1: Thiết lập Bảng sai phân chia (Divided Differences Table)
Ký hiệu sai phân chia:
* Cấp 0: $f[x_i] = y_i$
* Cấp 1: $f[x_i, x_{i+1}] = \frac{f[x_{i+1}] - f[x_i]}{x_{i+1} - x_i}$
* Cấp $k$: $f[x_i, \dots, x_{i+k}] = \frac{f[x_{i+1}, \dots, x_{i+k}] - f[x_i, \dots, x_{i+k-1}]}{x_{i+k} - x_i}$

Các hệ số của đa thức Newton chính là **đường chéo trên cùng** của bảng (in đậm). Gọi các hệ số này là $c_0, c_1, c_2, \dots, c_n$.

#### Bước 2: Công thức tổng quát đa thức Newton
$$
P_n(x) = c_0 + c_1(x - x_0) + c_2(x - x_0)(x - x_1) + \dots + c_n(x - x_0)(x - x_1)\dots(x - x_{n-1})
$$

Biểu diễn gọn bằng ký hiệu tổng:
$$
P_n(x) = f[x_0] + \sum_{k=1}^n \left( f[x_0, \dots, x_k] \prod_{i=0}^{k-1} (x - x_i) \right)
$$

**Lưu ý:** Nếu các điểm $x_i$ **cách đều nhau** (bước $h = const$), ta không cần dùng sai phân chia mà dùng **Sai phân tiến (Forward Difference)** hoặc **Sai phân lùi (Backward Difference)** để việc tính toán trên giấy nhẹ nhàng hơn rất nhiều.

#### Ví dụ chi tiết cho Phương pháp 3:
Tìm đa thức nội suy qua 4 điểm: $(0, 2), (1, 3), (2, 12), (3, 35)$.

**Bảng sai phân chia tương ứng:**

| $x_i$ | Cấp 0 ($y_i$) | Sai phân cấp 1 | Sai phân cấp 2 | Sai phân cấp 3 |
| :---: | :---: | :---: | :---: | :---: |
| **0** | **2** | | | |
| | | $\frac{3-2}{1-0} = \mathbf{1}$ | | |
| 1 | 3 | | $\frac{9-1}{2-0} = \mathbf{4}$ | |
| | | $\frac{12-3}{2-1} = 9$ | | $\frac{7-4}{3-0} = \mathbf{1}$ |
| 2 | 12 | | $\frac{23-9}{3-1} = 7$ | |
| | | $\frac{35-12}{3-2} = 23$ | | |
| 3 | 35 | | | |

Lấy các hệ số trên đường chéo trên cùng làm hệ số Newton:
$$c_0 = 2, \quad c_1 = 1, \quad c_2 = 4, \quad c_3 = 1$$

Xây dựng đa thức Newton theo công thức:
$$P_3(x) = c_0 + c_1(x - x_0) + c_2(x - x_0)(x - x_1) + c_3(x - x_0)(x - x_1)(x - x_2)$$
$$P_3(x) = 2 + 1(x - 0) + 4(x - 0)(x - 1) + 1(x - 0)(x - 1)(x - 2)$$
$$P_3(x) = 2 + x + 4(x^2 - x) + x(x^2 - 3x + 2)$$
$$P_3(x) = 2 + x + 4x^2 - 4x + x^3 - 3x^2 + 2x$$

Rút gọn đa thức thu được:
$$\mathbf{P_3(x) = x^3 + x^2 - x + 2}$$

---

### BÀI TOÁN TỔNG QUÁT: ƯỚC LƯỢNG SAI SỐ ĐA THỨC NỘI SUY

**Phát biểu:**
Cho hàm số $f(x)$ khả vi liên tục đến bậc $n+1$ trên đoạn $[a, b]$. 
Đa thức nội suy $P_n(x)$ bậc $\le n$ xấp xỉ hàm $f(x)$ tại $n+1$ điểm nút phân biệt $x_0, x_1, \dots, x_n \in [a, b]$.

Công thức phần dư (sai số thực tế) tại một điểm $x$ bất kỳ là:
$$
R_n(x) = f(x) - P_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} \prod_{i=0}^n (x - x_i)
$$
Trong đó $\xi$ là một điểm chưa biết nằm trong khoảng chứa $x$ và các mốc nội suy $x_i$.

**Công thức đánh giá chặn trên của sai số (Error Bound):**
Để tìm giá trị sai số lớn nhất có thể xảy ra trên toàn miền, ta lấy trị tuyệt đối và đánh giá chặn trên cho hai thành phần:
$$
|R_n(x)| \le \frac{M_{n+1}}{(n+1)!} \cdot \max_{x \in [a,b]} |\omega_{n+1}(x)|
$$
Với:
1. $M_{n+1} = \max_{x \in [a,b]} |f^{(n+1)}(x)|$: Giá trị lớn nhất của đạo hàm bậc $n+1$.
2. $\omega_{n+1}(x) = \prod_{i=0}^n (x - x_i)$: Đa thức nút. 
   *(Nếu không biết chính xác vị trí các nút $x_i$, ta dùng đánh giá thô: vì $x$ và $x_i$ đều thuộc đoạn $[a, b]$ nên khoảng cách $|x - x_i| \le b - a$. Do đó $\prod |x - x_i| \le (b-a)^{n+1}$).*

---

#### ÁP DỤNG VÀO VÍ DỤ CỤ THỂ

##### Ví dụ 1

**Đề bài:** Hàm $f(x) = \sin(x)$ được xấp xỉ bởi đa thức bậc 9 là $P_9(x)$ với các nút nội suy nằm trong đoạn $[0, 1]$. Hãy ước lượng sai số $|f(x) - P_9(x)|$.

**Bước 1: Phân tích các thông số**
* Bậc đa thức nội suy: $n = 9 \implies n+1 = 10$.
* Ta có 10 mốc nội suy $x_0, x_1, \dots, x_9 \in [0, 1]$.
* Cần đánh giá đạo hàm bậc 10 của hàm $f(x) = \sin(x)$:
  $f'(x) = \cos(x), \quad f''(x) = -\sin(x), \dots \implies f^{(10)}(x) = -\sin(x)$.

**Bước 2: Tìm chặn trên của đạo hàm $M_{10}$**
Vì $x \in [0, 1]$ (đơn vị radian), hàm $\sin(x)$ đồng biến và nhận giá trị dương.
Tuy nhiên, để chặn trên một cách an toàn và tổng quát nhất cho mọi bài toán lượng giác, ta luôn biết rằng:
$$|f^{(10)}(x)| = |-\sin(x)| \le 1, \quad \forall x$$
Vậy ta chọn $M_{10} = 1$.

**Bước 3: Đánh giá thành phần đa thức nút $\omega_{10}(x)$ và kết luận**

Ước lượng sai số với mọi $x \in [0, 1]$ (Nội suy)
Khi $x$ nằm trong cùng đoạn với các nút $x_i$, khoảng cách giữa $x$ và bất kỳ nút $x_i$ nào cũng không vượt quá chiều dài của đoạn, tức là:
$$|x - x_i| \le 1 - 0 = 1$$
Do đó, tích của 10 khoảng cách này:
$$|\omega_{10}(x)| = \prod_{i=0}^9 |x - x_i| \le 1^{10} = 1$$

Áp dụng công thức sai số tổng quát:
$$
|f(x) - P_9(x)| \le \frac{M_{10}}{10!} \cdot \max |\omega_{10}(x)| \le \frac{1}{10!} \cdot 1 = \frac{1}{3628800} \approx 2.7557 \times 10^{-7}
$$
*Kết luận:* Xấp xỉ vô cùng chính xác trên đoạn $[0, 1]$, sai số lớn nhất không vượt quá $2.75 \times 10^{-7}$.

##### Ví dụ 2

**Đề bài:** Cho hàm số $f(x) = \frac{1}{x}$ trên đoạn $[1, 2]$. Ta xấp xỉ hàm này bằng đa thức nội suy bậc $n$, ký hiệu là $P_n(x)$, sử dụng các mốc nội suy là nghiệm của đa thức Chebyshev. Hãy tìm chặn trên của sai số nội suy $\|f(x) - P_n(x)\|_\infty$ trên toàn miền $[1, 2]$ và nhận xét tốc độ hội tụ khi $n \to \infty$.

**Bước 1: Tính đạo hàm bậc $n+1$ và chặn trên $M_{n+1}$**
Ta có các đạo hàm liên tiếp của $f(x) = x^{-1}$:
$f'(x) = -x^{-2}$
$f''(x) = 2x^{-3}$
...
Tổng quát: $f^{(n+1)}(x) = (-1)^{n+1} \frac{(n+1)!}{x^{n+2}}$

Trên đoạn $[1, 2]$, giá trị tuyệt đối của đạo hàm đạt cực đại tại $x = 1$. Do đó:
$$
M_{n+1} = \max_{x \in [1,2]} \left| (-1)^{n+1} \frac{(n+1)!}{x^{n+2}} \right| = (n+1)!
$$

**Bước 2: Chặn đa thức nút $\omega_{n+1}(x)$ với mốc Chebyshev**
Một tính chất kinh điển của các mốc Chebyshev trên đoạn $[a, b]$ là nó làm cực tiểu hóa giá trị lớn nhất của đa thức nút $\omega_{n+1}(x)$. 
Giá trị lớn nhất này được cho bởi công thức:
$$
\max_{x \in [a,b]} |\omega_{n+1}(x)| = \frac{(b-a)^{n+1}}{2^{2n+1}}
$$
Áp dụng cho đoạn $[1, 2]$ với $b-a = 1$:
$$
\max_{x \in [1,2]} |\omega_{n+1}(x)| = \frac{1}{2^{2n+1}}
$$

**Bước 3: Đánh giá sai số toàn cục**
Áp dụng công thức sai số chuẩn:
$$
|f(x) - P_n(x)| \le \frac{M_{n+1}}{(n+1)!} \max |\omega_{n+1}(x)|
$$
Thay các kết quả vừa tính vào, ta rút gọn được:
$$
|f(x) - P_n(x)| \le \frac{(n+1)!}{(n+1)!} \cdot \frac{1}{2^{2n+1}} = \frac{1}{2^{2n+1}}
$$

**Nhận xét:** Sai số hội tụ về $0$ với tốc độ hàm mũ $\left( O(4^{-n}) \right)$. Bạn có thể thấy, bất chấp đạo hàm của hàm số chứa giai thừa $(n+1)!$ (tăng trưởng rất nhanh), mẫu số $(n+1)!$ trong công thức sai số đã triệt tiêu hoàn toàn sự bùng nổ này. Đây là sức mạnh của việc chọn đúng mốc nội suy (Chebyshev) thay vì mốc cách đều.

#### Ví dụ 3
**Đề bài:** Cho hàm số $f(x) = \ln(x + 1)$ trên $[1, 2]$. Các mốc nội suy: $x_0 = 1, \; x_1 = 1.1, \; x_2 = 1.2$.
Yêu cầu xấp xỉ tại $x = 1.04$.

a) Lập đa thức Lagrange bậc 2, xấp xỉ $f(1.04)$ và tính sai số tuyệt đối

##### Bước 1: Tính giá trị hàm tại các mốc nội suy (làm tròn 8 chữ số thập phân)
* $y_0 = f(1) = \ln(2) \approx 0.69314718$
* $y_1 = f(1.1) = \ln(2.1) \approx 0.74193734$
* $y_2 = f(1.2) = \ln(2.2) \approx 0.78845736$

##### Bước 2: Tính các hàm cơ sở Lagrange tại $x = 1.04$
* $L_0(1.04) = \frac{(1.04 - 1.1)(1.04 - 1.2)}{(1 - 1.1)(1 - 1.2)} = \frac{(-0.06)(-0.16)}{(-0.1)(-0.2)} = \frac{0.0096}{0.02} = 0.48$
* $L_1(1.04) = \frac{(1.04 - 1)(1.04 - 1.2)}{(1.1 - 1)(1.1 - 1.2)} = \frac{(0.04)(-0.16)}{(0.1)(-0.1)} = \frac{-0.0064}{-0.01} = 0.64$
* $L_2(1.04) = \frac{(1.04 - 1)(1.04 - 1.1)}{(1.2 - 1)(1.2 - 1.1)} = \frac{(0.04)(-0.06)}{(0.2)(0.1)} = \frac{-0.0024}{0.02} = -0.12$

##### Bước 3: Tính giá trị xấp xỉ $P_2(1.04)$
$$P_2(1.04) = y_0 L_0(1.04) + y_1 L_1(1.04) + y_2 L_2(1.04)$$
$$P_2(1.04) = 0.69314718 \times 0.48 + 0.74193734 \times 0.64 + 0.78845736 \times (-0.12)$$
$$P_2(1.04) \approx 0.33271065 + 0.47483990 - 0.09461488 = 0.71293567$$

##### Bước 4: Tính sai số tuyệt đối thực tế
* Giá trị chính xác: $f(1.04) = \ln(2.04) \approx 0.71294982$
* Sai số tuyệt đối thực tế: 
  $$\Delta = |f(1.04) - P_2(1.04)| = |0.71294982 - 0.71293567| = 0.00001415$$

*Nhận xét:* Sai số thực tế rất nhỏ (ở mức $1.415 \times 10^{-5}$), chứng tỏ đa thức nội suy bậc 2 xấp xỉ rất tốt hàm $\ln(x+1)$ trong lân cận hẹp của các mốc chọn sẵn.

b) Sử dụng Định lý đánh giá sai số để tìm khoảng bị chặn của sai số

Theo Định lý đánh giá sai số nội suy Lagrange với $n=2$ (bậc 2), sai số tại điểm $x = 1.04$ có dạng:
$$R_2(1.04) = \frac{f'''(\xi)}{3!} (1.04 - 1)(1.04 - 1.1)(1.04 - 1.2)$$
Trong đó $\xi \in (1, 1.2)$.

##### Bước 1: Tìm chặn đạo hàm bậc 3 trên đoạn $[1, 1.2]$
Ta tính các đạo hàm liên tiếp của $f(x) = \ln(x+1)$:
* $f'(x) = \frac{1}{x+1} = (x+1)^{-1}$
* $f''(x) = -(x+1)^{-2}$
* $f'''(x) = 2(x+1)^{-3} = \frac{2}{(x+1)^3}$

Vì $\frac{2}{(x+1)^3}$ là hàm nghịch biến trên đoạn $[1, 1.2]$, giá trị lớn nhất đạt được tại đầu mút trái $x = 1$ và nhỏ nhất tại đầu mút phải $x = 1.2$:
* Chặn trên (Max): $M_3 = f'''(1) = \frac{2}{(1+1)^3} = \frac{2}{8} = 0.25$
* Chặn dưới (Min): $m_3 = f'''(1.2) = \frac{2}{(1.2+1)^3} = \frac{2}{10.648} \approx 0.18782870$

##### Bước 2: Tính giá trị đa thức nút tại $x = 1.04$
$$\omega_3(1.04) = (1.04 - 1)(1.04 - 1.1)(1.04 - 1.2) = (0.04)(-0.06)(-0.16) = 0.000384$$

##### Bước 3: Xác định khoảng bị chặn của sai số lý thuyết
Vì đa thức nút $\omega_3(1.04) > 0$ và đạo hàm $f'''(\xi)$ dương trên toàn miền, ta có thể xây dựng khoảng chặn chặt chẽ thay vì chỉ dùng trị tuyệt đối:
$$\frac{m_3}{3!} \omega_3(1.04) \le f(1.04) - P_2(1.04) \le \frac{M_3}{3!} \omega_3(1.04)$$

* Biên dưới: $\frac{0.18782870}{6} \times 0.000384 \approx 0.00001202$
* Biên trên: $\frac{0.25}{6} \times 0.000384 = 0.00001600$

Vậy khoảng bị chặn của sai số thực tế tại $x = 1.04$ là:
$$0.00001202 \le R_2(1.04) \le 0.00001600$$

*Đối chiếu kết quả:* Sai số thực tế ta tính được ở câu a là $\Delta = 0.00001415$. Giá trị này hoàn toàn nằm lọt vào giữa khoảng chặn lý thuyết $[0.00001202, \; 0.00001600]$. 

---

## Câu 3

### CÔNG THỨC CẦU PHƯƠNG NEWTON-COTES TỔNG QUÁT

Chia đoạn $[a, b]$ thành $n$ khoảng bằng nhau.
Bước lưới: $h = \frac{b-a}{n}$
Các điểm nút: $x_i = a + ih, \quad i \in \{0, 1, 2, \dots, n\}$

Đa thức nội suy Lagrange $P_n(x)$ xấp xỉ hàm $f(x)$ cho ta công thức tích phân:
$$
\int_a^b f(x) dx \approx h \sum_{i=0}^n c_i f(x_i)
$$

Trong đó, các hệ số $c_i$ được tính bằng tích phân của hàm cơ sở Lagrange sau khi đổi biến $x = a + th$:
$$
c_i = \int_0^n L_i(t) dt = \int_0^n \prod_{j=0, j \neq i}^n \frac{t - j}{i - j} dt
$$

**Công thức phần dư (Sai số cắt cụt $R_n$):**
* Khi $n$ là **số lẻ**, sai số có dạng:
  $$R_n = \frac{h^{n+2} f^{(n+1)}(\xi)}{(n+1)!} \int_0^n \prod_{i=0}^n (t-i) dt$$
* Khi $n$ là **số chẵn**, nhờ tính đối xứng, sai số đạt bậc cao hơn:
  $$R_n = \frac{h^{n+3} f^{(n+2)}(\xi)}{(n+2)!} \int_0^n t \prod_{i=0}^n (t-i) dt$$
Với $\xi \in (a, b)$.

---

#### 1. Trường hợp $n = 1$ (Công thức Hình thang)
Hệ số $c_i$:
* $c_0 = \int_0^1 \frac{t-1}{0-1} dt = \int_0^1 (1-t) dt = \frac{1}{2}$
* $c_1 = \int_0^1 \frac{t-0}{1-0} dt = \int_0^1 t dt = \frac{1}{2}$

**Công thức cầu phương:**
$$
\int_{x_0}^{x_1} f(x) dx \approx \frac{h}{2} \left[ f(x_0) + f(x_1) \right]
$$

**Sai số $R_1$** (Vì $n=1$ là số lẻ):
$$
R_1 = \frac{h^3 f''(\xi)}{2!} \int_0^1 t(t-1) dt = \frac{h^3 f''(\xi)}{2} \left( -\frac{1}{6} \right) = -\frac{h^3}{12} f''(\xi)
$$

---

#### 2. Trường hợp $n = 2$ (Công thức Simpson 1/3)
Hệ số $c_i$:
* $c_0 = c_2 = \int_0^2 \frac{(t-1)(t-2)}{(0-1)(0-2)} dt = \frac{1}{3}$
* $c_1 = \int_0^2 \frac{t(t-2)}{(1-0)(1-2)} dt = \frac{4}{3}$

**Công thức cầu phương:**
$$
\int_{x_0}^{x_2} f(x) dx \approx \frac{h}{3} \left[ f(x_0) + 4f(x_1) + f(x_2) \right]
$$

**Sai số $R_2$** (Vì $n=2$ là số chẵn):
$$
R_2 = \frac{h^5 f^{(4)}(\xi)}{4!} \int_0^2 t \cdot t(t-1)(t-2) dt = \frac{h^5 f^{(4)}(\xi)}{24} \left( -\frac{4}{15} \right) = -\frac{h^5}{90} f^{(4)}(\xi)
$$

---

#### 3. Trường hợp $n = 3$ (Công thức Simpson 3/8)
Hệ số $c_i$:
* $c_0 = c_3 = \int_0^3 \frac{(t-1)(t-2)(t-3)}{(0-1)(0-2)(0-3)} dt = \frac{3}{8}$
* $c_1 = c_2 = \int_0^3 \frac{t(t-2)(t-3)}{(1-0)(1-2)(1-3)} dt = \frac{9}{8}$

**Công thức cầu phương:**
$$
\int_{x_0}^{x_3} f(x) dx \approx \frac{3h}{8} \left[ f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3) \right]
$$

**Sai số $R_3$** (Vì $n=3$ là số lẻ):
$$
R_3 = \frac{h^5 f^{(4)}(\xi)}{4!} \int_0^3 t(t-1)(t-2)(t-3) dt = \frac{h^5 f^{(4)}(\xi)}{24} \left( -\frac{9}{10} \right) = -\frac{3h^5}{80} f^{(4)}(\xi)
$$

---

#### 4. Trường hợp $n = 4$ (Công thức Boole)
Hệ số $c_i$ (quy đồng mẫu số 45):
* $c_0 = c_4 = \int_0^4 \prod_{j \neq 0} \frac{t-j}{-j} dt = \frac{14}{45}$
* $c_1 = c_3 = \int_0^4 \prod_{j \neq 1} \frac{t-j}{1-j} dt = \frac{64}{45}$
* $c_2 = \int_0^4 \prod_{j \neq 2} \frac{t-j}{2-j} dt = \frac{24}{45}$

**Công thức cầu phương:**
$$
\int_{x_0}^{x_4} f(x) dx \approx \frac{2h}{45} \left[ 7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4) \right]
$$

**Sai số $R_4$** (Vì $n=4$ là số chẵn):
$$
R_4 = \frac{h^7 f^{(6)}(\xi)}{6!} \int_0^4 t \cdot t(t-1)(t-2)(t-3)(t-4) dt = \frac{h^7 f^{(6)}(\xi)}{720} \left( -\frac{128}{21} \right) = -\frac{8h^7}{945} f^{(6)}(\xi)
$$

---

###  CÔNG THỨC CẦU PHƯƠNG GAUSS

#### (a) Tìm các đa thức Legendre $\pi_n(x)$ trên $[-1, 1]$ với $w(x) = 1$

Do tính đối xứng, toàn bộ $a_n = 0$. Khởi tạo bậc 0: $\pi_0(x) = 1 \implies \|\pi_0\|^2 = \int_{-1}^1 1 \, dx = 2$.

* **Bậc 1 ($n=1$):**
  $$\pi_1(x) = x \cdot \pi_0(x) = x \implies \|\pi_1\|^2 = \int_{-1}^1 x^2 \, dx = \frac{2}{3}$$
* **Bậc 2 ($n=2$):**
  $$b_2 = \frac{\|\pi_1\|^2}{\|\pi_0\|^2} = \frac{2/3}{2} = \frac{1}{3} \implies \pi_2(x) = x(x) - \frac{1}{3}(1) = x^2 - \frac{1}{3}$$
  $$\|\pi_2\|^2 = \int_{-1}^1 \left(x^2 - \frac{1}{3}\right)^2 dx = \frac{8}{45}$$
* **Bậc 3 ($n=3$):**
  $$b_3 = \frac{\|\pi_2\|^2}{\|\pi_1\|^2} = \frac{8/45}{2/3} = \frac{4}{15} \implies \pi_3(x) = x\left(x^2 - \frac{1}{3}\right) - \frac{4}{15}x = x^3 - \frac{3}{5}x$$
  $$\|\pi_3\|^2 = \int_{-1}^1 \left(x^3 - \frac{3}{5}x\right)^2 dx = \frac{8}{175}$$
* **Bậc 4 ($n=4$):**
  $$b_4 = \frac{\|\pi_3\|^2}{\|\pi_2\|^2} = \frac{8/175}{8/45} = \frac{9}{35} \implies \pi_4(x) = x\left(x^3 - \frac{3}{5}x\right) - \frac{9}{35}\left(x^2 - \frac{1}{3}\right) = x^4 - \frac{6}{7}x^2 + \frac{3}{35}$$
  $$\|\pi_4\|^2 = \int_{-1}^1 \left(x^4 - \frac{6}{7}x^2 + \frac{3}{35}\right)^2 dx = \frac{128}{11025}$$
* **Bậc 5 ($n=5$):**
  $$b_5 = \frac{\|\pi_4\|^2}{\|\pi_3\|^2} = \frac{128/11025}{8/175} = \frac{16}{63} \implies \pi_5(x) = x\pi_4(x) - \frac{16}{63}\pi_3(x) = x^5 - \frac{5}{9}x^3 + \frac{5}{21}x$$

---

#### (b) Tìm các đa thức Chebyshev $\pi_n(x)$ trên $[-1, 1]$ với $w(x) = (1-x^2)^{-1/2}$

Do tính đối xứng, toàn bộ $a_n = 0$. Đổi biến lượng giác $x = \cos\theta \implies \frac{1}{\sqrt{1-x^2}}dx = -d\theta$.
Khởi tạo: $\pi_0(x) = 1 \implies \|\pi_0\|^2 = \int_{-1}^1 \frac{1}{\sqrt{1-x^2}} \, dx = \pi$.

* **Bậc 1 ($n=1$):**
  $$\pi_1(x) = x \cdot \pi_0(x) = x \implies \|\pi_1\|^2 = \int_{-1}^1 \frac{x^2}{\sqrt{1-x^2}} \, dx = \int_{0}^{\pi} \cos^2\theta \, d\theta = \frac{\pi}{2}$$
* **Bậc 2 ($n=2$):**
  $$b_2 = \frac{\|\pi_1\|^2}{\|\pi_0\|^2} = \frac{\pi/2}{\pi} = \frac{1}{2} \implies \pi_2(x) = x^2 - \frac{1}{2} \implies \|\pi_2\|^2 = \frac{\pi}{8}$$
* **Bậc 3 ($n=3$):**
  $$b_3 = \frac{\|\pi_2\|^2}{\|\pi_1\|^2} = \frac{\pi/8}{\pi/2} = \frac{1}{4} \implies \pi_3(x) = x\left(x^2 - \frac{1}{2}\right) - \frac{1}{4}x = x^3 - \frac{3}{4}x \implies \|\pi_3\|^2 = \frac{\pi}{32}$$
* **Quy luật tổng quát cho Chebyshev Monic ($n \ge 3$):** Tất cả hệ số kế tiếp đều có $b_n = \frac{1}{4}$.
* **Bậc 4 ($n=4$):**
  $$\pi_4(x) = x\left(x^3 - \frac{3}{4}x\right) - \frac{1}{4}\left(x^2 - \frac{1}{2}\right) = x^4 - x^2 + \frac{1}{8}$$
* **Bậc 5 ($n=5$):**
  $$\pi_5(x) = x\left(x^4 - x^2 + \frac{1}{8}\right) - \frac{1}{4}\left(x^3 - \frac{3}{4}x\right) = x^5 - \frac{5}{4}x^3 + \frac{5}{16}x$$

---

#### (c) Tìm các đa thức Laguerre $\pi_n(x)$ trên $[0, +\infty)$ với $w(x) = e^{-x}$

Miền tích phân không đối xứng nên các hệ số $a_n \neq 0$. Ta cần sử dụng định nghĩa tích phân Euler (Hàm Gamma): $\int_{0}^{+\infty} x^k e^{-x} \, dx = k!$.
Khởi tạo: $\pi_0(x) = 1 \implies \|\pi_0\|^2 = \int_{0}^{+\infty} e^{-x} \, dx = 0! = 1$.

* **Bậc 1 ($n=1$):**
  $$a_1 = \frac{\langle x\pi_0, \pi_0 \rangle}{\|\pi_0\|^2} = \frac{\int_{0}^{+\infty} x e^{-x} \, dx}{1} = \frac{1!}{1} = 1 \implies \pi_1(x) = x - 1$$
  $$\|\pi_1\|^2 = \int_{0}^{+\infty} (x-1)^2 e^{-x} \, dx = \int_{0}^{+\infty} (x^2 - 2x + 1)e^{-x} \, dx = 2! - 2(1!) + 0! = 1$$
* **Bậc 2 ($n=2$):**
  $$a_2 = \frac{\langle x\pi_1, \pi_1 \rangle}{\|\pi_1\|^2} = \int_{0}^{+\infty} x(x-1)^2 e^{-x} \, dx = \int_{0}^{+\infty} (x^3 - 2x^2 + x)e^{-x} \, dx = 3! - 2(2!) + 1! = 3$$
  $$b_2 = \frac{\|\pi_1\|^2}{\|\pi_0\|^2} = \frac{1}{1} = 1 \implies \pi_2(x) = (x-3)(x-1) - 1(1) = x^2 - 4x + 2$$
  $$\|\pi_2\|^2 = \int_{0}^{+\infty} (x^2 - 4x + 2)^2 e^{-x} \, dx = 4$$
* **Bậc 3 ($n=3$):** Tính toán tương tự bằng cách quét moment giai thừa, ta thu được quy luật định tiến hệ số của họ Laguerre:
  $$\pi_3(x) = x^3 - 9x^2 + 18x - 6$$
* **Bậc 4 ($n=4$):**
  $$\pi_4(x) = x^4 - 16x^3 + 72x^2 - 96x + 24$$
* **Bậc 5 ($n=5$):**
  $$\pi_5(x) = x^5 - 25x^4 + 200x^3 - 600x^2 + 600x - 120$$

---

#### (d) Tìm các đa thức Hermite $\pi_n(x)$ trên $(-\infty, +\infty)$ với $w(x) = e^{-x^2}$

Miền đối xứng nên $a_n = 0$. Ta áp dụng tích phân Gaussian: $\int_{-\infty}^{+\infty} e^{-x^2} \, dx = \sqrt{\pi}$.
Khởi tạo: $\pi_0(x) = 1 \implies \|\pi_0\|^2 = \sqrt{\pi}$.

* **Bậc 1 ($n=1$):**
  $$\pi_1(x) = x \cdot \pi_0(x) = x \implies \|\pi_1\|^2 = \int_{-\infty}^{+\infty} x^2 e^{-x^2} \, dx = \frac{\sqrt{\pi}}{2}$$
* **Bậc 2 ($n=2$):**
  $$b_2 = \frac{\|\pi_1\|^2}{\|\pi_0\|^2} = \frac{\sqrt{\pi}/2}{\sqrt{\pi}} = \frac{1}{2} \implies \pi_2(x) = x^2 - \frac{1}{2}$$
  $$\|\pi_2\|^2 = \int_{-\infty}^{+\infty} \left(x^2 - \frac{1}{2}\right)^2 e^{-x^2} \, dx = \frac{\sqrt{\pi}}{2}$$
* **Bậc 3 ($n=3$):**
  $$b_3 = \frac{\|\pi_2\|^2}{\|\pi_1\|^2} = \frac{\sqrt{\pi}/2}{\sqrt{\pi}/2} = 1 \implies \pi_3(x) = x\left(x^2 - \frac{1}{2}\right) - 1(x) = x^3 - \frac{3}{2}x$$
  $$\|\pi_3\|^2 = \frac{3\sqrt{\pi}}{4}$$
* **Quy luật tổng quát hệ số của Hermite Monic:** $b_n = \frac{n-1}{2}$ với mọi $n \ge 1$.
* **Bậc 4 ($n=4$):** Với $b_4 = \frac{3}{2}$
  $$\pi_4(x) = x\left(x^3 - \frac{3}{2}x\right) - \frac{3}{2}\left(x^2 - \frac{1}{2}\right) = x^4 - 3x^2 + \frac{3}{4}$$
* **Bậc 5 ($n=5$):** Với $b_5 = \frac{4}{2} = 2$
  $$\pi_5(x) = x\left(x^4 - 3x^2 + \frac{3}{4}\right) - 2\left(x^3 - \frac{3}{2}x\right) = x^5 - 5x^3 + \frac{15}{4}x$$

---

### PHƯƠNG PHÁP ĐỔI BIẾN VÀ TÌM TRỌNG SỐ CẦU PHƯƠNG GAUSS-LEGENDRE

Phương pháp cầu phương Gauss-Legendre được xây dựng gốc trên đoạn tiêu chuẩn $[-1, 1]$. Để áp dụng cho một bài toán tích phân bất kỳ trên đoạn $[a, b]$, ta bắt buộc phải thực hiện phép đổi biến số trước khi tính toán.


#### 1. PHƯƠNG PHÁP ĐỔI BIẾN SỐ TỔNG QUÁT

Cần tính tích phân: $I = \int_a^b f(x) dx$

**Bước 1: Thiết lập phép biến đổi tuyến tính**
Ta ánh xạ đoạn $[a, b]$ của biến $x$ sang đoạn $[-1, 1]$ của biến $t$ bằng phương trình đường thẳng:
$$
x(t) = \frac{b-a}{2}t + \frac{b+a}{2}
$$

**Bước 2: Tính vi phân**
Đạo hàm hai vế theo $t$, ta được:
$$
dx = \frac{b-a}{2} dt
$$

**Bước 3: Thay vào tích phân gốc**
$$
I = \frac{b-a}{2} \int_{-1}^1 f\left( \frac{b-a}{2}t + \frac{b+a}{2} \right) dt
$$
Đặt hàm mới dưới dấu tích phân là $g(t) = f\left( \frac{b-a}{2}t + \frac{b+a}{2} \right)$. Tích phân trở thành bài toán chuẩn:
$$
I = \frac{b-a}{2} \int_{-1}^1 g(t) dt \approx \frac{b-a}{2} \sum_{i=1}^n c_i g(t_i)
$$
*(Trong đó $t_i$ là các điểm Gauss và $c_i$ là các trọng số tương ứng).*

---

#### 2. TÌM TRỌNG SỐ $c_i$ BẰNG MA TRẬN VANDERMONDE

Giả sử ta đã biết $n$ điểm Gauss $t_1, t_2, \dots, t_n$ (đây chính là $n$ nghiệm phân biệt của đa thức trực giao Legendre bậc $n$ trên đoạn $[-1, 1]$).
Nhiệm vụ của ta là tìm các trọng số $c_1, c_2, \dots, c_n$.

**Cơ sở lý thuyết:**
Công thức cầu phương Gauss $n$ điểm được thiết kế để đạt độ chính xác tuyệt đối (sai số bằng 0) đối với mọi đa thức có bậc $\le 2n-1$.
Do đó, công thức này chắc chắn phải đúng tuyệt đối với $n$ đa thức cơ sở đầu tiên: $1, t, t^2, \dots, t^{n-1}$.

**Thiết lập hệ phương trình:**
Thay lần lượt các hàm $g(t) = t^k$ (với $k = 0, 1, \dots, n-1$) vào công thức xấp xỉ $\int_{-1}^1 g(t) dt = \sum_{i=1}^n c_i g(t_i)$, ta ép chúng phải bằng giá trị tích phân giải tích thực tế:

* Với $g(t) = 1$: $\quad c_1 + c_2 + \dots + c_n = \int_{-1}^1 1 dt = 2$
* Với $g(t) = t$: $\quad c_1 t_1 + c_2 t_2 + \dots + c_n t_n = \int_{-1}^1 t dt = 0$
* Với $g(t) = t^2$: $\quad c_1 t_1^2 + c_2 t_2^2 + \dots + c_n t_n^2 = \int_{-1}^1 t^2 dt = \frac{2}{3}$
* ...
* Với $g(t) = t^k$: $\quad c_1 t_1^k + c_2 t_2^k + \dots + c_n t_n^k = \int_{-1}^1 t^k dt = \frac{1 - (-1)^{k+1}}{k+1}$

**Biểu diễn dưới dạng Ma trận Vandermonde:**
Hệ $n$ phương trình tuyến tính trên có thể viết dưới dạng ma trận $V \cdot C = B$:

$$
\begin{bmatrix}
1 & 1 & \dots & 1 \\
t_1 & t_2 & \dots & t_n \\
t_1^2 & t_2^2 & \dots & t_n^2 \\
\vdots & \vdots & \ddots & \vdots \\
t_1^{n-1} & t_2^{n-1} & \dots & t_n^{n-1}
\end{bmatrix}
\begin{bmatrix}
c_1 \\
c_2 \\
c_3 \\
\vdots \\
c_n
\end{bmatrix}
=
\begin{bmatrix}
2 \\
0 \\
2/3 \\
\vdots \\
\int_{-1}^1 t^{n-1} dt
\end{bmatrix}
$$

Giải hệ phương trình tuyến tính này (vì các nghiệm $t_i$ phân biệt nên định thức Vandermonde luôn khác 0), ta sẽ tìm được duy nhất bộ trọng số $c_i$.

---

#### 3. VÍ DỤ MINH HỌA: TÌM TRỌNG SỐ CHO CẦU PHƯƠNG GAUSS 2 ĐIỂM ($n=2$)

Giả sử ta đã biết 2 nghiệm của đa thức Legendre bậc 2 là: 
$$t_1 = -\frac{1}{\sqrt{3}}, \quad t_2 = \frac{1}{\sqrt{3}}$$

Ta cần tìm $c_1, c_2$. Thiết lập hệ Vandermonde với $k=0$ và $k=1$:
* Tích phân của 1: $c_1 + c_2 = \int_{-1}^1 1 dt = 2$
* Tích phân của $t$: $c_1 t_1 + c_2 t_2 = \int_{-1}^1 t dt = 0$

Hệ phương trình cụ thể:
$$
\begin{cases}
c_1 + c_2 = 2 \\
c_1 \left(-\frac{1}{\sqrt{3}}\right) + c_2 \left(\frac{1}{\sqrt{3}}\right) = 0
\end{cases}
$$

Từ phương trình (2) suy ra $c_1 = c_2$.
Thay vào phương trình (1) suy ra: $2c_1 = 2 \implies c_1 = 1$ và $c_2 = 1$.

**Kết luận công thức Gauss 2 điểm:**
$$
\int_{-1}^1 g(t) dt \approx 1 \cdot g\left(-\frac{1}{\sqrt{3}}\right) + 1 \cdot g\left(\frac{1}{\sqrt{3}}\right)
$$

---

### PHƯƠNG PHÁP ÁNH XẠ MIỀN (DOMAIN MAPPING)

Bản chất của phương pháp này là sử dụng một phép biến đổi tuyến tính (Affine Transformation) để ánh xạ một bài toán từ **miền thực tế (Global Domain)** có kích thước bất kỳ về một **miền chuẩn (Reference Domain)**. Mọi thao tác tính toán phức tạp (tìm hàm cơ sở, lấy tích phân) đều được thực hiện trên miền chuẩn này.

---

#### 1. ÁP DỤNG CHO ĐA THỨC NỘI SUY (LAGRANGE)

**Lý thuyết:**
Cho $n+1$ mốc nội suy cách đều trên đoạn $[a, b]$ với bước lưới $h = \frac{b-a}{n}$. 
Thay vì phải tính toán đa thức cơ sở Lagrange $L_i(x)$ trực tiếp trên $x$, ta ánh xạ biến $x \in [a, b]$ về biến chỉ số mốc $t \in [0, n]$ bằng phép biến đổi:
$$t = \frac{x - a}{h} \implies x = a + th$$

Lúc này, các mốc nội suy thực tế $x_0, x_1, \dots, x_n$ được ánh xạ thành các số nguyên đơn giản $0, 1, \dots, n$. Hàm cơ sở Lagrange độc lập hoàn toàn với $a, b$ và $h$:
$$L_i(x) = \mathscr{L}_i(t) = \prod_{j=0, j \neq i}^n \frac{t - j}{i - j}$$

**Ví dụ 1 chi tiết:**
Nội suy hàm $f(x) = \frac{1}{x}$ trên đoạn $[1, 4]$ bằng đa thức bậc 3. Tính giá trị xấp xỉ tại $x = 2.5$.

* **Bước 1: Ánh xạ miền**
  Ta có $a = 1, b = 4, n = 3 \implies h = 1$.
  Các mốc thực tế: $x_0=1, x_1=2, x_2=3, x_3=4$.
  Phép biến đổi: $t = \frac{x - 1}{1} = x - 1$.
  Tại điểm cần tính $x = 2.5$, tọa độ trên miền chuẩn là $t = 2.5 - 1 = 1.5$.

* **Bước 2: Tính các hàm cơ sở trên miền chuẩn $t \in [0, 3]$**
  Tại $t = 1.5$, ta tính $\mathscr{L}_i(1.5)$:
  $$\mathscr{L}_0(1.5) = \frac{(1.5-1)(1.5-2)(1.5-3)}{(0-1)(0-2)(0-3)} = \frac{(0.5)(-0.5)(-1.5)}{-6} = -0.0625$$
  $$\mathscr{L}_1(1.5) = \frac{(1.5-0)(1.5-2)(1.5-3)}{(1-0)(1-2)(1-3)} = \frac{(1.5)(-0.5)(-1.5)}{2} = 0.5625$$
  $$\mathscr{L}_2(1.5) = \frac{(1.5-0)(1.5-1)(1.5-3)}{(2-0)(2-1)(2-3)} = \frac{(1.5)(0.5)(-1.5)}{-2} = 0.5625$$
  $$\mathscr{L}_3(1.5) = \frac{(1.5-0)(1.5-1)(1.5-2)}{(3-0)(3-1)(3-2)} = \frac{(1.5)(0.5)(-0.5)}{6} = -0.0625$$

* **Bước 3: Tổng hợp kết quả nội suy**
  Các giá trị hàm: $y_0 = 1, y_1 = 0.5, y_2 = 1/3, y_3 = 0.25$.
  $$P_3(2.5) = y_0 \mathscr{L}_0 + y_1 \mathscr{L}_1 + y_2 \mathscr{L}_2 + y_3 \mathscr{L}_3$$
  $$P_3(2.5) = 1(-0.0625) + 0.5(0.5625) + \frac{1}{3}(0.5625) + 0.25(-0.0625) \approx 0.390625$$
  *(So sánh với giá trị thật $f(2.5) = 0.4$, sai số xấp xỉ là $0.009375$).*

---

#### 2. ÁP DỤNG CHO CẦU PHƯƠNG GAUSS (GAUSSIAN QUADRATURE)

**Lý thuyết:**
Các mốc và trọng số Gauss được công bố cố định trên miền chuẩn $\xi \in [-1, 1]$. Để tính tích phân trên đoạn $[a, b]$ bất kỳ, ta dùng phép biến đổi:
$$x = \frac{b-a}{2}\xi + \frac{b+a}{2} \implies dx = \frac{b-a}{2} d\xi$$

Tích phân được chuyển đổi thành:
$$\int_a^b f(x) dx = \frac{b-a}{2} \int_{-1}^1 f\left( \frac{b-a}{2}\xi + \frac{b+a}{2} \right) d\xi \approx \frac{b-a}{2} \sum_{i=1}^n c_i f(x(\xi_i))$$
*(Đại lượng $\frac{b-a}{2}$ chính là định thức Jacobi của phép biến đổi).*

**Ví dụ 2 chi tiết:**
Sử dụng cầu phương Gauss 2 điểm để tính xấp xỉ tích phân $I = \int_1^3 \frac{1}{x} dx$.

* **Bước 1: Ánh xạ miền $[1, 3] \to [-1, 1]$**
  Phép biến đổi tọa độ: 
  $$x = \frac{3-1}{2}\xi + \frac{3+1}{2} = \xi + 2$$
  Vi phân:
  $$dx = 1 d\xi$$
  Tích phân trở thành:
  $$I = \int_{-1}^1 \frac{1}{\xi + 2} d\xi$$

* **Bước 2: Áp dụng mốc và trọng số Gauss**
  Với Gauss 2 điểm ($n=2$), ta có:
  Trọng số: $c_1 = 1, \quad c_2 = 1$
  Các mốc: $\xi_1 = -\frac{1}{\sqrt{3}}, \quad \xi_2 = \frac{1}{\sqrt{3}}$

* **Bước 3: Tính toán kết quả**
  Hàm dưới dấu tích phân trên miền chuẩn là $g(\xi) = \frac{1}{\xi + 2}$.
  $$I \approx 1 \cdot g\left(-\frac{1}{\sqrt{3}}\right) + 1 \cdot g\left(\frac{1}{\sqrt{3}}\right)$$
  $$I \approx \frac{1}{-\frac{1}{\sqrt{3}} + 2} + \frac{1}{\frac{1}{\sqrt{3}} + 2} = \frac{1}{2 - 0.57735} + \frac{1}{2 + 0.57735}$$
  $$I \approx \frac{1}{1.42265} + \frac{1}{2.57735} \approx 0.70291 + 0.38799 = 1.0909$$
  *(So sánh với nghiệm giải tích chính xác $I = \ln(3) - \ln(1) \approx 1.0986$, phương pháp Gauss 2 điểm cho kết quả cực kỳ sát chỉ với hai thao tác cộng).*

---

## ĐỀ BÀI MINH HỌA (TỔNG HỢP KIẾN THỨC)

**Bài toán giá trị biên (BVP) bậc 2 với điều kiện Robin:**
Xét phương trình vi phân tuyến tính:
$$
\begin{cases}
-u''(x) + 2x u'(x) - 3 u(x) = 3x^3 - 6x - 6, \quad x \in [0,1] \\
u(0) - u'(0) = 2, \\
u(1) + u'(1) = 6.
\end{cases}
$$

Biết bài toán có nghiệm chính xác là:  
$$
u(x) = x^3 + 2.
$$

Chia đoạn $[0,1]$ thành các điểm nút cách đều nhau với bước lưới $h = 1/3$:  
$x_0 = 0, \; x_1 = \tfrac{1}{3}, \; x_2 = \tfrac{2}{3}, \; x_3 = 1.$

* **Câu 1 (3.0 điểm):** Thiết lập hệ phương trình đại số tuyến tính $A \cdot U = F$ bằng phương pháp sai phân hữu hạn trung tâm.

* **Câu 2 (2.0 điểm):** Dựa vào lược đồ sai phân đạo hàm bậc 1 và bậc 2 được sử dụng ở Câu 1, hãy dùng khai triển Taylor để chứng minh sai số cắt cụt địa phương (Local Truncation Error) tại các nút bên trong của lược đồ này đạt bậc hội tụ là $O(h^2)$.

* **Câu 3 (2.5 điểm):** Giả sử giải hệ phương trình ở Câu 1, ta thu được nghiệm xấp xỉ tại các nút là:  
  $u_0 = 2, \; u_1 = \tfrac{55}{27}, \; u_2 = \tfrac{62}{27}, \; u_3 = 3.$  
  Sử dụng phương pháp **sai phân chia Newton**, hãy thiết lập đa thức nội suy $u_h(x)$ đi qua 4 điểm trên. Tính sai số nội suy thực tế $E(x) = u(x) - u_h(x)$ và rút ra nhận xét.

* **Câu 4 (2.5 điểm):** Xét bài toán tính gần đúng tích phân năng lượng $I = \int_0^1 u_h(x) dx$ thông qua nghiệm nội suy vừa tìm được.
  1. Tính tích phân trên bằng công thức cầu phương **Newton-Cotes: Simpson 3/8** và **cầu phương Gauss 2 điểm**.
  2. Viết công thức phần dư (sai số cắt cụt) của phương pháp Simpson 3/8. Từ đó, hãy đánh giá **chặn trên của sai số lý thuyết** khi áp dụng công thức này cho hàm chính xác $u(x)$. Kết quả tính toán ở ý 1 có phù hợp với đánh giá chặn trên này không? Giải thích.

---

### LỜI GIẢI CHI TIẾT

#### Câu 1: Thiết lập hệ phương trình sai phân (3.0 điểm)

Đưa phương trình về dạng tổng quát: $P(x)u'' + Q(x)u' + R(x)u = F(x)$.
Ta có: $P(x) = -1, \; Q(x) = 2x, \; R(x) = -3$. Hàm vế phải là $F(x) = 3x^3 - 6x - 6$.
Bước lưới $h = 1/3 \implies h^2 = 1/9$.

**1. Tại các nút bên trong ($i=1, 2$):**
Công thức nút tổng quát: $A_i u_{i-1} + B_i u_i + C_i u_{i+1} = D_i$
* $A_i = P_i - \frac{h}{2}Q_i = -1 - \frac{1}{6}(2x_i) = -1 - \frac{x_i}{3}$
* $B_i = -2P_i + h^2 R_i = 2 + \frac{1}{9}(-3) = \frac{5}{3}$
* $C_i = P_i + \frac{h}{2}Q_i = -1 + \frac{x_i}{3}$
* $D_i = h^2 F_i = \frac{1}{9}(3x_i^3 - 6x_i - 6)$

Xét $i=1$ ($x_1 = 1/3$):
* $A_1 = -1 - \frac{1}{9} = -\frac{10}{9}$
* $B_1 = \frac{15}{9}$
* $C_1 = -1 + \frac{1}{9} = -\frac{8}{9}$
* $D_1 = \frac{1}{9}\left( 3(\frac{1}{27}) - 2 - 6 \right) = \frac{1}{9}\left( \frac{1}{9} - 8 \right) = -\frac{71}{81}$
Phương trình 1: $-\frac{10}{9}u_0 + \frac{15}{9}u_1 - \frac{8}{9}u_2 = -\frac{71}{81}$

Xét $i=2$ ($x_2 = 2/3$):
* $A_2 = -1 - \frac{2}{9} = -\frac{11}{9}$
* $B_2 = \frac{15}{9}$
* $C_2 = -1 + \frac{2}{9} = -\frac{7}{9}$
* $D_2 = \frac{1}{9}\left( 3(\frac{8}{27}) - 4 - 6 \right) = \frac{1}{9}\left( \frac{8}{9} - 10 \right) = -\frac{82}{81}$
Phương trình 2: $-\frac{11}{9}u_1 + \frac{15}{9}u_2 - \frac{7}{9}u_3 = -\frac{82}{81}$

**2. Tại nút biên trái ($x_0 = 0$):**
Điều kiện: $u_0 - u'_0 = 2 \implies u_0 - \frac{u_1 - u_{-1}}{2h} = 2 \implies u_{-1} = u_1 - \frac{2}{3}u_0 + \frac{4}{3}$.
Thay $x_0 = 0$ vào công thức tổng quát:
$A_0 = -1, \; B_0 = \frac{5}{3}, \; C_0 = -1, \; D_0 = \frac{1}{9}(-6) = -\frac{2}{3}$.
Phương trình: $-1(u_{-1}) + \frac{5}{3}u_0 - 1(u_1) = -\frac{2}{3}$
Thế $u_{-1}$ vào: $-(u_1 - \frac{2}{3}u_0 + \frac{4}{3}) + \frac{5}{3}u_0 - u_1 = -\frac{2}{3}$
Rút gọn: $\frac{7}{3}u_0 - 2u_1 = \frac{2}{3} \implies 7u_0 - 6u_1 = 2$ (Phương trình 0)

**3. Tại nút biên phải ($x_3 = 1$):**
Điều kiện: $u_3 + u'_3 = 6 \implies u_3 + \frac{u_4 - u_2}{2h} = 6 \implies u_4 = u_2 - \frac{2}{3}u_3 + 4$.
Thay $x_3 = 1$ vào công thức tổng quát:
$A_3 = -1 - \frac{1}{3} = -\frac{4}{3}, \; B_3 = \frac{5}{3}, \; C_3 = -1 + \frac{1}{3} = -\frac{2}{3}, \; D_3 = \frac{1}{9}(3-6-6) = -1$.
Phương trình: $-\frac{4}{3}u_2 + \frac{5}{3}u_3 - \frac{2}{3}(u_4) = -1$
Thế $u_4$ vào: $-\frac{4}{3}u_2 + \frac{5}{3}u_3 - \frac{2}{3}(u_2 - \frac{2}{3}u_3 + 4) = -1$
Rút gọn: $-2u_2 + \frac{19}{9}u_3 = \frac{5}{3} \implies -18u_2 + 19u_3 = 15$ (Phương trình 3)

**Hệ ma trận $A \cdot U = F$:**
$$
\begin{bmatrix}
7 & -6 & 0 & 0 \\
-\frac{10}{9} & \frac{15}{9} & -\frac{8}{9} & 0 \\
0 & -\frac{11}{9} & \frac{15}{9} & -\frac{7}{9} \\
0 & 0 & -18 & 19
\end{bmatrix}
\begin{bmatrix}
u_0 \\
u_1 \\
u_2 \\
u_3
\end{bmatrix}
=
\begin{bmatrix}
2 \\
-\frac{71}{81} \\
-\frac{82}{81} \\
15
\end{bmatrix}
$$

---

#### Câu 2: Chứng minh sai số khai triển Taylor của FDM (2.0 điểm)

Giả sử nghiệm chính xác $u(x)$ khả vi liên tục đủ số bậc. Khai triển Taylor của $u(x)$ quanh điểm $x_i$ với bước lưới $h$:
$$u_{i+1} = u_i + h u'_i + \frac{h^2}{2}u''_i + \frac{h^3}{6}u'''_i + \frac{h^4}{24}u^{(4)}_i + O(h^5) \quad (1)$$
$$u_{i-1} = u_i - h u'_i + \frac{h^2}{2}u''_i - \frac{h^3}{6}u'''_i + \frac{h^4}{24}u^{(4)}_i - O(h^5) \quad (2)$$

**1. Sai số của xấp xỉ đạo hàm bậc 1:**
Lấy $(1) - (2)$, ta triệt tiêu các đạo hàm bậc chẵn:
$$u_{i+1} - u_{i-1} = 2hu'_i + \frac{h^3}{3}u'''_i + O(h^5)$$
Chia hai vế cho $2h$:
$$\frac{u_{i+1} - u_{i-1}}{2h} = u'_i + \frac{h^2}{6}u'''_i + O(h^4)$$
Phần dư là $\tau_1 = \frac{h^2}{6}u'''_i = O(h^2)$. Do đó sai phân trung tâm bậc 1 hội tụ bậc 2.

**2. Sai số của xấp xỉ đạo hàm bậc 2:**
Lấy $(1) + (2)$, ta triệt tiêu các đạo hàm bậc lẻ:
$$u_{i+1} + u_{i-1} = 2u_i + h^2u''_i + \frac{h^4}{12}u^{(4)}_i + O(h^6)$$
Chuyển $2u_i$ sang vế trái và chia cho $h^2$:
$$\frac{u_{i+1} - 2u_i + u_{i-1}}{h^2} = u''_i + \frac{h^2}{12}u^{(4)}_i + O(h^4)$$
Phần dư là $\tau_2 = \frac{h^2}{12}u^{(4)}_i = O(h^2)$. Do đó sai phân trung tâm bậc 2 hội tụ bậc 2.

*Kết luận:* Cấu trúc lược đồ sai phân trung tâm được sử dụng ở Câu 1 đảm bảo sai số cắt cụt địa phương tại các nút trong đạt $O(h^2)$.

---

#### Câu 3: Nội suy Newton và Đánh giá sai số nội suy (2.5 điểm)

**1. Lập bảng sai phân chia Newton:**
Với các điểm dữ liệu $(0, 2), (1/3, 55/27), (2/3, 62/27), (1, 3)$.

| $x_i$ | Cấp 0 ($y_i$) | Cấp 1 | Cấp 2 | Cấp 3 |
| :---: | :--- | :--- | :--- | :--- |
| **0** | **2** | | | |
| | | $\frac{55/27 - 2}{1/3 - 0} = \mathbf{\frac{1}{9}}$ | | |
| 1/3 | 55/27 | | $\frac{7/9 - 1/9}{2/3 - 0} = \mathbf{1}$ | |
| | | $\frac{62/27 - 55/27}{2/3 - 1/3} = \frac{7}{9}$ | | $\frac{2 - 1}{1 - 0} = \mathbf{1}$ |
| 2/3 | 62/27 | | $\frac{19/9 - 7/9}{1 - 1/3} = 2$ | |
| | | $\frac{3 - 62/27}{1 - 2/3} = \frac{19}{9}$ | | |
| 1 | 3 | | | |

**2. Đa thức nội suy $u_h(x)$:**
Sử dụng các hệ số trên đường chéo (in đậm), ta có:
$$u_h(x) = 2 + \frac{1}{9}(x - 0) + 1(x - 0)\left(x - \frac{1}{3}\right) + 1(x - 0)\left(x - \frac{1}{3}\right)\left(x - \frac{2}{3}\right)$$
Rút gọn phương trình:
$$u_h(x) = 2 + \frac{x}{9} + \left(x^2 - \frac{x}{3}\right) + x\left(x^2 - x + \frac{2}{9}\right)$$
$$u_h(x) = 2 + \frac{x}{9} + x^2 - \frac{x}{3} + x^3 - x^2 + \frac{2x}{9}$$
$$u_h(x) = x^3 + x\left(\frac{1}{9} - \frac{3}{9} + \frac{2}{9}\right) + (x^2 - x^2) + 2 = x^3 + 2$$

**3. Đánh giá sai số nội suy:**
Hàm sai số thực tế: $E(x) = u(x) - u_h(x) = (x^3 + 2) - (x^3 + 2) = 0$.
*Nhận xét:* Bậc của phương pháp sai phân đủ để giải chính xác hoàn toàn hàm đa thức bậc 3 tại các nút. Khi đó, đa thức nội suy Newton (cũng là bậc 3) tái tạo lại chính xác nghiệm đúng, dẫn đến sai số nội suy bằng 0 tuyệt đối trên toàn miền $[0, 1]$.

---

#### Câu 4: Cầu phương Newton-Cotes, Gauss và Chặn trên sai số (2.5 điểm)

Cần tính tích phân $I = \int_0^1 (x^3 + 2) dx$.

**1. Tính tích phân bằng các công thức:**
* **Simpson 3/8 (với $h=1/3$, $n=3$):**
  $$I_{S} \approx \frac{3h}{8} \left[ u_0 + 3u_1 + 3u_2 + u_3 \right]$$
  $$I_{S} = \frac{3(1/3)}{8} \left[ 2 + 3\left(\frac{55}{27}\right) + 3\left(\frac{62}{27}\right) + 3 \right] = \frac{1}{8} \left[ 5 + \frac{351}{27} \right] = \frac{1}{8} [5 + 13] = \frac{18}{8} = 2.25$$

* **Gauss 2 điểm ($c_1=c_2=1, t_1 = -1/\sqrt{3}, t_2 = 1/\sqrt{3}$):**
  Thực hiện đổi biến $x = \frac{b-a}{2}t + \frac{b+a}{2} = \frac{t+1}{2} \implies dx = \frac{1}{2}dt$.
  $$I_G = \frac{1}{2} \int_{-1}^1 \left[ \left(\frac{t+1}{2}\right)^3 + 2 \right] dt \approx \frac{1}{2} \left[ \left(\frac{-1/\sqrt{3}+1}{2}\right)^3 + 2 + \left(\frac{1/\sqrt{3}+1}{2}\right)^3 + 2 \right]$$
  Sử dụng hằng đẳng thức $(a-b)^3 + (a+b)^3 = 2a^3 + 6ab^2$ với $a=1/2, b=1/(2\sqrt{3})$:
  $$I_G = \frac{1}{2} \left[ 2\left(\frac{1}{8}\right) + 6\left(\frac{1}{2}\right)\left(\frac{1}{12}\right) + 4 \right] = \frac{1}{2} \left[ \frac{1}{4} + \frac{1}{4} + 4 \right] = \frac{4.5}{2} = 2.25$$

**2. Đánh giá chặn trên sai số lý thuyết của Simpson 3/8:**
* Công thức sai số (phần dư) của Simpson 3/8 đơn là:
  $$R_3 = -\frac{3h^5}{80} u^{(4)}(\xi), \quad \xi \in (0, 1)$$
* Với hàm chính xác $u(x) = x^3 + 2$, ta tính các đạo hàm:
  $u'(x) = 3x^2, \quad u''(x) = 6x, \quad u'''(x) = 6, \quad u^{(4)}(x) = 0$.
* Chặn trên sai số tuyệt đối (Upper Bound Error):
  $$|R_3| \le \max_{\xi \in (0,1)} \left| -\frac{3(1/3)^5}{80} \cdot u^{(4)}(\xi) \right| = \max_{\xi \in (0,1)} \left| -\frac{1}{6480} \cdot 0 \right| = 0$$

*Giải thích sự phù hợp:* Việc đánh giá chặn trên lý thuyết cho kết quả $|R_3| = 0$ chứng tỏ phương pháp Simpson 3/8 tính toán chính xác tuyệt đối cho các đa thức có bậc $\le 3$. Đối chiếu với ý 1, kết quả thu được là $2.25$ trùng khớp hoàn toàn với tích phân giải tích thực tế ($\int_0^1 (x^3+2)dx = [x^4/4 + 2x]_0^1 = 2.25$). Do đó, sai số thực tế bằng 0, hoàn toàn tuân thủ giới hạn chặn trên đã đánh giá.


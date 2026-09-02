# Lý thuyết Cầu phương Gauss và Đa thức trực giao

## 1. Không gian tích trong và Không gian đa thức

Xét không gian các hàm thực liên tục trên đoạn $[a, b]$, ký hiệu là $C[a, b]$. Ta trang bị cho không gian này một tích trong được xác định thông qua hàm trọng số $w(x)$ (với $w(x) > 0$ trên $(a, b)$):
$$\langle f, g \rangle = \int_a^b f(x)g(x)w(x) dx$$

Ký hiệu $\Pi_n$ là không gian các đa thức có bậc không vượt quá $n$. Một tập hợp các đa thức $\{P_0, P_1, \dots, P_n\}$ được gọi là họ đa thức trực giao nếu $\text{deg}(P_k) = k$ và:
$$\langle P_i, P_j \rangle = 0 \quad \text{với mọi } i \neq j$$

> [!thm] Bổ đề 1: Độc lập tuyến tính và tính trực giao
> Cho $\{P_0, P_1, \dots, P_n\}$ là họ đa thức trực giao. Khi đó:
> Tập hợp này là độc lập tuyến tính và tạo thành một cơ sở cho không gian $\Pi_n$.
> Đa thức $P_n$ trực giao với mọi đa thức $q(x)$ có bậc nhỏ hơn $n$, tức là $\langle q, P_n \rangle = 0$ với mọi $q \in \Pi_{n-1}$.

> [!prf] Chứng minh Bổ đề 1
> Xét phương trình tổ hợp tuyến tính: $\sum_{j=0}^n \alpha_j P_j(x) = 0$.
> Lấy tích trong của cả hai vế với đa thức $P_k$ (với $0 \le k \le n$), ta có:
>   $$\left\langle \sum_{j=0}^n \alpha_j P_j, P_k \right\rangle = 0$$
> Theo tính chất tuyến tính của tích trong và tính trực giao:
>   $$\sum_{j=0}^n \alpha_j \langle P_j, P_k \rangle = \alpha_k \langle P_k, P_k \rangle = 0$$
> Vì $\langle P_k, P_k \rangle > 0$, suy ra $\alpha_k = 0$ với mọi $k$. Do đó họ đa thức độc lập tuyến tính.
> Lấy $q(x)$ là một đa thức bất kỳ bậc $m < n$. Vì họ đa thức tạo thành cơ sở, ta có thể biểu diễn $q(x)$ dưới dạng: $q(x) = \sum_{j=0}^m c_j P_j(x)$.
> Xét tích trong $\langle q, P_n \rangle$:
>   $$\langle q, P_n \rangle = \left\langle \sum_{j=0}^m c_j P_j, P_n \right\rangle = \sum_{j=0}^m c_j \langle P_j, P_n \rangle$$
> Vì $j \le m < n$ nên $j \neq n$, do đó $\langle P_j, P_n \rangle = 0$. Kết luận $\langle q, P_n \rangle = 0$.

## 2. Hệ thức truy hồi xây dựng đa thức trực giao

> [!algo] Bổ đề 2: Hệ thức truy hồi 3 số hạng
> Mọi họ đa thức trực giao monic (hệ số bậc cao nhất bằng 1) đều thỏa mãn hệ thức truy hồi:
> $$P_n(x) = (x - a_n)P_{n-1}(x) - b_n P_{n-2}(x)$$
> Với các hệ số được xác định bởi:
> $a_n = \frac{\langle x P_{n-1}, P_{n-1} \rangle}{\langle P_{n-1}, P_{n-1} \rangle}$
> $b_n = \frac{\langle x P_{n-1}, P_{n-2} \rangle}{\langle P_{n-2}, P_{n-2} \rangle}$

> [!prf] Chứng minh Bổ đề 2
> Xét đa thức $P_n(x) - xP_{n-1}(x)$. Vì cả hai đều là đa thức monic bậc $n$, hiệu của chúng là một đa thức có bậc tối đa là $n-1$.
> Do đó, có thể biểu diễn hiệu này qua cơ sở trực giao:
>   $$xP_{n-1}(x) - P_n(x) = \sum_{j=0}^{n-1} c_j P_j(x)$$
>   Hay viết lại: $P_n(x) = xP_{n-1}(x) - \sum_{j=0}^{n-1} c_j P_j(x)$.
> Để xác định hệ số $c_{n-1}$ (tương ứng với $a_n$), ta lấy tích trong hai vế với $P_{n-1}$:
>   $$\langle P_n, P_{n-1} \rangle = \langle xP_{n-1}, P_{n-1} \rangle - c_{n-1}\langle P_{n-1}, P_{n-1} \rangle$$
> Vì $\langle P_n, P_{n-1} \rangle = 0$, ta suy ra $c_{n-1} = \frac{\langle xP_{n-1}, P_{n-1} \rangle}{\langle P_{n-1}, P_{n-1} \rangle} = a_n$.
> Tương tự, để xác định $c_{n-2}$ (tương ứng với $b_n$), lấy tích trong hai vế với $P_{n-2}$:
>   $$\langle P_n, P_{n-2} \rangle = \langle xP_{n-1}, P_{n-2} \rangle - c_{n-2}\langle P_{n-2}, P_{n-2} \rangle$$
> Suy ra $c_{n-2} = \frac{\langle xP_{n-1}, P_{n-2} \rangle}{\langle P_{n-2}, P_{n-2} \rangle} = b_n$.
> Với các $j < n-2$, $\langle xP_{n-1}, P_j \rangle = \langle P_{n-1}, xP_j \rangle$. Vì đa thức $xP_j$ có bậc $j+1 < n-1$, theo Bổ đề 1 thì tích trong này bằng 0. Do đó tất cả các hệ số $c_j$ với $j < n-2$ đều bằng 0, chứng minh được công thức truy hồi 3 số hạng.

## 3. Tính chất nghiệm của đa thức trực giao

> [!thm] Định lý 1: Sự phân bố nghiệm
> Đa thức trực giao $P_n(x)$ có đúng $n$ nghiệm thực phân biệt và tất cả các nghiệm này đều nằm hoàn toàn trong khoảng $(a, b)$.

> [!prf] 
> Giả sử $P_n(x)$ chỉ đổi dấu tại $m$ điểm phân biệt $t_1, t_2, \dots, t_m$ nằm trong khoảng $(a, b)$, với $m < n$.
> Thiết lập một đa thức phụ trợ có bậc $m$:
>   $$p(x) = (x - t_1)(x - t_2)\dots(x - t_m)$$
> Khi đó, các nghiệm của $p(x)$ trùng với các điểm đổi dấu của $P_n(x)$. Do đó, hàm số $P_n(x)p(x)$ sẽ không đổi dấu trên toàn bộ đoạn $[a, b]$ (vì tại các điểm $t_i$, cả hai hàm cùng đổi dấu nên tích của chúng luôn giữ nguyên một dấu).
> Tính tích phân của hàm này kèm trọng số:
>   $$\langle P_n, p \rangle = \int_a^b P_n(x)p(x)w(x) dx \neq 0$$
> Tuy nhiên, vì đa thức $p(x)$ có bậc $m < n$, nên $p(x) \in \Pi_{n-1}$. Áp dụng Bổ đề 1, đa thức $P_n$ phải trực giao với mọi đa thức thuộc $\Pi_{n-1}$, tức là $\langle P_n, p \rangle = 0$.
> Hai điều trên dẫn đến mâu thuẫn. Vậy giả thiết $m < n$ là sai. Đa thức $P_n(x)$ phải đổi dấu đúng $n$ lần, tương đương với việc có $n$ nghiệm thực phân biệt trong khoảng $(a, b)$.

## 4. Xây dựng Cầu phương Gauss và Bậc chính xác

Nhiệm vụ của cầu phương Gauss là tìm $n$ điểm mốc $x_i$ và các hệ số trọng lượng $c_i$ sao cho công thức sau đạt độ chính xác cao nhất:
$$\int_a^b f(x)w(x) dx \approx \sum_{i=1}^n c_i f(x_i)$$

> [!thm] Định lý 2: Bậc chính xác tối đa của Cầu phương Gauss
> Nếu chọn $n$ điểm mốc $x_1, x_2, \dots, x_n$ là các nghiệm của đa thức trực giao $P_n(x)$ ứng với hàm trọng số $w(x)$, thì công thức cầu phương Gauss nội suy sẽ chính xác tuyệt đối cho mọi đa thức $f(x)$ có bậc $\le 2n - 1$.

> [!prf] 
> Xét $f(x)$ là một đa thức tùy ý thuộc $\Pi_{2n-1}$ (bậc $\le 2n-1$).
> Thực hiện phép chia đa thức $f(x)$ cho đa thức trực giao $P_n(x)$, ta thu được thương $q(x)$ và dư $r(x)$:
>   $$f(x) = q(x)P_n(x) + r(x)$$
> Vì $\text{deg}(f) \le 2n - 1$ và $\text{deg}(P_n) = n$, suy ra bậc của thương $q(x) \le n - 1$. Phần dư $r(x)$ luôn có bậc nhỏ hơn $P_n(x)$ nên bậc của $r(x) \le n - 1$.
> Tính tích phân chính xác của $f(x)$ trên miền có trọng số:
>   $$\int_a^b f(x)w(x) dx = \int_a^b q(x)P_n(x)w(x) dx + \int_a^b r(x)w(x) dx$$
> Cụm tích phân đầu tiên chính là tích trong $\langle q, P_n \rangle$. Vì $q \in \Pi_{n-1}$, theo Bổ đề 1 thì $\langle q, P_n \rangle = 0$. Do đó:
>   $$\int_a^b f(x)w(x) dx = \int_a^b r(x)w(x) dx \tag{1}$$
> Tiếp tục áp dụng công thức xấp xỉ cầu phương tại $n$ điểm mốc $x_i$:
>   $$\sum_{i=1}^n c_i f(x_i) = \sum_{i=1}^n c_i [q(x_i)P_n(x_i) + r(x_i)]$$
> Vì các mốc $x_i$ được chọn là nghiệm của $P_n(x)$ nên $P_n(x_i) = 0$ tại mọi $i$. Tổng rút gọn thành:
>   $$\sum_{i=1}^n c_i f(x_i) = \sum_{i=1}^n c_i r(x_i) \tag{2}$$
> Vì $r(x)$ là đa thức bậc $\le n - 1$, công thức nội suy Lagrange với $n$ điểm bất kỳ luôn chính xác tuyệt đối cho nó, nghĩa là:
>   $$\int_a^b r(x)w(x) dx = \sum_{i=1}^n c_i r(x_i) \tag{3}$$
> Từ (1), (2) và (3), ta suy ra:
>   $$\int_a^b f(x)w(x) dx = \sum_{i=1}^n c_i f(x_i)$$
> Định lý được chứng minh hoàn tất.

> [!thm] Định lý 4: Tính dương của hệ số trọng lượng
> Trong công thức cầu phương Gauss, tất cả các hệ số trọng lượng $c_i$ đều là số dương thực sự.

> [!prf] 
> Xét hàm phụ trợ $f(x) = l_j^2(x)$, trong đó $l_j(x)$ là đa thức nội suy cơ sở Lagrange thứ $j$ được xây dựng trên các mốc Gauss $x_1, \dots, x_n$. Đa thức $l_j(x)$ có bậc $n-1$, do đó $f(x)$ có bậc $2n-2$.
> Vì $2n-2 \le 2n-1$, theo Định lý 3, công thức cầu phương Gauss tính chính xác tuyệt đối cho $f(x)$:
> $$\int_a^b l_j^2(x) w(x) dx = \sum_{i=1}^n c_i l_j^2(x_i)$$
> Theo định nghĩa của đa thức Lagrange, $l_j(x_i) = 1$ nếu $i=j$ và bằng $0$ nếu $i \neq j$. Suy ra vế phải chỉ còn lại đúng $c_j \cdot 1^2 = c_j$.
> Vế trái là tích phân của một hàm không âm $l_j^2(x)$ nhân với trọng số dương $w(x)$, và do $l_j(x)$ không đồng nhất bằng $0$, tích phân này bắt buộc phải lớn hơn $0$. Từ đó suy ra $c_j > 0$ với mọi $j$.

# Lời giải chi tiết: Xây dựng công thức Gauss-Legendre với $n = 2$

## Bài toán
[cite_start]Tìm mốc và trọng lượng cho phương pháp cầu phương Gauss trên đoạn $[-1, 1]$ với hàm trọng số $w(x) = 1$ sử dụng $n = 2$ điểm[cite: 76]. Đạt bậc chính xác tối đa là $2n - 1 = 3$.

---

## Bước 1: Xây dựng đa thức đơn khởi bậc 2 bằng Hệ thức truy hồi

Để tìm các mốc nội suy, trước hết ta cần tìm đa thức trực giao đơn khởi bậc 2 (đa thức Legendre monic bậc 2), ký hiệu là $P_2(x)$ (hoặc $\pi_2(x)$). [cite_start]Ta sử dụng hệ thức truy hồi 3 số hạng xuất phát từ các đa thức ban đầu[cite: 137]:
- $P_0(x) = 1$
- $P_1(x) = x$

[cite_start]Công thức truy hồi tổng quát[cite: 137]:
$$P_n(x) = (x - a_n)P_{n-1}(x) - b_n P_{n-2}(x)$$

Với $n = 2$, hệ thức trở thành:
$$P_2(x) = (x - a_2)P_1(x) - b_2 P_0(x) = (x - a_2)x - b_2$$

[cite_start]Bây giờ, ta tính các hệ số $a_2$ và $b_2$ thông qua tích trong không gian hàm[cite: 137]:

### 1. Tính hệ số $a_2$
[cite_start]Theo công thức phép chiếu vuông góc[cite: 137]:
$$a_2 = \frac{\langle x P_1, P_1 \rangle}{\langle P_1, P_1 \rangle}$$

- [cite_start]Tính tử số $\langle x P_1, P_1 \rangle$: Vì $P_1(x) = x \implies x P_1(x) \cdot P_1(x) = x \cdot x \cdot x = x^3$[cite: 135].
  $$\langle x P_1, P_1 \rangle = \int_{-1}^{1} x^3 \cdot 1 \, dx = \left[ \frac{x^4}{4} \right]_{-1}^{1} = \frac{1}{4} - \frac{1}{4} = 0$$
- Vì tử số bằng 0, ta suy ra ngay: $a_2 = 0$.

### 2. Tính hệ số $b_2$
[cite_start]Theo công thức phép chiếu vuông góc[cite: 137]:
$$b_2 = \frac{\langle x P_1, P_0 \rangle}{\langle P_0, P_0 \rangle}$$

- [cite_start]Tính tử số $\langle x P_1, P_0 \rangle$: Vì $P_1(x) = x$ và $P_0(x) = 1 \implies x P_1(x) \cdot P_0(x) = x^2$[cite: 135].
  $$\langle x P_1, P_0 \rangle = \int_{-1}^{1} x^2 \cdot 1 \, dx = \left[ \frac{x^3}{3} \right]_{-1}^{1} = \frac{1}{3} - \left(-\frac{1}{3}\right) = \frac{2}{3}$$
- Tính mẫu số $\langle P_0, P_0 \rangle$:
  $$\langle P_0, P_0 \rangle = \int_{-1}^{1} 1^2 \cdot 1 \, dx = \left[ x \right]_{-1}^{1} = 1 - (-1) = 2$$
- Thay vào công thức tính $b_2$:
  $$b_2 = \frac{2/3}{2} = \frac{1}{3}$$

### Kết luận đa thức bậc 2:
Thay $a_2 = 0$ và $b_2 = \frac{1}{3}$ vào hệ thức truy hồi, ta thu được đa thức đơn khởi bậc 2:
$$P_2(x) = x^2 - \frac{1}{3}$$

---

## Bước 2: Tìm các mốc nội suy $x_i$

Các mốc nội suy của cầu phương Gauss chính là nghiệm của đa thức trực giao vừa tìm được. Ta giải phương trình $P_2(x) = 0$:
$$x^2 - \frac{1}{3} = 0 \iff x^2 = \frac{1}{3} \iff x = \pm \frac{1}{\sqrt{3}}$$

Vậy ta thu được 2 mốc nội suy phân biệt nằm trong khoảng $(-1, 1)$:
- $x_1 = -\frac{1}{\sqrt{3}}$
- $x_2 = \frac{1}{\sqrt{3}}$

---

## Bước 3: Tính các đa thức cơ sở Lagrange $l_i(x)$

Với hai mốc $x_1, x_2$, ta xây dựng các đa thức cơ sở Lagrange bậc 1 tương ứng:

### 1. Đa thức cơ sở $l_1(x)$ (ứng với mốc $x_1$)
$$l_1(x) = \frac{x - x_2}{x_1 - x_2} = \frac{x - \frac{1}{\sqrt{3}}}{-\frac{1}{\sqrt{3}} - \frac{1}{\sqrt{3}}} = \frac{x - \frac{1}{\sqrt{3}}}{-\frac{2}{\sqrt{3}}} = -\frac{\sqrt{3}}{2} \left( x - \frac{1}{\sqrt{3}} \right)$$

### 2. Đa thức cơ sở $l_2(x)$ (ứng với mốc $x_2$)
$$l_2(x) = \frac{x - x_1}{x_2 - x_1} = \frac{x - \left(-\frac{1}{\sqrt{3}}\right)}{\frac{1}{\sqrt{3}} - \left(-\frac{1}{\sqrt{3}}\right)} = \frac{x + \frac{1}{\sqrt{3}}}{\frac{2}{\sqrt{3}}} = \frac{\sqrt{3}}{2} \left( x + \frac{1}{\sqrt{3}} \right)$$

---

## Bước 4: Tính các trọng số $w_i$

Các trọng số $w_i$ thu được bằng cách lấy tích phân các đa thức cơ sở Lagrange trên đoạn $[-1, 1]$ với hàm trọng số $w(x) = 1$:

### 1. Tính trọng số $w_1$
$$w_1 = \int_{-1}^{1} l_1(x) \, dx = \int_{-1}^{1} -\frac{\sqrt{3}}{2} \left( x - \frac{1}{\sqrt{3}} \right) dx$$
Ta tìm nguyên hàm:
$$\int -\frac{\sqrt{3}}{2} \left( x - \frac{1}{\sqrt{3}} \right) dx = -\frac{\sqrt{3}}{2} \left( \frac{x^2}{2} - \frac{x}{\sqrt{3}} \right)$$
Thế cận từ $-1$ đến $1$:
$$w_1 = \left[ -\frac{\sqrt{3}}{2} \left( \frac{x^2}{2} - \frac{x}{\sqrt{3}} \right) \right]_{-1}^{1}$$
- Tại cận trên $x = 1$: $-\frac{\sqrt{3}}{2} \left( \frac{1}{2} - \frac{1}{\sqrt{3}} \right) = -\frac{\sqrt{3}}{4} + \frac{1}{2}$
- Tại cận dưới $x = -1$: $-\frac{\sqrt{3}}{2} \left( \frac{(-1)^2}{2} - \frac{-1}{\sqrt{3}} \right) = -\frac{\sqrt{3}}{2} \left( \frac{1}{2} + \frac{1}{\sqrt{3}} \right) = -\frac{\sqrt{3}}{4} - \frac{1}{2}$
- Trừ hai giá trị:
  $$w_1 = \left( -\frac{\sqrt{3}}{4} + \frac{1}{2} \right) - \left( -\frac{\sqrt{3}}{4} - \frac{1}{2} \right) = \frac{1}{2} + \frac{1}{2} = 1$$

### 2. Tính trọng số $w_2$
Do tính chất đối xứng của miền tích phân $[-1, 1]$ và vị trí các nút, ta hoàn toàn có thể suy ra $w_2 = w_1 = 1$. Tính toán tường minh để kiểm chứng:
$$w_2 = \int_{-1}^{1} l_2(x) \, dx = \int_{-1}^{1} \frac{\sqrt{3}}{2} \left( x + \frac{1}{\sqrt{3}} \right) dx$$
Thế cận nguyên hàm:
$$w_2 = \left[ \frac{\sqrt{3}}{2} \left( \frac{x^2}{2} + \frac{x}{\sqrt{3}} \right) \right]_{-1}^{1}$$
- Tại cận trên $x = 1$: $\frac{\sqrt{3}}{2} \left( \frac{1}{2} + \frac{1}{\sqrt{3}} \right) = \frac{\sqrt{3}}{4} + \frac{1}{2}$
- Tại cận dưới $x = -1$: $\frac{\sqrt{3}}{2} \left( \frac{1}{2} - \frac{1}{\sqrt{3}} \right) = \frac{\sqrt{3}}{4} - \frac{1}{2}$
- Trừ hai giá trị:
  $$w_2 = \left( \frac{\sqrt{3}}{4} + \frac{1}{2} \right) - \left( \frac{\sqrt{3}}{4} - \frac{1}{2} \right) = 1$$

---

## Kết luận

[cite_start]Sau khi xác định xong các mốc $x_1, x_2$ và các trọng số $w_1, w_2$, ta thu được hệ thức cầu phương Gauss-Legendre 2 điểm hoàn chỉnh[cite: 76]:
$$\int_{-1}^{1} f(x) \, dx \approx 1 \cdot f\left(-\frac{1}{\sqrt{3}}\right) + 1 \cdot f\left(\frac{1}{\sqrt{3}}\right)$$

$\xi$
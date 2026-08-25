
# Nội suy — Sai phân hữu hạn — Cầu phương Newton-Cotes & Gauss — Đa thức trực giao

> Tài liệu tổng hợp lý thuyết xây dựng (bằng phương pháp Vandermonde / hệ số bất định) cho: nội suy đa thức, sai phân hữu hạn đạo hàm bậc $n$, cầu phương Newton–Cotes, đa thức trực giao (hệ thức truy hồi 3 số hạng), và trọng số cầu phương Gauss. Phần cuối là các ví dụ ứng dụng tổng hợp.

---

## Mục lục

1. [[#I. Nội suy đa thức]]
2. [[#II. Sai phân hữu hạn tổng quát]]
3. [[#III. Cầu phương Newton–Cotes]]
4. [[#IV. Đa thức trực giao]]
5. [[#V. Trọng số cầu phương Gauss]]
6. [[#VI. Ví dụ ứng dụng tổng hợp]]

---

## I. Nội suy đa thức

### I.1. Phát biểu bài toán

[!def] Bài toán nội suy
Cho $n+1$ điểm phân biệt $(x_0,y_0),\dots,(x_n,y_n)$, $x_i$ đôi một khác nhau. Tìm đa thức $P(x)$, $\deg P\le n$, sao cho
$$P(x_i)=y_i,\qquad i=0,\dots,n.$$

[!thm] Tồn tại và duy nhất
Đa thức nội suy bậc $\le n$ luôn tồn tại và duy nhất.

[!prf] Chứng minh
Xét ánh xạ tuyến tính $\Phi:\mathbb{P}_n\to\mathbb{R}^{n+1}$, $P\mapsto(P(x_0),\dots,P(x_n))$. Trong cơ sở đơn thức $\{1,x,\dots,x^n\}$, ma trận biểu diễn $\Phi$ chính là ma trận Vandermonde $V$ (mục I.2) với
$$\det V=\prod_{0\le i<j\le n}(x_j-x_i)\ne0$$
do các $x_i$ phân biệt. Vậy $\Phi$ song ánh $\Rightarrow$ tồn tại duy nhất $P$ với $\Phi(P)=(y_0,\dots,y_n)$.

### I.2. Phương pháp Vandermonde

Viết $P(x)=a_0+a_1x+\dots+a_nx^n$. Điều kiện nội suy cho hệ tuyến tính
$$
\underbrace{\begin{pmatrix}1&x_0&x_0^2&\cdots&x_0^n\\1&x_1&x_1^2&\cdots&x_1^n\\\vdots&&&&\vdots\\1&x_n&x_n^2&\cdots&x_n^n\end{pmatrix}}_{V}
\begin{pmatrix}a_0\\a_1\\\vdots\\a_n\end{pmatrix}=\begin{pmatrix}y_0\\y_1\\\vdots\\y_n\end{pmatrix}
$$
Giải $a=V^{-1}y$ (tồn tại vì $\det V\ne0$).

[!note] Nhận xét
Đây là cách trực tiếp nhất về mặt khái niệm nhưng $V$ thường có **điều kiện xấu** (ill-conditioned) khi $n$ tăng — không dùng để tính số trong thực hành, chỉ dùng để **xây dựng lý thuyết** (như phần III, V bên dưới).

### I.3. Phương pháp Lagrange

[!def] Đa thức cơ sở Lagrange
$$L_i(x)=\prod_{\substack{j=0\\j\ne i}}^{n}\frac{x-x_j}{x_i-x_j},\qquad i=0,\dots,n$$
Tính chất: $L_i(x_k)=\delta_{ik}$ (Kronecker).

[!thm] Công thức nội suy Lagrange
$$P(x)=\sum_{i=0}^n y_i\,L_i(x)$$

[!prf] Chứng minh
$P(x_k)=\sum_i y_iL_i(x_k)=\sum_i y_i\delta_{ik}=y_k$, và $\deg P\le n$ vì mỗi $L_i$ có bậc $n$. Theo tính duy nhất (I.1), đây chính là đa thức nội suy.

### I.4. Phương pháp Newton (tỉ hiệu chia)

[!def] Tỉ hiệu chia (divided difference)
$$f[x_i]=y_i,\qquad f[x_i,\dots,x_{i+k}]=\frac{f[x_{i+1},\dots,x_{i+k}]-f[x_i,\dots,x_{i+k-1}]}{x_{i+k}-x_i}$$

[!thm] Công thức nội suy Newton
$$P(x)=f[x_0]+f[x_0,x_1](x-x_0)+f[x_0,x_1,x_2](x-x_0)(x-x_1)+\dots+f[x_0,\dots,x_n]\prod_{i=0}^{n-1}(x-x_i)$$

[!prf] Ý tưởng chứng minh
Quy nạp theo $n$: gọi $P_{k}$ là đa thức nội suy qua $x_0,\dots,x_k$. Ta có $P_k(x)=P_{k-1}(x)+f[x_0,\dots,x_k]\prod_{i=0}^{k-1}(x-x_i)$, kiểm tra trực tiếp $P_k(x_j)=y_j$ với $j\le k$ bằng quy nạp và định nghĩa tỉ hiệu chia.

[!note] Ưu điểm
Thêm điểm nội suy mới chỉ cần thêm **một** tỉ hiệu chia mới và **một** số hạng — không tính lại từ đầu, khác Lagrange/Vandermonde.

### I.5. So sánh ba phương pháp

| Tiêu chí | Vandermonde | Lagrange | Newton |
|---|---|---|---|
| Độ phức tạp dựng hệ | $O(n^3)$ (giải hệ) | $O(n^2)$ | $O(n^2)$ (bảng tỉ hiệu) |
| Thêm điểm mới | Giải lại toàn bộ | Tính lại toàn bộ | Chỉ thêm 1 số hạng |
| Ổn định số | Kém (ill-conditioned) | Tốt cho đánh giá tại 1 điểm | Tốt, linh hoạt |
| Vai trò lý thuyết | Chứng minh tồn tại–duy nhất; nền cho cầu phương | Chứng minh trực tiếp, đẹp | Tính toán thực hành |

**Kết luận:** cả ba đều cho **cùng một** đa thức duy nhất (theo I.1) — chỉ khác cách biểu diễn/tính toán.

---

## II. Sai phân hữu hạn tổng quát

### II.1. Phương pháp hệ số bất định (Taylor + Vandermonde)

[!def] Bài toán
Xấp xỉ đạo hàm bậc $n$ tại $x_0$ bằng tổ hợp tuyến tính giá trị hàm tại $k+1$ nút $x_0+s_ih$ ($s_i\in\mathbb{Z}$ phân biệt, $h$ là bước lưới):
$$f^{(n)}(x_0)\approx \frac{1}{h^n}\sum_{i=0}^{k}c_i f(x_0+s_ih)$$

**Xây dựng:** khai triển Taylor mỗi số hạng quanh $x_0$:
$$f(x_0+s_ih)=\sum_{j=0}^{\infty}\frac{(s_ih)^j}{j!}f^{(j)}(x_0)$$
$$\sum_{i=0}^k c_if(x_0+s_ih)=\sum_{j=0}^\infty \frac{h^j}{j!}f^{(j)}(x_0)\sum_{i=0}^k c_is_i^j$$

Để vế phải khớp $h^n f^{(n)}(x_0)/h^n=f^{(n)}(x_0)$ (sau khi chia $h^n$) và triệt tiêu các đạo hàm bậc thấp hơn không mong muốn, ta ép:
$$\sum_{i=0}^k c_i s_i^{\,j}=\begin{cases}n!, & j=n\\0, & j=0,\dots,k,\ j\ne n\end{cases}$$

Đây là hệ Vandermonde (ma trận $[s_i^j]$ chuyển vị) với $k+1$ phương trình, $k+1$ ẩn $c_i$ — giải được duy nhất vì $s_i$ phân biệt.

[!thm] Bậc hội tụ
Nếu dùng $k+1=n+m$ điểm ($j=0,\dots,n+m-1$ đều được ép), số hạng Taylor đầu tiên **không** bị triệt tiêu là $j=k+1=n+m$, cho sai số
$$f^{(n)}(x_0)=\frac{1}{h^n}\sum_i c_if(x_0+s_ih)+\mathcal{O}(h^{m})$$
Vậy: **cần $n+m$ điểm để đạt bậc hội tụ $m$ cho đạo hàm bậc $n$.**

### II.2. Sai phân tiến (forward)

Chọn $s_i=0,1,\dots,k$ với $k=n+m-1$ (chỉ dùng nút $\ge x_0$).

### II.3. Sai phân lùi (backward)

Chọn $s_i=0,-1,\dots,-k$. 

[!note] Quan hệ với sai phân tiến
Công thức lùi thu được bằng phép thế $h\to -h$ trong công thức tiến:
$$f^{(n)}(x_0)\approx\frac{1}{(-h)^n}\sum_i c_i f(x_0-s_ih)=\frac{(-1)^n}{h^n}\sum_i c_i f(x_0-s_ih)$$
với $c_i$ **giống hệt** bộ hệ số của công thức tiến (chỉ đổi nút và có thể đổi dấu tổng thể theo $(-1)^n$).

### II.4. Sai phân trung tâm (central)

Chọn $s_i$ đối xứng quanh $0$. Do tính đối xứng của bộ nút, các số hạng Taylor có **tính chẵn/lẻ khác với $f^{(n)}$** tự động triệt tiêu (không cần ép thêm điều kiện) — nhờ đó công thức trung tâm đạt **thêm 1 bậc chính xác miễn phí** so với số điểm dùng.

- $n$ lẻ (đạo hàm bậc lẻ): dùng nút đối xứng **không** gồm $0$ hoặc gồm $0$ với hệ số $0$.
- $n$ chẵn: dùng nút đối xứng gồm $0$.

Kết quả: với $2k$ hoặc $2k+1$ điểm đối xứng, sai phân trung tâm luôn đạt bậc chính xác **chẵn** $m=2,4,6,\dots$

### II.5. Bảng công thức cho đạo hàm cấp 1, 2, 3

Ký hiệu $f_i:=f(x_0+ih)$.

#### Sai phân tiến

| $n$ | $m$ | Công thức |
|---|---|---|
| 1 | 1 | $f'(x_0)\approx\dfrac{-f_0+f_1}{h}$ |
| 1 | 2 | $f'(x_0)\approx\dfrac{-3f_0+4f_1-f_2}{2h}$ |
| 1 | 3 | $f'(x_0)\approx\dfrac{-11f_0+18f_1-9f_2+2f_3}{6h}$ |
| 2 | 1 | $f''(x_0)\approx\dfrac{f_0-2f_1+f_2}{h^2}$ |
| 2 | 2 | $f''(x_0)\approx\dfrac{2f_0-5f_1+4f_2-f_3}{h^2}$ |
| 3 | 1 | $f'''(x_0)\approx\dfrac{-f_0+3f_1-3f_2+f_3}{h^3}$ |
| 3 | 2 | $f'''(x_0)\approx\dfrac{-5f_0+18f_1-24f_2+14f_3-3f_4}{2h^3}$ |

#### Sai phân lùi (ký hiệu $f_{-i}:=f(x_0-ih)$)

| $n$ | $m$ | Công thức |
|---|---|---|
| 1 | 1 | $f'(x_0)\approx\dfrac{f_0-f_{-1}}{h}$ |
| 1 | 2 | $f'(x_0)\approx\dfrac{3f_0-4f_{-1}+f_{-2}}{2h}$ |
| 2 | 1 | $f''(x_0)\approx\dfrac{f_0-2f_{-1}+f_{-2}}{h^2}$ |
| 2 | 2 | $f''(x_0)\approx\dfrac{2f_0-5f_{-1}+4f_{-2}-f_{-3}}{h^2}$ |
| 3 | 1 | $f'''(x_0)\approx\dfrac{f_0-3f_{-1}+3f_{-2}-f_{-3}}{h^3}$ |
| 3 | 2 | $f'''(x_0)\approx\dfrac{5f_0-18f_{-1}+24f_{-2}-14f_{-3}+3f_{-4}}{2h^3}$ |

#### Sai phân trung tâm

| $n$ | $m$ | Công thức |
|---|---|---|
| 1 | 2 | $f'(x_0)\approx\dfrac{f_1-f_{-1}}{2h}$ |
| 1 | 4 | $f'(x_0)\approx\dfrac{-f_2+8f_1-8f_{-1}+f_{-2}}{12h}$ |
| 2 | 2 | $f''(x_0)\approx\dfrac{f_1-2f_0+f_{-1}}{h^2}$ |
| 2 | 4 | $f''(x_0)\approx\dfrac{-f_2+16f_1-30f_0+16f_{-1}-f_{-2}}{12h^2}$ |
| 3 | 2 | $f'''(x_0)\approx\dfrac{f_2-2f_1+2f_{-1}-f_{-2}}{2h^3}$ |
| 3 | 4 | $f'''(x_0)\approx\dfrac{f_{-3}-8f_{-2}+13f_{-1}-13f_1+8f_2-f_3}{8h^3}$ |

[!eg] Ví dụ minh họa — sai phân trung tâm bậc 4 cho $f'$
Tính $f'(2)$ với $f(x)=\ln x$, $h=0.1$, dùng công thức $n{=}1,m{=}4$:
$$f'(2)\approx\frac{-f(2.2)+8f(2.1)-8f(1.9)+f(1.8)}{12(0.1)}=\frac{-0.788457+5.935496-5.134832+0.587787}{1.2}\approx0.499995$$
So với giá trị đúng $f'(2)=1/2$: sai số $\approx5.0\times10^{-6}$ — minh chứng cho việc tăng bậc chính xác bằng phương pháp hệ số bất định.

---

## III. Cầu phương Newton–Cotes (bằng Vandermonde)

### III.1. Xây dựng tổng quát với $n+1$ điểm chia đều

Chia $[a,b]$ thành $n$ đoạn đều: $h=\dfrac{b-a}{n}$, nút $x_i=a+ih,\ i=0,\dots,n$.

Muốn công thức $\displaystyle\int_a^b f(x)\,dx\approx\sum_{i=0}^n c_if(x_i)$ **chính xác tuyệt đối** với mọi đa thức bậc $\le n$, ta ép đúng trên cơ sở đơn thức $\{1,x,\dots,x^n\}$:
$$\sum_{i=0}^n c_i x_i^{\,k}=\int_a^b x^k\,dx,\qquad k=0,\dots,n$$

Dạng ma trận Vandermonde:
$$
\begin{pmatrix}1&1&\cdots&1\\x_0&x_1&\cdots&x_n\\\vdots&&&\vdots\\x_0^n&x_1^n&\cdots&x_n^n\end{pmatrix}
\begin{pmatrix}c_0\\c_1\\\vdots\\c_n\end{pmatrix}=
\begin{pmatrix}b-a\\\frac{b^2-a^2}{2}\\\vdots\\\frac{b^{n+1}-a^{n+1}}{n+1}\end{pmatrix}
$$
Hệ luôn giải được duy nhất vì $\det\ne0$ ($x_i$ phân biệt).

### III.2. Trường hợp $n=1$: Quy tắc hình thang (Trapezoidal)

2 điểm $x_0=a,x_1=b$, $h=b-a$. Hệ:
$$c_0+c_1=h,\qquad c_0a+c_1b=\frac{b^2-a^2}{2}$$
Giải: $c_0=c_1=h/2$.
$$\boxed{\int_a^b f(x)\,dx\approx\frac{h}{2}\big[f(a)+f(b)\big]}$$

### III.3. Trường hợp $n=2$: Simpson 1/3

3 điểm $x_0=a,\ x_1=\frac{a+b}{2},\ x_2=b$, $h=\frac{b-a}{2}$. Giải hệ Vandermonde $3\times3$ (ép đúng $1,x,x^2$) được:
$$c_0=\frac{h}{3},\quad c_1=\frac{4h}{3},\quad c_2=\frac{h}{3}$$
$$\boxed{\int_a^b f(x)\,dx\approx\frac{h}{3}\big[f(x_0)+4f(x_1)+f(x_2)\big]=\frac{b-a}{6}\Big[f(a)+4f\Big(\tfrac{a+b}{2}\Big)+f(b)\Big]}$$

### III.4. Trường hợp $n=3$: Simpson 3/8

4 điểm cách đều $x_0,\dots,x_3$, $h=\dfrac{b-a}{3}$. Giải hệ Vandermonde $4\times4$ (ép đúng $1,x,x^2,x^3$) được:
$$c_0=c_3=\frac{3h}{8},\qquad c_1=c_2=\frac{9h}{8}$$
$$\boxed{\int_a^b f(x)\,dx\approx\frac{3h}{8}\big[f(x_0)+3f(x_1)+3f(x_2)+f(x_3)\big]}$$

[!note] Quy luật chung
Bậc chính xác đại số của công thức Newton–Cotes đóng $n+1$ điểm là $n$ (lẻ $n$) hoặc $n+1$ (chẵn $n$, "miễn phí" thêm 1 bậc do đối xứng — tương tự hiện tượng ở sai phân trung tâm, mục II.4).

[!eg] Ví dụ minh họa — Newton–Cotes 3 điểm cho $\int_0^1\frac{dx}{1+x^2}$
Với $a=0,b=1,h=0.5$: $f(0)=1,\ f(0.5)=0.8,\ f(1)=0.5$.
$$I\approx\frac{0.5}{3}[1+4(0.8)+0.5]=\frac{4.7}{6}\approx0.783333$$
So với $I_{\text{đúng}}=\arctan(1)=\pi/4\approx0.785398$: sai số $\approx2.065\times10^{-3}$.

---

## IV. Đa thức trực giao — Hệ thức truy hồi 3 số hạng

### IV.1. Lý thuyết cốt lõi

[!thm] Hệ thức truy hồi 3 số hạng
Mọi họ đa thức trực giao đơn khởi (monic) $\{\pi_n\}$ trên $[a,b]$ (hoặc $\mathbb R,\ \mathbb R_+$) với trọng số $w(x)$ thỏa:
$$\pi_n(x)=(x-a_n)\pi_{n-1}(x)-b_n\pi_{n-2}(x),\qquad \pi_{-1}:=0,\ \pi_0:=1$$
với
$$a_n=\frac{\langle x\pi_{n-1},\pi_{n-1}\rangle}{\|\pi_{n-1}\|^2},\qquad b_n=\frac{\|\pi_{n-1}\|^2}{\|\pi_{n-2}\|^2}$$

[!note] Mẹo phòng thi
Nếu miền tích phân đối xứng qua $0$ và $w(x)$ chẵn (Legendre, Chebyshev, Hermite) $\Rightarrow a_n=0$ với mọi $n$, hệ thức rút gọn: $\pi_n(x)=x\pi_{n-1}(x)-b_n\pi_{n-2}(x)$. Với Laguerre (miền $[0,\infty)$, không đối xứng), phải tính đầy đủ cả $a_n$ lẫn $b_n$.

### IV.2. Legendre — $w(x)=1$ trên $[-1,1]$

$\|\pi_0\|^2=\int_{-1}^1 1\,dx=2$.

- $\pi_1(x)=x$, $\|\pi_1\|^2=\dfrac23$
- $b_2=\dfrac{2/3}{2}=\dfrac13\Rightarrow \pi_2(x)=x^2-\dfrac13$, $\|\pi_2\|^2=\dfrac{8}{45}$
- $b_3=\dfrac{8/45}{2/3}=\dfrac{4}{15}\Rightarrow \pi_3(x)=x^3-\dfrac35x$, $\|\pi_3\|^2=\dfrac{8}{175}$
- $b_4=\dfrac{8/175}{8/45}=\dfrac{9}{35}\Rightarrow \pi_4(x)=x^4-\dfrac67x^2+\dfrac{3}{35}$, $\|\pi_4\|^2=\dfrac{128}{11025}$
- $b_5=\dfrac{128/11025}{8/175}=\dfrac{16}{63}\Rightarrow \pi_5(x)=x^5-\dfrac59x^3+\dfrac{5}{21}x$

### IV.3. Chebyshev — $w(x)=(1-x^2)^{-1/2}$ trên $[-1,1]$

Đổi biến $x=\cos\theta$. $\|\pi_0\|^2=\int_{-1}^1\frac{dx}{\sqrt{1-x^2}}=\pi$.

- $\pi_1(x)=x$, $\|\pi_1\|^2=\dfrac{\pi}{2}$
- $b_2=\dfrac12\Rightarrow \pi_2(x)=x^2-\dfrac12$, $\|\pi_2\|^2=\dfrac{\pi}{8}$
- $b_3=\dfrac14\Rightarrow \pi_3(x)=x^3-\dfrac34x$, $\|\pi_3\|^2=\dfrac{\pi}{32}$
- **Quy luật:** $b_n=\dfrac14$ với mọi $n\ge3$
- $\pi_4(x)=x^4-x^2+\dfrac18$
- $\pi_5(x)=x^5-\dfrac54x^3+\dfrac{5}{16}x$

### IV.4. Laguerre — $w(x)=e^{-x}$ trên $[0,\infty)$

Dùng $\int_0^\infty x^ke^{-x}dx=k!$. $\|\pi_0\|^2=1$.

- $a_1=\dfrac{1!}{0!}=1\Rightarrow \pi_1(x)=x-1$, $\|\pi_1\|^2=2!-2(1!)+0!=1$
- $a_2=\dfrac{3!-2(2!)+1!}{1}=3$, $b_2=1\Rightarrow \pi_2(x)=(x-3)(x-1)-1=x^2-4x+2$, $\|\pi_2\|^2=4$
- $\pi_3(x)=x^3-9x^2+18x-6$
- $\pi_4(x)=x^4-16x^3+72x^2-96x+24$
- $\pi_5(x)=x^5-25x^4+200x^3-600x^2+600x-120$

### IV.5. Hermite — $w(x)=e^{-x^2}$ trên $(-\infty,\infty)$

Dùng $\int_{-\infty}^\infty e^{-x^2}dx=\sqrt\pi$. $\|\pi_0\|^2=\sqrt\pi$.

- $\pi_1(x)=x$, $\|\pi_1\|^2=\dfrac{\sqrt\pi}{2}$
- $b_2=\dfrac12\Rightarrow \pi_2(x)=x^2-\dfrac12$, $\|\pi_2\|^2=\dfrac{\sqrt\pi}{2}$
- $b_3=1\Rightarrow \pi_3(x)=x^3-\dfrac32x$, $\|\pi_3\|^2=\dfrac{3\sqrt\pi}{4}$
- **Quy luật:** $b_n=\dfrac{n-1}{2}$ với mọi $n\ge1$
- $\pi_4(x)=x^4-3x^2+\dfrac34$ ($b_4=3/2$)
- $\pi_5(x)=x^5-5x^3+\dfrac{15}{4}x$ ($b_5=2$)

---

## V. Trọng số cầu phương Gauss (bằng Vandermonde)

### V.1. Phương pháp chung

[!thm] Cấu trúc cầu phương Gauss $n$ điểm
Cho họ trực giao $\{\pi_k\}$ ứng với trọng số $w(x)$ trên miền $D$. Chọn:
1. **Nút** $x_1,\dots,x_n$ = nghiệm của $\pi_n(x)=0$ (đảm bảo tính đối xứng của cầu phương, cho độ chính xác đại số $2n-1$).
2. **Trọng số** $c_1,\dots,c_n$ = nghiệm hệ Vandermonde ép đúng với đơn thức $1,x,\dots,x^{n-1}$:
$$\sum_{i=1}^n c_i x_i^{\,k}=\int_D x^k w(x)\,dx,\qquad k=0,\dots,n-1$$

$$
\begin{pmatrix}1&\cdots&1\\x_1&\cdots&x_n\\\vdots&&\vdots\\x_1^{n-1}&\cdots&x_n^{n-1}\end{pmatrix}
\begin{pmatrix}c_1\\\vdots\\c_n\end{pmatrix}=
\begin{pmatrix}\mu_0\\\vdots\\\mu_{n-1}\end{pmatrix},\qquad \mu_k=\int_D x^kw(x)\,dx
$$

Việc chọn nút là nghiệm $\pi_n$ (trực giao với mọi đa thức bậc $<n$) khiến sai số cầu phương triệt tiêu thêm cho các đa thức bậc $n,\dots,2n-1$ — đây là lý do độ chính xác đạt $2n-1$ dù chỉ ép $n$ điều kiện Vandermonde.

### V.2. Legendre ($w=1$ trên $[-1,1]$, $\mu_0=2,\mu_1=0,\mu_2=\frac23,\dots$)

**$n=1$:** nút $x_1=0$ (nghiệm $\pi_1$). $c_1=\mu_0=2$.

**$n=2$:** nút $\pm1/\sqrt3$ (nghiệm $\pi_2$). Đối xứng $\Rightarrow c_1=c_2$; từ $k{=}0$: $2c_1=2\Rightarrow c_1=c_2=1$.

**$n=3$:** nút $0,\pm\sqrt{3/5}$ (nghiệm $\pi_3$). Giải hệ Vandermonde $3\times3$:
$$c_1=c_3=\frac59,\qquad c_2=\frac89$$

| $n$ | Nút $x_i$ | Trọng số $c_i$ |
|---|---|---|
| 1 | $0$ | $2$ |
| 2 | $\pm\frac{1}{\sqrt3}$ | $1,\ 1$ |
| 3 | $0,\ \pm\sqrt{3/5}$ | $\frac89;\ \frac59,\frac59$ |

### V.3. Chebyshev ($w=(1-x^2)^{-1/2}$ trên $[-1,1]$, $\mu_0=\pi,\mu_1=0,\mu_2=\pi/2$)

Nút: nghiệm $\pi_n\Rightarrow x_i=\cos\dfrac{(2i-1)\pi}{2n}$.

**$n=1$:** $x_1=0$, $c_1=\mu_0=\pi$.

**$n=2$:** $x_{1,2}=\pm\frac{1}{\sqrt2}$, đối xứng $\Rightarrow c_1=c_2=\pi/2$.

**$n=3$:** $x=0,\pm\frac{\sqrt3}{2}$. Kiểm tra $c_1=c_2=c_3=\pi/3$ thỏa cả 3 phương trình:
- $k{=}0$: $3(\pi/3)=\pi$ ✓
- $k{=}1$: $(\pi/3)(\frac{\sqrt3}2+0-\frac{\sqrt3}2)=0$ ✓
- $k{=}2$: $(\pi/3)(\frac34+0+\frac34)=\pi/2=\mu_2$ ✓

[!note] Tính chất đặc biệt
Với trọng số Chebyshev, **mọi** trọng số Gauss đều bằng nhau: $c_i=\pi/n$.

### V.4. Laguerre ($w=e^{-x}$ trên $[0,\infty)$, $\mu_k=k!$)

**$n=1$:** nút $x_1=1$ (nghiệm $\pi_1$). $c_1=\mu_0=1$.

**$n=2$:** nút $2\mp\sqrt2$ (nghiệm $\pi_2=x^2-4x+2$). Giải hệ $2\times2$:
$$c_1=\frac{1+1/\sqrt2}{2}\approx0.853553,\qquad c_2=\frac{1-1/\sqrt2}{2}\approx0.146447$$

**$n=3$:** nút = nghiệm $\pi_3(x)=x^3-9x^2+18x-6=0$ (không có dạng đóng đẹp):
$$x_1\approx0.415775,\quad x_2\approx2.294280,\quad x_3\approx6.289945$$
Giải hệ Vandermonde $3\times3$ (ép đúng $\mu_0{=}1,\mu_1{=}1,\mu_2{=}2$):
$$c_1\approx0.711093,\quad c_2\approx0.278518,\quad c_3\approx0.010389$$

### V.5. Hermite ($w=e^{-x^2}$ trên $\mathbb R$, $\mu_0=\sqrt\pi,\mu_1=0,\mu_2=\sqrt\pi/2$)

**$n=1$:** nút $x_1=0$. $c_1=\mu_0=\sqrt\pi$.

**$n=2$:** nút $\pm1/\sqrt2$, đối xứng $\Rightarrow c_1=c_2=\dfrac{\sqrt\pi}{2}$.

**$n=3$:** nút $0,\pm\sqrt{3/2}$ (nghiệm $\pi_3=x^3-\frac32x$). Đối xứng: $c_1=c_3$, giải:
- $k{=}0$: $2c_1+c_2=\sqrt\pi$
- $k{=}2$: $2c_1\cdot\frac32=\sqrt\pi/2\Rightarrow c_1=\dfrac{\sqrt\pi}{6}$
- $\Rightarrow c_2=\sqrt\pi-\dfrac{\sqrt\pi}{3}=\dfrac{2\sqrt\pi}{3}$

$$c_1=c_3=\frac{\sqrt\pi}{6}\approx0.295409,\qquad c_2=\frac{2\sqrt\pi}{3}\approx1.181636$$

[!eg] Ví dụ minh họa — Gauss–Legendre $n=3$ cho $\int_1^2\frac{dx}{x}$
Đổi biến $x=0.5t+1.5$. Với nút/trọng số ở bảng V.2:
$$I\approx\frac59(0.449357)+\frac89(0.333333)+\frac59(0.264929)\approx0.693122$$
So với $I_{\text{đúng}}=\ln2\approx0.693147$: sai số $\approx2.5\times10^{-5}$ — dù $f(x)=1/x$ không phải đa thức, tính trơn của hàm khiến xấp xỉ rất chính xác.

---


# VI. Ví dụ tổng hợp mẫu (đề tự luyện, có lời giải chi tiết)


## Đề bài

**Bài toán Dirichlet và Neumann không thuần nhất:**
$$
\begin{cases}
-u''(x) + (2-x)u'(x) + (1+x^2)u(x) = x^5 - 3x^3 + 8x^2 - 6x, \quad x \in [0,1] \\
u(0) - u'(0) = 3, \\
u'(1) = 2.
\end{cases}
$$

Biết bài toán có nghiệm chính xác:
$$
u(x) = x^3 - x + 2.
$$

Chia đoạn $[0,1]$ thành các điểm nút cách đều nhau:
$$x_0 = 0,\quad x_1 = \tfrac13,\quad x_2 = \tfrac23,\quad x_3 = 1.$$

* **Câu 1 (4 điểm):** Sử dụng phương pháp xấp xỉ đạo hàm (bậc hội tụ bằng 2), tính giá trị xấp xỉ của nghiệm tại từng điểm $x_i$, $i=0,1,2,3$.

* **Câu 2 (3 điểm):** Dùng giá trị xấp xỉ ở Câu 1 và đa thức nội suy Lagrange bậc 3, trình bày chi tiết nghiệm xấp xỉ $u_h(x)$.

* **Câu 3 (3 điểm):** Lần lượt dùng cầu phương Gauss (tự chọn số điểm, có giải thích), cầu phương trapezoidal hợp, cầu phương Simpson hợp, tính sai số $L^2$:
$$
\text{Sai số }L^2=\frac{\left(\displaystyle\int_0^1|u(x)-u_h(x)|^2dx\right)^{1/2}}{\left(\displaystyle\int_0^1|u(x)|^2dx\right)^{1/2}}.
$$

---

## Lời giải chi tiết

### Câu 1 — Sai phân hữu hạn trung tâm bậc 2 *(vận dụng Phần II.4–II.5)*

Đặt $h=\tfrac13$, $p(x)=2-x$, $q(x)=1+x^2$, $f(x)=x^5-3x^3+8x^2-6x$. Giá trị $f$ tại các nút:
$$f_0=0,\qquad f_1=-\frac{296}{243}\approx-1.2181,\qquad f_2=-\frac{292}{243}\approx-1.2016,\qquad f_3=0.$$

Dùng công thức trung tâm bậc 2 (bảng Phần II.5, $n=1,m=2$ và $n=2,m=1$):
$$u''(x_i)\approx\frac{u_{i-1}-2u_i+u_{i+1}}{h^2},\qquad u'(x_i)\approx\frac{u_{i+1}-u_{i-1}}{2h}$$

Thay vào phương trình $-u_i''+p_iu_i'+q_iu_i=f_i$ và rút gọn ($h^2=1/9,\ 2h=2/3$):
$$
\underbrace{\left(-9-1.5p_i\right)}_{\alpha_i}u_{i-1}+\underbrace{(18+q_i)}_{\beta_i}u_i+\underbrace{\left(-9+1.5p_i\right)}_{\gamma_i}u_{i+1}=f_i\qquad(*)
$$

với $p_i=p(x_i),\ q_i=q(x_i)$: $p_0{=}2,q_0{=}1;\ p_1{=}\tfrac53,q_1{=}\tfrac{10}9;\ p_2{=}\tfrac43,q_2{=}\tfrac{13}9;\ p_3{=}1,q_3{=}2$.

**Xử lý biên bằng điểm ảo (giữ bậc hội tụ 2):**

1. **Tại $x_0=0$** — biên Robin $u_0-u_0'=3$. Điểm ảo $u_{-1}$ từ xấp xỉ trung tâm của $u_0'$:
$$u_0-\frac{u_1-u_{-1}}{2h}=3\ \Longrightarrow\ u_{-1}=u_1-\tfrac23u_0+2$$
Thay vào $(*)$ tại $i=0$ ($f_0=0$, $p_0=2\Rightarrow1.5p_0=3$):
$$-12u_{-1}+19u_0-6u_1=0\ \Longrightarrow\ 27u_0-18u_1=24$$

2. **Tại $x_3=1$** — biên Neumann $u_3'=2$. Điểm ảo $u_4$:
$$\frac{u_4-u_2}{2h}=2\ \Longrightarrow\ u_4=u_2+\tfrac43$$
Thay vào $(*)$ tại $i=3$ ($f_3=0$, $p_3=1\Rightarrow1.5p_3=1.5$):
$$-10.5u_2+20u_3-7.5u_4=0\ \Longrightarrow\ -18u_2+20u_3=10$$

**Các nút trong** ($i=1,2$, dùng $(*)$ trực tiếp):
$$
\begin{aligned}
i=1:&\quad -11.5\,u_0+\frac{172}{9}u_1-6.5\,u_2=-\frac{296}{243}\\
i=2:&\quad -11\,u_1+\frac{175}{9}u_2-7\,u_3=-\frac{292}{243}
\end{aligned}
$$

**Hệ 4 phương trình, 4 ẩn:**
$$
\begin{cases}
27u_0-18u_1=24\\
-11.5u_0+\dfrac{172}{9}u_1-6.5u_2=-\dfrac{296}{243}\\
-11u_1+\dfrac{175}{9}u_2-7u_3=-\dfrac{292}{243}\\
-18u_2+20u_3=10
\end{cases}
$$

Giải hệ (làm tròn 4 chữ số thập phân):
$$u_0\approx2.0147,\quad u_1\approx1.6887,\quad u_2\approx1.5881,\quad u_3\approx1.9293$$

*(So với nghiệm đúng $u(0)=2,\ u(\tfrac13)=\tfrac{46}{27}\approx1.7037,\ u(\tfrac23)=\tfrac{44}{27}\approx1.6296,\ u(1)=2$ — có sai số do $u(x)$ là đa thức bậc 3 trong khi sai phân trung tâm chỉ chính xác tuyệt đối tới bậc 2, khác với ví dụ VI.2 của tài liệu chính.)*

[!note] Cách tiếp cận thay thế (Phần II.2–II.3)
Thay vì dùng điểm ảo, có thể áp trực tiếp công thức **sai phân tiến bậc 2** tại $x_0$ và **sai phân lùi bậc 2** tại $x_3$ (không cần thêm ẩn phụ $u_{-1},u_4$):
$$u_0'\approx\frac{-3u_0+4u_1-u_2}{2h},\qquad u_3'\approx\frac{3u_3-4u_2+u_1}{2h}$$
Cách này cho hệ 4 phương trình 4 ẩn tương đương về bậc chính xác ($m=2$), là một lựa chọn hợp lệ khác cho Câu 1.

---

### Câu 2 — Nội suy Lagrange bậc 3 *(vận dụng Phần I.3, đối chiếu Phần I.4)*

Với 4 nút cách đều $0,\tfrac13,\tfrac23,1$, các hàm cơ sở Lagrange (giống mọi bài với lưới này):
$$
\begin{aligned}
L_0(x)&=-4.5(x-\tfrac13)(x-\tfrac23)(x-1)\\
L_1(x)&=13.5\,x(x-\tfrac23)(x-1)\\
L_2(x)&=-13.5\,x(x-\tfrac13)(x-1)\\
L_3(x)&=4.5\,x(x-\tfrac13)(x-\tfrac23)
\end{aligned}
$$

Nghiệm nội suy:
$$u_h(x)=2.0147\,L_0(x)+1.6887\,L_1(x)+1.5881\,L_2(x)+1.9293\,L_3(x)$$

Khai triển và rút gọn:
$$\boxed{u_h(x)\approx0.9744\,x^3+0.0396\,x^2-1.0994\,x+2.0147}$$

[!eg] Đối chiếu bằng phương pháp Newton (Phần I.4) — kiểm chứng tính duy nhất
Bảng tỉ hiệu chia trên cùng 4 nút:

| $x_i$ | $f[x_i]$ | $f[x_i,x_{i+1}]$ | $f[x_i,x_{i+1},x_{i+2}]$ | $f[x_0,\dots,x_3]$ |
|---|---|---|---|---|
| $0$ | $2.0147$ | | | |
| | | $-0.9779$ | | |
| $\tfrac13$ | $1.6887$ | | $1.0140$ | |
| | | $-0.3020$ | | $0.9744$ |
| $\tfrac23$ | $1.5881$ | | $1.0231$ | |
| | | $1.0234$ | | |
| $1$ | $1.9293$ | | | |

Đa thức Newton:
$$u_h(x)=2.0147-0.9779\,x+1.0140\,x\big(x-\tfrac13\big)+0.9744\,x\big(x-\tfrac13\big)\big(x-\tfrac23\big)$$
Khai triển cho **đúng cùng một đa thức** $u_h(x)\approx0.9744x^3+0.0396x^2-1.0994x+2.0147$ như trên — minh họa lại Định lý tồn tại–duy nhất (Phần I.1, I.5): Lagrange và Newton chỉ là hai cách biểu diễn của cùng một đa thức nội suy.

---

### Câu 3 — Sai số $L^2$ bằng ba công thức cầu phương

Mẫu số:
$$I_{\text{den}}=\int_0^1u(x)^2dx=\int_0^1(x^3-x+2)^2dx=\frac{323}{105}\approx3.076190,\qquad \sqrt{I_{\text{den}}}\approx1.75390$$

Đặt $E(x)=\big(u(x)-u_h(x)\big)^2$. Vì $u$ và $u_h$ đều là đa thức bậc $\le3$, ta có $\deg E\le6$.

#### 1) Cầu phương Gauss *(vận dụng Phần V, mở rộng bảng lên $n=4$)*

[!note] Chọn số điểm
$E(x)$ có bậc $\le6$. Cầu phương Gauss $n$ điểm chính xác tuyệt đối tới bậc $2n-1$, cần $2n-1\ge6\Rightarrow n\ge3.5\Rightarrow n=4$. Chọn **Gauss–Legendre 4 điểm.**

Theo Phần IV.2, $\pi_4(x)=x^4-\tfrac67x^2+\tfrac3{35}$. Đặt $y=x^2$, giải $y^2-\tfrac67y+\tfrac3{35}=0$ được $y=\dfrac{15\pm2\sqrt{30}}{35}$, suy ra 4 nút chuẩn trên $[-1,1]$:
$$t_{1,4}=\mp\sqrt{\frac{15+2\sqrt{30}}{35}}\approx\mp0.861136,\qquad t_{2,3}=\mp\sqrt{\frac{15-2\sqrt{30}}{35}}\approx\mp0.339981$$

Giải hệ Vandermonde 4 ẩn (ép đúng $\mu_0{=}2,\mu_1{=}0,\mu_2{=}\tfrac23,\mu_3{=}0$, dùng đối xứng $w_1{=}w_4,\ w_2{=}w_3$) được trọng số dạng đóng:
$$w_{1,4}=\frac{18-\sqrt{30}}{36}\approx0.347855,\qquad w_{2,3}=\frac{18+\sqrt{30}}{36}\approx0.652145$$

Đổi biến $x=\dfrac{t+1}{2}$, $dx=\dfrac12dt$:
$$I_{\text{num}}=\frac12\sum_{k=1}^4w_kE\!\left(\frac{t_k+1}{2}\right)$$

Tính số: $I_{\text{num}}^{\text{Gauss4}}\approx0.0013676$ (do bậc $E\le6\le2\cdot4-1=7$, kết quả này **chính xác tuyệt đối**, không có sai số cầu phương).
$$\text{Sai số }L^2_{\text{Gauss}}=\frac{\sqrt{0.0013676}}{1.75390}\approx0.021085\ \ (\approx2.11\%)$$

#### 2) Cầu phương trapezoidal hợp *(vận dụng Phần III.2)*

Với $h=\tfrac13$, giá trị $E$ tại các nút:
$$E(x_0)\approx0.0002165,\ E(x_1)\approx0.0002240,\ E(x_2)\approx0.0017262,\ E(x_3)\approx0.0050022$$
$$I_{\text{num}}^{\text{trap}}\approx\frac{h}{2}\big[E_0+2E_1+2E_2+E_3\big]\approx0.0015199$$
$$\text{Sai số }L^2_{\text{trap}}=\frac{\sqrt{0.0015199}}{1.75390}\approx0.022228\ \ (\approx2.22\%)$$

#### 3) Cầu phương Simpson hợp *(vận dụng Phần III.4)*

Lưới có $3$ khoảng con (số **lẻ**) $\Rightarrow$ không dùng Simpson $1/3$ chuẩn được, dùng **Simpson $3/8$**:
$$I_{\text{num}}^{\text{Simp}}\approx\frac{3h}{8}\big[E_0+3E_1+3E_2+E_3\big]\approx0.0013837$$
$$\text{Sai số }L^2_{\text{Simp}}=\frac{\sqrt{0.0013837}}{1.75390}\approx0.021209\ \ (\approx2.12\%)$$

#### Bảng tổng kết

| Phương pháp | $I_{\text{num}}$ | Sai số $L^2$ | Ghi chú |
|---|---|---|---|
| Gauss 4 điểm | $0.0013676$ | $2.1085\%$ | Chính xác tuyệt đối (vì $\deg E\le7$) |
| Simpson 3/8 hợp | $0.0013837$ | $2.1209\%$ | Gần đúng Gauss nhất |
| Trapezoidal hợp | $0.0015199$ | $2.2228\%$ | Kém chính xác nhất (bậc hội tụ thấp nhất) |

[!note] Nhận xét
Ba giá trị $L^2$ đều xấp xỉ $2\text{–}2.2\%$, cùng bậc lớn với sai số nghiệm tại nút ở Câu 1 — hợp lý vì $u_h$ chỉ nội suy đúng $4$ giá trị xấp xỉ (đã có sai số $O(h^2)$ từ Câu 1), nên $\|u-u_h\|_{L^2}$ không thể nhỏ hơn sai số đó. Trong ba công thức cầu phương, **Gauss cho kết quả đúng nhất** (khớp bậc đa thức tối ưu), Simpson 3/8 xấp xỉ khá tốt, trapezoidal kém nhất — đúng như lý thuyết bậc hội tụ ở Phần III.


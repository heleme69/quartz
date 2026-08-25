# Chương 3 - Ánh xạ tuyến tính liên tục

## Phần lý thuyết nền tảng

> [!def] Chuẩn toán tử
> Cho $E, F$ là các không gian định chuẩn và $T: E \to F$ tuyến tính liên tục (bị chặn). Chuẩn toán tử của $T$ được định nghĩa
> $$\|T\| = \sup_{\|x\| \le 1} \|Tx\| = \sup_{\|x\|=1} \|Tx\| \quad (E \ne \{0\}).$$

> [!prp] Đặc trưng của chuẩn toán tử
> Với $T \in L(E,F)$, $E \ne \{0\}$, hai điều sau tương đương với $\|T\| = M$:
> 1. $\forall x \in E,\ \|Tx\| \le M\|x\|$, và
> 2. tồn tại dãy $(x_n)$, $\|x_n\|=1$, sao cho $\|Tx_n\| \to M$.
>
> (Đây chính là nội dung Bài 3.8.16, được chứng minh chi tiết bên dưới và dùng lại nhiều lần.)

> [!thm] Bất đẳng thức Hölder / Cauchy–Schwarz cho $\ell^p$ và $L^p$
> Với $1/p + 1/q = 1$ ($p,q \in [1,\infty]$), với $x \in \ell^p$, $y \in \ell^q$:
> $$\sum_n |x_n y_n| \le \|x\|_p \|y\|_q,$$
> và tương tự cho $L^p(\Omega), L^q(\Omega)$: $\int |fg| \le \|f\|_p \|g\|_q$. Trường hợp $p=q=2$ chính là Cauchy–Schwarz.

> [!thm] Định lý Arzelà–Ascoli
> Một tập con $\mathcal{F} \subseteq C(K)$ ($K$ compắc) là compắc tương đối (có bao đóng compắc) khi và chỉ khi $\mathcal{F}$ bị chặn đều và đồng liên tục (equicontinuous).

> [!prp] $L(E,F)$ đầy đủ khi $F$ đầy đủ
> Nếu $F$ là không gian Banach thì $L(E,F)$ (với chuẩn toán tử) cũng là không gian Banach, với $E$ định chuẩn bất kỳ. (Dùng ở các Bài 3.8.23–3.8.26; chứng minh: dãy Cauchy $(T_n)$ trong $L(E,F)$ cho $(T_nx)$ Cauchy trong $F$ với mỗi $x$, hội tụ về $Tx$ do $F$ đầy đủ; kiểm tra $T$ tuyến tính, bị chặn, và $T_n \to T$ theo chuẩn toán tử.)

## Câu 3.8.1

> [!prob] 3.8.1
> Chứng tỏ nếu $\forall x, \|Tx\| \le M\|x\|$ thì $\|T\| \le M$.

> [!prf] Lời giải
> Theo định nghĩa, $\|T\| = \sup_{\|x\|\le 1} \|Tx\|$. Với mọi $x$, $\|x\|\le 1$, giả thiết cho $\|Tx\| \le M\|x\| \le M$. Vậy $M$ là một chặn trên của tập $\{\|Tx\| : \|x\|\le 1\}$, do đó
> $$\|T\| = \sup_{\|x\|\le1}\|Tx\| \le M$$

## Câu 3.8.2

> [!prob] 3.8.2
> Giả sử $E \ne \{0\}$. Với $T \in L(E,F)$ thì $\|T\| = \min\{M \in \mathbb{R} \mid \forall x \in E, \|Tx\| \le M\|x\|\}$.

> [!prf] Lời giải
> Đặt $\mathcal{S} = \{M \in \mathbb{R} : \forall x \in E, \|Tx\| \le M\|x\|\}$.
>
> **$\|T\| \in \mathcal{S}$:** với $x \ne 0$, đặt $y = x/\|x\|$, $\|y\|=1$, khi đó $\|Tx\| = \|x\|\,\|Ty\| \le \|x\| \sup_{\|z\|=1}\|Tz\| = \|x\|\,\|T\|$. Với $x=0$ bất đẳng thức hiển nhiên đúng ($0 \le 0$). Vậy $\|T\| \in \mathcal{S}$.
>
> **$\|T\|$ là cận dưới của $\mathcal{S}$:** với mọi $M \in \mathcal{S}$, theo Bài 3.8.1, $\|T\| \le M$.
>
> Vậy $\|T\|$ vừa thuộc $\mathcal{S}$ vừa là cận dưới của $\mathcal{S}$, nên $\|T\| = \min \mathcal{S}$. 

## Câu 3.8.3

> [!prob] 3.8.3
> Giả sử $T: E \to F$ tuyến tính liên tục. Đặt $\|T\|_1 = \sup\{\|Tx\| \mid x \in B(0,1)\}$ và $\|T\|_2 = \sup\{\|Tx\| \mid x \in B(0,r)\}$. Chứng tỏ $\|T\|_2 = r\|T\|_1$.

> [!prf] Lời giải
> Ánh xạ $x \mapsto x/r$ là song ánh từ $B(0,r)$ (hình cầu mở bán kính $r$) lên $B(0,1)$: $x \in B(0,r) \Leftrightarrow \|x\| < r \Leftrightarrow \|x/r\| < 1$. Đặt $y = x/r \in B(0,1)$, ta có $x = ry$ và
> $$\|Tx\| = \|T(ry)\| = r\|Ty\|.$$
> Khi $x$ chạy khắp $B(0,r)$ thì $y$ chạy khắp $B(0,1)$ (song ánh), nên
> $$\|T\|_2 = \sup_{x \in B(0,r)} \|Tx\| = \sup_{y \in B(0,1)} r\|Ty\| = r \sup_{y\in B(0,1)} \|Ty\| = r\|T\|_1$$

## Câu 3.8.4

> [!prob] 3.8.4
> Chứng tỏ nếu $F$ là không gian định chuẩn con của $E$ và $T$ là ánh xạ tuyến tính liên tục trên $E$ thì thu hẹp $T|_F$ của $T$ xuống $F$ cũng tuyến tính liên tục và $\|T|_F\| \le \|T\|$.

> [!prf] Lời giải
> **Tuyến tính:** hiển nhiên vì $T|_F$ chỉ là $T$ giới hạn miền xác định xuống $F$, không thay đổi giá trị hay cấu trúc tuyến tính.
>
> **Liên tục và đánh giá chuẩn:** vì $T$ liên tục trên $E$, $\|Tx\| \le \|T\|\|x\|$ với mọi $x \in E$, đặc biệt với mọi $x \in F \subseteq E$. Theo Bài 3.8.1 (áp dụng cho $T|_F$ trên $F$ với $M = \|T\|$), $T|_F$ bị chặn (liên tục) và
> $$\|T|_F\| \le \|T\|$$

## Câu 3.8.5

> [!prob] 3.8.5
> Trên $\mathbb{R}$, xét $T: \ell^\infty \to \mathbb{R}$, $Tx = \sum_{n=1}^\infty \dfrac{x_n}{3^n}$. Chứng tỏ $T$ tuyến tính liên tục. Tính $\|T\|$.

> [!prf] Lời giải
> **Định nghĩa tốt:** với $x \in \ell^\infty$, $|x_n/3^n| \le \|x\|_\infty/3^n$, và $\sum 1/3^n$ hội tụ (chuỗi hình học tỉ số $1/3$), nên chuỗi định nghĩa $Tx$ hội tụ tuyệt đối.
>
> **Tuyến tính:** hiển nhiên từ tính tuyến tính của tổng chuỗi hội tụ.
>
> **Liên tục:**
> $$|Tx| \le \sum_{n=1}^\infty \frac{|x_n|}{3^n} \le \|x\|_\infty \sum_{n=1}^\infty \frac{1}{3^n} = \|x\|_\infty \cdot \frac{1/3}{1-1/3} = \frac{\|x\|_\infty}{2}.$$
> Vậy $T$ bị chặn với $\|T\| \le 1/2$.
>
> **Tính $\|T\|$:** lấy $x = (1,1,1,\dots) \in \ell^\infty$, $\|x\|_\infty = 1$, khi đó $Tx = \sum 1/3^n = 1/2$. Đạt cận trên, vậy
> $$\|T\| = \frac12.$$

# Câu 3.8.6

> [!prob] 3.8.6
> Kiểm ánh xạ $T: \ell^2 \to \mathbb{R}$, $x = (x_1,x_2,\dots) \mapsto Tx = -2x_1$ là tuyến tính liên tục và tính chuẩn.

> [!prf] Lời giải
> **Tuyến tính:** hiển nhiên vì $T$ là $-2$ nhân với phép chiếu tọa độ thứ nhất.
>
> **Liên tục:** $|Tx| = 2|x_1| \le 2\|x\|_2$ (vì $|x_1| \le \|x\|_2$), nên $\|T\| \le 2$.
>
> **Tính $\|T\|$:** lấy $x = e_1 = (1,0,0,\dots)$, $\|e_1\|_2 = 1$, $Te_1 = -2$, $|Te_1| = 2$. Đạt cận trên, vậy
> $$\|T\| = 2.$$



## Câu 3.8.7

> [!prob] 3.8.7
> Trên $\mathbb{R}$, xét $T: \ell^2 \to \mathbb{R}$, $Tx = \sum_{n=1}^\infty \dfrac{x_n}{n}$. Đây có là ánh xạ tuyến tính liên tục không? Nếu có, tính $\|T\|$.

> [!prf] Lời giải
> **Định nghĩa tốt & liên tục:** dãy $(1/n)_n \in \ell^2$ vì $\sum 1/n^2 = \pi^2/6 < \infty$. Theo Cauchy–Schwarz trong $\ell^2$:
> $$|Tx| = |\langle x, (1/n)_n\rangle| \le \|x\|_2 \left(\sum_{n=1}^\infty \frac{1}{n^2}\right)^{1/2} = \|x\|_2 \cdot \frac{\pi}{\sqrt6}.$$
> Vậy chuỗi định nghĩa $Tx$ hội tụ tuyệt đối với mọi $x \in \ell^2$, $T$ tuyến tính (hiển nhiên), và bị chặn: $\|T\| \le \pi/\sqrt6$. Vậy **$T$ là ánh xạ tuyến tính liên tục**.
>
> **Tính $\|T\|$:** đẳng thức Cauchy–Schwarz xảy ra khi $x$ tỉ lệ với $(1/n)_n$; lấy $x = (1/n)_n \in \ell^2$, $\|x\|_2 = \pi/\sqrt6$, và
> $$Tx = \sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}.$$
> Tỉ số $Tx/\|x\|_2 = (\pi^2/6)/(\pi/\sqrt6) = \pi/\sqrt6$, đạt đúng cận trên. Vậy
> $$\|T\| = \frac{\pi}{\sqrt6}.$$



## Câu 3.8.8

> [!prob] 3.8.8
> Tiếp tục Bài 2.8.17, 2.8.18. Cho $1 \le p < q \le \infty$. Xét $i: \ell^p \to \ell^q$, $x \mapsto x$.
> (a) Kiểm $i$ tuyến tính. (b) Chứng tỏ $i$ tuyến tính liên tục. (c) Tính chuẩn của $i$.

> [!prf] Lời giải (trường hợp $q < \infty$)
> **(a) Tuyến tính:** $i$ là ánh xạ đồng nhất giữa hai tập nền giống nhau (dãy số), nên tuyến tính hiển nhiên: $i(\alpha x + \beta y) = \alpha x + \beta y = \alpha i(x) + \beta i(y)$.
>
> **(b) Định nghĩa tốt & liên tục.** Trước hết cần $x \in \ell^p \Rightarrow x \in \ell^q$. Nếu $x = 0$ hiển nhiên. Nếu $x \ne 0$, đặt $y = x/\|x\|_p$, khi đó $\|y\|_p = 1$ nên $\sum_n |y_n|^p = 1$, suy ra $|y_n| \le 1$ với mọi $n$ (mỗi số hạng không âm của tổng bằng 1 phải $\le 1$). Vì $q \ge p$ và $|y_n|\le 1$:
> $$|y_n|^q \le |y_n|^p.$$
> Lấy tổng: $\sum_n |y_n|^q \le \sum_n |y_n|^p = 1$, nên $\|y\|_q \le 1$. Vậy $y \in \ell^q$ với $\|y\|_q \le \|y\|_p = 1$. Suy ra $x = \|x\|_p y \in \ell^q$ và
> $$\|x\|_q = \|x\|_p \|y\|_q \le \|x\|_p.$$
> Vậy $i$ được định nghĩa tốt và $\|i(x)\|_q \le \|x\|_p$ với mọi $x$, nên theo Bài 3.8.1, $i$ liên tục với $\|i\| \le 1$.
>
> **(c) Tính chuẩn.** Lấy $x = e_1 = (1,0,0,\dots)$: $\|e_1\|_p = \|e_1\|_q = 1$, và tỉ số bằng $1$, đạt cận trên. Vậy
> $$\|i\| = 1.$$
> (Trường hợp $q = \infty$: lập luận tương tự với $\|x\|_\infty = \sup_n |x_n| \le \left(\sum |x_n|^p\right)^{1/p} = \|x\|_p$, cũng cho $\|i\|=1$.)



## Câu 3.8.9

> [!prob] 3.8.9
> Kiểm ánh xạ $T: C([0,1],\mathbb{R}) \to \mathbb{R}$, $x \mapsto Tx = -3x(1/2)$ là tuyến tính liên tục và tính chuẩn.

> [!prf] Lời giải
> **Tuyến tính:** $T$ là $-3$ nhân phiếm hàm định giá tại $1/2$, tuyến tính hiển nhiên.
>
> **Liên tục:** $|Tx| = 3|x(1/2)| \le 3\|x\|_\infty$, nên $\|T\| \le 3$.
>
> **Tính $\|T\|$:** lấy $x \equiv 1$, $\|x\|_\infty = 1$, $Tx = -3$, $|Tx| = 3$. Đạt cận trên, vậy
> $$\|T\| = 3.$$



## Câu 3.8.10

> [!prob] 3.8.10
> Với $x \in C([0,1],\mathbb{R})$, đặt $T(x)(t) = x(1-t)$, $0 \le t \le 1$. Chứng tỏ $T$ tuyến tính liên tục từ $(C([0,1],\mathbb{R}), \|\cdot\|_\infty)$ vào chính nó. Tính $\|T\|$.

> [!prf] Lời giải
> **Định nghĩa tốt:** ánh xạ $t \mapsto 1-t$ liên tục từ $[0,1]$ vào $[0,1]$, hợp với $x$ liên tục nên $Tx = x \circ (1-\cdot)$ liên tục, $Tx \in C([0,1])$.
>
> **Tuyến tính:** hiển nhiên từ định nghĩa qua phép hợp với ánh xạ tuyến tính (theo biến $x$).
>
> **Liên tục và tính chuẩn — thực chất $T$ là một phép đẳng cự.** Ánh xạ $\varphi: [0,1]\to[0,1]$, $\varphi(t) = 1-t$, là song ánh (với nghịch đảo là chính nó). Do đó
> $$\|Tx\|_\infty = \sup_{t\in[0,1]} |x(1-t)| = \sup_{s \in [0,1]} |x(s)| = \|x\|_\infty,$$
> (đổi biến $s = 1-t$, khi $t$ chạy khắp $[0,1]$ thì $s$ cũng chạy khắp $[0,1]$). Vậy $\|Tx\| = \|x\|$ với **mọi** $x$, nên $T$ liên tục (bị chặn với hằng số $1$) và
> $$\|T\| = 1$$
> (đạt được với bất kỳ $x \ne 0$ nào).



## Câu 3.8.11

> [!prob] 3.8.11
> Với $x \in C([0,1],\mathbb{R})$, đặt $T(x)(t) = x(t^2)$, $0 \le t \le 1$. Chứng tỏ $T$ tuyến tính liên tục từ $C([0,1],\mathbb{R})$ (chuẩn sup) vào chính nó. Tính $\|T\|$.

> [!prf] Lời giải
> **Định nghĩa tốt:** $t \mapsto t^2$ liên tục $[0,1]\to[0,1]$, hợp với $x$ liên tục cho $Tx \in C([0,1])$.
>
> **Tuyến tính:** hiển nhiên.
>
> **Liên tục và tính chuẩn.** Ánh xạ $\varphi(t)=t^2$ là **toàn ánh** từ $[0,1]$ lên $[0,1]$ (không cần song ánh, chỉ cần toàn ánh để đổi biến sup). Với mỗi $s \in [0,1]$, tồn tại $t = \sqrt s \in [0,1]$ sao cho $t^2 = s$. Do đó
> $$\|Tx\|_\infty = \sup_{t\in[0,1]} |x(t^2)| = \sup_{s\in[0,1]} |x(s)| = \|x\|_\infty.$$
> Vậy $T$ là một phép đẳng cự, $T$ liên tục, và
> $$\|T\| = 1.$$



## Câu 3.8.12

> [!prob] 3.8.12
> Kiểm ánh xạ $T: C([0,1],\mathbb{R}) \to C([0,1],\mathbb{R})$, $x \mapsto Tx$, với $(Tx)(t) = \displaystyle\int_0^1 sx(s)\,ds$ (không phụ thuộc $t$). Chứng tỏ tuyến tính liên tục, tính chuẩn.

> [!prf] Lời giải
> **Định nghĩa tốt:** với $x$ cố định, $Tx$ là hàm hằng (giá trị $\int_0^1 sx(s)\,ds$ tại mọi $t$), là hàm liên tục, nên $Tx \in C([0,1])$.
>
> **Tuyến tính:** hiển nhiên từ tuyến tính của tích phân.
>
> **Liên tục:** với mọi $t$,
> $$|(Tx)(t)| = \left|\int_0^1 sx(s)\,ds\right| \le \|x\|_\infty \int_0^1 s\,ds = \frac{\|x\|_\infty}{2},$$
> nên $\|Tx\|_\infty \le \dfrac{\|x\|_\infty}{2}$, $T$ bị chặn với $\|T\| \le 1/2$.
>
> **Tính $\|T\|$:** lấy $x \equiv 1$, $\|x\|_\infty = 1$, $(Tx)(t) = \int_0^1 s\,ds = 1/2$ với mọi $t$, nên $\|Tx\|_\infty = 1/2$. Đạt cận trên, vậy
> $$\|T\| = \frac12.$$



## Câu 3.8.13

> [!prob] 3.8.13
> Với $x \in C([0,1],\mathbb{R})$, đặt $Tx$ là hàm cho bởi $T(x)(t) = \displaystyle\int_0^1 x(s)\sin(st)\,ds$, $0 \le t \le 1$.
> (a) Chứng tỏ $T$ tuyến tính liên tục $C([0,1])\to C([0,1])$ (chuẩn sup).
> (b) Ước lượng $\|T\|$.
> (c) Tính chính xác $\|T\|$.

> [!prf] Lời giải
> **(a) Định nghĩa tốt & tuyến tính liên tục.**
>
> *Liên tục theo $t$:* với $t, t' \in [0,1]$,
> $$|(Tx)(t) - (Tx)(t')| \le \int_0^1 |x(s)|\,|\sin(st)-\sin(st')|\,ds \le \|x\|_\infty \int_0^1 |\sin(st)-\sin(st')|\,ds.$$
> Vì $\sin$ liên tục đều trên $[0,1]$, khi $t' \to t$ thì $\sin(st') \to \sin(st)$ đều theo $s \in [0,1]$ (do $|st-st'|\le|t-t'|\to0$ đều theo $s\in[0,1]$), nên vế phải $\to 0$. Vậy $Tx$ liên tục, $Tx \in C([0,1])$.
>
> *Tuyến tính:* hiển nhiên từ tuyến tính của tích phân theo $x$.
>
> **(b) Ước lượng $\|T\|$.** Với mọi $t \in [0,1]$:
> $$|(Tx)(t)| \le \int_0^1 |x(s)||\sin(st)|\,ds \le \|x\|_\infty \int_0^1 |\sin(st)|\,ds \le \|x\|_\infty \int_0^1 1\,ds = \|x\|_\infty$$
> (vì $|\sin(st)|\le 1$). Vậy $\|Tx\|_\infty \le \|x\|_\infty$, tức $\|T\| \le 1$.
>
> **(c) Tính chính xác $\|T\|$.** Ước lượng ở (b) **không chặt**: với $s,t\in[0,1]$, $st \in [0,1] \subset [0,\pi]$, nên $\sin(st) \ge 0$ luôn luôn. Do đó, với $t$ cố định, hàm $s \mapsto \sin(st)$ không đổi dấu trên $[0,1]$, nên
> $$\sup_{\|x\|_\infty\le1} |(Tx)(t)| = \sup_{\|x\|_\infty\le1}\left|\int_0^1 x(s)\sin(st)\,ds\right| = \int_0^1 \sin(st)\,ds,$$
> đạt được (chính xác, không chỉ xấp xỉ) tại $x \equiv 1$. Vì sup theo $x$ và sup theo $t$ có thể hoán đổi thứ tự tự do:
> $$\|T\| = \sup_{\|x\|\le1}\|Tx\|_\infty = \sup_{t\in[0,1]}\sup_{\|x\|\le1}|(Tx)(t)| = \sup_{t\in[0,1]} \int_0^1 \sin(st)\,ds.$$
> Tính tích phân: với $t \ne 0$,
> $$\int_0^1 \sin(st)\,ds = \left[-\frac{\cos(st)}{t}\right]_0^1 = \frac{1-\cos t}{t} =: f(t),$$
> và $f(0) := \lim_{t\to0} f(t) = 0$.
>
> Xét đạo hàm: $f'(t) = \dfrac{t\sin t - (1-\cos t)}{t^2}$. Đặt $g(t) = t\sin t - 1 + \cos t$; $g(0)=0$ và $g'(t) = \sin t + t\cos t - \sin t = t\cos t \ge 0$ trên $[0,1]$ (vì $\cos t > 0$ ở đó). Vậy $g$ tăng trên $[0,1]$, $g(t) \ge g(0) = 0$, nên $f'(t) \ge 0$: $f$ **tăng** trên $[0,1]$. Do đó
> $$\|T\| = \sup_{t\in[0,1]} f(t) = f(1) = 1 - \cos 1.$$



## Câu 3.8.14 & 3.8.15

> [!prob] 3.8.14–3.8.15
> Xét $E = C([0,1],\mathbb{R})$. Đặt $T: E \to E$, $f \mapsto Tf$, với $Tf(t) = \int_0^t f(s)\,ds$ (như vậy $T$ mang mỗi hàm thành nguyên hàm của nó).
> (a) $T$ được định nghĩa tốt. (b) $T$ tuyến tính. (c) $T$ tuyến tính liên tục. (d) Ước lượng $\|T\|$. (e) Tính chính xác $\|T\|$. (f) $T$ là song ánh lên tập giá trị của nó nhưng ánh xạ ngược không liên tục. (g)* $T$ là toán tử compắc.
>
> *(Tiếp theo, Bài 3.8.15 giới thiệu $C^1([0,1])$ với chuẩn $\|f\| = \|f\|_\infty + \|f'\|_\infty$ và ánh xạ đạo hàm $D: C^1([0,1]) \to C([0,1])$, $f \mapsto f'$; yêu cầu chứng tỏ đây là ánh xạ tuyến tính liên tục.)*

> [!prf] Lời giải
> **(a) Định nghĩa tốt.** Với $f$ liên tục trên $[0,1]$, $Tf(t) = \int_0^t f(s)\,ds$ khả vi (theo định lý cơ bản của giải tích) nên liên tục; vậy $Tf \in C([0,1])$.
>
> **(b) Tuyến tính.** Hiển nhiên từ tính tuyến tính của tích phân.
>
> **(c) Liên tục.** Với $t \in [0,1]$:
> $$|Tf(t)| = \left|\int_0^t f(s)\,ds\right| \le \int_0^t |f(s)|\,ds \le t\|f\|_\infty \le \|f\|_\infty,$$
> vậy $\|Tf\|_\infty \le \|f\|_\infty$, $T$ bị chặn, $\|T\|\le1$.
>
> **(d) Ước lượng.** Từ (c), $\|T\| \le 1$.
>
> **(e) Tính chính xác.** Lấy $f\equiv1$: $Tf(t)=t$, $\|Tf\|_\infty = 1 = \|f\|_\infty$. Đạt cận trên, vậy
> $$\|T\| = 1.$$
>
> **(f) $T$ là song ánh lên ảnh, nghịch đảo không liên tục.**
>
> *Đơn ánh:* nếu $Tf = Tg$ thì $\int_0^t (f-g) = 0$ với mọi $t \in [0,1]$; lấy đạo hàm theo $t$ (định lý cơ bản của giải tích), $f(t)-g(t)=0$ với mọi $t$, tức $f=g$. Vậy $T$ đơn ánh, do đó là song ánh từ $E$ lên $\operatorname{Ran}(T)$.
>
> *Nghịch đảo không liên tục:* $\operatorname{Ran}(T) = \{h \in C^1([0,1]) : h(0)=0\}$, và $T^{-1}(h) = h'$ (phép lấy đạo hàm) — vì $(Tf)' = f$ với mọi $f$. Xét dãy $h_n(t) = \dfrac{\sin(n^2t)}{n} \in \operatorname{Ran}(T)$ ($h_n(0)=0$, $h_n \in C^1$). Ta có
> $$\|h_n\|_\infty = \frac1n \to 0, \qquad \text{nhưng} \qquad h_n'(t) = n\cos(n^2t), \quad \|h_n'\|_\infty = n \to \infty.$$
> Vậy $\|T^{-1}h_n\|_\infty = \|h_n'\|_\infty = n \to \infty$ trong khi $\|h_n\|_\infty \to 0$: $T^{-1}$ **không bị chặn**, do đó không liên tục.
>
> **(g)* $T$ là toán tử compắc.** Cần chứng tỏ $T$ mang tập bị chặn vào tập compắc tương đối. Xét $B = \{f \in E : \|f\|_\infty \le M\}$. Ta kiểm tra $T(B)$ thỏa Arzelà–Ascoli:
>
> - *Bị chặn đều:* với $f \in B$, $\|Tf\|_\infty \le M$ (từ (c)).
> - *Đồng liên tục:* với $f\in B$, $t,t'\in[0,1]$: $|Tf(t)-Tf(t')| = \left|\int_{t'}^t f(s)\,ds\right| \le M|t-t'|$ — đây là điều kiện Lipschitz với hằng số $M$ **đều** cho mọi $f \in B$, nên $T(B)$ đồng liên tục.
>
> Theo Arzelà–Ascoli, $T(B)$ compắc tương đối trong $C([0,1])$. Vậy $T$ là toán tử compắc. 



## Câu 3.8.16

> [!prob] 3.8.16
> Tổng quát hóa cách tìm chuẩn, chứng tỏ:
> $$\|T\| = M \iff \begin{cases} \forall x, \|Tx\| \le M\|x\| \\ \forall n \in \mathbb{Z}^+, \exists x_n, \|x_n\|=1, \|Tx_n\| \xrightarrow{n\to\infty} M.\end{cases}$$

> [!prf] Lời giải
> **($\Rightarrow$)** Giả sử $\|T\|=M$. Điều kiện thứ nhất chính là Bài 3.8.2 (đã có $\|Tx\|\le\|T\|\|x\|$ với mọi $x$). Về điều kiện thứ hai: theo định nghĩa $\sup$, $M = \sup_{\|x\|=1}\|Tx\|$, nên với mỗi $n$ tồn tại $x_n$, $\|x_n\|=1$, sao cho $\|Tx_n\| > M - 1/n$ (tính chất của sup). Kết hợp $\|Tx_n\| \le M$ (từ điều kiện thứ nhất), ta có $M - 1/n < \|Tx_n\| \le M$, nên $\|Tx_n\| \to M$.
>
> **($\Leftarrow$)** Giả sử cả hai điều kiện đúng. Từ điều kiện thứ nhất và Bài 3.8.1, $\|T\| \le M$. Từ điều kiện thứ hai, với mỗi $n$, vì $\|x_n\|=1$, $\|Tx_n\| \le \|T\|$ (định nghĩa của $\|T\|$ như sup). Cho $n\to\infty$: $M = \lim \|Tx_n\| \le \|T\|$. Kết hợp hai chiều, $\|T\| = M$. 



## Câu 3.8.17

> [!prob] 3.8.17
> Trên $\mathbb{R}$, xét $T: \ell^2 \to \ell^2$, $x=(x_n)_{n\in\mathbb{Z}^+} \mapsto Tx = \left(\dfrac{n}{3n+1}x_n\right)_{n\in\mathbb{Z}^+}$.
> (a) $T$ định nghĩa tốt, tức $Tx \in \ell^2$. (b) $T$ tuyến tính liên tục. (c) Với $e_k$ là vectơ có thành phần thứ $k$ bằng $1$, còn lại bằng $0$, tính $\lim_{k\to\infty} \|Te_k\|_2$. (d) Tính $\|T\|$.

> [!prf] Lời giải
> **(a) Định nghĩa tốt.** Với mọi $n$, $0 < \dfrac{n}{3n+1} < \dfrac13$ (vì $3n < 3n+1$). Do đó
> $$\|Tx\|_2^2 = \sum_{n=1}^\infty \left(\frac{n}{3n+1}\right)^2 x_n^2 \le \frac19 \sum_{n=1}^\infty x_n^2 = \frac{\|x\|_2^2}{9} < \infty,$$
> vậy $Tx \in \ell^2$.
>
> **(b) Tuyến tính liên tục.** Tuyến tính hiển nhiên (mỗi tọa độ nhân với hằng số). Từ bất đẳng thức ở (a), $\|Tx\|_2 \le \dfrac13\|x\|_2$, nên $T$ bị chặn với $\|T\| \le 1/3$.
>
> **(c) Tính giới hạn.** $Te_k = \dfrac{k}{3k+1}e_k$, nên $\|Te_k\|_2 = \dfrac{k}{3k+1}$. Khi $k\to\infty$:
> $$\lim_{k\to\infty}\|Te_k\|_2 = \lim_{k\to\infty}\frac{k}{3k+1} = \frac13.$$
>
> **(d) Tính $\|T\|$.** Ta có $\|e_k\|_2=1$ với mọi $k$, và $\|Te_k\|_2 = \dfrac{k}{3k+1} \to \dfrac13$. Theo Bài 3.8.16 (áp dụng chiều $\Leftarrow$, kết hợp cận $\|T\|\le1/3$ ở (b) là điều kiện thứ nhất), suy ra
> $$\|T\| = \frac13.$$



## Câu 3.8.18

> [!prob] 3.8.18
> Xét $E = \{f \in C([0,1],\mathbb{R}) \mid f(0)=0\}$ với chuẩn sup. Với $f \in E$ đặt $Tf = \int_0^1 f$.
> (a) $T$ là phiếm hàm tuyến tính liên tục trên $E$.
> (b) Đặt $f_n(x) = \begin{cases} nx, & 0\le x\le 1/n \\ 1, & 1/n \le x \le 1\end{cases}$. Vẽ đồ thị $f_n$; chứng tỏ $f_n \in E$; tính $\|f_n\|$ và $Tf_n$.
> (c) Đặt $g_n(x) = \sqrt[n]{x}$. Vẽ đồ thị; chứng tỏ $g_n \in E$; tính $\|g_n\|$ và $Tg_n$.
> (d) Tính $\|T\|$.

> [!prf] Lời giải
> **(a) Tuyến tính liên tục.** Tuyến tính hiển nhiên. Bị chặn: $|Tf| \le \int_0^1|f| \le \|f\|_\infty$, nên $\|T\| \le 1$.
>
> **(b) Về $f_n$.** Đồ thị: đoạn thẳng nối $(0,0)$ đến $(1/n,1)$, sau đó hằng số $1$ trên $[1/n,1]$ — hình dạng "dốc lên rồi phẳng".
>
> $f_n$ liên tục (hai mảnh khớp tại $x=1/n$: $n\cdot(1/n)=1$) và $f_n(0)=0$, nên $f_n \in E$.
>
> $\|f_n\|_\infty = 1$ (giá trị lớn nhất, đạt trên $[1/n,1]$).
>
> $$Tf_n = \int_0^{1/n} nx\,dx + \int_{1/n}^1 1\,dx = \frac{n}{2}\cdot\frac{1}{n^2} + \left(1-\frac1n\right) = \frac{1}{2n} + 1 - \frac1n = 1 - \frac{1}{2n}.$$
>
> **(c) Về $g_n$.** Đồ thị: đường cong lõm tăng từ $(0,0)$ đến $(1,1)$, càng dựng đứng gần $x=0$ khi $n$ lớn (đồ thị căn bậc $n$).
>
> $g_n$ liên tục trên $[0,1]$ và $g_n(0) = 0^{1/n} = 0$, nên $g_n \in E$.
>
> $\|g_n\|_\infty = g_n(1) = 1$ (hàm tăng trên $[0,1]$).
>
> $$Tg_n = \int_0^1 x^{1/n}\,dx = \frac{1}{1/n+1} = \frac{n}{n+1}.$$
>
> **(d) Tính $\|T\|$.** Từ (b), $\|f_n\|_\infty=1$ và $Tf_n = 1-\dfrac{1}{2n}\to1$. Kết hợp (a) và Bài 3.8.16:
> $$\|T\| = 1.$$
> (Kiểm tra chéo: (c) cũng cho $Tg_n = n/(n+1) \to 1$ với $\|g_n\|_\infty=1$, cùng kết luận.)



## Câu 3.8.19

> [!prob] 3.8.19
> Xét $E = C([0,1],\mathbb{R})$ với chuẩn sup. Với $f \in E$ đặt $Tf = \int_0^{1/2} f - \int_{1/2}^1 f$.
> (a) $T$ là phiếm hàm tuyến tính liên tục trên $E$.
> (b) Đặt $f_n(x) = \begin{cases} 1, & 0\le x\le \frac12-\frac1n \\ -n(x-\frac12+\frac1n)+1, & \frac12-\frac1n < x < \frac12+\frac1n \\ -1, & \frac12+\frac1n \le x \le 1.\end{cases}$ Vẽ đồ thị; chứng tỏ $f_n \in E$; tính $\|f_n\|$ và $Tf_n$.
> (c) Tính $\|T\|$.

> [!prf] Lời giải
> **(a) Tuyến tính liên tục.** Tuyến tính hiển nhiên. Bị chặn:
> $$|Tf| \le \int_0^{1/2}|f| + \int_{1/2}^1|f| \le \frac12\|f\|_\infty + \frac12\|f\|_\infty = \|f\|_\infty,$$
> nên $\|T\| \le 1$.
>
> **(b) Về $f_n$.** Đồ thị: hằng số $1$ trên $[0,\tfrac12-\tfrac1n]$, đoạn thẳng dốc xuống nối $(\tfrac12-\tfrac1n,1)$ với $(\tfrac12+\tfrac1n,-1)$ (đi qua điểm $(\tfrac12,0)$), rồi hằng số $-1$ trên $[\tfrac12+\tfrac1n,1]$.
>
> $f_n$ liên tục (các mảnh khớp tại hai điểm nối, kiểm tra trực tiếp bằng công thức mảnh giữa), nên $f_n \in E$.
>
> $\|f_n\|_\infty = 1$ (giá trị chạy liên tục trong $[-1,1]$).
>
> Tính $Tf_n$: dùng tính đối xứng lẻ quanh $x=\tfrac12$ (tức $f_n(\tfrac12+t) = -f_n(\tfrac12-t)$, kiểm tra trực tiếp từ định nghĩa). Trước hết,
> $$\int_0^{1/2} f_n = \int_0^{\frac12-\frac1n} 1\,dx + \int_{\frac12-\frac1n}^{1/2} f_n\,dx = \left(\frac12-\frac1n\right) + \frac{1}{2}\cdot\left(1+0\right)\cdot\frac1n,$$
> (mảnh giữa từ $\tfrac12-\tfrac1n$ đến $\tfrac12$ là đoạn thẳng nối giá trị $1$ đến $f_n(\tfrac12)=0$, tích phân bằng diện tích hình thang $\frac{1+0}{2}\cdot\frac1n = \frac{1}{2n}$)
> $$= \frac12 - \frac1n + \frac{1}{2n} = \frac12 - \frac{1}{2n}.$$
> Theo tính đối xứng lẻ, $\displaystyle\int_{1/2}^1 f_n = -\int_0^{1/2}f_n = -\left(\frac12-\frac{1}{2n}\right)$. Vậy
> $$Tf_n = \int_0^{1/2}f_n - \int_{1/2}^1 f_n = \left(\frac12-\frac{1}{2n}\right) - \left(-\left(\frac12-\frac{1}{2n}\right)\right) = 2\left(\frac12-\frac{1}{2n}\right) = 1 - \frac1n.$$
>
> **(c) Tính $\|T\|$.** $\|f_n\|_\infty = 1$, $Tf_n = 1-\dfrac1n \to 1$. Kết hợp (a) và Bài 3.8.16:
> $$\|T\| = 1.$$



## Câu 3.8.20

> [!prob] 3.8.20
> Xét $E = C([-1,1],\mathbb{R})$ với chuẩn sup. Với $f \in E$ đặt $Tf = -f(0) + \int_{-1}^1 f(t)\,dt$.
> (a) $T$ là phiếm hàm tuyến tính liên tục trên $E$.
> (b) Đặt $f_n$ là hàm tuyến tính từng khúc, liên tục, bằng $1$ trên $[-1,-\tfrac1n]$ và $[\tfrac1n,1]$, và bằng $-1$ tại $0$. Vẽ đồ thị; tính $\|f_n\|$ và $Tf_n$.
> (c) Tính $\|T\|$.

> [!prf] Lời giải
> **(a) Tuyến tính liên tục.** Tuyến tính hiển nhiên (tổng của phiếm hàm định giá và phiếm hàm tích phân, cả hai tuyến tính). Bị chặn:
> $$|Tf| \le |f(0)| + \int_{-1}^1|f| \le \|f\|_\infty + 2\|f\|_\infty = 3\|f\|_\infty,$$
> nên $\|T\| \le 3$.
>
> **(b) Về $f_n$.** Đồ thị: hằng số $1$ trên $[-1,-\tfrac1n]$, đoạn thẳng dốc xuống nối $(-\tfrac1n,1)$ với $(0,-1)$, đoạn thẳng dốc lên nối $(0,-1)$ với $(\tfrac1n,1)$, rồi hằng số $1$ trên $[\tfrac1n,1]$ — dạng chữ V lộn ngược ở giữa, đối xứng qua $x=0$.
>
> $\|f_n\|_\infty = 1$ (giá trị nằm trong $[-1,1]$).
>
> Trên $[0,\tfrac1n]$: $f_n$ tuyến tính từ $-1$ (tại $0$) đến $1$ (tại $\tfrac1n$): $f_n(x) = -1+2nx$. Tích phân trên đoạn này: diện tích hình thang $\dfrac{-1+1}{2}\cdot\dfrac1n = 0$.
> $$\int_0^1 f_n = \int_0^{1/n} f_n + \int_{1/n}^1 1\,dx = 0 + \left(1-\frac1n\right) = 1-\frac1n.$$
> Do $f_n$ chẵn ($f_n(-x)=f_n(x)$), $\displaystyle\int_{-1}^1 f_n = 2\int_0^1 f_n = 2-\frac2n$.
>
> Vậy
> $$Tf_n = -f_n(0) + \int_{-1}^1 f_n = -(-1) + \left(2-\frac2n\right) = 3 - \frac2n.$$
>
> **(c) Tính $\|T\|$.** $\|f_n\|_\infty=1$, $Tf_n = 3-\dfrac2n \to 3$. Kết hợp (a) và Bài 3.8.16:
> $$\|T\| = 3.$$



## Câu 3.8.21

> [!prob] 3.8.21
> Trên trường số thực, cho $g \in L^2(\Omega)$. Xét ánh xạ $T: L^2(\Omega) \to L^1(\Omega)$, $f \mapsto fg$. Chứng tỏ $T$ là ánh xạ tuyến tính liên tục và $\|T\| = \|g\|_2$.

> [!prf] Lời giải
> **Định nghĩa tốt & liên tục.** Nếu $g=0$ h.k.n. thì $T \equiv 0$, kết quả tầm thường ($\|T\|=0=\|g\|_2$). Giả sử $g \ne 0$. Theo Cauchy–Schwarz (trường hợp riêng của Hölder với $p=q=2$):
> $$\|fg\|_1 = \int_\Omega |fg| \le \|f\|_2\|g\|_2 < \infty,$$
> nên $fg \in L^1(\Omega)$, $T$ định nghĩa tốt. Tuyến tính hiển nhiên. Bất đẳng thức trên cho $\|Tf\|_1 \le \|g\|_2\|f\|_2$ với mọi $f$, nên $T$ bị chặn với $\|T\| \le \|g\|_2$.
>
> **Đạt cận trên.** Lấy $f = \dfrac{g}{\|g\|_2} \in L^2(\Omega)$, $\|f\|_2 = 1$. Khi đó $fg = \dfrac{g^2}{\|g\|_2} \ge 0$, và
> $$\|Tf\|_1 = \int_\Omega |fg| = \int_\Omega \frac{g^2}{\|g\|_2}\,d\mu = \frac{\|g\|_2^2}{\|g\|_2} = \|g\|_2.$$
> Vậy tỉ số $\|Tf\|_1/\|f\|_2 = \|g\|_2$ đạt được, kết hợp cận trên:
> $$\|T\| = \|g\|_2$$



## Câu 3.8.22

> [!prob] 3.8.22
> Cho $E$ là không gian định chuẩn. Cho $S, T$ là ánh xạ tuyến tính liên tục từ $E$ vào $E$.
> (a) $S\circ T$ là ánh xạ tuyến tính liên tục.
> (b) Chứng tỏ $\|S\circ T\| \le \|S\|\,\|T\|$.
> (c) Viết $S^0 = \operatorname{Id}_E$, và với $n \in \mathbb{Z}^+$ đặt $S^n = S^{n-1}\circ S$. Chứng tỏ $\|S^n\| \le \|S\|^n$.

> [!prf] Lời giải
> **(a) Tuyến tính liên tục.** Hợp của hai ánh xạ tuyến tính là tuyến tính (kiểm tra trực tiếp: $(S\circ T)(\alpha x+\beta y) = S(\alpha Tx+\beta Ty) = \alpha S(Tx)+\beta S(Ty)$). Về liên tục, xem đánh giá ở (b).
>
> **(b) Đánh giá chuẩn.** Với mọi $x \in E$:
> $$\|(S\circ T)x\| = \|S(Tx)\| \le \|S\|\,\|Tx\| \le \|S\|\,\|T\|\,\|x\|.$$
> Theo Bài 3.8.1 (áp dụng cho $S\circ T$ với $M = \|S\|\|T\|$), $S\circ T$ bị chặn (do đó liên tục, hoàn tất (a)) và
> $$\|S\circ T\| \le \|S\|\,\|T\|.$$
>
> **(c) Quy nạp.** Với $n=0$: $\|S^0\| = \|\operatorname{Id}_E\| = 1 = \|S\|^0$ (quy ước), đúng.
>
> Giả sử $\|S^{n-1}\| \le \|S\|^{n-1}$ (giả thiết quy nạp). Áp dụng (b) cho cặp $(S^{n-1}, S)$:
> $$\|S^n\| = \|S^{n-1}\circ S\| \le \|S^{n-1}\|\,\|S\| \le \|S\|^{n-1}\cdot\|S\| = \|S\|^n.$$
> Theo nguyên lý quy nạp, $\|S^n\| \le \|S\|^n$ đúng với mọi $n \in \mathbb{Z}^+$. 



## Câu 3.8.23

> [!prob] 3.8.23
> Cho $E$ là không gian Banach và $S \in L(E,E)$. Giả sử $c = \|S\| < 1$.
> (a) Chứng tỏ $\|I+S+S^2+\cdots+S^n\| \le \dfrac{1}{1-c}$ với mọi $n \ge 1$ ($I$ là ánh xạ đồng nhất).
> (b) Chứng tỏ chuỗi $\sum_{n=0}^\infty S^n$ hội tụ trong $L(E,E)$.
> (c) Chứng tỏ ánh xạ $(I-S)$ khả nghịch và $(I-S)^{-1} = \sum_{n=0}^\infty S^n$.

> [!prf] Lời giải
> **(a)** Theo bất đẳng thức tam giác và Bài 3.8.22(c) ($\|S^i\| \le c^i$, kể cả $i=0$ vì $\|S^0\|=\|I\|=1=c^0$):
> $$\left\|\sum_{i=0}^n S^i\right\| \le \sum_{i=0}^n \|S^i\| \le \sum_{i=0}^n c^i \le \sum_{i=0}^\infty c^i = \frac{1}{1-c}$$
> (chuỗi hình học hội tụ vì $0 \le c < 1$).
>
> **(b) Chuỗi hội tụ.** Đặt $s_n = \sum_{i=0}^n S^i$. Ta chứng minh $(s_n)$ là dãy Cauchy trong $L(E,E)$. Với $m > n$:
> $$\|s_m - s_n\| = \left\|\sum_{i=n+1}^m S^i\right\| \le \sum_{i=n+1}^m c^i = c^{n+1}\cdot\frac{1-c^{m-n}}{1-c} \le \frac{c^{n+1}}{1-c} \xrightarrow{n\to\infty} 0,$$
> vì $0\le c<1$. Vậy $(s_n)$ Cauchy trong $L(E,E)$. Vì $E$ Banach nên $L(E,E)$ Banach (đầy đủ), do đó $(s_n)$ hội tụ về một giới hạn $\tilde S \in L(E,E)$, tức chuỗi $\sum_{n=0}^\infty S^n$ hội tụ.
>
> **(c) Khả nghịch.** Với mỗi $n$:
> $$(I-S)s_n = (I-S)(I+S+\cdots+S^n) = I - S^{n+1}$$
> (khai triển tổng lồng nhau — kính viễn vọng). Vì $\|S^{n+1}\| \le c^{n+1} \to 0$, ta có $S^{n+1} \to 0$ trong $L(E,E)$. Mặt khác $s_n \to \tilde S$ (từ (b)), và phép nhân toán tử liên tục (từ bất đẳng thức $\|AB-A'B'\|\le\|A-A'\|\|B\|+\|A'\|\|B-B'\|$), nên
> $$(I-S)\tilde S = \lim_{n\to\infty}(I-S)s_n = \lim_{n\to\infty}(I-S^{n+1}) = I.$$
> Tương tự $\tilde S(I-S) = I$ (do $s_n(I-S) = I-S^{n+1}$ cũng đúng bằng tính giao hoán của $S$ với chính nó). Vậy $I-S$ khả nghịch với
> $$(I-S)^{-1} = \tilde S = \sum_{n=0}^\infty S^n$$



## Câu 3.8.24

> [!prob] 3.8.24
> Cho $E$ là không gian định chuẩn và $T \in L(E,E)$.
> (a) Nhắc lại $\sum_{i=0}^\infty \dfrac{x^i}{i!} = e^x$ với mọi $x \in \mathbb{R}$. Đặt $s_n = \sum_{i=0}^n \dfrac{\|T\|^i}{i!}$. Chứng tỏ $(s_n)_{n\in\mathbb{N}}$ là dãy Cauchy trong $\mathbb{R}$.
> (b) Đặt $S_n = \sum_{i=0}^n \dfrac{T^i}{i!}$. Chứng tỏ $(S_n)_{n\in\mathbb{N}}$ là dãy Cauchy trong $L(E,E)$.
> (c) Giả sử thêm $E$ Banach. Chứng tỏ $(S_n)$ hội tụ về một giới hạn, ký hiệu $e^T = \sum_{i=0}^\infty \dfrac{T^i}{i!}$.

> [!prf] Lời giải
> **(a)** Vì chuỗi $\sum_{i=0}^\infty x^i/i!$ hội tụ (tuyệt đối) với mọi $x \in \mathbb{R}$, đặc biệt với $x = \|T\| \ge 0$, dãy tổng riêng $(s_n)$ hội tụ trong $\mathbb{R}$ (về $e^{\|T\|}$), do đó là dãy Cauchy.
>
> Chi tiết hơn (không viện dẫn hội tụ tổng đã biết): với $m>n$, $|s_m-s_n| = \sum_{i=n+1}^m \dfrac{\|T\|^i}{i!}$. Theo tiêu chuẩn tỉ số, tỉ số hai số hạng liên tiếp $\dfrac{\|T\|^{i+1}/(i+1)!}{\|T\|^i/i!} = \dfrac{\|T\|}{i+1} \to 0$ khi $i\to\infty$, nên chuỗi $\sum \|T\|^i/i!$ hội tụ (theo tiêu chuẩn tỉ số), suy ra phần dư $\sum_{i=n+1}^m \|T\|^i/i! \to 0$ khi $n,m\to\infty$: $(s_n)$ Cauchy.
>
> **(b)** Với $m > n$:
> $$\|S_m - S_n\| = \left\|\sum_{i=n+1}^m \frac{T^i}{i!}\right\| \le \sum_{i=n+1}^m \frac{\|T^i\|}{i!} \le \sum_{i=n+1}^m \frac{\|T\|^i}{i!} = s_m - s_n$$
> (dùng $\|T^i\| \le \|T\|^i$ từ Bài 3.8.22(c), và bất đẳng thức tam giác). Vì $(s_n)$ Cauchy trong $\mathbb{R}$ (từ (a)), vế phải $\to 0$ khi $n,m\to\infty$, nên $(S_n)$ Cauchy trong $L(E,E)$.
>
> **(c)** Vì $E$ Banach, $L(E,E)$ (với chuẩn toán tử) cũng là không gian Banach (đầy đủ). Dãy $(S_n)$ Cauchy trong không gian đầy đủ $L(E,E)$ (từ (b)), do đó hội tụ về một giới hạn duy nhất trong $L(E,E)$, ký hiệu
> $$e^T := \lim_{n\to\infty} S_n = \sum_{i=0}^\infty \frac{T^i}{i!}$$



## Câu 3.8.25

> [!prob] 3.8.25
> Cho $T$ là một song ánh tuyến tính từ không gian định chuẩn $(E,\|\cdot\|_E)$ vào không gian định chuẩn $(F,\|\cdot\|_F)$. Đặt $S = T^{-1}$. Chứng minh:
> (a) $S$ là ánh xạ tuyến tính từ $F$ vào $E$.
> (b) Nếu $S$ và $T$ liên tục thì $\|S\| \ge \|T\|^{-1}$.

> [!prf] Lời giải
> **(a) $S$ tuyến tính.** Cho $y_1, y_2 \in F$, $\alpha,\beta$ vô hướng. Đặt $x_1 = S(y_1), x_2 = S(y_2)$, tức $Tx_1=y_1, Tx_2=y_2$. Vì $T$ tuyến tính,
> $$T(\alpha x_1+\beta x_2) = \alpha Tx_1+\beta Tx_2 = \alpha y_1+\beta y_2.$$
> Vì $T$ song ánh, $T^{-1}=S$ là ánh xạ được xác định duy nhất bởi $S(Ty)=y$ với mọi $y$ (hay $T(Sx)=x$), nên từ đẳng thức trên và tính đơn ánh của $T$:
> $$S(\alpha y_1+\beta y_2) = \alpha x_1+\beta x_2 = \alpha S(y_1)+\beta S(y_2).$$
> Vậy $S$ tuyến tính.
>
> **(b) Đánh giá $\|S\|$.** Vì $S = T^{-1}$, $S\circ T = \operatorname{Id}_E$. Áp dụng Bài 3.8.22(b) (bất đẳng thức chuẩn của hợp thành, mở rộng tự nhiên cho $S: F\to E$, $T: E\to F$):
> $$1 = \|\operatorname{Id}_E\| = \|S\circ T\| \le \|S\|\,\|T\|$$
> (giả sử $E \ne \{0\}$, để $\|\operatorname{Id}_E\|=1$; nếu $E=\{0\}$ mệnh đề tầm thường). Vì $T$ song ánh và $E\ne\{0\}$ nên $T \ne 0$, tức $\|T\| > 0$. Chia hai vế cho $\|T\|$:
> $$\|S\| \ge \frac{1}{\|T\|} = \|T\|^{-1}$$

# Định lý Hahn-Banach

## Câu 3.8.26

> [!prob] 3.8.26
> Cho $M$ là một không gian vectơ con dày đặc trong một không gian định chuẩn $E$, và $T \in L(M,F)$ với $F$ Banach. Chứng minh có duy nhất một $S \in L(E,F)$ sao cho $S(x) = T(x)$ với mọi $x \in M$.

> [!prf] Lời giải
> *(Giả thiết $F$ đầy đủ là cần thiết để đảm bảo sự tồn tại; tính duy nhất không cần giả thiết này.)*
>
> **Tồn tại.** Cho $x \in E$. Vì $M$ dày đặc trong $E$, tồn tại dãy $(x_n) \subset M$ với $x_n \to x$. Vì $(x_n)$ hội tụ nên Cauchy trong $E$, và $T$ bị chặn trên $M$:
> $$\|Tx_n - Tx_m\|_F = \|T(x_n-x_m)\|_F \le \|T\|\,\|x_n-x_m\|_E \xrightarrow{n,m\to\infty} 0.$$
> Vậy $(Tx_n)$ Cauchy trong $F$; vì $F$ Banach (đầy đủ), $(Tx_n)$ hội tụ. Định nghĩa
> $$S(x) := \lim_{n\to\infty} Tx_n.$$
>
> *Không phụ thuộc dãy chọn:* nếu $(x_n), (x_n')$ đều $\to x$ trong $M$, xét dãy đan xen $x_1,x_1',x_2,x_2',\dots$ cũng $\to x$, nên theo lập luận trên $(Tx_1,Tx_1',Tx_2,Tx_2',\dots)$ cũng hội tụ (dãy Cauchy trong $F$ đầy đủ), do đó hai dãy con $(Tx_n)$ và $(Tx_n')$ có cùng giới hạn. Vậy $S$ được định nghĩa tốt.
>
> *Tuyến tính:* cho $x,y\in E$, $x_n\to x$, $y_n\to y$ ($x_n,y_n\in M$). Khi đó $\alpha x_n+\beta y_n \to \alpha x+\beta y$, và
> $$S(\alpha x+\beta y) = \lim_n T(\alpha x_n+\beta y_n) = \lim_n (\alpha Tx_n+\beta Ty_n) = \alpha S(x)+\beta S(y)$$
> (dùng tuyến tính của $T$ trên $M$ và tính liên tục của phép cộng/nhân vô hướng trong $F$).
>
> *Mở rộng $T$:* nếu $x \in M$, lấy dãy hằng $x_n = x$, thì $S(x) = \lim Tx = Tx$. Vậy $S|_M = T$.
>
> *Bị chặn:* với $x \in E$, $x_n \to x$ ($x_n \in M$):
> $$\|S(x)\|_F = \lim_n \|Tx_n\|_F \le \lim_n \|T\|\,\|x_n\|_E = \|T\|\,\|x\|_E$$
> (dùng tính liên tục của chuẩn). Vậy $S$ bị chặn (liên tục), $S \in L(E,F)$, và thực ra $\|S\|\le\|T\|$ (kết hợp với $S|_M=T$ suy ra $\|S\|=\|T\|$, dù không được yêu cầu).
>
> **Duy nhất.** Giả sử $S, S' \in L(E,F)$ đều mở rộng $T$, tức $S|_M = S'|_M = T$. Đặt $R = S-S' \in L(E,F)$; $R$ triệt tiêu trên $M$. Với $x \in E$ bất kỳ, lấy $(x_n)\subset M$, $x_n \to x$; vì $R$ liên tục,
> $$R(x) = \lim_n R(x_n) = \lim_n 0 = 0.$$
> Vậy $R \equiv 0$ trên $E$, tức $S = S'$.

## Câu 3.8.27

> [!prob] 3.8.27
> Cho $\Lambda$ là một phiếm hàm tuyến tính trên $X$. Giả sử $\Lambda \ne 0$, nghĩa là tồn tại $x \in X$ sao cho $\Lambda x \ne 0$. Đặt $\ker(\Lambda) = \{x \in X \mid \Lambda x = 0\}$ là **nhân** của $\Lambda$.
> (a) Với $y \in X$ bất kì, chứng tỏ $y - \dfrac{\Lambda y}{\Lambda x}x \in \ker(\Lambda)$.
> (b) Suy ra $X = \ker(\Lambda) + \langle x\rangle$. Như vậy $\ker(\Lambda)$ kém $X$ đúng 1 chiều.

> [!prf] Lời giải
> **(a)** Vì $\Lambda$ tuyến tính:
> $$\Lambda\left(y - \frac{\Lambda y}{\Lambda x}x\right) = \Lambda y - \frac{\Lambda y}{\Lambda x}\Lambda x = \Lambda y - \Lambda y = 0.$$
> Vậy $y - \dfrac{\Lambda y}{\Lambda x}x \in \ker(\Lambda)$.
>
> **(b)** Với mọi $y \in X$, viết
> $$y = \underbrace{\left(y - \frac{\Lambda y}{\Lambda x}x\right)}_{\in\, \ker(\Lambda) \text{ theo (a)}} + \underbrace{\frac{\Lambda y}{\Lambda x}x}_{\in\, \langle x\rangle}.$$
> Vậy $X = \ker(\Lambda) + \langle x\rangle$.
>
> Hơn nữa tổng này **trực tiếp**: nếu $tx \in \ker(\Lambda)$ với $t \ne 0$ thì $\Lambda(tx) = t\Lambda x = 0$, mâu thuẫn $\Lambda x \ne 0$. Vậy $\ker(\Lambda) \cap \langle x\rangle = \{0\}$, nên
> $$X = \ker(\Lambda) \oplus \langle x\rangle,$$
> tức $\ker(\Lambda)$ có đối chiều (codimension) đúng bằng $1$ trong $X$, hay nói cách khác $\ker(\Lambda)$ kém $X$ đúng 1 chiều.



## Câu 3.8.28

> [!prob] 3.8.28
> Cho $x$ và $y$ là hai vectơ khác nhau trong một không gian định chuẩn $E$. Chứng minh có $f \in E^*$ sao cho $f(x) \ne f(y)$.
>
> Trong trường hợp trường số thực, giả sử $f(x) < f(y)$, lấy $f(x) < \alpha < f(y)$ thì tập $\{x \in E \mid f(x) = \alpha\}$ là một **siêu phẳng** tách $x$ và $y$. Vậy ta có thể tách hai điểm khác nhau bằng một siêu phẳng đóng.

> [!prf] Lời giải
> **Tồn tại $f$ với $f(x) \ne f(y)$.** Vì $x \ne y$, đặt $z = x - y \ne 0$. Theo Hệ quả 2 của Hahn–Banach (phiếm hàm chuẩn hóa), tồn tại $f \in E^*$, $\|f\| = 1$, sao cho
> $$f(z) = \|z\| > 0.$$
> Vì $f$ tuyến tính, $f(z) = f(x) - f(y) = \|x-y\| \ne 0$, vậy $f(x) \ne f(y)$.
>
> **Tách bằng siêu phẳng.** Giả sử $f(x) < f(y)$ (trường hợp ngược lại đối xứng), lấy $\alpha$ với $f(x) < \alpha < f(y)$. Đặt $H = \{z \in E \mid f(z) = \alpha\}$.
>
> $H$ đóng vì $H = f^{-1}(\{\alpha\})$ là ảnh ngược của tập đóng $\{\alpha\} \subset \mathbb{R}$ qua ánh xạ liên tục $f$.
>
> $H$ tách $x, y$: $x$ thuộc nửa không gian mở $\{z : f(z) < \alpha\}$ (vì $f(x)<\alpha$) và $y$ thuộc nửa không gian mở $\{z : f(z) > \alpha\}$ (vì $f(y)>\alpha$), hai nửa không gian này rời nhau và có biên chung $H$. Vậy $H$ là siêu phẳng đóng tách $x$ và $y$.



## Câu 3.8.29

> [!prob] 3.8.29
> Cho $x$ là một phần tử khác không trong một không gian định chuẩn $E$. Chứng minh có $f \in E^*$ sao cho $\|f\| = \|x\|$ và $f(x) = \|x\|^2$.

> [!prf] Lời giải
> Theo Hệ quả 2 của Hahn–Banach, tồn tại $f_0 \in E^*$ với $\|f_0\| = 1$ và $f_0(x) = \|x\|$.
>
> Đặt $f = \|x\| f_0$. Vì $f$ là bội vô hướng của $f_0 \in E^*$, $f \in E^*$, và
> $$\|f\| = \|x\|\,\|f_0\| = \|x\|\cdot 1 = \|x\|,$$
> $$f(x) = \|x\|\,f_0(x) = \|x\|\cdot\|x\| = \|x\|^2.$$
> Vậy $f$ thỏa cả hai điều kiện.



## Câu 3.8.30

> [!prob] 3.8.30
> Cho $x$ là một phần tử trong một không gian định chuẩn $E$. Chứng minh $x = 0$ khi và chỉ khi với mọi $f \in E^*$ thì $f(x) = 0$.

> [!prf] Lời giải
> **($\Rightarrow$)** Nếu $x=0$, mọi $f \in E^*$ tuyến tính nên $f(0) = 0$.
>
> **($\Leftarrow$)** Ta chứng minh phản đảo: nếu $x \ne 0$ thì tồn tại $f \in E^*$ với $f(x) \ne 0$. Theo Hệ quả 2 của Hahn–Banach, tồn tại $f \in E^*$, $\|f\|=1$, sao cho $f(x) = \|x\| > 0 \ne 0$.
>
> Vậy nếu $f(x)=0$ với mọi $f \in E^*$ thì $x$ không thể khác $0$, tức $x=0$.
>
> (Đây chính là nội dung Câu 7 phần trước, được phát biểu lại theo hướng "điểm" thay vì "giao các nhân".)



## Câu 3.8.31

> [!prob] 3.8.31
> Cho $x_1,\dots,x_n$ là $n$ vectơ độc lập tuyến tính trong một không gian định chuẩn $E$. Chứng minh có $f_1,\dots,f_n \in E^*$ sao cho $f_i(x_j) = \delta_i^j$, ở đây $\delta_i^j$ là số Kronecker.

> [!prf] Lời giải
> Đặt $M = \operatorname{span}\{x_1,\dots,x_n\}$, một không gian con **hữu hạn chiều** của $E$ (chiều đúng bằng $n$ vì $x_1,\dots,x_n$ độc lập tuyến tính, nên chúng tạo thành một cơ sở của $M$).
>
> Với mỗi $i \in \{1,\dots,n\}$, định nghĩa $g_i: M \to \mathbb{R}$ (hoặc $\mathbb{C}$) là phiếm hàm tuyến tính xác định trên cơ sở bởi
> $$g_i(x_j) = \delta_i^j, \qquad j=1,\dots,n,$$
> và mở rộng tuyến tính lên toàn $M$ (định nghĩa hợp lệ vì $x_1,\dots,x_n$ là cơ sở của $M$, mỗi phần tử $M$ viết duy nhất dưới dạng tổ hợp tuyến tính của chúng).
>
> Vì $M$ **hữu hạn chiều**, mọi phiếm hàm tuyến tính trên $M$ đều liên tục (tính chất chuẩn của không gian định chuẩn hữu hạn chiều: mọi ánh xạ tuyến tính từ không gian hữu hạn chiều đều bị chặn). Vậy $g_i \in M^*$.
>
> Áp dụng Hệ quả 1 của Hahn–Banach, mở rộng $g_i$ thành $f_i \in E^*$ với $f_i|_M = g_i$. Đặc biệt,
> $$f_i(x_j) = g_i(x_j) = \delta_i^j, \qquad \forall i,j \in \{1,\dots,n\}.$$
> Đây chính là hệ $f_1,\dots,f_n$ cần tìm.



## Câu 3.8.32

> [!prob] 3.8.32
> Cho không gian định chuẩn $X$. Nhắc lại rằng với mọi $\Lambda \in X^*$: $\|\Lambda\| = \sup_{\|x\|\le1}|\Lambda x|$. Chứng tỏ với mọi $x \in X$:
> $$\|x\| = \sup_{\|\Lambda\|_{X^*}\le1}|\Lambda x| = \max_{\|\Lambda\|_{X^*}\le1}|\Lambda x|.$$

> [!prf] Lời giải
> Đặt $M(x) = \sup_{\|\Lambda\|_{X^*}\le1}|\Lambda x|$.
>
> **($M(x) \le \|x\|$).** Với mọi $\Lambda \in X^*$, $\|\Lambda\|\le1$: theo định nghĩa chuẩn toán tử, $|\Lambda x| \le \|\Lambda\|\,\|x\| \le \|x\|$. Lấy sup theo $\Lambda$, $M(x) \le \|x\|$.
>
> **($M(x) \ge \|x\|$, và đạt được).** Nếu $x = 0$, hiển nhiên $M(x) = 0 = \|x\|$ (đạt bởi $\Lambda = 0$). Nếu $x \ne 0$, theo Hệ quả 2 của Hahn–Banach, tồn tại $f \in X^*$ với $\|f\| = 1 \le 1$ và $f(x) = \|x\|$. Vậy
> $$|f(x)| = \|x\|,$$
> tức giá trị $\|x\|$ **đạt được** trong tập $\{|\Lambda x| : \|\Lambda\|\le1\}$ (bởi $\Lambda = f$). Suy ra $M(x) \ge \|x\|$, đồng thời sup thực chất là max.
>
> Kết hợp hai chiều:
> $$\|x\| = \sup_{\|\Lambda\|_{X^*}\le1}|\Lambda x| = \max_{\|\Lambda\|_{X^*}\le1}|\Lambda x|,$$
> với giá trị lớn nhất đạt tại phiếm hàm chuẩn hóa $f$ vừa xây dựng.



## Câu 3.8.33*

> [!prob] 3.8.33*
> Cho $M$ là một không gian vectơ con đóng của một không gian định chuẩn $X$ và $x_0 \in X$. Chứng tỏ nếu $x_0 \notin M$ thì tồn tại $f \in X^*$ sao cho $f(x) = 0$ với mọi $x \in M$ nhưng $f(x_0) \ne 0$.

> [!prf] Lời giải
> Vì $M$ đóng và $x_0 \notin M$, đặt $d = \operatorname{dist}(x_0, M) = \inf\{\|x_0-m\| : m \in M\}$. Theo lập luận đã dùng ở Câu 8 (phần trước), $d > 0$ (nếu $d=0$ thì tồn tại dãy trong $M$ hội tụ về $x_0$, và vì $M$ đóng, $x_0 \in M$, mâu thuẫn).
>
> Áp dụng trực tiếp Hệ quả 3 của Hahn–Banach (đã chứng minh chi tiết trong lời giải Câu 8): tồn tại $f \in X^*$ sao cho
> $$f(x_0) = 1, \qquad f|_M = 0, \qquad \|f\| \le \frac1d.$$
> Đặc biệt $f(x_0) = 1 \ne 0$ và $f(x) = 0$ với mọi $x \in M$, đúng như yêu cầu.



## Câu 3.8.34*

> [!prob] 3.8.34*
> Cho $\Lambda$ là một phiếm hàm tuyến tính trên $X$. Giả sử $\Lambda \ne 0$. Chứng tỏ mệnh đề sau là tương đương:
> (a) $\Lambda$ liên tục.
> (b) $\ker(\Lambda) = \{x \in X \mid \Lambda x = 0\}$ là không gian con đóng của $X$.

> [!prf] Lời giải
> **(a) $\Rightarrow$ (b).** Nếu $\Lambda$ liên tục, thì $\ker(\Lambda) = \Lambda^{-1}(\{0\})$ là ảnh ngược của tập đóng $\{0\} \subset \mathbb{R}$ (hoặc $\mathbb{C}$) qua ánh xạ liên tục $\Lambda$, do đó $\ker(\Lambda)$ đóng.
>
> **(b) $\Rightarrow$ (a).** Đặt $M = \ker(\Lambda)$, giả sử $M$ đóng. Vì $\Lambda \ne 0$, tồn tại $x_0 \in X$ với $\Lambda x_0 \ne 0$; thay $x_0$ bởi $x_0/\Lambda x_0$, có thể giả sử $\Lambda x_0 = 1$ (chuẩn hóa). Khi đó $x_0 \notin M$ (vì $\Lambda x_0 = 1 \ne 0$).
>
> Ta chứng minh $\Lambda$ bị chặn bằng phản chứng. Giả sử $\Lambda$ không bị chặn: khi đó tồn tại dãy $(x_n) \subset X$, $\|x_n\| = 1$, sao cho $|\Lambda x_n| \to \infty$ (nếu không, $\Lambda$ bị chặn trên hình cầu đơn vị, mâu thuẫn giả thiết).
>
> Đặt
> $$z_n = x_0 - \frac{x_n}{\Lambda x_n} \in X.$$
> Tính $\Lambda z_n = \Lambda x_0 - \dfrac{\Lambda x_n}{\Lambda x_n} = 1 - 1 = 0$, vậy $z_n \in M$ với mọi $n$.
>
> Mặt khác,
> $$\left\|z_n - x_0\right\| = \left\|\frac{x_n}{\Lambda x_n}\right\| = \frac{\|x_n\|}{|\Lambda x_n|} = \frac{1}{|\Lambda x_n|} \xrightarrow{n\to\infty} 0$$
> (vì $|\Lambda x_n| \to \infty$). Vậy $z_n \to x_0$.
>
> Vì $(z_n) \subset M$, $z_n \to x_0$, và $M$ **đóng** theo giả thiết, ta suy ra $x_0 \in M$, tức $\Lambda x_0 = 0$. Điều này mâu thuẫn với việc đã chuẩn hóa $\Lambda x_0 = 1$.
>
> Vậy giả thiết phản chứng sai, $\Lambda$ phải bị chặn, do đó liên tục.

# Chương 4 — Không gian Hilbert

## Phần lý thuyết nền tảng

> [!def] Không gian tích trong
> Cho $H$ là không gian véctơ trên $\mathbb{K}$ ($\mathbb{R}$ hoặc $\mathbb{C}$). Một **tích trong** trên $H$ là ánh xạ $\langle\cdot,\cdot\rangle: H\times H \to \mathbb{K}$ sao cho: (i) tuyến tính theo biến thứ nhất; (ii) $\langle y,x\rangle = \overline{\langle x,y\rangle}$; (iii) $\langle x,x\rangle \ge 0$, và $\langle x,x\rangle = 0 \iff x=0$. Chuẩn sinh bởi tích trong: $\|x\| = \sqrt{\langle x,x\rangle}$. Nếu $(H,\|\cdot\|)$ đầy đủ, $H$ được gọi là **không gian Hilbert**.

> [!thm] Bất đẳng thức Cauchy–Schwarz
> $|\langle x,y\rangle| \le \|x\|\,\|y\|$, đẳng thức xảy ra khi và chỉ khi $x,y$ phụ thuộc tuyến tính.

> [!prp] Đẳng thức hình bình hành
> $\|x+y\|^2 + \|x-y\|^2 = 2\|x\|^2 + 2\|y\|^2$.

> [!thm] Định lý phép chiếu (Mệnh đề 4.2.5)
> Cho $H$ là không gian Hilbert, $C \subseteq H$ là tập lồi đóng khác rỗng. Với mọi $x \in H$, tồn tại duy nhất $y \in C$ sao cho $\|x-y\| = d(x,C) = \inf_{c\in C}\|x-c\|$.
>
> Khi $C = M$ là không gian con đóng, phần tử $y = P_M(x)$ được đặc trưng bởi tính chất $(x-y) \perp M$, và $P_M$ được gọi là **phép chiếu vuông góc** lên $M$.

> [!thm] Định lý biểu diễn Riesz
> Cho $H$ là không gian Hilbert, $f \in H^*$. Tồn tại duy nhất $y \in H$ sao cho $f(x) = \langle x,y\rangle$ với mọi $x \in H$, và $\|f\| = \|y\|$.

> [!def] Trực giao, trực chuẩn, chuỗi Fourier tổng quát
> $x \perp y$ nếu $\langle x,y\rangle = 0$. $A \perp B$ nếu $a\perp b$ với mọi $a\in A, b\in B$. $A^\perp = \{x \in H : x \perp A\}$. Một họ $(e_n)$ là **trực chuẩn** nếu $\langle e_n,e_m\rangle = \delta_{nm}$.

> [!thm] Bất đẳng thức Bessel & đẳng thức Parseval
> Với $(e_n)$ trực chuẩn trong $H$ và $x \in H$: $\sum_n |\langle x,e_n\rangle|^2 \le \|x\|^2$. Nếu $(e_n)$ đầy đủ (cơ sở trực chuẩn), đẳng thức xảy ra và $x = \sum_n \langle x,e_n\rangle e_n$.



# Không gian tích trong

## Câu 4.6.1

> [!prob] 4.6.1
> Tích trong tính được từ chuẩn sinh bởi tích trong đó. (a) Trên trường thực: $\langle x,y\rangle = \frac14(\|x+y\|^2-\|x-y\|^2)$. (b) Trên trường phức: $\langle x,y\rangle = \frac14(\|x+y\|^2-\|x-y\|^2) + \frac{i}{4}(\|x+iy\|^2-\|x-iy\|^2)$.

> [!prf] Lời giải
> Khai triển tổng quát: $\|x\pm y\|^2 = \langle x\pm y, x\pm y\rangle = \|x\|^2 \pm \langle x,y\rangle \pm \langle y,x\rangle + \|y\|^2 = \|x\|^2 \pm 2\operatorname{Re}\langle x,y\rangle + \|y\|^2$.
>
> Trừ hai đẳng thức: $\|x+y\|^2 - \|x-y\|^2 = 4\operatorname{Re}\langle x,y\rangle$, chia $4$:
> $$\frac14\left(\|x+y\|^2-\|x-y\|^2\right) = \operatorname{Re}\langle x,y\rangle.$$
> **(a) Trường thực:** vì $\langle x,y\rangle \in \mathbb{R}$, $\operatorname{Re}\langle x,y\rangle = \langle x,y\rangle$, ta được ngay công thức (a).
>
> **(b) Trường phức:** thay $y$ bởi $iy$ trong công thức trên: $\frac14(\|x+iy\|^2-\|x-iy\|^2) = \operatorname{Re}\langle x,iy\rangle = \operatorname{Re}(\bar i \langle x,y\rangle) = \operatorname{Re}(-i\langle x,y\rangle) = \operatorname{Im}\langle x,y\rangle$
> (vì với $z=a+bi$: $\operatorname{Re}(-iz) = \operatorname{Re}(-ia+b) = b = \operatorname{Im} z$). Nhân $i$:
> $$\frac{i}{4}\left(\|x+iy\|^2-\|x-iy\|^2\right) = i\operatorname{Im}\langle x,y\rangle.$$
> Cộng với kết quả phần thực, ta được $\operatorname{Re}\langle x,y\rangle + i\operatorname{Im}\langle x,y\rangle = \langle x,y\rangle$, đúng công thức (b).



## Câu 4.6.2

> [!prob] 4.6.2
> Chứng tỏ trên trường thực thì $x\perp y \iff \|x+y\|^2 = \|x\|^2+\|y\|^2$. Điều này có đúng trên trường phức không?

> [!prf] Lời giải
> Trên trường thực, từ khai triển $\|x+y\|^2 = \|x\|^2+2\langle x,y\rangle+\|y\|^2$, ta có ngay
> $$\|x+y\|^2 = \|x\|^2+\|y\|^2 \iff \langle x,y\rangle = 0 \iff x\perp y.$$
> **Trên trường phức:** khai triển tổng quát cho $\|x+y\|^2 = \|x\|^2+2\operatorname{Re}\langle x,y\rangle+\|y\|^2$, nên đẳng thức Pythagoras chỉ tương đương với $\operatorname{Re}\langle x,y\rangle = 0$, một điều kiện **yếu hơn** $\langle x,y\rangle = 0$. Phản ví dụ: trong $\mathbb{C}$ với $\langle x,y\rangle = x\bar y$, lấy $x=1, y=i$: $\langle 1,i\rangle = 1\cdot\overline{i} = -i \ne 0$ (không trực giao), nhưng $\|1+i\|^2 = 2 = 1+1 = \|1\|^2+\|i\|^2$. Vậy chiều tương đương **không còn đúng** trên trường phức (chỉ còn chiều $x\perp y \Rightarrow$ Pythagoras, chiều ngược sai).



## Câu 4.6.3

> [!prob] 4.6.3
> Cho $H$ là không gian tích trong và $x,y\in H$. Chứng minh rằng nếu $x\perp y$ thì $\|x+y\|=\|x-y\|$. Hãy giải thích ý nghĩa hình học của đẳng thức này.

> [!prf] Lời giải
> Từ khai triển: $\|x+y\|^2 = \|x\|^2+2\operatorname{Re}\langle x,y\rangle+\|y\|^2 = \|x\|^2+\|y\|^2$ (vì $\langle x,y\rangle=0$). Tương tự $\|x-y\|^2 = \|x\|^2-2\operatorname{Re}\langle x,y\rangle+\|y\|^2 = \|x\|^2+\|y\|^2$. Vậy $\|x+y\|^2=\|x-y\|^2$, suy ra $\|x+y\|=\|x-y\|$.
>
> **Ý nghĩa hình học:** $x, y$ là hai cạnh vuông góc của một hình chữ nhật (hình bình hành có góc vuông); $x+y$ và $x-y$ là hai đường chéo. Đẳng thức nói rằng **hai đường chéo của một hình chữ nhật có độ dài bằng nhau**.



## Câu 4.6.4

> [!prob] 4.6.4
> Trong một không gian tích trong trên trường thực, chứng tỏ nếu $\|x\|=\|y\|$ thì $(x+y)\perp(x-y)$. Hãy tìm ý nghĩa hình học của điều này.

> [!prf] Lời giải
> $$\langle x+y, x-y\rangle = \langle x,x\rangle - \langle x,y\rangle + \langle y,x\rangle - \langle y,y\rangle = \|x\|^2 - \|y\|^2$$
> (dùng tính đối xứng $\langle x,y\rangle=\langle y,x\rangle$ trên trường thực, hai số hạng giữa triệt tiêu). Vì $\|x\|=\|y\|$, vế phải bằng $0$, nên $(x+y)\perp(x-y)$.
>
> **Ý nghĩa hình học:** $x,y$ là hai cạnh có độ dài bằng nhau của một hình thoi (hình bình hành cạnh đều); $x+y,x-y$ là hai đường chéo. Kết quả nói rằng **hai đường chéo của một hình thoi vuông góc với nhau**.



## Câu 4.6.5

> [!prob] 4.6.5
> Cho không gian tích trong $H$ trên trường $\mathbb{R}$. Chứng tỏ với mọi $a,b\in H$ thì $\|a+b\|\,\|a-b\| \le \|a\|^2+\|b\|^2$.

> [!prf] Lời giải
> Theo bất đẳng thức AM–GM, với $p,q\ge0$: $\sqrt{pq} \le \dfrac{p+q}{2}$. Áp dụng với $p=\|a+b\|^2, q=\|a-b\|^2$:
> $$\|a+b\|\,\|a-b\| = \sqrt{\|a+b\|^2\|a-b\|^2} \le \frac{\|a+b\|^2+\|a-b\|^2}{2}.$$
> Theo đẳng thức hình bình hành, $\|a+b\|^2+\|a-b\|^2 = 2\|a\|^2+2\|b\|^2$. Thay vào:
> $$\|a+b\|\,\|a-b\| \le \frac{2\|a\|^2+2\|b\|^2}{2} = \|a\|^2+\|b\|^2.$$



## Câu 4.6.6

> [!prob] 4.6.6
> Trong một không gian tích trong, chứng tỏ nếu $x_n \xrightarrow{n\to\infty} x$ và $y_n \xrightarrow{n\to\infty} y$ thì $\langle x_n,y_n\rangle \xrightarrow{n\to\infty} \langle x,y\rangle$.

> [!prf] Lời giải
> Vì $(x_n)$ hội tụ, nó bị chặn: $\|x_n\| \le M$ với mọi $n$. Theo bất đẳng thức tam giác và Cauchy–Schwarz:
> $$|\langle x_n,y_n\rangle - \langle x,y\rangle| \le |\langle x_n,y_n\rangle-\langle x_n,y\rangle| + |\langle x_n,y\rangle-\langle x,y\rangle|$$
> $$= |\langle x_n, y_n-y\rangle| + |\langle x_n-x,y\rangle| \le \|x_n\|\,\|y_n-y\| + \|x_n-x\|\,\|y\| \le M\|y_n-y\| + \|y\|\,\|x_n-x\|.$$
> Vì $\|x_n-x\|\to0$ và $\|y_n-y\|\to0$, vế phải $\to0$. Vậy $\langle x_n,y_n\rangle \to \langle x,y\rangle$.



## Câu 4.6.7

> [!prob] 4.6.7
> Trong một không gian tích trong, giả sử $(x_n)_{n\in\mathbb{Z}^+}$ và $(y_n)_{n\in\mathbb{Z}^+}$ là hai dãy trong quả cầu đơn vị và $\lim_{n\to\infty}\langle x_n,y_n\rangle = 1$. Chứng tỏ $\lim_{n\to\infty}\|x_n-y_n\|=0$.

> [!prf] Lời giải
> Vì $\|x_n\|\le1, \|y_n\|\le1$:
> $$\|x_n-y_n\|^2 = \|x_n\|^2 - 2\operatorname{Re}\langle x_n,y_n\rangle + \|y_n\|^2 \le 1 - 2\operatorname{Re}\langle x_n,y_n\rangle + 1 = 2 - 2\operatorname{Re}\langle x_n,y_n\rangle.$$
> Vì $\langle x_n,y_n\rangle \to 1$ (số thực), $\operatorname{Re}\langle x_n,y_n\rangle \to 1$, nên $2-2\operatorname{Re}\langle x_n,y_n\rangle \to 0$. Vì $\|x_n-y_n\|^2 \ge 0$ và bị chặn trên bởi đại lượng $\to0$, theo nguyên lý kẹp, $\|x_n-y_n\|^2 \to 0$, do đó $\|x_n-y_n\| \to 0$.



## Câu 4.6.8

> [!prob] 4.6.8
> Trong một không gian tích trong $E$, cho $x\in E$ và $A\subset E$. Chứng tỏ nếu $x\perp A$ thì $x\perp \overline{A}$.

> [!prf] Lời giải
> Cho $a \in \overline{A}$ bất kỳ. Tồn tại dãy $(a_n) \subset A$ với $a_n \to a$. Vì $x\perp A$, $\langle x,a_n\rangle = 0$ với mọi $n$. Theo tính liên tục của tích trong (Bài 4.6.6, áp dụng với dãy hằng $x_n=x$ và $y_n=a_n$):
> $$\langle x,a\rangle = \lim_{n\to\infty}\langle x,a_n\rangle = \lim_{n\to\infty} 0 = 0.$$
> Vậy $x\perp a$ với mọi $a\in\overline{A}$, tức $x\perp\overline{A}$.



## Câu 4.6.9

> [!prob] 4.6.9
> Trong một không gian tích trong $E$, cho $y_1,y_2\in E$. Giả sử $\forall x\in E, \langle x,y_1\rangle = \langle x,y_2\rangle$. Chứng tỏ $y_1=y_2$.

> [!prf] Lời giải
> Từ giả thiết, $\langle x, y_1-y_2\rangle = 0$ với mọi $x \in E$. Lấy $x = y_1-y_2$:
> $$\|y_1-y_2\|^2 = \langle y_1-y_2, y_1-y_2\rangle = 0,$$
> nên $y_1-y_2=0$, tức $y_1=y_2$.



## Câu 4.6.10

> [!prob] 4.6.10
> Trong không gian $\ell^p$ với $1\le p\le\infty$, xét $e_1=(1,0,0,\dots)$ và $e_2=(0,1,0,\dots)$. Chứng tỏ đẳng thức hình bình hành được thỏa với $e_1$ và $e_2$ khi và chỉ khi $p=2$. Suy ra $\ell^p$ với $1\le p\le\infty$, $p\ne2$, không phải là một không gian tích trong. Vậy $\ell^p$ là không gian Hilbert khi và chỉ khi $p=2$.

> [!prf] Lời giải
> Với $p<\infty$: $e_1+e_2=(1,1,0,\dots)$, $e_1-e_2=(1,-1,0,\dots)$, nên $\|e_1+e_2\|_p = \|e_1-e_2\|_p = (1^p+1^p)^{1/p} = 2^{1/p}$. Và $\|e_1\|_p=\|e_2\|_p=1$.
>
> Đẳng thức hình bình hành: $\|e_1+e_2\|_p^2+\|e_1-e_2\|_p^2 \overset{?}{=} 2\|e_1\|_p^2+2\|e_2\|_p^2$, tức
> $$2\cdot 2^{2/p} \overset{?}{=} 4 \iff 2^{1+2/p} \overset{?}{=} 2^2 \iff 1+\frac2p = 2 \iff p=2.$$
> Vậy đẳng thức chỉ đúng khi $p=2$ (kiểm tra tương tự cho $p=\infty$: $\|e_1+e_2\|_\infty=\|e_1-e_2\|_\infty=1$, LHS $=1+1=2 \ne 2\cdot1+2\cdot1=4$, cũng không thỏa).
>
> Vì đẳng thức hình bình hành là **hệ quả bắt buộc** của mọi chuẩn sinh từ tích trong (đã chứng minh ở phần lý thuyết), việc nó thất bại với $e_1,e_2$ khi $p\ne2$ chứng tỏ chuẩn $\|\cdot\|_p$ ($p\ne2$) **không thể** sinh từ một tích trong nào. Vậy $\ell^p$ ($p\ne2$) không phải không gian tích trong (do đó không phải Hilbert), trong khi $\ell^2$ với tích trong chuẩn $\langle x,y\rangle=\sum x_n\bar y_n$ là không gian Hilbert. Vậy $\ell^p$ là không gian Hilbert khi và chỉ khi $p=2$.



## Câu 4.6.11

> [!prob] 4.6.11
> Trong không gian $L^p(\mathbb{R})$ với $1\le p\le\infty$, xét $f_1=\chi_{[0,1)}$ và $f_2=\chi_{[1,2)}$. Chứng tỏ đẳng thức hình bình hành được thỏa với $f_1$ và $f_2$ khi và chỉ khi $p=2$. Vậy $L^p(\mathbb{R})$ là không gian Hilbert khi và chỉ khi $p=2$.

> [!prf] Lời giải
> $\|f_1\|_p = \|f_2\|_p = 1$ (vì $|f_i|^p=\chi_{[i-1,i)}$ có độ đo $1$). Vì $f_1,f_2$ có giá rời nhau, $f_1+f_2 = \chi_{[0,2)}$, nên $\|f_1+f_2\|_p = 2^{1/p}$. Cũng vì giá rời nhau, $|f_1-f_2| = \chi_{[0,2)}$ (giá trị $\pm1$ trên $[0,2)$, $0$ ngoài đó), nên $\|f_1-f_2\|_p = 2^{1/p}$ cũng vậy.
>
> Đẳng thức hình bình hành trở thành $2\cdot2^{2/p} \overset{?}{=} 4$, đúng khi và chỉ khi $p=2$ (lập luận y hệt Bài 4.6.10). Vậy chuẩn $L^p$ chỉ có thể sinh từ tích trong khi $p=2$, và $L^2(\mathbb{R})$ với $\langle f,g\rangle = \int f\bar g$ là không gian Hilbert chuẩn. Vậy $L^p(\mathbb{R})$ là không gian Hilbert khi và chỉ khi $p=2$.



## Câu 4.6.12

> [!prob] 4.6.12
> Cho ánh xạ $T:\ell^2\to\mathbb{R}$, $x=(x_1,x_2,\dots)\mapsto Tx = \sum_{n=1}^\infty \dfrac{x_n}{n^2}$.
> (a) Kiểm rằng $T$ được định nghĩa tốt.
> (b) Tìm $y\in\ell^2$ sao cho với mọi $x\in\ell^2$ thì $Tx=\langle x,y\rangle_{\ell^2}$.
> (c) Dùng câu (b), chứng tỏ $T$ tuyến tính liên tục và tính chuẩn của $T$.

> [!prf] Lời giải
> **(a)** Dãy $y=(1/n^2)_n \in \ell^2$ vì $\sum 1/n^4 = \pi^4/90 < \infty$. Theo Cauchy–Schwarz trong $\ell^2$:
> $$\sum_{n=1}^\infty \left|\frac{x_n}{n^2}\right| \le \|x\|_2\left(\sum \frac1{n^4}\right)^{1/2} < \infty,$$
> nên chuỗi định nghĩa $Tx$ hội tụ tuyệt đối với mọi $x\in\ell^2$: $T$ định nghĩa tốt.
>
> **(b)** Với $y=(1/n^2)_{n\in\mathbb{Z}^+}$: $\langle x,y\rangle_{\ell^2} = \sum_n x_n \cdot \dfrac1{n^2} = Tx$ (số thực, không cần liên hợp phức). Vậy $y=(1/n^2)_n$.
>
> **(c)** Tuyến tính: hiển nhiên từ tuyến tính của tích trong theo biến thứ nhất. Liên tục và chuẩn: theo Cauchy–Schwarz, $|Tx|=|\langle x,y\rangle| \le \|x\|_2\|y\|_2$, nên $T$ bị chặn với $\|T\|\le\|y\|_2$. Đẳng thức Cauchy–Schwarz đạt được tại $x=y$ (tỉ lệ), nên $\|T\| = \|y\|_2 = \left(\sum_{n=1}^\infty \dfrac1{n^4}\right)^{1/2} = \dfrac{\pi^2}{\sqrt{90}} = \dfrac{\pi^2\sqrt{90}}{90}$.



## Câu 4.6.13

> [!prob] 4.6.13
> Kiểm đây là một phiếm hàm tuyến tính liên tục và tìm chuẩn, dùng phương pháp tích trong: $T: L^2((0,1)) \to \mathbb{R}$, $f \mapsto \int_0^1 f(x)x\,dx$.

> [!prf] Lời giải
> Đặt $g(x)=x \in L^2(0,1)$ (vì $\int_0^1 x^2\,dx = 1/3<\infty$). Khi đó $Tf = \int_0^1 f(x)g(x)\,dx = \langle f,g\rangle_{L^2}$. Theo Cauchy–Schwarz, $|Tf| \le \|f\|_2\|g\|_2$, nên $T$ tuyến tính liên tục (tuyến tính hiển nhiên từ tích trong) với $\|T\| \le \|g\|_2$, đạt được tại $f=g$ (tỉ lệ tuyến tính). Vậy
> $$\|T\| = \|g\|_2 = \left(\int_0^1 x^2\,dx\right)^{1/2} = \frac{1}{\sqrt3}.$$



# Phép chiếu vuông góc

## Câu 4.6.14

> [!prob] 4.6.14
> Cho $H$ là một không gian Hilbert và cho $M$ là một không gian vectơ con của $H$. Chứng tỏ bao đóng $\overline{M}$ của $M$ là một không gian Hilbert.

> [!prf] Lời giải
> **$\overline{M}$ là không gian con:** với $x,y\in\overline{M}$, tồn tại dãy $(x_n),(y_n)\subset M$, $x_n\to x, y_n\to y$. Vì $M$ là không gian con, $\alpha x_n+\beta y_n \in M$ với mọi $\alpha,\beta$, và $\alpha x_n+\beta y_n \to \alpha x+\beta y$ (liên tục của phép cộng, nhân vô hướng). Vậy $\alpha x+\beta y \in \overline{M}$.
>
> **$\overline{M}$ đầy đủ:** $\overline{M}$ là tập con đóng của không gian mêtric đầy đủ $H$, do đó $\overline{M}$ (với mêtric cảm sinh) là đầy đủ (tính chất chuẩn: tập đóng trong không gian đầy đủ thì đầy đủ).
>
> $\overline{M}$ thừa hưởng tích trong từ $H$ (thu hẹp $\langle\cdot,\cdot\rangle$ xuống $\overline{M}$). Vậy $\overline{M}$ là không gian tích trong đầy đủ, tức là không gian Hilbert.



## Câu 4.6.15

> [!prob] 4.6.15
> Cho $H$ là một không gian tích trong và $M\subset H$. Chứng tỏ $M^\perp$ là một không gian vectơ con đóng của $H$.

> [!prf] Lời giải
> **Không gian con:** nếu $y_1,y_2\in M^\perp$, tức $\langle y_1,m\rangle=\langle y_2,m\rangle=0$ với mọi $m\in M$, thì $\langle \alpha y_1+\beta y_2,m\rangle = \alpha\langle y_1,m\rangle+\beta\langle y_2,m\rangle = 0$ với mọi $m\in M$, nên $\alpha y_1+\beta y_2 \in M^\perp$.
>
> **Đóng:** với mỗi $m\in M$ cố định, ánh xạ $T_m: H\to\mathbb{K}$, $y\mapsto\langle y,m\rangle$ liên tục (Cauchy–Schwarz: $|T_m(y)|\le\|m\|\|y\|$). Vậy $m^\perp := \ker T_m = T_m^{-1}(\{0\})$ đóng (ảnh ngược của tập đóng $\{0\}$ qua ánh xạ liên tục). Vì $M^\perp = \bigcap_{m\in M} m^\perp$ là giao của các tập đóng, $M^\perp$ đóng.



## Câu 4.6.16

> [!prob] 4.6.16
> Cho $M$ là một không gian con đóng của không gian Hilbert $H$ và $M\ne H$. Chứng tỏ $M^\perp \ne \{0\}$.

> [!prf] Lời giải
> Vì $M \ne H$, tồn tại $x_0 \in H\setminus M$. Vì $M$ đóng và lồi (không gian con), theo định lý phép chiếu, tồn tại $y=P_M(x_0)\in M$ sao cho $z:=x_0-y \perp M$.
>
> Nếu $z=0$ thì $x_0=y\in M$, mâu thuẫn giả thiết $x_0\notin M$. Vậy $z\ne0$, và $z\in M^\perp$ (vì $z\perp M$). Do đó $M^\perp \ne \{0\}$.



## Câu 4.6.17

> [!prob] 4.6.17
> Cho $H$ là một không gian tích trong và $x\in H$.
> (a) Chứng tỏ $x^\perp$ chính là nhân của phiếm hàm $y\mapsto T(y)=\langle y,x\rangle$, tức $x^\perp = \ker T = T^{-1}(\{0\})$.
> (b) Chứng tỏ $x^\perp$ là một không gian vectơ con đóng của $H$.
> (c) Cho $M\subset H$. Chứng tỏ $M^\perp = \bigcap_{x\in M} x^\perp$.
> (d) Suy ra $M^\perp$ là một không gian vectơ con đóng của $H$.
> (e) Chứng tỏ $M^\perp = (\overline{M})^\perp$.

> [!prf] Lời giải
> **(a)** $y\in x^\perp \iff \langle y,x\rangle = 0 \iff T(y)=0 \iff y\in\ker T$. Trực tiếp từ định nghĩa.
>
> **(b)** $T$ tuyến tính (theo biến thứ nhất của tích trong) và liên tục (Cauchy–Schwarz: $|T(y)|\le\|x\|\|y\|$, bị chặn). Vậy $\ker T$ là không gian con (nhân của ánh xạ tuyến tính) và đóng (ảnh ngược tập đóng $\{0\}$ qua ánh xạ liên tục $T$). Kết hợp (a), $x^\perp$ là không gian con đóng.
>
> **(c)** $y\in M^\perp \iff \forall x\in M, \langle y,x\rangle=0 \iff \forall x\in M, y\in x^\perp \iff y \in \bigcap_{x\in M} x^\perp$.
>
> **(d)** Theo (c), $M^\perp$ là giao của các không gian con đóng $x^\perp$ (từ (b)); giao của các không gian con là không gian con, giao của các tập đóng là tập đóng. Vậy $M^\perp$ là không gian con đóng.
>
> **(e)** Vì $M\subset\overline{M}$, mọi phiếm hàm triệt tiêu trên $\overline{M}$ cũng triệt tiêu trên $M$, nên $(\overline{M})^\perp \subset M^\perp$. Ngược lại, nếu $y\in M^\perp$ thì $y\perp M$; theo Bài 4.6.8, $y\perp\overline{M}$, tức $y\in(\overline{M})^\perp$. Vậy $M^\perp\subset(\overline{M})^\perp$. Kết hợp, $M^\perp = (\overline{M})^\perp$.



## Câu 4.6.18

> [!prob] 4.6.18
> Cho $H$ là một không gian Hilbert. Cho $\emptyset\ne M,N\subset H$. Điều nào sau đây là đúng?
> (a) $M^\perp \ne \emptyset$. (b) $M\subset N \Rightarrow M^\perp\subset N^\perp$. (c) $M\subset N \Rightarrow N^\perp\subset M^\perp$. (d) $M\subsetneq N \Rightarrow N^\perp\subsetneq M^\perp$. (e) $M^\perp = \overline{M}^\perp$. (f) $M^\perp = \langle M\rangle^\perp$.

> [!prf] Lời giải
> **(a) Đúng.** $0 \in M^\perp$ luôn luôn (vì $\langle 0,m\rangle=0$ với mọi $m$), nên $M^\perp$ không rỗng.
>
> **(b) Sai.** Bản chất bao hàm là ngược chiều — tập lớn hơn có phần bù trực giao nhỏ hơn (xem (c)). Phản ví dụ: $H\ne\{0\}$, $M=\{0\}\subset N=H$. $M^\perp=H$, $N^\perp=\{0\}$. $M\subset N$ nhưng $M^\perp=H\not\subset\{0\}=N^\perp$ (trừ khi $H=\{0\}$).
>
> **(c) Đúng.** Cho $y\in N^\perp$, tức $\langle y,n\rangle=0$ với mọi $n\in N$. Vì $M\subset N$, đặc biệt $\langle y,m\rangle=0$ với mọi $m\in M$, nên $y\in M^\perp$.
>
> **(d) Sai.** Bao hàm chặt của tập không suy ra bao hàm chặt của phần bù trực giao. Phản ví dụ: lấy $M=\{x_0\}$ (một điểm, $x_0\ne0$) và $N=\langle x_0\rangle$ (đường thẳng qua $x_0$). Rõ ràng $M\subsetneq N$ (vì $N$ chứa cả $2x_0\notin M$). Nhưng $M^\perp = x_0^\perp$ và $N^\perp = \langle x_0\rangle^\perp = x_0^\perp$ (trực giao với một vectơ tương đương trực giao với đường thẳng sinh bởi nó — xem (f)). Vậy $M^\perp = N^\perp$, không phải bao hàm chặt.
>
> **(e) Đúng.** Đây chính là Bài 4.6.17(e).
>
> **(f) Đúng.** "$\supseteq$": vì $M\subset\langle M\rangle$, theo (c), $\langle M\rangle^\perp \subset M^\perp$. "$\subseteq$": cho $y\in M^\perp$, với $x=\sum_i a_i m_i \in \langle M\rangle$ (tổ hợp tuyến tính hữu hạn, $m_i\in M$): $\langle y,x\rangle = \sum_i \bar a_i\langle y,m_i\rangle = 0$ (giả sử tích trong tuyến tính biến thứ nhất, phản tuyến tính biến hai — điều chỉnh dấu liên hợp theo quy ước, kết quả vẫn $=0$ vì mỗi $\langle y,m_i\rangle=0$). Vậy $y\perp\langle M\rangle$, $y\in\langle M\rangle^\perp$. Kết hợp, $M^\perp = \langle M\rangle^\perp$.



## Câu 4.6.19

> [!prob] 4.6.19
> Cho $M$ là một không gian vectơ con đóng của không gian Hilbert $H$. Chứng tỏ $x\perp M$ khi và chỉ khi $\|x\| = d(x,M)$. Kết quả này còn đúng không nếu bỏ giả thiết $M$ đóng?

> [!prf] Lời giải
> **($\Rightarrow$, $x\perp M \Rightarrow \|x\|=d(x,M)$; không cần $M$ đóng.)** Với mọi $m\in M$:
> $$\|x-m\|^2 = \|x\|^2 - 2\operatorname{Re}\langle x,m\rangle + \|m\|^2 = \|x\|^2+\|m\|^2 \ge \|x\|^2$$
> (vì $\langle x,m\rangle=0$), với đẳng thức khi $m=0\in M$. Vậy $d(x,M) = \inf_{m\in M}\|x-m\| = \|x\|$ (đạt tại $m=0$).
>
> **($\Leftarrow$, $\|x\|=d(x,M) \Rightarrow x\perp M$; không cần $M$ đóng.)** Giả thiết nói $m=0$ đạt cực tiểu $\|x-m\|$ trên $M$. Cho $m\in M$ bất kỳ, $m\ne0$, xét $\varphi(t)=\|x-tm\|^2$, $t\in\mathbb{R}$ — đây là hàm bậc hai theo $t$ với cực tiểu toàn cục tại $t=0$ (vì $tm\in M$ với mọi $t$, và $\varphi(0)=\|x\|^2=d(x,M)^2 \le \varphi(t)$ với mọi $t$). Khai triển: $\varphi(t) = \|x\|^2 - 2t\operatorname{Re}\langle x,m\rangle + t^2\|m\|^2$. Vì $\varphi$ đạt cực tiểu tại $t=0$, $\varphi'(0)=0$, tức $-2\operatorname{Re}\langle x,m\rangle=0$, nên $\operatorname{Re}\langle x,m\rangle=0$. Trên trường phức, lặp lại với $im$ thay $m$ cho $\operatorname{Im}\langle x,m\rangle=0$ (dùng $\langle x,im\rangle=-i\langle x,m\rangle$, phần thực của nó là phần ảo của $\langle x,m\rangle$). Vậy $\langle x,m\rangle=0$ với mọi $m\in M$, tức $x\perp M$.
>
> **Kết luận:** Cả hai chiều chứng minh trên **không sử dụng tính đóng của $M$** — chỉ dùng cấu trúc không gian con và tính chất cực trị. Vậy kết quả vẫn đúng nếu bỏ giả thiết $M$ đóng.



## Câu 4.6.20

> [!prob] 4.6.20
> Cho $M$ là một không gian vectơ con đóng của không gian Hilbert $H$. Chứng tỏ $M = (M^\perp)^\perp$. Kết quả này còn đúng không nếu bỏ giả thiết $M$ đóng?

> [!prf] Lời giải
> **$M \subset (M^\perp)^\perp$ (luôn đúng, không cần đóng).** Với $m\in M$: theo định nghĩa $M^\perp$, $\langle y,m\rangle=0$ với mọi $y\in M^\perp$, tức $m\perp M^\perp$, nên $m\in(M^\perp)^\perp$.
>
> **$(M^\perp)^\perp \subset M$ (cần $M$ đóng).** Cho $x\in(M^\perp)^\perp$. Vì $M$ là không gian con đóng, theo định lý phép chiếu, $x = m+z$ với $m=P_M(x)\in M$, $z=x-m\in M^\perp$ (phân tích trực giao duy nhất). Vì $x\in(M^\perp)^\perp$, $\langle x,z\rangle=0$ (do $z\in M^\perp$). Mặt khác
> $$\langle x,z\rangle = \langle m+z,z\rangle = \langle m,z\rangle + \|z\|^2 = 0+\|z\|^2$$
> (vì $m\in M, z\in M^\perp$ nên $\langle m,z\rangle=0$). Vậy $\|z\|^2=0$, $z=0$, nên $x=m\in M$.
>
> Kết hợp, $M = (M^\perp)^\perp$ khi $M$ đóng.
>
> **Không còn đúng nếu bỏ giả thiết $M$ đóng.** Phản ví dụ: trong $\ell^2$, lấy $M$ = tập các dãy chỉ có hữu hạn thành phần khác $0$. $M$ là không gian con trù mật trong $\ell^2$ nhưng $M \ne \ell^2$ (không đóng). Vì $M$ trù mật, nếu $y\perp M$ thì theo Bài 4.6.8, $y\perp\overline{M}=\ell^2$, đặc biệt $y\perp y$, nên $y=0$. Vậy $M^\perp=\{0\}$, suy ra $(M^\perp)^\perp = \{0\}^\perp = \ell^2 \ne M$. Tổng quát, khi $M$ không đóng, $(M^\perp)^\perp = \overline{M}$ chứ không phải $M$.



## Câu 4.6.21

> [!prob] 4.6.21
> Trong không gian Hilbert $H$, cho $a\ne0$. Chứng tỏ $d(x,a^\perp) = \dfrac{|\langle x,a\rangle|}{\|a\|}$. Ứng dụng: trong không gian Euclid $\mathbb{R}^3$, hãy tìm lại công thức khoảng cách từ một điểm $p=(x,y,z)$ tới một mặt phẳng $ax+by+cz=0$.

> [!prf] Lời giải
> $a^\perp$ là không gian con đóng (Bài 4.6.17b), và $H = a^\perp \oplus \langle a\rangle$ (phân tích trực giao: $a^\perp$ và $\langle a\rangle$ là bù trực giao của nhau khi $a\ne0$). Viết $x = z_0 + ta$ với $z_0\in a^\perp$, $t\in\mathbb{K}$. Lấy tích trong với $a$:
> $$\langle x,a\rangle = \langle z_0,a\rangle + t\|a\|^2 = 0 + t\|a\|^2,$$
> nên $t = \dfrac{\langle x,a\rangle}{\|a\|^2}$.
>
> Vì $x - z_0 = ta \in \langle a\rangle = (a^\perp)^\perp$, ta có $(x-z_0)\perp a^\perp$, nên $z_0$ chính là hình chiếu vuông góc $P_{a^\perp}(x)$. Theo định lý phép chiếu,
> $$d(x,a^\perp) = \|x-z_0\| = \|ta\| = |t|\,\|a\| = \frac{|\langle x,a\rangle|}{\|a\|^2}\cdot\|a\| = \frac{|\langle x,a\rangle|}{\|a\|}.$$
>
> **Ứng dụng.** Mặt phẳng $ax+by+cz=0$ qua gốc tọa độ chính là $n^\perp$ với $n=(a,b,c)$ là véctơ pháp tuyến. Theo công thức trên,
> $$d(p, \text{mặt phẳng}) = d(p,n^\perp) = \frac{|\langle p,n\rangle|}{\|n\|} = \frac{|ax+by+cz|}{\sqrt{a^2+b^2+c^2}},$$
> đúng công thức khoảng cách điểm–mặt phẳng cổ điển.



## Câu 4.6.22

> [!prob] 4.6.22
> Cho $M$ là một không gian con đóng của không gian Hilbert $H$. Cho $x\in H$. Chứng tỏ chiếu của $x$ xuống $M$ là duy nhất. Cụ thể hãy chứng tỏ nếu $y_1$ và $y_2$ thuộc $M$ thỏa $(x-y_1)\perp M$ và $(x-y_2)\perp M$ thì $y_1=y_2$.
> (a) Chứng tỏ $(y_1-y_2)\perp M$. (b) Chứng tỏ $(y_1-y_2)\perp(y_1-y_2)$. (c) Chứng tỏ $y_1-y_2=0$.

> [!prf] Lời giải
> **(a)** $M^\perp$ là không gian con (Bài 4.6.15). Vì $x-y_1, x-y_2 \in M^\perp$, hiệu của chúng cũng thuộc $M^\perp$: $(x-y_1)-(x-y_2) = y_2-y_1 \in M^\perp$, tức $y_1-y_2 = -(y_2-y_1) \in M^\perp$ (vì $M^\perp$ là không gian con), do đó $(y_1-y_2)\perp M$.
>
> **(b)** Vì $y_1,y_2\in M$ (giả thiết), $y_1-y_2 \in M$ (M là không gian con). Kết hợp (a): $(y_1-y_2)\perp M$ nghĩa là $y_1-y_2$ trực giao với **mọi** phần tử của $M$, đặc biệt trực giao với chính $y_1-y_2 \in M$. Vậy $(y_1-y_2)\perp(y_1-y_2)$.
>
> **(c)** Từ (b), $\|y_1-y_2\|^2 = \langle y_1-y_2,y_1-y_2\rangle = 0$ (vì vectơ trực giao với chính nó có chuẩn $0$), nên $y_1-y_2=0$, tức $y_1=y_2$.



## Câu 4.6.23

> [!prob] 4.6.23
> Chứng minh Mệnh đề 4.2.5 (định lý phép chiếu): Cho $H$ là không gian Hilbert, $C\subset H$ là tập lồi đóng khác rỗng. Với mọi $x\in H$, tồn tại duy nhất $y\in C$ sao cho $\|x-y\|=d(x,C)$.

> [!prf] Lời giải
> Đặt $d = d(x,C) = \inf_{c\in C}\|x-c\|$.
>
> **Tồn tại.** Lấy dãy cực tiểu hóa $(c_n)\subset C$, $\|x-c_n\|\to d$. Ta chứng minh $(c_n)$ là dãy Cauchy bằng đẳng thức hình bình hành: với $u=c_n-x, v=c_m-x$,
> $$\|u+v\|^2+\|u-v\|^2 = 2\|u\|^2+2\|v\|^2,$$
> tức
> $$\|c_n+c_m-2x\|^2 + \|c_n-c_m\|^2 = 2\|c_n-x\|^2+2\|c_m-x\|^2.$$
> Suy ra
> $$\|c_n-c_m\|^2 = 2\|c_n-x\|^2+2\|c_m-x\|^2 - 4\left\|\frac{c_n+c_m}{2}-x\right\|^2.$$
> Vì $C$ lồi, $\dfrac{c_n+c_m}{2}\in C$, nên $\left\|\dfrac{c_n+c_m}{2}-x\right\| \ge d$, do đó số hạng cuối $\le -4d^2$. Vậy
> $$\|c_n-c_m\|^2 \le 2\|c_n-x\|^2+2\|c_m-x\|^2 - 4d^2 \xrightarrow{n,m\to\infty} 2d^2+2d^2-4d^2=0.$$
> Vậy $(c_n)$ Cauchy trong $H$. Vì $H$ đầy đủ, $c_n \to y$ với $y\in H$; vì $C$ đóng và $(c_n)\subset C$, $y\in C$. Theo tính liên tục của chuẩn, $\|x-y\| = \lim\|x-c_n\| = d$.
>
> **Duy nhất.** Giả sử $y,y'\in C$ cùng đạt $\|x-y\|=\|x-y'\|=d$. Vì $C$ lồi, $\dfrac{y+y'}{2}\in C$, nên $\left\|x-\dfrac{y+y'}2\right\|\ge d$. Áp dụng đẳng thức hình bình hành như trên (với $c_n=y, c_m=y'$):
> $$\|y-y'\|^2 = 2\|y-x\|^2+2\|y'-x\|^2 - 4\left\|x-\frac{y+y'}2\right\|^2 \le 2d^2+2d^2-4d^2 = 0.$$
> Vậy $y=y'$.



## Câu 4.6.24

> [!prob] 4.6.24
> Với $n\in\mathbb{Z}^+$ cố định, gọi $M$ là tập tất cả các dãy số thực bằng $0$ từ phần tử thứ $(n+1)$ trở đi: $M=\{(x_1,\dots,x_n,0,0,\dots) \mid x_1,\dots,x_n\in\mathbb{R}\}$.
> (a) Kiểm $M$ là không gian vectơ con của $\ell^2$, xác định số chiều của $M$.
> (b) Chứng minh $M$ là một tập con đóng của $\ell^2$. Hỏi $M$ có là một không gian Hilbert không?
> (c) Xét $P_M: \ell^2\to M$, $x\mapsto(x_1,\dots,x_n,0,\dots)$.
> (d) Hãy kiểm với mọi $x\in\ell^2$ thì $(x-P_Mx)\perp M$.
> (e) Chứng tỏ $\|P_Mx\|\le\|x\|$.
> (f) Chứng tỏ $P_M$ là ánh xạ tuyến tính liên tục.
> (g) Hãy tìm không gian trực giao của $M$, tức $M^\perp$.
> (h) Hãy tìm $\operatorname{Im}P_M$ và $\ker P_M$.

> [!prf] Lời giải
> **(a)** $M$ đóng dưới phép cộng và nhân vô hướng (kiểm trực tiếp), là không gian con. $M$ có cơ sở $e_1,\dots,e_n$ (véctơ đơn vị thứ $i$), độc lập tuyến tính, sinh ra $M$. Vậy $\dim M = n$.
>
> **(b)** Không gian con hữu hạn chiều của không gian định chuẩn bất kỳ luôn đóng (và đầy đủ) — tính chất chuẩn. Vậy $M$ đóng trong $\ell^2$. Vì $M$ đóng trong $\ell^2$ (Hilbert), theo Bài 4.6.14, $M$ (với tích trong cảm sinh) là một không gian Hilbert; thực chất $M \cong \mathbb{R}^n$ với tích trong Euclid chuẩn.
>
> **(c)** $P_M$ giữ lại $n$ tọa độ đầu, gán các tọa độ còn lại thành $0$; hiển nhiên $P_M$ tuyến tính (thao tác tuyến tính theo từng thành phần).
>
> **(d)** Với $x=(x_1,x_2,\dots)$: $x-P_Mx = (0,\dots,0,x_{n+1},x_{n+2},\dots)$. Với $m=(m_1,\dots,m_n,0,\dots)\in M$ bất kỳ:
> $$\langle x-P_Mx, m\rangle = \sum_{i=1}^n 0\cdot m_i + \sum_{i>n} x_i\cdot 0 = 0.$$
> Vậy $(x-P_Mx)\perp M$, tức $P_M$ đúng là phép chiếu vuông góc xuống $M$.
>
> **(e)** $\|P_Mx\|^2 = \sum_{i=1}^n x_i^2 \le \sum_{i=1}^\infty x_i^2 = \|x\|^2$, nên $\|P_Mx\|\le\|x\|$.
>
> **(f)** Tuyến tính từ (c); liên tục từ (e) (bị chặn với $\|P_M\|\le1$, thực chất $\|P_M\|=1$ vì $P_M|_M = \operatorname{Id}_M$).
>
> **(g)** $M^\perp = \{y\in\ell^2 \mid y_1=\cdots=y_n=0\}$: theo Bài 4.6.17(c), $y\in M^\perp \iff \langle y,e_i\rangle=0$ với $i=1,\dots,n$ (vì $e_1,\dots,e_n$ sinh $M$, theo (f) của Bài 4.6.18) $\iff y_i=0$ với $i=1,\dots,n$.
>
> **(h)** $\operatorname{Im}P_M = M$ (ảnh của $P_M$ chính là tập tất cả các dãy có dạng $(x_1,\dots,x_n,0,\dots)$, trùng định nghĩa $M$). $\ker P_M = \{x\in\ell^2 \mid x_1=\cdots=x_n=0\} = M^\perp$ (theo (g)).



## Câu 4.6.25

> [!prob] 4.6.25
> Xét không gian Hilbert $L^2([0,1],\mathbb{R})$ trên trường thực. Cho $f(x)=x$ và $g(x)=x^2$, $0\le x\le1$.
> (a) Tính $\|f\|_{L^2}$ và $\|g\|_{L^2}$.
> (b) Tính $\langle f,g\rangle_{L^2}$.
> (c) Tính $P_gf$.
> (d) Tìm $h\in L^2([0,1],\mathbb{R})$ sao cho $h\ne0$ và $h\perp g$.

> [!prf] Lời giải
> **(a)** $\|f\|_{L^2}^2 = \int_0^1 x^2\,dx = \dfrac13$, nên $\|f\|_{L^2}=\dfrac1{\sqrt3}$. $\|g\|_{L^2}^2=\int_0^1 x^4\,dx=\dfrac15$, nên $\|g\|_{L^2}=\dfrac1{\sqrt5}$.
>
> **(b)** $\langle f,g\rangle_{L^2} = \int_0^1 x\cdot x^2\,dx = \int_0^1 x^3\,dx = \dfrac14$.
>
> **(c)** $P_gf$ là hình chiếu của $f$ lên không gian $1$ chiều $\langle g\rangle$:
> $$P_gf = \frac{\langle f,g\rangle}{\|g\|^2}g = \frac{1/4}{1/5}g = \frac54 g(x) = \frac54 x^2.$$
>
> **(d)** Chọn $h = f - P_gf = x - \dfrac54x^2$. Kiểm tra: $\langle h,g\rangle = \langle f,g\rangle - \langle P_gf,g\rangle = \dfrac14 - \dfrac54\cdot\dfrac15 = \dfrac14-\dfrac14=0$ (vì $\langle P_gf,g\rangle = \dfrac54\langle g,g\rangle = \dfrac54\cdot\dfrac15=\dfrac14$). Vậy $h\perp g$, và $h\not\equiv0$ (ví dụ $h(1)=1-5/4=-1/4\ne0$).



# Họ trực chuẩn

## Câu 4.6.26

> [!prob] 4.6.26
> Xét không gian Hilbert $H=L^2([0,1],\mathbb{R})$. Gọi $M$ là tập hợp tất cả các hàm hằng trên $[0,1]$.
> (a) Chứng tỏ $M$ là một không gian vectơ con của $H$.
> (b) Chứng tỏ $\{1\}$ là một cơ sở trực chuẩn của $M$.
> (c) Vì sao $M$ là không gian vectơ con đóng của $H$?
> (d) Cho hàm $f(x)=x$. Tìm $P_Mf$.

> [!prf] Lời giải
> **(a)** Tổng hai hàm hằng là hàm hằng, bội vô hướng của hàm hằng là hàm hằng; hàm hằng luôn thuộc $L^2[0,1]$ (bị chặn trên tập độ đo hữu hạn). Vậy $M$ là không gian con.
>
> **(b)** $M = \langle 1\rangle$ (mọi hàm hằng $c$ đều là $c\cdot 1$, hàm $1$ sinh ra $M$). $\|1\|_{L^2}^2 = \int_0^1 1\,dx = 1$, nên $\|1\|=1$. Vậy $\{1\}$ là tập sinh chuẩn hóa, do đó là cơ sở trực chuẩn của không gian $1$ chiều $M$.
>
> **(c)** $M$ hữu hạn chiều ($\dim M=1$), và không gian con hữu hạn chiều của không gian định chuẩn luôn đóng.
>
> **(d)** $P_Mf = \langle f,1\rangle\cdot1 = \left(\int_0^1 x\,dx\right)\cdot1 = \dfrac12$ (hàm hằng $\dfrac12$).



## Câu 4.6.27

> [!prob] 4.6.27
> Trong không gian Hilbert $L^2([0,1],\mathbb{R})$, cho $f(t)=t^2$.
> (a) Đặt $M=\left\{x\in L^2([0,1]) \mid \int_0^1 x(t)\,dt=0\right\}$. Chứng tỏ $M=\langle 1\rangle^\perp$.
> (b) Tìm hình chiếu của $f$ và khoảng cách từ $f$ tới $M$.

> [!prf] Lời giải
> **(a)** $x\in M \iff \int_0^1 x=0 \iff \langle x,1\rangle=0 \iff x\perp1 \iff x\in\{1\}^\perp$. Vì $\langle 1\rangle=M_{\text{const}}$ (Bài 4.6.26) và $\{1\}^\perp = \langle1\rangle^\perp$ (Bài 4.6.18f), ta có $M=\langle1\rangle^\perp$.
>
> **(b)** Vì $\langle1\rangle$ hữu hạn chiều (đóng) với cơ sở trực chuẩn $\{1\}$, và $H=\langle1\rangle\oplus M$ (phân tích trực giao), ta có
> $$P_Mf = f - P_{\langle1\rangle}f = f - \langle f,1\rangle\cdot1.$$
> Tính $\langle f,1\rangle = \int_0^1 t^2\,dt = \dfrac13$. Vậy
> $$P_Mf(t) = t^2 - \frac13.$$
> Khoảng cách: $d(f,M) = \|f-P_Mf\| = \|P_{\langle1\rangle}f\| = |\langle f,1\rangle|\cdot\|1\| = \dfrac13$.



## Câu 4.6.28

> [!prob] 4.6.28
> Trong không gian Hilbert $L^2([0,1],\mathbb{R})$ hãy tìm một cơ sở trực chuẩn cho không gian vectơ con sinh bởi các hàm $1,t,t^2$.

> [!prf] Lời giải
> Dùng thủ tục Gram–Schmidt trên $u_1=1, u_2=t, u_3=t^2$.
>
> **Bước 1:** $\|u_1\|^2 = \int_0^1 1\,dt = 1$. Đặt $e_1 = 1$.
>
> **Bước 2:** $v_2 = t - \langle t,e_1\rangle e_1 = t - \int_0^1 t\,dt = t-\frac12$.
> $$\|v_2\|^2 = \int_0^1\left(t-\frac12\right)^2dt = \frac13-\frac12+\frac14 = \frac1{12}, \quad \|v_2\| = \frac{1}{2\sqrt3}.$$
> $e_2 = 2\sqrt3\left(t-\dfrac12\right)$.
>
> **Bước 3:** $\langle t^2,e_1\rangle = \int_0^1 t^2\,dt = \dfrac13$; $\langle t^2,e_2\rangle = 2\sqrt3\int_0^1 t^2\left(t-\dfrac12\right)dt = 2\sqrt3\left(\dfrac14-\dfrac16\right) = 2\sqrt3\cdot\dfrac1{12} = \dfrac{\sqrt3}{6}$.
> $$v_3 = t^2 - \frac13\cdot1 - \frac{\sqrt3}{6}\cdot2\sqrt3\left(t-\frac12\right) = t^2-\frac13 - \left(t-\frac12\right) = t^2-t+\frac16.$$
> Tính $\|v_3\|^2$: khai triển $\left(t^2-t+\dfrac16\right)^2 = t^4-2t^3+\dfrac43t^2-\dfrac13t+\dfrac1{36}$, tích phân trên $[0,1]$:
> $$\frac15-\frac12+\frac49-\frac16+\frac1{36} = \frac{36-90+80-30+5}{180} = \frac1{180}.$$
> $\|v_3\|=\dfrac1{6\sqrt5}$, $e_3 = 6\sqrt5\left(t^2-t+\dfrac16\right) = \sqrt5(6t^2-6t+1)$.
>
> **Cơ sở trực chuẩn:**
> $$\left\{1,\ 2\sqrt3\left(t-\frac12\right),\ \sqrt5(6t^2-6t+1)\right\}.$$
> (Đây chính là các đa thức Legendre chuẩn hóa trên $[0,1]$.)



## Câu 4.6.29

> [!prob] 4.6.29
> Trong không gian Hilbert $L^2([0,1],\mathbb{R})$ cho $f(t)=t^3$. Tìm hình chiếu của $f$ và khoảng cách từ $f$ tới các không gian vectơ con $M$ với $M$ là tập hợp các đa thức có bậc nhỏ hơn hay bằng $1$.

> [!prf] Lời giải
> $M = \operatorname{span}\{1,t\}$, có cơ sở trực chuẩn $e_1=1, e_2=2\sqrt3\left(t-\dfrac12\right)$ (từ Bài 4.6.28).
>
> Tính $\langle f,e_1\rangle = \int_0^1 t^3\,dt = \dfrac14$.
>
> $\langle f,e_2\rangle = 2\sqrt3\int_0^1 t^3\left(t-\dfrac12\right)dt = 2\sqrt3\left(\dfrac15-\dfrac18\right) = 2\sqrt3\cdot\dfrac3{40} = \dfrac{3\sqrt3}{20}$.
>
> $$P_Mf = \langle f,e_1\rangle e_1 + \langle f,e_2\rangle e_2 = \frac14 + \frac{3\sqrt3}{20}\cdot2\sqrt3\left(t-\frac12\right) = \frac14 + \frac9{10}\left(t-\frac12\right) = \frac9{10}t - \frac15.$$
>
> **Khoảng cách:** dùng định lý Pythagoras $\|f\|^2 = \|P_Mf\|^2 + d(f,M)^2$.
> $$\|f\|^2 = \int_0^1 t^6\,dt = \frac17.$$
> $$\|P_Mf\|^2 = \langle f,e_1\rangle^2+\langle f,e_2\rangle^2 = \left(\frac14\right)^2+\left(\frac{3\sqrt3}{20}\right)^2 = \frac1{16}+\frac{27}{400} = \frac{25}{400}+\frac{27}{400}=\frac{52}{400}=\frac{13}{100}.$$
> $$d(f,M)^2 = \frac17 - \frac{13}{100} = \frac{100-91}{700} = \frac9{700}, \qquad d(f,M) = \frac{3}{\sqrt{700}} = \frac{3\sqrt7}{70}.$$



## Câu 4.6.30

> [!prob] 4.6.30
> Trong không gian Hilbert $L^2([0,1],\mathbb{R})$:
> (a) Chứng minh rằng họ $E=\{1,\sin2\pi x,\cos4\pi x\}$ là một họ trực giao.
> (b) Hãy trực chuẩn hóa họ $E$.
> (c) Gọi $M$ là không gian tuyến tính sinh bởi họ $E$ trên, hãy tìm chiếu $P_Mf$ với $f(x)=x$.

> [!prf] Lời giải
> **(a)** $\langle1,\sin2\pi x\rangle = \int_0^1\sin2\pi x\,dx = 0$ (một chu kỳ đầy đủ). $\langle1,\cos4\pi x\rangle=\int_0^1\cos4\pi x\,dx=0$ (hai chu kỳ đầy đủ). Với tích $\langle\sin2\pi x,\cos4\pi x\rangle$: dùng $\sin A\cos B = \frac12[\sin(A+B)+\sin(A-B)]$,
> $$\int_0^1\sin2\pi x\cos4\pi x\,dx = \frac12\int_0^1[\sin6\pi x - \sin2\pi x]\,dx = 0$$
> (cả hai đều tích phân chu kỳ đầy đủ bằng $0$). Vậy $E$ trực giao.
>
> **(b)** $\|1\|^2=1$. $\|\sin2\pi x\|^2 = \int_0^1\sin^22\pi x\,dx = \dfrac12$ (trung bình bình phương sin qua chu kỳ), $\|\sin2\pi x\| = \dfrac1{\sqrt2}$. Tương tự $\|\cos4\pi x\|=\dfrac1{\sqrt2}$.
> $$\text{Trực chuẩn hóa: } \left\{1,\ \sqrt2\sin2\pi x,\ \sqrt2\cos4\pi x\right\}.$$
>
> **(c)** $\langle f,1\rangle = \int_0^1 x\,dx = \dfrac12$.
>
> $\langle f,\sin2\pi x\rangle = \int_0^1 x\sin2\pi x\,dx = -\dfrac1{2\pi}$ (tính bằng nguyên hàm từng phần).
>
> $\langle f,\cos4\pi x\rangle = \int_0^1 x\cos4\pi x\,dx = 0$ (tính tương tự, giá trị biên triệt tiêu).
>
> $$P_Mf = \langle f,1\rangle\cdot1 + \langle f,\sqrt2\sin2\pi x\rangle\cdot\sqrt2\sin2\pi x + \langle f,\sqrt2\cos4\pi x\rangle\cdot\sqrt2\cos4\pi x.$$
> Với $\langle f,\sqrt2\sin2\pi x\rangle = \sqrt2\left(-\dfrac1{2\pi}\right) = -\dfrac1{\sqrt2\pi}$, số hạng thứ hai là $\left(-\dfrac1{\sqrt2\pi}\right)\sqrt2\sin2\pi x = -\dfrac1\pi\sin2\pi x$. Số hạng thứ ba $=0$.
> $$P_Mf(x) = \frac12 - \frac1\pi\sin2\pi x.$$



## Câu 4.6.31

> [!prob] 4.6.31
> Trong không gian Hilbert $L^2([0,2\pi],\mathbb{R})$:
> (a) Hãy trực chuẩn hóa họ $E=\{\cos,\sin\}$.
> (b) Tìm chiếu của hàm $f(x) = 2025+x$ lên không gian tuyến tính sinh bởi $E$.

> [!prf] Lời giải
> **(a)** $\langle\cos,\sin\rangle = \int_0^{2\pi}\cos x\sin x\,dx = \dfrac12\int_0^{2\pi}\sin2x\,dx=0$: đã trực giao. $\|\cos\|^2 = \int_0^{2\pi}\cos^2x\,dx = \pi$, $\|\cos\|=\sqrt\pi$; tương tự $\|\sin\|=\sqrt\pi$.
> $$\text{Trực chuẩn hóa: } \left\{\frac{\cos x}{\sqrt\pi}, \frac{\sin x}{\sqrt\pi}\right\}.$$
>
> **(b)** $\langle f,\cos\rangle = \int_0^{2\pi}(2025+x)\cos x\,dx = 2025\int_0^{2\pi}\cos x\,dx + \int_0^{2\pi}x\cos x\,dx = 0+0=0$ (cả hai tích phân triệt tiêu qua chu kỳ đầy đủ và tích phân từng phần).
>
> $\langle f,\sin\rangle = 2025\int_0^{2\pi}\sin x\,dx + \int_0^{2\pi}x\sin x\,dx = 0 + \left(-2\pi\cos2\pi\right) = -2\pi$
> (tính $\int_0^{2\pi}x\sin x\,dx = [-x\cos x]_0^{2\pi}+\int_0^{2\pi}\cos x\,dx = -2\pi+0=-2\pi$).
>
> Chiếu:
> $$P_Mf = \frac{\langle f,\cos\rangle}{\|\cos\|^2}\cos x + \frac{\langle f,\sin\rangle}{\|\sin\|^2}\sin x = 0 + \frac{-2\pi}{\pi}\sin x = -2\sin x.$$



## Câu 4.6.32

> [!prob] 4.6.32
> Trong không gian Hilbert $L^2([0,2\pi],\mathbb{R})$:
> (a) Hãy trực chuẩn hóa họ $E=\{1,\cos x,\cos2x\}$.
> (b) Gọi $M$ là không gian tuyến tính sinh bởi họ $E$ trên, hãy tìm chiếu $P_Mf$ với $f(x)=2025-x$.

> [!prf] Lời giải
> **(a)** Kiểm trực giao: $\langle1,\cos x\rangle=\int_0^{2\pi}\cos x\,dx=0$; $\langle1,\cos2x\rangle=0$ tương tự; $\langle\cos x,\cos2x\rangle = \frac12\int_0^{2\pi}[\cos3x+\cos x]\,dx=0$ (cả hai tích phân chu kỳ đầy đủ). Vậy $E$ trực giao.
>
> Chuẩn: $\|1\|^2 = 2\pi$, $\|1\|=\sqrt{2\pi}$; $\|\cos x\|^2 = \pi$, $\|\cos x\|=\sqrt\pi$; tương tự $\|\cos2x\|=\sqrt\pi$.
> $$\text{Trực chuẩn hóa: } \left\{\frac1{\sqrt{2\pi}},\ \frac{\cos x}{\sqrt\pi},\ \frac{\cos2x}{\sqrt\pi}\right\}.$$
>
> **(b)** $\langle f,1\rangle = \int_0^{2\pi}(2025-x)\,dx = 2025\cdot2\pi - 2\pi^2 = 2\pi(2025-\pi)$.
>
> $\langle f,\cos x\rangle = 2025\int_0^{2\pi}\cos x\,dx - \int_0^{2\pi}x\cos x\,dx = 0-0=0$ (tích phân $\int_0^{2\pi}x\cos x\,dx=0$ qua tính từng phần).
>
> $\langle f,\cos2x\rangle = 2025\int_0^{2\pi}\cos2x\,dx - \int_0^{2\pi}x\cos2x\,dx = 0-0=0$ (tương tự).
>
> $$P_Mf = \frac{\langle f,1\rangle}{\|1\|^2}\cdot1 = \frac{2\pi(2025-\pi)}{2\pi} = 2025-\pi.$$
> (Kết quả hợp lý: thành phần dao động $-x$ triệt tiêu trên $\cos x,\cos2x$, chỉ đóng góp vào trung bình: trung bình của $-x$ trên $[0,2\pi]$ là $-\pi$.)



## Câu 4.6.33

> [!prob] 4.6.33
> Trên $L^2([0,2\pi],\mathbb{R})$, với $n\in\mathbb{Z}^+$, đặt $e_n(t)=\dfrac1{\sqrt\pi}\cos(nt)$, $f_n(t)=\dfrac1{\sqrt\pi}\sin(nt)$. Hãy kiểm bằng tính toán trực tiếp rằng họ $\left\{\dfrac1{\sqrt{2\pi}}, e_n, f_n \mid n\in\mathbb{Z}^+\right\}$ là một họ trực chuẩn trong $L^2([0,2\pi],\mathbb{R})$.

> [!prf] Lời giải
> Dùng các công thức tích thành tổng cơ bản và tính chu kỳ.
>
> **Chuẩn hóa:** $\left\|\dfrac1{\sqrt{2\pi}}\right\|^2 = \dfrac1{2\pi}\int_0^{2\pi}1\,dt = 1$. $\|e_n\|^2 = \dfrac1\pi\int_0^{2\pi}\cos^2(nt)\,dt = \dfrac1\pi\cdot\pi=1$ (dùng $\int_0^{2\pi}\cos^2(nt)\,dt=\pi$ với $n\ge1$ nguyên). Tương tự $\|f_n\|^2=1$.
>
> **Trực giao giữa hằng số và $e_n, f_n$:** $\left\langle\dfrac1{\sqrt{2\pi}},e_n\right\rangle = \dfrac1{\sqrt{2\pi\pi}}\int_0^{2\pi}\cos(nt)\,dt = 0$ (chu kỳ đầy đủ, $n\ge1$). Tương tự với $f_n$.
>
> **Trực giao $e_n \perp e_m$ ($n\ne m$):** dùng $\cos(nt)\cos(mt) = \frac12[\cos((n-m)t)+\cos((n+m)t)]$,
> $$\langle e_n,e_m\rangle = \frac1{2\pi}\int_0^{2\pi}[\cos((n-m)t)+\cos((n+m)t)]\,dt = 0$$
> vì $n-m, n+m$ là các số nguyên khác $0$, mỗi tích phân là một số nguyên lần chu kỳ đầy đủ.
>
> **Trực giao $f_n\perp f_m$ ($n\ne m$):** tương tự với $\sin(nt)\sin(mt)=\frac12[\cos((n-m)t)-\cos((n+m)t)]$, cũng cho $0$.
>
> **Trực giao $e_n\perp f_m$ (mọi $n,m$, kể cả $n=m$):** dùng $\cos(nt)\sin(mt) = \frac12[\sin((n+m)t)+\sin((m-n)t)]$,
> $$\langle e_n,f_m\rangle = \frac1{2\pi}\int_0^{2\pi}[\sin((n+m)t)+\sin((m-n)t)]\,dt = 0$$
> (mỗi số hạng là $\sin$ của bội nguyên $t$, kể cả khi $m=n$ thì $\sin(0\cdot t)=0$ triệt tiêu, còn $\sin((n+m)t)$ tích phân chu kỳ đầy đủ $=0$).
>
> Vậy toàn bộ họ là trực chuẩn.



## Câu 4.6.34

> [!prob] 4.6.34
> Cho $(a_1,\dots,a_n)$ là một cơ sở tuyến tính của $\mathbb{R}^n$ và $\alpha_1,\dots,\alpha_n$ là $n$ số thực dương. Với mọi $x=\sum_{i=1}^n x_ia_i$ và $y=\sum_{i=1}^n y_ia_i$ trong $\mathbb{R}^n$ ta đặt $f(x,y) = \sum_{i=1}^n \alpha_ix_iy_i$. Chứng minh $f$ là một tích vô hướng trên $\mathbb{R}^n$, với tích vô hướng này thì $\mathbb{R}^n$ là một không gian Hilbert, $(a_1,\dots,a_n)$ là một họ trực giao, và $(\alpha_1^{-1/2}a_1,\dots,\alpha_n^{-1/2}a_n)$ là một họ trực chuẩn.

> [!prf] Lời giải
> **$f$ là tích trong.** Vì $x\mapsto x_i$ (tọa độ theo cơ sở cố định) là ánh xạ tuyến tính, $f$ song tuyến tính (tuyến tính theo mỗi biến $x,y$). Đối xứng: $f(x,y)=\sum\alpha_ix_iy_i = \sum\alpha_iy_ix_i = f(y,x)$. Xác định dương: $f(x,x) = \sum\alpha_ix_i^2 \ge 0$ (vì $\alpha_i>0$), và $f(x,x)=0 \iff x_i=0$ với mọi $i$ (vì $\alpha_i>0$) $\iff x=0$. Vậy $f$ là tích trong.
>
> **$\mathbb{R}^n$ là không gian Hilbert.** $\mathbb{R}^n$ hữu hạn chiều nên mọi chuẩn trên đó tương đương và đầy đủ; với tích trong $f$, không gian tích trong hữu hạn chiều luôn đầy đủ, do đó là không gian Hilbert.
>
> **$(a_1,\dots,a_n)$ trực giao.** Tọa độ của $a_i$ trong cơ sở $(a_1,\dots,a_n)$ là $(0,\dots,1,\dots,0)$ (số $1$ ở vị trí $i$). Vậy
> $$f(a_i,a_j) = \sum_{k=1}^n \alpha_k\cdot[\text{tọa độ }k\text{ của }a_i]\cdot[\text{tọa độ }k\text{ của }a_j] = \alpha_i\,\delta_{ij}$$
> (chỉ số hạng $k=i$ có thể khác $0$ nếu đồng thời $k=j$, tức $i=j$). Với $i\ne j$, $f(a_i,a_j)=0$: trực giao.
>
> **$(\alpha_1^{-1/2}a_1,\dots,\alpha_n^{-1/2}a_n)$ trực chuẩn.**
> $$f(\alpha_i^{-1/2}a_i,\alpha_j^{-1/2}a_j) = \alpha_i^{-1/2}\alpha_j^{-1/2}f(a_i,a_j) = \alpha_i^{-1/2}\alpha_j^{-1/2}\alpha_i\delta_{ij}.$$
> Với $i=j$: $= \alpha_i^{-1}\alpha_i = 1$. Với $i\ne j$: $=0$. Vậy họ này trực chuẩn.



## Câu 4.6.35

> [!prob] 4.6.35
> Cho $(e_i)_{i=1,\dots,n}$ là một họ trực chuẩn trong một không gian tích trong $H$ và một họ $(c_i)_{i=1,\dots,n}$ trong $\mathbb{K}$. Chứng minh $\left\|\sum_{i=1}^n c_ie_i\right\|^2 = \sum_{i=1}^n |c_i|^2$.

> [!prf] Lời giải
> Khai triển trực tiếp:
> $$\left\|\sum_{i=1}^n c_ie_i\right\|^2 = \left\langle\sum_{i=1}^n c_ie_i, \sum_{j=1}^n c_je_j\right\rangle = \sum_{i=1}^n\sum_{j=1}^n c_i\bar c_j\langle e_i,e_j\rangle.$$
> Vì $\langle e_i,e_j\rangle = \delta_{ij}$, chỉ các số hạng $i=j$ sống sót:
> $$= \sum_{i=1}^n c_i\bar c_i\cdot1 = \sum_{i=1}^n |c_i|^2.$$



## Câu 4.6.36

> [!prob] 4.6.36
> Chứng tỏ trong một không gian tích trong thì một họ trực giao bất kì là một họ độc lập tuyến tính.

> [!prf] Lời giải
> Cho $(e_i)_{i\in I}$ là họ trực giao (các véctơ khác không, đôi một trực giao). Giả sử $\sum_{k=1}^m c_{i_k}e_{i_k} = 0$ là một tổ hợp tuyến tính hữu hạn bằng $0$ (với các chỉ số $i_1,\dots,i_m$ phân biệt trong $I$). Với mỗi $j\in\{1,\dots,m\}$, lấy tích trong hai vế với $e_{i_j}$:
> $$0 = \left\langle\sum_{k=1}^m c_{i_k}e_{i_k}, e_{i_j}\right\rangle = \sum_{k=1}^m c_{i_k}\langle e_{i_k},e_{i_j}\rangle = c_{i_j}\|e_{i_j}\|^2$$
> (các số hạng $k\ne j$ triệt tiêu do trực giao). Vì $e_{i_j}\ne0$, $\|e_{i_j}\|^2\ne0$, nên $c_{i_j}=0$. Điều này đúng với mọi $j$, vậy tất cả hệ số bằng $0$: họ $(e_i)$ độc lập tuyến tính.



## Câu 4.6.37

> [!prob] 4.6.37
> Trong $\ell^2$ xét họ $E=(e_n)_{n\in\mathbb{Z}^+}$ các véctơ $e_n=(0,\dots,0,1,0,\dots)$, số $1$ ở tọa độ thứ $n$ của $e_n$. Cho $x=\left(1,\dfrac1{2^2},\dfrac1{3^2},\dots,\dfrac1{n^2},\dots\right)$.
> (a) Kiểm $E$ là một họ trực chuẩn của $\ell^2$.
> (b) Kiểm $x\in\ell^2$.
> (c) Kiểm $x = \sum_{n=1}^\infty \langle x,e_n\rangle e_n$.
> (d) Giải thích vì sao $x$ không phải là một tổ hợp tuyến tính của hữu hạn phần tử trong $E$, nhưng là giới hạn của một dãy các phần tử là tổ hợp tuyến tính của hữu hạn phần tử trong $E$.

> [!prf] Lời giải
> **(a)** $\langle e_n,e_m\rangle = \delta_{nm}$ (tọa độ thứ $n$ của $e_n$ là $1$, các tọa độ khác $0$, kiểm trực tiếp theo định nghĩa tích trong $\ell^2$). $\|e_n\|=1$ với mọi $n$. Vậy $E$ trực chuẩn.
>
> **(b)** $\sum_{n=1}^\infty\left(\dfrac1{n^2}\right)^2 = \sum_{n=1}^\infty\dfrac1{n^4} = \dfrac{\pi^4}{90} < \infty$, nên $x\in\ell^2$.
>
> **(c)** $\langle x,e_n\rangle = x_n = \dfrac1{n^2}$ (tọa độ thứ $n$ của $x$). Vậy chuỗi $\sum_n\langle x,e_n\rangle e_n = \sum_n \dfrac1{n^2}e_n$ chính là định nghĩa của $x$ như một dãy số theo cơ sở chuẩn; chuỗi này hội tụ trong $\ell^2$ (theo (b) và tính đầy đủ của $(e_n)$) về đúng $x$.
>
> **(d)** $x$ có **vô hạn** tọa độ khác $0$ ($1/n^2 \ne 0$ với mọi $n$), nên không thể viết $x$ dưới dạng tổ hợp tuyến tính của một số hữu hạn các $e_n$ (mỗi tổ hợp như vậy chỉ có hữu hạn tọa độ khác $0$).
>
> Tuy nhiên, xét dãy tổng riêng $s_N = \sum_{n=1}^N \dfrac1{n^2}e_n$ — mỗi $s_N$ là tổ hợp tuyến tính hữu hạn của các phần tử trong $E$. Ta có
> $$\|x-s_N\|^2 = \sum_{n=N+1}^\infty \frac1{n^4} \xrightarrow{N\to\infty} 0$$
> (phần dư của chuỗi hội tụ $\sum1/n^4$). Vậy $s_N \to x$ trong $\ell^2$: $x$ là **giới hạn** của dãy tổ hợp tuyến tính hữu hạn của $E$, dù bản thân không phải một tổ hợp như vậy.



## Câu 4.6.38

> [!prob] 4.6.38
> Cho $(e_n)_{n\in\mathbb{Z}^+}$ là một họ trực chuẩn trong một không gian Hilbert $H$ và $(c_n)_{n\in\mathbb{Z}^+}\in\ell^2$. Chứng minh:
> (a) Chuỗi $\sum_{n=1}^\infty c_ne_n$ hội tụ trong $H$.
> (b) $\left\|\sum_{n=1}^\infty c_ne_n\right\|^2 = \sum_{n=1}^\infty |c_n|^2$.

> [!prf] Lời giải
> **(a)** Đặt $s_N = \sum_{n=1}^N c_ne_n$. Với $M>N$, theo Bài 4.6.35 (áp dụng cho hiệu $s_M-s_N = \sum_{n=N+1}^M c_ne_n$):
> $$\|s_M-s_N\|^2 = \sum_{n=N+1}^M |c_n|^2.$$
> Vì $(c_n)\in\ell^2$, chuỗi $\sum|c_n|^2$ hội tụ, nên phần dư $\sum_{n=N+1}^M|c_n|^2 \to 0$ khi $N,M\to\infty$. Vậy $(s_N)$ là dãy Cauchy trong $H$. Vì $H$ đầy đủ (Hilbert), $(s_N)$ hội tụ, tức chuỗi $\sum_{n=1}^\infty c_ne_n$ hội tụ trong $H$.
>
> **(b)** Theo tính liên tục của chuẩn (chuẩn là ánh xạ liên tục) và Bài 4.6.35 (phiên bản hữu hạn):
> $$\left\|\sum_{n=1}^\infty c_ne_n\right\|^2 = \lim_{N\to\infty}\|s_N\|^2 = \lim_{N\to\infty}\sum_{n=1}^N|c_n|^2 = \sum_{n=1}^\infty|c_n|^2.$$



## Câu 4.6.39

> [!prob] 4.6.39
> Cho $(e_n)_{n\in\mathbb{Z}^+}$ là một họ trực chuẩn trong một không gian Hilbert $H$. Chứng tỏ với mọi $x\in H$:
> (a) $\sum_{n=1}^\infty |\langle x,e_n\rangle|^2 \le \|x\|^2$.
> (b) $\lim_{n\to\infty} \langle x,e_n\rangle = 0$.

> [!prf] Lời giải
> **(a)** Với mỗi $N$, đặt $s_N = \sum_{n=1}^N \langle x,e_n\rangle e_n$ (hình chiếu của $x$ lên $\operatorname{span}\{e_1,\dots,e_N\}$). Với mỗi $k\le N$:
> $$\langle x-s_N,e_k\rangle = \langle x,e_k\rangle - \sum_{n=1}^N\langle x,e_n\rangle\langle e_n,e_k\rangle = \langle x,e_k\rangle - \langle x,e_k\rangle = 0,$$
> nên $(x-s_N) \perp \operatorname{span}\{e_1,\dots,e_N\}$, đặc biệt $(x-s_N)\perp s_N$. Theo định lý Pythagoras (Bài 4.6.2 dạng thực, hoặc trực tiếp):
> $$\|x\|^2 = \|(x-s_N)+s_N\|^2 = \|x-s_N\|^2 + \|s_N\|^2 \ge \|s_N\|^2 = \sum_{n=1}^N |\langle x,e_n\rangle|^2$$
> (dùng Bài 4.6.35 cho $\|s_N\|^2$). Vậy $\sum_{n=1}^N|\langle x,e_n\rangle|^2 \le \|x\|^2$ với mọi $N$; cho $N\to\infty$:
> $$\sum_{n=1}^\infty |\langle x,e_n\rangle|^2 \le \|x\|^2.$$
>
> **(b)** Từ (a), chuỗi $\sum_n |\langle x,e_n\rangle|^2$ hội tụ (bị chặn bởi $\|x\|^2$). Điều kiện cần để một chuỗi hội tụ là số hạng tổng quát dần về $0$: $|\langle x,e_n\rangle|^2 \to 0$, nên $\langle x,e_n\rangle \to 0$.



## Câu 4.6.40

> [!prob] 4.6.40
> Giả sử $E$ là một họ trực chuẩn cực đại trong không gian Hilbert $H$, và $x,y\in H$. Chứng tỏ nếu $\forall e\in E, \langle x,e\rangle=\langle y,e\rangle$ thì $x=y$.

> [!prf] Lời giải
> Đặt $z = x-y$. Theo giả thiết, với mọi $e\in E$: $\langle z,e\rangle = \langle x,e\rangle-\langle y,e\rangle = 0$, tức $z\perp E$, tức $z\in E^\perp$.
>
> Ta chứng minh $E^\perp = \{0\}$ (dùng tính **cực đại** của $E$). Giả sử phản chứng $z\ne0$. Đặt $e_0 = z/\|z\|$; vì $z\perp E$ nên $e_0\perp E$, và $\|e_0\|=1$. Khi đó $E\cup\{e_0\}$ là một họ trực chuẩn (kiểm: $e_0$ trực giao với mọi phần tử của $E$, tự trực giao với chính nó theo nghĩa chuẩn hóa) **chứa chặt** $E$ (vì $e_0\notin E$: nếu $e_0\in E$ thì $\langle e_0,e_0\rangle=1$ nhưng cũng $e_0\perp E \ni e_0$ nên $\langle e_0,e_0\rangle=0$, mâu thuẫn). Điều này mâu thuẫn với tính cực đại của $E$.
>
> Vậy $z=0$, tức $x=y$.



## Câu 4.6.41

> [!prob] 4.6.41
> Trong không gian định chuẩn $\ell^2$ gọi $e_1=(1,0,\dots)$, $e_2=(0,1,0,\dots)$. Chứng tỏ tồn tại một phiếm hàm tuyến tính liên tục $f$ trên $\ell^2$ sao cho $f(e_1)=1$ và $f(e_2)=0$, bằng một trong hai cách sau:
> (a) Dùng Định lý Hahn–Banach.
> (b) Xét phiếm hàm tuyến tính trong không gian tích trong đại diện bởi $e_1$.

> [!prf] Lời giải
> **(a) Dùng Hahn–Banach.** Đặt $M = \operatorname{span}\{e_1,e_2\}$, không gian con hữu hạn chiều ($2$ chiều) của $\ell^2$. Định nghĩa $g: M\to\mathbb{R}$ tuyến tính bởi $g(ae_1+be_2) = a$ (định nghĩa hợp lệ vì $e_1,e_2$ độc lập tuyến tính, là cơ sở của $M$). Vì $M$ hữu hạn chiều, $g$ tự động liên tục (mọi phiếm hàm tuyến tính trên không gian định chuẩn hữu hạn chiều đều bị chặn), $g\in M^*$. Theo Hệ quả 1 của Hahn–Banach, tồn tại mở rộng $f\in(\ell^2)^*$ với $f|_M = g$. Đặc biệt $f(e_1) = g(e_1) = 1$, $f(e_2)=g(e_2)=0$, và $f$ liên tục trên toàn $\ell^2$.
>
> **(b) Dùng tích trong.** Xét $f(x) = \langle x,e_1\rangle_{\ell^2} = x_1$ (phép chiếu tọa độ đầu tiên). $f$ tuyến tính (từ tính tuyến tính của tích trong theo biến thứ nhất) và liên tục (Cauchy–Schwarz: $|f(x)| = |\langle x,e_1\rangle| \le \|x\|_2\|e_1\|_2 = \|x\|_2$, bị chặn). Kiểm tra:
> $$f(e_1) = \langle e_1,e_1\rangle = 1, \qquad f(e_2) = \langle e_2,e_1\rangle = 0.$$
> Vậy $f$ thỏa mãn yêu cầu — cách này ngắn gọn hơn nhiều vì tận dụng cấu trúc Hilbert cụ thể của $\ell^2$ thay vì mở rộng trừu tượng.



## Câu 4.6.42

> [!prob] 4.6.42
> Cho $H$ là một không gian Hilbert và $(e_n)_{n\in\mathbb{Z}^+}$ là một dãy trực chuẩn trên $H$. Đặt $M = \langle(e_n)_{n\in\mathbb{Z}^+}\rangle$ là bao tuyến tính của tập $(e_n)_{n\in\mathbb{Z}^+}$, tức là không gian vectơ con của $H$ gồm tất cả các tổ hợp tuyến tính của các phần tử của tập $(e_n)_{n\in\mathbb{Z}^+}$.
> (a) Chứng minh rằng với mọi $x\in H$, thì $x\in\overline{M}$ khi và chỉ khi $x = \sum_{k=1}^\infty \langle x,e_k\rangle e_k$.
> (b) Cho $(f_n)_{n\in\mathbb{Z}^+}$ là một dãy trực chuẩn trên $H$ và đặt $N = \langle((f_n)_{n\in\mathbb{Z}^+})\rangle$ là bao tuyến tính của tập $(f_n)_{n\in\mathbb{Z}^+}$. Chứng minh rằng $\overline{M}=\overline{N}$ khi và chỉ khi với mọi $n\in\mathbb{Z}^+$ thì $e_n = \sum_{k=1}^\infty\langle e_n,f_k\rangle f_k$ và $f_n = \sum_{k=1}^\infty \langle f_n,e_k\rangle e_k$.
>
> Kết quả này tương tự kết quả ta đã biết trong Đại số tuyến tính trên không gian hữu hạn chiều: Hai bộ vectơ sinh ra cùng một không gian vectơ con khi và chỉ khi mỗi vectơ trong cơ sở này là một tổ hợp tuyến tính của các vectơ trong cơ sở kia.

> [!prf] Lời giải
> **(a) ($\Leftarrow$)** Nếu $x = \sum_k\langle x,e_k\rangle e_k$, tức chuỗi hội tụ trong $H$, thì $x$ là giới hạn của các tổng riêng $s_N = \sum_{k=1}^N \langle x,e_k\rangle e_k \in M$. Vậy $x\in\overline{M}$.
>
> **($\Rightarrow$)** Giả sử $x\in\overline{M}$. Theo Bất đẳng thức Bessel (Bài 4.6.39a), $(\langle x,e_k\rangle)_k \in \ell^2$, nên theo Bài 4.6.38a, $y:=\sum_k\langle x,e_k\rangle e_k$ hội tụ trong $H$. Cần chứng minh $y=x$.
>
> Với mỗi $n$, tính $\langle y,e_n\rangle = \left\langle\sum_k\langle x,e_k\rangle e_k, e_n\right\rangle = \langle x,e_n\rangle$ (tính liên tục của tích trong theo Bài 4.6.6, chỉ số hạng $k=n$ sống sót do trực chuẩn). Vậy $\langle x-y,e_n\rangle = 0$ với mọi $n$, tức $(x-y)\perp e_n$ với mọi $n$, do đó $(x-y)\perp M$ (trực giao với tập sinh thì trực giao với span, theo Bài 4.6.18f).
>
> Vì $M$ là không gian con (Bài 4.6.14, $\overline M$ là không gian con đóng), $(x-y)\perp M \Rightarrow (x-y)\perp\overline M$ (Bài 4.6.8). Nhưng $x\in\overline M$ (giả thiết) và $y\in\overline M$ (giới hạn của $s_N\in M$), nên $x-y \in \overline M$ (không gian con). Vậy $x-y$ vừa thuộc $\overline M$, vừa trực giao với $\overline M$ (kể cả với chính nó): $(x-y)\perp(x-y)$, nên
> $$\|x-y\|^2 = \langle x-y,x-y\rangle = 0,$$
> tức $x=y = \sum_k\langle x,e_k\rangle e_k$.
>
> **(b) ($\Leftarrow$)** Giả sử các khai triển đã cho đúng. Với mỗi $n$, đẳng thức $e_n = \sum_k\langle e_n,f_k\rangle f_k$ (chuỗi hội tụ trong $H$) chính là dạng khai triển ở (a) áp dụng cho họ trực chuẩn $(f_k)$ và không gian sinh $N$; theo chiều ($\Leftarrow$) của (a) (áp dụng cho $(f_k), N$), suy ra $e_n \in \overline N$. Điều này đúng với mọi $n$, nên $M = \operatorname{span}(e_n) \subset \overline N$, do đó $\overline M \subset \overline N$.
>
> Tương tự, từ $f_n = \sum_k\langle f_n,e_k\rangle e_k$, suy ra $f_n \in \overline M$ với mọi $n$, nên $N\subset\overline M$, do đó $\overline N \subset \overline M$.
>
> Kết hợp hai chiều bao hàm, $\overline M = \overline N$.
>
> **($\Rightarrow$)** Giả sử $\overline M = \overline N =: K$. Với mỗi $n$, $e_n \in M \subset K = \overline N$. Áp dụng chiều ($\Rightarrow$) của (a) cho $x=e_n$, họ trực chuẩn $(f_k)$, và không gian $N$ (với $\overline N = K$ chứa $e_n$):
> $$e_n = \sum_{k=1}^\infty \langle e_n,f_k\rangle f_k.$$
> Tương tự, $f_n \in N \subset K=\overline M$, áp dụng (a) cho $x=f_n$, họ $(e_k)$, không gian $M$:
> $$f_n = \sum_{k=1}^\infty \langle f_n,e_k\rangle e_k.$$


$\xi$
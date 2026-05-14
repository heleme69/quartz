
> [!exr]
> Sử dụng đa thức Taylor tại $\frac{\pi}{4}$ để xấp xỉ $\cos(42^{\circ})$ đến độ chính xác $10^{-6}$.

> [!sol] 
> - Xét hàm số $f(x) = \cos(x)$. Ta cần xấp xỉ giá trị của hàm tại điểm $x = 42^{\circ}$. Chuyển sang radian:
> 	- Điểm cần xấp xỉ: $x = 42^{\circ} = \frac{7\pi}{30}$.
> 	- Điểm khai triển: $a = \frac{\pi}{4}$.
> 	- Bước nhảy: ${} h = x - a = -\frac{\pi}{60}$.
> - Ta có phần dư lagrange: $$R_{n}(x) = \frac{f^{n+1}(c)}{(n+1)!}(x-1)^{n+1}$$, với $c$ nằm giữa ${} \frac{\pi}{4}$ và $\frac{7\pi}{30}$.
> - Ta có $\lvert f^{n+1}(c) \rvert \le 1$, nên để đạt độ chính xác $10^{-6}$, ta cần giải bất phương trình:
> $$|R_n(x)| \le \frac{1}{(n+1)!} \left| -\frac{\pi}{60} \right|^{n+1} \le 10^{-6}$$, 
> ta thấy $n = 3$ có $|R_3| \le \frac{1}{4!} \left(\frac{\pi}{60}\right)^4 \approx 3.13 \times 10^{-7} \le 10^{-6}$ (Thỏa mãn)
> - Đa thức Taylor bậc 3 theo biến $h$ tại $a = \frac{\pi}{4}$: $$P_3(a+h) = f(a) + f'(a)h + \frac{f''(a)}{2}h^2 + \frac{f'''(a)}{6}h^3$$
Tính các đạo hàm tại $a = \frac{\pi}{4}$ ta được $f(a) = f'''(a) = \frac{\sqrt{2}}{2}$ và $f'(a) = f''(a) = -\frac{\sqrt{2}}{2}$. Rút gọn biểu thức: $$ \begin{aligned} P_3(x) &= \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}h - \frac{\sqrt{2}}{4}h^2 + \frac{\sqrt{2}}{12}h^3 \\ &= \frac{\sqrt{2}}{2} \left( 1 - h - \frac{h^2}{2} + \frac{h^3}{6} \right) \end{aligned} $$
> Thay $h = - \frac{\pi}{60}$ và các giá trị đạo hàm, ta có $P_{3}(x)$, kết quả: $\cos(42^{\circ}) \approx 0.743145$

> [!exr] 
> Xét $f(x) = \cos(x)$, ${} \cos(0.01) ≈ P_{2}(0.01)$,  $\cos(0.01) ≈ P_{3}(0.01)$ lấy 8 chữ số thập phân trong phần tính toán.
> Tính sai số tuyệt đối, sai số tương đối, chặn trên nhỏ nhất của sai số chặt cụt, tìm $n$ sao cho $< 10 ^{-10}$.
> Vẽ hình $P_{n}(x)$ và ${} f(x)$ với $n$ tìm được, so sánh ${} f(x)$ bằng *Matlab*.

> [!sol]
> - Đa thức Taylor bậc 2 theo biến $x$: $$P_2(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2$$
> Tính các đạo hàm tại x = 0, ta được: $$P_2(x) = 1 - \frac{x^2}{2}$$
> Tương tự: $$P_3(x) = 1 - \frac{x^2}{2}$$
> Thay $x = 0.01$, lấy 8 chữ số thập phân trong tính toán:
> $$P_2(0.01) = P_3(0.01) = 1 - \frac{0.0001}{2} = 1 - 0.00005000 = 0.99995000$$
> - Sai số tuyệt đối: $$\Delta p = |0.999950000416665 - 0.99995000| \approx 4.16665 \times 10^{-10}$$
> - Sai số tương đối: $$\delta p = \frac{4.16665 \times 10^{-10}}{0.999950000416665} \approx 4.16686 \times 10^{-10}$$
> - Tìm chặn trên nhỏ nhất của sai số chặt cụt: 
> 	- Đối với $P_{2}(0.01)$: $$R_2(0.01) = \frac{f'''(c)}{3!}(0.01)^3 = \frac{\sin(c)}{6} \times 10^{-6}$$, với $c \in (0, 0.01)$.
> 	Trên đoạn $[0, 0.01]$, hàm $\sin(x)$ đồng biến, ta có giá trị lớn nhất đạt được tại $c = 0.01$:  $|R_2| \le \frac{\sin(0.01)}{6} \times 10^{-6} \approx \frac{0.00999983}{6} \times 10^{-6} \approx 1.666639 \times 10^{-9}$.
> 	- Đối với $P_{3}(0,01)$: $$R_3(0.01) = \frac{f^{(4)}(c)}{4!}(0.01)^4 = \frac{\cos(c)}{24} \times 10^{-8}$$
> 	Trên đoạn $[0, 0.01]$, hàm $\cos(x)$ nghịch biến, ta có giá trị lớn nhất đạt được tại $c = 0$: $|R_3| \le \frac{\cos(0)}{24} \times 10^{-8} = \frac{1}{24} \times 10^{-8} \approx 4.16666667 \times 10^{-10}$.
> - Tìm $n$ sao cho sai số $< 10^{-10}$:
> Ta dùng giới hạn sai số an toàn tuyệt đối (với $|f^{(n+1)}(c)| \le 1$ cho mọi đạo hàm của sin/cos):
> $$|R_n| \le \frac{1}{(n+1)!}(0.01)^{n+1} < 10^{-10}$$
> Thử các giá trị của $n$:
> 	- Với $n=3$: $|R_3| \le \frac{1}{24} \times 10^{-8} \approx 4.16 \times 10^{-10}$ (Chưa nhỏ hơn $10^{-10}$)
> 	- Với $n=4$: $|R_4| \le \frac{1}{120} \times (0.01)^5 = \frac{1}{120} \times 10^{-10} \approx 0.00833 \times 10^{-10} < 10^{-10}$ (Thỏa mãn)
> Vậy, để đảm bảo sai số chặt cụt nhỏ hơn $10^{-10}$, ta cần chọn **$n = 4$**.
> 
> > [!code]- Matlab
> > ```matlab
> > % Định nghĩa khoảng vẽ đồ thị
> >  x = linspace(-pi/2, pi/2, 1000);
> >  % Định nghĩa hàm gốc và đa thức Maclaurin bậc 4
> >  f_x = cos(x);
> >  P4_x = 1 - x.^2/2 + x.^4/24;
> >  % Tính sai số tuyệt đối
> >  error = abs(f_x - P4_x);
> >  % Bắt đầu vẽ
> >  figure;
> >  % Đồ thị 1: So sánh hai hàm số
> >  subplot(2,1,1);
> >  plot(x, f_x, 'b-', 'LineWidth', 1.5); hold on;
> >  plot(x, P4_x, 'r--', 'LineWidth', 1.5);
> >  title('So sánh f(x) = cos(x) và P_4(x)');
> >  legend('cos(x)', 'P_4(x)', 'Location', 'best');
> >  xlabel('x'); ylabel('y');
> >  grid on;
> >  % Đồ thị 2: Đồ thị sai số (Error plot)
> >  subplot(2,1,2);
> >  plot(x, error, 'k', 'LineWidth', 1.5);
> >  title('Sai số tuyệt đối |cos(x) - P_4(x)|');
> >  xlabel('x'); ylabel('Sai số');
> >  grid on;
> > ```
> 
> ![[BTGTS_Tuần 4 - Bài 1.webp]]

> [!exr] 
> Xây dựng đa thức taylor tại $x_{0} = 0$ để xấp xỉ $f(x) = \frac{1}{x+1}$ đến độ chính xác $10^{-3}$, với $x \in \left[ -\frac{1}{2}, \frac{1}{2} \right]$.

> [!sol]
> - Tìm khai triển Taylor (Maclaurin)
> 	Ta tính các đạo hàm của $f(x) = (x+1)^{-1}$:
> 	- $f'(x) = -1(x+1)^{-2}$
> 	- $f''(x) = 2(x+1)^{-3}$
> 	- $f'''(x) = -6(x+1)^{-4}$
> 	$\implies f^{(k)}(x) = (-1)^k \cdot k! \cdot (x+1)^{-(k+1)}$
> Tại $x_0 = 0$, ta có $f^{(k)}(0) = (-1)^k \cdot k!$.
> Hệ số của đa thức Taylor là $c_k = \frac{f^{(k)}(0)}{k!} = (-1)^k$.
> Vậy, đa thức Taylor bậc $n$ là:
> $$P_n(x) = \sum_{k=0}^n (-1)^k x^k = 1 - x + x^2 - x^3 + \dots + (-1)^n x^n$$
> Nhận xét: đây là tổng của $n+1$ số hạng đầu tiên trong một cấp số nhân với công bội $q = -x$).
> 
> - Đánh giá sai số (Phần dư)
> 	Thay vì dùng phần dư Lagrange, ta dùng trực tiếp hằng đẳng thức tổng cấp số nhân để tìm phần dư chính xác $R_n(x)$:
> 	Ta có tổng cấp số nhân: 
> 	$$P_n(x) = \frac{1 - (-x)^{n+1}}{1 - (-x)} = \frac{1 - (-x)^{n+1}}{1 + x}$$
> Sai số khi xấp xỉ là:
> $$R_n(x) = f(x) - P_n(x) = \frac{1}{x+1} - \frac{1 - (-x)^{n+1}}{x+1} = \frac{(-x)^{n+1}}{x+1}$$
> Để đảm bảo độ chính xác $10^{-3}$ trên đoạn $x \in [-1/2, 1/2]$, ta cần tìm $n$ sao cho:
> $$|R_n(x)| = \frac{|x|^{n+1}}{|x+1|} \le 10^{-3} \quad \forall x \in \left[-\frac{1}{2}, \frac{1}{2}\right]$$
> 
> - Tìm giá trị lớn nhất của sai số
> Ta cần tìm giá trị lớn nhất của $g(x) = \frac{|x|^{n+1}}{|x+1|}$ trên đoạn $\left[-\frac{1}{2}, \frac{1}{2}\right]$.
> Để $g(x)$ đạt giá trị lớn nhất, ta cần tử số lớn nhất và mẫu số nhỏ nhất:
> 	- Tử số: Trên đoạn $\left[-\frac{1}{2}, \frac{1}{2}\right]$, ta luôn có $|x| \le \frac{1}{2} \implies |x|^{n+1} \le \left(\frac{1}{2}\right)^{n+1}$
> 	- Mẫu số: Vì $x \ge -\frac{1}{2} \implies x + 1 \ge \frac{1}{2} \implies \frac{1}{|x+1|} \le \frac{1}{1/2} = 2$
> Nhân hai bất đẳng thức trên (do các vế đều dương), ta được:
> $$g(x) \le \left(\frac{1}{2}\right)^{n+1} \cdot 2 = \frac{1}{2^n}$$
> Dấu "=" xảy ra khi tử đạt max và mẫu đạt min cùng lúc, tức là tại $x = -1/2$.
> Vậy sai số tuyệt đối lớn nhất trên toàn miền là $\frac{1}{2^n}$.
>
> - Xác định bậc $n$
> Để thỏa mãn yêu cầu đề bài:
> $$\max |R_n(x)| = \frac{1}{2^n} \le 10^{-3}$$
> $$\implies 2^n \ge 1000$$
> Ta biết $2^9 = 512$ và $2^{10} = 1024$. Do đó, số nguyên $n$ nhỏ nhất thỏa mãn là $n = 10$.
>  Vậy đa thức Taylor cần tìm là đa thức bậc 10:
>  $$P_{10}(x) = 1 - x + x^2 - x^3 + x^4 - x^5 + x^6 - x^7 + x^8 - x^9 + x^{10}$$

> [!exr] 
> Giả sử $p ^{*}$ xấp xỉ $p$ với sai số tương đối nhiều nhất $\alpha = 10 ^{-4}$. Tìm khoảng lớn nhất mà $p ^{*}$ nằm trong với mỗi giá trị của $p$. Với $p = \pi$ và $p = e$. 

> [!sol]
> - Theo định nghĩa sai số tương đối: 
> $$
> \delta_{p} = \frac{\lvert p - p ^{*}\rvert}{\lvert p \rvert } \le 10 ^{-4}  
> $$
> Vì $p = \pi$ và $p = e$ đều dương: $\lvert p ^{*} - p \rvert \le 10 ^{-4}.p$,
> tương đương: $p(1-10^{-4}) \le p ^{*} \le p(1 + 10^{-4})$.
> 	- Thay $p = \pi$: $$3.141278 \le p^* \le 3.141907$$
> 	- Thay $p = e$: $$2.718010 \le p^* \le 2.718554$$





$\pi$


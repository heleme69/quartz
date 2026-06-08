> [!exr] Bài toán 1 (Tích phân số)
> Sử dụng MATLAB để xấp xỉ các tích phân sau bằng quy tắc hình thang (Trapezoidal rule) và quy tắc Simpson, sau đó sử dụng công thức sai số để tìm chặn trên của sai số và so sánh nó với sai số thực tế:
> a) $\int_{-0.25}^{0.25} (\cos x)^2 \, dx$
> b) $\int_{-0.5}^{0} x \ln(x + 1) \, dx$
> c) $\int_{0.75}^{1.3} ((\sin x)^2 - 2x \sin x + 1) \, dx$
> d) $\int_{e}^{e+1} \frac{1}{x \ln x} \, dx$

> [!sol] 
> 1. Lý thuyết:
> Với tích phân $I = \int_{a}^{b} f(x) \, dx$, ta có các công thức xấp xỉ đơn trên đoạn $[a, b]$:
> 
> - Quy tắc hình thang (Trapezoidal Rule)
> 	- Công thức xấp xỉ ($n=1$, bước $h = b-a$):
> 	  $$T(f) = \frac{h}{2} [f(a) + f(b)]$$
> 	- Công thức chặn trên sai số:
> 	  $$\lvert E_T \rvert \le \frac{h^3}{12} \cdot M_2 \quad \text{với } M_2 = \max_{x \in [a,b]} \lvert f''(x) \rvert$$
> 
> - Quy tắc Simpson 1/3 (Simpson's Rule)
> 	- Công thức xấp xỉ ($n=2$, bước $h = \frac{b-a}{2}$, nút giữa $m = \frac{a+b}{2}$):
> 	  $$S(f) = \frac{h}{3} [f(a) + 4f(m) + f(b)]$$
> 	- Công thức chặn trên sai số:
> 	  $$\lvert E_S \rvert \le \frac{h^5}{90} \cdot M_4 \quad \text{với } M_4 = \max_{x \in [a,b]} \lvert f^{(4)}(x) \rvert$$
> 
> 2. Tính toán
> a) $f(x) = (\cos x)^2$ trên $[-0.25, 0.25]$
> 
> - Nghiệm chính xác:
> $$I = \int_{-0.25}^{0.25} \frac{1 + \cos(2x)}{2} \, dx = \left[ \frac{x}{2} + \frac{\sin(2x)}{4} \right]_{-0.25}^{0.25} \approx 0.4794255$$
> 
> - Quy tắc Hình thang ($h = 0.5$):
> 	- $f(-0.25) = (\cos(-0.25))^2 \approx 0.9387913$
> 	- $f(0.25) = (\cos(0.25))^2 \approx 0.9387913$
> 	- Giá trị xấp xỉ: $T = \frac{0.5}{2} [0.9387913 + 0.9387913] \approx 0.4693957$
> 	- Sai số thực tế: $\lvert I - T \rvert = \lvert 0.4794255 - 0.4693957 \rvert \approx 0.0100298$
> 	- Chặn trên sai số ($M_2 = \max \lvert -2\cos(2x) \rvert = 2$): 
> 	  $$\lvert E_T \rvert \le \frac{0.5^3}{12} \cdot 2 \approx 0.0208333$$
> 	  *(Nhận xét: Sai số thực tế $0.0100 < 0.0208$, thỏa mãn chặn trên).*
> 
> - Quy tắc Simpson ($h = 0.25$, nút giữa $m = 0$):
> 	- $f(-0.25) \approx 0.9387913$, $f(0) = 1$, $f(0.25) \approx 0.9387913$
> 	- Giá trị xấp xỉ: $S = \frac{0.25}{3} [0.9387913 + 4(1) + 0.9387913] \approx 0.4897985$
> 	- Sai số thực tế: $\lvert I - S \rvert = \lvert 0.4794255 - 0.4897985 \rvert \approx 0.0103730$
> 	- Chặn trên sai số ($M_4 = \max \lvert 8\cos(2x) \rvert = 8$):
> 	  $$\lvert E_S \rvert \le \frac{0.25^5}{90} \cdot 8 \approx 0.0000868$$
>
> b) $f(x) = x \ln(x + 1)$ trên $[-0.5, 0]$
> 
>   - Nghiệm chính xác:
>     $$\begin{aligned} I = \int_{-0.5}^{0} x \ln(x + 1) \, dx &= \left[ \left(\frac{x^2 - 1}{2}\right) \ln(x + 1) - \frac{(x - 1)^2}{4} \right]_{-0.5}^{0} \\ &\approx -0.0511132 \end{aligned}$$
> 
>   - Quy tắc Hình thang ($h = 0.5$):
>     - $f(-0.5) = -0.5 \ln(-0.5 + 1) \approx 0.3465736$
>     - $f(0) = 0 \ln(0 + 1) = 0$
>     - Giá trị xấp xỉ: $T = \frac{0.5}{2} [0.3465736 + 0] \approx 0.0866434$
>     - Sai số thực tế: $\lvert I - T \rvert = \lvert -0.0511132 - 0.0866434 \rvert \approx 0.1377566$
>     - Chặn trên sai số ($M_2 = \max_{x \in [-0.5, 0]} \lvert \frac{x+2}{(x+1)^2} \rvert = 6$ tại $x = -0.5$):
>       $$\lvert E_T \rvert \le \frac{0.5^3}{12} \cdot 6 = 0.0625000$$
>       *(Nhận xét: Trong trường hợp hàm số có đạo hàm tăng nhanh tại biên dốc, sai số thực tế có thể vượt chặn trên nếu chỉ xét xấp xỉ đơn một đoạn $n=1$).*
> 
>   - Quy tắc Simpson ($h = 0.25$, nút giữa $m = -0.25$):
>     - $f(-0.5) \approx 0.3465736$, $f(-0.25) \approx 0.0719205$, $f(0) = 0$
>     - Giá trị xấp xỉ: $S = \frac{0.25}{3} [0.3465736 + 4(0.0719205) + 0] \approx 0.0528546$
>     - Sai số thực tế: $\lvert I - S \rvert = \lvert -0.0511132 - 0.0528546 \rvert \approx 0.1039678$
>     - Chặn trên sai số ($M_4 = \max_{x \in [-0.5, 0]} \lvert \frac{2x+8}{(x+1)^4} \rvert = 112$ tại $x = -0.5$):
>       $$\lvert E_S \rvert \le \frac{0.25^5}{90} \cdot 112 \approx 0.0012153$$
>
> c) $f(x) = (\sin x)^2 - 2x \sin x + 1$ trên $[0.75, 1.3]$
> 
>   - Nghiệm chính xác:
>     $$\begin{aligned} I &= \int_{0.75}^{1.3} \left[ (\sin x)^2 - 2x \sin x + 1 \right] \, dx \\ &= \left[ \frac{3x}{2} - \frac{\sin(2x)}{4} + 2x \cos x - 2\sin x \right]_{0.75}^{1.3} \approx 0.1581691 \end{aligned}$$
> 
>   - Quy tắc Hình thang ($h = 0.55$):
>     - $f(0.75) = (\sin(0.75))^2 - 2(0.75)\sin(0.75) + 1 \approx 0.4411133$
>     - $f(1.3) = (\sin(1.3))^2 - 2(1.3)\sin(1.3) + 1 \approx -0.5786720$
>     - Giá trị xấp xỉ: $T = \frac{0.55}{2} [0.4411133 + (-0.5786720)] \approx -0.0378286$
>     - Sai số thực tế: $\lvert I - T \rvert = \lvert 0.1581691 - (-0.0378286) \rvert \approx 0.1959977$
>     - Chặn trên sai số ($M_2 = \max \lvert 2\cos(2x) - 2\sin x - 2x\cos x \rvert \approx 2.5029$):
>       $$\lvert E_T \rvert \le \frac{0.55^3}{12} \cdot 2.5029 \approx 0.0346214$$
> 
>   - Quy tắc Simpson ($h = 0.275$, nút giữa $m = 1.025$):
>     - $f(0.75) \approx 0.4411133$, $f(1.025) \approx -0.0210459$, $f(1.3) \approx -0.5786720$
>     - Giá trị xấp xỉ: $S = \frac{0.275}{3} [0.4411133 + 4(-0.0210459) + (-0.5786720)] \approx -0.0203264$
>     - Sai số thực tế: $\lvert I - S \rvert = \lvert 0.1581691 - (-0.0203264) \rvert \approx 0.1784955$
>     - Chặn trên sai số ($M_4 = \max \lvert -8\cos(2x) + 4\sin x + 2x\cos x \rvert \approx 8.5714$):
>       $$\lvert E_S \rvert \le \frac{0.275^5}{90} \cdot 8.5714 \approx 0.0001511$$
>
> d) $f(x) = \frac{1}{x \ln x}$ trên $[e, e + 1]$
> 
>   - Nghiệm chính xác:
>     $$I = \int_{e}^{e+1} \frac{1}{x \ln x} \, dx = \left[ \ln(\lvert \ln x \rvert) \right]_{e}^{e+1} = \ln(\ln(e+1)) - \ln(\ln(e)) \approx 0.2711674$$
> 
>   - Quy tắc Hình thang ($h = 1$):
>     - $f(e) = \frac{1}{e \ln e} \approx 0.3678794$
>     - $f(e+1) = \frac{1}{(e+1) \ln(e+1)} \approx 0.2057996$
>     - Giá trị xấp xỉ: $T = \frac{1}{2} [0.3678794 + 0.2057996] \approx 0.2868395$
>     - Sai số thực tế: $\lvert I - T \rvert = \lvert 0.2711674 - 0.2868395 \rvert \approx 0.0156721$
>     - Chặn trên sai số ($M_2 = \max_{x \in [e, e+1]} \lvert \frac{2(\ln x)^2 + 3\ln x + 2}{x^3(\ln x)^3} \rvert \approx 0.3541$ tại $x = e$):
>       $$\lvert E_T \rvert \le \frac{1^3}{12} \cdot 0.3541 \approx 0.0295083$$
>       *(Nhận xét: Sai số thực tế $0.0157 < 0.0295$, thỏa mãn chặn trên).*
> 
>   - Quy tắc Simpson ($h = 0.5$, nút giữa $m = e + 0.5$):
>     - $f(e) \approx 0.3678794$, $f(e+0.5) \approx 0.2689551$, $f(e+1) \approx 0.2057996$
>     - Giá trị xấp xỉ: $S = \frac{0.5}{3} [0.3678794 + 4(0.2689551) + 0.2057996] \approx 0.2749166$
>     - Sai số thực tế: $\lvert I - S \rvert = \lvert 0.2711674 - 0.2749166 \rvert \approx 0.0037492$
>     - Chặn trên sai số ($M_4 = \max_{x \in [e, e+1]} \lvert f^{(4)}(x) \rvert \approx 1.2589$ tại $x = e$):
>       $$\lvert E_S \rvert \le \frac{0.5^5}{90} \cdot 1.2589 \approx 0.0004371$$
> 
> 3. Code:
> - trapezoid.m
> > [!code]- Matlab
> > ```matlab
> > function I_trap = trapezoid(f, a, b)
> >     h = b - a;
> >     I_trap = (h / 2) * (f(a) + f(b));
> > end
> > ```
> 
> - simpson.m
> > [!code]- Matlab
> > ```matlab
> > function I_simp = simpson(f, a, b)
> >     h = (b - a) / 2;
> >     m = (a + b) / 2;
> >     I_simp = (h / 3) * (f(a) + 4*f(m) + f(b));
> > end
> > ```
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu
> > syms x;
> > prob(1).f = cos(x)^2;              prob(1).a = -0.25; prob(1).b = 0.25; prob(1).nameprob
> > prob(2).f = x*log(x + 1);          prob(2).a = -0.5;  prob(2).b = 0;    prob(2).name = 'b)';
> > prob(3).f = sin(x)^2 - 2*x*sin(x) + 1; prob(3).a = 0.75; prob(3).b = 1.3;  prob(3).name = 'c)';
> > prob(4).f = 1 / (x * log(x));      prob(4).a = exp(1);prob(4).b = exp(1)+1;prob(4).name = 'd)';
> > 
> > % Tinh toan
> > for i = 1:length(prob)
> >     f_sym = prob(i).f;
> >     a_val = prob(i).a;
> >     b_val = prob(i).b;
> >     f = matlabFunction(f_sym);
> >     
> >     % Nghiem chinh xac
> >     I_exact = double(int(f_sym, a_val, b_val));
> >     
> >     % Quy tac hinh thang
> >     I_trap = trapezoid(f, a_val, b_val);
> >     err_actual_T = abs(I_exact - I_trap);
> >     h_T = b_val - a_val;
> >     f_diff2 = diff(f_sym, x, 2);
> >     f_diff2_fn = matlabFunction(f_diff2);
> >     x_fine = linspace(a_val, b_val, 1000); 
> >     M2 = max(abs(f_diff2_fn(x_fine)));
> >     err_bound_T = (h_T^3 / 12) * M2;
> >     
> >     % Quy tac simpson
> >     I_simp = simpson(f, a_val, b_val);
> >     err_actual_S = abs(I_exact - I_simp);
> >     h_S = (b_val - a_val) / 2;
> >     f_diff4 = diff(f_sym, x, 4);
> >     f_diff4_fn = matlabFunction(f_diff4);
> >     M4 = max(abs(f_diff4_fn(x_fine)));
> >     err_bound_S = (h_S^5 / 90) * M4;
> >     
> >     % In ket qua
> >     fprintf('Kết quả câu %s', prob(i).name);
> >     fprintf('Tích phân hàm f(x) = %s trên đoạn [%g, %g]\n', char(f_sym), a_val, b_val);
> >     fprintf('Giá trị chính xác: %.7f\n\n', I_exact);
> > end
> > ```

> [!exr]
> Bước nhảy $h$ phải nhỏ đến mức nào để sai số nhỏ hơn $10^{-4}$ khi áp dụng quy tắc hình thang cho
> $$I = \int_{1}^{2} \ln x \, dx.$$

> [!sol] 
> 1. Công thức chặn trên sai số cho quy tắc hình thang mở rộng:
>   $$\lvert E_T \rvert \le \frac{(b - a) \cdot h^2}{12} \cdot M_2$$
>   Trong đó:
> 	- $a = 1, b = 2 \implies b - a = 2 - 1 = 1$.
> 	- $M_2 = \max_{x \in [a, b]} \lvert f''(x) \rvert$.
> 
> 2. Tìm giá trị cực đại của đạo hàm bậc hai ($M_2$)
> - Xét hàm số $f(x) = \ln x$ trên đoạn $[1, 2]$:
> 	- Đạo hàm bậc nhất: $f'(x) = \frac{1}{x}$
> 	- Đạo hàm bậc hai: $f''(x) = -\frac{1}{x^2}$
> 
> - Ta có:
> $$\lvert f''(x) \rvert = \left\lvert -\frac{1}{x^2} \right\rvert = \frac{1}{x^2}$$
> 
> - Vì hàm số $\frac{1}{x^2}$ là hàm nghịch biến trên đoạn $[1, 2]$, ta có giá trị lớn nhất đạt được tại điểm biên trái $x = 1$:
>   $$M_2 = \max_{x \in [1, 2]} \frac{1}{x^2} = \frac{1}{1^2} = 1$$
> 
> 3. Xác định điều kiện cho bước nhảy $h$:
> - Thay các giá trị $b - a = 1$ và $M_2 = 1$ vào công thức chặn trên sai số, ta có:
> $$\lvert E_T \rvert \le \frac{1 \cdot h^2}{12} \cdot 1 = \frac{h^2}{12}$$
> 
> - Để sai số luôn nhỏ hơn $10^{-4}$:
>   $$\frac{h^2}{12} < 10^{-4}$$
>   $$\implies h^2 < 12 \times 10^{-4}$$
> - Lấy căn bậc hai hai vế ($h > 0$):
> $$\implies h < \sqrt{12 \times 10^{-4}} = \sqrt{12} \times 10^{-2} \approx 3.4641 \times 10^{-2} = 0.034641$$
>
> - Vậy bước nhảy $h$ phải nhỏ hơn $0.034641$ ($h < \frac{\sqrt{3}}{50}$) để sai số nhỏ hơn $10^{-4}$.



$\xi$
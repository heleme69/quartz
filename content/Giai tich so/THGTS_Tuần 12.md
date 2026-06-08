> [!exr] 
> Sử dụng MATLAB để xấp xỉ các tích phân sau bằng quy tắc Midpoint, Sau đó, sử dụng công thức sai số để tìm chặn trên của sai số. So sánh giá trị xấp xỉ với giá trị xấp xỉ có được từ Quy tắc hình thang (Trapezoidal rule) và quy tắc Simpson.
> a) $\int_{-0.25}^{0.25} (\cos x)^2 \, dx$
> b) $\int_{-0.5}^{0} x \ln(x + 1) \, dx$
> c) $\int_{0.75}^{1.3} ((\sin x)^2 - 2x \sin x + 1) \, dx$
> d) $\int_{e}^{e+1} \frac{1}{x \ln x} \, dx$

> [!sol] 
> 
> 1. Lý thuyết:
> Với tích phân $I = \int_{a}^{b} f(x) \, dx$, quy tắc Midpoint đơn (Midpoint Rule):
> 
> - Công thức xấp xỉ ($n=1$, bước $h = b - a$, nút giữa $m = \frac{a+b}{2}$):
>   $$M(f) = h \cdot f(m)$$
> - Công thức chặn trên sai số:
>   $$\lvert E_M \rvert \le \frac{h^3}{24} \cdot M_2 \quad \text{với } M_2 = \max_{x \in [a,b]} \lvert f''(x) \rvert$$
> 
> 2. Tính toán:
> 
> a) $f(x) = (\cos x)^2$ trên $[-0.25, 0.25]$
> 
> - Nghiệm chính xác:
>   $$I = \int_{-0.25}^{0.25} \frac{1 + \cos(2x)}{2} \, dx = \left[ \frac{x}{2} + \frac{\sin(2x)}{4} \right]_{-0.25}^{0.25} \approx 0.4794255$$
> 
> - Quy tắc Midpoint ($h = 0.5$, nút giữa $m = 0$):
> 	  - Giá trị tại Midpoint: $f(0) = (\cos(0))^2 = 1$
> 	  - Giá trị xấp xỉ: $M = 0.5 \cdot f(0) = 0.5 \cdot 1 = 0.5000000$
> 	  - Sai số thực tế: $\lvert I - M \rvert = \lvert 0.4794255 - 0.5000000 \rvert = 0.0205745$
> 	  - Chặn trên sai số ($M_2 = \max \lvert -2\cos(2x) \rvert = 2$):
> 	    $$\lvert E_M \rvert \le \frac{0.5^3}{24} \cdot 2 \approx 0.0104167$$
> 
> - So sánh với Hình thang và Simpson (từ bài trước):
> 	  - Quy tắc Hình thang: $T \approx 0.4693957$ (Sai số thực tế $\approx 0.0100298$)
> 	  - Quy tắc Simpson: $S \approx 0.4897985$ (Sai số thực tế $\approx 0.0103730$)
> 	  - *Nhận xét:* Quy tắc Hình thang cho độ chính xác cao nhất, tiếp theo là Simpson và Midpoint.
> 
> b) $f(x) = x \ln(x + 1)$ trên $[-0.5, 0]$
> 
> - Nghiệm chính xác:
>   $$I = \int_{-0.5}^{0} x \ln(x + 1) \, dx = \left[ \left(\frac{x^2 - 1}{2}\right) \ln(x + 1) - \frac{(x - 1)^2}{4} \right]_{-0.5}^{0} \approx -0.0511132$$
> 
> - Quy tắc Midpoint ($h = 0.5$, nút giữa $m = -0.25$):
> 	  - Giá trị tại Midpoint: $f(-0.25) = -0.25 \ln(-0.25 + 1) \approx 0.0719205$
> 	  - Giá trị xấp xỉ: $M = 0.5 \cdot 0.0719205 \approx 0.0359603$
> 	  - Sai số thực tế: $\lvert I - M \rvert = \lvert -0.0511132 - 0.0359603 \rvert = 0.0870735$
> 	  - Chặn trên sai số ($M_2 = \max \lvert \frac{x+2}{(x+1)^2} \rvert = 6$ tại $x = -0.5$):
> 	    $$\lvert E_M \rvert \le \frac{0.5^3}{24} \cdot 6 = 0.0312500$$
> 
> - So sánh với Hình thang và Simpson:
> 	  - Quy tắc Hình thang: $T \approx 0.0866434$ (Sai số thực tế $\approx 0.1377566$)
> 	  - Quy tắc Simpson: $S \approx 0.0528546$ (Sai số thực tế $\approx 0.1039678$)
> 	  - *Nhận xét:* Quy tắc Midpoint có sai số thực tế nhỏ hơn quy tắc Hình thang và Simpson đơn trên đoạn biên dốc này.
> 
> c) $f(x) = (\sin x)^2 - 2x \sin x + 1$ trên $[0.75, 1.3]$
> 
> - Nghiệm chính xác:
>   $$I = \left[ \frac{3x}{2} - \frac{\sin(2x)}{4} + 2x \cos x - 2\sin x \right]_{0.75}^{1.3} \approx 0.1581691$$
> 
> - Quy tắc Midpoint ($h = 0.55$, nút giữa $m = 1.025$):
> 	  - Giá trị tại Midpoint: $f(1.025) \approx -0.0210459$
> 	  - Giá trị xấp xỉ: $M = 0.55 \cdot (-0.0210459) \approx -0.0115752$
> 	  - Sai số thực tế: $\lvert I - M \rvert = \lvert 0.1581691 - (-0.0115752) \rvert = 0.1697443$
> 	  - Chặn trên sai số ($M_2 = \max \lvert f''(x) \rvert \approx 2.5029$):
> 	    $$\lvert E_M \rvert \le \frac{0.55^3}{24} \cdot 2.5029 \approx 0.0173107$$
> 
> - So sánh với Hình thang và Simpson:
> 	  - Quy tắc Hình thang: $T \approx -0.0378286$ (Sai số thực tế $\approx 0.1959977$)
> 	  - Quy tắc Simpson: $S \approx -0.0203264$ (Sai số thực tế $\approx 0.1784955$)
> 	  - *Nhận xét:* Quy tắc Midpointcho độ chính xác cao với đồ thị dao động đổi chiều như hàm điều hòa này.
> 
> d) $f(x) = \frac{1}{x \ln x}$ trên $[e, e + 1]$
> 
> - Nghiệm chính xác:
>   $$I = \left[ \ln(\lvert \ln x \rvert) \right]_{e}^{e+1} = \ln(\ln(e+1)) \approx 0.2711674$$
> 
> - Quy tắc Midpoint ($h = 1$, nút giữa $m = e + 0.5 \approx 3.2182818$):
> 	  - Giá trị tại Midpoint: $f(e+0.5) = \frac{1}{(e+0.5) \ln(e+0.5)} \approx 0.2689551$
> 	  - Giá trị xấp xỉ: $M = 1 \cdot 0.2689551 = 0.2689551$
> 	  - Sai số thực tế: $\lvert I - M \rvert = \lvert 0.2711674 - 0.2689551 \rvert = 0.0022123$
> 	  - Chặn trên sai số ($M_2 = \max \lvert f''(x) \rvert \approx 0.3541$ tại $x = e$):
> 	    $$\lvert E_M \rvert \le \frac{1^3}{24} \cdot 0.3541 \approx 0.0147542$$
> 
> - So sánh với Hình thang và Simpson:
> 	  - Quy tắc Hình thang: $T \approx 0.2868395$ (Sai số thực tế $\approx 0.0156721$)
> 	  - Quy tắc Simpson: $S \approx 0.2749166$ (Sai số thực tế $\approx 0.0037492$)
> 	  - *Nhận xét:* Quy tắc Midpoint cho độ chính xác cao nhất, tiếp theo là Simpson và Hình thang.
>
> 3. Code:
> - midpoint.m
> > [!code]- Matlab
> > ```matlab
> > function I_mid = midpoint(f, a, b)
> >     h = b - a;
> >     m = (a + b) / 2;
> >     I_mid = h * f(m);
> > end
> > ```
>
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > %% Du lieu
> > syms x;
> > probf = cos(x)^2;              prob(1).a = -0.25; prob(1).b = 0.25; prob(1).name = 'a)';
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
> >     % Quy tac Midpoint
> >     I_mid = midpoint(f, a_val, b_val);
> >     err_actual_M = abs(I_exact - I_mid);
> >     h_val = b_val - a_val;
> >     f_diff2 = diff(f_sym, x, 2);
> >     f_diff2_fn = matlabFunction(f_diff2);
> >     x_fine = linspace(a_val, b_val, 1000); 
> >     M2 = max(abs(f_diff2_fn(x_fine)));
> >     err_bound_M = (h_val^3 / 24) * M2;
> >     
> >     % Quy tac hinh thang
> >     I_trap = trapezoid(f, a_val, b_val);
> >     err_actual_T = abs(I_exact - I_trap);
> >     err_bound_T = (h_val^3 / 12) * M2; 
> >     
> >     % Quy tac simpson
> >     I_simp = simpson(f, a_val, b_val);
> >     err_actual_S = abs(I_exact - I_simp);
> >     h_S = h_val / 2;
> >     f_diff4 = diff(f_sym, x, 4);
> >     f_diff4_fn = matlabFunction(f_diff4);
> >     M4 = max(abs(f_diff4_fn(x_fine)));
> >     err_bound_S = (h_S^5 / 90) * M4;
> >     
> >     % In ket qua
> >     fprintf('Kết quả câu %s', problem(i).name);
> >     fprintf('Tích phân hàm f(x) = %s trên đoạn [%g, %g]\n', char(f_sym), a_val, b_val);
> >     fprintf('-> Giá trị chính xác (Exact): %.7f\n\n', I_exact);
> > end
> > ```

$\xi$
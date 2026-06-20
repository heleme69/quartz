
> [!exr]
> Viết phương trình sai phân với $n = 5$ để xấp xỉ nghiệm của phương trình có điều kiện biên:
> $$
> y'' + 3y' + 2y = 4x^2, \quad y(1) = 1, \quad y(2) = 6 \quad 1 \le x \le 2
> $$
> Trong trường hợp $n = 5, 10,20,40,80$. Dùng MATLAB để xấp xỉ nghiệm cho bài toán trên và vẽ đồ thị giữa nghiệm chính xác và nghiệm xấp xỉ. Lập bảng sai số.

> [!sol]
> 1. Đổi miền bài toán:
> 	- Đổi biến:
> 		- Đặt $t = \frac{x - a}{b - a}$, khi đó $x(t) = a + (b-a) t = 1 + (2-1)t = 1+t$, $t \in [0,1]$
> 	- Tính đạo hàm theo biến $t$:
> 		- $\frac{dy}{dx} = \frac{dy}{dt}\frac{dt}{dx} = y'(t) \cdot 1 = y'(t)$
> 		- $\frac{d^2y}{dx^2} = \frac{d}{dt}(y'(t))\frac{dt}{dx} = y''(t)$
> 	- Thay $x = 1+t$, $y' = y'(t)$ và $y'' = y''(t)$, ta có phương trình theo biến $t$:
> 	$$
> 	y''(t) + 3y'(t) + 2y(t) = 4(1+t)^2 \tag{1}
> 	$$
> 	- Chi tiết:
> 		- Trên miền $t \in [0,1]$, bậc $n= 5$, bước lưới $h = \frac{1 - 0}{5} = 0.2$.
> 		- Với $t_{i} = i.h$, ${} t_{i} \in \{ 0, 0.2, 0.4, 0.6, 0.8, 1 \} {}$
> 		- Tại $t = 0$, ta có $y(0) = 1$.
> 		- Tại $t = 1$, ta có $y(1) = 6$.
> 		- Áp dụng công thức sai phân trung tâm cho $y''$ và $y'$ tại $t_{i}$ cho ${} (1) {}$:
>		$$
>		\frac{y_{i+1} - 2y_i + y_{i-1}}{(h)^2} + 3\left(\frac{y_{i+1} - y_{i-1}}{2h}\right) + 2y_i = 4t_i^2 + 8t_i + 4
>		$$
>		- Nhân hai vế với $h^{2} = (0.2)^{2}$ và gom nhóm theo $y_{i-1}$, $y_{i}$ và $y_{i+1}$:
>		$$
>		0.7y_{i-1} - 1.92y_i + 1.3y_{i+1} = 0.16t_i^2 + 0.32t_i + 0.16 \tag{2}
>		$$
> 2. Ma trận biểu diễn:
> - Thay $t_{i} = 0.2, 0.4, 0.6, 0.8$ vào $(2)$:
> 	- Tại $t_{i} = 0.2$: $0.7y_0 - 1.92y_1 + 1.3y_2 = 0.2304$
> 	    Thay $y_{0} = 1$ và chuyển vế:  $-1.92y_1 + 1.3y_2 = -0.4696$
> 	- Tại $t_{i} = 0.4$: - $0.7y_1 - 1.92y_2 + 1.3y_3 = 0.3136$
> 	- Tại $t_{i} = 0.6$: $0.7y_2 - 1.92y_3 + 1.3y_4 = 0.4096$
> 	- Tại $t_{i} = 0.8$: $0.7y_3 - 1.92y_4 + 1.3y_5 = 0.5184$
> 	    Thay $y_{5} = 6$ và chuyển vế: $0.7y_3 - 1.92y_4 = -7.2816$
> - Ma trận biểu diễn hệ ${} A \cdot Y = F {}$:
> $$
> \begin{pmatrix} -1.92 & 1.3 & 0 & 0 \\ 0.7 & -1.92 & 1.3 & 0 \\ 0 & 0.7 & -1.92 & 1.3 \\ 0 & 0 & 0.7 & -1.92 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \\ y_4 \end{pmatrix} = \begin{pmatrix} -0.4696 \\ 0.3136 \\ 0.4096 \\ -7.2816 \end{pmatrix}
> $$
> 
> 1. Bảng sai số:
> $$
> \begin{array}{|c|c|c|}
> \hline
> n & h & \text{Sai số lớn nhất } \mathcal{O}(h^2) \\
> \hline
> 5  & 2.0000 \times 10^{-1} & 1.3414 \times 10^{-2} \\
> 10 & 1.0000 \times 10^{-1} & 3.4216 \times 10^{-3} \\
> 20 & 5.0000 \times 10^{-2} & 8.6015 \times 10^{-4} \\
> 40 & 2.0000 \times 10^{-2} & 2.1534 \times 10^{-4} \\
> 80 & 1.0000 \times 10^{-2} & 5.3853 \times 10^{-5} \\
> \hline
> \end{array}
> $$
>
> 2. Code:
> - bvp_fdm.m
> > [!code]- Matlab
> > ```matlab
> > function [x, y] = bvp_fdm(p, q, r, a, b, alpha, beta, n)
> > % Nhiem vu: Giai BVP y'' + p(x)y' + q(x)y = r(x) bang Sai phan trung tam
> >     h = (b - a) / n;
> >     x = linspace(a, b, n+1)';
> > 
> >     A = sparse(n-1, n-1); 
> >     F = zeros(n-1, 1);
> > 
> >     for i = 1:n-1
> >         xi = x(i+1); 
> >         pi = p(xi); qi = q(xi); ri = r(xi);
> > 
> >         A_low = 1 - (h/2)*pi;
> >         A_diag = -2 + (h^2)*qi;
> >         A_up = 1 + (h/2)*pi;
> > 
> >         A(i, i) = A_diag;
> >         F(i) = (h^2) * ri;
> > 
> >         % Xu ly dieu kien bien 
> >         if i > 1
> >             A(i, i-1) = A_low; 
> >         else
> >             F(i) = F(i) - A_low * alpha; 
> >         end
> >         
> >         if i < n-1
> >             A(i, i+1) = A_up; 
> >         else
> >             F(i) = F(i) - A_up * beta; 
> >         end
> >     end
> > 
> >     y_in = A \ F;
> >     y = [alpha; y_in; beta];
> > end
> > ```
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu bai toan
> > p = @(x) 3; q = @(x) 2; r = @(x) 4*x^2; 
> > a = 1; b = 2; alpha = 1; beta = 6;
> > 
> > n_array = [5; 10; 20; 40; 80]; 
> > h_array = (b - a) ./ n_array;
> > max_err = zeros(length(n_array), 1);
> > 
> > % Nghiem chinh xac
> > A_mat = [exp(-1), exp(-2); exp(-2), exp(-4)];
> > B_mat = [1 - (2*1^2 - 6*1 + 7); 6 - (2*2^2 - 6*2 + 7)];
> > C = A_mat \ B_mat;
> > y_exact = @(x) C(1)*exp(-x) + C(2)*exp(-2*x) + 2*x.^2 - 6*x + 7;
> > 
> > % Tinh toan va ve do thi
> > figure('Color', 'w');
> > x_plot = linspace(a, b, 200);
> > plot(x_plot, y_exact(x_plot), 'k-', 'LineWidth', 2); hold on;
> > 
> > colors = lines(length(n_array)); markers = {'o', 's', '^', 'd', 'p'};
> > 
> > for i = 1:length(n_array)
> >     [x_app, y_app] = bvp_fdm(p, q, r, a, b, alpha, beta, n_array(i));
> >     max_err(i) = max(abs(y_exact(x_app) - y_app)); 
> >     plot(x_app, y_app, '--', 'Marker', markers{i}, 'Color', colors(i,:), 'LineWidth', 1.2);
> > end
> > 
> > xlim([1.2, 1.5]); 
> > ylim([3.4, 5.1]); 
> > 
> > legend(['Chính xác', arrayfun(@(n) sprintf('n = %d', n), n_array', 'UniformOutput', false)], 'Location', 'best');
> > title('So sánh nghiệm (x = [1.2, 1.5])'); 
> > xlabel('x'); ylabel('y(x)'); grid on; hold off;
> > 
> > % Hien thi bang sai so
> > disp('--- BẢNG SAI SỐ THEO CÁC TRƯỜNG HỢP N ---');
> > bang_sai_so = table(n_array, h_array, max_err, 'VariableNames', {'n', 'h', 'Max_Error'});
> > disp(bang_sai_so);
> > ```
> 
> ![[THGTS_Tuần 8 - Bài 1.webp]]

> [!exr] 
> Cho bài toán có điều kiện biên sau:
> $$y'' + x^2y' - 4xy = 0, \quad y(0) = 0, \quad y(1) = 5, \quad 0 \le x \le 1$$
> a) Dựa vào phương pháp sai phân hữu hạn để giải bài toán trên với $h = 0.1$.
> b) Với $h = 0.1$ và $h = 0.01$, dùng Matlab để xấp xỉ nghiệm cho bài toán trên và vẽ đồ thị giữa nghiệm chính xác và nghiệm xấp xỉ, với nghiệm chính xác $y = x^4 + 4x$. Lập bảng sai số.

> [!sol] 
> 1. Tính toán:
> - Chi tiết:
> 	- Trên miền $x \in [0,1]$, bước lưới $h = 0.1$ (tương ứng với $n = 10$).
> 	- Với $x_{i} = i \cdot h$, $x_{i} \in \{ 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1 \}$
> 	- Tại $x = 0$, ta có $y(0) = 0$.
> 	- Tại $x = 1$, ta có $y(1) = 5$.
> 	- Áp dụng công thức sai phân trung tâm cho $y''$ và $y'$ tại $x_{i}$:$$\frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} + x_i^2\left(\frac{y_{i+1} - y_{i-1}}{2h}\right) - 4x_i y_i = 0$$
> 	- Nhân hai vế với $h^2 = (0.1)^2 = 0.01$ và gom nhóm theo $y_{i-1}$, $y_{i}$ và $y_{i+1}$:$$\left(1 - 0.05x_i^2\right)y_{i-1} - \left(2 + 0.04x_i\right)y_i + \left(1 + 0.05x_i^2\right)y_{i+1} = 0 \tag{1}$$
> 1. Ma trận biểu diễn:
> - Thay $x_{i} = 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9$ vào $(1)$:
> 	  - Tại $x_{i} = 0.1$: $\left(1 - 0.05(0.1)^2\right)y_0 - \left(2 + 0.04(0.1)\right)y_1 + \left(1 + 0.05(0.1)^2\right)y_2 = 0$
> 	$\iff 0.9995y_0 - 2.004y_1 + 1.0005y_2 = 0$
> 	    Thay $y_{0} = 0$ và chuyển vế:  $-2.004y_1 + 1.0005y_2 = 0$
> 	- Tại $x_{i} = 0.2$: $0.998y_1 - 2.008y_2 + 1.002y_3 = 0$
> 	- Tại $x_{i} = 0.3$: $0.9955y_2 - 2.012y_3 + 1.0045y_4 = 0$
> 	- Tại $x_{i} = 0.4$: $0.992y_3 - 2.016y_4 + 1.008y_5 = 0$
> 	- Tại $x_{i} = 0.5$: $0.9875y_4 - 2.02y_5 + 1.0125y_6 = 0$
> 	- Tại $x_{i} = 0.6$: $0.982y_5 - 2.024y_6 + 1.018y_7 = 0$
> 	- Tại $x_{i} = 0.7$: $0.9755y_6 - 2.028y_7 + 1.0245y_8 = 0$
> 	- Tại $x_{i} = 0.8$: $0.968y_7 - 2.032y_8 + 1.032y_9 = 0$
> 	- Tại $x_{i} = 0.9$: $\left(1 - 0.05(0.9)^2\right)y_8 - \left(2 + 0.04(0.9)\right)y_9 + \left(1 + 0.05(0.9)^2\right)y_{10} = 0$
> 	$\iff 0.9595y_8 - 2.036y_9 + 1.0405y_{10} = 0$
> 	    Thay $y_{10} = 5$ và chuyển vế: $0.9595y_8 - 2.036y_9 = -5.2025$ 
> -  Ma trận biểu diễn hệ $A \cdot Y = F$:
>   $$
>   \begin{pmatrix} -2.004 & 1.0005 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\ 0.998 & -2.008 & 1.002 & 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0.9955 & -2.012 & 1.0045 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0.992 & -2.016 & 1.008 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0.9875 & -2.02 & 1.0125 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0.982 & -2.024 & 1.018 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0.9755 & -2.028 & 1.0245 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0.968 & -2.032 & 1.032 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0.9595 & -2.036 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \\ y_4 \\ y_5 \\ y_6 \\ y_7 \\ y_8 \\ y_9 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ -5.2025 \end{pmatrix}
>   $$
>
> 3. Bảng sai số:
> $$
> \begin{array}{|c|c|c|}
> \hline
> n & h & \text{Sai số lớn nhất } \mathcal{O}(h^2) \\
> \hline
> 10  & 0.1  & 2.7370 \times 10^{-3} \\
> 100 & 0.01 & 2.7604 \times 10^{-5} \\
> \hline
> \end{array}
> $$
> 
> 4. Code:
> - bvp_fdm.m
> (Sử dụng lại hàm đã định nghĩa ở câu 1)
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu bai toan
> > p = @(x) x.^2; 
> > q = @(x) -4*x; 
> > r = @(x) 0; 
> > 
> > a = 0; b = 1;
> > alpha = 0; beta = 5;
> > 
> > h_req = [0.1; 0.01];
> > n_array = (b - a) ./ h_req;
> > max_err = zeros(length(n_array), 1);
> > 
> > % Nghiem chinh xac
> > y_exact = @(x) x.^4 + 4*x;
> > 
> > % Tinh toan va ve do thi
> > figure('Color', 'w');
> > x_plot = linspace(a, b, 400);
> > plot(x_plot, y_exact(x_plot), 'k-', 'LineWidth', 2); hold on;
> > 
> > colors = lines(length(n_array)); markers = {'s', 'd'};
> > 
> > for i = 1:length(n_array)
> >     [x_app, y_app] = bvp_fdm(p, q, r, a, b, alpha, beta, n_array(i));
> >     max_err(i) = max(abs(y_exact(x_app) - y_app)); 
> >     plot(x_app, y_app, '--', 'Marker', markers{i}, 'Color', colors(i,:), 'LineWidth', 1.2);
> > end
> > 
> > xlim([0.4, 0.7]); 
> > ylim([1.6, 3.1]); 
> > 
> > legend(['Chính xác', arrayfun(@(h) sprintf('h = %.2f', h), h_req, 'UniformOutput', false)], 'Location', 'best');
> > title('So sánh nghiệm Bài 2 (Góc nhìn phóng to x = [0.4, 0.7])'); 
> > xlabel('x'); ylabel('y(x)'); grid on; hold off;
> > 
> > %% Hien thi bang sai so
> > disp('--- BẢNG SAI SỐ THEO CÁC TRƯỜNG HỢP H ---');
> > bang_sai_so = table(n_array, h_req, max_err, 'VariableNames', {'n', 'h', 'Max_Error'});
> > disp(bang_sai_so);
> > ```
> 
> ![[THGTS_Tuần 8 - Bài 2.webp]]

> [!exr] 
> Cho phương trình đối lưu – khuếch tán 1D ở trạng thái dừng:
> $$\varepsilon u'' - u' = -1, \quad 0 < x < 1 \tag{4.1}$$
> với điều kiện biên:
> $$u(0) = 1, \quad u(1) = 3 \tag{4.2}$$
> a) Kiểm tra rằng nghiệm chính xác là:
> $$u(x) = 1 + x + \left(\frac{e^{x/\varepsilon} - 1}{e^{1/\varepsilon} - 1}\right) \tag{4.3}$$
> b) So sánh hai phương pháp sai phân hữu hạn sau với $\varepsilon = 0.3, 0.1, 0.05,$ và $0.0005$:
> (1) Sơ đồ sai phân trung tâm:
> $$\varepsilon \frac{U_{i-1} - 2U_i + U_{i+1}}{h^2} - \frac{U_{i+1} - U_{i-1}}{2h} = -1 \tag{4.4}$$
> (2) Sơ đồ sai phân trung tâm – upwind:
> $$\varepsilon \frac{U_{i-1} - 2U_i + U_{i+1}}{h^2} - \frac{U_i - U_{i-1}}{h} = -1 \tag{4.5}$$
> Vẽ đồ thị nghiệm xấp xỉ và nghiệm chính xác với $h = 0.1, h = \frac{1}{25},$ và $h = 0.01$. Có thể sử dụng lệnh `subplot` trong Matlab để hiển thị nhiều đồ thị trên cùng một hình.

> [!sol]
> a) Kiểm tra nghiệm chính xác:
> Ta cần kiểm tra hàm số thỏa mãn điều kiện biên và thỏa phương trình vi phân.
> - Kiểm tra điều kiện biên
> 	- Hàm số đề bài cho: $u(x) = 1 + x + \frac{e^{x/\varepsilon} - 1}{e^{1/\varepsilon} - 1}$
> 	
> 	- Tại biên trái $x = 0$:
> 	  $$u(0) = 1 + 0 + \frac{e^{0/\varepsilon} - 1}{e^{1/\varepsilon} - 1} = 1 + \frac{1 - 1}{e^{1/\varepsilon} - 1} = 1 + 0 = 1$$
> 	  *(Thỏa mãn điều kiện biên thứ nhất $u(0) = 1$)*
> 	
> 	- Tại biên phải $x = 1$:
> 	  $$u(1) = 1 + 1 + \frac{e^{1/\varepsilon} - 1}{e^{1/\varepsilon} - 1} = 2 + 1 = 3$$
> 	  *(Thỏa mãn điều kiện biên thứ hai $u(1) = 3$)*
> 
> - Thỏa phương trình vi phân:
> 	Ta lần lượt tính đạo hàm bậc nhất và bậc hai của $u(x)$ theo biến $x$:
> 	
> 	- Đạo hàm bậc nhất $u'(x)$:
> 	  $$u'(x) = \frac{d}{dx} \left[ 1 + x + \frac{e^{x/\varepsilon} - 1}{e^{1/\varepsilon} - 1} \right] = 1 + \frac{1}{e^{1/\varepsilon} - 1} \cdot \left( \frac{1}{\varepsilon} e^{x/\varepsilon} \right) = 1 + \frac{e^{x/\varepsilon}}{\varepsilon(e^{1/\varepsilon} - 1)}$$
> 	
> 	- Đạo hàm bậc hai $u''(x)$:
> 	  $$u''(x) = \frac{d}{dx} \left[ u'(x) \right] = \frac{1}{\varepsilon(e^{1/\varepsilon} - 1)} \cdot \left( \frac{1}{\varepsilon} e^{x/\varepsilon} \right) = \frac{e^{x/\varepsilon}}{\varepsilon^2(e^{1/\varepsilon} - 1)}$$
> 	
> 	- Thay $u'(x)$ và $u''(x)$ vào vế trái phương trình $(4.1)$:
> 	$$
> 	\begin{align}
> 	\text{VT} &=  \varepsilon u''(x) - u'(x) \\
> 	&=  \varepsilon \cdot \left[ \frac{e^{x/\varepsilon}}{\varepsilon^2(e^{1/\varepsilon} - 1)} \right] - \left[ 1 + \frac{e^{x/\varepsilon}}{\varepsilon(e^{1/\varepsilon} - 1)} \right] \\
> 	&= \frac{e^{x/\varepsilon}}{\varepsilon(e^{1/\varepsilon} - 1)} - 1 - \frac{e^{x/\varepsilon}}{\varepsilon(e^{1/\varepsilon} - 1)} = -1 = \text{VP}
> 	\end{align}
> 	$$
>	
> - Kết luận: $u(x)$ là nghiệm chính xác của bài toán.
>
> b) So sánh hai phương pháp sai phân hữu hạn sau với $\varepsilon = 0.3, 0.1, 0.05,$ và $0.0005$:
> 
> 1. Code:
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu
> > a = 0; b = 1; alpha = 1; beta = 3;
> > eps_array = [0.3, 0.1, 0.05, 0.0005];
> > h_array = [0.1, 1/25, 0.01];
> > 
> > % Nghiem chinh xac
> > u_exact = @(x, ep) 1 + x + (exp(x./ep) - 1)./(exp(1./ep) - 1);
> > 
> > fig = figure('Color', 'w', 'Position', [50, 20, 1200, 1200], 'Name', 'Kết quả của từng trường hợp');
> > tiledlayout(4, 3, 'TileSpacing', 'compact', 'Padding', 'compact');
> > 
> > % Xet tung gia tri Epsilon (tuong ung tung hang)
> > for e_idx = 1:length(eps_array)
> >     ep = eps_array(e_idx);
> > 
> >     % Xet tung buoc luoi h (Tương ung voi tung cot trong hang)
> >     for h_idx = 1:length(h_array)
> >         h = h_array(h_idx);
> >         n = round((b - a) / h);
> >         x_mesh = linspace(a, b, n+1)';
> >         
> >         % --- So do sai phan trung tam (4.4) ---
> >         A_cd = sparse(n-1, n-1); F_cd = zeros(n-1, 1);
> >         for i = 1:n-1
> >             A_cd(i,i) = -2*ep/(h^2); 
> >             F_cd(i) = -1;
> >             if i > 1
> >                 A_cd(i,i-1) = ep/(h^2) + 1/(2*h); 
> >             else
> >                 F_cd(i) = F_cd(i) - (ep/(h^2) + 1/(2*h))*alpha; 
> >             end
> >             if i < n-1
> >                 A_cd(i,i+1) = ep/(h^2) - 1/(2*h); 
> >             else
> >                 F_cd(i) = F_cd(i) - (ep/(h^2) - 1/(2*h))*beta; 
> >             end
> >         end
> >         u_cd = [alpha; A_cd \ F_cd; beta];
> >         
> >         % --- So do sai phan Upwind (4.5) ---
> >         A_up = sparse(n-1, n-1); F_up = zeros(n-1, 1);
> >         for i = 1:n-1
> >             A_up(i,i) = -2*ep/(h^2) - 1/h; 
> >             F_up(i) = -1;
> >             if i > 1
> >                 A_up(i,i-1) = ep/(h^2) + 1/h; 
> >             else
> >                 F_up(i) = F_up(i) - (ep/(h^2) + 1/h)*alpha; 
> >             end
> >             if i < n-1
> >                 A_up(i,i+1) = ep/(h^2); 
> >             else
> >                 F_up(i) = F_up(i) - (ep/(h^2))*beta; 
> >             end
> >         end
> >         u_up = [alpha; A_up \ F_up; beta];
> >         
> >         nexttile;
> >         x_fine = linspace(a, b, 500);
> >         
> >         % Ve do thi
> >         plot(x_fine, u_exact(x_fine, ep), 'k-', 'LineWidth', 1.5); hold on;
> >         plot(x_mesh, u_cd, 'r--o', 'MarkerSize', 4, 'LineWidth', 1);
> >         plot(x_mesh, u_up, 'b-.s', 'MarkerSize', 4, 'LineWidth', 1);
> >         
> >         title(sprintf('\\epsilon = %g, h = %g', ep, h)); 
> >         xlabel('x'); ylabel('u(x)');
> >         grid on;
> >         
> >         if h_idx == 1
> >             legend('Chính xác', 'Trung tâm', 'Upwind', 'Location', 'best');
> >         end
> >         hold off;
> >     end
> > end
> > ```
>
> ![[THGTS_Tuần 8 - Bài 3.webp]]
>
> 2. Nhận xét:
> - Với các giá trị $\varepsilon$ lớn ($\varepsilon = 0.3, 0.1$), cả hai sơ đồ trung tâm và Upwind đều cho kết quả xấp xỉ tốt và bám sát nghiệm chính xác trên mọi lưới $h$.
> - Với $\varepsilon$ nhỏ ($\varepsilon = 0.05$ và đặc biệt là $\varepsilon = 0.0005$):
> 	- Sơ đồ sai phân trung tâm bị mất ổn định trên các lưới $h = 0.1$ và $h = 1/25$, xuất hiện hiện tượng dao động răng cưa quanh lớp biên. Hiện tượng này chỉ biến mất khi lưới đủ mịn ($h = 0.01$). 
> 	- Sơ đồ Upwind khắc phục được hiện tượng dao động răng cưa trên tất cả các lưới, đảm bảo nghiệm luôn ổn định.



$\xi$
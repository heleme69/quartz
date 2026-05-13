
> [!exr]
> Xây dựng các đa thức nội suy bậc một hai ba cho các dữ liệu sau:
> a)
> 
> $$
> \begin{array}{|c|c|c|c|c|}
> \hline
> x & 8.1 & 8.3 & 8.6 & 8.7 \\
> \hline
> f(x) & 16.94410 & 17.56492 & 18.50515 & 18.82091 \\
> \hline
> \end{array}
> $$
> 
> b)
> 
> $$
> \begin{array}{|c|c|c|c|c|}
> \hline
> x & 0.6 & 0.7 & 0.8 & 1.0 \\
> \hline
> f(x) & -0.17694460 & 0.01375227 & 0.22363362 & 0.65809197 \\
> \hline
> \end{array}
> $$

> [!sol]
> a)
> 1. Bảng tỷ hiệu:
> 
> $$
> \begin{array}{|c|c|c|c|c|}
> \hline
> x_i & f(x_i) & \text{Tỷ hiệu cấp 1} & \text{Tỷ hiệu cấp 2} & \text{Tỷ hiệu cấp 3} \\
> \hline
> 8.1 & 16.94410 & & & \\
> & & 3.1041 & & \\
> 8.3 & 17.56492 & & 0.06 & \\
> & & 3.1341 & & -\frac{1}{480} \\
> 8.6 & 18.50515 & & 0.05875 & \\
> & & 3.1576 & & \\
> 8.7 & 18.82091 & & & \\
> \hline
> \end{array}
> $$
> 
> Chi tiết:
> 
> - Tỷ hiệu cấp 1:
> $$
> \begin{align}
> f[x_0, x_1] &= \frac{17.56492 - 16.94410}{8.3 - 8.1} = 3.1041 \\
> f[x_1, x_2] &= \frac{18.50515 - 17.56492}{8.6 - 8.3} = 3.1341 \\
> f[x_2, x_3] &= \frac{18.82091 - 18.50515}{8.7 - 8.6} = 3.1576
> \end{align}
> $$
> 
> - Tỷ hiệu cấp 2:
> $$
> \begin{align}
> f[x_0, x_1, x_2] &= \frac{3.1341 - 3.1041}{8.6 - 8.1} = 0.06 \\
> f[x_1, x_2, x_3] &= \frac{3.1576 - 3.1341}{8.7 - 8.3} = 0.05875
> \end{align}
> $$
> 
> - Tỷ hiệu cấp 3:
> $$
> f[x_0, x_1, x_2, x_3] = \frac{0.05875 - 0.06}{8.7 - 8.1} = -\frac{1}{480}
> $$
> 
> 2. Đa thức nội suy Newton: 
> $$P_3(x) = 16.94410 + 3.1041(x - 8.1) + 0.06(x - 8.1)(x - 8.3) - \frac{1}{480}(x - 8.1)(x - 8.3)(x - 8.6)$$
> 
> 3. Kết quả: 
> $$f(8.4) \approx 17.8771425$$
> 
> 
> b)
> 1. Bảng tỷ hiệu:
> 
> $$
> \begin{array}{|c|c|c|c|c|}
> \hline
> x_i & f(x_i) & \text{Tỷ hiệu cấp 1} & \text{Tỷ hiệu cấp 2} & \text{Tỷ hiệu cấp 3} \\
> \hline
> 0.6 & -0.17694460 & & & \\
> & & 1.9069687 & & \\
> 0.7 & 0.01375227 & & 0.959224 & \\
> & & 2.0988135 & & -1.78574125 \\
> 0.8 & 0.22363362 & & 0.2449275 & \\
> & & 2.17229175 & & \\
> 1.0 & 0.65809197 & & & \\
> \hline
> \end{array}
> $$
> 
> Chi tiết:
> 
> - Tỷ hiệu cấp 1:
> $$
> \begin{align}
> f[x_0, x_1] &= \frac{0.01375227 - (-0.17694460)}{0.7 - 0.6} = 1.9069687 \\
> f[x_1, x_2] &= \frac{0.22363362 - 0.01375227}{0.8 - 0.7} = 2.0988135 \\
> f[x_2, x_3] &= \frac{0.65809197 - 0.22363362}{1.0 - 0.8} = 2.17229175
> \end{align}
> $$
> 
> - Tỷ hiệu cấp 2:
> $$
> \begin{align}
> f[x_0, x_1, x_2] &= \frac{2.0988135 - 1.9069687}{0.8 - 0.6} = 0.959224 \\
> f[x_1, x_2, x_3] &= \frac{2.17229175 - 2.0988135}{1.0 - 0.7} = 0.2449275
> \end{align}
> $$
> 
> - Tỷ hiệu cấp 3:
> $$
> f[x_0, x_1, x_2, x_3] = \frac{0.2449275 - 0.959224}{1.0 - 0.6} = -1.78574125
> $$
> 
> 2. Đa thức nội suy Newton: 
> $$
> P_3(x) = -0.17694460 + 1.9069687(x - 0.6) + 0.959224(x - 0.6)(x - 0.7) - 1.78574125(x - 0.6)(x - 0.7)(x - 0.8)
> $$
> 
> 3. Kết quả: 
> $$
> f(0.9) \approx 0.4419850025
> $$
> 
> 4. Code:
> - newton_interpolate.m
> > [!code]- Matlab
> > ```matlab
> > function [y_eval, F_coeff] = newton_interpolate(x_node, y_node, x_eval)
> >     % Thuat toan tinh he so va xap xi noi suy Newton
> >     n = length(x_node);
> >     F = zeros(n, n);
> >     F(:, 1) = y_node(:);
> >     
> >     % Tinh bang ty hieu 
> >     for j = 2:n
> >         for i = j:n
> >             F(i, j) = (F(i, j-1) - F(i-1, j-1)) / (x_node(i) - x_node(i-j+1));
> >         end
> >     end
> >     
> >     % Lay cac ty hieu tren duong cheo lam he so
> >     F_coeff = diag(F); 
> > 
> >     % Tinh gia tri P(x) tai cac diem x_eval
> >     y_eval = zeros(size(x_eval));
> >     for k = 1:length(x_eval)
> >         val = F_coeff(1);
> >         p = 1;
> >         for i = 2:n
> >             p = p * (x_eval(k) - x_node(i-1));
> >             val = val + F_coeff(i) * p;
> >         end
> >         y_eval(k) = val;
> >     end
> > end
> > ```
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > a)
> > xa = [8.1, 8.3, 8.6, 8.7];
> > ya = [16.94410, 17.56492, 18.50515, 18.82091];
> > x_eval_a = 8.4;
> > 
> > b)
> > xb = [0.6, 0.7, 0.8, 1.0];
> > yb = [-0.17694460, 0.01375227, 0.22363362, 0.65809197];
> > x_eval_b = 0.9;
> > 
> > % Tinh toan
> > [res_a, coeff_a] = newton_interpolate(xa, ya, x_eval_a);
> > [res_b, coeff_b] = newton_interpolate(xb, yb, x_eval_b);
> > 
> > %% Hien thi ket qua
> > disp('--- He so da thuc ---');
> > fprintf('He so cau a: '); disp(coeff_a');
> > fprintf('He so cau b: '); disp(coeff_b');
> > 
> > disp('--- Ket qua xap xi ---');
> > fprintf('Cau a: f(8.4) = %.7f\n', res_a);
> > fprintf('Cau b: f(0.9) = %.10f\n', res_b);
> > ```

> [!exr]
> Cho hàm số $f(x) = x^{5} −5x^{3} +x^{2} +4x−2$ tại các điểm nội suy $x_{0} = -2, x_{1} = -1, x_{2} = 0, x_{3} = 1, x_{4} = 2$
> a) Dùng Matlab tính hệ số, lập bảng sai phân. Nội suy gần đúng các giá trị của $f(x)$ tại $x = -1.5, -0,5, 0.5, 1.5$
> b) Vẽ hàm $f$ cùng với đa thức Newton $P(x)$ 

> [!sol]
> 1. Bảng tỷ hiệu:
> $$
> \begin{array}{|c|c|c|c|c|c|}
> \hline
> x_i & f(x_i) & \text{Tỷ hiệu cấp 1} & \text{Tỷ hiệu cấp 2} & \text{Tỷ hiệu cấp 3} & \text{Tỷ hiệu cấp 4} \\
> \hline
> -2 & 2 & & & & \\
> & & -3 & & & \\
> -1 & -1 & & 1 & & \\
> & & -1 & & 0 & \\
> 0 & -2 & & 1 & & 0 \\
> & & 1 & & 0 & \\
> 1 & -1 & & 1 & & \\
> & & 3 & & & \\
> 2 & 2 & & & & \\
> \hline
> \end{array}
> $$
> 
> Chi tiết:
> 
> - Tỷ hiệu cấp 1: 
> $$
> \begin{align}
> f[x_0, x_1] &= \frac{-1 - 2}{-1 - (-2)} = -3 \\ 
> f[x_1, x_2] &= \frac{-2 - (-1)}{0 - (-1)} = -1 \\
> f[x_2, x_3] &= \frac{-1 - (-2)}{1 - 0} = 1 \\ 
> f[x_3, x_4] &= \frac{2 - (-1)}{2 - 1} = 3 
> \end{align}
> $$  
>
> - Tỷ hiệu cấp 2: 
> $$
> \begin{align} 
> f[x_0, x_1, x_2] &= \frac{-1 - (-3)}{0 - (-2)} = 1 \\ 
> f[x_1, x_2, x_3] &= \frac{1 - (-1)}{1 - (-1)} = 1 \\ 
> f[x_2, x_3, x_4] &= \frac{3 - 1}{2 - 0} = 1 
> \end{align}
> $$
> 
> - Tỷ hiệu cấp 3:
> $$
> \begin{align} 
> f[x_0, x_1, x_2, x_3] &= \frac{1 - 1}{1 - (-2)} = 0 \\ 
> f[x_1, x_2, x_3, x_4] &= \frac{1 - 1}{2 - (-1)} = 0 
> \end{align}
> $$
> 
> - Tỷ hiệu cấp 4:
> $$
> f[x_0, x_1, x_2, x_3, x_4] = \frac{0 - 0}{2 - (-2)} = 0
> $$
> 
> 2. Đa thức nội suy Newton:
>  $$
>  P_4(x) = 2 - 3(x + 2) + 1(x + 2)(x + 1) + 0(x + 2)(x + 1)x + 0(x + 2)(x + 1)x(x - 1)
>  $$
>  
>  3. Kết quả xấp xỉ:
>  $$
>  \begin{align} 
>  f(-1.5) &\approx P_4(-1.5) = (-1.5)^2 - 2 = 0.25 \\ 
>  f(-0.5) &\approx P_4(-0.5) = (-0.5)^2 - 2 = -1.75 \\ 
>  f(0.5) &\approx P_4(0.5) = (0.5)^2 - 2 = -1.75 \\ 
>  f(1.5) &\approx P_4(1.5) = (1.5)^2 - 2 = 0.25 
>  \end{align}$$
>  
>  4. Code:
> - newton_interpolate.m
> (Sử dụng lại hàm đã định nghĩa ở câu 1)
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > f = @(x) x.^5 - 5*x.^3 + x.^2 + 4*x - 2;
> > x_node = [-2, -1, 0, 1, 2];
> > y_node = f(x_node);
> > x_eval = [-1.5, -0.5, 0.5, 1.5];
> > 
> > % Su dung ham newton_interpolate.m
> > [y_eval, ~, F] = newton_interpolate(x_node, y_node, x_eval);
> > 
> > % Danh gia sai so
> > y_exact = f(x_eval);
> > err_abs = abs(y_exact - y_eval);
> > err_rel = err_abs ./ abs(y_exact);
> > 
> > % Hien thi ket qua
> > disp('% Bang sai phan F (Copy paste vao bmatrix):');
> > disp(F);
> > 
> > disp('% Ket qua xap xi (Cot: x | P(x) | Sai so tuyet doi | Sai so tuong doi):');
> > disp([x_eval', y_eval', err_abs', err_rel']);
> > 
> > %% Ve do thi
> > x_plot = linspace(-2.5, 2.5, 200);
> > [y_plot_approx, ~, ~] = newton_interpolate(x_node, y_node, x_plot); 
> > 
> > figure;
> > plot(x_plot, f(x_plot), 'b-', 'LineWidth', 1.5); hold on;
> > plot(x_plot, y_plot_approx, 'r--', 'LineWidth', 1.5);
> > plot(x_node, y_node, 'ko', 'MarkerFaceColor', 'g', 'MarkerSize', 8);
> > plot(x_eval, y_eval, 'md', 'MarkerFaceColor', 'm', 'MarkerSize', 8);
> > 
> > legend('Hàm f(x)', 'Nội suy P(x)', 'Điểm nội suy', 'Điểm xấp xỉ', 'Location', 'Best');
> > title('So sánh hàm f(x) và nội suy Newton P(x)');
> > xlabel('x'); ylabel('y');
> > grid on; hold off;
> > ```




$\pi$


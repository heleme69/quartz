
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
> Tỷ hiệu cấp 1:
> $$
> \begin{align*}
> f[x_0, x_1] &= \frac{17.56492 - 16.94410}{8.3 - 8.1} = 3.1041 \\
> f[x_1, x_2] &= \frac{18.50515 - 17.56492}{8.6 - 8.3} = 3.1341 \\
> f[x_2, x_3] &= \frac{18.82091 - 18.50515}{8.7 - 8.6} = 3.1576
> \end{align*}
> $$
> 
> Tỷ hiệu cấp 2:
> $$
> \begin{align*}
> f[x_0, x_1, x_2] &= \frac{3.1341 - 3.1041}{8.6 - 8.1} = 0.06 \\
> f[x_1, x_2, x_3] &= \frac{3.1576 - 3.1341}{8.7 - 8.3} = 0.05875
> \end{align*}
> $$
> 
> Tỷ hiệu cấp 3:
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
> Tỷ hiệu cấp 1:
> $$
> \begin{align*}
> f[x_0, x_1] &= \frac{0.01375227 - (-0.17694460)}{0.7 - 0.6} = 1.9069687 \\
> f[x_1, x_2] &= \frac{0.22363362 - 0.01375227}{0.8 - 0.7} = 2.0988135 \\
> f[x_2, x_3] &= \frac{0.65809197 - 0.22363362}{1.0 - 0.8} = 2.17229175
> \end{align*}
> $$
> 
> Tỷ hiệu cấp 2:
> $$
> \begin{align*}
> f[x_0, x_1, x_2] &= \frac{2.0988135 - 1.9069687}{0.8 - 0.6} = 0.959224 \\
> f[x_1, x_2, x_3] &= \frac{2.17229175 - 2.0988135}{1.0 - 0.7} = 0.2449275
> \end{align*}
> $$
> 
> Tỷ hiệu cấp 3:
> $$
> f[x_0, x_1, x_2, x_3] = \frac{0.2449275 - 0.959224}{1.0 - 0.6} = -1.78574125
> $$
> 
> 2. Đa thức nội suy Newton: 
> $$P_3(x) = -0.17694460 + 1.9069687(x - 0.6) + 0.959224(x - 0.6)(x - 0.7) - 1.78574125(x - 0.6)(x - 0.7)(x - 0.8)$$
> 
> 3. Kết quả: 
> $$f(0.9) \approx 0.4419850025$$
> 
> > [!code]- Matlab
> > ```matlab
> > % --- Câu a ---
> > xa = [8.1, 8.3, 8.6, 8.7];
> > ya = [16.94410, 17.56492, 18.50515, 18.82091];
> > [Fa, coeff_a] = newton_divide(xa, ya);
> > res_a = newton_eval(xa, coeff_a, 8.4);
> > 
> > % --- Câu b ---
> > xb = [0.6, 0.7, 0.8, 1.0];
> > yb = [-0.17694460, 0.01375227, 0.22363362, 0.65809197];
> > [Fb, coeff_b] = newton_divide(xb, yb);
> > res_b = newton_eval(xb, coeff_b, 0.9);
> > 
> > % --- Hiển thị kết quả ---
> > disp('--- KET QUA ---');
> > fprintf('Cau a - f(8.4) = %.7f\n', res_a);
> > fprintf('Cau b - f(0.9) = %.10f\n', res_b);
> > 
> > function [F, F_divide] = newton_divide(x, y)
> >     % Thuật toán xây dựng bảng tỷ hiệu Newton theo mẫu
> >     n = length(x);
> >     F = zeros(n, n);
> >     F(:, 1) = y(:); % Đảm bảo y là vector cột để gán không bị lỗi
> >     
> >     for i = 2:n
> >         for j = 2:i
> >             F(i, j) = (F(i, j-1) - F(i-1, j-1)) / (x(i) - x(i-j+1));
> >         end
> >     end
> >     F_divide = diag(F); % Lấy đường chéo chính làm hệ số đa thức
> > end
> > 
> > function P = newton_eval(x, coeff, x_val)
> >     % Thuật toán tính giá trị đa thức nội suy tại điểm x_val
> >     n = length(coeff);
> >     P = coeff(1);
> >     term = 1;
> >     for i = 2:n
> >         term = term * (x_val - x(i-1));
> >         P = P + coeff(i) * term;
> >     end
> > end
> > ```

> [!exr]
> Cho hàm số $f(x) = x^{5} −5x^{3} +x^{2} +4x−2$ tại các điểm nội suy $x_{0} = -2, x_{1} = -1, x_{2} = 0, x_{3} = 1, x_{4} = 2$
> a) Nội suy gần đúng các giá trị của $f(x)$ tại $x = -1.5, -0,5, 0.5, 1.5$
> b) Vẽ hàm $f$ cùng với đa thức Newton $P(x)$ 

> [!sol]
> a)
> 






$\pi$


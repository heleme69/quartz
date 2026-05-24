
> [!exr]
> Xác định một đa thức có bậc ≤ 3 để nội suy dữ liệu:
> 
> $$
> \def\arraystretch{1.5}
> \begin{array}{|c|c|c|c|c|}
> \hline
> x & 1.2 & 2.1 & 3.0 & 3.6 \\
> \hline
> y & 0.7 & 8.1 & 27.7 & 45.1 \\
> \hline
> \end{array}
> $$

> [!sol] 
> 1. Tính cơ sở đa thức Newton:
> 
> $$
> \def\arraystretch{1.8}
> \begin{array}{|c|c|c|c|c|}
> \hline
> x_i & f(x_i) & \text{Tỷ hiệu cấp 1} & \text{Tỷ hiệu cấp 2} & \text{Tỷ hiệu cấp 3} \\
> \hline
> 1.2 & 0.7 & & & \\
> & & \frac{8.1-0.7}{2.1-1.2} = \mathbf{\frac{74}{9}} & & \\
> 2.1 & 8.1 & & \frac{196/9-74/9}{3.0-1.2} = \mathbf{\frac{610}{81}} & \\
> & & \frac{27.7-8.1}{3.0-2.1} = \frac{196}{9} & & \frac{130/27-610/81}{3.6-1.2} = \mathbf{-\frac{275}{243}} \\
> 3.0 & 27.7 & & \frac{29-196/9}{3.6-2.1} = \frac{130}{27} & \\
> & & \frac{45.1-27.7}{3.6-3.0} = 29 & & \\
> 3.6 & 45.1 & & & \\
> \hline
> \end{array}
> $$
>
>
> 2. Đa thức nội suy Newton: $$ P_3(x) = 0.7 + \frac{74}{9}(x - 1.2) + \frac{610}{81}(x - 1.2)(x - 2.1) - \frac{275}{243}(x - 1.2)(x - 2.1)(x - 3.0) $$

> [!exr] 
> Cho $\ln(x) = 0.6932, \ln(3) = 1.0986$ và $\ln(6) = 1.7981$,  sử dụng đa thức Lagrange để nội suy và xấp xỉ giá trị hàm logarit tự nhiên tại các số nguyên từ 1 đến 10. Viết code MATLAB và ập bảng kết quả bao gồm giá trị xấp xỉ, sai số tuyệt đối và sai số tương đối.

> [!sol]
> 1. Tính cơ sở đa thức Lagrange: 
> - Ta có cơ sở đa thức Lagrange: 
> $$
> L_j(x) = \prod_{k \neq j} \frac{x - x_k}{x_j - x_k}
> $$
> - Chi tiết:
> 	- $L_0(x) = \frac{(x-3)(x-6)}{(2-3)(2-6)} = \frac{1}{4}(x-3)(x-6)$
> 	- $L_1(x) = \frac{(x-2)(x-6)}{(3-2)(3-6)} = -\frac{1}{3}(x-2)(x-6)$
> 	- $L_2(x) = \frac{(x-2)(x-3)}{(6-2)(6-3)} = \frac{1}{12}(x-2)(x-3)$
> 2. Đa thức nội suy Lagrange: $$P_2(x) = 0.6932 \cdot L_0(x) + 1.0986 \cdot L_1(x) + 1.7918 \cdot L_2(x)$$
> 3. Code:
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > xNodes = [2, 3, 6];
> > yNodes = [0.6932, 1.0986, 1.7918];
> > n = length(xNodes) - 1;
> > xvals = 1:10;
> > 
> > disp('x     | Gia tri xap xi P(x)')
> > disp('-------------------------')
> > 
> > for j = 1:length(xvals)
> >     xval = xvals(j);
> >     Papprox = 0;
> >     
> >     for k = 1:n+1
> >         phi_k = lagrange_basis(xval, xNodes, k, n);
> >         Papprox = Papprox + yNodes(k) * phi_k;
> >     end
> >     
> >     fprintf('%-5d | %-15.4f\n', xval, Papprox);
> > end
> > 
> > function phi_k = lagrange_basis(xval, xnodes, k, n)
> >     xk = xnodes(k);
> >     phi_k = 1;
> >     for i = 1:n+1
> >         if i ~= k
> >             phi_k = phi_k .* (xval - xnodes(i)) / (xk - xnodes(i));
> >         end
> >     end
> > end
> > ```

> [!exr]
> Trình bày cách xây dựng hàm Lagrange bậc 1,2,3 trên đoạn $[-1,1]$. Vẽ hình các hàm Lagrange trên, chú thích đầy đủ.

> [!sol]
> 4. Tính cơ sở đa thức Lagrange: 
>  - Đổi biến cơ sở đa thức Lagrange:
> 	- Đặt $s = \frac{x- x_{0}}{h}$, khi  đó $x(s) = x_{0} + s \cdot h$.
> 	- Thay $x = x_{0} + s \cdot h$, $x_{j}  = x_{0} + \alpha_{j} h$ và $x_{k} = x_{0} + \alpha_{k} h$: 
> 	$$
> 	\begin{align}
> 	L_j(x(s)) &=  \prod_{k \neq j} \frac{(x_0 + s \cdot h) - (x_0 + \alpha_k h)}{(x_0 + \alpha_j h) - (x_0 + \alpha_k h)} \\
> 	&= \prod_{k \neq j} \frac{h(s - \alpha_k)}{h(\alpha_j - \alpha_k)}
> 	\end{align}
> 	$$
> 	- Ta thu được cơ sở địa phương mới, ký hiệu $l_{j}(s)$, đôc lập với $h$:
> 	$$
> 	l_j(s) = \prod_{k \neq j} \frac{s - \alpha_k}{\alpha_j - \alpha_k}
> 	$$
> 	- Vì các khoảng là cách đều, ta có $\alpha_{k} = k$:
> 	$$
> 	l_j(s) = \prod_{k \neq j} \frac{s - k}{j - k}
> 	$$
> - Chi tiết: 
> 	- Trên đoạn $[-1,1]$, ta chọn $x_{0} = -1$. Với mỗi bậc $n$, bước lưới $h = \frac{2}{n}$, $s = \frac{x+1}{h}$
> 	- Bậc $n = 1$, bước lưới $h = \frac{x_{n} - x_{0}}{n}= \frac{2}{1}$, $s_{k} \in \{ 0, 1 \}$:
> 		- $l_{0}(s) = \frac{s - 1}{0-1} = 1 - s$
> 		- $l_{1}(s) = \frac{s - 0}{1 - 0} = s$
> 	- Bậc $n = 2$, bước lưới $h = \frac{2}{2}$, $s_{k} \in \{  0, 1, 2 \}$:
> 		- $l_0(s) = \frac{(s - 1)(s - 2)}{(0 - 1)(0 - 2)} = \frac{1}{2}(s^2 - 3s + 2)$
> 		- $l_1(s) = \frac{s(s - 2)}{(1 - 0)(1 - 2)} = 2s - s^2$
> 		- $l_2(s) = \frac{s(s - 1)}{(2 - 0)(2 - 1)} = \frac{1}{2}(s^2 - s)$
> 	- Bậc $n = 3$, bước lưới $h = \frac{2}{3}$, $s_{k} \in \{ 0, 1 ,2, 3 \}$:
> 		- $l_0(s) = -\frac{1}{6}(s^3 - 6s^2 + 11s - 6)$
> 		- $l_1(s) = \frac{1}{2}(s^3 - 5s^2 + 6s)$
> 		- $l_2(s) = -\frac{1}{2}(s^3 - 4s^2 + 3s)$
> 		- $l_3(s) = \frac{1}{6}(s^3 - 3s^2 + 2s)$
> 	- Bậc $n = 4$, bước lưới $h = 0.5$, $s_{k} = \{ 0, 1, 2,3,4 \}$:
> 		- $l_0(s) = \frac{s^4 - 10s^3 + 35s^2 - 50s + 24}{24}$
> 		- $l_1(s) = \frac{s^4 - 9s^3 + 26s^2 - 24s}{-6}$
> 		- $l_2(s) = \frac{s^4 - 8s^3 + 19s^2 - 12s}{4}$
> 		- $l_3(s) = \frac{s(s - 1)(s - 2)(s - 4)}{-6}$
> 		- $l_4(s) = \frac{s(s - 1)(s - 2)(s - 3)}{24}$
> 2. Code:
> > [!code]- Matlab
> > ```matlab
> > clear; clc; clf;
> > x = linspace(-1, 1, 100); 
> > 
> > for n = 1:4
> >     h = 2/n;
> >     s = (x + 1)/h; % Doi bien
> >     s_node = 0:n;  % 
> >     x_node = -1 + s_node*h;
> >     
> >     subplot(2, 2, n); hold on; grid on;
> >     leg_str = cell(1, n+1); 
> >     
> >     for i = 1:n+1
> >         L = ones(size(s));
> >         for j = 1:n+1
> >             if i ~= j, L = L .* (s - s_node(j)) / (s_node(i) - s_node(j)); end
> >         end
> >         plot(x, L, 'LineWidth', 1.2);
> >         leg_str{i} = sprintf('l_{%d}', i-1);
> >     end
> >     
> >     % Ve do thi
> >     plot(x_node, zeros(1, n+1), 'ko'); 
> >     plot(x_node, ones(1, n+1), 'ro');
> >     
> >     title(sprintf('Bậc n = %d', n));
> >     legend(leg_str, 'Location', 'eastoutside');
> > end
> > ```
> 
> ![[THGTS_Tuần 5 - Bài 3.webp]]

> [!exr] 
> Cho $f(x) = 2x^{2}e^{x} + 1$. Xây dựng đa thức Lagrange bậc hai hoặc thấp hơn sử dụng $x_{0} = 0$, $x_{1} = 0.5$, $x_{2} = 1$. Viết code MATLAB xấp xỉ $f(0.8)$.

> [!sol]
> 3. Tính cơ sở đa thức Lagrange:
> 	- $y_{i}= f(x_{i})$:
> 	- $y_0 = f(0) = 2(0)^2e^0 + 1 = 1$
> 	- $y_1 = f(0.5) = 2(0.5)^2e^{0.5} + 1 = 0.5e^{0.5} + 1$
> 	- $y_2 = f(1) = 2(1)^2e^1 + 1 = 2e + 1$
> 	- $L_0(x) = \frac{(x - 0.5)(x - 1)}{(0 - 0.5)(0 - 1)} = 2(x^2 - 1.5x + 0.5) = 2x^2 - 3x + 1$
> 	- $L_1(x) = \frac{(x - 0)(x - 1)}{(0.5 - 0)(0.5 - 1)} = \frac{x^2 - x}{-0.25} = -4x^2 + 4x$
> 	- $L_2(x) = \frac{(x - 0)(x - 0.5)}{(1 - 0)(1 - 0.5)} = \frac{x^2 - 0.5x}{0.5} = 2x^2 - x$
> 4. Đa thức nội suy Lagrange:
> $$
> P_2(x) = 1(2x^2 - 3x + 1) + (0.5e^{0.5} + 1)(-4x^2 + 4x) + (2e + 1)(2x^2 - x)
> $$
> 5. Kết quả xấp xỉ: 
> $$
> f(0.8) \approx 1(-0.12) + (0.5e^{0.5} + 1)(0.64) + (2e + 1)(0.48) \approx 4.1371
> $$
> 6. Code:
>    
> > [!code]- Matlab
> > ```Matlab
> > clc; clear; close all;
> > 
> > f = @(x) 2 * x.^2 .* exp(x) + 1;
> > X = [0, 0.5, 1];
> > Y = f(X);
> > 
> > % Du lieu diem xap xi
> > x_target = 0.8;
> > n = length(X);
> > P2_val = 0;
> > 
> > % Tinh co so da thuc 
> > for i = 1:n
> >     L_i = 1;
> >     for j = 1:n
> >         if i ~= j
> >             L_i = L_i * (x_target - X(j)) / (X(i) - X(j));
> >         end
> >     end
> >     P2_val = P2_val + Y(i) * L_i;
> > end
> > 
> > % Hien thi ket qua
> > fprintf('Gia tri xap xi P_2(0.8) = %.4f\n', P2_val);
> > fprintf('Gia tri thuc te f(0.8) = %.4f\n', f(x_target));
> > fprintf('Sai so tuyet doi = %.4f\n', abs(f(x_target) - P2_val));
> > ```

> [!exr]
> Viết code MATLAB tính giá trị xấp xỉ hàm nội suy Lagrange bậc 1, trên đoạn $[-1,1]$
> 
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu ham 
> > f = @(x) sin(x); 
> > 
> > % Du lieu moc noi suy
> > X = [-1, 1]; 
> > Y = f(X);
> > 
> > % Du lieu diem can xap xi
> > x_target = 0.5;
> > 
> > % Tinh noi suy Lagrange bac 1
> > P1_val = 0;
> > n = length(X);
> > 
> > for i = 1:n
> >     L_i = 1; 
> >     for j = 1:n
> >         if i ~= j
> >             L_i = L_i * (x_target - X(j)) / (X(i) - X(j));
> >         end
> >     end
> >     P1_val = P1_val + Y(i) * L_i;
> > end
> > 
> > % Hien thi ket qua
> > fprintf('--- Noi suy Lagrange bac 1 tren [-1, 1] ---\n');
> > fprintf('Diem can xap xi: x = %.2f\n', x_target);
> > fprintf('Gia tri xap xi P_1(%.2f) = %.4f\n', x_target, P1_val);
> > fprintf('Gia tri thuc te f(%.2f) = %.4f\n', x_target, f(x_target));
> > fprintf('Sai so tuyet doi = %.4f\n', abs(f(x_target) - P1_val));
> > ```


























$\pi$


> [!exr] (Bài 2)
> Trình bày cách xây dựng công thức cầu phương Gauss-Legendre với $n = 4$.

> [!sol]
> Ta xây dựng công thức trên đoạn $[a, b] = [-1, 1]$ với hàm trọng $w(x) = 1$ sử dụng số điểm mốc là $4$ (chỉ số chạy từ $i = 0$ đến $3$). Công thức đạt bậc chính xác tối đa là $2(3) + 1 = 7$.
> 
> Bước 1: Xây dựng đa thức trực giao đơn khởi bậc 4 ($P_4$)
> 
> Ta sử dụng hệ thức truy hồi 3 số hạng:
> $$P_k(x) = (x - a_k)P_{k-1}(x) - b_k P_{k-2}(x)$$
> 
> Do miền tích phân $[-1, 1]$ và hàm trọng số $w(x) = 1$ mang tính chất đối xứng qua gốc tọa độ, tất cả các hệ số $a_k = \frac{\langle x P_{k-1}, P_{k-1} \rangle}{\langle P_{k-1}, P_{k-1} \rangle}$ của họ đa thức Legendre đều bằng $0$. Hệ thức truy hồi rút gọn thành:
> $$P_k(x) = x P_{k-1}(x) - b_k P_{k-2}(x)$$
> 
> Ta xuất phát từ hai đa thức cơ sở đầu tiên:
> - $P_0(x) = 1$
> - $P_1(x) = x$
> 
> 1. Tính đa thức bậc 2 ($P_2$)
> Hệ thức truy hồi: $P_2(x) = x P_1(x) - b_2 P_0(x) = x^2 - b_2$.
> - Tính hệ số $b_2$:
>   $$b_2 = \frac{\langle x P_1, P_0 \rangle}{\langle P_0, P_0 \rangle} = \frac{\int_{-1}^{1} x^2 \, dx}{\int_{-1}^{1} 1 \, dx} = \frac{2/3}{2} = \frac{1}{3}$$
> - Vậy: $P_2(x) = x^2 - \frac{1}{3}$.
> 
> 2. Tính đa thức bậc 3 ($P_3$)
> Hệ thức truy hồi: $P_3(x) = x P_2(x) - b_3 P_1(x) = x\left(x^2 - \frac{1}{3}\right) - b_3 x$.
> - Tính hệ số $b_3$:
>   $$b_3 = \frac{\langle x P_2, P_1 \rangle}{\langle P_1, P_1 \rangle} = \frac{\int_{-1}^{1} x^2\left(x^2 - \frac{1}{3}\right) dx}{\int_{-1}^{1} x^2 \, dx} = \frac{\int_{-1}^{1} \left(x^4 - \frac{1}{3}x^2\right) dx}{2/3} = \frac{\frac{2}{5} - \frac{2}{9}}{2/3} = \frac{4/45}{2/3} = \frac{2}{15}$$
> - Thay vào hệ thức:
>   $$P_3(x) = x^3 - \frac{1}{3}x - \frac{2}{15}x = x^3 - \frac{3}{15}x = x^3 - \frac{3}{5}x$$
> 
> 3. Tính đa thức bậc 4 ($P_4$)
> Hệ thức truy hồi: $P_4(x) = x P_3(x) - b_4 P_2(x) = x\left(x^3 - \frac{3}{5}x\right) - b_4\left(x^2 - \frac{1}{3}\right)$.
> - Tính hệ số $b_4$:
>   $$b_4 = \frac{\langle x P_3, P_2 \rangle}{\langle P_2, P_2 \rangle}$$
> - Tính tử số:
>   $$\int_{-1}^{1} x^2\left(x^3 - \frac{3}{5}x\right)\left(x^2 - \frac{1}{3}\right)$$
> - Ta dùng tính chất trực giao:  $\langle x P_3, P_2 \rangle = \langle P_3, x P_2 \rangle$
>   Vì $P_3(x) = x^3 - \frac{3}{5}x$ và $x P_2(x) = x^3 - \frac{1}{3}x$, ta có $x P_2(x) = P_3(x) + \frac{4}{15}x$. Do $P_3 \perp x$, tử số thu gọn thành $\langle P_3, P_3 \rangle$:
>   $$\langle P_3, P_3 \rangle = \int_{-1}^{1} \left(x^3 - \frac{3}{5}x\right)^2 dx = \int_{-1}^{1} \left(x^6 - \frac{6}{5}x^4 + \frac{9}{25}x^2\right) dx = \frac{2}{7} - \frac{12}{25} + \frac{6}{25} = \frac{2}{7} - \frac{6}{25} = \frac{8}{175}$$
> - Tính mẫu số:
>   $$\langle P_2, P_2 \rangle = \int_{-1}^{1} \left(x^2 - \frac{1}{3}\right)^2 dx = \int_{-1}^{1} \left(x^4 - \frac{2}{3}x^2 + \frac{1}{9}\right) dx = \frac{2}{5} - \frac{4}{9} + \frac{2}{9} = \frac{2}{5} - \frac{2}{9} = \frac{8}{45}$$
> - Tính ra $b_4$:
>   $$b_4 = \frac{8/175}{8/45} = \frac{45}{175} = \frac{9}{35}$$
> - Thay hệ số $b_4$ vào phương trình khép kín:
>   $$P_4(x) = x^4 - \frac{3}{5}x^2 - \frac{9}{35}\left(x^2 - \frac{1}{3}\right) = x^4 - \left(\frac{21 + 9}{35}\right)x^2 + \frac{3}{35} = x^4 - \frac{30}{35}x^2 + \frac{3}{35}$$
>   $$P_4(x) = x^4 - \frac{6}{7}x^2 + \frac{3}{35}$$
> 
> Bước 2: Tìm các mốc nội suy $x_i$
> 
> Các mốc nội suy chính là nghiệm của phương trình $P_4(x) = 0$:
> $$x^4 - \frac{6}{7}x^2 + \frac{3}{35} = 0$$
> 
> Đặt $t = x^2$ ($t \ge 0$), phương trình trở thành: $t^2 - \frac{6}{7}t + \frac{3}{35} = 0$.
> Giải biệt thức $\Delta'$:
> $$\Delta' = \left(\frac{3}{7}\right)^2 - \frac{3}{35} = \frac{9}{49} - \frac{3}{35} = \frac{45 - 21}{245} = \frac{24}{245}$$
> 
> Tìm các nghiệm $t$:
> $$t = \frac{\frac{3}{7} \pm \sqrt{\frac{24}{245}}}{1} = \frac{15 \pm 2\sqrt{30}}{35}$$
> 
> Khai căn bậc hai của $t$ để tìm lại $4$ giá trị mốc $x_i$ đối xứng qua trục tung:
> - $x_0 = -\sqrt{\frac{15 + 2\sqrt{30}}{35}} \approx -0.861136$
> - $x_1 = -\sqrt{\frac{15 - 2\sqrt{30}}{35}} \approx -0.339981$
> - $x_2 = \sqrt{\frac{15 - 2\sqrt{30}}{35}} \approx 0.339981$
> - $x_3 = \sqrt{\frac{15 + 2\sqrt{30}}{35}} \approx 0.861136$
> 
> Bước 3: Tính toán các trọng số $c_i$ bằng hệ số bất định
> 
> Theo định lý cấu phương, các trọng số được tính bằng công thức tích phân của đa thức cơ sở Lagrange bậc 3:
> $$c_i = \int_{-1}^{1} \prod_{j=0, j \neq i}^{3} \frac{x - x_j}{x_i - x_j} dx$$
> 
> Ta cần tìm các hệ số $c_{i}$ thỏa:
> $$\int_a^b f(x)dx \approx \sum_{i=1}^n c_i f(x_i)$$
>
> Ta có thể giải hệ phương trình hệ số bất định, bằng cách ép công thức chính xác cho các hàm đa thức cơ sở $f(x) = 1$ và $f(x) = x^2$:
> 
> $$\begin{cases} 
> c_0 \cdot 1 + c_1 \cdot 1 + c_2 \cdot 1 + c_3 \cdot 1 = \int_{-1}^{1} 1 \, dx \\
> c_0 \cdot x_0^2 + c_1 \cdot x_1^2 + c_2 \cdot x_2^2 + c_3 \cdot x_3^2 = \int_{-1}^{1} x^2 \, dx
> \end{cases}$$
> 
> Tận dụng tính đối xứng $c_0 = c_3$ và $c_1 = c_2$, hệ phương trình thu gọn còn 2 ẩn:
> $$\begin{cases}
> 2c_0 + 2c_1 = 2 \\
> 2c_0 x_0^2 + 2c_1 x_1^2 = \frac{2}{3}
> \end{cases} \iff \begin{cases}
> c_0 + c_1 = 1 \\
> c_0 t_1 + c_1 t_2 = \frac{1}{3}
> \end{cases}$$
> 
> Trong đó $t_1 = x_0^2 = \frac{15 + 2\sqrt{30}}{35}$ và $t_2 = x_1^2 = \frac{15 - 2\sqrt{30}}{35}$. Giải hệ phương trình tuyến tính, ta thu được:
> - $c_0 = c_3 = \frac{18 - \sqrt{30}}{36} \approx 0.347855$
> - $c_1 = c_2 = \frac{18 + \sqrt{30}}{36} \approx 0.652145$
> 
> Kết luận:
> 
> Công thức cầu phương Gauss-Legendre $4$ điểm trên đoạn $[-1, 1]$:
> $$\int_{-1}^{1} f(x) \, dx \approx c_0 f(x_0) + c_1 f(x_1) + c_2 f(x_2) + c_3 f(x_3)$$
> 
> Với các giá trị số thực xấp xỉ:
> $$\int_{-1}^{1} f(x) \, dx \approx 0.347855 f(-0.861136) + 0.652145 f(-0.339981) + 0.652145 f(0.339981) + 0.347855 f(0.861136)$$

> [!exr]  (Bài 3)
> Sử dụng Matlab và công thức Gauss–Legendre với $n = 1, 2, 3$, hãy xấp xỉ các tích phân sau và so sánh kết quả với các công thức Newton–Cotes đóng (hình thang và Simpson):  
>  
> a) $\int_{0}^{1} x^2 e^{-x} \, dx$  
>  
> b) $\int_{0}^{1} x(1 - x^2) \, dx$  
>  
> c) $\int_{1}^{2} x \ln(x) \, dx$  
>  
> d) $\int_{-1}^{1} (1 - x^2)^{-1/2} e^{x} \, dx$  
>  
> e) $\int_{-1}^{1} (1 - x^2)^{1/2} \cos x \, dx$

> [!sol]
> 1. Code: 
> - gauss_legendre.m
> > [!code]- Matlab
> > ```matlab
> > function [I, x_real, c_real] = gauss_legendre(f, a, b, n)
> >     % Tinh da thuc Legendre bac n bang bieu thuc ky hieu
> >     syms x_sym; % Dinh nghia bien ky hieu de viet cong thuc goc
> >     
> >     P0 = sym(1);         % P_0(x) = 1
> >     P1 = x_sym;          % P_1(x) = x
> >     
> >     Pk_minus_1 = P0;
> >     Pk = P1;
> >     
> >     % Vong lap chay cong thuc truy hoi goc
> >     for k = 1:n-1
> >         % Cong thuc goc: P_{k+1}(x) = [ (2k+1)*x*P_k(x) - k*P_{k-1}(x) ] / (k+1)
> >         Pk_plus_1 = ((2*k + 1) * x_sym * Pk - k * Pk_minus_1) / (k + 1);
> >         
> >         % Cap nhat lap
> >         Pk_minus_1 = Pk;
> >         Pk = Pk_plus_1;
> >     end
> >     
> >     % Lay da thuc bac n cuoi cung
> >     if n == 1
> >         Pn = P1;
> >     else
> >         Pn = Pk;
> >     end
> >     
> >     % Tim nghiem cua Pn(x) = 0
> >     % double() de chuyen tu dang ky hieu sang dang so thuc luu tru trong may tinh
> >     x_std = double(vpasolve(Pn == 0, x_sym)); 
> >     x_std = sort(x_std); % Sap xep cac moc tu nho den lon [-1, 1]
> > 
> >     % Tim trong so qua he Vandermonde 
> >     V = zeros(n, n);
> >     mu = zeros(n, 1);
> >     for k = 0:n-1
> >         V(k+1, :) = x_std'.^k; 
> >         mu(k+1) = (1 - (-1)^(k+1)) / (k+1); 
> >     end
> >     c_std = V \ mu; 
> > 
> > 
> >     % Doi bien affine ve mien [a, b]
> >     x_real = ((b - a)/2) * x_std + ((b + a)/2);
> >     c_real = ((b - a)/2) * c_std; 
> >     
> >     I = sum(c_real .* f(x_real));
> > end
> > ```
> 
> - trapezoid.m
> > [!code]- Matlab
> > ```matlab
> > function I_trap = trapezoid(f, a, b)
> >     h = b - a;
> >     I_trap = h * (f(a) + f(b)) / 2;
> > end
> > ```
> 
> - simpson.m
> > [!code]- Matlab
> > ```matlab
> > function I_simp = simpson(f, a, b)
> >     h = b - a;
> >     m = (a + b) / 2;
> >     I_simp = (h / 6) * (f(a) + 4*f(m) + f(b));
> > end
> > ```
> 
> - main.m
> >[!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu
> > functions = {
> >     @(x) (x.^2) .* exp(-x),  0,  1, 'Câu a';
> >     @(x) x .* (1 - x.^2),    0,  1, 'Câu b';
> >     @(x) x .* log(x),        1,  2, 'Câu c';
> >     @(x) (1 - x.^2).^(-0.5) .* exp(x), -1,  1, 'Câu d';
> >     @(x) (1 - x.^2).^(0.5)  .* cos(x), -1,  1, 'Câu e'
> >     };
> > 
> > num_cases = size(functions, 1);
> > 
> > % Tinh toan bang Gauss-Legendre
> > for idx = 1:num_cases
> >     f     = functions{idx, 1};
> >     a     = functions{idx, 2};
> >     b     = functions{idx, 3};
> >     label = functions{idx, 4};
> > 
> >     [I_gauss1, ~, ~] = gauss_legendre(f, a, b, 1);
> >     [I_gauss2, ~, ~] = gauss_legendre(f, a, b, 2);
> >     [I_gauss3, ~, ~] = gauss_legendre(f, a, b, 3);
> > 
> >     fprintf('Gauss-Legendre (n = 1): %1.10f\n', I_gauss1);
> >     fprintf('Gauss-Legendre (n = 2): %1.10f\n', I_gauss2);
> >     fprintf('Gauss-Legendre (n = 3): %1.10f\n', I_gauss3);
> > 
> >     % Tinh toan bang Newton-Cotes don
> >     I_trap = trapezoid(f, a, b);
> >     I_simp = simpson(f, a, b);
> > 
> >     fprintf('Quy tắc Hình thang   : %1.10f\n', I_trap);
> >     fprintf('Quy tắc Simpson 1/3  : %1.10f\n', I_simp);
> >     fprintf('\n');
> > end
> > ```
> 
> 2. Bảng so sánh:
> $$
> \begin{array}{|c|c|c|c|c|}
> \hline
> \text{Bài tập} & \text{Hình thang (Đơn)} & \text{Simpson 1/3 (Đơn)} & \text{Gauss } (n=1) & \text{Gauss } (n=2) & \text{Gauss } (n=3) \\
> \hline
> \text{Câu a)} & 0.1839397206 & 0.1624016835 & 0.1516326649 & 0.1594104310 & 0.1605953868 \\
> \text{Câu b)} & 0.0000000000 & 0.2500000000 & 0.3750000000 & 0.2500000000 & 0.2500000000 \\
> \text{Câu c)} & 0.6931471806 & 0.6365141683 & 0.6081976622 & 0.6361494996 & 0.6362926191 \\
> \text{Câu d)} & \infty & \infty & 2.0000000000 & 2.8692050189 & 3.1996411328 \\
> \text{Câu e)} & 0.0000000000 & 1.3333333333 & 2.0000000000 & 1.3683042849 & 1.3911310979 \\
> \hline
> \end{array}
> $$

> [!exr]  (Bài 1)
> Dùng Matlab vẽ đồ thị các đa thức Legendre $P_n(x)$ với $n = 1, 2, 3, 4, 5$.  
> Yêu cầu: sử dụng các lệnh `xlabel`, `ylabel`, `legend`, `title`, … để chú thích hình vẽ đầy đủ.

> [!sol]
> - Code:
> > [!code]- Matlab
> > ```matlab
> >clc; clear; close all;
> > 
> > x = linspace(-1, 1, 200);
> > 
> > % Ve do thi su dung ham co san legendre(n, x)
> > % Ham legendre(n, x) tra ve ma trận chua cac ham lien ket, dong đau tien la P_n(x)
> > figure('Name', 'Legendre Polynomials');
> > hold on;
> > 
> > for n = 1:5
> >     P = legendre(n, x);
> >     plot(x, P(1, :), 'LineWidth', 1.5);
> > end
> > 
> > title('Đồ thị các đa thức Legendre P_n(x) với n = 1, 2, 3, 4, 5');
> > xlabel('Trục x');
> > ylabel('Giá trị P_n(x)');
> > legend('P_1(x)', 'P_2(x)', 'P_3(x)', 'P_4(x)', 'P_5(x)', 'Location', 'best');
> > grid on;
> > hold off;
> > ```
> 
> ![[THGTS_Tuần 13 - Bài 1.webp]]



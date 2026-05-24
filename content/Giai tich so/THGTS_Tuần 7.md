
> [!exr] 
> Cho hàm $f(x) = 3xe^{x} - \cos x$. Sử dụng dữ liệu bảng 
> $$
> \begin{array}{|l|l|}
> \hline x & f(x) \\
> \hline 1.2 & 11.59006 \\
> \hline 1.29 & 13.78176 \\
> \hline 1.30 & 14.04276 \\
> \hline 1.31 & 14.30741 \\
> \hline 1.40 & 16.86187 \\
> \hline
> \end{array}
>
> $$
> để tính giá trị xấp xỉ của $f''(1.3)$ với $h = 0.1$ và $h = 0.01$. Sau đó, xác định giá trị sai số.

> [!sol]
> - Công thức sai phân trung tâm: 
> $$
> \frac{f''(x) = f(x+h) - 2f(x) + f(x-h)}{h^{2}}
> $$
> - Tính xấp xỉ tại $x = 1.3$ và $h = 0.1$:
> $$
> f''(1.3) \approx \frac{f(1.4) - 2f(1.3) + f(1.2)}{0.1^2} = 36.641
> $$
> 
> - Tính xấp xỉ tại $x = 1.3$ và $h = 0.01$:
> $$
> f''(1.3) \approx \frac{f(1.31) - 2f(1.3) + f(1.29)}{0.01^2} = 36.5
> $$
> 
> - Tính đạo hàm chính xác tại $x = 1.3$:
> $$
> f''(1.3) = 3e^{1.3}(1.3+2) + \cos(1.3) = 9.9e^{1.3} + \cos(1.3) \approx 36.59354
> $$
> 
> - Sai số tuyệt đối: 
> 	- $h = 0.1$: $|36.59354 - 36.641| \approx 0.04746$.
> 	- $h = 0.01$: $|36.59354 - 36.5| \approx 0.09354$.

> [!lem] 
> Cho hàm số $f(z)$ và $N$ điểm lưới phân biệt $x_j = x + \alpha_j h$ với $j = 0, 1, \dots, N-1$. Công thức xấp xỉ đạo hàm cấp $n$ của $f(z)$ tại $z=x$ có dạng chuỗi Taylor:
> $$
> f^{(n)}(x) \approx \frac{1}{h^n} \sum_{j=0}^{N-1} c_j f(x_j) \tag{1} = \frac{1}{h^n} \mathbf{c}^T \mathbf{f}
> $$
> Khi đó, vector hệ số sai phân $\mathbf{c} = (c_0, c_1, \dots, c_{N-1})^T$ là nghiệm của hệ phương trình tuyến tính:
> $$
> V^T \mathbf{c} = n! \cdot \mathbf{e}_n \tag{2}
> $$
> Với $V^T$ là ma trận Vandermonde chuyển vị kích thước $N \times N$, phần tử tại hàng $m$, cột $j$ là $\alpha_j^m$, $\mathbf{e_{n}}$ là vector đơn vị có giá trị $1$ tại vị trí $n$ và bằng $0$ tại vị trí khác.

> [!prf]
> Gọi $P(z)$ là đa thức nội suy bậc $N-1$ của hàm $f(z)$, thỏa điều kiện:
> $$
> P(x_{j}) = f(x_{j}), \forall j \tag{3}
> $$
> Đặt $s = \frac{z-x}{h}$, ta có ${} s_{j} = \alpha_{j} {}$, $\forall j$.
> Đặt $\tilde{P}(s)  = P(x + sh)$ là đa thức nội suy theo biến $s$, có dạng tổng quát: 
> $$
> \tilde{P}(s) = \sum_{m=0}^{N - 1}a_{m}s^{m} \tag{4}
> $$
> Khi đó từ điều kiện $(1)$, ta có: 
> $$
> \tilde{P}(\alpha_{j}) = f(x_{j}), \forall j \tag{5}
> $$
> Ta có phương trình ma trận Vandermonde tương ứng:
> $$
> V\mathbf{a} = \mathbf{f} \quad \implies \quad \mathbf{a} = V^{-1}\mathbf{f} \tag{6}
> $$
> với $V_{j,m} = \alpha_{j}^m$, $\mathbf{a} = (a_{0}, \dots, a_{N-1})^T$ và $\mathbf{f} = (f(x_{0}), \dots, f(x_{N-1})^T)$.
> Ta có đạo hàm hợp $\frac{d}{dz} = \frac{1}{h} \frac{d}{ds}$, cấp $n$ tại $x$ ứng với cấp $n$ tại $s = 0$:
> $$
> P^{(n)}(x) = \frac{1}{h^{n}}\tilde{P}^{(n)}(0) \tag{7}
> $$
> Tính đạo hàm của đa thức $\tilde{P}(s)$ tại $s=0$, mọi bậc khác $n$ đều triệt tiêu: 
> $$
> \tilde{P}^{(n)}(0) = n! \cdot a_n \tag{8}
> $$
> Sử dụng $(6)$ với $a_{n}= \mathbf{e^{T}_{n}a}$ là giá trị thứ $n$ của vector $a$:
> $$
> n! \cdot a_n = n! \cdot \mathbf{e}_n^T \mathbf{a} = n! \cdot \mathbf{e}_n^T V^{-1} \mathbf{f} \tag{9}
> $$
> Thay $(9)$ và $(8)$ vào ${} (7) {}$:
> $$
> P^{(n)}(x) = \frac{1}{h^n} \left( n! \cdot \mathbf{e}_n^T V^{-1} \right) \mathbf{f} \tag{10}
> $$
> Để $f^{(n)}(x) \approx P^{(n)}(x)$, ta so sánh và đồng nhất ${} (10) {}$ với $(1)$:
> $$
> \frac{1}{h^n} \mathbf{c}^T \mathbf{f} = \frac{1}{h^n} \left( n! \cdot \mathbf{e}_n^T V^{-1} \right) \mathbf{f}
> $$
> Rút gọn, nhân $V$ vào bên phải hai vế và lấy chuyển vị:
> $$
> V^T \mathbf{c} = n! \cdot \mathbf{e}_n
> $$

> [!exr] (Bài 2,3)
> Sử dụng chuỗi Taylor để rút ra công thức xấp xỉ đạo hàm cấp ba của hàm $f$:
> $$
> f'''(x) \approx \frac{1}{h^3} \Big[ -f(x) + 3f(x+h) - 3f(x+2h) + f(x+3h) \Big]
> $$
> và công thức xấp xỉ đạo hàm cấp một của hàm $f$:
> $$
> f'(x) \approx \frac{2f(x+3h) - 9f(x+2h) + 18f(x+h) - 11f(x)}{6h}
> $$

> [!sol]
> - Ta cần xây dựng công thức đạo hàm trên 4 điểm lưới tiên: $x, x+h, x+2h, x+3h$, do đó $N = 4$ và vector hệ số lưới $\alpha = (0,1,2,3)$.
> - Ta có ma trận chuyển vị Vandermonde:
> $$
> V^T = 
>     \begin{pmatrix}
>         1 & 1 & 1 & 1 \\
>         \alpha_0 & \alpha_1 & \alpha_2 & \alpha_3 \\
>         \alpha_0^2 & \alpha_1^2 & \alpha_2^2 & \alpha_3^2 \\
>         \alpha_0^3 & \alpha_1^3 & \alpha_2^3 & \alpha_3^3
>     \end{pmatrix}
>     =
>     \begin{pmatrix}
>         1 & 1 & 1 & 1 \\
>         0 & 1 & 2 & 3 \\
>         0 & 1 & 4 & 9 \\
>         0 & 1 & 8 & 27
>     \end{pmatrix}
> $$
> 
> - Áp dụng bổ đề cho Bài 2: Tìm công thức xấp xỉ $f'''(x)$, bậc đạo hàm $n = 3$, ta có hệ phương trình:
> $$
> V^T \mathbf{c} = (0, 0, 0, 6)^T
> $$
> 
> - Giải hệ trên ta thu được $c_0 = -1, \quad c_1 = 3, \quad c_2 = -3, \quad c_3 = 1$
> 
> - Với $f^{(n)}(x) \approx \frac{1}{h^n} \sum c_j f(x_j)$, ta có công thức cần tìm:
> 
> $$
>  f'''(x) \approx \frac{1}{h^3} \Big[ -f(x) + 3f(x+h) - 3f(x+2h) + f(x+3h) \Big]
> $$
> 
> - Áp dụng bổ đề cho Bài 3: Tìm công thức xấp xỉ $f'(x)$, bậc đạo hàm $n = 1$, ta có hệ phương trình:
> $$
> V^T \mathbf{c} = (0, 1, 0, 0)^T
> $$
> 
> - Giải hệ trên ta thu được $c_0 = -\frac{11}{6}, \quad c_1 = 3 = \frac{18}{6}, \quad c_2 = -\frac{3}{2} = -\frac{9}{6}, \quad c_3 = \frac{1}{3} = \frac{2}{6}$
> 
> - Với $f^{(n)}(x) \approx \frac{1}{h^n} \sum c_j f(x_j)$, ta có công thức cần tìm:
> 
> $$
> f'(x) \approx \frac{2f(x+3h) - 9f(x+2h) + 18f(x+h) - 11f(x)}{6h}
> $$

> [!exr] (Bài 4,5)
> Xác định công thức tính xấp xỉ $f'(x_{0})$ và $f''(x_{0})$ bằng 5 điểm: $f(x_{0} -2h), f(x_{0}-h), f(x_{0}), f(x_{0}+h), f(x_{0}+2h)$.

> [!sol]
> - Ta cần xây dựng công thức đạo hàm trên 5 điểm lưới đối xứng qua $x_0$: $x_0 - 2h, x_0 - h, x_0, x_0 + h, x_0 + 2h$. do đó $N = 5$ và vector hệ số lưới $\alpha = (-2,-1,0,1,2)$.
> - Ta có ma trận chuyển vị Vandermonde:
> $$
> V^T = \begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\ (-2)^1 & (-1)^1 & 0^1 & 1^1 & 2^1 \\ (-2)^2 & (-1)^2 & 0^2 & 1^2 & 2^2 \\ (-2)^3 & (-1)^3 & 0^3 & 1^3 & 2^3 \\ (-2)^4 & (-1)^4 & 0^4 & 1^4 & 2^4 \end{pmatrix} = \begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\ -2 & -1 & 0 & 1 & 2 \\ 4 & 1 & 0 & 1 & 4 \\ -8 & -1 & 0 & 1 & 8 \\ 16 & 1 & 0 & 1 & 16 \end{pmatrix}
> $$
> 
> - Áp dụng bổ đề cho Bài 4: Tìm công thức xấp xỉ $f'(x_{0})$, bậc đạo hàm $n = 1$, ta có hệ phương trình:
> $$
> V^T \mathbf{c} = (0, 1, 0, 0, 0)^T
> $$
> 
> - Giải hệ trên ta thu được $c_{-2} = \frac{1}{12}, \quad c_{-1} = -\frac{2}{3},  \quad c_{0} = 0, \quad c_{1} = \frac{2}{3}, \quad c_2 = -\frac{1}{12}$
> 
> - Với $f^{(n)}(x) \approx \frac{1}{h^n} \sum c_j f(x_j)$, ta có công thức cần tìm:
> 
> $$
> f'(x_0) \approx \frac{f(x_0-2h) - 8f(x_0-h) + 8f(x_0+h) - f(x_0+2h)}{12h}
> $$
> 
> - Áp dụng bổ đề cho Bài 5: Tìm công thức xấp xỉ $f''(x_{0})$, bậc đạo hàm $n = 2$, ta có hệ phương trình:
> $$V^T \mathbf{c} = (0, 0, 2, 0, 0)^T$$
> 
> - Giải hệ trên ta thu được $c_{-2} = -\frac{1}{12}, \quad c_{-1} = \frac{4}{3}, \quad c_0 = -\frac{5}{2}, \quad c_1 = \frac{4}{3}, \quad c_2 = -\frac{1}{12}$
> 
> - Với $f^{(n)}(x) \approx \frac{1}{h^n} \sum c_j f(x_j)$, ta có công thức cần tìm:
> $$f''(x_0) \approx \frac{-f(x_0-2h) + 16f(x_0-h) - 30f(x_0) + 16f(x_0+h) - f(x_0+2h)}{12h^2}$$

> [!exr] (Bài 6,7)
> Cho $f(x) = \sin x - \cos x$, $f(x) = (1+x)^{-1}$:
> a) Sử dụng công thức sai ở trên để xấp xỉ $f'(0)$ cho hàm $f$ thứ nhất và $f'(1)$ cho hàm $f$ thứ hai. Với khoảng chia $h = 10^-1, 10^{-2}, \dots 10^{-12}$, lập bảng sai số, nhận xét. Sai số nhỏ nhất có phù hợp với dự đoán lý thuyết không?
> b) Vẽ đồ thị biểu diễn các kết quả sai số thu được với $h$ ứng với từng bảng sai số ở câu a

> [!sol]
> 1. Bảng sai số:
> $$
> \begin{array}{|c|c|c|c|}
> \hline
> h & \text{Sai số Tiến } \mathcal{O}(h) & \text{Sai số Lùi } \mathcal{O}(h) & \text{Sai số Trung tâm } \mathcal{O}(h^2) \\
> \hline
> 10^{-1} & 4.8293 \times 10^{-2} & 5.1624 \times 10^{-2} & 1.6658 \times 10^{-3} \\
> 10^{-2} & 4.9833 \times 10^{-3} & 5.0166 \times 10^{-3} & 1.6667 \times 10^{-5} \\
> 10^{-3} & 4.9983 \times 10^{-4} & 5.0017 \times 10^{-4} & 1.6667 \times 10^{-7} \\
> 10^{-4} & 4.9998 \times 10^{-5} & 5.0002 \times 10^{-5} & 1.6671 \times 10^{-9} \\
> 10^{-5} & 5.0000 \times 10^{-6} & 5.0000 \times 10^{-6} & 1.5653 \times 10^{-11} \\
> 10^{-6} & 5.0007 \times 10^{-7} & 5.0013 \times 10^{-7} & 2.6755 \times 10^{-11} \\
> 10^{-7} & 4.9434 \times 10^{-8} & 5.0486 \times 10^{-8} & 5.2636 \times 10^{-10} \\
> \textbf{10}^{-8} & \mathbf{5.0248 \times 10^{-9}} & \mathbf{6.0775 \times 10^{-9}} & 5.2636 \times 10^{-10} \\
> 10^{-9} & 2.8282 \times 10^{-8} & 8.2740 \times 10^{-8} & 2.7229 \times 10^{-8} \\
> 10^{-10} & 8.2740 \times 10^{-8} & 8.2740 \times 10^{-8} & 8.2740 \times 10^{-8} \\
> 10^{-11} & 8.2740 \times 10^{-8} & 8.2740 \times 10^{-8} & 8.2740 \times 10^{-8} \\
> 10^{-12} & 2.2122 \times 10^{-5} & 8.8901 \times 10^{-5} & 3.3389 \times 10^{-5} \\
> \hline
> \end{array}
> $$
>
> 2. Nhận xét:
> - Sự hội tụ: Khi $h$ giảm dần từ $10^{-1}$, sai số của cả 3 phương pháp đều giảm. Đặc biệt, sai số của phương pháp Sai phân trung tâm giảm nhanh hơn hẳn (bậc $\mathcal{O}(h^2)$) so với Sai phân tiến và lùi (bậc $\mathcal{O}(h)$).
> - Giới hạn của độ chính xác: Sai số không tiếp tục giảm mãi khi $h \to 0$. Ta nhận thấy sự đảo chiều:
> 	  - Đối với Sai phân tiến/lùi: Sai số đạt mức nhỏ nhất ở quanh $h \approx 10^{-8}$.
> 	  - Đối với Sai phân trung tâm: Sai số đạt mức nhỏ nhất sớm hơn, quanh khu vực $h \approx 10^{-5}$ đến $10^{-6}$.
> - Nguyên nhân: Khi $h$ quá nhỏ ($h < 10^{-8}$), tử số $f(x_0+h) - f(x_0)$ là phép trừ của hai số gần bằng nhau, gây ra hiện tượng "mất chữ số có nghĩa" do làm tròn (Round-off error) trong bộ nhớ máy tính. Lúc này, sai số làm tròn lấn át sai số cắt cụt (Truncation error) của công thức xấp xỉ.
> - Kết luận: Sai số nhỏ nhất thu được từ thực nghiệm tính toán phù hợp với dự đoán của lý thuyết: sai số tổng cộng bao gồm sai số cắt cụt và sai số làm tròn máy. Do đó, chọn $h$ càng nhỏ không đồng nghĩa với việc kết quả xấp xỉ đạo hàm sẽ càng chính xác!
>   
> 3. Code:
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > h_array = 10.^(-1:-1:-12)'; % Cot cac gia tri h tu 10^-1 den 10^-12
> > n = length(h_array);
> > 
> > % Du lieu bai 6
> > f6 = @(x) sin(x) - cos(x);
> > x0_6 = 0;
> > exact_6 = 1; % Dao ham chinh xac f'(0) = cos(0) + sin(0) = 1
> > 
> > % Du lieu bai 7
> > f7 = @(x) (1 + x).^(-1);
> > x0_7 = 1;
> > exact_7 = -0.25; % Dao ham chinh xac f'(1) = -(1+1)^(-2) = -0.25
> > 
> > % Khởi tạo các cột rỗng để chứa kết quả sai số
> > err_tien_6 = zeros(n, 1); err_lui_6 = zeros(n, 1); err_tt_6 = zeros(n, 1);
> > err_tien_7 = zeros(n, 1); err_lui_7 = zeros(n, 1); err_tt_7 = zeros(n, 1);
> > 
> > 
> > for i = 1:n
> >     h = h_array(i);
> >     
> >     % Tinh bai 6
> >     tien_6 = (f6(x0_6 + h) - f6(x0_6)) / h;
> >     lui_6  = (f6(x0_6) - f6(x0_6 - h)) / h;
> >     tt_6   = (f6(x0_6 + h) - f6(x0_6 - h)) / (2*h);
> >     
> >     err_tien_6(i) = abs(tien_6 - exact_6);
> >     err_lui_6(i)  = abs(lui_6 - exact_6);
> >     err_tt_6(i)   = abs(tt_6 - exact_6);
> >     
> >     % Tinh bai 7
> >     tien_7 = (f7(x0_7 + h) - f7(x0_7)) / h;
> >     lui_7  = (f7(x0_7) - f7(x0_7 - h)) / h;
> >     tt_7   = (f7(x0_7 + h) - f7(x0_7 - h)) / (2*h);
> >     
> >     err_tien_7(i) = abs(tien_7 - exact_7);
> >     err_lui_7(i)  = abs(lui_7 - exact_7);
> >     err_tt_7(i)   = abs(tt_7 - exact_7);
> > end
> > 
> > % Hien thi ket qua
> > bang_bai_6 = table(h_array, err_tien_6, err_lui_6, err_tt_6, ...
> >     'VariableNames', {'h', 'SaiSo_Tien', 'SaiSo_Lui', 'SaiSo_TrungTam'});
> > disp(bang_bai_6);
> > 
> > bang_bai_7 = table(h_array, err_tien_7, err_lui_7, err_tt_7, ...
> >     'VariableNames', {'h', 'SaiSo_Tien', 'SaiSo_Lui', 'SaiSo_TrungTam'});
> > disp(bang_bai_7);
> > 
> > % Tao khung
> > figure('Color', 'w', 'Position', [100, 100, 1000, 450]);
> > 
> > % Ve do thi bai 6
> > subplot(1, 2, 1);
> > loglog(h_array, err_tien_6, 'b-o', 'LineWidth', 1.5); hold on;
> > loglog(h_array, err_lui_6, 'r-s', 'LineWidth', 1.5);
> > loglog(h_array, err_tt_6, 'k-d', 'LineWidth', 1.5);
> > set(gca, 'XDir', 'reverse'); % Lật trục x để h nhỏ dần từ trái sang phải
> > title('Bài 6: Sai số xấp xỉ f(x) = sin(x) - cos(x)');
> > xlabel('Bước lưới h'); ylabel('Sai số tuyệt đối');
> > legend('Tiến', 'Lùi', 'Trung tâm', 'Location', 'best');
> > grid on; hold off;
> > 
> > % Ve do thi bai 7
> > subplot(1, 2, 2);
> > loglog(h_array, err_tien_7, 'b-o', 'LineWidth', 1.5); hold on;
> > loglog(h_array, err_lui_7, 'r-s', 'LineWidth', 1.5);
> > loglog(h_array, err_tt_7, 'k-d', 'LineWidth', 1.5);
> > set(gca, 'XDir', 'reverse');
> > title('Bài 7: Sai số xấp xỉ f(x) = (1+x)^{-1}');
> > xlabel('Bước lưới h'); ylabel('Sai số tuyệt đối');
> > legend('Tiến', 'Lùi', 'Trung tâm', 'Location', 'best');
> > grid on; hold off;
> > ```
> 
> ![[THGTS_Tuần 7 - Bài 6,7.webp]]


$\xi$
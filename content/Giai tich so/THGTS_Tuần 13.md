
> [!exr]
> Trình bày cách xây dựng công thức cầu phương Gauss-Legendre với $n = 4$.

> [!sol]
> # Xây dựng chi tiết Công thức Gauss-Legendre với $n = 4$ điểm mốc
> 
> ## Bài toán đặt ra
> Thiết lập công thức cầu phương Gauss trên đoạn tiêu chuẩn $[a, b] = [-1, 1]$ với hàm trọng số $w(x) = 1$ sử dụng số điểm mốc là $4$ (chỉ số chạy từ $i = 0$ đến $3$). Công thức cần đạt bậc chính xác đại số tối đa là $2(3) + 1 = 7$.
> 
> ---
> 
> ## Bước 1: Xây dựng đa thức trực giao đơn khởi bậc 4 ($P_4$)
> 
> Để tìm các mốc nội suy, ta cần xác định đa thức trực giao đơn khởi (monic) bậc 4 thông qua hệ thức truy hồi 3 số hạng:
> $$P_k(x) = (x - a_k)P_{k-1}(x) - b_k P_{k-2}(x)$$
> 
> Do miền tích phân $[-1, 1]$ và hàm trọng số $w(x) = 1$ mang tính chất đối xứng qua gốc tọa độ, tất cả các hệ số $a_k = \frac{\langle x P_{k-1}, P_{k-1} \rangle}{\langle P_{k-1}, P_{k-1} \rangle}$ của họ đa thức Legendre đều bằng $0$. Hệ thức truy hồi rút gọn thành:
> $$P_k(x) = x P_{k-1}(x) - b_k P_{k-2}(x)$$
> 
> Ta xuất phát từ hai đa thức cơ sở đầu tiên:
> - $P_0(x) = 1$
> - $P_1(x) = x$
> 
> ### 1. Tính đa thức bậc 2 ($P_2$)
> Hệ thức truy hồi: $P_2(x) = x P_1(x) - b_2 P_0(x) = x^2 - b_2$.
> - Tính hệ số $b_2$:
>   $$b_2 = \frac{\langle x P_1, P_0 \rangle}{\langle P_0, P_0 \rangle} = \frac{\int_{-1}^{1} x^2 \, dx}{\int_{-1}^{1} 1 \, dx} = \frac{2/3}{2} = \frac{1}{3}$$
> - Vậy: $P_2(x) = x^2 - \frac{1}{3}$.
> 
> ### 2. Tính đa thức bậc 3 ($P_3$)
> Hệ thức truy hồi: $P_3(x) = x P_2(x) - b_3 P_1(x) = x\left(x^2 - \frac{1}{3}\right) - b_3 x$.
> - Tính hệ số $b_3$:
>   $$b_3 = \frac{\langle x P_2, P_1 \rangle}{\langle P_1, P_1 \rangle} = \frac{\int_{-1}^{1} x^2\left(x^2 - \frac{1}{3}\right) dx}{\int_{-1}^{1} x^2 \, dx} = \frac{\int_{-1}^{1} \left(x^4 - \frac{1}{3}x^2\right) dx}{2/3} = \frac{\frac{2}{5} - \frac{2}{9}}{2/3} = \frac{4/45}{2/3} = \frac{2}{15}$$
> - Thay vào hệ thức:
>   $$P_3(x) = x^3 - \frac{1}{3}x - \frac{2}{15}x = x^3 - \frac{3}{15}x = x^3 - \frac{3}{5}x$$
> 
> ### 3. Tính đa thức bậc 4 ($P_4$)
> Hệ thức truy hồi: $P_4(x) = x P_3(x) - b_4 P_2(x) = x\left(x^3 - \frac{3}{5}x\right) - b_4\left(x^2 - \frac{1}{3}\right)$.
> - Tính hệ số $b_4$:
>   $$b_4 = \frac{\langle x P_3, P_2 \rangle}{\langle P_2, P_2 \rangle}$$
> - Tính tử số:
>   $$\int_{-1}^{1} x^2\left(x^3 - \frac{3}{5}x\right)\left(x^2 - \frac{1}{3}\right) \text{ không cần tính dạng này, ta dùng tính chất trực giao: } \langle x P_3, P_2 \rangle = \langle P_3, x P_2 \rangle$$
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
> ---
> 
> ## Bước 2: Tìm các mốc nội suy $x_i$
> 
> Các mốc nội suy của hệ thống chính là nghiệm của phương trình trùng phương $P_4(x) = 0$:
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
> ---
> 
> ## Bước 3: Tính toán các trọng số $c_i$ bằng đa thức Lagrange
> 
> Theo định lý cấu phương, các trọng số được tính bằng công thức tích phân của đa thức cơ sở Lagrange bậc 3:
> $$c_i = \int_{-1}^{1} \prod_{j=0, j \neq i}^{3} \frac{x - x_j}{x_i - x_j} dx$$
> 
> Do tính chất đối xứng của miền lấy mẫu $[-1, 1]$, ta luôn có cặp trọng số bằng nhau: $c_0 = c_3$ và $c_1 = c_2$. Thay vì tích phân trực tiếp đa thức Lagrange cồng kềnh, ta có thể giải hệ phương trình hệ số bất định bằng cách ép công thức chính xác cho các hàm đa thức cơ sở $f(x) = 1$ và $f(x) = x^2$:
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
> Trong đó $t_1 = x_0^2 = \frac{15 + 2\sqrt{30}}{35}$ và $t_2 = x_1^2 = \frac{15 - 2\sqrt{30}}{35}$. Giải hệ phương trình đại số tuyến tính này, ta thu được:
> - $c_0 = c_3 = \frac{18 - \sqrt{30}}{36} \approx 0.347855$
> - $c_1 = c_2 = \frac{18 + \sqrt{30}}{36} \approx 0.652145$
> 
> ---
> 
> ## Kết luận đại số
> 
> Công thức cầu phương Gauss-Legendre $4$ điểm hoàn chỉnh trên đoạn $[-1, 1]$ được xây dựng thành công:
> $$\int_{-1}^{1} f(x) \, dx \approx c_0 f(x_0) + c_1 f(x_1) + c_2 f(x_2) + c_3 f(x_3)$$
> 
> Với các giá trị số thực xấp xỉ cấu hình trên máy tính:
> $$\int_{-1}^{1} f(x) \, dx \approx 0.347855 f(-0.861136) + 0.652145 f(-0.339981) + 0.652145 f(0.339981) + 0.347855 f(0.861136)$$

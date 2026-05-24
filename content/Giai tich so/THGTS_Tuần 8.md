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
> 2. Ma trận biểu diễn
> - Thay ${} t_{i} = 0.2, 0.4, 0.6, 0.8 {}$ vào $(2)$:
> 	- Tại $t_{i} = 0.2$: $0.7y_0 - 1.92y_1 + 1.3y_2 = 0.2304$
> 	    Thay $y_{0} = 1$ và chuyển vế:  $-1.92y_1 + 1.3y_2 = -0.4696$
> 	- Tại $t_{i} = 0.4$: - $0.7y_1 - 1.92y_2 + 1.3y_3 = 0.3136$
> 	- Tại $t_{i} = 0.6$: $0.7y_2 - 1.92y_3 + 1.3y_4 = 0.4096$
> 	- Tại $t_{i} = 0.8$: $0.7y_3 - 1.92y_4 + 1.3y_5 = 0.5184$
> 	     Thay $y_{5} = 6$ và chuyển vế: $0.7y_3 - 1.92y_4 = -7.2816$
> - Ma trận biểu diễn hệ $A.Y = F$:
> $$
> \begin{pmatrix} -1.92 & 1.3 & 0 & 0 \\ 0.7 & -1.92 & 1.3 & 0 \\ 0 & 0.7 & -1.92 & 1.3 \\ 0 & 0 & 0.7 & -1.92 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \\ y_4 \end{pmatrix} = \begin{pmatrix} -0.4696 \\ 0.3136 \\ 0.4096 \\ -7.2816 \end{pmatrix}
> $$






$\xi$
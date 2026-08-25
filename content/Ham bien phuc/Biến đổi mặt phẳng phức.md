# Các hàm biến phức sơ cấp

## 1. Hàm Mũ Phức ($w = e^z$)

> [!def] Công thức tổng quát
> Cho số phức $z = x + iy$. Hàm mũ phức $e^z$ được định nghĩa qua công thức Euler:
> $$w = e^z = e^{x+iy} = e^x(\cos y + i\sin y)$$
> - Mô-đun: $|e^z| = e^x$
> - Argument: $\arg(e^z) = y + 2k\pi$

> [!thm] Tính chất và So sánh với hàm thực
> **1. Các tính chất kế thừa từ hàm thực (ĐÚNG):**
> - $e^{z_1 + z_2} = e^{z_1}e^{z_2}$
> - $e^z \neq 0, \forall z \in \mathbb{C}$
> - Đạo hàm: $(e^z)' = e^z$
> 
> **2. Khác biệt cốt lõi (Chu kỳ thuần ảo):**
> Khác với hàm $e^x$ trên tập thực là đơn ánh, hàm $e^z$ là một hàm tuần hoàn với chu kỳ $T = 2\pi i$.
> $$e^{z + 2k\pi i} = e^z \cdot e^{2k\pi i} = e^z (\cos(2k\pi) + i\sin(2k\pi)) = e^z$$

> [!exm] Ví dụ tính toán
> Tính giá trị của $e^{2 + i\frac{\pi}{3}}$:
> $$e^{2 + i\frac{\pi}{3}} = e^2 \left( \cos\frac{\pi}{3} + i\sin\frac{\pi}{3} \right) = e^2 \left( \frac{1}{2} + i\frac{\sqrt{3}}{2} \right) = \frac{e^2}{2} + i\frac{e^2\sqrt{3}}{2}$$

### I. Bài toán Khảo sát Tổng quát

> [!thm] Phát biểu Bài toán
> Khảo sát phép biến đổi hình học qua ánh xạ mũ phức $w = f(z) = e^z$, trong đó $z = x + iy$ thuộc mặt phẳng phức $z$, và $w = u + iv = \rho e^{i\phi}$ thuộc mặt phẳng phức $w$. 
> 
> Chứng minh rằng phép biến đổi này ánh xạ các đường thẳng vuông góc trong hệ tọa độ Descartes (mặt phẳng $z$) thành các đường tròn và tia trực giao nhau trong hệ tọa độ cực (mặt phẳng $w$), qua đó minh chứng tính bảo giác của hàm số.

### II. Thiết lập Công thức 

Ta biểu diễn số phức $z$ dưới dạng đại số $z = x + iy$ và số phức $w$ dưới dạng lượng giác (cực) $w = \rho(\cos\phi + i\sin\phi) = \rho e^{i\phi}$.

> [!def] Hệ thức Tọa độ Cơ sở
> Áp dụng công thức Euler cho hàm mũ phức, ta có phương trình liên hệ:
> $$w = e^z = e^{x+iy} = e^x \cdot e^{iy} = e^x(\cos y + i\sin y)$$
> 
> Bằng cách đồng nhất mô-đun và argument của hai vế, ta thu được hệ phương trình quỹ đạo:
> $$\begin{cases} \rho = |w| = e^x \\ \phi = \arg(w) = y + 2k\pi \quad (k \in \mathbb{Z}) \end{cases}$$

### III. Khảo sát Quỹ đạo các Họ Đường Cong

> [!prf] 1. Ảnh của họ đường thẳng đứng $x = c$
> Giả sử cố định phần thực $x = c$ ($c \in \mathbb{R}$) và cho phần ảo $y$ biến thiên tự do trên toàn trục thực ($y \in \mathbb{R}$).
> - **Mô-đun:** Ta có $|w| = \rho = e^c$. Vì $c$ là hằng số nên $e^c$ là một hằng số dương không đổi.
> - **Argument:** $\phi = y$. Khi $y$ chạy từ $-\infty$ đến $+\infty$, góc lượng giác $\phi$ quét liên tục trên đường tròn.
> 
> **Kết luận:** Tập hợp các điểm ảnh $w$ luôn cách gốc tọa độ một khoảng cố định $e^c$ tạo thành một **đường tròn tâm $O$, bán kính $R = e^c$**. Sự biến thiên của $y$ tương ứng với việc điểm ảnh di chuyển tuần hoàn quanh đường tròn này vô số lần theo chiều dương.

> [!prf] 2. Ảnh của họ đường nằm ngang $y = k$
> Giả sử cố định phần ảo $y = k$ ($k \in \mathbb{R}$) và cho phần thực $x$ biến thiên liên tục ($x \in \mathbb{R}$).
> - **Argument:** Ta có $\arg(w) = \phi = k$ (hằng số không đổi). Do đó, điểm ảnh $w$ luôn nằm trên đường thẳng có góc nghiêng $k$ so với trục thực.
> - **Mô-đun:** $\rho = e^x$. Vì hàm mũ thực luôn dương, khi $x \to -\infty$ thì $\rho \to 0$, và khi $x \to +\infty$ thì $\rho \to +\infty$. Suy ra giới hạn khoảng giá trị $\rho \in (0, +\infty)$.
> 
> **Kết luận:** Quỹ đạo của điểm ảnh $w$ là một **tia xuất phát từ gốc tọa độ $O$ nhưng không chứa gốc $O$**, kéo dài ra vô cực và hợp với trục hoành $u$ một góc bằng $k$.



### IV. Hệ quả về Tính Bảo Giác (Conformal Mapping)

> [!thm] Sự Trực giao và Bảo toàn Góc
> Trong mặt phẳng $z$, họ hai đường thẳng $x = c$ và $y = k$ luôn cắt nhau vuông góc ($90^\circ$) tại điểm $z_0 = c + ik$.
> 
> Qua phép biến đổi $w = e^z$, chúng biến thành một đường tròn bán kính $e^c$ và một tia có góc định hướng $k$. Theo tính chất hình học phẳng, mọi tia phát xuất từ tâm luôn vuông góc với tiếp tuyến của đường tròn tại giao điểm $w_0 = e^c e^{ik}$ của chúng.
> 
> **Kết luận:** Góc vuông giữa các đường cong được bảo toàn toàn vẹn cả về chiều lẫn độ lớn. Điều này phù hợp với lý thuyết vi phân phức: Hàm số $f(z) = e^z$ chỉnh hình trên toàn bộ mặt phẳng phức $\mathbb{C}$ và có đạo hàm $f'(z) = e^z \neq 0, \forall z \in \mathbb{C}$, chứng minh $w = e^z$ là một **ánh xạ bảo giác**.



## V. Hình ảnh Minh họa 

![[image-1.webp]]



## 2. Hàm Logarit Phức ($w = \log z$)

> [!def] Công thức tổng quát (Hàm đa trị)
> Logarit phức là hàm ngược của hàm mũ. Với $z \neq 0$:
> $$\log z = \ln|z| + i\arg(z) = \ln|z| + i(\text{Arg}(z) + 2k\pi) \quad (k \in \mathbb{Z})$$
> Do tính tuần hoàn của hàm mũ, $\log z$ là một hàm đa trị.

> [!thm] Trị chính (Principal Value)
> Để có hàm đơn trị, ta giới hạn argument trong một khoảng chiều dài $2\pi$, thường là $(-\pi, \pi]$. Trị chính được ký hiệu là $\text{Log}(z)$:
> $$\text{Log}(z) = \ln|z| + i\text{Arg}(z) \quad \text{với } -\pi < \text{Arg}(z) \le \pi$$

> [!prf] So sánh tính đúng đắn với hàm thực: Tính chất $\text{Log}(z_1 z_2)$
> Trên tập thực, $\ln(ab) = \ln(a) + \ln(b)$ luôn đúng với $a, b > 0$. Trên tập phức, dưới dạng tập hợp đa trị: $\log(z_1 z_2) = \log z_1 + \log z_2$ là **ĐÚNG**.
> Tuy nhiên, với hàm trị chính $\text{Log}$, đẳng thức $\text{Log}(z_1 z_2) = \text{Log}(z_1) + \text{Log}(z_2)$ là **KHÔNG LUÔN ĐÚNG**.
> **Chứng minh / Phản ví dụ:**
> Xét $z_1 = -1, z_2 = -1$. Ta có $z_1 z_2 = 1$.
> $\text{Log}(z_1 z_2) = \text{Log}(1) = 0$.
> Trong khi đó: $\text{Log}(-1) = \ln(1) + i\pi = i\pi$.
> $\text{Log}(z_1) + \text{Log}(z_2) = i\pi + i\pi = 2\pi i$.
> Rõ ràng $0 \neq 2\pi i$. Công thức tổng quát phải là: $\text{Log}(z_1 z_2) = \text{Log}(z_1) + \text{Log}(z_2) + 2k\pi i$.

> [!exm] Ví dụ tính toán
> Tính $\log(-1 - i)$ và tìm trị chính.
> - Mô-đun: $|-1-i| = \sqrt{2}$. Góc: Trục nằm ở góc phần tư thứ 3, $\text{Arg}(-1-i) = -\frac{3\pi}{4}$.
> - $\log(-1-i) = \ln\sqrt{2} + i\left(-\frac{3\pi}{4} + 2k\pi\right)$.
> - Trị chính ($k=0$): $\text{Log}(-1-i) = \ln\sqrt{2} - i\frac{3\pi}{4}$.

### I. Bài toán Khảo sát Tổng quát

> [!thm] Phát biểu Bài toán
> Khảo sát phép biến đổi hình học qua ánh xạ nhánh chính của logarit phức $w = f(z) = \text{Log}(z)$, trong đó $z = re^{i\theta}$ thuộc mặt phẳng phức $z$ (với miền xác định đã cắt bỏ trục thực âm $z \in \mathbb{C} \setminus (-\infty, 0]$), và $w = u + iv$ thuộc mặt phẳng phức $w$.
> 
> Chứng minh rằng phép biến đổi này ánh xạ các đường cong trực giao trong hệ tọa độ cực (mặt phẳng $z$) gồm các cung tròn đồng tâm và các tia xuất phát từ gốc tọa độ thành lưới đường thẳng vuông góc Descartes (mặt phẳng $w$).



### II. Thiết lập Công thức

Ta biểu diễn số phức $z$ ở dạng cực $z = re^{i\theta}$ (với $r > 0$ và $-\pi < \theta < \pi$) và số phức $w$ dưới dạng đại số $w = u + iv$.

> [!def] Hệ thức Tọa độ Cơ sở
> Áp dụng định nghĩa nhánh chính của logarit phức, ta có phương trình liên hệ:
> $$w = \text{Log}(z) = \ln|z| + i\text{Arg}(z) = \ln r + i\theta$$
> 
> Bằng cách đồng nhất phần thực và phần ảo của hai vế, ta thu được hệ phương trình quỹ đạo:
> $$\begin{cases} u = \ln r \\ v = \theta \end{cases}$$



### III. Khảo sát Quỹ đạo các Họ Đường Cong

> [!prf] 1. Ảnh của họ cung tròn đồng tâm $r = r_0$
> Giả sử cố định bán kính đường tròn $r = r_0$ ($r_0 > 0$) và cho góc đối số $\theta$ biến thiên liên tục trong khoảng $(-\pi, \pi)$.
> - **Phần thực:** Tọa độ $u = \ln r_0$ là một hằng số không đổi trên mặt phẳng $w$.
> - **Phần ảo:** $v = \theta$. Vì $\theta \in (-\pi, \pi)$ nên giá trị của $v$ cũng biến thiên liên tục trong khoảng $(-\pi, \pi)$.
> 
> **Kết luận:** Tập hợp ảnh của cung tròn $r = r_0$ là một **đoạn thẳng thẳng đứng** nằm tại vị trí $u = \ln r_0$, giới hạn chiều cao trong dải $v \in (-\pi, \pi)$.

> [!prf] 2. Ảnh của họ tia xuất phát từ gốc tọa độ $\theta = \theta_0$
> Giả sử cố định góc định hướng của tia $\theta = \theta_0$ ($\theta_0 \in (-\pi, \pi)$) và cho bán kính $r$ biến thiên liên tục từ $0$ ra vô cực ($r \in (0, +\infty)$).
> - **Phần ảo:** Tọa độ $v = \theta_0$ luôn luôn là hằng số.
> - **Phần thực:** $u = \ln r$. Khi $r$ tăng liên tục từ gần $0$ đến $+\infty$, giá trị của hàm logarit thực $\ln r$ sẽ chạy rộng trên toàn bộ trục số từ $-\infty$ đến $+\infty$.
> 
> **Kết luận:** Tập hợp ảnh của tia $\theta = \theta_0$ là một **đường thẳng nằm ngang** kéo dài vô hạn ở độ cao $v = \theta_0$.



### IV. Hệ quả về Tính Bảo Giác (Conformal Mapping)

> [!thm] Sự Trực giao và Bảo toàn Góc
> Trong mặt phẳng $z$, các cung tròn đồng tâm $r = r_0$ và các tia phát xuất từ tâm $\theta = \theta_0$ luôn giao nhau tại các điểm $z_0 = r_0 e^{i\theta_0}$ dưới một góc vuông ($90^\circ$).
> 
> Qua phép biến đổi $w = \text{Log}(z)$, chúng biến thành hệ lưới ô vuông Descartes gồm các đoạn thẳng đứng $u = \ln r_0$ và các đường nằm ngang $v = \theta_0$. Trong hình học Euclid, các đường dọc và ngang này luôn hiển nhiên cắt nhau một góc vuông đúng bằng $90^\circ$.
> 
> **Kết luận:** Do góc vuông giữa hai họ đường cong được giữ nguyên vẹn cả về độ lớn lẫn chiều hướng, ánh xạ $w = \text{Log}(z)$ là một **ánh xạ bảo giác**. Điều này hoàn toàn tương thích với điều kiện đạo hàm phức: Hàm số chỉnh hình trên miền $D = \mathbb{C} \setminus (-\infty, 0]$ và có đạo hàm $f'(z) = \frac{1}{z} \neq 0$ trên toàn miền xác định.



### V. Hình ảnh Minh họa 

![[image-2.webp]]



## 3. Hàm Lũy thừa Phức Tổng quát ($w = z^c$)

> [!def] Công thức tổng quát
> Cho $z, c \in \mathbb{C}, z \neq 0$. Hàm lũy thừa được định nghĩa thông qua hàm logarit đa trị:
> $$z^c = e^{c \log z} = e^{c[\ln|z| + i(\text{Arg}(z) + 2k\pi)]}$$

> [!thm] Trị chính của hàm lũy thừa
> Trị chính của $z^c$ đạt được khi ta thay $\log z$ bằng nhánh chính $\text{Log}(z)$:
> $$\text{PV}(z^c) = e^{c \text{Log}(z)}$$

> [!exm] Ví dụ: Tính $i^i$
> Tính tất cả các giá trị và trị chính của $i^i$:
> 1. Đưa về dạng logarit: $i^i = e^{i \log i}$.
> 2. Tính $\log i = \ln|i| + i(\frac{\pi}{2} + 2k\pi) = i(\frac{\pi}{2} + 2k\pi)$.
> 3. Thay vào công thức: $i^i = e^{i \cdot i(\frac{\pi}{2} + 2k\pi)} = e^{-(\frac{\pi}{2} + 2k\pi)}$.
> *Nhận xét:* Dù $i$ là số phức, kết quả $i^i$ lại là một tập hợp các số thực dương.
> - Trị chính ($k=0$): $\text{PV}(i^i) = e^{-\frac{\pi}{2}} \approx 0.2078$.

### I. Bài toán Khảo sát Tổng quát

> [!thm] Phát biểu Bài toán
> Khảo sát phép biến đổi hình học qua ánh xạ của hàm lũy thừa phức tổng quát $w = f(z) = z^c$, trong đó $z = re^{i\theta}$ thuộc mặt phẳng phức $z$ ($z \neq 0$), số mũ $c \in \mathbb{R}^+$ (xét trường hợp thực dương để trực quan hóa hình học), và $w = \rho e^{i\phi}$ thuộc mặt phẳng phức $w$.
> 
> Chứng minh rằng phép biến đổi này ánh xạ các đường cong trực giao trong hệ tọa độ cực (mặt phẳng $z$) gồm các cung tròn đồng tâm và các tia xuất phát từ gốc tọa độ thành một hệ tọa độ cực mới bị co giãn mô-đun và biến đổi góc định hướng (mặt phẳng $w$), qua đó chứng minh tính bảo giác của hàm số.



### II. Thiết lập Công thức 

Ta biểu diễn số phức $z$ ở dạng cực $z = re^{i\theta}$ và chọn nhánh đơn trị liên tục (nhánh chính) bằng cách giới hạn $-\pi < \theta \le \pi$. Số phức ảnh $w$ được biểu diễn ở dạng cực $w = \rho e^{i\phi}$.

> [!def] Hệ thức Tọa độ Cơ sở
> Áp dụng định nghĩa hàm lũy thừa qua hàm logarit phức, với số mũ thực $c$, ta có phương trình liên hệ:
> $$w = z^c = e^{c \log z} = e^{c(\ln r + i\theta)} = e^{c\ln r} \cdot e^{ic\theta} = r^c e^{ic\theta}$$
> 
> Bằng cách đồng nhất mô-đun và argument của hai vế, ta thu được hệ phương trình quỹ đạo:
> $$\begin{cases} \rho = r^c \\ \phi = c\theta \end{cases}$$



### III. Khảo sát Quỹ đạo các Họ Đường Cong

> [!prf] 1. Ảnh của họ cung tròn đồng tâm $r = r_0$
> Giả sử cố định bán kính đường tròn $r = r_0$ ($r_0 > 0$) và cho góc đối số $\theta$ biến thiên liên tục.
> - **Mô-đun ảnh:** Ta có $\rho = r_0^c$. Vì $r_0$ và $c$ là hằng số nên $\rho$ là một hằng số dương không đổi trên mặt phẳng $w$.
> - **Argument ảnh:** $\phi = c\theta$. Khi $\theta$ biến thiên, góc $\phi$ sẽ quét trên một cung tròn tương ứng trong mặt phẳng $w$.
> 
> **Kết luận:** Tập hợp ảnh của cung tròn bán kính $r_0$ là một **cung tròn mới đồng tâm tại gốc $O$ nhưng có bán kính bị co giãn thành $R = r_0^c$**.

> [!prf] 2. Ảnh của họ tia xuất phát từ gốc tọa độ $\theta = \theta_0$
> Giả sử cố định góc định hướng của tia $\theta = \theta_0$ và cho bán kính $r$ biến thiên liên tục từ $0$ ra vô cực ($r \in (0, +\infty)$).
> - **Argument ảnh:** Tọa độ góc $\phi = c\theta_0$ luôn luôn là hằng số không đổi.
> - **Mô-đun ảnh:** $\rho = r^c$. Khi $r$ tăng liên tục từ $0$ đến $+\infty$, vì $c > 0$ nên $\rho$ cũng tăng liên tục từ $0$ đến $+\infty$.
> 
> **Kết luận:** Tập hợp ảnh của tia $\theta = \theta_0$ là một **tia mới xuất phát từ gốc tọa độ $O$ (nhưng không chứa gốc $O$)** tạo với trục thực góc mở phóng đại/thu nhỏ $\phi = c\theta_0$.



### IV. Hệ quả về Tính Bảo Giác (Conformal Mapping)

> [!thm] Sự Trực giao và Bảo toàn Góc
> Trong mặt phẳng $z$, các cung tròn đồng tâm $r = r_0$ và các tia phát xuất từ tâm $\theta = \theta_0$ luôn giao nhau dưới một góc vuông ($90^\circ$) tại giao điểm $z_0 = r_0 e^{i\theta_0}$.
> 
> Qua phép biến đổi $w = z^c$, chúng biến thành hệ lưới cực mới gồm cung tròn đồng tâm $\rho = r_0^c$ và tia $\phi = c\theta_0$. Trong hình học phẳng, mối quan hệ tiếp tuyến và bán kính của một đường tròn tại giao điểm $w_0 = r_0^c e^{ic\theta_0}$ luôn đảm bảo chúng cắt nhau một góc vuông đúng bằng $90^\circ$.
> 
> **Kết luận:** Góc vuông giữa các đường cong được giữ nguyên vẹn cả về độ lớn lẫn chiều hướng. Điều này hoàn toàn phù hợp với điều kiện đạo hàm phức: Đạo hàm $f'(z) = c z^{c-1} \neq 0$ tại mọi điểm $z \neq 0$. Do đó, ánh xạ lũy thừa $w = z^c$ là một **ánh xạ bảo giác** trên toàn miền xác định đơn trị (ngoại trừ điểm rẽ nhánh $z=0$).



### V. Hình ảnh Minh họa (trường hợp $w = z^2$)

![[image-3.webp]]



## 4. Hàm Khai căn Bậc n ($w = \sqrt[n]{z}$)

> [!def] Công thức tổng quát
> Đây là trường hợp đặc biệt của lũy thừa khi $c = \frac{1}{n}$. Với $z = re^{i\theta}$:
> $$w = \sqrt[n]{z} = z^{\frac{1}{n}} = \sqrt[n]{r} e^{i \frac{\theta + 2k\pi}{n}} \quad \text{với } k = 0, 1, \dots, n-1$$
> Hàm sinh ra đúng $n$ giá trị phân biệt tạo thành một đa giác đều $n$ cạnh nội tiếp đường tròn bán kính $\sqrt[n]{r}$.

> [!exm] Ví dụ: Tìm các nghiệm của $\sqrt[3]{-8}$
> Số phức $z = -8 = 8e^{i\pi}$. Ta có $r = 8, \theta = \pi, n = 3$.
> $$w_k = \sqrt[3]{8} e^{i \frac{\pi + 2k\pi}{3}} = 2 e^{i \left(\frac{\pi}{3} + \frac{2k\pi}{3}\right)} \quad \text{với } k = 0, 1, 2$$
> - $k=0: w_0 = 2e^{i\pi/3} = 1 + i\sqrt{3}$ (Trị chính)
> - $k=1: w_1 = 2e^{i\pi} = -2$ (Trị thực)
> - $k=2: w_2 = 2e^{i5\pi/3} = 1 - i\sqrt{3}$

> [!prf] Khảo sát Ánh xạ
> Xét nhánh chính (trị chính). Nó biến toàn bộ mặt phẳng phức (bỏ tia thực âm) thành một hình quạt có góc mở $\frac{2\pi}{n}$. Ánh xạ này bảo giác tại mọi điểm $z \neq 0$ vì đạo hàm luôn tồn tại và khác $0$. $z=0$ là điểm rẽ nhánh (branch point).



## 5. Hàm Nghịch đảo ($w = \frac{1}{z}$)

> [!def] Công thức tổng quát
> Định nghĩa đơn giản: $w = \frac{1}{z}$. Đặt $z = re^{i\theta}$, ta có:
> $$w = \frac{1}{r e^{i\theta}} = \frac{1}{r} e^{-i\theta}$$

> [!thm] Khảo sát Ánh xạ: Phép nghịch đảo (Inversion)
> Phép biến đổi $w = 1/z$ thực chất là sự kết hợp của hai phép biến đổi hình học:
> 1. **Nghịch đảo qua đường tròn đơn vị:** Mô-đun $r$ thành $1/r$. Điểm ngoài đường tròn rơi vào trong và ngược lại.
> 2. **Phản xạ qua trục thực:** Góc $\theta$ biến thành $-\theta$.
> 
> **Tính chất "Bảo toàn đường tròn" (Circle-preserving property):**
> Trong mặt phẳng phức mở rộng $\hat{\mathbb{C}}$, ánh xạ $w=1/z$ biến một "đường tròn tổng quát" (đường tròn hoặc đường thẳng) thành một "đường tròn tổng quát" khác.
> - Đường thẳng qua gốc O $\mapsto$ Đường thẳng qua gốc O.
> - Đường thẳng không qua gốc O $\mapsto$ Đường tròn qua gốc O.
> - Đường tròn qua gốc O $\mapsto$ Đường thẳng không qua gốc O.
> - Đường tròn không qua gốc O $\mapsto$ Đường tròn không qua gốc O.

> [!prf] Tính Bảo giác
> Đạo hàm $f'(z) = -\frac{1}{z^2}$. Rõ ràng $f'(z) \neq 0$ với mọi $z \neq 0$. Do đó, hàm nghịch đảo là ánh xạ bảo giác tại mọi điểm $z \neq 0$. Kể cả tại $z=0$, nếu xét trên mặt phẳng phức mở rộng (mặt cầu Riemann), hàm vẫn bảo giác tại cực $\infty$.



## 6. Hàm Lượng giác Phức ($\sin z, \cos z$)

> [!def] Công thức tổng quát
> Hàm lượng giác thực được mở rộng lên trường số phức thông qua công thức Euler:
> $$\cos z = \frac{e^{iz} + e^{-iz}}{2}$$
> $$\sin z = \frac{e^{iz} - e^{-iz}}{2i}$$

> [!thm] So sánh với hàm thực (Đẳng thức vs. Bất đẳng thức)
> **1. Các đẳng thức lượng giác ĐÚNG trên $\mathbb{C}$:**
> - $\cos^2 z + \sin^2 z = 1$
> - $\sin(z_1 + z_2) = \sin z_1 \cos z_2 + \cos z_1 \sin z_2$
> - Tính tuần hoàn: $\sin(z+2\pi) = \sin z, \cos(z+2\pi) = \cos z$
> 
> *Chứng minh $\cos^2 z + \sin^2 z = 1$:*
> $\cos^2 z = \frac{e^{2iz} + 2 + e^{-2iz}}{4}$ và $\sin^2 z = \frac{e^{2iz} - 2 + e^{-2iz}}{-4}$
> Cộng hai vế: $\cos^2 z + \sin^2 z = \frac{e^{2iz} + 2 + e^{-2iz} - (e^{2iz} - 2 + e^{-2iz})}{4} = \frac{4}{4} = 1$.
> 
> **2. Tính chất KHÔNG ĐÚNG: Tính bị chặn**
> Trên $\mathbb{R}$, $|\sin x| \le 1$ và $|\cos x| \le 1$. Tuy nhiên, trên $\mathbb{C}$, các hàm lượng giác **không bị chặn**. Giá trị mô-đun của chúng có thể lớn đến vô cực.

> [!exm] Ví dụ tính toán
> Giải phương trình $\cos z = 2$. (Điều vô lý trong hàm thực nhưng hoàn toàn giải được trong hàm phức).
> Ta có $\frac{e^{iz} + e^{-iz}}{2} = 2 \implies e^{iz} + e^{-iz} = 4$. Đặt $X = e^{iz}$, ta được $X^2 - 4X + 1 = 0$.
> Nghiệm: $X = 2 \pm \sqrt{3}$.
> Do $e^{iz} = 2 \pm \sqrt{3} \implies iz = \log(2 \pm \sqrt{3}) = \ln(2 \pm \sqrt{3}) + 2k\pi i$.
> Vậy $z = 2k\pi - i\ln(2 \pm \sqrt{3})$ với $k \in \mathbb{Z}$.

> [!prf] Khảo sát Ánh xạ & Tính Bảo giác
> Hàm $w = \sin z$ có đạo hàm $w' = \cos z$. Đạo hàm bằng 0 tại $z = \frac{\pi}{2} + k\pi$.
> - Do đó, ánh xạ $\sin z$ là bảo giác tại mọi điểm ngoại trừ $z = \frac{\pi}{2} + k\pi$ (các điểm tới hạn này sẽ không bảo toàn góc).
> - Ánh xạ biến dải hình chữ nhật $-\frac{\pi}{2} < x < \frac{\pi}{2}, y > 0$ thành nửa trên của mặt phẳng phức, biến các đường nằm ngang $y=c$ thành các hình elip và đường thẳng đứng $x=c$ thành các hyperbol nhận tiêu điểm $\pm 1$.

## 7. Hàm Tuyến tính ($w = Az + B$)

> [!def] Định nghĩa Ánh xạ Tuyến tính Phức
> Ánh xạ tuyến tính (hay phép biến đổi tuyến tính nguyên) trong mặt phẳng phức là một hàm số có dạng:
> $$w = f(z) = Az + B$$
> Trong đó $z$ là biến phức, $A$ và $B$ là các hằng số phức đã biết, với điều kiện $A \neq 0$. 
> *(Lưu ý: Biến số phức thường được ký hiệu là $z$ thay vì $x$ để phân biệt với phần thực của tọa độ Descartes).*

> [!prp] Bản chất Hình học
> Về mặt hình học, ánh xạ tuyến tính $w = Az + B$ không làm biến dạng hình dáng cốt lõi của một hình (như bẻ cong đường thẳng), mà nó chỉ thực hiện các thao tác cơ bản: **phóng to/thu nhỏ (vị tự)**, **xoay (quay)** và **trượt (tịnh tiến)** mặt phẳng phức.

### I. Bài toán Khảo sát Tổng quát

> [!thm] Phát biểu Bài toán
> Khảo sát phép biến đổi hình học qua ánh xạ tuyến tính phức tổng quát $w = f(z) = Az + B$, trong đó $z$ là biến phức, $A$ và $B$ là các hằng số phức đã biết với điều kiện $A \neq 0$.
> 
> Chứng minh rằng phép biến đổi này không làm biến dạng cấu trúc hình học cốt lõi, mà có thể được phân rã thành chuỗi các ánh xạ hình học cơ bản: **phép quay**, **phép vị tự** và **phép tịnh tiến**. Qua đó, chứng minh hàm tuyến tính bảo toàn họ đường thẳng, đường tròn và là một phép biến đổi bảo giác.



### II. Thiết lập Công thức và Phân tích Thành phần

Để thấy rõ cấu trúc hình học, ta biểu diễn hằng số phức $A$ dưới dạng dạng lượng giác (cực):
$$A = |A|e^{i\alpha} = a e^{i\alpha}$$ 
Với $a = |A| > 0$ là mô-đun và $\alpha = \text{Arg}(A)$ là argument của $A$.

Khi đó, phép biến đổi $w = Az + B$ có thể được phân tích thành chuỗi **ba phép biến đổi cơ bản** thực hiện liên tiếp:

> [!prp] Phép Quay (Rotation)
> Đặt $w_1 = e^{i\alpha} z$.
> Phép biến đổi này nhân số phức $z$ với một số phức có mô-đun bằng 1. Về mặt hình học, nó tương đương với việc **quay** vector $z$ quanh gốc tọa độ $O$ một góc $\alpha = \text{Arg}(A)$.
> - Nếu $\alpha > 0$: Quay ngược chiều kim đồng hồ.
> - Nếu $\alpha < 0$: Quay cùng chiều kim đồng hồ.
> - Đặc điểm: Bảo toàn độ dài, $|w_1| = |z|$.

> [!prp] Phép Vị tự (Dilation/Scaling)
> Đặt $w_2 = a w_1 = a e^{i\alpha} z$.
> Phép biến đổi này nhân số phức $w_1$ với một số thực dương $a = |A|$. Về mặt hình học, nó tương đương với phép **vị tự** tâm $O$, tỉ số $a$.
> - Nếu $a > 1$: Phóng to mặt phẳng.
> - Nếu $0 < a < 1$: Thu nhỏ mặt phẳng.
> - Nếu $a = 1$: Mặt phẳng giữ nguyên kích thước.

> [!prp] Phép Tịnh tiến (Translation)
> Đặt $w = w_2 + B = a e^{i\alpha} z + B$.
> Phép biến đổi này cộng thêm một hằng số phức $B = u_0 + iv_0$. Về mặt hình học, nó tương đương với phép **tịnh tiến** toàn bộ mặt phẳng theo vector $\vec{v} = (u_0, v_0)$.



### III. Các Tính chất Hình học và Tính Bảo giác

> [!thm] Mệnh đề về Tính Bảo toàn Hình dáng (Đường thẳng và Đường tròn)
> Phép biến đổi tuyến tính $w = Az + B$ luôn biến:
> - Một **đường thẳng** thành một **đường thẳng**.
> - Một **đường tròn** thành một **đường tròn**.
> 
> *Chứng minh:* 
> Phép tịnh tiến, phép quay và phép vị tự đều là các phép biến đổi afin hình học sơ cấp. Chúng bảo toàn tính cộng tuyến của các điểm và tỉ lệ khoảng cách. Do đó, phương trình tổng quát của đường thẳng và đường tròn trong mặt phẳng phức ($a|z|^2 + \bar{B}z + B\bar{z} + C = 0$) vẫn giữ nguyên bậc sau phép thế tuyến tính $z = \frac{w - B}{A}$.

> [!thm] Mệnh đề về Tính Bảo giác (Conformality)
> Ánh xạ $w = Az + B$ là một **ánh xạ bảo giác** trên toàn bộ mặt phẳng phức $\mathbb{C}$.
> 
> *Chứng minh:*
> Hàm số $f(z) = Az + B$ là một đa thức bậc 1, do đó nó chỉnh hình (analytic) trên toàn $\mathbb{C}$.
> Đạo hàm của hàm số là:
> $$f'(z) = A$$
> Theo giả thiết $A \neq 0$, ta có $f'(z) \neq 0$ với mọi $z \in \mathbb{C}$. Theo định lý cơ bản của phép biến đổi bảo giác, hàm số này bảo toàn góc (cả về độ lớn và hướng) tại mọi điểm.



### IV. Ví dụ Minh họa chi tiết

> [!exm] Bài toán: Ảnh của tam giác qua phép biến đổi tuyến tính
> Tìm ảnh của tam giác $D$ có ba đỉnh là $O(0, 0)$, $M(1, 0)$, $N(0, 1)$ qua phép biến đổi $w = f(z) = (1+i)z + (2-i)$.
> 
> **Bước 1: Phân tích phép biến đổi**
> Ta có $A = 1+i$ và $B = 2-i$.
> - Chuyển $A$ sang dạng lượng giác: $|A| = \sqrt{1^2+1^2} = \sqrt{2}$, và $\text{Arg}(A) = \frac{\pi}{4}$.
> Vậy $A = \sqrt{2} e^{i\pi/4}$.
> Phép biến đổi gồm:
> 1. Quay mặt phẳng một góc $\frac{\pi}{4}$.
> 2. Phóng to mặt phẳng với tỉ số vị tự $\sqrt{2}$.
> 3. Tịnh tiến theo vector $(2, -1)$.
> 
> **Bước 2: Tìm ảnh của các đỉnh**
> Vì phép biến đổi tuyến tính biến đoạn thẳng thành đoạn thẳng, ta chỉ cần tìm ảnh của 3 đỉnh rồi nối lại:
> - Điểm $O(z=0)$: $w_O = (1+i)(0) + (2-i) = 2-i$. Tọa độ $(2, -1)$.
> - Điểm $M(z=1)$: $w_M = (1+i)(1) + (2-i) = 3$. Tọa độ $(3, 0)$.
> - Điểm $N(z=i)$: $w_N = (1+i)(i) + (2-i) = i - 1 + 2 - i = 1$. Tọa độ $(1, 0)$.
> 
> **Kết luận:**
> Ảnh $D'$ của tam giác $D$ là một tam giác mới có các đỉnh tại $(2, -1)$, $(3, 0)$ và $(1, 0)$. 
> Nếu kiểm tra, ta sẽ thấy tam giác ban đầu $OMN$ là tam giác vuông cân tại $O$ với cạnh góc vuông bằng $1$. Tam giác ảnh $D'$ là tam giác vuông cân tại $w_O(2, -1)$ với cạnh góc vuông bằng $\sqrt{2}$, hoàn toàn khớp với lý thuyết vị tự tỉ số $\sqrt{2}$ và bảo toàn góc (bảo giác).

![[image-4.webp]]


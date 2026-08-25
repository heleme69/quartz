
## 1. Ánh Xạ Phức, Hàm Đa Trị & Tính Chỉnh Hình Địa Phương

> [!prp] Lý thuyết trọng tâm
> Hàm $f(z)$ chỉnh hình tại $z_0$ nếu nó khả vi tại $z_0$ và **khả vi trên một lân cận** của $z_0$. Chỉ khả vi tại một điểm là chưa đủ để gọi là chỉnh hình.
> 
> Trị chính của logarit phức $\text{Log}(z) = \ln|z| + i\text{Arg}(z)$ (với $\text{Arg}(z) \in (-\pi, \pi]$) liên tục trên toàn mặt phẳng phức **ngoại trừ** tia thực âm và gốc tọa độ (nhánh cắt).

> [!prob] Khẳng định 1.1: Tính khả vi và chỉnh hình
> Hàm số $f(z) = z \cdot \bar{z} = |z|^2$ thỏa mãn điều kiện Cauchy-Riemann tại $z = 0$, do đó nó chỉnh hình tại $z = 0$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> **Giải thích:** 
> Ta có $f(x,y) = x^2 + y^2 \implies u(x,y) = x^2 + y^2, v(x,y) = 0$.
> Xét điều kiện Cauchy-Riemann (CR): $u_x = 2x, v_y = 0$ và $u_y = 2y, -v_x = 0$.
> Hệ CR $u_x = v_y$ và $u_y = -v_x$ chỉ thỏa mãn duy nhất tại điểm $(x,y) = (0,0)$.
> Vậy hàm số chỉ khả vi tại đúng một điểm $z = 0$. Do không tồn tại bất kỳ một **lân cận** nào của $z=0$ mà hàm số khả vi, nên $f(z)$ **không chỉnh hình** tại $z=0$.

> [!prob] Khẳng định 1.2: Tính đơn ánh của hàm lượng giác/mũ
> Hàm $f(z) = e^z$ là một song ánh từ $\mathbb{C}$ vào $\mathbb{C} \setminus \{0\}$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> **Phản ví dụ:** > Hàm mũ phức có tính tuần hoàn với chu kỳ $2\pi i$. 
> Xét $z_1 = 0$ và $z_2 = 2\pi i$. Ta có:
> $f(z_1) = e^0 = 1$
> $f(z_2) = e^{2\pi i} = \cos(2\pi) + i\sin(2\pi) = 1$
> Vì $z_1 \neq z_2$ nhưng $f(z_1) = f(z_2)$, hàm số không phải là đơn ánh (không phải song ánh).

---

## 2. Định Lý Miền Trong, Hàm Hằng & Đạo Hàm Wirtinger

> [!prp] Lý thuyết trọng tâm
> Định lý về hàm hằng: Nếu $f(z)$ chỉnh hình trên một tập mở, liên thông $\Omega$ và tồn tại một sự ràng buộc trên ảnh của $f$ (như $|f|$ là hằng số, $\text{Re}(f)$ là hằng số, hoặc $f$ chỉ nhận giá trị thực) thì $f(z)$ phải là hàm hằng trên $\Omega$.

> [!prob] Khẳng định 2.1: Ràng buộc module
> Nếu hàm $f(z)$ chỉnh hình trên một miền liên thông $\Omega$ và $|f(z)| \equiv C$ (hằng số) trên $\Omega$, thì $f(z)$ là hàm hằng. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> **Chứng minh:**
> Nếu $C = 0 \implies |f(z)| = 0 \implies f(z) \equiv 0$ (là hàm hằng).
> Xét $C \neq 0$. Ta có $|f(z)|^2 = C^2 \implies f(z)\overline{f(z)} = C^2$.
> Lấy đạo hàm Wirtinger theo $\bar{z}$ hai vế, sử dụng quy tắc tích:
> $\frac{\partial}{\partial \bar{z}} (f(z)\overline{f(z)}) = \frac{\partial}{\partial \bar{z}}(C^2)$
> $\implies f(z) \cdot \frac{\partial \overline{f(z)}}{\partial \bar{z}} + \overline{f(z)} \cdot \frac{\partial f(z)}{\partial \bar{z}} = 0$
> Vì $f$ chỉnh hình nên $\frac{\partial f}{\partial \bar{z}} = 0$. Ngoài ra, $\frac{\partial \bar{f}}{\partial \bar{z}} = \overline{\left(\frac{\partial f}{\partial z}\right)} = \overline{f'(z)}$.
> Phương trình trở thành: $f(z) \cdot \overline{f'(z)} = 0$.
> Do $|f(z)| = C \neq 0$ nên $f(z) \neq 0 \, \forall z \in \Omega$. Chia hai vế cho $f(z)$ ta được $\overline{f'(z)} = 0 \implies f'(z) = 0$.
> Đạo hàm bằng $0$ trên một miền liên thông kéo theo $f(z)$ là hàm hằng.

---

## 3. Đặc Tính Của Hàm Điều Hòa

> [!prp] Lý thuyết trọng tâm
> Nếu $u, v$ là các hàm điều hòa trên $\Omega$ thì mọi tổ hợp tuyến tính $au + bv$ cũng là hàm điều hòa. Tuy nhiên, tích $u \cdot v$ **chưa chắc** là hàm điều hòa trừ khi có thêm điều kiện $v$ là liên hợp điều hòa của $u$.

> [!prob] Khẳng định 3.1: Tích của hai hàm điều hòa
> Nếu $u(x,y)$ và $v(x,y)$ là hai hàm điều hòa bất kỳ trên $\mathbb{R}^2$, thì tích của chúng $h(x,y) = u(x,y) \cdot v(x,y)$ cũng là một hàm điều hòa. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> **Phản ví dụ:**
> Chọn $u(x,y) = x$ và $v(x,y) = x^2 - y^2$.
> Kiểm tra: $\Delta u = 0 + 0 = 0$ và $\Delta v = 2 - 2 = 0$. (Cả hai đều là hàm điều hòa).
> Xét tích $h(x,y) = u \cdot v = x(x^2 - y^2) = x^3 - xy^2$.
> Tính toán tử Laplace cho $h$:
> $h_x = 3x^2 - y^2 \implies h_{xx} = 6x$
> $h_y = -2xy \implies h_{yy} = -2x$
> $\Delta h = h_{xx} + h_{yy} = 6x - 2x = 4x$.
> Vì $\Delta h = 4x \neq 0$ trên $\mathbb{R}^2$, hàm $h(x,y)$ không phải là hàm điều hòa.

---

## 4. Định Lý Liouville Mở Rộng & Định Lý Gauss

> [!prp] Lý thuyết trọng tâm
> Định lý Liouville phát biểu: Hàm nguyên và bị chặn trên toàn $\mathbb{C}$ là hàm hằng. Mở rộng ra, nếu hàm nguyên bị chặn bởi một hàm tuyến tính, đa thức, hoặc hàm mũ ở một số điều kiện nhất định, ta cũng có thể giới hạn được bậc của nó hoặc chứng minh nó là hàm hằng.

> [!prob] Khẳng định 4.1: Ràng buộc phần thực
> Giả sử $f(z)$ là một hàm nguyên (chỉnh hình trên $\mathbb{C}$). Nếu phần thực của $f(z)$ bị chặn trên, tức là tồn tại $M \in \mathbb{R}$ sao cho $\text{Re}(f(z)) \le M$ với mọi $z \in \mathbb{C}$, thì $f(z)$ là hàm hằng. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> **Chứng minh:**
> Xét hàm số phụ $g(z) = e^{f(z)}$.
> Vì $f(z)$ là hàm nguyên nên hợp thành $e^{f(z)}$ cũng là hàm nguyên.
> Ta đánh giá module của $g(z)$:
> $|g(z)| = |e^{u(x,y) + iv(x,y)}| = |e^{u(x,y)} \cdot e^{iv(x,y)}| = e^{u(x,y)} \cdot 1 = e^{\text{Re}(f(z))}$
> Theo giả thiết $\text{Re}(f(z)) \le M$, do đó:
> $|g(z)| \le e^M \quad \forall z \in \mathbb{C}$
> Vì $e^M$ là một hằng số dương, hàm nguyên $g(z)$ bị chặn trên toàn $\mathbb{C}$. Theo **Định lý Liouville**, $g(z)$ phải là một hàm hằng.
> $g(z) \equiv C \implies e^{f(z)} = C \implies f'(z) \cdot e^{f(z)} = 0$.
> Vì $e^{f(z)} \neq 0$, ta buộc phải có $f'(z) \equiv 0$, suy ra $f(z)$ là hàm hằng.

> [!prob] Khẳng định 4.2: Hàm nguyên và tập giá trị
> Mọi hàm nguyên không hằng đều là toàn ánh (nhận mọi giá trị trong $\mathbb{C}$). (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> **Phản ví dụ:**
> Xét hàm $f(z) = e^z$. Đây là một hàm nguyên và không phải hàm hằng.
> Tuy nhiên, phương trình $e^z = 0$ vô nghiệm trên tập số phức.
> Do đó, tập giá trị của $f(z)$ là $\mathbb{C} \setminus \{0\}$, hàm số không nhận giá trị $0$ nên không phải là toàn ánh.
> *(Lưu ý: Theo định lý Picard nhỏ, một hàm nguyên không hằng bỏ sót tối đa một giá trị phức. $e^z$ bỏ sót đúng giá trị 0).*

> [!prob] Hàm chỉnh hình không bị chặn 
> Trên $\mathbb{R}$, $|\sin x| \le 1$ và $|\cos x| \le 1$. Tuy nhiên, trên $\mathbb{C}$, các hàm lượng giác **không bị chặn**. Giá trị mô-đun của chúng có thể lớn đến vô cực.

> [!prf] Chứng minh hàm Lượng giác phức không bị chặn
> Xét $z = iy$ (một số thuần ảo), khi đó $y \in \mathbb{R}$.
> $$\sin(iy) = \frac{e^{i(iy)} - e^{-i(iy)}}{2i} = \frac{e^{-y} - e^y}{2i} = i\left( \frac{e^y - e^{-y}}{2} \right) = i \sinh y$$
> Xét mô-đun: $|\sin(iy)| = |\sinh y|$.
> Khi $y \to +\infty$, rõ ràng $\sinh y \to +\infty$. Do đó $|\sin z|$ có thể nhận giá trị lớn tùy ý. Điều này dẫn đến kết quả nổi tiếng (Định lý Liouville): Một hàm chỉnh hình không hằng trên toàn bộ $\mathbb{C}$ thì bắt buộc phải không bị chặn. Hàm sin và cos phức tuân thủ tuyệt đối định lý này.

---

## 5. Tích Phân Cauchy-Green & Sự Phụ Thuộc Đường Đi

> [!prob] Khẳng định 5.1: Tích phân của đường cong kín
> Cho $C$ là một đường cong trơn, kín bất kỳ trong mặt phẳng phức. Tích phân $\oint_C \bar{z} dz = 0$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> **Phản ví dụ / Giải thích bằng Cauchy-Green:**
> Áp dụng định lý Cauchy-Green cho vùng $D$ giới hạn bởi đường cong $C$:
> $\oint_C f(z, \bar{z})dz = 2i \iint_D \frac{\partial f}{\partial \bar{z}} dxdy$
> Với $f(z) = \bar{z}$, ta có đạo hàm Wirtinger $\frac{\partial \bar{z}}{\partial \bar{z}} = 1$.
> Khi đó: $\oint_C \bar{z} dz = 2i \iint_D 1 dxdy = 2i \cdot \text{Area}(D)$.
> Miễn là đường cong $C$ bao quanh một vùng có diện tích khác $0$ (vd: đường tròn đơn vị có diện tích $\pi$), tích phân sẽ bằng $2\pi i \neq 0$. Do đó khẳng định sai.

> [!prob] Khẳng định 5.2: Sự tồn tại của nguyên hàm
> Nếu hàm $f(z)$ chỉnh hình trên miền $\Omega = \mathbb{C} \setminus \{0\}$ và $\oint_{|z|=1} f(z)dz = 0$, thì $f(z)$ có nguyên hàm trên toàn bộ $\Omega$. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> **Chứng minh:**
> Điều kiện cần và đủ để một hàm chỉnh hình có nguyên hàm trên một miền $\Omega$ là tích phân của nó trên mọi đường cong kín nằm gọn trong $\Omega$ đều bằng $0$.
> Lấy $C$ là một đường cong kín bất kỳ trong $\Omega$:
> - Trường hợp 1: $C$ không bao lấy gốc tọa độ $0$. Theo Định lý Cauchy, $\oint_C f(z)dz = 0$.
> - Trường hợp 2: $C$ bao lấy gốc tọa độ $0$ với số vòng quay (winding number) là $k$. Theo nguyên lý biến dạng đường cong, tích phân trên $C$ tương đương với $k$ lần tích phân trên đường tròn đơn vị:
>   $\oint_C f(z)dz = k \cdot \oint_{|z|=1} f(z)dz = k \cdot 0 = 0$ (theo giả thiết).
> Vì tích phân trên mọi đường cong kín trong $\Omega$ đều bằng $0$, tích phân đường không phụ thuộc đường đi, suy ra $f(z)$ có nguyên hàm trên $\Omega$.

---

## 6. Kỳ Dị Cô Lập, Chuỗi Laurent & Thặng Dư

> [!prp] Lý thuyết trọng tâm
> Tại điểm kỳ dị cô lập $z_0$, hàm $f(z)$ có thể khai triển thành chuỗi Laurent.
> Tính chất của điểm kỳ dị được quyết định bởi phần chính (chứa số hạng bậc âm):
> - **Cực điểm (Pole):** Phần chính có hữu hạn số hạng khác $0$. $\lim_{z \to z_0} f(z) = \infty$.
> - **Bất thường bản chất:** Phần chính có vô hạn số hạng. Không tồn tại giới hạn (hữu hạn hay vô cực) khi $z \to z_0$.

> [!prob] Khẳng định 6.1: Phân loại điểm kỳ dị qua giới hạn
> Nếu $z_0$ là điểm kỳ dị cô lập của $f(z)$ và không tồn tại giới hạn $\lim_{z \to z_0} f(z)$, thì $z_0$ bắt buộc phải là một điểm bất thường bản chất. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> **Chứng minh (Bằng phương pháp loại trừ):**
> Theo định lý phân loại kỳ dị cô lập, chỉ có 3 trường hợp:
> 1. Nếu $z_0$ là điểm bỏ được $\implies \lim_{z \to z_0} f(z)$ tồn tại và hữu hạn (Mâu thuẫn giả thiết).
> 2. Nếu $z_0$ là cực điểm $\implies \lim_{z \to z_0} f(z) = \infty$. Trong giải tích phức, "không tồn tại giới hạn" có nghĩa là giá trị của hàm dao động và không hội tụ về một hằng số phức nào và cũng không hội tụ về $\infty$ (điểm cực viễn).
> Do đó, trường hợp duy nhất còn lại là $z_0$ phải là điểm bất thường bản chất (được đặc trưng bởi định lý Picard lớn/Casorati-Weierstrass: trong bất kỳ lân cận nào, hàm nhận giá trị trù mật trong mặt phẳng phức, sinh ra sự dao động dữ dội không có giới hạn).

> [!prob] Khẳng định 6.2: Tính chất Đại số của Thặng dư
> Giả sử hàm $f(z)$ có một cực điểm đơn (cấp 1) tại $z_0$. Khi đó thặng dư của bình phương hàm số bằng bình phương thặng dư của nó, tức là: $\text{Res}(f^2, z_0) = (\text{Res}(f, z_0))^2$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> **Phản ví dụ:**
> Xét hàm $f(z) = \frac{1}{z} + 1$. Hàm số có cực điểm đơn tại $z=0$.
> Dễ thấy phần chính của $f(z)$ là $\frac{1}{z}$, do đó $\text{Res}(f, 0) = 1$.
> Suy ra $(\text{Res}(f, 0))^2 = 1^2 = 1$.
> Bây giờ tính thặng dư của $f^2(z)$:
> $f^2(z) = \left(\frac{1}{z} + 1\right)^2 = \frac{1}{z^2} + \frac{2}{z} + 1$.
> Hệ số của số hạng $\frac{1}{z}$ trong khai triển Laurent của $f^2(z)$ là 2.
> Suy ra $\text{Res}(f^2, 0) = 2$.
> Vì $2 \neq 1$, khẳng định $\text{Res}(f^2, z_0) = (\text{Res}(f, z_0))^2$ là sai.

## 7. Định Lý Gradient Triệt Tiêu & Điều Kiện Hàm Hằng

> [!thm] Định lý Gradient triệt tiêu
> Cho $\Omega$ là một tập mở và liên thông đường trong không gian $\mathbb{R}^n$. Giả sử hàm số $u: \Omega \to \mathbb{R}$ khả vi liên tục trên $\Omega$ (tức là $u \in C^1(\Omega)$). Nếu Gradient của hàm số triệt tiêu tại mọi điểm trong miền, tức là:
> $$\nabla u(\mathbf{x}) = \mathbf{0}, \quad \forall \mathbf{x} \in \Omega$$
> thì $u(\mathbf{x})$ là một **hàm hằng** trên $\Omega$.

> [!cor] Hệ quả (Tính chất hàm hằng của hàm chỉnh hình)
> Cho $f(z) = u(x,y) + iv(x,y)$ là hàm chỉnh hình trên một tập mở, **liên thông** $\Omega \subset \mathbb{C}$. 
> Nếu $f'(z) = 0$ với mọi $z \in \Omega$ thì $f(z)$ là một **hàm hằng** trên $\Omega$.
> *Bản chất chứng minh:* Vì $f'(z) = u_x + iv_x = v_y - iu_y = 0$, ta ép được $u_x = u_y = 0 \implies \nabla u = \mathbf{0}$, và $v_x = v_y = 0 \implies \nabla v = \mathbf{0}$. Theo định lý Gradient triệt tiêu, $u$ và $v$ đều là các hằng số, dẫn đến $f = u + iv$ là một hằng số phức.

---

> [!prob] Khẳng định 7.1: Ràng buộc tập ảnh trên một đường thẳng
> Giả sử hàm $f(z)$ chỉnh hình trên một miền mở liên thông $\Omega$. Nếu ảnh của $f$ (tập hợp các giá trị $f(z)$) nằm trên một đường thẳng song song với trục hoành, thì $f(z)$ phải là hàm hằng trên $\Omega$. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> **Chứng minh:**
> Ảnh của $f$ là đường thẳng song song với trục hoành có nghĩa là phần ảo của $f(z)$ luôn luôn không đổi. 
> Đặt $f(z) = u(x,y) + iv(x,y)$, theo giả thiết ta có $v(x,y) = c$ (với $c$ là một hằng số thực) tại mọi điểm $(x,y) \in \Omega$.
> Từ đó, các đạo hàm riêng của $v$ tự động triệt tiêu: $v_x = 0$ và $v_y = 0$.
> Vì $f$ là hàm chỉnh hình, nó phải thỏa mãn điều kiện Cauchy-Riemann (CR): 
> $$u_x = v_y = 0 \quad \text{và} \quad u_y = -v_x = 0$$
> Điều này dẫn đến Gradient của phần thực $\nabla u = (u_x, u_y) = (0,0)$ trên toàn bộ $\Omega$. 
> Theo **Định lý Gradient triệt tiêu** trên miền liên thông, $u(x,y)$ cũng bắt buộc phải là một hằng số.
> Vì cả phần thực $u$ và phần ảo $v$ đều là hằng số, $f(z) = u + iv$ là hàm hằng.
> *(Lưu ý: Chứng minh tương tự hoàn toàn đúng nếu ảnh nằm trên đường thẳng song song trục tung, hoặc một đường thẳng bất kỳ $au + bv + c = 0$ trong mặt phẳng phức).*

> [!prob] Khẳng định 7.2: Vai trò cốt lõi của tính "Liên thông"
> Nếu hàm $f(z)$ chỉnh hình trên một tập mở $U \subset \mathbb{C}$ và đạo hàm $f'(z) = 0$ tại mọi điểm $z \in U$, thì $f(z)$ bắt buộc phải là một hàm hằng trên toàn bộ tập $U$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> **Phản ví dụ:**
> Hãy đọc thật kỹ giả thiết: Đề bài chỉ cho $U$ là "tập mở", nhưng **không cho** $U$ là "tập liên thông".
> Chọn $U$ là hợp của hai đĩa tròn mở rời nhau hoàn toàn: $U = D_1 \cup D_2$, với $D_1 = \{z \in \mathbb{C} : |z - 2| < 1\}$ và $D_2 = \{z \in \mathbb{C} : |z + 2| < 1\}$.
> Ta định nghĩa một hàm $f(z)$ trên $U$ như sau:
> $$f(z) = \begin{cases} 1 & \text{nếu } z \in D_1 \\ 2 & \text{nếu } z \in D_2 \end{cases}$$
> Rõ ràng $f(z)$ là hàm chỉnh hình trên tập mở $U$ và đạo hàm $f'(z) = 0$ tại mọi $z \in U$. 
> Tuy nhiên, $f(z)$ nhận hai giá trị khác nhau (1 và 2) trên miền xác định của nó, nên nó **không phải** là một hàm hằng trên toàn bộ $U$. 
> *Bài học bản chất:* Định lý Gradient triệt tiêu chỉ có tác dụng truyền tính chất hằng số cục bộ lan ra toàn cục nếu và chỉ nếu miền đó được kết nối với nhau (liên thông đường). Nếu miền bị đứt gãy, hàm có thể là các hằng số khác nhau trên từng mảnh.

> [!prob] Khẳng định 7.3: Ràng buộc Argument không đổi
> Cho $f(z)$ là hàm chỉnh hình trên miền mở liên thông $\Omega$ và không có nghiệm ($f(z) \neq 0 \, \forall z \in \Omega$). Nếu Argument (Góc) của $f(z)$ là một hằng số trên $\Omega$, thì $f(z)$ là hàm hằng. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> **Chứng minh:**
> Đặt $f(z) = u(x,y) + iv(x,y)$. Vì Argument không đổi, giả sử $\text{Arg}(f(z)) = \alpha$.
> Điều này tương đương với việc tỉ số giữa phần ảo và phần thực luôn không đổi: 
> $$\frac{v(x,y)}{u(x,y)} = \tan(\alpha) = c \quad \text{(với } c \text{ là hằng số thực)}$$
> Biến đổi ta thu được một hệ thức tuyến tính: $v(x,y) - c \cdot u(x,y) = 0$.
> Lấy đạo hàm riêng hai vế theo $x$ và theo $y$, ta có hệ:
> $$\begin{cases} v_x - c \cdot u_x = 0 \\ v_y - c \cdot u_y = 0 \end{cases}$$
> Nhờ tính chỉnh hình, ta dùng Cauchy-Riemann ($u_x = v_y, u_y = -v_x$) thế vào phương trình thứ hai:
> $$u_x - c(-v_x) = 0 \implies u_x + c \cdot v_x = 0$$
> Ta thu được hệ phương trình mới theo $u_x$ và $v_x$:
> $$\begin{cases} -c \cdot u_x + v_x = 0 \\ u_x + c \cdot v_x = 0 \end{cases}$$
> Định thức của hệ này là $\Delta = -c^2 - 1 = -(c^2 + 1) \neq 0$ với mọi $c \in \mathbb{R}$.
> Do hệ phương trình có định thức khác $0$, nghiệm duy nhất của nó là $u_x = 0$ và $v_x = 0$.
> Bằng cách tương tự, ta cũng chứng minh được $u_y = 0$ và $v_y = 0$.
> Điều này dẫn đến $\nabla u = \mathbf{0}$ và $\nabla v = \mathbf{0}$. Theo định lý Gradient triệt tiêu trên miền liên thông, $u$ và $v$ phải là các hằng số, suy ra $f(z)$ là hàm hằng.

## 8. Đạo Hàm Wirtinger & Bản Chất Tính Chỉnh Hình

> [!prp] Mệnh đề 8.1: Đạo hàm Wirtinger và Hệ thức Cauchy-Riemann
> Cho hàm phức $f(z) = u(x,y) + iv(x,y)$ xác định trên tập mở $\Omega$. Giả sử $u, v$ khả vi liên tục cấp một trên $\Omega$. Khi đó, ta định nghĩa các toán tử Wirtinger như sau:
> $$\frac{\partial f}{\partial z} = \frac{1}{2} \left( \frac{\partial f}{\partial x} - i\frac{\partial f}{\partial y} \right)$$
> $$\frac{\partial f}{\partial \bar{z}} = \frac{1}{2} \left( \frac{\partial f}{\partial x} + i\frac{\partial f}{\partial y} \right)$$
> Hàm $f$ chỉnh hình khi và chỉ khi $\frac{\partial f}{\partial \bar{z}} = 0$. Nếu $f$ chỉnh hình, ta có đạo hàm phức $f'(z) = \frac{\partial f}{\partial z} = u_x + iv_x$.

> [!prp] Mệnh đề 8.2: Đạo hàm cấp 2 Wirtinger của hàm điều hòa
> Nếu $u, v$ là các hàm điều hòa (theo nghĩa cổ điển) trên miền $\Omega$, thì hàm $f = u + iv$ thỏa mãn:
> $$\frac{\partial^2 f}{\partial z \partial \bar{z}} = 0$$
> *Chứng minh:* Ta có $\frac{\partial^2 f}{\partial z \partial \bar{z}} = \frac{1}{4} \left( \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} \right) = \frac{1}{4} [(u_{xx} + u_{yy}) + i(v_{xx} + v_{yy})]$. Do $u, v$ điều hòa nên $u_{xx} + u_{yy} = 0$ và $v_{xx} + v_{yy} = 0$, dẫn đến kết quả bằng 0.

> [!prob] Câu hỏi 8.1 (True/False): Điều kiện hàm nguyên qua tính điều hòa
> Khẳng định: Nếu hàm phức $f$ có $\text{Re}(f(z))$, $\text{Im}(f(z))$, $\text{Re}(zf(z))$, và $\text{Im}(zf(z))$ đều là các hàm điều hòa trên $\mathbb{R}^2$, thì $f$ là hàm nguyên. (Đúng hay Sai?)

> [!ans] Kết luận: ĐÚNG
> **Giải thích:**
> Dựa vào Mệnh đề 8.2, vì $f(z)$ có phần thực và ảo điều hòa, ta có $\frac{\partial^2 f}{\partial z \partial \bar{z}} = 0$.
> Tương tự, hàm $zf(z)$ có phần thực và ảo điều hòa nên $\frac{\partial^2}{\partial z \partial \bar{z}}(zf) = 0$.
> Ta khai triển: $\frac{\partial^2}{\partial z \partial \bar{z}}(zf) = \frac{\partial}{\partial z} \left( \frac{\partial}{\partial \bar{z}}(z \cdot f) \right)$.
> Áp dụng quy tắc đạo hàm hợp và vì $\frac{\partial z}{\partial \bar{z}} = 0$, ta có $\frac{\partial}{\partial \bar{z}}(z \cdot f) = z \cdot \frac{\partial f}{\partial \bar{z}}$.
> Tiếp tục đạo hàm theo $z$: $\frac{\partial}{\partial z} \left( z \cdot \frac{\partial f}{\partial \bar{z}} \right) = 1 \cdot \frac{\partial f}{\partial \bar{z}} + z \cdot \frac{\partial^2 f}{\partial z \partial \bar{z}}$.
> Do $\frac{\partial^2 f}{\partial z \partial \bar{z}} = 0$, phương trình rút gọn thành $\frac{\partial f}{\partial \bar{z}} = 0$. 
> Vì $\frac{\partial f}{\partial \bar{z}} = 0$ trên toàn $\mathbb{R}^2$, hàm $f$ là hàm chỉnh hình trên $\mathbb{R}^2$ (hàm nguyên).

---

## 9. Định Lý Ánh Xạ Mở & Sự Suy Biến Của Hàm Chỉnh Hình

> [!thm] Định lý 9.1: Định lý Ánh xạ mở (Open Mapping Theorem)
> Cho $\Omega \subset \mathbb{C}$ là một miền (tập mở và liên thông). Nếu $f: \Omega \to \mathbb{C}$ là một hàm chỉnh hình và không phải là hàm hằng trên $\Omega$, thì $f$ biến các tập mở thành tập mở. Nghĩa là ảnh $f(U)$ của bất kỳ tập mở $U \subset \Omega$ nào cũng là một tập mở trong $\mathbb{C}$.

> [!thm] Định lý 9.2: Định lý Gradient triệt tiêu
> Cho $\Omega$ là tập mở, liên thông đường trong $\mathbb{R}^2$. Nếu $u \in C^1(\Omega)$ và $\nabla u = 0$ trên $\Omega$, thì $u$ là hàm hằng trên $\Omega$.

> [!prob] Câu hỏi 9.1 (True/False): Suy biến của hàm phức trên đường thẳng
> Khẳng định: Nếu $f(z)$ là một hàm chỉnh hình trên miền $\Omega$ và tập giá trị $f(\Omega)$ nằm trọn trên một đường thẳng bất kỳ $au(x,y) + bv(x,y) + c = 0$ (với $a, b$ không đồng thời bằng $0$), thì $f$ bắt buộc phải là hàm hằng. (Đúng hay Sai?)

> [!ans] Kết luận: ĐÚNG
> **Giải thích (Cách 1 - Dựa vào Định lý Ánh xạ mở):**
> Đường thẳng bất kỳ trong mặt phẳng phức hoàn toàn không có điểm trong (không thể chứa bất kỳ một đĩa tròn mở nào). Do đó, tập giá trị $f(\Omega)$ không thể là một tập mở. Theo Định lý Ánh xạ mở, hàm $f$ không thể là hàm không hằng, vậy nó bắt buộc phải suy biến thành hàm hằng.
> **Giải thích (Cách 2 - Đại số & Gradient):**
> Lấy đạo hàm hai vế $au + bv + c = 0$ theo $x$ và $y$, ta có $a u_x + b v_x = 0$ và $a u_y + b v_y = 0$. 
> Thay Cauchy-Riemann $(v_x = -u_y, v_y = u_x)$ vào, ta được hệ: $a u_x - b u_y = 0$ và $b u_x + a u_y = 0$.
> Định thức hệ là $\Delta = a^2 + b^2 \neq 0$ (do $a,b$ không đồng thời bằng $0$), nên hệ chỉ có nghiệm $u_x = 0, u_y = 0$ $\implies \nabla u = 0$.
> Theo định lý Gradient triệt tiêu, $u$ là hằng số. Từ đó, $v$ cũng là hằng số, suy ra $f$ là hàm hằng.

---

## 10. Tính Chất Hình Học & Tính Đối Xứng Của Hàm Phức

> [!prp] Mệnh đề 10.1: Tính đối xứng qua trục thực của điều kiện Cauchy-Riemann
> Xét tập mở $\Omega \subset \mathbb{C}$ đối xứng qua trục thực. Nếu cặp hàm $(u(x,y), v(x,y))$ thỏa hệ thức Cauchy-Riemann tại $(x_0, y_0) \in \Omega$, thì cặp hàm $(U, V)$ định nghĩa bởi:
> $$U(x,y) = u(x, -y)$$
> $$V(x,y) = -v(x, -y)$$
> cũng sẽ thỏa mãn hệ thức Cauchy-Riemann tại điểm đối xứng $(x_0, -y_0)$.
> *Chứng minh:* Áp dụng đạo hàm hợp qua ánh xạ tuyến tính $T(x,y) = (x, -y)$. Ta có $U_x = u_x(x,-y)$ và $U_y = -u_y(x,-y)$. Tương tự, $V_x = -v_x(x,-y)$ và $V_y = v_y(x,-y)$. Tại $(x_0, -y_0)$, hệ quả tất yếu dẫn đến $U_x = V_y$ và $U_y = -V_x$ dựa trên tính chất Cauchy-Riemann ban đầu của $u$ và $v$ tại $(x_0, y_0)$.

> [!prp] Mệnh đề 10.2: Bản chất hình học của Ma trận Jacobi phức
> Ma trận Jacobi $J$ của một hàm khả vi thực trên $\mathbb{R}^2 \to \mathbb{R}^2$ là một ma trận $2 \times 2$ bất kỳ, đại diện cho phép co giãn không đều và phản chiếu tùy ý.
> Đối với hàm khả vi phức, ma trận Jacobi buộc phải có dạng $J_{\mathbb{C}} = \begin{pmatrix} a & -b \\ b & a \end{pmatrix}$.
> Dạng này có thể viết thành $J_{\mathbb{C}} = |A| \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$, biểu diễn một phép vị tự kết hợp quay (co giãn đồng đều mọi hướng và quay một góc $\theta$). Điều này đảm bảo tính chất bảo giác (bảo toàn góc) của ánh xạ chỉnh hình.

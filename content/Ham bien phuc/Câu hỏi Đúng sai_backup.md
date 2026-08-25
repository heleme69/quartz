# Chuyên Đề Lý Thuyết Nâng Cao: Hàm Biến Phức (True/False & Chứng Minh)

*(Phiên bản tổ chức lại: 10 section theo mạch logic từ cục bộ → toàn cục, đã loại các câu hỏi trùng ý, bổ sung lý thuyết đầy đủ và các câu hỏi bản chất mới cho mỗi phần.)*

---

## 1. Tính Khả Vi Phức, Phương Trình Cauchy–Riemann & Đạo Hàm Wirtinger

> [!thm] Định nghĩa khả vi phức & tính chỉnh hình
> Cho $f: \Omega \to \mathbb{C}$, $z_0 \in \Omega$. Hàm $f$ **khả vi phức tại $z_0$** nếu tồn tại giới hạn (không phụ thuộc hướng tiến của $z$):
> $$f'(z_0) = \lim_{z \to z_0} \frac{f(z) - f(z_0)}{z - z_0}$$
> Hàm $f$ **chỉnh hình (holomorphic)** tại $z_0$ nếu nó khả vi phức trên **một lân cận mở** của $z_0$ (không chỉ tại đúng một điểm). $f$ chỉnh hình trên tập mở $\Omega$ nếu chỉnh hình tại mọi điểm của $\Omega$.
> Đây là hai khái niệm khác cấp độ: "khả vi tại một điểm" là điều kiện **yếu hơn nhiều** so với "chỉnh hình tại điểm đó" — sự khác biệt then chốt được minh họa ở Khẳng định 1.1 bên dưới.

> [!prp] Tiêu chuẩn khả vi phức qua Cauchy–Riemann
> Viết $f = u + iv$ với $z = x+iy$. Định lý cơ bản: $f$ khả vi phức tại $z_0 = (x_0,y_0)$ **khi và chỉ khi** đồng thời hai điều kiện:
> 1. $u, v$ khả vi thực theo nghĩa Fréchet tại $(x_0,y_0)$ (tức tồn tại xấp xỉ tuyến tính tốt, không chỉ là các đạo hàm riêng rời rạc tồn tại);
> 2. $u, v$ thỏa **hệ phương trình Cauchy–Riemann (CR)** tại $(x_0,y_0)$: $u_x = v_y,\; u_y = -v_x$.
>
> **Cảnh báo quan trọng:** Chỉ riêng điều kiện (2) — các đạo hàm riêng $u_x,u_y,v_x,v_y$ tồn tại và thỏa CR — **không đủ** để suy ra $f$ khả vi phức nếu thiếu điều kiện (1). Đây là một sai lầm rất phổ biến (xem Khẳng định 1.3).

> [!prp] Đạo hàm Wirtinger
> Định nghĩa hai toán tử vi phân hình thức:
> $$\frac{\partial}{\partial z} = \frac{1}{2}\left(\frac{\partial}{\partial x} - i\frac{\partial}{\partial y}\right), \qquad \frac{\partial}{\partial \bar z} = \frac{1}{2}\left(\frac{\partial}{\partial x} + i\frac{\partial}{\partial y}\right)$$
> Với $f$ khả vi thực, điều kiện Cauchy-Riemann tương đương gọn với: $f$ chỉnh hình $\iff \dfrac{\partial f}{\partial \bar z} = 0$. Khi đó $f'(z) = \dfrac{\partial f}{\partial z} = u_x + iv_x$.
> Hai toán tử này tuân theo **quy tắc Leibniz** (đạo hàm của tích) và **quy tắc dây chuyền** hệt như khi ta coi $z$ và $\bar z$ là hai biến độc lập về mặt hình thức — đây là công cụ tính toán rất mạnh để kiểm tra tính chỉnh hình mà không cần tách $u,v$ riêng lẻ.
> Một hệ quả trực tiếp hữu ích: với hàm bất kỳ $\psi$ khả vi thực, $\overline{\dfrac{\partial \psi}{\partial z}} = \dfrac{\partial \bar\psi}{\partial \bar z}$ (liên hợp hoán đổi vai trò của hai toán tử).

> [!prob] Khẳng định 1.1: Tính khả vi và chỉnh hình
> Hàm số $f(z) = z \cdot \bar{z} = |z|^2$ thỏa mãn điều kiện Cauchy-Riemann tại $z = 0$, do đó nó chỉnh hình tại $z = 0$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> Ta có $u(x,y) = x^2+y^2,\ v(x,y)=0$. Xét CR: $u_x=2x=v_y=0$ và $u_y=2y=-v_x=0$ — hệ chỉ thỏa mãn duy nhất tại $(0,0)$.
> Vậy $f$ chỉ khả vi phức tại đúng một điểm $z=0$; do **không có lân cận nào** của $0$ mà $f$ khả vi khắp nơi, nên $f$ **không chỉnh hình** tại $0$ (dù CR đúng tại chính điểm đó).

> [!prob] Khẳng định 1.2: Tính chỉnh hình của hàm liên hợp kép
> Cho $f$ chỉnh hình trên miền $\Omega$ đối xứng qua trục thực. Đặt $g(z) = \overline{f(\bar z)}$ (xác định trên $\Omega$). Khi đó $g$ cũng chỉnh hình trên $\Omega$. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> **Chứng minh bằng Wirtinger (cách tiếp cận gọn, hình thức hoá):**
> Đặt $\varphi(z) = f(\bar z)$ (hợp thành của $f$ với ánh xạ phản chỉnh hình $z \mapsto \bar z$). Áp dụng quy tắc dây chuyền Wirtinger cho $w = \bar z$ (lưu ý $\partial w/\partial z = 0,\ \partial w/\partial \bar z = 1$):
> $$\frac{\partial \varphi}{\partial z} = \frac{\partial f}{\partial w}(\bar z)\cdot\frac{\partial w}{\partial z} + \frac{\partial f}{\partial \bar w}(\bar z) \cdot \frac{\partial \bar w}{\partial z} = \frac{\partial f}{\partial \bar w}(\bar z)\cdot 1 = 0$$
> (số hạng cuối triệt tiêu vì $f$ chỉnh hình nên $\partial f/\partial \bar w \equiv 0$).
> Bây giờ dùng hệ quả liên hợp đã nêu ở phần lý thuyết: $\dfrac{\partial g}{\partial \bar z} = \dfrac{\partial \bar\varphi}{\partial \bar z} = \overline{\dfrac{\partial \varphi}{\partial z}} = \overline{0} = 0$.
> Vậy $\partial g/\partial \bar z \equiv 0$, tức $g$ chỉnh hình trên $\Omega$.
> **Kiểm chứng trực quan (chuỗi Taylor):** nếu $f(z) = \sum a_n z^n$ thì $g(z) = \overline{f(\bar z)} = \overline{\sum a_n \bar z^n} = \sum \overline{a_n} z^n$ — vẫn là một chuỗi lũy thừa hội tụ theo $z$, tức hiển nhiên chỉnh hình.

> [!prob] Khẳng định 1.3: Sự tồn tại các đạo hàm riêng thỏa CR có đủ để khả vi phức?
> Nếu tại một điểm $z_0$, bốn đạo hàm riêng $u_x, u_y, v_x, v_y$ đều **tồn tại** và thỏa mãn hệ phương trình Cauchy–Riemann tại $z_0$, thì $f$ bắt buộc khả vi phức tại $z_0$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> **Phản ví dụ kinh điển:** Xét $f(x,y) = \sqrt{|xy|}$ (với $v \equiv 0$).
> Tính đạo hàm riêng tại gốc theo định nghĩa: $u_x(0,0) = \lim_{h\to0} \dfrac{\sqrt{|h\cdot 0|} - 0}{h} = 0$, tương tự $u_y(0,0)=0$. Vì $v \equiv 0$ nên $v_x=v_y=0$.
> Kiểm tra CR tại $(0,0)$: $u_x = 0 = v_y$ và $u_y = 0 = -v_x$ — **hệ CR được thỏa mãn**.
> Tuy nhiên, xét giới hạn theo định nghĩa khả vi phức dọc đường chéo $z = x(1+i)$ ($x \in \mathbb{R}, x\to 0$):
> $$\frac{f(z) - f(0)}{z - 0} = \frac{\sqrt{|x \cdot x|}}{x(1+i)} = \frac{|x|}{x(1+i)} = \frac{\text{sgn}(x)}{1+i}$$
> Giới hạn này bằng $\dfrac{1}{1+i}$ khi $x \to 0^+$ nhưng bằng $\dfrac{-1}{1+i}$ khi $x \to 0^-$ — **không tồn tại giới hạn chung**.
> Vậy $f$ **không khả vi phức** tại $0$ dù CR vẫn đúng tại đó. Nguyên nhân sâu xa: $f$ không khả vi thực (Fréchet) tại $(0,0)$ — điều kiện (1) trong tiêu chuẩn CR bị vi phạm, cho thấy điều kiện (1) không thể bỏ qua.

---

## 2. Tích Phân Cauchy–Green, Định Lý Cauchy & Sự Tồn Tại Nguyên Hàm

> [!thm] Định lý Cauchy–Green (dạng phức của định lý Green)
> Cho $D$ là miền bị chặn với biên $C = \partial D$ trơn từng khúc (định hướng dương), $f \in C^1(\overline{D})$ (không cần chỉnh hình). Khi đó:
> $$\oint_C f(z,\bar z)\, dz = 2i \iint_D \frac{\partial f}{\partial \bar z}\, dx\,dy$$
> **Hệ quả trực tiếp — Định lý Cauchy:** Nếu $f$ chỉnh hình trên $D$ (tức $\partial f/\partial \bar z \equiv 0$), thì vế phải bằng $0$, suy ra $\oint_C f(z)\,dz = 0$ với mọi đường cong kín $C$ nằm gọn cùng miền trong của nó trong tập chỉnh hình của $f$.

> [!prp] Điều kiện tồn tại nguyên hàm (Primitive)
> $f$ chỉnh hình trên miền $\Omega$ có **nguyên hàm** (tức tồn tại $F$ chỉnh hình trên $\Omega$ với $F' = f$) khi và chỉ khi tích phân của $f$ trên **mọi** đường cong kín nằm trong $\Omega$ đều bằng $0$ — tương đương với tích phân đường không phụ thuộc đường đi.
> **Trường hợp $\Omega$ đơn liên:** Theo định lý Cauchy, mọi đường cong kín trong $\Omega$ đơn liên đều bao một miền nằm gọn trong $\Omega$ (không có "lỗ" để tránh), nên tích phân trên nó luôn bằng $0$ tự động. Do đó: **mọi hàm chỉnh hình trên một miền đơn liên đều có nguyên hàm** trên miền đó.
> **Trường hợp $\Omega$ không đơn liên** (ví dụ $\mathbb{C}\setminus\{0\}$): định lý Cauchy không áp dụng được cho các đường cong bao quanh "lỗ", và nguyên hàm có thể không tồn tại toàn cục (xem Khẳng định 2.1 và liên hệ với Section 6 về hàm đa trị).
> **Nguyên lý biến dạng đường cong (deformation):** nếu $C_1, C_2$ là hai đường cong kín cùng số vòng quay (winding number) quanh mọi điểm kỳ dị của $f$ nằm ngoài $\Omega$, thì $\oint_{C_1} f\,dz = \oint_{C_2} f\,dz$.

> [!prob] Khẳng định 2.1: Tích phân của đường cong kín
> Cho $C$ là một đường cong trơn, kín bất kỳ trong mặt phẳng phức. Tích phân $\oint_C \bar{z}\, dz = 0$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> Áp dụng Cauchy-Green với $f(z)=\bar z$: $\dfrac{\partial \bar z}{\partial \bar z} = 1$, nên
> $$\oint_C \bar z\, dz = 2i \iint_D 1\,dx\,dy = 2i\cdot \text{Area}(D)$$
> Miễn $C$ bao một miền có diện tích khác $0$ (ví dụ đường tròn đơn vị, diện tích $\pi$), tích phân bằng $2\pi i \neq 0$. Khẳng định sai.

> [!prob] Khẳng định 2.2: Sự tồn tại của nguyên hàm trên miền không đơn liên
> Nếu hàm $f(z)$ chỉnh hình trên miền $\Omega = \mathbb{C} \setminus \{0\}$ và $\oint_{|z|=1} f(z)\,dz = 0$, thì $f(z)$ có nguyên hàm trên toàn bộ $\Omega$. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Lấy $C$ là đường cong kín bất kỳ trong $\Omega$.
> - Nếu $C$ không bao gốc tọa độ: theo định lý Cauchy, $\oint_C f\,dz = 0$.
> - Nếu $C$ bao gốc tọa độ với số vòng quay $k$: theo nguyên lý biến dạng đường cong, $\oint_C f\,dz = k \cdot \oint_{|z|=1} f\,dz = k\cdot 0 = 0$.
> Vậy tích phân trên mọi đường cong kín trong $\Omega$ đều bằng $0$, suy ra $f$ có nguyên hàm trên $\Omega$.

> [!prob] Khẳng định 2.3: Hàm nguyên luôn có nguyên hàm toàn cục
> Nếu $f$ là hàm nguyên (chỉnh hình trên toàn bộ $\mathbb{C}$), thì $f$ luôn có nguyên hàm $F$ chỉnh hình trên toàn bộ $\mathbb{C}$. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> **Giải thích:** $\mathbb{C}$ là miền đơn liên (không có "lỗ" nào). Theo định lý Cauchy, tích phân của $f$ trên **mọi** đường cong kín trong $\mathbb{C}$ đều bằng $0$ (vì miền trong của đường cong luôn nằm gọn trong $\mathbb{C}$, và $f$ chỉnh hình khắp nơi). Theo tiêu chuẩn tồn tại nguyên hàm, $f$ có nguyên hàm trên $\mathbb{C}$.
> **Cách xây dựng tường minh (qua chuỗi lũy thừa):** viết $f(z) = \sum_{n=0}^\infty a_n z^n$ hội tụ trên toàn $\mathbb{C}$; đặt $F(z) = \sum_{n=0}^\infty \dfrac{a_n}{n+1}z^{n+1}$ — chuỗi này có cùng bán kính hội tụ (vô hạn) và $F'=f$ bằng cách đạo hàm từng số hạng.
> *(Đối chiếu với Khẳng định 2.2: trên $\mathbb{C}\setminus\{0\}$ — không đơn liên — nguyên hàm chỉ tồn tại khi có thêm điều kiện triệt tiêu tích phân quanh lỗ thủng; đây chính là lý do $1/z$ không có nguyên hàm đơn trị trên $\mathbb{C}\setminus\{0\}$.)*

---

## 3. Hàm Điều Hòa và Mối Liên Hệ Với Hàm Chỉnh Hình

> [!prp] Lý thuyết trọng tâm
> Hàm $u: \Omega \subset \mathbb{R}^2 \to \mathbb{R}$ (với $\Omega$ mở) được gọi là **điều hòa** nếu $u \in C^2(\Omega)$ và $\Delta u = u_{xx}+u_{yy} = 0$.
> **Liên hệ thuận:** Nếu $f=u+iv$ chỉnh hình trên $\Omega$ thì cả $u$ và $v$ đều điều hòa (suy trực tiếp từ CR: $u_{xx} = (v_y)_x = v_{yx}$, $u_{yy}=(-v_x)_y=-v_{xy}$, cộng lại và dùng tính đối xứng đạo hàm hỗn hợp ta được $\Delta u = 0$; tương tự cho $v$).
> **Liên hệ ngược (liên hợp điều hòa):** Nếu $u$ điều hòa trên một miền **đơn liên** $\Omega$, thì tồn tại hàm điều hòa $v$ (gọi là **liên hợp điều hòa** của $u$, xác định sai khác một hằng số cộng) sao cho $f = u+iv$ chỉnh hình trên $\Omega$. Việc xây dựng $v$ dựa trên tích phân đường của $(-u_y, u_x)$ (là một trường bảo toàn nhờ CR ngược), và tính đơn liên đảm bảo tích phân này không phụ thuộc đường đi.
> **Toán tử Wirtinger bậc hai:** $\Delta = 4\dfrac{\partial^2}{\partial z\, \partial \bar z}$, nên $u$ điều hòa $\iff \dfrac{\partial^2 u}{\partial z\partial \bar z} = 0$.
> **Tổ hợp tuyến tính vs tích:** Nếu $u,v$ điều hòa thì $au+bv$ ($a,b\in\mathbb{R}$) cũng điều hòa (Laplace là toán tử tuyến tính). Nhưng **tích** $u\cdot v$ nói chung **không** điều hòa, trừ phi có thêm cấu trúc (ví dụ $v$ là liên hợp điều hòa của $u$, khi đó $u\cdot v = \text{Im}(f^2)/2$ vẫn điều hòa vì là phần ảo của hàm chỉnh hình $f^2/2\cdot(\text{hệ số phù hợp})$— xem thêm phần bài tập).

> [!prob] Khẳng định 3.1: Tích của hai hàm điều hòa
> Nếu $u(x,y)$ và $v(x,y)$ là hai hàm điều hòa **bất kỳ** trên $\mathbb{R}^2$, thì tích $h = u\cdot v$ cũng là một hàm điều hòa. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> **Phản ví dụ:** $u=x$, $v=x^2-y^2$ đều điều hòa ($\Delta u = 0$, $\Delta v = 2-2=0$).
> $h = x^3 - xy^2 \implies h_{xx}=6x,\ h_{yy}=-2x \implies \Delta h = 4x \neq 0$ trên $\mathbb{R}^2$. Vậy $h$ không điều hòa.
> *(Lưu ý đối chiếu lý thuyết: ở đây $v$ không phải là liên hợp điều hòa của $u$ — thật vậy liên hợp điều hòa của $u=x$ là $y$ chứ không phải $x^2-y^2$ — nên tích bị "vỡ" tính điều hòa.)*

> [!prob] Khẳng định 3.2: Điều kiện điều hòa của $\text{Re}(f)$, $\text{Im}(f)$, $\text{Re}(zf)$, $\text{Im}(zf)$ suy ra hàm nguyên
> Nếu hàm phức $f$ có $\text{Re}(f(z))$, $\text{Im}(f(z))$, $\text{Re}(zf(z))$, và $\text{Im}(zf(z))$ đều là các hàm điều hòa trên $\mathbb{R}^2$, thì $f$ là hàm nguyên. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Vì $f$ có phần thực và ảo điều hòa: $\dfrac{\partial^2 f}{\partial z\partial\bar z}=0$. Tương tự cho $zf$: $\dfrac{\partial^2 (zf)}{\partial z \partial \bar z} = 0$.
> Khai triển vế sau bằng quy tắc Leibniz của Wirtinger (chú ý $\partial z/\partial \bar z = 0$):
> $$\frac{\partial}{\partial \bar z}(z\cdot f) = z\cdot\frac{\partial f}{\partial \bar z} \implies \frac{\partial}{\partial z}\left(z\cdot \frac{\partial f}{\partial\bar z}\right) = \frac{\partial f}{\partial \bar z} + z\cdot\frac{\partial^2 f}{\partial z\partial\bar z} = \frac{\partial f}{\partial \bar z} + 0$$
> Vì biểu thức này bằng $0$ (do $zf$ có phần thực/ảo điều hòa), ta được $\dfrac{\partial f}{\partial \bar z} = 0$ trên toàn $\mathbb{R}^2$, tức $f$ chỉnh hình trên $\mathbb{R}^2$ — là hàm nguyên.

> [!prob] Khẳng định 3.3: Tính đơn trị của liên hợp điều hòa trên miền không đơn liên
> Hàm $u(x,y) = \ln(x^2+y^2)$ điều hòa trên $\Omega = \mathbb{R}^2 \setminus \{(0,0)\}$, và tồn tại một hàm liên hợp điều hòa $v$ xác định **đơn trị** trên toàn bộ $\Omega$ sao cho $f=u+iv$ chỉnh hình trên $\Omega$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> Trước hết $u = 2\ln|z| = \text{Re}(2\text{Log}\,z)$ điều hòa trên $\Omega$ (kiểm tra trực tiếp $\Delta u = 0$ với $(x,y)\neq(0,0)$).
> Giả sử tồn tại $v$ đơn trị sao cho $f=u+iv$ chỉnh hình trên $\Omega$. Từ CR: $u_x = \dfrac{2x}{x^2+y^2} = v_y$ và $u_y = \dfrac{2y}{x^2+y^2} = -v_x$, suy ra $f'(z) = u_x+iv_x = \dfrac{2x}{x^2+y^2} - i\dfrac{2y}{x^2+y^2} = \dfrac{2\bar z}{|z|^2} = \dfrac{2}{z}$.
> Nếu $f$ chỉnh hình đơn trị trên $\Omega$ thì $f$ chính là một **nguyên hàm** của $2/z$ trên $\Omega = \mathbb{C}\setminus\{0\}$. Nhưng theo Khẳng định 2.1 (kiểu lập luận tương tự), $\oint_{|z|=1} \dfrac{2}{z}dz = 2\cdot 2\pi i = 4\pi i \neq 0$, mâu thuẫn với điều kiện cần để có nguyên hàm (Section 2).
> Vậy không thể tồn tại $v$ đơn trị trên toàn $\Omega$ — $v$ chỉ tồn tại địa phương (ví dụ $v = 2\text{Arg}(z)$ trên mỗi miền cắt nhánh), đây chính là hiện tượng đa trị sẽ được khai triển ở Section 6.

---

## 4. Tính Liên Thông, Định Lý Gradient Triệt Tiêu & Các Định Lý Hàm Hằng

> [!thm] Định lý Gradient triệt tiêu
> Cho $\Omega \subset \mathbb{R}^n$ mở, **liên thông đường**. Nếu $u \in C^1(\Omega)$ và $\nabla u(\mathbf{x}) = \mathbf{0}$ với mọi $\mathbf{x}\in\Omega$, thì $u$ là hàm hằng trên $\Omega$.
> *Cơ chế:* nối hai điểm bất kỳ $\mathbf{a},\mathbf{b}\in\Omega$ bằng một đường gấp khúc trong $\Omega$ (khả dĩ vì liên thông đường); dọc mỗi đoạn thẳng, đạo hàm theo tham số của $u$ bằng $\nabla u \cdot (\text{vector hướng}) = 0$, nên $u$ không đổi dọc đường; suy ra $u(\mathbf{a})=u(\mathbf{b})$.
> **Vai trò cốt yếu của tính liên thông:** nếu $\Omega$ không liên thông, $u$ chỉ hằng số **trên từng thành phần liên thông**, có thể nhận các giá trị khác nhau giữa các thành phần (xem Khẳng định 4.3).

> [!cor] Hệ quả cho hàm chỉnh hình
> Nếu $f=u+iv$ chỉnh hình trên miền (mở, liên thông) $\Omega$ và $f'(z)=0\ \forall z\in\Omega$, thì $f$ là hàm hằng trên $\Omega$. (Vì $f'=u_x+iv_x=0$, và dùng CR suy ra cả $\nabla u=\nabla v=\mathbf 0$, áp dụng định lý trên cho cả $u$ và $v$.)

> [!prp] Các "định lý hàm hằng" — ràng buộc trên ảnh $\Rightarrow$ hằng số
> Nếu $f$ chỉnh hình trên miền $\Omega$ và thỏa **một trong các ràng buộc** sau trên toàn miền, thì $f$ là hàm hằng:
> - $|f(z)|$ là hằng số;
> - $\text{Arg}(f(z))$ là hằng số (với $f$ không triệt tiêu);
> - Ảnh $f(\Omega)$ nằm trọn trên **một đường thẳng bất kỳ** $au+bv+c=0$ (trong đó có các trường hợp riêng: $u\equiv$ hằng, $v\equiv$ hằng, hay $f$ chỉ nhận giá trị thực/thuần ảo).
> Bản chất chung: mỗi ràng buộc đều tương đương (qua CR) với việc $\nabla u = \mathbf{0}$ (hoặc cả $\nabla u,\nabla v = \mathbf 0$) trên $\Omega$, rồi áp dụng Định lý Gradient triệt tiêu. Một cách nhìn khác (không cần tính toán đạo hàm): các tập nêu trên (một điểm trên đường tròn bán kính cố định, một đường thẳng...) đều là tập **không có điểm trong**, nên theo Định lý Ánh xạ mở (Section 5), ảnh của $f$ không thể là tập như vậy trừ khi $f$ suy biến thành hằng số.

> [!prf] Trường hợp 1: Môđun $|f(z)|$ là hằng số
> **Bài toán:** Cho hàm $f(z) = u(x,y) + iv(x,y)$ chỉnh hình trên miền liên thông $\Omega$. Giả sử $|f(z)| \equiv C$ (hằng số) với mọi $z \in \Omega$. Chứng minh $f(z)$ là hàm hằng.
> 
> **Chứng minh:**
> - Nếu $C = 0$, ta suy ra $|f(z)| = 0 \implies f(z) \equiv 0$ trên $\Omega$ (Hàm hằng).
> - Nếu $C \neq 0$, ta có $|f(z)|^2 = u^2 + v^2 = C^2$. Lấy đạo hàm riêng hai vế theo $x$ và theo $y$, ta thu được:
>   $$\begin{cases} 2u \cdot u_x + 2v \cdot v_x = 0 \\ 2u \cdot u_y + 2v \cdot v_y = 0 \end{cases} \implies \begin{cases} u \cdot u_x + v \cdot v_x = 0 \quad (1) \\ u \cdot u_y + v \cdot v_y = 0 \quad (2) \end{cases}$$
> - Do $f(z)$ chỉnh hình trên $\Omega$, áp dụng điều kiện Cauchy-Riemann $v_x = -u_y$ và $v_y = u_x$, hệ phương trình trên tương đương với:
>   $$\begin{cases} u \cdot u_x - v \cdot u_y = 0 \quad (3) \\ u \cdot u_y + v \cdot u_x = 0 \quad (4) \end{cases} \implies \begin{cases} u \cdot u_x - v \cdot u_y = 0 \\ v \cdot u_x + u \cdot u_y = 0 \end{cases}$$
> - Đây là hệ phương trình đại số tuyến tính thuần nhất đối với hai ẩn $u_x$ và $u_y$. Định thức của hệ phương trình này là:
>   $$\Delta = \begin{vmatrix} u & -v \\ v & u \end{vmatrix} = u^2 + v^2 = C^2$$
> - Vì $C \neq 0$ nên định thức $\Delta = C^2 > 0$. Do hệ thức có định thức khác $0$, hệ phương trình chỉ có nghiệm tầm thường duy nhất:
>   $$u_x = 0 \quad \text{và} \quad u_y = 0 \implies \nabla u = (u_x, u_y) = (0,0)$$
> - Theo định lý Cauchy-Riemann, ta cũng suy ra $v_x = -u_y = 0$ và $v_y = u_x = 0 \implies \nabla v = (0,0)$.
> - Áp dụng **Định lý Gradient triệt tiêu** trên miền liên thông $\Omega$, cả hai hàm thực $u(x,y)$ và $v(x,y)$ đều là hàm hằng. Vậy $f(z) = u + iv$ là hàm hằng.

> [!prf] Trường hợp 2: Đối số $\text{Arg}(f(z))$ là hằng số (với $f$ không triệt tiêu)
> **Bài toán:** Cho hàm $f(z) = u(x,y) + iv(x,y)$ chỉnh hình trên miền liên thông $\Omega$ và $f(z) \neq 0, \forall z \in \Omega$. Giả sử $\text{Arg}(f(z)) \equiv \alpha$ (hằng số). Chứng minh $f(z)$ là hàm hằng.
> 
> **Chứng minh:**
> - Vì đối số $\text{Arg}(f(z))$ không đổi và bằng $\alpha$, tập ảnh $f(\Omega)$ nằm trọn trên tia tạo với trục thực một góc $\alpha$. Điều này dẫn tới tỉ số giữa phần ảo và phần thực là hằng số không đổi:
>   $$\frac{v(x,y)}{u(x,y)} = \tan(\alpha) = k \quad (\text{với } k \in \mathbb{R} \text{ là hằng số})$$
>   *(Trường hợp $\alpha = \pm \frac{\pi}{2}$, ta có $u(x,y) = 0$, xem chứng minh ở Trường hợp 3).*
> - Ta thu được ràng buộc tuyến tính: $v(x,y) - k \cdot u(x,y) = 0$. Lấy đạo hàm riêng hai vế theo $x$ và theo $y$:
>   $$\begin{cases} v_x - k \cdot u_x = 0 \\ v_y - k \cdot u_y = 0 \end{cases}$$
> - Áp dụng điều kiện Cauchy-Riemann ($u_x = v_y$ và $u_y = -v_x$), ta thế vào hệ phương trình trên để đưa về cùng một ẩn của hàm $u$:
>   $$\begin{cases} -u_y - k \cdot u_x = 0 \\ u_x - k \cdot u_y = 0 \end{cases} \implies \begin{cases} k \cdot u_x + u_y = 0 \\ u_x - k \cdot u_y = 0 \end{cases}$$
> - Định thức của hệ ẩn $(u_x, u_y)$ là:
>   $$\Delta = \begin{vmatrix} k & 1 \\ 1 & -k \end{vmatrix} = -k^2 - 1 = -(k^2 + 1)$$
> - Vì $k^2 + 1 \ge 1 > 0$, định thức $\Delta \neq 0$ với mọi hằng số $k$. Do đó hệ phương trình chỉ có nghiệm duy nhất:
>   $$u_x = 0 \quad \text{và} \quad u_y = 0 \implies \nabla u = (0,0)$$
> - Theo hệ thức CR, ta kéo theo $v_x = v_y = 0 \implies \nabla v = (0,0)$. Theo **Định lý Gradient triệt tiêu** trên miền liên thông $\Omega$, $f(z)$ là hàm hằng.

> [!prf] Trường hợp 3: Ảnh $f(\Omega)$ nằm trọn trên một đường thẳng bất kỳ $au + bv + c = 0$
> **Bài toán:** Cho hàm $f(z) = u(x,y) + iv(x,y)$ chỉnh hình trên miền liên thông $\Omega$. Giả sử tồn tại các số thực $a, b, c$ ($a^2 + b^2 \neq 0$) sao cho $a \cdot u(x,y) + b \cdot v(x,y) + c = 0, \, \forall z \in \Omega$. Chứng minh $f(z)$ là hàm hằng.
> 
> **Chứng minh:**
> - Tiến hành lấy đạo hàm riêng hai vế của phương trình ràng buộc tuyến tính theo biến $x$ và biến $y$:
>   $$\begin{cases} a \cdot u_x + b \cdot v_x = 0 \\ a \cdot u_y + b \cdot v_y = 0 \end{cases}$$
> - Áp dụng hệ phương trình Cauchy-Riemann ($v_y = u_x$ và $v_x = -u_y$) thế vào hệ đạo hàm trên:
>   $$\begin{cases} a \cdot u_x - b \cdot u_y = 0 \\ b \cdot u_x + a \cdot u_y = 0 \end{cases}$$
> - Ta tính định thức của hệ phương trình bậc nhất hai ẩn $(u_x, u_y)$ này:
>   $$\Delta = \begin{vmatrix} a & -b \\ b & a \end{vmatrix} = a^2 + b^2$$
> - Theo giả thiết, $a$ và $b$ không đồng thời bằng $0$, do đó $\Delta = a^2 + b^2 > 0 \neq 0$. 
> - Vì định thức luôn khác $0$, hệ phương trình bắt buộc chỉ nhận cặp nghiệm tầm thường:
>   $$u_x = 0 \quad \text{và} \quad u_y = 0 \implies \nabla u = \mathbf{0}$$
> - Đồng thời, từ hệ thức Cauchy-Riemann ta có $v_x = -u_y = 0$ và $v_y = u_x = 0 \implies \nabla v = \mathbf{0}$.
> - Áp dụng **Định lý Gradient triệt tiêu** trên miền liên thông $\Omega$, phần thực $u(x,y) \equiv C_1$ và phần ảo $v(x,y) \equiv C_2$ đều là các hàm hằng số thực. 
> - Suy ra $f(z) = C_1 + iC_2$ là hàm hằng trên toàn miền $\Omega$.
> 
> *(Hệ quả đặc biệt):* 
> - Khi $a = 0, b = 1 \implies v \equiv \text{hằng}$ (Hàm chỉnh hình có phần ảo là hằng số hoặc nhận giá trị thuần thực thì là hàm hằng).
> - Khi $a = 1, b = 0 \implies u \equiv \text{hằng}$ (Hàm chỉnh hình có phần thực là hằng số hoặc nhận giá trị thuần ảo thì là hàm hằng).


> [!prob] Khẳng định 4.1: Ràng buộc module
> Nếu hàm $f(z)$ chỉnh hình trên một miền liên thông $\Omega$ và $|f(z)| \equiv C$ trên $\Omega$, thì $f(z)$ là hàm hằng. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Nếu $C=0$ thì $f\equiv 0$ (hằng). Xét $C\neq 0$: $f(z)\overline{f(z)} = C^2$. Đạo hàm Wirtinger theo $\bar z$ hai vế:
> $$f(z)\cdot\frac{\partial \overline{f(z)}}{\partial \bar z} + \overline{f(z)}\cdot\underbrace{\frac{\partial f}{\partial \bar z}}_{=0 \text{ (chỉnh hình)}} = 0 \implies f(z)\cdot \overline{f'(z)} = 0$$
> (dùng $\partial \bar f/\partial \bar z = \overline{f'(z)}$). Vì $f\neq 0$ khắp $\Omega$ (do $|f|=C\neq0$), suy ra $\overline{f'(z)}=0\implies f'(z)=0\ \forall z$. Theo Hệ quả Gradient triệt tiêu, $f$ là hàm hằng.

> [!prob] Khẳng định 4.2: Ràng buộc tập ảnh trên một đường thẳng bất kỳ
> Nếu $f(z)$ chỉnh hình trên miền $\Omega$ và ảnh $f(\Omega)$ nằm trọn trên một đường thẳng $au(x,y)+bv(x,y)+c=0$ ($a,b$ không đồng thời $0$), thì $f$ bắt buộc là hàm hằng. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Đạo hàm hai vế $au+bv+c=0$ theo $x,y$: $au_x+bv_x=0$ và $au_y+bv_y=0$. Thay CR ($v_x=-u_y, v_y=u_x$) vào phương trình sau: $au_y + bu_x = 0$, kết hợp phương trình đầu ta có hệ theo $(u_x,u_y)$:
> $$\begin{cases} a\,u_x + b\,v_x = 0 \\ b\,u_x + a\,u_y = 0\end{cases} \;\Longrightarrow\; \begin{cases} a\,u_x - b\,u_y = 0 \\ b\,u_x + a\,u_y = 0 \end{cases}$$
> Định thức hệ là $a^2+b^2 \neq 0$, nên $u_x=u_y=0 \implies \nabla u = \mathbf 0$. Theo Định lý Gradient triệt tiêu, $u$ hằng, suy ra $v$ cũng hằng (từ phương trình đường thẳng), vậy $f=u+iv$ hằng.
> *(Trường hợp riêng $b=0$ cho ta ngay: ảnh nằm trên đường thẳng song song trục tung/hoành $\Rightarrow f$ hằng — không cần chứng minh tách biệt.)*

> [!prob] Khẳng định 4.3: Vai trò cốt lõi của tính "Liên thông" (không phải chỉ "mở")
> Nếu $f(z)$ chỉnh hình trên một **tập mở** $U\subset\mathbb{C}$ (không nhất thiết liên thông) và $f'(z)=0\ \forall z\in U$, thì $f$ bắt buộc là hàm hằng trên toàn bộ $U$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> **Phản ví dụ:** $U = D_1\cup D_2$ với $D_1=\{|z-2|<1\}$, $D_2=\{|z+2|<1\}$ (hai đĩa rời nhau). Định nghĩa $f(z)=1$ trên $D_1$, $f(z)=2$ trên $D_2$.
> $f$ chỉnh hình trên $U$ (hằng địa phương trên từng đĩa), $f'\equiv 0$ trên $U$, nhưng $f$ nhận hai giá trị khác nhau nên **không hằng trên toàn $U$**.
> *Bài học:* Định lý Gradient triệt tiêu (và mọi hệ quả của nó) chỉ lan truyền tính hằng số cục bộ ra toàn cục khi miền **liên thông đường**; nếu miền bị đứt gãy thành nhiều mảnh, mỗi mảnh có thể mang một hằng số riêng.

> [!prob] Khẳng định 4.4: Hằng số trên một đường tròn có kéo theo hằng số trên cả miền?
> Nếu tồn tại một đường tròn $|z-z_0|=r$ nằm trong miền $\Omega$ sao cho $|f(z)|$ không đổi trên đường tròn đó (nhưng không giả thiết gì thêm về phần còn lại của $\Omega$), thì $f$ phải là hàm hằng trên toàn $\Omega$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> **Phản ví dụ:** $f(z)=z$ trên $\Omega=\mathbb{C}$. Trên đường tròn $|z|=r$, ta có $|f(z)|=|z|=r$ — không đổi. Nhưng $f(z)=z$ hiển nhiên không phải hàm hằng trên $\mathbb{C}$.
> *Phân biệt với Khẳng định 4.1:* ở đó ràng buộc $|f|=C$ áp đặt trên **toàn bộ miền** $\Omega$ (mọi $z\in\Omega$), chứ không chỉ trên một đường cong con. Ràng buộc cục bộ (chỉ trên một đường tròn) không đủ mạnh để suy ra $\nabla u=\mathbf 0$ khắp $\Omega$. *(Lưu ý: nếu thêm giả thiết đường tròn đó là nơi $|f|$ đạt module cực đại của cả một đĩa chứa nó — như trong nguyên lý module cực đại ở Section 5 — thì kết luận hằng số mới được khôi phục.)*

---

## 5. Định Lý Ánh Xạ Mở, Nguyên Lý Module Cực Đại & Giá Trị Trung Bình Gauss

> [!thm] Định lý Ánh xạ mở (Open Mapping Theorem)
> Cho $\Omega\subset\mathbb{C}$ là một miền. Nếu $f:\Omega\to\mathbb{C}$ chỉnh hình và **không hằng**, thì $f$ biến tập mở thành tập mở: với mọi tập mở $U\subset\Omega$, ảnh $f(U)$ là tập mở trong $\mathbb{C}$.
> **Hệ quả nhìn ngược:** nếu ảnh $f(\Omega)$ (hoặc ảnh của một tập con mở nào đó) nằm trong một tập **không có điểm trong** (đường thẳng, đường tròn, tập hữu hạn điểm, v.v.), thì $f$ không thể là hàm không hằng — đây là cách chứng minh thay thế, gọn hơn, cho toàn bộ các "định lý hàm hằng" ở Section 4.

> [!thm] Định lý Giá trị trung bình Gauss (Mean Value Property)
> Nếu $f$ chỉnh hình trên một tập mở chứa đĩa đóng $\overline{D}(z_0,r)$, thì:
> $$f(z_0) = \frac{1}{2\pi}\int_0^{2\pi} f(z_0+re^{i\theta})\,d\theta$$
> (suy trực tiếp từ công thức tích phân Cauchy, tham số hóa $z=z_0+re^{i\theta}$). Lấy phần thực hai vế, ta được tính chất giá trị trung bình tương tự cho **mọi hàm điều hòa** (Section 3).

> [!thm] Nguyên lý Module Cực Đại (Maximum Modulus Principle)
> Nếu $f$ chỉnh hình trên miền $\Omega$ và **không hằng**, thì $|f(z)|$ **không** đạt cực đại địa phương tại bất kỳ điểm trong nào của $\Omega$.
> **Dạng biên (thường dùng nhất):** nếu $\Omega$ bị chặn, $f$ liên tục trên $\overline\Omega$ và chỉnh hình trên $\Omega$, thì $\max_{\overline\Omega}|f|$ đạt được **trên biên** $\partial\Omega$.

> [!cor] Nguyên lý Module Cực Tiểu (Minimum Modulus Principle)
> Nếu $f$ chỉnh hình trên miền $\Omega$, $f(z)\neq 0\ \forall z\in\Omega$, và $|f|$ đạt cực tiểu địa phương tại một điểm trong của $\Omega$, thì $f$ là hàm hằng.
> *Chứng minh:* vì $f\neq 0$ khắp $\Omega$, hàm $g=1/f$ chỉnh hình trên $\Omega$; cực tiểu địa phương của $|f|$ tương ứng với cực đại địa phương của $|g|=1/|f|$ — áp dụng Nguyên lý Module Cực Đại cho $g$.

> [!prob] Khẳng định 5.1: Chặn module qua giá trị biên
> Nếu $f$ chỉnh hình trên $D(0,1)$, liên tục trên $\overline{D}(0,1)$, và $|f(z)|\le 1$ trên biên $|z|=1$, thì $|f(z)|\le 1$ với mọi $z\in D(0,1)$. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Hệ quả trực tiếp dạng biên của Nguyên lý Module Cực Đại: $\max_{\overline D(0,1)}|f| = \max_{\partial D(0,1)}|f| \le 1$ (đẳng thức đầu đúng vì cực đại trên miền compact chỉ có thể đạt trong miền nếu $f$ hằng, trường hợp đó bất đẳng thức vẫn hiển nhiên đúng). Suy ra $|f(z)|\le 1$ với mọi $z$ trong đĩa đóng, đặc biệt trong $D(0,1)$.

> [!prob] Khẳng định 5.2: Cực đại đạt tại điểm trong buộc hàm phải hằng
> Nếu $f$ chỉnh hình trên miền bị chặn $\Omega$, liên tục trên $\overline\Omega$, và tồn tại $z_0\in\Omega$ (điểm trong) sao cho $|f(z_0)| = \max_{\overline\Omega}|f|$, thì $f$ là hàm hằng trên $\Omega$. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Gọi $M=|f(z_0)|$. Với $r$ đủ nhỏ để $\overline D(z_0,r)\subset\Omega$, theo tính chất giá trị trung bình:
> $$M = |f(z_0)| \le \frac{1}{2\pi}\int_0^{2\pi}|f(z_0+re^{i\theta})|\,d\theta \le \frac{1}{2\pi}\int_0^{2\pi}M\,d\theta = M$$
> Dấu "=" xảy ra toàn phần buộc $|f(z_0+re^{i\theta})|=M$ với **mọi** $\theta$ (nếu có một cung mà $|f|<M$, do liên tục tích phân sẽ giảm thực sự, mâu thuẫn). Vậy $|f|\equiv M$ trên cả một đĩa quanh $z_0$; theo Khẳng định 4.1, $f$ hằng trên đĩa đó; theo nguyên lý không điểm cô lập (thác triển giải tích), $f\equiv f(z_0)$ trên toàn miền liên thông $\Omega$.

> [!prob] Khẳng định 5.3: Cực tiểu module của một đa thức không triệt tiêu trong đĩa
> Cho $p(z) = z^2+4$ (không có nghiệm trong $\overline{D}(0,1)$ vì nghiệm là $\pm 2i$, nằm ngoài đĩa). Khi đó $|p(z)|$ đạt giá trị nhỏ nhất trên $\overline D(0,1)$ tại một điểm **trên biên** $|z|=1$, chứ không phải tại điểm trong. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Vì $p(z)=z^2+4 \neq 0$ với mọi $z\in\overline D(0,1)$ (do nghiệm $\pm 2i$ nằm ngoài đĩa), $p$ thỏa điều kiện của Nguyên lý Module Cực Tiểu trên $D(0,1)$: nếu $|p|$ đạt cực tiểu **địa phương** tại một điểm trong, $p$ phải hằng — nhưng $p$ không hằng (là đa thức bậc 2), nên $|p|$ **không thể** đạt cực tiểu tại bất kỳ điểm trong nào của $D(0,1)$.
> Do $\overline D(0,1)$ compact và $|p|$ liên tục, giá trị nhỏ nhất toàn cục trên $\overline D(0,1)$ tồn tại; theo lập luận trên, nó không đạt tại điểm trong nên bắt buộc đạt trên biên $|z|=1$. (Kiểm chứng trực tiếp: $|p(e^{i\theta})|^2 = |e^{2i\theta}+4|^2$ đạt nhỏ nhất $9$ tại $\theta=\pi$, tức $z=-1$, trong khi $|p(0)|=4 > 3$.)

---

## 6. Tính Chất Hình Học: Ánh Xạ Bảo Giác, Ma Trận Jacobi & Tính Đối Xứng

> [!prp] Ma trận Jacobi của ánh xạ chỉnh hình
> Với hàm khả vi thực tổng quát $\mathbb{R}^2\to\mathbb{R}^2$, ma trận Jacobi là một ma trận $2\times 2$ bất kỳ (biểu diễn co giãn không đều, phản chiếu tùy ý). Đối với hàm **khả vi phức**, CR ép ma trận Jacobi có dạng đặc biệt:
> $$J_{\mathbb{C}} = \begin{pmatrix} u_x & u_y \\ v_x & v_y\end{pmatrix} = \begin{pmatrix} a & -b \\ b & a \end{pmatrix} = |f'(z)|\begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}, \quad \theta = \text{Arg}(f'(z))$$
> tức một phép **vị tự-quay**: co giãn đều theo mọi hướng với hệ số $|f'(z)|$ và quay một góc $\theta$ chung cho mọi hướng. Định thức $\det J_{\mathbb C} = |f'(z)|^2 \ge 0$ — luôn không âm, nghĩa là ánh xạ chỉnh hình (tại nơi $f'\neq0$) luôn **bảo toàn hướng** (orientation-preserving).

> [!thm] Tính bảo giác (Conformal Mapping)
> $f$ được gọi là **bảo giác** tại $z_0$ nếu nó bảo toàn cả độ lớn lẫn **hướng** của góc giữa hai đường cong bất kỳ cắt nhau tại $z_0$.
> **Định lý:** Nếu $f$ chỉnh hình tại $z_0$ và $f'(z_0)\neq 0$, thì $f$ bảo giác tại $z_0$ (hệ quả trực tiếp của dạng vị tự-quay ở trên: mọi hướng bị quay cùng góc $\theta$ nên góc tương đối giữa hai hướng được giữ nguyên).
> **Điểm tới hạn:** nếu $z_0$ là không điểm cấp $k\ge 2$ của $f(z)-f(z_0)$ (tức $f'(z_0)=\cdots=f^{(k-1)}(z_0)=0,\ f^{(k)}(z_0)\neq 0$), ánh xạ địa phương có dạng $f(z)-f(z_0)\approx c(z-z_0)^k$, làm **góc bị nhân $k$ lần** — phá vỡ tính bảo giác tại $z_0$ (dù vẫn bảo giác tại các điểm lân cận nơi $f'\neq 0$).
> **Phân biệt với ánh xạ phản-bảo giác (anti-conformal):** phép liên hợp $z\mapsto \bar z$ bảo toàn **độ lớn** góc nhưng **đảo ngược hướng quay** (định thức Jacobi $=-1<0$), nên không được gọi là bảo giác theo nghĩa chuẩn (vốn đòi hỏi bảo toàn cả hướng).

> [!prp] Nguyên lý đối xứng qua trục thực
> Nếu $\Omega$ đối xứng qua trục thực và $f=u+iv$ chỉnh hình trên $\Omega$, thì hàm $g(z) := \overline{f(\bar z)}$ (đã xét ở Khẳng định 1.2) cũng chỉnh hình trên $\Omega$, và về mặt tọa độ: cặp $(U,V)$ với $U(x,y)=u(x,-y),\ V(x,y)=-v(x,-y)$ thỏa CR tại điểm đối xứng $(x_0,-y_0)$ bất cứ khi nào $(u,v)$ thỏa CR tại $(x_0,y_0)$. Đây là nền tảng của **nguyên lý phản xạ Schwarz**.

> [!prf] Chứng minh Nguyên lý đối xứng qua trục thực (Bằng Tọa độ & Cauchy-Riemann)
> 
> **Bước 1: Biểu diễn hình thức hàm $g(z)$ theo tọa độ thực $(x, y)$**
> Đặt $z = x + iy \in \Omega$. Do miền $\Omega$ có tính chất đối xứng qua trục thực nên điểm liên hợp $\bar{z} = x - iy$ cũng nằm trong $\Omega$. 
> Ta biểu diễn hàm $f$ tại điểm $\bar{z}$ như sau:
> $$f(\bar{z}) = f(x - iy) = u(x, -y) + iv(x, -y)$$
> 
> Định nghĩa của hàm $g(z)$ là lấy liên hợp phức toàn phần của biểu thức trên:
> $$g(z) = \overline{f(\bar{z})} = \overline{u(x, -y) + iv(x, -y)} = u(x, -y) - iv(x, -y)$$
> 
> Nếu ta đặt $g(z) = U(x,y) + iV(x,y)$ làm phần thực và phần ảo mới, ta thực hiện đồng nhất thức:
> - $U(x,y) = u(x, -y)$
> - $V(x,y) = -v(x, -y)$
> 
> **Bước 2: Tính các đạo hàm riêng của $U$ và $V$ bằng quy tắc đạo hàm hàm hợp**
> Theo giả thiết, cặp hàm $(u,v)$ thỏa mãn hệ phương trình Cauchy-Riemann (CR) tại điểm $(x_0,y_0)$:
> $$\begin{cases} u_x(x_0, y_0) = v_y(x_0, y_0) \\ u_y(x_0, y_0) = -v_x(x_0, y_0) \end{cases}$$
> 
> Áp dụng đạo hàm hàm hợp cho $U(x,y)$ và $V(x,y)$ để tính toán độ biến thiên tại điểm đối xứng $(x_0, -y_0)$:
> - **Đối với hàm $U(x,y)$:**
>   $$U_x(x_0, -y_0) = \frac{\partial}{\partial x}[u(x, -y)]_{(x_0, -y_0)} = u_x(x_0, y_0)$$
>   $$U_y(x_0, -y_0) = \frac{\partial}{\partial y}[u(x, -y)]_{(x_0, -y_0)} = u_y(x_0, y_0) \cdot (-1) = -u_y(x_0, y_0)$$
> - **Đối với hàm $V(x,y)$:**
>   $$V_x(x_0, -y_0) = \frac{\partial}{\partial x}[-v(x, -y)]_{(x_0, -y_0)} = -v_x(x_0, y_0)$$
>   $$V_y(x_0, -y_0) = \frac{\partial}{\partial y}[-v(x, -y)]_{(x_0, -y_0)} = -v_y(x_0, y_0) \cdot (-1) = v_y(x_0, y_0)$$
> 
> **Bước 3: Kiểm tra hệ thức Cauchy-Riemann cho cặp hàm mới $(U, V)$**
> Ta đối chiếu các đạo hàm riêng vừa tính được tại điểm $(x_0, -y_0)$ với hệ CR ban đầu:
> 1. **Kiểm tra $U_x = V_y$:**
>    Ta có $U_x(x_0, -y_0) = u_x(x_0, y_0)$. Do hệ CR gốc bảo đảm $u_x(x_0, y_0) = v_y(x_0, y_0)$, mà $v_y(x_0, y_0) = V_y(x_0, -y_0)$. 
>    $$\implies U_x(x_0, -y_0) = V_y(x_0, -y_0)$$
> 2. **Kiểm tra $U_y = -V_x$:**
>    Ta có $U_y(x_0, -y_0) = -u_y(x_0, y_0)$. Theo hệ CR gốc thì $u_y(x_0, y_0) = -v_x(x_0, y_0)$, thế vào ta được $-u_y(x_0, y_0) = -(-v_x(x_0, y_0)) = v_x(x_0, y_0)$. Mà $v_x(x_0, y_0) = -V_x(x_0, -y_0)$.
>    $$\implies U_y(x_0, -y_0) = -V_x(x_0, -y_0)$$
> 
> **Kết luận:** Cặp hàm tọa độ $(U, V)$ thỏa mãn chính xác các điều kiện Cauchy-Riemann tại điểm đối xứng $(x_0, -y_0)$. Vì $u, v \in C^1$ nên các đạo hàm riêng của $U, V$ cũng liên tục, dẫn đến hàm số $g(z) = \overline{f(\bar{z})}$ khả vi phức và chỉnh hình trên toàn miền $\Omega$.


> [!prob] Khẳng định 6.1: Tính bảo giác của $z^2$ tại gốc
> Ánh xạ $f(z)=z^2$ bảo giác tại mọi điểm $z_0\in\mathbb{C}$, kể cả tại $z_0=0$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> $f'(z)=2z$, $f'(0)=0$ nên điều kiện đủ để bảo giác không còn đúng tại $0$.
> Xét hai tia từ gốc: $\gamma_1(t)=t$ (góc $0$) và $\gamma_2(t)=te^{i\pi/4}$ (góc $\pi/4$), góc giữa chúng tại $0$ là $\pi/4$. Ảnh: $f(\gamma_1)=t^2$ (góc $0$), $f(\gamma_2)=t^2e^{i\pi/2}$ (góc $\pi/2$) — góc giữa hai ảnh là $\pi/2 = 2\times\dfrac{\pi}{4}$, bị **nhân đôi** đúng như dự đoán vì $0$ là không điểm cấp $k=2$ của $z^2$. Vậy $f$ không bảo giác tại $0$ (dù bảo giác tại mọi $z_0\neq0$).

> [!prob] Khẳng định 6.2: Tính bảo giác & bảo toàn họ đường tròn/đường thẳng của phép Mobius
> Mọi phép biến đổi Mobius $f(z)=\dfrac{az+b}{cz+d}$ ($ad-bc\neq0$) đều bảo giác tại mọi điểm xác định, và biến đường tròn hoặc đường thẳng thành đường tròn hoặc đường thẳng. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> $f'(z) = \dfrac{ad-bc}{(cz+d)^2} \neq 0$ (do $ad-bc\neq0$) tại mọi $z$ xác định $\Rightarrow$ bảo giác khắp nơi.
> Về bảo toàn họ đường tròn/đường thẳng: mọi phép Mobius phân tích được thành hợp của tịnh tiến, vị tự-quay, và nghịch đảo $z\mapsto 1/z$ — ba phép sơ cấp đầu hiển nhiên bảo toàn họ này; phép nghịch đảo cũng bảo toàn (kiểm tra qua phương trình tổng quát $A(x^2+y^2)+Bx+Cy+D=0$ biểu diễn cả đường tròn ($A\neq0$) lẫn đường thẳng ($A=0$)). Hợp thành của các phép bảo toàn tính chất này vẫn bảo toàn tính chất đó.

> [!prob] Khẳng định 6.3: Phép liên hợp có phải ánh xạ bảo giác?
> Ánh xạ $f(z) = \bar z$ là một ánh xạ bảo giác trên $\mathbb{C}$ vì nó bảo toàn độ lớn của góc giữa hai đường cong bất kỳ. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> Đúng là $f(z)=\bar z$ bảo toàn **độ lớn** của góc (dễ thấy vì nó là một phép phản chiếu qua trục thực — một phép đẳng cự tuyến tính của $\mathbb{R}^2$). Tuy nhiên định nghĩa chuẩn của "bảo giác" đòi hỏi bảo toàn **cả hướng** của góc (góc có dấu, tính theo chiều dương).
> Ma trận Jacobi của $f(x,y)=(x,-y)$ là $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, có định thức $-1<0$ — đây là phép **đảo ngược hướng** (orientation-reversing), khác hẳn dạng $\begin{pmatrix}a&-b\\b&a\end{pmatrix}$ (định thức $\ge 0$) đặc trưng cho ánh xạ chỉnh hình.
> Vì vậy $f(z)=\bar z$ (vốn không chỉnh hình — nó phản-chỉnh hình) chỉ được gọi là ánh xạ **phản-bảo giác (anti-conformal)**, không phải bảo giác theo nghĩa chuẩn.

---

## 7. Hàm Đa Trị & Nhánh Chỉnh Hình (Multi-valued Functions & Branches)

> [!prp] Lý thuyết trọng tâm
> Các biểu thức như $\sqrt{z}$, $\log z$, $z^\alpha$ ($\alpha\notin\mathbb{Z}$) là **đa trị** vì $\text{Arg}(z)$ chỉ xác định sai khác $2k\pi$ ($k\in\mathbb{Z}$). Điểm mà tại đó việc đi một vòng nhỏ quanh nó làm giá trị hàm thay đổi (không quay về giá trị cũ) gọi là **điểm rẽ nhánh (branch point)** — đối với $\log z$ và $z^\alpha$, đó là $z=0$ (và $z=\infty$).
> **Hệ số đơn trị hóa (monodromy):** đi một vòng quanh điểm rẽ nhánh $0$ theo chiều dương, $\text{Arg}(z)$ tăng thêm $2\pi$, nên:
> - $\log z \to \log z + 2\pi i$ (thay đổi bởi lượng cộng thêm — không bao giờ quay lại giá trị cũ $\Rightarrow$ vô hạn nhánh);
> - $z^\alpha = e^{\alpha \log z} \to z^\alpha \cdot e^{2\pi i \alpha}$ (nhân bởi hệ số $e^{2\pi i\alpha}$; nếu $\alpha = p/q$ tối giản thì có đúng $q$ nhánh, quay lại giá trị cũ sau $q$ vòng; nếu $\alpha$ vô tỉ, có vô hạn nhánh không bao giờ lặp).
>
> **Định lý tồn tại nhánh logarit:** Nếu $\Omega$ là miền **đơn liên** và $0\notin\Omega$, tồn tại hàm chỉnh hình đơn trị $g:\Omega\to\mathbb{C}$ (một *nhánh* của $\log$) sao cho $e^{g(z)}=z$. Từ đó định nghĩa nhánh tương ứng $z^\alpha := e^{\alpha g(z)}$.
> **Nhánh chính:** trên $\Omega=\mathbb{C}\setminus(-\infty,0]$, $\text{Log}(z)=\ln|z|+i\text{Arg}(z)$ với $\text{Arg}(z)\in(-\pi,\pi)$; $\sqrt z := e^{\frac12 \text{Log}(z)}$.
> **Nguyên nhân sâu xa (liên hệ Section 2):** trên miền không đơn liên bao quanh điểm rẽ nhánh, tích phân $\oint \frac{1}{z}dz = 2\pi i \neq 0$ — chính là chướng ngại (obstruction) khiến $\log z$ không có nhánh đơn trị toàn cục ở đó.

> [!prob] Khẳng định 7.1: Tồn tại nhánh căn bậc hai chỉnh hình
> Trên miền $\Omega=\mathbb{C}\setminus(-\infty,0]$, tồn tại đúng một hàm chỉnh hình $h(z)$ sao cho $h(z)^2=z$ với mọi $z\in\Omega$ và $h(1)=1$. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Vì $\Omega$ đơn liên, $0\notin\Omega$, $\text{Log}(z)$ chỉnh hình đơn trị trên $\Omega$. Đặt $h(z)=e^{\frac12\text{Log}(z)}$ — chỉnh hình (hợp hàm chỉnh hình), $h(z)^2 = e^{\text{Log}(z)}=z$, và $h(1)=e^0=1$.
> **Tính duy nhất:** nếu $h_1,h_2$ cùng thỏa, thì $(h_1/h_2)^2\equiv1$ trên $\Omega$ liên thông, nên $h_1/h_2$ chỉnh hình liên tục nhận giá trị rời rạc $\{1,-1\}$, buộc phải hằng; vì $h_1(1)/h_2(1)=1$ nên $h_1\equiv h_2$.

> [!prob] Khẳng định 7.2: Sự không tồn tại nhánh logarit toàn cục trên $\mathbb{C}^*$
> Không tồn tại hàm chỉnh hình đơn trị $f:\mathbb{C}\setminus\{0\}\to\mathbb{C}$ sao cho $e^{f(z)}=z$ với mọi $z\neq0$. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Giả sử tồn tại. Đạo hàm $e^{f(z)}=z$: $f'(z)e^{f(z)}=1\implies f'(z)=1/z$, nên $f$ là nguyên hàm của $1/z$ trên $\mathbb{C}\setminus\{0\}$.
> Nhưng $\oint_{|z|=1}\frac1z\,dz = \int_0^{2\pi}\frac{ie^{i\theta}}{e^{i\theta}}d\theta = 2\pi i \neq 0$, vi phạm điều kiện cần để có nguyên hàm (Section 2). Mâu thuẫn — vậy $\log$ không có nhánh đơn trị toàn cục trên $\mathbb{C}\setminus\{0\}$, vì miền này không đơn liên (có "lỗ" tại gốc).

> [!prob] Khẳng định 7.3: Sự không tồn tại nhánh căn bậc hai toàn cục trên $\mathbb{C}^*$
> Cũng giống $\log$, không tồn tại một hàm chỉnh hình đơn trị $h:\mathbb{C}\setminus\{0\}\to\mathbb{C}$ sao cho $h(z)^2=z$ với mọi $z\neq0$. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> **Lập luận qua hệ số đơn trị hóa (khác cơ chế với 7.2):** giả sử $h$ tồn tại và đơn trị, liên tục trên $\mathbb{C}\setminus\{0\}$. Đi một vòng quanh gốc theo $z(\theta)=e^{i\theta}$, $\theta:0\to2\pi$: nếu ta chọn $h(z(\theta)) = e^{i\theta/2}\cdot h(1)$ một cách liên tục (buộc phải như vậy vì $h^2=z$), thì tại $\theta=2\pi$: $h(z(2\pi)) = e^{i\pi}h(1) = -h(1) \neq h(1)$ (giả sử $h(1)\neq0$, đúng vì $h(1)^2=1$).
> Nhưng $z(2\pi)=z(0)=1$ — cùng một điểm — nên $h$ phải nhận **hai giá trị khác nhau** ($h(1)$ và $-h(1)$) tại cùng một điểm, mâu thuẫn với tính đơn trị của $h$.
> Vậy không tồn tại nhánh căn bậc hai đơn trị liên tục (nói gì đến chỉnh hình) trên toàn $\mathbb{C}\setminus\{0\}$ — hệ số nhân sau một vòng là $e^{i\pi}=-1\neq1$, khác cơ chế "cộng thêm hằng số" của $\log$ nhưng cùng bản chất: $0$ là điểm rẽ nhánh.

---

## 8. Đơn Ánh – Toàn Ánh – Song Ánh & Định Lý Ánh Xạ Ngược Chỉnh Hình

> [!prp] Định lý địa phương về bậc không điểm (nền tảng)
> Nếu $f$ chỉnh hình, không hằng, và $z_0$ là không điểm cấp $k\ge1$ của $f(z)-w_0$ (tức $f(z_0)=w_0$, và nếu $k\ge2$ thì $f'(z_0)=\cdots=f^{(k-1)}(z_0)=0,\ f^{(k)}(z_0)\neq0$), thì tồn tại lân cận đủ nhỏ $U$ của $z_0$ và $\varepsilon>0$ sao cho: với mọi $w$ thỏa $0<|w-w_0|<\varepsilon$, phương trình $f(z)=w$ có **đúng $k$ nghiệm phân biệt** trong $U\setminus\{z_0\}$ (và tại các nghiệm đó, $f'\neq0$).
> *(Đây chính là cơ chế đứng sau Định lý Ánh xạ mở và nhiều kết quả về tính đơn/toàn ánh dưới đây.)*

> [!prp] Đơn ánh, toàn ánh, song ánh của hàm chỉnh hình
> - **Điều kiện cần của đơn ánh:** nếu $f$ chỉnh hình và đơn ánh trên miền $\Omega$, thì $f'(z)\neq0$ với mọi $z\in\Omega$.
> - **Điều kiện này KHÔNG đủ:** $f'\neq0$ khắp nơi không đảm bảo đơn ánh toàn cục (ví dụ $f(z)=e^z$: $f'(z)=e^z\neq0$ nhưng $f(0)=f(2\pi i)=1$ do tính tuần hoàn).
> - **Đơn ánh địa phương:** nếu $f'(z_0)\neq0$ (tức $k=1$ trong định lý bậc không điểm), thì $f$ đơn ánh trên một lân cận đủ nhỏ của $z_0$.
> - **Toàn ánh:** hàm nguyên không hằng có thể bỏ sót giá trị (ví dụ $e^z$ bỏ sót $0$); theo định lý Picard nhỏ, một hàm nguyên không hằng bỏ sót **tối đa một** giá trị phức.

> [!thm] Định lý Ánh xạ ngược cho hàm chỉnh hình (Local Biholomorphism)
> Nếu $f$ chỉnh hình trên tập mở $\Omega$ và $f'(z_0)\neq0$ tại $z_0\in\Omega$, thì tồn tại lân cận mở $U\ni z_0$, $V\ni f(z_0)$ sao cho: $f|_U:U\to V$ là song ánh, nghịch đảo $f^{-1}:V\to U$ chỉnh hình, và $(f^{-1})'(w) = \dfrac{1}{f'(f^{-1}(w))}$.
> *Ý tưởng:* định thức Jacobi $\det J_{\mathbb C}(z_0) = |f'(z_0)|^2\neq0$, áp dụng Định lý Ánh xạ ngược cổ điển (giải tích thực) để có nghịch đảo khả vi thực địa phương; kiểm tra thêm nghịch đảo của ma trận dạng $\begin{pmatrix}a&-b\\b&a\end{pmatrix}$ vẫn có dạng đó, nên nghịch đảo thỏa CR, tức chỉnh hình.

> [!prob] Khẳng định 8.1: Điều kiện cần của tính đơn ánh
> Nếu $f(z)$ chỉnh hình và đơn ánh trên một miền liên thông $\Omega$, thì bắt buộc $f'(z)\neq0$ với mọi $z\in\Omega$. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Phản chứng: giả sử $f'(z_0)=0$ với $z_0\in\Omega$ nào đó, tức $z_0$ là không điểm cấp $k\ge2$ của $g(z)=f(z)-f(z_0)$. Theo Định lý địa phương về bậc không điểm, với $w$ gần $f(z_0)$ ($w\neq f(z_0)$), phương trình $f(z)=w$ có **ít nhất 2** nghiệm phân biệt gần $z_0$ — mâu thuẫn với tính đơn ánh của $f$. Vậy $f'(z)\neq0$ khắp $\Omega$.

> [!prob] Khẳng định 8.2: Tính đơn ánh toàn cục của hàm mũ phức
> Hàm $f(z)=e^z$ là một song ánh từ $\mathbb{C}$ vào $\mathbb{C}\setminus\{0\}$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> $f$ tuần hoàn chu kỳ $2\pi i$: $f(0)=f(2\pi i)=1$ nhưng $0\neq2\pi i$, nên $f$ không đơn ánh (dù toàn ánh lên $\mathbb{C}\setminus\{0\}$ và $f'(z)=e^z\neq0$ khắp nơi).
> *Bài học đối chiếu với 8.1:* $f'\neq0$ khắp nơi chỉ là điều kiện **cần**, KHÔNG là điều kiện đủ cho đơn ánh toàn cục — nó chỉ đảm bảo đơn ánh **địa phương** quanh mỗi điểm (theo Định lý Ánh xạ ngược), không ngăn được việc các "bản sao địa phương" của ảnh chồng lấp lên nhau ở quy mô toàn cục.

> [!prob] Khẳng định 8.3: Ánh xạ ngược của song ánh chỉnh hình toàn cục
> Nếu $f:\Omega\to\Sigma$ là song ánh chỉnh hình giữa hai miền, thì $f^{-1}:\Sigma\to\Omega$ cũng chỉnh hình. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Vì $f$ song ánh (đặc biệt đơn ánh), theo Khẳng định 8.1, $f'(z)\neq0$ với **mọi** $z\in\Omega$. Với mỗi $z_0\in\Omega$, áp dụng Định lý Ánh xạ ngược địa phương tại $z_0$: tồn tại lân cận $U$ của $z_0$ với $(f|_U)^{-1}$ chỉnh hình trên $f(U)$. Do $f$ song ánh toàn cục, $(f|_U)^{-1}$ chính là hạn chế của $f^{-1}$ trên $f(U)$. Vì tính chỉnh hình là tính chất địa phương và mỗi điểm của $\Sigma$ đều có một lân cận dạng $f(U)$ như vậy, $f^{-1}$ chỉnh hình trên toàn $\Sigma$.

---

## 9. Kỳ Dị Cô Lập, Chuỗi Laurent & Thặng Dư

> [!prp] Phân loại điểm kỳ dị cô lập
> Tại điểm kỳ dị cô lập $z_0$ của $f$, hàm khai triển được thành chuỗi Laurent $f(z)=\sum_{n=-\infty}^\infty a_n(z-z_0)^n$ trên một hình vành khăn thủng tâm $z_0$. Ba loại kỳ dị (theo **phần chính** — các số hạng bậc âm):
> - **Bỏ được (removable):** phần chính bằng $0$ (mọi $a_n=0,\ n<0$) $\iff \lim_{z\to z_0}f(z)$ tồn tại hữu hạn.
> - **Cực điểm (pole) cấp $m$:** phần chính có hữu hạn số hạng khác $0$, thấp nhất là $a_{-m}\neq0$ $\iff \lim_{z\to z_0}f(z)=\infty$.
> - **Bất thường bản chất (essential):** phần chính có vô hạn số hạng khác $0$ $\iff$ không tồn tại giới hạn (hữu hạn hay $\infty$).
> **Thặng dư:** $\text{Res}(f,z_0) := a_{-1}$ (hệ số của $(z-z_0)^{-1}$).

> [!thm] Định lý Riemann về kỳ dị bỏ được
> Nếu $f$ chỉnh hình trên $D(z_0,r)\setminus\{z_0\}$ và **bị chặn** trên một lân cận thủng nào đó của $z_0$, thì $z_0$ là điểm kỳ dị bỏ được — tồn tại cách xác định lại (hoặc bổ sung) $f(z_0)$ để $f$ chỉnh hình trên cả $D(z_0,r)$.
> *Ý tưởng chứng minh:* dùng đánh giá Cauchy cho hệ số Laurent âm: $|a_{-n}| \le M\rho^{n}$ với $M=\sup|f|$ trên hình tròn bán kính $\rho$, cho $\rho\to0$ ta được $a_{-n}=0$ với mọi $n\ge1$ — phần chính triệt tiêu hoàn toàn.

> [!thm] Casorati–Weierstrass & Picard lớn
> Nếu $z_0$ là điểm bất thường bản chất của $f$, thì trong **bất kỳ** lân cận thủng nào của $z_0$, ảnh $f$ trù mật trong $\mathbb{C}$ (Casorati–Weierstrass); mạnh hơn (Picard lớn), $f$ nhận **mọi** giá trị phức, trừ có thể một giá trị ngoại lệ, vô số lần trong lân cận đó.

> [!prob] Khẳng định 9.1: Phân loại điểm kỳ dị qua giới hạn
> Nếu $z_0$ là điểm kỳ dị cô lập của $f(z)$ và không tồn tại giới hạn $\lim_{z\to z_0}f(z)$, thì $z_0$ bắt buộc là điểm bất thường bản chất. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Loại trừ: nếu $z_0$ bỏ được $\Rightarrow$ giới hạn tồn tại hữu hạn (trái giả thiết); nếu $z_0$ là cực điểm $\Rightarrow$ giới hạn $=\infty$ (cũng là một "giới hạn" theo nghĩa mở rộng, trái giả thiết "không tồn tại giới hạn" — vốn nghĩa là dao động, không hội tụ về bất kỳ giá trị nào kể cả $\infty$). Trường hợp duy nhất còn lại: $z_0$ bất thường bản chất (đặc trưng bởi Casorati–Weierstrass: giá trị dao động trù mật, không hội tụ).

> [!prob] Khẳng định 9.2: Tính chất đại số của thặng dư dưới phép bình phương
> Nếu $f$ có cực điểm đơn (cấp 1) tại $z_0$, thì $\text{Res}(f^2,z_0) = (\text{Res}(f,z_0))^2$. (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> Xét $f(z)=\frac1z+1$, cực điểm đơn tại $0$, $\text{Res}(f,0)=1 \Rightarrow (\text{Res}(f,0))^2=1$.
> $f^2(z) = \frac1{z^2}+\frac2z+1$, nên $\text{Res}(f^2,0)=2 \neq 1$. Khẳng định sai — thặng dư không phải một phiếm hàm tuyến tính-nhân đơn giản kiểu bình phương như vậy vì nó chỉ "nhìn thấy" một hệ số cụ thể của khai triển Laurent, còn phép bình phương làm xáo trộn toàn bộ các hệ số theo kiểu tích chập (convolution).

> [!prob] Khẳng định 9.3: Định lý Riemann về kỳ dị bỏ được
> Nếu $f$ chỉnh hình trên $D(0,1)\setminus\{0\}$ và bị chặn trên hình vành khăn thủng đó (ví dụ hàm $f(z) = \dfrac{\sin z}{z}$), thì $z_0=0$ là điểm kỳ dị bỏ được của $f$. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Theo Định lý Riemann, tính bị chặn gần $z_0$ của một hàm chỉnh hình trên lân cận thủng đã đủ để loại trừ khả năng có phần chính khác 0 trong khai triển Laurent (nếu có cực điểm, $|f|\to\infty$ — mâu thuẫn bị chặn; nếu bất thường bản chất, theo Casorati–Weierstrass ảnh trù mật trong $\mathbb{C}$ — cũng mâu thuẫn bị chặn). Vậy $z_0$ chỉ có thể là kỳ dị bỏ được.
> Kiểm chứng cụ thể: $\dfrac{\sin z}{z} = \dfrac{1}{z}\left(z - \dfrac{z^3}{3!}+\cdots\right) = 1 - \dfrac{z^2}{3!}+\cdots$ — khai triển Laurent không có phần chính, và $\lim_{z\to0}\dfrac{\sin z}{z}=1$ hữu hạn; xác định lại $f(0):=1$ cho ta hàm chỉnh hình trên cả $D(0,1)$.

---

## 10. Định Lý Liouville & Hệ Quả: Định Lý Cơ Bản Của Đại Số (Gauss)

> [!thm] Định lý Liouville (dạng cổ điển)
> Nếu $f$ là hàm nguyên (chỉnh hình trên $\mathbb{C}$) và **bị chặn** trên toàn $\mathbb{C}$, thì $f$ là hàm hằng.

> [!thm] Định lý Liouville dạng tổng quát (Growth Liouville)
> Nếu $f$ nguyên và tồn tại $n\in\mathbb{N}$, $C,R_0>0$ sao cho $|f(z)|\le C|z|^n$ với mọi $|z|\ge R_0$, thì $f$ là **đa thức bậc không vượt quá $n$** (trường hợp $n=0$ chính là định lý cổ điển ở trên).
> *Ý tưởng chứng minh:* đánh giá Cauchy cho hệ số Taylor $a_k=\frac{f^{(k)}(0)}{k!}$: $|a_k|\le CR^{n-k}$ với mọi $R$ lớn; cho $R\to\infty$, nếu $k>n$ thì $R^{n-k}\to0$ nên $a_k=0$ — chuỗi Taylor chỉ còn hữu hạn số hạng.

> [!thm] Định lý Cơ bản của Đại số (Định lý Gauss)
> Mọi đa thức $p(z)=a_nz^n+\cdots+a_0$ ($n\ge1$, $a_n\neq0$) đều có ít nhất một nghiệm phức.
> *Chứng minh (qua Liouville):* nếu $p$ vô nghiệm, $g=1/p$ nguyên; vì $|p(z)|\to\infty$ khi $|z|\to\infty$ (do số hạng bậc cao nhất trội), $g$ bị chặn trên $\mathbb{C}$ (bị chặn ngoài một hình tròn lớn vì $g\to0$, và bị chặn trong hình tròn đó vì compact); theo Liouville, $g$ hằng $\Rightarrow p$ hằng — mâu thuẫn $n\ge1$.
> **Hệ quả tăng cường (đếm nghiệm):** bằng quy nạp (chia $p(z)$ cho $(z-z_1)$ với $z_1$ là nghiệm vừa tìm), $p$ phân tích được thành tích $n$ nhân tử tuyến tính, tức có **đúng $n$ nghiệm phức kể cả bội**.

> [!prob] Khẳng định 10.1: Ràng buộc phần thực buộc hàm nguyên phải hằng
> Nếu $f$ là hàm nguyên và tồn tại $M\in\mathbb{R}$ sao cho $\text{Re}(f(z))\le M$ với mọi $z\in\mathbb{C}$, thì $f$ là hàm hằng. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Xét $g(z)=e^{f(z)}$ — nguyên (hợp hàm nguyên). $|g(z)| = e^{\text{Re}(f(z))} \le e^M$ với mọi $z$ — $g$ nguyên và bị chặn. Theo Liouville, $g$ hằng: $g\equiv C \Rightarrow e^{f(z)}=C \Rightarrow f'(z)e^{f(z)}=0$. Vì $e^{f(z)}\neq0$, ta có $f'(z)\equiv0$, suy ra $f$ hằng.

> [!prob] Khẳng định 10.2: Hàm nguyên không hằng có bắt buộc toàn ánh?
> Mọi hàm nguyên không hằng đều là toàn ánh (nhận mọi giá trị trong $\mathbb{C}$). (Đúng hay Sai?)

> [!ans] Khẳng định: SAI
> Phản ví dụ: $f(z)=e^z$ nguyên, không hằng, nhưng $e^z=0$ vô nghiệm, nên tập giá trị là $\mathbb{C}\setminus\{0\}$ — không toàn ánh.
> *(Theo định lý Picard nhỏ — đã nhắc ở Section 8 — một hàm nguyên không hằng bỏ sót tối đa **một** giá trị; $e^z$ đạt đúng biên này, bỏ sót chính xác giá trị $0$.)*

> [!prob] Khẳng định 10.3: Sự tồn tại nghiệm phức của một đa thức cụ thể
> Đa thức $p(z)=z^5+3z^2-1$ có ít nhất một nghiệm phức. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Áp dụng đúng sơ đồ chứng minh Định lý Gauss: giả sử $p$ vô nghiệm, $g=1/p$ nguyên. Viết $p(z)=z^5\left(1+\frac{3}{z^3}-\frac1{z^5}\right)$; khi $|z|\to\infty$, biểu thức ngoặc $\to1$, nên tồn tại $R$ để $|p(z)|\ge\frac12|z|^5$ khi $|z|\ge R$, suy ra $|g(z)|\le\frac{2}{|z|^5}\to0$ — $g$ bị chặn trên $|z|\ge R$; trên $|z|\le R$ compact, $g$ liên tục nên cũng bị chặn. Vậy $g$ nguyên và bị chặn trên $\mathbb{C}$, theo Liouville $g$ hằng $\Rightarrow p$ hằng — mâu thuẫn bậc $5$. Vậy $p$ phải có nghiệm.

> [!prob] Khẳng định 10.4: Đặc trưng hàm nguyên tăng trưởng đa thức
> Nếu $f$ nguyên và tồn tại $n\in\mathbb{N}, C>0$ sao cho $|f(z)|\le C|z|^n$ với $|z|$ đủ lớn, thì $f$ là đa thức bậc không vượt quá $n$. (Đúng hay Sai?)

> [!ans] Khẳng định: ĐÚNG
> Với $a_k = f^{(k)}(0)/k!$, đánh giá Cauchy trên $|z|=R$ (đủ lớn): $|a_k| \le \dfrac{\max_{|z|=R}|f(z)|}{R^k} \le \dfrac{CR^n}{R^k} = CR^{n-k}$.
> Với $k>n$: cho $R\to\infty$, $R^{n-k}\to0 \Rightarrow a_k=0$. Vậy chuỗi Taylor của $f$ chỉ còn hữu hạn số hạng từ bậc $0$ đến $n$: $f(z)=a_0+a_1z+\cdots+a_nz^n$ — một đa thức bậc $\le n$.

---

*Tài liệu đã được tổ chức lại theo 10 section liền mạch (khả vi cục bộ → tích phân/nguyên hàm → điều hòa → hàm hằng/liên thông → ánh xạ mở & module cực đại → hình học/bảo giác → hàm đa trị → đơn/toàn/song ánh → kỳ dị & thặng dư → Liouville/Gauss), loại bỏ các câu hỏi trùng ý (gộp hai biến thể "ảnh nằm trên đường thẳng", thay thế lặp lại ví dụ $e^z$), và bổ sung 10 câu hỏi bản chất mới kiểm tra sâu hơn lý thuyết ở mỗi mục.*




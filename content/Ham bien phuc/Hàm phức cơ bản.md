## CHƯƠNG 1: SỐ PHỨC VÀ BIỂU DIỄN HÌNH HỌC

### 1.1 Đại số và Hình học số phức
**Tóm tắt lý thuyết:** 
Số phức $z = x + iy$ (với $x, y \in \mathbb{R}$) có phần thực $\text{Re}(z) = x$, phần ảo $\text{Im}(z) = y$. 
Các phép toán đại số cơ bản (cộng, trừ, nhân, chia) tuân theo quy tắc đa thức với $i^2 = -1$.
Modun của số phức $|z| = \sqrt{x^2 + y^2}$. Bất đẳng thức tam giác luôn đúng trong mặt phẳng phức: $|z_1 + z_2| \le |z_1| + |z_2|$.

*   **Ví dụ 1.2:** Tính tích $z_1z_2$ với $z_1 = (3,7)$ và $z_2 = (5,-6)$. 
    *Giải:* $(3+7i)(5-6i) = 15 - 18i + 35i - 42i^2 = 57 + 17i$.
*   **Ví dụ 1.3:** Tính thương $z_1/z_2$ với $z_1 = 3+7i, z_2 = 5-6i$.
    *Giải:* Nhân cả tử và mẫu với lượng liên hợp của mẫu: $\frac{3+7i}{5-6i} \cdot \frac{5+6i}{5+6i} = \frac{15 + 18i + 35i + 42i^2}{25 + 36} = \frac{-27}{61} + i\frac{53}{61}$.
*   **Ví dụ 1.7:** Minh họa BĐT tam giác với $z_1 = 7+i, z_2 = 3+5i$.
    *Giải:* $|z_1 + z_2| = |10+6i| = \sqrt{136} \approx 11.66$. Tổng hai modun: $|z_1| + |z_2| = \sqrt{50} + \sqrt{34} \approx 12.90$. Rõ ràng $11.66 \le 12.90$.

**Bài tập vận dụng & Lời giải chi tiết:**

**Bài 1:** Thực hiện phép tính: (a) $(3-2i) - i(4+5i)$; (b) $(1+i)(2+i)(3+i)$.
*   **Phương pháp:** Nhóm các phần thực với nhau, phần ảo với nhau. Dùng tính chất $i^2 = -1$.
*   **Giải chi tiết:**
    *   (a) $(3-2i) - (4i + 5i^2) = (3-2i) - (4i - 5) = (3 - (-5)) + i(-2 - 4) = 8 - 6i$.
    *   (b) Trước tiên nhân hai ngoặc đầu: $(1+i)(2+i) = 2 + i + 2i + i^2 = 1 + 3i$. 
        Nhân tiếp với ngoặc thứ ba: $(1+3i)(3+i) = 3 + i + 9i + 3i^2 = 3 + 10i - 3 = 10i$.

**Bài 2:** Tìm $\text{Re}(z)$ và $\text{Im}(z)$ của: $z = \frac{1+2i}{4-3i}$.
*   **Phương pháp:** Nhân cả tử và mẫu cho số phức liên hợp của mẫu $(4+3i)$ để khử $i$ ở mẫu.
*   **Giải chi tiết:** 
    $z = \frac{(1+2i)(4+3i)}{(4-3i)(4+3i)} = \frac{4 + 3i + 8i + 6i^2}{16 - (-9)} = \frac{-2 + 11i}{25}$. 
    Vậy $\text{Re}(z) = -\frac{2}{25}$ và $\text{Im}(z) = \frac{11}{25}$.

**Bài 3:** Phác họa tập hợp các điểm thỏa mãn: (a) $|z+1-2i| = 2$; (c) $|z+2i| \le 1$.
*   **Phương pháp:** Biểu thức $|z - z_0| = R$ biểu diễn đường tròn tâm $z_0$ bán kính $R$. Dấu $\le$ chỉ hình tròn bao gồm cả biên.
*   **Giải chi tiết:**
    *   (a) Viết lại $|z - (-1+2i)| = 2$. Đây là phương trình **đường tròn** tâm $z_0 = -1+2i$, bán kính $R = 2$.
    *   (c) Viết lại $|z - (-2i)| \le 1$. Đây là **hình tròn (kín)** có tâm $z_0 = -2i$, bán kính $R = 1$.

---

### 1.2 Dạng Phân Cực, Lũy Thừa và Khai Căn
**Tóm tắt lý thuyết:** 
Công thức Euler $e^{i\theta} = \cos \theta + i\sin \theta$ giúp biểu diễn số phức dưới dạng phân cực $z = re^{i\theta}$.
Công thức De Moivre dùng để tính lũy thừa: $(re^{i\theta})^n = r^n e^{in\theta}$. 
Để tìm căn bậc $n$ của $c = \rho e^{i\phi}$, ta có $n$ nghiệm: $z_k = \rho^{1/n} \exp\left[ i \left( \frac{\phi + 2k\pi}{n} \right) \right]$ với $k=0,1,\dots,n-1$.

*   **Ví dụ 1.11:** Chuyển $z = -\sqrt{3} - i$ sang dạng mũ.
    *Giải:* $r = \sqrt{3+1} = 2$. $\tan\theta = \frac{-1}{-\sqrt{3}} = \frac{1}{\sqrt{3}}$, do $z$ nằm ở góc phần tư thứ III nên $\text{Arg}(z) = -5\pi/6$. Vậy $z = 2e^{-i5\pi/6}$.
*   **Ví dụ 1.14:** Tính $(-\sqrt{3}-i)^3$ bằng công thức De Moivre.
    *Giải:* $(2e^{-i5\pi/6})^3 = 2^3 e^{-i15\pi/6} = 8e^{-i5\pi/2} = 8e^{-i\pi/2} = -8i$.
*   **Ví dụ 1.19:** Tìm tất cả các căn bậc 3 của $8i$.
    *Giải:* Biểu diễn $8i = 8e^{i\pi/2}$. Căn bậc 3 là $z_k = 2\exp\left[i\left(\frac{\pi/2 + 2k\pi}{3}\right)\right]$ với $k=0,1,2$. Lần lượt thế $k$ ta được các nghiệm: $\sqrt{3}+i$, $-\sqrt{3}+i$, $-2i$.

**Bài tập vận dụng & Lời giải chi tiết:**

**Bài 1:** Chuyển sang dạng $a+ib$: (a) $e^{i\pi/2}$; (c) $8e^{i7\pi/3}$.
*   **Phương pháp:** Dùng công thức Euler $re^{i\theta} = r(\cos\theta + i\sin\theta)$.
*   **Giải chi tiết:**
    *   (a) $e^{i\pi/2} = \cos(\pi/2) + i\sin(\pi/2) = 0 + i(1) = i$.
    *   (c) $8e^{i7\pi/3} = 8\left(\cos\frac{7\pi}{3} + i\sin\frac{7\pi}{3}\right) = 8\left(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3}\right) = 8\left(\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = 4 + 4i\sqrt{3}$.

**Bài 2:** Tìm tất cả các nghiệm của: (a) $(-2+2i)^{1/3}$; (b) $(-64)^{1/4}$.
*   **Phương pháp:** Đưa cơ số về dạng mũ $re^{i\theta}$, tính $r^{1/n}$ và chia góc cho $n$ cộng thêm chu kỳ $2k\pi/n$.
*   **Giải chi tiết:**
    *   (a) Cho $c = -2+2i$. Modun $r = \sqrt{4+4} = 2\sqrt{2}$. Góc $\phi = 3\pi/4$.
        Nghiệm $z_k = (2\sqrt{2})^{1/3} e^{i(3\pi/4 + 2k\pi)/3} = \sqrt{2} e^{i(\pi/4 + 2k\pi/3)}$, $k=0,1,2$.
        - $k=0: z_0 = \sqrt{2}e^{i\pi/4} = 1+i$.
        - $k=1: z_1 = \sqrt{2}e^{i11\pi/12}$.
        - $k=2: z_2 = \sqrt{2}e^{i19\pi/12}$.
    *   (b) Cho $c = -64 = 64e^{i\pi}$. 
        Nghiệm $z_k = 64^{1/4} e^{i(\pi + 2k\pi)/4} = 2\sqrt{2} e^{i(\pi/4 + k\pi/2)}$, $k=0,1,2,3$.
        - $k=0: z_0 = 2\sqrt{2}(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}) = 2+2i$.
        - $k=1,2,3$: Quay thêm các góc $90^\circ$, ta được $-2+2i, -2-2i, 2-2i$.

**Bài 3:** Tìm 3 nghiệm của phương trình $z^{3/2} = 4\sqrt{2} + i4\sqrt{2}$.
*   **Phương pháp:** $z^{3/2} = c \Rightarrow z^3 = c^2$. Đưa $c$ về dạng mũ, bình phương nó, sau đó tìm 3 căn bậc ba của $c^2$.
*   **Giải chi tiết:**
    *   Biểu diễn $c = 4\sqrt{2} + i4\sqrt{2} = 8e^{i\pi/4}$.
    *   Tính $c^2 = (8e^{i\pi/4})^2 = 64e^{i\pi/2}$.
    *   Giải $z^3 = 64e^{i\pi/2}$, ta có các nghiệm $z_k = 64^{1/3} \exp\left[i\frac{\pi/2 + 2k\pi}{3}\right] = 4e^{i(\pi/6 + 2k\pi/3)}$, $k=0,1,2$.
    *   $k=0: z_0 = 4e^{i\pi/6} = 2\sqrt{3} + 2i$.
    *   $k=1: z_1 = 4e^{i5\pi/6} = -2\sqrt{3} + 2i$.
    *   $k=2: z_2 = 4e^{i9\pi/6} = 4e^{i3\pi/2} = -4i$.

---

## CHƯƠNG 2: HÀM PHỨC VÀ BIẾN ĐỔI CƠ BẢN

### 2.1 Phép Biến Đổi Tuyến Tính
**Tóm tắt lý thuyết:** 
Ánh xạ tuyến tính có dạng $w = Az + B$. Nó là sự kết hợp của:
1. Phóng to/Thu nhỏ (nhân với $|A|$).
2. Quay (cộng thêm góc $\arg(A)$).
3. Tịnh tiến (cộng thêm vectơ $B$).
Ánh xạ này bảo toàn hình dáng, biến đường thẳng thành đường thẳng, đường tròn thành đường tròn.

*   **Ví dụ 2.6:** Chứng minh ánh xạ $w = iz + i$ biến nửa mặt phẳng phải $\text{Re}(z) > 1$ thành nửa mặt phẳng trên $\text{Im}(w) > 2$.
    *Giải:* Ta có $u+iv = i(x+iy)+i = -y + i(x+1) \Rightarrow u = -y, v = x+1$. Vì $x>1 \Rightarrow v-1>1 \Rightarrow v>2$.
*   **Ví dụ 2.7:** Tìm ảnh của đĩa $|z+1+i| < 1$ qua $w = (3-4i)z + 6 + 2i$.
    *Giải:* Rút $z$ theo $w$: $z = \frac{w-6-2i}{3-4i}$. Thay vào phương trình gốc, $| \frac{w-6-2i}{3-4i} + 1 + i | < 1 \Rightarrow |w+1-3i| < |3-4i| = 5$. Ta được đĩa $|w+1-3i| < 5$.

**Bài tập vận dụng & Lời giải chi tiết:**

**Bài 1:** Cho $w = (3+4i)z - 2 + i$. Tìm ảnh của đĩa $|z-1| < 1$.
*   **Phương pháp:** Dùng phép thế ngược. Biểu diễn $z$ theo $w$ rồi thay vào phương trình miền ban đầu.
*   **Giải chi tiết:**
    Từ hàm số, rút ra $z = \frac{w + 2 - i}{3+4i}$.
    Thế vào điều kiện $|z-1| < 1$:
    $\left|\frac{w + 2 - i}{3+4i} - 1\right| < 1 \Rightarrow \frac{|w + 2 - i - (3+4i)|}{|3+4i|} < 1$
    $\Rightarrow |w - 1 - 5i| < \sqrt{3^2+4^2} \Rightarrow |w - 1 - 5i| < 5$.
    Ảnh là một hình tròn mở tâm $1+5i$, bán kính $5$.

**Bài 2:** Tìm ánh xạ tuyến tính $w = az+b$ biến $z_1=2, z_2=-3i$ lần lượt thành $w_1=1+i, w_2=1$.
*   **Phương pháp:** Lập hệ 2 phương trình bậc nhất 2 ẩn $a, b$ số phức và giải.
*   **Giải chi tiết:**
    Ta có hệ:
    (1) $2a + b = 1+i$
    (2) $-3ia + b = 1$
    Trừ (1) cho (2): $a(2+3i) = i \Rightarrow a = \frac{i}{2+3i} = \frac{i(2-3i)}{4+9} = \frac{3+2i}{13}$.
    Thế $a$ vào (2): $b = 1 + 3ia = 1 + 3i\left(\frac{3+2i}{13}\right) = 1 + \frac{9i-6}{13} = \frac{7+9i}{13}$.
    Vậy $w = \frac{3+2i}{13}z + \frac{7+9i}{13}$.

### 2.2 Ánh xạ Lũy thừa $w=z^n$ và Căn $w=z^{1/n}$
**Tóm tắt lý thuyết:** 
Ánh xạ lũy thừa và căn thay đổi hình dạng hình học đáng kể. $w=z^2$ nhân đôi góc và bình phương bán kính; nó biến đường thẳng dọc/ngang thành Parabol. Ngược lại, $w=z^{1/2}$ giảm nửa góc và lấy căn bán kính, biến đường thẳng dọc/ngang thành Hyperbol.

*   **Ví dụ 2.9:** Tìm ảnh của đường thẳng đứng $x = a > 0$ qua $w = z^2$.
    *Giải:* $w = u+iv = (x+iy)^2 = x^2-y^2 + i2xy$. Ta có $u = a^2-y^2$, $v = 2ay \Rightarrow y = v/(2a)$. Thế vào $u$, ta có phương trình Parabol: $u = a^2 - \frac{v^2}{4a^2}$.

**Bài tập vận dụng & Lời giải chi tiết:**

**Bài 1:** Chứng minh ảnh của đường nằm ngang $y=1$ qua $w=z^2$ là Parabol $u = v^2/4 - 1$.
*   **Phương pháp:** Khai triển $w = (x+iy)^2 = x^2-y^2 + i2xy$. Thế $y=1$ để khử biến $x$.
*   **Giải chi tiết:**
    Ta có $u = x^2 - y^2$ và $v = 2xy$.
    Với $y=1$, ta có $u = x^2 - 1$ và $v = 2x$.
    Từ $v=2x \Rightarrow x = v/2$. Thế vào $u$:
    $u = (v/2)^2 - 1 = \frac{v^2}{4} - 1$. Đây chính là phương trình Parabol mở sang phải.

**Bài 2:** Tìm ảnh của hình quạt $\{re^{i\theta}: r>1, \pi/6 < \theta < \pi/4\}$ qua nhánh chính $w=z^{1/2}$.
*   **Phương pháp:** Dùng dạng phân cực, $w = z^{1/2} = \sqrt{r}e^{i\theta/2}$. 
*   **Giải chi tiết:**
    Cho $z = re^{i\theta}$. Ảnh qua nhánh chính là $w = \rho e^{i\phi}$ với $\rho = \sqrt{r}$ và $\phi = \theta/2$.
    Vì $r > 1 \Rightarrow \rho = \sqrt{r} > 1$.
    Vì $\pi/6 < \theta < \pi/4 \Rightarrow \pi/12 < \phi < \pi/8$.
    Ảnh là một hình quạt mới: $\{\rho e^{i\phi}: \rho > 1, \pi/12 < \phi < \pi/8\}$.

### 2.3 Phép Biến Đổi Nghịch Đảo $w = 1/z$
**Tóm tắt lý thuyết:** 
Phép nghịch đảo $w = 1/z$ ánh xạ họ (Đường thẳng + Đường tròn) thành chính nó. 
- Đường thẳng qua gốc $\to$ Đường thẳng qua gốc.
- Đường thẳng không qua gốc $\to$ Đường tròn qua gốc tọa độ.
- Đường tròn qua gốc $\to$ Đường thẳng không qua gốc.
- Đường tròn không qua gốc $\to$ Đường tròn không qua gốc.

*   **Ví dụ 2.17:** Tìm ảnh của $\text{Re}(z) > 1/2$ qua $w = 1/z$.
    *Giải:* Dùng $z = 1/w \Rightarrow x = \frac{u}{u^2+v^2}$. Điều kiện $x > 1/2 \Rightarrow \frac{u}{u^2+v^2} > \frac{1}{2} \Rightarrow u^2 - 2u + 1 + v^2 < 1 \Rightarrow (u-1)^2 + v^2 < 1$ (Miền bên trong đường tròn).

**Bài tập vận dụng & Lời giải chi tiết:**

**Bài 1:** Tìm ảnh của đường nằm ngang $\text{Im}(z) = 1/2$ qua $w=1/z$.
*   **Phương pháp:** Thay $z = \frac{1}{w} = \frac{u - iv}{u^2+v^2}$ vào phương trình $y = 1/2$.
*   **Giải chi tiết:**
    Đường thẳng $\text{Im}(z) = y = 1/2$.
    Biểu diễn $y$ qua $u, v$: $y = \frac{-v}{u^2+v^2}$.
    Thế vào ta có: $\frac{-v}{u^2+v^2} = \frac{1}{2} \Rightarrow u^2 + v^2 + 2v = 0$.
    Hoàn thành bình phương: $u^2 + (v+1)^2 = 1$. 
    Ảnh là đường tròn tâm $(0, -1)$, bán kính $R=1$, khoét điểm gốc tọa độ (vì $z \neq \infty$).

**Bài 2:** Tìm ảnh của đường tròn $|z+2| = 1$ qua $w=1/z$.
*   **Phương pháp:** Viết phương trình $x,y$ của đường tròn gốc, sau đó thay $x = \frac{u}{u^2+v^2}$ và $x^2+y^2 = \frac{1}{u^2+v^2}$ vào.
*   **Giải chi tiết:**
    Đường tròn gốc: $(x+2)^2 + y^2 = 1 \Rightarrow x^2 + y^2 + 4x + 3 = 0$.
    Thế $x, x^2+y^2$ vào: 
    $\frac{1}{u^2+v^2} + 4\left(\frac{u}{u^2+v^2}\right) + 3 = 0$.
    Nhân 2 vế với $u^2+v^2$ (do $w \neq 0$):
    $1 + 4u + 3(u^2+v^2) = 0 \Rightarrow u^2 + v^2 + \frac{4}{3}u = -\frac{1}{3}$.
    Hoàn thành bình phương: $(u + 2/3)^2 + v^2 = -\frac{1}{3} + \frac{4}{9} = \frac{1}{9}$.
    Ảnh là đường tròn tâm $(-2/3, 0)$ và bán kính $R = 1/3$.

---

## CHƯƠNG 5: CÁC HÀM SƠ CẤP

### 5.1 Hàm Mũ Phức $w = e^z$
**Tóm tắt lý thuyết:** 
Định nghĩa $e^z = e^{x+iy} = e^x(\cos y + i\sin y)$. 
Hàm mũ phức tuần hoàn với chu kỳ $2\pi i$. Modun là $e^x$, Argument là $y$. 
Nó ánh xạ dải ngang có độ rộng $2\pi$ (vd: $-\pi < y \le \pi$) thành toàn bộ mặt phẳng $w$ (loại bỏ gốc $0$).

**Bài tập vận dụng & Lời giải chi tiết:**

**Bài 1:** Tìm giá trị của $e^z$ tại $z = -\frac{i\pi}{4}$ và $z = -4+i5$.
*   **Phương pháp:** Áp dụng công thức Euler $e^{x+iy} = e^x(\cos y + i\sin y)$.
*   **Giải chi tiết:**
    *   Tại $z = -i\pi/4$: $e^{-i\pi/4} = \cos(-\pi/4) + i\sin(-\pi/4) = \frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2}$.
    *   Tại $z = -4+i5$: $e^{-4+i5} = e^{-4}(\cos 5 + i\sin 5)$.

**Bài 2:** Giải phương trình: (a) $e^z = -4$; (c) $e^z = \sqrt{3}-i$.
*   **Phương pháp:** Giải phương trình $e^z = w \Rightarrow z = \log w = \ln|w| + i(\text{Arg}(w) + 2n\pi)$.
*   **Giải chi tiết:**
    *   (a) $w = -4$. Modun $|-4| = 4$, góc $\text{Arg} = \pi$.
        $z = \ln 4 + i(\pi + 2n\pi)$ với $n \in \mathbb{Z}$.
    *   (c) $w = \sqrt{3}-i$. Modun $|w| = \sqrt{3+1} = 2$, góc $\text{Arg} = -\pi/6$.
        $z = \ln 2 + i(-\pi/6 + 2n\pi)$ với $n \in \mathbb{Z}$.

**Bài 3:** CMR ánh xạ $w=e^z$ biến dải ngang $a < y < a+2\pi$ thành miền $|w|>0$.
*   **Phương pháp:** Tính modun và argument của $w$, xét miền giá trị của chúng.
*   **Giải chi tiết:**
    Ta có $w = e^x e^{iy}$. Modun $|w| = e^x$ và $\arg(w) = y$.
    Khi $x \in \mathbb{R}$, tập giá trị của $e^x$ là $(0, \infty)$, nghĩa là $|w| > 0$.
    Khi $y \in (a, a+2\pi)$, góc $\arg(w)$ quét đúng một chu kỳ $2\pi$, nghĩa là $w$ quay trọn vẹn $360^\circ$ quanh gốc tọa độ.
    Do đó, $w$ quét toàn bộ mặt phẳng phức ngoại trừ gốc tọa độ, tức là miền $|w|>0$.

### 5.2 Nhánh Logarit $w = \log z$
**Tóm tắt lý thuyết:** 
Hàm logarit đa trị được định nghĩa: $\log z = \ln|z| + i(\text{Arg}(z) + 2n\pi)$.
Trị chính (viết hoa) là $\text{Log} z = \ln|z| + i\text{Arg}(z)$, chọn nhánh giới hạn góc $\text{Arg}(z) \in (-\pi, \pi]$.

**Bài tập vận dụng & Lời giải chi tiết:**

**Bài 1:** Tìm trị chính $\text{Log}(z)$ của: (a) $ie^2$; (b) $\sqrt{3}-i$.
*   **Phương pháp:** Tìm $|z|$ và $\text{Arg}(z) \in (-\pi, \pi]$ rồi áp dụng công thức.
*   **Giải chi tiết:**
    *   (a) $z = ie^2$. $|z| = e^2$, góc $\text{Arg}(z) = \pi/2$. $\text{Log}(ie^2) = \ln(e^2) + i\pi/2 = 2 + i\pi/2$.
    *   (b) $z = \sqrt{3}-i$. $|z| = 2$, góc $\text{Arg}(z) = -\pi/6$. $\text{Log}(\sqrt{3}-i) = \ln 2 - i\pi/6$.

**Bài 2:** Tìm TẤT CẢ các giá trị (log đa trị) của: (a) $-3$; (b) $4i$.
*   **Phương pháp:** Dùng $\log z = \ln|z| + i(\text{Arg}(z) + 2n\pi)$.
*   **Giải chi tiết:**
    *   (a) $z = -3$. Modun là 3, góc là $\pi$. $\log(-3) = \ln 3 + i(\pi + 2n\pi)$.
    *   (b) $z = 4i$. Modun là 4, góc là $\pi/2$. $\log(4i) = \ln 4 + i(\pi/2 + 2n\pi)$.

**Bài 3:** Giải phương trình $\text{Log}(z) = 1 - i\pi/4$.
*   **Phương pháp:** Áp dụng hàm ngược $z = e^{\text{Log}(z)}$.
*   **Giải chi tiết:**
    $z = e^{1 - i\pi/4} = e^1 \cdot e^{-i\pi/4} = e \left(\cos(-\frac{\pi}{4}) + i\sin(-\frac{\pi}{4})\right) = e \left(\frac{\sqrt{2}}{2} - i\frac{\sqrt{2}}{2}\right)$.

### 5.3 Lũy thừa phức $z^c$
**Tóm tắt lý thuyết:** 
Định nghĩa: $z^c = \exp[c \log z]$. Do log là đa trị, $z^c$ nói chung tạo ra vô số giá trị (trừ khi $c$ nguyên hoặc hữu tỉ). 
Trị chính của $z^c$ tính bằng nhánh chính của log: $\text{P.V.}(z^c) = \exp[c \text{Log} z]$.

**Bài tập vận dụng & Lời giải chi tiết:**

**Bài 1:** Tìm trị chính của: (a) $4^i$; (c) $(-1)^{1/\pi}$.
*   **Phương pháp:** $\text{P.V.} = \exp[c \text{Log} z]$.
*   **Giải chi tiết:**
    *   (a) $4^i = \exp[i \text{Log}(4)] = \exp[i(\ln 4 + i0)] = \exp(i\ln 4) = \cos(\ln 4) + i\sin(\ln 4)$.
    *   (c) $(-1)^{1/\pi} = \exp[\frac{1}{\pi} \text{Log}(-1)] = \exp[\frac{1}{\pi} (\ln 1 + i\pi)] = \exp(i) = \cos 1 + i\sin 1$.

**Bài 2:** Tìm tất cả giá trị của: (a) $i^{\sqrt{2}}$; (b) $(-1)^{3/4}$.
*   **Phương pháp:** $z^c = \exp[c \log z]$, với $\log$ đa trị cộng thêm đuôi $i2n\pi$.
*   **Giải chi tiết:**
    *   (a) $i^{\sqrt{2}} = \exp[\sqrt{2} \log i] = \exp\left[\sqrt{2} \left(0 + i(\frac{\pi}{2} + 2n\pi)\right)\right] = \exp\left[i\sqrt{2}(\frac{\pi}{2} + 2n\pi)\right]$.
    *   (b) $(-1)^{3/4} = \exp[\frac{3}{4} \log(-1)] = \exp\left[\frac{3}{4} \left(0 + i(\pi + 2n\pi)\right)\right] = \exp\left[i\left(\frac{3\pi}{4} + \frac{3n\pi}{2}\right)\right]$. 
        *(Lưu ý: đây là đa trị do số hữu tỉ có hữu hạn nghiệm, cụ thể sinh ra 4 nghiệm khi thay $n=0,1,2,3$)*.

### 5.4 & 5.5 Hàm Lượng Giác & Hyperbol
**Tóm tắt lý thuyết:** 
Các hàm lượng giác phức định nghĩa qua hàm mũ: 
$\sin z = \frac{e^{iz} - e^{-iz}}{2i}$, $\cos z = \frac{e^{iz} + e^{-iz}}{2}$.
Phân tích thực - ảo: 
$\sin(x+iy) = \sin x \cosh y + i\cos x \sinh y$
$\cos(x+iy) = \cos x \cosh y - i\sin x \sinh y$
Hàm ngược sinh ra đa trị, biểu diễn bằng hàm logarit:
$\arcsin z = -i\log[iz+(1-z^2)^{1/2}]$
$\arctan z = \frac{i}{2}\log\left(\frac{i+z}{i-z}\right)$

**Bài tập vận dụng & Lời giải chi tiết:**

**Bài 1:** Đưa về dạng $u+iv$: (a) $\cos(1+i)$; (c) $\sin(2i)$.
*   **Phương pháp:** Áp dụng công thức phân tích thực - ảo.
*   **Giải chi tiết:**
    *   (a) $\cos(1+i) = \cos 1 \cosh 1 - i\sin 1 \sinh 1$.
    *   (c) $\sin(2i) = \sin(0+2i) = \sin 0 \cosh 2 + i\cos 0 \sinh 2 = i\sinh 2$.

**Bài 2:** Giải PT: (a) $\sin z = \cosh 4$; (b) $\cos z = 2$.
*   **Phương pháp:** Tách $u+iv$ và cho bằng phần thực/ảo của vế phải.
*   **Giải chi tiết:**
    *   (a) $\sin x \cosh y = \cosh 4$ và $\cos x \sinh y = 0$.
        Vì $\cosh 4 > 1$, nếu $\sinh y = 0 \to y = 0$, khi đó $\sin x = \cosh 4 > 1$ (vô lý).
        Nên bắt buộc $\cos x = 0 \Rightarrow x = \pi/2 + n\pi$.
        $\sin(\pi/2 + n\pi) = (-1)^n$. Thế vào: $(-1)^n \cosh y = \cosh 4$. 
        Vì $\cosh y > 0$, ta phải có $(-1)^n = 1 \Rightarrow n = 2k$. Vậy $x = \pi/2 + 2k\pi$.
        Khi đó $\cosh y = \cosh 4 \Rightarrow y = \pm 4$.
        Nghiệm: $z = \pi/2 + 2k\pi \pm 4i$.
    *   (b) $\cos z = 2 \Rightarrow \cos x \cosh y = 2$ và $-\sin x \sinh y = 0$.
        Giải tương tự, $\sin x = 0 \Rightarrow x = n\pi$. 
        $(-1)^n \cosh y = 2 \Rightarrow n = 2k \Rightarrow x = 2k\pi$.
        $\cosh y = 2 \Rightarrow y = \pm\text{arccosh}(2) = \pm\ln(2+\sqrt{3})$.
        Nghiệm: $z = 2k\pi \pm i\ln(2+\sqrt{3})$.

**Bài 3:** Tìm các giá trị của: (a) $\arcsin(i/2)$; (e) $\arctan(2i)$.
*   **Phương pháp:** Áp dụng công thức Logarit cho hàm ngược đa trị.
*   **Giải chi tiết:**
    *   (a) $\arcsin(i/2) = -i\log[i(i/2) + \sqrt{1 - (i/2)^2}] = -i\log[-1/2 + \sqrt{5/4}] = -i\log\left(\frac{-1 \pm \sqrt{5}}{2}\right)$.
        Trường hợp 1 (dấu +): Biểu thức $\frac{\sqrt{5}-1}{2} > 0$, log là $\ln(\frac{\sqrt{5}-1}{2}) + i2n\pi$. Nhân $-i$ được: $2n\pi - i\ln(\frac{\sqrt{5}-1}{2})$.
        Trường hợp 2 (dấu -): Biểu thức $\frac{-\sqrt{5}-1}{2} < 0$, log là $\ln(\frac{\sqrt{5}+1}{2}) + i(\pi+2n\pi)$. Nhân $-i$ được: $(2n+1)\pi - i\ln(\frac{\sqrt{5}+1}{2})$.
    *   (e) $\arctan(2i) = \frac{i}{2}\log\left(\frac{i+2i}{i-2i}\right) = \frac{i}{2}\log(-3) = \frac{i}{2}(\ln 3 + i(\pi + 2n\pi)) = -\frac{\pi}{2} - n\pi + i\frac{\ln 3}{2}$.

---

## CHƯƠNG 9: ÁNH XẠ BẢO GIÁC (CONFORMAL MAPPING)

### 9.1 Tính Bảo Giác
**Tóm tắt lý thuyết:** 
Ánh xạ $w=f(z)$ là bảo giác tại $z_0$ nếu hàm giải tích và có đạo hàm $f'(z_0) \neq 0$.
Tính chất: Góc giữa hai đường cong cắt nhau tại $z_0$ được bảo toàn về độ lớn và hướng.
Hệ số phóng to cục bộ là $|f'(z_0)|$, góc quay cục bộ là $\arg[f'(z_0)]$.

**Bài tập vận dụng & Lời giải chi tiết:**

**Bài 1:** Tìm góc quay và hệ số phóng to của $w = 1/z$ tại các điểm $1, 1+i, i$.
*   **Phương pháp:** Tính đạo hàm $w'$, tính modun $|w'|$ và argument $\arg(w')$ tại điểm đó.
*   **Giải chi tiết:**
    Đạo hàm $w' = -1/z^2$.
    *   Tại $z=1$: $w'(1) = -1$. Hệ số phóng to $|-1| = 1$. Góc quay $\arg(-1) = \pi$.
    *   Tại $z=1+i$: $w'(1+i) = \frac{-1}{(1+i)^2} = \frac{-1}{2i} = \frac{i}{2}$. Hệ số phóng to $1/2$. Góc quay $\pi/2$.
    *   Tại $z=i$: $w'(i) = \frac{-1}{i^2} = 1$. Hệ số phóng to $1$. Góc quay $0$.

**Bài 2:** Tìm góc quay và hệ số phóng to của $w = \sin z$ tại $\pi/2 + i, 0, -\pi/2 + i$.
*   **Phương pháp:** $w' = \cos z$. Phân tích thực ảo của $\cos z$.
*   **Giải chi tiết:**
    *   Tại $z = \pi/2 + i$: $w' = \cos(\pi/2+i) = \cos(\pi/2)\cosh 1 - i\sin(\pi/2)\sinh 1 = -i\sinh 1$. 
        Hệ số phóng to $\sinh 1$, góc quay $-\pi/2$.
    *   Tại $z = 0$: $w'(0) = \cos 0 = 1$. Hệ số phóng to $1$, góc quay $0$.
    *   Tại $z = -\pi/2 + i$: $w' = \cos(-\pi/2+i) = \cos(-\pi/2)\cosh 1 - i\sin(-\pi/2)\sinh 1 = i\sinh 1$.
        Hệ số phóng to $\sinh 1$, góc quay $\pi/2$.

### 9.2 Phép Biến Đổi Song Tuyến Tính
**Tóm tắt lý thuyết:** 
Ánh xạ song tuyến tính (Möbius) $w = \frac{az+b}{cz+d}$ ($ad-bc \neq 0$). 
Nó biến họ đường thẳng/tròn thành họ đường thẳng/tròn. 
Công thức "Tỷ số kép" để lập ánh xạ biến 3 điểm $z_1, z_2, z_3$ thành $w_1, w_2, w_3$:
$\frac{(w - w_1)(w_2 - w_3)}{(w - w_3)(w_2 - w_1)} = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$

**Bài tập vận dụng & Lời giải chi tiết:**

**Bài 1:** Tìm ánh xạ biến $z_1=0, z_2=i, z_3=-i$ lần lượt thành $w_1=-1, w_2=1, w_3=0$.
*   **Phương pháp:** Thế trực tiếp vào công thức tỷ số kép và rút $w$ theo $z$.
*   **Giải chi tiết:**
    $\frac{w - (-1)}{w - 0} \cdot \frac{1 - 0}{1 - (-1)} = \frac{z - 0}{z - (-i)} \cdot \frac{i - (-i)}{i - 0}$
    $\Rightarrow \frac{w+1}{w} \cdot \frac{1}{2} = \frac{z}{z+i} \cdot \frac{2i}{i} \Rightarrow \frac{w+1}{2w} = \frac{2z}{z+i}$
    $\Rightarrow w+1 = \frac{4wz}{z+i} \Rightarrow w\left(1 - \frac{4z}{z+i}\right) = -1$
    $\Rightarrow w\left(\frac{z+i-4z}{z+i}\right) = -1 \Rightarrow w = \frac{z+i}{3z-i}$.

**Bài 2:** Tìm ánh xạ biến $0, 1, 2$ thành $0, 1, \infty$.
*   **Phương pháp:** Nếu có điểm $\infty$, ta "bỏ qua" các nhân tử chứa điểm đó trong tỷ số kép (coi như tỷ lệ bằng 1 ở vô cực).
*   **Giải chi tiết:**
    Vì $w_3 = \infty$, vế trái suy biến thành $\frac{w - w_1}{w_2 - w_1} = \frac{w-0}{1-0} = w$.
    Vế phải: $\frac{z - 0}{z - 2} \cdot \frac{1 - 2}{1 - 0} = \frac{z}{z-2} \cdot (-1) = \frac{-z}{z-2} = \frac{z}{2-z}$.
    Vậy $w = \frac{z}{2-z}$.

**Bài 3:** Chứng minh $w = \frac{i+z}{i-z}$ biến đĩa $|z|<1$ thành nửa mặt phẳng $\text{Re}(w)>0$.
*   **Phương pháp:** Rút $z$ theo $w$ rồi dùng điều kiện $|z|<1$.
*   **Giải chi tiết:**
    Từ $w = \frac{i+z}{i-z} \Rightarrow w(i-z) = i+z \Rightarrow iw - i = z(w+1) \Rightarrow z = i\frac{w-1}{w+1}$.
    Do $|z| < 1 \Rightarrow \left|i\frac{w-1}{w+1}\right| < 1 \Rightarrow |w-1| < |w+1|$.
    Bình phương 2 vế: $(u-1)^2 + v^2 < (u+1)^2 + v^2$
    $\Rightarrow u^2 - 2u + 1 < u^2 + 2u + 1 \Rightarrow -2u < 2u \Rightarrow 4u > 0 \Rightarrow u > 0$.
    Vậy miền ảnh là nửa mặt phẳng phải $\text{Re}(w) > 0$.

### 9.3 Hợp Thành Các Hàm Sơ Cấp
**Tóm tắt lý thuyết:** 
Với các miền phức tạp, ta có thể xây dựng ánh xạ thông qua các bước trung gian $Z_1, Z_2...$ (Ví dụ: dùng hàm mũ để nắn dải thành mặt phẳng phân nửa, sau đó dùng hàm Möbius để ánh xạ vào đĩa).

**Bài tập vận dụng & Lời giải chi tiết:**

**Bài 1:** Tìm ảnh của nửa dải $0 < x < \pi/2, y > 0$ qua $w = e^{iz}$.
*   **Phương pháp:** Viết $w$ thành dạng cực, đánh giá miền chạy của modun và argument.
*   **Giải chi tiết:**
    $w = e^{i(x+iy)} = e^{-y+ix} = e^{-y} e^{ix}$.
    Modun $\rho = e^{-y}$. Vì $y > 0 \Rightarrow 0 < \rho < 1$.
    Góc $\phi = x$. Vì $0 < x < \pi/2 \Rightarrow 0 < \phi < \pi/2$.
    Ảnh là một phần tư hình tròn nằm ở góc phần tư thứ nhất: $|w| < 1, 0 < \arg(w) < \pi/2$.

**Bài 2:** CMR $w = \frac{e^z-i}{e^z+i}$ biến dải ngang $-\pi < y < 0$ thành miền $|w| > 1$.
*   **Phương pháp:** Tách thành $Z = e^z$ và ánh xạ Möbius $w = \frac{Z-i}{Z+i}$.
*   **Giải chi tiết:**
    Bước 1: $Z = e^z = e^x(\cos y + i\sin y)$. Với $y \in (-\pi, 0)$, $\sin y < 0$ nên $\text{Im}(Z) < 0$ (Nửa mặt phẳng dưới).
    Bước 2: $w = \frac{Z-i}{Z+i}$. Modun $|w| = \frac{|Z-i|}{|Z+i|}$.
    Vì $Z$ nằm ở nửa mặt phẳng dưới (tọa độ tung độ âm), khoảng cách từ $Z$ đến điểm $i$ (ở phía trên trục thực) lớn hơn khoảng cách từ $Z$ đến điểm $-i$ (ở phía dưới trục thực). 
    Do đó $|Z-i| > |Z+i| \Rightarrow |w| > 1$. Ảnh là phần bên ngoài đĩa đơn vị.

**Bài 3:** Tìm ảnh của nửa mặt phẳng $\text{Im}(z) > 0$ qua $w = \text{Log}(1-z^2)$.
*   **Phương pháp:** Lần vết tập giá trị của biểu thức bên trong log.
*   **Giải chi tiết:**
    Xét $Z = 1 - z^2 = 1 - (x^2-y^2) - i2xy$. 
    Với $y>0$, nếu $x \neq 0$ thì phần ảo $-2xy \neq 0$. 
    Nếu $x = 0$, $Z = 1 + y^2 > 1$. 
    Như vậy $Z$ quét toàn bộ mặt phẳng phức TRỪ tia thực từ $(-\infty, 1]$.
    Tiếp theo, qua hàm $w = \text{Log}(Z)$: Hàm logarit trị chính ánh xạ toàn bộ mặt phẳng cắt (trừ tia âm $(-\infty, 0]$) thành dải $-\pi < \text{Im}(w) < \pi$. 
    Vì miền của ta thiếu đoạn $(0, 1]$, mà qua Log thì đoạn $(0, 1]$ biến thành tia $(-\infty, 0]$ trên trục thực.
    Nên miền ảnh cuối cùng là dải $-\pi < \text{Im}(w) < \pi$ bị khoét đi tia thực âm và điểm 0.

### 9.4 Ánh Xạ Qua Hàm Lượng Giác
**Tóm tắt lý thuyết:** 
Hàm lượng giác (như $\sin z$, $\cos z$, $\tan z$) rất hữu ích để "mở" các dải dọc hoặc ngang thành các nửa mặt phẳng hoặc mặt phẳng bị cắt.

**Bài tập vận dụng & Lời giải chi tiết:**

**Bài 1:** Tìm ảnh của nửa dải dọc $-\pi/4 < x < 0, y > 0$ qua $w = \tan z$.
*   **Phương pháp:** Dùng biểu diễn $w = -i \frac{e^{i2z}-1}{e^{i2z}+1}$. Hợp thành biến đổi.
*   **Giải chi tiết:**
    Đặt $Z = e^{i2z} = e^{-2y}e^{i2x}$.
    Với $y > 0 \Rightarrow 0 < |Z| < 1$.
    Với $-\pi/4 < x < 0 \Rightarrow -\pi/2 < \arg(Z) < 0$. $Z$ nằm ở góc phần tư thứ 4 trong đĩa đơn vị.
    Biến đổi Möbius $w = -i \frac{Z-1}{Z+1}$ ánh xạ miền này thành một góc phần tư của đĩa trong mặt phẳng $w$.
    Bằng phép thử điểm và xem biên, ta thu được ảnh là một phần tư đĩa ở góc phần tư thứ hai: $u < 0, v > 0, |w| < 1$.

**Bài 2:** Tìm ảnh của đường thẳng đứng $x = \pi/4$ qua $w = \sin z$.
*   **Phương pháp:** Thay $x$ vào công thức $\sin(x+iy)$ và tìm quỹ tích $u, v$.
*   **Giải chi tiết:**
    $u = \sin(\pi/4)\cosh y = \frac{\sqrt{2}}{2}\cosh y$.
    $v = \cos(\pi/4)\sinh y = \frac{\sqrt{2}}{2}\sinh y$.
    Ta có: $u^2 - v^2 = \frac{1}{2}(\cosh^2 y - \sinh^2 y) = \frac{1}{2}(1) = \frac{1}{2}$.
    Vì $\cosh y \ge 1 \Rightarrow u \ge \frac{\sqrt{2}}{2} > 0$.
    Đây là nhánh bên phải của Hyperbol $u^2 - v^2 = 1/2$.

**Bài 3:** Tìm ảnh của dải dọc $-\pi/2 < x < 0$ qua $w = \cos z$.
*   **Phương pháp:** Đánh giá $u = \cos x \cosh y$ và $v = -\sin x \sinh y$.
*   **Giải chi tiết:**
    Với $-\pi/2 < x < 0$, $\cos x > 0 \Rightarrow u > 0$ do $\cosh y \ge 1$.
    $-\sin x > 0$, nên $v$ chạy từ $-\infty$ đến $\infty$ cùng dấu với $\sinh y$.
    Hàm số vét toàn bộ nửa mặt phẳng bên phải trục tung ($u>0$).
    Khi $y=0 \Rightarrow v=0$ và $u = \cos x \in (0,1)$. Do đó ảnh thiếu mất tia $[1, \infty)$ trên trục thực vì không tồn tại $x, y$ sinh ra $v=0, u \ge 1$.
    Vậy ảnh là nửa mặt phẳng phải $u>0$ bị rạch loại bỏ tia $[1, \infty)$.

**Bài 4:** CMR $w = \sin^2 z$ bảo giác một-một biến dải bán vô hạn $0 < x < \pi/2, y > 0$ thành nửa mặt phẳng trên $\text{Im}(w) > 0$.
*   **Phương pháp:** Hợp thành 2 bước: $Z = \sin z$ và $w = Z^2$.
*   **Giải chi tiết:**
    Bước 1: Ánh xạ $Z = \sin z = \sin x \cosh y + i\cos x \sinh y$.
    Với $0 < x < \pi/2$ và $y > 0$: $u = \sin x \cosh y > 0$, $v = \cos x \sinh y > 0$. 
    Do đó $Z$ vét toàn bộ góc phần tư thứ nhất (Góc argument từ $0$ đến $\pi/2$). Phép ánh xạ này là 1-1 trên miền đã cho.
    Bước 2: Ánh xạ $w = Z^2$. Bình phương góc phần tư thứ nhất sẽ nhân đôi góc argument, biến miền $0 < \arg Z < \pi/2$ thành $0 < \arg w < \pi$.
    Đây chính xác là nửa mặt phẳng trên $\text{Im}(w) > 0$. Ánh xạ $z^2$ là 1-1 trên nửa mặt phẳng. Vậy hợp thành thỏa mãn đề bài.

# LỜI GIẢI CHI TIẾT CÁC ĐỀ THI GIẢI TÍCH SỐ

---

## ĐỀ A

### Câu 1 (3 điểm)
**Thông số lưới:** Bước nhảy thời gian cách đều $h = 25$ (s).
* Vận tốc $v(t) = y'(t) \approx \frac{y_{i+1} - y_{i-1}}{2h}$
* Gia tốc $a(t) = y''(t) \approx \frac{y_{i-1} - 2y_i + y_{i+1}}{h^2}$

**1. Tại thời điểm $t = 75$s (ứng với nút chỉ số $i=3$):**
Các nút lân cận: $y(50) = 58$, $y(75) = 78$, $y(100) = 92$.
* Vận tốc: 
  $$v(75) \approx \frac{92 - 58}{2 \times 25} = \frac{34}{50} = \mathbf{0.68 \text{ (km/s)}}$$
* Gia tốc: 
  $$a(75) \approx \frac{58 - 2(78) + 92}{25^2} = \frac{-6}{625} = \mathbf{-0.0096 \text{ (km/s}^2\mathbf{)}}$$
* *Nhận xét:* Do $v(75) > 0$ và $a(75) < 0$ (vận tốc và gia tốc ngược dấu), tên lửa đang chuyển động **chậm dần**.

**2. Tại thời điểm $t = 100$s (ứng với nút chỉ số $i=4$):**
Các nút lân cận: $y(75) = 78$, $y(100) = 92$, $y(125) = 100$.
* Vận tốc: 
  $$v(100) \approx \frac{100 - 78}{2 \times 25} = \frac{22}{50} = \mathbf{0.44 \text{ (km/s)}}$$
* Gia tốc: 
  $$a(100) \approx \frac{78 - 2(92) + 100}{25^2} = \frac{-6}{625} = \mathbf{-0.0096 \text{ (km/s}^2\mathbf{)}}$$
* *Nhận xét:* Do $v(100) > 0$ và $a(100) < 0$, tên lửa tiếp tục chuyển động **chậm dần**.

---

### Câu 2 (2 điểm)
**a) Kiểm tra nghiệm chính xác $y(x) = x e^{1-x}$:**
* Đạo hàm các cấp:
  $$y'(x) = e^{1-x} - xe^{1-x} = (1-x)e^{1-x}$$
  $$y''(x) = -e^{1-x} - (1-x)e^{1-x} = (x-2)e^{1-x}$$
* Thế vào vế trái phương trình vi phân:
  $$y'' + 2y' + y = (x-2)e^{1-x} + 2(1-x)e^{1-x} + xe^{1-x} = (x - 2 + 2 - 2x + x)e^{1-x} = 0$$
* Kiểm tra điều kiện biên:
  $$y(0) = 0 \cdot e^{1} = 0 \quad (\text{Thỏa mãn})$$
  $$y(1) = 1 \cdot e^{0} = 1 \quad (\text{Thỏa mãn})$$
Vậy $y(x) = x e^{1-x}$ là nghiệm chính xác.

**b) Rời rạc hóa bài toán biên Dirichlet ($h = 1/3$):**
Phương trình sai phân tổng quát tại nút nội bộ $x_i$:
$$\frac{y_{i-1} - 2y_i + y_{i+1}}{h^2} + 2\left(\frac{y_{i+1} - y_{i-1}}{2h}\right) + y_i = 0 \implies (1-h)y_{i-1} - (2-h^2)y_i + (1+h)y_{i+1} = 0$$
Thay $h = 1/3 \implies 1-h = \frac{2}{3}, \, 2-h^2 = \frac{17}{9}, \, 1+h = \frac{4}{3}$:
$$\frac{2}{3}y_{i-1} - \frac{17}{9}y_i + \frac{4}{3}y_{i+1} = 0$$
* Tại $i=1$ ($y_0=0$): $-\frac{17}{9}y_1 + \frac{4}{3}y_2 = 0$
* Tại $i=2$ ($y_3=1$): $\frac{2}{3}y_1 - \frac{17}{9}y_2 + \frac{4}{3}(1) = 0 \implies \frac{2}{3}y_1 - \frac{17}{9}y_2 = -\frac{4}{3}$

Hệ phương trình dạng ma trận $AU = F$:
$$\begin{pmatrix} -\frac{17}{9} & \frac{4}{3} \\ \frac{2}{3} & -\frac{17}{9} \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \end{pmatrix} = \begin{pmatrix} 0 \\ -\frac{4}{3} \end{pmatrix}$$

---

### Câu 3 (3 điểm)
**Lập đa thức nội suy Lagrange với 3 mốc dữ liệu:**
* Đa thức cơ sở:
  $$L_0(h) = \frac{(h-3)(h-6)}{(0-3)(0-6)} = \frac{h^2 - 9h + 18}{18}$$
  $$L_1(h) = \frac{(h-0)(h-6)}{(3-0)(3-6)} = \frac{-2h^2 + 12h}{18}$$
  $$L_2(h) = \frac{(h-0)(h-3)}{(6-0)(6-3)} = \frac{h^2 - 3h}{18}$$
* Đa thức nội suy Lagrange bậc 2:
  $$\rho(h) = 1.225 L_0(h) + 0.905 L_1(h) + 0.652 L_2(h)$$
  $$\rho(h) = \frac{1}{18} \left[ 1.225(h^2 - 9h + 18) - 1.81(h^2 - 6h) + 0.652(h^2 - 3h) \right]$$
  $$\mathbf{\rho(h) = \frac{1}{18} \left( 0.067h^2 - 2.121h + 22.050 \right)}$$
* **Dự đoán tại độ cao $h = 4.5$ km:**
  $$\rho(4.5) = \frac{1}{18} \left[ 0.067(4.5)^2 - 2.121(4.5) + 22.050 \right] = \frac{13.86225}{18} \approx \mathbf{0.770125 \text{ (kg/m}^3\mathbf{)}}$$

---

### Câu 4 (2 điểm)
Xét $I = \int_{0}^{3} (5 + 3\cos x) dx$ trên miền $[0, 3]$.
**a) Quy tắc Hình thang đơn ($h=3$):**
$$I_T = \frac{3}{2}[f(0) + f(3)] = 1.5 \times [(5+3\cos 0) + (5+3\cos 3)] \approx 1.5 \times [8 + 2.029978] = \mathbf{15.044966}$$

**b) Quy tắc Simpson 1/3 đơn ($h=1.5$):**
$$I_S = \frac{1.5}{3}[f(0) + 4f(1.5) + f(3)] = 0.5 \times [8 + 4(5 + 3\cos 1.5) + 2.029978] \approx \mathbf{15.439414}$$

**c) Tính chính xác và So sánh sai số:**
* Giá trị chính xác: $I_{\text{cx}} = \left[ 5x + 3\sin x \right]_0^3 = 15 + 3\sin 3 \approx \mathbf{15.423360}$
* Sai số tuyệt đối Quy tắc Hình thang: $\Delta_T = |15.423360 - 15.044966| = \mathbf{0.378394}$
* Sai số tuyệt đối Quy tắc Simpson: $\Delta_S = |15.423360 - 15.439414| = \mathbf{0.016054}$
* *Nhận xét:* Quy tắc Simpson 1/3 cho sai số nhỏ hơn nhiều so với quy tắc Hình thang nhờ bậc chính xác đại số cao hơn ($O(h^4)$ so với $O(h^2)$).

---
---

## ĐỀ B

### Câu 1 (3 điểm)
**Thông số:** Khảo sát tại điểm $x = 2.5$. Các nút lân cận cách đều cục bộ với bước $h = 1.0$ ($x_{i-1}=1.5, \, x_i=2.5, \, x_{i+1}=3.5$).
* **Sai phân tiến:**
  $$f'(2.5) \approx \frac{f(3.5) - f(2.5)}{1.0} = 0.01596 - 0.08422 = \mathbf{-0.068260}$$
* **Sai phân lùi:**
  $$f'(2.5) \approx \frac{f(2.5) - f(1.5)}{1.0} = 0.08422 - 0.37340 = \mathbf{-0.289180}$$
* **Sai phân trung tâm:**
  $$f'(2.5) \approx \frac{f(3.5) - f(1.5)}{2 \times 1.0} = \frac{0.01596 - 0.37340}{2} = \mathbf{-0.178720}$$

**So sánh đạo hàm chính xác:**
* Đạo hàm giải tích: $f'(x) = 5e^{-2x} - 10xe^{-2x} = 5(1-2x)e^{-2x}$
* Giá trị chính xác tại $x=2.5$: $f'(2.5) = 5(1-5)e^{-5} = -20e^{-5} \approx \mathbf{-0.134759}$
* *Nhận xét:* Sai số tuyệt đối của sai phân trung tâm ($0.043961$) nhỏ hơn sai phân tiến ($0.066499$) và sai phân lùi ($0.154421$), chứng minh công thức trung tâm đạt cấp chính xác cao nhất.

---

### Câu 2 (2 điểm)
**a) Kiểm tra nghiệm chính xác $T(x) = -12.5x^2 + 141x + 40$:**
* Đạo hàm: $T'(x) = -25x + 141 \implies T''(x) = -25 = -f(x)$ (Thỏa mãn).
* Biên: $T(0) = 40^\circ\text{C}$; $T(10) = -12.5(100) + 141(10) + 40 = 200^\circ\text{C}$ (Thỏa mãn).
Vậy nghiệm chính xác hoàn toàn đúng.

**b) Rời rạc hóa hệ ma trận ($h = 2.5$):**
Công thức sai phân trung tâm bậc hai: 
$$\frac{T_{i-1} - 2T_i + T_{i+1}}{2.5^2} = -25 \implies T_{i-1} - 2T_i + T_{i+1} = -156.25$$
Biết $T_0 = 40$ và $T_4 = 200$. Thiết lập tại các nút nội bộ:
* Tại $i=1$: $-2T_1 + T_2 = -156.25 - 40 = -196.25$
* Tại $i=2$: $T_1 - 2T_2 + T_3 = -156.25$
* Tại $i=3$: $T_2 - 2T_3 = -156.25 - 200 = -356.25$

Dạng ma trận $AU = F$:
$$\begin{pmatrix} -2 & 1 & 0 \\ 1 & -2 & 1 \\ 0 & 1 & -2 \end{pmatrix} \begin{pmatrix} T_1 \\ T_2 \\ T_3 \end{pmatrix} = \begin{pmatrix} -196.25 \\ -156.25 \\ -356.25 \end{pmatrix}$$

---

### Câu 3 (3 điểm)
**Lập đa thức Lagrange với các điểm dữ liệu:**
* Đa thức cơ sở tại điểm cần xấp xỉ $x = 0$:
  $$L_0(0) = \frac{(0-0.3)(0-1.1)}{(-1.2-0.3)(-1.2-1.1)} = \frac{0.33}{3.45} = \frac{11}{115}$$
  $$L_1(0) = \frac{(0+1.2)(0-1.1)}{(0.3+1.2)(0.3-1.1)} = \frac{-1.32}{-1.2} = 1.1 = \frac{110}{100}$$
  $$L_2(0) = \frac{(0+1.2)(0-0.3)}{(1.1+1.2)(1.1-0.3)} = \frac{-0.36}{1.84} = -\frac{9}{46}$$
* Giá trị xấp xỉ của $y$ tại $x=0$:
  $$y(0) = -5.76 \left(\frac{11}{115}\right) - 5.61 (1.1) - 3.69 \left(-\frac{9}{46}\right)$$
  $$y(0) = -0.550957 - 6.171000 + 0.721957 = \mathbf{-6.000000}$$

---

### Câu 4 (2 điểm)
Xét $I = \int_0^2 (x^5 + 3x^3 - 2) dx$.
**a) Quy tắc Hình thang đơn ($h=2$):**
$$I_T = \frac{2}{2}[f(0) + f(2)] = 1 \times [(-2) + (2^5 + 3(2^3) - 2)] = -2 + 54 = \mathbf{52.000000}$$

**b) Quy tắc Simpson 1/3 đơn ($h=1$):**
$$I_S = \frac{1}{3}[f(0) + 4f(1) + f(2)] = \frac{1}{3}[-2 + 4(1^5 + 3(1^3) - 2) + 54] = \frac{1}{3}[-2 + 8 + 54] = \mathbf{20.000000}$$

**c) Giá trị chính xác và So sánh sai số:**
* Giá trị chính xác giải tích: $I_{\text{cx}} = \left[ \frac{x^6}{6} + \frac{3x^4}{4} - 2x \right]_0^2 = \frac{64}{6} + 12 - 4 = \frac{56}{3} \approx \mathbf{18.666667}$
* Sai số tuyệt đối Hình thang: $\Delta_T = |18.666667 - 52.000000| = \mathbf{33.333333}$
* Sai số tuyệt đối Simpson: $\Delta_S = |18.666667 - 20.000000| = \mathbf{1.333333}$
* *Nhận xét:* Hàm số là đa thức bậc 5, vượt quá bậc chính xác đại số lý thuyết của cả hai phương pháp. Do đó cả hai đều xuất hiện sai số phần dư lớn, nhưng cấu trúc parabol của Simpson vẫn áp sát đường cong tốt hơn hẳn hình thang thẳng đơn điệu.

---
---

##  ĐỀ C

### Câu 1 (2 điểm)
**a) Đa thức Lagrange bậc 2 tại $x = 7.75$:**
Mốc mốc: $f(6) = 36\ln 6 \approx 64.503308$, $f(7) = 49\ln 7 \approx 95.349528$, $f(8) = 64\ln 8 \approx 133.084258$.
* Hệ số cơ sở Lagrange tại $x=7.75$:
  $$L_0(7.75) = \frac{(7.75-7)(7.75-8)}{(6-7)(6-8)} = \frac{-0.1875}{2} = -0.093750$$
  $$L_1(7.75) = \frac{(7.75-6)(7.75-8)}{(7-6)(7-8)} = \frac{-0.4375}{-1} = 0.437500$$
  $$L_2(7.75) = \frac{(7.75-6)(7.75-7)}{(8-6)(8-7)} = \frac{1.3125}{2} = 0.656250$$
* Giá trị xấp xỉ $f(7.75)$:
  $$P_2(7.75) = 64.503308(-0.09375) + 95.349528(0.4375) + 133.084258(0.65625) = \mathbf{123.004652}$$

**b) Tìm khoảng bị chặn của sai số:**
Công thức sai số Lagrange bậc 2: $|E_2(x)| = \frac{|f^{(3)}(\xi)|}{3!} |(x-6)(x-7)(x-8)|$.
* Đạo hàm giải tích cấp 3:
  $$f'(x) = 2x\ln x + x \implies f''(x) = 2\ln x + 3 \implies f^{(3)}(x) = \frac{2}{x}$$
* Trên miền khảo sát $[6, 8]$, hàm $|f^{(3)}(x)|$ đạt cực đại tại biên trái $x=6$:
  $$M_3 = \max_{x\in[6,8]} \left|\frac{2}{x}\right| = \frac{2}{6} = \frac{1}{3}$$
* Tính tích các khoảng cách tại điểm $x=7.75$:
  $$|\omega_3(7.75)| = |(7.75-6)(7.75-7)(7.75-8)| = 1.75 \times 0.75 \times 0.25 = 0.328125$$
* Chặn trên sai số:
  $$|E_2(7.75)| \le \frac{1/3}{6} \times 0.328125 = \mathbf{0.018229}$$

---

### Câu 2 (3 điểm)
Xét $I = \int_2^3 \frac{x^3}{\sqrt{x^4 - 1}} dx$.
**a) Quy tắc Hình thang đơn ($h=1$):**
* $f(2) = \frac{8}{\sqrt{15}} \approx 2.065591$, $f(3) = \frac{27}{\sqrt{80}} \approx 3.018692$.
* $I_T = \frac{1}{2} [2.065591 + 3.018692] = \mathbf{2.542142}$

**b) Quy tắc Simpson 1/3 đơn ($h=0.5$):**
* Nút trung tâm $x=2.5$: $f(2.5) = \frac{2.5^3}{\sqrt{2.5^4-1}} = \frac{15.625}{\sqrt{38.0625}} \approx 2.532628$.
* $I_S = \frac{0.5}{3} [2.065591 + 4(2.532628) + 3.018692] = \mathbf{2.535799}$

**c) Tính chính xác và So sánh sai số tương đối:**
* Nguyên hàm giải tích (đặt $u = x^4-1$): $I_{\text{cx}} = \left[ \frac{1}{2}\sqrt{x^4-1} \right]_2^3 = \frac{1}{2}(\sqrt{80} - \sqrt{15}) \approx \mathbf{2.535644}$
* Sai số tương đối Hình thang: $\varepsilon_{r, T} = \left|\frac{2.535644 - 2.542142}{2.535644}\right| \times 100\% = \mathbf{0.2562\%}$
* Sai số tương đối Simpson: $\varepsilon_{r, S} = \left|\frac{2.535644 - 2.535799}{2.535644}\right| \times 100\% = \mathbf{0.0061\%}$
* *Nhận xét:* Quy tắc Simpson hội tụ cực kỳ sát đáp số thực tế, tối ưu hóa sai số gấp gần 42 lần so với Hình thang.

---

### Câu 3 (3 điểm)
*(Đã được giải chi tiết trọn vẹn ở lược đồ câu hỏi trước, xem lại cấu trúc số liệu chính xác cao: $a_{\text{tiến}} = 1.642544$, $a_{\text{lùi}} = 1.942413$, $a_{\text{trung tâm}} = 1.792479$, $a_{\text{chính xác}} = 1.766348$. Sai số tương đối lần lượt là $7.01\%, \, 9.97\%, \, 1.48\%$. Quy tắc trung tâm đạt ưu thế bậc hội tụ phẳng nhẵn tuyệt đối).*

---

### Câu 4 (2 điểm)
**a) Kiểm tra nghiệm chính xác $y(t) = \frac{t e^t}{3}$:**
* Đạo hàm: $y'(t) = \frac{1}{3}e^t + \frac{t}{3}e^t = \frac{t+1}{3}e^t \implies y''(t) = \frac{1}{3}e^t + \frac{t+1}{3}e^t = \frac{t+2}{3}e^t$.
* Kiểm tra ODE: $y'' - y = \frac{t+2}{3}e^t - \frac{t}{3}e^t = \frac{2}{3}e^t$ (Thỏa mãn).
* Biên: $y(0) = 0$; $y(1) = \frac{e}{3}$ (Thỏa mãn). Nghiệm chính xác đúng.

**b) Thiết lập hệ phương trình tuyến tính ($h = 1/3$):**
Rời rạc hóa ODE: $\frac{y_{i-1} - 2y_i + y_{i+1}}{h^2} = y_i + \frac{2}{3}e^{t_i} \implies y_{i-1} - (2+h^2)y_i + y_{i+1} = \frac{2}{3}h^2e^{t_i}$.
Với $h^2 = 1/9 \implies 2+h^2 = \frac{19}{9}, \, \frac{2}{3}h^2 = \frac{2}{27}$:
$$y_{i-1} - \frac{19}{9}y_i + y_{i+1} = \frac{2}{27}e^{t_i}$$
Biết $y_0 = 0$ và $y_3 = \frac{e}{3}$. Lập hệ tại 2 nút nội bộ:
* Tại $i=1$ ($t_1=1/3$): $-\frac{19}{9}y_1 + y_2 = \frac{2}{27}e^{1/3}$
* Tại $i=2$ ($t_2=2/3$): $y_1 - \frac{19}{9}y_2 = \frac{2}{27}e^{2/3} - \frac{e}{3}$

Dạng ma trận $AU = F$:
$$\begin{pmatrix} -\frac{19}{9} & 1 \\ 1 & -\frac{19}{9} \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \end{pmatrix} = \begin{pmatrix} \frac{2}{27}e^{1/3} \\ \frac{2}{27}e^{2/3} - \frac{e}{3} \end{pmatrix}$$

---
---

## ĐỀ D

### Câu 1 (3 điểm)
Xét $I = \int_0^{\pi} e^x \cos x \, dx$.
**a) Quy tắc Hình thang đơn ($h = \pi$):**
* $f(0) = e^0\cos 0 = 1$, $f(\pi) = e^{\pi}\cos\pi = -e^{\pi} \approx -23.140693$.
* $I_T = \frac{\pi}{2} [1 - 23.140693] \approx \mathbf{-34.778508}$

**b) Quy tắc Simpson 1/3 đơn ($h = \pi/2$):**
* Nút giữa $x=\pi/2$: $f(\pi/2) = e^{\pi/2}\cos(\pi/2) = 0$.
* $I_S = \frac{\pi/2}{3} [1 + 4(0) - 23.140693] = \mathbf{-11.592836}$

**c) Tính chính xác và So sánh sai số tuyệt đối:**
* Giá trị giải tích chính xác: $I_{\text{cx}} = \left[ \frac{e^x}{2}(\sin x + \cos x) \right]_0^{\pi} = -\frac{e^{\pi}+1}{2} \approx \mathbf{-12.070346}$
* Sai số tuyệt đối Hình thang: $\Delta_T = |-12.070346 - (-34.778508)| = \mathbf{22.708162}$
* Sai số tuyệt đối Simpson: $\Delta_S = |-12.070346 - (-11.592836)| = \mathbf{0.477510}$
* *Nhận xét:* Hàm điều hòa dao động mạnh khiến Hình thang đơn tạo ra khoảng hở diện tích khổng lồ. Simpson nhờ tận dụng nút điểm cực trị bằng 0 tại lõi giữa đã kiểm soát thành công hành vi hàm số và cho độ chính xác vượt trội.

---

### Câu 2 (2 điểm)
**a) Kiểm tra nghiệm chính xác $y(t) = e^{t^2}$:**
* Đạo hàm: $y'(t) = 2te^{t^2} \implies y''(t) = 2e^{t^2} + 4t^2e^{t^2} = (2+4t^2)e^{t^2} = (2+4t^2)y$ (Thỏa mãn).
* Biên: $y(0) = e^0 = 1$; $y(1) = e^{1} = e$ (Thỏa mãn). Nghiệm chính xác đúng.

**b) Thiết lập hệ phương trình ma trận ($h = 1/3, \, h^2 = 1/9$):**
Mô hình sai phân: $y_{i-1} - [2 + h^2(2+4t_i^2)]y_i + y_{i+1} = 0$.
* Tại $i=1$ ($t_1=1/3, \, y_0=1$): Hệ số của $y_1$ là $2 + \frac{1}{9}(2 + \frac{4}{9}) = \frac{184}{81}$.
  $$-\frac{184}{81}y_1 + y_2 = -1$$
* Tại $i=2$ ($t_2=2/3, \, y_3=e$): Hệ số của $y_2$ là $2 + \frac{1}{9}(2 + \frac{16}{9}) = \frac{196}{81}$.
  $$y_1 - \frac{196}{81}y_2 = -e$$

Dạng ma trận $AU = F$:
$$\begin{pmatrix} -\frac{184}{81} & 1 \\ 1 & -\frac{196}{81} \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \end{pmatrix} = \begin{pmatrix} -1 \\ -e \end{pmatrix}$$

---

### Câu 3 (2 điểm)
**a) Đa thức Lagrange bậc 2 tại $x = 1.04$:**
Mốc: $f(1) = \ln 2 \approx 0.69314718$, $f(1.1) = \ln 2.1 \approx 0.74193734$, $f(1.2) = \ln 2.2 \approx 0.78845736$.
* Hệ số cơ sở tại $x = 1.04$:
  $$L_0(1.04) = \frac{(1.04-1.1)(1.04-1.2)}{(1-1.1)(1-1.2)} = 0.48000000$$
  $$L_1(1.04) = \frac{(1.04-1)(1.04-1.2)}{(1.1-1)(1.1-1.2)} = 0.64000000$$
  $$L_2(1.04) = \frac{(1.04-1)(1.04-1.1)}{(1.2-1)(1.2-1.1)} = -0.12000000$$
* Tính gần đúng: $P_2(1.04) = 0.48(0.69314718) + 0.64(0.74193734) - 0.12(0.78845736) = \mathbf{0.71293567}$.
* Giá trị thực tế: $f(1.04) = \ln(2.04) \approx \mathbf{0.71294981}$.
* Sai số tuyệt đối thực tế: $\Delta = |0.71294981 - 0.71293567| = \mathbf{0.00001414}$.

**b) Chặn biên sai số theo định lý lý thuyết:**
Đạo hàm cấp ba: $f^{(3)}(x) = \frac{2}{(x+1)^3}$. Trên $[1, 1.2]$, cực đại đạt tại biên trái $x=1 \implies M_3 = \frac{2}{8} = 0.25$.
Tích khoảng cách: $|\omega_3(1.04)| = |0.04 \times (-0.06) \times (-0.16)| = 0.000384$.
$$|E_2(1.04)| \le \frac{0.25}{6} \times 0.000384 = \mathbf{0.00001600}$$
*Nhận xét:* Sai số thực tế ($1.414 \times 10^{-5}$) nhỏ hơn chặn trên lý thuyết ($1.600 \times 10^{-5}$), thỏa mãn hoàn toàn định lý định lượng.

---

### Câu 4 (3 điểm)
**a) Xấp xỉ đạo hàm $f'(2.38)$ với bước lưới $h = 0.01$:**
* Sai phân tiến: 
  $$f'(2.38) \approx \frac{0.87129 - 0.86710}{0.01} = \mathbf{0.419000}$$
* Sai phân lùi: 
  $$f'(2.38) \approx \frac{0.86710 - 0.86289}{0.01} = \mathbf{0.421000}$$
* Sai phân trung tâm: 
  $$f'(2.38) \approx \frac{0.87129 - 0.86289}{0.02} = \mathbf{0.420000}$$

**b) Sử dụng công thức sai phân hữu hạn lệch có sai số bậc $O(h^2)$ tại biên:**
* **Tại biên trái $x = 2.36$ (Sử dụng công thức sai phân tiến 3 điểm):**
  $$f'(x_0) \approx \frac{-3f(x_0) + 4f(x_1) - f(x_2)}{2h}$$
  $$f'(2.36) \approx \frac{-3(0.85866) + 4(0.86289) - 0.86710}{0.02} = \frac{0.00848}{0.02} = \mathbf{0.424000}$$
* **Tại biên phải $x = 2.39$ (Sử dụng công thức sai phân lùi 3 điểm):**
  $$f'(x_n) \approx \frac{f(x_{n-2}) - 4f(x_{n-1}) + 3f(x_n)}{2h}$$
  $$f'(2.39) \approx \frac{0.86289 - 4(0.86710) + 3(0.87129)}{0.02} = \frac{0.00836}{0.02} = \mathbf{0.418000}$$

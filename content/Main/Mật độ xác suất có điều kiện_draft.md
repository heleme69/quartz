
# Mật độ Xác suất Có điều kiện và Biểu diễn Tích phân cho Vectơ Liên tục

> [!thm] (Định lý Tonelli–Fubini cho Độ đo Tích - Product Measure and Fubini's Theorem)
> Cho $(S, \mathcal{B}_S, \mu_S)$ và $(T, \mathcal{B}_T, \mu_T)$ là hai không gian độ đo $\sigma$-hữu hạn (ví dụ, các không gian Lebesgue trên $\mathbb{R}^d$). Gọi $\mu_S \otimes \mu_T$ là độ đo tích duy nhất trên $\sigma$-đại số tích $\mathcal{B}_S \otimes \mathcal{B}_T$.
> 
> 1. **Định lý Tonelli (Hàm đo được không âm):** Nếu $f: S \times T \to [0, \infty]$ là hàm $\mathcal{B}_S \otimes \mathcal{B}_T$-đo được, thì các hàm lề tích phân thớ
>    $$x \mapsto \int_T f(x, y) \, d\mu_T(y) \quad \text{và} \quad y \mapsto \int_S f(x, y) \, d\mu_S(x)$$
>    lần lượt đo được đối với $\mathcal{B}_S$ và $\mathcal{B}_T$, đồng thời ta có công thức đổi thứ tự tích phân:
>    $$\int_{S \times T} f \, d(\mu_S \otimes \mu_T) = \int_S \left( \int_T f(x, y) \, d\mu_T(y) \right) d\mu_S(x) = \int_T \left( \int_S f(x, y) \, d\mu_S(x) \right) d\mu_T(y).$$
> 2. **Định lý Fubini (Hàm khả tích):** Nếu $f \in L^1(S \times T, \mathcal{B}_S \otimes \mathcal{B}_T, \mu_S \otimes \mu_T)$, thì với hầu hết $x \in S$ ($\mu_S$-a.e.) thớ $f_x(y) = f(x, y)$ thuộc $L^1(\mu_T)$, với hầu hết $y \in T$ ($\mu_T$-a.e.) thớ $f^y(x) = f(x, y)$ thuộc $L^1(\mu_S)$, và đẳng thức tích phân lặp trên vẫn đúng.

> [!prp] (Tích phân Từng phần - Partial Integration on Product Spaces)
> Cho không gian xác suất tích $(\Omega_1 \times \Omega_2, \mathcal{F}_1 \otimes \mathcal{F}_2, \mathbb{P}_1 \otimes \mathbb{P}_2)$ và xét $\sigma$-đại số con $\mathcal{G} = \mathcal{F}_1 \otimes \{\emptyset, \Omega_2\}$ (chỉ chứa thông tin về tọa độ thứ nhất $\omega_1$). 
> 
> Với mọi biến ngẫu nhiên $X \in L^1(\Omega_1 \times \Omega_2, \mathcal{F}_1 \otimes \mathcal{F}_2, \mathbb{P}_1 \otimes \mathbb{P}_2)$, kỳ vọng điều kiện $\mathbb{E}[X \mid \mathcal{G}]$ chính là phép **tích phân từng phần (integrating out $\omega_2$)** theo độ đo lề $\mathbb{P}_2$:
> $$\mathbb{E}[X \mid \mathcal{G}](\omega_1, \omega_2) = \int_{\Omega_2} X(\omega_1, \omega_2') \, d\mathbb{P}_2(\omega_2'), \quad \text{a.s.}$$

> [!prf]
> Đặt $Z(\omega_1) = \int_{\Omega_2} X(\omega_1, \omega_2') \, d\mathbb{P}_2(\omega_2')$. Theo Định lý Fubini, $Z$ là một hàm đo được đối với $\mathcal{F}_1$, do đó đo được đối với $\mathcal{G} = \mathcal{F}_1 \otimes \{\emptyset, \Omega_2\}$.
> 
> Với mỗi tập $G \in \mathcal{G}$, theo cấu trúc $\sigma$-đại số tích, $G$ có dạng $A \times \Omega_2$ với $A \in \mathcal{F}_1$. Tính tích phân của $Z$ trên $G$ đối với độ đo tích $\mathbb{P} = \mathbb{P}_1 \otimes \mathbb{P}_2$:
> $$\int_G Z \, d\mathbb{P} = \int_{A \times \Omega_2} Z(\omega_1) \, d(\mathbb{P}_1 \otimes \mathbb{P}_2)(\omega_1, \omega_2) = \int_A Z(\omega_1) \, d\mathbb{P}_1(\omega_1) = \int_A \left( \int_{\Omega_2} X(\omega_1, \omega_2') \, d\mathbb{P}_2(\omega_2') \right) d\mathbb{P}_1(\omega_1).$$
> Áp dụng Định lý Fubini hoán đổi tích phân lặp thành tích phân trên không gian tích $A \times \Omega_2 = G$:
> $$\int_G Z \, d\mathbb{P} = \int_{A \times \Omega_2} X(\omega_1, \omega_2) \, d(\mathbb{P}_1 \otimes \mathbb{P}_2)(\omega_1, \omega_2) = \int_G X \, d\mathbb{P}.$$
> Đẳng thức trên nghiệm đúng với mọi $G \in \mathcal{G}$, khẳng định $Z = \mathbb{E}[X \mid \mathcal{G}]$ hầu chắc chắn.

> [!prp] (Đặc trưng Tính Độc lập qua Kỳ vọng Điều kiện)
> Cho biến ngẫu nhiên $X: (\Omega, \mathcal{F}) \to (S, \mathcal{B}_S)$ và $\mathcal{G} \subseteq \mathcal{F}$ là một $\sigma$-đại số con. 
> 
> $\sigma$-đại số $\sigma(X)$ và $\mathcal{G}$ độc lập với nhau khi và chỉ khi với mọi hàm Borel bị chặn $f \in \mathcal{B}(S, \mathcal{B}_S)$, ta có đẳng thức hầu chắc chắn:
> $$\mathbb{E}[f(X) \mid \mathcal{G}] = \mathbb{E}[f(X)] \quad (\mathbb{P}\text{-a.s.})$$

> [!prf]
> 1. **Chiều thuận ($\Rightarrow$):** Giả sử $\sigma(X)$ và $\mathcal{G}$ độc lập. Với bất kỳ $G \in \mathcal{G}$, do $f(X)$ và $\mathbb{1}_G$ độc lập, ta có:
>    $$\int_G \mathbb{E}[f(X)] \, d\mathbb{P} = \mathbb{E}[f(X)] \mathbb{P}(G) = \mathbb{E}[f(X) \mathbb{1}_G] = \int_G f(X) \, d\mathbb{P}.$$
>    Vì $\mathbb{E}[f(X)]$ là hằng số (hiển nhiên $\mathcal{G}$-đo được), theo tính duy nhất của tiên đề Kolmogorov, ta suy ra $\mathbb{E}[f(X) \mid \mathcal{G}] = \mathbb{E}[f(X)]$ a.s.
> 2. **Chiều đảo ($\Leftarrow$):** Giả sử $\mathbb{E}[f(X) \mid \mathcal{G}] = \mathbb{E}[f(X)]$ a.s. Với mọi tập $B \in \mathcal{B}_S$ và $G \in \mathcal{G}$, chọn $f = \mathbb{1}_B$:
>    $$\mathbb{P}(\{X \in B\} \cap G) = \mathbb{E}[\mathbb{1}_B(X) \mathbb{1}_G] = \int_G \mathbb{E}[\mathbb{1}_B(X) \mid \mathcal{G}] \, d\mathbb{P} = \int_G \mathbb{E}[\mathbb{1}_B(X)] \, d\mathbb{P} = \mathbb{P}(X \in B) \mathbb{P}(G).$$
>    Đẳng thức khẳng định $\sigma(X)$ và $\mathcal{G}$ độc lập.

> [!lem] (Đặc trưng Phương trình Kolmogorov qua Hàm thử Borel - Test Function Characterization)
> Cho $X: \Omega \to \mathbb{R}^k$ là vectơ ngẫu nhiên, $Z \in L^1(\Omega, \mathcal{F}, \mathbb{P})$, và $g: \mathbb{R}^k \to \mathbb{R}$ là hàm Borel. 
> 
> Đẳng thức kỳ vọng điều kiện $g(X) = \mathbb{E}[Z \mid X]$ hầu chắc chắn tương đương với việc $g(X)$ nghiệm đúng phương trình bình quân cục bộ đối với mọi hàm thử Borel bị chặn $h \in \mathcal{B}(\mathbb{R}^k)$:
> $$\mathbb{E}[Z \cdot h(X)] = \mathbb{E}[g(X) \cdot h(X)].$$

> [!prf]
> * **Chiều thuận ($\Rightarrow$):** 
>   Theo Đặc trưng Tích phân qua Độ đo Đẩy, mệnh đề $g(X) = \mathbb{E}[Z \mid X]$ khẳng định rằng với mọi tập Borel $B \in \mathcal{B}(\mathbb{R}^k)$, ta có:
>   $$\int_{X^{-1}(B)} Z \, d\mathbb{P} = \int_B g(x) \, d(X_*\mathbb{P})(x).$$
>   Áp dụng Định lý Đổi biến cho độ đo đẩy $X_*\mathbb{P}$, vế trái và vế phải lần lượt viết thành:
>   $$\mathbb{E}[Z \cdot \mathbb{1}_B(X)] = \mathbb{E}[g(X) \cdot \mathbb{1}_B(X)].$$
>   Đẳng thức đúng với mọi hàm chỉ thị $h = \mathbb{1}_B$. Do tính tuyến tính của tích phân Lebesgue, đẳng thức đúng với mọi hàm đơn giản. Nhờ Định lý Hội tụ Bị chặn (BCT) xấp xỉ qua dãy hàm đơn giản, ta suy ra đẳng thức đúng với mọi hàm thử Borel bị chặn $h \in \mathcal{B}(\mathbb{R}^k)$.
> 
> * **Chiều đảo ($\Leftarrow$):** 
>   Giả sử đẳng thức đúng với mọi hàm thử Borel bị chặn $h \in \mathcal{B}(\mathbb{R}^k)$. Chọn hàm thử $h = \mathbb{1}_B$ với $B \in \mathcal{B}(\mathbb{R}^k)$ tùy ý, kết hợp với Định lý Đổi biến độ đo đẩy $X_*\mathbb{P}$, ta thu được:
>   $$\int_{X^{-1}(B)} Z \, d\mathbb{P} = \mathbb{E}[Z \cdot \mathbb{1}_B(X)] = \mathbb{E}[g(X) \cdot \mathbb{1}_B(X)] = \int_B g(x) \, d(X_*\mathbb{P})(x), \quad \forall B \in \mathcal{B}(\mathbb{R}^k).$$
>   Theo chiều đảo của Đặc trưng Tích phân qua Độ đo Đẩy, đẳng thức tích phân trên khẳng định $g(X) = \mathbb{E}[Z \mid X]$ hầu chắc chắn.

> [!thm] (Công thức Cắt lớp Tích phân cho Các Biến Độc lập - Independent Slicing)
> Cho hai biến ngẫu nhiên độc lập $X: (\Omega, \mathcal{F}) \to (S, \mathcal{B}_S)$ và $Y: (\Omega, \mathcal{F}) \to (T, \mathcal{B}_T)$ trên không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$, với phân phối lề lần lượt là $\mu_X$ và $\mu_Y$. 
> 
> Với mọi hàm Borel $f \in \mathcal{B}(S \times T, \mathcal{B}_S \otimes \mathcal{B}_T)$ khả tích hoặc không âm, kỳ vọng điều kiện $\mathbb{E}[f(X,Y) \mid X]$ có biểu diễn Doob–Dynkin $\mathbb{E}[f(X,Y) \mid X] = g(X)$, trong đó hàm hồi quy $g(x) \equiv \mathbb{E}[f(X,Y) \mid X = x]$ được xác định bởi:
> $$g(x) = \mathbb{E}[f(x, Y)] = \int_T f(x, y) \,\mu_Y(dy).$$

> [!prf]
> Do $X$ và $Y$ độc lập, định luật đồng thời của vectơ $(X, Y)$ là độ đo tích $\mu_{XY} = \mu_X \otimes \mu_Y$. Với mọi hàm thử $h \in \mathcal{B}(S, \mathcal{B}_S)$, áp dụng Định lý Fubini–Tonelli:
> $$\mathbb{E}[f(X,Y)h(X)] = \iint_{S \times T} f(x,y)h(x) \,(\mu_X \otimes \mu_Y)(dxdy)$$
> $$= \int_S h(x) \left( \int_T f(x,y) \,\mu_Y(dy) \right) \mu_X(dx) = \int_S g(x)h(x) \,\mu_X(dx) = \mathbb{E}[g(X)h(X)].$$
> Theo Đặc trưng Phương trình Kolmogorov qua Hàm thử Borel vừa chứng minh ở trên, đẳng thức $\mathbb{E}[f(X,Y)h(X)] = \mathbb{E}[g(X)h(X)]$ nghiệm đúng với mọi hàm thử $h$ khẳng định $g(X) = \mathbb{E}[f(X,Y) \mid X]$ hầu chắc chắn.

> [!def] (Hàm Mật độ Xác suất Có điều kiện - Conditional Probability Density)
> Cho vectơ ngẫu nhiên $(X, Y): \Omega \to \mathbb{R} \times \mathbb{R}^d$ có hàm mật độ xác suất đồng thời $\rho_{XY} \in L^1(\mathbb{R} \times \mathbb{R}^d, \mathcal{B}(\mathbb{R} \times \mathbb{R}^d), \lambda)$ đối với độ đo Lebesgue $\lambda$. Theo Định lý Fubini–Tonelli áp dụng cho độ đo tích trên $\mathbb{R} \times \mathbb{R}^d$, hàm mật độ lề của $X$ được xác định bởi tích phân Lebesgue theo từng thớ:
> $$\rho_X(x) = \int_{\mathbb{R}^d} \rho_{XY}(x, y) \, dy, \quad \forall x \in \mathbb{R}.$$
> Hàm **mật độ xác suất có điều kiện** của $Y$ với điều kiện $X = x$, ký hiệu là $\rho_{Y \mid X}(\cdot \mid x): \mathbb{R}^d \to [0, \infty)$, được định nghĩa tường minh bởi:
> $$\rho_{Y \mid X}(y \mid x) = \mathbb{1}_{\{0 < \rho_X(x) < \infty\}} \frac{\rho_{XY}(x,y)}{\rho_X(x)}.$$

> [!thm] (Biểu diễn Tích phân của Kỳ vọng Điều kiện qua Mật độ Điều kiện)
> Cho $(X, Y)$ là vectơ ngẫu nhiên có hàm mật độ đồng thời $\rho_{XY}(x, y)$. Với mọi hàm Borel $f \in \mathcal{B}(\mathbb{R} \times \mathbb{R}^d)$ thỏa mãn $f(X, Y) \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ (hoặc $f \ge 0$), kỳ vọng điều kiện $\mathbb{E}[f(X, Y) \mid X]$ có biểu diễn Doob–Dynkin $\mathbb{E}[f(X, Y) \mid X] = g(X)$, trong đó hàm hồi quy $g(x) \equiv \mathbb{E}[f(X, Y) \mid X = x]$ được tính tường minh bằng tích phân Lebesgue theo mật độ điều kiện:
> $$g(x) = \int_{\mathbb{R}^d} f(x, y) \rho_{Y \mid X}(y \mid x) \, dy.$$

> [!prf]
> Theo Định lý Biểu diễn Doob–Dynkin và Đặc trưng Phương trình Kolmogorov qua Hàm thử Borel, để chứng minh $g(X) = \mathbb{E}[f(X, Y) \mid X]$ hầu chắc chắn, ta cần nghiệm lại phương trình bình quân cục bộ Kolmogorov đối với mọi hàm thử Borel bị chặn $h \in \mathcal{B}(\mathbb{R})$:
> $$\mathbb{E}[f(X, Y)h(X)] = \mathbb{E}[g(X)h(X)].$$
> Quá trình chứng minh được chia thành 3 bước chi tiết:
>
> 1. **Bước 1: Khai triển vế phải theo mật độ lề của $X$**
>    Áp dụng định lý đổi biến theo độ đo đẩy $\mathbb{P}_X(dx) = \rho_X(x)dx$, kỳ vọng của hàm $g(X)h(X)$ được viết dưới dạng tích phân Lebesgue trên $\mathbb{R}$:
>    $$\mathbb{E}[g(X)h(X)] = \int_{\mathbb{R}} g(x)h(x)\rho_X(x) \, dx.$$
>    Phân hoạch miền tích phân $\mathbb{R}$ thành hai tập hợp rời nhau: tập hỗ trợ hữu hạn $S = \{x \in \mathbb{R} : 0 < \rho_X(x) < \infty\}$ và tập kỳ dị $S^c = \{\rho_X(x) = 0\} \cup \{\rho_X(x) = \infty\}$. Khi đó:
>    $$\mathbb{E}[g(X)h(X)] = \int_S g(x)h(x)\rho_X(x) \, dx + \int_{S^c} g(x)h(x)\rho_X(x) \, dx.$$
>
> 2. **Bước 2: Xử lý tập hỗ trợ hữu hạn ($S$)**
>    Trên miền $S = \{0 < \rho_X(x) < \infty\}$, thay định nghĩa hàm $g(x)$ và hàm mật độ điều kiện $\rho_{Y \mid X}(y \mid x) = \frac{\rho_{XY}(x,y)}{\rho_X(x)}$ vào tích phân:
>    $$\int_S g(x)h(x)\rho_X(x) \, dx = \int_S h(x) \left( \int_{\mathbb{R}^d} f(x,y) \frac{\rho_{XY}(x,y)}{\rho_X(x)} \, dy \right) \rho_X(x) \, dx.$$
>    Triệt tiêu nhân tử $\rho_X(x) > 0$ ở tử số và mẫu số, ta thu được tích phân kép trên $S \times \mathbb{R}^d$:
>    $$\int_S g(x)h(x)\rho_X(x) \, dx = \int_S \int_{\mathbb{R}^d} f(x,y)h(x)\rho_{XY}(x,y) \, dy dx.$$
>
> 3. **Bước 3: Triệt tiêu tích phân trên miền số đo không ($S^c$) và hoàn tất phương trình**
>    * Do $\rho_X \in L^1(\mathbb{R})$, tập các điểm $\{\rho_X(x) = \infty\}$ có số đo Lebesgue bằng $0$.
>    * Tại các điểm thuộc tập $\{\rho_X(x) = 0\}$, theo định nghĩa mật độ lề $\rho_X(x) = \int_{\mathbb{R}^d} \rho_{XY}(x,y) \, dy = 0$, ta suy ra hàm không âm $\rho_{XY}(x, y) = 0$ hầu khắp nơi đối với độ đo Lebesgue trên $\mathbb{R}^d$ theo biến $y$.
>    * Do đó, tích phân lớp trong trên thớ $\{\rho_X(x) = 0\}$ bị triệt tiêu hoàn toàn:
>      $$\left| \int_{\mathbb{R}^d} f(x,y)\rho_{XY}(x,y) \, dy \right| \le \sup_{y} |f(x,y)| \int_{\mathbb{R}^d} \rho_{XY}(x,y) \, dy = 0.$$
>    Như vậy, tích phân kép trên toàn bộ vùng kỳ dị $S^c \times \mathbb{R}^d$ có giá trị bằng $0$. Bổ sung miền này vào kết quả từ Bước 2 và áp dụng Định lý Fubini cho không gian tích $\mathbb{R} \times \mathbb{R}^d$, ta có:
>    $$\mathbb{E}[g(X)h(X)] = \iint_{\mathbb{R} \times \mathbb{R}^d} f(x,y)h(x)\rho_{XY}(x,y) \, dy dx = \mathbb{E}[f(X, Y)h(X)].$$
>    Đẳng thức tích phân nghiệm đúng với mọi hàm thử $h \in \mathcal{B}(\mathbb{R})$, khẳng định $g(X) = \mathbb{E}[f(X, Y) \mid X]$ hầu chắc chắn.

> [!rem] (Diễn giải Mật độ Điều kiện từ Góc nhìn Tích phân Từng phần)
> Hàm mật độ xác suất có điều kiện $\rho_{Y \mid X}(y \mid x)$ chính là sự cụ thể hóa trên $\mathbb{R} \times \mathbb{R}^d$ của mệnh đề **Partial Integration (Tích phân từng phần)** trừu tượng.
> 
> **1. Biểu diễn Phân tích Độ đo (Measure Disintegration)**
> 
> * **Trên Không gian Tích Trừu tượng $(\Omega_1 \times \Omega_2, \mathcal{F}_1 \otimes \mathcal{F}_2, \mathbb{P}_1 \otimes \mathbb{P}_2)$:** 
>   Phép lấy kỳ vọng điều kiện theo $\sigma$-đại số $\mathcal{G} = \mathcal{F}_1 \otimes \{\emptyset, \Omega_2\}$ biến biến ngẫu nhiên hai biến $X(\omega_1, \omega_2)$ thành $Z(\omega_1)$ bằng cách **tích phân tiêu biến (integrating out)** tọa độ $\omega_2$ đối với độ đo lề $\mathbb{P}_2$:
>   $$\mathbb{E}[X \mid \mathcal{G}](\omega_1) = \int_{\Omega_2} X(\omega_1, \omega_2') \, d\mathbb{P}_2(\omega_2').$$
> 
> * **Chuyển hóa sang $\mathbb{R} \times \mathbb{R}^d$ qua Tỷ số Mật độ:**
>   Trên không gian trạng thái, phân phối đồng thời $d\mathbb{P}_{XY}(x, y) = \rho_{XY}(x, y) \, dx dy$ được phân tích thành tích của độ đo lề $d\mathbb{P}_X(x) = \rho_X(x) \, dx$ và độ đo điều kiện trên từng thớ $d\mathbb{P}_{Y \mid X=x}(y) = \rho_{Y \mid X}(y \mid x) \, dy$:
>   $$d\mathbb{P}_{XY}(x, y) = \rho_{XY}(x, y) \, dx dy = \left( \frac{\rho_{XY}(x, y)}{\rho_X(x)} \, dy \right) \left( \rho_X(x) \, dx \right) = d\mathbb{P}_{Y \mid X=x}(y) \cdot d\mathbb{P}_X(x).$$
> 
> **2. Diễn giải Phương trình Kolmogorov qua Toán tử Tích phân Từng phần**
> 
> Nhắc lại phương trình bình quân cục bộ Kolmogorov gốc đối với kỳ vọng điều kiện $\xi = \mathbb{E}[f(X,Y) \mid X]$:
> $$\mathbb{E}[\xi \cdot \mathbb{1}_G] = \mathbb{E}[f(X,Y) \cdot \mathbb{1}_G], \quad \forall G \in \sigma(X).$$
> Nhờ Định lý Doob–Dynkin, tồn tại hàm hồi quy $g(x)$ sao cho $\xi = g(X)$. Bằng cách áp dụng `[lem] Đặc trưng Phương trình Kolmogorov qua Hàm thử Borel` để nâng từ hàm chỉ thị $\mathbb{1}_G = \mathbb{1}_B(X)$ sang hàm thử Borel bị chặn $h(X) \in \mathcal{B}(\mathbb{R})$, phương trình gốc trở thành:
> $$\mathbb{E}[g(X)h(X)] = \mathbb{E}[f(X,Y)h(X)].$$
> 
> Ta khai triển vế phải $\mathbb{E}[f(X,Y)h(X)]$ thông qua độ đo tích Lebesgue $d\mathbb{P}_{XY}(x,y) = \rho_{XY}(x,y) \,dxdy$ và áp dụng Định lý Fubini để tìm dạng tường minh của $g(x)$:
> 
> * **Bước 1 (Khai triển tích phân kép trên không gian trạng thái):**
>   $$\mathbb{E}[f(X,Y)h(X)] = \iint_{\mathbb{R} \times \mathbb{R}^d} f(x,y)h(x)\rho_{XY}(x,y) \,dy dx.$$
> 
> * **Bước 2 (Chèn nhân tử chuẩn hóa mật độ lề $\frac{\rho_X(x)}{\rho_X(x)}$ trên tập hỗ trợ $S = \{\rho_X > 0\}$):**
>   Do vùng $S^c = \{\rho_X = 0\}$ có tích phân bằng $0$, ta nhân và chia cho $\rho_X(x) > 0$ bên trong tích phân lớp trong:
>   $$\mathbb{E}[f(X,Y)h(X)] = \int_S h(x) \left( \int_{\mathbb{R}^d} f(x,y) \frac{\rho_{XY}(x,y)}{\rho_X(x)} \,dy \right) \rho_X(x) \,dx.$$
> 
> * **Bước 3 (Nhận diện Đẩy độ đo lề và Tích phân Từng phần Thớ):**
>   Đặt toán tử tích phân lớp trong là $g(x) \equiv \int_{\mathbb{R}^d} f(x,y) \frac{\rho_{XY}(x,y)}{\rho_X(x)} \,dy = \int_{\mathbb{R}^d} f(x,y) \,d\mathbb{P}_{Y \mid X=x}(y)$. Thay $g(x)$ và $d\mathbb{P}_X(x) = \rho_X(x)dx$ vào biểu thức trên:
>   $$\mathbb{E}[f(X,Y)h(X)] = \int_S g(x)h(x)\rho_X(x) \,dx = \int_{\mathbb{R}} g(x)h(x) \,d\mathbb{P}_X(x) = \mathbb{E}[g(X)h(X)].$$
> 
> Biến đổi trên chứng minh rằng việc định nghĩa $g(x) = \int_{\mathbb{R}^d} f(x,y) \rho_{Y \mid X}(y \mid x) \,dy$ chính là thao tác **tích phân tiêu biến biến $y$ trên từng thớ $\{X = x\}$**, làm cho $g(X)$ nghiệm đúng phương trình Kolmogorov gốc $\mathbb{E}[g(X)h(X)] = \mathbb{E}[f(X,Y)h(X)]$.
> 
> **3. Giới hạn của Công thức Sơ cấp và Sự Xử lý Dạng Vô định $0/0$**
> 
> * **Giới hạn của công thức xác suất sơ cấp:** Khi $X$ là biến ngẫu nhiên liên tục, mọi thớ tạo ảnh $A_x = \{X = x\} = X^{-1}(\{x\})$ đều có số đo xác suất triệt tiêu:
>   $$\mathbb{P}(X = x) = \int_{\{x\}} \rho_X(t) \, dt = 0, \quad \forall x \in \mathbb{R}.$$
>   Do đó, biểu thức sơ cấp $\mathbb{E}[Y \mid X = x] = \frac{\mathbb{E}[Y \mathbb{1}_{\{X=x\}}]}{\mathbb{P}(X=x)}$ xuất hiện dạng vô định $0/0$ và không xác định được giá trị pointwise.
> 
> * **Chuyển hóa từ Xác suất Sự kiện sang Tỷ số Mật độ Pointwise:** Lý thuyết độ đo thay thế phép chia xác suất sự kiện bằng tỷ số mật độ $\frac{\rho_{XY}(x,y)}{\rho_X(x)}$. Việc nhân với hàm chỉ thị $\mathbb{1}_{\{0 < \rho_X(x) < \infty\}}$ trong định nghĩa mật độ điều kiện xử lý hoàn toàn trường hợp chia cho $0$, đảm bảo hàm hồi quy $g(x) = \int_{\mathbb{R}^d} f(x,y) \rho_{Y \mid X}(y \mid x) \, dy$ bị chặn và xác định trên toàn bộ $\mathbb{R}$.
> 
> * **Sự Tiêu biến của Tập Kỳ dị theo Độ đo Lề $\mathbb{P}_X$:** Miền kỳ dị $S^c = \{x \in \mathbb{R} : \rho_X(x) = 0\}$ (nơi xuất hiện mẫu số bằng $0$) có số đo xác suất bằng $0$ đối với độ đo lề $\mathbb{P}_X$:
>   $$\mathbb{P}(X \in S^c) = \mathbb{P}_X(\{\rho_X = 0\}) = \int_{\{\rho_X = 0\}} \rho_X(x) \, dx = 0.$$
>   Theo tính chất của tích phân Lebesgue, tích phân của một hàm bị chặn trên tập có số đo $0$ luôn bằng $0$. Do đó, miền $S^c$ không đóng góp khối lượng vào tích phân kép Kolmogorov $\int_{S^c} g(x)h(x)\rho_X(x)dx = 0$, đảm bảo tính duy nhất hầu chắc chắn ($\mathbb{P}$-a.s.) của kỳ vọng điều kiện.

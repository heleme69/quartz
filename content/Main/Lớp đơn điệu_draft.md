# Cấu trúc Không gian Hàm: Hệ Dynkin, Kéo về (Pullback) và Biểu diễn Doob–Dynkin

> [!def] (Hệ $\pi$-$\lambda$ và Định nghĩa Lớp Đơn điệu - Monotone Class / $\lambda$-System)
> Cho $\Omega$ là một tập hợp khác rỗng:
> 1. Một họ các tập hợp $\mathcal{P} \subseteq \mathcal{P}(\Omega)$ được gọi là một **$\pi$-hệ ($\pi$-system)** nếu nó đóng đối với phép giao hữu hạn:
>    $$A, B \in \mathcal{P} \implies A \cap B \in \mathcal{P}.$$
> 2. Một họ các tập hợp $\mathcal{L} \subseteq \mathcal{P}(\Omega)$ được gọi là một **$\lambda$-hệ Dynkin ($\lambda$-system)** (hoặc lớp đơn điệu) nếu nó thỏa mãn ba tiên đề sau:
>    * Chứa không gian toàn phần: $\Omega \in \mathcal{L}$.
>    * Đóng đối với phép phần bù (hoặc hiệu chuẩn): Nếu $A, B \in \mathcal{L}$ và $B \subseteq A$, thì $A \setminus B \in \mathcal{L}$.
>    * Đóng đối với giới hạn tăng đếm được: Nếu dãy $\{A_n\}_{n \ge 1} \subseteq \mathcal{L}$ thỏa mãn $A_n \subseteq A_{n+1}$ với mọi $n \ge 1$, thì $\bigcup_{n=1}^\infty A_n \in \mathcal{L}$.

> [!thm] (Định lý $\pi$-$\lambda$ của Dynkin - Dynkin's $\pi$-$\lambda$ Theorem)
> Cho $\mathcal{P}$ là một $\pi$-hệ và $\mathcal{L}$ là một $\lambda$-hệ trên $\Omega$. Nếu $\mathcal{P} \subseteq \mathcal{L}$, thì $\sigma$-đại số sinh bởi $\mathcal{P}$ hoàn toàn bị bao hàm trong $\mathcal{L}$:
> $$\sigma(\mathcal{P}) \subseteq \mathcal{L}.$$

> [!obs] (Chiến thuật Chứng minh: "Tập hợp tốt" và Kỹ thuật 4 Bước Chuẩn - 4D)
> Trong giải tích độ đo, ta thường xuyên đối mặt với việc chứng minh một tính chất đúng trên toàn bộ $\sigma$-đại số hoặc cho mọi hàm đo được. Ta áp dụng hai chiến thuật nền tảng sau:
> 
> **1. Nguyên lý "Tập hợp tốt" (Good Sets Principle) cho Tập hợp:**
> * Mục tiêu: Chứng minh tính chất $P$ đúng cho mọi tập $A \in \sigma(\mathcal{P})$.
> * Bước 1: Đặt $\mathcal{L} = \{A \in \sigma(\mathcal{P}) : A \text{ thỏa mãn tính chất } P\}$ là họ các "tập hợp tốt".
> * Bước 2: Kiểm tra tính chất $P$ đúng trên tập sinh cơ sở $\mathcal{P}$ (chứng minh $\mathcal{P} \subseteq \mathcal{L}$).
> * Bước 3: Chứng minh $\mathcal{L}$ là một $\lambda$-hệ (Lớp đơn điệu). Áp dụng Định lý Dynkin để kết luận $\mathcal{L} = \sigma(\mathcal{P})$.
> 
> **2. Kỹ thuật 4 Bước Chuẩn (4-Step Standard Machine / 4D) cho Hàm số:**
> * Mục tiêu: Chứng minh tính chất $Q$ đúng cho mọi hàm $Y$ đo được.
> * Bước 1: Chứng minh đúng cho hàm chỉ thị (Indicator function): $Y = \mathbb{1}_A$.
> * Bước 2: Chứng minh đúng cho hàm đơn giản (Simple function): $Y = \sum c_i \mathbb{1}_{A_i}$ (nhờ tính tuyến tính).
> * Bước 3: Chứng minh đúng cho hàm đo được không âm ($Y \ge 0$) bằng cách lấy giới hạn dãy hàm đơn giản $0 \le Y_n \uparrow Y$.
> * Bước 4 (nếu cần): Mở rộng cho hàm tổng quát bằng cách tách $Y = Y^+ - Y^-$.

> [!lem] (Đặc trưng hóa $\sigma$-đại số sinh dưới góc nhìn Kéo về - Pullback $\sigma$-algebra)
> Cho vectơ ngẫu nhiên $\mathbf{X} = (X_1, \dots, X_d): \Omega \to \mathbb{R}^d$. Khi đó, $\sigma$-đại số sinh bởi $(X_1, \dots, X_d)$ chính là $\sigma$-đại số kéo về của $\mathcal{B}(\mathbb{R}^d)$ qua ánh xạ $\mathbf{X}$, xác định bởi toán tử tạo ảnh (pullback operator) $\mathbf{X}^*$:
> $$\sigma(X_1, \dots, X_d) = \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d)) \equiv \left\{ \mathbf{X}^{-1}(B) : B \in \mathcal{B}(\mathbb{R}^d) \right\}.$$
> Cấu trúc này khẳng định rằng một tập hợp thuộc $\sigma(\mathbf{X})$ khi và chỉ khi nó là tạo ảnh của một tập Borel dưới ánh xạ $\mathbf{X}$.

> [!prf]
> Ta sử dụng Chiến thuật "Tập hợp tốt" (Hệ $\pi$-$\lambda$) để chứng minh sự tương đương của hai họ tập hợp:
> 
> **1. Chứng minh bao hàm $\mathbf{X}^*(\mathcal{B}(\mathbb{R}^d)) \subseteq \sigma(X_1, \dots, X_d)$:**
> Do các biến ngẫu nhiên thành phần $X_1, \dots, X_d$ đều đo được đối với đại số $\sigma(\mathbf{X})$, vectơ ngẫu nhiên $\mathbf{X}$ là một ánh xạ đo được từ $(\Omega, \sigma(\mathbf{X}))$ vào $(\mathbb{R}^d, \mathcal{B}(\mathbb{R}^d))$.
> Theo định nghĩa của tính đo được, tạo ảnh của mọi tập Borel bắt buộc phải thuộc $\sigma$-đại số nguồn:
> $$\mathbf{X}^{-1}(B) \in \sigma(\mathbf{X}), \quad \forall B \in \mathcal{B}(\mathbb{R}^d).$$
> Suy ra $\mathbf{X}^*(\mathcal{B}(\mathbb{R}^d)) \subseteq \sigma(\mathbf{X})$.
> 
> **2. Chứng minh bao hàm $\sigma(X_1, \dots, X_d) \subseteq \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d))$ bằng Định lý $\pi$-$\lambda$:**
> * **Xác định $\pi$-hệ sinh:** Xét họ $\mathcal{P}$ gồm tất cả các khối hộp chữ nhật (tập hình trụ) trong $\mathbb{R}^d$:
>   $$\mathcal{P} = \left\{ I_1 \times I_2 \times \dots \times I_d : I_j \in \mathcal{B}(\mathbb{R}) \right\}.$$
>   Họ $\mathcal{P}$ đóng với phép giao hữu hạn (là một $\pi$-hệ) và sinh ra $\mathcal{B}(\mathbb{R}^d)$, tức là $\sigma(\mathcal{P}) = \mathcal{B}(\mathbb{R}^d)$.
> * **Xác định "Tập hợp tốt" ($\lambda$-hệ):** Xét họ các tập Borel có tạo ảnh thuộc $\sigma(\mathbf{X})$:
>   $$\mathcal{L} = \left\{ B \in \mathcal{B}(\mathbb{R}^d) : \mathbf{X}^{-1}(B) \in \sigma(\mathbf{X}) \right\}.$$
> * **Kiểm tra Điều kiện (Áp dụng Định lý Dynkin):**
>   1. Kiểm tra trên $\mathcal{P}$: Với mọi khối hộp $C = I_1 \times \dots \times I_d \in \mathcal{P}$, tạo ảnh của nó là giao hữu hạn: $\mathbf{X}^{-1}(C) = \bigcap_{j=1}^d X_j^{-1}(I_j)$. Vì $X_j$ đo được nên $X_j^{-1}(I_j) \in \sigma(\mathbf{X})$, kéo theo $\mathbf{X}^{-1}(C) \in \sigma(\mathbf{X})$. Vậy $\mathcal{P} \subseteq \mathcal{L}$.
>   2. Kiểm tra $\mathcal{L}$ là $\lambda$-hệ: $\mathcal{L}$ hiển nhiên chứa $\mathbb{R}^d$, đóng với phép lấy phần bù (do $\mathbf{X}^{-1}(B^c) = (\mathbf{X}^{-1}(B))^c$) và đóng với hợp đếm được (do tạo ảnh bảo toàn phép hợp). Do đó $\mathcal{L}$ là một $\lambda$-hệ (đồng thời là một $\sigma$-đại số).
> * **Kết luận:** Áp dụng Định lý $\pi$-$\lambda$ của Dynkin, ta có $\mathcal{B}(\mathbb{R}^d) = \sigma(\mathcal{P}) \subseteq \mathcal{L}$. Điều này có nghĩa là với mọi $B \in \mathcal{B}(\mathbb{R}^d)$, ta đều có $\mathbf{X}^{-1}(B) \in \sigma(\mathbf{X})$, hoàn tất chứng minh hai chiều.

> [!thm] (Định lý Biểu diễn Doob–Dynkin - Doob–Dynkin Representation Theorem)
> Cho $(\Omega, \mathcal{F})$ là một không gian đo được, $X_1, \dots, X_d$ là các hàm đo được $\mathcal{F}/\mathcal{B}(\mathbb{R})$ và $Y: \Omega \to \mathbb{R}$ là một hàm đo được $\sigma(X_1, \dots, X_d)/\mathcal{B}(\mathbb{R})$.
> 
> Khi đó, tồn tại một hàm đo được Borel $f: \mathbb{R}^d \to \mathbb{R}$ sao cho:
> $$Y = f(X_1, \dots, X_d) = f(\mathbf{X}).$$

![[doob-dykin-representation.webp]]

> [!prf]
> Ta áp dụng Kỹ thuật 4 Bước Chuẩn (4D Standard Machine) để nâng cấp từ hàm chỉ thị lên hàm đo được tổng quát, sử dụng sức mạnh của Bổ đề Kéo về (Pullback Lemma) vừa chứng minh ở trên:
> 
> **Bước 1: Hàm chỉ thị (Indicator Function)**
> Giả sử $Y = \mathbb{1}_A$ với biến cố $A \in \sigma(\mathbf{X})$.
> Nhờ Bổ đề Pullback ($\sigma(\mathbf{X}) = \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d))$), ta biết chắc chắn tồn tại một tập Borel $B \in \mathcal{B}(\mathbb{R}^d)$ sao cho $A = \mathbf{X}^{-1}(B)$.
> Khi đó, tính chất kéo về của hàm chỉ thị cho ta:
> $$Y(\omega) = \mathbb{1}_A(\omega) = \mathbb{1}_{\mathbf{X}^{-1}(B)}(\omega) = \mathbb{1}_B(\mathbf{X}(\omega)).$$
> Chọn hàm Borel cơ sở $f = \mathbb{1}_B$, ta thu được biểu diễn $Y = f(\mathbf{X})$.
> 
> **Bước 2: Hàm đơn giản (Simple Function)**
> Giả sử $Y$ là tổ hợp tuyến tính hữu hạn của các hàm chỉ thị:
> $$Y = \sum_{j=1}^n \alpha_j \mathbb{1}_{A_j}, \quad \text{với } \alpha_j \in \mathbb{R} \text{ và } A_j \in \sigma(\mathbf{X}).$$
> Theo Bước 1, với mỗi $A_j \in \sigma(\mathbf{X})$, tồn tại tập Borel $B_j \in \mathcal{B}(\mathbb{R}^d)$ sao cho $A_j = \mathbf{X}^{-1}(B_j)$. Thay vào biểu thức của $Y$:
> $$Y = \sum_{j=1}^n \alpha_j \mathbb{1}_{\mathbf{X}^{-1}(B_j)} = \sum_{j=1}^n \alpha_j (\mathbb{1}_{B_j} \circ \mathbf{X}) = \left( \sum_{j=1}^n \alpha_j \mathbb{1}_{B_j} \right) \circ \mathbf{X}.$$
> Bằng cách định nghĩa hàm Borel $f = \sum_{j=1}^n \alpha_j \mathbb{1}_{B_j}$, ta có ngay $Y = f(\mathbf{X})$.
> 
> **Bước 3 & 4: Hàm đo được tổng quát (General Measurable Function)**
> Cho $Y$ là một hàm đo được tùy ý đối với $\sigma(\mathbf{X})$. Theo định lý xấp xỉ hàm đo được, luôn tồn tại một dãy hàm đơn giản $(Y_n)_{n \ge 1}$ (đo được đối với $\sigma(\mathbf{X})$) hội tụ từng điểm về $Y$ trên toàn bộ $\Omega$.
> Theo Bước 2, với mỗi hàm đơn giản $Y_n$, tồn tại hàm đo được Borel $f_n: \mathbb{R}^d \to \mathbb{R}$ tương ứng sao cho $Y_n = f_n(\mathbf{X})$.
> 
> Định nghĩa hàm giới hạn Borel $f: \mathbb{R}^d \to \mathbb{R}$ thông qua phép lấy giới hạn trên:
> $$f(\mathbf{x}) \equiv \limsup_{n \to \infty} f_n(\mathbf{x}), \quad \forall \mathbf{x} \in \mathbb{R}^d.$$
> Do phép toán $\limsup$ bảo toàn tính đo được Borel, $f$ là một hàm Borel hợp lệ trên $\mathbb{R}^d$. Khi đó, tại mọi điểm mẫu $\omega \in \Omega$, ta có:
> $$Y(\omega) = \lim_{n \to \infty} Y_n(\omega) = \limsup_{n \to \infty} Y_n(\omega) = \limsup_{n \to \infty} f_n(\mathbf{X}(\omega)) = f(\mathbf{X}(\omega)).$$
> Điều này khẳng định $Y = f(\mathbf{X})$, hoàn tất toàn bộ chứng minh.

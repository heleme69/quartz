# I. Độ Đo Tích

## 1. Xây dựng đại số sinh và $\sigma$-đại số tích

> [!def] 
> Cho hai không gian độ đo $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$. Mục tiêu là xây dựng độ đo tích trên không gian $X \times Y$.
> 
> Đặt $\mathcal{R}$ là họ tất cả các hợp hữu hạn của các hình chữ nhật đo được rời nhau:
> $$\mathcal{R} = \left\{ \bigcup_{i=1}^{m} A_i \times B_i : A_i \in \mathcal{F}, B_i \in \mathcal{G}, \text{ đôi một rời nhau} \right\}$$

> [!thm] (Mệnh đề 1)
> $\mathcal{R}$ là một đại số trên $X \times Y$.

> [!prf] 
> Ta chứng minh 3 tính chất bắt buộc của một đại số:
> - **Chứa không gian toàn phần:** Rõ ràng $X \in \mathcal{F}$ và $Y \in \mathcal{G}$, nên hình chữ nhật $X \times Y \in \mathcal{R}$.
> - **Đóng với phép lấy phần bù:** Theo luật De Morgan, $(A \times B)^c = (A^c \times Y) \cup (A \times B^c)$. Hai tập này đo được và rời nhau nên thuộc $\mathcal{R}$. Việc mở rộng ra phần bù của một hợp hữu hạn cũng thỏa mãn nhờ tính phân phối của tập hợp.
> - **Đóng với phép hợp hữu hạn:** Với $E_1, E_2 \in \mathcal{R}$, ta có thể viết lại thành các phần rời nhau: $E_1 \cup E_2 = E_1 \cup (E_2 \cap E_1^c)$. Vì $E_1^c \in \mathcal{R}$ và giao của hai phần tử trong đại số vẫn thuộc đại số (phân rã được thành các hình chữ nhật rời nhau), nên hợp của chúng chắc chắn thuộc $\mathcal{R}$.

> [!def] Định nghĩa: $\sigma$-đại số tích
> Không gian tích $(X \times Y, \mathcal{F} \otimes \mathcal{G} := \sigma(\mathcal{R}))$.
> Trong đó $\sigma(\mathcal{R})$ là $\sigma$-đại số nhỏ nhất chứa $\mathcal{R}$.

**Mục tiêu tiếp theo:** Định nghĩa độ đo tích $\mu \times \nu: \mathcal{F} \otimes \mathcal{G} \to [0, \infty]\,?$

## 2. Tập mặt cắt (Tiền đề Fubini)

> [!def] (Không gian độ đo $\sigma$-hữu hạn ($\sigma$-finite))
> Một không gian độ đo $(X, \mathcal{A}, \mu)$ được gọi là $\sigma$-hữu hạn nếu toàn bộ không gian $X$ có thể được biểu diễn dưới dạng hợp của một họ đếm được các tập con đo được có độ đo hữu hạn. 
> 
> Cụ thể, tồn tại một dãy các tập hợp $\{X_n\}_{n=1}^\infty \subset \mathcal{A}$ sao cho:
> $$X = \bigcup_{n=1}^\infty X_n \quad \text{và} \quad \mu(X_n) < \infty \quad \forall n \in \mathbb{N}^*$$
> 
> Mệnh đề tương đương (Dạng dãy tăng):
> Từ định nghĩa trên, ta luôn có thể xây dựng được một dãy tập hợp tăng dần để phủ toàn bộ không gian. Nghĩa là tồn tại dãy $E_1 \subset E_2 \subset \dots$ sao cho:
> $$E_n \uparrow X \quad \text{và} \quad \mu(E_n) < \infty \quad \forall n \in \mathbb{N}^*$$
> *(Hệ quả này chính là cơ sở để thiết lập các không gian thu hẹp $X_k \uparrow X$ và $Y_k \uparrow Y$ trong chứng minh Mệnh đề Fubini).*
> 
> Ví dụ kinh điển:
> Tập số thực $\mathbb{R}$ với độ đo Lebesgue $\mu_L$ có độ đo toàn phần là vô hạn ($\mu_L(\mathbb{R}) = \infty$). Tuy nhiên, nó là không gian $\sigma$-hữu hạn vì ta có thể phủ nó bằng các đoạn thẳng hữu hạn tăng dần:
> $$\mathbb{R} = \bigcup_{n=1}^\infty [-n, n] \quad \text{với} \quad \mu_L([-n, n]) = 2n < \infty$$

> [!thm] (Mệnh đề 2)
> Cho $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$ là các không gian $\sigma$-hữu hạn ($\sigma$-finite). Cho $E \in \mathcal{F} \otimes \mathcal{G}$. Khi đó:
> 
> 1) Với mọi $(x, y) \in X \times Y$:
> $E_x = \{ y \in Y : (x, y) \in E \} \in \mathcal{G}$
> $E^y = \{ x \in X : (x, y) \in E \} \in \mathcal{F}$
> 
> 2) Các hàm đi từ không gian vào $\overline{\mathbb{R}}$:
> Hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được.
> Hàm $y \mapsto \mu(E^y)$ là $\nu$-đo được.
> Và ta có đẳng thức tích phân:
> $$\int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu \tag{1}$$

Việc chứng minh trực tiếp Mệnh đề 2 cho một tập bất kỳ thuộc $\sigma$-đại số tích rất khó. Thay vào đó, ta sử dụng nguyên lý xây dựng "tập hợp tốt" kết hợp với Định lý Halmos.

> [!def] (Định nghĩa: Lớp đơn điệu)
> Một họ $\mathcal{M}$ được gọi là lớp đơn điệu nếu:
> i/ $E_n \in \mathcal{M}, E_n \uparrow E \implies E \in \mathcal{M}$.
> ii/ $F_n \in \mathcal{M}, F_n \downarrow F \implies F \in \mathcal{M}$.

> [!thm] (Định lý Halmos)
> Nếu $\mathcal{M}$ thỏa mãn tính chất lớp đơn điệu và $\mathcal{R}$ là đại số sao cho $\mathcal{R} \subset \mathcal{M}$, thì $\sigma(\mathcal{R}) \subset \mathcal{M}$.

Dựa vào công cụ trên, ta có sơ đồ chiến lược chứng minh cho Mệnh đề 2 như sau:

> [!obs] (Sơ đồ chứng minh)
> Để chứng minh các tính chất 1) và 2) thỏa mãn với mọi tập đo được $E \in \sigma(\mathcal{R})$, ta thực hiện theo sơ đồ sau:
> 
> - **B1:** Khởi tạo với $E \in \mathcal{R}$. Tính toán trực tiếp để chỉ ra $E$ thỏa mãn tính chất 1) và 2).
> - **B2:** Mở rộng lên không gian $E \in \sigma(\mathcal{R})$ bằng cách lập các "tập hợp tốt":
> - **B2.1:** Đặt $\mathcal{E} = \{E \in \sigma(\mathcal{R}) : \text{thỏa t/c 1)}\}$. Đi chứng minh $\mathcal{E}$ là một $\sigma$-đại số. Kết hợp với $\mathcal{R} \subset \mathcal{E}$, ta suy ra $\mathcal{E} = \sigma(\mathcal{R})$.
> - **B2.2:** Đặt $\mathcal{M} = \{E \in \sigma(\mathcal{R}) : \text{thỏa t/c 2)}\}$. Đi chứng minh $\mathcal{M}$ là một lớp đơn điệu. Kết hợp với Định lý Halmos, ta suy ra $\mathcal{M} = \sigma(\mathcal{R})$.

**Giải thích:**
Thay vì đi kiểm tra từng tập hợp $E$ phức tạp, ta gom tất cả các tập thỏa mãn tính chất cần chứng minh vào một lớp $\mathcal{E}$ (hoặc $\mathcal{M}$). Bằng cách dùng Bước 1 để chứng minh lõi $\mathcal{R}$ nằm trong các lớp này, việc còn lại chỉ là chứng minh cấu trúc của $\mathcal{E}$ là một $\sigma$-đại số (hoặc $\mathcal{M}$ là lớp đơn điệu). Vì $\sigma(\mathcal{R})$ là cấu trúc nhỏ nhất chứa $\mathcal{R}$, sự bao hàm $\sigma(\mathcal{R}) \subset \mathcal{E}$ và $\sigma(\mathcal{R}) \subset \mathcal{M}$ sẽ tự động có.

> [!prf]
> **B1: Xét $E \in \mathcal{R}$**
> Đặt $E = \bigcup_{i=1}^n A_i \times B_i$.
> Tập mặt cắt: $E_x = \bigcup_{i=1}^n (A_i \times B_i)_x$ và $E^y = \bigcup_{i=1}^n (A_i \times B_i)^y$.
> Trong đó $(A_i \times B_i)_x = B_i$ (nếu $x \in A_i$) hoặc $\emptyset$ (nếu $x \notin A_i$). 
> $\implies E_x \in \mathcal{G}, E^y \in \mathcal{F}$. (Thỏa mãn 1).
> Tính độ đo tập mặt cắt: $\nu(E_x) = \nu\left(\bigcup_{i=1}^n (A_i \times B_i)_x\right) = \sum_{i=1}^n \nu((A_i \times B_i)_x) = \sum_{i=1}^n \chi_{A_i}(x)\nu(B_i)$.
> Hàm đặc trưng đo được nên tổ hợp tuyến tính $x \mapsto \nu(E_x)$ là $\mu$-đo được. Tương tự vậy ta cũng có $\mu(E^y)$ đo được.
> Lấy tích phân: $\int_X \nu(E_x) \, d\mu = \sum_{i=1}^n \int_X \chi_{A_i}(x)\nu(B_i) \, d\mu = \sum_{i=1}^n \mu(A_i)\nu(B_i)$.
> Tương tự $\int_Y \mu(E^y) \, d\nu = \sum_{i=1}^n \mu(A_i)\nu(B_i)$ nên ta suy ra được $\int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu$. Mệnh đề đúng với mọi $E \in \mathcal{R}$.
> 
> **B2: Xét $E \in \sigma(\mathcal{R})$**
> B2.1: Chứng minh Tính chất 1
> Đặt $\mathcal{E} = \{E \in \sigma(\mathcal{R}) : \text{thỏa 1)}\}$. Ta chứng minh $\mathcal{E}$ là $\sigma$-đại số trên $X \times Y$:
> - $X \times Y \in \mathcal{E}$ (hiển nhiên).
> - Phần bù: Lấy $E \in \mathcal{E} \implies E_x \in \mathcal{G}, E^y \in \mathcal{F}$. Xét $E^c$, ta có $(E^c)_x = (E_x)^c \in \mathcal{G}$ và $(E^c)^y = (E^y)^c \in \mathcal{F}$ (do $\mathcal{G}, \mathcal{F}$ là $\sigma$-đại số). $\implies E^c \in \mathcal{E}$.
> - Hợp đếm được: $( \bigcup_{n=1}^\infty E_n )_x = \bigcup_{n=1}^\infty (E_n)_x \implies \bigcup_{n=1}^\infty E_n \in \mathcal{E}$.
> Từ B1 ta có $\mathcal{R} \subset \mathcal{E}$. Vì $\mathcal{E}$ là $\sigma$-đại số chứa $\mathcal{R} \implies \sigma(\mathcal{R}) \subset \mathcal{E}$.
> 
> B2.2: Chứng minh Tính chất 2 (Dùng Định lý Halmos)
> Đặt $\mathcal{M} = \{E \in \sigma(\mathcal{R}) : \text{thỏa 2)}\}$. Ta đi chứng minh $\mathcal{M}$ là lớp đơn điệu.
> 
> Trường hợp A: $\mu, \nu$ hữu hạn (finite)
> - **i/ $E_n \uparrow E$ ($E_{n}$ trong $\mathcal{M}$): c/m $E \in \mathcal{M}$**
> Nhận xét: $(E_n)_x \uparrow E_x \implies \nu((E_n)_x) \uparrow \nu(E_x)$.
> Vì $E_n \in \mathcal{M}$, hàm $x \mapsto \nu((E_n)_x)$ đo được. Đặt dãy hàm $f_n(x) = \nu((E_n)_x)$, ta có $f_n \uparrow f$ hầu khắp nơi. Giới hạn của dãy hàm đo được là hàm đo được, ta suy ra $x \mapsto \nu(E_x)$ $\mu$-đo được.
> Áp dụng Định lý Hội tụ Đơn điệu (MCT): $\int_X \nu(E_x) \, d\mu = \lim \int_X \nu((E_n)_x) \, d\mu$.
> Tương tự cho biến $Y$: $\int_Y \mu(E^y) \, d\nu = \lim_{n \to \infty} \int_Y \mu((E_n)^y) \, d\nu$. 
> Vì $E_n \in \mathcal{M}$ với mọi $n$, nên theo định nghĩa của $\mathcal{M}$, $E_n$ đã thỏa mãn đẳng thức tích phân: 
> $$
> \int_X \nu((E_n)_x) \, d\mu = \int_Y \mu((E_n)^y) \, d\nu
> $$
> Dẫn tới giới hạn của chúng phải bằng nhau: 
> $$
> \int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu
> $$
> Vậy ta có $E$ thỏa $(1)$ nên $E \in \mathcal{M}$.
> 
> - **ii/ $E_n \downarrow E$ ($E_{n}$ trong $\mathcal{M}$): c/m $E \in \mathcal{M}$**
> Tương tự có $\nu((E_n)_x) \downarrow \nu(E_x)$.
> Vì $\mu, \nu$ bị chặn (finite), ta có chặn trên: $\nu((E_n)_x) \le \nu(Y) < \infty$.
> Đủ điều kiện áp dụng Định lý Hội tụ Bị chặn (BCT): $\int_X \nu(E_x) \, d\mu = \lim \int_X \nu((E_n)_x) \, d\mu$.
> Tương tự cho $Y$: $\int_Y \mu(E^y) \, d\nu = \lim_{n \to \infty} \int_Y \mu((E_n)^y) \, d\nu$.
> Lập luận tương tự bên trên, ta suy ra $E \in \mathcal{M}$. Vậy $\mathcal{M}$ là lớp đơn điệu.
> 
> Trường hợp B: Không gian $\sigma$-hữu hạn ($\mu, \nu$ là các độ đo $\sigma$-finite)
> 
> Vì các không gian độ đo là $\sigma$-hữu hạn, theo định nghĩa, tồn tại hai dãy tập hợp tăng dần trong các $\sigma$-đại số tương ứng:
> $$X_k \uparrow X \quad \text{và} \quad Y_k \uparrow Y$$
> Sao cho với mọi $k \in \mathbb{N}^*$, ta luôn có độ đo thành phần là hữu hạn: $\mu(X_k) < \infty$ và $\nu(Y_k) < \infty$.
> 
> Ta thực hiện chứng minh qua 3 bước tường minh sau:
> 
> - i/ Thiết lập các độ đo thu hẹp và áp dụng kết quả Trường hợp A
>   Với mỗi $k \in \mathbb{N}^*$, ta định nghĩa các độ đo thu hẹp (độ đo hữu hạn) $\mu_k$ trên $\mathcal{F}$ và $\nu_k$ trên $\mathcal{G}$ bằng công thức:
>   $$\mu_k(A) = \mu(X_k \cap A), \quad \forall A \in \mathcal{F}$$
>   $$\nu_k(B) = \nu(Y_k \cap B), \quad \forall B \in \mathcal{G}$$
>   Vì các độ đo $\mu_k, \nu_k$ là các độ đo hữu hạn ($\mu_k(X) = \mu(X_k) < \infty$ và $\nu_k(Y) = \nu(Y_k) < \infty$), ta hoàn toàn đủ điều kiện áp dụng kết quả đã chứng minh ở Trường hợp A cho cặp độ đo này. 
>   Do đó, với tập $E \in \mathcal{M}$, đẳng thức tích phân trên các "khối nhỏ" luôn được bảo đảm:
>   $$\int_X \nu_k(E_x) \, d\mu_k = \int_Y \mu_k(E^y) \, d\nu_k \tag{*}$$
> 
> - ii/ Sử dụng bổ đề phụ để bảo toàn tính đo được
>   Để tính tích phân khi cho $k \to \infty$, ta viết lại hai vế của đẳng thức $(*)$ về theo các độ đo gốc $\mu$ và $\nu$:
>   $$\int_X \nu(Y_k \cap E_x) \cdot \chi_{X_k}(x) \, d\mu = \int_Y \mu(X_k \cap E^y) \cdot \chi_{Y_k}(y) \, d\nu$$
>   Xét dãy hàm số $f_k(x) = \nu(Y_k \cap E_x) \cdot \chi_{X_k}(x)$. Theo kết quả của Trường hợp A và bổ đề về tính đo được của hàm thu hẹp ($f$ đo được $\iff f|_{X_k}$ đo được), hàm số $f_k(x)$ này là $\mu$-đo được trên $X$ với mọi $k$.
> 
> - iii/ Lấy giới hạn qua Định lý Hội tụ Đơn điệu (MCT)
>   Khi cho $k \to \infty$:
>   - Vì $Y_k \uparrow Y$, theo tính chất liên tục dưới của độ đo, ta có: $\nu(Y_k \cap E_x) \uparrow \nu(Y \cap E_x) = \nu(E_x)$.
>   - Vì $X_k \uparrow X$, hàm đặc trưng hội tụ tăng: $\chi_{X_k}(x) \uparrow \chi_X(x) = 1$.
>   
>   Do đó, dãy hàm số đo được và không âm $f_k(x)$ hội tụ tăng đơn điệu về hàm giới hạn:
>   $$f_k(x) \uparrow \nu(E_x), \quad \forall x \in X$$
>   Vì giới hạn tăng của một dãy hàm đo được là một hàm đo được, ta suy ra hàm lát cắt $x \mapsto \nu(E_x)$ là $\mu$-đo được.
>   
>   Áp dụng Định lý Hội tụ Đơn điệu (MCT) cho vế trái:
>   $$\lim_{k \to \infty} \int_X \nu_k(E_x) \, d\mu_k = \lim_{k \to \infty} \int_X f_k(x) \, d\mu = \int_X \nu(E_x) \, d\mu$$
>   Lập luận hoàn toàn tương tự cho vế phải với dãy hàm $g_k(y) = \mu(X_k \cap E^y) \cdot \chi_{Y_k}(y)$, ta có $g_k(y) \uparrow \mu(E^y)$ và áp dụng MCT cho vế phải:
>   $$\lim_{k \to \infty} \int_Y \mu_k(E^y) \, d\nu_k = \int_Y \mu(E^y) \, d\nu$$
>   
>   Vì đẳng thức $(*)$ đúng với mọi $k$, nên khi lấy giới hạn hai vế khi $k \to \infty$, ta thu được đẳng thức toàn cục trên không gian lớn:
>   $$\int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu$$
> 
>   Vậy tập $E$ thỏa $(1)$, dẫn đến $E \in \mathcal{M}$. Vậy $\mathcal{M}$ đóng đối với các giới hạn đơn điệu trên không gian $\sigma$-hữu hạn, nên là lớp đơn điệu.
>
> Mệnh đề được chứng minh hoàn tất.

## 3. Độ đo tích

> [!thm] (Định lý - Định nghĩa Độ đo tích)
> Ánh xạ $\mu \times \nu: \mathcal{F} \otimes \mathcal{G} \to [0, \infty]$ định nghĩa bởi:
> $$(\mu \times \nu)(E) = \int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu$$
> (Định nghĩa tốt nhờ Mệnh đề tiền Fubini). Ánh xạ này là 1 độ đo và $\sigma$-hữu hạn.
> 
> **Tính duy nhất:**
> Nếu có độ đo $\lambda$ trên $(X \times Y, \mathcal{F} \otimes \mathcal{G})$ thỏa:
> $\lambda(A \times B) = \mu(A)\cdot\nu(B) \quad \forall A \in \mathcal{F}, B \in \mathcal{G} \quad (\approx \mathcal{R})$
> Thì ta có:
> $\lambda \equiv \mu \times \nu$ trên toàn bộ $\sigma(\mathcal{R})$.

> [!prf] Chứng minh
> 
> **0. Tính định nghĩa tốt:**
> - Ta cần khẳng định biểu thức xác định ánh xạ $(\mu \times \nu)(E)$ là duy nhất với mọi tập $E \in \mathcal{F} \otimes \mathcal{G}$.
> - Theo kết quả trực tiếp của Mệnh đề 2, các hàm lát cắt $x \mapsto \nu(E_x)$ và $y \mapsto \mu(E^y)$ đều đo được, đảm bảo hai tích phân lặp vế trái và vế phải luôn tồn tại giá trị trong miền $[0, \infty]$. 
> - Đồng thời, đẳng thức $(1)$ của Mệnh đề 2: $\int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu$ khẳng định rằng dù ta tính toán độ đo của tập $E$ thông qua việc quét tích phân các lát cắt dọc hay lát cắt ngang, kết quả thu được là đồng nhất.
>    Do đó, ánh xạ $\mu \times \nu$ hoàn toàn xác định tốt trên $\mathcal{F} \otimes \mathcal{G}$.
> 
> **1. Tính chất độ đo:**
> - Tập rỗng: $(\mu \times \nu)(\emptyset) = \int_X \nu(\emptyset) \, d\mu = \int_X 0 \, d\mu = 0$.
> - Tính $\sigma$-cộng tính: Với $E = \bigcup_{n=1}^\infty E_n$ (các $E_n$ đôi một rời nhau).
>    Các mặt cắt $(E_n)_x$ cũng rời nhau. Theo tính $\sigma$-cộng tính của độ đo $\nu$: $\nu(E_x) = \sum_{n=1}^\infty \nu((E_n)_x)$.
>   Lấy tích phân: $(\mu \times \nu)(E) = \int_X \left( \sum_{n=1}^\infty \nu((E_n)_x) \right) d\mu$.
>   Áp dụng Định lý Hội tụ Đơn điệu (MCT) để đưa tổng ra ngoài tích phân:
> $\sum_{n=1}^\infty \int_X \nu((E_n)_x) \, d\mu = \sum_{n=1}^\infty (\mu \times \nu)(E_n)$.
> 
> **2. Tính $\sigma$-hữu hạn:**
> - Xét các khối $K_n = X_n \times Y_n \uparrow X \times Y$.
>  $(\mu \times \nu)(K_n) = \mu(X_n)\cdot\nu(Y_n) < \infty$. Vậy độ đo là $\sigma$-hữu hạn.
> 
> **3. Tính duy nhất:** (Chỉ nói sơ qua ý tưởng)
> - Cả $\lambda$ và $\mu \times \nu$ đều là các độ đo trùng nhau trên đại số $\mathcal{R}$ (vì tính chất đo hình chữ nhật mở rộng ra được cho các hợp rời nhau).
> - Cả hai độ đo đều $\sigma$-hữu hạn trên $\mathcal{R}$.
> - Áp dụng Định lý mở rộng Carathéodory (hoặc Hệ quả của lớp đơn điệu), hai độ đo này phải trùng nhau trên toàn bộ $\sigma$-đại số sinh bởi $\mathcal{R}$. $\implies \lambda \equiv \mu \times \nu$.

# II. Định Lý Tonelli – Fubini và ứng dụng

Sau khi đã xây dựng xong độ đo tích $\mu \times \nu$ trên không gian $(X \times Y, \mathcal{F} \otimes \mathcal{G})$, ta mở rộng toán tích phân từ tập hợp sang hàm số. Định lý Fubini tổng quát được chia làm hai bài toán độc lập:
- Hàm đo được không âm ($\ge 0$): Định lý Tonelli.
- Hàm khả tích tổng quát (nhận cả giá trị âm và dương): Định lý Fubini.

## 1. Định lý Tonelli (Trường hợp hàm đo được không âm)

> [!thm] (Định lý 1: Định lý Tonelli)
> Cho $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$ là các không gian độ đo $\sigma$-hữu hạn. Cho hàm số $F: X \times Y \to [0, \infty]$ là hàm đo được tích (đo được đối với $\mathcal{F} \otimes \mathcal{G}$). Khi đó:
> 
> 1) Với mỗi $x \in X$, hàm lát cắt $y \mapsto F(x, y)$ là $\nu$-đo được trên $Y$.
>    Với mỗi $y \in Y$, hàm lát cắt $x \mapsto F(x, y)$ là $\mu$-đo được trên $X$.
> 
> 2) Hàm diện tích tích phân thành phần:
>    Hàm số $x \mapsto \int_Y F(x, y) \, d\nu(y)$ là $\mu$-đo được trên $X$.
>    Hàm số $y \mapsto \int_X F(x, y) \, d\mu(x)$ là $\nu$-đo được trên $Y$.
> 
> 3) Ta có đẳng thức hoán vị tích phân lặp toàn cục:
> $$\int_{X \times Y} F(x, y) \, d(\mu \times \nu) = \int_X \left( \int_Y F(x, y) \, d\nu \right) d\mu = \int_Y \left( \int_X F(x, y) \, d\mu \right) d\nu$$

> [!obs] (Sơ đồ chứng minh)
> Để chứng minh Định lý Tonelli cho một hàm đo được không âm bất kỳ, ta có sơ đồ chứng minh đi từ hàm đặc trưng xây dựng lên hàm đo được tổng quát:
> 
> - **(B1):** Chứng minh định lý đúng cho trường hợp hàm đặc trưng của một tập đo được tích: $F(x, y) = \chi_E(x, y)$ với $E \in \mathcal{F} \otimes \mathcal{G}$. Bước này dựa trực tiếp vào kết quả của Mệnh đề 2 (Mục I).
> - **(B2):** Sử dụng tính tuyến tính của tích phân để mở rộng tính đúng đắn cho họ các hàm đơn giản không âm: $F(x, y) = \sum_{i=1}^m c_i \chi_{E_i}$.
> - **(B3):** Đối với một hàm đo được $F \ge 0$ bất kỳ, ta xấp xỉ nó từ dưới lên bằng một dãy các hàm đơn giản tăng dần $s_n \uparrow F$. Sau đó, áp dụng Định lý Hội tụ Đơn điệu (MCT) để đẩy đẳng thức qua giới hạn.

> [!prf] 
> 
> **B1: Xét trường hợp hàm đặc trưng $F(x, y) = \chi_E(x, y)$ với $E \in \mathcal{F} \otimes \mathcal{G}$**
> Nhận xét cốt lõi: Hàm lát cắt của hàm đặc trưng chính là hàm đặc trưng của tập lát cắt. Cụ thể:
>   $$F(x, \cdot) = \chi_{E_x}(\cdot) \quad \text{và} \quad F(\cdot, y) = \chi_{E^y}(\cdot)$$
> Theo Mệnh đề 2 (Mục I), ta đã biết với mọi $E \in \mathcal{F} \otimes \mathcal{G}$ thì $E_x \in \mathcal{G}$ và $E^y \in \mathcal{F}$. Do đó, các hàm đặc trưng $\chi_{E_x}$ và $\chi_{E^y}$ hiển nhiên đo được. Tính chất 1) được thỏa mãn.
> Tương tự, tích phân lát cắt chính là độ đo của tập lát cắt:
>   $$\int_Y F(x, y) \, d\nu = \int_Y \chi_{E_x}(y) \, d\nu = \nu(E_x)$$
> Mệnh đề 2 khẳng định hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được. Do đó tính chất 2) được thỏa mãn.
> Cuối cùng, thay các biểu thức này vào đẳng thức tích phân tổng quát:
>   $$\int_X \left( \int_Y F(x, y) \, d\nu \right) d\mu = \int_X \nu(E_x) \, d\mu = (\mu \times \nu)(E) = \int_{X \times Y} \chi_E \, d(\mu \times \nu)$$
> Theo Mệnh đề 2, giá trị này cũng bằng $\int_Y \mu(E^y) \, d\nu = \int_Y \left( \int_X F(x, y) \, d\mu \right) d\nu$. 
> Kết luận: Kết quả 1), 2), 3) hoàn toàn đúng cho hàm đặc trưng 
> 
> **B2: Mở rộng cho Hàm đơn giản không âm**
> Giả sử hàm đơn giản có dạng cấu trúc: $s(x, y) = \sum_{i=1}^m c_i \chi_{E_i}(x, y)$ với $c_i \ge 0$ và $E_i \in \mathcal{F} \otimes \mathcal{G}$.
> Nhờ tính chất bảo toàn của độ đo được qua tổ hợp tuyến tính (tổng các hàm đo được là đo được) và tính tuyến tính của phép tích phân, từ việc mỗi thành phần $\chi_{E_i}$ đã thỏa mãn đầy đủ 3 tính chất ở Bước 1, ta suy ra tổng của chúng là hàm đơn giản $s(x, y)$ cũng hoàn toàn thỏa mãn Định lý Tonelli.
> 
> **B3: Mở rộng cho Hàm đo được không âm bất kỳ $F \ge 0$**
> Theo lý thuyết hàm đo được, luôn tồn tại một dãy các hàm đơn giản không âm $s_n(x, y)$ xấp xỉ tăng dần hội tụ điểm về hàm $F$:
>   $$s_n(x, y) \uparrow F(x, y) \quad \forall (x, y) \in X \times Y$$
> 
> - i/ Chứng minh Tính chất 1) cho hàm giới hạn:
>   Cố định $x \in X$, ta có dãy hàm lát cắt thành phần $s_n(x, \cdot) \uparrow F(x, \cdot)$ trên không gian $Y$. Vì giới hạn tăng của một dãy hàm đo được (các hàm đơn giản) là một hàm đo được, ta suy ra hàm lát cắt $y \mapsto F(x, y)$ là $\nu$-đo được. Lập luận tương tự cho biến số $x$, ta có tính chất 1) thỏa mãn. (Liên tưởng tới định lý xấp xỉ cho hàm đơn).
> 
> - ii/ Chứng minh Tính chất 2) và 3) thông qua Định lý Hội tụ Đơn điệu (MCT):
>   Định nghĩa dãy hàm tích phân thành phần theo biến số $x$:
>   $$f_n(x) = \int_Y s_n(x, y) \, d\nu(y)$$
>   Cố định $x \in X$, do dãy hàm đơn giản $s_n(x, y) \uparrow F(x, y)$ không âm, ta áp dụng Định lý Hội tụ Đơn điệu (MCT) trên không gian miền $Y$:
>   $$f_n(x) = \int_Y s_n(x, y) \, d\nu \;\uparrow\; g(x) := \int_Y F(x, y) \, d\nu$$
>   Vì theo Bước 2, mỗi hàm số $f_n(x)$ là hàm $\mu$-đo được trên $X$, nên giới hạn tăng đơn điệu của chúng là hàm $g(x) = \int_Y F(x, y) \, d\nu$ cũng bắt buộc phải là hàm $\mu$-đo được trên $X$. Tính chất 2) được chứng minh.
> 
> - iii/ Thiết lập đẳng thức tích phân toàn cục:
>   Bây giờ ta lấy tích phân hàm giới hạn $g(x)$ trên không gian $X$. Áp dụng Định lý Hội tụ Đơn điệu (MCT) một lần nữa cho không gian $X$:
>   $$\int_X \left( \int_Y F(x, y) \, d\nu \right) d\mu = \int_X g(x) \, d\mu = \lim_{n \to \infty} \int_X f_n(x) \, d\mu$$
>   $$\implies \int_X \left( \int_Y F(x, y) \, d\nu \right) d\mu = \lim_{n \to \infty} \int_X \left( \int_Y s_n(x, y) \, d\nu \right) d\mu$$
>   Do $s_n$ là các hàm đơn giản thuộc Bước 2, ta được quyền hoán đổi thứ tự tích phân lặp bằng độ đo tích:
>   $$\int_X \left( \int_Y s_n(x, y) \, d\nu \right) d\mu = \int_{X \times Y} s_n(x, y) \, d(\mu \times \nu)$$
>   Cho $n \to \infty$ và lại áp dụng Định lý Hội tụ Đơn điệu (MCT) trên không gian tích toàn miền $X \times Y$ cho dãy hàm $s_n \uparrow F$:
>   $$\lim_{n \to \infty} \int_{X \times Y} s_n \, d(\mu \times \nu) = \int_{X \times Y} F \, d(\mu \times \nu)$$
>   Kết hợp toàn bộ chuỗi dấu bằng, ta thu được:
>   $$\int_{X \times Y} F \, d(\mu \times \nu) = \int_X \left( \int_Y F(x, y) \, d\nu \right) d\mu$$
>   Chứng minh hoàn toàn tương tự khi lấy tích phân lặp theo thứ tự ngược lại trên $Y$ trước $X$ sau. 
> 
> Định lý Tonelli được chứng minh hoàn tất.

## 2. Định lý Fubini (Trường hợp hàm khả tích)

Nếu Định lý Tonelli dành cho hàm không âm, thì Định lý Fubini tổng quát hóa cho hàm số nhận giá trị tùy ý (cả âm và dương), với điều kiện hàm đó phải khả tích (integrable).

> [!thm] (Định lý 2: Định lý Fubini)
> Cho $F: X \times Y \to \mathbb{R}$ là một hàm khả tích trên không gian tích đối với độ đo $\mu \times \nu$, tức là $F \in \mathcal{L}^1(\mu \times \nu)$. Khi đó:
> 
> 1) Tính khả tích của hàm lát cắt hầu khắp nơi (a.e.):
>    Đối với $\mu$-hầu khắp mọi $x \in X$, hàm lát cắt $y \mapsto F(x, y)$ khả tích trên $Y$ (đối với độ đo $\nu$).
>    Đối với $\nu$-hầu khắp mọi $y \in Y$, hàm lát cắt $x \mapsto F(x, y)$ khả tích trên $X$ (đối với độ đo $\mu$).
> 
> 2) Tính khả tích của hàm tích phân thành phần:
>    Hàm số $x \mapsto \int_Y F(x, y) \, d\nu$ là một hàm khả tích trên $X$.
>    Hàm số $y \mapsto \int_X F(x, y) \, d\mu$ là một hàm khả tích trên $Y$.
> 
> 3) Công thức tích phân lặp (Iterated Integral) vẫn giữ nguyên như Tonelli:
> $$\int_{X \times Y} F(x, y) \, d(\mu \times \nu) = \int_X \left( \int_Y F(x, y) \, d\nu \right) d\mu = \int_Y \left( \int_X F(x, y) \, d\mu \right) d\nu$$

> [!prf]
> 
> **B1: Phân rã hàm số**
> Bất kỳ hàm số nào cũng có thể được phân rã thành hiệu của hai hàm không âm: $F = F^+ - F^-$, trong đó $F^+ = \max(F, 0) \ge 0$ và $F^- = \max(-F, 0) \ge 0$.
> Vì $F \in \mathcal{L}^1(\mu \times \nu)$ (F khả tích), ta có tích phân của trị tuyệt đối là hữu hạn: $\int_{X \times Y} |F| \, d(\mu \times \nu) < \infty$.
> Do $F^+, F^- \le |F|$, cả hai hàm thành phần này đều là các hàm đo được, không âm và có tích phân hữu hạn trên $X \times Y$. Do đó, cả $F^+$ và $F^-$ đều thỏa mãn Định lý Tonelli.
> 
> **B2: Chứng minh Tính chất 1**
> Áp dụng Tính chất 3 của Định lý Tonelli cho hàm không âm $F^+$, ta có:
>   $$\int_{X \times Y} F^+(x, y) \, d(\mu \times \nu) = \int_X \left( \int_Y F^+(x, y) \, d\nu \right) d\mu < \infty$$
> Ta sủ dụng Tính chất cơ bản của tích phân Lebesgue: Nếu tích phân của một hàm không âm là hữu hạn, thì hàm đó phải có giá trị hữu hạn hầu khắp nơi (a.e.). 
> Xét hàm số bên trong dấu tích phân ngoài cùng: $g(x) = \int_Y F^+(x, y) \, d\nu$. Vì $\int_X g(x) \, d\mu < \infty$, nên bắt buộc $g(x) < \infty$ đối với $\mu$-hầu khắp mọi $x \in X$.
> Điều này có nghĩa là lát cắt $y \mapsto F^+(x, y)$ có tích phân hữu hạn, hay nói cách khác là nó khả tích trên $Y$ với $\mu$-a.e $x \in X$. 
> Lập luận y hệt cho $F^-$. Suy ra hàm $y \mapsto F(x,y) = F^+(x,y) - F^-(x,y)$ là hiệu của hai hàm khả tích, do đó nó cũng khả tích trên $Y$ với $\mu$-a.e $x \in X$. Tính chất 1 được chứng minh.
> 
> **B3: Chứng minh Tính chất 2 và 3**
> Hàm số $x \mapsto \int_Y F^+(x, y) \, d\nu$ và $x \mapsto \int_Y F^-(x, y) \, d\nu$ là các hàm khả tích trên $X$ (vì tích phân của chúng chính là tích phân toàn cục hữu hạn ở Bước 1).
> Do tính tuyến tính của tích phân, hiệu của chúng:
>   $$x \mapsto \int_Y F(x, y) \, d\nu = \int_Y F^+(x, y) \, d\nu - \int_Y F^-(x, y) \, d\nu$$
>   cũng là một hàm khả tích trên $X$. Tính chất 2 được chứng minh.
> Cuối cùng, lấy tích phân hai vế biểu thức trên theo $d\mu$ và áp dụng Định lý Tonelli cho từng thành phần $F^+$ và $F^-$, ta được:
>   $$\int_X \left( \int_Y F(x, y) \, d\nu \right) d\mu = \int_X \left( \int_Y F^+ d\nu \right) d\mu - \int_X \left( \int_Y F^- d\nu \right) d\mu$$
>   $$= \int_{X \times Y} F^+ \, d(\mu \times \nu) - \int_{X \times Y} F^- \, d(\mu \times \nu) = \int_{X \times Y} F(x, y) \, d(\mu \times \nu)$$
> Hoán đổi tương tự cho thứ tự tích phân ngược lại, ta thu được đẳng thức toàn cục ở Tính chất 3. 
> Vậy Định lý Fubini đã được chứng minh.

## 3. Tích chập (Convolution)

Một trong những ứng dụng kinh điển nhất của Định lý Tonelli và Fubini là chứng minh sự tồn tại và tính khả tích của hàm Tích chập.

> [!def] (Tích chập)
> Cho hai hàm $f, g \in \mathcal{L}^1(\mathbb{R}^N)$. Tích chập của $f$ và $g$, ký hiệu là $(f * g)(x)$, được định nghĩa bởi tích phân:
> $$(f * g)(x) = \int_{\mathbb{R}^N} f(x - y)g(y) \, dy$$

> [!thm] (Tính chất)
>  Với hầu khắp mọi $x \in \mathbb{R}^N$, hàm số $y \mapsto f(x - y)g(y)$ là khả tích, và bản thân hàm $(f * g)(x)$ cũng thuộc không gian $\mathcal{L}^1(\mathbb{R}^N)$.

> [!prf]
> Đặt hàm hai biến $F(x, y) = f(x - y)g(y)$. Ta cần kiểm tra xem $F$ có thuộc $\mathcal{L}^1(\mathbb{R}^N \times \mathbb{R}^N)$ hay không.
> Áp dụng Định lý Tonelli cho hàm trị tuyệt đối (không âm) $|F(x, y)| = |f(x - y)| \cdot |g(y)|$:
>   $$\iint_{\mathbb{R}^N \times \mathbb{R}^N} |f(x - y)g(y)| \, dx \, dy = \int_{\mathbb{R}^N} |g(y)| \left( \int_{\mathbb{R}^N} |f(x - y)| \, dx \right) dy$$
> Chú ý rằng tích phân bên trong là tích phân theo biến $x$. Theo tính chất bất biến đối với phép tịnh tiến của độ đo Lebesgue, việc dịch chuyển $x$ đi một lượng $y$ không làm thay đổi giá trị tích phân:
>   $$\int_{\mathbb{R}^N} |f(x - y)| \, dx = \int_{\mathbb{R}^N} |f(x)| \, dx = \|f\|_{\mathcal{L}^1} < \infty$$
> Thay ngược trở lại:
>   $$\iint |F(x, y)| \, dx \, dy = \int_{\mathbb{R}^N} |g(y)| \cdot \|f\|_{\mathcal{L}^1} \, dy = \|f\|_{\mathcal{L}^1} \cdot \|g\|_{\mathcal{L}^1} < \infty$$
> Vì tích phân của trị tuyệt đối là hữu hạn, hàm hai biến $F(x, y)$ khả tích trên không gian tích.
> Đến đây, ta sử dụng Định lý Fubini cho hàm $F(x, y)$. Theo Tính chất 1 của Fubini, đối với hầu khắp mọi $x \in \mathbb{R}^N$, hàm lát cắt $y \mapsto f(x - y)g(y)$ khả tích (tức là biểu thức tích chập hội tụ và định nghĩa tốt a.e). 
> Theo Tính chất 2 của Fubini, hàm tích phân thành phần $x \mapsto (f * g)(x)$ cũng khả tích, hay $(f * g) \in \mathcal{L}^1(\mathbb{R}^N)$.










$\xi$
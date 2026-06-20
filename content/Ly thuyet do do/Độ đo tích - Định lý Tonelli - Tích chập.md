# I. Độ Đo Tích

## 1. Xây dựng đại số sinh và $\sigma$-đại số tích

> [!def] 
> Cho hai không gian độ đo $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$. Đặt $\mathcal{R}$ là họ các hợp hữu hạn của các hình chữ nhật đo được đôi một rời nhau: 
> $$\mathcal{R} = \left\{ \bigcup_{i=1}^{m} A_i \times B_i : A_i \in \mathcal{F},\, B_i \in \mathcal{G},\, \text{đôi một rời nhau} \right\}$$

> [!thm] (Mệnh đề 1) 
> $\mathcal{R}$ là một đại số trên $X \times Y$.

> [!prf]
> **Bổ đề:** Giao của hai hình chữ nhật đo được luôn là một hình chữ nhật đo được:
> $$(A_1 \times B_1) \cap (A_2 \times B_2) = (A_1 \cap A_2) \times (B_1 \cap B_2)$$
> Do $\mathcal{F}, \mathcal{G}$ đóng với phép giao hữu hạn nên $(A_1 \cap A_2) \in \mathcal{F}$ và $(B_1 \cap B_2) \in \mathcal{G}$, suy ra vế phải vẫn là một hình chữ nhật đo được.
> 
> **1. Chứa không gian mẫu:** Do $X \in \mathcal{F}$ và $Y \in \mathcal{G}$ nên $X \times Y$ là một hình chữ nhật đo được, tức $X \times Y \in \mathcal{R}$ (hợp rời rạc với $m=1$).
> 
> **2. Đóng với phép giao hữu hạn:** Giả sử $E_1 = \bigcup_{i=1}^m R_i$ và $E_2 = \bigcup_{j=1}^k R'_j$ thuộc $\mathcal{R}$. Áp dụng tính phân phối:
> $$E_1 \cap E_2 = \bigcup_{i=1}^m \bigcup_{j=1}^k (R_i \cap R'_j)$$
> Theo Bổ đề đã nêu, mỗi $R_i \cap R'_j$ là một hình chữ nhật đo được, vì $\{R_i\}$ và $\{R'_j\}$ vốn đôi một rời nhau nên các giao $R_i \cap R'_j$ cũng đôi một rời nhau, với số lượng $mk$ hữu hạn. Vậy $E_1 \cap E_2 \in \mathcal{R}$.
> 
> **3. Đóng với phép lấy phần bù:** Trước hết xét $m=1$, tức $R = A \times B$. Ta có phân tích rời rạc:
> $$R^c = (A^c \times Y) \cup (A \times B^c)$$
> Mà ta có $(A^c \times Y) \cap (A \times B^c) = (A^c \cap A) \times (Y \cap B^c) = \emptyset$, nên $R^c \in \mathcal{R}$.
> 
> Với $m>1$, đặt $E = \bigcup_{i=1}^m R_i$. Theo De Morgan, $E^c = \bigcap_{i=1}^m R_i^c$. Theo trường hợp $m=1$, mỗi $R_i^c \in \mathcal{R}$. Ta cũng có theo Mục 2, $\mathcal{R}$ đóng với phép giao hữu hạn. Vậy ta suy ra $E^c \in \mathcal{R}$.
> 
> **4. Đóng với phép hợp hữu hạn:** Với $E_1, E_2 \in \mathcal{R}$ bất kỳ, theo Mục 3 ta có $E_1^c, E_2^c \in \mathcal{R}$, theo Mục 2 ta có $E_1^c \cap E_2^c \in \mathcal{R}$, và áp dụng lại Mục 3 một lần nữa ta có $(E_1^c \cap E_2^c)^c \in \mathcal{R}$. Theo De Morgan:
> $$E_1 \cup E_2 = (E_1^c \cap E_2^c)^c \in \mathcal{R}$$
> 
> **Kết luận:** $\mathcal{R}$ thỏa mãn đầy đủ ba tiên đề của một đại số nên là đại số trên không gian $X \times Y$.

## 2. Tập lát cắt 

> [!def] (Không gian $\sigma$-hữu hạn)
> $(X, \mathcal{A}, \mu)$ là $\sigma$-hữu hạn nếu tồn tại ${X_n} \subset \mathcal{A}$ sao cho $X = \bigcup_{n=1}^\infty X_n$ và $\mu(X_n) < \infty$ với mọi $n$. Tương đương, tồn tại dãy tăng $E_n \uparrow X$ với $\mu(E_n) < \infty$.
> 
> _Ví dụ:_ $(\mathbb{R}, \mu_L)$ là $\sigma$-hữu hạn vì $\mathbb{R} = \bigcup_{n=1}^\infty [-n,n]$ với $\mu_L([-n,n]) = 2n < \infty$.

> [!thm] (Mệnh đề 2) 
> Cho $(X, \mathcal{F}, \mu)$, $(Y, \mathcal{G}, \nu)$ $\sigma$-hữu hạn và $E \in \mathcal{F} \otimes \mathcal{G}$. Khi đó:
> 
> 1. $E_x := {y \in Y : (x,y) \in E} \in \mathcal{G}$ và $E^y := {x \in X : (x,y) \in E} \in \mathcal{F}$.
> 2. Hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được, $y \mapsto \mu(E^y)$ là $\nu$-đo được, và: $$\int_X \nu(E_x) d\mu = \int_Y \mu(E^y) d\nu \tag{1}$$

> [!def] (Lớp đơn điệu) 
> $\mathcal{M}$ là lớp đơn điệu nếu: $E_n \uparrow E \implies E \in \mathcal{M}$ và $F_n \downarrow F \implies F \in \mathcal{M}$.

> [!thm] (Định lý Halmos) 
> Nếu $\mathcal{M}$ là lớp đơn điệu chứa đại số $\mathcal{R}$, thì $\sigma(\mathcal{R}) \subset \mathcal{M}$.

Dựa vào công cụ trên, ta có sơ đồ chiến lược chứng minh cho Mệnh đề 2 như sau:

> [!obs] (Sơ đồ chứng minh Mệnh đề 2)
> 
> **Bước 1.** Kiểm tra trực tiếp cho $E \in \mathcal{R}$.
> 
> Mở rộng lên không gian $E \in \sigma(\mathcal{R})$ bằng cách lập các "tập hợp tốt":
> 
> **Bước 2.1.** Đặt $\mathcal{E} = \{E \in \sigma(\mathcal{R}) : \text{thỏa 1)}\}$. Đi chứng minh $\mathcal{E}$ là một $\sigma$-đại số. Kết hợp với $\mathcal{R} \subset \mathcal{E}$, ta suy ra $\mathcal{E} = \sigma(\mathcal{R})$.
> 
> **Bước 2.2.** Đặt $\mathcal{M} = \{E \in \sigma(\mathcal{R}) : \text{thỏa 2)}\}$. Đi chứng minh $\mathcal{M}$ là một lớp đơn điệu. Kết hợp với Định lý Halmos, ta suy ra $\mathcal{M} = \sigma(\mathcal{R})$.

**Giải thích:**
Thay vì đi kiểm tra từng tập hợp $E$ phức tạp, ta gom tất cả các tập thỏa mãn tính chất cần chứng minh vào một lớp $\mathcal{E}$ (hoặc $\mathcal{M}$). Bằng cách dùng Bước 1 để chứng minh lõi $\mathcal{R}$ nằm trong các lớp này, việc còn lại chỉ là chứng minh cấu trúc của $\mathcal{E}$ là một $\sigma$-đại số (hoặc $\mathcal{M}$ là lớp đơn điệu). Vì $\sigma(\mathcal{R})$ là cấu trúc nhỏ nhất chứa $\mathcal{R}$, sự bao hàm $\sigma(\mathcal{R}) \subset \mathcal{E}$ và $\sigma(\mathcal{R}) \subset \mathcal{M}$ sẽ tự động có.

> [!prf] 
> **Bước 1.** Xét $E = \bigcup_{i=1}^n A_i \times B_i \in \mathcal{R}$
> 
> Tập lát cắt: $(A_i \times B_i)_x = B_i \cdot \chi_{A_i}(x)$, nên $E_x = \bigcup_{i=1}^n (A_i \times B_i)_x \in \mathcal{G}$. Tương tự $E^y \in \mathcal{F}$. Tính chất 1) thỏa.
> 
> Độ đo lát cắt: $\nu(E_x) = \nu\left(\bigcup_{i=1}^n (A_i \times B_i)_x\right) = \sum_{i=1}^n \nu((A_i \times B_i)_x) = \sum_{i=1}^n \chi_{A_i}(x)\nu(B_i)$, là tổ hợp tuyến tính của các hàm đo được, nên $\mu$-đo được. Lấy tích phân: $$\int_X \nu(E_x) d\mu = \sum_{i=1}^n \mu(A_i)\nu(B_i) = \int_Y \mu(E^y) d\nu$$ Tính chất 2) thỏa.
> 
> **Bước 2.1.** Chứng minh $\mathcal{E}$ là $\sigma$-đại số
> 
> - i. $X \times Y \in \mathcal{E}$ hiển nhiên.
> - ii. Phần bù: $(E^c)_x = (E_x)^c \in \mathcal{G}$ và $(E^c)^y = (E^y)^c \in \mathcal{F}$ (do $\mathcal{F}, \mathcal{G}$ là $\sigma$-đại số) $\implies E^c \in \mathcal{E}$.
> - iii. Hợp đếm được: $(\bigcup_n E_n)_x = \bigcup_n (E_n)_x \in \mathcal{G}$ $\implies \bigcup_n E_n \in \mathcal{E}$.
> 
> Từ B1 có $\mathcal{R} \subset \mathcal{E}$, và $\mathcal{E}$ là $\sigma$-đại số, nên $\sigma(\mathcal{R}) \subset \mathcal{E}$. Tính chất 1) đúng với mọi $E \in \sigma(\mathcal{R})$.
> 
> **Bước 2.2.** Chứng minh $\mathcal{M}$ là lớp đơn điệu
> 
> _Trường hợp A: $\mu, \nu$ hữu hạn_
> 
> - i. $E_n \uparrow E$: $(E_n)_x \uparrow E_x$ nên $\nu((E_n)_x) \uparrow \nu(E_x)$. Giới hạn tăng của hàm đo được là đo được, nên $x \mapsto \nu(E_x)$ là $\mu$-đo được. Áp dụng MCT: $$\int_X \nu(E_x) d\mu = \lim_n \int_X \nu((E_n)_x) d\mu = \lim_n \int_Y \mu((E_n)^y) d\nu = \int_Y \mu(E^y) d\nu$$ Suy ra $E \in \mathcal{M}$.
>     
> - ii. $E_n \downarrow E$: Tương tự, $\nu((E_n)_x) \downarrow \nu(E_x)$. Vì $\mu, \nu$ hữu hạn nên $\nu((E_n)_x) \le \nu(Y) < \infty$. Đủ điều kiện áp dụng Định lý Hội tụ Bị chặn (BCT): $\int_X \nu(E_x)  d\mu = \lim \int_X \nu((E_n)_x) d\mu$. Lập luận tương tự cho ra $E \in \mathcal{M}$. 
>   
> Vậy $\mathcal{M}$ là lớp đơn điệu.
>     
> 
> _Trường hợp B: $\mu, \nu$ là $\sigma$-hữu hạn_
> 
> Vì các không gian $\sigma$-hữu hạn, tồn tại $X_k \uparrow X$, $Y_k \uparrow Y$ với $\mu(X_k) \nu(Y_k) < \infty$.
> 
> - i. Độ đo thu hẹp: Định nghĩa $\mu_k(A) = \mu(X_k \cap A)$ và $\nu_k(B) = \nu(Y_k \cap B)$. Các độ đo này hữu hạn, nên Trường hợp A áp dụng được, cho đẳng thức trên "khối nhỏ": $$\int_X \nu_k(E_x) d\mu_k = \int_Y \mu_k(E^y) d\nu_k \tag{$*$}$$
>     
> - ii. Viết lại qua độ đo gốc: $(*)$ tương đương: $$\int_X \nu(Y_k \cap E_x)\cdot\chi_{X_k}(x) d\mu = \int_Y \mu(X_k \cap E^y)\cdot\chi_{Y_k}(y) d\nu$$ Dãy hàm $f_k(x) = \nu(Y_k \cap E_x)\cdot\chi_{X_k}(x)$ là $\mu$-đo được với mọi $k$ (từ Trường hợp A).
>     
> - iii. Lấy giới hạn qua MCT: Khi $k \to \infty$: $Y_k \uparrow Y$ nên $\nu(Y_k \cap E_x) \uparrow \nu(E_x)$; $\chi_{X_k}(x) \uparrow 1$. Do đó $f_k(x) \uparrow \nu(E_x)$, và giới hạn tăng của hàm đo được là đo được. Áp dụng MCT cho cả hai vế: $$\int_X \nu(E_x) d\mu = \lim_k \int_X f_k d\mu \stackrel{(*)}{=} \lim_k \int_Y g_k d\nu = \int_Y \mu(E^y) d\nu$$ (với $g_k(y) = \mu(X_k \cap E^y)\cdot\chi_{Y_k}(y) \uparrow \mu(E^y)$ tương tự). Suy ra $E \in \mathcal{M}$.
>     
> 
> Vậy $\mathcal{M}$ là lớp đơn điệu. Từ B1 có $\mathcal{R} \subset \mathcal{M}$, theo Halmos $\sigma(\mathcal{R}) \subset \mathcal{M}$. Mệnh đề được chứng minh hoàn tất.

## 3. Độ đo tích

> [!thm] (Định lý - Định nghĩa Độ đo tích) 
> Ánh xạ $\mu \times \nu: \mathcal{F} \otimes \mathcal{G} \to [0, \infty]$ định nghĩa bởi: $$(\mu \times \nu)(E) = \int_X \nu(E_x) d\mu = \int_Y \mu(E^y) d\nu$$ là một độ đo $\sigma$-hữu hạn trên $(X \times Y, \mathcal{F} \otimes \mathcal{G})$, và là độ đo duy nhất thỏa $(\mu \times \nu)(A \times B) = \mu(A)\nu(B)$ với mọi $A \in \mathcal{F},, B \in \mathcal{G}$.

> [!prf] 
> **Định nghĩa tốt:** Theo Mệnh đề 2, hai tích phân tồn tại trong $[0,\infty]$ và bằng nhau, nên $(\mu \times \nu)(E)$ xác định duy nhất.
> 
> **Tính độ đo:**
> - $(\mu \times \nu)(\emptyset) = \int_X \nu(\emptyset) d\mu = 0$.
> - $\sigma$-cộng tính: Với $E = \bigsqcup_n E_n$, các lát cắt $(E_n)_x$ rời nhau nên $\nu(E_x) = \sum_n \nu((E_n)_x)$. Áp dụng MCT: $$(\mu \times \nu)(E) = \int_X \sum_n \nu((E_n)_x) d\mu = \sum_n \int_X \nu((E_n)_x) d\mu = \sum_n (\mu \times \nu)(E_n)$$
> 
> **Tính $\sigma$-hữu hạn:** $X_n \times Y_n \uparrow X \times Y$ và $(\mu \times \nu)(X_n \times Y_n) = \mu(X_n)\nu(Y_n) < \infty$.
> 
> **Tính duy nhất:** Mọi độ đo $\lambda$ thỏa $\lambda(A \times B) = \mu(A)\nu(B)$ trùng với $\mu \times \nu$ trên $\mathcal{R}$. Cả hai đều $\sigma$-hữu hạn, nên theo Định lý mở rộng Carathéodory, chúng trùng nhau trên $\sigma(\mathcal{R}) = \mathcal{F} \otimes \mathcal{G}$.

# II. Định Lý Tonelli – Fubini và ứng dụng

## 1. Định lý Tonelli (Hàm đo được không âm)

> [!thm] (Định lý Tonelli) 
> Cho $(X, \mathcal{F}, \mu)$, $(Y, \mathcal{G}, \nu)$ $\sigma$-hữu hạn và $F: X \times Y \to [0,\infty]$ đo được tích. Khi đó:
> 
> 1. Với mọi $x \in X$: $y \mapsto F(x,y)$ là $\nu$-đo được. Với mọi $y \in Y$: $x \mapsto F(x,y)$ là $\mu$-đo được.
> 2. Hàm $x \mapsto \int_Y F(x,y) d\nu$ là $\mu$-đo được; $y \mapsto \int_X F(x,y) d\mu$ là $\nu$-đo được.
> 3. $$\int_{X \times Y} F d(\mu \times \nu) = \int_X \left(\int_Y F(x,y) d\nu\right) d\mu = \int_Y \left(\int_X F(x,y) d\mu\right) d\nu$$

> [!obs] (Sơ đồ chứng minh) 
> **Bước 1.** $F = \chi_E$ (hàm đặc trưng, dùng Mệnh đề 2) $\longrightarrow$ **Bước 2.** $F$ là hàm đơn giản không âm (tuyến tính) $\longrightarrow$ **Bước 3.** $F \ge 0$ tổng quát (xấp xỉ $s_n \uparrow F$, dùng MCT).

> [!prf] 
> **Bước 1.** $F = \chi_E$, $E \in \mathcal{F} \otimes \mathcal{G}$
> 
> Nhận xét: Hàm lát cắt của hàm đặc trưng chính là hàm đặc trưng của tập lát cắt. Cụ thể:
>   $$F(x, \cdot) = \chi_{E_x}(\cdot) \quad \text{và} \quad F(\cdot, y) = \chi_{E^y}(\cdot)$$
> Theo Mệnh đề 2 (Mục I), ta đã biết với mọi $E \in \mathcal{F} \otimes \mathcal{G}$ thì $E_x \in \mathcal{G}$ và $E^y \in \mathcal{F}$. Do đó, các hàm đặc trưng $\chi_{E_x}$ và $\chi_{E^y}$ hiển nhiên đo được. Tính chất 1) được thỏa mãn.
> Tương tự, tích phân lát cắt chính là độ đo của tập lát cắt:
>   $$\int_Y F(x, y)  d\nu = \int_Y \chi_{E_x}(y)  d\nu = \nu(E_x)$$
> Mệnh đề 2 khẳng định hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được. Do đó tính chất 2) được thỏa mãn.
> Cuối cùng, thay các biểu thức này vào đẳng thức tích phân tổng quát:
>   $$\int_X \left( \int_Y F(x, y)  d\nu \right) d\mu = \int_X \nu(E_x) d\mu = (\mu \times \nu)(E) = \int_{X \times Y} \chi_E  d(\mu \times \nu)$$
> Theo Mệnh đề 2, giá trị này cũng bằng $\int_Y \mu(E^y)  d\nu = \int_Y \left( \int_X F(x, y)  d\mu \right) d\nu$
> Tính chất 3) được thỏa. Vậy kết quả đúng cho hàm đặc trưng. 
> 
> **Bước 2.** $s = \sum_{i=1}^m c_i \chi_{E_i}$, $c_i \ge 0$, $E_i \in \mathcal{F} \otimes \mathcal{G}$
> 
> Hàm đơn giản có dạng cấu trúc: $s(x, y) = \sum_{i=1}^m c_i \chi_{E_i}(x, y)$ với $c_i \ge 0$ và $E_i \in \mathcal{F} \otimes \mathcal{G}$.
> Nhờ tính chất bảo toàn của hàm đo được qua tổ hợp tuyến tính nên hàm đơn giản kế thừa Bước 1. Vậy kết quả đúng cho hàm đơn giản.
> 
> **Bước 3.** $F \ge 0$ tổng quát, $s_n \uparrow F$
> Tính chất 1): Ta cố định $x$ và xấp xỉ hàm đo được tiến về $F$: $s_n(x,\cdot) \uparrow F(x,\cdot)$. Vì giới hạn tăng của hàm đo được là hàm đo được nên $y \mapsto F(x,y) {}$ là $\nu$-đo được.
> 
> Tính chất 2): Đặt $f_n(x) = \int_Y s_n(x,y) d\nu \uparrow g(x) = \int_Y F(x,y) d\nu$. 
> 
> Vì theo Bước 2, mỗi hàm số $f_n(x)$ là hàm $\mu$-đo được trên $X$, nên giới hạn tăng đơn điệu của chúng là hàm $g(x) = \int_Y F(x, y) d\nu$ cũng bắt buộc phải là hàm $\mu$-đo được trên $X$. 
>  
>  Tính chất 3):
> Áp dụng MCT trên $X$ rồi trên $X \times Y$: $$\int_X g d\mu = \lim_{n \to \infty} \int_X f_n d\mu = \lim_{n \to \infty} \int_{X\times Y} s_n d(\mu\times\nu) = \int_{X\times Y} F d(\mu\times\nu)$$
> Trường hợp đổi thứ tự tích phân lặp chứng minh tương tự. Vậy kết quả đúng cho hàm không âm bất kì. Định lý Tonelli được chứng minh hoàn tất.

> [!rem] (Mối quan hệ giữa MCT và Tonelli)
> 
> **1. Không gian độ đo đếm**
> Tích phân Lebesgue của một hàm số $h(n)$ trên không gian đếm $(\mathbb{N}^*, \mathcal{P}(\mathbb{N}^*), \nu)$ bản chất chính là tổng của một chuỗi số vô hạn:
>   $$\int_{\mathbb{N}^*} h(n)  d\nu = \sum_{n=1}^\infty h(n)$$
>   
> Nhờ tính chất này, bất kỳ định lý nào phát biểu về dấu tích phân lặp trên không gian tích có chứa độ đo đếm đều có thể được dịch trực tiếp thành một định lý về dấu tổng chuỗi vô hạn.
> 
> **2. Hoán đổi $\int$ và $\sum$**
> Khi ta đối mặt với bài toán đổi chỗ dấu tích phân và dấu tổng cho một dãy hàm không âm ($f_n \ge 0$):
> $$\int_X \left( \sum_{n=1}^\infty f_n(x) \right) d\mu = \sum_{n=1}^\infty \int_X f_n(x) d\mu$$
> 
> Ta có hai cách giải thích bản chất tương đương nhau về mặt kết quả:
> 
> Góc nhìn MCT: Coi tổng vô hạn là giới hạn của dãy tổng phần thứ $S_N(x) = \sum_{n=1}^N f_n(x)$. Vì $f_n \ge 0$ nên $S_N(x)$ đơn điệu tăng, ta dùng MCT để đẩy $\lim_{N\to\infty}$ ra ngoài dấu tích phân.
> 
> Góc nhìn Tonelli: Coi bài toán đang diễn ra trên không gian tích $X \times \mathbb{N}^*$ với hàm hai biến $F(x, n) = f_n(x)$. Ta dùng Tonelli để hoán đổi trực tiếp tích phân theo độ đo $\mu$ và tích phân theo độ đo đếm $\nu$.

## 2. Định lý Fubini (Hàm khả tích)

> [!thm] (Định lý Fubini) 
> Cho $F \in \mathcal{L}^1(\mu \times \nu)$. Khi đó:
> 
> 1. Với $\mu$-a.e $x$: $y \mapsto F(x,y)$ khả tích trên $Y$. Với $\nu$-a.e $y$: $x \mapsto F(x,y)$ khả tích trên $X$.
> 2. Hàm $x \mapsto \int_Y F(x,y) d\nu$ khả tích trên $X$; $y \mapsto \int_X F(x,y) d\mu$ khả tích trên $Y$.
> 3. $$\int_{X \times Y} F d(\mu \times \nu) = \int_X \left(\int_Y F(x,y) d\nu\right) d\mu = \int_Y \left(\int_X F(x,y) d\mu\right) d\nu$$

> [!prf] 
> **Bước 1.** Phân rã $F = F^+ - F^-$
> 
> Vì $F \in \mathcal{L}^1(\mu \times \nu)$, ta có $\int |F| d(\mu\times\nu) < \infty$. Do $F^\pm \le |F|$, cả $F^+$ và $F^-$ đều không âm, đo được, và có tích phân hữu hạn. Định lý Tonelli áp dụng được cho cả hai.
> 
> **Bước 2.** Chứng minh Tính chất 1)
> 
> Áp dụng Tonelli cho $F^+$: $\int_X \left(\int_Y F^+ d\nu\right) d\mu < \infty$. Ta sủ dụng Tính chất cơ bản của tích phân Lebesgue: Nếu tích phân của một hàm không âm là hữu hạn, thì hàm đó phải có giá trị hữu hạn hầu khắp nơi (a.e). 
> 
> Suy ra $\int_Y F^+(x,y) d\nu < \infty$ với $\mu$-a.e $x$, tức là $y \mapsto F^+(x,y)$ khả tích a.e. Lập luận tương tự cho $F^-$. Do đó $y \mapsto F(x,y) = F^+(x,y) - F^-(x,y)$ khả tích với $\mu$-a.e $x$.
> 
> **Bước 3.** Chứng minh Tính chất 2) và 3)
> 
> Hai hàm $x \mapsto \int_Y F^\pm(x,y) d\nu$ đều khả tích trên $X$ (tích phân của chúng hữu hạn). Bằng tuyến tính: $$x \mapsto \int_Y F d\nu = \int_Y F^+ d\nu - \int_Y F^- d\nu$$ là hiệu của hai hàm khả tích, nên khả tích. Tính chất 2) thỏa.
> 
> Lấy tích phân và dùng Tonelli cho $F^\pm$: $$\int_X\left(\int_Y F d\nu\right) d\mu = \int_{X\times Y} F^+ d(\mu\times\nu) - \int_{X\times Y} F^- d(\mu\times\nu) = \int_{X\times Y} F d(\mu\times\nu)$$ Trường hợp đổi thứ tự tích phân lặp chứng minh tương tự. Định lý Fubini được chứng minh hoàn tất.

> [!rem] (Mối quan hệ giữa DCT và Fubini)
> 
> Xét bài toán bài toán hoán vị toán tử:
> $$\int_D \left( \sum_{n=1}^\infty f_n(x) \right) d\mu = \sum_{n=1}^\infty \int_D f_n(x)  d\mu$$
> 
> Ta có hai cách giải thích bản chất tương đương nhau về mặt kết quả khi giả thiết $\sum_{n=1}^\infty \int_D |f_n| d\mu < \infty$ được thỏa mãn:
> 
> Góc nhìn DCT: Coi tổng vô hạn là giới hạn của dãy tổng riêng thứ $N$ là $S_N(x) = \sum_{n=1}^N f_n(x)$. Dãy hàm $(S_N)$ được chặn trội bởi hàm khả tích $G(x) = \sum_{n=1}^\infty |f_n(x)|$ (hữu hạn hầu khắp nơi nhờ Hệ quả $\sigma$-cộng tính áp dụng cho $|f_n|$). Ta dùng DCT để đẩy $\lim_{N\to\infty}$ ra ngoài dấu tích phân.
> 
> Góc nhìn Fubini: Coi bài toán đang diễn ra trên không gian tích $D \times \mathbb{N}^*$ với hàm hai biến $F(x,n) = f_n(x)$. Giả thiết $\sum \int |f_n| d\mu < \infty$ theo định lý Tonelli chính là khẳng định $|F|$ khả tích trên không gian tích, tức $F \in \mathcal{L}^1(\mu \times \nu)$. Do đó, ta dùng trực tiếp định lý Fubini để hoán đổi thứ tự hai tích phân lặp (tích phân theo độ đo $\mu$ và tích phân theo độ đo đếm $\nu$).

## 3. Tích chập (Convolution)

Một trong những ứng dụng kinh điển nhất của Định lý Tonelli và Fubini là chứng minh sự tồn tại và tính khả tích của hàm Tích chập.

> [!def] (Tích chập) 
> Với $f, g \in \mathcal{L}^1(\mathbb{R}^N)$, tích chập được định nghĩa bởi: $$(f * g)(x) = \int_{\mathbb{R}^N} f(x-y)g(y) dy$$

> [!thm] (Tính chất) 
> Với a.e $x \in \mathbb{R}^N$, hàm $y \mapsto f(x-y)g(y)$ khả tích, và $(f*g) \in \mathcal{L}^1(\mathbb{R}^N)$.

> [!prf] 
> Đặt $F(x,y) = f(x-y)g(y)$. Áp dụng Tonelli cho $|F|$: 
> $$
> \iint |f(x-y)g(y)| dx dy = \int_{\mathbb{R}^N} |g(y)| \left(\int_{\mathbb{R}^N} |f(x-y)| dx\right) dy
> $$ 
> Theo tính bất biến của phép tịnh tiến của độ đo Lebesgue: $\int |f(x-y)| dx = |f|_{\mathcal{L}^1}$. Do đó: 
> $$
> \iint |F| dx dy = |f|_{\mathcal{L}^1} \cdot |g|_{\mathcal{L}^1} < \infty
> $$ 
> Suy ra $F \in \mathcal{L}^1(\mathbb{R}^N \times \mathbb{R}^N)$. Áp dụng Fubini: với a.e $x$, lát cắt $y \mapsto f(x-y)g(y)$ khả tích (Tính chất 1); và hàm $(f*g)(x) = \int F(x,\cdot) dy$ khả tích trên $\mathbb{R}^N$ (Tính chất 2).
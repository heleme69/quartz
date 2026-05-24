# [I] Tích phân hàm đơn giản

> [!def] (Hàm đơn giản)  
> Cho một không gian độ đo $(X, \mathfrak{A}, \mu)$. Một hàm $\varphi$ được gọi là hàm đơn giản nếu thỏa các điều kiện sau:  
> (i) Miền xác định $\mathfrak{D}(\varphi) \in \mathfrak{A}$,  
> (ii) $\varphi$ là $\mathfrak{A}$-đo được trên $\mathfrak{D}(\varphi)$,  
> (iii) $\varphi$ chỉ nhận hữu hạn giá trị thực, tức là $\mathfrak{R}(\varphi)$ là một tập con hữu hạn của $\mathbb{R}$.  
> (Lưu ý rằng có thể $\mu(\mathfrak{D}(\varphi)) = \infty$, nhưng các giá trị $\infty$ và $-\infty$ không được phép là giá trị của một hàm đơn giản $\varphi$.)

> [!def] (Biểu diễn chuẩn tắc)  
> Cho $\varphi$ là một hàm đơn giản trên tập $D \in \mathcal{A}$ trong không gian đo $(X, \mathfrak{A}, \mu)$.  
> Gọi $\{a_i : i = 1, \ldots, n\}$ là tập các giá trị khác nhau mà $\varphi$ nhận trên $D$ và đặt  
> $D_i = \{x \in D : \varphi(x) = a_i\}$ với $i = 1, \ldots, n$.  
> Khi đó $\{D_i : i = 1, \ldots, n\}$ là một họ rời nhau trong $\mathcal{A}$ và $\bigcup_{i=1}^{n} D_i = D$.  
> Biểu thức $\varphi(x) = \sum_{i=1}^{n} a_i 1_{D_i}(x)$ với $x \in D$ được gọi là biểu diễn chuẩn tắc của $\varphi$.  
>  
> Lưu ý rằng nếu $D_i \in \mathfrak{A}$ và $a_i \in \mathbb{R}$ với $i = 1, \ldots, n$, và nếu ta đặt $D = \bigcup_{i=1}^{n} D_i$ rồi định nghĩa $\varphi = \sum_{i=1}^{n} a_i 1_{D_i}$ trên $D$, thì $\varphi$ là một hàm đơn giản trên $D$.  
> 
> Tuy nhiên, $\sum_{i=1}^{n} a_i 1_{D_i}$ có thể không phải là biểu diễn chuẩn tắc của $\varphi$, bởi vì $\{D_i : i = 1, \ldots, n\}$ có thể không phải là một họ rời nhau và $\{a_i : i = 1, \ldots, n\}$ có thể không phải là tập các số thực phân biệt.

> [!def] (Tích phân Lebesgue cho hàm đơn giản)  
> Cho $\varphi = \sum_{i=1}^{n} a_i 1_{D_i}$ là biểu diễn chuẩn tắc của một hàm đơn giản trên tập $D \in \mathcal{A}$ trong không gian độ đo $(X, \mathcal{A}, \mu)$.  
> Tích phân Lebesgue của $\varphi$ trên $D$ theo $\mu$ được định nghĩa bởi  
> $$\int_D \varphi(x)\,\mu(dx) = \sum_{i=1}^{n} a_i \mu(D_i),$$  
> với điều kiện tổng này tồn tại trong $\overline{\mathbb{R}}$.  
>  
> Lưu ý: Ta thường xét $\int_D \varphi(x)\,\mu(dx)$ là một số thực khi nói $\varphi$ là Lebesgue khả tích trên $D$ theo $\mu$. Ký hiệu: $\int_D \varphi \, d\mu$.


> [!thm] (Tính chất cơ bản trên miền $D$)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $\varphi \ge 0$ là một hàm đơn giản xác định trên tập $D \in \mathfrak{A}$ có biểu diễn chuẩn tắc $\varphi = \sum_{i=1}^m \alpha_i \chi_{D_i}$. Khi đó ta có các tính chất sau:
> 
> 1. Tính đơn điệu 
> Nếu $E \subset D$ và $E \in \mathfrak{A}$, thì:
> $$\int_E \varphi d\mu \le \int_D \varphi d\mu$$
> 
> 2. Tính cộng tính hữu hạn 
> Cho $D = \bigcup_{j=1}^n E_j$ là hợp của các tập hợp $E_j \in \mathfrak{A}$ rời nhau đôi một. Khi đó:
> $$\int_D \varphi d\mu = \sum_{j=1}^n \int_{E_j} \varphi d\mu$$

> [!prf]
> 1.
> Khi xét trên tập $E \subset D$, ta thu hẹp hàm $\varphi$ trên $E$:
> $$\varphi|_E = \sum_{i=1}^m \alpha_i \chi_{D_i \cap E}$$
> Hàm số này được định nghĩa trên tập nền $E = \bigcup_{i=1}^m (D_i \cap E)$ (trong đó các tập $D_i \cap E$ rời nhau đôi một).
> Theo định nghĩa tích phân của hàm đơn giản trên tập $E$:
> $$\int_E \varphi d\mu = \sum_{i=1}^m \alpha_i \mu(D_i \cap E)$$
> Vì $E \subset D$ nên $(D_i \cap E) \subset D_i$. Áp dụng tính đơn điệu của độ đo $\mu$, ta có $\mu(D_i \cap E) \le \mu(D_i)$. Dẫn tới:
> $$\int_E \varphi d\mu \le \sum_{i=1}^m \alpha_i \mu(D_i) = \int_D \varphi d\mu$$
>
> 2.
> Ta phân hoạch mỗi tập $D_i$ theo các tập $E_j$:
> $$D_i = D_i \cap D = D_i \cap \left( \bigcup_{j=1}^n E_j \right) = \bigcup_{j=1}^n (D_i \cap E_j)$$
> Do các tập $E_j$ rời nhau, nên các tập con $(D_i \cap E_j)$ cũng rời nhau đối với mọi $j \in \{1, \dots, n\}$. Áp dụng tính cộng tính hữu hạn của độ đo $\mu$:
> $$\mu(D_i) = \sum_{j=1}^n \mu(D_i \cap E_j)$$
> Thay vào định nghĩa tích phân ban đầu trên tập $D$:
> $$\int_D \varphi d\mu = \sum_{i=1}^m \alpha_i \mu(D_i) = \sum_{i=1}^m \alpha_i \left( \sum_{j=1}^n \mu(D_i \cap E_j) \right)$$
> Vì đây là các tổng hữu hạn, ta có thể tự do đổi thứ tự lấy tổng:
> $$\int_D \varphi d\mu = \sum_{j=1}^n \left( \sum_{i=1}^m \alpha_i \mu(D_i \cap E_j) \right)$$
> Nhận xét rằng phần tổng bên trong dấu ngoặc tròn chính là định nghĩa tích phân của hàm đơn giản $\varphi$ trên tập con $E_j$:
> $$\int_{E_j} \varphi d\mu = \sum_{i=1}^m \alpha_i \mu(D_i \cap E_j)$$
> Từ đó suy ra:
> $$\int_D \varphi d\mu = \sum_{j=1}^n \int_{E_j} \varphi d\mu$$

> [!prp] (Bổ đề 7.7 - Tính chất cơ bản của tích phân hàm đơn giản)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và các hàm đơn giản $\varphi, \varphi_1, \varphi_2$ xác định trên tập $D \in \mathfrak{A}$. Ta có các tính chất sau:
> 
> 1. Bằng nhau hầu khắp nơi (a.e.): Nếu $\varphi_1 = \varphi_2$ a.e. trên $D$ thì $\int_D \varphi_1 d\mu = \int_D \varphi_2 d\mu$.
> 2. Tính đơn điệu: Nếu $\varphi_1 \le \varphi_2$ trên $D$ thì $\int_D \varphi_1 d\mu \le \int_D \varphi_2 d\mu$.
> 3. Tính bị chặn: Nếu $\varphi \in [M_1, M_2]$ trên $D$ thì $M_1 \mu(D) \le \int_D \varphi d\mu \le M_2 \mu(D)$.
> 4. Tính thuần nhất: Nếu $\varphi$ khả tích và $c$ là hằng số thì $c\varphi$ cũng khả tích và $\int_D c\varphi d\mu = c \int_D \varphi d\mu$.
> 5. Tính tuyến tính (Cộng tính): Nếu $\varphi_1, \varphi_2$ khả tích trên $D$ thì $\varphi_1 + \varphi_2$ khả tích trên $D$ và:
> $$\int_D (\varphi_1 + \varphi_2) d\mu = \int_D \varphi_1 d\mu + \int_D \varphi_2 d\mu$$

> [!prf] 
> 
> 1. Bằng nhau hầu khắp nơi:
> Gọi $N \subset D$ là tập hợp có số đo không ($\mu(N) = 0$) sao cho $\varphi_1 = \varphi_2$ trên tập $D \setminus N$.
> Áp dụng tính cộng tính theo tập hợp, ta phân tích tích phân trên $D$:
> $$\int_D \varphi_1 d\mu = \int_{D \setminus N} \varphi_1 d\mu + \int_N \varphi_1 d\mu$$
> Vì $\mu(N) = 0$ nên theo định nghĩa, tích phân của bất kỳ hàm đơn giản nào trên $N$ cũng bằng $0$. Trên miền $D \setminus N$, do $\varphi_1 = \varphi_2$ nên:
> $$\int_{D \setminus N} \varphi_1 d\mu + 0 = \int_{D \setminus N} \varphi_2 d\mu + \int_N \varphi_2 d\mu = \int_D \varphi_2 d\mu$$
> 
> 2. Tính đơn điệu:
> Giả sử $\varphi_1$ và $\varphi_2$ có biểu diễn chuẩn tắc là $\varphi_1 = \sum_{i=1}^n \alpha_i \chi_{D_i}$ và $\varphi_2 = \sum_{j=1}^m \beta_j \chi_{E_j}$.
> Xét họ các tập hợp giao nhau $D_i \cap E_j$. Trên mỗi tập $D_i \cap E_j$, hàm $\varphi_1$ có giá trị $\alpha_i$ và $\varphi_2$ có giá trị $\beta_j$. 
> Vì $\varphi_1 \le \varphi_2$ trên $D$, ta suy ra $\alpha_i \le \beta_j$ với mọi cặp $(i,j)$ sao cho $D_i \cap E_j \neq \emptyset$.
> Do đó:
> $$\int_D \varphi_1 d\mu = \sum_{i=1}^n \sum_{j=1}^m \alpha_i \mu(D_i \cap E_j) \le \sum_{i=1}^n \sum_{j=1}^m \beta_j \mu(D_i \cap E_j) = \int_D \varphi_2 d\mu$$
> 
> 3. Tính bị chặn:
> Xét các hàm đơn giản hằng số $\psi_1 = M_1 \chi_D$ và $\psi_2 = M_2 \chi_D$. Theo định nghĩa, ta có $\int_D \psi_1 d\mu = M_1 \mu(D)$ và $\int_D \psi_2 d\mu = M_2 \mu(D)$.
> Vì $M_1 \le \varphi \le M_2$ trên toàn bộ $D$, tức là $\psi_1 \le \varphi \le \psi_2$. Áp dụng tính đơn điệu (đã chứng minh ở ý 2), ta thu được:
> $$\int_D \psi_1 d\mu \le \int_D \varphi d\mu \le \int_D \psi_2 d\mu \implies M_1 \mu(D) \le \int_D \varphi d\mu \le M_2 \mu(D)$$
> 
> 4. Tính thuần nhất:
> Giả sử $\varphi = \sum_{i=1}^n \alpha_i \chi_{D_i}$. Khi nhân với hằng số $c$, hàm $c\varphi$ sẽ có biểu diễn là $c\varphi = \sum_{i=1}^n (c\alpha_i) \chi_{D_i}$.
> Theo định nghĩa tích phân của hàm đơn giản:
> $$\int_D c\varphi d\mu = \sum_{i=1}^n (c\alpha_i) \mu(D_i) = c \sum_{i=1}^n \alpha_i \mu(D_i) = c \int_D \varphi d\mu$$
> 
> 5. Tính tuyến tính (Cộng tính):
> Sử dụng lại phân hoạch chung $D_i \cap E_j$ như ở ý 2. Các tập $D_i \cap E_j$ rời nhau đôi một và có hợp bằng $D$.
> Trên mỗi tập $D_i \cap E_j$, hàm tổng $\varphi_1 + \varphi_2$ có giá trị không đổi là $\alpha_i + \beta_j$.
> Áp dụng định nghĩa tích phân cho hàm $\varphi_1 + \varphi_2$:
> $$\int_D (\varphi_1 + \varphi_2) d\mu = \sum_{i=1}^n \sum_{j=1}^m (\alpha_i + \beta_j) \mu(D_i \cap E_j)$$
> Tách tổng này ra làm hai phần:
> $$
> \begin{align}
> &=  \sum_{i=1}^n \sum_{j=1}^m \alpha_i \mu(D_i \cap E_j) + \sum_{i=1}^n \sum_{j=1}^m \beta_j \mu(D_i \cap E_j) \\
> &= \sum_{i=1}^n \alpha_i \left( \sum_{j=1}^m \mu(D_i \cap E_j) \right) + \sum_{j=1}^m \beta_j \left( \sum_{i=1}^n \mu(D_i \cap E_j) \right) \\
> &= \sum_{i=1}^n \alpha_i \mu(D_i) + \sum_{j=1}^m \beta_j \mu(E_j) = \int_D \varphi_1 d\mu + \int_D \varphi_2 d\mu
> \end{align}
> $$

# Tích phân hàm không âm

> [!prp] (Bổ đề 8.2 - Tính chất tích phân của hàm đo được không âm)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo. Giả sử $f$ là một hàm đo được, không âm, nhận giá trị thực mở rộng trên tập $D \in \mathfrak{A}$ (tức là $f: D \to [0, \infty]$). Khi đó:
> 
> (a) Nếu $\int_D f d\mu < \infty$, thì $f < \infty$ hầu khắp nơi (a.e.) trên $D$.
> (b) Nếu $\int_D f d\mu = 0$, thì $f = 0$ hầu khắp nơi (a.e.) trên $D$.
> (d) Nếu $f > 0$ a.e. trên $D$ và $\int_D f d\mu = 0$, thì $\mu(D) = 0$.
> (f) Nếu $f_1 = f_2$ a.e. trên $D$, thì $\int_D f_1 d\mu = \int_D f_2 d\mu$.

> [!prf] Chứng minh
> _(a)_:
> Giả sử phản chứng rằng mệnh đề $f < \infty$ không đúng hầu khắp nơi trên $D$. 
> Khi đó, tập hợp các điểm mà $f$ nhận giá trị vô cùng có số đo dương. 
> Đặt $E = \{x \in D : f(x) = \infty\}$. Theo giả thiết phản chứng, $\mu(E) > 0$.
> 
> Với mọi số nguyên dương $n \in \mathbb{N}^*$, ta xây dựng một hàm đơn giản $\varphi_n$ trên $D$ như sau:
> $$\varphi_n = n \chi_E + 0 \chi_{D \setminus E} = n \chi_E$$
> Vì trên tập $E$, $f(x) = \infty > n$ và trên tập $D \setminus E$, $f(x) \ge 0$, ta luôn có $\varphi_n \le f$ trên toàn bộ $D$.
> 
> Áp dụng tính đơn điệu của tích phân Lebesgue, ta có:
> $$\int_D f d\mu \ge \int_D \varphi_n d\mu = n \mu(E)$$
> Bất đẳng thức này đúng với mọi $n \in \mathbb{N}^*$. Cho $n \to \infty$, vì $\mu(E) > 0$ là một hằng số dương, ta suy ra:
> $$\lim_{n \to \infty} n \mu(E) = \infty \implies \int_D f d\mu = \infty$$
> Điều này mâu thuẫn trực tiếp với giả thiết ban đầu là $\int_D f d\mu < \infty$. 
> Vậy giả sử phản chứng sai, tức là $\mu(\{f = \infty\}) = 0$, hay $f < \infty$ a.e. trên $D$. 
> 
> _(b)_:
> Giả sử phản chứng rằng mệnh đề $f = 0$ không đúng hầu khắp nơi trên $D$. Do $f \ge 0$, điều này tương đương với việc tập hợp các điểm mà $f > 0$ có số đo dương.
> Đặt $E = \{x \in D : f(x) > 0\}$. Theo giả thiết phản chứng, $\mu(E) > 0$.
> 
> Ta có thể biểu diễn tập $E$ dưới dạng hợp của một dãy các tập hợp tăng dần:
> $$E = \bigcup_{n=1}^\infty \left\{ x \in D : f(x) > \frac{1}{n} \right\}$$
> Đặt $E_n = \{ x \in D : f(x) > \frac{1}{n} \}$. Ta thấy $E_1 \subset E_2 \subset \dots \subset E_n \subset \dots$ và $\bigcup_{n=1}^\infty E_n = E$.
> Theo tính chất bán cộng tính đếm được (hoặc tính liên tục từ dưới) của độ đo, ta có:
> $$\mu(E) \le \sum_{n=1}^\infty \mu(E_n)$$
> Vì $\mu(E) > 0$, không thể xảy ra trường hợp $\mu(E_n) = 0$ với mọi $n$. Do đó, phải tồn tại ít nhất một chỉ số $N_0 \in \mathbb{N}^*$ sao cho $\mu(E_{N_0}) > 0$.
> 
> Xây dựng một hàm đơn giản $\varphi$ trên $D$ ứng với tập $E_{N_0}$:
> $$\varphi = \frac{1}{N_0} \chi_{E_{N_0}} + 0 \chi_{D \setminus E_{N_0}} = \frac{1}{N_0} \chi_{E_{N_0}}$$
> Theo định nghĩa của $E_{N_0}$, với mọi $x \in E_{N_0}$ ta có $f(x) > \frac{1}{N_0}$. Do đó, $\varphi \le f$ trên toàn bộ $D$.
> 
> Áp dụng tính đơn điệu của tích phân Lebesgue, ta thu được:
> $$\int_D f d\mu \ge \int_D \varphi d\mu = \frac{1}{N_0} \mu(E_{N_0}) > 0$$
> Tức là $\int_D f d\mu > 0$, điều này mâu thuẫn trực tiếp với giả thiết $\int_D f d\mu = 0$.
> Vậy giả sử phản chứng sai, suy ra $\mu(\{f > 0\}) = 0$, hay $f = 0$ a.e. trên $D$. 
>
> _(d)_:
> Theo định nghĩa, điều này có nghĩa là tập hợp các điểm mà $f(x) \neq 0$ có số đo bằng $0$. Vì $f \ge 0$, ta có:
> $$\mu(\{x \in D : f(x) > 0\}) = 0 \tag{1}$$
> 
> Mặt khác, giả thiết cũng cho $f > 0$ hầu khắp nơi trên $D$. Điều này có nghĩa là tập hợp các điểm mà mệnh đề này sai có số đo bằng $0$:
> $$\mu(\{x \in D : f(x) \le 0\}) = 0 \tag{2}$$
> 
> Chú ý rằng toàn bộ không gian nền $D$ có thể được phân hoạch thành hai tập hợp rời nhau dựa trên giá trị của $f$:
> $$D = \{x \in D : f(x) > 0\} \cup \{x \in D : f(x) \le 0\}$$
> 
> Áp dụng tính cộng tính hữu hạn của độ đo $\mu$ trên các tập rời nhau, kết hợp với $(1)$ và $(2)$, ta có:
> $$\mu(D) = \mu(\{x \in D : f(x) > 0\}) + \mu(\{x \in D : f(x) \le 0\}) = 0 + 0 = 0$$
> Vậy $\mu(D) = 0$. 
>
> _(f)_:
> Gọi $N$ là tập hợp các điểm trên $D$ mà $f_1$ và $f_2$ khác nhau:
> $$N = \{x \in D : f_1(x) \neq f_2(x)\}$$
> Vì $f_1 = f_2$ a.e. trên $D$, theo định nghĩa ta có $\mu(N) = 0$.
> 
> Ta phân hoạch tập $D$ thành hai phần rời nhau: $D = (D \setminus N) \cup N$. Khi đó, tích phân trên $D$ có thể được tách ra theo miền (tính cộng tính theo tập hợp):
> $$\int_D f_1 d\mu = \int_{D \setminus N} f_1 d\mu + \int_N f_1 d\mu$$
> 
> Nhận xét rằng đối với bất kỳ hàm đo được không âm $g$ nào, tích phân của nó trên một tập có số đo không (null set) luôn bằng $0$. *(Vì bất kỳ hàm đơn giản $\varphi \le g$ nào cũng sẽ có tích phân trên $N$ bằng $0$ do $\mu(N) = 0$)*. Do đó:
> $$\int_N f_1 d\mu = 0 \quad \text{và} \quad \int_N f_2 d\mu = 0$$
> 
> Xét trên tập $D \setminus N$, theo định nghĩa của $N$, ta có $f_1(x) = f_2(x)$ tại mọi điểm $x \in D \setminus N$. Do đó, tích phân của chúng trên miền này hoàn toàn bằng nhau:
> $$\int_{D \setminus N} f_1 d\mu = \int_{D \setminus N} f_2 d\mu$$
> 
> Ráp các kết quả lại với nhau, ta có:
> $$\int_D f_1 d\mu = \int_{D \setminus N} f_1 d\mu + \int_N f_1 d\mu = \int_{D \setminus N} f_2 d\mu + 0 = \int_{D \setminus N} f_2 d\mu + \int_N f_2 d\mu = \int_D f_2 d\mu$$
> Vậy $\int_D f_1 d\mu = \int_D f_2 d\mu$.






$\xi$
# 1. Một số Bất đẳng thức

> [!thm] (Bất đẳng thức Markov)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $f$ là một hàm đo được không âm, khả tích Lebesgue trên $X$. Khi đó, với mọi hằng số $a > 0$, ta luôn có bất đẳng thức:
> $$\mu(\{x \in X : f(x) \ge a\}) \le \frac{1}{a} \int_X f d\mu$$

> [!prf] 
> Đặt $E_a = \{x \in X : f(x) \ge a\}$ là tập mức cần đánh giá độ đo. Vì $f$ là hàm đo được nên tập $E_a$ là tập đo được thuộc $\mathfrak{A}$.
> 
> Ta xây dựng một hàm đơn giản dựa trên hàm chỉ thị $\chi_{E_a}$ như sau:
> $$g(x) = a \cdot \chi_{E_a}(x) = \begin{cases} 
> a & \text{nếu } x \in E_a \\ 
> 0 & \text{nếu } x \notin E_a 
> \end{cases}$$
> 
> Tiến hành so sánh giá trị của hàm số $g(x)$ và $f(x)$ trên toàn không gian $X$:
> - Với mọi $x \in E_a$: theo định nghĩa của tập mức $E_a$, ta có $f(x) \ge a = g(x)$.
> - Với mọi $x \notin E_a$: do $f$ là hàm không âm trên $X$, ta có $f(x) \ge 0 = g(x)$.
> 
> Từ hai trường hợp trên, ta suy ra bất đẳng thức $g(x) \le f(x)$ đúng với mọi $x \in X$.
> 
> Áp dụng tính đơn điệu của tích phân hàm đo được không âm, lấy tích phân Lebesgue hai vế trên miền $X$ ta thu được:
> $$\int_X g d\mu \le \int_X f d\mu$$
> $$\implies \int_X a \cdot \chi_{E_a} d\mu \le \int_X f d\mu$$
> 
> Tiếp tục áp dụng tính thuần nhất của tích phân, ta đưa hằng số số thực $a > 0$ ra ngoài dấu tích phân ở vế trái:
> $$a \int_X \chi_{E_a} d\mu \le \int_X f d\mu$$
> 
> Theo định nghĩa tích phân của hàm chỉ thị, ta có $\int_X \chi_{E_a} d\mu = \mu(E_a)$. Thay thế vào hệ thức trên:
> $$a \cdot \mu(E_a) \le \int_X f d\mu$$
> 
> Vì hằng số $a > 0$, ta chia cả hai vế cho $a$ mà không làm đảo chiều bất đẳng thức:
> $$\mu(E_a) \le \frac{1}{a} \int_X f d\mu$$
> 
> Thay ngược trở lại $E_a = \{x \in X : f(x) \ge a\}$, ta có điều phải chứng minh:
> $$\mu(\{x \in X : f(x) \ge a\}) \le \frac{1}{a} \int_X f d\mu$$
> Chứng minh hoàn tất. 

> [!thm] (Ứng dụng Markov 1)
> Cho hàm số $f$ khả tích Lebesgue trên không gian độ đo $(X, \mathfrak{A}, \mu)$. 
> Nếu $\int_X |f| d\mu = 0$ thì $f = 0$ hầu khắp nơi (a.e.) trên $X$.

> [!prf] 
> Đặt $g(x) = |f(x)|$. Do $f$ đo được nên $g$ là hàm đo được không âm trên $X$. Theo giả thiết, ta có $\int_X g d\mu = 0$.
> 
> Để chứng minh $f = 0$ hầu khắp nơi (a.e.), ta cần chứng minh tập hợp các điểm làm cho $f(x) \neq 0$ có độ đo bằng $0$. Đặt tập hợp này là $A$:
> $$A = \{x \in X : f(x) \neq 0\} = \{x \in X : |f(x)| > 0\}$$
> 
> Với mỗi số nguyên dương $n \in \mathbb{Z}^+$, ta định nghĩa các tập mức tăng dần:
> $$A_n = \left\{x \in X : |f(x)| \ge \frac{1}{n}\right\}$$
> 
> Áp dụng Bất đẳng thức Markov cho hàm không âm $g = |f|$ với hằng số $a = \frac{1}{n} > 0$, ta có:
> $$\mu(A_n) \le \frac{1}{\frac{1}{n}} \int_X |f| d\mu = n \cdot \int_X |f| d\mu$$
> 
> Do giả thiết $\int_X |f| d\mu = 0$, vế phải luôn bằng $0$ với mọi $n$:
> $$\mu(A_n) \le n \cdot 0 = 0 \implies \mu(A_n) = 0 $$
> 
> Mặt khác, nhận thấy rằng nếu một điểm $x \in A$ (tức là $|f(x)| > 0$), theo tính chất Archimedes, luôn tồn tại một số nguyên dương $n$ đủ lớn sao cho $|f(x)| \ge \frac{1}{n}$, nghĩa là $x \in A_n$. Do đó, ta có biểu diễn tập hợp $A$ dưới dạng hợp của dãy tập tăng $A_n$:
> $$A = \bigcup_{n=1}^\infty A_n$$
> 
> Áp dụng tính chất $\sigma$-dưới cộng tính của độ đo $\mu$, ta đánh giá độ đo của tập $A$:
> $$0 \le \mu(A) = \mu\left(\bigcup_{n=1}^\infty A_n\right) \le \sum_{n=1}^\infty \mu(A_n) = \sum_{n=1}^\infty 0 = 0$$
> 
> Suy ra $\mu(A) = \mu(\{x \in X : f(x) \neq 0\}) = 0$. 
> 
> Theo định nghĩa, điều này khẳng định $f = 0$ hầu khắp nơi (a.e.) trên $X$. Chứng minh hoàn tất. 

> [!thm] (Bổ đề 9.3: Ứng dụng Markov 2)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $f$ là một hàm đo được nhận giá trị thực mở rộng trên tập $D \in \mathfrak{A}$. 
> Nếu $\int_E f d\mu$ tồn tại và $\int_E f d\mu \ge 0$ với mọi tập con đo được $E$ của $D$, thì $f \ge 0$ hầu khắp nơi (a.e.) trên $D$.

> [!prf] 
> Để chứng minh $f \ge 0$ hầu khắp nơi, ta cần chứng minh tập hợp các điểm làm cho $f(x) < 0$ có độ đo bằng $0$. Đặt tập hợp này là $A$:
> $$A = \{x \in D : f(x) < 0\}$$
> 
> Tương tự như kỹ thuật Markov, với mỗi số nguyên dương $n \in \mathbb{Z}^+$, ta định nghĩa các tập mức cắt phần âm của hàm số:
> $$A_n = \left\{x \in D : f(x) \le -\frac{1}{n}\right\}$$
> 
> Xét trên tập $A_n$, ta luôn có $f(x) \le -\frac{1}{n}$. Nhân hai vế với $-1$ và lấy tích phân hai vế trên miền $A_n$.
> Áp dụng bất đẳng thức Markov cho hàm dương $-f$ và đổi chiều bất đẳng thức:
> $$\int_{A_n} f d\mu \le \int_{A_n} \left(-\frac{1}{n}\right) d\mu = -\frac{1}{n} \mu(A_n)$$
> 
> Mặt khác, theo giả thiết của bổ đề, tích phân của $f$ trên bất kỳ tập con đo được nào của $D$ cũng đều không âm. Vì $A_n \subset D$ là một tập đo được, ta phải có:
> $$\int_{A_n} f d\mu \ge 0$$
> 
> Kết hợp hai điều kiện trên, ta thu được chuỗi bất đẳng thức:
> $$0 \le \int_{A_n} f d\mu \le -\frac{1}{n} \mu(A_n)$$
> $$\implies \frac{1}{n} \mu(A_n) \le 0$$
> 
> Vì độ đo $\mu(A_n)$ luôn không âm và $n > 0$, bất đẳng thức trên chỉ có thể xảy ra khi:
> $$\mu(A_n) = 0 \quad (\forall n \in \mathbb{Z}^+)$$
> 
> Theo tính chất Archimedes, nếu $f(x) < 0$ thì luôn tồn tại một số nguyên dương $n$ đủ lớn sao cho $f(x) \le -\frac{1}{n}$. Do đó, tập $A$ là hợp của tất cả các tập $A_n$:
> $$A = \bigcup_{n=1}^\infty A_n$$
> 
> Áp dụng tính chất $\sigma$-bán cộng tính của độ đo:
> $$0 \le \mu(A) = \mu\left(\bigcup_{n=1}^\infty A_n\right) \le \sum_{n=1}^\infty \mu(A_n) = \sum_{n=1}^\infty 0 = 0$$
> 
> Suy ra $\mu(A) = \mu(\{x \in D : f(x) < 0\}) = 0$. Điều này khẳng định $f \ge 0$ hầu khắp nơi (a.e.) trên $D$. 

> [!thm] (Bổ đề 8.2a)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $f$ là hàm khả tích trên $X$ (tức là $\int_{X} fd\mu < \infty$). Đặt $A = \{ x \in X: f(x)< \infty\}$. Chứng minh rằng $\mu(X \setminus A) = 0$.

> [!prf]
> Tập hợp cần chứng minh có độ đo bằng $0$ là phần bù của $A$, ký hiệu là $E$: 
> $$E = X \setminus A = \{x \in X : f(x) = \infty\}$$
> 
> Với mỗi số nguyên dương $n \in \mathbb{N}^*$, ta định nghĩa tập mức $E_n$ như sau:
> $$E_n = \{x \in X : f(x) \ge n\}$$
> 
> Vì mỗi điểm $x \in E$, tức là $f(x) = \infty$, thì giá trị $f(x)$ luôn lớn hơn mọi số nguyên $n$. Do đó, ta có quan hệ bao hàm:
> $$E \subseteq E_n $$
> Áp dụng tính đơn điệu của độ đo:
> $$\mu(E) \le \mu(E_n) \quad (\forall n \in \mathbb{N}^*)$$
>
> Áp dụng bất đẳng thức Markov cho hàm $f$ không âm, ta có:
> $$\mu(E_n) \le \frac{1}{n} \int_X f d\mu$$
> Theo giả thiết, hàm $f$ khả tích nên tích phân của nó trên $X$ là một hằng số thực hữu hạn. Ta đặt $M = \int_X f d\mu < \infty$, bất đẳng thức trên trở thành:
> $$\mu(E_n) \le \frac{M}{n}$$
> 
> Tổng hợp lại, ta thu được chuỗi bất đẳng thức:
> $$0 \le \mu(E) \le \mu(E_n) \le \frac{M}{n}$$
> Cho $n \to \infty$, vì $M$ là một hằng số hữu hạn nên giới hạn của vế phải $\lim_{n \to \infty} \frac{M}{n} = 0$.
> Vậy ta kết luận $\mu(E) = \mu(X \setminus A) = 0$.

> [!thm] (Bất đẳng thức Chebyshev)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $f$ là một hàm đo được nhận giá trị thực mở rộng trên $X$. Giả sử $|f|^p$ khả tích Lebesgue trên $X$ với một hằng số $p \in (0, \infty)$ cố định.
> Khi đó, với mọi hằng số $a > 0$, ta luôn có bất đẳng thức:
> $$\mu(\{x \in X : |f(x)| \ge a\}) \le \frac{1}{a^p} \int_X |f|^p d\mu$$

> [!prf] Chứng minh (Dựa trên Bất đẳng thức Markov)
> Đặt $g(x) = |f(x)|^p$. Vì $f$ là hàm đo được nên hàm số $g$ cũng đo được. Đồng thời, theo định nghĩa của trị tuyệt đối và lũy thừa với $p > 0$, $g$ là một hàm số đo được không âm trên $X$.
> 
> Mặt khác, theo giả thiết $|f|^p$ khả tích Lebesgue trên $X$, suy ra:
> $$\int_X g d\mu = \int_X |f|^p d\mu < \infty$$
> 
> Xét tập mức cần đánh giá độ đo với hằng số $a > 0$. Do phép toán lũy thừa bậc $p$ đồng biến trên tập số thực không âm, ta có sự tương đương:
> $$\{x \in X : |f(x)| \ge a\} = \{x \in X : |f(x)|^p \ge a^p\} = \{x \in X : g(x) \ge a^p\}$$
> 
> Lấy độ đo $\mu$ hai vế của đẳng thức tập hợp trên:
> $$\mu(\{x \in X : |f(x)| \ge a\}) = \mu(\{x \in X : g(x) \ge a^p\})$$
> 
> Do $g$ thỏa mãn đầy đủ các điều kiện là một hàm số đo được không âm và khả tích trên $X$, áp dụng trực tiếp Bất đẳng thức Markov cho hàm số $g$ với mức chặn hằng số dương là $a^p > 0$, ta có:
> $$\mu(\{x \in X : g(x) \ge a^p\}) \le \frac{1}{a^p} \int_X g d\mu$$
> 
> Thay ngược định nghĩa của hàm số $g(x) = |f(x)|^p$ vào bất đẳng thức vừa thu được, ta được:
> $$\mu(\{x \in X : |f(x)| \ge a\}) \le \frac{1}{a^p} \int_X |f|^p d\mu$$
> 
> Chứng minh hoàn tất. 

> [!thm] (Prob 8.20)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $f$ là một hàm đo được nhận giá trị thực mở rộng trên $X$. Giả sử tồn tại một hằng số $p \in (0, \infty)$ sao cho $|f|^p$ khả tích Lebesgue trên $X$ ($\int_X |f|^p d\mu < \infty$). 
> Khi đó, ta có giới hạn sau:
> $$\lim_{\lambda \to \infty} \lambda^p \mu(\{x \in X : |f(x)| \ge \lambda\}) = 0$$

> [!prf] 
> 
> **Bước 1: Chuyển đổi về hàm số đo được không âm**
> Đặt $g(x) = |f(x)|^p$. Do $f$ đo được nên $g$ là hàm số đo được không âm trên $X$. Theo giả thiết về tính khả tích của $|f|^p$, ta có:
> $$\int_X g d\mu = \int_X |f|^p d\mu < \infty$$
> 
> Với mỗi số thực $\lambda > 0$, do hàm số lũy thừa bậc $p$ đồng biến trên $[0, \infty)$, ta có sự tương đương giữa các tập mức:
> $$\{x \in X : |f(x)| \ge \lambda\} = \{x \in X : |f(x)|^p \ge \lambda^p\} = \{x \in X : g(x) \ge \lambda^p\}$$
> 
> Lấy độ đo $\mu$ hai vế, ta viết lại thành:
> $$\lambda^p \mu(\{x \in X : |f(x)| \ge \lambda\}) = \lambda^p \mu(\{x \in X : g(x) \ge \lambda^p\})$$
> 
> **Bước 2: Áp dụng bất đẳng thức Chebyshev trên tập mức**
> Kí hiệu $E_\lambda = \{x \in X : g(x) \ge \lambda^p\}$. Trên tập $E_\lambda$, ta luôn có đánh giá chặn dưới cho hàm số: $g(x) \ge \lambda^p$.
> 
> Áp dụng tính đơn điệu của tích phân Lebesgue cho hàm không âm, lấy tích phân hai vế trên riêng miền tập mức $E_\lambda$, ta thu được:
> $$\int_{E_\lambda} g d\mu \ge \int_{E_\lambda} \lambda^p d\mu = \lambda^p \int_{E_\lambda} 1 d\mu = \lambda^p \mu(E_\lambda)$$
> 
> Viết lại bất đẳng thức trên, ta có chặn trên:
> $$0 \le \lambda^p \mu(\{x \in X : g(x) \ge \lambda^p\}) \le \int_{E_\lambda} g d\mu$$
> 
> **Bước 3: Đánh giá giới hạn bằng tính liên tục của tích phân**
> Khi cho $\lambda \to \infty$, hằng số $\lambda^p \to \infty$. Xét giới hạn của dãy các tập mức giảm dần $E_\lambda$:
> $$\bigcap_{\lambda > 0} \{x \in X : g(x) \ge \lambda^p\} = \{x \in X : g(x) = \infty\}$$
> 
> Vì hàm $g$ khả tích ($\int_X g d\mu < \infty$), tập hợp các điểm làm cho hàm nhận giá trị vô cùng bắt buộc phải là một tập null có độ đo bằng $0$:
> $$\mu(\{x \in X : g(x) = \infty\}) = 0$$
> 
> Theo tính chất liên tục từ trên của tích phân Lebesgue, phần đuôi tích phân trên miền tập mức sẽ triệt tiêu khi lấy giới hạn:
> $$\lim_{\lambda \to \infty} \int_{\{g \ge \lambda^p\}} g d\mu = \int_{\{g = \infty\}} g d\mu = 0$$
> 
> **Bước 4: Kết luận**
> Nhờ chuỗi bất đẳng thức thiết lập ở Bước 2:
> $$0 \le \lambda^p \mu(\{x \in X : |f(x)| \ge \lambda\}) \le \int_{\{g \ge \lambda^p\}} g d\mu$$
> 
> Khi $\lambda \to \infty$, vế phải tiến về $0$. Theo định lý giới hạn kẹp, đại lượng ở giữa buộc phải tiến về $0$:
> $$\lim_{\lambda \to \infty} \lambda^p \mu(\{x \in X : |f(x)| \ge \lambda\}) = 0$$
> 
> Chứng minh hoàn tất. 

# 2. Biểu diễn Layer Cake

> [!thm] Định lý 8.24 (Biểu diễn Layer Cake)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo và $f$ là một hàm đo được không âm, khả tích trên $X$.
> (a) Định nghĩa hàm $g$ trên $[0, \infty)$ bởi $g(t) = \mu(\{x \in X : f(x) > t\})$. Khi đó:
>   $$\int_X f d\mu = \int_{[0, \infty)} g(t) \mu_L(dt) = \int_{[0, \infty)} \mu(\{x \in X : f(x) > t\}) \mu_L(dt)$$
> (b) Định nghĩa hàm $h$ trên $[0, \infty)$ bởi $h(t) = \mu(\{x \in X : f(x) \ge t\})$. Khi đó:
>   $$\int_X f d\mu = \int_{[0, \infty)} h(t) \mu_L(dt) = \int_{[0, \infty)} \mu(\{x \in X : f(x) \ge t\}) \mu_L(dt)$$
> 
> *(Trong đó $\mu_L$ là độ đo Lebesgue trên trục số thực).*

> [!prf] Chứng minh
> Quá trình chứng minh được thực hiện qua 3 bước dựa trên định nghĩa cận trên đúng ($\sup$) của tích phân Lebesgue, đi từ lớp hàm đơn giản lên hàm đo được tổng quát.
> 
> **Ý (a):**
> 
> Ta kiểm tra tính xác định của hàm diện tích đuôi $g(t)$. Vì hàm số $f$ khả tích trên $X$, áp dụng Bất đẳng thức Markov, với mọi mức $t > 0$ cố định ta luôn có đánh giá:
> $$g(t) = \mu(\{f > t\}) \le \frac{1}{t} \int_X f d\mu < \infty$$
> Hệ thức này khẳng định $g(t)$ nhận giá trị thực hữu hạn trên khoảng $(0, \infty)$. Tại điểm cô lập $t=0$, giá trị của $g(t)$ có thể tiến ra vô cùng, tuy nhiên vì đơn điểm $\{0\}$ có độ đo Lebesgue $\mu_L(\{0\}) = 0$ nên không làm ảnh hưởng đến giá trị của tích phân.
> 
> **Bước 1: Chứng minh đẳng thức đúng cho hàm đơn giản $s \in S(X)$**
> Giả sử hàm đơn giản không âm $s(x)$ được biểu diễn dưới dạng chuẩn tắc:
> $$s(x) = \sum_{i=1}^n c_i \chi_{A_i}(x)$$
> với thang giá trị được sắp thứ tự $0 = c_0 < c_1 < c_2 < \dots < c_n$ và các tập tạo ảnh $A_i = s^{-1}(\{c_i\})$ tương ứng là họ các tập hợp đo được, rời nhau đôi một và lập thành một phân hoạch của không gian $X$.
> 
> Xét hàm mức đuôi tương ứng $g_s(t) = \mu(\{x \in X : s(x) > t\})$. Với mỗi $t \in [c_{i-1}, c_i)$, điều kiện $s(x) > t$ bắt buộc điểm $x$ phải nhận các giá trị từ mức $c_i$ trở lên, nghĩa là $x \in \bigcup_{j=i}^n A_j$. Do tính cộng tính hữu hạn của độ đo $\mu$, ta thu được:
> $$g_s(t) = \sum_{j=i}^n \mu(A_j) \quad \text{với mọi } t \in [c_{i-1}, c_i)$$
> Mặt khác, với mọi mức $t \ge c_n$, tập mức $\{s > t\}$ trở thành tập rỗng nên $g_s(t) = 0$. 
> 
> Tích phân Lebesgue của hàm bậc thang $g_s(t)$ trên $[0, \infty)$ được tính bằng cách tách miền tích phân theo các khoảng phân hoạch giá trị:
> $$\int_{[0, \infty)} g_s(t) \mu_L(dt) = \sum_{i=1}^n \int_{c_{i-1}}^{c_i} \left( \sum_{j=i}^n \mu(A_j) \right) dt = \sum_{i=1}^n (c_i - c_{i-1}) \sum_{j=i}^n \mu(A_j)$$
> Thực hiện hoán đổi thứ tự lấy tổng để nhóm các hệ số theo từng độ đo $\mu(A_j)$:
> $$\sum_{j=1}^n \mu(A_j) \sum_{i=1}^j (c_i - c_{i-1}) = \sum_{j=1}^n \mu(A_j) (c_j - c_0) = \sum_{j=1}^n c_j \mu(A_j) = \int_X s \, d\mu$$
> Đẳng thức trên xác nhận mệnh đề đúng với mọi hàm đơn giản không âm khả tích.
> 
> **Bước 2: Tìm chặn trên $(\le)$ dựa vào định nghĩa $\sup$**
> Theo định nghĩa chuẩn tắc của tích phân Lebesgue đối với hàm đo được không âm:
> $$\int_X f \, d\mu = \sup_{0 \le s \le f} \int_X s \, d\mu \quad (s \in S(X))$$
> Xét một hàm đơn giản bất kỳ thỏa mãn điều kiện kẹp $0 \le s \le f$. Khi đó, với mỗi mức $t \ge 0$, ta có quan hệ bao hàm tập hợp tương ứng trên trục hoành:
> $$\{s > t\} \subset \{f > t\} \implies \mu(\{s > t\}) \le \mu(\{f > t\})$$
> Lấy tích phân hai vế theo biến $t$ trên miền $[0, \infty)$ đối với độ đo Lebesgue và đồng thời áp dụng kết quả đã thiết lập ở Bước 1 cho hàm đơn giản $s$, ta thu được đánh giá:
> $$\int_X s \, d\mu = \int_0^\infty \mu(\{s > t\}) \, dt \le \int_0^\infty \mu(\{f > t\}) \, dt$$
> Bất đẳng thức này đúng với mọi hàm đơn giản $s$ nằm dưới $f$. Do đó, khi lấy cận trên đúng ($\sup$) cho vế trái trên lớp hàm $0 \le s \le f$, ta thu được vế trái của hệ thức kẹp:
> $$\int_X f \, d\mu = \sup_{0 \le s \le f} \int_X s \, d\mu \le \int_0^\infty \mu(\{f > t\}) \, dt \tag{1}$$
> 
> **Bước 3: Dùng Định lý xấp xỉ và MCT để thiết lập dấu bằng**
> Dựa vào Định lý xấp xỉ cho hàm đơn giản, tồn tại một dãy hàm đơn giản không âm $(\varphi_n)_{n=1}^\infty$ hội tụ đơn điệu tăng về hàm giới hạn: $\varphi_n \uparrow f$. Tại mỗi mức $t \ge 0$ cố định, ta xây dựng dãy các tập mức tương ứng $E_n = \{\varphi_n > t\}$. Tính chất đơn điệu tăng của dãy hàm kéo theo $E_n$ là một dãy tập tăng dần theo quan hệ bao hàm: $E_n \subset E_{n+1}$.
> 
> Hơn nữa, nhờ tính chất hội tụ điểm $\varphi_n(x) \to f(x)$, ta dễ dàng kiểm tra được $\bigcup_{n=1}^\infty E_n = \{f > t\}$. Sử dụng tính chất liên tục từ dưới của độ đo $\mu$, ta có sự hội tụ của dãy số thực:
> $$\lim_{n \to \infty} \mu(\{\varphi_n > t\}) = \mu(\{f > t\}) \quad (\text{dãy tăng đơn điệu})$$
> Ta áp dụng Định lý Hội tụ Đơn điệu (MCT) for tích phân của dãy hàm mức trên khoảng $[0, \infty)$:
> $$\lim_{n \to \infty} \int_0^\infty \mu(\{\varphi_n > t\}) \, dt = \int_0^\infty \mu(\{f > t\}) \, dt$$
> Mặt khác, lập luận MCT tương tự trên không gian $X$ cho ta:
> $$\lim_{n \to \infty} \int_X \varphi_n \, d\mu = \int_X f \, d\mu$$
> Do mối quan hệ đẳng thức giữa tích phân và hàm mức đã được thiết lập ở Bước 1 cho từng hàm đơn giản $\varphi_n$, hai giá trị giới hạn trên bắt buộc phải trùng nhau. Suy ra:
> $$\int_X f \, d\mu = \int_0^\infty \mu(\{f > t\}) \, dt \tag{2}$$
> Kết hợp đánh giá $(1)$ và $(2)$, ta hoàn tất chứng minh đẳng thức cho Ý (a).
> 
> **Ý (b): Mở rộng định lý cho dấu $\ge$**
> 
> Ta xét hai hàm số đo được trên miền $[0, \infty)$: 
> $$g(t) = \mu(\{f > t\}) \quad \text{và} \quad h(t) = \mu(\{f \ge t\})$$
> 
> Do có quan hệ bao hàm $\{f > t\} \subset \{f \ge t\}$, tính đơn điệu của độ đo cho phép ta khẳng định $g(t) \le h(t)$ với mọi $t \ge 0$. Phần chênh lệch giữa hai hàm số tại một điểm $t$ bất kỳ chính là độ đo của phần biên (tập tạo ảnh tại đúng giá trị $t$):
> $$h(t) - g(t) = \mu(\{f \ge t\} \setminus \{f > t\}) = \mu(\{f = t\})$$
> 
> Gọi $T$ là tập hợp tất cả các mức $t$ mà tại đó $h(t)$ và $g(t)$ nhận giá trị khác nhau:
> $$T = \{t \in [0, \infty) : \mu(\{f = t\}) > 0\}$$
> 
> Để đánh giá kích thước của tập $T$, ta nhận thấy họ các tập hợp $\mathcal{F} = \big\{ \{f = t\} \big\}_{t \in T}$ là một họ gồm các tập con rời nhau đôi một của $X$ (bởi vì tại một điểm $x$, hàm $f$ không thể đồng thời nhận hai giá trị khác nhau). 
> 
> Mặt khác, vì hàm $f$ khả tích ($\int_X f d\mu < \infty$), theo Bổ đề về tính đếm được của họ tập rời nhau có độ đo dương: mọi họ tập hợp rời nhau có độ đo dương trên không gian $X$, nhiều nhất chỉ có thể là một tập đếm được. Do đó, tập các mức giá trị $T$ là tập đếm được.
> 
> Vì mọi tập con đếm được trên trục số thực $\mathbb{R}$ đều có độ đo Lebesgue bằng không, ta suy ra $\mu_L(T) = 0$. Khẳng định này dẫn đến:
> $$h(t) = g(t) \quad \text{hầu khắp nơi (a.e.) đối với độ đo } \mu_L \text{ trên } [0, \infty)$$
> 
> Theo tính chất của tích phân Lebesgue, hai hàm bằng nhau hầu khắp nơi thì có giá trị tích phân bằng nhau. Kết hợp với đẳng thức đã chứng minh ở ý (a), ta thu được kết luận:
> $$\int_{[0, \infty)} h(t) \mu_L(dt) = \int_{[0, \infty)} g(t) \mu_L(dt) = \int_X f \, d\mu$$
> 
> Ý (b) được chứng minh hoàn tất.

> [!thm] (Biểu diễn Layer Cake: Cách 2)
> Cho $(X, \mathcal{A}, \mu)$ là một không gian độ đo và $f$ là một hàm đo được không âm, khả tích trên $X$.
> 
> (a) Định nghĩa hàm $g$ trên $[0, \infty)$ bởi $g(t) = \mu(\{x \in X : f(x) > t\})$. Khi đó:
> $$\int_X f \, d\mu = \int_{[0, \infty)} g(t) \, \mu_L(dt) = \int_{[0, \infty)} \mu(\{x \in X : f(x) > t\}) \, \mu_L(dt)$$
> 
> (b) Định nghĩa hàm $h$ trên $[0, \infty)$ bởi $h(t) = \mu(\{x \in X : f(x) \ge t\})$. Khi đó:
> $$\int_X f \, d\mu = \int_{[0, \infty)} h(t) \, \mu_L(dt) = \int_{[0, \infty)} \mu(\{x \in X : f(x) \ge t\}) \, \mu_L(dt)$$
> 
> *(Trong đó $\mu_L$ là độ đo Lebesgue trên trục số thực).*

> [!prf] 
> 
> **Ý (a):**
> Ta biểu diễn độ đo của tập mức thông qua tích phân của hàm đặc trưng $\chi$:
> $$\int_{[0, \infty)} \mu(\{x \in X : f(x) > t\}) \, dt = \int_0^\infty \left( \int_X \chi_{\{f > t\}}(x) \, d\mu(x) \right) dt$$
> 
> Vì hàm đặc trưng luôn không âm ($\chi \ge 0$), ta được quyền áp dụng Định lý Tonelli để hoán vị thứ tự lấy tích phân:
> $$= \int_X \left( \int_0^\infty \chi_{\{f > t\}}(x) \, dt \right) d\mu(x)$$
> 
> Nhận xét rằng đối với một điểm $x$ cố định, điều kiện $f(x) > t$ tương đương với việc biến $t$ nằm trong khoảng $[0, f(x))$. Do đó, ta có thể đổi vai trò của hàm đặc trưng từ biến $x$ sang biến $t$:
> $$\chi_{\{f > t\}}(x) = \chi_{[0, f(x))}(t)$$
> 
> Thay vào tích phân bên trong, ta đi tính chiều dài (độ đo Lebesgue) của khoảng $[0, f(x))$:
> $$= \int_X \left( \int_0^\infty \chi_{[0, f(x))}(t) \, dt \right) d\mu(x) = \int_X f(x) \, d\mu(x)$$
> 
> Ý (a) được chứng minh hoàn tất.
> 
> **Ý (b):**
> Ta phân rã tập mức chứa dấu bằng thành hợp của hai tập rời nhau:
> $$\{x \in X : f(x) \ge t\} = \{x \in X : f(x) > t\} \cup \{x \in X : f(x) = t\}$$
> 
> Áp dụng tính cộng tính của độ đo $\mu$ và lấy tích phân lặp theo biến $t$ trên $[0, \infty)$, ta có:
> $$\int_0^\infty \mu(\{f \ge t\}) \, dt = \int_0^\infty \mu(\{f > t\}) \, dt + \int_0^\infty \mu(\{f = t\}) \, dt$$
> 
> Theo kết quả đã chứng minh ở Ý (a), số hạng đầu tiên ở vế phải chính bằng $\int_X f \, d\mu$. Xét số hạng thứ hai, ta áp dụng Định lý Tonelli để hoán đổi thứ tự tích phân:
> $$\int_0^\infty \mu(\{f = t\}) \, dt = \int_0^\infty \left( \int_X \chi_{\{f=t\}}(x) \, d\mu(x) \right) dt \overset{\text{Tonelli}}{=} \int_X \left( \int_0^\infty \chi_{\{f(x)\}}(t) \, dt \right) d\mu(x)$$
> 
> Vì điểm $\{f(x)\}$ có độ đo Lebesgue $\mu_L$ bằng $0$, tích phân bên trong triệt tiêu: $\int_0^\infty \chi_{\{f(x)\}}(t) \, dt = \mu_L(\{f(x)\}) = 0$. 
> 
> Do đó, số hạng thứ hai bằng $0$, dẫn đến đẳng thức:
> $$\int_0^\infty \mu(\{f \ge t\}) \, dt = \int_X f \, d\mu$$
> 
> Ý (b) được chứng minh hoàn tất.

$\xi$
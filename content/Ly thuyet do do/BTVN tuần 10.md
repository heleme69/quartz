> [!thm] (Obs 7.5)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $D \in \mathfrak{A}$. Giả sử $\varphi$ là một hàm đơn giản không âm ($\varphi \ge 0$) trên $D$. Khi đó, $\int_D \varphi \, d\mu = 0$ khi và chỉ khi:
> $$\mu(\{x \in D : \varphi(x) \neq 0\}) = 0$$

> [!prf] 
> Giả sử biểu diễn chính tắc của hàm đơn giản không âm $\varphi$ trên tập $D$ là:
> $$\varphi = \sum_{i=1}^n a_i \chi_{D_i}$$
> với các $D_i \in \mathfrak{A}$ rời nhau đôi một, $\bigcup_{i=1}^n D_i = D$, và vì $\varphi \ge 0$ nên tất cả các hệ số $a_i \ge 0$.
> 
> Gọi $I = \{i \in \{1, \dots, n\} : a_i > 0\}$ là tập các chỉ số ứng với các hệ số thực sự dương.
> Khi đó, tập các điểm mà $\varphi(x) \neq 0$ chính là $\bigcup_{i \in I} D_i$. Do các tập $D_i$ rời nhau, độ đo của tập này là:
>   $$\mu(\{x \in D : \varphi(x) \neq 0\}) = \sum_{i \in I} \mu(D_i) \quad (1)$$
> Mặt khác, theo định nghĩa tích phân của hàm đơn giản và quy ước $0 \cdot \infty = 0$, các số hạng có $a_i = 0$ sẽ triệt tiêu. Do đó:
>   $$\int_D \varphi \, d\mu = \sum_{i \in I} a_i \mu(D_i) \quad (2)$$
> 
> Từ $(1)$ và $(2)$, vì mọi hệ số $a_i$ ($i \in I$) đều là các số thực dương ($a_i > 0$), và các độ đo $\mu(D_i) \ge 0$, ta có chuỗi lập luận tương đương:
> $$\int_D \varphi \, d\mu = 0 \iff \sum_{i \in I} a_i \mu(D_i) = 0$$
> Vì đây là tổng các đại lượng không âm, một tổng bằng $0$ khi và chỉ khi từng số hạng bằng $0$. Do $a_i > 0$, điều này tương đương với:
> $$
> \begin{align}
> &\iff \mu(D_i) = 0 \text{ với mọi } i \in I \\
> &\iff \sum_{i \in I} \mu(D_i) = 0 \\
> &\iff \mu(\{x \in D : \varphi(x) \neq 0\}) = 0
> \end{align}
> $$

> [!prp] (Bổ đề 8.2)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo. Giả sử $f$ là một hàm đo được, không âm, nhận giá trị thực mở rộng trên tập $D \in \mathfrak{A}$ (tức là $f: D \to [0, \infty]$). Chứng minh rằng: Nếu $f > 0$ a.e. trên $D$ và $\int_D f d\mu = 0$, thì $\mu(D) = 0$.

> [!prf]
> Theo định nghĩa, điều này có nghĩa là tập hợp các điểm mà $f(x) \neq 0$ có độ đo bằng $0$. Vì $f \ge 0$, ta có:
> $$\mu(\{x \in D : f(x) > 0\}) = 0 \tag{1}$$
> 
> Mặt khác, giả thiết cũng cho $f > 0$ hầu khắp nơi trên $D$. Điều này có nghĩa là tập hợp các điểm mà mệnh đề này sai có độ đo bằng $0$:
> $$\mu(\{x \in D : f(x) \le 0\}) = 0 \tag{2}$$
> 
> Chú ý rằng toàn bộ không gian nền $D$ có thể được phân hoạch thành hai tập hợp rời nhau dựa trên giá trị của $f$:
> $$D = \{x \in D : f(x) > 0\} \cup \{x \in D : f(x) \le 0\}$$
> 
> Áp dụng tính cộng tính hữu hạn của độ đo $\mu$ trên các tập rời nhau, kết hợp với $(1)$ và $(2)$, ta có:
> $$\mu(D) = \mu(\{x \in D : f(x) > 0\}) + \mu(\{x \in D : f(x) \le 0\}) = 0 + 0 = 0$$
> Vậy $\mu(D) = 0$.

> [!thm] (Biểu diễn tích phân qua hàm đơn giản)
> Cho $f \ge 0$ là một hàm đo được trên $D$. Nhắc lại định nghĩa tích phân Lebesgue cho hàm đo được không âm:
> $$\int_D f \, d\mu = \sup_{0 \le s \le f} \int_D s \, d\mu$$
> trong đó $s \in S(D)$ (lớp các hàm đơn giản đo được). Khi đó, ta có đẳng thức:
> $$\int_D f \, d\mu = \int_0^\infty \mu(\{f \ge t\}) \, dt$$

> [!prf] 
> Quá trình chứng minh được thực hiện qua 3 bước dựa trên định nghĩa cận trên đúng ($\sup$) của tích phân Lebesgue, đi từ lớp hàm đơn giản lên hàm đo được tổng quát.
> 
> **Bước 1: Chứng minh đẳng thức đúng cho hàm đơn giản $s \in S(D)$**
> 
> Giả sử hàm đơn giản không âm $s(x)$ được biểu diễn dưới dạng chuẩn tắc:
> $$s(x) = \sum_{i=1}^n c_i \chi_{A_i}(x)$$
> với thang giá trị được sắp thứ tự $0 = c_0 < c_1 < c_2 < \dots < c_n$ và các tập tạo ảnh $A_i = s^{-1}(\{c_i\})$ tương ứng là họ các tập hợp đo được, rời nhau đôi một và lập thành một phân hoạch của không gian $D$.
> 
> Xét hàm mức đuôi tương ứng $h_s(t) = \mu(\{x \in D : s(x) \ge t\})$. Với mỗi $t \in (c_{i-1}, c_i]$, điều kiện $s(x) \ge t$ bắt buộc điểm $x$ phải nhận các giá trị từ mức $c_i$ trở lên, nghĩa là $x \in \bigcup_{j=i}^n A_j$. Do tính cộng tính hữu hạn của độ đo $\mu$, ta thu được:
> $$h_s(t) = \sum_{j=i}^n \mu(A_j) \quad \text{với mọi } t \in (c_{i-1}, c_i]$$
> Mặt khác, với mọi mức $t > c_n$, tập mức $\{s \ge t\}$ trở thành tập rỗng nên $h_s(t) = 0$.
> 
> Tích phân Lebesgue của hàm bậc thang $h_s(t)$ trên $[0, \infty)$ được tính bằng cách tách miền tích phân theo các khoảng phân hoạch giá trị:
> $$\int_0^\infty \mu(\{s \ge t\}) \, dt = \sum_{i=1}^n \int_{c_{i-1}}^{c_i} \left( \sum_{j=i}^n \mu(A_j) \right) dt = \sum_{i=1}^n (c_i - c_{i-1}) \sum_{j=i}^n \mu(A_j)$$
> 
> Thực hiện hoán đổi thứ tự lấy tổng để nhóm các hệ số theo từng độ đo $\mu(A_j)$:
> $$\sum_{j=1}^n \mu(A_j) \sum_{i=1}^j (c_i - c_{i-1}) = \sum_{j=1}^n \mu(A_j) (c_j - c_0) = \sum_{j=1}^n c_j \mu(A_j) = \int_D s \, d\mu$$
> Đẳng thức trên xác nhận mệnh đề đúng với mọi hàm đơn giản không âm.
> 
> **Bước 2: Tìm chặn trên $(\le)$ dựa vào định nghĩa $\sup$**
> 
> Xét một hàm đơn giản bất kỳ thỏa mãn điều kiện kẹp $0 \le s \le f$. Khi đó, với mỗi mức $t \ge 0$, ta có quan hệ bao hàm tập hợp tương ứng trên trục hoành:
> $$\{s \ge t\} \subset \{f \ge t\} \implies \mu(\{s \ge t\}) \le \mu(\{f \ge t\})$$
> 
> Lấy tích phân hai vế theo biến $t$ trên miền $[0, \infty)$ đối với độ đo Lebesgue và đồng thời áp dụng kết quả đã thiết lập ở Bước 1 cho hàm đơn giản $s$, ta thu được đánh giá:
> $$\int_D s \, d\mu = \int_0^\infty \mu(\{s \ge t\}) \, dt \le \int_0^\infty \mu(\{f \ge t\}) \, dt$$
> 
> Bất đẳng thức này đúng với mọi hàm đơn giản $s$ nằm dưới $f$. Do đó, khi lấy cận trên đúng ($\sup$) cho vế trái trên lớp hàm $0 \le s \le f$ theo đúng định nghĩa tích phân, ta thu được vế trái của hệ thức kẹp:
> $$\int_D f \, d\mu = \sup_{0 \le s \le f} \int_D s \, d\mu \le \int_0^\infty \mu(\{f \ge t\}) \, dt \tag{1}$$
> 
> **Bước 3: Dùng Định lý xấp xỉ và MCT để thiết lập dấu bằng**
> 
> Dựa vào Định lý xấp xỉ cho hàm đơn giản, tồn tại một dãy hàm đơn giản không âm $(\varphi_n)_{n=1}^\infty$ hội tụ đơn điệu tăng về hàm giới hạn: $\varphi_n \uparrow f$. Tại mỗi mức $t \ge 0$ cố định, ta xây dựng dãy các tập mức tương ứng $E_n = \{\varphi_n \ge t\}$. Tính chất đơn điệu tăng của dãy hàm kéo theo $E_n$ là một dãy tập tăng dần theo quan hệ bao hàm: $E_n \subset E_{n+1}$.
> 
> Hơn nữa, nhờ tính chất hội tụ điểm $\varphi_n(x) \to f(x)$, ta dễ dàng kiểm tra được $\bigcup_{n=1}^\infty E_n = \{f \ge t\}$. Sử dụng tính chất liên tục từ dưới của độ đo $\mu$, ta có sự hội tụ của dãy số thực:
> $$\lim_{n \to \infty} \mu(\{\varphi_n \ge t\}) = \mu(\{f \ge t\}) \quad (\text{dãy tăng đơn điệu})$$
> 
> Áp dụng Định lý Hội tụ Đơn điệu (MCT) cho tích phân của dãy hàm mức trên khoảng $[0, \infty)$:
> $$\lim_{n \to \infty} \int_0^\infty \mu(\{\varphi_n \ge t\}) \, dt = \int_0^\infty \mu(\{f \ge t\}) \, dt$$
> 
> Mặt khác, lập luận MCT tương tự trên không gian $D$ cho ta:
> $$\lim_{n \to \infty} \int_D \varphi_n \, d\mu = \int_D f \, d\mu$$
> 
> Do mối quan hệ đẳng thức giữa tích phân và hàm mức đã được thiết lập ở Bước 1 cho từng hàm đơn giản $\varphi_n$, hai giá trị giới hạn trên bắt buộc phải trùng nhau. Suy ra:
> $$\int_D f \, d\mu = \int_0^\infty \mu(\{f \ge t\}) \, dt \tag{2}$$
> 
> Kết hợp đánh giá $(1)$ và $(2)$, ta hoàn tất chứng minh.




$\xi$
> [!thm] (Định lý 8.24: Biểu diễn Layer Cake)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo và $f$ là một hàm đo được, không âm và khả tích trên $X$.
> 
> (a) Định nghĩa hàm $g$ trên $[0, \infty)$ bởi $g(t) = \mu(\{x \in X : f(x) > t\})$. Khi đó:
> $$\int_X f d\mu = \int_{[0, \infty)} g(t) \mu_L(dt) = \int_{[0, \infty)} \mu(\{x \in X : f(x) > t\}) \mu_L(dt)$$
> 
> (b) Định nghĩa hàm $h$ trên $[0, \infty)$ bởi $h(t) = \mu(\{x \in X : f(x) \ge t\})$. Khi đó:
> $$\int_X f d\mu = \int_{[0, \infty)} h(t) \mu_L(dt) = \int_{[0, \infty)} \mu(\{x \in X : f(x) \ge t\}) \mu_L(dt)$$
> *(Trong đó $\mu_L$ là độ đo Lebesgue trên trục số thực).*

> [!prf] 
> **Phần (a):**
> Cho $f$ là hàm đo được, không âm và khả tích trên $X$, tức là $\int_X f d\mu < \infty$. Ta cần chứng minh:
> $$\int_X f d\mu = \int_{[0, \infty)} g(t) \mu_L(dt)$$
> với $g(t) = \mu(\{x \in X : f(x) > t\})$.
> 
> Lưu ý về tính hữu hạn của $g(t)$: Vì $f$ khả tích, theo Bất đẳng thức Markov, với mọi $t > 0$ ta có:
> $$t \cdot \mu(\{f > t\}) \le \int_{\{f > t\}} f d\mu \le \int_X f d\mu < \infty$$
> Suy ra $g(t) \le \frac{1}{t} \int_X f d\mu < \infty$. Do đó, $g(t)$ là một số thực hữu hạn với mọi $t > 0$. Hàm $g(t)$ chỉ có thể nhận giá trị vô cùng tại $t = 0$, mà điểm $t=0$ có độ đo Lebesgue bằng $0$ nên không ảnh hưởng đến tính xác định của tích phân.
> 
> **Bước 1: Chứng minh định lý đúng cho hàm đơn giản**
> 
> Giả sử $\varphi$ là một hàm đơn giản đo được, không âm có biểu diễn chuẩn tắc:
> $$\varphi(x) = \sum_{i=1}^n c_i \chi_{E_i}(x)$$
> với $0 = c_0 < c_1 < c_2 < \dots < c_n$ và các tập $E_i$ rời nhau, $\bigcup_{i=1}^n E_i = X$.
> Do $\varphi \le f$ và $f$ khả tích, $\varphi$ cũng khả tích (Tính đơn điệu của tích phân). Suy ra $\int_X \varphi d\mu = \sum_{i=1}^n c_i \mu(E_i) < \infty$, dẫn đến $\mu(E_i) < \infty$ với mọi $i \ge 1$.
> 
> Xét hàm $g_\varphi(t) = \mu(\{x: \varphi(x) > t\})$. Nếu $t \in [c_{i-1}, c_i)$, điều kiện $\varphi(x) > t$ tương đương với $x \in \bigcup_{j=i}^n E_j$.
> Áp dụng tính cộng tính của độ đo $\mu$ trên các tập rời nhau, ta có:
> $$g_\varphi(t) = \sum_{j=i}^n \mu(E_j) \quad \text{với } t \in [c_{i-1}, c_i)$$
> Và $g_\varphi(t) = 0$ với mọi $t \ge c_n$. Hàm $g_\varphi(t)$ là một hàm bậc thang (nhận giá trị hữu hạn).
> 
> Ta tính tích phân Lebesgue của $g_\varphi(t)$ trên $[0, \infty)$. Bằng cách phân hoạch $[0, \infty)$ thành các khoảng rời nhau $[c_{i-1}, c_i)$ và áp dụng tính cộng tính hữu hạn trên miền tích phân, ta tách được:
> $$\int_{[0, \infty)} g_\varphi(t) \mu_L(dt) = \sum_{i=1}^n \int_{[c_{i-1}, c_i)} \left( \sum_{j=i}^n \mu(E_j) \right) dt$$
> Bên trong dấu tích phân, biểu thức $\sum_{j=i}^n \mu(E_j)$ là một hằng số đối với biến $t$. Áp dụng tính thuần nhất của tích phân (đưa hằng số ra ngoài):
> $$
> \begin{align}
>     \int_{[0, \infty)} g_\varphi(t) \mu_L(dt) &= \sum_{i=1}^n \left( \sum_{j=i}^n \mu(E_j) \right) \int_{[c_{i-1}, c_i)} 1 \, dt \\
>     &= \sum_{i=1}^n (c_i - c_{i-1}) \sum_{j=i}^n \mu(E_j)
> \end{align}
> $$
>
> Đảo thứ tự lấy tổng (nhóm các hệ số theo $\mu(E_j)$):
> $$\sum_{j=1}^n \mu(E_j) \sum_{i=1}^j (c_i - c_{i-1}) = \sum_{j=1}^n \mu(E_j) (c_j - c_0) = \sum_{j=1}^n c_j \mu(E_j)$$
> Nhận thấy vế phải chính là định nghĩa tích phân của hàm đơn giản $\varphi$. Vậy:
> $$\int_{[0, \infty)} g_\varphi(t) \mu_L(dt) = \int_X \varphi d\mu$$
> Đẳng thức đúng cho mọi hàm đơn giản khả tích.
> 
> **Bước 2: Dùng MCT nâng lên thành hàm $f$ tổng quát**
> Vì $f$ đo được không âm, theo Định lý xấp xỉ (Lemma 8.6), tồn tại dãy hàm đơn giản không âm $\varphi_n \uparrow f$.
> 
> Đặt $g_n(t) = \mu(\{\varphi_n > t\})$. Do $\varphi_n \le \varphi_{n+1} \le f$, ta có chuỗi bao hàm thức:
> $$\{\varphi_n > t\} \subset \{\varphi_{n+1} > t\} \subset \{f > t\}$$
> Nghĩa là dãy tập hợp $A_n = \{\varphi_n > t\}$ là một dãy tăng.
> Hơn nữa, nếu $f(x) > t$, vì $\varphi_n(x) \to f(x)$, tồn tại $N$ đủ lớn để $\varphi_n(x) > t$ với mọi $n \ge N$. Tức là $\bigcup_{n=1}^\infty A_n = \{f > t\}$. 
> 
> Áp dụng tính liên tục từ dưới của độ đo $\mu$, ta có:
> $$\lim_{n \to \infty} g_n(t) = \lim_{n \to \infty} \mu(A_n) = \mu(\{f > t\}) = g(t) \quad (\forall t \ge 0)$$
> Như vậy, $g_n(t) \uparrow g(t)$. Áp dụng Định lý Hội tụ Đơn điệu (MCT) cho cả hai không gian tích phân, ta thu được:
> $$\int_X f d\mu \stackrel{(MCT)}{=} \lim_{n \to \infty} \int_X \varphi_n d\mu \stackrel{(B1)}{=} \lim_{n \to \infty} \int_{[0, \infty)} g_n(t) \mu_L(dt) \stackrel{(MCT)}{=} \int_{[0, \infty)} g(t) \mu_L(dt)$$
> Ý (a) được chứng minh hoàn tất.
> 
> **Phần (b): Mở rộng định lý cho dấu $\ge$**
> Ta xét hai hàm số $g(t) = \mu(\{f > t\})$ và $h(t) = \mu(\{f \ge t\})$ trên miền $[0, \infty)$. Ta cần chứng minh:
> $$\int_{[0, \infty)} h(t) \mu_L(dt) = \int_X f d\mu$$
> 
> Do bao hàm thức $\{f > t\} \subset \{f \ge t\}$, theo tính đơn điệu của độ đo $\mu$, ta có $g(t) \le h(t)$. Hiệu số giữa hai hàm tại mỗi điểm $t$ chính là độ đo của phần biên sai khác:
> $$h(t) - g(t) = \mu(\{f \ge t\} \setminus \{f > t\}) = \mu(\{f = t\})$$
> 
> Xét tập hợp $T$ chứa tất cả các mức $t$ mà tại đó $h(t) \neq g(t)$, tức là:
> $$T = \{t \in [0, \infty) : \mu(\{f = t\}) > 0\}$$
> 
> Nhận thấy rằng các tập mức $\{f = t\}$ với $t \in T$ là một họ các tập hợp rời nhau đôi một trong $X$. Dựa theo: Bổ đề về tính đếm được của họ tập rời nhau có độ đo dương, ta suy ra tập chỉ số $T$ bắt buộc phải là một tập hợp đếm được.
> 
> Vì mọi tập con đếm được trên trục thực đều là tập có độ đo Lebesgue bằng không (tập null), ta có $\mu_L(T) = 0$. Điều này khẳng định rằng:
> $$h(t) = g(t) \quad \text{hầu khắp nơi (a.e.) trên } [0, \infty) \text{ đối với độ đo } \mu_L$$
> 
> Áp dụng tính chất bằng nhau hầu khắp nơi của tích phân Lebesgue, kết hợp với kết quả của ý (a), ta thu được đẳng thức cần chứng minh:
> $$\int_{[0, \infty)} h(t) \mu_L(dt) = \int_{[0, \infty)} g(t) \mu_L(dt) = \int_X f d\mu$$
> 
> Định lý được chứng minh hoàn tất. 

> [!thm] (Biểu diễn tích phân qua hàm đơn giản)
> Cho $f \ge 0$ là một hàm đo được trên $D$. Nhắc lại định nghĩa tích phân Lebesgue cho hàm đo được không âm:
> $$\int_D f \, d\mu = \sup_{0 \le s \le f} \int_D s \, d\mu$$
> trong đó $s \in S(D)$ (lớp các hàm đơn giản đo được). 
> Khi đó, ta có đẳng thức:
> $$\int_D f \, d\mu = \int_0^\infty \mu(\{f \ge t\}) \, dt$$
> (Xem thêm Định lý 8.24: Biểu diễn Layer Cake)

> [!prf]
> Quá trình chứng minh được thực hiện qua 3 bước, đi từ hàm đơn giản lên hàm tổng quát.
> 
> **Bước 1: Chứng minh đẳng thức đúng cho hàm đơn giản $s \in S(D)$**
> Giả sử $s$ có dạng chuẩn tắc: $s(x) = \sum_{i=1}^n c_i \chi_{A_i}(x)$ với $0 = c_0 < c_1 < c_2 < \dots < c_n$ và các tập $A_i$ rời nhau tạo thành phân hoạch của $D$.
> Hàm $h_s(t) = \mu(\{s \ge t\})$ là một hàm bậc thang. Khi $t \in (c_{i-1}, c_i]$, điều kiện $s(x) \ge t$ bắt buộc $x$ phải thuộc các tập từ $A_i$ trở đi. Do đó:
> $$h_s(t) = \sum_{j=i}^n \mu(A_j) \quad \text{với } t \in (c_{i-1}, c_i]$$
> Tích phân của $h_s(t)$ trên $[0, \infty)$ là:
> $$\int_0^\infty \mu(\{s \ge t\}) \, dt = \sum_{i=1}^n \int_{c_{i-1}}^{c_i} \left( \sum_{j=i}^n \mu(A_j) \right) dt = \sum_{i=1}^n (c_i - c_{i-1}) \sum_{j=i}^n \mu(A_j)$$
> Đổi thứ tự lấy tổng (gom nhóm theo $\mu(A_j)$):
> $$\sum_{j=1}^n \mu(A_j) \sum_{i=1}^j (c_i - c_{i-1}) = \sum_{j=1}^n \mu(A_j) (c_j - c_0) = \sum_{j=1}^n c_j \mu(A_j) = \int_D s \, d\mu$$
> Vậy với mọi hàm đơn giản $s \ge 0$, ta luôn có: $\int_D s \, d\mu = \int_0^\infty \mu(\{s \ge t\}) \, dt$.
> 
> **Bước 2: Chứng minh chiều bất đẳng thức $(\le)$ dựa vào định nghĩa $\sup$**
> Xét một hàm đơn giản bất kỳ $0 \le s \le f$. 
> Kéo theo đó, với mọi $t \ge 0$, ta có quan hệ bao hàm tập hợp:
> $$\{s \ge t\} \subset \{f \ge t\} \implies \mu(\{s \ge t\}) \le \mu(\{f \ge t\})$$
> Lấy tích phân hai vế theo biến $t$ trên $[0, \infty)$ và sử dụng kết quả Bước 1:
> $$\int_D s \, d\mu = \int_0^\infty \mu(\{s \ge t\}) \, dt \le \int_0^\infty \mu(\{f \ge t\}) \, dt$$
> Bất đẳng thức này đúng với *mọi* hàm đơn giản $s \le f$. Lấy cận trên đúng ($\sup$) cho vế trái theo đúng định nghĩa tích phân, ta được:
> $$\int_D f \, d\mu = \sup_{0 \le s \le f} \int_D s \, d\mu \le \int_0^\infty \mu(\{f \ge t\}) \, dt \tag{1}$$
> 
> **Bước 3: Dùng Định lý xấp xỉ và MCT để được dấu bằng**
> Theo Định lý xấp xỉ bằng hàm đơn giản, tồn tại một dãy hàm đơn giản không âm $(\varphi_n)$ sao cho $\varphi_n \uparrow f$.
> Khi đó, các tập hợp $\{\varphi_n \ge t\}$ tạo thành một dãy tập tăng và hội tụ về $\{f \ge t\}$. Theo tính liên tục từ dưới của độ đo:
> $$\lim_{n \to \infty} \mu(\{\varphi_n \ge t\}) = \mu(\{f \ge t\}) \quad (\text{tăng dần})$$
> Áp dụng Định lý Hội tụ Đơn điệu (MCT) cho tích phân Lebesgue trên $[0, \infty)$, ta có:
> $$\lim_{n \to \infty} \int_0^\infty \mu(\{\varphi_n \ge t\}) \, dt = \int_0^\infty \mu(\{f \ge t\}) \, dt$$
> Mặt khác, theo MCT áp dụng trên không gian $D$:
> $$\lim_{n \to \infty} \int_D \varphi_n \, d\mu = \int_D f \, d\mu$$
> Vì đẳng thức đã xảy ra ở Bước 1 đối với từng hàm đơn giản $\varphi_n$, hai giới hạn trên bắt buộc phải bằng nhau:
> $$\int_D f \, d\mu = \int_0^\infty \mu(\{f \ge t\}) \, dt \tag{2}$$
> 
> Kết hợp $(1)$ và $(2)$, ta có đẳng thức cần chứng minh. 

> [!def] (Định nghĩa: Khả tích đều qua ngưỡng cắt (Truncation Definition))
> Dãy hàm $f_n \subset L^1(D, \mathfrak{A}, \mu)$ được gọi là khả tích đều nếu khối lượng ở phần chóp vượt ngưỡng $M$ của tất cả các hàm đều hội tụ về $0$ một cách đồng thời:
> $$\lim_{M \to \infty} \sup_{n} \int_{\{|f_n| > M\}} |f_n| d\mu = 0$$
> Ký hiệu viết gọn bằng hàm chỉ thị: $\int_D |f_n| \mathbf{1}_{\{|f_n| > M\}} d\mu < \varepsilon$.

> [!thm] (Định lý Tương đương của Tính khả tích đều)
> Cho không gian độ đo hữu hạn $\mu(D) < \infty$ và dãy $\{f_n\} \subset L^1$. Hai mệnh đề sau là tương đương:
> 1. Định nghĩa ngưỡng cắt: $\lim_{M \to \infty} \sup_{n} \int_{\{|f_n| > M\}} |f_n| = 0$.
> 2. Tính chất 1 + Bị chặn $L^1$: Dãy $f_n$ bị chặn đều trong $L^1$ (tức $\sup_n \int_D |f_n| < \infty$) và thỏa mãn Tính liên tục tuyệt đối đều ($\forall \varepsilon > 0, \exists \delta > 0 : \mu(A) < \delta \implies \sup_n \int_A |f_n| < \varepsilon$).

> [!prf] 
> **Chiều ($\implies$):**
> Với $\varepsilon > 0$, tồn tại $M > 0$ sao cho $\int_{\{|f_n| > M\}} |f_n| < \varepsilon, \forall n$.
> - *Chứng minh bị chặn $L^1$:* $$\int_D |f_n| = \int_{\{|f_n| \le M\}} |f_n| + \int_{\{|f_n| > M\}} |f_n| \le M \cdot \mu(D) + \varepsilon$$
>   Vì $\mu(D) < \infty$ nên giới hạn trên không phụ thuộc $n$, suy ra dãy bị chặn đều trong $L^1$.
> - *Chứng minh Tính chất 1:* Với mọi tập $A \in \mathcal{A}$:
>   $$\int_A |f_n| = \int_{A \cap \{|f_n| \le M\}} |f_n| + \int_{A \cap \{|f_n| > M\}} |f_n| \le M \cdot \mu(A) + \varepsilon$$
>   Ta chọn $\delta = \frac{\varepsilon}{M}$. Khi $\mu(A) < \delta$, ta có $\int_A |f_n| \le M \cdot \left(\frac{\varepsilon}{M}\right) + \varepsilon = 2\varepsilon$. 
>   Điều này chứng minh $(2)$.
> 
> **Chiều ($\impliedby$):**
> Giả sử dãy bị chặn đều bởi $\sup_n \int_D |f_n| = C < \infty$ và thỏa mãn Tính chất 1.
> - Theo Tính chất 1, với $\varepsilon > 0$ cho trước, tồn tại $\delta > 0$ sao cho $\mu(A) < \delta \Rightarrow \int_A |f_n| < \varepsilon, \forall n$.
> - Áp dụng Bất đẳng thức Markov, ta đánh giá độ đo của tập vượt ngưỡng:
>   $$\mu(\{|f_n| > M\}) \le \frac{1}{M} \int_D |f_n| \le \frac{C}{M}, \quad \forall n$$
> - Ta chọn $M$ đủ lớn sao cho $\frac{C}{M} < \delta$. 
>   Khi đó, đặt $A = \{|f_n| > M\}$, ta có $\mu(A) < \delta$. Theo giả thiết của Tính chất 1, ta lập tức có $\int_{\{|f_n| > M\}} |f_n| < \varepsilon, \forall n$. 
>   Điều này chứng minh $(1)$.

> [!thm] (Prob 8.17: Hội tụ hầu khắp nơi từ hội tụ trong $L^p$)
> Cho $(X, \mathcal{A}, \mu)$ là một không gian độ đo. Cho $(f_n : n \in \mathbb{N})$ và $f$ là các hàm nhận giá trị thực mở rộng, $\mathcal{A}$-đo được trên $D \in \mathcal{A}$, và giả sử $f$ nhận giá trị thực hầu khắp nơi trên $D$. 
> Giả sử tồn tại một dãy số dương $(\varepsilon_n : n \in \mathbb{N})$ sao cho:
> 1. $\sum_{n \in \mathbb{N}} \varepsilon_n < \infty$;
> 2. $\int_D |f_n - f|^p d\mu < \varepsilon_n$ với mọi $n \in \mathbb{N}$, với một $p \in (0, \infty)$ cố định.
> Chứng minh rằng $f_n \to f$ hầu khắp nơi (a.e.) trên $D$.

> [!prf] 
> 
> **Bước 1: Xác định tập hợp "xấu" và áp dụng Bất đẳng thức Markov**
> Cố định một số thực $\delta > 0$ bất kỳ. Ta định nghĩa $A_n(\delta)$ là tập hợp các điểm mà tại đó hàm $f_n$ sai lệch so với $f$ từ mức $\delta$ trở lên:
> $$A_n(\delta) = \{x \in D : |f_n(x) - f(x)| \ge \delta\}$$
> 
> Nhận thấy rằng bất phương trình $|f_n(x) - f(x)| \ge \delta$ tương đương với $|f_n(x) - f(x)|^p \ge \delta^p$ (do $\delta > 0$ và $p > 0$).
> 
> Áp dụng Bất đẳng thức Markov cho hàm không âm $|f_n - f|^p$ với mức chặn là $\delta^p$, ta có đánh giá:
> $$\mu(A_n(\delta)) = \mu\left(\{x \in D : |f_n(x) - f(x)|^p \ge \delta^p\}\right) \le \frac{1}{\delta^p} \int_D |f_n - f|^p d\mu$$
> 
> Theo giả thiết thứ hai của đề bài, ta tiếp tục chặn trên độ đo này:
> $$\mu(A_n(\delta)) \le \frac{\varepsilon_n}{\delta^p}$$
> 
> **Bước 2: Áp dụng Bổ đề Borel-Cantelli**
> Lấy tổng độ đo của các tập $A_n(\delta)$ trên toàn bộ dãy $n \in \mathbb{N}$:
> $$\sum_{n=1}^\infty \mu(A_n(\delta)) \le \sum_{n=1}^\infty \frac{\varepsilon_n}{\delta^p} = \frac{1}{\delta^p} \sum_{n=1}^\infty \varepsilon_n$$
> 
> Theo giả thiết thứ nhất, chuỗi $\sum \varepsilon_n$ hội tụ (có tổng hữu hạn), dẫn đến:
> $$\sum_{n=1}^\infty \mu(A_n(\delta)) < \infty$$
> 
> Áp dụng Bổ đề Borel-Cantelli: vì tổng các độ đo hữu hạn, tập giới hạn trên (limsup) của chuỗi các biến cố này sẽ có độ đo bằng $0$. Đặt:
> $$B_\delta = \limsup_{n \to \infty} A_n(\delta) = \bigcap_{k=1}^\infty \bigcup_{n=k}^\infty A_n(\delta)$$
> Ý nghĩa của $B_\delta$ là tập hợp các điểm $x$ mà $|f_n(x) - f(x)| \ge \delta$ xảy ra vô số lần. Bổ đề Borel-Cantelli cho ta:
> $$\mu(B_\delta) = 0$$
> 
> **Bước 3: Lập luận đếm được để bao quát toàn miền hội tụ**
> Để dãy $f_n(x)$ không hội tụ về $f(x)$, chắc chắn phải tồn tại một khoảng mở $\delta > 0$ nào đó sao cho khoảng cách giữa chúng lớn hơn $\delta$ vô số lần. 
> Ta chọn $\delta$ chạy qua dãy các số hữu tỉ giảm dần $1/k$ với $k \in \mathbb{Z}^+$. Tập hợp các điểm phân kỳ (kí hiệu là $N$) sẽ nằm trọn trong hợp của các tập $B_{1/k}$:
> $$N = \left\{x \in D : f_n(x) \not\to f(x)\right\} \subset \bigcup_{k=1}^\infty B_{1/k}$$
> 
> Áp dụng tính $\sigma$-bán cộng tính của độ đo:
> $$\mu(N) \le \sum_{k=1}^\infty \mu\left(B_{1/k}\right) = \sum_{k=1}^\infty 0 = 0$$
> 
> Vậy tập các điểm mà $f_n$ không hội tụ về $f$ là một tập có độ đo $0$. Kết luận: $f_n \to f$ hầu khắp nơi trên $D$. 

> [!thm] ( Cách 2: Hội tụ hầu khắp nơi từ hội tụ trong $L^p$)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo. Cho $(f_n)_{n \in \mathbb{N}}$ và $f$ là các hàm nhận giá trị thực mở rộng, đo được trên $D \in \mathfrak{A}$. Giả sử $f$ nhận giá trị thực hữu hạn hầu khắp nơi trên $D$. 
> Giả sử tồn tại một dãy số dương $(\varepsilon_n)_{n \in \mathbb{N}}$ sao cho:
> 1. $\sum_{n \in \mathbb{N}} \varepsilon_n < \infty$
> 2. $\int_D |f_n - f|^p d\mu < \varepsilon_n$ với mọi $n \in \mathbb{N}$, với một $p \in (0, \infty)$ cố định.
> 
> Chứng minh rằng $f_n \to f$ hầu khắp nơi (a.e.) trên $D$.

> [!prf] 
> 
> **Bước 1: Lấy tổng các tích phân sai số**
> Từ giả thiết thứ hai, ta lấy tổng hai vế cho tất cả $n \in \mathbb{N}$. Kết hợp với giả thiết thứ nhất, ta có chuỗi các tích phân hội tụ:
> $$\sum_{n \in \mathbb{N}} \left( \int_D |f_n - f|^p d\mu \right) \le \sum_{n \in \mathbb{N}} \varepsilon_n < \infty$$
> 
> **Bước 2: Đổi chỗ tổng và tích phân**
> Vì $|f_n - f|^p \ge 0$ với mọi $n$, ta áp dụng tính $\sigma$-cộng tính của tích phân để hoán vị dấu tổng và dấu tích phân:
> $$\int_D \left( \sum_{n \in \mathbb{N}} |f_n - f|^p \right) d\mu = \sum_{n \in \mathbb{N}} \left( \int_D |f_n - f|^p d\mu \right) < \infty$$
> 
> **Bước 3: Tính hữu hạn a.e của tích phân hàm không âm**
> Đặt hàm số $g(x) = \sum_{n \in \mathbb{N}} |f_n(x) - f(x)|^p$. Nhận thấy $g(x)$ là một hàm đo được, không âm.
> Vì tích phân của $g(x)$ trên $D$ là hữu hạn, theo Bổ đề 8.2, hàm $g(x)$ bắt buộc phải nhận giá trị hữu hạn hầu khắp nơi trên $D$.
> 
> Mặt khác, theo giả thiết, $f(x)$ cũng nhận giá trị thực hữu hạn hầu khắp nơi. Gọi $N$ là tập hợp chứa các điểm làm cho $g(x) = \infty$ hoặc $f(x)$ vô hạn. Ta có $\mu(N) = 0$. 
> Với mọi $x \in D \setminus N$, ta có:
> $$\sum_{n \in \mathbb{N}} |f_n(x) - f(x)|^p < \infty$$
> 
> **Bước 4: Sử dụng điều kiện cần của chuỗi số hội tụ**
> Xét tại một điểm $x \in D \setminus N$ cố định, ta có một chuỗi số thực hội tụ. Theo tính chất cơ bản của chuỗi, nếu một chuỗi hội tụ thì số hạng tổng quát của nó phải tiến về $0$. Do đó:
> $$\lim_{n \to \infty} |f_n(x) - f(x)|^p = 0$$
> 
> **Bước 5: Kết luận**
> Vì $p \in (0, \infty)$ là một số dương cố định, $|f_n(x) - f(x)|^p \to 0$ hoàn toàn tương đương với:
> $$\lim_{n \to \infty} |f_n(x) - f(x)| = 0 \implies \lim_{n \to \infty} f_n(x) = f(x)$$
> 
> Lập luận này đúng với mọi $x \in D \setminus N$ (nơi $\mu(N) = 0$). Vậy ta kết luận dãy hàm $f_n$ hội tụ về $f$ hầu khắp nơi trên $D$. 










$\int_{E}f\ge 0$ $\forall E \subset D, E \in \mathfrak{A}$ $\implies$ $f\ge 0$ a.e trên $D$

> [!prp] Mệnh đề (Các tính chất cơ bản của tích phân đối với hàm đo được không âm)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và tập đo được $D \in \mathfrak{A}$. Giả sử $f, g$ là các hàm đo được không âm trên $D$. Khi đó tích phân Lebesgue thỏa mãn các tính chất sau:
> 
> (a) Tính đơn điệu (Monotonicity): Nếu $f \le g$ hầu khắp nơi (a.e.) trên $D$, thì $\int_D f \, d\mu \le \int_D g \, d\mu$.
> 
> (b) Tính tuyến tính (Linearity): 
> 1. $\int_D (f + g) \, d\mu = \int_D f \, d\mu + \int_D g \, d\mu$
> 2. $\int_D cf \, d\mu = c \int_D f \, d\mu$ với mọi hằng số không âm $c \ge 0$.
> 
> (c) Tính bất biến hầu khắp nơi: Nếu $f = g$ hầu khắp nơi (a.e.) trên $D$, thì $\int_D f \, d\mu = \int_D g \, d\mu$.
> 
> (d) Tính cộng tính hữu hạn của dãy hàm: Cho $(f_n)_{n=1}^N$ là một họ hữu hạn các hàm đo được không âm trên $D$, khi đó $\int_D \left( \sum_{n=1}^N f_n \right) d\mu = \sum_{n=1}^N \int_D f_n \, d\mu$.
> 
> (e) Tính cộng tính hữu hạn trên tập hợp rời nhau: Giả sử $(D_n)_{n=1}^N$ là một họ hữu hạn các tập đo được rời nhau đôi một sao cho $D = \bigcup_{n=1}^N D_n$, khi đó $\int_D f \, d\mu = \sum_{n=1}^N \int_{D_n} f \, d\mu$.
> 
> (g) Định lý Hội tụ Đơn điệu trên tập hợp: Nếu $(E_n)_{n=1}^{\infty}$ là một dãy tập đo được tăng dần tiến về $D$ (tức là $E_n \uparrow D$), khi đó $\lim_{n \to \infty} \int_{E_n} f \, d\mu = \int_D f \, d\mu$.
> 
> (h) Hệ quả $\sigma$-cộng tính của chuỗi hàm: Cho $(f_n)_{n=1}^{\infty}$ là một dãy đếm được các hàm đo được không âm trên $D$, khi đó $\int_D \left( \sum_{n=1}^{\infty} f_n \right) d\mu = \sum_{n=1}^{\infty} \int_D f_n \, d\mu$.

> [!prf] 
> **Chứng minh tính chất a:**
> Gọi $S_f = \{\varphi \text{ đơn giản} : 0 \le \varphi \le f \text{ a.e.}\}$ và $S_g = \{\psi \text{ đơn giản} : 0 \le \psi \le g \text{ a.e.}\}$. Vì $f \le g$ hầu khắp nơi trên $D$, nên bất kỳ hàm đơn giản nào thỏa mãn $\varphi \le f$ a.e. thì cũng thỏa mãn $\varphi \le g$ a.e. Do đó, ta có mối quan hệ bao hàm $S_f \subset S_g$. Lấy cận trên đúng (supremum) trên cả hai tập hợp theo định nghĩa tích phân, ta được:
> $$\int_D f \, d\mu = \sup_{\varphi \in S_f} \int_D \varphi \, d\mu \le \sup_{\psi \in S_g} \int_D \psi \, d\mu = \int_D g \, d\mu$$
> 
> **Chứng minh tính chất b:**
> 3. Theo Định lý xấp xỉ, tồn tại hai dãy hàm đơn giản không âm tăng dần $\varphi_n \uparrow f$ và $\psi_n \uparrow g$. Khi đó, dãy tổng $(\varphi_n + \psi_n)$ cũng là dãy các hàm đơn giản không âm tăng dần và hội tụ điểm về $f + g$. Áp dụng Định lý Hội tụ Đơn điệu (MCT) và tính tuyến tính của tích phân hàm đơn giản, ta có:
>    $$\int_D (f + g) \, d\mu = \lim_{n \to \infty} \int_D (\varphi_n + \psi_n) \, d\mu = \lim_{n \to \infty} \int_D \varphi_n \, d\mu + \lim_{n \to \infty} \int_D \psi_n \, d\mu = \int_D f \, d\mu + \int_D g \, d\mu$$
> 4. Nếu $c = 0$, đẳng thức hiển nhiên đúng theo quy ước $0 \cdot \infty = 0$. Nếu $c > 0$, với mọi hàm đơn giản $\varphi \le f \iff c\varphi \le cf$. Do tính tuyến tính của hàm đơn giản, lấy supremum hai vế ta rút ra $\int_D cf \, d\mu = c \int_D f \, d\mu$.
> 
> **Chứng minh tính chất c:**
> Từ giả thiết $f = g$ hầu khắp nơi trên $D$, ta suy ra đồng thời $f \le g$ a.e. và $g \le f$ a.e. Áp dụng hai lần tính chất đơn điệu (tính chất a) vừa chứng minh ở trên, ta thu được:
> $$\int_D f \, d\mu \le \int_D g \, d\mu \quad \text{và} \quad \int_D g \, d\mu \le \int_D f \, d\mu \implies \int_D f \, d\mu = \int_D g \, d\mu$$
> 
> **Chứng minh tính chất d:**
> Khẳng định này được chứng minh bằng phương pháp quy nạp toán học dựa trên kết quả cộng tính của hai hàm số trong tính chất b. Giả sử hệ thức đúng đến bước $N-1$, ta thực hiện phân rã:
> $$\int_D \left( \sum_{n=1}^N f_n \right) d\mu = \int_D \left( \sum_{n=1}^{N-1} f_n + f_N \right) d\mu = \int_D \left( \sum_{n=1}^{N-1} f_n \right) d\mu + \int_D f_N \, d\mu = \sum_{n=1}^{N-1} \int_D f_n \, d\mu + \int_D f_N \, d\mu = \sum_{n=1}^N \int_D f_n \, d\mu$$
> 
> **Chứng minh tính chất e:**
> Do các tập $D_n$ rời nhau đôi một và phủ miền $D$, ta có phân rã của hàm chỉ thị: $\chi_D = \sum_{n=1}^N \chi_{D_n}$. Nhân hai vế với hàm không âm $f$, ta được: $f \cdot \chi_D = \sum_{n=1}^N (f \cdot \chi_{D_n})$. Lấy tích phân trên toàn bộ không gian $X$, áp dụng tính cộng tính hữu hạn của dãy hàm (tính chất d) và định nghĩa tích phân trên tập con, ta thu được:
> $$\int_D f \, d\mu = \int_X f \cdot \chi_D \, d\mu = \int_X \left( \sum_{n=1}^N f \cdot \chi_{D_n} \right) d\mu = \sum_{n=1}^N \int_X f \cdot \chi_{D_n} \, d\mu = \sum_{n=1}^N \int_{D_n} f \, d\mu$$
> 
> **Chứng minh tính chất g:**
> Xét dãy hàm phụ $f_n(x) = f(x) \cdot \chi_{E_n}(x)$. 
> * Do dãy tập hợp $(E_n)$ tăng dần ($E_1 \subset E_2 \subset \dots$) nên dãy hàm chỉ thị $(\chi_{E_n})$ là dãy tăng không giảm. Vì $f \ge 0$, dãy hàm $(f_n)$ cũng tăng đơn điệu không giảm: $0 \le f_1 \le f_2 \le \dots$
> * Với mỗi $x \in D$, vì $\bigcup_{n=1}^\infty E_n = D$, luôn tồn tại một chỉ số $n_0$ đủ lớn sao cho $x \in E_n$ với mọi $n \ge n_0$. Khi đó $\chi_{E_n}(x) = 1$, dẫn đến giới hạn điểm: $\lim_{n \to \infty} f_n(x) = f(x)$.
> 
> Dãy $(f_n)$ thỏa mãn đầy đủ điều kiện của Định lý Hội tụ Đơn điệu (MCT) gốc trên không gian $X$. Tiến hành đẩy giới hạn qua dấu tích phân và thu gọn về miền tập con:
> $$\lim_{n \to \infty} \int_{E_n} f \, d\mu = \lim_{n \to \infty} \int_X f \cdot \chi_{E_n} \, d\mu = \int_X \left(\lim_{n \to \infty} f \cdot \chi_{E_n}\right) d\mu = \int_X f \cdot \chi_D \, d\mu = \int_D f \, d\mu$$
> 
> **Chứng minh tính chất h:**
> Đặt $g_N = \sum_{n=1}^N f_n$ là tổng riêng thứ $N$ của chuỗi hàm. Vì các số hạng $f_n \ge 0$, dãy tổng riêng $(g_N)_{N=1}^{\infty}$ là một dãy hàm đo được không âm tăng đơn điệu không giảm và hội tụ điểm về tổng vô hạn của chuỗi: $g_N \uparrow \sum_{n=1}^{\infty} f_n$ khi $N \to \infty$. 
> Lấy tích phân và áp dụng tính cộng tính hữu hạn (tính chất d) cho tổng riêng, ta có $\int_D g_N \, d\mu = \sum_{n=1}^N \int_D f_n \, d\mu$. Cho $N \to \infty$ ở cả hai vế. Ở vế trái, vì $g_N$ là dãy tăng, áp dụng trực tiếp Định lý Hội tụ Đơn điệu (MCT) ta được:
> $$\lim_{N \to \infty} \int_D g_N \, d\mu = \int_D \left(\lim_{N \to \infty} g_N\right) d\mu = \int_D \left( \sum_{n=1}^{\infty} f_n \right) d\mu$$
> Vế phải là giới hạn của một dãy tổng riêng, theo định nghĩa chuỗi số thực mở rộng, chính là: $\sum_{n=1}^{\infty} \int_D f_n \, d\mu$. Cân bằng hai vế, ta có điều phải chứng minh. 

> [!thm] Problem 1 (Prob 8.11)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ và $f$ là một hàm đo được, không âm trên $X$ sao cho $f$ hữu hạn $\mu$-hầu khắp nơi ($\mu$-a.e.) trên $X$. Định nghĩa dãy hàm $f_n$ trên $X$:
> $$f_n(x) = \begin{cases} f(x) & \text{nếu } f(x) \le n \\ 0 & \text{nếu } f(x) > n \end{cases}$$
> Chứng minh rằng $\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu$.

> [!prf] Chứng minh
> **Bước 1: Chuyển đổi dãy hàm số qua cấu trúc hàm chỉ thị**
> Với mỗi $n \in \mathbb{N}^*$, định nghĩa tập đo được:
> $$E_n = \{x \in X : f(x) \le n\}$$
> Gọi $\chi_{E_n}$ là hàm chỉ thị của tập $E_n$. Khi đó, theo định nghĩa của bài toán, dãy hàm $f_n$ được biểu diễn một cách tường minh dưới dạng tích:
> $$f_n(x) = f(x) \cdot \chi_{E_n}(x)$$
> 
> **Bước 2: Kiểm tra các điều kiện của Định lý Hội tụ Đơn điệu (MCT)**
> Ta tiến hành đánh giá tính đơn điệu và giới hạn của dãy hàm phụ $(f_n)_{n=1}^{\infty}$:
> 
> * **Tính tăng đơn điệu:** Với mọi $n \in \mathbb{N}^*$, rõ ràng ta có mối quan hệ bao hàm của các tập mức: $E_n \subset E_{n+1}$ (vì nếu $f(x) \le n$ thì hiển nhiên $f(x) \le n+1$). 
>   Do đó, dãy các hàm chỉ thị tăng đơn điệu không giảm tại mọi điểm: $\chi_{E_1} \le \chi_{E_2} \le \dots \le \chi_{E_n} \le \dots$
>   Vì giả thiết $f(x) \ge 0$, nhân $f(x)$ vào các vế ta thu được tính đơn điệu của dãy hàm:
>   $$0 \le f_1(x) \le f_2(x) \le \dots \le f_n(x) \le \dots \quad \forall x \in X$$
> 
> * **Giới hạn hội tụ điểm hầu khắp nơi:** Gọi $N = \{x \in X : f(x) = \infty\}$ là tập các điểm mà tại đó hàm $f$ nhận giá trị vô hạn. Theo giả thiết, $f$ hữu hạn $\mu$-a.e. nên $\mu(N) = 0$. 
>   Xét điểm $x \in X \setminus N$ bất kỳ (tức là $f(x) < \infty$). Theo nguyên lý Archimedes, luôn tồn tại một chỉ số nguyên dương $n_0$ đủ lớn sao cho $n_0 \ge f(x)$. Khi đó, với mọi $n \ge n_0$, ta có $x \in E_n \implies \chi_{E_n}(x) = 1$. Suy ra:
>   $$\lim_{n \to \infty} f_n(x) = \lim_{n \to \infty} f(x) \cdot 1 = f(x) \quad \forall x \in X \setminus N$$
>   Vì $\mu(N) = 0$, ta kết luận dãy hàm hội tụ điểm về hàm $f$ hầu khắp nơi trên $X$:
>   $$\lim_{n \to \infty} f_n(x) = f(x) \quad \mu\text{-a.e. trên } X$$
> 
> **Bước 3: Áp dụng MCT và kết luận**
> Dãy các hàm số $(f_n)_{n=1}^{\infty}$ là dãy các hàm đo được không âm, tăng đơn điệu và tiến về $f$ hầu khắp nơi trên $X$. Áp dụng trực tiếp Định lý Hội tụ Đơn điệu (MCT), ta được phép đẩy giới hạn qua dấu tích phân:
> $$\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X \left( \lim_{n \to \infty} f_n \right) d\mu = \int_X f \, d\mu$$
> 
> Bài toán được chứng minh hoàn tất. 

> [!thm] (Phản ví dụ Hội tụ đơn điệu giảm)
> Định lý Hội tụ đơn điệu cho dãy giảm ($f_n \downarrow f$) bắt buộc phải có điều kiện tồn tại ít nhất một hàm khả tích chặn trên $\exists k, \int_D f_k d\mu < \infty$:
> 
> Xét không gian đo Lebesgue $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$ với miền $D = [0, \infty)$ có $\mu_L(D) = \infty$.
> 
> Xét dãy hàm đặc trưng (khối lượng trượt):
> $$f_n(x) = \chi_{[n, \infty)}(x)$$
> Dãy $f_n$ là dãy giảm ($f_{n+1} \le f_n$) và hội tụ điểm về hàm $f(x) = 0$ trên $D$. (Vì với mọi $x \in D$, chọn $N > x$, ta có $x \notin [n, \infty) \implies f_n(x) = 0$ với mọi $n \ge N$).
> 
> Tuy nhiên, $f_n$ không bảo toàn giới hạn khi đi qua dấu tích phân.

> [!prf]
> Giả sử phản chứng: Định lý hội tụ đơn điệu giảm vẫn đúng cho dãy $f_n$, tức là ta được phép hoán đổi vị trí của giới hạn và tích phân:
> $$\lim_{n \to \infty} \int_D f_n d\mu_L = \int_D \left( \lim_{n \to \infty} f_n \right) d\mu_L$$
> 
> Xét vế phải (tích phân của giới hạn), vì $f_n$ hội tụ điểm về hàm $0$, ta có:
> $$\int_D 0 d\mu_L = 0$$
> 
> Xét vế trái (giới hạn của tích phân). Theo định nghĩa của hàm đặc trưng, tích phân của $f_n$ chính là độ đo Lebesgue của miền tương ứng:
> $$\int_D f_n d\mu_L = \mu_L([n, \infty)) = \infty \quad \forall n \in \mathbb{N}$$
> Do giá trị tích phân của mọi hàm trong dãy đều bằng $\infty$, giới hạn của dãy tích phân là:
> $$\lim_{n \to \infty} \int_D f_n d\mu_L = \lim_{n \to \infty} \infty = \infty$$
> 
> Thế hai kết quả này vào đẳng thức giới hạn ban đầu, ta thu được điều vô lý:
> $$\infty = 0$$
> 
> Điều chứng tỏ định lý hội tụ đơn điệu là sai nếu thiếu đi điều kiện $\int_D f_k d\mu_L < \infty$.

# Độ Đo Tích – Fubini 

## I. Xây dựng đại số sinh và $\sigma$-đại số tích

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

## II. Tập mặt cắt (Tiền đề Fubini)

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

## III. Chứng minh

Việc chứng minh trực tiếp Mệnh đề 2 cho một tập bất kỳ thuộc $\sigma$-đại số tích rất khó. Thay vào đó, ta sử dụng nguyên lý xây dựng "tập hợp tốt" kết hợp với Định lý Halmos.

> [!def] Định nghĩa: Lớp đơn điệu
> Một họ $\mathcal{M}$ được gọi là lớp đơn điệu nếu:
> i/ $E_n \in \mathcal{M}, E_n \uparrow E \implies E \in \mathcal{M}$.
> ii/ $F_n \in \mathcal{M}, F_n \downarrow F \implies F \in \mathcal{M}$.

> [!thm] Định lý Halmos
> Nếu $\mathcal{M}$ thỏa mãn tính chất lớp đơn điệu và $\mathcal{R}$ là đại số sao cho $\mathcal{R} \subset \mathcal{M}$, thì $\sigma(\mathcal{R}) \subset \mathcal{M}$.

Dựa vào công cụ trên, ta có sơ đồ chiến lược chứng minh cho Mệnh đề 2 như sau:

> [!obs] (Sơ đồ chứng minh)
> Để chứng minh các tính chất 1) và 2) thỏa mãn với mọi tập đo được $E \in \sigma(\mathcal{R})$, ta thực hiện theo sơ đồ sau:
> 
> - **B1:** Khởi tạo với $E \in \mathcal{R}$. Tính toán trực tiếp để chỉ ra $E$ thỏa mãn tính chất 1) và 2).
> - **B2:** Mở rộng lên không gian $E \in \sigma(\mathcal{R})$ bằng cách lập các "tập hợp tốt":
> - **B2.1:** Đặt $\mathcal{E} = \{E \in \sigma(\mathcal{R}) : \text{thỏa t/c 1)}\}$. Đi chứng minh $\mathcal{E}$ là một $\sigma$-đại số. Kết hợp với $\mathcal{R} \subset \mathcal{E}$, ta suy ra $\mathcal{E} = \sigma(\mathcal{R})$.
> - **B2.2:** Đặt $\mathcal{M} = \{E \in \sigma(\mathcal{R}) : \text{thỏa t/c 2)}\}$. Đi chứng minh $\mathcal{M}$ là một lớp đơn điệu. Kết hợp với Định lý Halmos, ta suy ra $\mathcal{M} = \sigma(\mathcal{R})$.

**Giải thích cách thức hoạt động của sơ đồ:**
Thay vì đi kiểm tra từng tập hợp $E$ phức tạp, ta gom tất cả các tập thỏa mãn tính chất cần chứng minh vào một lớp $\mathcal{E}$ (hoặc $\mathcal{M}$). Bằng cách dùng Bước 1 để chứng minh lõi $\mathcal{R}$ nằm trong các lớp này, việc còn lại chỉ là chứng minh cấu trúc của $\mathcal{E}$ là một $\sigma$-đại số (hoặc $\mathcal{M}$ là lớp đơn điệu). Vì $\sigma(\mathcal{R})$ là cấu trúc nhỏ nhất chứa $\mathcal{R}$, sự bao hàm $\sigma(\mathcal{R}) \subset \mathcal{E}$ và $\sigma(\mathcal{R}) \subset \mathcal{M}$ sẽ tự động có.

## IV. Chứng minh chi tiết Mệnh đề 2
 
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
> Tương tự cho biến $Y$: $\int_Y \mu(E^y) \, d\nu = \lim_{n \to \infty} \int_Y \mu((E_n)^y) \, d\nu$. Vì $E_n \in \mathcal{M}$ với mọi $n$, nên theo định nghĩa của $\mathcal{M}$, $E_n$ đã thỏa mãn đẳng thức tích phân: 
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
> Đủ điều kiện áp dụng Định lý Hội tụ Bị chặn Lebesgue (DCT): $\int_X \nu(E_x) \, d\mu = \lim \int_X \nu((E_n)_x) \, d\mu$.
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
> - Bước 1: Thiết lập các độ đo thu hẹp và áp dụng kết quả Trường hợp A
>   Với mỗi $k \in \mathbb{N}^*$, ta định nghĩa các độ đo thu hẹp (độ đo hữu hạn) $\mu_k$ trên $\mathcal{F}$ và $\nu_k$ trên $\mathcal{G}$ bằng công thức:
>   $$\mu_k(A) = \mu(X_k \cap A), \quad \forall A \in \mathcal{F}$$
>   $$\nu_k(B) = \nu(Y_k \cap B), \quad \forall B \in \mathcal{G}$$
>   Vì các độ đo $\mu_k, \nu_k$ là các độ đo hữu hạn ($\mu_k(X) = \mu(X_k) < \infty$ và $\nu_k(Y) = \nu(Y_k) < \infty$), ta hoàn toàn đủ điều kiện áp dụng kết quả đã chứng minh ở Trường hợp A cho cặp độ đo này. 
>   Do đó, với tập $E \in \mathcal{M}$, đẳng thức tích phân trên các "khối nhỏ" luôn được bảo đảm:
>   $$\int_X \nu_k(E_x) \, d\mu_k = \int_Y \mu_k(E^y) \, d\nu_k \tag{*}$$
> 
> - Bước 2: Sử dụng bổ đề phụ để bảo toàn tính đo được
>   Để tính tích phân khi cho $k \to \infty$, ta viết lại hai vế của đẳng thức $(*)$ về theo các độ đo gốc $\mu$ và $\nu$:
>   $$\int_X \nu(Y_k \cap E_x) \cdot \chi_{X_k}(x) \, d\mu = \int_Y \mu(X_k \cap E^y) \cdot \chi_{Y_k}(y) \, d\nu$$
>   Xét dãy hàm số $f_k(x) = \nu(Y_k \cap E_x) \cdot \chi_{X_k}(x)$. Theo kết quả của Trường hợp A và bổ đề về tính đo được của hàm thu hẹp ($f$ đo được $\iff f|_{X_k}$ đo được), hàm số $f_k(x)$ này là $\mu$-đo được trên $X$ với mọi $k$.
> 
> - Bước 3: Lấy giới hạn qua Định lý Hội tụ Đơn điệu (MCT)
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
>   Vậy tập $E$ thỏa $(1)$, dẫn đến $E \in \mathcal{M}$. Vậy lớp $\mathcal{M}$ đóng đối với các giới hạn đơn điệu trên không gian $\sigma$-hữu hạn nên là lớp đơn điệu.
>
> Mệnh đề được chứng minh hoàn tất.

## V. Định lý Độ đo tích

> [!thm] Định lý (Độ đo tích)
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
> Ta cần khẳng định biểu thức xác định ánh xạ $(\mu \times \nu)(E)$ là duy nhất với mọi tập $E \in \mathcal{F} \otimes \mathcal{G}$.
> Theo kết quả trực tiếp của Mệnh đề 2, các hàm lát cắt $x \mapsto \nu(E_x)$ và $y \mapsto \mu(E^y)$ đều đo được, đảm bảo hai tích phân lặp vế trái và vế phải luôn tồn tại giá trị trong miền $[0, \infty]$. 
> Đồng thời, đẳng thức $(1)$ của Mệnh đề 2: $\int_X \nu(E_x) \, d\mu = \int_Y \mu(E^y) \, d\nu$ khẳng định rằng dù ta tính toán độ đo của tập $E$ thông qua việc quét tích phân các lát cắt dọc hay lát cắt ngang, kết quả thu được là đồng nhất.
> Do đó, ánh xạ $\mu \times \nu$ hoàn toàn xác định tốt trên $\mathcal{F} \otimes \mathcal{G}$.
> 
> **1. Tính chất độ đo:**
> - Tập rỗng: $(\mu \times \nu)(\emptyset) = \int_X \nu(\emptyset) \, d\mu = \int_X 0 \, d\mu = 0$.
> - Tính $\sigma$-cộng tính: Với $E = \bigcup_{n=1}^\infty E_n$ (các $E_n$ đôi một rời nhau).
> Các mặt cắt $(E_n)_x$ cũng rời nhau. Theo tính $\sigma$-cộng tính của độ đo $\nu$: $\nu(E_x) = \sum_{n=1}^\infty \nu((E_n)_x)$.
> Lấy tích phân: $(\mu \times \nu)(E) = \int_X \left( \sum_{n=1}^\infty \nu((E_n)_x) \right) d\mu$.
> Áp dụng Định lý Hội tụ Đơn điệu (MCT) để đưa tổng ra ngoài tích phân:
> $\sum_{n=1}^\infty \int_X \nu((E_n)_x) \, d\mu = \sum_{n=1}^\infty (\mu \times \nu)(E_n)$.
> 
> **2. Tính $\sigma$-hữu hạn:**
> Xét các khối $K_n = X_n \times Y_n \uparrow X \times Y$.
> $(\mu \times \nu)(K_n) = \mu(X_n)\cdot\nu(Y_n) < \infty$. Vậy độ đo là $\sigma$-hữu hạn.
> 
> **3. Tính duy nhất:** (Chỉ nói sơ qua ý tưởng)
> - Cả $\lambda$ và $\mu \times \nu$ đều là các độ đo trùng nhau trên đại số $\mathcal{R}$ (vì tính chất đo hình chữ nhật mở rộng ra được cho các hợp rời nhau).
> - Cả hai độ đo đều $\sigma$-hữu hạn trên $\mathcal{R}$.
> - Áp dụng Định lý mở rộng Carathéodory (hoặc Hệ quả của lớp đơn điệu), hai độ đo này phải trùng nhau trên toàn bộ $\sigma$-đại số sinh bởi $\mathcal{R}$. $\implies \lambda \equiv \mu \times \nu$.


## 5. Tích chập (Convolution)

Một trong những ứng dụng kinh điển nhất của Định lý Tonelli và Fubini là chứng minh sự tồn tại và tính khả tích của hàm Tích chập.

> [!def] Định nghĩa Tích chập
> Cho hai hàm $f, g \in \mathcal{L}^1(\mathbb{R}^N)$. Tích chập của $f$ và $g$, ký hiệu là $(f * g)(x)$, được định nghĩa bởi tích phân:
> $$(f * g)(x) = \int_{\mathbb{R}^N} f(x - y)g(y) \, dy$$

**Bài toán:** Chứng minh rằng với hầu khắp mọi $x \in \mathbb{R}^N$, hàm số $y \mapsto f(x - y)g(y)$ là khả tích, và bản thân hàm $(f * g)(x)$ cũng thuộc không gian $\mathcal{L}^1(\mathbb{R}^N)$.

**Giải quyết bằng Tonelli - Fubini:**
- Đặt hàm hai biến $F(x, y) = f(x - y)g(y)$. Ta cần kiểm tra xem $F$ có thuộc $\mathcal{L}^1(\mathbb{R}^N \times \mathbb{R}^N)$ hay không.
- Áp dụng **Định lý Tonelli** cho hàm trị tuyệt đối (không âm) $|F(x, y)| = |f(x - y)| \cdot |g(y)|$:
  $$\iint_{\mathbb{R}^N \times \mathbb{R}^N} |f(x - y)g(y)| \, dx \, dy = \int_{\mathbb{R}^N} |g(y)| \left( \int_{\mathbb{R}^N} |f(x - y)| \, dx \right) dy$$
- Chú ý rằng tích phân bên trong là tích phân theo biến $x$. Theo tính chất bất biến đối với phép tịnh tiến của độ đo Lebesgue, việc dịch chuyển $x$ đi một lượng $y$ không làm thay đổi giá trị tích phân:
  $$\int_{\mathbb{R}^N} |f(x - y)| \, dx = \int_{\mathbb{R}^N} |f(x)| \, dx = \|f\|_{\mathcal{L}^1} < \infty$$
- Thay ngược trở lại:
  $$\iint |F(x, y)| \, dx \, dy = \int_{\mathbb{R}^N} |g(y)| \cdot \|f\|_{\mathcal{L}^1} \, dy = \|f\|_{\mathcal{L}^1} \cdot \|g\|_{\mathcal{L}^1} < \infty$$
- Vì tích phân của trị tuyệt đối là hữu hạn, hàm hai biến $F(x, y)$ thực sự khả tích trên không gian tích.
- Đến đây, ta được quyền kích hoạt **Định lý Fubini** cho hàm $F(x, y)$. Theo Tính chất 1 của Fubini, đối với hầu khắp mọi $x \in \mathbb{R}^N$, hàm lát cắt $y \mapsto f(x - y)g(y)$ khả tích (tức là biểu thức tích chập hội tụ và định nghĩa tốt a.e). 
- Theo Tính chất 2 của Fubini, hàm tích phân thành phần $x \mapsto (f * g)(x)$ cũng khả tích, hay $(f * g) \in \mathcal{L}^1(\mathbb{R}^N)$.

## Chứng minh Định lý Biểu diễn Layer Cake bằng Định lý Tonelli

> [!prf] 
> Chứng minh phần (a): Biểu diễn qua tập mức $f(x) > t$
> 
> **Bước 1: Thiết lập không gian tích và hàm đặc trưng**
> Xét không gian tích $X \times [0, \infty)$ với độ đo tích $\mu \times \mu_L$ (trong đó $\mu_L$ là độ đo Lebesgue trên trục số thực).
> Xét tập hợp $\Omega$ chứa tất cả các điểm nằm "dưới" đồ thị của hàm $f$:
> $$\Omega = \{(x, t) \in X \times [0, \infty) : 0 \le t < f(x)\}$$
> Xét hàm đặc trưng của tập $\Omega$, ký hiệu là $\chi_\Omega(x, t)$. Rõ ràng $\chi_\Omega$ là một hàm đo được và không âm trên $X \times [0, \infty)$.
> 
> **Bước 2: Áp dụng Định lý Tonelli**
> Vì $\chi_\Omega(x, t) \ge 0$, theo Định lý Tonelli, ta có thể tính tích phân của hàm này trên không gian tích theo hai thứ tự khác nhau và chúng phải bằng nhau:
> $$\int_X \left( \int_{[0, \infty)} \chi_\Omega(x, t) \, d\mu_L(t) \right) d\mu(x) = \int_{[0, \infty)} \left( \int_X \chi_\Omega(x, t) \, d\mu(x) \right) d\mu_L(t)$$
> 
> **Bước 3: Tính vế trái (Cắt dọc - Tích phân theo $t$ trước)**
> Cố định một điểm $x \in X$. Khi đó, điều kiện $(x, t) \in \Omega$ tương đương với $0 \le t < f(x)$. 
> Nghĩa là lát cắt theo biến $t$ là khoảng $[0, f(x))$. Tích phân theo biến $t$ chính là chiều dài của khoảng này:
> $$\int_{[0, \infty)} \chi_\Omega(x, t) \, d\mu_L(t) = \int_0^{f(x)} 1 \, dt = f(x)$$
> Thay ngược lại vào tích phân bên ngoài:
> $$\text{Vế trái} = \int_X f(x) \, d\mu(x)$$
> 
> **Bước 4: Tính vế phải (Cắt ngang - Tích phân theo $x$ trước)**
> Cố định một mức $t \in [0, \infty)$. Khi đó, điều kiện $(x, t) \in \Omega$ tương đương với $f(x) > t$.
> Nghĩa là lát cắt theo biến $x$ chính là tập hợp $A_t = \{x \in X : f(x) > t\}$. Tích phân theo biến $x$ của hàm đặc trưng chính là độ đo của tập hợp này:
> $$\int_X \chi_\Omega(x, t) \, d\mu(x) = \int_X \chi_{A_t}(x) \, d\mu(x) = \mu(A_t) = g(t)$$
> Thay ngược lại vào tích phân bên ngoài:
> $$\text{Vế phải} = \int_{[0, \infty)} g(t) \, d\mu_L(t)$$
> 
> **Bước 5: Kết luận**
> Từ Bước 3 và Bước 4, ta có đẳng thức:
> $$\int_X f \, d\mu = \int_{[0, \infty)} g(t) \, \mu_L(dt)$$
> Phần (a) được chứng minh hoàn tất.
> 
> Chứng minh phần (b): Biểu diễn qua tập mức $f(x) \ge t$
> 
> Để chứng minh phần (b), ta làm hoàn toàn tương tự nhưng thay đổi một chút ở tập $\Omega$.
> Xét tập hợp $\Omega' = \{(x, t) \in X \times [0, \infty) : 0 \le t \le f(x)\}$ (sử dụng dấu $\le$ thay vì $<$).
> 
> - Khi cắt dọc (tính theo $t$ trước): Lát cắt là đoạn kín $[0, f(x)]$. Tuy nhiên, trong độ đo Lebesgue, chiều dài của khoảng mở $[0, f(x))$ và đoạn kín $[0, f(x)]$ là như nhau và đều bằng $f(x)$ (vì một điểm có độ đo bằng 0). Do đó, vế trái vẫn là: $\int_X f(x) \, d\mu(x)$.
> - Khi cắt ngang (tính theo $x$ trước): Cố định $t$, điều kiện trở thành $f(x) \ge t$. Lát cắt lúc này là tập $B_t = \{x \in X : f(x) \ge t\}$. Tích phân theo biến $x$ là $\mu(B_t) = h(t)$. Do đó, vế phải trở thành: $\int_{[0, \infty)} h(t) \, \mu_L(dt)$.
> 
> Cân bằng hai vế bằng Định lý Tonelli, ta thu được:
> $$\int_X f \, d\mu = \int_{[0, \infty)} h(t) \, \mu_L(dt)$$
> Phần (b) được chứng minh hoàn tất.

## Chứng minh Định lý Biểu diễn Layer Cake (Phiên bản súc tích)

Cho $f \ge 0$ là một hàm đo được trên không gian độ đo $D$. Ta cần chứng minh:
$$\int_D f \, d\mu = \int_0^\infty \mu\{f \ge t\} \, dt$$

> [!prf] Chứng minh
> Ta biểu diễn độ đo của tập mức thông qua tích phân của hàm đặc trưng:
> $$\int_0^\infty \mu\{f \ge t\} \, dt = \int_0^\infty \left( \int_D \chi_{\{f \ge t\}}(x) \, d\mu(x) \right) dt$$
> Vì hàm đặc trưng luôn không âm, ta được phép áp dụng Định lý Tonelli (hoán vị thứ tự lấy tích phân):
> $$= \int_D \left( \int_0^\infty \chi_{\{f \ge t\}}(x) \, dt \right) d\mu(x)$$
> Nhận xét rằng điều kiện $f(x) \ge t$ đối với biến $x$ hoàn toàn tương đương với điều kiện $t \in [0, f(x)]$ đối với biến $t$. Do đó ta có thể đổi vai trò của hàm đặc trưng:
> $$= \int_D \left( \int_0^\infty \chi_{[0, f(x)]}(t) \, dt \right) d\mu(x)$$
> Tích phân bên trong chính là độ đo Lebesgue (chiều dài) của đoạn $[0, f(x)]$, có giá trị bằng $f(x)$. Thay vào ta được:
> $$= \int_D f(x) \, d\mu(x)$$
> Định lý được chứng minh hoàn tất.

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


$\lim_{ n \to \infty }f_{n} = f$ a.e $\implies$ $\lim_{ n \to \infty } |f_{n}| = f$ a.e

> [!thm] Bài toán 9.15 (Định lý Barbalat cho hàm khả tích)
> Cho $f$ là hàm đo được và khả tích Lebesgue trên $[0, \infty)$ ($\int_0^\infty |f| d\mu_L < \infty$). 
> Nếu $f$ liên tục đều trên $[0, \infty)$ thì:
> $$\lim_{x \to \infty} f(x) = 0$$

> [!prf] Chứng minh
> Giả sử phản chứng rằng $\lim_{x \to \infty} f(x) \neq 0$. 
> Điều này có nghĩa là tồn tại một ngưỡng $\varepsilon_0 > 0$ và một dãy các điểm $x_n \to \infty$ (ta có thể chọn sao cho $x_{n+1} - x_n > 1$) thỏa mãn:
> $$|f(x_n)| \ge \varepsilon_0, \quad \forall n \in \mathbb{N}^*$$
> 
> **Bước 1: Sử dụng tính liên tục đều để mở rộng khoảng kiểm soát**
> Vì $f$ liên tục đều trên $[0, \infty)$, ứng với $\frac{\varepsilon_0}{2} > 0$, tồn tại một số $\delta > 0$ (ta có thể chọn $\delta < \frac{1}{2}$ để các khoảng không chồng lấn) sao cho:
> $$\forall x, y \in [0, \infty), |x - y| < \delta \Rightarrow |f(x) - f(y)| < \frac{\varepsilon_0}{2}$$
> 
> Xét các lân cận $I_n = [x_n - \delta, x_n + \delta]$ của từng điểm $x_n$. Với mọi $t \in I_n$, ta có $|t - x_n| \le \delta$, áp dụng bất đẳng thức trên:
> $$|f(t) - f(x_n)| < \frac{\varepsilon_0}{2} \implies |f(t)| \ge |f(x_n)| - |f(t) - f(x_n)| > \varepsilon_0 - \frac{\varepsilon_0}{2} = \frac{\varepsilon_0}{2}$$
> 
> **Bước 2: Đánh giá tích phân trên các khoảng cô lập**
> Vì các khoảng $I_n$ rời nhau (do cách chọn $x_{n+1} - x_n > 1$ và $\delta < \frac{1}{2}$), ta tính tích phân của $|f|$ trên hợp của tất cả các khoảng này:
> $$\int_0^\infty |f| d\mu_L \ge \sum_{n=1}^\infty \int_{I_n} |f| d\mu_L$$
> Trên mỗi khoảng $I_n$, do $|f(t)| > \frac{\varepsilon_0}{2}$ và chiều dài khoảng $\mu_L(I_n) = 2\delta$, ta có:
> $$\int_{I_n} |f| d\mu_L \ge \frac{\varepsilon_0}{2} \cdot 2\delta = \varepsilon_0 \delta$$
> 
> **Bước 3: Dẫn đến mâu thuẫn**
> Thế ngược lại vào tổng chuỗi:
> $$\int_0^\infty |f| d\mu_L \ge \sum_{n=1}^\infty \varepsilon_0 \delta = \infty$$
> Điều này mâu thuẫn trực tiếp với giả thiết $f$ khả tích Lebesgue ($\int_0^\infty |f| d\mu_L < \infty$).
> 
> Vậy giả thiết phản chứng là sai. Ta có $\lim_{x \to \infty} f(x) = 0$.

> [!thm] Mệnh đề: Mối liên hệ giữa Liên tục đều và Khả tích đều (Chưa kiểm chứng)
> Cho không gian độ đo Lebesgue $(D, \mathcal{A}, \mu_L)$ với $D \subseteq \mathbb{R}$ và một họ hàm (hoặc một hàm đơn lẻ) $K \subset L^1(D)$.
> 
> 1. **Trên miền hữu hạn:** Nếu $D = [a, b]$ là một đoạn đóng, hữu hạn ($\mu_L(D) < \infty$), và họ hàm $K$ đồng liên tục đều trên $D$, thì họ hàm $K$ **khả tích đều** trên $D$.
> 2. **Trên miền vô hạn:** Nếu $D = [0, \infty)$, một hàm đơn lẻ $f \in L^1(D)$ liên tục đều thì $f$ **khả tích đều** trên $D$. (Tuy nhiên, một *dãy hàm* $\{f_n\}$ đồng liên tục đều và bị chặn trong $L^1$ chưa chắc đã khả tích đều do hiện tượng thất thoát khối lượng ra vô cực).

> [!prf] Chứng minh
> 
> ### Phần 1: Chứng minh trên miền hữu hạn $D = [a, b]$
> Giả sử họ hàm $K$ đồng liên tục đều trên đoạn đóng $[a, b]$. Ta cần chứng minh họ này khả tích đều, tức là:
> $$\forall \varepsilon > 0, \exists \delta > 0 : \forall A \in \mathcal{A}, \mu_L(A) < \delta \Rightarrow \sup_{f \in K} \int_A |f| d\mu_L < \varepsilon$$
> 
> **Bước 1: Chứng minh họ hàm bị chặn đều (Uniformly bounded)**
> Do tính đồng liên tục đều, ứng với $\varepsilon_0 = 1$, tồn tại $\delta_0 > 0$ sao cho với mọi $f \in K$ và $x, y \in [a, b]$:
> $$|x - y| < \delta_0 \implies |f(x) - f(y)| < 1 \implies |f(x)| < |f(y)| + 1$$
> 
> Vì đoạn $[a, b]$ có chiều dài hữu hạn, ta có thể chia $[a, b]$ thành một số hữu hạn các đoạn nhỏ $I_1, I_2, \dots, I_m$ với độ dài mỗi đoạn đều nhỏ hơn $\delta_0$. Lấy một điểm $y_k \in I_k$ cố định với mỗi $k = 1, \dots, m$. 
> Với một hàm $f \in L^1([a, b])$ bất kỳ thuộc $K$, tích phân của $|f|$ trên mỗi đoạn nhỏ $I_k$ là hữu hạn. Do đó, tồn tại ít nhất một điểm $y_k \in I_k$ sao cho giá trị $|f(y_k)|$ không vượt quá giá trị trung bình cộng thêm một hằng số. Vì số lượng điểm $y_k$ là hữu hạn ($m$ điểm) và mỗi hàm $f \in K$ đều bị chặn trong lân cận $\delta_0$ của các điểm này, ta suy ra tồn tại một hằng số $M > 0$ dùng chung cho cả họ sao cho:
> $$\sup_{f \in K} \sup_{x \in [a, b]} |f(x)| \le M < \infty$$
> 
> **Bước 2: Đánh giá điều kiện khả tích đều**
> Với $M$ là hằng số chặn trên vừa tìm được, xét một tập đo được $A \subset [a, b]$ bất kỳ. Ta có:
> $$\int_A |f(x)| d\mu_L \le \int_A M d\mu_L = M \cdot \mu_L(A), \quad \forall f \in K$$
> Với $\varepsilon > 0$ cho trước, ta chọn $\delta = \frac{\varepsilon}{M} > 0$. Khi đó, nếu $\mu_L(A) < \delta$, ta lập tức có:
> $$\sup_{f \in K} \int_A |f| d\mu_L \le M \cdot \mu_L(A) < M \cdot \frac{\varepsilon}{M} = \varepsilon$$
> Vậy họ hàm $K$ khả tích đều trên miền hữu hạn.
> 
> ---
> 
> ### Phần 2: Chứng minh trên miền vô hạn $D = [0, \infty)$ cho một hàm $f \in L^1$
> Cho hàm $f \in L^1([0, \infty))$ và $f$ liên tục đều. Ta cần chứng minh $f$ khả tích đều, nghĩa là thỏa mãn hai tính chất cốt lõi:
> - **Tính chất 1 (Liên tục tuyệt đối):** $\forall \varepsilon > 0, \exists \delta > 0 : \mu_L(A) < \delta \Rightarrow \int_A |f| < \varepsilon$.
> - **Tính chất 2 (Tính chặt):** $\forall \varepsilon > 0, \exists B_\varepsilon = [0, M] : \int_M^\infty |f| < \varepsilon$.
> 
> **Bước 1: Khai thác Tính chất 1**
> Vì $f \in L^1([0, \infty))$ là một hàm đơn lẻ, theo *Bổ đề về tính liên tục tuyệt đối của tích phân Lebesgue*, $f$ hiển nhiên thỏa mãn Tính chất 1 với mọi tập $A \in \mathcal{A}$ mà không cần dùng đến giả thiết liên tục đều.
> 
> **Bước 2: Khai thác Tính chất 2 (Sử dụng kết quả trực tiếp từ Prob 9.15)**
> Ta cần chứng minh phần đuôi tích phân triệt tiêu khi cận tiến ra vô cực.
> - Vì $f \in L^1([0, \infty))$ và $f$ liên tục đều, áp dụng **Định lý Barbalat (Prob 9.15)**, ta có:
>   $$\lim_{x \to \infty} f(x) = 0$$
> - Theo định nghĩa giới hạn, với mọi $\varepsilon > 0$, tồn tại một mốc mốc $M_0 > 0$ sao cho với mọi $x \ge M_0$ thì $|f(x)| < 1$ (hàm số bị chặn ở vô cực). Do đó, hàm số $|f(x)|$ bị chặn bởi hằng số $C = \max\{\max_{[0, M_0]} |f(x)|, 1\}$ trên toàn bộ $[0, \infty)$.
> - Vì $f \in L^1([0, \infty))$, theo tính chất đuôi tích phân hội tụ:
>   $$\lim_{M \to \infty} \int_M^\infty |f(x)| dx = 0$$
>   Tức là, với $\varepsilon > 0$ cho trước, luôn tồn tại một hằng số $M > 0$ đủ lớn sao cho $\int_M^\infty |f(x)| dx < \varepsilon$.
> 
> Chọn tập $B_\varepsilon = [0, M]$, ta có $\mu_L(B_\varepsilon) = M < \infty$ và $\int_{B_\varepsilon^c} |f| = \int_M^\infty |f| < \varepsilon$. 
> 
> Kết hợp cả hai bước, hàm $f$ thỏa mãn đầy đủ cả Tính chất 1 và Tính chất 2, do đó $f$ khả tích đều trên $[0, \infty)$. Mệnh đề được chứng minh hoàn tất.

> [!thm] (Sự tương đương cấu trúc trên miền vô hạn $[0, \infty)$)
> Cho hàm số $f: [0, \infty) \to \mathbb{R}$. Xét các tính chất sau của hàm số:
> 1. $f$ thỏa mãn đồng thời: Khả tích Lebesgue ($f \in L^1$) và Liên tục đều.
> 2. $f$ thỏa mãn đồng thời: Tính chất 1 (Khả tích đều) và Tính chất 2 (Tính chặt).
> 
> Mệnh đề phát biểu rằng: Điều kiện (1) là điều kiện đủ để suy ra điều kiện (2). 
> (Nói cách khác: Khả tích Lebesgue + Liên tục đều $\implies$ Khả tích đều + Tính chặt).

> [!prf] Chứng minh (Chiều thuận: 1 $\implies$ 2)
> Giả sử hàm số $f$ thỏa mãn điều kiện (1), tức là $\int_0^\infty |f(x)| dx < \infty$ và $f$ liên tục đều trên $[0, \infty)$. Ta sẽ chứng minh $f$ lần lượt thỏa mãn hai cấu trúc độ đo của điều kiện (2).
> 
> **Phần 1: Chứng minh hàm số thỏa mãn Tính chất 1 (Khả tích đều)**
> Cần chứng minh: $\forall \varepsilon > 0, \exists \delta > 0 : \forall A \in \mathcal{A}, \mu_L(A) < \delta \Rightarrow \int_A |f| dx < \varepsilon$.
> 
> Vì giả thiết cho trước $f \in L^1([0, \infty))$, ta xét dãy hàm bị cắt:
>   $$\varphi_n(x) = \min\{|f(x)|, n\}$$
> Ta có $0 \le \varphi_n \le n$ (bị chặn) và $\varphi_n \uparrow |f|$ khi $n \to \infty$. Theo Định lý Hội tụ Đơn điệu (MCT):
>   $$\lim_{n \to \infty} \int_0^\infty \varphi_n dx = \int_0^\infty |f| dx < \infty$$
> Theo định nghĩa giới hạn, với $\varepsilon > 0$ cho trước, tồn tại một ngưỡng số nguyên $N_\varepsilon > 0$ sao cho:
>   $$\int_0^\infty (|f| - \varphi_{N_\varepsilon}) dx < \frac{\varepsilon}{2}$$
> Với một tập đo được $A \in \mathcal{A}$ bất kỳ, ta thực hiện phân tách tích phân:
>   $$\int_A |f| dx = \int_A \varphi_{N_\varepsilon} dx + \int_A (|f| - \varphi_{N_\varepsilon}) dx$$
> Đánh giá từng thành phần:
>   1. Vì $\varphi_{N_\varepsilon} \le N_\varepsilon$, ta có: $\int_A \varphi_{N_\varepsilon} dx \le N_\varepsilon \cdot \mu_L(A)$.
>   2. Vì $A \subseteq [0, \infty)$ và hàm dưới dấu tích phân không âm, ta có: $\int_A (|f| - \varphi_{N_\varepsilon}) dx \le \int_0^\infty (|f| - \varphi_{N_\varepsilon}) dx < \frac{\varepsilon}{2}$.
> Chọn $\delta = \frac{\varepsilon}{2 N_\varepsilon} > 0$. Khi tập $A$ có độ đo $\mu_L(A) < \delta$, ta thu được:
>   $$\int_A |f| dx < N_\varepsilon \cdot \left(\frac{\varepsilon}{2 N_\varepsilon}\right) + \frac{\varepsilon}{2} = \varepsilon$$
> Vậy hàm $f$ thỏa mãn Tính chất 1 (Khả tích đều).
> 
> **Phần 2: Chứng minh hàm số thỏa mãn Tính chất 2 (Tính chặt)**
> Cần chứng minh: $\forall \varepsilon > 0, \exists B_\varepsilon \in \mathcal{A} \text{ với } \mu_L(B_\varepsilon) < \infty \Rightarrow \int_{B_\varepsilon^c} |f| dx < \varepsilon$.
> 
> Nhờ giả thiết $f \in L^1([0, \infty))$ và $f$ liên tục đều, áp dụng kết quả từ bổ đề Prob 9.15, ta có:
>   $$\lim_{x \to \infty} f(x) = 0$$
> Do đó hàm số buộc phải có phần đuôi tích phân hội tụ triệt tiêu:
>   $$\lim_{M \to \infty} \int_M^\infty |f(x)| dx = 0$$
> Theo định nghĩa giới hạn, với $\varepsilon > 0$ cho trước, luôn luôn tồn tại một mốc $M > 0$ đủ lớn sao cho:
>   $$\int_M^\infty |f(x)| dx < \varepsilon$$
> Ta chọn tập hợp $B_\varepsilon = [0, M]$. Rõ ràng độ đo của tập này hữu hạn ($\mu_L(B_\varepsilon) = M < \infty$). Tập bù của nó chính là nửa khoảng vô cực $B_\varepsilon^c = (M, \infty)$. Khi đó:
>   $$\int_{B_\varepsilon^c} |f(x)| dx = \int_M^\infty |f(x)| dx < \varepsilon$$
> Vậy hàm $f$ thỏa mãn Tính chất 2 (Tính chặt).
> 
> Vậy định lý được chứng minh hoàn tất.

> [!thm] (Hội tụ đều trên không gian đo hữu hạn)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo với giả thiết độ đo toàn không gian hữu hạn, tức là $\mu(X) < \infty$. 
> Giả sử dãy hàm số $(f_n)_{n=1}^\infty \subset L^1(\mu)$ và $f_n$ hội tụ đều đến hàm giới hạn $f$ trên $X$. Khi đó:
> - Hàm giới hạn $f$ cũng thuộc lớp khả tích $L^1(\mu)$.
> - Ta được phép chuyển giới hạn qua dấu tích phân: 
>   $$\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu$$

> [!prf] Chứng minh
> Quá trình chứng minh được chia làm 2 giai đoạn logic: chứng minh tính khả tích của hàm mục tiêu $f$, sau đó áp dụng tính chất chặn đều để thiết lập giới hạn tích phân.
> 
> **Bước 1: Chứng minh hàm giới hạn $f \in L^1(\mu)$**
> 
> Vì dãy hàm $f_n \to f$ hội tụ đều trên $X$, theo định nghĩa hội tụ đều, với mọi giá trị sai số $\varepsilon > 0$, luôn tồn tại một chỉ số nguyên dương $N \in \mathbb{Z}_+$ sao cho với mọi chỉ số bước $n \ge N$, ta có đánh giá chặn đều trên toàn bộ không gian:
> $$|f_n(x) - f(x)| < \varepsilon \quad (\forall x \in X) \tag{1}$$
> 
> Cố định một chỉ số $n_0 \ge N$. Áp dụng bất đẳng thức tam giác đối với trị tuyệt đối, ta kẹp cấu trúc của hàm $f(x)$ dưới hàm khả tích $f_{n_0}(x)$:
> $$|f(x)| = |f(x) - f_{n_0}(x) + f_{n_0}(x)| \le |f_{n_0}(x) - f(x)| + |f_{n_0}(x)|$$
> 
> Thay thế đánh giá chặn đều từ hệ thức (1) tại mốc $n_0$ với sai số chọn trước $\varepsilon = 1$:
> $$|f(x)| \le 1 + |f_{n_0}(x)| \quad (\forall x \in X)$$
> 
> Lấy tích phân Lebesgue hai vế trên toàn bộ không gian $X$, tận dụng tính tuyến tính và tính đơn điệu của tích phân:
> $$\int_X |f| \, d\mu \le \int_X \left( 1 + |f_{n_0}| \right) d\mu = \int_X 1 \, d\mu + \int_X |f_{n_0}| \, d\mu$$
> $$\int_X |f| \, d\mu \le \mu(X) + \int_X |f_{n_0}| \, d\mu$$
> 
> Nhìn vào vế phải của bất đẳng thức:
> - Do giả thiết không gian đo hữu hạn nên $\mu(X) < \infty$.
> - Do giả thiết dãy hàm ban đầu $f_n \subset L^1(\mu)$ nên $\int_X |f_{n_0}| \, d\mu < \infty$.
> 
> Tổng của hai đại lượng hữu hạn bắt buộc phải là một số thực hữu hạn, kéo theo $\int_X |f| \, d\mu < \infty$. Vậy hàm giới hạn $f \in L^1(\mu)$.
> 
> **Bước 2: Chứng minh đẳng thức giới hạn tích phân**
> 
> Mục tiêu của ta là chỉ ra rằng sai khác tích phân $\left| \int_X f_n \, d\mu - \int_X f \, d\mu \right|$ có thể bé hơn một lượng $\varepsilon$ tùy ý khi $n$ tiến ra vô cùng.
> 
> Xét một sai số $\varepsilon > 0$ bất kỳ. Do tính hội tụ đều, tồn tại chỉ số $N \in \mathbb{Z}_+$ sao cho với mọi $n \ge N$, ta có chặn sai số tuyệt đối:
> $$|f_n(x) - f(x)| < \frac{\varepsilon}{\mu(X) + 1} \quad (\forall x \in X)$$
> *(Ta thêm $+1$ vào mẫu số để phòng ngừa kịch bản đặc biệt khi không gian đo có độ đo bằng $0$).*
> 
> Sử dụng tính chất bất đẳng thức trị tuyệt đối của tích phân Lebesgue, kết hợp với đánh giá chặn đều ở trên:
> $$0 \le \left| \int_X f_n \, d\mu - \int_X f \, d\mu \right| = \left| \int_X (f_n - f) \, d\mu \right| \le \int_X |f_n - f| \, d\mu$$
> 
> Thay thế chặn trên đều của lõi trị tuyệt đối vào trong dấu tích phân:
> $$\int_X |f_n - f| \, d\mu \le \int_X \frac{\varepsilon}{\mu(X) + 1} \, d\mu = \frac{\varepsilon}{\mu(X) + 1} \int_X 1 \, d\mu = \frac{\varepsilon \cdot \mu(X)}{\mu(X) + 1}$$
> 
> Nhận thấy rằng với mọi $\mu(X) \ge 0$, ta luôn có phân số đại số $\frac{\mu(X)}{\mu(X) + 1} < 1$. Do đó:
> $$\left| \int_X f_n \, d\mu - \int_X f \, d\mu \right| < \varepsilon \quad (\forall n \ge N)$$
> 
> Theo đúng định nghĩa giới hạn của dãy số thực, điều này khẳng định chắc chắn rằng:
> $$\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu$$
> 
> Định lý được chứng minh hoàn tất. 

> [!thm] (Hội tụ đều trên không gian đo hữu hạn)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo với giả thiết độ đo toàn không gian hữu hạn, tức là $\mu(X) < \infty$. 
> Giả sử dãy hàm số $(f_n)_{n=1}^\infty \subset L^1(\mu)$ và $f_n$ hội tụ đều đến hàm giới hạn $f$ trên $X$. Khi đó:
> - Hàm giới hạn $f$ cũng thuộc lớp khả tích $L^1(\mu)$.
> - Ta được phép chuyển giới hạn qua dấu tích phân: 
>   $$\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu$$

> [!prf]  
> **Bước 1: Thiết lập hàm trội khả tích**
> 
> Do dãy $f_n \to f$ hội tụ đều trên $X$, dãy này thỏa mãn là dãy Cauchy. Tức là tồn tại một chỉ số nguyên dương $N$ sao cho với mọi $n \ge N$, ta có:
> $$|f_n(x) - f_N(x)| \le 1 \quad (\forall x \in X)$$
> 
> Áp dụng bất đẳng thức tam giác, ta đánh giá được độ lớn của mọi hàm $f_n$ (từ chỉ số $N$ trở đi):
> $$|f_n(x)| \le |f_N(x)| + 1 \quad (\forall x \in X, \forall n \ge N)$$
> 
> Ta chọn hàm chặn trên $g(x) = |f_N(x)| + 1$. 
> Khảo sát tính khả tích của $g(x)$ trên không gian đo $X$:
> - Vì $f_N \in L^1(\mu)$ theo giả thiết ban đầu, nên $\int_X |f_N| \, d\mu < \infty$.
> - Vì không gian đo hữu hạn $\mu(X) < \infty$, tích phân của hàm hằng số $1$ cũng hữu hạn: $\int_X 1 \, d\mu = \mu(X) < \infty$.
> 
> Tổng của hai hàm khả tích là một hàm khả tích, suy ra $g \in L^1(\mu)$.
> 
> **Bước 2: Áp dụng Định lý Hội tụ Bị chặn Lebesgue (DCT)**
> 
> Xét dãy hàm đuôi $(f_n)_{n=N}^\infty$, ta thấy nó thỏa mãn hai điều kiện của Định lý Hội tụ Bị chặn Lebesgue:
> 1. Hội tụ điểm: $f_n(x) \to f(x)$ với mọi $x \in X$ (hội tụ đều hiển nhiên suy ra hội tụ điểm).
> 2. Bị chặn bởi hàm khả tích: $|f_n(x)| \le g(x)$ với mọi $n \ge N$, trong đó $g \in L^1(\mu)$.
> 
> Theo hệ quả trực tiếp của Định lý DCT, ta kết luận:
> - Hàm giới hạn $f \in L^1(\mu)$.
> - Đẳng thức giới hạn qua tích phân được bảo toàn:
>   $$\lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu$$
> 
> Định được chứng minh hoàn tất. 



> [!thm] (Tích phân suy rộng Riemann)
> Cho $f(x) \ge 0$ và liên tục trên $[0, \infty)$. Giả sử tích phân Riemann suy rộng $\int_0^\infty f(x)\,dx$ tồn tại hữu hạn. Chứng minh:
> $$\int_{[0, \infty)} f \, d\mu_L = \int_0^\infty f(x)\,dx$$


> [!prf]
> Xây dựng dãy hàm chặt cụt: Với mỗi $n \in \mathbb{N}^*$, xét dãy hàm:
> $$f_n(x) = \begin{cases} f(x) & \text{nếu } 0 \le x \le n \\ 0 & \text{nếu } x > n \end{cases}$$
> 
> Kiểm tra điều kiện MCT: Do $f(x) \ge 0$ và liên tục, dãy hàm $f_n(x)$ thỏa mãn:
> - Không âm: $f_n(x) \ge 0$ với mọi $x$.
> - Đơn điệu tăng: $f_n(x) \le f_{n+1}(x)$ với mọi $x$ (do miền xác định chứa $f(x)$ được nới rộng).
> - Hội tụ điểm: Với mọi $x \in [0, \infty)$, khi $n \to \infty$ thì $f_n(x) \to f(x)$.
> 
> Áp dụng Định lý Hội tụ Đơn điệu (MCT):
> $$\int_{[0, \infty)} f \, d\mu_L = \lim_{n \to \infty} \int_{[0, \infty)} f_n \, d\mu_L$$
> 
> Chuyển đổi từ Lebesgue sang Riemann:
> Vì $f_n(x) = 0$ khi $x > n$, tích phân trên miền vô hạn được thu về đoạn hẹp $[0, n]$:
> $$\int_{[0, \infty)} f_n \, d\mu_L = \int_{[0, n]} f \, d\mu_L$$
>    Do $f(x)$ liên tục trên đoạn đóng $[0, n]$, tích phân Lebesgue trùng với tích phân Riemann:
> $$\int_{[0, n]} f \, d\mu_L = \int_0^n f(x)\,dx$$
> 
> Kết luận: Đằng thức trở thành:
> $$\int_{[0, \infty)} f \, d\mu_L = \lim_{n \to \infty} \int_0^n f(x)\,dx = \int_0^\infty f(x)\,dx$$
> Chứng minh hoàn tất. 

> [!thm] (Định lý 6.12:  Định lý Egoroff)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ có độ đo hữu hạn, tức là $\mu(D) < \infty$. Nếu dãy hàm đo được $f_n$ hội tụ về hàm đo được $f$ hầu khắp nơi (a.e) trên $D$, thì dãy $f_n$ hội tụ gần đều (a.u) về $f$ trên $D$.

> [!prf]
> Để chứng minh dãy hàm hội tụ gần đều, ta cần chỉ ra rằng với mọi $\eta > 0$ cho trước, ta luôn có thể tìm được một tập $E \in \mathfrak{A}$ sao cho $\mu(E) < \eta$ và $f_n$ hội tụ đều về $f$ trên $D \setminus E$. 
> Ta tiến hành chứng minh qua 3 bước:
>
> **Bước 1: Khai thác giả thiết hội tụ hầu khắp nơi**
> Theo Định lý 6.5, vì $f_n \to f$ a.e., ta có độ đo của giới hạn trên của tập sai số bằng 0. Tức là với mọi số nguyên dương $m$:
> $$
> \mu\left( \limsup_{k \to \infty} \left\{ x \in D : |f_k(x) - f(x)| \ge \frac{1}{m} \right\} \right) = 0
> $$
>  Sử dụng $\limsup_{k \to \infty} A_k = \bigcap_{n=1}^\infty \left( \bigcup_{k=n}^\infty A_k \right)$, ta viết biểu thức $\limsup$ thành dạng:
> $$
> \bigcap_{n=1}^\infty \left( \bigcup_{k=n}^\infty \left\{ x \in D : |f_k(x) - f(x)| \ge \frac{1}{m} \right\} \right)
> $$
> Ta đặt biểu thức trong ngoặc đơn là $D_n(m)$:
> $$
> D_n(m) = \bigcup_{k=n}^\infty \left\{ x \in D : |f_k(x) - f(x)| \ge \frac{1}{m} \right\}
> $$
>Ta viết lại giả thiết (biểu thức có độ đo bằng 0):
> $$
> \mu\left( \bigcap_{n=1}^{\infty} D_n(m) \right) = 0
> $$
> Khi chỉ số $n$ tăng lên, ta lấy hợp trên ít tập hợp $k$ hơn (mất dần các phần tử đầu), do đó $D_{n}(m)$ dãy tập hợp giảm. 
> Vì không gian đo là hữu hạn: $\mu(D) < \infty$, ta đủ điều kiện áp dụng tính liên tục trên cho dãy tập:
> $$
> \lim_{n \to \infty} \mu(D_n(m)) = \mu\left( \bigcap_{n=1}^{\infty} D_n(m) \right) = 0 \quad \text{với mọi } m \in \mathbb{N}
> $$
> 
> **Bước 2: Xây dựng tập $E$**
> Lấy một số $\eta > 0$ bất kỳ. Từ kết quả giới hạn bằng không ở Bước 1, với mỗi số nguyên $m$, ta luôn có thể tìm được một $N_m$ đủ lớn sao cho:
> $$
> \mu(D_{N_m}(m)) < \frac{\eta}{2^m}
> $$
> Ta định nghĩa $E$ là hợp của tất cả các phần sai số đuôi:
> $$
> E = \bigcup_{m=1}^{\infty} D_{N_m}(m)
> $$
> Áp dụng tính $\sigma$-dưới cộng tính của độ đo, ta được sai số kích thước của tập $E$:
> $$
> \mu(E) \le \sum_{m=1}^{\infty} \mu(D_{N_m}(m)) < \sum_{m=1}^{\infty} \frac{\eta}{2^m} = \eta
> $$
> Tập $E$ đã thỏa mãn yêu cầu có độ đo nhỏ hơn $\eta$.
> 
> **Bước 3: Kiểm tra sự hội tụ đều trên $D \setminus E$**
> Lấy một điểm $x$ bất kỳ nằm ngoài $E$: $x \in D \setminus E$.
> Vì $x \notin E$ nên $x \notin D_{N_m}(m)$ là hợp của các tập $D_{N_m}(m)$ với mọi $m$.
> Thay định nghĩa của $D_{N_m}(m)$:
> $$
> x \notin \bigcup_{k \ge N_m} \left\{ |f_k - f| \ge \frac{1}{m} \right\} \quad \text{với mọi } m
> $$
> Vì $x$ không nằm trong tập hợp các điểm có sai số lớn hơn $\frac{1}{m}$, nên $x$ phải nhỏ hơn $\frac{1}{m}$:
> $$
> |f_k(x) - f(x)| < \frac{1}{m} \quad \text{với mọi } k \ge N_m
> $$
> Nhận thấy rằng chỉ số $N_m$ chỉ phụ thuộc vào $m$ là sai số mong muốn, mà không phụ thuộc vào việc ta chọn điểm $x$ trong $D \setminus E$. 
> Điều này chính là định nghĩa của hội tụ đều. Vậy $f_n$ hội tụ đều về $f$ trên $D \setminus E$. Định lý Egoroff được chứng minh hoàn tất.

> [!thm] (Bổ đề 9.3 & Lemma 9.8)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và tập đo được $D \in \mathfrak{A}$. Giả sử các hàm số dưới đây là các hàm đo được nhận giá trị thực mở rộng trên $D$.
> 
> 1. (Tiêu chuẩn hàm không âm hầu khắp nơi): Giả sử tích phân $\int_E f \, d\mu$ tồn tại và thỏa mãn $\int_E f \, d\mu \ge 0$ với mọi tập con đo được $E \subset D$ ($E \in \mathfrak{A}$). Khi đó, ta có $f \ge 0$ hầu khắp nơi (a.e.) trên $D$.
>    
> 2. (Bảo toàn tích phân cho các hàm tương đương hầu khắp nơi): Giả sử $f = g$ hầu khắp nơi (a.e.) trên $D$. Nếu $f$ là hàm bán khả tích-$\mu$ (semi-integrable) trên $D$, thì $g$ cũng là hàm bán khả tích-$\mu$ trên $D$ và tích phân của chúng bằng nhau:
>    $$\int_D f \, d\mu = \int_D g \, d\mu$$

> [!prf] Chứng minh
> 3. Chứng minh Lemma 9.3
> Ta thực hiện chứng minh bằng phương pháp phản chứng.
> Giả sử mệnh đề $f \ge 0$ a.e. trên $D$ là sai. Xét tập hợp các điểm mà tại đó hàm $f$ nhận giá trị thực sự âm:
> $$E = \{x \in D : f(x) < 0\}$$
> Theo giả thiết phản chứng, độ đo của tập mức này phải dương ($\mu(E) > 0$). 
> Ta phân rã tập $E$ thành hợp đếm được của các tập bậc thang tăng dần:
> $$E = \bigcup_{k=1}^{\infty} E_k \quad \text{với} \quad E_k = \left\{x \in D : f(x) \le -\frac{1}{k}\right\}$$
> Do $\mu(E) > 0$, theo tính dưới cộng tính đếm được, bắt buộc phải tồn tại một chỉ số nguyên dương $k_0 \in \mathbb{N}^*$ sao cho thành phần tương ứng có độ đo thực sự dương: $\mu(E_{k_0}) > 0$.
> Xét tích phân của $f$ trên tập con đo được $E_{k_0}$. Do tại mọi $x \in E_{k_0}$ luôn có $f(x) \le -\frac{1}{k_0}$, áp dụng tính đơn điệu của tích phân, ta thu được:
> $$\int_{E_{k_0}} f \, d\mu \le \int_{E_{k_0}} \left(-\frac{1}{k_0}\right) d\mu = -\frac{1}{k_0} \mu(E_{k_0}) < 0$$
> Kết quả tích phân âm này lập tức mâu thuẫn trực tiếp với giả thiết ban đầu là $\int_A f \, d\mu \ge 0$ với mọi tập con đo được $A \subset D$. 
> Vậy giả thiết phản chứng là sai, ta có $f \ge 0$ a.e. trên $D$.
> 
> 4. Chứng minh Lemma 9.8
> Nhắc lại định nghĩa tích phân tổng quát cho hàm nhận giá trị thực mở rộng bất kỳ thông qua hiệu của hai phần không âm: $\int_D f \, d\mu = \int_D f^+ \, d\mu - \int_D f^- \, d\mu$. Hàm $f$ bán khả tích đồng nghĩa với việc hiệu này xác định (không rơi vào dạng vô định $\infty - \infty$).
> Từ giả thiết hai hàm bằng nhau hầu khắp nơi ($f = g$ a.e. trên $D$), theo định nghĩa của hàm phần dương và phần âm, ta lập tức suy ra:
> $$f^+ = g^+ \text{ a.e. trên } D \quad \text{và} \quad f^- = g^- \text{ a.e. trên } D$$
> Vì $f^+, g^+$ và $f^-, g^-$ là các cặp hàm đo được không âm tương đương hầu khắp nơi trên $D$, áp dụng trực tiếp Tính chất (f) của Bổ đề 8.2 cho từng cặp, ta thu được các đẳng thức tích phân thành phần:
> $$\int_D f^+ \, d\mu = \int_D g^+ \, d\mu \quad \text{và} \quad \int_D f^- \, d\mu = \int_D g^- \, d\mu$$
> Do $f$ bán khả tích trên $D$, hiệu số giữa $\int_D f^+ \, d\mu$ và $\int_D f^- \, d\mu$ hoàn toàn tồn tại và ngự trị trong tập số thực mở rộng $\overline{\mathbb{R}}$. Vì các giá trị thành phần tương ứng hoàn toàn trùng nhau, hiệu số $\int_D g^+ \, d\mu - \int_D g^- \, d\mu$ cũng xác định và cho ra cùng một kết quả.
> Vậy $g$ cũng là hàm bán khả tích trên $D$ và $\int_D f \, d\mu = \int_D g \, d\mu$. 

$\xi$
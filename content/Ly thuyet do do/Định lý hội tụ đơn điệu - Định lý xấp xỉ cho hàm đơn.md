# 1. Hàm không âm

> [!thm] (Định lý Hội tụ đơn điệu: Monotone Convergence Theorem - MCT)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo và $D \in \mathfrak{A}$. Giả sử $(f_n)_{n=1}^\infty$ là một dãy các hàm đo được không âm trên $D$ thỏa mãn:
> 1. Dãy không giảm: $0 \le f_1 \le f_2 \le \dots \le f_n \le \dots$ hầu khắp nơi trên $D$.
> 2. Hội tụ điểm: $\lim_{n \to \infty} f_n(x) = f(x)$ hầu khắp nơi trên $D$.
> 
> Khi đó, hàm giới hạn $f$ cũng là một hàm đo được không âm trên $D$ và:
> $$\lim_{n \to \infty} \int_D f_n d\mu = \int_D \left( \lim_{n \to \infty} f_n \right) d\mu = \int_D f d\mu$$

> [!prf] Chứng minh
> Để đơn giản hóa trình bày, ta có thể giả sử các tính chất không giảm và hội tụ đúng tại mọi điểm $x \in D$ (nếu chỉ đúng hầu khắp nơi, ta bỏ đi một tập có độ đo $0$ mà không làm thay đổi giá trị tích phân).
> 
> Quá trình chứng minh được chia làm 2 chiều bất đẳng thức:
> 
> **Chiều 1: Chứng minh $\lim_{n \to \infty} \int_D f_n d\mu \le \int_D f d\mu$**
> Vì dãy $(f_n)$ không giảm và tiến tới $f$, ta có $f_n \le f$ với mọi $n \in \mathbb{N}^*$.
> Áp dụng tính đơn điệu của tích phân, ta thu được:
> $$\int_D f_n d\mu \le \int_D f d\mu \quad (\forall n)$$
> Dãy số thực $(\int_D f_n d\mu)$ là một dãy không giảm và bị chặn trên bởi $\int_D f d\mu$, do đó nó có giới hạn và:
> $$
> \lim_{n \to \infty} \int_D f_n d\mu \le \int_D f d\mu \tag{1}
> $$
> 
> **Chiều 2: Chứng minh $\lim_{n \to \infty} \int_D f_n d\mu \ge \int_D f d\mu$**
> Theo định nghĩa tích phân của hàm không âm, $\int_D f d\mu = \sup_{\varphi \in S} \int_D \varphi d\mu$, với $S = \{\varphi \text{ đơn giản} : 0 \le \varphi \le f\}$.
> Cố định một hàm đơn giản $\varphi \in S$ và chọn một hằng số bất kỳ $\alpha \in (0, 1)$. Ta cần chứng minh $\lim_{n \to \infty} \int_D f_n d\mu \ge \int_D \varphi d\mu$.
> 
> Với mỗi $n \in \mathbb{N}^*$, định nghĩa tập hợp:
> $$E_n = \{x \in D : f_n(x) \ge \alpha \varphi(x)\}$$
> Nhận xét các tính chất của dãy tập hợp $(E_n)$:
> - Tính tăng: Vì $f_{n+1} \ge f_n$, nếu $x \in E_n$ thì $f_{n+1}(x) \ge f_n(x) \ge \alpha \varphi(x)$, suy ra $x \in E_{n+1}$. Vậy $E_1 \subset E_2 \subset \dots \subset E_n \subset \dots$
> - Phủ toàn bộ $D$ ($\bigcup_{n=1}^\infty E_n = D$): Lấy $x \in D$ bất kỳ. 
> 	- Nếu $f(x) = 0$, do $0 \le \varphi \le f$ nên $\varphi(x) = 0$. Khi đó $\alpha \varphi(x) = 0 \le f_n(x)$ với mọi $n$, tức là $x \in E_n$ với mọi $n$.
> 	- Nếu $f(x) > 0$, vì $\alpha \in (0, 1)$ nên $\alpha \varphi(x) < \varphi(x) \le f(x)$. Do $\lim_{n \to \infty} f_n(x) = f(x)$, theo định nghĩa giới hạn, tồn tại một chỉ số $n_0$ đủ lớn sao cho $f_{n_0}(x) \ge \alpha \varphi(x)$. Suy ra $x \in E_{n_0}$.
> 	  
> Vậy dãy tập $(E_n)$ tăng dần và tiến tới $D$ ($E_n \uparrow D$).
> 
> Xét tích phân của $f_n$ trên $D$:
> $$\int_D f_n d\mu \ge \int_{E_n} f_n d\mu \ge \int_{E_n} \alpha \varphi d\mu = \alpha \int_{E_n} \varphi d\mu$$
> Hàm tập hợp $\nu(A) = \int_A \varphi d\mu$ (với $\varphi$ là hàm đơn giản) là một độ đo, do đó nó thỏa mãn tính liên tục từ dưới đối với dãy tập tăng $E_n \uparrow D$:
> $$\lim_{n \to \infty} \int_{E_n} \varphi d\mu = \int_D \varphi d\mu$$
> 
> Lấy giới hạn $n \to \infty$ cho bất đẳng thức phía trên:
> $$\lim_{n \to \infty} \int_D f_n d\mu \ge \alpha \lim_{n \to \infty} \int_{E_n} \varphi d\mu = \alpha \int_D \varphi d\mu$$
> Bất đẳng thức này đúng với mọi $\alpha \in (0, 1)$. Cho $\alpha \to 1^-$, ta thu được:
> $$\lim_{n \to \infty} \int_D f_n d\mu \ge \int_D \varphi d\mu$$
> Bất đẳng thức này lại đúng với mọi hàm đơn giản $\varphi \le f$. Lấy cận trên đúng (supremum) theo $\varphi \in S$ cho vế phải, ta có:
> $$
> \lim_{n \to \infty} \int_D f_n d\mu \ge \sup_{\varphi \le f} \int_D \varphi d\mu = \int_D f d\mu \tag{2}
> $$
> 
> **Kết luận:**
> Từ $(1)$ và $(2)$, ta kết luận được $\lim_{n \to \infty} \int_D f_n d\mu = \int_D f d\mu$. 

> [!thm] (Tính liên tục từ dưới của tích phân Lebesgue)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $g$ là một hàm số đo được, không âm trên $X$. Giả sử ta có một dãy các tập hợp đo được tăng dần theo quan hệ bao hàm:
> $$E_1 \subset E_2 \subset E_3 \subset \dots \subset E_n \subset E_{n+1} \subset \dots$$
> Đặt $E = \bigcup_{n=1}^\infty E_n$ là tập hợp giới hạn của dãy tập trên. Khi đó, ta có đẳng thức giới hạn:
> $$\lim_{n \to \infty} \int_{E_n} g d\mu = \int_E g d\mu$$

> [!prf]
> 
> **Bước 1: Chuyển đổi miền tích phân bằng hàm chỉ thị**
> Theo tính chất cơ bản của tích phân Lebesgue, việc lấy tích phân của hàm không âm $g$ trên một miền đo được $E_n$ hoàn toàn tương đương với việc lấy tích phân trên toàn bộ không gian $X$ của hàm $g$ nhân với hàm chỉ thị $\chi_{E_n}$:
> $$\int_{E_n} g d\mu = \int_X g(x) \cdot \chi_{E_n}(x) d\mu$$
> 
> Tương tự đối với tập hợp giới hạn $E$, ta cũng có:
> $$\int_E g d\mu = \int_X g(x) \cdot \chi_E(x) d\mu$$
> 
> **Bước 2: Xây dựng dãy hàm tăng đơn điệu**
> Với mỗi $n \in \mathbb{N}$, ta định nghĩa hàm số mới: $g_n(x) = g(x) \cdot \chi_{E_n}(x)$. Do $g \ge 0$ và $\chi_{E_n} \ge 0$, dãy $(g_n)_{n \in \mathbb{N}}$ là một dãy các hàm số đo được, không âm trên $X$.
> 
> Vì dãy tập hợp $(E_n)_{n \in \mathbb{N}}$ tăng dần theo giả thiết, dãy các hàm chỉ thị tương ứng cũng tăng đơn điệu tại mỗi điểm $x \in X$:
> $$\chi_{E_1}(x) \le \chi_{E_2}(x) \le \dots \le \chi_{E_n}(x) \le \chi_{E_{n+1}}(x) \le \dots$$
> 
> Nhân thêm hàm không âm $g(x)$ vào các vế của chuỗi bất đẳng thức trên, ta suy ra $(g_n)_{n \in \mathbb{N}}$ là một dãy hàm tăng đơn điệu trên không gian $X$:
> $$g_n(x) \le g_{n+1}(x) \quad (\forall x \in X, \forall n \in \mathbb{N})$$
> 
> **Bước 3: Xác định giới hạn điểm**
> Do $E = \bigcup_{n=1}^\infty E_n$, xét sự hội tụ điểm của dãy hàm chỉ thị khi $n \to \infty$:
> - Nếu $x \in E$, tồn tại một chỉ số $N_x$ đủ lớn để $x \in E_n$ với mọi $n \ge N_x$. Khi đó, $\chi_{E_n}(x) = 1$ với mọi $n \ge N_x$, dẫn đến $\lim_{n \to \infty} \chi_{E_n}(x) = 1 = \chi_E(x)$.
> - Nếu $x \notin E$, thì $x \notin E_n$ với mọi $n \in \mathbb{N}$. Khi đó, $\chi_{E_n}(x) = 0$ với mọi $n$, dẫn đến $\lim_{n \to \infty} \chi_{E_n}(x) = 0 = \chi_E(x)$.
> 
> Như vậy, dãy hàm chỉ thị hội tụ điểm về $\chi_E(x)$ trên toàn miền $X$. Suy ra:
> $$\lim_{n \to \infty} g_n(x) = \lim_{n \to \infty} g(x) \cdot \chi_{E_n}(x) = g(x) \cdot \chi_E(x)$$
> 
> **Bước 4: Áp dụng MCT**
> Do dãy $(g_n)_{n \in \mathbb{N}}$ thỏa mãn đầy đủ các điều kiện của Định lý Hội tụ Đơn điệu (MCT): là dãy hàm đo được, không âm và tăng đơn điệu về hàm giới hạn $g \cdot \chi_E$, ta được phép hoán vị dấu giới hạn $\lim$ và dấu tích phân $\int$:
> $$\lim_{n \to \infty} \int_X g_n d\mu = \int_X \left( \lim_{n \to \infty} g_n \right) d\mu$$
> 
> Thay các kết quả thu được từ Bước 1 và Bước 3 vào đẳng thức trên:
> $$\lim_{n \to \infty} \int_X g(x) \cdot \chi_{E_n}(x) d\mu = \int_X g(x) \cdot \chi_E(x) d\mu$$
> $$\implies \lim_{n \to \infty} \int_{E_n} g d\mu = \int_E g d\mu$$
> 
> Định lý được chứng minh hoàn tất. 

> [!thm] (Bổ đề 8.6: Định lý xấp xỉ cho hàm đơn giản)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo và $f$ là một hàm đo được, không âm, nhận giá trị thực mở rộng trên $X$ (tức là $f: X \to [0, \infty]$).
> Khi đó, luôn tồn tại một dãy các hàm đơn giản không âm $(\varphi_n)_{n=1}^\infty$ trên $X$ sao cho:
> 
> 1. $\varphi_n \uparrow f$ trên $X$ (Tức là $0 \le \varphi_1 \le \varphi_2 \le \dots \le f$ và $\lim_{n \to \infty} \varphi_n(x) = f(x)$ tại mọi $x \in X$).
> 2. $\varphi_n \to f$ hội tụ đều trên mọi tập con $E \subset X$ mà tại đó $f$ bị chặn.
> 3. $\lim_{n \to \infty} \int_D \varphi_n d\mu = \int_D f d\mu$ với mọi tập đo được $D \in \mathfrak{A}$.

> [!prf] 
> **Ý tưởng xây dựng (Construction):**
> Cố định một số nguyên $n \ge 1$. Ta cắt trục tung (tập giá trị của $f$) thành hai phần: phần bị chặn $[0, n)$ và phần không bị chặn $[n, \infty]$. 
> - Chia đoạn $[0, n)$ thành $n \cdot 2^n$ khoảng nhỏ bằng nhau, mỗi khoảng có độ dài $\frac{1}{2^n}$.
> - Đặt $I_{n,k} = \left[ \frac{k-1}{2^n}, \frac{k}{2^n} \right)$ với $k = 1, 2, \dots, n2^n$.
> 
> Tương ứng với các khoảng trên trục tung, ta lấy nghịch ảnh để tạo ra các tập hợp (các bậc thang) trên miền $X$:
> - $E_{n,k} = f^{-1}(I_{n,k}) = \left\{ x \in X : \frac{k-1}{2^n} \le f(x) < \frac{k}{2^n} \right\}$
> - $F_n = f^{-1}([n, \infty]) = \{ x \in X : f(x) \ge n \}$
> 
> Ta định nghĩa hàm đơn giản $\varphi_n$ bằng cách lấy giá trị cận dưới của mỗi khoảng:
> $$\varphi_n(x) = \sum_{k=1}^{n2^n} \frac{k-1}{2^n} \chi_{E_{n,k}}(x) + n \chi_{F_n}(x)$$
> 
> **Chứng minh Tính đơn điệu và hội tụ điểm:**
> - Đánh giá $\varphi_n \le f$: 
>   Điều này hiển nhiên từ cách dựng. Nếu $x \in E_{n,k}$ thì $\varphi_n(x) = \frac{k-1}{2^n} \le f(x)$. Nếu $x \in F_n$ thì $\varphi_n(x) = n \le f(x)$.
> - Đánh giá $\varphi_n \le \varphi_{n+1}$: 
>   Khi chuyển từ bước $n$ sang $n+1$, mỗi khoảng $I_{n,k}$ được chia làm hai nửa bằng nhau, và mức trần được nâng từ $n$ lên $n+1$. Việc "chia mịn" này khiến cho giá trị chốt dưới của các khoảng chứa $f(x)$ chỉ có thể giữ nguyên hoặc tăng lên, do đó $\varphi_n(x) \le \varphi_{n+1}(x)$ với mọi $x$.
> - Đánh giá $\lim_{n \to \infty} \varphi_n(x) = f(x)$: 
> 	  - Trường hợp $f(x) = \infty$: Khi đó $x \in F_n$ với mọi $n$, suy ra $\varphi_n(x) = n$. Lấy giới hạn ta có $\lim \varphi_n(x) = \infty = f(x)$.
> 	  - Trường hợp $f(x) < \infty$: Khi $n$ đủ lớn sao cho $n > f(x)$, điểm $x$ sẽ lọt vào một trong các tập $E_{n,k}$. Khi đó $f(x)$ và $\varphi_n(x)$ nằm trong cùng một khoảng có độ dài $\frac{1}{2^n}$. Do đó:
> 	  $$0 \le f(x) - \varphi_n(x) < \frac{1}{2^n}$$
> 	  Cho $n \to \infty$, khoảng cách này tiến về $0$, suy ra $\varphi_n(x) \to f(x)$.
> 
> **Chứng minh Hội tụ đều trên tập bị chặn:**
> Giả sử $f$ bị chặn trên tập $E$, tức là tồn tại số thực $M > 0$ sao cho $f(x) < M$ với mọi $x \in E$.
> Chọn một số nguyên $N > M$. Với mọi $n \ge N$ và mọi $x \in E$, ta luôn có $f(x) < M < n$.
> Do đó, đồ thị của $f$ trên tập $E$ hoàn toàn nằm trong phần đã được "chia mịn" (không chạm tới mức trần $n$). Theo lập luận ở trên, ta có:
> $$0 \le f(x) - \varphi_n(x) < \frac{1}{2^n} \quad (\forall x \in E, \forall n \ge N)$$
> Vì đại lượng $\frac{1}{2^n}$ hoàn toàn không phụ thuộc vào $x$, sự hội tụ này là hội tụ đều trên $E$.
> 
> **Chứng minh tính Bảo toàn tích phân qua giới hạn:**
> Vì dãy $(\varphi_n)$ là một dãy các hàm đo được không âm, tăng dần và hội tụ điểm về $f$ ($\varphi_n \uparrow f$). 
> Áp dụng trực tiếp Định lý Hội tụ Đơn điệu (MCT), ta suy ra:
> $$\lim_{n \to \infty} \int_D \varphi_n d\mu = \int_D f d\mu$$

> [!lem] (Bổ đề: Tính cộng tính hữu hạn của hàm đo được không âm)
> Cho $(X, \mathfrak{A}, \mu)$ là không gian độ đo. Nếu $f_1, f_2$ là các hàm đo được không âm trên $D \in \mathfrak{A}$, thì $f_1 + f_2$ cũng là hàm đo được không âm và:
> $$\int_D (f_1 + f_2) d\mu = \int_D f_1 d\mu + \int_D f_2 d\mu$$

> [!prf] 
> Theo Định lý xấp xỉ bằng hàm đơn giản (Lemma 8.6), tồn tại hai dãy hàm đơn giản không âm $(\varphi_n)$ và $(\psi_n)$ sao cho:
> $$\varphi_n \uparrow f_1 \quad \text{và} \quad \psi_n \uparrow f_2 \quad \text{khi } n \to \infty$$
> 
> Xét dãy hàm tổng $(\varphi_n + \psi_n)$. Rõ ràng đây cũng là một dãy các hàm đơn giản không âm, và theo tính chất giới hạn, ta có:
> $$(\varphi_n + \psi_n) \uparrow (f_1 + f_2) \quad \text{khi } n \to \infty$$
> 
> Vì tính cộng tính luôn đúng cho các hàm đơn giản (đã chứng minh ở bài trước), ta có phương trình đại số:
> $$\int_D (\varphi_n + \psi_n) d\mu = \int_D \varphi_n d\mu + \int_D \psi_n d\mu$$
> 
> Lấy giới hạn $n \to \infty$ cho cả hai vế. Áp dụng Định lý Hội tụ đơn điệu (MCT) cho cả ba dãy hàm tăng $(\varphi_n + \psi_n)$, $(\varphi_n)$ và $(\psi_n)$, ta được phép đẩy giới hạn qua dấu tích phân:
> $$\lim_{n \to \infty} \int_D (\varphi_n + \psi_n) d\mu = \lim_{n \to \infty} \int_D \varphi_n d\mu + \lim_{n \to \infty} \int_D \psi_n d\mu$$
> $$\implies \int_D (f_1 + f_2) d\mu = \int_D f_1 d\mu + \int_D f_2 d\mu$$
> *(Lưu ý: Bằng quy nạp toán học, tính chất này đúng cho một tổng hữu hạn bất kỳ $\sum_{k=1}^N f_k$).*

> [!thm] (Hệ quả 1: Tính $\sigma$-cộng tính của dãy hàm) 
> Cho $(f_n)_{n=1}^\infty$ là một dãy các hàm đo được không âm trên $D \in \mathfrak{A}$. Khi đó:
> $$\int_D \left( \sum_{n=1}^\infty f_n \right) d\mu = \sum_{n=1}^\infty \int_D f_n d\mu$$
> *(Có thể đổi chỗ tùy ý toán tử tích phân và tổng vô hạn).*

> [!prf] 
> Đặt $g_N = \sum_{n=1}^N f_n$ là tổng riêng thứ $N$ của chuỗi hàm. 
> Vì các $f_n \ge 0$, dãy tổng riêng $(g_N)$ là một dãy hàm đo được không âm tăng dần (không giảm) và hội tụ điểm về tổng của chuỗi:
> $$g_N \uparrow \sum_{n=1}^\infty f_n \quad \text{khi } N \to \infty$$
> 
> Áp dụng Bổ đề tính cộng tính hữu hạn cho hàm $g_N$, ta có:
> $$\int_D g_N d\mu = \int_D \left( \sum_{n=1}^N f_n \right) d\mu = \sum_{n=1}^N \int_D f_n d\mu$$
> 
> Lấy giới hạn $N \to \infty$ hai vế. Ở vế trái, vì $g_N$ là dãy tăng, ta được quyền áp dụng trực tiếp Định lý Hội tụ đơn điệu (MCT):
> $$\lim_{N \to \infty} \int_D g_N d\mu = \int_D \left( \lim_{N \to \infty} g_N \right) d\mu = \int_D \left( \sum_{n=1}^\infty f_n \right) d\mu$$
> Ở vế phải, giới hạn của chuỗi tổng riêng chính là định nghĩa của tổng vô hạn:
> $$\lim_{N \to \infty} \sum_{n=1}^N \int_D f_n d\mu = \sum_{n=1}^\infty \int_D f_n d\mu$$
> So sánh hai vế, ta thu được điều phải chứng minh. 

> [!thm] (Hệ quả 2: Tính $\sigma$-cộng tính trên tập hợp - Tích phân như một độ đo)
> Cho $f$ là một hàm đo được không âm trên không gian $X$. Giả sử $\{A_n\}_{n=1}^\infty$ là một họ đếm được các tập hợp đo được rời nhau đôi một, và $A = \bigcup_{n=1}^\infty A_n$. Khi đó:
> $$\int_A f d\mu = \sum_{n=1}^\infty \int_{A_n} f d\mu$$
> Từ đó suy ra: hàm tập hợp $\nu(E) = \int_E f d\mu$ thỏa mãn tiên đề $\sigma$-cộng tính và là một độ đo mới trên không gian.

> [!prf] 
> **1. Tính $\sigma$-cộng tính của tích phân:**
> Nhắc lại tính chất của hàm chỉ thị trên một họ các tập rời nhau: 
> Vì các tập $A_n$ rời nhau đôi một, hàm chỉ thị của tập hợp $A$ bằng tổng các hàm chỉ thị của từng tập $A_n$:
> $$\chi_A = \chi_{\bigcup_{n=1}^\infty A_n} = \sum_{n=1}^\infty \chi_{A_n}$$
> 
> Nhân cả hai vế với hàm không âm $f$, ta có biểu diễn phân rã của $f$ trên tập $A$:
> $$f \cdot \chi_A = f \cdot \left( \sum_{n=1}^\infty \chi_{A_n} \right) = \sum_{n=1}^\infty (f \cdot \chi_{A_n})$$
> 
> Lấy tích phân trên toàn bộ không gian $X$ cho cả hai vế:
> $$\int_X (f \cdot \chi_A) d\mu = \int_X \left( \sum_{n=1}^\infty f \cdot \chi_{A_n} \right) d\mu$$
> 
> Nhận xét rằng $(f \cdot \chi_{A_n})$ là một dãy các hàm đo được không âm. Áp dụng Hệ quả 1 (Tính $\sigma$-cộng tính của dãy hàm số) cho vế phải, ta được phép đưa dấu tổng vô hạn ra ngoài tích phân:
> $$\int_X \left( \sum_{n=1}^\infty f \cdot \chi_{A_n} \right) d\mu = \sum_{n=1}^\infty \int_X (f \cdot \chi_{A_n}) d\mu$$
> 
> Theo định nghĩa tích phân trên tập con $\int_E f d\mu = \int_X (f \cdot \chi_E) d\mu$, ta thu gọn lại các ký hiệu:
> $$\int_A f d\mu = \sum_{n=1}^\infty \int_{A_n} f d\mu$$
> Vậy ta đã chứng minh được tính $\sigma$-cộng tính của tích phân.
> 
> **2. Hàm tập hợp $\nu$ là một độ đo:**
> Để khẳng định hàm tập hợp $\nu: \mathfrak{A} \to [0, \infty]$ định nghĩa bởi $\nu(E) = \int_E f d\mu$ là một độ đo trên $(X, \mathfrak{A})$, ta kiểm tra tường minh 3 tiên đề của độ đo:
> 
> (i). Tính không âm (Non-negativity):
> Vì $f$ là hàm đo được không âm trên $X$ ($f(x) \ge 0$ với mọi $x \in X$), theo tính chất không âm của tích phân Lebesgue, với mọi tập đo được $E \in \mathfrak{A}$, ta luôn có:
> $$\nu(E) = \int_E f d\mu = \int_X f \cdot \chi_E d\mu \ge 0$$
> Đồng thời, giá trị tích phân này thuộc $[0, \infty]$, do đó $\nu$ là một hàm tập hợp đi từ $\mathfrak{A}$ vào $[0, \infty]$.
> 
> (ii). Độ đo của tập rỗng bằng 0 (Null empty set):
> Xét tập hợp $E = \emptyset$. Hàm chỉ thị của tập rỗng là hàm không hằng định bằng 0 trên $X$ ($\chi_{\emptyset}(x) = 0$ với mọi $x \in X$). Do đó:
> $$\nu(\emptyset) = \int_{\emptyset} f d\mu = \int_X f \cdot \chi_{\emptyset} d\mu = \int_X 0 d\mu = 0$$
> Tiên đề tập rỗng được thỏa mãn.
> 
> (iii). Tính $\sigma$-cộng tính ($\sigma$-additivity):
> Giả sử $\{A_n\}_{n=1}^{\infty}$ là một họ đếm được các tập hợp đo được rời nhau đôi một trong $\mathfrak{A}$ và $A = \bigcup_{n=1}^{\infty} A_n$. Theo kết quả biến đổi và áp dụng Định lý Hội tụ đơn điệu (MCT) đã chứng minh ở trên, ta có:
> $$\int_A f d\mu = \sum_{n=1}^{\infty} \int_{A_n} f d\mu$$
> Thay ký hiệu hàm tập hợp $\nu$ vào đẳng thức trên, ta thu được:
> $$\nu(A) = \sum_{n=1}^{\infty} \nu(A_n) \quad \text{hay} \quad \nu\left(\bigcup_{n=1}^{\infty} A_n\right) = \sum_{n=1}^{\infty} \nu(A_n)$$
> 
> Cả 3 điều kiện đều được thỏa mãn hoàn toàn. Vậy hàm tập hợp $\nu(E) = \int_E f d\mu$ là một độ đo mới được xác định trên không gian đo $(X, \mathfrak{A})$.
> 

> [!thm] (Tích phân của hàm đơn giản không âm là một độ đo mới: Cách 2)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo và $f$ là một hàm đo được không âm. Khi đó, hàm tập hợp định nghĩa bởi:
> $$
> \nu(E) = \int_E f d\mu, \quad \forall E \in \mathfrak{A}
> $$
> là một độ đo mới trên không gian ${} (X, \mathfrak{A}, \mu) {}$.

> [!prf] 
> **Bước 1: Xấp xỉ bằng hàm đơn giản**
> Theo Định lý xấp xỉ bằng hàm đơn giản (Bổ đề 8.6), vì $f$ là hàm đo được không âm, luôn tồn tại một dãy các hàm đơn giản không âm $(s_n)_{n=1}^\infty$ tăng dần và hội tụ điểm về $f$, tức là $s_n \uparrow f$ trên $X$.
> 
> Với mỗi $n \in \mathbb{N}^*$, ta định nghĩa một hàm tập hợp ${} \nu_n: \mathfrak{A} \to [0, \infty] {}$ như sau:
> $$
> \nu_n(E) = \int_E s_n d\mu
> $$
> 
> **Bước 2: Chứng minh $\nu_n$ là các độ đo**
> Vì $s_n$ là hàm đơn giản, nó có dạng biểu diễn chuẩn $s_n = \sum_{i=1}^k a_i \chi_{B_i}$ (với các hệ số $a_i \ge 0$ và các tập ${} B_i \in \mathfrak{A} {}$ rời nhau). Thay vào tính chất của tích phân hàm đơn giản, ta có:
> $$
> \nu_n(E) = \int_X \left( \sum_{i=1}^k a_i \chi_{B_i \cap E} \right) d\mu = \sum_{i=1}^k a_i \mu(B_i \cap E)
> $$
> Với mỗi tập $B_i$ cố định, đặt $\mu_{i}(E) = \mu(B_{i} \cap E)$, sử dụng Bổ đề: Tổ hợp tuyến tính của các độ đo là một độ đo: Vì $a_{i} > 0$ và $\mu_{i}$ là một đô đo, nên ta có  $\nu_n$ là độ đo trên $(X, \mathfrak{A}, \mu)$.
> 
> **Bước 3: Chỉ ra tính tăng của dãy độ đo**
> Do dãy hàm $s_n$ là dãy tăng ($s_n \le s_{n+1}$), theo tính chất đơn điệu của tích phân, với mọi tập ${} E \in \mathfrak{A} {}$, ta có:
> $$
> \nu_n(E) = \int_E s_n d\mu \le \int_E s_{n+1} d\mu = \nu_{n+1}(E)
> $$
> Vậy $(\nu_n)_{n=1}^\infty$ là một dãy các độ đo tăng.
> 
> **Bước 4: Qua giới hạn và kết luận**
> Áp dụng Định lý Hội tụ đơn điệu (MCT) cho dãy hàm tăng $s_n \uparrow f$ trên miền tích phân $E$:
> $$
> \lim_{n \to \infty} \nu_n(E) = \lim_{n \to \infty} \int_E s_n d\mu = \int_E f d\mu = \nu(E)
> $$
> Như vậy, hàm tập hợp $\nu(E)$ chính xác là giới hạn của một dãy các độ đo tăng $(\nu_n)$. Áp dụng bổ đề "Giới hạn của dãy độ đo tăng là một độ đo", ta lập tức kết luận $\nu$ là một độ đo hợp lệ trên $(X, \mathfrak{A}, \mu)$.

> [!thm] (Biểu diễn tích phân qua hàm đơn giản)
> Cho $f \ge 0$ là một hàm đo được trên $D$. Nhắc lại định nghĩa tích phân Lebesgue cho hàm đo được không âm:
> $$\int_D f \, d\mu = \sup_{0 \le s \le f} \int_D s \, d\mu$$
> trong đó $s \in S(D)$ (lớp các hàm đơn giản đo được). Khi đó, ta có đẳng thức:
> $$\int_D f \, d\mu = \int_0^\infty \mu(\{f \ge t\}) \, dt$$
> *(Xem thêm Định lý 8.24: Biểu diễn Layer Cake)*

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

> [!thm] (Prob 8.13: Tiêu chuẩn khả tích cho hàm đo được không âm)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$. Giả sử $f$ là một hàm đo được không âm, nhận giá trị thực mở rộng trên một tập hợp $D \in \mathfrak{A}$ với $\mu(D) < \infty$. Đặt $D_n = \{x \in D : f(x) \ge n\}$ với mọi $n \in \mathbb{Z}_+$. Chứng minh rằng $f$ khả tích ($\int_D f d\mu < \infty$) khi và chỉ khi $\sum_{n \in \mathbb{Z}_+} \mu(D_n) < \infty$.

> [!prf] 
> Quá trình chứng minh được chia làm các bước dựng hàm phụ và đánh giá tích phân dựa trên các kết quả hệ quả sẵn có:
> 
> **Bước 1: Chuyển chuỗi độ đo về tích phân chuỗi hàm chỉ thị**
> Gọi $\chi_{D_n}$ là hàm chỉ thị của tập đo được $D_n$. Theo định nghĩa tích phân, độ đo của tập $D_n$ chính là tích phân của hàm chỉ thị của nó trên $D$:
> $$\mu(D_n) = \int_D \chi_{D_n} d\mu$$
> Vì $(\chi_{D_n})_{n=1}^{\infty}$ là một dãy các hàm đo được không âm trên $D$, áp dụng Hệ quả 1 (Tính $\sigma$-cộng tính của dãy hàm), ta được phép hoán đổi vị trí toán tử tổng và tích phân:
> $$\sum_{n=1}^{\infty} \mu(D_n) = \sum_{n=1}^{\infty} \int_D \chi_{D_n} d\mu = \int_D \left( \sum_{n=1}^{\infty} \chi_{D_n} \right) d\mu$$
> 
> **Bước 2: Xác định và đánh giá hàm tổng phụ $g(x)$**
> Đặt $g(x) = \sum_{n=1}^{\infty} \chi_{D_n}(x)$. Hàm số này đếm số lượng các số nguyên dương $n$ sao cho $f(x) \ge n$. Tương tự ý tưởng phân tách trục tung của Định lý xấp xỉ cho hàm đơn giản, ta xét giá trị của $g(x)$ tại mọi điểm $x \in D$:
> - Trường hợp $f(x) = \infty$: Khi đó $x \in D_n$ với mọi $n \ge 1$, suy ra $\chi_{D_n}(x) = 1$ với mọi $n$, dẫn đến $g(x) = \infty$.
> - Trường hợp $f(x) < \infty$: Tồn tại một số nguyên không âm $k$ sao cho $k \le f(x) < k+1$. Khi đó, $f(x) \ge n$ với mọi số nguyên dương $1 \le n \le k$ và $f(x) < n$ với mọi $n \ge k+1$. Do đó, tổng các hàm chỉ thị bằng đúng phần nguyên của hàm số, tức là $g(x) = k = \lfloor f(x) \rfloor$.
> 
> Từ các lập luận trên, tại mọi điểm $x \in D$, ta luôn có bất đẳng thức kẹp:
> $$g(x) \le f(x) \le g(x) + 1$$
> 
> **Bước 3: Lấy tích phân và biện luận điều kiện khả tích**
> Áp dụng tính đơn điệu và tính cộng tính hữu hạn của tích phân (Bổ đề 1), lấy tích phân trên miền $D$ cho toàn bộ bất đẳng thức kép ở Bước 2:
> $$\int_D g \, d\mu \le \int_D f \, d\mu \le \int_D g \, d\mu + \int_D 1 \, d\mu$$
> Thay các kết quả tính toán $\int_D g \, d\mu = \sum_{n=1}^{\infty} \mu(D_n)$ và $\int_D 1 \, d\mu = \mu(D)$ vào hệ thức, ta có mối liên hệ:
> $$\sum_{n=1}^{\infty} \mu(D_n) \le \int_D f \, d\mu \le \sum_{n=1}^{\infty} \mu(D_n) + \mu(D)$$
> Do giả thiết miền tích phân có độ đo hữu hạn $\mu(D) < \infty$, ta đánh giá hai chiều bất đẳng thức:
> - ($\implies$): Nếu $\int_D f \, d\mu < \infty$, từ vế trái của bất đẳng thức kép ta suy ra $\sum_{n=1}^{\infty} \mu(D_n) \le \int_D f \, d\mu < \infty$. Do đó chuỗi số hội tụ.
> - ($\impliedby$): Nếu $\sum_{n=1}^{\infty} \mu(D_n) < \infty$, từ vế phải của bất đẳng thức kép và điều kiện $\mu(D) < \infty$, ta suy ra tích phân $\int_D f \, d\mu$ bị chặn trên bởi tổng của hai đại lượng hữu hạn. Do đó hàm số $f$ khả tích trên miền $D$.

> [!thm] (Hệ quả 3: Bổ đề Fatou)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo và $D \in \mathfrak{A}$. Giả sử $(f_n)_{n=1}^\infty$ là một dãy các hàm đo được không âm trên $D$. Khi đó:
> $$\int_D \left( \liminf_{n \to \infty} f_n \right) d\mu \le \liminf_{n \to \infty} \int_D f_n d\mu$$

> [!prf] 
> **Bước 1: Xây dựng dãy phụ không giảm**
> Với mỗi $n \in \mathbb{N}^*$, ta định nghĩa một hàm mới $g_n$ như sau:
> $$g_n(x) = \inf_{k \ge n} f_k(x) \quad (\forall x \in D)$$
> Vì các $f_k \ge 0$ và đo được, nên $g_n$ cũng là một hàm đo được không âm trên $D$.
> 
> Xét tính chất của dãy $(g_n)$:
> - Tính tăng: Khi $n$ tăng, tập các chỉ số $k \ge n$ nhỏ dần đi, do đó cận dưới đúng (infimum) sẽ phải giữ nguyên hoặc lớn hơn. Tức là $g_n \le g_{n+1}$ với mọi $n$.
> - Hội tụ về $\liminf$: Giới hạn của dãy $(g_n)$ chính là giới hạn dưới của dãy $(f_n)$:
>   $$\lim_{n \to \infty} g_n(x) = \sup_{n \ge 1} \left( \inf_{k \ge n} f_k(x) \right) = \liminf_{n \to \infty} f_n(x)$$
> Vậy ta có dãy $g_n$ tăng dần và tiến tới $\liminf f_n$, ký hiệu là $g_n \uparrow \liminf_{n \to \infty} f_n$.
> 
> **Bước 2: Thiết lập bất đẳng thức tích phân**
> Theo định nghĩa của $g_n$, vì $g_n$ là infimum của các $f_k$ ($k \ge n$), ta hiển nhiên có:
> $$g_n \le f_n \quad (\forall n \ge 1)$$
> Áp dụng tính đơn điệu của tích phân, ta suy ra:
> $$\int_D g_n d\mu \le \int_D f_n d\mu \quad (\forall n \ge 1)$$
> Lấy giới hạn dưới (liminf) khi $n \to \infty$ cho cả hai vế của bất đẳng thức, chiều của bất đẳng thức vẫn được giữ nguyên:
> $$\liminf_{n \to \infty} \int_D g_n d\mu \le \liminf_{n \to \infty} \int_D f_n d\mu \tag{1}$$
> 
> **Bước 3: Áp dụng Định lý Hội tụ đơn điệu (MCT)**
> Vì $(g_n)$ là một dãy hàm đo được không âm tăng dần ($g_n \uparrow \liminf f_n$), ta đủ điều kiện để áp dụng MCT:
> $$\lim_{n \to \infty} \int_D g_n d\mu = \int_D \left( \lim_{n \to \infty} g_n \right) d\mu = \int_D \left( \liminf_{n \to \infty} f_n \right) d\mu$$
> 
> Chú ý rằng vì giới hạn $\lim_{n \to \infty} \int_D g_n d\mu$ tồn tại, nên giá trị $\lim$ cũng chính là $\liminf$. Tức là:
> $$\liminf_{n \to \infty} \int_D g_n d\mu = \int_D \left( \liminf_{n \to \infty} f_n \right) d\mu \tag{2}$$
> 
> **Kết luận:**
> Thế $(2)$ vào vế trái của $(1)$, ta thu được điều phải chứng minh:
> $$\int_D \left( \liminf_{n \to \infty} f_n \right) d\mu \le \liminf_{n \to \infty} \int_D f_n d\mu$$

> [!thm] (Sự tương đương: Định lý Hội tụ đơn điệu là hệ quả của Bổ đề Fatou)
> Cho $(X, \mathfrak{A}, \mu)$ là không gian độ đo và $(f_n)_{n=1}^\infty$ là một dãy các hàm đo được không âm sao cho $f_n \uparrow f$ hầu khắp nơi.
> Nếu ta thừa nhận Bổ đề Fatou, ta có thể suy ra trực tiếp Định lý Hội tụ đơn điệu (MCT):
> $$\lim_{n \to \infty} \int_X f_n d\mu = \int_X f d\mu$$

> [!prf] 
> Quá trình chứng minh chỉ gồm 2 chiều bất đẳng thức:
> 
> **Chiều ($\le$): Sử dụng tính đơn điệu của tích phân**
> Vì dãy hàm tăng $f_n \uparrow f$, ta có $f_n \le f$ hầu khắp nơi với mọi $n \ge 1$.
> Áp dụng tính chất đơn điệu của tích phân đối với hàm không âm, ta có:
> $$\int_X f_n d\mu \le \int_X f d\mu$$
> Dãy số thực $\left( \int_X f_n d\mu \right)$ là một dãy không giảm. Do đó, giới hạn của nó tồn tại (có thể là vô hạn) và khi lấy giới hạn $n \to \infty$, bất đẳng thức vẫn được bảo toàn:
> $$\lim_{n \to \infty} \int_X f_n d\mu \le \int_X f d\mu \tag{1}$$
> 
> **Chiều ($\ge$): Sử dụng Bổ đề Fatou**
> Vì $(f_n)$ là một dãy hàm đo được không âm, ta có đủ điều kiện để áp dụng trực tiếp Bổ đề Fatou:
> $$\int_X \left( \liminf_{n \to \infty} f_n \right) d\mu \le \liminf_{n \to \infty} \int_X f_n d\mu$$
> 
> Ta đánh giá hai vế của bất đẳng thức này:
> - Ở vế trái: Do dãy $(f_n)$ hội tụ điểm về $f$, giới hạn dưới (liminf) cũng chính là giới hạn thông thường, tức là $\liminf_{n \to \infty} f_n = \lim_{n \to \infty} f_n = f$.
> - Ở vế phải: Do dãy số thực $\left( \int_X f_n d\mu \right)$ là dãy tăng nên giới hạn của nó tồn tại, suy ra $\liminf_{n \to \infty} \int_X f_n d\mu = \lim_{n \to \infty} \int_X f_n d\mu$.
> 
> Thay hai kết quả này vào bất đẳng thức Fatou ở trên, ta thu được:
> $$\int_X f d\mu \le \lim_{n \to \infty} \int_X f_n d\mu \tag{2}$$
> 
> **Kết luận:**
> Từ (1) và (2), bất đẳng thức xảy ra ở cả hai chiều, nên ta bắt buộc phải có dấu bằng:
> $$\lim_{n \to \infty} \int_X f_n d\mu = \int_X f d\mu$$
> Định lý Hội tụ đơn điệu (MCT) đã được chứng minh hoàn tất từ Bổ đề Fatou.

> [!thm] (Định lý 8.14: Hội tụ với dãy bị chặn trên bởi giới hạn)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $(f_n)_{n \in \mathbb{N}}$ là một dãy các hàm đo được, không âm trên tập $D \in \mathfrak{A}$.
> Giả sử $\lim_{n \to \infty} f_n = f$ tồn tại hầu khắp nơi (a.e.) trên $D$ và $f_n \le f$ hầu khắp nơi trên $D$ với mọi $n \in \mathbb{N}$. Khi đó, ta có:
> $$\int_D f d\mu = \lim_{n \to \infty} \int_D f_n d\mu$$

> [!prf] 
> Vì các giả thiết đều đúng hầu khắp nơi (a.e.), tồn tại một tập null $N \subset D$ ($\mu(N) = 0$) sao cho trên miền $D \setminus N$, ta có sự hội tụ điểm $\lim_{n \to \infty} f_n = f$ và bất đẳng thức $f_n \le f$ đúng. Do $\mu(N)=0$, các tích phân trên $D$ tương đương với tích phân trên $D \setminus N$.
> 
> Áp dụng Bổ đề Fatou cho dãy hàm không âm $f_n$, ta có đánh giá chặn dưới:
> $$\int_D f d\mu = \int_D \left( \liminf_{n \to \infty} f_n \right) d\mu \le \liminf_{n \to \infty} \int_D f_n d\mu$$
> 
> Mặt khác, do $f_n \le f$, áp dụng tính đơn điệu của tích phân và lấy giới hạn trên (limsup) hai vế, ta thu được đánh giá chặn trên:
> $$\int_D f_n d\mu \le \int_D f d\mu \implies \limsup_{n \to \infty} \int_D f_n d\mu \le \int_D f d\mu$$
> 
> Nối hai bất đẳng thức trên cùng và sử dụng $\liminf \le \limsup$, ta được:
> $$\int_D f d\mu \le \liminf_{n \to \infty} \int_D f_n d\mu \le \limsup_{n \to \infty} \int_D f_n d\mu \le \int_D f d\mu$$
> 
> Do hai đầu bất đẳng thức bằng nhau, giới hạn thực sự tồn tại và ta có điều phải chứng minh:
> $$\lim_{n \to \infty} \int_D f_n d\mu = \int_D f d\mu$$

> [!thm] (Hệ quả 4: Định lý Hội tụ đơn điệu cho dãy giảm)
> Cho $(f_n)_{n=1}^\infty$ là một dãy các hàm đo được không âm thỏa mãn $f_n \downarrow f$ hầu khắp nơi trên $D$. 
> Nếu tồn tại $k \ge 1$ sao cho $\int_D f_k d\mu < \infty$ (nghĩa là có ít nhất một hàm trong dãy là khả tích), thì:
> $$\lim_{n \to \infty} \int_D f_n d\mu = \int_D f d\mu$$

> [!prf] 
> Ta có thể giả sử $k=1$ (bỏ qua hữu hạn các số hạng đầu không làm thay đổi giới hạn).
> Đặt $h_n = f_1 - f_n$. Vì dãy $f_n$ giảm, nên dãy $h_n$ là dãy các hàm không âm và tăng dần ($h_n \uparrow f_1 - f$).
> 
> Áp dụng Định lý Hội tụ đơn điệu (MCT gốc) cho dãy $(h_n)$:
> $$\lim_{n \to \infty} \int_D (f_1 - f_n) d\mu = \int_D (f_1 - f) d\mu$$
> Vì $f_1$ khả tích nên $\int_D f_1 d\mu < \infty$. Dùng tính tuyến tính để tách giới hạn:
> $$\int_D f_1 d\mu - \lim_{n \to \infty} \int_D f_n d\mu = \int_D f_1 d\mu - \int_D f d\mu$$
> Giản ước $\int_D f_1 d\mu$ ở hai vế, ta có $\lim_{n \to \infty} \int_D f_n d\mu = \int_D f d\mu$. 

> [!thm] (Phản ví dụ cho Định lý Hội tụ đơn điệu giảm)
> Phản ví dụ này nhấn mạnh rằng: Đối với dãy hàm giảm ($f_n \downarrow f$), điều kiện tồn tại ít nhất một hàm số thành phần khả tích (tức là $\exists k, \int_D f_k d\mu < \infty$) là bắt buộc. 
> 
> Xét không gian đo Lebesgue $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$ với miền $D = [0, \infty)$. 
> Định nghĩa dãy hàm đặc trưng (hiện tượng khối lượng trượt):
> $$f_n(x) = \chi_{[n, \infty)}(x)$$
> 
> Dãy $f_n$ là dãy giảm ($f_{n+1} \le f_n$) và hội tụ điểm về hàm $f(x) = 0$ trên $D$. Tuy nhiên, do không có bất kỳ hàm $f_k$ nào trong dãy có tích phân hữu hạn, $f_n$ không bảo toàn giới hạn khi đi qua dấu tích phân:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu_L \neq \int_D f \, d\mu_L$$

> [!prf] 
> Ta chứng minh tính giảm đơn điệu và hội tụ điểm về ${} 0$ ($f_n \downarrow 0$):
> - Tính giảm đơn điệu: Vì các nửa khoảng lồng nhau $[n+1, \infty) \subset [n, \infty)$, nên theo tính chất của hàm chỉ thị, ta luôn có $\chi_{[n+1, \infty)}(x) \le \chi_{[n, \infty)}(x)$. Do đó, $f_{n+1}(x) \le f_n(x)$ với mọi $x \in \mathbb{R}$ và mọi $n \in \mathbb{N}$. Dãy hàm giảm đơn điệu.
> - Hội tụ điểm về 0: Lấy một điểm $x_0 \in \mathbb{R}$ bất kỳ. Theo nguyên lý Archimedes, luôn tồn tại số nguyên $n_0$ đủ lớn sao cho $n_0 > x_0$. Khi đó, với mọi $n \ge n_0$, ta có $x_0 \notin [n, \infty) \implies f_n(x_0) = 0$. 
>   Do đó, tại mọi điểm, hàm số có giá trị đuôi triệt tiêu:
>   $$\lim_{n \to \infty} f_n(x) = 0 = f(x)$$
> 
> Ta tính toán và so sánh các giá trị tích phân:
> - Tích phân của hàm giới hạn: $$\int_D f \, d\mu_L = \int_D 0 \, d\mu_L = 0$$
> - Tích phân của các hàm trong dãy: Vì miền xác định của hàm chỉ thị có độ đo Lebesgue vô hạn, nên tích phân của mọi hàm trong dãy đều bằng vô cùng:
>   $$\int_D f_n \, d\mu_L = \mu_L([n, \infty)) = \infty \quad \forall n \in \mathbb{N}$$
>   Do đó giới hạn của dãy tích phân là:
>   $$\lim_{n \to \infty} \int_D f_n \, d\mu_L = \lim_{n \to \infty} \infty = \infty$$
> 
> Đối chiếu hai kết quả, ta thu được mâu thuẫn:
> $$\infty \neq 0 \implies \lim_{n \to \infty} \int_D f_n \, d\mu_L \neq \int_D f \, d\mu_L$$
> Điều chứng tỏ định lý hội tụ đơn điệu là sai nếu thiếu đi điều kiện $\int_D f_k d\mu_L < \infty$.

> [!thm] (Phản ví dụ: Hội tụ đều trên không gian có độ đo vô hạn)
> Phản ví dụ này chỉ ra rằng: Trên một không gian có độ đo vô hạn ($\mu(D) = \infty$), một dãy hàm số dù có hội tụ đều về hàm giới hạn trên toàn bộ miền xác định, nhưng giới hạn vẫn không được phép hoán đổi với dấu tích phân.
> 
> Xét không gian độ đo Lebesgue trên nửa đường thẳng: $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$ với miền tích phân $D = [1, \infty)$. Rõ ràng, miền này có độ đo vô hạn: $\mu_L(D) = \infty$.
> 
> Định nghĩa dãy hàm không âm trên $D$:
> $$f_n(x) = \frac{1}{n} \chi_{[1, n]}(x)$$
> 
> Chứng minh rằng dãy hàm số này hội tụ đều về hàm giới hạn $f(x) = 0$ trên $D$, nhưng giới hạn tích phân không bảo toàn:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu_L \neq \int_D f \, d\mu_L$$

> [!prf] 
> 
> Ta chứng minh dãy hàm hội tụ đều về $0$ trên miền $D$
> Xét khoảng cách sai số theo chuẩn (supremum norm) giữa dãy hàm  $f_n$ và hàm giới hạn $f(x) = 0$ trên toàn bộ miền $D = [1, \infty)$:
> $$\sup_{x \in [1, \infty)} |f_n(x) - f(x)| = \sup_{x \in [1, \infty)} \left| \frac{1}{n} \chi_{[1, n]}(x) - 0 \right| = \frac{1}{n}$$
> Lấy giới hạn khi chỉ số số hạng $n \to \infty$, ta thu được:
> $$\lim_{n \to \infty} \left( \sup_{x \in [1, \infty)} |f_n(x) - f(x)| \right) = \lim_{n \to \infty} \frac{1}{n} = 0$$
> Theo định nghĩa của sự hội tụ đều, dãy hàm số $f_n$ hội tụ đều tuyệt đối về hàm $f = 0$ trên toàn bộ miền vô hạn $D$.
> 
> Ta tính toán và so sánh các giá trị tích phân:
> - Tích phân của hàm giới hạn:
>   $$
>   \int_D f \, d\mu_L = \int_{[1, \infty)} 0 \, d\mu_L = 0
>   $$
> - Tích phân của các số hạng trong dãy: Với mỗi cố định $n \in \mathbb{N}^*$ ($n \ge 2$), áp dụng định nghĩa tích phân của hàm chỉ thị:
>    $$\int_D f_n \, d\mu_L = \int_{[1, \infty)} \frac{1}{n} \chi_{[1, n]} \, d\mu_L = \frac{1}{n} \cdot \mu_L([1, n]) = \frac{1}{n} \cdot (n - 1) = 1 - \frac{1}{n}$$
>   Lấy giới hạn của dãy số kết quả tích phân này khi $n \to \infty$:
>   $$\lim_{n \to \infty} \int_D f_n \, d\mu_L = \lim_{n \to \infty} \left( 1 - \frac{1}{n} \right) = 1$$
> 
> So sánh hai vế qua phép lấy giới hạn, ta thu được:
> $$1 \neq 0 \implies \lim_{n \to \infty} \int_D f_n \, d\mu_L \neq \int_D f \, d\mu_L$$
> Điều này chứng tỏ giới hạn tích phân không bảo toàn nếu điều kiện không gian có độ đo hữu hạn $\mu(D) < \infty$ bị thiếu đi.

# 2. Hàm bị chặn

> [!obs] Nhận xét: Từ phản ví dụ đến Định lý Hội tụ bị chặn
> Từ phản ví dụ hàm đặc trưng $f_n = \chi_{[n, \infty)}$, ta nhận thấy tính chất qua giới hạn của tích phân đối với dãy giảm sẽ không được bảo toàn nếu diện tích dưới đồ thị phân kỳ ra vô cùng theo phương ngang. Sự phân kỳ này bắt nguồn từ hai yếu tố:
> 1. Không gian đo có độ đo vô hạn ($\mu(D) = \infty$).
> 2. Dãy hàm không bị chặn trên bởi một hàm khả tích.
> 
> Khi ta giới hạn không gian đo thành tập có độ đo hữu hạn ($\mu(D) < \infty$) và bổ sung giả thiết dãy hàm bị chặn đều bởi một hằng số $M$, tính phân kỳ này bị loại bỏ. Dưới các điều kiện đó, sự hội tụ điểm hầu khắp nơi của dãy hàm bắt buộc kéo theo sự hội tụ của tích phân tương ứng. Đây chính là nội dung của Định lý Hội tụ bị chặn (Bounded Convergence Theorem - BCT).

> [!thm] (Hệ quả 5: Bổ đề Fatou ngược)
> Cho $(f_n)_{n=1}^\infty$ là một dãy các hàm đo được trên $D$. Giả sử tồn tại một hàm khả tích $g$ (tức là $\int_D g d\mu < \infty$) sao cho $f_n \le g$ hầu khắp nơi trên $D$ với mọi $n$. Khi đó:
> $$\limsup_{n \to \infty} \int_D f_n d\mu \le \int_D \left( \limsup_{n \to \infty} f_n \right) d\mu$$

> [!prf] 
> Ý tưởng cốt lõi là lật ngược dãy $(f_n)$ lại để tạo thành một dãy không âm và sử dụng Bổ đề Fatou gốc.
> Vì $f_n \le g$ a.e., ta xét dãy hàm phụ $h_n = g - f_n$. 
> Rõ ràng $h_n \ge 0$ a.e. Áp dụng Bổ đề Fatou (gốc) cho dãy không âm $(h_n)$, ta có:
> $$\int_D \left( \liminf_{n \to \infty} (g - f_n) \right) d\mu \le \liminf_{n \to \infty} \int_D (g - f_n) d\mu$$
> 
> Vì $g$ là hàm cố định và khả tích (tích phân hữu hạn, không bị dính $\infty - \infty$), ta có thể tách $g$ ra khỏi các giới hạn:
> - Vế trái: $\liminf (g - f_n) = g - \limsup f_n$
> - Vế phải: $\liminf \int (g - f_n) d\mu = \int g d\mu - \limsup \int f_n d\mu$
> 
> Thay vào bất đẳng thức:
> $$\int_D g d\mu - \int_D \left( \limsup_{n \to \infty} f_n \right) d\mu \le \int_D g d\mu - \limsup_{n \to \infty} \int_D f_n d\mu$$
> Giản ước lượng hữu hạn $\int_D g d\mu$ ở cả hai vế (bắt buộc cần điều kiện $\int_D g d\mu < \infty$), và đổi dấu, ta thu được:
> $$\limsup_{n \to \infty} \int_D f_n d\mu \le \int_D \left( \limsup_{n \to \infty} f_n \right) d\mu$$

> [!thm] Định lý Hội tụ bị chặn (Bounded Convergence Theorem - BCT)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian đo và $D \in \mathfrak{A}$ là một tập có độ đo hữu hạn (tức là $\mu(D) < \infty$). 
> Giả sử $(f_n)_{n=1}^\infty$ là một dãy các hàm đo được trên $D$ thỏa mãn hai điều kiện:
> 1. Hội tụ điểm: $\lim_{n \to \infty} f_n(x) = f(x)$ hầu khắp nơi trên $D$.
> 2. Bị chặn đều: Tồn tại một hằng số $M > 0$ sao cho $|f_n(x)| \le M$ hầu khắp nơi trên $D$, với mọi $n \ge 1$.
> 
> Khi đó, các hàm $f_n$ và $f$ đều khả tích trên $D$, và giới hạn có thể hoán đổi với dấu tích phân:
> $$\lim_{n \to \infty} \int_D f_n d\mu = \int_D \left( \lim_{n \to \infty} f_n \right) d\mu = \int_D f d\mu$$

> [!prf] 
> Nhờ giả thiết hội tụ điểm $f_n \to f$ và tính bị chặn $|f_n| \le M$, ta suy ra hàm giới hạn cũng thỏa mãn $|f| \le M$ hầu khắp nơi trên $D$.
> 
> Do tập $D$ có độ đo hữu hạn ($\mu(D) < \infty$), hàm hằng $M$ là một hàm khả tích trên $D$:
> $$\int_D M d\mu = M \cdot \mu(D) < \infty$$
> Áp dụng Bổ đề Fatou cho các dãy hàm không âm được xây dựng từ $f_n$ và $M$:
> 
> **Bước 1: Áp dụng Bổ đề Fatou**
> Xét dãy hàm không âm $g_n = f_n + M \ge 0$. Áp dụng Bổ đề Fatou:
> $$\int_D \liminf_{n \to \infty} (f_n + M) d\mu \le \liminf_{n \to \infty} \int_D (f_n + M) d\mu$$
> $$\implies \int_D (f + M) d\mu \le \liminf_{n \to \infty} \left( \int_D f_n d\mu + \int_D M d\mu \right)$$
> Vì $\int_D M d\mu$ là một giá trị thực hữu hạn, ta giản ước nó ở cả hai vế:
> $$\int_D f d\mu \le \liminf_{n \to \infty} \int_D f_n d\mu \tag{1}$$
> 
> **Bước 2: Áp dụng Bổ đề Fatou ngược**
> Xét dãy hàm không âm $h_n = M - f_n \ge 0$. Áp dụng Bổ đề Fatou:
> $$\int_D \liminf_{n \to \infty} (M - f_n) d\mu \le \liminf_{n \to \infty} \int_D (M - f_n) d\mu$$
> $$\implies \int_D (M - f) d\mu \le \liminf_{n \to \infty} \left( \int_D M d\mu - \int_D f_n d\mu \right)$$
> Sử dụng tính chất của giới hạn dưới: $\liminf (-x_n) = - \limsup (x_n)$, vế phải được biến đổi thành:
> $$\int_D M d\mu - \int_D f d\mu \le \int_D M d\mu - \limsup_{n \to \infty} \int_D f_n d\mu$$
> Tiếp tục giản ước giá trị hữu hạn $\int_D M d\mu$ ở hai vế và đổi chiều bất đẳng thức:
> $$\int_D f d\mu \ge \limsup_{n \to \infty} \int_D f_n d\mu \tag{2}$$
> 
> **Bước 3: Kết hợp các bất đẳng thức**
> Từ (1) và (2), ta thiết lập được chuỗi bất đẳng thức:
> $$\limsup_{n \to \infty} \int_D f_n d\mu \le \int_D f d\mu \le \liminf_{n \to \infty} \int_D f_n d\mu$$
> Theo tính chất cơ bản của giới hạn, ta luôn có $\liminf_{n \to \infty} \int_D f_n d\mu \le \limsup_{n \to \infty} \int_D f_n d\mu$. 
> Do đó, đẳng thức bắt buộc phải xảy ra trên toàn bộ chuỗi. Điều này chứng tỏ giới hạn của dãy tích phân tồn tại và bằng chính $\int_D f d\mu$:
> $$\lim_{n \to \infty} \int_D f_n d\mu = \int_D f d\mu$$

> [!thm] Định lý Hội tụ Bị chặn Lebesgue (Dominated Convergence Theorem - DCT)
> Cho $(f_n)_{n=1}^\infty$ là một dãy hàm số đo được trong không gian đo $(\Omega, \mathfrak{M}, \mu)$.
> Giả sử dãy $(f_n)$ thỏa mãn hai điều kiện:
> 1. Hội tụ điểm: $f_n(x) \to f(x)$ hầu khắp nơi trên $\Omega$.
> 2. Bị chặn bởi hàm khả tích (Dominated): Tồn tại một hàm khả tích $g$ (tức là $\int_\Omega |g| d\mu < \infty$) sao cho:
> $$|f_n(x)| \le g(x) \quad \text{hầu khắp nơi, với mọi } n \ge 1$$
> 
> Khi đó, hàm giới hạn $f$ cũng khả tích, và ta được phép đưa giới hạn qua dấu tích phân:
> $$\lim_{n \to \infty} \int_\Omega f_n d\mu = \int_\Omega f d\mu$$
> Hệ quả tương đương: $\lim_{n \to \infty} \int_\Omega |f_n - f| d\mu = 0$

> [!prf]
> Vì $|f_n| \le g$ và $f_n \to f$ hầu khắp nơi, ta suy ra $|f| \le g$ hầu khắp nơi, do đó $f$ cũng là hàm khả tích.
> 
> Từ giả thiết $|f_n| \le g$, ta có bất đẳng thức kép: $-g \le f_n \le g$.
> Điều này sinh ra hai dãy hàm không âm để ta áp dụng Bổ đề Fatou:
> 
> **Bước 1: Xét dãy không âm $(g + f_n \ge 0)$**
> Áp dụng Bổ đề Fatou (thuận):
> $$\int_\Omega \liminf_{n \to \infty} (g + f_n) d\mu \le \liminf_{n \to \infty} \int_\Omega (g + f_n) d\mu$$
> $$\implies \int_\Omega (g + f) d\mu \le \int_\Omega g d\mu + \liminf_{n \to \infty} \int_\Omega f_n d\mu$$
> Vì $\int_\Omega g d\mu < \infty$, ta giản ước nó ở hai vế:
> $$\int_\Omega f d\mu \le \liminf_{n \to \infty} \int_\Omega f_n d\mu \tag{1}$$
> 
> **Bước 2: Xét dãy không âm $(g - f_n \ge 0)$**
> Lại áp dụng Bổ đề Fatou:
> $$\int_\Omega \liminf_{n \to \infty} (g - f_n) d\mu \le \liminf_{n \to \infty} \int_\Omega (g - f_n) d\mu$$
> $$\implies \int_\Omega (g - f) d\mu \le \int_\Omega g d\mu - \limsup_{n \to \infty} \int_\Omega f_n d\mu$$
> Tiếp tục giản ước $\int_\Omega g d\mu$ hữu hạn ở hai vế và đổi chiều bất đẳng thức:
> $$\int_\Omega f d\mu \ge \limsup_{n \to \infty} \int_\Omega f_n d\mu \tag{2}$$
> 
> **Bước 3: Nguyên lý kẹp**
> Từ (1) và (2), ta có chuỗi bất đẳng thức:
> $$\limsup_{n \to \infty} \int_\Omega f_n d\mu \le \int_\Omega f d\mu \le \liminf_{n \to \infty} \int_\Omega f_n d\mu$$
> Vì $\liminf \le \limsup$, đẳng thức bắt buộc xảy ra. Giới hạn tồn tại và bằng chính $\int_\Omega f d\mu$. 
> 
> **Bước 4: Chứng minh $\lim_{n \to \infty} \int_\Omega |f_n - f| \, d\mu = 0$**
> 
> Để chứng minh hệ quả này, ta nhận thấy sai khác giữa hai hàm bị kẹp bởi:
> $$|f_n(x) - f(x)| \le |f_n(x)| + |f(x)| \le g(x) + g(x) = 2g(x)$$
> 
> Do đó, dãy hàm không âm $2g - |f_n - f| \ge 0$. Áp dụng Bổ đề Fatou cho dãy này:
> $$\int_\Omega \liminf_{n \to \infty} (2g - |f_n - f|) \, d\mu \le \liminf_{n \to \infty} \int_\Omega (2g - |f_n - f|) \, d\mu$$
> 
> Vì $|f_n - f| \to 0$ hầu khắp nơi, vế trái trở thành $\int_\Omega 2g \, d\mu$. Ta tách vế phải theo tính tuyến tính:
> $$\int_\Omega 2g \, d\mu \le \int_\Omega 2g \, d\mu - \limsup_{n \to \infty} \int_\Omega |f_n - f| \, d\mu$$
> 
> Do $\int_\Omega g \, d\mu < \infty$, ta triệt tiêu đại lượng hữu hạn này ở hai vế, dẫn đến:
> $$\limsup_{n \to \infty} \int_\Omega |f_n - f| \, d\mu \le 0$$
> 
> Vì tích phân của hàm không âm luôn không âm, ta có $\liminf_{n \to \infty} \int_\Omega |f_n - f| \, d\mu \ge 0$. Theo nguyên lý kẹp, giới hạn tồn tại và bắt buộc phải bằng $0$. Hệ quả được chứng minh.

> [!thm] (Prob 9.22: Mở rộng của Định lý Hội tụ Bị chặn (Generalized DCT))
> Giả sử ta thay thế điều kiện bị chặn tuyệt đối bởi một hàm hằng số $g$ bằng một dãy các hàm khả tích biến đổi $g_n$. Phát biểu tổng quát như sau:
> 
> Cho dãy hàm đo được $(f_n)_{n=1}^\infty$ và hàm $f$ đo được trên $D$. Cho dãy hàm không âm, khả tích $(g_n)_{n=1}^\infty$ và hàm không âm, khả tích $g$ trên $D$ thỏa mãn:
> 1. $f_n \to f$ và $g_n \to g$ hầu khắp nơi (a.e.) trên $D$.
> 2. $\lim_{n \to \infty} \int_D g_n \, d\mu = \int_D g \, d\mu < \infty$.
> 3. $|f_n| \le g_n$ trên $D$ với mọi $n \ge 1$.
> 
> Khi đó, hàm giới hạn $f$ cũng khả tích trên $D$ và ta có quyền đưa giới hạn qua dấu tích phân:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$$

> [!prf]
> Vì $|f_n| \le g_n$, lấy giới hạn hai vế ta có $|f| \le g$ hầu khắp nơi trên $D$. Do $g$ khả tích, ta suy ra ngay $f$ cũng khả tích. 
> Từ điều kiện 3, ta có bất đẳng thức kẹp động: $-g_n \le f_n \le g_n$. Thiết lập hai dãy hàm không âm biến đổi để áp dụng Bổ đề Fatou:
> 
> **Bước 1: Xét dãy hàm không âm $(g_n + f_n \ge 0)$**
> Áp dụng Bổ đề Fatou thuận cho dãy này trên miền $D$:
> $$\int_D \liminf_{n \to \infty} (g_n + f_n) \, d\mu \le \liminf_{n \to \infty} \int_D (g_n + f_n) \, d\mu$$
> 
> Nhờ tính chất hội tụ điểm hầu khắp nơi, vế trái hội tụ về $\int_D (g + f) \, d\mu$. Vế phải tách thành tổng các $\liminf$:
> $$\int_D g \, d\mu + \int_D f \, d\mu \le \lim_{n \to \infty} \int_D g_n \, d\mu + \liminf_{n \to \infty} \int_D f_n \, d\mu$$
> 
> Sử dụng giả thiết $\lim \int_D g_n d\mu = \int_D g d\mu < \infty$, ta triệt tiêu đại lượng hữu hạn này ở hai vế, thu được rào chặn dưới:
> $$\int_D f \, d\mu \le \liminf_{n \to \infty} \int_D f_n \, d\mu \tag{1}$$
> 
> **Bước 2: Xét dãy hàm không âm $(g_n - f_n \ge 0)$**
> Tiếp tục áp dụng Bổ đề Fatou cho dãy hiệu:
> $$\int_D \liminf_{n \to \infty} (g_n - f_n) \, d\mu \le \liminf_{n \to \infty} \int_D (g_n - f_n) \, d\mu$$
> $$\implies \int_D g \, d\mu - \int_D f \, d\mu \le \lim_{n \to \infty} \int_D g_n \, d\mu + \liminf_{n \to \infty} \int_D (-f_n) \, d\mu$$
> 
> Chú ý rằng $\liminf (-a_n) = - \limsup a_n$. Thay vào và tiếp tục giản ước $\int_D g \, d\mu < \infty$ ở hai vế:
> $$-\int_D f \, d\mu \le - \limsup_{n \to \infty} \int_D f_n \, d\mu \implies \int_D f \, d\mu \ge \limsup_{n \to \infty} \int_D f_n \, d\mu \tag{2}$$
> 
> **Bước 3: Nguyên lý kẹp**
> Kết hợp hai đánh giá $(1)$ và $(2)$, ta có chuỗi bao hàm:
> $$\limsup_{n \to \infty} \int_D f_n \, d\mu \le \int_D f \, d\mu \le \liminf_{n \to \infty} \int_D f_n \, d\mu$$
> 
> Vì bất đẳng thức $\liminf \le \limsup$ luôn đúng, toàn bộ chuỗi trên ép buộc các dấu bằng phải xảy ra. Do đó, giới hạn tồn tại và thỏa mãn đẳng thức:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$$
> Định lý mở rộng được chứng minh hoàn tất. 

> [!thm] (Tính liên tục từ trên của tích phân Lebesgue)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $g$ là một hàm số đo được trên $X$. Giả sử hàm $g$ khả tích Lebesgue trên $X$, tức là $\int_X |g| d\mu < \infty$. 
> Giả sử ta có một dãy các tập hợp đo được giảm dần theo quan hệ bao hàm:
> $$E_1 \supset E_2 \supset E_3 \supset \dots \supset E_n \supset E_{n+1} \supset \dots$$
> Đặt $E = \bigcap_{n=1}^\infty E_n$ là tập hợp giới hạn của dãy tập trên. Khi đó, ta có đẳng thức giới hạn:
> $$\lim_{n \to \infty} \int_{E_n} g d\mu = \int_E g d\mu$$

> [!prf] 
> 
> **Bước 1: Chuyển đổi miền tích phân bằng hàm chỉ thị**
> Theo tính chất cơ bản của tích phân Lebesgue, việc lấy tích phân của hàm $g$ trên các miền đo được $E_n$ và $E$ hoàn toàn tương đương với việc lấy tích phân trên toàn bộ không gian $X$ sau khi đã nhân thêm các hàm chỉ thị tương ứng:
> $$\int_{E_n} g d\mu = \int_X g(x) \cdot \chi_{E_n}(x) d\mu$$
> $$\int_E g d\mu = \int_X g(x) \cdot \chi_E(x) d\mu$$
> 
> Định nghĩa dãy hàm số mới trên $X$ bằng công thức: $g_n(x) = g(x) \cdot \chi_{E_n}(x)$. Do $g$ và $\chi_{E_n}$ đo được, $(g_n)_{n \in \mathbb{N}}$ là một dãy các hàm số đo được trên $X$.
> 
> **Bước 2: Xác định giới hạn điểm**
> Do $E = \bigcap_{n=1}^\infty E_n$, xét sự hội tụ điểm của dãy hàm chỉ thị $(\chi_{E_n})_{n \in \mathbb{N}}$ khi $n \to \infty$:
> - Nếu $x \in E$, thì $x \in E_n$ với mọi $n \in \mathbb{N}$ (theo định nghĩa của tập giao). Do đó, $\chi_{E_n}(x) = 1$ với mọi $n$, dẫn đến $\lim_{n \to \infty} \chi_{E_n}(x) = 1 = \chi_E(x)$.
> - Nếu $x \notin E$, tồn tại một chỉ số $N_x$ đủ lớn sao cho $x \notin E_{N_x}$. Vì dãy tập hợp giảm dần, ta cũng có $x \notin E_n$ với mọi $n \ge N_x$. Do đó, $\chi_{E_n}(x) = 0$ với mọi $n \ge N_x$, dẫn đến $\lim_{n \to \infty} \chi_{E_n}(x) = 0 = \chi_E(x)$.
> 
> Từ hai trường hợp trên, dãy hàm chỉ thị luôn hội tụ điểm về $\chi_E(x)$ trên toàn bộ không gian $X$. Suy ra, dãy hàm $g_n$ hội tụ điểm về hàm giới hạn:
> $$\lim_{n \to \infty} g_n(x) = \lim_{n \to \infty} g(x) \cdot \chi_{E_n}(x) = g(x) \cdot \chi_E(x) \quad (\forall x \in X)$$
> 
> **Bước 3: Tìm hàm trội khả tích**
> Để áp dụng Định lý Hội tụ bị chặn, ta cần tìm một hàm khả tích làm chặn cho toàn bộ dãy hàm $|g_n|$. 
> Do giá trị của hàm chỉ thị luôn thỏa mãn $0 \le \chi_{E_n}(x) \le 1$ với mọi $x \in X$, ta có đánh giá trị tuyệt đối sau:
> $$|g_n(x)| = |g(x) \cdot \chi_{E_n}(x)| = |g(x)| \cdot \chi_{E_n}(x) \le |g(x)| \quad (\forall x \in X, \forall n \in \mathbb{N})$$
> 
> Đặt hàm trội $G(x) = |g(x)|$. Theo giả thiết ban đầu, $g$ là hàm khả tích nên hàm trội $G$ cũng là một hàm số khả tích trên $X$ ($\int_X G d\mu < \infty$).
> 
> **Bước 4: Áp dụng DCT**
> Dãy hàm số đo được $(g_n)_{n \in \mathbb{N}}$ thỏa mãn đầy đủ hai điều kiện của Định lý Hội tụ bị chặn Lebesgue (DCT):
> - Hội tụ điểm về hàm số $g \cdot \chi_E$ trên toàn miền $X$.
> - Bị chặn tuyệt đối bởi một hàm trội khả tích $G = |g|$.
> 
> Do đó, theo DCT, ta được phép hoán vị dấu giới hạn và dấu tích phân:
> $$\lim_{n \to \infty} \int_X g_n d\mu = \int_X \left( \lim_{n \to \infty} g_n \right) d\mu$$
> 
> Thay các biểu thức tích phân miền từ Bước 1 và hàm giới hạn từ Bước 2 vào đẳng thức trên, ta thu được:
> $$\lim_{n \to \infty} \int_X g(x) \cdot \chi_{E_n}(x) d\mu = \int_X g(x) \cdot \chi_E(x) d\mu$$
> $$\implies \lim_{n \to \infty} \int_{E_n} g d\mu = \int_E g d\mu$$
> 
> Định lý được chứng minh hoàn tất. 

$\xi$

> [!prob] (Prob 8.10)
> Xét không gian độ đo Lebesgue $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$.
> 
> (a) Hãy xây dựng một dãy các hàm thực, không âm, đo được Lebesgue $(f_n)_{n \in \mathbb{N}}$ và hàm giới hạn $f$ trên $\mathbb{R}$ sao cho dãy $(f_n)$ hội tụ đều về $f$ trên $\mathbb{R}$ nhưng giới hạn tích phân không bảo toàn:
> $$\lim_{n \to \infty} \int_{\mathbb{R}} f_n \, d\mu_L \neq \int_{\mathbb{R}} f \, d\mu_L$$
> 
> (b) Hãy xây dựng một dãy các hàm thực, không âm, đo được Lebesgue $(f_n)_{n \in \mathbb{N}}$ và hàm giới hạn $f$ trên $\mathbb{R}$ sao cho dãy hàm giảm đơn điệu về $f$ khi $n \to \infty$ trên $\mathbb{R}$ ($f_n \downarrow f$) nhưng giới hạn tích phân không bảo toàn:
> $$\lim_{n \to \infty} \int_{\mathbb{R}} f_n \, d\mu_L \neq \int_{\mathbb{R}} f \, d\mu_L$$

> [!prf] 
> 
> Câu (a): Phản ví dụ cho trường hợp Hội tụ đều (Hiện tượng khối lượng trốn thoát ra vô cùng)
> Với mỗi $n \in \mathbb{N}^*$, ta định nghĩa dãy hàm đặc trưng:
> $$f_n(x) = \frac{1}{n} \chi_{[0, n]}(x)$$
> Chọn hàm giới hạn: $f(x) = 0$ với mọi $x \in \mathbb{R}$.
> 
> Xét khoảng cách sai số theo chuẩn $\sup$ giữa $f_n$ và $f$ trên toàn bộ $\mathbb{R}$:
> $$\sup_{x \in \mathbb{R}} |f_n(x) - f(x)| = \sup_{x \in \mathbb{R}} \left| \frac{1}{n} \chi_{[0, n]}(x) - 0 \right| = \frac{1}{n}$$
> Lấy giới hạn khi $n \to \infty$:
> $$\lim_{n \to \infty} \left( \sup_{x \in \mathbb{R}} |f_n(x) - f(x)| \right) = \lim_{n \to \infty} \frac{1}{n} = 0$$
> Điều này chứng minh dãy hàm $f_n$ hội tụ đều về hàm $f = 0$ trên $\mathbb{R}$.
> 
> Tích phân của các hàm trong dãy: Theo định nghĩa tích phân hàm chỉ thị, với mọi $n \in \mathbb{N}^*$:
>   $$\int_{\mathbb{R}} f_n \, d\mu_L = \int_{\mathbb{R}} \frac{1}{n} \chi_{[0, n]} \, d\mu_L = \frac{1}{n} \cdot \mu_L([0, n]) = \frac{1}{n} \cdot n = 1$$
>   Do đó, giới hạn của dãy tích phân là: $\lim_{n \to \infty} \int_{\mathbb{R}} f_n \, d\mu_L = \lim_{n \to \infty} 1 = 1$.
> Tích phân của hàm giới hạn: $\int_{\mathbb{R}} f \, d\mu_L = \int_{\mathbb{R}} 0 \, d\mu_L = 0$.
> 
> Rõ ràng $1 \neq 0$, ta kết luận giới hạn đi qua dấu tích phân không bảo toàn dù hội tụ đều.
> 
> Câu (b): Phản ví dụ cho trường hợp Hội tụ giảm (Hiện tượng khối lượng trượt)
> Với mỗi $n \in \mathbb{N}$, định nghĩa dãy hàm đặc trưng:
> $$f_n(x) = \chi_{[n, \infty)}(x)$$
> Chọn hàm giới hạn: $f(x) = 0$ với mọi $x \in \mathbb{R}$.
> 
> - Tính giảm đơn điệu: Vì $[n+1, \infty) \subset [n, \infty)$, nên theo tính chất hàm chỉ thị, ta luôn có $f_{n+1}(x) \le f_n(x)$ với mọi $x \in \mathbb{R}$ và mọi $n$. Dãy hàm giảm đơn điệu.
> - Hội tụ điểm về $0$: Lấy một điểm $x_0 \in \mathbb{R}$ bất kỳ. Theo nguyên lý Archimedes, luôn tồn tại số nguyên $n_0$ đủ lớn sao cho $n_0 > x_0$. Khi đó, với mọi $n \ge n_0$, ta có $x_0 \notin [n, \infty) \implies f_n(x_0) = 0$. 
>   Do đó, giới hạn điểm tại mọi điểm luôn bằng 0: $\lim_{n \to \infty} f_n(x) = 0 = f(x)$.
> 
> Tích phân của các hàm trong dãy: Vì miền xác định của hàm chỉ thị có độ đo Lebesgue vô hạn nên với mọi $n \in \mathbb{N}$:
>   $$\int_{\mathbb{R}} f_n \, d\mu_L = \mu_L([n, \infty)) = \infty$$
> Do giá trị của mọi số hạng luôn là vô cùng, ta có giới hạn: $\lim_{n \to \infty} \int_{\mathbb{R}} f_n \, d\mu_L = \infty$.
> Tích phân của hàm giới hạn: $\int_{\mathbb{R}} f \, d\mu_L = \int_{\mathbb{R}} 0 \, d\mu_L = 0$.
> 
> Kết quả thu được là $\infty \neq 0$, định lý hội tụ đơn điệu cho dãy giảm sai do thiếu điều kiện có ít nhất một hàm trong dãy khả tích (tích phân hữu hạn).

> [!prob] (Prob 8.11)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian đo và $f$ là một hàm đo được, không âm trên $X$ sao cho $f$ hữu hạn $\mu$-hầu khắp nơi ($\mu$-a.e) trên $X$. Định nghĩa dãy hàm $f_{n}$ trên $X$:
> $$
> f_{n}(x) = \begin{cases}
> f(x) & \text{nếu } f(x) \le n\\
> 0 & \text{nếu } f(x) > n
> \end{cases}
> $$
> Chứng minh rằng $\lim_{ n \to \infty } \int_{X} f_{n} d\mu = \int_{X} f d\mu$.

> [!prf]
> Đặt $E_{n} = \{ x \in X: f(x) \le n \}$. Gọi $\chi_{E_{n}}$ là hàm chỉ thị cho tập đo được $E_{n}$. Khi đó ta có biểu diễn cho dãy hàm $f_{n}(x)$:
> $$
> f_{n}(x) = f(x) \cdot \chi_{E_{n}}(x)
> $$
> Ta sẽ chứng minh $f_{n}$ theo biểu diễn trên là một hàm đơn điệu tăng và hội tụ về hàm $f$ hầu khắp nơi (a.e) để áp dụng MCT.
> - Tính đơn điệu: Với mỗi $n \in \mathbb{N}$, rõ ràng $f(x) \le n$ suy ra $f(x) \le n+1$, nên ta có $E_{n} \subset E_{n+1}$. Vì $E_{n}$ có số phần tử tăng, khả năng $x \in E_{n}$ sẽ tăng dần theo chỉ số $n$, dẫn tới $\chi_{E_{1}} \le \chi_{E_{2}} \le \dots \chi_{E_{n}} \le \dots$, $\forall x \in X$. Do $f(x) \ge 0$, từ tính tăng của hàm chỉ thị, ta suy ra $0 \le f_{1}(x) \le f_{2}(x) \le \dots f_{n}(x) \le \dots$, $\forall x \in X$.
> - Hội tụ về $f$ hầu khắp nơi: Gọi $N = \{ x \in X: f(x) = \infty \}$ là tập các điểm mà hàm $f$ phân kì. Theo giả thiết, $f$ hữu hạn $\mu$-a.e nên $\mu(N)= 0$. Xét $x \in X \setminus N$ là tập hợp điểm mà $f(x) < \infty$. Theo nguyên lý Archimedes, ta luôn tìm được $N \in \mathbb{N}$, sao cho $f(x) \le n$, $\forall n \ge N$. khi đó với mỗi $x \in E_{n}$, ta có $\chi_{E_{n}}(x) = 1$. Suy ra:
> $$
> \lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } f(x) \cdot 1 = f(x) \quad \forall x \in X \setminus N
> $$
> Vì $\mu(N) = 0$, ta kết luận dãy hàm hội tụ điểm về hàm $f$ hầu khắp nơi trên $X$:
> $$
> \lim_{n \to \infty} f_n(x) = f(x) \quad \mu\text{-a.e. trên } X
> $$
> 
> Ta có $f_{n}$ là dãy các hàm đo được không âm và tăng đơn điêu, hội tụ hầu khắp về $f$ trên $X$. Áp dụng Định lý Hội tụ Đơn điệu (MCT), ta đẩy giới hạn qua dấu tích phân:
> $$
> \lim_{n \to \infty} \int_X f_n \, d\mu = \int_X \left( \lim_{n \to \infty} f_n \right) d\mu = \int_X f \, d\mu
> $$
> Vậy bài toán đã được chứng minh

> [!prob] (Prob 8.15)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian đo. Cho $f$ là các hàm nhận giá trị thực mở rộng, $\mathfrak{A}$-đo được trên $X$ và hữu hạn $\mu$-hầu khắp nơi trên $X$. Chứng minh rằng $f$ khả tích theo $\mu$ trên $X$ khi và chỉ khi:
> $$
> \sum_{n \in \mathbb{Z}_+} 2^{n} \mu(\{ x \in X: f(x) > 2^{n}\}) < \infty 
> $$

> [!prf]
> Đặt $A_n = \{x \in X : f(x) > 2^n\}$ với mọi $n \in \mathbb{Z}_+ = \{1, 2, 3, \dots\}$. Ta cần chứng minh $\int_X f d\mu < \infty \iff \sum_{n=1}^\infty 2^n \mu(A_n) < \infty$.
> Gọi $\chi_{A_{n}}$ là hàm chỉ thị của tập đo được $A_{n}$. Theo định nghĩa tích phân, độ đo của $D_{n}$ chính là tích phân của hàm chỉ thị của nó trên $X$:
> $$
> \mu(A_n) = \int_X \chi_{A_n} d\mu
> $$
> Vì $(\chi_{A_n})_{n=1}^{\infty}$ là một dãy các hàm đo được không âm trên $D$, áp dụng hệ quả Tính $\sigma$-cộng tính của dãy hàm, ta được phép hoán đổi vị trí tổng và tích phân:
> $$
> \sum_{n=1}^\infty 2^n \mu(A_n) = \sum_{n=1}^\infty \int_X 2^n \chi_{A_n} d\mu = \int_X \left( \sum_{n=1}^\infty 2^n \chi_{A_n}(x) \right) d\mu
> $$
> Đặt $g(x) = \sum_{n=1}^\infty 2^n \chi_{A_n}(x)$. Vì $f(x) < \infty$ hầu khắp nơi trên $X$, xét các điểm $x \in X$ có giá trị hữu hạn. Do dãy $(2^n)_{n=0}^\infty$ tăng ngặt và tiến ra vô cùng, ta tìm được một số nguyên không âm $k \in \mathbb{N}$ sao cho:
> $$
> 2^k \le f(x) < 2^{k+1}
> $$
> Ta khảo sát $g(x)$ tại từng mức giá trị, suy ra từ hàm chỉ thị $\chi_{A_{n}}(x)$:
> - Trường hợp $1\le n \le k-1$:
> 	- Ta có $n \le k-1 \implies n+1 \le k \implies 2^n \cdot 2 \le 2^k$. Kết hợp giả thiết $2^{k} \le f(x)$, ta được $2^{n} \le 2\cdot 2^{n} \le 2^{k} \le f(x)$.
> 	- Khi đó: vì $f(x) > 2^{n}$ đúng với mọi $n$ từ $1$ tới $k-1$, ta có $g(x) = \sum_{n=1}^{k-1} 2^n + 0 = 2^1 + 2^2 + \dots + 2^{k-1}$
> - Trường hợp $n \ge k +1$:
>   Vì $2^n \ge 2^{k+1} > f(x)$, điều kiện $f(x) > 2^n$ không thỏa. Do đó $\chi_{A_n}(x) = 0$ dẫn tới $g(x) = 0$.
> - Trường hợp $n = k$: 
> 	- Nếu $f(x) > 2^{k}$, ta có: $g(x) = \sum_{n=1}^{k} 2^n = (2^1 + 2^2 + \dots + 2^{k-1}) + 2^k$
> 	- Nếu $f(x) = 2^{k}$, ta có $g(x) = \sum_{n=1}^{k-1} 2^n + 0 = 2^1 + 2^2 + \dots + 2^{k-1}$
> 	  
> Ta rút ra kết luận: trong tất cả trường hợp, ta đều có $g(x) \ge \sum_{n=1}^{k-1} 2^n = 2^k - 2$. 
> Kết hợp với giả thiết $f(x) < 2^{k+1}$ hay $2^k > \frac{1}{2}f(x)$, ta suy ra: $g(x) > \frac{1}{2}f(x) - 2$ hay $f(x)<g(x) + 4$.
> Mà $f(x) \ge 2^{k} > 2^{k} - 2$ nên ta có $f(x) \ge g(x)$.
> Vậy ta kết hợp hai chiều bất đẳng thức để được: 
> $$
> g(x) \le f(x) < 2g(x) + 4
> $$
> Áp dụng tính đơn điệu và tính cộng tính hữu hạn của tích phân, lấy tích phân trên $X$ cho bất đẳng thức ở trên, ta được:
> $$
> \int_X g \, d\mu \le \int_X f \, d\mu \le 2\int_X g \, d\mu + 4\mu(X)
> $$
> Thay kết quả tính toán, ta được:
> $$
> \sum_{n=1}^\infty 2^n \mu(A_n) \le \int_X f \, d\mu \le 2 \sum_{n=1}^\infty 2^n \mu(A_n) + 4\mu(X)
> $$
> Do giả thiết đề bài cho không gian có độ đo hữu hạn, tức là $\mu(X) < \infty$, nên $4\mu(X)$ là một hằng số thực là một chặn trên. Ta biện luận hai chiều:
> - ($\iff$): Nếu chuỗi độ đo hội tụ ($\sum_{n=1}^\infty 2^n \mu(A_n) < \infty$), thì vế phải của bất đẳng thức kẹp là hữu hạn, kéo theo tích phân $\int_X f d\mu < \infty$ (hàm $f$ khả tích).
> - ($\impliedby$): Nếu hàm $f$ khả tích ($\int_X f d\mu < \infty$), dựa vào vế trái của bất đẳng thức kẹp, chuỗi độ đo $\sum_{n=1}^\infty 2^n \mu(A_n)$ bị chặn bởi một số hữu hạn, tức là chuỗi hội tụ.

> [!prob] (Prob 8.16)
> Cho $(X, \mathcal{A}, \mu)$ là một không gian độ đo bất kỳ. Giả sử $f$ là một hàm đo được nhận giá trị thực, không âm và bị chặn trên $X$. Chứng minh rằng $f$ khả tích đối với $\mu$ trên $X$ khi và chỉ khi:
> $$
> \sum_{n \in \mathbb{Z}_+} \frac{1}{2^n} \mu\left(\left\{x \in X : f(x) > \frac{1}{2^n}\right\}\right) < \infty
> $$

> [!prf]
> Đặt $B_{n} = \left\{  x \in X: f(x) > \frac{1}{2^{n}}  \right\}$ với mọi $n \in \mathbb{Z}_+ = \{1, 2, 3, \dots\}$. Ta cần chứng minh $\int_X f d\mu < \infty \iff \sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) < \infty$.
> Gọi $\chi_{B_{n}}$ là hàm chỉ thị của tập đo được $B_{n}$. Theo định nghĩa tích phân, độ đo của $D_{n}$ chính là tích phân của hàm chỉ thị của nó trên $X$:
> $$
> \mu(B_n) = \int_X \chi_{B_n} d\mu
> $$
> Vì $(\chi_{A_n})_{n=1}^{\infty}$ là một dãy các hàm đo được không âm trên $D$, áp dụng hệ quả Tính $\sigma$-cộng tính của dãy hàm, ta được phép hoán đổi vị trí tổng và tích phân:
> $$
> \sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) = \sum_{n=1}^\infty \int_X \frac{1}{2^n} \chi_{B_n} d\mu = \int_X \left( \sum_{n=1}^\infty \frac{1}{2^n} \chi_{B_n}(x) \right) d\mu
> $$
> Đặt $g(x) = \sum_{n=1}^\infty \frac{1}{2^n} \chi_{B_n}(x)$. Vì $f$ bị chặn trên $X$, tồn tại một số nguyên dương $N \in \mathbb{Z}_+$ đủ lớn sao cho $f(x) \le N$ với mọi $x \in X$. Ta xét giá trị của $g(x)$ dựa trên các phân vùng giá trị của $f(x)$ suy ra từ hàm chỉ thị $\chi_{B_{n}}(x)$:
> - Vì dãy $\frac{1}{2^{n}}\to 0$ là dãy giảm với ${} f(x) > 0 {}$, nên ta tìm được $k \in \mathbb{Z}_{+}$ sao cho:
>   $$
>  \frac{1}{2^{k+1}} < f(x) \le \frac{1}{2^k}
>   $$ 
> - Với $n \ge k+1$: 
> 	 - Ta có$\frac{1}{2^n} \le \frac{1}{2^{k+1}} < f(x)$ nghĩa là điều kiện $f(x) > \frac{1}{2^n}$ đúng.
> 	- Khi đó $g(x) = \sum_{n=k+1}^\infty \frac{1}{2^n} \cdot 1 = \frac{1}{2^{k+1}} + \frac{1}{2^{k+2}} + \dots = \frac{\frac{1}{2^{k+1}}}{1 - \frac{1}{2}} = \frac{1}{2^k}$
> - Với $1\le n \le k+1$: 
>  Ta có điều kiện $\frac{1}{2^n} \ge \frac{1}{2^{k-1}} > \frac{1}{2^k} \ge f(x)$ nghĩa là $f(x) > \frac{1}{2^n}$ sai, dẫn tới $g(x) = 0$.
> - Với $n =  k$: 
>   Ta có điều kiện $f(x) \ge \frac{1}{2^{n}}$, $g(x)$ có thê nhận giá trị $0$ hoặc $\frac{1}{2^k}$.
>   
>  Ta kết luận trong trường hợp $f(x) > 0$, ta luôn có $g(x) \ge \frac{1}{2^k}$.
>  Kết hợp với giả thiết $f(x) \le \frac{1}{2^{k}}$, ta có $g(x) \ge f(x)$.
>  Xét riêng trường hợp $f(x) =0$, khi đó điều kiện $0> \frac{1}{2^{k}}$ là sai dẫn tới quay lại trường hợp cho $g(x) = 0$.
>  Ta lại có: 
>  $$
>  g(x) = \sum_{n=1}^\infty \frac{1}{2^n} \chi_{B_n}(x) \le \sum_{n=k}^\infty \frac{1}{2^n} = \frac{1}{2^k} + \frac{1}{2^{k+1}} + \dots = \frac{\frac{1}{2^k}}{1 - \frac{1}{2}} = 4 \cdot \frac{1}{2^{k+1}}
>  $$
> Kết hợp với giả thiết $\frac{1}{2^{k+1}}\le f(x)$, ta được $g(x) \le 4 \cdot f(x)$
> Vậy kết hợp hai chiều bất đẳng thức, ta được:
> $$
> \frac{1}{4}g(x) \le f(x) \le g(x)
> $$
> Áp dụng tính đơn điệu và tính cộng tính hữu hạn của tích phân, lấy tích phân trên  cho bất đẳng thức ở trên, ta được:
> $$
> \frac{1}{4}\int_X g \, d\mu \le \int_X f \, d\mu \le \int_X g \, d\mu
> $$
> Thay kết quả tính toán, ta được:
> $$
> \frac{1}{4}\sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) \le \int_X f \, d\mu \le \sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n)
> $$
> Ta biện luận:
> - ($\implies$): Nếu hàm $f$ khả tích ($\int_X f d\mu < \infty$), dựa vào vế trái ta có $\sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) \le 4 \int_X f d\mu < \infty$, tức là chuỗi độ đo hội tụ.
> - ($\impliedby$): Nếu chuỗi độ đo hội tụ ($\sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) < \infty$), dựa vào vế phải ta suy ra tích phân của hàm số $\int_X f d\mu < \infty$, nghĩa là hàm $f$ khả tích.

> [!thm] (Prob 8.17: Hội tụ hầu khắp nơi từ hội tụ trong $L^p$)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo. Cho $f_n$ và $f$ là các hàm nhận giá trị thực mở rộng, đo được trên $D \in \mathfrak{A}$. Giả sử $f$ nhận giá trị thực hữu hạn hầu khắp nơi trên $D$. 
> Giả sử tồn tại một dãy số dương ${} (\varepsilon_n)_{n \in \mathbb{N}}$ sao cho:
> 1. $\sum_{n \in \mathbb{N}} \varepsilon_n < \infty$
> 2. $\int_D |f_n - f|^p d\mu < \varepsilon_n$ với mọi $n \in \mathbb{N}$, với một $p \in (0, \infty)$ cố định.
> 
> Chứng minh rằng $f_n \to f$ hầu khắp nơi (a.e.) trên $D$.

> [!prf] 
> 
> Từ giả thiết thứ hai, ta lấy tổng hai vế cho tất cả $n \in \mathbb{N}$. Kết hợp với giả thiết thứ nhất, ta có chuỗi các tích phân hội tụ:
> $$\sum_{n \in \mathbb{N}} \left( \int_D |f_n - f|^p d\mu \right) \le \sum_{n \in \mathbb{N}} \varepsilon_n < \infty$$
> 
> Vì $|f_n - f|^p \ge 0$ với mọi $n$, ta áp dụng tính $\sigma$-cộng tính của tích phân để hoán vị dấu tổng và dấu tích phân:
> $$\int_D \left( \sum_{n \in \mathbb{N}} |f_n - f|^p \right) d\mu = \sum_{n \in \mathbb{N}} \left( \int_D |f_n - f|^p d\mu \right) < \infty$$
> 
> Đặt hàm số $g(x) = \sum_{n \in \mathbb{N}} |f_n(x) - f(x)|^p$. Nhận thấy $g(x)$ là một hàm đo được, không âm.
> Vì tích phân của $g(x)$ trên $D$ là hữu hạn, theo Bổ đề 8.2, hàm $g(x)$ bắt buộc phải nhận giá trị hữu hạn hầu khắp nơi trên $D$.
> 
> Mặt khác, theo giả thiết, $f(x)$ cũng nhận giá trị thực hữu hạn hầu khắp nơi. Gọi $N$ là tập hợp chứa các điểm làm cho $g(x) = \infty$ hoặc $f(x)$ vô hạn. Ta có $\mu(N) = 0$. 
> Với mọi $x \in D \setminus N$, ta có:
> $$\sum_{n \in \mathbb{N}} |f_n(x) - f(x)|^p < \infty$$
> 
> Xét tại một điểm $x \in D \setminus N$ cố định, ta có một chuỗi số thực hội tụ. Theo tính chất cơ bản của chuỗi, nếu một chuỗi hội tụ thì số hạng tổng quát của nó phải tiến về $0$. Do đó:
> $$\lim_{n \to \infty} |f_n(x) - f(x)|^p = 0$$
> 
> Vì $p \in (0, \infty)$ là một số dương cố định, $|f_n(x) - f(x)|^p \to 0$ tương đương với:
> $$\lim_{n \to \infty} |f_n(x) - f(x)| = 0 \implies \lim_{n \to \infty} f_n(x) = f(x)$$
> 
> Lập luận này đúng với mọi $x \in D \setminus N$ (nơi $\mu(N) = 0$). Vậy ta kết luận dãy hàm $f_n$ hội tụ về $f$ hầu khắp nơi trên $D$. 

> [!thm] (Prob 8.18: Trích dãy con hội tụ hầu khắp nơi từ hội tụ trong $L^p$)
> Cho $(X, \mathcal{A}, \mu)$ là một không gian độ đo. Cho $f_n$ và $f$ là các hàm nhận giá trị thực mở rộng, $\mathcal{A}$-đo được trên $D \in \mathcal{A}$, và giả sử $f$ nhận giá trị thực hầu khắp nơi trên $D$. Giả sử tồn tại một dãy số dương ${} (\varepsilon_n)_{n \in \mathbb{N}}$ sao cho:
> 1. $\lim_{n \to \infty} \varepsilon_n = 0$
> 2. $\int_D |f_n - f|^p d\mu < \varepsilon_n$ với mọi $n \in \mathbb{N}$, với một $p \in (0, \infty)$ cố định.
> 
> Chứng minh rằng dãy $f_n$ có một dãy con $(f_{n_k} : k \in \mathbb{N})$ hội tụ đến $f$ hầu khắp nơi (a.e.) trên $D$.

> [!prf] 
> 
> Theo giả thiết thứ nhất, ta có $\lim_{n \to \infty} \varepsilon_n = 0$. 
> Dựa vào định nghĩa giới hạn, với mỗi số nguyên dương $k \in \mathbb{N}$, ta luôn luôn tìm được một dãy chỉ số $n_k \in \mathbb{N}$ tăng dần, sao cho:
> $$\varepsilon_{n_k} < \frac{1}{2^k}$$
> 
> Xét chuỗi số dương tạo bởi dãy con $(\varepsilon_{n_k})_{k \in \mathbb{N}}$, ta thấy nó bị chặn trên bởi một chuỗi hình học hội tụ:
> $$\sum_{k \in \mathbb{N}} \varepsilon_{n_k} < \sum_{k \in \mathbb{N}} \frac{1}{2^k} = 1 < \infty$$
>
> Xét riêng dãy con các hàm số $(f_{n_k})_{k \in \mathbb{N}}$ và dãy số dương tương ứng $(\varepsilon_{n_k})_{k \in \mathbb{N}}$. 
> 
> Kiểm tra hai điều kiện của mệnh đề Prob 8.17 với dãy con này:
> - (i): Chuỗi số dương hội tụ, $\sum_{k \in \mathbb{N}} \varepsilon_{n_k} < \infty$ (đã chứng minh ở Bước 1).
> - (ii): Từ giả thiết thứ hai của đề bài, với mọi chỉ số thuộc dãy con $n_k$, ta luôn có:
> $$\int_D |f_{n_k} - f|^p d\mu < \varepsilon_{n_k} \quad (\forall k \in \mathbb{N})$$
> 
> Do cả hai điều kiện trên đều thỏa, áp dụng kết quả Prob 8.17 cho dãy con $(f_{n_k})_{k \in \mathbb{N}}$, ta thu được kết luận:
> Dãy con $f_{n_k} \to f$ hầu khắp nơi (a.e.) trên $D$.
> 
> Chứng minh hoàn tất.

> [!thm] (Prob 8.20)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $f$ là một hàm đo được nhận giá trị thực mở rộng trên $X$. Giả sử tồn tại một hằng số $p \in (0, \infty)$ sao cho $|f|^p$ khả tích Lebesgue trên $X$ ($\int_X |f|^p d\mu < \infty$). 
> Khi đó, ta có giới hạn sau:
> $$\lim_{\lambda \to \infty} \lambda^p \mu(\{x \in X : |f(x)| \ge \lambda\}) = 0$$

> [!prf] 
> 
> Đặt $g(x) = |f(x)|^p$. Do $f$ đo được nên $g$ là hàm số đo được không âm trên $X$. Theo giả thiết về tính khả tích của $|f|^p$, ta có:
> $$\int_X g d\mu = \int_X |f|^p d\mu < \infty$$
> 
> Với mỗi số thực $\lambda > 0$, do hàm số lũy thừa bậc $p$ đồng biến trên $[0, \infty)$, ta có sự tương đương giữa các tập mức:
> $$\{x \in X : |f(x)| \ge \lambda\} = \{x \in X : |f(x)|^p \ge \lambda^p\} = \{x \in X : g(x) \ge \lambda^p\}$$
> 
> Lấy độ đo $\mu$ hai vế, ta viết lại thành:
> $$\lambda^p \mu(\{x \in X : |f(x)| \ge \lambda\}) = \lambda^p \mu(\{x \in X : g(x) \ge \lambda^p\})$$
> 
> Kí hiệu $E_\lambda = \{x \in X : g(x) \ge \lambda^p\}$. Trên tập $E_\lambda$, ta luôn có đánh giá chặn dưới cho hàm số: $g(x) \ge \lambda^p$.
> 
> Áp dụng tính đơn điệu của tích phân Lebesgue cho hàm không âm, lấy tích phân hai vế trên riêng miền tập mức $E_\lambda$, ta thu được:
> $$\int_{E_\lambda} g d\mu \ge \int_{E_\lambda} \lambda^p d\mu = \lambda^p \int_{E_\lambda} 1 d\mu = \lambda^p \mu(E_\lambda)$$
> 
> Viết lại bất đẳng thức trên, ta có chặn trên:
> $$0 \le \lambda^p \mu(\{x \in X : g(x) \ge \lambda^p\}) \le \int_{E_\lambda} g d\mu$$
> 
> Khi cho $\lambda \to \infty$, hằng số $\lambda^p \to \infty$. Xét giới hạn của dãy các tập mức giảm dần $E_\lambda$:
> $$\bigcap_{\lambda > 0} \{x \in X : g(x) \ge \lambda^p\} = \{x \in X : g(x) = \infty\}$$
> 
> Vì hàm $g$ khả tích ($\int_X g d\mu < \infty$), tập hợp các điểm làm cho hàm nhận giá trị vô cùng bắt buộc phải là một tập null có độ đo bằng $0$:
> $$\mu(\{x \in X : g(x) = \infty\}) = 0$$
> 
> Theo tính chất liên tục từ trên của tích phân Lebesgue, phần đuôi tích phân trên miền tập mức sẽ triệt tiêu khi lấy giới hạn:
> $$\lim_{\lambda \to \infty} \int_{\{g \ge \lambda^p\}} g d\mu = \int_{\{g = \infty\}} g d\mu = 0$$
> 
> Nhờ chuỗi bất đẳng thức thiết lập ở Bước 2:
> $$0 \le \lambda^p \mu(\{x \in X : |f(x)| \ge \lambda\}) \le \int_{\{g \ge \lambda^p\}} g d\mu$$
> 
> Khi $\lambda \to \infty$, vế phải tiến về $0$. Theo định lý giới hạn kẹp, đại lượng ở giữa buộc phải tiến về $0$:
> $$\lim_{\lambda \to \infty} \lambda^p \mu(\{x \in X : |f(x)| \ge \lambda\}) = 0$$
> 
> Chứng minh hoàn tất. 

> [!thm] (Prob 8.24: Biểu diễn Layer Cake)
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
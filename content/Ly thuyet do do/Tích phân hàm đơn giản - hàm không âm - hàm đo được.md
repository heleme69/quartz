# 1. Tích phân hàm đơn giản

> [!def] (Hàm đơn giản)  
> Cho một không gian độ đo $(X, \mathfrak{A}, \mu)$. Một hàm $\varphi$ được gọi là hàm đơn giản nếu thỏa các điều kiện sau:  
> 
> (i) Miền xác định $\mathfrak{D}(\varphi) \in \mathfrak{A}$, 
> 
> (ii) $\varphi$ là $\mathfrak{A}$-đo được trên $\mathfrak{D}(\varphi)$, 
> 
> (iii) $\varphi$ chỉ nhận hữu hạn giá trị thực, tức là $\mathfrak{R}(\varphi)$ là một tập con hữu hạn của $\mathbb{R}$.  
> 
> (Lưu ý rằng có thể $\mu(\mathfrak{D}(\varphi)) = \infty$, nhưng các giá trị $\infty$ và $-\infty$ không được phép là giá trị của một hàm đơn giản $\varphi$.)

> [!def] (Biểu diễn chuẩn tắc)  
> Cho $\varphi$ là một hàm đơn giản trên tập $D \in \mathcal{A}$ trong không gian đo $(X, \mathfrak{A}, \mu)$.  
> 
> Gọi $\{a_i : i = 1, \ldots, n\}$ là tập các giá trị khác nhau mà $\varphi$ nhận trên $D$ và đặt  
> $D_i = \{x \in D : \varphi(x) = a_i\}$ với $i = 1, \ldots, n$.  
> 
> Khi đó $\{D_i : i = 1, \ldots, n\}$ là một họ rời nhau trong $\mathcal{A}$ và $\bigcup_{i=1}^{n} D_i = D$.  
> 
> Biểu thức $\varphi(x) = \sum_{i=1}^{n} a_i 1_{D_i}(x)$ với $x \in D$ được gọi là biểu diễn chuẩn tắc của $\varphi$.  
>  
> Lưu ý rằng nếu $D_i \in \mathfrak{A}$ và $a_i \in \mathbb{R}$ với $i = 1, \ldots, n$, và nếu ta đặt $D = \bigcup_{i=1}^{n} D_i$ rồi định nghĩa $\varphi = \sum_{i=1}^{n} a_i 1_{D_i}$ trên $D$, thì $\varphi$ là một hàm đơn giản trên $D$.  
> 
> Tuy nhiên, $\sum_{i=1}^{n} a_i 1_{D_i}$ có thể không phải là biểu diễn chuẩn tắc của $\varphi$, bởi vì $\{D_i : i = 1, \ldots, n\}$ có thể không phải là một họ rời nhau và $\{a_i : i = 1, \ldots, n\}$ có thể không phải là tập các số thực phân biệt.

> [!def] (Tích phân Lebesgue cho hàm đơn giản)  
> Cho $\varphi = \sum_{i=1}^{n} a_i 1_{D_i}$ là biểu diễn chuẩn tắc của một hàm đơn giản trên tập $D \in \mathcal{A}$ trong không gian độ đo $(X, \mathcal{A}, \mu)$.  
> 
> Tích phân Lebesgue của $\varphi$ trên $D$ theo $\mu$ được định nghĩa bởi  
> $$\int_D \varphi(x)\,\mu(dx) = \sum_{i=1}^{n} a_i \mu(D_i),$$  
> với điều kiện tổng này tồn tại trong $\overline{\mathbb{R}}$.  
>  
> Lưu ý: Ta xét $\int_D \varphi(x)\,\mu(dx)$ là một số thực khi nói $\varphi$ là Lebesgue khả tích trên $D$ theo $\mu$. Ký hiệu: $\int_D \varphi \, d\mu$.


> [!thm] (Tính chất cơ bản trên miền $D$)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $\varphi \ge 0$ là một hàm đơn giản xác định trên tập $D \in \mathfrak{A}$ có biểu diễn chuẩn tắc $\varphi = \sum_{i=1}^m \alpha_i \chi_{D_i}$. Khi đó ta có các tính chất sau:
> 
> 1. Tính đơn điệu:
> Nếu $E \subset D$ và $E \in \mathfrak{A}$, thì:
> $$\int_E \varphi d\mu \le \int_D \varphi d\mu$$
> 
> 2. Tính cộng tính hữu hạn:
> Cho $D = \bigcup_{j=1}^n E_j$ là hợp của các tập hợp $E_j \in \mathfrak{A}$ rời nhau đôi một. Khi đó:
> $$\int_D \varphi d\mu = \sum_{j=1}^n \int_{E_j} \varphi d\mu$$

> [!prf]
> 3. Tính đơn điệu:
> Khi xét trên tập $E \subset D$, ta thu hẹp hàm $\varphi$ trên $E$:
> $$\varphi|_E = \sum_{i=1}^m \alpha_i \chi_{D_i \cap E}$$
> Hàm số này được định nghĩa trên tập nền $E = \bigcup_{i=1}^m (D_i \cap E)$ (trong đó các tập $D_i \cap E$ rời nhau đôi một).
> Theo định nghĩa tích phân của hàm đơn giản trên tập $E$:
> $$\int_E \varphi d\mu = \sum_{i=1}^m \alpha_i \mu(D_i \cap E)$$
> Vì $E \subset D$ nên $(D_i \cap E) \subset D_i$. Áp dụng tính đơn điệu của độ đo $\mu$, ta có $\mu(D_i \cap E) \le \mu(D_i)$. Dẫn tới:
> $$\int_E \varphi d\mu \le \sum_{i=1}^m \alpha_i \mu(D_i) = \int_D \varphi d\mu$$
>
> 4. Tính cộng tính hữu hạn:
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

> [!prp] (Bổ đề 7.7: Tính chất cơ bản của tích phân hàm đơn giản)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và các hàm đơn giản $\varphi, \varphi_1, \varphi_2$ xác định trên tập $D \in \mathfrak{A}$. Ta có các tính chất sau:
> 
> 5. Bằng nhau hầu khắp nơi (a.e.): Nếu $\varphi_1 = \varphi_2$ a.e. trên $D$ thì $\int_D \varphi_1 d\mu = \int_D \varphi_2 d\mu$.
>    
> 6. Tính đơn điệu: Nếu $\varphi_1 \le \varphi_2$ trên $D$ thì $\int_D \varphi_1 d\mu \le \int_D \varphi_2 d\mu$.
>    
> 7. Tính bị chặn: Nếu $\varphi \in [M_1, M_2]$ trên $D$ thì $M_1 \mu(D) \le \int_D \varphi d\mu \le M_2 \mu(D)$.
>    
> 8. Tính thuần nhất: Nếu $\varphi$ khả tích và $c$ là hằng số thì $c\varphi$ cũng khả tích và $\int_D c\varphi d\mu = c \int_D \varphi d\mu$.
>    
> 9. Tính tuyến tính (Cộng tính): Nếu $\varphi_1, \varphi_2$ khả tích trên $D$ thì $\varphi_1 + \varphi_2$ khả tích trên $D$ và:
> $$\int_D (\varphi_1 + \varphi_2) d\mu = \int_D \varphi_1 d\mu + \int_D \varphi_2 d\mu$$

> [!prf] 
> 
> 10. Bằng nhau hầu khắp nơi:
> Gọi $N \subset D$ là tập hợp có độ đo không ($\mu(N) = 0$) sao cho $\varphi_1 = \varphi_2$ trên tập $D \setminus N$.
> Áp dụng tính cộng tính theo tập hợp, ta phân tích tích phân trên $D$:
> $$\int_D \varphi_1 d\mu = \int_{D \setminus N} \varphi_1 d\mu + \int_N \varphi_1 d\mu$$
> Vì $\mu(N) = 0$ nên theo định nghĩa, tích phân của bất kỳ hàm đơn giản nào trên $N$ cũng bằng $0$. Trên miền $D \setminus N$, do $\varphi_1 = \varphi_2$ nên:
> $$\int_{D \setminus N} \varphi_1 d\mu + 0 = \int_{D \setminus N} \varphi_2 d\mu + \int_N \varphi_2 d\mu = \int_D \varphi_2 d\mu$$
> 
> 11. Tính đơn điệu:
> Giả sử $\varphi_1$ và $\varphi_2$ có biểu diễn chuẩn tắc là $\varphi_1 = \sum_{i=1}^n \alpha_i \chi_{D_i}$ và $\varphi_2 = \sum_{j=1}^m \beta_j \chi_{E_j}$.
> Xét họ các tập hợp giao nhau $D_i \cap E_j$. Trên mỗi tập $D_i \cap E_j$, hàm $\varphi_1$ có giá trị $\alpha_i$ và $\varphi_2$ có giá trị $\beta_j$. 
> Vì $\varphi_1 \le \varphi_2$ trên $D$, ta suy ra $\alpha_i \le \beta_j$ với mọi cặp $(i,j)$ sao cho $D_i \cap E_j \neq \emptyset$.
> Do đó:
> $$\int_D \varphi_1 d\mu = \sum_{i=1}^n \sum_{j=1}^m \alpha_i \mu(D_i \cap E_j) \le \sum_{i=1}^n \sum_{j=1}^m \beta_j \mu(D_i \cap E_j) = \int_D \varphi_2 d\mu$$
> 
> 12. Tính bị chặn:
> Xét các hàm đơn giản hằng số $\psi_1 = M_1 \chi_D$ và $\psi_2 = M_2 \chi_D$. Theo định nghĩa, ta có $\int_D \psi_1 d\mu = M_1 \mu(D)$ và $\int_D \psi_2 d\mu = M_2 \mu(D)$.
> Vì $M_1 \le \varphi \le M_2$ trên toàn bộ $D$, tức là $\psi_1 \le \varphi \le \psi_2$. Áp dụng tính đơn điệu (đã chứng minh ở ý 2), ta thu được:
> $$\int_D \psi_1 d\mu \le \int_D \varphi d\mu \le \int_D \psi_2 d\mu \implies M_1 \mu(D) \le \int_D \varphi d\mu \le M_2 \mu(D)$$
> 
> 13. Tính thuần nhất:
> Giả sử $\varphi = \sum_{i=1}^n \alpha_i \chi_{D_i}$. Khi nhân với hằng số $c$, hàm $c\varphi$ sẽ có biểu diễn là $c\varphi = \sum_{i=1}^n (c\alpha_i) \chi_{D_i}$.
> Theo định nghĩa tích phân của hàm đơn giản:
> $$\int_D c\varphi d\mu = \sum_{i=1}^n (c\alpha_i) \mu(D_i) = c \sum_{i=1}^n \alpha_i \mu(D_i) = c \int_D \varphi d\mu$$
> 
> 14. Tính tuyến tính (Cộng tính):
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

> [!thm] (Obs 7.5: Tiêu chuẩn khả tích cho hàm đơn)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $D \in \mathfrak{A}$. Giả sử $\varphi$ là một hàm đơn giản xác định trên tập $D$. Khi đó, hàm đơn giản $\varphi$ khả tích-$\mu$ trên $D$ khi và chỉ khi độ đo của tập giá trị khác $0$ của nó là hữu hạn, nghĩa là:
> $$\mu(\{x \in D : \varphi(x) \neq 0\}) < \infty$$

> [!prf]
> Giả sử biểu diễn chính tắc của $\varphi$ trên tập $D$ là:
> $$\varphi = \sum_{i=1}^n a_i \chi_{D_i}$$
> với các $D_i \in \mathfrak{A}$ rời nhau đôi một và $\bigcup_{i=1}^n D_i = D$. 
> 
> Gọi $I = \{i \in \{1, \dots, n\} : a_i \neq 0\}$ là tập các chỉ số ứng với các hệ số khác $0$. 
> Khi đó, tập các điểm mà $\varphi(x) \neq 0$ chính là $\bigcup_{i \in I} D_i$. Do các tập $D_i$ rời nhau, độ đo của tập này là:
> $$\mu(\{x \in D : \varphi(x) \neq 0\}) = \sum_{i \in I} \mu(D_i) \tag{1}$$
> 
> Mặt khác, theo định nghĩa tích phân của hàm đơn giản và quy ước $0 \cdot \infty = 0$, các số hạng có $a_i = 0$ sẽ triệt tiêu. Do đó:
> $$\int_D \varphi \, d\mu = \sum_{i=1}^n a_i \mu(D_i) = \sum_{i \in I} a_i \mu(D_i) \tag{2}$$
> 
> Từ $(1)$ và $(2)$, vì các hệ số $a_i$ ($i \in I$) đều là số thực khác $0$, ta có chuỗi suy luận tương đương sau:
> $$
> \begin{align}
> \varphi \text{ khả tích trên} D
> &\iff \int_D \varphi \, d\mu \in \mathbb{R} \\
> &\iff \sum_{i \in I} a_i \mu(D_i) \in \mathbb{R} \\
> &\iff \mu(D_i) < \infty \text{ với mọi } i \in I \\
> &\iff \sum_{i \in I} \mu(D_i) < \infty \\
> &\iff \mu(\{x \in D : \varphi(x) \neq 0\}) < \infty
> \end{align}
> $$

> [!thm] (Obs 7.5: Tiêu chuẩn tích phân bằng 0 của hàm đơn)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $D \in \mathfrak{A}$. Giả sử $\varphi$ là một hàm đơn giản không âm ($\varphi \ge 0$) trên $D$. Khi đó, $\int_D \varphi \, d\mu = 0$ khi và chỉ khi:
> $$\mu(\{x \in D : \varphi(x) \neq 0\}) = 0$$

> [!prf] 
> Giả sử biểu diễn chính tắc của hàm đơn giản không âm $\varphi$ trên tập $D$ là:
> $$\varphi = \sum_{i=1}^n a_i \chi_{D_i}$$
> với các $D_i \in \mathfrak{A}$ rời nhau đôi một, $\bigcup_{i=1}^n D_i = D$, và vì $\varphi \ge 0$ nên tất cả các hệ số $a_i \ge 0$.
> 
> Gọi $I = \{i \in \{1, \dots, n\} : a_i > 0\}$ là tập các chỉ số ứng với các hệ số thực sự dương.
> Khi đó, tập các điểm mà $\varphi(x) \neq 0$ chính là $\bigcup_{i \in I} D_i$. Do các tập $D_i$ rời nhau, độ đo của tập này là:
>   $$\mu(\{x \in D : \varphi(x) \neq 0\}) = \sum_{i \in I} \mu(D_i) \tag{1}$$
> Mặt khác, theo định nghĩa tích phân của hàm đơn giản và quy ước $0 \cdot \infty = 0$, các số hạng có $a_i = 0$ sẽ triệt tiêu. Do đó:
>   $$\int_D \varphi \, d\mu = \sum_{i \in I} a_i \mu(D_i) \tag{2}$$
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

# 2. Tích phân hàm không âm

> [!def] (Tích phân Lebesgue cho hàm đo được không âm)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$. Giả sử $f$ là một hàm đo được, không âm, nhận giá trị thực mở rộng trên tập $D \in \mathfrak{A}$ (tức là $f: D \to [0, \infty]$).
> 
> Tích phân Lebesgue của $f$ trên $D$ theo $\mu$ được định nghĩa bằng cận trên đúng (supremum):
> $$\int_D f d\mu = \sup_{0 \le \varphi \le f} \int_D \varphi d\mu \in [0, \infty]$$
> trong đó supremum được lấy trên tập hợp tất cả các hàm đơn giản không âm $\varphi$ xác định trên $D$ thỏa mãn điều kiện: $0 \le \varphi \le f$.
> 
> Lưu ý thuật ngữ:
> - Vì $f \ge 0$, supremum này luôn tồn tại và nhận giá trị trong đoạn $[0, \infty]$. Ta nói $f$ là bán khả tích Lebesgue (semi-integrable) trên $D$.
> - Ta nói $f$ là khả tích Lebesgue (integrable) trên $D$ khi và chỉ khi tích phân của nó là một số thực hữu hạn, tức là: $\int_D f d\mu < \infty$

> [!rem]
> Hàm thực không âm có các tính chất khác so với hàm đơn giản ở chỗ nó có thể nhận giá trị vô cùng ($+\infty$):
> 1. Ta quy ước $0 \cdot \infty = 0$, nên một hàm có thể nhận giá trị vô cùng ở một tập có độ đo không, thì nó vẫn mang giá trị không (Tính chất bằng không a.e và các hệ quả).
> 2. Các hàm đơn giản theo định nghĩa phải có giá trị nhỏ hơn vô cùng, ta mất đi khả năng xấp xỉ hàm $f$ từ bên trên bằng hàm đơn giản.

> [!prp] (Bổ đề 8.2: Tính a.e của tích phân hàm đo được không âm)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo. Giả sử $f$ là một hàm đo được, không âm, nhận giá trị thực mở rộng trên tập $D \in \mathfrak{A}$ (tức là $f: D \to [0, \infty]$). Khi đó:
> 
> (a) Nếu $\int_D f d\mu < \infty$, thì $f < \infty$ hầu khắp nơi (a.e.) trên $D$.
> 
> (b) Nếu $\int_D f d\mu = 0$, thì $f = 0$ hầu khắp nơi (a.e.) trên $D$.
> 
> (d) Nếu $f > 0$ a.e. trên $D$ và $\int_D f d\mu = 0$, thì $\mu(D) = 0$.
> 
> (f) Nếu $f_1 = f_2$ a.e. trên $D$, thì $\int_D f_1 d\mu = \int_D f_2 d\mu$.

> [!prf] 
> _(a)_:
> Giả sử phản chứng rằng mệnh đề $f < \infty$ không đúng hầu khắp nơi trên $D$. 
> Khi đó, tập hợp các điểm mà $f$ nhận giá trị vô cùng có độ đo dương. 
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
> Giả sử phản chứng rằng mệnh đề $f = 0$ không đúng hầu khắp nơi trên $D$. Do $f \ge 0$, điều này tương đương với việc tập hợp các điểm mà $f > 0$ có độ đo dương.
> Đặt $E = \{x \in D : f(x) > 0\}$. Theo giả thiết phản chứng, $\mu(E) > 0$.
> 
> Ta có thể biểu diễn tập $E$ dưới dạng hợp của một dãy các tập hợp tăng dần:
> $$E = \bigcup_{n=1}^\infty \left\{ x \in D : f(x) > \frac{1}{n} \right\}$$
> Đặt $E_n = \{ x \in D : f(x) > \frac{1}{n} \}$. Ta thấy $E_1 \subset E_2 \subset \dots \subset E_n \subset \dots$ và $\bigcup_{n=1}^\infty E_n = E$.
> Theo tính chất $\sigma$-dưới cộng tính (hoặc tính liên tục từ dưới) của độ đo, ta có:
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
>
> _(f)_:
> Gọi $N$ là tập hợp các điểm trên $D$ mà $f_1$ và $f_2$ khác nhau:
> $$N = \{x \in D : f_1(x) \neq f_2(x)\}$$
> Vì $f_1 = f_2$ a.e. trên $D$, theo định nghĩa ta có $\mu(N) = 0$.
> 
> Ta phân hoạch tập $D$ thành hai phần rời nhau: $D = (D \setminus N) \cup N$. Khi đó, tích phân trên $D$ có thể được tách ra theo miền (tính cộng tính theo tập hợp):
> $$\int_D f_1 d\mu = \int_{D \setminus N} f_1 d\mu + \int_N f_1 d\mu$$
> 
> Nhận xét rằng đối với bất kỳ hàm đo được không âm $g$ nào, tích phân của nó trên một tập có độ đo không (null set) luôn bằng $0$. *(Vì bất kỳ hàm đơn giản $\varphi \le g$ nào cũng sẽ có tích phân trên $N$ bằng $0$ do $\mu(N) = 0$)*. Do đó:
> $$\int_N f_1 d\mu = 0 \quad \text{và} \quad \int_N f_2 d\mu = 0$$
> 
> Xét trên tập $D \setminus N$, theo định nghĩa của $N$, ta có $f_1(x) = f_2(x)$ tại mọi điểm $x \in D \setminus N$. Do đó, tích phân của chúng trên miền này hoàn toàn bằng nhau:
> $$\int_{D \setminus N} f_1 d\mu = \int_{D \setminus N} f_2 d\mu$$
> 
> Ráp các kết quả lại với nhau, ta có:
> $$\int_D f_1 d\mu = \int_{D \setminus N} f_1 d\mu + \int_N f_1 d\mu = \int_{D \setminus N} f_2 d\mu + 0 = \int_{D \setminus N} f_2 d\mu + \int_N f_2 d\mu = \int_D f_2 d\mu$$
> Vậy $\int_D f_1 d\mu = \int_D f_2 d\mu$.

> [!prp] (Tính chất cơ bản của tích phân hàm đo được không âm)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và các hàm đo được không âm $f, f_1, f_2$ xác định trên tập $D \in \mathfrak{A}$. Ta có các tính chất sau:
> 
> 3. Tính đơn điệu theo hàm số: Nếu $f_1 \le f_2$ trên $D$ thì:
> $$\int_D f_1 d\mu \le \int_D f_2 d\mu$$
> 4. Tính đơn điệu theo tập hợp: Nếu $E \subset D$ và $E \in \mathfrak{A}$, thì:
> $$\int_E f d\mu \le \int_D f d\mu$$
> 5. Tính cộng tính hữu hạn trên miền $D$: Cho $D = \bigcup_{j=1}^n E_j$ là hợp của các tập hợp $E_j \in \mathfrak{A}$ rời nhau đôi một. Khi đó:
> $$\int_D f d\mu = \sum_{j=1}^n \int_{E_j} f d\mu$$
> 6. Tính bị chặn: Nếu $f \in [M_1, M_2]$ trên $D$ thì:
> $$M_1 \mu(D) \le \int_D f d\mu \le M_2 \mu(D)$$
> 7. Tính thuần nhất: Nếu $c > 0$ là một hằng số thực, ta có:
> $$\int_D cf d\mu = c \int_D f d\mu$$
> 
> *(Quy ước: Nếu $c = 0$, thì $cf = 0$ trên $D$, kéo theo $\int_D cf d\mu = 0$ ngay cả khi $\int_D f d\mu = \infty$).*

> [!prf] 
> Nhắc lại định nghĩa: Tích phân của hàm đo được không âm $f$ là cận trên đúng của tích phân các hàm đơn giản $\varphi$ bị chặn trên bởi $f$. Đặt $S(f, D) = \left\{ \varphi \text{ đơn giản} : 0 \le \varphi \le f \text{ trên } D \right\}$. Khi đó $\int_D f d\mu = \sup_{\varphi \in S(f, D)} \int_D \varphi d\mu$.
> 
> 8. Tính đơn điệu theo hàm số:
> Giả sử $0 \le f_1 \le f_2$ trên $D$. Lấy bất kỳ hàm đơn giản $\varphi \in S(f_1, D)$, ta có $0 \le \varphi \le f_1 \le f_2$. 
> Do đó $\varphi$ cũng thuộc $S(f_2, D)$, tức là $S(f_1, D) \subset S(f_2, D)$.
> Lấy supremum hai vế, ta thu được:
> $$\sup_{\varphi \in S(f_1, D)} \int_D \varphi d\mu \le \sup_{\psi \in S(f_2, D)} \int_D \psi d\mu \implies \int_D f_1 d\mu \le \int_D f_2 d\mu$$
> 
> 9. Tính đơn điệu theo tập hợp:
> Ta có thể viết tích phân trên tập con $E$ bằng cách sử dụng hàm chỉ thị: $\int_E f d\mu = \int_D (f \cdot \chi_E) d\mu$.
> Vì $\chi_E \le 1$ trên $D$, ta có $f \cdot \chi_E \le f$ trên $D$. Áp dụng tính đơn điệu theo hàm số (ý 1) cho hai hàm $f \cdot \chi_E$ và $f$, ta có:
> $$\int_E f d\mu = \int_D (f \cdot \chi_E) d\mu \le \int_D f d\mu$$
> 
> 10. Tính cộng tính hữu hạn trên miền $D$:
> Lấy bất kỳ $\varphi \in S(f, D)$. Theo tính cộng tính hữu hạn của tích phân hàm đơn giản (đã chứng minh), ta có:
> $$\int_D \varphi d\mu = \sum_{j=1}^n \int_{E_j} \varphi d\mu$$
> Vì $\varphi \le f$ trên mỗi $E_j$, nên $\int_{E_j} \varphi d\mu \le \int_{E_j} f d\mu$. Do đó $\int_D \varphi d\mu \le \sum_{j=1}^n \int_{E_j} f d\mu$. 
> Lấy supremum theo $\varphi$, ta được vế thứ nhất: $\int_D f d\mu \le \sum_{j=1}^n \int_{E_j} f d\mu$.
> Ngược lại, trên mỗi tập $E_j$, chọn một hàm đơn giản tùy ý $\varphi_j \in S(f, E_j)$. Đặt $\varphi = \sum_{j=1}^n \varphi_j \chi_{E_j}$. Rõ ràng $\varphi$ là hàm đơn giản và $0 \le \varphi \le f$ trên $D$. Khi đó:
> $$\sum_{j=1}^n \int_{E_j} \varphi_j d\mu = \int_D \varphi d\mu \le \int_D f d\mu$$
> Lấy supremum độc lập đối với từng $\varphi_j$ trên mỗi $E_j$, ta được vế thứ hai: $\sum_{j=1}^n \int_{E_j} f d\mu \le \int_D f d\mu$.
> Kết hợp hai chiều bất đẳng thức, ta có dấu bằng xảy ra.
> 
> 11. Tính bị chặn:
> Xét hai hàm hằng số $g_1(x) = M_1$ và $g_2(x) = M_2$ trên $D$. Đây là các hàm đơn giản với $\int_D g_1 d\mu = M_1 \mu(D)$ và $\int_D g_2 d\mu = M_2 \mu(D)$.
> Vì $g_1 \le f \le g_2$ a.e. trên $D$, áp dụng tính đơn điệu theo hàm số (ý 1), ta có:
> $$\int_D g_1 d\mu \le \int_D f d\mu \le \int_D g_2 d\mu \implies M_1 \mu(D) \le \int_D f d\mu \le M_2 \mu(D)$$
> 
> 12. Tính thuần nhất:
> Với $c > 0$, bất đẳng thức $\psi \le cf$ (với $\psi$ đơn giản) tương đương với $\frac{1}{c}\psi \le f$. 
> Đặt $\varphi = \frac{1}{c}\psi$, $\varphi$ cũng là một hàm đơn giản và $0 \le \varphi \le f$. 
> Theo tính thuần nhất của tích phân hàm đơn giản: $\int_D \psi d\mu = c \int_D \varphi d\mu$.
> Do đó:
> $$\int_D cf d\mu = \sup_{\psi \le cf} \int_D \psi d\mu = \sup_{\varphi \le f} \left( c \int_D \varphi d\mu \right) = c \cdot \sup_{\varphi \le f} \int_D \varphi d\mu = c \int_D f d\mu$$

> [!obs]
> Trong tích chất cơ bản tích phân hàm không âm, ta không thấy sự xuất hiện của Tính cộng tính đối với hàm số: 
> $$
> \int_D (f_1 + f_2) d\mu = \int_D f_1 d\mu + \int_D f_2 d\mu
> $$
> 1. Dựa vào định nghĩa supremum:
> Tích phân của hàm không âm được định nghĩa là:
> $$
> \int_D f d\mu = \sup_{\varphi \le f} \int_D \varphi d\mu
> $$
> - Chiều $\le$ dễ: Nếu lấy hai hàm đơn giản bất kỳ $\varphi_1 \le f_1$ và $\varphi_2 \le f_2$, thì tổng của chúng là một hàm đơn giản thỏa mãn $\varphi_1 + \varphi_2 \le f_1 + f_2$.  Sử dụng tích chất sup: $\int_D f_1 d\mu + \int_D f_2 d\mu \le \int_D (f_1 + f_2) d\mu$.
> - Chiều $\ge$ khó: Để chứng minh chiều ngược lại, ta phải tìm một hàm đơn giản $\varphi$ sao cho $\varphi \le f_1 + f_2$. Khó khăn nằm ở chỗ: Ta không có cách đơn giản tách $\varphi = \varphi_1 + \varphi_2$ sao cho $\varphi_1 \le f_1$ và $\varphi_2 \le f_2$ (với điều kiện $\varphi_1, \varphi_2$ đều phải là hàm đơn giản). 
> 
> 2. Lý do ta cần MCT (Monotone Convergence Theorem):
> Thay vì sử dụng supremum đơn thuần, ta sẽ chứng minh rằng luôn có thể xấp xỉ $f_1$ và $f_2$ bằng hai dãy hàm đơn giản tăng dần: $\varphi_n \nearrow f_1$ và $\psi_n \nearrow f_2$.
> Khi đó, dãy tổng $(\varphi_n + \psi_n)$ cũng là dãy hàm đơn giản tăng dần và hội tụ về $f_1 + f_2$.
> - Vì tính cộng tính đã được chứng minh là đúng cho hàm đơn giản, ta có phương trình: 
> $$
> \int_D (\varphi_n + \psi_n) d\mu = \int_D \varphi_n d\mu + \int_D \psi_n d\mu
> $$
> Nhờ MCT cho phép ta đẩy giới hạn vào bên trong dấu tích phân, khi lấy $n \to \infty$ cho cả hai vế, ta thu được: 
> $$
> \int_D (f_1 + f_2) d\mu = \int_D f_1 d\mu + \int_D f_2 d\mu
> $$
> 
> 3. Hệ quả: Tính $\sigma$-cộng tính của dãy hàm
> Nhờ MCT, ta có thể nâng tính cộng tính hữu hạn của dãy hàm, cho $N\to \infty$, khi đó tính chất vẫn đúng và ta được quyền đổi chỗ chuỗi vô hạn với lại tích phân:
> $$
> \int_D \left( \sum_{n=1}^\infty f_n \right) d\mu = \sum_{n=1}^\infty \int_D f_n d\mu
> $$


# 3. Tích phân hàm đo được

> [!rem] 
> Trong xây dựng lý thuyết tích phân Lebesgue, các hàm đo được không âm các nhiều tính chất mạnh, do loại bỏ được hoàn toàn dạng vô định $\infty - \infty$. Khi mở rộng sang một hàm đo được bất kỳ (nhận cả giá trị âm và dương), các tính chất cốt lõi sau đây sẽ không còn đúng nếu không bổ sung điều kiện khả tích tuyệt đối ($\int |f| d\mu < \infty$):
> 
> 1. Đổi chỗ tự do chuỗi vô hạn và tích phân ($\sigma$-cộng tính của dãy hàm):
>    - Với hàm không âm: Đẳng thức $\int_D \left( \sum_{n=1}^{\infty} f_n \right) d\mu = \sum_{n=1}^{\infty} \int_D f_n \, d\mu$ luôn đúng bất kể giá trị tích phân hữu hạn hay vô hạn.
>    - Với hàm bất kỳ: Tính chất này sẽ sai nếu chuỗi hàm không hội tụ tuyệt đối. Việc đan xen các giá trị âm dương có thể làm thay đổi cấu trúc hội tụ hoặc tạo ra dạng vô định. Ta bắt buộc phải có các điều kiện mạnh hơn như Định lý Hội tụ đơn điệu Lebesgue (DCT).
> 
> 2. Tính chất triệt tiêu tích phân (Tích phân bằng $0$ kéo theo hàm bằng $0$):
>    - Với hàm không âm: Nếu $f \ge 0$ và $\int_D f \, d\mu = 0$ thì $f = 0$ hầu khắp nơi (a.e.) trên $D$.
>    - Với hàm bất kỳ: Kết luận này hoàn toàn sai. Tích phân của một hàm nhận giá trị âm dương có thể bằng $0$ do sự bù trừ, triệt tiêu lẫn nhau giữa phần dương $f^+$ và phần âm $f^-$ (Ví dụ: $\int_{-\pi}^{\pi} \sin(x) dx = 0$ nhưng $\sin(x) \neq 0$ a.e.).
> 
> 3. Tính luôn xác định của tích phân (Sự tồn tại):
>    - Với hàm không âm: Tích phân $\int_D f \, d\mu$ luôn luôn tồn tại và có giá trị xác định duy nhất thuộc tập số thực mở rộng $[0, \infty]$. 
>    - Với hàm bất kỳ: Tích phân hoàn toàn có thể không tồn tại (vô định). Nếu cả phần dương và phần âm của hàm số đều có tích phân bằng vô hạn ($\int f^+ d\mu = \infty$ và $\int f^- d\mu = \infty$), phép toán hiệu $\int f^+ d\mu - \int f^- d\mu$ sẽ rơi vào dạng vô định $\infty - \infty$.
> 
> 4. Chiều bất đẳng thức của Bổ đề Fatou:
>    - Với hàm không âm: Ta luôn có chiều bất đẳng thức cố định: $\int_D (\liminf f_n) d\mu \le \liminf \int_D f_n d\mu$.
>    - Với hàm bất kỳ: Bất đẳng thức này có thể bị đảo chiều hoặc không xác định nếu dãy hàm không bị chặn dưới bởi một hàm khả tích $g$ nào đó.

> [!thm] (Bổ đề tương đương của cấu trúc hầu khắp nơi và tích phân)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và tập đo được $D \in \mathfrak{A}$. Giả sử các hàm số dưới đây là các hàm đo được nhận giá trị thực mở rộng trên $D$.
>
> (1) Tiêu chuẩn hàm không âm: Giả sử tích phân $\int_E f \, d\mu$ tồn tại với mọi tập con đo được $E \subset D$. Khi đó, ta có $f \ge 0$ hầu khắp nơi (a.e.) trên $D$ khi và chỉ khi:
> $$\int_E f \, d\mu \ge 0$$
> với mọi tập con đo được $E \subset D$ ($E \in \mathfrak{A}$).
>
> (2) Bảo toàn tích phân cho hàm tương đương: Giả sử $f, g$ là các hàm bán khả tích trên mọi tập con đo được $E \subset D$. Khi đó, ta có $f = g$ hầu khắp nơi (a.e.) trên $D$ khi và chỉ khi:
> $$\int_E f \, d\mu = \int_E g \, d\mu$$
> với mọi tập con đo được $E \subset D$ ($E \in \mathfrak{A}$).

> [!prf] Chứng minh
> **Chứng minh (1):**
>
> Chiều thuận: Giả sử $f \ge 0$ a.e. trên $D$. Xét một tập con đo được $E \subset D$ bất kỳ.
>
> Do tập hợp các điểm mà $f < 0$ có độ đo bằng $0$, hàm $f$ thu hẹp trên $E$ cũng lớn hơn hoặc bằng $0$ hầu khắp nơi. Theo định nghĩa tích phân của hàm không âm, ta suy ra $\int_E f \, d\mu \ge 0$.
>
> Chiều nghịch: Phản chứng. Giả sử mệnh đề $f \ge 0$ a.e. trên $D$ là sai. Xét tập hợp các điểm mà tại đó hàm $f$ nhận giá trị thực sự âm:
> $$A = \{x \in D : f(x) < 0\}$$
>
> Theo giả thiết phản chứng, độ đo của tập này phải dương ($\mu(A) > 0$). Ta viết lại tập $A$ thành:
> $$A_k = \left\{x \in D : f(x) \le -\frac{1}{k}\right\}$$
> với $k$ là số nguyên dương.
>
> Do $\mu(A) > 0$, theo tính dưới cộng tính đếm được, phải tồn tại một chỉ số nguyên dương $k_0$ sao cho thành phần tương ứng có độ đo thực sự dương $\mu(A_{k_0}) > 0$.
>
> Xét tích phân của $f$ trên tập con đo được $A_{k_0}$. Do tại mọi $x \in A_{k_0}$ luôn có $f(x) \le -1/k_0$, áp dụng tính đơn điệu của tích phân, ta thu được:
> $$\int_{A_{k_0}} f \, d\mu \le \int_{A_{k_0}} \left(-\frac{1}{k_0}\right) d\mu = -\frac{1}{k_0} \mu(A_{k_0}) < 0$$
>
> Kết quả tích phân âm này mâu thuẫn với giả thiết ban đầu là tích phân luôn không âm trên mọi tập con đo được. Vậy giả thiết phản chứng là sai, ta có $f \ge 0$ a.e. trên $D$.
>
> **Chứng minh (2):**
>
> Chiều thuận: Giả sử $f = g$ a.e. trên $D$. Lấy một tập con đo được $E \subset D$ bất kỳ, ta cũng có $f = g$ a.e. trên $E$.
>
> Theo định nghĩa của hàm phần dương và phần âm, ta suy ra $f^+ = g^+$ a.e. trên $E$ và $f^- = g^-$ a.e. trên $E$. Vì đây là các cặp hàm đo được không âm tương đương hầu khắp nơi, ta có:
> $$\int_E f^+ \, d\mu = \int_E g^+ \, d\mu \quad \text{và} \quad \int_E f^- \, d\mu = \int_E g^- \, d\mu$$
>
> Do $f$ bán khả tích trên $E$, hiệu tích phân phần dương và phần âm hoàn toàn xác định, nên hiệu số $\int_E g^+ \, d\mu - \int_E g^- \, d\mu$ cũng xác định và cho ra cùng một kết quả. Từ đó ta có:
> $$\int_E f \, d\mu = \int_E g \, d\mu$$
>
> Chiều nghịch: Giả sử $\int_E f \, d\mu = \int_E g \, d\mu$ với mọi tập con đo được $E \subset D$. Ta cần chứng minh $f = g$ a.e. trên $D$.
>
> Xét tập hợp $E_1 = \{x \in D : f(x) > g(x)\}$. Ta viết lại tập $E_1$ thành:
> $$B_k = \left\{x \in D : f(x) \ge g(x) + \frac{1}{k}\right\}$$
>
> Giả sử phản chứng $\mu(E_1) > 0$, bắt buộc phải tồn tại một chỉ số $k_0$ sao cho $\mu(B_{k_0}) > 0$. Trên tập $B_{k_0}$, ta có bất đẳng thức $f(x) \ge g(x) + 1/k_0$. Áp dụng tính đơn điệu của tích phân trên miền này, ta có:
> $$\int_{B_{k_0}} f \, d\mu \ge \int_{B_{k_0}} g \, d\mu + \frac{1}{k_0} \mu(B_{k_0})$$
>
> Vì $\mu(B_{k_0}) > 0$, đại lượng cộng thêm là một số thực sự dương, dẫn đến $\int_{B_{k_0}} f \, d\mu > \int_{B_{k_0}} g \, d\mu$. Điều này mâu thuẫn với giả thiết tích phân của hai hàm bằng nhau trên mọi tập con. Do đó, giả thiết phản chứng là sai, suy ra $\mu(E_1) = 0$.
>
> Lập luận hoàn toàn tương tự cho tập hợp $E_2 = \{x \in D : f(x) < g(x)\}$, ta cũng thu được $\mu(E_2) = 0$.
>
> Tập hợp các điểm tại đó $f$ khác $g$ chính là hợp của $E_1$ và $E_2$. Theo tính chất cộng tính, độ đo của tập hợp này bằng tổng độ đo hai tập hợp thành phần và bằng $0$. Từ đó khẳng định được $f = g$ a.e. trên $D$.

> [!rem] Chú ý về tính bắt buộc của điều kiện xét trên mọi tập con
> Mệnh đề hai chiều ở trên sẽ lập tức sai nếu ta bỏ đi điều kiện tích phân bằng nhau trên mọi tập con $E \subset D$ và chỉ giả thiết tích phân bằng nhau trên miền $D$. 
>
> Đối với (1), xét không gian đo Lebesgue trên đoạn $D = [-1, 2]$. Ta chọn hàm số $f(x) = x$. Khi lấy tích phân trên toàn bộ miền $D$, ta thu được kết quả:
> $$
> \int_{[-1, 2]} f \, d\mu = \int_{-1}^2 x \, dx = \frac{3}{2}
> $$
> 
> Mặc dù tích phân trên miền $D$ lớn hơn không, ta không thể kết luận $f \ge 0$ hầu khắp nơi trên $D$. Thực tế, hàm $f$ nhận giá trị âm trên khoảng $[-1, 0)$, một tập hợp có độ đo Lebesgue bằng $1$, tức là một tập có độ đo thực sự dương.
>
> Đối với (2), xét không gian đo Lebesgue trên đoạn $D = [-1, 1]$. Ta định nghĩa hai hàm số $f(x) = x$ và $g(x) = 0$. Do tính đối xứng của hàm lẻ, phần diện tích âm và dương của $f(x)$ bị triệt tiêu khi lấy tích phân:
> $$
> \int_{[-1, 1]} f \, d\mu = \int_{-1}^1 x \, dx = 0
> $$
> 
> Tích phân của hàm $g(x)$ trên $D$ hiển nhiên cũng bằng $0$. Như vậy ta có sự bằng nhau của tích phân trên toàn bộ không gian:
> $$\int_D f \, d\mu = \int_D g \, d\mu$$
> 
> Tuy nhiên, hai hàm $f$ và $g$ chỉ cắt nhau tại đúng một điểm $x = 0$. Trên toàn bộ phần không gian còn lại của đoạn $[-1, 1]$ với độ đo Lebesgue bằng $2$, giá trị của hai hàm là khác nhau. Do đó không thể kết luận $f = g$ hầu khắp nơi trên $D$.


$\xi$

# [I] Dãy hàm đo được

> [!rem] (Nhắc lại)
> Xét dãy $(f_{n}: n \in \mathbb{N})$, $f_{n} : D \to \overline{\mathbb{R}}$: $\limsup_{ n \to \infty }f_{n}$ và $\liminf_{  \to \infty }f_{n}$ luôn tồn tại và bằng $\lim_{ n \to \infty }f_{n}$ nếu $\limsup_{ n \to \infty }f_{n} = \liminf_{ n \to \infty }f_{n}$.
> 
> $f_{n}(x)$ hội tụ nếu $\lim_{ n \to \infty }f_{n}(x)$ tồn tại và thuộc $\overline{\mathbb{R}}$.

> [!thm] (Định lý 4.21)
> Cho $(X, \mathfrak{A})$ là một không gian đo và $f_n$ là một dãy hàm đơn điệu nhận giá trị thực mở rộng, $\mathfrak{A}$- đo được trên tập $D \in \mathfrak{A}$. 
> 
> Khi đó $\lim_{n \to \infty} f_n$ tồn tại trên $D$ và là một hàm ${} \mathfrak{A} {}$-đo được trên $D$.

> [!prf]
> 1. Với mỗi $x \in D$ cố định, do $(f_n(x))$ là một dãy đơn điệu nhận giá trị trong tập số thực mở rộng $\overline{\mathbb{R}}$, theo tính chất cơ bản của dãy đơn điệu, giới hạn $\lim_{n \to \infty} f_n(x)$ luôn luôn tồn tại trong $\overline{\mathbb{R}}$. (Cụ thể: bằng $\sup f_n(x)$ nếu dãy tăng, và $\inf f_n(x)$ nếu dãy giảm).
> 
> 2. Giả sử $f_{n}$ là dãy tăng, ta sẽ chứng minh đẳng thức:
> 	$$
> 	\{x \in D : \lim_{n \to \infty} f_n(x) > \alpha\} = \bigcup_{n=1}^{\infty} \{x \in D : f_n(x) > \alpha\} 
> 	 $$
> 	- Chiều $(\subset)$: Vì giới hạn tại điểm $x$ lớn hơn $\alpha$, ta tìm được $k$ sao cho $f_{k}(x) > \alpha$, nên $x$ nằm trong hợp của các tập vế phải.
> 	- Chiều $(\supset)$: Vì $x$ nằm ở vế phải, ta tìm được $k$ sao cho $f_k(x) > \alpha$. Vì dãy $(f_n)$ là dãy tăng, nên hàm giới hạn $\lim_{n \to \infty} f_n(x)$ chắc chắn phải lớn hơn hoặc bằng $f_k(x)$, hay $\lim_{n \to \infty} f_n(x) > \alpha$. Vậy $x$ thuộc vế trái.
>  
> Vì $f_{n}$ đo được nên $A_{n} = \{ x \in D: f_{n}(x) > \alpha \}$ là một tập đo được thuộc $\mathfrak{A}$. Vì $\mathfrak{A}$ là $\sigma$-đại số, nó đóng kín dưới phép hợp đếm được.
> Nếu $f_{n}$ là dãy giảm, $-f_{n}$ là dãy tăng. Vì $\lim_{ n \to \infty }-f_{n} = - \lim_{ n \to \infty }f_{n}$, mà $f_{n}$ là hàm đo được nên $-1 \cdot f_{n}$ là hàm đo được.

> [!thm] (Định lý 4.22)
> Cho $(X, \mathfrak{A})$ là một không gian đo và $f_n$ là một dãy hàm nhận giá trị thực mở rộng, $\mathfrak{A}$- đo được trên tập $D \in \mathfrak{A}$:
> 
> a) $\min_{n=1,\ldots,N} f_n, \; \max_{n=1,\ldots,N} f_n, \; \inf_{n \in \mathbb{N}} f_n, \; \sup_{n \in \mathbb{N}} f_n$ là các hàm $\mathfrak{A}$-đo được trên $D$.
> 
> b) $\liminf_{n \in \mathbb{N}} f_n, \; \limsup_{n \in \mathbb{N}} f_n$ là $\mathfrak{A}$-đo được trên $D$
> 
> c) Đặt $D_{e} = \{ D: \lim_{ n \to \infty }f_{n} \in \overline{\mathbb{R}}\}$. Khi đó $D_{e} \in \mathfrak{A}$ và $\lim_{ n \to \infty }f_{n}$  $\mathfrak{A}$-đo được trên $D_{e}$.

> [!prf]
> a)
> Ta chứng minh các hàm cho theo giả thiết được biểu diễn bởi hợp đếm được các hàm đo được, nên là hàm đo được:
> 3. Hàm $\min$:
> 	Với mỗi $\alpha \in \mathbb{R}$, ta có:
>	$$
> 	\{x \in D : \min_{n=1,\dots,N} f_n(x) < \alpha\} = \bigcup_{n=1}^N \{x \in D : f_n(x) < \alpha\} \in \mathfrak{A}
>	$$
>	- Chiều $(\subset)$: Nếu giá trị nhỏ nhất của một tập hữu hạn số $\{f_1(x), \dots, f_N(x)\}$ nhỏ hơn $\alpha$, ta tìm được ít nhất một phần tử $f_k(x)$ nhỏ hơn $\alpha$, nên $x$ nằm trong hợp ở vế phải.
>	- Chiều $(\supset)$: Nếu $x$ thuộc vế phải, ta tìm được $k$ sao cho $f_k(x) < \alpha$. Vì $\min f_n(x)$ luôn nhỏ hơn hoặc bằng bất kỳ phần tử nào trong tập, ta có $\min f_n(x) \le f_k(x) < \alpha$. Vậy $x$ thuộc vế trái.
> 4. Hàm $\inf$:
> 	Với mỗi $\alpha \in \mathbb{R}$, ta có:
> 	$$
> 	\{x \in D : \inf_{n \in \mathbb{N}} f_n(x) < \alpha\} = \bigcup_{n=1}^{\infty} \{x \in D : f_n(x) < \alpha\} \in \mathfrak{A}
> 	$$
> 	- Chiều $(\subset)$: Vì $\inf f_{n}(x)$ là cận đưới đúng của $\alpha$, ta luôn tìm được $f_{k}(x)$ sao cho $f_{k}(x) < \alpha$. Vậy $x$ thuộc vế phải.
> 	- Chiều $(\supset)$: - Nếu $x$ thuộc vế phải, ta tìm được một $k$ sao cho $f_k(x) < \alpha$. Theo định nghĩa, cận dưới đúng luôn bé hơn hoặc bằng mọi phần tử: $\inf f_n(x) \le f_k(x)$, nên $\inf f_n(x) < \alpha$. Vậy $x$ thuộc vế trái.
> 5. Hàm $\max$:
> 	Với mỗi $\alpha \in \mathbb{R}$, ta có:
> 	$$
> 	\{x \in D : \max_{n=1,\dots,N} f_n(x) > \alpha\} = \bigcup_{n=1}^N \{x \in D : f_n(x) > \alpha\} \in \mathfrak{A}
> 	$$
> 	- Chiều $(\subset)$: Nếu giá trị lớn nhất trong các số $f_n(x)$ lớn hơn $\alpha$, ta tìm được nhất một số $f_k(x)$ lớn hơn $\alpha$. Vậy $x$ thuộc vế phải.
> 	- Chiều $(\supset)$: Nếu $x$ thuộc vế phải, có một $f_k(x) > \alpha$. Vì $\max f_n(x) \ge f_k(x)$, nên $\max f_n(x) > \alpha$. Vậy $x$ thuộc vế trái
> 6. Hàm $\sup$:
> Với mỗi $\alpha \in \mathbb{R}$, ta có: 
> $$
> \{x \in D : \sup_{n \in \mathbb{N}} f_n(x) > \alpha\} = \bigcup_{n=1}^{\infty} \{x \in D : f_n(x) > \alpha\} \in \mathfrak{A}
> $$
> - Chiều $(\subset)$: Vì $\sup f_n(x)$ là cận trên đúng, ta tìm được ít nhất một phần tử $f_k(x)$ sao cho $f_k(x) > \alpha$. Vậy $x$ thuộc hợp ở vế phải.
> - Chiều $(\supset)$: Nếu $x$ thuộc vế phải, tìm được $k$ sao cho $f_k(x) > \alpha$. Vì $\sup f_n(x)$ luôn lớn hơn hoặc bằng mọi phần tử trong tập, ta có $\sup f_n(x) \ge f_k(x) > \alpha$. Vậy $x$ thuộc vế trái.
>   
> b)
> Ta có định nghĩa giới hạn dưới:
> $$
> \liminf_{n \to \infty} f_n = \lim_{n \to \infty} \left( \inf_{k \ge n} f_k \right)
> $$
> Đặt $g_{n} = \inf_{k\ge n} f_{k}$. Theo kết quả câu trên, $g_{n}$ là hàm đo được, và ta cũng biết $g_{n}$ là một dãy hàm tăng. Áp dụng định lý 4.21 (Giới hạn của dãy hàm đơn điệu đo được là đo được), nên $\lim_{n \to \infty} g_n$ đo được. Vậy $\liminf f_n$ đo được. 
> Chứng minh tương tự cho giới hạn trên:
> $$
> \limsup_{n \to \infty} f_n = \lim_{n \to \infty} (\sup_{k \ge n} f_k)
> $$
> 
> c)
> Tập $D_{e}$ là tập hợp các nơi mà giới hạn tồn tại trong $\overline{\mathbb{R}}$, theo định nghĩa là tập mà giới hạn trên và giới hạn dưới bằng nhau:
> $$
> D_e = \{x \in D : \liminf_{n \to \infty} f_n(x) = \limsup_{n \to \infty} f_n(x)\}
> $$
> Vì $\liminf f_n$ và $\limsup f_n$ đều là hai hàm đo được (theo b), tập hợp các điểm mà hai hàm đo được có giá trị bằng nhau là một tập đo được (theo Định lý 4.16). Vậy $D_e \in \mathfrak{A}$.
> Vì $\liminf f_n$ là hàm đo được trên toàn bộ $D$, thì nó hiển nhiên cũng đo được trên miền $D_e$. Vậy $\lim f_n$ (${} = \liminf f_{n}= \limsup f_{n} {}$) là hàm đo được trên $D_e$.

> [!thm] (Định lý 4.23)
> Cho $(X, \mathfrak{A})$ là một không gian đo và $f_n$ là một dãy hàm nhận giá trị thực mở rộng, $\mathfrak{A}$- đo được trên tập $D \in \mathfrak{A}$. Đặt:
> 1. $D_{e} = \{ x \in D: \lim_{ n \to \infty }f_{n} \in \overline{\mathbb{R}} \}$,
> 2. $D_{c} = \{ x \in D: \lim_{ n \to \infty }f_{n} \in \mathbb{R} \}$,
> 3. ${} D_{\infty} = \{ x \in D: \lim_{ n \to \infty }f_{n} = \infty\} {}$,
> 4. $D_{-\infty} = \{ x \in D: \lim_{ n \to \infty }f_{n} = -\infty\}$,
> 5. $D_{ne} = \{ x \in D: \lim_{ n \to \infty }f_{n} \text{ does not exist}\}$,
> khi đó $D_{e}$ và $D_{ne}$ rời nhau và $D_{e} \cup D_{ne} = D$, $D_{c}, D_{-\infty}, D_{\infty}$ rời nhau cũng như $D_{c} \cup D_{\infty} \cup D_{-\infty} = D_{e}$. Ta có $D_{e}, D_{c}, D_{\infty}, D_{-\infty} \in \mathfrak{A}$ và $\lim_{ n \to \infty } f_{n}$ is $\mathfrak{A}$-đo được trên mỗi tập $D_{e}, D_{c}, D_{\infty}$ and $D_{-\infty}$.

> [!prf]
> 1. Tập $D_{e}$:
> Theo Định lý 4.22 c), ta có $D_{c} \in \mathfrak{A}$ và hàm $f = \lim_{ n \to \infty } f_{n}$ là $\mathfrak{A}$-đo được trên $D_{e}$.
> 
> Ta biểu diễn 2 và 3 bởi giao đếm được các hàm đo được, nên là hàm đo được
> 
> 2. Tập $D_{\infty}$:
> 	 Với mỗi $k \in \mathbb{R}$, ta có:
> 	 $$
> 	 \{ x \in D: \lim_{ n \to \infty }f_{n} = \infty\} = \bigcap_{k=1}^{\infty} \{x \in D_e : f(x) > k\} \in \mathfrak{A}
> 	 $$
> 	- Chiều ($\subset$): Nếu $x$ thuộc vế trái, tức là ta có $f(x) = \infty$, thì nó lớn hơn mọi số thực hữu hạn, nên với mọi số nguyên dương $k \in \mathbb{N}$, ta luôn có $f(x) > k$. Lấy giao bất kì tập có $k$ dương thì ${} f(x) {}$ phải nằm trong đó. Vậy $x$ thuộc vế phải.
> 	- Chiều ($\supset$): Nếu $x$ thuộc vế phải, điều này có nghĩa là với mọi số tự nhiên $k \in \mathbb{N}$, ta đều có $f(x) > k$. Do hàm số nhận giá trị trên tập số thực mở rộng $\overline{\mathbb{R}}$, giá trị duy nhất lớn hơn mọi số nguyên dương $k$ chính là vô cực. Vậy $x$ thuộc vế trái.
> 	  
> Lập luận tương tự:
> 
> 3. Tập $D_{-\infty}$:
> $$
> \{ x \in D: \lim_{ n \to \infty }f_{n} = -\infty\} = \bigcap_{k=1}^{\infty} \{ x \in D_{e} : f(x)< -k\} \in \mathfrak{A}
> $$
> 
> Ta biểu diễn các tập còn lại thành hợp của các tập đo được ta đã chứng minh:
> 
> 4. Tập $D_{c}$:
> 	Ta có $D_{c} = \{ x \in D_{e}: f(x) \in \mathbb{R}\}$, mà giới hạn $f_{n}$ chỉ có thể nhận giá trị số thực, $\infty$ hoặc $-\infty$, nên $D_{c} = D_{e} \setminus (D_{\infty} \cup D_{-\infty}) \}$. Vì $D_{c}, D_{\infty}, D_{-\infty} \in \mathfrak{A}$, nên ta có $D_{c} \in \mathfrak{A}$.
> 5. Tập $D_{ne}$:
> 	Ta có $D_{ne} =\{ x \in D: \lim_{ n \to \infty }f_{n} \text{ không tồn tại}\} = D \setminus D_{e}$. Vì $D \in \mathfrak{A}$ và $D_{e} \in \mathfrak{A}$ nên ta có $D_{ne} \in \mathfrak{A}$.
>    
> Cuối cùng, vì $f = \lim_{n \to \infty} f_n$ được xác định trên $D_e$, nên khi hạn chế $f$ lên các tập con của $D_e$ là $D_c, D_\infty$ và $D_{-\infty}$, ta vẫn thu được một hàm đo được:
 >	Ta có $E \subset D_e$ và $E \in \mathfrak{A}$, thì với mọi $a \in \mathbb{R}$, ta có $\{ x \in E : f(x) > a \} = E \cap \{ x \in D_e : f(x) > a \} \in \mathfrak{A}$. Do đó $f$ đo được trên $E$. Vậy $\lim_{n \to \infty} f_n$ là ${} \mathfrak{A} {}$-đo được trên $D_e, D_c, D_\infty$ và $D_{-\infty}$.

# [I] Hội tụ hầu khắp nơi

> [!def] (Hội tụ hầu khắp nơi)
> Dãy hàm $f_{n}$ hội tụ a.e (almost everywhere) về một hàm hữu hạn trên $D$ nếu nó chỉ phân kỳ (tiến ra vô cùng) trên một tập có độ đo bằng không:
> $$
> \exists \text{ null }N: \forall x \in D \setminus N,\lim_{ n \to \infty } f_{n}(x) \in \mathbb{R} 
> $$

> [!lem] (Bổ đề 6.2)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ và dãy hàm đo được $f_n$ trên tập $D \in \mathfrak{A}$.
> Ta nói dãy $f_n$ hội tụ hầu khắp nơi (a.e.) trên $D$ nếu:
> Với mọi mức sai số $\eta > 0$ nhỏ tùy ý, ta luôn tìm được một tập con đo được $E \subset D$ sao cho:
> 1. $\mu(E) < \eta$  
> 2. Dãy $f_n$ hội tụ điểm với mọi điểm thuộc phần  không gian còn lại $D \setminus E$.
>    
> Ký hiệu: $f_n \xrightarrow{\text{a.e.}} f$ trên $D$.

> [!prf]
> Với mỗi số nguyên dương $k \in \mathbb{N}$, chọn $\eta = \frac{1}{k}$. Theo giả thiết, tồn tại một tập hợp đo được $E_k \subset D$ sao cho $\mu(E_k) < \frac{1}{k}$ và giới hạn $\lim_{n \to \infty} f_n(x)$ tồn tại với mọi $x \in D \setminus E_k$.
> Ta đặt $E = \bigcap_{k \in \mathbb{N}} E_{k}$. Vì $E$ là tập con của $E_{k}$ với mọi $k$, nên do tính đơn điệu:
> $$
> \mu(E) \le \mu(E_k) < \frac{1}{k} \quad \text{với mọi } k \in \mathbb{N}
> $$
> Do $\mu(E)$ không âm mà nhỏ hơn ${} \frac{1}{k}$ là số dương bất kì, ta phải có $\mu(E) = 0$.
> Kiểm tra hội tụ trên phần không gian còn lại: 
> $$
>D \setminus E = D \setminus \left( \bigcap_{k \in \mathbb{N}} E_k \right) = \bigcup_{k \in \mathbb{N}} (D \setminus E_k)
> $$
> Nếu lấy một điểm $x$ bất kỳ thuộc $D \setminus E$, thì điểm $x$ này phải nằm trong ít nhất một tập $D \setminus E_k$ với $k$ nào đó. Theo giả thiết, ta có $\lim_{ n \to \infty }f_{n}(x)$ tồn tại trên $D \setminus E_{k}$, do đó hàm số hội tụ về $x$ trên $D \setminus E$.
> Vì điều này đúng với mọi $x \in D \setminus E$ và $\mu(E) = 0$, ta kết luận $f_{n}$ hội tụ a.e trên $D$.

> [!prp] (Mệnh đề 6.3)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ và dãy hàm đo được $f_n$ trên $D$. Giả sử $g_1$ và $g_2$ là hai hàm đo được trên $D$.
> Nếu $\lim_{n \to \infty} f_n = g_1$ a.e. trên $D$ và đồng thời $\lim_{n \to \infty} f_n = g_2$ a.e. trên $D$, thì $g_1 = g_2$ a.e. trên $D$.

> [!prf]
> Vì $\lim f_n = g_1$ a.e., tồn tại một tập null $N_1 \subset D$ sao cho $\lim f_n(x) = g_1(x)$ với mọi $x \in D \setminus N_1$.
> Tương tự, tồn tại một tập null $N_2 \subset D$ sao cho $\lim f_n(x) = g_2(x)$ với mọi $x \in D \setminus N_2$.
> Đặt $N = N_1 \cup N_2$. Vì hợp đếm được (hoặc hữu hạn) của các tập null luôn là một tập null, ta có $\mu(N) = 0$. Ta có  biểu diễn $D \setminus N$:
> $$
> D \setminus N = D \setminus (N_1 \cup N_2) = (D \setminus N_1) \cap (D \setminus N_2)
> $$
> Lấy một điểm $x$ bất kỳ thuộc $D \setminus N$. Vì $x \in D \setminus N_1$, ta có $\lim f_n(x) = g_1(x)$. Mà $x \in D \setminus N_2$, ta cũng có $\lim f_n(x) = g_2(x)$. Vì giới hạn của các số thực tại một điểm cụ thể là duy nhất, ta phải có $g_1(x) = g_2(x)$.
> Vì điều này đúng với mọi $x \in D \setminus N$, ta kết luận $g_{1} = g_{2}$ a.e trên $D$.

> [!prp] (Mệnh đề 6.4)
> Let $(X, \mathfrak{A})$ be a measureable space and let $f_{n}$ be a sequence of extended real-valued $A$-measureable functions on set $D \in \mathfrak{A}$. Then:
> $$
> \{ x \in D: \lim_{ n \to \infty }f_{n}(x) = f(x) \in \mathbb{R} \}  = \bigcap_{m \in \mathbb{N}} \bigcup_{N \in \mathbb{N}} \bigcap_{p \in \mathbb{N}} \left\{x \in D : |f_{N+p}(x) - f_N(x)| < \frac{1}{m}\right\}
> $$
> and
> $$
> \{x \in D : f_n(x) \not\to f(x)\} = \bigcup_{m \in \mathbb{N}} \bigcap_{N \in \mathbb{N}} \bigcup_{p \in \mathbb{N}} \left\{x \in D : |f_{N+p}(x) - f(x)| \ge \frac{1}{m}\right\}
> $$

> [!prf]
> Theo định nghĩa giới hạn $\lim_{ n \to \infty }f_{n}(x) = f(x)$ nghĩa là: Tùy ý ${} \varepsilon> 0 {}$, tìm được $N \in \mathbb{N}$m sao cho mọi $n \ge N$, ta có ${} |f_n(x) - f(x)| < \varepsilon {}$.
> Ta thay ${} \varepsilon = \frac{1}{m} {}$ và đặt $n = N + p$. Ta có:
> $$
> \forall m \in \mathbb{N}, \exists N \in \mathbb{N}, \forall p \in \mathbb{N}, \text{ta có} |f_{N+p}(x) - f(x)| < \frac{1}{m}
> $$
> Sử dụng $\bigcap$ thay cho $\forall$ và $\bigcup$ thay cho $\exists$ ta có điều cần chứng minh.
> Đẳng thức hai suy ra từ phủ định của đẳng thức trên.

> [!thm] (Định lý 6.5)
> Given a measure space $(X, \mathfrak{A}, \mu)$. Let $f_{n}$ be a sequence of extended real-valued $\mathfrak{A}$-measureable on a set $D \in \mathfrak{A}$ and let $f$ be a real-valued $\mathfrak{A}$-measureable function on $D$. For $m,n \in \mathbb{N}$, define:
> $$
> D_n^m = \left\{x \in D : |f_n(x) - f(x)| \ge \frac{1}{m}\right\}
> $$
> Then we have $f_{n}$ converges to $f$ a.e on $D$ if and only if: $\mu(\limsup_{ n\to \infty }D_{n}^{m}) =0$ for every $m \in \mathbb{N}$.

> [!prf]
> Theo định nghĩa, dãy $f_{n}$ hội tụ về $f$ hầu khắp nơi trên $D$ khi và chỉ khi: 
> $$
> \mu\left(\{x \in D : f_n(x) \not\to f(x)\}\right) = 0
> $$
> Áp dụng trực tiếp mệnh đề 6.4 cho dãy hàm không hội tụ:
> $$
> \mu\left( \bigcup_{m \in \mathbb{N}} \bigcap_{N \in \mathbb{N}} \bigcup_{p \in \mathbb{N}} \left\{x \in D : |f_{N+p}(x) - f(x)| \ge \frac{1}{m}\right\} \right) = 0 \tag{1}
> $$
> Vì độ đo có tính đơn điều nên nếu hợp đếm được của tập lớn bằng không thì các tập con $A_{m}$ có độ đo không. Ngược lại, nếu mọi tập con $A_m$ có độ đo bằng không, thì hợp đếm được của chúng cũng là một tập có độ đo bằng 0. Vậy $(1)$ tương đương:
> $$
> \mu\left( \bigcap_{N \in \mathbb{N}} \bigcup_{p \in \mathbb{N}} \left\{x \in D : |f_{N+p}(x) - f(x)| \ge \frac{1}{m}\right\} \right) = 0 
> $$
> Thay định nghĩa $\limsup_{n \to \infty} A_n = \bigcap_{N=1}^{\infty} \bigcup_{n=N}^{\infty} A_n$ và $D_{n}^{m} =\left\{x \in D : |f_n(x) - f(x)| \ge \frac{1}{m}\right\}$ vào biểu thức:
> $$
> \mu\left( \limsup_{n \to \infty} D_n^m \right) = 0
> $$ 
> Định lý được chứng minh hoàn tất.

> [!thm] (Hệ quả 6.5: Mệnh đề 6.11)
> Cho $\mu(D) < \infty$ và dãy hàm $f_n \to f$ hầu khắp nơi (a.e.) trên $D$. 
> Với tập tích lũy đuôi:
> $$
> D_n(m) = \bigcup_{k=n}^\infty D_k^m \tag{1}
> $$  
> Khi đó ta có
> $$
> \lim_{n \to \infty} \mu(D_n(m)) = 0 \quad \text{với mọi } m \in \mathbb{N} \tag{2}
> $$

> [!prf] 
> Cố định $m \in \mathbb{N}$. Theo cách đặt, ta có $D_{n+1}(m) \subseteq D_n(m)$ với mọi $n \ge 1$. Do đó, $(D_n(m))_{n=1}^\infty$ là một dãy tập hợp giảm.
> 
> Theo định nghĩa, ta có giao vô hạn của dãy giảm này chính là giới hạn trên (limsup) của dãy tập sai số thành phần:
>    $$\lim_{n \to \infty} D_n(m) = \bigcap_{n=1}^\infty D_n(m) = \limsup_{n \to \infty} D_n^m$$
> 
> Vì $\mu(D_1(m)) \le \mu(D) < \infty$, áp dụng tính liên tục trên của độ đo và kết quả $\mu(\limsup_{n \to \infty} D_n^m) = 0$ từ Định lý 6.5, ta được:
>    $$\lim_{n \to \infty} \mu(D_n(m)) = \mu\left( \lim_{n \to \infty} D_n(m) \right) = \mu\left( \limsup_{n \to \infty} D_n^m \right) = 0$$
> 
> Chứng minh hoàn tất.

> [!thm] (Định lý 6.6: Bổ đề Borel-Cantelli)
> Cho dãy tập hợp $\{A_n\}_{n=1}^\infty$ trong $\mathfrak{A}$. Nếu $\sum_{n=1}^{\infty} \mu(A_n) < \infty$, thì:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = 0
> $$

> [!prf]
> Bằng định nghĩa của giới hạn trên tập hợp: $\limsup_{n \to \infty} A_n = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k$. 
> Đặt $E_n = \bigcup_{k=n}^\infty A_k$. Ta thấy $\{E_n\}_{n=1}^\infty$ là một dãy giảm. 
> Áp dụng tính $\sigma$-dưới cộng tính, ta đánh giá được tập đầu tiên:
> $$
> \mu(E_1) = \mu\left( \bigcup_{k=1}^\infty A_k \right) \le \sum_{k=1}^\infty \mu(A_k) < \infty
> $$
> Vì tồn tại $E_1$ có độ đo hữu hạn, ta đủ điều kiện áp dụng bổ đề Liên tục trên tổng quát cho dãy giảm $\{E_n\}$:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = \mu\left( \bigcap_{n=1}^\infty E_n \right) = \lim_{n \to \infty} \mu(E_n)
> $$
> Mặt khác, tiếp tục theo tính $\sigma$-dưới cộng tính:
> $$
> \mu(E_n) = \mu\left( \bigcup_{k=n}^\infty A_k \right) \le \sum_{k=n}^\infty \mu(A_k)
> $$
> Khi $n \to \infty$, vế phải là phần dư của một chuỗi số hội tụ nên nó sẽ tiến về 0. Do đó $\lim_{n \to \infty} \mu(E_n) = 0$. 
> Kết luận: $\mu\left( \limsup_{n \to \infty} A_n \right) = 0$.

> [!thm] (Borel-Cantelli Lemma: Cách chứng minh dùng tích phân Lebesgue)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$. Với mọi dãy các tập đo được $(A_n)_{n \in \mathbb{N}}$, nếu tổng các độ đo của chúng là hữu hạn:
> $$
> \sum_{n=1}^{\infty} \mu(A_n) < \infty
> $$
> thì độ đo của giới hạn trên của dãy tập hợp đó bằng không:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = 0
> $$

> [!prf] 
> Gọi $A = \limsup_{n \to \infty} A_n$. Theo định nghĩa, một điểm $x \in A$ khi và chỉ khi $x$ thuộc về vô hạn các tập hợp $A_n$.
> 
> Xét dãy hàm đặc trưng $\chi_{A_n}(x)$. Hàm này nhận giá trị $1$ nếu $x \in A_n$ và bằng $0$ nếu $x \notin A_n$.
> Ta thiết lập một hàm đếm $f(x)$ là tổng của tất cả các hàm đặc trưng này trên toàn bộ dãy:
> $$
> f(x) = \sum_{n=1}^{\infty} \chi_{A_n}(x)
> $$
> Ý nghĩa của $f(x)$ chính là đếm số lượng các tập hợp $A_n$ chứa điểm $x$. 
> Nếu $x \in \limsup_{n \to \infty} A_n$, do $x$ xuất hiện vô hạn lần, chuỗi tổng sẽ cộng vô hạn con số $1$ lại, kéo theo $f(x) = \infty$.
> Ngược lại, nếu $x \notin \limsup_{n \to \infty} A_n$, $x$ chỉ nằm trong một số hữu hạn tập, nên $f(x) < \infty$.
> Do đó, ta có thể đồng nhất tập giới hạn trên với tập các điểm làm cho hàm $f$ ra vô cùng:
> $$
> \limsup_{n \to \infty} A_n = \{x \in X : f(x) = \infty\} \tag{1}
> $$
> 
> Bước tiếp theo, ta lấy tích phân Lebesgue của hàm $f$ trên toàn bộ không gian $X$.
> Vì các hàm đặc trưng $\chi_{A_n}$ đều không âm, chuỗi tổng từng phần của chúng là một dãy hàm tăng. Ta hoàn toàn đủ điều kiện áp dụng Định lý Hội tụ đơn điệu (MCT) để hoán vị dấu tích phân và dấu tổng vô hạn:
> $$
> \int_X f d\mu = \int_X \left( \sum_{n=1}^{\infty} \chi_{A_n} \right) d\mu \xrightarrow{MCT} \sum_{n=1}^{\infty} \left( \int_X \chi_{A_n} d\mu \right)
> $$
> Theo tính chất cơ bản, tích phân của hàm đặc trưng trên một tập hợp chính là độ đo của tập hợp đó, tức là $\int_X \chi_{A_n} d\mu = \mu(A_n)$. Thay vào phương trình trên:
> $$
> \int_X f d\mu = \sum_{n=1}^{\infty} \mu(A_n)
> $$
> Theo giả thiết của bổ đề, tổng các độ đo này là một chuỗi hội tụ (hữu hạn). Suy ra:
> $$
> \int_X f d\mu < \infty
> $$
> 
> Sử dụng tính chất: Nếu tích phân Lebesgue của một hàm không âm là hữu hạn, thì hàm đó phải nhận giá trị hữu hạn hầu khắp nơi (a.e.). 
> Điều này có nghĩa là tập hợp các điểm làm cho hàm tiến ra vô cùng bắt buộc phải có độ đo bằng $0$:
> $$
> \mu(\{x \in X : f(x) = \infty\}) = 0 \tag{2}
> $$
> 
> Kết nối $(1)$ và $(2)$, ta thu được điều phải chứng minh:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = 0
> $$

> [!thm] (Định lý 6.7: Tiêu chuẩn hội tụ hầu khắp nơi)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian đo được. Cho $f_n$ là một dãy các hàm đo được nhận giá trị thực mở rộng trên tập ${} D \in \mathfrak{A} {}$ và $f$ là một hàm đo được nhận giá trị thực trên $D$. Giả sử tồn tại một dãy số dương $(\varepsilon_n)_{n \in \mathbb{N}}$ thỏa mãn hai điều kiện sau:
> 4. $\lim_{n \to \infty} \varepsilon_n = 0$
> 5. $\sum_{n \in \mathbb{N}} \mu(\{x \in D : |f_n(x) - f(x)| \ge \varepsilon_n\}) < \infty$
>    
> Khi đó, dãy hàm $f_n$ hội tụ về $f$ hầu khắp nơi (a.e.) trên $D$.

> [!prf]
> Theo Định lý 6.5, để kết luận dãy $f_n$ hội tụ về $f$ hầu khắp nơi trên $D$, ta chỉ cần chứng minh được rằng với mọi số nguyên dương $m \in \mathbb{N}$:
> $$
> \mu\left( \limsup_{n \to \infty} \left\{x \in D : |f_n(x) - f(x)| \ge \frac{1}{m}\right\} \right) = 0
> $$
> 
> Mặt khác, theo giả thiết thứ hai, nếu ta đặt $A_n = \{x \in D : |f_n(x) - f(x)| \ge \varepsilon_n\}$, thì chuỗi độ đo của các tập này hội tụ: $\sum_{n \in \mathbb{N}} \mu(A_n) < \infty$.
> Áp dụng Bổ đề Borel-Cantelli (Định lý 6.6) cho dãy tập hợp $A_n$, ta có ngay kết quả:
> $$
> \mu\left( \limsup_{n \to \infty} \{x \in D : |f_n(x) - f(x)| \ge \varepsilon_n\} \right) = 0
> $$
> 
> Để sử dụng kết quả của Borel-Cantelli sang mục tiêu của Định lý 6.5, ta lấy một số $m \in \mathbb{N}$ bất kỳ.
> Vì giả thiết thứ nhất cho $\lim_{n \to \infty} \varepsilon_n = 0$, ta luôn tồn tại một chỉ số $N \in \mathbb{N}$ đủ lớn sao cho $\varepsilon_n < \frac{1}{m}$ với mọi $n \ge N$, khi đó ta có quan hệ bao hàm tập hợp:
> $$
> \left\{x \in D : |f_n(x) - f(x)| \ge \frac{1}{m}\right\} \subseteq \{x \in D : |f_n(x) - f(x)| \ge \varepsilon_n\}
> $$
> 
> Khi lấy giới hạn trên cho cả hai dãy tập hợp, quan hệ bao hàm này vẫn được bảo toàn (do giới hạn trên không bị ảnh hưởng bởi hữu hạn phần tử đầu tiên):
> $$
> \limsup_{n \to \infty} \left\{x \in D : |f_n(x) - f(x)| \ge \frac{1}{m}\right\} \subseteq \limsup_{n \to \infty} \{x \in D : |f_n(x) - f(x)| \ge \varepsilon_n\}
> $$
> Định lý được chứng minh hoàn tất.

> [!thm] (Tiêu chuẩn hội tụ hầu khắp nơi: Cách 2)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo. Cho $f_n$ là một dãy các hàm đo được nhận giá trị thực mở rộng trên tập $D \in \mathfrak{A}$ và $f$ là một hàm đo được nhận giá trị thực trên $D$. Giả sử tồn tại một dãy số dương ${} (\varepsilon_n)_{n \in \mathbb{N}}$ thỏa mãn hai điều kiện sau:
> 6. $\lim_{n \to \infty} \varepsilon_n = 0$
> 7. $\sum_{n \in \mathbb{N}} \mu(\{x \in D : |f_n(x) - f(x)| \ge \varepsilon_n\}) < \infty$
> 
> Khi đó, dãy hàm $f_n$ hội tụ về $f$ hầu khắp nơi (a.e.) trên $D$.

> [!prf] 
> 
> **Bước 1: Chuyển độ đo thành tích phân của hàm chỉ thị**
> Đặt $A_n = \{x \in D : |f_n(x) - f(x)| \ge \varepsilon_n\}$. Độ đo của tập $A_n$ chính là tích phân của hàm chỉ thị $\chi_{A_n}$ trên $D$:
> $$\mu(A_n) = \int_D \chi_{A_n}(x) d\mu$$
> Theo giả thiết thứ hai, ta có chuỗi tích phân hội tụ:
> $$\sum_{n \in \mathbb{N}} \int_D \chi_{A_n}(x) d\mu < \infty$$
> 
> **Bước 2: Đổi chỗ tổng và tích phân**
> Vì hàm chỉ tiêu $\chi_{A_n}(x) \ge 0$, ta áp dụng tính $\sigma$-cộng tính của tích phân, đưa dấu tổng vào bên trong dấu tích phân:
> $$\int_D \left( \sum_{n \in \mathbb{N}} \chi_{A_n}(x) \right) d\mu < \infty$$
> 
> **Bước 3: Tính hữu hạn a.e của tích phân hàm không âm**
> Xét hàm tổng $g(x) = \sum_{n \in \mathbb{N}} \chi_{A_n}(x)$. Rõ ràng $g(x) \ge 0$ với mọi $x \in D$.
> Vì tích phân của hàm $g(x)$ trên $D$ là một số hữu hạn, theo Bổ đề 8.2, hàm $g(x)$ bắt buộc phải có giá trị hữu hạn hầu khắp nơi trên $D$.
> 
> Nói cách khác, tồn tại một tập null $N \subset D$ (với $\mu(N) = 0$) sao cho với mọi điểm $x \in D \setminus N$, ta có:
> $$\sum_{n \in \mathbb{N}} \chi_{A_n}(x) < \infty$$
> 
> **Bước 4: Điều kiện cần của chuỗi hội tụ**
> Cố định một điểm $x \in D \setminus N$. Chuỗi số $\sum \chi_{A_n}(x)$ là tổng của các giá trị chỉ gồm $0$ và $1$. 
> Để một chuỗi của các số $0$ và $1$ có tổng hữu hạn, số lượng chữ số $1$ xuất hiện bắt buộc phải hữu hạn. Điều này đồng nghĩa với việc tồn tại một chỉ số $N_x$ đủ lớn sao cho:
> - $\chi_{A_n}(x) = 0 \quad (\forall n \ge N_x)$
> - Suy ra $x \notin A_n \quad (\forall n \ge N_x)$
> 
> Lắp lại định nghĩa của tập $A_n$, ta có bất đẳng thức sau đúng với mọi $n \ge N_x$:
> $$|f_n(x) - f(x)| < \varepsilon_n$$
> 
> **Bước 5: Kết luận**
> Theo giả thiết thứ nhất, $\lim_{n \to \infty} \varepsilon_n = 0$. 
> Do khoảng cách $|f_n(x) - f(x)|$ bị chặn trên bởi $\varepsilon_n$ từ một lúc nào đó trở đi, áp dụng nguyên lý kẹp, ta suy ra:
> $$\lim_{n \to \infty} |f_n(x) - f(x)| = 0 \implies \lim_{n \to \infty} f_n(x) = f(x)$$
> Vì lập luận này đúng với mọi $x \in D \setminus N$, ta kết luận dãy $f_n$ hội tụ về $f$ hầu khắp nơi trên $D$. 

> [!thm] (Prob 8.17: Hội tụ hầu khắp nơi từ hội tụ trong $L^p$)
> Cho $(X, \mathcal{A}, \mu)$ là một không gian độ đo. Cho $f_n$ và $f$ là các hàm nhận giá trị thực mở rộng, $\mathcal{A}$-đo được trên $D \in \mathcal{A}$, và giả sử $f$ nhận giá trị thực hầu khắp nơi trên $D$. 
> Giả sử tồn tại một dãy số dương ${} (\varepsilon_n)_{n \in \mathbb{N}}$ sao cho:
> 1. $\sum_{n \in \mathbb{N}} \varepsilon_n < \infty$;
> 2. $\int_D |f_n - f|^p d\mu < \varepsilon_n$ với mọi $n \in \mathbb{N}$, với một $p \in (0, \infty)$ cố định.
>    
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

> [!thm] (Hội tụ hầu khắp nơi từ hội tụ trong $L^p$: Cách 2)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo. Cho $f_n$ và $f$ là các hàm nhận giá trị thực mở rộng, đo được trên $D \in \mathfrak{A}$. Giả sử $f$ nhận giá trị thực hữu hạn hầu khắp nơi trên $D$. 
> Giả sử tồn tại một dãy số dương ${} (\varepsilon_n)_{n \in \mathbb{N}}$ sao cho:
> 3. $\sum_{n \in \mathbb{N}} \varepsilon_n < \infty$
> 4. $\int_D |f_n - f|^p d\mu < \varepsilon_n$ với mọi $n \in \mathbb{N}$, với một $p \in (0, \infty)$ cố định.
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
> Vì $p \in (0, \infty)$ là một số dương cố định, $|f_n(x) - f(x)|^p \to 0$ tương đương với:
> $$\lim_{n \to \infty} |f_n(x) - f(x)| = 0 \implies \lim_{n \to \infty} f_n(x) = f(x)$$
> 
> Lập luận này đúng với mọi $x \in D \setminus N$ (nơi $\mu(N) = 0$). Vậy ta kết luận dãy hàm $f_n$ hội tụ về $f$ hầu khắp nơi trên $D$. 

# [II] Hội tụ gần đều

> [!def] (Định nghĩa 6.10: Hội tụ gần đều)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ và một dãy các hàm ${} \mathfrak{A}$-đo được $f_n$ nhận giá trị thực mở rộng trên tập $D \in \mathfrak{A}$. Cho $f$ là một hàm $\mathfrak{A}$-đo được nhận giá trị thực trên $D$. 
> 
> Ta nói dãy $f_n$ hội tụ a.u (almost uniformly converges) về $f$ trên $D$ nếu: Với mọi mức dung sai $\eta > 0$ nhỏ tùy ý cho tập hợp, ta luôn tìm được một tập con đo được $E \subset D$ sao cho:
> 1. $\mu(E) < \eta$ 
> 2. Dãy $(f_n)$ hội tụ đều (converges uniformly) về $f$ trên phần không gian còn lại $D \setminus E$.

> [!rem] (Cấp bậc hội tụ)
> Ta so sánh 3 loại hội tụ:
> 
> 3. Hội tụ điểm (Pointwise Convergence):
> $$
> \forall \varepsilon > 0, \forall x \in D, \exists N(\varepsilon, x) \in \mathbb{N} : |f_n(x) - f(x)| < \varepsilon \quad \forall n \ge N
> $$
> Đặc điểm: Chỉ số $N$ phụ thuộc vào từng điểm $x$. Mỗi điểm có tốc độ hội tụ riêng biệt. 
> 
> 3. Hội tụ đều (Uniform Convergence):
> $$
> \forall \varepsilon > 0, \exists N(\varepsilon) \in \mathbb{N} : |f_n(x) - f(x)| < \varepsilon \quad \forall n \ge N, \forall x \in D
> $$
> Đặc điểm: Chỉ số $N$ dùng chung cho toàn bộ không gian $D$. Toàn bộ hàm số cùng dung chung một sai số hội tụ. 
> 
> 3. Hội tụ gần đều (Almost Uniform Convergence):
> $$
> \forall \eta > 0, \exists E \subset D \text{ với } \mu(E) < \eta \text{ sao cho } \forall \varepsilon > 0, \exists N(\varepsilon) \in \mathbb{N} : |f_n(x) - f(x)| < \varepsilon \quad \forall n \ge N, \forall x \in D \setminus E
> $$
> Đặc điểm: Ta có hai biến độc lập: $\eta$ kiểm soát sai số tập hợp, còn $\varepsilon$ kiểm soát sai số hội tụ của hàm. Ta được phép hy sinh sai số $E$ cho tập hợp ($\mu(E) < \eta$) để đổi lấy sự hội tụ hội tụ đều trên phần không gian còn lại.

> [!thm] (Hội tụ a.u suy ra hội tụ a.e.)
> Nếu dãy $f_n$ hội tụ gần đều (a.u) về $f$ trên $D$, thì $f_n$ hội tụ về $f$ hầu khắp nơi (a.e) trên $D$.

> [!prf]
> Giả sử $f_n$ hội tụ gần đều về $f$ trên $D$. Lấy một số $\eta > 0$ bất kỳ.
> Theo định nghĩa, tồn tại một tập $E \subset D$ với $\mu(E) < \eta$ sao cho $f_n$ hội tụ đều về $f$ trên $D \setminus E$.
> Nếu một dãy hội tụ đều trên một tập hợp, thì nó phải hội tụ điểm tại mọi $x$ thuộc tập hợp đó. Tức là $\lim_{n \to \infty} f_n(x) = f(x)$ với mọi $x \in D \setminus E$.
> Vì điều này đúng với mọi $\eta > 0$, nên thỏa mãn điều kiện của Bổ đề 6.2. Ta kết luận $f_n$ hội tụ về $f$ hầu khắp nơi trên $D$.

> [!thm] (Định lý 6.12: Định lý Egoroff)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ có độ đo hữu hạn, tức là $\mu(D) < \infty$. Nếu dãy hàm đo được $f_n$ hội tụ về hàm đo được $f$ hầu khắp nơi (a.e) trên $D$, thì dãy $f_n$ hội tụ gần đều (a.u) về $f$ trên $D$.

> [!prf] 
> Để chứng minh dãy hàm hội tụ gần đều, ta cần chỉ ra rằng với mọi $\eta > 0$ cho trước, ta luôn có thể tìm được một tập $E \in \mathfrak{A}$ sao cho $\mu(E) < \eta$ và $f_n$ hội tụ đều về $f$ trên phần bù $D \setminus E$.
> 
> **Bước 1: Sử dụng Hệ quả 6.5**
> Với mỗi số nguyên dương $m, n$, định nghĩa $D_n(m) = \bigcup_{k=n}^\infty \left\{ x \in D : |f_k(x) - f(x)| \ge \frac{1}{m} \right\}$.
> Do $f_n \to f$ a.e. và $\mu(D) < \infty$, theo Hệ quả 6.5, ta có:
> $$\lim_{n \to \infty} \mu(D_n(m)) = 0 \quad \text{với mọi } m \in \mathbb{N}$$
> 
> **Bước 2: Xây dựng tập phần dư $E$**
> Lấy một số $\eta > 0$ bất kỳ. Nhờ kết quả giới hạn bằng $0$ ở trên, với mỗi số nguyên $m \ge 1$, ta luôn có thể tìm được một chỉ số $N_m$ đủ lớn sao cho:
> $$\mu(D_{N_m}(m)) < \frac{\eta}{2^m}$$
> Ta định nghĩa tập $E$ là hợp của tất cả các phần sai số đuôi này:
> $$E = \bigcup_{m=1}^{\infty} D_{N_m}(m)$$
> Áp dụng tính $\sigma$-dưới cộng tính của độ đo, ta đánh giá được kích thước của tập $E$:
> $$\mu(E) \le \sum_{m=1}^{\infty} \mu(D_{N_m}(m)) < \sum_{m=1}^{\infty} \frac{\eta}{2^m} = \eta$$
> Vậy tập $E$ đã thỏa mãn điều kiện có độ đo nhỏ hơn tùy ý ($\mu(E) < \eta$).
> 
> **Bước 3: Kiểm tra sự hội tụ đều trên $D \setminus E$**
> Lấy một điểm $x$ bất kỳ nằm ngoài $E$, tức là $x \in D \setminus E$.
> Vì $x \notin E$, nên theo luật De Morgan, $x$ không thuộc vào bất kỳ tập $D_{N_m}(m)$ nào với mọi $m$:
> $$x \notin \bigcup_{k = N_m}^\infty \left\{ \left|f_k - f\right| \ge \frac{1}{m} \right\} \quad \text{với mọi } m \ge 1$$
> Điều này có nghĩa là, với mọi $m \ge 1$, sai số của điểm $x$ bắt buộc phải lọt vào phần bù:
> $$|f_k(x) - f(x)| < \frac{1}{m} \quad \text{với mọi } k \ge N_m$$
> Điểm then chốt ở đây là chỉ số $N_m$ chỉ phụ thuộc vào $m$ (mức sai số) mà hoàn toàn không phụ thuộc vào việc ta chọn điểm $x$ nào trong miền $D \setminus E$. 
> Do đó, quá trình hội tụ này là đồng nhất trên toàn miền $D \setminus E$. Vậy $f_n$ hội tụ đều về $f$ trên $D \setminus E$. Định lý Egoroff được chứng minh hoàn tất.

> [!thm] (Phản ví dụ Egoroff)
> Định lý Egoroff bắt buộc phải có điều kiện không gian đo được hữu hạn $\mu(D) < \infty$:
> 
> Xét không gian đo Lebesgue $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$ với miền $D = [0, \infty)$ có $\mu_L(D) = \infty$.
> Xét dãy hàm đặc trưng (khối lượng trượt):
> $$
> f_n(x) = \chi_{[n, n+1]}(x)
> $$
> Dãy $f_n$ hội tụ điểm về hàm $f(x) = 0$ trên $D$. (Vì với mọi $x \in D$, chọn $N > x$, ta có $x \notin [n, n+1] \implies f_n(x) = 0$ với mọi $n \ge N$).
> Tuy nhiên, $f_n$ không hội tụ gần đều về $0$ trên $D$.

> [!prf]
> Giả sử phản chứng: dãy $f_n$ hội tụ gần đều về 0 trên $D$. 
> Với mức dung sai $\eta = 1 > 0$, tồn tại tập đo được $A \subset D$ với $\mu_L(A) < 1$ sao cho $f_n$ hội tụ đều về $0$ trên miền $D \setminus A$.
> 
> Theo định nghĩa hội tụ đều trên $D \setminus A$, ứng với $\varepsilon = \frac{1}{2}$, tìm được $N_0 \in \mathbb{N}$ sao cho:
> $$
> |f_n(x) - 0| < \frac{1}{2} \quad \forall n \ge N_0, \forall x \in D \setminus A
> $$
> Vì hàm $f_n(x)$ chỉ nhận giá trị $\{0, 1\}$, để nhỏ hơn $\frac{1}{2}$ thì giá trị của nó bắt buộc phải bằng 0:
> $$
> f_n(x) = 0 \quad \forall n \ge N_0, \forall x \in D \setminus A
> $$
> Mặt khác, theo định nghĩa của hàm đặc trưng, $f_n(x)$ chỉ bằng 0 khi $x$ nằm ngoài khoảng $[n, n+1]$. Do đó, không có bất kỳ điểm $x \in D \setminus A$ nào được phép rơi vào khoảng $[n, n+1]$. 
> Do đó ta có quan hệ bao hàm:
> $$
> [n, n+1] \subset A \quad \forall n \ge N_0
> $$
> Lấy hợp của tất cả các khoảng này từ $N_0$ đến vô cùng, ta có:
> $$
> \bigcup_{n=N_0}^{\infty} [n, n+1] = [N_0, \infty) \subset A
> $$
> Áp dụng tính đơn điệu của độ đo:
> $$
> \mu_L(A) \ge \mu_L([N_0, \infty)) = \infty
> $$
> Điều này mâu thuẫn trực tiếp với giả thiết ban đầu là tập cắt bỏ phải có $\mu_L(A) < 1$. 
> Điều chứng tỏ $f_n$ không thể hội tụ gần đều.

# [III] Hội tụ theo độ đo

> [!def] (Định nghĩa 6.14: Hội tụ theo độ đo)
> Cho trước một không gian độ đo $(X, \mathfrak{A}, \mu)$. Giả sử $(f_n)_{n \in \mathbb{N}}$ là một dãy các hàm đo được nhận giá trị thực mở rộng trên một tập đo được $D \in \mathfrak{A}$.
> 
> Ta nói rằng dãy hàm $(f_n)_{n \in \mathbb{N}}$ **hội tụ theo độ đo** $\mu$ về một hàm đo được nhận giá trị thực $f$ trên $D$ nếu với mọi số thực $\varepsilon > 0$, ta có:
> $$
> \lim_{n \to \infty} \mu\left( \{x \in D : |f_n(x) - f(x)| \ge \varepsilon\} \right) = 0
> $$
> 
> Nghĩa là, với mọi $\varepsilon > 0$ và $\eta > 0$ cho trước, luôn tồn tại một chỉ số $N_{\varepsilon, \eta} \in \mathbb{N}$ đủ lớn sao cho với mọi $n \ge N_{\varepsilon, \eta}$, ta đều có:
> $$
> \mu\left( \{x \in D : |f_n(x) - f(x)| \ge \varepsilon\} \right) < \eta
> $$
> 
> Ký hiệu: $f_n \xrightarrow{\mu} f$ trên $D$.

> [!thm] (Hệ quả 6.5: Hội tụ a.e suy ra sự hội tụ theo độ đo)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $D \in \mathfrak{A}$ là tập có độ đo hữu hạn, tức là $\mu(D) < \infty$.
> Giả sử $(f_n)_{n \in \mathbb{N}}$ là một dãy các hàm đo được nhận giá trị thực mở rộng và $f$ là một hàm đo được nhận giá trị thực trên $D$.
> 
> Nếu dãy hàm $(f_n)$ hội tụ về $f$ hầu khắp nơi (a.e.) trên $D$, thì $(f_n)$ cũng hội tụ theo độ đo $\mu$ về $f$ trên $D$:
> $$f_n \xrightarrow{\text{a.e.}} f \implies f_n \xrightarrow{\mu} f$$

> [!prf] Chứng minh
> Để chứng minh dãy hàm hội tụ theo độ đo về $f$ trên $D$, theo đúng định nghĩa, ta cần chỉ ra rằng với mọi số thực $\varepsilon > 0$ cho trước, ta luôn có:
> $$
> \lim_{n \to \infty} \mu\left( \{x \in D : |f_n(x) - f(x)| \ge \varepsilon\} \right) = 0
> $$
> 
> Cố định một số thực $\varepsilon > 0$ bất kỳ. Theo tính chất Archimedes của tập số thực, luôn tồn tại một số nguyên dương $m \in \mathbb{N}^*$ đủ lớn sao cho: $\frac{1}{m} \le \varepsilon$.
> Ta có quan hệ bao hàm giữa hai tập hợp sai số:
> $$
> \left\{ x \in D : |f_n(x) - f(x)| \ge \varepsilon \right\} \subseteq \left\{ x \in D : |f_n(x) - f(x)| \ge \frac{1}{m} \right\}
> $$
> 
> Mặt khác, theo định nghĩa của tập hợp chứa các sai số tích lũy từ thời điểm $n$ trở đi, từ $(1)$ của Hệ quả 6.5:
> $$
> D_n(m) = \bigcup_{k \ge n} \left\{ x \in D : |f_k(x) - f(x)| \ge \frac{1}{m} \right\}
> $$
> Ta rút ra chuỗi quan hệ bao hàm sau:
> $$
> \left\{ x \in D : |f_n(x) - f(x)| \ge \varepsilon \right\} \subseteq \left\{ x \in D : |f_n(x) - f(x)| \ge \frac{1}{m} \right\} \subseteq D_n(m)
> $$
> 
> Áp dụng tính đơn điệu của hàm độ đo không âm $\mu$ lên chuỗi bao hàm ở trên, ta thu được:
> $$
> 0 \le \mu\left( \left\{ x \in D : |f_n(x) - f(x)| \ge \varepsilon \right\} \right) \le \mu(D_n(m))
> $$
> 
> Cho chỉ số $n$ tiến ra vô cùng ($n \to \infty$). Theo kết quả hệ thức $(2)$ Hệ quả 6.5, đại lượng chặn trên triệt tiêu về 0:
> $$
> \lim_{n \to \infty} \mu(D_n(m)) = 0
> $$
> 
> Áp dụng nguyên lý kẹp, ta suy ra:
> $$
> \lim_{n \to \infty} \mu\left( \left\{ x \in D : |f_n(x) - f(x)| \ge \varepsilon \right\} \right) = 0
> $$
> Kết quả này đúng với mọi số thực $\varepsilon > 0$. Đối chiếu với định nghĩa, ta kết luận dãy hàm $(f_n)$ hội tụ theo độ đo về $f$ trên $D$. Chứng minh hoàn tất.

> [!rem] (Chuỗi hệ quan hệ giữa các loại hội tụ)
> Ta có chuỗi suy ra cho dãy hàm đo được trên tập $D$:
> $$\text{Hội tụ đều} \implies \text{Hội tụ điểm} \implies \text{Hội tụ hầu khắp nơi (a.e.)} \xrightarrow{\mu(D) < \infty} \text{Hội tụ theo độ đo}$$
> 
> - Hội tụ đều $\implies$ Hội tụ điểm: Đây là kết quả cơ bản từ giải tích cổ điển.
> - Hội tụ điểm $\implies$ Hội tụ hầu khắp nơi (a.e.): Hiển nhiên từ định nghĩa. Nếu một tính chất đúng tại mọi điểm, thì tập hợp các điểm làm nó sai là tập rỗng $\emptyset$. Vì $\mu(\emptyset) = 0$, tính chất đó đúng hầu khắp nơi.
> - Hội tụ hầu khắp nơi $\implies$ Hội tụ theo độ đo (Khi $\mu(D) < \infty$): Hệ quả 6.5. 
> 
> Lưu ý:
> Mắt xích cuối cùng $(\text{a.e.} \implies \text{hội tụ theo độ đo})$ bắt buộc phải có điều kiện tập nền có độ đo hữu hạn $\mu(D) < \infty$. Nếu $\mu(D) = \infty$, chiều suy ra này sẽ sai do hiện tượng khối lượng trượt ra vô cùng (Escaping mass), ví dụ xét dãy hàm trược $f_n = \chi_{[n, n+1]}$ trên $\mathbb{R}$ (hội tụ điểm về $0$ nhưng không hội tụ theo độ đo về $0$).
> 
> Ta có chuỗi suy ra thứ hai cho hàm đo được trên tập $D$:
> $$\text{Hội tụ đều} \implies \text{Hội tụ gần đều (a.u.)} \implies \text{Hội tụ hầu khắp nơi (a.e.)} \xrightarrow{\mu(D) < \infty} \text{Hội tụ theo độ đo}$$
>
> - Hội tụ gần đều ${} \implies$ Hội tụ hầu khắp: Luôn đúng trên mọi không gian độ đo.
> - Hội tụ hầu khắp nơi ${} \implies$ Hội tụ gần đều: Chỉ đúng khi không gian có độ đo hữu hạn $\mu(D) < \infty$ (đây chính là nội dung của Định lý Egoroff).

> [!thm] (Định lý Riesz: Trích dãy con hội tụ hầu khắp nơi)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và dãy hàm đo được $(f_n)_{n=1}^\infty$.
> Nếu $f_n \xrightarrow{\mu} f$ trên $D$, thì tồn tại một dãy con $(f_{n_k})_{k=1}^\infty$ sao cho:
> $$f_{n_k} \xrightarrow{\text{a.e.}} f \quad \text{trên } D$$

> [!prf] 
> Ký hiệu $g_k = f_{n_k}$. Do $f_n \xrightarrow{\mu} f$, theo định nghĩa hội tụ theo độ đo, với mỗi $k \in \mathbb{N}^*$, ứng với $\varepsilon = \frac{1}{k}$ và $\eta = \frac{1}{2^k}$, ta luôn trích được chỉ số $n_k$ (với $n_1 < n_2 < \dots$) sao cho tập sai số $E_k$ thỏa mãn:
> $$\mu(E_k) \le \frac{1}{2^k} \quad \text{với } E_k := \left\{ x \in D : |g_k(x) - f(x)| > \frac{1}{k} \right\}$$
> 
> **Bước 1: Đánh giá tập điểm hội tụ:**
> Nếu một điểm $x \notin \bigcup_{k=j}^\infty E_k$ (với $j$ cố định), thì $|g_k(x) - f(x)| \le \frac{1}{k}$ với mọi $k \ge j$. 
> Cho $k \to \infty$, ta có $g_k(x) \to f(x)$. Kết quả này đúng với mọi $j \ge 1$, do đó dãy con hội tụ điểm tại mọi nơi nằm ngoài tập limsup:
> $$x \notin \bigcap_{j=1}^\infty \bigcup_{k=j}^\infty E_k = \limsup_{k \to \infty} E_k \implies \lim_{k \to \infty} g_k(x) = f(x)$$
> 
> **Bước 2: Tính độ đo của tập phân kỳ:**
> Tập các điểm phân kỳ là tập con của tập $\limsup_{k \to \infty} E_k$. Với mọi chỉ số $m \ge 1$ cố định, áp dụng tính đơn điệu và $\sigma$-dưới cộng tính của độ đo, ta có chặn trên bằng tổng cấp số nhân:
> $$\mu\left( \limsup_{k \to \infty} E_k \right) \le \mu\left( \bigcup_{k=m}^\infty E_k \right) \le \sum_{k=m}^\infty \mu(E_k) \le \sum_{k=m}^\infty \frac{1}{2^k} = \frac{1}{2^{m-1}}$$
> 
> **Bước 3: Qua giới hạn:**
> Cho $m \to \infty$, đại lượng chặn trên tiến về $0$. Do đó, độ đo của tập phân kỳ bằng 0:
> $$\mu\left( \limsup_{k \to \infty} E_k \right) = 0$$
> 
> Vậy dãy con $f_{n_k} \xrightarrow{\text{a.e.}} f$. Chứng minh hoàn tất.

> [!thm]
> Chứng minh rằng nếu $\mu(E_n) < \infty$ với $n \in \mathbb{N}$ và $\chi_{E_n} \to f$ trong $L^1$ thì $f$ là hàm đặc trưng của một tập đo được  
> (tức là $f$ bằng nhau hầu khắp nơi với hàm đặc trưng của một tập đo được).

> [!prf]  
> Vì $\mu(E_n) < \infty$ nên $\chi_{E_n} \in L^1$. Giả sử $\chi_{E_n} \to f$ trong $L^1$.  
> Khi đó tồn tại một dãy con $\chi_{E_{n_k}}$ hội tụ điểm hầu khắp về $f$. Tức là, tồn tại một tập null $N$ (với $\mu(N) = 0$) sao cho với mọi $x \in X \setminus N$, ta có:
> $$\lim_{k \to \infty} \chi_{E_{n_k}}(x) = f(x)$$  
>  
> Mỗi $\chi_{E_{n_k}}(x) \in \{0,1\}$, nên giới hạn $f(x)$ cũng chỉ có thể thuộc $\{0,1\}$ với mọi $x$ ngoài tập null $N$.  
> Vì $f$ là giới hạn $L^1$ của các hàm đo được $\chi_{E_n}$, nên bản thân $f$ cũng là một hàm đo được (tính chất đóng của hàm đo được qua giới hạn). 
> Ta đặt $E = \{x \in X : f(x) = 1\}$. Vì $f$ đo được, tập mức $E$ chắc chắn là một tập đo được.
> Xét trên miền $X \setminus N$:
> - Tại những điểm $f(x) = 1$, theo định nghĩa của tập $E$, ta có $x \in E \implies \chi_E(x) = 1 = f(x)$.
> - Tại những điểm $f(x) = 0$, ta có $x \notin E \implies \chi_E(x) = 0 = f(x)$.
>   
> Do đó $f$ là hàm đo được và bằng nhau hầu khắp với hàm đặc trưng của tập  
> $$E = \{x \in X : f(x) = 1\}.$$  
>  
> Kết luận: $f = \chi_E$ hầu khắp nơi, tức $f$ là hàm đặc trưng của một tập đo được.


$\xi$



> [!thm] (Định lý 4.16)
> Cho $(X, \mathfrak{A})$ là một không gian đo được và $f, g$ là hai hàm nhận giá trị thực mở rộng $\mathfrak{A}$-đo được trên tập $D \in \mathfrak{A}$. Khi đó các tập hợp sau đây đều thuộc $\mathfrak{A}$:
> 
> (1) $\{x \in D : f(x) = g(x)\}$
> 
> (2) $\{x \in D : f(x) < g(x)\}$
> 
> (3) $\{x \in D : f(x) \le g(x)\}$
> 
> (4) $\{x \in D : f(x) \neq g(x)\}$

> [!thm] (Định lý 4.22)
> Let $(X, \mathfrak{A})$ be a measureable space and let $f_{n}$ be a sequence of extended real-valued $\mathfrak{A}$-measureable on a set $D \in \mathfrak{A}$:
> 
> a) $\min_{n=1,\ldots,N} f_n, \; \max_{n=1,\ldots,N} f_n, \; \inf_{n \in \mathbb{N}} f_n, \; \sup_{n \in \mathbb{N}} f_n$ are $\mathfrak{A}$-measureable on $D$.
> 
> b) $\liminf_{n \in \mathbb{N}} f_n, \; \limsup_{n \in \mathbb{N}} f_n$ are $\mathfrak{A}$-measureable on $D$.
> 
> c) Let $D_{e} = \{ D: \lim_{ n \to \infty }f_{n} \in \overline{\mathbb{R}}\}$. Then $D_{e} \in \mathfrak{A}$ and $\lim_{ n \to \infty }f_{n}$ is $\mathfrak{A}$-measureable on $D_{e}$.

> [!prf]
> Ta sẽ chứng minh ý c)
> Tập $D_{e}$ là tập hợp các nơi mà giới hạn tồn tại trong $\overline{\mathbb{R}}$, theo định nghĩa là tập mà giới hạn trên và giới hạn dưới bằng nhau:
> $$
> D_e = \{x \in D : \liminf_{n \to \infty} f_n(x) = \limsup_{n \to \infty} f_n(x)\}
> $$
> Vì $\liminf f_n$ và $\limsup f_n$ đều là hai hàm đo được (theo b), tập hợp các điểm mà hai hàm đo được có giá trị bằng nhau là một tập đo được (theo Định lý 4.16). Vậy $D_e \in \mathfrak{A}$.
> 
> Vì $\liminf f_n$ là hàm đo được trên toàn bộ $D$, thì nó hiển nhiên cũng đo được trên miền $D_e$. Vậy $\lim f_n$ (${} = \liminf f_{n}= \limsup f_{n} {}$) là hàm đo được trên $D_e$.

> [!thm] (Định lý 4.23)
> Let $(X, \mathfrak{A})$ be a measureable space and let $f_{n}$ be a sequence of extended real-valued $\mathfrak{A}$-measureable fucntions on a set $D \in \mathfrak{A}$. Let:
> 1. ${} D_{e} = \{ x \in D: \lim_{ n \to \infty }f_{n} \in \overline{\mathbb{R}} \} {}$,
> 2. $D_{c} = \{ x \in D: \lim_{ n \to \infty }f_{n} \in \mathbb{R} \}$,
> 3. ${} D_{\infty} = \{ x \in D: \lim_{ n \to \infty }f_{n} = \infty\} {}$,
> 4. $D_{-\infty} = \{ x \in D: \lim_{ n \to \infty }f_{n} = -\infty\}$,
> 5. ${} D_{ne} = \{ x \in D: \lim_{ n \to \infty }f_{n} \text{ does not exist}\} {}$,
> so that $D_{e}$ and $D_{ne}$ are disjoint and $D_{e} \cup D_{ne} = D$, $D_{c}, D_{-\infty}, D_{\infty}$ are disjoint and $D_{c} \cup D_{\infty} \cup D_{-\infty} = D_{e}$. Then $D_{e}, D_{c}, D_{\infty}, D_{-\infty} \in \mathfrak{A}$ and $\lim_{ n \to \infty } f_{n}$ is $\mathfrak{A}$-measureable on each $D_{e}, D_{c}, D_{\infty}$ and $D_{-\infty}$.

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
> Lập luận tương tự:
> 3. Tập $D_{-\infty}$:
> $$
> \{ x \in D: \lim_{ n \to \infty }f_{n} = -\infty\} = \bigcap_{k=1}^{\infty} \{ x \in D_{e} : f(x)< -k\} \in \mathfrak{A}
> $$
> 
> Ta biểu diễn các tập còn lại thành hợp của các tập đo được ta đã chứng minh:
> 
> 1. Tập $D_{c}$:
> 	Ta có $D_{c} = \{ x \in D_{e}: f(x) \in \mathbb{R}\}$, mà giới hạn $f_{n}$ chỉ có thể nhận giá trị số thực, $\infty$ hoặc $-\infty$, nên $D_{c} = D_{e} \setminus (D_{\infty} \cup D_{-\infty}) \}$. Vì $D_{c}, D_{\infty}, D_{-\infty} \in \mathfrak{A}$, nên ta có $D_{c} \in \mathfrak{A}$.
> 2. Tập $D_{ne}$:
> 	Ta có $D_{ne} =\{ x \in D: \lim_{ n \to \infty }f_{n} \text{ không tồn tại}\} = D \setminus D_{e}$. Vì $D \in \mathfrak{A}$ và $D_{e} \in \mathfrak{A}$ nên ta có $D_{ne} \in \mathfrak{A}$.
>    
> Cuối cùng, vì $f = \lim_{n \to \infty} f_n$ được xác định trên $D_e$, nên khi hạn chế $f$ lên các tập con của $D_e$ là $D_c, D_\infty$ và $D_{-\infty}$, ta vẫn thu được một hàm đo được:
 >	Ta có $E \subset D_e$ và $E \in \mathfrak{A}$, thì với mọi $a \in \mathbb{R}$, ta có $\{ x \in E : f(x) > a \} = E \cap \{ x \in D_e : f(x) > a \} \in \mathfrak{A}$. Do đó $f$ đo được trên $E$. Vậy $\lim_{n \to \infty} f_n$ là ${} \mathfrak{A} {}$-đo được trên $D_e, D_c, D_\infty$ và $D_{-\infty}$.

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
> 








$\xi$
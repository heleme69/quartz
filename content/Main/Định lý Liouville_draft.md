
# 1. Định lý Liouville

> [!def] Hàm nguyên (Entire function)
> Một hàm số nhận giá trị phức $f: \mathbb{C} \to \mathbb{C}$ được gọi là **hàm nguyên** (entire function) nếu $f$ khả vi phức (holomorphic) tại mọi điểm $z \in \mathbb{C}$, nghĩa là với mọi $z \in \mathbb{C}$, giới hạn sau luôn tồn tại:
> $$f'(z) = \lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z}$$

> [!thm] Định lý Liouville
> Mọi hàm nguyên và bị chặn trên toàn bộ mặt phẳng phức $\mathbb{C}$ đều là hàm hằng. Tức là, nếu $f: \mathbb{C} \to \mathbb{C}$ là hàm nguyên và tồn tại một hằng số thực $M > 0$ sao cho:
> $$|f(z)| \le M, \quad \forall z \in \mathbb{C}$$
> thì $f(z) = C$ với mọi $z \in \mathbb{C}$, trong đó $C$ là một hằng số phức.

> [!prf] Chứng minh
> Lấy hai điểm phức bất kỳ $a, b \in \mathbb{C}$ với $a \ne b$.
>
> Chọn bán kính $r > 0$ đủ lớn sao cho $r > \max\{|a|, |b|\}$. Xét đường tròn định hướng dương $\gamma_r$ có phương trình $|z| = r$. Vì $f$ là hàm nguyên, $f$ giải tích trên và bên trong đường tròn $\gamma_r$.
>
> Theo công thức tích phân Cauchy cho các điểm bên trong đường tròn, ta có biểu diễn tích phân của $f(a)$ và $f(b)$:
> $$f(a) = \frac{1}{2\pi i} \oint_{|z|=r} \frac{f(z)}{z - a} \, dz$$
> $$f(b) = \frac{1}{2\pi i} \oint_{|z|=r} \frac{f(z)}{z - b} \, dz$$
>
> Lấy hiệu giữa hai giá trị này:
> $$f(a) - f(b) = \frac{1}{2\pi i} \oint_{|z|=r} f(z) \left( \frac{1}{z - a} - \frac{1}{z - b} \right) dz$$
> Quy đồng mẫu số của biểu thức trong dấu ngoặc:
> $$\frac{1}{z - a} - \frac{1}{z - b} = \frac{(z - b) - (z - a)}{(z - a)(z - b)} = \frac{a - b}{(z - a)(z - b)}$$
>
> Thay vào tích phân, ta được:
> $$f(a) - f(b) = \frac{a - b}{2\pi i} \oint_{|z|=r} \frac{f(z)}{(z - a)(z - b)} \, dz$$
>
> Tiếp theo, ta tiến hành đánh giá độ lớn của vế phải bằng bất đẳng thức tích phân cơ bản (ML-inequality):
> $$|f(a) - f(b)| \le \frac{|a - b|}{2\pi} \oint_{|z|=r} \frac{|f(z)|}{|z - a| \cdot |z - b|} \, |dz|$$
>
> Với mọi điểm $z$ nằm trên đường tròn $|z| = r$, ta có:
> - Giả thiết hàm bị chặn: $|f(z)| \le M$.
> - Bất đẳng thức tam giác ngược cho mẫu số:
>   $$|z - a| \ge |z| - |a| = r - |a|$$
>   $$|z - b| \ge |z| - |b| = r - |b|$$
>
> Do $r > \max\{|a|, |b|\}$, cả hai đại lượng $r - |a|$ và $r - |b|$ đều mang giá trị dương. Do đó:
> $$\frac{|f(z)|}{|z - a| \cdot |z - b|} \le \frac{M}{(r - |a|)(r - |b|)}, \quad \forall |z| = r$$
>
> Chiều dài cung của đường tròn $\gamma_r$ là $L = 2\pi r$. Từ đó, đánh giá tích phân cho ta:
> $$|f(a) - f(b)| \le \frac{|a - b|}{2\pi} \cdot \frac{M}{(r - |a|)(r - |b|)} \cdot 2\pi r = \frac{|a - b| \cdot M \cdot r}{(r - |a|)(r - |b|)}$$
>
> Bất đẳng thức trên đúng với mọi giá trị của bán kính $r$ thỏa mãn $r > \max\{|a|, |b|\}$. Ta cho bán kính $r$ tiến ra vô cùng ($r \to \infty$):
> $$\lim_{r \to \infty} \frac{|a - b| \cdot M \cdot r}{(r - |a|)(r - |b|)} = \lim_{r \to \infty} \frac{|a - b| \cdot M}{r \left(1 - \frac{|a|}{r}\right)\left(1 - \frac{|b|}{r}\right)} = 0$$
>
> Do đó, ta suy ra:
> $$|f(a) - f(b)| = 0 \implies f(a) = f(b)$$
>
> Vì $a$ và $b$ được chọn tùy ý trên mặt phẳng phức $\mathbb{C}$, suy ra $f(z)$ nhận cùng một giá trị cố định tại mọi điểm $z \in \mathbb{C}$. Hay nói cách khác, $f$ là một hàm hằng.

> [!thm] Hệ quả của Định lý Liouville
> Nếu $f: \mathbb{C} \to \mathbb{C}$ là một hàm nguyên thỏa mãn điều kiện triệt tiêu ở vô cùng:
> $$\lim_{|z| \to \infty} f(z) = 0$$
> thì $f(z) = 0$ với mọi $z \in \mathbb{C}$ (nghĩa là $f$ đồng nhất bằng 0).

> [!prf] Chứng minh
> Vì $\lim_{|z| \to \infty} f(z) = 0$, theo định nghĩa giới hạn, ứng với $\varepsilon = 1$, tồn tại một bán kính $R > 0$ sao cho:
> $$|f(z)| < 1, \quad \forall |z| > R$$
> Mặt khác, trên hình đĩa đóng $\overline{\mathbb{D}}_R = \{z \in \mathbb{C} : |z| \le R\}$, tập này là compact và hàm $f$ khả vi nên liên tục trên $\overline{\mathbb{D}}_R$. Theo định lý Weierstrass về giá trị cực trị, $|f(z)|$ đạt giá trị lớn nhất trên tập compact này, tức là tồn tại $M_0 < \infty$ sao cho:
> $$|f(z)| \le M_0, \quad \forall |z| \le R$$
> Đặt $M = \max\{1, M_0\}$, ta có $|f(z)| \le M$ với mọi $z \in \mathbb{C}$. Như vậy $f$ là hàm nguyên và bị chặn trên toàn bộ $\mathbb{C}$.
>
> Áp dụng định lý Liouville, $f$ phải là hàm hằng: $f(z) = C$ với mọi $z \in \mathbb{C}$.
>
> Tuy nhiên, kết hợp với giả thiết giới hạn ban đầu:
> $$C = \lim_{|z| \to \infty} f(z) = 0$$
> Suy ra $C = 0$, nghĩa là $f(z) = 0$ với mọi $z \in \mathbb{C}$.

# 2. Định lý Cơ bản của Đại số

> [!thm] Định lý Cơ bản của Đại số (Fundamental Theorem of Algebra)
> Mọi đa thức không thuần nhất (khác hằng số) với hệ số phức:
> $$p(z) = a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0 \quad (a_n \ne 0, n \ge 1)$$
> đều có ít nhất một nghiệm trong tập số phức $\mathbb{C}$.

> [!prf] Chứng minh
> Ta chứng minh bằng phương pháp phản chứng.
>
> Giả sử đa thức $p(z)$ không có bất kỳ nghiệm phức nào, tức là $p(z) \ne 0$ với mọi $z \in \mathbb{C}$.
>
> Khi đó, ta có thể xây dựng một hàm số hữu tỉ $f: \mathbb{C} \to \mathbb{C}$ xác định bởi nghịch đảo của $p(z)$:
> $$f(z) = \frac{1}{p(z)}$$
>
> Vì $p(z)$ là một đa thức, nó khả vi phức tại mọi điểm trên $\mathbb{C}$. Do mẫu số $p(z) \ne 0$ với mọi $z \in \mathbb{C}$, phép nghịch đảo bảo toàn tính khả vi phức, suy ra hàm $f(z)$ là hàm nguyên trên $\mathbb{C}$.
>
> Xét hành vi của đa thức $p(z)$ khi $|z| \to \infty$. Đặt thừa số bậc cao nhất $a_n z^n$ ra ngoài:
> $$p(z) = a_n z^n \left( 1 + \frac{a_{n-1}}{a_n z} + \frac{a_{n-2}}{a_n z^2} + \dots + \frac{a_0}{a_n z^n} \right)$$
>
> Với mọi $k \in \{1, 2, \dots, n\}$, khi $|z| \to \infty$ ta có $\frac{a_{n-k}}{a_n z^k} \to 0$. Do đó:
> $$\lim_{|z| \to \infty} \left( 1 + \frac{a_{n-1}}{a_n z} + \dots + \frac{a_0}{a_n z^n} \right) = 1$$
> Vì $n \ge 1$ và $a_n \ne 0$, ta có $|a_n z^n| = |a_n| |z|^n \to \infty$ khi $|z| \to \infty$. Suy ra:
> $$\lim_{|z| \to \infty} |p(z)| = \infty$$
>
> Từ đây, ta suy ra giới hạn của hàm $f(z)$ tại vô cùng:
> $$\lim_{|z| \to \infty} f(z) = \lim_{|z| \to \infty} \frac{1}{p(z)} = 0$$
>
> Áp dụng Hệ quả của định lý Liouville cho hàm nguyên $f(z)$, điều kiện triệt tiêu tại vô cùng dẫn đến kết luận:
> $$f(z) = 0, \quad \forall z \in \mathbb{C}$$
>
> Tuy nhiên, theo định nghĩa của $f(z)$, ta luôn có tích:
> $$f(z) p(z) = \frac{1}{p(z)} \cdot p(z) = 1, \quad \forall z \in \mathbb{C}$$
> Điều này dẫn đến mâu thuẫn hiển nhiên: $0 \cdot p(z) = 1$.
>
> Do đó, điều giả sử ban đầu là sai. Vậy đa thức $p(z)$ phải có ít nhất một nghiệm phức trong $\mathbb{C}$.

# 3. Sự Tồn tại của Trị riêng trong Không gian Hữu hạn Chiều

> [!def] Trị riêng và Phổ của ma trận
> Cho $A \in M_n(\mathbb{C})$ là một ma trận vuông cấp $n$ với các phần tử phức (tương ứng với một toán tử tuyến tính trên không gian hữu hạn chiều $\mathbb{C}^n$).
> - Một số phức $\lambda \in \mathbb{C}$ được gọi là một **trị riêng** (eigenvalue) của $A$ nếu tồn tại một vector khác không $v \in \mathbb{C}^n \setminus \{0\}$ sao cho:
>   $$Av = \lambda v$$
> - **Phổ** (spectrum) của ma trận $A$, ký hiệu là $\sigma(A)$, là tập hợp tất cả các số phức $\lambda \in \mathbb{C}$ sao cho toán tử $(A - \lambda I_n)$ không khả nghịch:
>   $$\sigma(A) = \{\lambda \in \mathbb{C} : \det(A - \lambda I_n) = 0\}$$

> [!thm] Sự tồn tại trị riêng của ma trận phức
> Mọi ma trận vuông $A \in M_n(\mathbb{C})$ với $n \ge 1$ đều có ít nhất một trị riêng phức. Tức là phổ của nó luôn khác rỗng:
> $$\sigma(A) \ne \emptyset$$

> [!prf] Chứng minh
> Phương trình vector riêng $Av = \lambda v$ có thể biến đổi thành hệ phương trình tuyến tính thuần nhất:
> $$(A - \lambda I_n)v = 0$$
> trong đó $I_n$ là ma trận đơn vị cấp $n$.
>
> Theo định lý cơ bản của đại số tuyến tính trên không gian hữu hạn chiều, hệ phương trình trên có nghiệm không tầm thường $v \ne 0$ khi và chỉ khi ma trận hệ số suy biến, tức là:
> $$\det(A - \lambda I_n) = 0$$
>
> Định thức $p_A(\lambda) = \det(\lambda I_n - A)$ (hoặc $(-1)^n \det(A - \lambda I_n)$) là một đa thức theo biến $\lambda$, được gọi là **đa thức đặc trưng** của ma trận $A$.
>
> Dựa vào công thức khai triển Leibniz của định thức:
> $$p_A(\lambda) = \det(\lambda I_n - A) = \lambda^n - \operatorname{tr}(A)\lambda^{n-1} + \dots + (-1)^n \det(A)$$
> Đây là một đa thức đơn khởi bậc $n \ge 1$ với các hệ số phức.
>
> Áp dụng Định lý Cơ bản của Đại số (vốn được chứng minh bằng định lý Liouville ở mục trước), mọi đa thức bậc $n \ge 1$ đều có ít nhất một nghiệm trong trường số phức $\mathbb{C}$. Do đó, tồn tại một giá trị $\lambda_0 \in \mathbb{C}$ sao cho:
> $$p_A(\lambda_0) = 0 \iff \det(A - \lambda_0 I_n) = 0$$
>
> Khi đó, không gian hạch (kernel) $\ker(A - \lambda_0 I_n)$ có số chiều $\ge 1$. Nghĩa là tồn tại vector $v_0 \in \mathbb{C}^n$, $v_0 \ne 0$ thỏa mãn:
> $$(A - \lambda_0 I_n)v_0 = 0 \iff Av_0 = \lambda_0 v_0$$
>
> Như vậy, $\lambda_0$ chính là một trị riêng của $A$, và $\sigma(A) \ne \emptyset$.

# 4. Ứng dụng trong Giải tích Hàm: Tính Khác Rỗng của Phổ Toán tử Bị chặn

Trong không gian vector vô hạn chiều, một toán tử có thể đơn ánh nhưng không toàn ánh, dẫn đến việc không có bất kỳ vector riêng nào. Khái niệm phổ được mở rộng để nghiên cứu khả năng nghịch đảo của toán tử.

> [!def] Toán tử tuyến tính bị chặn và Phổ
> Cho $X$ là một không gian Banach trên trường số phức $\mathbb{C}$ và $\mathcal{B}(X)$ là không gian các toán tử tuyến tính bị chặn từ $X$ vào chính nó, trang bị chuẩn toán tử:
> $$\|T\| = \sup_{\|x\|_X \le 1} \|Tx\|_X$$
>
> Cho $T \in \mathcal{B}(X)$:
> - Tập **chính quy** (resolvent set) của $T$, ký hiệu là $\rho(T)$, là tập hợp các số phức $\lambda \in \mathbb{C}$ sao cho toán tử $(\lambda I - T)$ là một song ánh khả nghịch hai chiều và có nghịch đảo bị chặn:
>   $$R(\lambda, T) = (\lambda I - T)^{-1} \in \mathcal{B}(X)$$
>   Toán tử $R(\lambda, T)$ được gọi là **toán tử giải thức** (resolvent operator).
> - **Phổ** (spectrum) của toán tử $T$, ký hiệu là $\sigma(T)$, là phần bù của tập chính quy trong $\mathbb{C}$:
>   $$\sigma(T) = \mathbb{C} \setminus \rho(T) = \{\lambda \in \mathbb{C} : (\lambda I - T) \text{ không khả nghịch trong } \mathcal{B}(X)\}$$

> [!def] Hàm giải tích nhận giá trị trong không gian Banach
> Cho $\Omega \subset \mathbb{C}$ là một tập mở và $Y$ là một không gian Banach. Một hàm $F: \Omega \to Y$ được gọi là **chỉnh hình** (holomorphic) trên $\Omega$ nếu với mọi $z_0 \in \Omega$, giới hạn sau tồn tại theo chuẩn của $Y$:
> $$F'(z_0) = \lim_{z \to z_0} \frac{F(z) - F(z_0)}{z - z_0}$$

> [!thm] Định lý Liouville cho hàm nhận giá trị toán tử (Banach-valued Liouville Theorem)
> Cho $Y$ là một không gian Banach và $F: \mathbb{C} \to Y$ là một hàm nguyên. Nếu $F$ bị chặn theo chuẩn, tức là tồn tại $M > 0$ sao cho:
> $$\|F(z)\|_Y \le M, \quad \forall z \in \mathbb{C}$$
> thì $F$ là một hàm hằng trên $\mathbb{C}$.

> [!prf] Chứng minh
> Ta đưa bài toán từ không gian Banach về giải tích phức vô hướng thông qua các phiếm hàm tuyến tính liên tục.
>
> Gọi $Y^*$ là không gian đối ngẫu topo của $Y$ (tập hợp tất cả các phiếm hàm tuyến tính bị chặn $\varphi: Y \to \mathbb{C}$).
>
> Với mỗi phiếm hàm cố định $\varphi \in Y^*$, xét hàm phức vô hướng:
> $$g_\varphi: \mathbb{C} \to \mathbb{C}, \quad g_\varphi(z) = \varphi(F(z))$$
>
> Ta kiểm tra tính khả vi phức của $g_\varphi(z)$. Lấy $z_0 \in \mathbb{C}$ tùy ý:
> $$\lim_{z \to z_0} \frac{g_\varphi(z) - g_\varphi(z_0)}{z - z_0} = \lim_{z \to z_0} \varphi\left( \frac{F(z) - F(z_0)}{z - z_0} \right)$$
> Do $\varphi$ là phiếm hàm tuyến tính liên tục, nó giao hoán được với phép lấy giới hạn:
> $$\lim_{z \to z_0} \varphi\left( \frac{F(z) - F(z_0)}{z - z_0} \right) = \varphi\left( \lim_{z \to z_0} \frac{F(z) - F(z_0)}{z - z_0} \right) = \varphi(F'(z_0))$$
> Vì giới hạn này tồn tại với mọi $z_0 \in \mathbb{C}$, $g_\varphi$ là một hàm nguyên vô hướng.
>
> Đồng thời, ta đánh giá độ lớn của $g_\varphi(z)$ thông qua chuẩn của $\varphi$:
> $$|g_\varphi(z)| = |\varphi(F(z))| \le \|\varphi\|_{Y^*} \|F(z)\|_Y \le \|\varphi\|_{Y^*} \cdot M$$
> Do đó, $g_\varphi$ là một hàm nguyên và bị chặn trên toàn bộ mặt phẳng phức $\mathbb{C}$.
>
> Áp dụng Định lý Liouville cổ điển cho hàm vô hướng $g_\varphi$, ta kết luận $g_\varphi$ phải là hàm hằng. Tức là với mọi $z \in \mathbb{C}$:
> $$g_\varphi(z) = g_\varphi(0) \implies \varphi(F(z) - F(0)) = 0$$
>
> Đẳng thức này đúng với mọi phiếm hàm $\varphi \in Y^*$. Theo Hệ quả của Định lý Hahn-Banach (hệ quả phân tách điểm), nếu một vector $u \in Y$ thỏa mãn $\varphi(u) = 0$ với mọi $\varphi \in Y^*$ thì bắt buộc $u = 0$.
>
> Do đó:
> $$F(z) - F(0) = 0 \implies F(z) = F(0), \quad \forall z \in \mathbb{C}$$
> Điều này chứng minh $F$ là hàm hằng trên toàn bộ $\mathbb{C}$.

> [!thm] Tính khác rỗng của phổ toán tử bị chặn (Gelfand)
> Cho $X$ là một không gian Banach phức khác $\{0\}$ và $T \in \mathcal{B}(X)$ là một toán tử tuyến tính bị chặn. Khi đó, phổ của toán tử $T$ luôn luôn khác rỗng:
> $$\sigma(T) \ne \emptyset$$

> [!prf] Chứng minh
> Ta chứng minh bằng phương pháp phản chứng sử dụng định lý Liouville nhận giá trị toán tử.
>
> Giả sử ngược lại rằng phổ của $T$ là tập rỗng, tức là $\sigma(T) = \emptyset$.
> Khi đó tập chính quy là toàn bộ mặt phẳng phức: $\rho(T) = \mathbb{C}$.
>
> Điều này có nghĩa là với mọi $z \in \mathbb{C}$, toán tử giải thức sau luôn tồn tại và bị chặn:
> $$R(z) = (zI - T)^{-1} \in \mathcal{B}(X)$$
>
> Xét hàm toán tử $R: \mathbb{C} \to \mathcal{B}(X)$ xác định bởi $R(z) = (zI - T)^{-1}$. Ta kiểm tra hai tính chất:
>
> **Bước 1: Chứng minh hàm toán tử $R(z)$ là hàm nguyên**
>
> Lấy hai điểm phức tùy ý $z, z_0 \in \mathbb{C}$ với $z \ne z_0$. Sử dụng đồng nhất thức resolvent cơ bản:
> $$R(z) - R(z_0) = (zI - T)^{-1} - (z_0I - T)^{-1}$$
> Đặt thừa số chung:
> $$R(z) - R(z_0) = (zI - T)^{-1} \Big[ (z_0I - T) - (zI - T) \Big] (z_0I - T)^{-1} = -(z - z_0) R(z) R(z_0)$$
>
> Chia cả hai vế cho $(z - z_0)$, ta có:
> $$\frac{R(z) - R(z_0)}{z - z_0} = - R(z) R(z_0)$$
>
> Vì ánh xạ nghịch đảo trong đại số Banach là liên tục, khi $z \to z_0$, ta có $R(z) \to R(z_0)$ theo chuẩn toán tử của $\mathcal{B}(X)$. Do đó:
> $$\lim_{z \to z_0} \frac{R(z) - R(z_0)}{z - z_0} = - \lim_{z \to z_0} [R(z) R(z_0)] = - [R(z_0)]^2 = -(z_0I - T)^{-2}$$
>
> Giới hạn này tồn tại theo chuẩn của $\mathcal{B}(X)$ với mọi $z_0 \in \mathbb{C}$. Do đó, ánh xạ $R(z)$ là một hàm nguyên nhận giá trị trong không gian Banach $\mathcal{B}(X)$.
>
> **Bước 2: Đánh giá độ lớn của $R(z)$ khi $|z| \to \infty$**
>
> Với $z \in \mathbb{C}$ thỏa mãn $|z| > \|T\|$, ta có thể đặt nhân tử $z$ ra ngoài:
> $$zI - T = z \left( I - \frac{T}{z} \right)$$
> Vì $\left\|\frac{T}{z}\right\| = \frac{\|T\|}{|z|} < 1$, theo lý thuyết chuỗi Neumann, toán tử $\left( I - \frac{T}{z} \right)$ khả nghịch và nghịch đảo của nó được biểu diễn dưới dạng chuỗi hội tụ theo chuẩn:
> $$\left( I - \frac{T}{z} \right)^{-1} = \sum_{n=0}^{\infty} \left( \frac{T}{z} \right)^n = I + \frac{T}{z} + \frac{T^2}{z^2} + \dots$$
>
> Do đó, toán tử giải thức có dạng:
> $$R(z) = \frac{1}{z} \left( I - \frac{T}{z} \right)^{-1} = \frac{1}{z} \sum_{n=0}^{\infty} \frac{T^n}{z^n}$$
>
> Đánh giá chuẩn của toán tử $R(z)$:
> $$\|R(z)\|_{\mathcal{B}(X)} \le \frac{1}{|z|} \sum_{n=0}^{\infty} \left( \frac{\|T\|}{|z|} \right)^n = \frac{1}{|z|} \cdot \frac{1}{1 - \frac{\|T\|}{|z|}} = \frac{1}{|z| - \|T\|}$$
>
> Khi cho $|z| \to \infty$, ta nhận được:
> $$\lim_{|z| \to \infty} \|R(z)\|_{\mathcal{B}(X)} \le \lim_{|z| \to \infty} \frac{1}{|z| - \|T\|} = 0$$
>
> **Bước 3: Suy ra mâu thuẫn từ Định lý Liouville**
>
> Vì $\lim_{|z| \to \infty} \|R(z)\|_{\mathcal{B}(X)} = 0$, tồn tại hằng số $M > 0$ sao cho $\|R(z)\|_{\mathcal{B}(X)} \le M$ với mọi $z \in \mathbb{C}$.
>
> Áp dụng định lý Liouville cho hàm nguyên nhận giá trị trong không gian Banach $\mathcal{B}(X)$, ta suy ra hàm $R(z)$ phải là hàm hằng.
>
> Kết hợp với điều kiện $\lim_{|z| \to \infty} \|R(z)\|_{\mathcal{B}(X)} = 0$, hàm hằng này bắt buộc phải là toán tử không:
> $$R(z) = 0 \in \mathcal{B}(X), \quad \forall z \in \mathbb{C}$$
>
> Tuy nhiên, theo định nghĩa của toán tử nghịch đảo giải thức:
> $$R(z)(zI - T) = I \in \mathcal{B}(X), \quad \forall z \in \mathbb{C}$$
> Thay $R(z) = 0$ vào, ta được:
> $$0 \cdot (zI - T) = 0 = I$$
>
> Nhưng vì không gian $X \ne \{0\}$, toán tử đồng nhất $I$ có chuẩn $\|I\| = 1 \ne 0$, dẫn đến mâu thuẫn hiển nhiên $0 = 1$.
>
> Mâu thuẫn này chứng tỏ giả thiết $\sigma(T) = \emptyset$ là sai. Vậy với mọi không gian Banach phức $X \ne \{0\}$ và mọi toán tử tuyến tính bị chặn $T \in \mathcal{B}(X)$, ta luôn có:
> $$\sigma(T) \ne \emptyset$$

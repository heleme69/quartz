# Định lý Hahn-Banach: Từ Trực giác Hình học đến Đại số Tuyến tính

## 1. Góc nhìn Hình học: Tập lồi và Siêu phẳng tách

Trong không gian hai chiều $\mathbb{R}^2$ hoặc ba chiều $\mathbb{R}^3$, trực giác trực quan cho thấy nếu ta có hai tập hợp lồi không giao nhau, ta luôn có thể đặt một đường thẳng hoặc một mặt phẳng chèn vào giữa để ngăn cách chúng. Khi mở rộng sang không gian định chuẩn tổng quát (có thể vô hạn chiều), khái niệm đường thẳng hay mặt phẳng được tổng quát hóa thành siêu phẳng.

- **Tập lồi:** Trong một không gian vectơ trên trường $\mathbb{F}$, một tập $C$ được gọi là tập lồi nếu với mọi $x, y \in C$, đoạn thẳng nối chúng cũng nằm trọn trong $C$, tức là:
$$\{(1-t)x + ty \mid t \in [0,1]\} \subset C$$

- **Siêu phẳng (Affine hyperplane):** Nếu $f$ là một phiếm hàm tuyến tính liên tục trên không gian định chuẩn $X$ trên trường số thực, không triệt tiêu tại mọi điểm, và $\alpha$ là một số thực, thì tập hợp sau được gọi là một siêu phẳng:
$$f^{-1}(\{\alpha\}) = \{x \in X \mid f(x) = \alpha\}$$
Siêu phẳng đóng khi và chỉ khi phiếm hàm tuyến tính định nghĩa nó liên tục ($f \in X^*$).

> [!thm] Định lý (Dạng hình học của Định lý Hahn-Banach)
> Cho $A$ và $B$ là hai tập lồi không rỗng rời nhau trong không gian định chuẩn $X$ trên trường số thực, ít nhất một trong hai tập là mở. Khi đó, tồn tại một siêu phẳng đóng $f^{-1}(\{\alpha\})$ tách $A$ và $B$. Nói cách khác, tồn tại $f \in X^*$ và $\alpha \in \mathbb{R}$ sao cho:
> $$f(x) \le \alpha \le f(y) \quad \forall x \in A, \forall y \in B$$

Để giải quyết bài toán tìm siêu phẳng phân tách này bằng các công cụ đại số, ta cần xây dựng các bổ đề đóng vai trò chuyển đổi đặc tính hình học (tập lồi) sang đặc tính giải tích (phiếm hàm).

> [!thm] Bổ đề 1 (Phiếm hàm Minkowski / Nửa chuẩn Gauge)
> Trong không gian định chuẩn $E$, cho $C$ là tập lồi, mở với $0 \in C$. Với mỗi $x \in E$, ta định nghĩa:
> $$p(x) = \inf\{\alpha > 0 \mid \alpha^{-1}x \in C\}$$
> Khi đó, phiếm hàm $p$ thỏa mãn các tính chất sau:
> - (a) $p(\lambda x) = \lambda p(x)$ với mọi $x \in E$ và với mọi $\lambda > 0$.
> - (b) $p(x+y) \le p(x) + p(y)$ với mọi $x, y \in E$.
> - (c) Tồn tại hằng số $M > 0$ sao cho $0 \le p(x) \le M\|x\|$ với mọi $x \in E$.
> - (d) $x \in C \Leftrightarrow p(x) < 1$.

> [!thm] Bổ đề 2
> Trong không gian định chuẩn $E$, cho $C \subsetneq E$ là một tập lồi, không rỗng, mở và $x_0 \in E \setminus C$. Khi đó, tồn tại phiếm hàm tuyến tính $f \in E^*$ sao cho $f(x) < f(x_0)$ với mọi $x \in C$. Nói cách khác, tồn tại một siêu phẳng $f^{-1}(\{\alpha\})$ tách $\{x_0\}$ và $C$.

## 2. Chuyển dịch sang Đại số: Bài toán Mở rộng Phiếm hàm

Góc nhìn hình học về việc tìm một siêu phẳng tựa hoặc siêu phẳng phân tách quy tụ về việc tìm một phiếm hàm tuyến tính liên tục thỏa mãn các điều kiện biên. Điều này dẫn dắt chúng ta đến bài toán cốt lõi của đại số giải tích: Nếu đã có một phiếm hàm hợp lệ trên một không gian con, liệu ta có thể mở rộng nó ra toàn bộ không gian lớn mà vẫn giữ nguyên được các đặc tính liên tục và tính bị chặn (chuẩn) của nó hay không?

### 2.1. Thu hẹp và mở rộng trên không gian con trù mật

Trước khi xét trường hợp tổng quát, ta nghiên cứu tính chất của toán tử thu hẹp và bài toán mở rộng trên không gian con dày đặc (trù mật).

> [!thm] Dẫn nhập 1 (Ánh xạ thu hẹp)
> Nếu $F$ là không gian định chuẩn con của $E$ và $T$ là một ánh xạ tuyến tính liên tục trên $E$ thì thu hẹp $T|_F$ cũng tuyến tính liên tục và $\|T|_F\| \le \|T\|$.

> [!prf] Chứng minh Dẫn nhập 1
> - **Tính tuyến tính:** Cho $x, y \in F$ và $\alpha \in \mathbb{F}$ bất kỳ. Vì $F$ là không gian con của $E$, nên $x+y \in F$ và $\alpha x \in F$. Tính tuyến tính của ánh xạ $T$ trên $E \supset F$ cho:
> $$T|_F(x) + T|_F(y) = Tx + Ty = T(x+y) = T|_F(x+y)$$
> $$\alpha T|_F(x) = \alpha Tx = T(\alpha x) = T|_F(\alpha x)$$
> Do đó $T|_F$ cũng là một ánh xạ tuyến tính.
> - **Tính liên tục và ước tính chuẩn:** Để thấy ánh xạ $T|_F$ bị chặn, với mọi $x \in F \subset E$ ta ước tính:
> $$\|T|_F(x)\| = \|Tx\| \le M\|x\|_E = M\|x\|_F$$
> Suy ra $T|_F$ là ánh xạ tuyến tính liên tục (thu hẹp của một ánh xạ liên tục xuống một không gian mêtríc con là một ánh xạ liên tục). Để tính chuẩn, ta có:
> $$\|T|_F\| = \sup_{\|x\|_F < 1} \|T|_F(x)\| = \sup_{\|x\|_F < 1} \|Tx\| \le \sup_{\|x\|_E < 1} \|Tx\| = \|T\|$$
> Đẳng thức chuẩn được chứng minh.

> [!thm] Dẫn nhập 2 (Mở rộng trên không gian con trù mật)
> Cho $M$ là một không gian vectơ con dày đặc trong một không gian định chuẩn $E$, và $T$ là một phiếm hàm tuyến tính liên tục trên $M$. Chứng minh có duy nhất một phiếm hàm tuyến tính liên tục $S$ trên $E$ sao cho $S(x) = T(x)$ với mọi $x \in M$, và mở rộng này bảo toàn chuẩn, nghĩa là $\|T\| = \|S\|$.

> [!prf] Chứng minh Dẫn nhập 2
> - **Sự tồn tại:** Với mọi $x \in E$, vì không gian $M$ là dày đặc trong $E$ nên tồn tại dãy $(x_n) \subset M$ sao cho $x_n \to x$. Xét dãy ảnh $(Tx_n)_{n \in \mathbb{Z}^+}$, với mọi $m, n \in \mathbb{Z}^+$, ta có:
> $$\|Tx_m - Tx_n\| = \|T(x_m - x_n)\| \le \|T\|\|x_m - x_n\|$$
> Dãy $(x_n)$ hội tụ nên là dãy Cauchy trong $M$, dẫn tới dãy số $(Tx_n)$ cũng là một dãy Cauchy trong trường $\mathbb{F}$. Trường $\mathbb{F}$ ($\mathbb{R}$ hoặc $\mathbb{C}$) là một không gian đầy đủ, nên dãy $(Tx_n)$ hội tụ về một giới hạn trong $\mathbb{F}$. Ta đặt ánh xạ $S: E \to \mathbb{F}$ với:
> $$Sx = \lim_{n \to \infty} Tx_n \quad \forall x \in E$$
> Ta kiểm tra tính xác định duy nhất (định nghĩa tốt) của $S$: Nếu tồn tại một dãy khác $(y_n) \subset M$ cũng hội tụ về $x$, ta có:
> $$\lim_{n \to \infty} (Ty_n - Tx_n) = \lim_{n \to \infty} T(y_n - x_n) = T\left(\lim_{n \to \infty} (y_n - x_n)\right) = T0 = 0$$
> Do đó $\lim_{n \to \infty} Ty_n = \lim_{n \to \infty} Tx_n$, ánh xạ $S$ được định nghĩa tốt.
> - **Tính tuyến tính và liên tục của $S$:** Từ tính tuyến tính của $T$ và giới hạn, ta dễ dàng suy ra $S$ là một phiếm hàm tuyến tính. Để thấy $S$ bị chặn, ta ước tính với mọi $x \in E$:
> $$\|Sx\| = \|\lim_{n \to \infty} Tx_n\| = \lim_{n \to \infty} \|Tx_n\| \le \lim_{n \to \infty} \|T\|\|x_n\| = \|T\|\|x\|$$
> Như vậy, $S$ là một phiếm hàm tuyến tính liên tục rộng từ $M$ lên $E$. Ước tính trên cho ta $\|S\| \le \|T\|$. Kết hợp với kết quả từ Dẫn nhập 1 ($\|T\| = \|S|_M\| \le \|S\|$), ta thu được $\|S\| = \|T\|$.
> - **Tính duy nhất:** Giả sử tồn tại phiếm hàm tuyến tính liên tục $\tilde{S}$ trên $E$ sao cho $\tilde{S}|_M = T$. Đặt $f = S - \tilde{S}$, đây là một phiếm hàm tuyến tính liên tục trên $E$ và triệt tiêu trên $M$. Vì $M$ trù mật trong $E$ nên với mọi $x \in E$, ta chọn dãy $(x_n) \subset M$ sao cho $x_n \to x$. Khi đó:
> $$f(x) = f\left(\lim_{n \to \infty} x_n\right) = \lim_{n \to \infty} f(x_n) = \lim_{n \to \infty} (S(x_n) - \tilde{S}(x_n)) = \lim_{n \to \infty} 0 = 0$$
> Do đó $f \equiv 0$, nghĩa là $S \equiv \tilde{S}$. Mở rộng là duy nhất.

### 2.2. Đặt vấn đề cho không gian con bất kỳ

Từ các kết quả trên, ta thấy khi $M$ trù mật, bài toán mở rộng được giải quyết trọn vẹn bằng giới hạn dãy. Câu hỏi đặt ra là: Nếu $M$ không phải là không gian con trù mật, thì có tồn tại hay không một mở rộng phiếm hàm tuyến tính liên tục và bảo toàn chuẩn? Bản thân việc mở rộng này có còn duy nhất hay không? Định lý Hahn-Banach chính là câu trả lời tổng quát cho vấn đề này.

## 3. Định lý Hahn-Banach (Dạng Đại số)

Một cách ngắn gọn, định lý khẳng định rằng một phiếm hàm tuyến tính liên tục trên một không gian con bất kỳ luôn có thể được mở rộng lên toàn bộ không gian mà chuẩn không bị thay đổi. Khi mở rộng ánh xạ tuyến tính liên tục thì chuẩn không thể giảm, vì vậy việc giữ nguyên được chuẩn là nội dung cốt lõi cấu thành giá trị của định lý.

> [!thm] Định lý (Định lý Hahn-Banach)
> Cho $M$ là một không gian con của không gian định chuẩn $E$ trên trường $\mathbb{F} = \mathbb{R}$ hoặc $\mathbb{F} = \mathbb{C}$. Mọi phiếm hàm tuyến tính liên tục $T$ trên $M$ đều mở rộng được thành một phiếm hàm tuyến tính liên tục $\tilde{T}$ trên $E$ sao cho $\|\tilde{T}\| = \|T\|$. Phiếm hàm mở rộng này nói chung không duy nhất.

Để chứng minh định lý trên cấu trúc vô hạn chiều, ta cần sử dụng cấu trúc sắp thứ tự và Bổ đề Zorn để thực hiện quá trình quy nạp siêu hạng.

> [!thm] Khái niệm (Quan hệ thứ tự và Bổ đề Zorn)
> - **Quan hệ thứ tự:** Một thứ tự trên tập $S$ là một tập khác rỗng các cặp $(a, b)$ với $a, b \in S$ (ký hiệu $a \le b$) thỏa mãn tính chất phản xạ ($a \le a$), phản đối xứng (nếu $a \le b$ và $b \le a$ thì $a = b$), và bắc cầu (nếu $a \le b$ và $b \le c$ thì $a \le c$). 
> - **Thứ tự toàn phần:** Nếu hai phần tử bất kỳ trong tập hợp đều so sánh được với nhau.
> - **Phần tử cực đại (tối đại):** Là phần tử không nhỏ hơn phần tử nào trong tập hợp, tức là không có phần tử nào lớn hơn nó.
> - **Chặn trên:** Một chặn trên của tập $A \subset S$ là một phần tử của $S$ lớn hơn hay bằng mọi phần tử của $A$.
> - **Bổ đề Zorn:** Nếu một tập hợp không rỗng $S$ có một thứ tự và mọi tập con có thứ tự toàn phần của $S$ đều bị chặn trên thì $S$ có ít nhất một phần tử cực đại.

> [!prf] Chứng minh Định lý Hahn-Banach
> 
> ### Trường hợp 1: Chứng minh cho trường hợp trường số thực ($\mathbb{F} = \mathbb{R}$)
> 
> Dàn ý của chứng minh bao gồm việc chỉ ra khả năng mở rộng không gian con thêm đúng 1 chiều đóng vai trò bước nền (Bước 1), sau đó áp dụng Bổ đề Zorn để mở rộng lên toàn không gian (Bước 2).
> 
> **Bước 1: Mở rộng thêm 1 chiều.**
> Giả sử $M \subsetneq E$ và xét $E_1 = M + N$ với $N$ là một không gian con một chiều của $E$ sinh bởi một vectơ $x_0 \notin M$:
> $$E_1 = M + \langle x_0 \rangle = \{x + tx_0 \mid x \in M, t \in \mathbb{R}\}$$
> Một mở rộng tuyến tính của $T$ thành $\tilde{T}: E_1 \to \mathbb{R}$ sẽ được xác định hoàn toàn bởi giá trị của nó tại $x_0$ vì theo tính tuyến tính:
> $$\tilde{T}(x + tx_0) = \tilde{T}x + t\tilde{T}x_0 = Tx + t\tilde{T}x_0$$
> Ta cần chứng minh tồn tại giá trị thực $c = \tilde{T}x_0$ để $\tilde{T}$ liên tục và $\|\tilde{T}\| = \|T\|$. Điều kiện cần và đủ là tính bị chặn được bảo toàn:
> $$|\tilde{T}(x + tx_0)| \le \|T\|\|x + tx_0\| \quad \forall x \in M, \forall t \in \mathbb{R}$$
> Điều này tương đương với:
> $$-\|T\|\|x + tx_0\| \le Tx + tc \le \|T\|\|x + tx_0\|$$
> - Nếu $t = 0$, bất đẳng thức hiển nhiên đúng vì $|Tx| \le \|T\|\|x\|$.
> - Nếu $t > 0$, ta thay $x$ bằng $tx$ và chia cả hai vế cho $t$, điều kiện trở thành:
> $$Tx + c \le \|T\|\|x + x_0\| \Rightarrow c \le \|T\|\|x + x_0\| - Tx \quad \forall x \in M$$
> - Nếu $t < 0$, ta đặt $t = -s$ với $s > 0$, thay $x$ bằng $sx$ và chia cả hai vế cho $s$, điều kiện trở thành:
> $$-\|T\|\|x - x_0\| \le Tx - c \Rightarrow c \ge -\|T\|\|x - x_0\| - Tx \quad \forall x \in M$$
> Đổi vai trò biến ký hiệu, ta cần tìm một số thực $c$ sao cho với mọi $x_1, x_2 \in M$:
> $$-\|T\|\|x_1 + x_0\| - Tx_1 \le c \le \|T\|\|x_2 + x_0\| - Tx_2$$
> Vì tập số thực có tính trù mật và đầy đủ, sự tồn tại của số thực $c$ nằm giữa hai tập số này tương đương với điều kiện mọi phần tử của tập bên trái đều nhỏ hơn hoặc bằng mọi phần tử của tập bên phải:
> $$\sup_{x_1 \in M} \{-\|T\|\|x_1 + x_0\| - Tx_1\} \le \inf_{x_2 \in M} \{\|T\|\|x_2 + x_0\| - Tx_2\}$$
> Nghĩa là với mọi $x_1, x_2 \in M$, ta phải có:
> $$-\|T\|\|x_1 + x_0\| - Tx_1 \le \|T\|\|x_2 + x_0\| - Tx_2 \Leftrightarrow T(x_2 - x_1) \le \|T\|(\|x_2 + x_0\| + \|x_1 + x_0\|)$$
> Bất đẳng thức này luôn luôn đúng do tính bị chặn của $T$ trên $M$ và bất đẳng thức tam giác trong không gian định chuẩn $E$:
> $$T(x_2 - x_1) \le \|T\|\|x_2 - x_1\| = \|T\|\|(x_2 + x_0) - (x_0 + x_1)\| \le \|T\|(\|x_2 + x_0\| + \|x_1 + x_0\|)$$
> Như vậy, việc mở rộng thêm 1 chiều bảo toàn chuẩn luôn thực hiện được.
> 
> **Bước 2: Sử dụng Bổ đề Zorn để mở rộng toàn phần.**
> Xét tập hợp $\mathcal{C}$ gồm tất cả các cặp $(A, S)$, trong đó $A$ là một không gian con của $E$ chứa $M$, và $S$ là một mở rộng bảo toàn chuẩn của $T$ lên $A$ ($\|S\|_A = \|T\|_M$). Theo giả thiết, $(M, T) \in \mathcal{C}$ nên $\mathcal{C} \neq \emptyset$. Trên tập hợp $\mathcal{C}$ này, ta xét một quan hệ thứ tự như sau:
> $$(A, S) \le (A', S') \quad \text{nếu } A \subset A' \text{ và } S'|_A = S$$
> Giả sử $\mathcal{F}$ là một tập con của $\mathcal{C}$ có thứ tự toàn phần. Ta xây dựng phần tử chặn trên $(B, g)$ bằng cách đặt:
> $$D(g) = \bigcup_{(A,S) \in \mathcal{F}} A$$
> Do thứ tự trên $\mathcal{F}$ là toàn phần nên hợp của các không gian con tăng dần $D(g)$ vẫn là một không gian vectơ. Ta định nghĩa ánh xạ $g: D(g) \to \mathbb{R}$ bằng quy tắc: $g(x) = S(x)$ nếu $x \in A$ với $(A, S) \in \mathcal{F}$. Ánh xạ $g$ định nghĩa tốt vì tính chất thứ tự toàn phần của họ $\mathcal{F}$ đảm bảo nếu $x$ thuộc hai không gian con khác nhau thì giá trị ảnh của chúng phải trùng nhau.
> Khi đó, dễ thấy $g$ tuyến tính và thỏa mãn:
> $$|g(x)| = |S(x)| \le \|S\|\|x\| = \|T\|\|x\|$$
> Do đó $g$ liên tục và $\|g\| = \|T\|$. Cặp $(D(g), g)$ chính là một chặn trên của họ $\mathcal{F}$ trong tập hợp thứ tự $\mathcal{C}$.
> Theo Bổ đề Zorn, tập hợp $\mathcal{C}$ phải có một phần tử cực đại, ta gọi phần tử đó là $(A_0, S_0)$. Nếu không gian con $A_0 \subsetneq E$, áp dụng kết quả mở rộng thêm 1 chiều ở Bước 1, ta luôn có thể tìm thấy một mở rộng bảo toàn chuẩn của $S_0$ lên một không gian con có số chiều lớn hơn $A_0$. Điều này mâu thuẫn với tính cực đại của $(A_0, S_0)$. Do đó, bắt buộc $A_0 = E$. Hàm $S_0$ chính là phiếm hàm mở rộng bảo toàn chuẩn $\tilde{T}$ của $T$ lên toàn bộ không gian $E$.
> 
> ### Trường hợp 2: Chứng minh cho trường hợp trường số phức ($\mathbb{F} = \mathbb{C}$)
> 
> Giả sử $T: E \to \mathbb{C}$ là một phiếm hàm tuyến tính liên tục trên không gian con $M$ của không gian định chuẩn phức $E$. Ta tách ánh xạ thành hai phần thực và ảo: $T(x) = u(x) + iv(x)$ với $u, v$ là các hàm nhận giá trị thực. 
> Do $T$ tuyến tính trên trường phức, ta có điều kiện với mọi $x \in M$:
> $$T(ix) = iT(x) \Leftrightarrow u(ix) + iv(ix) = i(u(x) + iv(x)) = -v(x) + iu(x)$$
> Cân bằng phần thực và phần ảo ở cả hai vế của phương trình, ta thu được mối quan hệ: $v(x) = -u(ix)$. Do đó, phiếm hàm phức ban đầu hoàn toàn được xác định qua phần thực của nó:
> $$T(x) = u(x) - iu(ix)$$
> Ngược lại, nếu cho trước một hàm $u$ tuyến tính trên trường thực và xây dựng hàm $T$ theo công thức trên, ta cũng dễ dàng kiểm tra được $T$ tuyến tính phức nhờ mối liên hệ $T(ix) = iT(x)$.
> Bây giờ ta thiết lập mối quan hệ giữa chuẩn của phiếm hàm phức $T$ và phần thực $u$ của nó. Trước hết, rõ ràng:
> $$|u(x)| \le \sqrt{u(x)^2 + v(x)^2} = |T(x)| \Rightarrow \|u\| \le \|T\|$$
> Ngược lại, với một vectơ $x$ cố định sao cho $Tx \neq 0$, ta đặt số phức $\alpha = \frac{\overline{Tx}}{|Tx|}$. Ta thấy $|\alpha| = 1$ và $\alpha Tx = |Tx| \in \mathbb{R}$. Khi đó:
> $$|Tx| = \alpha Tx = T(\alpha x) = u(\alpha x) \le \|u\|\|\alpha x\| = \|u\|\|x\|$$
> Bất đẳng thức này dẫn tới $\|T\| \le \|u\|$, kết hợp lại ta có đẳng thức chuẩn quan trọng: $\|T\| = \|u\|$.
> Vì $u$ là phiếm hàm tuyến tính thực liên tục trên không gian vectơ thực $M$, áp dụng kết quả Định lý Hahn-Banach dạng thực (Trường hợp 1), tồn tại một phiếm hàm thực mở rộng $\tilde{u}$ định nghĩa trên toàn bộ không gian $E$ sao cho $\tilde{u}|_M = u$ và $\|\tilde{u}\| = \|u\|$. 
> Ta xây dựng phiếm hàm phức $\tilde{T}$ trên $E$ bằng cách đặt:
> $$\tilde{T}(x) = \tilde{u}(x) - i\tilde{u}(ix) \quad \forall x \in E$$
> Theo cấu trúc đối xứng, $\tilde{T}$ là một phiếm hàm tuyến tính phức, trùng khớp với $T$ trên không gian con $M$, và bảo toàn chuẩn nhờ chuỗi đẳng thức: $\|\tilde{T}\| = \|\tilde{u}\| = \|u\| = \|T\|$. Định lý được chứng minh trọn vẹn.

## 4. Các Hệ quả Giải tích và Ví dụ Minh họa

Nhờ có Định lý Hahn-Banach, ta có thể đảm bảo rằng không gian đối ngẫu $E^*$ (không gian chứa các phiếm hàm tuyến tính liên tục từ $E$ vào trường số $\mathbb{F}$) luôn sở hữu cấu trúc vô cùng phong phú và đủ lớn để phản ánh các đặc tính hình học của không gian gốc $E$.

### 4.1. Sự tồn tại của phiếm hàm đo chiều dài vectơ

> [!thm] Hệ quả 1
> Cho $x_0$ là một vectơ khác 0 trong một không gian định chuẩn $E$. Khi đó luôn tồn tại một phiếm hàm tuyến tính liên tục $f \in E^*$ sao cho $\|f\| = 1$ và $f(x_0) = \|x_0\|$.

> [!prf] Chứng minh Hệ quả 1
> Ý tưởng là đặt một phiếm hàm tuyến tính trên không gian tuyến tính con một chiều sinh bởi chính vectơ $x_0$, sau đó dùng định lý Hahn-Banach để mở rộng nó ra toàn không gian $E$.
> Ta xét không gian con một chiều $M = \langle x_0 \rangle = \{tx_0 \mid t \in \mathbb{R}\}$. Đặt phiếm hàm tuyến tính $g: M \to \mathbb{R}$ xác định bởi:
> $$g(tx_0) = t\|x_0\|$$
> Rõ ràng $g$ tuyến tính và thỏa mãn $g(x_0) = \|x_0\|$. Để tìm chuẩn của $g$ trên không gian con $M$, ta xét:
> $$|g(tx_0)| = |t|\|x_0\| = \|tx_0\|$$
> Với mọi phần tử thuộc không gian con, tỉ số giữa trị tuyệt đối của ảnh và chuẩn của vectơ luôn bằng 1, do đó $g$ liên tục và $\|g\| = 1$. 
> Áp dụng trực tiếp Định lý Hahn-Banach, tồn tại một phiếm hàm phức/thực $f \in E^*$ là mở rộng của $g$ lên toàn bộ $E$ thỏa mãn điều kiện bảo toàn chuẩn: $\|f\| = \|g\| = 1$. Đồng thời do là mở rộng nên $f(x_0) = g(x_0) = \|x_0\|$.

### 4.2. Khả năng phân tách các vectơ riêng biệt

> [!thm] Hệ quả 2
> Cho $E$ là một không gian định chuẩn. Không gian đối ngẫu $E^*$ có tính chất phân tách những vectơ trong $E$. Nghĩa là với mọi cặp vectơ phân biệt $x$ và $y$ trong $E$ ($x \neq y$), luôn tồn tại ít nhất một phiếm hàm $f \in E^*$ sao cho $f(x) \neq f(y)$.

> [!prf] Chứng minh Hệ quả 2
> Ta xét vectơ hiệu $u = x - y$. Vì giả thiết cho $x \neq y$ nên vectơ hiệu $u \neq 0$. Áp dụng ngay kết quả thu được từ Hệ quả 1 cho vectơ $u$, ta tìm được một phiếm hàm tuyến tính liên tục $f \in E^*$ sao cho $f(u) = \|u\|$.
> Vì $\|u\| > 0$ nên $f(u) \neq 0$. Do tính chất tuyến tính của phiếm hàm $f$, ta khai triển:
> $$f(u) = f(x - y) = f(x) - f(y) \neq 0 \Rightarrow f(x) \neq f(y)$$
> Luận điểm được chứng minh.

### 4.3. Công thức tính chuẩn dựa trên không gian đối ngẫu

> [!thm] Hệ quả 3
> Với mọi vectơ $x$ nằm trong không gian định chuẩn $E$, ta luôn có công thức biểu diễn chuẩn thông qua không gian đối ngẫu như sau:
> $$\|x\| = \sup\{|Tx| \mid T \in E^*, \|T\| = 1\}$$

> [!prf] Chứng minh Hệ quả 3
> - Nếu $x = 0$, đẳng thức hiển nhiên đúng vì cả hai vế đều triệt tiêu bằng 0.
> - Nếu $x \neq 0$, với mọi phiếm hàm tuyến tính liên tục bất kỳ $T \in E^*$ có chuẩn bằng 1 ($\|T\| = 1$), theo định nghĩa của chuẩn toán tử ta luôn có:
> $$|Tx| \le \|T\|\|x\| = 1 \cdot \|x\| = \|x\|$$
> Lấy giá trị cận trên tối cao ($\sup$) của vế trái theo tất cả các phiếm hàm $T$ thuộc mặt cầu đơn vị đóng của không gian đối ngẫu, ta thu được bất đẳng thức chiều xuôi:
> $$\sup_{\|T\|=1} |Tx| \le \|x\|$$
> Mặt khác, Hệ quả 1 đảm bảo cho ta sự tồn tại của một phiếm hàm đặc biệt, gọi là $T_0 \in E^*$, thỏa mãn đồng thời $\|T_0\| = 1$ và $T_0x = \|x\|$. Khi đó ta có đánh giá ngược lại:
> $$\|x\| = T_0x = |T_0x| \le \sup_{\|T\|=1} |Tx|$$
> Kết hợp cả hai bất đẳng thức chiều xuôi và chiều ngược, ta thu được đẳng thức cần chứng minh.

### 4.4. Minh họa trực quan về tính không duy nhất của mở rộng

Một lưu ý quan trọng trong phát biểu của Định lý Hahn-Banach là phiếm hàm mở rộng không nhất thiết phải duy nhất. Ta xét ví dụ cụ thể sau đây trong không gian hữu hạn chiều để thấy rõ cấu trúc hình học của các siêu phẳng mở rộng khác nhau.

> [!thm] Ví dụ minh họa
> Trong không gian định chuẩn $X = \mathbb{R}^2$ trang bị chuẩn đóng $\ell_1$, nghĩa là $\|(x,y)\|_1 = |x| + |y|$. Xét không gian con trục hoành $M = \{(x,0) \mid x \in \mathbb{R}\}$ và một phiếm hàm tuyến tính $f: M \to \mathbb{R}$ cho trước bởi quy tắc: $f(x,0) = x$.
> - (a) Chứng tỏ $f \in M^*$ và tìm $\|f\|$.
> - (b) Chỉ ra một họ vô hạn các phiếm hàm mở rộng bảo toàn chuẩn của $f$ lên toàn không gian $X$.

> [!prf] Chứng minh Ví dụ minh họa
> - **Giải câu (a):** Tính tuyến tính của $f$ trên không gian con $M$ được kiểm tra dễ dàng qua định nghĩa:
> $$f((x,0) + (y,0)) = f(x+y,0) = x+y = f(x,0) + f(y,0)$$
> $$f(\alpha(x,0)) = f(\alpha x,0) = \alpha x = \alpha f(x,0)$$
> Để tính chuẩn của phiếm hàm $f$, ta lập tỉ số ảnh:
> $$|f(x,0)| = |x| = |x| + 0 = |x| + |0| = \|(x,0)\|_1$$
> Vì dấu đẳng thức xảy ra với mọi phần tử của $M$ nên phiếm hàm này bị chặn và có chuẩn đúng bằng 1 ($\|f\| = 1$).
> - **Giải câu (b):** Với mỗi hằng số tham số $a \in [-1, 1]$, ta xây dựng một phiếm hàm tổng quát $F_a: X \to \mathbb{R}$ xác định bởi công thức:
> $$F_a(x,y) = x + ay$$
> Ta dễ dàng kiểm tra tính tuyến tính của $F_a$ trên không gian hai chiều bằng các phép cộng toán tử đại số thông thường. Bây giờ ta xét tính bị chặn và tính chuẩn của họ hàm này. Do điều kiện chặn $|a| \le 1$, ta thực hiện ước tính trị tuyệt đối:
> $$|F_a(x,y)| = |x + ay| \le |x| + |a||y| \le |x| + |y| = \|(x,y)\|_1$$
> Điều này chứng tỏ $F_a$ là phiếm hàm tuyến tính liên tục trên $X$ và có chuẩn $\|F_a\| \le 1$. Để chứng minh chuẩn thực sự bằng 1, ta chọn thử vectơ đơn vị đặc biệt là $(1,0)$. Ta thấy $\|(1,0)\|_1 = 1$ và giá trị ảnh là:
> $$|F_a(1,0)| = |1 + a \cdot 0| = 1 = 1 \cdot \|(1,0)\|_1$$
> Do đó, với mọi $a \in [-1,1]$, ta luôn có $\|F_a\| = 1 = \|f\|$.
> Đồng thời, khi thu hẹp họ hàm này xuống không gian con ban đầu $M$ (cho thành phần $y = 0$), ta thu được:
> $$F_a|_M(x,0) = F_a(x,0) = x + a \cdot 0 = x = f(x,0)$$
> Như vậy, ứng với mỗi giá trị của tham số $a$ nằm trong đoạn $[-1, 1]$, ta nhận được một siêu phẳng đóng khác nhau làm nhiệm vụ mở rộng bảo toàn chuẩn cho phiếm hàm $f$. Điều này chứng minh rằng phiếm hàm mở rộng từ Định lý Hahn-Banach nói chung không phải là duy nhất.
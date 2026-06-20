
# Định lý Hahn-Banach: Sự Giao Thoa Giữa Hình Học Siêu Phẳng và Đại Số Giải Tích

## 0. Kiến thức nền tảng: Không gian đối ngẫu và Trực giác hình học

Trước khi đi sâu vào các cấu trúc mở rộng (Hahn-Banach) hay biểu diễn (Riesz), ta cần làm rõ các đối tượng cơ bản nhất sẽ thao tác trong suốt quá trình này: phiếm hàm tuyến tính, không gian đối ngẫu và hình dáng của quả cầu đơn vị.

> [!thm] Định nghĩa 1: Chuẩn và Quả cầu đơn vị
> Cho $E$ là một không gian vectơ. **Chuẩn** (Norm), ký hiệu là $\|x\|$, là một hàm đo độ dài của vectơ $x$.
> **Quả cầu đơn vị đóng** (Closed Unit Ball) của $E$ là tập hợp tất cả các điểm có độ dài không vượt quá 1:
> $$B_E = \{x \in E \mid \|x\| \le 1\}$$
> *Ý nghĩa hình học:* $B_E$ luôn là một vật thể lồi (convex) và đối xứng qua gốc tọa độ. Hình dáng của nó rất quan trọng: trong không gian Hilbert, nó trơn tròn hoàn hảo; nhưng trong không gian Banach tổng quát, nó có thể có các góc cạnh (ví dụ khối đa diện).

> [!thm] Định nghĩa 2: Phiếm hàm tuyến tính và Không gian đối ngẫu (Dual Space)
> Một **phiếm hàm tuyến tính** (Linear Functional) là một ánh xạ $f: E \to \mathbb{F}$ (với $\mathbb{F}$ là $\mathbb{R}$ hoặc $\mathbb{C}$) "nén" một cấu trúc vectơ thành một số vô hướng, đồng thời bảo toàn nghiêm ngặt phép cộng và nhân:
> $$f(\alpha x + \beta y) = \alpha f(x) + \beta f(y) \quad \forall x, y \in E, \forall \alpha, \beta \in \mathbb{F}$$
> Tuy nhiên, trong không gian vô hạn chiều, ta đặc biệt quan tâm đến các phiếm hàm không bị gãy khúc hay bùng nổ, tức là các phiếm hàm **liên tục** (tương đương với tính bị chặn). 
> Tập hợp tất cả các phiếm hàm tuyến tính liên tục trên $E$ được gọi là **không gian đối ngẫu**, ký hiệu là $E^*$. Cùng với các phép toán cộng hàm và nhân vô hướng thông thường, $E^*$ luôn tự tạo thành một không gian Banach.

### 0.1. Sự thái lát không gian và Khoảng cách siêu phẳng (Độ dốc)

Mỗi phiếm hàm tuyến tính liên tục $f \in E^* \setminus \{0\}$ xác định một họ siêu phẳng song song là các tập mức $H_\alpha = \{x \in E \mid f(x) = \alpha\}$ với $\alpha \in \mathbb{R}$.

> [!thm] Mệnh đề 1 (Khoảng cách giữa các siêu phẳng)
> Khoảng cách hình học từ gốc tọa độ $0 \in H_0$ đến siêu phẳng $H_1 = \{x \in E \mid f(x) = 1\}$ tỉ lệ nghịch với chuẩn $\|f\|$:
> $$d(H_0, H_1) = \frac{1}{\|f\|}$$

> [!prf] Chứng minh
> Theo định nghĩa khoảng cách trong không gian định chuẩn:
> $$d(H_0, H_1) = \inf_{x \in H_1} \|x - 0\| = \inf_{f(x)=1} \|x\|$$
> Với mọi $x \in H_1$, ta có $f(x) = 1$. Áp dụng tính bị chặn của phiếm hàm:
> $$1 = |f(x)| \le \|f\| \cdot \|x\| \implies \|x\| \ge \frac{1}{\|f\|} \implies \inf_{f(x)=1} \|x\| \ge \frac{1}{\|f\|}$$
> Theo định nghĩa của chuẩn toán tử $\|f\| = \sup_{x \ne 0} \frac{|f(x)|}{\|x\|}$, với mọi $\epsilon > 0$, luôn tồn tại $x_\epsilon \ne 0$ sao cho:
> $$|f(x_\epsilon)| > (\|f\| - \epsilon)\|x_\epsilon\|$$
> Đặt $z_\epsilon = \frac{x_\epsilon}{f(x_\epsilon)}$, ta có $f(z_\epsilon) = 1$ (tức là $z_\epsilon \in H_1$). Khi đó:
> $$\|z_\epsilon\| = \frac{\|x_\epsilon\|}{|f(x_\epsilon)|} < \frac{1}{\|f\| - \epsilon}$$
> Cho $\epsilon \to 0^+$, ta thu được $\inf_{f(x)=1} \|x\| = \frac{1}{\|f\|}$. ĐPCM.

* **Ý nghĩa hình học về độ dốc:** * Nếu $\|f\|$ càng lớn $\implies$ khoảng cách $d(H_0, H_1) = \frac{1}{\|f\|}$ càng nhỏ. Các lớp siêu phẳng mức ứng với các giá trị ảnh liên tiếp ($\dots, 0, 1, 2, \dots$) xếp chồng lên nhau **cực kỳ dày đặc**. Ta chỉ cần dịch chuyển một khoảng ngắn $\le 1$ bên trong quả cầu đơn vị, vectơ $x$ đã bước qua vô số siêu phẳng, khiến giá trị ảnh $f(x)$ tăng vọt.
  
  Ngược lại, nếu $\|f\|$ nhỏ $\implies$ các siêu phẳng nằm **thưa thớt**, phiếm hàm biến thiên chậm (ít dốc).

### 0.2. Siêu phẳng tựa kẹp chặt Quả cầu đơn vị

Xét quả cầu đơn vị đóng $B_E = \{x \in E \mid \|x\| \le 1\}$ và hai siêu phẳng ranh giới $H_1^+ = \{x \in E \mid f(x) = \|f\|\}$ và $H_1^- = \{x \in E \mid f(x) = -\|f\|\}$.

> [!thm] Mệnh đề 2 (Tính chất tựa của siêu phẳng)
> Hai siêu phẳng $H_1^+$ và $H_1^-$ đóng vai trò là hai vách ngăn kẹp chặt lấy quả cầu đơn vị $B_E$. Chúng tiếp xúc với biên $\partial B_E$ nhưng không bao giờ cắt sâu vào bên trong nội tâm của quả cầu.

> [!prf] Chứng minh
> Ta chứng minh cho siêu phẳng $H_1^+$ (với $H_1^-$ lập luận hoàn toàn tương tự):
> - **Không cắt vào trong:** Với mọi $x$ thuộc nội tâm quả cầu đơn vị ($x \in \text{int}(B_E) \implies \|x\| < 1$), ta có:
>   $$f(x) \le |f(x)| \le \|f\| \cdot \|x\| < \|f\|$$
>   Vì $f(x) < \|f\|$ với mọi $x \in \text{int}(B_E)$, siêu phẳng $H_1^+$ hoàn toàn không chứa bất kỳ điểm trong nào của quả cầu (không cắt vào trong).
> - **Tiếp xúc tại biên:** Theo định nghĩa của chuẩn toán tử, $\|f\| = \sup_{\|x\| \le 1} f(x)$. Do biên $\partial B_E$ là tập compact trong không gian hữu hạn chiều (hoặc tiệm cận đạt được supremum trong không gian vô hạn chiều), tồn tại vectơ đóng $x_0 \in \partial B_E$ ($\|x_0\| = 1$) sao cho $f(x_0) = \|f\|$. Vectơ $x_0$ vừa thuộc biên quả cầu, vừa thuộc siêu phẳng $H_1^+$. Đây chính là điểm tiếp xúc hình học.

## 1. Dẫn nhập Hình học: Tập lồi và Sự phân tách bằng Siêu phẳng

> [!def]
> Mọi ý tưởng của Định lý Hahn-Banach đều bắt nguồn từ một trực giác hình học cơ bản: Nếu có một vật thể lồi và một điểm nằm ngoài nó, ta luôn có thể dựng một "mặt phẳng" ngăn cách chúng. Trong không gian vô hạn chiều, "mặt phẳng" này chính là siêu phẳng, và "vật thể lồi" quan trọng nhất chính là quả cầu đơn vị.
> 
> - **Tập lồi:** Trong không gian vectơ trên trường $\mathbb{F}$, tập $C$ được gọi là tập lồi nếu đoạn thẳng nối hai điểm bất kỳ của nó cũng nằm trọn trong nó:
> $$\{(1-t)x + ty \mid t \in [0,1]\} \subset C$$
> *(Ghi chú: Quả cầu đơn vị đóng $B = \{x \mid \|x\| \le 1\}$ trong không gian định chuẩn luôn là một tập lồi).*
> 
> - **Siêu phẳng (Affine hyperplane):** Nếu $f$ là phiếm hàm tuyến tính liên tục ($f \in X^*$) không triệt tiêu, tập mức $f^{-1}(\{\alpha\}) = \{x \in X \mid f(x) = \alpha\}$ là một siêu phẳng đóng. 
> Việc một tập lồi $C$ nằm về một phía của siêu phẳng tương đương với bất đẳng thức đại số: $f(x) \le \alpha$ với mọi $x \in C$.

> [!thm] Định lý (Dạng hình học của Định lý Hahn-Banach)
> Cho $A$ và $B$ là hai tập lồi không rỗng rời nhau trong không gian định chuẩn $X$ trên trường số thực, ít nhất một trong hai tập là mở. Khi đó, tồn tại một siêu phẳng đóng $f^{-1}(\{\alpha\})$ tách $A$ và $B$. 
> Nghĩa là tồn tại $f \in X^*$ và $\alpha \in \mathbb{R}$ sao cho: $f(x) \le \alpha \le f(y)$ với mọi $x \in A, y \in B$.

Để biến hình ảnh "vật thể lồi" thành công cụ tính toán đại số, ta dùng Bổ đề Minkowski. Nó đo độ phình của tập lồi so với gốc tọa độ.

> [!lem] Bổ đề 1 (Phiếm hàm Minkowski)
> Cho $C$ là tập lồi, mở với $0 \in C$. Hàm $p(x) = \inf\{\alpha > 0 \mid \alpha^{-1}x \in C\}$ thỏa mãn tính thuần nhất $p(\lambda x) = \lambda p(x)$ và $p(x+y) \le p(x) + p(y)$. 
> Tính chất then chốt: $x \in C \Leftrightarrow p(x) < 1$.

> [!thm] Bổ đề 2
> Cho $C \subsetneq E$ là tập lồi, mở và $x_0 \in E \setminus C$. Tồn tại $f \in E^*$ sao cho $f(x) < f(x_0)$ với mọi $x \in C$ (tồn tại siêu phẳng tách điểm và tập lồi).

## 2. Cầu nối Hình học - Đại số: Ý nghĩa thực sự của việc "Bảo toàn chuẩn"

Trong giải tích, ta thường nói về bài toán: "Mở rộng phiếm hàm $T$ từ không gian con $M$ lên không gian $E$ sao cho bảo toàn chuẩn $\|T\|$". Mối liên hệ hình học ở đây là gì?

Giả sử $\|T\| = 1$. Điều này tương đương với $T(x) \le \|x\|$. 
Nhìn dưới góc độ hình học, hàm $p(x) = \|x\|$ chính là phiếm hàm Minkowski của **quả cầu đơn vị**. 
Do đó, việc **"mở rộng bảo toàn chuẩn"** chính là bài toán hình học: **"Tiếp tục kéo dài siêu phẳng ra các chiều không gian lớn hơn sao cho nó vẫn tựa vào quả cầu đơn vị mà không bao giờ cắt sâu vào bên trong quả cầu đó".**

### 2.1. Mở rộng trên không gian con trù mật
Nếu không gian con $M$ đã trù mật (chiếm gần hết không gian $E$), siêu phẳng của ta thực chất đã được định hình hướng đi cố định. Ta chỉ việc lấp đầy các "lỗ hổng" bằng giới hạn.

> [!thm] Dẫn nhập 1 (Ánh xạ thu hẹp)
> Nếu $F \subset E$ và $T$ liên tục trên $E$, thì thu hẹp $T|_F$ liên tục và $\|T|_F\| \le \|T\|$. 
> (Hiển nhiên: siêu phẳng tựa trên vật thể lớn $E$ thì cũng là tựa trên lát cắt $F$ của nó).

> [!prf] 
> - Tính tuyến tính: $T|_F(x) + T|_F(y) = T(x+y) = T|_F(x+y)$. Tương tự với phép nhân vô hướng.
> - Tính bị chặn: Lấy $x \in F$, $\|T|_F(x)\| = \|Tx\| \le M\|x\|_E = M\|x\|_F$.
> - Tính chuẩn: $\|T|_F\| = \sup_{\|x\|_F < 1} \|Tx\| \le \sup_{\|x\|_E < 1} \|Tx\| = \|T\|$.

> [!thm] Dẫn nhập 2 (Mở rộng duy nhất trên không gian trù mật)
> Cho $M$ trù mật trong $E$, $T \in M^*$. Tồn tại duy nhất $S \in E^*$ sao cho $S|_M = T$ và $\|S\| = \|T\|$.

> [!prf] 
> - **Tồn tại:** Do $M$ trù mật, mọi $x \in E$ đều có $x_n \to x$ (với $x_n \in M$). Vì $(x_n)$ là Cauchy và $\|Tx_m - Tx_n\| \le \|T\|\|x_m - x_n\|$, dãy ảnh $(Tx_n)$ là Cauchy trong trường đầy đủ $\mathbb{F}$. Đặt $Sx = \lim_{n \to \infty} Tx_n$. Giới hạn này định nghĩa tốt (không phụ thuộc dãy).
> - **Liên tục và bảo toàn chuẩn:** $\|Sx\| = \lim \|Tx_n\| \le \lim \|T\|\|x_n\| = \|T\|\|x\|$. Suy ra $\|S\| \le \|T\|$. Kết hợp Dẫn nhập 1, ta có $\|S\| = \|T\|$.
> - **Duy nhất:** Nếu có $\tilde{S}$, xét $f = S - \tilde{S}$. Với $x_n \to x$, $f(x) = \lim (S(x_n) - \tilde{S}(x_n)) = 0$. Vậy $S \equiv \tilde{S}$.

**Vấn đề:** Nếu $M$ "rất mỏng" (không trù mật), làm sao ta mở rộng siêu phẳng mà không vô tình làm nó cắt vào quả cầu đơn vị? Đây là nhiệm vụ của định lý Hahn-Banach.

## 3. Định lý Hahn-Banach (Dạng Đại số)

> [!thm] Định lý (Hahn-Banach)
> Cho $M \subset E$ trên $\mathbb{F} = \mathbb{R}$ hoặc $\mathbb{C}$. Mọi $T \in M^*$ đều mở rộng được thành $\tilde{T} \in E^*$ sao cho $\|\tilde{T}\| = \|T\|$. (Mở rộng này không nhất thiết duy nhất).

Để duy trì siêu phẳng tựa trong không gian vô hạn chiều, ta dùng Bổ đề Zorn (để thực hiện quy trình mở rộng siêu hạng).

> [!thm] Nhắc lại: Bổ đề Zorn
> Nếu một tập hợp không rỗng có thứ tự mà mọi tập con có thứ tự toàn phần đều bị chặn trên, thì nó có phần tử cực đại.

> [!prf] 
> (Trường hợp $\mathbb{F} = \mathbb{R}$)
> **Bước 1: Mở rộng thêm 1 chiều (Hình học: Chỉnh góc nghiêng của mặt phẳng)**
> Xét $E_1 = M + \langle x_0 \rangle = \{x + tx_0 \mid x \in M, t \in \mathbb{R}\}$. 
> Ta cần xác định $\tilde{T}(x + tx_0) = Tx + tc$ (với $c = \tilde{T}x_0$) sao cho siêu phẳng mới vẫn không cắt vào quả cầu bán kính $1/\|T\|$, tức là:
> $$|\tilde{T}(x + tx_0)| \le \|T\|\|x + tx_0\| \quad \forall x, t$$
> 
> Chuyển đổi đại số (với $t > 0$ và $t < 0$):
> $Tx + tc \le \|T\|\|x+tx_0\|$ và $-Tx - tc \le \|T\|\|x+tx_0\|$
> Rút $c$ ra, ta thấy $c$ phải bị "kẹp" giữa hai mặt nón lồi (upper bound và lower bound tạo bởi quả cầu):
> $$-\|T\|\|x_1 + x_0\| - Tx_1 \le c \le \|T\|\|x_2 + x_0\| - Tx_2 \quad \forall x_1, x_2 \in M$$
> 
> Sự tồn tại của "khe hở" $c$ này phụ thuộc vào việc vế trái luôn $\le$ vế phải:
> $$T(x_2 - x_1) \le \|T\|(\|x_2 + x_0\| + \|x_1 + x_0\|)$$
> Bất đẳng thức này hiển nhiên đúng vì:
> $$T(x_2 - x_1) \le \|T\|\|x_2 - x_1\| = \|T\|\|(x_2 + x_0) - (x_0 + x_1)\| \le \|T\|(\|x_2 + x_0\| + \|x_1 + x_0\|)$$
> *Kết luận Bước 1:* Ta luôn tìm được một góc nghiêng $c$ để lách siêu phẳng qua thêm 1 chiều không gian mà không vi phạm ranh giới quả cầu đơn vị.
> 
> **Bước 2: Dùng Zorn mở rộng phủ kín không gian**
> Xét tập $\mathcal{C}$ các cặp $(A, S)$ với $M \subset A$, $S$ là mở rộng bảo toàn chuẩn của $T$. Thứ tự $(A, S) \le (A', S')$ nếu $A \subset A'$ và $S'|_A = S$.
> Với mọi xích $\mathcal{F}$ toàn phần, ta dựng chặn trên $(B, g)$ bằng cách hợp tất cả các không gian con $A$ lại và giữ nguyên quy tắc $g(x) = S(x)$. Ánh xạ định nghĩa tốt, tuyến tính và $\|g\| = \|T\|$.
> Theo Zorn, $\mathcal{C}$ có phần tử cực đại $(A_0, S_0)$. 
> Nếu $A_0 \subsetneq E$, Bước 1 cho phép ta mở rộng thêm 1 chiều nữa, phá vỡ tính cực đại. Vậy bắt buộc $A_0 = E$. Ta có mở rộng hoàn chỉnh $\tilde{T}$.
> 
> (Trường hợp $\mathbb{F} = \mathbb{C}$)
> Tách $T = u + iv$. Do $T(ix) = iT(x)$, ta suy ra $u(ix) + iv(ix) = -v(x) + iu(x)$, tức là $v(x) = -u(ix)$.
> Vậy toàn bộ mặt phẳng phức được điều khiển bởi phần thực: $T(x) = u(x) - iu(ix)$.
> Ước tính chuẩn: Hiển nhiên $\|u\| \le \|T\|$. 
> Ngược lại, chọn $\alpha = \frac{\overline{Tx}}{|Tx|}$ (để xoay vectơ về trục thực, $|\alpha| = 1$). 
> $|Tx| = \alpha Tx = T(\alpha x) = u(\alpha x) \le \|u\|\|\alpha x\| = \|u\|\|x\|$. Suy ra $\|T\| = \|u\|$.
> Áp dụng Hahn-Banach dạng thực cho $u$ để lấy $\tilde{u}$ trên $E$, rồi đặt $\tilde{T}(x) = \tilde{u}(x) - i\tilde{u}(ix)$. Mở rộng này bảo toàn chuẩn phức.

Sự mở rộng Hahn-Banach từ không gian con $M$ ra toàn không gian $E$ bản chất là việc kéo dài siêu phẳng tựa của quả cầu đơn vị đóng $B_M = B_E \cap M$ ra thành siêu phẳng tựa của quả cầu lớn $B_E$.

* **Trường hợp quả cầu trơn (Smooth Norm - như không gian Hilbert):** Tại điểm chạm $x_0 \in \partial B_E$, hàm chuẩn khả vi, không gian chỉ tồn tại duy nhất một mặt phẳng tiếp tuyến. Vectơ pháp tuyến $y$ bị khóa cứng góc nghiêng, dẫn đến mở rộng Hahn-Banach là **duy nhất** (hệ quả từ Định lý biểu diễn Riesz).
* **Trường hợp quả cầu có góc nhọn (Non-smooth Norm - như chuẩn $\ell_1$):** Tại đỉnh nhọn của quả cầu (nơi hàm chuẩn không khả vi), ta có bất đẳng thức tại điểm chạm $x_0$:
  $$f(x_0) = \|f\| \quad \text{và} \quad f(x) \le \|f\| \cdot \|x\|_1$$
  Vì ranh giới tại đỉnh nhọn gãy khúc, tồn tại một dải các góc nghiêng khác nhau (các tham số đại số khác nhau) đều thỏa mãn việc đặt một tấm ván siêu phẳng tựa lên cái đỉnh nhọn đó mà không cắt vào trong khối lồi. Sự bập bênh hình học này chính là lý do đại số sinh ra **vô số phiếm hàm mở rộng bảo toàn chuẩn** khác nhau.

## 4. Các Hệ quả Giải tích và Ý nghĩa Hình học

Các hệ quả sau cho thấy không gian đối ngẫu $E^*$ chứa đủ lượng siêu phẳng để "chụp" lại toàn bộ hình dáng của không gian $E$.

### Hệ quả 1: Đặt mặt phẳng tựa vào một điểm của quả cầu
> [!cor] Hệ quả 1
> Với $x_0 \neq 0$, tồn tại $f \in E^*$ sao cho $\|f\| = 1$ và $f(x_0) = \|x_0\|$.
> *(Ý nghĩa hình học: Luôn tồn tại một siêu phẳng tựa vào quả cầu bán kính $\|x_0\|$ ngay tại chính điểm chạm $x_0$).*

> [!prf] 
> Đặt trên không gian con 1 chiều $M = \langle x_0 \rangle$ hàm $g(tx_0) = t\|x_0\|$. Ta có $|g(tx_0)| = \|tx_0\| \Rightarrow \|g\| = 1$. Dùng Hahn-Banach mở rộng $g$ lên $E$ thành $f$, ta có $\|f\| = 1$ và $f(x_0) = \|x_0\|$.

### Hệ quả 2: Phân tách hai điểm
> [!cor] Hệ quả 2
> $E^*$ phân tách điểm: Nếu $x \neq y$, tồn tại $f \in E^*$ sao cho $f(x) \neq f(y)$.
> *(Ý nghĩa hình học: Cho 2 điểm phân biệt, ta luôn có thể nhét 1 siêu phẳng vào giữa chúng).*

> [!prf] 
> Xét $u = x - y \neq 0$. Theo HQ 1, có $f$ sao cho $f(u) = \|u\| \neq 0$. Do tuyến tính, $f(x) - f(y) \neq 0 \Rightarrow f(x) \neq f(y)$.

### Hệ quả 3: Tính chuẩn bằng đối ngẫu
> [!cor] Hệ quả 3
> $\|x\| = \sup\{|Tx| \mid T \in E^*, \|T\| = 1\}$.
> *(Ý nghĩa hình học: Độ dài của vectơ $x$ chính là khoảng cách lớn nhất từ gốc tọa độ đến các siêu phẳng tựa bao quanh nó).*

> [!prf] 
> $x = 0$ thì hiển nhiên. Với $x \neq 0$: $|Tx| \le \|T\|\|x\| = \|x\|$ với mọi $\|T\|=1$, suy ra $\sup |Tx| \le \|x\|$.
> Ngược lại, HQ 1 cung cấp một $T_0$ có chuẩn 1 sao cho $T_0x = \|x\|$, do đó dấu bằng xảy ra.

### Trực quan Hình học về tính KHÔNG duy nhất của mở rộng
Định lý nói mở rộng không duy nhất. Tại sao? Hãy nhìn vào hình dáng của quả cầu.

> [!exm] Ví dụ minh họa ($\ell_1$ norm)
> Trong $X = \mathbb{R}^2$ với chuẩn hình thoi $\|(x,y)\|_1 = |x| + |y|$. 
> Xét không gian con $M = \{(x,0)\}$ (trục hoành) và $f(x,0) = x$.
> (a) Ta có $\|f\| = 1$ vì $|f(x,0)| = |x| = \|(x,0)\|_1$.
> (b) Xét họ siêu phẳng $F_a(x,y) = x + ay$ với $a \in [-1, 1]$.

> [!prf]
> Tính bị chặn: $|F_a(x,y)| = |x + ay| \le |x| + |a||y| \le |x| + |y| = \|(x,y)\|_1 \Rightarrow \|F_a\| \le 1$.
> Tại điểm chạm $(1,0)$: $|F_a(1,0)| = 1 = \|(1,0)\|_1 \Rightarrow \|F_a\| = 1$.
> Thu hẹp: $F_a(x,0) = x = f(x,0)$.
> 
> **Giải thích Hình học:** Quả cầu đơn vị của chuẩn $\ell_1$ là một hình thoi (diamond) với các đỉnh nhọn tại $(1,0), (0,1), (-1,0), (0,-1)$. Tại góc nhọn $(1,0)$, đường biên không trơn (not smooth), do đó bạn có thể "bập bênh" mặt phẳng tựa qua lại (thay đổi tham số góc $a \in [-1, 1]$) mà mặt phẳng này vẫn không cắt vào trong hình thoi. Đây chính là lý do đại số sinh ra vô số nghiệm bảo toàn chuẩn!

> [!thm] Định lý (Tính không duy nhất của mở rộng tại điểm không trơn)
> Xét không gian định chuẩn $X = \mathbb{R}^2$ với chuẩn $\|(x,y)\|_1 = |x| + |y|$. Cho $M = \{(x,0) \in \mathbb{R}^2 \mid x \in \mathbb{R}\}$ là không gian con một chiều đại diện cho trục hoành. Xét phiếm hàm tuyến tính $f: M \to \mathbb{R}$ xác định bởi $f(x,0) = x$. 
> 
> Khi đó, $f \in M^*$ với $\|f\| = 1$. Đồng thời, tồn tại vô số phiếm hàm mở rộng Hahn-Banach $F \in X^*$ của $f$ lên toàn không gian $X$ sao cho $F|_M = f$ và $\|F\| = \|f\| = 1$.

> [!prf] Chứng minh
> 
> Bước 1: Tính chuẩn của phiếm hàm ban đầu trên không gian con $M$
> 
> Với mọi phần tử $(x,0) \in M$, theo định nghĩa của chuẩn $\ell_1$, ta có:
> $\|(x,0)\|_1 = |x| + |0| = |x|$
> 
> Xét trị tuyệt đối của giá trị ảnh qua phiếm hàm $f$:
> $|f(x,0)| = |x|$
> 
> Do đó, với mọi $(x,0) \in M$, ta luôn có đẳng thức:
> $|f(x,0)| = \|(x,0)\|_1$
> 
> Theo định nghĩa chuẩn của phiếm hàm trong không gian đối ngẫu $M^*$:
> $\|f\| = \sup_{(x,0) \in M, x \neq 0} \frac{|f(x,0)|}{\|(x,0)\|_1} = 1$
> 
> Như vậy, phiếm hàm ban đầu liên tục và có chuẩn bằng $1$. Điểm chạm đơn vị trên biên của quả cầu $B_M$ chính là $x_0 = (1,0)$, tại đó $f(1,0) = 1 = \|f\|$.
> 
> Bước 2: Xây dựng họ các phiếm hàm mở rộng đại số
> 
> Để mở rộng $f$ từ $M$ lên toàn bộ không gian hai chiều $X$, ta cần định nghĩa giá trị của phiếm hàm mở rộng tại vectơ độc lập tuyến tính còn lại là $e_2 = (0,1)$. Giả sử mở rộng $F$ có giá trị $F(0,1) = a$ với $a \in \mathbb{R}$. 
> 
> Do tính chất tuyến tính bắt buộc của một phiếm hàm mở rộng, cấu trúc của $F$ trên mọi $(x,y) \in X$ phải tuân theo:
> $F(x,y) = F(x,0) + F(0,y) = f(x,0) + yF(0,1) = x + ay$
> 
> Đặt họ các phiếm hàm này là $F_a(x,y) = x + ay$. Ta cần tìm tập hợp tất cả các giá trị số thực $a$ sao cho chuẩn toán tử $\|F_a\|$ bảo toàn tính đóng và đúng bằng chuẩn của $f$, tức là $\|F_a\| = 1$.
> 
> Bước 3: Đánh giá điều kiện chặn đại số để bảo toàn chuẩn
> 
> Theo định nghĩa chuẩn toán tử trên không gian $X$, điều kiện $\|F_a\| = 1$ tương đương với bất đẳng thức:
> $|F_a(x,y)| \le 1 \cdot \|(x,y)\|_1 \implies |x + ay| \le |x| + |y| \quad \forall (x,y) \in \mathbb{R}^2$
> 
> Ta sẽ chứng minh bất đẳng thức này thỏa mãn trên toàn không gian khi và chỉ khi $a \in [-1, 1]$.
> 
> - Chiều thuận: Giả sử $\|F_a\| = 1$. Ta thử họ phiếm hàm tại vectơ cụ thể là $(0,1)$. Khi đó, ta có:
>   $|F_a(0,1)| \le \|(0,1)\|_1 \implies |0 + a \cdot 1| \le |0| + |1| \implies |a| \le 1$
>   Điều này ép buộc hằng số đại số $a$ phải nằm trong đoạn $[-1, 1]$.
> 
> - Chiều nghịch: Giả sử $a \in [-1, 1]$, tương đương với $|a| \le 1$. Áp dụng bất đẳng thức tam giác đại số cho trị tuyệt đối số thực, với mọi $(x,y) \in \mathbb{R}^2$, ta có:
>   $|F_a(x,y)| = |x + ay| \le |x| + |ay| = |x| + |a||y|$
>   Do $|a| \le 1$, ta ước tính tiếp:
>   $|x| + |a||y| \le |x| + 1 \cdot |y| = |x| + |y| = \|(x,y)\|_1$
>   Như vậy, $|F_a(x,y)| \le \|(x,y)\|_1$ với mọi $(x,y)$, suy ra chuẩn toán tử $\|F_a\| \le 1$.
> 
> Mặt khác, xét tại điểm chạm biên quả cầu $x_0 = (1,0)$, ta có $\|(1,0)\|_1 = 1$. Giá trị của phiếm hàm mở rộng tại đây là:
> $|F_a(1,0)| = |1 + a \cdot 0| = 1$
> 
> Vì tồn tại một điểm trên biên đạt giá trị bằng $1$, nên chuẩn toán tử tối cao phải đạt giá trị:
> $\|F_a\| = \sup_{\|(x,y)\|_1 \le 1} |F_a(x,y)| = 1$
> 
> Bước 4: Kiểm tra điều kiện trùng khớp trên không gian con $M$
> 
> Với mọi số thực $a \in [-1,1]$ và với mọi phần tử $(x,0) \in M$, ta luôn có:
> $F_a|_M(x,0) = F_a(x,0) = x + a \cdot 0 = x = f(x,0)$
> 
> Kết luận: Do tập hợp $[-1, 1]$ là một đoạn liên tục có vô số phần tử thực, ta thu được vô số phiếm hàm mở rộng tuyến tính liên tục $F_a$ khác nhau thỏa mãn đầy đủ các điều kiện của Định lý Hahn-Banach. Sự không duy nhất của siêu phẳng tựa đã được chứng minh hoàn toàn bằng đại số giải tích.


# Phần 2: Cấu Trúc Hình Học Của Không Gian Hilbert Và Định Lý Riesz

## 1. Tích trong và Không gian Hilbert: Phục dựng Hình học Euclid

Định lý Hahn-Banach trong không gian định chuẩn tổng quát tuy mạnh, nhưng sự mở rộng của nó thường **không duy nhất**. Lý do cốt lõi là cấu trúc "chuẩn" (norm) chỉ cung cấp khái niệm về "độ dài" mà thiếu đi "góc độ" (angle) và sự "vuông góc" (orthogonality). 

Khi ta trang bị thêm **Tích trong (Inner Product)**, không gian vô hạn chiều lập tức có được sự cứng cáp và hoàn hảo của hình học Euclid.

> [!def] Định nghĩa: Tích trong
> Trên không gian vectơ $H$ (trường $\mathbb{F} = \mathbb{R}$ hoặc $\mathbb{C}$), tích trong là một ánh xạ $\langle \cdot, \cdot \rangle : H \times H \to \mathbb{F}$ thỏa mãn:
> 1. Tuyến tính theo biến thứ nhất: $\langle \alpha x + \beta y, z \rangle = \alpha \langle x, z \rangle + \beta \langle y, z \rangle$.
> 2. Tính đối xứng (Hermitian): $\langle x, y \rangle = \overline{\langle y, x \rangle}$. (Trên $\mathbb{R}$, điều này có nghĩa là $\langle x,y \rangle = \langle y,x \rangle$).
> 3. Xác định dương: $\langle x, x \rangle \ge 0$ và $\langle x, x \rangle = 0 \Leftrightarrow x = 0$.
> 
> Hệ quả từ tính chất 1 và 2: Ánh xạ liên hợp tuyến tính theo biến thứ hai: $\langle x, \alpha y + \beta z \rangle = \overline{\alpha}\langle x, y \rangle + \overline{\beta}\langle x, z \rangle$.

Tích trong luôn sinh ra một chuẩn tự nhiên: $\|x\| = \langle x, x \rangle^{1/2}$. 
Một không gian tích trong mà **đầy đủ** (mọi dãy Cauchy đều hội tụ) đối với chuẩn này được gọi là **Không gian Hilbert**. 

Các không gian kinh điển như không gian Euclid $\mathbb{R}^n, \mathbb{C}^n$, không gian dãy $\ell^2$, và không gian hàm $L^2(\Omega)$ đều là không gian Hilbert. Tuy nhiên, không phải chuẩn nào cũng sinh từ tích trong. 

> [!prp] Mệnh đề: Đẳng thức Hình bình hành (Parallelogram Law)
> Điều kiện cần và đủ (Định lý Jordan-von Neumann) để một chuẩn được sinh ra từ một tích trong là nó phải thỏa mãn đẳng thức hình bình hành:
> $$2\|x\|^2 + 2\|y\|^2 = \|x+y\|^2 + \|x-y\|^2$$
> *(Tổng bình phương hai đường chéo bằng tổng bình phương bốn cạnh).*

> [!prf] 
> Ta khai triển trực tiếp vế phải:
> $\|x+y\|^2 + \|x-y\|^2 = \langle x+y, x+y \rangle + \langle x-y, x-y \rangle$
> $= (\langle x,x \rangle + \langle x,y \rangle + \langle y,x \rangle + \langle y,y \rangle) + (\langle x,x \rangle - \langle x,y \rangle - \langle y,x \rangle + \langle y,y \rangle)$
> $= 2\langle x,x \rangle + 2\langle y,y \rangle = 2\|x\|^2 + 2\|y\|^2$.

**Phản ví dụ 1: Không gian không Hilbert ($\ell^p$ với $p \ne 2$)**
Xét không gian $\ell^p$. Chọn $x = (1,1,0,\dots)$ và $y = (1,-1,0,\dots)$.
Ta có $\|x\|_p = (1^p + 1^p)^{1/p} = 2^{1/p}$ và $\|y\|_p = (1^p + |-1|^p)^{1/p} = 2^{1/p}$.
$x+y = (2,0,\dots) \Rightarrow \|x+y\|_p = 2$.
$x-y = (0,2,\dots) \Rightarrow \|x-y\|_p = 2$.
Nếu $\ell^p$ là không gian Hilbert, nó phải thỏa đẳng thức hình bình hành:
$2(2^{2/p}) + 2(2^{2/p}) = 2^2 + 2^2 \Leftrightarrow 4 \cdot 2^{2/p} = 8 \Leftrightarrow 2^{2/p} = 2 \Leftrightarrow p=2$. 
Vậy với $p \ne 2$, $\ell^p$ không phải là không gian Hilbert.

**Phản ví dụ 2: $C([0,1])$ với chuẩn $L^2$ không đầy đủ**
Chuẩn $L^2$ trên $C([0,1])$ được sinh bởi tích trong. Tuy nhiên nó không đầy đủ.
Xét dãy hàm $f_n(x)$ liên tục: $1$ trên $[0, 1/2]$, dốc xuống $0$ trên $[1/2, 1/2 + 1/(2n)]$, và bằng $0$ trên phần còn lại. 
Dãy $(f_n)$ này là dãy Cauchy trong chuẩn $L^2$ (do diện tích phần chênh lệch $\le \frac{1}{3N} \to 0$). Tuy nhiên, giới hạn của nó là hàm bậc thang (không liên tục), tức là $f \notin C([0,1])$. Vậy không gian này không đầy đủ nên không phải không gian Hilbert.

> [!thm] 
> $|\langle x, y \rangle| \le \|x\| \|y\|$. (Dấu "=" xảy ra khi và chỉ khi x, y phụ thuộc tuyến tính).

> [!prf] 
> Ý tưởng hình học: Xét phần dư khi chiếu $x$ lên $y$. Vectơ $x - \frac{\langle x,y \rangle}{\|y\|^2}y$ vuông góc với $y$.
> Xét độ dài bình phương của vectơ dư này (trên trường phức):
> $\|x - \frac{\langle x,y \rangle}{\|y\|^2}y\|^2 \ge 0$
> $\Leftrightarrow \langle x - \frac{\langle x,y \rangle}{\|y\|^2}y, x - \frac{\langle x,y \rangle}{\|y\|^2}y \rangle \ge 0$
> $\Leftrightarrow \|x\|^2 - \frac{\overline{\langle x,y \rangle}}{\|y\|^2}\langle x,y \rangle - \frac{\langle x,y \rangle}{\|y\|^2}\langle y,x \rangle + \frac{|\langle x,y \rangle|^2}{\|y\|^4}\|y\|^2 \ge 0$
> $\Leftrightarrow \|x\|^2 - \frac{|\langle x,y \rangle|^2}{\|y\|^2} \ge 0 \Rightarrow |\langle x,y \rangle| \le \|x\|\|y\|$.

## 2. Phép chiếu vuông góc (Orthogonal Projection)

Nhờ tích trong, ta định nghĩa được sự vuông góc: $x \perp y \Leftrightarrow \langle x, y \rangle = 0$. 
Hệ quả lập tức là **Định lý Pythagore**: Nếu $x \perp y$ thì $\|x+y\|^2 = \|x\|^2 + \|y\|^2$. (Quy nạp lên, đúng cho $n$ vectơ trực giao).

Tập trực giao của $S \subset H$ là $S^\perp = \{x \in H \mid x \perp y, \forall y \in S\}$. Do tính liên tục của tích trong (Mệnh đề 4.1.7), $S^\perp$ luôn là một không gian con **đóng**.

Sự ưu việt của không gian Hilbert thể hiện ở Định lý sau, cho phép ta "hạ đường vuông góc" từ một điểm xuống một không gian bất kỳ.

> [!thm] Định lý (Sự tồn tại của phép chiếu vuông góc)
> Cho $M$ là một không gian vectơ con **đóng** của không gian Hilbert $H$. Với mọi $x \in H$, có duy nhất $y \in M$ sao cho $(x-y) \perp M$. Ta ký hiệu $y = P_Mx$ là hình chiếu vuông góc của $x$ xuống $M$. Hình chiếu này cũng chính là điểm trên $M$ gần $x$ nhất: $\|x - P_Mx\| = \inf_{m \in M} \|x-m\| = d(x, M)$.

> [!prf] 
> **1. Sự tồn tại (Dùng Đẳng thức Hình bình hành và tính Đầy đủ):**
> Đặt $d = \inf \{ \|x-m\| \mid m \in M \}$. Theo tính chất của infimum, tồn tại dãy $(y_n) \subset M$ sao cho $\|x-y_n\| \to d$.
> Ta cần chứng minh $(y_n)$ là dãy Cauchy. Áp dụng đẳng thức hình bình hành cho 2 vectơ $(x-y_n)$ và $(x-y_m)$:
> $2\|x-y_n\|^2 + 2\|x-y_m\|^2 = \|(x-y_n) + (x-y_m)\|^2 + \|(x-y_n) - (x-y_m)\|^2$
> $\Rightarrow \|y_m-y_n\|^2 = 2\|x-y_n\|^2 + 2\|x-y_m\|^2 - 4\|x - \frac{y_n+y_m}{2}\|^2$.
> Vì $M$ là không gian vectơ, $\frac{y_n+y_m}{2} \in M$, do đó $\|x - \frac{y_n+y_m}{2}\| \ge d$.
> $\Rightarrow \|y_m-y_n\|^2 \le 2\|x-y_n\|^2 + 2\|x-y_m\|^2 - 4d^2$.
> Khi $m, n \to \infty$, vế phải tiến về $2d^2 + 2d^2 - 4d^2 = 0$. Vậy $(y_n)$ là dãy Cauchy.
> Vì $M$ là không gian con đóng trong không gian Hilbert (đầy đủ), $M$ cũng đầy đủ. Do đó dãy $(y_n)$ hội tụ về $y \in M$. Rõ ràng $\|x-y\| = d$.
> 
> **2. Chứng minh $(x-y) \perp M$:**
> Với mọi $w \in M$ và $t \in \mathbb{R}$: $\|x-y\|^2 \le \|x - (y - tw)\|^2$ (vì $y-tw \in M$).
> Khai triển: $\|x-y\|^2 \le \|x-y\|^2 + 2t\mathfrak{R}\langle x-y, w \rangle + t^2\|w\|^2$.
> $\Rightarrow t^2\|w\|^2 + 2t\mathfrak{R}\langle x-y, w \rangle \ge 0 \quad \forall t \in \mathbb{R}$.
> Đa thức bậc 2 theo $t$ luôn không âm $\Leftrightarrow$ biệt thức $\Delta \le 0 \Leftrightarrow \mathfrak{R}\langle x-y, w \rangle = 0$.
> Thay $t$ bởi $it$, lập luận tương tự ta có $\mathfrak{S}\langle x-y, w \rangle = 0$. Vậy $\langle x-y, w \rangle = 0$, suy ra $(x-y) \perp M$.
> 
> **3. Tính duy nhất:** > Giả sử có $y_1, y_2 \in M$ thỏa mãn tính vuông góc. Ta có $(x-y_1) \perp M$ và $(x-y_2) \perp M$.
> Trừ hai vế, ta được $(y_1 - y_2) \perp M$. 
> Nhưng $(y_1 - y_2) \in M$, nên nó phải vuông góc với chính nó: $\langle y_1-y_2, y_1-y_2 \rangle = 0 \Rightarrow y_1 = y_2$.

**Sự cố khi $M$ không đóng:**
Nếu $M$ không đóng, hình chiếu có thể không tồn tại. Ví dụ trong $\ell^2$, xét $M = c_{00}$ (dãy có hữu hạn phần tử khác 0). Chọn $x = (1, 1/2, 1/3, \dots, 1/n, \dots) \in \ell^2 \setminus M$. 
Khoảng cách $d(x, M) = 0$ (vì ta có thể chặt cụt dãy $x$ để tạo ra dãy trong $c_{00}$ hội tụ về $x$). Nhưng không tồn tại bất kỳ $m \in c_{00}$ nào để $\|x-m\| = 0$, vì nếu có thì $x = m \in c_{00}$ (vô lý vì $x$ có vô hạn phần tử). Vậy không thể chiếu $x$ xuống $M$.

> [!thm] Hệ quả: Phân tích Trực giao (Mệnh đề 4.2.5)
> Nhờ phép chiếu, ta có thể "xẻ" không gian Hilbert thành hai nửa hoàn toàn độc lập:
> $H = M \oplus M^\perp$.
> Mọi $x \in H$ đều phân tích duy nhất thành $x = P_Mx + P_{M^\perp}x$.
> Theo định lý Pythagore: $\|x\|^2 = \|P_Mx\|^2 + \|P_{M^\perp}x\|^2$.

## 3. Định lý Biểu Diễn Riesz: Hình Học Hóa Phiếm Hàm

Nhờ phân tích trực giao, ta giải quyết triệt để bản chất của phiếm hàm tuyến tính liên tục. Định lý Riesz khẳng định: **Mọi phiếm hàm (siêu phẳng) đều được định hình bởi đúng một vectơ pháp tuyến.**

Đầu tiên, ta cần một dẫn nhập cực kỳ quan trọng về nhân của phiếm hàm.

> [!thm] Dẫn nhập (Hạt nhân của phiếm hàm)
> Cho $f: H \to \mathbb{F}$ là phiếm hàm tuyến tính liên tục, $f \not\equiv 0$. Tồn tại $x \notin \ker(f)$. Khi đó:
> 1. $\ker(f) = \{z \in H \mid f(z) = 0\}$ là không gian con **đóng** (vì $f$ liên tục và $\{0\}$ đóng).
> 2. $\ker(f)$ chỉ kém $H$ đúng 1 chiều: $H = \ker(f) + \langle x \rangle$.
> *(Chứng minh: Với mọi $y \in H$, ta phân tích $y = (y - \frac{f(y)}{f(x)}x) + \frac{f(y)}{f(x)}x$. Phần trong ngoặc thuộc $\ker(f)$ vì $f(y - \frac{f(y)}{f(x)}x) = f(y) - f(y) = 0$.)*

> [!thm] Định lý Biểu diễn Riesz (Riesz Representation Theorem)
> Cho không gian Hilbert $H$ trên trường $\mathbb{F}$. Với phiếm hàm tuyến tính liên tục $f: H \to \mathbb{F}$ bất kỳ, tồn tại **duy nhất** $y \in H$ sao cho:
> $$f(x) = \langle x, y \rangle \quad \forall x \in H$$
> Hơn nữa, chuẩn được bảo toàn tuyệt đối: $\|f\|_{H^*} = \|y\|_H$.

> [!prf] 
> Nếu $f \equiv 0$, chọn $y = 0$, định lý hiển nhiên đúng. Giả sử $f \not\equiv 0$.
> Vì $\ker(f)$ là không gian con đóng, ta có phân tích trực giao $H = \ker(f) \oplus \ker(f)^\perp$.
> Do $\ker(f)$ kém $H$ đúng 1 chiều, $\ker(f)^\perp$ là không gian một chiều.
> Chọn một vectơ đơn vị $v \in \ker(f)^\perp$ (nghĩa là $\|v\|=1$ và $f(v) \ne 0$).
> Theo dẫn nhập, với mọi $x \in H$, ta có vectơ $x - \frac{f(x)}{f(v)}v \in \ker(f)$.
> Vì nó thuộc $\ker(f)$, nó phải vuông góc với $v \in \ker(f)^\perp$. Lấy tích trong hai bên với $v$:
>   $\langle x - \frac{f(x)}{f(v)}v, v \rangle = 0$
>   $\Leftrightarrow \langle x, v \rangle - \frac{f(x)}{f(v)}\langle v, v \rangle = 0$
>   $\Leftrightarrow \langle x, v \rangle = \frac{f(x)}{f(v)}$ (do $\|v\|^2 = 1$).
> Rút $f(x)$ ra, ta được: $f(x) = f(v)\langle x, v \rangle = \langle x, \overline{f(v)}v \rangle$.
> Vậy tồn tại vectơ $y = \overline{f(v)}v$ thỏa mãn $f(x) = \langle x, y \rangle$.
> 
> **Tính duy nhất:** Giả sử có $y_1, y_2$ cùng biểu diễn $f$. 
> $\langle x, y_1 \rangle = \langle x, y_2 \rangle \Rightarrow \langle x, y_1 - y_2 \rangle = 0 \quad \forall x \in H$.
> Chọn $x = y_1 - y_2$, ta có $\|y_1 - y_2\|^2 = 0 \Rightarrow y_1 = y_2$.
> 
> **Tính bảo toàn chuẩn:** Theo Mệnh đề 4.1.7, phiếm hàm sinh bởi tích trong $T(x) = \langle x, y \rangle$ luôn có chuẩn $\|T\| = \|y\|$. Vậy $\|f\| = \|y\|$.

**Ứng dụng Riesz:**
- Trong $\ell^2$: Mọi phiếm hàm $f(x)$ đều có dạng $\sum_{i=1}^\infty x_i \overline{a_i}$ với duy nhất một dãy $a = (a_i) \in \ell^2$. Chuẩn $\|f\| = \|a\|_2$.
- Trong $L^2(\Omega)$: Mọi phiếm hàm $S(f)$ đều có dạng $\int_\Omega f(t)\overline{g(t)}dt$ với duy nhất một hàm $g \in L^2(\Omega)$. Chuẩn $\|S\| = \|g\|_2$.

## 4. Sự Thống Nhất: Hahn-Banach Bị Khóa Chặt Trong Hilbert

Định lý Hahn-Banach trong không gian Banach bình thường nói rằng một phiếm hàm mở rộng bảo toàn chuẩn **không nhất thiết duy nhất**. 

Nhưng, khi ta đưa nó vào không gian Hilbert, Định lý Riesz và phép chiếu vuông góc đã kết hợp lại để "khóa chặt" phiếm hàm này. Mọi "góc nhọn" của quả cầu đơn vị biến mất, và mặt phẳng tựa (supporting hyperplane) chỉ có đúng duy nhất một điểm chạm, vuông góc hoàn toàn với vectơ pháp tuyến.

> [!thm] Mệnh đề: Sự duy nhất của Hahn-Banach trong không gian Hilbert
> Cho $M$ là không gian vectơ con **đóng** trong không gian Hilbert $H$ và phiếm hàm $f \in M^*$. Khi đó, tồn tại **duy nhất** phiếm hàm mở rộng Hahn-Banach của $f$ từ $M$ lên $H$.

> [!prf] 
> Vì $M$ đóng trong không gian Hilbert đầy đủ $H$, bản thân $M$ cũng là một không gian Hilbert.
> Áp dụng **Định lý Riesz** cho $f \in M^*$, tồn tại duy nhất một vectơ $u \in M$ sao cho:
>    $f(x) = \langle x, u \rangle \quad \forall x \in M$, và $\|f\|_M = \|u\|$.
> Áp dụng **Định lý Hahn-Banach**, tồn tại phiếm hàm mở rộng $g \in H^*$ sao cho $g|_M = f$ và bảo toàn chuẩn $\|g\|_H = \|f\|_M$.
> Vì $g$ là phiếm hàm tuyến tính liên tục trên toàn $H$, áp dụng lại **Định lý Riesz** cho $g$, tồn tại duy nhất vectơ $v \in H$ sao cho:
>    $g(x) = \langle x, v \rangle \quad \forall x \in H$, và $\|g\|_H = \|v\|$.
> **Bây giờ ta khóa chặt $v$ vào $u$:** >    Với mọi $m \in M$, ta có $\langle m, u \rangle = f(m) = g(m) = \langle m, v \rangle$.
>    Suy ra $\langle m, u - v \rangle = 0 \Rightarrow (u - v) \perp M$, hay nói cách khác $(u - v) \in M^\perp$.
> Ta phân tích vectơ $v = u + (v - u)$. 
>    Vì $u \in M$ và $(v - u) \in M^\perp$, hai vectơ này trực giao. Áp dụng **Định lý Pythagore**:
>    $\|v\|^2 = \|u\|^2 + \|u - v\|^2$.
> Khai thác tính bảo toàn chuẩn của Hahn-Banach: $\|v\| = \|g\| = \|f\| = \|u\|$.
>    Thay vào đẳng thức Pythagore: $\|u\|^2 = \|u\|^2 + \|u - v\|^2 \Rightarrow \|u - v\|^2 = 0 \Rightarrow u = v$.
> 
> **Kết luận:** Vectơ $v$ đại diện cho phiếm hàm mở rộng trên $H$ bắt buộc phải trùng khít với vectơ $u$ ban đầu nằm trên $M$. Vậy mở rộng Hahn-Banach là duy nhất!

**Ví dụ minh họa tính toán (HK2/2022-2023):**
Cho $X = \{(x,3x) \in \mathbb{R}^2\}$ (không gian con đóng) và $f(x,y) = x$ trên $X$.
Tìm mở rộng Hahn-Banach $g$ trên $\mathbb{R}^2$.
- Dùng Riesz trên $X$: Tìm $v$ sinh ra $X$. Vectơ đơn vị là $e_1 = (1/\sqrt{10}, 3/\sqrt{10})$. $f(e_1) = 1/\sqrt{10}$.
- Vectơ biểu diễn trên $X$: $u = f(e_1)e_1 = (1/10, 3/10) \in X$.
- Mở rộng Hahn-Banach duy nhất trên $\mathbb{R}^2$ chính là lấy tích trong với chính vectơ $u$ này: 
  $g(x,y) = \langle (x,y), (1/10, 3/10) \rangle = \frac{x}{10} + \frac{3y}{10}$.
Bạn có thể dễ dàng thử lại: tại điểm $(x, 3x) \in X$, $g(x, 3x) = x/10 + 9x/10 = x = f(x,3x)$.
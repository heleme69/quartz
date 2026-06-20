# Định lý Hahn–Banach và Định lý Riesz: Góc nhìn Hình học

## Phần I — Nền tảng: Phiếm hàm, Không gian đối ngẫu và Hình học Quả cầu

Trước khi xây dựng các kết quả mở rộng (Hahn–Banach) hay biểu diễn (Riesz), ta cần làm vững chắc các đối tượng sẽ thao tác xuyên suốt: phiếm hàm tuyến tính liên tục, không gian đối ngẫu, và đặc biệt là hình dáng hình học của quả cầu đơn vị — vì chính hình dáng đó quyết định tính duy nhất hay không của mọi mở rộng sau này.

### 1.1 Chuẩn, Quả cầu đơn vị và Phiếm hàm tuyến tính

> [!def] Chuẩn và Quả cầu đơn vị đóng
> Cho $E$ là không gian vectơ. **Chuẩn** (norm) $\|\cdot\|$ là hàm đo độ dài vectơ. **Quả cầu đơn vị đóng** là
> $$B_E = \{x \in E \mid \|x\| \le 1\}.$$
> $B_E$ luôn là tập lồi và đối xứng qua gốc tọa độ. Hình dáng của nó phụ thuộc hoàn toàn vào chuẩn: trong không gian Hilbert nó là hình cầu trơn tròn; trong không gian $\ell^1$ nó là hình thoi với các góc nhọn; trong không gian $\ell^\infty$ nó là hình khối vuông.

> [!def] Phiếm hàm tuyến tính và Không gian đối ngẫu
> **Phiếm hàm tuyến tính** là ánh xạ $f: E \to \mathbb{F}$ (với $\mathbb{F} = \mathbb{R}$ hoặc $\mathbb{C}$) bảo toàn phép cộng và nhân vô hướng:
> $$f(\alpha x + \beta y) = \alpha f(x) + \beta f(y) \quad \forall x, y \in E,\ \forall \alpha, \beta \in \mathbb{F}.$$
> Trong không gian vô hạn chiều, ta quan tâm đến các phiếm hàm **liên tục** (tương đương với tính bị chặn). **Không gian đối ngẫu** $E^*$ là tập tất cả phiếm hàm tuyến tính liên tục trên $E$, trang bị chuẩn toán tử
> $$\|f\| = \sup_{x \ne 0} \frac{|f(x)|}{\|x\|} = \sup_{\|x\| \le 1} |f(x)|.$$
> $E^*$ luôn là một không gian Banach (dù $E$ có thể không đầy đủ).

### 1.2 Siêu phẳng mức và ý nghĩa của chuẩn toán tử

Mỗi phiếm hàm $f \in E^* \setminus \{0\}$ xác định một họ siêu phẳng song song — các **tập mức** (level sets):
$$H_\alpha = \{x \in E \mid f(x) = \alpha\}, \quad \alpha \in \mathbb{R}.$$
Các siêu phẳng này "thái lát" không gian $E$ thành vô số lớp song song. Câu hỏi quan trọng là: các lớp đó dày hay thưa? Câu trả lời chính xác được cho bởi mệnh đề sau.

> [!prp] Khoảng cách giữa các siêu phẳng mức
> Khoảng cách hình học từ $H_0$ đến $H_1 = \{x \mid f(x) = 1\}$ bằng
> $$d(H_0, H_1) = \frac{1}{\|f\|}.$$

> [!prf]
> Theo định nghĩa khoảng cách từ gốc tọa độ $0 \in H_0$:
> $$d(H_0, H_1) = \inf_{x \in H_1} \|x\| = \inf_{f(x)=1} \|x\|.$$
> **Chặn dưới.** Với mọi $x \in H_1$, tức $f(x) = 1$, tính bị chặn cho $1 = |f(x)| \le \|f\|\cdot\|x\|$, suy ra $\|x\| \ge 1/\|f\|$. Do đó $\inf_{f(x)=1}\|x\| \ge 1/\|f\|$.
>
> **Đạt chặn dưới.** Theo định nghĩa chuẩn toán tử, với mọi $\varepsilon > 0$ tồn tại $x_\varepsilon \ne 0$ sao cho $|f(x_\varepsilon)| > (\|f\| - \varepsilon)\|x_\varepsilon\|$. Đặt $z_\varepsilon = x_\varepsilon / f(x_\varepsilon)$, thì $f(z_\varepsilon) = 1$ và
> $$\|z_\varepsilon\| = \frac{\|x_\varepsilon\|}{|f(x_\varepsilon)|} < \frac{1}{\|f\| - \varepsilon}.$$
> Cho $\varepsilon \to 0^+$ ta được $\inf_{f(x)=1}\|x\| \le 1/\|f\|$. Vậy $d(H_0, H_1) = 1/\|f\|$.

Ý nghĩa hình học của mệnh đề này rất rõ ràng: $\|f\|$ càng lớn, các siêu phẳng mức xếp càng **dày đặc** — chỉ cần dịch chuyển một đoạn ngắn trong $B_E$, giá trị $f(x)$ đã tăng vọt qua nhiều lớp. Ngược lại, $\|f\|$ nhỏ có nghĩa là phiếm hàm **biến thiên chậm**, các lớp mức trải rộng thưa thớt.

### 1.3 Siêu phẳng tựa và quả cầu đơn vị

Hai siêu phẳng $H_{\|f\|}^+ = \{x \mid f(x) = \|f\|\}$ và $H_{\|f\|}^- = \{x \mid f(x) = -\|f\|\}$ đóng vai trò đặc biệt: chúng là hai vách ngăn **kẹp chặt** quả cầu đơn vị $B_E$.

> [!prp] Tính tựa của siêu phẳng ranh giới
> Hai siêu phẳng $H_{\|f\|}^\pm$ tiếp xúc với biên $\partial B_E$ nhưng không bao giờ cắt vào nội tâm của $B_E$.

> [!prf]
> Ta chứng minh cho $H_{\|f\|}^+$, trường hợp $H_{\|f\|}^-$ hoàn toàn tương tự.
>
> *Không cắt vào trong.* Với mọi $x \in \operatorname{int}(B_E)$, tức $\|x\| < 1$, ta có $f(x) \le |f(x)| \le \|f\|\cdot\|x\| < \|f\|$. Vậy không điểm nào trong nội tâm $B_E$ thuộc $H_{\|f\|}^+$.
>
> *Tiếp xúc tại biên.* Theo định nghĩa chuẩn toán tử, $\|f\| = \sup_{\|x\| \le 1} f(x)$. Do đó tồn tại (hoặc được tiệm cận bởi) vectơ $x_0 \in \partial B_E$ (tức $\|x_0\| = 1$) sao cho $f(x_0) = \|f\|$. Điểm $x_0$ vừa nằm trên biên quả cầu, vừa thuộc $H_{\|f\|}^+$. Đây là điểm tiếp xúc hình học.

Kết cục: mỗi phiếm hàm $f$ tương ứng với một cặp "tấm ván" siêu phẳng kẹp lấy quả cầu đơn vị mà không cắt sâu vào bên trong. Toàn bộ bài toán mở rộng Hahn–Banach sau này chính là bài toán: **kéo dài những tấm ván đó sang các chiều không gian mới mà không làm chúng chọc thủng quả cầu.**

### 1.4 Tính không duy nhất: Góc nhọn và tấm ván bập bênh

Khi ta mở rộng phiếm hàm từ không gian con $M$ lên $E$, bản chất hình học là kéo dài siêu phẳng tựa của $B_M = B_E \cap M$ thành siêu phẳng tựa của $B_E$.

Tính duy nhất hay không của mở rộng phụ thuộc trực tiếp vào **độ trơn của biên** $\partial B_E$ tại điểm tiếp xúc:

- **Quả cầu trơn (không gian Hilbert).** Tại mỗi điểm $x_0 \in \partial B_E$, biên là mặt trơn — chỉ tồn tại đúng một mặt phẳng tiếp tuyến, vectơ pháp tuyến bị khóa cứng. Mở rộng Hahn–Banach **duy nhất**.
- **Quả cầu có góc nhọn (chuẩn $\ell^1$, $\ell^\infty$,...).** Tại đỉnh nhọn của quả cầu, biên không trơn — có cả một *chùm* các siêu phẳng tựa đều hợp lệ, giống như cái tấm ván bập bênh đặt lên một điểm nhọn mà không bị ngã về phía nào. Sinh ra **vô số mở rộng bảo toàn chuẩn**.

Ví dụ sau đây minh họa hiện tượng không duy nhất bằng một ví dụ tường minh đại số.

> [!exm] Tính không duy nhất của mở rộng tại điểm không trơn
> Xét $X = \mathbb{R}^2$ với chuẩn $\|(x,y)\|_1 = |x| + |y|$ và không gian con $M = \{(x,0) \mid x \in \mathbb{R}\}$. Phiếm hàm $f: M \to \mathbb{R}$ xác định bởi $f(x,0) = x$ có chuẩn $\|f\|_{M^*} = 1$ và có **vô số** phiếm hàm mở rộng $F \in X^*$ thỏa $F|_M = f$, $\|F\|_{X^*} = 1$.

> [!prf]
> **Bước 1: Tính chuẩn của $f$ trên $M$.**
> Với $(x,0) \in M$, ta có $\|(x,0)\|_1 = |x|$ và $|f(x,0)| = |x|$, nên $|f(x,0)| = \|(x,0)\|_1$ với mọi phần tử. Suy ra
> $$\|f\| = \sup_{(x,0)\ne 0} \frac{|f(x,0)|}{\|(x,0)\|_1} = 1.$$
> Điểm chạm biên là $x_0 = (1,0)$, tại đó $f(1,0) = 1 = \|f\|$.
>
> **Bước 2: Xây dựng họ mở rộng.**
> Để mở rộng $f$ lên $X = \mathbb{R}^2$, ta cần xác định thêm giá trị tại vectơ $e_2 = (0,1)$ độc lập tuyến tính với $M$. Đặt $F(0,1) = a \in \mathbb{R}$. Tính tuyến tính bắt buộc:
> $$F_a(x,y) = F(x,0) + yF(0,1) = x + ay.$$
>
> **Bước 3: Điều kiện bảo toàn chuẩn.**
> $\|F_a\| = 1$ tương đương với $|x + ay| \le |x| + |y|$ với mọi $(x,y) \in \mathbb{R}^2$.
>
> *Chiều thuận.* Nếu $\|F_a\| = 1$, thử tại $(0,1)$: $|a| = |F_a(0,1)| \le \|(0,1)\|_1 = 1$, nên $a \in [-1,1]$.
>
> *Chiều nghịch.* Giả sử $|a| \le 1$. Với mọi $(x,y)$:
> $$|F_a(x,y)| = |x + ay| \le |x| + |a||y| \le |x| + |y| = \|(x,y)\|_1,$$
> nên $\|F_a\| \le 1$. Tại điểm $(1,0)$: $|F_a(1,0)| = 1 = \|(1,0)\|_1$, nên $\|F_a\| = 1$.
>
> **Bước 4: Kiểm tra thu hẹp.**
> Với mọi $(x,0) \in M$: $F_a(x,0) = x + a \cdot 0 = x = f(x,0)$. $\checkmark$
>
> **Kết luận.** Với mỗi $a \in [-1,1]$ ta được một mở rộng $F_a$ hợp lệ. Vì $[-1,1]$ có vô số phần tử, tồn tại vô số mở rộng bảo toàn chuẩn.

## Phần II — Bài toán Mở rộng: Từ Hình học đến Định lý Hahn–Banach

### 2.1 Tập lồi, Siêu phẳng tách và Phiếm hàm Minkowski

> [!def] Tập lồi và Siêu phẳng tách
> Tập $C$ là **lồi** nếu đoạn thẳng nối hai điểm bất kỳ của nó nằm trọn trong $C$:
> $$\forall x, y \in C,\ t \in [0,1]: \quad (1-t)x + ty \in C.$$
> Quả cầu đơn vị đóng $B_E$ luôn là tập lồi.
>
> Siêu phẳng đóng $H_\alpha = f^{-1}(\alpha)$ **tách** hai tập lồi $A$ và $B$ nếu $A$ và $B$ nằm về hai phía của nó, tức là tồn tại $f \in E^*$ và $\alpha \in \mathbb{R}$ sao cho
> $$f(x) \le \alpha \le f(y) \quad \forall x \in A,\ y \in B.$$

> [!thm] Dạng hình học của Hahn–Banach (Định lý phân tách)
> Cho $A, B$ là hai tập lồi không rỗng, rời nhau trong không gian định chuẩn thực $X$, với ít nhất một tập là mở. Khi đó tồn tại $f \in X^*$ và $\alpha \in \mathbb{R}$ phân tách $A$ và $B$:
> $$f(x) \le \alpha \le f(y) \quad \forall x \in A,\ y \in B.$$

Công cụ đại số hóa trực giác hình học "đo độ phình của tập lồi" là phiếm hàm Minkowski.

> [!lem] Phiếm hàm Minkowski
> Cho $C$ là tập lồi, mở, chứa $0$. Hàm
> $$p(x) = \inf\{\alpha > 0 \mid \alpha^{-1}x \in C\}$$
> thỏa mãn: 
> 
> (i) thuần nhất dương: $p(\lambda x) = \lambda p(x)$ với $\lambda > 0$; 
> 
> (ii) lồi: $p(x+y) \le p(x) + p(y)$; 
> 
> (iii) tính chất đặc trưng: $x \in C \Leftrightarrow p(x) < 1$.

> [!lem] Tách điểm khỏi tập lồi
> Cho $C \subsetneq E$ là tập lồi, mở, và $x_0 \in E \setminus C$. Tồn tại $f \in E^*$ sao cho $f(x) < f(x_0)$ với mọi $x \in C$.

### 2.2 Ý nghĩa hình học của "bảo toàn chuẩn"

Điều kiện $\|T\| = 1$ tương đương với $|T(x)| \le \|x\|$ với mọi $x$. Mà $\|x\|$ chính là phiếm hàm Minkowski của $B_E$. Do đó:

**Mở rộng phiếm hàm bảo toàn chuẩn** = kéo dài siêu phẳng tựa ra các chiều không gian mới sao cho nó vẫn **kẹp** quả cầu đơn vị — tiếp xúc biên mà không bao giờ cắt vào trong.

### 2.3 Mở rộng trên không gian con trù mật

Nếu $M$ đã trù mật trong $E$, siêu phẳng gần như được định hình đầy đủ bởi $M$, ta chỉ cần lấy giới hạn.

> [!prp] Thu hẹp
> Nếu $T \in \mathcal{L}(E, F)$ và $M \subset E$, thì $T|_M$ liên tục và $\|T|_M\| \le \|T\|$.

> [!prf]
> Tính tuyến tính của $T|_M$ hiển nhiên. Tính bị chặn: với $x \in M$, $\|T|_M(x)\| = \|Tx\| \le \|T\|\|x\|$. Chuẩn: $\|T|_M\| = \sup_{\|x\|_M < 1}\|Tx\| \le \sup_{\|x\|_E < 1}\|Tx\| = \|T\|$.

> [!thm] Mở rộng duy nhất qua không gian con trù mật
> Cho $M$ trù mật trong $E$ và $T \in M^*$. Tồn tại duy nhất $S \in E^*$ sao cho $S|_M = T$ và $\|S\| = \|T\|$.

> [!prf]
> *Tồn tại.* Với mọi $x \in E$, chọn dãy $(x_n) \subset M$, $x_n \to x$. Vì $\|Tx_m - Tx_n\| \le \|T\|\|x_m - x_n\|$, dãy $(Tx_n)$ là Cauchy trong $\mathbb{F}$ đầy đủ, nên hội tụ. Đặt $Sx = \lim_{n\to\infty} Tx_n$. Giới hạn này không phụ thuộc vào dãy được chọn.
>
> *Bảo toàn chuẩn.* $\|Sx\| = \lim \|Tx_n\| \le \|T\|\lim\|x_n\| = \|T\|\|x\|$, nên $\|S\| \le \|T\|$. Kết hợp với mệnh đề thu hẹp, $\|S\| = \|T\|$.
>
> *Duy nhất.* Nếu $S, \tilde{S}$ đều mở rộng $T$, thì $f = S - \tilde{S}$ triệt tiêu trên $M$ trù mật. Với $x_n \to x$: $f(x) = \lim f(x_n) = 0$. Vậy $S \equiv \tilde{S}$.

## Phần III — Định lý Hahn–Banach

### 3.1 Phát biểu và Chứng minh

Khi $M$ không trù mật (không gian con "mỏng"), ta không thể đơn thuần lấy giới hạn. Ta cần một cơ chế mở rộng chiều-bởi-chiều, được đảm bảo tồn tại bởi Bổ đề Zorn.

> [!thm] Bổ đề Zorn
> Nếu một tập hợp không rỗng có thứ tự mà mọi tập con có thứ tự toàn phần đều bị chặn trên, thì tồn tại phần tử cực đại.

> [!thm] Định lý Hahn–Banach (Dạng đại số)
> Cho $M \subset E$ là không gian con và $T \in M^*$. Tồn tại $\tilde{T} \in E^*$ sao cho $\tilde{T}|_M = T$ và $\|\tilde{T}\| = \|T\|$.

> [!prf]
> **Trường hợp $\mathbb{F} = \mathbb{R}$.**
>
> *Bước 1: Mở rộng thêm 1 chiều.*
> Chọn $x_0 \in E \setminus M$ và đặt $E_1 = M + \langle x_0 \rangle = \{x + tx_0 \mid x \in M,\ t \in \mathbb{R}\}$. Mọi phần tử của $E_1$ có biểu diễn duy nhất. Ta cần hằng số $c = \tilde{T}(x_0)$ sao cho
> $$|\tilde{T}(x + tx_0)| = |Tx + tc| \le \|T\|\|x + tx_0\| \quad \forall x \in M,\ t \in \mathbb{R}.$$
> Xét riêng $t > 0$ (trường hợp $t < 0$ tương tự bằng đối xứng). Chia cho $t$ và thay $x_1 = x/t \in M$, điều kiện trở thành
> $$Tx_1 + c \le \|T\|\|x_1 + x_0\| \quad \text{và} \quad -Tx_1 - c \le \|T\|\|x_1 + x_0\|$$
> với mọi $x_1 \in M$. Tương đương:
> $$\sup_{x_1 \in M}\bigl(-\|T\|\|x_1 + x_0\| - Tx_1\bigr) \le c \le \inf_{x_2 \in M}\bigl(\|T\|\|x_2 + x_0\| - Tx_2\bigr).$$
> Ta cần xác nhận chặn dưới luôn $\le$ chặn trên. Với mọi $x_1, x_2 \in M$:
> $$T(x_2 - x_1) \le \|T\|\|x_2 - x_1\| = \|T\|\|(x_2 + x_0) - (x_1 + x_0)\| \le \|T\|\bigl(\|x_2 + x_0\| + \|x_1 + x_0\|\bigr),$$
> suy ra khe hở luôn tồn tại. Chọn $c$ bất kỳ trong khoảng đó, ta được mở rộng trên $E_1$ bảo toàn chuẩn.
>
> Về mặt hình học: đây chính là thao tác "chỉnh góc nghiêng" của tấm ván siêu phẳng khi ta thêm một chiều mới vào không gian — luôn có một góc nghiêng hợp lệ vì quả cầu đơn vị là lồi.
>
> *Bước 2: Dùng Bổ đề Zorn để mở rộng hoàn toàn.*
> Xét tập $\mathcal{C}$ các cặp $(A, S)$ với $M \subset A \subset E$, $S \in A^*$, $S|_M = T$ và $\|S\| = \|T\|$. Trang bị thứ tự $(A, S) \le (A', S')$ khi $A \subset A'$ và $S'|_A = S$. Với mọi xích toàn phần $\{(A_i, S_i)\}$, đặt $B = \bigcup A_i$ và $g(x) = S_i(x)$ khi $x \in A_i$ (định nghĩa tốt do tính nhất quán). Khi đó $(B, g)$ là chặn trên của xích.
>
> Theo Bổ đề Zorn, $\mathcal{C}$ có phần tử cực đại $(A_0, S_0)$. Nếu $A_0 \subsetneq E$, Bước 1 cho phép mở rộng $S_0$ sang không gian lớn hơn, mâu thuẫn với tính cực đại. Vậy $A_0 = E$ và $\tilde{T} = S_0$.
>
> **Trường hợp $\mathbb{F} = \mathbb{C}$.**
>
> Viết $T = u + iv$ với $u = \operatorname{Re}(T)$, $v = \operatorname{Im}(T)$. Từ $T(ix) = iT(x)$, ta có $u(ix) + iv(ix) = -v(x) + iu(x)$, suy ra $v(x) = -u(ix)$. Toàn bộ phiếm hàm phức được tái tạo từ phần thực:
> $$T(x) = u(x) - iu(ix).$$
> **Chuẩn phức = chuẩn thực.** Hiển nhiên $\|u\| \le \|T\|$. Ngược lại, với mọi $x$, chọn $\alpha = \overline{T(x)}/|T(x)|$ (pha đơn vị xoay $T(x)$ về trục thực), thì
> $$|T(x)| = \alpha T(x) = T(\alpha x) = u(\alpha x) \le \|u\|\|\alpha x\| = \|u\|\|x\|,$$
> suy ra $\|T\| \le \|u\|$. Vậy $\|T\| = \|u\|$.
>
> Áp dụng trường hợp thực để mở rộng $u$ thành $\tilde{u} \in E^*_{\mathbb{R}}$ với $\|\tilde{u}\| = \|u\|$. Đặt $\tilde{T}(x) = \tilde{u}(x) - i\tilde{u}(ix)$. Kiểm tra: $\tilde{T}$ tuyến tính phức (từ $\tilde{u}(ix) = \operatorname{Im}(-\tilde{T}(x))$ đảo lại), thu hẹp về $M$ cho đúng $T$, và $\|\tilde{T}\| = \|\tilde{u}\| = \|u\| = \|T\|$.

## Phần IV — Hệ quả của Hahn–Banach

Các hệ quả sau cho thấy $E^*$ chứa đủ lượng siêu phẳng để "chụp" lại toàn bộ hình dáng hình học của $E$.

> [!cor] Hệ quả 1 — Siêu phẳng tựa tại một điểm
> Với $x_0 \ne 0$, tồn tại $f \in E^*$ sao cho $\|f\| = 1$ và $f(x_0) = \|x_0\|$.
>
> *Ý nghĩa hình học:* Luôn có thể đặt một tấm ván siêu phẳng tựa vào quả cầu bán kính $\|x_0\|$ chính tại điểm $x_0$.

> [!prf]
> Trên không gian con $M = \langle x_0 \rangle$, đặt $g(tx_0) = t\|x_0\|$. Thì $|g(tx_0)| = |t|\|x_0\| = \|tx_0\|$, suy ra $\|g\| = 1$. Hahn–Banach mở rộng $g$ thành $f \in E^*$ với $\|f\| = 1$ và $f(x_0) = \|x_0\|$.

> [!cor] Hệ quả 2 — Phân tách hai điểm
> Nếu $x \ne y$ trong $E$, tồn tại $f \in E^*$ sao cho $f(x) \ne f(y)$.
>
> *Ý nghĩa hình học:* Với bất kỳ hai điểm phân biệt nào, ta luôn tìm được siêu phẳng ngăn cách chúng.

> [!prf]
> Đặt $u = x - y \ne 0$. Theo Hệ quả 1, có $f$ với $f(u) = \|u\| \ne 0$. Do tuyến tính, $f(x) - f(y) = f(u) \ne 0$.

> [!cor] Hệ quả 3 — Tính chuẩn qua đối ngẫu
> $\displaystyle\|x\| = \sup\{|f(x)| \mid f \in E^*,\ \|f\| = 1\}$.
>
> *Ý nghĩa hình học:* Độ dài của vectơ $x$ chính là khoảng cách lớn nhất từ gốc tọa độ đến các siêu phẳng tựa bao quanh nó.

> [!prf]
> Với mọi $f$ có $\|f\| = 1$: $|f(x)| \le \|f\|\|x\| = \|x\|$, suy ra $\sup |f(x)| \le \|x\|$. Theo Hệ quả 1, tồn tại $f_0$ có chuẩn 1 với $f_0(x) = \|x\|$, nên đẳng thức đạt được.

## Phần V — Không gian Hilbert và Nền tảng Hình học Euclid

### 5.1 Tích trong và Cấu trúc hình học

Định lý Hahn–Banach trong không gian Banach tổng quát cho mở rộng không nhất thiết duy nhất — quả cầu đơn vị có thể có góc nhọn. Khi ta trang bị **tích trong**, quả cầu trở nên hoàn toàn trơn, và mọi không rõ ràng biến mất.

> [!def] Tích trong và Không gian Hilbert
> Trên không gian vectơ $H$ (trường $\mathbb{F}$), **tích trong** $\langle\cdot,\cdot\rangle : H \times H \to \mathbb{F}$ thỏa mãn:
>
> 1. Tuyến tính theo biến thứ nhất: $\langle \alpha x + \beta y, z\rangle = \alpha\langle x,z\rangle + \beta\langle y,z\rangle$.
> 2. Đối xứng Hermitian: $\langle x,y\rangle = \overline{\langle y,x\rangle}$ (trên $\mathbb{R}$: đối xứng thực).
> 3. Xác định dương: $\langle x,x\rangle \ge 0$ và $\langle x,x\rangle = 0 \Leftrightarrow x = 0$.
>
> Tích trong sinh ra chuẩn $\|x\| = \langle x,x\rangle^{1/2}$. Không gian tích trong **đầy đủ** đối với chuẩn này gọi là **không gian Hilbert**.

> [!prp] Tính chất đường chéo hình chữ nhật
> Cho $H$ là một không gian tích trong và $x, y \in H$. Nếu $x \perp y$ thì:
> $$\|x + y\| = \|x - y\|$$

> [!prf]
> Vì $x \perp y$ nên theo định nghĩa ta có $\langle x, y \rangle = 0$ (và do đó $\langle y, x \rangle = \overline{\langle x, y \rangle} = 0$). 
> Khai triển bình phương chuẩn của tổng và hiệu thông qua tích trong:
> * $\|x + y\|^2 = \langle x+y, x+y \rangle = \|x\|^2 + \langle x,y \rangle + \langle y,x \rangle + \|y\|^2 = \|x\|^2 + \|y\|^2$
> * $\|x - y\|^2 = \langle x-y, x-y \rangle = \|x\|^2 - \langle x,y \rangle - \langle y,x \rangle + \|y\|^2 = \|x\|^2 + \|y\|^2$
> 
> Từ hai điều trên suy ra $\|x + y\|^2 = \|x - y\|^2$. Lấy căn bậc hai hai vế, ta được $\|x + y\| = \|x - y\|$. 

*Ý nghĩa hình học:* Trong một không gian hình học phẳng, nếu hai vectơ $x$ và $y$ vuông góc với nhau, chúng sẽ tạo thành hai cạnh kề của một hình chữ nhật. Khi đó hệ thức $\|x + y\| = \|x - y\|$ khẳng định rằng hai đường chéo của một hình chữ nhật thì có độ dài bằng nhau**.

> [!prp] Đẳng thức phân cực (Polarization Identity)
> Nếu chuẩn $\|\cdot\|$ trên không gian định chuẩn thực $H$ được sinh bởi một tích trong $\langle \cdot, \cdot \rangle$, thì tích trong đó có thể tính hoàn toàn qua chuẩn bằng công thức:
> $$\langle x, y \rangle = \frac{1}{4} \left( \|x+y\|^2 - \|x-y\|^2 \right)$$

> [!prf]
> Theo định nghĩa chuẩn sinh bởi tích trong, ta có $\|u\|^2 = \langle u, u \rangle$ với mọi $u \in H$. Khai triển các số hạng ở vế phải:
> 1. $\|x+y\|^2 = \langle x+y, x+y \rangle = \langle x,x \rangle + \langle x,y \rangle + \langle y,x \rangle + \langle y,y \rangle = \|x\|^2 + 2\langle x,y \rangle + \|y\|^2$
> 2. $\|x-y\|^2 = \langle x-y, x-y \rangle = \langle x,x \rangle - \langle x,y \rangle - \langle y,x \rangle + \langle y,y \rangle = \|x\|^2 - 2\langle x,y \rangle + \|y\|^2$
> 
> Lấy đẳng thức (1) trừ đi đẳng thức (2) theo vế, ta được:
> $$\|x+y\|^2 - \|x-y\|^2 = \left( \|x\|^2 + 2\langle x,y \rangle + \|y\|^2 \right) - \left( \|x\|^2 - 2\langle x,y \rangle + \|y\|^2 \right)$$
> $$\|x+y\|^2 - \|x-y\|^2 = 4\langle x,y \rangle$$
> 
> Chia cả hai vế cho 4, ta thu được đẳng thức phân cực cần chứng minh:
> $$\langle x, y \rangle = \frac{1}{4} \left( \|x+y\|^2 - \|x-y\|^2 \right)$$

Điều kiện cần và đủ để một chuẩn được sinh bởi tích trong là đẳng thức hình bình hành.

> [!prp] Đẳng thức hình bình hành (Tiêu chuẩn Jordan–von Neumann)
> Chuẩn $\|\cdot\|$ trên $H$ được sinh từ tích trong khi và chỉ khi
> $$2\|x\|^2 + 2\|y\|^2 = \|x+y\|^2 + \|x-y\|^2 \quad \forall x, y \in H.$$

> [!prf]
> *Chiều thuận ($\Rightarrow$):* Giả sử chuẩn $\|\cdot\|$ được sinh bởi tích trong $\langle \cdot, \cdot \rangle$. 
> Áp dụng trực tiếp các khai triển từ Đẳng thức phân cực, ta có:
> * $\|x+y\|^2 = \|x\|^2 + 2\langle x,y \rangle + \|y\|^2$
> * $\|x-y\|^2 = \|x\|^2 - 2\langle x,y \rangle + \|y\|^2$
> 
> Cộng hai đẳng thức này lại theo từng vế:
> $$\|x+y\|^2 + \|x-y\|^2 = \left( \|x\|^2 + 2\langle x,y \rangle + \|y\|^2 \right) + \left( \|x\|^2 - 2\langle x,y \rangle + \|y\|^2 \right)$$
> Các đại lượng tích trong đan dấu $2\langle x,y \rangle$ và $-2\langle x,y \rangle$ triệt tiêu hoàn toàn, ta thu được:
> $$\|x+y\|^2 + \|x-y\|^2 = 2\|x\|^2 + 2\|y\|^2$$
> Chiều thuận được chứng minh hoàn tất nhờ đẳng thức phân cực.
> 
> *Chiều nghịch ($\Leftarrow$):* Đảo lại, nếu chuẩn thỏa mãn đẳng thức hình bình hành, ta dùng công thức phân cực để định nghĩa một hàm hai biến $f(x,y) = \frac{1}{4}(\|x+y\|^2 - \|x-y\|^2)$, rồi chứng minh hàm này thỏa mãn đầy đủ các tiên đề để trở thành một tích trong chính tắc trên $H$.

> [!exm] Phản ví dụ 1: $\ell^p$ với $p \ne 2$ không phải không gian Hilbert
> Xét $x = (1,1,0,\dots)$ và $y = (1,-1,0,\dots)$ trong $\ell^p$. Ta có $\|x\|_p = \|y\|_p = 2^{1/p}$, $x+y = (2,0,\dots)$, $x-y = (0,2,\dots)$, nên $\|x+y\|_p = \|x-y\|_p = 2$. Đẳng thức hình bình hành đòi hỏi:
> $$4 \cdot 2^{2/p} = 8 \Leftrightarrow 2^{2/p} = 2 \Leftrightarrow p = 2.$$
> Với $p \ne 2$, $\ell^p$ không phải không gian Hilbert.

> [!exm] Phản ví dụ 2: $L^p(\mathbb{R})$ với $p \ne 2$ không phải không gian Hilbert
> Trong không gian $L^p(\mathbb{R})$ với $1 \le p \le \infty$, xét hai hàm chỉ thị:
> $$f_1 = \chi_{[0,1)} \quad \text{và} \quad f_2 = \chi_{[1,2)}$$
> 
> **Bước 1: Tính chuẩn của các hàm thành phần**
> Theo định nghĩa chuẩn trong không gian $L^p(\mathbb{R})$ với $1 \le p < \infty$:
> * $\|f_1\|_p = \left( \int_{0}^{1} 1^p dx \right)^{1/p} = (1)^{1/p} = 1 \implies \|f_1\|_p^2 = 1$
> * $\|f_2\|_p = \left( \int_{1}^{2} 1^p dx \right)^{1/p} = (1)^{1/p} = 1 \implies \|f_2\|_p^2 = 1$
> 
> Thay vào vế trái (VT) của đẳng thức hình bình hành, ta được:
> $$\text{VT} = 2\|f_1\|_p^2 + 2\|f_2\|_p^2 = 2(1) + 2(1) = 4$$
> 
> Vì $f_1$ và $f_2$ là hai hàm chỉ thị xác định trên hai tập hợp rời nhau $[0,1)$ và $[1,2)$, bằng cách tính trực tiếp, với mọi $x \in \mathbb{R}$ (liên hệ tính chất đường chéo hình chữ nhật):
> $$|f_1(x) + f_2(x)|^p = |f_1(x) - f_2(x)|^p = \chi_{[0,2)}(x)$$
> 
> Lấy tích phân và căn bậc $p$ hai vế, ta tính được bình phương chuẩn $L^p$ của tổng và hiệu:
> $$\|f_1 + f_2\|_p^2 = \|f_1 - f_2\|_p^2 = \left( \int_{0}^{2} 1 dx \right)^{2/p} = (2)^{2/p} = 2^{2/p}$$
> 
> Thay vào vế phải (VP) của đẳng thức hình bình hành, ta được:
> $$\text{VP} = \|f_1 + f_2\|_p^2 + \|f_1 - f_2\|_p^2 = 2^{2/p} + 2^{2/p} = 2 \cdot 2^{2/p} = 2^{1 + \frac{2}{p}}$$
> 
> Đẳng thức hình bình hành được thỏa mãn khi và chỉ khi $\text{VT} = \text{VP}$:
> $$4 = 2^{1 + \frac{2}{p}} \Leftrightarrow 2^2 = 2^{1 + \frac{2}{p}}$$
> 
> Đồng nhất số mũ của hai vế, ta thu được:
> $$2 = 1 + \frac{2}{p} \Leftrightarrow \frac{2}{p} = 1 \Leftrightarrow p = 2$$
> 
> Theo tiêu chuẩn Jordan–von Neumann, chuẩn $\|\cdot\|_p$ không thể được sinh ra từ bất kỳ tích trong nào với ${} p \neq 2 {}$. Do đó, $L^p(\mathbb{R})$ không phải là không gian Hilbert khi $p \ne 2$.

### 5.2 Bất đẳng thức Cauchy–Schwarz

> [!thm] Bất đẳng thức Cauchy–Schwarz
> Với mọi $x, y \in H$: $|\langle x,y\rangle| \le \|x\|\|y\|$. Đẳng thức xảy ra khi và chỉ khi $x, y$ phụ thuộc tuyến tính.

> [!prf]
> Xét vectơ dư của phép chiếu $x$ lên $y$ (giả sử $y \ne 0$):
> $$0 \le \Bigl\|x - \frac{\langle x,y\rangle}{\|y\|^2}y\Bigr\|^2 = \|x\|^2 - \frac{\langle x,y\rangle\overline{\langle x,y\rangle}}{\|y\|^2} - \frac{\overline{\langle x,y\rangle}\langle x,y\rangle}{\|y\|^2} + \frac{|\langle x,y\rangle|^2}{\|y\|^4}\|y\|^2 = \|x\|^2 - \frac{|\langle x,y\rangle|^2}{\|y\|^2}.$$
> Suy ra $|\langle x,y\rangle|^2 \le \|x\|^2\|y\|^2$.

> [!prp] (Tích trong liên tục theo từng biến)  
> Trên không gian tích trong:  
>  
> (a) Ánh xạ $x \mapsto \langle x, y \rangle$ là tuyến tính liên tục, có chuẩn bằng $\|y\|$.  
>  
> (b) Trên trường số thực, ánh xạ $y \mapsto \langle x, y \rangle$ là tuyến tính liên tục, có chuẩn bằng $\|x\|$.  
> Trên trường số phức, ánh xạ này không tuyến tính nhưng vẫn liên tục.

> [!prf] 
> Ta cần chứng minh ánh xạ tích trong liên tục theo từng biến.  
>  
> (a) Với ánh xạ $x \mapsto \langle x, y \rangle$:  
> Tính tuyến tính: từ định nghĩa tích trong, ta có  
>   $$\langle x_1 + x_2, y \rangle = \langle x_1, y \rangle + \langle x_2, y \rangle,$$  
>   $$\langle \alpha x, y \rangle = \alpha \langle x, y \rangle.$$  
>   Do đó ánh xạ là tuyến tính.  
> Tính liên tục: áp dụng bất đẳng thức Cauchy–Schwarz,  
>   $$|\langle x, y \rangle| \leq \|x\| \cdot \|y\|.$$  
>   
>   Suy ra $|Tx| = \lvert \braket{ x | y } \rvert \le \lVert x \rVert \cdot \lVert y \rVert$. Vậy $\lVert T \rVert \le \lVert y \rVert$.
> 
> Mặt khác chọn $x_{0} = y$, ta có $\lvert \braket{ x_{0} | y } = \lVert y \rVert \cdot \lVert y \rVert = \lVert y \rVert^{2}$. 
> 
> Vậy $\|T\| = \sup_{x \ne 0} \frac{|Tx|}{\|x\|} \ge \frac{|Tx_0|}{\|x_0\|} = \frac{\|y\|^2}{\|y\|} = \|y\|$
>   
> Vậy ta kết luận ${} \lVert T \rVert = \lVert y \rVert {}$.  
>  
> (b) Với ánh xạ $y \mapsto \langle x, y \rangle$:  
> Trường hợp trường số thực: tương tự, ánh xạ là tuyến tính và  
>   $$|\langle x, y \rangle| \leq \|x\| \cdot \|y\|,$$  
>   nên chuẩn bằng $\|x\|$, ánh xạ liên tục.  
> Trường hợp trường số phức: ánh xạ không tuyến tính (do tính chất liên hợp trong tích trong), nhưng vẫn thỏa bất đẳng thức Cauchy–Schwarz, nên ánh xạ liên tục.  
>  
> Kết luận: Trong cả hai trường hợp, ánh xạ tích trong là liên tục theo từng biến.


### 5.3 Phép chiếu vuông góc

Tích trong cho phép định nghĩa vuông góc: $x \perp y \Leftrightarrow \langle x,y\rangle = 0$. Lập tức có **Định lý Pythagore**: nếu $x \perp y$ thì $\|x+y\|^2 = \|x\|^2 + \|y\|^2$.

Bổ sung phần trực giao: $S^\perp = \{x \in H \mid \langle x,y\rangle = 0\ \forall y \in S\}$ luôn là không gian con đóng (do tính liên tục của tích trong).

> [!thm] Sự tồn tại và duy nhất của phép chiếu vuông góc
> Cho $M$ là không gian con **đóng** trong không gian Hilbert $H$. Với mọi $x \in H$, tồn tại duy nhất $y \in M$ sao cho $(x-y) \perp M$. Điểm $y = P_M x$ gọi là **hình chiếu vuông góc** của $x$ xuống $M$. Hơn nữa,
> $$\|x - P_M x\| = \inf_{m \in M}\|x - m\| = d(x, M).$$

> [!prf]
> *Tồn tại.* Đặt $d = \inf_{m \in M}\|x - m\|$. Chọn dãy $(y_n) \subset M$ với $\|x - y_n\| \to d$. Áp dụng đẳng thức hình bình hành cho $(x - y_n)$ và $(x - y_m)$:
> $$\|y_m - y_n\|^2 = 2\|x-y_n\|^2 + 2\|x-y_m\|^2 - 4\Bigl\|x - \frac{y_n+y_m}{2}\Bigr\|^2.$$
> Vì $\frac{y_n+y_m}{2} \in M$ (do $M$ là không gian vectơ con), ta có $\|x - \frac{y_n+y_m}{2}\| \ge d$. Suy ra
> $$\|y_m - y_n\|^2 \le 2\|x-y_n\|^2 + 2\|x-y_m\|^2 - 4d^2 \xrightarrow{m,n\to\infty} 0.$$
> Vậy $(y_n)$ là Cauchy trong $M$ đóng và đầy đủ, hội tụ về $y \in M$ với $\|x-y\| = d$.
>
> *Tính vuông góc.* Với mọi $w \in M$ và $t \in \mathbb{R}$, vì $y - tw \in M$:
> $$\|x-y\|^2 \le \|x - (y - tw)\|^2 = \|x-y\|^2 + 2t\operatorname{Re}\langle x-y, w\rangle + t^2\|w\|^2.$$
> Suy ra $t^2\|w\|^2 + 2t\operatorname{Re}\langle x-y,w\rangle \ge 0$ với mọi $t \in \mathbb{R}$. Đa thức bậc 2 không âm khi biệt thức $\le 0$, tức $\operatorname{Re}\langle x-y,w\rangle = 0$. Thay $t$ bởi $it$ cho phần ảo, thu được $\langle x-y, w\rangle = 0$ với mọi $w \in M$.
>
> *Duy nhất.* Nếu $y_1, y_2 \in M$ đều thỏa tính vuông góc, thì $(x-y_1) \perp M$ và $(x-y_2) \perp M$. Trừ: $(y_1-y_2) \perp M$. Nhưng $y_1-y_2 \in M$, nên $\langle y_1-y_2,y_1-y_2\rangle = 0$, tức $y_1 = y_2$.

Sự cố khi $M$ không đóng. Nếu $M$ không đóng, hình chiếu có thể không tồn tại. Ví dụ trong $\ell^2$, đặt $M = c_{00}$ (dãy có hữu hạn phần tử khác 0, không đóng). Với $x = (1, 1/2, 1/3, \dots) \in \ell^2 \setminus M$, ta có $d(x, M) = 0$ (có thể chặt cụt $x$ để lấy dãy trong $M$ hội tụ về $x$), nhưng không tồn tại $m \in M$ với $\|x-m\| = 0$ vì điều đó kéo theo $x \in M$ — mâu thuẫn.

> [!cor] Phân tích trực giao
> Nếu $M$ là không gian con đóng trong không gian Hilbert $H$, thì $H = M \oplus M^\perp$ và mọi $x \in H$ phân tích duy nhất thành $x = P_M x + P_{M^\perp} x$. Theo Pythagore:
> $$\|x\|^2 = \|P_M x\|^2 + \|P_{M^\perp} x\|^2.$$

> [!prf] Ta cần chứng minh ba điều: mọi $x$ phân tích được thành tổng, phân tích đó duy nhất, và đẳng thức chuẩn.
> 
> _Sự tồn tại của phân tích._ Với $x \in H$ tùy ý, theo Định lý chiếu vuông góc, tồn tại duy nhất $y = P_M x \in M$ sao cho $(x - y) \perp M$. Đặt $z = x - y$, thì $z \in M^\perp$ (vì $z \perp M$ với mọi phần tử của $M$). Ta có $$x = y + z = P_M x + z$$ với $y \in M$ và $z \in M^\perp$. Đặt $P_{M^\perp} x = z$.
> 
> _Tính duy nhất._ Giả sử $x = y_1 + z_1 = y_2 + z_2$ với $y_1, y_2 \in M$ và $z_1, z_2 \in M^\perp$. Khi đó $y_1 - y_2 = z_2 - z_1$. Vế trái thuộc $M$, vế phải thuộc $M^\perp$, nên cả hai vế thuộc $M \cap M^\perp$. Với mọi $u \in M \cap M^\perp$, $\langle u, u \rangle = 0$ (vì $u \perp u$ do $u \in M^\perp$ và $u \in M$), suy ra $u = 0$. Vậy $y_1 = y_2$ và $z_1 = z_2$.
> 
> _Đẳng thức chuẩn._ Vì $P_M x \in M$ và $P_{M^\perp} x \in M^\perp$, hai vectơ này trực giao nhau. Áp dụng Định lý Pythagore: $$\|x\|^2 = \|P_M x + P_{M^\perp} x\|^2 = \|P_M x\|^2 + \|P_{M^\perp} x\|^2.$$

## Phần VI — Định lý Biểu diễn Riesz

### 6.1 Hạt nhân phiếm hàm: Cấu trúc đại số và tô pô

Trước khi phát biểu Định lý Riesz, ta cần khảo sát kỹ cấu trúc của hạt nhân một phiếm hàm — đây chính là không gian con nền tảng cho phân tích trực giao sau này. Ta khảo sát trên một không gian định chuẩn $X$ tổng quát trước (chưa cần tích trong), sau đó mới đặc biệt hóa cho không gian Hilbert.

> [!prp] Hạt nhân là không gian con kém $X$ đúng một chiều
> Cho $f$ là phiếm hàm tuyến tính trên không gian định chuẩn $X$, $f \not\equiv 0$ (tồn tại $x \in X$ với $f(x) \ne 0$). Đặt
> $$\ker(f) = \{x \in X \mid f(x) = 0\}.$$
> Khi đó $\ker(f)$ là không gian con vectơ của $X$, và với $x \notin \ker(f)$ bất kỳ, ta có $X = \ker(f) \oplus \langle x\rangle$ (tổng trực tiếp đại số, chưa cần trực giao).

> [!prf]
> $\ker(f)$ là không gian con vì $f$ tuyến tính: $f(\alpha u + \beta v) = \alpha f(u) + \beta f(v) = 0$ khi $f(u) = f(v) = 0$.
>
> *(a) Với mọi $y \in X$, vectơ $y - \dfrac{f(y)}{f(x)}x \in \ker(f)$.* Thật vậy,
> $$f\Bigl(y - \frac{f(y)}{f(x)}x\Bigr) = f(y) - \frac{f(y)}{f(x)}f(x) = f(y) - f(y) = 0.$$
>
> *(b) Suy ra $X = \ker(f) + \langle x\rangle$.* Từ (a), mọi $y \in X$ phân tích được:
> $$y = \underbrace{\Bigl(y - \frac{f(y)}{f(x)}x\Bigr)}_{\in\,\ker(f)} + \underbrace{\frac{f(y)}{f(x)}x}_{\in\,\langle x\rangle}.$$
> Phân tích này là duy nhất, vì $\langle x\rangle \cap \ker(f) = \{0\}$: nếu $tx \in \ker(f)$ với $t \ne 0$ thì $f(tx) = tf(x) = 0 \Rightarrow f(x) = 0$, mâu thuẫn $x \notin \ker(f)$. Vậy $X = \ker(f) \oplus \langle x\rangle$, tức $\ker(f)$ kém $X$ đúng một chiều — đây là một siêu phẳng tuyến tính (qua gốc).

> [!prp] $f$ liên tục khi và chỉ khi $\ker(f)$ đóng
> $f$ liên tục trên $X$ khi và chỉ khi $\ker(f)$ là không gian con đóng của $X$.

> [!prf]
> *Chiều thuận.* Nếu $f$ liên tục, $\ker(f) = f^{-1}(\{0\})$ là ảnh ngược của tập đóng $\{0\}$ qua ánh xạ liên tục, nên đóng.
>
> *Chiều nghịch.* Giả sử $\ker(f)$ đóng và $f \not\equiv 0$ (trường hợp $f \equiv 0$ hiển nhiên liên tục). Lấy $x_0 \notin \ker(f)$. Vì $\ker(f)$ đóng và $x_0 \notin \ker(f)$, $\delta := d(x_0, \ker(f)) > 0$.
>
> Với $y \in H$ tùy ý sao cho $f(y) \ne 0$, xét $z = x_0 - \dfrac{f(x_0)}{f(y)}y$. Kiểm tra $f(z) = f(x_0) - \dfrac{f(x_0)}{f(y)}f(y) = 0$, nên $z \in \ker(f)$. Do đó
> $$\delta \le \|x_0 - z\| = \Bigl\|\frac{f(x_0)}{f(y)}y\Bigr\| = \frac{|f(x_0)|}{|f(y)|}\|y\| \implies |f(y)| \le \frac{|f(x_0)|}{\delta}\|y\|.$$
> Bất đẳng thức này cũng đúng (tầm thường) khi $f(y) = 0$. Vậy $f$ bị chặn bởi hằng số $|f(x_0)|/\delta$, do đó liên tục.

Hai mệnh đề trên cho thấy: với $f \in X^*$ (liên tục, $f \not\equiv 0$), $\ker(f)$ luôn là siêu phẳng đóng kém $X$ đúng một chiều — đúng là đối tượng hình học "siêu phẳng" mà Phần I đã mô tả.

> [!prp] (Mối quan hệ giữa Giá trị phiếm hàm và Khoảng cách)
> Cho $E$ là một không gian định chuẩn và $f \in E^* \setminus \{0\}$ là một phiếm hàm tuyến tính liên tục khác không trên $E$. 
> 
> Với mọi vectơ $x_0 \in E$, khoảng cách hình học từ $x_0$ đến siêu phẳng hạt nhân $\ker(f)$ được xác định bởi công thức:
> $$d(x_0, \ker(f)) = \frac{|f(x_0)|}{\|f\|}$$
> 
> Hệ quả ($\|f\| = 1$): Nếu phiếm hàm được chuẩn hóa sao cho $\|f\| = 1$, thì giá trị đại số và khoảng cách hình học trùng khít làm một:
> $$d(x_0, \ker(f)) = |f(x_0)| \quad (\text{với } f(x_0) \ge 0)$$

> [!prf] 
> **Bước 1: Chứng minh chiều bất đẳng thức $\ge$**
> Lấy một phần tử $z$ bất kỳ thuộc mặt sàn hạt nhân $\ker(f)$, theo định nghĩa ta có $f(z) = 0$. 
> Sử dụng tính chất tuyến tính và định nghĩa chuẩn của phiếm hàm liên tục, ta có:
> $$|f(x_0)| = |f(x_0) - f(z)| = |f(x_0 - z)| \le \|f\| \cdot \|x_0 - z\|$$
> 
> Vì $f \neq 0$ nên $\|f\| > 0$. Chia cả hai vế cho $\|f\|$, ta thu được:
> $$\|x_0 - z\| \ge \frac{|f(x_0)|}{\|f\|} \quad \forall z \in \ker(f)$$
> 
> Lấy cận dưới đúng ($\inf$) trên toàn bộ các điểm $z \in \ker(f)$, theo định nghĩa khoảng cách từ một điểm đến một tập hợp, ta có:
> $$d(x_0, \ker(f)) = \inf_{z \in \ker(f)} \|x_0 - z\| \ge \frac{|f(x_0)|}{\|f\|} \quad \text{(1)}$$
> 
> **Bước 2: Chứng minh chiều bất đẳng thức ngược lại $\le$**
> Trường hợp $x_0 \in \ker(f)$ là tầm thường vì cả hai vế đều bằng $0$. Xét $x_0 \notin \ker(f)$, suy ra $f(x_0) \neq 0$.
> 
> Theo định nghĩa của chuẩn phiếm hàm $\|f\| = \sup_{x \neq 0} \frac{|f(x)|}{\|x\|}$, với mọi số thực $\epsilon > 0$, luôn tồn tại một vectơ $v \in E \setminus \{0\}$ sao cho:
> $$\|v\| = 1 \quad \text{và} \quad |f(v)| > \|f\| - \epsilon$$
> 
> Thiết lập một vectơ dịch chuyển dọc $z_0$ bằng cách hiệu chỉnh tỉ lệ:
> $$z_0 = x_0 - \frac{f(x_0)}{f(v)}v$$
> 
> Áp dụng phiếm hàm $f$ lên $z_0$, ta thấy:
> $$f(z_0) = f(x_0) - \frac{f(x_0)}{f(v)}f(v) = 0 \implies z_0 \in \ker(f)$$
> 
> Do $z_0$ thuộc hạt nhân, khoảng cách $d(x_0, \ker(f))$ bắt buộc phải nhỏ hơn hoặc bằng độ dài đoạn thẳng nối từ $x_0$ đến điểm $z_0$ cụ thể này:
> $$d(x_0, \ker(f)) \le \|x_0 - z_0\| = \left\| \frac{f(x_0)}{f(v)}v \right\| = \frac{|f(x_0)|}{|f(v)|} \cdot \|v\| = \frac{|f(x_0)|}{|f(v)|}$$
> 
> Thay đánh giá $|f(v)| > \|f\| - \epsilon$ vào mẫu số, ta được:
> $$d(x_0, \ker(f)) < \frac{|f(x_0)|}{\|f\| - \epsilon}$$
> 
> Cho $\epsilon \to 0^+$, ta thu được đánh giá chặn trên:
> $$d(x_0, \ker(f)) \le \frac{|f(x_0)|}{\|f\|} \quad \text{(2)}$$
> 
> Từ (1) và (2), ta có điều phải chứng minh. 

*Ý nghĩa Hình học:* Từ giá trị phiến hàm tới Khoảng cách Không gian và phép chiếu
Dựa vào Mệnh đề về khoảng cách, khi ta chuẩn hóa phiếm hàm sao cho $\|f\| = 1$, ta thu được một kết quả rất đẹp:
$$d(x, \ker(f)) = |f(x)| \quad (\text{với } f(x) \ge 0)$$
Nghĩa là giá trị của phiến hàm tại điểm $x$ được đo bẳng khoảng cách của nó tới siêu phẳng qua gốc tọa độ $f(x) = 0$

> [!obs] Ý tưởng định lý biểu diễn Riez
> Định lý Biểu diễn Riesz mà chúng ta chuẩn bị chứng minh dưới đây Hợp thức hóa trực giác hình học này thành một định lý.
> Định lý khẳng định rằng: Với mọi cấu trúc đo chiều cao tuyến tính ($f \in H^*$), không gian Hilbert luôn chuẩn bị sẵn cho nó đúng một cái trục đứng pháp tuyến ($y \in H$) để tính giá trị phiến hàm $f(x)$ (khoảng cách tới siêu phẳng qua gốc tọa độ) thông qua một phép tích trong:
> $$f(x) = \langle x, y \rangle \quad \forall x \in H$$
> Trong đó, hình ảnh hình học của $y$ chính là vector từ gốc tọa độ và chạm vào bề mặt của quả cầu đơn vị tại siêu phẳng tựa $f(x)=1$ (Giả sử cho chuẩn của phiến hàm $\|f\| = 1$).

### 6.2 Phát biểu và Chứng minh Định lý Riesz

Trong không gian Hilbert, ta đặc biệt hóa: vì $\ker(f)$ đóng, có phân tích trực giao $H = \ker(f) \oplus \ker(f)^\perp$, và vì $\ker(f)$ kém $H$ đúng một chiều, $\ker(f)^\perp$ là không gian một chiều — đây là "trục pháp tuyến" của siêu phẳng $\ker(f)$.

> [!thm] Định lý Biểu diễn Riesz
> Cho không gian Hilbert $H$ trên trường $\mathbb{F}$. Với mọi $f \in H^*$, tồn tại **duy nhất** $y \in H$ sao cho
> $$f(x) = \langle x, y\rangle \quad \forall x \in H.$$
> Hơn nữa, $\|f\|_{H^*} = \|y\|_H$, và nếu $f \not\equiv 0$ thì $\ker(f)^\perp = \langle y \rangle$.

> [!prf]
> Trường hợp $f \equiv 0$: chọn $y = 0$, hiển nhiên.
>
> Trường hợp $f \not\equiv 0$: theo 6.1, $\ker(f)$ đóng và kém $H$ đúng một chiều, nên $H = \ker(f) \oplus \ker(f)^\perp$ với $\ker(f)^\perp$ một chiều. Chọn $v \in \ker(f)^\perp$, $\|v\| = 1$ (vậy $f(v) \ne 0$, vì nếu $f(v)=0$ thì $v \in \ker(f) \cap \ker(f)^\perp = \{0\}$).
>
> *Tìm $y$.* Với mọi $x \in H$, đặt $z = x - \frac{f(x)}{f(v)}v$. Theo 6.1(a), $z \in \ker(f)$. Vì $v \in \ker(f)^\perp$, $\langle z, v\rangle = 0$:
> $$\Bigl\langle x - \frac{f(x)}{f(v)}v,\ v\Bigr\rangle = 0 \implies \langle x,v\rangle = \frac{f(x)}{f(v)}\|v\|^2 = \frac{f(x)}{f(v)}.$$
> Suy ra $f(x) = f(v)\langle x,v\rangle = \langle x,\, \overline{f(v)}\,v\rangle$. Đặt $y = \overline{f(v)}\,v$.
>
> *Duy nhất.* Nếu $\langle x, y_1\rangle = \langle x,y_2\rangle$ với mọi $x$, thì $\langle x, y_1-y_2\rangle = 0$ với mọi $x$. Chọn $x = y_1-y_2$: $\|y_1-y_2\|^2 = 0$, suy ra $y_1 = y_2$.
>
> *Bảo toàn chuẩn.* $|f(x)| = |\langle x,y\rangle| \le \|x\|\|y\|$ nên $\|f\| \le \|y\|$. Ngược lại, $f(y/\|y\|) = \langle y/\|y\|, y\rangle = \|y\|$ nên $\|f\| \ge \|y\|$. Vậy $\|f\| = \|y\|$.
>
> *$\ker(f)^\perp = \langle y\rangle$.* Vì $y = \overline{f(v)}v$ với $f(v) \ne 0$, ta có $y \ne 0$ và $y \in \langle v\rangle = \ker(f)^\perp$ (do $\ker(f)^\perp$ là không gian con một chiều chứa $v$). Vậy $\langle y\rangle \subset \ker(f)^\perp$, và vì cả hai đều một chiều, $\langle y\rangle = \ker(f)^\perp$.

> [!exm] Ví dụ kinh điển
> Trong $\ell^2$: mọi phiếm hàm có dạng $f(x) = \sum_{i=1}^\infty x_i \overline{a_i}$ với duy nhất $(a_i) \in \ell^2$, và $\|f\| = \|a\|_2$. 
> Trong $L^2(\Omega)$: mọi phiếm hàm có dạng $S(f) = \int_\Omega f(t)\overline{g(t)}\,dt$ với duy nhất $g \in L^2(\Omega)$, và $\|S\| = \|g\|_2$.

### 6.3 Ý nghĩa hình học của Định lý Riesz

Khi biểu diễn phiếm hàm $f(x) = \langle x, y\rangle$ theo Định lý Riesz, chuẩn $\|f\|$ được hình học hóa trọn vẹn thành **độ dài của vectơ pháp tuyến đại diện $y$** ($\|f\| = \|y\|$). Vectơ $y$ đóng vai trò là "thước đo" vuông góc với siêu phẳng hạt nhân $\ker(f)$, mang hai ý nghĩa trực quan cốt lõi:

* **Hệ số phóng đại hình chiếu:** Giá trị $f(x)$ bằng độ dài hình chiếu vuông góc của $x$ lên phương pháp tuyến nhân với độ dài $\|y\|$. Nếu $\|f\| = 1$, $f(x)$ chính là độ dài hình chiếu thuần túy. Khi $\|f\|$ càng lớn, cây thước $y$ càng dài, đóng vai trò như một bộ khuếch đại phóng đại giá trị hình chiếu lên gấp $\|f\|$ lần.
* **Độ dốc của các siêu phẳng mức:** Khoảng cách từ gốc tọa độ đến siêu phẳng đơn vị $f^{-1}(1)$ là $1/\|f\| = 1/\|y\|$. Do đó, chuẩn $\|f\|$ càng lớn thì các siêu phẳng mức phân bố càng dày đặc và ép sát vào gốc tọa độ. Điều này tạo nên một không gian có độ dốc lớn, nơi một dịch chuyển nhỏ của $x$ theo phương pháp tuyến cũng làm giá trị $f(x)$ thay đổi cực kỳ nhanh.


> [!prp] Diễn giải hình học của giá trị phiếm hàm
> Với $f \in H^*$, $f \not\equiv 0$, biểu diễn $f(x) = \langle x,y\rangle$. Khi đó với mọi $x \in H$, hình chiếu (có dấu) của $x$ lên phương pháp tuyến $y$ thỏa
> $$\operatorname{proj}_y(x) = \frac{f(x)}{\|f\|}.$$
> Nói cách khác, $f(x)$ bằng hình chiếu của $x$ lên $y$ nhân với $\|y\| = \|f\|$ — **chỉ khi $\|y\|=1$ (tức $\|f\|=1$) thì $f(x)$ đúng bằng hình chiếu của $x$ lên $y$.**

> [!prf]
> Theo định nghĩa hình chiếu vô hướng lên phương đơn vị $\hat{y} = y/\|y\|$:
> $$\operatorname{proj}_y(x) = \langle x, \hat{y}\rangle = \Bigl\langle x, \frac{y}{\|y\|}\Bigr\rangle = \frac{1}{\|y\|}\langle x,y\rangle = \frac{f(x)}{\|y\|}.$$
> Vì $\|y\| = \|f\|$ (tính bảo toàn chuẩn trong Riesz), ta có $\operatorname{proj}_y(x) = f(x)/\|f\|$, suy ra $f(x) = \|f\|\cdot\operatorname{proj}_y(x)$.

Ta có hình chiếu của $x$ lên $y$ luôn bằng $f(x)$ trong trường hợp đặc biệt $\|f\| = 1$ (vectơ pháp tuyến đơn vị), khi đó $\|y\|=1$ và $f(x) = \langle x,y\rangle = \operatorname{proj}_y(x)$. Trong trường hợp tổng quát, $f(x)$ và hình chiếu $\operatorname{proj}_y(x)$ chỉ sai khác bởi hệ số tỉ lệ $\|f\|$ — đúng theo tinh thần Mệnh đề 1 (Phần I): $\|f\|$ lớn nghĩa là các siêu phẳng mức dày đặc, nên cùng một độ dịch chuyển hình chiếu $\operatorname{proj}_y(x)$ tạo ra giá trị $f(x)$ lớn hơn theo tỉ lệ $\|f\|$.

**Liên hệ với khoảng cách tới siêu phẳng.** Từ Mệnh đề 1 (Phần I), khoảng cách từ $0$ đến $H_\alpha = f^{-1}(\alpha)$ là $|\alpha|/\|f\|$. Mặt khác, một điểm $x \in H_\alpha$ có $f(x) = \alpha$, nên theo công thức trên, $\operatorname{proj}_y(x) = \alpha/\|f\|$ — chính là khoảng cách (có dấu) từ gốc tọa độ đến mặt phẳng $H_\alpha$ đo theo phương $y$. Điều này khẳng định lại: $y/\|y\|$ là pháp tuyến đơn vị thật sự của họ siêu phẳng $\{H_\alpha\}$, và "tọa độ" của mỗi siêu phẳng dọc theo trục pháp tuyến này chính là $\alpha/\|f\|$.

> [!cor] Hệ quả: Cách xác định vectơ biểu diễn $y$
> Cho $f \in H^*$, $f \not\equiv 0$. Nếu biết một vectơ $u \in \ker(f)^\perp$ bất kỳ ($u \ne 0$), ta có thể xác định ngay vectơ biểu diễn $y$ (sao cho $f(x) = \langle x, y\rangle$ với mọi $x \in H$) bằng công thức:
> $$y = \frac{\overline{f(u)}}{\|u\|^2}u.$$
> Đặc biệt, nếu $v \in \ker(f)^\perp$ là vectơ pháp tuyến đơn vị ($\|v\| = 1$), công thức trên thu gọn thành:
> $$y = \overline{f(v)}v.$$

> [!prf]
> Vì $\ker(f)^\perp$ là không gian con đúng một chiều và $u \in \ker(f)^\perp$ ($u \ne 0$), nên mọi vectơ trong $\ker(f)^\perp$ đều tỉ lệ với $u$. Do vectơ biểu diễn $y$ cũng thuộc $\ker(f)^\perp$, ta có $y = c u$ với $c$ là một vô hướng nào đó.
> 
> Theo Định lý Riesz, $f(x) = \langle x, y\rangle$ với mọi $x \in H$. Chọn $x = u$, ta có:
> $$f(u) = \langle u, cu\rangle = \overline{c}\langle u, u\rangle = \overline{c}\|u\|^2.$$
> Từ đó suy ra $\overline{c} = \frac{f(u)}{\|u\|^2} \implies c = \frac{\overline{f(u)}}{\|u\|^2}.$
> 
> Thay $c$ vào biểu thức $y = cu$, ta thu được công thức cần tìm. Trường hợp $\|v\|=1$ chính là kết quả đã được chỉ ra trong bước *Tìm $y$* của chứng minh Định lý Riesz.

### 6.4 Không gian Hilbert tự đối ngẫu: $H^* \cong H$

Định lý Riesz không chỉ nói rằng mọi phiếm hàm đều có vectơ biểu diễn — nó còn nói rằng ánh xạ $y \mapsto \langle \cdot, y\rangle$ thiết lập một **đẳng cấu** giữa $H$ và $H^*$. Đây là tính chất đặc trưng phân biệt không gian Hilbert với không gian Banach tổng quát: trong không gian Hilbert, phiếm hàm và vectơ là **cùng một loại đối tượng**.

> [!thm] Không gian Hilbert tự đối ngẫu ($H^* \cong H$)
> Cho $H$ là không gian Hilbert trên $\mathbb{F}$. Ánh xạ
> $$\Phi: H \to H^*, \quad \Phi(y) = \langle \cdot, y\rangle$$
> là một đẳng cấu isometric giữa $H$ và $H^*$. Cụ thể:
>
> (i) $\Phi$ bảo toàn chuẩn: $\|\Phi(y)\|_{H^*} = \|y\|_H$ với mọi $y \in H$.
>
> (ii) $\Phi$ toàn ánh: với mọi $f \in H^*$ tồn tại $y \in H$ sao cho $f = \Phi(y)$.
>
> (iii) $\Phi$ đơn ánh: nếu $\Phi(y_1) = \Phi(y_2)$ thì $y_1 = y_2$.
>
> (iv) Trên trường thực $\mathbb{F} = \mathbb{R}$, $\Phi$ là đẳng cấu tuyến tính. Trên trường phức $\mathbb{F} = \mathbb{C}$, $\Phi$ là đẳng cấu liên hợp tuyến tính (conjugate-linear):
> $$\Phi(\alpha y_1 + \beta y_2) = \bar\alpha\,\Phi(y_1) + \bar\beta\,\Phi(y_2).$$
>
> Nói ngắn gọn, trên trường thực $H^* \cong H$ như các không gian Banach, còn trên trường phức $H^* \cong \bar{H}$ (không gian Hilbert liên hợp).

> [!prf]
> Tất cả bốn tính chất đều là hệ quả trực tiếp của Định lý Riesz và tính chất của tích trong.
>
> *(i) Bảo toàn chuẩn.* Đây chính là kết luận $\|f\|_{H^*} = \|y\|_H$ của Định lý Riesz, áp dụng cho $f = \Phi(y)$.
>
> *(ii) Toàn ánh.* Với mọi $f \in H^*$, Định lý Riesz đảm bảo tồn tại $y \in H$ sao cho $f(x) = \langle x, y\rangle = \Phi(y)(x)$ với mọi $x$, tức $f = \Phi(y)$.
>
> *(iii) Đơn ánh.* Nếu $\Phi(y_1) = \Phi(y_2)$, thì $\langle x, y_1\rangle = \langle x, y_2\rangle$ với mọi $x \in H$, suy ra $\langle x, y_1 - y_2\rangle = 0$ với mọi $x$. Chọn $x = y_1 - y_2$: $\|y_1 - y_2\|^2 = 0$, vậy $y_1 = y_2$.
>
> *(iv) Tính (liên hợp) tuyến tính.* Với $\alpha, \beta \in \mathbb{F}$ và $y_1, y_2 \in H$, tính toán trực tiếp từ tính liên hợp tuyến tính của tích trong theo biến thứ hai:
> $$\Phi(\alpha y_1 + \beta y_2)(x) = \langle x,\, \alpha y_1 + \beta y_2\rangle = \bar\alpha\langle x, y_1\rangle + \bar\beta\langle x, y_2\rangle = \bar\alpha\,\Phi(y_1)(x) + \bar\beta\,\Phi(y_2)(x).$$
> Trên trường thực, liên hợp phức không có tác dụng ($\bar\alpha = \alpha$), nên $\Phi$ tuyến tính.

### 6.5 Tương đương giữa siêu phẳng đóng và phiếm hàm liên tục

Bức tranh trên dẫn đến một tương đương hình học–đại số cơ bản: **phiếm hàm tuyến tính liên tục và siêu phẳng đóng là hai mặt của cùng một đối tượng**, chỉ khác cách nhìn.

Để làm rõ: một phiếm hàm $f \in X^*$ khác không sinh ra cả **một họ** siêu phẳng song song $\{f^{-1}(\alpha)\}_{\alpha \in \mathbb{F}}$. Ngược lại, một siêu phẳng đóng đơn lẻ chỉ xác định được $f$ đến một hệ số tỉ lệ (vì $cf$ với $c \ne 0$ cho cùng các siêu phẳng mức, chỉ khác cách đánh số). Mệnh đề sau hình thức hóa điều này.

> [!thm] Tương đương giữa siêu phẳng đóng và phiếm hàm liên tục
> Cho $X$ là không gian định chuẩn trên $\mathbb{R}$.
>
> (i) Với mọi $f \in X^*$, $f \not\equiv 0$, và $\alpha \in \mathbb{R}$: tập mức $H_\alpha = f^{-1}(\alpha) = \{x \in X \mid f(x) = \alpha\}$ là một siêu phẳng đóng trong $X$ (tập con lồi, đóng, không chứa không gian con thực sự nào lớn hơn chính nó trừ $X$).
>
> (ii) Ngược lại, cho $H \subset X$ là một siêu phẳng đóng (tập con đóng, $H \ne X$, không có không gian con đóng thực sự nào nằm giữa $H$ và $X$). Khi đó tồn tại $f \in X^*$, $f \not\equiv 0$, và $\alpha \in \mathbb{R}$ sao cho $H = f^{-1}(\alpha)$. Hơn nữa, $f$ được xác định duy nhất đến một hệ số tỉ lệ thực khác không: nếu $g \in X^*$ cũng thỏa $H = g^{-1}(\beta)$ thì $g = cf$ với $c \ne 0$.

> [!prf]
> *(i) Từ phiếm hàm ra siêu phẳng.* Vì $f$ liên tục, $H_\alpha = f^{-1}(\alpha)$ là ảnh ngược của tập đóng $\{\alpha\}$, nên đóng. $H_\alpha$ lồi vì: với $x, y \in H_\alpha$ và $t \in [0,1]$, $f((1-t)x + ty) = (1-t)f(x) + tf(y) = (1-t)\alpha + t\alpha = \alpha$. Để thấy $H_\alpha$ là siêu phẳng (kém $X$ đúng một chiều, theo nghĩa affine): dịch về gốc bằng cách lấy $x_0 \in H_\alpha$ bất kỳ, đặt $M = H_\alpha - x_0 = \ker(f)$. Theo Mệnh đề 6.1, $\ker(f)$ kém $X$ đúng một chiều (dạng tuyến tính), nên $H_\alpha = x_0 + \ker(f)$ kém $X$ đúng một chiều theo nghĩa affine.
>
> *(ii) Từ siêu phẳng ra phiếm hàm.* Cho $H$ là siêu phẳng đóng. Lấy $x_0 \in H$ bất kỳ và đặt $M = H - x_0$. Thì $M$ là không gian con tuyến tính đóng, kém $X$ đúng một chiều (theo giả thiết $H$ là siêu phẳng). Chọn $e \in X \setminus M$ bất kỳ; khi đó $X = M \oplus \langle e\rangle$. Định nghĩa $f: X \to \mathbb{R}$ bởi: mỗi $x \in X$ viết duy nhất $x = m + te$ ($m \in M$, $t \in \mathbb{R}$), đặt $f(x) = t$. $f$ tuyến tính theo cấu trúc. Vì $M$ đóng và $e \notin M$, $d(e, M) > 0$, nên $f$ liên tục (theo Mệnh đề 6.1(c)). Rõ ràng $M = \ker(f) = f^{-1}(0)$, suy ra $H = x_0 + M = f^{-1}(f(x_0))$. Đặt $\alpha = f(x_0)$.
>
> *Duy nhất đến hệ số tỉ lệ.* Nếu $g \in X^*$ cũng thỏa $H = g^{-1}(\beta)$, thì $\ker(g) = H - x_0 = \ker(f)$. Hai phiếm hàm cùng nhân $\ker$ trên không gian kém một chiều, nên $g = cf$ với $c = \beta/\alpha \ne 0$ (kiểm tra: $g(e) = \beta = cf(e) = c\alpha$ với $e$ là vectơ bổ sung chọn ở trên, ta cần $c = \beta/\alpha$, và $g|_{\ker(f)} = 0 = cf|_{\ker(f)}$, vậy $g = cf$ trên toàn $X$).

Kết hợp lại, ta có bức tranh đầy đủ:

$$\left\{\text{siêu phẳng đóng trong } X\right\} \longleftrightarrow \left\{\text{tia trong } X^*\right\} = \left\{[f] \mid f \in X^* \setminus \{0\}\right\}$$

trong đó $[f] = \{cf \mid c \in \mathbb{R} \setminus \{0\}\}$ là lớp tương đương của $f$ theo quan hệ "sai khác hệ số tỉ lệ". Mỗi tia trong $X^*$ tương ứng với một **phương pháp tuyến** (không phân biệt chiều và độ lớn), còn việc chọn đại diện $f$ cụ thể trong tia chính là việc **đánh số** (calibrate) các siêu phẳng song song của họ đó.

Trong không gian Hilbert, tương đương này có được nhờ $\Phi: H \to H^*$: mỗi tia $[y] = \{\lambda y \mid \lambda \ne 0\}$ trong $H$ (một **phương** trong không gian vectơ) tương ứng với một tia $[\Phi(y)]$ trong $H^*$, tức là một họ siêu phẳng song song, với vectơ pháp tuyến đơn vị $y/\|y\|$ xác định hoàn toàn hướng của họ đó.

## Phần VII — Sự Thống Nhất: Hahn–Banach bị Khóa Chặt trong Không gian Hilbert

### 7.1 Tính duy nhất của mở rộng Hahn–Banach trong không gian Hilbert

Trong không gian Banach tổng quát, mở rộng Hahn–Banach không nhất thiết duy nhất vì quả cầu đơn vị có thể có góc nhọn. Mặt khác, trong không gian Hilbert, quả cầu đơn vị là trơn mọi nơi, mỗi điểm trên biên chỉ có đúng một mặt phẳng tiếp tuyến, và Định lý Riesz "khóa chặt" vectơ pháp tuyến. Kết quả:

> [!thm] Tính duy nhất của mở rộng Hahn–Banach trong không gian Hilbert
> Cho $M$ là không gian con **đóng** trong không gian Hilbert $H$ và $f \in M^*$. Khi đó tồn tại **duy nhất** $g \in H^*$ sao cho $g|_M = f$ và $\|g\|_H = \|f\|_M$.

> [!prf]
> *Bước 1: Biểu diễn Riesz trên $M$.*
> $M$ đóng trong không gian Hilbert $H$ nên bản thân $M$ là không gian Hilbert. Áp dụng Định lý Riesz cho $f \in M^*$: tồn tại duy nhất $u \in M$ sao cho $f(x) = \langle x, u\rangle$ với mọi $x \in M$, và $\|f\|_M = \|u\|$.
>
> *Bước 2: Mở rộng Hahn–Banach.*
> Tồn tại $g \in H^*$ với $g|_M = f$ và $\|g\|_H = \|f\|_M$. Áp dụng Riesz cho $g$ trên $H$: tồn tại duy nhất $v \in H$ sao cho $g(x) = \langle x, v\rangle$ với mọi $x \in H$, và $\|g\|_H = \|v\|$.
>
> *Bước 3: Khóa chặt $v$ vào $u$.*
> Với mọi $m \in M$: $\langle m, u\rangle = f(m) = g(m) = \langle m, v\rangle$, suy ra $\langle m, u-v\rangle = 0$ với mọi $m \in M$. Vậy $(u-v) \in M^\perp$, hay $u - v \perp u$ (vì $u \in M$).
>
> Phân tích $v = u + (v-u)$ với $u \in M$ và $(v-u) \in M^\perp$ trực giao nhau. Định lý Pythagore:
> $$\|v\|^2 = \|u\|^2 + \|v-u\|^2.$$
> Nhưng $\|v\| = \|g\|_H = \|f\|_M = \|u\|$, nên $\|v-u\|^2 = 0$, tức $v = u$.
>
> *Kết luận.* Vectơ biểu diễn $v$ của $g$ bắt buộc trùng với $u \in M$. Vì biểu diễn Riesz trên $H$ là duy nhất, $g$ được xác định hoàn toàn bởi $u$: $g(x) = \langle x, u\rangle$ với mọi $x \in H$. Vậy mở rộng duy nhất.

### 7.2 Ví dụ tính toán minh họa

> [!exm] Tìm mở rộng Hahn–Banach duy nhất trong $\mathbb{R}^2$
> Cho $M = \{(x, 3x) \mid x \in \mathbb{R}\} \subset \mathbb{R}^2$ (không gian con đóng) và $f(x, 3x) = x$. Tìm mở rộng Hahn–Banach $g$ trên $\mathbb{R}^2$ (với tích trong Euclid chuẩn).

Vectơ đơn vị sinh ra $M$ là $e_1 = \frac{1}{\sqrt{10}}(1,3)$. Giá trị của $f$ tại $e_1$: $f(e_1) = 1/\sqrt{10}$.

Vectơ biểu diễn Riesz trên $M$: $u = \overline{f(e_1)}\cdot e_1 = \frac{1}{\sqrt{10}} \cdot \frac{1}{\sqrt{10}}(1,3) = \frac{1}{10}(1,3)$.

Mở rộng Hahn–Banach duy nhất trên $\mathbb{R}^2$ là lấy tích trong với $u$:
$$g(x, y) = \Bigl\langle (x,y),\ \Bigl(\tfrac{1}{10}, \tfrac{3}{10}\Bigr)\Bigr\rangle = \frac{x}{10} + \frac{3y}{10}.$$

Kiểm tra: tại $(x, 3x) \in M$, $g(x, 3x) = x/10 + 9x/10 = x = f(x, 3x)$. $\checkmark$

## Tổng kết hình học

| Không gian | Hình dáng $B_E$ | Mở rộng Hahn–Banach |
|---|---|---|
| $\ell^1$ | Hình thoi, góc nhọn | Không duy nhất |
| $\ell^\infty$ | Hình hộp vuông, cạnh phẳng | Không duy nhất |
| $\ell^2$ (Hilbert) | Hình cầu trơn hoàn hảo | Duy nhất |
| Hilbert tổng quát | Ellipsoid trơn | Duy nhất |

Sợi chỉ đỏ xuyên suốt toàn bộ lý thuyết: **hình dáng của quả cầu đơn vị quyết định mọi thứ.** Định lý Hahn–Banach đảm bảo ta luôn tìm được tấm ván siêu phẳng tựa lên quả cầu; Định lý Riesz trong không gian Hilbert đảm bảo tấm ván đó là duy nhất.







$\xi$
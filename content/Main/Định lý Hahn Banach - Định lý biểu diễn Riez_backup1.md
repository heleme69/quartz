# Định lý Hahn–Banach và Định lý Riesz: Góc nhìn Hình học
 
---
 
## Phần I — Nền tảng: Phiếm hàm, Không gian đối ngẫu và Hình học Quả cầu
 
Trước khi xây dựng các kết quả mở rộng (Hahn–Banach) hay biểu diễn (Riesz), ta cần làm vững chắc các đối tượng sẽ thao tác xuyên suốt: phiếm hàm tuyến tính liên tục, không gian đối ngẫu, và đặc biệt là hình dáng hình học của quả cầu đơn vị — vì chính hình dáng đó quyết định tính duy nhất hay không của mọi mở rộng sau này.
 
---
 
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
 
---
 
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
 
---
 
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
 
---
 
### 1.4 Tính không duy nhất: Góc nhọn và tấm ván bập bênh
 
Khi ta mở rộng phiếm hàm từ không gian con $M$ lên $E$, bản chất hình học là kéo dài siêu phẳng tựa của $B_M = B_E \cap M$ thành siêu phẳng tựa của $B_E$.
 
Tính duy nhất hay không của mở rộng phụ thuộc trực tiếp vào **độ trơn của biên** $\partial B_E$ tại điểm tiếp xúc:
 
- **Quả cầu trơn (không gian Hilbert).** Tại mỗi điểm $x_0 \in \partial B_E$, biên là mặt trơn — chỉ tồn tại đúng một mặt phẳng tiếp tuyến, vectơ pháp tuyến bị khóa cứng. Mở rộng Hahn–Banach **duy nhất**.
- **Quả cầu có góc nhọn (chuẩn $\ell^1$, $\ell^\infty$,...).** Tại đỉnh nhọn của quả cầu, biên không trơn — có cả một *chùm* các siêu phẳng tựa đều hợp lệ, giống như cái tấm ván bập bênh đặt lên một điểm nhọn mà không bị ngã về phía nào. Sinh ra **vô số mở rộng bảo toàn chuẩn**.
Định lý sau đây minh họa hiện tượng không duy nhất bằng một ví dụ tường minh đại số.
 
> [!thm] Tính không duy nhất của mở rộng tại điểm không trơn
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
 
---
 
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
> thỏa mãn: (i) thuần nhất dương: $p(\lambda x) = \lambda p(x)$ với $\lambda > 0$; (ii) lồi: $p(x+y) \le p(x) + p(y)$; (iii) tính chất đặc trưng: $x \in C \Leftrightarrow p(x) < 1$.
 
> [!lem] Tách điểm khỏi tập lồi
> Cho $C \subsetneq E$ là tập lồi, mở, và $x_0 \in E \setminus C$. Tồn tại $f \in E^*$ sao cho $f(x) < f(x_0)$ với mọi $x \in C$.
 
---
 
### 2.2 Ý nghĩa hình học của "bảo toàn chuẩn"
 
Điều kiện $\|T\| = 1$ tương đương với $|T(x)| \le \|x\|$ với mọi $x$. Mà $\|x\|$ chính là phiếm hàm Minkowski của $B_E$. Do đó:
 
**Mở rộng phiếm hàm bảo toàn chuẩn** = kéo dài siêu phẳng tựa ra các chiều không gian mới sao cho nó vẫn **kẹp** quả cầu đơn vị — tiếp xúc biên mà không bao giờ cắt vào trong.
 
---
 
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
 
---
 
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
 
---
 
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
 
---
 
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
 
Điều kiện cần và đủ để một chuẩn được sinh bởi tích trong là đẳng thức hình bình hành.
 
> [!prp] Đẳng thức hình bình hành (Tiêu chuẩn Jordan–von Neumann)
> Chuẩn $\|\cdot\|$ trên $H$ được sinh từ tích trong khi và chỉ khi
> $$2\|x\|^2 + 2\|y\|^2 = \|x+y\|^2 + \|x-y\|^2 \quad \forall x, y \in H.$$
 
> [!prf]
> *Chiều thuận.* Khai triển trực tiếp từ tích trong:
> $$\|x+y\|^2 + \|x-y\|^2 = \langle x+y,x+y\rangle + \langle x-y,x-y\rangle = 2\langle x,x\rangle + 2\langle y,y\rangle = 2\|x\|^2 + 2\|y\|^2.$$
> *Chiều nghịch* (tồn tại tích trong từ đẳng thức) được cho bởi công thức phân cực và kiểm tra các tính chất — ta bỏ qua ở đây vì chiều này không được dùng trong tài liệu này.
 
> [!exm] Phản ví dụ 1: $\ell^p$ với $p \ne 2$ không phải không gian Hilbert
> Xét $x = (1,1,0,\dots)$ và $y = (1,-1,0,\dots)$ trong $\ell^p$. Ta có $\|x\|_p = \|y\|_p = 2^{1/p}$, $x+y = (2,0,\dots)$, $x-y = (0,2,\dots)$, nên $\|x+y\|_p = \|x-y\|_p = 2$. Đẳng thức hình bình hành đòi hỏi:
> $$4 \cdot 2^{2/p} = 8 \Leftrightarrow 2^{2/p} = 2 \Leftrightarrow p = 2.$$
> Với $p \ne 2$, $\ell^p$ không phải không gian Hilbert.
 
> [!exm] Phản ví dụ 2: $C([0,1])$ với chuẩn $L^2$ không đầy đủ
> Chuẩn $L^2$ trên $C([0,1])$ được sinh từ tích trong, nhưng không gian này không đầy đủ. Xét dãy $f_n$ liên tục: bằng $1$ trên $[0,1/2]$, dốc về $0$ trên $[1/2,\, 1/2+1/(2n)]$, bằng $0$ sau đó. Dãy $(f_n)$ là Cauchy trong chuẩn $L^2$ nhưng giới hạn là hàm bậc thang — không liên tục, không thuộc $C([0,1])$.
 
---
 
### 5.2 Bất đẳng thức Cauchy–Schwarz
 
> [!thm] Bất đẳng thức Cauchy–Schwarz
> Với mọi $x, y \in H$: $|\langle x,y\rangle| \le \|x\|\|y\|$. Đẳng thức xảy ra khi và chỉ khi $x, y$ phụ thuộc tuyến tính.
 
> [!prf]
> Xét vectơ dư của phép chiếu $x$ lên $y$ (giả sử $y \ne 0$):
> $$0 \le \Bigl\|x - \frac{\langle x,y\rangle}{\|y\|^2}y\Bigr\|^2 = \|x\|^2 - \frac{\langle x,y\rangle\overline{\langle x,y\rangle}}{\|y\|^2} - \frac{\overline{\langle x,y\rangle}\langle x,y\rangle}{\|y\|^2} + \frac{|\langle x,y\rangle|^2}{\|y\|^4}\|y\|^2 = \|x\|^2 - \frac{|\langle x,y\rangle|^2}{\|y\|^2}.$$
> Suy ra $|\langle x,y\rangle|^2 \le \|x\|^2\|y\|^2$.
 
---
 
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
 
**Sự cố khi $M$ không đóng.** Nếu $M$ không đóng, hình chiếu có thể không tồn tại. Ví dụ trong $\ell^2$, đặt $M = c_{00}$ (dãy có hữu hạn phần tử khác 0, không đóng). Với $x = (1, 1/2, 1/3, \dots) \in \ell^2 \setminus M$, ta có $d(x, M) = 0$ (có thể chặt cụt $x$ để lấy dãy trong $M$ hội tụ về $x$), nhưng không tồn tại $m \in M$ với $\|x-m\| = 0$ vì điều đó kéo theo $x \in M$ — mâu thuẫn.
 
> [!cor] Phân tích trực giao
> Nếu $M$ là không gian con đóng trong không gian Hilbert $H$, thì $H = M \oplus M^\perp$ và mọi $x \in H$ phân tích duy nhất thành $x = P_M x + P_{M^\perp} x$. Theo Pythagore:
> $$\|x\|^2 = \|P_M x\|^2 + \|P_{M^\perp} x\|^2.$$
 
---
 
## Phần VI — Định lý Biểu diễn Riesz
 
### 6.1 Hạt nhân phiếm hàm và cấu trúc chiều
 
Trước khi phát biểu Định lý Riesz, ta cần nắm rõ cấu trúc của hạt nhân một phiếm hàm — nó chính là không gian con nền tảng cho phân tích trực giao sau này.
 
> [!prp] Hạt nhân của phiếm hàm
> Cho $f \in H^*$, $f \not\equiv 0$. Khi đó $\ker(f) = \{x \mid f(x) = 0\}$ là không gian con **đóng**, và $H = \ker(f) \oplus \langle x_0 \rangle$ với $x_0 \notin \ker(f)$ bất kỳ.
 
> [!prf]
> $\ker(f)$ đóng vì $f$ liên tục và $\{0\}$ đóng. Với mọi $y \in H$, phân tích:
> $$y = \underbrace{\Bigl(y - \frac{f(y)}{f(x_0)}x_0\Bigr)}_{\in\, \ker(f)} + \frac{f(y)}{f(x_0)}x_0,$$
> vì $f\!\left(y - \frac{f(y)}{f(x_0)}x_0\right) = f(y) - f(y) = 0$. Vậy $H = \ker(f) + \langle x_0 \rangle$, và tổng này là trực tiếp vì $\langle x_0 \rangle \cap \ker(f) = \{0\}$.
 
---
 
### 6.2 Phát biểu và Chứng minh Định lý Riesz
 
> [!thm] Định lý Biểu diễn Riesz
> Cho không gian Hilbert $H$ trên trường $\mathbb{F}$. Với mọi $f \in H^*$, tồn tại **duy nhất** $y \in H$ sao cho
> $$f(x) = \langle x, y\rangle \quad \forall x \in H.$$
> Hơn nữa, $\|f\|_{H^*} = \|y\|_H$.
 
> [!prf]
> Trường hợp $f \equiv 0$: chọn $y = 0$, hiển nhiên.
>
> Trường hợp $f \not\equiv 0$: vì $\ker(f)$ đóng, có phân tích $H = \ker(f) \oplus \ker(f)^\perp$. Từ mệnh đề trước, $\ker(f)$ kém $H$ đúng 1 chiều, nên $\ker(f)^\perp$ là không gian 1 chiều. Chọn $v \in \ker(f)^\perp$ với $\|v\| = 1$.
>
> *Tìm $y$.* Với mọi $x \in H$, đặt $z = x - \frac{f(x)}{f(v)}v$. Thì $f(z) = f(x) - f(x) = 0$, tức $z \in \ker(f)$. Vì $v \in \ker(f)^\perp$, ta có $\langle z, v\rangle = 0$:
> $$\Bigl\langle x - \frac{f(x)}{f(v)}v,\ v\Bigr\rangle = 0 \implies \langle x,v\rangle = \frac{f(x)}{f(v)}\|v\|^2 = \frac{f(x)}{f(v)}.$$
> Suy ra $f(x) = f(v)\langle x,v\rangle = \langle x,\, \overline{f(v)}\,v\rangle$. Đặt $y = \overline{f(v)}\,v$.
>
> *Duy nhất.* Nếu $\langle x, y_1\rangle = \langle x,y_2\rangle$ với mọi $x$, thì $\langle x, y_1-y_2\rangle = 0$ với mọi $x$. Chọn $x = y_1-y_2$: $\|y_1-y_2\|^2 = 0$, suy ra $y_1 = y_2$.
>
> *Bảo toàn chuẩn.* $|f(x)| = |\langle x,y\rangle| \le \|x\|\|y\|$ nên $\|f\| \le \|y\|$. Ngược lại, $f(y/\|y\|) = \langle y/\|y\|, y\rangle = \|y\|$ nên $\|f\| \ge \|y\|$. Vậy $\|f\| = \|y\|$.
 
**Ứng dụng kinh điển.** Trong $\ell^2$: mọi phiếm hàm có dạng $f(x) = \sum_{i=1}^\infty x_i \overline{a_i}$ với duy nhất $(a_i) \in \ell^2$, và $\|f\| = \|a\|_2$. Trong $L^2(\Omega)$: mọi phiếm hàm có dạng $S(f) = \int_\Omega f(t)\overline{g(t)}\,dt$ với duy nhất $g \in L^2(\Omega)$, và $\|S\| = \|g\|_2$.
 
---
 
## Phần VII — Sự Thống Nhất: Hahn–Banach bị Khóa Chặt trong Không gian Hilbert
 
### 7.1 Tính duy nhất của mở rộng Hahn–Banach trong không gian Hilbert
 
Trong không gian Banach tổng quát, mở rộng Hahn–Banach không nhất thiết duy nhất vì quả cầu đơn vị có thể có góc nhọn. Khi ta đặt mình trong không gian Hilbert, quả cầu đơn vị trơn hoàn hảo, mỗi điểm trên biên chỉ có đúng một mặt phẳng tiếp tuyến, và Định lý Riesz "khóa chặt" vectơ pháp tuyến. Kết quả:
 
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
 
---
 
### 7.2 Ví dụ tính toán minh họa
 
> [!exm] Tìm mở rộng Hahn–Banach duy nhất trong $\mathbb{R}^2$
> Cho $M = \{(x, 3x) \mid x \in \mathbb{R}\} \subset \mathbb{R}^2$ (không gian con đóng) và $f(x, 3x) = x$. Tìm mở rộng Hahn–Banach $g$ trên $\mathbb{R}^2$ (với tích trong Euclid chuẩn).
 
Vectơ đơn vị sinh ra $M$ là $e_1 = \frac{1}{\sqrt{10}}(1,3)$. Giá trị của $f$ tại $e_1$: $f(e_1) = 1/\sqrt{10}$.
 
Vectơ biểu diễn Riesz trên $M$: $u = \overline{f(e_1)}\cdot e_1 = \frac{1}{\sqrt{10}} \cdot \frac{1}{\sqrt{10}}(1,3) = \frac{1}{10}(1,3)$.
 
Mở rộng Hahn–Banach duy nhất trên $\mathbb{R}^2$ là lấy tích trong với $u$:
$$g(x, y) = \Bigl\langle (x,y),\ \Bigl(\tfrac{1}{10}, \tfrac{3}{10}\Bigr)\Bigr\rangle = \frac{x}{10} + \frac{3y}{10}.$$
 
Kiểm tra: tại $(x, 3x) \in M$, $g(x, 3x) = x/10 + 9x/10 = x = f(x, 3x)$. $\checkmark$
 
---
 
## Tổng kết hình học
 
| Không gian | Hình dáng $B_E$ | Mở rộng Hahn–Banach |
|---|---|---|
| $\ell^1$ | Hình thoi, góc nhọn | Không duy nhất |
| $\ell^\infty$ | Hình hộp vuông, cạnh phẳng | Không duy nhất |
| $\ell^2$ (Hilbert) | Hình cầu trơn hoàn hảo | Duy nhất |
| Hilbert tổng quát | Ellipsoid trơn | Duy nhất |
 
Sợi chỉ đỏ xuyên suốt toàn bộ lý thuyết: **hình dáng của quả cầu đơn vị quyết định mọi thứ.** Định lý Hahn–Banach đảm bảo ta luôn tìm được tấm ván siêu phẳng tựa lên quả cầu; Định lý Riesz trong không gian Hilbert đảm bảo tấm ván đó là duy nhất.

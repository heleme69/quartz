
> [!prob] Bài 1
> Cho $\mathbb{C}$ là tập hợp tất cả các số phức và $\mathbb{R}$ là tập hợp các số thực. Ta định nghĩa $T$ và $U$ là các tập hợp con của $M_2(\mathbb{C})$, tập các ma trận vuông hệ số phức, như sau:
> $$T = \left\{ \begin{pmatrix} a & b \\ 0 & c \end{pmatrix} : b \in \mathbb{R}, a, c \in \mathbb{C} \text{ sao cho } |a| = |c| = 1 \right\}$$
> $$U = \left\{ \begin{pmatrix} 1 & b \\ 0 & 1 \end{pmatrix} : b \in \mathbb{R} \right\}$$
> a) Chứng minh $T, U$ là các nhóm con của nhóm nhân các ma trận vuông khả nghịch cấp 2, hệ số phức. $U$ có phải là nhóm con chuẩn tắc của $T$ hay không? Vì sao?
> b) Chứng minh rằng $U$ đẳng cấu với nhóm cộng các số thực.
> c) Nhóm $U$ có đẳng cấu với nhóm nhân các số thực khác không hay không? Vì sao?

> [!ans] Lời giải Bài 1
> **a) Chứng minh $T, U$ là nhóm con và xét tính chuẩn tắc:**
> Ký hiệu $G = \text{GL}_2(\mathbb{C})$ là nhóm nhân các ma trận vuông khả nghịch cấp 2 hệ số phức.
> 
> *   **Chứng minh $T \le G$:**
>     *   Ma trận đơn vị $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \in T$ (do $0 \in \mathbb{R}$ và $|1| = 1$), nên $T \neq \emptyset$.
>     *   Với mọi $A = \begin{pmatrix} a_1 & b_1 \\ 0 & c_1 \end{pmatrix}, B = \begin{pmatrix} a_2 & b_2 \\ 0 & c_2 \end{pmatrix} \in T$, ta có:
>         $$AB = \begin{pmatrix} a_1 a_2 & a_1 b_2 + b_1 c_2 \\ 0 & c_1 c_2 \end{pmatrix}$$
>         Vì $|a_1 a_2| = |a_1||a_2| = 1$, $|c_1 c_2| = |c_1||c_2| = 1$, tuy nhiên phần tử ở vị trí $(1,2)$ là $a_1 b_2 + b_1 c_2$ **chưa chắc thuộc $\mathbb{R}$** nếu $a_1, c_2 \in \mathbb{C} \setminus \mathbb{R}$.
>         *Nhận xét:* Để $T$ thực sự là nhóm con theo đúng đề bài, phép nhân phải khép kín. Nếu đề bài chuẩn xác theo định nghĩa trên thì $T$ **không khép kín** dưới phép nhân (ví dụ chọn $a_1 = i, b_2 = 1, b_1 = 0 \implies a_1 b_2 = i \notin \mathbb{R}$). 
>         *Tuy nhiên, trong phạm vi ý đồ đề thi cấu trúc chuẩn,* nếu xem $T$ khép kín (hoặc với giả thiết mở rộng $b \in \mathbb{C}$), ta kiểm tra tính chuẩn tắc của $U$ trong $T$ như sau:
> *   **Chứng minh $U \le G$:**
>     *   $I_2 \in U \implies U \neq \emptyset$.
>     *   Với $X = \begin{pmatrix} 1 & b_1 \\ 0 & 1 \end{pmatrix}, Y = \begin{pmatrix} 1 & b_2 \\ 0 & 1 \end{pmatrix} \in U$, ta có $XY^{-1} = \begin{pmatrix} 1 & b_1 - b_2 \\ 0 & 1 \end{pmatrix} \in U$ do $b_1 - b_2 \in \mathbb{R}$. Vậy $U \le G$ (và $U \subseteq T$ nên $U \le T$).
> *   **Xét tính chuẩn tắc của $U$ trong $T$:**
>     $U$ **không phải** là nhóm con chuẩn tắc của $T$.
>     *Phản ví dụ:* Chọn $M = \begin{pmatrix} i & 0 \\ 0 & 1 \end{pmatrix} \in T$ (vì $|i|=|1|=1$) và $N = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \in U$. Ta có:
>     $$M N M^{-1} = \begin{pmatrix} i & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} -i & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & i \\ 0 & 1 \end{pmatrix} \notin U \quad (\text{do } i \notin \mathbb{R})$$
> 
> **b) Chứng minh $U \cong (\mathbb{R}, +)$:**
> Xét ánh xạ $\varphi: (\mathbb{R}, +) \to U$ xác định bởi $\varphi(x) = \begin{pmatrix} 1 & x \\ 0 & 1 \end{pmatrix}$.
> *   $\varphi(x + y) = \begin{pmatrix} 1 & x + y \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & x \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & y \\ 0 & 1 \end{pmatrix} = \varphi(x)\varphi(y)$, nên $\varphi$ là đồng cấu nhóm.
> *   $\varphi$ rõ ràng là song ánh do với mỗi ma trận trong $U$ tồn tại duy nhất giá trị thực ở vị trí $(1,2)$.
> Vậy $\varphi$ là đẳng cấu, suy ra $U \cong (\mathbb{R}, +)$.
> 
> **c) $U$ có đẳng cấu với $(\mathbb{R}^*, \cdot)$ không?**
> **Không.**
> *Lý do:* Trong nhóm $(\mathbb{R}^*, \cdot)$, tồn tại phần tử khác phần tử đơn vị có cấp 2 là $-1$ (vì $(-1)^2 = 1$). Trong khi đó, nhóm $U \cong (\mathbb{R}, +)$ không có phần tử nào có cấp hữu hạn lớn hơn 1 (phương trình $x + x = 0$ trong $\mathbb{R}$ chỉ có nghiệm duy nhất $x = 0$). Do đặc số về cấp phần tử khác nhau, hai nhóm không thể đẳng cấu.

> [!prob] Bài 2
> Cho $F, G, H$ là các nhóm và $f: F \to H, g: G \to H$ là các đồng cấu.
> a) Đặt $K = \{k \in H : \exists a \in F, b \in G : k = f(a) = g(b)\}$. Chứng minh rằng $K$ là nhóm con của $H$.
> b) Chứng minh $K = \text{Im } f \cap \text{Im } g$.
> c) Biết rằng $\text{Im } f$ là nhóm con chuẩn tắc của $H$, $|G| = |H|$ và $g$ là đơn ánh. Chứng minh rằng $K$ là nhóm con chuẩn tắc của $H$.

> [!ans] Lời giải Bài 2
> **a) Chứng minh $K \le H$:**
> *   Vì $f(e_F) = g(e_G) = e_H$ nên $e_H \in K$, suy ra $K \neq \emptyset$.
> *   Với mọi $k_1, k_2 \in K$, tồn tại $a_1, a_2 \in F$ và $b_1, b_2 \in G$ sao cho $k_1 = f(a_1) = g(b_1)$ và $k_2 = f(a_2) = g(b_2)$.
> *   Khi đó $k_1 k_2^{-1} = f(a_1)f(a_2)^{-1} = f(a_1 a_2^{-1})$ và $k_1 k_2^{-1} = g(b_1)g(b_2)^{-1} = g(b_1 b_2^{-1})$.
> *   Do $a_1 a_2^{-1} \in F$ và $b_1 b_2^{-1} \in G$, ta có $k_1 k_2^{-1} \in K$. Vậy $K \le H$.
> 
> **b) Chứng minh $K = \text{Im } f \cap \text{Im } g$:**
> *   $(\subseteq)$ Nếu $k \in K$ thì $k = f(a) \in \text{Im } f$ và $k = g(b) \in \text{Im } g$, suy ra $k \in \text{Im } f \cap \text{Im } g$.
> *   $(\supseteq)$ Nếu $k \in \text{Im } f \cap \text{Im } g$ thì tồn tại $a \in F$ để $k = f(a)$ và tồn tại $b \in G$ để $k = g(b)$. Khi đó $k = f(a) = g(b)$, suy ra $k \in K$.
> Vậy $K = \text{Im } f \cap \text{Im } g$.
> 
> **c) Chứng minh $K \unlhd H$:**
> *   Vì $g: G \to H$ là đơn ánh giữa hai tập hữu hạn có cùng lực lượng $|G| = |H|$ (hoặc trong trường hợp tổng quát bản chất là song ánh), nên $g$ là toàn ánh.
> *   Do $g$ toàn ánh nên $\text{Im } g = H$.
> *   Từ câu (b), ta có $K = \text{Im } f \cap \text{Im } g = \text{Im } f \cap H = \text{Im } f$.
> *   Theo giả thiết $\text{Im } f \unlhd H$, do đó $K \unlhd H$.

> [!prob] Bài 3
> Cho $G, H$ là các nhóm, ta ký hiệu $xy$ cho phép nhân hai phần tử ở các nhóm. Ta định nghĩa nhóm $G \times H$ như sau: với mọi $(g_1, h_1), (g_2, h_2) \in G \times H$ thì
> $$(g_1, h_1)(g_2, h_2) = (g_1 g_2, h_1 h_2)$$
> a) Chứng minh rằng $G \times H$ là nhóm.
> b) Cho $G'$ và $H'$ lần lượt là các nhóm con của $G$ và $H$. Chứng minh rằng các tập
> $$\{(g, e_H) : g \in G'\} \quad \text{và} \quad \{(e_G, h) : h \in H'\}$$
> lần lượt là các nhóm con của $G \times H$.
> c) Cho $U$ là tập con của $G \times H$. Chứng minh $U$ là nhóm con của $G \times H$ khi và chỉ khi tồn tại nhóm con $G'$ của $G$ và nhóm con $H'$ của $H$ để $U = G' \times H'$.

> [!ans] Lời giải Bài 3
> **a) Chứng minh $G \times H$ là nhóm:**
> *   *Tính kết hợp:* Với mọi $(g_1, h_1), (g_2, h_2), (g_3, h_3) \in G \times H$, do phép toán trên $G$ và $H$ kết hợp nên:
>     $$[(g_1, h_1)(g_2, h_2)](g_3, h_3) = (g_1 g_2 g_3, h_1 h_2 h_3) = (g_1, h_1)[(g_2, h_2)(g_3, h_3)]$$
> *   *Phần tử đơn vị:* Là $(e_G, e_H) \in G \times H$, vì $(g, h)(e_G, e_H) = (e_G, e_H)(g, h) = (g, h)$.
> *   *Phần tử nghịch đảo:* Với mỗi $(g, h) \in G \times H$, phần tử $(g^{-1}, h^{-1})$ là nghịch đảo vì $(g, h)(g^{-1}, h^{-1}) = (e_G, e_H)$.
> 
> **b) Chứng minh $\{(g, e_H) : g \in G'\} \le G \times H$:**
> Đặt $K = \{(g, e_H) : g \in G'\}$.
> *   $(e_G, e_H) \in K$ do $e_G \in G'$, nên $K \neq \emptyset$.
> *   Với mọi $(a, e_H), (b, e_H) \in K$ (trong đó $a, b \in G'$), ta có:
>     $$(a, e_H)(b, e_H)^{-1} = (a, e_H)(b^{-1}, e_H) = (ab^{-1}, e_H) \in K \quad (\text{vì } ab^{-1} \in G' \text{ do } G' \le G)$$
> Tương tự, $\{(e_G, h) : h \in H'\}$ cũng là nhóm con của $G \times H$.
> 
> **c) Khẳng định ở câu c là SAI (Mệnh đề chỉ đúng 1 chiều):**
> *   *Chiều $(\Leftarrow)$ đúng:* Nếu $G' \le G$ và $H' \le H$ thì dễ thấy $G' \times H' \le G \times H$.
> *   *Chiều $(\Rightarrow)$ sai:* Tồn tại nhóm con $U \le G \times H$ không có dạng $G' \times H'$.
>     *Phản ví dụ:* Chọn $G = H = \mathbb{Z}_2 = \{\overline{0}, \overline{1}\}$.
>     Xét nhóm con đường chéo $U = \{(\overline{0}, \overline{0}), (\overline{1}, \overline{1})\} \le \mathbb{Z}_2 \times \mathbb{Z}_2$.
>     Nếu $U = G' \times H'$ thì do $|U| = 2$, phải có $|G'||H'| = 2$, giả sử $|G'| = 2, |H'| = 1 \implies G' = \mathbb{Z}_2, H' = \{\overline{0}\}$. Khi đó $G' \times H' = \{(\overline{0}, \overline{0}), (\overline{1}, \overline{0})\} \neq U$, vô lý.

> [!prob] Bài 4
> Cho tập hợp $G = \mathbb{R} \setminus \{-1\}$. Với mỗi $x, y$ thuộc $G$, ta định nghĩa
> $$x \circ y = xy + x + y$$
> a) Chứng minh $(G, \circ)$ là nhóm giao hoán.
> b) Tìm phần tử $x$ thoả $x^2 = e_G$ trong đó $e_G$ là phần tử trung hoà của $G$.
> c) Tìm tất cả phần tử có cấp hữu hạn trong $G$.
> d) Xét $\varphi: G \to \mathbb{R}, \varphi(x) = \ln|x + 1|$. Chứng minh $\varphi$ xác định một đồng cấu nhóm từ nhóm $G$ vào nhóm cộng các số thực. Từ đó chứng minh rằng với $H$ là nhóm con cấp 2 của $G$ thì $G/H$ đẳng cấu với nhóm cộng các số thực.

> [!ans] Lời giải Bài 4
> **a) Chứng minh $(G, \circ)$ là nhóm giao hoán:**
> Nhận xét biến đổi: $x \circ y = xy + x + y = (x + 1)(y + 1) - 1$.
> *   *Tính khép kín:* Nếu $x, y \neq -1$ thì $(x + 1)(y + 1) \neq 0 \implies x \circ y \neq -1$, nên $x \circ y \in G$.
> *   *Tính kết hợp và giao hoán:* Dễ thấy $(x \circ y) \circ z = (x + 1)(y + 1)(z + 1) - 1 = x \circ (y \circ z)$ và $x \circ y = y \circ x$.
> *   *Phần tử trung hòa:* $e_G = 0 \in G$, vì $x \circ 0 = (x + 1)(1) - 1 = x$.
> *   *Phần tử nghịch đảo:* Với $x \in G$, chọn $x' = \frac{-x}{x + 1} \in G$ (do $x' \neq -1$), ta có $(x + 1)(x' + 1) - 1 = (x + 1) \frac{1}{x + 1} - 1 = 0 = e_G$.
> 
> **b) Tìm $x$ thỏa $x^2 = e_G$:**
> $$x \circ x = 0 \iff (x + 1)^2 - 1 = 0 \iff (x + 1)^2 = 1 \iff x + 1 = \pm 1 \iff x = 0 \text{ hoặc } x = -2$$
> 
> **c) Tìm tất cả phần tử có cấp hữu hạn trong $G$:**
> Xét ánh xạ $f: (G, \circ) \to (\mathbb{R}^*, \cdot)$ định bởi $f(x) = x + 1$.
> Do $f(x \circ y) = (x + 1)(y + 1) = f(x)f(y)$ và $f$ là song ánh, nên $f$ là một đẳng cấu nhóm.
> Trong nhóm $(\mathbb{R}^*, \cdot)$, các phần tử có cấp hữu hạn chỉ gồm $1$ (cấp 1) và $-1$ (cấp 2).
> Do đó, các phần tử có cấp hữu hạn trong $G$ là $f^{-1}(1) = 0$ và $f^{-1}(-1) = -2$.
> 
> **d) Chứng minh đồng cấu và $G/H \cong (\mathbb{R}, +)$:**
> *   *Chứng minh đồng cấu:*
>     $$\varphi(x \circ y) = \ln|(x \circ y) + 1| = \ln|(x + 1)(y + 1)| = \ln(|x + 1||y + 1|) = \ln|x + 1| + \ln|y + 1| = \varphi(x) + \varphi(y)$$
> *   *Tìm hạt nhân $\text{Ker } \varphi$:*
>     $$\text{Ker } \varphi = \{x \in G : \ln|x + 1| = 0\} = \{x \in G : |x + 1| = 1\} = \{0, -2\}$$
>     Nhận thấy $H = \{0, -2\}$ chính là nhóm con cấp 2 duy nhất của $G$.
> *   *Áp dụng Định lý đẳng cấu thứ nhất:*
>     Ánh xạ $\varphi$ là toàn ánh vì với mọi $y \in \mathbb{R}$, chọn $x = e^y - 1 \in G$ thì $\varphi(x) = y$.
>     Do đó $G/\text{Ker } \varphi \cong \text{Im } \varphi \implies G/H \cong (\mathbb{R}, +)$.

> [!prob] Bài 5
> Cho nhóm $G$ và $H$ là nhóm con chuẩn tắc của $G$.
> a) Chứng minh rằng nếu $G$ cyclic thì $H$ và $G/H$ cũng là các nhóm cyclic.
> b) Xét $G \subset S_4$ với
> $$G = \{e_G, (1\ 2)(3\ 4), (1\ 3)(2\ 4), (1\ 4)(2\ 3)\}$$
> Mô tả nhóm con $H$ của $G$ sinh bởi $(1\ 2)(3\ 4)$ và chứng minh rằng $H$ là nhóm con chuẩn tắc của $G$. Từ đó chứng minh rằng chiều ngược lại ở ý a là chưa chắc đúng.
> c) Cho $G$ là nhóm giao hoán hữu hạn. Giả sử $m = |H|$, $n = |G/H|$ và $\gcd(m, n) = 1$. Chứng minh rằng nếu $H$ và $G/H$ là các nhóm cyclic thì $G$ là nhóm cyclic.

> [!ans] Lời giải Bài 5
> **a) Chứng minh $H$ và $G/H$ cyclic khi $G$ cyclic:**
> *   Giả sử $G = \langle g \rangle$.
> *   *Với $H$:* Nếu $H = \{e\}$ thì $H = \langle e \rangle$ cyclic. Nếu $H \neq \{e\}$, gọi $k$ là số nguyên dương nhỏ nhất sao cho $g^k \in H$. Với mọi $g^m \in H$, theo phép chia có dư $m = qk + r$ ($0 \le r < k$), ta có $g^r = g^m (g^k)^{-q} \in H \implies r = 0$. Vậy $H = \langle g^k \rangle$ là nhóm cyclic.
> *   *Với $G/H$:* Mọi lớp ghép trong $G/H$ có dạng $g^m H = (gH)^m$, do đó $G/H = \langle gH \rangle$ là nhóm cyclic.
> 
> **b) Phản ví dụ cho chiều ngược lại:**
> *   Nhóm con $H = \langle (1\ 2)(3\ 4) \rangle = \{e_G, (1\ 2)(3\ 4)\}$.
> *   Vì $G$ là nhóm giao hoán (nhóm Klein $V_4$, mọi phần tử đều có cấp 2 và giao hoán với nhau) nên mọi nhóm con của $G$ đều là chuẩn tắc, do đó $H \unlhd G$.
> *   Ta có $H \cong \mathbb{Z}_2$ (cyclic) và $G/H$ có cấp $|G|/|H| = 4/2 = 2 \implies G/H \cong \mathbb{Z}_2$ (cyclic).
> *   Tuy nhiên, $G = V_4$ **không phải là nhóm cyclic** vì $G$ không có phần tử nào cấp 4.
> 
> **c) Chứng minh $G$ cyclic khi $\gcd(m, n) = 1$:**
> *   Giả sử $H = \langle a \rangle$ có cấp $m$ và $G/H = \langle gH \rangle$ có cấp $n$.
> *   Xét phần tử $g^m H = (gH)^m$ trong $G/H$. Vì $\gcd(m, n) = 1$, phần tử $(gH)^m$ vẫn là phần tử sinh của $G/H$, tức có cấp $n$. Do đó cấp của $g^m$ trong $G$ phải là bội của $n$, giả sử $|g^m| = nk$.
> *   Đặt $b = (g^m)^k = g^{mk}$, khi đó phần tử $y = g^m$ có cấp là một bội của $n$. Cụ thể, chọn phần tử $b = g^{mk}$ sao cho $|b| = n$ (luôn tồn tại trong nhóm cyclic $\langle g^m \rangle$).
> *   Xét phần tử $x = ab \in G$. Vì $G$ giao hoán và $\gcd(|a|, |b|) = \gcd(m, n) = 1$, cấp của tích bằng tích các cấp: $|x| = |ab| = mn = |G|$.
> *   Vì $G$ chứa phần tử $x$ có cấp bằng đúng cấp của nhóm nên $G = \langle x \rangle$ là nhóm cyclic.

> [!prob] Bài 6
> Cho nhóm $G$ với phép nhân hai phần tử $x, y$ được ký hiệu là $xy$. Với hai phần tử $x, y \in G$, ta định nghĩa hai ánh xạ
> $$L_x: G \to G, z \mapsto xz \quad \text{và} \quad R_y: G \to G, z \mapsto zy$$
> a) Chứng minh rằng $L_x \circ R_y = R_y \circ L_x$ với mọi $x, y$ thuộc $G$.
> b) Chứng minh rằng $G$ giao hoán khi và chỉ khi $L_x = R_x$ với mọi $x \in G$.
> c) Xét hai phần tử $x, y \in G$. Chứng minh các mệnh đề sau là tương đương:
> (1) $x = y$
> (2) $L_x = L_y$
> (3) $R_x = R_y$

> [!ans] Lời giải Bài 6
> **a) Chứng minh $L_x \circ R_y = R_y \circ L_x$:**
> Với mọi $z \in G$, sử dụng tính kết hợp của phép nhân trong nhóm $G$:
> $$(L_x \circ R_y)(z) = L_x(R_y(z)) = L_x(zy) = x(zy) = (xz)y = R_y(xz) = R_y(L_x(z)) = (R_y \circ L_x)(z)$$
> Vậy $L_x \circ R_y = R_y \circ L_x$.
> 
> **b) Chứng minh $G$ giao hoán $\iff L_x = R_x \ (\forall x \in G)$:**
> *   $(\Rightarrow)$ Nếu $G$ giao hoán, với mọi $x, z \in G$ ta có $L_x(z) = xz = zx = R_x(z) \implies L_x = R_x$.
> *   $(\Leftarrow)$ Nếu $L_x = R_x$ với mọi $x \in G$, thì với mọi $z \in G$ ta có $xz = L_x(z) = R_x(z) = zx$. Vậy $G$ giao hoán.
> 
> **c) Chứng minh $(1) \iff (2) \iff (3)$:**
> *   $(1) \implies (2):$ Nếu $x = y$ thì hiển nhiên $L_x(z) = xz = yz = L_y(z)$ với mọi $z \in G \implies L_x = L_y$.
> *   $(2) \implies (1):$ Nếu $L_x = L_y$, chọn $z = e$ (phần tử đơn vị), ta có $x = xe = L_x(e) = L_y(e) = ye = y$.
> *   Hoàn toàn tương tự, ta có $(1) \iff (3)$ bằng cách tác động vào phần tử đơn vị $e$: $R_x(e) = ex = x$.
> Vậy $(1), (2), (3)$ tương đương.

> [!prob] Bài 7
> Cho nhóm $G$, ta định nghĩa $xyx^{-1}y^{-1}$ là giao hoán tử của hai phần tử $x, y$ thuộc $G$. Gọi $G'$ là giao của tất cả nhóm con của $G$ sao cho các nhóm con đó chứa tất cả giao hoán tử trong $G$.
> a) Chứng minh $G'$ là nhóm con chuẩn tắc của $G$.
> b) Giả sử $N$ là nhóm con chuẩn tắc của $G$. Chứng minh rằng $G' \le N$ khi và chỉ khi $G/N$ là nhóm giao hoán.
> c) Cho $G$ hữu hạn và $H$ là nhóm con chuẩn tắc sao cho cấp của $H$ nguyên tố cùng nhau với cấp $G'$. Chứng minh $xy = yx$ với mọi $x \in G'$ và $y \in H$.

> [!ans] Lời giải Bài 7
> **a) Chứng minh $G' \unlhd G$:**
> $G'$ (nhóm con hoán tử) được sinh bởi tập tất cả các giao hoán tử $[x, y] = xyx^{-1}y^{-1}$.
> Với mọi $g \in G$ và một giao hoán tử $[x, y]$, ta có:
> $$g [x, y] g^{-1} = g (xyx^{-1}y^{-1}) g^{-1} = (gxg^{-1})(gyg^{-1})(gxg^{-1})^{-1}(gyg^{-1})^{-1} = [gxg^{-1}, gyg^{-1}] \in G'$$
> Vì phép liên hợp biến một phần tử sinh của $G'$ thành một phần tử sinh khác của $G'$, nên với mọi $u \in G'$, ta có $g u g^{-1} \in G'$. Vậy $G' \unlhd G$.
> 
> **b) Chứng minh $G' \le N \iff G/N$ giao hoán:**
> *   $G/N$ là nhóm giao hoán $\iff (xN)(yN) = (yN)(xN) \ (\forall x, y \in G)$
> *   $\iff (xy)N = (yx)N \iff (xy)(yx)^{-1} \in N$
> *   $\iff xyx^{-1}y^{-1} \in N \ (\forall x, y \in G)$.
> *   Điều này xảy ra khi và chỉ khi $N$ chứa tất cả các giao hoán tử của $G$, tức là $G' \le N$ (do $G'$ là nhóm con nhỏ nhất chứa các giao hoán tử).
> 
> **c) Chứng minh $xy = yx$ với mọi $x \in G', y \in H$:**
> Xét giao hoán tử $[x, y] = xyx^{-1}y^{-1}$ với $x \in G'$ và $y \in H$.
> *   Viết $[x, y] = x(yx^{-1}y^{-1}) = x(y x y^{-1})^{-1} \in G'$ (vì $G' \unlhd G$, $y x y^{-1} \in G'$).
> *   Viết $[x, y] = (xyx^{-1})y^{-1} \in H$ (vì $H \unlhd G$, $xyx^{-1} \in H$).
> *   Suy ra $[x, y] \in G' \cap H$.
> *   Theo định lý Lagrange, cấp của nhóm con giao $G' \cap H$ phải là ước chung của $|G'|$ và $|H|$.
> *   Do $\gcd(|G'|, |H|) = 1$ nên $|G' \cap H| = 1 \implies G' \cap H = \{e\}$.
> *   Vậy $[x, y] = e \implies xyx^{-1}y^{-1} = e \implies xy = yx$.

> [!prob] Bài 8
> Cho tập $S = \{1, 2, \dots, n\}$. Họ $(B_i)_{i=1}^r$ các tập con của $S$ được gọi là phân hoạch của $S$ nếu $B_i \cap B_j = \emptyset$ nếu $i \neq j$ và $\bigcup_{i=1}^r B_i = S$. Gọi $S_n$ là nhóm các song ánh trên tập $S$.
> a) Gọi $(B_i)_{i=1}^r$ là một phân hoạch của $S$. Xét tập con $\mathcal{A} = \{\sigma \in S_n : \sigma(i) \in B_k \iff i \in B_k, k = 1, 2, \dots, r\}$. Chứng minh rằng $\mathcal{A}$ là nhóm con của $S_n$.
> b) Chứng minh rằng nếu $n = n_1 + n_2 + \dots + n_r$ với $n_i \in \mathbb{N}$ thì
> $$n_1! n_2! \cdots n_r! \mid n!$$

> [!ans] Lời giải Bài 8
> **a) Chứng minh $\mathcal{A} \le S_n$:**
> Định nghĩa của $\mathcal{A}$ đồng nghĩa với việc $\sigma(B_k) = B_k$ với mọi $k = 1, \dots, r$.
> *   Ánh xạ đồng nhất $\text{id} \in \mathcal{A}$ vì $\text{id}(B_k) = B_k$, nên $\mathcal{A} \neq \emptyset$.
> *   Với $\sigma, \tau \in \mathcal{A}$, ta có $(\sigma \circ \tau)(B_k) = \sigma(\tau(B_k)) = \sigma(B_k) = B_k$, suy ra $\sigma \circ \tau \in \mathcal{A}$.
> *   Với $\sigma \in \mathcal{A}$, do $\sigma$ là song ánh và $\sigma(B_k) = B_k$ nên $\sigma^{-1}(B_k) = B_k \implies \sigma^{-1} \in \mathcal{A}$.
> Vậy $\mathcal{A}$ là nhóm con của $S_n$.
> 
> **b) Chứng minh tính chia hết:**
> *   Cho phân hoạch $S = B_1 \cup B_2 \cup \dots \cup B_r$ sao cho $|B_k| = n_k$ với mọi $k=1, \dots, r$.
> *   Khi đó, mỗi hoán vị $\sigma \in \mathcal{A}$ thực chất là tổ hợp của các hoán vị độc lập trên từng tập con $B_k$.
> *   Do đó, nhóm $\mathcal{A}$ đẳng cấu với tích trực tiếp các nhóm hoán vị trên từng khối:
>     $$\mathcal{A} \cong S(B_1) \times S(B_2) \times \dots \times S(B_r)$$
> *   Cấp của nhóm $\mathcal{A}$ là:
>     $$|\mathcal{A}| = |S(B_1)| \cdot |S(B_2)| \cdots |S(B_r)| = n_1! n_2! \cdots n_r!$$
> *   Theo định lý Lagrange, cấp của một nhóm con luôn là ước số của cấp nhóm lớn ($|\mathcal{A}| \mid |S_n|$).
> *   Vì $|S_n| = n!$, ta suy ra $n_1! n_2! \cdots n_r! \mid n!$.

> [!prob] Bài 9
> a) Cho $m, n$ là các số nguyên dương. Chứng minh rằng $\mathbb{Z}_m \times \mathbb{Z}_n$ đẳng cấu với $\mathbb{Z}_{mn}$ khi và chỉ khi $\gcd(m, n) = 1$.
> b) Có bao nhiêu giá trị nguyên của $n$ để nhóm $\mathbb{Z} \times \mathbb{Z} \times \dots \times \mathbb{Z}$ (tích trực tiếp của $n$ nhóm $\mathbb{Z}$) là nhóm cyclic? Vì sao?
> c) Nhóm $\mathbb{Q}$ có phải là nhóm cyclic không? Vì sao?
> d) Nhóm thương $\mathbb{Q}/\mathbb{Z}$ và $\mathbb{R}/\mathbb{Z}$ có cyclic không? Vì sao?

> [!ans] Lời giải Bài 9
> **a) $\mathbb{Z}_m \times \mathbb{Z}_n \cong \mathbb{Z}_{mn} \iff \gcd(m, n) = 1$:**
> *   $(\Leftarrow)$ Nếu $\gcd(m, n) = 1$, xét phần tử $(\overline{1}, \overline{1}) \in \mathbb{Z}_m \times \mathbb{Z}_n$. Cấp của phần tử này là $\text{BCNN}(m, n) = \frac{mn}{\gcd(m, n)} = mn$. Vì nhóm có cấp $mn$ và chứa một phần tử cấp $mn$, nó là nhóm cyclic, do đó đẳng cấu với $\mathbb{Z}_{mn}$.
> *   $(\Rightarrow)$ Nếu $d = \gcd(m, n) > 1$, thì đặt $k = \text{BCNN}(m, n) = \frac{mn}{d} < mn$. Với mọi $(\overline{x}, \overline{y}) \in \mathbb{Z}_m \times \mathbb{Z}_n$, ta có $k(\overline{x}, \overline{y}) = (\overline{kx}, \overline{ky}) = (\overline{0}, \overline{0})$. Do đó không tồn tại phần tử nào có cấp $mn$, nhóm không cyclic nên không thể đẳng cấu với $\mathbb{Z}_{mn}$.
> 
> **b) Số giá trị nguyên của $n$ để $\mathbb{Z}^n$ cyclic:**
> Chỉ có **1 giá trị** là $n = 1$.
> *   Với $n = 1$, $\mathbb{Z}^1 = \mathbb{Z}$ là nhóm cyclic sinh bởi 1.
> *   Với $n \ge 2$, giả sử $\mathbb{Z}^n = \langle \mathbf{g} \rangle$ là cyclic. Khi đó mọi phần tử trong $\mathbb{Z}^n$ đều là bội nguyên của $\mathbf{g}$, nghĩa là mọi cặp phần tử đều phụ thuộc tuyến tính. Tuy nhiên $\mathbb{Z}^n$ chứa các vectơ cơ sở chuẩn $e_1 = (1, 0, \dots, 0)$ và $e_2 = (0, 1, \dots, 0)$ độc lập tuyến tính, vô lý.
> 
> **c) $(\mathbb{Q}, +)$ có phải nhóm cyclic không?**
> **Không.**
> *Chứng minh:* Giả sử $\mathbb{Q} = \langle \frac{a}{b} \rangle$ với $a, b \in \mathbb{Z}, b \neq 0$.
> Xét số hữu tỉ $\frac{a}{2b} \in \mathbb{Q}$. Khi đó phải tồn tại số nguyên $k$ sao cho $\frac{a}{2b} = k \frac{a}{b} \implies 2k = 1$, vô lý vì không có số nguyên $k$ nào thỏa mãn.
> 
> **d) $\mathbb{Q}/\mathbb{Z}$ và $\mathbb{R}/\mathbb{Z}$ có cyclic không?**
> **Cả hai đều không cyclic.**
> *   *Với $\mathbb{Q}/\mathbb{Z}$:* Mọi phần tử $\frac{a}{b} + \mathbb{Z}$ trong $\mathbb{Q}/\mathbb{Z}$ đều có cấp hữu hạn (cấp là ước của $b$). Tuy nhiên nhóm $\mathbb{Q}/\mathbb{Z}$ là vô hạn. Một nhóm cyclic vô hạn phải đẳng cấu với $\mathbb{Z}$ (không có phần tử cấp hữu hạn khác 0), do đó $\mathbb{Q}/\mathbb{Z}$ không cyclic.
> *   *Với $\mathbb{R}/\mathbb{Z}$:* Nhóm $\mathbb{R}/\mathbb{Z}$ có lực lượng không đếm được (continuum), trong khi mọi nhóm cyclic đều là tập đếm được (hữu hạn hoặc tương đương $\mathbb{Z}$).

> [!prob] Bài 10
> Cho nhóm $G$ có nhiều hơn 2 phần tử. Như đã biết $\text{Aut}(G)$ tập chứa tất cả các tự đẳng cấu trên $G$, có cấu trúc nhóm với phép toán hợp thành ánh xạ. Một nhóm con $H$ của $G$ được gọi là nhóm con đặc trưng nếu với mọi $f \in \text{Aut}(G)$ thì $f(H) = H$.
> a) Chứng minh rằng mọi nhóm con đặc trưng đều chuẩn tắc.
> b) Cho $C(G) = \{g \in G : gx = xg, \forall x \in G\}$ gọi là tâm của $G$. Biết rằng $C(G)$ là một nhóm con của $G$. Chứng minh $C(G)$ là nhóm con đặc trưng của $G$.
> c) Giả sử ta có $I, H$ là các nhóm con của $G$ sao cho $I \le H \le G$ và $I$ là nhóm con đặc trưng của $H$, $H$ là nhóm con đặc trưng của $G$. Chứng minh rằng $I$ là nhóm con đặc trưng của $G$.
> d) Cho $H$ là nhóm con duy nhất của $G$ có cấp $m$. Chứng minh rằng $H$ là nhóm con đặc trưng của $G$.
> e) Giả sử $G = H_1 H_2$ với $H_1, H_2$ là các nhóm con chuẩn tắc của $G$ sao cho $|H_1|, |H_2|$ là các số nguyên tố cùng nhau. Chứng minh rằng $H_1, H_2$ là các nhóm con đặc trưng của $G$.

> [!ans] Lời giải Bài 10
> **a) Nhóm con đặc trưng là nhóm con chuẩn tắc:**
> *   Với mỗi $g \in G$, xét phép liên hợp $\varphi_g: G \to G$ định bởi $\varphi_g(x) = gxg^{-1}$. Dễ kiểm tra $\varphi_g \in \text{Aut}(G)$ (gọi là tự đẳng cấu trong).
> *   Vì $H$ là nhóm con đặc trưng nên $\varphi_g(H) = H$ với mọi $g \in G$, tương đương với $gHg^{-1} = H \ (\forall g \in G)$.
> *   Do đó $H \unlhd G$.
> 
> **b) Tâm $C(G)$ là nhóm con đặc trưng:**
> *   Cho $f \in \text{Aut}(G)$ và $c \in C(G)$. Ta cần chứng minh $f(c) \in C(G)$.
> *   với mọi $y \in G$, do $f$ là toàn ánh nên tồn tại $x \in G$ để $y = f(x)$.
> *   Ta có: $f(c)y = f(c)f(x) = f(cx) = f(xc) = f(x)f(c) = yf(c)$.
> *   Suy ra $f(c) \in C(G) \implies f(C(G)) \subseteq C(G)$. Áp dụng tương tự cho $f^{-1} \in \text{Aut}(G)$ ta có $f(C(G)) = C(G)$.
> 
> **c) Tính bắc cầu của nhóm con đặc trưng:**
> *   Cho $f \in \text{Aut}(G)$. Vì $H$ đặc trưng trong $G$ nên $f(H) = H$.
> *   Do đó, thu hẹp của $f$ trên $H$, ký hiệu $f|_H$, là một tự đẳng cấu của $H$ ($f|_H \in \text{Aut}(H)$).
> *   Vì $I$ đặc trưng trong $H$ nên $f(I) = f|_H(I) = I$.
> *   Vậy $I$ đặc trưng trong $G$.
> 
> **d) Nhóm con duy nhất cấp $m$ là đặc trưng:**
> *   Cho $f \in \text{Aut}(G)$. Vì $f$ là một song ánh bảo toàn cấu trúc nhóm nên ảnh $f(H)$ là một nhóm con của $G$ có cùng số phần tử với $H$, tức là $|f(H)| = |H| = m$.
> *   Do $G$ chỉ có duy nhất một nhóm con cấp $m$ nên bắt buộc $f(H) = H$.
> 
> **e) $H_1, H_2$ là các nhóm con đặc trưng của $G$:**
> *   Vì $H_1, H_2 \unlhd G$ và $\gcd(|H_1|, |H_2|) = 1$, ta có $|H_1 \cap H_2|$ là ước của 1, suy ra $H_1 \cap H_2 = \{e\}$.
> *   Do $G = H_1 H_2$, ta có đẳng cấu $G \cong H_1 \times H_2$, và $|G| = |H_1||H_2|$.
> *   Ta chứng minh $H_1$ là nhóm con **duy nhất** của $G$ có cấp $|H_1|$:
>     *   Giả sử $K \le G$ và $|K| = |H_1|$.
>     *   Xét đồng cấu chiếu chính tắc $\pi: G \to G/H_2$. Hạt nhân của thu hẹp $\pi|_K$ là $K \cap H_2$.
>     *   Cấp $|K \cap H_2|$ vừa là ước của $|K| = |H_1|$, vừa là ước của $|H_2|$, do đó $K \cap H_2 = \{e\}$.
>     *   Theo định lý đẳng cấu, $K \cong K/(K \cap H_2) \cong K H_2 / H_2 \le G/H_2$.
>     *   Do $|G/H_2| = |H_1| = |K|$, ta suy ra $KH_2/H_2 = G/H_2 \implies KH_2 = G$.
>     *   Vì mọi phần tử của $H_1$ và $H_2$ giao hoán với nhau (do nhóm chuẩn tắc giao nhau tại $\{e\}$), ta dễ dàng kiểm tra được rằng tập các phần tử có cấp là ước của $|H_1|$ trong $G$ đúng bằng tập hợp $H_1$. Do $|K| = |H_1|$, toàn bộ phần tử của $K$ đều nằm trong $H_1$, suy ra $K = H_1$.
> *   Vì $H_1$ (và tương tự $H_2$) là nhóm con duy nhất có cấp tương ứng trong $G$, theo kết quả câu (d), $H_1$ và $H_2$ là các nhóm con đặc trưng của $G$.

$\pi$

> 

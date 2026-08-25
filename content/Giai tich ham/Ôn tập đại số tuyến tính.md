# CÁC BÀI TOÁN CHỨNG MINH VỀ TÍNH XÁC ĐỊNH DƯƠNG (ĐẠI SỐ TUYẾN TÍNH)

Tài liệu này tổng hợp các phát biểu và chứng minh chi tiết liên quan đến tính xác định dương của ma trận và dạng toàn phương. Các bài toán được sắp xếp từ cơ bản đến nâng cao, thường xuyên xuất hiện trong các đề thi tự luận.

---

### Bài 1: Sự tồn tại của cận dưới cho ma trận xác định dương (Trích ảnh đề bài)

**Phát biểu:** Cho $A \in \mathbb{R}^{n \times n}$ là ma trận xác định dương, nghĩa là:
$$\forall v \in \mathbb{R}^n \setminus \{0\}, \ \langle Av, v \rangle > 0$$
Chứng minh rằng tồn tại hằng số $\alpha > 0$ sao cho:
$$\forall v \in \mathbb{R}^n, \ \langle Av, v \rangle \ge \alpha \|v\|^2$$

**Chứng minh:**
1. Xét hàm số $f: \mathbb{R}^n \to \mathbb{R}$ xác định bởi $f(v) = \langle Av, v \rangle$. 
   Hàm $f$ là một đa thức bậc hai theo các tọa độ của $v$, do đó $f$ liên tục trên $\mathbb{R}^n$.
2. Xét mặt cầu đơn vị trong không gian $\mathbb{R}^n$: 
   $$S = \{v \in \mathbb{R}^n \mid \|v\| = 1\}$$
   Tập $S$ là một tập đóng và bị chặn trong không gian hữu hạn chiều $\mathbb{R}^n$, nên theo định lý Heine-Borel, $S$ là một tập compact.
3. Theo định lý Weierstrass, hàm liên tục $f$ trên tập compact $S$ sẽ đạt giá trị nhỏ nhất. Giả sử $f$ đạt giá trị nhỏ nhất tại $u_0 \in S$. Đặt $\alpha = f(u_0) = \langle Au_0, u_0 \rangle$.
4. Vì $u_0 \in S$ nên $\|u_0\| = 1 \implies u_0 \neq 0$. Do $A$ xác định dương, ta suy ra $\alpha = \langle Au_0, u_0 \rangle > 0$.
5. Với mọi vector $v \in \mathbb{R}^n \setminus \{0\}$, ta thiết lập vector đơn vị tương ứng $u = \frac{v}{\|v\|} \in S$. 
   Vì $\alpha$ là giá trị nhỏ nhất của $f$ trên $S$, ta có:
   $$f(u) \ge \alpha \iff \left\langle A \left(\frac{v}{\|v\|}\right), \frac{v}{\|v\|} \right\rangle \ge \alpha$$
6. Áp dụng tính chất tuyến tính của tích vô hướng, ta rút hằng số ra ngoài:
   $$\frac{1}{\|v\|^2} \langle Av, v \rangle \ge \alpha \iff \langle Av, v \rangle \ge \alpha \|v\|^2$$
   (Bất đẳng thức hiển nhiên đúng khi $v = 0$). 
   Vậy tồn tại hằng số $\alpha > 0$ thỏa mãn yêu cầu bài toán. (đpcm)

---

### Bài 2: Phân tích $B^T B$ của dạng toàn phương 

**Phát biểu:** Chứng minh rằng dạng toàn phương thực $Q$ xác định dương nếu và chỉ nếu ma trận biểu diễn của nó theo một cơ sở nào đó có thể viết dưới dạng $B^T B$, trong đó $B$ là một ma trận thực không suy biến.

**Chứng minh:**
Gọi $A$ là ma trận biểu diễn của $Q$. $A$ luôn là ma trận đối xứng thực ($A = A^T$).

*   **Chiều thuận ($\implies$): Giả sử $Q$ xác định dương.**
    1. Theo định lý phổ (Spectral Theorem), ma trận đối xứng thực $A$ chéo hóa trực giao được: 
       $$A = P D P^T$$
       Với $P$ là ma trận trực giao ($P^T = P^{-1}$) và $D = \text{diag}(\lambda_1, \dots, \lambda_n)$.
    2. Vì $Q$ xác định dương, mọi trị riêng $\lambda_i$ đều lớn hơn 0. Do đó, tồn tại ma trận đường chéo:
       $$D^{1/2} = \text{diag}(\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n})$$
       Rõ ràng $D^{1/2}$ không suy biến và $(D^{1/2})^T = D^{1/2}$, $D^{1/2} D^{1/2} = D$.
    3. Phân tích lại $A$:
       $$A = P D^{1/2} D^{1/2} P^T = (P D^{1/2}) (D^{1/2} P^T) = (D^{1/2} P^T)^T (D^{1/2} P^T)$$
    4. Đặt $B = D^{1/2} P^T$. Vì $P^T$ và $D^{1/2}$ đều không suy biến nên $B$ không suy biến. Ta thu được $A = B^T B$.

*   **Chiều nghịch ($\impliedby$): Giả sử $A = B^T B$ với $B$ không suy biến.**
    1. Lấy $x \in \mathbb{R}^n \setminus \{0\}$ bất kỳ. Ta có giá trị của $Q$ tại $x$:
       $$Q(x) = x^T A x = x^T (B^T B) x = (Bx)^T (Bx) = \|Bx\|^2$$
    2. Vì $B$ không suy biến ($\ker(B) = \{0\}$) và $x \neq 0$, nên $Bx \neq 0$.
    3. Độ dài của một vector khác không luôn dương, suy ra $\|Bx\|^2 > 0 \implies Q(x) > 0$.
    Vậy dạng toàn phương $Q$ xác định dương. (đpcm)

---

### Bài 3: Tính chất của các phần tử trên đường chéo chính

**Phát biểu:** Cho $A = [a_{ij}] \in \mathbb{R}^{n \times n}$ là một ma trận đối xứng xác định dương. Chứng minh rằng tất cả các phần tử trên đường chéo chính của $A$ đều thực dương ($a_{ii} > 0, \forall i$).

**Chứng minh:**
1. Gọi $\{e_1, e_2, \dots, e_n\}$ là cơ sở chính tắc của $\mathbb{R}^n$, trong đó $e_i$ có tọa độ thứ $i$ bằng 1 và các tọa độ còn lại bằng 0. Rõ ràng $e_i \neq 0, \forall i$.
2. Xét tích vô hướng của $A e_i$ và $e_i$:
   $$\langle Ae_i, e_i \rangle = e_i^T A e_i$$
3. Phép nhân $Ae_i$ trả về đúng cột thứ $i$ của ma trận $A$. Khi nhân tiếp với $e_i^T$, ta sẽ trích xuất đúng phần tử ở hàng $i$ của cột $i$, tức là $a_{ii}$. Do đó:
   $$\langle Ae_i, e_i \rangle = a_{ii}$$
4. Vì $A$ xác định dương và $e_i \neq 0$, ta có $\langle Ae_i, e_i \rangle > 0 \implies a_{ii} > 0, \forall i$. (đpcm)

---

### Bài 4: Tính xác định dương của ma trận nghịch đảo

**Phát biểu:** Cho ma trận đối xứng $A \in \mathbb{R}^{n \times n}$ xác định dương. Chứng minh rằng $A$ khả nghịch và ma trận nghịch đảo $A^{-1}$ cũng là ma trận xác định dương.

**Chứng minh:**
1. Khẳng định $A$ khả nghịch:
   Vì $A$ xác định dương nên mọi trị riêng $\lambda_i$ của $A$ đều dương ($\lambda_i > 0$).
   Ta có $\det(A) = \lambda_1 \lambda_2 \dots \lambda_n > 0$. Vì $\det(A) \neq 0$ nên $A$ khả nghịch.
2. Chứng minh $A^{-1}$ xác định dương:
   Vì $A$ đối xứng nên $A^T = A \implies (A^{-1})^T = (A^T)^{-1} = A^{-1}$. Do đó $A^{-1}$ cũng là ma trận đối xứng.
   Với mọi $x \in \mathbb{R}^n \setminus \{0\}$, ta đặt $y = A^{-1}x \implies x = Ay$. Vì $A$ khả nghịch và $x \neq 0$, suy ra $y \neq 0$.
   Xét biểu thức dạng toàn phương cho $A^{-1}$:
   $$x^T A^{-1} x = (Ay)^T A^{-1} (Ay) = y^T A^T A^{-1} A y = y^T A (A^{-1} A) y = y^T A y$$
   Do $y \neq 0$ và $A$ xác định dương, ta có $y^T A y > 0$.
   Suy ra $x^T A^{-1} x > 0 \ \forall x \neq 0$. Vậy $A^{-1}$ xác định dương. (đpcm)

---

### Bài 5: Phép biến đổi đồng dư (Congruence Transformation)

**Phát biểu:** Cho $A \in \mathbb{R}^{n \times n}$ là ma trận đối xứng, xác định dương và $C \in \mathbb{R}^{n \times n}$ là một ma trận không suy biến. Chứng minh rằng ma trận $M = C^T A C$ cũng là ma trận xác định dương.

**Chứng minh:**
1. Kiểm tra tính đối xứng của $M$:
   $$M^T = (C^T A C)^T = C^T A^T (C^T)^T = C^T A C = M$$
   Vậy $M$ là ma trận đối xứng.
2. Kiểm tra tính xác định dương:
   Lấy một vector $x \in \mathbb{R}^n \setminus \{0\}$ bất kỳ. Xét biểu thức:
   $$x^T M x = x^T (C^T A C) x = (Cx)^T A (Cx)$$
   Đặt $y = Cx$. Vì $C$ không suy biến (nghĩa là $\ker(C) = \{0\}$) và $x \neq 0$, ta suy ra $y \neq 0$.
   Lúc này, biểu thức trở thành $y^T A y$.
3. Vì $A$ xác định dương và $y \neq 0$, ta luôn có $y^T A y > 0$.
   Từ đó suy ra $x^T M x > 0, \forall x \neq 0$. 
   Vậy ma trận $C^T A C$ xác định dương. (đpcm)

---

### Bài 6: Tính chất của Định thức và Vết ma trận

**Phát biểu:** Cho $A \in \mathbb{R}^{n \times n}$ là ma trận đối xứng, xác định dương. Chứng minh rằng $\det(A) > 0$ và $\text{tr}(A) > 0$.

**Chứng minh:**
1. Theo định lý phổ, ma trận đối xứng $A$ có $n$ trị riêng thực $\lambda_1, \lambda_2, \dots, \lambda_n$.
2. Vì $A$ xác định dương, hệ thức $\langle Ax, x \rangle > 0$ đúng với mọi vector riêng $x_i \neq 0$ ứng với trị riêng $\lambda_i$.
   $$\langle Ax_i, x_i \rangle = \langle \lambda_i x_i, x_i \rangle = \lambda_i \|x_i\|^2 > 0 \implies \lambda_i > 0, \forall i = 1, \dots, n$$
3. Định thức của ma trận bằng tích các trị riêng:
   $$\det(A) = \prod_{i=1}^n \lambda_i > 0$$
4. Vết của ma trận bằng tổng các trị riêng:
   $$\text{tr}(A) = \sum_{i=1}^n \lambda_i > 0$$
Vậy định thức và vết của một ma trận xác định dương luôn thực dương. (đpcm)

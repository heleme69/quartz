# Lý thuyết Cầu phương Gauss và Đa thức trực giao

## 1. Không gian tích trong và Không gian đa thức

Xét không gian các hàm thực liên tục trên đoạn $[a, b]$, ký hiệu là $C[a, b]$. Ta trang bị cho không gian này một tích trong được xác định thông qua hàm trọng số $w(x)$ (với $w(x) > 0$ trên $(a, b)$):
$$\langle f, g \rangle = \int_a^b f(x)g(x)w(x) dx$$

Ký hiệu $\Pi_n$ là không gian các đa thức có bậc không vượt quá $n$. Một tập hợp các đa thức $\{P_0, P_1, \dots, P_n\}$ được gọi là họ đa thức trực giao nếu $\deg(P_k) = k$ và:
$$\langle P_i, P_j \rangle = 0 \quad \text{với mọi } i \neq j$$

> [!thm] Bổ đề 1: Độc lập tuyến tính và tính trực giao
> Cho $\{P_0, P_1, \dots, P_n\}$ là họ đa thức trực giao. Khi đó:
> 1. Tập hợp này là độc lập tuyến tính và tạo thành một cơ sở cho không gian $\Pi_n$.
> 2. Đa thức $P_n$ trực giao với mọi đa thức $q(x)$ có bậc nhỏ hơn $n$, tức là $\langle q, P_n \rangle = 0$ với mọi $q \in \Pi_{n-1}$.

> [!prf] Chứng minh Bổ đề 1
> Xét phương trình tổ hợp tuyến tính $\sum_{j=0}^n \alpha_j P_j(x) = 0$.
> Lấy tích trong của cả hai vế với đa thức $P_k$ (với $0 \le k \le n$), ta có:
> $$\left\langle \sum_{j=0}^n \alpha_j P_j, P_k \right\rangle = 0$$
> Theo tính chất tuyến tính của tích trong và tính trực giao:
> $$\sum_{j=0}^n \alpha_j \langle P_j, P_k \rangle = \alpha_k \langle P_k, P_k \rangle = 0$$
> Vì $\langle P_k, P_k \rangle > 0$, suy ra $\alpha_k = 0$ với mọi $k$. Do đó họ đa thức độc lập tuyến tính.
> Lấy $q(x)$ là một đa thức bất kỳ bậc $m < n$. Vì họ đa thức tạo thành cơ sở, ta có thể biểu diễn $q(x)$ dưới dạng $q(x) = \sum_{j=0}^m c_j P_j(x)$.
> Xét tích trong $\langle q, P_n \rangle$:
> $$\langle q, P_n \rangle = \left\langle \sum_{j=0}^m c_j P_j, P_n \right\rangle = \sum_{j=0}^m c_j \langle P_j, P_n \rangle$$
> Vì $j \le m < n$ nên $j \neq n$, do đó $\langle P_j, P_n \rangle = 0$. Kết luận $\langle q, P_n \rangle = 0$.

## 2. Sự tồn tại và Thuật toán trực giao hóa

Để đảm bảo họ đa thức trực giao thực sự tồn tại cho mọi hàm trọng số $w(x)$ hợp lệ, ta sử dụng thuật toán trực giao hóa Gram-Schmidt để kiến tạo trực tiếp dãy đa thức này từ cơ sở ban đầu.

> [!algo] Thuật toán Gram-Schmidt đơn khởi
> Cho cơ sở chính tắc $\{1, x, x^2, \dots, x^n\}$ của không gian $\Pi_n$. Họ đa thức trực giao monic (đơn khởi, hệ số bậc cao nhất bằng 1) $\{\pi_0, \pi_1, \dots, \pi_n\}$ được xác định truy hồi bằng công thức:
> $$\pi_0(x) = 1$$
> $$\pi_k(x) = x^k - \sum_{j=0}^{k-1} \frac{\langle x^k, \pi_j \rangle}{\langle \pi_j, \pi_j \rangle} \pi_j(x) \quad \text{với mọi } k \ge 1$$

> [!thm] Định lý 1: Sự tồn tại đa thức trực giao
> Dãy hàm $\{\pi_k(x)\}$ được sinh ra từ thuật toán trên là một họ đa thức monic và trực giao từng đôi một.

> [!prf] Chứng minh Định lý 1
> Ta chứng minh bằng phương pháp quy nạp toán học.
> Với $k = 0$, $\pi_0(x) = 1$ là đa thức monic bậc $0$.
> Giả sử ta đã xây dựng được họ đa thức $\{\pi_0, \dots, \pi_{k-1}\}$ sao cho $\pi_j$ là đa thức monic bậc $j$ và $\langle \pi_i, \pi_j \rangle = 0$ với mọi $i \neq j < k$.
> Xét đa thức $\pi_k(x)$ được định nghĩa bởi thuật toán. Phần tổng $\sum_{j=0}^{k-1} c_j \pi_j(x)$ (với $c_j = \frac{\langle x^k, \pi_j \rangle}{\langle \pi_j, \pi_j \rangle}$) là một đa thức có bậc không vượt quá $k-1$. Do đó, số hạng bậc cao nhất của $\pi_k(x)$ là $x^k$. Suy ra $\pi_k(x)$ là đa thức monic bậc $k$.
> Lấy tích trong của $\pi_k(x)$ với một đa thức $\pi_m(x)$ bất kỳ đã được xây dựng trước đó ($0 \le m \le k-1$):
> $$\langle \pi_k, \pi_m \rangle = \left\langle x^k - \sum_{j=0}^{k-1} c_j \pi_j, \pi_m \right\rangle = \langle x^k, \pi_m \rangle - \sum_{j=0}^{k-1} c_j \langle \pi_j, \pi_m \rangle$$
> Theo giả thiết quy nạp, $\langle \pi_j, \pi_m \rangle = 0$ với mọi $j \neq m$. Tổng trên chỉ còn lại duy nhất số hạng tại $j = m$:
> $$\langle \pi_k, \pi_m \rangle = \langle x^k, \pi_m \rangle - c_m \langle \pi_m, \pi_m \rangle$$
> Thay giá trị $c_m$ vào biểu thức, ta được $\langle x^k, \pi_m \rangle - \langle x^k, \pi_m \rangle = 0$. Theo nguyên lý quy nạp, toàn bộ dãy được xây dựng là họ đa thức trực giao monic.

## 3. Hệ thức truy hồi xây dựng đa thức trực giao

Việc sử dụng thuật toán Gram-Schmidt rất chặt chẽ về lý thuyết nhưng tốn kém trong tính toán thực hành vì phải tích trong với toàn bộ các đa thức trước đó. Hệ thức truy hồi sau đây cho phép tính toán tối ưu hơn.

> [!thm] Bổ đề 2: Hệ thức truy hồi 3 số hạng
> Mọi họ đa thức trực giao monic $\{\pi_n(x)\}$ đều thỏa mãn hệ thức truy hồi:
> $$\pi_n(x) = (x - a_n)\pi_{n-1}(x) - b_n \pi_{n-2}(x)$$
> Với các hệ số được xác định bởi:
> $$a_n = \frac{\langle x \pi_{n-1}, \pi_{n-1} \rangle}{\langle \pi_{n-1}, \pi_{n-1} \rangle}$$
> $$b_n = \frac{\langle x \pi_{n-1}, \pi_{n-2} \rangle}{\langle \pi_{n-2}, \pi_{n-2} \rangle} = \frac{\langle \pi_{n-1}, \pi_{n-1} \rangle}{\langle \pi_{n-2}, \pi_{n-2} \rangle} > 0$$

> [!prf] 
> Xét đa thức $\pi_n(x) - x\pi_{n-1}(x)$. Vì cả hai đều là đa thức monic bậc $n$, hiệu của chúng là một đa thức có bậc tối đa là $n-1$.
> Do đó, có thể biểu diễn hiệu này qua cơ sở trực giao:
> $$x\pi_{n-1}(x) - \pi_n(x) = \sum_{j=0}^{n-1} c_j \pi_j(x)$$
> Hay viết lại $\pi_n(x) = x\pi_{n-1}(x) - \sum_{j=0}^{n-1} c_j \pi_j(x)$.
> Để xác định hệ số $c_{n-1}$ (tương ứng với $a_n$), ta lấy tích trong hai vế với $\pi_{n-1}$:
> $$\langle \pi_n, \pi_{n-1} \rangle = \langle x\pi_{n-1}, \pi_{n-1} \rangle - c_{n-1}\langle \pi_{n-1}, \pi_{n-1} \rangle$$
> Vì $\langle \pi_n, \pi_{n-1} \rangle = 0$, ta suy ra $c_{n-1} = \frac{\langle x\pi_{n-1}, \pi_{n-1} \rangle}{\langle \pi_{n-1}, \pi_{n-1} \rangle} = a_n$.
> Tương tự, để xác định $c_{n-2}$ (tương ứng với $b_n$), lấy tích trong hai vế với $\pi_{n-2}$:
> $$\langle \pi_n, \pi_{n-2} \rangle = \langle x\pi_{n-1}, \pi_{n-2} \rangle - c_{n-2}\langle \pi_{n-2}, \pi_{n-2} \rangle$$
> Suy ra $c_{n-2} = \frac{\langle x\pi_{n-1}, \pi_{n-2} \rangle}{\langle \pi_{n-2}, \pi_{n-2} \rangle} = b_n$.
> Để chứng minh hệ thức rút gọn cho $b_n$, ta nhận xét rằng $x\pi_{n-2}(x)$ là đa thức monic bậc $n-1$, nó có thể được biểu diễn dưới dạng $\pi_{n-1}(x) + q(x)$ với $q \in \Pi_{n-2}$. Khi đó $\langle x\pi_{n-1}, \pi_{n-2} \rangle = \langle \pi_{n-1}, x\pi_{n-2} \rangle = \langle \pi_{n-1}, \pi_{n-1} + q \rangle = \langle \pi_{n-1}, \pi_{n-1} \rangle$. Do đó $b_n = \frac{\langle \pi_{n-1}, \pi_{n-1} \rangle}{\langle \pi_{n-2}, \pi_{n-2} \rangle}$, đây là tỷ số của hai norm nên luôn dương.
> Với các $j < n-2$, $\langle x\pi_{n-1}, \pi_j \rangle = \langle \pi_{n-1}, x\pi_j \rangle$. Vì đa thức $x\pi_j$ có bậc $j+1 < n-1$, theo Bổ đề 1 thì tích trong này bằng $0$. Do đó tất cả các hệ số $c_j$ với $j < n-2$ đều bằng $0$, hoàn tất việc chứng minh.

> [!algo] Thuật toán sinh Cơ sở trực chuẩn bằng Hệ thức Monic (Giải tay)
> Cho không gian hàm $L_w^2([a, b])$ với hệ đơn thức chính tắc $\{1, x, x^2, \dots, x^{n-1}\}$. Quy trình tìm cơ sở trực chuẩn $\{e_0, e_1, \dots, e_{n-1}\}$ gồm 2 giai đoạn:
> 
> **1. Khởi tạo 2 phần tử đầu tiên:**
> * $\pi_0(x) = 1 \implies \|\pi_0\|^2 = \int_a^b w(x) dx$
> * $\pi_1(x) = x - a_1 \quad \text{với } a_1 = \frac{\langle x\pi_0, \pi_0 \rangle}{\|\pi_0\|^2} \implies \text{Tính } \|\pi_1\|^2 = \int_a^b [\pi_1(x)]^2 w(x) dx$
> 
> **2. Vòng lặp truy hồi bậc cao (Tính từ bậc $k = 2$ đến $n-1$):**
> Đa thức trực giao kế tiếp được xác định bằng công thức:
> $$\pi_k(x) = (x - a_k)\pi_{k-1}(x) - b_k \pi_{k-2}(x)$$
> 
> Trong đó, các hệ số tính tay cực nhanh bằng tỷ số tích trong:
> * Hệ số $a_k = \frac{\langle x\pi_{k-1}, \pi_{k-1} \rangle}{\|\pi_{k-1}\|^2} = \frac{\int_a^b x [\pi_{k-1}(x)]^2 w(x) dx}{\|\pi_{k-1}\|^2}$
>   *(Mẹo: $a_k = 0$ nếu miền đối xứng qua $0$ và trọng số chẵn).*
> * Hệ số $b_k = \frac{\|\pi_{k-1}\|^2}{\|\pi_{k-2}\|^2}$ *(Lấy ngay 2 kết quả bình phương norm ở các bước trước chia cho nhau).*
> 
> Sau khi có $\pi_k(x)$, tính luôn bình phương độ dài để làm bàn đạp cho bước sau:
> $$\|\pi_k\|^2 = \int_a^b [\pi_k(x)]^2 w(x) dx$$
> 
> Sau khi đã thu được đầy đủ họ đa thức trực giao $\{\pi_0, \pi_1, \dots, \pi_{n-1}\}$, ta tiến hành rút căn các giá trị bình phương norm và trích xuất ra cơ sở trực chuẩn cần tìm:
> $$e_k(x) = \frac{\pi_k(x)}{\|\pi_k\|} \quad \text{với mọi } k = 0, 1, \dots, n-1$$


## 4. Tính chất nghiệm của đa thức trực giao

> [!thm] Định lý 2: Sự phân bố nghiệm
> Đa thức trực giao $\pi_n(x)$ có đúng $n$ nghiệm thực phân biệt và tất cả các nghiệm này đều nằm hoàn toàn trong khoảng $(a, b)$.

> [!prf] Chứng minh Định lý 2
> Giả sử $\pi_n(x)$ chỉ đổi dấu tại $m$ điểm phân biệt $t_1, t_2, \dots, t_m$ nằm trong khoảng $(a, b)$, với $m < n$.
> Thiết lập một đa thức phụ trợ có bậc $m$:
> $$p(x) = (x - t_1)(x - t_2)\dots(x - t_m)$$
> Khi đó, các nghiệm của $p(x)$ trùng với các điểm đổi dấu của $\pi_n(x)$. Do đó, hàm số $\pi_n(x)p(x)$ sẽ không đổi dấu trên toàn bộ đoạn $[a, b]$ (vì tại các điểm $t_i$, cả hai hàm cùng đổi dấu nên tích của chúng luôn giữ nguyên một dấu).
> Tính tích phân của hàm này kèm trọng số:
> $$\langle \pi_n, p \rangle = \int_a^b \pi_n(x)p(x)w(x) dx \neq 0$$
> Tuy nhiên, vì đa thức $p(x)$ có bậc $m < n$, nên $p(x) \in \Pi_{n-1}$. Áp dụng Bổ đề 1, đa thức $\pi_n$ phải trực giao với mọi đa thức thuộc $\Pi_{n-1}$, tức là $\langle \pi_n, p \rangle = 0$.
> Hai điều trên dẫn đến mâu thuẫn. Vậy giả thiết $m < n$ là sai. Đa thức $\pi_n(x)$ phải đổi dấu đúng $n$ lần, tương đương với việc có $n$ nghiệm thực phân biệt trong khoảng $(a, b)$.

## 5. Xây dựng Cầu phương Gauss và Sai số

> [!def] Định nghĩa: Cầu phương Gauss (Gauss Quadrature)
> Cho khoảng tích phân $(a, b)$ và một hàm trọng số $w(x)$ xác định dương, khả tích trên $(a, b)$. Với một số nguyên dương $n \ge 1$ cho trước, Công thức Cầu phương Gauss là một toán tử đại số tuyến tính dạng tổng hữu hạn dùng để xấp xỉ cho toán tử tích phân:
> $$\mathcal{I}(f) = \int_a^b f(x)w(x) dx \approx \mathcal{Q}_n(f) = \sum_{i=1}^n c_i f(x_i)$$
> 
> Trong đó, cấu trúc của bộ công thức được định nghĩa nghiêm ngặt bởi hai thành phần:
> 1. **Các nút tích phân (Nodes / Mốc nội suy):** Tập hợp $\{x_1, x_2, \dots, x_n\}$ gồm $n$ điểm thực phân biệt nằm hoàn toàn trong khoảng mở $(a, b)$, được chọn cố định là $n$ nghiệm của đa thức trực giao $\pi_n(x)$ tương ứng với hàm trọng số $w(x)$.
> 2. **Các hệ số trọng lượng (Weights / Trọng số):** Tập hợp $\{c_1, c_2, \dots, c_n\}$ gồm $n$ số thực dương thực sự ($c_i > 0$), được tính toán thông qua tích phân của họ đa thức cơ sở Lagrange $l_i(x)$ gắn với các mốc $x_i$:
>    $$c_i = \int_a^b l_i(x)w(x) dx = \int_a^b \left( \prod_{\substack{j=1 \\ j \neq i}}^n \frac{x - x_j}{x_i - x_j} \right) w(x) dx$$

Nhiệm vụ của cầu phương Gauss là tìm $n$ điểm mốc $x_i$ và các hệ số trọng lượng $c_i$ sao cho công thức xấp xỉ tích phân đạt độ chính xác cao nhất:
$$\int_a^b f(x)w(x) dx \approx \sum_{i=1}^n c_i f(x_i)$$

> [!thm] Định lý 3: Bậc chính xác tối đa của Cầu phương Gauss
> Nếu chọn $n$ điểm mốc $x_1, x_2, \dots, x_n$ là các nghiệm của đa thức trực giao $\pi_n(x)$ ứng với hàm trọng số $w(x)$, thì công thức cầu phương Gauss nội suy sẽ chính xác tuyệt đối cho mọi đa thức $f(x)$ có bậc không vượt quá $2n - 1$.

> [!prf] Chứng minh Định lý 3
> Xét $f(x)$ là một đa thức tùy ý thuộc $\Pi_{2n-1}$.
> Thực hiện phép chia đa thức $f(x)$ cho đa thức trực giao $\pi_n(x)$, ta thu được thương $q(x)$ và dư $r(x)$:
> $$f(x) = q(x)\pi_n(x) + r(x)$$
> Vì $\deg(f) \le 2n - 1$ và $\deg(\pi_n) = n$, suy ra bậc của thương $q(x) \le n - 1$. Phần dư $r(x)$ luôn có bậc nhỏ hơn $\pi_n(x)$ nên bậc của $r(x) \le n - 1$.
> Tính tích phân chính xác của $f(x)$ trên miền có trọng số:
> $$\int_a^b f(x)w(x) dx = \int_a^b q(x)\pi_n(x)w(x) dx + \int_a^b r(x)w(x) dx$$
> Cụm tích phân đầu tiên chính là tích trong $\langle q, \pi_n \rangle$. Vì $q \in \Pi_{n-1}$, theo Bổ đề 1 thì $\langle q, \pi_n \rangle = 0$. Do đó:
> $$\int_a^b f(x)w(x) dx = \int_a^b r(x)w(x) dx \tag{1}$$
> Tiếp tục áp dụng công thức xấp xỉ cầu phương tại $n$ điểm mốc $x_i$:
> $$\sum_{i=1}^n c_i f(x_i) = \sum_{i=1}^n c_i [q(x_i)\pi_n(x_i) + r(x_i)]$$
> Vì các mốc $x_i$ được chọn là nghiệm của $\pi_n(x)$ nên $\pi_n(x_i) = 0$ tại mọi $i$. Tổng rút gọn thành:
> $$\sum_{i=1}^n c_i f(x_i) = \sum_{i=1}^n c_i r(x_i) \tag{2}$$
> Vì $r(x)$ là đa thức bậc $\le n - 1$, công thức nội suy Lagrange với $n$ điểm bất kỳ luôn chính xác tuyệt đối cho nó, nghĩa là:
> $$\int_a^b r(x)w(x) dx = \sum_{i=1}^n c_i r(x_i) \tag{3}$$
> Từ (1), (2) và (3), ta suy ra $\int_a^b f(x)w(x) dx = \sum_{i=1}^n c_i f(x_i)$. Định lý được chứng minh hoàn tất.

> [!rem] Nhận xét 4: Tính dương của cơ sở Lagrange
> Để hiểu rõ bản chất của các hệ số trọng lượng $c_i$ cũng như tính chất số học của chúng, ta cần quay lại với định nghĩa của đa thức nội suy Lagrange.
> 
> Giả sử ta xấp xỉ hàm số $f(x)$ bằng một đa thức nội suy Lagrange $L_{n-1}(x)$ đi qua $n$ mốc $x_1, x_2, \dots, x_n$:
> $$f(x) \approx \sum_{i=1}^n f(x_i) l_i(x)$$
> Trong đó, $l_i(x)$ là các đa thức cơ sở Lagrange bậc $n-1$, được xác định bởi công thức:
> $$l_i(x) = \prod_{\substack{j=1 \\ j \neq i}}^n \frac{x - x_j}{x_i - x_j}$$
> Tính chất cốt lõi của đa thức này là $l_i(x_j) = 1$ nếu $i=j$ và bằng $0$ nếu $i \neq j$. 
> 
> Thay xấp xỉ này vào tích phân ban đầu, ta có:
> $$\int_a^b f(x)w(x)dx \approx \int_a^b \left( \sum_{i=1}^n f(x_i) l_i(x) \right) w(x)dx = \sum_{i=1}^n f(x_i) \left[ \int_a^b l_i(x)w(x)dx \right]$$
> Từ sự đồng nhất này, hệ số trọng lượng được định nghĩa tự nhiên là $c_i = \int_a^b l_i(x)w(x)dx$.
>
> Việc phương pháp Gauss chọn các mốc $x_i$ là nghiệm của đa thức trực giao không chỉ đẩy bậc chính xác lên $2n-1$ (như Định lý 3), mà ta còn thu được hệ quả: Tất cả các hệ số $c_i$ đều là số dương thực sự.
> 
> Thật vậy, ta xét hàm phụ trợ là bình phương của đa thức Lagrange: $f(x) = l_j^2(x)$. Hàm này có bậc $2n-2$. 
> Do $2n-2 \le 2n-1$, công thức cầu phương Gauss tính chính xác tuyệt đối cho $f(x)$:
> $$\int_a^b l_j^2(x)w(x)dx = \sum_{i=1}^n c_i l_j^2(x_i)$$
> Nhờ tính chất $l_j(x_i) = 0$ khi $i \neq j$, toàn bộ tổng ở vế phải bị triệt tiêu, chỉ còn lại duy nhất số hạng $c_j \cdot 1^2 = c_j$.
> Mặt khác, vế trái là tích phân của hàm không âm $l_j^2(x)$ nhân với trọng số dương $w(x)$. Do $l_j(x)$ không đồng nhất bằng $0$, tích phân này bắt buộc phải lớn hơn $0$. 
> 
> Từ đó suy ra $c_j > 0$ với mọi $j$. Điều này đảm bảo phương pháp Gauss luôn ổn định, không bị triệt tiêu sai số làm tròn do các hệ số trái dấu.

> [!thm] Định lý 5: Sai số của phương pháp Cầu phương Gauss
> Nếu hàm $f(x)$ liên tục và có đạo hàm đến bậc $2n$ trên khoảng $(a, b)$, sai số của phương pháp cầu phương Gauss được xác định bởi công thức:
> $$R_n[f] = \int_a^b f(x)w(x)dx - \sum_{i=1}^n c_i f(x_i) = \frac{f^{(2n)}(\xi)}{(2n)!} \int_a^b \pi_n^2(x) w(x) dx$$
> Trong đó $\xi$ là một điểm nào đó thuộc khoảng $(a, b)$ và $\pi_n(x)$ là đa thức trực giao monic bậc $n$.

> [!prf] Chứng minh Định lý 5
> Ý tưởng cốt lõi là xây dựng đa thức nội suy Hermite $H_{2n-1}(x)$ nội suy hàm $f(x)$ thỏa mãn $H_{2n-1}(x_i) = f(x_i)$ và $H'_{2n-1}(x_i) = f'(x_i)$ tại $n$ mốc Gauss.
> Sai số của nội suy Hermite được biểu diễn qua đạo hàm bậc $2n$:
> $$f(x) - H_{2n-1}(x) = \frac{f^{(2n)}(\eta_x)}{(2n)!} \prod_{i=1}^n (x - x_i)^2 = \frac{f^{(2n)}(\eta_x)}{(2n)!} \pi_n^2(x)$$
> Lấy tích phân hai vế với hàm trọng số $w(x)$, đồng thời nhận thấy vì $H_{2n-1}(x)$ có bậc $2n-1$ nên tích phân của nó bằng đúng tổng cầu phương Gauss, ta có:
> $$R_n[f] = \int_a^b [f(x) - H_{2n-1}(x)] w(x) dx = \int_a^b \frac{f^{(2n)}(\eta_x)}{(2n)!} \pi_n^2(x) w(x) dx$$
> Do $\pi_n^2(x) w(x) \ge 0$, áp dụng định lý giá trị trung bình tích phân suy rộng, tồn tại một hằng số $\xi \in (a, b)$ sao cho $f^{(2n)}(\eta_x)$ có thể được đưa ra ngoài dấu tích phân dưới dạng $f^{(2n)}(\xi)$. Ta thu được công thức phần dư tương ứng.

## 6. Phương pháp Hệ số bất định 

Thay vì đi qua không gian đa thức trực giao, ta có thể xây dựng cầu phương Gauss trực tiếp bằng cách ép buộc công thức xấp xỉ tích phân đạt bậc chính xác tối đa. Phương pháp này thường được sử dụng trong tính toán thực hành với các bậc nhỏ.

> [!algo] Phương pháp Hệ số bất định
> Bài toán đặt ra là tìm $n$ mốc nội suy $x_i \in (a, b)$ và $n$ hệ số trọng lượng $w_i$ sao cho công thức:
> $$\int_a^b f(x)w(x)dx \approx \sum_{i=1}^n c_i f(x_i)$$
> chính xác tuyệt đối với mọi đa thức $f \in \Pi_{2n-1}$.
> 
> Thay vì lấy một đa thức bất kỳ, ta chọn tập cơ sở chính tắc của không gian $\Pi_{2n-1}$ là $\{1, x, x^2, \dots, x^{2n-1}\}$. Do tích phân là một toán tử tuyến tính, công thức sẽ đúng với mọi đa thức nếu và chỉ nếu nó đúng với từng hàm cơ sở. 
> 
> Ta thiết lập hệ phương trình phi tuyến gồm $2n$ phương trình sau:
> $$\sum_{i=1}^n c_i = \int_a^b w(x) dx$$
> $$\sum_{i=1}^n c_i x_i = \int_a^b x w(x) dx$$
> $$\dots$$
> $$\sum_{i=1}^n c_i x_i^{2n-1} = \int_a^b x^{2n-1} w(x) dx$$
> Giải hệ phương trình phi tuyến này sẽ cung cấp đồng thời cấu trúc mốc và trọng số của phương pháp Gauss.

Sự tồn tại tập nghiệm của hệ phương trình phi tuyến này không hề hiển nhiên. Tuy nhiên, định lý sau đây sẽ là cầu nối thống nhất giữa Phương pháp Hệ số bất định và Phương pháp Đa thức trực giao, chứng minh rằng hai cách làm này thực chất chỉ là một.

> [!thm] Định lý 6: Sự tương đương của hai phương pháp
> Cặp nghiệm $(x_i, c_i)$ là nghiệm của hệ phương trình hệ số bất định bậc $2n-1$ khi và chỉ khi các mốc $x_i$ là tập hợp nghiệm của đa thức trực giao bậc $n$ ứng với hàm trọng số $w(x)$.

> [!prf] Chứng minh Định lý 6
> Chiều thuận (Giả sử hệ phương trình có nghiệm): Giả sử ta đã tìm được các mốc $x_i$ và trọng số $c_i$ thỏa mãn hệ phương trình, nghĩa là công thức tính đúng với mọi đa thức bậc $\le 2n-1$.
> Ta thiết lập một đa thức phụ trợ bậc $n$ nhận các mốc $x_i$ này làm nghiệm:
> $$P_n(x) = (x - x_1)(x - x_2)\dots(x - x_n)$$
> Xét một đa thức $q(x)$ bất kỳ có bậc nhỏ hơn $n$ ($q \in \Pi_{n-1}$). Khi đó, tích $P_n(x) [x q(x)]$ (ở đây ta xét đa thức $P_n(x)q(x)$) là một đa thức có bậc $\le 2n-1$.
> Do công thức cầu phương chính xác tuyệt đối đối với các đa thức bậc $\le 2n-1$, ta áp dụng công thức cho hàm $f(x) = P_n(x)q(x)$:
> $$\int_a^b P_n(x)q(x)w(x)dx = \sum_{i=1}^n c_i P_n(x_i)q(x_i)$$
> Vì $x_i$ là nghiệm của $P_n(x)$ nên $P_n(x_i) = 0$ tại mọi $i$. Suy ra:
> $$\int_a^b P_n(x)q(x)w(x)dx = 0$$
> Điều này đúng với mọi đa thức $q(x) \in \Pi_{n-1}$. Theo định nghĩa của không gian tích trong, đa thức $P_n(x)$ vừa thiết lập chính xác là đa thức trực giao bậc $n$ đối với hàm trọng số $w(x)$. Từ đó kết luận các mốc $x_i$ bắt buộc phải là nghiệm của đa thức trực giao. Chiều đảo chính là nội dung của Định lý 3 đã được chứng minh ở phần trước.

## 7. Áp dụng cho cầu phương Gauss-Legendre

Để áp dụng cầu phương Gauss cho một miền $[a, b]$ bất kỳ (ta bàn tới phương pháp giải tay, thực tế sẽ dùng thuật khác), quy trình thực hiện luôn tuân theo hai giai đoạn: xác định các thông số trên miền chuẩn và thực hiện phép ánh xạ tuyến tính về miền thực tế.

> [!algo] Bước 1: Xác định bộ trọng số trên miền chuẩn $[-1, 1]$
> Giả sử ta đã tìm được $n$ mốc nội suy $x_i$ (chính là $n$ nghiệm của đa thức trực giao Legendre bậc $n$). Để xác định $n$ trọng lượng $c_i$ tương ứng, ta áp dụng phương pháp hệ số bất định,  ép công thức xấp xỉ phải đúng đối với các đơn thức cơ sở từ bậc $0$ đến bậc $n-1$:
> $$\sum_{i=1}^n c_i x_i^k = \int_{-1}^1 x^k dx \quad \text{với } k = 0, 1, \dots, n-1$$
> 
> Tích phân ở vế phải (gọi là moment thứ $k$, ký hiệu là $\mu_k$) được tính dựa vào tính chẵn lẻ của hàm số trên miền đối xứng:
> * Nếu $k$ lẻ: $\mu_k = \int_{-1}^1 x^k dx = 0$
> * Nếu $k$ chẵn: $\mu_k = \int_{-1}^1 x^k dx = \frac{2}{k+1}$
> 
> Hệ phương trình tuyến tính này được biểu diễn dưới dạng cấu trúc ma trận Vandermonde:
> $$\begin{pmatrix} 
> 1 & 1 & \dots & 1 \\ 
> x_1 & x_2 & \dots & x_n \\ 
> x_1^2 & x_2^2 & \dots & x_n^2 \\ 
> \vdots & \vdots & \ddots & \vdots \\ 
> x_1^{n-1} & x_2^{n-1} & \dots & x_n^{n-1} 
> \end{pmatrix} 
> \begin{pmatrix} c_1 \\ c_2 \\ c_3 \\ \vdots \\ c_n \end{pmatrix} 
> = 
> \begin{pmatrix} 2 \\ 0 \\ \frac{2}{3} \\ \vdots \\ \mu_{n-1} \end{pmatrix}$$
> 
> Giải hệ phương trình đại số tuyến tính này, ta thu được bộ trọng lượng chuẩn $c_{\text{chuẩn}, i}$ tương ứng với các mốc chuẩn $x_{\text{chuẩn}, i}$ trên miền đơn giản $[-1, 1]$.

> [!algo] Bước 2: Đổi biến Affine về miền thực tế $[a, b]$
> Do toàn bộ các mốc nội suy và trọng số ở bước trên chỉ có giá trị sử dụng trên miền chuẩn, để tính toán tích phân trên miền $[a, b]$ của bài toán gốc, ta thực hiện phép biến đổi tuyến tính (ánh xạ Affine) tọa độ:
> $$x = \frac{b-a}{2}t + \frac{b+a}{2} \quad \text{với } t \in [-1, 1] \text{ và } x \in [a, b]$$
> 
> Khi lấy vi phân hai vế, ta thu được hệ số giãn:
> $$dx = \frac{b-a}{2}dt$$
> 
> Đại lượng tính sau khi qua phép ánh xạ theo công thức trên:
> 1. Mốc nội suy thực tế: $x_{\text{thực}, i} = \frac{b-a}{2}x_{\text{chuẩn}, i} + \frac{b+a}{2}$
> 2. Trọng lượng thực tế: $c_{\text{thực}, i} = \frac{b-a}{2}c_{\text{chuẩn}, i}$
> 
> Giá trị xấp xỉ tích phân cuối cùng được xác định thông qua tổng cầu phương Gauss:
> $$I = \int_a^b f(x)dx \approx \sum_{i=1}^n c_{\text{thực}, i} f(x_{\text{thực}, i})$$



> [!def] 
> Cho hai không gian độ đo $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$. Đặt $\mathcal{R}$ là họ các hợp hữu hạn của các hình chữ nhật đo được đôi một rời nhau: 
> $$\mathcal{R} = \left\{ \bigcup_{i=1}^{m} A_i \times B_i : A_i \in \mathcal{F},\, B_i \in \mathcal{G},\, \text{đôi một rời nhau} \right\}$$

> [!thm] (Mệnh đề 1)
> $\mathcal{R}$ là một đại số trên $X \times Y$.

> [!prf]
> **Bổ đề:** Giao của hai hình chữ nhật đo được luôn là một hình chữ nhật đo được:
> $$(A_1 \times B_1) \cap (A_2 \times B_2) = (A_1 \cap A_2) \times (B_1 \cap B_2)$$
> Do $\mathcal{F}, \mathcal{G}$ đóng với phép giao hữu hạn nên $(A_1 \cap A_2) \in \mathcal{F}$ và $(B_1 \cap B_2) \in \mathcal{G}$, suy ra vế phải vẫn là một hình chữ nhật đo được.
> 
> **1. Chứa không gian mẫu:** Do $X \in \mathcal{F}$ và $Y \in \mathcal{G}$ nên $X \times Y$ là một hình chữ nhật đo được, tức $X \times Y \in \mathcal{R}$ (hợp rời rạc với $m=1$).
> 
> **2. Đóng với phép giao hữu hạn:** Giả sử $E_1 = \bigcup_{i=1}^m R_i$ và $E_2 = \bigcup_{j=1}^k R'_j$ thuộc $\mathcal{R}$. Áp dụng tính phân phối:
> $$E_1 \cap E_2 = \bigcup_{i=1}^m \bigcup_{j=1}^k (R_i \cap R'_j)$$
> Theo Bổ đề đã nêu, mỗi $R_i \cap R'_j$ là một hình chữ nhật đo được, vì $\{R_i\}$ và $\{R'_j\}$ vốn đôi một rời nhau nên các giao $R_i \cap R'_j$ cũng đôi một rời nhau, với số lượng $mk$ hữu hạn. Vậy $E_1 \cap E_2 \in \mathcal{R}$.
> 
> **3. Đóng với phép lấy phần bù:** Trước hết xét $m=1$, tức $R = A \times B$. Ta có phân tích rời rạc:
> $$R^c = (A^c \times Y) \cup (A \times B^c)$$
> Mà ta có $(A^c \times Y) \cap (A \times B^c) = (A^c \cap A) \times (Y \cap B^c) = \emptyset$, nên $R^c \in \mathcal{R}$.
> 
> Với $m>1$, đặt $E = \bigcup_{i=1}^m R_i$. Theo De Morgan, $E^c = \bigcap_{i=1}^m R_i^c$. Theo trường hợp $m=1$, mỗi $R_i^c \in \mathcal{R}$. Ta cũng có theo Mục 2, $\mathcal{R}$ đóng với phép giao hữu hạn. Vậy ta suy ra $E^c \in \mathcal{R}$.
> 
> **4. Đóng với phép hợp hữu hạn:** Với $E_1, E_2 \in \mathcal{R}$ bất kỳ, theo Mục 3 ta có $E_1^c, E_2^c \in \mathcal{R}$, theo Mục 2 ta có $E_1^c \cap E_2^c \in \mathcal{R}$, và áp dụng lại Mục 3 một lần nữa ta có $(E_1^c \cap E_2^c)^c \in \mathcal{R}$. Theo De Morgan:
> $$E_1 \cup E_2 = (E_1^c \cap E_2^c)^c \in \mathcal{R}$$
> 
> **Kết luận:** $\mathcal{R}$ thỏa mãn đầy đủ ba tiên đề của một đại số nên là đại số trên không gian $X \times Y$.

> [!thm] (Mệnh đề 2) 
> Cho $(X, \mathcal{F}, \mu)$, $(Y, \mathcal{G}, \nu)$ $\sigma$-hữu hạn và $E \in \mathcal{F} \otimes \mathcal{G}$. Khi đó:
> 
> 1. $E_x := {y \in Y : (x,y) \in E} \in \mathcal{G}$ và $E^y := {x \in X : (x,y) \in E} \in \mathcal{F}$.
> 2. Hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được, $y \mapsto \mu(E^y)$ là $\nu$-đo được, và: $$\int_X \nu(E_x) d\mu = \int_Y \mu(E^y) d\nu \tag{1}$$

> [!prob]  (Bước 1 trong chứng minh Tonelli)
> Cho $F : X \times Y \to [0, \infty]$ là hàm đo được. Xét cụ thể ${} F(x, y) = \chi_{E}(x,y) {}$ với $E \in \mathcal{F} \otimes \mathcal{G}$. Chứng minh rằng:  
>  
> 1. Với mỗi $x \in X$, ánh xạ $y \mapsto F(x, y)$ là $\nu$-đo được. Với mỗi $y \in Y$, ánh xạ $x \mapsto F(x, y)$ là $\mu$-đo được.  
> 2. Ánh xạ $x \mapsto \int_Y F(x, y) \, d\nu$ là $\mu$-đo được và ánh xạ $y \mapsto \int_X F(x, y) \, d\mu$ là $\nu$-đo được.  
> 3. Ta có công thức tích phân:  
> $$
> \int_{X \times Y} F(x, y) \, d(\mu \times \nu)
> = \int_X \left( \int_Y F(x, y) \, d\nu \right) d\mu
> = \int_Y \left( \int_X F(x, y) \, d\mu \right) d\nu.
> $$

> [!prf]
> Ta có hàm lát cắt của hàm đặc trưng chính là hàm đặc trưng của tập lát cắt. Cụ thể:
>   $$F(x, \cdot) = \chi_{E_x}(\cdot) \quad \text{và} \quad F(\cdot, y) = \chi_{E^y}(\cdot)$$
> Theo Mệnh đề 2 (Mục I), ta đã biết với mọi $E \in \mathcal{F} \otimes \mathcal{G}$ thì $E_x \in \mathcal{G}$ và $E^y \in \mathcal{F}$. Do đó, các hàm đặc trưng $\chi_{E_x}$ và $\chi_{E^y}$ hiển nhiên đo được. Tính chất 1) được thỏa mãn.
> Tương tự, tích phân lát cắt chính là độ đo của tập lát cắt:
>   $$\int_Y F(x, y)  d\nu = \int_Y \chi_{E_x}(y)  d\nu = \nu(E_x)$$
> Mệnh đề 2 khẳng định hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được. Do đó tính chất 2) được thỏa mãn.
> Cuối cùng, thay các biểu thức này vào đẳng thức tích phân tổng quát:
>   $$\int_X \left( \int_Y F(x, y)  d\nu \right) d\mu = \int_X \nu(E_x) d\mu = (\mu \times \nu)(E) = \int_{X \times Y} \chi_E  d(\mu \times \nu)$$
> Theo Mệnh đề 2, giá trị này cũng bằng $\int_Y \mu(E^y)  d\nu = \int_Y \left( \int_X F(x, y)  d\mu \right) d\nu$
> Tính chất 3) được thỏa. Vậy kết quả đúng cho hàm đặc trưng. 

> [!def] (Tích chập) 
> Với $f, g \in \mathcal{L}^1(\mathbb{R}^N)$, tích chập được định nghĩa bởi: $$(f * g)(x) = \int_{\mathbb{R}^N} f(x-y)g(y) dy$$

> [!thm] (Tính chất) 
> Với a.e $x \in \mathbb{R}^N$, hàm $y \mapsto f(x-y)g(y)$ khả tích, và $(f*g) \in \mathcal{L}^1(\mathbb{R}^N)$.

> [!prf] 
> Đặt $F(x,y) = f(x-y)g(y)$. Áp dụng Tonelli cho $|F|$: 
> $$
> \iint |f(x-y)g(y)| dx dy = \int_{\mathbb{R}^N} |g(y)| \left(\int_{\mathbb{R}^N} |f(x-y)| dx\right) dy
> $$ 
> Theo tính bất biến của phép tịnh tiến của độ đo Lebesgue: $\int |f(x-y)| dx = |f|_{\mathcal{L}^1}$. Do đó: 
> $$
> \iint |F| dx dy = |f|_{\mathcal{L}^1} \cdot |g|_{\mathcal{L}^1} < \infty
> $$ 
> Suy ra $F \in \mathcal{L}^1(\mathbb{R}^N \times \mathbb{R}^N)$. Áp dụng Fubini: với a.e $x$, lát cắt $y \mapsto f(x-y)g(y)$ khả tích (Tính chất 1), và hàm $(f*g)(x) = \int F(x,\cdot) dy$ khả tích trên $\mathbb{R}^N$ (Tính chất 2).
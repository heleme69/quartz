## BÀI TẬP CHƯƠNG 5: CHUỖI LAURENT VÀ PHÂN LOẠI KỲ DỊ

> [!prob] Bài 5.9
> Cho một khai triển Taylor như sau:
> $$ \frac{1}{1 - z - z^2} = \sum_{n=0}^{\infty} C_n z^n $$
> Để có được khai triển trên thì bán kính khai triển là bao nhiêu? Nếu có khai triển đó hãy chứng minh hệ thức truy hồi sau:
> $$ C_0 = C_1 = 1 \quad \text{và} \quad C_n = C_{n-1} + C_{n-2} \quad (\forall n \ge 2) $$

> [!prf] Lời giải chi tiết Bài 5.9
> **1. Xác định bán kính khai triển ($R$):**
> Khai triển Taylor quanh tâm $z_0 = 0$ (chuỗi Maclaurin) của một hàm phân thức hữu tỷ sẽ hội tụ trong hình tròn hở $|z| < R$, trong đó $R$ là khoảng cách ngắn nhất tính từ tâm $0$ đến điểm kỳ dị (nghiệm của mẫu số) của hàm số đó.
> 
> Xét phương trình mẫu số: 
> $$ 1 - z - z^2 = 0 \iff z^2 + z - 1 = 0 $$
> Phương trình bậc hai này cho ta hai nghiệm thực (hai điểm kỳ dị cô lập):
> $$ z_1 = \frac{-1 + \sqrt{5}}{2} \approx 0.618 \quad \text{và} \quad z_2 = \frac{-1 - \sqrt{5}}{2} \approx -1.618 $$
> Khoảng cách nhỏ nhất từ tâm $0$ đến hai điểm này là $|z_1|$. Do đó, bán kính hội tụ của chuỗi là:
> $$ R = |z_1| = \frac{\sqrt{5} - 1}{2} $$
> 
> **2. Chứng minh hệ thức truy hồi của dãy hệ số $C_n$:**
> Nhân chéo mẫu số $1 - z - z^2$ với chuỗi lũy thừa ở vế phải, ta thu được đồng nhất thức:
> $$ 1 = (1 - z - z^2) \sum_{n=0}^{\infty} C_n z^n $$
> Phân phối đa thức vào chuỗi vô hạn:
> $$ 1 = \sum_{n=0}^{\infty} C_n z^n - \sum_{n=0}^{\infty} C_n z^{n+1} - \sum_{n=0}^{\infty} C_n z^{n+2} $$
> Tiến hành tịnh tiến chỉ số biến đếm của các chuỗi để đưa về cùng số mũ $z^n$:
> $$ 1 = \sum_{n=0}^{\infty} C_n z^n - \sum_{n=1}^{\infty} C_{n-1} z^n - \sum_{n=2}^{\infty} C_{n-2} z^n $$
> Khai triển tường minh các số hạng ứng với bậc thấp nhất ($z^0$ và $z^1$) ra ngoài dấu tổng:
> $$ 1 = \left( C_0 + C_1 z + \sum_{n=2}^{\infty} C_n z^n \right) - \left( C_0 z + \sum_{n=2}^{\infty} C_{n-1} z^n \right) - \left( \sum_{n=2}^{\infty} C_{n-2} z^n \right) $$
> Gom các số hạng cùng bậc lại với nhau:
> $$ 1 = C_0 + (C_1 - C_0)z + \sum_{n=2}^{\infty} (C_n - C_{n-1} - C_{n-2})z^n $$
> Đồng nhất hệ số hai vế:
> *   Hệ số bậc $z^0$: $C_0 = 1$
> *   Hệ số bậc $z^1$: $C_1 - C_0 = 0 \implies C_1 = C_0 = 1$
> *   Hệ số bậc tổng quát $z^n$ ($n \ge 2$): $C_n - C_{n-1} - C_{n-2} = 0 \implies C_n = C_{n-1} + C_{n-2}$
> 
> Hệ thức truy hồi được chứng minh hoàn tất (Đây chính là cấu trúc của dãy Fibonacci).

---

> [!prob] Bài 5.10
> Khai triển hàm số $f(z) = \frac{e^z}{z(z-1)}$ thành chuỗi:
> (a) Khai triển Laurent quanh lân cận điểm $z = 0$.
> (b) Khai triển Laurent quanh lân cận điểm $z = 1$.

> [!prf] Lời giải chi tiết Bài 5.10
> **(a) Khai triển Laurent quanh tâm $z_0 = 0$ (miền hội tụ $0 < |z| < 1$):**
> Ta tách cấu trúc hàm số để cô lập thành phần kỳ dị tại gốc tọa độ:
> $$ f(z) = \frac{e^z}{z} \cdot \frac{1}{z-1} = -\frac{e^z}{z} \cdot \frac{1}{1-z} $$
> Áp dụng hai khai triển Maclaurin kinh điển có miền hội tụ chứa $|z| < 1$:
> *   $e^z = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \dots = \sum_{n=0}^{\infty} \frac{z^n}{n!}$
> *   $\frac{1}{1-z} = 1 + z + z^2 + z^3 + \dots = \sum_{n=0}^{\infty} z^n$
> 
> Nhân chập hai chuỗi vô hạn theo quy tắc tích Cauchy:
> $$ e^z \cdot \frac{1}{1-z} = \left( 1 + z + \frac{z^2}{2} + \frac{z^3}{6} + \dots \right) \left( 1 + z + z^2 + z^3 + \dots \right) $$
> Nhóm theo từng bậc lũy thừa tăng dần của $z$:
> *   Bậc $0$: $1 \cdot 1 = 1$
> *   Bậc $1$: $(1 \cdot 1) + (1 \cdot 1) = 2$
> *   Bậc $2$: $(1 \cdot 1) + (1 \cdot 1) + \left(\frac{1}{2} \cdot 1\right) = \frac{5}{2}$
> *   Bậc $3$: $(1 \cdot 1) + (1 \cdot 1) + \left(\frac{1}{2} \cdot 1\right) + \left(\frac{1}{6} \cdot 1\right) = \frac{8}{3}$
> 
> Thay tích chuỗi vừa tính vào biểu thức ban đầu và phân phối cụm $-\frac{1}{z}$ vào trong:
> $$ f(z) = -\frac{1}{z} \left( 1 + 2z + \frac{5}{2}z^2 + \frac{8}{3}z^3 + \dots \right) = -\frac{1}{z} - 2 - \frac{5}{2}z - \frac{8}{3}z^2 - \dots $$
> 
> **(b) Khai triển Laurent quanh tâm $z_0 = 1$ (miền hội tụ $0 < |z-1| < 1$):**
> Thực hiện phép đổi biến dời tâm: Đặt $w = z - 1 \implies z = w + 1$. Hàm số chuyển sang biến mới $w$:
> $$ f(w+1) = \frac{e^{w+1}}{(w+1)w} = \frac{e \cdot e^w}{w} \cdot \frac{1}{1+w} $$
> Khai triển các hàm siêu việt theo biến $w$ tại lân cận quanh $0$ ($|w| < 1$):
> *   $e^w = 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \dots$
> *   $\frac{1}{1+w} = 1 - w + w^2 - w^3 + \dots$
> 
> Thực hiện phép nhân tích Cauchy cho hai chuỗi trên:
> $$ e^w \cdot \frac{1}{1+w} = \left( 1 + w + \frac{w^2}{2} + \dots \right) \left( 1 - w + w^2 - \dots \right) $$
> $$ = 1 + (-1+1)w + \left(1 - 1 + \frac{1}{2}\right)w^2 + \left(-1 + 1 - \frac{1}{2} + \frac{1}{6}\right)w^3 + \dots $$
> $$ = 1 + 0w + \frac{1}{2}w^2 - \frac{1}{3}w^3 + \dots $$
> Nhân phân phối thừa số $\frac{e}{w}$ bên ngoài vào và hoàn trả lại biến cũ $w = z-1$:
> $$ f(z) = \frac{e}{z-1} \left( 1 + \frac{1}{2}(z-1)^2 - \frac{1}{3}(z-1)^3 + \dots \right) $$
> $$ f(z) = \frac{e}{z-1} + \frac{e}{2}(z-1) - \frac{e}{3}(z-1)^2 + \dots $$

---

> [!prob] Bài 5.11
> Cho một hàm số $f(z)$ nhận điểm $z_0$ làm một cực điểm bậc $n$. Hãy phân tích và thiết lập mối quan hệ toán học cơ sở giữa chuỗi Taylor và chuỗi Laurent khi khai triển hàm số này tại lân cận điểm $z_0$.

> [!prf] Lời giải chi tiết Bài 5.11
> Theo định lý phân loại điểm kỳ dị cô lập, nếu $z_0$ là một cực điểm cấp $n$ ($n \ge 1$) của hàm $f(z)$, thì hàm số luôn luôn biểu diễn được duy nhất dưới dạng phân thức:
> $$ f(z) = \frac{g(z)}{(z-z_0)^n} $$
> Trong đó, hàm thành phần $g(z)$ hoàn toàn giải tích (analytic) tại lân cận của điểm $z_0$ và thỏa mãn điều kiện ngặt $g(z_0) \neq 0$.
> 
> Vì $g(z)$ giải tích tại lân cận $z_0$, nó có thể đại diện bằng một **chuỗi Taylor** (đơn trị, bậc không âm) hội tụ tuyệt đối:
> $$ g(z) = \sum_{k=0}^{\infty} b_k (z-z_0)^k = b_0 + b_1(z-z_0) + b_2(z-z_0)^2 + \dots $$
> 
> Để thiết lập chuỗi Laurent cho hàm $f(z)$, ta thực hiện chia trực tiếp chuỗi Taylor của hàm chỉnh hình $g(z)$ cho đa thức bậc cao $(z-z_0)^n$:
> $$ f(z) = \frac{1}{(z-z_0)^n} \sum_{k=0}^{\infty} b_k (z-z_0)^k = \sum_{k=0}^{\infty} b_k (z-z_0)^{k-n} $$
> Đổi chỉ số biến đếm bằng cách đặt $m = k-n \implies k = m+n$. Khi biến $k$ chạy từ $0$ đến $\infty$, chỉ số mới $m$ sẽ chạy dịch biên từ $-n$ tiến đến $\infty$:
> $$ f(z) = \sum_{m=-n}^{\infty} a_m (z-z_0)^m \quad \text{với} \quad a_m = b_{m+n} $$
> Viết tường minh chuỗi kết quả:
> $$ f(z) = \frac{b_0}{(z-z_0)^n} + \frac{b_1}{(z-z_0)^{n-1}} + \dots + \frac{b_{n-1}}{z-z_0} + b_n + b_{n+1}(z-z_0) + \dots $$
> 
> **Mối liên hệ rút ra:**
> * Các hệ số $a_m$ của phần chính và phần đều trong chuỗi Laurent của hàm số $f(z)$ bản chất chính là các hệ số $b_{m+n}$ trích xuất từ chuỗi Taylor của hàm bổ trợ $g(z) = (z-z_0)^n f(z)$.
> * Số hạng mũ âm cao nhất trong phần chính của chuỗi Laurent bị chặn cố định đúng bằng bậc của cực điểm ($m = -n$).

---

> [!prob] Bài 5.12
> Tìm khai triển Laurent của hàm số $f(z) = \frac{\sin z}{z^2}$ tại lân cận điểm kì dị $z = 0$ bằng hai phương pháp sau:
> Cách 1: Sử dụng cấu trúc chuỗi Taylor.
> Cách 2: Sử dụng công thức chuỗi Laurent tổng quát.

> [!prf] Lời giải chi tiết Bài 5.12
> **Cách 1: Xây dựng chuỗi dựa vào chuỗi Taylor cơ bản**
> Hàm lượng giác $\sin z$ là hàm chỉnh hình trên toàn bộ mặt phẳng phức và có khai triển Taylor quanh tâm $0$ (chuỗi Maclaurin) dạng:
> $$ \sin z = \sum_{k=0}^{\infty} (-1)^k \frac{z^{2k+1}}{(2k+1)!} = z - \frac{z^3}{3!} + \frac{z^5}{5!} - \frac{z^7}{7!} + \dots $$
> Chia trực tiếp toàn bộ các số hạng của chuỗi Taylor này cho mẫu số $z^2$:
> $$ f(z) = \frac{1}{z^2} \left( z - \frac{z^3}{6} + \frac{z^5}{120} - \frac{z^7}{5040} + \dots \right) $$
> $$ f(z) = \frac{1}{z} - \frac{z}{6} + \frac{z^3}{120} - \frac{z^5}{5040} + \dots = \sum_{k=0}^{\infty} (-1)^k \frac{z^{2k-1}}{(2k+1)!} $$
> 
> **Cách 2: Áp dụng lý thuyết công thức hệ số Laurent tổng quát**
> Theo định nghĩa định lượng, chuỗi Laurent có dạng tổng quát là $f(z) = \sum_{n=-\infty}^{\infty} a_n z^n$. 
> Phân loại điểm kỳ dị: Do $\lim_{z \to 0} [z \cdot f(z)] = \lim_{z \to 0} \frac{\sin z}{z} = 1$ (hữu hạn và khác $0$), điểm $z=0$ là cực điểm đơn (bậc 1). Vì thế, các hệ số phần chính với bậc lũy thừa âm từ $n \le -2$ triệt tiêu hoàn toàn về $0$.
> 
> Ta tính toán độc lập từng hệ số Laurent còn lại:
> *   Hệ số thặng dư ($n = -1$): 
>     $$ a_{-1} = \text{Res}(f, 0) = \lim_{z \to 0} [z \cdot f(z)] = 1 $$
> *   Hệ số hằng số ($n = 0$): 
>     $$ a_0 = \lim_{z \to 0} \frac{d}{dz}[z \cdot f(z)] = \lim_{z \to 0} \frac{d}{dz}\left(\frac{\sin z}{z}\right) = \lim_{z \to 0} \frac{z\cos z - \sin z}{z^2} = 0 $$
> *   Hệ số bậc một ($n = 1$): Tính qua đạo hàm bậc cao tương ứng của hàm chỉnh hình thu được kết quả $a_1 = -\frac{1}{6}$.
> 
> Tập hợp các hệ số lại, ta thu được chuỗi Laurent đồng nhất hoàn toàn với Cách 1:
> $$ f(z) = \frac{1}{z} - \frac{z}{6} + \frac{z^3}{120} - \dots $$

---

> [!prob] Bài 5.13
> Xác định giá trị của hệ số $a_{-1}$ trong khai triển chuỗi Laurent của hàm số lượng giác $f(z) = \tan z$ tại lân cận điểm kỳ dị $z = \pi/2$.

> [!prf] Lời giải chi tiết Bài 5.13
> Dựa trên lý thuyết chuỗi Laurent, hệ số $a_{-1}$ đi kèm với số hạng lũy thừa ngược $\frac{1}{z-z_0}$ bản chất chính là **Thặng dư** (Residue) của hàm số đó tại điểm kỳ dị đang xét:
> $$ a_{-1} = \text{Res}\left(f, \frac{\pi}{2}\right) $$
> 
> Ta đưa hàm số về dạng cấu trúc phân thức hữu tỷ lượng giác nhằm kiểm tra bậc cực điểm:
> $$ f(z) = \tan z = \frac{P(z)}{Q(z)} = \frac{\sin z}{\cos z} $$
> Xét tính chất của các hàm tại điểm giới hạn $z_0 = \pi/2$:
> *   Tử số: $P(\pi/2) = \sin(\pi/2) = 1 \neq 0$
> *   Mẫu số: $Q(\pi/2) = \cos(\pi/2) = 0$
> *   Đạo hàm của mẫu tại điểm này: $Q'(\pi/2) = -\sin(\pi/2) = -1 \neq 0$
> 
> Vì mẫu số có nghiệm đơn tại $z_0 = \pi/2$ còn tử số khác không, nên điểm $z_0 = \pi/2$ là một **cực điểm đơn** (cực điểm bậc 1) của hàm số $\tan z$.
> 
> Áp dụng quy tắc tính nhanh thặng dư tại cực điểm đơn cho hàm phân thức chỉnh hình $\frac{P(z)}{Q(z)}$:
> $$ a_{-1} = \text{Res}\left(\frac{\sin z}{\cos z}, \frac{\pi}{2}\right) = \frac{P(\pi/2)}{Q'(\pi/2)} = \frac{\sin(\pi/2)}{-\sin(\pi/2)} = \frac{1}{-1} = -1 $$
> 
> **Kết luận:** Hệ số $a_{-1}$ trong khai triển Laurent của hàm số bằng $-1$.

> [!thm] Các phản ví dụ
>
> **(1) Tính bắt buộc của điều kiện "xét trên mọi tập con"**
>    
> Nếu chỉ giả thiết tích phân bằng nhau (hoặc không âm) trên duy nhất miền tổng $D$, cấu trúc dấu của hàm số sẽ bị che lấp bởi sự triệt tiêu đại số trên toàn miền.
> 
>  Xét không gian Lebesgue trên $D = [-1, 2]$ với độ đo $\mu(D) = 3$. Chọn hàm số $f(x) = x$. Tích phân trên toàn miền $D$ là:
>   $$\int_{[-1, 2]} f \, d\mu = \int_{-1}^2 x \, dx = \left. \frac{x^2}{2} \right|_{-1}^2 = \frac{4}{2} - \frac{1}{2} = \frac{3}{2} \ge 0$$
>   Giả thiết tích phân không âm trên $D$ thỏa mãn. Tuy nhiên, nếu xét tập con $E = [-1, 0)$, ta có $\mu(E) = 1 > 0$, nhưng tại mọi $x \in E$ thì $f(x) < 0$. Do đó, khẳng định $f \ge 0$ a.e. trên $D$ sai.
> 
>  Xét không gian Lebesgue trên $D = [-1, 1]$. Chọn $f(x) = x$ và $g(x) = 0$. Tích phân tổng trên $D$ bằng nhau do tính chất của hàm lẻ:
>   $$\int_D f \, d\mu = \int_{-1}^1 x \, dx = \left. \frac{x^2}{2} \right|_{-1}^1 = \frac{1}{2} - \frac{1}{2} = 0, \quad \int_D g \, d\mu = \int_{-1}^1 0 \, dx = 0 \implies \int_D f \, d\mu = \int_D g \, d\mu$$
>   Tuy nhiên, xét tập hợp các điểm mà hai hàm khác nhau: $E = \{x \in D : f(x) \neq g(x)\} = [-1, 1] \setminus \{0\}$. 
>   Độ đo của tập này là $\mu(E) = 2 > 0$. Vì hai hàm khác nhau trên một tập có độ đo dương thực sự, khẳng định $f = g$ a.e. trên $D$ là sai.
>
> **(2) Rủi ro từ "Độ đo vô hạn" khi hàm số tiến ra vô cùng**
>    
> Ngay cả khi tích phân bằng nhau trên mọi tập con $E \subset D$, mệnh đề (2) vẫn sụp đổ nếu hệ thống xuất hiện các đại lượng vô cực ($\pm\infty$) trên một không gian có độ đo vô hạn (không bán hữu hạn).
> 
> Xét không gian một điểm $D = \{a\}$ với độ đo vô hạn $\mu(\{a\}) = \infty$. Các tập đo được chỉ có $\emptyset$ và $D$. Chọn hai hàm số khác nhau: $f(a) = 1$ và $g(a) = 2$.
>   Tính tích phân của hai hàm trên tất cả các tập đo được:
>   - Với $E = \emptyset$: $\int_\emptyset f \, d\mu = 0 = \int_\emptyset g \, d\mu$
>   - Với $E = D$: $\int_D f \, d\mu = 1 \cdot \mu(\{a\}) = 1 \cdot \infty = \infty$ và $\int_D g \, d\mu = 2 \cdot \mu(\{a\}) = 2 \cdot \infty = \infty$
>   
>   Như vậy, đẳng thức $\int_E f \, d\mu = \int_E g \, d\mu$ luôn đúng trên mọi tập con $E$, nhưng rõ ràng $f(a) \neq g(a)$ trên tập $D$ có độ đo dương ($\infty$).
> 
> Trong chứng minh thông thường cho hàm khả tích hữu hạn, ta xét tập phản chứng $B = \{f \ge g + \epsilon\}$ với $\mu(B) > 0$ để được bất đẳng thức:
>   $$\int_B f \, d\mu \ge \int_B g \, d\mu + \epsilon \cdot \mu(B)$$
>   Nếu áp dụng vào ví dụ trên với $\epsilon = 1$, ta có $B = \{a\}$ và bất đẳng thức trở thành:
>   $$\infty \ge \infty + 1 \cdot \infty \implies \infty \ge \infty$$
>   Trên $\overline{\mathbb{R}}$, mệnh đề $\infty \ge \infty$ là một mệnh đề đúng. Do đó, ta không tạo ra được mâu thuẫn để bác bỏ giả thiết phản chứng.
>
> **(3) Giả thiết không gian là $\sigma$-hữu hạn (Prob 9.5)**
> Để bổ đề đúng cho cả hàm bán khả tích tổng quát, ta phải thay đổi chiến lược chứng minh, áp dụng tính chất $\sigma$-hữu hạn nhằm đưa tích phân về dạng số thực đảm bảo rút gọn hai vế.
> 
>   Viết $X = \bigcup_{n=1}^\infty X_n$ với $\mu(X_n) < \infty$ và dãy tập tăng dần $X_n \subset X_{n+1}$.
> 
>   Xét tập phản chứng $E_1 = \{x \in D : f(x) > g(x)\}$. Ta tách $E_1$ thành hợp đếm được của các tập $A_{n,k}$:
>   $$A_{n,k} = \left\{x \in D \cap X_n : -k \le g(x) \le k \quad \text{và} \quad f(x) \ge g(x) + \frac{1}{k}\right\}$$
>   Giả sử $\mu(E_1) > 0$, theo tính bán cộng tính đếm được $\mu(E_1) \le \sum \mu(A_{n,k})$, bắt buộc phải tồn tại một cặp chỉ số $(n, k)$ sao cho $\mu(A_{n,k}) > 0$.
>
>   Vì $A_{n,k} \subset X_n \implies \mu(A_{n,k}) \le \mu(X_n) < \infty$. Do $|g(x)| \le k$ trên $A_{n,k}$, ta có:
>   $$\int_{A_{n,k}} |g| \, d\mu \le \int_{A_{n,k}} k \, d\mu = k \cdot \mu(A_{n,k}) < \infty \implies \int_{A_{n,k}} g \, d\mu \in \mathbb{R}$$
>   Từ bất đẳng thức hàm $f \ge g + \frac{1}{k}$ trên $A_{n,k}$, tính đơn điệu của tích phân cho ta:
>   $$\int_{A_{n,k}} f \, d\mu \ge \int_{A_{n,k}} \left(g + \frac{1}{k}\right) d\mu = \int_{A_{n,k}} g \, d\mu + \frac{1}{k}\mu(A_{n,k})$$
>   Vì $\int_{A_{n,k}} g \, d\mu$ là một số thực hữu hạn, ta thực hiện phép chuyển vế (trừ đại số hai vế cho $\int_{A_{n,k}} g \, d\mu$):
>   $$\int_{A_{n,k}} f \, d\mu - \int_{A_{n,k}} g \, d\mu \ge \frac{1}{k}\mu(A_{n,k}) > 0 \implies \int_{A_{n,k}} f \, d\mu > \int_{A_{n,k}} g \, d\mu$$
>   Mâu thuẫn trực tiếp với giả thiết $\int_E f \, d\mu = \int_E g \, d\mu$ với mọi $E$. Phép phân rã này đã bẻ gãy rào cản vô cùng thành công.

> [!thm] Bản chất mối liên hệ giữa Prob 9.10 và Prob 9.3
> 
> 1. **Sự tương đồng về mặt tập hợp:** Tập $E_n = \{x \in X : |f(x)| \ge n\}$ trong Prob 9.10 chính là tập $A = \{x \in X : |f(x)| > N\}$ mà ta tự định nghĩa ở **Bước 3 của chứng minh Prob 9.3(b)**. 
> 2. **Cơ chế hoạt động:** Cả hai bài toán đều dựa trên một nguyên lý cốt lõi của lý thuyết tích phân Lebesgue: Một hàm số đã khả tích ($f \in L^1$) thì đồ thị của nó không được phép duy trì một độ cao lớn trên một tập hợp có diện tích đáy quá rộng. Khi chiều cao mức cắt tiến ra vô cực ($n \to \infty$), độ đo của phần đáy tương ứng ($\mu(E_n)$) bắt buộc phải sụp đổ về $0$.

---

### Cách 1: Chứng minh Prob 9.10 bằng kết quả Bất đẳng thức Chebyshev (Từ Prob 9.3)

Đây là cách ngắn nhất, tận dụng trực tiếp ước lượng thô mà ta đã làm ở Bước 3 của bài toán trước.

Với mỗi $n \in \mathbb{N}^*$, trên tập $E_n = \{x \in X : |f(x)| \ge n\}$, ta luôn có $|f(x)| \ge n$. Do đó:
$$\int_X |f| d\mu \ge \int_{E_n} |f| d\mu \ge \int_{E_n} n d\mu = n \cdot \mu(E_n)$$

Suy ra:
$$0 \le \mu(E_n) \le \frac{1}{n} \int_X |f| d\mu = \frac{\|f\|_1}{n}$$

Vì $f \in L^1(X)$ nên $\|f\|_1$ là một hằng số thực hữu hạn. Lấy giới hạn hai vế khi $n \to \infty$:
$$0 \le \lim_{n \to \infty} \mu(E_n) \le \lim_{n \to \infty} \frac{\|f\|_1}{n} = 0$$

Theo định lý kẹp, ta có ngay $\lim_{n \to \infty} \mu(E_n) = 0$. (Chứng minh hoàn tất).

---

### Cách 2: Chứng minh bằng Tính liên tục của độ đo (Góc nhìn bổ trợ)

Bài toán này còn có thể giải bằng một góc nhìn rất đẹp của chương đầu tiên (Tính chất của độ đo): **Tính liên tục trên của độ đo đối với dãy tập giảm**.


1. **Dãy tập giảm:** Ta thấy nếu $|f(x)| \ge n + 1 \implies |f(x)| \ge n$. Do đó, dãy tập $E_n$ là một dãy tập giảm đơn điệu:
   $$E_0 \supseteq E_1 \supseteq E_2 \supseteq \dots \supseteq E_n \supseteq E_{n+1} \supseteq \dots$$
2. **Tập giao giới hạn:** Tập giao của toàn bộ họ này chính là tập hợp các điểm mà tại đó hàm số nhận giá trị vô cực:
   $$\bigcap_{n=0}^\infty E_n = \{x \in X : |f(x)| = \infty\}$$
   Vì $f \in L^1(X)$ (khả tích), ta có một định lý kinh điển là một hàm khả tích thì chỉ có thể nhận giá trị vô cực trên một tập có độ đo bằng $0$. Do đó: $\mu\left(\bigcap_{n=0}^\infty E_n\right) = 0$.
3. **Điều kiện kích hoạt tính liên tục trên:** Để dùng được công thức $\lim \mu(E_n) = \mu(\cap E_n)$, ta cần tập khởi đầu có độ đo hữu hạn. 
   - Áp dụng kết quả Chebyshev ở Cách 1: $\mu(E_1) \le \int_X |f| d\mu < \infty$. Vì tập $E_1$ có độ đo hữu hạn, điều kiện được thỏa mãn.
4. **Kết luận:** Theo tính liên tục từ trên của độ đo:
   $$\lim_{n \to \infty} \mu(E_n) = \mu\left(\bigcap_{n=0}^\infty E_n\right) = 0$$


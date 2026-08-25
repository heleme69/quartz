> [!thm] Bài toán (Prob. 8.4)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$. Giả sử $f$ là một hàm số đo được, không âm, nhận giá trị thực mở rộng trên tập $D \in \mathfrak{A}$ có độ đo hữu hạn $\mu(D) < \infty$. Giả sử thêm rằng $f > 0$ hầu khắp nơi (a.e.) trên $D$.
> 
> (a) Chứng minh rằng với mỗi $\delta > 0$, luôn tồn tại một hằng số $\eta > 0$ sao cho với mọi tập con đo được $E \subset D$ thỏa mãn $\mu(E) \ge \delta$, ta luôn có:
> $$\int_E f d\mu \ge \eta$$
> 
> (b) Chứng minh rằng kết luận trên không còn đúng nếu loại bỏ giả thiết $\mu(D) < \infty$.


> [!prf] Chứng minh câu (a) bằng phương pháp phản chứng
> 
> Giả sử kết luận của câu (a) là sai. Điều này có nghĩa là tồn tại một hằng số $\delta_0 > 0$ sao cho với mọi giá trị $\eta = \frac{1}{n} > 0$ (với $n \in \mathbb{N}^*$), ta luôn tìm được một tập con đo được tương ứng $E_n \subset D$ thỏa mãn đồng thời hai điều kiện:
> $$\mu(E_n) \ge \delta_0 \quad \text{nhưng} \quad \int_{E_n} f d\mu < \frac{1}{n}$$
> 
> Để vận dụng các định lý hội tụ, ta cần chuyển cấu trúc dãy tập hợp $E_n$ lộn xộn này về dạng đơn điệu. Ta định nghĩa một dãy tập hợp mới bằng phép toán lấy giới hạn trên (lim sup) của dãy tập hợp:
> $E = \limsup_{n \to \infty} E_n = \bigcap_{k=1}^\infty \bigcup_{n=k}^\infty E_n$
> 
> Ta tiến hành đánh giá độ đo Lebesgue của tập giới hạn $E$. Với mỗi $k \in \mathbb{N}^*$, đặt $G_k = \bigcup_{n=k}^\infty E_n$. Rõ ràng dãy tập hợp $\{G_k\}_{k=1}^\infty$ là một dãy giảm dần hướng về $E$. Vì $E_n \subset D$ nên $G_k \subset D$, dẫn đến $\mu(G_k) \le \mu(D) < \infty$. 
> 
> Áp dụng tính liên tục từ trên của độ đo, phối hợp với tính đơn điệu $\mu(G_k) \ge \mu(E_k) \ge \delta_0$, ta thu được chặn dưới độ đo của tập $E$:
> $$\mu(E) = \lim_{k \to \infty} \mu(G_k) \ge \delta_0 > 0$$
> 
> 
> Bây giờ, ta xét tích phân của hàm $f$ trên tập giới hạn $E$. Vận dụng Định lý hội tụ chặn (DCT) dưới dạng hàm chỉ thị, hoặc đánh giá qua giới hạn dưới của tích phân (Bổ đề Fatou):
> $$\int_E f d\mu = \int_D f \cdot \chi_E d\mu = \int_D f \cdot \left( \limsup_{n \to \infty} \chi_{E_n} \right) d\mu$$
> 
> Theo Bổ đề Fatou ngược dành cho các hàm bị chặn trên bởi hàm trội khả tích (ở đây hàm trội chính là $f \in L^1(D)$ do $f < \infty$ a.e. trên tập có độ đo hữu hạn), ta có:
> $$\limsup_{n \to \infty} \int_D f \cdot \chi_{E_n} d\mu \le \int_D \limsup_{n \to \infty} (f \cdot \chi_{E_n}) d\mu$$
> 
> Tuy nhiên, ta đã có giả thiết phản chứng $\int_{E_n} f d\mu < \frac{1}{n}$, điều này ép giới hạn trên của tích phân phải bằng mốc không tuyệt đối:
> $$\limsup_{n \to \infty} \int_{E_n} f d\mu \le \lim_{n \to \infty} \frac{1}{n} = 0$$
> 
> Kết hợp hai chuỗi bất đẳng thức, ta suy ra:
> $$\int_E f d\mu = 0$$
> 
> Theo tính chất của tích phân Lebesgue (Bổ đề 8.2b), một hàm số không âm có tích phân bằng 0 khi và chỉ khi hàm số đó bằng 0 hầu khắp nơi trên miền tích phân. Do đó:
> $f(x) = 0 \quad$ hầu khắp nơi (a.e.) trên $E$.
> 
> Điều này dẫn tới một sự mâu thuẫn logic nghiêm trọng: Đề bài cho $f > 0$ hầu khắp nơi trên $D$, mà $E \subset D$ có độ đo dương $\mu(E) \ge \delta_0 > 0$, nên $f$ bắt buộc phải dương hầu khắp nơi trên $E$. 
> 
> Sự mâu thuẫn này chứng tỏ giả thiết phản chứng là sai. Vậy kết luận (a) được chứng minh hoàn toàn.

> [!prf] Chứng minh câu (b) bằng phản ví dụ
> 
> Để chứng minh mệnh đề không còn đúng khi $\mu(D) = \infty$, ta tự xây dựng một phản ví dụ kinh điển trên không gian nền $(\mathbb{R}, \mathcal{A}, \mu)$ với $\mu$ là độ đo Lebesgue thông thường.
> 
> Chọn tập xác định là toàn bộ trục số thực dương: $D = (0, \infty)$, rõ ràng ta có $\mu(D) = \infty$.
> 
> Ta thiết lập một hàm số giảm dần và luôn dương trên $D$ như sau:
> $f(x) = e^{-x}$
> 
> Hàm số này hoàn toàn đo được, không âm và thỏa mãn ngặt điều kiện $f(x) > 0$ tại mọi điểm $x \in D$ (hiển nhiên đúng hầu khắp nơi).
> 
> Bây giờ, ta chủ động chọn một giá trị độ đo mục tiêu là $\delta_0 = 1 > 0$. Với mỗi số nguyên dương $n \in \mathbb{N}^*$, ta tự định nghĩa một dãy tập hợp dịch chuyển dần ra vô cực theo chiều ngang:
> $E_n = [n, n+1]$
> 
> Ta tiến hành kiểm tra hai điều kiện của bài toán trên dãy tập $E_n$ vừa chọn:
> * Xét quy mô độ đo: Chiều rộng của mỗi đoạn thẳng luôn bằng 1, tức là $\mu(E_n) = (n+1) - n = 1 \ge \delta_0$ với mọi $n$. Điều kiện chặn dưới độ đo được thỏa mãn.
> * Xét lượng tích phân đuôi: Ta tính trực tiếp tích phân Lebesgue (trùng với tích phân Riemann trong trường hợp này):
> $$\int_{E_n} f d\mu = \int_n^{n+1} e^{-x} dx = \left[ -e^{-x} \right]_n^{n+1} = e^{-n} - e^{-(n+1)} = e^{-n}(1 - e^{-1})$$
> 
> Khi cho chỉ số $n$ tiến ra vô cực, lượng tích phân này sụt giảm nhanh chóng về mốc không:
> $$\lim_{n \to \infty} \int_{E_n} f d\mu = \lim_{n \to \infty} e^{-n}(1 - e^{-1}) = 0$$
> 
> Vì giới hạn bằng 0, với mọi hằng số $\eta > 0$ dù nhỏ đến đâu, ta luôn tìm được một chỉ số $n$ đủ lớn sao cho $\int_{E_n} f d\mu < \eta$, bất chấp việc $\mu(E_n) = 1 \ge \delta_0$. 
> 
> Phản ví dụ này khẳng định rằng nếu miền không gian $D$ rộng vô hạn, hàm số có thể bào mòn năng lượng của nó về 0 ở tận vô cùng, khiến kết luận (a) hoàn toàn thất bại.

> [!problem] (Bài 8.6)  
> Cho không gian độ đo $(X, \mathcal{A}, \mu)$.  
> Giả sử $f$ và $g$ là hai hàm đo được không âm, nhận giá trị thực mở rộng trên một tập $D \in \mathcal{A}$ sao cho $f \leq g$ hầu khắp nơi trên $D$.  
>  
> (a) Chứng minh rằng nếu  
> $$\int_D f \, d\mu = \int_D g \, d\mu < \infty,$$  
> thì $f = g$ hầu khắp nơi trên $D$.  
>  
> (b) Chứng minh bằng cách xây dựng phản ví dụ rằng nếu bỏ điều kiện  
> $$\int_D f \, d\mu < \infty \quad \text{và} \quad \int_D g \, d\mu < \infty$$  
> trong (a) thì kết luận không còn đúng.



> [!prf] Chứng minh Prob 8.6
> **(a) Chứng minh nếu $\int_D f d\mu = \int_D g d\mu < \infty$ thì $f = g$ a.e. on $D$**
> 
> Bước 1: Thiết lập hàm hiệu không âm
> Theo giả thiết, ta có $f \le g$ a.e. trên $D$. 
> Ta định nghĩa hàm hiệu $h: D \to \overline{\mathbb{R}}$ bởi $h(x) = g(x) - f(x)$. 
> Vì $f \le g$ a.e., ta suy ra hàm số $h$ là một hàm đo được không âm hầu khắp nơi trên $D$ ($h \ge 0$ a.e.).
> 
> Bước 2: Tính tích phân của hàm hiệu
> Do cả hai hàm $f$ và $g$ đều có tích phân hữu hạn trên $D$ (theo giả thiết $< \infty$), ta có quyền sử dụng tính tuyến tính của tích phân Lebesgue để tách hiệu:
> $$\int_D h d\mu = \int_D (g - f) d\mu = \int_D g d\mu - \int_D f d\mu$$
> 
> Mặt khác, giả thiết lại cho $\int_D f d\mu = \int_D g d\mu$. Thế vào phép trừ ở trên, ta thu được kết quả:
> $$\int_D h d\mu = 0$$
> 
> Bước 3: Áp dụng tính chất cốt lõi và kết luận
> Ta áp dụng định lý cơ bản của lý thuyết độ đo: "Nếu một hàm số không âm hầu khắp nơi có tích phân bằng 0, thì hàm số đó phải bằng 0 hầu khắp nơi".
> Từ $\int_D h d\mu = 0$ và $h \ge 0$ a.e., ta suy ra:
> $$h = 0 \quad \text{a.e. trên } D$$
> $$\iff g - f = 0 \quad \text{a.e. trên } D$$
> $$\iff f = g \quad \text{a.e. trên } D$$
> 
> ---
> 
> **(b) Xây dựng phản ví dụ khi bỏ điều kiện tích phân hữu hạn**
> 
> Để bác bỏ mệnh đề khi không còn điều kiện $\int_D f d\mu < \infty$ và $\int_D g d\mu < \infty$, ta cần tạo ra tình huống hai tích phân bằng nhau một cách tầm thường ở giá trị vô cùng ($\infty = \infty$).
> 
> Thiết lập phản ví dụ:
> - Không gian đo: Xét không gian độ đo Lebesgue trên nửa trục thực dương $D = (0, \infty)$ với độ đo chiều dài thông thường $\mu$.
> - Hàm thứ nhất: Chọn hàm hằng $f(x) = 1$.
> - Hàm thứ hai: Chọn hàm hằng $g(x) = 2$.
> 
> Kiểm tra các điều kiện:
> 1. Tính không âm và đo được: Cả $f$ và $g$ đều là các hàm hằng không âm, hiển nhiên đo được trên $D$.
> 2. Điều kiện so sánh dấu: Tại mọi điểm $x \in (0, \infty)$, ta luôn có $1 \le 2 \implies f(x) \le g(x)$, thỏa mãn điều kiện $f \le g$ a.e. trên $D$.
> 3. Điều kiện tích phân trên toàn miền: 
>    $$\int_D f d\mu = \int_0^{\infty} 1 \cdot dx = \infty$$
>    $$\int_D g d\mu = \int_0^{\infty} 2 \cdot dx = \infty$$
>    Do đó, đẳng thức $\int_D f d\mu = \int_D g d\mu$ vẫn hoàn toàn thỏa mãn (vì cùng bằng $\infty$).
> 
> Đánh giá kết luận:
> Mặc dù thỏa mãn mọi điều kiện về dấu và tích phân tổng, nhưng rõ ràng tại mọi điểm $x \in D$, ta luôn có $f(x) = 1 \neq 2 = g(x)$. Tập hợp các điểm mà tại đó $f(x) \neq g(x)$ chính là toàn bộ miền $D = (0, \infty)$, có độ đo bằng $\infty \neq 0$.
> Do đó, kết luận $f = g$ a.e. hoàn toàn sai. Phản ví dụ hoàn thành. 

> [!problem] (Bài 8.7)  
> Cho không gian độ đo $(X, \mathcal{A}, \mu)$.  
> Giả sử $f$ và $g$ là hai hàm đo được không âm, nhận giá trị thực mở rộng trên $X$.  
>  
> (a) Chứng minh rằng nếu  
> $$\int_X f \, d\mu = \int_X g \, d\mu < \infty$$  
> và  
> $$\int_E f \, d\mu = \int_E g \, d\mu \quad \text{với mọi } E \in \mathcal{A},$$  
> thì $f = g$ hầu khắp nơi trên $X$.  
>  
> (b) Chứng minh bằng cách xây dựng phản ví dụ rằng nếu bỏ điều kiện  
> $$\int_X f \, d\mu < \infty \quad \text{và} \quad \int_X g \, d\mu < \infty$$  
> trong (a) thì kết luận không còn đúng.



> [!prf] Chứng minh Bài 8.7 (a)
> Bước 1: Chia không gian thành miền âm dương
> Ta xét tập hợp $E = \{x \in X : f(x) \ge g(x)\}$. Vì $f, g$ đo được, tập $E$ là một tập đo được ($E \in \mathfrak{A}$).
> Khi đó, trên miền $E$, ta có hàm hiệu $f - g \ge 0$.
> 
> Bước 2: Khai thác giả thiết tập con và tính hữu hạn
> Theo giả thiết của Bài 8.7, ta có $\int_E f d\mu = \int_E g d\mu$ cho mọi tập đo được. Tập $E$ ta vừa chọn thỏa mãn điều này.
> Vì tích phân trên toàn miền hữu hạn ($< \infty$), tích phân trên tập con $E$ cũng bắt buộc phải hữu hạn. Do đó ta có quyền thực hiện phép trừ tuyến tính:
> $$\int_E (f - g) d\mu = \int_E f d\mu - \int_E g d\mu = 0$$
> 
> Bước 3: Kết luận cho từng miền
> Vì $f - g \ge 0$ trên $E$ và có tích phân bằng 0, ta suy ra ngay:
> $$f - g = 0 \text{ a.e. trên } E \implies f = g \text{ a.e. trên } E$$
> 
> Lập luận hoàn toàn tương tự cho phần bù $X \setminus E = \{f < g\}$, ta xét hàm hiệu $g - f \ge 0$ và cũng thu được $f = g$ a.e. trên $X \setminus E$.
> Hợp hai miền lại, ta có $f = g$ a.e. trên toàn không gian $X$. 

> [!lem] Chứng minh: Tính chất $a.e.$ của tích phân hàm không âm (Bổ đề 8.2b)
>
> **Mệnh đề:** Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và hàm đo được không âm $f: D \to [0, \infty]$. Nếu $\int_D f \, d\mu = 0$ thì $f = 0$ hầu khắp nơi (a.e.) trên $D$.
 
> [!prf]
> Giả sử phản chứng mệnh đề $f = 0$ a.e. trên $D$ là sai. Điều này tương đương với việc tập hợp các điểm tại đó $f$ nhận giá trị thực sự dương có độ đo lớn hơn không:
> $$\mu(\{x \in D : f(x) > 0\}) > 0$$
> 
> Với mỗi $n \in \mathbb{N}^*$, ta định nghĩa tập hợp:
> $$D_n = \left\{x \in D : f(x) \ge \frac{1}{n}\right\}$$
> 
> Do $\frac{1}{n} > \frac{1}{n+1}$, điều kiện để thuộc tập $D_n$ trở nên dễ hơn khi $n$ tăng. Vì vậy, $\{D_n\}_{n=1}^\infty$ là một dãy tập hợp tăng dần trong $\mathfrak{A}$:
> $$D_1 \subset D_2 \subset \dots \subset D_n \subset \dots$$
> 
> Hơn nữa, nếu một điểm $x \in D$ làm cho $f(x) > 0$, thì theo tính chất Archimedes của số thực, luôn tồn tại một số nguyên dương $n$ đủ lớn sao cho $f(x) \ge \frac{1}{n}$. Do đó, hợp đếm được của dãy tập này chính là tập các điểm mà hàm số nhận giá trị dương:
> $$\bigcup_{n=1}^\infty D_n = \{x \in D : f(x) > 0\}$$
> 
> Áp dụng tính $\sigma$- dưới cộng tính của độ đo $\mu$ lên hệ thức hợp trên, ta có bất đẳng thức:
> $$0 < \mu(\{x \in D : f(x) > 0\}) \le \sum_{n=1}^\infty \mu(D_n)$$
> 
> Vì tổng của chuỗi số này là một số thực sự dương ($> 0$), nên các số hạng thành phần không thể đồng thời bằng $0$. Do đó, bắt buộc phải tồn tại ít nhất một chỉ số $n_0 \in \mathbb{N}^*$ sao cho tập thành phần có độ đo thực sự dương:
> $$\mu(D_{n_0}) > 0$$
> 
> Bây giờ, ta thực hiện ước lượng tích phân trên miền $D$. Do $f \ge 0$ trên toàn miền và $D_{n_0} \subset D$, theo tính đơn điệu và tính cộng tính miền của tích phân Lebesgue hàm không âm, ta có:
> $$\int_D f \, d\mu \ge \int_{D_{n_0}} f \, d\mu$$
> 
> Theo định nghĩa của tập $D_{n_0}$, tại mọi điểm $x \in D_{n_0}$ thì $f(x) \ge \frac{1}{n_0}$. Tiếp tục áp dụng tính đơn điệu của tích phân cho hàm hằng $\frac{1}{n_0}$ trên miền $D_{n_0}$, ta thu được chuỗi bất đẳng thức:
> $$\int_D f \, d\mu \ge \int_{D_{n_0}} f \, d\mu \ge \int_{D_{n_0}} \frac{1}{n_0} \, d\mu = \frac{1}{n_0} \mu(D_{n_0})$$
> 
> Vì $\mu(D_{n_0}) > 0$ và $\frac{1}{n_0} > 0$, tích của chúng là một đại lượng thực sự dương:
> $$\int_D f \, d\mu \ge \frac{1}{n_0} \mu(D_{n_0}) > 0 \implies \int_D f \, d\mu > 0$$
> 
> Kết quả $\int_D f \, d\mu > 0$ mâu thuẫn trực tiếp với giả thiết ban đầu của bài toán là $\int_D f \, d\mu = 0$. 
> 
> Sự mâu thuẫn này chứng tỏ giả thiết phản chứng ban đầu là sai. Ta kết luận $\mu(\{x \in D : f(x) > 0\}) = 0$, nghĩa là $f = 0$ hầu khắp nơi (a.e.) trên $D$. 
> 
> _(a)_:
> Giả sử phản chứng mệnh đề $f < \infty$ a.e. trên $D$ là sai. Điều này tương đương với việc tập hợp các điểm mà $f$ nhận giá trị vô cùng có độ đo thực sự dương:
> $$\mu(\{x \in D : f(x) = \infty\}) > 0$$
> 
> Đặt $E = \{x \in D : f(x) = \infty\}$. Theo giả thiết phản chứng, $\mu(E) > 0$.
> 
> Với mỗi số nguyên dương $n \in \mathbb{N}^*$, rõ ràng tập $E$ là tập con của tập chặn dưới giá trị $n$, tức là:
> $$E \subset \{x \in D : f(x) \ge n\}$$
> 
> Do $f \ge 0$ trên toàn miền và $E \subset D$, theo tính đơn điệu và tính cộng tính miền của tích phân Lebesgue, kết hợp với việc $f(x) = \infty \ge n$ tại mọi $x \in E$, ta có chuỗi bất đẳng thức:
> $$\int_D f \, d\mu \ge \int_E f \, d\mu \ge \int_E n \, d\mu = n \mu(E)$$
> 
> Bất đẳng thức $\int_D f \, d\mu \ge n \mu(E)$ đúng với mọi $n \in \mathbb{N}^*$. 
> Do $\mu(E) > 0$ là một hằng số dương cố định, khi ta cho $n \to \infty$, vế phải sẽ tiến ra vô cùng:
> $$\lim_{n \to \infty} n \mu(E) = \infty \implies \int_D f \, d\mu = \infty$$
> 
> Kết quả $\int_D f \, d\mu = \infty$ mâu thuẫn trực tiếp với giả thiết ban đầu của bài toán là $\int_D f \, d\mu < \infty$. 
> 
> Sự mâu thuẫn này chứng tỏ giả thiết phản chứng sai. Ta kết luận $\mu(\{x \in D : f(x) = \infty\}) = 0$, nghĩa là $f < \infty$ hầu khắp nơi (a.e.) trên $D$. $\blacksquare$

> [!prp] Proposition 1. (Bổ đề 8.2: Tính a.e của tích phân hàm đo được không âm)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo. Giả sử $f, f_1, f_2$ là các hàm đo được, không âm, nhận giá trị thực mở rộng trên tập $D \in \mathfrak{A}$ (tức là $f, f_1, f_2: D \to [0, \infty]$). Khi đó:
>  
> (a) Nếu $\int_D f d\mu < \infty$, thì $f < \infty$ hầu khắp nơi (a.e.) trên $D$.
>  
> (b) Nếu $\int_D f d\mu = 0$, thì $f = 0$ hầu khắp nơi (a.e.) trên $D$.
>  
> (d) Nếu $f > 0$ a.e. trên $D$ và $\int_D f d\mu = 0$, thì $\mu(D) = 0$.
>  
> (f) Nếu $f_1 = f_2$ a.e. trên $D$, thì $\int_D f_1 d\mu = \int_D f_2 d\mu$.

> [!prf] 
> _(a)_:
> Giả sử phản chứng rằng mệnh đề $f < \infty$ không đúng hầu khắp nơi trên $D$. 
> Khi đó, tập hợp các điểm mà $f$ nhận giá trị vô cùng có độ đo dương. 
> Đặt $E = \{x \in D : f(x) = \infty\}$. Theo giả thiết phản chứng, $\mu(E) > 0$.
> 
> Với mọi số nguyên dương $n \in \mathbb{N}^*$, ta xây dựng một hàm đơn giản $\varphi_n$ trên $D$ như sau:
> $$\varphi_n = n \chi_E + 0 \chi_{D \setminus E} = n \chi_E$$
> Vì trên tập $E$, $f(x) = \infty > n$ và trên tập $D \setminus E$, $f(x) \ge 0$, ta luôn có $\varphi_n \le f$ trên toàn bộ $D$.
> 
> Áp dụng tính đơn điệu của tích phân Lebesgue, ta có:
> $$\int_D f d\mu \ge \int_D \varphi_n d\mu = n \mu(E)$$
> Bất đẳng thức này đúng với mọi $n \in \mathbb{N}^*$. Cho $n \to \infty$, vì $\mu(E) > 0$ là một hằng số dương, ta suy ra:
> $$\lim_{n \to \infty} n \mu(E) = \infty \implies \int_D f d\mu = \infty$$
> Điều này mâu thuẫn trực tiếp với giả thiết ban đầu là $\int_D f d\mu < \infty$. 
> Vậy giả sử phản chứng sai, tức là $\mu(\{f = \infty\}) = 0$, hay $f < \infty$ a.e. trên $D$. 
> 
 _(b)_:
> Giả sử phản chứng rằng mệnh đề $f = 0$ không đúng hầu khắp nơi trên $D$. Do $f \ge 0$, điều này tương đương với việc tập hợp các điểm mà $f > 0$ có độ đo dương.
> Đặt $E = \{x \in D : f(x) > 0\}$. Theo giả thiết phản chứng, $\mu(E) > 0$.
> 
> Ta có thể biểu diễn tập $E$ dưới dạng hợp của một dãy các tập hợp tăng dần:
> $$E = \bigcup_{n=1}^\infty \left\{ x \in D : f(x) > \frac{1}{n} \right\}$$
> Đặt $E_n = \{ x \in D : f(x) > \frac{1}{n} \}$. Ta thấy $E_1 \subset E_2 \subset \dots \subset E_n \subset \dots$ và $\bigcup_{n=1}^\infty E_n = E$.
> Theo tính chất $\sigma$-dưới cộng tính (hoặc tính liên tục từ dưới) của độ đo, ta có:
> $$\mu(E) \le \sum_{n=1}^\infty \mu(E_n)$$
> Vì $\mu(>E) > 0$, không thể xảy ra trường hợp $\mu(E_n) = 0$ với mọi $n$. Do đó, phải tồn tại ít nhất một chỉ số $N_0 \in \mathbb{N}^*$ sao cho $\mu(E_{N_0}) > 0$.
> 
> Xây dựng một hàm đơn giản $\varphi$ trên $D$ ứng với tập $E_{N_0}$:
> $$\varphi = \frac{1}{N_0} \chi_{E_{N_0}} + 0 \chi_{D \setminus E_{N_0}} = \frac{1}{N_0} \chi_{E_{N_0}}$$
> Theo định nghĩa của $E_{N_0}$, với mọi $x \in E_{N_0}$ ta có $f(x) > \frac{1}{N_0}$. Do đó, $\varphi \le f$ trên toàn bộ $D$.
> 
> Áp dụng tính đơn điệu của tích phân Lebesgue, ta thu được:
> $$\int_D f d\mu \ge \int_D \varphi d\mu = \frac{1}{N_0} \mu(E_{N_0}) > 0$$
> Tức là $\int_D f d\mu > 0$, điều này mâu thuẫn trực tiếp với giả thiết $\int_D f d\mu = 0$.
> Vậy giả sử phản chứng sai, suy ra $\mu(\{f > 0\}) = 0$, hay $f = 0$ a.e. trên $D$. 
>
> _(d)_:
> Theo định nghĩa, điều này có nghĩa là tập hợp các điểm mà $f(x) \neq 0$ có độ đo bằng $0$. Vì $f \ge 0$, ta có:
> $$\mu(\{x \in D : f(x) > 0\}) = 0 \tag{1}$$
> 
> Mặt khác, giả thiết cũng cho $f > 0$ hầu khắp nơi trên $D$. Điều này có nghĩa là tập hợp các điểm mà mệnh đề này sai có độ đo bằng $0$:
> $$\mu(\{x \in D : f(x) \le 0\}) = 0 \tag{2}$$
> 
> Chú ý rằng toàn bộ không gian nền $D$ có thể được phân hoạch thành hai tập hợp rời nhau dựa trên giá trị của $f$:
> $$D = \{x \in D : f(x) > 0\} \cup \{x \in D : f(x) \le 0\}$$
> 
> Áp dụng tính cộng tính hữu hạn của độ đo $\mu$ trên các tập rời nhau, kết hợp với $(1)$ và $(2)$, ta có:
> $$\mu(D) = \mu(\{x \in D : f(x) > 0\}) + \mu(\{x \in D : f(x) \le 0\}) = 0 + 0 = 0$$
> Vậy $\mu(D) = 0$. 
>
> _(f)_:
> Gọi $N$ là tập hợp các điểm trên $D$ mà $f_1$ và $f_2$ khác nhau:
> $$N = \{x \in D : f_1(x) \neq f_2(x)\}$$
> Vì $f_1 = f_2$ a.e. trên $D$, theo định nghĩa ta có $\mu(N) = 0$.
> 
> Ta phân hoạch tập $D$ thành hai phần rời nhau: $D = (D \setminus N) \cup N$. Khi đó, tích phân trên $D$ có thể được tách ra theo miền (tính cộng tính theo tập hợp):
> $$\int_D f_1 d\mu = \int_{D \setminus N} f_1 d\mu + \int_N f_1 d\mu$$
> 
> Nhận xét rằng đối với bất kỳ hàm đo được không âm $g$ nào, tích phân của nó trên một tập có độ đo không (null set) luôn bằng $0$. *(Vì bất kỳ hàm đơn giản $\varphi \le g$ nào cũng sẽ có tích phân trên $N$ bằng $0$ do $\mu(N) = 0$)*. Do đó:
> $$\int_N f_1 d\mu = 0 \quad \text{và} \quad \int_N f_2 d\mu = 0$$
> 
> Xét trên tập $D \setminus N$, theo định nghĩa của $N$, ta có $f_1(x) = f_2(x)$ tại mọi điểm $x \in D \setminus N$. Do đó, tích phân của chúng trên miền này hoàn toàn bằng nhau:
> $$\int_{D \setminus N} f_1 d\mu = \int_{D \setminus N} f_2 d\mu$$
> 
> Ráp các kết quả lại với nhau, ta có:
> $$\int_D f_1 d\mu = \int_{D \setminus N} f_1 d\mu + \int_N f_1 d\mu = \int_{D \setminus N} f_2 d\mu + 0 = \int_{D \setminus N} f_2 d\mu + \int_N f_2 d\mu = \int_D f_2 d\mu$$
> Vậy $\int_D f_1 d\mu = \int_D f_2 d\mu$.

> [!thm] Theorem 1. (Bổ đề tương đương của cấu trúc hầu khắp nơi và tích phân)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và tập đo được $D \in \mathfrak{A}$. Giả sử các hàm số dưới đây là các hàm đo được nhận giá trị thực mở rộng trên $D$.
>
> (1) **Tiêu chuẩn hàm không âm:** Giả sử tích phân $\int_E f \, d\mu$ tồn tại với mọi tập con đo được $E \subset D$ (tức là $f$ bán khả tích). Khi đó, ta có $f \ge 0$ hầu khắp nơi (a.e.) trên $D$ khi và chỉ khi:
> $$\int_E f \, d\mu \ge 0$$
> với mọi tập con đo được $E \subset D$ ($E \in \mathfrak{A}$).
>
> (2) **Bảo toàn tích phân cho hàm tương đương:** Giả sử $(X, \mathfrak{A}, \mu)$ là không gian độ đo $\sigma$-hữu hạn và $f, g$ là các hàm bán khả tích trên mọi tập con đo được $E \subset D$. Khi đó, ta có $f = g$ hầu khắp nơi (a.e.) trên $D$ khi và chỉ khi:
> $$\int_E f \, d\mu = \int_E g \, d\mu$$
> với mọi tập con đo được $E \subset D$ ($E \in \mathfrak{A}$).

---

> [!prf] Chứng minh nhất quán bằng phương pháp phân hoạch hạt tăng
> 
> ### CHỨNG MINH Ý (1):
> 
> **Chiều thuận ($\implies$):**
> Giả sử $f \ge 0$ a.e. trên $D$. Xét tập con đo được $E \subset D$ bất kỳ. 
> Gọi $N = \{x \in D : f(x) < 0\}$, theo giả thiết $\mu(N) = 0$. Ta phân hoạch miền $E = (E \setminus N) \cup (E \cap N)$. 
> Vì $E \cap N \subset N \implies \mu(E \cap N) = 0$. Đồng thời, tại mọi $x \in E \setminus N$, ta có $f(x) \ge 0$. 
> Áp dụng tính cộng tính miền và tính chất tích phân trên tập có độ đo $0$ bằng $0$:
> $$\int_E f \, d\mu = \int_{E \setminus N} f \, d\mu + \int_{E \cap N} f \, d\mu = \int_{E \setminus N} f \, d\mu + 0 \ge 0$$
> Bất đẳng thức đúng do tích phân của hàm không âm $f$ trên miền $E \setminus N$ luôn không âm.
> 
> **Chiều nghịch ($\impliedby$):**
> Giả sử $\int_E f \, d\mu \ge 0$ với mọi tập con đo được $E \subset D$. Ta cần chứng minh $\mu(\{x \in D : f(x) < 0\}) = 0$.
> Giả sử phản chứng $\mu(\{x \in D : f(x) < 0\}) > 0$.
> Nhất quán với kỹ thuật của Bổ đề 8.2, với mỗi $k \in \mathbb{N}^*$, ta định nghĩa dãy các tập hợp hạt tăng dần:
> $$A_k = \left\{x \in D : f(x) \le -\frac{1}{k}\right\}$$
> Ta có $\bigcup_{k=1}^\infty A_k = \{x \in D : f(x) < 0\}$. Theo tính bán cộng tính đếm được của độ đo:
> $$0 < \mu(\{x \in D : f(x) < 0\}) \le \sum_{k=1}^\infty \mu(A_k)$$
> Vì tổng chuỗi dương, bắt buộc phải tồn tại một chỉ số ${} k_0 \in \mathbb{N}^* {}$ sao cho tập thành phần có độ đo thực sự dương: $\mu(A_{k_0}) > 0$.
> Xét tích phân của $f$ trên chính tập con $E = A_{k_0} \subset D$. Do $f(x) \le -\frac{1}{k_0}$ tại mọi $x \in A_{k_0}$, áp dụng tính đơn điệu chặn trên của tích phân:
> $$\int_{A_{k_0}} f \, d\mu \le \int_{A_{k_0}} \left(-\frac{1}{k_0}\right) d\mu = -\frac{1}{k_0}\mu(A_{k_0})$$
> Vì $\frac{1}{k_0} > 0$ và $\mu(A_{k_0}) > 0$, tích của chúng là số thực dương, dẫn đến:
> $$\int_{A_{k_0}} f \, d\mu \le -\frac{1}{k_0}\mu(A_{k_0}) < 0 \implies \int_{A_{k_0}} f \, d\mu < 0$$
> Kết quả tích phân âm này mâu thuẫn trực tiếp với giả thiết $\int_E f \, d\mu \ge 0$ với mọi tập con. Vậy $f \ge 0$ a.e. trên $D$.
> 
> ---
> 
> ### CHỨNG MINH Ý (2):
> 
> **Chiều thuận ($\implies$):**
> Giả sử $f = g$ a.e. trên $D$. Đặt $N = \{x \in D : f(x) \neq g(x)\}$, theo giả thiết $\mu(N) = 0$.
> Xét tập con đo được $E \subset D$ bất kỳ, ta cũng tách miền $E = (E \setminus N) \cup (E \cap N)$. 
> Vì $E \cap N \subset N \implies \mu(E \cap N) = 0$, dẫn đến tích phân của các hàm bán khả tích trên tập này bằng $0$.
> Do $f(x) = g(x)$ tại mọi $x \in E \setminus N$, áp dụng tính cộng tính miền ta có:
> $$\int_E f \, d\mu = \int_{E \setminus N} f \, d\mu + \int_{E \cap N} f \, d\mu = \int_{E \setminus N} g \, d\mu + 0 = \int_E g \, d\mu$$
> Đẳng thức được thiết lập hoàn toàn.
> 
> **Chiều nghịch ($\impliedby$):**
> Giả sử $\int_E f \, d\mu = \int_E g \, d\mu$ với mọi tập con đo được $E \subset D$. Ta cần chứng minh $f = g$ a.e. trên $D$.
> Vì không gian là $\sigma$-hữu hạn, tồn tại dãy tập tăng $\{X_n\}_{n=1}^\infty$ sao cho $X = \bigcup_{n=1}^\infty X_n$ và $\mu(X_n) < \infty$ với mọi $n$.
> 
> Xét tập phản chứng thứ nhất: $E_1 = \{x \in D : f(x) > g(x)\}$. Để khống chế rào cản vô cùng một cách nhất quán, ta phân hoạch $E_1$ thành hợp đếm được của hai họ tập tăng theo hai chỉ số $n, k \in \mathbb{N}^*$:
> 1. Họ tập chặn giá trị: $A_{n,k} = \left\{x \in D \cap X_n : -k \le g(x) \le k \quad \text{và} \quad f(x) \ge g(x) + \frac{1}{k}\right\}$
> 2. Họ tập ở vô cực âm: $B_{n,k} = \left\{x \in D \cap X_n : g(x) = -\infty \quad \text{và} \quad f(x) \ge -k\right\}$
> 
> Ta có $E_1 = \left( \bigcup_{n,k=1}^\infty A_{n,k} \right) \cup \left( \bigcup_{n,k=1}^\infty B_{n,k} \right)$. Giả sử phản chứng $\mu(E_1) > 0$. Theo tính bán cộng tính đếm được, phải tồn tại một cặp chỉ số $(n_0, k_0)$ làm cho một trong hai trường hợp sau có độ đo dương:
> 
> - **Trường hợp 1: $\mu(A_{n_0,k_0}) > 0$**
>   Do $A_{n_0,k_0} \subset X_{n_0} \implies \mu(A_{n_0,k_0}) \le \mu(X_{n_0}) < \infty$. Vì $|g(x)| \le k_0$ trên miền này, tích phân của $g$ bắt buộc phải là một số thực hữu hạn: $\int_{A_{n_0,k_0}} g \, d\mu \in \mathbb{R}$.
>   Áp dụng kỹ thuật chặn dưới đơn điệu của Bổ đề 8.2 cho hàm số $f \ge g + \frac{1}{k_0}$:
>   $$\int_{A_{n_0,k_0}} f \, d\mu \ge \int_{A_{n_0,k_0}} \left(g + \frac{1}{k_0}\right) d\mu = \int_{A_{n_0,k_0}} g \, d\mu + \frac{1}{k_0}\mu(A_{n_0,k_0})$$
>   Vì $\int_{A_{n_0,k_0}} g \, d\mu$ là số thực hữu hạn, thực hiện phép trừ chuyển vế hai vế đại số một cách hợp lệ:
>   $$\int_{A_{n_0,k_0}} f \, d\mu - \int_{A_{n_0,k_0}} g \, d\mu \ge \frac{1}{k_0}\mu(A_{n_0,k_0}) > 0 \implies \int_{A_{n_0,k_0}} f \, d\mu > \int_{A_{n_0,k_0}} g \, d\mu$$
>   Mâu thuẫn trực tiếp với giả thiết tích phân bằng nhau trên mọi tập con ($E = A_{n_0,k_0}$).
> 
> - **Trường hợp 2: $\mu(B_{n_0,k_0}) > 0$**
>   Trên miền này, $g(x) = -\infty \implies \int_{B_{n_0,k_0}} g \, d\mu = -\infty$.
>   Ngược lại, vì $f(x) \ge -k_0$ và $\mu(B_{n_0,k_0}) \le \mu(X_{n_0}) < \infty$, tích phân của $f$ được chặn dưới bởi một số thực hữu hạn:
>   $$\int_{B_{n_0,k_0}} f \, d\mu \ge \int_{B_{n_0,k_0}} (-k_0) \, d\mu = -k_0 \mu(B_{n_0,k_0}) > -\infty$$
>   Do đó, $\int_{B_{n_0,k_0}} f \, d\mu > -\infty = \int_{B_{n_0,k_0}} g \, d\mu \implies \int_{B_{n_0,k_0}} f \, d\mu \neq \int_{B_{n_0,k_0}} g \, d\mu$, tiếp tục tạo ra mâu thuẫn với giả thiết tại tập con $E = B_{n_0,k_0}$.
> 
> Cả hai trường hợp đều dẫn đến mâu thuẫn, suy ra giả thiết phản chứng sai $\implies \mu(E_1) = 0$.
> 
> Lập luận hoàn toàn đối xứng cho tập phản chứng thứ hai $E_2 = \{x \in D : f(x) < g(x)\}$ bằng cách tráo đổi vai trò của $f$ và $g$, ta cũng thu được $\mu(E_2) = 0$. 
> Kết luận, $\mu(\{x \in D : f(x) \neq g(x)\}) = \mu(E_1 \cup E_2) \le \mu(E_1) + \mu(E_2) = 0$, khẳng định $f = g$ a.e. trên $D$. 


> [!prob] (Prob 7.7)
> Cho một không gian độ đo $(X, \mathfrak{A}, \mu)$ và một tập đo được $D \in \mathfrak{A}$ thỏa mãn $\mu(D) < \infty$. Giả sử $f$ là một hàm đo được, không âm và bị chặn trên $D$. Chứng minh rằng nếu $\int_D f \, d\mu = 0$ thì $f = 0$ hầu khắp nơi (a.e.) trên $D$.

> [!prf]
> Giả sử phản chứng mệnh đề $f = 0$ a.e. trên $D$ là sai. Điều này tương đương với việc tập hợp các điểm tại đó $f$ nhận giá trị thực sự dương có độ đo lớn hơn không:
> $$\mu(\{x \in D : f(x) > 0\}) > 0$$
> 
> Nhất quán với kỹ thuật phân hoạch hạt tăng, với mỗi $n \in \mathbb{N}^*$, ta định nghĩa tập hợp:
> $$D_n = \left\{x \in D : f(x) \ge \frac{1}{n}\right\}$$
> 
> Ta thấy rằng dãy các tập hợp $\{D_n\}_{n=1}^\infty$ tăng dần trong $\mathfrak{A}$ ($D_1 \subset D_2 \subset \dots \subset D_n \subset \dots$) và có giới hạn tập hợp là:
> $$\bigcup_{n=1}^\infty D_n = \{x \in D : f(x) > 0\}$$
> 
> Áp dụng tính bán cộng tính đếm được (countable subadditivity) của độ đo $\mu$, ta có:
> $$0 < \mu(\{x \in D : f(x) > 0\}) \le \sum_{n=1}^\infty \mu(D_n)$$
> 
> Do tổng chuỗi số thực này thực sự dương, nên các số hạng thành phần không thể đồng thời bằng $0$. Do đó, bắt buộc phải tồn tại ít nhất một chỉ số $n_0 \in \mathbb{N}^*$ sao cho tập hạt tương ứng có độ đo thực sự dương:
> $$\mu(D_{n_0}) > 0$$
> 
> Bây giờ, ta thực hiện ước lượng tích phân của hàm số trên miền $D$. Do $f$ là hàm không âm trên $D$ và $D_{n_0} \subset D$, áp dụng tính đơn điệu và tính cộng tính miền của tích phân Lebesgue:
> $$\int_D f \, d\mu \ge \int_{D_{n_0}} f \, d\mu$$
> 
> Theo định nghĩa của tập hạt $D_{n_0}$, tại mọi điểm $x \in D_{n_0}$ ta đều có $f(x) \ge \frac{1}{n_0}$. Áp dụng tiếp tính đơn điệu của tích phân cho hàm hằng chặn dưới $\frac{1}{n_0}$ trên miền $D_{n_0}$, ta thu được chuỗi bất đẳng thức:
> $$\int_D f \, d\mu \ge \int_{D_{n_0}} f \, d\mu \ge \int_{D_{n_0}} \frac{1}{n_0} \, d\mu = \frac{1}{n_0} \mu(D_{n_0})$$
> 
> Vì $\mu(D_{n_0}) > 0$ và $\frac{1}{n_0} > 0$, tích của chúng (diện tích khối hộp chặn dưới) là một đại lượng thực sự dương:
> $$\int_D f \, d\mu \ge \frac{1}{n_0} \mu(D_{n_0}) > 0 \implies \int_D f \, d\mu > 0$$
> 
> Kết quả $\int_D f \, d\mu > 0$ mâu thuẫn trực tiếp với giả thiết ban đầu của bài toán là $\int_D f \, d\mu = 0$.
> 
> Sự mâu thuẫn này chứng tỏ giả thiết phản chứng ban đầu là sai. Ta kết luận $\mu(\{x \in D : f(x) > 0\}) = 0$, nghĩa là $f = 0$ hầu khắp nơi (a.e.) trên $D$. 

$\xi$

> [!prob] (Prob 9.9)
> Cho hàm $f$ khả tích trên $X$ và dãy tập đo được $\{E_n\}_{n=1}^\infty$ thỏa mãn $\lim_{n \to \infty} \mu(E_n) = 0$. Chứng minh $\lim_{n \to \infty} \int_{E_n} f \, d\mu = 0$.

> [!prf]
> Lấy $\epsilon > 0$ tùy ý cho trước.  Do $f$ khả tích trên $X$, theo tính liên tục tuyệt đối của tích phân, tồn tại một số $\delta > 0$ sao cho với mọi tập đo được $E$ thỏa mãn $\mu(E) < \delta$, ta luôn có:
>    $$\int_E |f| \, d\mu < \epsilon$$
> 
> Mặt khác, ta có dãy độ đo $\mu(E_n)$ hội tụ về $0$ khi $n \to \infty$. Theo định nghĩa giới hạn, ứng với $\delta > 0$ ở trên, ta tìm được chỉ số $N_0 \in \mathbb{N}^*$ sao cho:
>    $$\forall n \ge N_0 \implies \mu(E_n) < \delta$$
> 
> Kết hợp hai điều trên, với mọi $n \ge N_0$, vì $\mu(E_n) < \delta$ nên ta thu được đánh giá:
>    $$\left| \int_{E_n} f \, d\mu \right| \le \int_{E_n} |f| \, d\mu < \epsilon$$
> 
> Theo định nghĩa giới hạn của dãy số thực, điều này tương đương $\lim_{n \to \infty} \int_{E_n} f \, d\mu = 0$. 

> [!cor] Hệ quả dãy của tính chặt tích phân Lebesgue  
> Cho không gian độ đo $(X, \mathcal{A}, \mu)$ và hàm số $f \in L^1(X, \mu)$.  
> Giả sử $\{E_n\}_{n=1}^{\infty}$ là một dãy các tập đo được tăng dần $(E_1 \subset E_2 \subset \ldots)$ và bao phủ toàn bộ không gian (hoặc bao phủ hầu khắp nơi), tức là:  
> $$
> \lim_{n \to \infty} E_n = \bigcup_{n=1}^{\infty} E_n = X.
> $$  
> Khi đó ta có:  
> $$
> \lim_{n \to \infty} \int_{E_n} f \, d\mu = \int_X f \, d\mu,
> $$  
> và tương đương  
> $$
> \lim_{n \to \infty} \int_{E_n^c} f \, d\mu = 0.
> $$

> [!prf] 
> Không mất tính tổng quát, giả sử $f \ge 0$ (với $f$ bất kì ta có thể phân tách thành phần âm $f^-$ và dương $f^+$ và chứng minh tương tự). Lấy $\epsilon > 0$ tùy ý.
> 
> Theo Tính chặt của tích phân, tồn tại một tập $B_\epsilon \in \mathfrak{A}$ có độ đo hữu hạn $\mu(B_\epsilon) < \infty$, sao cho tích phân phần đuôi rất nhỏ:
>    $$\int_{B_\epsilon^c} f \, d\mu < \frac{\epsilon}{2}$$
> 
> Do dãy tập $E_n \uparrow X$, lấy giao $B_\epsilon$ ta thu được $(E_n \cap B_\epsilon) \uparrow B_\epsilon$. 
> Với mọi điểm $x \in B_\epsilon$, vì $B_\epsilon \subset X = \bigcup_{n=1}^\infty E_n$, theo tính chất Archimedes, điểm $x$ bắt buộc phải lọt vào một tập $E_n$ nào đó kể từ một chỉ số $N$ đủ lớn trở đi. Điều này có nghĩa khi $n \to \infty$, không một điểm $x$ nào của $B_\epsilon$ có thể ở ngoài $E_n$ mãi. Do đó :
> $$
> (B_\epsilon \setminus E_n) \downarrow \emptyset \quad \text{khi } n \to \infty
> $$
> Áp dụng tính liên tục từ trên của độ đo $\mu$ cho dãy tập giảm dần về rỗng, ta có:
>$$
> \lim_{n \to \infty} \mu(B_\epsilon \setminus E_n) = \mu(\emptyset) = 0
> $$
> 
> Theo định nghĩa giới hạn, ta tìm chỉ số $N_0 \in \mathbb{N}^*$ đủ lớn sao cho với mọi $n \ge N_0$:
>    $$\int_{B_\epsilon \setminus E_n} f \, d\mu < \frac{\epsilon}{2}$$
> 
> Ta phân tách được miền ban đầu: $E_n^c \subset (B_\epsilon \setminus E_n) \cup B_\epsilon^c$. Áp dụng tính đơn điệu:
>    $$\int_{E_n^c} f \, d\mu \le \int_{B_\epsilon \setminus E_n} f \, d\mu + \int_{B_\epsilon^c} f \, d\mu < \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon$$
> 
> Điều này đúng với mọi $n \ge N_0$, khẳng định rằng $\lim_{n \to \infty} \int_{E_n^c} f \, d\mu = 0$. 
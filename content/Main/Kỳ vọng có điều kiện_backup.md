
# Kỳ vọng Điều kiện theo Biến cố và Phân hoạch Đếm được

> [!def] (Xác suất có điều kiện và Kỳ vọng có điều kiện sơ cấp)
> Cho không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$ và biến cố $A \in \mathcal{F}$ thỏa mãn $\mathbb{P}(A) > 0$. Độ đo xác suất có điều kiện $\mathbb{P}_A: \mathcal{F} \to [0, 1]$ được định nghĩa bởi
> $$\mathbb{P}_A(B) = \mathbb{P}(B \mid A) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(A)}, \quad \forall B \in \mathcal{F}.$$
> Khi đó, kỳ vọng điều kiện của biến ngẫu nhiên $X \in L^1(\Omega, \mathcal{F}, \mathbb{P}_A)$ đối với biến cố $A$ được xác định qua tích phân đối với độ đo $\mathbb{P}_A$:
> $$\mathbb{E}_A[X] = \mathbb{E}[X \mid A] = \int_\Omega X \, d\mathbb{P}_A.$$

> [!lem] (Tích phân theo Độ đo Xác suất Điều kiện)
> Cho không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$ và biến cố $A \in \mathcal{F}$ với $\mathbb{P}(A) > 0$. Khi đó:
> 1. Mọi biến ngẫu nhiên $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ đều thuộc $L^1(\Omega, \mathcal{F}, \mathbb{P}_A)$.
> 2. Kỳ vọng của $X$ theo độ đo $\mathbb{P}_A$ được biểu diễn bằng công thức
> $$\mathbb{E}_A[X] = \frac{\mathbb{E}[X \mathbb{1}_A]}{\mathbb{P}(A)}.$$

> [!prf]
> 1. **Trường hợp $X$ là hàm đơn giản (Simple function):**
>    Giả sử $X$ có dạng biểu diễn chính tắc $X = \sum_{j=1}^n \alpha_j \mathbb{1}_{B_j}$, trong đó $\alpha_j \in \mathbb{R}$ và họ các tập hợp $\{B_j\}_{j=1}^n \subset \mathcal{F}$ rời nhau đôi một. Theo định nghĩa của tích phân Lebesgue đối với hàm đơn giản theo độ đo $\mathbb{P}_A$, ta có
>    $$\int_\Omega X \, d\mathbb{P}_A = \sum_{j=1}^n \alpha_j \mathbb{P}_A(B_j) = \sum_{j=1}^n \alpha_j \frac{\mathbb{P}(A \cap B_j)}{\mathbb{P}(A)} = \frac{1}{\mathbb{P}(A)} \sum_{j=1}^n \alpha_j \mathbb{P}(A \cap B_j).$$
>    Do $\mathbb{P}(A \cap B_j) = \int_\Omega \mathbb{1}_{B_j \cap A} \, d\mathbb{P} = \int_\Omega \mathbb{1}_{B_j} \mathbb{1}_A \, d\mathbb{P}$, phương trình trên được viết lại thành
>    $$\int_\Omega X \, d\mathbb{P}_A = \frac{1}{\mathbb{P}(A)} \int_\Omega \left( \sum_{j=1}^n \alpha_j \mathbb{1}_{B_j} \right) \mathbb{1}_A \, d\mathbb{P} = \frac{1}{\mathbb{P}(A)} \int_\Omega X \mathbb{1}_A \, d\mathbb{P} = \frac{\mathbb{E}[X \mathbb{1}_A]}{\mathbb{P}(A)}.$$
>
> 2. **Trường hợp $X$ tổng quát thuộc $L^1(\mathbb{P})$:**
> Phân tích hàm: Ta phân tích $X = X^+ - X^-$, trong đó $X^+ = \max(X, 0)$ và $X^- = \max(-X, 0)$ là các phần không âm. Do $|X| = X^+ + X^- \in L^1(\mathbb{P})$, cả $X^+$ và $X^-$ đều thuộc $L^1(\mathbb{P})$.
> Xấp xỉ đơn điệu: Theo định lý xấp xỉ hàm đo được, tồn tại hai dãy hàm đơn giản không âm $(X_n^+)_{n \ge 1}$ và $(X_n^-)_{n \ge 1}$ tăng đơn điệu đến $X^+$ và $X^-$.
> Chuyển giới hạn: Áp dụng kết quả từ Bước 1 cho các hàm đơn giản không âm này, ta thu được
>      $$\int_\Omega (X_n^+ - X_n^-) \, d\mathbb{P}_A = \frac{1}{\mathbb{P}(A)} \left( \int_\Omega X_n^+ \mathbb{1}_A \, d\mathbb{P} - \int_\Omega X_n^- \mathbb{1}_A \, d\mathbb{P} \right).$$
>      Do $0 \le X_n^{\pm} \mathbb{1}_A \uparrow X^{\pm} \mathbb{1}_A$ khi $n \to \infty$, áp dụng Định lý Hội tụ Đơn điệu cho từng tích phân, ta có
>      $$\int_\Omega X^\pm \, d\mathbb{P}_A = \lim_{n \to \infty} \int_\Omega X_n^\pm \, d\mathbb{P}_A = \frac{1}{\mathbb{P}(A)} \lim_{n \to \infty} \int_\Omega X_n^\pm \mathbb{1}_A \, d\mathbb{P} = \frac{\mathbb{E}[X^\pm \mathbb{1}_A]}{\mathbb{P}(A)}.$$
>    Do $\mathbb{E}[X^+ \mathbb{1}_A]$ và $\mathbb{E}[X^- \mathbb{1}_A]$ đều hữu hạn, lấy hiệu hai đẳng thức trên cho ta kết luận $\mathbb{E}_A[X] = \frac{\mathbb{E}[X \mathbb{1}_A]}{\mathbb{P}(A)}$.

> [!def] (Kỳ vọng điều kiện theo phân hoạch đếm được)
> Cho $(\Omega, \mathcal{F}, \mathbb{P})$ là không gian xác suất và $\{A_n\}_{n=1}^\infty \subset \mathcal{F}$ là một phân hoạch đếm được của $\Omega$ thỏa mãn $\mathbb{P}(A_n) > 0$ với mọi $n \ge 1$. Với mỗi biến ngẫu nhiên $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$, kỳ vọng điều kiện của $X$ theo phân hoạch $\{A_n\}_{n=1}^\infty$ là một hàm số $\mathbb{E}_{\{A_n\}_{n=1}^\infty}[X]: \Omega \to \mathbb{R}$ được định nghĩa bởi
> $$\mathbb{E}_{\{A_n\}_{n=1}^\infty}[X](\omega) \equiv \sum_{n=1}^\infty \mathbb{E}_{A_n}[X] \mathbb{1}_{A_n}(\omega) = \sum_{n=1}^\infty \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \mathbb{1}_{A_n}(\omega).$$

> [!lem] (Cấu trúc của $\sigma$-đại số sinh bởi phân hoạch)
> Cho $\{A_n\}_{n=1}^\infty \subset \mathcal{F}$ là một phân hoạch đếm được của $\Omega$. Khi đó, $\sigma$-đại số sinh bởi phân hoạch này có dạng
> $$\sigma(\{A_n\}_{n=1}^\infty) = \left\{ \bigsqcup_{n \in \Lambda} A_n \;\middle|\; \Lambda \subseteq \mathbb{N} \right\}.$$

> [!prf]
> Đặt $\mathcal{M} = \left\{ \bigsqcup_{n \in \Lambda} A_n \;\middle|\; \Lambda \subseteq \mathbb{N} \right\}$. Ta cần chứng minh $\sigma(\{A_n\}_{n=1}^\infty) = \mathcal{M}$.
>
> 1. **Chứng minh bao hàm $\mathcal{M} \subseteq \sigma(\{A_n\}_{n=1}^\infty)$:**
>    Với mọi $n \in \mathbb{N}$, tập $A_n$ thuộc phân hoạch nên $A_n \in \sigma(\{A_n\}_{n=1}^\infty)$. Vì một $\sigma$-đại số luôn đóng đối với phép hợp đếm được, với bất kỳ tập chỉ số $\Lambda \subseteq \mathbb{N}$, hợp rời $\bigsqcup_{n \in \Lambda} A_n$ cũng thuộc $\sigma(\{A_n\}_{n=1}^\infty)$.
>
> 2. **Chứng minh bao hàm $\sigma(\{A_n\}_{n=1}^\infty) \subseteq \mathcal{M}$:**
>    Ta chứng minh $\mathcal{M}$ là một $\sigma$-đại số trên $\Omega$:
>    *Chứa tập sinh:Với $\Lambda = \{n\}$, ta có $A_n \in \mathcal{M}$, do đó $\{A_n\}_{n=1}^\infty \subseteq \mathcal{M}$.
>    *Chứa tập rỗng và không gian toàn phần:Với $\Lambda = \emptyset$ và $\Lambda = \mathbb{N}$, ta lần lượt có $\emptyset \in \mathcal{M}$ và $\Omega \in \mathcal{M}$.
>    *Đóng đối với phép lấy bù:Với một tập $E = \bigsqcup_{n \in \Lambda} A_n \in \mathcal{M}$, phần bù của nó là
>      $$E^c = \Omega \setminus \left( \bigsqcup_{n \in \Lambda} A_n \right) = \bigsqcup_{n \in \mathbb{N} \setminus \Lambda} A_n \in \mathcal{M}.$$
>    *Đóng đối với hợp đếm được:Với một dãy hợp đếm được các tập $\{E_k\}_{k=1}^\infty \subset \mathcal{M}$ trong đó $E_k = \bigsqcup_{n \in \Lambda_k} A_n$, ta có
>      $$\bigcup_{k=1}^\infty E_k = \bigcup_{k=1}^\infty \left( \bigsqcup_{n \in \Lambda_k} A_n \right) = \bigsqcup_{n \in \bigcup_{k=1}^\infty \Lambda_k} A_n \in \mathcal{M}.$$
>    Như vậy $\mathcal{M}$ là một $\sigma$-đại số chứa $\{A_n\}_{n=1}^\infty$. Theo tính tối tiểu của $\sigma$-đại số sinh, ta suy ra $\sigma(\{A_n\}_{n=1}^\infty) \subseteq \mathcal{M}$.

> [!prp] (Đặc trưng của Kỳ vọng Điều kiện theo $\sigma$-Đại số Phân hoạch)
> Cho $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và $\{A_n\}_{n=1}^\infty$ là một phân hoạch đếm được của $\Omega$ với $\mathbb{P}(A_n) > 0$ với mọi $n \ge 1$. Đặt $\mathcal{G} = \sigma(\{A_n\}_{n=1}^\infty)$ và định nghĩa biến ngẫu nhiên
> $$Y = \sum_{n=1}^\infty \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \mathbb{1}_{A_n}.$$
> Khi đó, biến ngẫu nhiên $Y$ thỏa mãn hai tính chất:
> 1. **Tính đo được ($\mathcal{G}$-measurability):*$Y$ là biến ngẫu nhiên đo được đối với $\mathcal{G}$.
> 2. **Tính chất bình quân cục bộ (Partial averaging property):*Với mọi biến cố $G \in \mathcal{G}$, ta có
> $$\int_G Y \, d\mathbb{P} = \int_G X \, d\mathbb{P}.$$

> [!prf]
> 1. **Chứng minh tính đo được ($\mathcal{G}$-measurability):**
>    Với mỗi $n \ge 1$, tập $A_n \in \mathcal{G}$ nên hàm chỉ thị $\mathbb{1}_{A_n}$ là một hàm $\mathcal{G}$-đo được. Biến ngẫu nhiên $Y$ được biểu diễn như một tổng đếm được của các hàm $\mathcal{G}$-đo được, do đó bản thân $Y$ đo được đối với $\mathcal{G}$.
>
> 2. **Chứng minh tính chất tích phân trên mọi $G \in \mathcal{G}$:**
>    Theo bổ đề cấu trúc của $\sigma$-đại số sinh bởi phân hoạch, mọi tập $G \in \mathcal{G}$ đều biểu diễn duy nhất dưới dạng $G = \bigsqcup_{n \in \Lambda} A_n$ với $\Lambda \subseteq \mathbb{N}$.
>    Khi đó, ta tính tích phân vế trái
>      $$\int_G Y \, d\mathbb{P} = \mathbb{E}[Y \mathbb{1}_G] = \mathbb{E} \left[ \left( \sum_{n=1}^\infty \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \mathbb{1}_{A_n} \right) \mathbb{1}_{\bigsqcup_{k \in \Lambda} A_k} \right].$$
>    Do các tập $A_n$ rời nhau đôi một, ta có $\mathbb{1}_{A_n} \mathbb{1}_{\bigsqcup_{k \in \Lambda} A_k} = \mathbb{1}_{A_n}$ nếu $n \in \Lambda$ và bằng $0$ trong trường hợp ngược lại. Phương trình trên trở thành
>      $$\mathbb{E}[Y \mathbb{1}_G] = \mathbb{E} \left[ \sum_{n \in \Lambda} \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \mathbb{1}_{A_n} \right].$$
>    Do $X \in L^1(\mathbb{P})$, áp dụng Định lý Hội tụ Bị chặn (Dominated Convergence Theorem)*để hoán đổi toán tử kỳ vọng và tổng đếm được, ta thu được
>      $$\mathbb{E}[Y \mathbb{1}_G] = \sum_{n \in \Lambda} \frac{\mathbb{E}[X \mathbb{1}_{A_n}]}{\mathbb{P}(A_n)} \mathbb{E}[\mathbb{1}_{A_n}] = \sum_{n \in \Lambda} \mathbb{E}[X \mathbb{1}_{A_n}] = \mathbb{E} \left[ X \sum_{n \in \Lambda} \mathbb{1}_{A_n} \right] = \mathbb{E}[X \mathbb{1}_G] = \int_G X \, d\mathbb{P}.$$

> [!rem] (Đặc trưng thông tin và giới hạn thực hành của Phân hoạch)
> - Biến ngẫu nhiên kỳ vọng điều kiện $Y = \mathbb{E}_{\mathcal{G}}[X]$ là hàm $\mathcal{G}$-đo được do là tổ hợp tuyến tính đếm được của các hàm chỉ thị $\mathbb{1}_{A_n}$ với $A_n \in \mathcal{G}$.
> - Trong trường hợp đặc biệt khi các giá trị kỳ vọng trên từng tập phân hoạch $\mathbb{E}_{A_n}[X]$ phân biệt nhau đôi một, $\sigma$-đại số sinh bởi biến ngẫu nhiên $Y$ trùng khớp hoàn toàn với $\sigma$-đại số ban đầu, tức là $\sigma(Y) = \mathcal{G}$. Điều này cho thấy biến ngẫu nhiên kỳ vọng điều kiện mang trọn vẹn thông tin của hệ sự kiện $\mathcal{G}$.
> - Về mặt thực hành, việc khôi phục lại phân hoạch $\{A_n\}_{n=1}^\infty$ từ $\sigma$-đại số $\mathcal{G} = \sigma(\{A_n\}_{n=1}^\infty)$ bằng phép giao vô hạn các tập hợp chỉ khả thi về mặt lý thuyết. Trong tính toán thực tế, việc khôi phục này thường chỉ thực hiện được khi cấu trúc phân hoạch là hữu hạn.

> [!obs] (Motivating Example - Cấu trúc Kéo về của Phân hoạch rời rạc)
> Cho $Y: \Omega \to S$ là biến ngẫu nhiên rời rạc có không gian trạng thái đếm được $S$ và $\mathbb{P}(Y = s) > 0$ với mọi $s \in S$.
> 1. **Phân hoạch sinh bởi phép Kéo về (Pullback Partition):**
>    Với mỗi điểm trạng thái $s \in S$, tập hợp con $\{s\} \subset S$ được kéo về không gian mẫu $\Omega$ thông qua tạo ảnh:
>    $$Y^{-1}(\{s\}) = \{\omega \in \Omega : Y(\omega) = s\} = \{Y = s\}.$$
>    Họ các tạo ảnh này hình thành một phân hoạch đếm được của $\Omega$. Khi đó, $\sigma$-đại số sinh bởi phân hoạch này chính là **$\sigma$-đại số kéo về*(pullback $\sigma$-algebra) $\sigma(Y) \equiv Y^*(\mathcal{P}(S))$:
>    $$\sigma(\{Y = s\} : s \in S) = \sigma(Y) = \left\{ Y^{-1}(B) : B \subseteq S \right\}.$$
> 2. **Cấu trúc biến ngẫu nhiên kỳ vọng điều kiện:**
>    Với $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$, áp dụng định nghĩa kỳ vọng điều kiện theo phân hoạch:
>    $$\mathbb{E}[X \mid Y] = \mathbb{E}[X \mid \sigma(Y)] = \sum_{s \in S} \mathbb{E}_{\{Y = s\}}[X] \mathbb{1}_{\{Y = s\}} = \sum_{s \in S} \frac{\mathbb{E}[X \mathbb{1}_{\{Y=s\}}]}{\mathbb{P}(Y=s)} \mathbb{1}_{\{Y = s\}}.$$
> 3. **Tính chất phụ thuộc thông tin qua ánh xạ:**
>    Tại một điểm mẫu cụ thể $\omega \in \Omega$, giá trị của kỳ vọng điều kiện được tính bởi:
>    $$\mathbb{E}[X \mid Y](\omega) = \frac{\mathbb{E}[X \mathbb{1}_{\{Y = Y(\omega)\}}]}{\mathbb{P}(Y = Y(\omega))}.$$
>    Nhận xét trọng tâm: Giá trị $\mathbb{E}[X \mid Y](\omega)$ chỉ phụ thuộc vào $\omega$ thông qua hình ảnh $Y(\omega)$. Nói cách khác, biến ngẫu nhiên $\mathbb{E}[X \mid Y]$ là một hàm hằng trên từng thớ (fiber) $Y^{-1}(\{s\})$. Do đó, theo Định lý Biểu diễn Doob–Dynkin, tồn tại một hàm số $g: S \to \mathbb{R}$ sao cho:
>    $$\mathbb{E}[X \mid Y] = g \circ Y \quad \text{với } g(s) \equiv \mathbb{E}[X \mid Y = s] = \mathbb{E}_{\mathbb{P}_{\{Y=s\}}}[X].$$
> Khi không gian trạng thái $S$ không còn rời rạc (phân hoạch không đếm được, xác suất thớ $\mathbb{P}(Y=y) = 0$), công thức Bayes element-wise bị phá vỡ. Ta phải sử dụng Định lý Radon-Nikodym để định nghĩa $\mathbb{E}[X \mid \sigma(Y)]$, sau đó dùng Doob–Dynkin để bảo toàn cấu trúc phân tích hàm $\mathbb{E}[X \mid Y] = g(Y)$.

# Kỳ vọng Điều kiện theo $\sigma$-Đại số Tổng quát (Radon-Nikodym)

> [!lem] (Độ đo không âm cảm sinh bởi tích phân)
> Cho $(\Omega, \mathcal{F}, \mathbb{P})$ là không gian xác suất, $\mathcal{G} \subseteq \mathcal{F}$ là một $\sigma$-đại số con và $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ là biến ngẫu nhiên không âm ($X \ge 0$). Định nghĩa hàm tập hợp $\nu: \mathcal{G} \to [0, \infty)$ bởi
> $$\nu(G) = \int_G X \, d\mathbb{P}, \quad \forall G \in \mathcal{G}.$$
> Khi đó:
> 1. $\nu$ là một độ đo hữu hạn trên không gian đo được $(\Omega, \mathcal{G})$.
> 2. $\nu$ liên tục tuyệt đối đối với thu hẹp của độ đo $\mathbb{P}$ trên $\mathcal{G}$ (ký hiệu $\nu \ll \mathbb{P}|_{\mathcal{G}}$), tức là với mọi $G \in \mathcal{G}$, nếu $\mathbb{P}(G) = 0$ thì $\nu(G) = 0$.

> [!prf]
> 3. **Chứng minh $\nu$ là độ đo hữu hạn trên $(\Omega, \mathcal{G})$:**
>    *Tính không âm và hữu hạn:Do $X \ge 0$ và $X \in L^1(\mathbb{P})$, ta có $0 \le \nu(G) \le \int_\Omega X \, d\mathbb{P} < \infty$ với mọi $G \in \mathcal{G}$ và $\nu(\emptyset) = \int_\emptyset X \, d\mathbb{P} = 0$.
>    *Tính $\sigma$-cộng tính:Cho dãy các tập hợp $\{G_n\}_{n=1}^\infty \subset \mathcal{G}$ rời nhau đôi một và đặt $G = \bigsqcup_{n=1}^\infty G_n \in \mathcal{G}$, ta có $\mathbb{1}_G = \sum_{n=1}^\infty \mathbb{1}_{G_n}$. Do $X \ge 0$, áp dụng Định lý Hội tụ Đơn điệu cho chuỗi hàm không âm, ta có
>      $$\nu(G) = \int_\Omega X \left( \sum_{n=1}^\infty \mathbb{1}_{G_n} \right) d\mathbb{P} = \sum_{n=1}^\infty \int_\Omega X \mathbb{1}_{G_n} \, d\mathbb{P} = \sum_{n=1}^\infty \nu(G_n).$$
>
> 4. **Chứng minh $\nu \ll \mathbb{P}|_{\mathcal{G}}$:**
>    Giả sử $G \in \mathcal{G}$ thỏa mãn $\mathbb{P}(G) = 0$. Khi đó hàm chỉ thị $\mathbb{1}_G = 0$ hầu chắc chắn ($\mathbb{P}$-a.s.), dẫn đến biến ngẫu nhiên $X \mathbb{1}_G = 0$ ($\mathbb{P}$-a.s.). Theo tính chất của tích phân Lebesgue, ta có
>    $$\nu(G) = \int_G X \, d\mathbb{P} = \int_\Omega X \mathbb{1}_G \, d\mathbb{P} = 0.$$

> [!thm] (Định lý Radon-Nikodym cho $\sigma$-đại số con)
> Cho $(\Omega, \mathcal{F}, \mathbb{P})$ là không gian xác suất, $\mathcal{G} \subseteq \mathcal{F}$ là $\sigma$-đại số con và $\nu$ là độ đo hữu hạn trên $(\Omega, \mathcal{G})$ thỏa mãn $\nu \ll \mathbb{P}|_{\mathcal{G}}$. Khi đó, tồn tại duy nhất (theo nghĩa hầu chắc chắn $\mathbb{P}$-a.s.) một biến ngẫu nhiên $Y: \Omega \to [0, \infty)$ thỏa mãn các điều kiện:
> 5. $Y$ đo được đối với $\sigma$-đại số $\mathcal{G}$.
> 6. $Y \in L^1(\Omega, \mathcal{G}, \mathbb{P}|_{\mathcal{G}})$.
> 7. Với mọi biến cố $G \in \mathcal{G}$, ta có công thức biểu diễn
> $$\nu(G) = \int_G Y \, d\mathbb{P}.$$
> Biến ngẫu nhiên $Y$ được gọi là đạo hàm Radon-Nikodym của $\nu$ đối với $\mathbb{P}|_{\mathcal{G}}$, ký hiệu là $Y = \frac{d\nu}{d\mathbb{P}|_{\mathcal{G}}}$.

> [!def] (Kỳ vọng Điều kiện theo $\sigma$-Đại số - Định nghĩa Kolmogorov)
> Cho không gian xác suất $(\Omega, \mathcal{F}, \mathbb{P})$, biến ngẫu nhiên $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và $\mathcal{G} \subseteq \mathcal{F}$ là một $\sigma$-đại số con. Kỳ vọng điều kiện của $X$ với điều kiện $\mathcal{G}$, ký hiệu là $\mathbb{E}[X \mid \mathcal{G}]$, là một biến ngẫu nhiên $\xi: \Omega \to \mathbb{R}$ thỏa mãn hai tiên đề:
> 8. **Tính đo được ($\mathcal{G}$-measurability):** $\xi$ là biến ngẫu nhiên $\mathcal{G}$-đo được.
> 9. **Tính chất bình quân cục bộ (Partial averaging property):** Với mọi biến cố $G \in \mathcal{G}$, ta có
> $$\int_G \xi \, d\mathbb{P} = \int_G X \, d\mathbb{P} \quad \left(\text{tương đương } \mathbb{E}[\xi \mathbb{1}_G] = \mathbb{E}[X \mathbb{1}_G]\right).$$

> [!prp] (Sự tồn tại và Duy nhất của Kỳ vọng Điều kiện)
> Với mọi $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và $\sigma$-đại số con $\mathcal{G} \subseteq \mathcal{F}$, biến ngẫu nhiên kỳ vọng điều kiện $\mathbb{E}[X \mid \mathcal{G}]$ luôn tồn tại và duy nhất theo nghĩa hầu chắc chắn ($\mathbb{P}$-a.s.).

> [!prf]
> 10. **Chứng minh sự tồn tại:**
>    *Trường hợp không âm ($X \ge 0$):Xét hàm tập hợp $\nu(G) = \int_G X \, d\mathbb{P}$ với $G \in \mathcal{G}$. Theo Bổ đề về độ đo cảm sinh bởi tích phân, $\nu$ là một độ đo hữu hạn trên $(\Omega, \mathcal{G})$ và $\nu \ll \mathbb{P}|_{\mathcal{G}}$. Theo **Định lý Radon-Nikodym**, tồn tại một biến ngẫu nhiên $Y \ge 0$ đo được đối với $\mathcal{G}$ sao cho
>      $$\int_G Y \, d\mathbb{P} = \nu(G) = \int_G X \, d\mathbb{P}, \quad \forall G \in \mathcal{G}.$$
>      Chọn $\xi = Y$, ta thu được sự tồn tại cho biến ngẫu nhiên không âm.
>    *Trường hợp tổng quát ($X \in L^1(\mathbb{P})$):Ta phân tích $X = X^+ - X^-$. Do $X^+, X^- \in L^1(\mathbb{P})$ và không âm, áp dụng chứng minh trên, tồn tại hai biến ngẫu nhiên $\xi_1 = \mathbb{E}[X^+ \mid \mathcal{G}]$ và $\xi_2 = \mathbb{E}[X^- \mid \mathcal{G}]$ đều là $\mathcal{G}$-đo được. Đặt $\xi = \xi_1 - \xi_2$, hiển nhiên $\xi$ đo được đối với $\mathcal{G}$, thuộc $L^1(\mathbb{P})$ và thỏa mãn
>      $$\int_G \xi \, d\mathbb{P} = \int_G \xi_1 \, d\mathbb{P} - \int_G \xi_2 \, d\mathbb{P} = \int_G X^+ \, d\mathbb{P} - \int_G X^- \, d\mathbb{P} = \int_G X \, d\mathbb{P}, \quad \forall G \in \mathcal{G}.$$
>
> 11. **Chứng minh sự duy nhất ($\mathbb{P}$-a.s.):**
>    Giả sử tồn tại hai biến ngẫu nhiên $\xi_1, \xi_2$ cùng thỏa mãn định nghĩa $\mathbb{E}[X \mid \mathcal{G}]$. Đặt $Z = \xi_1 - \xi_2$, ta có $Z$ là biến ngẫu nhiên $\mathcal{G}$-đo được và với mọi $G \in \mathcal{G}$:
>      $$\int_G Z \, d\mathbb{P} = \int_G \xi_1 \, d\mathbb{P} - \int_G \xi_2 \, d\mathbb{P} = \int_G X \, d\mathbb{P} - \int_G X \, d\mathbb{P} = 0.$$
>    Xét tập hợp $G = \{\omega \in \Omega : Z(\omega) > 0\} = \{Z > 0\}$. Vì $Z$ là $\mathcal{G}$-đo được nên $G \in \mathcal{G}$, dẫn đến $\int_{\{Z > 0\}} Z \, d\mathbb{P} = 0$, suy ra $\mathbb{P}(Z > 0) = 0$.
>    Hoàn toàn tương tự với tập $G' = \{Z < 0\} \in \mathcal{G}$, ta thu được $\mathbb{P}(Z < 0) = 0$. Do đó $\mathbb{P}(Z = 0) = 1$, chứng tỏ $\xi_1 = \xi_2$ hầu chắc chắn ($\mathbb{P}$-a.s.).

# Cấu trúc Không gian Hàm: Pullback, Push-forward và Biểu diễn Doob–Dynkin

> [!lem] (Đặc trưng hóa $\sigma$-đại số sinh dưới góc nhìn Kéo về - Pullback $\sigma$-algebra)
> Cho vectơ ngẫu nhiên $\mathbf{X} = (X_1, \dots, X_d): \Omega \to \mathbb{R}^d$. Khi đó, $\sigma$-đại số sinh bởi $(X_1, \dots, X_d)$ chính là $\sigma$-đại số kéo về của $\mathcal{B}(\mathbb{R}^d)$ qua ánh xạ $\mathbf{X}$, xác định bởi toán tử tạo ảnh (pullback operator) $\mathbf{X}^*$:
> $$\sigma(X_1, \dots, X_d) = \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d)) \equiv \left\{ \mathbf{X}^{-1}(B) : B \in \mathcal{B}(\mathbb{R}^d) \right\}.$$
> Cấu trúc này khẳng định rằng một tập hợp thuộc $\sigma(\mathbf{X})$ khi và chỉ khi nó là tạo ảnh của một tập Borel dưới ánh xạ $\mathbf{X}$.

> [!thm] (Định lý Biểu diễn Doob–Dynkin - Doob–Dynkin Representation Theorem)
> Cho $(\Omega, \mathcal{F})$ là một không gian đo được, $X_1, \dots, X_d$ là các hàm đo được $\mathcal{F}/\mathcal{B}(\mathbb{R})$ và $Y: \Omega \to \mathbb{R}$ là một hàm đo được $\sigma(X_1, \dots, X_d)/\mathcal{B}(\mathbb{R})$.
> 
> Khi đó, tồn tại một hàm đo được Borel $f: \mathbb{R}^d \to \mathbb{R}$ sao cho:
> $$Y = f(X_1, \dots, X_d) = f(\mathbf{X}).$$

> [!prf]
> Áp dụng đặc trưng hóa kéo về $\mathbf{X}^*(\mathcal{B}(\mathbb{R}^d))$ ở trên, ta chứng minh định lý theo 3 bước:
>
> 1. **Bước 1: Trường hợp $Y$ là hàm chỉ thị ($\mathbb{1}_A$):**
>    Giả sử $Y = \mathbf{1}_A$ với $A \in \sigma(X_1, \dots, X_d)$.
>    Do $A \in \sigma(X_1, \dots, X_d) = \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d))$, tồn tại một tập Borel $B \in \mathcal{B}(\mathbb{R}^d)$ sao cho $A = \mathbf{X}^{-1}(B)$.
>    Khi đó, với mọi $\omega \in \Omega$, tính chất kéo về hàm chỉ thị cho ta:
>      $$\mathbf{1}_A = \mathbf{1}_{\mathbf{X}^{-1}(B)} = \mathbf{1}_B \circ \mathbf{X}.$$
>    Chọn hàm Borel $f = \mathbf{1}_B$, ta có ngay biểu diễn $Y = f(\mathbf{X})$.
>
> 2. **Bước 2: Trường hợp $Y$ là hàm đơn giản (Simple function):**
>    Giả sử $Y$ là tổ hợp tuyến tính hữu hạn của các hàm chỉ thị:
>      $$Y = \sum_{j=1}^n \alpha_j \mathbf{1}_{A_j}$$
>      với $\alpha_j \in \mathbb{R}$ và $A_j \in \sigma(X_1, \dots, X_d)$.
>    Do $A_j \in \mathbf{X}^*(\mathcal{B}(\mathbb{R}^d))$, với mỗi chỉ số $j$ tồn tại tập Borel $B_j \in \mathcal{B}(\mathbb{R}^d)$ sao cho $A_j = \mathbf{X}^{-1}(B_j)$. Khi đó:
>      $$Y = \sum_{j=1}^n \alpha_j \mathbf{1}_{\mathbf{X}^{-1}(B_j)} = \sum_{j=1}^n \alpha_j (\mathbf{1}_{B_j} \circ \mathbf{X}) = \left( \sum_{j=1}^n \alpha_j \mathbf{1}_{B_j} \right) \circ \mathbf{X}.$$
>    Định nghĩa hàm Borel $f = \sum_{j=1}^n \alpha_j \mathbf{1}_{B_j}$, ta suy ra:
>      $$Y = f(\mathbf{X}).$$
>
> 3. **Bước 3: Trường hợp $Y$ là hàm đo được tổng quát:**
>    Trong trường hợp tổng quát, luôn tồn tại một dãy hàm đơn giản $(Y_n)_{n \ge 1}$ đo được đối với $\sigma(\mathbf{X})$ hội tụ điểm đến $Y$ trên toàn bộ $\Omega$.
>    Theo kết quả từ Bước 2, với mỗi $n \ge 1$, tồn tại hàm đo được Borel $f_n: \mathbb{R}^d \to \mathbb{R}$ sao cho $Y_n = f_n(\mathbf{X})$.
>    Ta định nghĩa hàm đo được Borel $f: \mathbb{R}^d \to \mathbb{R}$ bởi giới hạn trên:
>      $$f(\mathbf{x}) \equiv \limsup_{n \to \infty} f_n(\mathbf{x}), \quad \forall \mathbf{x} \in \mathbb{R}^d.$$
>    Do phép toán giới hạn trên bảo toàn tính đo được Borel, $f$ là hàm đo được Borel và thỏa mãn:
>      $$Y = \lim_{n \to \infty} Y_n = \limsup_{n \to \infty} Y_n = \limsup_{n \to \infty} f_n(\mathbf{X}) = f(\mathbf{X}).$$

> [!def] (Kỳ vọng điều kiện theo biến ngẫu nhiên)
> Cho $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và vectơ ngẫu nhiên $\mathbf{Z}: \Omega \to \mathbb{R}^k$. Kỳ vọng điều kiện của $X$ theo $\mathbf{Z}$, ký hiệu là $\mathbb{E}[X \mid \mathbf{Z}]$, được định nghĩa là kỳ vọng điều kiện theo $\sigma$-đại số kéo về sinh bởi $\mathbf{Z}$:
> $$\mathbb{E}[X \mid \mathbf{Z}] \equiv \mathbb{E}[X \mid \sigma(\mathbf{Z})] = \mathbb{E}[X \mid \mathbf{Z}^*(\mathcal{B}(\mathbb{R}^k))].$$

> [!thm] (Định lý Phân tích Biểu diễn cho Kỳ vọng Điều kiện)
> Cho $X \in L^1(\Omega, \mathcal{F}, \mathbb{P})$ và $\mathbf{Z}: \Omega \to \mathbb{R}^k$ là vectơ ngẫu nhiên. Khi đó, tồn tại một hàm đo được Borel $g: \mathbb{R}^k \to \mathbb{R}$ sao cho
> $$\mathbb{E}[X \mid \mathbf{Z}] = g(\mathbf{Z}) \quad (\mathbb{P}\text{-a.s.}).$$
> Hàm $g(\mathbf{z})$ được ký hiệu là $g(\mathbf{z}) \equiv \mathbb{E}[X \mid \mathbf{Z} = \mathbf{z}]$ và được gọi là hàm hồi quy (regression function) của $X$ theo $\mathbf{Z}$.

> [!prf]
> Đặt $Y = \mathbb{E}[X \mid \mathbf{Z}] = \mathbb{E}[X \mid \sigma(\mathbf{Z})]$.
> 
> Theo tiên đề thứ nhất trong định nghĩa kỳ vọng điều kiện theo $\sigma$-đại số, $Y$ là một hàm đo được đối với $\sigma(\mathbf{Z})/\mathcal{B}(\mathbb{R}) \equiv \mathbf{Z}^*(\mathcal{B}(\mathbb{R}^k))/\mathcal{B}(\mathbb{R})$.
> 
> Áp dụng trực tiếp Định lý Biểu diễn Doob–Dynkin vừa chứng minh cho biến ngẫu nhiên $Y$ đối với hệ sinh $\mathbf{Z}$, tồn tại một hàm đo được Borel $g: \mathbb{R}^k \to \mathbb{R}$ sao cho $Y(\omega) = g(\mathbf{Z}(\omega))$ với mọi $\omega \in \Omega$.
> 
> Kết hợp với tính duy nhất hầu chắc chắn của kỳ vọng điều kiện, ta thu được $\mathbb{E}[X \mid \mathbf{Z}] = g(\mathbf{Z})$ hầu chắc chắn.

> [!prp] (Đặc trưng Tích phân qua Độ đo Đẩy - Push-forward Measure $\mathbf{Z}_*\mathbb{P}$)
> Cho $\mathbb{P}_{\mathbf{Z}} \equiv \mathbf{Z}_*\mathbb{P} = \mathbb{P} \circ \mathbf{Z}^{-1}$ là độ đo đẩy (push-forward measure) của $\mathbb{P}$ từ không gian mẫu $\Omega$ sang không gian trạng thái $\mathbb{R}^k$ qua ánh xạ $\mathbf{Z}$. Khi đó, hàm Borel $g: \mathbb{R}^k \to \mathbb{R}$ trong biểu diễn $\mathbb{E}[X \mid \mathbf{Z}] = g(\mathbf{Z})$ được xác định duy nhất ($\mathbf{Z}_*\mathbb{P}$-a.s.) thông qua phương trình tích phân:
> $$\int_B g(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z}) = \int_{\mathbf{Z}^{-1}(B)} X \, d\mathbb{P}, \quad \forall B \in \mathcal{B}(\mathbb{R}^k).$$

> [!prf]
> Với mỗi Borel set $B \in \mathcal{B}(\mathbb{R}^k)$, xét tập pullback $G = \mathbf{Z}^{-1}(B) \in \sigma(\mathbf{Z})$. Theo tiên đề thứ hai của định nghĩa kỳ vọng điều kiện trên tập $G$, ta có:
>   $$\int_{\mathbf{Z}^{-1}(B)} X \, d\mathbb{P} = \int_{\mathbf{Z}^{-1}(B)} \mathbb{E}[X \mid \mathbf{Z}] \, d\mathbb{P} = \int_\Omega \mathbb{1}_B(\mathbf{Z}(\omega)) g(\mathbf{Z}(\omega)) \, d\mathbb{P}(\omega).$$
> Áp dụng Định lý đổi biến tích phân theo Độ đo đẩy (Push-forward Change of Variables Theorem): với mọi hàm đo được Borel $\varphi: \mathbb{R}^k \to \mathbb{R}$ khả tích, tích phân trên không gian mẫu đối với độ đo gốc $\mathbb{P}$ trùng khớp với tích phân trên không gian đích đối với độ đo đẩy $\mathbf{Z}_*\mathbb{P}$:
>   $$\int_\Omega (\varphi \circ \mathbf{Z})\, d\mathbb{P} = \int_{\mathbb{R}^k} \varphi \, d(\mathbf{Z}_*\mathbb{P}).$$
> Chọn $\varphi = \mathbb{1}_B \cdot g$, vế phải được chuyển hóa hoàn toàn sang không gian trạng thái $\mathbb{R}^k$:
>   $$\int_\Omega (\mathbb{1}_B \cdot g)(\mathbf{Z}(\omega)) \, d\mathbb{P}(\omega) = \int_{\mathbb{R}^k} \mathbb{1}_B(\mathbf{z}) g(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z}) = \int_B g(\mathbf{z}) \, d(\mathbf{Z}_*\mathbb{P})(\mathbf{z}).$$
> Phương trình tích phân trên đúng với mọi $B \in \mathcal{B}(\mathbb{R}^k)$, do đó hàm $g$ được xác định duy nhất theo nghĩa hầu chắc chắn đối với độ đo đẩy $\mathbf{Z}_*\mathbb{P}$.


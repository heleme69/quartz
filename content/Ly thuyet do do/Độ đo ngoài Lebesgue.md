
> [!def] (Các khoảng trên $\mathbb{R}$)
> Cho $\mathfrak{J_{o}}$ là họ bao gồm tập rỗng $\emptyset$ và tất cả các khoảng mở trong $\mathbb{R}$ có dạng $(a,b)$. Tương tự, ta định nghĩa $\mathfrak{J_{co}}, \mathfrak{J_{oc}}, \mathfrak{J_{c}}$ lần lượt là là khoảng nửa mở - nửa đóng khoảng đóng. Quy ước $(a, \infty)$ và $(\infty, a)$ cũng nằm trong họ tương ứng. Gọi $\mathfrak{J}$ là hợp của tất cả các họ này, tức là mọi khoảng trên $\mathbb{R}$.

> [!def] (Hàm tập đo độ dài khoảng)
> Với mọi khoảng $I \in \mathfrak{J}$ có hai đầu mút $a, b \in \mathbb{R}$, ta định nghĩa chiều dài $I$ là: 
> $$
> \ell(I) = b - a
> $$
> Đối với một khoảng vô hạn, ta định nghĩa $\ell(I) =  \infty$. Đối với tập rỗng, $\ell(\emptyset) = 0$. Hàm chiều dài có tính chất cộng tính đếm được trên các họ khoảng rời nhau. Cụ thể: nếu $\{ I_{n}: n \in \mathbb{N} \}$ là một họ đếm được các khoảng rời rạc trong $\mathfrak{J}$ thì : 
> $$
> \ell \left( \bigcup_{n \in \mathbb{N}}I_{n} \right) = \sum_{n \in \mathbb{N}} \ell(I_{n}) 
> $$

> [!def] (Độ đo ngoài Lebesgue)
> Đô đo ngoài Lebesgue trên $\mathbb{R}$, kí hiệu là ${} \mu_{L} ^{*}$ là một hàm tập xác định trên toàn bộ không gian con $\mathfrak{B}(\mathbb{R})$, được định nghĩa bởi:
> $$
> \mu _{L} ^{*}(E) = \inf\left\{  \sum_{n \in \mathbb{N}} \ell(I_{n}): (I_{n}: n \in \mathbb{N}) \subset \mathfrak{J_{o}}, \bigcup_{n \in \mathbb{N}} I_{n} \supset E   \right\}
> $$
> , với mọi $E \in \mathfrak{B}(\mathbb{R})$. 
> Vì $\mu_{L} ^{*}$ là độ đo ngoài, nó thỏa các tính chất: $\mu_{L}^{*} (\emptyset) = 0$, đơn điệu $(A \subset B \implies \mu_{L}^{*}(A) \le \mu_{L}^{*} (B))$, tính $\sigma$ - dưới cộng tính.
> Ý nghĩa trực quan: ta cố gắng phủ một tập  $E$ bất kì bằng vô hạn đếm được các khoảng mở, tổng chiều dài các phủ này sẽ là cận trên cho kích thước của $E$. Độ đo ngoài $\mu_{L}^{*}(E)$ chính là giới hạn dưới đúng (infimum) của tất cả các tổng chiều dài bao phủ đó.

> [!rem] 
> Định nghĩa độ đo ngoài Lebesgue kế thừa từ định nghĩa độ đo ngoài tổng quát với việc chọn không gian $X = \mathbb{R}$, chọn lớp phủ $\mathfrak{V} \equiv \mathfrak{J_{o}}$, và gán hàm tập $\gamma \equiv \ell$.

> [!def] (Tính đo được theo tiêu chuẩn *Caratheodory*).
> Một tập $E \in \mathfrak{B}(\mathbb{R})$ được gọi là $\mu_{L} ^{*}$ đo được (hay Lebesgue đo được) nếu với mọi tập thử $A \in \mathfrak{B}(\mathbb{R})$, ta có đẳng thức:
> $$
> \mu_{L}^{*}(A) = \mu_{L} ^{*}(A \cap E) + \mu _{L} ^{*}(A \cap E^{c})
> $$
> Tập hợp hợp tất cả các tập Lebesgue đo được tạo thành một $\sigma$ - đại số, ký hiệu $\mathfrak{M}_{L}$. Dộ đo ngoài ${} \mu_{L}^{*}$ khi thu hẹp trên $\mathfrak{M}_{L}$ sẽ trở thành độ đo $\sigma$ - cộng tính, gọi là độ đo Lebesgue, ký hiệu là $\mu_{L}$.

> [!lem] (Tâp có độ đo không)
> a) Với mọi $x \in \mathbb{R}$, ta có $\{ x \} \in \mathfrak{M}_{L}$ và $\mu_{L}^{*}(\{ x \}) = 0$.
> b) Mọi tập con đếm được của $\mathbb{R}$ đều là tập null (tập có độ đo không) trong không gian đo $(\mathbb{R}, \mathfrak{M}_{L},\mu_{L})$.

> [!prf]
> a) Cho $x \in \mathbb{R}$, là một điểm bất kì. Với mọi số thực $\epsilon >0$, ta có tể chứa $x$ trong khoảng mở: $x \in (x - \epsilon, x+ \epsilon) \in \mathfrak{J_{o}}$. Ta chọn dãy phủ $(I_{n}: n \in \mathbb{N}) = ((x - \epsilon, x + \epsilon), \emptyset, \emptyset, \dots)$. Rõ ràng dãy này nằm trong $\mathfrak{J_{o}}$ và bao phủ $\{ x \}$. Theo định nghĩa độ đo ngoài:
> $$
> \mu_{L} ^{*}(\{ x \}) \le \sum_{n \in \mathbb{N}} \ell(I_{n}) = \ell((x - \epsilon, x + \epsilon)) + \ell(\emptyset)+ \ell(\emptyset) + \dots = 2 \epsilon  
> $$
> Do bất đẳng thức đúng với mọi $\epsilon > 0$ tùy ý, $\mu_{L} ^{*}\{ x \}\ge 0$, vậy với $\epsilon\to 0$, ta có $\mu_{L}^{*}(\{ x \}) = 0$. Mà theo *Caratheodory*, các tập độ đo không thì đo được, nghĩa là $\{ x \} \in \mathfrak{M}_{L}$
> b) Ta có thể viết tập con đếm được, giả sử đặt là $C$ của $\mathbb{R}$ dưới dạng hợp đếm được các tập có một phần tử: ${} C =\bigcup_{n \in \mathbb{N}} \{ x_{n} \}$. Theo tính chất $\sigma$ - dưới cộng tính của độ đo ngoài: $\mu_{L}^{*}(C) = \sum_{n \in \mathbb{N}} \mu_{L}^{*}(\{ x_{n} \}) = \sum_{n \in \mathbb{N}}0 = 0$. Vậy tập $C$ là tập Lebesgue và có độ đo ngoài bằng không hay tập đếm được là một tập null.

> [!lem] ${} \mu_{L}^{*} = \ell$ trên $\mathfrak{J}$.
> Tức là ${} \mu _{L} ^{*} (I) = \ell(I)$ với mọi khoảng $I$ trong $\mathbb{R}$.

> [!prf]
> - Trường hợp: $I$ là khoảng đóng hữu hạn ($I = [a,b]$)
>  
> 	- Cận trên: 
> 	Với mọi $\epsilon > 0$, ta có $[a, b]$, ta có $[a,b] \subset (a - \epsilon, b + \epsilon) \in \mathfrak{J_{o}}$. Ta có dãy $((a - \epsilon, b + \epsilon), \emptyset, \emptyset, \dots)$ là dãy phủ trong $\mathfrak{J}_{o}$ cho tập $I$. Do đó: ${} \mu _{L} ^{*}(I) \le \ell((a - \epsilon, b+ \epsilon)) = (b+ \epsilon) - (a - \epsilon) = (b-a) + 2 \epsilon {}$. Cho $\epsilon \to 0$, ta thu được chiều bất đẳng thức: $\mu_{L} ^{*}(I) \le (b - a) = \ell(I)$.
>  
> 	- Cận dưới: 
> 	Ta cần chứng minh với mọi dạy phủ $(I_{n}: n \in \mathbb{N})$ trong $\mathfrak{J_{o}}$ của $I$, ta có ${} \sum_{n \in \mathbb{N}} \ell(I_{n}) \ge \ell(I) {}$. Ta dễ thấy nếu dãy phủ có khoảng vô hạn, hiển nhiên có độ dài ${} \infty \ge \ell(I) {}$, vậy ta giả sử mọi $I_{n}$ đều hữu hạn. Vì $I = [a,b]$ là tập đóng và bị chặn trong $\mathbb{R}$, theo *Hein-Borel*, nó là tập compact, dẫn tới tính chất: Lớp phủ $I$ phải chứa lớp phủ con hữu hạn. Ta giả thiết đoạn $[a,b]$ được phủ bởi $N$ khoảng mở: ${} (J_{k}: k = 1,\dots, N) {}$, ${} J=(a_{k}, b_{k}) {}$ hay ${} [a,b] \subset \bigcup_{k =1}^{N}(a_{k}, b_{k}) = \bigcup_{k=1} ^{N} J_{k}$, ta sẽ chứng minh $\sum_{k=1}^{N} (b_{k} - a_{k}) \ge b - a$, từ đó dẫn đến điều cần chứng minh.
> 
> 		- Sắp xếp lại các khoảng: Sắp xếp lại $m$ khoảng mở sao cho các điểm mút trái tăng dần: $a_1 \leq a_2 \leq \dots \leq a_m$.Khóa các điểm mút của đoạn: Để đoạn $[a, b]$ được bao phủ, ta bắt buộc phải có:Khoảng đầu tiên phải phủ điểm mút trái $a$: $a_1 < a < b_1$.Khoảng cuối cùng phải phủ điểm mút phải $b$: $a_m < b < b_m$.
> 		- Lập luận về tính liên tục của lớp phủ: Để $[a, b]$ được che kín hoàn toàn và không có lỗ hổng ở giữa, các khoảng này không được tách rời nhau. Ta bắt buộc phải có $b_1 > a_2, b_2 > a_3, \dots, b_{m-1} > a_m$. Tức là điểm mút phải của khoảng trước phải lớn hơn điểm mút trái của khoảng sau.
> 		- Ta có: 
> 		$$
> 		 \begin{align}
> 		 \sum_{k=1}^m (b_k - a_k) &=  (b_m - a_m) + (b_{m-1} - a_{m-1}) + \dots + (b_1 - a_1) \\  
> 		 &= b_m - a_1 + \sum_{k=1}^{m-1} (b_k - a_{k+1})
> 		 \end{align}
> 		 $$
> 		Mà ta biết $b_{k}> a_{k+1}$ với mọi $k = 1,\dots, m-1$, nên tổng bên phải là tổng các số hạng dương, lược bỏ, ta có: $$\sum_{k=1}^m (b_k - a_k) > b_m - a_1$$; kết hợp giả thiết $b_{m}>b$ và $a_{1}< a$, ta được $b_{m} - a_{1} > b-a$, ta được chiều bất đẳng thức còn lại: $\sum_{n \in \mathbb{N}} \ell(I_{n})\ge \sum_{k=1}^{m} (b_{k} - a_{k}) > (b-a) = \ell(I)$.
> 
> - Trường hợp: $I$ là khoảng mở hữu hạn ($I = (a,b)$)
> Theo tính chất đơn điệu và **Lemma 1. a)**, ta có: 
> $$
> \mu_{L}^{*}((a,b)) \le \mu_{L}^{*}([a,b])\le \mu_{L}^{*}(\{ a \})+\mu_{L}^{*}((a,b)) + \mu_{L}^{*}(\{ b \}) = \mu_{L}^{*}((a,b))
> $$
> Ta kết luận $\mu_{L}^{*}((a,b)) = \mu_{L}^{*}([a,b]) = \ell([a,b]) = b - a$.
> 
> - Trường hợp: $I$ là nửa khoảng ($I = (a,b], I = [a,b)$) ta chứng minh tương tự
> 
> - Trường hợp: $I$ là các khoảng vô hạn: (ví dụ $I = (a, \infty)$ )
> Với số nguyên dương $n > a$, ta có $(a, \infty) \supset (a, n)$. Theo tính đơn điệu của độ đo ngoài:
> $$
> \mu_{L}^{*}((a, \infty)\ge \mu_{L}^{*}(a, n)) = \mu_{L}^{*}([a,n]) = n - a
> $$
> Vì bất đẳng thức đúng với mọi $n$ dương, ta có ta bắt buộc phải có $\mu_{L}^{*}((a, \infty)) = \infty = \ell((a, \infty))$. Lập luận tương tự cho các khoảng vô hạn khác.

> [!thm] (Tiêu chuẩn Caratheodory trên họ tập cơ sở)
> Sự đo được $\mu_{L}^{*}$ - đo được của một tập $E \in \mathfrak{B}(\mathbb{R})$, biểu diễn bởi đẳng thức: 
> $$
> \mu_{L}^{*}(A) = \mu_{L} ^{*}(A \cap E) + \mu_{L}^{*}(A \cap E ^{c}) \text{ với mọi }A \in \mathfrak{B}(\mathbb{R})
> $$
> tương đương điều kiện hạn chế:
> $$
> \mu_{L}^{*}(I) = \mu ^{*}(I \cap E) + \mu_{L}^{*}(I \cap E ^{c}) \text{ với mọi khoảng mở }I \in \mathfrak{J_{o}}
> $$

> [!thm] $\mathfrak{M}(\mu_{L}^{*})$ là $\sigma$ - đại số trên $\mathbb{R}$
> Ta ký hiệu độ đo Lebesgue trên $\sigma$ đại số ${} \mathfrak{M}(\mu ^{*}_{L}) {}$:
> $$\mu_L = \mu_L^* \big|_{\mathfrak{M}_L}$$

> [!lem] $(\mathfrak{J}) \subset \mathfrak{M}_{L}$
> Ta nói: mọi khoảng trong $\mathbb{R}$ đều là tập Lebesgue đo được. ($\mu_{L}$ - đo được)

> [!prf]
> Ta sẽ chứng minh mọi khoảng mở đều thỏa điều kiện *Caratheodory*.
> - Trường hợp: $E = (a, \infty)$, với $a \in \mathbb{R}$
> Cho $I \in \mathfrak{J_{o}}$ là một khoảng mở bất kì. Ta có:
> $$
> I = I \cap \mathbb{R} = I \cap ((a,\infty) \cup (a, \infty)^{c}) = \{ I \cap (a, \infty) \} \cup \{ I \cap (-\infty, ] \}
> $$
> Ta có $\{ I \cap (a, \infty) \}$ và $\{ I \cap (- \infty, a] \}$ là các khoảng rời nhau. Do tính cộng tính của hàm tập đo chiều dài đoạn, ta có tổng chiều dài hai đoạn rời nhau bằng chiều dài đoạn ban đầu:
> $$
> \ell(I) = \ell(I \cap (a , \infty)) + \ell(I \cap (-\infty, a])
> $$
> Sử dụng **Lemma 2.**, ta có điều trên tương đương:
> $$
> \mu_{L}^{*}(I) = \mu_{L}^{*}(I \cap (a, \infty)) + \mu_{L}^{*}(I \cap (-\infty, a])
> $$
> Vậy $(a, \infty)$ thỏa là tập $\mathfrak{M}_{L}$ đo được.
> 
> - Trường hợp: $E = (- \infty, b)$, với $b \in \mathbb{R}$
> Vì $\mathfrak{M}_{L}$ là một $\sigma$ - đại số, nó đóng kín với phép lấy phần bù. Ta có $(- \infty, b)^{c} = [b, \infty)$, mà $[b, \infty)$ có thể được viết thành $\bigcap_{n = 1} ^{\infty} \left( b - \frac{1}{n}, \infty \right)$.  Theo chứng minh ở trên thì tập nửa khoảng $\left( b - \frac{1}{n}, \infty \right)$ đo được, và vì $\mathfrak{M}_{L}$ là $\sigma$ - đại số (**Theorem 2.**) nên giao đếm được các tập đo được cũng là tập đo được.
> 
> - Trường hợp: $E = (a,b)$
> Ta có $(a,b) = (- \infty, b) \cap (a, \infty)$, theo chứng minh trên thì $(- \infty, b) \in \mathfrak{M}_{L}$ và $(a, \infty) \in \mathfrak{M}_{L}$, và vì $\mathfrak{M}_{L}$ là đại số trên $\mathbb{R}$ nên giao hữu hạn hai tập đo được là một tập đo được.
> 
> - Trường hợp: Còn lại (khoảng đóng và các nửa khoảng không đóng không mở)
> Cho $J$ là một khoảng không mở bất kì, ta có thể viết $J$ là hợp của một khoảng mở $I = (a,b)$ và một tập đơn một phần tử: $J = (a,b) \cup \{ a \}, J = (a,b) \cup \{ b \}, J = (a,b) \cup \{ a \} \cup \{ b \}$. Ta đã chứng minh được $I = (a,b) \in \mathfrak{M}_{L}$ và tập đơn phần tử $\{ a \}, \{ b \}, \{ a \}\cup \{ b \} \in \mathfrak{M}_{L}$ (**Lemma 1.**) nên hội hữu hạn của các tập đo được là tập đo được.

> [!def] (Tập Borel trên $\mathbb{R}$)
> Họ các tập Borel trên $\mathbb{R}$, ký hiệu là $\mathcal{B}(\mathbb{R})$, được định nghĩa là $\sigma$ - đại số nhỏ nhất chứa các tập mở trên $\mathbb{R}$.

> [!thm] Tập Borel đo được thì Lebesgue đo được
> Ký hiệu $\sigma(\mathfrak{J_{o}})$ là $\sigma$ - đại số sinh bởi các khoảng mở trên trục thực. Khi đó ta có chuỗi quan hệ: 
> $$
> \sigma(\mathfrak{J_{o}}) = \mathcal{B}(\mathbb{R}) \subset \mathfrak{M}_{L}
> $$
> Nghĩa là họ các tập Borel tương đương với $\sigma$ - đại số sinh bởi các khoảng mở, và mọi tập Borel đều là một tập Lebesgue đo được.

> [!prf]
> a) Chứng minh $\sigma(\mathfrak{J_{o}}) = \mathcal{B}(\mathbb{R})$
> Theo định nghĩa, $\mathcal{B}(R)$ là $\sigma$ - đại số sinh bởi tất cả các tập mở trên $\mathbb{R}$. Gọi $\mathcal{O}$ là họ các tập mở đó, ta có $\mathcal{B}(\mathbb{R}) = \sigma(\mathcal{O})$.
> 
> - Chiều thứ nhất ${} (\subset)$: Mọi khoảng mở trong $\mathfrak{J_{o}}$ hiển nhiên là một tập mở trong $\mathcal{O}$. Do đó $\mathfrak{J_{o}} \subset \mathcal{O} \subset \sigma(\mathcal{O}) = \mathcal{B}(\mathbb{R})$. Vì $\mathcal{B}(\mathbb{R})$ là một $\sigma$ - đại số nhỏ nhất chứa $\mathfrak{J_{o}}$ mà ${} \sigma(\mathfrak{J_{o}})$ lại là $\sigma$- đại số nhỏ nhất chứa $\mathfrak{J_{o}}$, ta có tính chất: 
> $$
> \sigma(\mathfrak{J_{o}}) \subset \mathcal{B}(\mathbb{R})
> $$
> - Chiều thứ hai ${} (\supset)$: Lấy một tập mở $U \subset \mathcal{O}$. Theo tính chất giải tích thực cơ bản, mọi tập mở trên $\mathbb{R}$ đều có được viết được thành hợp đếm được các khoảng mở rời nhau:
> $$
> U = \bigcup_{n= 1} ^{\infty}I_{n} \text{ với } I_{n} \in \mathfrak{J_{o}}
> $$
> Vì mỗi $I_{n} \in \mathfrak{J_{o}}$, và ${} \sigma(J_{o})$ là một $\sigma$ - đại số, ta suy ra $U$ là hợp đếm được của các tập $I_{n}$ phải nằm trong $\sigma(\mathfrak{J_{o}})$, chứng tỏ $\mathcal{O} \subset \sigma(\mathfrak{J_{o}})$. Sử dụng định nghĩa tập sinh nhỏ nhất: 
> $$
> \sigma(\mathcal{O}) \subset \sigma(\mathfrak{J_{o}})
> $$
> Vậy ta kết luận được $\sigma(\mathfrak{J_{o}}) = \mathcal{B}(\mathbb{R})$.
> 
> b) Chứng minh $\mathcal{B}(\mathbb{R}) \subset \mathfrak{M}_{L}$
> Trước tiên, ta chứng minh mọi khoảng mở  $E = (a,b)$ đều là tập Lebesgue đo được. Theo mệnh đề **Theorem 1.** (Tiêu chuẩn *Caratheodory* cho họ tập cơ sở), thay vì xét một tập $A \in \mathfrak{B}(\mathbb{R})$, ta chỉ cần chứng minh điều kiện đo được thỏa mãn với khoảng mở $I \in \mathfrak{J_{o}}$:
> $$
> \mu_{L}^{*}(I) = \mu_{L}^{*}(I \cap E) + \mu_{L}^{*}(I \cap E ^{c}) 
> $$
> , với mọi $I \in \mathfrak{J_{o}}$. Ta lấy $I = (c,d)$ là khoảng mở bất kì. Khi lấy $I$ giao $E$ và $E ^{c}$, ta có:
> $$
>  I \cap E = (c,d) \cap (a,b) 
> $$
> $$
> I \cap E ^{c} = (c,d) \setminus (a,b) = [(c,d) \cap (-\infty, a]] \cup [(c,d) \cap [b, \infty)]  
> $$
> Ta thấy $I \cap E$ và $I \cap E^{c}$ là các khoảng rời nhau, và hợp bằng chính tập $I$ ban đầu, do đó theo định nghĩa, ta có $\ell(I) = \ell(I \cap E) + \ell(I \cap E ^{c})$. Ta sử dụng bổ đề **Lemma 2.**, ta được:
> $$
> \mu_{L}^{*}(I) = \mu_{L}^{*}(I \cap E) + \mu_{L}^{*}(I \cap E ^{c})
> $$
> Vậy ta có $E = (a,b) \in \mathfrak{M}_{L}$, ta suy ra $\mathfrak{J_{o}} \subset \mathfrak{M}_{L}$. Mà ta đã biết $\mathfrak{M}_{L}$ là một $\sigma$ - đại số, theo định nghĩa thì $\sigma(\mathfrak{J_{o}})$ phải là $\sigma$ - đại số nhỏ nhất chứa sinh bởi họ $\mathfrak{J_{o}}$, vậy suy ra $\sigma(\mathfrak{J_{o}}) \subset \mathfrak{M}_{L}$.
> Ta đã chứng minh được $\mathcal{B}(\mathbb{R}) = \sigma(\mathfrak{J_{o}})$ ở ý a), từ chứng minh trên, ta kết luận:
> $$
> \mathcal{B}(\mathbb{R}) \subset \mathfrak{M}_{L}
> $$



$\pi$

---
[📄 View PDF](./Độ đo ngoài Lebesgue.pdf)

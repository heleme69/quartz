
# [I] Lebesgue Outer Measure on $\mathbb{R}$

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

> [!def] (Tính đo được theo tiêu chuẩn *Caratheodory*).
> Một tập $E \in \mathfrak{B}(\mathbb{R})$ được gọi là $\mu_{L} ^{*}$ đo được (hay Lebesgue đo được) nếu với mọi tập thử $A \in \mathfrak{B}(\mathbb{R})$, ta có đẳng thức:
> $$
> \mu_{L}^{*}(A) = \mu_{L} ^{*}(A \cap E) + \mu _{L} ^{*}(A \cap E^{c})
> $$
> Tập hợp hợp tất cả các tập Lebesgue đo được tạo thành một $\sigma$ - đại số, ký hiệu $\mathfrak{M}_{L}$. Dộ đo ngoài ${} \mu_{L}^{*}$ khi thu hẹp trên $\mathfrak{M}_{L}$ sẽ trở thành độ đo $\sigma$ - cộng tính, gọi là độ đo Lebesgue, ký hiệu là $\mu_{L}$.

> [!lem] ${} \mu_{L}^{*} = \ell$ trên $\mathfrak{J}$.
> Tức là ${} \mu _{L} ^{*} (I) = \ell(I)$ với mọi khoảng $I$ trong $\mathbb{R}$.

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

> [!def] (Tập Borel trên $\mathbb{R}$)
> Họ các tập Borel trên $\mathbb{R}$, ký hiệu là $\mathcal{B}(\mathbb{R})$, được định nghĩa là $\sigma$ - đại số nhỏ nhất chứa các tập mở trên $\mathbb{R}$.

> [!thm] Tập Borel đo được tương đương Lebesgue đo được
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
> Ta thấy $I \cap E$ và $I \cap E^{c}$ là các khoảng rời nhau, và hợp bằng chính tập $I$ ban đầu, do đó theo định nghĩa, ta có $\ell(I) = \ell(I \cap E) + \ell(I \cap E ^{c})$. Ta sử dụng bổ đề **Lemma 1.**, ta được:
> $$
> \mu_{L}^{*}(I) = \mu_{L}^{*}(I \cap E) + \mu_{L}^{*}(I \cap E ^{c})
> $$
> Vậy ta có $E = (a,b) \in \mathfrak{M}_{L}$, ta suy ra $\mathfrak{J_{o}} \subset \mathfrak{M}_{L}$. Mà ta đã biết $\mathfrak{M}_{L}$ là một $\sigma$ - đại số, theo định nghĩa thì $\sigma(\mathfrak{J_{o}})$ phải là $\sigma$ - đại số nhỏ nhất chứa sinh bởi họ $\mathfrak{J_{o}}$, vậy suy ra $\sigma(\mathfrak{J_{o}}) \subset \mathfrak{M}_{L}$.
> Ta đã chứng minh được $\mathcal{B}(\mathbb{R}) = \sigma(\mathfrak{J_{o}})$ ở ý a), từ chứng minh trên, ta kết luận:
> $$
> \mathcal{B}(\mathbb{R}) \subset \mathfrak{M}_{L}
> $$

---
[📄 View PDF](./BTVN tuần 4.pdf)

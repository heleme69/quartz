
# 1. Định nghĩa
## a) Cộng tính

> [!def] (Tính cộng tính và tính đơn điệu)
> Cho $\Omega$ là tập khác rỗng, $\mathcal{A}$ là đại số trên $\Omega$. $\mu : \mathcal{A} \to [0, \infty]$ là độ đo, có $\mu(\emptyset) = 0$.
> 1. $\sigma$ - cộng tính: Cho trước $\{A_{n}\}_{n=1}^{\infty}$ rời nhau trên $\mathcal{A}$, 
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n}\right) = \sum_{n=1}^{\infty} \mu(A_{n})
> $$
> 2. hữu hạn cộng tính: Cho trước $A_{1}, A_{2}, \dots, A_{n} \in \mathcal{A}$,
> $$
> \mu\left( \bigcup_{n=1}^{N} A_{n} \right) = \sum_{n=1}^{N} \mu(A_{n})
> $$
> 3. $\sigma$ - dưới cộng tính: Cho trước $\{A_{n}\}_{n=1}^{\infty}$ rời nhau trên $\mathcal{A}$,
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_n \right) \le \sum_{n=1}^{\infty} \mu(A_{n})
> $$
> 4. $\sigma$ - cộng tính trên: Cho trước $\{A_{n}\}_{n=1}^{\infty}$ rời nhau trên $\mathcal{A}$,
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n} \right) \ge \sum_{n=1}^{\infty} \mu(A_{n})
> $$
> 5. đơn điệu: Cho $A,B \in \mathcal{A}, A \subset B$,
> $$
> \mu(A) \le \mu(B)
> $$

## b) Liên tục

> [!def] (Tính liên tục)
> 6. liên tục dưới: Nếu $\{ A_{n} \}_{n=1}^\infty$ là dãy tăng trong $\mathcal{A}(A_{1} \subseteq A_{2}\subseteq A_{3} \subseteq \dots)$ và $A=\bigcup_{n=1}^{\infty} \in \mathcal{A}$, khi đó:
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n} \right) = \lim_{ n \to \infty } \mu(A_{n})
> $$
> 7. liên tục trên: Nếu $\{ A_{n} \}_{n=1}^\infty$ là dãy giảm trong $\mathcal{A} (A_{1} \supseteq A_{2}\supseteq  A_{3} \supseteq  \dots)$, $A=\bigcup_{n=1}^{\infty} \in \mathcal{A}$ và $\mu(A_{1})<\infty$, khi đó:
> $$
> \mu\left( \bigcap _{n=1} ^{\infty} A_{n} \right) = \lim_{ n \to \infty } \mu(A_{n})
> $$

# 2. Mệnh đề

## a) Cộng tính

> [!thm] 
>$\sigma$ - Cộng tính $\implies$ Hữu hạn cộng tính

> [!prf] 
> Cho $A_{1}, A_{2},\dots, A_{n} \in \mathcal{A}$ là họ các tập rời nhau, xét $A_{n}= \emptyset$ $\forall n>N$. Theo định nghĩa $\sigma$ cộng tính:
> $$
> \mu\left( \bigcup_{n=1} ^{N} A_{n} \right) = \mu\left( \bigcup_{n=1} ^{\infty} A_{n} \right) = \sum_{n=1}^{\infty} \mu(A_{n}) = \sum_{n=1}^{N} \mu(A_{n}) + \sum_{n=N+1}^{\infty} \mu(\emptyset ) = \sum_{n=1}^{N} \mu(A_{n})
> $$

> [!thm] 
> Hữu hạn cộng tính $\implies$ Đơn điệu

> [!prf] 
> Lấy $A,B \in \mathcal{A}$ sao cho $A \subseteq B$. Ta tách $B = B \sqcup (B\setminus A)$ rời nhau, theo định nghĩa hữu hạn cộng tính:
> $$
> \mu(B) = \mu(A) + \mu(B\setminus A)
> $$
>vì $\mu \ge_{0}$ nên $\mu(B\setminus A)\ge 0$, nên $\mu(B)\ge 0$, hay
> $$
> \mu(B) \ge \mu(A)
> $$

> [!thm] 
> Hữu hạn cộng tính $\implies$ $\sigma$ Cộng tính trên

> [!prf] 
> Lấy $\{ A_{n} \}_{n=1}^{\infty}$ là dãy họ các tập rời nhau trong $\mathcal{A}$, với $N \in \mathbb{N}$, $\bigcup _{n=1}^{N} \subseteq \bigcup _{n=1}^{\infty}$. Vì $\mu$ hữu hạn cộng tính nên nó đơn điệu, ta có
> $$
> \mu\left( \bigcup_{n=1} ^{\infty }A_{n} \right) \ge \mu\left( \bigcup_{n=1}^{N}A_{n} \right) = \sum_{n=1}^{N} \mu(A_{n}) 
> $$
> vì $\mu \ge 0$ và biểu thức đúng với mọi N, lấy giới hạn $N\to \infty$ ở vế phải, ta được:
> $$
> \mu\left( \bigcup_{n=1}^{\infty}A_{n} \right) \ge \sum_{n=1}^{\infty} \mu(A_{n})
> $$

> [!thm] 
> Hữu hạn cộng tính $\implies$ Hữu hạn dưới cộng tính

> [!prf] 
> Lấy $A,B \in \mathcal{A}$, Ta tách $A \cup  B = A \sqcup (B\setminus A)$ rời nhau, theo định nghĩa hữu hạn cộng tính:
> $$
> \mu(A \cup B) = \mu(A) + \mu(B\setminus A)
> $$
> mà vì $(B\setminus A \subseteq B)$, nên theo tính chất đơn điệu, $\mu(B\setminus A)\le\mu(B)$, vậy:
> $$
> \mu(A \cup B) \le \mu(A) + \mu(B)
> $$

> [!thm] 
>$\sigma$ - Cộng tính $\implies$ $\sigma$ - Dưới cộng tính

> [!prf]  
> Lấy $\{ A_{n} \}_{n=1}^{\infty}$ là dãy họ các tập bất kì trong $\mathcal{A}$, ta đặt $\{ B_{n} \}_{n=1}^{\infty}$, lần lượt là: 
> $$
> B_{1}=A_{1}, B_{2} =B_{1}\setminus A_{1},\dots ,B_{n}=A_{n}\setminus  \bigcup_{i=1}^{n-1}A_{i} \quad \forall n \ge 2
> $$
> nhận xét, ta thấy $\{ B_{n} \}_{n=1}^{\infty}$ là dãy họ các tập rời nhau, và $\{ B_{n} \}_{n=1}^{\infty} = \{ A_{n} \}_{n=1}^{\infty}$, $B_{n}\subseteq A_{n}$, sử dụng tính $\sigma$ - cộng tính của $B_{n}$:
> $$
> \mu\left( \bigcup_{n=1}^{\infty}A_{n} \right) =\mu\left( \bigcup_{n=1}^{\infty}B_{n} \right) =\sum_{n=1}^{\infty} \mu(B_{n})
> $$
> lại áp dụng tính đơn điệu: $\mu(B_{n})\subseteq \mu(A_{n})$ 
> $$
> \mu\left( \bigcup_{n=1}^{\infty}A_{n} \right) \le\sum_{n=1}^{\infty} \mu(A_{n})
> $$

> [!thm] 
>$\sigma$ - Dưới cộng tính $\implies$ Hữu hạn dưới cộng tính

> [!prf]
> Cho $\{ A \}_{n}^{\infty}$ là dãy họ các tập bất kì trong $\mathcal{A}$, xét $A_{n}= \emptyset$ $\forall n>N$.
> Ta áp dụng tính dưới cộng tính:
> $$
> \mu\left( \bigcup_{n=1}^{N} A_n \right) =\mu\left( \bigcup_{n=1}^{\infty }A_{n} \right) \le \sum_{n=1}^{\infty} \mu(A_{n}) = \sum_{n=1}^{N} \mu(A_{n})
> $$

> [!thm]
> $\sigma$ - Dưới cộng tính và Hữu hạn cộng tính $\iff$ $\sigma$ - Cộng tính
> 

> [!prf] 
> $(\implies)$ : Theorem 3.1 & Theorem 3.5
> $(\impliedby)$ : Xét $\{ A_{n} \}_{n=1}^{\infty}$ là dãy họ các tập rời nhau, từ tính hữu hạn cộng tính, ta được tính cộng tính trên: $\mu\left( \bigcup_{n=1}^{\infty } A_{n}\right)\ge \sum_{n=1}^{\infty}A_{n}$ ; kết hợp tính dưới cộng tính: $\mu\left( \bigcup_{n=1}^{\infty} A_{n})\le \sum_{n=1}^{\infty} \mu(A_{n} \right)$

## b) Liên tục

Giả sử $\mu$ là $\sigma$ - hữu hạn cộng tính xuyên suốt các mệnh đề và chứng minh dưới đây

> [!thm] 
> $\mu$ là $\sigma$ - cộng tính $\iff$ $\mu$ liên tục dưới 

> [!prf] 
> $(\implies )$ :
> Lấy $\{ A_{n} \}_{n=1}^{\infty}$ $\uparrow A$. Ta định nghĩa $\{ B_{n} \}_{n=1}^{\infty }$: $B_{1}=A_{1}$, $B_{2} =A_{2}\setminus A_{1} ,\dots ,$ $B_{n} =A_{n} \setminus A_{n-1} \quad \forall n\ge 2$, ta có $B_{n}$ là họ rời nhau: $A_{n} = \bigsqcup_{i=1}^{n}B_{i}$ và $A = \bigsqcup_{i=1}^{\infty}B_{i}$, vì $\mu$ $\sigma$ - cộng tính:
> $$
> \mu(A) = \sum_{i=1}^{\infty} \mu(B_{i}) = \lim_{ n \to \infty } \sum_{i=1}^{n} \mu(B_{i})
> $$
> vì $\mu$ cộng tính hữu hạn trên $A_{n}$:
> $$
> \lim_{ n \to \infty } \sum_{i=1}^{n} \mu(B_{i}) = \lim_{ n \to \infty } \bigsqcup_{i=1}^{n}\mu(B_{i}) = \lim_{ n \to \infty } \mu(A_{n})
> $$
> Vậy $\lim_{ n \to \infty }\mu(A_{n})=\mu(A)$
> $(\impliedby)$ :
> lấy $\{ E_{n} \}_{n=1}^{\infty}$ rời nhau, lấy $A_{n} = \bigsqcup_{i=1}^{n}E_{i}$, ta có $A_{n} \uparrow \bigsqcup_{i=1}^{\infty}E_{i}$ vì $\mu$ liên tục dưới, 
> $$
> \mu\left( \bigcup_{i=1}^{\infty} E_{i}\right) = \lim_{ n \to \infty } \mu(A_{n})
> $$
> áp dụng tính chất cộng tính hữu hạn:
> $$
> \lim_{ n \to \infty } \mu(A_{n}) =\lim_{ n \to \infty } \mu(\bigsqcup_{i=1}^{n}E_{i}) =\lim_{ n \to \infty } \sum_{i=1}^{n} \mu(E_{i}) = \sum_{i=1}^{\infty} \mu(E_{i})
> $$
> Vậy $\mu\left( \bigcup_{i=1}^{\infty} E_{i} \right) = \sum_{i=1}^{\infty} \mu(E_{i})$

> [!thm] 
> $\mu$ là $\sigma$ - cộng tính $\iff$ $\mu$ liên tục trên tại $\emptyset$

> [!prf] 
> $(\implies )$ :
> lấy $\{ A_{n} \}_{n=1}^{\infty} \downarrow \emptyset$. Ta định nghĩa $B_{n} =A_{n} \setminus A_{n+1}$ là họ rời nhau, ta có $A_{1}= \bigsqcup_{i=1}^{n}B_{i}$, sử dụng tính $\sigma$ - cộng tính:
> $$
> \mu(A_{1}) = \mu(\bigsqcup_{i=1}^{\infty}B_{i}) = \sum_{i=1}^{\infty } \mu(B_{i})
> $$
> vì $\mu \ge 0$ và $\mu(A_{1})< \infty$ nên chuỗi hội tụ, vậy ta tìm được $N \in \mathbb{N}, \forall n \ge N$:
> $$
> \lim_{ n \to \infty } \sum_{i=n}^{\infty} \mu(B_{i}) = 0 
> $$
> ta có $A_{n} = \bigsqcup_{i=n}^{\infty} B_{i}$, vậy $\lim_{ n \to \infty }A_{n} = \lim_{ n \to \infty } \sum_{i=n}^{\infty}\mu(B_{i}) = 0$
> $(\impliedby)$ :
> ta chứng minh $\mu$ liên tục trên tương đương $\mu$ liên tục dưới, khi đó từ Theorem 4.1 ta có điều phải chứng minh. lấy $A_{n} \uparrow A$, đăt $R_{n} =A \setminus A_{n}$, khi đó $R_{n} \downarrow \emptyset$. sử dụng tính cộng tính hữu hạn, ta có:
> $$
> \lim_{ n \to \infty } \mu(A) = \lim_{ n \to \infty } \mu(A_{n} )+ \mu(R_{n})
> $$
> vì $\lim_{ n \to \infty }\mu(R_{n}) =0$, vậy $\mu(A)=\lim_{ n \to \infty }\mu(A_{n})$ hay $\mu$ liên tục trên
> 



$\pi$


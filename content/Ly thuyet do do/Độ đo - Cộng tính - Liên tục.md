# 1. Định nghĩa

## a) Độ đo và các khái niệm cộng tính

> [!def] (Độ đo và các khái niệm)
> - Cho $X$ là tập khác rỗng, $\mathfrak{A}$ là một đại số $\sigma$ trên $X$. Một hàm tập hợp $\mu : \mathfrak{A} \to [0, \infty]$ được gọi là một độ đo nếu nó thỏa mãn 2 tiên đề:
> 1. $\mu(\emptyset) = 0$
> 2. $\sigma$ - cộng tính: Cho trước $\{A_{n}\}_{n=1}^{\infty}$ rời nhau trên $\mathfrak{A}$, 
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n}\right) = \sum_{n=1}^{\infty} \mu(A_{n})
> $$
> - Các thuật ngữ mở rộng cho một hàm tập hợp $\mu$ bất kỳ:
> 1. hữu hạn cộng tính: Cho trước $A_{1}, A_{2}, \dots, A_{N} \in \mathfrak{A}$ rời nhau,
> $$
> \mu\left( \bigcup_{n=1}^{N} A_{n} \right) = \sum_{n=1}^{N} \mu(A_{n})
> $$
> 2. $\sigma$ - dưới cộng tính: Cho trước $\{A_{n}\}_{n=1}^{\infty}$ bất kì trên $\mathfrak{A}$,
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_n \right) \le \sum_{n=1}^{\infty} \mu(A_{n})
> $$
> 3. $\sigma$ - cộng tính trên: Cho trước $\{A_{n}\}_{n=1}^{\infty}$ rời nhau trên $\mathfrak{A}$,
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n} \right) \ge \sum_{n=1}^{\infty} \mu(A_{n})
> $$
> 4. đơn điệu: Cho $A,B \in \mathfrak{A}, A \subset B$,
> $$
> \mu(A) \le \mu(B)
> $$

## b) Liên tục

> [!def] (Tính liên tục)
> 6. liên tục dưới: Nếu $\{ A_{n} \}_{n=1}^\infty$ là dãy tăng trong $\mathfrak{A}(A_{1} \subseteq A_{2}\subseteq A_{3} \subseteq \dots)$ và $A=\bigcup_{n=1}^{\infty} \in \mathfrak{A}$, khi đó:
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n} \right) = \lim_{ n \to \infty } \mu(A_{n})
> $$
> 7. liên tục trên: Nếu $\{ A_{n} \}_{n=1}^\infty$ là dãy giảm trong $\mathfrak{A} (A_{1} \supseteq A_{2}\supseteq  A_{3} \supseteq  \dots)$, $A=\bigcup_{n=1}^{\infty} \in \mathfrak{A}$ và $\mu(A_{1})<\infty$, khi đó:
> $$
> \mu\left( \bigcap _{n=1} ^{\infty} A_{n} \right) = \lim_{ n \to \infty } \mu(A_{n})
> $$

# 2. Mệnh đề

## a) Các tính chất đại số cơ bản

> [!thm] 
> $\sigma$ - Cộng tính $\implies$ Hữu hạn cộng tính

> [!prf] 
> Cho $A_{1}, A_{2},\dots, A_{N} \in \mathfrak{A}$ là họ các tập rời nhau, xét $A_{n}= \emptyset$ $\forall n>N$. Theo định nghĩa $\sigma$ cộng tính:
> $$
> \mu\left( \bigcup_{n=1} ^{N} A_{n} \right) = \mu\left( \bigcup_{n=1} ^{\infty} A_{n} \right) = \sum_{n=1}^{\infty} \mu(A_{n}) = \sum_{n=1}^{N} \mu(A_{n}) + \sum_{n=N+1}^{\infty} \mu(\emptyset ) = \sum_{n=1}^{N} \mu(A_{n})
> $$

> [!thm] 
> Hữu hạn cộng tính $\implies$ Đơn điệu

> [!prf] 
> Lấy $A,B \in \mathfrak{A}$ sao cho $A \subseteq B$. Ta tách $B = B \sqcup (B\setminus A)$ rời nhau, theo định nghĩa hữu hạn cộng tính:
> $$
> \mu(B) = \mu(A) + \mu(B\setminus A)
> $$
> vì $\mu \ge 0$ nên $\mu(B\setminus A)\ge 0$, nên $\mu(B)\ge 0$, hay
> $$
> \mu(B) \ge \mu(A)
> $$

> [!thm] (Tính chất trừ)
> Cho $A, B \in \mathfrak{A}$ sao cho $A \subseteq B$ và $\mu(A) < \infty$. Khi đó:
> $$
> \mu(B \setminus A) = \mu(B) - \mu(A)
> $$

> [!prf]
> Ta có $B = A \sqcup (B \setminus A)$. Áp dụng tính hữu hạn cộng tính:
> $$
> \mu(B) = \mu(A) + \mu(B \setminus A)
> $$
> Vì $\mu(A) < \infty$, ta có thể trừ $\mu(A)$ ở cả hai vế để nhận được $\mu(B \setminus A) = \mu(B) - \mu(A)$.

> [!thm] 
> Hữu hạn cộng tính $\implies$ $\sigma$ Cộng tính trên

> [!prf] 
> Lấy $\{ A_{n} \}_{n=1}^{\infty}$ là dãy họ các tập rời nhau trong $\mathfrak{A}$, với $N \in \mathbb{N}$, $\bigcup _{n=1}^{N} A_n \subseteq \bigcup _{n=1}^{\infty} A_n$. Vì $\mu$ hữu hạn cộng tính nên nó đơn điệu, ta có
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
> Lấy $A,B \in \mathfrak{A}$, Ta tách $A \cup B = A \sqcup (B\setminus A)$ rời nhau, theo định nghĩa hữu hạn cộng tính:
> $$
> \mu(A \cup B) = \mu(A) + \mu(B\setminus A)
> $$
> mà vì $B\setminus A \subseteq B$, nên theo tính chất đơn điệu, $\mu(B\setminus A)\le\mu(B)$, vậy:
> $$
> \mu(A \cup B) \le \mu(A) + \mu(B)
> $$

> [!thm] 
> $\sigma$ - Cộng tính $\implies$ $\sigma$ - Dưới cộng tính

> [!prf]  
> Lấy $\{ A_{n} \}_{n=1}^{\infty}$ là dãy họ các tập bất kì trong $\mathfrak{A}$, ta đặt $\{ B_{n} \}_{n=1}^{\infty}$, lần lượt là: 
> $$
> B_{1}=A_{1}, B_{2} =A_{2}\setminus A_{1},\dots ,B_{n}=A_{n}\setminus \bigcup_{i=1}^{n-1}A_{i} \quad \forall n \ge 2
> $$
> nhận xét, ta thấy $\{ B_{n} \}_{n=1}^{\infty}$ là dãy họ các tập rời nhau, và $\bigcup_{n=1}^{\infty} B_{n} = \bigcup_{n=1}^{\infty} A_{n}$, $B_{n}\subseteq A_{n}$, sử dụng tính $\sigma$ - cộng tính của $B_{n}$:
> $$
> \mu\left( \bigcup_{n=1}^{\infty}A_{n} \right) =\mu\left( \bigcup_{n=1}^{\infty}B_{n} \right) =\sum_{n=1}^{\infty} \mu(B_{n})
> $$
> lại áp dụng tính đơn điệu: $\mu(B_{n})\le \mu(A_{n})$ 
> $$
> \mu\left( \bigcup_{n=1}^{\infty}A_{n} \right) \le\sum_{n=1}^{\infty} \mu(A_{n})
> $$

> [!thm] 
> $\sigma$ - Dưới cộng tính $\implies$ Hữu hạn dưới cộng tính

> [!prf]
> Cho $A_1, \dots, A_N$ là họ các tập bất kì trong $\mathfrak{A}$, xét $A_{n}= \emptyset$ $\forall n>N$.
> Ta áp dụng tính dưới cộng tính:
> $$
> \mu\left( \bigcup_{n=1}^{N} A_n \right) =\mu\left( \bigcup_{n=1}^{\infty }A_{n} \right) \le \sum_{n=1}^{\infty} \mu(A_{n}) = \sum_{n=1}^{N} \mu(A_{n})
> $$

> [!thm]
> $\sigma$ - Dưới cộng tính và $\sigma$ - Cộng tính trên $\iff$ $\sigma$ - Cộng tính

> [!prf] 
> $(\implies)$ : Dựa vào bất đẳng thức hai chiều từ tính dưới cộng tính và tính cộng tính trên.
> $(\impliedby)$ : Xét $\{ A_{n} \}_{n=1}^{\infty}$ là dãy họ các tập rời nhau, từ tính hữu hạn cộng tính, ta được tính cộng tính trên: $\mu\left( \bigcup_{n=1}^{\infty } A_{n}\right)\ge \sum_{n=1}^{\infty}\mu(A_{n})$ ; kết hợp tính dưới cộng tính: $\mu\left( \bigcup_{n=1}^{\infty} A_{n}\right)\le \sum_{n=1}^{\infty} \mu(A_{n} )$.

## b) Tính liên tục và Giới hạn

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
> \lim_{ n \to \infty } \sum_{i=1}^{n} \mu(B_{i}) = \lim_{ n \to \infty } \mu\left(\bigsqcup_{i=1}^{n}B_{i}\right) = \lim_{ n \to \infty } \mu(A_{n})
> $$
> Vậy $\lim_{ n \to \infty }\mu(A_{n})=\mu(A)$
> $(\impliedby)$ :
> lấy $\{ E_{n} \}_{n=1}^{\infty}$ rời nhau, lấy $A_{n} = \bigsqcup_{i=1}^{n}E_{i}$, ta có $A_{n} \uparrow \bigsqcup_{i=1}^{\infty}E_{i}$ vì $\mu$ liên tục dưới, 
> $$
> \mu\left( \bigcup_{i=1}^{\infty} E_{i}\right) = \lim_{ n \to \infty } \mu(A_{n})
> $$
> áp dụng tính chất cộng tính hữu hạn:
> $$
> \lim_{ n \to \infty } \mu(A_{n}) =\lim_{ n \to \infty } \mu\left(\bigsqcup_{i=1}^{n}E_{i}\right) =\lim_{ n \to \infty } \sum_{i=1}^{n} \mu(E_{i}) = \sum_{i=1}^{\infty} \mu(E_{i})
> $$
> Vậy $\mu\left( \bigcup_{i=1}^{\infty} E_{i} \right) = \sum_{i=1}^{\infty} \mu(E_{i})$

> [!thm] 
> $\mu$ là $\sigma$ - cộng tính $\iff$ $\mu$ liên tục trên tại $\emptyset$

> [!prf] 
> $(\implies )$ :
> lấy $\{ A_{n} \}_{n=1}^{\infty} \downarrow \emptyset$ và $\mu(A_1) < \infty$. Ta định nghĩa $B_{n} =A_{n} \setminus A_{n+1}$ là họ rời nhau, ta có $A_{1}= \bigsqcup_{n=1}^{\infty}B_{n}$, sử dụng tính $\sigma$ - cộng tính:
> $$
> \mu(A_{1}) = \mu\left(\bigsqcup_{n=1}^{\infty}B_{n}\right) = \sum_{n=1}^{\infty } \mu(B_{n})
> $$
> vì $\mu \ge 0$ và $\mu(A_{1})< \infty$ nên chuỗi hội tụ, vậy ta tìm được $N \in \mathbb{N}, \forall n \ge N$:
> $$
> \lim_{ n \to \infty } \sum_{i=n}^{\infty} \mu(B_{i}) = 0 
> $$
> ta có $A_{n} = \bigsqcup_{i=n}^{\infty} B_{i}$, vậy $\lim_{ n \to \infty }\mu(A_{n}) = \lim_{ n \to \infty } \sum_{i=n}^{\infty}\mu(B_{i}) = 0$
> $(\impliedby)$ :
> ta chứng minh $\mu$ liên tục trên tương đương $\mu$ liên tục dưới, khi đó từ định lý trước ta có điều phải chứng minh. lấy $A_{n} \uparrow A$, đặt $R_{n} =A \setminus A_{n}$, khi đó $R_{n} \downarrow \emptyset$. sử dụng tính cộng tính hữu hạn và tính chất trừ, ta có:
> $$
> \mu(A) = \mu(A_{n} )+ \mu(R_{n}) \implies \lim_{ n \to \infty } \mu(A) = \lim_{ n \to \infty } (\mu(A_{n} )+ \mu(R_{n}))
> $$
> vì $\lim_{ n \to \infty }\mu(R_{n}) =0$, vậy $\mu(A)=\lim_{ n \to \infty }\mu(A_{n})$ hay $\mu$ liên tục dưới

> [!lem] (Liên tục trên tổng quát)
> Nếu $\{ A_{n} \}_{n=1}^\infty$ là dãy giảm trong $\mathfrak{A}$ ($A_{1} \supseteq A_{2} \supseteq A_{3} \supseteq \dots$), $A=\bigcap_{n=1}^{\infty} A_n \in \mathfrak{A}$ và tồn tại $k$ sao cho $\mu(A_{k})<\infty$, khi đó:
> $$
> \mu\left( \bigcap _{n=1} ^{\infty} A_{n} \right) = \lim_{ n \to \infty } \mu(A_{n})
> $$

> [!prf]
> Không mất tính tổng quát, giả sử $\mu(A_1) < \infty$. Đặt $B_n = A_n \setminus A$, ta có $B_n \downarrow \emptyset$ và $\mu(B_1) \le \mu(A_1) < \infty$.
> Áp dụng tính liên tục trên tại $\emptyset$, ta được $\lim_{n \to \infty} \mu(B_n) = 0$.
> Theo tính chất trừ: $\mu(B_n) = \mu(A_n) - \mu(A)$. Do đó $\lim_{n \to \infty} (\mu(A_n) - \mu(A)) = 0$, suy ra $\lim_{n \to \infty} \mu(A_n) = \mu(A)$.

> [!thm] (Bổ đề Fatou cho tập hợp - Ý a)
> Cho dãy tập hợp $\{A_n\}_{n=1}^\infty$ bất kỳ trong $\mathfrak{A}$. Khi đó:
> $$
> \mu\left( \liminf_{n \to \infty} A_n \right) \le \liminf_{n \to \infty} \mu(A_n)
> $$

> [!prf]
> Theo định nghĩa của giới hạn dưới đối với dãy tập hợp: $\liminf_{n \to \infty} A_n = \bigcup_{n=1}^\infty \bigcap_{k=n}^\infty A_k$.
> Đặt $F_n = \bigcap_{k=n}^\infty A_k$. Khi chỉ số n tăng lên, ta lấy giao trên ít tập hợp hơn, do đó tập $F_n$ lớn dần. Suy ra $\{F_n\}_{n=1}^\infty$ là một dãy tăng.
> Áp dụng định lý liên tục dưới cho dãy tăng $\{F_n\}$, ta có:
> $$
> \mu\left( \liminf_{n \to \infty} A_n \right) = \mu\left( \bigcup_{n=1}^\infty F_n \right) = \lim_{n \to \infty} \mu(F_n)
> $$
> Với mỗi n cố định, do tập $F_n = \bigcap_{k=n}^\infty A_k$ là giao của một họ tập hợp chứa $A_n$, ta luôn có quan hệ tập con $F_n \subseteq A_n$.
> Áp dụng tính đơn điệu của độ đo, ta có: $\mu(F_n) \le \mu(A_n)$ với mọi n.
> Lấy giới hạn dưới hai vế của bất đẳng thức trên khi n tiến ra vô cực:
> $$
> \liminf_{n \to \infty} \mu(F_n) \le \liminf_{n \to \infty} \mu(A_n)
> $$
> Vì dãy số thực $\mu(F_n)$ là một dãy tăng, giới hạn của dãy này tồn tại, và giới hạn dưới cũng chính bằng giới hạn của dãy số đó: $\liminf_{n \to \infty} \mu(F_n) = \lim_{n \to \infty} \mu(F_n)$.
> Kết hợp các hệ thức trên, ta suy ra:
> $$
> \mu\left( \liminf_{n \to \infty} A_n \right) = \lim_{n \to \infty} \mu(F_n) = \liminf_{n \to \infty} \mu(F_n) \le \liminf_{n \to \infty} \mu(A_n)
> $$
> Bổ đề được chứng minh hoàn tất.

> [!thm] (Bổ đề Fatou ngược cho giới hạn trên - Ý b)
> Cho dãy tập hợp $\{E_n\}_{n=1}^\infty$ trong $\mathfrak{A}$. Nếu tồn tại tập $A \in \mathfrak{A}$ với $\mu(A) < \infty$ sao cho $E_n \subseteq A$ với mọi $n \in \mathbb{N}$, thì:
> $$
> \mu\left( \limsup_{n \to \infty} E_n \right) \ge \limsup_{n \to \infty} \mu(E_n)
> $$

> [!prf]
> Theo định nghĩa của giới hạn trên đối với dãy tập hợp: $\limsup_{n \to \infty} E_n = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty E_k$.
> Đặt $G_n = \bigcup_{k=n}^\infty E_k$. Khi chỉ số $n$ tăng lên, ta lấy hợp trên ít tập hợp hơn, do đó tập $G_n$ nhỏ dần. Suy ra $\{G_n\}_{n=1}^\infty$ là một dãy giảm.
> Vì $E_k \subseteq A$ với mọi $k$, nên $G_n \subseteq A$ với mọi $n$. Suy ra $\mu(G_1) \le \mu(A) < \infty$.
> Áp dụng bổ đề liên tục trên tổng quát cho dãy giảm $\{G_n\}$, ta có:
> $$
> \mu\left( \limsup_{n \to \infty} E_n \right) = \mu\left( \bigcap_{n=1}^\infty G_n \right) = \lim_{n \to \infty} \mu(G_n)
> $$
> Với mỗi $k \ge n$, do $E_k \subseteq G_n$, theo tính chất đơn điệu của độ đo, ta có: $\mu(E_k) \le \mu(G_n)$.
> Lấy supremum các phần tử từ $n$ trở đi ở vế trái, ta được: $\sup_{k \ge n} \mu(E_k) \le \mu(G_n)$.
> Lấy giới hạn hai vế khi $n$ tiến ra vô cực:
> $$
> \limsup_{n \to \infty} \mu(E_n) = \lim_{n \to \infty} \left( \sup_{k \ge n} \mu(E_k) \right) \le \lim_{n \to \infty} \mu(G_n)
> $$
> Kết hợp các hệ thức trên, ta suy ra:
> $$
> \mu\left( \limsup_{n \to \infty} E_n \right) = \lim_{n \to \infty} \mu(G_n) \ge \limsup_{n \to \infty} \mu(E_n)
> $$
> Bổ đề được chứng minh hoàn tất.

> [!thm] (Giới hạn của độ đo khi tồn tại giới hạn tập hợp - Ý c)
> Nếu cả hai giới hạn $\lim_{n \to \infty} E_n$ và $\lim_{n \to \infty} \mu(E_n)$ đều tồn tại, thì:
> $$
> \mu\left( \lim_{n \to \infty} E_n \right) \le \lim_{n \to \infty} \mu(E_n)
> $$

> [!prf]
> Vì giới hạn của dãy tập hợp $\lim_{n \to \infty} E_n$ tồn tại, ta có: $\lim_{n \to \infty} E_n = \liminf_{n \to \infty} E_n$.
> Áp dụng trực tiếp Bổ đề Fatou cho tập hợp (ý a):
> $$
> \mu\left( \lim_{n \to \infty} E_n \right) = \mu\left( \liminf_{n \to \infty} E_n \right) \le \liminf_{n \to \infty} \mu(E_n)
> $$
> Mặt khác, vì giới hạn của dãy số $\lim_{n \to \infty} \mu(E_n)$ cũng tồn tại, nên giới hạn dưới của dãy bằng chính giới hạn đó: $\liminf_{n \to \infty} \mu(E_n) = \lim_{n \to \infty} \mu(E_n)$.
> Từ đó ta suy ra:
> $$
> \mu\left( \lim_{n \to \infty} E_n \right) \le \lim_{n \to \infty} \mu(E_n)
> $$

> [!thm] (Định lý hội tụ bị chặn cho tập hợp - Ý d)
> Nếu $\lim_{n \to \infty} E_n$ tồn tại và tồn tại $A \in \mathfrak{A}$ với $\mu(A) < \infty$, sao cho $E_n \subseteq A$ với mọi $n \in \mathbb{N}$, thì $\lim_{n \to \infty} \mu(E_n)$ tồn tại và:
> $$
> \mu\left( \lim_{n \to \infty} E_n \right) = \lim_{n \to \infty} \mu(E_n)
> $$

> [!prf]
> Vì $\lim_{n \to \infty} E_n$ tồn tại, ta có sự bằng nhau giữa giới hạn, giới hạn dưới và giới hạn trên:
> $$
> \lim_{n \to \infty} E_n = \liminf_{n \to \infty} E_n = \limsup_{n \to \infty} E_n
> $$
> Áp dụng Bổ đề Fatou (ý a):
> $$
> \mu\left( \lim_{n \to \infty} E_n \right) \le \liminf_{n \to \infty} \mu(E_n) \tag{1}
> $$
> Áp dụng Bổ đề Fatou ngược (ý b, thỏa mãn do có điều kiện bị chặn bởi tập $A$ với $\mu(A) < \infty$):
> $$
> \mu\left( \lim_{n \to \infty} E_n \right) \ge \limsup_{n \to \infty} \mu(E_n) \tag{2}
> $$
> Kết hợp (1) và (2), ta có chuỗi bất đẳng thức:
> $$
> \limsup_{n \to \infty} \mu(E_n) \le \mu\left( \lim_{n \to \infty} E_n \right) \le \liminf_{n \to \infty} \mu(E_n)
> $$
> Mà theo tính chất cơ bản của dãy số thực, ta luôn có $\liminf_{n \to \infty} \mu(E_n) \le \limsup_{n \to \infty} \mu(E_n)$.
> Điều này bắt buộc dấu bằng phải xảy ra ở toàn bộ chuỗi bất đẳng thức trên:
> $$
> \liminf_{n \to \infty} \mu(E_n) = \limsup_{n \to \infty} \mu(E_n) = \mu\left( \lim_{n \to \infty} E_n \right)
> $$
> Do giới hạn dưới và giới hạn trên bằng nhau, dãy số thực $\mu(E_n)$ hội tụ. Vậy $\lim_{n \to \infty} \mu(E_n)$ tồn tại và bằng $\mu\left( \lim_{n \to \infty} E_n \right)$.


> [!obs]
> 
> Trên không gian có độ đo vô hạn, việc hoán vị giữa hàm độ đo và giới hạn tập hợp $\mu(\lim E_n) = \lim \mu(E_n)$ không được bảo đảm. Bản chất là do khối lượng của tập hợp bị dịch chuyển ra ngoài biên vô cùng (Escaping mass).
> 
> Xét không gian độ đo Lebesgue $(\mathbb{R}, \mathfrak{M}_{L}, \mu_L)$. Ta định nghĩa dãy tập hợp:
> $$
> E_n = [n, n+1]
> $$
> Ta có $\mu_L(E_n) = 1$ với mọi $n \in \mathbb{N}$, nên giới hạn dãy số: $\lim_{n \to \infty} \mu_L(E_n) = 1$.
> Tuy nhiên, với một điểm $x \in \mathbb{R}$ bất kỳ, theo tính chất Archimedes, luôn tồn tại $N \in \mathbb{N}$ sao cho $N > x$. Do đó $x \notin [n, n+1]$ với mọi $n \ge N$.
> Vì không có điểm $x$ nào thuộc về vô hạn các tập $E_n$, ta suy ra:
> $$
> \limsup_{n \to \infty} E_n = \liminf_{n \to \infty} E_n = \emptyset
> $$
> Áp dụng hàm độ đo, ta được $\mu_L(\lim E_n) = \mu_L(\emptyset) = 0$. 
> Rõ ràng $0 \neq 1$. Khối lượng $\mu_L(E_n) = 1$ trượt ra vô cùng. 
> 
> Ta xét ví dụ và phản ví dụ cho các ý a b c d:
> a) Liên tục dưới ($A_n \uparrow A$): 
> Đẳng thức $\mu(\bigcup A_n) = \lim \mu(A_n)$ luôn đúng vì $A_n \subseteq A_{n+1}$ có khối lượng bị khóa trong $\bigcup A_n$ không bị trượt ra vô cùng.
> 
> b) Liên tục trên ($A_n \downarrow A$): 
> Bắt buộc cần điều kiện chặn $\mu(A_k) < \infty$. Nếu xét dãy trượt $A_n = [n, \infty) \downarrow \emptyset$, ta có ${} \bigcap A_n = \emptyset$ dẫn tới $\mu_L(\bigcap A_n) = 0 {}$. Tuy nhiên, khối lượng trượt ra vô cùng: ${} \mu_L(A_n) = \infty$ và $\lim \mu_L(A_n) = \infty {}$. 
> 
> c) Bổ đề Fatou cho tập hợp ($\mu(\liminf E_n) \le \liminf \mu(E_n)$):
> Sử dụng dãy $E_n = [n, n+1]$, vế trái ta có: $\mu_L(\emptyset) = 0$, vế phải: $\liminf 1 = 1$. Bất đẳng thức $0 \le 1$ đúng, phần chênh lệch thể hiện khối lượng thất thoát.
> 
> d) Bổ đề Fatou ngược ($\limsup \mu(E_n) \le \mu(\limsup E_n)$):
> Bắt buộc cần điều kiện $\mu(\bigcup E_n) < \infty$. Nếu xét dãy trượt $E_n = [n, n+1]$, ta có vế trái: $\limsup 1 = 1$, vế phải: $\mu_L(\emptyset) = 0$, dẫn tới vô lý.

> [!thm] (Bổ đề Borel-Cantelli thứ nhất)
> Cho dãy tập hợp $\{A_n\}_{n=1}^\infty$ trong $\mathfrak{A}$. Nếu $\sum_{n=1}^{\infty} \mu(A_n) < \infty$, thì:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = 0
> $$

> [!prf]
> Bằng định nghĩa của giới hạn trên tập hợp: $\limsup_{n \to \infty} A_n = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k$. 
> Đặt $E_n = \bigcup_{k=n}^\infty A_k$. Ta thấy $\{E_n\}_{n=1}^\infty$ là một dãy giảm. 
> Áp dụng tính $\sigma$-dưới cộng tính, ta đánh giá được tập đầu tiên:
> $$
> \mu(E_1) = \mu\left( \bigcup_{k=1}^\infty A_k \right) \le \sum_{k=1}^\infty \mu(A_k) < \infty
> $$
> Vì tồn tại $E_1$ có độ đo hữu hạn, ta đủ điều kiện áp dụng bổ đề Liên tục trên tổng quát cho dãy giảm $\{E_n\}$:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = \mu\left( \bigcap_{n=1}^\infty E_n \right) = \lim_{n \to \infty} \mu(E_n)
> $$
> Mặt khác, tiếp tục theo tính $\sigma$-dưới cộng tính:
> $$
> \mu(E_n) = \mu\left( \bigcup_{k=n}^\infty A_k \right) \le \sum_{k=n}^\infty \mu(A_k)
> $$
> Khi $n \to \infty$, vế phải là phần dư của một chuỗi số hội tụ nên nó sẽ tiến về 0. Do đó $\lim_{n \to \infty} \mu(E_n) = 0$. 
> Kết luận: $\mu\left( \limsup_{n \to \infty} A_n \right) = 0$.

> [!thm] (Bổ đề Borel-Cantelli thứ hai)
> Cho không gian xác suất $(X, \mathfrak{A}, \mu)$ với $\mu(X) = 1$. Giả sử $\{A_n\}_{n=1}^\infty$ là một dãy các tập hợp độc lập với nhau trong $\mathfrak{A}$. Nếu tổng các độ đo phân kỳ:
> $$
> \sum_{n=1}^{\infty} \mu(A_n) = \infty
> $$
> Thì độ đo của giới hạn trên bằng 1:
> $$
> \mu\left( \limsup_{n \to \infty} A_n \right) = 1
> $$

> [!prf]
> Xét tập hợp phần bù của giới hạn trên. Theo luật De Morgan và định nghĩa giới hạn trên, ta có:
> $$
> \left(\limsup_{n \to \infty} A_n\right)^c = \left(\bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k\right)^c = \bigcup_{n=1}^\infty \bigcap_{k=n}^\infty A_k^c = \liminf_{n \to \infty} A_n^c
> $$
> Đặt $G_n = \bigcap_{k=n}^\infty A_k^c$. Với mọi số nguyên $N > n$, ta xét tập hợp giao hữu hạn $G_{n,N} = \bigcap_{k=n}^N A_k^c$.
> Vì họ các tập hợp $\{A_n\}_{n=1}^\infty$ độc lập với nhau, họ các tập phần bù $\{A_n^c\}_{n=1}^\infty$ cũng độc lập với nhau. Áp dụng tính chất độc lập, độ đo của giao bằng tích các độ đo:
> $$
> \mu(G_{n,N}) = \mu\left(\bigcap_{k=n}^N A_k^c\right) = \prod_{k=n}^N \mu(A_k^c) = \prod_{k=n}^N (1 - \mu(A_k))
> $$
> Áp dụng bất đẳng thức đại số cơ bản $1 - x \le e^{-x}$ với mọi $x \ge 0$, ta có:
> $$
> \prod_{k=n}^N (1 - \mu(A_k)) \le \prod_{k=n}^N e^{-\mu(A_k)} = e^{-\sum_{k=n}^N \mu(A_k)}
> $$
> Cho chỉ số N tiến ra vô cực. Vì chuỗi số $\sum_{k=1}^\infty \mu(A_k) = \infty$, phần dư của chuỗi phân kỳ cũng phải phân kỳ, nghĩa là $\lim_{N \to \infty} \sum_{k=n}^N \mu(A_k) = \infty$.
> Do đó giới hạn của hàm số mũ tiến về 0: $\lim_{N \to \infty} e^{-\sum_{k=n}^N \mu(A_k)} = 0$.
> Mặt khác, dãy tập hợp hữu hạn $G_{n,N}$ giảm dần theo chỉ số N và tiến về tập giao vô hạn $G_n = \bigcap_{k=n}^\infty A_k^c$ khi N ra vô cực. Áp dụng bổ đề liên tục trên cho dãy giảm, điều kiện được thỏa mãn vì không gian có độ đo toàn phần hữu hạn bằng 1:
> $$
> \mu(G_n) = \lim_{N \to \infty} \mu(G_{n,N}) \le \lim_{N \to \infty} e^{-\sum_{k=n}^N \mu(A_k)} = 0
> $$
> Do độ đo luôn không âm, ta suy ra $\mu(G_n) = 0$ với mọi chỉ số n.
> Bây giờ, ta xét tập hợp phần bù $\liminf_{n \to \infty} A_n^c = \bigcup_{n=1}^\infty G_n$. Dãy tập hợp $G_n$ là một dãy tăng khi n tăng. Áp dụng định lý liên tục dưới cho dãy tăng này:
> $$
> \mu\left(\left(\limsup_{n \to \infty} A_n\right)^c\right) = \mu\left(\bigcup_{n=1}^\infty G_n\right) = \lim_{n \to \infty} \mu(G_n) = \lim_{n \to \infty} 0 = 0
> $$
> Cuối cùng, áp dụng tính chất trừ cho phần bù trong không gian có độ đo toàn phần bằng 1:
> $$
> \mu\left(\limsup_{n \to \infty} A_n\right) = \mu(X) - \mu\left(\left(\limsup_{n \to \infty} A_n\right)^c\right) = 1 - 0 = 1
> $$
> Định lý được chứng minh hoàn tất.

## c) Dãy độ đo

> [!prp] (Prob 1.23: Tổ hợp tuyến tính của các độ đo là một độ đo)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian đo. Với mỗi $k \in \mathbb{N}$, giả sử $\mu_k$ là một độ đo trên $\sigma$-đại số ${} \mathfrak{A} {}$ và $\alpha_k \ge 0$.  
> Định nghĩa một hàm tập $\mu$ trên $\mathfrak{A}$ bằng cách đặt  
> $$\mu = \sum_{k \in \mathbb{N}} \alpha_k \mu_k.$$  
> Khi đó $\mu$ là một độ đo trên $\mathfrak{A}$.

> [!prf]
> Ta cần chứng minh các tính chất thỏa định nghĩa độ đo: tính không âm, độ đo không và tính $\sigma$ - cộng tính:
> - Vì $\mu_{k}$ là độ đo trên $\mathfrak{A}$, ta có $\mu_{k} \ge 0$, vậy ${} \mu = \sum_{k \in \mathbb{N}}\alpha_{k} \mu_{k} \ge 0$.
> - Ta có $\mu_{k} = 0$ với mọi tập rỗng trên $X$, vậy $\mu(\emptyset) = \sum_{k \in \mathbb{N}} \alpha_{k} \mu_{k} = \sum_{k \in \mathbb{N}}\alpha_{k} \cdot 0 = 0$.
> - Lấy $E_{n}: n \in \mathbb{N}$ là dãy các tập rời nhau, ta có:
> $$
> \begin{align}
> \mu\left( \bigcup_{n = 1} ^{\infty} E_{n} \right) &=  \sum_{n=1}^{\infty} \alpha_{k} \cdot \mu_{k} \left( \bigcup_{n = 1} ^{\infty} E_{n} \right) \\ &=  \sum_{k=1}^{\infty} \alpha_{k} \left( \sum_{n=1}^{\infty}\mu_{k}(E_{n}) \right) \\ &=  \sum_{k=1}^{\infty} \sum_{n=1}^{\infty} \alpha_{k} \mu_{k} (E_{k}) \\ &= \sum_{n=1}^{\infty} (\sum_{k=1}^{\infty} \alpha_{k} \mu_{k} (E_{n})) \\ &= \sum_{n=1}^{\infty} \mu(E_{n}).
> \end{align}
> $$
> Vậy $\mu$ thỏa định nghĩa độ đo trên $\mathfrak{A}$.

> [!thm] (Bổ đề: Giới hạn của dãy độ đo tăng)
> Cho $\{\mu_n\}_{n \in \mathbb{N}}$ là một dãy các độ đo tăng trên không gian đo được ${} (X, \mathfrak{A}, \mu) {}$ (nghĩa là $\mu_n(A) \le \mu_{n+1}(A)$ với mọi $A \in \mathfrak{A}$). Khi đó, hàm tập hợp định nghĩa bởi:
> $$
> \mu(A) := \lim_{n \to \infty} \mu_n(A), \quad \forall A \in \mathfrak{A}
> $$
> là một độ đo trên ${} (X, \mathfrak{A}, \mu) {}$.

> [!prf]
> Để chứng minh $\mu$ là một độ đo, ta cần kiểm tra hai tiên đề: $\mu(\emptyset) = 0$ và tính $\sigma$-cộng tính.
> 
> (i) Kiểm tra $\mu(\emptyset) = 0$:
> Vì mỗi $\mu_n$ đều là một độ đo nên $\mu_n(\emptyset) = 0$ với mọi $n$. Do đó:
> $$
> \mu(\emptyset) = \lim_{n \to \infty} \mu_n(\emptyset) = \lim_{n \to \infty} 0 = 0
> $$
> 
> (ii) Kiểm tra tính $\sigma$-cộng tính:
> Cho $\{A_k\}_{k=1}^\infty$ là một họ các tập hợp rời nhau từng đôi một trong $\mathfrak{A}$. Đặt $A = \bigcup_{k=1}^\infty A_k$. Ta cần chứng minh $\mu(A) = \sum_{k=1}^\infty \mu(A_k)$.
> 
> *Chiều $(\ge)$:* Xét một số nguyên dương $m$ bất kỳ. Ta có:
> $$
> \sum_{k=1}^m \mu(A_k) = \sum_{k=1}^m \lim_{n \to \infty} \mu_n(A_k) = \lim_{n \to \infty} \sum_{k=1}^m \mu_n(A_k)
> $$
> *(Lưu ý: Ta được phép đưa giới hạn ra ngoài vì đây là tổng hữu hạn).*
> Vì $\mu_n$ là độ đo nên $\sum_{k=1}^m \mu_n(A_k) = \mu_n\left( \bigcup_{k=1}^m A_k \right)$. 
> Mà $\bigcup_{k=1}^m A_k \subseteq A$, áp dụng tính đơn điệu của độ đo $\mu_n$, ta có $\mu_n\left( \bigcup_{k=1}^m A_k \right) \le \mu_n(A)$.
> Lấy giới hạn $n \to \infty$ hai vế, ta được:
> $$
> \sum_{k=1}^m \mu(A_k) \le \lim_{n \to \infty} \mu_n(A) = \mu(A)
> $$
> Bất đẳng thức này đúng với mọi $m$ hữu hạn. Cho $m \to \infty$, ta thu được chiều thứ nhất:
> $$
> \sum_{k=1}^\infty \mu(A_k) \le \mu(A) \tag{1}
> $$
> 
> *Chiều $(\le)$:* Vì dãy $\{\mu_n\}$ là dãy tăng nên giới hạn của nó cũng chính là cận trên đúng (supremum). Do đó, với mọi $n$ và mọi $k$, ta luôn có $\mu_n(A_k) \le \mu(A_k)$.
> Áp dụng tính $\sigma$-cộng tính của độ đo $\mu_n$:
> $$
> \mu_n(A) = \mu_n\left( \bigcup_{k=1}^\infty A_k \right) = \sum_{k=1}^\infty \mu_n(A_k)
> $$
> Đánh giá từng số hạng trong tổng với bất đẳng thức vừa nêu, ta có:
> $$
> \mu_n(A) = \sum_{k=1}^\infty \mu_n(A_k) \le \sum_{k=1}^\infty \mu(A_k)
> $$
> Vế phải không còn phụ thuộc vào $n$. Lấy giới hạn $n \to \infty$ ở vế trái, ta thu được chiều thứ hai:
> $$
> \mu(A) \le \sum_{k=1}^\infty \mu(A_k) \tag{2}
> $$
> 
> Từ $(1)$ và $(2)$, ta kết luận $\mu(A) = \sum_{k=1}^\infty \mu(A_k)$. Vậy $\mu$ thỏa mãn tính $\sigma$-cộng tính và là một độ đo.

> [!thm] (Giới hạn của dãy độ đo giảm cần điều kiện độ đo hữu hạn)
> Cho $\{\mu_n\}_{n \in \mathbb{N}}$ là một dãy các độ đo giảm trên không gian đo được ${} (X, \mathfrak{A}, \mu) {}$ (nghĩa là $\mu_{n+1}(A) \le \mu_n(A)$ với mọi $A \in \mathfrak{A}$). 
> Nếu tồn tại một chỉ số $k$ sao cho: $\mu_k(X) < \infty$, thì hàm tập hợp định nghĩa bởi:
> $$
> \mu(A) := \lim_{n \to \infty} \mu_n(A), \quad \forall A \in \mathfrak{A}
> $$
> cũng là một độ đo trên ${} (X, \mathfrak{A}, \mu) {}$.

> [!prf]
> Không mất tính tổng quát, ta có thể giả sử $k=1$ (tức là $\mu_1(X) < \infty$), vì ta có thể bỏ qua hữu hạn các số hạng đầu mà không làm thay đổi giới hạn. Do $\mu_1(X) < \infty$ và dãy giảm, mọi $\mu_n(A)$ đều hữu hạn với mọi $A \in \mathfrak{A}$.
> 
> Ý tưởng chứng minh là lật ngược dãy độ đo giảm thành dãy độ đo tăng. 
> Với mỗi $n \ge 1$, ta định nghĩa một hàm tập hợp mới:
> $$
> \nu_n(A) = \mu_1(A) - \mu_n(A) \quad (\forall A \in \mathfrak{A})
> $$
> Vì $\mu_1$ và $\mu_n$ là các độ đo (hữu hạn), hiệu của chúng cũng thỏa mãn tính $\sigma$-cộng tính, nên $\nu_n$ là một độ đo.
> Mặt khác, do dãy $\mu_n$ giảm ($\mu_{n+1}(A) \le \mu_n(A)$), nên khi lấy dấu trừ, dãy $\nu_n$ trở thành một dãy độ đo tăng:
> $$
> \nu_n(A) \le \nu_{n+1}(A)
> $$
> Áp dụng định lý "Giới hạn của dãy độ đo tăng là một độ đo" (vừa chứng minh ở trên) cho dãy $\{\nu_n\}$, ta suy ra giới hạn $\nu(A) = \lim_{n \to \infty} \nu_n(A)$ cũng là một độ đo.
> 
> Thay định nghĩa $\nu_n$ vào giới hạn, ta có:
> $$
> \nu(A) = \lim_{n \to \infty} (\mu_1(A) - \mu_n(A)) = \mu_1(A) - \lim_{n \to \infty} \mu_n(A) = \mu_1(A) - \mu(A)
> $$
> Vì mọi đại lượng đều hữu hạn, ta chuyển vế: $\mu(A) = \mu_1(A) - \nu(A)$.
> Cuối cùng, vì $\mu_1$ và $\nu$ đều là các độ đo hữu hạn, hiệu của chúng $\mu$ cũng bảo toàn được tính $\sigma$-cộng tính. Vậy $\mu$ là một độ đo.

> [!obs] (Phản ví dụ: Dãy độ đo giảm không có điều kiện chặn)
> Nếu ta bỏ qua điều kiện $\mu_k(X) < \infty$, định lý về giới hạn của dãy độ đo giảm sẽ sai, tương tự như hiện tượng "khối lượng trượt ra vô cùng" (Escaping mass) đã được phân tích.
> 
> Xét không gian đo Lebesgue $(\mathbb{R}, \mathfrak{A}, \mu_L)$. Ta định nghĩa một dãy các hàm tập:
> $$
> \mu_n(A) = \mu_L(A \cap [n, \infty)) \quad (\forall A \in \mathfrak{A})
> $$
> Vì $\mu_L$ là độ đo, việc lấy giao với một tập cố định vẫn tạo ra một độ đo. Đồng thời, do $[n+1, \infty) \subset [n, \infty)$, ta dễ dàng thấy $\mu_{n+1}(A) \le \mu_n(A)$ với mọi tập $A$. Đây là một dãy độ đo giảm. 
> 
> Ta xét hàm giới hạn $\mu(A) = \lim_{n \to \infty} \mu_n(A)$. Ta chỉ ra nó không phải là độ đo vì vi phạm tính $\sigma$-cộng tính:
> 
> Xét một họ đếm được các tập rời nhau $A_k = [k, k+1)$ với $k \in \mathbb{N}^*$.
> Gọi $A = \bigcup_{k=1}^\infty A_k = [1, \infty)$:
> - Với mỗi $k$ cố định, khi chỉ số $n > k$, tập $A_k$ sẽ nằm hoàn toàn bên trái khoảng $[n, \infty)$, dẫn đến giao của chúng bằng rỗng: 
>   $\mu_n(A_k) = \mu_L(\emptyset) = 0$. 
>   Suy ra giới hạn $\mu(A_k) = \lim_{n \to \infty} 0 = 0$. Kéo theo tổng vô hạn: $\sum_{k=1}^\infty \mu(A_k) = 0$.
> 
> - Với tập hợp $A = [1, \infty)$, ta có:
>   $\mu_n(A) = \mu_L([1, \infty) \cap [n, \infty)) = \mu_L([n, \infty)) = \infty$.
>   Lấy giới hạn, ta được $\mu(A) = \lim_{n \to \infty} \infty = \infty$.
> 
> Rõ ràng ta có mâu thuẫn:
> $$\mu\left(\bigcup_{k=1}^\infty A_k\right) = \infty \neq 0 = \sum_{k=1}^\infty \mu(A_k)$$
> Hàm $\mu$ đã mất đi tính $\sigma$-cộng tính. Vậy điều kiện độ đo hữu hạn là không bỏ được.


$\xi$
# Bài toán Tổng quát hóa: Hội tụ tích phân trên tập con $E$ — Từ MCT đến Vitali

> [!info] Nguồn tham khảo và ý tưởng xây dựng
> Bài toán dưới đây tổng quát hóa **Theorem 1 (Prob 9.24)** và **Prob 9.17**: cả hai đều có cùng một câu hỏi gốc — biết hành vi hội tụ của $(f_n)$ và $\int_D f_n\,d\mu$ trên toàn miền $D$, hãy suy ra hội tụ $\int_E f_n\,d\mu \to \int_E f\,d\mu$ trên **mọi** tập con đo được $E\subset D$. Ta xây dựng một chuỗi các ý a)–j), mỗi ý sửa đúng **một** giả thiết so với ý liền trước — đi từ trường hợp dễ nhất (MCT) đến trường hợp tổng quát nhất (Vitali), xen kẽ các ý yêu cầu chứng minh và các ý yêu cầu phản ví dụ khi giả thiết bị làm yếu đi quá mức.

---

## Đề bài

> [!prob] (Bài toán tổng quát hóa)
> Cho $(X,\mathfrak A,\mu)$ là một không gian đo, $D\in\mathfrak A$, và $(f_n)_{n=1}^\infty$ là một dãy hàm số đo được, nhận giá trị thực mở rộng trên $D$, $f$ là một hàm đo được trên $D$ sao cho $f_n \to f$ hầu khắp nơi (a.e.) trên $D$. Trong mỗi ý dưới đây, ta **thêm hoặc thay đổi** một số giả thiết so với ý liền trước. Với mỗi ý, hãy chứng minh kết luận được nêu; nếu kết luận **sai**, hãy xây dựng một phản ví dụ cụ thể, đồng thời chỉ rõ giả thiết nào (so với ý liền trước) đã bị loại bỏ khiến kết luận sụp đổ.
>
> **a)** *(Nền tảng — MCT)* Giả sử thêm $f_n \ge 0$ và $f_n \uparrow f$ khắp nơi trên $D$ (tăng đơn điệu). Chứng minh rằng với mọi $E \in \mathfrak A$, $E\subset D$:
> $$\int_E f_n\,d\mu \to \int_E f\,d\mu$$
> và giải thích vì sao kết luận này không cần thêm bất kỳ điều kiện nào về $\mu(D)$.
>
> **b)** *(Bỏ tính đơn điệu — Prob 9.24)* Bỏ giả thiết tăng đơn điệu ở ý a), chỉ giữ $f_n \ge 0$ đo được, $f_n\to f$ a.e., và thêm giả thiết $\displaystyle\lim_{n\to\infty}\int_D f_n\,d\mu = \int_D f\,d\mu < \infty$. Chứng minh lại kết luận của ý a).
>
> **c)** *(Phản ví dụ)* Trong giả thiết của ý b), nếu bỏ điều kiện $\lim_n\int_D f_n\,d\mu=\int_D f\,d\mu$ (chỉ còn $f_n\ge0$ đo được, $f_n\to f$ a.e.), chứng minh kết luận có thể sai **ngay cả khi $E=D$**, bằng một phản ví dụ cụ thể.
>
> **d)** *(Mở rộng dấu bất kỳ, chặn một phía — Prob 9.17)* Bỏ giả thiết không âm. Cho $(f_n)$, $f$, $g$ là các hàm đo được, khả tích trên $D$, với $f_n\to f$ a.e. như giả thiết chung. Giả sử thêm:
> 1. tồn tại $g$ khả tích trên $D$ sao cho **hoặc** $f_n \ge g$ trên $D$ với *mọi* $n$, **hoặc** $f_n \le g$ trên $D$ với *mọi* $n$ (một chiều cố định, áp dụng đồng loạt cho toàn dãy);
> 2. $\displaystyle\lim_{n\to\infty}\int_D f_n\,d\mu = \int_D g\,d\mu$.
>
> Chứng minh: (i) $\int_D f\,d\mu = \int_D g\,d\mu$, và (ii) với mọi $E\in\mathfrak A$, $E\subset D$: $\int_E f_n\,d\mu \to \int_E f\,d\mu$.
>
> **e)** *(Phản ví dụ)* Trong giả thiết của ý d), nếu chiều bất đẳng thức trong điều kiện (1) **không cố định** cho toàn dãy (tức là không tồn tại $g$ nào làm cho TOÀN BỘ dãy cùng thỏa $f_n\ge g$, hoặc TOÀN BỘ dãy cùng thỏa $f_n\le g$), trong khi mọi giả thiết khác (hội tụ a.e., $\lim_n\int_D f_n\,d\mu=\int_D g\,d\mu$) vẫn đúng nguyên vẹn, chứng minh kết luận (ii) có thể sai, bằng một phản ví dụ cụ thể.
>
> **f)** *(Chặn hai phía bởi hàm cố định — DCT)* Thay điều kiện một phía của ý d) bằng chặn hai phía: tồn tại $g\in L^1(D)$ **cố định** sao cho $|f_n|\le g$ a.e. trên $D$ với mọi $n$ (không cần giả thiết $\lim_n\int_D f_n\,d\mu=\int_D g\,d\mu$ nữa — đây sẽ là *hệ quả*, không phải giả thiết). Chứng minh kết luận **mạnh hơn**:
> $$\int_D |f_n-f|\,d\mu \to 0$$
> và suy ra ngay kết luận (ii) của ý d) đúng **đều** theo $E$, nghĩa là:
> $$\sup_{E\in\mathfrak A,\,E\subset D} \left| \int_E f_n\,d\mu - \int_E f\,d\mu \right| \to 0$$
>
> **g)** *(Hàm trội biến thiên theo $n$ — Generalized DCT)* Thay $g$ cố định ở ý f) bằng một **dãy** $(g_n)$ không âm khả tích, $g_n \to g$ a.e., $|f_n|\le g_n$ với mọi $n$, và $\displaystyle\lim_{n\to\infty}\int_D g_n\,d\mu = \int_D g\,d\mu < \infty$. Chứng minh lại $\int_D|f_n-f|\,d\mu \to 0$.
>
> **h)** *(Bỏ hẳn hàm trội — Vitali)* Bỏ hoàn toàn giả thiết tồn tại hàm trội (cố định hay theo dãy) ở ý f)/g), thay bằng: $(f_n)\subset L^1(D)$ thỏa **khả tích đều** và **tính chặt**. Chứng minh lại $\int_D|f_n-f|\,d\mu\to0$. Sau đó, xây dựng (hoặc nêu lại) một ví dụ cụ thể thỏa giả thiết của ý h) nhưng **không** thỏa giả thiết của ý f)/g) (không tồn tại hàm trội khả tích nào, kể cả dãy $(g_n)$), để khẳng định ý h) tổng quát hóa **thực sự** (không chỉ hình thức) so với f) và g).
>
> **i)** *(Không gian đo vô hạn)* Giả sử $\mu(D)=\infty$. Trong các ý a)–h), ý nào vẫn đúng nguyên vẹn không cần sửa gì, ý nào cần loại bỏ vì không còn ý nghĩa? Cụ thể, hãy xây dựng một phản ví dụ cho thấy nếu ta thay giả thiết "khả tích đều + tính chặt" của ý h) bằng giả thiết tưởng chừng tương tự nhưng yếu hơn — "bị chặn đều bởi một hằng số $M$, và hội tụ **đều** (mạnh hơn a.e.)" — thì kết luận có thể sai khi $\mu(D)=\infty$.
>
> **j)** *(Nhận diện)* Trên $D=[1,\infty)\subset\mathbb R$ với độ đo Lebesgue, xét
> $$f_n(x) = \frac1n\chi_{[1,n]}(x) - \frac1n\chi_{[n,2n]}(x)$$
> Khảo sát hội tụ điểm, tính trực tiếp $\int_D f_n\,d\mu_L$, rồi xác định: đây **có phải** là một phản ví dụ cho kết luận dạng "$\int_D f_n\to\int_D f$" hay không? So sánh với phản ví dụ ở ý i), và rút ra kết luận tổng quát về quan hệ giữa "giả thiết của một định lý bị vi phạm" và "kết luận của định lý đó sai".

---

## Lời giải

> [!ans] (a) — MCT
> Vì $f_n\uparrow f$ khắp nơi trên $D$ và $f_n\ge0$, dãy hàm $(f_n\chi_E)$ cũng không âm và tăng: $f_n\chi_E \le f_{n+1}\chi_E$ (nhân hai vế bất đẳng thức $f_n\le f_{n+1}$ với $\chi_E\ge0$), và hội tụ điểm $f_n\chi_E \to f\chi_E$ tại mọi điểm của $D$ (tại $x\in E$: $f_n(x)\to f(x)$ theo giả thiết; tại $x\notin E$: cả hai vế đều $=0$). Áp dụng MCT trực tiếp cho dãy $(f_n\chi_E)$:
> $$\int_D f_n\chi_E\,d\mu \to \int_D f\chi_E\,d\mu \iff \int_E f_n\,d\mu \to \int_E f\,d\mu$$
> **Vì sao không cần $\mu(D)<\infty$**: toàn bộ chứng minh gốc của MCT (hai chiều bất đẳng thức, dùng đơn điệu tích phân và liên tục từ dưới của độ đo $\nu(A)=\int_A\varphi\,d\mu$ với $\varphi$ đơn giản) không sử dụng đến độ lớn của $\mu(D)$ ở bất kỳ bước nào — chỉ cần tính tăng đơn điệu của dãy hàm là đủ kiểm soát giới hạn, bất kể không gian hữu hạn hay vô hạn đo. $\blacksquare$

---

> [!ans] (b) — Fatou + Prob 9.24
> Đặt $E^c = D\setminus E$. Vì $f_n\to f$ a.e. trên $D$ kéo theo hội tụ a.e. trên mọi tập con, áp Bổ đề Fatou riêng cho $(f_n)$ trên $E$ và trên $E^c$ (đều là dãy không âm đo được):
> $$\int_E f\,d\mu \le \liminf_n \int_E f_n\,d\mu \tag{1}$$
> $$\int_{E^c} f\,d\mu \le \liminf_n \int_{E^c} f_n\,d\mu \tag{2}$$
> Theo tính cộng tính, $\int_E f_n\,d\mu = \int_D f_n\,d\mu - \int_{E^c} f_n\,d\mu$. Lấy $\limsup$ hai vế, và vì $\int_D f_n\,d\mu \to \int_D f\,d\mu$ (giới hạn thực sự tồn tại hữu hạn theo giả thiết), ta tách được:
> $$\limsup_n \int_E f_n\,d\mu = \int_D f\,d\mu - \liminf_n \int_{E^c} f_n\,d\mu \overset{(2)}{\le} \int_D f\,d\mu - \int_{E^c} f\,d\mu = \int_E f\,d\mu \tag{3}$$
> Kết hợp $(1)$ và $(3)$: $\int_E f\,d\mu \le \liminf_n\int_E f_n\,d\mu \le \limsup_n\int_E f_n\,d\mu \le \int_E f\,d\mu$ — kẹp chặt, suy ra $\lim_n\int_E f_n\,d\mu = \int_E f\,d\mu$. $\blacksquare$

---

> [!ans] (c) — Phản ví dụ: thiếu hội tụ tích phân toàn cục
> Trên $D=[0,1]$ với độ đo Lebesgue, đặt $f_n = n\,\chi_{(0,1/n)}$.
>
> $f_n\ge0$ đo được. Với $x>0$ cố định, khi $n>1/x$ thì $x\notin(0,1/n)$ nên $f_n(x)=0$; vậy $f_n\to0$ a.e. trên $D$ (chỉ trừ $x=0$, độ đo $0$), tức $f\equiv0$.
>
> Nhưng $\int_D f_n\,d\mu_L = n\cdot\frac1n = 1$ với mọi $n$, nên $\int_D f_n\,d\mu_L \to 1 \ne 0 = \int_D f\,d\mu_L$.
>
> Ngay tại $E=D$, kết luận đã sai — không cần xét $E$ thực sự nhỏ hơn $D$. Đây chính là cơ chế "khối lượng trượt theo phương dọc" (chiều cao $n\to\infty$ trong khi bề rộng $1/n\to0$, giữ nguyên diện tích $=1$): không có gì trong giả thiết còn lại ngăn cản hiện tượng này, xác nhận giả thiết "$\lim_n\int_D f_n=\int_D f$" trong ý b) là **không thể bỏ**. $\blacksquare$

---

> [!ans] (d) — Prob 9.17, dùng kỹ thuật quy về ý (b)
> Không mất tổng quát, xét trường hợp $f_n \ge g$ với mọi $n$ (trường hợp $f_n\le g$ suy ra hoàn toàn tương tự bằng cách xét $-f_n, -f, -g$).
>
> Đặt $h_n = f_n - g$. Vì $f_n, g$ khả tích nên hữu hạn h.k.n, phép trừ hợp lệ a.e.; và $h_n \ge 0$ a.e. trên $D$ theo giả thiết (1). Vì $g$ cố định và $f_n\to f$ a.e., ta có $h_n \to h := f-g$ a.e.
>
> **Chứng minh (i)**: theo tính cộng tính, $\int_D h_n\,d\mu = \int_D f_n\,d\mu - \int_D g\,d\mu \to \int_D g\,d\mu - \int_D g\,d\mu = 0$ (dùng giả thiết (2)). Vì $h_n\ge0$, áp Bổ đề Fatou:
> $$\int_D h\,d\mu \le \liminf_n \int_D h_n\,d\mu = 0$$
> Mặt khác $h=f-g\ge0$ a.e. (giới hạn của dãy không âm), nên $\int_D h\,d\mu\ge0$. Vậy $\int_D h\,d\mu=0$, tức:
> $$\int_D f\,d\mu - \int_D g\,d\mu = 0 \implies \int_D f\,d\mu = \int_D g\,d\mu$$
>
> **Chứng minh (ii)**: dãy $(h_n)$ thỏa đúng giả thiết của ý b): không âm đo được, $h_n\to h$ a.e., và $\int_D h_n\,d\mu\to0=\int_D h\,d\mu$ (vừa chứng minh, hữu hạn). Áp kết luận ý b) cho $(h_n)$: với mọi $E\in\mathfrak A$, $E\subset D$:
> $$\int_E h_n\,d\mu \to \int_E h\,d\mu$$
> Cộng $\int_E g\,d\mu$ (hữu hạn, không đổi theo $n$) vào hai vế:
> $$\int_E f_n\,d\mu = \int_E h_n\,d\mu + \int_E g\,d\mu \to \int_E h\,d\mu + \int_E g\,d\mu = \int_E (h+g)\,d\mu = \int_E f\,d\mu \qquad \blacksquare$$
>
> *(Nhận xét: chứng minh trên cho thấy Prob 9.17 không phải một kết quả độc lập, mà là Prob 9.24 "ngụy trang" — phép trừ $h_n=f_n-g$ chính là chìa khóa quy đổi.)*

---

> [!ans] (e) — Phản ví dụ: thiếu tính nhất quán một chiều
> Trên $D=[0,1]$, lấy $g\equiv0$, và đặt:
> $$f_n(x) = n\,\chi_{(0,\,1/n)}(x) \;-\; n\,\chi_{(1-1/n,\,1)}(x)$$
> (một xung dương co lại gần $x=0$, một xung âm co lại gần $x=1$, cả hai có "khối lượng" $|{\cdot}|=1$).
>
> **Vi phạm điều kiện (1) một cách triệt để**: với **mỗi** $n$ riêng lẻ, $f_n$ vừa nhận giá trị dương ($=n$ trên xung gần $0$) vừa nhận giá trị âm ($=-n$ trên xung gần $1$), nên $f_n \ge g=0$ **không** đúng trên toàn $D$ (sai tại xung âm), và $f_n\le g=0$ **không** đúng trên toàn $D$ (sai tại xung dương) — không có chiều nào đúng cho dù chỉ một $n$, nói gì đến toàn dãy.
>
> **Các giả thiết khác vẫn đúng**: với $x\in(0,1)$ cố định, hai xung co lại về $0$ và $1$ nên với $n$ đủ lớn, $x$ không thuộc xung nào, $f_n(x)=0$ — vậy $f_n\to f\equiv0$ a.e. trên $D$. Và $\int_D f_n\,d\mu_L = n\cdot\frac1n - n\cdot\frac1n = 1-1=0$ với **mọi** $n$ (không chỉ trong giới hạn), nên $\lim_n\int_D f_n\,d\mu_L = 0 = \int_D g\,d\mu_L$ — giả thiết (2) thỏa mãn hoàn hảo.
>
> **Kết luận (ii) sai tại $E=[0,\frac12]$**: với $n\ge3$, xung dương $(0,1/n)\subset(0,1/2)=E$ (toàn bộ nằm trong $E$), còn xung âm $(1-1/n,1)\subset(1/2,1)$ nằm hoàn toàn **ngoài** $E$. Vậy:
> $$\int_E f_n\,d\mu_L = n\cdot\frac1n - 0 = 1 \quad (\forall n\ge3)$$
> nên $\int_E f_n\,d\mu_L \to 1$, trong khi $\int_E f\,d\mu_L = \int_E 0\,d\mu_L = 0$. Vậy $1\ne0$: kết luận (ii) thất bại tại $E=[0,1/2]$, dù (i) (trường hợp $E=D$) vẫn đúng một cách tình cờ ($\int_D f=0=\int_D g$). Điều này cho thấy điều kiện "một chiều cố định" trong giả thiết (1) của ý d) không chỉ là tiện lợi kỹ thuật mà thực sự **cần thiết** để đảm bảo kết luận đúng trên **mọi** $E$, không riêng $E=D$. $\blacksquare$

---

> [!ans] (f) — DCT và hệ quả đều theo $E$
> **Phần $\int_D|f_n-f|\,d\mu\to0$** (DCT, dạng mạnh): vì $|f_n|\le g$ a.e. và $f_n\to f$ a.e., suy ra $|f|\le g$ a.e., nên $|f_n-f|\le|f_n|+|f|\le2g$ a.e. Xét $k_n = 2g-|f_n-f|\ge0$ a.e. Áp Bổ đề Fatou:
> $$\int_D \liminf_n k_n\,d\mu \le \liminf_n \int_D k_n\,d\mu$$
> Vì $f_n\to f$ a.e. nên $|f_n-f|\to0$ a.e., suy ra $\liminf_n k_n = 2g$ a.e., vế trái $=\int_D 2g\,d\mu$. Vế phải tách tuyến tính (hợp lệ vì $\int_D g\,d\mu<\infty$):
> $$\int_D 2g\,d\mu \le \int_D 2g\,d\mu - \limsup_n\int_D|f_n-f|\,d\mu \implies \limsup_n \int_D|f_n-f|\,d\mu \le 0$$
> Vì tích phân hàm không âm luôn $\ge0$, suy ra $\lim_n\int_D|f_n-f|\,d\mu=0$.
>
> **Hệ quả đều theo $E$**: với mọi $E\in\mathfrak A$, $E\subset D$, theo tính đơn điệu của tích phân áp cho trị tuyệt đối:
> $$\left|\int_E f_n\,d\mu - \int_E f\,d\mu\right| = \left|\int_E(f_n-f)\,d\mu\right| \le \int_E|f_n-f|\,d\mu \le \int_D|f_n-f|\,d\mu$$
> Chặn trên cùng $\int_D|f_n-f|\,d\mu\to0$ **không phụ thuộc vào $E$**, nên:
> $$\sup_{E\in\mathfrak A,\,E\subset D}\left|\int_E f_n\,d\mu-\int_E f\,d\mu\right| \le \int_D|f_n-f|\,d\mu \to 0 \qquad \blacksquare$$
> *(So sánh với ý b)/d): ở đó ta phải chứng minh hội tụ riêng cho từng $E$ bằng kỹ thuật Fatou "kẹp hai phía $E, E^c$"; ở đây, nhờ có hàm trội cố định, ta được hội tụ $L^1$ trên toàn $D$ một lần, rồi suy ra **miễn phí và đều** cho mọi $E$ cùng lúc — đây chính là sức mạnh thực sự của DCT so với chỉ riêng Fatou.)*

---

> [!ans] (g) — Generalized DCT
> Vì $|f_n|\le g_n$ và $|f|\le g$ (lấy giới hạn a.e. của bất đẳng thức, dùng $g_n\to g$ a.e.), nên $|f_n-f|\le|f_n|+|f|\le g_n+g$ a.e. Xét $k_n = g_n+g-|f_n-f|\ge0$ a.e., áp Fatou:
> $$\int_D \liminf_n k_n\,d\mu \le \liminf_n \int_D k_n\,d\mu$$
> Vế trái: $\liminf_n k_n = g+g-0=2g$ a.e. (vì $g_n\to g$, $|f_n-f|\to0$ a.e.), nên vế trái $=2\int_D g\,d\mu$.
>
> Vế phải: $\int_D k_n\,d\mu = \int_D g_n\,d\mu+\int_D g\,d\mu-\int_D|f_n-f|\,d\mu$. Vì $\int_D g_n\,d\mu\to\int_D g\,d\mu$ (giới hạn thực sự, theo giả thiết), dùng tính chất $\liminf(a_n-b_n)=A-\limsup b_n$ khi $a_n\to A$ hữu hạn:
> $$\liminf_n\int_D k_n\,d\mu = \int_D g\,d\mu+\int_D g\,d\mu - \limsup_n\int_D|f_n-f|\,d\mu = 2\int_D g\,d\mu - \limsup_n\int_D|f_n-f|\,d\mu$$
> Kết hợp hai vế: $2\int_D g\,d\mu \le 2\int_D g\,d\mu - \limsup_n\int_D|f_n-f|\,d\mu \implies \limsup_n\int_D|f_n-f|\,d\mu\le0$, suy ra $\lim_n\int_D|f_n-f|\,d\mu=0$ (vì luôn $\ge0$). $\blacksquare$
>
> *(Kết luận đều theo $E$ — như ở ý f) — suy ra ngay lập tức bằng đúng lập luận $\left|\int_E f_n-\int_E f\right|\le\int_D|f_n-f|$.)*

---

> [!ans] (h) — Vitali
> **Chứng minh $\int_D|f_n-f|\,d\mu\to0$**: cho $\varepsilon>0$. Theo Tight, $\exists B_\varepsilon$, $\mu(B_\varepsilon)<\infty$: $\int_{B_\varepsilon^c}|f_n|\,d\mu<\varepsilon\ \forall n$ (và áp Fatou cho $|f|\le\liminf|f_n|$ trên $B_\varepsilon^c$ cũng cho $\int_{B_\varepsilon^c}|f|\,d\mu\le\varepsilon$). Theo UI, $\exists\delta>0$: $\mu(A)<\delta\implies\int_A|f_n|\,d\mu<\varepsilon\ \forall n$ (tương tự $\int_A|f|\,d\mu\le\varepsilon$). Áp Định lý Egorov trên $B_\varepsilon$ (độ đo hữu hạn): $\exists A_\varepsilon\subset B_\varepsilon$, $\mu(A_\varepsilon)<\delta$, $f_n\to f$ đều trên $B_\varepsilon\setminus A_\varepsilon$. Tách:
> $$\int_D|f_n-f|\,d\mu = \int_{B_\varepsilon^c}|f_n-f|\,d\mu + \int_{A_\varepsilon}|f_n-f|\,d\mu + \int_{B_\varepsilon\setminus A_\varepsilon}|f_n-f|\,d\mu$$
> Hai số hạng đầu $\le 2\varepsilon$ mỗi số hạng (bất đẳng thức tam giác $|f_n-f|\le|f_n|+|f|$, áp các đánh giá UI/Tight ở trên cho cả $f_n$ và $f$); số hạng thứ ba $\to0$ vì hội tụ đều trên tập độ đo hữu hạn. Lấy $\limsup_n$, rồi $\varepsilon\to0$: $\lim_n\int_D|f_n-f|\,d\mu=0$.
>
> **Ví dụ thỏa h) nhưng không thỏa f)/g)**: trên $\mathbb R$, $f_n = n\cdot\chi_{[1/n,\,1/n+1/n^2)}$. Vì $\int_{\mathbb R}|f_n|\,d\mu_L=n\cdot\frac1{n^2}=\frac1n\to0$, dãy này thỏa UI và Tight (khối lượng tự triệt tiêu đều, kiểm tra trực tiếp từ định nghĩa). Nhưng vì các khoảng mang $f_n$ rời nhau với $n$ đủ lớn, $\sup_n f_n = \sum_n n\chi_{[1/n,1/n+1/n^2)}$, và $\int_{\mathbb R}\sup_n f_n\,d\mu_L = \sum_n n\cdot\frac1{n^2}=\sum_n\frac1n=\infty$ — không tồn tại hàm trội khả tích $h$ nào thỏa $f_n\le h$ (vì $h\ge\sup_n f_n$ buộc $\int h=\infty$), nên giả thiết của f) không thỏa; tương tự không có dãy $(g_n)$ tích phân hội tụ nào làm trội được (mọi cách "gom" $f_n$ vào một dãy trội hợp lý đều phải đối diện đúng vấn đề chuỗi điều hòa phân kỳ này). Vậy h) tổng quát hóa thực sự f) và g). $\blacksquare$

---

> [!ans] (i) — Không gian đo vô hạn: rà soát từng ý
> **Tự động đúng không cần sửa** (không hề dùng $\mu(D)<\infty$ trong chứng minh): a) MCT, b) Fatou/Prob 9.24, d) Prob 9.17 (vì quy về b qua phép trừ), f) DCT, g) Generalized DCT. Tất cả các định lý này được xây dựng từ Fatou/MCT thuần túy hoặc đòi hỏi hàm trội tự thân khả tích — không bao giờ cần đến độ lớn của $\mu(D)$.
>
> **Cần điều kiện thay thế khi $\mu(D)=\infty$**: h) Vitali — Tight không còn tự động đúng (Nhận xét 2 chỉ áp dụng khi $\mu(D)<\infty$); phải kiểm tra Tight một cách tường minh.
>
> **Phản ví dụ cho phiên bản suy yếu của h)**: trên $D=[1,\infty)$, đặt $f_n(x) = \frac1n\chi_{[1,n]}(x)$.
> - Bị chặn đều bởi $M=1$: $0\le f_n\le1$ với mọi $n,x$. ✓
> - Hội tụ đều (mạnh hơn a.e.) về $f\equiv0$: $\sup_{x\in D}|f_n(x)| = \frac1n\to0$, không phụ thuộc $x$. ✓
> - Nhưng $\int_D f_n\,d\mu_L = \frac1n\cdot(n-1) = 1-\frac1n \to 1 \ne 0 = \int_D f\,d\mu_L$.
>
> Vậy "bị chặn đều bởi hằng số + hội tụ đều" — nhìn qua tưởng chừng còn mạnh hơn cả UI+Tight (vì hội tụ đều là điều kiện rất mạnh) — **vẫn không đủ** để thay thế UI+Tight khi $\mu(D)=\infty$, vì bản thân hằng số $M=1$ không khả tích trên $D$ vô hạn, nên Tight thực sự thất bại ở đây (kiểm tra trực tiếp: với bất kỳ $B$ có $\mu(B)<\infty$, phần đuôi $\int_{B^c}|f_n|\,d\mu_L \to \frac1n\cdot\mu([1,n]\setminus B)$ không bị chặn đều khi $n\to\infty$ vượt khỏi $B$). Đây chính là phản ví dụ Prob 8.10 đã gặp, nay được dùng để minh họa rằng Tight là điều kiện *thực sự độc lập*, không tự động suy ra từ "bị chặn $+$ hội tụ đều" trên không gian vô hạn. $\blacksquare$

---

> [!ans] (j) — Nhận diện: KHÔNG phải phản ví dụ
> **Hội tụ điểm**: cố định $x\ge1$. Với $n>x$, ta có $x\in[1,n]$ (vì $1\le x<n$) nên số hạng thứ nhất $=\frac1n\to0$; đồng thời $x\notin[n,2n]$ (vì $x<n$) nên số hạng thứ hai $=0$. Vậy $f_n(x)\to0$ tại **mọi** điểm $x\ge1$ — hội tụ điểm thực sự, không chỉ a.e.
>
> **Tính trực tiếp**: $\mu_L([1,n])=n-1$, $\mu_L([n,2n])=n$, nên:
> $$\int_D f_n\,d\mu_L = \frac{n-1}{n} - \frac{n}{n} = \left(1-\frac1n\right)-1 = -\frac1n \to 0 = \int_D f\,d\mu_L$$
>
> **Kết luận: ĐÂY KHÔNG PHẢI phản ví dụ** — kết luận "$\int_D f_n\to\int_D f$" hoàn toàn đúng, mặc dù cấu trúc bề ngoài rất giống ý i) (cùng $|f_n|\le\frac1n\to0$ đều, cùng $\mu(D)=\infty$).
>
> **So sánh với ý i)**: ở ý i), $f_n=\frac1n\chi_{[1,n]}$ có khối lượng dương tích lũy mãi ($\int_D f_n=1-\frac1n\to1$) vì không có gì triệt tiêu nó. Ở đây, số hạng thứ hai ($-\frac1n\chi_{[n,2n]}$) đóng vai trò triệt tiêu chính xác phần dư $1-\frac1n$ thành $-\frac1n$ — đây là cơ chế "đuôi bù trừ" (telescoping), một cấu trúc đại số đặc thù chứ không phải hệ quả của một định lý hội tụ tổng quát nào.
>
> **Bài học tổng quát**: việc một dãy hàm **không thỏa mãn giả thiết** của một định lý (ở đây: không có hàm trội khả tích cố định, $\mu(D)=\infty$ nên BCT không áp dụng được, và thậm chí Tight cũng cần kiểm tra lại nếu muốn dùng Vitali) **không đồng nghĩa** với việc kết luận của định lý đó phải sai — định lý chỉ đảm bảo kết luận đúng *khi* giả thiết được thỏa, không nói gì về điều gì xảy ra khi giả thiết không được thỏa. Phản ví dụ thực sự (như ý c), e), i)) đòi hỏi *xây dựng tường minh* một trường hợp kết luận sụp đổ, chứ không thể suy luận chỉ từ việc "giả thiết bị vi phạm". $\blacksquare$

---

## Bảng tra cứu nhanh

| Ý | Giả thiết thêm/đổi so với ý trước | Định lý vận dụng | Loại câu hỏi |
|---|---|---|---|
| a) | $f_n\ge0$, $f_n\uparrow f$ khắp nơi | MCT | Chứng minh |
| b) | bỏ đơn điệu, thêm $\int_D f_n\to\int_D f<\infty$ | Fatou (2 chiều, kẹp $E$/$E^c$) | Chứng minh (Prob 9.24) |
| c) | bỏ $\int_D f_n\to\int_D f$ | — | Phản ví dụ |
| d) | bỏ không âm, thêm chặn 1 phía bởi $g$ + $\int f_n\to\int g$ | Quy về b) qua $h_n=f_n-g$ | Chứng minh (Prob 9.17) |
| e) | bỏ tính nhất quán chiều chặn | — | Phản ví dụ |
| f) | chặn 2 phía bởi $g\in L^1$ cố định | DCT (qua Fatou cho $2g-|f_n-f|$) | Chứng minh + tăng cường (đều theo $E$) |
| g) | $g$ cố định → dãy $g_n$, $\int g_n\to\int g$ | Generalized DCT | Chứng minh |
| h) | bỏ hàm trội, thêm UI + Tight | Vitali (qua Egorov) | Chứng minh + ví dụ phân biệt |
| i) | $\mu(D)=\infty$ | rà soát toàn bộ a)–h) | Thảo luận + phản ví dụ |
| j) | ví dụ cụ thể, $\mu(D)=\infty$ | đối chiếu BCT/Vitali | Nhận diện (không phải phản ví dụ) |

# Bài toán Tổng quát hóa: Hội tụ tích phân trên tập con $E$ — Từ MCT đến Vitali

## Đề bài

> [!prob] (Bài toán tổng quát hóa)
> Cho $(X,\mathfrak A,\mu)$ là một không gian đo, $D\in\mathfrak A$, và $(f_n)_{n=1}^\infty$ là một dãy hàm số đo được, nhận giá trị thực mở rộng trên $D$, $f$ là một hàm đo được trên $D$ sao cho $f_n \to f$ hầu khắp nơi (a.e.) trên $D$. Trong mỗi ý dưới đây, ta **thêm hoặc thay đổi** một số giả thiết so với ý liền trước. Với mỗi ý, hãy chứng minh kết luận được nêu; nếu kết luận **sai**, hãy xây dựng một phản ví dụ cụ thể, đồng thời chỉ rõ giả thiết nào (so với ý liền trước) đã bị loại bỏ khiến kết luận sụp đổ.
>
> **a)** *(Nền tảng — MCT)* Giả sử thêm $f_n \ge 0$ và $f_n \uparrow f$ khắp nơi trên $D$ (tăng đơn điệu). Chứng minh rằng với mọi $E \in \mathfrak A$, $E\subset D$:
> $$\int_E f_n\,d\mu \to \int_E f\,d\mu$$
> và giải thích vì sao kết luận này không cần thêm bất kỳ điều kiện nào về $\mu(D)$.
>
> **b)** *(Bỏ tính đơn điệu — Prob 9.24)* Bỏ giả thiết tăng đơn điệu ở ý a), chỉ giữ $f_n \ge 0$ đo được, $f_n\to f$ a.e., và thêm giả thiết $\displaystyle\lim_{n\to\infty}\int_D f_n\,d\mu = \int_D f\,d\mu < \infty$. Chứng minh lại kết luận của ý a) bằng cách dựng dãy đơn điệu tăng từ hàm đáy.
>
> **c)** *(Phản ví dụ)* Trong giả thiết của ý b), nếu bỏ điều kiện $\lim_n\int_D f_n\,d\mu=\int_D f\,d\mu$ (chỉ còn $f_n\ge0$ đo được, $f_n\to f$ a.e.), chứng minh kết luận có thể sai **ngay cả khi $E=D$**, bằng một phản ví dụ cụ thể.
>
> **d)** *(Mở rộng dấu bất kỳ, chặn một phía — Prob 9.17)* Bỏ giả thiết không âm. Cho $(f_n)$, $f$, $g$ là các hàm đo được, khả tích trên $D$, với $f_n\to f$ a.e. như giả thiết chung. Giả sử thêm:
> 1. tồn tại $g$ khả tích trên $D$ sao cho **hoặc** $f_n \ge g$ trên $D$ với *mọi* $n$, **hoặc** $f_n \le g$ trên $D$ với *mọi* $n$ (một chiều cố định, áp dụng đồng loạt cho toàn dãy);
> 2. $\displaystyle\lim_{n\to\infty}\int_D f_n\,d\mu = \int_D g\,d\mu$.
>
> Chứng minh: (i) $\int_D f\,d\mu = \int_D g\,d\mu$, và (ii) với mọi $E\in\mathfrak A$, $E\subset D$: $\int_E f_n\,d\mu \to \int_E f\,d\mu$.
>
> **e)** *(Phản ví dụ)* Trong giả thiết của ý d), nếu chiều bất đẳng thức trong điều kiện (1) **không cố định** cho toàn dãy (tức là không tồn tại $g$ nào làm cho TOÀN BỘ dãy cùng thỏa $f_n\ge g$, hoặc TOÀN BỘ dãy cùng thỏa $f_n\le g$), trong khi mọi giả thiết khác (hội tụ a.e., $\lim_n\int_D f_n\,d\mu=\int_D g\,d\mu$) vẫn đúng nguyên vẹn, chứng minh kết luận (ii) có thể sai, bằng một phản ví dụ cụ thể.
>
> **f)** *(Chặn hai phía bởi hàm cố định — DCT)* Thay điều kiện một phía của ý d) bằng chặn hai phía: tồn tại $g\in L^1(D)$ **cố định** sao cho $|f_n|\le g$ a.e. trên $D$ với mọi $n$ (không cần giả thiết $\lim_n\int_D f_n\,d\mu=\int_D g\,d\mu$ nữa — đây sẽ là *hệ quả*, không phải giả thiết). Chứng minh kết luận **mạnh hơn**:
> $$\int_D |f_n-f|\,d\mu \to 0$$
> và suy ra ngay kết luận (ii) của ý d) đúng **đều** theo $E$, nghĩa là:
> $$\sup_{E\in\mathfrak A,\,E\subset D} \left| \int_E f_n\,d\mu - \int_E f\,d\mu \right| \to 0$$
>
> **g)** *(Hàm trội biến thiên theo $n$ — Generalized DCT)* Thay $g$ cố định ở ý f) bằng một **dãy** $(g_n)$ không âm khả tích, $g_n \to g$ a.e., $|f_n|\le g_n$ với mọi $n$, và $\displaystyle\lim_{n\to\infty}\int_D g_n\,d\mu = \int_D g\,d\mu < \infty$. Chứng minh lại $\int_D|f_n-f|\,d\mu \to 0$.
>
> **h)** *(Bỏ hẳn hàm trội — Vitali)* Bỏ hoàn toàn giả thiết tồn tại hàm trội (cố định hay theo dãy) ở ý f)/g), thay bằng: $(f_n)\subset L^1(D)$ thỏa **khả tích đều** và **tính chặt**. Chứng minh lại $\int_D|f_n-f|\,d\mu\to0$. Sau đó, xây dựng (hoặc nêu lại) một ví dụ cụ thể thỏa giả thiết của ý h) nhưng **không** thỏa giả thiết của ý f)/g) (không tồn tại hàm trội khả tích nào, kể cả dãy $(g_n)$), để khẳng định ý h) tổng quát hóa **thực sự** (không chỉ hình thức) so với f) và g).
>
> **i)** *(Không gian đo vô hạn)* Giả sử $\mu(D)=\infty$. Trong các ý a)–h), ý nào vẫn đúng nguyên vẹn không cần sửa gì, ý nào cần loại bỏ vì không còn ý nghĩa? Cụ thể, hãy xây dựng một phản ví dụ cho thấy nếu ta thay giả thiết "khả tích đều + tính chặt" của ý h) bằng giả thiết tưởng chừng tương tự nhưng yếu hơn — "bị chặn đều bởi một hằng số $M$, và hội tụ **đều** (mạnh hơn a.e.)" — thì kết luận có thể sai khi $\mu(D)=\infty$.
>
> **j)** *(Nhận diện)* Trên $D=[1,\infty)\subset\mathbb R$ với độ đo Lebesgue, xét
> $$f_n(x) = \frac1n\chi_{[1,n]}(x) - \frac1n\chi_{[n,2n]}(x)$$
> Khảo sát hội tụ điểm, tính trực tiếp $\int_D f_n\,d\mu_L$, rồi xác định: đây **có phải** là một phản ví dụ cho kết luận dạng "$\int_D f_n\to\int_D f$" hay không? So sánh với phản ví dụ ở ý i), và rút ra kết luận tổng quát về quan hệ giữa "giả thiết của một định lý bị vi phạm" và "kết luận của định lý đó sai".

---

## Lời giải Hệ thống hóa (Triết lý lấy cấu trúc Đơn điệu tăng làm gốc)

> [!ans] (a) — Nền móng vững chắc bằng MCT
> **Chứng minh:**
> Thiết lập dãy hàm phụ thông qua hàm chỉ thị của tập con $E$: $h_n(x) = f_n(x)\chi_E(x)$. 
> Ta kiểm tra các điều kiện cấu trúc:
> - **Tính không âm:** Do $f_n \ge 0$ và $\chi_E \ge 0$, ta có $h_n \ge 0$ trên $D$.
> - **Tính đơn điệu tăng:** Với mọi $x \in D$, do $f_n(x) \le f_{n+1}(x)$, ta nhân cả hai vế với $\chi_E(x) \ge 0$ thu được $h_n(x) \le h_{n+1}(x)$, tức là $h_n \uparrow$.
> - **Giới hạn điểm:** Tại $x \in E$, $h_n(x) = f_n(x) \to f(x) = f(x)\chi_E(x)$. Tại $x \notin E$, $h_n(x) = 0 \to 0 = f(x)\chi_E(x)$. Vậy $h_n \uparrow f\chi_E$ khắp nơi trên $D$.
> 
> Áp dụng trực tiếp Định lý Hội tụ Đơn điệu (MCT) cho dãy $(h_n)$ trên không gian $D$:
> $$\lim_{n \to \infty} \int_D f_n\chi_E \, d\mu = \int_D f\chi_E \, d\mu \iff \lim_{n \to \infty} \int_E f_n \, d\mu = \int_E f \, d\mu$$
> 
> **Giải thích về độ đo $\mu(D)$:**
> Phép chứng minh cốt lõi của MCT được xây dựng dựa trên cấu trúc liên tục từ dưới của độ đo sinh bởi hàm đơn giản $\nu(A) = \int_A \varphi \, d\mu$. Phép toán này chỉ đòi hỏi tính đơn điệu tăng của tập hợp tạo ảnh, hoàn toàn độc lập với kích thước tổng thể của không gian nền. Do đó kết luận đúng cho cả trường hợp $\mu(D) = \infty$. $\blacksquare$

---

> [!ans] (b) — Tái cấu trúc Prob 9.24 bằng MCT (Thay thế Fatou)
> **Ý tưởng hệ thống:** Thay vì dùng Fatou như một hộp đen, ta tự xây dựng cấu trúc đơn điệu tăng bằng cách lấy hàm gọt đáy: $H_n(x) = \inf_{k \ge n} f_k(x)$.
> 
> **Chứng minh:**
> Với mỗi $n \ge 1$, đặt $H_n(x) = \inf_{k \ge n} f_k(x)$. Vì $f_k \ge 0$ nên $H_n \ge 0$.
> - Do tập chỉ số lấy $\inf$ co lại khi $n$ tăng, dãy hàm $H_n$ bắt buộc phải là dãy tăng đơn điệu: $H_n \le H_{n+1}$.
> - Do $f_n \to f$ a.e., theo tính chất của giới hạn, $\lim_{n\to\infty} H_n(x) = \liminf_{n\to\infty} f_n(x) = f(x)$ a.e.
> 
> Áp dụng lập luận MCT của ý a) cho dãy tăng không âm $H_n$ trên tập con $E$ và tập bù $E^c = D \setminus E$:
> $$\lim_{n \to \infty} \int_E H_n \, d\mu = \int_E f \, d\mu \quad \text{và} \quad \lim_{n \to \infty} \int_{E^c} H_n \, d\mu = \int_{E^c} f \, d\mu$$
> 
> Vì $H_n(x) \le f_n(x)$ với mọi $x$, tính đơn điệu của tích phân cho ta:
> $$\int_E f \, d\mu = \lim_{n \to \infty} \int_E H_n \, d\mu \le \liminf_{n \to \infty} \int_E f_n \, d\mu \tag{1}$$
> $$\int_{E^c} f \, d\mu = \lim_{n \to \infty} \int_{E^c} H_n \, d\mu \le \liminf_{n \to \infty} \int_{E^c} f_n \, d\mu \tag{2}$$
> 
> Sử dụng giả thiết hội tụ tích phân toàn cục $\int_D f_n \, d\mu \to \int_D f \, d\mu < \infty$, ta kẹp giới hạn trên ($\limsup$) thông qua tính cộng tính hữu hạn:
> $$\limsup_{n \to \infty} \int_E f_n \, d\mu = \int_D f \, d\mu - \liminf_{n \to \infty} \int_{E^c} f_n \, d\mu \stackrel{(2)}{\le} \int_D f \, d\mu - \int_{E^c} f \, d\mu = \int_E f \, d\mu \tag{3}$$
> 
> Kết hợp gọng kẹp logic từ (1) và (3): $\int_E f \, d\mu \le \liminf \int_E f_n \, d\mu \le \limsup \int_E f_n \, d\mu \le \int_E f \, d\mu$. Dấu bằng bắt buộc xảy ra, suy ra $\lim_{n \to \infty} \int_E f_n \, d\mu = \int_E f \, d\mu$. $\blacksquare$

---

> [!ans] (c) — Phản ví dụ cho cấu trúc dọc (Trượt khối lượng)
> **Xây dựng phản ví dụ:**
> Trên không gian đo Lebesgue hữu hạn $D = [0, 1]$, xét dãy hàm xung nhọn: $f_n(x) = n\chi_{(0, 1/n)}(x)$.
> 
> **Cơ chế sụp đổ:**
> - Với mọi $x > 0$ cố định, khi chọn $n > 1/x$ thì $x \notin (0, 1/n) \implies f_n(x) = 0$. Tại điểm cô lập $x=0$, hàm vọt ra vô cùng nhưng $\mu_L(\{0\}) = 0$. Vậy $f_n \to f \equiv 0$ a.e.
> - Tuy nhiên, diện tích toàn cục được bảo toàn: $\int_D f_n \, d\mu_L = n \cdot \frac{1}{n} = 1$ với mọi $n \ge 1$. Do đó $\lim \int_D f_n = 1 \neq 0 = \int_D f$.
> 
> Ngay tại tập con lớn nhất $E = D$, kết luận sụp đổ hoàn toàn. Điều này khẳng định nếu thiếu điều kiện đồng bộ tích phân toàn cục, khối lượng có thể trượt theo phương dọc thoát xác lên vô cực, phá vỡ mọi quan hệ giới hạn. $\blacksquare$

---

> [!ans] (d) — Quy dịch tọa độ Prob 9.17 về cấu trúc ý (b)
> **Chứng minh:**
> Giả sử điều kiện (1) thỏa mãn cho chiều $f_n \ge g$ (trường hợp còn lại thực hiện tương tự cho $-f_n$). Ta thực hiện phép quy dịch gốc tọa độ đại số bằng cách đặt hàm hiệu: $h_n = f_n - g$ và $h = f - g$.
> 
> Do $f_n \ge g \implies h_n \ge 0$ a.e. Đồng thời từ $f_n \to f$ a.e. kéo theo $h_n \to h$ a.e. 
> 
> **(i) Chứng minh đẳng thức toàn cục:**
> Tuyến tính hóa tích phân trên không gian $D$ (hợp lệ vì $g$ khả tích hữu hạn):
> $$\lim_{n \to \infty} \int_D h_n \, d\mu = \lim_{n \to \infty} \int_D f_n \, d\mu - \int_D g \, d\mu \stackrel{(2)}{=} \int_D g \, d\mu - \int_D g \, d\mu = 0$$
> Áp dụng chặn dưới cấu trúc MCT từ Bước 1 của ý b) cho dãy không âm $h_n$:
> $$0 \le \int_D h \, d\mu \le \liminf_{n \to \infty} \int_D h_n \, d\mu = 0 \implies \int_D (f - g) \, d\mu = 0 \implies \int_D f \, d\mu = \int_D g \, d\mu$$
> 
> **(ii) Chứng minh trên tập con $E$:**
> Dãy hàm số không âm $h_n$ lúc này thỏa mãn trọn vẹn điều kiện của ý b) trên không gian $D$: $h_n \ge 0$, $h_n \to h$ a.e., và $\int_D h_n \, d\mu \to \int_D h \, d\mu = 0$. Áp dụng kết quả ý b) cho tập con $E$:
> $$\lim_{n \to \infty} \int_E h_n \, d\mu = \int_E h \, d\mu \implies \lim_{n \to \infty} \int_E (f_n - g) \, d\mu = \int_E (f - g) \, d\mu$$
> Do $\int_E g \, d\mu < \infty$, ta cộng độc lập đại lượng hữu hạn này vào hai vế, thu được: $\lim_{n \to \infty} \int_E f_n \, d\mu = \int_E f \, d\mu$. $\blacksquare$

---

> [!ans] (e) — Phản ví dụ cho sự hỗn loạn hướng (Thiếu nhất quán)
> **Xây dựng phản ví dụ:**
> Trên $D = [0, 1]$ với độ đo Lebesgue, chọn hàm mốc $g \equiv 0$. Ta chế tạo dãy hàm chứa hai xung đối nghịch:
> $$f_n(x) = n\chi_{(0, 1/n)}(x) - n\chi_{(1 - 1/n, 1)}(x)$$
> 
> **Cơ chế sụp đổ:**
> - **Vi phạm điều kiện (1):** Tại mọi bước $n$, $f_n$ vừa có phần dương vọt lên $n$, vừa có phần âm sụt xuống $-n$. Không tồn tại bất kỳ hàm chặn một phía $g$ nào giữ được toàn dãy.
> - **Các giả thiết khác bảo toàn:** Với $x \in (0, 1)$, khi $n$ đủ lớn thì $x$ nằm ngoài cả hai xung biên $\implies f_n(x) \to 0$, tức $f \equiv 0$. Tích phân toàn cục triệt tiêu triệt để: $\int_D f_n \, d\mu_L = n(1/n) - n(1/n) = 0$ với mọi $n \implies \lim \int_D f_n = 0 = \int_D g$.
> - **Thất bại trên tập con $E = [0, 1/2]$:** Khi $n \ge 3$, xung dương nằm trọn trong $E$, xung âm bị đẩy hoàn toàn ra ngoài $E$. Tích phân tập con cho ta:
>   $$\int_E f_n \, d\mu_L = n \cdot \frac{1}{n} - 0 = 1 \quad (\forall n \ge 3) \implies \lim_{n \to \infty} \int_E f_n \, d\mu_L = 1 \neq 0 = \int_E f \, d\mu_L$$
> 
> Kết luận (ii) sụp đổ, chứng minh tính nhất quán một chiều của hàm chặn là bắt buộc để kiểm soát năng lượng tập con. $\blacksquare$

---

> [!ans] (f) — DCT và sự giải phóng tính đều theo $E$
> **Chứng minh:**
> Từ $|f_n| \le g \implies |f| \le g$ a.e. Ta lập dãy hàm hiệu khoảng cách không âm: $k_n(x) = 2g(x) - |f_n(x) - f(x)| \ge 0$ a.e. 
> Do $f_n \to f \implies k_n \to 2g$ a.e. Áp dụng kỹ thuật gọt đáy đơn điệu MCT (như Bước 1 ý b) cho dãy không âm $k_n$:
> $\int_D 2g \, d\mu \le \liminf_{n \to \infty} \int_D (2g - |f_n - f|) \, d\mu$
> Do $\int_D g \, d\mu < \infty$, tuyến tính hóa và rút gọn đại lượng hữu hạn này ở hai vế:
> $\int_D 2g \, d\mu \le \int_D 2g \, d\mu - \limsup_{n \to \infty} \int_D |f_n - f| \, d\mu \implies \limsup_{n \to \infty} \int_D |f_n - f| \, d\mu \le 0$
> Vì tích phân trị tuyệt đối luôn không âm, ta có kết luận mạnh trong không gian $L^1$: $\lim_{n \to \infty} \int_D |f_n - f| \, d\mu = 0$.
> 
> **Chứng minh tính đều theo $E$:**
> Áp dụng bất đẳng thức tam giác cho tích phân trên mọi tập con $E \subset D$:
> $$\left| \int_E f_n \, d\mu - \int_E f \, d\mu \right| = \left| \int_E (f_n - f) \, d\mu \right| \le \int_E |f_n - f| \, d\mu \le \int_D |f_n - f| \, d\mu$$
> Lấy cận trên đúng ($\sup$) theo $E$ ở vế trái, ranh giới logic được thiết lập:
> $$\sup_{E \in \mathfrak{A}, E \subset D} \left| \int_E f_n \, d\mu - \int_E f \, d\mu \right| \le \int_D |f_n - f| \, d\mu \to 0 \qquad \blacksquare$$

---

> [!ans] (g) — Tổng quát hóa DCT (Generalized DCT)
> **Chứng minh:**
> Thiết lập gọng kẹp động không âm: $k_n(x) = g_n(x) + g(x) - |f_n(x) - f(x)| \ge 0$ a.e.
> Khi $n \to \infty$, do $g_n \to g$ và $|f_n - f| \to 0$ a.e. nên $k_n \to 2g$ a.e.
> 
> Tiếp tục vận dụng kỹ thuật cấu trúc đáy MCT cho dãy không âm $k_n$:
> $\int_D 2g \, d\mu \le \liminf_{n \to \infty} \int_D (g_n + g - |f_n - f|) \, d\mu$
> 
> Tách cấu trúc vế phải dựa trên giả thiết hội tụ tích phân toàn cục của hàm trội $\int_D g_n \, d\mu \to \int_D g \, d\mu < \infty$:
> $\int_D 2g \, d\mu \le \int_D g \, d\mu + \int_D g \, d\mu - \limsup_{n \to \infty} \int_D |f_n - f| \, d\mu$
> Triệt tiêu $2\int_D g \, d\mu < \infty$ ở cả hai đầu, ta khóa chặt sai số: $\limsup_{n \to \infty} \int_D |f_n - f| \, d\mu \le 0 \implies \lim_{n \to \infty} \int_D |f_n - f| \, d\mu = 0$. Tính đều theo $E$ được kế thừa hoàn toàn từ ý f). $\blacksquare$

---

> [!ans] (h) — Định lý Vitali và sự vượt trội thực sự
> **Chứng minh:**
> Định lý Vitali xử lý bài toán khi mất đi hàm trội bằng cách phối hợp 3 công cụ: Khả tích đều (UI) để kiểm soát chiều cao, Tính chặt (Tight) để kiểm soát chiều rộng vô hạn, và Định lý Egorov để ép hội tụ đều trên thảm đo hữu hạn. 
> 
> Cho $\varepsilon > 0$. 
> - Theo thuộc tính Tight, tồn tại $B_\varepsilon$ có $\mu(B_\varepsilon) < \infty$ sao cho phần đuôi vô hạn nhỏ hơn $\varepsilon$.
> - Theo thuộc tính UI, tồn tại $\delta > 0$ kiểm soát phần gai nhọn nhỏ hơn $\varepsilon$.
> - Áp dụng Định lý Egorov trên tập đo hữu hạn $B_\varepsilon$, dãy hàm hội tụ đều trên $B_\varepsilon \setminus A_\varepsilon$ với $\mu(A_\varepsilon) < \delta$.
> 
> Tách cấu trúc tích phân tổng thành 3 phần không giao nhau:
> $$\int_D |f_n - f| \, d\mu = \int_{B_\varepsilon^c} |f_n - f| \, d\mu + \int_{A_\varepsilon} |f_n - f| \, d\mu + \int_{B_\varepsilon \setminus A_\varepsilon} |f_n - f| \, d\mu \le 2\varepsilon + 2\varepsilon + \int_{B_\varepsilon \setminus A_\varepsilon} |f_n - f| \, d\mu$$
> Phần thứ 3 tiến về $0$ do cấu trúc hội tụ đều Riemann trên tập đo hữu hạn. Cho $\varepsilon \to 0$, ta thu được $\lim_{n \to \infty} \int_D |f_n - f| \, d\mu = 0$.
> 
> **Ví dụ khẳng định tính vượt trội thực sự:**
> Trên không gian thực $\mathbb{R}$ với độ đo Lebesgue, xét dãy hàm dịch chuyển thu hẹp: $f_n(x) = n\chi_{[1/n, 1/n + 1/n^2)}(x)$.
> 
> - **Kiểm tra Vitali:** Tích phân toàn cục $\int_\mathbb{R} |f_n| \, d\mu_L = n \cdot \frac{1}{n^2} = \frac{1}{n} \to 0$. Vì tích phân tiến về $0$, dãy này tự động thỏa mãn cả UI và Tight (khối lượng tự biến mất ở vô hạn). Do đó kết luận Vitali chạy tốt.
> - **Sự thất bại của DCT:** Giả sử tồn tại hàm trội $g(x) \ge f_n(x)$ với mọi $n$. Do các tập mốc khoảng $[1/n, 1/n + 1/n^2)$ rời nhau đôi một khi $n$ đủ lớn, hàm bao của chúng bắt buộc phải gánh tổng xung: $g(x) \ge \sum n\chi_{[1/n, 1/n + 1/n^2)}$. Lấy tích phân hàm bao này:
>   $$\int_\mathbb{R} g \, d\mu_L \ge \sum_{n=1}^\infty n \cdot \frac{1}{n^2} = \sum_{n=1}^\infty \frac{1}{n} = \infty \quad \text{(Chuỗi điều hòa phân kỳ)}$$
> 
> Không tồn tại bất kỳ hàm trội khả tích nào (kể cả dãy hàm trội biến thiên $g_n$ của ý g)). Điều này minh chứng Định lý Vitali là một bước tiến hóa thực sự về mặt cấu trúc chứ không chỉ là hình thức đại số. $\blacksquare$

---

> [!ans] (i) — Rà soát không gian đo vô hạn và cạm bẫy của Hội tụ đều
> **Rà soát hệ thống:**
> - **Các ý bảo toàn nguyên vẹn:** a) MCT, b) Prob 9.24, d) Prob 9.17, f) DCT, g) Generalized DCT. Bản chất của các định lý này dựa trên tính khả tích tự thân của hàm trội hoặc tính đơn điệu, không phụ thuộc vào $\mu(D)$.
> - **Ý bị ảnh hưởng:** h) Định lý Vitali. Trên không gian vô hạn, tính chặt (Tight) không còn được tự động suy ra từ tính khả tích của hàm số mà bắt buộc phải đưa vào làm giả thiết độc lập.
> 
> **Phản ví dụ cho cạm bẫy "Hội tụ đều + Bị chặn hằng số":**
> Trên $D = [1, \infty)$ với độ đo Lebesgue ($\mu_L(D) = \infty$), xét dãy hàm kéo dài: $f_n(x) = \frac{1}{n}\chi_{[1, n]}(x)$.
> - **Bị chặn đều bởi hằng số:** $0 \le f_n(x) \le 1$ với mọi $n, x \implies M = 1$. ✓
> - **Hội tụ đều:** $\sup_{x \in D} |f_n(x) - 0| = \frac{1}{n} \to 0$ khi $n \to \infty$. Hội tụ đều tuyệt đối. ✓
> - **Sự sụp đổ của tích phân:** $\int_D f_n \, d\mu_L = \frac{1}{n}(n - 1) = 1 - \frac{1}{n} \to 1$. Trong khi hàm giới hạn $f \equiv 0 \implies \int_D f \, d\mu_L = 0$.
> 
> Giá trị tích phân sụp đổ ($1 \neq 0$) do hiện tượng khối lượng lan tỏa đều ra vô tận theo phương ngang (Khuyết tính chặt Tight). Hằng số $M=1$ không khả tích trên miền vô hạn, khiến gọng kẹp bị phá vỡ. $\blacksquare$

---

> [!ans] (j) — Nhận diện logic: Bản chất của phản ví dụ
> **Khảo sát dãy hàm:** $f_n(x) = \frac{1}{n}\chi_{[1, n]}(x) - \frac{1}{n}\chi_{[n, 2n]}(x)$ trên $D = [1, \infty)$.
> - **Hội tụ điểm:** Với mọi $x \ge 1$ cố định, khi $n > x$, điểm $x$ lọt vào khoảng thứ nhất (giá trị $1/n \to 0$) và nằm ngoài khoảng thứ hai (giá trị $0$). Vậy $f_n(x) \to 0$ khắp nơi.
> - **Tính trực tiếp tích phân:**
>   $$\int_D f_n \, d\mu_L = \frac{1}{n}(n - 1) - \frac{1}{n}(2n - n) = \left(1 - \frac{1}{n}\right) - 1 = -\frac{1}{n} \to 0 = \int_D f \, d\mu_L$$
> 
> **Kết luận logic:**
> Đây **KHÔNG PHẢI** là phản ví dụ. Kết luận của định lý hội tụ vẫn đúng một cách hoàn hảo, bất chấp việc dãy hàm này vi phạm nghiêm trọng giả thiết của BCT (miền vô hạn) và khuyết tính chặt của Vitali.
> 
> **Bài học triết lý hệ thống:**
> Trong logic toán học, mối quan hệ giữa giả thiết và kết luận là quan hệ một chiều ($A \implies B$). Khi giả thiết $A$ bị vi phạm, mệnh đề không cho ta biết bất kỳ thông tin nào về $B$. Kết luận $B$ vẫn có thể đúng do cấu trúc đại số nội tại tự triệt tiêu sai số (như cơ chế đuôi bù trừ của hàm số này). 
> 
> Muốn xây dựng một **Phản ví dụ thực sự**, ta bắt buộc phải chỉ ra một trường hợp cụ thể mà tại đó giả thiết bị vi phạm **VÀ** kết luận bắt buộc phải sai (như đã làm ở các ý c, e, i). Vi phạm giả thiết không đồng nghĩa với kết luận sai. $\blacksquare$

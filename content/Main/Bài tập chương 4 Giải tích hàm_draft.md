# Cheatsheet — Phân dạng bài tập Chương 4: Không gian Hilbert

Tổng cộng 10 dạng bài chính. Mỗi dạng gồm: **dấu hiệu nhận diện**, **phương pháp giải hệ thống**, và **một bài đại diện** kèm lời giải mẫu.

---

## Dạng 1 — Kiểm tra một chuẩn có sinh từ tích trong hay không (đẳng thức hình bình hành)

> [!prp] Dấu hiệu nhận diện
> Đề cho một không gian định chuẩn cụ thể ($\ell^p$, $L^p$, $C[a,b]$ với sup norm,...) và hỏi nó có phải không gian tích trong / Hilbert không, hoặc yêu cầu suy tích trong ngược từ chuẩn.

> [!prp] Phương pháp giải hệ thống
> 1. **Nếu cần suy tích trong từ chuẩn:** dùng công thức phân cực — thực: $\langle x,y\rangle = \frac14(\|x+y\|^2-\|x-y\|^2)$; phức: cộng thêm phần ảo $\frac i4(\|x+iy\|^2-\|x-iy\|^2)$.
> 2. **Nếu cần chứng minh KHÔNG phải không gian tích trong:** đẳng thức hình bình hành $\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2$ là **điều kiện cần** cho mọi chuẩn sinh từ tích trong. Chọn hai véctơ đơn giản, "vuông góc trực quan" (thường là hai véctơ đơn vị chuẩn tắc $e_1,e_2$, hoặc hai hàm chỉ thị có giá rời nhau), tính trực tiếp hai vế, chỉ ra chúng khác nhau (trừ trường hợp riêng, ví dụ $p=2$).
> 3. Không cần kiểm tra 3 tiên đề tích trong đầy đủ — chỉ cần đẳng thức hình bình hành thất bại là đủ để loại.

> [!prob] Bài đại diện
> Trong $\ell^p$ với $1\le p\le\infty$, xét $e_1=(1,0,\dots)$, $e_2=(0,1,\dots)$. Chứng tỏ đẳng thức hình bình hành thỏa với $e_1,e_2$ khi và chỉ khi $p=2$. Suy ra $\ell^p$ là không gian Hilbert khi và chỉ khi $p=2$.

> [!prf] Lời giải
> $\|e_1\|_p=\|e_2\|_p=1$; $\|e_1\pm e_2\|_p = 2^{1/p}$ (do tọa độ rời nhau). Đẳng thức hình bình hành trở thành $2\cdot2^{2/p}=4 \iff 1+\frac2p=2 \iff p=2$. Vậy chỉ $p=2$ thỏa; với $p\ne2$ chuẩn không thể sinh từ tích trong, nên $\ell^p$ ($p\ne2$) không phải Hilbert, trong khi $\ell^2$ với $\langle x,y\rangle=\sum x_n\bar y_n$ là Hilbert chuẩn.

---

## Dạng 2 — Đẳng thức/bất đẳng thức hình học suy từ khai triển song tuyến

> [!prp] Dấu hiệu nhận diện
> Đề dùng ngôn ngữ "chứng tỏ $\|x+y\|=\|x-y\|$", "$x\perp y \iff \dots$", các mệnh đề liên hệ chuẩn với trực giao (Pythagoras, hình chữ nhật, hình thoi).

> [!prp] Phương pháp giải hệ thống
> Luôn xuất phát từ công thức khai triển gốc:
> $$\|x\pm y\|^2 = \|x\|^2 \pm 2\operatorname{Re}\langle x,y\rangle + \|y\|^2.$$
> Mọi đẳng thức dạng "chuẩn ↔ trực giao" đều suy ra bằng cách cộng/trừ hai khai triển này rồi so sánh với giả thiết. Trên trường **phức**, luôn cẩn thận: điều kiện chỉ liên quan đến $\operatorname{Re}\langle x,y\rangle$ chứ không phải toàn bộ $\langle x,y\rangle$ — đây là bẫy thường gặp khi đổi từ $\mathbb{R}$ sang $\mathbb{C}$.

> [!prob] Bài đại diện
> Trên trường thực, chứng tỏ nếu $\|x\|=\|y\|$ thì $(x+y)\perp(x-y)$.

> [!prf] Lời giải
> $$\langle x+y,x-y\rangle = \|x\|^2-\langle x,y\rangle+\langle y,x\rangle-\|y\|^2 = \|x\|^2-\|y\|^2 = 0.$$
> (Ý nghĩa: hai đường chéo của hình thoi vuông góc.)

---

## Dạng 3 — Tính liên tục của tích trong / giới hạn dãy

> [!prp] Dấu hiệu nhận diện
> Đề cho $x_n\to x$, $y_n\to y$ và hỏi về giới hạn của $\langle x_n,y_n\rangle$, hoặc cho điều kiện về tích vô hướng của hai dãy trong quả cầu đơn vị và hỏi về $\|x_n-y_n\|$.

> [!prp] Phương pháp giải hệ thống
> 1. **"Thêm bớt" (add-and-subtract):** $\langle x_n,y_n\rangle-\langle x,y\rangle = \langle x_n,y_n-y\rangle+\langle x_n-x,y\rangle$, rồi dùng Cauchy–Schwarz cho mỗi số hạng. Nhớ dãy hội tụ luôn **bị chặn**.
> 2. Với bài dạng "$\langle x_n,y_n\rangle\to1$, $\|x_n\|,\|y_n\|\le1$, suy ra $\|x_n-y_n\|\to0$": khai triển $\|x_n-y_n\|^2 \le 2-2\operatorname{Re}\langle x_n,y_n\rangle$ rồi cho $n\to\infty$.

> [!prob] Bài đại diện
> Trong một không gian tích trong, giả sử $(x_n),(y_n)$ nằm trong quả cầu đơn vị và $\lim_n\langle x_n,y_n\rangle=1$. Chứng tỏ $\lim_n\|x_n-y_n\|=0$.

> [!prf] Lời giải
> $$\|x_n-y_n\|^2 = \|x_n\|^2-2\operatorname{Re}\langle x_n,y_n\rangle+\|y_n\|^2 \le 2-2\operatorname{Re}\langle x_n,y_n\rangle \xrightarrow{n\to\infty} 0.$$

---

## Dạng 4 — Tính chất đại số/tôpô của $M^\perp$ (không gian con đóng, quan hệ bao hàm)

> [!prp] Dấu hiệu nhận diện
> Đề hỏi $M^\perp$ có phải không gian con đóng, so sánh $M^\perp$ với $N^\perp$ khi $M\subset N$, hoặc đúng/sai kiểu trắc nghiệm về các phép toán trên $\perp$.

> [!prp] Phương pháp giải hệ thống
> 1. **Công cụ nền:** $x^\perp = \ker(y\mapsto\langle y,x\rangle)$ — nhân của một phiếm hàm tuyến tính liên tục, do đó luôn là không gian con **đóng**. Từ đó $M^\perp = \bigcap_{x\in M}x^\perp$ là giao của các tập đóng $\Rightarrow$ đóng.
> 2. **Quy tắc đảo chiều:** $M\subset N \Rightarrow N^\perp\subset M^\perp$ (tập lớn hơn có phần bù trực giao nhỏ hơn hoặc bằng — **không** có chiều ngược, không có "chặt suy ra chặt").
> 3. Với câu đúng/sai: nếu nghi ngờ một mệnh đề sai, luôn tìm **phản ví dụ cụ thể** dạng $M=\{x_0\}$ đối chiếu $N=\langle x_0\rangle$ (một điểm và đường thẳng nó sinh ra thường có cùng $\perp$, phá vỡ trực giác "chặt hơn thì $\perp$ cũng chặt hơn").

> [!prob] Bài đại diện
> Cho $H$ là không gian Hilbert, $\emptyset\ne M,N\subset H$. Đúng hay sai: $M\subsetneq N \Rightarrow N^\perp\subsetneq M^\perp$?

> [!prf] Lời giải
> **Sai.** Lấy $M=\{x_0\}$ ($x_0\ne0$) và $N=\langle x_0\rangle$. Rõ ràng $M\subsetneq N$. Nhưng $M^\perp=x_0^\perp$ và $N^\perp=\langle x_0\rangle^\perp=x_0^\perp$ (trực giao với một véctơ tương đương trực giao với đường thẳng nó sinh ra). Vậy $M^\perp=N^\perp$, không có bao hàm chặt.

---

## Dạng 5 — Đặc trưng khoảng cách bằng trực giao & tính duy nhất của hình chiếu

> [!prp] Dấu hiệu nhận diện
> "$x\perp M \iff \|x\|=d(x,M)$", "chứng minh phép chiếu là duy nhất", hoặc chứng minh chính Định lý phép chiếu (Mệnh đề 4.2.5).

> [!prp] Phương pháp giải hệ thống
> 1. **Chiều $x\perp M \Rightarrow \|x\|=d(x,M)$:** khai triển $\|x-m\|^2 = \|x\|^2+\|m\|^2 \ge \|x\|^2$, đẳng thức tại $m=0$.
> 2. **Chiều ngược:** xét hàm bậc hai $\varphi(t)=\|x-tm\|^2$ theo tham số thực $t$; nếu $t=0$ là điểm cực tiểu thì $\varphi'(0)=0$, suy ra $\operatorname{Re}\langle x,m\rangle=0$ (trên $\mathbb{C}$ lặp lại với $im$ để lấy phần ảo).
> 3. **Tính tồn tại & duy nhất của phép chiếu lên tập lồi đóng $C$:** dùng đẳng thức hình bình hành cho dãy cực tiểu hóa $(c_n)\subset C$ với $\|x-c_n\|\to d(x,C)$, kết hợp tính lồi (trung điểm $\frac{c_n+c_m}2\in C$) để chỉ ra $(c_n)$ Cauchy $\Rightarrow$ hội tụ (dùng tính đầy đủ của $H$). Tính duy nhất lặp lại đúng thủ thuật này với hai điểm cực tiểu giả định.
> 4. **Tính duy nhất của hình chiếu (cách khác, ngắn hơn):** nếu $y_1,y_2\in M$ đều thỏa $(x-y_i)\perp M$ thì $y_1-y_2\in M$ và $(y_1-y_2)\perp M \ni (y_1-y_2)$, nên $(y_1-y_2)\perp(y_1-y_2)$, suy ra $y_1=y_2$.

> [!prob] Bài đại diện
> Cho $M$ là không gian con đóng của $H$, $x\in H$. Chứng tỏ nếu $y_1,y_2\in M$ đều thỏa $(x-y_i)\perp M$ thì $y_1=y_2$.

> [!prf] Lời giải
> $(x-y_1)-(x-y_2)=y_2-y_1\in M^\perp$ (không gian con), nên $y_1-y_2\in M^\perp$. Mặt khác $y_1-y_2\in M$. Vậy $y_1-y_2$ trực giao với chính nó: $\|y_1-y_2\|^2=\langle y_1-y_2,y_1-y_2\rangle=0$, suy ra $y_1=y_2$.

---

## Dạng 6 — $M=(M^\perp)^\perp$: khi nào đúng, khi nào cần phản ví dụ

> [!prp] Dấu hiệu nhận diện
> "Chứng tỏ $M=(M^\perp)^\perp$... kết quả còn đúng không nếu bỏ giả thiết đóng?"

> [!prp] Phương pháp giải hệ thống
> 1. Chiều $M\subset(M^\perp)^\perp$ **luôn đúng** (không cần đóng) — trực tiếp từ định nghĩa.
> 2. Chiều ngược **cần $M$ đóng**: dùng định lý phép chiếu để phân tích $x=m+z$ với $m=P_Mx\in M$, $z\in M^\perp$; nếu $x\in(M^\perp)^\perp$ thì $\langle x,z\rangle=0$, nhưng cũng $\langle x,z\rangle=\langle m,z\rangle+\|z\|^2=\|z\|^2$, suy ra $z=0$, $x=m\in M$.
> 3. **Khi không đóng:** kết quả trở thành $(M^\perp)^\perp=\overline M$ (không phải $M$). Phản ví dụ chuẩn: $M=$ các dãy chỉ hữu hạn tọa độ khác $0$ trong $\ell^2$ — trù mật nhưng không đóng, và $M^\perp=\{0\}$ nên $(M^\perp)^\perp=\ell^2\ne M$.

> [!prob] Bài đại diện
> Cho $M$ là không gian con đóng của Hilbert $H$. Chứng tỏ $M=(M^\perp)^\perp$.

> [!prf] Lời giải
> "$\subset$": hiển nhiên từ định nghĩa. "$\supset$": cho $x\in(M^\perp)^\perp$, viết $x=m+z$ ($m\in M$, $z\in M^\perp$, theo định lý phép chiếu vì $M$ đóng). Vì $z\in M^\perp\subset(M^\perp)^\perp{}^\perp$... trực tiếp: $\langle x,z\rangle=0$ (do $x\in(M^\perp)^\perp$, $z\in M^\perp$), và $\langle x,z\rangle=\langle m,z\rangle+\|z\|^2=\|z\|^2$ (vì $m\perp z$). Vậy $\|z\|^2=0$, $x=m\in M$.

---

## Dạng 7 — Tính toán cụ thể: trực chuẩn hóa + công thức chiếu (dạng thi nhiều nhất)

> [!prp] Dấu hiệu nhận diện
> Cho một không gian con hữu hạn chiều cụ thể (sinh bởi $1,t,t^2$, hoặc $1,\cos x,\sin x$, hoặc $n$ tọa độ đầu trong $\ell^2$), yêu cầu tìm cơ sở trực chuẩn, hình chiếu $P_Mf$, và/hoặc khoảng cách $d(f,M)$.

> [!prp] Phương pháp giải hệ thống — quy trình 4 bước cố định
> 1. **Kiểm trực giao** giữa các hàm sinh (nếu chưa trực giao sẵn, dùng Gram–Schmidt: $v_k = u_k - \sum_{i<k}\langle u_k,e_i\rangle e_i$).
> 2. **Chuẩn hóa:** $e_k = v_k/\|v_k\|$.
> 3. **Công thức chiếu:** $P_Mf = \sum_i \langle f,e_i\rangle e_i$ — tính từng $\langle f,e_i\rangle$ bằng tích phân trực tiếp.
> 4. **Khoảng cách:** dùng Pythagoras $\|f\|^2 = \|P_Mf\|^2+d(f,M)^2$, tức $d(f,M)^2 = \|f\|^2-\sum_i|\langle f,e_i\rangle|^2$ — **nhanh hơn nhiều** so với tính trực tiếp $\|f-P_Mf\|$.
>
> Mẹo tiết kiệm thời gian: nếu $M$ sinh bởi các hàm lượng giác chuẩn ($1,\cos nx,\sin nx$ trên $[0,2\pi]$), hầu hết tích $\langle f,e_i\rangle$ triệt tiêu do tính chẵn/lẻ hoặc chu kỳ — kiểm tra tính đối xứng trước khi tính tích phân trực tiếp.

> [!prob] Bài đại diện
> Trong $L^2([0,1],\mathbb{R})$, cho $f(t)=t^3$. Tìm hình chiếu của $f$ và khoảng cách từ $f$ tới $M=\{$đa thức bậc $\le1\}$.

> [!prf] Lời giải
> Cơ sở trực chuẩn của $M$ (Gram–Schmidt từ $1,t$): $e_1=1$, $e_2=2\sqrt3(t-\tfrac12)$.
>
> $\langle f,e_1\rangle=\int_0^1t^3dt=\tfrac14$; $\langle f,e_2\rangle = 2\sqrt3\int_0^1t^3(t-\tfrac12)dt = 2\sqrt3(\tfrac15-\tfrac18)=\tfrac{3\sqrt3}{20}$.
>
> $$P_Mf = \frac14\cdot1 + \frac{3\sqrt3}{20}\cdot2\sqrt3\left(t-\frac12\right) = \frac9{10}t-\frac15.$$
>
> $\|f\|^2=\int_0^1t^6dt=\tfrac17$; $\|P_Mf\|^2 = (\tfrac14)^2+(\tfrac{3\sqrt3}{20})^2=\tfrac{13}{100}$.
>
> $$d(f,M)^2 = \frac17-\frac{13}{100}=\frac9{700} \Rightarrow d(f,M)=\frac{3\sqrt7}{70}.$$

---

## Dạng 8 — Bất đẳng thức Bessel & hội tụ chuỗi trực chuẩn (Parseval một chiều)

> [!prp] Dấu hiệu nhận diện
> Cho họ trực chuẩn $(e_n)$ và dãy hệ số $(c_n)\in\ell^2$ (hoặc ngược lại, cho $x\in H$), yêu cầu chứng minh chuỗi $\sum c_ne_n$ hội tụ, hoặc chứng minh $\sum|\langle x,e_n\rangle|^2\le\|x\|^2$.

> [!prp] Phương pháp giải hệ thống
> 1. **Hội tụ chuỗi $\sum c_ne_n$ ($\Rightarrow$ chiều "tổng hợp"):** dùng đẳng thức đẳng cự hữu hạn $\left\|\sum_{i=1}^nc_ie_i\right\|^2=\sum_{i=1}^n|c_i|^2$ (hệ quả trực tiếp của trực chuẩn) để chỉ ra dãy tổng riêng Cauchy trong $H$ (vì $(c_n)\in\ell^2$), rồi dùng **tính đầy đủ của $H$** để kết luận hội tụ. Đây là bước bắt buộc mọi lần — không có tính đầy đủ thì lập luận sụp đổ.
> 2. **Bessel ($\Rightarrow$ chiều "phân tích"):** với $x\in H$ cho trước, xét $s_N=\sum_{n=1}^N\langle x,e_n\rangle e_n$; chỉ ra $(x-s_N)\perp s_N$ (kiểm trực tiếp bằng tích trong), áp dụng Pythagoras: $\|x\|^2=\|x-s_N\|^2+\|s_N\|^2\ge\|s_N\|^2=\sum_{n=1}^N|\langle x,e_n\rangle|^2$, rồi cho $N\to\infty$.
> 3. Hệ quả tức thời: $\langle x,e_n\rangle\to0$ (điều kiện cần của chuỗi hội tụ).

> [!prob] Bài đại diện
> Cho $(e_n)_{n\in\mathbb{Z}^+}$ trực chuẩn trong Hilbert $H$ và $(c_n)\in\ell^2$. Chứng minh $\sum_{n=1}^\infty c_ne_n$ hội tụ trong $H$.

> [!prf] Lời giải
> Đặt $s_N=\sum_{n=1}^Nc_ne_n$. Với $M>N$: $\|s_M-s_N\|^2=\sum_{n=N+1}^M|c_n|^2\to0$ khi $N,M\to\infty$ (vì $\sum|c_n|^2<\infty$). Vậy $(s_N)$ Cauchy; vì $H$ đầy đủ, $(s_N)$ hội tụ.

---

## Dạng 9 — Đặc trưng bao đóng của không gian sinh bởi họ trực chuẩn (so sánh hai không gian con)

> [!prp] Dấu hiệu nhận diện
> Dạng bài tổng hợp cuối chương: cho hai họ trực chuẩn $(e_n),(f_n)$, hỏi khi nào $\overline{\operatorname{span}(e_n)} = \overline{\operatorname{span}(f_n)}$.

> [!prp] Phương pháp giải hệ thống
> Đây là bài "hai chiều lồng nhau", giải theo khung:
> 1. **Bổ đề trung tâm:** $x\in\overline M \iff x=\sum_k\langle x,e_k\rangle e_k$ (với $M=\operatorname{span}(e_n)$) — chứng minh bằng cách xét $y=\sum_k\langle x,e_k\rangle e_k$ (hội tụ theo Dạng 8), chỉ ra $(x-y)\perp M \Rightarrow (x-y)\perp\overline M$, rồi vì cả $x,y\in\overline M$ nên $x-y\in\overline M$ và tự trực giao với chính nó $\Rightarrow x=y$.
> 2. **Áp dụng hai chiều:** để chứng minh $\overline M=\overline N$, chỉ cần chứng minh $e_n\in\overline N$ với mọi $n$ (cho $\overline M\subset\overline N$) và $f_n\in\overline M$ với mọi $n$ (chiều ngược) — quy về đúng bổ đề ở bước 1.
> 3. Chiều ngược lại (từ $\overline M=\overline N$ suy khai triển) chỉ là áp dụng trực tiếp bổ đề cho $e_n,f_n\in$ không gian chung.

> [!prob] Bài đại diện
> Cho $(e_n),(f_n)$ trực chuẩn, $M=\operatorname{span}(e_n)$, $N=\operatorname{span}(f_n)$. Chứng minh $\overline M=\overline N \iff \forall n, e_n=\sum_k\langle e_n,f_k\rangle f_k$ và $f_n=\sum_k\langle f_n,e_k\rangle e_k$.

> [!prf] Lời giải
> **($\Leftarrow$)** Từ khai triển của $e_n$ theo $(f_k)$ và bổ đề (chiều $\Leftarrow$), $e_n\in\overline N$ với mọi $n$, nên $M\subset\overline N$, $\overline M\subset\overline N$. Tương tự $\overline N\subset\overline M$. Vậy bằng nhau.
>
> **($\Rightarrow$)** Nếu $\overline M=\overline N=:K$, thì $e_n\in M\subset K=\overline N$; áp dụng bổ đề (chiều $\Rightarrow$) cho $x=e_n$, họ $(f_k)$: $e_n=\sum_k\langle e_n,f_k\rangle f_k$. Đối xứng cho $f_n$.

---

## Dạng 10 — Biểu diễn phiếm hàm tuyến tính liên tục qua tích trong (Riesz) & tách điểm

> [!prp] Dấu hiệu nhận diện
> "Tìm $y$ sao cho $Tx=\langle x,y\rangle$", "tính chuẩn của phiếm hàm dùng phương pháp tích trong", hoặc "tìm phiếm hàm tách hai véctơ cho trước".

> [!prp] Phương pháp giải hệ thống
> 1. **Nhận diện $y$:** viết lại công thức của $T$ dưới dạng $\int f\cdot g$ hoặc $\sum x_n y_n$ — đó chính là $\langle f,g\rangle$ hoặc $\langle x,y\rangle$ với $y=g$ (hoặc dãy $(y_n)$) đã lộ diện.
> 2. **Kiểm định nghĩa tốt:** cần $y\in H$ (ví dụ $y\in L^2$ hay $\ell^2$) — thường kiểm bằng một tích phân/chuỗi hội tụ cụ thể.
> 3. **Chuẩn:** luôn có $\|T\|=\|y\|$ — cận trên từ Cauchy–Schwarz ($|Tx|=|\langle x,y\rangle|\le\|x\|\|y\|$), cận dưới đạt được tại $x=y$ (đẳng thức Cauchy–Schwarz khi hai véctơ tỉ lệ).
> 4. **Tách điểm ($e_1,e_2$ độc lập tuyến tính, tìm $f$ với $f(e_1)=1,f(e_2)=0$):** hai cách — (i) Hahn–Banach trừu tượng: định nghĩa trên không gian con hữu hạn chiều rồi mở rộng; (ii) nếu không gian là Hilbert cụ thể, dùng ngay $f(x)=\langle x,e_1\rangle$ — **ngắn hơn nhiều**, luôn ưu tiên cách này khi có cấu trúc tích trong tường minh.

> [!prob] Bài đại diện
> Cho $T:\ell^2\to\mathbb{R}$, $Tx=\sum_{n=1}^\infty\dfrac{x_n}{n^2}$. Tìm $y\in\ell^2$ sao cho $Tx=\langle x,y\rangle$, từ đó suy ra $T$ liên tục và tính $\|T\|$.

> [!prf] Lời giải
> Nhận diện $y=(1/n^2)_n$; kiểm $y\in\ell^2$ vì $\sum1/n^4<\infty$. Khi đó $Tx=\langle x,y\rangle$. Theo Cauchy–Schwarz, $\|T\|\le\|y\|_2$, đạt tại $x=y$ (tỉ lệ), nên
> $$\|T\| = \|y\|_2 = \left(\sum_{n=1}^\infty\frac1{n^4}\right)^{1/2} = \frac{\pi^2}{\sqrt{90}}.$$

---

## Bảng tổng hợp nhanh — nên thuộc trước khi vào phòng thi

| Dạng | Công cụ chính | Bài mẫu |
|---|---|---|
| 1 | Công thức phân cực, đẳng thức hình bình hành | 4.6.1, 4.6.10, 4.6.11 |
| 2 | Khai triển $\|x\pm y\|^2$ | 4.6.3, 4.6.4, 4.6.5 |
| 3 | Cauchy–Schwarz + thêm bớt | 4.6.6, 4.6.7 |
| 4 | $x^\perp=\ker(\langle\cdot,x\rangle)$ đóng, $M^\perp=\bigcap x^\perp$ | 4.6.15–4.6.18 |
| 5 | $\varphi(t)=\|x-tm\|^2$, tính duy nhất qua tự-trực-giao | 4.6.19, 4.6.22, 4.6.23 |
| 6 | Phân tích $x=m+z$, phản ví dụ dãy hữu hạn tọa độ trong $\ell^2$ | 4.6.20 |
| 7 | Gram–Schmidt + $P_Mf=\sum\langle f,e_i\rangle e_i$ + Pythagoras | 4.6.24–4.6.33 |
| 8 | Tính Cauchy của tổng riêng, tính đầy đủ của $H$ | 4.6.35, 4.6.38, 4.6.39 |
| 9 | Bổ đề $x\in\overline M \iff x=\sum\langle x,e_k\rangle e_k$, hai chiều lồng | 4.6.42 |
| 10 | Nhận diện $y$ trong $Tx=\langle x,y\rangle$; $\|T\|=\|y\|$ | 4.6.12, 4.6.13, 4.6.41 |

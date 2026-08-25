# Ôn tập vấn đáp: Bổ đề Fatou và Các Định lý Hội tụ — Phân dạng theo điều kiện

> [!info] Mục đích tài liệu
> Tài liệu này không nhắc lại toàn bộ chứng minh chi tiết (đã có ở phần ghi chú chính), mà tổ chức lại các định lý hội tụ theo **trục điều kiện**: mỗi định lý là kết quả của việc thêm/bớt một giả thiết so với định lý gốc (MCT). Mục tiêu là khi giảng viên hỏi "nếu đổi điều kiện X thì sao", ta nhận ra ngay đang di chuyển theo trục nào, định lý nào còn đúng, định lý nào cần phản ví dụ, và derive lại được khung chứng minh tại chỗ.

---

## 0. Sơ đồ phụ thuộc giữa các định lý

```
                MCT (tăng, không âm)
                       │
         (bỏ tính đơn điệu, chỉ giữ không âm)
                       ▼
                  Bổ đề Fatou  ──────► MCT là hệ quả 2 chiều của Fatou
                       │
        (thêm chặn trên bởi hàm khả tích g)
                       ▼
                 Fatou ngược
                       │
        (kết hợp Fatou thuận + Fatou ngược,
         tức |f_n| ≤ g khả tích)
                       ▼
                    DCT  ──────► BCT là trường hợp riêng (g ≡ M, μ(D) < ∞)
                       │
        (thay hàm trội cố định g bằng dãy g_n hội tụ)
                       ▼
                Generalized DCT (Prob 9.22)
```

Mọi định lý trong sơ đồ trên đều quy về **Bổ đề Fatou** làm công cụ trung tâm; còn bản thân Fatou lại quy về **MCT** (qua dãy phụ $g_n = \inf_{k \ge n} f_k$). Vì vậy khi vấn đáp, nắm chắc chứng minh MCT và Fatou là đủ để derive lại toàn bộ cây phía dưới.

> [!obs] Hai công cụ nền tảng dùng xuyên suốt
> 1. **Tính đơn điệu của tích phân**: $f \le g$ a.e. $\implies \int_D f\,d\mu \le \int_D g\,d\mu$.
> 2. **Tính cộng tính hữu hạn**: $\int_D (f+g)\,d\mu = \int_D f\,d\mu + \int_D g\,d\mu$ khi cả hai vế có nghĩa (không vướng $\infty - \infty$).
>
> Hai tính chất này được dùng lặp lại ở mọi bước "giản ước đại lượng hữu hạn ở hai vế" trong các chứng minh bên dưới.

---

## I. Trục 1 — Tính đơn điệu của dãy hàm: tăng / giảm / không đơn điệu

### 1.1 Dãy tăng, không âm — MCT (định lý gốc)

> [!thm] (MCT)
> $(f_n)$ đo được, không âm, $f_n \uparrow f$ a.e. trên $D$. Khi đó $\int_D f_n\,d\mu \to \int_D f\,d\mu$.

> [!prf] Khung chứng minh (2 chiều)
> - **Chiều $\le$**: $f_n \le f \implies \int f_n \le \int f$, lấy giới hạn (dãy tăng bị chặn trên nên có giới hạn).
> - **Chiều $\ge$**: cố định hàm đơn giản $0 \le \varphi \le f$ và $\alpha \in (0,1)$; đặt $E_n = \{f_n \ge \alpha\varphi\}$. Chứng minh $E_n \uparrow D$ (dùng định nghĩa giới hạn điểm), rồi $\int_D f_n \ge \int_{E_n} f_n \ge \alpha \int_{E_n}\varphi \to \alpha\int_D \varphi$ (liên tục từ dưới của độ đo $\nu(A)=\int_A \varphi\,d\mu$). Cho $\alpha \to 1^-$ rồi lấy sup theo $\varphi$.

> [!obs] Điều cần chú ý
> MCT **không đòi hỏi** $\mu(D) < \infty$. Tính tăng đơn điệu của dãy đã đủ để kiểm soát giới hạn, bất kể không gian to hay nhỏ.

### 1.2 Dãy giảm, không âm — Hệ quả 4 (MCT giảm)

> [!thm] (MCT cho dãy giảm)
> $(f_n)$ đo được, không âm, $f_n \downarrow f$ a.e. **và tồn tại $k$ sao cho $\int_D f_k\,d\mu < \infty$**. Khi đó $\int_D f_n\,d\mu \to \int_D f\,d\mu$.

> [!prf] Khung chứng minh
> Đặt $h_n = f_1 - f_n \ge 0$ (giả sử $k=1$), khi đó $h_n \uparrow f_1 - f$. Áp MCT gốc cho $(h_n)$, rồi dùng tính tuyến tính tách $\int f_1$ ra hai vế và giản ước (cần $\int_D f_1\,d\mu < \infty$ để phép trừ hợp lệ, không vướng $\infty - \infty$).

> [!prob] Phản ví dụ khi thiếu điều kiện "có số hạng khả tích"
> $f_n = \chi_{[n,\infty)}$ trên $D=[0,\infty)$ với độ đo Lebesgue: $f_n \downarrow 0$ nhưng $\int_D f_n\,d\mu = \infty$ với mọi $n$ (không có số hạng nào khả tích), nên $\lim \int f_n = \infty \ne 0 = \int \lim f_n$.
>
> **Bài học**: đối với dãy giảm, điều kiện "có ít nhất một số hạng khả tích" là **bắt buộc**, khác hẳn dãy tăng (không cần gì thêm). Lý do sâu xa: dãy tăng tích lũy diện tích từ dưới lên (đơn điệu, không có rủi ro "trừ vô cực"), còn dãy giảm tích lũy diện tích từ trên xuống, nếu số hạng đầu đã là $\infty$ thì phép trừ $f_1 - f_n$ trong chứng minh trên mất nghĩa.

### 1.3 Dãy không đơn điệu, không âm — Bổ đề Fatou

> [!thm] (Hệ quả 3: Bổ đề Fatou)
> $(f_n)$ đo được, không âm trên $D$ (không cần hội tụ điểm, không cần đơn điệu). Khi đó:
> $$\int_D \liminf_{n\to\infty} f_n\,d\mu \le \liminf_{n\to\infty} \int_D f_n\,d\mu$$

> [!prf] Khung chứng minh
> Đặt $g_n = \inf_{k\ge n} f_k \ge 0$. Dãy $(g_n)$ **tăng** ($n$ tăng thì infimum lấy trên tập chỉ số nhỏ hơn nên không giảm) và $g_n \uparrow \liminf f_n$ theo định nghĩa. Vì $g_n \le f_n$, đơn điệu tích phân cho $\int g_n \le \int f_n$. Áp MCT cho $(g_n)$ rồi lấy liminf hai vế.

> [!obs] Vì sao Fatou tổng quát hơn MCT (tăng)?
> Fatou chỉ dùng được **chiều $\le$** nhờ $g_n \le f_n$ — không cần $f_n$ đơn điệu. Khi $(f_n)$ thực sự tăng và hội tụ điểm, chiều $\le$ ngược lại ($\int f_n \le \int f$, do $f_n \le f$) tự động đúng, kẹp hai chiều cho ra đẳng thức — đây chính là cách MCT được suy ngược lại từ Fatou (xem mục dưới).

> [!cor] (MCT là hệ quả 2 chiều của Fatou)
> Nếu $f_n \uparrow f$ a.e.: chiều $\le$ từ đơn điệu tích phân ($f_n \le f$), chiều $\ge$ từ Fatou áp dụng trực tiếp (lưu ý $\liminf f_n = \lim f_n = f$ và $\liminf \int f_n = \lim \int f_n$ vì dãy số $\int f_n$ tăng). Kẹp hai chiều suy ra đẳng thức.

### 1.4 Dãy không đơn điệu nhưng bị chặn trên bởi chính hàm giới hạn — Định lý 8.14 (Prob 9.25)

> [!thm] (Định lý 8.14)
> $(f_n)$ đo được không âm, $f_n \to f$ a.e. và $f_n \le f$ a.e. với mọi $n$ (không cần $f_n$ tăng!). Khi đó $\int_D f_n\,d\mu \to \int_D f\,d\mu$.

> [!prf] Khung chứng minh
> Chiều $\le$ (tức $\int f \le \liminf \int f_n$): Fatou trực tiếp. Chiều $\ge$ (tức $\limsup \int f_n \le \int f$): đơn điệu tích phân từ $f_n \le f$. Kẹp $\liminf \le \limsup$ cho đẳng thức.

> [!obs] So sánh với mục 1.3 và 1.1
> Đây là điểm trung gian thú vị: **không cần tính đơn điệu** của $(f_n)$, chỉ cần $f_n$ bị chặn trên bởi $f$ tại mọi bước — yếu hơn "tăng" nhưng đủ để có đẳng thức, vì chiều khó (Fatou) luôn miễn phí, còn chiều dễ chỉ cần $f_n \le f$ chứ không cần $f_{n} \le f_{n+1}$.

---

## II. Trục 2 — Độ đo của không gian: hữu hạn hay vô hạn?

### 2.1 MCT (tăng) — không cần $\mu(D) < \infty$

Đã nêu ở mục 1.1: chứng minh MCT không hề dùng đến $\mu(D)$ ở bất kỳ bước nào. Dãy tăng "an toàn" với không gian vô hạn.

### 2.2 MCT giảm — thất bại khi không gian vô hạn **và** thiếu số hạng khả tích

Phản ví dụ $\chi_{[n,\infty)}$ ở mục 1.2 chính là trường hợp $\mu(D) = \infty$. Cần phân biệt rõ: cái làm hỏng định lý không phải bản thân $\mu(D)=\infty$, mà là **hệ quả của nó** — khi không gian vô hạn, một dãy giảm rất dễ không có số hạng nào khả tích (khối lượng "trượt ra vô cực theo phương ngang" thay vì giảm về 0 theo phương dọc).

### 2.3 BCT — cần $\mu(D) < \infty$ một cách bản chất

> [!thm] (Định lý Hội tụ Bị chặn — BCT)
> $D$ với $\mu(D) < \infty$, $(f_n)$ đo được, $f_n \to f$ a.e., $|f_n| \le M$ a.e. (hằng số $M$). Khi đó $\int_D f_n\,d\mu \to \int_D f\,d\mu$.

> [!prf] Khung chứng minh
> Hằng số $M$ chỉ khả tích trên $D$ vì $\int_D M\,d\mu = M\mu(D) < \infty$ (đây là chỗ **duy nhất** dùng $\mu(D)<\infty$). Áp Fatou cho $g_n = f_n + M \ge 0$ được chiều $\int f \le \liminf \int f_n$; áp Fatou cho $h_n = M - f_n \ge 0$ được chiều $\limsup \int f_n \le \int f$. Kẹp lại.

> [!prob] Phản ví dụ Prob 8.10: bị chặn đều + hội tụ đều nhưng $\mu(D)=\infty$
> $f_n(x) = \frac{1}{n}\chi_{[1,n]}(x)$ trên $D=[1,\infty)$. Dãy này bị chặn đều bởi $M=1$, hơn nữa hội tụ **đều** về $f=0$ (không chỉ điểm), nhưng:
> $$\int_D f_n\,d\mu = 1 - \frac{1}{n} \to 1 \ne 0 = \int_D f\,d\mu$$
> **Bài học quan trọng**: ngay cả hội tụ đều cũng không cứu được nếu $\mu(D) = \infty$ — vì hằng chặn $M$ không khả tích trên không gian vô hạn, nên hàm trội "không đủ kiểm soát" lượng diện tích trải dài ra vô tận.

### 2.4 DCT — không cần $\mu(D) < \infty$

> [!obs] Vì sao DCT thoát được điều kiện $\mu(D)<\infty$?
> Trong DCT, hàm trội $g$ tự thân **đã được giả thiết khả tích** ($\int|g|\,d\mu < \infty$), bất kể $\mu(D)$ lớn hay nhỏ. Hàm trội $g$ đóng vai trò "đo lường kích thước hữu hiệu" của bài toán thay cho $\mu(D)$. Đây là lý do DCT là bản tổng quát thực sự của BCT chứ không chỉ là đổi tên: nó tách rời điều kiện về không gian ($\mu(D)<\infty$) khỏi điều kiện về hàm trội (khả tích), và chỉ giữ lại điều kiện thứ hai.
>
> Kiểm chứng nhanh: nếu áp dụng đúng cho ví dụ Prob 8.10 ở trên, hàm trội duy nhất khả dĩ "đều" cho mọi $n$ là $\sup_n f_n(x)$; nhưng $\sup_n \frac{1}{n}\chi_{[1,n]}(x)$ không khả tích trên $[1,\infty)$ (nó tiến dần về $0$ quá chậm để có tích phân hữu hạn) — đúng như dự đoán, DCT cũng phải thất bại ở đây vì không tìm được hàm trội khả tích.

---

## III. Trục 3 — Loại hàm trội: hằng số $M$ / hàm khả tích cố định $g$ / dãy hàm khả tích $g_n$

### 3.1 Trội bởi hằng số $M$, $\mu(D)<\infty$ — BCT (đã nêu ở mục 2.3)

### 3.2 Trội bởi hàm khả tích cố định $g$ — DCT

> [!thm] (Định lý Hội tụ Bị chặn Lebesgue — DCT)
> $(f_n)$ đo được, $f_n \to f$ a.e., tồn tại $g$ khả tích sao cho $|f_n| \le g$ a.e. với mọi $n$. Khi đó $\int_\Omega f_n\,d\mu \to \int_\Omega f\,d\mu$, và thêm nữa $\int_\Omega |f_n - f|\,d\mu \to 0$.

> [!prf] Khung chứng minh
> Hoàn toàn song song BCT, chỉ thay $M$ bởi $g$: áp Fatou cho $g+f_n \ge 0$ và $g - f_n \ge 0$, kẹp hai chiều. Phần $L^1$-hội tụ: dùng $|f_n-f| \le 2g$, áp Fatou cho $2g - |f_n-f| \ge 0$, suy ra $\limsup \int|f_n-f| \le 0$.

> [!obs] BCT là trường hợp riêng của DCT
> Đặt $g = M\chi_D$. Khi $\mu(D)<\infty$, hàm này khả tích ($\int g\,d\mu = M\mu(D) <\infty$), và $|f_n|\le M$ trên $D$ tương đương $|f_n|\le g$. Vậy BCT $=$ DCT thu hẹp vào trường hợp hàm trội là hằng số nhân chỉ thị của một tập hữu hạn độ đo.

### 3.3 Trội bởi dãy hàm khả tích $g_n$ — Generalized DCT (Prob 9.22)

> [!thm] (Prob 9.22)
> $f_n \to f$, $g_n \to g$ a.e. (cả hai dãy đo được, $g_n, g \ge 0$ khả tích), $|f_n| \le g_n$, và $\int_D g_n\,d\mu \to \int_D g\,d\mu < \infty$. Khi đó $f$ khả tích và $\int_D f_n\,d\mu \to \int_D f\,d\mu$.

> [!prf] Khung chứng minh
> Áp Fatou cho $g_n + f_n \ge 0$: vế trái cho $\int(g+f)$, vế phải cho $\lim\int g_n + \liminf \int f_n$; giản ước $\int g$ (hữu hạn, dùng giả thiết hội tụ của $\int g_n$) được $\int f \le \liminf \int f_n$. Tương tự với $g_n - f_n \ge 0$ được chiều kia. Kẹp lại.

> [!obs] DCT là trường hợp riêng của Generalized DCT
> Đặt $g_n \equiv g$ với mọi $n$: điều kiện $\int g_n \to \int g$ tự động đúng (hằng số), và điều kiện $g_n \to g$ a.e. cũng hiển nhiên. Vậy Generalized DCT nới lỏng đúng một chỗ duy nhất: **cho phép hàm trội thay đổi theo $n$**, miễn là tích phân của nó hội tụ về đúng giá trị giới hạn.

> [!obs] Điểm tinh tế dễ bị hỏi vặn
> Giả thiết $\int_D g_n\,d\mu \to \int_D g\,d\mu$ **không** tự động suy ra từ $g_n \to g$ a.e. (đây chính là loại mệnh đề mà ta đang cố chứng minh cho $f_n$!) — nó phải được cho thêm như giả thiết độc lập. Nếu chỉ có $g_n \to g$ a.e. mà không có hội tụ tích phân, định lý có thể sai (xem lại chính các phản ví dụ MCT/DCT ở mục V — chúng đều là các dãy $g_n \to g$ a.e. mà $\int g_n \not\to \int g$).

### 3.4 Trội chỉ một phía (chặn trên) bởi hàm khả tích — Fatou ngược (Hệ quả 5)

> [!thm] (Hệ quả 5: Fatou ngược)
> $(f_n)$ đo được (không cần không âm), tồn tại $g$ khả tích sao cho $f_n \le g$ a.e. với mọi $n$. Khi đó:
> $$\limsup_{n\to\infty} \int_D f_n\,d\mu \le \int_D \limsup_{n\to\infty} f_n\,d\mu$$

> [!prf] Khung chứng minh
> Đặt $h_n = g - f_n \ge 0$. Áp Fatou gốc cho $(h_n)$, dùng $\liminf(g-f_n) = g - \limsup f_n$ và $\liminf \int(g-f_n) = \int g - \limsup \int f_n$ (tách được vì $\int g < \infty$), rồi đổi dấu.

> [!obs] Vì sao đây là "Fatou đảo dấu" chứ không phải định lý độc lập?
> So với Fatou gốc (cần $f_n \ge 0$, bất đẳng thức theo chiều $\liminf$, $\le$), Fatou ngược **đổi chặn dưới 0 thành chặn trên bởi hàm khả tích $g$**, và bất đẳng thức đảo chiều thành $\limsup$, $\le$. Cấu trúc chứng minh là phản chiếu gương: lấy $g$ trừ đi $f_n$ để quay về dạng không âm rồi áp lại Fatou gốc — đúng kỹ thuật được dùng lặp lại trong BCT và DCT (mục 3.1, 3.2).

---

## IV. Trục 4 — Hàm không âm bị bỏ hoàn toàn (không có gì chặn)

> [!obs] Trường hợp không có domination dưới lẫn trên
> Nếu $(f_n)$ chỉ đo được (không không âm, không bị chặn bởi hàm khả tích nào, không đơn điệu), thì **không có kết luận tổng quát nào** về việc hoán đổi $\lim$ và $\int$ — kể cả khi $f_n \to f$ a.e. điểm và mọi tích phân $\int f_n\,d\mu$ đều hữu hạn riêng lẻ.
>
> Phản ví dụ đơn giản nhất: trên $D=[0,1]$ với độ đo Lebesgue, đặt $f_n(x) = n^2 x(1-x)^n$ (mass tập trung và "đi lên" gần $x=0$ rồi co lại). Có thể kiểm tra $f_n \to 0$ a.e. trên $(0,1]$ nhưng $\int_0^1 f_n\,dx \to \infty$ hoặc một hằng số khác $0$ tùy cách dựng cụ thể — bản chất là khối lượng "trượt" theo phương dọc (giống cách $\chi_{[n,\infty)}$ trượt theo phương ngang ở mục 1.2). Đây là lý do tất cả các định lý ở trên đều cần ít nhất một trong hai cơ chế kiểm soát: **đơn điệu** (MCT) hoặc **bị trội bởi một hàm/hằng số khả tích** (Fatou/BCT/DCT).

> [!obs] Quy tắc ghi nhớ tổng quát
> Mọi định lý hoán đổi $\lim \leftrightarrow \int$ trong lý thuyết độ đo đều cần một trong hai cơ chế:
> 1. **Đơn điệu** (loại trừ khả năng "khối lượng trượt đi rồi quay lại") — MCT.
> 2. **Bị trội bởi hàm khả tích** (chặn cứng khối lượng tại mọi bước) — Fatou/BCT/DCT.
>
> Thiếu cả hai, không có gì đảm bảo — đây chính là tinh thần trả lời cho câu hỏi "nếu chỉ có hàm đo được (không âm, không đơn điệu, không trội)" của giảng viên.

---

## V. Bảng tổng hợp so sánh

| Định lý | Dấu hàm | Đơn điệu? | $\mu(D)$ | Hàm trội | Hội tụ điểm | Kết luận |
|---|---|---|---|---|---|---|
| MCT (tăng) | $f_n \ge 0$ | $f_n \uparrow f$ | bất kỳ | — | a.e. | $\int f_n \to \int f$ |
| MCT (giảm) | $f_n \ge 0$ | $f_n \downarrow f$ | bất kỳ | cần $\exists k: \int f_k<\infty$ | a.e. | $\int f_n \to \int f$ |
| Fatou | $f_n \ge 0$ | không cần | bất kỳ | — | không cần (chỉ cần liminf) | $\int \liminf f_n \le \liminf \int f_n$ |
| Fatou ngược | bất kỳ | không cần | bất kỳ | $f_n \le g$, $g$ khả tích | không cần | $\limsup \int f_n \le \int \limsup f_n$ |
| Định lý 8.14 | $f_n \ge 0$ | $f_n \le f$ | bất kỳ | (chính $f$ đóng vai trò trội) | a.e. | $\int f_n \to \int f$ |
| BCT | bất kỳ | không cần | **$<\infty$** | hằng số $M$ | a.e. | $\int f_n \to \int f$ |
| DCT | bất kỳ | không cần | bất kỳ | hàm khả tích $g$ cố định | a.e. | $\int f_n \to \int f$, $\int|f_n-f|\to 0$ |
| Generalized DCT | bất kỳ | không cần | bất kỳ | dãy $g_n \to g$, $\int g_n \to \int g <\infty$ | a.e. | $\int f_n \to \int f$ |

---

## VI. Bản đồ phản ví dụ — mỗi phản ví dụ ứng với điều kiện nào bị vi phạm

| Phản ví dụ | Định lý bị thách thức | Điều kiện thiếu |
|---|---|---|
| $f_n = nx^n$ trên $[0,1]$ | MCT | dãy **không đơn điệu tăng** (tăng rồi giảm theo $n$ tại mỗi $x$ cố định) |
| $f_n = \chi_{[n,\infty)}$ trên $[0,\infty)$ | MCT giảm | không có số hạng nào khả tích (mọi $\int f_n = \infty$) |
| $f_n = \frac{1}{n}\chi_{[1,n]}$ trên $[1,\infty)$ | BCT | $\mu(D) = \infty$ (dù bị chặn đều và hội tụ đều) |
| $f_n(x) = \frac{n}{1+n^2x^2}$ trên $[a,\infty)$, $a\le 0$ | DCT | không tồn tại hàm trội khả tích thống nhất gần $x=0$ (hàm trội nhỏ nhất khả dĩ là $\frac{1}{2\lvert x\rvert}$, không khả tích quanh $0$) |

Quan sát chung: mỗi phản ví dụ chỉ "phá" đúng **một** điều kiện trong bảng ở Mục V — đây là cách hiệu quả để trả lời câu "vì sao định lý cần điều kiện này": chỉ cần nhớ phản ví dụ tương ứng.

---

## VII. Checklist câu hỏi vấn đáp gợi ý

> [!question] "Nếu xét hàm không âm thì điều kiện hội tụ là gì?"
> Tùy thêm trục đơn điệu: tăng → MCT (không cần gì thêm); giảm → MCT giảm (cần một số hạng khả tích); không đơn điệu → chỉ còn bất đẳng thức một chiều (Fatou), muốn có đẳng thức cần thêm domination hoặc $f_n \le f$ (Định lý 8.14).

> [!question] "Nếu không gian đo không hữu hạn thì sao?"
> MCT (tăng) và DCT vẫn đúng nguyên vẹn (không dùng đến $\mu(D)<\infty$ trong chứng minh). BCT thì **sụp đổ** vì hàm hằng $M$ không khả tích trên không gian vô hạn — xem phản ví dụ Prob 8.10. MCT giảm cũng dễ sụp đổ trên không gian vô hạn nếu không có số hạng khả tích (phản ví dụ $\chi_{[n,\infty)}$), dù bản chất nguyên nhân là thiếu tính khả tích chứ không phải trực tiếp do $\mu(D)=\infty$.

> [!question] "Nếu hàm giảm thay vì tăng thì sao?"
> Cần thêm điều kiện tồn tại ít nhất một số hạng khả tích trong dãy (Hệ quả 4); chứng minh bằng cách quy về MCT tăng qua $h_n = f_1 - f_n$. Không có điều kiện này thì sai (phản ví dụ $\chi_{[n,\infty)}$).

> [!question] "Nếu thay bị chặn bởi hàm khả tích thành bị chặn bởi hằng số thì sao?"
> Đây là đi từ DCT (tổng quát) xuống BCT (đặc biệt): đặt $g = M\chi_D$. Cái giá phải trả là cần thêm $\mu(D)<\infty$ để $g$ khả tích — nếu không, hằng số $M$ không còn đóng vai trò "hàm trội khả tích" được nữa (phản ví dụ Prob 8.10).

> [!question] "Nếu chỉ là hàm đo được (bỏ điều kiện không âm) mà không có domination thì sao?"
> Không có kết luận tổng quát — cần ít nhất một cơ chế kiểm soát: đơn điệu (MCT) hoặc bị trội bởi hàm/hằng số khả tích (Fatou hai chiều/BCT/DCT). Thiếu cả hai, khối lượng có thể "trượt đi" theo phương ngang (như $\chi_{[n,\infty)}$) hoặc phương dọc, phá vỡ đẳng thức.

> [!question] "Vì sao Fatou chỉ là bất đẳng thức một chiều, không phải đẳng thức?"
> Vì $g_n = \inf_{k\ge n} f_k \le f_n$ chỉ cho một chiều bất đẳng thức tích phân; không có gì đảm bảo $g_n$ "đuổi kịp" $f_n$ về mặt tích phân nếu thiếu thêm giả thiết (đơn điệu, hoặc domination, hoặc $f_n \le f$). Khi có thêm một trong các giả thiết đó, chiều còn lại tự động xuất hiện và ta được đẳng thức (MCT, Định lý 8.14).

# Bổ sung: Phản ví dụ và Mối quan hệ — Định lý Hội tụ Vitali

> [!info] Vị trí của tài liệu này
> Đây là phần bổ sung cho khối kiến thức Khả tích Lebesgue — Khả tích đều — Vitali đã có. Mục tiêu: (1) cô lập tính cần thiết của từng giả thiết trong định lý Vitali bằng phản ví dụ, (2) hoàn thiện ví dụ "Vitali mạnh hơn DCT" thành một ví dụ áp dụng đầy đủ, (3) dựng bản đồ quan hệ giữa Vitali và MCT/Fatou/BCT/DCT/Generalized DCT.

---

## 1. Phản ví dụ cô lập từng giả thiết của Định lý Vitali

Định lý Vitali có đúng 3 giả thiết: (a) $f_n \to f$ a.e., (b) khả tích đều (Tính chất 1), (c) tính chặt (Tính chất 2). Ba phản ví dụ dưới đây mỗi cái chỉ vi phạm **đúng một** giả thiết, hai giả thiết còn lại vẫn giữ nguyên — đây là cách hỏi vặn kinh điển của giảng viên.

### 1.1 Vi phạm (a): giữ nguyên Khả tích đều + Tính chặt, bỏ hội tụ a.e.

> [!prob] Phản ví dụ
> Trên $D = [0,1]$ với độ đo Lebesgue, đặt $f_n(x) = (-1)^n$ (hàm hằng theo $x$, đổi dấu theo $n$).

> [!ans]
> **Khả tích đều**: $|f_n(x)| = 1$ với mọi $x, n$, nên $\int_A |f_n| = \mu(A)$ không phụ thuộc $n$. Chọn $\delta = \varepsilon$ là xong — khả tích đều một cách tầm thường.
>
> **Tính chặt**: $\mu(D) = 1 < \infty$, áp dụng trực tiếp Nhận xét 2 (chọn $B_\varepsilon = D$).
>
> **Hội tụ a.e.**: dãy số $(-1)^n$ không hội tụ tại **bất kỳ** điểm $x$ nào (không chỉ là vi phạm a.e., mà vi phạm tại mọi điểm). Thật vậy $\int_D |f_n - f_{n+1}|\,d\mu = \int_D 2\,d\mu = 2$ với mọi $n$, nên dãy $(f_n)$ thậm chí không phải dãy Cauchy trong $L^1$ — không có hàm giới hạn $f$ nào để hội tụ tới cả.
>
> **Bài học**: khả tích đều và tính chặt chỉ kiểm soát được "khối lượng" của dãy hàm tại từng thời điểm, hoàn toàn không nói gì về việc dãy có ổn định (hội tụ) theo $n$ hay không. Hai điều kiện đó là điều kiện về **độ lớn**, còn hội tụ a.e. là điều kiện về **hành vi theo thời gian** — độc lập nhau.

### 1.2 Vi phạm (b): giữ nguyên hội tụ a.e. + Tính chặt, bỏ Khả tích đều

> [!prob] Phản ví dụ
> Trên $D = [0,1]$, đặt $f_n(x) = n \cdot \chi_{[0, 1/n]}(x)$.

> [!ans]
> **Hội tụ a.e.**: với $x > 0$ cố định, khi $n > 1/x$ thì $x \notin [0, 1/n]$ nên $f_n(x) = 0$. Vậy $f_n(x) \to 0$ với mọi $x \in (0,1]$, tức là hội tụ a.e. về $f \equiv 0$ (bỏ qua điểm $x=0$ có độ đo $0$).
>
> **Tính chặt**: $\mu(D) = 1 < \infty$, tự động đúng theo Nhận xét 2.
>
> **Khả tích đều — thất bại**: Lấy $A_n = [0, 1/n]$, ta có $\mu(A_n) = 1/n \to 0$, nhưng:
> $$\int_{A_n} |f_n|\,d\mu = n \cdot \mu(A_n) = n \cdot \frac{1}{n} = 1$$
> Với $\varepsilon = \frac12$, dù chọn $\delta > 0$ nhỏ bao nhiêu, ta luôn tìm được $n$ đủ lớn để $\mu(A_n) = 1/n < \delta$ nhưng $\int_{A_n}|f_n| = 1 > \varepsilon$. Vậy dãy **không** khả tích đều.
>
> **Hệ quả**: $\int_D f_n\,d\mu = 1$ với mọi $n$, trong khi $\int_D f\,d\mu = 0$. Do đó:
> $$\int_D |f_n - f|\,d\mu = 1 \not\to 0$$
> Kết luận của Vitali sụp đổ đúng như dự đoán.
>
> **Bài học**: đây là hiện tượng "khối lượng trượt theo phương dọc" (cùng một vị trí $x=0$, nhưng độ cao $n \to \infty$) — đối lập với phản ví dụ MCT giảm ($\chi_{[n,\infty)}$, "trượt theo phương ngang"). Khả tích đều chính là điều kiện ngăn chặn kiểu trượt dọc này.

### 1.3 Vi phạm (c): giữ nguyên hội tụ a.e. + Khả tích đều, bỏ Tính chặt

> [!prob] Phản ví dụ
> Trên $D = [1, \infty)$, đặt $f_n(x) = \frac{1}{n}\chi_{[1,n]}(x)$ — **chính là phản ví dụ Prob 8.10** đã gặp ở phần BCT, nay nhìn qua lăng kính Vitali.

> [!ans]
> **Hội tụ điểm**: với $x \ge 1$ cố định, khi $n \ge x$ thì $f_n(x) = 1/n \to 0$. Vậy $f_n \to 0$ tại **mọi** điểm (mạnh hơn cả a.e.).
>
> **Khả tích đều**: vì $0 \le f_n \le 1$ với mọi $n$ (do $1/n \le 1$), ta có $\int_A |f_n| \le \mu(A)$ với mọi $A$. Chọn $\delta = \varepsilon$: khả tích đều đúng (tầm thường, từ bị chặn đều bởi hằng số — xem mục 3.3 bên dưới để thấy đây không phải ngẫu nhiên).
>
> **Tính chặt — thất bại**: với bất kỳ tập $B$ nào có $\mu(B) < \infty$ (chẳng hạn $B = [1, 1+M]$), tập bù $B^c \supset [1+M, n]$ khi $n$ đủ lớn, và:
> $$\int_{B^c} |f_n|\,d\mu \ge \int_{[1+M, n]} \frac{1}{n}\,d\mu = \frac{n - 1 - M}{n} \xrightarrow{n \to \infty} 1$$
> Vậy với $\varepsilon < 1$, **không** một $B_\varepsilon$ cố định nào (dù chọn $\mu(B_\varepsilon)$ lớn đến mấy, miễn hữu hạn) có thể giữ $\int_{B_\varepsilon^c}|f_n| < \varepsilon$ cho **mọi** $n$ — khối lượng luôn "thoát" về phía $\infty$ khi $n$ đủ lớn. Tính chặt thất bại.
>
> **Hệ quả**: $\int_D f_n\,d\mu = 1 - \frac1n \to 1 \ne 0 = \int_D f\,d\mu$, đúng như đã tính ở Prob 8.10.
>
> **Liên hệ quan trọng**: đây chính là minh chứng Tính chặt là điều kiện "thay thế vai trò" của giả thiết $\mu(D) < \infty$ trong BCT (xem mục 3.3) — khi không gian vô hạn và khối lượng không bị "nhốt" vào một vùng hữu hạn, hội tụ tích phân thất bại dù khả tích đều vẫn đúng.

---

## 2. Ví dụ áp dụng: Vitali thành công nơi DCT bó tay

Tài liệu gốc đã dựng dãy $f_n = n \cdot \mathbf{1}_{[\frac1n, \frac1n + \frac1{n^2})}$ để chỉ ra không tồn tại hàm trội khả tích chung. Ta hoàn thiện nó thành một ví dụ áp dụng đầy đủ của Vitali.

> [!exm] Áp dụng Định lý Vitali khi DCT không dùng được
> Trên $\mathbb{R}$ với độ đo Lebesgue, xét $f_n = n \cdot \mathbf{1}_{[\frac1n, \frac1n + \frac1{n^2})}$.

> [!ans]
> **Bước 1 — Hội tụ điểm**: cố định $x \ne 0$. Vì các khoảng $\left[\frac1n, \frac1n+\frac1{n^2}\right)$ co dần về gốc tọa độ khi $n \to \infty$, tồn tại $N$ đủ lớn sao cho với mọi $n \ge N$, khoảng này nằm hoàn toàn trong $(0, |x|/2)$, không còn chứa $x$. Vậy $f_n(x) = 0$ với $n$ đủ lớn, suy ra $f_n(x) \to 0$. Tại $x = 0$: vì $\frac1n > 0$ với mọi $n$, điểm $0$ không thuộc bất kỳ khoảng nào, nên $f_n(0) = 0$ luôn. Vậy $f_n \to 0$ **tại mọi điểm** của $\mathbb{R}$.
>
> **Bước 2 — Khả tích đều và Tính chặt**: đã chứng minh trong phản ví dụ gốc rằng $\int_{\mathbb{R}} |f_n| = \frac1n \to 0$; điều này (khối lượng tự triệt tiêu đều) kéo theo cả hai tính chất Vitali (xem chi tiết hơn ở mục 3.3 — bị chặn bởi một dãy khối lượng tiến về $0$ là trường hợp đặc biệt mạnh của khả tích đều và tính chặt).
>
> **Bước 3 — Vì sao DCT không áp dụng trực tiếp được**: hàm bao $\sup_n f_n = \sum_{n=1}^\infty n \cdot \mathbf{1}_{[\frac1n, \frac1n+\frac1{n^2})}$ có $\int_{\mathbb{R}} \sup_n f_n = \sum \frac1n = \infty$ (chuỗi điều hòa phân kỳ). Vậy **không tồn tại** hàm trội khả tích $g$ nào thỏa $|f_n| \le g$ — giả thiết của DCT bị vi phạm ngay từ đầu, DCT không thể dùng để kết luận.
>
> **Bước 4 — Vitali vẫn kết luận được**: vì $(f_n)$ thỏa cả ba giả thiết của Vitali (hội tụ điểm, khả tích đều, tính chặt), định lý Vitali cho ngay:
> $$\lim_{n \to \infty} \int_{\mathbb{R}} |f_n - 0|\,d\mu = 0$$
> (Khớp với tính toán trực tiếp $\int |f_n| = 1/n \to 0$ — Vitali ở đây đóng vai trò xác nhận lý thuyết cho một tính toán đã biết, minh họa rằng **bộ giả thiết của Vitali thực sự yếu hơn DCT một cách nghiêm ngặt**, không phải chỉ là tái diễn đạt.)

---

## 3. Mối quan hệ giữa Vitali và các định lý hội tụ khác

### 3.0 Sơ đồ tổng thể cập nhật
```

MCT (tăng) ──(nếu lim ∫f_n < ∞)──► DCT với g = f ──► hội tụ L¹  
│  
│ bỏ tính đơn điệu, giữ không âm  
▼  
Bổ đề Fatou ──► Fatou ngược ──► DCT ──┬──► BCT (g ≡ M, μ(D) < ∞)  
│ └──► Generalized DCT (g → dãy gₙ)  
│ dùng làm công cụ nền cho cả 2 "mảnh" của chứng minh,  
│ phối hợp với Định lý Egorov để bắc cầu hội tụ điểm → hội tụ đều  
▼  
Định lý Hội tụ VITALI (Khả tích đều + Tính chặt + h.t. a.e. ⟹ hội tụ L¹)  
▲  
└── BCT và DCT đều là trường hợp riêng (UI, Tight suy ra tự động từ giả thiết của chúng)  
Generalized DCT KHÔNG tự động nằm trong khung Vitali (xem mục 3.6)

```

### 3.1 Vitali và Fatou: quan hệ công cụ — kết quả

> [!obs]
> Trong chứng minh Vitali, Bổ đề Fatou được dùng để chặn $\int_E |f|$ bởi $\liminf \int_E |f_n|$ trên cả hai mảnh "đuôi" ($B_\varepsilon^c$) và "phần nhỏ" ($A_\varepsilon$) — đây là kỹ thuật quen thuộc: **vì $f$ chỉ được biết qua giới hạn điểm của $f_n$, mọi đánh giá tích phân liên quan đến $f$ đều phải đi qua Fatou** (không có công cụ nào khác cho phép kiểm soát $\int |f|$ trực tiếp từ giả thiết hội tụ điểm). Đây chính là sợi chỉ xuyên suốt nối Vitali với toàn bộ họ BCT/DCT đã học trước đó — tất cả đều quy về Fatou ở lõi.

### 3.2 Vitali và Định lý Egorov: cầu nối hội tụ điểm → hội tụ đều

> [!obs]
> Egorov là công cụ **duy nhất** trong toàn bộ hệ thống các định lý hội tụ (MCT, Fatou, BCT, DCT) xuất hiện lần đầu ở Vitali. Vai trò của nó: biến hội tụ a.e. (yếu) thành hội tụ đều trên một tập "gần như toàn bộ" $B_\varepsilon \setminus A_\varepsilon$ (mất đi một phần nhỏ $A_\varepsilon$ có độ đo $<\delta$, được kiểm soát bởi khả tích đều). Trên phần hội tụ đều đó, $\int |f_n - f|$ được đánh giá trực tiếp bằng $\mu(B_\varepsilon \setminus A_\varepsilon) \cdot \sup|f_n-f| \to 0$ — không cần Fatou ở mảnh này.
>
> **Hệ quả thú vị**: vì BCT là trường hợp riêng của Vitali (mục 3.3), BCT hoàn toàn có thể được chứng minh lại bằng kỹ thuật Egorov thay vì kỹ thuật "Fatou hai chiều" đã trình bày trước đây. Khung chứng minh thay thế: $\mu(D) < \infty$ ⟹ Egorov cho hội tụ đều trên $D \setminus A_\varepsilon$ với $\mu(A_\varepsilon)$ nhỏ tùy ý; trên $A_\varepsilon$ dùng cận $|f_n - f| \le 2M$ để chặn $\int_{A_\varepsilon}|f_n-f| \le 2M\mu(A_\varepsilon)$ nhỏ tùy ý; cộng hai mảnh lại. Đây chính là phiên bản "thu nhỏ" của chứng minh Vitali khi hàm trội là hằng số.

### 3.3 BCT là hệ quả của Vitali

> [!thm] (Hệ quả: BCT suy ra từ Vitali)
> Giả thiết BCT ($\mu(D) < \infty$, $f_n \to f$ a.e., $|f_n| \le M$ a.e.) kéo theo cả hai giả thiết của Vitali.

> [!prf]
> **Tính chặt**: tự động từ $\mu(D) < \infty$ (Nhận xét 2), không cần dùng đến $M$.
>
> **Khả tích đều**: với mọi $A \in \mathfrak{A}$, $\int_A |f_n| \le M \mu(A)$ (đơn điệu tích phân, không cần $M \in L^1$ hay $\mu(D)<\infty$ ở bước này). Cho $\varepsilon > 0$, chọn $\delta = \varepsilon/M$: $\mu(A) < \delta \implies \int_A |f_n| < \varepsilon$, đúng với mọi $n$.
>
> Áp dụng Vitali: $f \in L^1$ và $\int_D |f_n - f|\,d\mu \to 0$ — **mạnh hơn** kết luận gốc của BCT (vốn chỉ là $\int f_n \to \int f$), vì $\left|\int f_n - \int f\right| \le \int |f_n - f| \to 0$.

> [!obs] Vì sao tách bạch hai vai trò là quan trọng
> Phản ví dụ Prob 8.10 (mục 1.3) cho thấy: bị chặn bởi hằng số $M$ chỉ tự động cho **khả tích đều** (không cần $\mu(D)<\infty$ ở bước này!), còn **tính chặt** mới thực sự cần đến $\mu(D) < \infty$. Đây là lý giải chính xác cho câu hỏi "vì sao BCT cần không gian hữu hạn đo": không phải vì khả tích đều cần nó, mà vì tính chặt cần nó.

### 3.4 DCT là hệ quả của Vitali

> [!obs]
> Đây chính là nội dung "Nhận xét 1" đã có sẵn trong tài liệu gốc: $|f_n| \le g$ với $g \in L^1$ kéo theo cả khả tích đều (từ Bổ đề liên tục tuyệt đối áp cho $g$) lẫn tính chặt (từ Bổ đề tính "chặt" áp cho $g$) — **không cần** $\mu(D) < \infty$ ở bất kỳ bước nào (khác hẳn BCT). Việc DCT tự thân đã chứng minh trực tiếp $\int|f_n-f| \to 0$ (Bước 4 trong chứng minh DCT) là một kiểm tra nhất quán tốt: hai con đường (DCT trực tiếp, và DCT-qua-Vitali) phải cho cùng kết luận, và quả thực đúng vậy.

### 3.5 MCT (giới hạn hữu hạn) cũng kéo theo hội tụ $L^1$

> [!thm] (Hệ quả: MCT với giới hạn tích phân hữu hạn kéo theo hội tụ $L^1$)
> Nếu $f_n \uparrow f$ a.e., $f_n \ge 0$ đo được, và thêm điều kiện $\int_D f\,d\mu < \infty$ (tương đương $\lim_n \int_D f_n\,d\mu < \infty$ theo MCT), thì $f \in L^1$ và $\int_D |f_n - f|\,d\mu \to 0$.

> [!prf]
> Vì $0 \le f_n \le f$ (do dãy tăng) và $f \in L^1$ theo giả thiết, chính **$f$ đóng vai trò hàm trội khả tích** cho toàn bộ dãy: $|f_n| = f_n \le f$. Áp dụng trực tiếp DCT với $g = f$ (hàm trội cố định, không đổi theo $n$ — hợp lệ vì $f$ không phụ thuộc $n$), ta được ngay $\int_D |f_n - f|\,d\mu \to 0$.

> [!obs] Điểm hay bị bỏ sót
> MCT (bản gốc, không có điều kiện gì về $\mu(D)$) chỉ phát biểu hội tụ của dãy số $\int f_n \to \int f$, **không** đề cập hội tụ $L^1$. Nhiều người lầm tưởng MCT "yếu hơn" và tách biệt khỏi họ DCT/Vitali, nhưng thực ra **ngay khi giới hạn hữu hạn**, MCT tự động nằm gọn trong khung DCT (và do đó cả Vitali) vì hàm giới hạn $f$ luôn là một hàm trội hợp lệ cho dãy của chính nó. Đây là quan hệ còn thiếu trong bản đồ ban đầu.

### 3.6 Generalized DCT (Prob 9.22) và Vitali: hai hướng tổng quát hóa độc lập

> [!obs] Vì sao không cái nào chứa cái nào một cách hiển nhiên
> DCT có thể tổng quát hóa theo hai trục khác nhau:
> - **Trục cấu trúc** (Vitali): bỏ hẳn yêu cầu "tồn tại MỘT hàm trội", thay bằng điều kiện định tính về kiểm soát khối lượng đều — khả tích đều + tính chặt.
> - **Trục định lượng** (Generalized DCT): vẫn giữ cấu trúc "có hàm trội", nhưng cho phép hàm trội **thay đổi theo $n$** ($g_n$), miễn là $\int g_n \to \int g < \infty$.
>
> Hai trục này nói chung **không lồng vào nhau**: giả thiết của Generalized DCT (chỉ cần $\int g_n \to \int g$) không tự động cho khả tích đều/tính chặt **đều theo $n$** của $(f_n)$, vì bản thân dãy $(g_n)$ có thể "trượt khối lượng" theo $n$ giống hệt các phản ví dụ ở mục 1 mà vẫn giữ $\int g_n \to \int g$ đúng. Ngược lại, giả thiết Vitali (UI + tight) không đòi hỏi cấu trúc "có hàm trội" nào cả, nên cũng không suy ra Generalized DCT một cách trực tiếp.

> [!thm] (Tăng cường: Generalized DCT cũng cho hội tụ $L^1$)
> Với đúng giả thiết của Prob 9.22, ta có thêm $\int_D |f_n - f|\,d\mu \to 0$ (tài liệu gốc chỉ phát biểu hội tụ của $\int f_n \to \int f$).

> [!prf] Khung chứng minh (kỹ thuật Fatou y hệt DCT)
> Vì $|f_n| \le g_n$ và $|f| \le g$, ta có $|f_n - f| \le g_n + g$. Xét dãy không âm $h_n = g_n + g - |f_n - f| \ge 0$. Áp Fatou: $\int \liminf h_n \le \liminf \int h_n$.
>
> Vế trái: $\liminf h_n = g + g - 0 = 2g$ a.e. (vì $g_n \to g$ và $|f_n-f|\to 0$ a.e.), nên $\int \liminf h_n = 2\int g$.
>
> Vế phải: $\int h_n = \int g_n + \int g - \int|f_n-f|$. Vì $\int g_n \to \int g$ (dãy hội tụ, không chỉ liminf), ta có $\liminf \int h_n = \int g + \int g - \limsup \int|f_n-f| = 2\int g - \limsup\int|f_n-f|$ (dùng tính chất: nếu $a_n \to A$ thì $\liminf(a_n - b_n) = A - \limsup b_n$).
>
> Kết hợp: $2\int g \le 2\int g - \limsup\int|f_n-f| \implies \limsup\int|f_n-f| \le 0$. Vì tích phân hàm không âm luôn $\ge 0$, suy ra $\lim\int_D|f_n-f|\,d\mu = 0$.

> [!obs] Khi nào Generalized DCT trở thành hệ quả của Vitali
> Nếu thêm giả thiết rằng bản thân họ $(g_n)$ cũng khả tích đều và chặt (chẳng hạn khi tất cả $g_n$ bị chặn bởi một hàm khả tích chung $G$ — quy về đúng tình huống của Nhận xét 1), thì từ $|f_n| \le g_n \le G$ suy ra $(f_n)$ cũng khả tích đều và chặt, và khi đó Generalized DCT thực sự trở thành một trường hợp riêng của Vitali. Nhưng đây là một **giả thiết bổ sung**, không phải hệ quả tự động của giả thiết gốc trong Prob 9.22.

---

## 4. Bảng tổng hợp mở rộng (thêm Vitali)

| Định lý | Giả thiết chính | Cần hàm/hằng trội? | $\mu(D)$ | Kết luận |
|---|---|---|---|---|
| MCT (tăng, $\int f<\infty$) | $f_n \uparrow f$ a.e. | $f$ tự làm trội | bất kỳ | $\int f_n \to \int f$ **và** $\int\lvert f_n-f\rvert \to 0$ |
| BCT | $\lvert f_n\rvert \le M$ | hằng số $M$ | $<\infty$ | $\int f_n \to \int f$ (suy ra từ Vitali: cả $L^1$) |
| DCT | $\lvert f_n\rvert \le g$ | $g$ cố định, khả tích | bất kỳ | $\int f_n \to \int f$, $\int\lvert f_n-f\rvert \to 0$ |
| Generalized DCT | $\lvert f_n\rvert \le g_n$, $\int g_n \to \int g$ | dãy $g_n$ | bất kỳ | $\int f_n \to \int f$, $\int\lvert f_n - f\rvert \to 0$ (tăng cường) |
| **Vitali** | Khả tích đều + Tính chặt | **không cần** hàm trội nào | bất kỳ | $\int\lvert f_n - f\rvert \to 0$ (mạnh nhất, là dạng tổng quát thực sự của BCT/DCT) |

---

## 5. Checklist câu hỏi vấn đáp bổ sung

> [!question] "Vitali có thay thế hoàn toàn được DCT/BCT không?"
> Có, theo chiều tổng quát hóa (DCT/BCT ⟹ giả thiết Vitali, mục 3.3–3.4), nhưng Vitali đòi hỏi kiểm tra hai điều kiện trừu tượng hơn (khả tích đều, tính chặt) thay vì chỉ cần "tìm một hàm trội" — trên thực hành, nếu tìm được hàm trội ngay thì dùng DCT cho gọn; Vitali chỉ thực sự cần thiết khi **không tồn tại** hàm trội khả tích (như ví dụ mục 2).

> [!question] "Vitali có liên hệ gì với Generalized DCT không?"
> Không lồng nhau một cách tự động (mục 3.6) — đây là hai hướng tổng quát hóa độc lập của DCT. Tuy nhiên cả hai đều có thể tăng cường lên hội tụ $L^1$ bằng đúng một kỹ thuật Fatou như nhau.

> [!question] "Công cụ nào là duy nhất chỉ xuất hiện trong chứng minh Vitali mà không xuất hiện ở MCT/Fatou/BCT/DCT?"
> Định lý Egorov — đây là điểm khác biệt cấu trúc cốt lõi giữa Vitali và phần còn lại của họ định lý hội tụ.
```
# Giải đề minh họa — Thực hành Thống kê

## Phần A. Mô tả dữ liệu, trực quan hóa và R cơ bản

**Câu 1.** Với `DuLieu` là một `data.frame` có cột `ThoiGian`, cách truy xuất đúng biến này là gì?

**Đáp án: B.** `DuLieu$ThoiGian`

Toán tử `$` dùng để lấy một cột theo tên trong `data.frame`. `ThoiGian` đứng một mình không tồn tại trong môi trường làm việc; `DuLieu[ThoiGian]` thiếu dấu ngoặc kép cho tên cột; `data.frame$ThoiGian` gọi vào hàm tạo `data.frame` chứ không phải biến `DuLieu`.

**Câu 2.** Phát biểu nào đúng nhất về `matrix` và `data.frame`?

**Đáp án: B.** `matrix` thường ép các phần tử về cùng một kiểu, còn `data.frame` có thể chứa các cột khác kiểu.

`matrix` là cấu trúc đồng nhất kiểu dữ liệu, trong khi mỗi cột của `data.frame` có thể là số, ký tự, hoặc yếu tố (factor) khác nhau — đây là điểm khác biệt cốt lõi giữa hai cấu trúc dữ liệu này trong R.

**Câu 3.** Khi hai mẫu có đơn vị đo khác nhau, số đo phù hợp nhất để so sánh độ phân tán tương đối là gì?

**Đáp án: C.** Hệ số biến thiên $CV = s/|\bar{x}|$

Độ lệch chuẩn và phương sai phụ thuộc vào đơn vị đo nên không so sánh trực tiếp được giữa hai mẫu có thang đo khác nhau. $CV$ chuẩn hóa độ lệch chuẩn theo trung bình, cho một đại lượng không thứ nguyên để so sánh độ phân tán tương đối.

**Câu 4.** Với `so_luong`, đoạn mã nào lập bảng tần số và bảng tần suất đúng?

**Đáp án: A.** `table(so_luong)` và `prop.table(table(so_luong))`

`table()` đếm số lần xuất hiện của mỗi giá trị (tần số); `prop.table()` chia mỗi tần số cho tổng để ra tỷ lệ (tần suất). Đây là cặp hàm chuẩn cho dữ liệu định tính hoặc rời rạc.

**Câu 5.** Với `x <- c(42,37,45,39,41,44)`, giá trị `mean(x) - median(x)` bằng bao nhiêu?

**Đáp án: A.** $-1/6$

$\bar{x} = 248/6 = 41.333\ldots$; sắp xếp tăng dần: $37,39,41,42,44,45$, trung vị là trung bình cộng của hai giá trị giữa $(41+42)/2 = 41.5$. Vậy $\bar{x} - \text{median} = 41.333 - 41.5 = -1/6$.

**Câu 6.** Đoạn mã nào tạo histogram của `income` có chồng đường mật độ ước lượng?

**Đáp án: A.** `hist(income, freq=FALSE); lines(density(income))`

`freq=FALSE` chuyển trục tung của histogram sang mật độ (thay vì tần số) để có cùng thang đo với đường mật độ ước lượng (KDE) do `density()` trả về, cho phép chồng hai đồ thị một cách nhất quán bằng `lines()`.

**Câu 7.** Đoạn mã nào vẽ boxplot so sánh `score` giữa các nhóm `class`?

**Đáp án: A.** `boxplot(score ~ class)`

Cú pháp công thức `y ~ g` trong `boxplot()` yêu cầu R vẽ một boxplot riêng cho mỗi mức của biến nhóm `g`, cho phép so sánh trực quan phân phối `score` giữa các lớp.

**Câu 8.** Hệ số tương quan mẫu `cor(x,y)` đo chủ yếu điều gì?

**Đáp án: B.** Mức độ quan hệ tuyến tính giữa hai biến.

Hệ số tương quan Pearson chỉ đo mức độ và chiều của quan hệ **tuyến tính**; nó không hàm ý quan hệ nhân quả và có thể gần 0 ngay cả khi tồn tại quan hệ phi tuyến mạnh.

**Câu 9.** Đoạn mã `plot(height, weight); abline(lm(weight ~ height))` có mục đích chính là gì?

**Đáp án: B.** Vẽ đồ thị phân tán và thêm đường hồi quy tuyến tính.

`plot()` vẽ scatter giữa hai biến định lượng, còn `abline(lm(...))` vẽ đường hồi quy ước lượng từ mô hình `lm`, thể hiện xu hướng tuyến tính giữa `height` và `weight`.

**Câu 10.** Đúng/sai.

- (i) **Đúng.** `sd(x)` trong R mặc định dùng mẫu số $n-1$ (ước lượng không chệch của độ lệch chuẩn tổng thể).
- (ii) **Sai.** `var(x)` dùng mẫu số $n-1$ còn `mean((x-mean(x))^2)` dùng mẫu số $n$; hai giá trị này chỉ bằng nhau khi $n \to \infty$, tỷ số giữa chúng là $(n-1)/n$.
- (iii) **Đúng.** Trung vị ít bị ảnh hưởng bởi các giá trị cực đoan hơn trung bình, vì trung vị chỉ phụ thuộc vào thứ hạng của dữ liệu chứ không phụ thuộc vào độ lớn cụ thể của các quan sát ngoại lệ.

---

## Phần B. Phân phối xác suất, mô phỏng, CLT và ước lượng điểm

**Câu 11.** Với $X\sim\text{Poisson}(\lambda=3)$, câu lệnh đúng để tính $P(2\le X\le 6)$?

**Đáp án: A.** `ppois(6, lambda=3) - ppois(1, lambda=3)`

Vì $X$ là biến rời rạc, $P(2\le X\le 6) = P(X\le 6) - P(X\le 1)$, phải trừ tại giá trị $1$ (ngay dưới cận dưới) chứ không phải tại $2$, nếu không sẽ làm mất khối xác suất tại $X=2$.

**Câu 12.** Với $X\sim\text{Binomial}(20,0.4)$, câu lệnh nào tính $P(X>8)$?

**Đáp án: B.** `1 - pbinom(8, size=20, prob=0.4)`

$P(X>8) = 1-P(X\le 8)$, và `pbinom(8,...)` chính là $P(X\le 8)$.

**Câu 13.** Mô phỏng 1000 lần tung xúc xắc cân đối và vẽ biểu đồ cột tần số các mặt.

**Đáp án: A.** `x <- sample(1:6, 1000, replace=TRUE); barplot(table(x))`

`sample(1:6, 1000, replace=TRUE)` sinh mẫu ngẫu nhiên có hoàn lại từ các mặt $1$–$6$; `table(x)` đếm tần số mỗi mặt và `barplot()` vẽ biểu đồ cột cho dữ liệu rời rạc/định tính — không dùng `hist()` cho loại dữ liệu này.

**Câu 14.** Mô phỏng biến rời rạc nhận giá trị $0.1, 0.2, 0.5$ với xác suất $0.2, 0.5, 0.3$ bằng biến đổi ngược:

```r
x <- ifelse(u <= 0.2, 0.1,
     ifelse(u <= 0.7, 0.2, 0.5))
```

Đây là phương pháp biến đổi ngược cho biến rời rạc: các mốc cắt là xác suất tích lũy $F(0.1)=0.2$ và $F(0.2)=0.2+0.5=0.7$. Nếu $U\le 0.2$ nhận giá trị đầu, nếu $0.2 < U \le 0.7$ nhận giá trị thứ hai, còn lại nhận giá trị thứ ba.

**Câu 15.** Với $X\sim\text{Exp}(\lambda=4)$, $F(x)=1-e^{-4x}$, công thức biến đổi ngược để mô phỏng $X$ từ $U\sim U(0,1)$?

**Đáp án: A.** `-log(1-U)/4`

Giải $F(X)=U$: $1-e^{-4X}=U \Rightarrow e^{-4X}=1-U \Rightarrow X = -\ln(1-U)/4$. Vì $U$ và $1-U$ cùng phân phối $U(0,1)$, công thức `-log(U)/4` cũng cho kết quả đúng phân phối, nhưng đáp án chuẩn theo suy diễn trực tiếp là biểu thức chứa $1-U$.

**Câu 16.** Nối chức năng với hàm R phù hợp.

**Đáp án:** (1)–b, (2)–c, (3)–d, (4)–a

Quy tắc chung cho họ hàm phân phối trong R: tiền tố `d` là mật độ/khối xác suất, `p` là hàm phân phối tích lũy, `q` là hàm phân vị (nghịch đảo của `p`), `r` là hàm sinh số ngẫu nhiên.

**Câu 17.** Mô phỏng $B=3000$ trung bình mẫu cỡ $n=50$ từ $\text{Exp}(\lambda=2)$; `mean(xbar)` và `sd(xbar)` nên gần giá trị nào?

**Đáp án: B.** $1/2$ và $2/\sqrt{50}$... 

Xét lại: với $\text{Exp}(\lambda=2)$, $\mu = 1/\lambda = 1/2$ và $\sigma = 1/\lambda = 1/2$. Theo CLT, $\bar{X}\approx N(\mu, \sigma^2/n)$, nên `mean(xbar)` gần $1/2$ và `sd(xbar)` gần $\sigma/\sqrt{n} = (1/2)/\sqrt{50} = 1/(2\sqrt{50})$.

**Đáp án đúng: A.** $1/2$ và $1/(2\sqrt{50})$.

**Câu 18.** Lệnh nào vẽ histogram của `xbar` (Câu 17) chồng mật độ chuẩn xấp xỉ theo lý thuyết?

**Đáp án: A.** `hist(xbar, freq=FALSE); curve(dnorm(x, mean=1/2, sd=1/(2*sqrt(n))), add=TRUE)`

Phải dùng `freq=FALSE` để trục tung là mật độ, sau đó chồng đường mật độ chuẩn với tham số đúng theo CLT: kỳ vọng $\mu=1/2$ và độ lệch chuẩn $\sigma/\sqrt{n}$.

**Câu 19.** Chuẩn hóa trung bình mẫu nhị thức $X_i\sim\text{Binomial}(10,0.3)$: điền vào chỗ trống `mu <- .....`

**Đáp án:** `mu <- size*prob`

Kỳ vọng của $\text{Binomial}(m,p)$ là $mp$; đây chính là giá trị trung tâm dùng để chuẩn hóa $z = (\bar{x}-\mu)/(S/\sqrt{m})$.

**Câu 20.** Trong `vecZ <- replicate(2000, Z(100))`, hàm `replicate()` dùng để làm gì?

**Đáp án: A.** Lặp lại 2000 lần việc tính một giá trị $Z_{100}$ (thống kê chuẩn hóa từ mẫu cỡ $100$).

`replicate(n, expr)` chạy lại biểu thức `expr` (ở đây là `Z(100)`, mỗi lần dùng dữ liệu mô phỏng mới) đúng $n$ lần và gom kết quả thành một vector — công cụ chuẩn để làm mô phỏng Monte Carlo trong R.

**Câu 21.** Phương sai mẫu chưa hiệu chỉnh theo mẫu số $n$ được tính bằng gì?

**Đáp án: C.** `mean(x^2) - mean(x)^2`

Đây chính là công thức $\overline{x^2}-\bar{x}^2 = \frac{1}{n}\sum(x_i-\bar x)^2$, dùng mẫu số $n$ — khác với `var(x)` (mẫu số $n-1$).

**Câu 22.** Nếu $X_i\sim\text{Exp}(\lambda)$ với $E[X]=1/\lambda$, ước lượng mô-men của $\lambda$ là gì?

**Đáp án: B.** $\hat\lambda = 1/\bar X$

Phương pháp mô-men cân bằng mô-men mẫu $\bar X$ với mô-men lý thuyết $E[X]=1/\lambda$, giải ra $\hat\lambda_{MOM}=1/\bar X$ — trùng với MLE của phân phối mũ.

**Câu 23.** Với $X_i\sim\text{Exp}(\lambda)$, log-hợp lý đúng (bỏ hằng số) là gì?

**Đáp án: B.** `length(x)*log(lambda) - lambda*sum(x)`

$\ell(\lambda) = \sum_i \ln(\lambda e^{-\lambda x_i}) = n\ln\lambda - \lambda\sum x_i$, khớp với biểu thức `n*log(lambda) - lambda*sum(x)`.

**Câu 24.** Đoạn mã nào dùng `optimize()` để tìm MLE của $\lambda$ trên $(10^{-6},10)$?

**Đáp án: A.** `optimize(function(lam) -sum(dexp(x, rate=lam, log=TRUE)), interval=c(1e-6,10))`

`optimize()` mặc định **tìm cực tiểu**, nên để tìm cực đại của log-hợp lý phải tối thiểu hóa **âm** log-hợp lý; `dexp(..., log=TRUE)` trả về $\ln f(x_i;\lambda)$ cho từng quan sát, `sum()` cộng lại thành $\ell(\lambda)$.

**Câu 25.** Cặp MLE của $(\mu,\sigma^2)$ cho mẫu $N(\mu,\sigma^2)$ là gì?

**Đáp án: C.** `mu.hat <- mean(x); sigma2.hat <- mean((x-mean(x))^2)`

MLE của $\mu$ là trung bình mẫu; MLE của $\sigma^2$ dùng mẫu số $n$ (không phải $n-1$ như `var(x)`), vì đạo hàm log-hợp lý theo $\sigma^2$ dẫn trực tiếp đến công thức mẫu số $n$.

**Câu 26.** Hoàn thành hàm âm log-hợp lý chuẩn với $\theta=(\mu,\ln\sigma)$.

**Đáp án:** `mean=mu, sd=sigma` trong `dnorm`; `objective=negloglik.norm`

Việc tham số hóa $\theta_2=\ln\sigma$ đảm bảo khi tối ưu không ràng buộc (`nlminb` không giới hạn miền), giá trị $\sigma=\exp(\theta_2)$ luôn dương một cách tự động.

**Câu 27.** Với vector `est` gồm $B$ giá trị mô phỏng của $\hat\theta$ và giá trị thật `theta`, đoạn mã nào tính đúng độ chệch và MSE?

**Đáp án: A.** `bias <- mean(est)-theta; mse <- mean((est-theta)^2)`

Độ chệch là kỳ vọng của sai số $E[\hat\theta]-\theta$, ước lượng bằng trung bình mô phỏng trừ giá trị thật; MSE là kỳ vọng của bình phương sai số, ước lượng bằng trung bình của $(\hat\theta-\theta)^2$ trên tất cả các lần mô phỏng.

**Câu 28.** Hoàn chỉnh mô phỏng bias, variance, MSE của $\hat\lambda=1/\bar X$.

**Đáp án:** 

```r
est <- replicate(B, {
  x <- rexp(n, rate = lambda)
  1 / mean(x)
})
bias <- mean(est) - lambda
variance <- var(est)
mse <- mean((est - lambda)^2)
```

Mỗi lần lặp sinh một mẫu mới, tính $\hat\lambda=1/\bar x$ cho mẫu đó; sau $B$ lần, `est` là vector các ước lượng, từ đó tính được ba đại lượng đánh giá chất lượng ước lượng theo đúng định nghĩa $MSE=\text{Var}+\text{Bias}^2$.

**Câu 29.** Nếu $\hat\theta$ có xấp xỉ phân phối chuẩn $N(\theta,\widehat{se}^2)$, khoảng tin cậy xấp xỉ 95% thường có dạng gì?

**Đáp án: A.** $\hat\theta \pm 1.96\,\widehat{se}$

Đây là dạng tổng quát của khoảng tin cậy tiệm cận dựa trên tính chuẩn tiệm cận của ước lượng MLE (theo lý thuyết thông tin Fisher), với $1.96 \approx z_{0.975}$.

**Câu 30.** Đúng/sai.

- (i) **Đúng.** Luật số lớn khẳng định trung bình mẫu hội tụ (ổn định) về kỳ vọng tổng thể khi cỡ mẫu tăng.
- (ii) **Sai.** CLT chỉ nói về phân phối xấp xỉ chuẩn của **trung bình mẫu**, không hàm ý dữ liệu gốc trở nên có phân phối chuẩn dù $n$ lớn.
- (iii) **Đúng.** Tăng số lần lặp Monte Carlo làm giảm sai số chuẩn của trung bình mô phỏng, tức làm đường trung bình chạy (running mean) ổn định hơn quanh giá trị thật.

---

## Phần C. Khoảng tin cậy và kiểm định giả thuyết

**Câu 31.** Khoảng tin cậy 95% cho $\mu$ khi $\sigma^2$ chưa biết được tính đúng bằng câu lệnh nào?

**Đáp án: B.** `mean(x) + c(-1,1)*qt(.975, length(x)-1)*sd(x)/sqrt(length(x))`

Khi $\sigma^2$ chưa biết, giá trị tới hạn phải lấy từ phân phối Student-$t$ với bậc tự do $n-1$ (không phải phân phối chuẩn), và sai số chuẩn là $s/\sqrt n$.

**Câu 32.** Hoàn thành mã tính tỷ lệ mẫu, sai số chuẩn và khoảng tin cậy 95% cho tỷ lệ mua hàng.

**Đáp án:** `phat <- mean(buy); se <- sqrt(phat*(1-phat)/n)`

Với `buy` chỉ gồm $0/1$, `mean(buy)` chính là tỷ lệ mẫu $\hat p$; sai số chuẩn Wald là $\sqrt{\hat p(1-\hat p)/n}$.

**Câu 33.** Câu lệnh kiểm định hai phía $H_0:\mu_x=\mu_y$ khi giả định hai phương sai bằng nhau?

**Đáp án: A.** `t.test(x, y, var.equal=TRUE, alternative="two.sided")`

`var.equal=TRUE` yêu cầu R dùng thống kê $t$ pooled (phương sai gộp); `alternative="two.sided"` tương ứng đối thuyết $\mu_x\ne\mu_y$.

**Câu 34.** Nếu không muốn giả định hai phương sai tổng thể bằng nhau, ta nên dùng câu lệnh nào?

**Đáp án: B.** `t.test(x,y,var.equal=FALSE)`

`var.equal=FALSE` (giá trị mặc định của `t.test`) sử dụng hiệu chỉnh Welch–Satterthwaite cho bậc tự do, phù hợp khi không có giả định phương sai bằng nhau.

**Câu 35.** Kiểm định một phía $H_0:\mu=50$ so với $H_1:\mu>50$, câu lệnh phù hợp?

**Đáp án: B.** `t.test(x, mu=50, alternative="greater")`

Đối thuyết $\mu>50$ tương ứng với đuôi bên phải của phân phối $t$, dùng `alternative="greater"`.

**Câu 36.** Kiểm định trung bình sau học phụ đạo cao hơn trước học (cùng $30$ học sinh)?

**Đáp án: A.** `t.test(after, before, paired=TRUE, alternative="greater")`

Vì hai mẫu đo trên cùng đối tượng (dữ liệu ghép cặp), phải dùng `paired=TRUE` để kiểm định dựa trên hiệu số từng cặp thay vì coi hai mẫu độc lập.

**Câu 37.** Câu lệnh kiểm định $H_0$: hai phương sai tổng thể bằng nhau trong mô hình chuẩn hai mẫu độc lập?

**Đáp án: B.** `var.test(x,y)`

`var.test()` dùng thống kê $F = s_x^2/s_y^2$ theo phân phối $F(n-1,m-1)$ dưới $H_0$ để kiểm định sự bằng nhau của hai phương sai tổng thể.

**Câu 38.** Kiểm định tỷ lệ lỗi $>2\%$ với $8$ lỗi trên $250$ sản phẩm?

**Đáp án: A.** `prop.test(x=8, n=250, p=0.02, alternative="greater")`

Đối thuyết "tỷ lệ lỗi lớn hơn 2%" tương ứng `alternative="greater"`.

**Câu 39.** Kiểm định hai tỷ lệ bằng nhau với hai nhóm $40/120$ và $55/150$?

**Đáp án: A.** `prop.test(x=c(40,55), n=c(120,150))`

`prop.test` nhận vector số thành công `x` và vector số quan sát `n` tương ứng cho từng nhóm để so sánh nhiều tỷ lệ cùng lúc.

**Câu 40.** Nếu $p\text{-value}=0.031$ với mức ý nghĩa $5\%$, kết luận chuẩn là gì?

**Đáp án: A.** Bác bỏ giả thuyết không.

Vì $0.031 \le 0.05$, theo quy tắc quyết định chuẩn ta bác bỏ $H_0$ ở mức ý nghĩa $5\%$. Lưu ý bác bỏ $H_0$ không có nghĩa là "chứng minh $H_1$ đúng tuyệt đối", chỉ là có đủ bằng chứng thống kê chống lại $H_0$.

**Câu 41.** Với kiểm định hai phía mức $\alpha=0.05$ dựa trên chuẩn tắc, giá trị tới hạn thường là gì?

**Đáp án: B.** `qnorm(0.975)`

Kiểm định hai phía chia đều xác suất bác bỏ $\alpha$ cho hai đuôi, mỗi đuôi $\alpha/2=0.025$, nên giá trị tới hạn nằm ở phân vị $1-\alpha/2 = 0.975$.

**Câu 42.** Các phát biểu đúng về khoảng tin cậy và kiểm định hai phía?

**Đáp án: A.** (i) và (ii).

(i) và (ii) đều là các tương đương chuẩn giữa khoảng tin cậy và kiểm định: nếu $\mu_0$ ngoài khoảng tin cậy $1-\alpha$ thì bác bỏ $H_0$ ở mức $\alpha$; nếu $p<\alpha$ thì bác bỏ $H_0$. (iii) sai vì $p$-value lớn chỉ có nghĩa "không đủ cơ sở bác bỏ", tuyệt đối không phải là bằng chứng chứng minh $H_0$ đúng.

**Câu 43.** Kiểm định $H_0:\mu=2000$ so với $H_1:\mu>2000$ cho `strength`.

**Đáp án:** `alternative="greater"`; nếu $p\text{-value}\le 0.05$ thì bác bỏ $H_0$, kết luận có đủ bằng chứng cho thấy trung bình `strength` lớn hơn $2000$.

**Câu 44.** Hoàn thành kiểm định hai mẫu độc lập với đối thuyết $H_1:\mu_x>\mu_y$.

**Đáp án:** `alternative="greater", var.equal=TRUE` (giả định phương sai bằng nhau) và `alternative="greater", var.equal=FALSE` (không giả định phương sai bằng nhau).

Cả hai câu lệnh giữ nguyên đối thuyết `"greater"`, chỉ khác nhau ở giả định về phương sai, quyết định việc dùng thống kê $t$ pooled hay Welch.

**Câu 45.** Đúng/sai.

- (i) **Đúng.** `alternative` trong `t.test()` nhận đúng ba giá trị `"two.sided"`, `"less"`, `"greater"`.
- (ii) **Đúng.** `conf.level=0.95` tương ứng độ tin cậy $95\%$, tức $\alpha=0.05$.
- (iii) **Sai.** $p$-value lớn chỉ thể hiện *không đủ cơ sở bác bỏ* $H_0$, hoàn toàn không phải bằng chứng mạnh chống lại $H_0$ — thực tế nó không cung cấp bằng chứng chống lại $H_0$ theo cả hai chiều.

**Câu 46.** Với $n=16$, $\bar x=1.625$, $s=0.2433$, hoàn thành mã khoảng tin cậy 97%.

**Đáp án:** `alpha <- 1-conf; q <- qt(1-alpha/2, df=n-1)`

$\alpha=1-0.97=0.03$; giá trị tới hạn $t$ lấy tại phân vị $1-\alpha/2=0.985$ với bậc tự do $n-1=15$.

**Câu 47.** Trong kiểm định một phía $H_0:\theta=\theta_0$ so với $H_1:\theta>\theta_0$, miền bác bỏ thường nằm ở đâu?

**Đáp án: A.** Đuôi phải của phân phối thống kê kiểm định.

Vì đối thuyết cho rằng $\theta$ lớn hơn $\theta_0$, giá trị thống kê kiểm định quan sát lớn bất thường mới là bằng chứng chống lại $H_0$, nên miền bác bỏ nằm ở đuôi phải.

---

## Phần D. Kiểm định chi-bình phương và hồi quy tuyến tính

**Câu 48.** Kiểm định sự phù hợp giữa số liệu thực nghiệm và tỷ lệ lý thuyết, đoạn mã nào đúng?

**Đáp án: A.** `chisq.test(observed, p=prob, correct=FALSE)`

Đây là kiểm định Goodness-of-fit: so sánh tần số quan sát `observed` với xác suất lý thuyết `prob` cho từng nhóm; `correct=FALSE` tắt hiệu chỉnh liên tục Yates (thường tắt khi có nhiều hơn 2 nhóm).

**Câu 49.** Hoàn thành mã kiểm định sự phù hợp.

**Đáp án:** `prob <- freq/sum(freq); chisq.test(ThucNghiem, p=prob, correct=FALSE)`

`freq` là tần số của phân phối lý thuyết, cần chuẩn hóa thành xác suất bằng cách chia cho tổng trước khi đưa vào `chisq.test`.

**Câu 50.** Với `tab` gồm hai cột `MauA`, `MauB` theo cùng bốn nhóm, `chisq.test(tab, correct=FALSE)` được hiểu đúng nhất là gì?

**Đáp án: C.** Kiểm định sự phù hợp giữa hai phân phối thực nghiệm theo bốn nhóm.

Khi đưa vào một bảng (ma trận/data.frame) hai chiều gồm các tần số của hai mẫu theo cùng các nhóm, `chisq.test` kiểm định xem cấu trúc phân bố theo nhóm giữa hai mẫu có giống nhau hay không — khác với kiểm định độc lập giữa hai biến định tính đo trên cùng một đối tượng.

**Câu 51.** Với hai biến định tính `GT` và `KV`, `chisq.test(table(GT, KV), correct=FALSE)` dùng để kiểm định gì?

**Đáp án: A.** Tính độc lập giữa hai biến định tính.

`table(GT, KV)` tạo bảng chéo (contingency table) đếm số quan sát theo từng tổ hợp mức của hai biến; `chisq.test` trên bảng này kiểm định $H_0$: hai biến độc lập với nhau.

**Câu 52.** Nếu một số tần số kỳ vọng trong kiểm định chi-bình phương quá nhỏ, điều cần cẩn trọng nhất là gì?

**Đáp án: A.** Xấp xỉ chi-bình phương có thể kém chính xác.

Thống kê kiểm định chi-bình phương chỉ xấp xỉ tốt phân phối $\chi^2$ khi tần số kỳ vọng đủ lớn (quy tắc kinh nghiệm thường là $\ge 5$); khi vi phạm, $p$-value tính được có thể không đáng tin cậy.

**Câu 53.** Hoàn thành mã kiểm định tính độc lập của `GT` và `KV`.

**Đáp án:** `tab <- table(GT, KV); chisq.test(tab, correct=FALSE)`. Giả thuyết không: hai biến định tính `GT` và `KV` độc lập với nhau.

**Câu 54.** Với `fit <- lm(y ~ x)`, `coef(fit)[2]` trả về đại lượng nào?

**Đáp án: B.** Hệ số góc $\hat\beta_1$.

Trong mô hình `lm(y ~ x)`, `coef(fit)` trả về vector $(\hat\beta_0, \hat\beta_1)$ theo thứ tự hệ số chặn trước, hệ số góc sau; phần tử thứ hai luôn là hệ số góc của biến độc lập.

**Câu 55.** Hoàn thành mã hồi quy `electric` theo `area` và vẽ đường hồi quy.

**Đáp án:** `fit <- lm(electric ~ area)`; `abline(fit)`

`abline()` nhận trực tiếp một đối tượng mô hình `lm` và tự động vẽ đường thẳng ước lượng $\hat y = \hat\beta_0 + \hat\beta_1 x$ lên đồ thị scatter đã có.

**Câu 56.** Nếu `Pr(>|t|)` của biến $x$ trong `summary(fit)` bằng $0.003$, với mức ý nghĩa $5\%$, phát biểu đúng là gì?

**Đáp án: B.** Có bằng chứng thống kê rằng hệ số góc khác 0.

Dòng `Pr(>|t|)` của biến $x$ chính là $p$-value cho kiểm định $H_0:\beta_1=0$; vì $0.003 < 0.05$ nên bác bỏ $H_0$, tức có bằng chứng thống kê cho quan hệ tuyến tính giữa $x$ và $y$. Không thể kết luận mô hình "đúng tuyệt đối với mọi dữ liệu" chỉ từ một kiểm định hệ số.

**Câu 57.** Với $\widehat{wage} = 1.2 + 0.75\cdot edu$, giá trị dự đoán tại $edu=12$?

**Đáp án: A.** $1.2 + 0.75\times 12$

Thay trực tiếp $edu=12$ vào phương trình hồi quy ước lượng để tính giá trị dự đoán $\hat y$.

**Câu 58.** Để dự đoán bằng `fit <- lm(wage ~ edu)` tại `edu=12`, câu lệnh đúng?

**Đáp án: A.** `predict(fit, newdata=data.frame(edu=12))`

`predict()` cần một `data.frame` mới (`newdata`) có tên cột trùng khớp chính xác với tên biến độc lập đã dùng trong `lm()`, ở đây là `edu`.

**Câu 59.** `confint(fit)` trong hồi quy tuyến tính thường trả về gì?

**Đáp án: A.** Khoảng tin cậy cho các hệ số hồi quy.

`confint()` áp dụng lên đối tượng `lm` trả về khoảng tin cậy (mặc định $95\%$) cho từng hệ số $\beta_0,\beta_1,\ldots$ dựa trên phân phối $t$ với bậc tự do phần dư.

**Câu 60.** Trong hồi quy tuyến tính đơn, $R^2=0.82$ được diễn giải như thế nào?

**Đáp án: A.** Khoảng $82\%$ biến thiên của biến phụ thuộc được giải thích bởi mô hình tuyến tính với biến độc lập.

$R^2 = 1-\dfrac{\sum(y_i-\hat y_i)^2}{\sum(y_i-\bar y)^2}$ đo tỷ lệ biến thiên của $Y$ được mô hình giải thích; $R^2=0.82$ không liên quan trực tiếp đến giá trị của hệ số góc hay $p$-value.

# Đề minh họa đề nghị — Thực hành Thống kê

*Câu hỏi tự luận/điền đáp án ngắn, kèm lưu ý những điểm dễ nhầm lẫn khi làm bài và khi viết code R.*

---

## A. Mô tả dữ liệu và trực quan hóa

**Câu 1.** Phân biệt `var(x)` và `mean((x-mean(x))^2)`.

**Trả lời:** `var(x)` dùng mẫu số $n-1$ (ước lượng không chệch của $\sigma^2$); `mean((x-mean(x))^2)` dùng mẫu số $n$ (chính là MLE của $\sigma^2$ khi giả định phân phối chuẩn).

**Lưu ý:** Hai giá trị này khác nhau theo tỷ lệ $(n-1)/n$, chỉ tiệm cận bằng nhau khi $n$ lớn. Đề thi hay hỏi "phương sai mẫu theo mẫu số $n$" để bẫy thí sinh dùng nhầm `var()`.

**Câu 2.** Khi nào nên dùng hệ số biến thiên $CV$ thay vì độ lệch chuẩn để so sánh độ phân tán?

**Trả lời:** Khi hai (hoặc nhiều) mẫu có đơn vị đo khác nhau hoặc thang giá trị trung bình khác xa nhau.

**Lưu ý:** $CV = s/|\bar x|$ không xác định (hoặc vô nghĩa) khi $\bar x \approx 0$; cẩn thận với dữ liệu có trung bình gần 0 hoặc âm.

**Câu 3.** Tại sao trung vị được xem là "ổn định" hơn trung bình trước ngoại lệ?

**Trả lời:** Trung vị chỉ phụ thuộc vị trí (thứ hạng) của quan sát ở giữa, không phụ thuộc độ lớn cụ thể của giá trị cực đoan; trung bình cộng trực tiếp mọi giá trị nên bị kéo lệch bởi ngoại lệ.

**Lưu ý:** Nếu $\bar x$ và trung vị lệch nhau nhiều, đó là dấu hiệu phân phối lệch hoặc có ngoại lệ — không phải lỗi tính toán.

**Câu 4.** Viết đoạn mã tạo bảng tần số và tần suất cho vector định tính/rời rạc `x`.

**Trả lời:**
```r
table(x)
prop.table(table(x))
```

**Lưu ý:** `prop.table()` phải nhận **kết quả của `table()`** làm đầu vào, không phải vector gốc; `prop.table(x)` trên vector số sẽ cho kết quả vô nghĩa (chia từng phần tử cho tổng).

**Câu 5.** Đoạn mã đúng để vẽ histogram dạng mật độ có chồng đường KDE là gì? Vì sao không thể chồng trực tiếp lên histogram tần số mặc định?

**Trả lời:**
```r
hist(x, freq = FALSE)
lines(density(x))
```

**Lưu ý:** Nếu quên `freq=FALSE`, trục tung của `hist()` là tần số (đếm số quan sát), trong khi `density()` luôn trả về mật độ (diện tích dưới đường cong bằng 1) — hai đại lượng khác thang đo nên chồng lên nhau sẽ sai lệch nghiêm trọng về hình dạng.

**Câu 6.** Vì sao `boxplot(y ~ g)` được ưu tiên hơn nhiều lệnh `boxplot()` riêng lẻ khi so sánh nhiều nhóm?

**Trả lời:** Cú pháp công thức tự động tách `y` theo từng mức của `g` và vẽ các boxplot cạnh nhau trên cùng một trục, giúp so sánh trực quan; không cần lọc dữ liệu thủ công cho từng nhóm.

**Lưu ý:** `g` phải là biến định tính hoặc factor; nếu `g` là số liên tục thì R sẽ hiểu nhầm hoặc báo lỗi.

**Câu 7.** `cor(x, y)` gần 0 có nghĩa là $x$ và $y$ không có quan hệ gì với nhau không?

**Trả lời:** Không. `cor()` chỉ đo quan hệ **tuyến tính**; hai biến có thể có quan hệ phi tuyến rất mạnh (ví dụ $y=x^2$ đối xứng quanh 0) nhưng vẫn cho $cor \approx 0$.

**Lưu ý:** Luôn vẽ `plot(x,y)` trước khi kết luận từ hệ số tương quan; tương quan cao cũng không hàm ý quan hệ nhân quả.

---

## B. Phân phối xác suất và mô phỏng

**Câu 8.** Vì sao tính $P(2\le X\le 6)$ với $X$ rời rạc phải viết `ppois(6,...) - ppois(1,...)` chứ không phải `ppois(6,...) - ppois(2,...)`?

**Trả lời:** $P(2\le X\le 6) = P(X\le 6)-P(X\le 1)$. Vì $X$ nhận giá trị nguyên, $P(X\le 1)$ loại trừ đúng phần "dưới 2", còn nếu trừ tại `ppois(2,...)` sẽ vô tình loại luôn khối xác suất tại $X=2$.

**Lưu ý:** Đây là lỗi biên (off-by-one) rất phổ biến khi làm việc với phân phối rời rạc; với phân phối liên tục (chuẩn, mũ, ...) không có vấn đề này vì $P(X=a)=0$.

**Câu 9.** Phân biệt bốn tiền tố `d`, `p`, `q`, `r` áp dụng cho một họ phân phối bất kỳ, ví dụ `norm`.

**Trả lời:** `dnorm` — mật độ tại một điểm; `pnorm` — xác suất tích lũy $P(X\le x)$; `qnorm` — phân vị (nghịch đảo của `pnorm`); `rnorm` — sinh số ngẫu nhiên.

**Lưu ý:** Nhầm `dnorm` (mật độ, có thể $>1$) với `pnorm` (xác suất, luôn trong $[0,1]$) là lỗi rất thường gặp khi tính xác suất.

**Câu 10.** Vì sao khi mô phỏng xúc xắc phải dùng `sample(1:6, 1000, replace=TRUE)` mà không được bỏ `replace=TRUE`?

**Trả lời:** Nếu không có `replace=TRUE` (mặc định `replace=FALSE`), R sẽ chọn không lặp lại — chỉ chọn được tối đa 6 giá trị trước khi báo lỗi, không mô phỏng đúng việc tung xúc xắc nhiều lần độc lập.

**Câu 11.** Với biến rời rạc nhận 3 giá trị $a_1<a_2<a_3$ với xác suất $p_1,p_2,p_3$, viết công thức tổng quát mô phỏng bằng biến đổi ngược.

**Trả lời:**
```r
u <- runif(n)
x <- ifelse(u <= p1, a1,
     ifelse(u <= p1 + p2, a2, a3))
```

**Lưu ý:** Mốc cắt là **xác suất tích lũy**, không phải xác suất riêng lẻ; mốc thứ hai phải là $p_1+p_2$ chứ không phải $p_2$.

**Câu 12.** Với $X\sim\text{Exp}(\lambda)$, $F(x)=1-e^{-\lambda x}$, hãy suy công thức biến đổi ngược và giải thích vì sao `-log(U)/lambda` cũng đúng.

**Trả lời:** Giải $U=F(X)$: $X=-\ln(1-U)/\lambda$. Vì $U\sim U(0,1)$ thì $1-U$ cũng $\sim U(0,1)$, nên thay $1-U$ bởi $U$ vẫn cho kết quả đúng phân phối: `-log(U)/lambda`.

**Lưu ý:** Đây là trường hợp đặc biệt do tính đối xứng của $U(0,1)$; không áp dụng tùy tiện quy tắc "thay $1-U$ bằng $U$" cho các phân phối khác nếu chưa kiểm tra tính đối xứng tương tự.

**Câu 13.** Mối quan hệ giữa $\chi^2(n)$, $t(n)$, $F(m,n)$ và phân phối chuẩn tắc $N(0,1)$?

**Trả lời:** Nếu $Z_i\overset{iid}{\sim}N(0,1)$ thì $\sum_{i=1}^n Z_i^2\sim\chi^2(n)$. Nếu $Z\sim N(0,1)$ độc lập với $V\sim\chi^2(n)$ thì $T=Z/\sqrt{V/n}\sim t(n)$. Nếu $U\sim\chi^2(m)$, $V\sim\chi^2(n)$ độc lập thì $F=(U/m)/(V/n)\sim F(m,n)$.

**Lưu ý:** Khi $n\to\infty$, $t(n)\to N(0,1)$; $t(1)$ chính là phân phối Cauchy (không có kỳ vọng hữu hạn) — đây là trường hợp đặc biệt hay bị hỏi.

**Câu 14.** Phát biểu CLT và chỉ ra sai lầm phổ biến khi diễn giải định lý này.

**Trả lời:** Nếu $X_1,\dots,X_n\overset{iid}{}$ có kỳ vọng $\mu$, phương sai $\sigma^2$ hữu hạn, thì với $n$ đủ lớn, $\bar X_n\approx N(\mu,\sigma^2/n)$.

**Lưu ý (sai lầm phổ biến):** CLT nói về phân phối của **trung bình mẫu**, không nói dữ liệu gốc $X_i$ trở nên có phân phối chuẩn. Dữ liệu gốc vẫn giữ nguyên phân phối ban đầu (ví dụ vẫn lệch nếu là $\text{Exp}$) dù $n$ lớn.

**Câu 15.** Trong mô phỏng CLT với $X_i\sim\text{Exp}(\lambda=2)$, $n=50$, giá trị lý thuyết của `mean(xbar)` và `sd(xbar)` là bao nhiêu?

**Trả lời:** $\mu=1/\lambda=1/2$; $\sigma=1/\lambda=1/2$; theo CLT: `mean(xbar)` $\to 1/2$, `sd(xbar)` $\to \sigma/\sqrt n = 0.5/\sqrt{50}$.

**Lưu ý:** Với $\text{Exp}(\lambda)$, cả kỳ vọng **và** độ lệch chuẩn của $X$ đều bằng $1/\lambda$ — dễ nhầm khi chỉ nhớ công thức kỳ vọng mà quên phương sai $=1/\lambda^2$.

**Câu 16.** `replicate(B, expr)` khác gì với việc chạy `expr` một lần rồi lặp bằng vòng `for`?

**Trả lời:** `replicate()` tự động chạy lại `expr` (thường có tính ngẫu nhiên bên trong, ví dụ `rnorm()`) đúng $B$ lần độc lập và gom kết quả thành vector/matrix — tương đương `for` nhưng ngắn gọn và thường nhanh hơn.

**Lưu ý:** `expr` phải chứa lệnh sinh dữ liệu ngẫu nhiên **bên trong** nó; nếu sinh dữ liệu một lần bên ngoài `replicate()` rồi lặp lại phép tính trên cùng một mẫu, kết quả mô phỏng sẽ sai (không có tính ngẫu nhiên giữa các lần lặp).

---

## C. Ước lượng điểm và MLE

**Câu 17.** Vì sao khi dùng `optimize()` hoặc `optim()` để tìm MLE, hàm mục tiêu phải là **âm** log-hợp lý?

**Trả lời:** Hai hàm này mặc định tìm **cực tiểu**. MLE là điểm cực đại của log-hợp lý $\ell(\theta)$, nên để dùng công cụ tìm cực tiểu, ta tối thiểu hóa $-\ell(\theta)$; điểm cực tiểu của $-\ell(\theta)$ chính là điểm cực đại của $\ell(\theta)$.

**Lưu ý:** Quên dấu trừ là lỗi cực kỳ phổ biến — kết quả `optimize()` khi đó sẽ hội tụ về biên của khoảng tìm kiếm (`interval`) thay vì giá trị MLE thật.

**Câu 18.** MLE của $p$ trong mô hình Bernoulli và của $\lambda$ trong mô hình Poisson có điểm gì chung?

**Trả lời:** Cả hai đều bằng trung bình mẫu: $\hat p_{MLE}=T/n=\bar x$ (với $T=\sum x_i$), $\hat\lambda_{MLE}=\bar x$.

**Lưu ý:** Không nên nhầm MLE của Poisson là $T$ (tổng) — phải chia cho $n$.

**Câu 19.** MLE của $\sigma^2$ trong mô hình chuẩn $N(\mu,\sigma^2)$ có phải là ước lượng không chệch không?

**Trả lời:** Không. $\hat\sigma^2_{MLE} = \frac1n\sum(x_i-\bar x)^2$ là ước lượng **chệch** (hơi thấp hơn giá trị thật một lượng hệ số $(n-1)/n$); ước lượng không chệch là `var(x)` dùng mẫu số $n-1$.

**Lưu ý:** Trong bài tập yêu cầu "MLE của $\sigma^2$", đáp án đúng luôn dùng mẫu số $n$, dù trong thực hành ta hay quen dùng `var()` (mẫu số $n-1$).

**Câu 20.** Tại sao khi tối ưu $(\mu, \sigma)$ đồng thời bằng `optim()`/`nlminb()`, người ta thường tham số hóa $\theta_2 = \ln\sigma$ thay vì dùng trực tiếp $\sigma$?

**Trả lời:** Các thuật toán tối ưu không ràng buộc (`optim`, `nlminb` không đặt `lower`) có thể thử các giá trị âm cho tham số; dùng $\theta_2=\ln\sigma$ và đặt $\sigma=e^{\theta_2}$ đảm bảo $\sigma$ luôn dương với bất kỳ giá trị $\theta_2$ nào, tránh lỗi `NaN` khi hàm mật độ nhận $\sigma\le 0$.

**Câu 21.** Công thức $MSE = \text{Var} + \text{Bias}^2$ được kiểm chứng bằng mô phỏng như thế nào? Viết công thức R.

**Trả lời:**
```r
bias <- mean(est) - theta
variance <- var(est)
mse <- mean((est - theta)^2)
# kiem tra: mse ~ variance + bias^2
```

**Lưu ý:** `variance <- var(est)` dùng mẫu số $n-1$ (số lần mô phỏng $B-1$), trong khi $MSE$ tính trực tiếp bằng `mean((est-theta)^2)` dùng mẫu số $B$; hai cách tính này chỉ xấp xỉ khớp công thức lý thuyết khi $B$ đủ lớn, không khớp tuyệt đối vì khác mẫu số.

**Câu 22.** Thông tin Fisher dùng để làm gì trong việc xây dựng khoảng tin cậy cho MLE?

**Trả lời:** Theo lý thuyết tiệm cận, $\hat\theta_{MLE}\overset{approx}{\sim}N(\theta, 1/I(\theta))$, nên sai số chuẩn ước lượng $\widehat{se}=\sqrt{1/I(\hat\theta)}$ (thay $\theta$ bằng $\hat\theta$), từ đó khoảng tin cậy tiệm cận $\hat\theta \pm z_{0.975}\cdot\widehat{se}$.

**Lưu ý:** Đây chỉ là khoảng tin cậy **xấp xỉ** (dựa trên tính chuẩn tiệm cận), độ chính xác phụ thuộc cỡ mẫu $n$; với $n$ nhỏ nên cẩn trọng, có thể không phủ đúng mức tin cậy danh nghĩa.

**Câu 23.** Phương pháp mô-men (MOM) khác MLE ở điểm nào, và khi nào hai ước lượng này trùng nhau?

**Trả lời:** MOM cân bằng mô-men mẫu với mô-men lý thuyết (không cần hàm hợp lý); MLE tối đa hóa hàm hợp lý. Với phân phối mũ, cả hai phương pháp cho cùng kết quả $\hat\lambda=1/\bar x$; nhưng nói chung với các phân phối khác (ví dụ Gamma với 2 tham số), hai phương pháp có thể cho kết quả khác nhau.

---

## D. Khoảng tin cậy

**Câu 24.** Khi nào dùng `qt()` (Student-t) thay vì `qnorm()` (chuẩn tắc) để tính khoảng tin cậy cho trung bình?

**Trả lời:** Dùng `qt()` khi $\sigma$ (độ lệch chuẩn tổng thể) **chưa biết** và phải ước lượng bằng $s$ (mẫu); dùng `qnorm()` chỉ khi $\sigma$ đã biết chính xác.

**Lưu ý:** Trong hầu hết bài toán thực tế, $\sigma$ không biết trước, nên khoảng tin cậy cho trung bình gần như luôn dùng $t_{n-1}$. Dùng nhầm `qnorm()` sẽ cho khoảng tin cậy hẹp hơn thực tế (đặc biệt khi $n$ nhỏ).

**Câu 25.** Vì sao khoảng tin cậy Wald cho tỷ lệ $\hat p \pm z\sqrt{\hat p(1-\hat p)/n}$ có thể cho ra giá trị âm hoặc lớn hơn 1?

**Trả lời:** Đây là xấp xỉ chuẩn tuyến tính quanh $\hat p$, không tự động ràng buộc trong $[0,1]$. Khi $\hat p$ gần 0 hoặc gần 1, hoặc $n$ nhỏ, cận dưới/cận trên có thể vượt ra ngoài $[0,1]$.

**Lưu ý:** Trong thực hành nên chặn khoảng bằng `pmax(0, pmin(1, ci))` hoặc cân nhắc phương pháp Wilson chính xác hơn khi $n$ nhỏ hay $\hat p$ cực đoan.

**Câu 26.** Công thức khoảng tin cậy cho $\sigma^2$ dùng phân phối gì, và vì sao khoảng này **không đối xứng** quanh $s^2$?

**Trả lời:** Dùng phân phối $\chi^2(n-1)$: $\left(\dfrac{(n-1)s^2}{\chi^2_{1-\alpha/2,n-1}}, \dfrac{(n-1)s^2}{\chi^2_{\alpha/2,n-1}}\right)$.

**Lưu ý:** Vì $\chi^2$ là phân phối lệch (không đối xứng), khoảng tin cậy cho $\sigma^2$ không đối xứng quanh $s^2$ — khác với khoảng tin cậy cho $\mu$ (luôn đối xứng quanh $\bar x$). Chú ý thứ tự: cận **dưới** dùng $\chi^2$ ở phân vị **cao** ($1-\alpha/2$) ở mẫu số, cận **trên** dùng $\chi^2$ ở phân vị **thấp** ($\alpha/2$).

**Câu 27.** Khi nào dùng công thức pooled và khi nào dùng Welch cho khoảng tin cậy hiệu hai trung bình?

**Trả lời:** Pooled (`var.equal=TRUE`) khi giả định hai phương sai tổng thể bằng nhau (nên kiểm tra bằng `var.test()` trước); Welch (`var.equal=FALSE`, mặc định của `t.test`) khi không có giả định đó hoặc khi hai cỡ mẫu/phương sai chênh lệch nhiều.

**Lưu ý:** Bậc tự do Welch $df$ thường **không phải số nguyên** (công thức Welch–Satterthwaite); đây không phải lỗi tính toán.

**Câu 28.** Phân biệt sai số chuẩn (SE) trong công thức pooled và Welch.

**Trả lời:** Pooled: $se = s_p\sqrt{1/n+1/m}$ với $s_p^2$ là phương sai gộp có trọng số theo bậc tự do từng mẫu. Welch: $se=\sqrt{s_x^2/n+s_y^2/m}$, không gộp phương sai, xem hai mẫu có phương sai độc lập nhau.

---

## E. Kiểm định giả thuyết

**Câu 29.** Giải thích ý nghĩa đúng của $p$-value; nêu một cách diễn giải **sai** thường gặp.

**Trả lời:** $p$-value là xác suất quan sát được thống kê kiểm định **cực đoan bằng hoặc hơn** giá trị đã quan sát, **với điều kiện $H_0$ đúng**.

**Lưu ý (diễn giải sai phổ biến):** $p$-value **không phải** là xác suất $H_0$ đúng, cũng không phải xác suất kết luận sai. $p$-value lớn không chứng minh $H_0$ đúng, chỉ là "không đủ bằng chứng bác bỏ".

**Câu 30.** Ba dạng đối thuyết trong `t.test()`/`prop.test()` và cách chọn `alternative` tương ứng?

**Trả lời:** `"two.sided"` ($\theta\ne\theta_0$), `"greater"` ($\theta>\theta_0$), `"less"` ($\theta<\theta_0$).

**Lưu ý:** Chọn sai `alternative` (ví dụ đề bài hỏi "có bằng chứng tăng hay không" nhưng code dùng `"two.sided"`) sẽ cho $p$-value sai gấp đôi/nửa so với đúng, có thể dẫn tới kết luận ngược.

**Câu 31.** Trong kiểm định ghép cặp (paired), tại sao không nên dùng `t.test(x, y)` (hai mẫu độc lập mặc định)?

**Trả lời:** Khi hai mẫu đo trên cùng đối tượng (trước/sau), các cặp quan sát có tương quan với nhau; kiểm định ghép cặp phân tích **hiệu số từng cặp** $d_i=x_i-y_i$ thay vì coi hai mẫu độc lập, giúp loại bỏ biến thiên do khác biệt giữa các đối tượng.

**Lưu ý:** Phải dùng `paired=TRUE`; nếu quên, R sẽ tính sai số chuẩn dựa trên giả định độc lập, thường làm sai số chuẩn bị **phóng đại** và giảm khả năng phát hiện khác biệt thật (mất power).

**Câu 32.** Trước khi chọn `var.equal=TRUE` hay `FALSE` trong `t.test()` hai mẫu, nên làm gì?

**Trả lời:** Có thể kiểm định trước bằng `var.test(x, y)`: nếu $p$-value lớn (không bác bỏ $H_0:\sigma_x^2=\sigma_y^2$), có cơ sở dùng `var.equal=TRUE`; ngược lại nên dùng Welch (`var.equal=FALSE`).

**Lưu ý:** Trong thực hành hiện đại, nhiều người khuyến nghị **luôn dùng Welch** làm mặc định an toàn (đây cũng là mặc định của `t.test()` trong R) trừ khi có lý do vững chắc để giả định phương sai bằng nhau.

**Câu 33.** Kiểm định phương sai một mẫu dùng thống kê và phân phối nào? Viết công thức $p$-value hai phía.

**Trả lời:** $Q_{obs}=\dfrac{(n-1)s^2}{\sigma_0^2}\sim\chi^2(n-1)$ dưới $H_0$. $p$-value hai phía: $2\min\big(P(\chi^2\le Q_{obs}), P(\chi^2>Q_{obs})\big)$.

**Lưu ý:** Vì $\chi^2$ không đối xứng, $p$-value hai phía **không đơn giản** là $2\times$ đuôi phải như với phân phối đối xứng (chuẩn, $t$) — phải lấy $2\times$ đuôi **nhỏ hơn** trong hai đuôi.

**Câu 34.** Đọc kết quả `t.test()` trong R: cột nào là $p$-value? Khoảng tin cậy trả về ứng với đối thuyết nào?

**Trả lời:** `$p.value` là $p$-value; `$conf.int` là khoảng tin cậy tương ứng với `conf.level` đã chọn — nếu `alternative` là một phía (`"greater"`/`"less"`), khoảng tin cậy trả về cũng là khoảng **một phía** (một đầu là $\pm\infty$), không phải khoảng hai phía đối xứng.

**Lưu ý:** Nhiều người nhầm tưởng `$conf.int` luôn là khoảng hai phía dù đã đặt `alternative="greater"` — cần đọc kỹ đầu ra.

---

## F. Kiểm định chi-bình phương

**Câu 35.** Phân biệt ba tình huống dùng `chisq.test()`: sự phù hợp, so sánh nhiều mẫu theo nhóm, và tính độc lập.

**Trả lời:**
- Sự phù hợp: `chisq.test(observed, p=prob, correct=FALSE)` — một vector tần số so với một vector xác suất lý thuyết.
- So sánh nhiều mẫu theo cùng nhóm: `chisq.test(tab, correct=FALSE)` với `tab` là bảng (nhóm × mẫu).
- Tính độc lập: `chisq.test(table(A,B), correct=FALSE)` — hai biến định tính đo trên **cùng** đối tượng.

**Lưu ý:** Cấu trúc bảng đầu vào **quyết định** cách diễn giải kết quả, dù công thức thống kê kiểm định giống nhau về mặt toán học ($\sum (O-E)^2/E$) — đề thi hay hỏi "kiểu kiểm định nào" chỉ dựa vào cách xây dựng bảng.

**Câu 36.** `correct=FALSE` trong `chisq.test()` có ý nghĩa gì? Khi nào cân nhắc bật `correct=TRUE`?

**Trả lời:** `correct=FALSE` tắt hiệu chỉnh liên tục Yates (continuity correction). Hiệu chỉnh này chỉ áp dụng có ý nghĩa cho bảng $2\times 2$; với bảng lớn hơn thường để `correct=FALSE`.

**Lưu ý:** Nếu bảng $2\times2$ và không chỉ định, R mặc định `correct=TRUE`, có thể cho $p$-value khác với tính tay theo công thức chuẩn $\sum(O-E)^2/E$ — cần đọc kỹ yêu cầu đề bài để chọn đúng.

**Câu 37.** Điều kiện áp dụng của kiểm định chi-bình phương là gì, và vi phạm điều kiện này gây hậu quả gì?

**Trả lời:** Tần số kỳ vọng ở mỗi ô nên đủ lớn (kinh nghiệm: $\ge5$). Vi phạm làm xấp xỉ phân phối $\chi^2$ của thống kê kiểm định kém chính xác, $p$-value tính được có thể không đáng tin.

---

## G. Hồi quy tuyến tính đơn

**Câu 38.** `coef(fit)` với `fit <- lm(y~x)` trả về theo thứ tự nào? Làm sao lấy riêng hệ số góc?

**Trả lời:** Trả về $(\hat\beta_0,\hat\beta_1)$ — hệ số chặn trước, hệ số góc sau. Lấy hệ số góc bằng `coef(fit)[2]`.

**Câu 39.** Vì sao `predict(fit, newdata=data.frame(edu=12))` báo lỗi nếu mô hình ước lượng bằng `lm(wage~education)`?

**Trả lời:** Tên cột trong `newdata` phải khớp **chính xác** tên biến độc lập đã dùng trong công thức `lm()`. Ở đây mô hình dùng `education` nhưng `newdata` lại đặt tên `edu` — R không nhận diện được biến để thay vào.

**Lưu ý:** Đây là lỗi cú pháp rất hay gặp khi đổi tên biến giữa các bước phân tích.

**Câu 40.** Phân biệt `Pr(>|t|)` của biến $x$ trong `summary(fit)` và giá trị `R^2` — mỗi cái trả lời câu hỏi gì?

**Trả lời:** `Pr(>|t|)` của $x$ trả lời câu hỏi "hệ số góc $\beta_1$ có khác 0 một cách có ý nghĩa thống kê hay không" (kiểm định $H_0:\beta_1=0$). `R^2` trả lời câu hỏi "mô hình giải thích được bao nhiêu phần trăm biến thiên của $y$" — hoàn toàn khác nhau về ý nghĩa.

**Lưu ý:** Một hệ số góc có $p$-value rất nhỏ (có ý nghĩa thống kê) vẫn có thể đi kèm $R^2$ thấp (mô hình giải thích được ít biến thiên) — hai chỉ số không thay thế cho nhau, đặc biệt với cỡ mẫu lớn (dễ có $p$ nhỏ dù quan hệ yếu).

**Câu 41.** `confint(fit)` khác gì với khoảng tin cậy tính tay bằng $\hat\beta_1 \pm t_{n-2,0.975}\cdot se(\hat\beta_1)$?

**Trả lời:** Về bản chất giống nhau — `confint()` tự động dùng phân phối $t$ với bậc tự do phần dư $n-2$ (mô hình hồi quy đơn có 2 tham số $\beta_0,\beta_1$) và sai số chuẩn lấy từ `summary(fit)$coefficients`.

**Lưu ý:** Bậc tự do trong hồi quy đơn là $n-2$ (trừ đi 2 tham số ước lượng), khác với bậc tự do $n-1$ khi ước lượng chỉ một tham số như trung bình — dễ nhầm lẫn giữa các bài toán.

**Câu 42.** Phân biệt `interval="confidence"` và `interval="prediction"` trong `predict()`.

**Trả lời:** `"confidence"` cho khoảng tin cậy của **giá trị trung bình** $E[Y|X=x_0]$; `"prediction"` cho khoảng dự đoán của **một quan sát mới** $Y_{new}$ tại $X=x_0$.

**Lưu ý:** Khoảng dự đoán ("prediction") luôn **rộng hơn** khoảng tin cậy trung bình ("confidence") vì phải cộng thêm phương sai của sai số ngẫu nhiên $\varepsilon$ của quan sát mới, ngoài phương sai của ước lượng tham số.

---

## Bảng tổng hợp các lỗi thường gặp khi viết code R thống kê

| Tình huống | Lỗi thường gặp | Cách tránh |
|---|---|---|
| Tính $P(a\le X\le b)$ với $X$ rời rạc | Trừ nhầm tại $a$ thay vì $a-1$ | Nhớ $P(X\ge a)=1-P(X\le a-1)$ |
| Tìm MLE bằng `optimize()`/`optim()` | Quên dấu trừ trước log-hợp lý | `optimize()`/`optim()` luôn tìm cực tiểu |
| Phương sai mẫu | Nhầm `var(x)` (mẫu số $n-1$) với MLE (mẫu số $n$) | Đọc kỹ đề: "MLE" hay "không chệch" |
| Khoảng tin cậy cho $\mu$ | Dùng `qnorm` khi $\sigma$ chưa biết | Luôn dùng `qt(df=n-1)` khi $\sigma$ chưa biết |
| Khoảng tin cậy cho $\sigma^2$ | Đảo ngược thứ tự $\chi^2_{\alpha/2}$ và $\chi^2_{1-\alpha/2}$ | Cận dưới dùng $\chi^2$ phân vị cao ở mẫu số |
| Kiểm định ghép cặp | Quên `paired=TRUE` | Kiểm tra dữ liệu có đo trên cùng đối tượng không |
| `chisq.test` | Đưa sai cấu trúc bảng (vector vs bảng chéo) | Xác định rõ: phù hợp / so sánh nhóm / độc lập |
| `predict()` cho `lm` | Tên cột `newdata` không khớp biến trong công thức | Đối chiếu chính xác tên biến |
| Khoảng tin cậy tỷ lệ (Wald) | Không chặn trong $[0,1]$ | `pmax(0, pmin(1, ci))` khi cần |
| Mô phỏng Monte Carlo | Sinh dữ liệu ngẫu nhiên ngoài `replicate()` | Đặt lệnh sinh dữ liệu ngẫu nhiên bên trong biểu thức lặp |

# Đề điền khoảng trống — Thực hành Thống kê

## Phần A. Câu hỏi

### A.1 Mô tả dữ liệu và trực quan hóa

**Câu 1.** Hoàn thành đoạn mã tính hệ số biến thiên $CV$ của vector `x`.

```r
xbar <- mean(x)
s <- sd(x)
CV <- .............................
```

**Câu 2.** Hoàn thành đoạn mã lập bảng tần số và bảng tần suất cho vector định tính `nhom`.

```r
tan_so <- .............................
tan_suat <- .............................
```

**Câu 3.** Hoàn thành đoạn mã vẽ histogram dạng mật độ của `x` có chồng đường mật độ ước lượng (KDE).

```r
hist(x, freq = ....................., breaks = 15)
lines(.....................(x))
```

**Câu 4.** Hoàn thành đoạn mã tính phương sai mẫu theo mẫu số $n$ (không dùng `var()`).

```r
s2_n <- .............................
```

### A.2 Phân phối xác suất, mô phỏng và CLT

**Câu 5.** Với $X\sim\text{Poisson}(\lambda=4)$, hoàn thành mã tính $P(3\le X\le 8)$.

```r
p <- ppois(8, lambda = 4) - ppois(....................., lambda = 4)
```

**Câu 6.** Với $X\sim\text{Binomial}(25, 0.35)$, hoàn thành mã tính $P(X\ge 10)$.

```r
p <- 1 - pbinom(....................., size = 25, prob = 0.35)
```

**Câu 7.** Với $X\sim\text{Exp}(\lambda=5)$, hoàn thành mã mô phỏng $X$ từ $U\sim U(0,1)$ bằng biến đổi ngược.

```r
u <- runif(1000)
x <- ............................. / 5
```

**Câu 8.** Biến rời rạc $X$ nhận giá trị $2, 5, 9$ với xác suất lần lượt $0.3, 0.4, 0.3$. Hoàn thành mã mô phỏng bằng biến đổi ngược.

```r
u <- runif(1000)
x <- ifelse(u <= ....................., 2,
     ifelse(u <= ....................., 5, 9))
```

**Câu 9.** Hoàn thành đoạn mã mô phỏng minh họa $t(n)$ từ $Z\sim N(0,1)$ và $V\sim\chi^2(n)$ độc lập.

```r
Z <- rnorm(n_sim)
V <- rchisq(n_sim, df = df_val)
T_sim <- ............................. / sqrt(V / .....................)
```

**Câu 10.** Với $X_i\sim\text{Exp}(\lambda=3)$, $n=40$, viết công thức trung bình và độ lệch chuẩn lý thuyết của $\bar X$ theo CLT.

```r
mean_ly_thuyet <- .............................
sd_ly_thuyet   <- .............................
```

**Câu 11.** Hoàn thành hàm chuẩn hóa trung bình mẫu của $X_i\sim\text{Binomial}(m=20, p=0.4)$.

```r
Z <- function(k){
  x  <- rbinom(k, size = 20, prob = 0.4)
  mu <- .............................
  S  <- sd(x)
  (mean(x) - mu) / (S / sqrt(k))
}
```

**Câu 12.** Hoàn thành đoạn mã mô phỏng Monte Carlo minh họa hội tụ của $\hat\theta_N$ về $\theta=P(X\le 2)$ với $X\sim\text{Exp}(1)$.

```r
X <- rexp(N_max, rate = 1)
Y <- as.numeric(X <= 2)
running_mean <- ............................. / (1:N_max)
```

### A.3 Ước lượng điểm và MLE

**Câu 13.** Hoàn thành hàm log-hợp lý Bernoulli và công thức MLE của $p$.

```r
loglik_bern <- function(p, x) {
  T <- sum(x); n <- length(x)
  ............................. * log(p) + (n - .............................) * log(1 - p)
}
p_mle <- ............................. / .............................
```

**Câu 14.** Hoàn thành đoạn mã dùng `optimize()` để tìm MLE của $\lambda$ trong mô hình Poisson trên khoảng $(10^{-6}, 15)$.

```r
loglik_pois <- function(lambda, x) sum(dpois(x, lambda = lambda, log = TRUE))
lambda_mle <- optimize(function(lam) ............................., 
                        interval = c(1e-6, 15))$.............................
```

**Câu 15.** Hoàn thành cặp MLE của $(\mu, \sigma^2)$ cho mẫu $N(\mu,\sigma^2)$.

```r
mu_hat     <- .............................
sigma2_hat <- .............................
```

**Câu 16.** Hoàn thành hàm âm log-hợp lý chuẩn với tham số hóa $\theta = (\mu, \ln\sigma)$.

```r
negloglik_norm <- function(theta, x){
  mu <- theta[1]
  sigma <- .............................
  -sum(dnorm(x, mean = ....................., sd = ....................., log = TRUE))
}
```

**Câu 17.** Hoàn thành đoạn mã mô phỏng đánh giá độ chệch, phương sai và MSE của $\hat\lambda = 1/\bar X$ với $X_i\sim\text{Exp}(\lambda=1.5)$, $n=25$, $B=2000$.

```r
est <- replicate(B, {
  x <- rexp(n, rate = lambda)
  .............................
})
bias     <- ............................. - lambda
variance <- .............................
mse      <- mean((............................. - lambda)^2)
```

**Câu 18.** Hoàn thành công thức khoảng tin cậy tiệm cận 95% cho $\hat p$ dựa trên thông tin Fisher của Bernoulli.

```r
I_p_hat  <- n / (p_mle * (1 - p_mle))
se_p_hat <- sqrt(1 / .............................)
ci_p     <- p_mle + c(-1,1) * ............................. * se_p_hat
```

### A.4 Khoảng tin cậy

**Câu 19.** Hoàn thành hàm khoảng tin cậy cho trung bình một tổng thể (phương sai chưa biết).

```r
ci_mean_t <- function(x, conf = 0.95) {
  n <- length(x); xbar <- mean(x); s <- sd(x)
  alpha <- 1 - conf
  tcrit <- qt(....................., df = .....................)
  se <- s / sqrt(n)
  c(lower = xbar - tcrit * se, upper = xbar + tcrit * se)
}
```

**Câu 20.** Hoàn thành hàm khoảng tin cậy Wald cho một tỷ lệ.

```r
ci_prop_wald <- function(x, n, conf = 0.95) {
  phat <- .............................
  zcrit <- qnorm(1 - (1 - conf)/2)
  se <- sqrt(............................. / n)
  c(lower = phat - zcrit*se, upper = phat + zcrit*se)
}
```

**Câu 21.** Hoàn thành hàm khoảng tin cậy cho phương sai một tổng thể (mẫu chuẩn).

```r
ci_var <- function(x, conf = 0.95){
  n <- length(x); s2 <- var(x); alpha <- 1 - conf
  chi_lower <- qchisq(alpha/2, df = n-1)
  chi_upper <- qchisq(....................., df = n-1)
  c(lower = (n-1)*s2 / ....................., upper = (n-1)*s2 / .....................)
}
```

**Câu 22.** Hoàn thành hàm khoảng tin cậy hiệu hai trung bình theo phương pháp Welch.

```r
ci_two_mean_welch <- function(x, y, conf = 0.95) {
  n <- length(x); m <- length(y)
  sx2 <- var(x); sy2 <- var(y)
  diff <- mean(x) - mean(y)
  se <- sqrt(sx2/n + sy2/m)
  df <- (sx2/n + sy2/m)^2 / ((sx2/n)^2/(.....................) + (sy2/m)^2/(.....................))
  tcrit <- qt(1 - (1-conf)/2, df = df)
  c(diff - tcrit*se, diff + tcrit*se)
}
```

**Câu 23.** Với $n=25$, $\bar x = 58.4$, $s=6.2$, hoàn thành mã tính khoảng tin cậy 92% cho trung bình.

```r
xbar <- 58.4; s <- 6.2; n <- 25; conf <- 0.92
alpha <- .............................
q <- qt(....................., df = .....................)
ci <- xbar + c(-1,1) * q * s / sqrt(n)
```

### A.5 Kiểm định giả thuyết

**Câu 24.** Hoàn thành hàm tính $p$-value cho kiểm định trung bình một mẫu với ba loại đối thuyết.

```r
pvalue_mean_t <- function(x, mu0, alternative = "greater") {
  n <- length(x); df <- n - 1
  t_obs <- (mean(x) - mu0) / (sd(x) / sqrt(n))
  pval <- switch(alternative,
    "two.sided" = 2 * (1 - pt(............................., df = df)),
    "less"      = pt(....................., df = df),
    "greater"   = 1 - pt(....................., df = df))
  c(t_obs = t_obs, p_value = pval)
}
```

**Câu 25.** Hoàn thành mã kiểm định $H_0:\mu=1500$ so với $H_1:\mu<1500$ cho vector `weight`.

```r
test <- t.test(weight, mu = 1500, alternative = .............................)
test$.............................
```

**Câu 26.** Hoàn thành mã kiểm định hai mẫu bắt cặp với đối thuyết "điểm sau cao hơn điểm trước".

```r
t.test(diem_sau, diem_truoc, ............................. = TRUE, alternative = .............................)
```

**Câu 27.** Hoàn thành mã kiểm định hai mẫu độc lập với đối thuyết $H_1:\mu_x>\mu_y$, cả hai trường hợp phương sai bằng nhau và không bằng nhau.

```r
t.test(x, y, alternative = ....................., var.equal = .....................)
t.test(x, y, alternative = ....................., var.equal = .....................)
```

**Câu 28.** Một khảo sát ghi nhận $18$ lỗi trên $300$ sản phẩm; tiêu chuẩn cho phép $5\%$. Hoàn thành mã kiểm định $H_1$: tỷ lệ lỗi vượt tiêu chuẩn.

```r
prop.test(x = ....................., n = ....................., p = ....................., 
          alternative = ....................., correct = FALSE)
```

**Câu 29.** Hoàn thành hàm kiểm định phương sai một mẫu $H_0:\sigma^2=\sigma_0^2$.

```r
variance_test <- function(x, sigma2_0, alternative = "greater"){
  n <- length(x); df <- n - 1
  q_obs <- (n-1) * var(x) / .............................
  pval <- switch(alternative,
    "greater"   = 1 - pchisq(q_obs, df = df),
    "less"      = pchisq(q_obs, df = df),
    "two.sided" = 2 * min(pchisq(q_obs, df=df), 1 - .............................))
  c(q_obs = q_obs, p_value = pval)
}
```

**Câu 30.** Hoàn thành mã kiểm định hai phương sai bằng lệnh dựng sẵn của R.

```r
............................. (nhom1, nhom2, alternative = "two.sided", conf.level = 0.95)
```

**Câu 31.** Với $n=20$, hoàn thành mã tính giá trị tới hạn $t$ cho kiểm định hai phía mức ý nghĩa $\alpha=0.02$.

```r
alpha <- 0.02
t_crit <- qt(....................., df = .....................)
```

### A.6 Kiểm định chi-bình phương

**Câu 32.** Hoàn thành mã kiểm định sự phù hợp giữa tần số thực nghiệm `ThucNghiem` và tỷ lệ lý thuyết dựa trên `freq`.

```r
prob <- ............................. / sum(freq)
chisq.test(....................., p = ....................., correct = FALSE)
```

**Câu 33.** Hoàn thành mã kiểm định tính độc lập giữa hai biến định tính `KhuVuc` và `LoaiSanPham`.

```r
tab <- .............................(KhuVuc, LoaiSanPham)
chisq.test(....................., correct = FALSE)
# H0: .............................
```

**Câu 34.** Hoàn thành mã so sánh cấu trúc phân bố của hai bộ số liệu thực nghiệm `MauX`, `MauY` theo cùng bốn nhóm.

```r
tab <- data.frame(MauX = c(12, 20, 25, 43), MauY = c(18, 30, 33, 60))
chisq.test(....................., correct = .....................)
```

### A.7 Hồi quy tuyến tính đơn

**Câu 35.** Hoàn thành mã hồi quy `luong` (lương) theo `kinhnghiem` (số năm kinh nghiệm), in hệ số góc và vẽ đường hồi quy.

```r
fit <- lm(............................. ~ .............................)
coef(fit)[.....................]     # he so goc
plot(kinhnghiem, luong)
abline(.............................)
```

**Câu 36.** Hoàn thành mã kiểm định $H_0:\beta_1=0$ và lấy khoảng tin cậy 95% cho các hệ số.

```r
summary(fit)$.............................        # cot p-value cua he so
.............................(fit)                # khoang tin cay cho beta0, beta1
```

**Câu 37.** Hoàn thành mã dự đoán giá trị `luong` tại `kinhnghiem = 8`, cả giá trị điểm và khoảng dự đoán cho một quan sát mới.

```r
predict(fit, newdata = data.frame(kinhnghiem = 8))
predict(fit, newdata = data.frame(kinhnghiem = 8), interval = ".............................")
```

**Câu 38.** Hoàn thành công thức tính $R^2$ thủ công từ các giá trị dự đoán `y_hat` và dữ liệu gốc `y`.

```r
R2 <- 1 - sum((y - .....................)^2) / sum((y - .....................)^2)
```

---

## Phần B. Đáp án

1. `CV <- s / abs(xbar)`
2. `tan_so <- table(nhom)`; `tan_suat <- prop.table(tan_so)`
3. `freq = FALSE`; `lines(density(x))`
4. `s2_n <- mean((x - mean(x))^2)`
5. `ppois(8, lambda=4) - ppois(2, lambda=4)`
6. `1 - pbinom(9, size=25, prob=0.35)`
7. `x <- -log(1 - u) / 5`
8. Mốc cắt: `u <= 0.3` cho giá trị `2`; `u <= 0.7` cho giá trị `5` (vì $0.3+0.4=0.7$)
9. `T_sim <- Z / sqrt(V / df_val)`
10. $\mu = 1/3$; $sd = (1/3)/\sqrt{40}$
11. `mu <- 20 * 0.4`
12. `running_mean <- cumsum(Y) / (1:N_max)`
13. `T*log(p) + (n-T)*log(1-p)`; `p_mle <- T/n` (hay `sum(x)/length(x)`)
14. `-loglik_pois(lam, x)`; `$minimum`
15. `mu_hat <- mean(x)`; `sigma2_hat <- mean((x-mean(x))^2)`
16. `sigma <- exp(theta[2])`; `mean=mu, sd=sigma`
17. `1/mean(x)`; `bias <- mean(est) - lambda`; `variance <- var(est)`; `mse <- mean((est - lambda)^2)`
18. `se_p_hat <- sqrt(1/I_p_hat)`; `qnorm(0.975)`
19. `tcrit <- qt(1 - alpha/2, df = n-1)`
20. `phat <- x/n`; `se <- sqrt(phat*(1-phat)/n)`
21. `chi_upper <- qchisq(1 - alpha/2, df=n-1)`; cận dưới chia cho `chi_upper`, cận trên chia cho `chi_lower`
22. `df <- ...^2/((sx2/n)^2/(n-1) + (sy2/m)^2/(m-1))`
23. `alpha <- 1-conf = 0.08`; `q <- qt(1-alpha/2, df=n-1) = qt(0.96, df=24)`
24. `abs(t_obs)`; `t_obs` (less); `t_obs` (greater)
25. `alternative = "less"`; `test$p.value`
26. `paired = TRUE`; `alternative = "greater"`
27. Cả hai dòng: `alternative = "greater"`; dòng 1 `var.equal = TRUE`, dòng 2 `var.equal = FALSE`
28. `x = 18, n = 300, p = 0.05, alternative = "greater"`
29. `sigma2_0`; `pchisq(q_obs, df=df)`
30. `var.test(nhom1, nhom2, alternative="two.sided", conf.level=0.95)`
31. `t_crit <- qt(1 - alpha/2, df = 19)`
32. `prob <- freq/sum(freq)`; `chisq.test(ThucNghiem, p=prob, correct=FALSE)`
33. `tab <- table(KhuVuc, LoaiSanPham)`; `chisq.test(tab, correct=FALSE)`; $H_0$: hai biến `KhuVuc` và `LoaiSanPham` độc lập
34. `chisq.test(tab, correct = FALSE)`
35. `fit <- lm(luong ~ kinhnghiem)`; `coef(fit)[2]`; `abline(fit)`
36. `summary(fit)$coefficients`; `confint(fit)`
37. `interval = "prediction"`
38. `R2 <- 1 - sum((y - y_hat)^2) / sum((y - mean(y))^2)`

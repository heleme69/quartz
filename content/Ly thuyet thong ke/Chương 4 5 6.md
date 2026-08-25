# Tổng hợp lý thuyết & code R: Khoảng tin cậy — Kiểm định giả thuyết — Hồi quy tuyến tính

---

# PHẦN I. KHOẢNG TIN CẬY

## 1.1 Khái niệm chung

[!def] Khoảng tin cậy mức $1-\alpha$
Với tham số tổng thể $\theta$ chưa biết, khoảng tin cậy $(L,U)$ mức $1-\alpha$ là khoảng ngẫu nhiên (phụ thuộc mẫu) sao cho:

$$P(L \le \theta \le U) = 1-\alpha$$

Dạng chung nhất: $\hat\theta \pm (\text{giá trị tới hạn}) \times \widehat{se}(\hat\theta)$.

[!obs] Ý nghĩa tần suất
Diễn giải đúng: nếu lặp lại việc lấy mẫu nhiều lần và tính khoảng tin cậy mỗi lần, khoảng $95\%$ trong số đó chứa giá trị $\theta$ thật. **Không đúng** khi nói "xác suất $\theta$ nằm trong khoảng này là $95\%$" (vì $\theta$ là hằng số, không ngẫu nhiên) — dù trong đa số bài tập vẫn được chấp nhận diễn giải theo nghĩa thực hành.

## 1.2 Khoảng tin cậy cho trung bình một tổng thể

[!def] Trường hợp $\sigma$ chưa biết (thường gặp)
$$\bar x \pm t_{n-1,\,1-\alpha/2}\cdot\frac{s}{\sqrt n}$$

```r
ci_mean_t <- function(x, conf = 0.95) {
  n <- length(x); xbar <- mean(x); s <- sd(x)
  alpha <- 1 - conf
  tcrit <- qt(1 - alpha/2, df = n - 1)
  se <- s / sqrt(n)
  c(n=n, mean=xbar, sd=s, se=se,
    lower = xbar - tcrit*se, upper = xbar + tcrit*se)
}
t.test(x, conf.level = 0.95)$conf.int   # kiem tra bang ham dung san
```

[!def] Trường hợp $\sigma$ đã biết (ít gặp trong thực hành)
$$\bar x \pm z_{1-\alpha/2}\cdot\frac{\sigma}{\sqrt n}$$

```r
ci <- xbar + c(-1,1) * qnorm(1-alpha/2) * sigma/sqrt(n)
```

[!tip] Mẹo
Mặc định luôn dùng `qt()` trừ khi đề nói rõ "$\sigma$ đã biết" hoặc cho sẵn giá trị $\sigma$ của tổng thể. Khi $n$ lớn ($n>100$), $t_{n-1}\approx z$ nên hai cách cho kết quả gần như nhau.

## 1.3 Khoảng tin cậy cho tỷ lệ một tổng thể

[!def] Khoảng Wald
$$\hat p \pm z_{1-\alpha/2}\sqrt{\frac{\hat p(1-\hat p)}{n}}$$

```r
ci_prop_wald <- function(x, n, conf = 0.95) {
  phat <- x/n
  zcrit <- qnorm(1 - (1-conf)/2)
  se <- sqrt(phat*(1-phat)/n)
  c(phat=phat, se=se, lower=phat-zcrit*se, upper=phat+zcrit*se)
}
prop.test(x, n, conf.level = 0.95, correct = FALSE)$conf.int  # Wilson, khac Wald mot chut
```

[!warn] Lưu ý
Khoảng Wald chỉ đáng tin khi $n\hat p\ge 5$ và $n(1-\hat p)\ge 5$; có thể vượt ra ngoài $[0,1]$ khi $\hat p$ gần biên hoặc $n$ nhỏ — khi đó nên chặn bằng `pmax(0,pmin(1,ci))` hoặc dùng `prop.test()` (khoảng Wilson, ổn định hơn). Kết quả `prop.test()` và công thức Wald tay thường **không trùng khớp tuyệt đối** vì thuật toán khác nhau — đừng ngạc nhiên khi thấy lệch nhẹ.

## 1.4 Khoảng tin cậy cho phương sai một tổng thể

[!def] Giả định mẫu lấy từ tổng thể chuẩn
$$\left(\frac{(n-1)s^2}{\chi^2_{1-\alpha/2,\,n-1}},\; \frac{(n-1)s^2}{\chi^2_{\alpha/2,\,n-1}}\right)$$

```r
ci_var <- function(x, conf = 0.95){
  n <- length(x); s2 <- var(x); alpha <- 1-conf
  chi_lower <- qchisq(alpha/2, df = n-1)
  chi_upper <- qchisq(1 - alpha/2, df = n-1)
  c(lower = (n-1)*s2/chi_upper, upper = (n-1)*s2/chi_lower)
}
```

[!warn] Lưu ý
Khoảng này **không đối xứng** quanh $s^2$ (vì $\chi^2$ lệch phải); dễ nhầm chiều — cận **dưới** dùng $\chi^2$ ở phân vị **cao**, cận **trên** dùng $\chi^2$ ở phân vị **thấp** (ngược trực giác thông thường). Khoảng cho độ lệch chuẩn $\sigma$: lấy căn bậc hai hai đầu mút.

## 1.5 Khoảng tin cậy cho hiệu hai trung bình

[!def] Hai mẫu độc lập — pooled (giả định $\sigma_x^2=\sigma_y^2$)
$$s_p^2=\frac{(n-1)s_x^2+(m-1)s_y^2}{n+m-2},\qquad (\bar x-\bar y)\pm t_{n+m-2,\,1-\alpha/2}\cdot s_p\sqrt{\frac1n+\frac1m}$$

```r
ci_two_mean_pooled <- function(x, y, conf = 0.95) {
  n <- length(x); m <- length(y)
  sp2 <- ((n-1)*var(x)+(m-1)*var(y))/(n+m-2)
  sp <- sqrt(sp2)
  diff <- mean(x)-mean(y)
  se <- sp*sqrt(1/n+1/m)
  tcrit <- qt(1-(1-conf)/2, df = n+m-2)
  c(diff=diff, se=se, df=n+m-2, lower=diff-tcrit*se, upper=diff+tcrit*se)
}
```

[!def] Hai mẫu độc lập — Welch (không giả định phương sai bằng nhau)
$$se=\sqrt{\frac{s_x^2}{n}+\frac{s_y^2}{m}},\qquad df=\frac{\left(\frac{s_x^2}{n}+\frac{s_y^2}{m}\right)^2}{\frac{(s_x^2/n)^2}{n-1}+\frac{(s_y^2/m)^2}{m-1}}$$

```r
ci_two_mean_welch <- function(x, y, conf = 0.95) {
  n <- length(x); m <- length(y)
  sx2 <- var(x); sy2 <- var(y)
  diff <- mean(x)-mean(y)
  se <- sqrt(sx2/n+sy2/m)
  df <- (sx2/n+sy2/m)^2 / ((sx2/n)^2/(n-1)+(sy2/m)^2/(m-1))
  tcrit <- qt(1-(1-conf)/2, df=df)
  c(diff=diff, se=se, df=df, lower=diff-tcrit*se, upper=diff+tcrit*se)
}
t.test(x, y, var.equal = TRUE)$conf.int    # pooled
t.test(x, y, var.equal = FALSE)$conf.int   # Welch
```

[!def] Hai mẫu bắt cặp (paired)
Quy về khoảng tin cậy một mẫu cho hiệu số $d_i = x_i - y_i$:

$$\bar d \pm t_{n-1,\,1-\alpha/2}\cdot\frac{s_d}{\sqrt n}$$

```r
d <- x - y
ci_mean_t(d, conf = 0.95)
t.test(x, y, paired = TRUE)$conf.int
```

[!tip] Mẹo chọn pooled/Welch/paired
Hỏi ba câu: (1) Hai mẫu có đo trên cùng đối tượng không → có thì **paired**. (2) Nếu độc lập, có giả định/kiểm tra được phương sai bằng nhau không (`var.test`) → có thì **pooled**, không thì **Welch**. (3) Không chắc → dùng Welch làm lựa chọn an toàn mặc định.

## 1.6 Khoảng tin cậy cho hiệu hai tỷ lệ

$$(\hat p_1-\hat p_2)\pm z_{1-\alpha/2}\sqrt{\frac{\hat p_1(1-\hat p_1)}{n_1}+\frac{\hat p_2(1-\hat p_2)}{n_2}}$$

```r
ci_two_prop <- function(x1, n1, x2, n2, conf = 0.95){
  p1 <- x1/n1; p2 <- x2/n2
  se <- sqrt(p1*(1-p1)/n1 + p2*(1-p2)/n2)
  zcrit <- qnorm(1-(1-conf)/2)
  diff <- p1-p2
  c(diff=diff, lower=diff-zcrit*se, upper=diff+zcrit*se)
}
prop.test(x=c(x1,x2), n=c(n1,n2), conf.level=0.95, correct=FALSE)$conf.int
```

## 1.7 Khoảng tin cậy cho tỷ số hai phương sai

[!def] Dựa trên phân phối $F$
$$\left(\frac{s_x^2}{s_y^2}\cdot\frac{1}{F_{n-1,m-1,\,1-\alpha/2}},\; \frac{s_x^2}{s_y^2}\cdot F_{m-1,n-1,\,1-\alpha/2}\right)$$

```r
var.test(x, y, conf.level = 0.95)$conf.int   # R tinh san khoang nay
```

[!obs] Ít khi phải tính tay khoảng này; chủ yếu dùng `var.test()` trực tiếp, nhưng cần hiểu bản chất là khoảng cho **tỷ số** $\sigma_x^2/\sigma_y^2$, không phải hiệu số.

## 1.8 Bảng tổng hợp và lưu ý chốt cho khoảng tin cậy

| Tham số | Phân phối tới hạn | Hàm R |
|---|---|---|
| $\mu$, $\sigma$ chưa biết | $t(n-1)$ | `qt`, `t.test` |
| $p$ | $N(0,1)$ (Wald) | `qnorm`, `prop.test` |
| $\sigma^2$ | $\chi^2(n-1)$ | `qchisq` |
| $\mu_x-\mu_y$ pooled | $t(n+m-2)$ | `qt`, `t.test(var.equal=TRUE)` |
| $\mu_x-\mu_y$ Welch | $t(df)$ xấp xỉ | `qt`, `t.test(var.equal=FALSE)` |
| $\mu_d$ (paired) | $t(n-1)$ | `t.test(paired=TRUE)` |
| $p_1-p_2$ | $N(0,1)$ | `prop.test(x=c(),n=c())` |
| $\sigma_x^2/\sigma_y^2$ | $F(n-1,m-1)$ | `var.test` |

[!warn] Lưu ý chốt
Độ rộng khoảng tin cậy **tăng** khi mức tin cậy tăng (99% rộng hơn 95%) và **giảm** khi $n$ tăng. Tăng cỡ mẫu là cách duy nhất vừa tăng độ tin cậy vừa giữ khoảng hẹp.

---

# PHẦN II. KIỂM ĐỊNH GIẢ THUYẾT

## 2.1 Khung tổng quát

[!def] Các thành phần của một kiểm định
- Giả thuyết không $H_0$ (trạng thái mặc định, thường có dấu "=").
- Đối thuyết $H_1$ (điều muốn tìm bằng chứng ủng hộ).
- Mức ý nghĩa $\alpha$ (xác suất sai lầm loại I chấp nhận được, thường $0.05$).
- Thống kê kiểm định — một đại lượng tính từ mẫu, có phân phối đã biết dưới $H_0$.
- $p$-value — xác suất quan sát được kết quả cực đoan bằng hoặc hơn kết quả thực tế, **với điều kiện $H_0$ đúng**.

[!def] Quy tắc quyết định
$$p\text{-value} \le \alpha \;\Rightarrow\; \text{bác bỏ } H_0, \qquad p\text{-value} > \alpha \;\Rightarrow\; \text{không đủ cơ sở bác bỏ } H_0$$

[!def] Sai lầm loại I và loại II
| | $H_0$ đúng | $H_0$ sai |
|---|---|---|
| Bác bỏ $H_0$ | Sai lầm loại I (xác suất $\alpha$) | Quyết định đúng (power $=1-\beta$) |
| Không bác bỏ $H_0$ | Quyết định đúng | Sai lầm loại II (xác suất $\beta$) |

[!tip] Mẹo
Không bác bỏ $H_0$ **không đồng nghĩa** $H_0$ đúng — chỉ là chưa đủ bằng chứng thống kê để bác bỏ (có thể do cỡ mẫu nhỏ, power thấp). Đây là lỗi diễn giải bị hỏi thường xuyên nhất trong đề thi.

[!def] Tương đương giữa khoảng tin cậy và kiểm định hai phía
Nếu $\theta_0$ nằm ngoài khoảng tin cậy $1-\alpha$ cho $\theta$ thì bác bỏ $H_0:\theta=\theta_0$ ở mức $\alpha$ (kiểm định hai phía), và ngược lại.

## 2.2 Kiểm định trung bình một mẫu

$$t_{obs}=\frac{\bar x-\mu_0}{s/\sqrt n}\sim t(n-1) \text{ dưới } H_0$$

```r
pvalue_mean_t <- function(x, mu0, alternative = "greater") {
  n <- length(x); df <- n-1
  t_obs <- (mean(x)-mu0)/(sd(x)/sqrt(n))
  pval <- switch(alternative,
    "two.sided" = 2*(1-pt(abs(t_obs), df=df)),
    "less"      = pt(t_obs, df=df),
    "greater"   = 1-pt(t_obs, df=df))
  c(t_obs=t_obs, df=df, p_value=pval)
}
t.test(x, mu = mu0, alternative = "greater")
```

## 2.3 Kiểm định tỷ lệ một mẫu

$$z_{obs}=\frac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}}\sim N(0,1) \text{ dưới } H_0$$

```r
pvalue_prop_z <- function(x, n, p0, alternative = "greater") {
  phat <- x/n
  se0 <- sqrt(p0*(1-p0)/n)
  z_obs <- (phat-p0)/se0
  pval <- switch(alternative,
    "two.sided" = 2*(1-pnorm(abs(z_obs))),
    "less"      = pnorm(z_obs),
    "greater"   = 1-pnorm(z_obs))
  c(z_obs=z_obs, p_value=pval)
}
prop.test(x, n, p = p0, alternative = "greater", correct = FALSE)
```

[!warn] Lưu ý
`prop.test()` mặc định `correct=TRUE` (hiệu chỉnh liên tục Yates), trong khi công thức tay `pvalue_prop_z` không hiệu chỉnh — luôn đặt `correct=FALSE` nếu muốn kết quả khớp công thức z chuẩn.

## 2.4 Kiểm định phương sai một mẫu

$$Q_{obs}=\frac{(n-1)s^2}{\sigma_0^2}\sim\chi^2(n-1) \text{ dưới } H_0$$

```r
variance_test_one_sample <- function(x, sigma2_0, alternative = "greater"){
  n <- length(x); df <- n-1
  q_obs <- (n-1)*var(x)/sigma2_0
  pval <- switch(alternative,
    "greater"   = 1-pchisq(q_obs, df=df),
    "less"      = pchisq(q_obs, df=df),
    "two.sided" = 2*min(pchisq(q_obs,df=df), 1-pchisq(q_obs,df=df)))
  c(q_obs=q_obs, df=df, p_value=pval)
}
EnvStats::varTest(x, sigma.squared = sigma2_0, alternative = "greater")
```

## 2.5 Kiểm định hiệu hai trung bình

```r
# Hai mau doc lap, gia dinh phuong sai bang nhau
t.test(x, y, alternative = "greater", var.equal = TRUE)
# Hai mau doc lap, khong gia dinh phuong sai bang nhau
t.test(x, y, alternative = "greater", var.equal = FALSE)
# Hai mau bat cap
t.test(x, y, paired = TRUE, alternative = "greater")
```

Công thức thủ công (pooled):

```r
pvalue_two_mean_pooled <- function(x, y, alternative = "greater") {
  n <- length(x); m <- length(y)
  sp2 <- ((n-1)*var(x)+(m-1)*var(y))/(n+m-2)
  se <- sqrt(sp2)*sqrt(1/n+1/m)
  t_obs <- (mean(x)-mean(y))/se
  df <- n+m-2
  pval <- switch(alternative,
    "two.sided" = 2*(1-pt(abs(t_obs), df=df)),
    "less"      = pt(t_obs, df=df),
    "greater"   = 1-pt(t_obs, df=df))
  c(t_obs=t_obs, df=df, p_value=pval)
}
```

## 2.6 Kiểm định hai tỷ lệ

```r
prop.test(x = c(x1, x2), n = c(n1, n2), alternative = "two.sided", correct = FALSE)
```

Thống kê $z$ tương đương (dùng tỷ lệ gộp $\hat p = (x_1+x_2)/(n_1+n_2)$):

$$z_{obs} = \frac{\hat p_1-\hat p_2}{\sqrt{\hat p(1-\hat p)\left(\frac1{n_1}+\frac1{n_2}\right)}}$$

## 2.7 Kiểm định hai phương sai

$$F_{obs}=\frac{s_x^2}{s_y^2}\sim F(n-1,m-1) \text{ dưới } H_0$$

```r
var.test(x, y, alternative = "two.sided", conf.level = 0.95)
```

[!warn] Lưu ý
`var.test()` giả định **cả hai** mẫu đến từ tổng thể chuẩn — kiểm định này khá nhạy với vi phạm giả định chuẩn, nên chỉ dùng khi có cơ sở dữ liệu gần chuẩn (kiểm tra bằng histogram/QQ-plot trước).

## 2.8 Kiểm định chi-bình phương (tóm lược)

```r
# (1) Su phu hop
chisq.test(observed, p = prob, correct = FALSE)
# (2) So sanh nhieu mau theo cung nhom
chisq.test(tab, correct = FALSE)
# (3) Tinh doc lap hai bien dinh tinh
chisq.test(table(A, B), correct = FALSE)
```

Thống kê kiểm định chung: $\chi^2_{obs}=\sum \dfrac{(O-E)^2}{E} \sim \chi^2(df)$, với $df$ tùy theo loại kiểm định (số nhóm $-1$ cho phù hợp; $(r-1)(c-1)$ cho độc lập/so sánh nhóm với bảng $r\times c$).

## 2.9 Bảng tổng hợp thống kê kiểm định

| Bài toán | Thống kê | Phân phối $H_0$ | Hàm R |
|---|---|---|---|
| Trung bình 1 mẫu | $t=(\bar x-\mu_0)/(s/\sqrt n)$ | $t(n-1)$ | `t.test` |
| Tỷ lệ 1 mẫu | $z=(\hat p-p_0)/\sqrt{p_0(1-p_0)/n}$ | $N(0,1)$ | `prop.test` |
| Phương sai 1 mẫu | $Q=(n-1)s^2/\sigma_0^2$ | $\chi^2(n-1)$ | `EnvStats::varTest` |
| Hiệu 2 TB, pooled | $t=(\bar x-\bar y)/(s_p\sqrt{1/n+1/m})$ | $t(n+m-2)$ | `t.test(var.equal=TRUE)` |
| Hiệu 2 TB, Welch | tương tự, $se$ không gộp | $t(df)$ Welch | `t.test(var.equal=FALSE)` |
| Hiệu 2 TB, bắt cặp | $t=\bar d/(s_d/\sqrt n)$ | $t(n-1)$ | `t.test(paired=TRUE)` |
| Hai tỷ lệ | $z$ dùng $\hat p$ gộp | $N(0,1)$ | `prop.test(x=c(),n=c())` |
| Hai phương sai | $F=s_x^2/s_y^2$ | $F(n-1,m-1)$ | `var.test` |
| Phù hợp/độc lập | $\sum(O-E)^2/E$ | $\chi^2(df)$ | `chisq.test` |

---

# PHẦN III. HỒI QUY TUYẾN TÍNH ĐƠN

## 3.1 Mô hình và giả định

[!def] Mô hình
$$Y_i=\beta_0+\beta_1 x_i+\varepsilon_i,\qquad \varepsilon_i\overset{iid}{\sim}N(0,\sigma^2)$$

[!def] Bốn giả định cần kiểm tra (viết tắt L-I-N-E)
- **L**inearity: quan hệ giữa $x$ và $E[Y]$ là tuyến tính.
- **I**ndependence: các sai số $\varepsilon_i$ độc lập nhau.
- **N**ormality: sai số có phân phối chuẩn.
- **E**qual variance (homoscedasticity): phương sai sai số không đổi theo $x$.

## 3.2 Ước lượng bình phương tối thiểu (OLS)

$$\hat\beta_1=\frac{\sum(x_i-\bar x)(y_i-\bar y)}{\sum(x_i-\bar x)^2}=r\cdot\frac{s_y}{s_x},\qquad \hat\beta_0=\bar y-\hat\beta_1\bar x$$

```r
fit <- lm(y ~ x)
coef(fit)          # c(beta0_hat, beta1_hat)
plot(x, y); abline(fit, col = "red", lwd = 2)
```

## 3.3 Kiểm định hệ số hồi quy

$$H_0:\beta_1=0 \quad\text{vs}\quad H_1:\beta_1\ne 0, \qquad t_{obs}=\frac{\hat\beta_1}{se(\hat\beta_1)}\sim t(n-2)$$

```r
summary(fit)                       # xem toan bo bang he so
summary(fit)$coefficients          # chi lay bang he so (Estimate, Std.Error, t, p-value)
```

[!tip] Mẹo đọc `summary(lm())`
Dòng thứ hai của bảng hệ số (tên biến $x$) chứa $\hat\beta_1$, sai số chuẩn, giá trị $t$, và `Pr(>|t|)` chính là $p$-value cho $H_0:\beta_1=0$. `F-statistic` ở cuối output kiểm định **cùng giả thuyết** $H_0:\beta_1=0$ theo cách khác (ANOVA); trong hồi quy đơn, $p$-value của `F-statistic` và của $t$ ở dòng $x$ luôn **bằng nhau tuyệt đối**.

## 3.4 Khoảng tin cậy cho hệ số hồi quy

```r
confint(fit, level = 0.95)
```

Công thức tương đương: $\hat\beta_1 \pm t_{n-2,\,0.975}\cdot se(\hat\beta_1)$.

## 3.5 Hệ số xác định $R^2$ và hệ số tương quan

$$R^2=1-\frac{\sum(y_i-\hat y_i)^2}{\sum(y_i-\bar y)^2}=r_{xy}^2 \quad\text{(trong hồi quy đơn)}$$

```r
summary(fit)$r.squared
cor(x, y)^2                        # phai bang r.squared o tren
```

[!obs] $R^2$ đo tỷ lệ biến thiên của $Y$ được giải thích bởi $X$ qua mô hình tuyến tính; **không** đo độ chính xác dự đoán tuyệt đối và không hàm ý quan hệ nhân quả.

## 3.6 Dự đoán: khoảng tin cậy vs khoảng dự đoán

```r
predict(fit, newdata = data.frame(x = x0))                                  # gia tri diem
predict(fit, newdata = data.frame(x = x0), interval = "confidence")         # CI cho E[Y|X=x0]
predict(fit, newdata = data.frame(x = x0), interval = "prediction")         # PI cho mot quan sat moi
```

[!warn] Lưu ý
Khoảng dự đoán (`prediction`) luôn **rộng hơn** khoảng tin cậy (`confidence`) tại cùng $x_0$ vì phải cộng thêm phương sai của sai số ngẫu nhiên $\varepsilon$ của quan sát mới, ngoài phương sai ước lượng tham số. Tên cột trong `newdata` phải khớp **chính xác** tên biến độc lập trong công thức `lm()`.

## 3.7 Phân tích phần dư để kiểm tra giả định

```r
plot(fitted(fit), resid(fit),
     xlab = "Gia tri du doan", ylab = "Phan du")
abline(h = 0, col = "red", lty = 2)

qqnorm(resid(fit)); qqline(resid(fit), col = "red")   # kiem tra tinh chuan cua sai so
```

[!obs] Nếu đồ thị phần dư theo giá trị dự đoán cho thấy hình dạng phễu (phương sai tăng/giảm theo $x$) → vi phạm giả định phương sai không đổi. Nếu các điểm trên QQ-plot lệch mạnh khỏi đường thẳng → vi phạm giả định chuẩn của sai số.

## 3.8 Kiểm định F tổng quát cho mô hình (bổ sung)

Trong hồi quy đơn, `F-statistic` trong `summary(fit)` kiểm định $H_0$: mô hình không giải thích được gì cho $Y$ (tương đương $H_0:\beta_1=0$). Với hồi quy đơn, đây là thông tin trùng lặp với kiểm định $t$ của $\hat\beta_1$, nhưng khi mở rộng sang hồi quy bội, kiểm định $F$ là kiểm định tổng thể còn kiểm định $t$ là cho từng hệ số riêng lẻ.

## 3.9 Mẹo và lưu ý tổng hợp cho hồi quy

- Bậc tự do trong hồi quy đơn luôn là $n-2$ (ước lượng 2 tham số $\beta_0,\beta_1$) — khác với $n-1$ khi chỉ ước lượng một tham số như trung bình.
- `coef(fit)[1]` là $\hat\beta_0$ (hệ số chặn), `coef(fit)[2]` là $\hat\beta_1$ (hệ số góc) — đúng theo thứ tự xuất hiện trong công thức `y ~ x`.
- $\hat\beta_1$ có ý nghĩa thống kê ($p$ nhỏ) không đảm bảo mô hình có $R^2$ cao — hai chỉ số trả lời hai câu hỏi khác nhau (có quan hệ hay không vs quan hệ đó giải thích được bao nhiêu biến thiên).
- `abline(fit)` chỉ vẽ đúng khi đối tượng truyền vào là kết quả của `lm()`, không truyền được hệ số dạng vector trực tiếp trừ khi dùng `abline(a=, b=)`.

---

# PHẦN IV. CÂU HỎI MINH HỌA CÓ LỜI GIẢI CHI TIẾT

## Bài 1 — CI cho trung bình một tổng thể

**Đề bài.** Đo độ ẩm (%) của $12$ mẫu gỗ: `4.9, 5.2, 4.7, 5.5, 5.0, 4.8, 5.3, 5.1, 4.6, 5.4, 5.0, 4.9`. Tính khoảng tin cậy 95% cho độ ẩm trung bình của lô gỗ.

**Lời giải.**

```r
do_am <- c(4.9,5.2,4.7,5.5,5.0,4.8,5.3,5.1,4.6,5.4,5.0,4.9)
n <- length(do_am); xbar <- mean(do_am); s <- sd(do_am)
tcrit <- qt(0.975, df = n-1)
se <- s/sqrt(n)
ci <- xbar + c(-1,1)*tcrit*se
c(xbar = xbar, s = s, lower = ci[1], upper = ci[2])
```

Kết quả: $\bar x \approx 5.033$, $s\approx 0.28$, khoảng tin cậy $95\%$ xấp xỉ $(4.85,\,5.21)$. Vì $\sigma$ tổng thể chưa biết và $n=12$ nhỏ, bắt buộc dùng phân phối $t_{11}$ thay vì $z$.

## Bài 2 — CI cho tỷ lệ

**Đề bài.** Khảo sát $200$ khách hàng, có $54$ người hài lòng với dịch vụ. Tính khoảng tin cậy 90% cho tỷ lệ hài lòng thật của tổng thể.

**Lời giải.**

```r
x <- 54; n <- 200; conf <- 0.90
phat <- x/n
zcrit <- qnorm(1-(1-conf)/2)
se <- sqrt(phat*(1-phat)/n)
ci <- phat + c(-1,1)*zcrit*se
c(phat=phat, lower=ci[1], upper=ci[2])
```

$\hat p = 0.27$, khoảng tin cậy $90\%$ xấp xỉ $(0.217,\,0.323)$. Điều kiện $n\hat p=54\ge5$ và $n(1-\hat p)=146\ge5$ đều thỏa nên khoảng Wald đáng tin cậy.

## Bài 3 — CI cho phương sai

**Đề bài.** Với dữ liệu Bài 1 (`do_am`), tính khoảng tin cậy 95% cho phương sai và độ lệch chuẩn của độ ẩm.

**Lời giải.**

```r
n <- length(do_am); s2 <- var(do_am)
chi_lower <- qchisq(0.025, df = n-1)
chi_upper <- qchisq(0.975, df = n-1)
ci_var <- c((n-1)*s2/chi_upper, (n-1)*s2/chi_lower)
ci_sd <- sqrt(ci_var)
c(var_lower=ci_var[1], var_upper=ci_var[2], sd_lower=ci_sd[1], sd_upper=ci_sd[2])
```

Lưu ý cận dưới của khoảng phương sai dùng $\chi^2_{0.975,11}$ (phân vị cao) ở mẫu số, cận trên dùng $\chi^2_{0.025,11}$ (phân vị thấp).

## Bài 4 — CI hiệu hai trung bình, kiểm tra pooled/Welch

**Đề bài.** So sánh điểm kiểm tra của hai lớp A (`n=15`) và B (`n=18`): `A <- c(7.2,6.8,7.5,8.0,6.9,7.1,7.8,7.3,6.5,7.6,7.4,7.0,7.9,6.7,7.2)`, `B <- c(6.5,6.9,7.0,6.2,6.8,7.1,6.4,6.7,6.9,7.2,6.3,6.6,6.8,7.0,6.5,6.9,6.7,6.4)`. Kiểm tra giả định phương sai bằng nhau, sau đó tính khoảng tin cậy 95% cho hiệu hai trung bình phù hợp.

**Lời giải.**

```r
A <- c(7.2,6.8,7.5,8.0,6.9,7.1,7.8,7.3,6.5,7.6,7.4,7.0,7.9,6.7,7.2)
B <- c(6.5,6.9,7.0,6.2,6.8,7.1,6.4,6.7,6.9,7.2,6.3,6.6,6.8,7.0,6.5,6.9,6.7,6.4)

var.test(A, B)   # kiem dinh H0: phuong sai bang nhau truoc

t.test(A, B, var.equal = TRUE)$conf.int    # neu var.test khong bac bo H0
t.test(A, B, var.equal = FALSE)$conf.int   # phuong an an toan neu con nghi ngo
```

Nếu `var.test()` cho $p$-value $>0.05$, có cơ sở dùng khoảng tin cậy pooled; ngược lại nên báo cáo khoảng Welch.

## Bài 5 — Kiểm định trung bình một mẫu, một phía

**Đề bài.** Nhà sản xuất tuyên bố tuổi thọ trung bình bóng đèn là $\ge 1000$ giờ. Mẫu $20$ bóng có $\bar x = 985$, $s=40$. Với mức ý nghĩa $5\%$, có đủ bằng chứng bác bỏ tuyên bố của nhà sản xuất không?

**Lời giải.** $H_0:\mu\ge1000$ (tương đương $H_0:\mu=1000$ ở biên), $H_1:\mu<1000$.

```r
n <- 20; xbar <- 985; s <- 40; mu0 <- 1000
t_obs <- (xbar - mu0)/(s/sqrt(n))
df <- n - 1
p_value <- pt(t_obs, df = df)
c(t_obs = t_obs, p_value = p_value)
```

$t_{obs}\approx -1.677$, $p\text{-value}\approx 0.055$. Vì $p>0.05$, **không đủ cơ sở bác bỏ** $H_0$ ở mức $5\%$ — chưa đủ bằng chứng thống kê để nói tuổi thọ trung bình thấp hơn $1000$ giờ (dù giá trị mẫu thấp hơn, sự khác biệt chưa đạt ý nghĩa thống kê).

## Bài 6 — Kiểm định tỷ lệ một mẫu

**Đề bài.** Một nhà thuốc tuyên bố tỷ lệ khách hàng quay lại mua thuốc là $60\%$. Khảo sát $150$ khách có $80$ người quay lại. Kiểm định hai phía ở mức $5\%$.

**Lời giải.**

```r
x <- 80; n <- 150; p0 <- 0.6
prop.test(x, n, p = p0, alternative = "two.sided", correct = FALSE)
```

$\hat p = 0.533$, $p\text{-value}$ tính được so với $0.05$ để quyết định. Nếu $p>0.05$: không đủ cơ sở bác bỏ tỷ lệ $60\%$ mà nhà thuốc tuyên bố.

## Bài 7 — Kiểm định hai mẫu bắt cặp

**Đề bài.** Đo huyết áp tâm thu của $10$ bệnh nhân trước và sau khi dùng thuốc: `truoc <- c(145,150,138,160,155,148,152,142,158,149)`, `sau <- c(138,142,135,150,148,140,145,138,150,143)`. Kiểm định thuốc có làm giảm huyết áp không, mức ý nghĩa $5\%$.

**Lời giải.** $H_0:\mu_d=0$ ($d=\text{trước}-\text{sau}$), $H_1:\mu_d>0$ (trước cao hơn sau, tức thuốc có tác dụng giảm).

```r
truoc <- c(145,150,138,160,155,148,152,142,158,149)
sau   <- c(138,142,135,150,148,140,145,138,150,143)

t.test(truoc, sau, paired = TRUE, alternative = "greater")
```

Nếu $p\text{-value}\le 0.05$: đủ bằng chứng kết luận thuốc có tác dụng làm giảm huyết áp tâm thu.

## Bài 8 — Kiểm định hai phương sai

**Đề bài.** Với dữ liệu Bài 4 (`A`, `B`), kiểm định chính thức $H_0:\sigma_A^2=\sigma_B^2$ ở mức $5\%$.

**Lời giải.**

```r
var.test(A, B, alternative = "two.sided", conf.level = 0.95)
```

Đọc `p-value` trong output: nếu $>0.05$, không đủ cơ sở bác bỏ giả thuyết hai phương sai bằng nhau — hợp lý để dùng `var.equal=TRUE` trong `t.test()` ở các bài toán liên quan.

## Bài 9 — Kiểm định phương sai một mẫu

**Đề bài.** Quy trình sản xuất yêu cầu độ lệch chuẩn đường kính trục không vượt quá $0.05$ mm. Đo $15$ trục cho $s=0.062$. Kiểm định $H_1:\sigma>0.05$ ở mức $5\%$.

**Lời giải.**

```r
n <- 15; s <- 0.062; sigma0 <- 0.05
q_obs <- (n-1)*s^2/sigma0^2
df <- n-1
p_value <- 1 - pchisq(q_obs, df = df)
c(q_obs = q_obs, p_value = p_value)
```

Nếu $p\text{-value}\le 0.05$: đủ bằng chứng cho thấy độ lệch chuẩn thực tế vượt tiêu chuẩn cho phép, quy trình cần được kiểm tra lại.

## Bài 10 — Kiểm định hai tỷ lệ

**Đề bài.** Tỷ lệ chuyển đổi (mua hàng) của hai phiên bản landing page: A có $45/500$, B có $62/520$. Kiểm định hai phía xem hai phiên bản có khác biệt về tỷ lệ chuyển đổi không.

**Lời giải.**

```r
prop.test(x = c(45, 62), n = c(500, 520), alternative = "two.sided", correct = FALSE)
```

Đọc $p$-value: nếu $\le0.05$, kết luận có sự khác biệt có ý nghĩa thống kê về tỷ lệ chuyển đổi giữa hai phiên bản.

## Bài 11 — Hồi quy tuyến tính đơn đầy đủ

**Đề bài.** Dữ liệu số giờ học (`gio_hoc`) và điểm thi (`diem`) của $10$ sinh viên:

```r
gio_hoc <- c(2,4,3,6,5,7,1,8,4,6)
diem    <- c(5.0,6.2,5.8,7.5,7.0,8.2,4.5,8.8,6.5,7.8)
```

a) Ước lượng mô hình hồi quy `diem ~ gio_hoc`. b) Kiểm định $H_0:\beta_1=0$. c) Tính $R^2$. d) Dự đoán điểm thi cho sinh viên học $5.5$ giờ kèm khoảng dự đoán $95\%$. e) Kiểm tra giả định qua đồ thị phần dư.

**Lời giải.**

```r
gio_hoc <- c(2,4,3,6,5,7,1,8,4,6)
diem    <- c(5.0,6.2,5.8,7.5,7.0,8.2,4.5,8.8,6.5,7.8)

fit <- lm(diem ~ gio_hoc)
summary(fit)                 # a, b: he so va p-value cho beta1

# c
summary(fit)$r.squared
cor(gio_hoc, diem)^2         # doi chieu

# d
predict(fit, newdata = data.frame(gio_hoc = 5.5),
        interval = "prediction", level = 0.95)

# e
plot(fitted(fit), resid(fit), xlab="Gia tri du doan", ylab="Phan du")
abline(h = 0, col = "red", lty = 2)
qqnorm(resid(fit)); qqline(resid(fit), col = "red")
```

Diễn giải: hệ số góc $\hat\beta_1$ dương và có `Pr(>|t|)` nhỏ cho thấy số giờ học có quan hệ tuyến tính thuận và có ý nghĩa thống kê với điểm thi; $R^2$ cao (thường $>0.85$ với dữ liệu tuyến tính rõ như trên) cho thấy phần lớn biến thiên điểm thi được giải thích bởi số giờ học. Khoảng dự đoán tại `gio_hoc=5.5` rộng hơn khoảng tin cậy tương ứng vì phải tính thêm phương sai của một quan sát mới.

## Bài 12 — Phân biệt khoảng tin cậy và khoảng dự đoán trong hồi quy

**Đề bài.** Với mô hình Bài 11, so sánh độ rộng của khoảng tin cậy và khoảng dự đoán tại `gio_hoc = 5.5`.

**Lời giải.**

```r
ci <- predict(fit, newdata = data.frame(gio_hoc = 5.5), interval = "confidence")
pi <- predict(fit, newdata = data.frame(gio_hoc = 5.5), interval = "prediction")
rbind(confidence = ci, prediction = pi)
```

Khoảng `prediction` luôn rộng hơn khoảng `confidence` ở cùng giá trị $x_0$ — đây là điểm cần nhấn mạnh khi đối chiếu kết quả trong bài thi.

## Bài 13 — Tổng hợp: từ khoảng tin cậy suy ra kết luận kiểm định

**Đề bài.** Với dữ liệu Bài 1 (`do_am`), khoảng tin cậy $95\%$ cho trung bình đã tính là $(4.85, 5.21)$. Không tính lại kiểm định, hãy cho biết: kiểm định hai phía $H_0:\mu=5.3$ ở mức $5\%$ có bị bác bỏ hay không? Vì sao?

**Lời giải.** Vì $5.3$ nằm **ngoài** khoảng tin cậy $95\%$ đã tính $(4.85,\,5.21)$, theo tính tương đương giữa khoảng tin cậy và kiểm định hai phía, ta bác bỏ $H_0:\mu=5.3$ ở mức ý nghĩa $5\%$ mà không cần tính lại thống kê $t$ hay $p$-value.

```r
# Kiem tra lai bang tinh truc tiep
t.test(do_am, mu = 5.3, alternative = "two.sided")
```

# Ôn tập cấp tốc — Quy tắc quyết định & Cách đọc output R

*Tài liệu này không có công thức tính tay — chỉ tập trung vào cách đọc kết quả R có sẵn và câu kết luận chuẩn để trả lời nhanh.*

---

## 1. Khoảng tin cậy

### Quy tắc quyết định

| Tình huống | Kết luận |
|---|---|
| Giá trị $\theta_0$ đề bài đưa ra nằm **trong** khoảng tin cậy | Không đủ cơ sở bác bỏ $H_0:\theta=\theta_0$ (nếu có kiểm định kèm theo) |
| Giá trị $\theta_0$ nằm **ngoài** khoảng tin cậy | Bác bỏ $H_0:\theta=\theta_0$ ở mức ý nghĩa tương ứng |
| Mức tin cậy tăng ($90\%\to95\%\to99\%$) | Khoảng **rộng** ra |
| Cỡ mẫu $n$ tăng | Khoảng **hẹp** lại |
| Đổi từ hai phía sang một phía cùng $\alpha$ | Khoảng một phía "chặt" hơn về một đầu (đầu kia là $\pm\infty$) |

### Cách đọc output `t.test()`

```
One Sample t-test
data:  x
t = 2.31, df = 19, p-value = 0.0325
alternative hypothesis: true mean is not equal to 42
95 percent confidence interval:
 42.85 47.12
sample estimates:
mean of x
 44.98
```

- `95 percent confidence interval` → đọc trực tiếp hai số làm cận dưới/cận trên, **không cần tính lại**.
- Nếu `alternative` **không phải** `"two.sided"` (ví dụ `"greater"` hoặc `"less"`), khoảng tin cậy in ra là khoảng **một phía** — một đầu sẽ là `-Inf` hoặc `Inf`. Đừng nhầm là khoảng hai phía đối xứng.
- `sample estimates` là giá trị điểm ($\bar x$, hoặc $\bar x - \bar y$ nếu hai mẫu).

### Cách đọc output `prop.test()`

```
1-sample proportions test without continuity correction
data:  x out of n, null probability p0
X-squared = 3.2, df = 1, p-value = 0.0736
alternative hypothesis: true p is not equal to 0.5
95 percent confidence interval:
 0.412 0.588
sample estimates:
    p
0.50
```

- Dòng `95 percent confidence interval` đọc trực tiếp; đây là khoảng Wilson (có hiệu chỉnh), có thể khác khoảng Wald tính tay đôi chút.
- `X-squared` thay cho `t`/`z` vì `prop.test` dùng thống kê $\chi^2$ (tương đương bình phương của $z$) khi kiểm định một tỷ lệ.

### Cách đọc output `var.test()`

```
F test to compare two variances
data:  x and y
F = 1.42, num df = 14, denom df = 17, p-value = 0.412
95 percent confidence interval:
 0.512 3.821
sample estimates:
ratio of variances
   1.42
```

- Khoảng tin cậy ở đây là cho **tỷ số** $\sigma_x^2/\sigma_y^2$, không phải hiệu số — nếu $1$ nằm trong khoảng, nghĩa là không đủ cơ sở bác bỏ $H_0:\sigma_x^2=\sigma_y^2$.

**Câu kết luận mẫu để học thuộc:** *"Vì [giá trị $\theta_0$] nằm [trong/ngoài] khoảng tin cậy [mức]%, ta [không đủ cơ sở bác bỏ / bác bỏ] $H_0$."*

---

## 2. Kiểm định giả thuyết — quy tắc chung

### Quy tắc quyết định cốt lõi (áp dụng cho mọi loại kiểm định)

$$p\text{-value} \le \alpha \Rightarrow \textbf{bác bỏ } H_0 \qquad\qquad p\text{-value} > \alpha \Rightarrow \textbf{không đủ cơ sở bác bỏ } H_0$$

- Không có "chứng minh $H_0$ đúng" — chỉ có "không đủ bằng chứng bác bỏ".
- $\alpha$ thường là $0.05$ trừ khi đề nói khác (đọc kỹ đề, đôi khi cho $\alpha=0.01$ hoặc $0.10$).

### Cách đọc nhanh mọi output kiểm định trong R

Mọi hàm kiểm định (`t.test`, `prop.test`, `var.test`, `chisq.test`) đều có chung 3 dòng cần nhìn:

1. **`alternative hypothesis:`** — xác nhận đúng đối thuyết đề bài yêu cầu (nếu không khớp, có thể code sai, cần đọc lại).
2. **`p-value`** — so với $\alpha$ để quyết định.
3. **`sample estimates`** — giá trị điểm ước lượng được, dùng để mô tả kết quả bằng lời (ví dụ "trung bình mẫu là...", "tỷ lệ mẫu là...").

### Bảng tra "đọc thấy gì → kết luận gì"

| Thấy trong output | Ý nghĩa |
|---|---|
| `p-value < 2.2e-16` | $p$-value cực nhỏ, gần như chắc chắn bác bỏ $H_0$ |
| `p-value = 1` | Không có bằng chứng nào chống lại $H_0$ |
| `t = -2.5` (âm) | Trung bình mẫu **thấp hơn** $\mu_0$ (hoặc nhóm 1 thấp hơn nhóm 2) |
| `t = 2.5` (dương) | Trung bình mẫu **cao hơn** $\mu_0$ |
| `df` không phải số nguyên (vd `df = 27.34`) | Đang dùng hiệu chỉnh Welch — không phải lỗi |
| `X-squared` | Thống kê kiểm định là $\chi^2$ (dùng cho `prop.test`, `chisq.test`) |

**Câu kết luận mẫu để học thuộc:**
*"Vì $p$-value $=$ [giá trị] [$\le$/$>$] $\alpha=0.05$, ta [bác bỏ / không đủ cơ sở bác bỏ] $H_0$. [Diễn giải theo ngữ cảnh đề bài]."*

---

## 3. Kiểm định trung bình / hiệu hai trung bình — đọc `t.test()`

```
Welch Two Sample t-test
data:  manual and automatic
t = 3.77, df = 18.33, p-value = 0.0007
alternative hypothesis: true difference in means is greater than 0
95 percent confidence interval:
 3.21    Inf
sample estimates:
mean of x mean of y
   24.39     17.15
```

- `Welch Two Sample t-test` ở dòng đầu tự nói cho biết R đang dùng phương pháp Welch (`var.equal=FALSE`); nếu thấy `t-test` không chữ "Welch" → đang dùng pooled (`var.equal=TRUE`).
- `alternative hypothesis: true difference in means is greater than 0` xác nhận đối thuyết $H_1:\mu_x>\mu_y$ — khớp với `alternative="greater"`.
- Khoảng tin cậy `3.21  Inf` là khoảng một phía (đúng vì đối thuyết một phía).
- Kết luận mẫu: *"Vì $p=0.0007 < 0.05$, bác bỏ $H_0$, có đủ bằng chứng cho thấy trung bình nhóm $x$ lớn hơn nhóm $y$."*

**Dấu hiệu paired:** dòng đầu ghi `Paired t-test` thay vì `Two Sample t-test`.

---

## 4. Kiểm định tỷ lệ — đọc `prop.test()`

```
2-sample test for equality of proportions without continuity correction
data:  c(40, 55) out of c(120, 150)
X-squared = 0.089, df = 1, p-value = 0.7655
alternative hypothesis: two.sided
95 percent confidence interval:
 -0.114  0.084
sample estimates:
   prop 1    prop 2
0.3333333 0.3666667
```

- `95 percent confidence interval` chứa số $0$ → khớp với $p$-value lớn ($0.7655>0.05$) → không đủ cơ sở bác bỏ $H_0$: hai tỷ lệ bằng nhau. Đây là ví dụ trực quan cho tính tương đương CI ↔ kiểm định.
- `prop 1`, `prop 2` là hai tỷ lệ mẫu — dùng để mô tả kết quả.

---

## 5. Kiểm định chi-bình phương — đọc `chisq.test()`

```
Pearson's Chi-squared test
data:  table(GT, KV)
X-squared = 8.42, df = 2, p-value = 0.01481
```

- `df` ở đây tính theo cấu trúc bảng: bảng $r\times c$ → $df=(r-1)(c-1)$ (độc lập/so sánh nhóm); bảng phù hợp với $k$ nhóm → $df=k-1$.
- Không có `sample estimates` hay `confidence interval` trong output của `chisq.test` — chỉ có `X-squared`, `df`, `p-value`.
- Nếu R in kèm cảnh báo `Chi-squared approximation may be incorrect` → dấu hiệu tần số kỳ vọng ở một số ô quá nhỏ, cần cẩn trọng khi diễn giải $p$-value.

**Câu kết luận mẫu để học thuộc theo loại:**
- Phù hợp: *"... đủ/không đủ bằng chứng cho thấy phân phối thực nghiệm khác với phân phối lý thuyết."*
- Độc lập: *"... đủ/không đủ bằng chứng cho thấy hai biến [A] và [B] có liên hệ với nhau (không độc lập)."*

---

## 6. Hồi quy tuyến tính — đọc `summary(lm())`

```
Call:
lm(formula = diem ~ gio_hoc)

Residuals:
    Min      1Q  Median      3Q     Max
-0.4523 -0.1932  0.0128  0.1854  0.4210

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)   3.7421     0.2103   17.79 5.11e-08 ***
gio_hoc       0.6284     0.0398   15.79 1.02e-07 ***

Residual standard error: 0.28 on 8 degrees of freedom
Multiple R-squared:  0.9689,	Adjusted R-squared:  0.965
F-statistic: 249.4 on 1 and 8 DF,  p-value: 1.02e-07
```

### Bảng tra vị trí cần đọc

| Muốn biết | Nhìn vào đâu |
|---|---|
| Hệ số chặn $\hat\beta_0$ | Dòng `(Intercept)`, cột `Estimate` |
| Hệ số góc $\hat\beta_1$ | Dòng tên biến độc lập (`gio_hoc`), cột `Estimate` |
| $\hat\beta_1$ có ý nghĩa thống kê không | Cùng dòng, cột `Pr(>|t|)`, so với $\alpha$ |
| Mô hình giải thích được bao nhiêu % biến thiên $Y$ | `Multiple R-squared` |
| Sai số chuẩn của phần dư | `Residual standard error` |
| Bậc tự do phần dư | `on ... degrees of freedom` (bằng $n-2$ trong hồi quy đơn) |
| Kiểm định tổng thể mô hình | `F-statistic` và `p-value` cuối cùng (trong hồi quy đơn, $p$-value này **bằng** $p$-value của $\hat\beta_1$) |

**Dấu `***`, `**`, `*`** bên cạnh hệ số chỉ mức ý nghĩa quy ước ($<0.001$, $<0.01$, $<0.05$) — không cần tính, chỉ cần đối chiếu số sao với $\alpha$ của đề để trả lời nhanh câu "hệ số có ý nghĩa thống kê ở mức 5% không".

**Câu kết luận mẫu để học thuộc:**
*"Vì `Pr(>|t|)` của biến [x] $=$ [giá trị] $<0.05$, có bằng chứng thống kê rằng hệ số góc khác 0, tức [x] có quan hệ tuyến tính có ý nghĩa với [y]."*

### Đọc output `predict()`

```r
predict(fit, newdata = data.frame(gio_hoc = 5.5), interval = "prediction")
       fit      lwr      upr
1 7.20261 6.451822 7.953398
```

- Cột `fit` là giá trị dự đoán điểm.
- Cột `lwr`, `upr` là cận dưới/trên của khoảng — **rộng hơn** nếu gọi với `interval="prediction"` so với `interval="confidence"` ở cùng `newdata`.

### Đọc output `confint()`

```r
confint(fit)
                2.5 %    97.5 %
(Intercept) 3.253461 4.230739
gio_hoc     0.536792 0.720008
```

- Mỗi dòng là khoảng tin cậy $95\%$ cho hệ số tương ứng.
- Nếu khoảng của `gio_hoc` **không chứa 0** → khớp với kết luận `Pr(>|t|)<0.05` ở bảng hệ số (tương đương nhau, có thể dùng cách nào cũng ra cùng kết luận).

---

## 7. Bảng tổng hợp "nhìn output, trả lời ngay"

| Dòng trong output | Trả lời được câu hỏi gì |
|---|---|
| `p-value` | Có bác bỏ $H_0$ hay không |
| `alternative hypothesis:` | Kiểm định đang theo chiều nào |
| `... percent confidence interval:` | Khoảng ước lượng của tham số, hoặc kiểm tra nhanh có bác bỏ $H_0$ không (số $\theta_0$ có trong khoảng không) |
| `sample estimates:` | Giá trị điểm để mô tả bằng lời |
| `df` (không nguyên) | Đang dùng Welch |
| `Pr(>|t|)` (hồi quy) | Hệ số có ý nghĩa thống kê không |
| `Multiple R-squared` | Mức độ giải thích của mô hình |
| `lwr`/`upr` từ `predict()` | Khoảng dự đoán/tin cậy cho giá trị $Y$ tại $x_0$ |

# Tổng kết

*File tổng hợp cô đọng nhất — dùng để xem lại trong những giờ cuối trước khi thi.*

---

## 0. Bản đồ toàn môn (7 mảng, theo đúng cấu trúc đề thi)

| # | Mảng | Trọng số ước tính | Trạng thái cần đạt |
|---|---|---|---|
| 1 | Mô tả dữ liệu & R cơ bản | thấp | thuộc `table/prop.table/hist/boxplot/cor` |
| 2 | Phân phối, mô phỏng, CLT | trung bình | thuộc `d/p/q/r`, biến đổi ngược, CLT |
| 3 | Ước lượng điểm, MLE | trung bình | thuộc quy trình `optimize`/`optim`, bias-var-MSE |
| 4 | Khoảng tin cậy | **cao** | thuộc công thức + hàm R cho 6 loại CI |
| 5 | Kiểm định giả thuyết | **cao** | thuộc chọn `alternative`/`var.equal`/`paired` |
| 6 | Chi-bình phương | trung bình | phân biệt 3 loại theo cấu trúc bảng |
| 7 | Hồi quy tuyến tính đơn | trung bình–cao | đọc `summary(lm())`, `predict()`, `confint()` |

---

## 1. Mô tả dữ liệu — tối thiểu cần nhớ

```r
mean(x); median(x); sd(x); var(x)          # sd/var mau so n-1
mean((x-mean(x))^2)                        # phuong sai mau so n (MLE)
CV <- sd(x)/abs(mean(x))                   # he so bien thien

table(x); prop.table(table(x))             # tan so, tan suat
hist(x, freq=FALSE); lines(density(x))     # histogram + KDE
boxplot(y ~ g)                             # so sanh nhieu nhom
cor(x,y)                                   # tuong quan TUYEN TINH, khong phai nhan qua
```

---

## 2. Phân phối, mô phỏng, CLT — tối thiểu cần nhớ

```r
d<dist>(x,...)   # mat do (co the >1)
p<dist>(q,...)   # xac suat luy tich P(X<=q), luon trong [0,1]
q<dist>(p,...)   # phan vi (nghich dao cua p)
r<dist>(n,...)   # sinh so ngau nhien
```

- $P(a\le X\le b)$ với $X$ rời rạc: `p(b) - p(a-1)`.
- Biến đổi ngược $\text{Exp}(\lambda)$: `x <- -log(1-u)/lambda`.
- CLT: $\bar X_n \approx N(\mu, \sigma^2/n)$ — chỉ áp dụng cho **trung bình mẫu**, không phải dữ liệu gốc.
- `replicate(B, expr)`: lặp lại `expr` (chứa phần ngẫu nhiên) $B$ lần, gom thành vector.

---

## 3. Ước lượng điểm & MLE — tối thiểu cần nhớ

```r
# MLE = trung binh mau cho Bernoulli va Poisson
p_mle <- mean(x); lambda_mle <- mean(x)

# MLE cho Normal (chu y: mau so n, khong phai n-1)
mu_hat <- mean(x); sigma2_hat <- mean((x-mean(x))^2)

# Tim MLE bang so: LUON co dau tru truoc log-hop ly
optimize(function(p) -loglik(p, x), interval = c(1e-6, 1-1e-6))$minimum

# Danh gia uoc luong qua mo phong
bias <- mean(est) - theta_that
mse  <- mean((est - theta_that)^2)     # = variance + bias^2

# CI tiem can tu Fisher information
se_hat <- sqrt(1/I_theta_hat)
ci <- theta_hat + c(-1,1)*qnorm(0.975)*se_hat
```

---

## 4. Khoảng tin cậy — bảng công thức tổng hợp

| Tham số | Công thức | R |
|---|---|---|
| $\mu$ ($\sigma$ chưa biết) | $\bar x \pm t_{n-1,.975}\dfrac{s}{\sqrt n}$ | `t.test(x)$conf.int` |
| $p$ | $\hat p \pm z_{.975}\sqrt{\hat p(1-\hat p)/n}$ | `prop.test(x,n)$conf.int` |
| $\sigma^2$ | $\left(\dfrac{(n-1)s^2}{\chi^2_{.975,n-1}}, \dfrac{(n-1)s^2}{\chi^2_{.025,n-1}}\right)$ | tính tay bằng `qchisq` |
| $\mu_x-\mu_y$ pooled | $(\bar x-\bar y)\pm t_{n+m-2}\cdot s_p\sqrt{\tfrac1n+\tfrac1m}$ | `t.test(x,y,var.equal=TRUE)` |
| $\mu_x-\mu_y$ Welch | tương tự, $se=\sqrt{s_x^2/n+s_y^2/m}$, $df$ xấp xỉ | `t.test(x,y,var.equal=FALSE)` |
| $\mu_d$ (paired) | CI một mẫu cho $d=x-y$ | `t.test(x,y,paired=TRUE)` |
| $p_1-p_2$ | $(\hat p_1-\hat p_2)\pm z\sqrt{\ldots}$ | `prop.test(x=c(),n=c())` |
| $\sigma_x^2/\sigma_y^2$ | dựa trên $F$ | `var.test(x,y)$conf.int` |

**Quy tắc quyết định:** $\theta_0$ **ngoài** khoảng tin cậy $\Rightarrow$ bác bỏ $H_0:\theta=\theta_0$ (kiểm định hai phía cùng mức ý nghĩa).

**Bẫy hay gặp:** thứ tự $\chi^2$ bị đảo (cận dưới dùng $\chi^2$ phân vị **cao**); dùng `qnorm` thay vì `qt` khi $\sigma$ chưa biết; khoảng Wald cho tỷ lệ có thể vượt $[0,1]$.

---

## 5. Kiểm định giả thuyết — bảng công thức tổng hợp

| Bài toán | Thống kê | Phân phối | R |
|---|---|---|---|
| $\mu$ 1 mẫu | $t=(\bar x-\mu_0)/(s/\sqrt n)$ | $t(n-1)$ | `t.test(x,mu=mu0,alternative=)` |
| $p$ 1 mẫu | $z=(\hat p-p_0)/\sqrt{p_0(1-p_0)/n}$ | $N(0,1)$ | `prop.test(x,n,p=p0,correct=FALSE)` |
| $\sigma^2$ 1 mẫu | $Q=(n-1)s^2/\sigma_0^2$ | $\chi^2(n-1)$ | `EnvStats::varTest` |
| $\mu_x-\mu_y$ độc lập | $t$ pooled/Welch | $t(df)$ | `t.test(x,y,var.equal=)` |
| $\mu_d$ bắt cặp | $t=\bar d/(s_d/\sqrt n)$ | $t(n-1)$ | `t.test(x,y,paired=TRUE)` |
| $p_1-p_2$ | $z$ dùng $\hat p$ gộp | $N(0,1)$ | `prop.test(x=c(),n=c())` |
| $\sigma_x^2/\sigma_y^2$ | $F=s_x^2/s_y^2$ | $F(n-1,m-1)$ | `var.test(x,y)` |
| Phù hợp | $\sum(O-E)^2/E$ | $\chi^2(k-1)$ | `chisq.test(obs,p=prob)` |
| Độc lập | $\sum(O-E)^2/E$ | $\chi^2((r-1)(c-1))$ | `chisq.test(table(A,B))` |

**Chọn `alternative` theo chữ trong đề:**
"lớn hơn" → `"greater"` · "nhỏ hơn" → `"less"` · "khác nhau"/"không bằng" → `"two.sided"`

**Quy tắc quyết định cốt lõi:**
$$p\text{-value}\le\alpha \Rightarrow \text{bác bỏ } H_0 \qquad p\text{-value}>\alpha \Rightarrow \text{không đủ cơ sở bác bỏ } H_0$$

*(Không bao giờ nói "chứng minh $H_0$ đúng".)*

**Ba câu hỏi chọn đúng kiểu kiểm định hai mẫu:**
1. Cùng đối tượng đo hai lần? → `paired=TRUE`.
2. Độc lập, có giả định/kiểm tra phương sai bằng nhau (`var.test`)? → `var.equal=TRUE`, ngược lại `FALSE`.
3. Không chắc? → chọn Welch (`var.equal=FALSE`, cũng là mặc định R).

---

## 6. Kiểm định chi-bình phương — phân biệt 3 loại

| Cấu trúc đầu vào | Loại kiểm định | R |
|---|---|---|
| 1 vector tần số + 1 vector xác suất lý thuyết | Sự phù hợp | `chisq.test(observed, p=prob, correct=FALSE)` |
| Bảng nhiều cột theo cùng nhóm | So sánh phân bố nhiều mẫu | `chisq.test(tab, correct=FALSE)` |
| `table(A, B)` — hai biến trên cùng đối tượng | Tính độc lập | `chisq.test(table(A,B), correct=FALSE)` |

**Lưu ý:** tần số kỳ vọng nhỏ (thường $<5$) → xấp xỉ $\chi^2$ kém chính xác, R có thể cảnh báo.

---

## 7. Hồi quy tuyến tính đơn — tối thiểu cần nhớ

```r
fit <- lm(y ~ x)
coef(fit)                    # [1]=beta0_hat (chan), [2]=beta1_hat (goc)
summary(fit)$coefficients    # Estimate, Std.Error, t value, Pr(>|t|)
summary(fit)$r.squared       # % bien thien Y duoc giai thich
confint(fit)                 # CI 95% cho beta0, beta1
predict(fit, newdata=data.frame(x=x0))
predict(fit, newdata=data.frame(x=x0), interval="confidence")  # cho E[Y|x0]
predict(fit, newdata=data.frame(x=x0), interval="prediction")  # cho 1 quan sat moi, RONG HON
```

- $H_0:\beta_1=0$, $t=\hat\beta_1/se(\hat\beta_1)\sim t(n-2)$. `Pr(>|t|)<0.05` → có bằng chứng $\beta_1\ne0$.
- $R^2=r_{xy}^2$ trong hồi quy đơn.
- Bậc tự do phần dư $=n-2$ (ước lượng 2 tham số).
- `Pr(>|t|)` nhỏ ≠ $R^2$ cao — hai chỉ số khác câu hỏi.
- Tên cột trong `newdata` phải khớp **chính xác** tên biến trong `lm()`.

---

## 8. Cách đọc output — tra cứu 30 giây

| Thấy gì trong output | Đọc thành |
|---|---|
| `p-value = ...` | So với $\alpha$ → bác bỏ hay không |
| `alternative hypothesis: ...` | Xác nhận chiều kiểm định |
| `... percent confidence interval: a  b` | Đọc trực tiếp, hoặc soi $\theta_0$ có nằm trong không |
| `df` lẻ (không nguyên) | Đang dùng Welch |
| `Welch Two Sample t-test` (dòng đầu) | Xác nhận `var.equal=FALSE` |
| `Paired t-test` (dòng đầu) | Xác nhận `paired=TRUE` |
| `X-squared` | Thống kê $\chi^2$ (từ `prop.test`/`chisq.test`) |
| `Pr(>|t|)` (trong `lm`) | Hệ số có ý nghĩa thống kê không |
| `Multiple R-squared` | Mức giải thích của mô hình hồi quy |
| `lwr` / `upr` (từ `predict`) | Cận khoảng dự đoán/tin cậy tại $x_0$ |

---

## 9. Top 10 lỗi/bẫy hay gặp nhất — rà lại trước khi nộp bài

1. Tính $P(a\le X\le b)$ rời rạc: trừ tại $a$ thay vì $a-1$.
2. Quên dấu trừ trước log-hợp lý khi dùng `optimize()`/`optim()`.
3. Nhầm `var(x)` (mẫu số $n-1$) với MLE của $\sigma^2$ (mẫu số $n$).
4. Dùng `qnorm` khi $\sigma$ chưa biết (phải dùng `qt`).
5. Đảo thứ tự $\chi^2_{\alpha/2}$ và $\chi^2_{1-\alpha/2}$ trong CI phương sai.
6. Quên `paired=TRUE` khi hai mẫu đo trên cùng đối tượng.
7. Chọn sai `var.equal` (pooled/Welch) không đối chiếu `var.test()`.
8. Đưa sai cấu trúc bảng vào `chisq.test()` (nhầm phù hợp/độc lập/so sánh nhóm).
9. Tên cột `newdata` không khớp tên biến trong `lm()`.
10. Kết luận "$p$-value lớn ⇒ $H_0$ đúng" — sai, chỉ là "không đủ cơ sở bác bỏ".

---

## 10. Checklist cuối cùng trước khi làm bài

- [ ] Đã xác định đúng **tham số** đang hỏi (trung bình/tỷ lệ/phương sai/hệ số hồi quy)?
- [ ] Đã xác định đúng **chiều đối thuyết** từ chữ trong đề?
- [ ] Đã kiểm tra **độc lập hay bắt cặp**, có giả định phương sai bằng nhau không?
- [ ] Với câu về mẫu số, đã phân biệt **MLE ($n$)** và **không chệch ($n-1$)**?
- [ ] Với `chisq.test`, đã xác định đúng loại theo **cấu trúc bảng**?
- [ ] Với hồi quy, đã phân biệt **`confidence`** và **`prediction`**, và đọc đúng cột `Pr(>|t|)`?
- [ ] Câu kết luận có tránh diễn giải "$p$ lớn ⇒ $H_0$ đúng" không?

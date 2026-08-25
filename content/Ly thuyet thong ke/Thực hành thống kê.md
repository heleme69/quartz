# Lý thuyết ôn tập — Thực hành Thống kê

## 1. Mô tả dữ liệu và trực quan hóa

[!def] Các đại lượng mô tả mẫu
Với mẫu $x_1,\dots,x_n$:

$$\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i, \qquad s^2 = \frac{1}{n-1}\sum_{i=1}^n (x_i-\bar{x})^2, \qquad s = \sqrt{s^2}$$

Phương sai theo mẫu số $n$ (không hiệu chỉnh, dùng trong MLE):

$$\hat\sigma^2_{\text{MLE}} = \frac{1}{n}\sum_{i=1}^n (x_i-\bar{x})^2 = \overline{x^2} - \bar{x}^2$$

Trong R: `var(x)` dùng mẫu số $n-1$; `mean((x-mean(x))^2)` dùng mẫu số $n$; hai giá trị này khác nhau.

Hệ số biến thiên (so sánh độ phân tán tương đối khi đơn vị đo khác nhau):

$$CV = \frac{s}{|\bar{x}|}$$

[!obs] Trung vị so với trung bình
Trung vị $\text{median}(x)$ ít nhạy với ngoại lệ hơn trung bình. Nếu $\bar{x} > \text{median}$, phân phối lệch phải; nếu $\bar{x} < \text{median}$, phân phối lệch trái.

[!def] Các lệnh R cho trực quan hóa
- `table(x)`: bảng tần số; `prop.table(table(x))`: bảng tần suất.
- `hist(x, freq=FALSE)` cộng `lines(density(x))`: histogram với đường mật độ ước lượng chồng lên.
- `boxplot(score ~ class)`: so sánh phân phối giữa các nhóm.
- `plot(x,y)` cộng `abline(lm(y~x))`: đồ thị phân tán và đường hồi quy tuyến tính.
- `cor(x,y)`: hệ số tương quan mẫu, đo mức độ quan hệ **tuyến tính** giữa hai biến (không phải quan hệ nhân quả).

---

## 2. Phân phối xác suất và mô phỏng

[!def] Các hàm phân phối trong R
Với mỗi họ phân phối `dist` (norm, pois, binom, exp, chisq, t, f, ...), R cung cấp bốn hàm:

- `d<dist>(x, ...)`: hàm mật độ/khối xác suất tại $x$.
- `p<dist>(q, ...)`: hàm phân phối tích lũy $P(X \le q)$.
- `q<dist>(p, ...)`: hàm phân vị (nghịch đảo của $p$).
- `r<dist>(n, ...)`: sinh $n$ giá trị ngẫu nhiên.

Ví dụ tính $P(2 \le X \le 6)$ với $X \sim \text{Poisson}(3)$:

```r
ppois(6, lambda = 3) - ppois(1, lambda = 3)
```

vì $X$ rời rạc nên phải trừ tại $ppois(1)$ chứ không phải $ppois(2)$.

Tính $P(X > 8)$ với $X \sim \text{Binomial}(20, 0.4)$:

```r
1 - pbinom(8, size = 20, prob = 0.4)
```

[!def] Phương pháp biến đổi ngược (inverse transform)
Nếu $U \sim U(0,1)$ và $F$ là hàm phân phối của $X$ thì $X = F^{-1}(U)$ có cùng phân phối với $X$.

Với $X \sim \text{Exp}(\lambda)$, $F(x) = 1-e^{-\lambda x}$, nên:

$$X = -\frac{\ln(1-U)}{\lambda}$$

```r
X <- -log(1 - U) / lambda
```

Với biến rời rạc nhận giá trị $a_1 < a_2 < a_3$ với xác suất $p_1,p_2,p_3$:

```r
x <- ifelse(u <= p1, a1, ifelse(u <= p1+p2, a2, a3))
```

[!thm] Ba phân phối liên quan đến mẫu chuẩn
1. Nếu $Z_1,\dots,Z_n \overset{iid}{\sim} N(0,1)$ thì $\sum Z_i^2 \sim \chi^2(n)$, và $\chi^2(n) = \text{Gamma}(n/2, 1/2)$.
2. Nếu $Z\sim N(0,1)$, $V \sim \chi^2(n)$ độc lập với $Z$ thì:
$$T = \frac{Z}{\sqrt{V/n}} \sim t(n)$$
3. Nếu $U \sim \chi^2(m)$, $V \sim \chi^2(n)$ độc lập thì:
$$F = \frac{U/m}{V/n} \sim F(m,n)$$

Khi $n \to \infty$, $t(n) \to N(0,1)$; $t(1)$ chính là phân phối Cauchy.

[!thm] Định lý giới hạn trung tâm (CLT)
Nếu $X_1,\dots,X_n \overset{iid}{\sim}$ có kỳ vọng $\mu$ và phương sai $\sigma^2 < \infty$ thì với $n$ đủ lớn:

$$\bar{X}_n \approx N\left(\mu, \frac{\sigma^2}{n}\right)$$

Ví dụ: $X_i \sim \text{Exp}(\lambda=2)$ có $\mu = 1/2$, $\sigma = 1/2$. Với $n=50$:

$$\bar{X} \approx N\left(\frac{1}{2}, \frac{(1/2)^2}{50}\right), \quad sd(\bar{X}) = \frac{1/2}{\sqrt{50}}$$

```r
xbar <- replicate(B, mean(rexp(n, rate = 2)))
hist(xbar, freq = FALSE)
curve(dnorm(x, mean = 1/2, sd = 1/(2*sqrt(n))), add = TRUE)
```

[!obs] CLT không nói dữ liệu gốc có phân phối chuẩn; CLT chỉ áp dụng cho phân phối của **trung bình mẫu**. Luật số lớn (LLN) nói $\bar{X}_n \to \mu$ khi $n \to \infty$ (hội tụ về một giá trị, không phải một phân phối).

[!def] Chuẩn hóa (chuẩn hóa CLT)
$$Z = \frac{\bar{X} - \mu}{S/\sqrt{n}} \xrightarrow{d} N(0,1)$$

Với $X_i \sim \text{Binomial}(m, p)$, $\mu = mp$.

```r
mu <- size * prob
z <- (mean(x) - mu) / (sd(x) / sqrt(m))
```

---

## 3. Ước lượng điểm và MLE

[!def] Hàm hợp lý (likelihood) và log-hợp lý
Với mẫu $x_1,\dots,x_n \overset{iid}{\sim} f(x;\theta)$:

$$L(\theta) = \prod_{i=1}^n f(x_i;\theta), \qquad \ell(\theta) = \ln L(\theta) = \sum_{i=1}^n \ln f(x_i;\theta)$$

$$\hat\theta_{MLE} = \arg\max_\theta \ell(\theta)$$

[!prf] MLE của Bernoulli
Với $X_i \sim \text{Bernoulli}(p)$, $T=\sum X_i$:

$$\ell(p) = T\ln p + (n-T)\ln(1-p) \;\Rightarrow\; \hat{p}_{MLE} = \frac{T}{n} = \bar{x}$$

```r
loglik <- function(p, x) sum(x)*log(p) + (length(x)-sum(x))*log(1-p)
p_mle <- optimize(function(p) -loglik(p, x), interval = c(1e-6, 1-1e-6))$minimum
```

[!prf] MLE của Poisson
Với $X_i \sim \text{Poisson}(\lambda)$:

$$\ell(\lambda) = -n\lambda + T\ln\lambda - \sum \ln(x_i!), \quad T=\sum x_i \;\Rightarrow\; \hat\lambda_{MLE} = \bar{x}$$

[!prf] MLE của Exponential
Với $X_i \sim \text{Exp}(\lambda)$, $f(x)=\lambda e^{-\lambda x}$:

$$\ell(\lambda) = n\ln\lambda - \lambda\sum x_i \;\Rightarrow\; \hat\lambda_{MLE} = \frac{1}{\bar{x}}$$

```r
optimize(function(lam) -sum(dexp(x, rate=lam, log=TRUE)), interval=c(1e-6,10))
```

[!prf] MLE của Normal $(\mu,\sigma^2)$
$$\hat\mu_{MLE} = \bar{x}, \qquad \hat\sigma^2_{MLE} = \frac{1}{n}\sum(x_i-\bar{x})^2$$

```r
negloglik <- function(theta){
  mu <- theta[1]; sigma <- exp(theta[2])
  -sum(dnorm(x, mean=mu, sd=sigma, log=TRUE))
}
fit <- nlminb(start=c(mean(x), log(sd(x))), objective=negloglik)
```
Tham số hóa $\theta=(\mu,\ln\sigma)$ để đảm bảo $\sigma>0$ khi tối ưu không ràng buộc.

[!def] Ước lượng mô-men (Method of Moments)
Cân bằng mô-men mẫu với mô-men lý thuyết. Với $X_i\sim\text{Exp}(\lambda)$, $E[X]=1/\lambda$:

$$\hat\lambda_{MOM} = \frac{1}{\bar{x}}$$

[!def] Thông tin Fisher và khoảng tin cậy tiệm cận
$$I(\theta) = -E\left[\frac{\partial^2 \ell}{\partial \theta^2}\right], \qquad \hat\theta \overset{approx}{\sim} N\left(\theta, \frac{1}{I(\theta)}\right)$$

Với Bernoulli: $I(\hat p) = \dfrac{n}{\hat p(1-\hat p)}$, suy ra:

$$\widehat{se}(\hat p) = \sqrt{\frac{\hat p(1-\hat p)}{n}}, \qquad CI_{95\%} = \hat p \pm z_{0.975}\cdot\widehat{se}(\hat p)$$

Dạng tổng quát cho ước lượng tiệm cận chuẩn bất kỳ:

$$\hat\theta \pm 1.96 \cdot \widehat{se}$$

[!def] Đánh giá ước lượng bằng mô phỏng: Bias, Variance, MSE
Với $B$ mẫu mô phỏng cho ra vector ước lượng `est`, giá trị thật `theta`:

$$\text{Bias}(\hat\theta) = E[\hat\theta] - \theta, \qquad \text{Var}(\hat\theta), \qquad MSE(\hat\theta) = \text{Var}(\hat\theta) + \text{Bias}^2(\hat\theta) = E[(\hat\theta-\theta)^2]$$

```r
bias <- mean(est) - theta
variance <- var(est)
mse <- mean((est - theta)^2)
```

---

## 4. Khoảng tin cậy

[!def] Khoảng tin cậy cho trung bình (phương sai chưa biết)
$$\bar{x} \pm t_{n-1,\,1-\alpha/2}\cdot\frac{s}{\sqrt{n}}$$

```r
alpha <- 1 - conf
q <- qt(1 - alpha/2, df = n - 1)
ci <- xbar + c(-1,1) * q * s / sqrt(n)
```

[!def] Khoảng tin cậy cho tỷ lệ (Wald)
$$\hat p \pm z_{1-\alpha/2}\sqrt{\frac{\hat p(1-\hat p)}{n}}$$

```r
phat <- x / n
se <- sqrt(phat*(1-phat)/n)
ci <- phat + c(-1,1) * qnorm(1 - alpha/2) * se
```

[!def] Khoảng tin cậy cho phương sai (mẫu chuẩn)
$$\left(\frac{(n-1)s^2}{\chi^2_{1-\alpha/2,\,n-1}},\; \frac{(n-1)s^2}{\chi^2_{\alpha/2,\,n-1}}\right)$$

```r
chi_lower <- qchisq(alpha/2, df = n-1)
chi_upper <- qchisq(1 - alpha/2, df = n-1)
ci_var <- c((n-1)*s2/chi_upper, (n-1)*s2/chi_lower)
```

Khoảng tin cậy cho độ lệch chuẩn: lấy căn bậc hai hai đầu mút.

[!def] Khoảng tin cậy cho hiệu hai trung bình — phương sai gộp (pooled)
Giả định $\sigma_x^2=\sigma_y^2$:

$$s_p^2 = \frac{(n-1)s_x^2+(m-1)s_y^2}{n+m-2}, \qquad \bar x-\bar y \pm t_{n+m-2,\,1-\alpha/2}\cdot s_p\sqrt{\frac{1}{n}+\frac{1}{m}}$$

```r
sp2 <- ((n-1)*var(x) + (m-1)*var(y)) / (n+m-2)
se  <- sqrt(sp2) * sqrt(1/n + 1/m)
tcrit <- qt(1-alpha/2, df = n+m-2)
ci <- (mean(x)-mean(y)) + c(-1,1)*tcrit*se
```

[!def] Khoảng tin cậy cho hiệu hai trung bình — Welch (không giả định phương sai bằng nhau)
$$se = \sqrt{\frac{s_x^2}{n}+\frac{s_y^2}{m}}, \qquad df = \frac{\left(\frac{s_x^2}{n}+\frac{s_y^2}{m}\right)^2}{\frac{(s_x^2/n)^2}{n-1}+\frac{(s_y^2/m)^2}{m-1}}$$

```r
se <- sqrt(var(x)/n + var(y)/m)
df <- (var(x)/n + var(y)/m)^2 / ((var(x)/n)^2/(n-1) + (var(y)/m)^2/(m-1))
ci <- (mean(x)-mean(y)) + c(-1,1)*qt(1-alpha/2, df)*se
```

---

## 5. Kiểm định giả thuyết

[!def] Khung tổng quát
Giả thuyết không $H_0$, đối thuyết $H_1$. Thống kê kiểm định $\to$ so sánh với phân phối dưới $H_0$ $\to$ tính p-value.

- $H_1$ hai phía: $p = 2\left(1-F(|t_{obs}|)\right)$
- $H_1$: tham số $>$ giá trị: $p = 1-F(t_{obs})$ (đuôi phải)
- $H_1$: tham số $<$ giá trị: $p = F(t_{obs})$ (đuôi trái)

[!def] Quy tắc quyết định
Nếu $p\text{-value} \le \alpha$: bác bỏ $H_0$. Nếu $p\text{-value} > \alpha$: không đủ cơ sở bác bỏ $H_0$ (**không** chứng minh $H_0$ đúng tuyệt đối). Tương đương: nếu $\mu_0$ nằm ngoài khoảng tin cậy $1-\alpha$ cho $\mu$ thì bác bỏ $H_0:\mu=\mu_0$ ở mức $\alpha$.

[!def] Kiểm định trung bình một mẫu
$$t_{obs} = \frac{\bar x - \mu_0}{s/\sqrt n} \sim t(n-1) \text{ dưới } H_0$$

```r
t.test(x, mu = mu0, alternative = "greater")   # H1: mu > mu0
t.test(x, mu = mu0, alternative = "less")      # H1: mu < mu0
t.test(x, mu = mu0, alternative = "two.sided")
```

[!def] Kiểm định tỷ lệ một mẫu
$$z_{obs} = \frac{\hat p - p_0}{\sqrt{p_0(1-p_0)/n}} \sim N(0,1) \text{ dưới } H_0$$

```r
prop.test(x = k, n = n, p = p0, alternative = "greater", correct = FALSE)
```

[!def] Kiểm định hiệu hai trung bình (hai mẫu độc lập)

```r
t.test(x, y, var.equal = TRUE,  alternative = "greater")  # pooled
t.test(x, y, var.equal = FALSE, alternative = "greater")  # Welch
```

[!def] Kiểm định hai mẫu bắt cặp (paired)
Khi hai mẫu đo trên cùng đối tượng (trước/sau):

```r
t.test(after, before, paired = TRUE, alternative = "greater")
```

[!def] Kiểm định hai tỷ lệ

```r
prop.test(x = c(x1, x2), n = c(n1, n2), correct = FALSE)
```

[!def] Kiểm định phương sai
Một mẫu, $H_0:\sigma^2=\sigma_0^2$:

$$Q_{obs} = \frac{(n-1)s^2}{\sigma_0^2} \sim \chi^2(n-1) \text{ dưới } H_0$$

```r
q_obs <- (n-1)*var(x)/sigma2_0
p_value_greater <- 1 - pchisq(q_obs, df = n-1)
p_value_two_sided <- 2*min(pchisq(q_obs, df=n-1), 1-pchisq(q_obs, df=n-1))
EnvStats::varTest(x, sigma.squared = sigma2_0, alternative = "greater")
```

Hai mẫu, $H_0:\sigma_x^2=\sigma_y^2$:

```r
var.test(x, y, alternative = "two.sided", conf.level = 0.95)
```

[!def] Giá trị tới hạn thường dùng
$$z_{0.975}=\texttt{qnorm(0.975)}, \qquad t_{n-1,\,0.975}=\texttt{qt(0.975, df=n-1)}$$

---

## 6. Kiểm định chi-bình phương

[!def] Ba tình huống dùng `chisq.test`
1. **Sự phù hợp (Goodness of fit)** — so sánh tần số thực nghiệm với xác suất lý thuyết:
```r
prob <- freq / sum(freq)
chisq.test(observed, p = prob, correct = FALSE)
```
2. **So sánh hai (hoặc nhiều) bộ số liệu thực nghiệm theo cùng các nhóm** (bảng tần số dạng cột):
```r
tab <- data.frame(MauA = c(...), MauB = c(...))
chisq.test(tab, correct = FALSE)
```
3. **Tính độc lập giữa hai biến định tính**:
```r
tab <- table(A, B)
chisq.test(tab, correct = FALSE)
```
$H_0$: hai biến định tính độc lập với nhau.

[!obs] Nếu tần số kỳ vọng trong một số ô quá nhỏ (thường $<5$), xấp xỉ chi-bình phương có thể kém chính xác.

---

## 7. Hồi quy tuyến tính đơn

[!def] Mô hình
$$Y_i = \beta_0 + \beta_1 x_i + \varepsilon_i, \qquad \varepsilon_i \overset{iid}{\sim} N(0,\sigma^2)$$

[!def] Ước lượng bình phương tối thiểu (OLS)
$$\hat\beta_1 = \frac{\sum(x_i-\bar x)(y_i-\bar y)}{\sum(x_i-\bar x)^2}, \qquad \hat\beta_0 = \bar y - \hat\beta_1\bar x$$

```r
fit <- lm(y ~ x)
coef(fit)[1]   # beta0_hat
coef(fit)[2]   # beta1_hat
plot(x, y); abline(fit)
```

[!def] Kiểm định hệ số hồi quy
Trong `summary(fit)`, dòng biến $x$ kiểm định $H_0:\beta_1=0$ (không có quan hệ tuyến tính) đối lại $H_1:\beta_1\ne0$. Nếu $\text{Pr}(>|t|) \le 0.05$: có bằng chứng thống kê rằng $\beta_1 \ne 0$.

[!def] Dự đoán và khoảng tin cậy cho hệ số
```r
predict(fit, newdata = data.frame(x = x0))
confint(fit)
```
Tên biến trong `newdata` phải khớp chính xác tên biến độc lập dùng trong `lm()`.

[!def] Hệ số xác định $R^2$
$$R^2 = 1 - \frac{\sum(y_i-\hat y_i)^2}{\sum(y_i-\bar y)^2}$$

$R^2$ là tỷ lệ phần trăm biến thiên của biến phụ thuộc được giải thích bởi mô hình tuyến tính với biến độc lập. $R^2=0.82$ nghĩa là khoảng 82% biến thiên của $Y$ được giải thích bởi $X$.

---

## Bảng tổng hợp thống kê kiểm định — phân phối dưới $H_0$

| Bài toán | Thống kê | Phân phối dưới $H_0$ |
|---|---|---|
| Trung bình 1 mẫu, $\sigma$ chưa biết | $t=\dfrac{\bar x-\mu_0}{s/\sqrt n}$ | $t(n-1)$ |
| Tỷ lệ 1 mẫu | $z=\dfrac{\hat p-p_0}{\sqrt{p_0(1-p_0)/n}}$ | $N(0,1)$ |
| Hiệu 2 trung bình, pooled | $t=\dfrac{\bar x-\bar y}{s_p\sqrt{1/n+1/m}}$ | $t(n+m-2)$ |
| Hiệu 2 trung bình, Welch | $t=\dfrac{\bar x-\bar y}{\sqrt{s_x^2/n+s_y^2/m}}$ | $t(df)$ xấp xỉ Welch–Satterthwaite |
| Phương sai 1 mẫu | $Q=\dfrac{(n-1)s^2}{\sigma_0^2}$ | $\chi^2(n-1)$ |
| Phương sai 2 mẫu | $F=s_x^2/s_y^2$ | $F(n-1,m-1)$ |
| Phù hợp / độc lập | $\sum\dfrac{(O-E)^2}{E}$ | $\chi^2$ với bậc tự do tương ứng |
| Hệ số hồi quy | $t=\dfrac{\hat\beta_1}{se(\hat\beta_1)}$ | $t(n-2)$ |

# Bộ câu hỏi thực hành R — Thực hành Thống kê

## A. Mô tả dữ liệu và trực quan hóa

**Câu 1.** Cho `x <- c(42,37,45,39,41,44,50,33,48,41)`. Tính trung bình, phương sai mẫu, độ lệch chuẩn, trung vị và hệ số biến thiên $CV$.

```r
x <- c(42,37,45,39,41,44,50,33,48,41)
xbar <- mean(x)
s2   <- var(x)
s    <- sd(x)
med  <- median(x)
CV   <- s / abs(xbar)
c(mean = xbar, var = s2, sd = s, median = med, CV = CV)
```

**Câu 2.** Tính phương sai theo mẫu số $n$ (MLE) và so sánh với `var(x)`.

```r
n <- length(x)
s2_n   <- mean((x - mean(x))^2)      # mau so n
s2_n1  <- var(x)                     # mau so n-1
c(mle = s2_n, unbiased = s2_n1, ratio = s2_n / s2_n1)  # ratio = (n-1)/n
```

**Câu 3.** Cho vector số lượng sản phẩm mua `so_luong <- c(1,2,1,3,2,2,4,1,3,2,5,1)`. Lập bảng tần số và bảng tần suất.

```r
so_luong <- c(1,2,1,3,2,2,4,1,3,2,5,1)
tan_so   <- table(so_luong)
tan_suat <- prop.table(tan_so)
tan_so
tan_suat
```

**Câu 4.** Vẽ histogram mật độ của `income` chồng đường mật độ ước lượng và đường mật độ chuẩn lý thuyết theo $\hat\mu,\hat\sigma$.

```r
hist(income, freq = FALSE, breaks = 15, col = "gray85", border = "white",
     main = "Histogram va mat do", xlab = "income")
lines(density(income), col = "steelblue", lwd = 2)
curve(dnorm(x, mean = mean(income), sd = sd(income)),
      add = TRUE, col = "tomato", lwd = 2, lty = 2)
legend("topright", legend = c("Mat do KDE", "Mat do chuan"),
       col = c("steelblue","tomato"), lty = c(1,2), lwd = 2, bty = "n")
```

**Câu 5.** Với `score` và nhóm `class`, so sánh phân phối điểm giữa các lớp bằng boxplot; tính tương quan giữa `height` và `weight`, vẽ scatter kèm đường hồi quy.

```r
boxplot(score ~ class, main = "So sanh diem theo lop", ylab = "score")

cor(height, weight)
plot(height, weight, main = "Scatter height vs weight")
abline(lm(weight ~ height), col = "red", lwd = 2)
```

---

## B. Phân phối xác suất và mô phỏng

**Câu 6.** Với $X\sim\text{Poisson}(\lambda=3)$, tính $P(2\le X\le 6)$; với $X\sim\text{Binomial}(20,0.4)$, tính $P(X>8)$; với $X\sim N(10,16)$, tính $P(8\le X\le 12)$.

```r
ppois(6, lambda = 3) - ppois(1, lambda = 3)
1 - pbinom(8, size = 20, prob = 0.4)
pnorm(12, mean = 10, sd = 4) - pnorm(8, mean = 10, sd = 4)
```

**Câu 7.** Tìm phân vị $a,b$ sao cho $P(a\le X\le b)=0.9$ với $X\sim N(10,16)$ (khoảng đối xứng qua trung tâm).

```r
mu <- 10; sigma <- 4; p <- 0.9
a <- qnorm((1-p)/2, mean = mu, sd = sigma)
b <- qnorm((1+p)/2, mean = mu, sd = sigma)
c(a = a, b = b)
```

**Câu 8.** Mô phỏng 1000 lần tung xúc xắc cân đối, vẽ biểu đồ cột tần số các mặt.

```r
set.seed(2026)
x <- sample(1:6, 1000, replace = TRUE)
barplot(table(x), main = "Tan so cac mat xuc xac", xlab = "mat", ylab = "tan so")
```

**Câu 9.** Dùng phương pháp biến đổi ngược, mô phỏng 1000 giá trị $X\sim\text{Exp}(\lambda=4)$ từ $U\sim U(0,1)$, kiểm tra bằng `rexp`.

```r
set.seed(2026)
u <- runif(1000)
x_inv <- -log(1 - u) / 4
x_r   <- rexp(1000, rate = 4)
c(mean(x_inv), mean(x_r), 1/4)
```

**Câu 10.** Biến rời rạc $X$ nhận giá trị $0.1,0.2,0.5$ với xác suất $0.2,0.5,0.3$. Mô phỏng bằng biến đổi ngược.

```r
set.seed(2026)
u <- runif(1000)
x <- ifelse(u <= 0.2, 0.1,
     ifelse(u <= 0.7, 0.2, 0.5))
table(x) / length(x)
```

**Câu 11.** Mô phỏng minh họa $\chi^2(n)$ là tổng bình phương của $n$ biến $N(0,1)$ độc lập.

```r
set.seed(2026)
n_df <- 5; n_sim <- 50000
x_direct <- rchisq(n_sim, df = n_df)
Z <- matrix(rnorm(n_sim * n_df), nrow = n_sim)
x_from_normal <- rowSums(Z^2)

hist(x_from_normal, breaks = 80, freq = FALSE, col = "lightyellow")
curve(dchisq(x, df = n_df), add = TRUE, col = "steelblue", lwd = 2)
```

**Câu 12.** Mô phỏng phân phối Student-$t(10)$ từ $Z\sim N(0,1)$ và $V\sim\chi^2(10)$ độc lập; so sánh với `rt`.

```r
set.seed(2026)
n_sim <- 10000; df_val <- 10
Z <- rnorm(n_sim)
V <- rchisq(n_sim, df = df_val)
T_sim <- Z / sqrt(V / df_val)

hist(T_sim, breaks = 80, freq = FALSE, col = "lightyellow")
curve(dt(x, df = df_val), add = TRUE, col = "steelblue", lwd = 2)
```

**Câu 13.** Minh họa CLT: mô phỏng $B=3000$ trung bình mẫu cỡ $n=50$ từ $\text{Exp}(\lambda=2)$, so sánh trung bình và độ lệch chuẩn mô phỏng với lý thuyết $N(1/2, (1/2)^2/50)$.

```r
set.seed(2026)
B <- 3000; n <- 50
xbar <- replicate(B, mean(rexp(n, rate = 2)))
c(mean_sim = mean(xbar), sd_sim = sd(xbar),
  mean_ly_thuyet = 1/2, sd_ly_thuyet = (1/2)/sqrt(n))

hist(xbar, freq = FALSE, breaks = 40, col = "lightyellow")
curve(dnorm(x, mean = 1/2, sd = 1/(2*sqrt(n))), add = TRUE, col = "steelblue", lwd = 2)
```

**Câu 14.** Chuẩn hóa trung bình mẫu nhị thức $X_i\sim\text{Binomial}(10,0.3)$: viết hàm `Z(m)` trả về thống kê chuẩn hóa, lặp lại 2000 lần với $m=100$.

```r
size <- 10; prob <- 0.3
Z <- function(m){
  x  <- rbinom(m, size = size, prob = prob)
  mu <- size * prob
  S  <- sd(x)
  (mean(x) - mu) / (S / sqrt(m))
}
set.seed(2026)
vecZ <- replicate(2000, Z(100))
c(mean(vecZ), sd(vecZ))     # nen gan (0, 1)
hist(vecZ, freq = FALSE, breaks = 40)
curve(dnorm(x), add = TRUE, col = "tomato", lwd = 2)
```

**Câu 15.** Minh họa hội tụ Monte Carlo cho $\theta = P(X\le 1)$ với $X\sim\text{Exp}(1)$.

```r
set.seed(2026)
N_max <- 10000
X <- rexp(N_max, rate = 1)
Y <- as.numeric(X <= 1)
running_mean <- cumsum(Y) / (1:N_max)
theta_true <- 1 - exp(-1)

plot(1:N_max, running_mean, type = "l", col = "steelblue",
     xlab = "N", ylab = expression(hat(theta)[N]))
abline(h = theta_true, col = "tomato", lwd = 2, lty = 2)
```

---

## C. Ước lượng điểm và MLE

**Câu 16.** Sinh dữ liệu $X_i\sim\text{Bernoulli}(0.28)$, $n=80$. Viết hàm log-hợp lý, tìm MLE bằng công thức $T/n$ và bằng `optimize()`.

```r
set.seed(2026)
n <- 80; p_that <- 0.28
x <- rbinom(n, size = 1, prob = p_that)

loglik_bern <- function(p, x) {
  if (p <= 0 || p >= 1) return(-Inf)
  T <- sum(x)
  T * log(p) + (n - T) * log(1 - p)
}

p_mle_cong_thuc <- sum(x) / n
p_mle_so <- optimize(function(p) -loglik_bern(p, x),
                      interval = c(1e-6, 1 - 1e-6))$minimum
c(cong_thuc = p_mle_cong_thuc, optimize = p_mle_so)
```

**Câu 17.** Tính khoảng tin cậy tiệm cận 95% cho $p$ dựa trên thông tin Fisher.

```r
I_p_hat <- n / (p_mle_cong_thuc * (1 - p_mle_cong_thuc))
se_p_hat <- sqrt(1 / I_p_hat)
ci_p <- p_mle_cong_thuc + c(-1,1) * qnorm(0.975) * se_p_hat
ci_p
```

**Câu 18.** Sinh $X_i\sim\text{Poisson}(3.2)$, $n=200$. Tìm MLE của $\lambda$ bằng công thức và `optimize()`.

```r
set.seed(2026)
n <- 200; lambda_that <- 3.2
x_call <- rpois(n, lambda_that)

lambda_MLE <- mean(x_call)

loglik_pois <- function(lambda, x) sum(dpois(x, lambda = lambda, log = TRUE))
lambda_MLE_so <- optimize(function(lam) -loglik_pois(lam, x_call),
                           interval = c(1e-6, 15))$minimum
c(cong_thuc = lambda_MLE, optimize = lambda_MLE_so)
```

**Câu 19.** Đánh giá độ chệch, phương sai, MSE của $\hat\lambda = 1/\bar X$ khi $X_i\sim\text{Exp}(\lambda=2)$, $n=30$, $B=3000$.

```r
set.seed(2026)
B <- 3000; n <- 30; lambda <- 2
est <- replicate(B, {
  x <- rexp(n, rate = lambda)
  1 / mean(x)
})
bias <- mean(est) - lambda
variance <- var(est)
mse <- mean((est - lambda)^2)
c(bias = bias, variance = variance, mse = mse)
```

**Câu 20.** Tìm MLE của $(\mu,\sigma)$ cho dữ liệu chuẩn `y` bằng `optim()` với tham số hóa $\theta=(\mu,\ln\sigma)$, so sánh với công thức đóng.

```r
mu_mle    <- mean(y)
sigma_mle <- sqrt(mean((y - mu_mle)^2))

loglik_normal <- function(mu, sigma, y) {
  if (sigma <= 0) return(-Inf)
  sum(dnorm(y, mean = mu, sd = sigma, log = TRUE))
}

fit_norm <- optim(par = c(mu_mle, log(sigma_mle)),
                   fn = function(par) {
                     -loglik_normal(par[1], exp(par[2]), y)
                   })
c(mu_optim = fit_norm$par[1], sigma_optim = exp(fit_norm$par[2]))
```

**Câu 21.** Xây dựng $Y=\sum_{i=1}^n X_i^2/\sigma^2$ với $X_i\sim N(0,\sigma^2)$; mô phỏng $m=10000$ giá trị $Y$ với $n=10$, kiểm tra $E[Y]=n$, $\text{Var}(Y)=2n$, và so khớp với mật độ $\chi^2(n)$.

```r
sampleY <- function(m, n, sigma2){
  replicate(m, {
    x <- rnorm(n, 0, sqrt(sigma2))
    sum(x^2) / sigma2
  })
}
set.seed(2026)
sy <- sampleY(m = 10000, n = 10, sigma2 = 4)
c(mean_sim = mean(sy), var_sim = var(sy), mean_ly_thuyet = 10, var_ly_thuyet = 20)

hist(sy, freq = FALSE, breaks = 50, col = "steelblue", border = "white")
curve(dchisq(x, df = 10), add = TRUE, col = "firebrick", lwd = 2)
```

---

## D. Khoảng tin cậy

**Câu 22.** Viết hàm tổng quát tính khoảng tin cậy cho trung bình một tổng thể (phương sai chưa biết) và áp dụng cho `mercury_df$Mercury`.

```r
ci_mean_t <- function(x, conf = 0.95) {
  n <- length(x); xbar <- mean(x); s <- sd(x)
  alpha <- 1 - conf
  tcrit <- qt(1 - alpha/2, df = n - 1)
  se <- s / sqrt(n)
  c(n = n, mean = xbar, sd = s, se = se,
    lower = xbar - tcrit*se, upper = xbar + tcrit*se)
}

ci_mean_t(mercury_df$Mercury, conf = 0.95)
t.test(mercury_df$Mercury)$conf.int   # kiem tra chio
```

**Câu 23.** Viết hàm khoảng tin cậy Wald cho một tỷ lệ, áp dụng cho $x=40$ thành công trên $n=50$.

```r
ci_prop_wald <- function(x, n, conf = 0.95) {
  phat <- x / n
  alpha <- 1 - conf
  zcrit <- qnorm(1 - alpha/2)
  se <- sqrt(phat * (1-phat) / n)
  c(x=x, n=n, phat=phat, se=se,
    lower = phat - zcrit*se, upper = phat + zcrit*se)
}
ci_prop_wald(x = 40, n = 50, conf = 0.95)
```

**Câu 24.** Viết hàm khoảng tin cậy cho phương sai và độ lệch chuẩn một tổng thể (giả định mẫu chuẩn).

```r
ci_var <- function(x, conf = 0.95){
  n <- length(x); s2 <- var(x)
  alpha <- 1 - conf
  chi_lower <- qchisq(alpha/2, df = n-1)
  chi_upper <- qchisq(1 - alpha/2, df = n-1)
  lower <- (n-1)*s2 / chi_upper
  upper <- (n-1)*s2 / chi_lower
  c(n=n, var=s2, lower=lower, upper=upper,
    sd_lower=sqrt(lower), sd_upper=sqrt(upper))
}
ci_var(surimi, conf = 0.95)
```

**Câu 25.** Viết hàm khoảng tin cậy cho hiệu hai trung bình theo hai cách: pooled (phương sai bằng nhau) và Welch (phương sai khác nhau); áp dụng cho `chocolate` và `vanilla`.

```r
ci_two_mean_pooled <- function(x, y, conf = 0.95) {
  n <- length(x); m <- length(y)
  sp2 <- ((n-1)*var(x) + (m-1)*var(y)) / (n+m-2)
  sp <- sqrt(sp2)
  diff <- mean(x) - mean(y)
  se <- sp * sqrt(1/n + 1/m)
  alpha <- 1 - conf
  tcrit <- qt(1 - alpha/2, df = n+m-2)
  c(diff=diff, se=se, df=n+m-2,
    lower=diff - tcrit*se, upper=diff + tcrit*se)
}

ci_two_mean_welch <- function(x, y, conf = 0.95) {
  n <- length(x); m <- length(y)
  sx2 <- var(x); sy2 <- var(y)
  diff <- mean(x) - mean(y)
  se <- sqrt(sx2/n + sy2/m)
  df <- (sx2/n + sy2/m)^2 / ((sx2/n)^2/(n-1) + (sy2/m)^2/(m-1))
  alpha <- 1 - conf
  tcrit <- qt(1 - alpha/2, df = df)
  c(diff=diff, se=se, df=df,
    lower=diff - tcrit*se, upper=diff + tcrit*se)
}

ci_two_mean_pooled(chocolate, vanilla)
ci_two_mean_welch(chocolate, vanilla)
```

**Câu 26.** Với $n=16$, $\bar x=1.625$, $s=0.2433$, tính khoảng tin cậy 97% cho trung bình.

```r
xbar <- 1.625; s <- 0.2433; n <- 16; conf <- 0.97
alpha <- 1 - conf
q <- qt(1 - alpha/2, df = n - 1)
ci <- xbar + c(-1,1) * q * s / sqrt(n)
ci
```

---

## E. Kiểm định giả thuyết

**Câu 27.** Viết hàm tính $p$-value cho kiểm định trung bình một mẫu (t-test) với ba loại đối thuyết, áp dụng cho `surimi` với $H_0:\mu=42$, $H_1:\mu>42$.

```r
pvalue_mean_t <- function(x, mu0, alternative = "greater") {
  n <- length(x); df <- n - 1
  t_obs <- (mean(x) - mu0) / (sd(x) / sqrt(n))
  pval <- switch(alternative,
    "two.sided" = 2 * (1 - pt(abs(t_obs), df = df)),
    "less"      = pt(t_obs, df = df),
    "greater"   = 1 - pt(t_obs, df = df))
  c(t_obs = t_obs, df = df, p_value = pval)
}

pvalue_mean_t(surimi, mu0 = 42, alternative = "greater")
t.test(surimi, mu = 42, alternative = "greater")   # kiem tra chio
```

**Câu 28.** Viết hàm $p$-value cho kiểm định tỷ lệ (z-test), áp dụng cho $x=40$, $n=50$, $H_0:p=0.7$.

```r
pvalue_prop_z <- function(x, n, p0, alternative = "greater") {
  phat <- x / n
  se0 <- sqrt(p0 * (1 - p0) / n)
  z_obs <- (phat - p0) / se0
  pval <- switch(alternative,
    "two.sided" = 2 * (1 - pnorm(abs(z_obs))),
    "less"      = pnorm(z_obs),
    "greater"   = 1 - pnorm(z_obs))
  c(z_obs = z_obs, p_value = pval)
}

pvalue_prop_z(x = 40, n = 50, p0 = 0.70)
prop.test(x = 40, n = 50, p = 0.70, alternative = "two.sided", correct = FALSE)
```

**Câu 29.** So sánh mức tiêu thụ nhiên liệu `mpg` giữa hộp số tay và tự động trong `mtcars` ($H_1:\mu_{manual}>\mu_{automatic}$), dùng cả pooled và Welch.

```r
manual    <- mtcars$mpg[mtcars$am == 1]
automatic <- mtcars$mpg[mtcars$am == 0]

t.test(manual, automatic, alternative = "greater", var.equal = TRUE)
t.test(manual, automatic, alternative = "greater", var.equal = FALSE)
```

**Câu 30.** So sánh trước/sau khi học phụ đạo trên cùng 30 học sinh (`before`, `after`), $H_1$: điểm sau cao hơn điểm trước.

```r
t.test(after, before, paired = TRUE, alternative = "greater")
```

**Câu 31.** Một nhà máy tuyên bố tỷ lệ lỗi không vượt quá 2%; mẫu 250 sản phẩm có 8 lỗi. Kiểm định $H_1$: tỷ lệ lỗi $>2\%$.

```r
prop.test(x = 8, n = 250, p = 0.02, alternative = "greater", correct = FALSE)
```

**Câu 32.** So sánh tỷ lệ mua hàng giữa hai nhóm khách hàng: $40/120$ và $55/150$.

```r
prop.test(x = c(40, 55), n = c(120, 150), correct = FALSE)
```

**Câu 33.** Kiểm định phương sai một mẫu $H_0:\sigma^2=0.05$ cho dữ liệu `aflatoxin` ($H_1:\sigma^2>0.05$), viết hàm thủ công và kiểm tra bằng `EnvStats::varTest`.

```r
variance_test_one_sample <- function(x, sigma2_0, alternative = "greater"){
  n <- length(x); df <- n - 1
  q_obs <- (n-1) * var(x) / sigma2_0
  p_value <- switch(alternative,
    "greater"   = 1 - pchisq(q_obs, df = df),
    "less"      = pchisq(q_obs, df = df),
    "two.sided" = 2 * min(pchisq(q_obs, df=df), 1 - pchisq(q_obs, df=df)))
  c(n=n, df=df, q_obs=q_obs, p_value=p_value)
}

aflatoxin <- c(4.94,5.06,4.53,5.07,4.99,5.16,4.38,4.43,4.93,4.72,4.92,4.96)
variance_test_one_sample(aflatoxin, sigma2_0 = 0.05, alternative = "greater")

library(EnvStats)
varTest(aflatoxin, sigma.squared = 0.05, alternative = "greater")
```

**Câu 34.** Kiểm định hai phương sai (nồng độ Ozone tháng 5 và tháng 8 trong `airquality`).

```r
Ozone5 <- na.omit(airquality$Ozone[airquality$Month == 5])
Ozone8 <- na.omit(airquality$Ozone[airquality$Month == 8])

var.test(Ozone5, Ozone8, alternative = "two.sided", conf.level = 0.95)
```

---

## F. Kiểm định chi-bình phương

**Câu 35.** Kiểm định sự phù hợp: tần số thực nghiệm `tnghiem <- c(54,20,19,8)` so với tỷ lệ lý thuyết theo `freq <- c(9,3,3,1)`.

```r
tnghiem <- c(54, 20, 19, 8)
freq <- c(9, 3, 3, 1)
prob <- freq / sum(freq)
chisq.test(tnghiem, p = prob, correct = FALSE)
```

**Câu 36.** So sánh hai bộ số liệu thực nghiệm theo cùng bốn nhóm.

```r
tab <- data.frame(MauA = c(8, 19, 20, 53),
                   MauB = c(12, 38, 40, 110))
chisq.test(tab, correct = FALSE)
```

**Câu 37.** Kiểm định tính độc lập giữa hai biến định tính `GT` (giới tính) và `KV` (khu vực).

```r
GT <- c(rep("F",45), rep("M",55))
KV <- c(rep("1",20), rep("2",15), rep("3",10),
        rep("1",30), rep("2",10), rep("3",15))
tab <- table(GT, KV)
chisq.test(tab, correct = FALSE)
# H0: GT va KV doc lap nhau
```

**Câu 38.** Kiểm định tính độc lập cho dữ liệu tích hợp sẵn `HairEyeColor` (gộp theo giới tính).

```r
hair_eye <- apply(HairEyeColor, c(1,2), sum)
chisq.test(hair_eye, correct = FALSE)
```

---

## G. Hồi quy tuyến tính đơn

**Câu 39.** Với dữ liệu `electric` (tiêu thụ điện) theo `area` (diện tích), ước lượng mô hình hồi quy, in hệ số, vẽ đường hồi quy.

```r
fit <- lm(electric ~ area)
coef(fit)              # beta0_hat, beta1_hat
summary(fit)

plot(area, electric, main = "Electric vs Area")
abline(fit, col = "red", lwd = 2)
```

**Câu 40.** Kiểm định $H_0:\beta_1=0$, lấy khoảng tin cậy cho hệ số, và dự đoán giá trị mới tại `area = 150`.

```r
summary(fit)$coefficients          # cot Pr(>|t|) cho kiem dinh beta1 = 0
confint(fit)                       # khoang tin cay cho beta0, beta1
predict(fit, newdata = data.frame(area = 150))
predict(fit, newdata = data.frame(area = 150), interval = "confidence")
predict(fit, newdata = data.frame(area = 150), interval = "prediction")
```

**Câu 41.** Tính $R^2$ thủ công từ mô hình và so sánh với `summary(fit)$r.squared`.

```r
y_hat <- fitted(fit)
y     <- electric
R2_thu_cong <- 1 - sum((y - y_hat)^2) / sum((y - mean(y))^2)
c(thu_cong = R2_thu_cong, tu_dong = summary(fit)$r.squared)
```

**Câu 42.** Vẽ đồ thị phần dư (residual) theo giá trị dự đoán để kiểm tra giả định của mô hình.

```r
plot(fitted(fit), resid(fit),
     xlab = "Gia tri du doan", ylab = "Phan du",
     main = "Residuals vs Fitted")
abline(h = 0, col = "red", lty = 2)
```

---

## Bảng tra nhanh hàm/cú pháp R quan trọng

| Nhóm | Hàm / cú pháp | Công dụng |
|---|---|---|
| Mô tả dữ liệu | `mean, median, sd, var, table, prop.table` | Thống kê mô tả và bảng tần số |
| Trực quan hóa | `hist(freq=FALSE), density, lines, boxplot(y~g), plot, abline, curve, barplot` | Đồ thị |
| Phân phối | `d<dist>, p<dist>, q<dist>, r<dist>` | Mật độ, CDF, phân vị, mô phỏng |
| Mô phỏng | `set.seed, replicate, sample, runif` | Tái lập và lặp mô phỏng |
| MLE | `optimize(interval=), optim(par=), nlminb(start=, objective=)` | Tối ưu hàm (âm) log-hợp lý |
| Khoảng tin cậy | `qt, qnorm, qchisq` | Giá trị tới hạn |
| Kiểm định | `t.test, prop.test, var.test, chisq.test` | Kiểm định giả thuyết dựng sẵn |
| Hồi quy | `lm, coef, summary, confint, predict, fitted, resid` | Ước lượng và suy diễn hồi quy |

> [!problem] (Bài tập 1)  
> Cho mẫu ngẫu nhiên kích thước $n = 3$, ký hiệu $(X_1, X_2, X_3)$, lấy từ một tổng thể có kỳ vọng $\mu$ và phương sai $\sigma^2$.  
> Xét thống kê:  
> $$
> T_a = \tfrac{1}{4}(X_1 + aX_2 + X_3).
> $$  
>  
> (a) Tìm $a$ sao cho $T_a$ là ước lượng không chệch của $\mu$.  
> *Gợi ý:* $\hat{\theta}$ được gọi là ước lượng không chệch của $\mu$ nếu $E(\hat{\theta}) = \mu$.  
>  
> (b) Tính phương sai của $T_a$.  
> *Gợi ý:* $(X_1, X_2, \ldots, X_n)$ được chọn từ tổng thể có kỳ vọng $\mu$ và phương sai $\sigma^2$, tức là các $X_i$ độc lập và cùng phân phối, với $E(X_i) = \mu$, $Var(X_i) = \sigma^2$.  
>  
> (c) (Tuỳ chọn) Xét sai số bình phương trung bình  
> $$
> MSE(T_a, \mu) = E[(T_a - \mu)^2].
> $$  
> Tìm giá trị $a$ sao cho $T_a$ là ước lượng tốt nhất của $\mu$, tức là tối thiểu hóa $MSE$.

> [!ans]
> a)
> Tính kỳ vọng $T_{a}$:
> $$
> \begin{align}
> \mathbb{E}(T_a) = \mathbb{E}\left[\frac{1}{4}(X_1 + aX_2 + X_3)\right] &=  \frac{1}{4}\left[\mathbb{E}(X_1) + a\mathbb{E}(X_2) + \mathbb{E}(X_3)\right] \\
> &= \frac{1}{4}(\mu + a\mu + \mu) = \frac{a+2}{4}\mu
> \end{align}
> $$
> Để $T_{a}$ là ước lượng không chệch của $\mu$, ta cần:
> $$\mathbb{E}(T_{a}) = \mu \iff \frac{a+2}{4}\mu = \mu \iff \frac{a+2}{4} = 2 \iff a =2$$
> Kết luận: $a = 2$ thì $T_{a}$ là ước lượng không chệch của $\mu$.
> 
> b)
> Tính phương sai $T_{a}$:
> $$
> \begin{align}
> \text{Var}(T_a) = \text{Var}\left[\frac{1}{4}(X_1 + aX_2 + X_3)\right] &=  \frac{1}{16}\left[\text{Var}(X_1) + a^2\text{Var}(X_2) + \text{Var}(X_3)\right] \\
> &= \frac{1}{16}(\sigma ^{2} + a^{2} + \sigma ^{2} +\sigma ^{2}) = \frac{a^{2}+2}{16} \sigma ^{2}
> \end{align}
> $$
> 
> c)
> Ta có công thức trung bình bình phương sai số:
> $$
> MSE(T_a, \mu) = \text{Var}(T_a) + \left[\text{Bias}(T_a, \mu)\right]^2
> $$
> Tính độ chệch của ước lượng:
> $$
> \text{Bias}(T_a, \mu) = \mathbb{E}(T_a) - \mu = \left(\frac{a+2}{4} - 1\right)\mu = \frac{a-2}{4}\mu
> $$
> Để tìm $a$ cực tiểu hóa hàm số này, ta lấy đạo hàm theo $a$:
> $$
> \frac{d}{da}\left[MSE(T_a, \mu)\right] = \frac{2a}{16}\sigma^2 + \frac{2(a-2)}{16}\mu^2
> $$
> Giải tìm $a$:
> $$
> a\sigma^2 + (a-2)\mu^2 = 0 \iff a(\sigma^2 + \mu^2) = 2\mu^2 \iff a = \frac{2\mu^2}{\sigma^2 + \mu^2}
> $$
> Kết luận: Giá trị $a$ giúp $T_a$ tối ưu nhất theo nghĩa cực tiểu MSE là **$a = \frac{2\mu^2}{\sigma^2 + \mu^2}$**.

> [!problem] (Bài tập 2)  
> Cho $X_1, X_2, \ldots, X_n$ là mẫu ngẫu nhiên lấy từ tổng thể có hàm mật độ xác suất:  
> $$
> f(x; \theta) = \frac{1}{\theta} e^{-x/\theta}, \quad 0 < x < \infty, \; 0 < \theta < \infty,
> $$
> và bằng 0 trong các trường hợp khác.  
>  
> (a) Tìm ước lượng hợp lý cực đại $\hat{\theta}_{MLE}$ cho $\theta$.  
>  
> (b) $\hat{\theta}_{MLE}$ có phải là ước lượng không chệch cho $\theta$ hay không?  
>  
> (c) *(không bắt buộc)* Chứng minh rằng miền bác bỏ tối ưu để kiểm định $H_0 : \theta = \theta' = 1$ so với $H_1 : \theta = \theta'' = 2$ là  
> $$
> C = \{ (X_1, X_2, \ldots, X_n) : \hat{\theta}_{MLE} \geq k \},
> $$
> với $k = k(\alpha)$ là một số phụ thuộc vào mức ý nghĩa $\alpha$.  
>  
> (d) *(không bắt buộc)* Ở câu (c), xét trường hợp $n = 1$. Tìm $k$ để mức ý nghĩa kiểm định là $\alpha = 0,05$.  
>  
> (e) *(không bắt buộc)* $C$ có phải miền bác bỏ tối ưu đều để kiểm định $H_0 : \theta = 1$ so với $H_1 : \theta > 1$ hay không?

> [!ans]
> Nhận xét $f(x;\theta) = \frac{1}{\theta}e^{-x/\theta}$ với $x > 0$ là phân phối mũ với kỳ vọng $\mathbb{E}(X_i) = \theta$.
> a)
> Hàm hợp lý của mẫu:
> $$
> L(\theta) = \prod_{i=1}^n \frac{1}{\theta}e^{-x_i/\theta} = \frac{1}{\theta^n} e^{-\frac{1}{\theta}\sum_{i=1}^n x_i}
> $$
> Lấy logarit:
> $$
> \ell(\theta) = \ln L(\theta) = -n \ln\theta - \frac{1}{\theta}\sum_{i=1}^{n} x_{i}
> $$
> Tìm cực trị hàm $\ell(\theta)$:
> $$
> \ell'(\theta) = -\frac{n}{\theta} + \frac{1}{\theta ^{2}} \sum_{i=1}^{n} x_{i} = 0 \iff \frac{1}{\theta ^{2}} \sum_{i=1}^{n} = \frac{n}{\theta} \iff \theta = \frac{1}{n} \sum_{i=1}^{n} x_{i} = \bar{X}
> $$
> Kiểm tra cực đại:
> $$
> \ell''(\bar{X}) = \frac{n}{\bar{X^{2}}} - \frac{2}{\bar{X}^{3}} \cdot n \bar{X} = -\frac{n}{\bar{X}^{2}} < 0
> $$
> Kết luận: Ước lượng hợp lý cực đại là **$\hat{\Theta}_{MLE} = \bar{X} = \frac{1}{n}\sum_{i=1}^n X_i$**.
>
> b)
> Tính kỳ vọng $\hat{\Theta}_{MLE}$:
> $$
> \mathbb{E}(\hat{\Theta}_{MLE})= \mathbb{E}\left( \frac{1}{n} \sum_{i=1}^{n} X_{i} \right) = \frac{1}{n} \mathbb{E}\left( \sum_{i=1}^{n} X_{i} \right) 
> $$
> Vì $X$ tuân theo phân phối mũ, ta có $\mathbb{E}(X_{i}) = \theta$. Do đó:
> $$
> \frac{1}{n} \mathbb{E}\left( \sum_{i=1}^{n} X_{i} \right) = \frac{1}{n} \cdot n \theta = \theta 
> $$
> Kết luận: $\hat{\Theta}_{MLE}$ là ước lượng không chệch cho $\theta$.
>
> c)
> Theo bổ đề Neyman-Pearson:
> $$
> \frac{L(\theta=2)}{L(\theta=1)} \ge c \iff \frac{\frac{1}{2^n} e^{-\frac{1}{2}\sum X_i}}{\frac{1}{1^n} e^{-\frac{1}{1}\sum X_i}} \ge c \iff e^{\frac{1}{2}\sum X_i} \ge c \cdot2^{n}
> $$
> Lấy lograrit:
> $$
> \frac{1}{2}\sum_{i=1}^n X_i \ge \ln(c \cdot 2^n) \iff \frac{1}{n}\sum_{i=1}^n X_i \ge \frac{2\ln(c \cdot 2^n)}{n} \iff \hat{\Theta}_{MLE} \ge k
> $$
> Kết luận: Miền bác bỏ tối ưu có dạng: $C = \{(X_1, \dots, X_n): \hat{\Theta}_{MLE} \ge k\}$.
>
> d)
> Với $n = 1$, $\hat{\Theta}_{MLE} = X_{1}$. Miền bác bỏ trở thành $C = \{ X_1 \ge k \}$.
> 
> Mức ý nghĩa $\alpha$ là xác suất bác bỏ sai $H_0$ (tức là bác bỏ $H_0$ khi $H_0: \theta=1$ đúng):
> $$
> \alpha = \mathbb{P}(X_1 \ge k \mid \theta = 1) = 0.05
> $$
> Khi $\theta = 1$, hàm mật độ của $X_1$ là $f(x; 1) = e^{-x}$ với $x > 0$. Ta có:
> $$
> \mathbb{P}(X_1 \ge k) = \int_{k}^{\infty} e^{-x} dx = \left[ -e^{-x} \right]_k^{\infty} = e^{-k} = 0.05
> $$
> Giải tìm $k$:
> $$
> e^{-k} = 0.05 \iff k = -\ln(0.05) \approx 2.996
> $$

> [!problem] (Bài tập 3)  
> Cho $X_1, X_2, \ldots, X_n$ là mẫu ngẫu nhiên lấy từ tổng thể có hàm mật độ xác suất:  
> $$
> f(x; \theta) = \theta x^{\theta - 1}, \quad 0 < x < 1, \; 0 < \theta < \infty,
> $$
> và bằng 0 trong các trường hợp khác.  
>  
> (a) Chứng minh rằng ước lượng hợp lý cực đại cho $\theta$ là:  
> $$
> \hat{\Theta}(X_1, \ldots, X_n) = \frac{-n}{\ln(X_1 X_2 \cdots X_n)}.
> $$  
>  
> (b) Chứng minh rằng miền bác bỏ tối ưu để kiểm định $H_0 : \theta = 1$ so với $H_1 : \theta = 2$ là:  
> $$
> C = \{ (X_1, \ldots, X_n) : \hat{\Theta}(X_1, \ldots, X_n) \geq k \}.
> $$  
>  
> (c) Trong câu (b), xét trường hợp $n = 1$. Tìm $k$ để mức ý nghĩa của kiểm định là $\alpha = 0{,}05$.  
>  
> (d) $C$ có phải là miền bác bỏ tối ưu đều để kiểm định $H_0 : \theta = 1$ so với $H_1 : \theta > 1$ hay không?

> [!ans]
> a)
> Hàm hợp lý của mẫu:
> $$
> L(\theta) = \prod_{i=1}^{n} \theta x_{i}^{\theta -1} = \theta ^{n} \left( \prod_{i=1}^{n} x_{i} \right)^{\theta - 1}
> $$
> Lấy logarit:
> $$
> \ell(\theta) = n\ln(\theta) + (\theta - 1) \sum_{i=1}^{n} \ln(x_{i})
> $$
> Tìm cực trị hàm $\ell(\theta)$:
> $$
> \ell'(\theta) = \frac{n}{\theta} + \sum_{i=1}^{n} \ln(x_{i}) = 0 \iff \theta = - \frac{n}{\sum_{i=1}^{n} \ln x_{i}} = -\frac{n}{\ln x_{1}x_{2}\dots x_{n}}
> $$
> Kết luận: $\hat{\Theta}_{MLE} = - \frac{n}{\ln(X_{1}X_{2}\dots X_{n})}$.
>
> b)
> Theo bổ đề Neymann-Pearson:
> $$
> \frac{L(\theta=2)}{L(\theta=1)} \ge c \iff \frac{2^n \left(\prod X_i\right)^{2-1}}{1^n \left(\prod X_i\right)^{1-1}} \ge c \iff \prod_{i=1}^n X_i \ge c \cdot 2^{n}
> $$
> Lấy logarit:
> $$
>  \ln\left(\prod_{i=1}^n X_i\right) \ge \ln\left(\frac{c}{2^n}\right) \iff \frac{-n}{\ln\left(\prod_{i=1}^n X_i\right)} \ge \frac{-n}{\ln\left(\frac{c}{2^n}\right)} \iff  \hat{\Theta} \ge k
> $$
> Kết luận: Miền bác bỏ tối ưu có dạng $C = \{(X_1,\dots,X_n): \hat{\Theta} \ge k\}$
> 
> c)
> Với $n = 1$, $\hat{\Theta}_{MLE} = \frac{-1}{\ln X_{1}}$. Ta có miền bác bỏ tối ưu $C = \{ \hat{\Theta} \ge k\} = \{ X_{1} \ge e^{-1/k} \}$. Ta đặt $m = e^{-1/k}$.
> 
> Tính xác suất sai lầm loại I (bác bỏ $H_{0}$ khi $H_{0}: \theta = 1$ đúng):
> $$
> \alpha = \mathbb{P}(X_{1} \ge m \mid \theta = 1) = \int_{m}^{\infty} 1\cdot e^{1 - 1} = 1 - k =0.05 \iff m = 0.95
> $$
> Giải tìm $k$:
> $$
> e^{-1/k} = 0.95 \iff k = -\frac{1}{\ln 0.95} \approx 19.496
> $$

> [!problem] (Bài tập 4)  
> Xét các biến ngẫu nhiên $Y_1, \ldots, Y_n$ thỏa mô hình hồi quy tuyến tính: 
> $$
> Y_j = \beta_0 + \beta_1 X_j + \epsilon_j, \quad j = 1, \ldots, n,
> $$
> trong đó $\epsilon_j \overset{i.i.d.}{\sim} \mathcal{N}(0, \sigma^2)$ với $\sigma^2$ đã biết, còn $\beta_0$ và $\beta_1$ là các hệ số hồi quy.  
>  
> (a) Xác định phân phối có điều kiện $Y_j \mid X_j = x_j$, với $x_j$ ($j = 1, \ldots, n$) là các hằng số cố định. Viết hàm phân phối có điều kiện $f(y_j \mid x_j)$.  
>  
> (b) Xây dựng ước lượng cho các tham số $\beta_0$ và $\beta_1$ bằng phương pháp hợp lý cực đại.

> [!ans]
> Xét mô hình hồi quy tuyến tính đơn:
> $$ Y_j = \beta_0 + \beta_1 X_j + \epsilon_j, \quad j = 1, \dots, n $$
> Trong đó $\epsilon_j \overset{i.i.d.}{\sim} \mathcal{N}(0, \sigma^2)$ với $\sigma^2$ đã biết. Các đại lượng $\beta_0, \beta_1$ là các tham số cần ước lượng.
> 
> (a) 
> $X_j = x_j$ là một hằng số cố định, ta xét tính chất các đặc trưng số của biến ngẫu nhiên $Y_j$:
> 
> Kỳ vọng có điều kiện:
>     Vì $\beta_0, \beta_1, x_j$ là các hằng số và $\mathbb{E}(\epsilon_j) = 0$, ta có:
>     $$ \mathbb{E}(Y_j \mid X_j = x_j) = \mathbb{E}(\beta_0 + \beta_1 x_j + \epsilon_j) = \beta_0 + \beta_1 x_j + \mathbb{E}(\epsilon_j) = \beta_0 + \beta_1 x_j $$
> 
> Phương sai có điều kiện:
>     Cộng thêm hằng số không làm thay đổi phương sai và $\text{Var}(\epsilon_j) = \sigma^2$, ta có:
>     $$ \text{Var}(Y_j \mid X_j = x_j) = \text{Var}(\beta_0 + \beta_1 x_j + \epsilon_j) = \text{Var}(\epsilon_j) = \sigma^2 $$
> 
> Vì $Y_j$ là hàm tuyến tính của biến ngẫu nhiên có phân phối chuẩn $\epsilon_j$, nên $Y_j$ dưới điều kiện $X_j = x_j$ cũng tuân theo phân phối chuẩn.
> 
> Kết luận: 
> $$ Y_j \mid X_j = x_j \sim \mathcal{N}(\beta_0 + \beta_1 x_j, \, \sigma^2) $$
> 
> Dựa vào hàm mật độ phân phối chuẩn $\mathcal{N}(\mu, \sigma^2)$, ta thay $\mu_j = \beta_0 + \beta_1 x_j$:
> $$ f(y_j \mid x_j) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left[ -\frac{(y_j - \beta_0 - \beta_1 x_j)^2}{2\sigma^2} \right] $$
> 
>(b) 
> Vì các sai số ngẫu nhiên $\epsilon_j$ $i.i.d$, các biến $Y_j \mid X_j = x_j$ cũng độc lập với nhau.
> 
> Hàm hợp lý tại các điểm $(x_j, y_j)$:
> $$ L(\beta_0, \beta_1) = \prod_{j=1}^n f(y_j \mid x_j) = \prod_{j=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left[ -\frac{(y_j - \beta_0 - \beta_1 x_j)^2}{2\sigma^2} \right] $$
> $$ L(\beta_0, \beta_1) = \left( \frac{1}{\sqrt{2\pi\sigma^2}} \right)^n \exp\left[ -\frac{1}{2\sigma^2} \sum_{j=1}^n (y_j - \beta_0 - \beta_1 x_j)^2 \right] $$
> 
> Lấy logarit:
> $$ \ln L(\beta_0, \beta_1) = n \ln\left( \frac{1}{\sqrt{2\pi\sigma^2}} \right) - \frac{1}{2\sigma^2} \sum_{j=1}^n (y_j - \beta_0 - \beta_1 x_j)^2 $$
> 
> Sử dụng bình phương bé nhất:
> $$ S(\beta_0, \beta_1) = \sum_{j=1}^n (y_j - \beta_0 - \beta_1 x_j)^2 \longrightarrow \min $$
> 
> Tìm điểm cực trị:
> 
> Đạo hàm riêng theo $\beta_0$:
>     $$ \frac{\partial \ln L}{\partial \beta_0} = \frac{1}{\sigma^2} \sum_{j=1}^n (y_j - \beta_0 - \beta_1 x_j) = 0 $$
>     $$ \implies \sum_{j=1}^n y_j - n\beta_0 - \beta_1 \sum_{j=1}^n x_j = 0 $$
>     Giá trị trung bình mẫu ($\bar{x}, \bar{y}$):
>     $$ \bar{y} - \beta_0 - \beta_1 \bar{x} = 0 \implies \hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x} \quad \text{(1)} $$
> 
> Đạo hàm riêng theo $\beta_1$:
>     $$ \frac{\partial \ln L}{\partial \beta_1} = \frac{1}{\sigma^2} \sum_{j=1}^n x_j(y_j - \beta_0 - \beta_1 x_j) = 0 $$
>     $$ \implies \sum_{j=1}^n x_j y_j - \beta_0 \sum_{j=1}^n x_j - \beta_1 \sum_{j=1}^n x_j^2 = 0 \quad \text{(2)} $$
> 
> Thay $\beta_0$ từ (1) vào (2):
> $$ \sum_{j=1}^n x_j y_j - (\bar{y} - \beta_1 \bar{x}) \cdot (n\bar{x}) - \beta_1 \sum_{j=1}^n x_j^2 = 0 $$
> $$ \implies \sum_{j=1}^n x_j y_j - n\bar{x}\bar{y} + \beta_1 n\bar{x}^2 - \beta_1 \sum_{j=1}^n x_j^2 = 0 $$
> $$ \implies \left( \sum_{j=1}^n x_j y_j - n\bar{x}\bar{y} \right) = \beta_1 \left( \sum_{j=1}^n x_j^2 - n\bar{x}^2 \right) $$
> 
> Tính tổng bình phương sai số:
> *   $S_{xy} = \sum_{j=1}^n x_j y_j - n\bar{x}\bar{y} = \sum_{j=1}^n (x_j - \bar{x})(y_j - \bar{y})$
> *   $S_{xx} = \sum_{j=1}^n x_j^2 - n\bar{x}^2 = \sum_{j=1}^n (x_j - \bar{x})^2$
> 
> Ước lượng hợp lý cực đại (MLE):
> $$ \hat{\beta}_1 = \frac{S_{xy}}{S_{xx}} $$
> $$ \hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x} $$
> 
> Kết luận: Ước lượng hợp lý cực đại (MLE) của hai tham số $\beta_0$ và $\beta_1$ trong mô hình khớp với kết quả thu được từ phương pháp Bình phương bé nhất (OLS).


> [!problem] (Bài tập 5)  
> Cho biến ngẫu nhiên $X \sim G(\theta)$ (phân phối hình học) với tham số $\theta \in (0,1)$, có hàm xác suất:  
> $$
> P(X = x) = \theta (1 - \theta)^{x - 1}, \quad x = 1, 2, \ldots
> $$  
>  
> Xét bài toán kiểm định giả thuyết:  
> $$
> H_0 : \theta = \theta_0 \quad \text{vs.} \quad H_1 : \theta = \theta_1, \quad \text{với } \theta_1 > \theta_0.
> $$  
>  
> Yêu cầu: Tìm kiểm định mạnh nhất cho bài toán trên và xác định miền bác bỏ tương ứng.

> [!ans]
> Hàm hợp lý của mẫu tuân theo phân phối hình học:
> $$
> L(\theta) = \mathbb{P}(X = x \mid \theta) = \theta(1- \theta)^{x - 1}
> $$
> Theo bổ đề Neymann-Pearson:
> $$
> \frac{L(\theta_1)}{L(\theta_0)} = \frac{\theta_1(1 - \theta_1)^{x - 1}}{\theta_0(1 - \theta_0)^{x - 1}} = \left( \frac{\theta_1}{\theta_0} \right) \cdot \left( \frac{1 - \theta_1}{1 - \theta_0} \right)^{x - 1} \ge c
> $$
> Lấy logarit:
> $$
> \ln \left[ \left( \frac{1 - \theta_1}{1 - \theta_0} \right)^{x - 1} \right] \ge \ln \left( c \cdot \frac{\theta_0}{\theta_1} \right) \iff (x - 1) \ln \left( \frac{1 - \theta_1}{1 - \theta_0} \right) \ge \ln \left( c \cdot \frac{\theta_0}{\theta_1} \right)
> $$
> Vì $\theta_{1} > \theta_{2}$:
> $$
> \frac{1 - \theta_1}{1 - \theta_0} < 1 \implies \ln \left( \frac{1 - \theta_1}{1 - \theta_0} \right) < 0
> $$
> Giải tìm k:
> $$
> x - 1 \le \frac{\ln \left( c \cdot \frac{\theta_0}{\theta_1} \right)}{\ln \left( \frac{1 - \theta_1}{1 - \theta_0} \right)} \iff x \le 1 + \frac{\ln \left( c \cdot \frac{\theta_0}{\theta_1} \right)}{\ln \left( \frac{1 - \theta_1}{1 - \theta_0} \right)}
> $$
> Kết luận: Miền bác bỏ có dạng: $$C = \{ x \in \mathbb{N}^* : x \le k \}$$

> [!prob] (Bài tập 6) 
> Đo đường kính (đv: mm) của một số chi tiết máy do một máy tiện tự động sản xuất, ta ghi nhận được số liệu như sau:
>
> | Đường kính | 12,00 | 12,05 | 12,10 | 12,15 | 12,20 | 12,25 | 12,30 | 12,35 | 12,40 |
> |------------|-------|-------|-------|-------|-------|-------|-------|-------|-------|
> | Số lượng   |   2   |   3   |   7   |   9   |  10   |   8   |   6   |   5   |   3   |
>
> (a) Tính trung bình mẫu, phương sai mẫu và độ lệch chuẩn mẫu.  
> 
> (b) Tìm khoảng tin cậy (KTC) 98% cho đường kính trung bình của các chi tiết máy.  
> 
> (c) Nếu muốn sai số ước lượng KTC cho trung bình không quá $E = 0{,}02 \,\text{mm}$ với độ tin cậy 98% thì phải lấy cỡ mẫu tối thiểu bao nhiêu?  
> 
> (d) Những chi tiết máy có đường kính nhỏ hơn 12,1 và lớn hơn 12,30 được xem là không đạt tiêu chuẩn kĩ thuật. Tìm khoảng tin cậy 96% cho tỷ lệ chi tiết máy không đạt tiêu chuẩn.

> [!ans]
> a) b)
> Tính trung bình mẫu: 
> $$
> \bar{x} = \frac{646.95}{53} \approx 12.2066 \text{ mm}
> $$
> Phương sai mẫu:
> $$
> s^2 = \frac{1}{53 - 1} \left[ 7901.6125 - 53 \cdot (12.20660378)^2 \right] \approx 0.008677 \text{ mm}^2
> $$
> Độ lệch chuẩn: 
> $$
> s = \sqrt{0.008677} \approx 0.0931 \text{ mm}
> $$
> Độ tin cậy: $1- \alpha = 0.98 \implies \alpha = 0.02 \implies Z_{\alpha/2} = Z_{0.01} \approx 2.326$.
>
> Dung sai: 
> $$\epsilon = Z_{\alpha/2} \cdot \frac{s}{\sqrt{n}} = 2.326 \cdot \frac{0.09315}{\sqrt{53}} \approx 2.326 \cdot 0.0128 = 0.0298 \text{ mm}$$
> Khoảng tin cậy 98% cho đường kính trung bình là:
> $$
> \left( \bar{x} - \epsilon \,;\, \bar{x} + \epsilon \right) = \left( 12.2066 - 0.0298 \,;\, 12.2066 + 0.0298 \right) = \left( 12.1768 \,;\, 12.2364 \right)
> $$
> Kết luận: Với độ tin cậy 98%, đường kính trung bình của các chi tiết máy nằm trong khoảng từ $12.1768 \text{ mm}$ đến $12.2364 \text{ mm}$
> 
> c)
> Với sai số tối đa $\epsilon = 0.02 \text{ mm}$, độ tin cậy 98% $\implies Z_{0.01} = 2.326$. Ta có cỡ mẫu tối thiểu:
> $$
> n \ge \left( \frac{Z_{\alpha/2} \cdot s}{E} \right)^2 = \left( \frac{2.326 \cdot 0.09315}{0.02} \right)^2 = \left( \frac{0.21667}{0.02} \right)^2 = (10.8333)^2 \approx 117.36
> $$
> Kết luận: Phải lấy cỡ mẫu tối thiểu là $n = 118$ chi tiết máy
> 
> d)
> Ta có chi tiết không đạt là chi tiết có đường kính $< 12.1 \text{ mm}$ hoặc $> 12.30 \text{ mm}$.
> 
> Số chi tiết $< 12.1$: gồm nhóm $12.00$ ($2$ chi tiết) và $12.05$ ($3$ chi tiết) $\implies 2 + 3 = 5$ chi tiết,
> 
> Số chi tiết $> 12.30$: gồm nhóm $12.35$ ($5$ chi tiết) và $12.40$ ($3$ chi tiết) $\implies 5 + 3 = 8$ chi tiết. 
> 
> Vây tổng có $m = 5+ 8 = 13$ chi tiết không đạt.
> 
> Tỷ lệ mẫu không đạt: 
> $$
> f = \frac{m}{n} = \frac{13}{53} \approx 0.2453 \quad (24.53\%)
> $$
> 
> Độ tin cậy: $\alpha = 0.04 \implies \alpha/2 = 0.02 \implies Z_{0.02} \approx 2.054$. 
>
> Sai số ược lượng tỉ lệ:
> $$\epsilon = Z_{\alpha/2} \cdot \sqrt{\frac{f(1-f)}{n}} = 2.054 \cdot \sqrt{\frac{0.2453 \cdot (1 - 0.2453)}{53}} = 2.054 \cdot \sqrt{0.003493} \approx 2.054 \cdot 0.0591 = 0.1214$$
> 
> Khoảng tin cậy 96% cho tỷ lệ thực tế $p$ là:
> $$
> \left( f - \epsilon \,;\, f + \epsilon \right) = \left( 0.2453 - 0.1214 \,;\, 0.2453 + 0.1214 \right) = \left( 0.1239 \,;\, 0.3667 \right)
> $$
> Kết luận: Với độ tin cậy 96%, tỷ lệ chi tiết máy không đạt tiêu chuẩn của nhà máy nằm trong khoảng từ $12.39\%$ đến $36.67\%$

> [!prob] (Bài tập 7)
>
> Cục khí tượng Australia ghi nhận về lượng mưa trung bình hằng năm (đv: mm) trong giai đoạn 1983–2002 với dữ liệu đã được sắp xếp theo thứ tự như sau:
>
> | 338 | 340 | 390 | 400 | 418 | 452 | 455 | 460 | 470 | 470 |
> |-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
> | 482 | 498 | 500 | 522 | 526 | 554 | 558 | 565 | 584 | 728 |
>
> Giả sử lượng mưa xấp xỉ phân phối chuẩn $N(\mu,\sigma^2)$ với $\mu\in\mathbb{R},\ \sigma>0$ **không biết**.
>
> (a) Tìm một ước lượng điểm của:
>
> Trung bình tổng thể $\mu$;
> Phương sai tổng thể $\sigma^2$;
> Độ lệch chuẩn tổng thể $\sigma$.
>
> (b) Xây dựng khoảng tin cậy $99\%$ cho lượng mưa trung bình hằng năm của nước Australia.
>
> (c) Với độ tin cậy $95\%$, giả sử độ lệch chuẩn là $\sigma=90$. Nếu muốn sai số ước lượng $\varepsilon$ (cho khoảng tin cậy lượng mưa trung bình hằng năm) không vượt quá $30$ mm thì cần khảo sát lượng mưa của ít nhất bao nhiêu năm?
>
> (d) Ghi nhận lượng mưa của $120$ tháng thấy có $15$ tháng có lượng mưa ít.
>
> Tìm khoảng tin cậy $95\%$ cho tỷ lệ tháng có lượng mưa ít.
>
> Với dữ liệu lượng mưa hằng năm ở Australia (giai đoạn 1983–2002) ở trên, hãy:
>
> *(Nếu đề bài cho dữ liệu chưa sắp xếp thì cần sắp dữ liệu theo thứ tự không giảm trước.)*
>
> (e) Lập bảng phân bố tần số và vẽ đồ thị Histogram cho dữ liệu về lượng mưa này.
>
> (f) Xác định các tứ phân vị:
>
> $Q_1$ (phân vị mức $25\%$);
> $Q_2$ (phân vị mức $50\%$);
> $Q_3$ (phân vị mức $75\%$).
>
> Từ đó suy ra khoảng tứ phân vị:
>
> $$IQR = Q_3 - Q_1.$$
>
> (g) Xác định các giá trị ngoại lai (*outliers*) (nếu có).

> [!ans]
> a)
> Tính trung bình tổng thể ($\mu$):
> $$
> \bar{x} = \frac{1}{n}\sum_{i=1}^{20} x_i = \frac{9842}{20} = 492.1 \text{ mm}
> $$
> Tính phương sai tổng thể ($\sigma ^{2}$):
> $$
> s^2 = \frac{1}{n-1}\left(\sum_{i=1}^{20} x_i^2 - n\bar{x}^2\right) = \frac{1}{19}\left(4981440 - 20 \cdot 492.1^2\right) \approx 7273.2526 \text{ mm}^{2}
> $$
> 
> b)
> Vì cỡ mẫu $n  = 20< 30$, ta sử dụng thống kê Student $t$-distribution với bậc tự do $df = n - 1 = 19$
>
> Độ tin cậy: $1 - \alpha = 0.99 \implies \alpha/2 = 0.005 \implies t_{\alpha/2}^{(n-1)} = t_{0.005}^{(19)} \approx 2.861$
> 
> Sai số ước lượng: 
> $$
> \varepsilon = t_{0.005}^{(19)} \cdot \frac{s}{\sqrt{n}} = 2.861 \cdot \frac{85.2834}{\sqrt{20}} \approx 2.861 \cdot 19.0699 \approx 54.5591 \text{ mm}
> $$
> 
> Khoảng tin cậy 99% cho $\mu$ là:
> $$(\bar{x} - \varepsilon \,;\, \bar{x} + \varepsilon) = (492.1 - 54.5591 \,;\, 492.1 + 54.5591) = (437.5409 \,;\, 546.6591)$$
> 
> Kết luận: Lượng mưa trung bình hàng năm nằm trong khoảng $[437.5409 \text{ mm} \,;\, 546.6591 \text{ mm}]$ với độ tin cậy 99%.
> 
> c)
> Độ lệch chuẩn: $\sigma = 90$
> 
> Độ tin cậy: $1 - \alpha = 0.95 \implies \alpha/2 = 0.025 \implies Z_{\alpha/2} = Z_{0.025} = 1.96$
>
>Sai số tối đa cho phép: $\varepsilon_0 = 30$ mm.
>
> Tính cỡ mẫu khi đã biết phương sai:
> $$
> n \ge \left(\frac{Z_{\alpha/2} \cdot \sigma}{\varepsilon_0}\right)^2 = \left(\frac{1.96 \cdot 90}{30}\right)^2 = (1.96 \cdot 3)^2 = (5.88)^2 = 34.5744
> $$
> 
> Kết luận: Cần khảo sát lượng mưa của **ít nhất 35 năm**.
>
> d)
> Cỡ mẫu tháng: $n' = 120$, số tháng lượng mưa ít: $m = 15$
> 
> Tỷ lệ mẫu: $f = \frac{15}{120} = 0.125$.
> 
> Độ tin cậy $1 - \alpha = 0.95 \implies Z_{\alpha/2} = Z_{0.025} = 1.96$.
> 
> Sai số ước lượng tỷ lệ:
> $$
> \varepsilon_p = Z_{0.025} \cdot \sqrt{\frac{f(1-f)}{n'}} = 1.96 \cdot \sqrt{\frac{0.125 \cdot 0.875}{120}} = 1.96 \cdot \sqrt{0.0009115} \approx 1.96 \cdot 0.03019 \approx 0.0592
> $$
> 
> Khoảng tin cậy 95% cho tỷ lệ thực tế $p$ là:
> $$
> (f - \varepsilon_p \,;\, f + \varepsilon_p) = (0.125 - 0.0592 \,;\, 0.125 + 0.0592) = (0.0658 \,;\, 0.1842)
> $$
> Kết luận: Khoảng tin cậy 95% cho tỷ lệ tháng có lượng mưa ít là $[6.58\% \,;\, 18.42\%]$
> 
> e)
> Dữ liệu có giá trị nhỏ nhất $X_{min} = 338$ và lớn nhất $X_{max} = 728$. Khoảng biến thiên $R = 728 - 338 = 390$. 
> Ta chia dữ liệu thành 4 nhóm (lớp), mỗi nhóm có độ rộng là $100$ đơn vị (bắt đầu từ 330):
> 
> | Lượng mưa (mm) | Tần số (Số năm) |
> | :--- | :---: |
> | $[330 \,;\, 430)$ | 5 |
> | $[430 \,;\, 530)$ | 10 |
> | $[530 \,;\, 630)$ | 4 |
> | $[630 \,;\, 730]$ | 1 |
> | **Tổng** | **20** |
> 
> f)
> Tứ phân vị thứ nhất $Q_1$ (gồm 10 phần tử đầu tiên từ vị trí 1 đến 10):
> $$
> Q_1 = \frac{x_5 + x_6}{2} = \frac{418 + 452}{2} = 435 \text{ mm}
> $$
>
> Tứ phân vị thứ hai $Q_2$ (Trung vị là vị trí thứ 10 và 11):
> $$
> Q_2 = \frac{x_{10} + x_{11}}{2} = \frac{470 + 482}{2} = 476 \text{ mm}
> $$
> 
> Tứ phân vị thứ ba $Q_3$ (gồm 10 phần tử cuối từ vị trí 11 đến 20):
> $$
> Q_3 = \frac{x_{15} + x_{16}}{2} = \frac{526 + 554}{2} = 540 \text{ mm}
> $$
> 
> Khoảng tứ phân vị IQR: 
> $$
> IQR = Q_3 - Q_1 = 540 - 435 = 105 \text{ mm}
> $$
> Giá trị ngoại lai $x$là các điểm nằm ngoài khoảng hàng rào hợp lý $[L_L \,;\, L_U]$ định bởi:
> $$
> L_L = Q_1 - 1.5 \cdot IQR = 435 - 1.5 \cdot 105 = 435 - 157.5 = 277.5 \text{ mm}
> $$ 
> $$
> L_U = Q_3 + 1.5 \cdot IQR = 540 + 1.5 \cdot 105 = 540 + 157.5 = 697.5 \text{ mm}
> $$
> Không có giá trị nào nhỏ hơn $277.5$ mm và có giá trị $728$ mm lớn hơn hàng rào trên $697.5$ mm.
> 
> Kết luận: Tập dữ liệu tồn tại duy nhất **một giá trị ngoại lai lớn là 728 mm**.

> [!prob] (Bài tập 8)
>
> Một khảo sát về chiều cao $X$ (cm) của một giống cây trồng, người ta quan sát một mẫu và có kết quả sau:
>
> | Chiều cao (cm) | 100 | 110 | 120 | 130 | 140 | 150 | 160 |
> |:-------------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | Số cây | 10 | 10 | 15 | 30 | 10 | 10 | 15 |
>
> Giả sử chiều cao $X$ có phân phối chuẩn.
>
> (a) Ước lượng chiều cao trung bình của giống cây trồng trên với độ tin cậy $95\%$.
>
> (b) Những cây trồng có chiều cao từ $135$ cm trở lên được gọi là những cây "cao". Hãy ước lượng tỷ lệ những cây cao với độ tin cậy $96\%$.
>
> (c) Một chuyên gia lâm nghiệp cho rằng chiều cao trung bình của giống cây này là $133$ cm. Hãy kiểm định ý kiến trên với mức ý nghĩa $3\%$.
>
> (d) Người ta áp dụng phương pháp mới trong việc trồng và chăm sóc cây. Sau một thời gian, khảo sát $100$ cây đã trồng theo phương pháp mới được số liệu sau:
>
> | Chiều cao (cm) | 100 | 110 | 120 | 130 | 140 | 150 | 160 |
> |:-------------:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | Số cây | 6 | 10 | 20 | 34 | 12 | 7 | 11 |
>
> Với mức ý nghĩa $2\%$, kiểm định xem phương pháp mới có làm tăng chiều cao trung bình của cây không.
>
> (e) Có ý kiến cho rằng phương pháp mới làm tăng tỷ lệ cây "cao".
>
> Với mức ý nghĩa $1\%$, hãy kiểm tra ý kiến này.

> [!ans]
> a)
> Độ tin cậy: $1 - \alpha = 0.95 \implies \alpha/2 = 0.025 \implies Z_{0.025} = 1.96$.
>
> Sai số ước lượng trung bình: 
> $$
> E = Z_{\alpha/2} \cdot \frac{s}{\sqrt{n}} = 1.96 \cdot \frac{17.3787}{\sqrt{100}} \approx 3.4062 \text{ cm}
> $$
> Khoảng tin cậy 95% cho chiều cao trung bình $\mu$ là:
> $$
> (\bar{x} - E \,;\, \bar{x} + E) = (131 - 3.4062 \,;\, 131 + 3.4062) = (127.5938 \,;\, 134.4062)
> $$
> Kết luận: Với độ tin cậy 95%, chiều cao trung bình nằm trong khoảng $[127.5938 \text{ cm} \,;\, 134.4062 \text{ cm}]$
> 
> b)
> Số cây "cao" trong mẫu (cây có chiều cao 135cm trở lên): $m = 10 + 10 + 15 = 35$ cây
> 
> Tỷ lệ mẫu: $f = \frac{35}{100} = 0.35$
> 
> Độ tin cậy $1 - \alpha = 0.96 \implies \alpha/2 = 0.02 \implies Z_{0.02} \approx 2.054$
> 
> Sai số ước lượng tỷ lệ:
> $$
> E_p = Z_{\alpha/2} \cdot \sqrt{\frac{f(1-f)}{n}} = 2.054 \cdot \sqrt{\frac{0.35 \cdot 0.65}{100}} \approx 2.054 \cdot 0.0477 = 0.0980
> $$
> 
> Khoảng tin cậy 96% cho tỷ lệ thực tế $p$ là:
> $$
> (f - E_p \,;\, f + E_p) = (0.35 - 0.0980 \,;\, 0.35 + 0.0980) = (0.2520 \,;\, 0.4480)
> $$
> Kết luận: Khoảng ước lượng tỷ lệ cây cao là **$[25.20\% \,;\, 44.80\%]$** với độ tin cậy 96%
> 
> c)
> Cặp giả thuyết: $H_0: \mu = 133$ vs $H_1: \mu \neq 133$
> 
> Tiêu chuẩn kiểm định: $Z = \frac{\bar{x} - \mu_0}{s/\sqrt{n}} = \frac{131 - 133}{17.3787/\sqrt{100}} \approx -1.1508$.
> 
> Mức ý nghĩa $\alpha = 0.03 \implies \alpha/2 = 0.015 \implies Z_{0.015} \approx 2.17$
> 
> Miền bác bỏ: $W_\alpha = (-\infty ; -2.17) \cup (2.17 ; +\infty)$
>
> Vì $Z_{kđ} = -1.1508 \notin W_\alpha$, ta chưa có đủ bằng chứng để bác bỏ $H_0$
> Kết luận: Với mức ý nghĩa 3%, ý kiến cho rằng chiều cao trung bình bằng $133\text{ cm}$ là phù hợp với số liệu mẫu
> 
> d)
> Tính đặc trưng mẫu với $n_{2} = 100$:
> $$
> \sum n_{2i} x_{2i} = 6(100) + \dots + 11(160) = 12960 \implies \bar{x}_2 = \frac{12960}{100} = 129.6 \text{ cm}
> $$
> $$
> \sum n_{2i} x_{2i}^2 = 1704600 \implies s_2^2 = \frac{1}{99}[1704600 - 100 \cdot 129.6^2] \approx 252.3636$, $s_2 \approx 15.8860 \text{ cm}
> $$
> Cặp giả thuyết (kiểm định 1 phía): $H_0: \mu_2 = \mu_1$ vs $H_1: \mu_2 > \mu_1$ (phương pháp mới làm tăng chiều cao)
> 
> Tiêu chuẩn kiểm định so sánh 2 trung bình (mẫu lớn độc lập):
> $$
> Z = \frac{\bar{x}_2 - \bar{x}_1}{\sqrt{\frac{s_2^2}{n_2} + \frac{s_1^2}{n_1}}} = \frac{129.6 - 131}{\sqrt{\frac{252.3636}{100} + \frac{302.0202}{100}}} = \frac{-1.4}{\sqrt{5.5438}} \approx -0.5946
> $$
> Mức ý nghĩa $\alpha = 0.02 \implies Z_{\alpha} = Z_{0.02} \approx 2.054$
> 
> Miền bác bỏ một phía: $W_\alpha = (2.054 \,;\, +\infty)$.
> 
> Vì $Z_{kđ} = -0.5946 \notin W_\alpha$, ta không bác bỏ $H_0$
> Kết luận: Phương pháp mới **không làm tăng** chiều cao trung bình của giống cây
> 
> e)
> Số cây "cao" mẫu mới ($n_{2} = 100$): $m_2 = 12 + 7 + 11 = 30$ cây
> 
> Tỷ lệ mẫu mới: f2​=10030​=0.30.
> 
> Tỷ lệ mẫu cũ (ở câu b): $f_1 = 0.35$.
> 
> Tỷ lệ chung đại diện dưới $H_0$: $f_0 = \frac{m_1 + m_2}{n_1 + n_2} = \frac{35 + 30}{100 + 100} = 0.325$.
> 
> Cặp giả thuyết: $H_0: p_2 = p_1$ vs $H_1: p_2 > p_1$.
> 
> Tiêu chuẩn kiểm định:
> $$
> Z = \frac{f_2 - f_1}{\sqrt{f_0(1-f_0)\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}} = \frac{0.30 - 0.35}{\sqrt{0.325 \cdot 0.675 \cdot \left(\frac{1}{100} + \frac{1}{100}\right)}} = \frac{-0.05}{0.0662} \approx -0.7553
> $$
> 
> Mức ý nghĩa $\alpha = 0.01 \implies Z_{\alpha} = Z_{0.01} \approx 2.326$.
> 
> Miền bác bỏ một phía: $W_\alpha = (2.326 \,;\, +\infty)$
> 
> Vì $Z_{kđ} = -0.7553 \notin W_\alpha$, ta không bác bỏ $H_0$
> Kết luận: Không đủ bằng chứng để khẳng định phương pháp mới làm tăng tỷ lệ cây "cao"

> [!prob] (Bài tập 9)
> Tuổi thọ một loại pin (đv: giờ) do một nhà máy sản xuất có phân phối chuẩn với độ lệch chuẩn là $1{,}25$ giờ. Khảo sát mẫu ngẫu nhiên $10$ viên pin thấy trung bình tuổi thọ là $40{,}5$ giờ.
>
> Có đủ bằng chứng để kết luận rằng tuổi thọ trung bình loại pin này lớn hơn $40$ giờ hay không?
>
> Sử dụng $\alpha = 0{,}05$.
>
> Tính $p$-giá trị.

> [!ans]
> Độ lệch chuẩn tổng thể: $\sigma = 1.25$ giờ.  \
> Cỡ mẫu: $n = 10$ viên pin.  
> Trung bình mẫu: $\bar{x} = 40.5$ giờ.  
> Mức ý nghĩa: $\alpha = 0.05$. 
>
> Cặp giả thuyết kiểm định một phía: 
> $$
> H_0: \mu = 40 \quad \text{vs.} \quad H_1: \mu > 40
> $$
> Tiêu chuẩn kiểm định:
> $$
> Z_{kđ} = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}} = \frac{40.5 - 40}{1.25 / \sqrt{10}} = \frac{0.5}{0.39528} \approx 1.2649
> $$
> Tính $p$-giá trị:
> $$
> p\text{-value} = \mathbb{P}(Z \ge 1.2649) = 1 - \Phi(1.2649) \approx 1 - 0.8970 = 0.1030 \quad (10.30\%)
> $$
> Vì $p\text{-value} = 0.1030 > \alpha = 0.05$, ta chấp nhận (chưa bác bỏ) giả thuyết $H_0$
> Kết luận: Chưa có đủ bằng chứng để kết luận rằng tuổi thọ trung bình của loại pin này lớn hơn $40$ giờ
> 

> [!prob] (Bài tập 10)
> Người ta đo hàm lượng natri (đv: mg) của hai mươi hộp bắp hữu cơ $300$g của một nhà sản xuất $A$ và thu được dữ liệu như sau:
>
> | 131,15 | 130,69 | 130,91 | 129,54 | 129,64 | 128,77 | 130,72 | 128,33 | 128,24 | 129,78 |
> |---------|---------|---------|---------|---------|---------|---------|---------|---------|---------|
> | 129,65 | 130,14 | 129,29 | 128,71 | 129 | 129,39 | 130,42 | 129,53 | 130,12 | 130,92 |
>
> Giả sử theo tiêu chuẩn, hàm lượng natri trung bình không được phép vượt quá $130$ mg.
>
> Sử dụng mức ý nghĩa $0{,}02$, dữ liệu trên có cho thấy các hộp bắp hữu cơ của nhà sản xuất $A$ đảm bảo tiêu chuẩn hay không?
>
> Tính $p$-giá trị.

> [!ans]
> Tính trung bình mẫu: 
> $$
> \bar{x} = \frac{2594.01}{20} = 129.7005 \text{ mg}
> $$
> Phương sai mẫu:
> $$
> s^2 = \frac{1}{n-1} \left( \sum x_i^2 - n\bar{x}^2 \right) = \frac{1}{19} \left( 336458.7303 - 20 \cdot 129.7005^2 \right) \approx 0.74417 \text{ mg}^{2}
> $$
> Cặp giả thuyết kiểm định:
> $$
> H_0: \mu = 130 \quad \text{vs.} \quad H_1: \mu > 130
> $$
> Vì phương sai tổng thể $\sigma^2$ chưa biết, và cỡ mẫu nhỏ ($n < 30$), ta sử dụng tiêu chuẩn Student ($t$-test)
> 
> Tiêu chuẩn kiểm định:
> $$
> t_{kđ} = \frac{\bar{x} - \mu_0}{s / \sqrt{n}} = \frac{129.7005 - 130}{0.8627 / \sqrt{20}} = \frac{-0.2995}{0.1929} \approx -1.5526
> $$
> 
> Tính $p$-giá trị:
> $$
> p\text{-value} = \mathbb{P}(T_{19} \le 1.5526) = 1 - \mathbb{P}(T_{19} \ge 1.5526) \approx 1 - 0.0685 = 0.9315 \quad (93.15\%)
> $$
> Vì $p\text{-value} = 0.9315$ lớn hơn nhiều so với mức ý nghĩa $\alpha = 0.02$, ta chấp nhận giả thuyết $H_0$ 
> Kết luận: kết quả kiểm định khẳng định các hộp bắp hữu cơ của nhà sản xuất $A$ đảm bảo tiêu chuẩn quy định

> [!prob] (Bài tập 11)
> Đo cholesterol (đơn vị mg%) cho một nhóm người, ta ghi nhận lại được:
>
> | Chol. | 150–160 | 160–170 | 170–180 | 180–190 | 190–200 | 200–210 |
> |:------|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|
> | Số người | 3 | 9 | 11 | 3 | 2 | 1 |
>
> Cho rằng độ cholesterol tuân theo phân phối chuẩn.
>
> (a) Tính trung bình mẫu $\bar{x}$ và phương sai mẫu $s^2$.
>
> (b) Tìm khoảng ước lượng cho trung bình cholesterol trong dân số ở độ tin cậy $0{,}95$.
>
> Nếu ta muốn độ tin cậy tăng lên thì khoảng ước lượng này sẽ rộng ra hay thu hẹp lại? (Giải thích ngắn gọn mà không cần thực hiện các tính toán.)
>
> (c) Có tài liệu cho biết lượng cholesterol trung bình là $\mu_0 = 175$ mg%.
>
> Giá trị này có phù hợp với mẫu quan sát không? (Mức ý nghĩa $4\%$.)
>
> (d) Khi đo cholesterol trên một nhóm $40$ người ở địa phương khác thì thu được:
>
> $\bar{x}_2 = 176$ mg%;
> $s_2^2 = 145\;(\text{mg}\%)^2$.
>
> Hỏi lượng cholesterol trung bình ở $2$ địa phương này có khác nhau hay không với mức ý nghĩa $3\%$?
>
> Giả sử phương sai hai tổng thể bằng nhau.

> [!ans]
> a)
> Tính trung bình mẫu $\bar{x_{1}}$:
> $$
> \bar{x}_1 = \frac{\sum n_i x_i}{n_1} = \frac{5025}{29} \approx 173.2759 \text{ mg\%}
> $$
> Phương sai mẫu $s_{1}^{2}$:
> $$
> s_1^2 = \frac{1}{n_1 - 1} \left[ \sum n_i x_i^2 - n_1 (\bar{x}_1)^2 \right] = \frac{1}{28} \left[ 874725 - 29 \cdot (173.27586)^2 \right] \approx 143.3498 \text{ (mg\%) }^2
> $$
> 
> b)
> Vì phương sai tổng thể chưa biết và cỡ mẫu nhỏ ($n_1 = 29 < 30$), ta sử dụng phân phối Student với bậc tự do $df = n_1 - 1 = 28$.
>
> Độ tin cậy $1 - \alpha = 0.95 \implies \alpha/2 = 0.025$.
> 
> Sai số ước lượng trung bình:
> $$
> \varepsilon = t_{0.025}^{(28)} \cdot \frac{s_1}{\sqrt{n_1}} = 2.048 \cdot \frac{11.9729}{\sqrt{29}} \approx 2.048 \cdot 2.2233 \approx 4.5533 \text{ mg\%}
> $$
> 
> Khoảng ước lượng cho trung bình:
> $$
> (\bar{x}_1 - \varepsilon \,;\, \bar{x}_1 + \varepsilon) = (173.2759 - 4.5533 \,;\, 173.2759 + 4.5533) = (168.7226 \,;\, 177.8292)
> $$
> 
> c)
> Cặp giả thuyết: $H_0: \mu_1 = 175$ vs $H_1: \mu_1 \neq 175$
> 
> Tiêu chuẩn kiểm định:
> $$
> t_{kđ} = \frac{\bar{x}_1 - \mu_0}{s_1 / \sqrt{n_1}} = \frac{173.2759 - 175}{11.9729 / \sqrt{29}} = \frac{-1.7241}{2.2233} \approx -0.7755
> $$
> Mức ý nghĩa $\alpha = 0.04 \implies \alpha/2 = 0.02 \implies t_{0.02}^{(28)} \approx 2.156$.
>
> Miền bác bỏ: $W_\alpha = (-\infty \,;\, -2.156) \cup (2.156 \,;\, +\infty)$
> 
> d)
> Địa phương 1: $n_1 = 29$, $\bar{x}_1 = 173.2759$, $s_1^2 = 143.3498$
> Địa phương 2: $n_2 = 40$, $\bar{x}_2 = 176$, $s_2^2 = 145$
>
> Cặp giả thuyết (ước lượng trung bình khác nhau): $$H_0: \mu_1 = \mu_2 \quad \text{vs.} \quad H_1: \mu_1 \neq \mu_2 $$
> 
> Tính phương sai mẫu chung:
> $$
> s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2} = \frac{(29 - 1) \cdot 143.3498 + (40 - 1) \cdot 145}{29 + 40 - 2} \approx 144.3104
> $$
> Sử dụng thống kê Student cho hai mẫu độc lập có phương sai bằng nhau:
> $$
> t_{kđ} = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{s_p^2 \left( \frac{1}{n_1} + \frac{1}{n_2} \right)}} = \frac{173.2759 - 176}{\sqrt{144.3104 \left( \frac{1}{29} + \frac{1}{40} \right)}} \approx -0.9298
> $$
> Bậc tự do của kiểm định: $df = n_1 + n_2 - 2 = 67$
> Mức ý nghĩa ${} \alpha = 0.03 \implies \alpha/2 = 0.015 \implies t_{0.015}^{(67)} \approx Z_{0.015} \approx 2.17$
> 
> Miền bác bỏ: $W_\alpha = (-\infty \,;\, -2.17) \cup (2.17 \,;\, +\infty)$
>
> Vì $|t_{kđ}| = 0.9298 < 2.17$ (tức $t_{kđ} \notin W_\alpha$), ta không có đủ bằng chứng bác bỏ $H_0$.
> Kết luận: Với mức ý nghĩa $3\%$, chưa thể khẳng định lượng cholesterol trung bình ở 2 địa phương này có sự khác nhau.

> [!prob] (Bài tập 12)
> Đo chỉ số chất béo $X$ (đv: %) trong sữa bò (của $125$ con bò thuộc một giống bò sữa lai mới của Hà Lan), ta được bảng số liệu sau:
>
> | $X$ | 3,5 | 3,8 | 4,5 | 5,2 | 5,6 | 6,4 | 6,8 |
> |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | $n_i$ | 2 | 8 | 35 | 40 | 20 | 15 | 5 |
>
> Giả thiết rằng $X$ có phân phối chuẩn.
>
> **(a)** Tìm khoảng tin cậy $99\%$ cho trung bình chỉ số chất béo trong sữa giống bò lai trên.
>
> **(b)** Biết trung bình chỉ số chất béo trong sữa giống bò thuần chủng (giống bò cũ) là $4{,}65$.
>
> Việc lai tạo có cho trung bình chỉ số chất béo của sữa bò **tăng lên** hay không, với $\alpha = 1\%$?
>
> **(c)** Sữa bò được đánh giá là loại $1$ nếu chỉ số chất béo nằm trong khoảng từ $4{,}0$ đến $6{,}0$.
>
> Có ý kiến cho rằng ít nhất $70\%$ lượng sữa bò của giống bò lai mới này thuộc loại $1$.
>
> Hãy kiểm định ý kiến trên với mức ý nghĩa $5\%$.
>
> Tính $p$-giá trị.

> [!ans]
> a)
> Tính trung bình mẫu:
> $$
> \bar{x} = \frac{\sum n_i x_i}{n} = \frac{644.9}{125} = 5.1592\%
> $$
> 
> Phương sai mẫu:
> $$
> s^2 = \frac{1}{n-1}\left(\sum n_i x_i^2 - n\bar{x}^2\right) = \frac{1}{124}\left(3403.17 - 125 \cdot 5.1592^2\right) \approx 0.61146 \%
> $$
> 
> Độ tin cậy $1 - \alpha = 0.99 \implies \alpha/2 = 0.005 \implies Z_{0.005} \approx 2.576$
> 
> Sai số ước lượng trung bình:
> $$
> E = Z_{\alpha/2} \cdot \frac{s}{\sqrt{n}} = 2.576 \cdot \frac{0.7820}{\sqrt{125}} \approx 2.576 \cdot 0.06994 \approx 0.1802\%
> $$
> Khoảng tin cậy $99\%$ cho chỉ số chất béo trung bình $\mu$ là:
> $$
> (\bar{x} - E \,;\, \bar{x} + E) = (5.1592 - 0.1802 \,;\, 5.1592 + 0.1802) = (4.9790\% \,;\, 5.3394\%)
> $$
> Kết luận: Với độ tin cậy $99\%$, trung bình chỉ số chất béo trong sữa của giống bò lai này nằm trong khoảng từ $4.9790\%$ đến $5.3394\%$.
> 
> b)
> Cặp giả thuyết kiểm định một phía:
> $$
> H_0: \mu = 4.65 \quad \text{vs.} \quad H_1: \mu > 4.65
> $$
> Tiêu chuẩn kiểm định:
> $$
> Z_{kđ} = \frac{\bar{x} - \mu_0}{s / \sqrt{n}} = \frac{5.1592 - 4.65}{0.7820 / \sqrt{125}} = \frac{0.5092}{0.06994} \approx 7.2805
> $$
> Mức ý nghĩa $\alpha = 0.01 \implies Z_{\alpha} = Z_{0.01} \approx 2.326$
> 
> Miền bác bỏ một phía bên phải: $W_\alpha = (2.326 \,;\, +\infty)$
>
> Kết luận: Với mức ý nghĩa $1\%$, việc lai tạo thực sự làm tăng chỉ số chất béo trung bình trong sữa bò một cách có ý nghĩa thống kê.
> 
> c)
> Tổng số con cho sữa loại 1 trong mẫu: $m = 35 + 40 + 20 = 95$ con. 
> Tỷ lệ mẫu: $f = \frac{95}{125} = 0.76$ ($76\%$).
> 
> Cặp giả thuyết kiểm định một phía (kiểm chứng tỷ lệ sữa loại 1 đạt ít nhất $70\%$):
> $$
> H_0: p = 0.70 \quad \text{vs.} \quad H_1: p < 0.70 
> $$
> Tính tiêu chuẩn kiểm định:
> $$
> Z_{kđ} = \frac{f - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}} = \frac{0.76 - 0.70}{\sqrt{\frac{0.70 \cdot 0.30}{125}}} = \frac{0.06}{\sqrt{0.00168}} = \frac{0.06}{0.040988} \approx 1.4638
> $$
> 
> Tính $p$-giá trị:
> $$
> p\text{-value} = \mathbb{P}(Z \le Z_{kđ}) = \mathbb{P}(Z \le 1.4638) = \Phi(1.4638)\approx 0.9284 \quad (92.84\%)
> $$
> Vì $p\text{-value} = 0.9284 > \alpha = 0.05$, ta chấp nhận giả thuyết $H_0$
> Kết luận: Với mức ý nghĩa $5\%$, ý kiến cho rằng có ít nhất $70\%$ lượng sữa bò của giống bò lai mới thuộc loại 1 là phù hợp

> [!prob] (Bài tập 13)
> Trong một nhà máy sản xuất đồ uống, hai máy đóng chai tự động được sử dụng để đóng những chai nước có thể tích thực là $16{,}0$ ounces. Giả sử thể tích nước trong các chai được đóng bởi hai máy trên tuân theo phân phối chuẩn với độ lệch chuẩn lần lượt là $\sigma_1 = 0{,}02$ và $\sigma_2 = 0{,}025$ ounces.
>
> Một kỹ sư quản lý chất lượng cho rằng thể tích thực của các chai nước do hai nhà máy đóng chai thực hiện là như nhau. Một mẫu ngẫu nhiên gồm $10$ chai nước từ mỗi máy, cho biết:
>
> | Máy 1 | Máy 1 | Máy 2 | Máy 2 |
> |:-----:|:-----:|:-----:|:-----:|
> | 16,03 | 16,01 | 16,02 | 16,03 |
> | 16,04 | 15,96 | 15,97 | 16,04 |
> | 16,05 | 15,98 | 15,96 | 16,02 |
> | 16,05 | 16,02 | 16,01 | 16,01 |
> | 16,02 | 15,99 | 15,99 | 16,00 |
>
> Với mức ý nghĩa $5\%$, khẳng định của người kỹ sư có đúng không?
>
> Tính $p$-giá trị.

> [!ans]
> Trung bình mẫu: $\bar{x_{1}} = 16.015 \text{ ounces}$ và ${} \bar{x_{2}} = 16.005 \text{ ounces}$
> Cặp giả thuyết kiểm định hai phía (trung bình tổng thể):
> $$
> H_0: \mu_1 = \mu_2 \quad \text{vs.} \quad H_1: \mu_1 \neq \mu_2
> $$
> Tiêu chuẩn kiểm định:
> $$
> Z_{kđ} = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}} = \frac{16.015 - 16.005}{\sqrt{\frac{0.02^2}{10} + \frac{0.025^2}{10}}} \approx 0.9877
> $$
> 
> Tính $p$-giá trị:
> $$
> p\text{-value} = 2 \cdot \mathbb{P}(Z \ge 0.9877) = 2 \cdot \left[1 - \Phi(0.9877)\right] \approx 2 \cdot (1 - 0.8383) = 0.3234 \quad (32.34\%)
> $$
> Vì $p\text{-value} = 0.3234$ lớn hơn nhiều so với mức ý nghĩa $\alpha = 0.05$ ($5\%$), ta chấp nhận giả thuyết $H_0$ 
>  Kết luận:  Thể tích thực giữa các chai nước được đóng từ hai máy này không có sự khác biệt mang ý nghĩa thống kê.

> [!prob]  (Bài tập 14)
> Hai chất xúc tác có thể được sử dụng trong một phản ứng hóa học.
>
> Mười hai phản ứng được cho sử dụng chất xúc tác $1$, dẫn đến hiệu suất trung bình là $86$ (đv: %) và độ lệch chuẩn mẫu là $3$.
>
> Mười lăm phản ứng được cho sử dụng chất xúc tác $2$, và kết quả là hiệu suất trung bình là $89$ với độ lệch chuẩn mẫu là $2$.
>
> Giả sử hiệu suất các phản ứng xấp xỉ phân phối chuẩn với cùng độ lệch chuẩn.
>
> Có bằng chứng để khẳng định rằng chất xúc tác $2$ tạo ra hiệu suất trung bình cao hơn chất xúc tác $1$ hay không?
>
> Sử dụng $\alpha = 0{,}01$.
>
> *(Yêu cầu dùng cả 2 phương pháp: miền bác bỏ và $p$-giá trị.)*

> [!ans]
> Chất xúc tác 1: Cỡ mẫu $n_1 = 12$, hiệu suất trung bình $\bar{x}_1 = 86\%$, độ lệch chuẩn mẫu $s_1 = 3 \implies s_1^2 = 9$.
> Chất xúc tác 2: Cỡ mẫu $n_2 = 15$, hiệu suất trung bình $\bar{x}_2 = 89\%$, độ lệch chuẩn mẫu $s_2 = 2 \implies s_2^2 = 4$
> 
> Cặp giả thuyết kiểm định giả định hiệu suất chất xúc tác 2 lớn hơn chất xúc tác 1:
> $$
> H_0: \mu_1 = \mu_2 \quad \text{vs.} \quad H_1: \mu_1 < \mu_2
> $$
> Tính phương sai mẫu gộp:
> $$
> s_p^2 = \frac{(12 - 1) \cdot 9 + (15 - 1) \cdot 4}{12 + 15 - 2} = 6.2
> $$
> Sử dụng thống kê Student cho hai mẫu độc lập cùng phương sai:
> $$
> t_{kđ} = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{s_p^2 \left(\frac{1}{n_1} + \frac{1}{n_2}\right)}} = \frac{86 - 89}{\sqrt{6.2 \cdot \left(\frac{1}{12} + \frac{1}{15}\right)}} \approx -3.1109
> $$
> Mức ý nghĩa $\alpha = 0.01$ và bậc tự do $df = 25 \implies t_{0.01}^{(25)} = 2.485$ 
> 
> Kiểm định một phía bên trái ($\mu_1 < \mu_2$), miền bác bỏ có dạng: $W_\alpha = (-\infty \,;\, -t_{\alpha}^{(df)}) = (-\infty \,;\, -2.485)$
> 
> Vì giá trị quan sát $t_{kđ} = -3.1109 < -2.485$, do đó $t_{kđ} \in W_{0.01}$ nghĩa là đủ bằng chứng chấp nhận giả thuyết $H_1$.
> 
> Tính $p$-giá trị:
> $$
> p\text{-value} = \mathbb{P}(T_{25} \le -3.1109) = \mathbb{P}(T_{25} \ge 3.1109) \approx 0.0023 \quad (0.23\%)
> $$
> Vì $p\text{-value} = 0.0023 < \alpha = 0.01$, ta quyết định bác bỏ giả thuyết $H_0$, chấp nhận giả thuyết $H_1$
> Kết luận: Có bằng chứng để khẳng định rằng chất xúc tác 2 tạo ra hiệu suất trung bình cao hơn so với chất xúc tác 1

> [!prob] (Bài tập 15)
> Trong một nghiên cứu để ước tính tỷ lệ cử dân trong một thành phố nào đó và cư dân vùng ngoại ô có ủng hộ việc xây dựng nhà máy năng lượng, người ta thấy rằng:
>
> Có $65$ trong $100$ cư dân thành thị ủng hộ việc xây dựng nhà máy;
> Chỉ $58$ trong $125$ cư dân ngoại ô ủng hộ.
>
> Có sự khác biệt có ý nghĩa nào giữa tỷ lệ cư dân thành thị và cư dân ngoại ô trong việc ủng hộ xây dựng nhà máy năng lượng hay không?
>
> Với mức ý nghĩa $2\%$.
>
> Tính $p$-giá trị.

> [!ans]
> Mẫu 1 (Cư dân thành thị): $n_1 = 100$, số người ủng hộ $m_1 = 65$ $\implies$ Tỷ lệ mẫu $f_1 = \frac{65}{100} = 0.65$
> Mẫu 2 (Cư dân ngoại ô): $n_2 = 125$, số người ủng hộ $m_2 = 58$ $\implies$ Tỷ lệ mẫu $f_2 = \frac{58}{125} = 0.464$
> 
> Cặp giải thuyết thể hiện ý nghĩa tỷ lệ cư dân hai vùng trong việc ủng hộ xây dựng nhà máy: 
> $$
> H_0: p_1 = p_2 \quad \text{vs.} \quad H_1: p_1 \neq p_2
> $$
> 
> Tỷ lệ gộp ($f_0$): 
> $$
> f_0 = \frac{m_1 + m_2}{n_1 + n_2} = 0.5467
> $$
> Tiểu chuẩn kiểm định: 
> $$
> Z_{kđ} = \frac{f_1 - f_2}{\sqrt{f_0(1 - f_0)\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}} = \frac{0.65 - 0.464}{\sqrt{0.5467 \cdot (1 - 0.5467) \cdot \left(\frac{1}{100} + \frac{1}{125}\right)}} \approx 2.7850
> $$
> Tính $p$-giá trị:
> $$
> p\text{-value} = 2 \cdot \mathbb{P}(Z \ge 2.7850) = 2 \cdot \left[1 - \Phi(2.7850)\right] \approx 2 \cdot (1 - 0.9973) = 0.0054 \quad (0.54\%) \text{[cite: 1]}
> $$
> Vì $p\text{-value} = 0.0054 < \alpha = 0.02$, do đó ta quyết định bác bỏ giả thuyết $H_0$, chấp nhận giả thuyết đối $H_1$.
> Kết luận: Tỷ lệ ủng hộ của cư dân thành thị cao hơn rõ rệt so với ngoại ô

> [!prob] (Bài tập 16)
> Một bác sĩ dinh dưỡng nghiên cứu một chế độ ăn kiêng và tập thể dục mới để làm giảm lượng đường trong máu của các bệnh nhân bị bệnh tiểu đường.
>
> $10$ bệnh nhân bị bệnh tiểu đường được chọn để thử nghiệm chương trình này. Bảng kết quả bên dưới cho biết lượng đường trong máu trước và sau khi các bệnh nhân tham gia chương trình:
>
> |      | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
> |:----:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
> | Trước | 268 | 225 | 252 | 192 | 307 | 228 | 246 | 298 | 231 | 185 |
> | Sau | 106 | 186 | 223 | 110 | 203 | 101 | 211 | 176 | 194 | 203 |
>
> Số liệu được cung cấp có đủ bằng chứng để kết luận rằng chế độ ăn kiêng và tập thể dục có tác dụng làm giảm lượng đường trong máu hay không?
>
> Sử dụng mức ý nghĩa $\alpha = 5\%$.

> [!ans]
> Đặt biến hiệu số: $D_i = X_i - Y_i$
> 
> Trung bình mẫu của hiệu số ($\bar{d}$): 
> $$
> \bar{d} = \frac{1}{n} \sum_{i=1}^{10} D_i = \frac{719}{10} = 71.9
> $$
> 
> Phương sai mẫu của hiệu số ($s_d^2$):
> $$
> s_d^2 = \frac{1}{n-1} \left( \sum_{i=1}^{10} D_i^2 - n\bar{d}^2 \right) = \frac{1}{9} \left( 80077 - 10 \cdot 71.9^2 \right) \approx 3153.4333
> $$
> Sử dụng thống kê Student cho cặp mẫu:
> $$
> t_{kđ} = \frac{\bar{d}}{s_d / \sqrt{n}} = \frac{71.9}{56.1554 / \sqrt{10}} \approx 4.0489
> $$
> Mức ý nghĩa $\alpha = 0.05 \%$ và bậc tự do $df = 10 -1 = 9 \implies t_{0.05}^{(9)} = 1.833$
> Kiểm định một phía bên phải ($\mu_{D}>0$), miền bác bỏ có dạng: $W_{0.05} = (1.833 \,;\, +\infty)$
>
> Vì giá trị quan sát $t_{kđ} = 4.0489 > 1.833$, chứng tỏ $t_{kđ} \in W_{0.05}$, ta bác bỏ giả thuyết $H_0$ và chấp nhận giả thuyết đối $H_1$
> Kết luận: Chế độ mới có ý nghĩa làm giảm lượng đường trong máu của các bệnh nhân tiểu đường

> [!prob] (Bài tập 17)
> Để tìm ra liệu một loại huyết thanh mới có kiềm hãm được bệnh bạch cầu hay không, $9$ con chuột, tất cả còn trong giai đoạn tiền triển của bệnh, được chọn.
>
> Năm con chuột nhận được trị liệu và $4$ con không. Thời gian sống, theo năm, từ thời điểm thí nghiệm bắt đầu là như sau:
>
> | Nhóm | Dữ liệu |
> |:------|:---------|
> | Trị liệu | 2,1 ; 5,3 ; 1,4 ; 4,6 ; 0,9 |
> | Không trị liệu | 1,9 ; 0,5 ; 2,8 ; 3,1 |
>
> Tại mức ý nghĩa $0{,}05$, huyết thanh có thể được nói là có hiệu quả hay không?
>
> Giả sử hai tổng thể có phân phối chuẩn với các phương sai bằng nhau.

> [!ans]
> Nhóm 1 (Trị liệu): $n_{1} = 5$ gồm giá trị: $2.1; 5.3; 1.4; 4.6; 0.9$
> Trung bình mẫu ${} \bar{x_{1}} {}$:  
> $$
> \bar{x}_1 = \frac{2.1 + 5.3 + 1.4 + 4.6 + 0.9}{5}  = 2.86 \text{ năm}
> $$ 
> Phương sai mẫu $s_{1}^{2}$:
> $$
> s_1^2 = \frac{1}{5-1} \left[ (2.1^2 + 5.3^2 + 1.4^2 + 4.6^2 + 0.9^2) - 5 \cdot 2.86^2 \right] \approx 3.883 \text{ năm}^2
> $$ 
> Nhóm 2 (Không trị liệu): $n_2 = 4$, gồm các giá trị: $1.9; 0.5; 2.8; 3.1$
> Trung bình mẫu ${} \bar{x_{2}} {}$: 
> $$
> \bar{x}_2 = \frac{1.9 + 0.5 + 2.8 + 3.1}{4} = 2.075 \text{ năm}
> $$
> Phương sai mẫu $s_{2}^{2}$:
> $$
> s_2^2 = \frac{1}{4-1} \left[ (1.9^2 + 0.5^2 + 2.8^2 + 3.1^2) - 4 \cdot 2.075^2 \right] \approx 1.3625 \text{ năm}^{2}
> $$
> Phương sai mẫu gộp $s_{p}^{2}$:
> $$
> s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2} = \frac{4 \cdot 3.883 + 3 \cdot 1.3625}{5 + 4 - 2} \approx 2.8028
> $$
> Cặp giả thuyết kiểm định một phía bên phải (thời gian sống trung bình chuột trị liệu ($\mu_1$) kéo dài hơn so với chuột không trị liệu ($\mu_2$).):
> $$
> H_0: p_1 = p_2 \quad \text{vs.} \quad H_1: \mu_{1} > \mu_{2}
> $$
> Tiêu chuẩn kiểm định hai mẫu độc lập cùng phương sai:
> $$
> t_{kđ} =  \frac{\bar{x}_1 - \bar{x}_2}{s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} =\frac{2.86 - 2.075}{1.6742 \cdot \sqrt{\frac{1}{5} + \frac{1}{4}}}  \approx 0.6989
> $$
> Mức ý nghĩa: $\alpha = 0.05$, bậc tự do $df = n_1 + n_2 - 2 = 5 + 4 - 2 = 7 \implies t_{0.05}^{(7)} = 1.895$
> Miền bác bỏ: $W_\alpha = (1.895 \,;\, +\infty)$
> 
> Vì giá trị thống kê kiểm định $t_{kđ} = 0.6989 < 1.895$, $t_{kđ} \notin W_\alpha$ nên nằm trong miền chấp nhận $H_0$
> Kết luận: Chưa đủ bằng chứng khẳng định loại huyết thanh mới này có hiệu quả trong việc kiềm hãm bệnh bạch cầu 


> [!prob] (Bài tập 18)
> Tạp chí Y học New England báo cáo một thử nghiệm để đánh giá hiệu quả của phẫu thuật trên những người được chẩn đoán mắc bệnh $J$.
>
> Một nửa số mẫu ngẫu nhiên của $695$ người trong nghiên cứu đã phẫu thuật ($347$ người), và $18$ người trong số họ cuối cùng đã thiệt mạng vì bệnh $J$.
>
> Trong khi đó, ở nhóm không phẫu thuật gồm $348$ người, có $31$ người thiệt mạng vì bệnh $J$.
>
> Có bằng chứng nào cho thấy rằng phẫu thuật làm giảm tỷ lệ những người thiệt mạng vì bệnh $J$ hay không?
>
> Sử dụng $\alpha = 0{,}05$.
>
> Tính $p$-giá trị.

> [!ans]
> Nhóm 1 (Phẫu thuật): $n_1 = 347$, số người thiệt mạng $m_1 = 18$ $\implies$ Tỷ lệ mẫu $\hat{p}_1 = \frac{18}{347} \approx 0.0519$
> Nhóm 2 (Không phẫu thuật): $n_2 = 348$, số người thiệt mạng $m_2 = 31$ $\implies$ Tỷ lệ mẫu $\hat{p}_2 = \frac{31}{348} \approx 0.0891$
>
> Tỷ lệ mẫu gộp:
> $$
> f_0 = \frac{m_1 + m_2}{n_1 + n_2} = \frac{18 + 31}{347 + 348} \approx 0.0705 
> $$
> 
> Tiêu chuẩn kiểm định:
> $$
> Z_{kđ} = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{f_0(1 - f_0)\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}} = \frac{0.0519 - 0.0891}{\sqrt{0.0705 \cdot (1 - 0.0705) \cdot \left(\frac{1}{347} + \frac{1}{348}\right)}} \approx -1.9156
> $$
> Cặp giải thuyết kiểm định một phía bên trái (tỷ lệ thiệt mạng của nhóm phẫu thuật $p_1$ thấp hơn nhóm không phẫu thuật $p_2$)
> $$
> H_0: p_1 = p_2 \quad \text{vs.} \quad H_1: \mu_{1} > \mu_{2}
> $$
> Tính giá trị $p$-value:
> $$
> p\text{-value} = \mathbb{P}(Z \le -1.9156) = \mathbb{P}(Z \ge 1.9156) = 1 - \Phi(1.9156) \approx 1 - 0.9726 = 0.0274 \quad (2.74\%)
> $$
> Vì $p$-giá trị nhỏ hơn mức ý nghĩa, ta đưa ra quyết định bác bỏ giả thuyết $H_0$, chấp nhận giả thuyết đối $H_1$
> Kết luận: Có bằng chứng khẳng định rằng phương pháp phẫu thuật thực sự có hiệu quả trong việc làm giảm tỷ lệ những người thiệt mạng vì bệnh $J$ 

> [!prob] (Bài tập 19)
> Một loài hoa có $3$ giống $A$, $B$, $C$.
>
> Mỗi giống hoa có thể cho hoa đỏ hoặc hoa trắng. Số liệu thống kê được cho trong bảng sau:
>
> | Màu hoa | A | B | C |
> |:--------|--:|--:|--:|
> | Hoa đỏ | 58 | 102 | 65 |
> | Hoa trắng | 102 | 118 | 75 |
>
> Với mức ý nghĩa $0{,}05$, hãy kiểm định xem đặc tính màu hoa và giống hoa có độc lập nhau hay không.

> [!ans]
> Tính tần số: 
> $E_{11} (\text{Đỏ, A}) = \frac{225 \times 160}{520} \approx 69.2308$
> $E_{12} (\text{Đỏ, B}) = \frac{225 \times 220}{520} \approx 95.1923$ 
> $E_{13} (\text{Đỏ, C}) = \frac{225 \times 140}{520} \approx 60.5769$  
> $E_{21} (\text{Trắng, A}) = \frac{295 \times 160}{520} \approx 90.7692$ 
> $E_{22} (\text{Trắng, B}) = \frac{295 \times 220}{520} \approx 124.8077$
> $E_{23} (\text{Trắng, C}) = \frac{295 \times 140}{520} \approx 79.4231$
> 
> Cặp giả thuyết kiểm định độc lập: 
> $H_0$: Đặc tính màu hoa và giống hoa độc lập với nhau
> $H_1$: Đặc tính màu hoa và giống hoa có mối liên hệ chéo
>
> Tiêu chuẩn kiểm định độc lập:
> $$
> \begin{align}
> \chi^2_{kđ} = \sum_{i=1}^{2} \sum_{j=1}^{3} \frac{(O_{ij} - E_{ij})^2}{E_{ij}}  = \frac{(58 - 69.2308)^2}{69.2308} + \frac{(102 - 95.1923)^2}{95.1923} + \frac{(65 - 60.5769)^2}{60.5769}  \\
> + \frac{(102 - 90.7692)^2}{90.7692} + \frac{(118 - 124.8077)^2}{124.8077} + \frac{(75 - 79.4231)^2}{79.4231} \approx 4.6392
> \end{align}
> $$
> Mức ý nghĩa: $\alpha = 0.05$, số hàng $r = 2$, số cột $c = 3$, bậc tự do: $df = (r - 1)(c - 1) = (2 - 1)(3 - 1) = 2 \implies \chi^2_{0.05}(2) = 5.991$
> Miền bác bỏ có dạng: $W_\alpha = (5.991 \,;\, +\infty)$
> 
> Vì $\chi^2_{kđ} = 4.6392 < 5.991$. Do đó, $\chi^2_{kđ} \notin W_\alpha$ (nằm ngoài miền bác bỏ) nên chưa đủ cơ sở để bác bỏ giả thuyết $H_0$
> Kết luận: chưa đủ bằng chứng kết luận rằng đặc tính màu hoa và giống hoa độc lập với nhau

> [!prob] (Bài tập 20)
> Một công ty điện lực ở thành phố $A$ thực hiện khảo sát lượng điện tiêu thụ của $14$ ngày trong mùa hè, với mục đích tìm mối liên hệ giữa nhiệt độ trong một ngày mùa hè ($X$ – đơn vị: $^\circ F$) với lượng điện tiêu thụ ($Y$ – đơn vị: mKW).
>
> Cho biết:
>
> $$
> \sum_{i=1}^{14} x_i = 1196;\qquad
> \sum_{i=1}^{14} x_i^2 = 102674;\qquad
> \sum_{i=1}^{14} x_i y_i = 27365;
> $$
>
> $$
> \sum_{i=1}^{14} y_i = 319.1;\qquad
> \sum_{i=1}^{14} y_i^2 = 7301.29.
> $$
>
> (a) Tìm khoảng tin cậy $99\%$ lượng điện tiêu thụ trung bình của thành phố $A$ trong một ngày mùa hè.
>
> Biết rằng lượng điện tiêu thụ $Y$ tuân theo phân phối chuẩn.
>
> (b) Khảo sát lượng điện tiêu thụ $Z$ trong $16$ ngày mùa hè cùng năm ở thành phố $B$, tính được:
>
> $\bar{z} = 26.25$ (mKW);
> $s_z = 1.62$.
>
> Có thể khẳng định rằng lượng điện tiêu thụ của hai thành phố trong mùa hè là như nhau hay không, giả sử phương sai hai tổng thể bằng nhau?
>
> $(\alpha = 0.01)$
>
> Các câu hỏi sau liên quan đến lượng điện tiêu thụ ở thành phố $A$.
>
> (c) Tìm đường thẳng hồi quy ước lượng biểu diễn lượng điện tiêu thụ theo nhiệt độ.
>
> (d) Tính hệ số xác định $R^2$ và hệ số tương quan mẫu $r_{xy}$.
>
> Nhận xét về mối liên hệ giữa nhiệt độ ngày hè và lượng điện tiêu thụ.
>
> (e) Với mức ý nghĩa $5\%$, hãy kiểm định giả thuyết rằng nếu nhiệt độ tăng lên $1^\circ F$ thì lượng điện tiêu thụ sẽ tăng ít hơn $0.3$ (mKW).
>
> (f) Tìm khoảng tin cậy $96\%$ cho các hệ số $\beta_0$ và $\beta_1$ của đường thẳng hồi quy.
>
> (g) Kiểm định ý nghĩa của mô hình hồi quy tuyến tính đơn với mức ý nghĩa $2\%$.

> [!ans]
> a)
> Số liệu mẫu thành phố $A$: $n_Y = 14$; $\sum y_i = 319.1$; $\sum y_i^2 = 7301.29$
> 
> Trung bình mẫu: $\bar{y} = \frac{319.1}{14} \approx 22.7929\text{ mKW}$
> 
> Phương sai mẫu: 
> $$
> s_Y^2 = \frac{1}{n_{Y} -1}\left( \sum _{i} y_{i}^{2}- n \cdot \bar{y} \right) = \frac{1}{14-1}\left(7301.29 - 14 \cdot 22.7929^2\right)  \approx 2.1609
> $$
> Độ tin cậy: $1 - \alpha = 0.99 \implies \alpha/2 = 0.005$, bậc tự do ${} df = 13 \implies t_{0.005}^{(13)} = 3.012$
> 
> Dung sai:
> $$
> \epsilon = t_{0.005}^{(13)} \cdot \frac{s_Y}{\sqrt{n_Y}} = 3.012 \cdot \frac{1.4700}{\sqrt{14}} \approx 1.1834\text{ mKW}
> $$
> Khoảng tin cậy $99\%$ cho $\mu_Y$ là:
> $$
> [\bar{y} - \varepsilon \,;\, \bar{y} + \varepsilon ] = [22.7929 - 1.1834 \,;\, 22.7929 + 1.1834]\text{ mKW}
> $$
> 
> b)
> Số liệu mẫu thành phố $B$: $n_Z = 16$; $\bar{z} = 26.25$; $s_z = 1.62 \implies s_z^2 = 2.6244$.
> 
> Cặp giả thuyết (ước lượng trung bình khác nhau): $$H_0: \mu_1 = \mu_2 \quad \text{vs.} \quad H_1: \mu_1 \neq \mu_2 $$
> 
> Tính phương sai mẫu chung:
> $$
> s_p^2 = \frac{(n_Y - 1)s_Y^2 + (n_Z - 1)s_Z^2}{n_Y + n_Z - 2} = \frac{(14-1)\cdot 2.1609 + (16-1)\cdot 2.6244}{14 + 16 - 2} \approx 1.5522
> $$
> Sử dụng thống kê Student cho hai mẫu độc lập có phương sai bằng nhau:
> $$
> t_{kđ} = \frac{\bar{y} - \bar{z}}{s_p \sqrt{\frac{1}{n_Y} + \frac{1}{n_Z}}} = \frac{22.7929 - 26.25}{1.5522 \cdot \sqrt{\frac{1}{14} + \frac{1}{16}}} = \frac{-3.4571}{1.5522 \cdot 0.3659} = \frac{-3.4571}{0.5679} \approx -6.0875
> $$
> 
> Mức ý nghĩa $\alpha = 0.01$, bậc tự do:  $df = 14 + 16 - 2 = 28 \implies t_{0.005}^{(28)} = 2.763$
> Miền bác bỏ: $W_\alpha = (-\infty \,;\, -2.763) \cup (2.763 \,;\, +\infty)$.
> 
> Vì $\vert{}t_{kđ}\vert{} = 6.0875 > 2.763 \implies t_{kđ} \in W_\alpha$. Ta không đủ bằng chức bác bỏ $H_0$.
> Kết luận: Lượng điện tiêu thụ mùa hè ở hai thành phố có sự khác biệt ở mức ý nghĩa $1\%$
> 
> c)
> Tính các đại lương cho bình phương cực tiểu:
> $\bar{x} = \frac{1196}{14} \approx 85.4286$; $\quad \bar{y} = \frac{319.1}{14} \approx 22.7929$.
> $S_{xx} = \sum x_i^2 - n_Y\bar{x}^2 = 102674 - 14 \cdot 85.4286^2 = 102674 - 102172.5714 = 501.4286$. 
> $S_{yy} = SST = \sum y_i^2 - n_Y\bar{y}^2 = 7301.29 - 14 \cdot 22.7929^2 = 7301.29 - 7273.1979 = 28.0921$.
> $S_{xy} = \sum x_iy_i - n_Y\bar{x}\bar{y} = 27365 - 14 \cdot 85.4286 \cdot 22.7929 = 27365 - 27260.2286 = 104.7714$.
> 
> Hệ số góc góc $\hat{\beta}_1$:
> $$
> \hat{\beta}_1 = \frac{S_{xy}}{S_{xx}} = \frac{104.7714}{501.4286} \approx 0.2089
> $$
> Hệ số chặn $\hat{\beta}_0$:
> $$
> \hat{\beta}_0 = \bar{y} - \hat{\beta}_1\bar{x} = 22.7929 - 0.2089 \cdot 85.4286 = 4.9469
> $$
> Vậy đường thẳng hồi quy cần tìm là:
> $$
> \hat{Y} = 4.9469 + 0.2089X
> $$
> 
> d)
> Hệ số tương quan mẫu ($r_{xy}$):
> $$
> r_{xy} = \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}} = \frac{104.7714}{\sqrt{501.4286 \cdot 28.0921}} \approx 0.8828 
> $$
> Hệ số xác định ($R^2$): Vì đây là mô hình hồi quy đơn nên $R^2 = r_{xy}^2 = 0.8828^2 \approx 0.7793$ ($77.93\%$)
> 
> Do $r_{xy} = 0.8828 > 0$ và gần $1$, nhiệt độ ngày hè và lượng điện tiêu thụ có mối liên hệ tương quan tuyến tính mạnh
> 
> Giá trị $R^2 = 77.93\%$ cho biết sự biến thiên của nhiệt độ ngày hè có thể giải thích được tới $77.93\%$ sự biến động trong lượng điện tiêu thụ của thành phố
>
> e)
> Cặp giả thuyết kiểm định hệ số góc (kiểm định một phía bên trái):
> $$
>H_0: \beta_1 = 0.3 \quad \text{vs.} \quad H_1: \beta_1 < 0.3
> $$
> 
> Sai số chuẩn của $\hat{\beta}_1$:
> $$
> SE(\hat{\beta}_1) = \frac{s}{\sqrt{S_{xx}}} = \frac{0.7191}{\sqrt{501.4286}} \approx 0.0321
> $$
> Tiêu chuẩn kiểm định:
> $$
> t_{kđ} = \frac{\hat{\beta}_1 - 0.3}{SE(\hat{\beta}_1)} = \frac{0.2089 - 0.3}{0.0321} \approx -2.8380
> $$
> Mức ý nghĩa $\alpha = 0.05$, bậc tự do $df = 14 - 2 = 1 \implies-t_{0.05}^{(12)} = -1.782$.
> Miền bác bỏ: $W_\alpha = (-\infty \,;\, -1.782)$
> 
> Vì $t_{kđ} = -2.8380 < -1.782 \implies t_{kđ} \in W_\alpha$ nên ta bác bỏ $H_0$
> Kết luận: Đủ bằng chứng thống kê để khẳng định rằng khi nhiệt độ tăng thêm $1^\circ F$ thì lượng điện tăng lên ít hơn $0.3\text{ mKW}$
> 
> f)
> Độ tin cậy $96\%  \implies \alpha/2 = 0.02$, bậc tự do $df = 12 \implies t_{0.02}^{(12)} = 2.303$.
> 
> Dung sai ${} \epsilon_{1}$:
> $$
> \epsilon_1 = t_{0.02}^{(12)} \cdot SE(\hat{\beta}_1) = 2.303 \cdot 0.0321 \approx 0.0739
> $$
> Khoảng tin cậy cho $\beta_{1}$:
> $$
> \left[ \beta_{1}+ t_{\frac{\alpha}{2}}^{n-2} ; \beta_{1} -t_{\frac{\alpha}{2}}^{n-2}  \right] = [0.2089 - 0.0739 \,;\, 0.2089 + 0.0739]
> $$
> Sai số chuẩn của $\beta_{0}$:
> $$
> SE(\hat{\beta}_0) = s\sqrt{\frac{1}{n} + \frac{\bar{x}^2}{S_{xx}}} = 0.7191 \cdot \sqrt{\frac{1}{14} + \frac{85.4286^2}{501.4286}} \approx 2.7501
> $$
> Dung sai $\epsilon_{0}$:
> $$
> \epsilon_0 = t_{0.02}^{(12)} \cdot SE(\hat{\beta}_0) = 2.303 \cdot 2.7501 \approx 6.3335
> $$
> Khoảng tin cậy cho $\beta_{0}$:
> $$
> \left[ \beta_{0}+ t_{\frac{\alpha}{2}}^{n-2} ; \beta_{0} -t_{\frac{\alpha}{2}}^{n-2}  \right] = [4.9469 - 6.3335 \,;\, 4.9469 + 6.3335] 
> $$
> 
> g)
> Cặp giả thuyết kiểm định ý nghĩa $\beta_{1}$:
> $H_0: \beta_1 = 0$ (Mô hình không có ý nghĩa)
> $H_1: \beta_1 \neq 0$ (Mô hình có ý nghĩa)
>
> Tiêu chuẩn kiểm định:
> $$
> t_{kđ} = \frac{\hat{\beta}_1 - 0}{SE(\hat{\beta}_1)} = \frac{0.2089}{0.0321} \approx 6.5078 
> $$
> Mức ý nghĩa $\alpha = 0.02 \implies \alpha/2 = 0.01$, bậc tự do $df = 12 \implies t_{0.01}^{(12)} = 2.681$
> Miền bác bỏ hai phía: $W_\alpha = (-\infty \,;\, -2.681) \cup (2.681 \,;\, +\infty)$
>
> Vì $\vert{}t_{kđ}\vert{} = 6.5078 > 2.681 \implies t_{kđ} \in W_\alpha$ nên ta bác bỏ $H_0$
> Kết luận: Mô hình hồi quy tuyến tính đơn giữa nhiệt độ và lượng điện tiêu thụ có ý nghĩa thống kê cực cao ở mức ý nghĩa $2\%$

> [!prob] (Bài tập 21)
> Trong cấu tạo một loại dây thừng, người ta quan tâm đến hàm lượng nylon (đơn vị: %) ảnh hưởng như thế nào đến lực căng (đơn vị: psi) (lực kéo tối đa trước khi sợi dây bị đứt).
>
> Số liệu bên dưới cho kết quả đo tương ứng của $8$ sợi dây:
>
> | Hàm lượng nylon (%) | 0 | 10 | 20 | 20 | 30 | 40 | 50 | 50 |
> |:-------------------:|--:|---:|---:|---:|---:|---:|---:|---:|
> | Lực căng (psi) | 160 | 240 | 320 | 340 | 395 | 450 | 510 | 520 |
>
> (a) Tìm phương trình hồi quy tuyến tính đơn biểu diễn mối liên hệ của lực căng theo hàm lượng nylon trong loại dây thừng này.
>
> (b) Dự đoán lực căng của một sợi dây có hàm lượng nylon bằng $45$.
>
> (c) Tính hệ số xác định $R^2$ và hệ số tương quan mẫu $r_{xy}$.
>
> Nhận xét về mối liên hệ giữa hàm lượng nylon và lực căng của dây thừng.

> [!ans]
> Tính đại lượng bình phương cực tiểu:
> $S_{xx} = \sum x_i^2 - n\bar{x}^2 = 8300 - 8 \times 27.5^2 = \mathbf{2250}$
> $S_{yy} = \sum y_i^2 - n\bar{y}^2 = 1190425 - 8 \times 366.875^2 = \mathbf{113221.875}$
> $S_{xy} = \sum x_iy_i - n\bar{x}\bar{y} = 96450 - 8 \times 27.5 \times 366.875 = \mathbf{15737.5}$
> 
> a)
> Tính hệ số góc $\beta_{1}$:
> $$
> \hat{\beta}_1 = \frac{S_{xy}}{S_{xx}} = \frac{15737.5}{2250} \approx \mathbf{6.9944}
> $$
> Tính hệ số chặn $\beta_{0}$:
> $$
> \hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x} = 366.875 - 6.9944 \times 27.5 \approx \mathbf{174.5278}
> $$
>Vậy phương trình hồi quy tuyến tính đơn cần tìm là:
>$$
>\hat{Y} = 174.5278 + 6.9944X
>$$
> 
> b)
> hay giá trị hàm lượng nylon $X = 45\%$ vào phương trình hồi quy:
> $$
> \hat{Y} = 174.5278 + 6.9944 \times 45 \approx \mathbf{489.2778} \text{ psi}
> $$
> c)
> Hệ số tương quan mẫu ($r_{xy}$):
> $$
> r_{xy} = \frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}} = \frac{15737.5}{\sqrt{2250 \times 113221.875}} \approx \mathbf{0.9860}
> $$
> Hệ số xác định $R^{2}$:
> $$
> R^2 = r_{xy}^{2} =(0.9860)^2 \approx \mathbf{0.9722} \quad (\text{hay } 97.22\%)
> $$
> Vì hệ số tương quan $r_{xy} = 0.9860 > 0$ và rất tiến sát về $1$, nên giữa hàm lượng nylon và lực căng của dây thừng có mối quan hệ tuyến tính thuận (đồng biến)
> Hệ số xác định $R^2 = 97.22\%$ chỉ ra rằng mô hình hồi quy tuyến tính đơn  giải thích được tới $97.22\%$ sự biến động, chỉ có $2.78\%$ sự biến động còn lại là do sai số ngẫu nhiên hoặc các yếu tố khác









$\xi$
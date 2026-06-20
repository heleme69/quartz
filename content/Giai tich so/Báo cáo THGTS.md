```dataviewjs
// ╔══════════════════════════════════════════════════════════╗
//   GLOBAL CONFIG - TÙY CHỈNH THÔNG TIN TIỂU LUẬN
// ╚══════════════════════════════════════════════════════════╝
const CONFIG = {
  // --- TÍNH NĂNG BẬT/TẮT (true: Hiện, false: Ẩn) ---
  showCover:          true,   // true = có trang bìa (trang 1)
  showTitlePage:      true,   // true = có trang tiêu đề phụ (trang 2)
  showTOC:            true,   // true = có mục lục
  showCalloutBorder:  true,   // false = ẩn viền tất cả math callout (math-framed)

  // 1. Thông tin chung
  truong:       "Đại học Quốc gia Thành phố Hồ Chí Minh\nTrường Đại học Khoa học Tự nhiên",
  khoa:         "Khoa Toán – Tin học",
  monHoc:       "",
  loaiBai:      "",
  tenDeTai:     "Báo cáo môn Thực Hành Giải tích số",
  nganh:        "Toán học",
  chuyenNganh:  "Giải tích số",
  giangVien:    "Lê Tạ Huỳnh Như",

  // 2. Thông tin sinh viên
  sinhVien: [
    { ten: "Huy", mssv: "24110022" }
  ],

  // 3. Thời gian & Địa điểm
  diaDiem:   "Thành phố Hồ Chí Minh",
  ngayThang: "",

  // 4. Đường dẫn Logo
  logoPath:  "A_template/logo.png",

  // 5. Cấu hình Title Page
  titlePage: {
    titleLine: "Báo cáo môn Thực Hành Giải tích số",
    authors:   ["Huy - MSSV: 24110022"],
  },

  // 6. Cấu hình Mục lục
  tocHeading: "Mục Lục",
  toc: [
    { level: 1, num: "1", title: "Tuần 4", page: 6 },
    { level: 1, num: "2", title: "Tuần 5", page: 11 },
    { level: 1, num: "3", title: "Tuần 6", page: 17 },
    { level: 1, num: "4", title: "Tuần 7", page: 23 },
    { level: 1, num: "5", title: "Tuần 8", page: 30 },
    { level: 1, num: "6", title: "Tuần 10", page: 40 },
    { level: 1, num: "7", title: "Tuần 11", page: 48 },
    { level: 1, num: "8", title: "Tuần 12", page: 53 },
  ],
};
// ╚══════════════════════════════════════════════════════════╝

// --- XỬ LÝ DỮ LIỆU ĐẦU VÀO ---
const logoFile = app.vault.getAbstractFileByPath(CONFIG.logoPath);
const logoSrc  = logoFile ? app.vault.getResourcePath(logoFile) : "";
const logoHtml = logoSrc
  ? `<img src="${logoSrc}" alt="Logo" />`
  : `<div style="height: 100px;">(Không tìm thấy Logo)</div>`;

let dateStr = CONFIG.ngayThang;
if (!dateStr) {
  const dd = moment().format("DD");
  const mm = moment().format("MM");
  const yy = moment().format("YYYY");
  dateStr = `ngày ${dd} tháng ${mm} năm ${yy}`;
}

const svRows = CONFIG.sinhVien.map((sv, i) => `
  <tr>
    <td class="lbl">${i === 0 ? "Sinh viên:" : ""}</td>
    <td>${sv.ten} <span style="display:inline-block; width:1.5em;"></span> <b>MSSV:</b> ${sv.mssv}</td>
  </tr>
`).join("");

function buildTocRows(entries) {
  return entries.map(e => `
    <tr class="toc-l${e.level}">
      <td class="toc-num">${e.num}</td>
      <td class="toc-title">${e.title}</td>
      <td class="toc-dots"></td>
      <td class="toc-pgnum">${e.page}</td>
    </tr>
  `).join("");
}

// --- RENDER GIAO DIỆN THEO ĐIỀU KIỆN BẬT/TẮT ---

// Override CSS: tắt viền callout nếu showCalloutBorder = false
const calloutBorderStyle = CONFIG.showCalloutBorder ? "" : `
<style>
  :root {
    --math-border-width: 0px;
    --math-border-radius: 0px;
    --math-padding: 0;
    --math-margin: var(--ac-space-lg) 0;
  }
</style>
`;

let finalHTML = calloutBorderStyle;

// 1. KHỐI TRANG BÌA CHÍNH
if (CONFIG.showCover) {
  finalHTML += `
    <div class="my-cover">
      <div class="my-cover-inner">
        <div class="cover-header">
          <div class="cover-university">${CONFIG.truong.replace(/\n/g, "<br>")}</div>
          <div class="cover-faculty">${CONFIG.khoa}</div>
        </div>
        <div class="cover-logo">${logoHtml}</div>
        <div class="cover-title-block">
          <div class="cover-subtitle">${CONFIG.loaiBai}<br>${CONFIG.monHoc}</div>
          <div class="cover-main-title">${CONFIG.tenDeTai}</div>
        </div>
        <div class="cover-info-block">
          <div class="cover-major"><b>Ngành:</b> ${CONFIG.nganh}<br><b>Chuyên ngành:</b> ${CONFIG.chuyenNganh}</div>
          <table class="cover-info-table">
            <tr><td class="lbl">Giảng viên:</td><td>${CONFIG.giangVien}</td></tr>
            ${svRows}
          </table>
        </div>
        <div class="cover-date">${CONFIG.diaDiem}, ${dateStr}</div>
      </div>
    </div>
  `;
}

// Chèn trang trắng phân cách nếu có Cover VÀ có ít nhất 1 trang phía sau
if (CONFIG.showCover && (CONFIG.showTitlePage || CONFIG.showTOC)) {
  finalHTML += `<div class="page-blank"></div>`;
}

// 2. KHỐI TRANG PHỤ BÌA (Title Page)
if (CONFIG.showTitlePage) {
  finalHTML += `
    <div class="title-page">
      <div class="title-page-inner">
        <p class="tp-title">${CONFIG.titlePage.titleLine}</p>
        <p class="tp-authors">${CONFIG.titlePage.authors.join("<br>")}</p>
        <p class="tp-date">${CONFIG.diaDiem}, ${dateStr}</p>
      </div>
    </div>
  `;
}

// Chèn trang trắng giữa Title Page và Mục lục (nếu cả 2 đều được bật)
if (CONFIG.showTitlePage && CONFIG.showTOC) {
  finalHTML += `<div class="page-blank"></div>`;
}

// 3. KHỐI MỤC LỤC
if (CONFIG.showTOC) {
  finalHTML += `
    <div class="toc-section">
      <p class="toc-heading">${CONFIG.tocHeading}</p>
      <table class="toc-table">
        ${buildTocRows(CONFIG.toc)}
      </table>
    </div>
  `;
}

// Đổ toàn bộ kết quả ra giao diện
this.container.innerHTML = finalHTML;
```

# Tuần 4

> [!exr]
> Sử dụng đa thức Taylor tại $\frac{\pi}{4}$ để xấp xỉ $\cos(42^{\circ})$ đến độ chính xác $10^{-6}$.

> [!sol] 
> - Xét hàm số $f(x) = \cos(x)$. Ta cần xấp xỉ giá trị của hàm tại điểm $x = 42^{\circ}$. Chuyển sang radian:
> 	- Điểm cần xấp xỉ: $x = 42^{\circ} = \frac{7\pi}{30}$.
> 	- Điểm khai triển: $a = \frac{\pi}{4}$.
> 	- Bước nhảy: ${} h = x - a = -\frac{\pi}{60}$.
> - Ta có phần dư lagrange: $$R_{n}(x) = \frac{f^{n+1}(c)}{(n+1)!}(x-1)^{n+1}$$, với $c$ nằm giữa ${} \frac{\pi}{4}$ và $\frac{7\pi}{30}$.
> - Ta có $\lvert f^{n+1}(c) \rvert \le 1$, nên để đạt độ chính xác $10^{-6}$, ta cần giải bất phương trình:
> $$|R_n(x)| \le \frac{1}{(n+1)!} \left| -\frac{\pi}{60} \right|^{n+1} \le 10^{-6}$$
> - Ta thấy $n = 3$ có $|R_3| \le \frac{1}{4!} \left(\frac{\pi}{60}\right)^4 \approx 3.13 \times 10^{-7} \le 10^{-6}$ (Thỏa mãn)
> - Đa thức Taylor bậc 3 theo biến $h$ tại $a = \frac{\pi}{4}$: 
>   $$
>  P_3(a+h) = f(a) + f'(a)h + \frac{f''(a)}{2}h^2 + \frac{f'''(a)}{6}h^3
>  $$
> - Tính các đạo hàm tại $a = \frac{\pi}{4}$:
> 	- $f(a) = f'''(a) = \frac{\sqrt{2}}{2}$ 
> 	- $f'(a) = f''(a) = -\frac{\sqrt{2}}{2}$. 
> Rút gọn biểu thức: $$ \begin{aligned} P_3(x) &= \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}h - \frac{\sqrt{2}}{4}h^2 + \frac{\sqrt{2}}{12}h^3 \\ &= \frac{\sqrt{2}}{2} \left( 1 - h - \frac{h^2}{2} + \frac{h^3}{6} \right) \end{aligned} $$
> Thay $h = - \frac{\pi}{60}$:
> Kết luận: $\cos(42^{\circ}) \approx 0.743145$

> [!exr] 
> Xét $f(x) = \cos(x)$, ${} \cos(0.01) ≈ P_{2}(0.01)$,  $\cos(0.01) ≈ P_{3}(0.01)$ lấy 8 chữ số thập phân trong phần tính toán.
> Tính sai số tuyệt đối, sai số tương đối, chặn trên nhỏ nhất của sai số chặt cụt, tìm $n$ sao cho $< 10 ^{-10}$.
> Vẽ hình $P_{n}(x)$ và ${} f(x)$ với $n$ tìm được, so sánh ${} f(x)$ bằng *Matlab*.

> [!sol]
> 1. Tính toán
> 	- Đa thức Taylor bậc 2 theo biến $x$: $$P_2(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2$$
> 	- Tính các đạo hàm tại x = 0, ta được: $$P_2(x) = 1 - \frac{x^2}{2}$$
> 	- Tương tự: $$P_3(x) = 1 - \frac{x^2}{2}$$
> 	- Thay $x = 0.01$, lấy 8 chữ số thập phân trong tính toán:
> 	$$P_2(0.01) = P_3(0.01) = 1 - \frac{0.0001}{2} = 1 - 0.00005000 = 0.99995000$$
> 	- Sai số tuyệt đối: $$\Delta p = |0.999950000416665 - 0.99995000| \approx 4.16665 \times 10^{-10}$$
> 	- Sai số tương đối: $$\delta p = \frac{4.16665 \times 10^{-10}}{0.999950000416665} \approx 4.16686 \times 10^{-10}$$
> 	  
> 2. Tìm chặn trên nhỏ nhất của sai số chặt cụt: 
> 	- Đối với $P_{2}(0.01)$: $$R_2(0.01) = \frac{f'''(c)}{3!}(0.01)^3 = \frac{\sin(c)}{6} \times 10^{-6}$$, với $c \in (0, 0.01)$.
> 	- Trên đoạn $[0, 0.01]$, hàm $\sin(x)$ đồng biến, giá trị lớn nhất đạt được tại $c = 0.01$:  $|R_2| \le \frac{\sin(0.01)}{6} \times 10^{-6} \approx \frac{0.00999983}{6} \times 10^{-6} \approx 1.666639 \times 10^{-9}$.
> 	- Đối với $P_{3}(0,01)$: $$R_3(0.01) = \frac{f^{(4)}(c)}{4!}(0.01)^4 = \frac{\cos(c)}{24} \times 10^{-8}$$
> 	Trên đoạn $[0, 0.01]$, hàm $\cos(x)$ nghịch biến, giá trị lớn nhất đạt được tại $c = 0$: $|R_3| \le \frac{\cos(0)}{24} \times 10^{-8} = \frac{1}{24} \times 10^{-8} \approx 4.16666667 \times 10^{-10}$.
> 	
> 3. Tìm $n$ sao cho sai số $< 10^{-10}$:
> 	- Ta có $|f^{(n+1)}(c)| \le 1$ (đạo hàm $\sin$, $\cos$ bị chặn):
> 	$$|R_n| \le \frac{1}{(n+1)!}(0.01)^{n+1} < 10^{-10}$$
> 	- Thử các giá trị của $n$:
> 		- Với $n=3$: $|R_3| \le \frac{1}{24} \times 10^{-8} \approx 4.16 \times 10^{-10}$ (Chưa nhỏ hơn $10^{-10}$)
> 		- Với $n=4$: $|R_4| \le \frac{1}{120} \times (0.01)^5 = \frac{1}{120} \times 10^{-10} \approx 0.00833 \times 10^{-10} < 10^{-10}$ (Thỏa mãn)
> 	- Vậy, để đảm bảo sai số chặt cụt nhỏ hơn $10^{-10}$, ta cần chọn **$n = 4$**.
> 
> 4. Code
> > [!code]- Matlab
> > ```matlab
> > % Du lieu khoang chia
> >  x = linspace(-pi/2, pi/2, 1000);
> >  % Co so da thuc Maclaurin bac 4
> >  f_x = cos(x);
> >  P4_x = 1 - x.^2/2 + x.^4/24;
> >  % Tinh sai so tuyet doi
> >  error = abs(f_x - P4_x);
> >  
> >  figure;
> >  % Ve do thi so sanh hai ham so
> >  subplot(2,1,1);
> >  plot(x, f_x, 'b-', 'LineWidth', 1.5); hold on;
> >  plot(x, P4_x, 'r--', 'LineWidth', 1.5);
> >  title('So sánh f(x) = cos(x) và P_4(x)');
> >  legend('cos(x)', 'P_4(x)', 'Location', 'best');
> >  xlabel('x'); ylabel('y');
> >  grid on;
> >  % Ve do thi sai so
> >  subplot(2,1,2);
> >  plot(x, error, 'k', 'LineWidth', 1.5);
> >  title('Sai số tuyệt đối |cos(x) - P_4(x)|');
> >  xlabel('x'); ylabel('Sai số');
> >  grid on;
> > ```
> 
> ![[THGTS_Tuần 4 - Bài 1.webp]]

> [!exr] 
> Xây dựng đa thức taylor tại $x_{0} = 0$ để xấp xỉ $f(x) = \frac{1}{x+1}$ đến độ chính xác $10^{-3}$, với $x \in \left[ -\frac{1}{2}, \frac{1}{2} \right]$.

> [!sol]
> 1. Khai triển Taylor (Maclaurin):
> 	- Ta tính các đạo hàm:
> 		- $f'(x) = -1(x+1)^{-2}$
> 		- $f''(x) = 2(x+1)^{-3}$
> 		- $f'''(x) = -6(x+1)^{-4}$
> 		$\implies f^{(k)}(x) = (-1)^k \cdot k! \cdot (x+1)^{-(k+1)}$
> 	- Tại $x_0 = 0$: $f^{(k)}(0) = (-1)^k \cdot k!$.
> 	- Hệ số của đa thức Taylor: $c_k = \frac{f^{(k)}(0)}{k!} = (-1)^k$.
> 	- Vậy đa thức Taylor bậc $n$:
> 	$$P_n(x) = \sum_{k=0}^n (-1)^k x^k = 1 - x + x^2 - x^3 + \dots + (-1)^n x^n$$
> 	- Nhận xét: đây là tổng của $n+1$ số hạng đầu tiên trong một cấp số nhân với công bội $q = -x$).
> 
> 2. Đánh giá sai số (Phần dư)
> 	- Ta dùng trực tiếp tổng cấp số nhân để tìm phần dư chính xác $R_n(x)$:
> 		$$P_n(x) = \frac{1 - (-x)^{n+1}}{1 - (-x)} = \frac{1 - (-x)^{n+1}}{1 + x}$$
> 	- Sai số khi xấp xỉ:
> 	  $$R_n(x) = f(x) - P_n(x) = \frac{1}{x+1} - \frac{1 - (-x)^{n+1}}{x+1} = \frac{(-x)^{n+1}}{x+1}$$
> 	- Để có độ chính xác $10^{-3}$ trên đoạn $x \in [-1/2, 1/2]$, ta cần tìm $n$ sao cho:
> 	  $$|R_n(x)| = \frac{|x|^{n+1}}{|x+1|} \le 10^{-3} \quad \forall x \in \left[-\frac{1}{2}, \frac{1}{2}\right]$$
> 
> 3. Tìm giá trị lớn nhất của sai số
> 	- Ta cần tìm giá trị lớn nhất của $g(x) = \frac{|x|^{n+1}}{|x+1|}$ trên đoạn $\left[-\frac{1}{2}, \frac{1}{2}\right]$.
> 	- Để $g(x)$ đạt giá trị lớn nhất, ta cần tử số lớn nhất và mẫu số nhỏ nhất:
> 		- Tử số: Trên đoạn $\left[-\frac{1}{2}, \frac{1}{2}\right]$, ta luôn có $|x| \le \frac{1}{2} \implies |x|^{n+1} \le \left(\frac{1}{2}\right)^{n+1}$
> 		- Mẫu số: Vì $x \ge -\frac{1}{2} \implies x + 1 \ge \frac{1}{2} \implies \frac{1}{|x+1|} \le \frac{1}{1/2} = 2$
> 	- Nhân hai bất đẳng thức trên (do các vế đều dương):
> 	  $$g(x) \le \left(\frac{1}{2}\right)^{n+1} \cdot 2 = \frac{1}{2^n}$$
> 	- Dấu "=" xảy ra khi tử đạt max và mẫu đạt min cùng lúc: $x = -1/2$.
> 	  Vậy sai số tuyệt đối lớn nhất trên toàn miền là $\frac{1}{2^n}$.
>
> 4. Xác định bậc $n$
> 	- Để thỏa mãn yêu cầu đề bài:
> 	$$\max |R_n(x)| = \frac{1}{2^n} \le 10^{-3}$$
> 	$$\implies 2^n \ge 1000$$
> 	- Ta biết $2^9 = 512$ và $2^{10} = 1024$. Do đó, số nguyên $n$ nhỏ nhất thỏa mãn: $n = 10$.
> 	 - Vậy đa thức Taylor cần tìm là đa thức bậc 10:
> 	 $$P_{10}(x) = 1 - x + x^2 - x^3 + x^4 - x^5 + x^6 - x^7 + x^8 - x^9 + x^{10}$$

> [!exr] 
> Giả sử $p ^{*}$ xấp xỉ $p$ với sai số tương đối nhiều nhất $\alpha = 10 ^{-4}$. Tìm khoảng lớn nhất mà $p ^{*}$ nằm trong với mỗi giá trị của $p$. Với $p = \pi$ và $p = e$. 

> [!sol]
> - Theo định nghĩa sai số tương đối: 
> $$
> \delta_{p} = \frac{\lvert p - p ^{*}\rvert}{\lvert p \rvert } \le 10 ^{-4}  
> $$
> - Vì $p = \pi$ và $p = e$ đều dương: $\lvert p ^{*} - p \rvert \le 10 ^{-4}.p$,
>   tương đương: $p(1-10^{-4}) \le p ^{*} \le p(1 + 10^{-4})$.
> 	- Thay $p = \pi$: $$3.141278 \le p^* \le 3.141907$$
> 	- Thay $p = e$: $$2.718010 \le p^* \le 2.718554$$

# Tuần 5

> [!exr]
> Xác định một đa thức có bậc ≤ 3 để nội suy dữ liệu:
> 
> $$
> \def\arraystretch{1.5}
> \begin{array}{|c|c|c|c|c|}
> \hline
> x & 1.2 & 2.1 & 3.0 & 3.6 \\
> \hline
> y & 0.7 & 8.1 & 27.7 & 45.1 \\
> \hline
> \end{array}
> $$

> [!sol] 
> 1. Tính cơ sở đa thức Newton:
> 
> $$
> \def\arraystretch{1.8}
> \begin{array}{|c|c|c|c|c|}
> \hline
> x_i & f(x_i) & \text{Tỷ hiệu cấp 1} & \text{Tỷ hiệu cấp 2} & \text{Tỷ hiệu cấp 3} \\
> \hline
> 1.2 & 0.7 & & & \\
> & & \frac{8.1-0.7}{2.1-1.2} = \mathbf{\frac{74}{9}} & & \\
> 2.1 & 8.1 & & \frac{196/9-74/9}{3.0-1.2} = \mathbf{\frac{610}{81}} & \\
> & & \frac{27.7-8.1}{3.0-2.1} = \frac{196}{9} & & \frac{130/27-610/81}{3.6-1.2} = \mathbf{-\frac{275}{243}} \\
> 3.0 & 27.7 & & \frac{29-196/9}{3.6-2.1} = \frac{130}{27} & \\
> & & \frac{45.1-27.7}{3.6-3.0} = 29 & & \\
> 3.6 & 45.1 & & & \\
> \hline
> \end{array}
> $$
>
>
> 2. Đa thức nội suy Newton: $$ P_3(x) = 0.7 + \frac{74}{9}(x - 1.2) + \frac{610}{81}(x - 1.2)(x - 2.1) - \frac{275}{243}(x - 1.2)(x - 2.1)(x - 3.0) $$

> [!exr] 
> Cho $\ln(x) = 0.6932, \ln(3) = 1.0986$ và $\ln(6) = 1.7981$,  sử dụng đa thức Lagrange để nội suy và xấp xỉ giá trị hàm logarit tự nhiên tại các số nguyên từ 1 đến 10. Viết code MATLAB và ập bảng kết quả bao gồm giá trị xấp xỉ, sai số tuyệt đối và sai số tương đối.

> [!sol]
> 1. Tính cơ sở đa thức Lagrange: 
> - Ta có cơ sở đa thức Lagrange: 
> $$
> L_j(x) = \prod_{k \neq j} \frac{x - x_k}{x_j - x_k}
> $$
> - Chi tiết:
> 	- $L_0(x) = \frac{(x-3)(x-6)}{(2-3)(2-6)} = \frac{1}{4}(x-3)(x-6)$
> 	- $L_1(x) = \frac{(x-2)(x-6)}{(3-2)(3-6)} = -\frac{1}{3}(x-2)(x-6)$
> 	- $L_2(x) = \frac{(x-2)(x-3)}{(6-2)(6-3)} = \frac{1}{12}(x-2)(x-3)$
> 2. Đa thức nội suy Lagrange: $$P_2(x) = 0.6932 \cdot L_0(x) + 1.0986 \cdot L_1(x) + 1.7918 \cdot L_2(x)$$
> 3. Code:
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > xNodes = [2, 3, 6];
> > yNodes = [0.6932, 1.0986, 1.7918];
> > n = length(xNodes) - 1;
> > xvals = 1:10;
> > 
> > disp('x     | Gia tri xap xi P(x)')
> > disp('-------------------------')
> > 
> > for j = 1:length(xvals)
> >     xval = xvals(j);
> >     Papprox = 0;
> >     
> >     for k = 1:n+1
> >         phi_k = lagrange_basis(xval, xNodes, k, n);
> >         Papprox = Papprox + yNodes(k) * phi_k;
> >     end
> >     
> >     fprintf('%-5d | %-15.4f\n', xval, Papprox);
> > end
> > 
> > function phi_k = lagrange_basis(xval, xnodes, k, n)
> >     xk = xnodes(k);
> >     phi_k = 1;
> >     for i = 1:n+1
> >         if i ~= k
> >             phi_k = phi_k .* (xval - xnodes(i)) / (xk - xnodes(i));
> >         end
> >     end
> > end
> > ```

> [!exr]
> Trình bày cách xây dựng hàm Lagrange bậc 1,2,3 trên đoạn $[-1,1]$. Vẽ hình các hàm Lagrange trên, chú thích đầy đủ.

> [!sol]
> 4. Tính cơ sở đa thức Lagrange: 
>  - Đổi biến cơ sở đa thức Lagrange:
> 	- Đặt $s = \frac{x- x_{0}}{h}$, khi  đó $x(s) = x_{0} + s \cdot h$.
> 	- Thay $x = x_{0} + s \cdot h$, $x_{j}  = x_{0} + \alpha_{j} h$ và $x_{k} = x_{0} + \alpha_{k} h$: 
> 	$$
> 	\begin{align}
> 	L_j(x(s)) &=  \prod_{k \neq j} \frac{(x_0 + s \cdot h) - (x_0 + \alpha_k h)}{(x_0 + \alpha_j h) - (x_0 + \alpha_k h)} \\
> 	&= \prod_{k \neq j} \frac{h(s - \alpha_k)}{h(\alpha_j - \alpha_k)}
> 	\end{align}
> 	$$
> 	- Ta thu được cơ sở địa phương mới, ký hiệu $l_{j}(s)$, đôc lập với $h$:
> 	$$
> 	l_j(s) = \prod_{k \neq j} \frac{s - \alpha_k}{\alpha_j - \alpha_k}
> 	$$
> 	- Vì các khoảng là cách đều, ta có $\alpha_{k} = k$:
> 	$$
> 	l_j(s) = \prod_{k \neq j} \frac{s - k}{j - k}
> 	$$
> - Chi tiết: 
> 	- Trên đoạn $[-1,1]$, ta chọn $x_{0} = -1$. Với mỗi bậc $n$, bước lưới $h = \frac{2}{n}$, $s = \frac{x+1}{h}$
> 	- Bậc $n = 1$, bước lưới $h = \frac{x_{n} - x_{0}}{n}= \frac{2}{1}$, $s_{k} \in \{ 0, 1 \}$:
> 		- $l_{0}(s) = \frac{s - 1}{0-1} = 1 - s$
> 		- $l_{1}(s) = \frac{s - 0}{1 - 0} = s$
> 	- Bậc $n = 2$, bước lưới $h = \frac{2}{2}$, $s_{k} \in \{  0, 1, 2 \}$:
> 		- $l_0(s) = \frac{(s - 1)(s - 2)}{(0 - 1)(0 - 2)} = \frac{1}{2}(s^2 - 3s + 2)$
> 		- $l_1(s) = \frac{s(s - 2)}{(1 - 0)(1 - 2)} = 2s - s^2$
> 		- $l_2(s) = \frac{s(s - 1)}{(2 - 0)(2 - 1)} = \frac{1}{2}(s^2 - s)$
> 	- Bậc $n = 3$, bước lưới $h = \frac{2}{3}$, $s_{k} \in \{ 0, 1 ,2, 3 \}$:
> 		- $l_0(s) = -\frac{1}{6}(s^3 - 6s^2 + 11s - 6)$
> 		- $l_1(s) = \frac{1}{2}(s^3 - 5s^2 + 6s)$
> 		- $l_2(s) = -\frac{1}{2}(s^3 - 4s^2 + 3s)$
> 		- $l_3(s) = \frac{1}{6}(s^3 - 3s^2 + 2s)$
> 	- Bậc $n = 4$, bước lưới $h = 0.5$, $s_{k} = \{ 0, 1, 2,3,4 \}$:
> 		- $l_0(s) = \frac{s^4 - 10s^3 + 35s^2 - 50s + 24}{24}$
> 		- $l_1(s) = \frac{s^4 - 9s^3 + 26s^2 - 24s}{-6}$
> 		- $l_2(s) = \frac{s^4 - 8s^3 + 19s^2 - 12s}{4}$
> 		- $l_3(s) = \frac{s(s - 1)(s - 2)(s - 4)}{-6}$
> 		- $l_4(s) = \frac{s(s - 1)(s - 2)(s - 3)}{24}$
> 2. Code:
> > [!code]- Matlab
> > ```matlab
> > clear; clc; clf;
> > x = linspace(-1, 1, 100); 
> > 
> > for n = 1:4
> >     h = 2/n;
> >     s = (x + 1)/h; % Doi bien
> >     s_node = 0:n;  % 
> >     x_node = -1 + s_node*h;
> >     
> >     subplot(2, 2, n); hold on; grid on;
> >     leg_str = cell(1, n+1); 
> >     
> >     for i = 1:n+1
> >         L = ones(size(s));
> >         for j = 1:n+1
> >             if i ~= j, L = L .* (s - s_node(j)) / (s_node(i) - s_node(j)); end
> >         end
> >         plot(x, L, 'LineWidth', 1.2);
> >         leg_str{i} = sprintf('l_{%d}', i-1);
> >     end
> >     
> >     % Ve do thi
> >     plot(x_node, zeros(1, n+1), 'ko'); 
> >     plot(x_node, ones(1, n+1), 'ro');
> >     
> >     title(sprintf('Bậc n = %d', n));
> >     legend(leg_str, 'Location', 'eastoutside');
> > end
> > ```
> 
> ![[THGTS_Tuần 5 - Bài 3.webp]]

> [!exr] 
> Cho $f(x) = 2x^{2}e^{x} + 1$. Xây dựng đa thức Lagrange bậc hai hoặc thấp hơn sử dụng $x_{0} = 0$, $x_{1} = 0.5$, $x_{2} = 1$. Viết code MATLAB xấp xỉ $f(0.8)$.

> [!sol]
> 3. Tính cơ sở đa thức Lagrange:
> 	- $y_{i}= f(x_{i})$:
> 	- $y_0 = f(0) = 2(0)^2e^0 + 1 = 1$
> 	- $y_1 = f(0.5) = 2(0.5)^2e^{0.5} + 1 = 0.5e^{0.5} + 1$
> 	- $y_2 = f(1) = 2(1)^2e^1 + 1 = 2e + 1$
> 	- $L_0(x) = \frac{(x - 0.5)(x - 1)}{(0 - 0.5)(0 - 1)} = 2(x^2 - 1.5x + 0.5) = 2x^2 - 3x + 1$
> 	- $L_1(x) = \frac{(x - 0)(x - 1)}{(0.5 - 0)(0.5 - 1)} = \frac{x^2 - x}{-0.25} = -4x^2 + 4x$
> 	- $L_2(x) = \frac{(x - 0)(x - 0.5)}{(1 - 0)(1 - 0.5)} = \frac{x^2 - 0.5x}{0.5} = 2x^2 - x$
> 4. Đa thức nội suy Lagrange:
> $$
> P_2(x) = 1(2x^2 - 3x + 1) + (0.5e^{0.5} + 1)(-4x^2 + 4x) + (2e + 1)(2x^2 - x)
> $$
> 5. Kết quả xấp xỉ: 
> $$
> f(0.8) \approx 1(-0.12) + (0.5e^{0.5} + 1)(0.64) + (2e + 1)(0.48) \approx 4.1371
> $$
> 6. Code:  
> > [!code]- Matlab
> > ```Matlab
> > clc; clear; close all;
> > 
> > f = @(x) 2 * x.^2 .* exp(x) + 1;
> > X = [0, 0.5, 1];
> > Y = f(X);
> > 
> > % Du lieu diem xap xi
> > x_target = 0.8;
> > n = length(X);
> > P2_val = 0;
> > 
> > % Tinh co so da thuc 
> > for i = 1:n
> >     L_i = 1;
> >     for j = 1:n
> >         if i ~= j
> >             L_i = L_i * (x_target - X(j)) / (X(i) - X(j));
> >         end
> >     end
> >     P2_val = P2_val + Y(i) * L_i;
> > end
> > 
> > % Hien thi ket qua
> > fprintf('Gia tri xap xi P_2(0.8) = %.4f\n', P2_val);
> > fprintf('Gia tri thuc te f(0.8) = %.4f\n', f(x_target));
> > fprintf('Sai so tuyet doi = %.4f\n', abs(f(x_target) - P2_val));
> > ```

> [!exr]
> Viết code MATLAB tính giá trị xấp xỉ hàm nội suy Lagrange bậc 1, trên đoạn $[-1,1]$

> [!sol]
> - Code:
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu ham 
> > f = @(x) sin(x); 
> > 
> > % Du lieu moc noi suy
> > X = [-1, 1]; 
> > Y = f(X);
> > 
> > % Du lieu diem can xap xi
> > x_target = 0.5;
> > 
> > % Tinh noi suy Lagrange bac 1
> > P1_val = 0;
> > n = length(X);
> > 
> > for i = 1:n
> >     L_i = 1; 
> >     for j = 1:n
> >         if i ~= j
> >             L_i = L_i * (x_target - X(j)) / (X(i) - X(j));
> >         end
> >     end
> >     P1_val = P1_val + Y(i) * L_i;
> > end
> > 
> > % Hien thi ket qua
> > fprintf('--- Noi suy Lagrange bac 1 tren [-1, 1] ---\n');
> > fprintf('Diem can xap xi: x = %.2f\n', x_target);
> > fprintf('Gia tri xap xi P_1(%.2f) = %.4f\n', x_target, P1_val);
> > fprintf('Gia tri thuc te f(%.2f) = %.4f\n', x_target, f(x_target));
> > fprintf('Sai so tuyet doi = %.4f\n', abs(f(x_target) - P1_val));
> > ```

# Tuần 6

> [!exr]
> Xây dựng các đa thức nội suy bậc một hai ba cho các dữ liệu sau:
> a)
> 
> $$
> \begin{array}{|c|c|c|c|c|}
> \hline
> x & 8.1 & 8.3 & 8.6 & 8.7 \\
> \hline
> f(x) & 16.94410 & 17.56492 & 18.50515 & 18.82091 \\
> \hline
> \end{array}
> $$
> 
> b)
> 
> $$
> \begin{array}{|c|c|c|c|c|}
> \hline
> x & 0.6 & 0.7 & 0.8 & 1.0 \\
> \hline
> f(x) & -0.17694460 & 0.01375227 & 0.22363362 & 0.65809197 \\
> \hline
> \end{array}
> $$

> [!sol]
> a)
> 1. Tính cơ sở đa thức Newton:
> - Bảng tỷ hiệu:
> 	$$
> 	\begin{array}{|c|c|c|c|c|}
> 	\hline
> 	x_i & f(x_i) & \text{Tỷ hiệu cấp 1} & \text{Tỷ hiệu cấp 2} & \text{Tỷ hiệu cấp 3} \\
> 	\hline
> 	8.1 & 16.94410 & & & \\
> 	& & 3.1041 & & \\
> 	8.3 & 17.56492 & & 0.06 & \\
> 	& & 3.1341 & & -\frac{1}{480} \\
> 	8.6 & 18.50515 & & 0.05875 & \\
> 	& & 3.1576 & & \\
> 	8.7 & 18.82091 & & & \\
> 	\hline
> 	\end{array}
> 	$$
>
> - Chi tiết:
> 	- Tỷ hiệu cấp 1:
> 	$$
> 	\begin{align}
> 	f[x_0, x_1] &= \frac{17.56492 - 16.94410}{8.3 - 8.1} = 3.1041 \\
> 	f[x_1, x_2] &= \frac{18.50515 - 17.56492}{8.6 - 8.3} = 3.1341 \\
> 	f[x_2, x_3] &= \frac{18.82091 - 18.50515}{8.7 - 8.6} = 3.1576
> 	\end{align}
> 	$$
> 	
> 	- Tỷ hiệu cấp 2:
> 	$$
> 	\begin{align}
> 	f[x_0, x_1, x_2] &= \frac{3.1341 - 3.1041}{8.6 - 8.1} = 0.06 \\
> 	f[x_1, x_2, x_3] &= \frac{3.1576 - 3.1341}{8.7 - 8.3} = 0.05875
> 	\end{align}
> 	$$
> 	
> 	- Tỷ hiệu cấp 3:
> 	$$
> 	f[x_0, x_1, x_2, x_3] = \frac{0.05875 - 0.06}{8.7 - 8.1} = -\frac{1}{480}
> 	$$
> 
> 2. Đa thức nội suy Newton: 
> $$P_3(x) = 16.94410 + 3.1041(x - 8.1) + 0.06(x - 8.1)(x - 8.3) - \frac{1}{480}(x - 8.1)(x - 8.3)(x - 8.6)$$
> 
> 3. Kết quả: 
> $$f(8.4) \approx 17.8771425$$
> 
> 
> b)
> 1. Tính cơ sở đa thức Newton:
> - Bảng tỷ hiệu:
> 	$$
> 	\begin{array}{|c|c|c|c|c|}
> 	\hline
> 	x_i & f(x_i) & \text{Tỷ hiệu cấp 1} & \text{Tỷ hiệu cấp 2} & \text{Tỷ hiệu cấp 3} \\
> 	\hline
> 	0.6 & -0.17694460 & & & \\
> 	& & 1.9069687 & & \\
> 	0.7 & 0.01375227 & & 0.959224 & \\
> 	& & 2.0988135 & & -1.78574125 \\
> 	0.8 & 0.22363362 & & 0.2449275 & \\
> 	& & 2.17229175 & & \\
> 	1.0 & 0.65809197 & & & \\
> 	\hline
> 	\end{array}
> 	$$
> 
> - Chi tiết:
> 	- Tỷ hiệu cấp 1:
> 	$$
> 	\begin{align}
> 	f[x_0, x_1] &= \frac{0.01375227 - (-0.17694460)}{0.7 - 0.6} = 1.9069687 \\
> 	f[x_1, x_2] &= \frac{0.22363362 - 0.01375227}{0.8 - 0.7} = 2.0988135 \\
> 	f[x_2, x_3] &= \frac{0.65809197 - 0.22363362}{1.0 - 0.8} = 2.17229175
> 	\end{align}
> 	$$
> 	
> 	- Tỷ hiệu cấp 2:
> 	$$
> 	\begin{align}
> 	f[x_0, x_1, x_2] &= \frac{2.0988135 - 1.9069687}{0.8 - 0.6} = 0.959224 \\
> 	f[x_1, x_2, x_3] &= \frac{2.17229175 - 2.0988135}{1.0 - 0.7} = 0.2449275
> 	\end{align}
> 	$$
> 	
> 	- Tỷ hiệu cấp 3:
> 	$$
> 	f[x_0, x_1, x_2, x_3] = \frac{0.2449275 - 0.959224}{1.0 - 0.6} = -1.78574125
> 	$$
> 
> 2. Đa thức nội suy Newton: 
> $$
> P_3(x) = -0.17694460 + 1.9069687(x - 0.6) + 0.959224(x - 0.6)(x - 0.7) - 1.78574125(x - 0.6)(x - 0.7)(x - 0.8)
> $$
> 
> 3. Kết quả: 
> $$
> f(0.9) \approx 0.4419850025
> $$
> 
> 4. Code:
> - newton_interpolate.m
> > [!code]- Matlab
> > ```matlab
> > function [y_eval, F_coeff] = newton_interpolate(x_node, y_node, x_eval)
> >     % Thuat toan tinh he so va xap xi noi suy Newton
> >     n = length(x_node);
> >     F = zeros(n, n);
> >     F(:, 1) = y_node(:);
> >     
> >     % Tinh bang ty hieu 
> >     for j = 2:n
> >         for i = j:n
> >             F(i, j) = (F(i, j-1) - F(i-1, j-1)) / (x_node(i) - x_node(i-j+1));
> >         end
> >     end
> >     
> >     % Lay cac ty hieu tren duong cheo lam he so
> >     F_coeff = diag(F); 
> > 
> >     % Tinh gia tri P(x) tai cac diem x_eval
> >     y_eval = zeros(size(x_eval));
> >     for k = 1:length(x_eval)
> >         val = F_coeff(1);
> >         p = 1;
> >         for i = 2:n
> >             p = p * (x_eval(k) - x_node(i-1));
> >             val = val + F_coeff(i) * p;
> >         end
> >         y_eval(k) = val;
> >     end
> > end
> > ```
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > a)
> > xa = [8.1, 8.3, 8.6, 8.7];
> > ya = [16.94410, 17.56492, 18.50515, 18.82091];
> > x_eval_a = 8.4;
> > 
> > b)
> > xb = [0.6, 0.7, 0.8, 1.0];
> > yb = [-0.17694460, 0.01375227, 0.22363362, 0.65809197];
> > x_eval_b = 0.9;
> > 
> > % Tinh co so da thuc
> > [res_a, coeff_a] = newton_interpolate(xa, ya, x_eval_a);
> > [res_b, coeff_b] = newton_interpolate(xb, yb, x_eval_b);
> > 
> > %% Hien thi ket qua
> > disp('--- He so da thuc ---');
> > fprintf('He so cau a: '); disp(coeff_a');
> > fprintf('He so cau b: '); disp(coeff_b');
> > 
> > disp('--- Ket qua xap xi ---');
> > fprintf('Cau a: f(8.4) = %.7f\n', res_a);
> > fprintf('Cau b: f(0.9) = %.10f\n', res_b);
> > ```

> [!exr]
> Cho hàm số $f(x) = x^{5} −5x^{3} +x^{2} +4x−2$ tại các điểm nội suy $x_{0} = -2, x_{1} = -1, x_{2} = 0, x_{3} = 1, x_{4} = 2$
> a) Dùng Matlab tính hệ số, lập bảng sai phân. Nội suy gần đúng các giá trị của $f(x)$ tại $x = -1.5, -0,5, 0.5, 1.5$
> b) Vẽ hàm $f$ cùng với đa thức Newton $P(x)$ 

> [!sol]
> 1. Tính cơ sở đa thức Newton:
> - Bảng tỷ hiệu:
> 	$$
> 	\begin{array}{|c|c|c|c|c|c|}
> 	\hline
> 	x_i & f(x_i) & \text{Tỷ hiệu cấp 1} & \text{Tỷ hiệu cấp 2} & \text{Tỷ hiệu cấp 3} & \text{Tỷ hiệu cấp 4} \\
> 	\hline
> 	-2 & 2 & & & & \\
> 	& & -3 & & & \\
> 	-1 & -1 & & 1 & & \\
> 	& & -1 & & 0 & \\
> 	0 & -2 & & 1 & & 0 \\
> 	& & 1 & & 0 & \\
> 	1 & -1 & & 1 & & \\
> 	& & 3 & & & \\
> 	2 & 2 & & & & \\
> 	\hline
> 	\end{array}
> 	$$
> 
> - Chi tiết:
> 	- Tỷ hiệu cấp 1: 
> 	$$
> 	\begin{align}
> 	f[x_0, x_1] &= \frac{-1 - 2}{-1 - (-2)} = -3 \\ 
> 	f[x_1, x_2] &= \frac{-2 - (-1)}{0 - (-1)} = -1 \\
> 	f[x_2, x_3] &= \frac{-1 - (-2)}{1 - 0} = 1 \\ 
> 	f[x_3, x_4] &= \frac{2 - (-1)}{2 - 1} = 3 
> 	\end{align}
> 	$$  
>	
> 	- Tỷ hiệu cấp 2: 
> 	$$
> 	\begin{align} 
> 	f[x_0, x_1, x_2] &= \frac{-1 - (-3)}{0 - (-2)} = 1 \\ 
> 	f[x_1, x_2, x_3] &= \frac{1 - (-1)}{1 - (-1)} = 1 \\ 
> 	f[x_2, x_3, x_4] &= \frac{3 - 1}{2 - 0} = 1 
> 	\end{align}
> 	$$
> 	
> 	- Tỷ hiệu cấp 3:
> 	$$
> 	\begin{align} 
> 	f[x_0, x_1, x_2, x_3] &= \frac{1 - 1}{1 - (-2)} = 0 \\ 
> 	f[x_1, x_2, x_3, x_4] &= \frac{1 - 1}{2 - (-1)} = 0 
> 	\end{align}
> 	$$
> 	
> 	- Tỷ hiệu cấp 4:
> 	$$
> 	f[x_0, x_1, x_2, x_3, x_4] = \frac{0 - 0}{2 - (-2)} = 0
> 	$$
> 
> 2. Đa thức nội suy Newton:
>  $$
>  P_4(x) = 2 - 3(x + 2) + 1(x + 2)(x + 1) + 0(x + 2)(x + 1)x + 0(x + 2)(x + 1)x(x - 1)
>  $$
>  
>  3. Kết quả xấp xỉ:
>  $$
>  \begin{align} 
>  f(-1.5) &\approx P_4(-1.5) = (-1.5)^2 - 2 = 0.25 \\ 
>  f(-0.5) &\approx P_4(-0.5) = (-0.5)^2 - 2 = -1.75 \\ 
>  f(0.5) &\approx P_4(0.5) = (0.5)^2 - 2 = -1.75 \\ 
>  f(1.5) &\approx P_4(1.5) = (1.5)^2 - 2 = 0.25 
>  \end{align}$$
>  
>  4. Code:
> - newton_interpolate.m
> (Sử dụng lại hàm đã định nghĩa ở câu 1)
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > f = @(x) x.^5 - 5*x.^3 + x.^2 + 4*x - 2;
> > x_node = [-2, -1, 0, 1, 2];
> > y_node = f(x_node);
> > x_eval = [-1.5, -0.5, 0.5, 1.5];
> > 
> > % Su dung ham newton_interpolate.m
> > [y_eval, ~, F] = newton_interpolate(x_node, y_node, x_eval);
> > 
> > % Danh gia sai so
> > y_exact = f(x_eval);
> > err_abs = abs(y_exact - y_eval);
> > err_rel = err_abs ./ abs(y_exact);
> > 
> > % Hien thi ket qua
> > disp('% Bang ty hieu (Copy paste vao bmatrix):');
> > disp(F);
> > 
> > disp('% Ket qua xap xi (Cot: x | P(x) | Sai so tuyet doi | Sai so tuong doi):');
> > disp([x_eval', y_eval', err_abs', err_rel']);
> > 
> > % Ve do thi
> > x_plot = linspace(min(x_node)-0.5, max(x_node)+0.5, 200);
> > y_plot_approx = newton_interpolate(x_node, y_node, x_plot); 
> > 
> > figure;
> > plot(x_plot, f(x_plot), 'b-', 'LineWidth', 1.5); hold on;
> > plot(x_plot, y_plot_approx, 'r--', 'LineWidth', 1.5);
> > plot(x_node, y_node, 'ko', 'MarkerFaceColor', 'g', 'MarkerSize', 8);
> > plot(x_eval, y_eval, 'md', 'MarkerFaceColor', 'm', 'MarkerSize', 8);
> > 
> > legend('Hàm f(x)', 'Nội suy P(x)', 'Điểm nội suy', 'Điểm xấp xỉ', 'Location', 'Best');
> > title('So sánh hàm f(x) và nội suy Newton P(x)');
> > xlabel('x'); ylabel('y');
> > grid on; hold off;
> > ```
> 
> ![[THGTS_Tuần 6 - Bài 2.webp]]

# Tuần 7

> [!exr] 
> Cho hàm $f(x) = 3xe^{x} - \cos x$. Sử dụng dữ liệu bảng 
> $$
> \begin{array}{|l|l|}
> \hline x & f(x) \\
> \hline 1.2 & 11.59006 \\
> \hline 1.29 & 13.78176 \\
> \hline 1.30 & 14.04276 \\
> \hline 1.31 & 14.30741 \\
> \hline 1.40 & 16.86187 \\
> \hline
> \end{array}
>
> $$
> để tính giá trị xấp xỉ của $f''(1.3)$ với $h = 0.1$ và $h = 0.01$. Sau đó, xác định giá trị sai số.

> [!sol]
> - Công thức sai phân trung tâm: 
> $$
> \frac{f''(x) = f(x+h) - 2f(x) + f(x-h)}{h^{2}}
> $$
> - Tính xấp xỉ tại $x = 1.3$ và $h = 0.1$:
> $$
> f''(1.3) \approx \frac{f(1.4) - 2f(1.3) + f(1.2)}{0.1^2} = 36.641
> $$
> 
> - Tính xấp xỉ tại $x = 1.3$ và $h = 0.01$:
> $$
> f''(1.3) \approx \frac{f(1.31) - 2f(1.3) + f(1.29)}{0.01^2} = 36.5
> $$
> 
> - Tính đạo hàm chính xác tại $x = 1.3$:
> $$
> f''(1.3) = 3e^{1.3}(1.3+2) + \cos(1.3) = 9.9e^{1.3} + \cos(1.3) \approx 36.59354
> $$
> 
> - Sai số tuyệt đối: 
> 	- $h = 0.1$: $|36.59354 - 36.641| \approx 0.04746$.
> 	- $h = 0.01$: $|36.59354 - 36.5| \approx 0.09354$.

> [!lem] 
> Cho hàm số $f(z)$ và $N$ điểm lưới phân biệt $x_j = x + \alpha_j h$ với $j = 0, 1, \dots, N-1$. Công thức xấp xỉ đạo hàm cấp $n$ của $f(z)$ tại $z=x$ có dạng chuỗi Taylor:
> $$
> f^{(n)}(x) \approx \frac{1}{h^n} \sum_{j=0}^{N-1} c_j f(x_j) \tag{1} = \frac{1}{h^n} \mathbf{c}^T \mathbf{f}
> $$
> Khi đó, vector hệ số sai phân $\mathbf{c} = (c_0, c_1, \dots, c_{N-1})^T$ là nghiệm của hệ phương trình tuyến tính:
> $$
> V^T \mathbf{c} = n! \cdot \mathbf{e}_n \tag{2}
> $$
> Với $V^T$ là ma trận Vandermonde chuyển vị kích thước $N \times N$, phần tử tại hàng $m$, cột $j$ là $\alpha_j^m$, $\mathbf{e_{n}}$ là vector đơn vị có giá trị $1$ tại vị trí $n$ và bằng $0$ tại vị trí khác.

> [!prf]
> Gọi $P(z)$ là đa thức nội suy bậc $N-1$ của hàm $f(z)$, thỏa điều kiện:
> $$
> P(x_{j}) = f(x_{j}), \forall j \tag{3}
> $$
> Đặt $s = \frac{z-x}{h}$, ta có ${} s_{j} = \alpha_{j} {}$, $\forall j$.
> Đặt $\tilde{P}(s)  = P(x + sh)$ là đa thức nội suy theo biến $s$, có dạng tổng quát: 
> $$
> \tilde{P}(s) = \sum_{m=0}^{N - 1}a_{m}s^{m} \tag{4}
> $$
> Khi đó từ điều kiện $(1)$, ta có: 
> $$
> \tilde{P}(\alpha_{j}) = f(x_{j}), \forall j \tag{5}
> $$
> Ta có phương trình ma trận Vandermonde tương ứng:
> $$
> V\mathbf{a} = \mathbf{f} \quad \implies \quad \mathbf{a} = V^{-1}\mathbf{f} \tag{6}
> $$
> với $V_{j,m} = \alpha_{j}^m$, $\mathbf{a} = (a_{0}, \dots, a_{N-1})^T$ và $\mathbf{f} = (f(x_{0}), \dots, f(x_{N-1})^T)$.
> Ta có đạo hàm hợp $\frac{d}{dz} = \frac{1}{h} \frac{d}{ds}$, cấp $n$ tại $x$ ứng với cấp $n$ tại $s = 0$:
> $$
> P^{(n)}(x) = \frac{1}{h^{n}}\tilde{P}^{(n)}(0) \tag{7}
> $$
> Tính đạo hàm của đa thức $\tilde{P}(s)$ tại $s=0$, mọi bậc khác $n$ đều triệt tiêu: 
> $$
> \tilde{P}^{(n)}(0) = n! \cdot a_n \tag{8}
> $$
> Sử dụng $(6)$ với $a_{n}= \mathbf{e^{T}_{n}a}$ là giá trị thứ $n$ của vector $a$:
> $$
> n! \cdot a_n = n! \cdot \mathbf{e}_n^T \mathbf{a} = n! \cdot \mathbf{e}_n^T V^{-1} \mathbf{f} \tag{9}
> $$
> Thay $(9)$ và $(8)$ vào ${} (7) {}$:
> $$
> P^{(n)}(x) = \frac{1}{h^n} \left( n! \cdot \mathbf{e}_n^T V^{-1} \right) \mathbf{f} \tag{10}
> $$
> Để $f^{(n)}(x) \approx P^{(n)}(x)$, ta so sánh và đồng nhất ${} (10) {}$ với $(1)$:
> $$
> \frac{1}{h^n} \mathbf{c}^T \mathbf{f} = \frac{1}{h^n} \left( n! \cdot \mathbf{e}_n^T V^{-1} \right) \mathbf{f}
> $$
> Rút gọn, nhân $V$ vào bên phải hai vế và lấy chuyển vị:
> $$
> V^T \mathbf{c} = n! \cdot \mathbf{e}_n
> $$

> [!exr] (Bài 2,3)
> Sử dụng chuỗi Taylor để rút ra công thức xấp xỉ đạo hàm cấp ba của hàm $f$:
> $$
> f'''(x) \approx \frac{1}{h^3} \Big[ -f(x) + 3f(x+h) - 3f(x+2h) + f(x+3h) \Big]
> $$
> và công thức xấp xỉ đạo hàm cấp một của hàm $f$:
> $$
> f'(x) \approx \frac{2f(x+3h) - 9f(x+2h) + 18f(x+h) - 11f(x)}{6h}
> $$

> [!sol]
> - Ta cần xây dựng công thức đạo hàm trên 4 điểm lưới tiên: $x, x+h, x+2h, x+3h$, do đó $N = 4$ và vector hệ số lưới $\alpha = (0,1,2,3)$.
> - Ta có ma trận chuyển vị Vandermonde:
> $$
> V^T = 
>     \begin{pmatrix}
>         1 & 1 & 1 & 1 \\
>         \alpha_0 & \alpha_1 & \alpha_2 & \alpha_3 \\
>         \alpha_0^2 & \alpha_1^2 & \alpha_2^2 & \alpha_3^2 \\
>         \alpha_0^3 & \alpha_1^3 & \alpha_2^3 & \alpha_3^3
>     \end{pmatrix}
>     =
>     \begin{pmatrix}
>         1 & 1 & 1 & 1 \\
>         0 & 1 & 2 & 3 \\
>         0 & 1 & 4 & 9 \\
>         0 & 1 & 8 & 27
>     \end{pmatrix}
> $$
> 
> - Áp dụng bổ đề cho Bài 2: Tìm công thức xấp xỉ $f'''(x)$, bậc đạo hàm $n = 3$, ta có hệ phương trình:
> $$
> V^T \mathbf{c} = (0, 0, 0, 6)^T
> $$
> 
> - Giải hệ trên ta thu được $c_0 = -1, \quad c_1 = 3, \quad c_2 = -3, \quad c_3 = 1$
> 
> - Với $f^{(n)}(x) \approx \frac{1}{h^n} \sum c_j f(x_j)$, ta có công thức cần tìm:
> 
> $$
>  f'''(x) \approx \frac{1}{h^3} \Big[ -f(x) + 3f(x+h) - 3f(x+2h) + f(x+3h) \Big]
> $$
> 
> - Áp dụng bổ đề cho Bài 3: Tìm công thức xấp xỉ $f'(x)$, bậc đạo hàm $n = 1$, ta có hệ phương trình:
> $$
> V^T \mathbf{c} = (0, 1, 0, 0)^T
> $$
> 
> - Giải hệ trên ta thu được $c_0 = -\frac{11}{6}, \quad c_1 = 3 = \frac{18}{6}, \quad c_2 = -\frac{3}{2} = -\frac{9}{6}, \quad c_3 = \frac{1}{3} = \frac{2}{6}$
> 
> - Với $f^{(n)}(x) \approx \frac{1}{h^n} \sum c_j f(x_j)$, ta có công thức cần tìm:
> 
> $$
> f'(x) \approx \frac{2f(x+3h) - 9f(x+2h) + 18f(x+h) - 11f(x)}{6h}
> $$

> [!exr] (Bài 4,5)
> Xác định công thức tính xấp xỉ $f'(x_{0})$ và $f''(x_{0})$ bằng 5 điểm: $f(x_{0} -2h), f(x_{0}-h), f(x_{0}), f(x_{0}+h), f(x_{0}+2h)$.

> [!sol]
> - Ta cần xây dựng công thức đạo hàm trên 5 điểm lưới đối xứng qua $x_0$: $x_0 - 2h, x_0 - h, x_0, x_0 + h, x_0 + 2h$. do đó $N = 5$ và vector hệ số lưới $\alpha = (-2,-1,0,1,2)$.
> - Ta có ma trận chuyển vị Vandermonde:
> $$
> V^T = \begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\ (-2)^1 & (-1)^1 & 0^1 & 1^1 & 2^1 \\ (-2)^2 & (-1)^2 & 0^2 & 1^2 & 2^2 \\ (-2)^3 & (-1)^3 & 0^3 & 1^3 & 2^3 \\ (-2)^4 & (-1)^4 & 0^4 & 1^4 & 2^4 \end{pmatrix} = \begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\ -2 & -1 & 0 & 1 & 2 \\ 4 & 1 & 0 & 1 & 4 \\ -8 & -1 & 0 & 1 & 8 \\ 16 & 1 & 0 & 1 & 16 \end{pmatrix}
> $$
> 
> - Áp dụng bổ đề cho Bài 4: Tìm công thức xấp xỉ $f'(x_{0})$, bậc đạo hàm $n = 1$, ta có hệ phương trình:
> $$
> V^T \mathbf{c} = (0, 1, 0, 0, 0)^T
> $$
> 
> - Giải hệ trên ta thu được $c_{-2} = \frac{1}{12}, \quad c_{-1} = -\frac{2}{3},  \quad c_{0} = 0, \quad c_{1} = \frac{2}{3}, \quad c_2 = -\frac{1}{12}$
> 
> - Với $f^{(n)}(x) \approx \frac{1}{h^n} \sum c_j f(x_j)$, ta có công thức cần tìm:
> 
> $$
> f'(x_0) \approx \frac{f(x_0-2h) - 8f(x_0-h) + 8f(x_0+h) - f(x_0+2h)}{12h}
> $$
> 
> - Áp dụng bổ đề cho Bài 5: Tìm công thức xấp xỉ $f''(x_{0})$, bậc đạo hàm $n = 2$, ta có hệ phương trình:
> $$V^T \mathbf{c} = (0, 0, 2, 0, 0)^T$$
> 
> - Giải hệ trên ta thu được $c_{-2} = -\frac{1}{12}, \quad c_{-1} = \frac{4}{3}, \quad c_0 = -\frac{5}{2}, \quad c_1 = \frac{4}{3}, \quad c_2 = -\frac{1}{12}$
> 
> - Với $f^{(n)}(x) \approx \frac{1}{h^n} \sum c_j f(x_j)$, ta có công thức cần tìm:
> $$f''(x_0) \approx \frac{-f(x_0-2h) + 16f(x_0-h) - 30f(x_0) + 16f(x_0+h) - f(x_0+2h)}{12h^2}$$

> [!exr] (Bài 6,7)
> Cho $f(x) = \sin x - \cos x$, $f(x) = (1+x)^{-1}$:
> a) Sử dụng công thức sai ở trên để xấp xỉ $f'(0)$ cho hàm $f$ thứ nhất và $f'(1)$ cho hàm $f$ thứ hai. Với khoảng chia $h = 10^-1, 10^{-2}, \dots 10^{-12}$, lập bảng sai số, nhận xét. Sai số nhỏ nhất có phù hợp với dự đoán lý thuyết không?
> b) Vẽ đồ thị biểu diễn các kết quả sai số thu được với $h$ ứng với từng bảng sai số ở câu a

> [!sol]
> 1. Bảng sai số:
> $$
> \begin{array}{|c|c|c|c|}
> \hline
> h & \text{Sai số Tiến } \mathcal{O}(h) & \text{Sai số Lùi } \mathcal{O}(h) & \text{Sai số Trung tâm } \mathcal{O}(h^2) \\
> \hline
> 10^{-1} & 4.8293 \times 10^{-2} & 5.1624 \times 10^{-2} & 1.6658 \times 10^{-3} \\
> 10^{-2} & 4.9833 \times 10^{-3} & 5.0166 \times 10^{-3} & 1.6667 \times 10^{-5} \\
> 10^{-3} & 4.9983 \times 10^{-4} & 5.0017 \times 10^{-4} & 1.6667 \times 10^{-7} \\
> 10^{-4} & 4.9998 \times 10^{-5} & 5.0002 \times 10^{-5} & 1.6671 \times 10^{-9} \\
> 10^{-5} & 5.0000 \times 10^{-6} & 5.0000 \times 10^{-6} & 1.5653 \times 10^{-11} \\
> 10^{-6} & 5.0007 \times 10^{-7} & 5.0013 \times 10^{-7} & 2.6755 \times 10^{-11} \\
> 10^{-7} & 4.9434 \times 10^{-8} & 5.0486 \times 10^{-8} & 5.2636 \times 10^{-10} \\
> \textbf{10}^{-8} & \mathbf{5.0248 \times 10^{-9}} & \mathbf{6.0775 \times 10^{-9}} & 5.2636 \times 10^{-10} \\
> 10^{-9} & 2.8282 \times 10^{-8} & 8.2740 \times 10^{-8} & 2.7229 \times 10^{-8} \\
> 10^{-10} & 8.2740 \times 10^{-8} & 8.2740 \times 10^{-8} & 8.2740 \times 10^{-8} \\
> 10^{-11} & 8.2740 \times 10^{-8} & 8.2740 \times 10^{-8} & 8.2740 \times 10^{-8} \\
> 10^{-12} & 2.2122 \times 10^{-5} & 8.8901 \times 10^{-5} & 3.3389 \times 10^{-5} \\
> \hline
> \end{array}
> $$
>
> 2. Nhận xét:
> - Sự hội tụ: Khi $h$ giảm dần từ $10^{-1}$, sai số của cả 3 phương pháp đều giảm. Đặc biệt, sai số của phương pháp Sai phân trung tâm giảm nhanh hơn hẳn (bậc $\mathcal{O}(h^2)$) so với Sai phân tiến và lùi (bậc $\mathcal{O}(h)$).
> - Giới hạn của độ chính xác: Sai số không tiếp tục giảm mãi khi $h \to 0$. Ta nhận thấy sự đảo chiều:
> 	  - Đối với Sai phân tiến/lùi: Sai số đạt mức nhỏ nhất ở quanh $h \approx 10^{-8}$.
> 	  - Đối với Sai phân trung tâm: Sai số đạt mức nhỏ nhất sớm hơn, quanh khu vực $h \approx 10^{-5}$ đến $10^{-6}$.
> - Nguyên nhân: Khi $h$ quá nhỏ ($h < 10^{-8}$), tử số $f(x_0+h) - f(x_0)$ là phép trừ của hai số gần bằng nhau, gây ra hiện tượng "mất chữ số có nghĩa" do làm tròn (Round-off error) trong bộ nhớ máy tính. Lúc này, sai số làm tròn lấn át sai số cắt cụt (Truncation error) của công thức xấp xỉ.
> - Kết luận: Sai số nhỏ nhất thu được từ thực nghiệm tính toán phù hợp với dự đoán của lý thuyết: sai số tổng cộng bao gồm sai số cắt cụt và sai số làm tròn máy. Do đó, chọn $h$ càng nhỏ không đồng nghĩa với việc kết quả xấp xỉ đạo hàm sẽ càng chính xác!
>   
> 3. Code:
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > h_array = 10.^(-1:-1:-12)'; % Cot cac gia tri h tu 10^-1 den 10^-12
> > n = length(h_array);
> > 
> > % Du lieu bai 6
> > f6 = @(x) sin(x) - cos(x);
> > x0_6 = 0;
> > exact_6 = 1; % Dao ham chinh xac f'(0) = cos(0) + sin(0) = 1
> > 
> > % Du lieu bai 7
> > f7 = @(x) (1 + x).^(-1);
> > x0_7 = 1;
> > exact_7 = -0.25; % Dao ham chinh xac f'(1) = -(1+1)^(-2) = -0.25
> > 
> > % Khởi tạo các cột rỗng để chứa kết quả sai số
> > err_tien_6 = zeros(n, 1); err_lui_6 = zeros(n, 1); err_tt_6 = zeros(n, 1);
> > err_tien_7 = zeros(n, 1); err_lui_7 = zeros(n, 1); err_tt_7 = zeros(n, 1);
> > 
> > 
> > for i = 1:n
> >     h = h_array(i);
> >     
> >     % Tinh bai 6
> >     tien_6 = (f6(x0_6 + h) - f6(x0_6)) / h;
> >     lui_6  = (f6(x0_6) - f6(x0_6 - h)) / h;
> >     tt_6   = (f6(x0_6 + h) - f6(x0_6 - h)) / (2*h);
> >     
> >     err_tien_6(i) = abs(tien_6 - exact_6);
> >     err_lui_6(i)  = abs(lui_6 - exact_6);
> >     err_tt_6(i)   = abs(tt_6 - exact_6);
> >     
> >     % Tinh bai 7
> >     tien_7 = (f7(x0_7 + h) - f7(x0_7)) / h;
> >     lui_7  = (f7(x0_7) - f7(x0_7 - h)) / h;
> >     tt_7   = (f7(x0_7 + h) - f7(x0_7 - h)) / (2*h);
> >     
> >     err_tien_7(i) = abs(tien_7 - exact_7);
> >     err_lui_7(i)  = abs(lui_7 - exact_7);
> >     err_tt_7(i)   = abs(tt_7 - exact_7);
> > end
> > 
> > % Hien thi ket qua
> > bang_bai_6 = table(h_array, err_tien_6, err_lui_6, err_tt_6, ...
> >     'VariableNames', {'h', 'SaiSo_Tien', 'SaiSo_Lui', 'SaiSo_TrungTam'});
> > disp(bang_bai_6);
> > 
> > bang_bai_7 = table(h_array, err_tien_7, err_lui_7, err_tt_7, ...
> >     'VariableNames', {'h', 'SaiSo_Tien', 'SaiSo_Lui', 'SaiSo_TrungTam'});
> > disp(bang_bai_7);
> > 
> > % Tao khung
> > figure('Color', 'w', 'Position', [100, 100, 1000, 450]);
> > 
> > % Ve do thi bai 6
> > subplot(1, 2, 1);
> > loglog(h_array, err_tien_6, 'b-o', 'LineWidth', 1.5); hold on;
> > loglog(h_array, err_lui_6, 'r-s', 'LineWidth', 1.5);
> > loglog(h_array, err_tt_6, 'k-d', 'LineWidth', 1.5);
> > set(gca, 'XDir', 'reverse'); % Lật trục x để h nhỏ dần từ trái sang phải
> > title('Bài 6: Sai số xấp xỉ f(x) = sin(x) - cos(x)');
> > xlabel('Bước lưới h'); ylabel('Sai số tuyệt đối');
> > legend('Tiến', 'Lùi', 'Trung tâm', 'Location', 'best');
> > grid on; hold off;
> > 
> > % Ve do thi bai 7
> > subplot(1, 2, 2);
> > loglog(h_array, err_tien_7, 'b-o', 'LineWidth', 1.5); hold on;
> > loglog(h_array, err_lui_7, 'r-s', 'LineWidth', 1.5);
> > loglog(h_array, err_tt_7, 'k-d', 'LineWidth', 1.5);
> > set(gca, 'XDir', 'reverse');
> > title('Bài 7: Sai số xấp xỉ f(x) = (1+x)^{-1}');
> > xlabel('Bước lưới h'); ylabel('Sai số tuyệt đối');
> > legend('Tiến', 'Lùi', 'Trung tâm', 'Location', 'best');
> > grid on; hold off;
> > ```
> 
> ![[THGTS_Tuần 7 - Bài 6,7.webp]]

# Tuần 8

> [!exr]
> Viết phương trình sai phân với $n = 5$ để xấp xỉ nghiệm của phương trình có điều kiện biên:
> $$
> y'' + 3y' + 2y = 4x^2, \quad y(1) = 1, \quad y(2) = 6 \quad 1 \le x \le 2
> $$
> Trong trường hợp $n = 5, 10,20,40,80$. Dùng MATLAB để xấp xỉ nghiệm cho bài toán trên và vẽ đồ thị giữa nghiệm chính xác và nghiệm xấp xỉ. Lập bảng sai số.

> [!sol]
> 1. Đổi miền bài toán:
> 	- Đổi biến:
> 		- Đặt $t = \frac{x - a}{b - a}$, khi đó $x(t) = a + (b-a) t = 1 + (2-1)t = 1+t$, $t \in [0,1]$
> 	- Tính đạo hàm theo biến $t$:
> 		- $\frac{dy}{dx} = \frac{dy}{dt}\frac{dt}{dx} = y'(t) \cdot 1 = y'(t)$
> 		- $\frac{d^2y}{dx^2} = \frac{d}{dt}(y'(t))\frac{dt}{dx} = y''(t)$
> 	- Thay $x = 1+t$, $y' = y'(t)$ và $y'' = y''(t)$, ta có phương trình theo biến $t$:
> 	$$
> 	y''(t) + 3y'(t) + 2y(t) = 4(1+t)^2 \tag{1}
> 	$$
> 	- Chi tiết:
> 		- Trên miền $t \in [0,1]$, bậc $n= 5$, bước lưới $h = \frac{1 - 0}{5} = 0.2$.
> 		- Với $t_{i} = i.h$, ${} t_{i} \in \{ 0, 0.2, 0.4, 0.6, 0.8, 1 \} {}$
> 		- Tại $t = 0$, ta có $y(0) = 1$.
> 		- Tại $t = 1$, ta có $y(1) = 6$.
> 		- Áp dụng công thức sai phân trung tâm cho $y''$ và $y'$ tại $t_{i}$ cho ${} (1) {}$:
>		$$
>		\frac{y_{i+1} - 2y_i + y_{i-1}}{(h)^2} + 3\left(\frac{y_{i+1} - y_{i-1}}{2h}\right) + 2y_i = 4t_i^2 + 8t_i + 4
>		$$
>		- Nhân hai vế với $h^{2} = (0.2)^{2}$ và gom nhóm theo $y_{i-1}$, $y_{i}$ và $y_{i+1}$:
>		$$
>		0.7y_{i-1} - 1.92y_i + 1.3y_{i+1} = 0.16t_i^2 + 0.32t_i + 0.16 \tag{2}
>		$$
> 2. Ma trận biểu diễn:
> - Thay $t_{i} = 0.2, 0.4, 0.6, 0.8$ vào $(2)$:
> 	- Tại $t_{i} = 0.2$: $0.7y_0 - 1.92y_1 + 1.3y_2 = 0.2304$
> 	    Thay $y_{0} = 1$ và chuyển vế:  $-1.92y_1 + 1.3y_2 = -0.4696$
> 	- Tại $t_{i} = 0.4$: - $0.7y_1 - 1.92y_2 + 1.3y_3 = 0.3136$
> 	- Tại $t_{i} = 0.6$: $0.7y_2 - 1.92y_3 + 1.3y_4 = 0.4096$
> 	- Tại $t_{i} = 0.8$: $0.7y_3 - 1.92y_4 + 1.3y_5 = 0.5184$
> 	    Thay $y_{5} = 6$ và chuyển vế: $0.7y_3 - 1.92y_4 = -7.2816$
> - Ma trận biểu diễn hệ ${} A \cdot Y = F {}$:
> $$
> \begin{pmatrix} -1.92 & 1.3 & 0 & 0 \\ 0.7 & -1.92 & 1.3 & 0 \\ 0 & 0.7 & -1.92 & 1.3 \\ 0 & 0 & 0.7 & -1.92 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \\ y_4 \end{pmatrix} = \begin{pmatrix} -0.4696 \\ 0.3136 \\ 0.4096 \\ -7.2816 \end{pmatrix}
> $$
> 
> 1. Bảng sai số:
> $$
> \begin{array}{|c|c|c|}
> \hline
> n & h & \text{Sai số lớn nhất } \mathcal{O}(h^2) \\
> \hline
> 5  & 2.0000 \times 10^{-1} & 1.3414 \times 10^{-2} \\
> 10 & 1.0000 \times 10^{-1} & 3.4216 \times 10^{-3} \\
> 20 & 5.0000 \times 10^{-2} & 8.6015 \times 10^{-4} \\
> 40 & 2.0000 \times 10^{-2} & 2.1534 \times 10^{-4} \\
> 80 & 1.0000 \times 10^{-2} & 5.3853 \times 10^{-5} \\
> \hline
> \end{array}
> $$
>
> 2. Code:
> - bvp_fdm.m
> > [!code]- Matlab
> > ```matlab
> > function [x, y] = bvp_fdm(p, q, r, a, b, alpha, beta, n)
> > % Nhiem vu: Giai BVP y'' + p(x)y' + q(x)y = r(x) bang Sai phan trung tam
> >     h = (b - a) / n;
> >     x = linspace(a, b, n+1)';
> > 
> >     A = sparse(n-1, n-1); 
> >     F = zeros(n-1, 1);
> > 
> >     for i = 1:n-1
> >         xi = x(i+1); 
> >         pi = p(xi); qi = q(xi); ri = r(xi);
> > 
> >         A_low = 1 - (h/2)*pi;
> >         A_diag = -2 + (h^2)*qi;
> >         A_up = 1 + (h/2)*pi;
> > 
> >         A(i, i) = A_diag;
> >         F(i) = (h^2) * ri;
> > 
> >         % Xu ly dieu kien bien 
> >         if i > 1
> >             A(i, i-1) = A_low; 
> >         else
> >             F(i) = F(i) - A_low * alpha; 
> >         end
> >         
> >         if i < n-1
> >             A(i, i+1) = A_up; 
> >         else
> >             F(i) = F(i) - A_up * beta; 
> >         end
> >     end
> > 
> >     y_in = A \ F;
> >     y = [alpha; y_in; beta];
> > end
> > ```
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu bai toan
> > p = @(x) 3; q = @(x) 2; r = @(x) 4*x^2; 
> > a = 1; b = 2; alpha = 1; beta = 6;
> > 
> > n_array = [5; 10; 20; 40; 80]; 
> > h_array = (b - a) ./ n_array;
> > max_err = zeros(length(n_array), 1);
> > 
> > % Nghiem chinh xac
> > A_mat = [exp(-1), exp(-2); exp(-2), exp(-4)];
> > B_mat = [1 - (2*1^2 - 6*1 + 7); 6 - (2*2^2 - 6*2 + 7)];
> > C = A_mat \ B_mat;
> > y_exact = @(x) C(1)*exp(-x) + C(2)*exp(-2*x) + 2*x.^2 - 6*x + 7;
> > 
> > % Tinh toan va ve do thi
> > figure('Color', 'w');
> > x_plot = linspace(a, b, 200);
> > plot(x_plot, y_exact(x_plot), 'k-', 'LineWidth', 2); hold on;
> > 
> > colors = lines(length(n_array)); markers = {'o', 's', '^', 'd', 'p'};
> > 
> > for i = 1:length(n_array)
> >     [x_app, y_app] = bvp_fdm(p, q, r, a, b, alpha, beta, n_array(i));
> >     max_err(i) = max(abs(y_exact(x_app) - y_app)); 
> >     plot(x_app, y_app, '--', 'Marker', markers{i}, 'Color', colors(i,:), 'LineWidth', 1.2);
> > end
> > 
> > xlim([1.2, 1.5]); 
> > ylim([3.4, 5.1]); 
> > 
> > legend(['Chính xác', arrayfun(@(n) sprintf('n = %d', n), n_array', 'UniformOutput', false)], 'Location', 'best');
> > title('So sánh nghiệm (x = [1.2, 1.5])'); 
> > xlabel('x'); ylabel('y(x)'); grid on; hold off;
> > 
> > % Hien thi bang sai so
> > disp('--- BẢNG SAI SỐ THEO CÁC TRƯỜNG HỢP N ---');
> > bang_sai_so = table(n_array, h_array, max_err, 'VariableNames', {'n', 'h', 'Max_Error'});
> > disp(bang_sai_so);
> > ```
> 
> ![[THGTS_Tuần 8 - Bài 1.webp]]

> [!exr] 
> Cho bài toán có điều kiện biên sau:
> $$y'' + x^2y' - 4xy = 0, \quad y(0) = 0, \quad y(1) = 5, \quad 0 \le x \le 1$$
> a) Dựa vào phương pháp sai phân hữu hạn để giải bài toán trên với $h = 0.1$.
> b) Với $h = 0.1$ và $h = 0.01$, dùng Matlab để xấp xỉ nghiệm cho bài toán trên và vẽ đồ thị giữa nghiệm chính xác và nghiệm xấp xỉ, với nghiệm chính xác $y = x^4 + 4x$. Lập bảng sai số.

> [!sol] 
> 1. Tính toán:
> - Chi tiết:
> 	- Trên miền $x \in [0,1]$, bước lưới $h = 0.1$ (tương ứng với $n = 10$).
> 	- Với $x_{i} = i \cdot h$, $x_{i} \in \{ 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1 \}$
> 	- Tại $x = 0$, ta có $y(0) = 0$.
> 	- Tại $x = 1$, ta có $y(1) = 5$.
> 	- Áp dụng công thức sai phân trung tâm cho $y''$ và $y'$ tại $x_{i}$:$$\frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} + x_i^2\left(\frac{y_{i+1} - y_{i-1}}{2h}\right) - 4x_i y_i = 0$$
> 	- Nhân hai vế với $h^2 = (0.1)^2 = 0.01$ và gom nhóm theo $y_{i-1}$, $y_{i}$ và $y_{i+1}$:$$\left(1 - 0.05x_i^2\right)y_{i-1} - \left(2 + 0.04x_i\right)y_i + \left(1 + 0.05x_i^2\right)y_{i+1} = 0 \tag{1}$$
> 1. Ma trận biểu diễn:
> - Thay $x_{i} = 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9$ vào $(1)$:
> 	  - Tại $x_{i} = 0.1$: $\left(1 - 0.05(0.1)^2\right)y_0 - \left(2 + 0.04(0.1)\right)y_1 + \left(1 + 0.05(0.1)^2\right)y_2 = 0$
> 	$\iff 0.9995y_0 - 2.004y_1 + 1.0005y_2 = 0$
> 	    Thay $y_{0} = 0$ và chuyển vế:  $-2.004y_1 + 1.0005y_2 = 0$
> 	- Tại $x_{i} = 0.2$: $0.998y_1 - 2.008y_2 + 1.002y_3 = 0$
> 	- Tại $x_{i} = 0.3$: $0.9955y_2 - 2.012y_3 + 1.0045y_4 = 0$
> 	- Tại $x_{i} = 0.4$: $0.992y_3 - 2.016y_4 + 1.008y_5 = 0$
> 	- Tại $x_{i} = 0.5$: $0.9875y_4 - 2.02y_5 + 1.0125y_6 = 0$
> 	- Tại $x_{i} = 0.6$: $0.982y_5 - 2.024y_6 + 1.018y_7 = 0$
> 	- Tại $x_{i} = 0.7$: $0.9755y_6 - 2.028y_7 + 1.0245y_8 = 0$
> 	- Tại $x_{i} = 0.8$: $0.968y_7 - 2.032y_8 + 1.032y_9 = 0$
> 	- Tại $x_{i} = 0.9$: $\left(1 - 0.05(0.9)^2\right)y_8 - \left(2 + 0.04(0.9)\right)y_9 + \left(1 + 0.05(0.9)^2\right)y_{10} = 0$
> 	$\iff 0.9595y_8 - 2.036y_9 + 1.0405y_{10} = 0$
> 	    Thay $y_{10} = 5$ và chuyển vế: $0.9595y_8 - 2.036y_9 = -5.2025$ 
> -  Ma trận biểu diễn hệ $A \cdot Y = F$:
>   $$
>   \begin{pmatrix} -2.004 & 1.0005 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\ 0.998 & -2.008 & 1.002 & 0 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0.9955 & -2.012 & 1.0045 & 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0.992 & -2.016 & 1.008 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0.9875 & -2.02 & 1.0125 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0.982 & -2.024 & 1.018 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0.9755 & -2.028 & 1.0245 & 0 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0.968 & -2.032 & 1.032 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0.9595 & -2.036 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \\ y_4 \\ y_5 \\ y_6 \\ y_7 \\ y_8 \\ y_9 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ -5.2025 \end{pmatrix}
>   $$
>
> 3. Bảng sai số:
> $$
> \begin{array}{|c|c|c|}
> \hline
> n & h & \text{Sai số lớn nhất } \mathcal{O}(h^2) \\
> \hline
> 10  & 0.1  & 2.7370 \times 10^{-3} \\
> 100 & 0.01 & 2.7604 \times 10^{-5} \\
> \hline
> \end{array}
> $$
> 
> 4. Code:
> - bvp_fdm.m
> (Sử dụng lại hàm đã định nghĩa ở câu 1)
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu bai toan
> > p = @(x) x.^2; 
> > q = @(x) -4*x; 
> > r = @(x) 0; 
> > 
> > a = 0; b = 1;
> > alpha = 0; beta = 5;
> > 
> > h_req = [0.1; 0.01];
> > n_array = (b - a) ./ h_req;
> > max_err = zeros(length(n_array), 1);
> > 
> > % Nghiem chinh xac
> > y_exact = @(x) x.^4 + 4*x;
> > 
> > % Tinh toan va ve do thi
> > figure('Color', 'w');
> > x_plot = linspace(a, b, 400);
> > plot(x_plot, y_exact(x_plot), 'k-', 'LineWidth', 2); hold on;
> > 
> > colors = lines(length(n_array)); markers = {'s', 'd'};
> > 
> > for i = 1:length(n_array)
> >     [x_app, y_app] = bvp_fdm(p, q, r, a, b, alpha, beta, n_array(i));
> >     max_err(i) = max(abs(y_exact(x_app) - y_app)); 
> >     plot(x_app, y_app, '--', 'Marker', markers{i}, 'Color', colors(i,:), 'LineWidth', 1.2);
> > end
> > 
> > xlim([0.4, 0.7]); 
> > ylim([1.6, 3.1]); 
> > 
> > legend(['Chính xác', arrayfun(@(h) sprintf('h = %.2f', h), h_req, 'UniformOutput', false)], 'Location', 'best');
> > title('So sánh nghiệm Bài 2 (Góc nhìn phóng to x = [0.4, 0.7])'); 
> > xlabel('x'); ylabel('y(x)'); grid on; hold off;
> > 
> > %% Hien thi bang sai so
> > disp('--- BẢNG SAI SỐ THEO CÁC TRƯỜNG HỢP H ---');
> > bang_sai_so = table(n_array, h_req, max_err, 'VariableNames', {'n', 'h', 'Max_Error'});
> > disp(bang_sai_so);
> > ```
> 
> ![[THGTS_Tuần 8 - Bài 2.webp]]

> [!exr] 
> Cho phương trình đối lưu – khuếch tán 1D ở trạng thái dừng:
> $$\varepsilon u'' - u' = -1, \quad 0 < x < 1 \tag{4.1}$$
> với điều kiện biên:
> $$u(0) = 1, \quad u(1) = 3 \tag{4.2}$$
> a) Kiểm tra rằng nghiệm chính xác là:
> $$u(x) = 1 + x + \left(\frac{e^{x/\varepsilon} - 1}{e^{1/\varepsilon} - 1}\right) \tag{4.3}$$
> b) So sánh hai phương pháp sai phân hữu hạn sau với $\varepsilon = 0.3, 0.1, 0.05,$ và $0.0005$:
> (1) Sơ đồ sai phân trung tâm:
> $$\varepsilon \frac{U_{i-1} - 2U_i + U_{i+1}}{h^2} - \frac{U_{i+1} - U_{i-1}}{2h} = -1 \tag{4.4}$$
> (2) Sơ đồ sai phân trung tâm – upwind:
> $$\varepsilon \frac{U_{i-1} - 2U_i + U_{i+1}}{h^2} - \frac{U_i - U_{i-1}}{h} = -1 \tag{4.5}$$
> Vẽ đồ thị nghiệm xấp xỉ và nghiệm chính xác với $h = 0.1, h = \frac{1}{25},$ và $h = 0.01$. Có thể sử dụng lệnh `subplot` trong Matlab để hiển thị nhiều đồ thị trên cùng một hình.

> [!sol]
> a) Kiểm tra nghiệm chính xác:
> Ta cần kiểm tra hàm số thỏa mãn điều kiện biên và thỏa phương trình vi phân.
> - Kiểm tra điều kiện biên
> 	- Hàm số đề bài cho: $u(x) = 1 + x + \frac{e^{x/\varepsilon} - 1}{e^{1/\varepsilon} - 1}$
> 	
> 	- Tại biên trái $x = 0$:
> 	  $$u(0) = 1 + 0 + \frac{e^{0/\varepsilon} - 1}{e^{1/\varepsilon} - 1} = 1 + \frac{1 - 1}{e^{1/\varepsilon} - 1} = 1 + 0 = 1$$
> 	  *(Thỏa mãn điều kiện biên thứ nhất $u(0) = 1$)*
> 	
> 	- Tại biên phải $x = 1$:
> 	  $$u(1) = 1 + 1 + \frac{e^{1/\varepsilon} - 1}{e^{1/\varepsilon} - 1} = 2 + 1 = 3$$
> 	  *(Thỏa mãn điều kiện biên thứ hai $u(1) = 3$)*
> 
> - Thỏa phương trình vi phân:
> 	Ta lần lượt tính đạo hàm bậc nhất và bậc hai của $u(x)$ theo biến $x$:
> 	
> 	- Đạo hàm bậc nhất $u'(x)$:
> 	  $$u'(x) = \frac{d}{dx} \left[ 1 + x + \frac{e^{x/\varepsilon} - 1}{e^{1/\varepsilon} - 1} \right] = 1 + \frac{1}{e^{1/\varepsilon} - 1} \cdot \left( \frac{1}{\varepsilon} e^{x/\varepsilon} \right) = 1 + \frac{e^{x/\varepsilon}}{\varepsilon(e^{1/\varepsilon} - 1)}$$
> 	
> 	- Đạo hàm bậc hai $u''(x)$:
> 	  $$u''(x) = \frac{d}{dx} \left[ u'(x) \right] = \frac{1}{\varepsilon(e^{1/\varepsilon} - 1)} \cdot \left( \frac{1}{\varepsilon} e^{x/\varepsilon} \right) = \frac{e^{x/\varepsilon}}{\varepsilon^2(e^{1/\varepsilon} - 1)}$$
> 	
> 	- Thay $u'(x)$ và $u''(x)$ vào vế trái phương trình $(4.1)$:
> 	$$
> 	\begin{align}
> 	\text{VT} &=  \varepsilon u''(x) - u'(x) \\
> 	&=  \varepsilon \cdot \left[ \frac{e^{x/\varepsilon}}{\varepsilon^2(e^{1/\varepsilon} - 1)} \right] - \left[ 1 + \frac{e^{x/\varepsilon}}{\varepsilon(e^{1/\varepsilon} - 1)} \right] \\
> 	&= \frac{e^{x/\varepsilon}}{\varepsilon(e^{1/\varepsilon} - 1)} - 1 - \frac{e^{x/\varepsilon}}{\varepsilon(e^{1/\varepsilon} - 1)} = -1 = \text{VP}
> 	\end{align}
> 	$$
>	
> - Kết luận: $u(x)$ là nghiệm chính xác của bài toán.
>
> b) So sánh hai phương pháp sai phân hữu hạn sau với $\varepsilon = 0.3, 0.1, 0.05,$ và $0.0005$:
> 
> 1. Code:
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu
> > a = 0; b = 1; alpha = 1; beta = 3;
> > eps_array = [0.3, 0.1, 0.05, 0.0005];
> > h_array = [0.1, 1/25, 0.01];
> > 
> > % Nghiem chinh xac
> > u_exact = @(x, ep) 1 + x + (exp(x./ep) - 1)./(exp(1./ep) - 1);
> > 
> > fig = figure('Color', 'w', 'Position', [50, 20, 1200, 1200], 'Name', 'Kết quả của từng trường hợp');
> > tiledlayout(4, 3, 'TileSpacing', 'compact', 'Padding', 'compact');
> > 
> > % Xet tung gia tri Epsilon (tuong ung tung hang)
> > for e_idx = 1:length(eps_array)
> >     ep = eps_array(e_idx);
> > 
> >     % Xet tung buoc luoi h (Tương ung voi tung cot trong hang)
> >     for h_idx = 1:length(h_array)
> >         h = h_array(h_idx);
> >         n = round((b - a) / h);
> >         x_mesh = linspace(a, b, n+1)';
> >         
> >         % --- So do sai phan trung tam (4.4) ---
> >         A_cd = sparse(n-1, n-1); F_cd = zeros(n-1, 1);
> >         for i = 1:n-1
> >             A_cd(i,i) = -2*ep/(h^2); 
> >             F_cd(i) = -1;
> >             if i > 1
> >                 A_cd(i,i-1) = ep/(h^2) + 1/(2*h); 
> >             else
> >                 F_cd(i) = F_cd(i) - (ep/(h^2) + 1/(2*h))*alpha; 
> >             end
> >             if i < n-1
> >                 A_cd(i,i+1) = ep/(h^2) - 1/(2*h); 
> >             else
> >                 F_cd(i) = F_cd(i) - (ep/(h^2) - 1/(2*h))*beta; 
> >             end
> >         end
> >         u_cd = [alpha; A_cd \ F_cd; beta];
> >         
> >         % --- So do sai phan Upwind (4.5) ---
> >         A_up = sparse(n-1, n-1); F_up = zeros(n-1, 1);
> >         for i = 1:n-1
> >             A_up(i,i) = -2*ep/(h^2) - 1/h; 
> >             F_up(i) = -1;
> >             if i > 1
> >                 A_up(i,i-1) = ep/(h^2) + 1/h; 
> >             else
> >                 F_up(i) = F_up(i) - (ep/(h^2) + 1/h)*alpha; 
> >             end
> >             if i < n-1
> >                 A_up(i,i+1) = ep/(h^2); 
> >             else
> >                 F_up(i) = F_up(i) - (ep/(h^2))*beta; 
> >             end
> >         end
> >         u_up = [alpha; A_up \ F_up; beta];
> >         
> >         nexttile;
> >         x_fine = linspace(a, b, 500);
> >         
> >         % Ve do thi
> >         plot(x_fine, u_exact(x_fine, ep), 'k-', 'LineWidth', 1.5); hold on;
> >         plot(x_mesh, u_cd, 'r--o', 'MarkerSize', 4, 'LineWidth', 1);
> >         plot(x_mesh, u_up, 'b-.s', 'MarkerSize', 4, 'LineWidth', 1);
> >         
> >         title(sprintf('\\epsilon = %g, h = %g', ep, h)); 
> >         xlabel('x'); ylabel('u(x)');
> >         grid on;
> >         
> >         if h_idx == 1
> >             legend('Chính xác', 'Trung tâm', 'Upwind', 'Location', 'best');
> >         end
> >         hold off;
> >     end
> > end
> > ```
>
> ![[THGTS_Tuần 8 - Bài 3.webp]]
>
> 2. Nhận xét:
> - Với các giá trị $\varepsilon$ lớn ($\varepsilon = 0.3, 0.1$), cả hai sơ đồ trung tâm và Upwind đều cho kết quả xấp xỉ tốt và bám sát nghiệm chính xác trên mọi lưới $h$.
> - Với $\varepsilon$ nhỏ ($\varepsilon = 0.05$ và đặc biệt là $\varepsilon = 0.0005$):
> 	- Sơ đồ sai phân trung tâm bị mất ổn định trên các lưới $h = 0.1$ và $h = 1/25$, xuất hiện hiện tượng dao động răng cưa quanh lớp biên. Hiện tượng này chỉ biến mất khi lưới đủ mịn ($h = 0.01$). 
> 	- Sơ đồ Upwind khắc phục được hiện tượng dao động răng cưa trên tất cả các lưới, đảm bảo nghiệm luôn ổn định.

# Tuần 10

> [!exr] 
> Viết phương trình sai phân với $n = 4$ để xấp xỉ nghiệm của phương trình có điều kiện biên bằng phương pháp biến ảo trung tâm:
> $$y'' + y' - 2y = (1 - x^2)e^{-x}, \quad y(0) = -1, \quad y'(1) = \frac{1}{e}, \quad 0 \le x \le 1$$
> Trong trường hợp $n = 5, 10, 20, 40$. Dùng Matlab để xấp xỉ nghiệm cho bài toán trên và vẽ đồ thị giữa nghiệm chính xác và nghiệm xấp xỉ.

> [!sol] 
> 1. Tính toán:
> - Chi tiết: 
> 	- Trên miền $x \in [0, 1]$, với $n = 4$, bước lưới được xác định là $h = \frac{1 - 0}{4} = 0.25$.
> 	- Với $x_i = i \cdot h$, $x_i \in \{ 0, 0.25, 0.5, 0.75, 1 \}$ (tương ứng với các ẩn $y_0, y_1, y_2, y_3, y_4$).
> 	- Tại nút biên trái $x_0 = 0$: $y_0 = -1$.
> 	- Tại nút biên phải $x_4 = 1$: Điều kiện đạo hàm $y'(1) = \frac{1}{e}$.
> 	
> 	- Áp dụng công thức sai phân trung tâm cho $y''$ và $y'$ tại $x_i$:
> 	$$\frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} + \left(\frac{y_{i+1} - y_{i-1}}{2h}\right) - 2y_i = (1 - x_i^2)e^{-x_i}$$
> 	- Nhân hai vế với $h^2 = (0.25)^2 = 0.0625$ và gom nhóm theo $y_{i-1}$, $y_i$, $y_{i+1}$:
> 	$$
> 	\left(1 - \frac{h}{2}\right)y_{i-1} - (2 + 2h^2)y_i + \left(1 + \frac{h}{2}\right)y_{i+1} = h^2(1 - x_i^2)e^{-x_i}
> 	$$
> 	- Thay giá trị cụ thể $h = 0.25$ vào phương trình trên, ta được:
> 	$$
> 	0.875y_{i-1} - 2.125y_i + 1.125y_{i+1} = 0.0625(1 - x_i^2)e^{-x_i} \tag{1}
> 	$$
> 
>- Sử dụng biến ảo cho đạo hàm tại $x_4 = 1$:
> Ta giả sử tồn tại một nút ảo $x_5 = 1 + h$ với giá trị hàm tương ứng là $y_5$.
> 	- Áp dụng công thức sai phân trung tâm cho đạo hàm tại biên phải $x_4$:
> 	$$y'(1) = \frac{y_5 - y_3}{2h} = \frac{1}{e} \implies y_5 = y_3 + \frac{2h}{e} = y_3 + \frac{0.5}{e}$$
> 	- Thay $y_5$ vào phương trình sai phân $(1)$ tại vị trí $i = 4$:
> 	$$0.875y_3 - 2.125y_4 + 1.125y_5 = 0.0625(1 - 1^2)e^{-1}$$
> 	$$ \iff 0.875y_3 - 2.125y_4 + 1.125\left(y_3 + \frac{0.5}{e}\right) = 0$$
> 	- Rút gọn và chuyển vế:
> 	$$2y_3 - 2.125y_4 = -\frac{0.5625}{e} \approx -0.2069$$
> 
> 2. Ma trận biểu diễn:
> - Thay $x_i = 0.25, 0.5, 0.75$ vào phương trình $(1)$ kết hợp với biên ảo tại $x_4$:
> 	- Tại $x_1 = 0.25$:  $0.875y_0 - 2.125y_1 + 1.125y_2 = 0.0625(1 - 0.25^2)e^{-0.25} \approx 0.0456$
> 	  Thay $y_0 = -1$ và chuyển vế: $-2.125y_1 + 1.125y_2 = 0.0456 + 0.875 = 0.9206$
> 	- Tại $x_2 = 0.50$: $0.875y_1 - 2.125y_2 + 1.125y_3 = 0.0625(1 - 0.5^2)e^{-0.5} \approx 0.0284$
> 	- Tại $x_3 = 0.75$: $0.875y_2 - 2.125y_3 + 1.125y_4 = 0.0625(1 - 0.75^2)e^{-0.75} \approx 0.0129$
> 	- Tại biên ảo $x_4 = 1.0$: $2y_3 - 2.125y_4 = -\frac{0.5625}{e} \approx -0.2069$
> - Ma trận biểu diễn hệ $A \cdot Y = F$:
> $$
> \begin{pmatrix} -2.125 & 1.125 & 0 & 0 \\ 0.875 & -2.125 & 1.125 & 0 \\ 0 & 0.875 & -2.125 & 1.125 \\ 0 & 0 & 2 & -2.125 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \\ y_4 \end{pmatrix} = \begin{pmatrix} 0.9206 \\ 0.0284 \\ 0.0129 \\ -0.2069 \end{pmatrix}
> $$
> 
> 3. Code:
> - bvp_fmd_ghost.m
> > [!code]- Matlab
> > ```matlab
> > function [x, y] = bvp_fdm_ghost(p, q, r, a, b, alpha, g_beta, n)
> > % Giai BVP: y'' + p(x)y' + q(x)y = r(x)
> > % Bien trai Dirichlet: y(a) = alpha
> > % Bien phai Neumann (Bien ao trung tam): y'(b) = g_beta
> > 
> > h = (b - a) / n;
> > x = linspace(a, b, n+1)';
> > 
> > A = sparse(n, n); 
> > F = zeros(n, 1);
> > 
> > % Tu x_i den x_n-1 
> > for i = 1:n-1
> >     xi = x(i+1);
> >     A_low  = 1 - (h/2)*p(xi);
> >     A_diag = -2 + (h^2)*q(xi);
> >     A_up   = 1 + (h/2)*p(xi);
> >     A(i, i) = A_diag; 
> >     F(i) = h^2 * r(xi);
> >     if i > 1
> >         A(i, i-1) = A_low; 
> >     else
> >         F(i) = F(i) - A_low * alpha; % y_0 = alpha
> >     end
> >     if i < n-1
> >         A(i, i+1) = A_up; 
> >     end
> > end
> > 
> > % Bien ao trung tam tai x_n 
> > A_low  = 1 - (h/2)*p(b);
> > A_diag = -2 + (h^2)*q(b);
> > A_up   = 1 + (h/2)*p(b);
> > 
> > A(n, n) = A_diag;
> > A(n, n-1) = A_low + A_up;
> > F(n) = h^2 * r(b) - A_up * (2 * h * g_beta);
> > 
> > y_in = A \ F;
> > y = [alpha; y_in];
> > end
> > ```
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu bai toan
> > p = @(x) 1; 
> > q = @(x) -2; 
> > r = @(x) (1 - x.^2).*exp(-x); 
> > 
> > a = 0; b = 1; 
> > alpha = -1;       
> > g_beta = 1/exp(1); 
> > 
> > n_array = [5; 10; 20; 40];
> > h_array = (b - a) ./ n_array;
> > max_err = zeros(length(n_array), 1);
> > 
> > % Nghiem chinh xac
> > y_exact = @(x) -x .* exp(-x);
> > 
> > % Tinh toan va ve do thi
> > figure('Color', 'w');
> > x_plot = linspace(a, b, 200);
> > plot(x_plot, y_exact(x_plot), 'k-', 'LineWidth', 2); hold on;
> > 
> > colors = lines(length(n_array)); 
> > markers = {'o', 's', '^', 'd'};
> > 
> > for i = 1:length(n_array)
> >     [x_app, y_app] = bvp_fdm_ghost(p, q, r, a, b, alpha, g_beta, n_array(i));
> >     
> >     max_err(i) = max(abs(y_exact(x_app) - y_app));
> >     
> >     plot(x_app, y_app, '--', 'Marker', markers{i}, 'Color', colors(i,:), 'LineWidth', 1.2);
> > end
> > 
> > legend([{'Chính xác'}, arrayfun(@(n) sprintf('n = %d', n), n_array', 'UniformOutput', false)], 'Location', 'best');
> > title('So sánh nghiệm phương pháp biến ảo trung tâm'); 
> > xlabel('x'); ylabel('y(x)'); grid on; hold off;
> > 
> > % Hien thi bang sai so
> > disp('--- BẢNG SAI SỐ LỚN NHẤT PHƯƠNG PHÁP BIẾN ẢO ---');
> > bang_sai_so = table(n_array, h_array, max_err, 'VariableNames', {'n', 'h', 'Max_Error'});
> > disp(bang_sai_so);
> > ```
> 
> ![[THGTS_Tuần 10 - Bài 1.webp]]

> [!exr] 
> Bài toán có điều kiện biên sau:
> $$y'' + e^x y' - xy = e^{-x}(-x^2 + 2x - 3) - x + 2, \quad y(0) = 1, \quad y'(1) = \frac{1}{e}, \quad 0 \le x \le 1$$
> a) Dựa vào phương pháp biến ảo trung tâm (ghost point method) để giải bài toán trên với $h = 0.25$.
> b) Với $h = 0.1$, dùng Matlab để xấp xỉ nghiệm cho bài toán trên và vẽ đồ thị giữa nghiệm chính xác và nghiệm xấp xỉ, với nghiệm chính xác $y = (x - 1)e^{-x}$. Lập bảng sai số.

> [!sol] 
> 1. Tính toán: 
> - Chi tiết:
> 	- Trên miền $x \in [0, 1]$, với $h = 0.25$, $x_i \in \{ 0, 0.25, 0.5, 0.75, 1 \}$ (tương ứng với các ẩn $y_0, y_1, y_2, y_3, y_4$).
> 	- Tại nút biên trái $x_0 = 0$: $y_0 = 1$.
> 	- Tại nút biên phải $x_4 = 1$: Điều kiện đạo hàm $y'(1) = \frac{1}{e}$.
> 	- Áp dụng công thức sai phân trung tâm cho $y''$ và $y'$ tại $x_i$:
> 	$$\frac{y_{i+1} - 2y_i + y_{i-1}}{h^2} + e^{x_i} \left(\frac{y_{i+1} - y_{i-1}}{2h}\right) - x_i y_i = e^{-x_i}(-x_i^2 + 2x_i - 3) - x_i + 2$$
> 	
> 	- Nhân hai vế với $h^2 = 0.0625$ và gom nhóm theo các ẩn $y_{i-1}, y_i, y_{i+1}$, ta được:
> 	  $$\left(1 - \frac{h}{2}e^{x_i}\right)y_{i-1} - (2 + h^2 x_i)y_i + \left(1 + \frac{h}{2}e^{x_i}\right)y_{i+1} = h^2 \left[ e^{-x_i}(-x_i^2 + 2x_i - 3) - x_i + 2 \right]$$
> 	
> 	- Thay $h = 0.25$, phương trình trở thành:
> 	  $$\left(1 - 0.125e^{x_i}\right)y_{i-1} - (2 + 0.0625x_i)y_i + \left(1 + 0.125e^{x_i}\right)y_{i+1} = 0.0625 \cdot r(x_i) \tag{1}$$
> 
> - Sử dụng biến ảo cho đạo hàm tại $x_4 = 1$:
> 	- Giả sử tồn tại nút ảo $x_5 = 1 + h$ bên ngoài miền với giá trị $y_5$. Công thức sai phân trung tâm tại biên phải:
> 	  $$y'(1) = \frac{y_5 - y_3}{2h} = \frac{1}{e} \implies y_5 = y_3 + \frac{2h}{e} = y_3 + \frac{0.5}{e} \approx y_3 + 0.1839$$
> 	- Thay $x_4 = 1$ và $y_5$ vào phương trình $(1)$:
> 	  $$(1 - 0.125e^1)y_3 - (2 + 0.0625)y_4 + (1 + 0.125e^1)y_5 = 0.0625 \cdot r(1)$$
> 	$$0.6602 y_3 - 2.0625 y_4 + 1.3398 \left( y_3 + 0.1839 \right) = 0.0165$$
> 	- Rút gọn và chuyển vế:
> 	$$2 y_3 - 2.0625 y_4 = 0.0165 - 0.2464 = -0.2299$$
> 
> 2. Ma trận biểu diễn:
> - Thay $x_i = 0.25, 0.5, 0.75$ vào $(1)$ kết hợp biến ảo tại $x_4$: 
> 	- Tại $x_1 = 0.25$: $0.8395 y_0 - 2.0156 y_1 + 1.1605 y_2 = -0.0154$
> 	  Thay $y_0 = 1$ và chuyển vế: $-2.0156 y_1 + 1.1605 y_2 = -0.0154 - 0.8395 = -0.8549$
> 	- Tại $x_2 = 0.50$: $0.7939 y_1 - 2.0313 y_2 + 1.2061 y_3 = 0.0085$
> 	- Tại $x_3 = 0.75$: 0.7354 y_2 - 2.0469 y_3 + 1.2646 y_4 = 0.0172$
> 	- Tại biên ảo $x_4 = 1.0$: $2 y_3 - 2.0625 y_4 = -0.2299$
> 
> - Ma trận biểu diễn $A \cdot Y = F$:
> $$
> \begin{pmatrix} -2.0156 & 1.1605 & 0 & 0 \\ 0.7939 & -2.0313 & 1.2061 & 0 \\ 0 & 0.7354 & -2.0469 & 1.2646 \\ 0 & 0 & 2 & -2.0625 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \\ y_3 \\ y_4 \end{pmatrix} = \begin{pmatrix} -0.8549 \\ 0.0085 \\ 0.0172 \\ -0.2299 \end{pmatrix}
> $$
>
> 2. Bảng sai số:
> $$
> \begin{array}{|c|c|c|}
> \hline
> n & h & \text{Sai số lớn nhất } \mathcal{O}(h^2) \\
> \hline
> 10  & 0.1  & 3.7709 \times 10^{-4} \\
> 20  & 0.05 & 9.4729 \times 10^{-5} \\
> 100 & 0.01 & 3.7842 \times 10^{-6} \\
> \hline
> \end{array}
> $$
> 
> 3. Code:
> - bvp_fmd_ghost.m
> (Sử dụng lại hàm đã định nghĩa ở câu 1)
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu
> > p = @(x) exp(x); 
> > q = @(x) -x; 
> > r = @(x) exp(-x).*(-x.^2 + 2*x - 3) - x + 2;
> > 
> > a = 0; b = 1; 
> > alpha = -1;       
> > g_beta = 1/exp(1); 
> > 
> > h_array = [0.1; 0.05; 0.01];
> > n_array = round((b - a) ./ h_array);
> > max_err = zeros(length(n_array), 1);
> > 
> > % Nghiem chinh xac
> > y_exact = @(x) (x - 1) .* exp(-x);
> > 
> > % Tinh toan va ve do thi
> > figure('Color', 'w');
> > x_plot = linspace(a, b, 300);
> > plot(x_plot, y_exact(x_plot), 'k-', 'LineWidth', 2); hold on;
> > 
> > colors = lines(length(n_array)); 
> > markers = {'o', 's', '^'};
> > 
> > for i = 1:length(n_array)
> >     [x_app, y_app] = bvp_fdm_ghost(p, q, r, a, b, alpha, g_beta, n_array(i));
> >     
> >     max_err(i) = max(abs(y_exact(x_app) - y_app));
> >     
> >     plot(x_app, y_app, '--', 'Marker', markers{i}, 'Color', colors(i,:), ...
> >          'LineWidth', 1.2, 'MarkerIndices', 1:round(n_array(i)/10)+1:length(x_app));
> > end
> > 
> > legend([{'Chính xác'}, arrayfun(@(h) sprintf('h = %g', h), h_array', 'UniformOutput', false)], 'Location', 'best');
> > title('So sánh nghiệm phương pháp biến ảo trung tâm'); 
> > xlabel('x'); ylabel('y(x)'); grid on; hold off;
> > 
> > % Hien thi bang sai so
> > disp('--- BẢNG SAI SỐ LỚN NHẤT PHƯƠNG PHÁP BIẾN ẢO ---');
> > bang_sai_so = table(n_array, h_array, max_err, 'VariableNames', {'n', 'h', 'Max_Error'});
> > disp(bang_sai_so);
> > ```
> 
> ![[THGTS_Tuần 10 - Bài 2.webp]]

# Tuần 11

> [!exr] Bài toán 1 (Tích phân số)
> Sử dụng MATLAB để xấp xỉ các tích phân sau bằng quy tắc hình thang (Trapezoidal rule) và quy tắc Simpson, sau đó sử dụng công thức sai số để tìm chặn trên của sai số và so sánh nó với sai số thực tế:
> 
> a) $\int_{-0.25}^{0.25} (\cos x)^2 \, dx$
> 
> b) $\int_{-0.5}^{0} x \ln(x + 1) \, dx$
> 
> c) $\int_{0.75}^{1.3} ((\sin x)^2 - 2x \sin x + 1) \, dx$
> 
> d) $\int_{e}^{e+1} \frac{1}{x \ln x} \, dx$

> [!sol] 
> 1. Lý thuyết:
> Với tích phân $I = \int_{a}^{b} f(x) \, dx$, ta có các công thức xấp xỉ đơn trên đoạn $[a, b]$:
> 
> - Quy tắc hình thang (Trapezoidal Rule)
> 	- Công thức xấp xỉ ($n=1$, bước $h = b-a$):
> 	  $$T(f) = \frac{h}{2} [f(a) + f(b)]$$
> 	- Công thức chặn trên sai số:
> 	  $$\lvert E_T \rvert \le \frac{h^3}{12} \cdot M_2 \quad \text{với } M_2 = \max_{x \in [a,b]} \lvert f''(x) \rvert$$
> 
> - Quy tắc Simpson 1/3 (Simpson's Rule)
> 	- Công thức xấp xỉ ($n=2$, bước $h = \frac{b-a}{2}$, nút giữa $m = \frac{a+b}{2}$):
> 	  $$S(f) = \frac{h}{3} [f(a) + 4f(m) + f(b)]$$
> 	- Công thức chặn trên sai số:
> 	  $$\lvert E_S \rvert \le \frac{h^5}{90} \cdot M_4 \quad \text{với } M_4 = \max_{x \in [a,b]} \lvert f^{(4)}(x) \rvert$$
> 
> 2. Tính toán
> a) $f(x) = (\cos x)^2$ trên $[-0.25, 0.25]$
> 
> - Nghiệm chính xác:
> $$I = \int_{-0.25}^{0.25} \frac{1 + \cos(2x)}{2} \, dx = \left[ \frac{x}{2} + \frac{\sin(2x)}{4} \right]_{-0.25}^{0.25} \approx 0.4794255$$
> 
> - Quy tắc Hình thang ($h = 0.5$):
> 	- $f(-0.25) = (\cos(-0.25))^2 \approx 0.9387913$
> 	- $f(0.25) = (\cos(0.25))^2 \approx 0.9387913$
> 	- Giá trị xấp xỉ: $T = \frac{0.5}{2} [0.9387913 + 0.9387913] \approx 0.4693957$
> 	- Sai số thực tế: $\lvert I - T \rvert = \lvert 0.4794255 - 0.4693957 \rvert \approx 0.0100298$
> 	- Chặn trên sai số ($M_2 = \max \lvert -2\cos(2x) \rvert = 2$): 
> 	  $$\lvert E_T \rvert \le \frac{0.5^3}{12} \cdot 2 \approx 0.0208333$$
> 	  *(Nhận xét: Sai số thực tế $0.0100 < 0.0208$, thỏa mãn chặn trên).*
> 
> - Quy tắc Simpson ($h = 0.25$, nút giữa $m = 0$):
> 	- $f(-0.25) \approx 0.9387913$, $f(0) = 1$, $f(0.25) \approx 0.9387913$
> 	- Giá trị xấp xỉ: $S = \frac{0.25}{3} [0.9387913 + 4(1) + 0.9387913] \approx 0.4897985$
> 	- Sai số thực tế: $\lvert I - S \rvert = \lvert 0.4794255 - 0.4897985 \rvert \approx 0.0103730$
> 	- Chặn trên sai số ($M_4 = \max \lvert 8\cos(2x) \rvert = 8$):
> 	  $$\lvert E_S \rvert \le \frac{0.25^5}{90} \cdot 8 \approx 0.0000868$$
>
> b) $f(x) = x \ln(x + 1)$ trên $[-0.5, 0]$
> 
>   - Nghiệm chính xác:
>     $$\begin{aligned} I = \int_{-0.5}^{0} x \ln(x + 1) \, dx &= \left[ \left(\frac{x^2 - 1}{2}\right) \ln(x + 1) - \frac{(x - 1)^2}{4} \right]_{-0.5}^{0} \\ &\approx -0.0511132 \end{aligned}$$
> 
>   - Quy tắc Hình thang ($h = 0.5$):
>     - $f(-0.5) = -0.5 \ln(-0.5 + 1) \approx 0.3465736$
>     - $f(0) = 0 \ln(0 + 1) = 0$
>     - Giá trị xấp xỉ: $T = \frac{0.5}{2} [0.3465736 + 0] \approx 0.0866434$
>     - Sai số thực tế: $\lvert I - T \rvert = \lvert -0.0511132 - 0.0866434 \rvert \approx 0.1377566$
>     - Chặn trên sai số ($M_2 = \max_{x \in [-0.5, 0]} \lvert \frac{x+2}{(x+1)^2} \rvert = 6$ tại $x = -0.5$):
>       $$\lvert E_T \rvert \le \frac{0.5^3}{12} \cdot 6 = 0.0625000$$
>       *(Nhận xét: Trong trường hợp hàm số có đạo hàm tăng nhanh tại biên dốc, sai số thực tế có thể vượt chặn trên nếu chỉ xét xấp xỉ đơn một đoạn $n=1$).*
> 
>   - Quy tắc Simpson ($h = 0.25$, nút giữa $m = -0.25$):
>     - $f(-0.5) \approx 0.3465736$, $f(-0.25) \approx 0.0719205$, $f(0) = 0$
>     - Giá trị xấp xỉ: $S = \frac{0.25}{3} [0.3465736 + 4(0.0719205) + 0] \approx 0.0528546$
>     - Sai số thực tế: $\lvert I - S \rvert = \lvert -0.0511132 - 0.0528546 \rvert \approx 0.1039678$
>     - Chặn trên sai số ($M_4 = \max_{x \in [-0.5, 0]} \lvert \frac{2x+8}{(x+1)^4} \rvert = 112$ tại $x = -0.5$):
>       $$\lvert E_S \rvert \le \frac{0.25^5}{90} \cdot 112 \approx 0.0012153$$
>
> c) $f(x) = (\sin x)^2 - 2x \sin x + 1$ trên $[0.75, 1.3]$
> 
>   - Nghiệm chính xác:
>     $$\begin{aligned} I &= \int_{0.75}^{1.3} \left[ (\sin x)^2 - 2x \sin x + 1 \right] \, dx \\ &= \left[ \frac{3x}{2} - \frac{\sin(2x)}{4} + 2x \cos x - 2\sin x \right]_{0.75}^{1.3} \approx 0.1581691 \end{aligned}$$
> 
>   - Quy tắc Hình thang ($h = 0.55$):
>     - $f(0.75) = (\sin(0.75))^2 - 2(0.75)\sin(0.75) + 1 \approx 0.4411133$
>     - $f(1.3) = (\sin(1.3))^2 - 2(1.3)\sin(1.3) + 1 \approx -0.5786720$
>     - Giá trị xấp xỉ: $T = \frac{0.55}{2} [0.4411133 + (-0.5786720)] \approx -0.0378286$
>     - Sai số thực tế: $\lvert I - T \rvert = \lvert 0.1581691 - (-0.0378286) \rvert \approx 0.1959977$
>     - Chặn trên sai số ($M_2 = \max \lvert 2\cos(2x) - 2\sin x - 2x\cos x \rvert \approx 2.5029$):
>       $$\lvert E_T \rvert \le \frac{0.55^3}{12} \cdot 2.5029 \approx 0.0346214$$
> 
>   - Quy tắc Simpson ($h = 0.275$, nút giữa $m = 1.025$):
>     - $f(0.75) \approx 0.4411133$, $f(1.025) \approx -0.0210459$, $f(1.3) \approx -0.5786720$
>     - Giá trị xấp xỉ: $S = \frac{0.275}{3} [0.4411133 + 4(-0.0210459) + (-0.5786720)] \approx -0.0203264$
>     - Sai số thực tế: $\lvert I - S \rvert = \lvert 0.1581691 - (-0.0203264) \rvert \approx 0.1784955$
>     - Chặn trên sai số ($M_4 = \max \lvert -8\cos(2x) + 4\sin x + 2x\cos x \rvert \approx 8.5714$):
>       $$\lvert E_S \rvert \le \frac{0.275^5}{90} \cdot 8.5714 \approx 0.0001511$$
>
> d) $f(x) = \frac{1}{x \ln x}$ trên $[e, e + 1]$
> 
>   - Nghiệm chính xác:
>     $$I = \int_{e}^{e+1} \frac{1}{x \ln x} \, dx = \left[ \ln(\lvert \ln x \rvert) \right]_{e}^{e+1} = \ln(\ln(e+1)) - \ln(\ln(e)) \approx 0.2711674$$
> 
>   - Quy tắc Hình thang ($h = 1$):
>     - $f(e) = \frac{1}{e \ln e} \approx 0.3678794$
>     - $f(e+1) = \frac{1}{(e+1) \ln(e+1)} \approx 0.2057996$
>     - Giá trị xấp xỉ: $T = \frac{1}{2} [0.3678794 + 0.2057996] \approx 0.2868395$
>     - Sai số thực tế: $\lvert I - T \rvert = \lvert 0.2711674 - 0.2868395 \rvert \approx 0.0156721$
>     - Chặn trên sai số ($M_2 = \max_{x \in [e, e+1]} \lvert \frac{2(\ln x)^2 + 3\ln x + 2}{x^3(\ln x)^3} \rvert \approx 0.3541$ tại $x = e$):
>       $$\lvert E_T \rvert \le \frac{1^3}{12} \cdot 0.3541 \approx 0.0295083$$
>       *(Nhận xét: Sai số thực tế $0.0157 < 0.0295$, thỏa mãn chặn trên).*
> 
>   - Quy tắc Simpson ($h = 0.5$, nút giữa $m = e + 0.5$):
>     - $f(e) \approx 0.3678794$, $f(e+0.5) \approx 0.2689551$, $f(e+1) \approx 0.2057996$
>     - Giá trị xấp xỉ: $S = \frac{0.5}{3} [0.3678794 + 4(0.2689551) + 0.2057996] \approx 0.2749166$
>     - Sai số thực tế: $\lvert I - S \rvert = \lvert 0.2711674 - 0.2749166 \rvert \approx 0.0037492$
>     - Chặn trên sai số ($M_4 = \max_{x \in [e, e+1]} \lvert f^{(4)}(x) \rvert \approx 1.2589$ tại $x = e$):
>       $$\lvert E_S \rvert \le \frac{0.5^5}{90} \cdot 1.2589 \approx 0.0004371$$
> 
> 3. Code:
> - trapezoid.m
> > [!code]- Matlab
> > ```matlab
> > function I_trap = trapezoid(f, a, b)
> >     h = b - a;
> >     I_trap = (h / 2) * (f(a) + f(b));
> > end
> > ```
> 
> - simpson.m
> > [!code]- Matlab
> > ```matlab
> > function I_simp = simpson(f, a, b)
> >     h = (b - a) / 2;
> >     m = (a + b) / 2;
> >     I_simp = (h / 3) * (f(a) + 4*f(m) + f(b));
> > end
> > ```
> 
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > % Du lieu
> > syms x;
> > prob(1).f = cos(x)^2;              prob(1).a = -0.25; prob(1).b = 0.25; prob(1).nameprob
> > prob(2).f = x*log(x + 1);          prob(2).a = -0.5;  prob(2).b = 0;    prob(2).name = 'b)';
> > prob(3).f = sin(x)^2 - 2*x*sin(x) + 1; prob(3).a = 0.75; prob(3).b = 1.3;  prob(3).name = 'c)';
> > prob(4).f = 1 / (x * log(x));      prob(4).a = exp(1);prob(4).b = exp(1)+1;prob(4).name = 'd)';
> > 
> > % Tinh toan
> > for i = 1:length(prob)
> >     f_sym = prob(i).f;
> >     a_val = prob(i).a;
> >     b_val = prob(i).b;
> >     f = matlabFunction(f_sym);
> >     
> >     % Nghiem chinh xac
> >     I_exact = double(int(f_sym, a_val, b_val));
> >     
> >     % Quy tac hinh thang
> >     I_trap = trapezoid(f, a_val, b_val);
> >     err_actual_T = abs(I_exact - I_trap);
> >     h_T = b_val - a_val;
> >     f_diff2 = diff(f_sym, x, 2);
> >     f_diff2_fn = matlabFunction(f_diff2);
> >     x_fine = linspace(a_val, b_val, 1000); 
> >     M2 = max(abs(f_diff2_fn(x_fine)));
> >     err_bound_T = (h_T^3 / 12) * M2;
> >     
> >     % Quy tac simpson
> >     I_simp = simpson(f, a_val, b_val);
> >     err_actual_S = abs(I_exact - I_simp);
> >     h_S = (b_val - a_val) / 2;
> >     f_diff4 = diff(f_sym, x, 4);
> >     f_diff4_fn = matlabFunction(f_diff4);
> >     M4 = max(abs(f_diff4_fn(x_fine)));
> >     err_bound_S = (h_S^5 / 90) * M4;
> >     
> >     % In ket qua
> >     fprintf('Kết quả câu %s', prob(i).name);
> >     fprintf('Tích phân hàm f(x) = %s trên đoạn [%g, %g]\n', char(f_sym), a_val, b_val);
> >     fprintf('Giá trị chính xác: %.7f\n\n', I_exact);
> > end
> > ```

> [!exr]
> Bước nhảy $h$ phải nhỏ đến mức nào để sai số nhỏ hơn $10^{-4}$ khi áp dụng quy tắc hình thang cho
> $$I = \int_{1}^{2} \ln x \, dx.$$

> [!sol] 
> 1. Công thức chặn trên sai số cho quy tắc hình thang mở rộng:
>   $$\lvert E_T \rvert \le \frac{(b - a) \cdot h^2}{12} \cdot M_2$$
>   Trong đó:
> 	- $a = 1, b = 2 \implies b - a = 2 - 1 = 1$.
> 	- $M_2 = \max_{x \in [a, b]} \lvert f''(x) \rvert$.
> 
> 2. Tìm giá trị cực đại của đạo hàm bậc hai ($M_2$)
> - Xét hàm số $f(x) = \ln x$ trên đoạn $[1, 2]$:
> 	- Đạo hàm bậc nhất: $f'(x) = \frac{1}{x}$
> 	- Đạo hàm bậc hai: $f''(x) = -\frac{1}{x^2}$
> 
> - Ta có:
> $$\lvert f''(x) \rvert = \left\lvert -\frac{1}{x^2} \right\rvert = \frac{1}{x^2}$$
> 
> - Vì hàm số $\frac{1}{x^2}$ là hàm nghịch biến trên đoạn $[1, 2]$, ta có giá trị lớn nhất đạt được tại điểm biên trái $x = 1$:
>   $$M_2 = \max_{x \in [1, 2]} \frac{1}{x^2} = \frac{1}{1^2} = 1$$
> 
> 3. Xác định điều kiện cho bước nhảy $h$:
> - Thay các giá trị $b - a = 1$ và $M_2 = 1$ vào công thức chặn trên sai số, ta có:
> $$\lvert E_T \rvert \le \frac{1 \cdot h^2}{12} \cdot 1 = \frac{h^2}{12}$$
> 
> - Để sai số luôn nhỏ hơn $10^{-4}$:
>   $$\frac{h^2}{12} < 10^{-4}$$
>   $$\implies h^2 < 12 \times 10^{-4}$$
> - Lấy căn bậc hai hai vế ($h > 0$):
> $$\implies h < \sqrt{12 \times 10^{-4}} = \sqrt{12} \times 10^{-2} \approx 3.4641 \times 10^{-2} = 0.034641$$
>
> - Vậy bước nhảy $h$ phải nhỏ hơn $0.034641$ ($h < \frac{\sqrt{3}}{50}$) để sai số nhỏ hơn $10^{-4}$.

# Tuần 12

> [!exr] 
> Sử dụng MATLAB để xấp xỉ các tích phân sau bằng quy tắc Midpoint, Sau đó, sử dụng công thức sai số để tìm chặn trên của sai số. So sánh giá trị xấp xỉ với giá trị xấp xỉ có được từ Quy tắc hình thang (Trapezoidal rule) và quy tắc Simpson.
> 
> a) $\int_{-0.25}^{0.25} (\cos x)^2 \, dx$
> 
> b) $\int_{-0.5}^{0} x \ln(x + 1) \, dx$
> 
> c) $\int_{0.75}^{1.3} ((\sin x)^2 - 2x \sin x + 1) \, dx$
> 
> d) $\int_{e}^{e+1} \frac{1}{x \ln x} \, dx$

> [!sol] 
> 
> 1. Lý thuyết:
> Với tích phân $I = \int_{a}^{b} f(x) \, dx$, quy tắc Midpoint đơn (Midpoint Rule):
> 
> - Công thức xấp xỉ ($n=1$, bước $h = b - a$, nút giữa $m = \frac{a+b}{2}$):
>   $$M(f) = h \cdot f(m)$$
> - Công thức chặn trên sai số:
>   $$\lvert E_M \rvert \le \frac{h^3}{24} \cdot M_2 \quad \text{với } M_2 = \max_{x \in [a,b]} \lvert f''(x) \rvert$$
> 
> 2. Tính toán:
> 
> a) $f(x) = (\cos x)^2$ trên $[-0.25, 0.25]$
> 
> - Nghiệm chính xác:
>   $$I = \int_{-0.25}^{0.25} \frac{1 + \cos(2x)}{2} \, dx = \left[ \frac{x}{2} + \frac{\sin(2x)}{4} \right]_{-0.25}^{0.25} \approx 0.4794255$$
> 
> - Quy tắc Midpoint ($h = 0.5$, nút giữa $m = 0$):
> 	  - Giá trị tại Midpoint: $f(0) = (\cos(0))^2 = 1$
> 	  - Giá trị xấp xỉ: $M = 0.5 \cdot f(0) = 0.5 \cdot 1 = 0.5000000$
> 	  - Sai số thực tế: $\lvert I - M \rvert = \lvert 0.4794255 - 0.5000000 \rvert = 0.0205745$
> 	  - Chặn trên sai số ($M_2 = \max \lvert -2\cos(2x) \rvert = 2$):
> 	    $$\lvert E_M \rvert \le \frac{0.5^3}{24} \cdot 2 \approx 0.0104167$$
> 
> - So sánh với Hình thang và Simpson (từ bài trước):
> 	  - Quy tắc Hình thang: $T \approx 0.4693957$ (Sai số thực tế $\approx 0.0100298$)
> 	  - Quy tắc Simpson: $S \approx 0.4897985$ (Sai số thực tế $\approx 0.0103730$)
> 	  - *Nhận xét:* Quy tắc Hình thang cho độ chính xác cao nhất, tiếp theo là Simpson và Midpoint.
> 
> b) $f(x) = x \ln(x + 1)$ trên $[-0.5, 0]$
> 
> - Nghiệm chính xác:
>   $$I = \int_{-0.5}^{0} x \ln(x + 1) \, dx = \left[ \left(\frac{x^2 - 1}{2}\right) \ln(x + 1) - \frac{(x - 1)^2}{4} \right]_{-0.5}^{0} \approx -0.0511132$$
> 
> - Quy tắc Midpoint ($h = 0.5$, nút giữa $m = -0.25$):
> 	  - Giá trị tại Midpoint: $f(-0.25) = -0.25 \ln(-0.25 + 1) \approx 0.0719205$
> 	  - Giá trị xấp xỉ: $M = 0.5 \cdot 0.0719205 \approx 0.0359603$
> 	  - Sai số thực tế: $\lvert I - M \rvert = \lvert -0.0511132 - 0.0359603 \rvert = 0.0870735$
> 	  - Chặn trên sai số ($M_2 = \max \lvert \frac{x+2}{(x+1)^2} \rvert = 6$ tại $x = -0.5$):
> 	    $$\lvert E_M \rvert \le \frac{0.5^3}{24} \cdot 6 = 0.0312500$$
> 
> - So sánh với Hình thang và Simpson:
> 	  - Quy tắc Hình thang: $T \approx 0.0866434$ (Sai số thực tế $\approx 0.1377566$)
> 	  - Quy tắc Simpson: $S \approx 0.0528546$ (Sai số thực tế $\approx 0.1039678$)
> 	  - *Nhận xét:* Quy tắc Midpoint có sai số thực tế nhỏ hơn quy tắc Hình thang và Simpson đơn trên đoạn biên dốc này.
> 
> c) $f(x) = (\sin x)^2 - 2x \sin x + 1$ trên $[0.75, 1.3]$
> 
> - Nghiệm chính xác:
>   $$I = \left[ \frac{3x}{2} - \frac{\sin(2x)}{4} + 2x \cos x - 2\sin x \right]_{0.75}^{1.3} \approx 0.1581691$$
> 
> - Quy tắc Midpoint ($h = 0.55$, nút giữa $m = 1.025$):
> 	  - Giá trị tại Midpoint: $f(1.025) \approx -0.0210459$
> 	  - Giá trị xấp xỉ: $M = 0.55 \cdot (-0.0210459) \approx -0.0115752$
> 	  - Sai số thực tế: $\lvert I - M \rvert = \lvert 0.1581691 - (-0.0115752) \rvert = 0.1697443$
> 	  - Chặn trên sai số ($M_2 = \max \lvert f''(x) \rvert \approx 2.5029$):
> 	    $$\lvert E_M \rvert \le \frac{0.55^3}{24} \cdot 2.5029 \approx 0.0173107$$
> 
> - So sánh với Hình thang và Simpson:
> 	  - Quy tắc Hình thang: $T \approx -0.0378286$ (Sai số thực tế $\approx 0.1959977$)
> 	  - Quy tắc Simpson: $S \approx -0.0203264$ (Sai số thực tế $\approx 0.1784955$)
> 	  - *Nhận xét:* Quy tắc Midpointcho độ chính xác cao với đồ thị dao động đổi chiều như hàm điều hòa này.
> 
> d) $f(x) = \frac{1}{x \ln x}$ trên $[e, e + 1]$
> 
> - Nghiệm chính xác:
>   $$I = \left[ \ln(\lvert \ln x \rvert) \right]_{e}^{e+1} = \ln(\ln(e+1)) \approx 0.2711674$$
> 
> - Quy tắc Midpoint ($h = 1$, nút giữa $m = e + 0.5 \approx 3.2182818$):
> 	  - Giá trị tại Midpoint: $f(e+0.5) = \frac{1}{(e+0.5) \ln(e+0.5)} \approx 0.2689551$
> 	  - Giá trị xấp xỉ: $M = 1 \cdot 0.2689551 = 0.2689551$
> 	  - Sai số thực tế: $\lvert I - M \rvert = \lvert 0.2711674 - 0.2689551 \rvert = 0.0022123$
> 	  - Chặn trên sai số ($M_2 = \max \lvert f''(x) \rvert \approx 0.3541$ tại $x = e$):
> 	    $$\lvert E_M \rvert \le \frac{1^3}{24} \cdot 0.3541 \approx 0.0147542$$
> 
> - So sánh với Hình thang và Simpson:
> 	  - Quy tắc Hình thang: $T \approx 0.2868395$ (Sai số thực tế $\approx 0.0156721$)
> 	  - Quy tắc Simpson: $S \approx 0.2749166$ (Sai số thực tế $\approx 0.0037492$)
> 	  - *Nhận xét:* Quy tắc Midpoint cho độ chính xác cao nhất, tiếp theo là Simpson và Hình thang.
>
> 3. Code:
> - midpoint.m
> > [!code]- Matlab
> > ```matlab
> > function I_mid = midpoint(f, a, b)
> >     h = b - a;
> >     m = (a + b) / 2;
> >     I_mid = h * f(m);
> > end
> > ```
>
> - main.m
> > [!code]- Matlab
> > ```matlab
> > clc; clear; close all;
> > 
> > %% Du lieu
> > syms x;
> > probf = cos(x)^2;              prob(1).a = -0.25; prob(1).b = 0.25; prob(1).name = 'a)';
> > prob(2).f = x*log(x + 1);          prob(2).a = -0.5;  prob(2).b = 0;    prob(2).name = 'b)';
> > prob(3).f = sin(x)^2 - 2*x*sin(x) + 1; prob(3).a = 0.75; prob(3).b = 1.3;  prob(3).name = 'c)';
> > prob(4).f = 1 / (x * log(x));      prob(4).a = exp(1);prob(4).b = exp(1)+1;prob(4).name = 'd)';
> > 
> > % Tinh toan
> > for i = 1:length(prob)
> >     f_sym = prob(i).f;
> >     a_val = prob(i).a;
> >     b_val = prob(i).b;
> >     f = matlabFunction(f_sym);
> >     
> >     % Nghiem chinh xac
> >     I_exact = double(int(f_sym, a_val, b_val));
> >     
> >     % Quy tac Midpoint
> >     I_mid = midpoint(f, a_val, b_val);
> >     err_actual_M = abs(I_exact - I_mid);
> >     h_val = b_val - a_val;
> >     f_diff2 = diff(f_sym, x, 2);
> >     f_diff2_fn = matlabFunction(f_diff2);
> >     x_fine = linspace(a_val, b_val, 1000); 
> >     M2 = max(abs(f_diff2_fn(x_fine)));
> >     err_bound_M = (h_val^3 / 24) * M2;
> >     
> >     % Quy tac hinh thang
> >     I_trap = trapezoid(f, a_val, b_val);
> >     err_actual_T = abs(I_exact - I_trap);
> >     err_bound_T = (h_val^3 / 12) * M2; 
> >     
> >     % Quy tac simpson
> >     I_simp = simpson(f, a_val, b_val);
> >     err_actual_S = abs(I_exact - I_simp);
> >     h_S = h_val / 2;
> >     f_diff4 = diff(f_sym, x, 4);
> >     f_diff4_fn = matlabFunction(f_diff4);
> >     M4 = max(abs(f_diff4_fn(x_fine)));
> >     err_bound_S = (h_S^5 / 90) * M4;
> >     
> >     % In ket qua
> >     fprintf('Kết quả câu %s', problem(i).name);
> >     fprintf('Tích phân hàm f(x) = %s trên đoạn [%g, %g]\n', char(f_sym), a_val, b_val);
> >     fprintf('-> Giá trị chính xác (Exact): %.7f\n\n', I_exact);
> > end
> > ```


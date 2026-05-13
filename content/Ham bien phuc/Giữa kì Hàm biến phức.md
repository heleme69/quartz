
```dataviewjs
// ╔══════════════════════════════════════════════════════════╗
//   GLOBAL CONFIG - TÙY CHỈNH THÔNG TIN TIỂU LUẬN
// ╚══════════════════════════════════════════════════════════╝
const CONFIG = {
  // --- TÍNH NĂNG BẬT/TẮT (true: Hiện, false: Ẩn) ---
  showCover:          false,   // true = có trang bìa (trang 1)
  showTitlePage:      true,   // true = có trang tiêu đề phụ (trang 2)
  showTOC:            false,   // true = có mục lục
  showCalloutBorder:  true,   // false = ẩn viền tất cả math callout (math-framed)

  // 1. Thông tin chung
  truong:       "Đại học Quốc gia Thành phố Hồ Chí Minh\nTrường Đại học Khoa học Tự nhiên",
  khoa:         "Khoa Toán – Tin học",
  monHoc:       "Lý thuyết Độ đo và Tích phân",
  loaiBai:      "Bài tiểu luận giữa kì",
  tenDeTai:     "Sự đầy đủ hoá của không gian đo",
  nganh:        "Toán học",
  chuyenNganh:  "Giải tích",
  giangVien:    "PGS.TS. Bùi Lê Trọng Thanh",

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
    titleLine: "Bài luận giữa kỳ Hàm biến phức",
    authors:   ["Lê Huy - MSSV: 24110022"],
  },

  // 6. Cấu hình Mục lục
  tocHeading: "Mục Lục",
  toc: [
    { level: 1, num: "0",   title: "Kiến thức chuẩn bị",                                                page: 1 },
    { level: 1, num: "1",   title: "Sự đầy đủ hoá của không gian đo",                                   page: 3 },
    { level: 2, num: "1.1", title: "Mở rộng toàn phần và tính đầy đủ của không gian đo",                page: 3 },
    { level: 2, num: "1.2", title: "Đầy đủ hoá không gian độ đo Borel thành không gian đo Lebesgue",    page: 8 },
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

> [!prob]
> Tìm ảnh của tam giác vuông có ba đỉnh là 0,2,2+2i qua phép biến đổi hình học $w = f(z) = z^{2} + 1 + i$.

> [!ans]
> Gọi $D$ là miền tam giác vuôn có 3 đỉnh $O(0,0), A(2,0), B(2,2)$, biên $D$ gồm 3 đoạn: 
> - Đoạn $OA$: y = 0, với x $\in [0,2]$.
> - Đoạn $AB$: x = 2, với y $\in [0,2]$.
> - Đoạn $BO$: y = x, với x $\in [0,2]$.
> Ta phân tích $w = f(z) = z^{2} + 1 + i$ thành hai phép biến đổi:
> i. Phép lũy thừa: $w_{1} = z^{2}$         (biến $D$ thành $D_{1}$)
> ii. Phép tịnh tiến: $w = w_{1} + 1 + i$ (biến $D_{1}$ thành $D'$ )
> 1. Ánh xạ qua $w_{1} = z^{2}$
> 	Đặt $w_{1} = u_{1} + iv_{1}$. Ta có $w_{1} = (x + iy)^{2} = (x-y)^{2} + i(2xy)$, suy ra: 
> 	$$
> 	\begin{cases}
> 	u_{1} = x^{2} - y^{2}\\
> 	v_{1} = 2xy 
> 	\end{cases}
> 	$$
> 	- Ảnh đoạn $OA$ ($y = 0, 0 \leq x \leq 2$):
> 		Thế $y = 0$ vào hệ, ta được $u_{1} = x^{2}$ và $v_{1} = 0$.
> 		Vì $x \in [0,2]$ nên $u_{1} \in [0,4]$.
> 		Vậy ta được ảnh là đoạn thẳng nằm trên trục thực, nối từ điểm $(0)$ tới điểm ${} (4) {}$.
> 	- Ảnh đoạn $AB$ ($x = 2, 0 \le y \le 2$):
> 		Thế $x = 2$ vào hệ, ta được $u_1 = 4 - y^2$ và $v_1 = 4y \implies y = \frac{v_1}{4}$.
> 		Thế $y$ vào phương trình $u_1$, ta được: $u_1 = 4 - \frac{v_1^2}{16}$.
> 		Vì $y \in [0, 2]$ nên $v_1 \in [0, 8]$.
> 		Vậy ảnh là một cung parabol $u_1 = 4 - \frac{v_1^2}{16}$, nối từ điểm $(4)$ tới điểm ${} (8i) {}$.
> 	- Ảnh đoạn $BO$ ($y = x, 0 \le x \le 2$):
> 		Thế $y=x$ vào hệ, ta được $u_1 = 0$ và $v_1 = 2x^2$.
> 		Vì $x \in [0,2]$ nên $v_{1} \in [0,8]$.
> 		Vậy ảnh là đoạn thẳng nằm trên trục ảo, nối từ điểm ${} (8i)$ về điểm $(0)$.
> 		
> Kết luận bước 1: Miền $D$ được ánh xạ thành $D_{1}$ giới hạn bởi hai đoạn thẳng vuông góc $(0 \to 4)$ và $(0 \to 8i)$ và cung parabol $u_{1} = 4 - \frac{v_{1}^{2}}{16}$.
> 
> 2. Ánh xạ qua $w = w_{1} + 1 + i$
> 	Đặt $w = u + iv$. Đây là phép tịnh tiến theo vector tọa độ $(1,1)$. Ta có:
> 	$$
> 	\begin{cases}
> 	u = u_{1}+1 \\
> 	v = v_{1} +1 
> 	\end{cases}
> 	$$
> 	- Ảnh đoạn thẳng $OA$ ($v_{1} = 0, 0 \le u_{1} \le 4$):
> 		Thế $(v_{1} = 0)$, ta được $v = 1$.
> 		Vì $u_{1} \in [0,4]$ nên $u \in [0,5]$.
> 		Vậy ảnh là đoạn thẳng nằm ngang nối từ $(1 + i)$ tới ${} (5 + i) {}$.
> 	- Ảnh đoạn thẳng $BO$:
> 		Thế $u_{1} = 0$, ta được $v = 1$.
> 		Vì $v_{1} \in [0,8]$ nên $v \in [1, 9]$.
> 		Vậy ảnh à đoạn thẳng đứng nối điểm $(1+i)$ tới điểm $(1+9i)$.
> 	- Ảnh đoạn thẳng $AB$:
> 		Thế $u_{1} = 4 - \frac{(v - 1)^2}{16}$, ta được $u = 5 - \frac{(v - 1)^2}{16}$
> 		Vì $v_{1} \in [0,8]$ nên $v \in [1,9]$.
> 		Vậy ảnh là một cung parabol $u = 5 - \frac{(v-1)^{2}}{16}$, nối từ điểm ${} (5 + i)$ tới điểm $(1+9i)$.
> 		
> Kết luận sau cùng: Miền $D_{1}$ được ánh xạ thành $D'$ giới hạn bởi hai đoạn thẳng vuông góc ${} (1 + i)$ tới $(5 + i)$, đoạn $(1+i)$ tới $(1+9i)$ và cung parabol $u = 5 - \frac{(v - 1)^2}{16}$.

> [!prob] 
> Tìm hàm phức $f(z)$ thỏa mãn $\lim_{ z \to 2+i } \mathrm{Re}(f(z)) = 4$ và $\lim_{ z \to 2+i } \mathrm{Im}(f(z)) = -1$.

> [!ans]
> Ta đặt $f(z) = w_{0} + g(z) = (4-4i)+ g(z)$, trong đó $g(z)$ là hàm phần dư bất kì thỏa điều kiện: 
> $$
> \lim_{ z \to 2+i } g(z) = 0
> $$ 
> Khi đó nếu $z \to 2+i$ thì $f(z) \to w_{0} = 4 - i$.
> Hàm $g(z)$ có thể bất kì, không vì lý do gì, ta chọn $g(z)$ phụ thuộc vào $\bar{z}$. Khi $z \to 2 + i$ thì $\bar{z} \to 2 - i$. Ta lấy $g(z) = \bar{z} - (2 - i) = \bar{z} - 2 +i$. Thay $g(z)$ vào phương trình ban đầu, ta được:
> $$
> f(z) = (4 - i) + g(z) = (4 - i) + (\bar{z} -2 + i) = \bar{z} + 2
> $$
> Đặt $z = x + iy$ với $x,y \in \mathbb{R}$. Ta có $f(z) = (x - iy) + 2 = (x + 2) + i(-y)$. Vì phần thực $u(x,y) = x+ 2$ và phần ảo $v(x,y) = -y$ đều là đa thức liên tục trên $\mathbb{R}^{2}$, ta tính giới hạn trực tiếp $(x,y) \to (2,1)$: 
> - $\lim_{z \to 2+i} Re(f(z)) = \lim_{(x,y) \to (2,1)} (x + 2) = 4$
> - $\lim_{z \to 2+i} Im(f(z)) = \lim_{(x,y) \to (2,1)} (-y) = -1$
>   
> Vậy $f(z) = \bar{z} + 2$ thỏa yêu cầu bài toán.

> [!Prob]
> Xét hàm phức $f(z) = u(x,y) + iv(x,y)$ được xác định trên tập mở $\Omega$ và giả sử các hàm $u,v$ khả vi liên tục cấp một trên $\Omega$. Ta định nghĩa: 
> $$
> \frac{ \partial f }{ \partial z } = \frac{1}{2} \left( \frac{ \partial f }{ \partial x } - i\frac{ \partial f }{ \partial y }  \right)
> $$
> và 
> $$
> \frac{\partial f}{\partial \bar{z}} = \frac{1}{2} \left( \frac{\partial f}{\partial x} + i\frac{\partial f}{\partial y} \right)
> $$
> a) Nếu $f(z) = z^{2}$, hãy tính $\frac{\partial f}{\partial z}, \frac{\partial f}{\partial \bar{z}}$.
> b) Chứng minh rằng $f$ chỉnh hình nếu và chỉ nếu $\frac{ \partial f }{ \partial \bar{z} } = 0$.
> c) Giả sử $f$ chỉnh hình, chứng minh rằng $\frac{ \partial f }{ \partial z }(z) = f'(z)$.
> d) Chỉ thêm điều kiện là các hàm $u,v$ là các hàm điều hòa (theo nghĩa cổ điển), chứng minh rằng:
> $$
> \frac{\partial^2 f}{\partial z \partial \bar{z}} = 0
> $$

> [!ans]
> Cho hàm phức $f(z) = u(x,y) + iv(x,y)$ với $u, v$ khả vi liên tục cấp một trên $\Omega$. Ta có đạo hàm riêng của $f$ theo các biến thực $x, y$ là: 
> $$
> \begin{align}
> \frac{\partial f}{\partial x} &=  u_x + iv_x \\
> \frac{\partial f}{\partial y} &=  u_y + iv_y
> \end{align}
> $$
> a)
> Ta viết $f(z) = z^{2} = (x + iy)^{2} = (x^{2} - y^{2}) +i(2xy)$, ta có phần thực và phần ảo lần lượt là: $u(x,y) = x^{2} - y^{2}$ và $v(x,y) = 2xy$. 
> Ta tính các đạo hàm riêng: 
> $$
> \begin{align}
> \frac{\partial f}{\partial x} &=  u_x + iv_x = 2x + i(2y) = 2(x+iy) = 2z \\
> \frac{\partial f}{\partial y} &=  u_y + iv_y = -2y + i(2x) = 2i(x+iy) = 2iz
> \end{align}
> $$
> Dựa vào định nghĩa:
> $$
> \begin{align}
> \frac{\partial f}{\partial z} &=  \frac{1}{2} \left( \frac{\partial f}{\partial x} - i\frac{\partial f}{\partial y} \right) = \frac{1}{2} (2z - i(2iz)) = \frac{1}{2} (2z + 2z) = 2z  \\
> \frac{\partial f}{\partial \bar{z}} &=  \frac{1}{2} \left( \frac{\partial f}{\partial x} + i\frac{\partial f}{\partial y} \right) = \frac{1}{2} (2z + i(2iz)) = \frac{1}{2} (2z - 2z) = 0
> \end{align}
> $$
> b)
> Thay biểu thức của $\frac{\partial f}{\partial x}$ và $\frac{\partial f}{\partial y}$ vào định nghĩa của $\frac{\partial f}{\partial \bar{z}}$: 
> $$
> \begin{align}
> \frac{\partial f}{\partial \bar{z}} &=  \frac{1}{2} \left[ (u_x + iv_x) + i(u_y + iv_y) \right] \\
> &=  \frac{1}{2} \left[ (u_x - v_y) + i(v_x + u_y) \right]
> \end{align}
> $$
> Ta có $\frac{\partial f}{\partial \bar{z}} = 0$ khi và chỉ khi cả phần thực và phần ảo của nó đều bằng 0:
> $$
> \begin{align}
> \begin{cases}
> u_x - v_y = 0 \\
> v_x + u_y = 0 
> \end{cases}
> &\;\;\Longrightarrow\;\;
> \begin{cases}
> u_x = v_y \\
> u_y = -v_x
> \end{cases}
> \end{align}
> $$
> Đây chính xác là hệ phương trình Cauchy-Riemann. Vì giả thiết đã cho $u, v$ khả vi liên tục cấp một trên $\Omega$, điều kiện Cauchy-Riemann là điều kiện cần và đủ để hàm $f(z)$ chỉnh hình trên $\Omega$.
> 
> c)
> Khi $f(z)$ là hàm chỉnh hình, ta có các tính chất sau:
> i) Hàm $u, v$ thỏa mãn hệ thức Cauchy-Riemann: $v_y = u_x$ và $u_y = -v_x$.
> ii) Đạo hàm của $f(z)$ được tính bằng công thức: $f'(z) = \frac{\partial f}{\partial x} = u_x + iv_x$.
> Thay biểu thức của $\frac{\partial f}{\partial x}$ và $\frac{\partial f}{\partial y}$ vào định nghĩa của ${} \frac{\partial f}{\partial z} {}$: 
> $$
> \begin{align}
> \frac{\partial f}{\partial z} &=  \frac{1}{2} \left[ (u_x + iv_x) - i(u_y + iv_y) \right] \\
> &=  \frac{1}{2} \left[ (u_x + v_y) + i(v_x - u_y) \right]
> \end{align}
> $$
> Sử dụng hệ thức Cauchy-Riemann, ta thay $v_y$ bằng $u_x$, và $u_y$ bằng $-v_x$:
> $$
> \begin{align}
> \frac{\partial f}{\partial z} &=  \frac{1}{2} \left[ (u_x + u_x) + i(v_x - (-v_x) \right] \\
> &=  \frac{1}{2} \left[ 2(u_x) + i2(v_x) \right] = u_{x} + iv_{x}
> \end{align}
> $$
> Đây chính là công thức đạo hàm: $f'(z) = u_x + iv_x$, ta suy ra $\frac{\partial f}{\partial z} = f'(z)$.
>
> d)
> Dựa theo định nghĩa đề bài, ta có: 
> $$
> \begin{align}
> \frac{\partial^2 f}{\partial z \partial \bar{z}} &=  \frac{1}{2} \left( \frac{\partial}{\partial x} - i\frac{\partial}{\partial y} \right) \left[ \frac{1}{2} \left( \frac{\partial f}{\partial x} + i\frac{\partial f}{\partial y} \right) \right] \\
> &= \frac{1}{4} \left( \frac{\partial^2 f}{\partial x^2} + i\frac{\partial^2 f}{\partial x \partial y} - i\frac{\partial^2 f}{\partial y \partial x} - i^2\frac{\partial^2 f}{\partial y^2} \right)
> \end{align}
> $$
> Vì $u, v$ là các hàm điều hòa nên chúng có đạo hàm riêng cấp 2 liên tục. Do đó, $f = u+iv$ cũng có đạo hàm riêng cấp 2 liên tục. Theo định lý Schwarz, đạo hàm hỗn hợp của chúng bằng nhau: $\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}$.
> Khi đó, sử dụng công thức đạo hàm $\frac{\partial^2 f}{\partial x^2} = u_{xx} + iv_{xx}$ và $\frac{\partial^2 f}{\partial y^2} = u_{yy} + iv_{yy}$, kết hợp tính chất bằng nhau của số hạng theo Schwarz, ta viết lại: 
> $$
> \begin{align}
> \frac{\partial^2 f}{\partial z \partial \bar{z}} &=  \frac{1}{4} \left( \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} \right) \\
> &= \frac{1}{4} \left[ (u_{xx} + u_{yy}) + i(v_{xx} + v_{yy}) \right]
> \end{align}
> $$
> Sử dụng giả thiết $u$ và $v$ là hàm điều hòa, ta có $u_{xx} + u_{yy} = 0$ và $v_{xx} + v_{yy} = 0$.
> Thay vào biểu thức trên, ta được: 
> $$
> \begin{align}
> \frac{\partial^2 f}{\partial z \partial \bar{z}} &= \frac{1}{4} \left[ (u_{xx} + u_{yy}) + i(v_{xx} + v_{yy}) \right] \\
> &=  \frac{1}{4} (0 + i0) = 0
> \end{align}
> $$
> Vậy ta kết luận $\frac{\partial^2 f}{\partial z \partial \bar{z}} = 0$.

> [!prob] 
> Xét $\Omega \subset \mathbb{C}$ là tập mở đối xứng qua trục thực. Giả sử cặp hàm $(u(x,y),v(x,y))$ được xác định trên $\Omega$ thỏa hệ thức Cauchy-Riemann tại điểm $(x_{0}, y_{0}) \in \Omega$. Chứng minh rằng cặp hàm $(U(x,y),V(x,y))$ được xác định như sau:
> $$
> U(x,y)= u(x, - y), V(x,y) = -v(x, -y)
> $$
> cũng thỏa hệ thức Cauchy-Riemann tại $(x_{0}, -y_{0})$.

> [!ans]
> Trên miền mở $\Omega \subset \mathbb{C}$, ta có giả thiết $u(x,y)$ và $v(x,y)$ thỏa hệ thức Cauchy-Riemann:
> $$
> \begin{cases}
> u_{x}(x_{0}, y_{0}) = v_{y}(x_{0}, y_{0}) \\
> u_{y}(x_{0}, y_{0}) = -v_{x}(x_{0}, y_{0})
> \end{cases} 
> $$
> Trên tập mở đối xứng qua trục thực, ta xét ánh xạ đối xứng qua trục thực:
> $$
> \begin{align}
> T : \mathbb{R}^2 &\longrightarrow \mathbb{R}^2 \\
> (x,y) &\longmapsto (x, -y)
> \end{align}
> $$
> Do $T$ là một ánh xạ tuyến tính nên trơn và khả vị tại mọi điểm trên $\mathbb{R}^2$. Ta viết lại $U,V$: 
> $$
> \begin{cases}
> U(x,y) = u(T(x,y)) \\
> V(x,y) = -v(T(x,y))
> \end{cases}
> $$
> Do $u,v$ thỏa Cauchy-Riemann nên $u,v$ khả vi thực tại ${} (x_{0}, y_{0}) {}$. Vì ánh xạ bên trong $T$ khả vi tại $(x_0, -y_0)$ và các hàm bên ngoài $u, v$ khả vi tại $T(x_0, -y_0) = (x_0, y_0)$, suy ra $U,V$ khả vi tại $(x_{0}, -y_{0})$ do tính chất khả vi của ánh xạ  hợp. 
> Ta tính đạo hàm riêng của $U$ và $V$ tại $(x,y)$ bất kì:
> - Với $U(x,y) = u(x, -y)$: 
> $$
> \begin{align}
> U_x(x,y) &=  \frac{\partial}{\partial x} u(x, -y) = u_x(x, -y) \\
> U_y(x,y) &=  \frac{\partial}{\partial y} u(x, -y) = u_{y'}(x, y') \cdot \frac{\partial y'}{\partial y} = -u_y(x, -y) 
> \end{align}
> $$
> - Với  hàm $V(x,y) = -v(x, -y)$: 
> $$
> \begin{align}
> V_x(x,y) &=  \frac{\partial}{\partial x} [-v(x, -y)] = -v_x(x, -y) \\
> V_y(x,y) &=  \frac{\partial}{\partial y} [-v(x, -y)] = -\left( v_{y'}(x, y') \cdot \frac{\partial y'}{\partial y} \right) = - (v_y(x, -y) \cdot (-1)) = v_y(x, -y)
> \end{align}
> $$
> 
> Thay $(x_{0}, y_{0})$ vào công thức $U_{x}(x,y)$ và $V_{y}(x,y)$ và sử dụng giả thiết hệ thức Cauchy-Riemann: 
> $$
> \begin{cases}
> U_x(x_0, -y_0) &=  u_x(x_0, y_0) = v_y(x_0, y_0) = V_y(x_0, -y_0) \\
> U_y(x_0, -y_0) &=  -u_y(x_0, y_0) = -(-v_x(x_0, y_0)) = v_x(x_0, y_0) = -(-v_x(x_0, y_0)) = -V_{x}(x_{0}, -y_{0})
> \end{cases}
> $$
> 
> Vậy ta có $U_{x}(x_{0}, -y_{0}) = V_{y}(x_{0}, -y_{0})$ và $U_y(x_0, -y_0) =-V_{x}(x_{0}, -y_{0})$ nên kết luận $(U,V)$ thỏa hệ thức Cauchy-Riemann tại $(x_{0}, y_{0})$




$\pi$


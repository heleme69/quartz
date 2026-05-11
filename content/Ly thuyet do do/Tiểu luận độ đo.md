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
    titleLine: "Bài tiểu luận giữa kì <br> Lý thuyết Độ đo và Tích phân",
    authors:   ["Huy - MSSV: 24110022"],
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
# 1. Mở đầu
- Vai trò: $\sigma$-đại số Borel ${} \mathcal{B}(\mathbb{R}) {}$ đóng vai trò là ngôn ngữ gốc không thể thay thế. Vì được sinh ra trực tiếp từ cấu trúc Tô-pô (các tập mở) của không gian $\mathbb{R}$, hệ Borel là cơ sở tự nhiên nhất để định nghĩa tính đo được cho các hàm liên tục và là nền tảng cốt lõi để xây dựng các không gian xác suất. Tuy nhiên, dù sở hữu cấu trúc nền tảng chặt chẽ, $\sigma$-đại số Borel lại mang khuyết điểm lớn: Tính không đầy đủ (Incomplete). Nó không đủ sức chứa đối với tất cả các tập con của một tập hợp có độ đo không.
- Mục tiêu: Bài viết trình bày cách xây dựng tập Cantor và phép biến đổi của hàm Cantor-Lebesgue làm công cụ để chỉ ra tính không đầy đủ của không gian $\mathcal{B}(\mathbb{R})$. Từ việc chứng minh một tập hợp đo được không nhất thiết phải là tập Borel, ta sẽ làm động lực trình bày lý thuyết Sự đầy đủ hóa không gian đo (Completion of a Measure Space).
# 2. Khảo sát tập Cantor $\mathcal{C}$ (Cantor Ternary Set)

## 2.1 Ý tưởng 

Tập Cantor (hay còn gọi là tập Cantor tam phân - Cantor Ternary Set) được xây dựng dựa trên một quá trình quy nạp. Bắt đầu từ một đoạn thẳng ban đầu, ta liên tục chia các đoạn thẳng hiện có thành ba phần bằng nhau và cắt bỏ đi khoảng mở ở chính giữa. Quá trình này tạo ra một dãy các tập hợp lồng nhau và ngày càng thưa thớt, phần còn lại cuối cùng chính là tập Cantor.
## 2.2 Xây dựng theo quy nạp

> [!def] 
> Quá trình xây dựng được tiến hành qua từng bước $n$ như sau:
> Bước 0 ($n=0$):
> Ta bắt đầu với một đoạn đóng cơ sở trên trục số thực. Đặt tập hợp ban đầu là $E_0$:
> $$E_0 = [0, 1]$$
> Lúc này, ta có $2^0 = 1$ đoạn thẳng, với chiều dài là $1/3^0 = 1$.
> Bước 1 ($n=1$): Ta chia đoạn $E_0$ thành 3 phần bằng nhau: $[0, 1/3]$, $(1/3, 2/3)$, và $[2/3, 1]$. Sau đó, ta loại bỏ khoảng mở ở chính giữa là $(1/3, 2/3)$. Tập hợp còn lại là hợp của hai đoạn đóng:
> $$E_1 = \left[0, \frac{1}{3}\right] \cup \left[\frac{2}{3}, 1\right]$$
> Lúc này ta có $2^1 = 2$ đoạn thẳng, mỗi đoạn có chiều dài là $1/3^1 = 1/3$.
> Bước 2 ($n=2$): Tiếp tục lặp lại thao tác trên cho từng đoạn của $E_1$. Với đoạn $[0, 1/3]$, ta bỏ đi khoảng giữa $(1/9, 2/9)$. Với đoạn $[2/3, 1]$, ta bỏ đi khoảng giữa $(7/9, 8/9)$. Tập hợp thu được là hợp của 4 đoạn đóng:
> $$E_2 = \left[0, \frac{1}{9}\right] \cup \left[\frac{2}{9}, \frac{1}{3}\right] \cup \left[\frac{2}{3}, \frac{7}{9}\right] \cup \left[\frac{8}{9}, 1\right]$$
> Ta có $2^2 = 4$ đoạn thẳng, mỗi đoạn có chiều dài là $1/3^2 = 1/9$.
> Bước $n$ (Tổng quát): Giả sử ta đã xây dựng được tập $E_{n-1}$ gồm $2^{n-1}$ đoạn đóng rời nhau, mỗi đoạn có độ dài $1/3^{n-1}$. Để tạo ra $E_n$, ta lấy mỗi đoạn trong $E_{n-1}$, chia làm ba và bỏ đi phần mở ở giữa. Về mặt giải tích, ta có thể biểu diễn công thức truy hồi của $E_n$ dựa trên $E_{n-1}$ bằng các phép biến đổi tịnh tiến và co giãn tập hợp như sau:
> $$E_n = \frac{E_{n-1}}{3} \cup \left( \frac{2}{3} + \frac{E_{n-1}}{3} \right)$$
> Tập $E_n$ sẽ bao gồm $2^n$ đoạn đóng rời nhau, và độ dài của mỗi đoạn là $1/3^n$.
> Định nghĩa tập Cantor: Dãy các tập hợp $\{E_n\}_{n=0}^{\infty}$ tạo thành một dãy lồng nhau giảm dần: $E_0 \supset E_1 \supset E_2 \supset \dots \supset E_n \supset \dots$. Tập Cantor ${} T$ được định nghĩa là phần giao của tất cả các tập hợp $E_n$ trong quá trình lặp vô hạn này:
> $$T = \bigcap_{n=0}^{\infty} E_n = \lim_{n \to \infty} E_n$$
> 
## 2.3 Giải nghĩa tập Cantor

> [!obs]
> Cách xây dựng hình học ở trên có một mối liên hệ với đại số thông qua hệ đếm cơ số 3 (ternary expansion). Mọi số thực $x \in [0, 1]$ đều có thể được biểu diễn dưới dạng chuỗi tam phân:
> $$x = \sum_{k=1}^{\infty} \frac{a_k}{3^k} \quad \text{với } a_k \in \{0, 1, 2\}$$
> Khi ta chia đoạn $[0,1]$ làm ba phần, đoạn đầu tiên $[0, 1/3]$ tương ứng với các số có chữ số thập phân đầu tiên $a_1 = 0$.
> Đoạn ở giữa $(1/3, 2/3)$ tương ứng với các số có chữ số đầu tiên $a_1 = 1$.
> Đoạn cuối $[2/3, 1]$ tương ứng với các số có chữ số đầu tiên $a_1 = 2$.
> Việc ta loại bỏ khoảng mở ở giữa $(1/3, 2/3)$ ở Bước 1 chính là hành động loại bỏ tất cả các số thực mà khai triển tam phân của nó có $a_1 = 1$. Tiếp tục ở Bước 2, việc loại bỏ khoảng giữa của các đoạn con chính là việc loại bỏ các số có $a_2 = 1$.
> Tập Cantor ${} T$ thu được ở cuối quá trình chính là tập hợp của tất cả các số thực trong đoạn $[0,1]$ mà biểu diễn tam phân của nó không chứa chữ số 1:
> $$T = \left\{ x \in [0,1] \mathrel{\Big|} x = \sum_{k=1}^{\infty} \frac{a_k}{3^k}, \text{ với } a_k \in \{0, 2\} \, \forall k \in \mathbb{N} \right\}$$
> _(Lưu ý: Đối với các điểm mút như $1/3$, mặc dù nó có biểu diễn là $0.1_3$, nhưng ta vẫn có thể viết nó dưới dạng chuỗi vô hạn $0.02222..._3$. Vì nó có một biểu diễn không chứa số 1, nên $1/3$ vẫn thuộc tập Cantor)_

> [!prp] 
> Tập Cantor tam phân $T$ có các tính chất sau đây:
> (a) $T$ là một tập null (có độ đo bằng 0) trong không gian độ đo Borel $(\mathbb{R}, \mathcal{B}(\mathbb{R}), \mu_L)$.
> (b) $G = [0, 1] \setminus T$ là hợp của vô số đếm được các khoảng mở rời nhau trong $\mathbb{R}$; $G$ trù mật trong $[0, 1]$, và độ đo Lebesgue $\mu_L(G) = 1$.
> (c) $T$ là một tập không đếm được. 
> (d) $T$ là một tập compact trong $\mathbb{R}$.
> (e) $T$ là một tập hoàn toàn (perfect set) trong $\mathbb{R}$, tức là $T$ đồng nhất với tập tất cả các điểm tụ của nó.
> (f) $T$ là tập không đâu trù mật (nowhere dense) trong $\mathbb{R}$, tức là phần trong của bao đóng của nó, $(\overline{T})^\circ$, là một tập rỗng.

> [!rem]
> Trước khi bắt đầu, ta nhắc lại cấu trúc cốt lõi: Tập Cantor $T$ được định nghĩa là $T = \bigcap_{n=0}^{\infty} T_n$, trong đó $T_0 = [0, 1]$ và $T_n$ là hợp của $2^n$ đoạn đóng rời nhau, mỗi đoạn có độ dài $3^{-n}$. Đồng thời, $x \in T$ khi và chỉ khi $x$ có biểu diễn tam phân $x = \sum_{k=1}^{\infty} \frac{a_k}{3^k}$ với $a_k \in \{0, 2\}$.

> [!prf]
> (a) $T$ là một tập null trong không gian độ đo Borel $(\mathbb{R}, \mathfrak{B}_\mathbb{R}, \mu_L)$
> Tại mỗi bước xây dựng thứ $n$, tập $T_n$ bao gồm $2^n$ đoạn đóng rời nhau, và độ dài của mỗi đoạn là $\frac{1}{3^n}$.
> Do đó, độ đo Lebesgue của tập $T_n$ là:
> $$\mu_L(T_n) = 2^n \cdot \frac{1}{3^n} = \left(\frac{2}{3}\right)^n$$
> Vì $T = \bigcap_{n=0}^{\infty} T_n$ và dãy các tập hợp $(T_n)$ là một dãy giảm ($T_{n+1} \subset T_n$) với độ đo hữu hạn, theo tính chất liên tục từ trên xuống của độ đo, ta có:
> $$\mu_L(T) = \lim_{n \to \infty} \mu_L(T_n) = \lim_{n \to \infty} \left(\frac{2}{3}\right)^n = 0$$
> Vì $\mu_L(T) = 0$, $T$ là một tập null (tập có độ đo không).
> 
> (b) $G = [0, 1] \setminus T$ là hợp của vô số đếm được các khoảng mở rời nhau; $G$ trù mật trong $[0, 1]$ và $\mu_L(G) = 1$
> Cấu trúc của $G$: Trong quá trình xây dựng $T$, tại mỗi bước $n \ge 1$, ta cắt bỏ đi phần mở ở giữa của các đoạn trong $T_{n-1}$. Gọi họ các khoảng mở bị cắt bỏ ở bước $n$ là $G_n$. Khi đó $G_n$ gồm $2^{n-1}$ khoảng mở rời nhau, mỗi khoảng có độ dài $\frac{1}{3^n}$. Tập $G$ chính là hợp của tất cả các khoảng mở sau khi bị cắt bỏ phần ở giữa đi qua vô hạn bước:
> $$G = \bigcup_{n=1}^{\infty} G_n$$
>  Vì đây là hợp của các họ đếm được các khoảng mở, nên $G$ là hợp của vô số đếm được các khoảng mở rời nhau trong $\mathbb{R}$.
> Tính độ đo: Các tập $G_n$ đôi một rời nhau. Sử dụng tính $\sigma$ - cộng tính của độ đo Lebesgue:
> $$\mu_L(G) = \sum_{n=1}^{\infty} \mu_L(G_n) = \sum_{n=1}^{\infty} 2^{n-1} \cdot \frac{1}{3^n} = \frac{1}{3} \sum_{n=1}^{\infty} \left(\frac{2}{3}\right)^{n-1} = \frac{1}{3} \sum_{k=0}^{\infty} \left(\frac{2}{3}\right)^k$$
> Đây là một chuỗi hình học lùi vô hạn với công bội $q = 2/3$. Ta tính được:
> $$\mu_L(G) = \frac{1}{3} \cdot \frac{1}{1 - 2/3} = \frac{1}{3} \cdot 3 = 1$$
> Tính trù mật của $G$: Để chứng minh $G$ trù mật trong $[0,1]$, ta cần chứng minh mọi khoảng mở $(a, b) \subset [0, 1]$ với $a < b$ đều giao với $G$. Độ dài của khoảng mở này là $L = b - a > 0$.
> Ta chọn một số tự nhiên $n$ đủ lớn sao cho $\frac{1}{3^n} < L$. Tại bước thứ $n$, tập $T_n$ chỉ còn lại các đoạn đóng có độ dài $\frac{1}{3^n}$. Vì khoảng $(a, b)$ dài hơn $\frac{1}{3^n}$, nó không thể nằm trọn vẹn bên trong bất kỳ đoạn đóng nào của $T_n$. Do đó, $(a, b)$ bắt buộc phải chứa ít nhất một điểm thuộc phần đã bị khoét đi, tức là $(a, b) \cap G \neq \emptyset$. Vậy $G$ trù mật trong $[0, 1]$.
>
> c) Ta tiến hành chứng minh bằng phản chứng. Giả sử tập Cantor $T$ là một tập đếm được. Khi đó, ta có thể liệt kê toàn bộ các phần tử của $T$ thành một dãy vô hạn: $T = \{x_1, x_2, x_3, \dots, x_n, \dots\}$. Như đã giới thiệu, mọi số $x \in T$ đều có thể được biểu diễn duy nhất dưới dạng chuỗi tam phân chỉ chứa các chữ số $0$ và $2$. Ta viết khai triển tam phân cho từng phần tử trong dãy trên: 
> $$
> \begin{align}
> x_1 &=  0.a_{11}a_{12}a_{13}\dots \quad \text{(cơ số 3)} \\ 
> x_2 &=  0.a_{21}a_{22}a_{23}\dots \quad \text{(cơ số 3)} \\ 
> \dots \\
> x_n &=  0.a_{n1}a_{n2}a_{n3}\dots \quad \text{(cơ số 3)}
> \end{align}
> $$
> trong đó mọi chữ số $a_{nk} \in \{0, 2\}$ với mọi $n, k \in \mathbb{N}^*$. Bây giờ, ta xây dựng một số thực $y$ mới thông qua khai triển tam phân $y = 0.b_1b_2b_3\dots$ bằng cách chọn các chữ số $b_k$ nằm trên "đường chéo" sao cho nó luôn khác với chữ số $a_{kk}$ tương ứng. Cụ thể, ta định nghĩa quy tắc chọn $b_k$ như sau:
> - Nếu $a_{kk} = 0$, ta chọn $b_k = 2$.
> - Nếu $a_{kk} = 2$, ta chọn $b_k = 0$.
> Rõ ràng với cách chọn này, $b_k \in \{0, 2\}$ với mọi $k$. Do khai triển tam phân của $y$ chỉ chứa toàn số $0$ và $2$, theo đúng định nghĩa, ta phải có $y \in T$. Tuy nhiên, ta đối chiếu số $y$ này với dãy đã liệt kê:
> - $y \neq x_1$ vì chữ số thập phân thứ nhất của chúng khác nhau ($b_1 \neq a_{11}$).
> - $y \neq x_2$ vì chữ số thập phân thứ hai của chúng khác nhau ($b_2 \neq a_{22}$).
> - Tổng quát, $y \neq x_n$ vì ở vị trí thứ $n$, chúng có chữ số khác nhau ($b_n \neq a_{nn}$). 
> Điều này có nghĩa là $y$ không trùng với bất kỳ phần tử nào trong danh sách $\{x_1, x_2, \dots, x_n, \dots\}$. Suy ra việc liệt kê trên là không đầy đủ, hay nói cách khác, giả thiết $T$ là tập đếm được đã dẫn đến mâu thuẫn. Vậy tập Cantor $T$ phải là một tập không đếm được.
> 
> (d) $T$ là một tập compact trong $\mathbb{R}$
> Theo định lý Heine-Borel trong $\mathbb{R}$, một tập hợp là compact khi và chỉ khi nó đóng và bị chặn.
> - Bị chặn: Vì $T \subset [0, 1]$ nên $T$ rõ ràng là một tập bị chặn.
> - Đóng: Tại mỗi bước $n$, tập $T_n$ là hợp của hữu hạn ($2^n$) các đoạn đóng, do đó $T_n$ là một tập đóng. Vì $T = \bigcap_{n=0}^{\infty} T_n$ là giao của một họ các tập đóng, nên theo tính chất của không gian tô-pô, $T$ cũng là một tập đóng.
> Kết hợp hai điều trên, ta có $T$ là một tập compact.
> 
> (e) $T$ là một tập hoàn toàn (perfect set) trong $\mathbb{R}$
> Một tập hợp được gọi là hoàn toàn (perfect) nếu nó đóng và không chứa bất kỳ điểm cô lập nào (tức là mọi điểm của tập hợp đều là điểm tụ của chính nó).
> Ta đã biết $T$ đóng (từ phần d). Việc còn lại là chứng minh $T$ không có điểm cô lập.
> Cho một điểm $x$ bất kỳ thuộc $T$. Ta có biểu diễn tam phân:
> $$x = \sum_{k=1}^{\infty} \frac{a_k}{3^k}, \quad a_k \in \{0, 2\}$$
> Với mỗi số nguyên dương $n$, ta xây dựng một điểm $x_n$ bằng cách thay đổi đúng chữ số thứ $n$ ($a_n$) trong biểu diễn tam phân của $x$ và giữ nguyên tất cả các chữ số khác. Cụ thể: nếu $a_n = 0$ ta đổi thành $2$, và nếu $a_n = 2$ ta đổi thành $0$.
> Rõ ràng $x_n$ chỉ chứa các chữ số $0$ và $2$ trong khai triển tam phân của nó, nên $x_n \in T$.
> Khoảng cách giữa $x_n$ và $x$ chỉ sinh ra từ sự khác biệt ở vị trí thứ $n$:
> $$|x_n - x| = \frac{|2 - 0|}{3^n} = \frac{2}{3^n}$$
> Vì $\frac{2}{3^n} > 0$, ta có $x_n \neq x$.
> Khi $n \to \infty$, khoảng cách $|x_n - x| = \frac{2}{3^n} \to 0$, nghĩa là dãy $(x_n)$ hội tụ về $x$.
> Vậy trong mọi lân cận của $x$, ta luôn tìm được một điểm $x_n \in T$ khác $x$. Điều này chứng tỏ $x$ không phải là điểm cô lập. Do đó $T$ là tập hoàn toàn.
> 
> (f) $T$ là tập không đâu trù mật (nowhere dense) trong $\mathbb{R}$
> Một tập là không đâu trù mật nếu phần trong của bao đóng của nó là rỗng ($(\overline{T})^\circ = \emptyset$).
> Vì $T$ là tập đóng (đã chứng minh ở phần d), nên bao đóng của $T$ bằng chính nó: $\overline{T} = T$. Ta chỉ cần chứng minh phần trong của $T$ là rỗng ${} (\mathring{T} = \emptyset). {}$
> Giả sử phản chứng rằng $\mathring{T} \neq \emptyset$. Điều này có nghĩa là tồn tại một khoảng mở $(a, b) \subset T$ với độ dài $L = b - a > 0$.
> Ta chọn một số tự nhiên $n$ đủ lớn sao cho $\frac{1}{3^n} < L$.
> Tuy nhiên, $T \subset T_n$, mà $T_n$ chỉ bao gồm các đoạn thẳng có độ dài bằng $\frac{1}{3^n}$. Khoảng mở $(a, b)$ có chiều dài lớn hơn $\frac{1}{3^n}$ nên không thể nằm trọn vẹn trong bất kỳ đoạn nào của $T_n$.
> Từ đó suy ra $(a, b)$ không thể là tập con của $T_n$, và do đó càng không thể là tập con của $T$. Điều này mâu thuẫn với giả thiết $(a, b) \subset T$.
> Vậy $\mathring{T} = \emptyset$, đồng nghĩa với việc $T$ là một tập không đâu trù mật.  

# 3. Hàm Cantor - Lebesgue và tính không đầy đủ
## 3.1 Ý tưởng
Tập Cantor đã cho thấy một tập hợp có độ đo bằng 0 vẫn có thể chứa vô số không đếm được các điểm. Dựa trên cấu trúc phân mảnh này, ta sẽ xây dựng một hàm số có cấu trúc đặt biệt: hàm Cantor-Lebesgue (Devil's staircase), từ đó chỉ ra những lỗ hổng của $\sigma$-đại số Borel.
## 3.2 Xây dựng hàm số trên tập mở $G$

> [!def]
> Nhắc lại từ quá trình xây dựng tập Cantor $\mathcal{C}$, phần bù $G = [0,1] \setminus \mathcal{C}$ là hội của vô số đếm được các khoảng mở rời nhau. Ta ký hiệu họ các khoảng mở bị loại bỏ ở bước thứ $k$ là $I_{k,j}$ với $j = 1, \dots, 2^{k-1}.$ Mỗi khoảng này có độ dài $\ell(I_{k,j}) = 1/3^k$.
> Ta định nghĩa một hàm thực $\tau_0$ trên tập mở $G$ bằng cách gán cho nó các giá trị hằng số trên mỗi khoảng $I_{k,j}$ như sau:
> - Với $k=1$: $\tau_0(x) = \frac{1}{2}$ cho $x \in I_{1,1} = (1/3, 2/3)$.
> - Với $k=2$: $\tau_0(x)$ nhận giá trị $\frac{1}{2^2}, \frac{3}{2^2}$ lần lượt trên $I_{2,1}, I_{2,2}$.
> - Tổng quát, với $k \in \mathbb{N}$: $\tau_0(x) = \frac{2j-1}{2^k}$ cho $x \in I_{k,j}$ với $j = 1, \dots, 2^{k-1}$.

> [!lem]
>  Hàm $\tau_{0}$ liên tục đều trên $G$

> [!prf]
> Theo cách xây dựng, $\tau_{0}$ là một hàm tăng trên $G$. Lấy hai điểm $x', x'' \in G$. Nếu khoảng cách giữa hai điểm này nhở hơn $\frac{1}{3^{k}}$, (tức là chúng không thể bị ngăn cách bởi các khoảng được gán giá trị xa nhau), thì độ lệch giá trị của hàm không vượt quá $\frac{1}{2^k}$. Cụ thể, với mọi $\epsilon > 0$, ta chọn $k \in \mathbb{N}$ đủ lớn sao cho $\frac{1}{2^k} < \epsilon$. Khi đó với ${} x', x'' \in G$: 
> $$
> |x' - x''| < \frac{1}{3^{k}} \implies |\tau_{0}(x') - \tau_{0}(x'')| \le \frac{1}{2^{k}} < \epsilon 
> $$
> Điều này chứng tỏ $\tau_{0}$ liên tục đều trên $G$.

## 3.3 Mở rộng thành hàm Cantor - Lebesgue
Vì $\tau_{0}$ liên tục đều trên $G$, theo tính chất của không gian metric, nó có thể mở rộng liên tục thành bao đóng $\overline{G}$. Do $G$ trù mật trong $[0,1]$ (như đã chứng minh trong tính chất tập Cantor), ta có $\overline{G} = [0,1]$.

> [!def] 
> Mở rộng liên tục duy nhất của $\tau_0$ lên đoạn $[0,1]$ được gọi là hàm Cantor-Lebesgue trên $[0,1]$, ký hiệu là $\tau(x)$.

> [!thm] 
> Hàm Cantor - Lebesgue có các tính chất sau:
> (i) $\tau$ liên tục trên $[0,1]$.
> (ii) $\tau$ tăng (không ngặt) trên $[0,1]$, với $\tau(0) = 0$ và $\tau(1) = 1$.
> (iii) $\tau'(x) = 0$ hầu khắp nơi (a.e) trên $[0,1]$.

> [!prf]
> (i) Tính liên tục của $\tau(x)$ trên $[0, 1]$ được xây dựng dựa trên Định lý Mở rộng liên tục trong không gian metric. 
> Thật vậy, ta đã chứng minh $G$ là một tập con trù mật trong đoạn $[0, 1]$, và $\tau_0$ là một hàm liên tục đều trên $G$. Lấy một điểm tùy ý $x \in [0, 1] \setminus G$ (tức $x \in \mathcal{C}$). Do tính trù mật của $G$, luôn tồn tại một dãy $(x_n) \subset G$ sao cho $\lim_{n \to \infty} x_n = x$.
> Vì dãy $(x_n)$ hội tụ nên nó là một dãy Cauchy. Vì $\tau_0$ liên tục đều trên $G$, nó bảo toàn tính chất Cauchy; do đó $(\tau_0(x_n))$ là một dãy Cauchy trong không gian metric $\mathbb{R}$. Vì $\mathbb{R}$ là một không gian đầy đủ, dãy này chắc chắn hội tụ về một giới hạn duy nhất. Ta định nghĩa giá trị của hàm mở rộng là:
> $$\tau(x) := \lim_{n \to \infty} \tau_0(x_n)$$
> Do tính duy nhất của giới hạn này tại mọi điểm thuộc bao đóng $\overline{G} = [0,1]$, hàm mở rộng $\tau(x)$ được xác định tốt và liên tục trên toàn bộ không gian $[0, 1]$.
> (ii) Để chứng minh $\tau$ tăng trên $[0, 1]$, lấy hai điểm bất kỳ $x', x'' \in [0, 1]$ sao cho $x' < x''$. Vì $G$ là tập trù mật trong $[0, 1]$, ta luôn có thể chọn được hai dãy điểm $(a_n)$ và $(b_n)$ nằm hoàn toàn trong $G$ sao cho $a_n < b_n$ với mọi $n$, và $a_n \to x'$, $b_n \to x''$ khi $n \to \infty$. Do $\tau_0$ là hàm tăng trên $G$, ta có $\tau_0(a_n) \le \tau_0(b_n)$. Lấy giới hạn hai vế và sử dụng tính liên tục của hàm mở rộng $\tau$, ta thu được:
> $$\lim_{n \to \infty} \tau(a_n) \le \lim_{n \to \infty} \tau(b_n) \implies \tau(x') \le \tau(x'')$$
> Vậy $\tau$ là hàm tăng không ngặt. Để tính $\tau_{0}$, ta xét các dãy điểm là trung điểm của khoảng mở đầu tiên bên trái $I_{k,1} = \left( \frac{1}{3^{k}}, \frac{2}{3^{k}} \right)$: chọn $x_{k} = \frac{1.5}{3^{k}} \in I_{k,1}$. Khi $k \to \infty$ thì $x_{k} \to 0.$ Theo định nghĩa, ta có $\tau_{0}(x_{k}) = \frac{1}{2^{k}}$. Do đó $\tau$ liên tục tại $0$ dẫn tớii 
> $$
> \tau_{0} = \lim_{ k \to \infty } \tau(x_{k}) = \lim_{ k \to \infty } \frac{1}{2^{k}} = 0
> $$
> Hoàn toàn tương tự, bằng cách xét các khoảng mở tận cùng bên phải $I_{k, 2^{k-1}}$, ta có $\tau(x_k) = \frac{2^k - 1}{2^k} = 1 - \frac{1}{2^k}$. Cho $k \to \infty$, ta thu được $\tau(1) = 1$.
> (iii) Đạo hàm $\tau'(x) = 0$ hầu khắp nơi:
> Theo cách xây dựng, trên mỗi khoảng mở $I_{k,j} \subset G$, hàm $\tau(x)$ nhận một giá trị hằng số $c_{k,j} = \frac{2j-1}{2^k}$. Vì đạo hàm của một hằng số bằng $0$, nên $\tau'(x) = 0$ tại mọi điểm $x \in G$.
> Hơn nữa, ta đã chứng minh tổng độ đo Lebesgue của tập $G$ là $\mu_L(G) = 1$. Vậy đạo hàm $\tau'(x) = 0$ hầu khắp nơi trên $[0,1]$.

## 3.4 Phép đồng phôi và sự không đầy đủ của $\sigma$-đại số Borel
- Mục tiêu của phần này là thông qua các tính chất giải tích của hàm Cantor-Lebesgue, ta thiết lập một phép biến đổi đồng phôi chứng minh sự tồn tại của một tập hợp đo được theo Lebesgue nhưng không thuộc $\sigma$-đại số Borel. Điều này chỉ ra tính chất quan trọng của $\sigma$ - đại số Borel: sự không đầy đủ.
- Để thực hiện phép biến đổi này, do bản thân hàm $\tau(x)$ là hàm tăng không ngặt nên chưa thỏa mãn tính song ánh. Ta cần cấu trúc một hàm mới để khắc phục điều này.

> [!def] 
> Ta ký hiệu $i(x) = x$ là hàm đồng nhất trên ${} [0,1]$. Ta định nghĩa hàm $\varphi: [0,1] \to \mathbb{R}$ như sau: 
> $$ \varphi(x) = \tau(x) + x $$

> [!prp] 
> Hàm $\varphi$ là một phép đồng phôi (homeomorphism) từ không gian $[0,1]$ lên không gian $[0,2]$.

> [!prf]
> (i) Tính liên tục: Vì hàm Cantor-Lebesgue $\tau(x)$ và hàm đồng nhất $x$ đều liên tục trên đoạn $[0,1]$, tổng của chúng $\varphi(x)$ là một hàm liên tục trên $[0,1]$.
> (ii) Tính đơn ánh: $\tau(x)$ là hàm tăng không ngặt, trong khi $x$ là hàm tăng ngặt trên $\mathbb{R}$. Do đó, $\varphi(x)$ bắt buộc phải là một hàm tăng ngặt. Hệ quả kéo theo $\varphi$ là một đơn ánh.
> (iii) Tính toàn ánh: Ta có $\varphi(0) = \tau(0) + 0 = 0$ và $\varphi(1) = \tau(1) + 1 = 2$. Do $\varphi$ liên tục trên tập liên thông $[0,1]$, theo Định lý giá trị trung gian, tập giá trị của $\varphi$ là toàn bộ đoạn $[0,2]$. Vậy $\varphi$ là một toàn ánh.
> (iv) Tính liên tục của ánh xạ ngược: Ta có tính chất: _Một hàm số tăng ngặt và liên tục trên một đoạn $[a,b]$ thì sẽ có hàm ngược cũng tăng ngặt và liên tục trên miền giá trị của nó._
> Vậy $\varphi$ song ánh và cả $\varphi$ và $\varphi ^{-1}$ đều liên tục nên $\varphi$ là phép đồng phôi từ ${} [0,1]$ vào $[0,2]$.

> [!rem] 
> Tính chất đồng phôi có hệ quả quan trọng trong lý thuyết độ đo: nó bảo toàn cấu trúc Tô-pô. Nói cách khác, tạo ảnh của một tập Borel qua một hàm liên tục luôn luôn là một tập Borel.

> [!lem]
> Phép đồng phôi $\varphi$ biến tập Cantor $T$ có độ đo Lebesgue bằng 0 thành một tập hợp ảnh $\varphi(T)$ có độ đo Lebesgue dương $\mu_L = 1$.

> [!prf]
> Ta xác định độ đo của tập $\varphi(T)$ thông qua độ đo của phần bù của nó là tập $\varphi(G)$. Nhắc lại cấu trúc của tập mở $G = \bigcup_{k,j}I_{k,j}$. Trên mỗi khoảng mở $I_{j,k}$, hàm $\tau(x)$ nhận giá trị là một hằng số $c_{k,j}$. Do đó, với mọi $x \in I_{k,j}$, phép biến đổi $\varphi$ có dạng: 
> $$
> \varphi(x) = c_{k,j} + x
> $$
> Do tính bất biến của độ đo qua phép tịnh tiến, ta có: 
> $$
> \mu_L(\varphi(I_{k,j})) = \mu_L(I_{k,j} + c_{k,j}) = \mu_L(I_{k,j})
> $$
> Vì họ các khoảng $I_{k,j}$ rời nhau đôi một, ảnh của chúng qua đơn ánh $\varphi$ cũng là các tập rời nhau. Áp dụng tính $\sigma$ - cộng tính của độ đo Lebesgue, ta thu được:
> $$
> \mu_L(\varphi(G)) = \mu_L\left(\bigcup_{k,j} \varphi(I_{k,j})\right) = \sum_{k,j} \mu_L(\varphi(I_{k,j})) = \sum_{k,j} \mu_L(I_{k,j}) = \mu_L(G) = 1
> $$
> Mặt khác, vì $\varphi$ là song ánh từ $[0,1]$ lên $[0,2]$, ta có sự phân hoạch ảnh: $\varphi([0,1]) = \varphi(T) \cup \varphi(G)$. Do $\varphi(T)$ và $\varphi(G)$ rời nhau, độ đo của tập Cantor qua phép đồng phôi là:
> $$
> \mu_L(\varphi(T)) = \mu_L([0,2]) - \mu_L(\varphi(G)) = 2 - 1 = 1
> $$

> [!rem]
> Ta nhắc lại cách xây dựng hai cấu trúc quan trọng trên tập số thực $\mathbb{R}$:
> 1. $\sigma$ - đại số Borel ($\mathcal{B}(\mathbb{R})$): Được xây dựng "từ trên xuống" (Top-down approach), là $\sigma$-đại số nhỏ nhất chứa tất cả các tập mở của $\mathbb{R}$. Đây là cấu trúc gắn liền với tính chất Tô-pô của không gian.
> 2. $\sigma$ - đại số Lebesgue ($\mathfrak{M}_{L}$): Được xây dựng theo phương pháp "từ dưới lên" (Bottom-up approach) thông qua độ đo ngoài $\mu^*$ và tiêu chuẩn đo được Carathéodory. Không gian độ đo tương ứng được ký hiệu là $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$
> Ta đã chứng minh được (nội dung trong lớp học): Mọi tập Borel đều là một tập Lebesgue đo được, tức $\mathcal{B}(\mathbb{R}) \subset \mathfrak{M}_{L}$. Tuy nhiên, $\sigma$-đại số Borel bộc lộ một hạn chế là tính không đầy đủ: nó không nhất thiết chứa mọi tập con của một tập có độ đo không.

> [!lem]
> Mọi tập hợp đo được Lebesgue với độ đo dương đều tồn tại ít nhất một tập con không đo được theo Lebesgue

> [!prf]
> Bổ đề này là kết quả có được ở chương trước, kiến thức cần để chứng minh là Độ đo trong và Độ đo ngoài

> [!thm] 
> Tồn tại một tập con của $\mathbb{R}$ đo được theo Lebesgue nhưng không thuộc $\sigma$ - đại số Borel

> [!prf]
> Ta đã chứng minh được ảnh của một tâp Cantor qua phép đồng phôi $\varphi(T)$ có độ đo Lebesgue dương ($\mu_{L} (\varphi(T)) = 1$). Áp dụng trực tiếp bổ đề về sự tồn tại tập Lebesgue không đo được, ta tìm được tập con $W \subset \varphi(T)$ sao cho $W$ không đo được theo Lebesgue, tức là $W \notin \mathfrak{M}_{L}$
> Ta xét ảnh của $W$ qua phép đồng phôi $\varphi$, ký hiệu $A = \varphi ^{-1}(W)$. Vì $W \subset \varphi(T)$, ta suy ra $A \subset T$. Tập Cantor T có độ đo $\mu_{L}(T) = 0$. Vì không gian độ đo Lebesgue $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$ là một không gian đo đầy đủ (mọi tập con của một tập có độ đo $0$ đều đo được và có độ đo $0$), ta suy ra $A$ đo được theo Lebesgue và $\mu_{L}(A) = 0$.
> Ta sẽ phản chứng để chỉ ra $A$ không phải là tập Borel. Giả sử $A \in \mathcal{B}(\mathbb{R})$. Theo *Remark 1*, ta biết tạo ảnh của một tập Borel qua một hàm liên tục thì luôn là tập Borel. Vì phép đồng phôi có hàm ngược $\varphi^{-1}$ liên tục, tạo ảnh của tập $A$ qua $\varphi^{-1}$ cũng phải là một tập Borel. Ta có: 
> $$
> (\varphi^{-1})^{-1}(A) = \varphi(A) = W
> $$
> Hệ quả dẫn đến $W$ là một tập Borel (${} W \in \mathcal{B}(\mathbb{R}) {}$). Tuy nhiên, do mọi tập Borel đều đo được theo Lebesgue ($\mathcal{B}(\mathbb{R}) \subset \mathfrak{M}_L$), điều này kéo theo $W \in \mathfrak{M}_L$, mâu thuẫn trực tiếp với cách chọn tập $W$ ban đầu. Vậy tìm được tập $A \in \mathfrak{M}_{L}$ nhưng $A \notin \mathcal{B}(\mathbb{R})$.

> [!cor] 
> Không gian độ đo Borel $(\mathbb{R}, \mathcal{B}(\mathbb{R}), \mu_{B})$, trong đó $\mu_{B}$ là thu hẹp của độ đo Lebesgue $\mu_{L}$ trên $\mathcal{B}(\mathbb{R})$, là một không gian không đầy đủ.

> [!prf]
> Theo định nghĩa, một không gian đo là đầy đủ nếu mọi tập con của một tập có độ đo không (null set) đều phải là một tập đo được (tức là phải thuộc $\sigma$ - đại số tương ứng của không gian đó). Xét tập Cantor $T$. Vì $T$ là một tập compact (đóng và bị chặn) trong $\mathbb{R}$, ta có ${} T \in \mathcal{B}(\mathbb{R}) {}$. Đồng thời, ta đã biết $\mu_B(T) = \mu_L(T) = 0$. Vậy $T$ là một tập có độ đo không trong không gian Borel. Theo định lý ở trên, ta xây dựng được tập $A$ thỏa: $A \subset T$ và $A \notin \mathcal{B}(\mathbb{R})$. Như vậy, tồn tại một tập con ($A$) của một tập có độ đo không ($T$) nhưng bản thân nó lại không phải là tập Borel. Điều này vi phạm trực tiếp định nghĩa về sự đầy đủ. Do đó, không gian đo Borel $(\mathbb{R}, \mathcal{B}(\mathbb{R}), \mu_B)$ không đầy đủ.

 Hệ quả trên đã chỉ ra khuyết điểm của cấu trúc $\sigma$ - đại số Borel. Sự tồn tại của tập $A$ không đo được Borel nhưng đo được Lebesgue cho thấy tính chất không gian Lebesgue mạnh hơn Borel? Chương tiếp theo sẽ chỉ ra cách mở rộng một không gian đo bất kỳ (như hệ Borel) thành một $\sigma$-đại số lớn hơn sao cho nó có thể "nuốt trọn" mọi tập con của các tập có độ đo không để mang tính chất đầy đủ như một $\sigma$ - đại số Lebesgue $\mathfrak{M}_{L}$

# 4. Sử đầy đủ hóa của không gian đo

## 4.1 Khái niệm





$\xi$

---
[📄 View PDF](./Tiểu luận độ đo.pdf)

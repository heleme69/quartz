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
    titleLine: "Bài tiểu luận giữa kì Lý thuyết Độ đo và Tích phân",
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

- Dẫn nhập: Trực giác toán học thường đánh đồng "kích thước" (độ đo) với "số lượng" (lực lượng). Tuy nhiên, Giải tích hiện đại chứng minh điều ngược lại.
- Mục tiêu Tiểu luận: Sử dụng tập Cantor và hàm Cantor-Lebesgue làm công cụ giải phẫu để phơi bày "lỗ hổng" của $\sigma$-đại số Borel $\mathcal{B}(\mathbb{R})$. Từ điểm đứt gãy đó, bài viết sẽ trình bày quá trình kiến tạo cấu trúc chặt chẽ hơn: Sự đầy đủ hóa không gian đo (Completion of Measure Space).

# 2. Khảo sát tập Cantor $\mathcal{C}$ (Cantor Ternary Set)

## 2.1 Ý tưởng cốt lõi
Tập Cantor (hay còn gọi là tập Cantor tam phân - Cantor Ternary Set) được xây dựng dựa trên một quá trình quy nạp. Bắt đầu từ một đoạn thẳng ban đầu, ta liên tục chia các đoạn thẳng hiện có thành ba phần bằng nhau và vứt bỏ đi "khoảng mở" ở chính giữa. Quá trình này tạo ra một dãy các tập hợp lồng nhau và ngày càng "thưa thớt", phần còn lại cuối cùng chính là tập Cantor.
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
> Định nghĩa tập Cantor: Dãy các tập hợp $\{E_n\}_{n=0}^{\infty}$ tạo thành một dãy lồng nhau giảm dần: $E_0 \supset E_1 \supset E_2 \supset \dots \supset E_n \supset \dots$. Tập Cantor $\mathcal{C}$ được định nghĩa là phần giao của tất cả các tập hợp $E_n$ trong quá trình lặp vô hạn này:
> $$\mathcal{C} = \bigcap_{n=0}^{\infty} E_n = \lim_{n \to \infty} E_n$$
> 

## 2.3 Giải nghĩa quá trình xây dựng qua biểu diễn Giải tích (Hệ tam phân)

> [!obs]
> Cách xây dựng hình học ở trên có một mối liên hệ với đại số thông qua hệ đếm cơ số 3 (ternary expansion). Mọi số thực $x \in [0, 1]$ đều có thể được biểu diễn dưới dạng chuỗi tam phân:
> $$x = \sum_{k=1}^{\infty} \frac{a_k}{3^k} \quad \text{với } a_k \in \{0, 1, 2\}$$
> Khi ta chia đoạn $[0,1]$ làm ba phần, đoạn đầu tiên $[0, 1/3]$ tương ứng với các số có chữ số thập phân đầu tiên $a_1 = 0$.
> Đoạn ở giữa $(1/3, 2/3)$ tương ứng với các số có chữ số đầu tiên $a_1 = 1$.
> Đoạn cuối $[2/3, 1]$ tương ứng với các số có chữ số đầu tiên $a_1 = 2$.
> Việc ta loại bỏ khoảng mở ở giữa $(1/3, 2/3)$ ở Bước 1 chính là hành động loại bỏ tất cả các số thực mà khai triển tam phân của nó có $a_1 = 1$. Tiếp tục ở Bước 2, việc loại bỏ khoảng giữa của các đoạn con chính là việc loại bỏ các số có $a_2 = 1$.
> Tập Cantor $\mathcal{C}$ thu được ở cuối quá trình chính là tập hợp của tất cả các số thực trong đoạn $[0,1]$ mà biểu diễn tam phân của nó không chứa chữ số 1:
> $$\mathcal{C} = \left\{ x \in [0,1] \mathrel{\Big|} x = \sum_{k=1}^{\infty} \frac{a_k}{3^k}, \text{ với } a_k \in \{0, 2\} \, \forall k \in \mathbb{N} \right\}$$
> _(Lưu ý: Đối với các điểm mút như $1/3$, mặc dù nó có biểu diễn là $0.1_3$, nhưng ta vẫn có thể viết nó dưới dạng chuỗi vô hạn $0.02222..._3$. Vì nó có một biểu diễn không chứa số 1, nên $1/3$ vẫn thuộc tập Cantor)_

> [!prp] 
> Tập Cantor tam phân $T$ có các tính chất sau đây:
> (a) $T$ là một tập null (có độ đo bằng 0) trong không gian độ đo Borel $(\mathbb{R}, \mathcal{B}_\mathbb{R}, \mu_L)$.
> (b) $G = [0, 1] \setminus T$ là hợp của vô số đếm được các khoảng mở rời nhau trong $\mathbb{R}$; $G$ trù mật trong $[0, 1]$, và độ đo Lebesgue $\mu_L(G) = 1$.
> (c) $T$ là một tập không đếm được. Thực chất, lực lượng của $T$ bằng với $\mathfrak{c}$ (lực lượng continuum).
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
> (c) $T$ là một tập không đếm được. Lực lượng của $T$ bằng $\mathfrak{c}$ (continuum)
> Mọi số $x \in T$ đều có thể được biểu diễn dưới dạng chuỗi tam phân không chứa chữ số 1:
> $$x = \sum_{k=1}^{\infty} \frac{a_k}{3^k}, \quad a_k \in \{0, 2\}$$
> Ta định nghĩa một ánh xạ $f: T \to [0, 1]$ bằng cách lấy biểu diễn tam phân của $x$, chia các chữ số $a_k$ cho 2, và coi kết quả thu được là một chuỗi nhị phân (hệ cơ số 2):
> $$f(x) = \sum_{k=1}^{\infty} \frac{a_k / 2}{2^k}$$
> Vì $a_k \in \{0, 2\}$, nên $a_k/2 \in \{0, 1\}$.
> Mọi số thực $y \in [0, 1]$ đều có ít nhất một biểu diễn nhị phân dưới dạng $y = \sum_{k=1}^{\infty} \frac{b_k}{2^k}$ với $b_k \in \{0, 1\}$. Từ dãy $(b_k)$ này, ta chọn $a_k = 2b_k \in \{0, 2\}$ và thiết lập được một điểm $x \in T$. Khi đó $f(x) = y$.
> Do $f$ là một toàn ánh từ $T$ vào đoạn $[0, 1]$, ta suy ra lực lượng của $T$ lớn hơn hoặc bằng lực lượng của $[0, 1]$, tức là $|T| \ge \mathfrak{c}$.
> Mặt khác, vì $T \subset \mathbb{R}$, nên $|T| \le \mathfrak{c}$. Theo định lý Cantor-Bernstein, ta kết luận $|T| = \mathfrak{c}$.
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
> Vì $T$ là tập đóng (đã chứng minh ở phần d), nên bao đóng của $T$ bằng chính nó: $\overline{T} = T$. Ta chỉ cần chứng minh phần trong của $T$ là rỗng ($\mathring{T} = \emptyset$).
> Giả sử phản chứng rằng $\mathring{T} \neq \emptyset$. Điều này có nghĩa là tồn tại một khoảng mở $(a, b) \subset T$ với độ dài $L = b - a > 0$.
> Ta chọn một số tự nhiên $n$ đủ lớn sao cho $\frac{1}{3^n} < L$.
> Tuy nhiên, $T \subset T_n$, mà $T_n$ chỉ bao gồm các đoạn thẳng có độ dài bằng $\frac{1}{3^n}$. Khoảng mở $(a, b)$ có chiều dài lớn hơn $\frac{1}{3^n}$ nên không thể nằm trọn vẹn trong bất kỳ đoạn nào của $T_n$.
> Từ đó suy ra $(a, b)$ không thể là tập con của $T_n$, và do đó càng không thể là tập con của $T$. Điều này mâu thuẫn với giả thiết $(a, b) \subset T$.
> Vậy $\mathring{T} = \emptyset$, đồng nghĩa với việc $T$ là một tập không đâu trù mật.

---
[📄 View PDF](./Untitled 1.pdf)

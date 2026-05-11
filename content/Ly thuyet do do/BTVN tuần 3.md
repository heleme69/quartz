```dataviewjs
// ╔══════════════════════════════════════════════════════════╗
//   GLOBAL CONFIG - TÙY CHỈNH THÔNG TIN TIỂU LUẬN
// ╚══════════════════════════════════════════════════════════╝
const CONFIG = {
  // --- TÍNH NĂNG BẬT/TẮT (true: Hiện, false: Ẩn) ---
  showCover:     false,   // true = có trang bìa (trang 1)
  showTitlePage: true,   // true = có trang tiêu đề phụ (trang 2)
  showTOC:       false,   // true = có mục lục

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
    titleLine: "Bài tập về nhà tuần 3",
    authors:   ["Huy - MSSV: 24110022"],
  },

  // 6. Cấu hình Mục lục
  tocHeading: "Mục Lục",
  toc: [
    { level: 1, num: "0",   title: "Kiến thức chuẩn bị",                                                page: 1  },
    { level: 1, num: "1",   title: "Sự đầy đủ hoá của không gian đo",                                   page: 3  },
    { level: 2, num: "1.1", title: "Mở rộng toàn phần và tính đầy đủ của không gian đo",                page: 3  },
    { level: 2, num: "1.2", title: "Đầy đủ hoá không gian độ đo Borel thành không gian đo Lebesgue",    page: 8  },
  ],
};
// ╚══════════════════════════════════════════════════════════╝

// --- XỬ LÝ DỮ LIỆU ĐẦU VÀO ---
const logoFile = app.vault.getAbstractFileByPath(CONFIG.logoPath);
const logoSrc  = logoFile ? app.vault.getResourcePath(logoFile) : "";
const logoHtml = logoSrc ? `<img src="${logoSrc}" alt="Logo" />` : `<div style="height: 100px;">(Không tìm thấy Logo)</div>`;

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
let finalHTML = "";

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
          <div class="cover-major"><b>Ngành:</b> ${CONFIG.nganh}<br><b>Chuyên ngành:</b> ${CONFIG.chuyenNganh}</div>
        </div>
        <div>
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
# Problems

> [!exr] Prob 1.23
> Let $(X, \mathfrak{A})$ be a measureable space. Let $\mu_{k}$ be a measure on the $\sigma$ - algebra of $X$ and let $\alpha_{k} \ge 0$ for every $k \in \mathbb{N}$. Define a set function $\mu$ on a $\mathfrak{A}$ by setting $\mu = \sum_{k \in \mathbb{N}} \alpha_{k} \mu_{k}$. Show that $\mu$ is a measure on $\mathfrak{A}$.

> [!prf]
> Ta cần chứng minh các tính chất thỏa định nghĩa độ đo: tính không âm, độ đo không và tính $\sigma$ - cộng tính:
> - Vì $\mu_{k}$ là độ đo trên $X$, ta có $\mu_{k} \ge 0$, vậy ${} \mu = \sum_{k \in \mathbb{N}}\alpha_{k} \mu_{k} \ge 0$.
> - Ta có $\mu_{k} = 0$ với mọi tập rỗng trên $X$, vậy $\mu(\emptyset) = \sum_{k \in \mathbb{N}} \alpha_{k} \mu_{k} = \sum_{k \in \mathbb{N}}\alpha_{k} \cdot 0 = 0$.
> - Lấy $E_{n}: n \in \mathbb{N}$ là dãy các tập rời nhau, ta có:
> $$
> \begin{align}
> \mu\left( \bigcup_{n = 1} ^{\infty} E_{n} \right) &=  \sum_{n=1}^{\infty} \alpha_{k} \cdot \mu_{k} \left( \bigcup_{n = 1} ^{\infty} E_{n} \right) \\ &=  \sum_{k=1}^{\infty} \alpha_{k} \left( \sum_{n=1}^{\infty}\mu_{k}(E_{n}) \right) \\ &=  \sum_{k=1}^{\infty} \sum_{n=1}^{\infty} \alpha_{k} \mu_{k} (E_{k}) \\ &= \sum_{n=1}^{\infty} (\sum_{k=1}^{\infty} \alpha_{k} \mu_{k} (E_{n})) \\ &= \sum_{n=1}^{\infty} \mu(E_{n}).
> \end{align}
> $$
> Vậy $\mu$ thỏa định nghĩa độ đo trên $\mathfrak{A}$.

> [!exr] Prob 1.24
> Let $X$ = $(0,\infty)$ and let $\mathfrak{J} = \{ J_{k}: k \in \mathbb{N} \}$ where $J_{k} = (k-1,k]$ for all $k \in \mathbb{N}$. Let $\mathfrak{A}$ be the collection of all arbitrary unions of member of $\mathfrak{J}$. For every $A \in \mathfrak{A}$ let us define $\mu(A)$ to be the number of element of $\mathfrak{F}$ that constitute A.
> a) Show that $\mathfrak{A}$ is a $\sigma$ - algebra of subset of $X$.
> b) Show that $\mu$ is a measure on the $\sigma$ - algebra $\mathfrak{A}$.
> c) Let $(A_{n}:n \in \mathbb{N})$ $\subset \mathfrak{A}$ where $A_{n} = (n, \infty)$ for $n \in \mathbb{N}$. Show that for the decresing sequence $(A_{n}: n \in N)$ we have $\lim_{ n \to  \infty }\mu(A_{n} )\neq \mu(\lim_{ n \to \infty }A_{n})$

> [!prf] 
> Ta nhận thấy $\mathfrak{J}$ là phân hoạch các tập rời nhau của không gian $X = (0, \infty)$. Ngĩa là $J_{k}$ rời nhau đôi một và hội của chúng bằng không gian $X$. Vì $\mathfrak{J}$ là họ bất kì của hội $J_{k}$ trong $\mathfrak{A}$, ta có với mọi $A \in \mathfrak{A}$, ta có $A = \bigcup_{k \in I} J_{k}$, với $I \subseteq \mathbb{N}$ là tập hợp chỉ số bất kì, khi đó $\mu(A) = \lvert I \rvert$ là lực lượng của chỉ số $I$.
> 
> a) 
> Ta chứng minh $\mathfrak{A}$ là $\sigma$ - đại số:
> - Ta có $X = (0, \infty) = \bigcup_{k=1} ^{\infty} J_{k}$, vì là hợp tất cả phần tử trong $\mathfrak{J}$ mà $\mathfrak{A}$ là hội bất kì của tất cả các tập trong $X$ nên $X \in \mathfrak{A}$.
> - Giả sử $A \in \mathfrak{A}$, $A = \bigcup_{k \in I} J_{k}$, và vì $J_{k}$ phân hoạch $X$, phần bù của $A$ là: $A ^{c} = X \setminus A = \bigcup_{k \in \mathbb{N} \setminus I} J_{k}$ và vì $\mathbb{N} \setminus I$ cũng là tập con của $I$ nên $A ^{c} \in \mathfrak{A}$
> - Giả sử ta có dãy $A_{1}, A_{2}, \dots A_{n} \in \mathfrak{A}$. Mỗi tập $A_{n}$ được cho bởi: $A_{n} = \bigcup_{k \in I_{n}}J_{k}$. Khi đó, $\bigcup_{n=1} ^{\infty}A_{n} = \bigcup_{n=1}^{\infty} \bigcup_{k \in I_{n}}J_{k} = \bigcup_{k \in \bigcup_{n=1}^{\infty}I_{n}}J_{k}$. Vì $\bigcup_{n=1}^{\infty}I_{n} \subseteq \mathbb{N}$ nên $\bigcup_{n=1}^{\infty} A_{n} \in \mathfrak{A}$.
> Vậy $\mathfrak{A}$ là một $\sigma$ - đại số
> 
> b)
> Chứng minh $\mu$ là độ đo trên ${} \mathfrak{A}$:
> - Vì $\mu(A)$ chỉ số lượng phần tử nên $\mu(A)$ $\ge 0$.
> - Tập rỗng tương đương $I = \emptyset$ hay không có đoạn $J_{k}$ nào, khi đó $\mu(\emptyset) = 0$.
> - Lấy $\{ E_{n} \}_{n=1} ^{\infty}$ là dãy rời nhau, ta cần chứng minh $\mu\left( \bigcup_{n=1}^{\infty}E_{n} \right) = \sum_{n=1}^{\infty} \mu (E_{n})$.
>     - Giả sử $E_{n} = \bigcup_{k \in I_{n}} J_{k}$, ta có $\bigcup_{n=1} ^{\infty} E_{n} = \bigcup_{n=1} ^{\infty} \bigcup_{k \in I_{n}}J_{k} = \bigcup_{k \in \bigcup_{n=1}^{\infty}I_{n}}J_{k}$
>     - Vì $\mu\left( \bigcup_{n=1}^{\infty}E_{n} \right) = \left\lvert  \bigcup_{n=1} ^{\infty}I_{n}  \right\rvert$ và vì $I_{n}$ rời rạc, nên $\left\lvert  \bigcup_{n=1}^{\infty } I_{n}  \right\rvert = \sum_{n=1}^{\infty} \lvert I_{n} \rvert = \sum_{n=1}^{\infty} \mu(E_{n})$  
>
> c) 
> Lấy $(A_{n}: n \in \mathbb{N}) \subset \mathfrak{A}$, $A_{n} = (n, \infty)$ với mọi $n \in \mathbb{N}$. Chứng minh dãy $(A_{n}: n \in \mathbb{N})$ có $\lim_{ n \to \infty } \mu (A_{n}) \neq \mu (\lim_{ n \to \infty } A_{n})$
> - Ta biểu diễn ${} A_{n}$ theo ${} J_{k}$: $A_{n} = \bigcup_{n = k+1}^{\infty} (k-1, k] = \bigcup_{n = k+1} ^{\infty} J_{k}$.
>   Vì $A_{n}$ được cấu tạo từ vô hạn các tập $J_{k} \subset \mathfrak{J}$, mỗi ${} J_{k}$ có lực lượng bằng một, nên $\mu (A_{n}) = \infty$ $\forall n \in \mathbb{N}$, Vậy $\lim_{ n \to \infty } \mu (A_{n}) = \infty$.
> - Ta lại có ${} (A_{n})$ là dãy giảm, giới hạn của dãy là giao của tất cả các tập:
>   $\lim_{ n \to \infty } A_{n} = \bigcap_{n=1} ^{\infty} (n, \infty)$.
>   Giả sử $x \in \bigcap_{n =1} ^{\infty} (n, \infty)$ thì $x > n$, $\forall n \in \mathbb{N}$, dẫn tới n không thể tồn tại. Suy ra $\lim_{ n \to \infty } A_{n} = \emptyset$, hay: $\mu (\lim_{ n \to \infty } A_{n}) = \mu (\emptyset) = 0$.
> - Vậy $\lim_{ n \to \infty } \mu (A_{n}) \neq \mu (\lim_{ n \to \infty }A_{n})$.
  
> [!exr] Prob 1.29
> Let $X$ be a countably infinite set and let $\mathfrak{A}$ be the $\sigma$ - algebra of all subset of $X$. Define a set function $\mu$ on $\mathfrak{A}$ by defining for every $E \in \mathfrak{A}$
> $$
> \mu(E) = 
> \begin{cases}
> 0, & \text{if }  E \text{ is a finite set} \\
> \infty, & \text{if } \text{otherwise}
> \end{cases}
> $$ 
> a) Show that $\mu$ is additive but not countably additive on $\mathfrak{A}$
> b) Show that $X$ is a limit of an increasing sequence $(E_{n}: n \in \mathbb{N})$ in $\mathfrak{A}$ with $\mu(E_{n}) = 0$ for all n, but $\mu(X) = 0$.

> [!prf]
> a) 
> - Cho $A, B \in \mathfrak{A}$ là hai tập rời rạc, ta xét hai trường hợp:
> 	- Nếu $A, B$ đều hữu hạn: Khi đó $A \cup B$ hữu hạn nên $\mu (A \cup B) = 0$; đồng thời $\mu(A) + \mu(B) = 0 + 0 = 0$;
> 	- Ít nhất một trong hai tập $A$ hoặc $B$ là vô hạn: Khi đó $A \cup B$ là một tập vô hạn nên $\mu(A \cup B) = \infty$; còn $\mu(A) + \mu(B)$ sẽ có dạng $0 + \infty$ hoặc $\infty + 0$ và đều bằng $\infty$.
> 	Từ hai trường hợp trên ta kết luận $\mu$ có tính cộng tính hữu hạn
> - Ta chứng minh $\mu$ không có tính $\sigma$ - cộng tính:
> 	- Vì $X$ là tập vô hạn đếm được, ta liệt kê được các phần tử của $X$:
> 	  $X = \{ x_{1}, x_{2}, x_{3}, \dots,x_{n},\dots \}$, ta chọn dãy $(E_{n})_{n \in \mathbb{N}}$ sao cho mỗi tập chỉ chứa đúng một phần tử: $E_{n} = \{ x_{n} \}$.
> 	- Ta nhận thấy: $\mu(E_{n}) = 0$ $\forall n \in \mathbb{N}$ và $\sum_{n=1}^{\infty} \mu(E_{n}) = \sum_{n=1}^{\infty} 0 = 0$; 
> 	  nhưng $\bigcup_{n=1} ^{\infty} E_{n} = \{ x_{1}, x_{2}, x_{3}, \dots \} = X$, mà $X$ là tập vô hạn (đếm được), nên $\mu\left( \bigcup_{n=1} ^{\infty} E_{n} \right) = \mu (X) = \infty$. Vậy $0 =\sum_{n=1}^{\infty} \mu(E_{n}) \neq \mu\left( \bigcup_{n=1} ^{\infty} E_{n} \right) = \infty$
>   Vậy $\mu$ không có tính $\sigma$ - cộng tính.
>   
> b)
> - Với $E_{n} = \{ x_{1}, x_{2}, x_{3}, \dots, x_{n} \}$ (mỗi dãy $E_{n}$ chứa $n$ phần tử), ta có $E_{1} \subset E_{2} \subset E_{3} \subset \dots$, do đó ${} (E_{n})$ là dãy tăng nên giới hạn dãy tồn tại, khi đó:
>   $\lim_{ n \to \infty }E_{n} = \bigcup_{n = 1} ^{\infty} E_{n} = X$.
> - Ta có: với mỗi $n \in \mathbb{N}$, tập ${} E_{n}$ là hữu hạn và chứa đúng $n$ phần tử, theo đó $\mu (E_{n}) = 0$ $\forall n \in \mathbb{N}$. Suy ra $\lim_{ n \to \infty } \mu(E_{n}) = 0$.
> - Mặt khác: giới hạn của dãy các tập ${} (E_{n})$ là $X$ - $X$ là một tập vô hạn nên theo định nghĩa: $\mu(X) = \infty$, mâu thuẫn với kết quả ở trên.
> Vậy ta chỉ ra được dãy $(E_{n})$ tăng, hội tụ về $X$ với $\mu(E_{n}) = 0$ nhưng $\mu(X) = \infty$.

> [!exr] Prob 1.32
> Let ${} X$ be a infinite set and let $\mathfrak{A}$ be the algebra of subset of $X$ consisting of the finite and cofinite subset of $X$. Define a set function on $\mu$ on $\mathfrak{A}$ by setting every $A \in \mathfrak{A}$:
> $$
> \mu(A) = 
> \begin{cases}
> 0, & \text{if } A \text{ is finite} \\
> 1, & \text{if } A \text{ is cofinite}
> \end{cases}
> $$
> Note that since $X$ is an infinite set, no subset of $A$ of $X$ can be both finite and cofinite although it can be neither.
> a) Show that $\mu$ is additive on the algebra $\mathfrak{A}$.
> b) Show that when $X$ is countably infinite, $\mu$ is ot countably additive on the algebra $\mathfrak{A}$.
> c) Show that when $X$ is countably infinite, then $X$ is the limit of an increasing sequence ${} (A_{n}: n \in \mathbb{N})$ in $\mathfrak{A}$ with $\mu(A_{n}) = 0$ for every $n \in \mathbb{N}$, but $\mu(X) = 1$
> d) Show that when $X$ is uncountable, then $\mu$ is countably additive on the algebra $\mathfrak{A}$.

> [!prf]
> a)
> - Ta nhận xét: $A, B$ ít nhất phải có một tập là finite, và không thể có tập infinite, để ta luôn có $A \cap B = \emptyset$; ta xét hai trường hợp:
> 	  - Cả $A$ và $B$ cùng finite: Khi đó $\mu(A \cup B) = 0$ và $\mu(A) + \mu(B) = 0 + 0 = 0$, vậy $\mu(A \cup B) = \mu(A) + \mu(B)$.
> 	  - Một tập là finite $(A)$, tập còn lại là cofinite ${} (B)$: Ta có $(A \cup B) =  ((A ^{c})\cap (B ^{c})^{c})$; Vì $B ^{c}$ là finite nên $(A^{c} \cap B ^{c}) \subset B ^{c}$, vậy $(A \cup B)^{c}$ là finite hay $A \cup B$ là cofinite, khi đó $\mu(A \cup B) = 1$. Ta cũng có $\mu(A) + \mu(B) = 0 + 1 = 1$ nên $\mu (A \cup B) = \mu(A) + \mu(B)$.
> - Trường hợp $A, B$ cùng là cofinite không thể xảy ra, vì nếu $B$ là tập cofinite, suy ra $A ^{c}$ là finite, mà ta có $A \cap B = \emptyset$ nên $B \subseteq A^{c}$ nên $B$ bắt buộc là tập hữu hạn.
> 
>  b)
> - Vì $X$ là tập vô hạn đếm được, ta có thể liệt kê các phần tử trong tập $X$: $X = \{ x_{1},x_{2},x_{3},\dots \}$. Ta chọn dãy $E_{n} = \{ x_{n} \}$ là dãy các tập chỉ có một phần tử, khi đó ${} E_{n}$ rời rạc và đều finite nên $\mu(E_{n}) = 0$ $\forall n$, dẫn tới $\sum_{n \in \mathbb{N}}^{\infty} \mu(E_{n}) = 0$.
> - Ta nhận thấy $\bigcup_{n = 1} ^{\infty}E_{n} = X$, dẫn tới $X ^{c} = \emptyset$ là một tập finite, nên $X$ là tập cofinite, vậy ta có $\mu\left( \bigcup_{n \in \mathbb{N}} E_{n} \right) = \mu(X) = 1 \neq 0 = \sum_{n \in \mathbb{N}} \mu(E_{n})$ nên ta kết luận $\mu$ không có tính $\sigma$ - đại số.
> 
> c) 
> - Ta định nghĩa $A_{n} = \{ x_{1},x_{2},\dots, x_{n} \}$ là dãy các tập hữu hạn; Vì ${} A_{n}$ hữu hạn nên $\mu(A_{n}) = 0$ $\forall n$. Suy ra $\lim_{ n \to \infty } \mu(A_{n}) = 0$. 
> - Vì $X$ là tập vô hạn đêm được, ta có $X = \{ x_{1}, x_{2}, x_{3}, \dots \} = \bigcup_{n = 1} ^{\infty} A_{n}$. Vì $(A_{n})$ là dãy tăng, ta có $\bigcup_{n = 1} ^{\infty}A_{n} = \lim_{ n \to \infty } A_{n}$. Lập luận $X ^{c} = \emptyset$ là tập hữu hạn, ta có $\mu(X) = 1$. 
> Vậy ta chỉ ra được dãy $(A_{n})$ tăng, hội tụ về $X$ với $\mu(E_{n}) = 0$ nhưng $\mu(X) = 1$.
> 
> d)
> 
> Để chứng minh tính $\sigma$ - cộng tính, vì ta đã chứng minh $\mu$ hữu hạn cộng tính, nên ta chỉ cần chỉ ra tính $\sigma$ - dưới cộng tính. Đăt $A = \bigcup_{n = 1}^{\infty} A_{n}$, ta cần chứng minh ${} \mu(A) \le \sum_{n=1}^{\infty}\mu(A_{n})$, ta có các trường hợp: 
> - $A$ là tập finite: khi đó $\mu(A) = 0$, còn vế phải là chuỗi không âm, nên ta có $\mu(A) \le \sum_{n=1}^{\infty} \mu(A_{n})$.
> - $A$ là tập cofinite: theo định nghĩa, ta có $\mu(A) = 1$. Ta cần kiểm tra vế phải $\sum_{n=1}^{\infty} \mu(A_{n}) \ge 1$, tức là dãy các tập ${} (A_{n})$ phải tồn tại ít nhất tập ${} A_{k}$ là cofinite.
> 	- Ta phản chứng: giả sử mọi tâp $A_{n}$ đều là finite, khi đó $A = \bigcup_{n = 1} ^{\infty} A_{n}$ là một tập đếm được (hợp đếm được tập hữu hạn thì đếm được). Mà ta có $X = A \cup A^{c}$, giả thiết cho $A^{c}$ là tập đếm được, nên $A$ phải là tập không đếm được (do $X$ là tập không đếm được).
> 	  $A$ không thể vừa đếm được và không đếm được, dẫn đến vô lý, vậy ta kết luận: tồn tại ít nhất một tập ${} A_{k}$ sao cho ${} A_{k}$ là không finite, vì $A_{k} \in \mathfrak{A}$ nên ${} A_{k}$ chỉ có thể finite hoặc cofinite, vậy tồn tại ${} A_{k}$ là cofinite, dẫn đến $\sum_{n=1}^{\infty} \mu(A_{n}) \ge 1$.
> 	- Vậy $\mu(A) \le \sum_{n=1}^{\infty} \mu(A_{n})$
> -  Ta có $\mu$ thỏa tính $\sigma$ - dưới cộng tính, kết hợp với tính hữu hạn cộng tính, ta có $\mu$ thỏa $\sigma$ - cộng tính.

> [!exr] Prob 2.3
> For an arbitrary set $X$, let  us define a set function $\mu ^{*}$ on ${} \mathfrak{B}(X)$ by:
> $$
> \mu ^{*} (E) =
> \begin{cases}
> \text{number of element of E if E is a finite set.} \\
> \infty \text{ if E is an infinite set.}
> \end{cases}
> $$
> a) Show that $\mu ^{*}$ is an outer measure on $X$.
> b) Show that $\mu ^{*}$ is additive on $\mathfrak{B}(X)$, that is $\mu ^{*}(E_{1} \cup E_{2}) = \mu ^{*} (E_{1}) + \mu ^{*} (E_{2})$ for any $E_{1}, E_{2} \in \mathfrak{B}(X)$ such that $E_{1} \cap E_{2} = \emptyset$.
> c) Show that $\mu ^{*}$ is a measure on the $\sigma$ - algebra $\mathfrak{B}(X)$. (This measure is called the counting measure.)
> d) Show that $\mathfrak{M}(\mu ^{*})= \mathfrak{B}(X)$, that is every $E \in \mathfrak{B}(X)$ is $\mu ^{*}$ - measureable.

> [!prf] 
> a)
> Ta kiểm tra các tính chất thỏa định nghĩa độ đo ngoài: tính không âm, độ đo không, tính đơn điệu và tính $\sigma$ - dưới cộng tính. 
> - Ta nhận thấy số phần tử tập hợp luôn là dương nên luôn có ${} \mu ^{*}(E) \in [0, \infty] {}$ $\forall E \in \mathfrak{B(X)}$.
> - Số phần tử của tập rỗng là không, nên $\mu ^{*}(E) = 0$.
> - Lấy $E_{1}, E_{2} \in \mathfrak{B}(X)$, $E_{1} \subset E_{2}$. Vì $\mu ^{*}$ thể hiện số phần tử của tập đại diện:
> 	- Nếu ${} E_{2}$ là vô hạn, khi đó $\mu(E_{1}) \le \infty$ luôn đúng
> 	- Nếu ${} E_{2}$ là hữu hạn, khi đó $E_{1} \subset E_{2}$ dẫn tới $\lvert E_{1} \rvert \le \lvert E_{2} \rvert$, hay $\mu ^{*}(E_{1}) \le \mu ^{*} (E_{2})$.
> - Lấy $(E_{n}: n \in \mathbb{N}) \subset \mathfrak{B}(X)$, ta đặt $\bigcup_{n = 1} ^{\infty} E_{n} = E$, ta chứng minh $\mu ^{*} (E) \le \sum_{n=1}^{\infty} \mu ^{*} (E_{n})$:
> 	- Nếu tồn tại $n \in \mathbb{N}$, sao cho $\lvert E_{n} \rvert = \infty$, khi đó ta luôn có $\mu ^{*} (E) \le \sum_{n=1}^{\infty} \mu ^{*} (E_{n})$.
> 	- Nếu ${} E_{n}$ là tập hữu với mọi $n \in \mathbb{N}$, khi đó $\lvert E \rvert = \left\lvert  \bigcup_{n = 1} ^{N} E_{n}  \right\rvert \le \sum_{n=1}^{N} \lvert E_{n} \rvert = \sum_{n=1}^{N} \mu ^{*} (E_{n})$. Vì điều này đúng với mọi $n \in \mathbb{N}$, lấy giới hạn $N \to \infty$, ta được điều cần chứng minh
> Vậy $\mu ^{*} (E) \le \sum_{n=1}^{\infty} \mu ^{*} (E_{n})$
> 
> b) 
> Lấy $E_{1}, E_{2} \in \mathfrak{B}(X)$, ta có:
> 	- Nếu $E_{1}, E_{2}$ đều là hữu hạn: khi đó $\lvert E_{1} \cup E_{2} \rvert = \lvert E_{1} \rvert + \lvert E_{2} \rvert$, vậy $\mu ^{*} (E_{1} \cup E_{2}) = \mu ^{*}(E_{1}) + \mu ^{*} (E_{2})$
> 	- Nếu ít nhất một tập, giả sử $E_{1}$ là vô hạn: khi đó ta luôn có $\mu ^{*}(E_{1}) = \infty$, và $\mu ^{*} (E_{1} \cup E_{2}) = \infty$ nên $\mu ^{*} (E_{1} \cup E_{2}) \le \mu ^{*}(E_{1}) + \mu ^{*}(E_{2})$.
> Vậy $\mu ^{*}$ có tính hữu hạn cộng tính trên $\mathfrak{B}(X)$.
> 
> c)
> Ta đã chứng minh được $\mu ^{*}$ có tính $\sigma$ - dưới cộng tính ở a) và tính hữu hạn cộng tính ở câu b), vì vậy ta kết luận được $\mu ^{*}$ có tính $\sigma$ - cộng tính trên $\mathfrak{B}(X)$.
> 
> d)
> Theo tiêu chuẩn *Caratheodory*: một tập là đo được nếu với mọi tập thử $A \subset X$, ta có $\mu ^{*}(A) = \mu ^{*}(A \cap E) + \mu ^{*}(A \cap E ^{c})$. Ta có $A = (A \cap E) \cup (A \cap E ^{c})$, áp dụng kết quả câu b): $\mu ^{*}(A) = \mu ^{*} ((A \cap E) \cup (A \cap E ^{c})) = \mu ^{*} (A \cap  E) + \mu ^{*} (A \cap E^{c})$ nên ta có điều cần chứng minh.

---
[📄 View PDF](./BTVN tuần 3.pdf)

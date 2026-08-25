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
  loaiBai:      "Tổng hợp Bài tập về nhà",
  tenDeTai:     "Bài tập Lý thuyết Độ đo và Tích phân",
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
    titleLine: "Tổng hợp Bài tập về nhà môn Lý thuyết Độ đo và Tích phân",
    authors:   ["Huy - MSSV: 24110022"],
  },

  // 6. Cấu hình Mục lục
  tocHeading: "Mục Lục",
  toc: [
	{ level: 1, num: "1", title: "Tuần 2", page: 6 },
    { level: 1, num: "1", title: "Tuần 3", page: 8 },
    { level: 1, num: "2", title: "Tuần 4", page: 13 },
    { level: 1, num: "3", title: "Tuần 5", page: 16 },
    { level: 1, num: "4", title: "Tuần 9", page: 17 },
    { level: 1, num: "5", title: "Tuần 10", page: 20 },
    { level: 1, num: "6", title: "Tuần 11", page: 23 },
    { level: 1, num: "7", title: "Tuần 12", page: 32 },
    { level: 1, num: "8", title: "Tuần 13", page: 47 },
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

# Tuần 2

> [!thm] (Định lý 1.14)
> Let f be a mapping of a set X to Y. Then for an arbitrary collection of $\mathfrak{C}$ of subset of Y, we have $\sigma(f^{-1}(\mathfrak{C}))=f^{-1}(\sigma(\mathfrak{C}))$

> [!prf] 
> $(\subset )$:
> - Theo định nghĩa, ta có $\mathfrak{C} \subset \sigma(\mathfrak{C})$, nên $f^{-1}(\mathfrak{C})\subset f^{-1}(\sigma(\mathfrak{C}))$, nên $\sigma(f^{-1}(\mathfrak{C})) \subset \sigma(f^{-1}(\sigma(\mathfrak{C})))$. 
> - Vì $\sigma(\mathfrak{C})$ là $\sigma$ - đại số trên $Y$, nên $f^{-1}(\sigma(\mathfrak{C}))$ cũng là $\sigma$ - đại số trên $X$
> - Ta có $\sigma(f^{-1}(\sigma(\mathfrak{C}))) =f^{-1}(\sigma(\mathfrak{C}))$ , vậy $\sigma(f^{-1}(\mathfrak{C})) \subset f^{-1}(\sigma(\mathfrak{C}))$
> 
> $(\supset)$:
> - Đăt $\mathfrak{B}:= \{ B \subseteq Y| f^{-1}(B) \in \sigma(f^{-1}(\mathfrak{C})) \}$, ta chứng minh $\mathfrak{B}$ là một $\sigma$ - đại số trên $Y$:
>     - Ta có $f^{-1}(Y) = X \in \sigma(f^{-1}(\mathfrak{C}))$ nên $Y \in \mathfrak{B}$
>     - Lấy $B \in \mathfrak{B}$, ta có $f^{-1}(Y \setminus B) =f^{-1}(Y) \setminus f^{-1}(B)= X \setminus f^{-1}(B)$, vì $f^{-1}(B) \in \mathfrak{B}$ nên $X \setminus f^{-1}(B) \in \mathfrak{B}$, vậy $Y \setminus B \in \mathfrak{B}$
>     - Lấy $\{ B_{n} \}_{n=1}^{\infty} \subset\mathfrak{B}$, ta có $f^{-1}\left( \bigcup B_{n} \right) = \bigcup f^{-1}(B_{n})$, vì $f^{-1}\left(  B_{n} \right) \in \sigma(f^{-1}(\mathfrak{C}))$ nên $\bigcup f^{-1}(B_{n})\in \sigma(f^{-1}(\mathfrak{C}))$, vậy $f^{-1}\left( \bigcup B_{n} \right) \in \sigma(f^{-1}(\mathfrak{C}))$ nên $\bigcup B_{n} \in \mathfrak{B}$
>        Vậy $\mathfrak{B}$ là $\sigma$ - đại số trên Y
>     
> - Ta chứng minh $\sigma(\mathfrak{C}) \subseteq \mathfrak{B}$:
>     - Lấy $E_{n}$ bất kì trong $(\mathfrak{C})$, ta có $f^{-1}(E_{n}) \in f^{-1}(\mathfrak{C})$, mà $f^{-1}(\mathfrak{C}) \subseteq \sigma(f^{-1}(\mathfrak{C}))$, nên $f^{-1}(E_{n}) \in \sigma(f^{-1}(\mathfrak{C}))$, và $E_{n} \in Y$ nên $E_{n} \in \mathfrak{B}$. Vậy $\sigma(\mathfrak{C})\subseteq \mathfrak{B}$
>- vì $\sigma(\mathfrak{C}) \subseteq \mathfrak{B}$ nên tùy ý $C \in \sigma(\mathfrak{C})$, ta có $C \in \mathfrak{B}$, nghĩa là $f^{-1}(C) \in \sigma(f^{-1}(\mathfrak{C}))$
> Vậy $f^{-1}(\sigma(\mathfrak{C}))\subset \sigma(f^{-1}(\mathfrak{C}))$

>[!def] 
> $\sigma_{A}(\mathfrak{R})$ denotes the smallest $\sigma$ - algebra on the space A containing $\mathfrak{R}$

> [!lem] Trace
> Let $\mathfrak{C}$ be an arbitrary collection of subset of a set $X$ and let $A \subset X$. Then $\sigma(\mathfrak{C})\cap A$ is a $\sigma$ - algebra on $A$

> [!prf] 
> - Đặt $\sigma(\mathfrak{C}) \cap A:=   \mathfrak{M}_{A}=\{{E \cap A| E \in \sigma(\mathfrak{C})} \}$, ta chứng minh $\mathfrak{M}_{A}$ là một $\sigma$ - đại số trên A
>     - Ta có $\sigma(\mathfrak{C})$ là $\sigma$ - đại số trên $X$, nên $X \in \sigma(\mathfrak{C})$, và vì $X \cap A = A$ nên với $E = X$, ta có $A \in \mathfrak{M}$
>     - Lấy $B \in \mathfrak{M}$, ta có $A \setminus B = A \setminus(E \cap A)$, với E là họ bất kì thuộc $\sigma(\mathfrak{C})$, vì $A \setminus(E \cap A) = A \cap E^c$, mà vì $E^c \in \sigma(\mathfrak{C})$ nên $A \setminus B =B^c \in \mathfrak{M}_{A}$
>     - Lấy $\{ B_{n} \}_{n=1}^{\infty}$ là họ các tập trong $\mathfrak{M}_{A}$, ta có mỗi $B_{n} = E_{n} \cap A$, với $E_{n} \in \sigma(\mathfrak{C})$, ta có $\bigcup_{n=1}^{\infty}B_{n} = \bigcup_{n=1}^{\infty}(E_{n}\cap A) = (\bigcup_{n=1}^{\infty} E_{n}) \cap A$, mà vì $E_{n} \in \sigma(\mathfrak{C})$ nên $\bigcup_{n=1}^{\infty} E_{n} \in \sigma(\mathfrak{C})$, vậy $\bigcup_{n=1}^{\infty}B_{n} \in \mathfrak{M}_{A}$
>     Vậy $\sigma(\mathfrak{C})\cap A$ là $\sigma$ - đại số trên A

> [!thm] (Định lý 1.15) 
> Let $\mathfrak{C}$ be an arbitrary collection of subset of a set $X$ and let $A \subset X$. Then $\sigma_{A}(\mathfrak{C} \cap A)=\sigma(\mathfrak{C})\cap A$

> [!prf] 
> - Xét $i: A \to X$ là ánh xạ:  $i(x) = x$ 
> - Với mỗi $E \subseteq X$, ta có $i^{-1}(E) = \{ x \in A| i(x) \in E\} = E \cap A$
> - Suy ra:
> $$
> i^{-1}(\mathfrak{C})=\mathfrak{C} \cap A
> $$
>    và:
> $$
> i^{-1}(\sigma(\mathfrak{C})) = \sigma(\mathfrak{C} )\cap A
> $$
> 
> - Áp dụng **Định lý 1.14:**
> $$
> \sigma_{A}(\mathfrak{C}\cap A) = \sigma_{A}(i^{-1}(\mathfrak{C}))=i^{-1}(\sigma_{A}(\mathfrak{C})) =\sigma(C) \cap A
> $$

> [!Prp] (Mệnh đề 1.23) 
> Let $\gamma$ be a nonnegative extended real-valued set function on a algebra $\mathfrak{A}$ of subset of a set $X$. If $\gamma$ is additive and countably subadditive on $\mathfrak{A}$ then $\gamma$ is countably additive on $\mathfrak{A}$

> [!prf] 
> - Từ tính hữu hạn cộng tính, lấy $\{ E_{n} \}_{n \in \mathbb{N}}$ là họ các tập rời nhau trên $\mathfrak{A}$, ta chứng minh $\gamma\left( \bigcup_{n=1}^{\infty}  E_{n}\right) \ge \sum_{n=1}^{\infty} \gamma(E_{n})$:
>     - vì $\gamma$ cộng tính hữu hạn, suy ra $\gamma$ đơn điệu: $\gamma\left( \bigcup_{n=1}^{\infty}E_{n} \right) \ge \gamma\left( \bigcup_{n=1}^{N}E_{n} \right) \ge \sum_{n=1}^{N} \gamma(E_{n})$
>     - vì biểu thức đúng với mọi $N \in \mathbb{N}$, ta cho $N \to \infty$, ta có $\gamma\left( \bigcup_{n=1}^{\infty}E_{n} \right) \ge \sum_{n=1}^{\infty} \gamma(E_{n})$
> - Từ tính $\sigma$ - dưới cộng tính, ta có $\gamma\left(  \bigcup_{n=1}^{\infty} E_{n} \right) \le \sum_{n=1}^{\infty}\gamma(E_{n})$
> Vậy $\gamma\left( \bigcup _{n=1}^{\infty} E_{n}\right)= \sum_{n=1}^{\infty} \gamma(E_{n})$ hay $\gamma$ là $\sigma$ - cộng tính

> [!def] Continuous from Below
>  If $\{ A_{n} \}_{n=1}^{\infty}$ is an increasing sequence of sets in $\mathfrak{A}$, $(A_{1}\subseteq A_{2}\subseteq\dots)$ and $A = \bigcup_{n=1}^{\infty}A_{n} \in \mathfrak{A}$, then:
> $$
> \mu\left( \bigcup_{n=1}^{\infty} A_{n} \right) = \lim_{ n \to \infty } \mu(A_{n})
> $$

> [!prp] 
> Given $\mu: \mathfrak{A}\to[0,+\infty]$, $\mu$ is finite additive. 
> Prove: $\mu$ is $\sigma$ - additive $\iff$ $\mu$ is continuous from below

> [!prf]
> $(\implies)$
> - Giả sử $\{ A_{n} \}_{n=1}^{\infty} \uparrow A$ trên $\mathfrak{A}$ , ta có  $\bigcup_{n=1}^{\infty}A_{n} = \lim_{ n \to \infty }A_{n}=A$,
> - Đặt $B_{n} = A_{n} \setminus A_{n-1}$ với $n \ge 2$, khi đó $\{ B_{n} \}_{n=1}^{\infty}$ là họ rời rạc trên $\mathfrak{A}$, ta có $\mu(A) = \bigcup_{n=1}^{\infty}\mu(B_{n})= \lim_{ N \to \infty }\sum_{n=1}^{N}\mu(B_{n})$
> - vì $\mu$ hữu hạn cộng tính, ta có $\lim_{ N \to \infty }\sum_{n=1}^{N}\mu(B_{n})= \lim_{ N \to \infty }\mu\left( \bigcup_{n=1}^{N}B_{n} \right)$
> - Lại có $\bigcup_{n=1}^{N}B_{n}= A_{N}$, vậy $\mu(A)=\mu\left( \bigcup_{n=1}^{\infty}A_{n} \right)=\lim_{ N \to \infty }\mu(A_{N})$ hay $\mu$ liên tục dưới
>
> $(\impliedby)$
> - Lấy $\{ B_{n} \}_{n=1}^{\infty}$ là họ rời rạc trên $\mathfrak{A}$, đặt $A_{N}=\bigcup_{n=1}^{N}B_{n}$, do $\mu \ge 0$ nên $\lim_{ N \to \infty }A_{N}=\bigcup_{n=1}^{\infty} B_{n}$ và do $\mu$ liên tục dưới: $\lim_{ N \to \infty }\mu(A_{N})=\mu\left( \bigcup_{n=1}^{\infty}B_{n} \right)$
> - Vì $\mu$ cộng tính hữu hạn: 
> $$
> \begin{align}
> \lim_{N \to \infty}\mu(A_{N}) &= \lim_{N \to \infty}\mu\left( \bigcup_{n=1}^{N}B_{n} \right) \\ &= \lim_{N \to \infty}\sum_{n=1}^{N}\mu(B_{n}) \\ &= \sum_{n=1}^{\infty}\mu(B_{n})
> \end{align}
> $$
> Vậy $\mu\left( \bigcup_{n=1}^{\infty}B_{n} \right)=\sum_{n=1}^{\infty}\mu(B_{n})$ nên $\mu$ là $\sigma$ - cộng tính

# Tuần 3

> [!exr] (Prob 1.23)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian đo. Với mỗi $k \in \mathbb{N}$, giả sử $\mu_k$ là một độ đo trên $\sigma$-đại số ${} \mathfrak{A} {}$ và $\alpha_k \ge 0$.  
> Định nghĩa một hàm tập $\mu$ trên $\mathfrak{A}$ bằng cách đặt  
> $$\mu = \sum_{k \in \mathbb{N}} \alpha_k \mu_k.$$  
> Khi đó $\mu$ là một độ đo trên $\mathfrak{A}$.

> [!prf]
> Ta cần chứng minh các tính chất thỏa định nghĩa độ đo: tính không âm, độ đo không và tính $\sigma$ - cộng tính:
> - Vì $\mu_{k}$ là độ đo trên $\mathfrak{A}$, ta có $\mu_{k} \ge 0$, vậy ${} \mu = \sum_{k \in \mathbb{N}}\alpha_{k} \mu_{k} \ge 0$.
> - Ta có $\mu_{k} = 0$ với mọi tập rỗng trên $X$, vậy $\mu(\emptyset) = \sum_{k \in \mathbb{N}} \alpha_{k} \mu_{k} = \sum_{k \in \mathbb{N}}\alpha_{k} \cdot 0 = 0$.
> - Lấy $E_{n}: n \in \mathbb{N}$ là dãy các tập rời nhau, ta có:
> $$
> \begin{align}
> \mu\left( \bigcup_{n = 1} ^{\infty} E_{n} \right) &=  \sum_{n=1}^{\infty} \alpha_{k} \cdot \mu_{k} \left( \bigcup_{n = 1} ^{\infty} E_{n} \right) \\ &=  \sum_{k=1}^{\infty} \alpha_{k} \left( \sum_{n=1}^{\infty}\mu_{k}(E_{n}) \right) \\ &=  \sum_{k=1}^{\infty} \sum_{n=1}^{\infty} \alpha_{k} \mu_{k} (E_{k}) \\ &= \sum_{n=1}^{\infty} (\sum_{k=1}^{\infty} \alpha_{k} \mu_{k} (E_{n})) \\ &= \sum_{n=1}^{\infty} \mu(E_{n}).
> \end{align}
> $$
> Vậy $\mu$ thỏa định nghĩa độ đo trên $\mathfrak{A}$.

> [!exr] (Prob 1.24)
> Let $X$ = $(0,\infty)$ and let $\mathfrak{J} = \{ J_{k}: k \in \mathbb{N} \}$ where $J_{k} = (k-1,k]$ for all $k \in \mathbb{N}$. Let $\mathfrak{A}$ be the collection of all arbitrary unions of member of $\mathfrak{J}$. For every $A \in \mathfrak{A}$ let us define $\mu(A)$ to be the number of element of $\mathfrak{F}$ that constitute A.
> a) Show that $\mathfrak{A}$ is a $\sigma$ - algebra of subset of $X$.
> b) Show that $\mu$ is a measure on the $\sigma$ - algebra $\mathfrak{A}$.
> c) Let $(A_{n}:n \in \mathbb{N})$ $\subset \mathfrak{A}$ where $A_{n} = (n, \infty)$ for $n \in \mathbb{N}$. Show that for the decresing sequence $(A_{n}: n \in N)$ we have $\lim_{ n \to  \infty }\mu(A_{n} )\neq \mu(\lim_{ n \to \infty }A_{n})$

> [!prf] 
> Ta nhận thấy $\mathfrak{J}$ là phân hoạch các tập rời nhau của không gian $X = (0, \infty)$. Nghĩa là $J_{k}$ rời nhau đôi một và hội của chúng bằng không gian $X$. Vì $\mathfrak{J}$ là họ bất kì của hội $J_{k}$ trong $\mathfrak{A}$, ta có với mọi $A \in \mathfrak{A}$, ta có $A = \bigcup_{k \in I} J_{k}$, với $I \subseteq \mathbb{N}$ là tập hợp chỉ số bất kì, khi đó $\mu(A) = \lvert I \rvert$ là lực lượng của chỉ số $I$.
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
  
> [!exr] (Prob 1.29)
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

> [!exr] (Prob 1.32)
> Let $X$ be a infinite set and let $\mathfrak{A}$ be the algebra of subset of $X$ consisting of the finite and cofinite subset of $X$. Define a set function on $\mu$ on $\mathfrak{A}$ by setting every $A \in \mathfrak{A}$:
> $$
> \mu(A) = 
> \begin{cases}
> 0, & \text{if } A \text{ is finite} \\
> 1, & \text{if } A \text{ is cofinite}
> \end{cases}
> $$
> Note that since $X$ is an infinite set, no subset of $A$ of $X$ can be both finite and cofinite although it can be neither.
> 
> a) Show that $\mu$ is additive on the algebra $\mathfrak{A}$.
> 
> b) Show that when $X$ is countably infinite, $\mu$ is ot countably additive on the algebra $\mathfrak{A}$.
> 
> c) Show that when $X$ is countably infinite, then $X$ is the limit of an increasing sequence ${} (A_{n}: n \in \mathbb{N})$ in $\mathfrak{A}$ with $\mu(A_{n}) = 0$ for every $n \in \mathbb{N}$, but $\mu(X) = 1$
> 
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
> Để chứng minh tính $\sigma$ - cộng tính, vì ta đã chứng minh $\mu$ hữu hạn cộng tính, nên ta chỉ cần chỉ ra tính $\sigma$ - dưới cộng tính. Đăt $A = \bigcup_{n = 1}^{\infty} A_{n}$, ta cần chứng minh ${} \mu(A) \le \sum_{n=1}^{\infty}\mu(A_{n})$, ta có các trường hợp: 
> - $A$ là tập finite: khi đó $\mu(A) = 0$, còn vế phải là chuỗi không âm, nên ta có $\mu(A) \le \sum_{n=1}^{\infty} \mu(A_{n})$.
> - $A$ là tập cofinite: theo định nghĩa, ta có $\mu(A) = 1$. Ta cần kiểm tra vế phải $\sum_{n=1}^{\infty} \mu(A_{n}) \ge 1$, tức là dãy các tập ${} (A_{n})$ phải tồn tại ít nhất tập ${} A_{k}$ là cofinite.
> 	- Ta phản chứng: giả sử mọi tâp $A_{n}$ đều là finite, khi đó $A = \bigcup_{n = 1} ^{\infty} A_{n}$ là một tập đếm được (hợp đếm được tập hữu hạn thì đếm được). Mà ta có $X = A \cup A^{c}$, giả thiết cho $A^{c}$ là tập đếm được, nên $A$ phải là tập không đếm được (do $X$ là tập không đếm được).
> 	  $A$ không thể vừa đếm được và không đếm được, dẫn đến vô lý, vậy ta kết luận: tồn tại ít nhất một tập ${} A_{k}$ sao cho ${} A_{k}$ là không finite, vì $A_{k} \in \mathfrak{A}$ nên ${} A_{k}$ chỉ có thể finite hoặc cofinite, vậy tồn tại ${} A_{k}$ là cofinite, dẫn đến $\sum_{n=1}^{\infty} \mu(A_{n}) \ge 1$.
> 	- Vậy $\mu(A) \le \sum_{n=1}^{\infty} \mu(A_{n})$
> -  Ta có $\mu$ thỏa tính $\sigma$ - dưới cộng tính, kết hợp với tính hữu hạn cộng tính, ta có $\mu$ thỏa $\sigma$ - cộng tính.

> [!exr] (Prob 2.3)
> For an arbitrary set $X$, let  us define a set function $\mu ^{*}$ on ${} \mathfrak{B}(X)$ by:
> $$
> \mu ^{*} (E) =
> \begin{cases}
> \text{number of element of E if E is a finite set.} \\
> \infty \text{ if E is an infinite set.}
> \end{cases}
> $$
> a) Show that $\mu ^{*}$ is an outer measure on $X$.
> 
> b) Show that $\mu ^{*}$ is additive on $\mathfrak{B}(X)$, that is $\mu ^{*}(E_{1} \cup E_{2}) = \mu ^{*} (E_{1}) + \mu ^{*} (E_{2})$ for any $E_{1}, E_{2} \in \mathfrak{B}(X)$ such that $E_{1} \cap E_{2} = \emptyset$.
> 
> c) Show that $\mu ^{*}$ is a measure on the $\sigma$ - algebra $\mathfrak{B}(X)$. (This measure is called the counting measure)
> 
> d) Show that $\mathfrak{M}(\mu ^{*})= \mathfrak{B}(X)$, that is every $E \in \mathfrak{B}(X)$ is $\mu ^{*}$ - measureable.

> [!prf] 
> a)
> Ta kiểm tra các tính chất thỏa định nghĩa độ đo ngoài: tính không âm, độ đo không, tính đơn điệu và tính $\sigma$ - dưới cộng tính. 
> - Ta nhận thấy số phần tử tập hợp luôn là dương nên luôn có ${} \mu ^{*}(E) \in [0, \infty]$ $\forall E \in \mathfrak{B(X)}$.
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

# Tuần 4

> [!def] (Các khoảng trên $\mathbb{R}$)
> Cho $\mathfrak{J_{o}}$ là họ bao gồm tập rỗng $\emptyset$ và tất cả các khoảng mở trong $\mathbb{R}$ có dạng $(a,b)$. Tương tự, ta định nghĩa $\mathfrak{J_{co}}, \mathfrak{J_{oc}}, \mathfrak{J_{c}}$ lần lượt là là khoảng nửa mở - nửa đóng khoảng đóng. Quy ước $(a, \infty)$ và $(\infty, a)$ cũng nằm trong họ tương ứng. Gọi $\mathfrak{J}$ là hợp của tất cả các họ này, tức là mọi khoảng trên $\mathbb{R}$.

> [!def] (Hàm tập đo độ dài khoảng)
> Với mọi khoảng $I \in \mathfrak{J}$ có hai đầu mút $a, b \in \mathbb{R}$, ta định nghĩa chiều dài $I$ là: 
> $$
> \ell(I) = b - a
> $$
> Đối với một khoảng vô hạn, ta định nghĩa $\ell(I) =  \infty$. Đối với tập rỗng, $\ell(\emptyset) = 0$. Hàm chiều dài có tính chất cộng tính đếm được trên các họ khoảng rời nhau. Cụ thể: nếu $\{ I_{n}: n \in \mathbb{N} \}$ là một họ đếm được các khoảng rời rạc trong $\mathfrak{J}$ thì : 
> $$
> \ell \left( \bigcup_{n \in \mathbb{N}}I_{n} \right) = \sum_{n \in \mathbb{N}} \ell(I_{n}) 
> $$

> [!def] (Độ đo ngoài Lebesgue)
> Đô đo ngoài Lebesgue trên $\mathbb{R}$, kí hiệu là ${} \mu_{L} ^{*}$ là một hàm tập xác định trên toàn bộ không gian con $\mathfrak{B}(\mathbb{R})$, được định nghĩa bởi:
> $$
> \mu _{L} ^{*}(E) = \inf\left\{  \sum_{n \in \mathbb{N}} \ell(I_{n}): (I_{n}: n \in \mathbb{N}) \subset \mathfrak{J_{o}}, \bigcup_{n \in \mathbb{N}} I_{n} \supset E   \right\}
> $$
> , với mọi $E \in \mathfrak{B}(\mathbb{R})$.
> 
> Vì $\mu_{L} ^{*}$ là độ đo ngoài, nó thỏa các tính chất: $\mu_{L}^{*} (\emptyset) = 0$, đơn điệu $(A \subset B \implies \mu_{L}^{*}(A) \le \mu_{L}^{*} (B))$, tính $\sigma$ - dưới cộng tính.
> 
> Ý nghĩa trực quan: ta cố gắng phủ một tập  $E$ bất kì bằng vô hạn đếm được các khoảng mở, tổng chiều dài các phủ này sẽ là cận trên cho kích thước của $E$. Độ đo ngoài $\mu_{L}^{*}(E)$ chính là giới hạn dưới đúng (infimum) của tất cả các tổng chiều dài bao phủ đó.

> [!def] (Tính đo được theo tiêu chuẩn *Caratheodory*).
> Một tập $E \in \mathfrak{B}(\mathbb{R})$ được gọi là $\mu_{L} ^{*}$ đo được (hay Lebesgue đo được) nếu với mọi tập thử $A \in \mathfrak{B}(\mathbb{R})$, ta có đẳng thức:
> $$
> \mu_{L}^{*}(A) = \mu_{L} ^{*}(A \cap E) + \mu _{L} ^{*}(A \cap E^{c})
> $$
> Tập hợp hợp tất cả các tập Lebesgue đo được tạo thành một $\sigma$ - đại số, ký hiệu $\mathfrak{M}_{L}$. Dộ đo ngoài ${} \mu_{L}^{*}$ khi thu hẹp trên $\mathfrak{M}_{L}$ sẽ trở thành độ đo $\sigma$ - cộng tính, gọi là độ đo Lebesgue, ký hiệu là $\mu_{L}$.

> [!lem] ${} \mu_{L}^{*} = \ell$ trên $\mathfrak{J}$.
> Tức là ${} \mu _{L} ^{*} (I) = \ell(I)$ với mọi khoảng $I$ trong $\mathbb{R}$.

> [!thm] (Tiêu chuẩn Caratheodory trên họ tập cơ sở)
> Sự đo được $\mu_{L}^{*}$ - đo được của một tập $E \in \mathfrak{B}(\mathbb{R})$, biểu diễn bởi đẳng thức: 
> $$
> \mu_{L}^{*}(A) = \mu_{L} ^{*}(A \cap E) + \mu_{L}^{*}(A \cap E ^{c}) \text{ với mọi }A \in \mathfrak{B}(\mathbb{R})
> $$
> tương đương điều kiện hạn chế:
> $$
> \mu_{L}^{*}(I) = \mu ^{*}(I \cap E) + \mu_{L}^{*}(I \cap E ^{c}) \text{ với mọi khoảng mở }I \in \mathfrak{J_{o}}
> $$

> [!thm] $\mathfrak{M}(\mu_{L}^{*})$ là $\sigma$ - đại số trên $\mathbb{R}$

> [!def] (Tập Borel trên $\mathbb{R}$)
> Họ các tập Borel trên $\mathbb{R}$, ký hiệu là $\mathcal{B}(\mathbb{R})$, được định nghĩa là $\sigma$ - đại số nhỏ nhất chứa các tập mở trên $\mathbb{R}$.

> [!thm] Tập Borel đo được tương đương Lebesgue đo được
> Ký hiệu $\sigma(\mathfrak{J_{o}})$ là $\sigma$ - đại số sinh bởi các khoảng mở trên trục thực. Khi đó ta có chuỗi quan hệ: 
> $$
> \sigma(\mathfrak{J_{o}}) = \mathcal{B}(\mathbb{R}) \subset \mathfrak{M}_{L}
> $$
> Nghĩa là họ các tập Borel tương đương với $\sigma$ - đại số sinh bởi các khoảng mở, và mọi tập Borel đều là một tập Lebesgue đo được.

> [!prf]
> a) Chứng minh $\sigma(\mathfrak{J_{o}}) = \mathcal{B}(\mathbb{R})$
> 
> Theo định nghĩa, $\mathcal{B}(R)$ là $\sigma$ - đại số sinh bởi tất cả các tập mở trên $\mathbb{R}$. Gọi $\mathcal{O}$ là họ các tập mở đó, ta có $\mathcal{B}(\mathbb{R}) = \sigma(\mathcal{O})$.
> - Chiều thứ nhất $(\subset)$: Mọi khoảng mở trong $\mathfrak{J_{o}}$ hiển nhiên là một tập mở trong $\mathcal{O}$. Do đó $\mathfrak{J_{o}} \subset \mathcal{O} \subset \sigma(\mathcal{O}) = \mathcal{B}(\mathbb{R})$. Vì $\mathcal{B}(\mathbb{R})$ là một $\sigma$ - đại số nhỏ nhất chứa $\mathfrak{J_{o}}$ mà ${} \sigma(\mathfrak{J_{o}})$ lại là $\sigma$- đại số nhỏ nhất chứa $\mathfrak{J_{o}}$, ta có tính chất: 
> $$
> \sigma(\mathfrak{J_{o}}) \subset \mathcal{B}(\mathbb{R})
> $$
> - Chiều thứ hai ${} (\supset)$: Lấy một tập mở $U \subset \mathcal{O}$. Theo tính chất giải tích thực cơ bản, mọi tập mở trên $\mathbb{R}$ đều có được viết được thành hợp đếm được các khoảng mở rời nhau:
> $$
> U = \bigcup_{n= 1} ^{\infty}I_{n} \text{ với } I_{n} \in \mathfrak{J_{o}}
> $$
> Vì mỗi $I_{n} \in \mathfrak{J_{o}}$, và ${} \sigma(J_{o})$ là một $\sigma$ - đại số, ta suy ra $U$ là hợp đếm được của các tập $I_{n}$ phải nằm trong $\sigma(\mathfrak{J_{o}})$, chứng tỏ $\mathcal{O} \subset \sigma(\mathfrak{J_{o}})$. Sử dụng định nghĩa tập sinh nhỏ nhất: 
> $$
> \sigma(\mathcal{O}) \subset \sigma(\mathfrak{J_{o}})
> $$
> Vậy ta kết luận được $\sigma(\mathfrak{J_{o}}) = \mathcal{B}(\mathbb{R})$.
> 
> b) Chứng minh $\mathcal{B}(\mathbb{R}) \subset \mathfrak{M}_{L}$
> 
> Trước tiên, ta chứng minh mọi khoảng mở  $E = (a,b)$ đều là tập Lebesgue đo được. Theo mệnh đề **Theorem 1.** (Tiêu chuẩn *Caratheodory* cho họ tập cơ sở), thay vì xét một tập $A \in \mathfrak{B}(\mathbb{R})$, ta chỉ cần chứng minh điều kiện đo được thỏa mãn với khoảng mở $I \in \mathfrak{J_{o}}$:
> $$
> \mu_{L}^{*}(I) = \mu_{L}^{*}(I \cap E) + \mu_{L}^{*}(I \cap E ^{c}) 
> $$
> , với mọi $I \in \mathfrak{J_{o}}$. Ta lấy $I = (c,d)$ là khoảng mở bất kì. Khi lấy $I$ giao $E$ và $E ^{c}$, ta có:
> $$
>  I \cap E = (c,d) \cap (a,b) 
> $$
> $$
> I \cap E ^{c} = (c,d) \setminus (a,b) = [(c,d) \cap (-\infty, a]] \cup [(c,d) \cap [b, \infty)]  
> $$
> Ta thấy $I \cap E$ và $I \cap E^{c}$ là các khoảng rời nhau, và hợp bằng chính tập $I$ ban đầu, do đó theo định nghĩa, ta có $\ell(I) = \ell(I \cap E) + \ell(I \cap E ^{c})$. Ta sử dụng bổ đề Lemma 1, ta được:
> $$
> \mu_{L}^{*}(I) = \mu_{L}^{*}(I \cap E) + \mu_{L}^{*}(I \cap E ^{c})
> $$
> Vậy ta có $E = (a,b) \in \mathfrak{M}_{L}$, ta suy ra $\mathfrak{J_{o}} \subset \mathfrak{M}_{L}$. Mà ta đã biết $\mathfrak{M}_{L}$ là một $\sigma$ - đại số, theo định nghĩa thì $\sigma(\mathfrak{J_{o}})$ phải là $\sigma$ - đại số nhỏ nhất chứa sinh bởi họ $\mathfrak{J_{o}}$, vậy suy ra $\sigma(\mathfrak{J_{o}}) \subset \mathfrak{M}_{L}$.
> 
> Ta đã chứng minh được $\mathcal{B}(\mathbb{R}) = \sigma(\mathfrak{J_{o}})$ ở ý a), từ chứng minh trên, ta kết luận:
> $$
> \mathcal{B}(\mathbb{R}) \subset \mathfrak{M}_{L}
> $$

# Tuần 5

> [!thm] (Outer - Inner Approximation)
> For every $E \in \mathfrak{B}(\mathbb{R})$, the following conditions are all equivalent:
> 1. $(i)$ $E \in  \mathfrak{M}_{L}$
> 2. Outer Approximation:
> $(ii)$ For every $\epsilon >0$, there exists an open set $O \supset E$ with $\mu ^{*}_{L}(O \setminus E) \le \epsilon$.
> $(iii)$ There exists a set $G$ $\left( G = \bigcap_{n=1} ^{\infty} O_{n} \right)$, ${} O_{n}$ is open,  $G \supset E$ with $\mu ^{*} _{L}(G \setminus E) = 0$.
> 3. Inner Approximation:
> $(iv)$ For every ${} \epsilon > 0$, there exists a closed set $C \subset E$ with $\mu ^{*} _{L}(E \setminus C) \le \epsilon$.
> $(v)$ There exists a set $F$ $\left( F = \bigcup _{n = 1} ^{\infty} C_{n}\right)$, $C_{n}$ is closed, $F \subset E$ with $\mu ^{*}_{L}(E \setminus F) = 0$.

> [!prf]
> Ta đã chứng minh $(i)$, $(ii)$, $(iii)$ tương đương, bây giờ ta sẽ chứng minh $(i)$, $(iv)$, $(v)$ là tương đương nhau.
> 
> 4. $((i) \implies (iv))$
> 	- Vì họ các tập đo được $\mathfrak{M}_L$ là một $\sigma$-đại số, ta có $E \in \mathfrak{M}_L$ nên $E^c \in \mathfrak{M}_L$. 
> 	- Vì $E^{c}$ là tập đo được, áp dụng $(ii)$, ta tìm được tập mở $O \supset E^c$ sao cho $\mu_L^*(O \setminus E^c) \le \epsilon$.
> 	- Đặt $C = O^c$:
> 		- Vì $O$ là tập mở, suy ra lõi $C$ là tập đóng.
> 		- Vì $O \supset E^c$ nên $C \subset E$.
> 		- Ta có $$O \setminus E^c = O \cap (E^c)^c = O \cap E = E \cap C^c = E \setminus C$$
> 		- Vậy ta có $\mu_L^*(E \setminus C) \le \epsilon$.
> 5. $((iv) \implies (v))$
> 	- Ta cần tìm một tập $F$ là hợp của vô hạn tập đóng nằm trong $E$ sao cho $\mu_L^*(E \setminus F) = 0$.
> 	- Tương ứng với mỗi $\frac{1}{n}$, tồn tại một tập đóng $C_n \subset E$ sao cho: $\mu_L^*(E \setminus C_n) \le \frac{1}{n}$.
> 	- Đặt $F = \bigcup_{n=1}^\infty C_n$, ta có $E \setminus F \subseteq E \setminus C_n \quad \forall n \in \mathbb{N}$ với mỗi $n \in \mathbb{N}$.
> 	- Áp dụng tính đơn điệu của độ đo ngoài:
> 	$$\mu_L^*(E \setminus F) \le \mu_L^*(E \setminus C_n) \le \frac{1}{n}$$
> 	- Cho $n \to \infty$, ta thu được $\mu_L^*(E \setminus F) = 0$.
> 6. $((v) \implies (i))$
> 	- Giả sử ta có $F \subset E$ và ${} \mu_L^*(E \setminus F) = 0$, ta cần chỉ ra  $E \in \mathfrak{M}_{L}$.
> 	- Vì $F \subseteq E$, ta có $E = F \cup (E \setminus F)$:
> 		- Tập ${} F$ là hợp đếm được các tập mở nên $F$ là một tập Borel, ta đã chứng minh mọi tập Borel đều Lebesgue đo được nên ${} F \in \mathfrak{M}_{L}$
> 		- ${} E \setminus F$ có độ đo ngoài bằng 0 (theo giả thiết). Mà mọi tập có độ đo ngoài bằng 0 đều tự động là tập đo được nên ${} (E \setminus F) \in \mathfrak{M}_L$
> 		- Vì họ $\mathfrak{M}_L$ là một $\sigma$-đại số nên nó đóng kín với phép hiệu và hợp hai tập hợp, vậy $E \in \mathfrak{M}_L$.

> [!thm] (Fundamental Properties of Lebesgue Inner Measure)
> 7. $\mu_{*,L} \in [0, \infty]$ for every $E \in \mathfrak{B}(\mathbb{R})$
> 8. $\mu_{*,L}(\emptyset) = 0$
> 9. monocity: $E_{1}, E_{2} \in \mathfrak{B}(\mathbb{R}), E_{1} \subset E_{2} \implies \mu_{*,L}(E_{1})\le \mu_{*,L}(E_{2})$
> 10. $\sigma$ - superadditivity: $(E_{n}: n \in \mathbb{N})\subset \mathfrak{B}(\mathbb{R}), E_{n}$ disjoint 
> $\implies$ $\mu_{*,L}\left( \bigcup_{n \in \mathbb{N}}E_{n} \right) \ge \sum_{n \in \mathbb{N}} \mu_{*,L}(E_{n})$

> [!prf] 
> - Ta sẽ chứng minh $\mu_{*,L}$ thỏa tính chất $\sigma$-cộng tính trên
> - Đặt $E = \bigcup_{n = 1}E_{n}$ với ${} E_{n}$ rời nhau từng đôi một.
> 	- Nếu tồn tại $E_{k}$ sao cho $\mu_{*,L}(E_{k}) = \infty$ thì do tính đơn điệu, $E_{k} \subset E$ dẫn tới $\mu_{*,L}(E) = \infty$, bất đẳng thức hiển nhiên đúng.
> 	- Giả sử ${} \mu_{*,L} (E_{n})<\infty$ với mọi $n \in \mathbb{N}$
> 	- Cho một số thực $\epsilon > 0$ tùy ý. Theo định nghĩa của độ đo trong (bằng supremum của tập compact), với mỗi tập $E_n$, sẽ luôn tồn tại một tập compact $K_n \subset E_n$ sao cho: $$\mu_L(K_n) > \mu_{*,L}(E_n) - \frac{\epsilon}{2^n} \tag{1}$$
> 	- Đặt $K^{(N)} = \bigcup_{n=1}^N K_n$, ta có: $$\mu_{*,L}(E) \ge \mu_L(K^{(N)}) \tag{2}$$
> 	- Do các $K_n$ là các tập (compact) rời nhau và đo được, tính cộng tính hữu hạn của độ đo Lebesgue: $$\mu_L(K^{(N)}) = \mu_L \left( \bigcup_{n=1}^N K_n \right) = \sum_{n=1}^N \mu_L(K_n) \tag{3}$$
> 	- Thay $(1)$, $(3)$ vào $(2)$: $$\mu_{*,L}(E) \ge \sum_{n=1}^N \mu_L(K_n) > \sum_{n=1}^N \left( \mu_{*,L}(E_n) - \frac{\epsilon}{2^n} \right)$$
> 	- Vậy ta có $\mu_{*,L}(E) > \sum_{n=1}^N \mu_{*,L}(E_n) - \epsilon$
> 	- Cho $N \to \infty$, $\epsilon \to 0$, ta được: $$\mu_{*,L}(E) \ge \sum_{n=1}^\infty \mu_{*,L}(E_n)$$

# Tuần 9

> [!thm] (Định lý 4.16)
> Cho $(X, \mathfrak{A})$ là một không gian đo được và $f, g$ là hai hàm nhận giá trị thực mở rộng $\mathfrak{A}$-đo được trên tập $D \in \mathfrak{A}$. Khi đó các tập hợp sau đây đều thuộc $\mathfrak{A}$:
> 
> (1) $\{x \in D : f(x) = g(x)\}$
> 
> (2) $\{x \in D : f(x) < g(x)\}$
> 
> (3) $\{x \in D : f(x) \le g(x)\}$
> 
> (4) $\{x \in D : f(x) \neq g(x)\}$

> [!thm] (Định lý 4.22)
> Let $(X, \mathfrak{A})$ be a measureable space and let $f_{n}$ be a sequence of extended real-valued $\mathfrak{A}$-measureable on a set $D \in \mathfrak{A}$:
> 
> a) $\min_{n=1,\ldots,N} f_n, \; \max_{n=1,\ldots,N} f_n, \; \inf_{n \in \mathbb{N}} f_n, \; \sup_{n \in \mathbb{N}} f_n$ are $\mathfrak{A}$-measureable on $D$.
> 
> b) $\liminf_{n \in \mathbb{N}} f_n, \; \limsup_{n \in \mathbb{N}} f_n$ are $\mathfrak{A}$-measureable on $D$.
> 
> c) Let $D_{e} = \{ D: \lim_{ n \to \infty }f_{n} \in \overline{\mathbb{R}}\}$. Then $D_{e} \in \mathfrak{A}$ and $\lim_{ n \to \infty }f_{n}$ is $\mathfrak{A}$-measureable on $D_{e}$.

> [!prf]
> Ta sẽ chứng minh ý c)
> Tập $D_{e}$ là tập hợp các nơi mà giới hạn tồn tại trong $\overline{\mathbb{R}}$, theo định nghĩa là tập mà giới hạn trên và giới hạn dưới bằng nhau:
> $$
> D_e = \{x \in D : \liminf_{n \to \infty} f_n(x) = \limsup_{n \to \infty} f_n(x)\}
> $$
> Vì $\liminf f_n$ và $\limsup f_n$ đều là hai hàm đo được (theo b), tập hợp các điểm mà hai hàm đo được có giá trị bằng nhau là một tập đo được (theo Định lý 4.16). Vậy $D_e \in \mathfrak{A}$.
> 
> Vì $\liminf f_n$ là hàm đo được trên toàn bộ $D$, thì nó hiển nhiên cũng đo được trên miền $D_e$. Vậy $\lim f_n$ (${} = \liminf f_{n}= \limsup f_{n} {}$) là hàm đo được trên $D_e$.

> [!thm] (Định lý 4.23)
> Let $(X, \mathfrak{A})$ be a measureable space and let $f_{n}$ be a sequence of extended real-valued $\mathfrak{A}$-measureable fucntions on a set $D \in \mathfrak{A}$. Let:
> 1. ${} D_{e} = \{ x \in D: \lim_{ n \to \infty }f_{n} \in \overline{\mathbb{R}} \} {}$,
> 2. $D_{c} = \{ x \in D: \lim_{ n \to \infty }f_{n} \in \mathbb{R} \}$,
> 3. ${} D_{\infty} = \{ x \in D: \lim_{ n \to \infty }f_{n} = \infty\} {}$,
> 4. $D_{-\infty} = \{ x \in D: \lim_{ n \to \infty }f_{n} = -\infty\}$,
> 5. ${} D_{ne} = \{ x \in D: \lim_{ n \to \infty }f_{n} \text{ does not exist}\} {}$,
> so that $D_{e}$ and $D_{ne}$ are disjoint and $D_{e} \cup D_{ne} = D$, $D_{c}, D_{-\infty}, D_{\infty}$ are disjoint and $D_{c} \cup D_{\infty} \cup D_{-\infty} = D_{e}$. Then $D_{e}, D_{c}, D_{\infty}, D_{-\infty} \in \mathfrak{A}$ and $\lim_{ n \to \infty } f_{n}$ is $\mathfrak{A}$-measureable on each $D_{e}, D_{c}, D_{\infty}$ and $D_{-\infty}$.

> [!prf]
> 6. Tập $D_{e}$:
> Theo Định lý 4.22 c), ta có $D_{c} \in \mathfrak{A}$ và hàm $f = \lim_{ n \to \infty } f_{n}$ là $\mathfrak{A}$-đo được trên $D_{e}$.
> 
> Ta biểu diễn 2 và 3 bởi giao đếm được các hàm đo được, nên là hàm đo được
> 
> 7. Tập $D_{\infty}$:
> 	 Với mỗi $k \in \mathbb{R}$, ta có:
> 	 $$
> 	 \{ x \in D: \lim_{ n \to \infty }f_{n} = \infty\} = \bigcap_{k=1}^{\infty} \{x \in D_e : f(x) > k\} \in \mathfrak{A}
> 	 $$
> 	- Chiều ($\subset$): Nếu $x$ thuộc vế trái, tức là ta có $f(x) = \infty$, thì nó lớn hơn mọi số thực hữu hạn, nên với mọi số nguyên dương $k \in \mathbb{N}$, ta luôn có $f(x) > k$. Lấy giao bất kì tập có $k$ dương thì ${} f(x) {}$ phải nằm trong đó. Vậy $x$ thuộc vế phải.
> 	- Chiều ($\supset$): Nếu $x$ thuộc vế phải, điều này có nghĩa là với mọi số tự nhiên $k \in \mathbb{N}$, ta đều có $f(x) > k$. Do hàm số nhận giá trị trên tập số thực mở rộng $\overline{\mathbb{R}}$, giá trị duy nhất lớn hơn mọi số nguyên dương $k$ chính là vô cực. Vậy $x$ thuộc vế trái.
> Lập luận tương tự:
> 8. Tập $D_{-\infty}$:
> $$
> \{ x \in D: \lim_{ n \to \infty }f_{n} = -\infty\} = \bigcap_{k=1}^{\infty} \{ x \in D_{e} : f(x)< -k\} \in \mathfrak{A}
> $$
> 
> Ta biểu diễn các tập còn lại thành hợp của các tập đo được ta đã chứng minh:
> 
> 9. Tập $D_{c}$:
> 	Ta có $D_{c} = \{ x \in D_{e}: f(x) \in \mathbb{R}\}$, mà giới hạn $f_{n}$ chỉ có thể nhận giá trị số thực, $\infty$ hoặc $-\infty$, nên $D_{c} = D_{e} \setminus (D_{\infty} \cup D_{-\infty}) \}$. Vì $D_{c}, D_{\infty}, D_{-\infty} \in \mathfrak{A}$, nên ta có $D_{c} \in \mathfrak{A}$.
> 10. Tập $D_{ne}$:
> 	Ta có $D_{ne} =\{ x \in D: \lim_{ n \to \infty }f_{n} \text{ không tồn tại}\} = D \setminus D_{e}$. Vì $D \in \mathfrak{A}$ và $D_{e} \in \mathfrak{A}$ nên ta có $D_{ne} \in \mathfrak{A}$.
>    
> Cuối cùng, vì $f = \lim_{n \to \infty} f_n$ được xác định trên $D_e$, nên khi hạn chế $f$ lên các tập con của $D_e$ là $D_c, D_\infty$ và $D_{-\infty}$, ta vẫn thu được một hàm đo được:
 >	Ta có $E \subset D_e$ và $E \in \mathfrak{A}$, thì với mọi $a \in \mathbb{R}$, ta có $\{ x \in E : f(x) > a \} = E \cap \{ x \in D_e : f(x) > a \} \in \mathfrak{A}$. Do đó $f$ đo được trên $E$. Vậy $\lim_{n \to \infty} f_n$ là ${} \mathfrak{A} {}$-đo được trên $D_e, D_c, D_\infty$ và $D_{-\infty}$.

> [!thm] (Phản ví dụ Egoroff)
> Định lý Egoroff bắt buộc phải có điều kiện không gian đo được hữu hạn $\mu(D) < \infty$:
> 
> Xét không gian đo Lebesgue $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$ với miền $D = [0, \infty)$ có $\mu_L(D) = \infty$.
> Xét dãy hàm đặc trưng (khối lượng trượt):
> $$
> f_n(x) = \chi_{[n, n+1]}(x)
> $$
> Dãy $f_n$ hội tụ điểm về hàm $f(x) = 0$ trên $D$. (Vì với mọi $x \in D$, chọn $N > x$, ta có $x \notin [n, n+1] \implies f_n(x) = 0$ với mọi $n \ge N$).
> Tuy nhiên, $f_n$ không hội tụ gần đều về $0$ trên $D$.

> [!prf]
> Giả sử phản chứng: dãy $f_n$ hội tụ gần đều về 0 trên $D$. 
> Với mức dung sai $\eta = 1 > 0$, tồn tại tập đo được $A \subset D$ với $\mu_L(A) < 1$ sao cho $f_n$ hội tụ đều về $0$ trên miền $D \setminus A$.
> 
> Theo định nghĩa hội tụ đều trên $D \setminus A$, ứng với $\varepsilon = \frac{1}{2}$, tìm được $N_0 \in \mathbb{N}$ sao cho:
> $$
> |f_n(x) - 0| < \frac{1}{2} \quad \forall n \ge N_0, \forall x \in D \setminus A
> $$
> Vì hàm $f_n(x)$ chỉ nhận giá trị $\{0, 1\}$, để nhỏ hơn $\frac{1}{2}$ thì giá trị của nó bắt buộc phải bằng 0:
> $$
> f_n(x) = 0 \quad \forall n \ge N_0, \forall x \in D \setminus A
> $$
> Mặt khác, theo định nghĩa của hàm đặc trưng, $f_n(x)$ chỉ bằng 0 khi $x$ nằm ngoài khoảng $[n, n+1]$. Do đó, không có bất kỳ điểm $x \in D \setminus A$ nào được phép rơi vào khoảng $[n, n+1]$. 
> Do đó ta có quan hệ bao hàm:
> $$
> [n, n+1] \subset A \quad \forall n \ge N_0
> $$
> Lấy hợp của tất cả các khoảng này từ $N_0$ đến vô cùng, ta có:
> $$
> \bigcup_{n=N_0}^{\infty} [n, n+1] = [N_0, \infty) \subset A
> $$
> Áp dụng tính đơn điệu của độ đo:
> $$
> \mu_L(A) \ge \mu_L([N_0, \infty)) = \infty
> $$
> Điều này mâu thuẫn trực tiếp với giả thiết ban đầu là tập cắt bỏ phải có $\mu_L(A) < 1$. 
> Điều chứng tỏ $f_n$ không thể hội tụ gần đều.

# Tuần 10

> [!thm] (Obs 7.5)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $D \in \mathfrak{A}$. Giả sử $\varphi$ là một hàm đơn giản không âm ($\varphi \ge 0$) trên $D$. Khi đó, $\int_D \varphi \, d\mu = 0$ khi và chỉ khi:
> $$\mu(\{x \in D : \varphi(x) \neq 0\}) = 0$$

> [!prf] 
> Giả sử biểu diễn chính tắc của hàm đơn giản không âm $\varphi$ trên tập $D$ là:
> $$\varphi = \sum_{i=1}^n a_i \chi_{D_i}$$
> với các $D_i \in \mathfrak{A}$ rời nhau đôi một, $\bigcup_{i=1}^n D_i = D$, và vì $\varphi \ge 0$ nên tất cả các hệ số $a_i \ge 0$.
> 
> Gọi $I = \{i \in \{1, \dots, n\} : a_i > 0\}$ là tập các chỉ số ứng với các hệ số thực sự dương.
> Khi đó, tập các điểm mà $\varphi(x) \neq 0$ chính là $\bigcup_{i \in I} D_i$. Do các tập $D_i$ rời nhau, độ đo của tập này là:
>   $$\mu(\{x \in D : \varphi(x) \neq 0\}) = \sum_{i \in I} \mu(D_i) \quad (1)$$
> Mặt khác, theo định nghĩa tích phân của hàm đơn giản và quy ước $0 \cdot \infty = 0$, các số hạng có $a_i = 0$ sẽ triệt tiêu. Do đó:
>   $$\int_D \varphi \, d\mu = \sum_{i \in I} a_i \mu(D_i) \quad (2)$$
> 
> Từ $(1)$ và $(2)$, vì mọi hệ số $a_i$ ($i \in I$) đều là các số thực dương ($a_i > 0$), và các độ đo $\mu(D_i) \ge 0$, ta có chuỗi lập luận tương đương:
> $$\int_D \varphi \, d\mu = 0 \iff \sum_{i \in I} a_i \mu(D_i) = 0$$
> Vì đây là tổng các đại lượng không âm, một tổng bằng $0$ khi và chỉ khi từng số hạng bằng $0$. Do $a_i > 0$, điều này tương đương với:
> $$
> \begin{align}
> &\iff \mu(D_i) = 0 \text{ với mọi } i \in I \\
> &\iff \sum_{i \in I} \mu(D_i) = 0 \\
> &\iff \mu(\{x \in D : \varphi(x) \neq 0\}) = 0
> \end{align}
> $$

> [!prp] (Bổ đề 8.2)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo. Giả sử $f$ là một hàm đo được, không âm, nhận giá trị thực mở rộng trên tập $D \in \mathfrak{A}$ (tức là $f: D \to [0, \infty]$). Chứng minh rằng: Nếu $f > 0$ a.e. trên $D$ và $\int_D f d\mu = 0$, thì $\mu(D) = 0$.

> [!prf]
> Theo định nghĩa, điều này có nghĩa là tập hợp các điểm mà $f(x) \neq 0$ có độ đo bằng $0$. Vì $f \ge 0$, ta có:
> $$\mu(\{x \in D : f(x) > 0\}) = 0 \tag{1}$$
> 
> Mặt khác, giả thiết cũng cho $f > 0$ hầu khắp nơi trên $D$. Điều này có nghĩa là tập hợp các điểm mà mệnh đề này sai có độ đo bằng $0$:
> $$\mu(\{x \in D : f(x) \le 0\}) = 0 \tag{2}$$
> 
> Chú ý rằng toàn bộ không gian nền $D$ có thể được phân hoạch thành hai tập hợp rời nhau dựa trên giá trị của $f$:
> $$D = \{x \in D : f(x) > 0\} \cup \{x \in D : f(x) \le 0\}$$
> 
> Áp dụng tính cộng tính hữu hạn của độ đo $\mu$ trên các tập rời nhau, kết hợp với $(1)$ và $(2)$, ta có:
> $$\mu(D) = \mu(\{x \in D : f(x) > 0\}) + \mu(\{x \in D : f(x) \le 0\}) = 0 + 0 = 0$$
> Vậy $\mu(D) = 0$.

> [!thm] (Biểu diễn tích phân qua hàm đơn giản)
> Cho $f \ge 0$ là một hàm đo được trên $D$. Nhắc lại định nghĩa tích phân Lebesgue cho hàm đo được không âm:
> $$\int_D f \, d\mu = \sup_{0 \le s \le f} \int_D s \, d\mu$$
> trong đó $s \in S(D)$ (lớp các hàm đơn giản đo được). Khi đó, ta có đẳng thức:
> $$\int_D f \, d\mu = \int_0^\infty \mu(\{f \ge t\}) \, dt$$

> [!prf] 
> Quá trình chứng minh được thực hiện qua 3 bước dựa trên định nghĩa cận trên đúng ($\sup$) của tích phân Lebesgue, đi từ lớp hàm đơn giản lên hàm đo được tổng quát.
> 
> **Bước 1: Chứng minh đẳng thức đúng cho hàm đơn giản $s \in S(D)$**
> 
> Giả sử hàm đơn giản không âm $s(x)$ được biểu diễn dưới dạng chuẩn tắc:
> $$s(x) = \sum_{i=1}^n c_i \chi_{A_i}(x)$$
> với thang giá trị được sắp thứ tự $0 = c_0 < c_1 < c_2 < \dots < c_n$ và các tập tạo ảnh $A_i = s^{-1}(\{c_i\})$ tương ứng là họ các tập hợp đo được, rời nhau đôi một và lập thành một phân hoạch của không gian $D$.
> 
> Xét hàm mức đuôi tương ứng $h_s(t) = \mu(\{x \in D : s(x) \ge t\})$. Với mỗi $t \in (c_{i-1}, c_i]$, điều kiện $s(x) \ge t$ bắt buộc điểm $x$ phải nhận các giá trị từ mức $c_i$ trở lên, nghĩa là $x \in \bigcup_{j=i}^n A_j$. Do tính cộng tính hữu hạn của độ đo $\mu$, ta thu được:
> $$h_s(t) = \sum_{j=i}^n \mu(A_j) \quad \text{với mọi } t \in (c_{i-1}, c_i]$$
> Mặt khác, với mọi mức $t > c_n$, tập mức $\{s \ge t\}$ trở thành tập rỗng nên $h_s(t) = 0$.
> 
> Tích phân Lebesgue của hàm bậc thang $h_s(t)$ trên $[0, \infty)$ được tính bằng cách tách miền tích phân theo các khoảng phân hoạch giá trị:
> $$\int_0^\infty \mu(\{s \ge t\}) \, dt = \sum_{i=1}^n \int_{c_{i-1}}^{c_i} \left( \sum_{j=i}^n \mu(A_j) \right) dt = \sum_{i=1}^n (c_i - c_{i-1}) \sum_{j=i}^n \mu(A_j)$$
> 
> Thực hiện hoán đổi thứ tự lấy tổng để nhóm các hệ số theo từng độ đo $\mu(A_j)$:
> $$\sum_{j=1}^n \mu(A_j) \sum_{i=1}^j (c_i - c_{i-1}) = \sum_{j=1}^n \mu(A_j) (c_j - c_0) = \sum_{j=1}^n c_j \mu(A_j) = \int_D s \, d\mu$$
> Đẳng thức trên xác nhận mệnh đề đúng với mọi hàm đơn giản không âm.
> 
> **Bước 2: Tìm chặn trên $(\le)$ dựa vào định nghĩa $\sup$**
> 
> Xét một hàm đơn giản bất kỳ thỏa mãn điều kiện kẹp $0 \le s \le f$. Khi đó, với mỗi mức $t \ge 0$, ta có quan hệ bao hàm tập hợp tương ứng trên trục hoành:
> $$\{s \ge t\} \subset \{f \ge t\} \implies \mu(\{s \ge t\}) \le \mu(\{f \ge t\})$$
> 
> Lấy tích phân hai vế theo biến $t$ trên miền $[0, \infty)$ đối với độ đo Lebesgue và đồng thời áp dụng kết quả đã thiết lập ở Bước 1 cho hàm đơn giản $s$, ta thu được đánh giá:
> $$\int_D s \, d\mu = \int_0^\infty \mu(\{s \ge t\}) \, dt \le \int_0^\infty \mu(\{f \ge t\}) \, dt$$
> 
> Bất đẳng thức này đúng với mọi hàm đơn giản $s$ nằm dưới $f$. Do đó, khi lấy cận trên đúng ($\sup$) cho vế trái trên lớp hàm $0 \le s \le f$ theo đúng định nghĩa tích phân, ta thu được vế trái của hệ thức kẹp:
> $$\int_D f \, d\mu = \sup_{0 \le s \le f} \int_D s \, d\mu \le \int_0^\infty \mu(\{f \ge t\}) \, dt \tag{1}$$
> 
> **Bước 3: Dùng Định lý xấp xỉ và MCT để thiết lập dấu bằng**
> 
> Dựa vào Định lý xấp xỉ cho hàm đơn giản, tồn tại một dãy hàm đơn giản không âm $(\varphi_n)_{n=1}^\infty$ hội tụ đơn điệu tăng về hàm giới hạn: $\varphi_n \uparrow f$. Tại mỗi mức $t \ge 0$ cố định, ta xây dựng dãy các tập mức tương ứng $E_n = \{\varphi_n \ge t\}$. Tính chất đơn điệu tăng của dãy hàm kéo theo $E_n$ là một dãy tập tăng dần theo quan hệ bao hàm: $E_n \subset E_{n+1}$.
> 
> Hơn nữa, nhờ tính chất hội tụ điểm $\varphi_n(x) \to f(x)$, ta dễ dàng kiểm tra được $\bigcup_{n=1}^\infty E_n = \{f \ge t\}$. Sử dụng tính chất liên tục từ dưới của độ đo $\mu$, ta có sự hội tụ của dãy số thực:
> $$\lim_{n \to \infty} \mu(\{\varphi_n \ge t\}) = \mu(\{f \ge t\}) \quad (\text{dãy tăng đơn điệu})$$
> 
> Áp dụng Định lý Hội tụ Đơn điệu (MCT) cho tích phân của dãy hàm mức trên khoảng $[0, \infty)$:
> $$\lim_{n \to \infty} \int_0^\infty \mu(\{\varphi_n \ge t\}) \, dt = \int_0^\infty \mu(\{f \ge t\}) \, dt$$
> 
> Mặt khác, lập luận MCT tương tự trên không gian $D$ cho ta:
> $$\lim_{n \to \infty} \int_D \varphi_n \, d\mu = \int_D f \, d\mu$$
> 
> Do mối quan hệ đẳng thức giữa tích phân và hàm mức đã được thiết lập ở Bước 1 cho từng hàm đơn giản $\varphi_n$, hai giá trị giới hạn trên bắt buộc phải trùng nhau. Suy ra:
> $$\int_D f \, d\mu = \int_0^\infty \mu(\{f \ge t\}) \, dt \tag{2}$$
> 
> Kết hợp đánh giá $(1)$ và $(2)$, ta hoàn tất chứng minh.

# Tuần 11

> [!prob] (Prob 8.10)
> Xét không gian độ đo Lebesgue $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$.
> 
> (a) Hãy xây dựng một dãy các hàm thực, không âm, đo được Lebesgue $(f_n)_{n \in \mathbb{N}}$ và hàm giới hạn $f$ trên $\mathbb{R}$ sao cho dãy $(f_n)$ hội tụ đều về $f$ trên $\mathbb{R}$ nhưng giới hạn tích phân không bảo toàn:
> $$\lim_{n \to \infty} \int_{\mathbb{R}} f_n \, d\mu_L \neq \int_{\mathbb{R}} f \, d\mu_L$$
> 
> (b) Hãy xây dựng một dãy các hàm thực, không âm, đo được Lebesgue $(f_n)_{n \in \mathbb{N}}$ và hàm giới hạn $f$ trên $\mathbb{R}$ sao cho dãy hàm giảm đơn điệu về $f$ khi $n \to \infty$ trên $\mathbb{R}$ ($f_n \downarrow f$) nhưng giới hạn tích phân không bảo toàn:
> $$\lim_{n \to \infty} \int_{\mathbb{R}} f_n \, d\mu_L \neq \int_{\mathbb{R}} f \, d\mu_L$$

> [!prf] 
> 
> Câu (a): Phản ví dụ cho trường hợp Hội tụ đều (Hiện tượng khối lượng trốn thoát ra vô cùng)
> Với mỗi $n \in \mathbb{N}^*$, ta định nghĩa dãy hàm đặc trưng:
> $$f_n(x) = \frac{1}{n} \chi_{[0, n]}(x)$$
> Chọn hàm giới hạn: $f(x) = 0$ với mọi $x \in \mathbb{R}$.
> 
> Xét khoảng cách sai số theo chuẩn $\sup$ giữa $f_n$ và $f$ trên toàn bộ $\mathbb{R}$:
> $$\sup_{x \in \mathbb{R}} |f_n(x) - f(x)| = \sup_{x \in \mathbb{R}} \left| \frac{1}{n} \chi_{[0, n]}(x) - 0 \right| = \frac{1}{n}$$
> Lấy giới hạn khi $n \to \infty$:
> $$\lim_{n \to \infty} \left( \sup_{x \in \mathbb{R}} |f_n(x) - f(x)| \right) = \lim_{n \to \infty} \frac{1}{n} = 0$$
> Điều này chứng minh dãy hàm $f_n$ hội tụ đều về hàm $f = 0$ trên $\mathbb{R}$.
> 
> Tích phân của các hàm trong dãy: Theo định nghĩa tích phân hàm chỉ thị, với mọi $n \in \mathbb{N}^*$:
>   $$\int_{\mathbb{R}} f_n \, d\mu_L = \int_{\mathbb{R}} \frac{1}{n} \chi_{[0, n]} \, d\mu_L = \frac{1}{n} \cdot \mu_L([0, n]) = \frac{1}{n} \cdot n = 1$$
>   Do đó, giới hạn của dãy tích phân là: $\lim_{n \to \infty} \int_{\mathbb{R}} f_n \, d\mu_L = \lim_{n \to \infty} 1 = 1$.
> Tích phân của hàm giới hạn: $\int_{\mathbb{R}} f \, d\mu_L = \int_{\mathbb{R}} 0 \, d\mu_L = 0$.
> 
> Rõ ràng $1 \neq 0$, ta kết luận giới hạn đi qua dấu tích phân không bảo toàn dù hội tụ đều.
> 
> Câu (b): Phản ví dụ cho trường hợp Hội tụ giảm (Hiện tượng khối lượng trượt)
> Với mỗi $n \in \mathbb{N}$, định nghĩa dãy hàm đặc trưng:
> $$f_n(x) = \chi_{[n, \infty)}(x)$$
> Chọn hàm giới hạn: $f(x) = 0$ với mọi $x \in \mathbb{R}$.
> 
> - Tính giảm đơn điệu: Vì $[n+1, \infty) \subset [n, \infty)$, nên theo tính chất hàm chỉ thị, ta luôn có $f_{n+1}(x) \le f_n(x)$ với mọi $x \in \mathbb{R}$ và mọi $n$. Dãy hàm giảm đơn điệu.
> - Hội tụ điểm về $0$: Lấy một điểm $x_0 \in \mathbb{R}$ bất kỳ. Theo nguyên lý Archimedes, luôn tồn tại số nguyên $n_0$ đủ lớn sao cho $n_0 > x_0$. Khi đó, với mọi $n \ge n_0$, ta có $x_0 \notin [n, \infty) \implies f_n(x_0) = 0$. 
>   Do đó, giới hạn điểm tại mọi điểm luôn bằng 0: $\lim_{n \to \infty} f_n(x) = 0 = f(x)$.
> 
> Tích phân của các hàm trong dãy: Vì miền xác định của hàm chỉ thị có độ đo Lebesgue vô hạn nên với mọi $n \in \mathbb{N}$:
>   $$\int_{\mathbb{R}} f_n \, d\mu_L = \mu_L([n, \infty)) = \infty$$
> Do giá trị của mọi số hạng luôn là vô cùng, ta có giới hạn: $\lim_{n \to \infty} \int_{\mathbb{R}} f_n \, d\mu_L = \infty$.
> Tích phân của hàm giới hạn: $\int_{\mathbb{R}} f \, d\mu_L = \int_{\mathbb{R}} 0 \, d\mu_L = 0$.
> 
> Kết quả thu được là $\infty \neq 0$, định lý hội tụ đơn điệu cho dãy giảm sai do thiếu điều kiện có ít nhất một hàm trong dãy khả tích (tích phân hữu hạn).

> [!prob] (Prob 8.11)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian đo và $f$ là một hàm đo được, không âm trên $X$ sao cho $f$ hữu hạn $\mu$-hầu khắp nơi ($\mu$-a.e) trên $X$. Định nghĩa dãy hàm $f_{n}$ trên $X$:
> $$
> f_{n}(x) = \begin{cases}
> f(x) & \text{nếu } f(x) \le n\\
> 0 & \text{nếu } f(x) > n
> \end{cases}
> $$
> Chứng minh rằng $\lim_{ n \to \infty } \int_{X} f_{n} d\mu = \int_{X} f d\mu$.

> [!prf]
> Đặt $E_{n} = \{ x \in X: f(x) \le n \}$. Gọi $\chi_{E_{n}}$ là hàm chỉ thị cho tập đo được $E_{n}$. Khi đó ta có biểu diễn cho dãy hàm $f_{n}(x)$:
> $$
> f_{n}(x) = f(x) \cdot \chi_{E_{n}}(x)
> $$
> Ta sẽ chứng minh $f_{n}$ theo biểu diễn trên là một hàm đơn điệu tăng và hội tụ về hàm $f$ hầu khắp nơi (a.e) để áp dụng MCT.
> - Tính đơn điệu: Với mỗi $n \in \mathbb{N}$, rõ ràng $f(x) \le n$ suy ra $f(x) \le n+1$, nên ta có $E_{n} \subset E_{n+1}$. Vì $E_{n}$ có số phần tử tăng, khả năng $x \in E_{n}$ sẽ tăng dần theo chỉ số $n$, dẫn tới $\chi_{E_{1}} \le \chi_{E_{2}} \le \dots \chi_{E_{n}} \le \dots$, $\forall x \in X$. Do $f(x) \ge 0$, từ tính tăng của hàm chỉ thị, ta suy ra $0 \le f_{1}(x) \le f_{2}(x) \le \dots f_{n}(x) \le \dots$, $\forall x \in X$.
> - Hội tụ về $f$ hầu khắp nơi: Gọi $N = \{ x \in X: f(x) = \infty \}$ là tập các điểm mà hàm $f$ phân kì. Theo giả thiết, $f$ hữu hạn $\mu$-a.e nên $\mu(N)= 0$. Xét $x \in X \setminus N$ là tập hợp điểm mà $f(x) < \infty$. Theo nguyên lý Archimedes, ta luôn tìm được $N \in \mathbb{N}$, sao cho $f(x) \le n$, $\forall n \ge N$. khi đó với mỗi $x \in E_{n}$, ta có $\chi_{E_{n}}(x) = 1$. Suy ra:
> $$
> \lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } f(x) \cdot 1 = f(x) \quad \forall x \in X \setminus N
> $$
> Vì $\mu(N) = 0$, ta kết luận dãy hàm hội tụ điểm về hàm $f$ hầu khắp nơi trên $X$:
> $$
> \lim_{n \to \infty} f_n(x) = f(x) \quad \mu\text{-a.e. trên } X
> $$
> 
> Ta có $f_{n}$ là dãy các hàm đo được không âm và tăng đơn điêu, hội tụ hầu khắp về $f$ trên $X$. Áp dụng Định lý Hội tụ Đơn điệu (MCT), ta đẩy giới hạn qua dấu tích phân:
> $$
> \lim_{n \to \infty} \int_X f_n \, d\mu = \int_X \left( \lim_{n \to \infty} f_n \right) d\mu = \int_X f \, d\mu
> $$
> Vậy bài toán đã được chứng minh

> [!prob] (Prob 8.15)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian đo. Cho $f$ là các hàm nhận giá trị thực mở rộng, $\mathfrak{A}$-đo được trên $X$ và hữu hạn $\mu$-hầu khắp nơi trên $X$. Chứng minh rằng $f$ khả tích theo $\mu$ trên $X$ khi và chỉ khi:
> $$
> \sum_{n \in \mathbb{Z}_+} 2^{n} \mu(\{ x \in X: f(x) > 2^{n}\}) < \infty 
> $$

> [!prf]
> Đặt $A_n = \{x \in X : f(x) > 2^n\}$ với mọi $n \in \mathbb{Z}_+ = \{1, 2, 3, \dots\}$. Ta cần chứng minh $\int_X f d\mu < \infty \iff \sum_{n=1}^\infty 2^n \mu(A_n) < \infty$.
> Gọi $\chi_{A_{n}}$ là hàm chỉ thị của tập đo được $A_{n}$. Theo định nghĩa tích phân, độ đo của $D_{n}$ chính là tích phân của hàm chỉ thị của nó trên $X$:
> $$
> \mu(A_n) = \int_X \chi_{A_n} d\mu
> $$
> Vì $(\chi_{A_n})_{n=1}^{\infty}$ là một dãy các hàm đo được không âm trên $D$, áp dụng hệ quả Tính $\sigma$-cộng tính của dãy hàm, ta được phép hoán đổi vị trí tổng và tích phân:
> $$
> \sum_{n=1}^\infty 2^n \mu(A_n) = \sum_{n=1}^\infty \int_X 2^n \chi_{A_n} d\mu = \int_X \left( \sum_{n=1}^\infty 2^n \chi_{A_n}(x) \right) d\mu
> $$
> Đặt $g(x) = \sum_{n=1}^\infty 2^n \chi_{A_n}(x)$. Vì $f(x) < \infty$ hầu khắp nơi trên $X$, xét các điểm $x \in X$ có giá trị hữu hạn. Do dãy $(2^n)_{n=0}^\infty$ tăng ngặt và tiến ra vô cùng, ta tìm được một số nguyên không âm $k \in \mathbb{N}$ sao cho:
> $$
> 2^k \le f(x) < 2^{k+1}
> $$
> Ta khảo sát $g(x)$ tại từng mức giá trị, suy ra từ hàm chỉ thị $\chi_{A_{n}}(x)$:
> - Trường hợp $1\le n \le k-1$:
> 	- Ta có $n \le k-1 \implies n+1 \le k \implies 2^n \cdot 2 \le 2^k$. Kết hợp giả thiết $2^{k} \le f(x)$, ta được $2^{n} \le 2\cdot 2^{n} \le 2^{k} \le f(x)$.
> 	- Khi đó: vì $f(x) > 2^{n}$ đúng với mọi $n$ từ $1$ tới $k-1$, ta có $g(x) = \sum_{n=1}^{k-1} 2^n + 0 = 2^1 + 2^2 + \dots + 2^{k-1}$
> - Trường hợp $n \ge k +1$:
>   Vì $2^n \ge 2^{k+1} > f(x)$, điều kiện $f(x) > 2^n$ không thỏa. Do đó $\chi_{A_n}(x) = 0$ dẫn tới $g(x) = 0$.
> - Trường hợp $n = k$: 
> 	- Nếu $f(x) > 2^{k}$, ta có: $g(x) = \sum_{n=1}^{k} 2^n = (2^1 + 2^2 + \dots + 2^{k-1}) + 2^k$
> 	- Nếu $f(x) = 2^{k}$, ta có $g(x) = \sum_{n=1}^{k-1} 2^n + 0 = 2^1 + 2^2 + \dots + 2^{k-1}$
> 	  
> Ta rút ra kết luận: trong tất cả trường hợp, ta đều có $g(x) \ge \sum_{n=1}^{k-1} 2^n = 2^k - 2$. 
> Kết hợp với giả thiết $f(x) < 2^{k+1}$ hay $2^k > \frac{1}{2}f(x)$, ta suy ra: $g(x) > \frac{1}{2}f(x) - 2$ hay $f(x)<g(x) + 4$.
> Mà $f(x) \ge 2^{k} > 2^{k} - 2$ nên ta có $f(x) \ge g(x)$.
> Vậy ta kết hợp hai chiều bất đẳng thức để được: 
> $$
> g(x) \le f(x) < 2g(x) + 4
> $$
> Áp dụng tính đơn điệu và tính cộng tính hữu hạn của tích phân, lấy tích phân trên $X$ cho bất đẳng thức ở trên, ta được:
> $$
> \int_X g \, d\mu \le \int_X f \, d\mu \le 2\int_X g \, d\mu + 4\mu(X)
> $$
> Thay kết quả tính toán, ta được:
> $$
> \sum_{n=1}^\infty 2^n \mu(A_n) \le \int_X f \, d\mu \le 2 \sum_{n=1}^\infty 2^n \mu(A_n) + 4\mu(X)
> $$
> Do giả thiết đề bài cho không gian có độ đo hữu hạn, tức là $\mu(X) < \infty$, nên $4\mu(X)$ là một hằng số thực là một chặn trên. Ta biện luận hai chiều:
> - ($\iff$): Nếu chuỗi độ đo hội tụ ($\sum_{n=1}^\infty 2^n \mu(A_n) < \infty$), thì vế phải của bất đẳng thức kẹp là hữu hạn, kéo theo tích phân $\int_X f d\mu < \infty$ (hàm $f$ khả tích).
> - ($\impliedby$): Nếu hàm $f$ khả tích ($\int_X f d\mu < \infty$), dựa vào vế trái của bất đẳng thức kẹp, chuỗi độ đo $\sum_{n=1}^\infty 2^n \mu(A_n)$ bị chặn bởi một số hữu hạn, tức là chuỗi hội tụ.

> [!prob] (Prob 8.16)
> Cho $(X, \mathcal{A}, \mu)$ là một không gian độ đo bất kỳ. Giả sử $f$ là một hàm đo được nhận giá trị thực, không âm và bị chặn trên $X$. Chứng minh rằng $f$ khả tích đối với $\mu$ trên $X$ khi và chỉ khi:
> $$
> \sum_{n \in \mathbb{Z}_+} \frac{1}{2^n} \mu\left(\left\{x \in X : f(x) > \frac{1}{2^n}\right\}\right) < \infty
> $$

> [!prf]
> Đặt $B_{n} = \left\{  x \in X: f(x) > \frac{1}{2^{n}}  \right\}$ với mọi $n \in \mathbb{Z}_+ = \{1, 2, 3, \dots\}$. Ta cần chứng minh $\int_X f d\mu < \infty \iff \sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) < \infty$.
> Gọi $\chi_{B_{n}}$ là hàm chỉ thị của tập đo được $B_{n}$. Theo định nghĩa tích phân, độ đo của $D_{n}$ chính là tích phân của hàm chỉ thị của nó trên $X$:
> $$
> \mu(B_n) = \int_X \chi_{B_n} d\mu
> $$
> Vì $(\chi_{A_n})_{n=1}^{\infty}$ là một dãy các hàm đo được không âm trên $D$, áp dụng hệ quả Tính $\sigma$-cộng tính của dãy hàm, ta được phép hoán đổi vị trí tổng và tích phân:
> $$
> \sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) = \sum_{n=1}^\infty \int_X \frac{1}{2^n} \chi_{B_n} d\mu = \int_X \left( \sum_{n=1}^\infty \frac{1}{2^n} \chi_{B_n}(x) \right) d\mu
> $$
> Đặt $g(x) = \sum_{n=1}^\infty \frac{1}{2^n} \chi_{B_n}(x)$. Vì $f$ bị chặn trên $X$, tồn tại một số nguyên dương $N \in \mathbb{Z}_+$ đủ lớn sao cho $f(x) \le N$ với mọi $x \in X$. Ta xét giá trị của $g(x)$ dựa trên các phân vùng giá trị của $f(x)$ suy ra từ hàm chỉ thị $\chi_{B_{n}}(x)$:
> - Vì dãy $\frac{1}{2^{n}}\to 0$ là dãy giảm với ${} f(x) > 0 {}$, nên ta tìm được $k \in \mathbb{Z}_{+}$ sao cho:
>   $$
>  \frac{1}{2^{k+1}} < f(x) \le \frac{1}{2^k}
>   $$ 
> - Với $n \ge k+1$: 
> 	 - Ta có$\frac{1}{2^n} \le \frac{1}{2^{k+1}} < f(x)$ nghĩa là điều kiện $f(x) > \frac{1}{2^n}$ đúng.
> 	- Khi đó $g(x) = \sum_{n=k+1}^\infty \frac{1}{2^n} \cdot 1 = \frac{1}{2^{k+1}} + \frac{1}{2^{k+2}} + \dots = \frac{\frac{1}{2^{k+1}}}{1 - \frac{1}{2}} = \frac{1}{2^k}$
> - Với $1\le n \le k+1$: 
>  Ta có điều kiện $\frac{1}{2^n} \ge \frac{1}{2^{k-1}} > \frac{1}{2^k} \ge f(x)$ nghĩa là $f(x) > \frac{1}{2^n}$ sai, dẫn tới $g(x) = 0$.
> - Với $n =  k$: 
>   Ta có điều kiện $f(x) \ge \frac{1}{2^{n}}$, $g(x)$ có thê nhận giá trị $0$ hoặc $\frac{1}{2^k}$.
>   
>  Ta kết luận trong trường hợp $f(x) > 0$, ta luôn có $g(x) \ge \frac{1}{2^k}$.
>  Kết hợp với giả thiết $f(x) \le \frac{1}{2^{k}}$, ta có $g(x) \ge f(x)$.
>  Xét riêng trường hợp $f(x) =0$, khi đó điều kiện $0> \frac{1}{2^{k}}$ là sai dẫn tới quay lại trường hợp cho $g(x) = 0$.
>  Ta lại có: 
>  $$
>  g(x) = \sum_{n=1}^\infty \frac{1}{2^n} \chi_{B_n}(x) \le \sum_{n=k}^\infty \frac{1}{2^n} = \frac{1}{2^k} + \frac{1}{2^{k+1}} + \dots = \frac{\frac{1}{2^k}}{1 - \frac{1}{2}} = 4 \cdot \frac{1}{2^{k+1}}
>  $$
> Kết hợp với giả thiết $\frac{1}{2^{k+1}}\le f(x)$, ta được $g(x) \le 4 \cdot f(x)$
> Vậy kết hợp hai chiều bất đẳng thức, ta được:
> $$
> \frac{1}{4}g(x) \le f(x) \le g(x)
> $$
> Áp dụng tính đơn điệu và tính cộng tính hữu hạn của tích phân, lấy tích phân trên  cho bất đẳng thức ở trên, ta được:
> $$
> \frac{1}{4}\int_X g \, d\mu \le \int_X f \, d\mu \le \int_X g \, d\mu
> $$
> Thay kết quả tính toán, ta được:
> $$
> \frac{1}{4}\sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) \le \int_X f \, d\mu \le \sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n)
> $$
> Ta biện luận:
> - ($\implies$): Nếu hàm $f$ khả tích ($\int_X f d\mu < \infty$), dựa vào vế trái ta có $\sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) \le 4 \int_X f d\mu < \infty$, tức là chuỗi độ đo hội tụ.
> - ($\impliedby$): Nếu chuỗi độ đo hội tụ ($\sum_{n=1}^\infty \frac{1}{2^n} \mu(B_n) < \infty$), dựa vào vế phải ta suy ra tích phân của hàm số $\int_X f d\mu < \infty$, nghĩa là hàm $f$ khả tích.

> [!thm] (Prob 8.17: Hội tụ hầu khắp nơi từ hội tụ trong $L^p$)
> Cho $(X, \mathfrak{A}, \mu)$ là một không gian độ đo. Cho $f_n$ và $f$ là các hàm nhận giá trị thực mở rộng, đo được trên $D \in \mathfrak{A}$. Giả sử $f$ nhận giá trị thực hữu hạn hầu khắp nơi trên $D$. 
> Giả sử tồn tại một dãy số dương ${} (\varepsilon_n)_{n \in \mathbb{N}}$ sao cho:
> 1. $\sum_{n \in \mathbb{N}} \varepsilon_n < \infty$
> 2. $\int_D |f_n - f|^p d\mu < \varepsilon_n$ với mọi $n \in \mathbb{N}$, với một $p \in (0, \infty)$ cố định.
> 
> Chứng minh rằng $f_n \to f$ hầu khắp nơi (a.e.) trên $D$.

> [!prf] 
> 
> Từ giả thiết thứ hai, ta lấy tổng hai vế cho tất cả $n \in \mathbb{N}$. Kết hợp với giả thiết thứ nhất, ta có chuỗi các tích phân hội tụ:
> $$\sum_{n \in \mathbb{N}} \left( \int_D |f_n - f|^p d\mu \right) \le \sum_{n \in \mathbb{N}} \varepsilon_n < \infty$$
> 
> Vì $|f_n - f|^p \ge 0$ với mọi $n$, ta áp dụng tính $\sigma$-cộng tính của tích phân để hoán vị dấu tổng và dấu tích phân:
> $$\int_D \left( \sum_{n \in \mathbb{N}} |f_n - f|^p \right) d\mu = \sum_{n \in \mathbb{N}} \left( \int_D |f_n - f|^p d\mu \right) < \infty$$
> 
> Đặt hàm số $g(x) = \sum_{n \in \mathbb{N}} |f_n(x) - f(x)|^p$. Nhận thấy $g(x)$ là một hàm đo được, không âm.
> Vì tích phân của $g(x)$ trên $D$ là hữu hạn, theo Bổ đề 8.2, hàm $g(x)$ bắt buộc phải nhận giá trị hữu hạn hầu khắp nơi trên $D$.
> 
> Mặt khác, theo giả thiết, $f(x)$ cũng nhận giá trị thực hữu hạn hầu khắp nơi. Gọi $N$ là tập hợp chứa các điểm làm cho $g(x) = \infty$ hoặc $f(x)$ vô hạn. Ta có $\mu(N) = 0$. 
> Với mọi $x \in D \setminus N$, ta có:
> $$\sum_{n \in \mathbb{N}} |f_n(x) - f(x)|^p < \infty$$
> 
> Xét tại một điểm $x \in D \setminus N$ cố định, ta có một chuỗi số thực hội tụ. Theo tính chất cơ bản của chuỗi, nếu một chuỗi hội tụ thì số hạng tổng quát của nó phải tiến về $0$. Do đó:
> $$\lim_{n \to \infty} |f_n(x) - f(x)|^p = 0$$
> 
> Vì $p \in (0, \infty)$ là một số dương cố định, $|f_n(x) - f(x)|^p \to 0$ tương đương với:
> $$\lim_{n \to \infty} |f_n(x) - f(x)| = 0 \implies \lim_{n \to \infty} f_n(x) = f(x)$$
> 
> Lập luận này đúng với mọi $x \in D \setminus N$ (nơi $\mu(N) = 0$). Vậy ta kết luận dãy hàm $f_n$ hội tụ về $f$ hầu khắp nơi trên $D$. 

> [!thm] (Prob 8.18: Trích dãy con hội tụ hầu khắp nơi từ hội tụ trong $L^p$)
> Cho $(X, \mathcal{A}, \mu)$ là một không gian độ đo. Cho $f_n$ và $f$ là các hàm nhận giá trị thực mở rộng, $\mathcal{A}$-đo được trên $D \in \mathcal{A}$, và giả sử $f$ nhận giá trị thực hầu khắp nơi trên $D$. Giả sử tồn tại một dãy số dương ${} (\varepsilon_n)_{n \in \mathbb{N}}$ sao cho:
> 1. $\lim_{n \to \infty} \varepsilon_n = 0$
> 2. $\int_D |f_n - f|^p d\mu < \varepsilon_n$ với mọi $n \in \mathbb{N}$, với một $p \in (0, \infty)$ cố định.
> 
> Chứng minh rằng dãy $f_n$ có một dãy con $(f_{n_k} : k \in \mathbb{N})$ hội tụ đến $f$ hầu khắp nơi (a.e.) trên $D$.

> [!prf] 
> 
> Theo giả thiết thứ nhất, ta có $\lim_{n \to \infty} \varepsilon_n = 0$. 
> Dựa vào định nghĩa giới hạn, với mỗi số nguyên dương $k \in \mathbb{N}$, ta luôn luôn tìm được một dãy chỉ số $n_k \in \mathbb{N}$ tăng dần, sao cho:
> $$\varepsilon_{n_k} < \frac{1}{2^k}$$
> 
> Xét chuỗi số dương tạo bởi dãy con $(\varepsilon_{n_k})_{k \in \mathbb{N}}$, ta thấy nó bị chặn trên bởi một chuỗi hình học hội tụ:
> $$\sum_{k \in \mathbb{N}} \varepsilon_{n_k} < \sum_{k \in \mathbb{N}} \frac{1}{2^k} = 1 < \infty$$
>
> Xét riêng dãy con các hàm số $(f_{n_k})_{k \in \mathbb{N}}$ và dãy số dương tương ứng $(\varepsilon_{n_k})_{k \in \mathbb{N}}$. 
> 
> Kiểm tra hai điều kiện của mệnh đề Prob 8.17 với dãy con này:
> - (i): Chuỗi số dương hội tụ, $\sum_{k \in \mathbb{N}} \varepsilon_{n_k} < \infty$ (đã chứng minh ở Bước 1).
> - (ii): Từ giả thiết thứ hai của đề bài, với mọi chỉ số thuộc dãy con $n_k$, ta luôn có:
> $$\int_D |f_{n_k} - f|^p d\mu < \varepsilon_{n_k} \quad (\forall k \in \mathbb{N})$$
> 
> Do cả hai điều kiện trên đều thỏa, áp dụng kết quả Prob 8.17 cho dãy con $(f_{n_k})_{k \in \mathbb{N}}$, ta thu được kết luận:
> Dãy con $f_{n_k} \to f$ hầu khắp nơi (a.e.) trên $D$.
> 
> Chứng minh hoàn tất.

> [!thm] (Prob 8.20)
> Cho không gian độ đo $(X, \mathfrak{A}, \mu)$ và $f$ là một hàm đo được nhận giá trị thực mở rộng trên $X$. Giả sử tồn tại một hằng số $p \in (0, \infty)$ sao cho $|f|^p$ khả tích Lebesgue trên $X$ ($\int_X |f|^p d\mu < \infty$). 
> Khi đó, ta có giới hạn sau:
> $$\lim_{\lambda \to \infty} \lambda^p \mu(\{x \in X : |f(x)| \ge \lambda\}) = 0$$

> [!prf] 
> 
> Đặt $g(x) = |f(x)|^p$. Do $f$ đo được nên $g$ là hàm số đo được không âm trên $X$. Theo giả thiết về tính khả tích của $|f|^p$, ta có:
> $$\int_X g d\mu = \int_X |f|^p d\mu < \infty$$
> 
> Với mỗi số thực $\lambda > 0$, do hàm số lũy thừa bậc $p$ đồng biến trên $[0, \infty)$, ta có sự tương đương giữa các tập mức:
> $$\{x \in X : |f(x)| \ge \lambda\} = \{x \in X : |f(x)|^p \ge \lambda^p\} = \{x \in X : g(x) \ge \lambda^p\}$$
> 
> Lấy độ đo $\mu$ hai vế, ta viết lại thành:
> $$\lambda^p \mu(\{x \in X : |f(x)| \ge \lambda\}) = \lambda^p \mu(\{x \in X : g(x) \ge \lambda^p\})$$
> 
> Kí hiệu $E_\lambda = \{x \in X : g(x) \ge \lambda^p\}$. Trên tập $E_\lambda$, ta luôn có đánh giá chặn dưới cho hàm số: $g(x) \ge \lambda^p$.
> 
> Áp dụng tính đơn điệu của tích phân Lebesgue cho hàm không âm, lấy tích phân hai vế trên riêng miền tập mức $E_\lambda$, ta thu được:
> $$\int_{E_\lambda} g d\mu \ge \int_{E_\lambda} \lambda^p d\mu = \lambda^p \int_{E_\lambda} 1 d\mu = \lambda^p \mu(E_\lambda)$$
> 
> Viết lại bất đẳng thức trên, ta có chặn trên:
> $$0 \le \lambda^p \mu(\{x \in X : g(x) \ge \lambda^p\}) \le \int_{E_\lambda} g d\mu$$
> 
> Khi cho $\lambda \to \infty$, hằng số $\lambda^p \to \infty$. Xét giới hạn của dãy các tập mức giảm dần $E_\lambda$:
> $$\bigcap_{\lambda > 0} \{x \in X : g(x) \ge \lambda^p\} = \{x \in X : g(x) = \infty\}$$
> 
> Vì hàm $g$ khả tích ($\int_X g d\mu < \infty$), tập hợp các điểm làm cho hàm nhận giá trị vô cùng bắt buộc phải là một tập null có độ đo bằng $0$:
> $$\mu(\{x \in X : g(x) = \infty\}) = 0$$
> 
> Theo tính chất liên tục từ trên của tích phân Lebesgue, phần đuôi tích phân trên miền tập mức sẽ triệt tiêu khi lấy giới hạn:
> $$\lim_{\lambda \to \infty} \int_{\{g \ge \lambda^p\}} g d\mu = \int_{\{g = \infty\}} g d\mu = 0$$
> 
> Nhờ chuỗi bất đẳng thức thiết lập ở Bước 2:
> $$0 \le \lambda^p \mu(\{x \in X : |f(x)| \ge \lambda\}) \le \int_{\{g \ge \lambda^p\}} g d\mu$$
> 
> Khi $\lambda \to \infty$, vế phải tiến về $0$. Theo định lý giới hạn kẹp, đại lượng ở giữa buộc phải tiến về $0$:
> $$\lim_{\lambda \to \infty} \lambda^p \mu(\{x \in X : |f(x)| \ge \lambda\}) = 0$$
> 
> Chứng minh hoàn tất. 

> [!thm] (Prob 8.24: Biểu diễn Layer Cake)
> Cho $(X, \mathcal{A}, \mu)$ là một không gian độ đo và $f$ là một hàm đo được không âm, khả tích trên $X$.
> 
> (a) Định nghĩa hàm $g$ trên $[0, \infty)$ bởi $g(t) = \mu(\{x \in X : f(x) > t\})$. Khi đó:
> $$\int_X f \, d\mu = \int_{[0, \infty)} g(t) \, \mu_L(dt) = \int_{[0, \infty)} \mu(\{x \in X : f(x) > t\}) \, \mu_L(dt)$$
> 
> (b) Định nghĩa hàm $h$ trên $[0, \infty)$ bởi $h(t) = \mu(\{x \in X : f(x) \ge t\})$. Khi đó:
> $$\int_X f \, d\mu = \int_{[0, \infty)} h(t) \, \mu_L(dt) = \int_{[0, \infty)} \mu(\{x \in X : f(x) \ge t\}) \, \mu_L(dt)$$
> 
> *(Trong đó $\mu_L$ là độ đo Lebesgue trên trục số thực).*

> [!prf] 
> 
> **Ý (a):**
> Ta biểu diễn độ đo của tập mức thông qua tích phân của hàm đặc trưng $\chi$:
> $$\int_{[0, \infty)} \mu(\{x \in X : f(x) > t\}) \, dt = \int_0^\infty \left( \int_X \chi_{\{f > t\}}(x) \, d\mu(x) \right) dt$$
> 
> Vì hàm đặc trưng luôn không âm ($\chi \ge 0$), ta được quyền áp dụng Định lý Tonelli để hoán vị thứ tự lấy tích phân:
> $$= \int_X \left( \int_0^\infty \chi_{\{f > t\}}(x) \, dt \right) d\mu(x)$$
> 
> Nhận xét rằng đối với một điểm $x$ cố định, điều kiện $f(x) > t$ tương đương với việc biến $t$ nằm trong khoảng $[0, f(x))$. Do đó, ta có thể đổi vai trò của hàm đặc trưng từ biến $x$ sang biến $t$:
> $$\chi_{\{f > t\}}(x) = \chi_{[0, f(x))}(t)$$
> 
> Thay vào tích phân bên trong, ta đi tính chiều dài (độ đo Lebesgue) của khoảng $[0, f(x))$:
> $$= \int_X \left( \int_0^\infty \chi_{[0, f(x))}(t) \, dt \right) d\mu(x) = \int_X f(x) \, d\mu(x)$$
> 
> Ý (a) được chứng minh hoàn tất.
> 
> **Ý (b):**
> Ta phân rã tập mức chứa dấu bằng thành hợp của hai tập rời nhau:
> $$\{x \in X : f(x) \ge t\} = \{x \in X : f(x) > t\} \cup \{x \in X : f(x) = t\}$$
> 
> Áp dụng tính cộng tính của độ đo $\mu$ và lấy tích phân lặp theo biến $t$ trên $[0, \infty)$, ta có:
> $$\int_0^\infty \mu(\{f \ge t\}) \, dt = \int_0^\infty \mu(\{f > t\}) \, dt + \int_0^\infty \mu(\{f = t\}) \, dt$$
> 
> Theo kết quả đã chứng minh ở Ý (a), số hạng đầu tiên ở vế phải chính bằng $\int_X f \, d\mu$. Xét số hạng thứ hai, ta áp dụng Định lý Tonelli để hoán đổi thứ tự tích phân:
> $$\int_0^\infty \mu(\{f = t\}) \, dt = \int_0^\infty \left( \int_X \chi_{\{f=t\}}(x) \, d\mu(x) \right) dt \overset{\text{Tonelli}}{=} \int_X \left( \int_0^\infty \chi_{\{f(x)\}}(t) \, dt \right) d\mu(x)$$
> 
> Vì điểm $\{f(x)\}$ có độ đo Lebesgue $\mu_L$ bằng $0$, tích phân bên trong triệt tiêu: $\int_0^\infty \chi_{\{f(x)\}}(t) \, dt = \mu_L(\{f(x)\}) = 0$. 
> 
> Do đó, số hạng thứ hai bằng $0$, dẫn đến đẳng thức:
> $$\int_0^\infty \mu(\{f \ge t\}) \, dt = \int_X f \, d\mu$$
> 
> Ý (b) được chứng minh hoàn tất.

# Tuần 12

> [!lem] (Tính liên tục tuyệt đối của tích phân Lebesgue)
> Cho $\varphi \in L^1(D, \mathfrak{A}, \mu)$. Khi đó:
> $$\forall \varepsilon > 0, \exists \delta_\varepsilon > 0 : \forall A \in \mathfrak{A}, \mu(A) < \delta_\varepsilon \Rightarrow \int_A |\varphi| < \varepsilon$$

> [!prf] 
> Không mất tính tổng quát, giả sử $\varphi \ge 0$.
> 
> Xét dãy hàm chặt cụt $\varphi_n(x) = \min\{\varphi(x), n\}$. Ta có $0 \le \varphi_n \le n$ (bị chặn) và $\varphi_n \uparrow \varphi$.
> 
> Theo Định lý Hội tụ Đơn điệu (hoặc Hội tụ Bị chặn), ta có $\lim_{n \to \infty} \int_D \varphi_n = \int_D \varphi$. 
> Do $\varphi \in L^1$ nên $\int_D \varphi < \infty$, suy ra:
> $$\lim_{n \to \infty} \int_D (\varphi - \varphi_n) = 0$$
> 
> Theo định nghĩa giới hạn, với $\varepsilon > 0$ cho trước, tồn tại $N_\varepsilon \in \mathbb{N}^*$ sao cho:
> $$\int_D (\varphi - \varphi_{N_\varepsilon}) < \frac{\varepsilon}{2}$$
> 
> Với tập $A \in \mathfrak{A}$ bất kỳ, ta tách tích phân:
> $$\int_A \varphi = \int_A \varphi_{N_\varepsilon} + \int_A (\varphi - \varphi_{N_\varepsilon})$$
> Ta đánh giá từng thành phần:
> 
> $$\int_A \varphi_{N_\varepsilon} \le \int_A N_\varepsilon = N_\varepsilon \cdot \mu(A)$$
> $$\int_A (\varphi - \varphi_{N_\varepsilon}) \le \int_D (\varphi - \varphi_{N_\varepsilon}) < \frac{\varepsilon}{2}$$
> 
> Gộp lại ta được:
> $$\int_A \varphi \le N_\varepsilon \cdot \mu(A) + \frac{\varepsilon}{2}$$.
> 
> Chọn $\delta_\varepsilon = \frac{\varepsilon}{2 N_\varepsilon} > 0$. Khi $\mu(A) < \delta_\varepsilon$, ta có:
> $$\int_A \varphi < N_\varepsilon \cdot \left(\frac{\varepsilon}{2 N_\varepsilon}\right) + \frac{\varepsilon}{2} = \varepsilon$$
> Bổ đề đã được chứng minh.

> [!lem] (Tính "chặt" của tích phân Lebesgue)
> Cho $\varphi \in L^1(D, \mathfrak{A}, \mu)$. Khi đó:
> $$\forall \varepsilon > 0, \exists B_\varepsilon \in \mathfrak{A}, \mu(B_\varepsilon) < \infty \Rightarrow \int_{B_\varepsilon^c} |\varphi| < \varepsilon$$

> [!prf] 
> Không mất tính tổng quát, giả sử $\varphi \ge 0$.
> 
> Xét dãy các tập hợp $A_n = \{x \in D : \varphi(x) > \frac{1}{n}\}$ với $n \in \mathbb{N}^*$.
> Rõ ràng $A_n \in \mathfrak{A}$ và $A_n \subseteq A_{n+1}$.
> Ta có đánh giá sau: 
> $$\int_D \varphi \ge \int_{A_n} \varphi \ge \int_{A_n} \frac{1}{n} = \frac{1}{n} \mu(A_n)$$
> Do $\varphi \in L^1$ nên $\int_D \varphi < \infty$. Suy ra $\mu(A_n) \le n \int_D \varphi < \infty$. Vậy các tập $A_n$ đều có độ đo hữu hạn.
> 
> Gọi $A = \{x \in D : \varphi(x) > 0\}$. Dễ thấy $A_n \uparrow A$.
> Xét dãy hàm $f_n = \varphi \cdot \mathbf{1}_{A_n}$. Ta có $f_n \uparrow \varphi \cdot \mathbf{1}_A = \varphi$ (do $\varphi = 0$ trên $A^c$).
> Theo Định lý Hội tụ Đơn điệu:
> $$\lim_{n \to \infty} \int_D f_n = \int_D \varphi \Rightarrow \lim_{n \to \infty} \int_{A_n} \varphi = \int_D \varphi$$
> 
> Vì $\int_D \varphi < \infty$, ta đơn giản hai vế:
> $$\lim_{n \to \infty} \int_{A_n^c} \varphi = \lim_{n \to \infty} \left( \int_D \varphi - \int_{A_n} \varphi \right) = 0$$
> 
> Theo định nghĩa giới hạn, với $\varepsilon > 0$ cho trước, tồn tại một số nguyên $N \in \mathbb{N}^*$ sao cho:
> $$\int_{A_N^c} \varphi < \varepsilon$$
> 
> Chọn $B_\varepsilon = A_N$. Khi đó ta có $\mu(B_\varepsilon) < \infty$ và $\int_{B_\varepsilon^c} \varphi < \varepsilon$. 
> Bổ đề đã được chứng minh.

> [!prob] (Prob 9.15)
> Cho $f$ là hàm đo được và khả tích Lebesgue trên $[0, \infty)$ ($\int_0^\infty |f| d\mu_L < \infty$). 
> Nếu $f$ liên tục đều trên $[0, \infty)$ thì:
> $$\lim_{x \to \infty} f(x) = 0$$

> [!prf] Chứng minh
> Giả sử phản chứng rằng $\lim_{x \to \infty} f(x) \neq 0$. 
> Điều này có nghĩa là tìm được $\varepsilon_0 > 0$ và một dãy các điểm $x_n \to \infty$ (ta có thể chọn sao cho $x_{n+1} - x_n > 1$) thỏa mãn:
> $$|f(x_n)| \ge \varepsilon_0, \quad \forall n \in \mathbb{N}^*$$
> 
> Vì $f$ liên tục đều trên $[0, \infty)$, ứng với $\frac{\varepsilon_0}{2} > 0$, tồn tại một số $\delta > 0$ (ta có thể chọn $\delta < \frac{1}{2}$) sao cho:
> $$\forall x, y \in [0, \infty), |x - y| < \delta \Rightarrow |f(x) - f(y)| < \frac{\varepsilon_0}{2}$$
> 
> Xét các lân cận $I_n = [x_n - \delta, x_n + \delta]$ của từng điểm $x_n$. Với mọi $t \in I_n$, ta có $|t - x_n| \le \delta$, áp dụng bất đẳng thức trên:
> $$|f(t) - f(x_n)| < \frac{\varepsilon_0}{2} \implies |f(t)| \ge |f(x_n)| - |f(t) - f(x_n)| > \varepsilon_0 - \frac{\varepsilon_0}{2} = \frac{\varepsilon_0}{2}$$
> 
> Vì các khoảng $I_n$ rời nhau (do cách chọn $x_{n+1} - x_n > 1$ và $\delta < \frac{1}{2}$), ta tính tích phân của $|f|$ trên hợp của tất cả các khoảng này:
> $$\int_0^\infty |f| d\mu_L \ge \sum_{n=1}^\infty \int_{I_n} |f| d\mu_L$$
> Trên mỗi khoảng $I_n$, do $|f(t)| > \frac{\varepsilon_0}{2}$ và chiều dài khoảng $\mu_L(I_n) = 2\delta$, ta có:
> $$\int_{I_n} |f| d\mu_L \ge \frac{\varepsilon_0}{2} \cdot 2\delta = \varepsilon_0 \delta$$
> 
> Thế ngược lại vào tổng chuỗi:
> $$\int_0^\infty |f| d\mu_L \ge \sum_{n=1}^\infty \varepsilon_0 \delta = \infty$$
> Điều này mâu thuẫn trực tiếp với giả thiết $f$ khả tích Lebesgue ($\int_0^\infty |f| d\mu_L < \infty$).
> 
> Vậy giả thiết phản chứng là sai. Ta có $\lim_{x \to \infty} f(x) = 0$.

> [!prob] (Prob 9.20)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$ Cho $f_{n}$ và $f$ là dãy hàm và hàm thực mở rộng, $\mu$-đo được trên $D \in \mathfrak{A}$. Giả sử ta có $g$ là hàm khả tích không âm nhận giá trị thực mở rộng và đo được trên $D \in \mathfrak{A}$. Giả sử:
> 1. $|f_{n}| \le g$ trên $D$ với mọi $n \in \mathbb{N}$.
> 2. $g^{p}$ khả tích đối với $\mu$ trên $D$ với $p \in (0, \infty)$.
>
> Khi đó ta có:
> (a) $|f^{p}|$ khả tích đối với $\mu$ trên $D$,
> (b) $\lim_{ n \to \infty } \int_{D} |f_{n}|^{p}d\mu = \int_{D} |f|^{p} d\mu$
> (c) $\lim_{ n \to \infty } \int |f_{n} - f|^{p} d\mu = 0$.

> [!prf]
> Ta có $\lim_{ n \to \infty }f_{n} = f$ a.e thì suy ra được ${} \lim_{ n \to \infty } |f_{n}|^{p} = |f|^{p} {}$ a.e trên $D$, điều này có được do hàm lấy trị tuyệt đối và hàm nâng lũy thừa trên $[0, \infty)$ là liên tục nên ta được phép đưa qua giới hạn. Từ ${} |f_{n}| \le g {}$, ta cũng suy ra được $|f_{n}|^{p} \le g^{p}$.
>
> Ta nhận thấy Định lý hội tụ bị chặn được thỏa cho dãy hàm $|f_{n}|^{p}$, vì:
> 1. $|f_{n}|^{p} \to |f|^{p}$ a.e
> 2. $|f_{n}|^{p} \le g^{p}$ a.e (với mọi $n \in \mathbb{N}$)
> 
> Vậy ta kết luận hàm giới hạn $|f|^{p}$ khả tích và $\lim_{ n \to \infty } \int_{D} |f_{n}|^{p}d\mu = \int_{D} |f|^{p} d\mu$, hoàn tất chứng minh ý (a) và ý (b).
> 
> Trước khi chứng minh ý (c), ta cần cần chú ý giả thiết $f_{n}$ và $f$ nhận giá trị thực mở rộng, nên ta có thể rơi vào dạng vô định $\infty - \infty$ khi xét $f_{n} - f$. Ta giải quyết bằng tính chất: Nếu một hàm khả tích $\int_D f d\mu < \infty$, thì $f < \infty$ hầu khắp nơi (a.e.) trên $D$. 
> 
> Áp dụng cho $|f^{p}|$ là hàm khả tích, Gọi $D_0$ là tập hợp tất cả các điểm $x \in D$ mà tại đó $f(x) = \infty$ hoặc tồn tại một chỉ số $n$ để $f_n(x) = \infty$. Tập $D_0$ này chính là hợp đếm được của các tập có độ đo $0$, do đó $\mu(D_0) = 0$ (tập null).
> 
> Xét trên $D \setminus D_{0}$, ta có: 
> $$
> \lim_{ n \to \infty } |f_{n} - f|^{p} = |\lim_{ n \to \infty }f_{n} - f|^{p} = |f - f| = 0 \text{ a.e trên } D
> $$ 
> Ta cũng có $|f_{n} - f| ^{p} \le (|f_{n}| + |f|) ^{p} \le (g + g) ^{p} = 2^{p}g^{p}$. Vậy DCT thỏa cho dãy $|f_{n} - f|^{p}$ với dãy hàm bị chặn $2^{p}g^{p}$ là một hàm khả tích.
> 
> Áp dụng DCT, cho ta $\lim_{ n \to \infty } \int_{D} |f_{n} - f| ^{p} d\mu = \int_{D} \lim_{ n \to \infty } |f_{n} - f|^{p} d\mu = \int_{D} 0 d\mu = 0$.
> Vậy ý (c) được chứng minh hoàn tất.

> [!thm] (Prob 9.22: Mở rộng của Định lý Hội tụ Bị chặn (Generalized DCT))
> Giả sử ta thay thế điều kiện bị chặn tuyệt đối bởi một hàm hằng số $g$ bằng một dãy các hàm khả tích biến $g_n$. Phát biểu tổng quát như sau:
> 
> Cho dãy hàm đo được $(f_n)_{n=1}^\infty$ và hàm $f$ đo được trên $D$. Cho dãy hàm không âm, khả tích $(g_n)_{n=1}^\infty$ và hàm không âm, khả tích $g$ trên $D$ thỏa mãn:
> 1. $f_n \to f$ và $g_n \to g$ hầu khắp nơi (a.e.) trên $D$.
> 2. $\lim_{n \to \infty} \int_D g_n \, d\mu = \int_D g \, d\mu < \infty$.
> 3. $|f_n| \le g_n$ trên $D$ với mọi $n \ge 1$.
> 
> Khi đó, hàm giới hạn $f$ cũng khả tích trên $D$ và ta có quyền đưa giới hạn qua dấu tích phân:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$$

> [!prf]
> Vì $|f_n| \le g_n$, lấy giới hạn hai vế ta có $|f| \le g$ hầu khắp nơi trên $D$. Do $g$ khả tích, ta suy ra ngay $f$ cũng khả tích. 
> Từ điều kiện 3, ta có bất đẳng thức kẹp: $-g_n \le f_n \le g_n$. Ta thiết lập hai dãy hàm không âm và áp dụng Bổ đề Fatou:
> 
> **Bước 1: Xét dãy hàm không âm $(g_n + f_n \ge 0)$**
> Áp dụng Bổ đề Fatou cho dãy này trên miền $D$:
> $$\int_D \liminf_{n \to \infty} (g_n + f_n) \, d\mu \le \liminf_{n \to \infty} \int_D (g_n + f_n) \, d\mu$$
> 
> Nhờ tính chất hội tụ điểm hầu khắp nơi, vế trái hội tụ về $\int_D (g + f) \, d\mu$. Vế phải tách thành tổng các $\liminf$:
> $$\int_D g \, d\mu + \int_D f \, d\mu \le \lim_{n \to \infty} \int_D g_n \, d\mu + \liminf_{n \to \infty} \int_D f_n \, d\mu$$
> 
> Sử dụng giả thiết $\lim \int_D g_n d\mu = \int_D g d\mu < \infty$, ta triệt tiêu đại lượng hữu hạn này ở hai vế, thu được chặn dưới:
> $$\int_D f \, d\mu \le \liminf_{n \to \infty} \int_D f_n \, d\mu \tag{1}$$
> 
> **Bước 2: Xét dãy hàm không âm $(g_n - f_n \ge 0)$**
> Tiếp tục áp dụng Bổ đề Fatou cho dãy hiệu:
> $$\int_D \liminf_{n \to \infty} (g_n - f_n) \, d\mu \le \liminf_{n \to \infty} \int_D (g_n - f_n) \, d\mu$$
> $$\implies \int_D g \, d\mu - \int_D f \, d\mu \le \lim_{n \to \infty} \int_D g_n \, d\mu + \liminf_{n \to \infty} \int_D (-f_n) \, d\mu$$
> 
> Chú ý rằng $\liminf (-a_n) = - \limsup a_n$. Thay vào và tiếp tục giản ước $\int_D g \, d\mu < \infty$ ở hai vế:
> $$-\int_D f \, d\mu \le - \limsup_{n \to \infty} \int_D f_n \, d\mu \implies \int_D f \, d\mu \ge \limsup_{n \to \infty} \int_D f_n \, d\mu \tag{2}$$
> 
> **Bước 3: Nguyên lý kẹp**
> Kết hợp hai đánh giá $(1)$ và $(2)$, ta có chuỗi bao hàm:
> $$\limsup_{n \to \infty} \int_D f_n \, d\mu \le \int_D f \, d\mu \le \liminf_{n \to \infty} \int_D f_n \, d\mu$$
> 
> Vì bất đẳng thức $\liminf \le \limsup$ luôn đúng, toàn bộ chuỗi trên ép buộc các dấu bằng phải xảy ra. Do đó, giới hạn tồn tại và thỏa mãn đẳng thức:
> $$\lim_{n \to \infty} \int_D f_n \, d\mu = \int_D f \, d\mu$$
> Định lý mở rộng được chứng minh hoàn tất. 

> [!prob] (Prob 9.23)
> Cho không gian đo $(X, \mathfrak{A}, \mu)$. Cho $f_{n}$ là dãy hàm thực mở rộng, $\mu$-đo được trên $D \in \mathfrak{A}$. Giả sử:
> 4. $\lim_{ n \to \infty }f_{n} = f$ a.e trên $D$,
> 5. $f_{n}$ và $f$ khả tích đối với $\mu$ trên $D$.
> 
> Khi đó ta có:
> (a) Nếu ta có $\lim_{ n \to \infty } \int_{D}|f_{n}| d\mu = \int_{D} |f|d\mu$ thì $\lim_{ n \to \infty } \int_{D}f_{n} d\mu = \int_{D} fd\mu$
> (b) Chứng tỏ (a) sai bằng cách cho phản ví dụ

> [!prf]
> Chứng minh ý (a):
> Đặt $g_{n} = |f_{n}|$ và $g = |f|$. Ta sẽ chứng minh $f_{n}$ và $g$ thỏa 3 điều kiện của định lý DCT mở rộng từ Prob 9.22 để áp dụng chứng minh ý (a). 
> 
> Ta có $\lim_{ n \to \infty }f_{n} = f$ a.e thì suy ra được $\lim_{ n \to \infty } |f_{n}| = |f|$ a.e trên $D$, điều này có được do hàm lấy trị tuyệt đối là liên tục nên ta được phép đưa qua giới hạn. 
> 
> Ta cũng có $\lim_{ n \to \infty }g_{n} = g$ a.e trên D, $g$ là khả tích đối với $\mu$ và $\lim_{ n \to \infty }\int_{D}g_{n} d\mu = \int_{D} g d\mu$. Vậy ta có $g_{n}$ thỏa điều kiện 2 của DCT mở rộng.
> 
> Gọi $f^+_{n}$ và $f^-_{n}$ lần lượt là phần dương và phần âm của dãy hàm $f_{n}$ ($f_{n} = f^+_{n} - f^-_{n}$ với $f^+_{n}, f^-_{n} \ge 0$). Ta có $\lim_{ n \to \infty } f^+_{n} = f^+$ và $\lim_{ n \to \infty } f^-_{n} = f^-$ và ta cũng có $f^+ \le |f_{n}| = g_{n}$ và $f^- \le |f_{n}| = g_{n}$. Vậy ta có điều kiện 1 và 3 của DCT mở rộng thỏa. Áp dụng DCT mở rộng:
> $$
> \lim_{ n \to \infty } \int_{D} f^+_{n} d\mu = \int_{D} f^+ d\mu \text{ và } \lim_{ n \to \infty } \int_{D} f^-_{n} d\mu = \int_{D} f^- d\mu 
> $$
> Theo khả tích Lebesgue:
> $$
> \begin{align}
> \lim_{n \to \infty} \int_D f_n \, d\mu 
> &=  \lim_{n \to \infty} \int_D f_n^+ \, d\mu - \int_D f_n^- \, d\mu \\
> &=  \lim_{n \to \infty} \int_D f_n^+ \, d\mu - \lim_{n \to \infty} \int_D f_n^- \, d\mu \\
> &=  \int_D f^+ \, d\mu - \int_D f^- \, d\mu \\
> &=  \int_D f \, d\mu.
> \end{align}
> $$
> Vậy ta hoàn tất chứng minh ý (a).
> 
> Phản ví dụ cho ý (a):
> Xét không gian độ đo $(\mathbb{R}, \mathfrak{M}_L, \mu_L)$.  
> Cho $f = 0$ trên $\mathbb{R}$ và ${} f_{n} {}$ là một dãy các hàm thực $\mathcal{M}_L$-đo được trên $\mathbb{R}$, được định nghĩa bởi:
> $$
> f_n(x) =
> \begin{cases}
> \frac{1}{n}, & \text{khi } x \in [0, n), \\
> -\frac{1}{n}, & \text{khi } x \in (-n, 0), \\
> 0, & \text{khi } x \in (-n, n)^c.
> \end{cases}
> $$
> Ta có $\lim_{n \to \infty} f_n(x) = 0 = f(x)$ với mọi $x \in \mathbb{R}$.  
> Hơn nữa, $\int_{\mathbb{R}} f_n \, d\mu_L = 0 = \int_{\mathbb{R}} f \, d\mu_L$ với mọi $n \in \mathbb{N}$, do đó  
> $$\lim_{n \to \infty} \int_{\mathbb{R}} f_n \, d\mu_L = \int_{\mathbb{R}} f \, d\mu_L.$$
>  
> Mặt khác, ta có $\int_{\mathbb{R}} |f_n| \, d\mu_L = 2$ với mọi $n \in \mathbb{N}$, nên  
> $$\lim_{n \to \infty} \int_{\mathbb{R}} |f_n| \, d\mu_L = 2 \neq 0 = \int_{\mathbb{R}} f_n \, d\mu_L.$$
> Vậy ta hoàn tất ý (b)

> [!prob] (BT 1)
> a) Cho dãy hàm ${} f_{n}(x) = \frac{n \sqrt{ x }}{1 + n^{2}x^{2}}$, với $x \in[0,1] {}$. Tính ${} \lim_{ n \to \infty } \int_{0}^{1} f_{n}(x)dx {}$.
> 
> b) Cho dãy hàm $g_{n}(x) = \frac{n}{x^{3/2}} \ln\left( 1 + \frac{x}{n} \right)$, với $x \in [0,1]$. Tính $\int_{0}^{1}g_{n}(x) dx$ khi $n \to \infty$.
>
> c) Cho dãy hàm $h_n(x) = \frac{1}{x^{3/2}} \sin\left(\frac{x}{n}\right)$ với $x > 0$. Tính $\lim_{n\to\infty} \int_0^\infty h_n(x) dx$.

> [!ans]
> Ý a)
> **Tìm giới hạn điểm:**
> Với $x = 0$: $f_{n}(0) = 0 \implies \lim_{ n \to \infty }f_{n}(0) = 0$.
> 
> Với $x \in (0,1]$: Khi $n \to \infty$, bậc của mẫu số ($n^2$) lớn hơn bậc của tử 
> số ($n$), do đó: $\lim_{ n \to \infty } \frac{n \sqrt{ x }}{1 + n^{2}x^{2}} = 0$.
> 
> Vậy $f_{n}(x) \to f(x) = 0$ a.e trên $[0,1]$.
> 
> **Tìm hàm trội:**
> Coi $x$ là hằng số, ta khảo sát $f_{n}(x)$ theo biến $n$:
> 
> Đặt $t = n$, với $t >0$, ta có $f(t) = \frac{t \sqrt{ x }}{1 + t^{2}x^{2}}$.
> 
> Đạo hàm theo biến $t$: $f'(t) = \frac{\sqrt{ x }(1 - t^{2} x^{2})}{(1 + t^{2} x^{2})^{2}}$.
> 
> Cho $f'(t) = 0$, ta được $1 - t^{2} x^{2} = 0$ hay $t = \frac{1}{x}$, với $t, x >0$.
> 
> Vậy $f(t)$ đạt giá trị lớn nhất tại $f\left(\frac{1}{x}\right) = \frac{\frac{1}{x} \cdot \sqrt{x}}{1 + \left(\frac{1}{x}\right)^2 \cdot x^2} = \frac{1}{2\sqrt{x}}$. 
> 
> Ta có ${}  0 \le f_{n}(x) \le g(x) {}$ với $g(x) = \frac{1}{2\sqrt{x}}$, và ta có $\int_0^1 g(x) \, dx = \int_0^1 \frac{1}{2\sqrt{x}} \, dx = 1 < \infty$.
> 
> Áp dụng DCT cho $f_{n}(x) \to 0$ a.e và bị chặn bởi hàm khả tích $g(x) = \frac{1}{2\sqrt{x}}$, ta có:
> $$
> \lim_{n\to\infty} \int_0^1 f_n(x) \, dx = \int_0^1 \left(\lim_{n\to\infty} f_n(x)\right) dx = \int_0^1 0 dx = 0
> $$
>
> Ý b)
> **Tìm giới hạn điểm:**
> Với $x \in (0,1]$, ta viết lại: 
> $$
> g_{n}(x) = \frac{1}{x^{3/2}} \cdot \left[ \frac{\ln\left(1 + \frac{x}{n}\right)}{\frac{1}{n}} \right]
> $$
> 
> Sử dụng L'Hospital, ta được: 
> $$
> \lim_{n\to\infty} g_n(x) =  \frac{1}{x^{3/2}} \cdot \lim_{n\to\infty} \left[ \frac{\ln\left(1 + \frac{x}{n}\right)}{\frac{1}{n}} \right] = \frac{1}{x^{3/2}} \cdot \frac{x}{1 + \frac{x}{n}} = \frac{1}{\sqrt{x}}
> $$
> Vậy $g_{n}(x) \to g(x) = \frac{1}{\sqrt{x}}$ a.e trên $(0, 1]$.
>
> **Tìm hàm trội:**
> Coi $x$ là hằng số, ta khảo sát ${} g_{n}(x)$ theo biến $n$:
>
> Đặt $t = n$, với $t >1$, ta xét $g(t) = \frac{t}{x^{3/2}} \ln \left( 1 + \frac{x}{t} \right)$.
> 
> Đạo hàm theo biến $t$: $g'(t) =  \frac{1}{x^{3/2}} \left[ \ln\left( 1+\frac{x}{t} \right) - \frac{x}{t+x} \right]$
> 
> Ta chứng minh được đạo hàm $g'(t) \ge 0$ với mọi $t> 1$. Vậy $g(t)$ là hàm đồng biến, ta có:
> $$
> \lim_{t \to \infty} g(t) = \lim_{t \to \infty} \frac{1}{x^{3/2}} \left[ \frac{\ln\left(1 + \frac{x}{t}\right)}{\frac{1}{t}} \right]
> $$
> 
> Sử dụng L'Hospital, ta được:
> $$
> \frac{1}{x^{3/2}} \cdot \lim_{t \to \infty} \left[ \frac{\ln\left(1 + \frac{x}{t}\right)}{\frac{1}{t}} \right] = \frac{1}{x^{3/2}} \cdot \frac{x}{1 + \frac{x}{t}} = \frac{1}{\sqrt{ x }}
> $$
>
> Vậy $0 \le g_{n}(x) \le g^{(1)}(x) =\frac{1}{\sqrt{ x }}$, và ta có $\int_0^1 \frac{1}{\sqrt{x}} dx = 2 < \infty$
> 
> Áp dụng DCT cho $g_{n}(x) \to g(x) = \frac{1}{\sqrt{x}}$ a.e với hàm hàm trội khả tích tìm được $g^{(1)}(x) = \frac{1}{\sqrt{ x }}$, ta có: 
> $$
> \lim_{n\to\infty} \int_0^1 g_n(x) dx = \int_0^1 \left(\lim_{n\to\infty} g_n(x)\right) dx = \int_0^1 \frac{1}{\sqrt{x}} dx = 2
> $$
>
> Ý c)
> **Tìm giới hạn điểm:**
> Với $x \in (0, \infty)$, ta có $\lim_{ n \to \infty } \sin\left( \frac{x}{n} \right) = 0$ nên $\lim_{ n \to \infty } \frac{1}{x^{3/2}} \cdot \sin\left( \frac{x}{n} \right) = 0$.
> 
> Vậy $h_{n}(x) \to h(x) = 0$ a.e trên $x \in (0, \infty)$.
>
> **Tìm hàm trội:**
> Ta sẽ sử dụng hai đánh giá: $\sin(x) \le x$ với $x \in [0,1)$ và $\sin(x) \le 1$ với $x \to \infty$.
> Với $x \in [0,1)$, ta có:
> $$
> |h_n(x)| = \frac{1}{x^{3/2}} \left|\sin\left(\frac{x}{n}\right)\right| \le \frac{1}{x^{3/2}} \cdot \frac{x}{n} = \frac{1}{n\sqrt{x}} \le \frac{1}{\sqrt{x}}
> $$
> Và $\frac{1}{\sqrt{ x }}$ là hàm khả tích trên $[0,1)$ (Chứng minh ở trên).
>
> Với $x \in (1, \infty)$, ta có:
> $$
> |h_n(x)| = \frac{1}{x^{3/2}} \left|\sin\left(\frac{x}{n}\right)\right| \le \frac{1}{x^{3/2}} \cdot 1 = \frac{1}{x^{3/2}}
> $$
> Và $\frac{1}{x^{3/2}}$ khả tích trên $(1, +\infty)$ vì $\int_1^\infty x^{-3/2} \, dx = \left[ -2x^{-1/2} \right]_1^\infty = 2 < \infty$.
>
> Vậy $|h_{n}(x)| \le g^{(2)}(x) = \frac{1}{\sqrt{ x }} + \frac{1}{x^{3/2}}$ , với $g^{(2)}(x)$ là tổng hai hàm khả tích nên là một hàm khả tích.
>
> Áp dụng DCT cho $h_{n}(x) \to h(x) = 0$ a.e với hàm trội khả tích tìm được $g^{(2)}(x) = \frac{1}{\sqrt{ x }} + \frac{1}{x^{3/2}}$, ta có:
> $$
> \lim_{n\to\infty} \int_0^\infty h_n(x) dx = \int_0^{\infty} \left(\lim_{n\to\infty} h_n(x)\right) dx = \int_{0}^{\infty} 0 dx = 0 
> $$

> [!thm] (Prob 9.47: Tích phân hàm không âm tương đương Tích phân suy rộng Riemann)
> Cho $f(x) \ge 0$ và liên tục trên $[0, \infty)$. Giả sử tích phân Riemann suy rộng $\int_0^\infty f(x)\,dx$ tồn tại hữu hạn. Chứng minh:
> $$\int_{[0, \infty)} f \, d\mu_L = \int_0^\infty f(x)\,dx$$

> [!prf]
> Xây dựng dãy hàm chặt cụt: Với mỗi $n \in \mathbb{N}^*$, xét dãy hàm:
> $$f_n(x) = \begin{cases} f(x) & \text{nếu } 0 \le x \le n \\ 0 & \text{nếu } x > n \end{cases}$$
> 
> Kiểm tra điều kiện MCT: Do $f(x) \ge 0$ và liên tục, dãy hàm $f_n(x)$ thỏa mãn:
> - Không âm: $f_n(x) \ge 0$ với mọi $x$.
> - Đơn điệu tăng: $f_n(x) \le f_{n+1}(x)$ với mọi $x$ (do miền xác định chứa $f(x)$ được nới rộng).
> - Hội tụ điểm: Với mọi $x \in [0, \infty)$, khi $n \to \infty$ thì $f_n(x) \to f(x)$.
> 
> Áp dụng Định lý Hội tụ Đơn điệu (MCT):
> $$\int_{[0, \infty)} f \, d\mu_L = \lim_{n \to \infty} \int_{[0, \infty)} f_n \, d\mu_L$$
> 
> Chuyển đổi từ Lebesgue sang Riemann:
> Vì $f_n(x) = 0$ khi $x > n$, tích phân trên miền vô hạn được thu về đoạn hẹp $[0, n]$:
> $$\int_{[0, \infty)} f_n \, d\mu_L = \int_{[0, n]} f \, d\mu_L$$
> Do $f(x)$ liên tục trên đoạn đóng $[0, n]$ nên nó cũng bị chặn (hàm liên tục trên tập compact), Áp dụng Định lý 7.27, ta có tích phân Lebesgue trùng với tích phân Riemann:
> $$\int_{[0, n]} f \, d\mu_L = \int_0^n f(x)\,dx$$
> Đẳng thức trở thành:
> $$\int_{[0, \infty)} f \, d\mu_L = \lim_{n \to \infty} \int_0^n f(x)\,dx = \int_0^\infty f(x)\,dx$$
> Chứng minh hoàn tất. 

> [!prob] (Prob 9.48)
> Chứng minh các đẳng thức sau:
> a) $\int_{[0,\infty)} xe^{-x^{2}} \mu_{L}(dx) = \frac{1}{2}$.
> 
> b) $\int_{[0,\infty)} e^{-x^{2}} \mu_{L}(dx) < \infty$.
> 
> c) $\lim_{ n \to \infty } \int_{[0,\infty)} e^{-nx^{2}} \cdot\sin (nx) \mu_{L}(dx) = 0$

> [!ans]
> Ý a)
> Vì $xe^{-x^{2}}$ là hàm liên tục không âm trên $[0,\infty)$, áp dụng Prob 9.47, ta có Tích phân hàm không âm trùng với Tích phân suy rộng Riemann:
> $$
> \int_{[0, \infty)} xe^{-x^{2}}d\mu_L = \int_0^\infty xe^{-x^{2}}dx
> $$
> 
> Đặt $u = x^{2} \implies du = 2x dx$ hay $xdx = \frac{1}{2}du$. Đổi cận: $x \to 0$ thì $u \to 0$ và $x \to \infty$ thì $u \to \infty$. Ta có tích phân trở thành:
> $$
> \int_0^\infty \frac{1}{2} e^{-u} \, du = \left[ -\frac{1}{2} e^{-u} \right]_0^\infty = 0 - \left(-\frac{1}{2}\right) = \frac{1}{2}
> $$
> Vậy $xe^{-x^{2} }$ khả tích trên $[0,\infty)$ và có tích phân bằng ${} \frac{1}{2}$.
> 
> Ý b) 
> Ta lập luận tương tự câu a) để có đươc:
> $$
> \int_{[0, \infty)} e^{-x^2}d\mu_L = \int_0^\infty e^{-x^2}dx
> $$
> Với $x \in [0,1]$, ta có $e^{-x^{2}}$ là hàm liên tục nên bị chặn, cụ thể $e^{-x^{2}} \le e^{-x} \le 1$. Khi đó tích phân bị chặn bởi $\int_{0}^{1} 1dx  = 1 <\infty$
>
> Với $x \in [1, \infty)$, ta có $e^{-x^{2}} \le xe^{-x^{2}}$, ta cũng đã chứng minh ở ý a) $\int_{[0,\infty)} xe^{-x^{2}} \mu_{L}(dx) = \frac{1}{2}$.
> 
> Vậy ta kết luận tích phân $\int_{[0,\infty)} e^{-x^{2}} \mu_{L}(dx)$ có giá trị hữu hạn.
>
> Ý c)
> **Tìm giới hạn điểm:**
> Đặt $f_{n}(x) =e^{-nx^2} \sin(nx)$. Với $x = 0$, ta có $f_{n}(0) = e^{0}\cdot \sin(0) = 0$.
> 
> Với $x \in (0, \infty)$, ta có $e^{-nx^{2}} \to 0$ khi $n \to \infty$. Và vì $|\sin(nx)| \le 1$, ta suy ra: 
> $$
> \lim_{n\to\infty} e^{-nx^2} \sin(nx) = 0
> $$
> Vậy $f_{n}(x) \to f(x) = 0$ a.e trên $[0,\infty)$
> 
> **Tìm hàm trội:**
> Ta sử dụng đánh giá $|\sin(nx)| \le 1$ và $e^{-nx^{2}} \le e^{-x^{2}}$ với $n >1$. Kết hợp lại, ta được:
> $$
> |f_{n}(x)| \le |e^{-nx^{2}}| \cdot |\sin(nx)| \le |e^{-x^{2}}| 
> $$
> 
> Mà ta có $e^{-x^{2}}$ là một hàm khả tích trên $[0, \infty)$ theo ý b). Ta áp dụng DCT cho $f_{n}(x) \to f(x) = 0$ với hàm trội khả tích $g(x) = e^{-x^{2}}$ vừa tìm được:
> $$
> \lim_{n\to\infty} \int_{[0,\infty)} f_{n}(x) \mu_L(dx) = \int_{[0,\infty)} \left( \lim_{n\to\infty} f_{n}(x) \right) \mu_L(dx) = \int_{[0,\infty)} 0 \, \mu_L(dx) = 0
> $$

> [!prob] (Prob 9.30)
> Với $0 < a < b$, xét dãy hàm số $(f_n : n \in \mathbb{N})$ xác định trên $[0, \infty)$ bởi:
> $$f_n(x) = ae^{-nax} - be^{-nbx}$$
> (a) Chứng minh rằng $\int_{[0, \infty)} f_n \, d\mu_L = 0$ với mọi $n \in \mathbb{N}$, từ đó suy ra $\sum_{n \in \mathbb{N}} \int_{[0, \infty)} f_n \, d\mu_L = 0$.
> 
> (b) Tính $\int_{[0, \infty)} |f_n| \, d\mu_L$ với mỗi $n \in \mathbb{N}$.
> 
> (c) Chứng minh rằng $\sum_{n \in \mathbb{N}} \int_{[0, \infty)} |f_n| \, d\mu_L = \infty$.
> 
> (d) Tính tổng chuỗi hàm $\sum_{n \in \mathbb{N}} f_n$.
> 
> (e) Chứng minh rằng tích phân Lebesgue của hàm tổng $\int_{[0, \infty)}  \sum_{n \in \mathbb{N}} f_n  d\mu_L$ không tồn tại hữu hạn.

> [!prf] 
> 
> Ý a)
> Với mỗi chỉ số $n \in \mathbb{N}$ cố định, ta tách $f_n(x)$ thành hiệu của hai hàm thành phần:
> $$f_n(x) = g_n(x) - h_n(x) \quad \text{với } g_n(x) = ae^{-nax}, \ h_n(x) = be^{-nbx}$$
> 
> Với $b > a > 0$, cả hai hàm số $g_n(x)$ và $h_n(x)$ đều là các hàm số liên tục và không âm trên  $[0, \infty)$. 
> 
> Ta tích được tích phân Riemann suy rộng của các hàm thành phần:
> $$\int_0^\infty g_n(x) \, dx = \int_0^\infty ae^{-nax} \, dx = \left[ -\frac{1}{n} e^{-nax} \right]_0^\infty = \frac{1}{n} < \infty$$
> $$\int_0^\infty h_n(x) \, dx = \int_0^\infty be^{-nbx} \, dx = \left[ -\frac{1}{n} e^{-nbx} \right]_0^\infty = \frac{1}{n} < \infty$$
> 
> Áp dụng Prob 9.47, ta có tích phân Lebesgue của hàm thành phần trên $[0, \infty)$ tồn tại hữu hạn và bằng tích phân Riemann suy rộng tương ứng:
> $$\int_{[0, \infty)} g_n \, d\mu_L = \frac{1}{n} \quad \text{và} \quad \int_{[0, \infty)} h_n \, d\mu_L = \frac{1}{n}$$
> 
> Sử dụng tính tuyến tính của tích phân Lebesgue, ta có:
> $$\int_{[0, \infty)} f_n \, d\mu_L = \int_{[0, \infty)} g_n \, d\mu_L - \int_{[0, \infty)} h_n \, d\mu_L = \frac{1}{n} - \frac{1}{n} = 0$$
> 
> Vậy với $n \in \mathbb{N}$:
> $$\sum_{n \in \mathbb{N}} \int_{[0, \infty)} f_n \, d\mu_L  = \sum_{n=1}^\infty 0 = 0$$
> 
> Ý b)
> Xét dấu: $f_n(x) \ge 0 \iff ae^{-nax} \ge be^{-nbx} \iff e^{n(b-a)x} \ge \frac{b}{a} \iff x \ge \frac{\ln(b/a)}{n(b-a)} \equiv x_n$.
> Ta tách cận tại $x_n$ và tính tích phân suy rộng Riemann:
> $$\int_0^\infty |f_n(x)| \, dx = \lim_{M\to\infty} \left( \int_0^{x_n} -f_n(x) \, dx + \int_{x_n}^M f_n(x) \, dx \right)$$
> 
> Áp dụng công thức Newton-Leibniz trên từng đoạn hữu hạn:
> $$
> \begin{align}
> \int_0^\infty |f_n(x)| \, dx &=  \lim_{M\to\infty} \left( -\Big[F_n(x_n) - F_n(0)\Big] + \Big[F_n(M) - F_n(x_n)\Big] \right)  \\
> &= \lim_{M\to\infty} \left( -2F_n(x_n) + F_n(M) \right)
> \end{align}
> $$
> Với nguyên hàm $F_n(x) = \frac{1}{n}(e^{-nbx} - e^{-nax})$, ta có:
> $$
> \lim_{M\to\infty} F_n(M) = \lim_{M\to\infty} \left( -\frac{1}{n}e^{-naM} + \frac{1}{n}e^{-nbM} \right) = 0 + 0 = 0
> $$
> Vậy:
> $$
> \int_0^\infty |f_n(x)| \, dx = -2F_n(x_n) + 0 = -2F_n(x_n) < \infty
> $$
> Ta có $|f_n(x)|$ là hàm số không âm và liên tục trên $[0, \infty)$, đồng thời tích phân Riemann suy rộng $\int_0^\infty |f_n(x)| \, dx$ tồn tại hữu hạn. 
> 
> Áp dụng Prob 9.47, ta có tích phân Lebesgue của $|f_n|$ trên $[0, \infty)$ tồn tại và bằng chính tích phân Riemann suy rộng của nó:
> $$
> \int_{[0, \infty)} |f_{n}| \, d\mu_L = \int_0^\infty |f_{n}(x)| \, dx = -2F_n(x_n) = \frac{2}{n} \left( e^{-nax_n} - e^{-nbx_n} \right)
> $$
> 
> Ý c)
> Từ kết quả ý b), ta có tích phân Lebesgue trị tuyệt đối của mỗi số hạng là:
> $$\int_{[0, \infty)} |f_n| \, d\mu_L = \frac{2}{n} \left( e^{-nax_n} - e^{-nbx_n} \right)$$
> 
> Thay $x_n = \frac{\ln(b/a)}{n(b-a)}$, hay $n x_n = \frac{\ln(b/a)}{b-a}$ vào mũ:
> - $e^{-nax_n} = \left( e^{\ln(b/a)} \right)^{-\frac{a}{b-a}} = \left( \frac{b}{a} \right)^{-\frac{a}{b-a}} = \left( \frac{a}{b} \right)^{\frac{a}{b-a}}$
> - $e^{-nbx_n} = \left( e^{\ln(b/a)} \right)^{-\frac{b}{b-a}} = \left( \frac{b}{a} \right)^{-\frac{b}{b-a}} = \left( \frac{a}{b} \right)^{\frac{b}{b-a}}$
> 
> Đặt $C(a,b) = \left( \frac{a}{b} \right)^{\frac{a}{b-a}} - \left( \frac{a}{b} \right)^{\frac{b}{b-a}}$. Với $0 < a < b$, ta viết lại:
> $$\int_{[0, \infty)} |f_n| \, d\mu_L = \frac{2}{n} \cdot C(a,b)$$
> 
> Ta có tổng vô hạn của chuỗi tích phân trị tuyệt đối này:
> $$\sum_{n \in \mathbb{N}} \int_{[0, \infty)} |f_n| \, d\mu_L = \sum_{n=1}^\infty \frac{2}{n} \cdot C(a,b) = 2C(a,b) \sum_{n=1}^\infty \frac{1}{n}$$
> 
> Vì $\sum_{n=1}^\infty \frac{1}{n} \to \infty$, ta suy ra:
> $$\sum_{n \in \mathbb{N}} \int_{[0, \infty)} |f_n| \, d\mu_L = \infty$$
> 
> Ý d)
> Ta cần xác định hàm tổng giới hạn điểm $f(x) = \sum_{n \in \mathbb{N}} f_n(x)$ trên miền $[0, \infty)$.
> 
> - Tại $x = 0$:
>   $$f_n(0) = ae^0 - be^0 = a - b$$
>   Do $a < b \implies a - b \neq 0$, chuỗi tổng tại điểm 0 là chuỗi hằng số số hạng khác không nên phân kỳ:
>   $$\sum_{n=1}^\infty f_n(0) = \sum_{n=1}^\infty (a - b) = -\infty$$
> 
> - Tại $x > 0$:
>   Vì $a, b > 0$ và $x > 0 \implies e^{-ax} < 1$ và $e^{-bx} < 1$. Ta tách chuỗi thành hiệu của hai chuỗi cấp số nhân lùi vô hạn hội tụ:
>   $$\sum_{n \in \mathbb{N}} f_n(x) = a \sum_{n=1}^\infty \left( e^{-ax} \right)^n - b \sum_{n=1}^\infty \left( e^{-bx} \right)^n$$
> 
>   Áp dụng công thức tổng cấp số nhân lùi vô hạn $\sum_{n=1}^\infty q^n = \frac{q}{1-q}$, ta có:
>   $$\sum_{n \in \mathbb{N}} f_n(x) = a \cdot \frac{e^{-ax}}{1 - e^{-ax}} - b \cdot \frac{e^{-bx}}{1 - e^{-bx}}$$
> 
>   Nhân cả tử và mẫu của phân số thứ nhất với $e^{ax}$ và phân số thứ hai với $e^{bx}$ để thu gọn:
>   $$\sum_{n \in \mathbb{N}} f_n(x) = \frac{a}{e^{ax} - 1} - \frac{b}{e^{bx} - 1}$$
> 
> Vậy hàm tổng chuỗi hội tụ hầu khắp nơi (trên khoảng $(0, \infty)$) về hàm số:
> $$f(x) = \frac{a}{e^{ax} - 1} - \frac{b}{e^{bx} - 1}$$
> 
> Ý e)
> Đặt $S(x) = \sum_{n=1}^\infty f_n(x)$ là hàm tổng đã tìm được ở ý d). Trên khoảng $(0, \infty)$, ta có:
> $$S(x) = \frac{ae^{-ax}}{1 - e^{-ax}} - \frac{be^{-bx}}{1 - e^{-bx}}$$
> 
> Ta tìm được nguyên hàm của hàm thàn phần:
> $$\int \frac{ae^{-ax}}{1-e^{-ax}} \, dx = \ln(1 - e^{-ax}) \quad \text{và} \quad \int \frac{be^{-bx}}{1-e^{-bx}} \, dx = \ln(1 - e^{-bx})$$
> 
> Áp dụng công thức Newton-Leibniz trên đoạn đóng:
> $$\int_0^M S(x) \, dx = \left[ \ln(1 - e^{-ax}) - \ln(1 - e^{-bx}) \right]_0^M = \left[ \ln\left( \frac{1 - e^{-ax}}{1 - e^{-bx}} \right) \right]_0^M$$
> 
> Thế cận dưới ($x \to 0^+$) và sử dụng khai triển Taylor $1 - e^{-tx} \sim tx$, ta có:
>   $$\lim_{x \to 0^+} \ln\left( \frac{1 - e^{-ax}}{1 - e^{-bx}} \right) = \lim_{x \to 0^+} \ln\left( \frac{ax}{bx} \right) = \ln\left(\frac{a}{b}\right) < \infty$$
> Thế cận trên ($x = M$), ta được $\ln\left( \frac{1 - e^{-aM}}{1 - e^{-bM}} \right)$.
> 
> Ta tính tích phân suy rộng:
> $$\int_0^\infty S(x) \, dx = \lim_{M \to \infty} \ln\left( \frac{1 - e^{-aM}}{1 - e^{-bM}} \right) - \ln\left(\frac{a}{b}\right) = \ln\left(\frac{1}{1}\right) - \ln\left(\frac{a}{b}\right) = \ln\left(\frac{b}{a}\right)$$
> 
> Ta thu được kết quả tích phân suy rộng Riemann là một số thực hữu hạn:
> $$\int_0^\infty S(x) \, dx = \ln\left(\frac{b}{a}\right) < \infty$$
> 
> Đối chiếu với kết quả chuỗi tích phân ở câu a):
> $$\int_{[0, \infty)}  \sum_{n \in \mathbb{N}} f_n  d\mu_L = \ln\left(\frac{b}{a}\right) \neq 0 = \sum_{n \in \mathbb{N}} \int_{[0, \infty)} f_n \, d\mu_L$$
> 
> **Kết luận:** Do vi phạm điều kiện hội tụ tuyệt đối ở ý c), ta không thể hoán đổi toán tử tích phân Lebesgue với chuỗi tổng vô hạn **(Xem Prob 9.29)**.

> [!prob]  (Prob 9.50)
> Cho $f$ là hàm đo được Lebesgue và nhận giá trị thực mở rộng trên $(0, \infty)$, cho bởi: 
> $$
> f(x) = \frac{1}{1 + x^2} \ln(1 - e^{-x}), \quad x \in (0, \infty).
> $$  
> Chứng minh rằng $f$ khả tích đối với $\mu_{L}$ và đưa ra đánh giá cho $\int_{(0,\infty)} f \, d\mu_L$

> [!ans] 
> Ta có $0 < e^{-x} < 1$, dẫn đến $0 < 1 - e^{-x} < 1$ dẫn tới $\ln(1 - e^{-x}) < 0$ . Vì $\frac{1}{1+x^{2}} > 0$, nên $f(x)$ không đổi dấu và luôn âm ($f < 0$), ta xét hàm trị tuyệt đối :
> $$|f(x)| = -\frac{1}{1 + x^2} \ln(1 - e^{-x})$$
> 
> Ta áp dụng khai triển Taylor cho hàm $\ln(1 - y) = -\sum_{n=1}^\infty \frac{y^n}{n}$ với $|y| < 1$. Đồng nhất $y = e^{-x}$ (thỏa mãn $0 < e^{-x} < 1$), ta thu được dạng chuỗi vô hạn:
> $$|f(x)| = -\frac{1}{1 + x^2} \left( -\sum_{n=1}^\infty \frac{e^{-nx}}{n} \right) = \sum_{n=1}^\infty \frac{e^{-nx}}{n(1 + x^2)}$$
> 
> Vì mọi số hạng trong tổng đều liên tục và không âm trên $(0, \infty)$, áp dụng Định lý Hội tụ đơn điệu (MCT):
> $$\int_{(0, \infty)} |f| \, d\mu_L = \int_0^\infty \left( \sum_{n=1}^\infty \frac{e^{-nx}}{n(1 + x^2)} \right) dx \stackrel{\text{MCT}}{=} \sum_{n=1}^\infty \frac{1}{n} \int_0^\infty \frac{e^{-nx}}{1 + x^2} \, dx$$
> 
> Ta sử dụng bất đẳng thức $1 + x^2 \ge 1 \implies \frac{1}{1 + x^2} \le 1$. Áp dụng tính đơn điệu của tích phân:
> $$\int_0^\infty \frac{e^{-nx}}{1 + x^2} \, dx < \int_0^\infty e^{-nx} \, dx = \left[ -\frac{1}{n} e^{-nx} \right]_0^\infty = \frac{1}{n}$$
> 
> Thay thế kết quả ước lượng của tích phân vào tổng chuỗi ở trên:
> $$\int_{(0, \infty)} |f| \, d\mu_L < \sum_{n=1}^\infty \frac{1}{n} \cdot \frac{1}{n} = \sum_{n=1}^\infty \frac{1}{n^2}$$
> 
> Ta được chuỗi số $p$-series ($p=2$), là chuỗi vô hạn hội tụ về $\frac{\pi ^{2}}{6}$. Vậy tích phân cần đánh giá:
> $$\int_{(0, \infty)} |f| \, d\mu_L < \frac{\pi^2}{6} < \infty$$
> 
> Vì $\int |f| \, d\mu_L$ hữu hạn, hàm số $f$ khả tích trên $(0, \infty)$ đối với $\mu_{L}$ ($f \in L^1$). 
> 
> Vì $f< 0$ nên tích phân của hàm luôn nhỏ hơn 0, ta thu được ước lượng cho tích phân:
> $$-\frac{\pi^2}{6} < \int_{(0, \infty)} f \, d\mu_L < 0$$

> [!prob] (Prob 9.49)
> Cho tích phân Riemann suy rộng $\int_{-\infty}^{\infty} \frac{1}{\sqrt{\pi}} \exp\{-x^2\} \, dx = 1$ kéo theo tích phân Lebesgue tương ứng bằng $1$:
> $$\int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp\{-x^2\} \, \mu_L(dx) = 1$$
>
> a) Chứng minh rằng với mọi $v > 0$ và $m \in \mathbb{R}$, ta luôn có:
> $$\int_{\mathbb{R}} \frac{1}{\sqrt{2\pi v}} \exp \left\{ -\frac{|x-m|^2}{2v} \right\} \mu_L(dx) = 1$$
>
> b) Cho $f: \mathbb{R} \to \mathbb{R}$ là một hàm đo được Lebesgue, bị chặn và liên tục tại điểm $m \in \mathbb{R}$. Chứng minh:
> $$\lim_{v \downarrow 0} \int_{\mathbb{R}} \frac{1}{\sqrt{2\pi v}} \exp \left\{ -\frac{|x-m|^2}{2v} \right\} f(x) \, \mu_L(dx) = f(m)$$

> [!prf] 
> **Chứng minh ý a)**
> 
> Ta sử dụng phương pháp đổi biến số tuyến tính đối với tích phân Lebesgue trên $\mathbb{R}$.
> 
> Đặt biến số mới $z$ sao cho thành phần mũ quay về dạng bình phương cơ bản:
> $$z = \frac{x-m}{\sqrt{2v}} \implies x = \sqrt{2v} \cdot z + m$$
> 
> Do đây là một phép biến đổi tuyến tính (gồm phép vị tự $\sqrt{2v}$ và phép tịnh tiến một khoảng $m$), theo tính chất bất biến đối với tịnh tiến và scale với vị tự, vi phân độ đo thay đổi bằng trị tuyệt đối của hệ số scale:
> $$\mu_L(dx) = \sqrt{2v} \, \mu_L(dz)$$
> 
> Thay các biến mới vào tích phân ban đầu, để ý khi $x$ chạy trên $\mathbb{R}$ thì $z$ cũng chạy trên $\mathbb{R}$:
> $$I_a = \int_{\mathbb{R}} \frac{1}{\sqrt{2\pi v}} \exp \left\{ -z^2 \right\} \cdot \sqrt{2v} \, \mu_L(dz)$$
> 
> Rút gọn biểu thức và đối chiếu với giả thiết đề bài cho:
> $$I_a = \int_{\mathbb{R}} \frac{\sqrt{2v}}{\sqrt{2v} \cdot \sqrt{\pi}} \exp \left\{ -z^2 \right\} \, \mu_L(dz) = \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \left\{ -z^2 \right\} \, \mu_L(dz) = 1$$
> Vậy ý a) được chứng minh hoàn tất
> 
> **Chứng minh ý (b)**
> 
> **Tìm giới hạn điểm**
> Ta áp dụng phép đổi biến số tương tự như câu (a), viết lại tích phân của kernel nhân với $f(x)$: 
> $$I(v) = \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m + \sqrt{2v} \cdot z) \, \mu_L(dz)$$
> 
> Xét dãy hàm số theo tham số $v$ biến độc lập $z$:
> $$h_v(z) = \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m + \sqrt{2v} \cdot z)$$
> Khi cho $v \downarrow 0$, do hàm số $f$ liên tục tại điểm $m$, ta có giới hạn điểm với mọi $z \in \mathbb{R}$:
> $$\lim_{v \downarrow 0} f(m + \sqrt{2v} \cdot z) = f(m + 0) = f(m)$$
> Do đó, dãy hàm $h_v(z)$ hội tụ điểm về hàm ${} h(z) {}$:
> $$ h(z) = \lim_{v \downarrow 0} h_v(z) = \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m)$$
> 
> **Tìm hàm trội**
> Theo giả thiết, hàm $f$ bị chặn trên $\mathbb{R}$: $f(x) < M$, ta có :
> $$|h_v(z)| = \frac{1}{\sqrt{\pi}} \exp \{-z^2\} |f(m + \sqrt{2v} \cdot z)| \le \frac{M}{\sqrt{\pi}} \exp \{-z^2\} := g(z)$$
> 
> Ta có ${} g(z) = \frac{M}{\sqrt{\pi}} \exp \{-z^2\}$ là một hàm không âm và khả tích trên $\mathbb{R}$, vì:
> $$\int_{\mathbb{R}} g(z) \, \mu_L(dz) = M \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} \, \mu_L(dz) = M \cdot 1 = M < \infty$$
> 
> Áp dụng Định lý Hội tụ Bị chặn (DCT) cho $h_{v}(z) \to h(z)$ với hàm trội khả tích ${} g(z) {}$ vừa tìm được, ta có:
> $$\lim_{v \downarrow 0} I(v) = \int_{\mathbb{R}} \left( \lim_{v \downarrow 0} h_v(z) \right) \mu_L(dz) = \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} f(m) \, \mu_L(dz)$$
> 
> Vì $f(m)$ lúc này là một hằng số không phụ thuộc vào biến $z$, đưa $f(m)$ ra ngoài:
> $$\lim_{v \downarrow 0} I(v) = f(m) \cdot \int_{\mathbb{R}} \frac{1}{\sqrt{\pi}} \exp \{-z^2\} \, \mu_L(dz)$$
> 
> Dựa vào giả thiết đề bài, ta thu được kết quả cuối cùng:
> $$\lim_{v \downarrow 0} I(v) = f(m) \cdot 1 = f(m)$$
> Vậy ý b) được chứng minh hoàn tất.

# Tuần 13

> [!def] 
> Cho hai không gian độ đo $(X, \mathcal{F}, \mu)$ và $(Y, \mathcal{G}, \nu)$. Đặt $\mathcal{R}$ là họ các hợp hữu hạn của các hình chữ nhật đo được đôi một rời nhau: 
> $$\mathcal{R} = \left\{ \bigcup_{i=1}^{m} A_i \times B_i : A_i \in \mathcal{F},\, B_i \in \mathcal{G},\, \text{đôi một rời nhau} \right\}$$

> [!thm] (Mệnh đề 1)
> $\mathcal{R}$ là một đại số trên $X \times Y$.

> [!prf]
> **Bổ đề:** Giao của hai hình chữ nhật đo được luôn là một hình chữ nhật đo được:
> $$(A_1 \times B_1) \cap (A_2 \times B_2) = (A_1 \cap A_2) \times (B_1 \cap B_2)$$
> Do $\mathcal{F}, \mathcal{G}$ đóng với phép giao hữu hạn nên $(A_1 \cap A_2) \in \mathcal{F}$ và $(B_1 \cap B_2) \in \mathcal{G}$, suy ra vế phải vẫn là một hình chữ nhật đo được.
> 
> **1. Chứa không gian mẫu:** Do $X \in \mathcal{F}$ và $Y \in \mathcal{G}$ nên $X \times Y$ là một hình chữ nhật đo được, tức $X \times Y \in \mathcal{R}$ (hợp rời rạc với $m=1$).
> 
> **2. Đóng với phép giao hữu hạn:** Giả sử $E_1 = \bigcup_{i=1}^m R_i$ và $E_2 = \bigcup_{j=1}^k R'_j$ thuộc $\mathcal{R}$. Áp dụng tính phân phối:
> $$E_1 \cap E_2 = \bigcup_{i=1}^m \bigcup_{j=1}^k (R_i \cap R'_j)$$
> Theo Bổ đề đã nêu, mỗi $R_i \cap R'_j$ là một hình chữ nhật đo được, vì $\{R_i\}$ và $\{R'_j\}$ vốn đôi một rời nhau nên các giao $R_i \cap R'_j$ cũng đôi một rời nhau, với số lượng $mk$ hữu hạn. Vậy $E_1 \cap E_2 \in \mathcal{R}$.
> 
> **3. Đóng với phép lấy phần bù:** Trước hết xét $m=1$, tức $R = A \times B$. Ta có phân tích rời rạc:
> $$R^c = (A^c \times Y) \cup (A \times B^c)$$
> Mà ta có $(A^c \times Y) \cap (A \times B^c) = (A^c \cap A) \times (Y \cap B^c) = \emptyset$, nên $R^c \in \mathcal{R}$.
> 
> Với $m>1$, đặt $E = \bigcup_{i=1}^m R_i$. Theo De Morgan, $E^c = \bigcap_{i=1}^m R_i^c$. Theo trường hợp $m=1$, mỗi $R_i^c \in \mathcal{R}$. Ta cũng có theo Mục 2, $\mathcal{R}$ đóng với phép giao hữu hạn. Vậy ta suy ra $E^c \in \mathcal{R}$.
> 
> **4. Đóng với phép hợp hữu hạn:** Với $E_1, E_2 \in \mathcal{R}$ bất kỳ, theo Mục 3 ta có $E_1^c, E_2^c \in \mathcal{R}$, theo Mục 2 ta có $E_1^c \cap E_2^c \in \mathcal{R}$, và áp dụng lại Mục 3 một lần nữa ta có $(E_1^c \cap E_2^c)^c \in \mathcal{R}$. Theo De Morgan:
> $$E_1 \cup E_2 = (E_1^c \cap E_2^c)^c \in \mathcal{R}$$
> 
> **Kết luận:** $\mathcal{R}$ thỏa mãn đầy đủ ba tiên đề của một đại số nên là đại số trên không gian $X \times Y$.

> [!thm] (Mệnh đề 2) 
> Cho $(X, \mathcal{F}, \mu)$, $(Y, \mathcal{G}, \nu)$ $\sigma$-hữu hạn và $E \in \mathcal{F} \otimes \mathcal{G}$. Khi đó:
> 
> 1. $E_x := {y \in Y : (x,y) \in E} \in \mathcal{G}$ và $E^y := {x \in X : (x,y) \in E} \in \mathcal{F}$.
> 2. Hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được, $y \mapsto \mu(E^y)$ là $\nu$-đo được, và: $$\int_X \nu(E_x) d\mu = \int_Y \mu(E^y) d\nu \tag{1}$$

> [!prob]  (Bước 1 trong chứng minh Tonelli)
> Cho $F : X \times Y \to [0, \infty]$ là hàm đo được. Xét cụ thể ${} F(x, y) = \chi_{E}(x,y) {}$ với $E \in \mathcal{F} \otimes \mathcal{G}$. Chứng minh rằng:  
>  
> 1. Với mỗi $x \in X$, ánh xạ $y \mapsto F(x, y)$ là $\nu$-đo được. Với mỗi $y \in Y$, ánh xạ $x \mapsto F(x, y)$ là $\mu$-đo được.  
> 2. Ánh xạ $x \mapsto \int_Y F(x, y) \, d\nu$ là $\mu$-đo được và ánh xạ $y \mapsto \int_X F(x, y) \, d\mu$ là $\nu$-đo được.  
> 3. Ta có công thức tích phân:  
> $$
> \int_{X \times Y} F(x, y) \, d(\mu \times \nu)
> = \int_X \left( \int_Y F(x, y) \, d\nu \right) d\mu
> = \int_Y \left( \int_X F(x, y) \, d\mu \right) d\nu.
> $$

> [!prf]
> Ta có hàm lát cắt của hàm đặc trưng chính là hàm đặc trưng của tập lát cắt. Cụ thể:
>   $$F(x, \cdot) = \chi_{E_x}(\cdot) \quad \text{và} \quad F(\cdot, y) = \chi_{E^y}(\cdot)$$
> Theo Mệnh đề 2 (Mục I), ta đã biết với mọi $E \in \mathcal{F} \otimes \mathcal{G}$ thì $E_x \in \mathcal{G}$ và $E^y \in \mathcal{F}$. Do đó, các hàm đặc trưng $\chi_{E_x}$ và $\chi_{E^y}$ hiển nhiên đo được. Tính chất 1) được thỏa mãn.
> Tương tự, tích phân lát cắt chính là độ đo của tập lát cắt:
>   $$\int_Y F(x, y)  d\nu = \int_Y \chi_{E_x}(y)  d\nu = \nu(E_x)$$
> Mệnh đề 2 khẳng định hàm $x \mapsto \nu(E_x)$ là $\mu$-đo được. Do đó tính chất 2) được thỏa mãn.
> Cuối cùng, thay các biểu thức này vào đẳng thức tích phân tổng quát:
>   $$\int_X \left( \int_Y F(x, y)  d\nu \right) d\mu = \int_X \nu(E_x) d\mu = (\mu \times \nu)(E) = \int_{X \times Y} \chi_E  d(\mu \times \nu)$$
> Theo Mệnh đề 2, giá trị này cũng bằng $\int_Y \mu(E^y)  d\nu = \int_Y \left( \int_X F(x, y)  d\mu \right) d\nu$
> Tính chất 3) được thỏa. Vậy kết quả đúng cho hàm đặc trưng. 

> [!def] (Tích chập) 
> Với $f, g \in \mathcal{L}^1(\mathbb{R}^N)$, tích chập được định nghĩa bởi: $$(f * g)(x) = \int_{\mathbb{R}^N} f(x-y)g(y) dy$$

> [!thm] (Tính chất) 
> Với a.e $x \in \mathbb{R}^N$, hàm $y \mapsto f(x-y)g(y)$ khả tích, và $(f*g) \in \mathcal{L}^1(\mathbb{R}^N)$.

> [!prf] 
> Đặt $F(x,y) = f(x-y)g(y)$. Áp dụng Tonelli cho $|F|$: 
> $$
> \iint |f(x-y)g(y)| dx dy = \int_{\mathbb{R}^N} |g(y)| \left(\int_{\mathbb{R}^N} |f(x-y)| dx\right) dy
> $$ 
> Theo tính bất biến của phép tịnh tiến của độ đo Lebesgue: $\int |f(x-y)| dx = |f|_{\mathcal{L}^1}$. Do đó: 
> $$
> \iint |F| dx dy = |f|_{\mathcal{L}^1} \cdot |g|_{\mathcal{L}^1} < \infty
> $$ 
> Suy ra $F \in \mathcal{L}^1(\mathbb{R}^N \times \mathbb{R}^N)$. Áp dụng Fubini: với a.e $x$, lát cắt $y \mapsto f(x-y)g(y)$ khả tích (Tính chất 1), và hàm $(f*g)(x) = \int F(x,\cdot) dy$ khả tích trên $\mathbb{R}^N$ (Tính chất 2).

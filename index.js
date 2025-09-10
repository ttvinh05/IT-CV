/* desktop */

// dark-mode__toggle
const darkmode = document.querySelector('[data-js="dark-toggle"]')

// hdsd
const hdsd1 = document.querySelector('[data-js="hdsd-step1"]')
const hdsd2 = document.querySelector('[data-js="hdsd-step2"]')
const hdsd3 = document.querySelector('[data-js="hdsd-step3"]')

const lefthdsd = document.querySelector('[data-js="left-hdsd"]')
const righthdsd = document.querySelector('[data-js="right-hdsd"]')

// faq
const faqQuestion = document.querySelectorAll('[data-js="faq-question"]')


// 1. **130–136: Get element methods**

// * Lập “DOM map” cho toàn trang: header, sidebar, form, preview, nút in.
// * Chuẩn hóa chọn phần tử bằng `querySelector`/`querySelectorAll`.
// * Kiểm tra tất cả selector chạy đúng trên 3 trang.

// 2. **137–139: Attribute node & DOM attribute**

// * Liên kết input → preview: tên, tiêu đề, link, email, phone dùng `textContent` và set/get attribute.
// * Ảnh đại diện: đọc file, set `src`, set `alt`.
// * Kiểm tra các `href`, `target`, `download` hoạt động.

// 3. **140–144: innerText vs textContent vs innerHTML**

// * Quy tắc: văn bản người dùng → **textContent**.
// * Chỉ dùng **innerHTML** cho template lặp (mục kinh nghiệm/dự án).
// * Soát lỗi xuống dòng, khoảng trắng, ký tự đặc biệt hiển thị đúng.

// 4. **145–146: Node properties**

// * Điều hướng phần tử: `parentElement`, `children`, `closest` để thao tác đúng vùng.
// * Chuẩn hóa cấu trúc form ↔ preview để sau này ẩn/hiện hoặc reorder dễ.

// 5. **147–153: DOM CSS & ClassList**

// * Toggle dark mode bằng `classList`.
// * Trạng thái active cho tab “Chung/Ngành”, nút chọn mẫu, lỗi validate.
// * Tránh set style trực tiếp; ưu tiên class.

// 6. **154–159: Events**

// * Gắn `addEventListener` cho click, input, change, submit.
// * Sidebar mobile: mở/đóng bằng class + overlay + phím Esc.
// * Form: `preventDefault` khi cần, `stopPropagation` ở overlay.
// * Event delegation cho danh sách động (skill tag, bullet dự án).

// ## Trật tự triển khai gợi ý

// * Ngày 1: 1) Selectors + DOM map.
// * Ngày 2: 2) Attribute/Text binding cho toàn bộ field chính.
// * Ngày 3: 5) ClassList + dark mode + trạng thái active.
// * Ngày 4: 6) Events: sidebar, modal, validate cơ bản.
// * Ngày 5: 3–4) Templating cho mục lặp + rà soát node tree.

// ## Tiêu chí xong “DOM cơ bản” của IT-CV

// * Tất cả input cập nhật preview theo thời gian thực.
// * Dark mode, sidebar, tabs chạy ổn trên mobile/desktop.
// * Không rò rỉ HTML từ người dùng vào DOM (dùng textContent).
// * Không còn thao tác style inline trừ trường hợp đặc biệt.
// * Event được gắn một chỗ, có delegation nơi cần.


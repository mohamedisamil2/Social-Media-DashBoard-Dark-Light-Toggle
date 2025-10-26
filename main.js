let toggle = document.getElementById("theme-toggle");
let body = document.body;

// toggle.addEventListener("change", () => {
//   body.classList.toggle("dark-mode");
// });

// const savedTheme = localStorage.getItem("theme")
// if (savedTheme === "dark") {

// }

// 🟢 1. التحقق عند تحميل الصفحة
const savedTheme = localStorage.getItem("theme");

// إذا كان هناك سمة محفوظة، نطبقها
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  toggle.checked = true; // يجعل الزر في وضع التفعيل
} else {
  body.classList.remove("dark-mode");
  toggle.checked = false;
}

// 🟢 2. عند تغيير الوضع من المستخدم
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light-mode");
  }
});

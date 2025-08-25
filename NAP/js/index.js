// محاكاة لبيانات المستخدم اللي عامل لوجن
const loggedUser = {
  username: "Arafat",
  caNumber: "So98765432100000000000000001"
};

// أول ما الصفحة تفتح غير الرقم في النافبار
window.addEventListener("DOMContentLoaded", () => {
  const caSpan = document.getElementById("ca-number");
  if (caSpan) {
    caSpan.textContent = loggedUser.caNumber;
  }
});

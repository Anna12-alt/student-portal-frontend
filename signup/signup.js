// SIGN UP
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirm = document.getElementById("signupConfirm").value.trim();
    const error = document.getElementById("signupError");

    // Validate trống
    if (!name || !email || !password || !confirm) {
      error.textContent = "Please fill in all fields.";
      return;
    }

    // Validate confirm password
    if (password !== confirm) {
      error.textContent = "Passwords do not match.";
      return;
    }

    // Lưu tên và email để profile dùng
    localStorage.setItem("username", name);
    localStorage.setItem("useremail", email);

    // Chuyển sang home
    window.location.href = "../home/home.html";
  });
}

// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("loginName").value.trim();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const error = document.getElementById("loginError");

    // Validate trống
    if (!name || !email || !password) {
      error.textContent = "Please fill in all fields.";
      return;
    }

const savedName = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("useremail");
    const savedPassword = localStorage.getItem("password");


    if (
      name !== savedName ||
      email !== savedEmail ||
      password !== savedPassword
    ) {
      error.textContent = "Invalid login information.";
      return;
    }

   
    localStorage.setItem("username", name);
    localStorage.setItem("useremail", email);

    
    window.location.href = "../home/home.html";
  });
}

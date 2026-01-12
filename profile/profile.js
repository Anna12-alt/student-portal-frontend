const userNameEl = document.getElementById("userName");
const emailInput = document.getElementById("email");
const majorInput = document.getElementById("major");
const studentIdInput = document.getElementById("studentId");
const statusSelect = document.getElementById("status");
const saveBtn = document.getElementById("saveBtn");

let isEditing = false;

// Load dữ liệu
function loadProfile() {
  const username = localStorage.getItem("username") || "Student Name";
  const email = localStorage.getItem("useremail") || "student@email.com";

  userNameEl.textContent = username;
  emailInput.value = email;

  majorInput.value = localStorage.getItem("major") || "";
  studentIdInput.value = localStorage.getItem("studentId") || "ST0001";
  statusSelect.value = localStorage.getItem("status") || "active";

  lockFields();
}

// Khóa field
function lockFields() {
  emailInput.disabled = true;
  studentIdInput.disabled = true;
  majorInput.disabled = true;
  statusSelect.disabled = true;

  saveBtn.textContent = "Edit Profile";
  isEditing = false;
}

// Mở field cho edit (chỉ major + status)
function unlockFields() {
  majorInput.disabled = false;
  statusSelect.disabled = false;

  saveBtn.textContent = "Save";
  isEditing = true;
}

saveBtn.addEventListener("click", () => {
  if (!isEditing) {
    // Chuyển sang chế độ edit
    unlockFields();
  } else {
    // Save dữ liệu
    localStorage.setItem("major", majorInput.value.trim());
    localStorage.setItem("status", statusSelect.value);

    lockFields();
    alert("Profile updated successfully!");
  }
});

loadProfile();

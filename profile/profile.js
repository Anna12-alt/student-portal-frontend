const userNameEl = document.getElementById("userName");
const emailInput = document.getElementById("email");
const gradeClassInput = document.getElementById("gradeClass");
const studentIdInput = document.getElementById("studentId");
const clubSelect = document.getElementById("club");
const saveBtn = document.getElementById("saveBtn");

let isEditing = false;

// Load dữ liệu
function loadProfile() {
  const username = localStorage.getItem("username") || "Student Name";
  const email = localStorage.getItem("useremail") || "student@email.com";

  userNameEl.textContent = username;
  emailInput.value = email;

  const grade = "Grade 11";
  const className = localStorage.getItem("className") || "11A1";
  gradeClassInput.value = `${grade} – Class ${className}`;

  studentIdInput.value = localStorage.getItem("studentId") || "ST0001";
  clubSelect.value = localStorage.getItem("club") || "";

  lockFields();
}

// Khóa field
function lockFields() {
  emailInput.disabled = true;
  gradeClassInput.disabled = true;
  studentIdInput.disabled = true;
  clubSelect.disabled = true;

  saveBtn.textContent = "Edit Profile";
  isEditing = false;
}

// Mở field (chỉ cho chỉnh Club)
function unlockFields() {
  clubSelect.disabled = false;

  saveBtn.textContent = "Save";
  isEditing = true;
}

saveBtn.addEventListener("click", () => {
  if (!isEditing) {
    unlockFields();
  } else {
    localStorage.setItem("club", clubSelect.value);
    document.getElementById("clubName").innerText =
    clubSelect.value || "None";
    currentUser.club = clubSelect.value;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    document.getElementById("cardClub").innerText =
      "Club: " + (currentUser.club || "None");

    lockFields();
    alert("Profile updated successfully!");
  }
});

loadProfile();




const tabBtns = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    tabs.forEach(t => t.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// ===== CLUB TAB (ROLE + MESSAGE) =====
const clubNameEl = document.getElementById("clubName");
const clubRoleEl = document.getElementById("clubRole");
const applyBtn = document.getElementById("applyClubBtn");

const sendBtn = document.getElementById("sendClubMsg");
const msgInput = document.getElementById("clubMessage");
const statusMsg = document.getElementById("clubStatusMsg");

const clubName = localStorage.getItem("club");
let clubRole = localStorage.getItem("clubRole") || "Participant";

if (clubNameEl) clubNameEl.innerText = clubName || "None";
if (clubRoleEl) clubRoleEl.innerText = clubRole;

// Apply role
if (applyBtn) {
  applyBtn.addEventListener("click", () => {
    if (!clubName) {
      statusMsg.innerText = "You have not joined any club.";
      return;
    }

    if (clubRole === "Official Member") {
      statusMsg.innerText = "You are already an official member.";
      return;
    }

    clubRole = "Official Member";
    localStorage.setItem("clubRole", clubRole);

    clubRoleEl.innerText = clubRole;
    statusMsg.innerText = "Application successful. You are now an official member.";
  });
}

// Send message
if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    if (!clubName) {
      statusMsg.innerText = "You must join a club first.";
      return;
    }

    if (msgInput.value.trim() === "") {
      statusMsg.innerText = "Please enter a message.";
      return;
    }

    statusMsg.innerText = "Your message has been sent to the club admin.";
    msgInput.value = "";
  });
}


// ===== ADD FOR STUDENT CARD (DO NOT TOUCH ABOVE CODE) =====

// tạo currentUser từ dữ liệu đã có (login / signup)
const currentUser = {
  name: localStorage.getItem("username") || "Student Name",
  email: localStorage.getItem("useremail") || "student@email.com",
  gradeClass: gradeClassInput.value,
  studentId: studentIdInput.value,
  club: localStorage.getItem("club") || ""
};

// lưu để dùng chung
localStorage.setItem("currentUser", JSON.stringify(currentUser));

// load student card
const cardName = document.getElementById("cardName");
const cardClass = document.getElementById("cardClass");
const cardId = document.getElementById("cardId");
const cardClub = document.getElementById("cardClub");

if (cardName) {
  cardName.innerText = currentUser.name;
  cardClass.innerText = "Grade / Class: " + currentUser.gradeClass;
  cardId.innerText = "Student ID: " + currentUser.studentId;
  cardClub.innerText = "Club: " + (currentUser.club || "None");
}




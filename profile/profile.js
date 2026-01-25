const userNameEl = document.getElementById("userName");
const emailInput = document.getElementById("email");
const gradeClassInput = document.getElementById("gradeClass");
const studentIdInput = document.getElementById("studentId");
const clubSelect = document.getElementById("club");
const saveBtn = document.getElementById("saveBtn");

let isEditing = false;


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

// Mở field 
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

    localStorage.removeItem("clubRequestSent");
    clubRequestSent = false;


    document.getElementById("clubName").innerText =
      clubSelect.value || "None";

    currentUser.club = clubSelect.value;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    document.getElementById("cardClub").innerText =
      "Club: " + (currentUser.club || "None");

    updateClubTab();

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


let clubRequestSent = localStorage.getItem("clubRequestSent") === "true";


if (clubNameEl) clubNameEl.innerText = clubName || "None";
if (clubRoleEl) clubRoleEl.innerText = clubRole;




function updateClubTab() {
  clubRoleEl.innerText = "Participant";

  const club = localStorage.getItem("club");

  if (!club) {
    clubNameEl.innerText = "None";
    clubRoleEl.innerText = "-";
    statusMsg.innerText = "You haven't joined any clubs.";

    applyBtn.style.display = "none";
    msgInput.style.display = "none";
    sendBtn.style.display = "none";
  } else {
    clubNameEl.innerText = club;
    clubRoleEl.innerText = "Participant";
    statusMsg.innerText = "";

    applyBtn.style.display = "inline-block";
    msgInput.style.display = "block";
    sendBtn.style.display = "inline-block";

    if (clubRequestSent) {
      statusMsg.innerText = "Your request has been sent.";
      applyBtn.disabled = true;
    } else {
      applyBtn.disabled = false;
    }
  }
}


updateClubTab();


// Apply role
if (applyBtn) {
  applyBtn.addEventListener("click", () => {

    const club = localStorage.getItem("club"); 

    if (!club) { 
      statusMsg.innerText = "You haven't joined any clubs.";
      return;
    }

    
    if (clubRequestSent) {
      statusMsg.innerText = "Your request has already been sent.";
      return;
    }

  
    clubRequestSent = true;
    localStorage.setItem("clubRequestSent", "true");

    statusMsg.innerText = "Your request has been sent.";
    applyBtn.disabled = true;




  });
}

// Send message
if (sendBtn) {
  sendBtn.addEventListener("click", () => {

    const club = localStorage.getItem("club"); 

    if (!club) { 
      statusMsg.innerText = "You haven't joined any clubs.";
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

// ===== CHANGE PASSWORD =====
const oldPwInput = document.getElementById("oldPw");
const newPwInput = document.getElementById("newPw");
const changePwBtn = document.getElementById("changePw");
const pwMsg = document.getElementById("pwMsg");

if (changePwBtn) {
  changePwBtn.addEventListener("click", () => {
    const oldPw = oldPwInput.value.trim();
    const newPw = newPwInput.value.trim();
    const savedPw = localStorage.getItem("password");

    
    pwMsg.textContent = "";
    pwMsg.className = "error-msg";
    oldPwInput.classList.remove("input-error");
    newPwInput.classList.remove("input-error");

    // check trống
    if (!oldPw || !newPw) {
      pwMsg.textContent = "Please fill in all fields.";
      if (!oldPw) oldPwInput.classList.add("input-error");
      if (!newPw) newPwInput.classList.add("input-error");
      return;
    }

    // check old password
    if (oldPw !== savedPw) {
      pwMsg.textContent = "Old password is incorrect.";
      oldPwInput.classList.add("input-error");
      return;
    }

    // success
    localStorage.setItem("password", newPw);
    pwMsg.textContent = "Password changed successfully!";
    pwMsg.className = "success-msg";

    oldPwInput.value = "";
    newPwInput.value = "";
  });
}



const logoutBtn = document.getElementById("logoutBtn");
// ===== LOGOUT HANDLER =====
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {

    // === RESET CLUB ===
    localStorage.removeItem("club");
    localStorage.removeItem("clubRequestSent");
    localStorage.removeItem("clubRole");

    // === RESET currentUser.club nếu có ===
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      currentUser.club = "";
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }

    window.location.href = "../info/info.html";
  });
}





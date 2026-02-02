import { auth, signInWithEmailAndPassword } from "./firebaseConfig.js";

const loginForm = document.getElementById("loginForm");
const passwordField = document.getElementById("password");
const toggle = document.getElementById("toggle");
const errorMsg = document.getElementById("errorMsg");

// Password toggle
toggle.addEventListener("click", () => {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggle.classList.replace("bx-show", "bx-hide");
  } else {
    passwordField.type = "password";
    toggle.classList.replace("bx-hide", "bx-show");
  }
});

// Login submit
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = passwordField.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    // Redirect to dashboard
    window.location.href = "dashboard.html";
  } catch (error) {
    errorMsg.textContent = error.message;
  }
});
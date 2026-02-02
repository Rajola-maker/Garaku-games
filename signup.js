// Import Firebase functions
import { auth, createUserWithEmailAndPassword, createNewUserDocument } from "./firebaseConfig.js";

// Get form elements
const signupForm = document.getElementById("signupForm");
const passwordField = document.getElementById("password");
const confirmField = document.getElementById("confirmPassword");
const errorMsg = document.getElementById("errorMsg");

// Password toggles
const toggle1 = document.getElementById("toggle1");
const toggle2 = document.getElementById("toggle2");

toggle1.addEventListener("click", () => {
  passwordField.type = passwordField.type === "password" ? "text" : "password";
  toggle1.classList.toggle("bx-show");
  toggle1.classList.toggle("bx-hide");
});

toggle2.addEventListener("click", () => {
  confirmField.type = confirmField.type === "password" ? "text" : "password";
  toggle2.classList.toggle("bx-show");
  toggle2.classList.toggle("bx-hide");
});

// Signup submit
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = passwordField.value;
  const confirm = confirmField.value;

  if (password !== confirm) {
    errorMsg.textContent = "Passwords do not match.";
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Create Firestore document
    await createNewUserDocument(user);

    // Redirect
    window.location.href = "dashboard.html";
  } catch (error) {
    errorMsg.textContent = error.message;
  }
});
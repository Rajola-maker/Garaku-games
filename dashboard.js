import { auth, signOut, onAuthStateChanged, db, getDoc, doc } from "./firebaseConfig.js";

const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // Display user email
    userEmail.textContent = `Logged in as: ${user.email}`;

    // Optional: read user document from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      console.log("User data:", userDoc.data());
      // Example: you could show score/level on dashboard
    }
  } else {
    // Redirect to login if not signed in
    window.location.href = "index.html";
  }
});

// Logout button
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});
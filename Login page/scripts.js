import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCvg1AhjEd9vIiYWgqQlI5BO0jU3AF84t8",
    authDomain: "vitgis-ba14f.firebaseapp.com",
    projectId: "vitgis-ba14f",
    storageBucket: "vitgis-ba14f.appspot.com",
    messagingSenderId: "759209581914",
    appId: "1:759209581914:web:3432c0511eba57eca66763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

// Allowed Email Domains
const allowedDomains = ["vitstudent.ac.in", "vit.ac.in"];

// Utility Function: Check Email Domain
function isAllowedDomain(email) {
    const domain = email.split("@")[1];
    return allowedDomains.includes(domain);
}

// Form Toggles
const loginToggle = document.getElementById("loginToggle");
const registerToggle = document.getElementById("registerToggle");
const loginFormBox = document.getElementById("login-form-box");
const registrationFormBox = document.getElementById("registration-form-box");

loginToggle.addEventListener("click", () => {
    loginFormBox.classList.remove("hidden");
    registrationFormBox.classList.add("hidden");
    loginToggle.classList.add("active");
    registerToggle.classList.remove("active");
});

registerToggle.addEventListener("click", () => {
    registrationFormBox.classList.remove("hidden");
    loginFormBox.classList.add("hidden");
    registerToggle.classList.add("active");
    loginToggle.classList.remove("active");
});

// Login Form Submission
document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const loginBtn = document.getElementById("login-btn");
    loginBtn.disabled = true;

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (!isAllowedDomain(email)) {
        alert("Error: Only VIT emails are allowed.");
        loginBtn.disabled = false;
        return;
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");

        // Redirect to dashboard or another page after successful login
        window.location.href = "/dashboard.html";  // Replace with the URL of your desired page
    } catch (error) {
        alert("Error: " + error.message);
    } finally {
        loginBtn.disabled = false;
    }
});

// Registration Form Submission
document.getElementById("registration-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const registerBtn = document.getElementById("register-btn");
    registerBtn.disabled = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const regNumber = document.getElementById("reg-number").value;
    const phone = document.getElementById("phone").value;
    const profilePic = document.getElementById("profile-pic").files[0];

    if (!isAllowedDomain(email)) {
        alert("Error: Only VIT emails are allowed.");
        registerBtn.disabled = false;
        return;
    }

    try {
        // Convert profile picture to base64 string
        const base64ProfilePic = await convertToBase64(profilePic);

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await sendEmailVerification(user);
        alert("Verification email sent. Please verify to proceed.");

        const userDoc = {
            name,
            email,
            regNumber,
            phone,
            profilePic: base64ProfilePic,  // Save base64 image data
            timestamp: new Date()
        };

        await setDoc(doc(db, "VITians", user.uid), userDoc);
        alert("Registration successful! Verify your email before logging in.");
    } catch (error) {
        alert("Error: " + error.message);
    } finally {
        registerBtn.disabled = false;
    }
});

// Utility function to convert file to base64
function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function goBack() {
    window.history.back();
}

// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase Configuration
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
const auth = getAuth(app);
const db = getFirestore(app);

// Map Firebase error codes to user-friendly messages
const getErrorMessage = (errorCode) => {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Invalid email address. Please check and try again.";
        case "auth/user-disabled":
            return "This account has been disabled. Please contact support.";
        case "auth/user-not-found":
            return "No account found with this email. Please register first.";
        case "auth/wrong-password":
            return "Incorrect password. Please try again.";
        case "auth/email-already-in-use":
            return "This email is already registered. Please login or use a different email.";
        case "auth/weak-password":
            return "Your password is too weak. Please use a stronger password.";
        default:
            return "An unexpected error occurred. Please try again later.";
    }
};

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const loginToggle = document.getElementById('loginToggle');
    const registerToggle = document.getElementById('registerToggle');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginSubmit = document.getElementById('loginSubmit');
    const registerSubmit = document.getElementById('registerSubmit');

    // Toggle between Login and Register Form
    if (loginToggle) {
        loginToggle.addEventListener('click', () => {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        });
    }

    if (registerToggle) {
        registerToggle.addEventListener('click', () => {
            registerForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });
    }

    // Login Functionality
    if (loginSubmit) {
        loginSubmit.addEventListener('click', () => {
            loginSubmit.disabled = true; // Disable the button
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if (!user.emailVerified) {
                        alert('Please verify your email before logging in.');
                        auth.signOut();
                    } else {
                        alert('Login Successful');
                        window.location.href = '../dashboard.html';
                    }
                })
                .catch((error) => {
                    const errorMessage = getErrorMessage(error.code);
                    alert('Login Failed: ' + errorMessage);
                })
                .finally(() => {
                    loginSubmit.disabled = false; // Re-enable the button
                });
        });
    }

    // Register Functionality
    if (registerSubmit) {
        registerSubmit.addEventListener('click', () => {
            registerSubmit.disabled = true; // Disable the button
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const phone = document.getElementById('regPhone').value;
            const regNum = document.getElementById('regRegNum').value;
            const profilePic = document.getElementById('profilePic').files[0];
            const password = document.getElementById('regPassword').value;

            if (!email.endsWith('@vit.ac.in') && !email.endsWith('@vitstudent.ac.in')) {
                alert('Please use a valid VIT email address');
                registerSubmit.disabled = false; // Re-enable the button
                return;
            }

            const reader = new FileReader();
            reader.readAsDataURL(profilePic);

            reader.onloadend = () => {
                const base64Image = reader.result;

                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user;

                        const userDocRef = doc(db, "VITians", user.uid);
                        setDoc(userDocRef, {
                            name,
                            email,
                            phone,
                            regNum,
                            profilePic: base64Image
                        })
                        .then(() => {
                            sendEmailVerification(user)
                                .then(() => {
                                    alert('Verification email sent. Please check your inbox.');
                                })
                                .catch((error) => {
                                    const errorMessage = getErrorMessage(error.code);
                                    alert('Error sending verification email: ' + errorMessage);
                                });
                        })
                        .catch((error) => {
                            const errorMessage = getErrorMessage(error.code);
                            alert('Error saving user data: ' + errorMessage);
                        });
                    })
                    .catch((error) => {
                        const errorMessage = getErrorMessage(error.code);
                        alert('Registration Failed: ' + errorMessage);
                    })
                    .finally(() => {
                        registerSubmit.disabled = false; // Re-enable the button
                    });
            };

            reader.onerror = () => {
                alert('Failed to read profile picture file.');
                registerSubmit.disabled = false; // Re-enable the button
            };
        });
    }
});

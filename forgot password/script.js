// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvg1AhjEd9vIiYWgqQlI5BO0jU3AF84t8",
    authDomain: "vitgis-ba14f.firebaseapp.com",
    projectId: "vitgis-ba14f",
    storageBucket: "vitgis-ba14f.firebasestorage.app",
    messagingSenderId: "759209581914",
    appId: "1:759209581914:web:3432c0511eba57eca66763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get reference to the form and elements
const form = document.getElementById('reset-password-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

// Handle the form submission for password reset
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // Send password reset email using Firebase Authentication
    sendPasswordResetEmail(auth, email)
        .then(() => {
            errorMessage.textContent = '';
            alert('Password reset email sent! Please check your inbox.');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessageText = error.message;

            if (errorCode === 'auth/invalid-email') {
                errorMessage.textContent = 'The email address is not valid.';
            } else if (errorCode === 'auth/user-not-found') {
                errorMessage.textContent = 'No user found with this email address.';
            } else {
                errorMessage.textContent = `Error: ${errorMessageText}`;
            }
        });
});

// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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

// Toggle between Login and Register Form
document.getElementById('loginBtn').addEventListener('click', function () {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
});

document.getElementById('registerBtn').addEventListener('click', function () {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
});

// Login Functionality
document.getElementById('loginSubmit').addEventListener('click', function () {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Check if the email is verified
            if (!user.emailVerified) {
                alert('Please verify your email before logging in.');
                auth.signOut(); // Log out the user if email is not verified
            } else {
                alert('Login Successful');
                window.location.href = '../dashboard.html/index.html'; // Redirect to dashboard
            }
        })
        .catch((error) => {
            const errorMessage = getErrorMessage(error.code);
            alert('Login Failed: ' + errorMessage);
        });
});

// Register Functionality
document.getElementById('registerSubmit').addEventListener('click', function () {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('regPhone').value;
    const regNum = document.getElementById('regRegNum').value;
    const profilePic = document.getElementById('profilePic').files[0];
    const password = document.getElementById('regPassword').value; // Get the password entered by the user

    if (!email.endsWith('@vit.ac.in') && !email.endsWith('@vitstudent.ac.in')) {
        alert('Please use a valid VIT email address');
        return;
    }

    // Convert profile picture to Base64
    const reader = new FileReader();
    reader.readAsDataURL(profilePic); // Read the file as Base64

    reader.onloadend = function () {
        const base64Image = reader.result; // This is the Base64 encoded image

        // Create user with Firebase Authentication
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Save user data in Firestore under the VITians collection
                const userDocRef = doc(db, "VITians", user.uid);
                setDoc(userDocRef, {
                    name: name,
                    email: email,
                    phone: phone,
                    regNum: regNum,
                    profilePic: base64Image, // Save the Base64 encoded profile picture
                })
                .then(() => {
                    // Send email verification
                    sendEmailVerification(user)
                        .then(() => {
                            alert('Verification link sent to your email');
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
            });
    };

    reader.onerror = function () {
        alert('Failed to read profile picture file');
    };
});

// Monitor Authentication State Changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        if (!user.emailVerified) {
            alert('Please verify your email before logging in.');
            auth.signOut(); // Automatically log the user out if email is not verified
        }
    }
});

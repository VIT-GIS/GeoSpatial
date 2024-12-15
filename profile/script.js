// script.js

// Import necessary Firebase and QRCode modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration
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
const db = getFirestore(app);
const auth = getAuth(app);

// Check user authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User authenticated, UID:", user.uid); // Log the UID to check if it's fetched correctly
        // Fetch user data from Firestore
        fetchUserProfile(user.uid);
    } else {
        // Redirect to login page if not authenticated
        window.location.href = '../Login page/index.html';
    }
});

// Fetch user data from Firestore
function fetchUserProfile(uid) {
    const userRef = doc(db, "VITians", uid);

    getDoc(userRef).then((docSnap) => {
        if (docSnap.exists()) {
            const userData = docSnap.data();

            console.log("User data from Firestore:", userData); // Log the user data from Firestore

            // Populate profile details
            document.getElementById('name').innerText = "Name: " + userData.name;
            document.getElementById('regNum').innerText = "Reg No: " + userData.regNum;
            document.getElementById('email').innerText = "Email: " + userData.email;
            document.getElementById('phone').innerText = "Phone: " + userData.phone;

            // Set profile picture
            document.getElementById('profilePic').src = userData.profilePic;

            // Generate QR code with UID
            generateQRCode(uid);
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

// Generate QR code for UID
function generateQRCode(uid) {
    if (!uid) {
        console.error("UID is undefined! Cannot generate QR code.");
        return;
    }

    const qrCodeElement = document.getElementById('qrCode');
    qrCodeElement.innerHTML = ""; // Clear the previous QR code

    console.log("Generating QR code for UID:", uid); // Check the UID in the console

    const qrCode = new QRCode(qrCodeElement, {
        text: uid,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

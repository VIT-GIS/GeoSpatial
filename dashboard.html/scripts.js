import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvg1AhjEd9vIiYWgqQlI5BO0jU3AF84t8",
    authDomain: "vitgis-ba14f.firebaseapp.com",
    projectId: "vitgis-ba14f",
    storageBucket: "vitgis-ba14f.storage.app",
    messagingSenderId: "759209581914",
    appId: "1:759209581914:web:3432c0511eba57eca66763"
};

// Initialize Firebase and Firebase Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Load User Details from Firestore and Display
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, fetch user data from Firestore
        const userRef = doc(db, "VITians", user.uid);
        getDoc(userRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    const userNameElement = document.getElementById("userName");
                    const userPhotoElement = document.getElementById("userPhoto");

                    // Set the user name and profile picture
                    if (userNameElement) userNameElement.innerText = userData.name || "User";
                    if (userPhotoElement) userPhotoElement.src = userData.profilePic || "user-placeholder.png";
                } else {
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.error("Error fetching user data: ", error);
            });
    } else {
        // Redirect to login page if the user is not authenticated
        window.location.href = "../Login page/index.html";
    }
});

// Logout Functionality
document.getElementById("logoutBtn").addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            // Redirect to login page after successful logout
            window.location.href = "../Login page/index.html";
        })
        .catch((error) => {
            console.error("Error logging out: ", error);
        });
});

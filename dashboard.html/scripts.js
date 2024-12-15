import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, doc, getDoc, collection, query, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

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

        // Fetch notice data from Firestore
        const noticeRef = collection(db, "VITian Notice");
        const q = query(noticeRef);
        getDocs(q)
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const noticeData = doc.data();

                    const noticeTitleElement = document.getElementById("noticeTitle");
                    const noticeContentElement = document.getElementById("noticeContent");
                    const noticePostedByElement = document.getElementById("noticePostedBy");
                    const noticeTimeElement = document.getElementById("noticeTime");

                    // Set the notice details
                    if (noticeTitleElement) noticeTitleElement.innerText = noticeData.title || "No Title";
                    if (noticeContentElement) noticeContentElement.innerText = noticeData.content || "No Content";
                    if (noticePostedByElement) noticePostedByElement.innerText = "Posted by: " + (noticeData.postedBy || "Unknown");
                    if (noticeTimeElement) noticeTimeElement.innerText = "Time: " + formatTimestamp(noticeData.createdAt);
                });
            })
            .catch((error) => {
                console.error("Error fetching notice data: ", error);
            });
    } else {
        // Redirect to login page if the user is not authenticated
        window.location.href = "https://geospatialvit.site/";
    }
});

// Logout Functionality
document.getElementById("logoutBtn").addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            // Redirect to login page after successful logout
            window.location.href = "https://geospatialvit.site/";
        })
        .catch((error) => {
            console.error("Error logging out: ", error);
        });
});

// Function to format the timestamp to a readable date format
function formatTimestamp(timestamp) {
    const date = timestamp.toDate(); // Converts Firestore timestamp to JavaScript Date object
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
}

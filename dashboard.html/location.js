// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvg1AhjEd9vIiYWgqQlI5BO0jU3AF84t8",
    authDomain: "vitgis-ba14f.firebaseapp.com",
    projectId: "vitgis-ba14f",
    storageBucket: "vitgis-ba14f.storage.app",
    messagingSenderId: "759209581914",
    appId: "1:759209581914:web:3432c0511eba57eca66763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

// Function to check if user is logged in and get location permission
onAuthStateChanged(auth, (user) => {
    if (user) {
        // If the user is logged in, start location tracking
        startLocationTracking(user);
    } else {
        // If no user is logged in, redirect to login page
        window.location.href = "../Login page/index.html";
    }
});

// Function to handle location tracking
function startLocationTracking(user) {
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
        // Try to get the user's location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Location granted, start updating location every 2 seconds
                const updateLocation = () => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    updateLocationInFirestore(user.uid, latitude, longitude);
                };

                // Set an interval to update location every 2 seconds
                setInterval(() => {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const latitude = position.coords.latitude;
                            const longitude = position.coords.longitude;
                            updateLocationInFirestore(user.uid, latitude, longitude);
                        },
                        (error) => {
                            logoutUser();
                        }
                    );
                }, 2000);

                updateLocation(); // initial location update
            },
            (error) => {
                logoutUser();
            }
        );
    } else {
        // If geolocation is not supported, log out the user
        logoutUser();
    }
}

// Function to update the user's location in Firestore
function updateLocationInFirestore(userId, latitude, longitude) {
    const userLocationRef = doc(db, "VITian_location", userId);
    setDoc(userLocationRef, {
        latitude: latitude,
        longitude: longitude,
        timestamp: new Date().toISOString()
    }).catch((error) => {
        // Handle the error silently if needed
    });
}

// Function to log out the user and redirect to login
function logoutUser() {
    signOut(auth).then(() => {
        window.location.href = "../Login page/index.html"; // Redirect to login page
    }).catch((error) => {
        // Handle the error silently if needed
    });
}

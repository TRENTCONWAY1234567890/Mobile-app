// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzXaspazZ_9Amj3nbt5RyfVhzU6nD62Ic",
  authDomain: "workoutchallengeapp.firebaseapp.com",
  projectId: "workoutchallengeapp",
  storageBucket: "workoutchallengeapp.appspot.com",
  messagingSenderId: "562724034871",
  appId: "1:562724034871:web:a27c3f2e57004c5030a2b2",
  measurementId: "G-LVD8QNMZ4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, analytics };
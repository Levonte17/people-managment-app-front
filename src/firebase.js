// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { 
    signOut, 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6CCVBxuLqg8UjR2dn9jryGrhbev20VxA",
  authDomain: "people-management-3d5a4.firebaseapp.com",
  projectId: "people-management-3d5a4",
  storageBucket: "people-management-3d5a4.appspot.com",
  messagingSenderId: "210624549401",
  appId: "1:210624549401:web:c40221dd38afe9355e1088",
  measurementId: "G-0MHT2XCMVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize auth object
const auth = getAuth(app);

// config our provider
const provider = new GoogleAuthProvider();

// set up login function
function login() {
    return signInWithPopup(auth, provider);
}

// set up logout function
function logout() {
    return signOut(auth);
}

// export our functionality to be used within our components
export { auth, login, logout };
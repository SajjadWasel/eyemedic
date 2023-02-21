// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsASG9v1I2P1A2ghVvx8kHPpZCHZR8dhY",
  authDomain: "eyemedic-994a5.firebaseapp.com",
  projectId: "eyemedic-994a5",
  storageBucket: "eyemedic-994a5.appspot.com",
  messagingSenderId: "379663354091",
  appId: "1:379663354091:web:b34a13360d68ecd64a96ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcbAsfDq1rFddF_DqjkkCRd5TROlAZV0U",
  authDomain: "ema-john-shopping-app-bb7c3.firebaseapp.com",
  projectId: "ema-john-shopping-app-bb7c3",
  storageBucket: "ema-john-shopping-app-bb7c3.appspot.com",
  messagingSenderId: "226295548013",
  appId: "1:226295548013:web:a13145fcabcec4e27b5764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
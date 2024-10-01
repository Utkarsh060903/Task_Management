// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMeQhCQYh_G62wFFRS9wG7Dm5gHIX7vMs",
    authDomain: "taskmanager-9a187.firebaseapp.com",
    projectId: "taskmanager-9a187",
    storageBucket: "taskmanager-9a187.appspot.com",
    messagingSenderId: "273143324012",
    appId: "1:273143324012:web:415a04d3fd0745fb62a749",
    measurementId: "G-JTM5HG4EFJ"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
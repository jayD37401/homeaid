// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhZ6IdBInqnrRX84RCaoC7icVxETINe0s",
  authDomain: "home-aid-b5db6.firebaseapp.com",
  projectId: "home-aid-b5db6",
  storageBucket: "home-aid-b5db6.appspot.com",
  messagingSenderId: "904938957989",
  appId: "1:904938957989:web:c7b9ffe7d761d13d51314c",
  databaseURL: "https://home-aid-b5db6-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

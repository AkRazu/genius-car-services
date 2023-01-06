import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo8HbyaN3avvzea7DxeYmKbQ3xmc6y9Sw",
  authDomain: "genius-car-services-52ff8.firebaseapp.com",
  projectId: "genius-car-services-52ff8",
  storageBucket: "genius-car-services-52ff8.appspot.com",
  messagingSenderId: "794539347653",
  appId: "1:794539347653:web:785d82a6d16714c12e2aac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;
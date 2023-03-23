import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoanwj9OYnT45hd-5QsNPw1hKLIytrMgs",
  authDomain: "elchat-53a7e.firebaseapp.com",
  projectId: "elchat-53a7e",
  storageBucket: "elchat-53a7e.appspot.com",
  messagingSenderId: "794289085810",
  appId: "1:794289085810:web:664a43a2f0f926c1ec51eb",
  measurementId: "G-NG578VQ75S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;

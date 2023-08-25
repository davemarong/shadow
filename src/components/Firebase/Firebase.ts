// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import type { FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyB8aiEOMGqvEFMdpK6pFKpey9b2xeN0TSI",
  authDomain: "shadow-side-78127.firebaseapp.com",
  projectId: "shadow-side-78127",
  storageBucket: "shadow-side-78127.appspot.com",
  messagingSenderId: "779042424487",
  appId: "1:779042424487:web:fafe80a4a601cfa942fd82",
  measurementId: "G-8RTES7EZTQ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;

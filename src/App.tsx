import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./App.css";
import Header from "./components/Header/Header";
import { Emotions } from "./components/Emotions/Emotions";
import { Emotion } from "./assets/types/Types";
import { Summary } from "./components/Summary/Summary";
import { TodayForm } from "./components/TodayForm/TodayForm";

function App() {
  const [emotion, setEmotion] = useState<Emotion>({ title: "", id: 0 });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<null | string>("");
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB8aiEOMGqvEFMdpK6pFKpey9b2xeN0TSI",
    authDomain: "shadow-side-78127.firebaseapp.com",
    projectId: "shadow-side-78127",
    storageBucket: "shadow-side-78127.appspot.com",
    messagingSenderId: "779042424487",
    appId: "1:779042424487:web:fafe80a4a601cfa942fd82",
    measurementId: "G-8RTES7EZTQ",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <>
      <Header>Choose todays emotion</Header>
      <Emotions setEmotion={setEmotion} />
      <Summary emotion={emotion} />
      <TodayForm setTitle={setTitle} setDescription={setDescription} />
    </>
  );
}

export default App;

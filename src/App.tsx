import { useState } from "react";
import { getAnalytics } from "firebase/analytics";
import app from "./components/Firebase/Firebase";
import "./App.css";
import Header from "./components/Header/Header";
import { Emotions } from "./components/Emotions/Emotions";
import { Emotion } from "./assets/types/Types";
import { Summary } from "./components/Summary/Summary";
import { TodayForm } from "./components/TodayForm/TodayForm";
import { Login } from "./components/Login/Login";
import { Calendar } from "./components/Calendar/Calendar";
import {
  useAuthState,
  useSignInWithMicrosoft,
} from "react-firebase-hooks/auth";
import auth from "./components/Firebase/Auth";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { SignUp } from "./components/Login/SignUp";

function App() {
  const [emotion, setEmotion] = useState<Emotion>({ title: "", id: 0 });

  const provider = new GoogleAuthProvider();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<null | string>("");

  const analytics = getAnalytics(app);
  const [user] = useAuthState(auth);
  console.log({ user });
  return (
    <>
      {user && (
        <>
          <Header>Choose todays emotion</Header>
          <Emotions setEmotion={setEmotion} />
          <Summary emotion={emotion} />
          <TodayForm setTitle={setTitle} setDescription={setDescription} />
          <Calendar />
        </>
      )}

      {!user && <SignUp />}
    </>
  );
}

export default App;

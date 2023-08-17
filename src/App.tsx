import { useState } from "react";
import { auth, db } from "./components/Firebase/Firebase";
import "./App.css";
import Header from "./components/Header/Header";
import { Emotions } from "./components/Emotions/Emotions";
import { Diary, Emotion } from "./assets/types/Types";
import { Summary } from "./components/Summary/Summary";
import { TodayForm } from "./components/TodayForm/TodayForm";
import { Calendar } from "./components/Calendar/Calendar";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignUp } from "./components/Login/SignUp";
import { Button } from "./components/Buttons/Button";
import { addDoc, collection } from "firebase/firestore";
import { SignOut } from "./components/SignOut/SignOut";

function App() {
  const [emotion, setEmotion] = useState<Emotion>({ title: "", id: 0 });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<null | string>("");
  const [targetPerson, setTargetPerson] = useState<null | string>("");
  const [diary, setDiary] = useState<Diary[]>([]);
  const [user] = useAuthState(auth);

  const handleSubmit = async () => {
    const docRef = await addDoc(collection(db, `users/${user?.uid}/diary`), {
      title: title,
      description: description,
      emotion: emotion.title,
      date: new Date(),
      target_person: targetPerson,
    });
    console.log(docRef);
    // setDiary((prev) => [
    //   ...prev,
    //   {
    //     title: title,
    //     description: description,
    //     emotion: emotion.title,
    //     date: "new Date()",
    //     target_person: targetPerson,
    //   },
    // ]);
  };
  console.log(diary);
  return (
    <>
      {!user && <SignUp setDiary={setDiary} />}
      {user && (
        <>
          <SignOut />
          <Header>Choose todays emotion</Header>
          <Emotions setEmotion={setEmotion} />
          <Summary emotion={emotion} />
          <TodayForm
            setTitle={setTitle}
            setDescription={setDescription}
            setTargetPerson={setTargetPerson}
          />
          <Button func={handleSubmit}>Save</Button>
          <Calendar diary={diary} />
        </>
      )}
    </>
  );
}

export default App;

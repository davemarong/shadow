import { useState, useEffect } from "react";
import { auth, db } from "./components/Firebase/Firebase";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import { Outlet } from "react-router-dom";
import { Emotion } from "./routes/DiaryEntry/Emotion";
import { Form } from "./routes/DiaryEntry/Form";
import { collection, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { Diary, Emotion as EmotionType } from "./assets/types/Types";
import { Calendar } from "./routes/DiaryEntry/Calendar";
import { GlobalLayout } from "./routes/DiaryEntry/GlobalLayout";

function App() {
  const [emotion, setEmotion] = useState<EmotionType>({ title: "", id: 0 });

  const [diary, setDiary] = useState<Diary[]>([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchDiary = async () => {
      if (user) {
        const querySnapshot = await getDocs(
          collection(db, "users", user.uid, "diary")
        );
        const diaries = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const date = new Date();
          return {
            title: data.title,
            description: data.description,
            emotion: data.emotion,
            target_person: data.person,
            date: date.toDateString(),
          };
        });
        setDiary(diaries);
      }
    };
    fetchDiary();
  }, [user]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "Diary_Entry",
          element: <Outlet />,
          children: [
            {
              path: "Emotion",
              element: <Emotion setEmotion={setEmotion} />,
            },
            {
              path: "Form",
              element: <Form emotion={emotion} />,
            },
          ],
        },
        {
          path: "Calendar",
          element: <Calendar diary={diary} />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

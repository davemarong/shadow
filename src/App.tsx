import { useState, useEffect } from "react";
import { auth, db } from "./components/Firebase/Firebase";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import { Outlet } from "react-router-dom";
import { Emotion } from "./routes/DiaryEntry/Emotion";
import { Form } from "./routes/DiaryEntry/Form";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { Diary, Emotion as EmotionType } from "./assets/types/Types";
import { Calendar } from "./routes/Diary/Calendar";
import { GlobalLayout } from "./routes/DiaryEntry/GlobalLayout";
import { Diary_Details } from "./routes/Diary/Diary_Details";

function App() {
  const [emotion, setEmotion] = useState<EmotionType>({ title: "", id: 0 });

  const [diary, setDiary] = useState<Diary[]>([]);

  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchDiary = async () => {
      if (user) {
        const querySnapshot = await getDocs(
          query(
            collection(db, "users", user.uid, "diary"),
            orderBy("date", "desc")
          )
        );

        const diaries = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            title: data.title,
            description: data.description,
            emotion: data.emotion,
            target_person: data.target_person,
            date: new Date(data.date.seconds * 1000).toDateString(),
            doc_id: doc.id,
          };
        });
        console.log(diaries);

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
        {
          path: "Calendar/:diaryId",
          element: <Diary_Details diary={diary} />,
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

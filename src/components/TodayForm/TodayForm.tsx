import React, { useState } from "react";
import { Button } from "../Buttons/Button";
import { Emotion } from "../../assets/types/Types";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db, auth, analytics } from "../Firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { logEvent } from "firebase/analytics";

interface Props {
  emotion: Emotion;
}
export const TodayForm = ({ emotion }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<null | string>("");
  const [targetPerson, setTargetPerson] = useState<null | string>("");
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleTargetPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetPerson(e.target.value);
  };
  const handleSubmit = async () => {
    setLoading(true);
    const docRef = await addDoc(collection(db, `users/${user?.uid}/diary`), {
      title: title,
      description: description,
      emotion: emotion.title,
      createdAt: serverTimestamp(),
      target_person: targetPerson,
    });
    logEvent(analytics, "diaryEntry_added", {
      user: user?.displayName,
      emotion: emotion.title,
    });
    setLoading(false);
    console.log(docRef);
  };
  if (loading) {
    return <img className="mx-auto" src="/spinner.svg" />;
  }
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center m-5 ">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          className="mt-1 w-64  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
          type="text"
          onChange={handleTitle}
        />
      </div>
      <div className="container mx-auto flex flex-col items-center m-5">
        <label htmlFor="targetPerson">Target person</label>
        <input
          id="targetPerson"
          className="mt-1 w-64  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
          type="text"
          onChange={handleTargetPerson}
        />
      </div>
      <div className="container mx-auto flex flex-col items-center m-5">
        <label htmlFor="description">Description</label>
        <textarea
          name="postContent"
          id="description"
          className="mt-1 w-96  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
          onChange={handleDescription}
          rows={6}
          cols={40}
        />
      </div>
      <Button func={handleSubmit}>Save</Button>
    </div>
  );
};

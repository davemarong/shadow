import React from "react";
import { TodayForm } from "../../components/TodayForm/TodayForm";
import { Button } from "../../components/Buttons/Button";
import Header from "../../components/Header/Header";
import { Emotion } from "../../assets/types/Types";

interface Props {
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  setTargetPerson: (value: string) => void;
  handleSubmit: () => void;
  emotion: Emotion;
}
export const Form = ({
  setTitle,
  setDescription,
  setTargetPerson,
  handleSubmit,
  emotion,
}: Props) => {
  return (
    <>
      <p className="text-3xl text-center">{emotion.title}</p>
      <TodayForm
        setTitle={setTitle}
        setDescription={setDescription}
        setTargetPerson={setTargetPerson}
      />
      <Button func={handleSubmit}>Save</Button>
    </>
  );
};

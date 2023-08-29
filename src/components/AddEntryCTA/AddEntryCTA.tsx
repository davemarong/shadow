import React from "react";
import { Button } from "../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";

export const AddEntryCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <p className="text-2xl text-center">Your diary is empty 😮 </p>
      <Button
        func={() => {
          navigate("/Diary_Entry/Emotion");
        }}
      >
        Add entry
      </Button>
    </div>
  );
};

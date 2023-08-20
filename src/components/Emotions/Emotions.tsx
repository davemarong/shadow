import React from "react";
import { emotions_data } from "../../assets/constants/Emotions";
import { Emotion } from "../../assets/types/Types";
import { useNavigate } from "react-router-dom";

interface Props {
  setEmotion: React.Dispatch<React.SetStateAction<Emotion>>;
}
export const Emotions = ({ setEmotion }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto gap-10 columns-xs">
      {emotions_data.map((emotion) => {
        return (
          <div key={emotion.id} className="flex justify-center">
            <button
              className="card md:w-full w-2/3 "
              onClick={() => {
                setEmotion(emotion);
                navigate("/Diary_Entry/Form");
              }}
            >
              {emotion.title}
            </button>
          </div>
        );
      })}
    </div>
  );
};

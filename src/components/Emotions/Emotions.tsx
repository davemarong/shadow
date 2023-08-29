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
    <div className="container mt-8 mx-auto gap-2 columns-2 sm:columns-3 max-w-2xl">
      {emotions_data.map((emotion) => {
        return (
          <div key={emotion.id} className="flex items-center justify-center">
            <button
              className="card md:w-full w-96"
              onClick={() => {
                setEmotion(emotion);
                navigate("/Diary_Entry/Form");
              }}
            >
              <img className="w-12 mx-auto pb-2" src={emotion.img} />
              {emotion.title}
            </button>
          </div>
        );
      })}
    </div>
  );
};

import React from "react";
import { emotions_data } from "../../assets/constants/Emotions";
import { Emotion } from "../../assets/types/Types";

interface Props {
  setEmotion: React.Dispatch<React.SetStateAction<Emotion>>;
}
export const Emotions = ({ setEmotion }: Props) => {
  return (
    <div className="container mx-auto gap-10 columns-xs">
      {emotions_data.map((emotion) => {
        return (
          <div key={emotion.id}>
            <button
              className="card w-full"
              onClick={() => {
                setEmotion(emotion);
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

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
          <div key={emotion.id} className="flex justify-center">
            <button
              className="card md:w-full w-2/3 "
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

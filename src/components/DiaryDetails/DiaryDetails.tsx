import { Emoji_Enum } from "../../assets/constants/Emotions";
import { Diary } from "../../assets/types/Types";

interface Props {
  selectedDiary: Diary;
}
export const DiaryDetails = ({ selectedDiary }: Props) => {
  return (
    <div className="flex justify-center m-4">
      <div className="card m-4 p-3 w-full max-w-2xl gap-4 flex">
        <img className="w-16 h-16" src={Emoji_Enum[selectedDiary.emotion]} />
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <p className="text-2xl">{selectedDiary.emotion}</p>
            <p className="text-xs">{selectedDiary.date}</p>
          </div>
          <p className="text-md width-full">{selectedDiary.target_person}</p>
          <p className="text-md width-full">{selectedDiary.title}</p>
          <p className="text-md width-full">{selectedDiary.description}</p>
        </div>
      </div>
    </div>
  );
};

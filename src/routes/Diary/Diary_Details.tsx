import { useEffect, useState } from "react";
import { Back } from "../../components/Buttons/Back";
import { Diary, Emotions } from "../../assets/types/Types";
import { useParams } from "react-router-dom";
import { Emoji_Enum } from "../../assets/constants/Emotions";

interface Props {
  diary: Diary[];
}
export const Diary_Details = ({ diary }: Props) => {
  const { diaryId } = useParams();

  const [selectedDiary, setSelectedDiary] = useState<Diary>({
    date: "",
    description: "",
    doc_id: "",
    emotion: Emotions.Anger,
    target_person: "",
    title: "",
  });
  useEffect(() => {
    const diaryFound = diary.find((item) => item.doc_id === diaryId);
    if (diaryFound) {
      setSelectedDiary(diaryFound);
    }
  }, []);
  return (
    <>
      <Back />
      <div className="card m-4 p-3 max-w-2xl gap-4 flex">
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
    </>
  );
};

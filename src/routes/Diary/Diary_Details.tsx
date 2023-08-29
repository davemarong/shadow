import { useEffect, useState } from "react";
import { Back } from "../../components/Buttons/Back";
import { Diary, Emotions } from "../../assets/types/Types";
import { useParams } from "react-router-dom";
import { DiaryDetails } from "../../components/DiaryDetails/DiaryDetails";

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
    newly_added: false,
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
      <DiaryDetails selectedDiary={selectedDiary} />
    </>
  );
};

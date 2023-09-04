import { Diary } from "../../assets/types/Types";
import { AddFirstEntry } from "../../components/AddFirstEntry/AddFirstEntry";
import { Calendar as CalenderComp } from "../../components/Calendar/Calendar";
import { useNavigate } from "react-router-dom";

interface Props {
  diary: Diary[];
}
export const Calendar = ({ diary }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      {diary.length === 0 && <AddFirstEntry />}
      <div className="flex justify-center m-4">
        <button
          onClick={() => {
            navigate("/Diary_Entry/Emotion");
          }}
        >
          <img className="w-10" src="/add.svg" />
        </button>
      </div>
      <CalenderComp diary={diary} />
    </>
  );
};

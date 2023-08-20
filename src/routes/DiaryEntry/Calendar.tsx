import { Diary } from "../../assets/types/Types";
import { Calendar as CalenderComp } from "../../components/Calendar/Calendar";
interface Props {
  diary: Diary[];
}
export const Calendar = ({ diary }: Props) => {
  return (
    <div>
      <CalenderComp diary={diary} />
    </div>
  );
};

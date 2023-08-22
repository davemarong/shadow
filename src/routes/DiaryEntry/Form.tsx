import { TodayForm } from "../../components/TodayForm/TodayForm";
import { Emotion } from "../../assets/types/Types";
import { Back } from "../../components/Buttons/Back";

interface Props {
  emotion: Emotion;
}
export const Form = ({ emotion }: Props) => {
  return (
    <>
      <Back />
      <p className="text-3xl text-center underline underline-offset-8 decoration-2 decoration-indigo-700 mb-8">
        {emotion.title}
      </p>
      <TodayForm emotion={emotion} />
    </>
  );
};

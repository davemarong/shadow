import { Emotion } from "../../assets/types/Types";

interface Props {
  emotion: Emotion;
}
export const Summary = ({ emotion }: Props) => {
  return (
    <div>
      <p>Todays emotion:</p>
      <p>{emotion.title}</p>
    </div>
  );
};

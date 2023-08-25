import Header from "../../components/Header/Header";
import { Emotions } from "../../components/Emotions/Emotions";
import { Emotion as EmotionType } from "../../assets/types/Types";

interface Props {
  setEmotion: React.Dispatch<React.SetStateAction<EmotionType>>;
}
export const Emotion = ({ setEmotion }: Props) => {
  return (
    <>
      <Header>Choose todays emotion</Header>
      <Emotions setEmotion={setEmotion} />
    </>
  );
};

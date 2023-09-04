import { Emoji_Enum } from "../../assets/constants/Emotions";
import { Diary } from "../../assets/types/Types";
import { useNavigate } from "react-router-dom";

interface Props {
  diary: Diary[];
}
export const Calendar = ({ diary }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center m-4">
      {diary?.map((item) => {
        return (
          <div
            onClick={() => {
              navigate(`/Calendar/${item.doc_id}`);
            }}
            key={item.title}
            className={`card m-4 ${
              item.newly_added ? "border border-lime-400" : ""
            } p-3 w-full max-w-2xl gap-4 flex`}
          >
            <div className={`  p-3 w-full max-w-2xl gap-4 flex`}>
              <img className="w-16" src={Emoji_Enum[item.emotion]} />
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <p className="text-2xl">{item.emotion}</p>
                  <p className="text-xs">{item.date}</p>
                </div>
                <p className="text-md width-full">{item.title}</p>
              </div>
            </div>
            {item.newly_added && <p className="text-xs">NEW!</p>}
          </div>
        );
      })}
    </div>
  );
};

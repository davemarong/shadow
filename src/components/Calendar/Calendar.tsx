import { Diary } from "../../assets/types/Types";

interface Props {
  diary: Diary[];
}
export const Calendar = ({ diary }: Props) => {
  return (
    <div>
      {diary?.map((item) => {
        return (
          <div key={item.description} className="card text-black">
            <p className="text-black">{item.title}</p>
            <p className="text-black">{item.target_person}</p>
            <p className="text-black">{item.date}</p>
            <p className="text-black">{item.emotion}</p>
            <p className="text-black">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

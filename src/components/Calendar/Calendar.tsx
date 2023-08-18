import { Diary } from "../../assets/types/Types";

interface Props {
  diary: Diary[];
}
export const Calendar = ({ diary }: Props) => {
  return (
    <div>
      {diary?.map((item) => {
        return (
          <div key={item.description} className="card">
            <p>{item.title}</p>
            <p>{item.target_person}</p>
            <p>{item.date}</p>
            <p>{item.emotion}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

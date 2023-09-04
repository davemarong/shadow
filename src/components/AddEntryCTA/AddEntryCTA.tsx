import { useNavigate } from "react-router-dom";

export const AddEntryCTA = () => {
  const navigate = useNavigate();

  return (
    // <div className="flex justify-center ">
    <div
      className="flex justify-center"
      onClick={() => {
        navigate("/Diary_Entry/Emotion");
      }}
    >
      <div className="card m-4 p-5 w-full max-w-2xl flex flex-col gap-3 items-center">
        <p className="text-center text-lg">
          {" "}
          Did you experience any dark emotion today?
        </p>

        <img className="w-10" src="/add.svg" />
      </div>
      {/* </div> */}
    </div>
  );
};

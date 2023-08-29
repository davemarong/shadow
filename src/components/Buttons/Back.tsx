import { useNavigate } from "react-router-dom";

export const Back = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto">
      <button
        className="m-3"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img className="w-10 fill-blue" src="/back-button.svg" />
      </button>
    </div>
  );
};

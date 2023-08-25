import { useNavigate } from "react-router-dom";

export const Back = () => {
  const navigate = useNavigate();
  return (
    <button
      className="m-3"
      onClick={() => {
        navigate(-1);
      }}
    >
      <img className="w-10 fill-blue" src="/back-button.svg" />
    </button>
  );
};

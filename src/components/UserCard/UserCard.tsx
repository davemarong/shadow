import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase";
import { Diary } from "../../assets/types/Types";

interface Props {
  diary: Diary[];
}
export const UserCard = ({ diary }: Props) => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="flex justify-center">
      <div className="card m-4 p-6 w-full max-w-2xl">
        <p className="text-center">Name: {user?.displayName}</p>
        <p className="text-center">Email: {user?.email}</p>
        <p className="text-center">Diaries entries: {diary.length}</p>
      </div>
    </div>
  );
};

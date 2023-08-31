import { UserCard } from "../components/UserCard/UserCard";
import { SignOut } from "../components/SignOut/SignOut";
import { Diary } from "../assets/types/Types";

interface Props {
  diary: Diary[];
}
export const Account = ({ diary }: Props) => {
  return (
    <>
      <UserCard diary={diary} />
      <SignOut />
    </>
  );
};

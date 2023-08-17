import { auth } from "../Firebase/Firebase";
import { Button } from "../Buttons/Button";

export const SignOut = () => {
  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <div>
      <Button func={handleSignOut}>SignOut</Button>
    </div>
  );
};

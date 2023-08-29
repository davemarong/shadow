import { auth } from "../components/Firebase/Firebase";
import "../App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignUp } from "../components/Login/SignUp";
import { Outlet } from "react-router-dom";
import { Quotes } from "../components/Quotes/Quotes";

function Home() {
  const [user] = useAuthState(auth);

  return (
    <>
      {!user && <SignUp />}
      {/* {user && ( */}
      <>
        <Quotes />
        <Outlet />
      </>
      {/* )} */}
    </>
  );
}

export default Home;

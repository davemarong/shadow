import { auth } from "../components/Firebase/Firebase";
import "../App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignUp } from "../components/Login/SignUp";
import { Outlet } from "react-router-dom";
import { Quotes } from "../components/Quotes/Quotes";
import { AddEntryCTA } from "../components/AddEntryCTA/AddEntryCTA";

function Home() {
  const [user] = useAuthState(auth);

  return (
    <>
      {!user && <SignUp />}
      {/* {user && ( */}
      <>
        <Quotes />
        <AddEntryCTA />
        <Outlet />
      </>
      {/* )} */}
    </>
  );
}

export default Home;

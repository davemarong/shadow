import { auth } from "../components/Firebase/Firebase";
import "../App.css";
import Header from "../components/Header/Header";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignUp } from "../components/Login/SignUp";
import { SignOut } from "../components/SignOut/SignOut";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";

function Home() {
  const [user] = useAuthState(auth);

  return (
    <>
      {!user && <SignUp />}
      {user && (
        <>
          <Nav />
          <SignOut />

          <Outlet />
        </>
      )}
    </>
  );
}

export default Home;

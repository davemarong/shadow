import { useAuthState } from "react-firebase-hooks/auth";
import { nav_items } from "./NavItems";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
export const Nav = () => {
  const [user] = useAuthState(auth);
  return (
    <ul className="flex justify-center items-center gap-5">
      {nav_items.map((item) => {
        return (
          <Link key={item.id} to={item.path}>
            <button className="border border-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-900 focus:outline-none focus:shadow-outline">
              {item.title}
            </button>
          </Link>
        );
      })}
      {user && (
        <Link to="/account">
          <img className="w-10" src="/account.svg" />
        </Link>
      )}
    </ul>
  );
};

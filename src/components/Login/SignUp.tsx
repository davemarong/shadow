import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Auth";
export const SignUp = () => {
  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    const response = await signInWithPopup(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(response);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = response.user;
    // IdP data available using getAdditionalUserInfo(result)
    console.log({ response });
    console.log({ credential });
    console.log({ token });
    console.log({ user });
    // ...
  };
  return (
    <div>
      <button
        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        onClick={handleSignIn}
      >
        Sign In with Google
      </button>
    </div>
  );
};

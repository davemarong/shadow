import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

import { useEffect } from "react";
import auth from "../Firebase/Auth";

export const Login = () => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    ui.start("#firebaseui-auth-container", {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // Action if the user is authenticated successfully
          return true;
        },
        uiShown: function () {
          // This is what should happen when the form is full loaded. In this example, I hide the loader element.
          document.getElementById("loader")!.style.display = "none";
        },
      },
      signInSuccessUrl: "http://localhost:5173/", // This is where should redirect if the sign in is successful.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true,
        },
      ],
      tosUrl: "https://www.example.com/terms-conditions", // URL to you terms and conditions.
      privacyPolicyUrl: function () {
        // URL to your privacy policy
        window.location.assign("https://www.example.com/privacy-policy");
      },
    });
  }, []);

  return (
    <>
      <h1 className="text-center my-3 title">Login Page</h1>
      <div id="firebaseui-auth-container"></div>
      <div id="loader" className="text-center">
        Loading form
      </div>
    </>
  );
};

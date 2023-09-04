import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

import { auth, db } from "../Firebase/Firebase";
import { getDoc, setDoc, doc } from "firebase/firestore";
import google from "/google.svg";
export const SignUp = () => {
  const handleSignIn = async (ExternalSystem: string) => {
    let provider;
    if (ExternalSystem === "Google") {
      provider = new GoogleAuthProvider();
    } else {
      // (ExternalSystem === "Facebook")
      provider = new FacebookAuthProvider();
    }

    const response = await signInWithPopup(auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(response);
    // const token = credential?.accessToken;
    // The signed-in user info.
    const user = response.user;
    // IdP data available using getAdditionalUserInfo(result)

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
      });
    } else {
      console.log(docSnap.data());

      // const querySnapshot = await getDocs(
      //   collection(db, "users", user.uid, "diary")
      // );
      // const diaries = querySnapshot.docs.map((doc) => {
      //   const data = doc.data();
      //   return {
      //     title: data.title,
      //     description: data.description,
      //     emotion: data.emotion,
      //     target_person: data.person,
      //     date: "",
      //   };
      // });
      // console.log(diaries);
      // setDiary(diaries);
    }

    console.log({ user });
  };
  const providers = [
    {
      provider: "Google",
      icon: google,
    },
    // {
    //   provider: "Facebook",
    //   icon: google,
    // },
  ];
  return (
    <div className="flex justify-center">
      {/* <button
        className="border flex items-center	gap-3 border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        onClick={handleSignIn}
      >
        <p>Sign In with Google</p>
        <img className="w-10" src={google} />
      </button> */}
      {providers.map(({ provider, icon }) => {
        return (
          <button
            key={provider}
            className="border flex items-center  gap-3 border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            onClick={() => {
              handleSignIn(provider);
            }}
          >
            <p>Sign in with {provider}</p>
            <img className="w-10" src={icon} />
          </button>
        );
      })}
    </div>
  );
};

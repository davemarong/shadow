import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../Firebase/Firebase";
import { collection, getDocs, getDoc, setDoc, doc } from "firebase/firestore";
import { Button } from "../Buttons/Button";
import { Diary } from "../../assets/types/Types";

interface Props {
  setDiary: (diary: Diary[]) => void;
}
export const SignUp = ({ setDiary }: Props) => {
  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();

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

      const querySnapshot = await getDocs(
        collection(db, "users", user.uid, "diary")
      );
      const diaries = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          title: data.title,
          description: data.description,
          emotion: data.emotion,
          target_person: data.person,
          date: "",
        };
      });
      console.log(diaries);
      setDiary(diaries);
    }

    console.log({ user });
  };
  return (
    <div>
      <Button func={handleSignIn}>Sign In with Google</Button>
    </div>
  );
};

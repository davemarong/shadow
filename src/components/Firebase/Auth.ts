import firebaseApp from "./Firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebaseApp);

export default auth;

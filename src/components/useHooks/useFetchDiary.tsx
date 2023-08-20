// import React, { useEffect } from "react";

// export const useFetchDiary = () => {
//   const [data, setData] = useState();
//   useEffect(() => {
//     const querySnapshot = await getDocs(
//       collection(db, "users", user.uid, "diary")
//     );
//     const diaries = querySnapshot.docs.map((doc) => {
//       const data = doc.data();
//       return {
//         title: data.title,
//         description: data.description,
//         emotion: data.emotion,
//         target_person: data.person,
//         date: "",
//       };
//     });
//   }, [user]);
//   return;
// };

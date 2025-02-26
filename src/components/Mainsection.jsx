/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";

// const Mainsection = () => {
//   const [user, setUser] = useState(undefined);

//   useEffect(() => {
//     const loadUser = () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           const userData = JSON.parse(atob(token.split(".")[1])); 
//           setUser(userData.name);
//         } catch (error) {
//           console.error("Invalid token:", error);
//           setUser(null);
//         }
//       } else {
//         setUser(null);
//       }
//     };

//     loadUser();

//     // Sync login/logout across tabs
//     const handleStorageChange = () => loadUser();
//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   if (user === undefined) {
//     return (
//       <div className="relative w-full h-[60vh] flex justify-center items-center">
//         <h2 className="text-2xl font-bold text-gray-400">Loading...</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-[60vh]">
//       <img
//         src="https://i.huffpost.com/gen/1676154/images/o-HUMANITARIAN-facebook.jpg"
//         alt="Background"
//         className="w-full h-full object-cover rounded-md"
//       />
//       <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center p-4">
//         <h2 className="text-3xl font-bold text-red-400">
//           Hello {user ? user : "Guest"},
//         </h2>
//         <p className="italic mt-2 text-lg">
//           Initial push is the toughest! Go through the learning modules, or reach out to your fundraising manager to level up.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Mainsection;






















import React from "react";
import { useAuth } from "../context/AuthContext"; // ✅ Import useAuth

const Mainsection = () => {
  const { user } = useAuth(); // ✅ Get user from context

  if (user === undefined) {
    return (
      <div className="relative w-full h-[60vh] flex justify-center items-center">
        <h2 className="text-2xl font-bold text-gray-400">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[60vh]">
      <img
        src="https://i.huffpost.com/gen/1676154/images/o-HUMANITARIAN-facebook.jpg"
        alt="Background"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center p-4">
        <h2 className="text-3xl font-bold text-red-400">
          Hello {user ? user.name : "Guest"},
        </h2>
        <p className="italic mt-2 text-lg">
          Initial push is the toughest! Go through the learning modules, or reach out to your fundraising manager to level up.
        </p>
      </div>
    </div>
  );
};

export default Mainsection;























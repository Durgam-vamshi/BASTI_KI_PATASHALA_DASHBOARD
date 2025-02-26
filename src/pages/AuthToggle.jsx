// /* eslint-disable no-unused-vars */


































// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthToggle = ({ setUser }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({ email: "", password: "", name: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission for login or registration
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Reset error message
//     setLoading(true); // Set loading state to true

//     const url = isLogin
//       ? "https://bkpbackend.onrender.com/api/auth/login"
//       : "https://bkpbackend.onrender.com/api/auth/register";

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || (isLogin ? "Login failed" : "Registration failed"));
//       }

//       // Store token in localStorage after successful login/registration
//       localStorage.setItem("token", data.token);

//       // If registration, set user state to the user's name, if login, just redirect
//       if (!isLogin) {
//         setUser(data.name); // Update state after successful registration
//       }

//       // Redirect to the home page
//       navigate("/");

//     } catch (err) {
//       setLoading(false); // Stop loading
//       setError(err.message); // Show error message
//     }
//   };

//   // Effect to handle initial login redirect if token exists
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setUser("user"); // Set user state when token is present
//       navigate("/"); // Redirect if the user is already logged in
//     }
//   }, [navigate, setUser]);

//   return (
//     <div className="h-screen flex justify-center items-center bg-light-background dark:bg-dark-background transition-colors duration-300">
//       <div className="bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-light-primary dark:text-dark-primary text-center">
//           {isLogin ? "Login" : "Register"}
//         </h2>
//         {error && <p className="text-light-warning dark:text-dark-warning text-center">{error}</p>}

//         <form onSubmit={handleSubmit} className="mt-6">
//           {!isLogin && (
//             <div className="mb-4">
//               <label className="block text-light-textPrimary dark:text-dark-textPrimary font-medium">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary bg-light-card dark:bg-dark-card text-light-textPrimary dark:text-dark-textPrimary transition-colors duration-300"
//                 required
//               />
//             </div>
//           )}

//           <div className="mb-4">
//             <label className="block text-light-textPrimary dark:text-dark-textPrimary font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary bg-light-card dark:bg-dark-card text-light-textPrimary dark:text-dark-textPrimary transition-colors duration-300"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-light-textPrimary dark:text-dark-textPrimary font-medium">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-light-border dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary bg-light-card dark:bg-dark-card text-light-textPrimary dark:text-dark-textPrimary transition-colors duration-300"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-light-primary dark:bg-dark-primary text-white py-2 rounded-lg hover:bg-light-secondary dark:hover:bg-dark-secondary transition"
//             disabled={loading}
//           >
//             {loading ? "Processing..." : isLogin ? "Login" : "Register"}
//           </button>
//         </form>

//         <p className="text-center mt-4 text-light-textSecondary dark:text-dark-textSecondary">
//           {isLogin ? (
//             <>
//               Don’t have an account?{" "}
//               <span
//                 className="text-light-primary dark:text-dark-primary font-bold cursor-pointer"
//                 onClick={() => setIsLogin(false)}
//               >
//                 Register
//               </span>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <span
//                 className="text-light-primary dark:text-dark-primary font-bold cursor-pointer"
//                 onClick={() => setIsLogin(true)}
//               >
//                 Login
//               </span>
//             </>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthToggle;


















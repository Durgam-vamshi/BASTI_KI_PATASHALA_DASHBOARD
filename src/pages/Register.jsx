/* eslint-disable no-unused-vars */



// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { login } = useAuth();

//   const handleRegister = async () => {
//     setError("");
//     try {
//       const response = await fetch("https://bkpbackend.onrender.com/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || "Registration failed");

//       login(data.user); 
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <input
//         type="text"
//         placeholder="Username"
//         className="border p-2 mb-2 w-full"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="border p-2 mb-2 w-full"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleRegister}>
//         Register
//       </button>
//     </div>
//   );
// };

// export default Register;





import React,{ useState } from "react";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleRegister = async () => {
    setError("");
    try {
      const response = await fetch("https://bkpdashboardbackend.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),      
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Registration failed");

      login(data.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-light-background dark:bg-dark-background">
      <div className="w-full max-w-md p-6 bg-light-card dark:bg-dark-card shadow-lg rounded-2xl border border-light-border dark:border-dark-border">
        <h2 className="text-2xl font-bold text-light-primary dark:text-dark-primary text-center mb-6">
          Register
        </h2>
        {error && (
          <p className="text-light-warning dark:text-dark-warning text-center">{error}</p>
        )}
        <div className="space-y-4">
          <div>
            <label className="block text-light-textSecondary dark:text-dark-textSecondary mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-light-border dark:border-dark-border rounded-lg bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-light-textSecondary dark:text-dark-textSecondary mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 border border-light-border dark:border-dark-border rounded-lg bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-light-textSecondary dark:text-dark-textSecondary mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 border border-light-border dark:border-dark-border rounded-lg bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full p-3 bg-light-secondary dark:bg-dark-secondary text-white font-semibold rounded-lg hover:opacity-90 transition duration-200"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;




















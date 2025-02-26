// 



import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://bkpdashboardbackend.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      login(data);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-light-background dark:bg-dark-background">
      <div className="w-full max-w-md p-6 bg-light-card dark:bg-dark-card shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-light-primary dark:text-dark-primary text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-light-textSecondary dark:text-dark-textSecondary mb-1">Email</label>
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
            <label className="block text-light-textSecondary dark:text-dark-textSecondary mb-1">Password</label>
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
            type="submit"
            className="w-full p-3 bg-light-primary dark:bg-dark-primary text-white font-semibold rounded-lg hover:opacity-90 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

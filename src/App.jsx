/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context/ThemeContext";
import { useAuth } from "./context/AuthContext"; 
import Dashboard from "./components/Dashboard";
import DonatePage from "./components/DonatePage";
import Transactions from "./components/Transactions";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const { user, logout } = useAuth();

  return (
    <ThemeProvider>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      <Navbar user={user} onLogout={logout} /> 
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/donate" element={user ? <DonatePage /> : <Navigate to="/login" />} />
        <Route path="/transactions" element={user ? <Transactions /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/api/transactions" element={user ? <Transactions /> : <Navigate to="/login" />} />
        <Route path="/api/donate" element={user ? <DonatePage /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;











/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useTheme } from "../context/ThemeContext"; // Import Theme Context

const Transactions = () => {
  const { theme } = useTheme(); // Get theme from context
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("https://bkpdashboardbackend.onrender.com/api/transactions");
        if (!response.ok) throw new Error("Failed to fetch transactions");

        const data = await response.json();
        setTransactions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className={`flex h-screen overflow-hidden 
      ${theme === "dark" ? "bg-[#121212] text-gray-200" : "bg-light-background text-light-textPrimary"}`}
    >
      {/* Sidebar - Hidden on Mobile */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Navbar Section (Fixed at top, full-width) */}
        <div className={`fixed top-0 left-0 w-full z-50 shadow-md px-4 py-3
          ${theme === "dark" ? "bg-[#1E1E1E] text-gray-200 border-b border-gray-700" : "bg-white text-gray-800"}`}
        >
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto px-4 py-6 mt-[64px]">
          <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm mb-4 
            ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
          >
            <h1 className={`text-xl sm:text-2xl font-bold ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}>
              Transactions
            </h1>
            <div className="flex items-center space-x-2 text-sm mt-2 sm:mt-0">
              <FaHome />
              <span>/ General / Transactions</span>
            </div>
          </div>

          {/* Transactions Table (Fully Responsive) */}
          <div className={`pb-6 px-4 sm:px-6 rounded-lg shadow-lg overflow-hidden 
            ${theme === "dark" ? "bg-[#1E1E1E] text-gray-200 border border-gray-700" : "bg-white text-gray-900 border border-gray-300"}`}
          >
            {loading ? (
              <p className="text-center text-lg">Loading transactions...</p>
            ) : error ? (
              <p className="text-center text-lg text-red-600">{error}</p>
            ) : transactions.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] sm:min-w-full border-collapse rounded-lg">
                  <thead>
                    <tr className={`${theme === "dark" ? "bg-[#272727] text-gray-300" : "bg-gray-200 text-gray-700"} text-xs sm:text-sm`}>
                      <th className="border border-gray-600 p-2 sm:p-3 text-left font-semibold">ID</th>
                      <th className="border border-gray-600 p-2 sm:p-3 text-left font-semibold">Name</th>
                      <th className="border border-gray-600 p-2 sm:p-3 text-left font-semibold">Amount (₹)</th>
                      <th className="border border-gray-600 p-2 sm:p-3 text-left font-semibold">Transaction ID</th>
                      <th className="border border-gray-600 p-2 sm:p-3 text-left font-semibold">Date</th>
                      <th className="border border-gray-600 p-2 sm:p-3 text-left font-semibold">PAN Card</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction, index) => (
                      <tr
                        key={transaction.donationId}
                        className={`text-xs sm:text-sm transition-all leading-relaxed 
                          ${theme === "dark" 
                            ? index % 2 === 0 
                              ? "bg-[#181818] text-gray-300" 
                              : "bg-[#202020] text-gray-300" 
                            : index % 2 === 0 
                            ? "bg-gray-50" 
                            : "bg-white"
                          } 
                          hover:${theme === "dark" ? "bg-[#2A2A2A]" : "bg-gray-100"}`}
                      >
                        <td className="border border-gray-600 p-2 sm:p-3">{transaction.donationId}</td>
                        <td className="border border-gray-600 p-2 sm:p-3">{transaction.name}</td>
                        <td className="border border-gray-600 p-2 sm:p-3">₹{transaction.amount}</td>
                        <td className="border border-gray-600 p-2 sm:p-3">{transaction.transactionId || "N/A"}</td>
                        <td className="border border-gray-600 p-2 sm:p-3">{new Date(transaction.date).toLocaleDateString("en-IN")}</td>
                        <td className="border border-gray-600 p-2 sm:p-3">{transaction.pancard || "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center text-lg">No transactions available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
























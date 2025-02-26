/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaMoneyCheckAlt,
  FaQuestionCircle,
  FaBook,
  FaGift,
  FaComment,
  FaHandsHelping,
} from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-light-card dark:bg-dark-card p-4 shadow-md flex flex-col transition-colors duration-300">
      {/* General Section */}
      <div className="mt-10 px-3 py-3 bg-light-secondary dark:bg-dark-secondary rounded-md">
        <h3 className="text-light-primary dark:text-dark-primary uppercase text-sm font-semibold">
          General
        </h3>
        <small className="text-light-textSecondary dark:text-dark-textSecondary">
          Navigation
        </small>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 mt-4">
        <ul>
          {[
            { path: "/", label: "Dashboard", icon: <FaHome /> },
            { path: "/api/transactions", label: "Transactions", icon: <FaMoneyCheckAlt /> },
            { path: "/start-here", label: "Start Here", icon: <IoMdRocket /> },
            { path: "/faqs", label: "FAQs", icon: <FaQuestionCircle /> },
            { path: "/learning-modules", label: "Learning Modules", icon: <FaBook /> },
            { path: "/rewards", label: "Rewards", icon: <FaGift /> },
            { path: "/feedback", label: "Feedback", icon: <FaComment /> },
          ].map(({ path, label, icon }) => (
            <li key={path} className="p-3 flex items-center text-light-textPrimary dark:text-dark-textPrimary hover:bg-light-primary dark:hover:bg-dark-primary hover:text-white rounded-md cursor-pointer transition-colors duration-300">
              <Link to={path} className="flex items-center w-full">
                <span className="mr-2">{icon}</span> {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
















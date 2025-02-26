/* eslint-disable no-unused-vars */



import React from "react";
import { FaHome } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Mainsection from "./Mainsection";
import DonationSummary from "./DonationSummary";
import DonorsMap from "./DonorsMap";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-light-background dark:bg-dark-background overflow-hidden">
      {/* Sidebar (Fixed) */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar (Fixed, Adjacent to Sidebar with Padding) */}
        <div className="fixed top-0 left-[260px] w-[calc(100%-260px)] z-50 bg-light-card dark:bg-dark-card shadow-md px-6 py-3">
          <Navbar />
        </div>

        {/* Scrollable Content (Below Navbar with Reduced Spacing) */}
        <div className="flex-1 overflow-auto px-6 py-4" style={{ marginTop: "60px" }}>
          {/* Header Section: Left -> Dashboard Text | Right -> Breadcrumb */}
          <div className="flex justify-between items-center text-light-textSecondary dark:text-dark-textSecondary text-sm mb-4">
            {/* Left Side: Dashboard Title */}
            <h1 className="text-2xl font-bold text-light-textPrimary dark:text-dark-textPrimary">Dashboard</h1>

            {/* Right Side: Breadcrumb */}
            <div className="flex items-center space-x-2 text-light-textSecondary dark:text-dark-textSecondary">
              <FaHome className="text-light-primary dark:text-dark-primary" />
              <span>/ General / Dashboard</span>
            </div>
          </div>

          {/* Main Content - Sticking Components Together */}
          <div className="flex flex-col">
            <Mainsection className="flex-1 min-h-[400px]" />
            <DonationSummary className="flex-1 min-h-[400px]" />
            <DonorsMap/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;













































// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import { useTheme } from "@/context/ThemeContext"; // Import the theme context
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from "recharts";
// import { FaWhatsapp, FaGift, FaCopy, FaTwitter, FaLinkedin, FaReceipt, FaHandsHelping } from "react-icons/fa";
// import ProgressBar from "@ramonak/react-progress-bar";
// import { motion } from "framer-motion";
// import Button from "@/components/button";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const goalAchieved = 2000;
// const totalGoal = 30000;
// const progressPercentage = (goalAchieved / totalGoal) * 100;

// const donationData = [
//   { name: "Achieved", value: goalAchieved, color: "#ff4c4c" },
//   { name: "Remaining", value: totalGoal - goalAchieved, color: "#444" },
// ];

// const fundAllocation = [
//   { name: "Direct Aid", value: 70, color: "#ff4c4c" },
//   { name: "Operations", value: 20, color: "#007bff" },
//   { name: "Awareness", value: 10, color: "#ffcc00" },
// ];

// const DonationSummary = ({ referralCode = "" }) => {
//   const { theme } = useTheme(); // Use theme from context

//   const donationLink = `http://localhost:5173/donate${referralCode ? `?r=${referralCode}` : ""}`;

//   const handleCopyClick = () => {
//     navigator.clipboard.writeText(donationLink)
//       .then(() => {
//         toast.success("Link copied to clipboard!", {
//           position: "top-center", // Toast appears at the top of the screen
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: theme, // Use the current theme (light/dark)
//         });
//       })
//       .catch((err) => console.error("Error copying to clipboard:", err));
//   };

//   const handleShare = (platform) => {
//     const message = encodeURIComponent(
//       "I'm supporting a great cause! Join me in donating to NayePankh Foundation and help underprivileged children. Your contribution can make a real difference in their lives. Let's come together and support this mission of change. Donate now at: " + donationLink
//     );

//     let url = "";
//     switch (platform) {
//       case "whatsapp":
//         url = `https://api.whatsapp.com/send?text=${message}`;
//         break;
//       case "twitter":
//         url = `https://twitter.com/intent/tweet?text=${message}`;
//         break;
//       case "linkedin":
//         url = `https://www.linkedin.com/sharing/share-offsite/?url=${donationLink}`;
//         break;
//       default:
//         return;
//     }
//     window.open(url, "_blank");
//   };

//   return (
//     <>
//       {/* Global Toast Notifications */}
//       <ToastContainer position="top-center" autoClose={3000} />

//       <motion.div 
//         className={`flex flex-col p-8 rounded-lg shadow-xl border backdrop-blur-lg space-y-6 transition-all duration-300
//           ${theme === "dark" ? "bg-black/80 text-white border-gray-700" : "bg-gray-100 text-black border-gray-300"}
//         `}
//         style={{ borderRadius: "0px" }}
//         initial={{ opacity: 0, scale: 0.95 }} 
//         animate={{ opacity: 1, scale: 1 }} 
//         transition={{ duration: 0.8 }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className={`p-6 rounded-lg shadow-lg border transition-all duration-300
//             ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"}
//           `}>
//             <h3 className="text-xl font-bold text-red-400 mb-4">Donation Progress</h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <PieChart>
//                 <Pie data={donationData} dataKey="value" outerRadius={110} innerRadius={80}>
//                   {donationData.map((entry, index) => (
//                     <Cell key={index} fill={entry.color} stroke="#fff" strokeWidth={2} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//             <ProgressBar completed={progressPercentage} bgColor="#ff4c4c" height="12px" className="mt-4 w-full" />
//           </div>

//           <div className={`p-6 rounded-lg shadow-lg border transition-all duration-300
//             ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"}
//           `}>
//             <h3 className="text-xl font-bold text-blue-400 mb-4">Fund Allocation</h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={fundAllocation}>
//                 <XAxis dataKey="name" stroke="#ccc" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="value" fill="#ff4c4c" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <div className="flex flex-wrap justify-center gap-4">
//           <Button className="bg-green-600 text-white hover:bg-green-700" onClick={() => handleShare("whatsapp")}>
//             <FaWhatsapp className="text-xl" /> Share on WhatsApp
//           </Button>

//           <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => handleShare("twitter")}>
//             <FaTwitter className="text-xl" /> Share on Twitter
//           </Button>

//           <Button className="bg-indigo-600 text-white hover:bg-indigo-700" onClick={() => handleShare("linkedin")}>
//             <FaLinkedin className="text-xl" /> Share on LinkedIn
//           </Button>

//           <Button className="bg-purple-600 text-white hover:bg-purple-700">
//             <FaGift className="text-xl" /> Rewards
//           </Button>

//           <Button className="bg-yellow-600 text-white hover:bg-yellow-700">
//             <FaReceipt className="text-xl" /> Donor Dashboard
//           </Button>

//           <motion.button 
//             className="bg-blue-600 px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:bg-blue-700" 
//             onClick={handleCopyClick}
//             whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
//           >
//             <FaCopy className="text-xl" /> Copy Link
//           </motion.button>

//           <Button className="bg-green-700 text-white hover:bg-green-800">
//             <FaHandsHelping className="text-xl" /> Become a Volunteer
//           </Button>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default DonationSummary;









/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from "recharts";
import { FaWhatsapp, FaGift, FaCopy, FaTwitter, FaLinkedin, FaReceipt, FaHandsHelping } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";
import Button from "@/components/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Dynamically get BASE_URL from environment variables
const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5173"; 

const goalAchieved = 2000;
const totalGoal = 30000;
const progressPercentage = (goalAchieved / totalGoal) * 100;

const donationData = [
  { name: "Achieved", value: goalAchieved, color: "#ff4c4c" },
  { name: "Remaining", value: totalGoal - goalAchieved, color: "#444" },
];

const fundAllocation = [
  { name: "Direct Aid", value: 70, color: "#ff4c4c" },
  { name: "Operations", value: 20, color: "#007bff" },
  { name: "Awareness", value: 10, color: "#ffcc00" },
];

const DonationSummary = ({ referralCode = "" }) => {
  const { theme } = useTheme();

  const donationLink = `${BASE_URL}/donate${referralCode ? `?r=${referralCode}` : ""}`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(donationLink)
      .then(() => {
        toast.success("Link copied to clipboard!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: theme,
        });
      })
      .catch((err) => console.error("Error copying to clipboard:", err));
  };

  const handleShare = (platform) => {
    const message = encodeURIComponent(
      "I'm supporting a great cause! Join me in donating to NayePankh Foundation and help underprivileged children. Your contribution can make a real difference in their lives. Let's come together and support this mission of change. Donate now at: " + donationLink
    );

    let url = "";
    switch (platform) {
      case "whatsapp":
        url = `https://api.whatsapp.com/send?text=${message}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${message}`;
        break;
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${donationLink}`;
        break;
      default:
        return;
    }
    window.open(url, "_blank");
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />

      <motion.div 
        className={`flex flex-col p-8 rounded-lg shadow-xl border backdrop-blur-lg space-y-6 transition-all duration-300
          ${theme === "dark" ? "bg-black/80 text-white border-gray-700" : "bg-gray-100 text-black border-gray-300"}
        `}
        style={{ borderRadius: "0px" }}
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-lg shadow-lg border transition-all duration-300
            ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"}
          `}>
            <h3 className="text-xl font-bold text-red-400 mb-4">Donation Progress</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={donationData} dataKey="value" outerRadius={110} innerRadius={80}>
                  {donationData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} stroke="#fff" strokeWidth={2} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <ProgressBar completed={progressPercentage} bgColor="#ff4c4c" height="12px" className="mt-4 w-full" />
          </div>

          <div className={`p-6 rounded-lg shadow-lg border transition-all duration-300
            ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"}
          `}>
            <h3 className="text-xl font-bold text-blue-400 mb-4">Fund Allocation</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={fundAllocation}>
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#ff4c4c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-green-600 text-white hover:bg-green-700" onClick={() => handleShare("whatsapp")}>
            <FaWhatsapp className="text-xl" /> Share on WhatsApp
          </Button>

          <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => handleShare("twitter")}>
            <FaTwitter className="text-xl" /> Share on Twitter
          </Button>

          <Button className="bg-indigo-600 text-white hover:bg-indigo-700" onClick={() => handleShare("linkedin")}>
            <FaLinkedin className="text-xl" /> Share on LinkedIn
          </Button>

          <Button className="bg-purple-600 text-white hover:bg-purple-700">
            <FaGift className="text-xl" /> Rewards
          </Button>

          <Button className="bg-yellow-600 text-white hover:bg-yellow-700">
            <FaReceipt className="text-xl" /> Donor Dashboard
          </Button>

          <motion.button 
            className="bg-blue-600 px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:bg-blue-700" 
            onClick={handleCopyClick}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            <FaCopy className="text-xl" /> Copy Link
          </motion.button>

          <Button className="bg-green-700 text-white hover:bg-green-800">
            <FaHandsHelping className="text-xl" /> Become a Volunteer
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default DonationSummary;










































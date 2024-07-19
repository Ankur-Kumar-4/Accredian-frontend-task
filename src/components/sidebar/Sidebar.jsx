// Sidebar.js
import React, { useContext } from "react";
import { motion } from "framer-motion";
import AppContext from "../../AppContext";
const Sidebar = () => {
  const { state, setState } = useContext(AppContext);

  const handleLoginOpen = () => {
    setState({ ...state, isLoginFormOpen: true });
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-[55vw] h-full bg-[#e6effc] shadow-lg z-50 py-8 px-6 "
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ type: "Inertia", duration: 0.5 }}
    >
      <div className="flex flex-col gap-5 text-xs text-[#262626] font-[500]">
        <span className="hover:text-[#1A73E8]">Refer & Earn</span>
        <span className="hover:text-[#1A73E8]">Resources</span>
        <span className="hover:text-[#1A73E8]">About Us</span>

        {!state.isLoggedin && (
          <button
            onClick={handleLoginOpen}
            className="bg-[#ced3d8] text-[#262626] rounded-lg w-min py-[9px] px-[30px]"
          >
            Login
          </button>
        )}

        <a href="https://trial.accredian.com/">
          <button className="bg-[#1A73E8] text-[#ddeafb] rounded-lg px-4 py-[10px]">
            Try for free
          </button>
        </a>
      </div>
    </motion.div>
  );
};
export default Sidebar;

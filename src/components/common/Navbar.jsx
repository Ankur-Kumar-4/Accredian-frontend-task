// Navbar.js
import React, { useContext } from "react";
import { motion } from "framer-motion";
import menuIcon from "../../assets/menu.png";
import AppContext from "../../AppContext";
import Sidebar from "../sidebar/Sidebar";
import logo from "./../../assets/logo.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar() {
  const { state, setState } = useContext(AppContext);

  const toggleSidebar = () => {
    setState({ ...state, isSidebarOpen: !state.isSidebarOpen });
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="bg-[#ddeafb] flex items-center justify-center  py-2">
        <img
          className="w-[1.3rem] cursor-pointer ms-3 md:hidden"
          src={menuIcon}
          alt="menuIcon"
          onClick={toggleSidebar}
        />
        <h2 className="text-[#262626] font-semibold  text-[1rem] ">
          Navigate your ideal career path with tailored expert advice
        </h2>

        <p className="text-[#1A73E8] font-semibold ms-8">Contact Expert</p>
      </div>

      {/* Sidebar Overlay */}

      <div className="py-5 flex items-center justify-between px-[13vw] bg-[#fefefe]">
        <div className="flex items-center justify-center gap-10">
          <a href="https://home.accredian.com/">
            <img src={logo} alt="" />
          </a>
          <button className="bg-[#1A73E8] text-[#ddeafb] rounded-lg flex items-center justify-center px-4 py-2 gap-1">
            Courses <KeyboardArrowDownIcon className="mt-1" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-8 text-[#262626] font-[500]">
          <span>Refer & Earn</span>
          <span>Resources</span>
          <span>About Us</span>
          <button className="bg-[#eaedf2] text-[#262626] rounded-lg flex items-center justify-center px-4 py-2 gap-1">
            Login
          </button>
          <a href="https://trial.accredian.com/">
            <button className="bg-[#1A73E8] text-[#ddeafb] rounded-lg flex items-center justify-center px-4 py-2 gap-1">
              Try for free
            </button>
          </a>
        </div>
      </div>

      {state.isSidebarOpen && <Sidebar />}
      <motion.div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 ${
          state.isSidebarOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setState({ ...state, isSidebarOpen: false })}
      />
    </div>
  );
}

export default Navbar;

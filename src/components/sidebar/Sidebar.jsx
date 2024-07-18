// Sidebar.js
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Avatar from 'react-avatar';
const Sidebar = () => {
  const { state } = useContext(AppContext);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[280px] h-full bg-[#252d38] shadow-lg z-50"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ type: "Inertia", duration: 0.5 }}
    >
      <div className="">
        <div className="bg-[#243040] pt-6 px-6 pb-3">
          <div>
            
            <Avatar name="Ankur Kumar" size="60" round={true}/>
          </div>
          <div>
            <p className="text-white mt-4 text-[1rem]">
              {state.userName || "Ankur Kumar"} {/* Use state data here */}
            </p>
            <p className="text-[#596475] text-xs ">
              {state.phoneNumber || "+91 8252784609"}{" "}
              {/* Use state data here */}
            </p>
          </div>
        </div>

        <SideBarItem menuName="My Profile" imagePath={userIcon} />
         <div className="bg-[#1a1919] h-[0.5px] w-full mt-1"></div>
        <SideBarItem menuName="New Group" imagePath={groupIcon } />
        <SideBarItem menuName="Contact" imagePath={contactIcon} />
      </div>
    </motion.div>
  );
};
// #888b90
export default Sidebar;

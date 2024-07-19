import React, { useContext } from "react";
import heroImage from "../../assets/heroImage.svg";
import Modal from "./ReferalForm";
import LoginForm from "../LoginForm";
import { motion } from "framer-motion";
import AppContext from "../../AppContext";

function Hero() {
  const { state, setState } = useContext(AppContext);

  const handleOpen = () => {
 
    if (state.isLoggedin) {
      setState({ ...state, isModalOpen: true });
    } else {
      setState({ ...state, isLoginFormOpen: true });
    }
  };

  const handleClose = () => {
    setState({ ...state, isReferFormOpen: false, isLoginFormOpen: false });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Start position (invisible and above)
      animate={{ opacity: 1, y: 0 }} // End position (fully visible and in place)
      transition={{
        duration: 0.8, // Animation duration
        delay: 0.4, // Delay before the animation starts
        ease: "easeOut", // Easing function for smoothness
      }}
      className="mt-[10vw] flex items-center flex-col"
    >
      <div className="bg-[#e6effc] text-[#262626] mt-10 md:mt-0 w-[315px] md:w-[40vw] px-6 md:px-16 py-3 rounded-3xl flex items-center justify-between text-sm md:text-lg font-[500]">
        <div className="relative inline-block">
          <span className="text-[#1A73E8]">Refer</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-7 top-full mt-1 text-[#1A73E8] text-3xl">.</span>
        </div>
        <span>Benefits</span>
        <span>FAQs</span>
        <span>Support</span>
      </div>

      <div className="flex md:flex-row flex-col-reverse items-center bg-[#eef5ff] mt-6 rounded-2xl px-2 md:px-[7vw] md:gap-14 shadow-2xl shadow-gray-400 md:py-0 pb-8 md:pb-0">
        <div className="flex flex-col gap-4 md:me-0 me-20">
          <h1 className="text-[#262626] text-4xl md:text-6xl font-bold">
            Let's Learn <br />& Earn
          </h1>
          <p className="md:mt-12 mt-2 md:text-2xl font-[500]">
            Get a chance to win <br /> up-to <span className="text-[#1A73E8]">Rs. 15,000</span>
          </p>

          <button
            onClick={handleOpen}
            className="bg-[#1A73E8] text-[#ddeafb] md:text-lg rounded-lg flex items-center justify-center px-8 py-2 md:py-3 gap-1 mt-5 md:mt-12"
          >
            Refer Now
          </button>
        </div>
        <img className="md:w-[35vw] w-[80vw]" src={heroImage} alt="Hero" />
      </div>
      <Modal open={state.isReferFormOpen} handleClose={handleClose} />
      <LoginForm open={state.isLoginFormOpen} handleClose={handleClose} />
    </motion.div>
  );
}

export default Hero;

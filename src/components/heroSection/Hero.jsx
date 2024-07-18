import React, { useState } from "react";
import heroImage from "../../assets/heroImage.svg";
import Modal from "./Modal";

function Hero() {
    const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="mt-[10vw] flex items-center flex-col">
      <div className="bg-[#e6effc] text-[#262626] w-[40vw] px-16 py-3 rounded-3xl flex items-center justify-between text-lg font-[500]">
        <div className="relative inline-block">
          <span className="text-[#1A73E8] b">Refer</span>
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-7 top-full mt-1 text-[#1A73E8] text-3xl">
            .
          </span>
        </div>
        <span>Benefits</span>
        <span>FAQs</span>
        <span>Support</span>
      </div>

      <div className="flex items-center bg-[#eef5ff] mt-6 rounded-2xl px-[7vw] gap-14 shadow-2xl shadow-gray-400">
        <div className="felx flex-col gap-4">
          <h1 className="text-[#262626] text-6xl font-bold">
            Let's Learn <br />& Earn
          </h1>
          <p className="mt-12 text-2xl font-[500]">
            Get a chance to win <br /> up-to{" "}
            <span className="text-[#1A73E8]">Rs. 15,000</span>
          </p>

          <button onClick={handleOpen} className="bg-[#1A73E8] text-[#ddeafb] text-lg rounded-lg flex items-center justify-center px-8 py-3 gap-1 mt-12">
            Refer Now
          </button>
        </div>
        <img className="md:w-[35vw]" src={heroImage} alt="" />
      </div>
      <Modal open={open} handleClose={handleClose} />
    </div>
  );
}

export default Hero;

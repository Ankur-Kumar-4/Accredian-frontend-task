import React from "react";
import helpContact from '../assets/helpContact.svg'

function FaqSection() {
  return (
    <section className="flex flex-col items-center mt-28">
      <h2 className="text-xl md:text-2xl font-semibold">
        Frequently Asked<span className="text-[#1A73E8]"> Questions</span>
      </h2>

      <div className="flex md:flex-row flex-col mt-5 items-center justify-around w-full px-[10vw]">
        <div className="mt-10 flex flex-col gap-6 md:text-base text-sm">
          <div className="text-[#1A73E8] bg-white shadow-lg w-[43vw] h-[7vh] md:w-[15vw] md:h-[7vh] flex items-center justify-center rounded-lg">
            <p> Eligibility</p>
          </div>
          <div
            className="text-[#737373] bg-white shadow-lg w-[43vw] h-[7vh] md:w-[15vw] md:h-[7vh] flex items-center justify-center rounded-lg border-2 border-solid border-slate-500"
          >
            <p> How to Use?</p>
          </div>
          <div className="text-[#737373] bg-white shadow-lg w-[43vw] h-[7vh] md:w-[15vw] md:h-[7vh] flex items-center justify-center rounded-lg  border-2 border-solid border-slate-500">
            <p> Terms & Conditions</p>
          </div>
        </div>

        <div className="flex flex-col gap-7 md:w-[50vw] md:mt-0 mt-16 md:ms-0 ms-5 md:text-base text-sm">
          <p className="text-[#1A73E8] font-semibold">
            Do I need to have prior Product Management and Project Management
            experience to enroll in the program?
          </p>
          <p className="text-[#737373] ">
            No, the program is designed to be inclusive of all levels of
            experience. All topics will be covered from the basics, making it
            suitable for individuals from any field of work.
          </p>
          <p className="font-semibold">What is the minimum system configuration required?</p>
        </div>
      </div>

      <img className="md:w-[70vw] w-[90vw] mt-10 md:mt-28" src={helpContact} alt="" />
    </section>
  );
}

export default FaqSection;

import React, { useContext } from "react";
import howDoIReferImage from "../assets/whoDoIRefer.svg";
import addFriend from "../assets/whoDoIRefer/add_friend.svg";
import statement from "../assets/whoDoIRefer/statement.svg";
import wallet from "../assets/whoDoIRefer/wallet.svg";
import AppContext from "../AppContext";

function WhoDoIRefer() {
  const { state, setState } = useContext(AppContext);
  const handleOpen = () => {
    if (state.isLoggedin) {
      setState({ ...state, isModalOpen: true });
    } else {
      setState({ ...state, isLoginFormOpen: true });
    }
  };

  return (
    <section className="bg-[#eef5ff] flex flex-col items-center mt-10 py-6 gap-0 justify-center h-min relative">
      <h2 className="text-lg md:text-2xl font-semibold">
        How Do I <span className="text-[#1A73E8]">Refer?</span>
      </h2>
      <div className="relative">
        <div className="absolute top-0 left-0 transform translate-y-[4.5vh] translate-x-[70.5vw] w-[15.5vw] md:translate-x-[47.5vw] md:translate-y-[18vh] md:w-[200px] text-center gap-2 flex flex-col items-center">
          <img className="w-[30px] md:w-[50px]" src={wallet} alt="" />
          <p className="text-[5.5px] md:text-base">
            Both parties receive a bonus 30 days after program enrollment.
          </p>
        </div>
        <div className="absolute top-0 left-0 transform translate-y-[4.5vh] translate-x-[42vw] w-[15.5vw] md:translate-x-[28vw] md:translate-y-[18vh] md:w-[200px] text-center gap-2 flex flex-col items-center">
          <img className="w-[30px] md:w-[50px]" src={statement} alt="" />
          <p className="text-[5.5px] md:text-base">
            Earn rewards once your referral joins an Accredian program.
          </p>
        </div>
        <div className="absolute top-0 left-0 transform translate-y-[5vh] translate-x-[14vw] w-[16vw] md:translate-x-[8.5vw] md:translate-y-[20vh]  md:w-[200px] text-center gap-2 flex flex-col items-center">
          <img className="w-[30px] md:w-[50px]" src={addFriend} alt="" />
          <p className="text-[5.5px] md:text-base">
            Submit referrals easily via our website’s referral section.
          </p>
        </div>
        <img className="md:w-[70vw]" src={howDoIReferImage} alt="" />
      </div>
      <button
        onClick={handleOpen}
        className="bg-[#1A73E8] text-[#ddeafb] md:-translate-y-[5vh] md:text-lg rounded-lg flex items-center justify-center px-5 md:px-8 py-2 md:py-3 gap-1 mt-5 md:mt-12"
      >
        Refer Now
      </button>
    </section>
  );
}

export default WhoDoIRefer;

import React, { useContext } from "react";
import hat from "../assets/hat.svg";
import Switch from "@mui/material/Switch";
import AppContext from "../AppContext";
function ReferalBenifits() {
  const { state, setState } = useContext(AppContext);
  const handleOpen = () => {
    if (state.isLoggedin) {
      setState({ ...state, isModalOpen: true });
    } else {
      setState({ ...state, isLoginFormOpen: true });
    }
  };

  return (
    <section className="bg-[#fefefe] flex flex-col items-center md:mt-6 mt-16">
      <h2 className="text-xl md:text-2xl font-semibold">
        What Are The<span className="text-[#1A73E8]"> Referral Benefits?</span>
      </h2>
      <div className="flex items-center justify-center gap-3 ms-[47vw] md:ms-[67vw] mt-10">
        <p className="text-[#3C4852] ">Enrolled</p>
        <Switch defaultChecked size="small" />
      </div>
      <div className="flex md:flex-row items-center flex-col mt-4 md:mt-2  gap-16">
        <div className="w-72  md:w-64 bg-white shadow-lg rounded-lg overflow-hidden md:text-base text-sm">
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <span>ALL PROGRAMS</span>
            <span>&gt;</span>
          </div>
          <ul className="divide-y divide-gray-200">
            <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
              <span>PRODUCT MANAGEMENT</span>
              <span>&gt;</span>
            </li>
            <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
              <span>STRATEGY & LEADERSHIP</span>
              <span>&gt;</span>
            </li>
            <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
              <span>BUSINESS MANAGEMENT</span>
              <span>&gt;</span>
            </li>
            <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
              <span>FINTECH</span>
              <span>&gt;</span>
            </li>
            <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
              <span>SENIOR MANAGEMENT</span>
              <span>&gt;</span>
            </li>
            <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
              <span>DATA SCIENCE</span>
              <span>&gt;</span>
            </li>
            <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
              <span>DIGITAL TRANSFORMATION</span>
              <span>&gt;</span>
            </li>
            <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer">
              <span>BUSINESS ANALYTICS</span>
              <span>&gt;</span>
            </li>
          </ul>
        </div>
        <div className="w-[85vw] md:max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-[#aecef7] text-[#1350a0] md:text-base text-sm">
              <tr>
                <th className="px-4 py-2 text-left">Programs</th>
                <th className="px-4 py-2 text-left">Referrer Bonus</th>
                <th className="px-4 py-2 text-left">referred Bonus</th>
              </tr>
            </thead>
            <tbody className="md:text-base text-xs">
              <tr className="border-b">
                <td className="px-4 py-4 flex items-center">
                  <img src={hat} alt="icon" className="w-6 h-6 mr-2" />
                  Professional Certificate Program in Product Management
                </td>
                <td className="px-4 py-2">₹ 7,000</td>
                <td className="px-4 py-2">₹ 9,000</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-4 flex items-center">
                  <img src={hat} alt="icon" className="w-6 h-6 mr-2" />
                  PG Certificate Program in Strategic Product ManagementName
                </td>
                <td className="px-4 py-2">₹ 9,000</td>
                <td className="px-4 py-2">₹ 11,000</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-4 flex items-center">
                  <img src={hat} alt="icon" className="w-6 h-6 mr-2" />
                  Executive Program in Data Driven Product Management
                </td>
                <td className="px-4 py-2">₹ 10,000</td>
                <td className="px-4 py-2">₹ 10,000</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-4 flex items-center">
                  <img src={hat} alt="icon" className="w-6 h-6 mr-2" />
                  Executive Program in Product Management and Digital
                  Transformation
                </td>
                <td className="px-4 py-2">₹ 10,000</td>
                <td className="px-4 py-2">₹ 10,000</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-4 flex items-center">
                  <img src={hat} alt="icon" className="w-6 h-6 mr-2" />
                  Executive Program in Product Management
                </td>
                <td className="px-4 py-2">₹ 10,000</td>
                <td className="px-4 py-2">₹ 10,000</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-4 flex items-center">
                  <img src={hat} alt="icon" className="w-6 h-6 mr-2" />
                  Advanced Certification in Product Management
                </td>
                <td className="px-4 py-2">₹ 10,000</td>
                <td className="px-4 py-2">₹ 10,000</td>
              </tr>
              <tr>
                <td className="px-4 py-4 flex items-center">
                  <img src={hat} alt="icon" className="w-6 h-6 mr-2" />
                  Executive Program in Product Management and Project Management
                </td>
                <td className="px-4 py-2">₹ 10,000</td>
                <td className="px-4 py-2">₹ 10,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button
        onClick={handleOpen}
        className="bg-[#1A73E8] text-[#ddeafb] md:text-lg rounded-lg flex items-center justify-center px-8 py-2 md:py-3 gap-1 mt-12 md:mt-12"
      >
        Refer Now
      </button>
    </section>
  );
}

export default ReferalBenifits;

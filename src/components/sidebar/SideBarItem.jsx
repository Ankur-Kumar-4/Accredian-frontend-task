import React from "react";

function SideBarItem({menuName,imagePath}) {

  return (
    <>
      <div className="text-white flex items-center gap-4 px-6 py-2 mt-1">
        <img className="w-[20px] " src={imagePath} alt="" />
        <p className="text-white ms-3 text-sm">{menuName}</p>
      </div>
    </>
  );
}

export default SideBarItem;

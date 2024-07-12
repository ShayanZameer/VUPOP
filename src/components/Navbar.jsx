import React, { useContext, useState } from "react";

import images from "../utils/Imagess";

import { IoMdNotificationsOutline } from "react-icons/io";

import Custombutton from "./Custombutton";
import { SectionContext } from "../context/SectionCon.jsx";
import Invitepopup from "./Invitepopup.jsx";

const Navbar = () => {
  const { currentSection } = useContext(SectionContext);
  const [showInvite, setShowInvite] = useState(false);

  const toogleInvite = () => {
    setShowInvite(true);
  };
  const handleCloseInvite = () => {
    setShowInvite(false);
  };
  return (
    <>
      <div className="bg-primary flex fixed z-10 w-full ">
        <div className="p-3 flex-1 ">
          <img className="h-10 w-28" src={images.Logo} alt="this" />
        </div>

        <div className="flex-[3] flex items-center px-10 ">
          <p className="font-Norwester font-medium text-white  text-2xl">
            {currentSection}
          </p>
        </div>

        <div className="lg:flex-1  lg:flex lg:items-center lg:space-x-2  xm:hidden">
          <div className="lg:relative lg:inline-block lg:cursor-pointer">
            <IoMdNotificationsOutline className="text-secandary h-10 w-10" />
            <span className="absolute top-2 left-2 h-2 w-2 bg-red-500 rounded-full"></span>
          </div>

          <Custombutton
            text="Invite"
            bgColor="secandary"
            onClickInvite={toogleInvite}
          />
        </div>
      </div>
      {showInvite && <Invitepopup onClose={handleCloseInvite} />}
    </>
  );
};

export default Navbar;

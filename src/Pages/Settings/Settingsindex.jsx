import React, { useState } from "react";
import Editprofile from "./components/Editprofile";
import Security from "./components/Security";
const Settingsindex = () => {
  const [showEditProfile, setShowProfile] = useState(true);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showBorder, setShowBorder] = useState("EditProfile");

  const handleEditProfile = () => {
    setShowProfile(true);
    setShowSecurity(false);
    setShowBorder("EditProfile");
  };
  const handleSecurity = () => {
    setShowSecurity(true);
    setShowProfile(false);
    setShowBorder("Security");
  };
  return (
    <div className=" bg-black text-white h-screen p-4">
      <div className="text-white font-Norwester text-2xl border-b border-tertiary  font-normal flex space-x-8">
        <div
          onClick={handleEditProfile}
          className={`p-4 cursor-pointer ${
            showBorder === "EditProfile" ? "border-b-4 border-secandary" : ""
          }`}
        >
          Edit Profile
        </div>
        <div
          onClick={handleSecurity}
          className={` ${
            showBorder === "Security" ? "border-b-4 border-secandary" : ""
          } p-4 cursor-pointer `}
        >
          Security
        </div>
      </div>

      {showEditProfile && (
        <div>
          <Editprofile />
        </div>
      )}

      {showSecurity && (
        <div>
          <Security />
        </div>
      )}
    </div>
  );
};

export default Settingsindex;

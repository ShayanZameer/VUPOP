import React, { useState } from "react";
import Inputfield from "../../Payment/components/Inputfield";
import ToggleSwitch from "./Toggleswitch";

const Security = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="p-4">
      <div className="font-leagueSpartan font-medium text-xl text-secandary">
        <p>Two-factor Authentication</p>
      </div>

      <div className="flex items-center space-x-4 py-4">
        <div>
          <ToggleSwitch isOn={isOn} handleToggle={handleToggle} />
        </div>
        <div className=" font-leagueSpartan font-normal text-white text-base">
          <p>Enable or disable two factor authentication</p>
        </div>
      </div>

      <div className="font-leagueSpartan font-medium text-xl text-secandary">
        <p>Change Password</p>
      </div>

      <div className="py-4">
        <Inputfield
          label="Current Password"
          inputType="password"
          placeholder=""
          width="400px"
        />
        <Inputfield
          label="New Password"
          inputType="password"
          placeholder=""
          width="100%"
        />
      </div>
    </div>
  );
};

export default Security;

import React from "react";

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`relative inline-flex items-center cursor-pointer w-16 h-8 rounded-md ${
        isOn ? "bg-gray-300" : "bg-secandary"
      }`}
      onClick={handleToggle}
    >
      <span
        className={`block  w-8 h-7  rounded-md transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-8 bg-black" : "translate-x-0 bg-black"
        }`}
      ></span>
      <span
        className={`absolute left-1 top-1 w-6 h-6 rounded-md bg-black transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-8" : "translate-x-0"
        }`}
      ></span>
    </div>
  );
};

export default ToggleSwitch;

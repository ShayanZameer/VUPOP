import React from "react";

const Inputfield = ({ label, inputType, placeholder, width }) => {
  return (
    <div className={`mb-4 ${width}`}>
      <label className="block  text-xl font-normal font-leagueSpartan  mb-2 text-white">
        {label}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        className={` rounded-md ${width} py-2 px-3 bg-primary text-gray-700 `}
      />
    </div>
  );
};

export default Inputfield;

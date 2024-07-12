import React from "react";

const Inputfield = ({ label, inputType, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block  text-xl font-normal font-leagueSpartan  mb-2 text-white">
        {label}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        className=" rounded-md w-[45%] py-2 px-3 bg-primary text-gray-700 "
      />
    </div>
  );
};

export default Inputfield;

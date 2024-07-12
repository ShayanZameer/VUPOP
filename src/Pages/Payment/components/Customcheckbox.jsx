import React from "react";
import { FaCheck } from "react-icons/fa";

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <label className="inline-flex relative items-center ">
      <input
        type="checkbox"
        className="appearance-none h-3 w-3 bg-secandary  rounded-sm checked:bg-secandary checked:border-yellow-500 focus:outline-none"
        checked={checked}
        onChange={onChange}
      />
      <FaCheck
        className={`${checked ? "block" : "hidden"} text-black
         pointer-events-none absolute w-2.5 h-2.5`}
      />
    </label>
  );
};

export default CustomCheckbox;

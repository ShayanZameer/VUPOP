import React from "react";
import { CiSearch } from "react-icons/ci";

const Searchinput = ({ onChange, value }) => {
  return (
    <div className="relative flex items-center">
      <CiSearch className="absolute left-2 text-white text-xl" />
      <input
        className="text-white bg-primary border border-secandary h-10 w-48 rounded-md pl-10"
        placeholder="Search for..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Searchinput;

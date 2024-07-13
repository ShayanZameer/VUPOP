import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const IncrementDecrement = ({ initialText, initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="text-white text-xl font-Norwester font-medium">
        {initialText}
      </div>
      <div className=" items-center justify-center ">
        <IoMdArrowDropup className="text-2xl" />

        <IoMdArrowDropdown className="text-2xl -mt-3" />
      </div>
    </div>
  );
};

export default IncrementDecrement;

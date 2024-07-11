import React from "react";
import { Link } from "react-router-dom";

const Asidedetails = ({
  imgSrc,
  ptext,
  to,
  onHover,
  onLeave,
  isActive,
  onClick,
}) => {
  return (
    <div className="flex items-center ">
      <Link
        to={to}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClick}
        className="flex items-center p-2 space-x-2 cursor-pointer rounded-md"
      >
        <div className="mr-2">
          <img src={imgSrc} alt="icon" className="w-5 h-6" />
        </div>
        <div>
          <p className="text-secandary font-Norwester text-base">{ptext}</p>
        </div>
      </Link>

      <div
        className={`h-3 w-3  ${
          isActive ? "bg-custom-gradient" : "bg-transparent"
        } ml-5 w-10 h-4`}
      ></div>
    </div>
  );
};

export default Asidedetails;

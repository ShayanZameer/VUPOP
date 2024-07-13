import React from "react";

const Card = ({ text, amount, bgColor, textColor, padding }) => {
  return (
    <div
      className={` ${bgColor} ${textColor} font-leagueSpartan space-y-2 rounded-md  text-black  ${padding}  `}
    >
      <p className="text-xl font-medium">{text}</p>
      <p className="text-4xl font-bold">{amount}</p>
    </div>
  );
};

export default Card;

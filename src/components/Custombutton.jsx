import React from "react";

const Custombutton = ({ bgColor, text, onClickInvite }) => {
  return (
    <button
      onClick={onClickInvite}
      className={`bg-${bgColor} h-10 w-36 text-black font-leagueSpartan rounded-md hover:opacity-50 `}
    >
      {text}
    </button>
  );
};

export default Custombutton;

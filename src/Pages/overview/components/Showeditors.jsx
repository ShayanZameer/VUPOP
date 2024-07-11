import React from "react";

const Showeditors = ({ ptext, amount }) => {
  return (
    <div className="h-[47%]  bg-secandary rounded-md">
      <p className="font-leagueSpartan p-6 font-extralight text-xl">{ptext}</p>

      <p className="font-leagueSpartan px-6 font-bold text-3xl">{amount}</p>
    </div>
  );
};

export default Showeditors;

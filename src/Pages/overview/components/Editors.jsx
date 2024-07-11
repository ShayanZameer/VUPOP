import React from "react";

// import images from '../../../utils/Imagess';

import { editors } from "../../../utils/Arrays/Editorsarray";

const Editors = () => {
  return (
    <div className="text-white bg-primary rounded-md  p-3 ">
      <div className="font-leagueSpartan font-normal flex justify-between ">
        <p>Name</p>
        <p>Remaining Time</p>
      </div>

      <div className=" overflow-auto main-section">
        {editors.slice(0, 4).map((editor, index) => (
          <div
            key={index}
            className=" flex items-center py-2 rounded shadow-md overflow-auto"
          >
            <div className="flex flex-1  space-x-2">
              <img
                src={editor.image}
                alt={editor.name}
                className="w-8 h-8 object-cover"
              />
              <p className="text-sm font-normal">{editor.name}</p>
            </div>
            <div className=" font-leagueSpartan flex-1 ml-[40%]  ">
              <p className="text-sm text-secandary">
                {" "}
                {editor.remainingTime} hrs
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="font-leagueSpartan  hover:bg-secandary hover:text-black  font-medium text-secandary text-xl border border-secandary h-10 w-24  flex items-center justify-center rounded-md mt-2">
          Manage
        </button>
      </div>
    </div>
  );
};

export default Editors;

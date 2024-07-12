import React from "react";
import { MdFileDownload } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex flex-col">
      <div className=" bg-secandary w-full rounded-t-md">
        <p className="text-black p-5 text-center  font-Norwester  text-6xl">
          Socials
        </p>
      </div>

      <div className="bg-primary w-full rounded-b-md flex justify-between items-center">
        <p className="font-leagueSpartan p-3 text-base font-normal text-white">
          Leaflet template PDF
        </p>
        <MdFileDownload className="bg-secandary text-black mr-3 rounded-sm cursor-pointer" />
      </div>
    </div>
  );
};

export default Card;

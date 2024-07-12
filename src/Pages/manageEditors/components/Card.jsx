import React, { useState } from "react";
import { Manageeditors } from "../../../utils/Arrays/Manageeditorarrat";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Card = () => {
  const [editDuration, setEditDuration] = useState({});

  const toggleEditDuration = (index) => {
    setEditDuration((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {Manageeditors.map((editor, index) => (
        <div key={index} className="  w-full  ">
          <div className="flex justify-between   bg-secandary rounded-t-lg">
            <div className=" p-4  flex-col">
              <div className="flex relative items-center  ">
                <p className="font-extrabold text-4xl text-black font-leagueSpartan">
                  {editor.name}
                </p>
                <span className="aboslute -mt-14  font-extrabold text-6xl text-black leading-none ">
                  .
                </span>
              </div>

              <p className="text-black font-leagueSpartan font-medium text-2xl p-2">
                {editor.email}
              </p>
            </div>

            <div className="text-black pr-4 pt-4 ">
              <RxCross2 />
            </div>
          </div>

          <div className="bg-primary p-4 rounded-b-lg">
            <div className="flex justify-between text-base font-leagueSpartan text-white  font-normal">
              <p> Status</p>

              <p> {editor.status}</p>
            </div>

            <div className="flex justify-between text-base font-leagueSpartan  font-normal text-secandary">
              <p className=""> Active</p>

              <p className=""> {editor.Active}</p>
            </div>

            <div className="flex justify-center items-center space-x-2 p-4 ">
              <button
                onClick={() => {
                  toggleEditDuration(index);
                }}
                className="text-secandary font-leagueSpartan font-normal tetx-base cursor-pointer"
              >
                Edit Duration
              </button>
              {editDuration[index] ? (
                <IoIosArrowUp
                  onClick={() => {
                    toggleEditDuration(index);
                  }}
                  className="cursor-pointer text-secandary text-xl"
                />
              ) : (
                <IoIosArrowDown
                  onClick={() => {
                    toggleEditDuration(index);
                  }}
                  className="cursor-pointer text-secandary text-xl"
                />
              )}
            </div>

            {editDuration[index] && (
              <>
                <div className="text-base font-leagueSpartan font-medium text-white p-1 ">
                  {" "}
                  <p>Add duration</p>{" "}
                </div>

                <div className="flex justify-between items-center space-x-2">
                  <div className="flex space-x-2 items-center">
                    <div className="font-leagueSpartan w-16 h-10 rounded-lg flex items-center justify-center font-medium text-base  bg- bg-quaternary ">
                      <p className="">1</p>
                    </div>
                    <div className="font-leagueSpartan w-16 h-10 rounded-lg  font-medium text-base flex items-center justify-center  bg- bg-quaternary ">
                      <p>Day</p>
                    </div>
                  </div>

                  <div className="">
                    <button
                      className={`bg-secandary h-10 w-10 text-black font-leagueSpartan rounded-md hover:opacity-50 `}
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    onClick={toggleEditDuration}
                    className="text-secandary font-leagueSpartan font-normal tetx-base cursor-pointer"
                  >
                    Remove Editor
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

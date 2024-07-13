import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import images from "../../../utils/Imagess";
import Inputfield from "../../Payment/components/Inputfield";
import Custombutton from "../../../components/Custombutton";

const Editprofile = () => {
  return (
    <div className="overflow-auto">
      <div className="flex py-4 space-x-4">
        <div className="flex-[0.5] ">
          <div className="">
            <img
              className="  h-40 w-40 rounded-md"
              src={images.Img}
              alt="this"
            />
          </div>
          <div className="flex justify-center -mt-4">
            <div className="bg-secandary flex   h-8  w-8 rounded-full ">
              <FaPencilAlt className="text-black h-6 w-6 pl-2 pt-1" />
            </div>
          </div>
        </div>

        <div className="flex-[3] w-full  ">
          <div className="">
            <label className="block  text-xl font-bold font-leagueSpartan  mb-2 text-white">
              Your Name
            </label>

            <input
              className="text-white bg-primary border border-secandary h-12 w-64 rounded-md pl-10"
              placeholder="David"
            />
          </div>

          <div className=" flex space-x-4 py-2">
            <Inputfield
              label="Email"
              inputType="text"
              placeholder=""
              width="w-[500px]"
            />
            <Inputfield
              label="Password"
              inputType="password"
              placeholder=""
              width="w-[70%]"
            />
          </div>
        </div>
      </div>

      <div className="flex py-4 space-x-10">
        <div className="flex-[0.5]">
          <img className="  h-40 w-40 rounded-md" src={images.Img} alt="this" />

          <div className="flex justify-center -mt-4">
            <div className="bg-secandary flex   h-8  w-8 rounded-full ">
              <FaPencilAlt className="text-black h-6 w-6 pl-2 pt-1" />
            </div>
          </div>
        </div>

        <div className="flex-[3]">
          <p className="text-xl font-medium font-leagueSpartan text-white">
            Add your Logo{" "}
          </p>
          <p className="text-base font-medium font-leagueSpartan text-white">
            This logo will be used for notifications and any formal
            communications
          </p>
        </div>
      </div>

      <div className="  flex py-8">
        <div className=" flex justify-center flex-1">
          <Custombutton bgColor="secandary" text=" Save" />
        </div>
        <div className=" flex-1"></div>
      </div>
    </div>
  );
};

export default Editprofile;

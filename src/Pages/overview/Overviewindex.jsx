import React from "react";
import Showeditors from "./components/Showeditors";
import Editors from "./components/Editors";
import Barchart from "./components/Barchart";
import Searchinput from "../../components/Searchinput";
import { CiFilter } from "react-icons/ci";
import Type from "../../components/Type";
import { IoIosArrowDown } from "react-icons/io";
import Activitylog from "./components/Activitylog";

const Overviewindex = () => {
  return (
    <div className="bg-black px-4 ">
      <div className="lg:flex lg:space-x-2 lg:py-5 xm:flex-col xm:flex lg:flex-row  ">
        <div className="lg:space-y-3 lg:mt-4 lg:flex-1 xm:space-y-3 ">
          <Showeditors ptext="Total Editors" amount="7,265" />

          <Showeditors ptext="Active Editors" amount="4" />
        </div>

        <div className=" lg:rounded-md lg:flex-[2] lg:flex-col lg:flex xm:pt-3 ">
          <p className="text-white font-Norwester">Editors</p>
          <div className="bg-primary">
            <Editors />
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:flex-1 xm:pt-3">
          <p className="text-white font-Norwester ">FINANCE REPORT</p>

          <div className="flex items-center bg-secandary   flex-1 rounded-md">
            <Barchart />
          </div>
        </div>

        <div className=" lg:flex lg:flex-col xm:pt-3 ">
          <p className="text-white  font-Norwester">NEXT INVOICE</p>

          <div className=" bg-primary  rounded-md flex-1 flex items-center justify-center  ">
            <p className="text-secandary font-Norwester text-3xl">200$</p>
          </div>
        </div>
      </div>

      <div className="text-white font-Norwester font-normal text-xl my-8">
        <p>Activity Log</p>
      </div>

      <div className="lg:flex lg:flex-row lg:items-center lg:space-x-2 xm:flex xm:flex-col xm:space-y-3">
        <div className="lg:mt-3">
          <Searchinput />
        </div>

        <div className="">
          {" "}
          <Type icon={CiFilter} text="Type" />
        </div>

        <div>
          {" "}
          <Type icon={IoIosArrowDown} text="Sort by" />
        </div>
      </div>

      <div className="flex p-3  rounded-md  bg-primary mt-2">
        <div className="text-lg flex-[2] bg-red  text-white font-leagueSpartan ">
          <p>Name</p>
        </div>

        <div className="text-lg flex-[2]  text-white font-leagueSpartan ">
          <p>Action</p>
        </div>

        <div className="text-lg flex-[2]  text-white font-leagueSpartan ">
          <p>date</p>
        </div>

        <div className="text-lg flex-1  text-white font-leagueSpartan ">
          <p>Export Cost</p>
        </div>
      </div>

      <div className=" bg-primary">
        <Activitylog />
      </div>
    </div>
  );
};

export default Overviewindex;

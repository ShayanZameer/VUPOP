import React from "react";
import Card from "./components/Card";
import Searchinput from "../../components/Searchinput";
import Type from "../../components/Type";
import { CiFilter } from "react-icons/ci";

const ManageEditorsindex = () => {
  return (
    <div className=" bg-black  p-4">
      <div className="font-Norwester font-normal text-white  text-2xl">
        <p>Editors List</p>
      </div>

      <div className="py-4 flex  space-x-4">
        <div>
          <Searchinput />
        </div>
        <div>
          <Type icon={CiFilter} text="Status" />
        </div>
      </div>

      <div className="grid ">
        <Card />
      </div>
    </div>
  );
};

export default ManageEditorsindex;

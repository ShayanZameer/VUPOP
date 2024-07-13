import React from "react";
import Card from "./components/Card";
import Custombutton from "../../components/Custombutton";
import { CiFilter } from "react-icons/ci";
import Searchinput from "../../components/Searchinput";
import IncrementDecrement from "./components/IncrementDecrement";
import Table from "./components/Table";

import Type from "../../components/Type";

const Invoiceindex = () => {
  const handlebutton = () => {
    console.log("button is pressed ");
  };
  return (
    <div className="bg-black text-white  ">
      <div className="p-4 flex space-x-5">
        <div className=" ">
          <Card
            bgColor="bg-secandary "
            text="       Next Invoice"
            amount="$200"
            textColor="text-black"
            padding="py-6 px-20"
          />
        </div>
        <div>
          <Card
            bgColor="bg-primary "
            text="Total Outstanding Amount"
            amount="$200"
            textColor="text-white"
            padding="p-6"
          />
        </div>
      </div>
      <div className="p-4">
        <p className="font-Norwester text-xl font-medium">Invoice Details</p>
      </div>

      <div className="flex justify-between  ">
        <div className="pb-2 flex space-x-2">
          <Searchinput />

          <Type icon={CiFilter} text="Type" />
          <Type icon={CiFilter} text="Type" />
          <Type icon={CiFilter} text="Type" />
          <Type icon={CiFilter} text="Type" />
        </div>
        <div className="">
          <Custombutton
            text="Download all"
            bgColor="secandary"
            onClickInvite={handlebutton}
          />
        </div>
      </div>

      <div className="flex py-4  overflow-auto bg-primary rounded-t-md    ">
        <div className="flex-1 px-4">
          <IncrementDecrement initialText="Invoice ID" initialValue={0} />
        </div>
        <div className="flex-1">
          {" "}
          <IncrementDecrement initialText="Issued Date" initialValue={0} />
        </div>
        <div className="flex-1">
          {" "}
          <IncrementDecrement initialText="Due Date" initialValue={0} />
        </div>
        <div className="flex-1">
          {" "}
          <IncrementDecrement initialText="Amount" initialValue={0} />
        </div>
        <div className="flex-1">
          <p className="font-Norwester text-xl font-medium">Status</p>
        </div>
        <div className="flex-1">
          <p className="font-Norwester text-xl font-medium">Action</p>
        </div>
      </div>

      <div className="bg-primary overflow-auto h-96 main-section ">
        <Table />
      </div>

      <div className=" text-white">hello world</div>
    </div>
  );
};

export default Invoiceindex;

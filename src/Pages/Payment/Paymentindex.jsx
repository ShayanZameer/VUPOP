import React from "react";
import { useState } from "react";

import Inputfield from "./components/Inputfield";
import Customcheckbox from "./components/Customcheckbox";
import Custombutton from "../../components/Custombutton";

const Paymentindex = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="bg-black h-screen p-4 overflow-auto main-section">
      <div className="font-Norwester text-white font-medium text-2xl">
        <p>Introduction and Instructions</p>
      </div>

      <div className="font-leagueSpartan text-base text-white font-normal py-4">
        <p>
          Welcome to the Payment Options section. We use GoCardless for secure
          and efficient direct debit payments. Please provide your bank details
          below to set up your payment method.
        </p>
      </div>

      <div className="font-leagueSpartan text-secandary font-medium text-base">
        <p>[Learn more about GoCardless]</p>
      </div>

      <div className="font-Norwester text-white font-medium text-xl py-4">
        <p>Bank Account Information</p>
      </div>

      <div className="py-4">
        <label className="block  text-xl font-bold font-leagueSpartan  mb-2 text-white">
          Account Holder Name
        </label>

        <input
          className="text-white bg-primary border border-secandary h-12 w-64 rounded-md pl-10"
          placeholder="David"
        />
      </div>

      <div>
        <Inputfield
          label="Bank account number"
          inputType="text"
          placeholder=""
          width="45%"
        />
        <Inputfield
          label="Sort Code"
          inputType="text"
          placeholder="xx-xx-xx"
          width="45%"
        />

        <Inputfield
          label="Bank Name"
          inputType="text"
          placeholder=""
          width="45%"
        />
      </div>

      <div className="text-white font-leagueSpartan font-normal text-base">
        <p>
          By providing your bank details, you authorize{" "}
          <span className="text-secandary">Vupop</span> to set up direct debit
          payments through GoCardless.
        </p>

        <p className="py-1">
          <span className="text-secandary">
            [
            <span className="">
              {""}
              <Customcheckbox
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              ]{" "}
            </span>
          </span>
          I agree to the
          <span className="text-secandary underline">
            {" "}
            terms and conditions
          </span>
        </p>
      </div>

      <div className="py-2">
        <Custombutton text="Save Details" bgColor="secandary" />
      </div>
    </div>
  );
};

export default Paymentindex;

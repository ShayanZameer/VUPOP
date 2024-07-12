import React from "react";

const Paymentindex = () => {
  return (
    <div className="bg-black h-screen p-4">
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
    </div>
  );
};

export default Paymentindex;

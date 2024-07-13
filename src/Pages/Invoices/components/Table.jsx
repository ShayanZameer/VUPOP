import React from "react";
import invoiceData from "../../../utils/Arrays/InvoiceData";

const Table = () => {
  return (
    <div className="p-4 ">
      {invoiceData.map((invoice, index) => (
        <div key={index} className="    flex">
          <div className=" underline text-secandary flex-1">
            {invoice.invoiceId}
          </div>
          <div className=" flex-1 ml-3 "> {invoice.issueDate}</div>
          <div className=" flex-1 "> {invoice.dueDate}</div>
          <div className="flex-1 text-secandary">
            ${invoice.amount.toFixed(2)}
          </div>
          <div className=" flex-1 "> {invoice.status}</div>
          <div className="flex-1 flex space-x-2">
            <p className="text-secandary underline cursor-pointer">
              Mark as Paid
            </p>
            <p className="text-secandary underline cursor-pointer">Download</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;

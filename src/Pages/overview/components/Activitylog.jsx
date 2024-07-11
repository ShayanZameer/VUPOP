import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { activityLogs } from "../../../utils/Arrays/Activitylogarray";

const Activitylog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(activityLogs.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = activityLogs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="text-4xl text-white">
      <div className="">
        {currentItems.map((log, index) => (
          <div key={index} className="flex p-2 mb-2 rounded">
            <div className="text-sm text-secandary flex-[2] font-semibold">
              {log.name}
            </div>
            <div className="text-sm flex-[2]">{log.action}</div>
            <div className="text-sm flex-[2]">{log.date}</div>
            <div className="text-sm flex-1 text-secandary">
              ${log.exportCost}
            </div>
          </div>
        ))}
      </div>
      <div className="py-4 flex justify-end items-center space-x-2">
        <IoIosArrowBack
          onClick={handlePrevious}
          className="text-secandary text-base cursor-pointer "
        />
        <button
          onClick={handlePrevious}
          className=" hover:bg-secandary hover:text-black hover:rounded-sm text-base text-secandary  "
        >
          {" "}
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? " text-secandary text-base hover:text-black hover:bg-secandary"
                : "text-secandary text-base hover:text-black hover:bg-secandary"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          className="px-2 py-1 text-base text-secandary hover:bg-secandary hover:text-black hover:rounded-sm"
        >
          Next{" "}
        </button>
        <IoIosArrowForward
          onClick={handleNext}
          className="text-secandary text-base cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Activitylog;

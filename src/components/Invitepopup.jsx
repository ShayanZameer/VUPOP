import React from "react";
import { RxCross2 } from "react-icons/rx";

const Invitepopup = ({ onClose }) => {
  const sentInvite = () => {
    console.log("Send ");
  };
  return (
    <div className="fixed inset-0 flex  justify-center items-center  backdrop-blur-sm   z-50">
      <div className="relative bg-primary  rounded-lg w-[50%] h-52 border-tertiary border border-t-2 border-l-2     shadow-lg z-10">
        <div className="flex items-center p-3  border border-tertiary ">
          <p className=" font-Norwester  font-normal text-base text-white ">
            Invite
          </p>
          <RxCross2
            className="absolute cursor-pointer   right-2 text-secandary"
            onClick={onClose}
          />
        </div>

        <div className="flex justify-between py-3 items-center ">
          <div className="p-3 ">
            <input
              type="text"
              placeholder="Type Email for Invite"
              className="   h-8 border text-white w-[500px] border-secandary rounded-sm  bg-primary"
            />{" "}
          </div>
          <div className="mr-2">
            <button
              onClick={sentInvite}
              className={`bg-secandary h-8 w-20 text-black font-leagueSpartan rounded-md hover:opacity-50 `}
            >
              Send Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitepopup;

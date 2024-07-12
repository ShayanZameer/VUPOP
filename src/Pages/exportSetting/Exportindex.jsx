import React from "react";
import { useState } from "react";

const Exportindex = () => {
  const [selectedFormat, setSelectedFormat] = useState("");
  const [codecselectedFormat, setCodecSelectedFormat] = useState("");

  return (
    <div className="bg-black p-4 h-screen">
      <div className="text-xl text-white font-normal font-Norwester">
        <p>Settings</p>
      </div>

      <div className="py-4">
        <div>
          <p className="text-white font-leagueSpartan font-medium text-xl">
            Format
          </p>

          <div className="bg-quinary text-white w-80 flex justify-evenly rounded-lg p-2">
            <div
              onClick={() => setSelectedFormat("Mp4")}
              className={`font-leagueSpartan cursor-pointer text-xl font-medium p-3 rounded-lg ${
                selectedFormat === "Mp4"
                  ? "bg-secandary text-black"
                  : "text-secandary hover:bg-secandary hover:text-black"
              }`}
            >
              Mp4
            </div>
            <div
              onClick={() => setSelectedFormat("MXF")}
              className={`font-leagueSpartan cursor-pointer text-xl font-medium p-3 rounded-lg ${
                selectedFormat === "MXF"
                  ? "bg-secandary text-black"
                  : "text-secandary hover:bg-secandary hover:text-black"
              }`}
            >
              MXF
            </div>
            <div
              onClick={() => setSelectedFormat("ProRes")}
              className={`font-leagueSpartan cursor-pointer text-xl font-medium p-3 rounded-lg ${
                selectedFormat === "ProRes"
                  ? "bg-secandary text-black"
                  : "text-secandary hover:bg-secandary hover:text-black"
              }`}
            >
              ProRes
            </div>
            <div
              onClick={() => setSelectedFormat("Avd Dnx")}
              className={`font-leagueSpartan cursor-pointer text-xl font-medium p-3 rounded-lg ${
                selectedFormat === "Avd Dnx"
                  ? "bg-secandary text-black"
                  : "text-secandary hover:bg-secandary hover:text-black"
              }`}
            >
              Avd Dnx
            </div>
          </div>
        </div>

        <div>
          <div className="py-4">
            <p className="text-white font-leagueSpartan font-medium text-xl">
              Codec
            </p>

            {/* Hello */}

            <div className="bg-quinary text-white w-64  flex justify-evenly rounded-lg p-2">
              <div
                onClick={() => setCodecSelectedFormat("H.264")}
                className={`font-leagueSpartan cursor-pointer text-xl font-medium p-3 rounded-lg ${
                  codecselectedFormat === "H.264"
                    ? "bg-secandary text-black"
                    : "text-secandary hover:bg-secandary hover:text-black"
                }`}
              >
                H.264
              </div>
              <div
                onClick={() => setCodecSelectedFormat("HeVC")}
                className={`font-leagueSpartan cursor-pointer text-xl font-medium p-3 rounded-lg ${
                  codecselectedFormat === "HeVC"
                    ? "bg-secandary text-black"
                    : "text-secandary hover:bg-secandary hover:text-black"
                }`}
              >
                HeVC
              </div>
              <div
                onClick={() => setCodecSelectedFormat("AV 1")}
                className={`font-leagueSpartan cursor-pointer text-xl font-medium p-3 rounded-lg ${
                  codecselectedFormat === "AV 1"
                    ? "bg-secandary text-black"
                    : "text-secandary hover:bg-secandary hover:text-black"
                }`}
              >
                AV 1
              </div>
            </div>
          </div>
          <div>{/* world */}</div>

          <div className="py-4">
            <button
              className="text-black w-64 bg-secandary font-leagueSpartan rounded-md font-medium p-2  hover:opacity-50 
            "
            >
              Set as Default Export Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exportindex;

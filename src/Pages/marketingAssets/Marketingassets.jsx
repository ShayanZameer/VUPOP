import React from "react";

import Card from "./components/Card";

const Marketingassets = () => {
  return (
    <div className="bg-black h-screen overflow-auto main-section p-4">
      <div className="text-xl font-Norwester font-bold text-white">
        <p>ASSETS</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Marketingassets;

import React, { useState, useEffect, useContext } from "react";
import Asidedetails from "./Asidedetails";
import images from "../utils/Imagess";
import { SectionContext } from "../context/SectionCon.jsx";
const Aside = () => {
  const [activeItem, setActiveItem] = useState(null);

  const [hoveredItem, setHoveredItem] = useState(null);
  const { setCurrentSection } = useContext(SectionContext);

  useEffect(() => {
    const storedActiveItem = localStorage.getItem("activeItem");
    if (storedActiveItem) {
      setActiveItem(storedActiveItem);
    }
  }, []);
  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClick = (id) => {
    setActiveItem(id);
    localStorage.setItem("activeItem", id);
    setCurrentSection(array[id].ptext);
  };

  const toggleAsideVisibility = () => {
    setIsAsideVisible(!isAsideVisible);
  };

  const array = [
    { imgSrc: images.Dashboard, ptext: "OVERVIEW", to: "/" },
    {
      imgSrc: images.Manageeditors,
      ptext: "MANAGE EDITORS",
      to: "/Manageeditors",
    },
    { imgSrc: images.Share, ptext: "EXPORT SETTINGS", to: "/Exportsetting" },
    { imgSrc: images.Payment, ptext: "PAYMENT OPTIONS", to: "/Payment" },
    { imgSrc: images.Invoice, ptext: "INVOICES", to: "/Invoices" },
    { imgSrc: images.Vault, ptext: "VAULT", to: "/Vault" },
    {
      imgSrc: images.Marketingassets,
      ptext: "MARKETING ASSETS",
      to: "/Marketingassets",
    },
  ];

  return (
    <>
      <div className="bg-primary w-64 py-8 px-3 lg:block overflow-y-auto h-screen main-section ">
        <div className="mt-4 space-y-6">
          {array.map((item, index) => (
            <Asidedetails
              key={index}
              imgSrc={item.imgSrc}
              ptext={item.ptext}
              to={item.to}
              isActive={activeItem === index.toString()}
              onHover={() => handleMouseEnter(index.toString())}
              onLeave={handleMouseLeave}
              onClick={() => handleClick(index.toString(), item.ptext)}
            />
          ))}
        </div>

        <div className="border-b-2 my-20 border-secandary"></div>

        <div className="flex space-x-2">
          <img
            className="h-12 w-12 rounded-md"
            src={images.Img}
            alt="Profile"
          />
          <div className="text-white">
            <p>David</p>
            <p>abc@gmail.com</p>
          </div>
        </div>

        <div className="my-8 space-y-2">
          <Asidedetails
            imgSrc={images.Setting}
            ptext="Settings"
            to="/Settings"
            isActive={activeItem === "settings"}
            onHover={() => handleMouseEnter("settings")}
            onLeave={handleMouseLeave}
            onClick={() => handleClick("settings")}
          />
          <Asidedetails
            imgSrc={images.Logout}
            ptext="Log Out"
            to="/Logout"
            isActive={activeItem === "logout"}
            onHover={() => handleMouseEnter("logout")}
            onLeave={handleMouseLeave}
            onClick={() => handleClick("logout")}
          />
        </div>
      </div>
    </>
  );
};

export default Aside;

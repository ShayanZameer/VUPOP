// // import React, { useState, useEffect } from "react";
// // import { Outlet } from "react-router-dom";
// // import Navbar from "../../components/Navbar";
// // import Aside from "../../components/Aside";
// // import { FaBars } from "react-icons/fa";

// // const Layout = () => {
// //   const [isAsideVisible, setIsAsideVisible] = useState(true);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth < 1100) {
// //         setIsAsideVisible(false);
// //       } else {
// //         setIsAsideVisible(true);
// //       }
// //     };

// //     window.addEventListener("resize", handleResize);
// //     handleResize();

// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const toggleAside = () => {
// //     setIsAsideVisible(!isAsideVisible);
// //   };

// //   return (
// //     <div className="flex flex-col h-screen">
// //       <div className="fixed top-0 w-full z-10">
// //         <Navbar />
// //       </div>

// //       <div className="flex flex-1 pt-16">
// //         {/* Toggle Button for Small Screens */}
// //         <div className="lg:hidden fixed top-16 left-0 p-2 z-20">
// //           <FaBars
// //             className="text-white h-6 w-6 cursor-pointer"
// //             onClick={toggleAside}
// //           />
// //         </div>

// //         {/* Sidebar (Aside) */}
// //         <div
// //           className={`fixed top-16 main-section left-0 w-64 h-[calc(100vh-4rem)] overflow-y-auto bg-primary transition-transform duration-300 ${
// //             isAsideVisible ? "translate-x-0" : "-translate-x-64"
// //           }`}
// //         >
// //           <Aside />
// //         </div>

// //         {/* Main Content */}
// //         <main
// //           className={`ml-64 flex-1  overflow-auto transition-all duration-300 ${
// //             isAsideVisible ? "ml-64" : "ml-0"
// //           }`}
// //         >
// //           <Outlet />
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Layout;

// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import Aside from "../../components/Aside";

// const Layout = () => {
//   return (
//     <div className="flex flex-col h-screen">
//       <div className="fixed top-0 w-full z-10">
//         <Navbar />
//       </div>

//       <div className="flex flex-1 pt-16">
//         <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] main-section overflow-y-auto bg-primary">
//           <Aside />
//         </div>

//         <main className="ml-64 flex-1 overflow-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Aside from "../../components/Aside";
import { FaBars } from "react-icons/fa";

const Layout = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <div className="flex pt-16">
          <div className={`flex-1 hidden lg:flex bg-primary h-screen`}>
            <Aside />
          </div>

          <div
            className="absolute p-1 lg:hidden z-30  left-4"
            onClick={toggleMenu}
          >
            <FaBars className="text-white text-3xl" />
          </div>

          {menu && (
            <div className={`flex-1 fixed lg:hidden bg-primary z-20 h-screen`}>
              <Aside />
            </div>
          )}

          {menu && window.innerWidth < 1200 && (
            <div
              className="bg-black fixed inset-0 opacity-50 z-10"
              onClick={toggleMenu}
            />
          )}

          <div className="flex-[4] main-section h-screen overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

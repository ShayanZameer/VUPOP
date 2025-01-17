import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Managerlayout.jsx/layout";
import Overviewindex from "../Pages/overview/Overviewindex";
import Exportindex from "../Pages/exportSetting/Exportindex";
import Paymentindex from "../Pages/Payment/Paymentindex";
import Marketingassets from "../Pages/marketingAssets/Marketingassets";
import Settingsindex from "../Pages/Settings/Settingsindex";
import Invoiceindex from "../Pages/Invoices/Invoiceindex";

import ManageEditorsindex from "../Pages/manageEditors/ManageEditorsindex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Overviewindex />,
      },
      {
        path: "Manageeditors",
        element: <ManageEditorsindex />,
      },
      {
        path: "Exportsetting",
        element: <Exportindex />,
      },
      {
        path: "Payment",
        element: <Paymentindex />,
      },
      {
        path: "Marketingassets",
        element: <Marketingassets />,
      },
      {
        path: "Settings",
        element: <Settingsindex />,
      },
      {
        path: "Invoices",
        element: <Invoiceindex />,
      },
    ],
  },
]);

export default router;

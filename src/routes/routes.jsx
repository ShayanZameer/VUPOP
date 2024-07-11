


import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Managerlayout.jsx/layout';
import Overviewindex from '../Pages/overview/Overviewindex';

import ManageEditorsindex from '../Pages/manageEditors/ManageEditorsindex';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [

            {
                path: '/',
                element: <Overviewindex />,
            },
            {
                path: 'Manageeditors',
                element: <ManageEditorsindex />,
            },


        ],
    },







]);

export default router;




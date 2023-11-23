import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "./Admin/signin";
import AdminSignUp from "./Admin/signup";
import HomePage from "./Homepage";
import UserLogin from "./User/signin";
import UserSignUp from "./User/signup";
import UserList from "./Admin/alluser";
import FormExample from "./common/user"
import Poster from "./common/poster"
import App from './Homepage';
import FormExampleAdmin from './common/admin';
import Drawer from './common/drawer';
// import { ExportToExcel } from './Admin/csv';
import Sheet from './common/excel';
import Forget from './Admin/forget';
import UserForget from './User/forget';
import AssoProfile from './Admin/profile'
import Information from './Trains/homepage';
import Weather from './Weather/page';
import Cricket from './Cricket/Cricket';



const router = createBrowserRouter(


  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/userlogin",
      element: < UserLogin />,
    },
    {
      path: "/adminlogin",
      element: <AdminLogin />,
    },
    {
      path: "/adminsignup",
      element: <AdminSignUp />,
    },
    {
      path: "/form/:id",
      element: < FormExample />,
    },
    {
      path: "/userlist",
      element: <UserList />,
    },
    {
      path: "/usersignup",
      element: < UserSignUp />,
    },

    {
      path: "/poster/:id",
      element: < Poster />,
    },
    {
      path: "/form/admin/:id",
      element: < FormExampleAdmin />,
    },
    {
      path: "/csv/:id",
      element: < Sheet />,
    },
    {
      path: "/Admin/forget",
      element: < Forget />,
    },
    {
      path: "/User/forget",
      element: < UserForget />,
    },
    {
      path: "/profile",
      element: <AssoProfile />,
    },
    {
      path: "/train",
      element: <Information />
    },
    {
      path: "/weather",
      element: <Weather />
    },
    {
      path: "/cricket",
      element: <Cricket />
    }





  ]

);


export default router;


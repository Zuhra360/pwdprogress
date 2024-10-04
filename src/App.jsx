import React from "react";
import {RouterProvider} from "react-router-dom";
import {router}  from "./Routes/routes.jsx";



export const App = () => {
  
  return <RouterProvider router={router} />;
};
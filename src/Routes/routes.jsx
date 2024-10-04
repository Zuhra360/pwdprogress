import {createBrowserRouter} from "react-router-dom";
import { HomePage } from "../components/HomePage.jsx";
import { PinCode } from "../components/PinCode.jsx";

export const router = createBrowserRouter([
    {
      path:  "/",
      element: <HomePage/>,
    },
    {
      path:  "pincode",
      element: <PinCode/>,
    },
    
    {
      path:  "*",
      element: <div>404 Not Found</div>,
    }
]);
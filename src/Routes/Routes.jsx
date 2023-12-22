
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Feedback from "../pages/Feedback/Feedback";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
  

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/feedback',
                element:<Feedback/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    }
])
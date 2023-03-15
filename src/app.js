import ReactDOM  from "react-dom/client";
import React, { Children } from "react";
import { Heading } from "./components/Header";
import Footer from "./components/Footer"
import { Body } from "./components/Body";
import About from "./components/About"
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom"
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/Restromenu";


const Maincomponent = () =>{
    return(
        <>
        <Heading/>
        <Outlet/>
        <Footer/>
        </>
    )
}
const appRoute=createBrowserRouter([
    {
        path:"/",
        element:<Maincomponent/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/restaurantmenu/:id",
                element:<RestroMenu/>
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRoute}/>)
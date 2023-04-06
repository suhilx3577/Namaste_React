import ReactDOM  from "react-dom/client";
import { useState } from "react";
import React, {lazy, Suspense } from "react";
import { Heading } from "./components/Header";
import Footer from "./components/Footer"
import { Body } from "./components/Body";
import About from "./components/About"
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom"
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/Restromenu";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
import store from "./utils/store"
import { Provider } from "react-redux";
import Cart from "./components/Cart";

// import Instamart from "./components/Instamart";


const Instamart = lazy(()=>import("./components/Instamart"))

const Maincomponent = () =>{
    const [user,setUser] = useState(
        {
            name:"",
            email:"suhil@gmail.com"
        }
    );

    return(
        <>
        <Provider store={store}>
        <userContext.Provider value={{user:user,setUser:setUser}}>
        <Heading/>
        <Outlet/>
        <Footer/>
        </userContext.Provider>
        </Provider>
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
            },
            {
                path:"/instamart",
                element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRoute}/>)
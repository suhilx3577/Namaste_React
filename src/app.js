import ReactDOM  from "react-dom/client";
import React from "react";
import { Heading } from "./components/Header";
import Footer from "./components/Footer"
import { Body } from "./components/Body";


const Maincomponent =() =>{
    return(
        <>
        <Heading/>
        <Body/>
        <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Maincomponent/>)
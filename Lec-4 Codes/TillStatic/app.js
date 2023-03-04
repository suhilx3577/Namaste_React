import  ReactDOM  from "react-dom/client";
import React from "react";

const Heading =()=> (
    <img className= "logo"
    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="
    alt="logo"/>
);

const NavItems =()=> (
    <div className="navbar">
        <h3>HOME</h3>
        <h3>ABOUT</h3>
        <h3>CART</h3>
        <h3>CONTACT</h3>
    </div>
);

const burgerKing ={
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yabdhpx21zk24cnczpnf",
    name:"Tandoori",
    cusines:["Arabian","lebaneese"],
    stars:"3.8",
}

const RestCards =()=>{
    return (
        <div className="card">
            <img src={burgerKing.image} alt="image"/>
            <h3>{burgerKing.name}</h3>
            <h4>{burgerKing.cusines.join(" ,")}</h4>
            <h5>{burgerKing.stars}</h5>
        </div>
    )
}

const HeaderComponent =() =>{
    return(
        <>
        <div className="header">
        <Heading/>
        <NavItems/>
        </div>
        <div className="body">
            <RestCards/>
            <RestCards/>
            <RestCards/>
        </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeaderComponent/>)
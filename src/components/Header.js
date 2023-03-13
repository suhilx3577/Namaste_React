import { useState } from "react";


const NavItems =()=> {

    const[login,setLogin] = useState(false)
    
    return(

        <div className="navbar">
        <h3>HOME</h3>
        <h3>ABOUT</h3>
        <h3>CART</h3>
        <h3>CONTACT</h3>
        {/* only expressions work not statements     
            Ternary Operators are Expressions    */}
        { 
        login ? <button onClick={
            ()=>{
                setLogin(false)}
            }>Logout</button> : <button onClick={
                ()=>{
                    setLogin(true)
            }}>Login</button> }

    </div>
)
};




export const Heading =()=> {

    return(
    <>
        <div className="header">
            <img className= "logo"
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf="
            alt="logo"/>
            <NavItems/>
        </div>

    </>
    )

};




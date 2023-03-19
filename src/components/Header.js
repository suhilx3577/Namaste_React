import { useState } from "react";
import Food from "../assets/images/Food.png"
import {Link} from "react-router-dom"


const NavItems =()=> {

    const[login,setLogin] = useState(false)
    
    return(

        <div className="navbar">
        <Link to="/"><h3>HOME</h3></Link>
        <Link to="/about"><h3>ABOUT</h3></Link>
        <Link to="/cart"><h3>CART</h3></Link>
        <Link to="/contact"><h3>CONTACT</h3></Link>
        <Link to="/instamart"><h3>INSTAMART</h3></Link>
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
            src={Food}
            alt="logo"/>
            <NavItems/>
        </div>

    </>
    )

};




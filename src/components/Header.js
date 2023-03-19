import { useState } from "react";
import Food from "../assets/images/Food.png"
import {Link} from "react-router-dom"


const NavItems =()=> {

    const[login,setLogin] = useState(false)
    
    return(

        <div className="flex mt-4 justify-between gap-8 text-center text-white font-bold">
        <Link to="/"><h3>HOME</h3></Link>
        <Link to="/about"><h3>ABOUT</h3></Link>
        <Link to="/cart"><h3>CART</h3></Link>
        <Link to="/contact"><h3>CONTACT</h3></Link>
        <Link to="/instamart"><h3>INSTAMART</h3></Link>
        {/* only expressions work not statements     
            Ternary Operators are Expressions    */}
        <div className="mb-4">
        { 
        login ? <button onClick={
            ()=>{
                setLogin(false)}
            }>Logout</button> : <button onClick={
                ()=>{
                    setLogin(true)
            }}>Login</button> 
        }

        </div>

    </div>
)
};




export const Heading =()=> {

    return(
    <>
        <div className="flex justify-between  bg-blue-300 shadow-lg">
            <img className= "w-16 "
            src={Food}
            alt="logo"/>
            <NavItems/>
        </div>

    </>
    )

};




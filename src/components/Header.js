import { useState,useContext } from "react";
import Food from "../assets/images/Food.png"
import {Link} from "react-router-dom"
import userContext from "../utils/userContext";
import {  useSelector } from "react-redux";

const NavItems =()=> {

    const[login,setLogin] = useState(false)
    
    const cartItems = useSelector(store=>store.cart.items)

    console.log(cartItems)
    
    return(

        <div className="flex mt-4 justify-between gap-8 text-center text-white font-bold">
        <Link to="/"><h3>HOME</h3></Link>
        <Link to="/about"><h3>ABOUT</h3></Link>
        <Link to="/cart"><h3>CART -{cartItems.length}</h3></Link>
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

    const {user} = useContext(userContext)

    return(
    <>
        <div className="flex justify-between  bg-purple-400 shadow-lg">
            <img className= "w-16 "
            src={Food}
            alt="logo"/>
            <h1 className="mt-4 font-bold"> {user.name}</h1>
            <NavItems/>
        </div>

    </>
    )

};




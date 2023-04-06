import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import Fooditem from "./Fooditem";

const Cart =()=>{

    const dispatch = useDispatch()
    const handleClear=()=>{
        dispatch(clearCart())
    }

    const cartItems = useSelector((store)=>store.cart.items)

    return(
        <div>
            <div className="flex gap-10">
            <h1 className="font-bold text-3xl text-purple-700 ">This is The Cart Page</h1>
            <button className="bg-red-300  text-white rounded-md w-24" onClick={()=>handleClear()}> Clear Cart</button>
            </div>

            <div className="flex  justify-start flex-wrap gap-4 bg-purple-100">
                {cartItems.map((item)=> 
                    <Fooditem key={item.id} {...item}/>
                )}

            </div>
        </div>
    )
}

export default Cart;
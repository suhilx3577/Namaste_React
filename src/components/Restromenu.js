import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import { IMG_CDN_URL, menuLink } from "../constants";
import Shimmer from "./Shimmer";
import useRestromenu from "../utils/useRestroMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestroMenu =() =>{

    const params = useParams();
    //we can even do the destructuring
    const {id} = params

    //created a custom hook babyyy
    const restaurant = useRestromenu(id);

    const heading = restaurant?.cards?.[0]?.card?.card?.info
    const menulist = restaurant?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    const dispatch = useDispatch();

    const handleAddItem =(item) =>{
        dispatch(addItem(item));
    }


    return restaurant==null? <Shimmer/> : (
        <>
        <div className="flex gap-5">
            <div className=" font-semibold">
                <h1 className="font-bold font-serif text-3xl">{heading?.name}</h1>
                <img className="w-64 h-44 p-2 m-2" src={ IMG_CDN_URL + heading?.cloudinaryImageId} alt="Image Logo"/>
                <h3 key="heading1">--{heading?.city}</h3>
                <h3 key="heading2">--{heading?.areaName}</h3>
                <h3 key="heading3">--{heading?.avgRating} Stars</h3>
            </div>
            <div>
                <h1 className="font-bold text-3xl">MENU</h1>
                <div className="m-2">
                    {
                    menulist.map((rest,i)=>{
                        return(
                        <>
                            <h2 className="font-semibold" >{rest.card?.card?.title}</h2>
                            <ul key={rest.card?.card?.title}>
                                {rest.card?.card?.itemCards?.map((item,i)=>{
                                    return(
                                        <li key={item?.card?.info?.id}>
                                            {item?.card?.info?.name}
                                            <button className="p-1 m-2 bg-green-200"
                                            onClick={()=>handleAddItem(item?.card?.info)}>Add Item</button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </>
                        )
                    })
                    }

                </div>
            </div>

        </div>
        </>
    )
}

export default RestroMenu
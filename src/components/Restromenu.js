import { useParams } from "react-router-dom"
import { useEffect,useState } from "react";
import { IMG_CDN_URL, menuLink } from "../constants";
import Shimmer from "./Shimmer";

const RestroMenu =() =>{

    const params = useParams();
    //we can even do the destructuring
    const {id} = params

    const[restaurant,setRestaurant] = useState();

    useEffect(()=>{
        getRestroMenu();
    },[]);

    async function getRestroMenu (){
        const data = await fetch(menuLink+id);
        const json = await data.json();
        setRestaurant(json.data);
        console.log(json.data);
    }

    return restaurant==null? <Shimmer/> : (
        <>
        <div className="restro-1">
            <div className="restro-details-1">
                <h1>Welcome to Restaurant {restaurant.name}</h1>
                <img src={ IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="Image Logo"/>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.area}</h3>
                <h3>{restaurant.avgRating} Stars</h3>
            </div>
            <div className="restro-menu-1">
                <h1>MENU</h1>
                <ul>
                    {
                        Object.values(restaurant?.menu?.items).map((item)=>(
                        <li key={item?.id}> {item?.name}</li>
                        ))
                    }
                </ul>
            </div>

        </div>
        </>
    )
}

export default RestroMenu
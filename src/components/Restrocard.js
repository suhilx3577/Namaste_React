import { IMG_CDN_URL , menuLink} from "../constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestCards =({name,cloudinaryImageId,area,cuisines,id})=>{

    const {user} = useContext(userContext);

    return (
        <div className="w-52 h-80 gap-4 bg-pink-100 shadow-lg rounded-md mt-4 text-center">
            <img className="p-2 rounded-lg" src={IMG_CDN_URL+cloudinaryImageId} alt="image"/>
            <h3 className="font-bold">{name}</h3>
            <p className="font-serif">{cuisines.join(" ,")}</p>
            <h5 className="font-serif">{area}</h5>
            <h5 className="font-bold">{user.name} {user.email}</h5>
        </div>

    )
  }

export default RestCards
import { IMG_CDN_URL , menuLink} from "../constants";
import { Link } from "react-router-dom";

const RestCards =({name,cloudinaryImageId,area,cuisines,id})=>{
    return (
        <div className="w-52 h-80 gap-4 bg-pink-100 shadow-lg rounded-md mt-4 text-center">
            <img className="p-2 rounded-lg" src={IMG_CDN_URL+cloudinaryImageId} alt="image"/>
            <h3 className="font-bold">{name}</h3>
            <p className="font-thin">{cuisines.join(" ,")}</p>
            <h5 className="font-semibold">{area}</h5>
        </div>

    )
  }

export default RestCards
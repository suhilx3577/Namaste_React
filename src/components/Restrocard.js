import { IMG_CDN_URL , menuLink} from "../constants";
import { Link } from "react-router-dom";

const RestCards =({name,cloudinaryImageId,area,cuisines,id})=>{
    return (
        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId} alt="image"/>
            <h3>{name}</h3>
            <p>{cuisines.join(" ,")}</p>
            <h5>{area}</h5>
        </div>

    )
  }

export default RestCards
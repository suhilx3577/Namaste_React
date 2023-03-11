import { IMG_CDN_URL } from "../constants";

const RestCards =({name,cloudinaryImageId,area,cuisines})=>{
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
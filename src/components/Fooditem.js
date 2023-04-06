
import { IMG_CDN_URL } from "../constants";

const Fooditem = ({name,category,price,description,imageId}) => {

  return (
          <div className="w-52 h-80 gap-4 bg-pink-100 shadow-lg rounded-md mt-4 text-start text-black">
            <img
              className="p-2 rounded-lg"
              src={IMG_CDN_URL + imageId}
              alt="image"
            />
            <h3 className="font-semibold text-xl" >{name}</h3>
            <h5 className="font-semibold">{category}</h5>

            <h5 className="font-semibold">{price / 100}</h5>
            <p className="font-semibold text-xs">{description}</p>
          </div>
  );
};

export default Fooditem;

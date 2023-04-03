
import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer =() =>{

    const {user} = useContext(userContext);
    return(
        <div className="mt-2">
        <h1 className= " p-4 m-4 text-red-400">this page is developed by {user.name}</h1>
        </div>
    )
};

export default Footer
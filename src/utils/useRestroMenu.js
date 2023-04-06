import { menuLink } from "../constants";

import { useState, useEffect } from "react";


const useRestromenu =(id) =>{

    const[restaurant,setRestaurant] = useState();

    
    useEffect(()=>{
        getRestroMenu();
    },[]);
    
    async function getRestroMenu (){
        const data = await fetch(menuLink+id);
        const json = await data.json();
        setRestaurant(json.data);
    }
    return restaurant;
}

export default useRestromenu;
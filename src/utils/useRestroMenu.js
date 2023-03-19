import { menuLink } from "../constants";

import { useState, useEffect } from "react";


const useRestromenu =(id) =>{

    const[restaurant,setRestaurant] = useState();

    async function getRestroMenu (){
        const data = await fetch(menuLink+id);
        const json = await data.json();
        setRestaurant(json.data);
        console.log(json.data);
    }

    useEffect(()=>{
        getRestroMenu();
    },[]);

    return restaurant;
}

export default useRestromenu;
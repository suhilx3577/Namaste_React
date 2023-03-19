import { restroList } from "../constants"
import RestCards from "./Restrocard"
import { useState ,useEffect} from "react"
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom"
import { filterData } from "../utils/helper"
import getRestro from "../utils/getRestro"
import useOnline from "../utils/useOnline"

export const Body =() =>{
  //use State Hook
  const [searchText,setSearchText] = useState("") //return array[variable, functoupdate-var] =useState("default-value")
  const[Filtrestos,setFiltRestos]= useState([])
  const[allRestos,setAllRestos]= useState([])

  
  useEffect(()=>{
    getRestro(setAllRestos,setFiltRestos);
  },[])

  const isOnline = useOnline();

  if(!isOnline) return <h1>Please check your internet connection</h1>

  if(!allRestos) return null;

  return allRestos?.length===0 ? <Shimmer/> : (
    <>
    <div className="body">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText} 
        onChange={(e)=>{ setSearchText(e.target.value) }}
        />
        <button 
        onClick={()=>{
          //filter
          const data = filterData(allRestos,searchText)
          //update
          setFiltRestos(data);
        }}
        >Search</button>
      </div>

      <div className="restaurantlists">{
        Filtrestos.map((rest)=>{
          return <Link to={"/restaurantmenu/"+rest.data.id} key={rest.data.id}><RestCards {...rest.data} /></Link>
        })
      }
      </div>
    </div>

    </>
  )
}

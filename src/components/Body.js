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
    <div className="overflow-hidden">
      <div className="search-container mt-2 self-center bg-purple-100">
        <input type="text" className="bg-slate-100 rounded-sm bg-green-200" placeholder="Search" value={searchText} 
        onChange={(e)=>{ setSearchText(e.target.value) }}
        />
        <button 
        className="bg-purple-400 w-20 rounded-lg "
        onClick={()=>{
          //filter
          const data = filterData(allRestos,searchText)
          //update
          setFiltRestos(data);
        }}
        >Search</button>
      </div>

      <div className="flex  justify-between flex-wrap gap-4 bg-purple-100">{
        Filtrestos.map((rest)=>{
          return <Link to={"/restaurantmenu/"+rest.data.id} key={rest.data.id}><RestCards {...rest.data} /></Link>
        })
      }
      </div>
    </div>

    </>
  )
}

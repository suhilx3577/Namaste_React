import { restroList } from "../constants"
import RestCards from "./Restrocard"
import { useState ,useEffect} from "react"
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom"


function filterData(allRestos,searchText){
  return(
    allRestos.filter((rest)=> rest?.data?.name?.toLowerCase().includes(searchText.toLowerCase()))
  )
}

export const Body =() =>{
  //use State Hook
  const [searchText,setSearchText] = useState("") //return array[variable, functoupdate-var] =useState("default-value")
  const[Filtrestos,setFiltRestos]= useState([])
  const[allRestos,setAllRestos]= useState([])

  
  useEffect(()=>{
    getRestro();
  },[])

  async function getRestro(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0081639&lng=77.7122996&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    setAllRestos(json.data?.cards[2]?.data?.data?.cards)
    setFiltRestos(json.data?.cards[2]?.data?.data?.cards)

    // console.log(json)
  }
  if(!allRestos) return null;

  // if(Filtrestos?.length===0)
  //   return <h1>No match to your search</h1>;

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

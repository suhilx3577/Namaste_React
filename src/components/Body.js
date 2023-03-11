import { restroList } from "../constants"
import RestCards from "./Restrocard"
import { useState } from "react"
export const Body =() =>{

  //use State Hook
  const [searchText,setSearchText] = useState("KFC") //return array[variable, functoupdate-var] =useState("default-value")

  const[restos,setRestos]= useState(restroList)

  function filterData(restroList,searchtxt){
    return(
      restroList.filter((rest)=> rest.data.name.includes(searchText))
    )
  }

  return(
    <>
    <div className="body">

      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText} 
        onChange={(e)=>{
            setSearchText(e.target.value)
          }
        }
        />
        <button 
        onClick={()=>{

          //filter
          const data = filterData(restroList,searchText)
          //update
          setRestos(data);

        }}
        >Search</button>

      </div>

      <div className="restaurantlists">
      {
        restos.map((rest)=>{
          return <RestCards {...rest.data} key={rest.data.id}/>
        })
      }
      </div>

    </div>

    </>
  )
}

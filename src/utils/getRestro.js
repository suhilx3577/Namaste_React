
async function getRestro(setAllRestos, setFiltRestos){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0081639&lng=77.7122996&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    setAllRestos(json.data?.cards[2]?.data?.data?.cards)
    setFiltRestos(json.data?.cards[2]?.data?.data?.cards)

    // console.log(json)
  }


  export default getRestro